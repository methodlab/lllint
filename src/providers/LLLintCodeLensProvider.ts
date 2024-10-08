import * as vscode from 'vscode';

export class LLLintCodeLensProvider implements vscode.CodeLensProvider {
  provideCodeLenses(document: vscode.TextDocument): vscode.CodeLens[] {
    if (document.uri.scheme !== 'lllint-diff') {
      return [];
    }

    const range = new vscode.Range(0, 0, 0, 0);
    return [
      new vscode.CodeLens(range, {
        title: "Apply Formatting Changes",
        command: "lllint.applyFormatting"
      }),
      new vscode.CodeLens(range, {
        title: "Discard Formatting Changes",
        command: "lllint.discardFormatting"
      })
    ];
  }
}