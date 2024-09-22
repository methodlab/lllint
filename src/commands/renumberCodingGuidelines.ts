import * as vscode from 'vscode';

export function renumberCodingGuidelines(context: vscode.ExtensionContext) {
  return async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('No active text editor found.');
      return;
    }

    if (editor.document.languageId !== 'markdown') {
      vscode.window.showErrorMessage('This command only works with Markdown files.');
      return;
    }

    const document = editor.document;
    const text = document.getText();
    const lines = text.split('\n');
    let headingCounters: number[] = [0];
    let bulletCounter = 0;
    let currentHeadingLevel = 0;

    const content = lines
      .map((line) => {
        const headingMatch = line.match(/^(#+)\s*(.*?)\s*(\[\d+(\.\d+)*\])?\s*$/);
        if (headingMatch) {
          const level = headingMatch[1].length;
          const text = headingMatch[2].trim();
          
          if (level === 1) {
            return line; // Skip top-level headings
          }
          
          currentHeadingLevel = level;
          if (level === 2) {
            headingCounters = [headingCounters[0] + 1];
          } else {
            headingCounters = headingCounters.slice(0, level - 1);
            headingCounters[level - 2] = (headingCounters[level - 2] || 0) + 1;
          }
          bulletCounter = 0; // Reset bullet counter for new heading
          const numbering = `[${headingCounters.join('.')}]`;
          return `${headingMatch[1]} ${text} ${numbering}`;
        }

        const bulletMatch = line.match(/^(\s*[-*])\s+(.*?)\s*(\[\d+(\.\d+)*\])?\s*$/);
        if (bulletMatch && currentHeadingLevel > 1) {
          const bullet = bulletMatch[1];
          const text = bulletMatch[2].trim();
          const indentLevel = bullet.length - 1; // Count spaces before bullet
          
          if (indentLevel === 0) { // Only number top-level bullets
            bulletCounter++;
            const numbering = `[${[...headingCounters, bulletCounter].join('.')}]`;
            return `${bullet} ${text} ${numbering}`;
          }
        }
        return line;
      })
      .join('\n');

    const fullRange = new vscode.Range(
      document.positionAt(0),
      document.positionAt(text.length)
    );

    await editor.edit((editBuilder) => {
      editBuilder.replace(fullRange, content);
    });

    vscode.window.showInformationMessage('Document has been renumbered.');
  };
}
