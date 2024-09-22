import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function editCodingGuidelines(context: vscode.ExtensionContext) {
  return async (guidelineNumber?:string) => {
    const promptPath = path.join(context.extensionPath, 'prompts', 'coding-guidelines.md');
    const document = await vscode.workspace.openTextDocument(promptPath);
    const editor = await vscode.window.showTextDocument(document);

    if (guidelineNumber) {
      const content = fs.readFileSync(promptPath, 'utf-8');
      const lines = content.split('\n');
      const targetLine = lines.findIndex(line => line.includes(`[${guidelineNumber}]`));

      if (targetLine !== -1) {
        const position = new vscode.Position(targetLine, 0);
        editor.selection = new vscode.Selection(position, position);
        editor.revealRange(new vscode.Range(position, position), vscode.TextEditorRevealType.InCenter);
      }
    }
  };
}