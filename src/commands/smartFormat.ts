import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { FormattedDocumentProvider } from '../providers/FormattedDocumentProvider';
import { NoteTreeDataProvider } from '../providers/NoteTreeProvider';
import { formatCodeWithLLM } from '../lib/llm';

function openSettings(filter: string) {
  vscode.commands.executeCommand('workbench.action.openSettings', filter);
}

export async function smartFormat(
  context: vscode.ExtensionContext,
  formattedDocumentProvider: FormattedDocumentProvider,
  noteTreeDataProvider: NoteTreeDataProvider,
  setDiffPanel: (editor: vscode.TextEditor | undefined) => void
) {
  const editor = vscode.window.activeTextEditor;

  if (!editor) {
    vscode.window.showErrorMessage('No active text editor found.');
    return;
  }

  const document = editor.document;

  const config = vscode.workspace.getConfiguration('lllint');
  const apiKey = config.get<string>('apiKey');
  const model = config.get<string>('model') || 'gpt-4o-mini';

  if (!apiKey) {
    const openSettingsAction = 'Open Settings';
    const result = await vscode.window.showErrorMessage(
      'Please set your OpenAI API key in the settings.',
      openSettingsAction
    );
    if (result === openSettingsAction) {
      openSettings('lllint.');
    }
    return;
  }

  const systemPromptPath = path.join(context.extensionPath, 'prompts', 'system-prompt.md');
  const codingGuidelinesPath = path.join(context.extensionPath, 'prompts', 'coding-guidelines.md');

  let systemPrompt: string;
  let codingGuidelines: string;

  try {
    systemPrompt = fs.readFileSync(systemPromptPath, 'utf-8');
    codingGuidelines = fs.readFileSync(codingGuidelinesPath, 'utf-8');
  } catch (err) {
    vscode.window.showErrorMessage('Error reading prompt files. Make sure they exist.' + err);
    return;
  }

  vscode.window.withProgress({
    location: vscode.ProgressLocation.Notification,
    title: "LLLint: Analyzing and formatting...",
    cancellable: false
  }, async () => {
    try {
      const currentCode = editor.document.getText();

      const { formattedCode, notes } = await formatCodeWithLLM(
        currentCode,
        systemPrompt,
        codingGuidelines,
        apiKey,
        model
      );

      const diffTitle = `${document.uri.fsPath} [LLLint formatted]`;

      // Update the content of the virtual document
      formattedDocumentProvider.updateContent(formattedCode);

      // Create a URI for the virtual document
      const formattedUri = vscode.Uri.parse(`lllint-diff:${document.uri.fsPath}`);

      // Show the diff view beside the original document
      await vscode.commands.executeCommand('vscode.diff', document.uri, formattedUri, diffTitle, {
        preview: true,
        preserveFocus: false,
      });

      // Set the diffPanel to track the diff view
      setDiffPanel(vscode.window.activeTextEditor);

      noteTreeDataProvider.updateNotes(notes);

    } catch (error: any) {
      vscode.window.showErrorMessage(`Error during smart formatting: ${error.message}`);
      console.error(error);
    }
  });
}