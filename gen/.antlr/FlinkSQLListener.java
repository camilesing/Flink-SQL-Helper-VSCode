// Generated from /Users/camile/Work/opensource/flink-sql-vscode/gen/FlinkSQL.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link FlinkSQLParser}.
 */
public interface FlinkSQLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(FlinkSQLParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(FlinkSQLParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(FlinkSQLParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(FlinkSQLParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#sqlStatements}.
	 * @param ctx the parse tree
	 */
	void enterSqlStatements(FlinkSQLParser.SqlStatementsContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#sqlStatements}.
	 * @param ctx the parse tree
	 */
	void exitSqlStatements(FlinkSQLParser.SqlStatementsContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#comment}.
	 * @param ctx the parse tree
	 */
	void enterComment(FlinkSQLParser.CommentContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#comment}.
	 * @param ctx the parse tree
	 */
	void exitComment(FlinkSQLParser.CommentContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#sqlStatement}.
	 * @param ctx the parse tree
	 */
	void enterSqlStatement(FlinkSQLParser.SqlStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#sqlStatement}.
	 * @param ctx the parse tree
	 */
	void exitSqlStatement(FlinkSQLParser.SqlStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#emptyStatement}.
	 * @param ctx the parse tree
	 */
	void enterEmptyStatement(FlinkSQLParser.EmptyStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#emptyStatement}.
	 * @param ctx the parse tree
	 */
	void exitEmptyStatement(FlinkSQLParser.EmptyStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#ddlStatement}.
	 * @param ctx the parse tree
	 */
	void enterDdlStatement(FlinkSQLParser.DdlStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#ddlStatement}.
	 * @param ctx the parse tree
	 */
	void exitDdlStatement(FlinkSQLParser.DdlStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#dmlStatement}.
	 * @param ctx the parse tree
	 */
	void enterDmlStatement(FlinkSQLParser.DmlStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#dmlStatement}.
	 * @param ctx the parse tree
	 */
	void exitDmlStatement(FlinkSQLParser.DmlStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#describeStatement}.
	 * @param ctx the parse tree
	 */
	void enterDescribeStatement(FlinkSQLParser.DescribeStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#describeStatement}.
	 * @param ctx the parse tree
	 */
	void exitDescribeStatement(FlinkSQLParser.DescribeStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#explainStatement}.
	 * @param ctx the parse tree
	 */
	void enterExplainStatement(FlinkSQLParser.ExplainStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#explainStatement}.
	 * @param ctx the parse tree
	 */
	void exitExplainStatement(FlinkSQLParser.ExplainStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#explainDetails}.
	 * @param ctx the parse tree
	 */
	void enterExplainDetails(FlinkSQLParser.ExplainDetailsContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#explainDetails}.
	 * @param ctx the parse tree
	 */
	void exitExplainDetails(FlinkSQLParser.ExplainDetailsContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#explainDetail}.
	 * @param ctx the parse tree
	 */
	void enterExplainDetail(FlinkSQLParser.ExplainDetailContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#explainDetail}.
	 * @param ctx the parse tree
	 */
	void exitExplainDetail(FlinkSQLParser.ExplainDetailContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#useStatement}.
	 * @param ctx the parse tree
	 */
	void enterUseStatement(FlinkSQLParser.UseStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#useStatement}.
	 * @param ctx the parse tree
	 */
	void exitUseStatement(FlinkSQLParser.UseStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#useModuleStatement}.
	 * @param ctx the parse tree
	 */
	void enterUseModuleStatement(FlinkSQLParser.UseModuleStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#useModuleStatement}.
	 * @param ctx the parse tree
	 */
	void exitUseModuleStatement(FlinkSQLParser.UseModuleStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#showStatememt}.
	 * @param ctx the parse tree
	 */
	void enterShowStatememt(FlinkSQLParser.ShowStatememtContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#showStatememt}.
	 * @param ctx the parse tree
	 */
	void exitShowStatememt(FlinkSQLParser.ShowStatememtContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#loadStatement}.
	 * @param ctx the parse tree
	 */
	void enterLoadStatement(FlinkSQLParser.LoadStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#loadStatement}.
	 * @param ctx the parse tree
	 */
	void exitLoadStatement(FlinkSQLParser.LoadStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#unloadStatememt}.
	 * @param ctx the parse tree
	 */
	void enterUnloadStatememt(FlinkSQLParser.UnloadStatememtContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#unloadStatememt}.
	 * @param ctx the parse tree
	 */
	void exitUnloadStatememt(FlinkSQLParser.UnloadStatememtContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#setStatememt}.
	 * @param ctx the parse tree
	 */
	void enterSetStatememt(FlinkSQLParser.SetStatememtContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#setStatememt}.
	 * @param ctx the parse tree
	 */
	void exitSetStatememt(FlinkSQLParser.SetStatememtContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#resetStatememt}.
	 * @param ctx the parse tree
	 */
	void enterResetStatememt(FlinkSQLParser.ResetStatememtContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#resetStatememt}.
	 * @param ctx the parse tree
	 */
	void exitResetStatememt(FlinkSQLParser.ResetStatememtContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#jarStatememt}.
	 * @param ctx the parse tree
	 */
	void enterJarStatememt(FlinkSQLParser.JarStatememtContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#jarStatememt}.
	 * @param ctx the parse tree
	 */
	void exitJarStatememt(FlinkSQLParser.JarStatememtContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#dtFilePath}.
	 * @param ctx the parse tree
	 */
	void enterDtFilePath(FlinkSQLParser.DtFilePathContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#dtFilePath}.
	 * @param ctx the parse tree
	 */
	void exitDtFilePath(FlinkSQLParser.DtFilePathContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#replaceTable}.
	 * @param ctx the parse tree
	 */
	void enterReplaceTable(FlinkSQLParser.ReplaceTableContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#replaceTable}.
	 * @param ctx the parse tree
	 */
	void exitReplaceTable(FlinkSQLParser.ReplaceTableContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#createTable}.
	 * @param ctx the parse tree
	 */
	void enterCreateTable(FlinkSQLParser.CreateTableContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#createTable}.
	 * @param ctx the parse tree
	 */
	void exitCreateTable(FlinkSQLParser.CreateTableContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#simpleCreateTable}.
	 * @param ctx the parse tree
	 */
	void enterSimpleCreateTable(FlinkSQLParser.SimpleCreateTableContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#simpleCreateTable}.
	 * @param ctx the parse tree
	 */
	void exitSimpleCreateTable(FlinkSQLParser.SimpleCreateTableContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#createTableAsSelect}.
	 * @param ctx the parse tree
	 */
	void enterCreateTableAsSelect(FlinkSQLParser.CreateTableAsSelectContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#createTableAsSelect}.
	 * @param ctx the parse tree
	 */
	void exitCreateTableAsSelect(FlinkSQLParser.CreateTableAsSelectContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#columnOptionDefinition}.
	 * @param ctx the parse tree
	 */
	void enterColumnOptionDefinition(FlinkSQLParser.ColumnOptionDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#columnOptionDefinition}.
	 * @param ctx the parse tree
	 */
	void exitColumnOptionDefinition(FlinkSQLParser.ColumnOptionDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#physicalColumnDefinition}.
	 * @param ctx the parse tree
	 */
	void enterPhysicalColumnDefinition(FlinkSQLParser.PhysicalColumnDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#physicalColumnDefinition}.
	 * @param ctx the parse tree
	 */
	void exitPhysicalColumnDefinition(FlinkSQLParser.PhysicalColumnDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#columnName}.
	 * @param ctx the parse tree
	 */
	void enterColumnName(FlinkSQLParser.ColumnNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#columnName}.
	 * @param ctx the parse tree
	 */
	void exitColumnName(FlinkSQLParser.ColumnNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#columnNameList}.
	 * @param ctx the parse tree
	 */
	void enterColumnNameList(FlinkSQLParser.ColumnNameListContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#columnNameList}.
	 * @param ctx the parse tree
	 */
	void exitColumnNameList(FlinkSQLParser.ColumnNameListContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#columnType}.
	 * @param ctx the parse tree
	 */
	void enterColumnType(FlinkSQLParser.ColumnTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#columnType}.
	 * @param ctx the parse tree
	 */
	void exitColumnType(FlinkSQLParser.ColumnTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#lengthOneDimension}.
	 * @param ctx the parse tree
	 */
	void enterLengthOneDimension(FlinkSQLParser.LengthOneDimensionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#lengthOneDimension}.
	 * @param ctx the parse tree
	 */
	void exitLengthOneDimension(FlinkSQLParser.LengthOneDimensionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#lengthTwoOptionalDimension}.
	 * @param ctx the parse tree
	 */
	void enterLengthTwoOptionalDimension(FlinkSQLParser.LengthTwoOptionalDimensionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#lengthTwoOptionalDimension}.
	 * @param ctx the parse tree
	 */
	void exitLengthTwoOptionalDimension(FlinkSQLParser.LengthTwoOptionalDimensionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#lengthTwoStringDimension}.
	 * @param ctx the parse tree
	 */
	void enterLengthTwoStringDimension(FlinkSQLParser.LengthTwoStringDimensionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#lengthTwoStringDimension}.
	 * @param ctx the parse tree
	 */
	void exitLengthTwoStringDimension(FlinkSQLParser.LengthTwoStringDimensionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code lengthSymbolsTypeDimension}
	 * labeled alternative in {@link FlinkSQLParser#lengthOneTypeDimension}.
	 * @param ctx the parse tree
	 */
	void enterLengthSymbolsTypeDimension(FlinkSQLParser.LengthSymbolsTypeDimensionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code lengthSymbolsTypeDimension}
	 * labeled alternative in {@link FlinkSQLParser#lengthOneTypeDimension}.
	 * @param ctx the parse tree
	 */
	void exitLengthSymbolsTypeDimension(FlinkSQLParser.LengthSymbolsTypeDimensionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#mapTypeDimension}.
	 * @param ctx the parse tree
	 */
	void enterMapTypeDimension(FlinkSQLParser.MapTypeDimensionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#mapTypeDimension}.
	 * @param ctx the parse tree
	 */
	void exitMapTypeDimension(FlinkSQLParser.MapTypeDimensionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code rowSymbolsTypeDimension}
	 * labeled alternative in {@link FlinkSQLParser#rowTypeDimension}.
	 * @param ctx the parse tree
	 */
	void enterRowSymbolsTypeDimension(FlinkSQLParser.RowSymbolsTypeDimensionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code rowSymbolsTypeDimension}
	 * labeled alternative in {@link FlinkSQLParser#rowTypeDimension}.
	 * @param ctx the parse tree
	 */
	void exitRowSymbolsTypeDimension(FlinkSQLParser.RowSymbolsTypeDimensionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#columnConstraint}.
	 * @param ctx the parse tree
	 */
	void enterColumnConstraint(FlinkSQLParser.ColumnConstraintContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#columnConstraint}.
	 * @param ctx the parse tree
	 */
	void exitColumnConstraint(FlinkSQLParser.ColumnConstraintContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#commentSpec}.
	 * @param ctx the parse tree
	 */
	void enterCommentSpec(FlinkSQLParser.CommentSpecContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#commentSpec}.
	 * @param ctx the parse tree
	 */
	void exitCommentSpec(FlinkSQLParser.CommentSpecContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#metadataColumnDefinition}.
	 * @param ctx the parse tree
	 */
	void enterMetadataColumnDefinition(FlinkSQLParser.MetadataColumnDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#metadataColumnDefinition}.
	 * @param ctx the parse tree
	 */
	void exitMetadataColumnDefinition(FlinkSQLParser.MetadataColumnDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#metadataKey}.
	 * @param ctx the parse tree
	 */
	void enterMetadataKey(FlinkSQLParser.MetadataKeyContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#metadataKey}.
	 * @param ctx the parse tree
	 */
	void exitMetadataKey(FlinkSQLParser.MetadataKeyContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#computedColumnDefinition}.
	 * @param ctx the parse tree
	 */
	void enterComputedColumnDefinition(FlinkSQLParser.ComputedColumnDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#computedColumnDefinition}.
	 * @param ctx the parse tree
	 */
	void exitComputedColumnDefinition(FlinkSQLParser.ComputedColumnDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#computedColumnExpression}.
	 * @param ctx the parse tree
	 */
	void enterComputedColumnExpression(FlinkSQLParser.ComputedColumnExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#computedColumnExpression}.
	 * @param ctx the parse tree
	 */
	void exitComputedColumnExpression(FlinkSQLParser.ComputedColumnExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#watermarkDefinition}.
	 * @param ctx the parse tree
	 */
	void enterWatermarkDefinition(FlinkSQLParser.WatermarkDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#watermarkDefinition}.
	 * @param ctx the parse tree
	 */
	void exitWatermarkDefinition(FlinkSQLParser.WatermarkDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#tableConstraint}.
	 * @param ctx the parse tree
	 */
	void enterTableConstraint(FlinkSQLParser.TableConstraintContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#tableConstraint}.
	 * @param ctx the parse tree
	 */
	void exitTableConstraint(FlinkSQLParser.TableConstraintContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#constraintName}.
	 * @param ctx the parse tree
	 */
	void enterConstraintName(FlinkSQLParser.ConstraintNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#constraintName}.
	 * @param ctx the parse tree
	 */
	void exitConstraintName(FlinkSQLParser.ConstraintNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#selfDefinitionClause}.
	 * @param ctx the parse tree
	 */
	void enterSelfDefinitionClause(FlinkSQLParser.SelfDefinitionClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#selfDefinitionClause}.
	 * @param ctx the parse tree
	 */
	void exitSelfDefinitionClause(FlinkSQLParser.SelfDefinitionClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#partitionDefinition}.
	 * @param ctx the parse tree
	 */
	void enterPartitionDefinition(FlinkSQLParser.PartitionDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#partitionDefinition}.
	 * @param ctx the parse tree
	 */
	void exitPartitionDefinition(FlinkSQLParser.PartitionDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#transformList}.
	 * @param ctx the parse tree
	 */
	void enterTransformList(FlinkSQLParser.TransformListContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#transformList}.
	 * @param ctx the parse tree
	 */
	void exitTransformList(FlinkSQLParser.TransformListContext ctx);
	/**
	 * Enter a parse tree produced by the {@code identityTransform}
	 * labeled alternative in {@link FlinkSQLParser#transform}.
	 * @param ctx the parse tree
	 */
	void enterIdentityTransform(FlinkSQLParser.IdentityTransformContext ctx);
	/**
	 * Exit a parse tree produced by the {@code identityTransform}
	 * labeled alternative in {@link FlinkSQLParser#transform}.
	 * @param ctx the parse tree
	 */
	void exitIdentityTransform(FlinkSQLParser.IdentityTransformContext ctx);
	/**
	 * Enter a parse tree produced by the {@code applyTransform}
	 * labeled alternative in {@link FlinkSQLParser#transform}.
	 * @param ctx the parse tree
	 */
	void enterApplyTransform(FlinkSQLParser.ApplyTransformContext ctx);
	/**
	 * Exit a parse tree produced by the {@code applyTransform}
	 * labeled alternative in {@link FlinkSQLParser#transform}.
	 * @param ctx the parse tree
	 */
	void exitApplyTransform(FlinkSQLParser.ApplyTransformContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#transformArgument}.
	 * @param ctx the parse tree
	 */
	void enterTransformArgument(FlinkSQLParser.TransformArgumentContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#transformArgument}.
	 * @param ctx the parse tree
	 */
	void exitTransformArgument(FlinkSQLParser.TransformArgumentContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#likeDefinition}.
	 * @param ctx the parse tree
	 */
	void enterLikeDefinition(FlinkSQLParser.LikeDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#likeDefinition}.
	 * @param ctx the parse tree
	 */
	void exitLikeDefinition(FlinkSQLParser.LikeDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#likeOption}.
	 * @param ctx the parse tree
	 */
	void enterLikeOption(FlinkSQLParser.LikeOptionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#likeOption}.
	 * @param ctx the parse tree
	 */
	void exitLikeOption(FlinkSQLParser.LikeOptionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#createCatalog}.
	 * @param ctx the parse tree
	 */
	void enterCreateCatalog(FlinkSQLParser.CreateCatalogContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#createCatalog}.
	 * @param ctx the parse tree
	 */
	void exitCreateCatalog(FlinkSQLParser.CreateCatalogContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#createDatabase}.
	 * @param ctx the parse tree
	 */
	void enterCreateDatabase(FlinkSQLParser.CreateDatabaseContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#createDatabase}.
	 * @param ctx the parse tree
	 */
	void exitCreateDatabase(FlinkSQLParser.CreateDatabaseContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#createView}.
	 * @param ctx the parse tree
	 */
	void enterCreateView(FlinkSQLParser.CreateViewContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#createView}.
	 * @param ctx the parse tree
	 */
	void exitCreateView(FlinkSQLParser.CreateViewContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#createFunction}.
	 * @param ctx the parse tree
	 */
	void enterCreateFunction(FlinkSQLParser.CreateFunctionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#createFunction}.
	 * @param ctx the parse tree
	 */
	void exitCreateFunction(FlinkSQLParser.CreateFunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#usingClause}.
	 * @param ctx the parse tree
	 */
	void enterUsingClause(FlinkSQLParser.UsingClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#usingClause}.
	 * @param ctx the parse tree
	 */
	void exitUsingClause(FlinkSQLParser.UsingClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#jarFileName}.
	 * @param ctx the parse tree
	 */
	void enterJarFileName(FlinkSQLParser.JarFileNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#jarFileName}.
	 * @param ctx the parse tree
	 */
	void exitJarFileName(FlinkSQLParser.JarFileNameContext ctx);
	/**
	 * Enter a parse tree produced by the {@code alter}
	 * labeled alternative in {@link FlinkSQLParser#alterTable}.
	 * @param ctx the parse tree
	 */
	void enterAlter(FlinkSQLParser.AlterContext ctx);
	/**
	 * Exit a parse tree produced by the {@code alter}
	 * labeled alternative in {@link FlinkSQLParser#alterTable}.
	 * @param ctx the parse tree
	 */
	void exitAlter(FlinkSQLParser.AlterContext ctx);
	/**
	 * Enter a parse tree produced by the {@code addOrModifyNewColumn}
	 * labeled alternative in {@link FlinkSQLParser#alterTable}.
	 * @param ctx the parse tree
	 */
	void enterAddOrModifyNewColumn(FlinkSQLParser.AddOrModifyNewColumnContext ctx);
	/**
	 * Exit a parse tree produced by the {@code addOrModifyNewColumn}
	 * labeled alternative in {@link FlinkSQLParser#alterTable}.
	 * @param ctx the parse tree
	 */
	void exitAddOrModifyNewColumn(FlinkSQLParser.AddOrModifyNewColumnContext ctx);
	/**
	 * Enter a parse tree produced by the {@code addOrModifyNewColumns}
	 * labeled alternative in {@link FlinkSQLParser#alterTable}.
	 * @param ctx the parse tree
	 */
	void enterAddOrModifyNewColumns(FlinkSQLParser.AddOrModifyNewColumnsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code addOrModifyNewColumns}
	 * labeled alternative in {@link FlinkSQLParser#alterTable}.
	 * @param ctx the parse tree
	 */
	void exitAddOrModifyNewColumns(FlinkSQLParser.AddOrModifyNewColumnsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code addNewPartitions}
	 * labeled alternative in {@link FlinkSQLParser#alterTable}.
	 * @param ctx the parse tree
	 */
	void enterAddNewPartitions(FlinkSQLParser.AddNewPartitionsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code addNewPartitions}
	 * labeled alternative in {@link FlinkSQLParser#alterTable}.
	 * @param ctx the parse tree
	 */
	void exitAddNewPartitions(FlinkSQLParser.AddNewPartitionsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code dropAcolumn}
	 * labeled alternative in {@link FlinkSQLParser#alterTable}.
	 * @param ctx the parse tree
	 */
	void enterDropAcolumn(FlinkSQLParser.DropAcolumnContext ctx);
	/**
	 * Exit a parse tree produced by the {@code dropAcolumn}
	 * labeled alternative in {@link FlinkSQLParser#alterTable}.
	 * @param ctx the parse tree
	 */
	void exitDropAcolumn(FlinkSQLParser.DropAcolumnContext ctx);
	/**
	 * Enter a parse tree produced by the {@code dropColumnList}
	 * labeled alternative in {@link FlinkSQLParser#alterTable}.
	 * @param ctx the parse tree
	 */
	void enterDropColumnList(FlinkSQLParser.DropColumnListContext ctx);
	/**
	 * Exit a parse tree produced by the {@code dropColumnList}
	 * labeled alternative in {@link FlinkSQLParser#alterTable}.
	 * @param ctx the parse tree
	 */
	void exitDropColumnList(FlinkSQLParser.DropColumnListContext ctx);
	/**
	 * Enter a parse tree produced by the {@code dropPrimaryKey}
	 * labeled alternative in {@link FlinkSQLParser#alterTable}.
	 * @param ctx the parse tree
	 */
	void enterDropPrimaryKey(FlinkSQLParser.DropPrimaryKeyContext ctx);
	/**
	 * Exit a parse tree produced by the {@code dropPrimaryKey}
	 * labeled alternative in {@link FlinkSQLParser#alterTable}.
	 * @param ctx the parse tree
	 */
	void exitDropPrimaryKey(FlinkSQLParser.DropPrimaryKeyContext ctx);
	/**
	 * Enter a parse tree produced by the {@code dropPartitions}
	 * labeled alternative in {@link FlinkSQLParser#alterTable}.
	 * @param ctx the parse tree
	 */
	void enterDropPartitions(FlinkSQLParser.DropPartitionsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code dropPartitions}
	 * labeled alternative in {@link FlinkSQLParser#alterTable}.
	 * @param ctx the parse tree
	 */
	void exitDropPartitions(FlinkSQLParser.DropPartitionsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code dropWatermark}
	 * labeled alternative in {@link FlinkSQLParser#alterTable}.
	 * @param ctx the parse tree
	 */
	void enterDropWatermark(FlinkSQLParser.DropWatermarkContext ctx);
	/**
	 * Exit a parse tree produced by the {@code dropWatermark}
	 * labeled alternative in {@link FlinkSQLParser#alterTable}.
	 * @param ctx the parse tree
	 */
	void exitDropWatermark(FlinkSQLParser.DropWatermarkContext ctx);
	/**
	 * Enter a parse tree produced by the {@code renameColumn}
	 * labeled alternative in {@link FlinkSQLParser#alterTable}.
	 * @param ctx the parse tree
	 */
	void enterRenameColumn(FlinkSQLParser.RenameColumnContext ctx);
	/**
	 * Exit a parse tree produced by the {@code renameColumn}
	 * labeled alternative in {@link FlinkSQLParser#alterTable}.
	 * @param ctx the parse tree
	 */
	void exitRenameColumn(FlinkSQLParser.RenameColumnContext ctx);
	/**
	 * Enter a parse tree produced by the {@code renameTable}
	 * labeled alternative in {@link FlinkSQLParser#alterTable}.
	 * @param ctx the parse tree
	 */
	void enterRenameTable(FlinkSQLParser.RenameTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code renameTable}
	 * labeled alternative in {@link FlinkSQLParser#alterTable}.
	 * @param ctx the parse tree
	 */
	void exitRenameTable(FlinkSQLParser.RenameTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code setPropertiy}
	 * labeled alternative in {@link FlinkSQLParser#alterTable}.
	 * @param ctx the parse tree
	 */
	void enterSetPropertiy(FlinkSQLParser.SetPropertiyContext ctx);
	/**
	 * Exit a parse tree produced by the {@code setPropertiy}
	 * labeled alternative in {@link FlinkSQLParser#alterTable}.
	 * @param ctx the parse tree
	 */
	void exitSetPropertiy(FlinkSQLParser.SetPropertiyContext ctx);
	/**
	 * Enter a parse tree produced by the {@code resetPropertiy}
	 * labeled alternative in {@link FlinkSQLParser#alterTable}.
	 * @param ctx the parse tree
	 */
	void enterResetPropertiy(FlinkSQLParser.ResetPropertiyContext ctx);
	/**
	 * Exit a parse tree produced by the {@code resetPropertiy}
	 * labeled alternative in {@link FlinkSQLParser#alterTable}.
	 * @param ctx the parse tree
	 */
	void exitResetPropertiy(FlinkSQLParser.ResetPropertiyContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#coloumPosition}.
	 * @param ctx the parse tree
	 */
	void enterColoumPosition(FlinkSQLParser.ColoumPositionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#coloumPosition}.
	 * @param ctx the parse tree
	 */
	void exitColoumPosition(FlinkSQLParser.ColoumPositionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#renameDefinition}.
	 * @param ctx the parse tree
	 */
	void enterRenameDefinition(FlinkSQLParser.RenameDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#renameDefinition}.
	 * @param ctx the parse tree
	 */
	void exitRenameDefinition(FlinkSQLParser.RenameDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#setKeyValueDefinition}.
	 * @param ctx the parse tree
	 */
	void enterSetKeyValueDefinition(FlinkSQLParser.SetKeyValueDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#setKeyValueDefinition}.
	 * @param ctx the parse tree
	 */
	void exitSetKeyValueDefinition(FlinkSQLParser.SetKeyValueDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#addConstraint}.
	 * @param ctx the parse tree
	 */
	void enterAddConstraint(FlinkSQLParser.AddConstraintContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#addConstraint}.
	 * @param ctx the parse tree
	 */
	void exitAddConstraint(FlinkSQLParser.AddConstraintContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#dropConstraint}.
	 * @param ctx the parse tree
	 */
	void enterDropConstraint(FlinkSQLParser.DropConstraintContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#dropConstraint}.
	 * @param ctx the parse tree
	 */
	void exitDropConstraint(FlinkSQLParser.DropConstraintContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#addUnique}.
	 * @param ctx the parse tree
	 */
	void enterAddUnique(FlinkSQLParser.AddUniqueContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#addUnique}.
	 * @param ctx the parse tree
	 */
	void exitAddUnique(FlinkSQLParser.AddUniqueContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#notForced}.
	 * @param ctx the parse tree
	 */
	void enterNotForced(FlinkSQLParser.NotForcedContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#notForced}.
	 * @param ctx the parse tree
	 */
	void exitNotForced(FlinkSQLParser.NotForcedContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#alertView}.
	 * @param ctx the parse tree
	 */
	void enterAlertView(FlinkSQLParser.AlertViewContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#alertView}.
	 * @param ctx the parse tree
	 */
	void exitAlertView(FlinkSQLParser.AlertViewContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#alterDatabase}.
	 * @param ctx the parse tree
	 */
	void enterAlterDatabase(FlinkSQLParser.AlterDatabaseContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#alterDatabase}.
	 * @param ctx the parse tree
	 */
	void exitAlterDatabase(FlinkSQLParser.AlterDatabaseContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#alterFunction}.
	 * @param ctx the parse tree
	 */
	void enterAlterFunction(FlinkSQLParser.AlterFunctionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#alterFunction}.
	 * @param ctx the parse tree
	 */
	void exitAlterFunction(FlinkSQLParser.AlterFunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#dropCatalog}.
	 * @param ctx the parse tree
	 */
	void enterDropCatalog(FlinkSQLParser.DropCatalogContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#dropCatalog}.
	 * @param ctx the parse tree
	 */
	void exitDropCatalog(FlinkSQLParser.DropCatalogContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#dropTable}.
	 * @param ctx the parse tree
	 */
	void enterDropTable(FlinkSQLParser.DropTableContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#dropTable}.
	 * @param ctx the parse tree
	 */
	void exitDropTable(FlinkSQLParser.DropTableContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#dropDatabase}.
	 * @param ctx the parse tree
	 */
	void enterDropDatabase(FlinkSQLParser.DropDatabaseContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#dropDatabase}.
	 * @param ctx the parse tree
	 */
	void exitDropDatabase(FlinkSQLParser.DropDatabaseContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#dropView}.
	 * @param ctx the parse tree
	 */
	void enterDropView(FlinkSQLParser.DropViewContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#dropView}.
	 * @param ctx the parse tree
	 */
	void exitDropView(FlinkSQLParser.DropViewContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#dropFunction}.
	 * @param ctx the parse tree
	 */
	void enterDropFunction(FlinkSQLParser.DropFunctionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#dropFunction}.
	 * @param ctx the parse tree
	 */
	void exitDropFunction(FlinkSQLParser.DropFunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#truncateTable}.
	 * @param ctx the parse tree
	 */
	void enterTruncateTable(FlinkSQLParser.TruncateTableContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#truncateTable}.
	 * @param ctx the parse tree
	 */
	void exitTruncateTable(FlinkSQLParser.TruncateTableContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#insertStatement}.
	 * @param ctx the parse tree
	 */
	void enterInsertStatement(FlinkSQLParser.InsertStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#insertStatement}.
	 * @param ctx the parse tree
	 */
	void exitInsertStatement(FlinkSQLParser.InsertStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#insertSimpleStatement}.
	 * @param ctx the parse tree
	 */
	void enterInsertSimpleStatement(FlinkSQLParser.InsertSimpleStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#insertSimpleStatement}.
	 * @param ctx the parse tree
	 */
	void exitInsertSimpleStatement(FlinkSQLParser.InsertSimpleStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#insertPartitionDefinition}.
	 * @param ctx the parse tree
	 */
	void enterInsertPartitionDefinition(FlinkSQLParser.InsertPartitionDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#insertPartitionDefinition}.
	 * @param ctx the parse tree
	 */
	void exitInsertPartitionDefinition(FlinkSQLParser.InsertPartitionDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#valuesDefinition}.
	 * @param ctx the parse tree
	 */
	void enterValuesDefinition(FlinkSQLParser.ValuesDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#valuesDefinition}.
	 * @param ctx the parse tree
	 */
	void exitValuesDefinition(FlinkSQLParser.ValuesDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#valuesRowDefinition}.
	 * @param ctx the parse tree
	 */
	void enterValuesRowDefinition(FlinkSQLParser.ValuesRowDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#valuesRowDefinition}.
	 * @param ctx the parse tree
	 */
	void exitValuesRowDefinition(FlinkSQLParser.ValuesRowDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#insertMulStatementCompatibility}.
	 * @param ctx the parse tree
	 */
	void enterInsertMulStatementCompatibility(FlinkSQLParser.InsertMulStatementCompatibilityContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#insertMulStatementCompatibility}.
	 * @param ctx the parse tree
	 */
	void exitInsertMulStatementCompatibility(FlinkSQLParser.InsertMulStatementCompatibilityContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#insertMulStatement}.
	 * @param ctx the parse tree
	 */
	void enterInsertMulStatement(FlinkSQLParser.InsertMulStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#insertMulStatement}.
	 * @param ctx the parse tree
	 */
	void exitInsertMulStatement(FlinkSQLParser.InsertMulStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#queryStatement}.
	 * @param ctx the parse tree
	 */
	void enterQueryStatement(FlinkSQLParser.QueryStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#queryStatement}.
	 * @param ctx the parse tree
	 */
	void exitQueryStatement(FlinkSQLParser.QueryStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#valuesCaluse}.
	 * @param ctx the parse tree
	 */
	void enterValuesCaluse(FlinkSQLParser.ValuesCaluseContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#valuesCaluse}.
	 * @param ctx the parse tree
	 */
	void exitValuesCaluse(FlinkSQLParser.ValuesCaluseContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#withClause}.
	 * @param ctx the parse tree
	 */
	void enterWithClause(FlinkSQLParser.WithClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#withClause}.
	 * @param ctx the parse tree
	 */
	void exitWithClause(FlinkSQLParser.WithClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#withItem}.
	 * @param ctx the parse tree
	 */
	void enterWithItem(FlinkSQLParser.WithItemContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#withItem}.
	 * @param ctx the parse tree
	 */
	void exitWithItem(FlinkSQLParser.WithItemContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#withItemName}.
	 * @param ctx the parse tree
	 */
	void enterWithItemName(FlinkSQLParser.WithItemNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#withItemName}.
	 * @param ctx the parse tree
	 */
	void exitWithItemName(FlinkSQLParser.WithItemNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#selectStatement}.
	 * @param ctx the parse tree
	 */
	void enterSelectStatement(FlinkSQLParser.SelectStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#selectStatement}.
	 * @param ctx the parse tree
	 */
	void exitSelectStatement(FlinkSQLParser.SelectStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#selectClause}.
	 * @param ctx the parse tree
	 */
	void enterSelectClause(FlinkSQLParser.SelectClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#selectClause}.
	 * @param ctx the parse tree
	 */
	void exitSelectClause(FlinkSQLParser.SelectClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#projectItemDefinition}.
	 * @param ctx the parse tree
	 */
	void enterProjectItemDefinition(FlinkSQLParser.ProjectItemDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#projectItemDefinition}.
	 * @param ctx the parse tree
	 */
	void exitProjectItemDefinition(FlinkSQLParser.ProjectItemDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#overWindowItem}.
	 * @param ctx the parse tree
	 */
	void enterOverWindowItem(FlinkSQLParser.OverWindowItemContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#overWindowItem}.
	 * @param ctx the parse tree
	 */
	void exitOverWindowItem(FlinkSQLParser.OverWindowItemContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#fromClause}.
	 * @param ctx the parse tree
	 */
	void enterFromClause(FlinkSQLParser.FromClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#fromClause}.
	 * @param ctx the parse tree
	 */
	void exitFromClause(FlinkSQLParser.FromClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#tableExpression}.
	 * @param ctx the parse tree
	 */
	void enterTableExpression(FlinkSQLParser.TableExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#tableExpression}.
	 * @param ctx the parse tree
	 */
	void exitTableExpression(FlinkSQLParser.TableExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#tableReference}.
	 * @param ctx the parse tree
	 */
	void enterTableReference(FlinkSQLParser.TableReferenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#tableReference}.
	 * @param ctx the parse tree
	 */
	void exitTableReference(FlinkSQLParser.TableReferenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#tablePrimary}.
	 * @param ctx the parse tree
	 */
	void enterTablePrimary(FlinkSQLParser.TablePrimaryContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#tablePrimary}.
	 * @param ctx the parse tree
	 */
	void exitTablePrimary(FlinkSQLParser.TablePrimaryContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#systemTimePeriod}.
	 * @param ctx the parse tree
	 */
	void enterSystemTimePeriod(FlinkSQLParser.SystemTimePeriodContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#systemTimePeriod}.
	 * @param ctx the parse tree
	 */
	void exitSystemTimePeriod(FlinkSQLParser.SystemTimePeriodContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#dateTimeExpression}.
	 * @param ctx the parse tree
	 */
	void enterDateTimeExpression(FlinkSQLParser.DateTimeExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#dateTimeExpression}.
	 * @param ctx the parse tree
	 */
	void exitDateTimeExpression(FlinkSQLParser.DateTimeExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#inlineDataValueClause}.
	 * @param ctx the parse tree
	 */
	void enterInlineDataValueClause(FlinkSQLParser.InlineDataValueClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#inlineDataValueClause}.
	 * @param ctx the parse tree
	 */
	void exitInlineDataValueClause(FlinkSQLParser.InlineDataValueClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#windoTVFClause}.
	 * @param ctx the parse tree
	 */
	void enterWindoTVFClause(FlinkSQLParser.WindoTVFClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#windoTVFClause}.
	 * @param ctx the parse tree
	 */
	void exitWindoTVFClause(FlinkSQLParser.WindoTVFClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#windowTVFExression}.
	 * @param ctx the parse tree
	 */
	void enterWindowTVFExression(FlinkSQLParser.WindowTVFExressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#windowTVFExression}.
	 * @param ctx the parse tree
	 */
	void exitWindowTVFExression(FlinkSQLParser.WindowTVFExressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#windoTVFName}.
	 * @param ctx the parse tree
	 */
	void enterWindoTVFName(FlinkSQLParser.WindoTVFNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#windoTVFName}.
	 * @param ctx the parse tree
	 */
	void exitWindoTVFName(FlinkSQLParser.WindoTVFNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#windowTVFParam}.
	 * @param ctx the parse tree
	 */
	void enterWindowTVFParam(FlinkSQLParser.WindowTVFParamContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#windowTVFParam}.
	 * @param ctx the parse tree
	 */
	void exitWindowTVFParam(FlinkSQLParser.WindowTVFParamContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#timeIntervalParamName}.
	 * @param ctx the parse tree
	 */
	void enterTimeIntervalParamName(FlinkSQLParser.TimeIntervalParamNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#timeIntervalParamName}.
	 * @param ctx the parse tree
	 */
	void exitTimeIntervalParamName(FlinkSQLParser.TimeIntervalParamNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#columnDescriptor}.
	 * @param ctx the parse tree
	 */
	void enterColumnDescriptor(FlinkSQLParser.ColumnDescriptorContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#columnDescriptor}.
	 * @param ctx the parse tree
	 */
	void exitColumnDescriptor(FlinkSQLParser.ColumnDescriptorContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#joinCondition}.
	 * @param ctx the parse tree
	 */
	void enterJoinCondition(FlinkSQLParser.JoinConditionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#joinCondition}.
	 * @param ctx the parse tree
	 */
	void exitJoinCondition(FlinkSQLParser.JoinConditionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#whereClause}.
	 * @param ctx the parse tree
	 */
	void enterWhereClause(FlinkSQLParser.WhereClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#whereClause}.
	 * @param ctx the parse tree
	 */
	void exitWhereClause(FlinkSQLParser.WhereClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#groupByClause}.
	 * @param ctx the parse tree
	 */
	void enterGroupByClause(FlinkSQLParser.GroupByClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#groupByClause}.
	 * @param ctx the parse tree
	 */
	void exitGroupByClause(FlinkSQLParser.GroupByClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#groupItemDefinition}.
	 * @param ctx the parse tree
	 */
	void enterGroupItemDefinition(FlinkSQLParser.GroupItemDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#groupItemDefinition}.
	 * @param ctx the parse tree
	 */
	void exitGroupItemDefinition(FlinkSQLParser.GroupItemDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#groupingSets}.
	 * @param ctx the parse tree
	 */
	void enterGroupingSets(FlinkSQLParser.GroupingSetsContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#groupingSets}.
	 * @param ctx the parse tree
	 */
	void exitGroupingSets(FlinkSQLParser.GroupingSetsContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#groupingSetsNotaionName}.
	 * @param ctx the parse tree
	 */
	void enterGroupingSetsNotaionName(FlinkSQLParser.GroupingSetsNotaionNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#groupingSetsNotaionName}.
	 * @param ctx the parse tree
	 */
	void exitGroupingSetsNotaionName(FlinkSQLParser.GroupingSetsNotaionNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#groupWindowFunction}.
	 * @param ctx the parse tree
	 */
	void enterGroupWindowFunction(FlinkSQLParser.GroupWindowFunctionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#groupWindowFunction}.
	 * @param ctx the parse tree
	 */
	void exitGroupWindowFunction(FlinkSQLParser.GroupWindowFunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#groupWindowFunctionName}.
	 * @param ctx the parse tree
	 */
	void enterGroupWindowFunctionName(FlinkSQLParser.GroupWindowFunctionNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#groupWindowFunctionName}.
	 * @param ctx the parse tree
	 */
	void exitGroupWindowFunctionName(FlinkSQLParser.GroupWindowFunctionNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#timeAttrColumn}.
	 * @param ctx the parse tree
	 */
	void enterTimeAttrColumn(FlinkSQLParser.TimeAttrColumnContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#timeAttrColumn}.
	 * @param ctx the parse tree
	 */
	void exitTimeAttrColumn(FlinkSQLParser.TimeAttrColumnContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#havingClause}.
	 * @param ctx the parse tree
	 */
	void enterHavingClause(FlinkSQLParser.HavingClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#havingClause}.
	 * @param ctx the parse tree
	 */
	void exitHavingClause(FlinkSQLParser.HavingClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#windowClause}.
	 * @param ctx the parse tree
	 */
	void enterWindowClause(FlinkSQLParser.WindowClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#windowClause}.
	 * @param ctx the parse tree
	 */
	void exitWindowClause(FlinkSQLParser.WindowClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#namedWindow}.
	 * @param ctx the parse tree
	 */
	void enterNamedWindow(FlinkSQLParser.NamedWindowContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#namedWindow}.
	 * @param ctx the parse tree
	 */
	void exitNamedWindow(FlinkSQLParser.NamedWindowContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#windowSpec}.
	 * @param ctx the parse tree
	 */
	void enterWindowSpec(FlinkSQLParser.WindowSpecContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#windowSpec}.
	 * @param ctx the parse tree
	 */
	void exitWindowSpec(FlinkSQLParser.WindowSpecContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#matchRecognizeClause}.
	 * @param ctx the parse tree
	 */
	void enterMatchRecognizeClause(FlinkSQLParser.MatchRecognizeClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#matchRecognizeClause}.
	 * @param ctx the parse tree
	 */
	void exitMatchRecognizeClause(FlinkSQLParser.MatchRecognizeClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#orderByCaluse}.
	 * @param ctx the parse tree
	 */
	void enterOrderByCaluse(FlinkSQLParser.OrderByCaluseContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#orderByCaluse}.
	 * @param ctx the parse tree
	 */
	void exitOrderByCaluse(FlinkSQLParser.OrderByCaluseContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#orderItemDefition}.
	 * @param ctx the parse tree
	 */
	void enterOrderItemDefition(FlinkSQLParser.OrderItemDefitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#orderItemDefition}.
	 * @param ctx the parse tree
	 */
	void exitOrderItemDefition(FlinkSQLParser.OrderItemDefitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#limitClause}.
	 * @param ctx the parse tree
	 */
	void enterLimitClause(FlinkSQLParser.LimitClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#limitClause}.
	 * @param ctx the parse tree
	 */
	void exitLimitClause(FlinkSQLParser.LimitClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#partitionByClause}.
	 * @param ctx the parse tree
	 */
	void enterPartitionByClause(FlinkSQLParser.PartitionByClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#partitionByClause}.
	 * @param ctx the parse tree
	 */
	void exitPartitionByClause(FlinkSQLParser.PartitionByClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#quantifiers}.
	 * @param ctx the parse tree
	 */
	void enterQuantifiers(FlinkSQLParser.QuantifiersContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#quantifiers}.
	 * @param ctx the parse tree
	 */
	void exitQuantifiers(FlinkSQLParser.QuantifiersContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#measuresClause}.
	 * @param ctx the parse tree
	 */
	void enterMeasuresClause(FlinkSQLParser.MeasuresClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#measuresClause}.
	 * @param ctx the parse tree
	 */
	void exitMeasuresClause(FlinkSQLParser.MeasuresClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#patternDefination}.
	 * @param ctx the parse tree
	 */
	void enterPatternDefination(FlinkSQLParser.PatternDefinationContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#patternDefination}.
	 * @param ctx the parse tree
	 */
	void exitPatternDefination(FlinkSQLParser.PatternDefinationContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#patternVariable}.
	 * @param ctx the parse tree
	 */
	void enterPatternVariable(FlinkSQLParser.PatternVariableContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#patternVariable}.
	 * @param ctx the parse tree
	 */
	void exitPatternVariable(FlinkSQLParser.PatternVariableContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#outputMode}.
	 * @param ctx the parse tree
	 */
	void enterOutputMode(FlinkSQLParser.OutputModeContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#outputMode}.
	 * @param ctx the parse tree
	 */
	void exitOutputMode(FlinkSQLParser.OutputModeContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#afterMatchStrategy}.
	 * @param ctx the parse tree
	 */
	void enterAfterMatchStrategy(FlinkSQLParser.AfterMatchStrategyContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#afterMatchStrategy}.
	 * @param ctx the parse tree
	 */
	void exitAfterMatchStrategy(FlinkSQLParser.AfterMatchStrategyContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#patternVariablesDefination}.
	 * @param ctx the parse tree
	 */
	void enterPatternVariablesDefination(FlinkSQLParser.PatternVariablesDefinationContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#patternVariablesDefination}.
	 * @param ctx the parse tree
	 */
	void exitPatternVariablesDefination(FlinkSQLParser.PatternVariablesDefinationContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#windowFrame}.
	 * @param ctx the parse tree
	 */
	void enterWindowFrame(FlinkSQLParser.WindowFrameContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#windowFrame}.
	 * @param ctx the parse tree
	 */
	void exitWindowFrame(FlinkSQLParser.WindowFrameContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#frameBound}.
	 * @param ctx the parse tree
	 */
	void enterFrameBound(FlinkSQLParser.FrameBoundContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#frameBound}.
	 * @param ctx the parse tree
	 */
	void exitFrameBound(FlinkSQLParser.FrameBoundContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#withinClause}.
	 * @param ctx the parse tree
	 */
	void enterWithinClause(FlinkSQLParser.WithinClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#withinClause}.
	 * @param ctx the parse tree
	 */
	void exitWithinClause(FlinkSQLParser.WithinClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(FlinkSQLParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(FlinkSQLParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code logicalNot}
	 * labeled alternative in {@link FlinkSQLParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void enterLogicalNot(FlinkSQLParser.LogicalNotContext ctx);
	/**
	 * Exit a parse tree produced by the {@code logicalNot}
	 * labeled alternative in {@link FlinkSQLParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void exitLogicalNot(FlinkSQLParser.LogicalNotContext ctx);
	/**
	 * Enter a parse tree produced by the {@code predicated}
	 * labeled alternative in {@link FlinkSQLParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void enterPredicated(FlinkSQLParser.PredicatedContext ctx);
	/**
	 * Exit a parse tree produced by the {@code predicated}
	 * labeled alternative in {@link FlinkSQLParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void exitPredicated(FlinkSQLParser.PredicatedContext ctx);
	/**
	 * Enter a parse tree produced by the {@code exists}
	 * labeled alternative in {@link FlinkSQLParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void enterExists(FlinkSQLParser.ExistsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code exists}
	 * labeled alternative in {@link FlinkSQLParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void exitExists(FlinkSQLParser.ExistsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code logicalNested}
	 * labeled alternative in {@link FlinkSQLParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void enterLogicalNested(FlinkSQLParser.LogicalNestedContext ctx);
	/**
	 * Exit a parse tree produced by the {@code logicalNested}
	 * labeled alternative in {@link FlinkSQLParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void exitLogicalNested(FlinkSQLParser.LogicalNestedContext ctx);
	/**
	 * Enter a parse tree produced by the {@code logicalBinary}
	 * labeled alternative in {@link FlinkSQLParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void enterLogicalBinary(FlinkSQLParser.LogicalBinaryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code logicalBinary}
	 * labeled alternative in {@link FlinkSQLParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void exitLogicalBinary(FlinkSQLParser.LogicalBinaryContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#predicate}.
	 * @param ctx the parse tree
	 */
	void enterPredicate(FlinkSQLParser.PredicateContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#predicate}.
	 * @param ctx the parse tree
	 */
	void exitPredicate(FlinkSQLParser.PredicateContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#likePredicate}.
	 * @param ctx the parse tree
	 */
	void enterLikePredicate(FlinkSQLParser.LikePredicateContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#likePredicate}.
	 * @param ctx the parse tree
	 */
	void exitLikePredicate(FlinkSQLParser.LikePredicateContext ctx);
	/**
	 * Enter a parse tree produced by the {@code valueExpressionDefault}
	 * labeled alternative in {@link FlinkSQLParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void enterValueExpressionDefault(FlinkSQLParser.ValueExpressionDefaultContext ctx);
	/**
	 * Exit a parse tree produced by the {@code valueExpressionDefault}
	 * labeled alternative in {@link FlinkSQLParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void exitValueExpressionDefault(FlinkSQLParser.ValueExpressionDefaultContext ctx);
	/**
	 * Enter a parse tree produced by the {@code comparison}
	 * labeled alternative in {@link FlinkSQLParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void enterComparison(FlinkSQLParser.ComparisonContext ctx);
	/**
	 * Exit a parse tree produced by the {@code comparison}
	 * labeled alternative in {@link FlinkSQLParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void exitComparison(FlinkSQLParser.ComparisonContext ctx);
	/**
	 * Enter a parse tree produced by the {@code arithmeticBinaryAlternate}
	 * labeled alternative in {@link FlinkSQLParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void enterArithmeticBinaryAlternate(FlinkSQLParser.ArithmeticBinaryAlternateContext ctx);
	/**
	 * Exit a parse tree produced by the {@code arithmeticBinaryAlternate}
	 * labeled alternative in {@link FlinkSQLParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void exitArithmeticBinaryAlternate(FlinkSQLParser.ArithmeticBinaryAlternateContext ctx);
	/**
	 * Enter a parse tree produced by the {@code arithmeticBinary}
	 * labeled alternative in {@link FlinkSQLParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void enterArithmeticBinary(FlinkSQLParser.ArithmeticBinaryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code arithmeticBinary}
	 * labeled alternative in {@link FlinkSQLParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void exitArithmeticBinary(FlinkSQLParser.ArithmeticBinaryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code arithmeticUnary}
	 * labeled alternative in {@link FlinkSQLParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void enterArithmeticUnary(FlinkSQLParser.ArithmeticUnaryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code arithmeticUnary}
	 * labeled alternative in {@link FlinkSQLParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void exitArithmeticUnary(FlinkSQLParser.ArithmeticUnaryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code dereference}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterDereference(FlinkSQLParser.DereferenceContext ctx);
	/**
	 * Exit a parse tree produced by the {@code dereference}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitDereference(FlinkSQLParser.DereferenceContext ctx);
	/**
	 * Enter a parse tree produced by the {@code simpleCase}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterSimpleCase(FlinkSQLParser.SimpleCaseContext ctx);
	/**
	 * Exit a parse tree produced by the {@code simpleCase}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitSimpleCase(FlinkSQLParser.SimpleCaseContext ctx);
	/**
	 * Enter a parse tree produced by the {@code columnReference}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterColumnReference(FlinkSQLParser.ColumnReferenceContext ctx);
	/**
	 * Exit a parse tree produced by the {@code columnReference}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitColumnReference(FlinkSQLParser.ColumnReferenceContext ctx);
	/**
	 * Enter a parse tree produced by the {@code last}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterLast(FlinkSQLParser.LastContext ctx);
	/**
	 * Exit a parse tree produced by the {@code last}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitLast(FlinkSQLParser.LastContext ctx);
	/**
	 * Enter a parse tree produced by the {@code star}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterStar(FlinkSQLParser.StarContext ctx);
	/**
	 * Exit a parse tree produced by the {@code star}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitStar(FlinkSQLParser.StarContext ctx);
	/**
	 * Enter a parse tree produced by the {@code subscript}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterSubscript(FlinkSQLParser.SubscriptContext ctx);
	/**
	 * Exit a parse tree produced by the {@code subscript}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitSubscript(FlinkSQLParser.SubscriptContext ctx);
	/**
	 * Enter a parse tree produced by the {@code functionCallFilter}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterFunctionCallFilter(FlinkSQLParser.FunctionCallFilterContext ctx);
	/**
	 * Exit a parse tree produced by the {@code functionCallFilter}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitFunctionCallFilter(FlinkSQLParser.FunctionCallFilterContext ctx);
	/**
	 * Enter a parse tree produced by the {@code subqueryExpression}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterSubqueryExpression(FlinkSQLParser.SubqueryExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code subqueryExpression}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitSubqueryExpression(FlinkSQLParser.SubqueryExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code cast}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterCast(FlinkSQLParser.CastContext ctx);
	/**
	 * Exit a parse tree produced by the {@code cast}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitCast(FlinkSQLParser.CastContext ctx);
	/**
	 * Enter a parse tree produced by the {@code constantDefault}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterConstantDefault(FlinkSQLParser.ConstantDefaultContext ctx);
	/**
	 * Exit a parse tree produced by the {@code constantDefault}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitConstantDefault(FlinkSQLParser.ConstantDefaultContext ctx);
	/**
	 * Enter a parse tree produced by the {@code parenthesizedExpression}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterParenthesizedExpression(FlinkSQLParser.ParenthesizedExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code parenthesizedExpression}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitParenthesizedExpression(FlinkSQLParser.ParenthesizedExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code complexDataTypeFieldExpression}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterComplexDataTypeFieldExpression(FlinkSQLParser.ComplexDataTypeFieldExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code complexDataTypeFieldExpression}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitComplexDataTypeFieldExpression(FlinkSQLParser.ComplexDataTypeFieldExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code functionCall}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterFunctionCall(FlinkSQLParser.FunctionCallContext ctx);
	/**
	 * Exit a parse tree produced by the {@code functionCall}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitFunctionCall(FlinkSQLParser.FunctionCallContext ctx);
	/**
	 * Enter a parse tree produced by the {@code searchedCase}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterSearchedCase(FlinkSQLParser.SearchedCaseContext ctx);
	/**
	 * Exit a parse tree produced by the {@code searchedCase}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitSearchedCase(FlinkSQLParser.SearchedCaseContext ctx);
	/**
	 * Enter a parse tree produced by the {@code position}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterPosition(FlinkSQLParser.PositionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code position}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitPosition(FlinkSQLParser.PositionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code first}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterFirst(FlinkSQLParser.FirstContext ctx);
	/**
	 * Exit a parse tree produced by the {@code first}
	 * labeled alternative in {@link FlinkSQLParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitFirst(FlinkSQLParser.FirstContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#complexDataTypeExpression}.
	 * @param ctx the parse tree
	 */
	void enterComplexDataTypeExpression(FlinkSQLParser.ComplexDataTypeExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#complexDataTypeExpression}.
	 * @param ctx the parse tree
	 */
	void exitComplexDataTypeExpression(FlinkSQLParser.ComplexDataTypeExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#arrayExpression}.
	 * @param ctx the parse tree
	 */
	void enterArrayExpression(FlinkSQLParser.ArrayExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#arrayExpression}.
	 * @param ctx the parse tree
	 */
	void exitArrayExpression(FlinkSQLParser.ArrayExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#rowExpression}.
	 * @param ctx the parse tree
	 */
	void enterRowExpression(FlinkSQLParser.RowExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#rowExpression}.
	 * @param ctx the parse tree
	 */
	void exitRowExpression(FlinkSQLParser.RowExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#mapExpression}.
	 * @param ctx the parse tree
	 */
	void enterMapExpression(FlinkSQLParser.MapExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#mapExpression}.
	 * @param ctx the parse tree
	 */
	void exitMapExpression(FlinkSQLParser.MapExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#dataTypeExpression}.
	 * @param ctx the parse tree
	 */
	void enterDataTypeExpression(FlinkSQLParser.DataTypeExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#dataTypeExpression}.
	 * @param ctx the parse tree
	 */
	void exitDataTypeExpression(FlinkSQLParser.DataTypeExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#functionName}.
	 * @param ctx the parse tree
	 */
	void enterFunctionName(FlinkSQLParser.FunctionNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#functionName}.
	 * @param ctx the parse tree
	 */
	void exitFunctionName(FlinkSQLParser.FunctionNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#functionParam}.
	 * @param ctx the parse tree
	 */
	void enterFunctionParam(FlinkSQLParser.FunctionParamContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#functionParam}.
	 * @param ctx the parse tree
	 */
	void exitFunctionParam(FlinkSQLParser.FunctionParamContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#filterClause}.
	 * @param ctx the parse tree
	 */
	void enterFilterClause(FlinkSQLParser.FilterClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#filterClause}.
	 * @param ctx the parse tree
	 */
	void exitFilterClause(FlinkSQLParser.FilterClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#dereferenceDefinition}.
	 * @param ctx the parse tree
	 */
	void enterDereferenceDefinition(FlinkSQLParser.DereferenceDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#dereferenceDefinition}.
	 * @param ctx the parse tree
	 */
	void exitDereferenceDefinition(FlinkSQLParser.DereferenceDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#correlationName}.
	 * @param ctx the parse tree
	 */
	void enterCorrelationName(FlinkSQLParser.CorrelationNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#correlationName}.
	 * @param ctx the parse tree
	 */
	void exitCorrelationName(FlinkSQLParser.CorrelationNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#qualifiedName}.
	 * @param ctx the parse tree
	 */
	void enterQualifiedName(FlinkSQLParser.QualifiedNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#qualifiedName}.
	 * @param ctx the parse tree
	 */
	void exitQualifiedName(FlinkSQLParser.QualifiedNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#timeIntervalExpression}.
	 * @param ctx the parse tree
	 */
	void enterTimeIntervalExpression(FlinkSQLParser.TimeIntervalExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#timeIntervalExpression}.
	 * @param ctx the parse tree
	 */
	void exitTimeIntervalExpression(FlinkSQLParser.TimeIntervalExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#errorCapturingMultiUnitsInterval}.
	 * @param ctx the parse tree
	 */
	void enterErrorCapturingMultiUnitsInterval(FlinkSQLParser.ErrorCapturingMultiUnitsIntervalContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#errorCapturingMultiUnitsInterval}.
	 * @param ctx the parse tree
	 */
	void exitErrorCapturingMultiUnitsInterval(FlinkSQLParser.ErrorCapturingMultiUnitsIntervalContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#multiUnitsInterval}.
	 * @param ctx the parse tree
	 */
	void enterMultiUnitsInterval(FlinkSQLParser.MultiUnitsIntervalContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#multiUnitsInterval}.
	 * @param ctx the parse tree
	 */
	void exitMultiUnitsInterval(FlinkSQLParser.MultiUnitsIntervalContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#errorCapturingUnitToUnitInterval}.
	 * @param ctx the parse tree
	 */
	void enterErrorCapturingUnitToUnitInterval(FlinkSQLParser.ErrorCapturingUnitToUnitIntervalContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#errorCapturingUnitToUnitInterval}.
	 * @param ctx the parse tree
	 */
	void exitErrorCapturingUnitToUnitInterval(FlinkSQLParser.ErrorCapturingUnitToUnitIntervalContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#unitToUnitInterval}.
	 * @param ctx the parse tree
	 */
	void enterUnitToUnitInterval(FlinkSQLParser.UnitToUnitIntervalContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#unitToUnitInterval}.
	 * @param ctx the parse tree
	 */
	void exitUnitToUnitInterval(FlinkSQLParser.UnitToUnitIntervalContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#intervalValue}.
	 * @param ctx the parse tree
	 */
	void enterIntervalValue(FlinkSQLParser.IntervalValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#intervalValue}.
	 * @param ctx the parse tree
	 */
	void exitIntervalValue(FlinkSQLParser.IntervalValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#columnAlias}.
	 * @param ctx the parse tree
	 */
	void enterColumnAlias(FlinkSQLParser.ColumnAliasContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#columnAlias}.
	 * @param ctx the parse tree
	 */
	void exitColumnAlias(FlinkSQLParser.ColumnAliasContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#tableAlias}.
	 * @param ctx the parse tree
	 */
	void enterTableAlias(FlinkSQLParser.TableAliasContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#tableAlias}.
	 * @param ctx the parse tree
	 */
	void exitTableAlias(FlinkSQLParser.TableAliasContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#errorCapturingIdentifier}.
	 * @param ctx the parse tree
	 */
	void enterErrorCapturingIdentifier(FlinkSQLParser.ErrorCapturingIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#errorCapturingIdentifier}.
	 * @param ctx the parse tree
	 */
	void exitErrorCapturingIdentifier(FlinkSQLParser.ErrorCapturingIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by the {@code errorIdent}
	 * labeled alternative in {@link FlinkSQLParser#errorCapturingIdentifierExtra}.
	 * @param ctx the parse tree
	 */
	void enterErrorIdent(FlinkSQLParser.ErrorIdentContext ctx);
	/**
	 * Exit a parse tree produced by the {@code errorIdent}
	 * labeled alternative in {@link FlinkSQLParser#errorCapturingIdentifierExtra}.
	 * @param ctx the parse tree
	 */
	void exitErrorIdent(FlinkSQLParser.ErrorIdentContext ctx);
	/**
	 * Enter a parse tree produced by the {@code realIdent}
	 * labeled alternative in {@link FlinkSQLParser#errorCapturingIdentifierExtra}.
	 * @param ctx the parse tree
	 */
	void enterRealIdent(FlinkSQLParser.RealIdentContext ctx);
	/**
	 * Exit a parse tree produced by the {@code realIdent}
	 * labeled alternative in {@link FlinkSQLParser#errorCapturingIdentifierExtra}.
	 * @param ctx the parse tree
	 */
	void exitRealIdent(FlinkSQLParser.RealIdentContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#identifierList}.
	 * @param ctx the parse tree
	 */
	void enterIdentifierList(FlinkSQLParser.IdentifierListContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#identifierList}.
	 * @param ctx the parse tree
	 */
	void exitIdentifierList(FlinkSQLParser.IdentifierListContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#identifierSeq}.
	 * @param ctx the parse tree
	 */
	void enterIdentifierSeq(FlinkSQLParser.IdentifierSeqContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#identifierSeq}.
	 * @param ctx the parse tree
	 */
	void exitIdentifierSeq(FlinkSQLParser.IdentifierSeqContext ctx);
	/**
	 * Enter a parse tree produced by the {@code unquotedIdentifierAlternative}
	 * labeled alternative in {@link FlinkSQLParser#identifier}.
	 * @param ctx the parse tree
	 */
	void enterUnquotedIdentifierAlternative(FlinkSQLParser.UnquotedIdentifierAlternativeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code unquotedIdentifierAlternative}
	 * labeled alternative in {@link FlinkSQLParser#identifier}.
	 * @param ctx the parse tree
	 */
	void exitUnquotedIdentifierAlternative(FlinkSQLParser.UnquotedIdentifierAlternativeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code quotedIdentifierAlternative}
	 * labeled alternative in {@link FlinkSQLParser#identifier}.
	 * @param ctx the parse tree
	 */
	void enterQuotedIdentifierAlternative(FlinkSQLParser.QuotedIdentifierAlternativeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code quotedIdentifierAlternative}
	 * labeled alternative in {@link FlinkSQLParser#identifier}.
	 * @param ctx the parse tree
	 */
	void exitQuotedIdentifierAlternative(FlinkSQLParser.QuotedIdentifierAlternativeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code nonReservedKeywordsAlternative}
	 * labeled alternative in {@link FlinkSQLParser#identifier}.
	 * @param ctx the parse tree
	 */
	void enterNonReservedKeywordsAlternative(FlinkSQLParser.NonReservedKeywordsAlternativeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code nonReservedKeywordsAlternative}
	 * labeled alternative in {@link FlinkSQLParser#identifier}.
	 * @param ctx the parse tree
	 */
	void exitNonReservedKeywordsAlternative(FlinkSQLParser.NonReservedKeywordsAlternativeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code urefVarAlternative}
	 * labeled alternative in {@link FlinkSQLParser#identifier}.
	 * @param ctx the parse tree
	 */
	void enterUrefVarAlternative(FlinkSQLParser.UrefVarAlternativeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code urefVarAlternative}
	 * labeled alternative in {@link FlinkSQLParser#identifier}.
	 * @param ctx the parse tree
	 */
	void exitUrefVarAlternative(FlinkSQLParser.UrefVarAlternativeContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#refVar}.
	 * @param ctx the parse tree
	 */
	void enterRefVar(FlinkSQLParser.RefVarContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#refVar}.
	 * @param ctx the parse tree
	 */
	void exitRefVar(FlinkSQLParser.RefVarContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#unquotedIdentifier}.
	 * @param ctx the parse tree
	 */
	void enterUnquotedIdentifier(FlinkSQLParser.UnquotedIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#unquotedIdentifier}.
	 * @param ctx the parse tree
	 */
	void exitUnquotedIdentifier(FlinkSQLParser.UnquotedIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#quotedIdentifier}.
	 * @param ctx the parse tree
	 */
	void enterQuotedIdentifier(FlinkSQLParser.QuotedIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#quotedIdentifier}.
	 * @param ctx the parse tree
	 */
	void exitQuotedIdentifier(FlinkSQLParser.QuotedIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#whenClause}.
	 * @param ctx the parse tree
	 */
	void enterWhenClause(FlinkSQLParser.WhenClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#whenClause}.
	 * @param ctx the parse tree
	 */
	void exitWhenClause(FlinkSQLParser.WhenClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#catalogPath}.
	 * @param ctx the parse tree
	 */
	void enterCatalogPath(FlinkSQLParser.CatalogPathContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#catalogPath}.
	 * @param ctx the parse tree
	 */
	void exitCatalogPath(FlinkSQLParser.CatalogPathContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#databasePath}.
	 * @param ctx the parse tree
	 */
	void enterDatabasePath(FlinkSQLParser.DatabasePathContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#databasePath}.
	 * @param ctx the parse tree
	 */
	void exitDatabasePath(FlinkSQLParser.DatabasePathContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#databasePathCreate}.
	 * @param ctx the parse tree
	 */
	void enterDatabasePathCreate(FlinkSQLParser.DatabasePathCreateContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#databasePathCreate}.
	 * @param ctx the parse tree
	 */
	void exitDatabasePathCreate(FlinkSQLParser.DatabasePathCreateContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#tablePathCreate}.
	 * @param ctx the parse tree
	 */
	void enterTablePathCreate(FlinkSQLParser.TablePathCreateContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#tablePathCreate}.
	 * @param ctx the parse tree
	 */
	void exitTablePathCreate(FlinkSQLParser.TablePathCreateContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#tablePath}.
	 * @param ctx the parse tree
	 */
	void enterTablePath(FlinkSQLParser.TablePathContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#tablePath}.
	 * @param ctx the parse tree
	 */
	void exitTablePath(FlinkSQLParser.TablePathContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#uid}.
	 * @param ctx the parse tree
	 */
	void enterUid(FlinkSQLParser.UidContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#uid}.
	 * @param ctx the parse tree
	 */
	void exitUid(FlinkSQLParser.UidContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#withOption}.
	 * @param ctx the parse tree
	 */
	void enterWithOption(FlinkSQLParser.WithOptionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#withOption}.
	 * @param ctx the parse tree
	 */
	void exitWithOption(FlinkSQLParser.WithOptionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#ifNotExists}.
	 * @param ctx the parse tree
	 */
	void enterIfNotExists(FlinkSQLParser.IfNotExistsContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#ifNotExists}.
	 * @param ctx the parse tree
	 */
	void exitIfNotExists(FlinkSQLParser.IfNotExistsContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#ifExists}.
	 * @param ctx the parse tree
	 */
	void enterIfExists(FlinkSQLParser.IfExistsContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#ifExists}.
	 * @param ctx the parse tree
	 */
	void exitIfExists(FlinkSQLParser.IfExistsContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#tablePropertyList}.
	 * @param ctx the parse tree
	 */
	void enterTablePropertyList(FlinkSQLParser.TablePropertyListContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#tablePropertyList}.
	 * @param ctx the parse tree
	 */
	void exitTablePropertyList(FlinkSQLParser.TablePropertyListContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#tableProperty}.
	 * @param ctx the parse tree
	 */
	void enterTableProperty(FlinkSQLParser.TablePropertyContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#tableProperty}.
	 * @param ctx the parse tree
	 */
	void exitTableProperty(FlinkSQLParser.TablePropertyContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#tablePropertyKey}.
	 * @param ctx the parse tree
	 */
	void enterTablePropertyKey(FlinkSQLParser.TablePropertyKeyContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#tablePropertyKey}.
	 * @param ctx the parse tree
	 */
	void exitTablePropertyKey(FlinkSQLParser.TablePropertyKeyContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#tablePropertyValue}.
	 * @param ctx the parse tree
	 */
	void enterTablePropertyValue(FlinkSQLParser.TablePropertyValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#tablePropertyValue}.
	 * @param ctx the parse tree
	 */
	void exitTablePropertyValue(FlinkSQLParser.TablePropertyValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#logicalOperator}.
	 * @param ctx the parse tree
	 */
	void enterLogicalOperator(FlinkSQLParser.LogicalOperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#logicalOperator}.
	 * @param ctx the parse tree
	 */
	void exitLogicalOperator(FlinkSQLParser.LogicalOperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#comparisonOperator}.
	 * @param ctx the parse tree
	 */
	void enterComparisonOperator(FlinkSQLParser.ComparisonOperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#comparisonOperator}.
	 * @param ctx the parse tree
	 */
	void exitComparisonOperator(FlinkSQLParser.ComparisonOperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#bitOperator}.
	 * @param ctx the parse tree
	 */
	void enterBitOperator(FlinkSQLParser.BitOperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#bitOperator}.
	 * @param ctx the parse tree
	 */
	void exitBitOperator(FlinkSQLParser.BitOperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#mathOperator}.
	 * @param ctx the parse tree
	 */
	void enterMathOperator(FlinkSQLParser.MathOperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#mathOperator}.
	 * @param ctx the parse tree
	 */
	void exitMathOperator(FlinkSQLParser.MathOperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#unaryOperator}.
	 * @param ctx the parse tree
	 */
	void enterUnaryOperator(FlinkSQLParser.UnaryOperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#unaryOperator}.
	 * @param ctx the parse tree
	 */
	void exitUnaryOperator(FlinkSQLParser.UnaryOperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#constant}.
	 * @param ctx the parse tree
	 */
	void enterConstant(FlinkSQLParser.ConstantContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#constant}.
	 * @param ctx the parse tree
	 */
	void exitConstant(FlinkSQLParser.ConstantContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#timePointLiteral}.
	 * @param ctx the parse tree
	 */
	void enterTimePointLiteral(FlinkSQLParser.TimePointLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#timePointLiteral}.
	 * @param ctx the parse tree
	 */
	void exitTimePointLiteral(FlinkSQLParser.TimePointLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#stringLiteral}.
	 * @param ctx the parse tree
	 */
	void enterStringLiteral(FlinkSQLParser.StringLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#stringLiteral}.
	 * @param ctx the parse tree
	 */
	void exitStringLiteral(FlinkSQLParser.StringLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#decimalLiteral}.
	 * @param ctx the parse tree
	 */
	void enterDecimalLiteral(FlinkSQLParser.DecimalLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#decimalLiteral}.
	 * @param ctx the parse tree
	 */
	void exitDecimalLiteral(FlinkSQLParser.DecimalLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#booleanLiteral}.
	 * @param ctx the parse tree
	 */
	void enterBooleanLiteral(FlinkSQLParser.BooleanLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#booleanLiteral}.
	 * @param ctx the parse tree
	 */
	void exitBooleanLiteral(FlinkSQLParser.BooleanLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#setQuantifier}.
	 * @param ctx the parse tree
	 */
	void enterSetQuantifier(FlinkSQLParser.SetQuantifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#setQuantifier}.
	 * @param ctx the parse tree
	 */
	void exitSetQuantifier(FlinkSQLParser.SetQuantifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#timePointUnit}.
	 * @param ctx the parse tree
	 */
	void enterTimePointUnit(FlinkSQLParser.TimePointUnitContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#timePointUnit}.
	 * @param ctx the parse tree
	 */
	void exitTimePointUnit(FlinkSQLParser.TimePointUnitContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#timeIntervalUnit}.
	 * @param ctx the parse tree
	 */
	void enterTimeIntervalUnit(FlinkSQLParser.TimeIntervalUnitContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#timeIntervalUnit}.
	 * @param ctx the parse tree
	 */
	void exitTimeIntervalUnit(FlinkSQLParser.TimeIntervalUnitContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#reservedKeywordsUsedAsFuncParam}.
	 * @param ctx the parse tree
	 */
	void enterReservedKeywordsUsedAsFuncParam(FlinkSQLParser.ReservedKeywordsUsedAsFuncParamContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#reservedKeywordsUsedAsFuncParam}.
	 * @param ctx the parse tree
	 */
	void exitReservedKeywordsUsedAsFuncParam(FlinkSQLParser.ReservedKeywordsUsedAsFuncParamContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#reservedKeywordsUsedAsFuncName}.
	 * @param ctx the parse tree
	 */
	void enterReservedKeywordsUsedAsFuncName(FlinkSQLParser.ReservedKeywordsUsedAsFuncNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#reservedKeywordsUsedAsFuncName}.
	 * @param ctx the parse tree
	 */
	void exitReservedKeywordsUsedAsFuncName(FlinkSQLParser.ReservedKeywordsUsedAsFuncNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#reservedKeywords}.
	 * @param ctx the parse tree
	 */
	void enterReservedKeywords(FlinkSQLParser.ReservedKeywordsContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#reservedKeywords}.
	 * @param ctx the parse tree
	 */
	void exitReservedKeywords(FlinkSQLParser.ReservedKeywordsContext ctx);
	/**
	 * Enter a parse tree produced by {@link FlinkSQLParser#nonReservedKeywords}.
	 * @param ctx the parse tree
	 */
	void enterNonReservedKeywords(FlinkSQLParser.NonReservedKeywordsContext ctx);
	/**
	 * Exit a parse tree produced by {@link FlinkSQLParser#nonReservedKeywords}.
	 * @param ctx the parse tree
	 */
	void exitNonReservedKeywords(FlinkSQLParser.NonReservedKeywordsContext ctx);
}