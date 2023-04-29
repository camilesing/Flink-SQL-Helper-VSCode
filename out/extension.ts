import * as vscode from 'vscode';
import { ExtensionContext } from 'vscode';
import { FlinkSQLLexer } from './FlinkSqlLexer'; // 导入生成的词法分析器
import { FlinkSQLParser } from './FlinkSQLParser''; // 导入生成的解析器
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { Vi } from './FlinkSQLVisitor'; // 导入生成的访问器

export function activate(context: ExtensionContext) {
    // 创建诊断集合，用于报告语法错误和警告
    const diagnosticCollection = vscode.languages.createDiagnosticCollection('flinksql');

    // 监听文件更改事件
    vscode.workspace.onDidChangeTextDocument((event: vscode.TextDocumentChangeEvent) => {
        // 检查文件是否为Flink SQL文件
        if (event.document.languageId === 'flinksql') {
            // 清除之前的诊断信息
            diagnosticCollection.clear();

            // 使用生成的词法分析器和解析器进行语法检查
            const inputStream = new ANTLRInputStream(event.document.getText());
            const lexer = new FlinkSqlLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new FlinkSqlParser(tokenStream);

            // 解析文件内容并获取语法树
            const parseTree = parser.sqlStatements();

            // 创建访问器实例并访问语法树，以获取语法错误和警告
            const visitor = new FlinkSqlVisitor();
            const errors = visitor.visit(parseTree);

            // 使用VSCode的诊断API报告语法错误和警告
            const diagnostics: vscode.Diagnostic[] = errors.map(error => {
                const range = new vscode.Range(
                    event.document.positionAt(error.startIndex),
                    event.document.positionAt(error.stopIndex + 1)
                );
                const diagnostic = new vscode.Diagnostic(range, error.message, vscode.DiagnosticSeverity.Error);
                return diagnostic;
            });

            diagnosticCollection.set(event.document.uri, diagnostics);
        }
    });

    // 注册插件的其他命令和功能...
}
