// ...
import { FlinkSQLVisitor } from './FlinkSQLVisitor'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'

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
export class MyFlinkSQLVisitor extends AbstractParseTreeVisitor<void> implements FlinkSQLVisitor<void> {

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

}

