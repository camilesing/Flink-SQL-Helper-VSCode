// Generated from gen/FlinkSQL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FlinkSQLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface FlinkSQLVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `FlinkSQLParser.statementList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementList?: (ctx: StatementListContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.createTableStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTableStatement?: (ctx: CreateTableStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.insertStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertStatement?: (ctx: InsertStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.selectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectStatement?: (ctx: SelectStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.selectItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectItem?: (ctx: SelectItemContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.fromItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromItem?: (ctx: FromItemContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.columnDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnDefinition?: (ctx: ColumnDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.columnConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnConstraint?: (ctx: ColumnConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.dataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataType?: (ctx: DataTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.tableOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOption?: (ctx: TableOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.connectorName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectorName?: (ctx: ConnectorNameContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.formatName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormatName?: (ctx: FormatNameContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.numericLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteral?: (ctx: NumericLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.columnName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnName?: (ctx: ColumnNameContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.tableName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableName?: (ctx: TableNameContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.alias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlias?: (ctx: AliasContext) => Result;
}

