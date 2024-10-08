import * as vscode from 'vscode';
import * as commands from './commands';
import * as providers from './providers';

export function activate(context: vscode.ExtensionContext) {
  console.log("Activating lllint");

  let diffPanel: vscode.TextEditor | undefined;
  const noteTreeDataProvider = new providers.NoteTreeDataProvider(context);
  const treeView = vscode.window.createTreeView('lllintMain', {
    treeDataProvider: noteTreeDataProvider,
    showCollapseAll: true
  });

  const formattedDocumentProvider = new providers.FormattedDocumentProvider();
  const registration = vscode.workspace.registerTextDocumentContentProvider('lllint-diff', formattedDocumentProvider);

  const codeLensProvider = new providers.LLLintCodeLensProvider();
  const codeLensRegistration = vscode.languages.registerCodeLensProvider({ scheme: 'lllint-diff' }, codeLensProvider);

  context.subscriptions.push(treeView, registration, codeLensRegistration);

  context.subscriptions.push(
    vscode.commands.registerCommand('lllint.editSystemPrompt', commands.editSystemPrompt(context)),
    vscode.commands.registerCommand('lllint.editCodingGuidelines', commands.editCodingGuidelines(context)),
    vscode.commands.registerCommand('lllint.applyFormatting', () => commands.applyFormatting(diffPanel, noteTreeDataProvider)),
    vscode.commands.registerCommand('lllint.discardFormatting', () => commands.discardFormatting(diffPanel, noteTreeDataProvider)),
    vscode.commands.registerCommand('lllint.smartFormat', () => commands.smartFormat(context, formattedDocumentProvider, noteTreeDataProvider, (editor) => { diffPanel = editor; })),
    vscode.commands.registerCommand('lllint.renumberCodingGuidelines', commands.renumberCodingGuidelines(context))
  );
}

export function deactivate() {}