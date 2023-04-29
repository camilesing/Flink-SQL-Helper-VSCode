// ...
import { FlinkSQLVisitor } from './FlinkSQLVisitor'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { StatementListContext } from "./FlinkSQLParser";
import { StatementContext } from "./FlinkSQLParser";
import { CreateTableStatementContext } from "./FlinkSQLParser";
import { InsertStatementContext } from "./FlinkSQLParser";
import { SelectStatementContext } from "./FlinkSQLParser";
import { SelectItemContext } from "./FlinkSQLParser";
import { FromItemContext } from "./FlinkSQLParser";
import { ColumnDefinitionContext } from "./FlinkSQLParser";
import { ColumnConstraintContext } from "./FlinkSQLParser";
import { DataTypeContext } from "./FlinkSQLParser";
import { TableOptionContext } from "./FlinkSQLParser";
import { ConnectorNameContext } from "./FlinkSQLParser";
import { FormatNameContext } from "./FlinkSQLParser";
import { ExpressionContext } from "./FlinkSQLParser";
import { NumericLiteralContext } from "./FlinkSQLParser";
import { StringLiteralContext } from "./FlinkSQLParser";
import { ColumnNameContext } from "./FlinkSQLParser";
import { TableNameContext } from "./FlinkSQLParser";
import { IdentifierContext } from "./FlinkSQLParser";
import { AliasContext } from "./FlinkSQLParser";
import * as vscode from 'vscode';

export class GrammarError extends Error {
	private startIndex: number;
	private stopIndex: number;

	getStartIndex(): number {
		return this.startIndex;
	}

	getStopIndex(): number {
		return this.stopIndex;
	}

	constructor(errorMsg: string, startIndex: number, stopIndex: number) {
		super(errorMsg);
		this.startIndex = startIndex;
		this.stopIndex = stopIndex;
	}

}

// Extend the AbstractParseTreeVisitor to get default visitor behaviour
export class MyFlinkSqlVisitor extends AbstractParseTreeVisitor<void> implements FlinkSQLVisitor<void> {

	// 用于存储语法错误和警告的数组
	private errors: GrammarError[] = [];

	// 获取收集到的语法错误和警告
	getErrors(): GrammarError[] {
		return this.errors;
	}

	// 通用的访问方法，用于处理所有未实现的规则
	protected defaultResult(): void {
		return;
	}

	// 在适当的方法中添加错误收集逻辑
	// 例如，如果在访问某个规则时检测到语法错误，可以将错误添加到 errors 数组中
	private addError(error: GrammarError): void {
		this.errors.push(error);
	}



	visitSelectItem(ctx: SelectItemContext): void {
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
			} else {
				endPosition = new vscode.Position(columnNameToken.line - 1, columnNameToken.charPositionInLine + columnNameToken.text.length);
			}


			this.addError(new GrammarError(`Invalid column name: ${columnName.text}`, startPosition.line, endPosition.line));
		}

		// 访问子节点
		ctx.children?.forEach(child => {
			this.visit(child);
		});
	}


	visitInsertStatement(ctx: InsertStatementContext): void {
		// 获取列名
		const columnName = ctx.columnName();

		// 访问子节点
		ctx.children?.forEach(child => {
			this.visit(child);
		});
	}

}

