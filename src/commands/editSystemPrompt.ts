import * as vscode from 'vscode';
import * as path from 'path';

export function editSystemPrompt(context: vscode.ExtensionContext) {
  return async () => {
    const promptPath = path.join(context.extensionPath, 'prompts', 'system-prompt.md');
    const document = await vscode.workspace.openTextDocument(promptPath);
    await vscode.window.showTextDocument(document, { viewColumn: vscode.ViewColumn.Beside });
  };
}