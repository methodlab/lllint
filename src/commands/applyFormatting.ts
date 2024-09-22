import * as vscode from 'vscode';
import { NoteTreeDataProvider } from '../providers/NoteTreeProvider';
import { closeDiffAndClearNotes } from '../utils';

export async function applyFormatting(diffPanel: vscode.TextEditor | undefined, noteTreeDataProvider: NoteTreeDataProvider) {
  if (diffPanel && diffPanel.document.uri.scheme === 'mlint-diff') {
    const originalUri = vscode.Uri.parse(diffPanel.document.uri.path);
    const originalDocument = await vscode.workspace.openTextDocument(originalUri);
    const originalEditor = await vscode.window.showTextDocument(originalDocument);

    const formattedContent = diffPanel.document.getText();
    
    await originalEditor.edit(editBuilder => {
      const lastLine = originalDocument.lineAt(originalDocument.lineCount - 1);
      const fullRange = new vscode.Range(
        new vscode.Position(0, 0),
        lastLine.range.end
      );
      editBuilder.replace(fullRange, formattedContent);
    });

    closeDiffAndClearNotes(diffPanel, noteTreeDataProvider);
    vscode.window.showInformationMessage('Formatting changes applied to the original document.');
  }
}