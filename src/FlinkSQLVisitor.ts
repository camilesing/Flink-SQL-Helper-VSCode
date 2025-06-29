// Generated from gen/FlinkSQL.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { StatementContext } from "./FlinkSQLParser.js";
import { SqlStatementsContext } from "./FlinkSQLParser.js";
import { DdlPartContext } from "./FlinkSQLParser.js";
import { DmlPartContext } from "./FlinkSQLParser.js";
import { EmptyStatementContext } from "./FlinkSQLParser.js";
import { DdlStatementContext } from "./FlinkSQLParser.js";
import { CreateStatementContext } from "./FlinkSQLParser.js";
import { DmlStatementContext } from "./FlinkSQLParser.js";
import { SimpleCreateTableContext } from "./FlinkSQLParser.js";
import { LikeCreateTableContext } from "./FlinkSQLParser.js";
import { CreateTableAsSelectContext } from "./FlinkSQLParser.js";
import { UsingClauseContext } from "./FlinkSQLParser.js";
import { JarFileNameContext } from "./FlinkSQLParser.js";
import { AlterContext } from "./FlinkSQLParser.js";
import { AddOrModifyNewColumnContext } from "./FlinkSQLParser.js";
import { AddOrModifyNewColumnsContext } from "./FlinkSQLParser.js";
import { AddNewPartitionsContext } from "./FlinkSQLParser.js";
import { DropAcolumnContext } from "./FlinkSQLParser.js";
import { DropColumnListContext } from "./FlinkSQLParser.js";
import { DropPrimaryKeyContext } from "./FlinkSQLParser.js";
import { DropPartitionsContext } from "./FlinkSQLParser.js";
import { DropWatermarkContext } from "./FlinkSQLParser.js";
import { DropDistributionContext } from "./FlinkSQLParser.js";
import { RenameColumnContext } from "./FlinkSQLParser.js";
import { RenameTableContext } from "./FlinkSQLParser.js";
import { SetPropertiyContext } from "./FlinkSQLParser.js";
import { ResetPropertiyContext } from "./FlinkSQLParser.js";
import { AddDistributionContext } from "./FlinkSQLParser.js";
import { ColumnPositionContext } from "./FlinkSQLParser.js";
import { RenameDefinitionContext } from "./FlinkSQLParser.js";
import { SetKeyValueDefinitionContext } from "./FlinkSQLParser.js";
import { AddConstraintContext } from "./FlinkSQLParser.js";
import { DropConstraintContext } from "./FlinkSQLParser.js";
import { AddUniqueContext } from "./FlinkSQLParser.js";
import { NotForcedContext } from "./FlinkSQLParser.js";
import { AlertViewContext } from "./FlinkSQLParser.js";
import { AlterCatalogContext } from "./FlinkSQLParser.js";
import { AlterDatabaseContext } from "./FlinkSQLParser.js";
import { AlterFunctionContext } from "./FlinkSQLParser.js";
import { DropCatalogContext } from "./FlinkSQLParser.js";
import { DropTableContext } from "./FlinkSQLParser.js";
import { DropDatabaseContext } from "./FlinkSQLParser.js";
import { DropViewContext } from "./FlinkSQLParser.js";
import { DropFunctionContext } from "./FlinkSQLParser.js";
import { InsertSimpleStatementContext } from "./FlinkSQLParser.js";
import { InsertPartitionDefinitionContext } from "./FlinkSQLParser.js";
import { Common_selectContext } from "./FlinkSQLParser.js";
import { Values_caluseContext } from "./FlinkSQLParser.js";
import { Union_queryContext } from "./FlinkSQLParser.js";
import { Sub_queryContext } from "./FlinkSQLParser.js";
import { ValuesCaluseContext } from "./FlinkSQLParser.js";
import { WithItemContext } from "./FlinkSQLParser.js";
import { WithItemNameContext } from "./FlinkSQLParser.js";
import { GroupByClauseContext } from "./FlinkSQLParser.js";
import { FromClauseContext } from "./FlinkSQLParser.js";
import { TableReferenceContext } from "./FlinkSQLParser.js";
import { FlinkJoinOpContext } from "./FlinkSQLParser.js";
import { TablePrimaryContext } from "./FlinkSQLParser.js";
import { TimePeriodContext } from "./FlinkSQLParser.js";
import { DateTimeExpressionContext } from "./FlinkSQLParser.js";
import { InlineDataValueClauseContext } from "./FlinkSQLParser.js";
import { WindowTVFClauseContext } from "./FlinkSQLParser.js";
import { WindowTVFExpressionContext } from "./FlinkSQLParser.js";
import { TumableExpressionContext } from "./FlinkSQLParser.js";
import { HopExpressionContext } from "./FlinkSQLParser.js";
import { CumulateExpressionContext } from "./FlinkSQLParser.js";
import { SessionExpressionContext } from "./FlinkSQLParser.js";
import { WindowTVFNameContext } from "./FlinkSQLParser.js";
import { WindowTVFParamContext } from "./FlinkSQLParser.js";
import { TimeIntervalParamNameContext } from "./FlinkSQLParser.js";
import { ColumnDescriptorContext } from "./FlinkSQLParser.js";
import { JoinConditionContext } from "./FlinkSQLParser.js";
import { WhereClauseContext } from "./FlinkSQLParser.js";
import { GroupItemDefinitionContext } from "./FlinkSQLParser.js";
import { GroupingSetContext } from "./FlinkSQLParser.js";
import { GroupingSetsContext } from "./FlinkSQLParser.js";
import { GroupingSetsNotionNameContext } from "./FlinkSQLParser.js";
import { GroupWindowFunctionContext } from "./FlinkSQLParser.js";
import { GroupWindowFunctionNameContext } from "./FlinkSQLParser.js";
import { TimeAttrColumnContext } from "./FlinkSQLParser.js";
import { HavingClauseContext } from "./FlinkSQLParser.js";
import { WindowClauseContext } from "./FlinkSQLParser.js";
import { NamedWindowContext } from "./FlinkSQLParser.js";
import { WindowSpecContext } from "./FlinkSQLParser.js";
import { MatchRecognizeClauseContext } from "./FlinkSQLParser.js";
import { OrderByCaluseContext } from "./FlinkSQLParser.js";
import { OrderItemDefinitionContext } from "./FlinkSQLParser.js";
import { LimitClauseContext } from "./FlinkSQLParser.js";
import { PartitionByClauseContext } from "./FlinkSQLParser.js";
import { QuantifiersContext } from "./FlinkSQLParser.js";
import { MeasuresClauseContext } from "./FlinkSQLParser.js";
import { PatternDefinitionContext } from "./FlinkSQLParser.js";
import { PatternVariableContext } from "./FlinkSQLParser.js";
import { OutputModeContext } from "./FlinkSQLParser.js";
import { AfterMatchStrategyContext } from "./FlinkSQLParser.js";
import { PatternVariablesDefinitionContext } from "./FlinkSQLParser.js";
import { WindowFrameContext } from "./FlinkSQLParser.js";
import { FrameBoundContext } from "./FlinkSQLParser.js";
import { WithinClauseContext } from "./FlinkSQLParser.js";
import { AnalyzePartitionDefinitionContext } from "./FlinkSQLParser.js";
import { SelfDefinitionClauseContext } from "./FlinkSQLParser.js";
import { PartitionDefinitionContext } from "./FlinkSQLParser.js";
import { TransformListContext } from "./FlinkSQLParser.js";
import { IdentityTransformContext } from "./FlinkSQLParser.js";
import { ApplyTransformContext } from "./FlinkSQLParser.js";
import { TransformArgumentContext } from "./FlinkSQLParser.js";
import { LikeDefinitionContext } from "./FlinkSQLParser.js";
import { DistributedContext } from "./FlinkSQLParser.js";
import { DistributionContext } from "./FlinkSQLParser.js";
import { LikeOptionContext } from "./FlinkSQLParser.js";
import { ColumnOptionDefinitionContext } from "./FlinkSQLParser.js";
import { PhysicalColumnDefinitionContext } from "./FlinkSQLParser.js";
import { ComputedColumnExpressionContext } from "./FlinkSQLParser.js";
import { WatermarkDefinitionContext } from "./FlinkSQLParser.js";
import { TableConstraintContext } from "./FlinkSQLParser.js";
import { ConstraintNameContext } from "./FlinkSQLParser.js";
import { ValuesDefinitionContext } from "./FlinkSQLParser.js";
import { ValuesRowDefinitionContext } from "./FlinkSQLParser.js";
import { LengthOneDimensionContext } from "./FlinkSQLParser.js";
import { LengthTwoOptionalDimensionContext } from "./FlinkSQLParser.js";
import { LengthTwoStringDimensionContext } from "./FlinkSQLParser.js";
import { LengthSymbolsTypeDimensionContext } from "./FlinkSQLParser.js";
import { MapTypeDimensionContext } from "./FlinkSQLParser.js";
import { RowSymbolsTypeDimensionContext } from "./FlinkSQLParser.js";
import { ColumnConstraintContext } from "./FlinkSQLParser.js";
import { CommentSpecContext } from "./FlinkSQLParser.js";
import { MetadataColumnDefinitionContext } from "./FlinkSQLParser.js";
import { MetadataKeyContext } from "./FlinkSQLParser.js";
import { ComputedColumnDefinitionContext } from "./FlinkSQLParser.js";
import { ColumnNameContext } from "./FlinkSQLParser.js";
import { ColumnNameListContext } from "./FlinkSQLParser.js";
import { ColumnTypeContext } from "./FlinkSQLParser.js";
import { ExpressionContext } from "./FlinkSQLParser.js";
import { LogicalNotContext } from "./FlinkSQLParser.js";
import { PredicatedContext } from "./FlinkSQLParser.js";
import { ExistsContext } from "./FlinkSQLParser.js";
import { LogicalNestedContext } from "./FlinkSQLParser.js";
import { LogicalBinaryContext } from "./FlinkSQLParser.js";
import { PredicateContext } from "./FlinkSQLParser.js";
import { LikePredicateContext } from "./FlinkSQLParser.js";
import { ValueExpressionDefaultContext } from "./FlinkSQLParser.js";
import { ComparisonContext } from "./FlinkSQLParser.js";
import { ArithmeticBinaryContext } from "./FlinkSQLParser.js";
import { ArithmeticUnaryContext } from "./FlinkSQLParser.js";
import { DereferenceContext } from "./FlinkSQLParser.js";
import { SimpleCaseContext } from "./FlinkSQLParser.js";
import { ColumnReferenceContext } from "./FlinkSQLParser.js";
import { LastContext } from "./FlinkSQLParser.js";
import { StarContext } from "./FlinkSQLParser.js";
import { SubscriptContext } from "./FlinkSQLParser.js";
import { FunctionCallFilterContext } from "./FlinkSQLParser.js";
import { SubqueryExpressionContext } from "./FlinkSQLParser.js";
import { CastContext } from "./FlinkSQLParser.js";
import { ConstantDefaultContext } from "./FlinkSQLParser.js";
import { EmptyExpressionContext } from "./FlinkSQLParser.js";
import { ParenthesizedExpressionContext } from "./FlinkSQLParser.js";
import { ComplexDataTypeFieldExpressionContext } from "./FlinkSQLParser.js";
import { FunctionCallContext } from "./FlinkSQLParser.js";
import { SearchedCaseContext } from "./FlinkSQLParser.js";
import { PositionContext } from "./FlinkSQLParser.js";
import { FirstContext } from "./FlinkSQLParser.js";
import { ComplexDataTypeExpressionContext } from "./FlinkSQLParser.js";
import { ArrayExpressionContext } from "./FlinkSQLParser.js";
import { RowExpressionContext } from "./FlinkSQLParser.js";
import { MapExpressionContext } from "./FlinkSQLParser.js";
import { DataTypeExpressionContext } from "./FlinkSQLParser.js";
import { FunctionNameContext } from "./FlinkSQLParser.js";
import { FunctionParamContext } from "./FlinkSQLParser.js";
import { FilterClauseContext } from "./FlinkSQLParser.js";
import { DereferenceDefinitionContext } from "./FlinkSQLParser.js";
import { CorrelationNameContext } from "./FlinkSQLParser.js";
import { QualifiedNameContext } from "./FlinkSQLParser.js";
import { TimeIntervalExpressionContext } from "./FlinkSQLParser.js";
import { ErrorCapturingMultiUnitsIntervalContext } from "./FlinkSQLParser.js";
import { MultiUnitsIntervalContext } from "./FlinkSQLParser.js";
import { ErrorCapturingUnitToUnitIntervalContext } from "./FlinkSQLParser.js";
import { UnitToUnitIntervalContext } from "./FlinkSQLParser.js";
import { IntervalValueContext } from "./FlinkSQLParser.js";
import { ColumnAliasContext } from "./FlinkSQLParser.js";
import { TableAliasContext } from "./FlinkSQLParser.js";
import { ErrorCapturingIdentifierContext } from "./FlinkSQLParser.js";
import { ErrorIdentContext } from "./FlinkSQLParser.js";
import { RealIdentContext } from "./FlinkSQLParser.js";
import { IdentifierListContext } from "./FlinkSQLParser.js";
import { IdentifierSeqContext } from "./FlinkSQLParser.js";
import { UnquotedIdentifierAlternativeContext } from "./FlinkSQLParser.js";
import { QuotedIdentifierAlternativeContext } from "./FlinkSQLParser.js";
import { NonReservedKeywordsAlternativeContext } from "./FlinkSQLParser.js";
import { UrefVarAlternativeContext } from "./FlinkSQLParser.js";
import { RefVarContext } from "./FlinkSQLParser.js";
import { UnquotedIdentifierContext } from "./FlinkSQLParser.js";
import { QuotedIdentifierContext } from "./FlinkSQLParser.js";
import { WhenClauseContext } from "./FlinkSQLParser.js";
import { CatalogPathContext } from "./FlinkSQLParser.js";
import { DatabasePathContext } from "./FlinkSQLParser.js";
import { DatabasePathCreateContext } from "./FlinkSQLParser.js";
import { TablePathCreateContext } from "./FlinkSQLParser.js";
import { TablePathContext } from "./FlinkSQLParser.js";
import { UidContext } from "./FlinkSQLParser.js";
import { WithOptionContext } from "./FlinkSQLParser.js";
import { IfNotExistsContext } from "./FlinkSQLParser.js";
import { IfExistsContext } from "./FlinkSQLParser.js";
import { TableCanHasKeyPropertyListContext } from "./FlinkSQLParser.js";
import { TablePropertyListContext } from "./FlinkSQLParser.js";
import { TablePropertyContext } from "./FlinkSQLParser.js";
import { TablePropertyKeyContext } from "./FlinkSQLParser.js";
import { TablePropertyValueContext } from "./FlinkSQLParser.js";
import { ComparisonOperatorContext } from "./FlinkSQLParser.js";
import { ConstantContext } from "./FlinkSQLParser.js";
import { TimePointLiteralContext } from "./FlinkSQLParser.js";
import { StringLiteralContext } from "./FlinkSQLParser.js";
import { DecimalLiteralContext } from "./FlinkSQLParser.js";
import { BooleanLiteralContext } from "./FlinkSQLParser.js";
import { SetQuantifierContext } from "./FlinkSQLParser.js";
import { TimePointUnitContext } from "./FlinkSQLParser.js";
import { TimeIntervalUnitContext } from "./FlinkSQLParser.js";
import { ReservedKeywordsUsedAsFuncParamContext } from "./FlinkSQLParser.js";
import { ReservedKeywordsUsedAsFuncNameContext } from "./FlinkSQLParser.js";
import { NonReservedKeywordsContext } from "./FlinkSQLParser.js";
import { FlinkStyleProjectItemContext } from "./FlinkSQLParser.js";
import { CommonContext } from "./FlinkSQLParser.js";
import { CommonSQLContext } from "./FlinkSQLParser.js";
import { MatchRecognizeContext } from "./FlinkSQLParser.js";
import { FlinkStyleContext } from "./FlinkSQLParser.js";
import { CommonInsertContext } from "./FlinkSQLParser.js";
import { JoinOpContext } from "./FlinkSQLParser.js";
import { TableExpressionContext } from "./FlinkSQLParser.js";
import { SimpleContext } from "./FlinkSQLParser.js";
import { LikeContext } from "./FlinkSQLParser.js";
import { AsSelectContext } from "./FlinkSQLParser.js";
import { Flink_commnContext } from "./FlinkSQLParser.js";
import { Flink_common2Context } from "./FlinkSQLParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FlinkSQLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class FlinkSQLVisitor<Result> extends AbstractParseTreeVisitor<Result> {
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
     * Visit a parse tree produced by the `common_select`
     * labeled alternative in `FlinkSQLParser.queryStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommon_select?: (ctx: Common_selectContext) => Result;
    /**
     * Visit a parse tree produced by the `values_caluse`
     * labeled alternative in `FlinkSQLParser.queryStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValues_caluse?: (ctx: Values_caluseContext) => Result;
    /**
     * Visit a parse tree produced by the `union_query`
     * labeled alternative in `FlinkSQLParser.queryStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnion_query?: (ctx: Union_queryContext) => Result;
    /**
     * Visit a parse tree produced by the `sub_query`
     * labeled alternative in `FlinkSQLParser.queryStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSub_query?: (ctx: Sub_queryContext) => Result;
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
     * Visit a parse tree produced by `FlinkSQLParser.fromClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromClause?: (ctx: FromClauseContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSQLParser.tableReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableReference?: (ctx: TableReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSQLParser.flinkJoinOp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFlinkJoinOp?: (ctx: FlinkJoinOpContext) => Result;
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
     * Visit a parse tree produced by `FlinkSQLParser.groupingSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingSet?: (ctx: GroupingSetContext) => Result;
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
     * Visit a parse tree produced by the `lengthSymbolsTypeDimension`
     * labeled alternative in `FlinkSQLParser.lengthOneTypeDimension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLengthSymbolsTypeDimension?: (ctx: LengthSymbolsTypeDimensionContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSQLParser.mapTypeDimension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMapTypeDimension?: (ctx: MapTypeDimensionContext) => Result;
    /**
     * Visit a parse tree produced by the `rowSymbolsTypeDimension`
     * labeled alternative in `FlinkSQLParser.rowTypeDimension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowSymbolsTypeDimension?: (ctx: RowSymbolsTypeDimensionContext) => Result;
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
     * Visit a parse tree produced by the `logicalNot`
     * labeled alternative in `FlinkSQLParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalNot?: (ctx: LogicalNotContext) => Result;
    /**
     * Visit a parse tree produced by the `predicated`
     * labeled alternative in `FlinkSQLParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicated?: (ctx: PredicatedContext) => Result;
    /**
     * Visit a parse tree produced by the `exists`
     * labeled alternative in `FlinkSQLParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExists?: (ctx: ExistsContext) => Result;
    /**
     * Visit a parse tree produced by the `logicalNested`
     * labeled alternative in `FlinkSQLParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalNested?: (ctx: LogicalNestedContext) => Result;
    /**
     * Visit a parse tree produced by the `logicalBinary`
     * labeled alternative in `FlinkSQLParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalBinary?: (ctx: LogicalBinaryContext) => Result;
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
     * Visit a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `FlinkSQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `comparison`
     * labeled alternative in `FlinkSQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparison?: (ctx: ComparisonContext) => Result;
    /**
     * Visit a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `FlinkSQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => Result;
    /**
     * Visit a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `FlinkSQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => Result;
    /**
     * Visit a parse tree produced by the `dereference`
     * labeled alternative in `FlinkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDereference?: (ctx: DereferenceContext) => Result;
    /**
     * Visit a parse tree produced by the `simpleCase`
     * labeled alternative in `FlinkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleCase?: (ctx: SimpleCaseContext) => Result;
    /**
     * Visit a parse tree produced by the `columnReference`
     * labeled alternative in `FlinkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnReference?: (ctx: ColumnReferenceContext) => Result;
    /**
     * Visit a parse tree produced by the `last`
     * labeled alternative in `FlinkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLast?: (ctx: LastContext) => Result;
    /**
     * Visit a parse tree produced by the `star`
     * labeled alternative in `FlinkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStar?: (ctx: StarContext) => Result;
    /**
     * Visit a parse tree produced by the `subscript`
     * labeled alternative in `FlinkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubscript?: (ctx: SubscriptContext) => Result;
    /**
     * Visit a parse tree produced by the `functionCallFilter`
     * labeled alternative in `FlinkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionCallFilter?: (ctx: FunctionCallFilterContext) => Result;
    /**
     * Visit a parse tree produced by the `subqueryExpression`
     * labeled alternative in `FlinkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubqueryExpression?: (ctx: SubqueryExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `cast`
     * labeled alternative in `FlinkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCast?: (ctx: CastContext) => Result;
    /**
     * Visit a parse tree produced by the `constantDefault`
     * labeled alternative in `FlinkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstantDefault?: (ctx: ConstantDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `emptyExpression`
     * labeled alternative in `FlinkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEmptyExpression?: (ctx: EmptyExpressionContext) => Result;
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
     * Visit a parse tree produced by the `functionCall`
     * labeled alternative in `FlinkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionCall?: (ctx: FunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `searchedCase`
     * labeled alternative in `FlinkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSearchedCase?: (ctx: SearchedCaseContext) => Result;
    /**
     * Visit a parse tree produced by the `position`
     * labeled alternative in `FlinkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPosition?: (ctx: PositionContext) => Result;
    /**
     * Visit a parse tree produced by the `first`
     * labeled alternative in `FlinkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFirst?: (ctx: FirstContext) => Result;
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
     * Visit a parse tree produced by the `flinkStyleProjectItem`
     * labeled alternative in `FlinkSQLParser.projectItemDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFlinkStyleProjectItem?: (ctx: FlinkStyleProjectItemContext) => Result;
    /**
     * Visit a parse tree produced by the `common`
     * labeled alternative in `FlinkSQLParser.projectItemDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommon?: (ctx: CommonContext) => Result;
    /**
     * Visit a parse tree produced by the `commonSQL`
     * labeled alternative in `FlinkSQLParser.selectStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommonSQL?: (ctx: CommonSQLContext) => Result;
    /**
     * Visit a parse tree produced by the `matchRecognize`
     * labeled alternative in `FlinkSQLParser.selectStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatchRecognize?: (ctx: MatchRecognizeContext) => Result;
    /**
     * Visit a parse tree produced by the `flinkStyle`
     * labeled alternative in `FlinkSQLParser.selectClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFlinkStyle?: (ctx: FlinkStyleContext) => Result;
    /**
     * Visit a parse tree produced by the `commonInsert`
     * labeled alternative in `FlinkSQLParser.insertStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommonInsert?: (ctx: CommonInsertContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSQLParser.joinOp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinOp?: (ctx: JoinOpContext) => Result;
    /**
     * Visit a parse tree produced by `FlinkSQLParser.tableExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableExpression?: (ctx: TableExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `simple`
     * labeled alternative in `FlinkSQLParser.createTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimple?: (ctx: SimpleContext) => Result;
    /**
     * Visit a parse tree produced by the `like`
     * labeled alternative in `FlinkSQLParser.createTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLike?: (ctx: LikeContext) => Result;
    /**
     * Visit a parse tree produced by the `asSelect`
     * labeled alternative in `FlinkSQLParser.createTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAsSelect?: (ctx: AsSelectContext) => Result;
    /**
     * Visit a parse tree produced by the `flink_commn`
     * labeled alternative in `FlinkSQLParser.overWindowItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFlink_commn?: (ctx: Flink_commnContext) => Result;
    /**
     * Visit a parse tree produced by the `flink_common2`
     * labeled alternative in `FlinkSQLParser.overWindowItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFlink_common2?: (ctx: Flink_common2Context) => Result;
}

