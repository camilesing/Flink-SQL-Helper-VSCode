// Generated from gen/FlinkSQL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { Values_caluseContext } from "./FlinkSQLParser";
import { Sub_queryContext } from "./FlinkSQLParser";
import { Union_queryContext } from "./FlinkSQLParser";
import { Common_selectContext } from "./FlinkSQLParser";
import { UnquotedIdentifierAlternativeContext } from "./FlinkSQLParser";
import { QuotedIdentifierAlternativeContext } from "./FlinkSQLParser";
import { NonReservedKeywordsAlternativeContext } from "./FlinkSQLParser";
import { UrefVarAlternativeContext } from "./FlinkSQLParser";
import { ValueExpressionDefaultContext } from "./FlinkSQLParser";
import { ArithmeticUnaryContext } from "./FlinkSQLParser";
import { ArithmeticBinaryContext } from "./FlinkSQLParser";
import { ComparisonContext } from "./FlinkSQLParser";
import { SearchedCaseContext } from "./FlinkSQLParser";
import { SimpleCaseContext } from "./FlinkSQLParser";
import { CastContext } from "./FlinkSQLParser";
import { FirstContext } from "./FlinkSQLParser";
import { LastContext } from "./FlinkSQLParser";
import { PositionContext } from "./FlinkSQLParser";
import { ConstantDefaultContext } from "./FlinkSQLParser";
import { StarContext } from "./FlinkSQLParser";
import { SubqueryExpressionContext } from "./FlinkSQLParser";
import { FunctionCallContext } from "./FlinkSQLParser";
import { FunctionCallFilterContext } from "./FlinkSQLParser";
import { SubscriptContext } from "./FlinkSQLParser";
import { ColumnReferenceContext } from "./FlinkSQLParser";
import { DereferenceContext } from "./FlinkSQLParser";
import { ParenthesizedExpressionContext } from "./FlinkSQLParser";
import { ComplexDataTypeFieldExpressionContext } from "./FlinkSQLParser";
import { LengthSymbolsTypeDimensionContext } from "./FlinkSQLParser";
import { DdlPartContext } from "./FlinkSQLParser";
import { DmlPartContext } from "./FlinkSQLParser";
import { AlterContext } from "./FlinkSQLParser";
import { AddOrModifyNewColumnContext } from "./FlinkSQLParser";
import { AddOrModifyNewColumnsContext } from "./FlinkSQLParser";
import { AddNewPartitionsContext } from "./FlinkSQLParser";
import { DropAcolumnContext } from "./FlinkSQLParser";
import { DropColumnListContext } from "./FlinkSQLParser";
import { DropPrimaryKeyContext } from "./FlinkSQLParser";
import { DropPartitionsContext } from "./FlinkSQLParser";
import { DropWatermarkContext } from "./FlinkSQLParser";
import { DropDistributionContext } from "./FlinkSQLParser";
import { RenameColumnContext } from "./FlinkSQLParser";
import { RenameTableContext } from "./FlinkSQLParser";
import { SetPropertiyContext } from "./FlinkSQLParser";
import { ResetPropertiyContext } from "./FlinkSQLParser";
import { AddDistributionContext } from "./FlinkSQLParser";
import { ErrorIdentContext } from "./FlinkSQLParser";
import { RealIdentContext } from "./FlinkSQLParser";
import { RowSymbolsTypeDimensionContext } from "./FlinkSQLParser";
import { IdentityTransformContext } from "./FlinkSQLParser";
import { ApplyTransformContext } from "./FlinkSQLParser";
import { LogicalNotContext } from "./FlinkSQLParser";
import { ExistsContext } from "./FlinkSQLParser";
import { PredicatedContext } from "./FlinkSQLParser";
import { LogicalBinaryContext } from "./FlinkSQLParser";
import { LogicalNestedContext } from "./FlinkSQLParser";
import { StatementContext } from "./FlinkSQLParser";
import { SqlStatementsContext } from "./FlinkSQLParser";
import { SqlStatementContext } from "./FlinkSQLParser";
import { EmptyStatementContext } from "./FlinkSQLParser";
import { DdlStatementContext } from "./FlinkSQLParser";
import { CreateStatementContext } from "./FlinkSQLParser";
import { DmlStatementContext } from "./FlinkSQLParser";
import { CreateTableContext } from "./FlinkSQLParser";
import { SimpleCreateTableContext } from "./FlinkSQLParser";
import { LikeCreateTableContext } from "./FlinkSQLParser";
import { CreateTableAsSelectContext } from "./FlinkSQLParser";
import { UsingClauseContext } from "./FlinkSQLParser";
import { JarFileNameContext } from "./FlinkSQLParser";
import { AlterTableContext } from "./FlinkSQLParser";
import { ColumnPositionContext } from "./FlinkSQLParser";
import { RenameDefinitionContext } from "./FlinkSQLParser";
import { SetKeyValueDefinitionContext } from "./FlinkSQLParser";
import { AddConstraintContext } from "./FlinkSQLParser";
import { DropConstraintContext } from "./FlinkSQLParser";
import { AddUniqueContext } from "./FlinkSQLParser";
import { NotForcedContext } from "./FlinkSQLParser";
import { AlertViewContext } from "./FlinkSQLParser";
import { AlterCatalogContext } from "./FlinkSQLParser";
import { AlterDatabaseContext } from "./FlinkSQLParser";
import { AlterFunctionContext } from "./FlinkSQLParser";
import { DropCatalogContext } from "./FlinkSQLParser";
import { DropTableContext } from "./FlinkSQLParser";
import { DropDatabaseContext } from "./FlinkSQLParser";
import { DropViewContext } from "./FlinkSQLParser";
import { DropFunctionContext } from "./FlinkSQLParser";
import { InsertStatementContext } from "./FlinkSQLParser";
import { InsertSimpleStatementContext } from "./FlinkSQLParser";
import { InsertPartitionDefinitionContext } from "./FlinkSQLParser";
import { QueryStatementContext } from "./FlinkSQLParser";
import { ValuesCaluseContext } from "./FlinkSQLParser";
import { WithItemContext } from "./FlinkSQLParser";
import { WithItemNameContext } from "./FlinkSQLParser";
import { GroupByClauseContext } from "./FlinkSQLParser";
import { SelectClauseContext } from "./FlinkSQLParser";
import { ProjectItemDefinitionContext } from "./FlinkSQLParser";
import { OverWindowItemContext } from "./FlinkSQLParser";
import { FromClauseContext } from "./FlinkSQLParser";
import { TableExpressionContext } from "./FlinkSQLParser";
import { FlinkJoinOpContext } from "./FlinkSQLParser";
import { TableReferenceContext } from "./FlinkSQLParser";
import { TablePrimaryContext } from "./FlinkSQLParser";
import { TimePeriodContext } from "./FlinkSQLParser";
import { DateTimeExpressionContext } from "./FlinkSQLParser";
import { InlineDataValueClauseContext } from "./FlinkSQLParser";
import { WindowTVFClauseContext } from "./FlinkSQLParser";
import { WindowTVFExpressionContext } from "./FlinkSQLParser";
import { TumableExpressionContext } from "./FlinkSQLParser";
import { HopExpressionContext } from "./FlinkSQLParser";
import { CumulateExpressionContext } from "./FlinkSQLParser";
import { SessionExpressionContext } from "./FlinkSQLParser";
import { WindowTVFNameContext } from "./FlinkSQLParser";
import { WindowTVFParamContext } from "./FlinkSQLParser";
import { TimeIntervalParamNameContext } from "./FlinkSQLParser";
import { ColumnDescriptorContext } from "./FlinkSQLParser";
import { JoinConditionContext } from "./FlinkSQLParser";
import { WhereClauseContext } from "./FlinkSQLParser";
import { GroupItemDefinitionContext } from "./FlinkSQLParser";
import { GroupingSetsContext } from "./FlinkSQLParser";
import { GroupingSetsNotionNameContext } from "./FlinkSQLParser";
import { GroupWindowFunctionContext } from "./FlinkSQLParser";
import { GroupWindowFunctionNameContext } from "./FlinkSQLParser";
import { TimeAttrColumnContext } from "./FlinkSQLParser";
import { HavingClauseContext } from "./FlinkSQLParser";
import { WindowClauseContext } from "./FlinkSQLParser";
import { NamedWindowContext } from "./FlinkSQLParser";
import { WindowSpecContext } from "./FlinkSQLParser";
import { MatchRecognizeClauseContext } from "./FlinkSQLParser";
import { OrderByCaluseContext } from "./FlinkSQLParser";
import { OrderItemDefinitionContext } from "./FlinkSQLParser";
import { LimitClauseContext } from "./FlinkSQLParser";
import { PartitionByClauseContext } from "./FlinkSQLParser";
import { QuantifiersContext } from "./FlinkSQLParser";
import { MeasuresClauseContext } from "./FlinkSQLParser";
import { PatternDefinitionContext } from "./FlinkSQLParser";
import { PatternVariableContext } from "./FlinkSQLParser";
import { OutputModeContext } from "./FlinkSQLParser";
import { AfterMatchStrategyContext } from "./FlinkSQLParser";
import { PatternVariablesDefinitionContext } from "./FlinkSQLParser";
import { WindowFrameContext } from "./FlinkSQLParser";
import { FrameBoundContext } from "./FlinkSQLParser";
import { WithinClauseContext } from "./FlinkSQLParser";
import { AnalyzePartitionDefinitionContext } from "./FlinkSQLParser";
import { SelfDefinitionClauseContext } from "./FlinkSQLParser";
import { PartitionDefinitionContext } from "./FlinkSQLParser";
import { TransformListContext } from "./FlinkSQLParser";
import { TransformContext } from "./FlinkSQLParser";
import { TransformArgumentContext } from "./FlinkSQLParser";
import { LikeDefinitionContext } from "./FlinkSQLParser";
import { DistributedContext } from "./FlinkSQLParser";
import { DistributionContext } from "./FlinkSQLParser";
import { LikeOptionContext } from "./FlinkSQLParser";
import { ColumnOptionDefinitionContext } from "./FlinkSQLParser";
import { PhysicalColumnDefinitionContext } from "./FlinkSQLParser";
import { ComputedColumnExpressionContext } from "./FlinkSQLParser";
import { WatermarkDefinitionContext } from "./FlinkSQLParser";
import { TableConstraintContext } from "./FlinkSQLParser";
import { ConstraintNameContext } from "./FlinkSQLParser";
import { ValuesDefinitionContext } from "./FlinkSQLParser";
import { ValuesRowDefinitionContext } from "./FlinkSQLParser";
import { LengthOneDimensionContext } from "./FlinkSQLParser";
import { LengthTwoOptionalDimensionContext } from "./FlinkSQLParser";
import { LengthTwoStringDimensionContext } from "./FlinkSQLParser";
import { LengthOneTypeDimensionContext } from "./FlinkSQLParser";
import { MapTypeDimensionContext } from "./FlinkSQLParser";
import { RowTypeDimensionContext } from "./FlinkSQLParser";
import { ColumnConstraintContext } from "./FlinkSQLParser";
import { CommentSpecContext } from "./FlinkSQLParser";
import { MetadataColumnDefinitionContext } from "./FlinkSQLParser";
import { MetadataKeyContext } from "./FlinkSQLParser";
import { ComputedColumnDefinitionContext } from "./FlinkSQLParser";
import { ColumnNameContext } from "./FlinkSQLParser";
import { ColumnNameListContext } from "./FlinkSQLParser";
import { ColumnTypeContext } from "./FlinkSQLParser";
import { ExpressionContext } from "./FlinkSQLParser";
import { BooleanExpressionContext } from "./FlinkSQLParser";
import { PredicateContext } from "./FlinkSQLParser";
import { LikePredicateContext } from "./FlinkSQLParser";
import { ValueExpressionContext } from "./FlinkSQLParser";
import { PrimaryExpressionContext } from "./FlinkSQLParser";
import { ComplexDataTypeExpressionContext } from "./FlinkSQLParser";
import { ArrayExpressionContext } from "./FlinkSQLParser";
import { RowExpressionContext } from "./FlinkSQLParser";
import { MapExpressionContext } from "./FlinkSQLParser";
import { DataTypeExpressionContext } from "./FlinkSQLParser";
import { FunctionNameContext } from "./FlinkSQLParser";
import { FunctionParamContext } from "./FlinkSQLParser";
import { FilterClauseContext } from "./FlinkSQLParser";
import { DereferenceDefinitionContext } from "./FlinkSQLParser";
import { CorrelationNameContext } from "./FlinkSQLParser";
import { QualifiedNameContext } from "./FlinkSQLParser";
import { TimeIntervalExpressionContext } from "./FlinkSQLParser";
import { ErrorCapturingMultiUnitsIntervalContext } from "./FlinkSQLParser";
import { MultiUnitsIntervalContext } from "./FlinkSQLParser";
import { ErrorCapturingUnitToUnitIntervalContext } from "./FlinkSQLParser";
import { UnitToUnitIntervalContext } from "./FlinkSQLParser";
import { IntervalValueContext } from "./FlinkSQLParser";
import { ColumnAliasContext } from "./FlinkSQLParser";
import { TableAliasContext } from "./FlinkSQLParser";
import { ErrorCapturingIdentifierContext } from "./FlinkSQLParser";
import { ErrorCapturingIdentifierExtraContext } from "./FlinkSQLParser";
import { IdentifierListContext } from "./FlinkSQLParser";
import { IdentifierSeqContext } from "./FlinkSQLParser";
import { IdentifierContext } from "./FlinkSQLParser";
import { RefVarContext } from "./FlinkSQLParser";
import { UnquotedIdentifierContext } from "./FlinkSQLParser";
import { QuotedIdentifierContext } from "./FlinkSQLParser";
import { WhenClauseContext } from "./FlinkSQLParser";
import { CatalogPathContext } from "./FlinkSQLParser";
import { DatabasePathContext } from "./FlinkSQLParser";
import { DatabasePathCreateContext } from "./FlinkSQLParser";
import { TablePathCreateContext } from "./FlinkSQLParser";
import { TablePathContext } from "./FlinkSQLParser";
import { UidContext } from "./FlinkSQLParser";
import { WithOptionContext } from "./FlinkSQLParser";
import { IfNotExistsContext } from "./FlinkSQLParser";
import { IfExistsContext } from "./FlinkSQLParser";
import { TableCanHasKeyPropertyListContext } from "./FlinkSQLParser";
import { TablePropertyListContext } from "./FlinkSQLParser";
import { TablePropertyContext } from "./FlinkSQLParser";
import { TablePropertyKeyContext } from "./FlinkSQLParser";
import { TablePropertyValueContext } from "./FlinkSQLParser";
import { ComparisonOperatorContext } from "./FlinkSQLParser";
import { ConstantContext } from "./FlinkSQLParser";
import { TimePointLiteralContext } from "./FlinkSQLParser";
import { StringLiteralContext } from "./FlinkSQLParser";
import { DecimalLiteralContext } from "./FlinkSQLParser";
import { BooleanLiteralContext } from "./FlinkSQLParser";
import { SetQuantifierContext } from "./FlinkSQLParser";
import { TimePointUnitContext } from "./FlinkSQLParser";
import { TimeIntervalUnitContext } from "./FlinkSQLParser";
import { ReservedKeywordsUsedAsFuncParamContext } from "./FlinkSQLParser";
import { ReservedKeywordsUsedAsFuncNameContext } from "./FlinkSQLParser";
import { NonReservedKeywordsContext } from "./FlinkSQLParser";
import { SelectStatementContext } from "./FlinkSQLParser";
import { JoinOpContext } from "./FlinkSQLParser";
import { TableExpressionPlusContext } from "./FlinkSQLParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `FlinkSQLParser`.
 */
