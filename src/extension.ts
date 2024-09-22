import * as vscode from 'vscode';
import * as commands from './commands';
import * as providers from './providers';

export function activate(context: vscode.ExtensionContext) {
  console.log("Activating mlint");

  let diffPanel: vscode.TextEditor | undefined;
  const noteTreeDataProvider = new providers.NoteTreeDataProvider(context);
  const treeView = vscode.window.createTreeView('mlintMain', {
    treeDataProvider: noteTreeDataProvider,
    showCollapseAll: false
  });

  // Move the tree view to the bottom panel with a delay
  setTimeout(() => {
    vscode.commands.executeCommand('workbench.view.extension.mlintMain');
    vscode.commands.executeCommand('workbench.action.moveViewToPanel', 'workbench.view.extension.mlintMain');
  }, 1000);

  const formattedDocumentProvider = new providers.FormattedDocumentProvider();
  const registration = vscode.workspace.registerTextDocumentContentProvider('mlint-diff', formattedDocumentProvider);

  const codeLensProvider = new providers.MLintCodeLensProvider();
  const codeLensRegistration = vscode.languages.registerCodeLensProvider({ scheme: 'mlint-diff' }, codeLensProvider);

  context.subscriptions.push(treeView, registration, codeLensRegistration);

  // Register commands
  context.subscriptions.push(
    vscode.commands.registerCommand('mlint.editSystemPrompt', commands.editSystemPrompt(context)),
    vscode.commands.registerCommand('mlint.editCodingGuidelines', commands.editCodingGuidelines(context)),
    vscode.commands.registerCommand('mlint.applyFormatting', () => commands.applyFormatting(diffPanel, noteTreeDataProvider)),
    vscode.commands.registerCommand('mlint.discardFormatting', () => commands.discardFormatting(diffPanel, noteTreeDataProvider)),
    vscode.commands.registerCommand('mlint.jumpToLine', commands.jumpToLine),
    vscode.commands.registerCommand('mlint.smartFormat', () => commands.smartFormat(context, formattedDocumentProvider, noteTreeDataProvider, (editor) => { diffPanel = editor; })),
    vscode.commands.registerCommand('mlint.renumberCodingGuidelines', commands.renumberCodingGuidelines(context))
  );
}

export function deactivate() {}