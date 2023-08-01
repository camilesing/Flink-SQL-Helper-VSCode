import * as vscode from 'vscode';

export class FlinkSQLRenameProvider implements vscode.RenameProvider {
    provideRenameEdits(document: vscode.TextDocument, position: vscode.Position, newName: string, token: vscode.CancellationToken): vscode.ProviderResult<vscode.WorkspaceEdit> {
        const wordRange = document.getWordRangeAtPosition(position);
        const originalWord = document.getText(wordRange);

        const edit = new vscode.WorkspaceEdit();
        for (let i = 0; i < document.lineCount; i++) {
            const line = document.lineAt(i);
            const start = line.text.indexOf(originalWord);
            if (start >= 0) {
                // 检查单词前后是否有其他字符
                const isWordBoundary = (index: number) => {
                    return index < 0 || index >= line.text.length || /\W/.test(line.text[index]);
                };
                if (isWordBoundary(start - 1) && isWordBoundary(start + originalWord.length)) {
                    edit.replace(document.uri, new vscode.Range(new vscode.Position(i, start), new vscode.Position(i, start + originalWord.length)), newName);
                }
            }
        }

        return edit;
    }
}
