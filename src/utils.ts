import * as vscode from 'vscode';
import { NoteTreeDataProvider } from './providers/NoteTreeProvider';

export async function closeDiffAndClearNotes(diffPanel: vscode.TextEditor | undefined, noteTreeDataProvider: NoteTreeDataProvider) {
  if (diffPanel) {
    await vscode.window.showTextDocument(diffPanel.document, { viewColumn: diffPanel.viewColumn });
    await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
  }
  noteTreeDataProvider.clearNotes();
}
