import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { jumpToLine } from '../commands/jumpToLine';

export class NoteTreeItem extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    public readonly lineNumber?: number,
    public readonly guidelineNumber?: string,
    public readonly message?: string,
    public readonly guidelineText?: string
  ) {
    super(label, collapsibleState);
    this.tooltip = this.message;
    if (this.lineNumber) {
      this.description = `line ${this.lineNumber}`;
      this.command = {
        command: 'lllint.jumpToLine',
        title: 'Jump to Line',
        arguments: [this.lineNumber]
      };
    }
  }
}

export class GuidelineItem extends vscode.TreeItem {
  constructor(public readonly label: string, message: string, guidelineNumber: string) {
    super(label, vscode.TreeItemCollapsibleState.None);
    this.description = message;
    this.command = {
      command: 'lllint.editCodingGuidelines',
      title: 'Edit Coding Guidelines',
      arguments: [guidelineNumber]
    };
  }
}

export class NoteTreeDataProvider implements vscode.TreeDataProvider<vscode.TreeItem> {
  private _onDidChangeTreeData: vscode.EventEmitter<NoteTreeItem | undefined | null | void> = new vscode.EventEmitter<NoteTreeItem | undefined | null | void>();
  readonly onDidChangeTreeData: vscode.Event<NoteTreeItem | undefined | null | void> = this._onDidChangeTreeData.event;

  private notes: Array<{ guidelineNumber: string; message: string; lineNumber?: number }> = [];
  private guidelinesMap: Map<string, string> = new Map();

  constructor(private context: vscode.ExtensionContext) {
    this.loadGuidelines();
    this.registerJumpToLineCommand();
  }

  private registerJumpToLineCommand() {
    this.context.subscriptions.push(
      vscode.commands.registerCommand('lllint.jumpToLine', (lineNumber: number) => {
        jumpToLine(lineNumber);
      })
    );
  }

  private loadGuidelines() {
    const guidelinesPath = path.join(this.context.extensionPath, 'prompts', 'coding-guidelines.md');
    const guidelinesContent = fs.readFileSync(guidelinesPath, 'utf-8');
    const lines = guidelinesContent.split('\n');
    
    lines.forEach(line => {
      const match = line.match(/^- (.+) \[(\d+(?:\.\d+)*)\]$/);
      if (match) {
        this.guidelinesMap.set(match[2], match[1]);
      }
    });
  }

  getTreeItem(element: NoteTreeItem): vscode.TreeItem {
    return element;
  }

  getChildren(element?: NoteTreeItem): Thenable<vscode.TreeItem[]> {
    if (!element) {
      return Promise.resolve(
        this.notes.map(note => {
          const guidelineText = this.guidelinesMap.get(note.guidelineNumber);
          const collapsibleState = guidelineText && guidelineText.trim() !== ''
            ? vscode.TreeItemCollapsibleState.Collapsed
            : vscode.TreeItemCollapsibleState.None;
          
          const noteItem = new NoteTreeItem(
            this.getNoteLabel(note),
            collapsibleState,
            note.lineNumber,
            note.guidelineNumber,
            note.message,
            guidelineText
          );
          return noteItem;
        })
      );
    } else if (element.guidelineText && element.guidelineText.trim() !== '') {
      const guidelineItem = new GuidelineItem(element.guidelineNumber || '', element.guidelineText, element.guidelineNumber || '');
      guidelineItem.contextValue = 'guideline';
      guidelineItem.iconPath = new vscode.ThemeIcon('arrow-small-right');
      return Promise.resolve([guidelineItem]);
    }
    return Promise.resolve([]);
  }

  private getNoteLabel(note: { guidelineNumber: string; message: string; lineNumber?: number }): string {
    if (note.lineNumber) {
      return new vscode.MarkdownString(`${note.message}`).value;
    }
    return note.message;
  }

  updateNotes(notes: Array<{ guidelineNumber: string; message: string; lineNumber?: number }>) {
    this.notes = notes.sort((a, b) => {
      if (a.lineNumber && b.lineNumber) {
        return a.lineNumber - b.lineNumber;
      }
      if (a.lineNumber) {return -1;}
      if (b.lineNumber) {return 1;}
      return 0;
    });
    this._onDidChangeTreeData.fire();
  }

  clearNotes() {
    this.notes = [];
    this._onDidChangeTreeData.fire();
  }
}