import * as vscode from 'vscode';
import { NoteTreeDataProvider } from '../providers/NoteTreeProvider';
import { closeDiffAndClearNotes } from '../utils';

export function discardFormatting(diffPanel: vscode.TextEditor | undefined, noteTreeDataProvider: NoteTreeDataProvider) {
  closeDiffAndClearNotes(diffPanel, noteTreeDataProvider);
  vscode.window.showInformationMessage('Formatting changes discarded.');
}