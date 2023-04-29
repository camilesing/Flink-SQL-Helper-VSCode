import * as vscode from 'vscode';
import { ExtensionContext } from 'vscode';
import { FlinkSQLLexer } from './FlinkSQLLexer'; // 导入生成的词法分析器
import { FlinkSQLParser } from './FlinkSQLParser'; // 导入生成的解析器
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { MyFlinkSqlVisitor } from './MyGrammar'; // 导入生成的访问器


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
    return text;
    //return sqlFormatter.format(text, config);
};

export function activate(context: ExtensionContext) {

    vscode.languages.registerDocumentRangeFormattingEditProvider('flink-sql', {
        provideDocumentRangeFormattingEdits: (
            document: vscode.TextDocument,
            range: vscode.Range,
            options: vscode.FormattingOptions
        ): vscode.TextEdit[] => [
                vscode.TextEdit.replace(range, format(document.getText(range))),
            ],
    });
 

    // 创建诊断集合，用于报告语法错误和警告
    const diagnosticCollection = vscode.languages.createDiagnosticCollection('flink-sql');

    // 监听文件更改事件
    vscode.workspace.onDidChangeTextDocument((event: vscode.TextDocumentChangeEvent) => {
        console.log("hello onDidChangeTextDocument");
        // 检查文件是否为Flink SQL文件
        if (event.document.languageId === 'flink-sql') {
            console.log("entry logcial");
            // 清除之前的诊断信息
            diagnosticCollection.clear();

            // 使用生成的词法分析器和解析器进行语法检查
            const inputStream = new ANTLRInputStream(event.document.getText());
            const lexer = new FlinkSQLLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new FlinkSQLParser(tokenStream);
            parser.compileParseTreePattern
            // 解析文件内容并获取语法树
            const parseTree = parser.statement();

            // 创建访问器实例并访问语法树，以获取语法错误和警告
            const visitor = new MyFlinkSqlVisitor();
            visitor.visit(parseTree);
            const errors = visitor.getErrors();
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

    // 注册插件的其他命令和功能...
}
