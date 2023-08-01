import * as vscode from 'vscode';

export class FlinkSQLReferenceProvider implements vscode.ReferenceProvider {
    provideReferences(document: vscode.TextDocument, position: vscode.Position, options: { includeDeclaration: boolean }, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Location[]> {
        const wordRange = document.getWordRangeAtPosition(position);
        if (!wordRange) {
            return [];
        }
        const word = document.getText(wordRange);

        const references: vscode.Location[] = [];

        for (let line = 0; line < document.lineCount; line++) {
            const lineOfCode = document.lineAt(line);
            const index = lineOfCode.text.indexOf(word);

            if (index >= 0) {
                const referencePosition = new vscode.Position(line, index);
                const referenceRange = document.getWordRangeAtPosition(referencePosition);
                if (referenceRange) {
                    const referenceLocation = new vscode.Location(document.uri, referenceRange);
                    references.push(referenceLocation);
                }
            }
        }

        return references;
    }
}