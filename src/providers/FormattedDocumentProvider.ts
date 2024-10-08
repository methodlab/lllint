import * as vscode from 'vscode';

export class FormattedDocumentProvider implements vscode.TextDocumentContentProvider {
  private _onDidChange = new vscode.EventEmitter<vscode.Uri>();
  onDidChange = this._onDidChange.event;

  private _content: string = '';

  provideTextDocumentContent(uri: vscode.Uri): string {
    return this._content;
  }

  updateContent(content: string) {
    this._content = content;
    this._onDidChange.fire(vscode.Uri.parse('lllint-diff:formatted'));
  }
}