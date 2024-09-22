import * as vscode from 'vscode';

export async function jumpToLine(lineNumber: number) {
  const visibleEditors = vscode.window.visibleTextEditors;
  
  // Find the original (left) editor
  const originalEditor = visibleEditors.find(
    editor => editor.document.uri.scheme !== 'mlint-diff'
  );

  if (originalEditor) {
    // Highlight the line in the original (left) editor
    const line = originalEditor.document.lineAt(lineNumber - 1);
    const selection = new vscode.Selection(line.range.start, line.range.end);
    originalEditor.selection = selection;
    originalEditor.revealRange(line.range, vscode.TextEditorRevealType.InCenter);
  }
}