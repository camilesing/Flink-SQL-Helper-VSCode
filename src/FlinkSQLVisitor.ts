// Generated from gen/FlinkSQL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FlinkSQLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface FlinkSQLVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `values_caluse`
	 * labeled alternative in `FlinkSQLParser.queryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValues_caluse?: (ctx: Values_caluseContext) => Result;

	/**
	 * Visit a parse tree produced by the `sub_query`
	 * labeled alternative in `FlinkSQLParser.queryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSub_query?: (ctx: Sub_queryContext) => Result;

	/**
	 * Visit a parse tree produced by the `union_query`
	 * labeled alternative in `FlinkSQLParser.queryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnion_query?: (ctx: Union_queryContext) => Result;

	/**
	 * Visit a parse tree produced by the `common_select`
	 * labeled alternative in `FlinkSQLParser.queryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommon_select?: (ctx: Common_selectContext) => Result;

	/**
	 * Visit a parse tree produced by the `unquotedIdentifierAlternative`
	 * labeled alternative in `FlinkSQLParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnquotedIdentifierAlternative?: (ctx: UnquotedIdentifierAlternativeContext) => Result;

	/**
	 * Visit a parse tree produced by the `quotedIdentifierAlternative`
	 * labeled alternative in `FlinkSQLParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedIdentifierAlternative?: (ctx: QuotedIdentifierAlternativeContext) => Result;

	/**
	 * Visit a parse tree produced by the `nonReservedKeywordsAlternative`
	 * labeled alternative in `FlinkSQLParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonReservedKeywordsAlternative?: (ctx: NonReservedKeywordsAlternativeContext) => Result;

	/**
	 * Visit a parse tree produced by the `urefVarAlternative`
	 * labeled alternative in `FlinkSQLParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUrefVarAlternative?: (ctx: UrefVarAlternativeContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `FlinkSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `FlinkSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `FlinkSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `comparison`
	 * labeled alternative in `FlinkSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `searchedCase`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearchedCase?: (ctx: SearchedCaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `simpleCase`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleCase?: (ctx: SimpleCaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `cast`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCast?: (ctx: CastContext) => Result;

	/**
	 * Visit a parse tree produced by the `first`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFirst?: (ctx: FirstContext) => Result;

	/**
	 * Visit a parse tree produced by the `last`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLast?: (ctx: LastContext) => Result;

	/**
	 * Visit a parse tree produced by the `position`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosition?: (ctx: PositionContext) => Result;

	/**
	 * Visit a parse tree produced by the `constantDefault`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantDefault?: (ctx: ConstantDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `star`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStar?: (ctx: StarContext) => Result;

	/**
	 * Visit a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubqueryExpression?: (ctx: SubqueryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCall`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCallFilter`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallFilter?: (ctx: FunctionCallFilterContext) => Result;

	/**
	 * Visit a parse tree produced by the `subscript`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript?: (ctx: SubscriptContext) => Result;

	/**
	 * Visit a parse tree produced by the `columnReference`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnReference?: (ctx: ColumnReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by the `dereference`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDereference?: (ctx: DereferenceContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `complexDataTypeFieldExpression`
	 * labeled alternative in `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComplexDataTypeFieldExpression?: (ctx: ComplexDataTypeFieldExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `lengthSymbolsTypeDimension`
	 * labeled alternative in `FlinkSQLParser.lengthOneTypeDimension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLengthSymbolsTypeDimension?: (ctx: LengthSymbolsTypeDimensionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ddlPart`
	 * labeled alternative in `FlinkSQLParser.sqlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDdlPart?: (ctx: DdlPartContext) => Result;

	/**
	 * Visit a parse tree produced by the `dmlPart`
	 * labeled alternative in `FlinkSQLParser.sqlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDmlPart?: (ctx: DmlPartContext) => Result;

	/**
	 * Visit a parse tree produced by the `alter`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter?: (ctx: AlterContext) => Result;

	/**
	 * Visit a parse tree produced by the `addOrModifyNewColumn`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddOrModifyNewColumn?: (ctx: AddOrModifyNewColumnContext) => Result;

	/**
	 * Visit a parse tree produced by the `addOrModifyNewColumns`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddOrModifyNewColumns?: (ctx: AddOrModifyNewColumnsContext) => Result;

	/**
	 * Visit a parse tree produced by the `addNewPartitions`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddNewPartitions?: (ctx: AddNewPartitionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropAcolumn`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropAcolumn?: (ctx: DropAcolumnContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropColumnList`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropColumnList?: (ctx: DropColumnListContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropPrimaryKey`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropPrimaryKey?: (ctx: DropPrimaryKeyContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropPartitions`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropPartitions?: (ctx: DropPartitionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropWatermark`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropWatermark?: (ctx: DropWatermarkContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropDistribution`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropDistribution?: (ctx: DropDistributionContext) => Result;

	/**
	 * Visit a parse tree produced by the `renameColumn`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameColumn?: (ctx: RenameColumnContext) => Result;

	/**
	 * Visit a parse tree produced by the `renameTable`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameTable?: (ctx: RenameTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `setPropertiy`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetPropertiy?: (ctx: SetPropertiyContext) => Result;

	/**
	 * Visit a parse tree produced by the `resetPropertiy`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResetPropertiy?: (ctx: ResetPropertiyContext) => Result;

	/**
	 * Visit a parse tree produced by the `addDistribution`
	 * labeled alternative in `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddDistribution?: (ctx: AddDistributionContext) => Result;

	/**
	 * Visit a parse tree produced by the `errorIdent`
	 * labeled alternative in `FlinkSQLParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorIdent?: (ctx: ErrorIdentContext) => Result;

	/**
	 * Visit a parse tree produced by the `realIdent`
	 * labeled alternative in `FlinkSQLParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRealIdent?: (ctx: RealIdentContext) => Result;

	/**
	 * Visit a parse tree produced by the `rowSymbolsTypeDimension`
	 * labeled alternative in `FlinkSQLParser.rowTypeDimension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowSymbolsTypeDimension?: (ctx: RowSymbolsTypeDimensionContext) => Result;

	/**
	 * Visit a parse tree produced by the `identityTransform`
	 * labeled alternative in `FlinkSQLParser.transform`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentityTransform?: (ctx: IdentityTransformContext) => Result;

	/**
	 * Visit a parse tree produced by the `applyTransform`
	 * labeled alternative in `FlinkSQLParser.transform`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApplyTransform?: (ctx: ApplyTransformContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalNot`
	 * labeled alternative in `FlinkSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalNot?: (ctx: LogicalNotContext) => Result;

	/**
	 * Visit a parse tree produced by the `exists`
	 * labeled alternative in `FlinkSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExists?: (ctx: ExistsContext) => Result;

	/**
	 * Visit a parse tree produced by the `predicated`
	 * labeled alternative in `FlinkSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicated?: (ctx: PredicatedContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalBinary`
	 * labeled alternative in `FlinkSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalBinary?: (ctx: LogicalBinaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalNested`
	 * labeled alternative in `FlinkSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalNested?: (ctx: LogicalNestedContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.sqlStatements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlStatements?: (ctx: SqlStatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.sqlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlStatement?: (ctx: SqlStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.emptyStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyStatement?: (ctx: EmptyStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.ddlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDdlStatement?: (ctx: DdlStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.createStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateStatement?: (ctx: CreateStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.dmlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDmlStatement?: (ctx: DmlStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.createTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTable?: (ctx: CreateTableContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.simpleCreateTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleCreateTable?: (ctx: SimpleCreateTableContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.likeCreateTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLikeCreateTable?: (ctx: LikeCreateTableContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.createTableAsSelect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTableAsSelect?: (ctx: CreateTableAsSelectContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.usingClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsingClause?: (ctx: UsingClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.jarFileName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJarFileName?: (ctx: JarFileNameContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.alterTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTable?: (ctx: AlterTableContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.columnPosition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnPosition?: (ctx: ColumnPositionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.renameDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameDefinition?: (ctx: RenameDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.setKeyValueDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetKeyValueDefinition?: (ctx: SetKeyValueDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.addConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddConstraint?: (ctx: AddConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.dropConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropConstraint?: (ctx: DropConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.addUnique`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddUnique?: (ctx: AddUniqueContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.notForced`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotForced?: (ctx: NotForcedContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.alertView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlertView?: (ctx: AlertViewContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.alterCatalog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterCatalog?: (ctx: AlterCatalogContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.alterDatabase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDatabase?: (ctx: AlterDatabaseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.alterFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterFunction?: (ctx: AlterFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.dropCatalog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropCatalog?: (ctx: DropCatalogContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.dropTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropTable?: (ctx: DropTableContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.dropDatabase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropDatabase?: (ctx: DropDatabaseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.dropView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropView?: (ctx: DropViewContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.dropFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropFunction?: (ctx: DropFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.insertStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertStatement?: (ctx: InsertStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.insertSimpleStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertSimpleStatement?: (ctx: InsertSimpleStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.insertPartitionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertPartitionDefinition?: (ctx: InsertPartitionDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.queryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryStatement?: (ctx: QueryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.valuesCaluse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValuesCaluse?: (ctx: ValuesCaluseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.withItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithItem?: (ctx: WithItemContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.withItemName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithItemName?: (ctx: WithItemNameContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.groupByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupByClause?: (ctx: GroupByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.selectClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectClause?: (ctx: SelectClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.projectItemDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProjectItemDefinition?: (ctx: ProjectItemDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.overWindowItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOverWindowItem?: (ctx: OverWindowItemContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.fromClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromClause?: (ctx: FromClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.tableExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableExpression?: (ctx: TableExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.flinkJoinOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlinkJoinOp?: (ctx: FlinkJoinOpContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.tableReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableReference?: (ctx: TableReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.tablePrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePrimary?: (ctx: TablePrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.timePeriod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimePeriod?: (ctx: TimePeriodContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.dateTimeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateTimeExpression?: (ctx: DateTimeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.inlineDataValueClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineDataValueClause?: (ctx: InlineDataValueClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.windowTVFClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowTVFClause?: (ctx: WindowTVFClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.windowTVFExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowTVFExpression?: (ctx: WindowTVFExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.tumableExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTumableExpression?: (ctx: TumableExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.hopExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHopExpression?: (ctx: HopExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.cumulateExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCumulateExpression?: (ctx: CumulateExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.sessionExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSessionExpression?: (ctx: SessionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.windowTVFName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowTVFName?: (ctx: WindowTVFNameContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.windowTVFParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowTVFParam?: (ctx: WindowTVFParamContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.timeIntervalParamName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeIntervalParamName?: (ctx: TimeIntervalParamNameContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.columnDescriptor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnDescriptor?: (ctx: ColumnDescriptorContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.joinCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinCondition?: (ctx: JoinConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.whereClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhereClause?: (ctx: WhereClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.groupItemDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupItemDefinition?: (ctx: GroupItemDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.groupingSets`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingSets?: (ctx: GroupingSetsContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.groupingSetsNotionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingSetsNotionName?: (ctx: GroupingSetsNotionNameContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.groupWindowFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupWindowFunction?: (ctx: GroupWindowFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.groupWindowFunctionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupWindowFunctionName?: (ctx: GroupWindowFunctionNameContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.timeAttrColumn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeAttrColumn?: (ctx: TimeAttrColumnContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.havingClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHavingClause?: (ctx: HavingClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.windowClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowClause?: (ctx: WindowClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.namedWindow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedWindow?: (ctx: NamedWindowContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.windowSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowSpec?: (ctx: WindowSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.matchRecognizeClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchRecognizeClause?: (ctx: MatchRecognizeClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.orderByCaluse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderByCaluse?: (ctx: OrderByCaluseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.orderItemDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderItemDefinition?: (ctx: OrderItemDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.limitClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLimitClause?: (ctx: LimitClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.partitionByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionByClause?: (ctx: PartitionByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.quantifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantifiers?: (ctx: QuantifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.measuresClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeasuresClause?: (ctx: MeasuresClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.patternDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternDefinition?: (ctx: PatternDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.patternVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternVariable?: (ctx: PatternVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.outputMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputMode?: (ctx: OutputModeContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.afterMatchStrategy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAfterMatchStrategy?: (ctx: AfterMatchStrategyContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.patternVariablesDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternVariablesDefinition?: (ctx: PatternVariablesDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.windowFrame`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowFrame?: (ctx: WindowFrameContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrameBound?: (ctx: FrameBoundContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.withinClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithinClause?: (ctx: WithinClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.analyzePartitionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnalyzePartitionDefinition?: (ctx: AnalyzePartitionDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.selfDefinitionClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelfDefinitionClause?: (ctx: SelfDefinitionClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.partitionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionDefinition?: (ctx: PartitionDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.transformList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransformList?: (ctx: TransformListContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.transform`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransform?: (ctx: TransformContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.transformArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransformArgument?: (ctx: TransformArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.likeDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLikeDefinition?: (ctx: LikeDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.distributed`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDistributed?: (ctx: DistributedContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.distribution`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDistribution?: (ctx: DistributionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.likeOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLikeOption?: (ctx: LikeOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.columnOptionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnOptionDefinition?: (ctx: ColumnOptionDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.physicalColumnDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPhysicalColumnDefinition?: (ctx: PhysicalColumnDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.computedColumnExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComputedColumnExpression?: (ctx: ComputedColumnExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.watermarkDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWatermarkDefinition?: (ctx: WatermarkDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.tableConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableConstraint?: (ctx: TableConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.constraintName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraintName?: (ctx: ConstraintNameContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.valuesDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValuesDefinition?: (ctx: ValuesDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.valuesRowDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValuesRowDefinition?: (ctx: ValuesRowDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.lengthOneDimension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLengthOneDimension?: (ctx: LengthOneDimensionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.lengthTwoOptionalDimension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLengthTwoOptionalDimension?: (ctx: LengthTwoOptionalDimensionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.lengthTwoStringDimension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLengthTwoStringDimension?: (ctx: LengthTwoStringDimensionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.lengthOneTypeDimension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLengthOneTypeDimension?: (ctx: LengthOneTypeDimensionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.mapTypeDimension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapTypeDimension?: (ctx: MapTypeDimensionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.rowTypeDimension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowTypeDimension?: (ctx: RowTypeDimensionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.columnConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnConstraint?: (ctx: ColumnConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.commentSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentSpec?: (ctx: CommentSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.metadataColumnDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetadataColumnDefinition?: (ctx: MetadataColumnDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.metadataKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetadataKey?: (ctx: MetadataKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.computedColumnDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComputedColumnDefinition?: (ctx: ComputedColumnDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.columnName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnName?: (ctx: ColumnNameContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.columnNameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameList?: (ctx: ColumnNameListContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.columnType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnType?: (ctx: ColumnTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate?: (ctx: PredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.likePredicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLikePredicate?: (ctx: LikePredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpression?: (ctx: ValueExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.complexDataTypeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComplexDataTypeExpression?: (ctx: ComplexDataTypeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.arrayExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayExpression?: (ctx: ArrayExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.rowExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowExpression?: (ctx: RowExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.mapExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapExpression?: (ctx: MapExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.dataTypeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataTypeExpression?: (ctx: DataTypeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.functionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionName?: (ctx: FunctionNameContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.functionParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionParam?: (ctx: FunctionParamContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.filterClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilterClause?: (ctx: FilterClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.dereferenceDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDereferenceDefinition?: (ctx: DereferenceDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.correlationName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCorrelationName?: (ctx: CorrelationNameContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.timeIntervalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeIntervalExpression?: (ctx: TimeIntervalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.errorCapturingMultiUnitsInterval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorCapturingMultiUnitsInterval?: (ctx: ErrorCapturingMultiUnitsIntervalContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.multiUnitsInterval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiUnitsInterval?: (ctx: MultiUnitsIntervalContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.errorCapturingUnitToUnitInterval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorCapturingUnitToUnitInterval?: (ctx: ErrorCapturingUnitToUnitIntervalContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.unitToUnitInterval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnitToUnitInterval?: (ctx: UnitToUnitIntervalContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.intervalValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalValue?: (ctx: IntervalValueContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.columnAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnAlias?: (ctx: ColumnAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.tableAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableAlias?: (ctx: TableAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.errorCapturingIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorCapturingIdentifierExtra?: (ctx: ErrorCapturingIdentifierExtraContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.identifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierList?: (ctx: IdentifierListContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.identifierSeq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierSeq?: (ctx: IdentifierSeqContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.refVar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefVar?: (ctx: RefVarContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.unquotedIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.quotedIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.whenClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenClause?: (ctx: WhenClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.catalogPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatalogPath?: (ctx: CatalogPathContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.databasePath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatabasePath?: (ctx: DatabasePathContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.databasePathCreate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatabasePathCreate?: (ctx: DatabasePathCreateContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.tablePathCreate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePathCreate?: (ctx: TablePathCreateContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.tablePath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePath?: (ctx: TablePathContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.uid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUid?: (ctx: UidContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.withOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithOption?: (ctx: WithOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.ifNotExists`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfNotExists?: (ctx: IfNotExistsContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.ifExists`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfExists?: (ctx: IfExistsContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.tableCanHasKeyPropertyList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableCanHasKeyPropertyList?: (ctx: TableCanHasKeyPropertyListContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.tablePropertyList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePropertyList?: (ctx: TablePropertyListContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.tableProperty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableProperty?: (ctx: TablePropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.tablePropertyKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePropertyKey?: (ctx: TablePropertyKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.tablePropertyValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePropertyValue?: (ctx: TablePropertyValueContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.comparisonOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.timePointLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimePointLiteral?: (ctx: TimePointLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.decimalLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimalLiteral?: (ctx: DecimalLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.booleanLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.setQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetQuantifier?: (ctx: SetQuantifierContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.timePointUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimePointUnit?: (ctx: TimePointUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.timeIntervalUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeIntervalUnit?: (ctx: TimeIntervalUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.reservedKeywordsUsedAsFuncParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReservedKeywordsUsedAsFuncParam?: (ctx: ReservedKeywordsUsedAsFuncParamContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.reservedKeywordsUsedAsFuncName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReservedKeywordsUsedAsFuncName?: (ctx: ReservedKeywordsUsedAsFuncNameContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.nonReservedKeywords`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonReservedKeywords?: (ctx: NonReservedKeywordsContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.selectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectStatement?: (ctx: SelectStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.joinOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinOp?: (ctx: JoinOpContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSQLParser.tableExpressionPlus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableExpressionPlus?: (ctx: TableExpressionPlusContext) => Result;
}

