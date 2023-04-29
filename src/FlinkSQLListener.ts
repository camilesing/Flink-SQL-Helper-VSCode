// Generated from gen/FlinkSQL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `FlinkSQLParser`.
 */
export interface FlinkSQLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `FlinkSQLParser.statementList`.
	 * @param ctx the parse tree
	 */
	enterStatementList?: (ctx: StatementListContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.statementList`.
	 * @param ctx the parse tree
	 */
	exitStatementList?: (ctx: StatementListContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.createTableStatement`.
	 * @param ctx the parse tree
	 */
	enterCreateTableStatement?: (ctx: CreateTableStatementContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.createTableStatement`.
	 * @param ctx the parse tree
	 */
	exitCreateTableStatement?: (ctx: CreateTableStatementContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.insertStatement`.
	 * @param ctx the parse tree
	 */
	enterInsertStatement?: (ctx: InsertStatementContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.insertStatement`.
	 * @param ctx the parse tree
	 */
	exitInsertStatement?: (ctx: InsertStatementContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.selectStatement`.
	 * @param ctx the parse tree
	 */
	enterSelectStatement?: (ctx: SelectStatementContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.selectStatement`.
	 * @param ctx the parse tree
	 */
	exitSelectStatement?: (ctx: SelectStatementContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.selectItem`.
	 * @param ctx the parse tree
	 */
	enterSelectItem?: (ctx: SelectItemContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.selectItem`.
	 * @param ctx the parse tree
	 */
	exitSelectItem?: (ctx: SelectItemContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.fromItem`.
	 * @param ctx the parse tree
	 */
	enterFromItem?: (ctx: FromItemContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.fromItem`.
	 * @param ctx the parse tree
	 */
	exitFromItem?: (ctx: FromItemContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.columnDefinition`.
	 * @param ctx the parse tree
	 */
	enterColumnDefinition?: (ctx: ColumnDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.columnDefinition`.
	 * @param ctx the parse tree
	 */
	exitColumnDefinition?: (ctx: ColumnDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	enterColumnConstraint?: (ctx: ColumnConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	exitColumnConstraint?: (ctx: ColumnConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.dataType`.
	 * @param ctx the parse tree
	 */
	enterDataType?: (ctx: DataTypeContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.dataType`.
	 * @param ctx the parse tree
	 */
	exitDataType?: (ctx: DataTypeContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.tableOption`.
	 * @param ctx the parse tree
	 */
	enterTableOption?: (ctx: TableOptionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.tableOption`.
	 * @param ctx the parse tree
	 */
	exitTableOption?: (ctx: TableOptionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.connectorName`.
	 * @param ctx the parse tree
	 */
	enterConnectorName?: (ctx: ConnectorNameContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.connectorName`.
	 * @param ctx the parse tree
	 */
	exitConnectorName?: (ctx: ConnectorNameContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.formatName`.
	 * @param ctx the parse tree
	 */
	enterFormatName?: (ctx: FormatNameContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.formatName`.
	 * @param ctx the parse tree
	 */
	exitFormatName?: (ctx: FormatNameContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.numericLiteral`.
	 * @param ctx the parse tree
	 */
	enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.numericLiteral`.
	 * @param ctx the parse tree
	 */
	exitNumericLiteral?: (ctx: NumericLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.columnName`.
	 * @param ctx the parse tree
	 */
	enterColumnName?: (ctx: ColumnNameContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.columnName`.
	 * @param ctx the parse tree
	 */
	exitColumnName?: (ctx: ColumnNameContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.tableName`.
	 * @param ctx the parse tree
	 */
	enterTableName?: (ctx: TableNameContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.tableName`.
	 * @param ctx the parse tree
	 */
	exitTableName?: (ctx: TableNameContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.alias`.
	 * @param ctx the parse tree
	 */
	enterAlias?: (ctx: AliasContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.alias`.
	 * @param ctx the parse tree
	 */
	exitAlias?: (ctx: AliasContext) => void;
}

