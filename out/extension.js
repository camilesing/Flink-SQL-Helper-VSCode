"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const FlinkSQLLexer_1 = require("./FlinkSQLLexer"); // 导入生成的词法分析器
const FlinkSQLParser_1 = require("./FlinkSQLParser"); // 导入生成的解析器
const antlr4ts_1 = require("antlr4ts");
const MyGrammar_1 = require("./MyGrammar"); // 导入生成的访问器
const config = {
    indent: ' '.repeat(2),
    language: 'fql',
    uppercase: true,
    linesBetweenQueries: 2,
};
const format = (text) => {
    return text;
    //return sqlFormatter.format(text, config);
};
function activate(context) {
    vscode.languages.registerDocumentRangeFormattingEditProvider('flink-sql', {
        provideDocumentRangeFormattingEdits: (document, range, options) => [
            vscode.TextEdit.replace(range, format(document.getText(range))),
        ],
    });
    vscode.languages.registerDocumentRangeFormattingEditProvider('fql', {
        provideDocumentRangeFormattingEdits: (document, range, options) => [
            vscode.TextEdit.replace(range, format(document.getText(range))),
        ],
    });
    // 创建诊断集合，用于报告语法错误和警告
    const diagnosticCollection = vscode.languages.createDiagnosticCollection('flinksql');
    // 监听文件更改事件
    vscode.workspace.onDidChangeTextDocument((event) => {
        // 检查文件是否为Flink SQL文件
        if (event.document.languageId === 'flinksql') {
            // 清除之前的诊断信息
            diagnosticCollection.clear();
            // 使用生成的词法分析器和解析器进行语法检查
            const inputStream = new antlr4ts_1.ANTLRInputStream(event.document.getText());
            const lexer = new FlinkSQLLexer_1.FlinkSQLLexer(inputStream);
            const tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
            const parser = new FlinkSQLParser_1.FlinkSQLParser(tokenStream);
            parser.compileParseTreePattern;
            // 解析文件内容并获取语法树
            const parseTree = parser.statement();
            // 创建访问器实例并访问语法树，以获取语法错误和警告
            const visitor = new MyGrammar_1.MyFlinkSqlVisitor();
            visitor.visit(parseTree);
            const errors = visitor.getErrors();
            // 使用VSCode的诊断API报告语法错误和警告
            const diagnostics = errors.map(error => {
                const range = new vscode.Range(event.document.positionAt(error.getStartIndex()), event.document.positionAt(error.getStopIndex() + 1));
                const diagnostic = new vscode.Diagnostic(range, error.message, vscode.DiagnosticSeverity.Error);
                return diagnostic;
            });
            diagnosticCollection.set(event.document.uri, diagnostics);
        }
    });
    // 注册插件的其他命令和功能...
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map