import * as vscode from 'vscode';
import { ExtensionContext } from 'vscode';
import { FlinkSQLLexer } from './FlinkSQLLexer'; // 导入生成的词法分析器
import { FlinkSQLParser } from './FlinkSQLParser'; // 导入生成的解析器
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { MyFlinkSqlVisitor } from './MyGrammar'; // 导入生成的访问器
import { ParserErrorListener, RecognitionException, Recognizer } from 'antlr4ts';
const sqlFormatter = require('sql-formatter-plus');

interface Config {
    indent: string;
    language: string;
    uppercase: boolean;
    linesBetweenQueries: number;
}

const config: Config = {
    indent: ' '.repeat(2),
    language: 'fql',
    uppercase: true,
    linesBetweenQueries: 2,
};

const format = (text: string): string => {
    return sqlFormatter.format(text, config);
};

const selector = 'flink-sql'

export function activate(context: ExtensionContext) {

    // 获取初始配置
    updateFeatureStatus();

    // 监听配置更改事件
    context.subscriptions.push(
        vscode.workspace.onDidChangeConfiguration((e) => {
            if (e.affectsConfiguration('flink-sql-grammar-check.enable')) {
                updateFeatureStatus();
            }
        })
    );

    vscode.languages.registerDocumentRangeFormattingEditProvider(selector, {
        provideDocumentRangeFormattingEdits: (
            document: vscode.TextDocument,
            range: vscode.Range,
            options: vscode.FormattingOptions
        ): vscode.TextEdit[] => [
                vscode.TextEdit.replace(range, format(document.getText(range))),
            ],
    });
    context.subscriptions.push(vscode.languages.registerRenameProvider(selector, new MyRenameProvider()));

    // 注册插件的其他命令和功能...
}

function updateFeatureStatus() {

    if (vscode.workspace.getConfiguration('flink-sql-grammar-check').get('enable')) {
        // 创建诊断集合，用于报告语法错误和警告
        const diagnosticCollection = vscode.languages.createDiagnosticCollection('flink-sql');

        // 监听文件更改事件
        vscode.workspace.onDidChangeTextDocument((event: vscode.TextDocumentChangeEvent) => {
            // 检查文件是否为Flink SQL文件
            if (event.document.languageId === 'flink-sql') {
                // 清除之前的诊断信息
                diagnosticCollection.clear();

                // 使用生成的词法分析器和解析器进行语法检查
                const inputStream = new ANTLRInputStream(event.document.getText());
                const lexer = new FlinkSQLLexer(inputStream);
                const tokenStream = new CommonTokenStream(lexer);
                const parser = new FlinkSQLParser(tokenStream);
                parser.removeErrorListeners();
                parser.addErrorListener({
                    syntaxError: (recognizer: Recognizer<any, any>, offendingSymbol: any, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined): void => {
                        vscode.window.showInformationMessage("parser error: line " + line + " position: " + charPositionInLine + " msg: " + msg);
                    },
                })
                parser.compileParseTreePattern
                // 解析文件内容并获取语法树
                const parseTree = parser.program();

                // 创建访问器实例并访问语法树，以获取语法错误和警告
                const visitor = new MyFlinkSqlVisitor();
                visitor.visit(parseTree);
                const errors = visitor.getErrors();
                console.log("visitor errors: " + errors);
                // 使用VSCode的诊断API报告语法错误和警告
                const diagnostics: vscode.Diagnostic[] = errors.map(error => {
                    const range = new vscode.Range(

                        event.document.positionAt(error.getStartIndex()),
                        event.document.positionAt(error.getStopIndex() + 1)
                    );
                    const diagnostic = new vscode.Diagnostic(range, error.message, vscode.DiagnosticSeverity.Error);
                    return diagnostic;
                });

                diagnosticCollection.set(event.document.uri, diagnostics);
            }
        });
    }
}


class MyRenameProvider implements vscode.RenameProvider {
    provideRenameEdits(document: vscode.TextDocument, position: vscode.Position, newName: string, token: vscode.CancellationToken): vscode.ProviderResult<vscode.WorkspaceEdit> {
        const wordRange = document.getWordRangeAtPosition(position);
        const originalWord = document.getText(wordRange);

        const edit = new vscode.WorkspaceEdit();
        for (let i = 0; i < document.lineCount; i++) {
            const line = document.lineAt(i);
            const start = line.text.indexOf(originalWord);
            if (start >= 0) {
                edit.replace(document.uri, new vscode.Range(new vscode.Position(i, start), new vscode.Position(i, start + originalWord.length)), newName);
            }
        }

        return edit;
    }
}