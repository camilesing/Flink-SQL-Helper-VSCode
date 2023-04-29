"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyFlinkSqlVisitor = exports.GrammarError = void 0;
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const vscode = require("vscode");
class GrammarError extends Error {
    getStartIndex() {
        return this.startIndex;
    }
    getStopIndex() {
        return this.stopIndex;
    }
    constructor(errorMsg, startIndex, stopIndex) {
        super(errorMsg);
        this.startIndex = startIndex;
        this.stopIndex = stopIndex;
    }
}
exports.GrammarError = GrammarError;
// Extend the AbstractParseTreeVisitor to get default visitor behaviour
class MyFlinkSqlVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    constructor() {
        super(...arguments);
        // 用于存储语法错误和警告的数组
        this.errors = [];
    }
    // 获取收集到的语法错误和警告
    getErrors() {
        return this.errors;
    }
    // 通用的访问方法，用于处理所有未实现的规则
    defaultResult() {
        return;
    }
    // 在适当的方法中添加错误收集逻辑
    // 例如，如果在访问某个规则时检测到语法错误，可以将错误添加到 errors 数组中
    addError(error) {
        this.errors.push(error);
    }
    visitSelectItem(ctx) {
        // 获取列名
        const columnName = ctx.columnName();
        // 检查列名是否包含非法字符（例如空格）
        if (columnName && /\s/.test(columnName.text)) {
            const columnNameToken = columnName.start;
            // 创建VSCode的Position对象
            const startPosition = new vscode.Position(columnNameToken.line - 1, columnNameToken.charPositionInLine);
            var endPosition;
            if (columnNameToken.text == null) {
                endPosition = new vscode.Position(columnNameToken.line - 1, columnNameToken.charPositionInLine);
            }
            else {
                endPosition = new vscode.Position(columnNameToken.line - 1, columnNameToken.charPositionInLine + columnNameToken.text.length);
            }
            this.addError(new GrammarError(`Invalid column name: ${columnName.text}`, startPosition.line, endPosition.line));
        }
        // 访问子节点
        ctx.children?.forEach(child => {
            this.visit(child);
        });
    }
    visitInsertStatement(ctx) {
        // 获取列名
        const columnName = ctx.columnName();
        // 访问子节点
        ctx.children?.forEach(child => {
            this.visit(child);
        });
    }
}
exports.MyFlinkSqlVisitor = MyFlinkSqlVisitor;
//# sourceMappingURL=MyGrammar.js.map