export interface FlinkSQLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `values_caluse`
	 * labeled alternative in `FlinkSQLParser.queryStatement`.
	 * @param ctx the parse tree
	 */
	enterValues_caluse?: (ctx: Values_caluseContext) => void;
	/**
	 * Exit a parse tree produced by the `values_caluse`
	 * labeled alternative in `FlinkSQLParser.queryStatement`.
	 * @param ctx the parse tree
	 */
	exitValues_caluse?: (ctx: Values_caluseContext) => void;

	/**
	 * Enter a parse tree produced by the `sub_query`
	 * labeled alternative in `FlinkSQLParser.queryStatement`.
	 * @param ctx the parse tree
	 */
	enterSub_query?: (ctx: Sub_queryContext) => void;
	/**
	 * Exit a parse tree produced by the `sub_query`
	 * labeled alternative in `FlinkSQLParser.queryStatement`.
	 * @param ctx the parse tree
	 */
	exitSub_query?: (ctx: Sub_queryContext) => void;

	/**
	 * Enter a parse tree produced by the `union_query`
	 * labeled alternative in `FlinkSQLParser.queryStatement`.
	 * @param ctx the parse tree
	 */
	enterUnion_query?: (ctx: Union_queryContext) => void;
	/**
	 * Exit a parse tree produced by the `union_query`
	 * labeled alternative in `FlinkSQLParser.queryStatement`.
	 * @param ctx the parse tree
	 */
	exitUnion_query?: (ctx: Union_queryContext) => void;

	/**
	 * Enter a parse tree produced by the `common_select`
	 * labeled alternative in `FlinkSQLParser.queryStatement`.
	 * @param ctx the parse tree
	 */
	enterCommon_select?: (ctx: Common_selectContext) => void;
	/**
	 * Exit a parse tree produced by the `common_select`
	 * labeled alternative in `FlinkSQLParser.queryStatement`.
	 * @param ctx the parse tree
	 */
	exitCommon_select?: (ctx: Common_selectContext) => void;

	/**
	 * Enter a parse tree produced by the `unquotedIdentifierAlternative`
	 * labeled alternative in `FlinkSQLParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterUnquotedIdentifierAlternative?: (ctx: UnquotedIdentifierAlternativeContext) => void;
	/**
	 * Exit a parse tree produced by the `unquotedIdentifierAlternative`
	 * labeled alternative in `FlinkSQLParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitUnquotedIdentifierAlternative?: (ctx: UnquotedIdentifierAlternativeContext) => void;

	/**
	 * Enter a parse tree produced by the `quotedIdentifierAlternative`
	 * labeled alternative in `FlinkSQLParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterQuotedIdentifierAlternative?: (ctx: QuotedIdentifierAlternativeContext) => void;
	/**
	 * Exit a parse tree produced by the `quotedIdentifierAlternative`
	 * labeled alternative in `FlinkSQLParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitQuotedIdentifierAlternative?: (ctx: QuotedIdentifierAlternativeContext) => void;

	/**
	 * Enter a parse tree produced by the `nonReservedKeywordsAlternative`
	 * labeled alternative in `FlinkSQLParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterNonReservedKeywordsAlternative?: (ctx: NonReservedKeywordsAlternativeContext) => void;
	/**
	 * Exit a parse tree produced by the `nonReservedKeywordsAlternative`
	 * labeled alternative in `FlinkSQLParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitNonReservedKeywordsAlternative?: (ctx: NonReservedKeywordsAlternativeContext) => void;

	/**
	 * Enter a parse tree produced by the `urefVarAlternative`
	 * labeled alternative in `FlinkSQLParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterUrefVarAlternative?: (ctx: UrefVarAlternativeContext) => void;
	/**
	 * Exit a parse tree produced by the `urefVarAlternative`
	 * labeled alternative in `FlinkSQLParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitUrefVarAlternative?: (ctx: UrefVarAlternativeContext) => void;

	/**
	 * Enter a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `FlinkSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `FlinkSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `FlinkSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `FlinkSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;

	/**
	 * Enter a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `FlinkSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `FlinkSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;

	/**
	 * Enter a parse tree produced by the `comparison`
	 * labeled alternative in `FlinkSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by the `comparison`
	 * labeled alternative in `FlinkSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;

	/**
	 * Enter a parse tree produced by the `searchedCase`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSearchedCase?: (ctx: SearchedCaseContext) => void;
	/**
	 * Exit a parse tree produced by the `searchedCase`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSearchedCase?: (ctx: SearchedCaseContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleCase`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSimpleCase?: (ctx: SimpleCaseContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleCase`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSimpleCase?: (ctx: SimpleCaseContext) => void;

	/**
	 * Enter a parse tree produced by the `cast`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCast?: (ctx: CastContext) => void;
	/**
	 * Exit a parse tree produced by the `cast`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCast?: (ctx: CastContext) => void;

	/**
	 * Enter a parse tree produced by the `first`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterFirst?: (ctx: FirstContext) => void;
	/**
	 * Exit a parse tree produced by the `first`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitFirst?: (ctx: FirstContext) => void;

	/**
	 * Enter a parse tree produced by the `last`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterLast?: (ctx: LastContext) => void;
	/**
	 * Exit a parse tree produced by the `last`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitLast?: (ctx: LastContext) => void;

	/**
	 * Enter a parse tree produced by the `position`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPosition?: (ctx: PositionContext) => void;
	/**
	 * Exit a parse tree produced by the `position`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPosition?: (ctx: PositionContext) => void;

	/**
	 * Enter a parse tree produced by the `constantDefault`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterConstantDefault?: (ctx: ConstantDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `constantDefault`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitConstantDefault?: (ctx: ConstantDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `star`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterStar?: (ctx: StarContext) => void;
	/**
	 * Exit a parse tree produced by the `star`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitStar?: (ctx: StarContext) => void;

	/**
	 * Enter a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `functionCall`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `functionCall`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by the `functionCallFilter`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterFunctionCallFilter?: (ctx: FunctionCallFilterContext) => void;
	/**
	 * Exit a parse tree produced by the `functionCallFilter`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitFunctionCallFilter?: (ctx: FunctionCallFilterContext) => void;

	/**
	 * Enter a parse tree produced by the `subscript`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSubscript?: (ctx: SubscriptContext) => void;
	/**
	 * Exit a parse tree produced by the `subscript`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSubscript?: (ctx: SubscriptContext) => void;

	/**
	 * Enter a parse tree produced by the `columnReference`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterColumnReference?: (ctx: ColumnReferenceContext) => void;
	/**
	 * Exit a parse tree produced by the `columnReference`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitColumnReference?: (ctx: ColumnReferenceContext) => void;

	/**
	 * Enter a parse tree produced by the `dereference`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterDereference?: (ctx: DereferenceContext) => void;
	/**
	 * Exit a parse tree produced by the `dereference`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitDereference?: (ctx: DereferenceContext) => void;

	/**
	 * Enter a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `complexDataTypeFieldExpression`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterComplexDataTypeFieldExpression?: (ctx: ComplexDataTypeFieldExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `complexDataTypeFieldExpression`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitComplexDataTypeFieldExpression?: (ctx: ComplexDataTypeFieldExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `lengthSymbolsTypeDimension`
	 * labeled alternative in `FlinkSQLParser.lengthOneTypeDimension`.
	 * @param ctx the parse tree
	 */
	enterLengthSymbolsTypeDimension?: (ctx: LengthSymbolsTypeDimensionContext) => void;
	/**
	 * Exit a parse tree produced by the `lengthSymbolsTypeDimension`
	 * labeled alternative in `FlinkSQLParser.lengthOneTypeDimension`.
	 * @param ctx the parse tree
	 */
	exitLengthSymbolsTypeDimension?: (ctx: LengthSymbolsTypeDimensionContext) => void;

	/**
	 * Enter a parse tree produced by the `ddlPart`
	 * labeled alternative in `FlinkSQLParser.sqlStatement`.
	 * @param ctx the parse tree
	 */
	enterDdlPart?: (ctx: DdlPartContext) => void;
	/**
	 * Exit a parse tree produced by the `ddlPart`
	 * labeled alternative in `FlinkSQLParser.sqlStatement`.
	 * @param ctx the parse tree
	 */
	exitDdlPart?: (ctx: DdlPartContext) => void;

	/**
	 * Enter a parse tree produced by the `dmlPart`
	 * labeled alternative in `FlinkSQLParser.sqlStatement`.
	 * @param ctx the parse tree
	 */
	enterDmlPart?: (ctx: DmlPartContext) => void;
	/**
	 * Exit a parse tree produced by the `dmlPart`
	 * labeled alternative in `FlinkSQLParser.sqlStatement`.
	 * @param ctx the parse tree
	 */
	exitDmlPart?: (ctx: DmlPartContext) => void;

	/**
	 * Enter a parse tree produced by the `alter`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	enterAlter?: (ctx: AlterContext) => void;
	/**
	 * Exit a parse tree produced by the `alter`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	exitAlter?: (ctx: AlterContext) => void;

	/**
	 * Enter a parse tree produced by the `addOrModifyNewColumn`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	enterAddOrModifyNewColumn?: (ctx: AddOrModifyNewColumnContext) => void;
	/**
	 * Exit a parse tree produced by the `addOrModifyNewColumn`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	exitAddOrModifyNewColumn?: (ctx: AddOrModifyNewColumnContext) => void;

	/**
	 * Enter a parse tree produced by the `addOrModifyNewColumns`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	enterAddOrModifyNewColumns?: (ctx: AddOrModifyNewColumnsContext) => void;
	/**
	 * Exit a parse tree produced by the `addOrModifyNewColumns`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	exitAddOrModifyNewColumns?: (ctx: AddOrModifyNewColumnsContext) => void;

	/**
	 * Enter a parse tree produced by the `addNewPartitions`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	enterAddNewPartitions?: (ctx: AddNewPartitionsContext) => void;
	/**
	 * Exit a parse tree produced by the `addNewPartitions`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	exitAddNewPartitions?: (ctx: AddNewPartitionsContext) => void;

	/**
	 * Enter a parse tree produced by the `dropAcolumn`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	enterDropAcolumn?: (ctx: DropAcolumnContext) => void;
	/**
	 * Exit a parse tree produced by the `dropAcolumn`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	exitDropAcolumn?: (ctx: DropAcolumnContext) => void;

	/**
	 * Enter a parse tree produced by the `dropColumnList`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	enterDropColumnList?: (ctx: DropColumnListContext) => void;
	/**
	 * Exit a parse tree produced by the `dropColumnList`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	exitDropColumnList?: (ctx: DropColumnListContext) => void;

	/**
	 * Enter a parse tree produced by the `dropPrimaryKey`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	enterDropPrimaryKey?: (ctx: DropPrimaryKeyContext) => void;
	/**
	 * Exit a parse tree produced by the `dropPrimaryKey`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	exitDropPrimaryKey?: (ctx: DropPrimaryKeyContext) => void;

	/**
	 * Enter a parse tree produced by the `dropPartitions`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	enterDropPartitions?: (ctx: DropPartitionsContext) => void;
	/**
	 * Exit a parse tree produced by the `dropPartitions`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	exitDropPartitions?: (ctx: DropPartitionsContext) => void;

	/**
	 * Enter a parse tree produced by the `dropWatermark`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	enterDropWatermark?: (ctx: DropWatermarkContext) => void;
	/**
	 * Exit a parse tree produced by the `dropWatermark`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	exitDropWatermark?: (ctx: DropWatermarkContext) => void;

	/**
	 * Enter a parse tree produced by the `dropDistribution`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	enterDropDistribution?: (ctx: DropDistributionContext) => void;
	/**
	 * Exit a parse tree produced by the `dropDistribution`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	exitDropDistribution?: (ctx: DropDistributionContext) => void;

	/**
	 * Enter a parse tree produced by the `renameColumn`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	enterRenameColumn?: (ctx: RenameColumnContext) => void;
	/**
	 * Exit a parse tree produced by the `renameColumn`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	exitRenameColumn?: (ctx: RenameColumnContext) => void;

	/**
	 * Enter a parse tree produced by the `renameTable`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	enterRenameTable?: (ctx: RenameTableContext) => void;
	/**
	 * Exit a parse tree produced by the `renameTable`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	exitRenameTable?: (ctx: RenameTableContext) => void;

	/**
	 * Enter a parse tree produced by the `setPropertiy`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	enterSetPropertiy?: (ctx: SetPropertiyContext) => void;
	/**
	 * Exit a parse tree produced by the `setPropertiy`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	exitSetPropertiy?: (ctx: SetPropertiyContext) => void;

	/**
	 * Enter a parse tree produced by the `resetPropertiy`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	enterResetPropertiy?: (ctx: ResetPropertiyContext) => void;
	/**
	 * Exit a parse tree produced by the `resetPropertiy`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	exitResetPropertiy?: (ctx: ResetPropertiyContext) => void;

	/**
	 * Enter a parse tree produced by the `addDistribution`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	enterAddDistribution?: (ctx: AddDistributionContext) => void;
	/**
	 * Exit a parse tree produced by the `addDistribution`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	exitAddDistribution?: (ctx: AddDistributionContext) => void;

	/**
	 * Enter a parse tree produced by the `errorIdent`
	 * labeled alternative in `FlinkSQLParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 */
	enterErrorIdent?: (ctx: ErrorIdentContext) => void;
	/**
	 * Exit a parse tree produced by the `errorIdent`
	 * labeled alternative in `FlinkSQLParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 */
	exitErrorIdent?: (ctx: ErrorIdentContext) => void;

	/**
	 * Enter a parse tree produced by the `realIdent`
	 * labeled alternative in `FlinkSQLParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 */
	enterRealIdent?: (ctx: RealIdentContext) => void;
	/**
	 * Exit a parse tree produced by the `realIdent`
	 * labeled alternative in `FlinkSQLParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 */
	exitRealIdent?: (ctx: RealIdentContext) => void;

	/**
	 * Enter a parse tree produced by the `rowSymbolsTypeDimension`
	 * labeled alternative in `FlinkSQLParser.rowTypeDimension`.
	 * @param ctx the parse tree
	 */
	enterRowSymbolsTypeDimension?: (ctx: RowSymbolsTypeDimensionContext) => void;
	/**
	 * Exit a parse tree produced by the `rowSymbolsTypeDimension`
	 * labeled alternative in `FlinkSQLParser.rowTypeDimension`.
	 * @param ctx the parse tree
	 */
	exitRowSymbolsTypeDimension?: (ctx: RowSymbolsTypeDimensionContext) => void;

	/**
	 * Enter a parse tree produced by the `identityTransform`
	 * labeled alternative in `FlinkSQLParser.transform`.
	 * @param ctx the parse tree
	 */
	enterIdentityTransform?: (ctx: IdentityTransformContext) => void;
	/**
	 * Exit a parse tree produced by the `identityTransform`
	 * labeled alternative in `FlinkSQLParser.transform`.
	 * @param ctx the parse tree
	 */
	exitIdentityTransform?: (ctx: IdentityTransformContext) => void;

	/**
	 * Enter a parse tree produced by the `applyTransform`
	 * labeled alternative in `FlinkSQLParser.transform`.
	 * @param ctx the parse tree
	 */
	enterApplyTransform?: (ctx: ApplyTransformContext) => void;
	/**
	 * Exit a parse tree produced by the `applyTransform`
	 * labeled alternative in `FlinkSQLParser.transform`.
	 * @param ctx the parse tree
	 */
	exitApplyTransform?: (ctx: ApplyTransformContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalNot`
	 * labeled alternative in `FlinkSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalNot?: (ctx: LogicalNotContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalNot`
	 * labeled alternative in `FlinkSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalNot?: (ctx: LogicalNotContext) => void;

	/**
	 * Enter a parse tree produced by the `exists`
	 * labeled alternative in `FlinkSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterExists?: (ctx: ExistsContext) => void;
	/**
	 * Exit a parse tree produced by the `exists`
	 * labeled alternative in `FlinkSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitExists?: (ctx: ExistsContext) => void;

	/**
	 * Enter a parse tree produced by the `predicated`
	 * labeled alternative in `FlinkSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterPredicated?: (ctx: PredicatedContext) => void;
	/**
	 * Exit a parse tree produced by the `predicated`
	 * labeled alternative in `FlinkSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitPredicated?: (ctx: PredicatedContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalBinary`
	 * labeled alternative in `FlinkSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalBinary?: (ctx: LogicalBinaryContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalBinary`
	 * labeled alternative in `FlinkSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalBinary?: (ctx: LogicalBinaryContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalNested`
	 * labeled alternative in `FlinkSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalNested?: (ctx: LogicalNestedContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalNested`
	 * labeled alternative in `FlinkSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalNested?: (ctx: LogicalNestedContext) => void;

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
	 * Enter a parse tree produced by `FlinkSQLParser.sqlStatements`.
	 * @param ctx the parse tree
	 */
	enterSqlStatements?: (ctx: SqlStatementsContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.sqlStatements`.
	 * @param ctx the parse tree
	 */
	exitSqlStatements?: (ctx: SqlStatementsContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.sqlStatement`.
	 * @param ctx the parse tree
	 */
	enterSqlStatement?: (ctx: SqlStatementContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.sqlStatement`.
	 * @param ctx the parse tree
	 */
	exitSqlStatement?: (ctx: SqlStatementContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.emptyStatement`.
	 * @param ctx the parse tree
	 */
	enterEmptyStatement?: (ctx: EmptyStatementContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.emptyStatement`.
	 * @param ctx the parse tree
	 */
	exitEmptyStatement?: (ctx: EmptyStatementContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.ddlStatement`.
	 * @param ctx the parse tree
	 */
	enterDdlStatement?: (ctx: DdlStatementContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.ddlStatement`.
	 * @param ctx the parse tree
	 */
	exitDdlStatement?: (ctx: DdlStatementContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.createStatement`.
	 * @param ctx the parse tree
	 */
	enterCreateStatement?: (ctx: CreateStatementContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.createStatement`.
	 * @param ctx the parse tree
	 */
	exitCreateStatement?: (ctx: CreateStatementContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.dmlStatement`.
	 * @param ctx the parse tree
	 */
	enterDmlStatement?: (ctx: DmlStatementContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.dmlStatement`.
	 * @param ctx the parse tree
	 */
	exitDmlStatement?: (ctx: DmlStatementContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.createTable`.
	 * @param ctx the parse tree
	 */
	enterCreateTable?: (ctx: CreateTableContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.createTable`.
	 * @param ctx the parse tree
	 */
	exitCreateTable?: (ctx: CreateTableContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.simpleCreateTable`.
	 * @param ctx the parse tree
	 */
	enterSimpleCreateTable?: (ctx: SimpleCreateTableContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.simpleCreateTable`.
	 * @param ctx the parse tree
	 */
	exitSimpleCreateTable?: (ctx: SimpleCreateTableContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.likeCreateTable`.
	 * @param ctx the parse tree
	 */
	enterLikeCreateTable?: (ctx: LikeCreateTableContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.likeCreateTable`.
	 * @param ctx the parse tree
	 */
	exitLikeCreateTable?: (ctx: LikeCreateTableContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.createTableAsSelect`.
	 * @param ctx the parse tree
	 */
	enterCreateTableAsSelect?: (ctx: CreateTableAsSelectContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.createTableAsSelect`.
	 * @param ctx the parse tree
	 */
	exitCreateTableAsSelect?: (ctx: CreateTableAsSelectContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.usingClause`.
	 * @param ctx the parse tree
	 */
	enterUsingClause?: (ctx: UsingClauseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.usingClause`.
	 * @param ctx the parse tree
	 */
	exitUsingClause?: (ctx: UsingClauseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.jarFileName`.
	 * @param ctx the parse tree
	 */
	enterJarFileName?: (ctx: JarFileNameContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.jarFileName`.
	 * @param ctx the parse tree
	 */
	exitJarFileName?: (ctx: JarFileNameContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	enterAlterTable?: (ctx: AlterTableContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	exitAlterTable?: (ctx: AlterTableContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.columnPosition`.
	 * @param ctx the parse tree
	 */
	enterColumnPosition?: (ctx: ColumnPositionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.columnPosition`.
	 * @param ctx the parse tree
	 */
	exitColumnPosition?: (ctx: ColumnPositionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.renameDefinition`.
	 * @param ctx the parse tree
	 */
	enterRenameDefinition?: (ctx: RenameDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.renameDefinition`.
	 * @param ctx the parse tree
	 */
	exitRenameDefinition?: (ctx: RenameDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.setKeyValueDefinition`.
	 * @param ctx the parse tree
	 */
	enterSetKeyValueDefinition?: (ctx: SetKeyValueDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.setKeyValueDefinition`.
	 * @param ctx the parse tree
	 */
	exitSetKeyValueDefinition?: (ctx: SetKeyValueDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.addConstraint`.
	 * @param ctx the parse tree
	 */
	enterAddConstraint?: (ctx: AddConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.addConstraint`.
	 * @param ctx the parse tree
	 */
	exitAddConstraint?: (ctx: AddConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.dropConstraint`.
	 * @param ctx the parse tree
	 */
	enterDropConstraint?: (ctx: DropConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.dropConstraint`.
	 * @param ctx the parse tree
	 */
	exitDropConstraint?: (ctx: DropConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.addUnique`.
	 * @param ctx the parse tree
	 */
	enterAddUnique?: (ctx: AddUniqueContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.addUnique`.
	 * @param ctx the parse tree
	 */
	exitAddUnique?: (ctx: AddUniqueContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.notForced`.
	 * @param ctx the parse tree
	 */
	enterNotForced?: (ctx: NotForcedContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.notForced`.
	 * @param ctx the parse tree
	 */
	exitNotForced?: (ctx: NotForcedContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.alertView`.
	 * @param ctx the parse tree
	 */
	enterAlertView?: (ctx: AlertViewContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.alertView`.
	 * @param ctx the parse tree
	 */
	exitAlertView?: (ctx: AlertViewContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.alterCatalog`.
	 * @param ctx the parse tree
	 */
	enterAlterCatalog?: (ctx: AlterCatalogContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.alterCatalog`.
	 * @param ctx the parse tree
	 */
	exitAlterCatalog?: (ctx: AlterCatalogContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.alterDatabase`.
	 * @param ctx the parse tree
	 */
	enterAlterDatabase?: (ctx: AlterDatabaseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.alterDatabase`.
	 * @param ctx the parse tree
	 */
	exitAlterDatabase?: (ctx: AlterDatabaseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.alterFunction`.
	 * @param ctx the parse tree
	 */
	enterAlterFunction?: (ctx: AlterFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.alterFunction`.
	 * @param ctx the parse tree
	 */
	exitAlterFunction?: (ctx: AlterFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.dropCatalog`.
	 * @param ctx the parse tree
	 */
	enterDropCatalog?: (ctx: DropCatalogContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.dropCatalog`.
	 * @param ctx the parse tree
	 */
	exitDropCatalog?: (ctx: DropCatalogContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.dropTable`.
	 * @param ctx the parse tree
	 */
	enterDropTable?: (ctx: DropTableContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.dropTable`.
	 * @param ctx the parse tree
	 */
	exitDropTable?: (ctx: DropTableContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.dropDatabase`.
	 * @param ctx the parse tree
	 */
	enterDropDatabase?: (ctx: DropDatabaseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.dropDatabase`.
	 * @param ctx the parse tree
	 */
	exitDropDatabase?: (ctx: DropDatabaseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.dropView`.
	 * @param ctx the parse tree
	 */
	enterDropView?: (ctx: DropViewContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.dropView`.
	 * @param ctx the parse tree
	 */
	exitDropView?: (ctx: DropViewContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.dropFunction`.
	 * @param ctx the parse tree
	 */
	enterDropFunction?: (ctx: DropFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.dropFunction`.
	 * @param ctx the parse tree
	 */
	exitDropFunction?: (ctx: DropFunctionContext) => void;

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
	 * Enter a parse tree produced by `FlinkSQLParser.insertSimpleStatement`.
	 * @param ctx the parse tree
	 */
	enterInsertSimpleStatement?: (ctx: InsertSimpleStatementContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.insertSimpleStatement`.
	 * @param ctx the parse tree
	 */
	exitInsertSimpleStatement?: (ctx: InsertSimpleStatementContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.insertPartitionDefinition`.
	 * @param ctx the parse tree
	 */
	enterInsertPartitionDefinition?: (ctx: InsertPartitionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.insertPartitionDefinition`.
	 * @param ctx the parse tree
	 */
	exitInsertPartitionDefinition?: (ctx: InsertPartitionDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.queryStatement`.
	 * @param ctx the parse tree
	 */
	enterQueryStatement?: (ctx: QueryStatementContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.queryStatement`.
	 * @param ctx the parse tree
	 */
	exitQueryStatement?: (ctx: QueryStatementContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.valuesCaluse`.
	 * @param ctx the parse tree
	 */
	enterValuesCaluse?: (ctx: ValuesCaluseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.valuesCaluse`.
	 * @param ctx the parse tree
	 */
	exitValuesCaluse?: (ctx: ValuesCaluseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.withItem`.
	 * @param ctx the parse tree
	 */
	enterWithItem?: (ctx: WithItemContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.withItem`.
	 * @param ctx the parse tree
	 */
	exitWithItem?: (ctx: WithItemContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.withItemName`.
	 * @param ctx the parse tree
	 */
	enterWithItemName?: (ctx: WithItemNameContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.withItemName`.
	 * @param ctx the parse tree
	 */
	exitWithItemName?: (ctx: WithItemNameContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.groupByClause`.
	 * @param ctx the parse tree
	 */
	enterGroupByClause?: (ctx: GroupByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.groupByClause`.
	 * @param ctx the parse tree
	 */
	exitGroupByClause?: (ctx: GroupByClauseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.selectClause`.
	 * @param ctx the parse tree
	 */
	enterSelectClause?: (ctx: SelectClauseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.selectClause`.
	 * @param ctx the parse tree
	 */
	exitSelectClause?: (ctx: SelectClauseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.projectItemDefinition`.
	 * @param ctx the parse tree
	 */
	enterProjectItemDefinition?: (ctx: ProjectItemDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.projectItemDefinition`.
	 * @param ctx the parse tree
	 */
	exitProjectItemDefinition?: (ctx: ProjectItemDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.overWindowItem`.
	 * @param ctx the parse tree
	 */
	enterOverWindowItem?: (ctx: OverWindowItemContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.overWindowItem`.
	 * @param ctx the parse tree
	 */
	exitOverWindowItem?: (ctx: OverWindowItemContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.fromClause`.
	 * @param ctx the parse tree
	 */
	enterFromClause?: (ctx: FromClauseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.fromClause`.
	 * @param ctx the parse tree
	 */
	exitFromClause?: (ctx: FromClauseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.tableExpression`.
	 * @param ctx the parse tree
	 */
	enterTableExpression?: (ctx: TableExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.tableExpression`.
	 * @param ctx the parse tree
	 */
	exitTableExpression?: (ctx: TableExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.flinkJoinOp`.
	 * @param ctx the parse tree
	 */
	enterFlinkJoinOp?: (ctx: FlinkJoinOpContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.flinkJoinOp`.
	 * @param ctx the parse tree
	 */
	exitFlinkJoinOp?: (ctx: FlinkJoinOpContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.tableReference`.
	 * @param ctx the parse tree
	 */
	enterTableReference?: (ctx: TableReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.tableReference`.
	 * @param ctx the parse tree
	 */
	exitTableReference?: (ctx: TableReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.tablePrimary`.
	 * @param ctx the parse tree
	 */
	enterTablePrimary?: (ctx: TablePrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.tablePrimary`.
	 * @param ctx the parse tree
	 */
	exitTablePrimary?: (ctx: TablePrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.timePeriod`.
	 * @param ctx the parse tree
	 */
	enterTimePeriod?: (ctx: TimePeriodContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.timePeriod`.
	 * @param ctx the parse tree
	 */
	exitTimePeriod?: (ctx: TimePeriodContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.dateTimeExpression`.
	 * @param ctx the parse tree
	 */
	enterDateTimeExpression?: (ctx: DateTimeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.dateTimeExpression`.
	 * @param ctx the parse tree
	 */
	exitDateTimeExpression?: (ctx: DateTimeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.inlineDataValueClause`.
	 * @param ctx the parse tree
	 */
	enterInlineDataValueClause?: (ctx: InlineDataValueClauseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.inlineDataValueClause`.
	 * @param ctx the parse tree
	 */
	exitInlineDataValueClause?: (ctx: InlineDataValueClauseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.windowTVFClause`.
	 * @param ctx the parse tree
	 */
	enterWindowTVFClause?: (ctx: WindowTVFClauseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.windowTVFClause`.
	 * @param ctx the parse tree
	 */
	exitWindowTVFClause?: (ctx: WindowTVFClauseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.windowTVFExpression`.
	 * @param ctx the parse tree
	 */
	enterWindowTVFExpression?: (ctx: WindowTVFExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.windowTVFExpression`.
	 * @param ctx the parse tree
	 */
	exitWindowTVFExpression?: (ctx: WindowTVFExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.tumableExpression`.
	 * @param ctx the parse tree
	 */
	enterTumableExpression?: (ctx: TumableExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.tumableExpression`.
	 * @param ctx the parse tree
	 */
	exitTumableExpression?: (ctx: TumableExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.hopExpression`.
	 * @param ctx the parse tree
	 */
	enterHopExpression?: (ctx: HopExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.hopExpression`.
	 * @param ctx the parse tree
	 */
	exitHopExpression?: (ctx: HopExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.cumulateExpression`.
	 * @param ctx the parse tree
	 */
	enterCumulateExpression?: (ctx: CumulateExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.cumulateExpression`.
	 * @param ctx the parse tree
	 */
	exitCumulateExpression?: (ctx: CumulateExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.sessionExpression`.
	 * @param ctx the parse tree
	 */
	enterSessionExpression?: (ctx: SessionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.sessionExpression`.
	 * @param ctx the parse tree
	 */
	exitSessionExpression?: (ctx: SessionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.windowTVFName`.
	 * @param ctx the parse tree
	 */
	enterWindowTVFName?: (ctx: WindowTVFNameContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.windowTVFName`.
	 * @param ctx the parse tree
	 */
	exitWindowTVFName?: (ctx: WindowTVFNameContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.windowTVFParam`.
	 * @param ctx the parse tree
	 */
	enterWindowTVFParam?: (ctx: WindowTVFParamContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.windowTVFParam`.
	 * @param ctx the parse tree
	 */
	exitWindowTVFParam?: (ctx: WindowTVFParamContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.timeIntervalParamName`.
	 * @param ctx the parse tree
	 */
	enterTimeIntervalParamName?: (ctx: TimeIntervalParamNameContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.timeIntervalParamName`.
	 * @param ctx the parse tree
	 */
	exitTimeIntervalParamName?: (ctx: TimeIntervalParamNameContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.columnDescriptor`.
	 * @param ctx the parse tree
	 */
	enterColumnDescriptor?: (ctx: ColumnDescriptorContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.columnDescriptor`.
	 * @param ctx the parse tree
	 */
	exitColumnDescriptor?: (ctx: ColumnDescriptorContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.joinCondition`.
	 * @param ctx the parse tree
	 */
	enterJoinCondition?: (ctx: JoinConditionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.joinCondition`.
	 * @param ctx the parse tree
	 */
	exitJoinCondition?: (ctx: JoinConditionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.whereClause`.
	 * @param ctx the parse tree
	 */
	enterWhereClause?: (ctx: WhereClauseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.whereClause`.
	 * @param ctx the parse tree
	 */
	exitWhereClause?: (ctx: WhereClauseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.groupItemDefinition`.
	 * @param ctx the parse tree
	 */
	enterGroupItemDefinition?: (ctx: GroupItemDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.groupItemDefinition`.
	 * @param ctx the parse tree
	 */
	exitGroupItemDefinition?: (ctx: GroupItemDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.groupingSets`.
	 * @param ctx the parse tree
	 */
	enterGroupingSets?: (ctx: GroupingSetsContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.groupingSets`.
	 * @param ctx the parse tree
	 */
	exitGroupingSets?: (ctx: GroupingSetsContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.groupingSetsNotionName`.
	 * @param ctx the parse tree
	 */
	enterGroupingSetsNotionName?: (ctx: GroupingSetsNotionNameContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.groupingSetsNotionName`.
	 * @param ctx the parse tree
	 */
	exitGroupingSetsNotionName?: (ctx: GroupingSetsNotionNameContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.groupWindowFunction`.
	 * @param ctx the parse tree
	 */
	enterGroupWindowFunction?: (ctx: GroupWindowFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.groupWindowFunction`.
	 * @param ctx the parse tree
	 */
	exitGroupWindowFunction?: (ctx: GroupWindowFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.groupWindowFunctionName`.
	 * @param ctx the parse tree
	 */
	enterGroupWindowFunctionName?: (ctx: GroupWindowFunctionNameContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.groupWindowFunctionName`.
	 * @param ctx the parse tree
	 */
	exitGroupWindowFunctionName?: (ctx: GroupWindowFunctionNameContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.timeAttrColumn`.
	 * @param ctx the parse tree
	 */
	enterTimeAttrColumn?: (ctx: TimeAttrColumnContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.timeAttrColumn`.
	 * @param ctx the parse tree
	 */
	exitTimeAttrColumn?: (ctx: TimeAttrColumnContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.havingClause`.
	 * @param ctx the parse tree
	 */
	enterHavingClause?: (ctx: HavingClauseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.havingClause`.
	 * @param ctx the parse tree
	 */
	exitHavingClause?: (ctx: HavingClauseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.windowClause`.
	 * @param ctx the parse tree
	 */
	enterWindowClause?: (ctx: WindowClauseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.windowClause`.
	 * @param ctx the parse tree
	 */
	exitWindowClause?: (ctx: WindowClauseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.namedWindow`.
	 * @param ctx the parse tree
	 */
	enterNamedWindow?: (ctx: NamedWindowContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.namedWindow`.
	 * @param ctx the parse tree
	 */
	exitNamedWindow?: (ctx: NamedWindowContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.windowSpec`.
	 * @param ctx the parse tree
	 */
	enterWindowSpec?: (ctx: WindowSpecContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.windowSpec`.
	 * @param ctx the parse tree
	 */
	exitWindowSpec?: (ctx: WindowSpecContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.matchRecognizeClause`.
	 * @param ctx the parse tree
	 */
	enterMatchRecognizeClause?: (ctx: MatchRecognizeClauseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.matchRecognizeClause`.
	 * @param ctx the parse tree
	 */
	exitMatchRecognizeClause?: (ctx: MatchRecognizeClauseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.orderByCaluse`.
	 * @param ctx the parse tree
	 */
	enterOrderByCaluse?: (ctx: OrderByCaluseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.orderByCaluse`.
	 * @param ctx the parse tree
	 */
	exitOrderByCaluse?: (ctx: OrderByCaluseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.orderItemDefinition`.
	 * @param ctx the parse tree
	 */
	enterOrderItemDefinition?: (ctx: OrderItemDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.orderItemDefinition`.
	 * @param ctx the parse tree
	 */
	exitOrderItemDefinition?: (ctx: OrderItemDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.limitClause`.
	 * @param ctx the parse tree
	 */
	enterLimitClause?: (ctx: LimitClauseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.limitClause`.
	 * @param ctx the parse tree
	 */
	exitLimitClause?: (ctx: LimitClauseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.partitionByClause`.
	 * @param ctx the parse tree
	 */
	enterPartitionByClause?: (ctx: PartitionByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.partitionByClause`.
	 * @param ctx the parse tree
	 */
	exitPartitionByClause?: (ctx: PartitionByClauseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.quantifiers`.
	 * @param ctx the parse tree
	 */
	enterQuantifiers?: (ctx: QuantifiersContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.quantifiers`.
	 * @param ctx the parse tree
	 */
	exitQuantifiers?: (ctx: QuantifiersContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.measuresClause`.
	 * @param ctx the parse tree
	 */
	enterMeasuresClause?: (ctx: MeasuresClauseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.measuresClause`.
	 * @param ctx the parse tree
	 */
	exitMeasuresClause?: (ctx: MeasuresClauseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.patternDefinition`.
	 * @param ctx the parse tree
	 */
	enterPatternDefinition?: (ctx: PatternDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.patternDefinition`.
	 * @param ctx the parse tree
	 */
	exitPatternDefinition?: (ctx: PatternDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.patternVariable`.
	 * @param ctx the parse tree
	 */
	enterPatternVariable?: (ctx: PatternVariableContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.patternVariable`.
	 * @param ctx the parse tree
	 */
	exitPatternVariable?: (ctx: PatternVariableContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.outputMode`.
	 * @param ctx the parse tree
	 */
	enterOutputMode?: (ctx: OutputModeContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.outputMode`.
	 * @param ctx the parse tree
	 */
	exitOutputMode?: (ctx: OutputModeContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.afterMatchStrategy`.
	 * @param ctx the parse tree
	 */
	enterAfterMatchStrategy?: (ctx: AfterMatchStrategyContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.afterMatchStrategy`.
	 * @param ctx the parse tree
	 */
	exitAfterMatchStrategy?: (ctx: AfterMatchStrategyContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.patternVariablesDefinition`.
	 * @param ctx the parse tree
	 */
	enterPatternVariablesDefinition?: (ctx: PatternVariablesDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.patternVariablesDefinition`.
	 * @param ctx the parse tree
	 */
	exitPatternVariablesDefinition?: (ctx: PatternVariablesDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.windowFrame`.
	 * @param ctx the parse tree
	 */
	enterWindowFrame?: (ctx: WindowFrameContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.windowFrame`.
	 * @param ctx the parse tree
	 */
	exitWindowFrame?: (ctx: WindowFrameContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.frameBound`.
	 * @param ctx the parse tree
	 */
	enterFrameBound?: (ctx: FrameBoundContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.frameBound`.
	 * @param ctx the parse tree
	 */
	exitFrameBound?: (ctx: FrameBoundContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.withinClause`.
	 * @param ctx the parse tree
	 */
	enterWithinClause?: (ctx: WithinClauseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.withinClause`.
	 * @param ctx the parse tree
	 */
	exitWithinClause?: (ctx: WithinClauseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.analyzePartitionDefinition`.
	 * @param ctx the parse tree
	 */
	enterAnalyzePartitionDefinition?: (ctx: AnalyzePartitionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.analyzePartitionDefinition`.
	 * @param ctx the parse tree
	 */
	exitAnalyzePartitionDefinition?: (ctx: AnalyzePartitionDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.selfDefinitionClause`.
	 * @param ctx the parse tree
	 */
	enterSelfDefinitionClause?: (ctx: SelfDefinitionClauseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.selfDefinitionClause`.
	 * @param ctx the parse tree
	 */
	exitSelfDefinitionClause?: (ctx: SelfDefinitionClauseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.partitionDefinition`.
	 * @param ctx the parse tree
	 */
	enterPartitionDefinition?: (ctx: PartitionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.partitionDefinition`.
	 * @param ctx the parse tree
	 */
	exitPartitionDefinition?: (ctx: PartitionDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.transformList`.
	 * @param ctx the parse tree
	 */
	enterTransformList?: (ctx: TransformListContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.transformList`.
	 * @param ctx the parse tree
	 */
	exitTransformList?: (ctx: TransformListContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.transform`.
	 * @param ctx the parse tree
	 */
	enterTransform?: (ctx: TransformContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.transform`.
	 * @param ctx the parse tree
	 */
	exitTransform?: (ctx: TransformContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.transformArgument`.
	 * @param ctx the parse tree
	 */
	enterTransformArgument?: (ctx: TransformArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.transformArgument`.
	 * @param ctx the parse tree
	 */
	exitTransformArgument?: (ctx: TransformArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.likeDefinition`.
	 * @param ctx the parse tree
	 */
	enterLikeDefinition?: (ctx: LikeDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.likeDefinition`.
	 * @param ctx the parse tree
	 */
	exitLikeDefinition?: (ctx: LikeDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.distributed`.
	 * @param ctx the parse tree
	 */
	enterDistributed?: (ctx: DistributedContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.distributed`.
	 * @param ctx the parse tree
	 */
	exitDistributed?: (ctx: DistributedContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.distribution`.
	 * @param ctx the parse tree
	 */
	enterDistribution?: (ctx: DistributionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.distribution`.
	 * @param ctx the parse tree
	 */
	exitDistribution?: (ctx: DistributionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.likeOption`.
	 * @param ctx the parse tree
	 */
	enterLikeOption?: (ctx: LikeOptionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.likeOption`.
	 * @param ctx the parse tree
	 */
	exitLikeOption?: (ctx: LikeOptionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.columnOptionDefinition`.
	 * @param ctx the parse tree
	 */
	enterColumnOptionDefinition?: (ctx: ColumnOptionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.columnOptionDefinition`.
	 * @param ctx the parse tree
	 */
	exitColumnOptionDefinition?: (ctx: ColumnOptionDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.physicalColumnDefinition`.
	 * @param ctx the parse tree
	 */
	enterPhysicalColumnDefinition?: (ctx: PhysicalColumnDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.physicalColumnDefinition`.
	 * @param ctx the parse tree
	 */
	exitPhysicalColumnDefinition?: (ctx: PhysicalColumnDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.computedColumnExpression`.
	 * @param ctx the parse tree
	 */
	enterComputedColumnExpression?: (ctx: ComputedColumnExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.computedColumnExpression`.
	 * @param ctx the parse tree
	 */
	exitComputedColumnExpression?: (ctx: ComputedColumnExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.watermarkDefinition`.
	 * @param ctx the parse tree
	 */
	enterWatermarkDefinition?: (ctx: WatermarkDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.watermarkDefinition`.
	 * @param ctx the parse tree
	 */
	exitWatermarkDefinition?: (ctx: WatermarkDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.tableConstraint`.
	 * @param ctx the parse tree
	 */
	enterTableConstraint?: (ctx: TableConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.tableConstraint`.
	 * @param ctx the parse tree
	 */
	exitTableConstraint?: (ctx: TableConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.constraintName`.
	 * @param ctx the parse tree
	 */
	enterConstraintName?: (ctx: ConstraintNameContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.constraintName`.
	 * @param ctx the parse tree
	 */
	exitConstraintName?: (ctx: ConstraintNameContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.valuesDefinition`.
	 * @param ctx the parse tree
	 */
	enterValuesDefinition?: (ctx: ValuesDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.valuesDefinition`.
	 * @param ctx the parse tree
	 */
	exitValuesDefinition?: (ctx: ValuesDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.valuesRowDefinition`.
	 * @param ctx the parse tree
	 */
	enterValuesRowDefinition?: (ctx: ValuesRowDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.valuesRowDefinition`.
	 * @param ctx the parse tree
	 */
	exitValuesRowDefinition?: (ctx: ValuesRowDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.lengthOneDimension`.
	 * @param ctx the parse tree
	 */
	enterLengthOneDimension?: (ctx: LengthOneDimensionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.lengthOneDimension`.
	 * @param ctx the parse tree
	 */
	exitLengthOneDimension?: (ctx: LengthOneDimensionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.lengthTwoOptionalDimension`.
	 * @param ctx the parse tree
	 */
	enterLengthTwoOptionalDimension?: (ctx: LengthTwoOptionalDimensionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.lengthTwoOptionalDimension`.
	 * @param ctx the parse tree
	 */
	exitLengthTwoOptionalDimension?: (ctx: LengthTwoOptionalDimensionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.lengthTwoStringDimension`.
	 * @param ctx the parse tree
	 */
	enterLengthTwoStringDimension?: (ctx: LengthTwoStringDimensionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.lengthTwoStringDimension`.
	 * @param ctx the parse tree
	 */
	exitLengthTwoStringDimension?: (ctx: LengthTwoStringDimensionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.lengthOneTypeDimension`.
	 * @param ctx the parse tree
	 */
	enterLengthOneTypeDimension?: (ctx: LengthOneTypeDimensionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.lengthOneTypeDimension`.
	 * @param ctx the parse tree
	 */
	exitLengthOneTypeDimension?: (ctx: LengthOneTypeDimensionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.mapTypeDimension`.
	 * @param ctx the parse tree
	 */
	enterMapTypeDimension?: (ctx: MapTypeDimensionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.mapTypeDimension`.
	 * @param ctx the parse tree
	 */
	exitMapTypeDimension?: (ctx: MapTypeDimensionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.rowTypeDimension`.
	 * @param ctx the parse tree
	 */
	enterRowTypeDimension?: (ctx: RowTypeDimensionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.rowTypeDimension`.
	 * @param ctx the parse tree
	 */
	exitRowTypeDimension?: (ctx: RowTypeDimensionContext) => void;

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
	 * Enter a parse tree produced by `FlinkSQLParser.commentSpec`.
	 * @param ctx the parse tree
	 */
	enterCommentSpec?: (ctx: CommentSpecContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.commentSpec`.
	 * @param ctx the parse tree
	 */
	exitCommentSpec?: (ctx: CommentSpecContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.metadataColumnDefinition`.
	 * @param ctx the parse tree
	 */
	enterMetadataColumnDefinition?: (ctx: MetadataColumnDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.metadataColumnDefinition`.
	 * @param ctx the parse tree
	 */
	exitMetadataColumnDefinition?: (ctx: MetadataColumnDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.metadataKey`.
	 * @param ctx the parse tree
	 */
	enterMetadataKey?: (ctx: MetadataKeyContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.metadataKey`.
	 * @param ctx the parse tree
	 */
	exitMetadataKey?: (ctx: MetadataKeyContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.computedColumnDefinition`.
	 * @param ctx the parse tree
	 */
	enterComputedColumnDefinition?: (ctx: ComputedColumnDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.computedColumnDefinition`.
	 * @param ctx the parse tree
	 */
	exitComputedColumnDefinition?: (ctx: ComputedColumnDefinitionContext) => void;

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
	 * Enter a parse tree produced by `FlinkSQLParser.columnNameList`.
	 * @param ctx the parse tree
	 */
	enterColumnNameList?: (ctx: ColumnNameListContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.columnNameList`.
	 * @param ctx the parse tree
	 */
	exitColumnNameList?: (ctx: ColumnNameListContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.columnType`.
	 * @param ctx the parse tree
	 */
	enterColumnType?: (ctx: ColumnTypeContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.columnType`.
	 * @param ctx the parse tree
	 */
	exitColumnType?: (ctx: ColumnTypeContext) => void;

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
	 * Enter a parse tree produced by `FlinkSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanExpression?: (ctx: BooleanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanExpression?: (ctx: BooleanExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterPredicate?: (ctx: PredicateContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitPredicate?: (ctx: PredicateContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.likePredicate`.
	 * @param ctx the parse tree
	 */
	enterLikePredicate?: (ctx: LikePredicateContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.likePredicate`.
	 * @param ctx the parse tree
	 */
	exitLikePredicate?: (ctx: LikePredicateContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterValueExpression?: (ctx: ValueExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitValueExpression?: (ctx: ValueExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.complexDataTypeExpression`.
	 * @param ctx the parse tree
	 */
	enterComplexDataTypeExpression?: (ctx: ComplexDataTypeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.complexDataTypeExpression`.
	 * @param ctx the parse tree
	 */
	exitComplexDataTypeExpression?: (ctx: ComplexDataTypeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.arrayExpression`.
	 * @param ctx the parse tree
	 */
	enterArrayExpression?: (ctx: ArrayExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.arrayExpression`.
	 * @param ctx the parse tree
	 */
	exitArrayExpression?: (ctx: ArrayExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.rowExpression`.
	 * @param ctx the parse tree
	 */
	enterRowExpression?: (ctx: RowExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.rowExpression`.
	 * @param ctx the parse tree
	 */
	exitRowExpression?: (ctx: RowExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.mapExpression`.
	 * @param ctx the parse tree
	 */
	enterMapExpression?: (ctx: MapExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.mapExpression`.
	 * @param ctx the parse tree
	 */
	exitMapExpression?: (ctx: MapExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.dataTypeExpression`.
	 * @param ctx the parse tree
	 */
	enterDataTypeExpression?: (ctx: DataTypeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.dataTypeExpression`.
	 * @param ctx the parse tree
	 */
	exitDataTypeExpression?: (ctx: DataTypeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.functionName`.
	 * @param ctx the parse tree
	 */
	enterFunctionName?: (ctx: FunctionNameContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.functionName`.
	 * @param ctx the parse tree
	 */
	exitFunctionName?: (ctx: FunctionNameContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.functionParam`.
	 * @param ctx the parse tree
	 */
	enterFunctionParam?: (ctx: FunctionParamContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.functionParam`.
	 * @param ctx the parse tree
	 */
	exitFunctionParam?: (ctx: FunctionParamContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.filterClause`.
	 * @param ctx the parse tree
	 */
	enterFilterClause?: (ctx: FilterClauseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.filterClause`.
	 * @param ctx the parse tree
	 */
	exitFilterClause?: (ctx: FilterClauseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.dereferenceDefinition`.
	 * @param ctx the parse tree
	 */
	enterDereferenceDefinition?: (ctx: DereferenceDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.dereferenceDefinition`.
	 * @param ctx the parse tree
	 */
	exitDereferenceDefinition?: (ctx: DereferenceDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.correlationName`.
	 * @param ctx the parse tree
	 */
	enterCorrelationName?: (ctx: CorrelationNameContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.correlationName`.
	 * @param ctx the parse tree
	 */
	exitCorrelationName?: (ctx: CorrelationNameContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.timeIntervalExpression`.
	 * @param ctx the parse tree
	 */
	enterTimeIntervalExpression?: (ctx: TimeIntervalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.timeIntervalExpression`.
	 * @param ctx the parse tree
	 */
	exitTimeIntervalExpression?: (ctx: TimeIntervalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.errorCapturingMultiUnitsInterval`.
	 * @param ctx the parse tree
	 */
	enterErrorCapturingMultiUnitsInterval?: (ctx: ErrorCapturingMultiUnitsIntervalContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.errorCapturingMultiUnitsInterval`.
	 * @param ctx the parse tree
	 */
	exitErrorCapturingMultiUnitsInterval?: (ctx: ErrorCapturingMultiUnitsIntervalContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.multiUnitsInterval`.
	 * @param ctx the parse tree
	 */
	enterMultiUnitsInterval?: (ctx: MultiUnitsIntervalContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.multiUnitsInterval`.
	 * @param ctx the parse tree
	 */
	exitMultiUnitsInterval?: (ctx: MultiUnitsIntervalContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.errorCapturingUnitToUnitInterval`.
	 * @param ctx the parse tree
	 */
	enterErrorCapturingUnitToUnitInterval?: (ctx: ErrorCapturingUnitToUnitIntervalContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.errorCapturingUnitToUnitInterval`.
	 * @param ctx the parse tree
	 */
	exitErrorCapturingUnitToUnitInterval?: (ctx: ErrorCapturingUnitToUnitIntervalContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.unitToUnitInterval`.
	 * @param ctx the parse tree
	 */
	enterUnitToUnitInterval?: (ctx: UnitToUnitIntervalContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.unitToUnitInterval`.
	 * @param ctx the parse tree
	 */
	exitUnitToUnitInterval?: (ctx: UnitToUnitIntervalContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.intervalValue`.
	 * @param ctx the parse tree
	 */
	enterIntervalValue?: (ctx: IntervalValueContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.intervalValue`.
	 * @param ctx the parse tree
	 */
	exitIntervalValue?: (ctx: IntervalValueContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.columnAlias`.
	 * @param ctx the parse tree
	 */
	enterColumnAlias?: (ctx: ColumnAliasContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.columnAlias`.
	 * @param ctx the parse tree
	 */
	exitColumnAlias?: (ctx: ColumnAliasContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.tableAlias`.
	 * @param ctx the parse tree
	 */
	enterTableAlias?: (ctx: TableAliasContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.tableAlias`.
	 * @param ctx the parse tree
	 */
	exitTableAlias?: (ctx: TableAliasContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.errorCapturingIdentifier`.
	 * @param ctx the parse tree
	 */
	enterErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.errorCapturingIdentifier`.
	 * @param ctx the parse tree
	 */
	exitErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 */
	enterErrorCapturingIdentifierExtra?: (ctx: ErrorCapturingIdentifierExtraContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 */
	exitErrorCapturingIdentifierExtra?: (ctx: ErrorCapturingIdentifierExtraContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.identifierList`.
	 * @param ctx the parse tree
	 */
	enterIdentifierList?: (ctx: IdentifierListContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.identifierList`.
	 * @param ctx the parse tree
	 */
	exitIdentifierList?: (ctx: IdentifierListContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.identifierSeq`.
	 * @param ctx the parse tree
	 */
	enterIdentifierSeq?: (ctx: IdentifierSeqContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.identifierSeq`.
	 * @param ctx the parse tree
	 */
	exitIdentifierSeq?: (ctx: IdentifierSeqContext) => void;

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
	 * Enter a parse tree produced by `FlinkSQLParser.refVar`.
	 * @param ctx the parse tree
	 */
	enterRefVar?: (ctx: RefVarContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.refVar`.
	 * @param ctx the parse tree
	 */
	exitRefVar?: (ctx: RefVarContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.unquotedIdentifier`.
	 * @param ctx the parse tree
	 */
	enterUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.unquotedIdentifier`.
	 * @param ctx the parse tree
	 */
	exitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.quotedIdentifier`.
	 * @param ctx the parse tree
	 */
	enterQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.quotedIdentifier`.
	 * @param ctx the parse tree
	 */
	exitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.whenClause`.
	 * @param ctx the parse tree
	 */
	enterWhenClause?: (ctx: WhenClauseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.whenClause`.
	 * @param ctx the parse tree
	 */
	exitWhenClause?: (ctx: WhenClauseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.catalogPath`.
	 * @param ctx the parse tree
	 */
	enterCatalogPath?: (ctx: CatalogPathContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.catalogPath`.
	 * @param ctx the parse tree
	 */
	exitCatalogPath?: (ctx: CatalogPathContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.databasePath`.
	 * @param ctx the parse tree
	 */
	enterDatabasePath?: (ctx: DatabasePathContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.databasePath`.
	 * @param ctx the parse tree
	 */
	exitDatabasePath?: (ctx: DatabasePathContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.databasePathCreate`.
	 * @param ctx the parse tree
	 */
	enterDatabasePathCreate?: (ctx: DatabasePathCreateContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.databasePathCreate`.
	 * @param ctx the parse tree
	 */
	exitDatabasePathCreate?: (ctx: DatabasePathCreateContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.tablePathCreate`.
	 * @param ctx the parse tree
	 */
	enterTablePathCreate?: (ctx: TablePathCreateContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.tablePathCreate`.
	 * @param ctx the parse tree
	 */
	exitTablePathCreate?: (ctx: TablePathCreateContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.tablePath`.
	 * @param ctx the parse tree
	 */
	enterTablePath?: (ctx: TablePathContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.tablePath`.
	 * @param ctx the parse tree
	 */
	exitTablePath?: (ctx: TablePathContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.uid`.
	 * @param ctx the parse tree
	 */
	enterUid?: (ctx: UidContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.uid`.
	 * @param ctx the parse tree
	 */
	exitUid?: (ctx: UidContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.withOption`.
	 * @param ctx the parse tree
	 */
	enterWithOption?: (ctx: WithOptionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.withOption`.
	 * @param ctx the parse tree
	 */
	exitWithOption?: (ctx: WithOptionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.ifNotExists`.
	 * @param ctx the parse tree
	 */
	enterIfNotExists?: (ctx: IfNotExistsContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.ifNotExists`.
	 * @param ctx the parse tree
	 */
	exitIfNotExists?: (ctx: IfNotExistsContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.ifExists`.
	 * @param ctx the parse tree
	 */
	enterIfExists?: (ctx: IfExistsContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.ifExists`.
	 * @param ctx the parse tree
	 */
	exitIfExists?: (ctx: IfExistsContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.tableCanHasKeyPropertyList`.
	 * @param ctx the parse tree
	 */
	enterTableCanHasKeyPropertyList?: (ctx: TableCanHasKeyPropertyListContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.tableCanHasKeyPropertyList`.
	 * @param ctx the parse tree
	 */
	exitTableCanHasKeyPropertyList?: (ctx: TableCanHasKeyPropertyListContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.tablePropertyList`.
	 * @param ctx the parse tree
	 */
	enterTablePropertyList?: (ctx: TablePropertyListContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.tablePropertyList`.
	 * @param ctx the parse tree
	 */
	exitTablePropertyList?: (ctx: TablePropertyListContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.tableProperty`.
	 * @param ctx the parse tree
	 */
	enterTableProperty?: (ctx: TablePropertyContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.tableProperty`.
	 * @param ctx the parse tree
	 */
	exitTableProperty?: (ctx: TablePropertyContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.tablePropertyKey`.
	 * @param ctx the parse tree
	 */
	enterTablePropertyKey?: (ctx: TablePropertyKeyContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.tablePropertyKey`.
	 * @param ctx the parse tree
	 */
	exitTablePropertyKey?: (ctx: TablePropertyKeyContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.tablePropertyValue`.
	 * @param ctx the parse tree
	 */
	enterTablePropertyValue?: (ctx: TablePropertyValueContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.tablePropertyValue`.
	 * @param ctx the parse tree
	 */
	exitTablePropertyValue?: (ctx: TablePropertyValueContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.timePointLiteral`.
	 * @param ctx the parse tree
	 */
	enterTimePointLiteral?: (ctx: TimePointLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.timePointLiteral`.
	 * @param ctx the parse tree
	 */
	exitTimePointLiteral?: (ctx: TimePointLiteralContext) => void;

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
	 * Enter a parse tree produced by `FlinkSQLParser.decimalLiteral`.
	 * @param ctx the parse tree
	 */
	enterDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.decimalLiteral`.
	 * @param ctx the parse tree
	 */
	exitDecimalLiteral?: (ctx: DecimalLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.booleanLiteral`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.booleanLiteral`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.setQuantifier`.
	 * @param ctx the parse tree
	 */
	enterSetQuantifier?: (ctx: SetQuantifierContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.setQuantifier`.
	 * @param ctx the parse tree
	 */
	exitSetQuantifier?: (ctx: SetQuantifierContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.timePointUnit`.
	 * @param ctx the parse tree
	 */
	enterTimePointUnit?: (ctx: TimePointUnitContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.timePointUnit`.
	 * @param ctx the parse tree
	 */
	exitTimePointUnit?: (ctx: TimePointUnitContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.timeIntervalUnit`.
	 * @param ctx the parse tree
	 */
	enterTimeIntervalUnit?: (ctx: TimeIntervalUnitContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.timeIntervalUnit`.
	 * @param ctx the parse tree
	 */
	exitTimeIntervalUnit?: (ctx: TimeIntervalUnitContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.reservedKeywordsUsedAsFuncParam`.
	 * @param ctx the parse tree
	 */
	enterReservedKeywordsUsedAsFuncParam?: (ctx: ReservedKeywordsUsedAsFuncParamContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.reservedKeywordsUsedAsFuncParam`.
	 * @param ctx the parse tree
	 */
	exitReservedKeywordsUsedAsFuncParam?: (ctx: ReservedKeywordsUsedAsFuncParamContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.reservedKeywordsUsedAsFuncName`.
	 * @param ctx the parse tree
	 */
	enterReservedKeywordsUsedAsFuncName?: (ctx: ReservedKeywordsUsedAsFuncNameContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.reservedKeywordsUsedAsFuncName`.
	 * @param ctx the parse tree
	 */
	exitReservedKeywordsUsedAsFuncName?: (ctx: ReservedKeywordsUsedAsFuncNameContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.nonReservedKeywords`.
	 * @param ctx the parse tree
	 */
	enterNonReservedKeywords?: (ctx: NonReservedKeywordsContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.nonReservedKeywords`.
	 * @param ctx the parse tree
	 */
	exitNonReservedKeywords?: (ctx: NonReservedKeywordsContext) => void;

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
	 * Enter a parse tree produced by `FlinkSQLParser.joinOp`.
	 * @param ctx the parse tree
	 */
	enterJoinOp?: (ctx: JoinOpContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.joinOp`.
	 * @param ctx the parse tree
	 */
	exitJoinOp?: (ctx: JoinOpContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSQLParser.tableExpressionPlus`.
	 * @param ctx the parse tree
	 */
	enterTableExpressionPlus?: (ctx: TableExpressionPlusContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSQLParser.tableExpressionPlus`.
	 * @param ctx the parse tree
	 */
	exitTableExpressionPlus?: (ctx: TableExpressionPlusContext) => void;
}

