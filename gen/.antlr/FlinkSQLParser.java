// Generated from /Users/camile/Work/opensource/flink-sql-vscode/gen/FlinkSQL.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class FlinkSQLParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, SPACE=2, COMMENT_INPUT=3, LINE_COMMENT=4, KW_ADD=5, KW_ADMIN=6, 
		KW_AFTER=7, KW_ANALYZE=8, KW_ASC=9, KW_BEFORE=10, KW_BYTES=11, KW_CASCADE=12, 
		KW_CATALOG=13, KW_CATALOGS=14, KW_CENTURY=15, KW_CHAIN=16, KW_CHANGELOG_MODE=17, 
		KW_CHARACTERS=18, KW_COMMENT=19, KW_COMPACT=20, KW_COLUMNS=21, KW_CONSTRAINTS=22, 
		KW_CONSTRUCTOR=23, KW_CUMULATE=24, KW_DATA=25, KW_DATABASE=26, KW_DATABASES=27, 
		KW_DAYS=28, KW_DECADE=29, KW_DEFINED=30, KW_DESC=31, KW_DESCRIPTOR=32, 
		KW_DIV=33, KW_ENCODING=34, KW_ENFORCED=35, KW_ENGINE=36, KW_EPOCH=37, 
		KW_ERROR=38, KW_ESTIMATED_COST=39, KW_EXCEPTION=40, KW_EXCLUDE=41, KW_EXCLUDING=42, 
		KW_EXTENDED=43, KW_FILTER=44, KW_FILE=45, KW_FINAL=46, KW_FIRST=47, KW_FOLLOWING=48, 
		KW_FORMAT=49, KW_FORTRAN=50, KW_FOUND=51, KW_FRAC_SECOND=52, KW_FUNCTIONS=53, 
		KW_GENERAL=54, KW_GENERATED=55, KW_GO=56, KW_GOTO=57, KW_GRANTED=58, KW_HOP=59, 
		KW_HOURS=60, KW_IF=61, KW_IGNORE=62, KW_INCREMENT=63, KW_INPUT=64, KW_INVOKER=65, 
		KW_JAR=66, KW_JARS=67, KW_JAVA=68, KW_JSON=69, KW_JSON_EXECUTION_PLAN=70, 
		KW_KEY=71, KW_KEY_MEMBER=72, KW_KEY_TYPE=73, KW_LABEL=74, KW_LAST=75, 
		KW_LENGTH=76, KW_LEVEL=77, KW_LOAD=78, KW_MAP=79, KW_MICROSECOND=80, KW_MILLENNIUM=81, 
		KW_MILLISECOND=82, KW_MINUTES=83, KW_MINVALUE=84, KW_MODIFY=85, KW_MODULES=86, 
		KW_MONTHS=87, KW_NANOSECOND=88, KW_NULLS=89, KW_NUMBER=90, KW_OPTION=91, 
		KW_OPTIONS=92, KW_ORDERING=93, KW_OUTPUT=94, KW_OVERWRITE=95, KW_OVERWRITING=96, 
		KW_PARTITIONED=97, KW_PARTITIONS=98, KW_PASSING=99, KW_PAST=100, KW_PATH=101, 
		KW_PLACING=102, KW_PLAN=103, KW_PRECEDING=104, KW_PRESERVE=105, KW_PRIOR=106, 
		KW_PRIVILEGES=107, KW_PUBLIC=108, KW_PYTHON=109, KW_PYTHON_FILES=110, 
		KW_PYTHON_REQUIREMENTS=111, KW_PYTHON_DEPENDENCIES=112, KW_PYTHON_JAR=113, 
		KW_PYTHON_ARCHIVES=114, KW_PYTHON_PARAMETER=115, KW_QUARTER=116, KW_RAW=117, 
		KW_READ=118, KW_RELATIVE=119, KW_REMOVE=120, KW_RENAME=121, KW_REPLACE=122, 
		KW_RESPECT=123, KW_RESTART=124, KW_RESTRICT=125, KW_ROLE=126, KW_ROW_COUNT=127, 
		KW_SCALA=128, KW_SCALAR=129, KW_SCALE=130, KW_SCHEMA=131, KW_SECONDS=132, 
		KW_SECTION=133, KW_SECURITY=134, KW_SELF=135, KW_SERVER=136, KW_SERVER_NAME=137, 
		KW_SESSION=138, KW_SETS=139, KW_SIMPLE=140, KW_SIZE=141, KW_SLIDE=142, 
		KW_SOURCE=143, KW_SPACE=144, KW_STATE=145, KW_STATEMENT=146, KW_STEP=147, 
		KW_STRING=148, KW_STRUCTURE=149, KW_STYLE=150, KW_TABLES=151, KW_TEMPORARY=152, 
		KW_TIMECOL=153, KW_FLOOR=154, KW_TIMESTAMP_LTZ=155, KW_TIMESTAMPADD=156, 
		KW_TIMESTAMPDIFF=157, KW_TRANSFORM=158, KW_TUMBLE=159, KW_TYPE=160, KW_UNDER=161, 
		KW_UNLOAD=162, KW_USAGE=163, KW_USE=164, KW_UTF16=165, KW_UTF32=166, KW_UTF8=167, 
		KW_VERSION=168, KW_VIEW=169, KW_VIEWS=170, KW_VIRTUAL=171, KW_WATERMARK=172, 
		KW_WATERMARKS=173, KW_WEEK=174, KW_WEEKS=175, KW_WORK=176, KW_WRAPPER=177, 
		KW_YEARS=178, KW_ZONE=179, KW_ABS=180, KW_ALL=181, KW_ALLOW=182, KW_ALTER=183, 
		KW_AND=184, KW_ANY=185, KW_ARE=186, KW_ARRAY=187, KW_AS=188, KW_ASYMMETRIC=189, 
		KW_AT=190, KW_AVG=191, KW_BEGIN=192, KW_BETWEEN=193, KW_BIGINT=194, KW_BINARY=195, 
		KW_BIT=196, KW_BLOB=197, KW_BOOLEAN=198, KW_BOTH=199, KW_BY=200, KW_CALL=201, 
		KW_CALLED=202, KW_CASCADED=203, KW_CASE=204, KW_CAST=205, KW_CEIL=206, 
		KW_CHAR=207, KW_CHARACTER=208, KW_CHECK=209, KW_CLOB=210, KW_CLOSE=211, 
		KW_COALESCE=212, KW_COLLATE=213, KW_COLLECT=214, KW_COLUMN=215, KW_COMMIT=216, 
		KW_CONNECT=217, KW_CONSTRAINT=218, KW_CONTAINS=219, KW_CONVERT=220, KW_COUNT=221, 
		KW_CREATE=222, KW_CROSS=223, KW_CUBE=224, KW_CURRENT=225, KW_CURSOR=226, 
		KW_CYCLE=227, KW_DATE=228, KW_DATETIME=229, KW_DAY=230, KW_DEC=231, KW_DECIMAL=232, 
		KW_DECLARE=233, KW_DEFAULT=234, KW_DEFINE=235, KW_DELETE=236, KW_DESCRIBE=237, 
		KW_DISTINCT=238, KW_DOUBLE=239, KW_DROP=240, KW_EACH=241, KW_ELSE=242, 
		KW_END=243, KW_EQUALS=244, KW_ESCAPE=245, KW_EXCEPT=246, KW_EXECUTE=247, 
		KW_EXISTS=248, KW_EXPLAIN=249, KW_EXTERNAL=250, KW_EXTRACT=251, KW_FALSE=252, 
		KW_FLOAT=253, KW_FOR=254, KW_FROM=255, KW_FULL=256, KW_FUNCTION=257, KW_GLOBAL=258, 
		KW_GRANT=259, KW_GROUP=260, KW_GROUPING=261, KW_GROUPS=262, KW_HAVING=263, 
		KW_HOUR=264, KW_IMPORT=265, KW_IN=266, KW_INCLUDING=267, KW_INNER=268, 
		KW_INOUT=269, KW_INSERT=270, KW_INT=271, KW_INTEGER=272, KW_INTERSECT=273, 
		KW_INTERVAL=274, KW_INTO=275, KW_IS=276, KW_JOIN=277, KW_LAG=278, KW_LANGUAGE=279, 
		KW_LATERAL=280, KW_LEADING=281, KW_LEFT=282, KW_LIKE=283, KW_LIMIT=284, 
		KW_LOCAL=285, KW_MATCH=286, KW_MATCH_RECOGNIZE=287, KW_MEASURES=288, KW_MERGE=289, 
		KW_METADATA=290, KW_MINUS=291, KW_MINUTE=292, KW_MODIFIES=293, KW_MODULE=294, 
		KW_MONTH=295, KW_MULTISET=296, KW_NATURAL=297, KW_NEXT=298, KW_NO=299, 
		KW_NONE=300, KW_NOT=301, KW_NULL=302, KW_NUMERIC=303, KW_OF=304, KW_OFFSET=305, 
		KW_ON=306, KW_ONE=307, KW_OR=308, KW_ORDER=309, KW_OUT=310, KW_OUTER=311, 
		KW_OVER=312, KW_OVERLAY=313, KW_PARTITION=314, KW_PATTERN=315, KW_PER=316, 
		KW_PERCENT=317, KW_PERIOD=318, KW_POSITION=319, KW_POWER=320, KW_PRIMARY=321, 
		KW_RANGE=322, KW_RANK=323, KW_RESET=324, KW_REVOKE=325, KW_RIGHT=326, 
		KW_RLIKE=327, KW_ROLLBACK=328, KW_ROLLUP=329, KW_ROW=330, KW_ROWS=331, 
		KW_SECOND=332, KW_SELECT=333, KW_SET=334, KW_SHOW=335, KW_SIMILAR=336, 
		KW_SKIP=337, KW_SMALLINT=338, KW_START=339, KW_STATIC=340, KW_SUBSTRING=341, 
		KW_SUM=342, KW_SYMMETRIC=343, KW_SYSTEM=344, KW_SYSTEM_TIME=345, KW_SYSTEM_USER=346, 
		KW_TABLE=347, KW_TABLESAMPLE=348, KW_THEN=349, KW_TIME=350, KW_TIMESTAMP=351, 
		KW_TIMESTAMP_3=352, KW_TIMESTAMP_6=353, KW_TIMESTAMP_9=354, KW_TINYINT=355, 
		KW_TO=356, KW_TRAILING=357, KW_TRUE=358, KW_TRUNCATE=359, KW_UNION=360, 
		KW_UNIQUE=361, KW_UNKNOWN=362, KW_UNNEST=363, KW_UPPER=364, KW_UPSERT=365, 
		KW_USER=366, KW_USING=367, KW_VALUE=368, KW_VALUES=369, KW_VARBINARY=370, 
		KW_VARCHAR=371, KW_WHEN=372, KW_WHERE=373, KW_WINDOW=374, KW_WITH=375, 
		KW_WITHIN=376, KW_WITHOUT=377, KW_YEAR=378, EQUAL_SYMBOL=379, GREATER_SYMBOL=380, 
		LESS_SYMBOL=381, EXCLAMATION_SYMBOL=382, BIT_NOT_OP=383, BIT_OR_OP=384, 
		BIT_AND_OP=385, BIT_XOR_OP=386, DOT=387, LS_BRACKET=388, RS_BRACKET=389, 
		LR_BRACKET=390, RR_BRACKET=391, LB_BRACKET=392, RB_BRACKET=393, COMMA=394, 
		SEMICOLON=395, AT_SIGN=396, SINGLE_QUOTE_SYMB=397, DOUBLE_QUOTE_SYMB=398, 
		REVERSE_QUOTE_SYMB=399, COLON_SYMB=400, ASTERISK_SIGN=401, UNDERLINE_SIGN=402, 
		HYPNEN_SIGN=403, ADD_SIGN=404, PENCENT_SIGN=405, DOUBLE_VERTICAL_SIGN=406, 
		DOUBLE_HYPNEN_SIGN=407, SLASH_SIGN=408, QUESTION_MARK_SIGN=409, DOUBLE_RIGHT_ARROW=410, 
		STRING_LITERAL=411, DIG_LITERAL=412, REAL_LITERAL=413, BIT_STRING=414, 
		ID_LITERAL=415, SLASH_TEXT=416;
	public static final int
		RULE_program = 0, RULE_statement = 1, RULE_sqlStatements = 2, RULE_comment = 3, 
		RULE_sqlStatement = 4, RULE_emptyStatement = 5, RULE_ddlStatement = 6, 
		RULE_dmlStatement = 7, RULE_describeStatement = 8, RULE_explainStatement = 9, 
		RULE_explainDetails = 10, RULE_explainDetail = 11, RULE_useStatement = 12, 
		RULE_useModuleStatement = 13, RULE_showStatememt = 14, RULE_loadStatement = 15, 
		RULE_unloadStatememt = 16, RULE_setStatememt = 17, RULE_resetStatememt = 18, 
		RULE_jarStatememt = 19, RULE_dtFilePath = 20, RULE_createTable = 21, RULE_simpleCreateTable = 22, 
		RULE_createTableAsSelect = 23, RULE_columnOptionDefinition = 24, RULE_physicalColumnDefinition = 25, 
		RULE_columnName = 26, RULE_columnNameList = 27, RULE_columnType = 28, 
		RULE_lengthOneDimension = 29, RULE_lengthTwoOptionalDimension = 30, RULE_lengthTwoStringDimension = 31, 
		RULE_lengthOneTypeDimension = 32, RULE_mapTypeDimension = 33, RULE_rowTypeDimension = 34, 
		RULE_columnConstraint = 35, RULE_commentSpec = 36, RULE_metadataColumnDefinition = 37, 
		RULE_metadataKey = 38, RULE_computedColumnDefinition = 39, RULE_computedColumnExpression = 40, 
		RULE_watermarkDefinition = 41, RULE_tableConstraint = 42, RULE_constraintName = 43, 
		RULE_selfDefinitionClause = 44, RULE_partitionDefinition = 45, RULE_transformList = 46, 
		RULE_transform = 47, RULE_transformArgument = 48, RULE_likeDefinition = 49, 
		RULE_likeOption = 50, RULE_createCatalog = 51, RULE_createDatabase = 52, 
		RULE_createView = 53, RULE_createFunction = 54, RULE_usingClause = 55, 
		RULE_jarFileName = 56, RULE_alterTable = 57, RULE_renameDefinition = 58, 
		RULE_setKeyValueDefinition = 59, RULE_addConstraint = 60, RULE_dropConstraint = 61, 
		RULE_addUnique = 62, RULE_notForced = 63, RULE_alertView = 64, RULE_alterDatabase = 65, 
		RULE_alterFunction = 66, RULE_dropCatalog = 67, RULE_dropTable = 68, RULE_dropDatabase = 69, 
		RULE_dropView = 70, RULE_dropFunction = 71, RULE_insertStatement = 72, 
		RULE_insertSimpleStatement = 73, RULE_insertPartitionDefinition = 74, 
		RULE_valuesDefinition = 75, RULE_valuesRowDefinition = 76, RULE_insertMulStatementCompatibility = 77, 
		RULE_insertMulStatement = 78, RULE_queryStatement = 79, RULE_valuesCaluse = 80, 
		RULE_withClause = 81, RULE_withItem = 82, RULE_withItemName = 83, RULE_selectStatement = 84, 
		RULE_selectClause = 85, RULE_projectItemDefinition = 86, RULE_overWindowItem = 87, 
		RULE_fromClause = 88, RULE_tableExpression = 89, RULE_tableReference = 90, 
		RULE_tablePrimary = 91, RULE_systemTimePeriod = 92, RULE_dateTimeExpression = 93, 
		RULE_inlineDataValueClause = 94, RULE_windoTVFClause = 95, RULE_windowTVFExression = 96, 
		RULE_windoTVFName = 97, RULE_windowTVFParam = 98, RULE_timeIntervalParamName = 99, 
		RULE_columnDescriptor = 100, RULE_joinCondition = 101, RULE_whereClause = 102, 
		RULE_groupByClause = 103, RULE_groupItemDefinition = 104, RULE_groupingSets = 105, 
		RULE_groupingSetsNotaionName = 106, RULE_groupWindowFunction = 107, RULE_groupWindowFunctionName = 108, 
		RULE_timeAttrColumn = 109, RULE_havingClause = 110, RULE_windowClause = 111, 
		RULE_namedWindow = 112, RULE_windowSpec = 113, RULE_matchRecognizeClause = 114, 
		RULE_orderByCaluse = 115, RULE_orderItemDefition = 116, RULE_limitClause = 117, 
		RULE_partitionByClause = 118, RULE_quantifiers = 119, RULE_measuresClause = 120, 
		RULE_patternDefination = 121, RULE_patternVariable = 122, RULE_outputMode = 123, 
		RULE_afterMatchStrategy = 124, RULE_patternVariablesDefination = 125, 
		RULE_windowFrame = 126, RULE_frameBound = 127, RULE_withinClause = 128, 
		RULE_expression = 129, RULE_booleanExpression = 130, RULE_predicate = 131, 
		RULE_likePredicate = 132, RULE_valueExpression = 133, RULE_primaryExpression = 134, 
		RULE_complexDataTypeExpression = 135, RULE_arrayExpression = 136, RULE_rowExpression = 137, 
		RULE_mapExpression = 138, RULE_dataTypeExpression = 139, RULE_functionName = 140, 
		RULE_functionParam = 141, RULE_filterClause = 142, RULE_dereferenceDefinition = 143, 
		RULE_correlationName = 144, RULE_qualifiedName = 145, RULE_timeIntervalExpression = 146, 
		RULE_errorCapturingMultiUnitsInterval = 147, RULE_multiUnitsInterval = 148, 
		RULE_errorCapturingUnitToUnitInterval = 149, RULE_unitToUnitInterval = 150, 
		RULE_intervalValue = 151, RULE_columnAlias = 152, RULE_tableAlias = 153, 
		RULE_errorCapturingIdentifier = 154, RULE_errorCapturingIdentifierExtra = 155, 
		RULE_identifierList = 156, RULE_identifierSeq = 157, RULE_identifier = 158, 
		RULE_refVar = 159, RULE_unquotedIdentifier = 160, RULE_quotedIdentifier = 161, 
		RULE_whenClause = 162, RULE_catalogPath = 163, RULE_databasePath = 164, 
		RULE_databasePathCreate = 165, RULE_tablePathCreate = 166, RULE_tablePath = 167, 
		RULE_uid = 168, RULE_withOption = 169, RULE_ifNotExists = 170, RULE_ifExists = 171, 
		RULE_tablePropertyList = 172, RULE_tableProperty = 173, RULE_tablePropertyKey = 174, 
		RULE_tablePropertyValue = 175, RULE_logicalOperator = 176, RULE_comparisonOperator = 177, 
		RULE_bitOperator = 178, RULE_mathOperator = 179, RULE_unaryOperator = 180, 
		RULE_constant = 181, RULE_timePointLiteral = 182, RULE_stringLiteral = 183, 
		RULE_decimalLiteral = 184, RULE_booleanLiteral = 185, RULE_setQuantifier = 186, 
		RULE_timePointUnit = 187, RULE_timeIntervalUnit = 188, RULE_reservedKeywordsUsedAsFuncParam = 189, 
		RULE_reservedKeywordsUsedAsFuncName = 190, RULE_reservedKeywords = 191, 
		RULE_nonReservedKeywords = 192;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "statement", "sqlStatements", "comment", "sqlStatement", "emptyStatement", 
			"ddlStatement", "dmlStatement", "describeStatement", "explainStatement", 
			"explainDetails", "explainDetail", "useStatement", "useModuleStatement", 
			"showStatememt", "loadStatement", "unloadStatememt", "setStatememt", 
			"resetStatememt", "jarStatememt", "dtFilePath", "createTable", "simpleCreateTable", 
			"createTableAsSelect", "columnOptionDefinition", "physicalColumnDefinition", 
			"columnName", "columnNameList", "columnType", "lengthOneDimension", "lengthTwoOptionalDimension", 
			"lengthTwoStringDimension", "lengthOneTypeDimension", "mapTypeDimension", 
			"rowTypeDimension", "columnConstraint", "commentSpec", "metadataColumnDefinition", 
			"metadataKey", "computedColumnDefinition", "computedColumnExpression", 
			"watermarkDefinition", "tableConstraint", "constraintName", "selfDefinitionClause", 
			"partitionDefinition", "transformList", "transform", "transformArgument", 
			"likeDefinition", "likeOption", "createCatalog", "createDatabase", "createView", 
			"createFunction", "usingClause", "jarFileName", "alterTable", "renameDefinition", 
			"setKeyValueDefinition", "addConstraint", "dropConstraint", "addUnique", 
			"notForced", "alertView", "alterDatabase", "alterFunction", "dropCatalog", 
			"dropTable", "dropDatabase", "dropView", "dropFunction", "insertStatement", 
			"insertSimpleStatement", "insertPartitionDefinition", "valuesDefinition", 
			"valuesRowDefinition", "insertMulStatementCompatibility", "insertMulStatement", 
			"queryStatement", "valuesCaluse", "withClause", "withItem", "withItemName", 
			"selectStatement", "selectClause", "projectItemDefinition", "overWindowItem", 
			"fromClause", "tableExpression", "tableReference", "tablePrimary", "systemTimePeriod", 
			"dateTimeExpression", "inlineDataValueClause", "windoTVFClause", "windowTVFExression", 
			"windoTVFName", "windowTVFParam", "timeIntervalParamName", "columnDescriptor", 
			"joinCondition", "whereClause", "groupByClause", "groupItemDefinition", 
			"groupingSets", "groupingSetsNotaionName", "groupWindowFunction", "groupWindowFunctionName", 
			"timeAttrColumn", "havingClause", "windowClause", "namedWindow", "windowSpec", 
			"matchRecognizeClause", "orderByCaluse", "orderItemDefition", "limitClause", 
			"partitionByClause", "quantifiers", "measuresClause", "patternDefination", 
			"patternVariable", "outputMode", "afterMatchStrategy", "patternVariablesDefination", 
			"windowFrame", "frameBound", "withinClause", "expression", "booleanExpression", 
			"predicate", "likePredicate", "valueExpression", "primaryExpression", 
			"complexDataTypeExpression", "arrayExpression", "rowExpression", "mapExpression", 
			"dataTypeExpression", "functionName", "functionParam", "filterClause", 
			"dereferenceDefinition", "correlationName", "qualifiedName", "timeIntervalExpression", 
			"errorCapturingMultiUnitsInterval", "multiUnitsInterval", "errorCapturingUnitToUnitInterval", 
			"unitToUnitInterval", "intervalValue", "columnAlias", "tableAlias", "errorCapturingIdentifier", 
			"errorCapturingIdentifierExtra", "identifierList", "identifierSeq", "identifier", 
			"refVar", "unquotedIdentifier", "quotedIdentifier", "whenClause", "catalogPath", 
			"databasePath", "databasePathCreate", "tablePathCreate", "tablePath", 
			"uid", "withOption", "ifNotExists", "ifExists", "tablePropertyList", 
			"tableProperty", "tablePropertyKey", "tablePropertyValue", "logicalOperator", 
			"comparisonOperator", "bitOperator", "mathOperator", "unaryOperator", 
			"constant", "timePointLiteral", "stringLiteral", "decimalLiteral", "booleanLiteral", 
			"setQuantifier", "timePointUnit", "timeIntervalUnit", "reservedKeywordsUsedAsFuncParam", 
			"reservedKeywordsUsedAsFuncName", "reservedKeywords", "nonReservedKeywords"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'$'", null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, "'='", "'>'", "'<'", "'!'", 
			"'~'", "'|'", "'&'", "'^'", "'.'", "'['", "']'", "'('", "')'", "'{'", 
			"'}'", "','", "';'", "'@'", "'''", "'\"'", "'`'", "':'", "'*'", "'_'", 
			"'-'", "'+'", "'%'", "'||'", "'--'", "'/'", "'?'", "'=>'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, "SPACE", "COMMENT_INPUT", "LINE_COMMENT", "KW_ADD", "KW_ADMIN", 
			"KW_AFTER", "KW_ANALYZE", "KW_ASC", "KW_BEFORE", "KW_BYTES", "KW_CASCADE", 
			"KW_CATALOG", "KW_CATALOGS", "KW_CENTURY", "KW_CHAIN", "KW_CHANGELOG_MODE", 
			"KW_CHARACTERS", "KW_COMMENT", "KW_COMPACT", "KW_COLUMNS", "KW_CONSTRAINTS", 
			"KW_CONSTRUCTOR", "KW_CUMULATE", "KW_DATA", "KW_DATABASE", "KW_DATABASES", 
			"KW_DAYS", "KW_DECADE", "KW_DEFINED", "KW_DESC", "KW_DESCRIPTOR", "KW_DIV", 
			"KW_ENCODING", "KW_ENFORCED", "KW_ENGINE", "KW_EPOCH", "KW_ERROR", "KW_ESTIMATED_COST", 
			"KW_EXCEPTION", "KW_EXCLUDE", "KW_EXCLUDING", "KW_EXTENDED", "KW_FILTER", 
			"KW_FILE", "KW_FINAL", "KW_FIRST", "KW_FOLLOWING", "KW_FORMAT", "KW_FORTRAN", 
			"KW_FOUND", "KW_FRAC_SECOND", "KW_FUNCTIONS", "KW_GENERAL", "KW_GENERATED", 
			"KW_GO", "KW_GOTO", "KW_GRANTED", "KW_HOP", "KW_HOURS", "KW_IF", "KW_IGNORE", 
			"KW_INCREMENT", "KW_INPUT", "KW_INVOKER", "KW_JAR", "KW_JARS", "KW_JAVA", 
			"KW_JSON", "KW_JSON_EXECUTION_PLAN", "KW_KEY", "KW_KEY_MEMBER", "KW_KEY_TYPE", 
			"KW_LABEL", "KW_LAST", "KW_LENGTH", "KW_LEVEL", "KW_LOAD", "KW_MAP", 
			"KW_MICROSECOND", "KW_MILLENNIUM", "KW_MILLISECOND", "KW_MINUTES", "KW_MINVALUE", 
			"KW_MODIFY", "KW_MODULES", "KW_MONTHS", "KW_NANOSECOND", "KW_NULLS", 
			"KW_NUMBER", "KW_OPTION", "KW_OPTIONS", "KW_ORDERING", "KW_OUTPUT", "KW_OVERWRITE", 
			"KW_OVERWRITING", "KW_PARTITIONED", "KW_PARTITIONS", "KW_PASSING", "KW_PAST", 
			"KW_PATH", "KW_PLACING", "KW_PLAN", "KW_PRECEDING", "KW_PRESERVE", "KW_PRIOR", 
			"KW_PRIVILEGES", "KW_PUBLIC", "KW_PYTHON", "KW_PYTHON_FILES", "KW_PYTHON_REQUIREMENTS", 
			"KW_PYTHON_DEPENDENCIES", "KW_PYTHON_JAR", "KW_PYTHON_ARCHIVES", "KW_PYTHON_PARAMETER", 
			"KW_QUARTER", "KW_RAW", "KW_READ", "KW_RELATIVE", "KW_REMOVE", "KW_RENAME", 
			"KW_REPLACE", "KW_RESPECT", "KW_RESTART", "KW_RESTRICT", "KW_ROLE", "KW_ROW_COUNT", 
			"KW_SCALA", "KW_SCALAR", "KW_SCALE", "KW_SCHEMA", "KW_SECONDS", "KW_SECTION", 
			"KW_SECURITY", "KW_SELF", "KW_SERVER", "KW_SERVER_NAME", "KW_SESSION", 
			"KW_SETS", "KW_SIMPLE", "KW_SIZE", "KW_SLIDE", "KW_SOURCE", "KW_SPACE", 
			"KW_STATE", "KW_STATEMENT", "KW_STEP", "KW_STRING", "KW_STRUCTURE", "KW_STYLE", 
			"KW_TABLES", "KW_TEMPORARY", "KW_TIMECOL", "KW_FLOOR", "KW_TIMESTAMP_LTZ", 
			"KW_TIMESTAMPADD", "KW_TIMESTAMPDIFF", "KW_TRANSFORM", "KW_TUMBLE", "KW_TYPE", 
			"KW_UNDER", "KW_UNLOAD", "KW_USAGE", "KW_USE", "KW_UTF16", "KW_UTF32", 
			"KW_UTF8", "KW_VERSION", "KW_VIEW", "KW_VIEWS", "KW_VIRTUAL", "KW_WATERMARK", 
			"KW_WATERMARKS", "KW_WEEK", "KW_WEEKS", "KW_WORK", "KW_WRAPPER", "KW_YEARS", 
			"KW_ZONE", "KW_ABS", "KW_ALL", "KW_ALLOW", "KW_ALTER", "KW_AND", "KW_ANY", 
			"KW_ARE", "KW_ARRAY", "KW_AS", "KW_ASYMMETRIC", "KW_AT", "KW_AVG", "KW_BEGIN", 
			"KW_BETWEEN", "KW_BIGINT", "KW_BINARY", "KW_BIT", "KW_BLOB", "KW_BOOLEAN", 
			"KW_BOTH", "KW_BY", "KW_CALL", "KW_CALLED", "KW_CASCADED", "KW_CASE", 
			"KW_CAST", "KW_CEIL", "KW_CHAR", "KW_CHARACTER", "KW_CHECK", "KW_CLOB", 
			"KW_CLOSE", "KW_COALESCE", "KW_COLLATE", "KW_COLLECT", "KW_COLUMN", "KW_COMMIT", 
			"KW_CONNECT", "KW_CONSTRAINT", "KW_CONTAINS", "KW_CONVERT", "KW_COUNT", 
			"KW_CREATE", "KW_CROSS", "KW_CUBE", "KW_CURRENT", "KW_CURSOR", "KW_CYCLE", 
			"KW_DATE", "KW_DATETIME", "KW_DAY", "KW_DEC", "KW_DECIMAL", "KW_DECLARE", 
			"KW_DEFAULT", "KW_DEFINE", "KW_DELETE", "KW_DESCRIBE", "KW_DISTINCT", 
			"KW_DOUBLE", "KW_DROP", "KW_EACH", "KW_ELSE", "KW_END", "KW_EQUALS", 
			"KW_ESCAPE", "KW_EXCEPT", "KW_EXECUTE", "KW_EXISTS", "KW_EXPLAIN", "KW_EXTERNAL", 
			"KW_EXTRACT", "KW_FALSE", "KW_FLOAT", "KW_FOR", "KW_FROM", "KW_FULL", 
			"KW_FUNCTION", "KW_GLOBAL", "KW_GRANT", "KW_GROUP", "KW_GROUPING", "KW_GROUPS", 
			"KW_HAVING", "KW_HOUR", "KW_IMPORT", "KW_IN", "KW_INCLUDING", "KW_INNER", 
			"KW_INOUT", "KW_INSERT", "KW_INT", "KW_INTEGER", "KW_INTERSECT", "KW_INTERVAL", 
			"KW_INTO", "KW_IS", "KW_JOIN", "KW_LAG", "KW_LANGUAGE", "KW_LATERAL", 
			"KW_LEADING", "KW_LEFT", "KW_LIKE", "KW_LIMIT", "KW_LOCAL", "KW_MATCH", 
			"KW_MATCH_RECOGNIZE", "KW_MEASURES", "KW_MERGE", "KW_METADATA", "KW_MINUS", 
			"KW_MINUTE", "KW_MODIFIES", "KW_MODULE", "KW_MONTH", "KW_MULTISET", "KW_NATURAL", 
			"KW_NEXT", "KW_NO", "KW_NONE", "KW_NOT", "KW_NULL", "KW_NUMERIC", "KW_OF", 
			"KW_OFFSET", "KW_ON", "KW_ONE", "KW_OR", "KW_ORDER", "KW_OUT", "KW_OUTER", 
			"KW_OVER", "KW_OVERLAY", "KW_PARTITION", "KW_PATTERN", "KW_PER", "KW_PERCENT", 
			"KW_PERIOD", "KW_POSITION", "KW_POWER", "KW_PRIMARY", "KW_RANGE", "KW_RANK", 
			"KW_RESET", "KW_REVOKE", "KW_RIGHT", "KW_RLIKE", "KW_ROLLBACK", "KW_ROLLUP", 
			"KW_ROW", "KW_ROWS", "KW_SECOND", "KW_SELECT", "KW_SET", "KW_SHOW", "KW_SIMILAR", 
			"KW_SKIP", "KW_SMALLINT", "KW_START", "KW_STATIC", "KW_SUBSTRING", "KW_SUM", 
			"KW_SYMMETRIC", "KW_SYSTEM", "KW_SYSTEM_TIME", "KW_SYSTEM_USER", "KW_TABLE", 
			"KW_TABLESAMPLE", "KW_THEN", "KW_TIME", "KW_TIMESTAMP", "KW_TIMESTAMP_3", 
			"KW_TIMESTAMP_6", "KW_TIMESTAMP_9", "KW_TINYINT", "KW_TO", "KW_TRAILING", 
			"KW_TRUE", "KW_TRUNCATE", "KW_UNION", "KW_UNIQUE", "KW_UNKNOWN", "KW_UNNEST", 
			"KW_UPPER", "KW_UPSERT", "KW_USER", "KW_USING", "KW_VALUE", "KW_VALUES", 
			"KW_VARBINARY", "KW_VARCHAR", "KW_WHEN", "KW_WHERE", "KW_WINDOW", "KW_WITH", 
			"KW_WITHIN", "KW_WITHOUT", "KW_YEAR", "EQUAL_SYMBOL", "GREATER_SYMBOL", 
			"LESS_SYMBOL", "EXCLAMATION_SYMBOL", "BIT_NOT_OP", "BIT_OR_OP", "BIT_AND_OP", 
			"BIT_XOR_OP", "DOT", "LS_BRACKET", "RS_BRACKET", "LR_BRACKET", "RR_BRACKET", 
			"LB_BRACKET", "RB_BRACKET", "COMMA", "SEMICOLON", "AT_SIGN", "SINGLE_QUOTE_SYMB", 
			"DOUBLE_QUOTE_SYMB", "REVERSE_QUOTE_SYMB", "COLON_SYMB", "ASTERISK_SIGN", 
			"UNDERLINE_SIGN", "HYPNEN_SIGN", "ADD_SIGN", "PENCENT_SIGN", "DOUBLE_VERTICAL_SIGN", 
			"DOUBLE_HYPNEN_SIGN", "SLASH_SIGN", "QUESTION_MARK_SIGN", "DOUBLE_RIGHT_ARROW", 
			"STRING_LITERAL", "DIG_LITERAL", "REAL_LITERAL", "BIT_STRING", "ID_LITERAL", 
			"SLASH_TEXT"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "FlinkSQL.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public FlinkSQLParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgramContext extends ParserRuleContext {
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode EOF() { return getToken(FlinkSQLParser.EOF, 0); }
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(386);
			statement();
			setState(387);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public SqlStatementsContext sqlStatements() {
			return getRuleContext(SqlStatementsContext.class,0);
		}
		public TerminalNode EOF() { return getToken(FlinkSQLParser.EOF, 0); }
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(389);
			sqlStatements();
			setState(390);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SqlStatementsContext extends ParserRuleContext {
		public List<CommentContext> comment() {
			return getRuleContexts(CommentContext.class);
		}
		public CommentContext comment(int i) {
			return getRuleContext(CommentContext.class,i);
		}
		public List<SqlStatementContext> sqlStatement() {
			return getRuleContexts(SqlStatementContext.class);
		}
		public SqlStatementContext sqlStatement(int i) {
			return getRuleContext(SqlStatementContext.class,i);
		}
		public List<EmptyStatementContext> emptyStatement() {
			return getRuleContexts(EmptyStatementContext.class);
		}
		public EmptyStatementContext emptyStatement(int i) {
			return getRuleContext(EmptyStatementContext.class,i);
		}
		public SqlStatementsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sqlStatements; }
	}

	public final SqlStatementsContext sqlStatements() throws RecognitionException {
		SqlStatementsContext _localctx = new SqlStatementsContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_sqlStatements);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(397);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << COMMENT_INPUT) | (1L << LINE_COMMENT) | (1L << KW_ADD) | (1L << KW_DESC))) != 0) || _la==KW_LOAD || _la==KW_REMOVE || ((((_la - 162)) & ~0x3f) == 0 && ((1L << (_la - 162)) & ((1L << (KW_UNLOAD - 162)) | (1L << (KW_USE - 162)) | (1L << (KW_ALTER - 162)) | (1L << (KW_BEGIN - 162)) | (1L << (KW_CREATE - 162)))) != 0) || ((((_la - 237)) & ~0x3f) == 0 && ((1L << (_la - 237)) & ((1L << (KW_DESCRIBE - 237)) | (1L << (KW_DROP - 237)) | (1L << (KW_EXECUTE - 237)) | (1L << (KW_EXPLAIN - 237)) | (1L << (KW_INSERT - 237)))) != 0) || ((((_la - 324)) & ~0x3f) == 0 && ((1L << (_la - 324)) & ((1L << (KW_RESET - 324)) | (1L << (KW_SELECT - 324)) | (1L << (KW_SET - 324)) | (1L << (KW_SHOW - 324)) | (1L << (KW_VALUES - 324)) | (1L << (KW_WITH - 324)))) != 0) || _la==LR_BRACKET || _la==SEMICOLON) {
				{
				setState(395);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case COMMENT_INPUT:
				case LINE_COMMENT:
					{
					setState(392);
					comment();
					}
					break;
				case KW_ADD:
				case KW_DESC:
				case KW_LOAD:
				case KW_REMOVE:
				case KW_UNLOAD:
				case KW_USE:
				case KW_ALTER:
				case KW_BEGIN:
				case KW_CREATE:
				case KW_DESCRIBE:
				case KW_DROP:
				case KW_EXECUTE:
				case KW_EXPLAIN:
				case KW_INSERT:
				case KW_RESET:
				case KW_SELECT:
				case KW_SET:
				case KW_SHOW:
				case KW_VALUES:
				case KW_WITH:
				case LR_BRACKET:
					{
					setState(393);
					sqlStatement();
					}
					break;
				case SEMICOLON:
					{
					setState(394);
					emptyStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(399);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CommentContext extends ParserRuleContext {
		public TerminalNode LINE_COMMENT() { return getToken(FlinkSQLParser.LINE_COMMENT, 0); }
		public TerminalNode COMMENT_INPUT() { return getToken(FlinkSQLParser.COMMENT_INPUT, 0); }
		public CommentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comment; }
	}

	public final CommentContext comment() throws RecognitionException {
		CommentContext _localctx = new CommentContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_comment);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(400);
			_la = _input.LA(1);
			if ( !(_la==COMMENT_INPUT || _la==LINE_COMMENT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SqlStatementContext extends ParserRuleContext {
		public DdlStatementContext ddlStatement() {
			return getRuleContext(DdlStatementContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(FlinkSQLParser.SEMICOLON, 0); }
		public DmlStatementContext dmlStatement() {
			return getRuleContext(DmlStatementContext.class,0);
		}
		public DescribeStatementContext describeStatement() {
			return getRuleContext(DescribeStatementContext.class,0);
		}
		public ExplainStatementContext explainStatement() {
			return getRuleContext(ExplainStatementContext.class,0);
		}
		public UseStatementContext useStatement() {
			return getRuleContext(UseStatementContext.class,0);
		}
		public ShowStatememtContext showStatememt() {
			return getRuleContext(ShowStatememtContext.class,0);
		}
		public LoadStatementContext loadStatement() {
			return getRuleContext(LoadStatementContext.class,0);
		}
		public UnloadStatememtContext unloadStatememt() {
			return getRuleContext(UnloadStatememtContext.class,0);
		}
		public SetStatememtContext setStatememt() {
			return getRuleContext(SetStatememtContext.class,0);
		}
		public ResetStatememtContext resetStatememt() {
			return getRuleContext(ResetStatememtContext.class,0);
		}
		public JarStatememtContext jarStatememt() {
			return getRuleContext(JarStatememtContext.class,0);
		}
		public SqlStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sqlStatement; }
	}

	public final SqlStatementContext sqlStatement() throws RecognitionException {
		SqlStatementContext _localctx = new SqlStatementContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_sqlStatement);
		try {
			setState(435);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_ALTER:
			case KW_CREATE:
			case KW_DROP:
				enterOuterAlt(_localctx, 1);
				{
				setState(402);
				ddlStatement();
				setState(403);
				match(SEMICOLON);
				}
				break;
			case KW_BEGIN:
			case KW_EXECUTE:
			case KW_INSERT:
			case KW_SELECT:
			case KW_VALUES:
			case KW_WITH:
			case LR_BRACKET:
				enterOuterAlt(_localctx, 2);
				{
				setState(405);
				dmlStatement();
				setState(406);
				match(SEMICOLON);
				}
				break;
			case KW_DESC:
			case KW_DESCRIBE:
				enterOuterAlt(_localctx, 3);
				{
				setState(408);
				describeStatement();
				setState(409);
				match(SEMICOLON);
				}
				break;
			case KW_EXPLAIN:
				enterOuterAlt(_localctx, 4);
				{
				setState(411);
				explainStatement();
				setState(412);
				match(SEMICOLON);
				}
				break;
			case KW_USE:
				enterOuterAlt(_localctx, 5);
				{
				setState(414);
				useStatement();
				setState(415);
				match(SEMICOLON);
				}
				break;
			case KW_SHOW:
				enterOuterAlt(_localctx, 6);
				{
				setState(417);
				showStatememt();
				setState(418);
				match(SEMICOLON);
				}
				break;
			case KW_LOAD:
				enterOuterAlt(_localctx, 7);
				{
				setState(420);
				loadStatement();
				setState(421);
				match(SEMICOLON);
				}
				break;
			case KW_UNLOAD:
				enterOuterAlt(_localctx, 8);
				{
				setState(423);
				unloadStatememt();
				setState(424);
				match(SEMICOLON);
				}
				break;
			case KW_SET:
				enterOuterAlt(_localctx, 9);
				{
				setState(426);
				setStatememt();
				setState(427);
				match(SEMICOLON);
				}
				break;
			case KW_RESET:
				enterOuterAlt(_localctx, 10);
				{
				setState(429);
				resetStatememt();
				setState(430);
				match(SEMICOLON);
				}
				break;
			case KW_ADD:
			case KW_REMOVE:
				enterOuterAlt(_localctx, 11);
				{
				setState(432);
				jarStatememt();
				setState(433);
				match(SEMICOLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EmptyStatementContext extends ParserRuleContext {
		public TerminalNode SEMICOLON() { return getToken(FlinkSQLParser.SEMICOLON, 0); }
		public EmptyStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_emptyStatement; }
	}

	public final EmptyStatementContext emptyStatement() throws RecognitionException {
		EmptyStatementContext _localctx = new EmptyStatementContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_emptyStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(437);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DdlStatementContext extends ParserRuleContext {
		public CreateTableContext createTable() {
			return getRuleContext(CreateTableContext.class,0);
		}
		public CreateDatabaseContext createDatabase() {
			return getRuleContext(CreateDatabaseContext.class,0);
		}
		public CreateViewContext createView() {
			return getRuleContext(CreateViewContext.class,0);
		}
		public CreateFunctionContext createFunction() {
			return getRuleContext(CreateFunctionContext.class,0);
		}
		public CreateCatalogContext createCatalog() {
			return getRuleContext(CreateCatalogContext.class,0);
		}
		public AlterTableContext alterTable() {
			return getRuleContext(AlterTableContext.class,0);
		}
		public AlertViewContext alertView() {
			return getRuleContext(AlertViewContext.class,0);
		}
		public AlterDatabaseContext alterDatabase() {
			return getRuleContext(AlterDatabaseContext.class,0);
		}
		public AlterFunctionContext alterFunction() {
			return getRuleContext(AlterFunctionContext.class,0);
		}
		public DropCatalogContext dropCatalog() {
			return getRuleContext(DropCatalogContext.class,0);
		}
		public DropTableContext dropTable() {
			return getRuleContext(DropTableContext.class,0);
		}
		public DropDatabaseContext dropDatabase() {
			return getRuleContext(DropDatabaseContext.class,0);
		}
		public DropViewContext dropView() {
			return getRuleContext(DropViewContext.class,0);
		}
		public DropFunctionContext dropFunction() {
			return getRuleContext(DropFunctionContext.class,0);
		}
		public DdlStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ddlStatement; }
	}

	public final DdlStatementContext ddlStatement() throws RecognitionException {
		DdlStatementContext _localctx = new DdlStatementContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_ddlStatement);
		try {
			setState(453);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(439);
				createTable();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(440);
				createDatabase();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(441);
				createView();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(442);
				createFunction();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(443);
				createCatalog();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(444);
				alterTable();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(445);
				alertView();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(446);
				alterDatabase();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(447);
				alterFunction();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(448);
				dropCatalog();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(449);
				dropTable();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(450);
				dropDatabase();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(451);
				dropView();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(452);
				dropFunction();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DmlStatementContext extends ParserRuleContext {
		public QueryStatementContext queryStatement() {
			return getRuleContext(QueryStatementContext.class,0);
		}
		public InsertStatementContext insertStatement() {
			return getRuleContext(InsertStatementContext.class,0);
		}
		public DmlStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dmlStatement; }
	}

	public final DmlStatementContext dmlStatement() throws RecognitionException {
		DmlStatementContext _localctx = new DmlStatementContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_dmlStatement);
		try {
			setState(457);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_SELECT:
			case KW_VALUES:
			case KW_WITH:
			case LR_BRACKET:
				enterOuterAlt(_localctx, 1);
				{
				setState(455);
				queryStatement(0);
				}
				break;
			case KW_BEGIN:
			case KW_EXECUTE:
			case KW_INSERT:
				enterOuterAlt(_localctx, 2);
				{
				setState(456);
				insertStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DescribeStatementContext extends ParserRuleContext {
		public TablePathContext tablePath() {
			return getRuleContext(TablePathContext.class,0);
		}
		public TerminalNode KW_DESCRIBE() { return getToken(FlinkSQLParser.KW_DESCRIBE, 0); }
		public TerminalNode KW_DESC() { return getToken(FlinkSQLParser.KW_DESC, 0); }
		public DescribeStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_describeStatement; }
	}

	public final DescribeStatementContext describeStatement() throws RecognitionException {
		DescribeStatementContext _localctx = new DescribeStatementContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_describeStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(459);
			_la = _input.LA(1);
			if ( !(_la==KW_DESC || _la==KW_DESCRIBE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(460);
			tablePath();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExplainStatementContext extends ParserRuleContext {
		public TerminalNode KW_EXPLAIN() { return getToken(FlinkSQLParser.KW_EXPLAIN, 0); }
		public DmlStatementContext dmlStatement() {
			return getRuleContext(DmlStatementContext.class,0);
		}
		public InsertSimpleStatementContext insertSimpleStatement() {
			return getRuleContext(InsertSimpleStatementContext.class,0);
		}
		public InsertMulStatementContext insertMulStatement() {
			return getRuleContext(InsertMulStatementContext.class,0);
		}
		public ExplainDetailsContext explainDetails() {
			return getRuleContext(ExplainDetailsContext.class,0);
		}
		public TerminalNode KW_PLAN() { return getToken(FlinkSQLParser.KW_PLAN, 0); }
		public TerminalNode KW_FOR() { return getToken(FlinkSQLParser.KW_FOR, 0); }
		public ExplainStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_explainStatement; }
	}

	public final ExplainStatementContext explainStatement() throws RecognitionException {
		ExplainStatementContext _localctx = new ExplainStatementContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_explainStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(462);
			match(KW_EXPLAIN);
			setState(466);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_CHANGELOG_MODE:
			case KW_ESTIMATED_COST:
			case KW_JSON_EXECUTION_PLAN:
				{
				setState(463);
				explainDetails();
				}
				break;
			case KW_PLAN:
				{
				setState(464);
				match(KW_PLAN);
				setState(465);
				match(KW_FOR);
				}
				break;
			case KW_STATEMENT:
			case KW_BEGIN:
			case KW_EXECUTE:
			case KW_INSERT:
			case KW_SELECT:
			case KW_VALUES:
			case KW_WITH:
			case LR_BRACKET:
				break;
			default:
				break;
			}
			setState(471);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				{
				setState(468);
				dmlStatement();
				}
				break;
			case 2:
				{
				setState(469);
				insertSimpleStatement();
				}
				break;
			case 3:
				{
				setState(470);
				insertMulStatement();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExplainDetailsContext extends ParserRuleContext {
		public List<ExplainDetailContext> explainDetail() {
			return getRuleContexts(ExplainDetailContext.class);
		}
		public ExplainDetailContext explainDetail(int i) {
			return getRuleContext(ExplainDetailContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public ExplainDetailsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_explainDetails; }
	}

	public final ExplainDetailsContext explainDetails() throws RecognitionException {
		ExplainDetailsContext _localctx = new ExplainDetailsContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_explainDetails);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(473);
			explainDetail();
			setState(478);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(474);
				match(COMMA);
				setState(475);
				explainDetail();
				}
				}
				setState(480);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExplainDetailContext extends ParserRuleContext {
		public TerminalNode KW_CHANGELOG_MODE() { return getToken(FlinkSQLParser.KW_CHANGELOG_MODE, 0); }
		public TerminalNode KW_JSON_EXECUTION_PLAN() { return getToken(FlinkSQLParser.KW_JSON_EXECUTION_PLAN, 0); }
		public TerminalNode KW_ESTIMATED_COST() { return getToken(FlinkSQLParser.KW_ESTIMATED_COST, 0); }
		public ExplainDetailContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_explainDetail; }
	}

	public final ExplainDetailContext explainDetail() throws RecognitionException {
		ExplainDetailContext _localctx = new ExplainDetailContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_explainDetail);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(481);
			_la = _input.LA(1);
			if ( !(((((_la - 17)) & ~0x3f) == 0 && ((1L << (_la - 17)) & ((1L << (KW_CHANGELOG_MODE - 17)) | (1L << (KW_ESTIMATED_COST - 17)) | (1L << (KW_JSON_EXECUTION_PLAN - 17)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UseStatementContext extends ParserRuleContext {
		public TerminalNode KW_USE() { return getToken(FlinkSQLParser.KW_USE, 0); }
		public TerminalNode KW_CATALOG() { return getToken(FlinkSQLParser.KW_CATALOG, 0); }
		public CatalogPathContext catalogPath() {
			return getRuleContext(CatalogPathContext.class,0);
		}
		public DatabasePathContext databasePath() {
			return getRuleContext(DatabasePathContext.class,0);
		}
		public UseModuleStatementContext useModuleStatement() {
			return getRuleContext(UseModuleStatementContext.class,0);
		}
		public UseStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_useStatement; }
	}

	public final UseStatementContext useStatement() throws RecognitionException {
		UseStatementContext _localctx = new UseStatementContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_useStatement);
		try {
			setState(489);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(483);
				match(KW_USE);
				setState(484);
				match(KW_CATALOG);
				setState(485);
				catalogPath();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(486);
				match(KW_USE);
				setState(487);
				databasePath();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(488);
				useModuleStatement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UseModuleStatementContext extends ParserRuleContext {
		public TerminalNode KW_USE() { return getToken(FlinkSQLParser.KW_USE, 0); }
		public TerminalNode KW_MODULES() { return getToken(FlinkSQLParser.KW_MODULES, 0); }
		public List<UidContext> uid() {
			return getRuleContexts(UidContext.class);
		}
		public UidContext uid(int i) {
			return getRuleContext(UidContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public UseModuleStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_useModuleStatement; }
	}

	public final UseModuleStatementContext useModuleStatement() throws RecognitionException {
		UseModuleStatementContext _localctx = new UseModuleStatementContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_useModuleStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(491);
			match(KW_USE);
			setState(492);
			match(KW_MODULES);
			setState(493);
			uid();
			setState(498);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(494);
				match(COMMA);
				setState(495);
				uid();
				}
				}
				setState(500);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ShowStatememtContext extends ParserRuleContext {
		public TerminalNode KW_SHOW() { return getToken(FlinkSQLParser.KW_SHOW, 0); }
		public TerminalNode KW_CATALOGS() { return getToken(FlinkSQLParser.KW_CATALOGS, 0); }
		public TerminalNode KW_DATABASES() { return getToken(FlinkSQLParser.KW_DATABASES, 0); }
		public TerminalNode KW_VIEWS() { return getToken(FlinkSQLParser.KW_VIEWS, 0); }
		public TerminalNode KW_JARS() { return getToken(FlinkSQLParser.KW_JARS, 0); }
		public TerminalNode KW_CURRENT() { return getToken(FlinkSQLParser.KW_CURRENT, 0); }
		public TerminalNode KW_CATALOG() { return getToken(FlinkSQLParser.KW_CATALOG, 0); }
		public TerminalNode KW_DATABASE() { return getToken(FlinkSQLParser.KW_DATABASE, 0); }
		public TerminalNode KW_TABLES() { return getToken(FlinkSQLParser.KW_TABLES, 0); }
		public TablePathContext tablePath() {
			return getRuleContext(TablePathContext.class,0);
		}
		public LikePredicateContext likePredicate() {
			return getRuleContext(LikePredicateContext.class,0);
		}
		public TerminalNode KW_FROM() { return getToken(FlinkSQLParser.KW_FROM, 0); }
		public TerminalNode KW_IN() { return getToken(FlinkSQLParser.KW_IN, 0); }
		public TerminalNode KW_COLUMNS() { return getToken(FlinkSQLParser.KW_COLUMNS, 0); }
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public TerminalNode KW_CREATE() { return getToken(FlinkSQLParser.KW_CREATE, 0); }
		public TerminalNode KW_TABLE() { return getToken(FlinkSQLParser.KW_TABLE, 0); }
		public TerminalNode KW_VIEW() { return getToken(FlinkSQLParser.KW_VIEW, 0); }
		public TerminalNode KW_FUNCTIONS() { return getToken(FlinkSQLParser.KW_FUNCTIONS, 0); }
		public TerminalNode KW_USER() { return getToken(FlinkSQLParser.KW_USER, 0); }
		public TerminalNode KW_MODULES() { return getToken(FlinkSQLParser.KW_MODULES, 0); }
		public TerminalNode KW_FULL() { return getToken(FlinkSQLParser.KW_FULL, 0); }
		public ShowStatememtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_showStatememt; }
	}

	public final ShowStatememtContext showStatememt() throws RecognitionException {
		ShowStatememtContext _localctx = new ShowStatememtContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_showStatememt);
		int _la;
		try {
			setState(536);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(501);
				match(KW_SHOW);
				setState(502);
				_la = _input.LA(1);
				if ( !(((((_la - 14)) & ~0x3f) == 0 && ((1L << (_la - 14)) & ((1L << (KW_CATALOGS - 14)) | (1L << (KW_DATABASES - 14)) | (1L << (KW_JARS - 14)))) != 0) || _la==KW_VIEWS) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(503);
				match(KW_SHOW);
				setState(504);
				match(KW_CURRENT);
				setState(505);
				_la = _input.LA(1);
				if ( !(_la==KW_CATALOG || _la==KW_DATABASE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(506);
				match(KW_SHOW);
				setState(507);
				match(KW_TABLES);
				setState(510);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_FROM || _la==KW_IN) {
					{
					setState(508);
					_la = _input.LA(1);
					if ( !(_la==KW_FROM || _la==KW_IN) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(509);
					tablePath();
					}
				}

				setState(513);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_LIKE || _la==KW_NOT) {
					{
					setState(512);
					likePredicate();
					}
				}

				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(515);
				match(KW_SHOW);
				setState(516);
				match(KW_COLUMNS);
				setState(517);
				_la = _input.LA(1);
				if ( !(_la==KW_FROM || _la==KW_IN) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(518);
				uid();
				setState(520);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_LIKE || _la==KW_NOT) {
					{
					setState(519);
					likePredicate();
					}
				}

				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(522);
				match(KW_SHOW);
				setState(523);
				match(KW_CREATE);
				setState(524);
				_la = _input.LA(1);
				if ( !(_la==KW_VIEW || _la==KW_TABLE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(525);
				uid();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(526);
				match(KW_SHOW);
				setState(528);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_USER) {
					{
					setState(527);
					match(KW_USER);
					}
				}

				setState(530);
				match(KW_FUNCTIONS);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(531);
				match(KW_SHOW);
				setState(533);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_FULL) {
					{
					setState(532);
					match(KW_FULL);
					}
				}

				setState(535);
				match(KW_MODULES);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LoadStatementContext extends ParserRuleContext {
		public TerminalNode KW_LOAD() { return getToken(FlinkSQLParser.KW_LOAD, 0); }
		public TerminalNode KW_MODULE() { return getToken(FlinkSQLParser.KW_MODULE, 0); }
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public TerminalNode KW_WITH() { return getToken(FlinkSQLParser.KW_WITH, 0); }
		public TablePropertyListContext tablePropertyList() {
			return getRuleContext(TablePropertyListContext.class,0);
		}
		public LoadStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_loadStatement; }
	}

	public final LoadStatementContext loadStatement() throws RecognitionException {
		LoadStatementContext _localctx = new LoadStatementContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_loadStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(538);
			match(KW_LOAD);
			setState(539);
			match(KW_MODULE);
			setState(540);
			uid();
			setState(543);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_WITH) {
				{
				setState(541);
				match(KW_WITH);
				setState(542);
				tablePropertyList();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnloadStatememtContext extends ParserRuleContext {
		public TerminalNode KW_UNLOAD() { return getToken(FlinkSQLParser.KW_UNLOAD, 0); }
		public TerminalNode KW_MODULE() { return getToken(FlinkSQLParser.KW_MODULE, 0); }
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public UnloadStatememtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unloadStatememt; }
	}

	public final UnloadStatememtContext unloadStatememt() throws RecognitionException {
		UnloadStatememtContext _localctx = new UnloadStatememtContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_unloadStatememt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(545);
			match(KW_UNLOAD);
			setState(546);
			match(KW_MODULE);
			setState(547);
			uid();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SetStatememtContext extends ParserRuleContext {
		public TerminalNode KW_SET() { return getToken(FlinkSQLParser.KW_SET, 0); }
		public TablePropertyContext tableProperty() {
			return getRuleContext(TablePropertyContext.class,0);
		}
		public SetStatememtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_setStatememt; }
	}

	public final SetStatememtContext setStatememt() throws RecognitionException {
		SetStatememtContext _localctx = new SetStatememtContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_setStatememt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(549);
			match(KW_SET);
			setState(551);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << KW_ADD) | (1L << KW_ADMIN) | (1L << KW_AFTER) | (1L << KW_ANALYZE) | (1L << KW_ASC) | (1L << KW_BEFORE) | (1L << KW_BYTES) | (1L << KW_CASCADE) | (1L << KW_CATALOG) | (1L << KW_CATALOGS) | (1L << KW_CENTURY) | (1L << KW_CHAIN) | (1L << KW_CHANGELOG_MODE) | (1L << KW_CHARACTERS) | (1L << KW_COMMENT) | (1L << KW_COMPACT) | (1L << KW_COLUMNS) | (1L << KW_CONSTRAINTS) | (1L << KW_CONSTRUCTOR) | (1L << KW_CUMULATE) | (1L << KW_DATA) | (1L << KW_DATABASE) | (1L << KW_DATABASES) | (1L << KW_DAYS) | (1L << KW_DECADE) | (1L << KW_DEFINED) | (1L << KW_DESC) | (1L << KW_DESCRIPTOR) | (1L << KW_DIV) | (1L << KW_ENCODING) | (1L << KW_ENFORCED) | (1L << KW_ENGINE) | (1L << KW_ERROR) | (1L << KW_ESTIMATED_COST) | (1L << KW_EXCEPTION) | (1L << KW_EXCLUDE) | (1L << KW_EXCLUDING) | (1L << KW_EXTENDED) | (1L << KW_FILE) | (1L << KW_FINAL) | (1L << KW_FIRST) | (1L << KW_FOLLOWING) | (1L << KW_FORMAT) | (1L << KW_FORTRAN) | (1L << KW_FOUND) | (1L << KW_FRAC_SECOND) | (1L << KW_FUNCTIONS) | (1L << KW_GENERAL) | (1L << KW_GENERATED) | (1L << KW_GO) | (1L << KW_GOTO) | (1L << KW_GRANTED) | (1L << KW_HOP) | (1L << KW_HOURS) | (1L << KW_IF) | (1L << KW_IGNORE) | (1L << KW_INCREMENT))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (KW_INPUT - 64)) | (1L << (KW_INVOKER - 64)) | (1L << (KW_JAR - 64)) | (1L << (KW_JARS - 64)) | (1L << (KW_JAVA - 64)) | (1L << (KW_JSON - 64)) | (1L << (KW_JSON_EXECUTION_PLAN - 64)) | (1L << (KW_KEY - 64)) | (1L << (KW_KEY_MEMBER - 64)) | (1L << (KW_KEY_TYPE - 64)) | (1L << (KW_LABEL - 64)) | (1L << (KW_LAST - 64)) | (1L << (KW_LENGTH - 64)) | (1L << (KW_LEVEL - 64)) | (1L << (KW_LOAD - 64)) | (1L << (KW_MAP - 64)) | (1L << (KW_MICROSECOND - 64)) | (1L << (KW_MILLENNIUM - 64)) | (1L << (KW_MILLISECOND - 64)) | (1L << (KW_MINUTES - 64)) | (1L << (KW_MINVALUE - 64)) | (1L << (KW_MODIFY - 64)) | (1L << (KW_MODULES - 64)) | (1L << (KW_MONTHS - 64)) | (1L << (KW_NANOSECOND - 64)) | (1L << (KW_NULLS - 64)) | (1L << (KW_NUMBER - 64)) | (1L << (KW_OPTION - 64)) | (1L << (KW_OPTIONS - 64)) | (1L << (KW_ORDERING - 64)) | (1L << (KW_OUTPUT - 64)) | (1L << (KW_OVERWRITE - 64)) | (1L << (KW_OVERWRITING - 64)) | (1L << (KW_PARTITIONED - 64)) | (1L << (KW_PARTITIONS - 64)) | (1L << (KW_PASSING - 64)) | (1L << (KW_PAST - 64)) | (1L << (KW_PATH - 64)) | (1L << (KW_PLACING - 64)) | (1L << (KW_PLAN - 64)) | (1L << (KW_PRECEDING - 64)) | (1L << (KW_PRESERVE - 64)) | (1L << (KW_PRIOR - 64)) | (1L << (KW_PRIVILEGES - 64)) | (1L << (KW_PUBLIC - 64)) | (1L << (KW_PYTHON - 64)) | (1L << (KW_PYTHON_FILES - 64)) | (1L << (KW_PYTHON_REQUIREMENTS - 64)) | (1L << (KW_PYTHON_DEPENDENCIES - 64)) | (1L << (KW_PYTHON_JAR - 64)) | (1L << (KW_PYTHON_ARCHIVES - 64)) | (1L << (KW_PYTHON_PARAMETER - 64)) | (1L << (KW_QUARTER - 64)) | (1L << (KW_RAW - 64)) | (1L << (KW_READ - 64)) | (1L << (KW_RELATIVE - 64)) | (1L << (KW_REMOVE - 64)) | (1L << (KW_RENAME - 64)) | (1L << (KW_REPLACE - 64)) | (1L << (KW_RESPECT - 64)) | (1L << (KW_RESTART - 64)) | (1L << (KW_RESTRICT - 64)) | (1L << (KW_ROLE - 64)) | (1L << (KW_ROW_COUNT - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (KW_SCALA - 128)) | (1L << (KW_SCALAR - 128)) | (1L << (KW_SCALE - 128)) | (1L << (KW_SCHEMA - 128)) | (1L << (KW_SECONDS - 128)) | (1L << (KW_SECTION - 128)) | (1L << (KW_SECURITY - 128)) | (1L << (KW_SELF - 128)) | (1L << (KW_SERVER - 128)) | (1L << (KW_SERVER_NAME - 128)) | (1L << (KW_SESSION - 128)) | (1L << (KW_SETS - 128)) | (1L << (KW_SIMPLE - 128)) | (1L << (KW_SIZE - 128)) | (1L << (KW_SLIDE - 128)) | (1L << (KW_SOURCE - 128)) | (1L << (KW_SPACE - 128)) | (1L << (KW_STATE - 128)) | (1L << (KW_STATEMENT - 128)) | (1L << (KW_STEP - 128)) | (1L << (KW_STRING - 128)) | (1L << (KW_STRUCTURE - 128)) | (1L << (KW_STYLE - 128)) | (1L << (KW_TABLES - 128)) | (1L << (KW_TEMPORARY - 128)) | (1L << (KW_TIMECOL - 128)) | (1L << (KW_FLOOR - 128)) | (1L << (KW_TIMESTAMP_LTZ - 128)) | (1L << (KW_TIMESTAMPADD - 128)) | (1L << (KW_TIMESTAMPDIFF - 128)) | (1L << (KW_TRANSFORM - 128)) | (1L << (KW_TUMBLE - 128)) | (1L << (KW_TYPE - 128)) | (1L << (KW_UNDER - 128)) | (1L << (KW_UNLOAD - 128)) | (1L << (KW_USAGE - 128)) | (1L << (KW_USE - 128)) | (1L << (KW_UTF16 - 128)) | (1L << (KW_UTF32 - 128)) | (1L << (KW_UTF8 - 128)) | (1L << (KW_VERSION - 128)) | (1L << (KW_VIEW - 128)) | (1L << (KW_VIEWS - 128)) | (1L << (KW_VIRTUAL - 128)) | (1L << (KW_WATERMARK - 128)) | (1L << (KW_WATERMARKS - 128)) | (1L << (KW_WEEK - 128)) | (1L << (KW_WORK - 128)) | (1L << (KW_WRAPPER - 128)) | (1L << (KW_YEARS - 128)) | (1L << (KW_ZONE - 128)))) != 0) || ((((_la - 411)) & ~0x3f) == 0 && ((1L << (_la - 411)) & ((1L << (STRING_LITERAL - 411)) | (1L << (DIG_LITERAL - 411)) | (1L << (ID_LITERAL - 411)))) != 0)) {
				{
				setState(550);
				tableProperty();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ResetStatememtContext extends ParserRuleContext {
		public TerminalNode KW_RESET() { return getToken(FlinkSQLParser.KW_RESET, 0); }
		public TablePropertyKeyContext tablePropertyKey() {
			return getRuleContext(TablePropertyKeyContext.class,0);
		}
		public ResetStatememtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_resetStatememt; }
	}

	public final ResetStatememtContext resetStatememt() throws RecognitionException {
		ResetStatememtContext _localctx = new ResetStatememtContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_resetStatememt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(553);
			match(KW_RESET);
			setState(555);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << KW_ADD) | (1L << KW_ADMIN) | (1L << KW_AFTER) | (1L << KW_ANALYZE) | (1L << KW_ASC) | (1L << KW_BEFORE) | (1L << KW_BYTES) | (1L << KW_CASCADE) | (1L << KW_CATALOG) | (1L << KW_CATALOGS) | (1L << KW_CENTURY) | (1L << KW_CHAIN) | (1L << KW_CHANGELOG_MODE) | (1L << KW_CHARACTERS) | (1L << KW_COMMENT) | (1L << KW_COMPACT) | (1L << KW_COLUMNS) | (1L << KW_CONSTRAINTS) | (1L << KW_CONSTRUCTOR) | (1L << KW_CUMULATE) | (1L << KW_DATA) | (1L << KW_DATABASE) | (1L << KW_DATABASES) | (1L << KW_DAYS) | (1L << KW_DECADE) | (1L << KW_DEFINED) | (1L << KW_DESC) | (1L << KW_DESCRIPTOR) | (1L << KW_DIV) | (1L << KW_ENCODING) | (1L << KW_ENFORCED) | (1L << KW_ENGINE) | (1L << KW_ERROR) | (1L << KW_ESTIMATED_COST) | (1L << KW_EXCEPTION) | (1L << KW_EXCLUDE) | (1L << KW_EXCLUDING) | (1L << KW_EXTENDED) | (1L << KW_FILE) | (1L << KW_FINAL) | (1L << KW_FIRST) | (1L << KW_FOLLOWING) | (1L << KW_FORMAT) | (1L << KW_FORTRAN) | (1L << KW_FOUND) | (1L << KW_FRAC_SECOND) | (1L << KW_FUNCTIONS) | (1L << KW_GENERAL) | (1L << KW_GENERATED) | (1L << KW_GO) | (1L << KW_GOTO) | (1L << KW_GRANTED) | (1L << KW_HOP) | (1L << KW_HOURS) | (1L << KW_IF) | (1L << KW_IGNORE) | (1L << KW_INCREMENT))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (KW_INPUT - 64)) | (1L << (KW_INVOKER - 64)) | (1L << (KW_JAR - 64)) | (1L << (KW_JARS - 64)) | (1L << (KW_JAVA - 64)) | (1L << (KW_JSON - 64)) | (1L << (KW_JSON_EXECUTION_PLAN - 64)) | (1L << (KW_KEY - 64)) | (1L << (KW_KEY_MEMBER - 64)) | (1L << (KW_KEY_TYPE - 64)) | (1L << (KW_LABEL - 64)) | (1L << (KW_LAST - 64)) | (1L << (KW_LENGTH - 64)) | (1L << (KW_LEVEL - 64)) | (1L << (KW_LOAD - 64)) | (1L << (KW_MAP - 64)) | (1L << (KW_MICROSECOND - 64)) | (1L << (KW_MILLENNIUM - 64)) | (1L << (KW_MILLISECOND - 64)) | (1L << (KW_MINUTES - 64)) | (1L << (KW_MINVALUE - 64)) | (1L << (KW_MODIFY - 64)) | (1L << (KW_MODULES - 64)) | (1L << (KW_MONTHS - 64)) | (1L << (KW_NANOSECOND - 64)) | (1L << (KW_NULLS - 64)) | (1L << (KW_NUMBER - 64)) | (1L << (KW_OPTION - 64)) | (1L << (KW_OPTIONS - 64)) | (1L << (KW_ORDERING - 64)) | (1L << (KW_OUTPUT - 64)) | (1L << (KW_OVERWRITE - 64)) | (1L << (KW_OVERWRITING - 64)) | (1L << (KW_PARTITIONED - 64)) | (1L << (KW_PARTITIONS - 64)) | (1L << (KW_PASSING - 64)) | (1L << (KW_PAST - 64)) | (1L << (KW_PATH - 64)) | (1L << (KW_PLACING - 64)) | (1L << (KW_PLAN - 64)) | (1L << (KW_PRECEDING - 64)) | (1L << (KW_PRESERVE - 64)) | (1L << (KW_PRIOR - 64)) | (1L << (KW_PRIVILEGES - 64)) | (1L << (KW_PUBLIC - 64)) | (1L << (KW_PYTHON - 64)) | (1L << (KW_PYTHON_FILES - 64)) | (1L << (KW_PYTHON_REQUIREMENTS - 64)) | (1L << (KW_PYTHON_DEPENDENCIES - 64)) | (1L << (KW_PYTHON_JAR - 64)) | (1L << (KW_PYTHON_ARCHIVES - 64)) | (1L << (KW_PYTHON_PARAMETER - 64)) | (1L << (KW_QUARTER - 64)) | (1L << (KW_RAW - 64)) | (1L << (KW_READ - 64)) | (1L << (KW_RELATIVE - 64)) | (1L << (KW_REMOVE - 64)) | (1L << (KW_RENAME - 64)) | (1L << (KW_REPLACE - 64)) | (1L << (KW_RESPECT - 64)) | (1L << (KW_RESTART - 64)) | (1L << (KW_RESTRICT - 64)) | (1L << (KW_ROLE - 64)) | (1L << (KW_ROW_COUNT - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (KW_SCALA - 128)) | (1L << (KW_SCALAR - 128)) | (1L << (KW_SCALE - 128)) | (1L << (KW_SCHEMA - 128)) | (1L << (KW_SECONDS - 128)) | (1L << (KW_SECTION - 128)) | (1L << (KW_SECURITY - 128)) | (1L << (KW_SELF - 128)) | (1L << (KW_SERVER - 128)) | (1L << (KW_SERVER_NAME - 128)) | (1L << (KW_SESSION - 128)) | (1L << (KW_SETS - 128)) | (1L << (KW_SIMPLE - 128)) | (1L << (KW_SIZE - 128)) | (1L << (KW_SLIDE - 128)) | (1L << (KW_SOURCE - 128)) | (1L << (KW_SPACE - 128)) | (1L << (KW_STATE - 128)) | (1L << (KW_STATEMENT - 128)) | (1L << (KW_STEP - 128)) | (1L << (KW_STRING - 128)) | (1L << (KW_STRUCTURE - 128)) | (1L << (KW_STYLE - 128)) | (1L << (KW_TABLES - 128)) | (1L << (KW_TEMPORARY - 128)) | (1L << (KW_TIMECOL - 128)) | (1L << (KW_FLOOR - 128)) | (1L << (KW_TIMESTAMP_LTZ - 128)) | (1L << (KW_TIMESTAMPADD - 128)) | (1L << (KW_TIMESTAMPDIFF - 128)) | (1L << (KW_TRANSFORM - 128)) | (1L << (KW_TUMBLE - 128)) | (1L << (KW_TYPE - 128)) | (1L << (KW_UNDER - 128)) | (1L << (KW_UNLOAD - 128)) | (1L << (KW_USAGE - 128)) | (1L << (KW_USE - 128)) | (1L << (KW_UTF16 - 128)) | (1L << (KW_UTF32 - 128)) | (1L << (KW_UTF8 - 128)) | (1L << (KW_VERSION - 128)) | (1L << (KW_VIEW - 128)) | (1L << (KW_VIEWS - 128)) | (1L << (KW_VIRTUAL - 128)) | (1L << (KW_WATERMARK - 128)) | (1L << (KW_WATERMARKS - 128)) | (1L << (KW_WEEK - 128)) | (1L << (KW_WORK - 128)) | (1L << (KW_WRAPPER - 128)) | (1L << (KW_YEARS - 128)) | (1L << (KW_ZONE - 128)))) != 0) || ((((_la - 411)) & ~0x3f) == 0 && ((1L << (_la - 411)) & ((1L << (STRING_LITERAL - 411)) | (1L << (DIG_LITERAL - 411)) | (1L << (ID_LITERAL - 411)))) != 0)) {
				{
				setState(554);
				tablePropertyKey();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class JarStatememtContext extends ParserRuleContext {
		public TerminalNode KW_JAR() { return getToken(FlinkSQLParser.KW_JAR, 0); }
		public JarFileNameContext jarFileName() {
			return getRuleContext(JarFileNameContext.class,0);
		}
		public TerminalNode KW_ADD() { return getToken(FlinkSQLParser.KW_ADD, 0); }
		public TerminalNode KW_REMOVE() { return getToken(FlinkSQLParser.KW_REMOVE, 0); }
		public JarStatememtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_jarStatememt; }
	}

	public final JarStatememtContext jarStatememt() throws RecognitionException {
		JarStatememtContext _localctx = new JarStatememtContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_jarStatememt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(557);
			_la = _input.LA(1);
			if ( !(_la==KW_ADD || _la==KW_REMOVE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(558);
			match(KW_JAR);
			setState(559);
			jarFileName();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DtFilePathContext extends ParserRuleContext {
		public List<TerminalNode> SLASH_TEXT() { return getTokens(FlinkSQLParser.SLASH_TEXT); }
		public TerminalNode SLASH_TEXT(int i) {
			return getToken(FlinkSQLParser.SLASH_TEXT, i);
		}
		public DtFilePathContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dtFilePath; }
	}

	public final DtFilePathContext dtFilePath() throws RecognitionException {
		DtFilePathContext _localctx = new DtFilePathContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_dtFilePath);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(562); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(561);
				match(SLASH_TEXT);
				}
				}
				setState(564); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==SLASH_TEXT );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreateTableContext extends ParserRuleContext {
		public SimpleCreateTableContext simpleCreateTable() {
			return getRuleContext(SimpleCreateTableContext.class,0);
		}
		public CreateTableAsSelectContext createTableAsSelect() {
			return getRuleContext(CreateTableAsSelectContext.class,0);
		}
		public CreateTableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createTable; }
	}

	public final CreateTableContext createTable() throws RecognitionException {
		CreateTableContext _localctx = new CreateTableContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_createTable);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(568);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				{
				setState(566);
				simpleCreateTable();
				}
				break;
			case 2:
				{
				setState(567);
				createTableAsSelect();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SimpleCreateTableContext extends ParserRuleContext {
		public TerminalNode KW_CREATE() { return getToken(FlinkSQLParser.KW_CREATE, 0); }
		public TerminalNode KW_TABLE() { return getToken(FlinkSQLParser.KW_TABLE, 0); }
		public TablePathCreateContext tablePathCreate() {
			return getRuleContext(TablePathCreateContext.class,0);
		}
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public List<ColumnOptionDefinitionContext> columnOptionDefinition() {
			return getRuleContexts(ColumnOptionDefinitionContext.class);
		}
		public ColumnOptionDefinitionContext columnOptionDefinition(int i) {
			return getRuleContext(ColumnOptionDefinitionContext.class,i);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public WithOptionContext withOption() {
			return getRuleContext(WithOptionContext.class,0);
		}
		public TerminalNode KW_TEMPORARY() { return getToken(FlinkSQLParser.KW_TEMPORARY, 0); }
		public IfNotExistsContext ifNotExists() {
			return getRuleContext(IfNotExistsContext.class,0);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public WatermarkDefinitionContext watermarkDefinition() {
			return getRuleContext(WatermarkDefinitionContext.class,0);
		}
		public TableConstraintContext tableConstraint() {
			return getRuleContext(TableConstraintContext.class,0);
		}
		public SelfDefinitionClauseContext selfDefinitionClause() {
			return getRuleContext(SelfDefinitionClauseContext.class,0);
		}
		public CommentSpecContext commentSpec() {
			return getRuleContext(CommentSpecContext.class,0);
		}
		public PartitionDefinitionContext partitionDefinition() {
			return getRuleContext(PartitionDefinitionContext.class,0);
		}
		public LikeDefinitionContext likeDefinition() {
			return getRuleContext(LikeDefinitionContext.class,0);
		}
		public SimpleCreateTableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_simpleCreateTable; }
	}

	public final SimpleCreateTableContext simpleCreateTable() throws RecognitionException {
		SimpleCreateTableContext _localctx = new SimpleCreateTableContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_simpleCreateTable);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(570);
			match(KW_CREATE);
			setState(572);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_TEMPORARY) {
				{
				setState(571);
				match(KW_TEMPORARY);
				}
			}

			setState(574);
			match(KW_TABLE);
			setState(576);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
			case 1:
				{
				setState(575);
				ifNotExists();
				}
				break;
			}
			setState(578);
			tablePathCreate();
			setState(579);
			match(LR_BRACKET);
			setState(580);
			columnOptionDefinition();
			setState(585);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(581);
					match(COMMA);
					setState(582);
					columnOptionDefinition();
					}
					} 
				}
				setState(587);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
			}
			setState(590);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				{
				setState(588);
				match(COMMA);
				setState(589);
				watermarkDefinition();
				}
				break;
			}
			setState(594);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
			case 1:
				{
				setState(592);
				match(COMMA);
				setState(593);
				tableConstraint();
				}
				break;
			}
			setState(598);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(596);
				match(COMMA);
				setState(597);
				selfDefinitionClause();
				}
			}

			setState(600);
			match(RR_BRACKET);
			setState(602);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_COMMENT) {
				{
				setState(601);
				commentSpec();
				}
			}

			setState(605);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_PARTITIONED) {
				{
				setState(604);
				partitionDefinition();
				}
			}

			setState(607);
			withOption();
			setState(609);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_LIKE) {
				{
				setState(608);
				likeDefinition();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreateTableAsSelectContext extends ParserRuleContext {
		public TerminalNode KW_CREATE() { return getToken(FlinkSQLParser.KW_CREATE, 0); }
		public TerminalNode KW_TABLE() { return getToken(FlinkSQLParser.KW_TABLE, 0); }
		public TablePathCreateContext tablePathCreate() {
			return getRuleContext(TablePathCreateContext.class,0);
		}
		public WithOptionContext withOption() {
			return getRuleContext(WithOptionContext.class,0);
		}
		public IfNotExistsContext ifNotExists() {
			return getRuleContext(IfNotExistsContext.class,0);
		}
		public TerminalNode KW_AS() { return getToken(FlinkSQLParser.KW_AS, 0); }
		public QueryStatementContext queryStatement() {
			return getRuleContext(QueryStatementContext.class,0);
		}
		public CreateTableAsSelectContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createTableAsSelect; }
	}

	public final CreateTableAsSelectContext createTableAsSelect() throws RecognitionException {
		CreateTableAsSelectContext _localctx = new CreateTableAsSelectContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_createTableAsSelect);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(611);
			match(KW_CREATE);
			setState(612);
			match(KW_TABLE);
			setState(614);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
			case 1:
				{
				setState(613);
				ifNotExists();
				}
				break;
			}
			setState(616);
			tablePathCreate();
			setState(617);
			withOption();
			setState(620);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_AS) {
				{
				setState(618);
				match(KW_AS);
				setState(619);
				queryStatement(0);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColumnOptionDefinitionContext extends ParserRuleContext {
		public PhysicalColumnDefinitionContext physicalColumnDefinition() {
			return getRuleContext(PhysicalColumnDefinitionContext.class,0);
		}
		public MetadataColumnDefinitionContext metadataColumnDefinition() {
			return getRuleContext(MetadataColumnDefinitionContext.class,0);
		}
		public ComputedColumnDefinitionContext computedColumnDefinition() {
			return getRuleContext(ComputedColumnDefinitionContext.class,0);
		}
		public ColumnOptionDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_columnOptionDefinition; }
	}

	public final ColumnOptionDefinitionContext columnOptionDefinition() throws RecognitionException {
		ColumnOptionDefinitionContext _localctx = new ColumnOptionDefinitionContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_columnOptionDefinition);
		try {
			setState(625);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,32,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(622);
				physicalColumnDefinition();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(623);
				metadataColumnDefinition();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(624);
				computedColumnDefinition();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PhysicalColumnDefinitionContext extends ParserRuleContext {
		public ColumnNameContext columnName() {
			return getRuleContext(ColumnNameContext.class,0);
		}
		public ColumnTypeContext columnType() {
			return getRuleContext(ColumnTypeContext.class,0);
		}
		public ColumnConstraintContext columnConstraint() {
			return getRuleContext(ColumnConstraintContext.class,0);
		}
		public CommentSpecContext commentSpec() {
			return getRuleContext(CommentSpecContext.class,0);
		}
		public PhysicalColumnDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_physicalColumnDefinition; }
	}

	public final PhysicalColumnDefinitionContext physicalColumnDefinition() throws RecognitionException {
		PhysicalColumnDefinitionContext _localctx = new PhysicalColumnDefinitionContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_physicalColumnDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(627);
			columnName();
			setState(628);
			columnType();
			setState(630);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_CONSTRAINT || ((((_la - 301)) & ~0x3f) == 0 && ((1L << (_la - 301)) & ((1L << (KW_NOT - 301)) | (1L << (KW_NULL - 301)) | (1L << (KW_PRIMARY - 301)))) != 0)) {
				{
				setState(629);
				columnConstraint();
				}
			}

			setState(633);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_COMMENT) {
				{
				setState(632);
				commentSpec();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColumnNameContext extends ParserRuleContext {
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ColumnNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_columnName; }
	}

	public final ColumnNameContext columnName() throws RecognitionException {
		ColumnNameContext _localctx = new ColumnNameContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_columnName);
		try {
			setState(637);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,35,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(635);
				uid();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(636);
				expression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColumnNameListContext extends ParserRuleContext {
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public List<ColumnNameContext> columnName() {
			return getRuleContexts(ColumnNameContext.class);
		}
		public ColumnNameContext columnName(int i) {
			return getRuleContext(ColumnNameContext.class,i);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public ColumnNameListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_columnNameList; }
	}

	public final ColumnNameListContext columnNameList() throws RecognitionException {
		ColumnNameListContext _localctx = new ColumnNameListContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_columnNameList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(639);
			match(LR_BRACKET);
			setState(640);
			columnName();
			setState(645);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(641);
				match(COMMA);
				setState(642);
				columnName();
				}
				}
				setState(647);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(648);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColumnTypeContext extends ParserRuleContext {
		public Token typeName;
		public Token type;
		public TerminalNode KW_DATE() { return getToken(FlinkSQLParser.KW_DATE, 0); }
		public TerminalNode KW_BOOLEAN() { return getToken(FlinkSQLParser.KW_BOOLEAN, 0); }
		public TerminalNode KW_NULL() { return getToken(FlinkSQLParser.KW_NULL, 0); }
		public TerminalNode KW_CHAR() { return getToken(FlinkSQLParser.KW_CHAR, 0); }
		public TerminalNode KW_VARCHAR() { return getToken(FlinkSQLParser.KW_VARCHAR, 0); }
		public TerminalNode KW_STRING() { return getToken(FlinkSQLParser.KW_STRING, 0); }
		public TerminalNode KW_BINARY() { return getToken(FlinkSQLParser.KW_BINARY, 0); }
		public TerminalNode KW_VARBINARY() { return getToken(FlinkSQLParser.KW_VARBINARY, 0); }
		public TerminalNode KW_BYTES() { return getToken(FlinkSQLParser.KW_BYTES, 0); }
		public TerminalNode KW_TINYINT() { return getToken(FlinkSQLParser.KW_TINYINT, 0); }
		public TerminalNode KW_SMALLINT() { return getToken(FlinkSQLParser.KW_SMALLINT, 0); }
		public TerminalNode KW_INT() { return getToken(FlinkSQLParser.KW_INT, 0); }
		public TerminalNode KW_INTEGER() { return getToken(FlinkSQLParser.KW_INTEGER, 0); }
		public TerminalNode KW_BIGINT() { return getToken(FlinkSQLParser.KW_BIGINT, 0); }
		public TerminalNode KW_TIME() { return getToken(FlinkSQLParser.KW_TIME, 0); }
		public TerminalNode KW_TIMESTAMP_LTZ() { return getToken(FlinkSQLParser.KW_TIMESTAMP_LTZ, 0); }
		public TerminalNode KW_DATETIME() { return getToken(FlinkSQLParser.KW_DATETIME, 0); }
		public LengthOneDimensionContext lengthOneDimension() {
			return getRuleContext(LengthOneDimensionContext.class,0);
		}
		public TerminalNode KW_TIMESTAMP() { return getToken(FlinkSQLParser.KW_TIMESTAMP, 0); }
		public TerminalNode KW_ZONE() { return getToken(FlinkSQLParser.KW_ZONE, 0); }
		public TerminalNode KW_WITHOUT() { return getToken(FlinkSQLParser.KW_WITHOUT, 0); }
		public TerminalNode KW_WITH() { return getToken(FlinkSQLParser.KW_WITH, 0); }
		public TerminalNode KW_LOCAL() { return getToken(FlinkSQLParser.KW_LOCAL, 0); }
		public TerminalNode KW_TIMESTAMP_3() { return getToken(FlinkSQLParser.KW_TIMESTAMP_3, 0); }
		public TerminalNode KW_TIMESTAMP_6() { return getToken(FlinkSQLParser.KW_TIMESTAMP_6, 0); }
		public TerminalNode KW_TIMESTAMP_9() { return getToken(FlinkSQLParser.KW_TIMESTAMP_9, 0); }
		public TerminalNode KW_DECIMAL() { return getToken(FlinkSQLParser.KW_DECIMAL, 0); }
		public TerminalNode KW_DEC() { return getToken(FlinkSQLParser.KW_DEC, 0); }
		public TerminalNode KW_NUMERIC() { return getToken(FlinkSQLParser.KW_NUMERIC, 0); }
		public TerminalNode KW_FLOAT() { return getToken(FlinkSQLParser.KW_FLOAT, 0); }
		public TerminalNode KW_DOUBLE() { return getToken(FlinkSQLParser.KW_DOUBLE, 0); }
		public LengthTwoOptionalDimensionContext lengthTwoOptionalDimension() {
			return getRuleContext(LengthTwoOptionalDimensionContext.class,0);
		}
		public TerminalNode KW_ARRAY() { return getToken(FlinkSQLParser.KW_ARRAY, 0); }
		public TerminalNode KW_MULTISET() { return getToken(FlinkSQLParser.KW_MULTISET, 0); }
		public LengthOneTypeDimensionContext lengthOneTypeDimension() {
			return getRuleContext(LengthOneTypeDimensionContext.class,0);
		}
		public TerminalNode KW_MAP() { return getToken(FlinkSQLParser.KW_MAP, 0); }
		public MapTypeDimensionContext mapTypeDimension() {
			return getRuleContext(MapTypeDimensionContext.class,0);
		}
		public TerminalNode KW_ROW() { return getToken(FlinkSQLParser.KW_ROW, 0); }
		public RowTypeDimensionContext rowTypeDimension() {
			return getRuleContext(RowTypeDimensionContext.class,0);
		}
		public TerminalNode KW_RAW() { return getToken(FlinkSQLParser.KW_RAW, 0); }
		public LengthTwoStringDimensionContext lengthTwoStringDimension() {
			return getRuleContext(LengthTwoStringDimensionContext.class,0);
		}
		public ColumnTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_columnType; }
	}

	public final ColumnTypeContext columnType() throws RecognitionException {
		ColumnTypeContext _localctx = new ColumnTypeContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_columnType);
		int _la;
		try {
			setState(723);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_BOOLEAN:
			case KW_DATE:
			case KW_NULL:
				enterOuterAlt(_localctx, 1);
				{
				setState(650);
				((ColumnTypeContext)_localctx).typeName = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==KW_BOOLEAN || _la==KW_DATE || _la==KW_NULL) ) {
					((ColumnTypeContext)_localctx).typeName = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case KW_BYTES:
			case KW_STRING:
			case KW_TIMESTAMP_LTZ:
			case KW_BIGINT:
			case KW_BINARY:
			case KW_CHAR:
			case KW_DATETIME:
			case KW_INT:
			case KW_INTEGER:
			case KW_SMALLINT:
			case KW_TIME:
			case KW_TINYINT:
			case KW_VARBINARY:
			case KW_VARCHAR:
				enterOuterAlt(_localctx, 2);
				{
				setState(651);
				((ColumnTypeContext)_localctx).typeName = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==KW_BYTES || ((((_la - 148)) & ~0x3f) == 0 && ((1L << (_la - 148)) & ((1L << (KW_STRING - 148)) | (1L << (KW_TIMESTAMP_LTZ - 148)) | (1L << (KW_BIGINT - 148)) | (1L << (KW_BINARY - 148)) | (1L << (KW_CHAR - 148)))) != 0) || ((((_la - 229)) & ~0x3f) == 0 && ((1L << (_la - 229)) & ((1L << (KW_DATETIME - 229)) | (1L << (KW_INT - 229)) | (1L << (KW_INTEGER - 229)))) != 0) || ((((_la - 338)) & ~0x3f) == 0 && ((1L << (_la - 338)) & ((1L << (KW_SMALLINT - 338)) | (1L << (KW_TIME - 338)) | (1L << (KW_TINYINT - 338)) | (1L << (KW_VARBINARY - 338)) | (1L << (KW_VARCHAR - 338)))) != 0)) ) {
					((ColumnTypeContext)_localctx).typeName = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(653);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LR_BRACKET) {
					{
					setState(652);
					lengthOneDimension();
					}
				}

				}
				break;
			case KW_TIMESTAMP:
				enterOuterAlt(_localctx, 3);
				{
				setState(655);
				((ColumnTypeContext)_localctx).typeName = match(KW_TIMESTAMP);
				setState(657);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LR_BRACKET) {
					{
					setState(656);
					lengthOneDimension();
					}
				}

				setState(665);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_WITH || _la==KW_WITHOUT) {
					{
					setState(659);
					_la = _input.LA(1);
					if ( !(_la==KW_WITH || _la==KW_WITHOUT) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(661);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==KW_LOCAL) {
						{
						setState(660);
						match(KW_LOCAL);
						}
					}

					setState(663);
					match(KW_TIME);
					setState(664);
					match(KW_ZONE);
					}
				}

				}
				break;
			case KW_TIMESTAMP_3:
				enterOuterAlt(_localctx, 4);
				{
				setState(667);
				((ColumnTypeContext)_localctx).typeName = match(KW_TIMESTAMP_3);
				setState(669);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LR_BRACKET) {
					{
					setState(668);
					lengthOneDimension();
					}
				}

				setState(677);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_WITH || _la==KW_WITHOUT) {
					{
					setState(671);
					_la = _input.LA(1);
					if ( !(_la==KW_WITH || _la==KW_WITHOUT) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(673);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==KW_LOCAL) {
						{
						setState(672);
						match(KW_LOCAL);
						}
					}

					setState(675);
					match(KW_TIME);
					setState(676);
					match(KW_ZONE);
					}
				}

				}
				break;
			case KW_TIMESTAMP_6:
				enterOuterAlt(_localctx, 5);
				{
				setState(679);
				((ColumnTypeContext)_localctx).typeName = match(KW_TIMESTAMP_6);
				setState(681);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LR_BRACKET) {
					{
					setState(680);
					lengthOneDimension();
					}
				}

				setState(689);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_WITH || _la==KW_WITHOUT) {
					{
					setState(683);
					_la = _input.LA(1);
					if ( !(_la==KW_WITH || _la==KW_WITHOUT) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(685);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==KW_LOCAL) {
						{
						setState(684);
						match(KW_LOCAL);
						}
					}

					setState(687);
					match(KW_TIME);
					setState(688);
					match(KW_ZONE);
					}
				}

				}
				break;
			case KW_TIMESTAMP_9:
				enterOuterAlt(_localctx, 6);
				{
				setState(691);
				((ColumnTypeContext)_localctx).typeName = match(KW_TIMESTAMP_9);
				setState(693);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LR_BRACKET) {
					{
					setState(692);
					lengthOneDimension();
					}
				}

				setState(701);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_WITH || _la==KW_WITHOUT) {
					{
					setState(695);
					_la = _input.LA(1);
					if ( !(_la==KW_WITH || _la==KW_WITHOUT) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(697);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==KW_LOCAL) {
						{
						setState(696);
						match(KW_LOCAL);
						}
					}

					setState(699);
					match(KW_TIME);
					setState(700);
					match(KW_ZONE);
					}
				}

				}
				break;
			case KW_DEC:
			case KW_DECIMAL:
			case KW_DOUBLE:
			case KW_FLOAT:
			case KW_NUMERIC:
				enterOuterAlt(_localctx, 7);
				{
				setState(703);
				((ColumnTypeContext)_localctx).typeName = _input.LT(1);
				_la = _input.LA(1);
				if ( !(((((_la - 231)) & ~0x3f) == 0 && ((1L << (_la - 231)) & ((1L << (KW_DEC - 231)) | (1L << (KW_DECIMAL - 231)) | (1L << (KW_DOUBLE - 231)) | (1L << (KW_FLOAT - 231)))) != 0) || _la==KW_NUMERIC) ) {
					((ColumnTypeContext)_localctx).typeName = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(705);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LR_BRACKET) {
					{
					setState(704);
					lengthTwoOptionalDimension();
					}
				}

				}
				break;
			case KW_ARRAY:
			case KW_MULTISET:
				enterOuterAlt(_localctx, 8);
				{
				setState(707);
				((ColumnTypeContext)_localctx).type = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==KW_ARRAY || _la==KW_MULTISET) ) {
					((ColumnTypeContext)_localctx).type = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(709);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LESS_SYMBOL) {
					{
					setState(708);
					lengthOneTypeDimension();
					}
				}

				}
				break;
			case KW_MAP:
				enterOuterAlt(_localctx, 9);
				{
				setState(711);
				((ColumnTypeContext)_localctx).type = match(KW_MAP);
				setState(713);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LESS_SYMBOL) {
					{
					setState(712);
					mapTypeDimension();
					}
				}

				}
				break;
			case KW_ROW:
				enterOuterAlt(_localctx, 10);
				{
				setState(715);
				((ColumnTypeContext)_localctx).type = match(KW_ROW);
				setState(717);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LESS_SYMBOL) {
					{
					setState(716);
					rowTypeDimension();
					}
				}

				}
				break;
			case KW_RAW:
				enterOuterAlt(_localctx, 11);
				{
				setState(719);
				((ColumnTypeContext)_localctx).type = match(KW_RAW);
				setState(721);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LR_BRACKET) {
					{
					setState(720);
					lengthTwoStringDimension();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LengthOneDimensionContext extends ParserRuleContext {
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public DecimalLiteralContext decimalLiteral() {
			return getRuleContext(DecimalLiteralContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public LengthOneDimensionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lengthOneDimension; }
	}

	public final LengthOneDimensionContext lengthOneDimension() throws RecognitionException {
		LengthOneDimensionContext _localctx = new LengthOneDimensionContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_lengthOneDimension);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(725);
			match(LR_BRACKET);
			setState(726);
			decimalLiteral();
			setState(727);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LengthTwoOptionalDimensionContext extends ParserRuleContext {
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public List<DecimalLiteralContext> decimalLiteral() {
			return getRuleContexts(DecimalLiteralContext.class);
		}
		public DecimalLiteralContext decimalLiteral(int i) {
			return getRuleContext(DecimalLiteralContext.class,i);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public TerminalNode COMMA() { return getToken(FlinkSQLParser.COMMA, 0); }
		public LengthTwoOptionalDimensionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lengthTwoOptionalDimension; }
	}

	public final LengthTwoOptionalDimensionContext lengthTwoOptionalDimension() throws RecognitionException {
		LengthTwoOptionalDimensionContext _localctx = new LengthTwoOptionalDimensionContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_lengthTwoOptionalDimension);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(729);
			match(LR_BRACKET);
			setState(730);
			decimalLiteral();
			setState(733);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(731);
				match(COMMA);
				setState(732);
				decimalLiteral();
				}
			}

			setState(735);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LengthTwoStringDimensionContext extends ParserRuleContext {
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public List<StringLiteralContext> stringLiteral() {
			return getRuleContexts(StringLiteralContext.class);
		}
		public StringLiteralContext stringLiteral(int i) {
			return getRuleContext(StringLiteralContext.class,i);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public TerminalNode COMMA() { return getToken(FlinkSQLParser.COMMA, 0); }
		public LengthTwoStringDimensionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lengthTwoStringDimension; }
	}

	public final LengthTwoStringDimensionContext lengthTwoStringDimension() throws RecognitionException {
		LengthTwoStringDimensionContext _localctx = new LengthTwoStringDimensionContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_lengthTwoStringDimension);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(737);
			match(LR_BRACKET);
			setState(738);
			stringLiteral();
			setState(741);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(739);
				match(COMMA);
				setState(740);
				stringLiteral();
				}
			}

			setState(743);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LengthOneTypeDimensionContext extends ParserRuleContext {
		public LengthOneTypeDimensionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lengthOneTypeDimension; }
	 
		public LengthOneTypeDimensionContext() { }
		public void copyFrom(LengthOneTypeDimensionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class LengthSymbolsTypeDimensionContext extends LengthOneTypeDimensionContext {
		public TerminalNode LESS_SYMBOL() { return getToken(FlinkSQLParser.LESS_SYMBOL, 0); }
		public List<ColumnTypeContext> columnType() {
			return getRuleContexts(ColumnTypeContext.class);
		}
		public ColumnTypeContext columnType(int i) {
			return getRuleContext(ColumnTypeContext.class,i);
		}
		public TerminalNode GREATER_SYMBOL() { return getToken(FlinkSQLParser.GREATER_SYMBOL, 0); }
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public LengthSymbolsTypeDimensionContext(LengthOneTypeDimensionContext ctx) { copyFrom(ctx); }
	}

	public final LengthOneTypeDimensionContext lengthOneTypeDimension() throws RecognitionException {
		LengthOneTypeDimensionContext _localctx = new LengthOneTypeDimensionContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_lengthOneTypeDimension);
		int _la;
		try {
			_localctx = new LengthSymbolsTypeDimensionContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(745);
			match(LESS_SYMBOL);
			setState(746);
			columnType();
			setState(751);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(747);
				match(COMMA);
				setState(748);
				columnType();
				}
				}
				setState(753);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(754);
			match(GREATER_SYMBOL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MapTypeDimensionContext extends ParserRuleContext {
		public TerminalNode LESS_SYMBOL() { return getToken(FlinkSQLParser.LESS_SYMBOL, 0); }
		public List<ColumnTypeContext> columnType() {
			return getRuleContexts(ColumnTypeContext.class);
		}
		public ColumnTypeContext columnType(int i) {
			return getRuleContext(ColumnTypeContext.class,i);
		}
		public TerminalNode GREATER_SYMBOL() { return getToken(FlinkSQLParser.GREATER_SYMBOL, 0); }
		public TerminalNode COMMA() { return getToken(FlinkSQLParser.COMMA, 0); }
		public MapTypeDimensionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mapTypeDimension; }
	}

	public final MapTypeDimensionContext mapTypeDimension() throws RecognitionException {
		MapTypeDimensionContext _localctx = new MapTypeDimensionContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_mapTypeDimension);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(756);
			match(LESS_SYMBOL);
			setState(757);
			columnType();
			{
			setState(758);
			match(COMMA);
			setState(759);
			columnType();
			}
			setState(761);
			match(GREATER_SYMBOL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RowTypeDimensionContext extends ParserRuleContext {
		public RowTypeDimensionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rowTypeDimension; }
	 
		public RowTypeDimensionContext() { }
		public void copyFrom(RowTypeDimensionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class RowSymbolsTypeDimensionContext extends RowTypeDimensionContext {
		public TerminalNode LESS_SYMBOL() { return getToken(FlinkSQLParser.LESS_SYMBOL, 0); }
		public List<ColumnNameContext> columnName() {
			return getRuleContexts(ColumnNameContext.class);
		}
		public ColumnNameContext columnName(int i) {
			return getRuleContext(ColumnNameContext.class,i);
		}
		public List<ColumnTypeContext> columnType() {
			return getRuleContexts(ColumnTypeContext.class);
		}
		public ColumnTypeContext columnType(int i) {
			return getRuleContext(ColumnTypeContext.class,i);
		}
		public TerminalNode GREATER_SYMBOL() { return getToken(FlinkSQLParser.GREATER_SYMBOL, 0); }
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public RowSymbolsTypeDimensionContext(RowTypeDimensionContext ctx) { copyFrom(ctx); }
	}

	public final RowTypeDimensionContext rowTypeDimension() throws RecognitionException {
		RowTypeDimensionContext _localctx = new RowTypeDimensionContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_rowTypeDimension);
		int _la;
		try {
			_localctx = new RowSymbolsTypeDimensionContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(763);
			match(LESS_SYMBOL);
			setState(764);
			columnName();
			setState(765);
			columnType();
			setState(772);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(766);
				match(COMMA);
				setState(767);
				columnName();
				setState(768);
				columnType();
				}
				}
				setState(774);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(775);
			match(GREATER_SYMBOL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColumnConstraintContext extends ParserRuleContext {
		public TerminalNode KW_PRIMARY() { return getToken(FlinkSQLParser.KW_PRIMARY, 0); }
		public TerminalNode KW_KEY() { return getToken(FlinkSQLParser.KW_KEY, 0); }
		public TerminalNode KW_CONSTRAINT() { return getToken(FlinkSQLParser.KW_CONSTRAINT, 0); }
		public ConstraintNameContext constraintName() {
			return getRuleContext(ConstraintNameContext.class,0);
		}
		public TerminalNode KW_NOT() { return getToken(FlinkSQLParser.KW_NOT, 0); }
		public TerminalNode KW_ENFORCED() { return getToken(FlinkSQLParser.KW_ENFORCED, 0); }
		public TerminalNode KW_NULL() { return getToken(FlinkSQLParser.KW_NULL, 0); }
		public ColumnConstraintContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_columnConstraint; }
	}

	public final ColumnConstraintContext columnConstraint() throws RecognitionException {
		ColumnConstraintContext _localctx = new ColumnConstraintContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_columnConstraint);
		int _la;
		try {
			setState(791);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_CONSTRAINT:
			case KW_PRIMARY:
				enterOuterAlt(_localctx, 1);
				{
				setState(779);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_CONSTRAINT) {
					{
					setState(777);
					match(KW_CONSTRAINT);
					setState(778);
					constraintName();
					}
				}

				setState(781);
				match(KW_PRIMARY);
				setState(782);
				match(KW_KEY);
				setState(785);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(783);
					match(KW_NOT);
					setState(784);
					match(KW_ENFORCED);
					}
				}

				}
				break;
			case KW_NOT:
			case KW_NULL:
				enterOuterAlt(_localctx, 2);
				{
				setState(788);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(787);
					match(KW_NOT);
					}
				}

				setState(790);
				match(KW_NULL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CommentSpecContext extends ParserRuleContext {
		public TerminalNode KW_COMMENT() { return getToken(FlinkSQLParser.KW_COMMENT, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(FlinkSQLParser.STRING_LITERAL, 0); }
		public CommentSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_commentSpec; }
	}

	public final CommentSpecContext commentSpec() throws RecognitionException {
		CommentSpecContext _localctx = new CommentSpecContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_commentSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(793);
			match(KW_COMMENT);
			setState(794);
			match(STRING_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MetadataColumnDefinitionContext extends ParserRuleContext {
		public ColumnNameContext columnName() {
			return getRuleContext(ColumnNameContext.class,0);
		}
		public ColumnTypeContext columnType() {
			return getRuleContext(ColumnTypeContext.class,0);
		}
		public TerminalNode KW_METADATA() { return getToken(FlinkSQLParser.KW_METADATA, 0); }
		public TerminalNode KW_FROM() { return getToken(FlinkSQLParser.KW_FROM, 0); }
		public MetadataKeyContext metadataKey() {
			return getRuleContext(MetadataKeyContext.class,0);
		}
		public TerminalNode KW_VIRTUAL() { return getToken(FlinkSQLParser.KW_VIRTUAL, 0); }
		public MetadataColumnDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_metadataColumnDefinition; }
	}

	public final MetadataColumnDefinitionContext metadataColumnDefinition() throws RecognitionException {
		MetadataColumnDefinitionContext _localctx = new MetadataColumnDefinitionContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_metadataColumnDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(796);
			columnName();
			setState(797);
			columnType();
			setState(798);
			match(KW_METADATA);
			setState(801);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_FROM) {
				{
				setState(799);
				match(KW_FROM);
				setState(800);
				metadataKey();
				}
			}

			setState(804);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_VIRTUAL) {
				{
				setState(803);
				match(KW_VIRTUAL);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MetadataKeyContext extends ParserRuleContext {
		public TerminalNode STRING_LITERAL() { return getToken(FlinkSQLParser.STRING_LITERAL, 0); }
		public MetadataKeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_metadataKey; }
	}

	public final MetadataKeyContext metadataKey() throws RecognitionException {
		MetadataKeyContext _localctx = new MetadataKeyContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_metadataKey);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(806);
			match(STRING_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ComputedColumnDefinitionContext extends ParserRuleContext {
		public ColumnNameContext columnName() {
			return getRuleContext(ColumnNameContext.class,0);
		}
		public TerminalNode KW_AS() { return getToken(FlinkSQLParser.KW_AS, 0); }
		public ComputedColumnExpressionContext computedColumnExpression() {
			return getRuleContext(ComputedColumnExpressionContext.class,0);
		}
		public CommentSpecContext commentSpec() {
			return getRuleContext(CommentSpecContext.class,0);
		}
		public ComputedColumnDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_computedColumnDefinition; }
	}

	public final ComputedColumnDefinitionContext computedColumnDefinition() throws RecognitionException {
		ComputedColumnDefinitionContext _localctx = new ComputedColumnDefinitionContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_computedColumnDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(808);
			columnName();
			setState(809);
			match(KW_AS);
			setState(810);
			computedColumnExpression();
			setState(812);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_COMMENT) {
				{
				setState(811);
				commentSpec();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ComputedColumnExpressionContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ComputedColumnExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_computedColumnExpression; }
	}

	public final ComputedColumnExpressionContext computedColumnExpression() throws RecognitionException {
		ComputedColumnExpressionContext _localctx = new ComputedColumnExpressionContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_computedColumnExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(814);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WatermarkDefinitionContext extends ParserRuleContext {
		public TerminalNode KW_WATERMARK() { return getToken(FlinkSQLParser.KW_WATERMARK, 0); }
		public TerminalNode KW_FOR() { return getToken(FlinkSQLParser.KW_FOR, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode KW_AS() { return getToken(FlinkSQLParser.KW_AS, 0); }
		public WatermarkDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_watermarkDefinition; }
	}

	public final WatermarkDefinitionContext watermarkDefinition() throws RecognitionException {
		WatermarkDefinitionContext _localctx = new WatermarkDefinitionContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_watermarkDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(816);
			match(KW_WATERMARK);
			setState(817);
			match(KW_FOR);
			setState(818);
			expression();
			setState(819);
			match(KW_AS);
			setState(820);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TableConstraintContext extends ParserRuleContext {
		public TerminalNode KW_PRIMARY() { return getToken(FlinkSQLParser.KW_PRIMARY, 0); }
		public TerminalNode KW_KEY() { return getToken(FlinkSQLParser.KW_KEY, 0); }
		public ColumnNameListContext columnNameList() {
			return getRuleContext(ColumnNameListContext.class,0);
		}
		public TerminalNode KW_NOT() { return getToken(FlinkSQLParser.KW_NOT, 0); }
		public TerminalNode KW_ENFORCED() { return getToken(FlinkSQLParser.KW_ENFORCED, 0); }
		public TerminalNode KW_CONSTRAINT() { return getToken(FlinkSQLParser.KW_CONSTRAINT, 0); }
		public ConstraintNameContext constraintName() {
			return getRuleContext(ConstraintNameContext.class,0);
		}
		public TableConstraintContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableConstraint; }
	}

	public final TableConstraintContext tableConstraint() throws RecognitionException {
		TableConstraintContext _localctx = new TableConstraintContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_tableConstraint);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(824);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_CONSTRAINT) {
				{
				setState(822);
				match(KW_CONSTRAINT);
				setState(823);
				constraintName();
				}
			}

			setState(826);
			match(KW_PRIMARY);
			setState(827);
			match(KW_KEY);
			setState(828);
			columnNameList();
			setState(829);
			match(KW_NOT);
			setState(830);
			match(KW_ENFORCED);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstraintNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ConstraintNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constraintName; }
	}

	public final ConstraintNameContext constraintName() throws RecognitionException {
		ConstraintNameContext _localctx = new ConstraintNameContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_constraintName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(832);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SelfDefinitionClauseContext extends ParserRuleContext {
		public TerminalNode KW_PERIOD() { return getToken(FlinkSQLParser.KW_PERIOD, 0); }
		public TerminalNode KW_FOR() { return getToken(FlinkSQLParser.KW_FOR, 0); }
		public TerminalNode KW_SYSTEM_TIME() { return getToken(FlinkSQLParser.KW_SYSTEM_TIME, 0); }
		public SelfDefinitionClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selfDefinitionClause; }
	}

	public final SelfDefinitionClauseContext selfDefinitionClause() throws RecognitionException {
		SelfDefinitionClauseContext _localctx = new SelfDefinitionClauseContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_selfDefinitionClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(834);
			match(KW_PERIOD);
			setState(835);
			match(KW_FOR);
			setState(836);
			match(KW_SYSTEM_TIME);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PartitionDefinitionContext extends ParserRuleContext {
		public TerminalNode KW_PARTITIONED() { return getToken(FlinkSQLParser.KW_PARTITIONED, 0); }
		public TerminalNode KW_BY() { return getToken(FlinkSQLParser.KW_BY, 0); }
		public TransformListContext transformList() {
			return getRuleContext(TransformListContext.class,0);
		}
		public PartitionDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_partitionDefinition; }
	}

	public final PartitionDefinitionContext partitionDefinition() throws RecognitionException {
		PartitionDefinitionContext _localctx = new PartitionDefinitionContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_partitionDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(838);
			match(KW_PARTITIONED);
			setState(839);
			match(KW_BY);
			setState(840);
			transformList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TransformListContext extends ParserRuleContext {
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public List<TransformContext> transform() {
			return getRuleContexts(TransformContext.class);
		}
		public TransformContext transform(int i) {
			return getRuleContext(TransformContext.class,i);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public TransformListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_transformList; }
	}

	public final TransformListContext transformList() throws RecognitionException {
		TransformListContext _localctx = new TransformListContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_transformList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(842);
			match(LR_BRACKET);
			setState(843);
			transform();
			setState(848);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(844);
				match(COMMA);
				setState(845);
				transform();
				}
				}
				setState(850);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(851);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TransformContext extends ParserRuleContext {
		public TransformContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_transform; }
	 
		public TransformContext() { }
		public void copyFrom(TransformContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class IdentityTransformContext extends TransformContext {
		public QualifiedNameContext qualifiedName() {
			return getRuleContext(QualifiedNameContext.class,0);
		}
		public IdentityTransformContext(TransformContext ctx) { copyFrom(ctx); }
	}
	public static class ApplyTransformContext extends TransformContext {
		public IdentifierContext transformName;
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public List<TransformArgumentContext> transformArgument() {
			return getRuleContexts(TransformArgumentContext.class);
		}
		public TransformArgumentContext transformArgument(int i) {
			return getRuleContext(TransformArgumentContext.class,i);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public ApplyTransformContext(TransformContext ctx) { copyFrom(ctx); }
	}

	public final TransformContext transform() throws RecognitionException {
		TransformContext _localctx = new TransformContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_transform);
		int _la;
		try {
			setState(866);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,70,_ctx) ) {
			case 1:
				_localctx = new IdentityTransformContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(853);
				qualifiedName();
				}
				break;
			case 2:
				_localctx = new ApplyTransformContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(854);
				((ApplyTransformContext)_localctx).transformName = identifier();
				setState(855);
				match(LR_BRACKET);
				setState(856);
				transformArgument();
				setState(861);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(857);
					match(COMMA);
					setState(858);
					transformArgument();
					}
					}
					setState(863);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(864);
				match(RR_BRACKET);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TransformArgumentContext extends ParserRuleContext {
		public QualifiedNameContext qualifiedName() {
			return getRuleContext(QualifiedNameContext.class,0);
		}
		public ConstantContext constant() {
			return getRuleContext(ConstantContext.class,0);
		}
		public TransformArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_transformArgument; }
	}

	public final TransformArgumentContext transformArgument() throws RecognitionException {
		TransformArgumentContext _localctx = new TransformArgumentContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_transformArgument);
		try {
			setState(870);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,71,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(868);
				qualifiedName();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(869);
				constant();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LikeDefinitionContext extends ParserRuleContext {
		public TerminalNode KW_LIKE() { return getToken(FlinkSQLParser.KW_LIKE, 0); }
		public TablePathContext tablePath() {
			return getRuleContext(TablePathContext.class,0);
		}
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public List<LikeOptionContext> likeOption() {
			return getRuleContexts(LikeOptionContext.class);
		}
		public LikeOptionContext likeOption(int i) {
			return getRuleContext(LikeOptionContext.class,i);
		}
		public LikeDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_likeDefinition; }
	}

	public final LikeDefinitionContext likeDefinition() throws RecognitionException {
		LikeDefinitionContext _localctx = new LikeDefinitionContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_likeDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(872);
			match(KW_LIKE);
			setState(873);
			tablePath();
			setState(882);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LR_BRACKET) {
				{
				setState(874);
				match(LR_BRACKET);
				setState(878);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==KW_EXCLUDING || _la==KW_OVERWRITING || _la==KW_INCLUDING) {
					{
					{
					setState(875);
					likeOption();
					}
					}
					setState(880);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(881);
				match(RR_BRACKET);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LikeOptionContext extends ParserRuleContext {
		public TerminalNode KW_INCLUDING() { return getToken(FlinkSQLParser.KW_INCLUDING, 0); }
		public TerminalNode KW_EXCLUDING() { return getToken(FlinkSQLParser.KW_EXCLUDING, 0); }
		public TerminalNode KW_ALL() { return getToken(FlinkSQLParser.KW_ALL, 0); }
		public TerminalNode KW_CONSTRAINTS() { return getToken(FlinkSQLParser.KW_CONSTRAINTS, 0); }
		public TerminalNode KW_PARTITIONS() { return getToken(FlinkSQLParser.KW_PARTITIONS, 0); }
		public TerminalNode KW_OVERWRITING() { return getToken(FlinkSQLParser.KW_OVERWRITING, 0); }
		public TerminalNode KW_GENERATED() { return getToken(FlinkSQLParser.KW_GENERATED, 0); }
		public TerminalNode KW_OPTIONS() { return getToken(FlinkSQLParser.KW_OPTIONS, 0); }
		public TerminalNode KW_WATERMARKS() { return getToken(FlinkSQLParser.KW_WATERMARKS, 0); }
		public LikeOptionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_likeOption; }
	}

	public final LikeOptionContext likeOption() throws RecognitionException {
		LikeOptionContext _localctx = new LikeOptionContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_likeOption);
		int _la;
		try {
			setState(888);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,74,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(884);
				_la = _input.LA(1);
				if ( !(_la==KW_EXCLUDING || _la==KW_INCLUDING) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(885);
				_la = _input.LA(1);
				if ( !(_la==KW_CONSTRAINTS || _la==KW_PARTITIONS || _la==KW_ALL) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(886);
				_la = _input.LA(1);
				if ( !(_la==KW_EXCLUDING || _la==KW_OVERWRITING || _la==KW_INCLUDING) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(887);
				_la = _input.LA(1);
				if ( !(_la==KW_GENERATED || _la==KW_OPTIONS || _la==KW_WATERMARKS) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreateCatalogContext extends ParserRuleContext {
		public TerminalNode KW_CREATE() { return getToken(FlinkSQLParser.KW_CREATE, 0); }
		public TerminalNode KW_CATALOG() { return getToken(FlinkSQLParser.KW_CATALOG, 0); }
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public WithOptionContext withOption() {
			return getRuleContext(WithOptionContext.class,0);
		}
		public CreateCatalogContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createCatalog; }
	}

	public final CreateCatalogContext createCatalog() throws RecognitionException {
		CreateCatalogContext _localctx = new CreateCatalogContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_createCatalog);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(890);
			match(KW_CREATE);
			setState(891);
			match(KW_CATALOG);
			setState(892);
			uid();
			setState(893);
			withOption();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreateDatabaseContext extends ParserRuleContext {
		public TerminalNode KW_CREATE() { return getToken(FlinkSQLParser.KW_CREATE, 0); }
		public TerminalNode KW_DATABASE() { return getToken(FlinkSQLParser.KW_DATABASE, 0); }
		public DatabasePathCreateContext databasePathCreate() {
			return getRuleContext(DatabasePathCreateContext.class,0);
		}
		public IfNotExistsContext ifNotExists() {
			return getRuleContext(IfNotExistsContext.class,0);
		}
		public CommentSpecContext commentSpec() {
			return getRuleContext(CommentSpecContext.class,0);
		}
		public WithOptionContext withOption() {
			return getRuleContext(WithOptionContext.class,0);
		}
		public CreateDatabaseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createDatabase; }
	}

	public final CreateDatabaseContext createDatabase() throws RecognitionException {
		CreateDatabaseContext _localctx = new CreateDatabaseContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_createDatabase);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(895);
			match(KW_CREATE);
			setState(896);
			match(KW_DATABASE);
			setState(898);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,75,_ctx) ) {
			case 1:
				{
				setState(897);
				ifNotExists();
				}
				break;
			}
			setState(900);
			databasePathCreate();
			setState(902);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_COMMENT) {
				{
				setState(901);
				commentSpec();
				}
			}

			setState(905);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_WITH) {
				{
				setState(904);
				withOption();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreateViewContext extends ParserRuleContext {
		public TerminalNode KW_CREATE() { return getToken(FlinkSQLParser.KW_CREATE, 0); }
		public TerminalNode KW_VIEW() { return getToken(FlinkSQLParser.KW_VIEW, 0); }
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public TerminalNode KW_AS() { return getToken(FlinkSQLParser.KW_AS, 0); }
		public QueryStatementContext queryStatement() {
			return getRuleContext(QueryStatementContext.class,0);
		}
		public TerminalNode KW_TEMPORARY() { return getToken(FlinkSQLParser.KW_TEMPORARY, 0); }
		public IfNotExistsContext ifNotExists() {
			return getRuleContext(IfNotExistsContext.class,0);
		}
		public ColumnNameListContext columnNameList() {
			return getRuleContext(ColumnNameListContext.class,0);
		}
		public CommentSpecContext commentSpec() {
			return getRuleContext(CommentSpecContext.class,0);
		}
		public CreateViewContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createView; }
	}

	public final CreateViewContext createView() throws RecognitionException {
		CreateViewContext _localctx = new CreateViewContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_createView);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(907);
			match(KW_CREATE);
			setState(909);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_TEMPORARY) {
				{
				setState(908);
				match(KW_TEMPORARY);
				}
			}

			setState(911);
			match(KW_VIEW);
			setState(913);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,79,_ctx) ) {
			case 1:
				{
				setState(912);
				ifNotExists();
				}
				break;
			}
			setState(915);
			uid();
			setState(917);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LR_BRACKET) {
				{
				setState(916);
				columnNameList();
				}
			}

			setState(920);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_COMMENT) {
				{
				setState(919);
				commentSpec();
				}
			}

			setState(922);
			match(KW_AS);
			setState(923);
			queryStatement(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreateFunctionContext extends ParserRuleContext {
		public TerminalNode KW_CREATE() { return getToken(FlinkSQLParser.KW_CREATE, 0); }
		public TerminalNode KW_FUNCTION() { return getToken(FlinkSQLParser.KW_FUNCTION, 0); }
		public FunctionNameContext functionName() {
			return getRuleContext(FunctionNameContext.class,0);
		}
		public TerminalNode KW_AS() { return getToken(FlinkSQLParser.KW_AS, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode KW_TEMPORARY() { return getToken(FlinkSQLParser.KW_TEMPORARY, 0); }
		public TerminalNode KW_SYSTEM() { return getToken(FlinkSQLParser.KW_SYSTEM, 0); }
		public IfNotExistsContext ifNotExists() {
			return getRuleContext(IfNotExistsContext.class,0);
		}
		public TerminalNode KW_LANGUAGE() { return getToken(FlinkSQLParser.KW_LANGUAGE, 0); }
		public UsingClauseContext usingClause() {
			return getRuleContext(UsingClauseContext.class,0);
		}
		public TerminalNode KW_JAVA() { return getToken(FlinkSQLParser.KW_JAVA, 0); }
		public TerminalNode KW_SCALA() { return getToken(FlinkSQLParser.KW_SCALA, 0); }
		public TerminalNode KW_PYTHON() { return getToken(FlinkSQLParser.KW_PYTHON, 0); }
		public CreateFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createFunction; }
	}

	public final CreateFunctionContext createFunction() throws RecognitionException {
		CreateFunctionContext _localctx = new CreateFunctionContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_createFunction);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(925);
			match(KW_CREATE);
			setState(929);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,82,_ctx) ) {
			case 1:
				{
				setState(926);
				match(KW_TEMPORARY);
				}
				break;
			case 2:
				{
				setState(927);
				match(KW_TEMPORARY);
				setState(928);
				match(KW_SYSTEM);
				}
				break;
			}
			setState(931);
			match(KW_FUNCTION);
			setState(933);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,83,_ctx) ) {
			case 1:
				{
				setState(932);
				ifNotExists();
				}
				break;
			}
			setState(935);
			functionName();
			setState(936);
			match(KW_AS);
			setState(937);
			identifier();
			setState(940);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_LANGUAGE) {
				{
				setState(938);
				match(KW_LANGUAGE);
				setState(939);
				_la = _input.LA(1);
				if ( !(((((_la - 68)) & ~0x3f) == 0 && ((1L << (_la - 68)) & ((1L << (KW_JAVA - 68)) | (1L << (KW_PYTHON - 68)) | (1L << (KW_SCALA - 68)))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(943);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_USING) {
				{
				setState(942);
				usingClause();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UsingClauseContext extends ParserRuleContext {
		public TerminalNode KW_USING() { return getToken(FlinkSQLParser.KW_USING, 0); }
		public List<TerminalNode> KW_JAR() { return getTokens(FlinkSQLParser.KW_JAR); }
		public TerminalNode KW_JAR(int i) {
			return getToken(FlinkSQLParser.KW_JAR, i);
		}
		public List<JarFileNameContext> jarFileName() {
			return getRuleContexts(JarFileNameContext.class);
		}
		public JarFileNameContext jarFileName(int i) {
			return getRuleContext(JarFileNameContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public UsingClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_usingClause; }
	}

	public final UsingClauseContext usingClause() throws RecognitionException {
		UsingClauseContext _localctx = new UsingClauseContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_usingClause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(945);
			match(KW_USING);
			setState(946);
			match(KW_JAR);
			setState(947);
			jarFileName();
			setState(953);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(948);
				match(COMMA);
				setState(949);
				match(KW_JAR);
				setState(950);
				jarFileName();
				}
				}
				setState(955);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class JarFileNameContext extends ParserRuleContext {
		public TerminalNode STRING_LITERAL() { return getToken(FlinkSQLParser.STRING_LITERAL, 0); }
		public JarFileNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_jarFileName; }
	}

	public final JarFileNameContext jarFileName() throws RecognitionException {
		JarFileNameContext _localctx = new JarFileNameContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_jarFileName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(956);
			match(STRING_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlterTableContext extends ParserRuleContext {
		public TerminalNode KW_ALTER() { return getToken(FlinkSQLParser.KW_ALTER, 0); }
		public TerminalNode KW_TABLE() { return getToken(FlinkSQLParser.KW_TABLE, 0); }
		public TablePathContext tablePath() {
			return getRuleContext(TablePathContext.class,0);
		}
		public RenameDefinitionContext renameDefinition() {
			return getRuleContext(RenameDefinitionContext.class,0);
		}
		public SetKeyValueDefinitionContext setKeyValueDefinition() {
			return getRuleContext(SetKeyValueDefinitionContext.class,0);
		}
		public AddConstraintContext addConstraint() {
			return getRuleContext(AddConstraintContext.class,0);
		}
		public DropConstraintContext dropConstraint() {
			return getRuleContext(DropConstraintContext.class,0);
		}
		public AddUniqueContext addUnique() {
			return getRuleContext(AddUniqueContext.class,0);
		}
		public IfExistsContext ifExists() {
			return getRuleContext(IfExistsContext.class,0);
		}
		public AlterTableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alterTable; }
	}

	public final AlterTableContext alterTable() throws RecognitionException {
		AlterTableContext _localctx = new AlterTableContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_alterTable);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(958);
			match(KW_ALTER);
			setState(959);
			match(KW_TABLE);
			setState(961);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,87,_ctx) ) {
			case 1:
				{
				setState(960);
				ifExists();
				}
				break;
			}
			setState(963);
			tablePath();
			setState(969);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,88,_ctx) ) {
			case 1:
				{
				setState(964);
				renameDefinition();
				}
				break;
			case 2:
				{
				setState(965);
				setKeyValueDefinition();
				}
				break;
			case 3:
				{
				setState(966);
				addConstraint();
				}
				break;
			case 4:
				{
				setState(967);
				dropConstraint();
				}
				break;
			case 5:
				{
				setState(968);
				addUnique();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RenameDefinitionContext extends ParserRuleContext {
		public TerminalNode KW_RENAME() { return getToken(FlinkSQLParser.KW_RENAME, 0); }
		public TerminalNode KW_TO() { return getToken(FlinkSQLParser.KW_TO, 0); }
		public List<UidContext> uid() {
			return getRuleContexts(UidContext.class);
		}
		public UidContext uid(int i) {
			return getRuleContext(UidContext.class,i);
		}
		public RenameDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_renameDefinition; }
	}

	public final RenameDefinitionContext renameDefinition() throws RecognitionException {
		RenameDefinitionContext _localctx = new RenameDefinitionContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_renameDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(971);
			match(KW_RENAME);
			setState(973);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << KW_ADD) | (1L << KW_ADMIN) | (1L << KW_AFTER) | (1L << KW_ANALYZE) | (1L << KW_ASC) | (1L << KW_BEFORE) | (1L << KW_BYTES) | (1L << KW_CASCADE) | (1L << KW_CATALOG) | (1L << KW_CATALOGS) | (1L << KW_CENTURY) | (1L << KW_CHAIN) | (1L << KW_CHANGELOG_MODE) | (1L << KW_CHARACTERS) | (1L << KW_COMMENT) | (1L << KW_COMPACT) | (1L << KW_COLUMNS) | (1L << KW_CONSTRAINTS) | (1L << KW_CONSTRUCTOR) | (1L << KW_CUMULATE) | (1L << KW_DATA) | (1L << KW_DATABASE) | (1L << KW_DATABASES) | (1L << KW_DAYS) | (1L << KW_DECADE) | (1L << KW_DEFINED) | (1L << KW_DESC) | (1L << KW_DESCRIPTOR) | (1L << KW_DIV) | (1L << KW_ENCODING) | (1L << KW_ENFORCED) | (1L << KW_ENGINE) | (1L << KW_ERROR) | (1L << KW_ESTIMATED_COST) | (1L << KW_EXCEPTION) | (1L << KW_EXCLUDE) | (1L << KW_EXCLUDING) | (1L << KW_EXTENDED) | (1L << KW_FILE) | (1L << KW_FINAL) | (1L << KW_FIRST) | (1L << KW_FOLLOWING) | (1L << KW_FORMAT) | (1L << KW_FORTRAN) | (1L << KW_FOUND) | (1L << KW_FRAC_SECOND) | (1L << KW_FUNCTIONS) | (1L << KW_GENERAL) | (1L << KW_GENERATED) | (1L << KW_GO) | (1L << KW_GOTO) | (1L << KW_GRANTED) | (1L << KW_HOP) | (1L << KW_HOURS) | (1L << KW_IF) | (1L << KW_IGNORE) | (1L << KW_INCREMENT))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (KW_INPUT - 64)) | (1L << (KW_INVOKER - 64)) | (1L << (KW_JAR - 64)) | (1L << (KW_JARS - 64)) | (1L << (KW_JAVA - 64)) | (1L << (KW_JSON - 64)) | (1L << (KW_JSON_EXECUTION_PLAN - 64)) | (1L << (KW_KEY - 64)) | (1L << (KW_KEY_MEMBER - 64)) | (1L << (KW_KEY_TYPE - 64)) | (1L << (KW_LABEL - 64)) | (1L << (KW_LAST - 64)) | (1L << (KW_LENGTH - 64)) | (1L << (KW_LEVEL - 64)) | (1L << (KW_LOAD - 64)) | (1L << (KW_MAP - 64)) | (1L << (KW_MICROSECOND - 64)) | (1L << (KW_MILLENNIUM - 64)) | (1L << (KW_MILLISECOND - 64)) | (1L << (KW_MINUTES - 64)) | (1L << (KW_MINVALUE - 64)) | (1L << (KW_MODIFY - 64)) | (1L << (KW_MODULES - 64)) | (1L << (KW_MONTHS - 64)) | (1L << (KW_NANOSECOND - 64)) | (1L << (KW_NULLS - 64)) | (1L << (KW_NUMBER - 64)) | (1L << (KW_OPTION - 64)) | (1L << (KW_OPTIONS - 64)) | (1L << (KW_ORDERING - 64)) | (1L << (KW_OUTPUT - 64)) | (1L << (KW_OVERWRITE - 64)) | (1L << (KW_OVERWRITING - 64)) | (1L << (KW_PARTITIONED - 64)) | (1L << (KW_PARTITIONS - 64)) | (1L << (KW_PASSING - 64)) | (1L << (KW_PAST - 64)) | (1L << (KW_PATH - 64)) | (1L << (KW_PLACING - 64)) | (1L << (KW_PLAN - 64)) | (1L << (KW_PRECEDING - 64)) | (1L << (KW_PRESERVE - 64)) | (1L << (KW_PRIOR - 64)) | (1L << (KW_PRIVILEGES - 64)) | (1L << (KW_PUBLIC - 64)) | (1L << (KW_PYTHON - 64)) | (1L << (KW_PYTHON_FILES - 64)) | (1L << (KW_PYTHON_REQUIREMENTS - 64)) | (1L << (KW_PYTHON_DEPENDENCIES - 64)) | (1L << (KW_PYTHON_JAR - 64)) | (1L << (KW_PYTHON_ARCHIVES - 64)) | (1L << (KW_PYTHON_PARAMETER - 64)) | (1L << (KW_QUARTER - 64)) | (1L << (KW_RAW - 64)) | (1L << (KW_READ - 64)) | (1L << (KW_RELATIVE - 64)) | (1L << (KW_REMOVE - 64)) | (1L << (KW_RENAME - 64)) | (1L << (KW_REPLACE - 64)) | (1L << (KW_RESPECT - 64)) | (1L << (KW_RESTART - 64)) | (1L << (KW_RESTRICT - 64)) | (1L << (KW_ROLE - 64)) | (1L << (KW_ROW_COUNT - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (KW_SCALA - 128)) | (1L << (KW_SCALAR - 128)) | (1L << (KW_SCALE - 128)) | (1L << (KW_SCHEMA - 128)) | (1L << (KW_SECONDS - 128)) | (1L << (KW_SECTION - 128)) | (1L << (KW_SECURITY - 128)) | (1L << (KW_SELF - 128)) | (1L << (KW_SERVER - 128)) | (1L << (KW_SERVER_NAME - 128)) | (1L << (KW_SESSION - 128)) | (1L << (KW_SETS - 128)) | (1L << (KW_SIMPLE - 128)) | (1L << (KW_SIZE - 128)) | (1L << (KW_SLIDE - 128)) | (1L << (KW_SOURCE - 128)) | (1L << (KW_SPACE - 128)) | (1L << (KW_STATE - 128)) | (1L << (KW_STATEMENT - 128)) | (1L << (KW_STEP - 128)) | (1L << (KW_STRING - 128)) | (1L << (KW_STRUCTURE - 128)) | (1L << (KW_STYLE - 128)) | (1L << (KW_TABLES - 128)) | (1L << (KW_TEMPORARY - 128)) | (1L << (KW_TIMECOL - 128)) | (1L << (KW_FLOOR - 128)) | (1L << (KW_TIMESTAMP_LTZ - 128)) | (1L << (KW_TIMESTAMPADD - 128)) | (1L << (KW_TIMESTAMPDIFF - 128)) | (1L << (KW_TRANSFORM - 128)) | (1L << (KW_TUMBLE - 128)) | (1L << (KW_TYPE - 128)) | (1L << (KW_UNDER - 128)) | (1L << (KW_UNLOAD - 128)) | (1L << (KW_USAGE - 128)) | (1L << (KW_USE - 128)) | (1L << (KW_UTF16 - 128)) | (1L << (KW_UTF32 - 128)) | (1L << (KW_UTF8 - 128)) | (1L << (KW_VERSION - 128)) | (1L << (KW_VIEW - 128)) | (1L << (KW_VIEWS - 128)) | (1L << (KW_VIRTUAL - 128)) | (1L << (KW_WATERMARK - 128)) | (1L << (KW_WATERMARKS - 128)) | (1L << (KW_WEEK - 128)) | (1L << (KW_WORK - 128)) | (1L << (KW_WRAPPER - 128)) | (1L << (KW_YEARS - 128)) | (1L << (KW_ZONE - 128)))) != 0) || ((((_la - 411)) & ~0x3f) == 0 && ((1L << (_la - 411)) & ((1L << (STRING_LITERAL - 411)) | (1L << (DIG_LITERAL - 411)) | (1L << (ID_LITERAL - 411)))) != 0)) {
				{
				setState(972);
				uid();
				}
			}

			setState(975);
			match(KW_TO);
			setState(976);
			uid();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SetKeyValueDefinitionContext extends ParserRuleContext {
		public TerminalNode KW_SET() { return getToken(FlinkSQLParser.KW_SET, 0); }
		public TablePropertyListContext tablePropertyList() {
			return getRuleContext(TablePropertyListContext.class,0);
		}
		public SetKeyValueDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_setKeyValueDefinition; }
	}

	public final SetKeyValueDefinitionContext setKeyValueDefinition() throws RecognitionException {
		SetKeyValueDefinitionContext _localctx = new SetKeyValueDefinitionContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_setKeyValueDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(978);
			match(KW_SET);
			setState(979);
			tablePropertyList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AddConstraintContext extends ParserRuleContext {
		public TerminalNode KW_ADD() { return getToken(FlinkSQLParser.KW_ADD, 0); }
		public TerminalNode KW_CONSTRAINT() { return getToken(FlinkSQLParser.KW_CONSTRAINT, 0); }
		public ConstraintNameContext constraintName() {
			return getRuleContext(ConstraintNameContext.class,0);
		}
		public TerminalNode KW_PRIMARY() { return getToken(FlinkSQLParser.KW_PRIMARY, 0); }
		public TerminalNode KW_KEY() { return getToken(FlinkSQLParser.KW_KEY, 0); }
		public ColumnNameListContext columnNameList() {
			return getRuleContext(ColumnNameListContext.class,0);
		}
		public NotForcedContext notForced() {
			return getRuleContext(NotForcedContext.class,0);
		}
		public AddConstraintContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_addConstraint; }
	}

	public final AddConstraintContext addConstraint() throws RecognitionException {
		AddConstraintContext _localctx = new AddConstraintContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_addConstraint);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(981);
			match(KW_ADD);
			setState(982);
			match(KW_CONSTRAINT);
			setState(983);
			constraintName();
			setState(984);
			match(KW_PRIMARY);
			setState(985);
			match(KW_KEY);
			setState(986);
			columnNameList();
			setState(988);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_NOT) {
				{
				setState(987);
				notForced();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DropConstraintContext extends ParserRuleContext {
		public TerminalNode KW_DROP() { return getToken(FlinkSQLParser.KW_DROP, 0); }
		public TerminalNode KW_CONSTRAINT() { return getToken(FlinkSQLParser.KW_CONSTRAINT, 0); }
		public ConstraintNameContext constraintName() {
			return getRuleContext(ConstraintNameContext.class,0);
		}
		public DropConstraintContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dropConstraint; }
	}

	public final DropConstraintContext dropConstraint() throws RecognitionException {
		DropConstraintContext _localctx = new DropConstraintContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_dropConstraint);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(990);
			match(KW_DROP);
			setState(991);
			match(KW_CONSTRAINT);
			setState(992);
			constraintName();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AddUniqueContext extends ParserRuleContext {
		public TerminalNode KW_ADD() { return getToken(FlinkSQLParser.KW_ADD, 0); }
		public TerminalNode KW_UNIQUE() { return getToken(FlinkSQLParser.KW_UNIQUE, 0); }
		public ColumnNameListContext columnNameList() {
			return getRuleContext(ColumnNameListContext.class,0);
		}
		public AddUniqueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_addUnique; }
	}

	public final AddUniqueContext addUnique() throws RecognitionException {
		AddUniqueContext _localctx = new AddUniqueContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_addUnique);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(994);
			match(KW_ADD);
			setState(995);
			match(KW_UNIQUE);
			setState(996);
			columnNameList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NotForcedContext extends ParserRuleContext {
		public TerminalNode KW_NOT() { return getToken(FlinkSQLParser.KW_NOT, 0); }
		public TerminalNode KW_ENFORCED() { return getToken(FlinkSQLParser.KW_ENFORCED, 0); }
		public NotForcedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_notForced; }
	}

	public final NotForcedContext notForced() throws RecognitionException {
		NotForcedContext _localctx = new NotForcedContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_notForced);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(998);
			match(KW_NOT);
			setState(999);
			match(KW_ENFORCED);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlertViewContext extends ParserRuleContext {
		public TerminalNode KW_ALTER() { return getToken(FlinkSQLParser.KW_ALTER, 0); }
		public TerminalNode KW_VIEW() { return getToken(FlinkSQLParser.KW_VIEW, 0); }
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public RenameDefinitionContext renameDefinition() {
			return getRuleContext(RenameDefinitionContext.class,0);
		}
		public TerminalNode KW_AS() { return getToken(FlinkSQLParser.KW_AS, 0); }
		public QueryStatementContext queryStatement() {
			return getRuleContext(QueryStatementContext.class,0);
		}
		public AlertViewContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alertView; }
	}

	public final AlertViewContext alertView() throws RecognitionException {
		AlertViewContext _localctx = new AlertViewContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_alertView);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1001);
			match(KW_ALTER);
			setState(1002);
			match(KW_VIEW);
			setState(1003);
			uid();
			setState(1007);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_RENAME:
				{
				setState(1004);
				renameDefinition();
				}
				break;
			case KW_AS:
				{
				setState(1005);
				match(KW_AS);
				setState(1006);
				queryStatement(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlterDatabaseContext extends ParserRuleContext {
		public TerminalNode KW_ALTER() { return getToken(FlinkSQLParser.KW_ALTER, 0); }
		public TerminalNode KW_DATABASE() { return getToken(FlinkSQLParser.KW_DATABASE, 0); }
		public DatabasePathContext databasePath() {
			return getRuleContext(DatabasePathContext.class,0);
		}
		public SetKeyValueDefinitionContext setKeyValueDefinition() {
			return getRuleContext(SetKeyValueDefinitionContext.class,0);
		}
		public AlterDatabaseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alterDatabase; }
	}

	public final AlterDatabaseContext alterDatabase() throws RecognitionException {
		AlterDatabaseContext _localctx = new AlterDatabaseContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_alterDatabase);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1009);
			match(KW_ALTER);
			setState(1010);
			match(KW_DATABASE);
			setState(1011);
			databasePath();
			setState(1012);
			setKeyValueDefinition();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlterFunctionContext extends ParserRuleContext {
		public TerminalNode KW_ALTER() { return getToken(FlinkSQLParser.KW_ALTER, 0); }
		public TerminalNode KW_FUNCTION() { return getToken(FlinkSQLParser.KW_FUNCTION, 0); }
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public TerminalNode KW_AS() { return getToken(FlinkSQLParser.KW_AS, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode KW_TEMPORARY() { return getToken(FlinkSQLParser.KW_TEMPORARY, 0); }
		public TerminalNode KW_SYSTEM() { return getToken(FlinkSQLParser.KW_SYSTEM, 0); }
		public IfExistsContext ifExists() {
			return getRuleContext(IfExistsContext.class,0);
		}
		public TerminalNode KW_LANGUAGE() { return getToken(FlinkSQLParser.KW_LANGUAGE, 0); }
		public TerminalNode KW_JAVA() { return getToken(FlinkSQLParser.KW_JAVA, 0); }
		public TerminalNode KW_SCALA() { return getToken(FlinkSQLParser.KW_SCALA, 0); }
		public TerminalNode KW_PYTHON() { return getToken(FlinkSQLParser.KW_PYTHON, 0); }
		public AlterFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alterFunction; }
	}

	public final AlterFunctionContext alterFunction() throws RecognitionException {
		AlterFunctionContext _localctx = new AlterFunctionContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_alterFunction);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1014);
			match(KW_ALTER);
			setState(1018);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,92,_ctx) ) {
			case 1:
				{
				setState(1015);
				match(KW_TEMPORARY);
				}
				break;
			case 2:
				{
				setState(1016);
				match(KW_TEMPORARY);
				setState(1017);
				match(KW_SYSTEM);
				}
				break;
			}
			setState(1020);
			match(KW_FUNCTION);
			setState(1022);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,93,_ctx) ) {
			case 1:
				{
				setState(1021);
				ifExists();
				}
				break;
			}
			setState(1024);
			uid();
			setState(1025);
			match(KW_AS);
			setState(1026);
			identifier();
			setState(1029);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_LANGUAGE) {
				{
				setState(1027);
				match(KW_LANGUAGE);
				setState(1028);
				_la = _input.LA(1);
				if ( !(((((_la - 68)) & ~0x3f) == 0 && ((1L << (_la - 68)) & ((1L << (KW_JAVA - 68)) | (1L << (KW_PYTHON - 68)) | (1L << (KW_SCALA - 68)))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DropCatalogContext extends ParserRuleContext {
		public TerminalNode KW_DROP() { return getToken(FlinkSQLParser.KW_DROP, 0); }
		public TerminalNode KW_CATALOG() { return getToken(FlinkSQLParser.KW_CATALOG, 0); }
		public CatalogPathContext catalogPath() {
			return getRuleContext(CatalogPathContext.class,0);
		}
		public IfExistsContext ifExists() {
			return getRuleContext(IfExistsContext.class,0);
		}
		public DropCatalogContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dropCatalog; }
	}

	public final DropCatalogContext dropCatalog() throws RecognitionException {
		DropCatalogContext _localctx = new DropCatalogContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_dropCatalog);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1031);
			match(KW_DROP);
			setState(1032);
			match(KW_CATALOG);
			setState(1034);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,95,_ctx) ) {
			case 1:
				{
				setState(1033);
				ifExists();
				}
				break;
			}
			setState(1036);
			catalogPath();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DropTableContext extends ParserRuleContext {
		public TerminalNode KW_DROP() { return getToken(FlinkSQLParser.KW_DROP, 0); }
		public TerminalNode KW_TABLE() { return getToken(FlinkSQLParser.KW_TABLE, 0); }
		public TablePathContext tablePath() {
			return getRuleContext(TablePathContext.class,0);
		}
		public TerminalNode KW_TEMPORARY() { return getToken(FlinkSQLParser.KW_TEMPORARY, 0); }
		public IfExistsContext ifExists() {
			return getRuleContext(IfExistsContext.class,0);
		}
		public DropTableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dropTable; }
	}

	public final DropTableContext dropTable() throws RecognitionException {
		DropTableContext _localctx = new DropTableContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_dropTable);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1038);
			match(KW_DROP);
			setState(1040);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_TEMPORARY) {
				{
				setState(1039);
				match(KW_TEMPORARY);
				}
			}

			setState(1042);
			match(KW_TABLE);
			setState(1044);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,97,_ctx) ) {
			case 1:
				{
				setState(1043);
				ifExists();
				}
				break;
			}
			setState(1046);
			tablePath();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DropDatabaseContext extends ParserRuleContext {
		public Token dropType;
		public TerminalNode KW_DROP() { return getToken(FlinkSQLParser.KW_DROP, 0); }
		public TerminalNode KW_DATABASE() { return getToken(FlinkSQLParser.KW_DATABASE, 0); }
		public DatabasePathContext databasePath() {
			return getRuleContext(DatabasePathContext.class,0);
		}
		public IfExistsContext ifExists() {
			return getRuleContext(IfExistsContext.class,0);
		}
		public TerminalNode KW_RESTRICT() { return getToken(FlinkSQLParser.KW_RESTRICT, 0); }
		public TerminalNode KW_CASCADE() { return getToken(FlinkSQLParser.KW_CASCADE, 0); }
		public DropDatabaseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dropDatabase; }
	}

	public final DropDatabaseContext dropDatabase() throws RecognitionException {
		DropDatabaseContext _localctx = new DropDatabaseContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_dropDatabase);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1048);
			match(KW_DROP);
			setState(1049);
			match(KW_DATABASE);
			setState(1051);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,98,_ctx) ) {
			case 1:
				{
				setState(1050);
				ifExists();
				}
				break;
			}
			setState(1053);
			databasePath();
			setState(1055);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_CASCADE || _la==KW_RESTRICT) {
				{
				setState(1054);
				((DropDatabaseContext)_localctx).dropType = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==KW_CASCADE || _la==KW_RESTRICT) ) {
					((DropDatabaseContext)_localctx).dropType = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DropViewContext extends ParserRuleContext {
		public TerminalNode KW_DROP() { return getToken(FlinkSQLParser.KW_DROP, 0); }
		public TerminalNode KW_VIEW() { return getToken(FlinkSQLParser.KW_VIEW, 0); }
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public TerminalNode KW_TEMPORARY() { return getToken(FlinkSQLParser.KW_TEMPORARY, 0); }
		public IfExistsContext ifExists() {
			return getRuleContext(IfExistsContext.class,0);
		}
		public DropViewContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dropView; }
	}

	public final DropViewContext dropView() throws RecognitionException {
		DropViewContext _localctx = new DropViewContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_dropView);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1057);
			match(KW_DROP);
			setState(1059);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_TEMPORARY) {
				{
				setState(1058);
				match(KW_TEMPORARY);
				}
			}

			setState(1061);
			match(KW_VIEW);
			setState(1063);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,101,_ctx) ) {
			case 1:
				{
				setState(1062);
				ifExists();
				}
				break;
			}
			setState(1065);
			uid();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DropFunctionContext extends ParserRuleContext {
		public TerminalNode KW_DROP() { return getToken(FlinkSQLParser.KW_DROP, 0); }
		public TerminalNode KW_FUNCTION() { return getToken(FlinkSQLParser.KW_FUNCTION, 0); }
		public FunctionNameContext functionName() {
			return getRuleContext(FunctionNameContext.class,0);
		}
		public TerminalNode KW_TEMPORARY() { return getToken(FlinkSQLParser.KW_TEMPORARY, 0); }
		public TerminalNode KW_SYSTEM() { return getToken(FlinkSQLParser.KW_SYSTEM, 0); }
		public IfExistsContext ifExists() {
			return getRuleContext(IfExistsContext.class,0);
		}
		public DropFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dropFunction; }
	}

	public final DropFunctionContext dropFunction() throws RecognitionException {
		DropFunctionContext _localctx = new DropFunctionContext(_ctx, getState());
		enterRule(_localctx, 142, RULE_dropFunction);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1067);
			match(KW_DROP);
			setState(1071);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,102,_ctx) ) {
			case 1:
				{
				setState(1068);
				match(KW_TEMPORARY);
				}
				break;
			case 2:
				{
				setState(1069);
				match(KW_TEMPORARY);
				setState(1070);
				match(KW_SYSTEM);
				}
				break;
			}
			setState(1073);
			match(KW_FUNCTION);
			setState(1075);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,103,_ctx) ) {
			case 1:
				{
				setState(1074);
				ifExists();
				}
				break;
			}
			setState(1077);
			functionName();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InsertStatementContext extends ParserRuleContext {
		public InsertSimpleStatementContext insertSimpleStatement() {
			return getRuleContext(InsertSimpleStatementContext.class,0);
		}
		public TerminalNode KW_EXECUTE() { return getToken(FlinkSQLParser.KW_EXECUTE, 0); }
		public InsertMulStatementCompatibilityContext insertMulStatementCompatibility() {
			return getRuleContext(InsertMulStatementCompatibilityContext.class,0);
		}
		public InsertMulStatementContext insertMulStatement() {
			return getRuleContext(InsertMulStatementContext.class,0);
		}
		public InsertStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_insertStatement; }
	}

	public final InsertStatementContext insertStatement() throws RecognitionException {
		InsertStatementContext _localctx = new InsertStatementContext(_ctx, getState());
		enterRule(_localctx, 144, RULE_insertStatement);
		int _la;
		try {
			setState(1086);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,105,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(1080);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_EXECUTE) {
					{
					setState(1079);
					match(KW_EXECUTE);
					}
				}

				setState(1082);
				insertSimpleStatement();
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1083);
				insertMulStatementCompatibility();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				{
				setState(1084);
				match(KW_EXECUTE);
				setState(1085);
				insertMulStatement();
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InsertSimpleStatementContext extends ParserRuleContext {
		public TerminalNode KW_INSERT() { return getToken(FlinkSQLParser.KW_INSERT, 0); }
		public TablePathContext tablePath() {
			return getRuleContext(TablePathContext.class,0);
		}
		public TerminalNode KW_INTO() { return getToken(FlinkSQLParser.KW_INTO, 0); }
		public TerminalNode KW_OVERWRITE() { return getToken(FlinkSQLParser.KW_OVERWRITE, 0); }
		public QueryStatementContext queryStatement() {
			return getRuleContext(QueryStatementContext.class,0);
		}
		public ValuesDefinitionContext valuesDefinition() {
			return getRuleContext(ValuesDefinitionContext.class,0);
		}
		public InsertPartitionDefinitionContext insertPartitionDefinition() {
			return getRuleContext(InsertPartitionDefinitionContext.class,0);
		}
		public ColumnNameListContext columnNameList() {
			return getRuleContext(ColumnNameListContext.class,0);
		}
		public InsertSimpleStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_insertSimpleStatement; }
	}

	public final InsertSimpleStatementContext insertSimpleStatement() throws RecognitionException {
		InsertSimpleStatementContext _localctx = new InsertSimpleStatementContext(_ctx, getState());
		enterRule(_localctx, 146, RULE_insertSimpleStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1088);
			match(KW_INSERT);
			setState(1089);
			_la = _input.LA(1);
			if ( !(_la==KW_OVERWRITE || _la==KW_INTO) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(1090);
			tablePath();
			setState(1099);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,108,_ctx) ) {
			case 1:
				{
				setState(1092);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_PARTITION) {
					{
					setState(1091);
					insertPartitionDefinition();
					}
				}

				setState(1095);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,107,_ctx) ) {
				case 1:
					{
					setState(1094);
					columnNameList();
					}
					break;
				}
				setState(1097);
				queryStatement(0);
				}
				break;
			case 2:
				{
				setState(1098);
				valuesDefinition();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InsertPartitionDefinitionContext extends ParserRuleContext {
		public TerminalNode KW_PARTITION() { return getToken(FlinkSQLParser.KW_PARTITION, 0); }
		public TablePropertyListContext tablePropertyList() {
			return getRuleContext(TablePropertyListContext.class,0);
		}
		public InsertPartitionDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_insertPartitionDefinition; }
	}

	public final InsertPartitionDefinitionContext insertPartitionDefinition() throws RecognitionException {
		InsertPartitionDefinitionContext _localctx = new InsertPartitionDefinitionContext(_ctx, getState());
		enterRule(_localctx, 148, RULE_insertPartitionDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1101);
			match(KW_PARTITION);
			setState(1102);
			tablePropertyList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ValuesDefinitionContext extends ParserRuleContext {
		public TerminalNode KW_VALUES() { return getToken(FlinkSQLParser.KW_VALUES, 0); }
		public List<ValuesRowDefinitionContext> valuesRowDefinition() {
			return getRuleContexts(ValuesRowDefinitionContext.class);
		}
		public ValuesRowDefinitionContext valuesRowDefinition(int i) {
			return getRuleContext(ValuesRowDefinitionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public ValuesDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valuesDefinition; }
	}

	public final ValuesDefinitionContext valuesDefinition() throws RecognitionException {
		ValuesDefinitionContext _localctx = new ValuesDefinitionContext(_ctx, getState());
		enterRule(_localctx, 150, RULE_valuesDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1104);
			match(KW_VALUES);
			setState(1105);
			valuesRowDefinition();
			setState(1110);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1106);
				match(COMMA);
				setState(1107);
				valuesRowDefinition();
				}
				}
				setState(1112);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ValuesRowDefinitionContext extends ParserRuleContext {
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public List<ConstantContext> constant() {
			return getRuleContexts(ConstantContext.class);
		}
		public ConstantContext constant(int i) {
			return getRuleContext(ConstantContext.class,i);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public ValuesRowDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valuesRowDefinition; }
	}

	public final ValuesRowDefinitionContext valuesRowDefinition() throws RecognitionException {
		ValuesRowDefinitionContext _localctx = new ValuesRowDefinitionContext(_ctx, getState());
		enterRule(_localctx, 152, RULE_valuesRowDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1113);
			match(LR_BRACKET);
			setState(1114);
			constant();
			setState(1119);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1115);
				match(COMMA);
				setState(1116);
				constant();
				}
				}
				setState(1121);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1122);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InsertMulStatementCompatibilityContext extends ParserRuleContext {
		public TerminalNode KW_BEGIN() { return getToken(FlinkSQLParser.KW_BEGIN, 0); }
		public TerminalNode KW_STATEMENT() { return getToken(FlinkSQLParser.KW_STATEMENT, 0); }
		public TerminalNode KW_SET() { return getToken(FlinkSQLParser.KW_SET, 0); }
		public List<TerminalNode> SEMICOLON() { return getTokens(FlinkSQLParser.SEMICOLON); }
		public TerminalNode SEMICOLON(int i) {
			return getToken(FlinkSQLParser.SEMICOLON, i);
		}
		public TerminalNode KW_END() { return getToken(FlinkSQLParser.KW_END, 0); }
		public List<InsertSimpleStatementContext> insertSimpleStatement() {
			return getRuleContexts(InsertSimpleStatementContext.class);
		}
		public InsertSimpleStatementContext insertSimpleStatement(int i) {
			return getRuleContext(InsertSimpleStatementContext.class,i);
		}
		public InsertMulStatementCompatibilityContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_insertMulStatementCompatibility; }
	}

	public final InsertMulStatementCompatibilityContext insertMulStatementCompatibility() throws RecognitionException {
		InsertMulStatementCompatibilityContext _localctx = new InsertMulStatementCompatibilityContext(_ctx, getState());
		enterRule(_localctx, 154, RULE_insertMulStatementCompatibility);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1124);
			match(KW_BEGIN);
			setState(1125);
			match(KW_STATEMENT);
			setState(1126);
			match(KW_SET);
			setState(1127);
			match(SEMICOLON);
			setState(1131); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(1128);
				insertSimpleStatement();
				setState(1129);
				match(SEMICOLON);
				}
				}
				setState(1133); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==KW_INSERT );
			setState(1135);
			match(KW_END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InsertMulStatementContext extends ParserRuleContext {
		public TerminalNode KW_STATEMENT() { return getToken(FlinkSQLParser.KW_STATEMENT, 0); }
		public TerminalNode KW_SET() { return getToken(FlinkSQLParser.KW_SET, 0); }
		public TerminalNode KW_BEGIN() { return getToken(FlinkSQLParser.KW_BEGIN, 0); }
		public TerminalNode KW_END() { return getToken(FlinkSQLParser.KW_END, 0); }
		public List<InsertSimpleStatementContext> insertSimpleStatement() {
			return getRuleContexts(InsertSimpleStatementContext.class);
		}
		public InsertSimpleStatementContext insertSimpleStatement(int i) {
			return getRuleContext(InsertSimpleStatementContext.class,i);
		}
		public List<TerminalNode> SEMICOLON() { return getTokens(FlinkSQLParser.SEMICOLON); }
		public TerminalNode SEMICOLON(int i) {
			return getToken(FlinkSQLParser.SEMICOLON, i);
		}
		public InsertMulStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_insertMulStatement; }
	}

	public final InsertMulStatementContext insertMulStatement() throws RecognitionException {
		InsertMulStatementContext _localctx = new InsertMulStatementContext(_ctx, getState());
		enterRule(_localctx, 156, RULE_insertMulStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1137);
			match(KW_STATEMENT);
			setState(1138);
			match(KW_SET);
			setState(1139);
			match(KW_BEGIN);
			setState(1143); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(1140);
				insertSimpleStatement();
				setState(1141);
				match(SEMICOLON);
				}
				}
				setState(1145); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==KW_INSERT );
			setState(1147);
			match(KW_END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QueryStatementContext extends ParserRuleContext {
		public QueryStatementContext left;
		public Token operator;
		public QueryStatementContext right;
		public ValuesCaluseContext valuesCaluse() {
			return getRuleContext(ValuesCaluseContext.class,0);
		}
		public WithClauseContext withClause() {
			return getRuleContext(WithClauseContext.class,0);
		}
		public List<QueryStatementContext> queryStatement() {
			return getRuleContexts(QueryStatementContext.class);
		}
		public QueryStatementContext queryStatement(int i) {
			return getRuleContext(QueryStatementContext.class,i);
		}
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public SelectClauseContext selectClause() {
			return getRuleContext(SelectClauseContext.class,0);
		}
		public OrderByCaluseContext orderByCaluse() {
			return getRuleContext(OrderByCaluseContext.class,0);
		}
		public LimitClauseContext limitClause() {
			return getRuleContext(LimitClauseContext.class,0);
		}
		public SelectStatementContext selectStatement() {
			return getRuleContext(SelectStatementContext.class,0);
		}
		public TerminalNode KW_INTERSECT() { return getToken(FlinkSQLParser.KW_INTERSECT, 0); }
		public TerminalNode KW_UNION() { return getToken(FlinkSQLParser.KW_UNION, 0); }
		public TerminalNode KW_EXCEPT() { return getToken(FlinkSQLParser.KW_EXCEPT, 0); }
		public TerminalNode KW_ALL() { return getToken(FlinkSQLParser.KW_ALL, 0); }
		public QueryStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_queryStatement; }
	}

	public final QueryStatementContext queryStatement() throws RecognitionException {
		return queryStatement(0);
	}

	private QueryStatementContext queryStatement(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		QueryStatementContext _localctx = new QueryStatementContext(_ctx, _parentState);
		QueryStatementContext _prevctx = _localctx;
		int _startState = 158;
		enterRecursionRule(_localctx, 158, RULE_queryStatement, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1172);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,117,_ctx) ) {
			case 1:
				{
				setState(1150);
				valuesCaluse();
				}
				break;
			case 2:
				{
				setState(1151);
				withClause();
				setState(1152);
				queryStatement(5);
				}
				break;
			case 3:
				{
				setState(1154);
				match(LR_BRACKET);
				setState(1155);
				queryStatement(0);
				setState(1156);
				match(RR_BRACKET);
				}
				break;
			case 4:
				{
				setState(1158);
				selectClause();
				setState(1160);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,113,_ctx) ) {
				case 1:
					{
					setState(1159);
					orderByCaluse();
					}
					break;
				}
				setState(1163);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,114,_ctx) ) {
				case 1:
					{
					setState(1162);
					limitClause();
					}
					break;
				}
				}
				break;
			case 5:
				{
				setState(1165);
				selectStatement();
				setState(1167);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,115,_ctx) ) {
				case 1:
					{
					setState(1166);
					orderByCaluse();
					}
					break;
				}
				setState(1170);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,116,_ctx) ) {
				case 1:
					{
					setState(1169);
					limitClause();
					}
					break;
				}
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(1188);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,121,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new QueryStatementContext(_parentctx, _parentState);
					_localctx.left = _prevctx;
					_localctx.left = _prevctx;
					pushNewRecursionContext(_localctx, _startState, RULE_queryStatement);
					setState(1174);
					if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
					setState(1175);
					((QueryStatementContext)_localctx).operator = _input.LT(1);
					_la = _input.LA(1);
					if ( !(_la==KW_EXCEPT || _la==KW_INTERSECT || _la==KW_UNION) ) {
						((QueryStatementContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(1177);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==KW_ALL) {
						{
						setState(1176);
						match(KW_ALL);
						}
					}

					setState(1179);
					((QueryStatementContext)_localctx).right = queryStatement(0);
					setState(1181);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,119,_ctx) ) {
					case 1:
						{
						setState(1180);
						orderByCaluse();
						}
						break;
					}
					setState(1184);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,120,_ctx) ) {
					case 1:
						{
						setState(1183);
						limitClause();
						}
						break;
					}
					}
					} 
				}
				setState(1190);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,121,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ValuesCaluseContext extends ParserRuleContext {
		public TerminalNode KW_VALUES() { return getToken(FlinkSQLParser.KW_VALUES, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public ValuesCaluseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valuesCaluse; }
	}

	public final ValuesCaluseContext valuesCaluse() throws RecognitionException {
		ValuesCaluseContext _localctx = new ValuesCaluseContext(_ctx, getState());
		enterRule(_localctx, 160, RULE_valuesCaluse);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1191);
			match(KW_VALUES);
			setState(1192);
			expression();
			setState(1197);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,122,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1193);
					match(COMMA);
					setState(1194);
					expression();
					}
					} 
				}
				setState(1199);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,122,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WithClauseContext extends ParserRuleContext {
		public TerminalNode KW_WITH() { return getToken(FlinkSQLParser.KW_WITH, 0); }
		public List<WithItemContext> withItem() {
			return getRuleContexts(WithItemContext.class);
		}
		public WithItemContext withItem(int i) {
			return getRuleContext(WithItemContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public WithClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_withClause; }
	}

	public final WithClauseContext withClause() throws RecognitionException {
		WithClauseContext _localctx = new WithClauseContext(_ctx, getState());
		enterRule(_localctx, 162, RULE_withClause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1200);
			match(KW_WITH);
			setState(1201);
			withItem();
			setState(1206);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1202);
				match(COMMA);
				setState(1203);
				withItem();
				}
				}
				setState(1208);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WithItemContext extends ParserRuleContext {
		public WithItemNameContext withItemName() {
			return getRuleContext(WithItemNameContext.class,0);
		}
		public TerminalNode KW_AS() { return getToken(FlinkSQLParser.KW_AS, 0); }
		public List<TerminalNode> LR_BRACKET() { return getTokens(FlinkSQLParser.LR_BRACKET); }
		public TerminalNode LR_BRACKET(int i) {
			return getToken(FlinkSQLParser.LR_BRACKET, i);
		}
		public QueryStatementContext queryStatement() {
			return getRuleContext(QueryStatementContext.class,0);
		}
		public List<TerminalNode> RR_BRACKET() { return getTokens(FlinkSQLParser.RR_BRACKET); }
		public TerminalNode RR_BRACKET(int i) {
			return getToken(FlinkSQLParser.RR_BRACKET, i);
		}
		public List<ColumnNameContext> columnName() {
			return getRuleContexts(ColumnNameContext.class);
		}
		public ColumnNameContext columnName(int i) {
			return getRuleContext(ColumnNameContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public WithItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_withItem; }
	}

	public final WithItemContext withItem() throws RecognitionException {
		WithItemContext _localctx = new WithItemContext(_ctx, getState());
		enterRule(_localctx, 164, RULE_withItem);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1209);
			withItemName();
			setState(1221);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LR_BRACKET) {
				{
				setState(1210);
				match(LR_BRACKET);
				setState(1211);
				columnName();
				setState(1216);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1212);
					match(COMMA);
					setState(1213);
					columnName();
					}
					}
					setState(1218);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1219);
				match(RR_BRACKET);
				}
			}

			setState(1223);
			match(KW_AS);
			setState(1224);
			match(LR_BRACKET);
			setState(1225);
			queryStatement(0);
			setState(1226);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WithItemNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public WithItemNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_withItemName; }
	}

	public final WithItemNameContext withItemName() throws RecognitionException {
		WithItemNameContext _localctx = new WithItemNameContext(_ctx, getState());
		enterRule(_localctx, 166, RULE_withItemName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1228);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SelectStatementContext extends ParserRuleContext {
		public SelectClauseContext selectClause() {
			return getRuleContext(SelectClauseContext.class,0);
		}
		public FromClauseContext fromClause() {
			return getRuleContext(FromClauseContext.class,0);
		}
		public WhereClauseContext whereClause() {
			return getRuleContext(WhereClauseContext.class,0);
		}
		public GroupByClauseContext groupByClause() {
			return getRuleContext(GroupByClauseContext.class,0);
		}
		public HavingClauseContext havingClause() {
			return getRuleContext(HavingClauseContext.class,0);
		}
		public WindowClauseContext windowClause() {
			return getRuleContext(WindowClauseContext.class,0);
		}
		public MatchRecognizeClauseContext matchRecognizeClause() {
			return getRuleContext(MatchRecognizeClauseContext.class,0);
		}
		public SelectStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selectStatement; }
	}

	public final SelectStatementContext selectStatement() throws RecognitionException {
		SelectStatementContext _localctx = new SelectStatementContext(_ctx, getState());
		enterRule(_localctx, 168, RULE_selectStatement);
		try {
			setState(1248);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,130,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1230);
				selectClause();
				setState(1231);
				fromClause();
				setState(1233);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,126,_ctx) ) {
				case 1:
					{
					setState(1232);
					whereClause();
					}
					break;
				}
				setState(1236);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,127,_ctx) ) {
				case 1:
					{
					setState(1235);
					groupByClause();
					}
					break;
				}
				setState(1239);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,128,_ctx) ) {
				case 1:
					{
					setState(1238);
					havingClause();
					}
					break;
				}
				setState(1242);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,129,_ctx) ) {
				case 1:
					{
					setState(1241);
					windowClause();
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1244);
				selectClause();
				setState(1245);
				fromClause();
				setState(1246);
				matchRecognizeClause();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SelectClauseContext extends ParserRuleContext {
		public TerminalNode KW_SELECT() { return getToken(FlinkSQLParser.KW_SELECT, 0); }
		public TerminalNode ASTERISK_SIGN() { return getToken(FlinkSQLParser.ASTERISK_SIGN, 0); }
		public List<ProjectItemDefinitionContext> projectItemDefinition() {
			return getRuleContexts(ProjectItemDefinitionContext.class);
		}
		public ProjectItemDefinitionContext projectItemDefinition(int i) {
			return getRuleContext(ProjectItemDefinitionContext.class,i);
		}
		public SetQuantifierContext setQuantifier() {
			return getRuleContext(SetQuantifierContext.class,0);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public SelectClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selectClause; }
	}

	public final SelectClauseContext selectClause() throws RecognitionException {
		SelectClauseContext _localctx = new SelectClauseContext(_ctx, getState());
		enterRule(_localctx, 170, RULE_selectClause);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1250);
			match(KW_SELECT);
			setState(1252);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_ALL || _la==KW_DISTINCT) {
				{
				setState(1251);
				setQuantifier();
				}
			}

			setState(1263);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,133,_ctx) ) {
			case 1:
				{
				setState(1254);
				match(ASTERISK_SIGN);
				}
				break;
			case 2:
				{
				setState(1255);
				projectItemDefinition();
				setState(1260);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,132,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(1256);
						match(COMMA);
						setState(1257);
						projectItemDefinition();
						}
						} 
					}
					setState(1262);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,132,_ctx);
				}
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProjectItemDefinitionContext extends ParserRuleContext {
		public OverWindowItemContext overWindowItem() {
			return getRuleContext(OverWindowItemContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode KW_AS() { return getToken(FlinkSQLParser.KW_AS, 0); }
		public ProjectItemDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_projectItemDefinition; }
	}

	public final ProjectItemDefinitionContext projectItemDefinition() throws RecognitionException {
		ProjectItemDefinitionContext _localctx = new ProjectItemDefinitionContext(_ctx, getState());
		enterRule(_localctx, 172, RULE_projectItemDefinition);
		int _la;
		try {
			setState(1273);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,136,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1265);
				overWindowItem();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1266);
				expression();
				setState(1271);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,135,_ctx) ) {
				case 1:
					{
					setState(1268);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==KW_AS) {
						{
						setState(1267);
						match(KW_AS);
						}
					}

					setState(1270);
					expression();
					}
					break;
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OverWindowItemContext extends ParserRuleContext {
		public PrimaryExpressionContext primaryExpression() {
			return getRuleContext(PrimaryExpressionContext.class,0);
		}
		public TerminalNode KW_OVER() { return getToken(FlinkSQLParser.KW_OVER, 0); }
		public WindowSpecContext windowSpec() {
			return getRuleContext(WindowSpecContext.class,0);
		}
		public TerminalNode KW_AS() { return getToken(FlinkSQLParser.KW_AS, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ErrorCapturingIdentifierContext errorCapturingIdentifier() {
			return getRuleContext(ErrorCapturingIdentifierContext.class,0);
		}
		public OverWindowItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_overWindowItem; }
	}

	public final OverWindowItemContext overWindowItem() throws RecognitionException {
		OverWindowItemContext _localctx = new OverWindowItemContext(_ctx, getState());
		enterRule(_localctx, 174, RULE_overWindowItem);
		try {
			setState(1287);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,137,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1275);
				primaryExpression(0);
				setState(1276);
				match(KW_OVER);
				setState(1277);
				windowSpec();
				setState(1278);
				match(KW_AS);
				setState(1279);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1281);
				primaryExpression(0);
				setState(1282);
				match(KW_OVER);
				setState(1283);
				errorCapturingIdentifier();
				setState(1284);
				match(KW_AS);
				setState(1285);
				identifier();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FromClauseContext extends ParserRuleContext {
		public TerminalNode KW_FROM() { return getToken(FlinkSQLParser.KW_FROM, 0); }
		public TableExpressionContext tableExpression() {
			return getRuleContext(TableExpressionContext.class,0);
		}
		public FromClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fromClause; }
	}

	public final FromClauseContext fromClause() throws RecognitionException {
		FromClauseContext _localctx = new FromClauseContext(_ctx, getState());
		enterRule(_localctx, 176, RULE_fromClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1289);
			match(KW_FROM);
			setState(1290);
			tableExpression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TableExpressionContext extends ParserRuleContext {
		public List<TableReferenceContext> tableReference() {
			return getRuleContexts(TableReferenceContext.class);
		}
		public TableReferenceContext tableReference(int i) {
			return getRuleContext(TableReferenceContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public InlineDataValueClauseContext inlineDataValueClause() {
			return getRuleContext(InlineDataValueClauseContext.class,0);
		}
		public WindoTVFClauseContext windoTVFClause() {
			return getRuleContext(WindoTVFClauseContext.class,0);
		}
		public List<TableExpressionContext> tableExpression() {
			return getRuleContexts(TableExpressionContext.class);
		}
		public TableExpressionContext tableExpression(int i) {
			return getRuleContext(TableExpressionContext.class,i);
		}
		public TerminalNode KW_CROSS() { return getToken(FlinkSQLParser.KW_CROSS, 0); }
		public TerminalNode KW_JOIN() { return getToken(FlinkSQLParser.KW_JOIN, 0); }
		public TerminalNode KW_NATURAL() { return getToken(FlinkSQLParser.KW_NATURAL, 0); }
		public TerminalNode KW_OUTER() { return getToken(FlinkSQLParser.KW_OUTER, 0); }
		public JoinConditionContext joinCondition() {
			return getRuleContext(JoinConditionContext.class,0);
		}
		public TerminalNode KW_LEFT() { return getToken(FlinkSQLParser.KW_LEFT, 0); }
		public TerminalNode KW_RIGHT() { return getToken(FlinkSQLParser.KW_RIGHT, 0); }
		public TerminalNode KW_FULL() { return getToken(FlinkSQLParser.KW_FULL, 0); }
		public TerminalNode KW_INNER() { return getToken(FlinkSQLParser.KW_INNER, 0); }
		public TableExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableExpression; }
	}

	public final TableExpressionContext tableExpression() throws RecognitionException {
		return tableExpression(0);
	}

	private TableExpressionContext tableExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		TableExpressionContext _localctx = new TableExpressionContext(_ctx, _parentState);
		TableExpressionContext _prevctx = _localctx;
		int _startState = 178;
		enterRecursionRule(_localctx, 178, RULE_tableExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1303);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,139,_ctx) ) {
			case 1:
				{
				setState(1293);
				tableReference();
				setState(1298);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,138,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(1294);
						match(COMMA);
						setState(1295);
						tableReference();
						}
						} 
					}
					setState(1300);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,138,_ctx);
				}
				}
				break;
			case 2:
				{
				setState(1301);
				inlineDataValueClause();
				}
				break;
			case 3:
				{
				setState(1302);
				windoTVFClause();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(1348);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,150,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(1346);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,149,_ctx) ) {
					case 1:
						{
						_localctx = new TableExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_tableExpression);
						setState(1305);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(1306);
						match(KW_CROSS);
						setState(1307);
						match(KW_JOIN);
						setState(1308);
						tableExpression(4);
						}
						break;
					case 2:
						{
						_localctx = new TableExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_tableExpression);
						setState(1309);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(1311);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==KW_NATURAL) {
							{
							setState(1310);
							match(KW_NATURAL);
							}
						}

						setState(1314);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (((((_la - 256)) & ~0x3f) == 0 && ((1L << (_la - 256)) & ((1L << (KW_FULL - 256)) | (1L << (KW_INNER - 256)) | (1L << (KW_LEFT - 256)))) != 0) || _la==KW_RIGHT) {
							{
							setState(1313);
							_la = _input.LA(1);
							if ( !(((((_la - 256)) & ~0x3f) == 0 && ((1L << (_la - 256)) & ((1L << (KW_FULL - 256)) | (1L << (KW_INNER - 256)) | (1L << (KW_LEFT - 256)))) != 0) || _la==KW_RIGHT) ) {
							_errHandler.recoverInline(this);
							}
							else {
								if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
								_errHandler.reportMatch(this);
								consume();
							}
							}
						}

						setState(1317);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==KW_OUTER) {
							{
							setState(1316);
							match(KW_OUTER);
							}
						}

						setState(1319);
						match(KW_JOIN);
						setState(1320);
						tableExpression(0);
						setState(1322);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,143,_ctx) ) {
						case 1:
							{
							setState(1321);
							joinCondition();
							}
							break;
						}
						}
						break;
					case 3:
						{
						_localctx = new TableExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_tableExpression);
						setState(1324);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(1326);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==KW_NATURAL) {
							{
							setState(1325);
							match(KW_NATURAL);
							}
						}

						setState(1329);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (((((_la - 256)) & ~0x3f) == 0 && ((1L << (_la - 256)) & ((1L << (KW_FULL - 256)) | (1L << (KW_INNER - 256)) | (1L << (KW_LEFT - 256)))) != 0) || _la==KW_RIGHT) {
							{
							setState(1328);
							_la = _input.LA(1);
							if ( !(((((_la - 256)) & ~0x3f) == 0 && ((1L << (_la - 256)) & ((1L << (KW_FULL - 256)) | (1L << (KW_INNER - 256)) | (1L << (KW_LEFT - 256)))) != 0) || _la==KW_RIGHT) ) {
							_errHandler.recoverInline(this);
							}
							else {
								if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
								_errHandler.reportMatch(this);
								consume();
							}
							}
						}

						setState(1332);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==KW_OUTER) {
							{
							setState(1331);
							match(KW_OUTER);
							}
						}

						setState(1334);
						match(KW_JOIN);
						setState(1335);
						tableExpression(0);
						setState(1337);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,147,_ctx) ) {
						case 1:
							{
							setState(1336);
							joinCondition();
							}
							break;
						}
						setState(1343);
						_errHandler.sync(this);
						_alt = getInterpreter().adaptivePredict(_input,148,_ctx);
						while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
							if ( _alt==1 ) {
								{
								{
								setState(1339);
								match(COMMA);
								setState(1340);
								tableReference();
								}
								} 
							}
							setState(1345);
							_errHandler.sync(this);
							_alt = getInterpreter().adaptivePredict(_input,148,_ctx);
						}
						}
						break;
					}
					} 
				}
				setState(1350);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,150,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class TableReferenceContext extends ParserRuleContext {
		public TablePrimaryContext tablePrimary() {
			return getRuleContext(TablePrimaryContext.class,0);
		}
		public TableAliasContext tableAlias() {
			return getRuleContext(TableAliasContext.class,0);
		}
		public TableReferenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableReference; }
	}

	public final TableReferenceContext tableReference() throws RecognitionException {
		TableReferenceContext _localctx = new TableReferenceContext(_ctx, getState());
		enterRule(_localctx, 180, RULE_tableReference);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1351);
			tablePrimary();
			setState(1353);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,151,_ctx) ) {
			case 1:
				{
				setState(1352);
				tableAlias();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TablePrimaryContext extends ParserRuleContext {
		public TablePathContext tablePath() {
			return getRuleContext(TablePathContext.class,0);
		}
		public TerminalNode KW_TABLE() { return getToken(FlinkSQLParser.KW_TABLE, 0); }
		public SystemTimePeriodContext systemTimePeriod() {
			return getRuleContext(SystemTimePeriodContext.class,0);
		}
		public CorrelationNameContext correlationName() {
			return getRuleContext(CorrelationNameContext.class,0);
		}
		public TerminalNode KW_AS() { return getToken(FlinkSQLParser.KW_AS, 0); }
		public TerminalNode KW_LATERAL() { return getToken(FlinkSQLParser.KW_LATERAL, 0); }
		public List<TerminalNode> LR_BRACKET() { return getTokens(FlinkSQLParser.LR_BRACKET); }
		public TerminalNode LR_BRACKET(int i) {
			return getToken(FlinkSQLParser.LR_BRACKET, i);
		}
		public FunctionNameContext functionName() {
			return getRuleContext(FunctionNameContext.class,0);
		}
		public List<FunctionParamContext> functionParam() {
			return getRuleContexts(FunctionParamContext.class);
		}
		public FunctionParamContext functionParam(int i) {
			return getRuleContext(FunctionParamContext.class,i);
		}
		public List<TerminalNode> RR_BRACKET() { return getTokens(FlinkSQLParser.RR_BRACKET); }
		public TerminalNode RR_BRACKET(int i) {
			return getToken(FlinkSQLParser.RR_BRACKET, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public QueryStatementContext queryStatement() {
			return getRuleContext(QueryStatementContext.class,0);
		}
		public TableAliasContext tableAlias() {
			return getRuleContext(TableAliasContext.class,0);
		}
		public List<ProjectItemDefinitionContext> projectItemDefinition() {
			return getRuleContexts(ProjectItemDefinitionContext.class);
		}
		public ProjectItemDefinitionContext projectItemDefinition(int i) {
			return getRuleContext(ProjectItemDefinitionContext.class,i);
		}
		public TerminalNode KW_UNNEST() { return getToken(FlinkSQLParser.KW_UNNEST, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TablePrimaryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tablePrimary; }
	}

	public final TablePrimaryContext tablePrimary() throws RecognitionException {
		TablePrimaryContext _localctx = new TablePrimaryContext(_ctx, getState());
		enterRule(_localctx, 182, RULE_tablePrimary);
		int _la;
		try {
			setState(1424);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,160,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1356);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_TABLE) {
					{
					setState(1355);
					match(KW_TABLE);
					}
				}

				setState(1358);
				tablePath();
				setState(1360);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,153,_ctx) ) {
				case 1:
					{
					setState(1359);
					systemTimePeriod();
					}
					break;
				}
				setState(1366);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,155,_ctx) ) {
				case 1:
					{
					setState(1363);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==KW_AS) {
						{
						setState(1362);
						match(KW_AS);
						}
					}

					setState(1365);
					correlationName();
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1368);
				match(KW_LATERAL);
				setState(1369);
				match(KW_TABLE);
				setState(1370);
				match(LR_BRACKET);
				setState(1371);
				functionName();
				setState(1372);
				match(LR_BRACKET);
				setState(1373);
				functionParam();
				setState(1378);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1374);
					match(COMMA);
					setState(1375);
					functionParam();
					}
					}
					setState(1380);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1381);
				match(RR_BRACKET);
				setState(1382);
				match(RR_BRACKET);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1385);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_LATERAL) {
					{
					setState(1384);
					match(KW_LATERAL);
					}
				}

				setState(1387);
				match(LR_BRACKET);
				setState(1388);
				queryStatement(0);
				setState(1389);
				match(RR_BRACKET);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1391);
				match(KW_LATERAL);
				setState(1392);
				match(KW_TABLE);
				setState(1393);
				match(LR_BRACKET);
				setState(1394);
				functionName();
				setState(1395);
				match(LR_BRACKET);
				setState(1396);
				functionParam();
				setState(1401);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1397);
					match(COMMA);
					setState(1398);
					functionParam();
					}
					}
					setState(1403);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1404);
				match(RR_BRACKET);
				setState(1405);
				match(RR_BRACKET);
				setState(1406);
				match(KW_AS);
				setState(1407);
				tableAlias();
				setState(1408);
				match(LR_BRACKET);
				setState(1409);
				projectItemDefinition();
				setState(1414);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1410);
					match(COMMA);
					setState(1411);
					projectItemDefinition();
					}
					}
					setState(1416);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1417);
				match(RR_BRACKET);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1419);
				match(KW_UNNEST);
				setState(1420);
				match(LR_BRACKET);
				setState(1421);
				expression();
				setState(1422);
				match(RR_BRACKET);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SystemTimePeriodContext extends ParserRuleContext {
		public TerminalNode KW_FOR() { return getToken(FlinkSQLParser.KW_FOR, 0); }
		public TerminalNode KW_SYSTEM_TIME() { return getToken(FlinkSQLParser.KW_SYSTEM_TIME, 0); }
		public TerminalNode KW_AS() { return getToken(FlinkSQLParser.KW_AS, 0); }
		public TerminalNode KW_OF() { return getToken(FlinkSQLParser.KW_OF, 0); }
		public DateTimeExpressionContext dateTimeExpression() {
			return getRuleContext(DateTimeExpressionContext.class,0);
		}
		public SystemTimePeriodContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_systemTimePeriod; }
	}

	public final SystemTimePeriodContext systemTimePeriod() throws RecognitionException {
		SystemTimePeriodContext _localctx = new SystemTimePeriodContext(_ctx, getState());
		enterRule(_localctx, 184, RULE_systemTimePeriod);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1426);
			match(KW_FOR);
			setState(1427);
			match(KW_SYSTEM_TIME);
			setState(1428);
			match(KW_AS);
			setState(1429);
			match(KW_OF);
			setState(1430);
			dateTimeExpression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DateTimeExpressionContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public DateTimeExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dateTimeExpression; }
	}

	public final DateTimeExpressionContext dateTimeExpression() throws RecognitionException {
		DateTimeExpressionContext _localctx = new DateTimeExpressionContext(_ctx, getState());
		enterRule(_localctx, 186, RULE_dateTimeExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1432);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InlineDataValueClauseContext extends ParserRuleContext {
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public ValuesDefinitionContext valuesDefinition() {
			return getRuleContext(ValuesDefinitionContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public TableAliasContext tableAlias() {
			return getRuleContext(TableAliasContext.class,0);
		}
		public InlineDataValueClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inlineDataValueClause; }
	}

	public final InlineDataValueClauseContext inlineDataValueClause() throws RecognitionException {
		InlineDataValueClauseContext _localctx = new InlineDataValueClauseContext(_ctx, getState());
		enterRule(_localctx, 188, RULE_inlineDataValueClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1434);
			match(LR_BRACKET);
			setState(1435);
			valuesDefinition();
			setState(1436);
			match(RR_BRACKET);
			setState(1437);
			tableAlias();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WindoTVFClauseContext extends ParserRuleContext {
		public TerminalNode KW_TABLE() { return getToken(FlinkSQLParser.KW_TABLE, 0); }
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public WindowTVFExressionContext windowTVFExression() {
			return getRuleContext(WindowTVFExressionContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public WindoTVFClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_windoTVFClause; }
	}

	public final WindoTVFClauseContext windoTVFClause() throws RecognitionException {
		WindoTVFClauseContext _localctx = new WindoTVFClauseContext(_ctx, getState());
		enterRule(_localctx, 190, RULE_windoTVFClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1439);
			match(KW_TABLE);
			setState(1440);
			match(LR_BRACKET);
			setState(1441);
			windowTVFExression();
			setState(1442);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WindowTVFExressionContext extends ParserRuleContext {
		public WindoTVFNameContext windoTVFName() {
			return getRuleContext(WindoTVFNameContext.class,0);
		}
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public List<WindowTVFParamContext> windowTVFParam() {
			return getRuleContexts(WindowTVFParamContext.class);
		}
		public WindowTVFParamContext windowTVFParam(int i) {
			return getRuleContext(WindowTVFParamContext.class,i);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public WindowTVFExressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_windowTVFExression; }
	}

	public final WindowTVFExressionContext windowTVFExression() throws RecognitionException {
		WindowTVFExressionContext _localctx = new WindowTVFExressionContext(_ctx, getState());
		enterRule(_localctx, 192, RULE_windowTVFExression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1444);
			windoTVFName();
			setState(1445);
			match(LR_BRACKET);
			setState(1446);
			windowTVFParam();
			setState(1451);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1447);
				match(COMMA);
				setState(1448);
				windowTVFParam();
				}
				}
				setState(1453);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1454);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WindoTVFNameContext extends ParserRuleContext {
		public TerminalNode KW_TUMBLE() { return getToken(FlinkSQLParser.KW_TUMBLE, 0); }
		public TerminalNode KW_HOP() { return getToken(FlinkSQLParser.KW_HOP, 0); }
		public TerminalNode KW_CUMULATE() { return getToken(FlinkSQLParser.KW_CUMULATE, 0); }
		public WindoTVFNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_windoTVFName; }
	}

	public final WindoTVFNameContext windoTVFName() throws RecognitionException {
		WindoTVFNameContext _localctx = new WindoTVFNameContext(_ctx, getState());
		enterRule(_localctx, 194, RULE_windoTVFName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1456);
			_la = _input.LA(1);
			if ( !(_la==KW_CUMULATE || _la==KW_HOP || _la==KW_TUMBLE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WindowTVFParamContext extends ParserRuleContext {
		public TerminalNode KW_TABLE() { return getToken(FlinkSQLParser.KW_TABLE, 0); }
		public TimeAttrColumnContext timeAttrColumn() {
			return getRuleContext(TimeAttrColumnContext.class,0);
		}
		public ColumnDescriptorContext columnDescriptor() {
			return getRuleContext(ColumnDescriptorContext.class,0);
		}
		public TimeIntervalExpressionContext timeIntervalExpression() {
			return getRuleContext(TimeIntervalExpressionContext.class,0);
		}
		public TerminalNode KW_DATA() { return getToken(FlinkSQLParser.KW_DATA, 0); }
		public TerminalNode DOUBLE_RIGHT_ARROW() { return getToken(FlinkSQLParser.DOUBLE_RIGHT_ARROW, 0); }
		public TerminalNode KW_TIMECOL() { return getToken(FlinkSQLParser.KW_TIMECOL, 0); }
		public TimeIntervalParamNameContext timeIntervalParamName() {
			return getRuleContext(TimeIntervalParamNameContext.class,0);
		}
		public WindowTVFParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_windowTVFParam; }
	}

	public final WindowTVFParamContext windowTVFParam() throws RecognitionException {
		WindowTVFParamContext _localctx = new WindowTVFParamContext(_ctx, getState());
		enterRule(_localctx, 196, RULE_windowTVFParam);
		try {
			setState(1473);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,162,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1458);
				match(KW_TABLE);
				setState(1459);
				timeAttrColumn();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1460);
				columnDescriptor();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1461);
				timeIntervalExpression();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1462);
				match(KW_DATA);
				setState(1463);
				match(DOUBLE_RIGHT_ARROW);
				setState(1464);
				match(KW_TABLE);
				setState(1465);
				timeAttrColumn();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1466);
				match(KW_TIMECOL);
				setState(1467);
				match(DOUBLE_RIGHT_ARROW);
				setState(1468);
				columnDescriptor();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1469);
				timeIntervalParamName();
				setState(1470);
				match(DOUBLE_RIGHT_ARROW);
				setState(1471);
				timeIntervalExpression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TimeIntervalParamNameContext extends ParserRuleContext {
		public TerminalNode KW_DATA() { return getToken(FlinkSQLParser.KW_DATA, 0); }
		public TerminalNode KW_TIMECOL() { return getToken(FlinkSQLParser.KW_TIMECOL, 0); }
		public TerminalNode KW_SIZE() { return getToken(FlinkSQLParser.KW_SIZE, 0); }
		public TerminalNode KW_OFFSET() { return getToken(FlinkSQLParser.KW_OFFSET, 0); }
		public TerminalNode KW_STEP() { return getToken(FlinkSQLParser.KW_STEP, 0); }
		public TerminalNode KW_SLIDE() { return getToken(FlinkSQLParser.KW_SLIDE, 0); }
		public TimeIntervalParamNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_timeIntervalParamName; }
	}

	public final TimeIntervalParamNameContext timeIntervalParamName() throws RecognitionException {
		TimeIntervalParamNameContext _localctx = new TimeIntervalParamNameContext(_ctx, getState());
		enterRule(_localctx, 198, RULE_timeIntervalParamName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1475);
			_la = _input.LA(1);
			if ( !(_la==KW_DATA || ((((_la - 141)) & ~0x3f) == 0 && ((1L << (_la - 141)) & ((1L << (KW_SIZE - 141)) | (1L << (KW_SLIDE - 141)) | (1L << (KW_STEP - 141)) | (1L << (KW_TIMECOL - 141)))) != 0) || _la==KW_OFFSET) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColumnDescriptorContext extends ParserRuleContext {
		public TerminalNode KW_DESCRIPTOR() { return getToken(FlinkSQLParser.KW_DESCRIPTOR, 0); }
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public ColumnDescriptorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_columnDescriptor; }
	}

	public final ColumnDescriptorContext columnDescriptor() throws RecognitionException {
		ColumnDescriptorContext _localctx = new ColumnDescriptorContext(_ctx, getState());
		enterRule(_localctx, 200, RULE_columnDescriptor);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1477);
			match(KW_DESCRIPTOR);
			setState(1478);
			match(LR_BRACKET);
			setState(1479);
			uid();
			setState(1480);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class JoinConditionContext extends ParserRuleContext {
		public TerminalNode KW_ON() { return getToken(FlinkSQLParser.KW_ON, 0); }
		public BooleanExpressionContext booleanExpression() {
			return getRuleContext(BooleanExpressionContext.class,0);
		}
		public TerminalNode KW_USING() { return getToken(FlinkSQLParser.KW_USING, 0); }
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public List<UidContext> uid() {
			return getRuleContexts(UidContext.class);
		}
		public UidContext uid(int i) {
			return getRuleContext(UidContext.class,i);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public JoinConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_joinCondition; }
	}

	public final JoinConditionContext joinCondition() throws RecognitionException {
		JoinConditionContext _localctx = new JoinConditionContext(_ctx, getState());
		enterRule(_localctx, 202, RULE_joinCondition);
		int _la;
		try {
			setState(1496);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_ON:
				enterOuterAlt(_localctx, 1);
				{
				setState(1482);
				match(KW_ON);
				setState(1483);
				booleanExpression(0);
				}
				break;
			case KW_USING:
				enterOuterAlt(_localctx, 2);
				{
				setState(1484);
				match(KW_USING);
				setState(1485);
				match(LR_BRACKET);
				setState(1486);
				uid();
				setState(1491);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1487);
					match(COMMA);
					setState(1488);
					uid();
					}
					}
					setState(1493);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1494);
				match(RR_BRACKET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WhereClauseContext extends ParserRuleContext {
		public TerminalNode KW_WHERE() { return getToken(FlinkSQLParser.KW_WHERE, 0); }
		public BooleanExpressionContext booleanExpression() {
			return getRuleContext(BooleanExpressionContext.class,0);
		}
		public WhereClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whereClause; }
	}

	public final WhereClauseContext whereClause() throws RecognitionException {
		WhereClauseContext _localctx = new WhereClauseContext(_ctx, getState());
		enterRule(_localctx, 204, RULE_whereClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1498);
			match(KW_WHERE);
			setState(1499);
			booleanExpression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GroupByClauseContext extends ParserRuleContext {
		public TerminalNode KW_GROUP() { return getToken(FlinkSQLParser.KW_GROUP, 0); }
		public TerminalNode KW_BY() { return getToken(FlinkSQLParser.KW_BY, 0); }
		public List<GroupItemDefinitionContext> groupItemDefinition() {
			return getRuleContexts(GroupItemDefinitionContext.class);
		}
		public GroupItemDefinitionContext groupItemDefinition(int i) {
			return getRuleContext(GroupItemDefinitionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public GroupByClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_groupByClause; }
	}

	public final GroupByClauseContext groupByClause() throws RecognitionException {
		GroupByClauseContext _localctx = new GroupByClauseContext(_ctx, getState());
		enterRule(_localctx, 206, RULE_groupByClause);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1501);
			match(KW_GROUP);
			setState(1502);
			match(KW_BY);
			setState(1503);
			groupItemDefinition();
			setState(1508);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,165,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1504);
					match(COMMA);
					setState(1505);
					groupItemDefinition();
					}
					} 
				}
				setState(1510);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,165,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GroupItemDefinitionContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public GroupWindowFunctionContext groupWindowFunction() {
			return getRuleContext(GroupWindowFunctionContext.class,0);
		}
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public GroupingSetsNotaionNameContext groupingSetsNotaionName() {
			return getRuleContext(GroupingSetsNotaionNameContext.class,0);
		}
		public GroupingSetsContext groupingSets() {
			return getRuleContext(GroupingSetsContext.class,0);
		}
		public List<GroupItemDefinitionContext> groupItemDefinition() {
			return getRuleContexts(GroupItemDefinitionContext.class);
		}
		public GroupItemDefinitionContext groupItemDefinition(int i) {
			return getRuleContext(GroupItemDefinitionContext.class,i);
		}
		public GroupItemDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_groupItemDefinition; }
	}

	public final GroupItemDefinitionContext groupItemDefinition() throws RecognitionException {
		GroupItemDefinitionContext _localctx = new GroupItemDefinitionContext(_ctx, getState());
		enterRule(_localctx, 208, RULE_groupItemDefinition);
		int _la;
		try {
			setState(1550);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,169,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1511);
				expression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1512);
				groupWindowFunction();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1513);
				match(LR_BRACKET);
				setState(1514);
				match(RR_BRACKET);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1515);
				match(LR_BRACKET);
				setState(1516);
				expression();
				setState(1521);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1517);
					match(COMMA);
					setState(1518);
					expression();
					}
					}
					setState(1523);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1524);
				match(RR_BRACKET);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1526);
				groupingSetsNotaionName();
				setState(1527);
				match(LR_BRACKET);
				setState(1528);
				expression();
				setState(1533);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1529);
					match(COMMA);
					setState(1530);
					expression();
					}
					}
					setState(1535);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1536);
				match(RR_BRACKET);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1538);
				groupingSets();
				setState(1539);
				match(LR_BRACKET);
				setState(1540);
				groupItemDefinition();
				setState(1545);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1541);
					match(COMMA);
					setState(1542);
					groupItemDefinition();
					}
					}
					setState(1547);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1548);
				match(RR_BRACKET);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GroupingSetsContext extends ParserRuleContext {
		public TerminalNode KW_GROUPING() { return getToken(FlinkSQLParser.KW_GROUPING, 0); }
		public TerminalNode KW_SETS() { return getToken(FlinkSQLParser.KW_SETS, 0); }
		public GroupingSetsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_groupingSets; }
	}

	public final GroupingSetsContext groupingSets() throws RecognitionException {
		GroupingSetsContext _localctx = new GroupingSetsContext(_ctx, getState());
		enterRule(_localctx, 210, RULE_groupingSets);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1552);
			match(KW_GROUPING);
			setState(1553);
			match(KW_SETS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GroupingSetsNotaionNameContext extends ParserRuleContext {
		public TerminalNode KW_CUBE() { return getToken(FlinkSQLParser.KW_CUBE, 0); }
		public TerminalNode KW_ROLLUP() { return getToken(FlinkSQLParser.KW_ROLLUP, 0); }
		public GroupingSetsNotaionNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_groupingSetsNotaionName; }
	}

	public final GroupingSetsNotaionNameContext groupingSetsNotaionName() throws RecognitionException {
		GroupingSetsNotaionNameContext _localctx = new GroupingSetsNotaionNameContext(_ctx, getState());
		enterRule(_localctx, 212, RULE_groupingSetsNotaionName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1555);
			_la = _input.LA(1);
			if ( !(_la==KW_CUBE || _la==KW_ROLLUP) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GroupWindowFunctionContext extends ParserRuleContext {
		public GroupWindowFunctionNameContext groupWindowFunctionName() {
			return getRuleContext(GroupWindowFunctionNameContext.class,0);
		}
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public TimeAttrColumnContext timeAttrColumn() {
			return getRuleContext(TimeAttrColumnContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(FlinkSQLParser.COMMA, 0); }
		public TimeIntervalExpressionContext timeIntervalExpression() {
			return getRuleContext(TimeIntervalExpressionContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public GroupWindowFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_groupWindowFunction; }
	}

	public final GroupWindowFunctionContext groupWindowFunction() throws RecognitionException {
		GroupWindowFunctionContext _localctx = new GroupWindowFunctionContext(_ctx, getState());
		enterRule(_localctx, 214, RULE_groupWindowFunction);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1557);
			groupWindowFunctionName();
			setState(1558);
			match(LR_BRACKET);
			setState(1559);
			timeAttrColumn();
			setState(1560);
			match(COMMA);
			setState(1561);
			timeIntervalExpression();
			setState(1562);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GroupWindowFunctionNameContext extends ParserRuleContext {
		public TerminalNode KW_TUMBLE() { return getToken(FlinkSQLParser.KW_TUMBLE, 0); }
		public TerminalNode KW_HOP() { return getToken(FlinkSQLParser.KW_HOP, 0); }
		public TerminalNode KW_SESSION() { return getToken(FlinkSQLParser.KW_SESSION, 0); }
		public GroupWindowFunctionNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_groupWindowFunctionName; }
	}

	public final GroupWindowFunctionNameContext groupWindowFunctionName() throws RecognitionException {
		GroupWindowFunctionNameContext _localctx = new GroupWindowFunctionNameContext(_ctx, getState());
		enterRule(_localctx, 216, RULE_groupWindowFunctionName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1564);
			_la = _input.LA(1);
			if ( !(_la==KW_HOP || _la==KW_SESSION || _la==KW_TUMBLE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TimeAttrColumnContext extends ParserRuleContext {
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public TimeAttrColumnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_timeAttrColumn; }
	}

	public final TimeAttrColumnContext timeAttrColumn() throws RecognitionException {
		TimeAttrColumnContext _localctx = new TimeAttrColumnContext(_ctx, getState());
		enterRule(_localctx, 218, RULE_timeAttrColumn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1566);
			uid();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class HavingClauseContext extends ParserRuleContext {
		public TerminalNode KW_HAVING() { return getToken(FlinkSQLParser.KW_HAVING, 0); }
		public BooleanExpressionContext booleanExpression() {
			return getRuleContext(BooleanExpressionContext.class,0);
		}
		public HavingClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_havingClause; }
	}

	public final HavingClauseContext havingClause() throws RecognitionException {
		HavingClauseContext _localctx = new HavingClauseContext(_ctx, getState());
		enterRule(_localctx, 220, RULE_havingClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1568);
			match(KW_HAVING);
			setState(1569);
			booleanExpression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WindowClauseContext extends ParserRuleContext {
		public TerminalNode KW_WINDOW() { return getToken(FlinkSQLParser.KW_WINDOW, 0); }
		public List<NamedWindowContext> namedWindow() {
			return getRuleContexts(NamedWindowContext.class);
		}
		public NamedWindowContext namedWindow(int i) {
			return getRuleContext(NamedWindowContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public WindowClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_windowClause; }
	}

	public final WindowClauseContext windowClause() throws RecognitionException {
		WindowClauseContext _localctx = new WindowClauseContext(_ctx, getState());
		enterRule(_localctx, 222, RULE_windowClause);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1571);
			match(KW_WINDOW);
			setState(1572);
			namedWindow();
			setState(1577);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,170,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1573);
					match(COMMA);
					setState(1574);
					namedWindow();
					}
					} 
				}
				setState(1579);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,170,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NamedWindowContext extends ParserRuleContext {
		public ErrorCapturingIdentifierContext name;
		public TerminalNode KW_AS() { return getToken(FlinkSQLParser.KW_AS, 0); }
		public WindowSpecContext windowSpec() {
			return getRuleContext(WindowSpecContext.class,0);
		}
		public ErrorCapturingIdentifierContext errorCapturingIdentifier() {
			return getRuleContext(ErrorCapturingIdentifierContext.class,0);
		}
		public NamedWindowContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namedWindow; }
	}

	public final NamedWindowContext namedWindow() throws RecognitionException {
		NamedWindowContext _localctx = new NamedWindowContext(_ctx, getState());
		enterRule(_localctx, 224, RULE_namedWindow);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1580);
			((NamedWindowContext)_localctx).name = errorCapturingIdentifier();
			setState(1581);
			match(KW_AS);
			setState(1582);
			windowSpec();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WindowSpecContext extends ParserRuleContext {
		public ErrorCapturingIdentifierContext name;
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public PartitionByClauseContext partitionByClause() {
			return getRuleContext(PartitionByClauseContext.class,0);
		}
		public OrderByCaluseContext orderByCaluse() {
			return getRuleContext(OrderByCaluseContext.class,0);
		}
		public WindowFrameContext windowFrame() {
			return getRuleContext(WindowFrameContext.class,0);
		}
		public ErrorCapturingIdentifierContext errorCapturingIdentifier() {
			return getRuleContext(ErrorCapturingIdentifierContext.class,0);
		}
		public WindowSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_windowSpec; }
	}

	public final WindowSpecContext windowSpec() throws RecognitionException {
		WindowSpecContext _localctx = new WindowSpecContext(_ctx, getState());
		enterRule(_localctx, 226, RULE_windowSpec);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1585);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << KW_ADD) | (1L << KW_ADMIN) | (1L << KW_AFTER) | (1L << KW_ANALYZE) | (1L << KW_ASC) | (1L << KW_BEFORE) | (1L << KW_BYTES) | (1L << KW_CASCADE) | (1L << KW_CATALOG) | (1L << KW_CATALOGS) | (1L << KW_CENTURY) | (1L << KW_CHAIN) | (1L << KW_CHANGELOG_MODE) | (1L << KW_CHARACTERS) | (1L << KW_COMMENT) | (1L << KW_COMPACT) | (1L << KW_COLUMNS) | (1L << KW_CONSTRAINTS) | (1L << KW_CONSTRUCTOR) | (1L << KW_CUMULATE) | (1L << KW_DATA) | (1L << KW_DATABASE) | (1L << KW_DATABASES) | (1L << KW_DAYS) | (1L << KW_DECADE) | (1L << KW_DEFINED) | (1L << KW_DESC) | (1L << KW_DESCRIPTOR) | (1L << KW_DIV) | (1L << KW_ENCODING) | (1L << KW_ENFORCED) | (1L << KW_ENGINE) | (1L << KW_ERROR) | (1L << KW_ESTIMATED_COST) | (1L << KW_EXCEPTION) | (1L << KW_EXCLUDE) | (1L << KW_EXCLUDING) | (1L << KW_EXTENDED) | (1L << KW_FILE) | (1L << KW_FINAL) | (1L << KW_FIRST) | (1L << KW_FOLLOWING) | (1L << KW_FORMAT) | (1L << KW_FORTRAN) | (1L << KW_FOUND) | (1L << KW_FRAC_SECOND) | (1L << KW_FUNCTIONS) | (1L << KW_GENERAL) | (1L << KW_GENERATED) | (1L << KW_GO) | (1L << KW_GOTO) | (1L << KW_GRANTED) | (1L << KW_HOP) | (1L << KW_HOURS) | (1L << KW_IF) | (1L << KW_IGNORE) | (1L << KW_INCREMENT))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (KW_INPUT - 64)) | (1L << (KW_INVOKER - 64)) | (1L << (KW_JAR - 64)) | (1L << (KW_JARS - 64)) | (1L << (KW_JAVA - 64)) | (1L << (KW_JSON - 64)) | (1L << (KW_JSON_EXECUTION_PLAN - 64)) | (1L << (KW_KEY - 64)) | (1L << (KW_KEY_MEMBER - 64)) | (1L << (KW_KEY_TYPE - 64)) | (1L << (KW_LABEL - 64)) | (1L << (KW_LAST - 64)) | (1L << (KW_LENGTH - 64)) | (1L << (KW_LEVEL - 64)) | (1L << (KW_LOAD - 64)) | (1L << (KW_MAP - 64)) | (1L << (KW_MICROSECOND - 64)) | (1L << (KW_MILLENNIUM - 64)) | (1L << (KW_MILLISECOND - 64)) | (1L << (KW_MINUTES - 64)) | (1L << (KW_MINVALUE - 64)) | (1L << (KW_MODIFY - 64)) | (1L << (KW_MODULES - 64)) | (1L << (KW_MONTHS - 64)) | (1L << (KW_NANOSECOND - 64)) | (1L << (KW_NULLS - 64)) | (1L << (KW_NUMBER - 64)) | (1L << (KW_OPTION - 64)) | (1L << (KW_OPTIONS - 64)) | (1L << (KW_ORDERING - 64)) | (1L << (KW_OUTPUT - 64)) | (1L << (KW_OVERWRITE - 64)) | (1L << (KW_OVERWRITING - 64)) | (1L << (KW_PARTITIONED - 64)) | (1L << (KW_PARTITIONS - 64)) | (1L << (KW_PASSING - 64)) | (1L << (KW_PAST - 64)) | (1L << (KW_PATH - 64)) | (1L << (KW_PLACING - 64)) | (1L << (KW_PLAN - 64)) | (1L << (KW_PRECEDING - 64)) | (1L << (KW_PRESERVE - 64)) | (1L << (KW_PRIOR - 64)) | (1L << (KW_PRIVILEGES - 64)) | (1L << (KW_PUBLIC - 64)) | (1L << (KW_PYTHON - 64)) | (1L << (KW_PYTHON_FILES - 64)) | (1L << (KW_PYTHON_REQUIREMENTS - 64)) | (1L << (KW_PYTHON_DEPENDENCIES - 64)) | (1L << (KW_PYTHON_JAR - 64)) | (1L << (KW_PYTHON_ARCHIVES - 64)) | (1L << (KW_PYTHON_PARAMETER - 64)) | (1L << (KW_QUARTER - 64)) | (1L << (KW_RAW - 64)) | (1L << (KW_READ - 64)) | (1L << (KW_RELATIVE - 64)) | (1L << (KW_REMOVE - 64)) | (1L << (KW_RENAME - 64)) | (1L << (KW_REPLACE - 64)) | (1L << (KW_RESPECT - 64)) | (1L << (KW_RESTART - 64)) | (1L << (KW_RESTRICT - 64)) | (1L << (KW_ROLE - 64)) | (1L << (KW_ROW_COUNT - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (KW_SCALA - 128)) | (1L << (KW_SCALAR - 128)) | (1L << (KW_SCALE - 128)) | (1L << (KW_SCHEMA - 128)) | (1L << (KW_SECONDS - 128)) | (1L << (KW_SECTION - 128)) | (1L << (KW_SECURITY - 128)) | (1L << (KW_SELF - 128)) | (1L << (KW_SERVER - 128)) | (1L << (KW_SERVER_NAME - 128)) | (1L << (KW_SESSION - 128)) | (1L << (KW_SETS - 128)) | (1L << (KW_SIMPLE - 128)) | (1L << (KW_SIZE - 128)) | (1L << (KW_SLIDE - 128)) | (1L << (KW_SOURCE - 128)) | (1L << (KW_SPACE - 128)) | (1L << (KW_STATE - 128)) | (1L << (KW_STATEMENT - 128)) | (1L << (KW_STEP - 128)) | (1L << (KW_STRING - 128)) | (1L << (KW_STRUCTURE - 128)) | (1L << (KW_STYLE - 128)) | (1L << (KW_TABLES - 128)) | (1L << (KW_TEMPORARY - 128)) | (1L << (KW_TIMECOL - 128)) | (1L << (KW_FLOOR - 128)) | (1L << (KW_TIMESTAMP_LTZ - 128)) | (1L << (KW_TIMESTAMPADD - 128)) | (1L << (KW_TIMESTAMPDIFF - 128)) | (1L << (KW_TRANSFORM - 128)) | (1L << (KW_TUMBLE - 128)) | (1L << (KW_TYPE - 128)) | (1L << (KW_UNDER - 128)) | (1L << (KW_UNLOAD - 128)) | (1L << (KW_USAGE - 128)) | (1L << (KW_USE - 128)) | (1L << (KW_UTF16 - 128)) | (1L << (KW_UTF32 - 128)) | (1L << (KW_UTF8 - 128)) | (1L << (KW_VERSION - 128)) | (1L << (KW_VIEW - 128)) | (1L << (KW_VIEWS - 128)) | (1L << (KW_VIRTUAL - 128)) | (1L << (KW_WATERMARK - 128)) | (1L << (KW_WATERMARKS - 128)) | (1L << (KW_WEEK - 128)) | (1L << (KW_WORK - 128)) | (1L << (KW_WRAPPER - 128)) | (1L << (KW_YEARS - 128)) | (1L << (KW_ZONE - 128)))) != 0) || ((((_la - 411)) & ~0x3f) == 0 && ((1L << (_la - 411)) & ((1L << (STRING_LITERAL - 411)) | (1L << (DIG_LITERAL - 411)) | (1L << (ID_LITERAL - 411)))) != 0)) {
				{
				setState(1584);
				((WindowSpecContext)_localctx).name = errorCapturingIdentifier();
				}
			}

			setState(1587);
			match(LR_BRACKET);
			setState(1589);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_PARTITION) {
				{
				setState(1588);
				partitionByClause();
				}
			}

			setState(1592);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_ORDER) {
				{
				setState(1591);
				orderByCaluse();
				}
			}

			setState(1595);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_RANGE || _la==KW_ROWS) {
				{
				setState(1594);
				windowFrame();
				}
			}

			setState(1597);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MatchRecognizeClauseContext extends ParserRuleContext {
		public TerminalNode KW_MATCH_RECOGNIZE() { return getToken(FlinkSQLParser.KW_MATCH_RECOGNIZE, 0); }
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public PatternVariablesDefinationContext patternVariablesDefination() {
			return getRuleContext(PatternVariablesDefinationContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public PartitionByClauseContext partitionByClause() {
			return getRuleContext(PartitionByClauseContext.class,0);
		}
		public OrderByCaluseContext orderByCaluse() {
			return getRuleContext(OrderByCaluseContext.class,0);
		}
		public MeasuresClauseContext measuresClause() {
			return getRuleContext(MeasuresClauseContext.class,0);
		}
		public OutputModeContext outputMode() {
			return getRuleContext(OutputModeContext.class,0);
		}
		public AfterMatchStrategyContext afterMatchStrategy() {
			return getRuleContext(AfterMatchStrategyContext.class,0);
		}
		public PatternDefinationContext patternDefination() {
			return getRuleContext(PatternDefinationContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode KW_AS() { return getToken(FlinkSQLParser.KW_AS, 0); }
		public MatchRecognizeClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_matchRecognizeClause; }
	}

	public final MatchRecognizeClauseContext matchRecognizeClause() throws RecognitionException {
		MatchRecognizeClauseContext _localctx = new MatchRecognizeClauseContext(_ctx, getState());
		enterRule(_localctx, 228, RULE_matchRecognizeClause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1599);
			match(KW_MATCH_RECOGNIZE);
			setState(1600);
			match(LR_BRACKET);
			setState(1602);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_PARTITION) {
				{
				setState(1601);
				partitionByClause();
				}
			}

			setState(1605);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_ORDER) {
				{
				setState(1604);
				orderByCaluse();
				}
			}

			setState(1608);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_MEASURES) {
				{
				setState(1607);
				measuresClause();
				}
			}

			setState(1611);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_ALL || _la==KW_ONE) {
				{
				setState(1610);
				outputMode();
				}
			}

			setState(1614);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_AFTER) {
				{
				setState(1613);
				afterMatchStrategy();
				}
			}

			setState(1617);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_PATTERN) {
				{
				setState(1616);
				patternDefination();
				}
			}

			setState(1619);
			patternVariablesDefination();
			setState(1620);
			match(RR_BRACKET);
			setState(1625);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,182,_ctx) ) {
			case 1:
				{
				setState(1622);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_AS) {
					{
					setState(1621);
					match(KW_AS);
					}
				}

				setState(1624);
				identifier();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OrderByCaluseContext extends ParserRuleContext {
		public TerminalNode KW_ORDER() { return getToken(FlinkSQLParser.KW_ORDER, 0); }
		public TerminalNode KW_BY() { return getToken(FlinkSQLParser.KW_BY, 0); }
		public List<OrderItemDefitionContext> orderItemDefition() {
			return getRuleContexts(OrderItemDefitionContext.class);
		}
		public OrderItemDefitionContext orderItemDefition(int i) {
			return getRuleContext(OrderItemDefitionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public OrderByCaluseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_orderByCaluse; }
	}

	public final OrderByCaluseContext orderByCaluse() throws RecognitionException {
		OrderByCaluseContext _localctx = new OrderByCaluseContext(_ctx, getState());
		enterRule(_localctx, 230, RULE_orderByCaluse);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1627);
			match(KW_ORDER);
			setState(1628);
			match(KW_BY);
			setState(1629);
			orderItemDefition();
			setState(1634);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,183,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1630);
					match(COMMA);
					setState(1631);
					orderItemDefition();
					}
					} 
				}
				setState(1636);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,183,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OrderItemDefitionContext extends ParserRuleContext {
		public Token ordering;
		public Token nullOrder;
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode KW_NULLS() { return getToken(FlinkSQLParser.KW_NULLS, 0); }
		public TerminalNode KW_ASC() { return getToken(FlinkSQLParser.KW_ASC, 0); }
		public TerminalNode KW_DESC() { return getToken(FlinkSQLParser.KW_DESC, 0); }
		public TerminalNode KW_LAST() { return getToken(FlinkSQLParser.KW_LAST, 0); }
		public TerminalNode KW_FIRST() { return getToken(FlinkSQLParser.KW_FIRST, 0); }
		public OrderItemDefitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_orderItemDefition; }
	}

	public final OrderItemDefitionContext orderItemDefition() throws RecognitionException {
		OrderItemDefitionContext _localctx = new OrderItemDefitionContext(_ctx, getState());
		enterRule(_localctx, 232, RULE_orderItemDefition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1637);
			expression();
			setState(1639);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,184,_ctx) ) {
			case 1:
				{
				setState(1638);
				((OrderItemDefitionContext)_localctx).ordering = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==KW_ASC || _la==KW_DESC) ) {
					((OrderItemDefitionContext)_localctx).ordering = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			}
			setState(1643);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,185,_ctx) ) {
			case 1:
				{
				setState(1641);
				match(KW_NULLS);
				setState(1642);
				((OrderItemDefitionContext)_localctx).nullOrder = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==KW_FIRST || _la==KW_LAST) ) {
					((OrderItemDefitionContext)_localctx).nullOrder = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LimitClauseContext extends ParserRuleContext {
		public ExpressionContext limit;
		public TerminalNode KW_LIMIT() { return getToken(FlinkSQLParser.KW_LIMIT, 0); }
		public TerminalNode KW_ALL() { return getToken(FlinkSQLParser.KW_ALL, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public LimitClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_limitClause; }
	}

	public final LimitClauseContext limitClause() throws RecognitionException {
		LimitClauseContext _localctx = new LimitClauseContext(_ctx, getState());
		enterRule(_localctx, 234, RULE_limitClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1645);
			match(KW_LIMIT);
			setState(1648);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_ALL:
				{
				setState(1646);
				match(KW_ALL);
				}
				break;
			case T__0:
			case KW_ADD:
			case KW_ADMIN:
			case KW_AFTER:
			case KW_ANALYZE:
			case KW_ASC:
			case KW_BEFORE:
			case KW_BYTES:
			case KW_CASCADE:
			case KW_CATALOG:
			case KW_CATALOGS:
			case KW_CENTURY:
			case KW_CHAIN:
			case KW_CHANGELOG_MODE:
			case KW_CHARACTERS:
			case KW_COMMENT:
			case KW_COMPACT:
			case KW_COLUMNS:
			case KW_CONSTRAINTS:
			case KW_CONSTRUCTOR:
			case KW_CUMULATE:
			case KW_DATA:
			case KW_DATABASE:
			case KW_DATABASES:
			case KW_DAYS:
			case KW_DECADE:
			case KW_DEFINED:
			case KW_DESC:
			case KW_DESCRIPTOR:
			case KW_DIV:
			case KW_ENCODING:
			case KW_ENFORCED:
			case KW_ENGINE:
			case KW_ERROR:
			case KW_ESTIMATED_COST:
			case KW_EXCEPTION:
			case KW_EXCLUDE:
			case KW_EXCLUDING:
			case KW_EXTENDED:
			case KW_FILE:
			case KW_FINAL:
			case KW_FIRST:
			case KW_FOLLOWING:
			case KW_FORMAT:
			case KW_FORTRAN:
			case KW_FOUND:
			case KW_FRAC_SECOND:
			case KW_FUNCTIONS:
			case KW_GENERAL:
			case KW_GENERATED:
			case KW_GO:
			case KW_GOTO:
			case KW_GRANTED:
			case KW_HOP:
			case KW_HOURS:
			case KW_IF:
			case KW_IGNORE:
			case KW_INCREMENT:
			case KW_INPUT:
			case KW_INVOKER:
			case KW_JAR:
			case KW_JARS:
			case KW_JAVA:
			case KW_JSON:
			case KW_JSON_EXECUTION_PLAN:
			case KW_KEY:
			case KW_KEY_MEMBER:
			case KW_KEY_TYPE:
			case KW_LABEL:
			case KW_LAST:
			case KW_LENGTH:
			case KW_LEVEL:
			case KW_LOAD:
			case KW_MAP:
			case KW_MICROSECOND:
			case KW_MILLENNIUM:
			case KW_MILLISECOND:
			case KW_MINUTES:
			case KW_MINVALUE:
			case KW_MODIFY:
			case KW_MODULES:
			case KW_MONTHS:
			case KW_NANOSECOND:
			case KW_NULLS:
			case KW_NUMBER:
			case KW_OPTION:
			case KW_OPTIONS:
			case KW_ORDERING:
			case KW_OUTPUT:
			case KW_OVERWRITE:
			case KW_OVERWRITING:
			case KW_PARTITIONED:
			case KW_PARTITIONS:
			case KW_PASSING:
			case KW_PAST:
			case KW_PATH:
			case KW_PLACING:
			case KW_PLAN:
			case KW_PRECEDING:
			case KW_PRESERVE:
			case KW_PRIOR:
			case KW_PRIVILEGES:
			case KW_PUBLIC:
			case KW_PYTHON:
			case KW_PYTHON_FILES:
			case KW_PYTHON_REQUIREMENTS:
			case KW_PYTHON_DEPENDENCIES:
			case KW_PYTHON_JAR:
			case KW_PYTHON_ARCHIVES:
			case KW_PYTHON_PARAMETER:
			case KW_QUARTER:
			case KW_RAW:
			case KW_READ:
			case KW_RELATIVE:
			case KW_REMOVE:
			case KW_RENAME:
			case KW_REPLACE:
			case KW_RESPECT:
			case KW_RESTART:
			case KW_RESTRICT:
			case KW_ROLE:
			case KW_ROW_COUNT:
			case KW_SCALA:
			case KW_SCALAR:
			case KW_SCALE:
			case KW_SCHEMA:
			case KW_SECONDS:
			case KW_SECTION:
			case KW_SECURITY:
			case KW_SELF:
			case KW_SERVER:
			case KW_SERVER_NAME:
			case KW_SESSION:
			case KW_SETS:
			case KW_SIMPLE:
			case KW_SIZE:
			case KW_SLIDE:
			case KW_SOURCE:
			case KW_SPACE:
			case KW_STATE:
			case KW_STATEMENT:
			case KW_STEP:
			case KW_STRING:
			case KW_STRUCTURE:
			case KW_STYLE:
			case KW_TABLES:
			case KW_TEMPORARY:
			case KW_TIMECOL:
			case KW_FLOOR:
			case KW_TIMESTAMP_LTZ:
			case KW_TIMESTAMPADD:
			case KW_TIMESTAMPDIFF:
			case KW_TRANSFORM:
			case KW_TUMBLE:
			case KW_TYPE:
			case KW_UNDER:
			case KW_UNLOAD:
			case KW_USAGE:
			case KW_USE:
			case KW_UTF16:
			case KW_UTF32:
			case KW_UTF8:
			case KW_VERSION:
			case KW_VIEW:
			case KW_VIEWS:
			case KW_VIRTUAL:
			case KW_WATERMARK:
			case KW_WATERMARKS:
			case KW_WEEK:
			case KW_WORK:
			case KW_WRAPPER:
			case KW_YEARS:
			case KW_ZONE:
			case KW_ABS:
			case KW_ARRAY:
			case KW_AVG:
			case KW_CASE:
			case KW_CAST:
			case KW_CEIL:
			case KW_COALESCE:
			case KW_COLLECT:
			case KW_COUNT:
			case KW_DATE:
			case KW_DAY:
			case KW_EXISTS:
			case KW_FALSE:
			case KW_GROUPING:
			case KW_HOUR:
			case KW_INTERVAL:
			case KW_LAG:
			case KW_LEFT:
			case KW_MINUTE:
			case KW_MONTH:
			case KW_NOT:
			case KW_NULL:
			case KW_OVERLAY:
			case KW_POSITION:
			case KW_POWER:
			case KW_RANK:
			case KW_RIGHT:
			case KW_ROW:
			case KW_SECOND:
			case KW_SUBSTRING:
			case KW_SUM:
			case KW_TIME:
			case KW_TIMESTAMP:
			case KW_TIMESTAMP_3:
			case KW_TIMESTAMP_6:
			case KW_TIMESTAMP_9:
			case KW_TRUE:
			case KW_TRUNCATE:
			case KW_UPPER:
			case KW_YEAR:
			case BIT_NOT_OP:
			case LR_BRACKET:
			case ASTERISK_SIGN:
			case HYPNEN_SIGN:
			case ADD_SIGN:
			case STRING_LITERAL:
			case DIG_LITERAL:
			case REAL_LITERAL:
			case BIT_STRING:
			case ID_LITERAL:
				{
				setState(1647);
				((LimitClauseContext)_localctx).limit = expression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PartitionByClauseContext extends ParserRuleContext {
		public TerminalNode KW_PARTITION() { return getToken(FlinkSQLParser.KW_PARTITION, 0); }
		public TerminalNode KW_BY() { return getToken(FlinkSQLParser.KW_BY, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public PartitionByClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_partitionByClause; }
	}

	public final PartitionByClauseContext partitionByClause() throws RecognitionException {
		PartitionByClauseContext _localctx = new PartitionByClauseContext(_ctx, getState());
		enterRule(_localctx, 236, RULE_partitionByClause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1650);
			match(KW_PARTITION);
			setState(1651);
			match(KW_BY);
			setState(1652);
			expression();
			setState(1657);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1653);
				match(COMMA);
				setState(1654);
				expression();
				}
				}
				setState(1659);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QuantifiersContext extends ParserRuleContext {
		public TerminalNode ASTERISK_SIGN() { return getToken(FlinkSQLParser.ASTERISK_SIGN, 0); }
		public TerminalNode ADD_SIGN() { return getToken(FlinkSQLParser.ADD_SIGN, 0); }
		public TerminalNode QUESTION_MARK_SIGN() { return getToken(FlinkSQLParser.QUESTION_MARK_SIGN, 0); }
		public TerminalNode LB_BRACKET() { return getToken(FlinkSQLParser.LB_BRACKET, 0); }
		public List<TerminalNode> DIG_LITERAL() { return getTokens(FlinkSQLParser.DIG_LITERAL); }
		public TerminalNode DIG_LITERAL(int i) {
			return getToken(FlinkSQLParser.DIG_LITERAL, i);
		}
		public TerminalNode COMMA() { return getToken(FlinkSQLParser.COMMA, 0); }
		public TerminalNode RB_BRACKET() { return getToken(FlinkSQLParser.RB_BRACKET, 0); }
		public QuantifiersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_quantifiers; }
	}

	public final QuantifiersContext quantifiers() throws RecognitionException {
		QuantifiersContext _localctx = new QuantifiersContext(_ctx, getState());
		enterRule(_localctx, 238, RULE_quantifiers);
		try {
			setState(1676);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,188,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(1660);
				match(ASTERISK_SIGN);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(1661);
				match(ADD_SIGN);
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				{
				setState(1662);
				match(QUESTION_MARK_SIGN);
				}
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				{
				setState(1663);
				match(LB_BRACKET);
				setState(1664);
				match(DIG_LITERAL);
				setState(1665);
				match(COMMA);
				setState(1666);
				match(DIG_LITERAL);
				setState(1667);
				match(RB_BRACKET);
				}
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				{
				setState(1668);
				match(LB_BRACKET);
				setState(1669);
				match(DIG_LITERAL);
				setState(1670);
				match(COMMA);
				setState(1671);
				match(RB_BRACKET);
				}
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				{
				setState(1672);
				match(LB_BRACKET);
				setState(1673);
				match(COMMA);
				setState(1674);
				match(DIG_LITERAL);
				setState(1675);
				match(RB_BRACKET);
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MeasuresClauseContext extends ParserRuleContext {
		public TerminalNode KW_MEASURES() { return getToken(FlinkSQLParser.KW_MEASURES, 0); }
		public List<ProjectItemDefinitionContext> projectItemDefinition() {
			return getRuleContexts(ProjectItemDefinitionContext.class);
		}
		public ProjectItemDefinitionContext projectItemDefinition(int i) {
			return getRuleContext(ProjectItemDefinitionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public MeasuresClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_measuresClause; }
	}

	public final MeasuresClauseContext measuresClause() throws RecognitionException {
		MeasuresClauseContext _localctx = new MeasuresClauseContext(_ctx, getState());
		enterRule(_localctx, 240, RULE_measuresClause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1678);
			match(KW_MEASURES);
			setState(1679);
			projectItemDefinition();
			setState(1684);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1680);
				match(COMMA);
				setState(1681);
				projectItemDefinition();
				}
				}
				setState(1686);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PatternDefinationContext extends ParserRuleContext {
		public TerminalNode KW_PATTERN() { return getToken(FlinkSQLParser.KW_PATTERN, 0); }
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public List<PatternVariableContext> patternVariable() {
			return getRuleContexts(PatternVariableContext.class);
		}
		public PatternVariableContext patternVariable(int i) {
			return getRuleContext(PatternVariableContext.class,i);
		}
		public WithinClauseContext withinClause() {
			return getRuleContext(WithinClauseContext.class,0);
		}
		public PatternDefinationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_patternDefination; }
	}

	public final PatternDefinationContext patternDefination() throws RecognitionException {
		PatternDefinationContext _localctx = new PatternDefinationContext(_ctx, getState());
		enterRule(_localctx, 242, RULE_patternDefination);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1687);
			match(KW_PATTERN);
			setState(1688);
			match(LR_BRACKET);
			setState(1690); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(1689);
				patternVariable();
				}
				}
				setState(1692); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==DIG_LITERAL || _la==ID_LITERAL );
			setState(1694);
			match(RR_BRACKET);
			setState(1696);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_WITHIN) {
				{
				setState(1695);
				withinClause();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PatternVariableContext extends ParserRuleContext {
		public UnquotedIdentifierContext unquotedIdentifier() {
			return getRuleContext(UnquotedIdentifierContext.class,0);
		}
		public QuantifiersContext quantifiers() {
			return getRuleContext(QuantifiersContext.class,0);
		}
		public PatternVariableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_patternVariable; }
	}

	public final PatternVariableContext patternVariable() throws RecognitionException {
		PatternVariableContext _localctx = new PatternVariableContext(_ctx, getState());
		enterRule(_localctx, 244, RULE_patternVariable);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1698);
			unquotedIdentifier();
			setState(1700);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 392)) & ~0x3f) == 0 && ((1L << (_la - 392)) & ((1L << (LB_BRACKET - 392)) | (1L << (ASTERISK_SIGN - 392)) | (1L << (ADD_SIGN - 392)) | (1L << (QUESTION_MARK_SIGN - 392)))) != 0)) {
				{
				setState(1699);
				quantifiers();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OutputModeContext extends ParserRuleContext {
		public TerminalNode KW_ALL() { return getToken(FlinkSQLParser.KW_ALL, 0); }
		public TerminalNode KW_ROWS() { return getToken(FlinkSQLParser.KW_ROWS, 0); }
		public TerminalNode KW_PER() { return getToken(FlinkSQLParser.KW_PER, 0); }
		public TerminalNode KW_MATCH() { return getToken(FlinkSQLParser.KW_MATCH, 0); }
		public TerminalNode KW_ONE() { return getToken(FlinkSQLParser.KW_ONE, 0); }
		public TerminalNode KW_ROW() { return getToken(FlinkSQLParser.KW_ROW, 0); }
		public OutputModeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_outputMode; }
	}

	public final OutputModeContext outputMode() throws RecognitionException {
		OutputModeContext _localctx = new OutputModeContext(_ctx, getState());
		enterRule(_localctx, 246, RULE_outputMode);
		try {
			setState(1710);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_ALL:
				enterOuterAlt(_localctx, 1);
				{
				setState(1702);
				match(KW_ALL);
				setState(1703);
				match(KW_ROWS);
				setState(1704);
				match(KW_PER);
				setState(1705);
				match(KW_MATCH);
				}
				break;
			case KW_ONE:
				enterOuterAlt(_localctx, 2);
				{
				setState(1706);
				match(KW_ONE);
				setState(1707);
				match(KW_ROW);
				setState(1708);
				match(KW_PER);
				setState(1709);
				match(KW_MATCH);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AfterMatchStrategyContext extends ParserRuleContext {
		public TerminalNode KW_AFTER() { return getToken(FlinkSQLParser.KW_AFTER, 0); }
		public TerminalNode KW_MATCH() { return getToken(FlinkSQLParser.KW_MATCH, 0); }
		public TerminalNode KW_SKIP() { return getToken(FlinkSQLParser.KW_SKIP, 0); }
		public TerminalNode KW_PAST() { return getToken(FlinkSQLParser.KW_PAST, 0); }
		public TerminalNode KW_LAST() { return getToken(FlinkSQLParser.KW_LAST, 0); }
		public TerminalNode KW_ROW() { return getToken(FlinkSQLParser.KW_ROW, 0); }
		public TerminalNode KW_TO() { return getToken(FlinkSQLParser.KW_TO, 0); }
		public TerminalNode KW_NEXT() { return getToken(FlinkSQLParser.KW_NEXT, 0); }
		public UnquotedIdentifierContext unquotedIdentifier() {
			return getRuleContext(UnquotedIdentifierContext.class,0);
		}
		public TerminalNode KW_FIRST() { return getToken(FlinkSQLParser.KW_FIRST, 0); }
		public AfterMatchStrategyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_afterMatchStrategy; }
	}

	public final AfterMatchStrategyContext afterMatchStrategy() throws RecognitionException {
		AfterMatchStrategyContext _localctx = new AfterMatchStrategyContext(_ctx, getState());
		enterRule(_localctx, 248, RULE_afterMatchStrategy);
		try {
			setState(1736);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,194,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1712);
				match(KW_AFTER);
				setState(1713);
				match(KW_MATCH);
				setState(1714);
				match(KW_SKIP);
				setState(1715);
				match(KW_PAST);
				setState(1716);
				match(KW_LAST);
				setState(1717);
				match(KW_ROW);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1718);
				match(KW_AFTER);
				setState(1719);
				match(KW_MATCH);
				setState(1720);
				match(KW_SKIP);
				setState(1721);
				match(KW_TO);
				setState(1722);
				match(KW_NEXT);
				setState(1723);
				match(KW_ROW);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1724);
				match(KW_AFTER);
				setState(1725);
				match(KW_MATCH);
				setState(1726);
				match(KW_SKIP);
				setState(1727);
				match(KW_TO);
				setState(1728);
				match(KW_LAST);
				setState(1729);
				unquotedIdentifier();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1730);
				match(KW_AFTER);
				setState(1731);
				match(KW_MATCH);
				setState(1732);
				match(KW_SKIP);
				setState(1733);
				match(KW_TO);
				setState(1734);
				match(KW_FIRST);
				setState(1735);
				unquotedIdentifier();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PatternVariablesDefinationContext extends ParserRuleContext {
		public TerminalNode KW_DEFINE() { return getToken(FlinkSQLParser.KW_DEFINE, 0); }
		public List<ProjectItemDefinitionContext> projectItemDefinition() {
			return getRuleContexts(ProjectItemDefinitionContext.class);
		}
		public ProjectItemDefinitionContext projectItemDefinition(int i) {
			return getRuleContext(ProjectItemDefinitionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public PatternVariablesDefinationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_patternVariablesDefination; }
	}

	public final PatternVariablesDefinationContext patternVariablesDefination() throws RecognitionException {
		PatternVariablesDefinationContext _localctx = new PatternVariablesDefinationContext(_ctx, getState());
		enterRule(_localctx, 250, RULE_patternVariablesDefination);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1738);
			match(KW_DEFINE);
			setState(1739);
			projectItemDefinition();
			setState(1744);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1740);
				match(COMMA);
				setState(1741);
				projectItemDefinition();
				}
				}
				setState(1746);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WindowFrameContext extends ParserRuleContext {
		public TerminalNode KW_RANGE() { return getToken(FlinkSQLParser.KW_RANGE, 0); }
		public TerminalNode KW_BETWEEN() { return getToken(FlinkSQLParser.KW_BETWEEN, 0); }
		public TimeIntervalExpressionContext timeIntervalExpression() {
			return getRuleContext(TimeIntervalExpressionContext.class,0);
		}
		public FrameBoundContext frameBound() {
			return getRuleContext(FrameBoundContext.class,0);
		}
		public TerminalNode KW_ROWS() { return getToken(FlinkSQLParser.KW_ROWS, 0); }
		public TerminalNode DIG_LITERAL() { return getToken(FlinkSQLParser.DIG_LITERAL, 0); }
		public WindowFrameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_windowFrame; }
	}

	public final WindowFrameContext windowFrame() throws RecognitionException {
		WindowFrameContext _localctx = new WindowFrameContext(_ctx, getState());
		enterRule(_localctx, 252, RULE_windowFrame);
		try {
			setState(1756);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_RANGE:
				enterOuterAlt(_localctx, 1);
				{
				setState(1747);
				match(KW_RANGE);
				setState(1748);
				match(KW_BETWEEN);
				setState(1749);
				timeIntervalExpression();
				setState(1750);
				frameBound();
				}
				break;
			case KW_ROWS:
				enterOuterAlt(_localctx, 2);
				{
				setState(1752);
				match(KW_ROWS);
				setState(1753);
				match(KW_BETWEEN);
				setState(1754);
				match(DIG_LITERAL);
				setState(1755);
				frameBound();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FrameBoundContext extends ParserRuleContext {
		public TerminalNode KW_PRECEDING() { return getToken(FlinkSQLParser.KW_PRECEDING, 0); }
		public TerminalNode KW_AND() { return getToken(FlinkSQLParser.KW_AND, 0); }
		public TerminalNode KW_CURRENT() { return getToken(FlinkSQLParser.KW_CURRENT, 0); }
		public TerminalNode KW_ROW() { return getToken(FlinkSQLParser.KW_ROW, 0); }
		public FrameBoundContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_frameBound; }
	}

	public final FrameBoundContext frameBound() throws RecognitionException {
		FrameBoundContext _localctx = new FrameBoundContext(_ctx, getState());
		enterRule(_localctx, 254, RULE_frameBound);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1758);
			match(KW_PRECEDING);
			setState(1759);
			match(KW_AND);
			setState(1760);
			match(KW_CURRENT);
			setState(1761);
			match(KW_ROW);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WithinClauseContext extends ParserRuleContext {
		public TerminalNode KW_WITHIN() { return getToken(FlinkSQLParser.KW_WITHIN, 0); }
		public TimeIntervalExpressionContext timeIntervalExpression() {
			return getRuleContext(TimeIntervalExpressionContext.class,0);
		}
		public WithinClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_withinClause; }
	}

	public final WithinClauseContext withinClause() throws RecognitionException {
		WithinClauseContext _localctx = new WithinClauseContext(_ctx, getState());
		enterRule(_localctx, 256, RULE_withinClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1763);
			match(KW_WITHIN);
			setState(1764);
			timeIntervalExpression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public BooleanExpressionContext booleanExpression() {
			return getRuleContext(BooleanExpressionContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 258, RULE_expression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1766);
			booleanExpression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BooleanExpressionContext extends ParserRuleContext {
		public BooleanExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_booleanExpression; }
	 
		public BooleanExpressionContext() { }
		public void copyFrom(BooleanExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class LogicalNotContext extends BooleanExpressionContext {
		public TerminalNode KW_NOT() { return getToken(FlinkSQLParser.KW_NOT, 0); }
		public BooleanExpressionContext booleanExpression() {
			return getRuleContext(BooleanExpressionContext.class,0);
		}
		public LogicalNotContext(BooleanExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PredicatedContext extends BooleanExpressionContext {
		public ValueExpressionContext valueExpression() {
			return getRuleContext(ValueExpressionContext.class,0);
		}
		public PredicateContext predicate() {
			return getRuleContext(PredicateContext.class,0);
		}
		public PredicatedContext(BooleanExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExistsContext extends BooleanExpressionContext {
		public TerminalNode KW_EXISTS() { return getToken(FlinkSQLParser.KW_EXISTS, 0); }
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public QueryStatementContext queryStatement() {
			return getRuleContext(QueryStatementContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public ExistsContext(BooleanExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LogicalNestedContext extends BooleanExpressionContext {
		public Token kind;
		public BooleanExpressionContext booleanExpression() {
			return getRuleContext(BooleanExpressionContext.class,0);
		}
		public TerminalNode KW_IS() { return getToken(FlinkSQLParser.KW_IS, 0); }
		public TerminalNode KW_TRUE() { return getToken(FlinkSQLParser.KW_TRUE, 0); }
		public TerminalNode KW_FALSE() { return getToken(FlinkSQLParser.KW_FALSE, 0); }
		public TerminalNode KW_UNKNOWN() { return getToken(FlinkSQLParser.KW_UNKNOWN, 0); }
		public TerminalNode KW_NULL() { return getToken(FlinkSQLParser.KW_NULL, 0); }
		public TerminalNode KW_NOT() { return getToken(FlinkSQLParser.KW_NOT, 0); }
		public LogicalNestedContext(BooleanExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LogicalBinaryContext extends BooleanExpressionContext {
		public BooleanExpressionContext left;
		public Token operator;
		public BooleanExpressionContext right;
		public List<BooleanExpressionContext> booleanExpression() {
			return getRuleContexts(BooleanExpressionContext.class);
		}
		public BooleanExpressionContext booleanExpression(int i) {
			return getRuleContext(BooleanExpressionContext.class,i);
		}
		public TerminalNode KW_AND() { return getToken(FlinkSQLParser.KW_AND, 0); }
		public TerminalNode KW_OR() { return getToken(FlinkSQLParser.KW_OR, 0); }
		public LogicalBinaryContext(BooleanExpressionContext ctx) { copyFrom(ctx); }
	}

	public final BooleanExpressionContext booleanExpression() throws RecognitionException {
		return booleanExpression(0);
	}

	private BooleanExpressionContext booleanExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		BooleanExpressionContext _localctx = new BooleanExpressionContext(_ctx, _parentState);
		BooleanExpressionContext _prevctx = _localctx;
		int _startState = 260;
		enterRecursionRule(_localctx, 260, RULE_booleanExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1780);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,198,_ctx) ) {
			case 1:
				{
				_localctx = new LogicalNotContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(1769);
				match(KW_NOT);
				setState(1770);
				booleanExpression(6);
				}
				break;
			case 2:
				{
				_localctx = new ExistsContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1771);
				match(KW_EXISTS);
				setState(1772);
				match(LR_BRACKET);
				setState(1773);
				queryStatement(0);
				setState(1774);
				match(RR_BRACKET);
				}
				break;
			case 3:
				{
				_localctx = new PredicatedContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1776);
				valueExpression(0);
				setState(1778);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,197,_ctx) ) {
				case 1:
					{
					setState(1777);
					predicate();
					}
					break;
				}
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(1796);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,201,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(1794);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,200,_ctx) ) {
					case 1:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						((LogicalBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_booleanExpression);
						setState(1782);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(1783);
						((LogicalBinaryContext)_localctx).operator = match(KW_AND);
						setState(1784);
						((LogicalBinaryContext)_localctx).right = booleanExpression(4);
						}
						break;
					case 2:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						((LogicalBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_booleanExpression);
						setState(1785);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(1786);
						((LogicalBinaryContext)_localctx).operator = match(KW_OR);
						setState(1787);
						((LogicalBinaryContext)_localctx).right = booleanExpression(3);
						}
						break;
					case 3:
						{
						_localctx = new LogicalNestedContext(new BooleanExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_booleanExpression);
						setState(1788);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(1789);
						match(KW_IS);
						setState(1791);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==KW_NOT) {
							{
							setState(1790);
							match(KW_NOT);
							}
						}

						setState(1793);
						((LogicalNestedContext)_localctx).kind = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==KW_FALSE || _la==KW_NULL || _la==KW_TRUE || _la==KW_UNKNOWN) ) {
							((LogicalNestedContext)_localctx).kind = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						break;
					}
					} 
				}
				setState(1798);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,201,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class PredicateContext extends ParserRuleContext {
		public Token kind;
		public ValueExpressionContext lower;
		public ValueExpressionContext upper;
		public ValueExpressionContext pattern;
		public ValueExpressionContext right;
		public TerminalNode KW_AND() { return getToken(FlinkSQLParser.KW_AND, 0); }
		public TerminalNode KW_BETWEEN() { return getToken(FlinkSQLParser.KW_BETWEEN, 0); }
		public List<ValueExpressionContext> valueExpression() {
			return getRuleContexts(ValueExpressionContext.class);
		}
		public ValueExpressionContext valueExpression(int i) {
			return getRuleContext(ValueExpressionContext.class,i);
		}
		public TerminalNode KW_NOT() { return getToken(FlinkSQLParser.KW_NOT, 0); }
		public TerminalNode KW_ASYMMETRIC() { return getToken(FlinkSQLParser.KW_ASYMMETRIC, 0); }
		public TerminalNode KW_SYMMETRIC() { return getToken(FlinkSQLParser.KW_SYMMETRIC, 0); }
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public TerminalNode KW_IN() { return getToken(FlinkSQLParser.KW_IN, 0); }
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public QueryStatementContext queryStatement() {
			return getRuleContext(QueryStatementContext.class,0);
		}
		public TerminalNode KW_EXISTS() { return getToken(FlinkSQLParser.KW_EXISTS, 0); }
		public TerminalNode KW_RLIKE() { return getToken(FlinkSQLParser.KW_RLIKE, 0); }
		public LikePredicateContext likePredicate() {
			return getRuleContext(LikePredicateContext.class,0);
		}
		public TerminalNode KW_IS() { return getToken(FlinkSQLParser.KW_IS, 0); }
		public TerminalNode KW_TRUE() { return getToken(FlinkSQLParser.KW_TRUE, 0); }
		public TerminalNode KW_FALSE() { return getToken(FlinkSQLParser.KW_FALSE, 0); }
		public TerminalNode KW_UNKNOWN() { return getToken(FlinkSQLParser.KW_UNKNOWN, 0); }
		public TerminalNode KW_NULL() { return getToken(FlinkSQLParser.KW_NULL, 0); }
		public TerminalNode KW_FROM() { return getToken(FlinkSQLParser.KW_FROM, 0); }
		public TerminalNode KW_DISTINCT() { return getToken(FlinkSQLParser.KW_DISTINCT, 0); }
		public TerminalNode KW_TO() { return getToken(FlinkSQLParser.KW_TO, 0); }
		public TerminalNode KW_SIMILAR() { return getToken(FlinkSQLParser.KW_SIMILAR, 0); }
		public TerminalNode KW_ESCAPE() { return getToken(FlinkSQLParser.KW_ESCAPE, 0); }
		public StringLiteralContext stringLiteral() {
			return getRuleContext(StringLiteralContext.class,0);
		}
		public PredicateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_predicate; }
	}

	public final PredicateContext predicate() throws RecognitionException {
		PredicateContext _localctx = new PredicateContext(_ctx, getState());
		enterRule(_localctx, 262, RULE_predicate);
		int _la;
		try {
			setState(1866);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,212,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1800);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1799);
					match(KW_NOT);
					}
				}

				setState(1802);
				((PredicateContext)_localctx).kind = match(KW_BETWEEN);
				setState(1804);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_ASYMMETRIC || _la==KW_SYMMETRIC) {
					{
					setState(1803);
					_la = _input.LA(1);
					if ( !(_la==KW_ASYMMETRIC || _la==KW_SYMMETRIC) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
				}

				setState(1806);
				((PredicateContext)_localctx).lower = valueExpression(0);
				setState(1807);
				match(KW_AND);
				setState(1808);
				((PredicateContext)_localctx).upper = valueExpression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1811);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1810);
					match(KW_NOT);
					}
				}

				setState(1813);
				((PredicateContext)_localctx).kind = match(KW_IN);
				setState(1814);
				match(LR_BRACKET);
				setState(1815);
				expression();
				setState(1820);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1816);
					match(COMMA);
					setState(1817);
					expression();
					}
					}
					setState(1822);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1823);
				match(RR_BRACKET);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1826);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1825);
					match(KW_NOT);
					}
				}

				setState(1828);
				((PredicateContext)_localctx).kind = match(KW_IN);
				setState(1829);
				match(LR_BRACKET);
				setState(1830);
				queryStatement(0);
				setState(1831);
				match(RR_BRACKET);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1833);
				((PredicateContext)_localctx).kind = match(KW_EXISTS);
				setState(1834);
				match(LR_BRACKET);
				setState(1835);
				queryStatement(0);
				setState(1836);
				match(RR_BRACKET);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1839);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1838);
					match(KW_NOT);
					}
				}

				setState(1841);
				((PredicateContext)_localctx).kind = match(KW_RLIKE);
				setState(1842);
				((PredicateContext)_localctx).pattern = valueExpression(0);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1843);
				likePredicate();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(1844);
				match(KW_IS);
				setState(1846);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1845);
					match(KW_NOT);
					}
				}

				setState(1848);
				((PredicateContext)_localctx).kind = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==KW_FALSE || _la==KW_NULL || _la==KW_TRUE || _la==KW_UNKNOWN) ) {
					((PredicateContext)_localctx).kind = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(1849);
				match(KW_IS);
				setState(1851);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1850);
					match(KW_NOT);
					}
				}

				setState(1853);
				((PredicateContext)_localctx).kind = match(KW_DISTINCT);
				setState(1854);
				match(KW_FROM);
				setState(1855);
				((PredicateContext)_localctx).right = valueExpression(0);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(1857);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1856);
					match(KW_NOT);
					}
				}

				setState(1859);
				((PredicateContext)_localctx).kind = match(KW_SIMILAR);
				setState(1860);
				match(KW_TO);
				setState(1861);
				((PredicateContext)_localctx).right = valueExpression(0);
				setState(1864);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,211,_ctx) ) {
				case 1:
					{
					setState(1862);
					match(KW_ESCAPE);
					setState(1863);
					stringLiteral();
					}
					break;
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LikePredicateContext extends ParserRuleContext {
		public Token kind;
		public Token quantifier;
		public ValueExpressionContext pattern;
		public TerminalNode KW_LIKE() { return getToken(FlinkSQLParser.KW_LIKE, 0); }
		public TerminalNode KW_ANY() { return getToken(FlinkSQLParser.KW_ANY, 0); }
		public TerminalNode KW_ALL() { return getToken(FlinkSQLParser.KW_ALL, 0); }
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode KW_NOT() { return getToken(FlinkSQLParser.KW_NOT, 0); }
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public ValueExpressionContext valueExpression() {
			return getRuleContext(ValueExpressionContext.class,0);
		}
		public TerminalNode KW_ESCAPE() { return getToken(FlinkSQLParser.KW_ESCAPE, 0); }
		public StringLiteralContext stringLiteral() {
			return getRuleContext(StringLiteralContext.class,0);
		}
		public LikePredicateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_likePredicate; }
	}

	public final LikePredicateContext likePredicate() throws RecognitionException {
		LikePredicateContext _localctx = new LikePredicateContext(_ctx, getState());
		enterRule(_localctx, 264, RULE_likePredicate);
		int _la;
		try {
			setState(1897);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,218,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1869);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1868);
					match(KW_NOT);
					}
				}

				setState(1871);
				((LikePredicateContext)_localctx).kind = match(KW_LIKE);
				setState(1872);
				((LikePredicateContext)_localctx).quantifier = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==KW_ALL || _la==KW_ANY) ) {
					((LikePredicateContext)_localctx).quantifier = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(1886);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,215,_ctx) ) {
				case 1:
					{
					setState(1873);
					match(LR_BRACKET);
					setState(1874);
					match(RR_BRACKET);
					}
					break;
				case 2:
					{
					setState(1875);
					match(LR_BRACKET);
					setState(1876);
					expression();
					setState(1881);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(1877);
						match(COMMA);
						setState(1878);
						expression();
						}
						}
						setState(1883);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					setState(1884);
					match(RR_BRACKET);
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1889);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1888);
					match(KW_NOT);
					}
				}

				setState(1891);
				((LikePredicateContext)_localctx).kind = match(KW_LIKE);
				setState(1892);
				((LikePredicateContext)_localctx).pattern = valueExpression(0);
				setState(1895);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,217,_ctx) ) {
				case 1:
					{
					setState(1893);
					match(KW_ESCAPE);
					setState(1894);
					stringLiteral();
					}
					break;
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ValueExpressionContext extends ParserRuleContext {
		public ValueExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valueExpression; }
	 
		public ValueExpressionContext() { }
		public void copyFrom(ValueExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ValueExpressionDefaultContext extends ValueExpressionContext {
		public PrimaryExpressionContext primaryExpression() {
			return getRuleContext(PrimaryExpressionContext.class,0);
		}
		public ValueExpressionDefaultContext(ValueExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ComparisonContext extends ValueExpressionContext {
		public ValueExpressionContext left;
		public ValueExpressionContext right;
		public ComparisonOperatorContext comparisonOperator() {
			return getRuleContext(ComparisonOperatorContext.class,0);
		}
		public List<ValueExpressionContext> valueExpression() {
			return getRuleContexts(ValueExpressionContext.class);
		}
		public ValueExpressionContext valueExpression(int i) {
			return getRuleContext(ValueExpressionContext.class,i);
		}
		public ComparisonContext(ValueExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ArithmeticBinaryAlternateContext extends ValueExpressionContext {
		public ValueExpressionContext left;
		public Token right;
		public ValueExpressionContext valueExpression() {
			return getRuleContext(ValueExpressionContext.class,0);
		}
		public TerminalNode SLASH_TEXT() { return getToken(FlinkSQLParser.SLASH_TEXT, 0); }
		public ArithmeticBinaryAlternateContext(ValueExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ArithmeticBinaryContext extends ValueExpressionContext {
		public ValueExpressionContext left;
		public Token operator;
		public ValueExpressionContext right;
		public List<ValueExpressionContext> valueExpression() {
			return getRuleContexts(ValueExpressionContext.class);
		}
		public ValueExpressionContext valueExpression(int i) {
			return getRuleContext(ValueExpressionContext.class,i);
		}
		public TerminalNode ASTERISK_SIGN() { return getToken(FlinkSQLParser.ASTERISK_SIGN, 0); }
		public TerminalNode SLASH_SIGN() { return getToken(FlinkSQLParser.SLASH_SIGN, 0); }
		public TerminalNode PENCENT_SIGN() { return getToken(FlinkSQLParser.PENCENT_SIGN, 0); }
		public TerminalNode KW_DIV() { return getToken(FlinkSQLParser.KW_DIV, 0); }
		public TerminalNode ADD_SIGN() { return getToken(FlinkSQLParser.ADD_SIGN, 0); }
		public TerminalNode HYPNEN_SIGN() { return getToken(FlinkSQLParser.HYPNEN_SIGN, 0); }
		public TerminalNode DOUBLE_VERTICAL_SIGN() { return getToken(FlinkSQLParser.DOUBLE_VERTICAL_SIGN, 0); }
		public TerminalNode BIT_AND_OP() { return getToken(FlinkSQLParser.BIT_AND_OP, 0); }
		public TerminalNode BIT_XOR_OP() { return getToken(FlinkSQLParser.BIT_XOR_OP, 0); }
		public TerminalNode BIT_OR_OP() { return getToken(FlinkSQLParser.BIT_OR_OP, 0); }
		public ArithmeticBinaryContext(ValueExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ArithmeticUnaryContext extends ValueExpressionContext {
		public Token operator;
		public ValueExpressionContext valueExpression() {
			return getRuleContext(ValueExpressionContext.class,0);
		}
		public TerminalNode HYPNEN_SIGN() { return getToken(FlinkSQLParser.HYPNEN_SIGN, 0); }
		public TerminalNode ADD_SIGN() { return getToken(FlinkSQLParser.ADD_SIGN, 0); }
		public TerminalNode BIT_NOT_OP() { return getToken(FlinkSQLParser.BIT_NOT_OP, 0); }
		public ArithmeticUnaryContext(ValueExpressionContext ctx) { copyFrom(ctx); }
	}

	public final ValueExpressionContext valueExpression() throws RecognitionException {
		return valueExpression(0);
	}

	private ValueExpressionContext valueExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ValueExpressionContext _localctx = new ValueExpressionContext(_ctx, _parentState);
		ValueExpressionContext _prevctx = _localctx;
		int _startState = 266;
		enterRecursionRule(_localctx, 266, RULE_valueExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1903);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,219,_ctx) ) {
			case 1:
				{
				_localctx = new ValueExpressionDefaultContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(1900);
				primaryExpression(0);
				}
				break;
			case 2:
				{
				_localctx = new ArithmeticUnaryContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1901);
				((ArithmeticUnaryContext)_localctx).operator = _input.LT(1);
				_la = _input.LA(1);
				if ( !(((((_la - 383)) & ~0x3f) == 0 && ((1L << (_la - 383)) & ((1L << (BIT_NOT_OP - 383)) | (1L << (HYPNEN_SIGN - 383)) | (1L << (ADD_SIGN - 383)))) != 0)) ) {
					((ArithmeticUnaryContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(1902);
				valueExpression(8);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(1928);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,221,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(1926);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,220,_ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1905);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(1906);
						((ArithmeticBinaryContext)_localctx).operator = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==KW_DIV || ((((_la - 401)) & ~0x3f) == 0 && ((1L << (_la - 401)) & ((1L << (ASTERISK_SIGN - 401)) | (1L << (PENCENT_SIGN - 401)) | (1L << (SLASH_SIGN - 401)))) != 0)) ) {
							((ArithmeticBinaryContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(1907);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(8);
						}
						break;
					case 2:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1908);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(1909);
						((ArithmeticBinaryContext)_localctx).operator = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 403)) & ~0x3f) == 0 && ((1L << (_la - 403)) & ((1L << (HYPNEN_SIGN - 403)) | (1L << (ADD_SIGN - 403)) | (1L << (DOUBLE_VERTICAL_SIGN - 403)))) != 0)) ) {
							((ArithmeticBinaryContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(1910);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(7);
						}
						break;
					case 3:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1911);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(1912);
						((ArithmeticBinaryContext)_localctx).operator = match(BIT_AND_OP);
						setState(1913);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(6);
						}
						break;
					case 4:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1914);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(1915);
						((ArithmeticBinaryContext)_localctx).operator = match(BIT_XOR_OP);
						setState(1916);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(5);
						}
						break;
					case 5:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1917);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(1918);
						((ArithmeticBinaryContext)_localctx).operator = match(BIT_OR_OP);
						setState(1919);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(4);
						}
						break;
					case 6:
						{
						_localctx = new ComparisonContext(new ValueExpressionContext(_parentctx, _parentState));
						((ComparisonContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1920);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(1921);
						comparisonOperator();
						setState(1922);
						((ComparisonContext)_localctx).right = valueExpression(3);
						}
						break;
					case 7:
						{
						_localctx = new ArithmeticBinaryAlternateContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryAlternateContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1924);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(1925);
						((ArithmeticBinaryAlternateContext)_localctx).right = match(SLASH_TEXT);
						}
						break;
					}
					} 
				}
				setState(1930);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,221,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class PrimaryExpressionContext extends ParserRuleContext {
		public PrimaryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primaryExpression; }
	 
		public PrimaryExpressionContext() { }
		public void copyFrom(PrimaryExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class DereferenceContext extends PrimaryExpressionContext {
		public DereferenceDefinitionContext dereferenceDefinition() {
			return getRuleContext(DereferenceDefinitionContext.class,0);
		}
		public DereferenceContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class SimpleCaseContext extends PrimaryExpressionContext {
		public ExpressionContext value;
		public ExpressionContext elseExpression;
		public TerminalNode KW_CASE() { return getToken(FlinkSQLParser.KW_CASE, 0); }
		public TerminalNode KW_END() { return getToken(FlinkSQLParser.KW_END, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<WhenClauseContext> whenClause() {
			return getRuleContexts(WhenClauseContext.class);
		}
		public WhenClauseContext whenClause(int i) {
			return getRuleContext(WhenClauseContext.class,i);
		}
		public TerminalNode KW_ELSE() { return getToken(FlinkSQLParser.KW_ELSE, 0); }
		public SimpleCaseContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ColumnReferenceContext extends PrimaryExpressionContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ColumnReferenceContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LastContext extends PrimaryExpressionContext {
		public TerminalNode KW_LAST() { return getToken(FlinkSQLParser.KW_LAST, 0); }
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public TerminalNode KW_IGNORE() { return getToken(FlinkSQLParser.KW_IGNORE, 0); }
		public TerminalNode KW_NULLS() { return getToken(FlinkSQLParser.KW_NULLS, 0); }
		public LastContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class StarContext extends PrimaryExpressionContext {
		public TerminalNode ASTERISK_SIGN() { return getToken(FlinkSQLParser.ASTERISK_SIGN, 0); }
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public TerminalNode DOT() { return getToken(FlinkSQLParser.DOT, 0); }
		public StarContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class SubscriptContext extends PrimaryExpressionContext {
		public PrimaryExpressionContext value;
		public ValueExpressionContext index;
		public TerminalNode LS_BRACKET() { return getToken(FlinkSQLParser.LS_BRACKET, 0); }
		public TerminalNode RS_BRACKET() { return getToken(FlinkSQLParser.RS_BRACKET, 0); }
		public PrimaryExpressionContext primaryExpression() {
			return getRuleContext(PrimaryExpressionContext.class,0);
		}
		public ValueExpressionContext valueExpression() {
			return getRuleContext(ValueExpressionContext.class,0);
		}
		public SubscriptContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class FunctionCallFilterContext extends PrimaryExpressionContext {
		public FunctionNameContext functionName() {
			return getRuleContext(FunctionNameContext.class,0);
		}
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public FunctionParamContext functionParam() {
			return getRuleContext(FunctionParamContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public SetQuantifierContext setQuantifier() {
			return getRuleContext(SetQuantifierContext.class,0);
		}
		public FilterClauseContext filterClause() {
			return getRuleContext(FilterClauseContext.class,0);
		}
		public FunctionCallFilterContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class SubqueryExpressionContext extends PrimaryExpressionContext {
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public QueryStatementContext queryStatement() {
			return getRuleContext(QueryStatementContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public SubqueryExpressionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class CastContext extends PrimaryExpressionContext {
		public TerminalNode KW_CAST() { return getToken(FlinkSQLParser.KW_CAST, 0); }
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode KW_AS() { return getToken(FlinkSQLParser.KW_AS, 0); }
		public ColumnTypeContext columnType() {
			return getRuleContext(ColumnTypeContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public CastContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ConstantDefaultContext extends PrimaryExpressionContext {
		public ConstantContext constant() {
			return getRuleContext(ConstantContext.class,0);
		}
		public ConstantDefaultContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ParenthesizedExpressionContext extends PrimaryExpressionContext {
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public ParenthesizedExpressionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ComplexDataTypeFieldExpressionContext extends PrimaryExpressionContext {
		public ComplexDataTypeExpressionContext complexDataTypeExpression() {
			return getRuleContext(ComplexDataTypeExpressionContext.class,0);
		}
		public ComplexDataTypeFieldExpressionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class FunctionCallContext extends PrimaryExpressionContext {
		public FunctionNameContext functionName() {
			return getRuleContext(FunctionNameContext.class,0);
		}
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public List<FunctionParamContext> functionParam() {
			return getRuleContexts(FunctionParamContext.class);
		}
		public FunctionParamContext functionParam(int i) {
			return getRuleContext(FunctionParamContext.class,i);
		}
		public SetQuantifierContext setQuantifier() {
			return getRuleContext(SetQuantifierContext.class,0);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public TerminalNode KW_TO() { return getToken(FlinkSQLParser.KW_TO, 0); }
		public FunctionCallContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class SearchedCaseContext extends PrimaryExpressionContext {
		public ExpressionContext elseExpression;
		public TerminalNode KW_CASE() { return getToken(FlinkSQLParser.KW_CASE, 0); }
		public TerminalNode KW_END() { return getToken(FlinkSQLParser.KW_END, 0); }
		public List<WhenClauseContext> whenClause() {
			return getRuleContexts(WhenClauseContext.class);
		}
		public WhenClauseContext whenClause(int i) {
			return getRuleContext(WhenClauseContext.class,i);
		}
		public TerminalNode KW_ELSE() { return getToken(FlinkSQLParser.KW_ELSE, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public SearchedCaseContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PositionContext extends PrimaryExpressionContext {
		public ValueExpressionContext substr;
		public ValueExpressionContext str;
		public TerminalNode KW_POSITION() { return getToken(FlinkSQLParser.KW_POSITION, 0); }
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public TerminalNode KW_IN() { return getToken(FlinkSQLParser.KW_IN, 0); }
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public List<ValueExpressionContext> valueExpression() {
			return getRuleContexts(ValueExpressionContext.class);
		}
		public ValueExpressionContext valueExpression(int i) {
			return getRuleContext(ValueExpressionContext.class,i);
		}
		public PositionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class FirstContext extends PrimaryExpressionContext {
		public TerminalNode KW_FIRST() { return getToken(FlinkSQLParser.KW_FIRST, 0); }
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public TerminalNode KW_IGNORE() { return getToken(FlinkSQLParser.KW_IGNORE, 0); }
		public TerminalNode KW_NULLS() { return getToken(FlinkSQLParser.KW_NULLS, 0); }
		public FirstContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}

	public final PrimaryExpressionContext primaryExpression() throws RecognitionException {
		return primaryExpression(0);
	}

	private PrimaryExpressionContext primaryExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		PrimaryExpressionContext _localctx = new PrimaryExpressionContext(_ctx, _parentState);
		PrimaryExpressionContext _prevctx = _localctx;
		int _startState = 268;
		enterRecursionRule(_localctx, 268, RULE_primaryExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(2040);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,233,_ctx) ) {
			case 1:
				{
				_localctx = new SearchedCaseContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(1932);
				match(KW_CASE);
				setState(1934); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(1933);
					whenClause();
					}
					}
					setState(1936); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==KW_WHEN );
				setState(1940);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_ELSE) {
					{
					setState(1938);
					match(KW_ELSE);
					setState(1939);
					((SearchedCaseContext)_localctx).elseExpression = expression();
					}
				}

				setState(1942);
				match(KW_END);
				}
				break;
			case 2:
				{
				_localctx = new SimpleCaseContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1944);
				match(KW_CASE);
				setState(1945);
				((SimpleCaseContext)_localctx).value = expression();
				setState(1947); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(1946);
					whenClause();
					}
					}
					setState(1949); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==KW_WHEN );
				setState(1953);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_ELSE) {
					{
					setState(1951);
					match(KW_ELSE);
					setState(1952);
					((SimpleCaseContext)_localctx).elseExpression = expression();
					}
				}

				setState(1955);
				match(KW_END);
				}
				break;
			case 3:
				{
				_localctx = new CastContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1957);
				match(KW_CAST);
				setState(1958);
				match(LR_BRACKET);
				setState(1959);
				expression();
				setState(1960);
				match(KW_AS);
				setState(1961);
				columnType();
				setState(1962);
				match(RR_BRACKET);
				}
				break;
			case 4:
				{
				_localctx = new FirstContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1964);
				match(KW_FIRST);
				setState(1965);
				match(LR_BRACKET);
				setState(1966);
				expression();
				setState(1969);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_IGNORE) {
					{
					setState(1967);
					match(KW_IGNORE);
					setState(1968);
					match(KW_NULLS);
					}
				}

				setState(1971);
				match(RR_BRACKET);
				}
				break;
			case 5:
				{
				_localctx = new LastContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1973);
				match(KW_LAST);
				setState(1974);
				match(LR_BRACKET);
				setState(1975);
				expression();
				setState(1978);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_IGNORE) {
					{
					setState(1976);
					match(KW_IGNORE);
					setState(1977);
					match(KW_NULLS);
					}
				}

				setState(1980);
				match(RR_BRACKET);
				}
				break;
			case 6:
				{
				_localctx = new PositionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1982);
				match(KW_POSITION);
				setState(1983);
				match(LR_BRACKET);
				setState(1984);
				((PositionContext)_localctx).substr = valueExpression(0);
				setState(1985);
				match(KW_IN);
				setState(1986);
				((PositionContext)_localctx).str = valueExpression(0);
				setState(1987);
				match(RR_BRACKET);
				}
				break;
			case 7:
				{
				_localctx = new ConstantDefaultContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1989);
				constant();
				}
				break;
			case 8:
				{
				_localctx = new StarContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1990);
				match(ASTERISK_SIGN);
				}
				break;
			case 9:
				{
				_localctx = new StarContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1991);
				uid();
				setState(1992);
				match(DOT);
				setState(1993);
				match(ASTERISK_SIGN);
				}
				break;
			case 10:
				{
				_localctx = new SubqueryExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1995);
				match(LR_BRACKET);
				setState(1996);
				queryStatement(0);
				setState(1997);
				match(RR_BRACKET);
				}
				break;
			case 11:
				{
				_localctx = new FunctionCallContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1999);
				functionName();
				setState(2000);
				match(LR_BRACKET);
				setState(2012);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << KW_ADD) | (1L << KW_ADMIN) | (1L << KW_AFTER) | (1L << KW_ANALYZE) | (1L << KW_ASC) | (1L << KW_BEFORE) | (1L << KW_BYTES) | (1L << KW_CASCADE) | (1L << KW_CATALOG) | (1L << KW_CATALOGS) | (1L << KW_CENTURY) | (1L << KW_CHAIN) | (1L << KW_CHANGELOG_MODE) | (1L << KW_CHARACTERS) | (1L << KW_COMMENT) | (1L << KW_COMPACT) | (1L << KW_COLUMNS) | (1L << KW_CONSTRAINTS) | (1L << KW_CONSTRUCTOR) | (1L << KW_CUMULATE) | (1L << KW_DATA) | (1L << KW_DATABASE) | (1L << KW_DATABASES) | (1L << KW_DAYS) | (1L << KW_DECADE) | (1L << KW_DEFINED) | (1L << KW_DESC) | (1L << KW_DESCRIPTOR) | (1L << KW_DIV) | (1L << KW_ENCODING) | (1L << KW_ENFORCED) | (1L << KW_ENGINE) | (1L << KW_EPOCH) | (1L << KW_ERROR) | (1L << KW_ESTIMATED_COST) | (1L << KW_EXCEPTION) | (1L << KW_EXCLUDE) | (1L << KW_EXCLUDING) | (1L << KW_EXTENDED) | (1L << KW_FILTER) | (1L << KW_FILE) | (1L << KW_FINAL) | (1L << KW_FIRST) | (1L << KW_FOLLOWING) | (1L << KW_FORMAT) | (1L << KW_FORTRAN) | (1L << KW_FOUND) | (1L << KW_FRAC_SECOND) | (1L << KW_FUNCTIONS) | (1L << KW_GENERAL) | (1L << KW_GENERATED) | (1L << KW_GO) | (1L << KW_GOTO) | (1L << KW_GRANTED) | (1L << KW_HOP) | (1L << KW_HOURS) | (1L << KW_IF) | (1L << KW_IGNORE) | (1L << KW_INCREMENT))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (KW_INPUT - 64)) | (1L << (KW_INVOKER - 64)) | (1L << (KW_JAR - 64)) | (1L << (KW_JARS - 64)) | (1L << (KW_JAVA - 64)) | (1L << (KW_JSON - 64)) | (1L << (KW_JSON_EXECUTION_PLAN - 64)) | (1L << (KW_KEY - 64)) | (1L << (KW_KEY_MEMBER - 64)) | (1L << (KW_KEY_TYPE - 64)) | (1L << (KW_LABEL - 64)) | (1L << (KW_LAST - 64)) | (1L << (KW_LENGTH - 64)) | (1L << (KW_LEVEL - 64)) | (1L << (KW_LOAD - 64)) | (1L << (KW_MAP - 64)) | (1L << (KW_MICROSECOND - 64)) | (1L << (KW_MILLENNIUM - 64)) | (1L << (KW_MILLISECOND - 64)) | (1L << (KW_MINUTES - 64)) | (1L << (KW_MINVALUE - 64)) | (1L << (KW_MODIFY - 64)) | (1L << (KW_MODULES - 64)) | (1L << (KW_MONTHS - 64)) | (1L << (KW_NANOSECOND - 64)) | (1L << (KW_NULLS - 64)) | (1L << (KW_NUMBER - 64)) | (1L << (KW_OPTION - 64)) | (1L << (KW_OPTIONS - 64)) | (1L << (KW_ORDERING - 64)) | (1L << (KW_OUTPUT - 64)) | (1L << (KW_OVERWRITE - 64)) | (1L << (KW_OVERWRITING - 64)) | (1L << (KW_PARTITIONED - 64)) | (1L << (KW_PARTITIONS - 64)) | (1L << (KW_PASSING - 64)) | (1L << (KW_PAST - 64)) | (1L << (KW_PATH - 64)) | (1L << (KW_PLACING - 64)) | (1L << (KW_PLAN - 64)) | (1L << (KW_PRECEDING - 64)) | (1L << (KW_PRESERVE - 64)) | (1L << (KW_PRIOR - 64)) | (1L << (KW_PRIVILEGES - 64)) | (1L << (KW_PUBLIC - 64)) | (1L << (KW_PYTHON - 64)) | (1L << (KW_PYTHON_FILES - 64)) | (1L << (KW_PYTHON_REQUIREMENTS - 64)) | (1L << (KW_PYTHON_DEPENDENCIES - 64)) | (1L << (KW_PYTHON_JAR - 64)) | (1L << (KW_PYTHON_ARCHIVES - 64)) | (1L << (KW_PYTHON_PARAMETER - 64)) | (1L << (KW_QUARTER - 64)) | (1L << (KW_RAW - 64)) | (1L << (KW_READ - 64)) | (1L << (KW_RELATIVE - 64)) | (1L << (KW_REMOVE - 64)) | (1L << (KW_RENAME - 64)) | (1L << (KW_REPLACE - 64)) | (1L << (KW_RESPECT - 64)) | (1L << (KW_RESTART - 64)) | (1L << (KW_RESTRICT - 64)) | (1L << (KW_ROLE - 64)) | (1L << (KW_ROW_COUNT - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (KW_SCALA - 128)) | (1L << (KW_SCALAR - 128)) | (1L << (KW_SCALE - 128)) | (1L << (KW_SCHEMA - 128)) | (1L << (KW_SECONDS - 128)) | (1L << (KW_SECTION - 128)) | (1L << (KW_SECURITY - 128)) | (1L << (KW_SELF - 128)) | (1L << (KW_SERVER - 128)) | (1L << (KW_SERVER_NAME - 128)) | (1L << (KW_SESSION - 128)) | (1L << (KW_SETS - 128)) | (1L << (KW_SIMPLE - 128)) | (1L << (KW_SIZE - 128)) | (1L << (KW_SLIDE - 128)) | (1L << (KW_SOURCE - 128)) | (1L << (KW_SPACE - 128)) | (1L << (KW_STATE - 128)) | (1L << (KW_STATEMENT - 128)) | (1L << (KW_STEP - 128)) | (1L << (KW_STRING - 128)) | (1L << (KW_STRUCTURE - 128)) | (1L << (KW_STYLE - 128)) | (1L << (KW_TABLES - 128)) | (1L << (KW_TEMPORARY - 128)) | (1L << (KW_TIMECOL - 128)) | (1L << (KW_FLOOR - 128)) | (1L << (KW_TIMESTAMP_LTZ - 128)) | (1L << (KW_TIMESTAMPADD - 128)) | (1L << (KW_TIMESTAMPDIFF - 128)) | (1L << (KW_TRANSFORM - 128)) | (1L << (KW_TUMBLE - 128)) | (1L << (KW_TYPE - 128)) | (1L << (KW_UNDER - 128)) | (1L << (KW_UNLOAD - 128)) | (1L << (KW_USAGE - 128)) | (1L << (KW_USE - 128)) | (1L << (KW_UTF16 - 128)) | (1L << (KW_UTF32 - 128)) | (1L << (KW_UTF8 - 128)) | (1L << (KW_VERSION - 128)) | (1L << (KW_VIEW - 128)) | (1L << (KW_VIEWS - 128)) | (1L << (KW_VIRTUAL - 128)) | (1L << (KW_WATERMARK - 128)) | (1L << (KW_WATERMARKS - 128)) | (1L << (KW_WEEK - 128)) | (1L << (KW_WEEKS - 128)) | (1L << (KW_WORK - 128)) | (1L << (KW_WRAPPER - 128)) | (1L << (KW_YEARS - 128)) | (1L << (KW_ZONE - 128)) | (1L << (KW_ABS - 128)) | (1L << (KW_ALL - 128)) | (1L << (KW_ARRAY - 128)) | (1L << (KW_AVG - 128)))) != 0) || ((((_la - 199)) & ~0x3f) == 0 && ((1L << (_la - 199)) & ((1L << (KW_BOTH - 199)) | (1L << (KW_CASE - 199)) | (1L << (KW_CAST - 199)) | (1L << (KW_CEIL - 199)) | (1L << (KW_COALESCE - 199)) | (1L << (KW_COLLECT - 199)) | (1L << (KW_COUNT - 199)) | (1L << (KW_DATE - 199)) | (1L << (KW_DAY - 199)) | (1L << (KW_DISTINCT - 199)) | (1L << (KW_EXISTS - 199)) | (1L << (KW_FALSE - 199)) | (1L << (KW_GROUPING - 199)))) != 0) || ((((_la - 264)) & ~0x3f) == 0 && ((1L << (_la - 264)) & ((1L << (KW_HOUR - 264)) | (1L << (KW_INTERVAL - 264)) | (1L << (KW_LAG - 264)) | (1L << (KW_LEADING - 264)) | (1L << (KW_LEFT - 264)) | (1L << (KW_MINUTE - 264)) | (1L << (KW_MONTH - 264)) | (1L << (KW_NOT - 264)) | (1L << (KW_NULL - 264)) | (1L << (KW_OVERLAY - 264)) | (1L << (KW_POSITION - 264)) | (1L << (KW_POWER - 264)) | (1L << (KW_RANK - 264)) | (1L << (KW_RIGHT - 264)))) != 0) || ((((_la - 330)) & ~0x3f) == 0 && ((1L << (_la - 330)) & ((1L << (KW_ROW - 330)) | (1L << (KW_SECOND - 330)) | (1L << (KW_SUBSTRING - 330)) | (1L << (KW_SUM - 330)) | (1L << (KW_TIME - 330)) | (1L << (KW_TIMESTAMP - 330)) | (1L << (KW_TIMESTAMP_3 - 330)) | (1L << (KW_TIMESTAMP_6 - 330)) | (1L << (KW_TIMESTAMP_9 - 330)) | (1L << (KW_TRAILING - 330)) | (1L << (KW_TRUE - 330)) | (1L << (KW_TRUNCATE - 330)) | (1L << (KW_UPPER - 330)) | (1L << (KW_YEAR - 330)) | (1L << (BIT_NOT_OP - 330)) | (1L << (LR_BRACKET - 330)))) != 0) || ((((_la - 401)) & ~0x3f) == 0 && ((1L << (_la - 401)) & ((1L << (ASTERISK_SIGN - 401)) | (1L << (HYPNEN_SIGN - 401)) | (1L << (ADD_SIGN - 401)) | (1L << (STRING_LITERAL - 401)) | (1L << (DIG_LITERAL - 401)) | (1L << (REAL_LITERAL - 401)) | (1L << (BIT_STRING - 401)) | (1L << (ID_LITERAL - 401)))) != 0)) {
					{
					setState(2002);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,228,_ctx) ) {
					case 1:
						{
						setState(2001);
						setQuantifier();
						}
						break;
					}
					setState(2004);
					functionParam();
					setState(2009);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(2005);
						match(COMMA);
						setState(2006);
						functionParam();
						}
						}
						setState(2011);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(2014);
				match(RR_BRACKET);
				}
				break;
			case 12:
				{
				_localctx = new FunctionCallContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(2016);
				functionName();
				setState(2017);
				match(LR_BRACKET);
				setState(2018);
				functionParam();
				setState(2019);
				match(KW_TO);
				setState(2020);
				functionParam();
				setState(2021);
				match(RR_BRACKET);
				}
				break;
			case 13:
				{
				_localctx = new FunctionCallFilterContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(2023);
				functionName();
				setState(2024);
				match(LR_BRACKET);
				setState(2026);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,231,_ctx) ) {
				case 1:
					{
					setState(2025);
					setQuantifier();
					}
					break;
				}
				setState(2028);
				functionParam();
				setState(2029);
				match(RR_BRACKET);
				setState(2031);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,232,_ctx) ) {
				case 1:
					{
					setState(2030);
					filterClause();
					}
					break;
				}
				}
				break;
			case 14:
				{
				_localctx = new ColumnReferenceContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(2033);
				identifier();
				}
				break;
			case 15:
				{
				_localctx = new DereferenceContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(2034);
				dereferenceDefinition();
				}
				break;
			case 16:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(2035);
				match(LR_BRACKET);
				setState(2036);
				expression();
				setState(2037);
				match(RR_BRACKET);
				}
				break;
			case 17:
				{
				_localctx = new ComplexDataTypeFieldExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(2039);
				complexDataTypeExpression();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(2049);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,234,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new SubscriptContext(new PrimaryExpressionContext(_parentctx, _parentState));
					((SubscriptContext)_localctx).value = _prevctx;
					pushNewRecursionContext(_localctx, _startState, RULE_primaryExpression);
					setState(2042);
					if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
					setState(2043);
					match(LS_BRACKET);
					setState(2044);
					((SubscriptContext)_localctx).index = valueExpression(0);
					setState(2045);
					match(RS_BRACKET);
					}
					} 
				}
				setState(2051);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,234,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ComplexDataTypeExpressionContext extends ParserRuleContext {
		public ArrayExpressionContext arrayExpression() {
			return getRuleContext(ArrayExpressionContext.class,0);
		}
		public RowExpressionContext rowExpression() {
			return getRuleContext(RowExpressionContext.class,0);
		}
		public MapExpressionContext mapExpression() {
			return getRuleContext(MapExpressionContext.class,0);
		}
		public ComplexDataTypeExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_complexDataTypeExpression; }
	}

	public final ComplexDataTypeExpressionContext complexDataTypeExpression() throws RecognitionException {
		ComplexDataTypeExpressionContext _localctx = new ComplexDataTypeExpressionContext(_ctx, getState());
		enterRule(_localctx, 270, RULE_complexDataTypeExpression);
		try {
			setState(2055);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_ARRAY:
				enterOuterAlt(_localctx, 1);
				{
				setState(2052);
				arrayExpression();
				}
				break;
			case KW_ROW:
				enterOuterAlt(_localctx, 2);
				{
				setState(2053);
				rowExpression();
				}
				break;
			case KW_MAP:
				enterOuterAlt(_localctx, 3);
				{
				setState(2054);
				mapExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayExpressionContext extends ParserRuleContext {
		public TerminalNode KW_ARRAY() { return getToken(FlinkSQLParser.KW_ARRAY, 0); }
		public TerminalNode LS_BRACKET() { return getToken(FlinkSQLParser.LS_BRACKET, 0); }
		public List<DataTypeExpressionContext> dataTypeExpression() {
			return getRuleContexts(DataTypeExpressionContext.class);
		}
		public DataTypeExpressionContext dataTypeExpression(int i) {
			return getRuleContext(DataTypeExpressionContext.class,i);
		}
		public TerminalNode RS_BRACKET() { return getToken(FlinkSQLParser.RS_BRACKET, 0); }
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public ArrayExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayExpression; }
	}

	public final ArrayExpressionContext arrayExpression() throws RecognitionException {
		ArrayExpressionContext _localctx = new ArrayExpressionContext(_ctx, getState());
		enterRule(_localctx, 272, RULE_arrayExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2057);
			match(KW_ARRAY);
			setState(2058);
			match(LS_BRACKET);
			setState(2059);
			dataTypeExpression();
			setState(2064);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(2060);
				match(COMMA);
				setState(2061);
				dataTypeExpression();
				}
				}
				setState(2066);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(2067);
			match(RS_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RowExpressionContext extends ParserRuleContext {
		public TerminalNode KW_ROW() { return getToken(FlinkSQLParser.KW_ROW, 0); }
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public List<DataTypeExpressionContext> dataTypeExpression() {
			return getRuleContexts(DataTypeExpressionContext.class);
		}
		public DataTypeExpressionContext dataTypeExpression(int i) {
			return getRuleContext(DataTypeExpressionContext.class,i);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public RowExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rowExpression; }
	}

	public final RowExpressionContext rowExpression() throws RecognitionException {
		RowExpressionContext _localctx = new RowExpressionContext(_ctx, getState());
		enterRule(_localctx, 274, RULE_rowExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2069);
			match(KW_ROW);
			setState(2070);
			match(LR_BRACKET);
			setState(2071);
			dataTypeExpression();
			setState(2076);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(2072);
				match(COMMA);
				setState(2073);
				dataTypeExpression();
				}
				}
				setState(2078);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(2079);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MapExpressionContext extends ParserRuleContext {
		public TerminalNode KW_MAP() { return getToken(FlinkSQLParser.KW_MAP, 0); }
		public TerminalNode LS_BRACKET() { return getToken(FlinkSQLParser.LS_BRACKET, 0); }
		public List<DataTypeExpressionContext> dataTypeExpression() {
			return getRuleContexts(DataTypeExpressionContext.class);
		}
		public DataTypeExpressionContext dataTypeExpression(int i) {
			return getRuleContext(DataTypeExpressionContext.class,i);
		}
		public TerminalNode COMMA() { return getToken(FlinkSQLParser.COMMA, 0); }
		public TerminalNode RS_BRACKET() { return getToken(FlinkSQLParser.RS_BRACKET, 0); }
		public MapExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mapExpression; }
	}

	public final MapExpressionContext mapExpression() throws RecognitionException {
		MapExpressionContext _localctx = new MapExpressionContext(_ctx, getState());
		enterRule(_localctx, 276, RULE_mapExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2081);
			match(KW_MAP);
			setState(2082);
			match(LS_BRACKET);
			setState(2083);
			dataTypeExpression();
			setState(2084);
			match(COMMA);
			setState(2085);
			dataTypeExpression();
			setState(2086);
			match(RS_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeExpressionContext extends ParserRuleContext {
		public ColumnAliasContext columnAlias() {
			return getRuleContext(ColumnAliasContext.class,0);
		}
		public ComplexDataTypeExpressionContext complexDataTypeExpression() {
			return getRuleContext(ComplexDataTypeExpressionContext.class,0);
		}
		public DataTypeExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataTypeExpression; }
	}

	public final DataTypeExpressionContext dataTypeExpression() throws RecognitionException {
		DataTypeExpressionContext _localctx = new DataTypeExpressionContext(_ctx, getState());
		enterRule(_localctx, 278, RULE_dataTypeExpression);
		try {
			setState(2090);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,238,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2088);
				columnAlias();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2089);
				complexDataTypeExpression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionNameContext extends ParserRuleContext {
		public ReservedKeywordsUsedAsFuncNameContext reservedKeywordsUsedAsFuncName() {
			return getRuleContext(ReservedKeywordsUsedAsFuncNameContext.class,0);
		}
		public NonReservedKeywordsContext nonReservedKeywords() {
			return getRuleContext(NonReservedKeywordsContext.class,0);
		}
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public FunctionNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionName; }
	}

	public final FunctionNameContext functionName() throws RecognitionException {
		FunctionNameContext _localctx = new FunctionNameContext(_ctx, getState());
		enterRule(_localctx, 280, RULE_functionName);
		try {
			setState(2095);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,239,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2092);
				reservedKeywordsUsedAsFuncName();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2093);
				nonReservedKeywords();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2094);
				uid();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionParamContext extends ParserRuleContext {
		public ReservedKeywordsUsedAsFuncParamContext reservedKeywordsUsedAsFuncParam() {
			return getRuleContext(ReservedKeywordsUsedAsFuncParamContext.class,0);
		}
		public TimeIntervalUnitContext timeIntervalUnit() {
			return getRuleContext(TimeIntervalUnitContext.class,0);
		}
		public TimePointUnitContext timePointUnit() {
			return getRuleContext(TimePointUnitContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public FilterClauseContext filterClause() {
			return getRuleContext(FilterClauseContext.class,0);
		}
		public FunctionParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionParam; }
	}

	public final FunctionParamContext functionParam() throws RecognitionException {
		FunctionParamContext _localctx = new FunctionParamContext(_ctx, getState());
		enterRule(_localctx, 282, RULE_functionParam);
		try {
			setState(2102);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,240,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2097);
				reservedKeywordsUsedAsFuncParam();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2098);
				timeIntervalUnit();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2099);
				timePointUnit();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2100);
				expression();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(2101);
				filterClause();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FilterClauseContext extends ParserRuleContext {
		public TerminalNode KW_FILTER() { return getToken(FlinkSQLParser.KW_FILTER, 0); }
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public TerminalNode KW_WHERE() { return getToken(FlinkSQLParser.KW_WHERE, 0); }
		public BooleanExpressionContext booleanExpression() {
			return getRuleContext(BooleanExpressionContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public FilterClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_filterClause; }
	}

	public final FilterClauseContext filterClause() throws RecognitionException {
		FilterClauseContext _localctx = new FilterClauseContext(_ctx, getState());
		enterRule(_localctx, 284, RULE_filterClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2104);
			match(KW_FILTER);
			setState(2105);
			match(LR_BRACKET);
			setState(2106);
			match(KW_WHERE);
			setState(2107);
			booleanExpression(0);
			setState(2108);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DereferenceDefinitionContext extends ParserRuleContext {
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public DereferenceDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dereferenceDefinition; }
	}

	public final DereferenceDefinitionContext dereferenceDefinition() throws RecognitionException {
		DereferenceDefinitionContext _localctx = new DereferenceDefinitionContext(_ctx, getState());
		enterRule(_localctx, 286, RULE_dereferenceDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2110);
			uid();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CorrelationNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public CorrelationNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_correlationName; }
	}

	public final CorrelationNameContext correlationName() throws RecognitionException {
		CorrelationNameContext _localctx = new CorrelationNameContext(_ctx, getState());
		enterRule(_localctx, 288, RULE_correlationName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2112);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QualifiedNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public DereferenceDefinitionContext dereferenceDefinition() {
			return getRuleContext(DereferenceDefinitionContext.class,0);
		}
		public QualifiedNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_qualifiedName; }
	}

	public final QualifiedNameContext qualifiedName() throws RecognitionException {
		QualifiedNameContext _localctx = new QualifiedNameContext(_ctx, getState());
		enterRule(_localctx, 290, RULE_qualifiedName);
		try {
			setState(2116);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,241,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2114);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2115);
				dereferenceDefinition();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TimeIntervalExpressionContext extends ParserRuleContext {
		public TerminalNode KW_INTERVAL() { return getToken(FlinkSQLParser.KW_INTERVAL, 0); }
		public ErrorCapturingMultiUnitsIntervalContext errorCapturingMultiUnitsInterval() {
			return getRuleContext(ErrorCapturingMultiUnitsIntervalContext.class,0);
		}
		public ErrorCapturingUnitToUnitIntervalContext errorCapturingUnitToUnitInterval() {
			return getRuleContext(ErrorCapturingUnitToUnitIntervalContext.class,0);
		}
		public TimeIntervalExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_timeIntervalExpression; }
	}

	public final TimeIntervalExpressionContext timeIntervalExpression() throws RecognitionException {
		TimeIntervalExpressionContext _localctx = new TimeIntervalExpressionContext(_ctx, getState());
		enterRule(_localctx, 292, RULE_timeIntervalExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2118);
			match(KW_INTERVAL);
			setState(2121);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,242,_ctx) ) {
			case 1:
				{
				setState(2119);
				errorCapturingMultiUnitsInterval();
				}
				break;
			case 2:
				{
				setState(2120);
				errorCapturingUnitToUnitInterval();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ErrorCapturingMultiUnitsIntervalContext extends ParserRuleContext {
		public MultiUnitsIntervalContext multiUnitsInterval() {
			return getRuleContext(MultiUnitsIntervalContext.class,0);
		}
		public UnitToUnitIntervalContext unitToUnitInterval() {
			return getRuleContext(UnitToUnitIntervalContext.class,0);
		}
		public ErrorCapturingMultiUnitsIntervalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_errorCapturingMultiUnitsInterval; }
	}

	public final ErrorCapturingMultiUnitsIntervalContext errorCapturingMultiUnitsInterval() throws RecognitionException {
		ErrorCapturingMultiUnitsIntervalContext _localctx = new ErrorCapturingMultiUnitsIntervalContext(_ctx, getState());
		enterRule(_localctx, 294, RULE_errorCapturingMultiUnitsInterval);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2123);
			multiUnitsInterval();
			setState(2125);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,243,_ctx) ) {
			case 1:
				{
				setState(2124);
				unitToUnitInterval();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MultiUnitsIntervalContext extends ParserRuleContext {
		public List<IntervalValueContext> intervalValue() {
			return getRuleContexts(IntervalValueContext.class);
		}
		public IntervalValueContext intervalValue(int i) {
			return getRuleContext(IntervalValueContext.class,i);
		}
		public List<TimeIntervalUnitContext> timeIntervalUnit() {
			return getRuleContexts(TimeIntervalUnitContext.class);
		}
		public TimeIntervalUnitContext timeIntervalUnit(int i) {
			return getRuleContext(TimeIntervalUnitContext.class,i);
		}
		public MultiUnitsIntervalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multiUnitsInterval; }
	}

	public final MultiUnitsIntervalContext multiUnitsInterval() throws RecognitionException {
		MultiUnitsIntervalContext _localctx = new MultiUnitsIntervalContext(_ctx, getState());
		enterRule(_localctx, 296, RULE_multiUnitsInterval);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(2130); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(2127);
					intervalValue();
					setState(2128);
					timeIntervalUnit();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(2132); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,244,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ErrorCapturingUnitToUnitIntervalContext extends ParserRuleContext {
		public UnitToUnitIntervalContext body;
		public MultiUnitsIntervalContext error1;
		public UnitToUnitIntervalContext error2;
		public List<UnitToUnitIntervalContext> unitToUnitInterval() {
			return getRuleContexts(UnitToUnitIntervalContext.class);
		}
		public UnitToUnitIntervalContext unitToUnitInterval(int i) {
			return getRuleContext(UnitToUnitIntervalContext.class,i);
		}
		public MultiUnitsIntervalContext multiUnitsInterval() {
			return getRuleContext(MultiUnitsIntervalContext.class,0);
		}
		public ErrorCapturingUnitToUnitIntervalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_errorCapturingUnitToUnitInterval; }
	}

	public final ErrorCapturingUnitToUnitIntervalContext errorCapturingUnitToUnitInterval() throws RecognitionException {
		ErrorCapturingUnitToUnitIntervalContext _localctx = new ErrorCapturingUnitToUnitIntervalContext(_ctx, getState());
		enterRule(_localctx, 298, RULE_errorCapturingUnitToUnitInterval);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2134);
			((ErrorCapturingUnitToUnitIntervalContext)_localctx).body = unitToUnitInterval();
			setState(2137);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,245,_ctx) ) {
			case 1:
				{
				setState(2135);
				((ErrorCapturingUnitToUnitIntervalContext)_localctx).error1 = multiUnitsInterval();
				}
				break;
			case 2:
				{
				setState(2136);
				((ErrorCapturingUnitToUnitIntervalContext)_localctx).error2 = unitToUnitInterval();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnitToUnitIntervalContext extends ParserRuleContext {
		public IntervalValueContext value;
		public TimeIntervalUnitContext from;
		public TimeIntervalUnitContext to;
		public TerminalNode KW_TO() { return getToken(FlinkSQLParser.KW_TO, 0); }
		public IntervalValueContext intervalValue() {
			return getRuleContext(IntervalValueContext.class,0);
		}
		public List<TimeIntervalUnitContext> timeIntervalUnit() {
			return getRuleContexts(TimeIntervalUnitContext.class);
		}
		public TimeIntervalUnitContext timeIntervalUnit(int i) {
			return getRuleContext(TimeIntervalUnitContext.class,i);
		}
		public UnitToUnitIntervalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unitToUnitInterval; }
	}

	public final UnitToUnitIntervalContext unitToUnitInterval() throws RecognitionException {
		UnitToUnitIntervalContext _localctx = new UnitToUnitIntervalContext(_ctx, getState());
		enterRule(_localctx, 300, RULE_unitToUnitInterval);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2139);
			((UnitToUnitIntervalContext)_localctx).value = intervalValue();
			setState(2140);
			((UnitToUnitIntervalContext)_localctx).from = timeIntervalUnit();
			setState(2141);
			match(KW_TO);
			setState(2142);
			((UnitToUnitIntervalContext)_localctx).to = timeIntervalUnit();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IntervalValueContext extends ParserRuleContext {
		public TerminalNode DIG_LITERAL() { return getToken(FlinkSQLParser.DIG_LITERAL, 0); }
		public TerminalNode REAL_LITERAL() { return getToken(FlinkSQLParser.REAL_LITERAL, 0); }
		public TerminalNode ADD_SIGN() { return getToken(FlinkSQLParser.ADD_SIGN, 0); }
		public TerminalNode HYPNEN_SIGN() { return getToken(FlinkSQLParser.HYPNEN_SIGN, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(FlinkSQLParser.STRING_LITERAL, 0); }
		public IntervalValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_intervalValue; }
	}

	public final IntervalValueContext intervalValue() throws RecognitionException {
		IntervalValueContext _localctx = new IntervalValueContext(_ctx, getState());
		enterRule(_localctx, 302, RULE_intervalValue);
		int _la;
		try {
			setState(2149);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case HYPNEN_SIGN:
			case ADD_SIGN:
			case DIG_LITERAL:
			case REAL_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(2145);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==HYPNEN_SIGN || _la==ADD_SIGN) {
					{
					setState(2144);
					_la = _input.LA(1);
					if ( !(_la==HYPNEN_SIGN || _la==ADD_SIGN) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
				}

				setState(2147);
				_la = _input.LA(1);
				if ( !(_la==DIG_LITERAL || _la==REAL_LITERAL) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(2148);
				match(STRING_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColumnAliasContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode KW_AS() { return getToken(FlinkSQLParser.KW_AS, 0); }
		public IdentifierListContext identifierList() {
			return getRuleContext(IdentifierListContext.class,0);
		}
		public ColumnAliasContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_columnAlias; }
	}

	public final ColumnAliasContext columnAlias() throws RecognitionException {
		ColumnAliasContext _localctx = new ColumnAliasContext(_ctx, getState());
		enterRule(_localctx, 304, RULE_columnAlias);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2152);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_AS) {
				{
				setState(2151);
				match(KW_AS);
				}
			}

			setState(2154);
			identifier();
			setState(2156);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LR_BRACKET) {
				{
				setState(2155);
				identifierList();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TableAliasContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode KW_AS() { return getToken(FlinkSQLParser.KW_AS, 0); }
		public IdentifierListContext identifierList() {
			return getRuleContext(IdentifierListContext.class,0);
		}
		public TableAliasContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableAlias; }
	}

	public final TableAliasContext tableAlias() throws RecognitionException {
		TableAliasContext _localctx = new TableAliasContext(_ctx, getState());
		enterRule(_localctx, 306, RULE_tableAlias);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2159);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_AS) {
				{
				setState(2158);
				match(KW_AS);
				}
			}

			setState(2161);
			identifier();
			setState(2163);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,251,_ctx) ) {
			case 1:
				{
				setState(2162);
				identifierList();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ErrorCapturingIdentifierContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ErrorCapturingIdentifierExtraContext errorCapturingIdentifierExtra() {
			return getRuleContext(ErrorCapturingIdentifierExtraContext.class,0);
		}
		public ErrorCapturingIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_errorCapturingIdentifier; }
	}

	public final ErrorCapturingIdentifierContext errorCapturingIdentifier() throws RecognitionException {
		ErrorCapturingIdentifierContext _localctx = new ErrorCapturingIdentifierContext(_ctx, getState());
		enterRule(_localctx, 308, RULE_errorCapturingIdentifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2165);
			identifier();
			setState(2166);
			errorCapturingIdentifierExtra();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ErrorCapturingIdentifierExtraContext extends ParserRuleContext {
		public ErrorCapturingIdentifierExtraContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_errorCapturingIdentifierExtra; }
	 
		public ErrorCapturingIdentifierExtraContext() { }
		public void copyFrom(ErrorCapturingIdentifierExtraContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ErrorIdentContext extends ErrorCapturingIdentifierExtraContext {
		public List<TerminalNode> KW_MINUS() { return getTokens(FlinkSQLParser.KW_MINUS); }
		public TerminalNode KW_MINUS(int i) {
			return getToken(FlinkSQLParser.KW_MINUS, i);
		}
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public ErrorIdentContext(ErrorCapturingIdentifierExtraContext ctx) { copyFrom(ctx); }
	}
	public static class RealIdentContext extends ErrorCapturingIdentifierExtraContext {
		public RealIdentContext(ErrorCapturingIdentifierExtraContext ctx) { copyFrom(ctx); }
	}

	public final ErrorCapturingIdentifierExtraContext errorCapturingIdentifierExtra() throws RecognitionException {
		ErrorCapturingIdentifierExtraContext _localctx = new ErrorCapturingIdentifierExtraContext(_ctx, getState());
		enterRule(_localctx, 310, RULE_errorCapturingIdentifierExtra);
		int _la;
		try {
			setState(2175);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_MINUS:
				_localctx = new ErrorIdentContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(2170); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(2168);
					match(KW_MINUS);
					setState(2169);
					identifier();
					}
					}
					setState(2172); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==KW_MINUS );
				}
				break;
			case KW_AS:
			case LR_BRACKET:
				_localctx = new RealIdentContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierListContext extends ParserRuleContext {
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public IdentifierSeqContext identifierSeq() {
			return getRuleContext(IdentifierSeqContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public IdentifierListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierList; }
	}

	public final IdentifierListContext identifierList() throws RecognitionException {
		IdentifierListContext _localctx = new IdentifierListContext(_ctx, getState());
		enterRule(_localctx, 312, RULE_identifierList);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2177);
			match(LR_BRACKET);
			setState(2178);
			identifierSeq();
			setState(2179);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierSeqContext extends ParserRuleContext {
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public IdentifierSeqContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierSeq; }
	}

	public final IdentifierSeqContext identifierSeq() throws RecognitionException {
		IdentifierSeqContext _localctx = new IdentifierSeqContext(_ctx, getState());
		enterRule(_localctx, 314, RULE_identifierSeq);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2181);
			identifier();
			setState(2186);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(2182);
				match(COMMA);
				setState(2183);
				identifier();
				}
				}
				setState(2188);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierContext extends ParserRuleContext {
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	 
		public IdentifierContext() { }
		public void copyFrom(IdentifierContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class QuotedIdentifierAlternativeContext extends IdentifierContext {
		public QuotedIdentifierContext quotedIdentifier() {
			return getRuleContext(QuotedIdentifierContext.class,0);
		}
		public QuotedIdentifierAlternativeContext(IdentifierContext ctx) { copyFrom(ctx); }
	}
	public static class NonReservedKeywordsAlternativeContext extends IdentifierContext {
		public NonReservedKeywordsContext nonReservedKeywords() {
			return getRuleContext(NonReservedKeywordsContext.class,0);
		}
		public NonReservedKeywordsAlternativeContext(IdentifierContext ctx) { copyFrom(ctx); }
	}
	public static class UnquotedIdentifierAlternativeContext extends IdentifierContext {
		public UnquotedIdentifierContext unquotedIdentifier() {
			return getRuleContext(UnquotedIdentifierContext.class,0);
		}
		public UnquotedIdentifierAlternativeContext(IdentifierContext ctx) { copyFrom(ctx); }
	}
	public static class UrefVarAlternativeContext extends IdentifierContext {
		public RefVarContext refVar() {
			return getRuleContext(RefVarContext.class,0);
		}
		public UrefVarAlternativeContext(IdentifierContext ctx) { copyFrom(ctx); }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 316, RULE_identifier);
		try {
			setState(2193);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DIG_LITERAL:
			case ID_LITERAL:
				_localctx = new UnquotedIdentifierAlternativeContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(2189);
				unquotedIdentifier();
				}
				break;
			case STRING_LITERAL:
				_localctx = new QuotedIdentifierAlternativeContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(2190);
				quotedIdentifier();
				}
				break;
			case KW_ADD:
			case KW_ADMIN:
			case KW_AFTER:
			case KW_ANALYZE:
			case KW_ASC:
			case KW_BEFORE:
			case KW_BYTES:
			case KW_CASCADE:
			case KW_CATALOG:
			case KW_CATALOGS:
			case KW_CENTURY:
			case KW_CHAIN:
			case KW_CHANGELOG_MODE:
			case KW_CHARACTERS:
			case KW_COMMENT:
			case KW_COMPACT:
			case KW_COLUMNS:
			case KW_CONSTRAINTS:
			case KW_CONSTRUCTOR:
			case KW_CUMULATE:
			case KW_DATA:
			case KW_DATABASE:
			case KW_DATABASES:
			case KW_DAYS:
			case KW_DECADE:
			case KW_DEFINED:
			case KW_DESC:
			case KW_DESCRIPTOR:
			case KW_DIV:
			case KW_ENCODING:
			case KW_ENFORCED:
			case KW_ENGINE:
			case KW_ERROR:
			case KW_ESTIMATED_COST:
			case KW_EXCEPTION:
			case KW_EXCLUDE:
			case KW_EXCLUDING:
			case KW_EXTENDED:
			case KW_FILE:
			case KW_FINAL:
			case KW_FIRST:
			case KW_FOLLOWING:
			case KW_FORMAT:
			case KW_FORTRAN:
			case KW_FOUND:
			case KW_FRAC_SECOND:
			case KW_FUNCTIONS:
			case KW_GENERAL:
			case KW_GENERATED:
			case KW_GO:
			case KW_GOTO:
			case KW_GRANTED:
			case KW_HOP:
			case KW_HOURS:
			case KW_IF:
			case KW_IGNORE:
			case KW_INCREMENT:
			case KW_INPUT:
			case KW_INVOKER:
			case KW_JAR:
			case KW_JARS:
			case KW_JAVA:
			case KW_JSON:
			case KW_JSON_EXECUTION_PLAN:
			case KW_KEY:
			case KW_KEY_MEMBER:
			case KW_KEY_TYPE:
			case KW_LABEL:
			case KW_LAST:
			case KW_LENGTH:
			case KW_LEVEL:
			case KW_LOAD:
			case KW_MAP:
			case KW_MICROSECOND:
			case KW_MILLENNIUM:
			case KW_MILLISECOND:
			case KW_MINUTES:
			case KW_MINVALUE:
			case KW_MODIFY:
			case KW_MODULES:
			case KW_MONTHS:
			case KW_NANOSECOND:
			case KW_NULLS:
			case KW_NUMBER:
			case KW_OPTION:
			case KW_OPTIONS:
			case KW_ORDERING:
			case KW_OUTPUT:
			case KW_OVERWRITE:
			case KW_OVERWRITING:
			case KW_PARTITIONED:
			case KW_PARTITIONS:
			case KW_PASSING:
			case KW_PAST:
			case KW_PATH:
			case KW_PLACING:
			case KW_PLAN:
			case KW_PRECEDING:
			case KW_PRESERVE:
			case KW_PRIOR:
			case KW_PRIVILEGES:
			case KW_PUBLIC:
			case KW_PYTHON:
			case KW_PYTHON_FILES:
			case KW_PYTHON_REQUIREMENTS:
			case KW_PYTHON_DEPENDENCIES:
			case KW_PYTHON_JAR:
			case KW_PYTHON_ARCHIVES:
			case KW_PYTHON_PARAMETER:
			case KW_QUARTER:
			case KW_RAW:
			case KW_READ:
			case KW_RELATIVE:
			case KW_REMOVE:
			case KW_RENAME:
			case KW_REPLACE:
			case KW_RESPECT:
			case KW_RESTART:
			case KW_RESTRICT:
			case KW_ROLE:
			case KW_ROW_COUNT:
			case KW_SCALA:
			case KW_SCALAR:
			case KW_SCALE:
			case KW_SCHEMA:
			case KW_SECONDS:
			case KW_SECTION:
			case KW_SECURITY:
			case KW_SELF:
			case KW_SERVER:
			case KW_SERVER_NAME:
			case KW_SESSION:
			case KW_SETS:
			case KW_SIMPLE:
			case KW_SIZE:
			case KW_SLIDE:
			case KW_SOURCE:
			case KW_SPACE:
			case KW_STATE:
			case KW_STATEMENT:
			case KW_STEP:
			case KW_STRING:
			case KW_STRUCTURE:
			case KW_STYLE:
			case KW_TABLES:
			case KW_TEMPORARY:
			case KW_TIMECOL:
			case KW_FLOOR:
			case KW_TIMESTAMP_LTZ:
			case KW_TIMESTAMPADD:
			case KW_TIMESTAMPDIFF:
			case KW_TRANSFORM:
			case KW_TUMBLE:
			case KW_TYPE:
			case KW_UNDER:
			case KW_UNLOAD:
			case KW_USAGE:
			case KW_USE:
			case KW_UTF16:
			case KW_UTF32:
			case KW_UTF8:
			case KW_VERSION:
			case KW_VIEW:
			case KW_VIEWS:
			case KW_VIRTUAL:
			case KW_WATERMARK:
			case KW_WATERMARKS:
			case KW_WEEK:
			case KW_WORK:
			case KW_WRAPPER:
			case KW_YEARS:
			case KW_ZONE:
				_localctx = new NonReservedKeywordsAlternativeContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(2191);
				nonReservedKeywords();
				}
				break;
			case T__0:
				_localctx = new UrefVarAlternativeContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(2192);
				refVar();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RefVarContext extends ParserRuleContext {
		public TerminalNode LB_BRACKET() { return getToken(FlinkSQLParser.LB_BRACKET, 0); }
		public UnquotedIdentifierContext unquotedIdentifier() {
			return getRuleContext(UnquotedIdentifierContext.class,0);
		}
		public TerminalNode RB_BRACKET() { return getToken(FlinkSQLParser.RB_BRACKET, 0); }
		public RefVarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_refVar; }
	}

	public final RefVarContext refVar() throws RecognitionException {
		RefVarContext _localctx = new RefVarContext(_ctx, getState());
		enterRule(_localctx, 318, RULE_refVar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2195);
			match(T__0);
			setState(2196);
			match(LB_BRACKET);
			setState(2197);
			unquotedIdentifier();
			setState(2198);
			match(RB_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnquotedIdentifierContext extends ParserRuleContext {
		public TerminalNode DIG_LITERAL() { return getToken(FlinkSQLParser.DIG_LITERAL, 0); }
		public TerminalNode ID_LITERAL() { return getToken(FlinkSQLParser.ID_LITERAL, 0); }
		public UnquotedIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unquotedIdentifier; }
	}

	public final UnquotedIdentifierContext unquotedIdentifier() throws RecognitionException {
		UnquotedIdentifierContext _localctx = new UnquotedIdentifierContext(_ctx, getState());
		enterRule(_localctx, 320, RULE_unquotedIdentifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2200);
			_la = _input.LA(1);
			if ( !(_la==DIG_LITERAL || _la==ID_LITERAL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QuotedIdentifierContext extends ParserRuleContext {
		public TerminalNode STRING_LITERAL() { return getToken(FlinkSQLParser.STRING_LITERAL, 0); }
		public QuotedIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_quotedIdentifier; }
	}

	public final QuotedIdentifierContext quotedIdentifier() throws RecognitionException {
		QuotedIdentifierContext _localctx = new QuotedIdentifierContext(_ctx, getState());
		enterRule(_localctx, 322, RULE_quotedIdentifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2202);
			match(STRING_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WhenClauseContext extends ParserRuleContext {
		public ExpressionContext condition;
		public ExpressionContext result;
		public TerminalNode KW_WHEN() { return getToken(FlinkSQLParser.KW_WHEN, 0); }
		public TerminalNode KW_THEN() { return getToken(FlinkSQLParser.KW_THEN, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public WhenClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whenClause; }
	}

	public final WhenClauseContext whenClause() throws RecognitionException {
		WhenClauseContext _localctx = new WhenClauseContext(_ctx, getState());
		enterRule(_localctx, 324, RULE_whenClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2204);
			match(KW_WHEN);
			setState(2205);
			((WhenClauseContext)_localctx).condition = expression();
			setState(2206);
			match(KW_THEN);
			setState(2207);
			((WhenClauseContext)_localctx).result = expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CatalogPathContext extends ParserRuleContext {
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public CatalogPathContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_catalogPath; }
	}

	public final CatalogPathContext catalogPath() throws RecognitionException {
		CatalogPathContext _localctx = new CatalogPathContext(_ctx, getState());
		enterRule(_localctx, 326, RULE_catalogPath);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2209);
			uid();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DatabasePathContext extends ParserRuleContext {
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public DatabasePathContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_databasePath; }
	}

	public final DatabasePathContext databasePath() throws RecognitionException {
		DatabasePathContext _localctx = new DatabasePathContext(_ctx, getState());
		enterRule(_localctx, 328, RULE_databasePath);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2211);
			uid();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DatabasePathCreateContext extends ParserRuleContext {
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public DatabasePathCreateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_databasePathCreate; }
	}

	public final DatabasePathCreateContext databasePathCreate() throws RecognitionException {
		DatabasePathCreateContext _localctx = new DatabasePathCreateContext(_ctx, getState());
		enterRule(_localctx, 330, RULE_databasePathCreate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2213);
			uid();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TablePathCreateContext extends ParserRuleContext {
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public TablePathCreateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tablePathCreate; }
	}

	public final TablePathCreateContext tablePathCreate() throws RecognitionException {
		TablePathCreateContext _localctx = new TablePathCreateContext(_ctx, getState());
		enterRule(_localctx, 332, RULE_tablePathCreate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2215);
			uid();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TablePathContext extends ParserRuleContext {
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public TablePathContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tablePath; }
	}

	public final TablePathContext tablePath() throws RecognitionException {
		TablePathContext _localctx = new TablePathContext(_ctx, getState());
		enterRule(_localctx, 334, RULE_tablePath);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2217);
			uid();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UidContext extends ParserRuleContext {
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public List<TerminalNode> DOT() { return getTokens(FlinkSQLParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(FlinkSQLParser.DOT, i);
		}
		public UidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_uid; }
	}

	public final UidContext uid() throws RecognitionException {
		UidContext _localctx = new UidContext(_ctx, getState());
		enterRule(_localctx, 336, RULE_uid);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(2219);
			identifier();
			setState(2224);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,256,_ctx);
			while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1+1 ) {
					{
					{
					setState(2220);
					match(DOT);
					setState(2221);
					identifier();
					}
					} 
				}
				setState(2226);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,256,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WithOptionContext extends ParserRuleContext {
		public TerminalNode KW_WITH() { return getToken(FlinkSQLParser.KW_WITH, 0); }
		public TablePropertyListContext tablePropertyList() {
			return getRuleContext(TablePropertyListContext.class,0);
		}
		public WithOptionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_withOption; }
	}

	public final WithOptionContext withOption() throws RecognitionException {
		WithOptionContext _localctx = new WithOptionContext(_ctx, getState());
		enterRule(_localctx, 338, RULE_withOption);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2227);
			match(KW_WITH);
			setState(2228);
			tablePropertyList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfNotExistsContext extends ParserRuleContext {
		public TerminalNode KW_IF() { return getToken(FlinkSQLParser.KW_IF, 0); }
		public TerminalNode KW_NOT() { return getToken(FlinkSQLParser.KW_NOT, 0); }
		public TerminalNode KW_EXISTS() { return getToken(FlinkSQLParser.KW_EXISTS, 0); }
		public IfNotExistsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifNotExists; }
	}

	public final IfNotExistsContext ifNotExists() throws RecognitionException {
		IfNotExistsContext _localctx = new IfNotExistsContext(_ctx, getState());
		enterRule(_localctx, 340, RULE_ifNotExists);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2230);
			match(KW_IF);
			setState(2231);
			match(KW_NOT);
			setState(2232);
			match(KW_EXISTS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfExistsContext extends ParserRuleContext {
		public TerminalNode KW_IF() { return getToken(FlinkSQLParser.KW_IF, 0); }
		public TerminalNode KW_EXISTS() { return getToken(FlinkSQLParser.KW_EXISTS, 0); }
		public IfExistsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifExists; }
	}

	public final IfExistsContext ifExists() throws RecognitionException {
		IfExistsContext _localctx = new IfExistsContext(_ctx, getState());
		enterRule(_localctx, 342, RULE_ifExists);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2234);
			match(KW_IF);
			setState(2235);
			match(KW_EXISTS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TablePropertyListContext extends ParserRuleContext {
		public TerminalNode LR_BRACKET() { return getToken(FlinkSQLParser.LR_BRACKET, 0); }
		public List<TablePropertyContext> tableProperty() {
			return getRuleContexts(TablePropertyContext.class);
		}
		public TablePropertyContext tableProperty(int i) {
			return getRuleContext(TablePropertyContext.class,i);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSQLParser.RR_BRACKET, 0); }
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public TablePropertyListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tablePropertyList; }
	}

	public final TablePropertyListContext tablePropertyList() throws RecognitionException {
		TablePropertyListContext _localctx = new TablePropertyListContext(_ctx, getState());
		enterRule(_localctx, 344, RULE_tablePropertyList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2237);
			match(LR_BRACKET);
			setState(2238);
			tableProperty();
			setState(2243);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(2239);
				match(COMMA);
				setState(2240);
				tableProperty();
				}
				}
				setState(2245);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(2246);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TablePropertyContext extends ParserRuleContext {
		public TablePropertyKeyContext key;
		public TablePropertyValueContext value;
		public TablePropertyKeyContext tablePropertyKey() {
			return getRuleContext(TablePropertyKeyContext.class,0);
		}
		public TablePropertyValueContext tablePropertyValue() {
			return getRuleContext(TablePropertyValueContext.class,0);
		}
		public TerminalNode EQUAL_SYMBOL() { return getToken(FlinkSQLParser.EQUAL_SYMBOL, 0); }
		public TablePropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableProperty; }
	}

	public final TablePropertyContext tableProperty() throws RecognitionException {
		TablePropertyContext _localctx = new TablePropertyContext(_ctx, getState());
		enterRule(_localctx, 346, RULE_tableProperty);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2248);
			((TablePropertyContext)_localctx).key = tablePropertyKey();
			setState(2253);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_FALSE || ((((_la - 358)) & ~0x3f) == 0 && ((1L << (_la - 358)) & ((1L << (KW_TRUE - 358)) | (1L << (EQUAL_SYMBOL - 358)) | (1L << (STRING_LITERAL - 358)) | (1L << (DIG_LITERAL - 358)) | (1L << (REAL_LITERAL - 358)))) != 0)) {
				{
				setState(2250);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==EQUAL_SYMBOL) {
					{
					setState(2249);
					match(EQUAL_SYMBOL);
					}
				}

				setState(2252);
				((TablePropertyContext)_localctx).value = tablePropertyValue();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TablePropertyKeyContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public DereferenceDefinitionContext dereferenceDefinition() {
			return getRuleContext(DereferenceDefinitionContext.class,0);
		}
		public TerminalNode STRING_LITERAL() { return getToken(FlinkSQLParser.STRING_LITERAL, 0); }
		public TablePropertyKeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tablePropertyKey; }
	}

	public final TablePropertyKeyContext tablePropertyKey() throws RecognitionException {
		TablePropertyKeyContext _localctx = new TablePropertyKeyContext(_ctx, getState());
		enterRule(_localctx, 348, RULE_tablePropertyKey);
		try {
			setState(2258);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,260,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2255);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2256);
				dereferenceDefinition();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2257);
				match(STRING_LITERAL);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TablePropertyValueContext extends ParserRuleContext {
		public TerminalNode DIG_LITERAL() { return getToken(FlinkSQLParser.DIG_LITERAL, 0); }
		public TerminalNode REAL_LITERAL() { return getToken(FlinkSQLParser.REAL_LITERAL, 0); }
		public BooleanLiteralContext booleanLiteral() {
			return getRuleContext(BooleanLiteralContext.class,0);
		}
		public TerminalNode STRING_LITERAL() { return getToken(FlinkSQLParser.STRING_LITERAL, 0); }
		public TablePropertyValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tablePropertyValue; }
	}

	public final TablePropertyValueContext tablePropertyValue() throws RecognitionException {
		TablePropertyValueContext _localctx = new TablePropertyValueContext(_ctx, getState());
		enterRule(_localctx, 350, RULE_tablePropertyValue);
		try {
			setState(2264);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DIG_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(2260);
				match(DIG_LITERAL);
				}
				break;
			case REAL_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(2261);
				match(REAL_LITERAL);
				}
				break;
			case KW_FALSE:
			case KW_TRUE:
				enterOuterAlt(_localctx, 3);
				{
				setState(2262);
				booleanLiteral();
				}
				break;
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 4);
				{
				setState(2263);
				match(STRING_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LogicalOperatorContext extends ParserRuleContext {
		public TerminalNode KW_AND() { return getToken(FlinkSQLParser.KW_AND, 0); }
		public List<TerminalNode> BIT_AND_OP() { return getTokens(FlinkSQLParser.BIT_AND_OP); }
		public TerminalNode BIT_AND_OP(int i) {
			return getToken(FlinkSQLParser.BIT_AND_OP, i);
		}
		public TerminalNode KW_OR() { return getToken(FlinkSQLParser.KW_OR, 0); }
		public List<TerminalNode> BIT_OR_OP() { return getTokens(FlinkSQLParser.BIT_OR_OP); }
		public TerminalNode BIT_OR_OP(int i) {
			return getToken(FlinkSQLParser.BIT_OR_OP, i);
		}
		public LogicalOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logicalOperator; }
	}

	public final LogicalOperatorContext logicalOperator() throws RecognitionException {
		LogicalOperatorContext _localctx = new LogicalOperatorContext(_ctx, getState());
		enterRule(_localctx, 352, RULE_logicalOperator);
		try {
			setState(2272);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_AND:
				enterOuterAlt(_localctx, 1);
				{
				setState(2266);
				match(KW_AND);
				}
				break;
			case BIT_AND_OP:
				enterOuterAlt(_localctx, 2);
				{
				setState(2267);
				match(BIT_AND_OP);
				setState(2268);
				match(BIT_AND_OP);
				}
				break;
			case KW_OR:
				enterOuterAlt(_localctx, 3);
				{
				setState(2269);
				match(KW_OR);
				}
				break;
			case BIT_OR_OP:
				enterOuterAlt(_localctx, 4);
				{
				setState(2270);
				match(BIT_OR_OP);
				setState(2271);
				match(BIT_OR_OP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ComparisonOperatorContext extends ParserRuleContext {
		public TerminalNode EQUAL_SYMBOL() { return getToken(FlinkSQLParser.EQUAL_SYMBOL, 0); }
		public TerminalNode GREATER_SYMBOL() { return getToken(FlinkSQLParser.GREATER_SYMBOL, 0); }
		public TerminalNode LESS_SYMBOL() { return getToken(FlinkSQLParser.LESS_SYMBOL, 0); }
		public TerminalNode EXCLAMATION_SYMBOL() { return getToken(FlinkSQLParser.EXCLAMATION_SYMBOL, 0); }
		public ComparisonOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comparisonOperator; }
	}

	public final ComparisonOperatorContext comparisonOperator() throws RecognitionException {
		ComparisonOperatorContext _localctx = new ComparisonOperatorContext(_ctx, getState());
		enterRule(_localctx, 354, RULE_comparisonOperator);
		try {
			setState(2288);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,263,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2274);
				match(EQUAL_SYMBOL);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2275);
				match(GREATER_SYMBOL);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2276);
				match(LESS_SYMBOL);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2277);
				match(LESS_SYMBOL);
				setState(2278);
				match(EQUAL_SYMBOL);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(2279);
				match(GREATER_SYMBOL);
				setState(2280);
				match(EQUAL_SYMBOL);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(2281);
				match(LESS_SYMBOL);
				setState(2282);
				match(GREATER_SYMBOL);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(2283);
				match(EXCLAMATION_SYMBOL);
				setState(2284);
				match(EQUAL_SYMBOL);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(2285);
				match(LESS_SYMBOL);
				setState(2286);
				match(EQUAL_SYMBOL);
				setState(2287);
				match(GREATER_SYMBOL);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BitOperatorContext extends ParserRuleContext {
		public List<TerminalNode> LESS_SYMBOL() { return getTokens(FlinkSQLParser.LESS_SYMBOL); }
		public TerminalNode LESS_SYMBOL(int i) {
			return getToken(FlinkSQLParser.LESS_SYMBOL, i);
		}
		public List<TerminalNode> GREATER_SYMBOL() { return getTokens(FlinkSQLParser.GREATER_SYMBOL); }
		public TerminalNode GREATER_SYMBOL(int i) {
			return getToken(FlinkSQLParser.GREATER_SYMBOL, i);
		}
		public TerminalNode BIT_AND_OP() { return getToken(FlinkSQLParser.BIT_AND_OP, 0); }
		public TerminalNode BIT_XOR_OP() { return getToken(FlinkSQLParser.BIT_XOR_OP, 0); }
		public TerminalNode BIT_OR_OP() { return getToken(FlinkSQLParser.BIT_OR_OP, 0); }
		public BitOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bitOperator; }
	}

	public final BitOperatorContext bitOperator() throws RecognitionException {
		BitOperatorContext _localctx = new BitOperatorContext(_ctx, getState());
		enterRule(_localctx, 356, RULE_bitOperator);
		try {
			setState(2297);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LESS_SYMBOL:
				enterOuterAlt(_localctx, 1);
				{
				setState(2290);
				match(LESS_SYMBOL);
				setState(2291);
				match(LESS_SYMBOL);
				}
				break;
			case GREATER_SYMBOL:
				enterOuterAlt(_localctx, 2);
				{
				setState(2292);
				match(GREATER_SYMBOL);
				setState(2293);
				match(GREATER_SYMBOL);
				}
				break;
			case BIT_AND_OP:
				enterOuterAlt(_localctx, 3);
				{
				setState(2294);
				match(BIT_AND_OP);
				}
				break;
			case BIT_XOR_OP:
				enterOuterAlt(_localctx, 4);
				{
				setState(2295);
				match(BIT_XOR_OP);
				}
				break;
			case BIT_OR_OP:
				enterOuterAlt(_localctx, 5);
				{
				setState(2296);
				match(BIT_OR_OP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MathOperatorContext extends ParserRuleContext {
		public TerminalNode ASTERISK_SIGN() { return getToken(FlinkSQLParser.ASTERISK_SIGN, 0); }
		public TerminalNode SLASH_SIGN() { return getToken(FlinkSQLParser.SLASH_SIGN, 0); }
		public TerminalNode PENCENT_SIGN() { return getToken(FlinkSQLParser.PENCENT_SIGN, 0); }
		public TerminalNode KW_DIV() { return getToken(FlinkSQLParser.KW_DIV, 0); }
		public TerminalNode ADD_SIGN() { return getToken(FlinkSQLParser.ADD_SIGN, 0); }
		public TerminalNode HYPNEN_SIGN() { return getToken(FlinkSQLParser.HYPNEN_SIGN, 0); }
		public TerminalNode DOUBLE_HYPNEN_SIGN() { return getToken(FlinkSQLParser.DOUBLE_HYPNEN_SIGN, 0); }
		public MathOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mathOperator; }
	}

	public final MathOperatorContext mathOperator() throws RecognitionException {
		MathOperatorContext _localctx = new MathOperatorContext(_ctx, getState());
		enterRule(_localctx, 358, RULE_mathOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2299);
			_la = _input.LA(1);
			if ( !(_la==KW_DIV || ((((_la - 401)) & ~0x3f) == 0 && ((1L << (_la - 401)) & ((1L << (ASTERISK_SIGN - 401)) | (1L << (HYPNEN_SIGN - 401)) | (1L << (ADD_SIGN - 401)) | (1L << (PENCENT_SIGN - 401)) | (1L << (DOUBLE_HYPNEN_SIGN - 401)) | (1L << (SLASH_SIGN - 401)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnaryOperatorContext extends ParserRuleContext {
		public TerminalNode EXCLAMATION_SYMBOL() { return getToken(FlinkSQLParser.EXCLAMATION_SYMBOL, 0); }
		public TerminalNode BIT_NOT_OP() { return getToken(FlinkSQLParser.BIT_NOT_OP, 0); }
		public TerminalNode ADD_SIGN() { return getToken(FlinkSQLParser.ADD_SIGN, 0); }
		public TerminalNode HYPNEN_SIGN() { return getToken(FlinkSQLParser.HYPNEN_SIGN, 0); }
		public TerminalNode KW_NOT() { return getToken(FlinkSQLParser.KW_NOT, 0); }
		public UnaryOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unaryOperator; }
	}

	public final UnaryOperatorContext unaryOperator() throws RecognitionException {
		UnaryOperatorContext _localctx = new UnaryOperatorContext(_ctx, getState());
		enterRule(_localctx, 360, RULE_unaryOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2301);
			_la = _input.LA(1);
			if ( !(_la==KW_NOT || ((((_la - 382)) & ~0x3f) == 0 && ((1L << (_la - 382)) & ((1L << (EXCLAMATION_SYMBOL - 382)) | (1L << (BIT_NOT_OP - 382)) | (1L << (HYPNEN_SIGN - 382)) | (1L << (ADD_SIGN - 382)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstantContext extends ParserRuleContext {
		public TimeIntervalExpressionContext timeIntervalExpression() {
			return getRuleContext(TimeIntervalExpressionContext.class,0);
		}
		public TimePointLiteralContext timePointLiteral() {
			return getRuleContext(TimePointLiteralContext.class,0);
		}
		public StringLiteralContext stringLiteral() {
			return getRuleContext(StringLiteralContext.class,0);
		}
		public DecimalLiteralContext decimalLiteral() {
			return getRuleContext(DecimalLiteralContext.class,0);
		}
		public TerminalNode HYPNEN_SIGN() { return getToken(FlinkSQLParser.HYPNEN_SIGN, 0); }
		public BooleanLiteralContext booleanLiteral() {
			return getRuleContext(BooleanLiteralContext.class,0);
		}
		public TerminalNode REAL_LITERAL() { return getToken(FlinkSQLParser.REAL_LITERAL, 0); }
		public TerminalNode BIT_STRING() { return getToken(FlinkSQLParser.BIT_STRING, 0); }
		public TerminalNode KW_NULL() { return getToken(FlinkSQLParser.KW_NULL, 0); }
		public TerminalNode KW_NOT() { return getToken(FlinkSQLParser.KW_NOT, 0); }
		public ConstantContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constant; }
	}

	public final ConstantContext constant() throws RecognitionException {
		ConstantContext _localctx = new ConstantContext(_ctx, getState());
		enterRule(_localctx, 362, RULE_constant);
		int _la;
		try {
			setState(2317);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_INTERVAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(2303);
				timeIntervalExpression();
				}
				break;
			case KW_MICROSECOND:
			case KW_MILLISECOND:
			case KW_QUARTER:
			case KW_WEEK:
			case KW_DAY:
			case KW_HOUR:
			case KW_MINUTE:
			case KW_MONTH:
			case KW_SECOND:
			case KW_YEAR:
				enterOuterAlt(_localctx, 2);
				{
				setState(2304);
				timePointLiteral();
				}
				break;
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 3);
				{
				setState(2305);
				stringLiteral();
				}
				break;
			case HYPNEN_SIGN:
			case DIG_LITERAL:
				enterOuterAlt(_localctx, 4);
				{
				setState(2307);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==HYPNEN_SIGN) {
					{
					setState(2306);
					match(HYPNEN_SIGN);
					}
				}

				setState(2309);
				decimalLiteral();
				}
				break;
			case KW_FALSE:
			case KW_TRUE:
				enterOuterAlt(_localctx, 5);
				{
				setState(2310);
				booleanLiteral();
				}
				break;
			case REAL_LITERAL:
				enterOuterAlt(_localctx, 6);
				{
				setState(2311);
				match(REAL_LITERAL);
				}
				break;
			case BIT_STRING:
				enterOuterAlt(_localctx, 7);
				{
				setState(2312);
				match(BIT_STRING);
				}
				break;
			case KW_NOT:
			case KW_NULL:
				enterOuterAlt(_localctx, 8);
				{
				setState(2314);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(2313);
					match(KW_NOT);
					}
				}

				setState(2316);
				match(KW_NULL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TimePointLiteralContext extends ParserRuleContext {
		public TimePointUnitContext timePointUnit() {
			return getRuleContext(TimePointUnitContext.class,0);
		}
		public StringLiteralContext stringLiteral() {
			return getRuleContext(StringLiteralContext.class,0);
		}
		public TimePointLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_timePointLiteral; }
	}

	public final TimePointLiteralContext timePointLiteral() throws RecognitionException {
		TimePointLiteralContext _localctx = new TimePointLiteralContext(_ctx, getState());
		enterRule(_localctx, 364, RULE_timePointLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2319);
			timePointUnit();
			setState(2320);
			stringLiteral();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StringLiteralContext extends ParserRuleContext {
		public TerminalNode STRING_LITERAL() { return getToken(FlinkSQLParser.STRING_LITERAL, 0); }
		public StringLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stringLiteral; }
	}

	public final StringLiteralContext stringLiteral() throws RecognitionException {
		StringLiteralContext _localctx = new StringLiteralContext(_ctx, getState());
		enterRule(_localctx, 366, RULE_stringLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2322);
			match(STRING_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DecimalLiteralContext extends ParserRuleContext {
		public TerminalNode DIG_LITERAL() { return getToken(FlinkSQLParser.DIG_LITERAL, 0); }
		public DecimalLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_decimalLiteral; }
	}

	public final DecimalLiteralContext decimalLiteral() throws RecognitionException {
		DecimalLiteralContext _localctx = new DecimalLiteralContext(_ctx, getState());
		enterRule(_localctx, 368, RULE_decimalLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2324);
			match(DIG_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BooleanLiteralContext extends ParserRuleContext {
		public TerminalNode KW_TRUE() { return getToken(FlinkSQLParser.KW_TRUE, 0); }
		public TerminalNode KW_FALSE() { return getToken(FlinkSQLParser.KW_FALSE, 0); }
		public BooleanLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_booleanLiteral; }
	}

	public final BooleanLiteralContext booleanLiteral() throws RecognitionException {
		BooleanLiteralContext _localctx = new BooleanLiteralContext(_ctx, getState());
		enterRule(_localctx, 370, RULE_booleanLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2326);
			_la = _input.LA(1);
			if ( !(_la==KW_FALSE || _la==KW_TRUE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SetQuantifierContext extends ParserRuleContext {
		public TerminalNode KW_DISTINCT() { return getToken(FlinkSQLParser.KW_DISTINCT, 0); }
		public TerminalNode KW_ALL() { return getToken(FlinkSQLParser.KW_ALL, 0); }
		public SetQuantifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_setQuantifier; }
	}

	public final SetQuantifierContext setQuantifier() throws RecognitionException {
		SetQuantifierContext _localctx = new SetQuantifierContext(_ctx, getState());
		enterRule(_localctx, 372, RULE_setQuantifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2328);
			_la = _input.LA(1);
			if ( !(_la==KW_ALL || _la==KW_DISTINCT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TimePointUnitContext extends ParserRuleContext {
		public TerminalNode KW_YEAR() { return getToken(FlinkSQLParser.KW_YEAR, 0); }
		public TerminalNode KW_QUARTER() { return getToken(FlinkSQLParser.KW_QUARTER, 0); }
		public TerminalNode KW_MONTH() { return getToken(FlinkSQLParser.KW_MONTH, 0); }
		public TerminalNode KW_WEEK() { return getToken(FlinkSQLParser.KW_WEEK, 0); }
		public TerminalNode KW_DAY() { return getToken(FlinkSQLParser.KW_DAY, 0); }
		public TerminalNode KW_HOUR() { return getToken(FlinkSQLParser.KW_HOUR, 0); }
		public TerminalNode KW_MINUTE() { return getToken(FlinkSQLParser.KW_MINUTE, 0); }
		public TerminalNode KW_SECOND() { return getToken(FlinkSQLParser.KW_SECOND, 0); }
		public TerminalNode KW_MILLISECOND() { return getToken(FlinkSQLParser.KW_MILLISECOND, 0); }
		public TerminalNode KW_MICROSECOND() { return getToken(FlinkSQLParser.KW_MICROSECOND, 0); }
		public TimePointUnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_timePointUnit; }
	}

	public final TimePointUnitContext timePointUnit() throws RecognitionException {
		TimePointUnitContext _localctx = new TimePointUnitContext(_ctx, getState());
		enterRule(_localctx, 374, RULE_timePointUnit);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2330);
			_la = _input.LA(1);
			if ( !(((((_la - 80)) & ~0x3f) == 0 && ((1L << (_la - 80)) & ((1L << (KW_MICROSECOND - 80)) | (1L << (KW_MILLISECOND - 80)) | (1L << (KW_QUARTER - 80)))) != 0) || _la==KW_WEEK || _la==KW_DAY || ((((_la - 264)) & ~0x3f) == 0 && ((1L << (_la - 264)) & ((1L << (KW_HOUR - 264)) | (1L << (KW_MINUTE - 264)) | (1L << (KW_MONTH - 264)))) != 0) || _la==KW_SECOND || _la==KW_YEAR) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TimeIntervalUnitContext extends ParserRuleContext {
		public TerminalNode KW_MILLENNIUM() { return getToken(FlinkSQLParser.KW_MILLENNIUM, 0); }
		public TerminalNode KW_CENTURY() { return getToken(FlinkSQLParser.KW_CENTURY, 0); }
		public TerminalNode KW_DECADE() { return getToken(FlinkSQLParser.KW_DECADE, 0); }
		public TerminalNode KW_YEAR() { return getToken(FlinkSQLParser.KW_YEAR, 0); }
		public TerminalNode KW_YEARS() { return getToken(FlinkSQLParser.KW_YEARS, 0); }
		public TerminalNode KW_QUARTER() { return getToken(FlinkSQLParser.KW_QUARTER, 0); }
		public TerminalNode KW_MONTH() { return getToken(FlinkSQLParser.KW_MONTH, 0); }
		public TerminalNode KW_MONTHS() { return getToken(FlinkSQLParser.KW_MONTHS, 0); }
		public TerminalNode KW_WEEK() { return getToken(FlinkSQLParser.KW_WEEK, 0); }
		public TerminalNode KW_WEEKS() { return getToken(FlinkSQLParser.KW_WEEKS, 0); }
		public TerminalNode KW_DAY() { return getToken(FlinkSQLParser.KW_DAY, 0); }
		public TerminalNode KW_DAYS() { return getToken(FlinkSQLParser.KW_DAYS, 0); }
		public TerminalNode KW_HOUR() { return getToken(FlinkSQLParser.KW_HOUR, 0); }
		public TerminalNode KW_HOURS() { return getToken(FlinkSQLParser.KW_HOURS, 0); }
		public TerminalNode KW_MINUTE() { return getToken(FlinkSQLParser.KW_MINUTE, 0); }
		public TerminalNode KW_MINUTES() { return getToken(FlinkSQLParser.KW_MINUTES, 0); }
		public TerminalNode KW_SECOND() { return getToken(FlinkSQLParser.KW_SECOND, 0); }
		public TerminalNode KW_SECONDS() { return getToken(FlinkSQLParser.KW_SECONDS, 0); }
		public TerminalNode KW_MILLISECOND() { return getToken(FlinkSQLParser.KW_MILLISECOND, 0); }
		public TerminalNode KW_MICROSECOND() { return getToken(FlinkSQLParser.KW_MICROSECOND, 0); }
		public TerminalNode KW_NANOSECOND() { return getToken(FlinkSQLParser.KW_NANOSECOND, 0); }
		public TerminalNode KW_EPOCH() { return getToken(FlinkSQLParser.KW_EPOCH, 0); }
		public TimeIntervalUnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_timeIntervalUnit; }
	}

	public final TimeIntervalUnitContext timeIntervalUnit() throws RecognitionException {
		TimeIntervalUnitContext _localctx = new TimeIntervalUnitContext(_ctx, getState());
		enterRule(_localctx, 376, RULE_timeIntervalUnit);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2332);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << KW_CENTURY) | (1L << KW_DAYS) | (1L << KW_DECADE) | (1L << KW_EPOCH) | (1L << KW_HOURS))) != 0) || ((((_la - 80)) & ~0x3f) == 0 && ((1L << (_la - 80)) & ((1L << (KW_MICROSECOND - 80)) | (1L << (KW_MILLENNIUM - 80)) | (1L << (KW_MILLISECOND - 80)) | (1L << (KW_MINUTES - 80)) | (1L << (KW_MONTHS - 80)) | (1L << (KW_NANOSECOND - 80)) | (1L << (KW_QUARTER - 80)) | (1L << (KW_SECONDS - 80)))) != 0) || ((((_la - 174)) & ~0x3f) == 0 && ((1L << (_la - 174)) & ((1L << (KW_WEEK - 174)) | (1L << (KW_WEEKS - 174)) | (1L << (KW_YEARS - 174)) | (1L << (KW_DAY - 174)))) != 0) || ((((_la - 264)) & ~0x3f) == 0 && ((1L << (_la - 264)) & ((1L << (KW_HOUR - 264)) | (1L << (KW_MINUTE - 264)) | (1L << (KW_MONTH - 264)))) != 0) || _la==KW_SECOND || _la==KW_YEAR) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReservedKeywordsUsedAsFuncParamContext extends ParserRuleContext {
		public TerminalNode KW_LEADING() { return getToken(FlinkSQLParser.KW_LEADING, 0); }
		public TerminalNode KW_TRAILING() { return getToken(FlinkSQLParser.KW_TRAILING, 0); }
		public TerminalNode KW_BOTH() { return getToken(FlinkSQLParser.KW_BOTH, 0); }
		public TerminalNode KW_ALL() { return getToken(FlinkSQLParser.KW_ALL, 0); }
		public TerminalNode KW_DISTINCT() { return getToken(FlinkSQLParser.KW_DISTINCT, 0); }
		public TerminalNode ASTERISK_SIGN() { return getToken(FlinkSQLParser.ASTERISK_SIGN, 0); }
		public ReservedKeywordsUsedAsFuncParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_reservedKeywordsUsedAsFuncParam; }
	}

	public final ReservedKeywordsUsedAsFuncParamContext reservedKeywordsUsedAsFuncParam() throws RecognitionException {
		ReservedKeywordsUsedAsFuncParamContext _localctx = new ReservedKeywordsUsedAsFuncParamContext(_ctx, getState());
		enterRule(_localctx, 378, RULE_reservedKeywordsUsedAsFuncParam);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2334);
			_la = _input.LA(1);
			if ( !(((((_la - 181)) & ~0x3f) == 0 && ((1L << (_la - 181)) & ((1L << (KW_ALL - 181)) | (1L << (KW_BOTH - 181)) | (1L << (KW_DISTINCT - 181)))) != 0) || _la==KW_LEADING || _la==KW_TRAILING || _la==ASTERISK_SIGN) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReservedKeywordsUsedAsFuncNameContext extends ParserRuleContext {
		public TerminalNode KW_ABS() { return getToken(FlinkSQLParser.KW_ABS, 0); }
		public TerminalNode KW_ARRAY() { return getToken(FlinkSQLParser.KW_ARRAY, 0); }
		public TerminalNode KW_AVG() { return getToken(FlinkSQLParser.KW_AVG, 0); }
		public TerminalNode KW_CAST() { return getToken(FlinkSQLParser.KW_CAST, 0); }
		public TerminalNode KW_CEIL() { return getToken(FlinkSQLParser.KW_CEIL, 0); }
		public TerminalNode KW_COALESCE() { return getToken(FlinkSQLParser.KW_COALESCE, 0); }
		public TerminalNode KW_COLLECT() { return getToken(FlinkSQLParser.KW_COLLECT, 0); }
		public TerminalNode KW_COUNT() { return getToken(FlinkSQLParser.KW_COUNT, 0); }
		public TerminalNode KW_DATE() { return getToken(FlinkSQLParser.KW_DATE, 0); }
		public TerminalNode KW_GROUPING() { return getToken(FlinkSQLParser.KW_GROUPING, 0); }
		public TerminalNode KW_HOUR() { return getToken(FlinkSQLParser.KW_HOUR, 0); }
		public TerminalNode KW_IF() { return getToken(FlinkSQLParser.KW_IF, 0); }
		public TerminalNode KW_LAG() { return getToken(FlinkSQLParser.KW_LAG, 0); }
		public TerminalNode KW_LEFT() { return getToken(FlinkSQLParser.KW_LEFT, 0); }
		public TerminalNode KW_MAP() { return getToken(FlinkSQLParser.KW_MAP, 0); }
		public TerminalNode KW_MINUTE() { return getToken(FlinkSQLParser.KW_MINUTE, 0); }
		public TerminalNode KW_MONTH() { return getToken(FlinkSQLParser.KW_MONTH, 0); }
		public TerminalNode KW_OVERLAY() { return getToken(FlinkSQLParser.KW_OVERLAY, 0); }
		public TerminalNode KW_POSITION() { return getToken(FlinkSQLParser.KW_POSITION, 0); }
		public TerminalNode KW_POWER() { return getToken(FlinkSQLParser.KW_POWER, 0); }
		public TerminalNode KW_QUARTER() { return getToken(FlinkSQLParser.KW_QUARTER, 0); }
		public TerminalNode KW_RANK() { return getToken(FlinkSQLParser.KW_RANK, 0); }
		public TerminalNode KW_RIGHT() { return getToken(FlinkSQLParser.KW_RIGHT, 0); }
		public TerminalNode KW_SECOND() { return getToken(FlinkSQLParser.KW_SECOND, 0); }
		public TerminalNode KW_SUBSTRING() { return getToken(FlinkSQLParser.KW_SUBSTRING, 0); }
		public TerminalNode KW_SUM() { return getToken(FlinkSQLParser.KW_SUM, 0); }
		public TerminalNode KW_TIME() { return getToken(FlinkSQLParser.KW_TIME, 0); }
		public TerminalNode KW_TIMESTAMP() { return getToken(FlinkSQLParser.KW_TIMESTAMP, 0); }
		public TerminalNode KW_TIMESTAMP_3() { return getToken(FlinkSQLParser.KW_TIMESTAMP_3, 0); }
		public TerminalNode KW_TIMESTAMP_6() { return getToken(FlinkSQLParser.KW_TIMESTAMP_6, 0); }
		public TerminalNode KW_TIMESTAMP_9() { return getToken(FlinkSQLParser.KW_TIMESTAMP_9, 0); }
		public TerminalNode KW_TRUNCATE() { return getToken(FlinkSQLParser.KW_TRUNCATE, 0); }
		public TerminalNode KW_UPPER() { return getToken(FlinkSQLParser.KW_UPPER, 0); }
		public TerminalNode KW_WEEK() { return getToken(FlinkSQLParser.KW_WEEK, 0); }
		public TerminalNode KW_YEAR() { return getToken(FlinkSQLParser.KW_YEAR, 0); }
		public ReservedKeywordsUsedAsFuncNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_reservedKeywordsUsedAsFuncName; }
	}

	public final ReservedKeywordsUsedAsFuncNameContext reservedKeywordsUsedAsFuncName() throws RecognitionException {
		ReservedKeywordsUsedAsFuncNameContext _localctx = new ReservedKeywordsUsedAsFuncNameContext(_ctx, getState());
		enterRule(_localctx, 380, RULE_reservedKeywordsUsedAsFuncName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2336);
			_la = _input.LA(1);
			if ( !(((((_la - 61)) & ~0x3f) == 0 && ((1L << (_la - 61)) & ((1L << (KW_IF - 61)) | (1L << (KW_MAP - 61)) | (1L << (KW_QUARTER - 61)))) != 0) || ((((_la - 174)) & ~0x3f) == 0 && ((1L << (_la - 174)) & ((1L << (KW_WEEK - 174)) | (1L << (KW_ABS - 174)) | (1L << (KW_ARRAY - 174)) | (1L << (KW_AVG - 174)) | (1L << (KW_CAST - 174)) | (1L << (KW_CEIL - 174)) | (1L << (KW_COALESCE - 174)) | (1L << (KW_COLLECT - 174)) | (1L << (KW_COUNT - 174)) | (1L << (KW_DATE - 174)))) != 0) || ((((_la - 261)) & ~0x3f) == 0 && ((1L << (_la - 261)) & ((1L << (KW_GROUPING - 261)) | (1L << (KW_HOUR - 261)) | (1L << (KW_LAG - 261)) | (1L << (KW_LEFT - 261)) | (1L << (KW_MINUTE - 261)) | (1L << (KW_MONTH - 261)) | (1L << (KW_OVERLAY - 261)) | (1L << (KW_POSITION - 261)) | (1L << (KW_POWER - 261)) | (1L << (KW_RANK - 261)))) != 0) || ((((_la - 326)) & ~0x3f) == 0 && ((1L << (_la - 326)) & ((1L << (KW_RIGHT - 326)) | (1L << (KW_SECOND - 326)) | (1L << (KW_SUBSTRING - 326)) | (1L << (KW_SUM - 326)) | (1L << (KW_TIME - 326)) | (1L << (KW_TIMESTAMP - 326)) | (1L << (KW_TIMESTAMP_3 - 326)) | (1L << (KW_TIMESTAMP_6 - 326)) | (1L << (KW_TIMESTAMP_9 - 326)) | (1L << (KW_TRUNCATE - 326)) | (1L << (KW_UPPER - 326)) | (1L << (KW_YEAR - 326)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReservedKeywordsContext extends ParserRuleContext {
		public TerminalNode KW_ABS() { return getToken(FlinkSQLParser.KW_ABS, 0); }
		public TerminalNode KW_ALL() { return getToken(FlinkSQLParser.KW_ALL, 0); }
		public TerminalNode KW_ALLOW() { return getToken(FlinkSQLParser.KW_ALLOW, 0); }
		public TerminalNode KW_ALTER() { return getToken(FlinkSQLParser.KW_ALTER, 0); }
		public TerminalNode KW_AND() { return getToken(FlinkSQLParser.KW_AND, 0); }
		public TerminalNode KW_ANY() { return getToken(FlinkSQLParser.KW_ANY, 0); }
		public TerminalNode KW_ARE() { return getToken(FlinkSQLParser.KW_ARE, 0); }
		public TerminalNode KW_ARRAY() { return getToken(FlinkSQLParser.KW_ARRAY, 0); }
		public TerminalNode KW_AS() { return getToken(FlinkSQLParser.KW_AS, 0); }
		public TerminalNode KW_ASYMMETRIC() { return getToken(FlinkSQLParser.KW_ASYMMETRIC, 0); }
		public TerminalNode KW_AT() { return getToken(FlinkSQLParser.KW_AT, 0); }
		public TerminalNode KW_AVG() { return getToken(FlinkSQLParser.KW_AVG, 0); }
		public TerminalNode KW_BEGIN() { return getToken(FlinkSQLParser.KW_BEGIN, 0); }
		public TerminalNode KW_BETWEEN() { return getToken(FlinkSQLParser.KW_BETWEEN, 0); }
		public TerminalNode KW_BIGINT() { return getToken(FlinkSQLParser.KW_BIGINT, 0); }
		public TerminalNode KW_BINARY() { return getToken(FlinkSQLParser.KW_BINARY, 0); }
		public TerminalNode KW_BIT() { return getToken(FlinkSQLParser.KW_BIT, 0); }
		public TerminalNode KW_BLOB() { return getToken(FlinkSQLParser.KW_BLOB, 0); }
		public TerminalNode KW_BOOLEAN() { return getToken(FlinkSQLParser.KW_BOOLEAN, 0); }
		public TerminalNode KW_BOTH() { return getToken(FlinkSQLParser.KW_BOTH, 0); }
		public TerminalNode KW_BY() { return getToken(FlinkSQLParser.KW_BY, 0); }
		public TerminalNode KW_CALL() { return getToken(FlinkSQLParser.KW_CALL, 0); }
		public TerminalNode KW_CALLED() { return getToken(FlinkSQLParser.KW_CALLED, 0); }
		public TerminalNode KW_CASCADED() { return getToken(FlinkSQLParser.KW_CASCADED, 0); }
		public TerminalNode KW_CASE() { return getToken(FlinkSQLParser.KW_CASE, 0); }
		public TerminalNode KW_CAST() { return getToken(FlinkSQLParser.KW_CAST, 0); }
		public TerminalNode KW_CEIL() { return getToken(FlinkSQLParser.KW_CEIL, 0); }
		public TerminalNode KW_CHAR() { return getToken(FlinkSQLParser.KW_CHAR, 0); }
		public TerminalNode KW_CHARACTER() { return getToken(FlinkSQLParser.KW_CHARACTER, 0); }
		public TerminalNode KW_CHECK() { return getToken(FlinkSQLParser.KW_CHECK, 0); }
		public TerminalNode KW_CLOB() { return getToken(FlinkSQLParser.KW_CLOB, 0); }
		public TerminalNode KW_CLOSE() { return getToken(FlinkSQLParser.KW_CLOSE, 0); }
		public TerminalNode KW_COALESCE() { return getToken(FlinkSQLParser.KW_COALESCE, 0); }
		public TerminalNode KW_COLLATE() { return getToken(FlinkSQLParser.KW_COLLATE, 0); }
		public TerminalNode KW_COLLECT() { return getToken(FlinkSQLParser.KW_COLLECT, 0); }
		public TerminalNode KW_COLUMN() { return getToken(FlinkSQLParser.KW_COLUMN, 0); }
		public TerminalNode KW_COMMIT() { return getToken(FlinkSQLParser.KW_COMMIT, 0); }
		public TerminalNode KW_CONNECT() { return getToken(FlinkSQLParser.KW_CONNECT, 0); }
		public TerminalNode KW_CONSTRAINT() { return getToken(FlinkSQLParser.KW_CONSTRAINT, 0); }
		public TerminalNode KW_CONTAINS() { return getToken(FlinkSQLParser.KW_CONTAINS, 0); }
		public TerminalNode KW_CONVERT() { return getToken(FlinkSQLParser.KW_CONVERT, 0); }
		public TerminalNode KW_COUNT() { return getToken(FlinkSQLParser.KW_COUNT, 0); }
		public TerminalNode KW_CREATE() { return getToken(FlinkSQLParser.KW_CREATE, 0); }
		public TerminalNode KW_CROSS() { return getToken(FlinkSQLParser.KW_CROSS, 0); }
		public TerminalNode KW_CUBE() { return getToken(FlinkSQLParser.KW_CUBE, 0); }
		public TerminalNode KW_CURRENT() { return getToken(FlinkSQLParser.KW_CURRENT, 0); }
		public TerminalNode KW_CURSOR() { return getToken(FlinkSQLParser.KW_CURSOR, 0); }
		public TerminalNode KW_CYCLE() { return getToken(FlinkSQLParser.KW_CYCLE, 0); }
		public TerminalNode KW_DATE() { return getToken(FlinkSQLParser.KW_DATE, 0); }
		public TerminalNode KW_DATETIME() { return getToken(FlinkSQLParser.KW_DATETIME, 0); }
		public TerminalNode KW_DAY() { return getToken(FlinkSQLParser.KW_DAY, 0); }
		public TerminalNode KW_DEC() { return getToken(FlinkSQLParser.KW_DEC, 0); }
		public TerminalNode KW_DECIMAL() { return getToken(FlinkSQLParser.KW_DECIMAL, 0); }
		public TerminalNode KW_DECLARE() { return getToken(FlinkSQLParser.KW_DECLARE, 0); }
		public TerminalNode KW_DEFAULT() { return getToken(FlinkSQLParser.KW_DEFAULT, 0); }
		public TerminalNode KW_DEFINE() { return getToken(FlinkSQLParser.KW_DEFINE, 0); }
		public TerminalNode KW_DELETE() { return getToken(FlinkSQLParser.KW_DELETE, 0); }
		public TerminalNode KW_DESCRIBE() { return getToken(FlinkSQLParser.KW_DESCRIBE, 0); }
		public TerminalNode KW_DISTINCT() { return getToken(FlinkSQLParser.KW_DISTINCT, 0); }
		public TerminalNode KW_DOUBLE() { return getToken(FlinkSQLParser.KW_DOUBLE, 0); }
		public TerminalNode KW_DROP() { return getToken(FlinkSQLParser.KW_DROP, 0); }
		public TerminalNode KW_EACH() { return getToken(FlinkSQLParser.KW_EACH, 0); }
		public TerminalNode KW_ELSE() { return getToken(FlinkSQLParser.KW_ELSE, 0); }
		public TerminalNode KW_END() { return getToken(FlinkSQLParser.KW_END, 0); }
		public TerminalNode KW_EQUALS() { return getToken(FlinkSQLParser.KW_EQUALS, 0); }
		public TerminalNode KW_EXCEPT() { return getToken(FlinkSQLParser.KW_EXCEPT, 0); }
		public TerminalNode KW_EXECUTE() { return getToken(FlinkSQLParser.KW_EXECUTE, 0); }
		public TerminalNode KW_EXISTS() { return getToken(FlinkSQLParser.KW_EXISTS, 0); }
		public TerminalNode KW_EXPLAIN() { return getToken(FlinkSQLParser.KW_EXPLAIN, 0); }
		public TerminalNode KW_EXTERNAL() { return getToken(FlinkSQLParser.KW_EXTERNAL, 0); }
		public TerminalNode KW_EXTRACT() { return getToken(FlinkSQLParser.KW_EXTRACT, 0); }
		public TerminalNode KW_FALSE() { return getToken(FlinkSQLParser.KW_FALSE, 0); }
		public TerminalNode KW_FLOAT() { return getToken(FlinkSQLParser.KW_FLOAT, 0); }
		public TerminalNode KW_FOR() { return getToken(FlinkSQLParser.KW_FOR, 0); }
		public TerminalNode KW_FROM() { return getToken(FlinkSQLParser.KW_FROM, 0); }
		public TerminalNode KW_FULL() { return getToken(FlinkSQLParser.KW_FULL, 0); }
		public TerminalNode KW_FUNCTION() { return getToken(FlinkSQLParser.KW_FUNCTION, 0); }
		public TerminalNode KW_GLOBAL() { return getToken(FlinkSQLParser.KW_GLOBAL, 0); }
		public TerminalNode KW_GRANT() { return getToken(FlinkSQLParser.KW_GRANT, 0); }
		public TerminalNode KW_GROUP() { return getToken(FlinkSQLParser.KW_GROUP, 0); }
		public TerminalNode KW_GROUPING() { return getToken(FlinkSQLParser.KW_GROUPING, 0); }
		public TerminalNode KW_GROUPS() { return getToken(FlinkSQLParser.KW_GROUPS, 0); }
		public TerminalNode KW_HAVING() { return getToken(FlinkSQLParser.KW_HAVING, 0); }
		public TerminalNode KW_HOUR() { return getToken(FlinkSQLParser.KW_HOUR, 0); }
		public TerminalNode KW_IMPORT() { return getToken(FlinkSQLParser.KW_IMPORT, 0); }
		public TerminalNode KW_IN() { return getToken(FlinkSQLParser.KW_IN, 0); }
		public TerminalNode KW_INCLUDING() { return getToken(FlinkSQLParser.KW_INCLUDING, 0); }
		public TerminalNode KW_INNER() { return getToken(FlinkSQLParser.KW_INNER, 0); }
		public TerminalNode KW_INOUT() { return getToken(FlinkSQLParser.KW_INOUT, 0); }
		public TerminalNode KW_INSERT() { return getToken(FlinkSQLParser.KW_INSERT, 0); }
		public TerminalNode KW_INT() { return getToken(FlinkSQLParser.KW_INT, 0); }
		public TerminalNode KW_INTEGER() { return getToken(FlinkSQLParser.KW_INTEGER, 0); }
		public TerminalNode KW_INTERSECT() { return getToken(FlinkSQLParser.KW_INTERSECT, 0); }
		public TerminalNode KW_INTERVAL() { return getToken(FlinkSQLParser.KW_INTERVAL, 0); }
		public TerminalNode KW_INTO() { return getToken(FlinkSQLParser.KW_INTO, 0); }
		public TerminalNode KW_IS() { return getToken(FlinkSQLParser.KW_IS, 0); }
		public TerminalNode KW_JOIN() { return getToken(FlinkSQLParser.KW_JOIN, 0); }
		public TerminalNode KW_LAG() { return getToken(FlinkSQLParser.KW_LAG, 0); }
		public TerminalNode KW_LANGUAGE() { return getToken(FlinkSQLParser.KW_LANGUAGE, 0); }
		public TerminalNode KW_LATERAL() { return getToken(FlinkSQLParser.KW_LATERAL, 0); }
		public TerminalNode KW_LEADING() { return getToken(FlinkSQLParser.KW_LEADING, 0); }
		public TerminalNode KW_LEFT() { return getToken(FlinkSQLParser.KW_LEFT, 0); }
		public TerminalNode KW_LIKE() { return getToken(FlinkSQLParser.KW_LIKE, 0); }
		public TerminalNode KW_LIMIT() { return getToken(FlinkSQLParser.KW_LIMIT, 0); }
		public TerminalNode KW_LOCAL() { return getToken(FlinkSQLParser.KW_LOCAL, 0); }
		public TerminalNode KW_MATCH() { return getToken(FlinkSQLParser.KW_MATCH, 0); }
		public TerminalNode KW_MATCH_RECOGNIZE() { return getToken(FlinkSQLParser.KW_MATCH_RECOGNIZE, 0); }
		public TerminalNode KW_MEASURES() { return getToken(FlinkSQLParser.KW_MEASURES, 0); }
		public TerminalNode KW_MERGE() { return getToken(FlinkSQLParser.KW_MERGE, 0); }
		public TerminalNode KW_METADATA() { return getToken(FlinkSQLParser.KW_METADATA, 0); }
		public TerminalNode KW_MINUS() { return getToken(FlinkSQLParser.KW_MINUS, 0); }
		public TerminalNode KW_MINUTE() { return getToken(FlinkSQLParser.KW_MINUTE, 0); }
		public TerminalNode KW_MODIFIES() { return getToken(FlinkSQLParser.KW_MODIFIES, 0); }
		public TerminalNode KW_MODULE() { return getToken(FlinkSQLParser.KW_MODULE, 0); }
		public TerminalNode KW_MONTH() { return getToken(FlinkSQLParser.KW_MONTH, 0); }
		public TerminalNode KW_MULTISET() { return getToken(FlinkSQLParser.KW_MULTISET, 0); }
		public TerminalNode KW_NATURAL() { return getToken(FlinkSQLParser.KW_NATURAL, 0); }
		public TerminalNode KW_NEXT() { return getToken(FlinkSQLParser.KW_NEXT, 0); }
		public TerminalNode KW_NO() { return getToken(FlinkSQLParser.KW_NO, 0); }
		public TerminalNode KW_NONE() { return getToken(FlinkSQLParser.KW_NONE, 0); }
		public TerminalNode KW_NOT() { return getToken(FlinkSQLParser.KW_NOT, 0); }
		public TerminalNode KW_NULL() { return getToken(FlinkSQLParser.KW_NULL, 0); }
		public TerminalNode KW_NUMERIC() { return getToken(FlinkSQLParser.KW_NUMERIC, 0); }
		public TerminalNode KW_OF() { return getToken(FlinkSQLParser.KW_OF, 0); }
		public TerminalNode KW_OFFSET() { return getToken(FlinkSQLParser.KW_OFFSET, 0); }
		public TerminalNode KW_ON() { return getToken(FlinkSQLParser.KW_ON, 0); }
		public TerminalNode KW_ONE() { return getToken(FlinkSQLParser.KW_ONE, 0); }
		public TerminalNode KW_OR() { return getToken(FlinkSQLParser.KW_OR, 0); }
		public TerminalNode KW_ORDER() { return getToken(FlinkSQLParser.KW_ORDER, 0); }
		public TerminalNode KW_OUT() { return getToken(FlinkSQLParser.KW_OUT, 0); }
		public TerminalNode KW_OUTER() { return getToken(FlinkSQLParser.KW_OUTER, 0); }
		public TerminalNode KW_OVER() { return getToken(FlinkSQLParser.KW_OVER, 0); }
		public TerminalNode KW_OVERLAY() { return getToken(FlinkSQLParser.KW_OVERLAY, 0); }
		public TerminalNode KW_PARTITION() { return getToken(FlinkSQLParser.KW_PARTITION, 0); }
		public TerminalNode KW_PATTERN() { return getToken(FlinkSQLParser.KW_PATTERN, 0); }
		public TerminalNode KW_PER() { return getToken(FlinkSQLParser.KW_PER, 0); }
		public TerminalNode KW_PERCENT() { return getToken(FlinkSQLParser.KW_PERCENT, 0); }
		public TerminalNode KW_PERIOD() { return getToken(FlinkSQLParser.KW_PERIOD, 0); }
		public TerminalNode KW_POSITION() { return getToken(FlinkSQLParser.KW_POSITION, 0); }
		public TerminalNode KW_PRIMARY() { return getToken(FlinkSQLParser.KW_PRIMARY, 0); }
		public TerminalNode KW_RANGE() { return getToken(FlinkSQLParser.KW_RANGE, 0); }
		public TerminalNode KW_RANK() { return getToken(FlinkSQLParser.KW_RANK, 0); }
		public TerminalNode KW_RESET() { return getToken(FlinkSQLParser.KW_RESET, 0); }
		public TerminalNode KW_REVOKE() { return getToken(FlinkSQLParser.KW_REVOKE, 0); }
		public TerminalNode KW_RIGHT() { return getToken(FlinkSQLParser.KW_RIGHT, 0); }
		public TerminalNode KW_RLIKE() { return getToken(FlinkSQLParser.KW_RLIKE, 0); }
		public TerminalNode KW_ROLLBACK() { return getToken(FlinkSQLParser.KW_ROLLBACK, 0); }
		public TerminalNode KW_ROLLUP() { return getToken(FlinkSQLParser.KW_ROLLUP, 0); }
		public TerminalNode KW_ROW() { return getToken(FlinkSQLParser.KW_ROW, 0); }
		public TerminalNode KW_ROWS() { return getToken(FlinkSQLParser.KW_ROWS, 0); }
		public TerminalNode KW_SECOND() { return getToken(FlinkSQLParser.KW_SECOND, 0); }
		public TerminalNode KW_SELECT() { return getToken(FlinkSQLParser.KW_SELECT, 0); }
		public TerminalNode KW_SET() { return getToken(FlinkSQLParser.KW_SET, 0); }
		public TerminalNode KW_SHOW() { return getToken(FlinkSQLParser.KW_SHOW, 0); }
		public TerminalNode KW_SIMILAR() { return getToken(FlinkSQLParser.KW_SIMILAR, 0); }
		public TerminalNode KW_SKIP() { return getToken(FlinkSQLParser.KW_SKIP, 0); }
		public TerminalNode KW_SMALLINT() { return getToken(FlinkSQLParser.KW_SMALLINT, 0); }
		public TerminalNode KW_START() { return getToken(FlinkSQLParser.KW_START, 0); }
		public TerminalNode KW_STATIC() { return getToken(FlinkSQLParser.KW_STATIC, 0); }
		public TerminalNode KW_SUBSTRING() { return getToken(FlinkSQLParser.KW_SUBSTRING, 0); }
		public TerminalNode KW_SUM() { return getToken(FlinkSQLParser.KW_SUM, 0); }
		public TerminalNode KW_SYSTEM_TIME() { return getToken(FlinkSQLParser.KW_SYSTEM_TIME, 0); }
		public TerminalNode KW_SYSTEM() { return getToken(FlinkSQLParser.KW_SYSTEM, 0); }
		public TerminalNode KW_SYSTEM_USER() { return getToken(FlinkSQLParser.KW_SYSTEM_USER, 0); }
		public TerminalNode KW_TABLE() { return getToken(FlinkSQLParser.KW_TABLE, 0); }
		public TerminalNode KW_TABLESAMPLE() { return getToken(FlinkSQLParser.KW_TABLESAMPLE, 0); }
		public TerminalNode KW_THEN() { return getToken(FlinkSQLParser.KW_THEN, 0); }
		public TerminalNode KW_TIME() { return getToken(FlinkSQLParser.KW_TIME, 0); }
		public TerminalNode KW_TIMESTAMP() { return getToken(FlinkSQLParser.KW_TIMESTAMP, 0); }
		public TerminalNode KW_TIMESTAMP_3() { return getToken(FlinkSQLParser.KW_TIMESTAMP_3, 0); }
		public TerminalNode KW_TIMESTAMP_6() { return getToken(FlinkSQLParser.KW_TIMESTAMP_6, 0); }
		public TerminalNode KW_TIMESTAMP_9() { return getToken(FlinkSQLParser.KW_TIMESTAMP_9, 0); }
		public TerminalNode KW_TINYINT() { return getToken(FlinkSQLParser.KW_TINYINT, 0); }
		public TerminalNode KW_TO() { return getToken(FlinkSQLParser.KW_TO, 0); }
		public TerminalNode KW_TRUE() { return getToken(FlinkSQLParser.KW_TRUE, 0); }
		public TerminalNode KW_TRUNCATE() { return getToken(FlinkSQLParser.KW_TRUNCATE, 0); }
		public TerminalNode KW_UNION() { return getToken(FlinkSQLParser.KW_UNION, 0); }
		public TerminalNode KW_UNIQUE() { return getToken(FlinkSQLParser.KW_UNIQUE, 0); }
		public TerminalNode KW_UNKNOWN() { return getToken(FlinkSQLParser.KW_UNKNOWN, 0); }
		public TerminalNode KW_UNNEST() { return getToken(FlinkSQLParser.KW_UNNEST, 0); }
		public TerminalNode KW_UPPER() { return getToken(FlinkSQLParser.KW_UPPER, 0); }
		public TerminalNode KW_UPSERT() { return getToken(FlinkSQLParser.KW_UPSERT, 0); }
		public TerminalNode KW_USER() { return getToken(FlinkSQLParser.KW_USER, 0); }
		public TerminalNode KW_USING() { return getToken(FlinkSQLParser.KW_USING, 0); }
		public TerminalNode KW_VALUE() { return getToken(FlinkSQLParser.KW_VALUE, 0); }
		public TerminalNode KW_VALUES() { return getToken(FlinkSQLParser.KW_VALUES, 0); }
		public TerminalNode KW_VARBINARY() { return getToken(FlinkSQLParser.KW_VARBINARY, 0); }
		public TerminalNode KW_VARCHAR() { return getToken(FlinkSQLParser.KW_VARCHAR, 0); }
		public TerminalNode KW_WHEN() { return getToken(FlinkSQLParser.KW_WHEN, 0); }
		public TerminalNode KW_WHERE() { return getToken(FlinkSQLParser.KW_WHERE, 0); }
		public TerminalNode KW_WINDOW() { return getToken(FlinkSQLParser.KW_WINDOW, 0); }
		public TerminalNode KW_WITH() { return getToken(FlinkSQLParser.KW_WITH, 0); }
		public TerminalNode KW_WITHIN() { return getToken(FlinkSQLParser.KW_WITHIN, 0); }
		public TerminalNode KW_WITHOUT() { return getToken(FlinkSQLParser.KW_WITHOUT, 0); }
		public TerminalNode KW_YEAR() { return getToken(FlinkSQLParser.KW_YEAR, 0); }
		public ReservedKeywordsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_reservedKeywords; }
	}

	public final ReservedKeywordsContext reservedKeywords() throws RecognitionException {
		ReservedKeywordsContext _localctx = new ReservedKeywordsContext(_ctx, getState());
		enterRule(_localctx, 382, RULE_reservedKeywords);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2338);
			_la = _input.LA(1);
			if ( !(((((_la - 180)) & ~0x3f) == 0 && ((1L << (_la - 180)) & ((1L << (KW_ABS - 180)) | (1L << (KW_ALL - 180)) | (1L << (KW_ALLOW - 180)) | (1L << (KW_ALTER - 180)) | (1L << (KW_AND - 180)) | (1L << (KW_ANY - 180)) | (1L << (KW_ARE - 180)) | (1L << (KW_ARRAY - 180)) | (1L << (KW_AS - 180)) | (1L << (KW_ASYMMETRIC - 180)) | (1L << (KW_AT - 180)) | (1L << (KW_AVG - 180)) | (1L << (KW_BEGIN - 180)) | (1L << (KW_BETWEEN - 180)) | (1L << (KW_BIGINT - 180)) | (1L << (KW_BINARY - 180)) | (1L << (KW_BIT - 180)) | (1L << (KW_BLOB - 180)) | (1L << (KW_BOOLEAN - 180)) | (1L << (KW_BOTH - 180)) | (1L << (KW_BY - 180)) | (1L << (KW_CALL - 180)) | (1L << (KW_CALLED - 180)) | (1L << (KW_CASCADED - 180)) | (1L << (KW_CASE - 180)) | (1L << (KW_CAST - 180)) | (1L << (KW_CEIL - 180)) | (1L << (KW_CHAR - 180)) | (1L << (KW_CHARACTER - 180)) | (1L << (KW_CHECK - 180)) | (1L << (KW_CLOB - 180)) | (1L << (KW_CLOSE - 180)) | (1L << (KW_COALESCE - 180)) | (1L << (KW_COLLATE - 180)) | (1L << (KW_COLLECT - 180)) | (1L << (KW_COLUMN - 180)) | (1L << (KW_COMMIT - 180)) | (1L << (KW_CONNECT - 180)) | (1L << (KW_CONSTRAINT - 180)) | (1L << (KW_CONTAINS - 180)) | (1L << (KW_CONVERT - 180)) | (1L << (KW_COUNT - 180)) | (1L << (KW_CREATE - 180)) | (1L << (KW_CROSS - 180)) | (1L << (KW_CUBE - 180)) | (1L << (KW_CURRENT - 180)) | (1L << (KW_CURSOR - 180)) | (1L << (KW_CYCLE - 180)) | (1L << (KW_DATE - 180)) | (1L << (KW_DATETIME - 180)) | (1L << (KW_DAY - 180)) | (1L << (KW_DEC - 180)) | (1L << (KW_DECIMAL - 180)) | (1L << (KW_DECLARE - 180)) | (1L << (KW_DEFAULT - 180)) | (1L << (KW_DEFINE - 180)) | (1L << (KW_DELETE - 180)) | (1L << (KW_DESCRIBE - 180)) | (1L << (KW_DISTINCT - 180)) | (1L << (KW_DOUBLE - 180)) | (1L << (KW_DROP - 180)) | (1L << (KW_EACH - 180)) | (1L << (KW_ELSE - 180)) | (1L << (KW_END - 180)))) != 0) || ((((_la - 244)) & ~0x3f) == 0 && ((1L << (_la - 244)) & ((1L << (KW_EQUALS - 244)) | (1L << (KW_EXCEPT - 244)) | (1L << (KW_EXECUTE - 244)) | (1L << (KW_EXISTS - 244)) | (1L << (KW_EXPLAIN - 244)) | (1L << (KW_EXTERNAL - 244)) | (1L << (KW_EXTRACT - 244)) | (1L << (KW_FALSE - 244)) | (1L << (KW_FLOAT - 244)) | (1L << (KW_FOR - 244)) | (1L << (KW_FROM - 244)) | (1L << (KW_FULL - 244)) | (1L << (KW_FUNCTION - 244)) | (1L << (KW_GLOBAL - 244)) | (1L << (KW_GRANT - 244)) | (1L << (KW_GROUP - 244)) | (1L << (KW_GROUPING - 244)) | (1L << (KW_GROUPS - 244)) | (1L << (KW_HAVING - 244)) | (1L << (KW_HOUR - 244)) | (1L << (KW_IMPORT - 244)) | (1L << (KW_IN - 244)) | (1L << (KW_INCLUDING - 244)) | (1L << (KW_INNER - 244)) | (1L << (KW_INOUT - 244)) | (1L << (KW_INSERT - 244)) | (1L << (KW_INT - 244)) | (1L << (KW_INTEGER - 244)) | (1L << (KW_INTERSECT - 244)) | (1L << (KW_INTERVAL - 244)) | (1L << (KW_INTO - 244)) | (1L << (KW_IS - 244)) | (1L << (KW_JOIN - 244)) | (1L << (KW_LAG - 244)) | (1L << (KW_LANGUAGE - 244)) | (1L << (KW_LATERAL - 244)) | (1L << (KW_LEADING - 244)) | (1L << (KW_LEFT - 244)) | (1L << (KW_LIKE - 244)) | (1L << (KW_LIMIT - 244)) | (1L << (KW_LOCAL - 244)) | (1L << (KW_MATCH - 244)) | (1L << (KW_MATCH_RECOGNIZE - 244)) | (1L << (KW_MEASURES - 244)) | (1L << (KW_MERGE - 244)) | (1L << (KW_METADATA - 244)) | (1L << (KW_MINUS - 244)) | (1L << (KW_MINUTE - 244)) | (1L << (KW_MODIFIES - 244)) | (1L << (KW_MODULE - 244)) | (1L << (KW_MONTH - 244)) | (1L << (KW_MULTISET - 244)) | (1L << (KW_NATURAL - 244)) | (1L << (KW_NEXT - 244)) | (1L << (KW_NO - 244)) | (1L << (KW_NONE - 244)) | (1L << (KW_NOT - 244)) | (1L << (KW_NULL - 244)) | (1L << (KW_NUMERIC - 244)) | (1L << (KW_OF - 244)) | (1L << (KW_OFFSET - 244)) | (1L << (KW_ON - 244)) | (1L << (KW_ONE - 244)))) != 0) || ((((_la - 308)) & ~0x3f) == 0 && ((1L << (_la - 308)) & ((1L << (KW_OR - 308)) | (1L << (KW_ORDER - 308)) | (1L << (KW_OUT - 308)) | (1L << (KW_OUTER - 308)) | (1L << (KW_OVER - 308)) | (1L << (KW_OVERLAY - 308)) | (1L << (KW_PARTITION - 308)) | (1L << (KW_PATTERN - 308)) | (1L << (KW_PER - 308)) | (1L << (KW_PERCENT - 308)) | (1L << (KW_PERIOD - 308)) | (1L << (KW_POSITION - 308)) | (1L << (KW_PRIMARY - 308)) | (1L << (KW_RANGE - 308)) | (1L << (KW_RANK - 308)) | (1L << (KW_RESET - 308)) | (1L << (KW_REVOKE - 308)) | (1L << (KW_RIGHT - 308)) | (1L << (KW_RLIKE - 308)) | (1L << (KW_ROLLBACK - 308)) | (1L << (KW_ROLLUP - 308)) | (1L << (KW_ROW - 308)) | (1L << (KW_ROWS - 308)) | (1L << (KW_SECOND - 308)) | (1L << (KW_SELECT - 308)) | (1L << (KW_SET - 308)) | (1L << (KW_SHOW - 308)) | (1L << (KW_SIMILAR - 308)) | (1L << (KW_SKIP - 308)) | (1L << (KW_SMALLINT - 308)) | (1L << (KW_START - 308)) | (1L << (KW_STATIC - 308)) | (1L << (KW_SUBSTRING - 308)) | (1L << (KW_SUM - 308)) | (1L << (KW_SYSTEM - 308)) | (1L << (KW_SYSTEM_TIME - 308)) | (1L << (KW_SYSTEM_USER - 308)) | (1L << (KW_TABLE - 308)) | (1L << (KW_TABLESAMPLE - 308)) | (1L << (KW_THEN - 308)) | (1L << (KW_TIME - 308)) | (1L << (KW_TIMESTAMP - 308)) | (1L << (KW_TIMESTAMP_3 - 308)) | (1L << (KW_TIMESTAMP_6 - 308)) | (1L << (KW_TIMESTAMP_9 - 308)) | (1L << (KW_TINYINT - 308)) | (1L << (KW_TO - 308)) | (1L << (KW_TRUE - 308)) | (1L << (KW_TRUNCATE - 308)) | (1L << (KW_UNION - 308)) | (1L << (KW_UNIQUE - 308)) | (1L << (KW_UNKNOWN - 308)) | (1L << (KW_UNNEST - 308)) | (1L << (KW_UPPER - 308)) | (1L << (KW_UPSERT - 308)) | (1L << (KW_USER - 308)) | (1L << (KW_USING - 308)) | (1L << (KW_VALUE - 308)) | (1L << (KW_VALUES - 308)) | (1L << (KW_VARBINARY - 308)) | (1L << (KW_VARCHAR - 308)))) != 0) || ((((_la - 372)) & ~0x3f) == 0 && ((1L << (_la - 372)) & ((1L << (KW_WHEN - 372)) | (1L << (KW_WHERE - 372)) | (1L << (KW_WINDOW - 372)) | (1L << (KW_WITH - 372)) | (1L << (KW_WITHIN - 372)) | (1L << (KW_WITHOUT - 372)) | (1L << (KW_YEAR - 372)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NonReservedKeywordsContext extends ParserRuleContext {
		public TerminalNode KW_ADD() { return getToken(FlinkSQLParser.KW_ADD, 0); }
		public TerminalNode KW_ADMIN() { return getToken(FlinkSQLParser.KW_ADMIN, 0); }
		public TerminalNode KW_AFTER() { return getToken(FlinkSQLParser.KW_AFTER, 0); }
		public TerminalNode KW_ANALYZE() { return getToken(FlinkSQLParser.KW_ANALYZE, 0); }
		public TerminalNode KW_ASC() { return getToken(FlinkSQLParser.KW_ASC, 0); }
		public TerminalNode KW_BEFORE() { return getToken(FlinkSQLParser.KW_BEFORE, 0); }
		public TerminalNode KW_BYTES() { return getToken(FlinkSQLParser.KW_BYTES, 0); }
		public TerminalNode KW_CASCADE() { return getToken(FlinkSQLParser.KW_CASCADE, 0); }
		public TerminalNode KW_CATALOG() { return getToken(FlinkSQLParser.KW_CATALOG, 0); }
		public TerminalNode KW_CATALOGS() { return getToken(FlinkSQLParser.KW_CATALOGS, 0); }
		public TerminalNode KW_CENTURY() { return getToken(FlinkSQLParser.KW_CENTURY, 0); }
		public TerminalNode KW_CHAIN() { return getToken(FlinkSQLParser.KW_CHAIN, 0); }
		public TerminalNode KW_CHANGELOG_MODE() { return getToken(FlinkSQLParser.KW_CHANGELOG_MODE, 0); }
		public TerminalNode KW_CHARACTERS() { return getToken(FlinkSQLParser.KW_CHARACTERS, 0); }
		public TerminalNode KW_COMMENT() { return getToken(FlinkSQLParser.KW_COMMENT, 0); }
		public TerminalNode KW_COMPACT() { return getToken(FlinkSQLParser.KW_COMPACT, 0); }
		public TerminalNode KW_COLUMNS() { return getToken(FlinkSQLParser.KW_COLUMNS, 0); }
		public TerminalNode KW_CONSTRAINTS() { return getToken(FlinkSQLParser.KW_CONSTRAINTS, 0); }
		public TerminalNode KW_CONSTRUCTOR() { return getToken(FlinkSQLParser.KW_CONSTRUCTOR, 0); }
		public TerminalNode KW_CUMULATE() { return getToken(FlinkSQLParser.KW_CUMULATE, 0); }
		public TerminalNode KW_DATA() { return getToken(FlinkSQLParser.KW_DATA, 0); }
		public TerminalNode KW_DATABASE() { return getToken(FlinkSQLParser.KW_DATABASE, 0); }
		public TerminalNode KW_DATABASES() { return getToken(FlinkSQLParser.KW_DATABASES, 0); }
		public TerminalNode KW_DAYS() { return getToken(FlinkSQLParser.KW_DAYS, 0); }
		public TerminalNode KW_DECADE() { return getToken(FlinkSQLParser.KW_DECADE, 0); }
		public TerminalNode KW_DEFINED() { return getToken(FlinkSQLParser.KW_DEFINED, 0); }
		public TerminalNode KW_DESC() { return getToken(FlinkSQLParser.KW_DESC, 0); }
		public TerminalNode KW_DESCRIPTOR() { return getToken(FlinkSQLParser.KW_DESCRIPTOR, 0); }
		public TerminalNode KW_DIV() { return getToken(FlinkSQLParser.KW_DIV, 0); }
		public TerminalNode KW_ENCODING() { return getToken(FlinkSQLParser.KW_ENCODING, 0); }
		public TerminalNode KW_ENFORCED() { return getToken(FlinkSQLParser.KW_ENFORCED, 0); }
		public TerminalNode KW_ENGINE() { return getToken(FlinkSQLParser.KW_ENGINE, 0); }
		public TerminalNode KW_ERROR() { return getToken(FlinkSQLParser.KW_ERROR, 0); }
		public TerminalNode KW_ESTIMATED_COST() { return getToken(FlinkSQLParser.KW_ESTIMATED_COST, 0); }
		public TerminalNode KW_EXCEPTION() { return getToken(FlinkSQLParser.KW_EXCEPTION, 0); }
		public TerminalNode KW_EXCLUDE() { return getToken(FlinkSQLParser.KW_EXCLUDE, 0); }
		public TerminalNode KW_EXCLUDING() { return getToken(FlinkSQLParser.KW_EXCLUDING, 0); }
		public TerminalNode KW_EXTENDED() { return getToken(FlinkSQLParser.KW_EXTENDED, 0); }
		public TerminalNode KW_FILE() { return getToken(FlinkSQLParser.KW_FILE, 0); }
		public TerminalNode KW_FINAL() { return getToken(FlinkSQLParser.KW_FINAL, 0); }
		public TerminalNode KW_FIRST() { return getToken(FlinkSQLParser.KW_FIRST, 0); }
		public TerminalNode KW_FOLLOWING() { return getToken(FlinkSQLParser.KW_FOLLOWING, 0); }
		public TerminalNode KW_FORMAT() { return getToken(FlinkSQLParser.KW_FORMAT, 0); }
		public TerminalNode KW_FORTRAN() { return getToken(FlinkSQLParser.KW_FORTRAN, 0); }
		public TerminalNode KW_FOUND() { return getToken(FlinkSQLParser.KW_FOUND, 0); }
		public TerminalNode KW_FRAC_SECOND() { return getToken(FlinkSQLParser.KW_FRAC_SECOND, 0); }
		public TerminalNode KW_FUNCTIONS() { return getToken(FlinkSQLParser.KW_FUNCTIONS, 0); }
		public TerminalNode KW_GENERAL() { return getToken(FlinkSQLParser.KW_GENERAL, 0); }
		public TerminalNode KW_GENERATED() { return getToken(FlinkSQLParser.KW_GENERATED, 0); }
		public TerminalNode KW_GO() { return getToken(FlinkSQLParser.KW_GO, 0); }
		public TerminalNode KW_GOTO() { return getToken(FlinkSQLParser.KW_GOTO, 0); }
		public TerminalNode KW_GRANTED() { return getToken(FlinkSQLParser.KW_GRANTED, 0); }
		public TerminalNode KW_HOP() { return getToken(FlinkSQLParser.KW_HOP, 0); }
		public TerminalNode KW_HOURS() { return getToken(FlinkSQLParser.KW_HOURS, 0); }
		public TerminalNode KW_IF() { return getToken(FlinkSQLParser.KW_IF, 0); }
		public TerminalNode KW_IGNORE() { return getToken(FlinkSQLParser.KW_IGNORE, 0); }
		public TerminalNode KW_INCREMENT() { return getToken(FlinkSQLParser.KW_INCREMENT, 0); }
		public TerminalNode KW_INPUT() { return getToken(FlinkSQLParser.KW_INPUT, 0); }
		public TerminalNode KW_INVOKER() { return getToken(FlinkSQLParser.KW_INVOKER, 0); }
		public TerminalNode KW_JAR() { return getToken(FlinkSQLParser.KW_JAR, 0); }
		public TerminalNode KW_JARS() { return getToken(FlinkSQLParser.KW_JARS, 0); }
		public TerminalNode KW_JAVA() { return getToken(FlinkSQLParser.KW_JAVA, 0); }
		public TerminalNode KW_JSON() { return getToken(FlinkSQLParser.KW_JSON, 0); }
		public TerminalNode KW_JSON_EXECUTION_PLAN() { return getToken(FlinkSQLParser.KW_JSON_EXECUTION_PLAN, 0); }
		public TerminalNode KW_KEY() { return getToken(FlinkSQLParser.KW_KEY, 0); }
		public TerminalNode KW_KEY_MEMBER() { return getToken(FlinkSQLParser.KW_KEY_MEMBER, 0); }
		public TerminalNode KW_KEY_TYPE() { return getToken(FlinkSQLParser.KW_KEY_TYPE, 0); }
		public TerminalNode KW_LABEL() { return getToken(FlinkSQLParser.KW_LABEL, 0); }
		public TerminalNode KW_LAST() { return getToken(FlinkSQLParser.KW_LAST, 0); }
		public TerminalNode KW_LENGTH() { return getToken(FlinkSQLParser.KW_LENGTH, 0); }
		public TerminalNode KW_LEVEL() { return getToken(FlinkSQLParser.KW_LEVEL, 0); }
		public TerminalNode KW_LOAD() { return getToken(FlinkSQLParser.KW_LOAD, 0); }
		public TerminalNode KW_MAP() { return getToken(FlinkSQLParser.KW_MAP, 0); }
		public TerminalNode KW_MICROSECOND() { return getToken(FlinkSQLParser.KW_MICROSECOND, 0); }
		public TerminalNode KW_MILLENNIUM() { return getToken(FlinkSQLParser.KW_MILLENNIUM, 0); }
		public TerminalNode KW_MILLISECOND() { return getToken(FlinkSQLParser.KW_MILLISECOND, 0); }
		public TerminalNode KW_MINUTES() { return getToken(FlinkSQLParser.KW_MINUTES, 0); }
		public TerminalNode KW_MINVALUE() { return getToken(FlinkSQLParser.KW_MINVALUE, 0); }
		public TerminalNode KW_MODIFY() { return getToken(FlinkSQLParser.KW_MODIFY, 0); }
		public TerminalNode KW_MODULES() { return getToken(FlinkSQLParser.KW_MODULES, 0); }
		public TerminalNode KW_MONTHS() { return getToken(FlinkSQLParser.KW_MONTHS, 0); }
		public TerminalNode KW_NANOSECOND() { return getToken(FlinkSQLParser.KW_NANOSECOND, 0); }
		public TerminalNode KW_NULLS() { return getToken(FlinkSQLParser.KW_NULLS, 0); }
		public TerminalNode KW_NUMBER() { return getToken(FlinkSQLParser.KW_NUMBER, 0); }
		public TerminalNode KW_OPTION() { return getToken(FlinkSQLParser.KW_OPTION, 0); }
		public TerminalNode KW_OPTIONS() { return getToken(FlinkSQLParser.KW_OPTIONS, 0); }
		public TerminalNode KW_ORDERING() { return getToken(FlinkSQLParser.KW_ORDERING, 0); }
		public TerminalNode KW_OUTPUT() { return getToken(FlinkSQLParser.KW_OUTPUT, 0); }
		public TerminalNode KW_OVERWRITE() { return getToken(FlinkSQLParser.KW_OVERWRITE, 0); }
		public TerminalNode KW_OVERWRITING() { return getToken(FlinkSQLParser.KW_OVERWRITING, 0); }
		public TerminalNode KW_PARTITIONED() { return getToken(FlinkSQLParser.KW_PARTITIONED, 0); }
		public TerminalNode KW_PARTITIONS() { return getToken(FlinkSQLParser.KW_PARTITIONS, 0); }
		public TerminalNode KW_PASSING() { return getToken(FlinkSQLParser.KW_PASSING, 0); }
		public TerminalNode KW_PAST() { return getToken(FlinkSQLParser.KW_PAST, 0); }
		public TerminalNode KW_PATH() { return getToken(FlinkSQLParser.KW_PATH, 0); }
		public TerminalNode KW_PLACING() { return getToken(FlinkSQLParser.KW_PLACING, 0); }
		public TerminalNode KW_PLAN() { return getToken(FlinkSQLParser.KW_PLAN, 0); }
		public TerminalNode KW_PRECEDING() { return getToken(FlinkSQLParser.KW_PRECEDING, 0); }
		public TerminalNode KW_PRESERVE() { return getToken(FlinkSQLParser.KW_PRESERVE, 0); }
		public TerminalNode KW_PRIOR() { return getToken(FlinkSQLParser.KW_PRIOR, 0); }
		public TerminalNode KW_PRIVILEGES() { return getToken(FlinkSQLParser.KW_PRIVILEGES, 0); }
		public TerminalNode KW_PUBLIC() { return getToken(FlinkSQLParser.KW_PUBLIC, 0); }
		public TerminalNode KW_PYTHON() { return getToken(FlinkSQLParser.KW_PYTHON, 0); }
		public TerminalNode KW_PYTHON_FILES() { return getToken(FlinkSQLParser.KW_PYTHON_FILES, 0); }
		public TerminalNode KW_PYTHON_REQUIREMENTS() { return getToken(FlinkSQLParser.KW_PYTHON_REQUIREMENTS, 0); }
		public TerminalNode KW_PYTHON_DEPENDENCIES() { return getToken(FlinkSQLParser.KW_PYTHON_DEPENDENCIES, 0); }
		public TerminalNode KW_PYTHON_JAR() { return getToken(FlinkSQLParser.KW_PYTHON_JAR, 0); }
		public TerminalNode KW_PYTHON_ARCHIVES() { return getToken(FlinkSQLParser.KW_PYTHON_ARCHIVES, 0); }
		public TerminalNode KW_PYTHON_PARAMETER() { return getToken(FlinkSQLParser.KW_PYTHON_PARAMETER, 0); }
		public TerminalNode KW_QUARTER() { return getToken(FlinkSQLParser.KW_QUARTER, 0); }
		public TerminalNode KW_RAW() { return getToken(FlinkSQLParser.KW_RAW, 0); }
		public TerminalNode KW_READ() { return getToken(FlinkSQLParser.KW_READ, 0); }
		public TerminalNode KW_RELATIVE() { return getToken(FlinkSQLParser.KW_RELATIVE, 0); }
		public TerminalNode KW_REMOVE() { return getToken(FlinkSQLParser.KW_REMOVE, 0); }
		public TerminalNode KW_RENAME() { return getToken(FlinkSQLParser.KW_RENAME, 0); }
		public TerminalNode KW_REPLACE() { return getToken(FlinkSQLParser.KW_REPLACE, 0); }
		public TerminalNode KW_RESPECT() { return getToken(FlinkSQLParser.KW_RESPECT, 0); }
		public TerminalNode KW_RESTART() { return getToken(FlinkSQLParser.KW_RESTART, 0); }
		public TerminalNode KW_RESTRICT() { return getToken(FlinkSQLParser.KW_RESTRICT, 0); }
		public TerminalNode KW_ROLE() { return getToken(FlinkSQLParser.KW_ROLE, 0); }
		public TerminalNode KW_ROW_COUNT() { return getToken(FlinkSQLParser.KW_ROW_COUNT, 0); }
		public TerminalNode KW_SCALA() { return getToken(FlinkSQLParser.KW_SCALA, 0); }
		public TerminalNode KW_SCALAR() { return getToken(FlinkSQLParser.KW_SCALAR, 0); }
		public TerminalNode KW_SCALE() { return getToken(FlinkSQLParser.KW_SCALE, 0); }
		public TerminalNode KW_SCHEMA() { return getToken(FlinkSQLParser.KW_SCHEMA, 0); }
		public TerminalNode KW_SECONDS() { return getToken(FlinkSQLParser.KW_SECONDS, 0); }
		public TerminalNode KW_SECTION() { return getToken(FlinkSQLParser.KW_SECTION, 0); }
		public TerminalNode KW_SECURITY() { return getToken(FlinkSQLParser.KW_SECURITY, 0); }
		public TerminalNode KW_SELF() { return getToken(FlinkSQLParser.KW_SELF, 0); }
		public TerminalNode KW_SERVER() { return getToken(FlinkSQLParser.KW_SERVER, 0); }
		public TerminalNode KW_SERVER_NAME() { return getToken(FlinkSQLParser.KW_SERVER_NAME, 0); }
		public TerminalNode KW_SESSION() { return getToken(FlinkSQLParser.KW_SESSION, 0); }
		public TerminalNode KW_SETS() { return getToken(FlinkSQLParser.KW_SETS, 0); }
		public TerminalNode KW_SIMPLE() { return getToken(FlinkSQLParser.KW_SIMPLE, 0); }
		public TerminalNode KW_SIZE() { return getToken(FlinkSQLParser.KW_SIZE, 0); }
		public TerminalNode KW_SLIDE() { return getToken(FlinkSQLParser.KW_SLIDE, 0); }
		public TerminalNode KW_SOURCE() { return getToken(FlinkSQLParser.KW_SOURCE, 0); }
		public TerminalNode KW_SPACE() { return getToken(FlinkSQLParser.KW_SPACE, 0); }
		public TerminalNode KW_STATE() { return getToken(FlinkSQLParser.KW_STATE, 0); }
		public TerminalNode KW_STATEMENT() { return getToken(FlinkSQLParser.KW_STATEMENT, 0); }
		public TerminalNode KW_STEP() { return getToken(FlinkSQLParser.KW_STEP, 0); }
		public TerminalNode KW_STRING() { return getToken(FlinkSQLParser.KW_STRING, 0); }
		public TerminalNode KW_STRUCTURE() { return getToken(FlinkSQLParser.KW_STRUCTURE, 0); }
		public TerminalNode KW_STYLE() { return getToken(FlinkSQLParser.KW_STYLE, 0); }
		public TerminalNode KW_TABLES() { return getToken(FlinkSQLParser.KW_TABLES, 0); }
		public TerminalNode KW_TEMPORARY() { return getToken(FlinkSQLParser.KW_TEMPORARY, 0); }
		public TerminalNode KW_TIMECOL() { return getToken(FlinkSQLParser.KW_TIMECOL, 0); }
		public TerminalNode KW_FLOOR() { return getToken(FlinkSQLParser.KW_FLOOR, 0); }
		public TerminalNode KW_TIMESTAMP_LTZ() { return getToken(FlinkSQLParser.KW_TIMESTAMP_LTZ, 0); }
		public TerminalNode KW_TIMESTAMPADD() { return getToken(FlinkSQLParser.KW_TIMESTAMPADD, 0); }
		public TerminalNode KW_TIMESTAMPDIFF() { return getToken(FlinkSQLParser.KW_TIMESTAMPDIFF, 0); }
		public TerminalNode KW_TRANSFORM() { return getToken(FlinkSQLParser.KW_TRANSFORM, 0); }
		public TerminalNode KW_TUMBLE() { return getToken(FlinkSQLParser.KW_TUMBLE, 0); }
		public TerminalNode KW_TYPE() { return getToken(FlinkSQLParser.KW_TYPE, 0); }
		public TerminalNode KW_UNDER() { return getToken(FlinkSQLParser.KW_UNDER, 0); }
		public TerminalNode KW_UNLOAD() { return getToken(FlinkSQLParser.KW_UNLOAD, 0); }
		public TerminalNode KW_USAGE() { return getToken(FlinkSQLParser.KW_USAGE, 0); }
		public TerminalNode KW_USE() { return getToken(FlinkSQLParser.KW_USE, 0); }
		public TerminalNode KW_UTF16() { return getToken(FlinkSQLParser.KW_UTF16, 0); }
		public TerminalNode KW_UTF32() { return getToken(FlinkSQLParser.KW_UTF32, 0); }
		public TerminalNode KW_UTF8() { return getToken(FlinkSQLParser.KW_UTF8, 0); }
		public TerminalNode KW_VERSION() { return getToken(FlinkSQLParser.KW_VERSION, 0); }
		public TerminalNode KW_VIEW() { return getToken(FlinkSQLParser.KW_VIEW, 0); }
		public TerminalNode KW_VIEWS() { return getToken(FlinkSQLParser.KW_VIEWS, 0); }
		public TerminalNode KW_VIRTUAL() { return getToken(FlinkSQLParser.KW_VIRTUAL, 0); }
		public TerminalNode KW_WATERMARK() { return getToken(FlinkSQLParser.KW_WATERMARK, 0); }
		public TerminalNode KW_WATERMARKS() { return getToken(FlinkSQLParser.KW_WATERMARKS, 0); }
		public TerminalNode KW_WEEK() { return getToken(FlinkSQLParser.KW_WEEK, 0); }
		public TerminalNode KW_WORK() { return getToken(FlinkSQLParser.KW_WORK, 0); }
		public TerminalNode KW_WRAPPER() { return getToken(FlinkSQLParser.KW_WRAPPER, 0); }
		public TerminalNode KW_YEARS() { return getToken(FlinkSQLParser.KW_YEARS, 0); }
		public TerminalNode KW_ZONE() { return getToken(FlinkSQLParser.KW_ZONE, 0); }
		public NonReservedKeywordsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nonReservedKeywords; }
	}

	public final NonReservedKeywordsContext nonReservedKeywords() throws RecognitionException {
		NonReservedKeywordsContext _localctx = new NonReservedKeywordsContext(_ctx, getState());
		enterRule(_localctx, 384, RULE_nonReservedKeywords);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2340);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << KW_ADD) | (1L << KW_ADMIN) | (1L << KW_AFTER) | (1L << KW_ANALYZE) | (1L << KW_ASC) | (1L << KW_BEFORE) | (1L << KW_BYTES) | (1L << KW_CASCADE) | (1L << KW_CATALOG) | (1L << KW_CATALOGS) | (1L << KW_CENTURY) | (1L << KW_CHAIN) | (1L << KW_CHANGELOG_MODE) | (1L << KW_CHARACTERS) | (1L << KW_COMMENT) | (1L << KW_COMPACT) | (1L << KW_COLUMNS) | (1L << KW_CONSTRAINTS) | (1L << KW_CONSTRUCTOR) | (1L << KW_CUMULATE) | (1L << KW_DATA) | (1L << KW_DATABASE) | (1L << KW_DATABASES) | (1L << KW_DAYS) | (1L << KW_DECADE) | (1L << KW_DEFINED) | (1L << KW_DESC) | (1L << KW_DESCRIPTOR) | (1L << KW_DIV) | (1L << KW_ENCODING) | (1L << KW_ENFORCED) | (1L << KW_ENGINE) | (1L << KW_ERROR) | (1L << KW_ESTIMATED_COST) | (1L << KW_EXCEPTION) | (1L << KW_EXCLUDE) | (1L << KW_EXCLUDING) | (1L << KW_EXTENDED) | (1L << KW_FILE) | (1L << KW_FINAL) | (1L << KW_FIRST) | (1L << KW_FOLLOWING) | (1L << KW_FORMAT) | (1L << KW_FORTRAN) | (1L << KW_FOUND) | (1L << KW_FRAC_SECOND) | (1L << KW_FUNCTIONS) | (1L << KW_GENERAL) | (1L << KW_GENERATED) | (1L << KW_GO) | (1L << KW_GOTO) | (1L << KW_GRANTED) | (1L << KW_HOP) | (1L << KW_HOURS) | (1L << KW_IF) | (1L << KW_IGNORE) | (1L << KW_INCREMENT))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (KW_INPUT - 64)) | (1L << (KW_INVOKER - 64)) | (1L << (KW_JAR - 64)) | (1L << (KW_JARS - 64)) | (1L << (KW_JAVA - 64)) | (1L << (KW_JSON - 64)) | (1L << (KW_JSON_EXECUTION_PLAN - 64)) | (1L << (KW_KEY - 64)) | (1L << (KW_KEY_MEMBER - 64)) | (1L << (KW_KEY_TYPE - 64)) | (1L << (KW_LABEL - 64)) | (1L << (KW_LAST - 64)) | (1L << (KW_LENGTH - 64)) | (1L << (KW_LEVEL - 64)) | (1L << (KW_LOAD - 64)) | (1L << (KW_MAP - 64)) | (1L << (KW_MICROSECOND - 64)) | (1L << (KW_MILLENNIUM - 64)) | (1L << (KW_MILLISECOND - 64)) | (1L << (KW_MINUTES - 64)) | (1L << (KW_MINVALUE - 64)) | (1L << (KW_MODIFY - 64)) | (1L << (KW_MODULES - 64)) | (1L << (KW_MONTHS - 64)) | (1L << (KW_NANOSECOND - 64)) | (1L << (KW_NULLS - 64)) | (1L << (KW_NUMBER - 64)) | (1L << (KW_OPTION - 64)) | (1L << (KW_OPTIONS - 64)) | (1L << (KW_ORDERING - 64)) | (1L << (KW_OUTPUT - 64)) | (1L << (KW_OVERWRITE - 64)) | (1L << (KW_OVERWRITING - 64)) | (1L << (KW_PARTITIONED - 64)) | (1L << (KW_PARTITIONS - 64)) | (1L << (KW_PASSING - 64)) | (1L << (KW_PAST - 64)) | (1L << (KW_PATH - 64)) | (1L << (KW_PLACING - 64)) | (1L << (KW_PLAN - 64)) | (1L << (KW_PRECEDING - 64)) | (1L << (KW_PRESERVE - 64)) | (1L << (KW_PRIOR - 64)) | (1L << (KW_PRIVILEGES - 64)) | (1L << (KW_PUBLIC - 64)) | (1L << (KW_PYTHON - 64)) | (1L << (KW_PYTHON_FILES - 64)) | (1L << (KW_PYTHON_REQUIREMENTS - 64)) | (1L << (KW_PYTHON_DEPENDENCIES - 64)) | (1L << (KW_PYTHON_JAR - 64)) | (1L << (KW_PYTHON_ARCHIVES - 64)) | (1L << (KW_PYTHON_PARAMETER - 64)) | (1L << (KW_QUARTER - 64)) | (1L << (KW_RAW - 64)) | (1L << (KW_READ - 64)) | (1L << (KW_RELATIVE - 64)) | (1L << (KW_REMOVE - 64)) | (1L << (KW_RENAME - 64)) | (1L << (KW_REPLACE - 64)) | (1L << (KW_RESPECT - 64)) | (1L << (KW_RESTART - 64)) | (1L << (KW_RESTRICT - 64)) | (1L << (KW_ROLE - 64)) | (1L << (KW_ROW_COUNT - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (KW_SCALA - 128)) | (1L << (KW_SCALAR - 128)) | (1L << (KW_SCALE - 128)) | (1L << (KW_SCHEMA - 128)) | (1L << (KW_SECONDS - 128)) | (1L << (KW_SECTION - 128)) | (1L << (KW_SECURITY - 128)) | (1L << (KW_SELF - 128)) | (1L << (KW_SERVER - 128)) | (1L << (KW_SERVER_NAME - 128)) | (1L << (KW_SESSION - 128)) | (1L << (KW_SETS - 128)) | (1L << (KW_SIMPLE - 128)) | (1L << (KW_SIZE - 128)) | (1L << (KW_SLIDE - 128)) | (1L << (KW_SOURCE - 128)) | (1L << (KW_SPACE - 128)) | (1L << (KW_STATE - 128)) | (1L << (KW_STATEMENT - 128)) | (1L << (KW_STEP - 128)) | (1L << (KW_STRING - 128)) | (1L << (KW_STRUCTURE - 128)) | (1L << (KW_STYLE - 128)) | (1L << (KW_TABLES - 128)) | (1L << (KW_TEMPORARY - 128)) | (1L << (KW_TIMECOL - 128)) | (1L << (KW_FLOOR - 128)) | (1L << (KW_TIMESTAMP_LTZ - 128)) | (1L << (KW_TIMESTAMPADD - 128)) | (1L << (KW_TIMESTAMPDIFF - 128)) | (1L << (KW_TRANSFORM - 128)) | (1L << (KW_TUMBLE - 128)) | (1L << (KW_TYPE - 128)) | (1L << (KW_UNDER - 128)) | (1L << (KW_UNLOAD - 128)) | (1L << (KW_USAGE - 128)) | (1L << (KW_USE - 128)) | (1L << (KW_UTF16 - 128)) | (1L << (KW_UTF32 - 128)) | (1L << (KW_UTF8 - 128)) | (1L << (KW_VERSION - 128)) | (1L << (KW_VIEW - 128)) | (1L << (KW_VIEWS - 128)) | (1L << (KW_VIRTUAL - 128)) | (1L << (KW_WATERMARK - 128)) | (1L << (KW_WATERMARKS - 128)) | (1L << (KW_WEEK - 128)) | (1L << (KW_WORK - 128)) | (1L << (KW_WRAPPER - 128)) | (1L << (KW_YEARS - 128)) | (1L << (KW_ZONE - 128)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 79:
			return queryStatement_sempred((QueryStatementContext)_localctx, predIndex);
		case 89:
			return tableExpression_sempred((TableExpressionContext)_localctx, predIndex);
		case 130:
			return booleanExpression_sempred((BooleanExpressionContext)_localctx, predIndex);
		case 133:
			return valueExpression_sempred((ValueExpressionContext)_localctx, predIndex);
		case 134:
			return primaryExpression_sempred((PrimaryExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean queryStatement_sempred(QueryStatementContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 3);
		}
		return true;
	}
	private boolean tableExpression_sempred(TableExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 1:
			return precpred(_ctx, 3);
		case 2:
			return precpred(_ctx, 5);
		case 3:
			return precpred(_ctx, 4);
		}
		return true;
	}
	private boolean booleanExpression_sempred(BooleanExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 4:
			return precpred(_ctx, 3);
		case 5:
			return precpred(_ctx, 2);
		case 6:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean valueExpression_sempred(ValueExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 7:
			return precpred(_ctx, 7);
		case 8:
			return precpred(_ctx, 6);
		case 9:
			return precpred(_ctx, 5);
		case 10:
			return precpred(_ctx, 4);
		case 11:
			return precpred(_ctx, 3);
		case 12:
			return precpred(_ctx, 2);
		case 13:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean primaryExpression_sempred(PrimaryExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 14:
			return precpred(_ctx, 5);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\u01a2\u0929\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT"+
		"\4U\tU\4V\tV\4W\tW\4X\tX\4Y\tY\4Z\tZ\4[\t[\4\\\t\\\4]\t]\4^\t^\4_\t_\4"+
		"`\t`\4a\ta\4b\tb\4c\tc\4d\td\4e\te\4f\tf\4g\tg\4h\th\4i\ti\4j\tj\4k\t"+
		"k\4l\tl\4m\tm\4n\tn\4o\to\4p\tp\4q\tq\4r\tr\4s\ts\4t\tt\4u\tu\4v\tv\4"+
		"w\tw\4x\tx\4y\ty\4z\tz\4{\t{\4|\t|\4}\t}\4~\t~\4\177\t\177\4\u0080\t\u0080"+
		"\4\u0081\t\u0081\4\u0082\t\u0082\4\u0083\t\u0083\4\u0084\t\u0084\4\u0085"+
		"\t\u0085\4\u0086\t\u0086\4\u0087\t\u0087\4\u0088\t\u0088\4\u0089\t\u0089"+
		"\4\u008a\t\u008a\4\u008b\t\u008b\4\u008c\t\u008c\4\u008d\t\u008d\4\u008e"+
		"\t\u008e\4\u008f\t\u008f\4\u0090\t\u0090\4\u0091\t\u0091\4\u0092\t\u0092"+
		"\4\u0093\t\u0093\4\u0094\t\u0094\4\u0095\t\u0095\4\u0096\t\u0096\4\u0097"+
		"\t\u0097\4\u0098\t\u0098\4\u0099\t\u0099\4\u009a\t\u009a\4\u009b\t\u009b"+
		"\4\u009c\t\u009c\4\u009d\t\u009d\4\u009e\t\u009e\4\u009f\t\u009f\4\u00a0"+
		"\t\u00a0\4\u00a1\t\u00a1\4\u00a2\t\u00a2\4\u00a3\t\u00a3\4\u00a4\t\u00a4"+
		"\4\u00a5\t\u00a5\4\u00a6\t\u00a6\4\u00a7\t\u00a7\4\u00a8\t\u00a8\4\u00a9"+
		"\t\u00a9\4\u00aa\t\u00aa\4\u00ab\t\u00ab\4\u00ac\t\u00ac\4\u00ad\t\u00ad"+
		"\4\u00ae\t\u00ae\4\u00af\t\u00af\4\u00b0\t\u00b0\4\u00b1\t\u00b1\4\u00b2"+
		"\t\u00b2\4\u00b3\t\u00b3\4\u00b4\t\u00b4\4\u00b5\t\u00b5\4\u00b6\t\u00b6"+
		"\4\u00b7\t\u00b7\4\u00b8\t\u00b8\4\u00b9\t\u00b9\4\u00ba\t\u00ba\4\u00bb"+
		"\t\u00bb\4\u00bc\t\u00bc\4\u00bd\t\u00bd\4\u00be\t\u00be\4\u00bf\t\u00bf"+
		"\4\u00c0\t\u00c0\4\u00c1\t\u00c1\4\u00c2\t\u00c2\3\2\3\2\3\2\3\3\3\3\3"+
		"\3\3\4\3\4\3\4\7\4\u018e\n\4\f\4\16\4\u0191\13\4\3\5\3\5\3\6\3\6\3\6\3"+
		"\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6"+
		"\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6\u01b6\n\6\3\7\3\7"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u01c8\n\b"+
		"\3\t\3\t\5\t\u01cc\n\t\3\n\3\n\3\n\3\13\3\13\3\13\3\13\5\13\u01d5\n\13"+
		"\3\13\3\13\3\13\5\13\u01da\n\13\3\f\3\f\3\f\7\f\u01df\n\f\f\f\16\f\u01e2"+
		"\13\f\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\5\16\u01ec\n\16\3\17\3\17"+
		"\3\17\3\17\3\17\7\17\u01f3\n\17\f\17\16\17\u01f6\13\17\3\20\3\20\3\20"+
		"\3\20\3\20\3\20\3\20\3\20\3\20\5\20\u0201\n\20\3\20\5\20\u0204\n\20\3"+
		"\20\3\20\3\20\3\20\3\20\5\20\u020b\n\20\3\20\3\20\3\20\3\20\3\20\3\20"+
		"\5\20\u0213\n\20\3\20\3\20\3\20\5\20\u0218\n\20\3\20\5\20\u021b\n\20\3"+
		"\21\3\21\3\21\3\21\3\21\5\21\u0222\n\21\3\22\3\22\3\22\3\22\3\23\3\23"+
		"\5\23\u022a\n\23\3\24\3\24\5\24\u022e\n\24\3\25\3\25\3\25\3\25\3\26\6"+
		"\26\u0235\n\26\r\26\16\26\u0236\3\27\3\27\5\27\u023b\n\27\3\30\3\30\5"+
		"\30\u023f\n\30\3\30\3\30\5\30\u0243\n\30\3\30\3\30\3\30\3\30\3\30\7\30"+
		"\u024a\n\30\f\30\16\30\u024d\13\30\3\30\3\30\5\30\u0251\n\30\3\30\3\30"+
		"\5\30\u0255\n\30\3\30\3\30\5\30\u0259\n\30\3\30\3\30\5\30\u025d\n\30\3"+
		"\30\5\30\u0260\n\30\3\30\3\30\5\30\u0264\n\30\3\31\3\31\3\31\5\31\u0269"+
		"\n\31\3\31\3\31\3\31\3\31\5\31\u026f\n\31\3\32\3\32\3\32\5\32\u0274\n"+
		"\32\3\33\3\33\3\33\5\33\u0279\n\33\3\33\5\33\u027c\n\33\3\34\3\34\5\34"+
		"\u0280\n\34\3\35\3\35\3\35\3\35\7\35\u0286\n\35\f\35\16\35\u0289\13\35"+
		"\3\35\3\35\3\36\3\36\3\36\5\36\u0290\n\36\3\36\3\36\5\36\u0294\n\36\3"+
		"\36\3\36\5\36\u0298\n\36\3\36\3\36\5\36\u029c\n\36\3\36\3\36\5\36\u02a0"+
		"\n\36\3\36\3\36\5\36\u02a4\n\36\3\36\3\36\5\36\u02a8\n\36\3\36\3\36\5"+
		"\36\u02ac\n\36\3\36\3\36\5\36\u02b0\n\36\3\36\3\36\5\36\u02b4\n\36\3\36"+
		"\3\36\5\36\u02b8\n\36\3\36\3\36\5\36\u02bc\n\36\3\36\3\36\5\36\u02c0\n"+
		"\36\3\36\3\36\5\36\u02c4\n\36\3\36\3\36\5\36\u02c8\n\36\3\36\3\36\5\36"+
		"\u02cc\n\36\3\36\3\36\5\36\u02d0\n\36\3\36\3\36\5\36\u02d4\n\36\5\36\u02d6"+
		"\n\36\3\37\3\37\3\37\3\37\3 \3 \3 \3 \5 \u02e0\n \3 \3 \3!\3!\3!\3!\5"+
		"!\u02e8\n!\3!\3!\3\"\3\"\3\"\3\"\7\"\u02f0\n\"\f\"\16\"\u02f3\13\"\3\""+
		"\3\"\3#\3#\3#\3#\3#\3#\3#\3$\3$\3$\3$\3$\3$\3$\7$\u0305\n$\f$\16$\u0308"+
		"\13$\3$\3$\3%\3%\5%\u030e\n%\3%\3%\3%\3%\5%\u0314\n%\3%\5%\u0317\n%\3"+
		"%\5%\u031a\n%\3&\3&\3&\3\'\3\'\3\'\3\'\3\'\5\'\u0324\n\'\3\'\5\'\u0327"+
		"\n\'\3(\3(\3)\3)\3)\3)\5)\u032f\n)\3*\3*\3+\3+\3+\3+\3+\3+\3,\3,\5,\u033b"+
		"\n,\3,\3,\3,\3,\3,\3,\3-\3-\3.\3.\3.\3.\3/\3/\3/\3/\3\60\3\60\3\60\3\60"+
		"\7\60\u0351\n\60\f\60\16\60\u0354\13\60\3\60\3\60\3\61\3\61\3\61\3\61"+
		"\3\61\3\61\7\61\u035e\n\61\f\61\16\61\u0361\13\61\3\61\3\61\5\61\u0365"+
		"\n\61\3\62\3\62\5\62\u0369\n\62\3\63\3\63\3\63\3\63\7\63\u036f\n\63\f"+
		"\63\16\63\u0372\13\63\3\63\5\63\u0375\n\63\3\64\3\64\3\64\3\64\5\64\u037b"+
		"\n\64\3\65\3\65\3\65\3\65\3\65\3\66\3\66\3\66\5\66\u0385\n\66\3\66\3\66"+
		"\5\66\u0389\n\66\3\66\5\66\u038c\n\66\3\67\3\67\5\67\u0390\n\67\3\67\3"+
		"\67\5\67\u0394\n\67\3\67\3\67\5\67\u0398\n\67\3\67\5\67\u039b\n\67\3\67"+
		"\3\67\3\67\38\38\38\38\58\u03a4\n8\38\38\58\u03a8\n8\38\38\38\38\38\5"+
		"8\u03af\n8\38\58\u03b2\n8\39\39\39\39\39\39\79\u03ba\n9\f9\169\u03bd\13"+
		"9\3:\3:\3;\3;\3;\5;\u03c4\n;\3;\3;\3;\3;\3;\3;\5;\u03cc\n;\3<\3<\5<\u03d0"+
		"\n<\3<\3<\3<\3=\3=\3=\3>\3>\3>\3>\3>\3>\3>\5>\u03df\n>\3?\3?\3?\3?\3@"+
		"\3@\3@\3@\3A\3A\3A\3B\3B\3B\3B\3B\3B\5B\u03f2\nB\3C\3C\3C\3C\3C\3D\3D"+
		"\3D\3D\5D\u03fd\nD\3D\3D\5D\u0401\nD\3D\3D\3D\3D\3D\5D\u0408\nD\3E\3E"+
		"\3E\5E\u040d\nE\3E\3E\3F\3F\5F\u0413\nF\3F\3F\5F\u0417\nF\3F\3F\3G\3G"+
		"\3G\5G\u041e\nG\3G\3G\5G\u0422\nG\3H\3H\5H\u0426\nH\3H\3H\5H\u042a\nH"+
		"\3H\3H\3I\3I\3I\3I\5I\u0432\nI\3I\3I\5I\u0436\nI\3I\3I\3J\5J\u043b\nJ"+
		"\3J\3J\3J\3J\5J\u0441\nJ\3K\3K\3K\3K\5K\u0447\nK\3K\5K\u044a\nK\3K\3K"+
		"\5K\u044e\nK\3L\3L\3L\3M\3M\3M\3M\7M\u0457\nM\fM\16M\u045a\13M\3N\3N\3"+
		"N\3N\7N\u0460\nN\fN\16N\u0463\13N\3N\3N\3O\3O\3O\3O\3O\3O\3O\6O\u046e"+
		"\nO\rO\16O\u046f\3O\3O\3P\3P\3P\3P\3P\3P\6P\u047a\nP\rP\16P\u047b\3P\3"+
		"P\3Q\3Q\3Q\3Q\3Q\3Q\3Q\3Q\3Q\3Q\3Q\5Q\u048b\nQ\3Q\5Q\u048e\nQ\3Q\3Q\5"+
		"Q\u0492\nQ\3Q\5Q\u0495\nQ\5Q\u0497\nQ\3Q\3Q\3Q\5Q\u049c\nQ\3Q\3Q\5Q\u04a0"+
		"\nQ\3Q\5Q\u04a3\nQ\7Q\u04a5\nQ\fQ\16Q\u04a8\13Q\3R\3R\3R\3R\7R\u04ae\n"+
		"R\fR\16R\u04b1\13R\3S\3S\3S\3S\7S\u04b7\nS\fS\16S\u04ba\13S\3T\3T\3T\3"+
		"T\3T\7T\u04c1\nT\fT\16T\u04c4\13T\3T\3T\5T\u04c8\nT\3T\3T\3T\3T\3T\3U"+
		"\3U\3V\3V\3V\5V\u04d4\nV\3V\5V\u04d7\nV\3V\5V\u04da\nV\3V\5V\u04dd\nV"+
		"\3V\3V\3V\3V\5V\u04e3\nV\3W\3W\5W\u04e7\nW\3W\3W\3W\3W\7W\u04ed\nW\fW"+
		"\16W\u04f0\13W\5W\u04f2\nW\3X\3X\3X\5X\u04f7\nX\3X\5X\u04fa\nX\5X\u04fc"+
		"\nX\3Y\3Y\3Y\3Y\3Y\3Y\3Y\3Y\3Y\3Y\3Y\3Y\5Y\u050a\nY\3Z\3Z\3Z\3[\3[\3["+
		"\3[\7[\u0513\n[\f[\16[\u0516\13[\3[\3[\5[\u051a\n[\3[\3[\3[\3[\3[\3[\5"+
		"[\u0522\n[\3[\5[\u0525\n[\3[\5[\u0528\n[\3[\3[\3[\5[\u052d\n[\3[\3[\5"+
		"[\u0531\n[\3[\5[\u0534\n[\3[\5[\u0537\n[\3[\3[\3[\5[\u053c\n[\3[\3[\7"+
		"[\u0540\n[\f[\16[\u0543\13[\7[\u0545\n[\f[\16[\u0548\13[\3\\\3\\\5\\\u054c"+
		"\n\\\3]\5]\u054f\n]\3]\3]\5]\u0553\n]\3]\5]\u0556\n]\3]\5]\u0559\n]\3"+
		"]\3]\3]\3]\3]\3]\3]\3]\7]\u0563\n]\f]\16]\u0566\13]\3]\3]\3]\3]\5]\u056c"+
		"\n]\3]\3]\3]\3]\3]\3]\3]\3]\3]\3]\3]\3]\7]\u057a\n]\f]\16]\u057d\13]\3"+
		"]\3]\3]\3]\3]\3]\3]\3]\7]\u0587\n]\f]\16]\u058a\13]\3]\3]\3]\3]\3]\3]"+
		"\3]\5]\u0593\n]\3^\3^\3^\3^\3^\3^\3_\3_\3`\3`\3`\3`\3`\3a\3a\3a\3a\3a"+
		"\3b\3b\3b\3b\3b\7b\u05ac\nb\fb\16b\u05af\13b\3b\3b\3c\3c\3d\3d\3d\3d\3"+
		"d\3d\3d\3d\3d\3d\3d\3d\3d\3d\3d\5d\u05c4\nd\3e\3e\3f\3f\3f\3f\3f\3g\3"+
		"g\3g\3g\3g\3g\3g\7g\u05d4\ng\fg\16g\u05d7\13g\3g\3g\5g\u05db\ng\3h\3h"+
		"\3h\3i\3i\3i\3i\3i\7i\u05e5\ni\fi\16i\u05e8\13i\3j\3j\3j\3j\3j\3j\3j\3"+
		"j\7j\u05f2\nj\fj\16j\u05f5\13j\3j\3j\3j\3j\3j\3j\3j\7j\u05fe\nj\fj\16"+
		"j\u0601\13j\3j\3j\3j\3j\3j\3j\3j\7j\u060a\nj\fj\16j\u060d\13j\3j\3j\5"+
		"j\u0611\nj\3k\3k\3k\3l\3l\3m\3m\3m\3m\3m\3m\3m\3n\3n\3o\3o\3p\3p\3p\3"+
		"q\3q\3q\3q\7q\u062a\nq\fq\16q\u062d\13q\3r\3r\3r\3r\3s\5s\u0634\ns\3s"+
		"\3s\5s\u0638\ns\3s\5s\u063b\ns\3s\5s\u063e\ns\3s\3s\3t\3t\3t\5t\u0645"+
		"\nt\3t\5t\u0648\nt\3t\5t\u064b\nt\3t\5t\u064e\nt\3t\5t\u0651\nt\3t\5t"+
		"\u0654\nt\3t\3t\3t\5t\u0659\nt\3t\5t\u065c\nt\3u\3u\3u\3u\3u\7u\u0663"+
		"\nu\fu\16u\u0666\13u\3v\3v\5v\u066a\nv\3v\3v\5v\u066e\nv\3w\3w\3w\5w\u0673"+
		"\nw\3x\3x\3x\3x\3x\7x\u067a\nx\fx\16x\u067d\13x\3y\3y\3y\3y\3y\3y\3y\3"+
		"y\3y\3y\3y\3y\3y\3y\3y\3y\5y\u068f\ny\3z\3z\3z\3z\7z\u0695\nz\fz\16z\u0698"+
		"\13z\3{\3{\3{\6{\u069d\n{\r{\16{\u069e\3{\3{\5{\u06a3\n{\3|\3|\5|\u06a7"+
		"\n|\3}\3}\3}\3}\3}\3}\3}\3}\5}\u06b1\n}\3~\3~\3~\3~\3~\3~\3~\3~\3~\3~"+
		"\3~\3~\3~\3~\3~\3~\3~\3~\3~\3~\3~\3~\3~\3~\5~\u06cb\n~\3\177\3\177\3\177"+
		"\3\177\7\177\u06d1\n\177\f\177\16\177\u06d4\13\177\3\u0080\3\u0080\3\u0080"+
		"\3\u0080\3\u0080\3\u0080\3\u0080\3\u0080\3\u0080\5\u0080\u06df\n\u0080"+
		"\3\u0081\3\u0081\3\u0081\3\u0081\3\u0081\3\u0082\3\u0082\3\u0082\3\u0083"+
		"\3\u0083\3\u0084\3\u0084\3\u0084\3\u0084\3\u0084\3\u0084\3\u0084\3\u0084"+
		"\3\u0084\3\u0084\5\u0084\u06f5\n\u0084\5\u0084\u06f7\n\u0084\3\u0084\3"+
		"\u0084\3\u0084\3\u0084\3\u0084\3\u0084\3\u0084\3\u0084\3\u0084\5\u0084"+
		"\u0702\n\u0084\3\u0084\7\u0084\u0705\n\u0084\f\u0084\16\u0084\u0708\13"+
		"\u0084\3\u0085\5\u0085\u070b\n\u0085\3\u0085\3\u0085\5\u0085\u070f\n\u0085"+
		"\3\u0085\3\u0085\3\u0085\3\u0085\3\u0085\5\u0085\u0716\n\u0085\3\u0085"+
		"\3\u0085\3\u0085\3\u0085\3\u0085\7\u0085\u071d\n\u0085\f\u0085\16\u0085"+
		"\u0720\13\u0085\3\u0085\3\u0085\3\u0085\5\u0085\u0725\n\u0085\3\u0085"+
		"\3\u0085\3\u0085\3\u0085\3\u0085\3\u0085\3\u0085\3\u0085\3\u0085\3\u0085"+
		"\3\u0085\5\u0085\u0732\n\u0085\3\u0085\3\u0085\3\u0085\3\u0085\3\u0085"+
		"\5\u0085\u0739\n\u0085\3\u0085\3\u0085\3\u0085\5\u0085\u073e\n\u0085\3"+
		"\u0085\3\u0085\3\u0085\3\u0085\5\u0085\u0744\n\u0085\3\u0085\3\u0085\3"+
		"\u0085\3\u0085\3\u0085\5\u0085\u074b\n\u0085\5\u0085\u074d\n\u0085\3\u0086"+
		"\5\u0086\u0750\n\u0086\3\u0086\3\u0086\3\u0086\3\u0086\3\u0086\3\u0086"+
		"\3\u0086\3\u0086\7\u0086\u075a\n\u0086\f\u0086\16\u0086\u075d\13\u0086"+
		"\3\u0086\3\u0086\5\u0086\u0761\n\u0086\3\u0086\5\u0086\u0764\n\u0086\3"+
		"\u0086\3\u0086\3\u0086\3\u0086\5\u0086\u076a\n\u0086\5\u0086\u076c\n\u0086"+
		"\3\u0087\3\u0087\3\u0087\3\u0087\5\u0087\u0772\n\u0087\3\u0087\3\u0087"+
		"\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087"+
		"\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087"+
		"\3\u0087\7\u0087\u0789\n\u0087\f\u0087\16\u0087\u078c\13\u0087\3\u0088"+
		"\3\u0088\3\u0088\6\u0088\u0791\n\u0088\r\u0088\16\u0088\u0792\3\u0088"+
		"\3\u0088\5\u0088\u0797\n\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088"+
		"\6\u0088\u079e\n\u0088\r\u0088\16\u0088\u079f\3\u0088\3\u0088\5\u0088"+
		"\u07a4\n\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088"+
		"\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\5\u0088\u07b4"+
		"\n\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\5\u0088"+
		"\u07bd\n\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088"+
		"\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088"+
		"\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\5\u0088\u07d5\n\u0088"+
		"\3\u0088\3\u0088\3\u0088\7\u0088\u07da\n\u0088\f\u0088\16\u0088\u07dd"+
		"\13\u0088\5\u0088\u07df\n\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088"+
		"\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\5\u0088\u07ed"+
		"\n\u0088\3\u0088\3\u0088\3\u0088\5\u0088\u07f2\n\u0088\3\u0088\3\u0088"+
		"\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\5\u0088\u07fb\n\u0088\3\u0088"+
		"\3\u0088\3\u0088\3\u0088\3\u0088\7\u0088\u0802\n\u0088\f\u0088\16\u0088"+
		"\u0805\13\u0088\3\u0089\3\u0089\3\u0089\5\u0089\u080a\n\u0089\3\u008a"+
		"\3\u008a\3\u008a\3\u008a\3\u008a\7\u008a\u0811\n\u008a\f\u008a\16\u008a"+
		"\u0814\13\u008a\3\u008a\3\u008a\3\u008b\3\u008b\3\u008b\3\u008b\3\u008b"+
		"\7\u008b\u081d\n\u008b\f\u008b\16\u008b\u0820\13\u008b\3\u008b\3\u008b"+
		"\3\u008c\3\u008c\3\u008c\3\u008c\3\u008c\3\u008c\3\u008c\3\u008d\3\u008d"+
		"\5\u008d\u082d\n\u008d\3\u008e\3\u008e\3\u008e\5\u008e\u0832\n\u008e\3"+
		"\u008f\3\u008f\3\u008f\3\u008f\3\u008f\5\u008f\u0839\n\u008f\3\u0090\3"+
		"\u0090\3\u0090\3\u0090\3\u0090\3\u0090\3\u0091\3\u0091\3\u0092\3\u0092"+
		"\3\u0093\3\u0093\5\u0093\u0847\n\u0093\3\u0094\3\u0094\3\u0094\5\u0094"+
		"\u084c\n\u0094\3\u0095\3\u0095\5\u0095\u0850\n\u0095\3\u0096\3\u0096\3"+
		"\u0096\6\u0096\u0855\n\u0096\r\u0096\16\u0096\u0856\3\u0097\3\u0097\3"+
		"\u0097\5\u0097\u085c\n\u0097\3\u0098\3\u0098\3\u0098\3\u0098\3\u0098\3"+
		"\u0099\5\u0099\u0864\n\u0099\3\u0099\3\u0099\5\u0099\u0868\n\u0099\3\u009a"+
		"\5\u009a\u086b\n\u009a\3\u009a\3\u009a\5\u009a\u086f\n\u009a\3\u009b\5"+
		"\u009b\u0872\n\u009b\3\u009b\3\u009b\5\u009b\u0876\n\u009b\3\u009c\3\u009c"+
		"\3\u009c\3\u009d\3\u009d\6\u009d\u087d\n\u009d\r\u009d\16\u009d\u087e"+
		"\3\u009d\5\u009d\u0882\n\u009d\3\u009e\3\u009e\3\u009e\3\u009e\3\u009f"+
		"\3\u009f\3\u009f\7\u009f\u088b\n\u009f\f\u009f\16\u009f\u088e\13\u009f"+
		"\3\u00a0\3\u00a0\3\u00a0\3\u00a0\5\u00a0\u0894\n\u00a0\3\u00a1\3\u00a1"+
		"\3\u00a1\3\u00a1\3\u00a1\3\u00a2\3\u00a2\3\u00a3\3\u00a3\3\u00a4\3\u00a4"+
		"\3\u00a4\3\u00a4\3\u00a4\3\u00a5\3\u00a5\3\u00a6\3\u00a6\3\u00a7\3\u00a7"+
		"\3\u00a8\3\u00a8\3\u00a9\3\u00a9\3\u00aa\3\u00aa\3\u00aa\7\u00aa\u08b1"+
		"\n\u00aa\f\u00aa\16\u00aa\u08b4\13\u00aa\3\u00ab\3\u00ab\3\u00ab\3\u00ac"+
		"\3\u00ac\3\u00ac\3\u00ac\3\u00ad\3\u00ad\3\u00ad\3\u00ae\3\u00ae\3\u00ae"+
		"\3\u00ae\7\u00ae\u08c4\n\u00ae\f\u00ae\16\u00ae\u08c7\13\u00ae\3\u00ae"+
		"\3\u00ae\3\u00af\3\u00af\5\u00af\u08cd\n\u00af\3\u00af\5\u00af\u08d0\n"+
		"\u00af\3\u00b0\3\u00b0\3\u00b0\5\u00b0\u08d5\n\u00b0\3\u00b1\3\u00b1\3"+
		"\u00b1\3\u00b1\5\u00b1\u08db\n\u00b1\3\u00b2\3\u00b2\3\u00b2\3\u00b2\3"+
		"\u00b2\3\u00b2\5\u00b2\u08e3\n\u00b2\3\u00b3\3\u00b3\3\u00b3\3\u00b3\3"+
		"\u00b3\3\u00b3\3\u00b3\3\u00b3\3\u00b3\3\u00b3\3\u00b3\3\u00b3\3\u00b3"+
		"\3\u00b3\5\u00b3\u08f3\n\u00b3\3\u00b4\3\u00b4\3\u00b4\3\u00b4\3\u00b4"+
		"\3\u00b4\3\u00b4\5\u00b4\u08fc\n\u00b4\3\u00b5\3\u00b5\3\u00b6\3\u00b6"+
		"\3\u00b7\3\u00b7\3\u00b7\3\u00b7\5\u00b7\u0906\n\u00b7\3\u00b7\3\u00b7"+
		"\3\u00b7\3\u00b7\3\u00b7\5\u00b7\u090d\n\u00b7\3\u00b7\5\u00b7\u0910\n"+
		"\u00b7\3\u00b8\3\u00b8\3\u00b8\3\u00b9\3\u00b9\3\u00ba\3\u00ba\3\u00bb"+
		"\3\u00bb\3\u00bc\3\u00bc\3\u00bd\3\u00bd\3\u00be\3\u00be\3\u00bf\3\u00bf"+
		"\3\u00c0\3\u00c0\3\u00c1\3\u00c1\3\u00c2\3\u00c2\3\u00c2\3\u08b2\7\u00a0"+
		"\u00b4\u0106\u010c\u010e\u00c3\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36"+
		" \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082"+
		"\u0084\u0086\u0088\u008a\u008c\u008e\u0090\u0092\u0094\u0096\u0098\u009a"+
		"\u009c\u009e\u00a0\u00a2\u00a4\u00a6\u00a8\u00aa\u00ac\u00ae\u00b0\u00b2"+
		"\u00b4\u00b6\u00b8\u00ba\u00bc\u00be\u00c0\u00c2\u00c4\u00c6\u00c8\u00ca"+
		"\u00cc\u00ce\u00d0\u00d2\u00d4\u00d6\u00d8\u00da\u00dc\u00de\u00e0\u00e2"+
		"\u00e4\u00e6\u00e8\u00ea\u00ec\u00ee\u00f0\u00f2\u00f4\u00f6\u00f8\u00fa"+
		"\u00fc\u00fe\u0100\u0102\u0104\u0106\u0108\u010a\u010c\u010e\u0110\u0112"+
		"\u0114\u0116\u0118\u011a\u011c\u011e\u0120\u0122\u0124\u0126\u0128\u012a"+
		"\u012c\u012e\u0130\u0132\u0134\u0136\u0138\u013a\u013c\u013e\u0140\u0142"+
		"\u0144\u0146\u0148\u014a\u014c\u014e\u0150\u0152\u0154\u0156\u0158\u015a"+
		"\u015c\u015e\u0160\u0162\u0164\u0166\u0168\u016a\u016c\u016e\u0170\u0172"+
		"\u0174\u0176\u0178\u017a\u017c\u017e\u0180\u0182\2\61\3\2\5\6\4\2!!\u00ef"+
		"\u00ef\5\2\23\23))HH\6\2\20\20\35\35EE\u00ac\u00ac\4\2\17\17\34\34\4\2"+
		"\u0101\u0101\u010c\u010c\4\2\u00ab\u00ab\u015d\u015d\4\2\7\7zz\5\2\u00c8"+
		"\u00c8\u00e6\u00e6\u0130\u0130\r\2\r\r\u0096\u0096\u009d\u009d\u00c4\u00c5"+
		"\u00d1\u00d1\u00e7\u00e7\u0111\u0112\u0154\u0154\u0160\u0160\u0165\u0165"+
		"\u0174\u0175\4\2\u0179\u0179\u017b\u017b\6\2\u00e9\u00ea\u00f1\u00f1\u00ff"+
		"\u00ff\u0131\u0131\4\2\u00bd\u00bd\u012a\u012a\4\2,,\u010d\u010d\5\2\30"+
		"\30dd\u00b7\u00b7\5\2,,bb\u010d\u010d\5\299^^\u00af\u00af\5\2FFoo\u0082"+
		"\u0082\4\2\16\16\177\177\4\2aa\u0115\u0115\5\2\u00f8\u00f8\u0113\u0113"+
		"\u016a\u016a\6\2\u0102\u0102\u010e\u010e\u011c\u011c\u0148\u0148\5\2\32"+
		"\32==\u00a1\u00a1\7\2\33\33\u008f\u0090\u0095\u0095\u009b\u009b\u0133"+
		"\u0133\4\2\u00e2\u00e2\u014b\u014b\5\2==\u008c\u008c\u00a1\u00a1\4\2\13"+
		"\13!!\4\2\61\61MM\6\2\u00fe\u00fe\u0130\u0130\u0168\u0168\u016c\u016c"+
		"\4\2\u00bf\u00bf\u0159\u0159\4\2\u00b7\u00b7\u00bb\u00bb\4\2\u0181\u0181"+
		"\u0195\u0196\6\2##\u0193\u0193\u0197\u0197\u019a\u019a\4\2\u0195\u0196"+
		"\u0198\u0198\3\2\u0195\u0196\3\2\u019e\u019f\4\2\u019e\u019e\u01a1\u01a1"+
		"\6\2##\u0193\u0193\u0195\u0197\u0199\u019a\5\2\u012f\u012f\u0180\u0181"+
		"\u0195\u0196\4\2\u00fe\u00fe\u0168\u0168\4\2\u00b7\u00b7\u00f0\u00f0\f"+
		"\2RRTTvv\u00b0\u00b0\u00e8\u00e8\u010a\u010a\u0126\u0126\u0129\u0129\u014e"+
		"\u014e\u017c\u017c\22\2\21\21\36\37\'\'>>RUYZvv\u0086\u0086\u00b0\u00b1"+
		"\u00b4\u00b4\u00e8\u00e8\u010a\u010a\u0126\u0126\u0129\u0129\u014e\u014e"+
		"\u017c\u017c\b\2\u00b7\u00b7\u00c9\u00c9\u00f0\u00f0\u011b\u011b\u0167"+
		"\u0167\u0193\u0193\36\2??QQvv\u00b0\u00b0\u00b6\u00b6\u00bd\u00bd\u00c1"+
		"\u00c1\u00cf\u00d0\u00d6\u00d6\u00d8\u00d8\u00df\u00df\u00e6\u00e6\u0107"+
		"\u0107\u010a\u010a\u0118\u0118\u011c\u011c\u0126\u0126\u0129\u0129\u013b"+
		"\u013b\u0141\u0142\u0145\u0145\u0148\u0148\u014e\u014e\u0157\u0158\u0160"+
		"\u0164\u0169\u0169\u016e\u016e\u017c\u017c\7\2\u00b6\u00f6\u00f8\u0141"+
		"\u0143\u0158\u015a\u0166\u0168\u017c\6\2\7&(-/\u00b0\u00b2\u00b5\2\u09f2"+
		"\2\u0184\3\2\2\2\4\u0187\3\2\2\2\6\u018f\3\2\2\2\b\u0192\3\2\2\2\n\u01b5"+
		"\3\2\2\2\f\u01b7\3\2\2\2\16\u01c7\3\2\2\2\20\u01cb\3\2\2\2\22\u01cd\3"+
		"\2\2\2\24\u01d0\3\2\2\2\26\u01db\3\2\2\2\30\u01e3\3\2\2\2\32\u01eb\3\2"+
		"\2\2\34\u01ed\3\2\2\2\36\u021a\3\2\2\2 \u021c\3\2\2\2\"\u0223\3\2\2\2"+
		"$\u0227\3\2\2\2&\u022b\3\2\2\2(\u022f\3\2\2\2*\u0234\3\2\2\2,\u023a\3"+
		"\2\2\2.\u023c\3\2\2\2\60\u0265\3\2\2\2\62\u0273\3\2\2\2\64\u0275\3\2\2"+
		"\2\66\u027f\3\2\2\28\u0281\3\2\2\2:\u02d5\3\2\2\2<\u02d7\3\2\2\2>\u02db"+
		"\3\2\2\2@\u02e3\3\2\2\2B\u02eb\3\2\2\2D\u02f6\3\2\2\2F\u02fd\3\2\2\2H"+
		"\u0319\3\2\2\2J\u031b\3\2\2\2L\u031e\3\2\2\2N\u0328\3\2\2\2P\u032a\3\2"+
		"\2\2R\u0330\3\2\2\2T\u0332\3\2\2\2V\u033a\3\2\2\2X\u0342\3\2\2\2Z\u0344"+
		"\3\2\2\2\\\u0348\3\2\2\2^\u034c\3\2\2\2`\u0364\3\2\2\2b\u0368\3\2\2\2"+
		"d\u036a\3\2\2\2f\u037a\3\2\2\2h\u037c\3\2\2\2j\u0381\3\2\2\2l\u038d\3"+
		"\2\2\2n\u039f\3\2\2\2p\u03b3\3\2\2\2r\u03be\3\2\2\2t\u03c0\3\2\2\2v\u03cd"+
		"\3\2\2\2x\u03d4\3\2\2\2z\u03d7\3\2\2\2|\u03e0\3\2\2\2~\u03e4\3\2\2\2\u0080"+
		"\u03e8\3\2\2\2\u0082\u03eb\3\2\2\2\u0084\u03f3\3\2\2\2\u0086\u03f8\3\2"+
		"\2\2\u0088\u0409\3\2\2\2\u008a\u0410\3\2\2\2\u008c\u041a\3\2\2\2\u008e"+
		"\u0423\3\2\2\2\u0090\u042d\3\2\2\2\u0092\u0440\3\2\2\2\u0094\u0442\3\2"+
		"\2\2\u0096\u044f\3\2\2\2\u0098\u0452\3\2\2\2\u009a\u045b\3\2\2\2\u009c"+
		"\u0466\3\2\2\2\u009e\u0473\3\2\2\2\u00a0\u0496\3\2\2\2\u00a2\u04a9\3\2"+
		"\2\2\u00a4\u04b2\3\2\2\2\u00a6\u04bb\3\2\2\2\u00a8\u04ce\3\2\2\2\u00aa"+
		"\u04e2\3\2\2\2\u00ac\u04e4\3\2\2\2\u00ae\u04fb\3\2\2\2\u00b0\u0509\3\2"+
		"\2\2\u00b2\u050b\3\2\2\2\u00b4\u0519\3\2\2\2\u00b6\u0549\3\2\2\2\u00b8"+
		"\u0592\3\2\2\2\u00ba\u0594\3\2\2\2\u00bc\u059a\3\2\2\2\u00be\u059c\3\2"+
		"\2\2\u00c0\u05a1\3\2\2\2\u00c2\u05a6\3\2\2\2\u00c4\u05b2\3\2\2\2\u00c6"+
		"\u05c3\3\2\2\2\u00c8\u05c5\3\2\2\2\u00ca\u05c7\3\2\2\2\u00cc\u05da\3\2"+
		"\2\2\u00ce\u05dc\3\2\2\2\u00d0\u05df\3\2\2\2\u00d2\u0610\3\2\2\2\u00d4"+
		"\u0612\3\2\2\2\u00d6\u0615\3\2\2\2\u00d8\u0617\3\2\2\2\u00da\u061e\3\2"+
		"\2\2\u00dc\u0620\3\2\2\2\u00de\u0622\3\2\2\2\u00e0\u0625\3\2\2\2\u00e2"+
		"\u062e\3\2\2\2\u00e4\u0633\3\2\2\2\u00e6\u0641\3\2\2\2\u00e8\u065d\3\2"+
		"\2\2\u00ea\u0667\3\2\2\2\u00ec\u066f\3\2\2\2\u00ee\u0674\3\2\2\2\u00f0"+
		"\u068e\3\2\2\2\u00f2\u0690\3\2\2\2\u00f4\u0699\3\2\2\2\u00f6\u06a4\3\2"+
		"\2\2\u00f8\u06b0\3\2\2\2\u00fa\u06ca\3\2\2\2\u00fc\u06cc\3\2\2\2\u00fe"+
		"\u06de\3\2\2\2\u0100\u06e0\3\2\2\2\u0102\u06e5\3\2\2\2\u0104\u06e8\3\2"+
		"\2\2\u0106\u06f6\3\2\2\2\u0108\u074c\3\2\2\2\u010a\u076b\3\2\2\2\u010c"+
		"\u0771\3\2\2\2\u010e\u07fa\3\2\2\2\u0110\u0809\3\2\2\2\u0112\u080b\3\2"+
		"\2\2\u0114\u0817\3\2\2\2\u0116\u0823\3\2\2\2\u0118\u082c\3\2\2\2\u011a"+
		"\u0831\3\2\2\2\u011c\u0838\3\2\2\2\u011e\u083a\3\2\2\2\u0120\u0840\3\2"+
		"\2\2\u0122\u0842\3\2\2\2\u0124\u0846\3\2\2\2\u0126\u0848\3\2\2\2\u0128"+
		"\u084d\3\2\2\2\u012a\u0854\3\2\2\2\u012c\u0858\3\2\2\2\u012e\u085d\3\2"+
		"\2\2\u0130\u0867\3\2\2\2\u0132\u086a\3\2\2\2\u0134\u0871\3\2\2\2\u0136"+
		"\u0877\3\2\2\2\u0138\u0881\3\2\2\2\u013a\u0883\3\2\2\2\u013c\u0887\3\2"+
		"\2\2\u013e\u0893\3\2\2\2\u0140\u0895\3\2\2\2\u0142\u089a\3\2\2\2\u0144"+
		"\u089c\3\2\2\2\u0146\u089e\3\2\2\2\u0148\u08a3\3\2\2\2\u014a\u08a5\3\2"+
		"\2\2\u014c\u08a7\3\2\2\2\u014e\u08a9\3\2\2\2\u0150\u08ab\3\2\2\2\u0152"+
		"\u08ad\3\2\2\2\u0154\u08b5\3\2\2\2\u0156\u08b8\3\2\2\2\u0158\u08bc\3\2"+
		"\2\2\u015a\u08bf\3\2\2\2\u015c\u08ca\3\2\2\2\u015e\u08d4\3\2\2\2\u0160"+
		"\u08da\3\2\2\2\u0162\u08e2\3\2\2\2\u0164\u08f2\3\2\2\2\u0166\u08fb\3\2"+
		"\2\2\u0168\u08fd\3\2\2\2\u016a\u08ff\3\2\2\2\u016c\u090f\3\2\2\2\u016e"+
		"\u0911\3\2\2\2\u0170\u0914\3\2\2\2\u0172\u0916\3\2\2\2\u0174\u0918\3\2"+
		"\2\2\u0176\u091a\3\2\2\2\u0178\u091c\3\2\2\2\u017a\u091e\3\2\2\2\u017c"+
		"\u0920\3\2\2\2\u017e\u0922\3\2\2\2\u0180\u0924\3\2\2\2\u0182\u0926\3\2"+
		"\2\2\u0184\u0185\5\4\3\2\u0185\u0186\7\2\2\3\u0186\3\3\2\2\2\u0187\u0188"+
		"\5\6\4\2\u0188\u0189\7\2\2\3\u0189\5\3\2\2\2\u018a\u018e\5\b\5\2\u018b"+
		"\u018e\5\n\6\2\u018c\u018e\5\f\7\2\u018d\u018a\3\2\2\2\u018d\u018b\3\2"+
		"\2\2\u018d\u018c\3\2\2\2\u018e\u0191\3\2\2\2\u018f\u018d\3\2\2\2\u018f"+
		"\u0190\3\2\2\2\u0190\7\3\2\2\2\u0191\u018f\3\2\2\2\u0192\u0193\t\2\2\2"+
		"\u0193\t\3\2\2\2\u0194\u0195\5\16\b\2\u0195\u0196\7\u018d\2\2\u0196\u01b6"+
		"\3\2\2\2\u0197\u0198\5\20\t\2\u0198\u0199\7\u018d\2\2\u0199\u01b6\3\2"+
		"\2\2\u019a\u019b\5\22\n\2\u019b\u019c\7\u018d\2\2\u019c\u01b6\3\2\2\2"+
		"\u019d\u019e\5\24\13\2\u019e\u019f\7\u018d\2\2\u019f\u01b6\3\2\2\2\u01a0"+
		"\u01a1\5\32\16\2\u01a1\u01a2\7\u018d\2\2\u01a2\u01b6\3\2\2\2\u01a3\u01a4"+
		"\5\36\20\2\u01a4\u01a5\7\u018d\2\2\u01a5\u01b6\3\2\2\2\u01a6\u01a7\5 "+
		"\21\2\u01a7\u01a8\7\u018d\2\2\u01a8\u01b6\3\2\2\2\u01a9\u01aa\5\"\22\2"+
		"\u01aa\u01ab\7\u018d\2\2\u01ab\u01b6\3\2\2\2\u01ac\u01ad\5$\23\2\u01ad"+
		"\u01ae\7\u018d\2\2\u01ae\u01b6\3\2\2\2\u01af\u01b0\5&\24\2\u01b0\u01b1"+
		"\7\u018d\2\2\u01b1\u01b6\3\2\2\2\u01b2\u01b3\5(\25\2\u01b3\u01b4\7\u018d"+
		"\2\2\u01b4\u01b6\3\2\2\2\u01b5\u0194\3\2\2\2\u01b5\u0197\3\2\2\2\u01b5"+
		"\u019a\3\2\2\2\u01b5\u019d\3\2\2\2\u01b5\u01a0\3\2\2\2\u01b5\u01a3\3\2"+
		"\2\2\u01b5\u01a6\3\2\2\2\u01b5\u01a9\3\2\2\2\u01b5\u01ac\3\2\2\2\u01b5"+
		"\u01af\3\2\2\2\u01b5\u01b2\3\2\2\2\u01b6\13\3\2\2\2\u01b7\u01b8\7\u018d"+
		"\2\2\u01b8\r\3\2\2\2\u01b9\u01c8\5,\27\2\u01ba\u01c8\5j\66\2\u01bb\u01c8"+
		"\5l\67\2\u01bc\u01c8\5n8\2\u01bd\u01c8\5h\65\2\u01be\u01c8\5t;\2\u01bf"+
		"\u01c8\5\u0082B\2\u01c0\u01c8\5\u0084C\2\u01c1\u01c8\5\u0086D\2\u01c2"+
		"\u01c8\5\u0088E\2\u01c3\u01c8\5\u008aF\2\u01c4\u01c8\5\u008cG\2\u01c5"+
		"\u01c8\5\u008eH\2\u01c6\u01c8\5\u0090I\2\u01c7\u01b9\3\2\2\2\u01c7\u01ba"+
		"\3\2\2\2\u01c7\u01bb\3\2\2\2\u01c7\u01bc\3\2\2\2\u01c7\u01bd\3\2\2\2\u01c7"+
		"\u01be\3\2\2\2\u01c7\u01bf\3\2\2\2\u01c7\u01c0\3\2\2\2\u01c7\u01c1\3\2"+
		"\2\2\u01c7\u01c2\3\2\2\2\u01c7\u01c3\3\2\2\2\u01c7\u01c4\3\2\2\2\u01c7"+
		"\u01c5\3\2\2\2\u01c7\u01c6\3\2\2\2\u01c8\17\3\2\2\2\u01c9\u01cc\5\u00a0"+
		"Q\2\u01ca\u01cc\5\u0092J\2\u01cb\u01c9\3\2\2\2\u01cb\u01ca\3\2\2\2\u01cc"+
		"\21\3\2\2\2\u01cd\u01ce\t\3\2\2\u01ce\u01cf\5\u0150\u00a9\2\u01cf\23\3"+
		"\2\2\2\u01d0\u01d4\7\u00fb\2\2\u01d1\u01d5\5\26\f\2\u01d2\u01d3\7i\2\2"+
		"\u01d3\u01d5\7\u0100\2\2\u01d4\u01d1\3\2\2\2\u01d4\u01d2\3\2\2\2\u01d4"+
		"\u01d5\3\2\2\2\u01d5\u01d9\3\2\2\2\u01d6\u01da\5\20\t\2\u01d7\u01da\5"+
		"\u0094K\2\u01d8\u01da\5\u009eP\2\u01d9\u01d6\3\2\2\2\u01d9\u01d7\3\2\2"+
		"\2\u01d9\u01d8\3\2\2\2\u01da\25\3\2\2\2\u01db\u01e0\5\30\r\2\u01dc\u01dd"+
		"\7\u018c\2\2\u01dd\u01df\5\30\r\2\u01de\u01dc\3\2\2\2\u01df\u01e2\3\2"+
		"\2\2\u01e0\u01de\3\2\2\2\u01e0\u01e1\3\2\2\2\u01e1\27\3\2\2\2\u01e2\u01e0"+
		"\3\2\2\2\u01e3\u01e4\t\4\2\2\u01e4\31\3\2\2\2\u01e5\u01e6\7\u00a6\2\2"+
		"\u01e6\u01e7\7\17\2\2\u01e7\u01ec\5\u0148\u00a5\2\u01e8\u01e9\7\u00a6"+
		"\2\2\u01e9\u01ec\5\u014a\u00a6\2\u01ea\u01ec\5\34\17\2\u01eb\u01e5\3\2"+
		"\2\2\u01eb\u01e8\3\2\2\2\u01eb\u01ea\3\2\2\2\u01ec\33\3\2\2\2\u01ed\u01ee"+
		"\7\u00a6\2\2\u01ee\u01ef\7X\2\2\u01ef\u01f4\5\u0152\u00aa\2\u01f0\u01f1"+
		"\7\u018c\2\2\u01f1\u01f3\5\u0152\u00aa\2\u01f2\u01f0\3\2\2\2\u01f3\u01f6"+
		"\3\2\2\2\u01f4\u01f2\3\2\2\2\u01f4\u01f5\3\2\2\2\u01f5\35\3\2\2\2\u01f6"+
		"\u01f4\3\2\2\2\u01f7\u01f8\7\u0151\2\2\u01f8\u021b\t\5\2\2\u01f9\u01fa"+
		"\7\u0151\2\2\u01fa\u01fb\7\u00e3\2\2\u01fb\u021b\t\6\2\2\u01fc\u01fd\7"+
		"\u0151\2\2\u01fd\u0200\7\u0099\2\2\u01fe\u01ff\t\7\2\2\u01ff\u0201\5\u0150"+
		"\u00a9\2\u0200\u01fe\3\2\2\2\u0200\u0201\3\2\2\2\u0201\u0203\3\2\2\2\u0202"+
		"\u0204\5\u010a\u0086\2\u0203\u0202\3\2\2\2\u0203\u0204\3\2\2\2\u0204\u021b"+
		"\3\2\2\2\u0205\u0206\7\u0151\2\2\u0206\u0207\7\27\2\2\u0207\u0208\t\7"+
		"\2\2\u0208\u020a\5\u0152\u00aa\2\u0209\u020b\5\u010a\u0086\2\u020a\u0209"+
		"\3\2\2\2\u020a\u020b\3\2\2\2\u020b\u021b\3\2\2\2\u020c\u020d\7\u0151\2"+
		"\2\u020d\u020e\7\u00e0\2\2\u020e\u020f\t\b\2\2\u020f\u021b\5\u0152\u00aa"+
		"\2\u0210\u0212\7\u0151\2\2\u0211\u0213\7\u0170\2\2\u0212\u0211\3\2\2\2"+
		"\u0212\u0213\3\2\2\2\u0213\u0214\3\2\2\2\u0214\u021b\7\67\2\2\u0215\u0217"+
		"\7\u0151\2\2\u0216\u0218\7\u0102\2\2\u0217\u0216\3\2\2\2\u0217\u0218\3"+
		"\2\2\2\u0218\u0219\3\2\2\2\u0219\u021b\7X\2\2\u021a\u01f7\3\2\2\2\u021a"+
		"\u01f9\3\2\2\2\u021a\u01fc\3\2\2\2\u021a\u0205\3\2\2\2\u021a\u020c\3\2"+
		"\2\2\u021a\u0210\3\2\2\2\u021a\u0215\3\2\2\2\u021b\37\3\2\2\2\u021c\u021d"+
		"\7P\2\2\u021d\u021e\7\u0128\2\2\u021e\u0221\5\u0152\u00aa\2\u021f\u0220"+
		"\7\u0179\2\2\u0220\u0222\5\u015a\u00ae\2\u0221\u021f\3\2\2\2\u0221\u0222"+
		"\3\2\2\2\u0222!\3\2\2\2\u0223\u0224\7\u00a4\2\2\u0224\u0225\7\u0128\2"+
		"\2\u0225\u0226\5\u0152\u00aa\2\u0226#\3\2\2\2\u0227\u0229\7\u0150\2\2"+
		"\u0228\u022a\5\u015c\u00af\2\u0229\u0228\3\2\2\2\u0229\u022a\3\2\2\2\u022a"+
		"%\3\2\2\2\u022b\u022d\7\u0146\2\2\u022c\u022e\5\u015e\u00b0\2\u022d\u022c"+
		"\3\2\2\2\u022d\u022e\3\2\2\2\u022e\'\3\2\2\2\u022f\u0230\t\t\2\2\u0230"+
		"\u0231\7D\2\2\u0231\u0232\5r:\2\u0232)\3\2\2\2\u0233\u0235\7\u01a2\2\2"+
		"\u0234\u0233\3\2\2\2\u0235\u0236\3\2\2\2\u0236\u0234\3\2\2\2\u0236\u0237"+
		"\3\2\2\2\u0237+\3\2\2\2\u0238\u023b\5.\30\2\u0239\u023b\5\60\31\2\u023a"+
		"\u0238\3\2\2\2\u023a\u0239\3\2\2\2\u023b-\3\2\2\2\u023c\u023e\7\u00e0"+
		"\2\2\u023d\u023f\7\u009a\2\2\u023e\u023d\3\2\2\2\u023e\u023f\3\2\2\2\u023f"+
		"\u0240\3\2\2\2\u0240\u0242\7\u015d\2\2\u0241\u0243\5\u0156\u00ac\2\u0242"+
		"\u0241\3\2\2\2\u0242\u0243\3\2\2\2\u0243\u0244\3\2\2\2\u0244\u0245\5\u014e"+
		"\u00a8\2\u0245\u0246\7\u0188\2\2\u0246\u024b\5\62\32\2\u0247\u0248\7\u018c"+
		"\2\2\u0248\u024a\5\62\32\2\u0249\u0247\3\2\2\2\u024a\u024d\3\2\2\2\u024b"+
		"\u0249\3\2\2\2\u024b\u024c\3\2\2\2\u024c\u0250\3\2\2\2\u024d\u024b\3\2"+
		"\2\2\u024e\u024f\7\u018c\2\2\u024f\u0251\5T+\2\u0250\u024e\3\2\2\2\u0250"+
		"\u0251\3\2\2\2\u0251\u0254\3\2\2\2\u0252\u0253\7\u018c\2\2\u0253\u0255"+
		"\5V,\2\u0254\u0252\3\2\2\2\u0254\u0255\3\2\2\2\u0255\u0258\3\2\2\2\u0256"+
		"\u0257\7\u018c\2\2\u0257\u0259\5Z.\2\u0258\u0256\3\2\2\2\u0258\u0259\3"+
		"\2\2\2\u0259\u025a\3\2\2\2\u025a\u025c\7\u0189\2\2\u025b\u025d\5J&\2\u025c"+
		"\u025b\3\2\2\2\u025c\u025d\3\2\2\2\u025d\u025f\3\2\2\2\u025e\u0260\5\\"+
		"/\2\u025f\u025e\3\2\2\2\u025f\u0260\3\2\2\2\u0260\u0261\3\2\2\2\u0261"+
		"\u0263\5\u0154\u00ab\2\u0262\u0264\5d\63\2\u0263\u0262\3\2\2\2\u0263\u0264"+
		"\3\2\2\2\u0264/\3\2\2\2\u0265\u0266\7\u00e0\2\2\u0266\u0268\7\u015d\2"+
		"\2\u0267\u0269\5\u0156\u00ac\2\u0268\u0267\3\2\2\2\u0268\u0269\3\2\2\2"+
		"\u0269\u026a\3\2\2\2\u026a\u026b\5\u014e\u00a8\2\u026b\u026e\5\u0154\u00ab"+
		"\2\u026c\u026d\7\u00be\2\2\u026d\u026f\5\u00a0Q\2\u026e\u026c\3\2\2\2"+
		"\u026e\u026f\3\2\2\2\u026f\61\3\2\2\2\u0270\u0274\5\64\33\2\u0271\u0274"+
		"\5L\'\2\u0272\u0274\5P)\2\u0273\u0270\3\2\2\2\u0273\u0271\3\2\2\2\u0273"+
		"\u0272\3\2\2\2\u0274\63\3\2\2\2\u0275\u0276\5\66\34\2\u0276\u0278\5:\36"+
		"\2\u0277\u0279\5H%\2\u0278\u0277\3\2\2\2\u0278\u0279\3\2\2\2\u0279\u027b"+
		"\3\2\2\2\u027a\u027c\5J&\2\u027b\u027a\3\2\2\2\u027b\u027c\3\2\2\2\u027c"+
		"\65\3\2\2\2\u027d\u0280\5\u0152\u00aa\2\u027e\u0280\5\u0104\u0083\2\u027f"+
		"\u027d\3\2\2\2\u027f\u027e\3\2\2\2\u0280\67\3\2\2\2\u0281\u0282\7\u0188"+
		"\2\2\u0282\u0287\5\66\34\2\u0283\u0284\7\u018c\2\2\u0284\u0286\5\66\34"+
		"\2\u0285\u0283\3\2\2\2\u0286\u0289\3\2\2\2\u0287\u0285\3\2\2\2\u0287\u0288"+
		"\3\2\2\2\u0288\u028a\3\2\2\2\u0289\u0287\3\2\2\2\u028a\u028b\7\u0189\2"+
		"\2\u028b9\3\2\2\2\u028c\u02d6\t\n\2\2\u028d\u028f\t\13\2\2\u028e\u0290"+
		"\5<\37\2\u028f\u028e\3\2\2\2\u028f\u0290\3\2\2\2\u0290\u02d6\3\2\2\2\u0291"+
		"\u0293\7\u0161\2\2\u0292\u0294\5<\37\2\u0293\u0292\3\2\2\2\u0293\u0294"+
		"\3\2\2\2\u0294\u029b\3\2\2\2\u0295\u0297\t\f\2\2\u0296\u0298\7\u011f\2"+
		"\2\u0297\u0296\3\2\2\2\u0297\u0298\3\2\2\2\u0298\u0299\3\2\2\2\u0299\u029a"+
		"\7\u0160\2\2\u029a\u029c\7\u00b5\2\2\u029b\u0295\3\2\2\2\u029b\u029c\3"+
		"\2\2\2\u029c\u02d6\3\2\2\2\u029d\u029f\7\u0162\2\2\u029e\u02a0\5<\37\2"+
		"\u029f\u029e\3\2\2\2\u029f\u02a0\3\2\2\2\u02a0\u02a7\3\2\2\2\u02a1\u02a3"+
		"\t\f\2\2\u02a2\u02a4\7\u011f\2\2\u02a3\u02a2\3\2\2\2\u02a3\u02a4\3\2\2"+
		"\2\u02a4\u02a5\3\2\2\2\u02a5\u02a6\7\u0160\2\2\u02a6\u02a8\7\u00b5\2\2"+
		"\u02a7\u02a1\3\2\2\2\u02a7\u02a8\3\2\2\2\u02a8\u02d6\3\2\2\2\u02a9\u02ab"+
		"\7\u0163\2\2\u02aa\u02ac\5<\37\2\u02ab\u02aa\3\2\2\2\u02ab\u02ac\3\2\2"+
		"\2\u02ac\u02b3\3\2\2\2\u02ad\u02af\t\f\2\2\u02ae\u02b0\7\u011f\2\2\u02af"+
		"\u02ae\3\2\2\2\u02af\u02b0\3\2\2\2\u02b0\u02b1\3\2\2\2\u02b1\u02b2\7\u0160"+
		"\2\2\u02b2\u02b4\7\u00b5\2\2\u02b3\u02ad\3\2\2\2\u02b3\u02b4\3\2\2\2\u02b4"+
		"\u02d6\3\2\2\2\u02b5\u02b7\7\u0164\2\2\u02b6\u02b8\5<\37\2\u02b7\u02b6"+
		"\3\2\2\2\u02b7\u02b8\3\2\2\2\u02b8\u02bf\3\2\2\2\u02b9\u02bb\t\f\2\2\u02ba"+
		"\u02bc\7\u011f\2\2\u02bb\u02ba\3\2\2\2\u02bb\u02bc\3\2\2\2\u02bc\u02bd"+
		"\3\2\2\2\u02bd\u02be\7\u0160\2\2\u02be\u02c0\7\u00b5\2\2\u02bf\u02b9\3"+
		"\2\2\2\u02bf\u02c0\3\2\2\2\u02c0\u02d6\3\2\2\2\u02c1\u02c3\t\r\2\2\u02c2"+
		"\u02c4\5> \2\u02c3\u02c2\3\2\2\2\u02c3\u02c4\3\2\2\2\u02c4\u02d6\3\2\2"+
		"\2\u02c5\u02c7\t\16\2\2\u02c6\u02c8\5B\"\2\u02c7\u02c6\3\2\2\2\u02c7\u02c8"+
		"\3\2\2\2\u02c8\u02d6\3\2\2\2\u02c9\u02cb\7Q\2\2\u02ca\u02cc\5D#\2\u02cb"+
		"\u02ca\3\2\2\2\u02cb\u02cc\3\2\2\2\u02cc\u02d6\3\2\2\2\u02cd\u02cf\7\u014c"+
		"\2\2\u02ce\u02d0\5F$\2\u02cf\u02ce\3\2\2\2\u02cf\u02d0\3\2\2\2\u02d0\u02d6"+
		"\3\2\2\2\u02d1\u02d3\7w\2\2\u02d2\u02d4\5@!\2\u02d3\u02d2\3\2\2\2\u02d3"+
		"\u02d4\3\2\2\2\u02d4\u02d6\3\2\2\2\u02d5\u028c\3\2\2\2\u02d5\u028d\3\2"+
		"\2\2\u02d5\u0291\3\2\2\2\u02d5\u029d\3\2\2\2\u02d5\u02a9\3\2\2\2\u02d5"+
		"\u02b5\3\2\2\2\u02d5\u02c1\3\2\2\2\u02d5\u02c5\3\2\2\2\u02d5\u02c9\3\2"+
		"\2\2\u02d5\u02cd\3\2\2\2\u02d5\u02d1\3\2\2\2\u02d6;\3\2\2\2\u02d7\u02d8"+
		"\7\u0188\2\2\u02d8\u02d9\5\u0172\u00ba\2\u02d9\u02da\7\u0189\2\2\u02da"+
		"=\3\2\2\2\u02db\u02dc\7\u0188\2\2\u02dc\u02df\5\u0172\u00ba\2\u02dd\u02de"+
		"\7\u018c\2\2\u02de\u02e0\5\u0172\u00ba\2\u02df\u02dd\3\2\2\2\u02df\u02e0"+
		"\3\2\2\2\u02e0\u02e1\3\2\2\2\u02e1\u02e2\7\u0189\2\2\u02e2?\3\2\2\2\u02e3"+
		"\u02e4\7\u0188\2\2\u02e4\u02e7\5\u0170\u00b9\2\u02e5\u02e6\7\u018c\2\2"+
		"\u02e6\u02e8\5\u0170\u00b9\2\u02e7\u02e5\3\2\2\2\u02e7\u02e8\3\2\2\2\u02e8"+
		"\u02e9\3\2\2\2\u02e9\u02ea\7\u0189\2\2\u02eaA\3\2\2\2\u02eb\u02ec\7\u017f"+
		"\2\2\u02ec\u02f1\5:\36\2\u02ed\u02ee\7\u018c\2\2\u02ee\u02f0\5:\36\2\u02ef"+
		"\u02ed\3\2\2\2\u02f0\u02f3\3\2\2\2\u02f1\u02ef\3\2\2\2\u02f1\u02f2\3\2"+
		"\2\2\u02f2\u02f4\3\2\2\2\u02f3\u02f1\3\2\2\2\u02f4\u02f5\7\u017e\2\2\u02f5"+
		"C\3\2\2\2\u02f6\u02f7\7\u017f\2\2\u02f7\u02f8\5:\36\2\u02f8\u02f9\7\u018c"+
		"\2\2\u02f9\u02fa\5:\36\2\u02fa\u02fb\3\2\2\2\u02fb\u02fc\7\u017e\2\2\u02fc"+
		"E\3\2\2\2\u02fd\u02fe\7\u017f\2\2\u02fe\u02ff\5\66\34\2\u02ff\u0306\5"+
		":\36\2\u0300\u0301\7\u018c\2\2\u0301\u0302\5\66\34\2\u0302\u0303\5:\36"+
		"\2\u0303\u0305\3\2\2\2\u0304\u0300\3\2\2\2\u0305\u0308\3\2\2\2\u0306\u0304"+
		"\3\2\2\2\u0306\u0307\3\2\2\2\u0307\u0309\3\2\2\2\u0308\u0306\3\2\2\2\u0309"+
		"\u030a\7\u017e\2\2\u030aG\3\2\2\2\u030b\u030c\7\u00dc\2\2\u030c\u030e"+
		"\5X-\2\u030d\u030b\3\2\2\2\u030d\u030e\3\2\2\2\u030e\u030f\3\2\2\2\u030f"+
		"\u0310\7\u0143\2\2\u0310\u0313\7I\2\2\u0311\u0312\7\u012f\2\2\u0312\u0314"+
		"\7%\2\2\u0313\u0311\3\2\2\2\u0313\u0314\3\2\2\2\u0314\u031a\3\2\2\2\u0315"+
		"\u0317\7\u012f\2\2\u0316\u0315\3\2\2\2\u0316\u0317\3\2\2\2\u0317\u0318"+
		"\3\2\2\2\u0318\u031a\7\u0130\2\2\u0319\u030d\3\2\2\2\u0319\u0316\3\2\2"+
		"\2\u031aI\3\2\2\2\u031b\u031c\7\25\2\2\u031c\u031d\7\u019d\2\2\u031dK"+
		"\3\2\2\2\u031e\u031f\5\66\34\2\u031f\u0320\5:\36\2\u0320\u0323\7\u0124"+
		"\2\2\u0321\u0322\7\u0101\2\2\u0322\u0324\5N(\2\u0323\u0321\3\2\2\2\u0323"+
		"\u0324\3\2\2\2\u0324\u0326\3\2\2\2\u0325\u0327\7\u00ad\2\2\u0326\u0325"+
		"\3\2\2\2\u0326\u0327\3\2\2\2\u0327M\3\2\2\2\u0328\u0329\7\u019d\2\2\u0329"+
		"O\3\2\2\2\u032a\u032b\5\66\34\2\u032b\u032c\7\u00be\2\2\u032c\u032e\5"+
		"R*\2\u032d\u032f\5J&\2\u032e\u032d\3\2\2\2\u032e\u032f\3\2\2\2\u032fQ"+
		"\3\2\2\2\u0330\u0331\5\u0104\u0083\2\u0331S\3\2\2\2\u0332\u0333\7\u00ae"+
		"\2\2\u0333\u0334\7\u0100\2\2\u0334\u0335\5\u0104\u0083\2\u0335\u0336\7"+
		"\u00be\2\2\u0336\u0337\5\u0104\u0083\2\u0337U\3\2\2\2\u0338\u0339\7\u00dc"+
		"\2\2\u0339\u033b\5X-\2\u033a\u0338\3\2\2\2\u033a\u033b\3\2\2\2\u033b\u033c"+
		"\3\2\2\2\u033c\u033d\7\u0143\2\2\u033d\u033e\7I\2\2\u033e\u033f\58\35"+
		"\2\u033f\u0340\7\u012f\2\2\u0340\u0341\7%\2\2\u0341W\3\2\2\2\u0342\u0343"+
		"\5\u013e\u00a0\2\u0343Y\3\2\2\2\u0344\u0345\7\u0140\2\2\u0345\u0346\7"+
		"\u0100\2\2\u0346\u0347\7\u015b\2\2\u0347[\3\2\2\2\u0348\u0349\7c\2\2\u0349"+
		"\u034a\7\u00ca\2\2\u034a\u034b\5^\60\2\u034b]\3\2\2\2\u034c\u034d\7\u0188"+
		"\2\2\u034d\u0352\5`\61\2\u034e\u034f\7\u018c\2\2\u034f\u0351\5`\61\2\u0350"+
		"\u034e\3\2\2\2\u0351\u0354\3\2\2\2\u0352\u0350\3\2\2\2\u0352\u0353\3\2"+
		"\2\2\u0353\u0355\3\2\2\2\u0354\u0352\3\2\2\2\u0355\u0356\7\u0189\2\2\u0356"+
		"_\3\2\2\2\u0357\u0365\5\u0124\u0093\2\u0358\u0359\5\u013e\u00a0\2\u0359"+
		"\u035a\7\u0188\2\2\u035a\u035f\5b\62\2\u035b\u035c\7\u018c\2\2\u035c\u035e"+
		"\5b\62\2\u035d\u035b\3\2\2\2\u035e\u0361\3\2\2\2\u035f\u035d\3\2\2\2\u035f"+
		"\u0360\3\2\2\2\u0360\u0362\3\2\2\2\u0361\u035f\3\2\2\2\u0362\u0363\7\u0189"+
		"\2\2\u0363\u0365\3\2\2\2\u0364\u0357\3\2\2\2\u0364\u0358\3\2\2\2\u0365"+
		"a\3\2\2\2\u0366\u0369\5\u0124\u0093\2\u0367\u0369\5\u016c\u00b7\2\u0368"+
		"\u0366\3\2\2\2\u0368\u0367\3\2\2\2\u0369c\3\2\2\2\u036a\u036b\7\u011d"+
		"\2\2\u036b\u0374\5\u0150\u00a9\2\u036c\u0370\7\u0188\2\2\u036d\u036f\5"+
		"f\64\2\u036e\u036d\3\2\2\2\u036f\u0372\3\2\2\2\u0370\u036e\3\2\2\2\u0370"+
		"\u0371\3\2\2\2\u0371\u0373\3\2\2\2\u0372\u0370\3\2\2\2\u0373\u0375\7\u0189"+
		"\2\2\u0374\u036c\3\2\2\2\u0374\u0375\3\2\2\2\u0375e\3\2\2\2\u0376\u0377"+
		"\t\17\2\2\u0377\u037b\t\20\2\2\u0378\u0379\t\21\2\2\u0379\u037b\t\22\2"+
		"\2\u037a\u0376\3\2\2\2\u037a\u0378\3\2\2\2\u037bg\3\2\2\2\u037c\u037d"+
		"\7\u00e0\2\2\u037d\u037e\7\17\2\2\u037e\u037f\5\u0152\u00aa\2\u037f\u0380"+
		"\5\u0154\u00ab\2\u0380i\3\2\2\2\u0381\u0382\7\u00e0\2\2\u0382\u0384\7"+
		"\34\2\2\u0383\u0385\5\u0156\u00ac\2\u0384\u0383\3\2\2\2\u0384\u0385\3"+
		"\2\2\2\u0385\u0386\3\2\2\2\u0386\u0388\5\u014c\u00a7\2\u0387\u0389\5J"+
		"&\2\u0388\u0387\3\2\2\2\u0388\u0389\3\2\2\2\u0389\u038b\3\2\2\2\u038a"+
		"\u038c\5\u0154\u00ab\2\u038b\u038a\3\2\2\2\u038b\u038c\3\2\2\2\u038ck"+
		"\3\2\2\2\u038d\u038f\7\u00e0\2\2\u038e\u0390\7\u009a\2\2\u038f\u038e\3"+
		"\2\2\2\u038f\u0390\3\2\2\2\u0390\u0391\3\2\2\2\u0391\u0393\7\u00ab\2\2"+
		"\u0392\u0394\5\u0156\u00ac\2\u0393\u0392\3\2\2\2\u0393\u0394\3\2\2\2\u0394"+
		"\u0395\3\2\2\2\u0395\u0397\5\u0152\u00aa\2\u0396\u0398\58\35\2\u0397\u0396"+
		"\3\2\2\2\u0397\u0398\3\2\2\2\u0398\u039a\3\2\2\2\u0399\u039b\5J&\2\u039a"+
		"\u0399\3\2\2\2\u039a\u039b\3\2\2\2\u039b\u039c\3\2\2\2\u039c\u039d\7\u00be"+
		"\2\2\u039d\u039e\5\u00a0Q\2\u039em\3\2\2\2\u039f\u03a3\7\u00e0\2\2\u03a0"+
		"\u03a4\7\u009a\2\2\u03a1\u03a2\7\u009a\2\2\u03a2\u03a4\7\u015a\2\2\u03a3"+
		"\u03a0\3\2\2\2\u03a3\u03a1\3\2\2\2\u03a3\u03a4\3\2\2\2\u03a4\u03a5\3\2"+
		"\2\2\u03a5\u03a7\7\u0103\2\2\u03a6\u03a8\5\u0156\u00ac\2\u03a7\u03a6\3"+
		"\2\2\2\u03a7\u03a8\3\2\2\2\u03a8\u03a9\3\2\2\2\u03a9\u03aa\5\u011a\u008e"+
		"\2\u03aa\u03ab\7\u00be\2\2\u03ab\u03ae\5\u013e\u00a0\2\u03ac\u03ad\7\u0119"+
		"\2\2\u03ad\u03af\t\23\2\2\u03ae\u03ac\3\2\2\2\u03ae\u03af\3\2\2\2\u03af"+
		"\u03b1\3\2\2\2\u03b0\u03b2\5p9\2\u03b1\u03b0\3\2\2\2\u03b1\u03b2\3\2\2"+
		"\2\u03b2o\3\2\2\2\u03b3\u03b4\7\u0171\2\2\u03b4\u03b5\7D\2\2\u03b5\u03bb"+
		"\5r:\2\u03b6\u03b7\7\u018c\2\2\u03b7\u03b8\7D\2\2\u03b8\u03ba\5r:\2\u03b9"+
		"\u03b6\3\2\2\2\u03ba\u03bd\3\2\2\2\u03bb\u03b9\3\2\2\2\u03bb\u03bc\3\2"+
		"\2\2\u03bcq\3\2\2\2\u03bd\u03bb\3\2\2\2\u03be\u03bf\7\u019d\2\2\u03bf"+
		"s\3\2\2\2\u03c0\u03c1\7\u00b9\2\2\u03c1\u03c3\7\u015d\2\2\u03c2\u03c4"+
		"\5\u0158\u00ad\2\u03c3\u03c2\3\2\2\2\u03c3\u03c4\3\2\2\2\u03c4\u03c5\3"+
		"\2\2\2\u03c5\u03cb\5\u0150\u00a9\2\u03c6\u03cc\5v<\2\u03c7\u03cc\5x=\2"+
		"\u03c8\u03cc\5z>\2\u03c9\u03cc\5|?\2\u03ca\u03cc\5~@\2\u03cb\u03c6\3\2"+
		"\2\2\u03cb\u03c7\3\2\2\2\u03cb\u03c8\3\2\2\2\u03cb\u03c9\3\2\2\2\u03cb"+
		"\u03ca\3\2\2\2\u03ccu\3\2\2\2\u03cd\u03cf\7{\2\2\u03ce\u03d0\5\u0152\u00aa"+
		"\2\u03cf\u03ce\3\2\2\2\u03cf\u03d0\3\2\2\2\u03d0\u03d1\3\2\2\2\u03d1\u03d2"+
		"\7\u0166\2\2\u03d2\u03d3\5\u0152\u00aa\2\u03d3w\3\2\2\2\u03d4\u03d5\7"+
		"\u0150\2\2\u03d5\u03d6\5\u015a\u00ae\2\u03d6y\3\2\2\2\u03d7\u03d8\7\7"+
		"\2\2\u03d8\u03d9\7\u00dc\2\2\u03d9\u03da\5X-\2\u03da\u03db\7\u0143\2\2"+
		"\u03db\u03dc\7I\2\2\u03dc\u03de\58\35\2\u03dd\u03df\5\u0080A\2\u03de\u03dd"+
		"\3\2\2\2\u03de\u03df\3\2\2\2\u03df{\3\2\2\2\u03e0\u03e1\7\u00f2\2\2\u03e1"+
		"\u03e2\7\u00dc\2\2\u03e2\u03e3\5X-\2\u03e3}\3\2\2\2\u03e4\u03e5\7\7\2"+
		"\2\u03e5\u03e6\7\u016b\2\2\u03e6\u03e7\58\35\2\u03e7\177\3\2\2\2\u03e8"+
		"\u03e9\7\u012f\2\2\u03e9\u03ea\7%\2\2\u03ea\u0081\3\2\2\2\u03eb\u03ec"+
		"\7\u00b9\2\2\u03ec\u03ed\7\u00ab\2\2\u03ed\u03f1\5\u0152\u00aa\2\u03ee"+
		"\u03f2\5v<\2\u03ef\u03f0\7\u00be\2\2\u03f0\u03f2\5\u00a0Q\2\u03f1\u03ee"+
		"\3\2\2\2\u03f1\u03ef\3\2\2\2\u03f2\u0083\3\2\2\2\u03f3\u03f4\7\u00b9\2"+
		"\2\u03f4\u03f5\7\34\2\2\u03f5\u03f6\5\u014a\u00a6\2\u03f6\u03f7\5x=\2"+
		"\u03f7\u0085\3\2\2\2\u03f8\u03fc\7\u00b9\2\2\u03f9\u03fd\7\u009a\2\2\u03fa"+
		"\u03fb\7\u009a\2\2\u03fb\u03fd\7\u015a\2\2\u03fc\u03f9\3\2\2\2\u03fc\u03fa"+
		"\3\2\2\2\u03fc\u03fd\3\2\2\2\u03fd\u03fe\3\2\2\2\u03fe\u0400\7\u0103\2"+
		"\2\u03ff\u0401\5\u0158\u00ad\2\u0400\u03ff\3\2\2\2\u0400\u0401\3\2\2\2"+
		"\u0401\u0402\3\2\2\2\u0402\u0403\5\u0152\u00aa\2\u0403\u0404\7\u00be\2"+
		"\2\u0404\u0407\5\u013e\u00a0\2\u0405\u0406\7\u0119\2\2\u0406\u0408\t\23"+
		"\2\2\u0407\u0405\3\2\2\2\u0407\u0408\3\2\2\2\u0408\u0087\3\2\2\2\u0409"+
		"\u040a\7\u00f2\2\2\u040a\u040c\7\17\2\2\u040b\u040d\5\u0158\u00ad\2\u040c"+
		"\u040b\3\2\2\2\u040c\u040d\3\2\2\2\u040d\u040e\3\2\2\2\u040e\u040f\5\u0148"+
		"\u00a5\2\u040f\u0089\3\2\2\2\u0410\u0412\7\u00f2\2\2\u0411\u0413\7\u009a"+
		"\2\2\u0412\u0411\3\2\2\2\u0412\u0413\3\2\2\2\u0413\u0414\3\2\2\2\u0414"+
		"\u0416\7\u015d\2\2\u0415\u0417\5\u0158\u00ad\2\u0416\u0415\3\2\2\2\u0416"+
		"\u0417\3\2\2\2\u0417\u0418\3\2\2\2\u0418\u0419\5\u0150\u00a9\2\u0419\u008b"+
		"\3\2\2\2\u041a\u041b\7\u00f2\2\2\u041b\u041d\7\34\2\2\u041c\u041e\5\u0158"+
		"\u00ad\2\u041d\u041c\3\2\2\2\u041d\u041e\3\2\2\2\u041e\u041f\3\2\2\2\u041f"+
		"\u0421\5\u014a\u00a6\2\u0420\u0422\t\24\2\2\u0421\u0420\3\2\2\2\u0421"+
		"\u0422\3\2\2\2\u0422\u008d\3\2\2\2\u0423\u0425\7\u00f2\2\2\u0424\u0426"+
		"\7\u009a\2\2\u0425\u0424\3\2\2\2\u0425\u0426\3\2\2\2\u0426\u0427\3\2\2"+
		"\2\u0427\u0429\7\u00ab\2\2\u0428\u042a\5\u0158\u00ad\2\u0429\u0428\3\2"+
		"\2\2\u0429\u042a\3\2\2\2\u042a\u042b\3\2\2\2\u042b\u042c\5\u0152\u00aa"+
		"\2\u042c\u008f\3\2\2\2\u042d\u0431\7\u00f2\2\2\u042e\u0432\7\u009a\2\2"+
		"\u042f\u0430\7\u009a\2\2\u0430\u0432\7\u015a\2\2\u0431\u042e\3\2\2\2\u0431"+
		"\u042f\3\2\2\2\u0431\u0432\3\2\2\2\u0432\u0433\3\2\2\2\u0433\u0435\7\u0103"+
		"\2\2\u0434\u0436\5\u0158\u00ad\2\u0435\u0434\3\2\2\2\u0435\u0436\3\2\2"+
		"\2\u0436\u0437\3\2\2\2\u0437\u0438\5\u011a\u008e\2\u0438\u0091\3\2\2\2"+
		"\u0439\u043b\7\u00f9\2\2\u043a\u0439\3\2\2\2\u043a\u043b\3\2\2\2\u043b"+
		"\u043c\3\2\2\2\u043c\u0441\5\u0094K\2\u043d\u0441\5\u009cO\2\u043e\u043f"+
		"\7\u00f9\2\2\u043f\u0441\5\u009eP\2\u0440\u043a\3\2\2\2\u0440\u043d\3"+
		"\2\2\2\u0440\u043e\3\2\2\2\u0441\u0093\3\2\2\2\u0442\u0443\7\u0110\2\2"+
		"\u0443\u0444\t\25\2\2\u0444\u044d\5\u0150\u00a9\2\u0445\u0447\5\u0096"+
		"L\2\u0446\u0445\3\2\2\2\u0446\u0447\3\2\2\2\u0447\u0449\3\2\2\2\u0448"+
		"\u044a\58\35\2\u0449\u0448\3\2\2\2\u0449\u044a\3\2\2\2\u044a\u044b\3\2"+
		"\2\2\u044b\u044e\5\u00a0Q\2\u044c\u044e\5\u0098M\2\u044d\u0446\3\2\2\2"+
		"\u044d\u044c\3\2\2\2\u044e\u0095\3\2\2\2\u044f\u0450\7\u013c\2\2\u0450"+
		"\u0451\5\u015a\u00ae\2\u0451\u0097\3\2\2\2\u0452\u0453\7\u0173\2\2\u0453"+
		"\u0458\5\u009aN\2\u0454\u0455\7\u018c\2\2\u0455\u0457\5\u009aN\2\u0456"+
		"\u0454\3\2\2\2\u0457\u045a\3\2\2\2\u0458\u0456\3\2\2\2\u0458\u0459\3\2"+
		"\2\2\u0459\u0099\3\2\2\2\u045a\u0458\3\2\2\2\u045b\u045c\7\u0188\2\2\u045c"+
		"\u0461\5\u016c\u00b7\2\u045d\u045e\7\u018c\2\2\u045e\u0460\5\u016c\u00b7"+
		"\2\u045f\u045d\3\2\2\2\u0460\u0463\3\2\2\2\u0461\u045f\3\2\2\2\u0461\u0462"+
		"\3\2\2\2\u0462\u0464\3\2\2\2\u0463\u0461\3\2\2\2\u0464\u0465\7\u0189\2"+
		"\2\u0465\u009b\3\2\2\2\u0466\u0467\7\u00c2\2\2\u0467\u0468\7\u0094\2\2"+
		"\u0468\u0469\7\u0150\2\2\u0469\u046d\7\u018d\2\2\u046a\u046b\5\u0094K"+
		"\2\u046b\u046c\7\u018d\2\2\u046c\u046e\3\2\2\2\u046d\u046a\3\2\2\2\u046e"+
		"\u046f\3\2\2\2\u046f\u046d\3\2\2\2\u046f\u0470\3\2\2\2\u0470\u0471\3\2"+
		"\2\2\u0471\u0472\7\u00f5\2\2\u0472\u009d\3\2\2\2\u0473\u0474\7\u0094\2"+
		"\2\u0474\u0475\7\u0150\2\2\u0475\u0479\7\u00c2\2\2\u0476\u0477\5\u0094"+
		"K\2\u0477\u0478\7\u018d\2\2\u0478\u047a\3\2\2\2\u0479\u0476\3\2\2\2\u047a"+
		"\u047b\3\2\2\2\u047b\u0479\3\2\2\2\u047b\u047c\3\2\2\2\u047c\u047d\3\2"+
		"\2\2\u047d\u047e\7\u00f5\2\2\u047e\u009f\3\2\2\2\u047f\u0480\bQ\1\2\u0480"+
		"\u0497\5\u00a2R\2\u0481\u0482\5\u00a4S\2\u0482\u0483\5\u00a0Q\7\u0483"+
		"\u0497\3\2\2\2\u0484\u0485\7\u0188\2\2\u0485\u0486\5\u00a0Q\2\u0486\u0487"+
		"\7\u0189\2\2\u0487\u0497\3\2\2\2\u0488\u048a\5\u00acW\2\u0489\u048b\5"+
		"\u00e8u\2\u048a\u0489\3\2\2\2\u048a\u048b\3\2\2\2\u048b\u048d\3\2\2\2"+
		"\u048c\u048e\5\u00ecw\2\u048d\u048c\3\2\2\2\u048d\u048e\3\2\2\2\u048e"+
		"\u0497\3\2\2\2\u048f\u0491\5\u00aaV\2\u0490\u0492\5\u00e8u\2\u0491\u0490"+
		"\3\2\2\2\u0491\u0492\3\2\2\2\u0492\u0494\3\2\2\2\u0493\u0495\5\u00ecw"+
		"\2\u0494\u0493\3\2\2\2\u0494\u0495\3\2\2\2\u0495\u0497\3\2\2\2\u0496\u047f"+
		"\3\2\2\2\u0496\u0481\3\2\2\2\u0496\u0484\3\2\2\2\u0496\u0488\3\2\2\2\u0496"+
		"\u048f\3\2\2\2\u0497\u04a6\3\2\2\2\u0498\u0499\f\5\2\2\u0499\u049b\t\26"+
		"\2\2\u049a\u049c\7\u00b7\2\2\u049b\u049a\3\2\2\2\u049b\u049c\3\2\2\2\u049c"+
		"\u049d\3\2\2\2\u049d\u049f\5\u00a0Q\2\u049e\u04a0\5\u00e8u\2\u049f\u049e"+
		"\3\2\2\2\u049f\u04a0\3\2\2\2\u04a0\u04a2\3\2\2\2\u04a1\u04a3\5\u00ecw"+
		"\2\u04a2\u04a1\3\2\2\2\u04a2\u04a3\3\2\2\2\u04a3\u04a5\3\2\2\2\u04a4\u0498"+
		"\3\2\2\2\u04a5\u04a8\3\2\2\2\u04a6\u04a4\3\2\2\2\u04a6\u04a7\3\2\2\2\u04a7"+
		"\u00a1\3\2\2\2\u04a8\u04a6\3\2\2\2\u04a9\u04aa\7\u0173\2\2\u04aa\u04af"+
		"\5\u0104\u0083\2\u04ab\u04ac\7\u018c\2\2\u04ac\u04ae\5\u0104\u0083\2\u04ad"+
		"\u04ab\3\2\2\2\u04ae\u04b1\3\2\2\2\u04af\u04ad\3\2\2\2\u04af\u04b0\3\2"+
		"\2\2\u04b0\u00a3\3\2\2\2\u04b1\u04af\3\2\2\2\u04b2\u04b3\7\u0179\2\2\u04b3"+
		"\u04b8\5\u00a6T\2\u04b4\u04b5\7\u018c\2\2\u04b5\u04b7\5\u00a6T\2\u04b6"+
		"\u04b4\3\2\2\2\u04b7\u04ba\3\2\2\2\u04b8\u04b6\3\2\2\2\u04b8\u04b9\3\2"+
		"\2\2\u04b9\u00a5\3\2\2\2\u04ba\u04b8\3\2\2\2\u04bb\u04c7\5\u00a8U\2\u04bc"+
		"\u04bd\7\u0188\2\2\u04bd\u04c2\5\66\34\2\u04be\u04bf\7\u018c\2\2\u04bf"+
		"\u04c1\5\66\34\2\u04c0\u04be\3\2\2\2\u04c1\u04c4\3\2\2\2\u04c2\u04c0\3"+
		"\2\2\2\u04c2\u04c3\3\2\2\2\u04c3\u04c5\3\2\2\2\u04c4\u04c2\3\2\2\2\u04c5"+
		"\u04c6\7\u0189\2\2\u04c6\u04c8\3\2\2\2\u04c7\u04bc\3\2\2\2\u04c7\u04c8"+
		"\3\2\2\2\u04c8\u04c9\3\2\2\2\u04c9\u04ca\7\u00be\2\2\u04ca\u04cb\7\u0188"+
		"\2\2\u04cb\u04cc\5\u00a0Q\2\u04cc\u04cd\7\u0189\2\2\u04cd\u00a7\3\2\2"+
		"\2\u04ce\u04cf\5\u013e\u00a0\2\u04cf\u00a9\3\2\2\2\u04d0\u04d1\5\u00ac"+
		"W\2\u04d1\u04d3\5\u00b2Z\2\u04d2\u04d4\5\u00ceh\2\u04d3\u04d2\3\2\2\2"+
		"\u04d3\u04d4\3\2\2\2\u04d4\u04d6\3\2\2\2\u04d5\u04d7\5\u00d0i\2\u04d6"+
		"\u04d5\3\2\2\2\u04d6\u04d7\3\2\2\2\u04d7\u04d9\3\2\2\2\u04d8\u04da\5\u00de"+
		"p\2\u04d9\u04d8\3\2\2\2\u04d9\u04da\3\2\2\2\u04da\u04dc\3\2\2\2\u04db"+
		"\u04dd\5\u00e0q\2\u04dc\u04db\3\2\2\2\u04dc\u04dd\3\2\2\2\u04dd\u04e3"+
		"\3\2\2\2\u04de\u04df\5\u00acW\2\u04df\u04e0\5\u00b2Z\2\u04e0\u04e1\5\u00e6"+
		"t\2\u04e1\u04e3\3\2\2\2\u04e2\u04d0\3\2\2\2\u04e2\u04de\3\2\2\2\u04e3"+
		"\u00ab\3\2\2\2\u04e4\u04e6\7\u014f\2\2\u04e5\u04e7\5\u0176\u00bc\2\u04e6"+
		"\u04e5\3\2\2\2\u04e6\u04e7\3\2\2\2\u04e7\u04f1\3\2\2\2\u04e8\u04f2\7\u0193"+
		"\2\2\u04e9\u04ee\5\u00aeX\2\u04ea\u04eb\7\u018c\2\2\u04eb\u04ed\5\u00ae"+
		"X\2\u04ec\u04ea\3\2\2\2\u04ed\u04f0\3\2\2\2\u04ee\u04ec\3\2\2\2\u04ee"+
		"\u04ef\3\2\2\2\u04ef\u04f2\3\2\2\2\u04f0\u04ee\3\2\2\2\u04f1\u04e8\3\2"+
		"\2\2\u04f1\u04e9\3\2\2\2\u04f2\u00ad\3\2\2\2\u04f3\u04fc\5\u00b0Y\2\u04f4"+
		"\u04f9\5\u0104\u0083\2\u04f5\u04f7\7\u00be\2\2\u04f6\u04f5\3\2\2\2\u04f6"+
		"\u04f7\3\2\2\2\u04f7\u04f8\3\2\2\2\u04f8\u04fa\5\u0104\u0083\2\u04f9\u04f6"+
		"\3\2\2\2\u04f9\u04fa\3\2\2\2\u04fa\u04fc\3\2\2\2\u04fb\u04f3\3\2\2\2\u04fb"+
		"\u04f4\3\2\2\2\u04fc\u00af\3\2\2\2\u04fd\u04fe\5\u010e\u0088\2\u04fe\u04ff"+
		"\7\u013a\2\2\u04ff\u0500\5\u00e4s\2\u0500\u0501\7\u00be\2\2\u0501\u0502"+
		"\5\u013e\u00a0\2\u0502\u050a\3\2\2\2\u0503\u0504\5\u010e\u0088\2\u0504"+
		"\u0505\7\u013a\2\2\u0505\u0506\5\u0136\u009c\2\u0506\u0507\7\u00be\2\2"+
		"\u0507\u0508\5\u013e\u00a0\2\u0508\u050a\3\2\2\2\u0509\u04fd\3\2\2\2\u0509"+
		"\u0503\3\2\2\2\u050a\u00b1\3\2\2\2\u050b\u050c\7\u0101\2\2\u050c\u050d"+
		"\5\u00b4[\2\u050d\u00b3\3\2\2\2\u050e\u050f\b[\1\2\u050f\u0514\5\u00b6"+
		"\\\2\u0510\u0511\7\u018c\2\2\u0511\u0513\5\u00b6\\\2\u0512\u0510\3\2\2"+
		"\2\u0513\u0516\3\2\2\2\u0514\u0512\3\2\2\2\u0514\u0515\3\2\2\2\u0515\u051a"+
		"\3\2\2\2\u0516\u0514\3\2\2\2\u0517\u051a\5\u00be`\2\u0518\u051a\5\u00c0"+
		"a\2\u0519\u050e\3\2\2\2\u0519\u0517\3\2\2\2\u0519\u0518\3\2\2\2\u051a"+
		"\u0546\3\2\2\2\u051b\u051c\f\5\2\2\u051c\u051d\7\u00e1\2\2\u051d\u051e"+
		"\7\u0117\2\2\u051e\u0545\5\u00b4[\6\u051f\u0521\f\7\2\2\u0520\u0522\7"+
		"\u012b\2\2\u0521\u0520\3\2\2\2\u0521\u0522\3\2\2\2\u0522\u0524\3\2\2\2"+
		"\u0523\u0525\t\27\2\2\u0524\u0523\3\2\2\2\u0524\u0525\3\2\2\2\u0525\u0527"+
		"\3\2\2\2\u0526\u0528\7\u0139\2\2\u0527\u0526\3\2\2\2\u0527\u0528\3\2\2"+
		"\2\u0528\u0529\3\2\2\2\u0529\u052a\7\u0117\2\2\u052a\u052c\5\u00b4[\2"+
		"\u052b\u052d\5\u00ccg\2\u052c\u052b\3\2\2\2\u052c\u052d\3\2\2\2\u052d"+
		"\u0545\3\2\2\2\u052e\u0530\f\6\2\2\u052f\u0531\7\u012b\2\2\u0530\u052f"+
		"\3\2\2\2\u0530\u0531\3\2\2\2\u0531\u0533\3\2\2\2\u0532\u0534\t\27\2\2"+
		"\u0533\u0532\3\2\2\2\u0533\u0534\3\2\2\2\u0534\u0536\3\2\2\2\u0535\u0537"+
		"\7\u0139\2\2\u0536\u0535\3\2\2\2\u0536\u0537\3\2\2\2\u0537\u0538\3\2\2"+
		"\2\u0538\u0539\7\u0117\2\2\u0539\u053b\5\u00b4[\2\u053a\u053c\5\u00cc"+
		"g\2\u053b\u053a\3\2\2\2\u053b\u053c\3\2\2\2\u053c\u0541\3\2\2\2\u053d"+
		"\u053e\7\u018c\2\2\u053e\u0540\5\u00b6\\\2\u053f\u053d\3\2\2\2\u0540\u0543"+
		"\3\2\2\2\u0541\u053f\3\2\2\2\u0541\u0542\3\2\2\2\u0542\u0545\3\2\2\2\u0543"+
		"\u0541\3\2\2\2\u0544\u051b\3\2\2\2\u0544\u051f\3\2\2\2\u0544\u052e\3\2"+
		"\2\2\u0545\u0548\3\2\2\2\u0546\u0544\3\2\2\2\u0546\u0547\3\2\2\2\u0547"+
		"\u00b5\3\2\2\2\u0548\u0546\3\2\2\2\u0549\u054b\5\u00b8]\2\u054a\u054c"+
		"\5\u0134\u009b\2\u054b\u054a\3\2\2\2\u054b\u054c\3\2\2\2\u054c\u00b7\3"+
		"\2\2\2\u054d\u054f\7\u015d\2\2\u054e\u054d\3\2\2\2\u054e\u054f\3\2\2\2"+
		"\u054f\u0550\3\2\2\2\u0550\u0552\5\u0150\u00a9\2\u0551\u0553\5\u00ba^"+
		"\2\u0552\u0551\3\2\2\2\u0552\u0553\3\2\2\2\u0553\u0558\3\2\2\2\u0554\u0556"+
		"\7\u00be\2\2\u0555\u0554\3\2\2\2\u0555\u0556\3\2\2\2\u0556\u0557\3\2\2"+
		"\2\u0557\u0559\5\u0122\u0092\2\u0558\u0555\3\2\2\2\u0558\u0559\3\2\2\2"+
		"\u0559\u0593\3\2\2\2\u055a\u055b\7\u011a\2\2\u055b\u055c\7\u015d\2\2\u055c"+
		"\u055d\7\u0188\2\2\u055d\u055e\5\u011a\u008e\2\u055e\u055f\7\u0188\2\2"+
		"\u055f\u0564\5\u011c\u008f\2\u0560\u0561\7\u018c\2\2\u0561\u0563\5\u011c"+
		"\u008f\2\u0562\u0560\3\2\2\2\u0563\u0566\3\2\2\2\u0564\u0562\3\2\2\2\u0564"+
		"\u0565\3\2\2\2\u0565\u0567\3\2\2\2\u0566\u0564\3\2\2\2\u0567\u0568\7\u0189"+
		"\2\2\u0568\u0569\7\u0189\2\2\u0569\u0593\3\2\2\2\u056a\u056c\7\u011a\2"+
		"\2\u056b\u056a\3\2\2\2\u056b\u056c\3\2\2\2\u056c\u056d\3\2\2\2\u056d\u056e"+
		"\7\u0188\2\2\u056e\u056f\5\u00a0Q\2\u056f\u0570\7\u0189\2\2\u0570\u0593"+
		"\3\2\2\2\u0571\u0572\7\u011a\2\2\u0572\u0573\7\u015d\2\2\u0573\u0574\7"+
		"\u0188\2\2\u0574\u0575\5\u011a\u008e\2\u0575\u0576\7\u0188\2\2\u0576\u057b"+
		"\5\u011c\u008f\2\u0577\u0578\7\u018c\2\2\u0578\u057a\5\u011c\u008f\2\u0579"+
		"\u0577\3\2\2\2\u057a\u057d\3\2\2\2\u057b\u0579\3\2\2\2\u057b\u057c\3\2"+
		"\2\2\u057c\u057e\3\2\2\2\u057d\u057b\3\2\2\2\u057e\u057f\7\u0189\2\2\u057f"+
		"\u0580\7\u0189\2\2\u0580\u0581\7\u00be\2\2\u0581\u0582\5\u0134\u009b\2"+
		"\u0582\u0583\7\u0188\2\2\u0583\u0588\5\u00aeX\2\u0584\u0585\7\u018c\2"+
		"\2\u0585\u0587\5\u00aeX\2\u0586\u0584\3\2\2\2\u0587\u058a\3\2\2\2\u0588"+
		"\u0586\3\2\2\2\u0588\u0589\3\2\2\2\u0589\u058b\3\2\2\2\u058a\u0588\3\2"+
		"\2\2\u058b\u058c\7\u0189\2\2\u058c\u0593\3\2\2\2\u058d\u058e\7\u016d\2"+
		"\2\u058e\u058f\7\u0188\2\2\u058f\u0590\5\u0104\u0083\2\u0590\u0591\7\u0189"+
		"\2\2\u0591\u0593\3\2\2\2\u0592\u054e\3\2\2\2\u0592\u055a\3\2\2\2\u0592"+
		"\u056b\3\2\2\2\u0592\u0571\3\2\2\2\u0592\u058d\3\2\2\2\u0593\u00b9\3\2"+
		"\2\2\u0594\u0595\7\u0100\2\2\u0595\u0596\7\u015b\2\2\u0596\u0597\7\u00be"+
		"\2\2\u0597\u0598\7\u0132\2\2\u0598\u0599\5\u00bc_\2\u0599\u00bb\3\2\2"+
		"\2\u059a\u059b\5\u0104\u0083\2\u059b\u00bd\3\2\2\2\u059c\u059d\7\u0188"+
		"\2\2\u059d\u059e\5\u0098M\2\u059e\u059f\7\u0189\2\2\u059f\u05a0\5\u0134"+
		"\u009b\2\u05a0\u00bf\3\2\2\2\u05a1\u05a2\7\u015d\2\2\u05a2\u05a3\7\u0188"+
		"\2\2\u05a3\u05a4\5\u00c2b\2\u05a4\u05a5\7\u0189\2\2\u05a5\u00c1\3\2\2"+
		"\2\u05a6\u05a7\5\u00c4c\2\u05a7\u05a8\7\u0188\2\2\u05a8\u05ad\5\u00c6"+
		"d\2\u05a9\u05aa\7\u018c\2\2\u05aa\u05ac\5\u00c6d\2\u05ab\u05a9\3\2\2\2"+
		"\u05ac\u05af\3\2\2\2\u05ad\u05ab\3\2\2\2\u05ad\u05ae\3\2\2\2\u05ae\u05b0"+
		"\3\2\2\2\u05af\u05ad\3\2\2\2\u05b0\u05b1\7\u0189\2\2\u05b1\u00c3\3\2\2"+
		"\2\u05b2\u05b3\t\30\2\2\u05b3\u00c5\3\2\2\2\u05b4\u05b5\7\u015d\2\2\u05b5"+
		"\u05c4\5\u00dco\2\u05b6\u05c4\5\u00caf\2\u05b7\u05c4\5\u0126\u0094\2\u05b8"+
		"\u05b9\7\33\2\2\u05b9\u05ba\7\u019c\2\2\u05ba\u05bb\7\u015d\2\2\u05bb"+
		"\u05c4\5\u00dco\2\u05bc\u05bd\7\u009b\2\2\u05bd\u05be\7\u019c\2\2\u05be"+
		"\u05c4\5\u00caf\2\u05bf\u05c0\5\u00c8e\2\u05c0\u05c1\7\u019c\2\2\u05c1"+
		"\u05c2\5\u0126\u0094\2\u05c2\u05c4\3\2\2\2\u05c3\u05b4\3\2\2\2\u05c3\u05b6"+
		"\3\2\2\2\u05c3\u05b7\3\2\2\2\u05c3\u05b8\3\2\2\2\u05c3\u05bc\3\2\2\2\u05c3"+
		"\u05bf\3\2\2\2\u05c4\u00c7\3\2\2\2\u05c5\u05c6\t\31\2\2\u05c6\u00c9\3"+
		"\2\2\2\u05c7\u05c8\7\"\2\2\u05c8\u05c9\7\u0188\2\2\u05c9\u05ca\5\u0152"+
		"\u00aa\2\u05ca\u05cb\7\u0189\2\2\u05cb\u00cb\3\2\2\2\u05cc\u05cd\7\u0134"+
		"\2\2\u05cd\u05db\5\u0106\u0084\2\u05ce\u05cf\7\u0171\2\2\u05cf\u05d0\7"+
		"\u0188\2\2\u05d0\u05d5\5\u0152\u00aa\2\u05d1\u05d2\7\u018c\2\2\u05d2\u05d4"+
		"\5\u0152\u00aa\2\u05d3\u05d1\3\2\2\2\u05d4\u05d7\3\2\2\2\u05d5\u05d3\3"+
		"\2\2\2\u05d5\u05d6\3\2\2\2\u05d6\u05d8\3\2\2\2\u05d7\u05d5\3\2\2\2\u05d8"+
		"\u05d9\7\u0189\2\2\u05d9\u05db\3\2\2\2\u05da\u05cc\3\2\2\2\u05da\u05ce"+
		"\3\2\2\2\u05db\u00cd\3\2\2\2\u05dc\u05dd\7\u0177\2\2\u05dd\u05de\5\u0106"+
		"\u0084\2\u05de\u00cf\3\2\2\2\u05df\u05e0\7\u0106\2\2\u05e0\u05e1\7\u00ca"+
		"\2\2\u05e1\u05e6\5\u00d2j\2\u05e2\u05e3\7\u018c\2\2\u05e3\u05e5\5\u00d2"+
		"j\2\u05e4\u05e2\3\2\2\2\u05e5\u05e8\3\2\2\2\u05e6\u05e4\3\2\2\2\u05e6"+
		"\u05e7\3\2\2\2\u05e7\u00d1\3\2\2\2\u05e8\u05e6\3\2\2\2\u05e9\u0611\5\u0104"+
		"\u0083\2\u05ea\u0611\5\u00d8m\2\u05eb\u05ec\7\u0188\2\2\u05ec\u0611\7"+
		"\u0189\2\2\u05ed\u05ee\7\u0188\2\2\u05ee\u05f3\5\u0104\u0083\2\u05ef\u05f0"+
		"\7\u018c\2\2\u05f0\u05f2\5\u0104\u0083\2\u05f1\u05ef\3\2\2\2\u05f2\u05f5"+
		"\3\2\2\2\u05f3\u05f1\3\2\2\2\u05f3\u05f4\3\2\2\2\u05f4\u05f6\3\2\2\2\u05f5"+
		"\u05f3\3\2\2\2\u05f6\u05f7\7\u0189\2\2\u05f7\u0611\3\2\2\2\u05f8\u05f9"+
		"\5\u00d6l\2\u05f9\u05fa\7\u0188\2\2\u05fa\u05ff\5\u0104\u0083\2\u05fb"+
		"\u05fc\7\u018c\2\2\u05fc\u05fe\5\u0104\u0083\2\u05fd\u05fb\3\2\2\2\u05fe"+
		"\u0601\3\2\2\2\u05ff\u05fd\3\2\2\2\u05ff\u0600\3\2\2\2\u0600\u0602\3\2"+
		"\2\2\u0601\u05ff\3\2\2\2\u0602\u0603\7\u0189\2\2\u0603\u0611\3\2\2\2\u0604"+
		"\u0605\5\u00d4k\2\u0605\u0606\7\u0188\2\2\u0606\u060b\5\u00d2j\2\u0607"+
		"\u0608\7\u018c\2\2\u0608\u060a\5\u00d2j\2\u0609\u0607\3\2\2\2\u060a\u060d"+
		"\3\2\2\2\u060b\u0609\3\2\2\2\u060b\u060c\3\2\2\2\u060c\u060e\3\2\2\2\u060d"+
		"\u060b\3\2\2\2\u060e\u060f\7\u0189\2\2\u060f\u0611\3\2\2\2\u0610\u05e9"+
		"\3\2\2\2\u0610\u05ea\3\2\2\2\u0610\u05eb\3\2\2\2\u0610\u05ed\3\2\2\2\u0610"+
		"\u05f8\3\2\2\2\u0610\u0604\3\2\2\2\u0611\u00d3\3\2\2\2\u0612\u0613\7\u0107"+
		"\2\2\u0613\u0614\7\u008d\2\2\u0614\u00d5\3\2\2\2\u0615\u0616\t\32\2\2"+
		"\u0616\u00d7\3\2\2\2\u0617\u0618\5\u00dan\2\u0618\u0619\7\u0188\2\2\u0619"+
		"\u061a\5\u00dco\2\u061a\u061b\7\u018c\2\2\u061b\u061c\5\u0126\u0094\2"+
		"\u061c\u061d\7\u0189\2\2\u061d\u00d9\3\2\2\2\u061e\u061f\t\33\2\2\u061f"+
		"\u00db\3\2\2\2\u0620\u0621\5\u0152\u00aa\2\u0621\u00dd\3\2\2\2\u0622\u0623"+
		"\7\u0109\2\2\u0623\u0624\5\u0106\u0084\2\u0624\u00df\3\2\2\2\u0625\u0626"+
		"\7\u0178\2\2\u0626\u062b\5\u00e2r\2\u0627\u0628\7\u018c\2\2\u0628\u062a"+
		"\5\u00e2r\2\u0629\u0627\3\2\2\2\u062a\u062d\3\2\2\2\u062b\u0629\3\2\2"+
		"\2\u062b\u062c\3\2\2\2\u062c\u00e1\3\2\2\2\u062d\u062b\3\2\2\2\u062e\u062f"+
		"\5\u0136\u009c\2\u062f\u0630\7\u00be\2\2\u0630\u0631\5\u00e4s\2\u0631"+
		"\u00e3\3\2\2\2\u0632\u0634\5\u0136\u009c\2\u0633\u0632\3\2\2\2\u0633\u0634"+
		"\3\2\2\2\u0634\u0635\3\2\2\2\u0635\u0637\7\u0188\2\2\u0636\u0638\5\u00ee"+
		"x\2\u0637\u0636\3\2\2\2\u0637\u0638\3\2\2\2\u0638\u063a\3\2\2\2\u0639"+
		"\u063b\5\u00e8u\2\u063a\u0639\3\2\2\2\u063a\u063b\3\2\2\2\u063b\u063d"+
		"\3\2\2\2\u063c\u063e\5\u00fe\u0080\2\u063d\u063c\3\2\2\2\u063d\u063e\3"+
		"\2\2\2\u063e\u063f\3\2\2\2\u063f\u0640\7\u0189\2\2\u0640\u00e5\3\2\2\2"+
		"\u0641\u0642\7\u0121\2\2\u0642\u0644\7\u0188\2\2\u0643\u0645\5\u00eex"+
		"\2\u0644\u0643\3\2\2\2\u0644\u0645\3\2\2\2\u0645\u0647\3\2\2\2\u0646\u0648"+
		"\5\u00e8u\2\u0647\u0646\3\2\2\2\u0647\u0648\3\2\2\2\u0648\u064a\3\2\2"+
		"\2\u0649\u064b\5\u00f2z\2\u064a\u0649\3\2\2\2\u064a\u064b\3\2\2\2\u064b"+
		"\u064d\3\2\2\2\u064c\u064e\5\u00f8}\2\u064d\u064c\3\2\2\2\u064d\u064e"+
		"\3\2\2\2\u064e\u0650\3\2\2\2\u064f\u0651\5\u00fa~\2\u0650\u064f\3\2\2"+
		"\2\u0650\u0651\3\2\2\2\u0651\u0653\3\2\2\2\u0652\u0654\5\u00f4{\2\u0653"+
		"\u0652\3\2\2\2\u0653\u0654\3\2\2\2\u0654\u0655\3\2\2\2\u0655\u0656\5\u00fc"+
		"\177\2\u0656\u065b\7\u0189\2\2\u0657\u0659\7\u00be\2\2\u0658\u0657\3\2"+
		"\2\2\u0658\u0659\3\2\2\2\u0659\u065a\3\2\2\2\u065a\u065c\5\u013e\u00a0"+
		"\2\u065b\u0658\3\2\2\2\u065b\u065c\3\2\2\2\u065c\u00e7\3\2\2\2\u065d\u065e"+
		"\7\u0137\2\2\u065e\u065f\7\u00ca\2\2\u065f\u0664\5\u00eav\2\u0660\u0661"+
		"\7\u018c\2\2\u0661\u0663\5\u00eav\2\u0662\u0660\3\2\2\2\u0663\u0666\3"+
		"\2\2\2\u0664\u0662\3\2\2\2\u0664\u0665\3\2\2\2\u0665\u00e9\3\2\2\2\u0666"+
		"\u0664\3\2\2\2\u0667\u0669\5\u0104\u0083\2\u0668\u066a\t\34\2\2\u0669"+
		"\u0668\3\2\2\2\u0669\u066a\3\2\2\2\u066a\u066d\3\2\2\2\u066b\u066c\7["+
		"\2\2\u066c\u066e\t\35\2\2\u066d\u066b\3\2\2\2\u066d\u066e\3\2\2\2\u066e"+
		"\u00eb\3\2\2\2\u066f\u0672\7\u011e\2\2\u0670\u0673\7\u00b7\2\2\u0671\u0673"+
		"\5\u0104\u0083\2\u0672\u0670\3\2\2\2\u0672\u0671\3\2\2\2\u0673\u00ed\3"+
		"\2\2\2\u0674\u0675\7\u013c\2\2\u0675\u0676\7\u00ca\2\2\u0676\u067b\5\u0104"+
		"\u0083\2\u0677\u0678\7\u018c\2\2\u0678\u067a\5\u0104\u0083\2\u0679\u0677"+
		"\3\2\2\2\u067a\u067d\3\2\2\2\u067b\u0679\3\2\2\2\u067b\u067c\3\2\2\2\u067c"+
		"\u00ef\3\2\2\2\u067d\u067b\3\2\2\2\u067e\u068f\7\u0193\2\2\u067f\u068f"+
		"\7\u0196\2\2\u0680\u068f\7\u019b\2\2\u0681\u0682\7\u018a\2\2\u0682\u0683"+
		"\7\u019e\2\2\u0683\u0684\7\u018c\2\2\u0684\u0685\7\u019e\2\2\u0685\u068f"+
		"\7\u018b\2\2\u0686\u0687\7\u018a\2\2\u0687\u0688\7\u019e\2\2\u0688\u0689"+
		"\7\u018c\2\2\u0689\u068f\7\u018b\2\2\u068a\u068b\7\u018a\2\2\u068b\u068c"+
		"\7\u018c\2\2\u068c\u068d\7\u019e\2\2\u068d\u068f\7\u018b\2\2\u068e\u067e"+
		"\3\2\2\2\u068e\u067f\3\2\2\2\u068e\u0680\3\2\2\2\u068e\u0681\3\2\2\2\u068e"+
		"\u0686\3\2\2\2\u068e\u068a\3\2\2\2\u068f\u00f1\3\2\2\2\u0690\u0691\7\u0122"+
		"\2\2\u0691\u0696\5\u00aeX\2\u0692\u0693\7\u018c\2\2\u0693\u0695\5\u00ae"+
		"X\2\u0694\u0692\3\2\2\2\u0695\u0698\3\2\2\2\u0696\u0694\3\2\2\2\u0696"+
		"\u0697\3\2\2\2\u0697\u00f3\3\2\2\2\u0698\u0696\3\2\2\2\u0699\u069a\7\u013d"+
		"\2\2\u069a\u069c\7\u0188\2\2\u069b\u069d\5\u00f6|\2\u069c\u069b\3\2\2"+
		"\2\u069d\u069e\3\2\2\2\u069e\u069c\3\2\2\2\u069e\u069f\3\2\2\2\u069f\u06a0"+
		"\3\2\2\2\u06a0\u06a2\7\u0189\2\2\u06a1\u06a3\5\u0102\u0082\2\u06a2\u06a1"+
		"\3\2\2\2\u06a2\u06a3\3\2\2\2\u06a3\u00f5\3\2\2\2\u06a4\u06a6\5\u0142\u00a2"+
		"\2\u06a5\u06a7\5\u00f0y\2\u06a6\u06a5\3\2\2\2\u06a6\u06a7\3\2\2\2\u06a7"+
		"\u00f7\3\2\2\2\u06a8\u06a9\7\u00b7\2\2\u06a9\u06aa\7\u014d\2\2\u06aa\u06ab"+
		"\7\u013e\2\2\u06ab\u06b1\7\u0120\2\2\u06ac\u06ad\7\u0135\2\2\u06ad\u06ae"+
		"\7\u014c\2\2\u06ae\u06af\7\u013e\2\2\u06af\u06b1\7\u0120\2\2\u06b0\u06a8"+
		"\3\2\2\2\u06b0\u06ac\3\2\2\2\u06b1\u00f9\3\2\2\2\u06b2\u06b3\7\t\2\2\u06b3"+
		"\u06b4\7\u0120\2\2\u06b4\u06b5\7\u0153\2\2\u06b5\u06b6\7f\2\2\u06b6\u06b7"+
		"\7M\2\2\u06b7\u06cb\7\u014c\2\2\u06b8\u06b9\7\t\2\2\u06b9\u06ba\7\u0120"+
		"\2\2\u06ba\u06bb\7\u0153\2\2\u06bb\u06bc\7\u0166\2\2\u06bc\u06bd\7\u012c"+
		"\2\2\u06bd\u06cb\7\u014c\2\2\u06be\u06bf\7\t\2\2\u06bf\u06c0\7\u0120\2"+
		"\2\u06c0\u06c1\7\u0153\2\2\u06c1\u06c2\7\u0166\2\2\u06c2\u06c3\7M\2\2"+
		"\u06c3\u06cb\5\u0142\u00a2\2\u06c4\u06c5\7\t\2\2\u06c5\u06c6\7\u0120\2"+
		"\2\u06c6\u06c7\7\u0153\2\2\u06c7\u06c8\7\u0166\2\2\u06c8\u06c9\7\61\2"+
		"\2\u06c9\u06cb\5\u0142\u00a2\2\u06ca\u06b2\3\2\2\2\u06ca\u06b8\3\2\2\2"+
		"\u06ca\u06be\3\2\2\2\u06ca\u06c4\3\2\2\2\u06cb\u00fb\3\2\2\2\u06cc\u06cd"+
		"\7\u00ed\2\2\u06cd\u06d2\5\u00aeX\2\u06ce\u06cf\7\u018c\2\2\u06cf\u06d1"+
		"\5\u00aeX\2\u06d0\u06ce\3\2\2\2\u06d1\u06d4\3\2\2\2\u06d2\u06d0\3\2\2"+
		"\2\u06d2\u06d3\3\2\2\2\u06d3\u00fd\3\2\2\2\u06d4\u06d2\3\2\2\2\u06d5\u06d6"+
		"\7\u0144\2\2\u06d6\u06d7\7\u00c3\2\2\u06d7\u06d8\5\u0126\u0094\2\u06d8"+
		"\u06d9\5\u0100\u0081\2\u06d9\u06df\3\2\2\2\u06da\u06db\7\u014d\2\2\u06db"+
		"\u06dc\7\u00c3\2\2\u06dc\u06dd\7\u019e\2\2\u06dd\u06df\5\u0100\u0081\2"+
		"\u06de\u06d5\3\2\2\2\u06de\u06da\3\2\2\2\u06df\u00ff\3\2\2\2\u06e0\u06e1"+
		"\7j\2\2\u06e1\u06e2\7\u00ba\2\2\u06e2\u06e3\7\u00e3\2\2\u06e3\u06e4\7"+
		"\u014c\2\2\u06e4\u0101\3\2\2\2\u06e5\u06e6\7\u017a\2\2\u06e6\u06e7\5\u0126"+
		"\u0094\2\u06e7\u0103\3\2\2\2\u06e8\u06e9\5\u0106\u0084\2\u06e9\u0105\3"+
		"\2\2\2\u06ea\u06eb\b\u0084\1\2\u06eb\u06ec\7\u012f\2\2\u06ec\u06f7\5\u0106"+
		"\u0084\b\u06ed\u06ee\7\u00fa\2\2\u06ee\u06ef\7\u0188\2\2\u06ef\u06f0\5"+
		"\u00a0Q\2\u06f0\u06f1\7\u0189\2\2\u06f1\u06f7\3\2\2\2\u06f2\u06f4\5\u010c"+
		"\u0087\2\u06f3\u06f5\5\u0108\u0085\2\u06f4\u06f3\3\2\2\2\u06f4\u06f5\3"+
		"\2\2\2\u06f5\u06f7\3\2\2\2\u06f6\u06ea\3\2\2\2\u06f6\u06ed\3\2\2\2\u06f6"+
		"\u06f2\3\2\2\2\u06f7\u0706\3\2\2\2\u06f8\u06f9\f\5\2\2\u06f9\u06fa\7\u00ba"+
		"\2\2\u06fa\u0705\5\u0106\u0084\6\u06fb\u06fc\f\4\2\2\u06fc\u06fd\7\u0136"+
		"\2\2\u06fd\u0705\5\u0106\u0084\5\u06fe\u06ff\f\3\2\2\u06ff\u0701\7\u0116"+
		"\2\2\u0700\u0702\7\u012f\2\2\u0701\u0700\3\2\2\2\u0701\u0702\3\2\2\2\u0702"+
		"\u0703\3\2\2\2\u0703\u0705\t\36\2\2\u0704\u06f8\3\2\2\2\u0704\u06fb\3"+
		"\2\2\2\u0704\u06fe\3\2\2\2\u0705\u0708\3\2\2\2\u0706\u0704\3\2\2\2\u0706"+
		"\u0707\3\2\2\2\u0707\u0107\3\2\2\2\u0708\u0706\3\2\2\2\u0709\u070b\7\u012f"+
		"\2\2\u070a\u0709\3\2\2\2\u070a\u070b\3\2\2\2\u070b\u070c\3\2\2\2\u070c"+
		"\u070e\7\u00c3\2\2\u070d\u070f\t\37\2\2\u070e\u070d\3\2\2\2\u070e\u070f"+
		"\3\2\2\2\u070f\u0710\3\2\2\2\u0710\u0711\5\u010c\u0087\2\u0711\u0712\7"+
		"\u00ba\2\2\u0712\u0713\5\u010c\u0087\2\u0713\u074d\3\2\2\2\u0714\u0716"+
		"\7\u012f\2\2\u0715\u0714\3\2\2\2\u0715\u0716\3\2\2\2\u0716\u0717\3\2\2"+
		"\2\u0717\u0718\7\u010c\2\2\u0718\u0719\7\u0188\2\2\u0719\u071e\5\u0104"+
		"\u0083\2\u071a\u071b\7\u018c\2\2\u071b\u071d\5\u0104\u0083\2\u071c\u071a"+
		"\3\2\2\2\u071d\u0720\3\2\2\2\u071e\u071c\3\2\2\2\u071e\u071f\3\2\2\2\u071f"+
		"\u0721\3\2\2\2\u0720\u071e\3\2\2\2\u0721\u0722\7\u0189\2\2\u0722\u074d"+
		"\3\2\2\2\u0723\u0725\7\u012f\2\2\u0724\u0723\3\2\2\2\u0724\u0725\3\2\2"+
		"\2\u0725\u0726\3\2\2\2\u0726\u0727\7\u010c\2\2\u0727\u0728\7\u0188\2\2"+
		"\u0728\u0729\5\u00a0Q\2\u0729\u072a\7\u0189\2\2\u072a\u074d\3\2\2\2\u072b"+
		"\u072c\7\u00fa\2\2\u072c\u072d\7\u0188\2\2\u072d\u072e\5\u00a0Q\2\u072e"+
		"\u072f\7\u0189\2\2\u072f\u074d\3\2\2\2\u0730\u0732\7\u012f\2\2\u0731\u0730"+
		"\3\2\2\2\u0731\u0732\3\2\2\2\u0732\u0733\3\2\2\2\u0733\u0734\7\u0149\2"+
		"\2\u0734\u074d\5\u010c\u0087\2\u0735\u074d\5\u010a\u0086\2\u0736\u0738"+
		"\7\u0116\2\2\u0737\u0739\7\u012f\2\2\u0738\u0737\3\2\2\2\u0738\u0739\3"+
		"\2\2\2\u0739\u073a\3\2\2\2\u073a\u074d\t\36\2\2\u073b\u073d\7\u0116\2"+
		"\2\u073c\u073e\7\u012f\2\2\u073d\u073c\3\2\2\2\u073d\u073e\3\2\2\2\u073e"+
		"\u073f\3\2\2\2\u073f\u0740\7\u00f0\2\2\u0740\u0741\7\u0101\2\2\u0741\u074d"+
		"\5\u010c\u0087\2\u0742\u0744\7\u012f\2\2\u0743\u0742\3\2\2\2\u0743\u0744"+
		"\3\2\2\2\u0744\u0745\3\2\2\2\u0745\u0746\7\u0152\2\2\u0746\u0747\7\u0166"+
		"\2\2\u0747\u074a\5\u010c\u0087\2\u0748\u0749\7\u00f7\2\2\u0749\u074b\5"+
		"\u0170\u00b9\2\u074a\u0748\3\2\2\2\u074a\u074b\3\2\2\2\u074b\u074d\3\2"+
		"\2\2\u074c\u070a\3\2\2\2\u074c\u0715\3\2\2\2\u074c\u0724\3\2\2\2\u074c"+
		"\u072b\3\2\2\2\u074c\u0731\3\2\2\2\u074c\u0735\3\2\2\2\u074c\u0736\3\2"+
		"\2\2\u074c\u073b\3\2\2\2\u074c\u0743\3\2\2\2\u074d\u0109\3\2\2\2\u074e"+
		"\u0750\7\u012f\2\2\u074f\u074e\3\2\2\2\u074f\u0750\3\2\2\2\u0750\u0751"+
		"\3\2\2\2\u0751\u0752\7\u011d\2\2\u0752\u0760\t \2\2\u0753\u0754\7\u0188"+
		"\2\2\u0754\u0761\7\u0189\2\2\u0755\u0756\7\u0188\2\2\u0756\u075b\5\u0104"+
		"\u0083\2\u0757\u0758\7\u018c\2\2\u0758\u075a\5\u0104\u0083\2\u0759\u0757"+
		"\3\2\2\2\u075a\u075d\3\2\2\2\u075b\u0759\3\2\2\2\u075b\u075c\3\2\2\2\u075c"+
		"\u075e\3\2\2\2\u075d\u075b\3\2\2\2\u075e\u075f\7\u0189\2\2\u075f\u0761"+
		"\3\2\2\2\u0760\u0753\3\2\2\2\u0760\u0755\3\2\2\2\u0761\u076c\3\2\2\2\u0762"+
		"\u0764\7\u012f\2\2\u0763\u0762\3\2\2\2\u0763\u0764\3\2\2\2\u0764\u0765"+
		"\3\2\2\2\u0765\u0766\7\u011d\2\2\u0766\u0769\5\u010c\u0087\2\u0767\u0768"+
		"\7\u00f7\2\2\u0768\u076a\5\u0170\u00b9\2\u0769\u0767\3\2\2\2\u0769\u076a"+
		"\3\2\2\2\u076a\u076c\3\2\2\2\u076b\u074f\3\2\2\2\u076b\u0763\3\2\2\2\u076c"+
		"\u010b\3\2\2\2\u076d\u076e\b\u0087\1\2\u076e\u0772\5\u010e\u0088\2\u076f"+
		"\u0770\t!\2\2\u0770\u0772\5\u010c\u0087\n\u0771\u076d\3\2\2\2\u0771\u076f"+
		"\3\2\2\2\u0772\u078a\3\2\2\2\u0773\u0774\f\t\2\2\u0774\u0775\t\"\2\2\u0775"+
		"\u0789\5\u010c\u0087\n\u0776\u0777\f\b\2\2\u0777\u0778\t#\2\2\u0778\u0789"+
		"\5\u010c\u0087\t\u0779\u077a\f\7\2\2\u077a\u077b\7\u0183\2\2\u077b\u0789"+
		"\5\u010c\u0087\b\u077c\u077d\f\6\2\2\u077d\u077e\7\u0184\2\2\u077e\u0789"+
		"\5\u010c\u0087\7\u077f\u0780\f\5\2\2\u0780\u0781\7\u0182\2\2\u0781\u0789"+
		"\5\u010c\u0087\6\u0782\u0783\f\4\2\2\u0783\u0784\5\u0164\u00b3\2\u0784"+
		"\u0785\5\u010c\u0087\5\u0785\u0789\3\2\2\2\u0786\u0787\f\3\2\2\u0787\u0789"+
		"\7\u01a2\2\2\u0788\u0773\3\2\2\2\u0788\u0776\3\2\2\2\u0788\u0779\3\2\2"+
		"\2\u0788\u077c\3\2\2\2\u0788\u077f\3\2\2\2\u0788\u0782\3\2\2\2\u0788\u0786"+
		"\3\2\2\2\u0789\u078c\3\2\2\2\u078a\u0788\3\2\2\2\u078a\u078b\3\2\2\2\u078b"+
		"\u010d\3\2\2\2\u078c\u078a\3\2\2\2\u078d\u078e\b\u0088\1\2\u078e\u0790"+
		"\7\u00ce\2\2\u078f\u0791\5\u0146\u00a4\2\u0790\u078f\3\2\2\2\u0791\u0792"+
		"\3\2\2\2\u0792\u0790\3\2\2\2\u0792\u0793\3\2\2\2\u0793\u0796\3\2\2\2\u0794"+
		"\u0795\7\u00f4\2\2\u0795\u0797\5\u0104\u0083\2\u0796\u0794\3\2\2\2\u0796"+
		"\u0797\3\2\2\2\u0797\u0798\3\2\2\2\u0798\u0799\7\u00f5\2\2\u0799\u07fb"+
		"\3\2\2\2\u079a\u079b\7\u00ce\2\2\u079b\u079d\5\u0104\u0083\2\u079c\u079e"+
		"\5\u0146\u00a4\2\u079d\u079c\3\2\2\2\u079e\u079f\3\2\2\2\u079f\u079d\3"+
		"\2\2\2\u079f\u07a0\3\2\2\2\u07a0\u07a3\3\2\2\2\u07a1\u07a2\7\u00f4\2\2"+
		"\u07a2\u07a4\5\u0104\u0083\2\u07a3\u07a1\3\2\2\2\u07a3\u07a4\3\2\2\2\u07a4"+
		"\u07a5\3\2\2\2\u07a5\u07a6\7\u00f5\2\2\u07a6\u07fb\3\2\2\2\u07a7\u07a8"+
		"\7\u00cf\2\2\u07a8\u07a9\7\u0188\2\2\u07a9\u07aa\5\u0104\u0083\2\u07aa"+
		"\u07ab\7\u00be\2\2\u07ab\u07ac\5:\36\2\u07ac\u07ad\7\u0189\2\2\u07ad\u07fb"+
		"\3\2\2\2\u07ae\u07af\7\61\2\2\u07af\u07b0\7\u0188\2\2\u07b0\u07b3\5\u0104"+
		"\u0083\2\u07b1\u07b2\7@\2\2\u07b2\u07b4\7[\2\2\u07b3\u07b1\3\2\2\2\u07b3"+
		"\u07b4\3\2\2\2\u07b4\u07b5\3\2\2\2\u07b5\u07b6\7\u0189\2\2\u07b6\u07fb"+
		"\3\2\2\2\u07b7\u07b8\7M\2\2\u07b8\u07b9\7\u0188\2\2\u07b9\u07bc\5\u0104"+
		"\u0083\2\u07ba\u07bb\7@\2\2\u07bb\u07bd\7[\2\2\u07bc\u07ba\3\2\2\2\u07bc"+
		"\u07bd\3\2\2\2\u07bd\u07be\3\2\2\2\u07be\u07bf\7\u0189\2\2\u07bf\u07fb"+
		"\3\2\2\2\u07c0\u07c1\7\u0141\2\2\u07c1\u07c2\7\u0188\2\2\u07c2\u07c3\5"+
		"\u010c\u0087\2\u07c3\u07c4\7\u010c\2\2\u07c4\u07c5\5\u010c\u0087\2\u07c5"+
		"\u07c6\7\u0189\2\2\u07c6\u07fb\3\2\2\2\u07c7\u07fb\5\u016c\u00b7\2\u07c8"+
		"\u07fb\7\u0193\2\2\u07c9\u07ca\5\u0152\u00aa\2\u07ca\u07cb\7\u0185\2\2"+
		"\u07cb\u07cc\7\u0193\2\2\u07cc\u07fb\3\2\2\2\u07cd\u07ce\7\u0188\2\2\u07ce"+
		"\u07cf\5\u00a0Q\2\u07cf\u07d0\7\u0189\2\2\u07d0\u07fb\3\2\2\2\u07d1\u07d2"+
		"\5\u011a\u008e\2\u07d2\u07de\7\u0188\2\2\u07d3\u07d5\5\u0176\u00bc\2\u07d4"+
		"\u07d3\3\2\2\2\u07d4\u07d5\3\2\2\2\u07d5\u07d6\3\2\2\2\u07d6\u07db\5\u011c"+
		"\u008f\2\u07d7\u07d8\7\u018c\2\2\u07d8\u07da\5\u011c\u008f\2\u07d9\u07d7"+
		"\3\2\2\2\u07da\u07dd\3\2\2\2\u07db\u07d9\3\2\2\2\u07db\u07dc\3\2\2\2\u07dc"+
		"\u07df\3\2\2\2\u07dd\u07db\3\2\2\2\u07de\u07d4\3\2\2\2\u07de\u07df\3\2"+
		"\2\2\u07df\u07e0\3\2\2\2\u07e0\u07e1\7\u0189\2\2\u07e1\u07fb\3\2\2\2\u07e2"+
		"\u07e3\5\u011a\u008e\2\u07e3\u07e4\7\u0188\2\2\u07e4\u07e5\5\u011c\u008f"+
		"\2\u07e5\u07e6\7\u0166\2\2\u07e6\u07e7\5\u011c\u008f\2\u07e7\u07e8\7\u0189"+
		"\2\2\u07e8\u07fb\3\2\2\2\u07e9\u07ea\5\u011a\u008e\2\u07ea\u07ec\7\u0188"+
		"\2\2\u07eb\u07ed\5\u0176\u00bc\2\u07ec\u07eb\3\2\2\2\u07ec\u07ed\3\2\2"+
		"\2\u07ed\u07ee\3\2\2\2\u07ee\u07ef\5\u011c\u008f\2\u07ef\u07f1\7\u0189"+
		"\2\2\u07f0\u07f2\5\u011e\u0090\2\u07f1\u07f0\3\2\2\2\u07f1\u07f2\3\2\2"+
		"\2\u07f2\u07fb\3\2\2\2\u07f3\u07fb\5\u013e\u00a0\2\u07f4\u07fb\5\u0120"+
		"\u0091\2\u07f5\u07f6\7\u0188\2\2\u07f6\u07f7\5\u0104\u0083\2\u07f7\u07f8"+
		"\7\u0189\2\2\u07f8\u07fb\3\2\2\2\u07f9\u07fb\5\u0110\u0089\2\u07fa\u078d"+
		"\3\2\2\2\u07fa\u079a\3\2\2\2\u07fa\u07a7\3\2\2\2\u07fa\u07ae\3\2\2\2\u07fa"+
		"\u07b7\3\2\2\2\u07fa\u07c0\3\2\2\2\u07fa\u07c7\3\2\2\2\u07fa\u07c8\3\2"+
		"\2\2\u07fa\u07c9\3\2\2\2\u07fa\u07cd\3\2\2\2\u07fa\u07d1\3\2\2\2\u07fa"+
		"\u07e2\3\2\2\2\u07fa\u07e9\3\2\2\2\u07fa\u07f3\3\2\2\2\u07fa\u07f4\3\2"+
		"\2\2\u07fa\u07f5\3\2\2\2\u07fa\u07f9\3\2\2\2\u07fb\u0803\3\2\2\2\u07fc"+
		"\u07fd\f\7\2\2\u07fd\u07fe\7\u0186\2\2\u07fe\u07ff\5\u010c\u0087\2\u07ff"+
		"\u0800\7\u0187\2\2\u0800\u0802\3\2\2\2\u0801\u07fc\3\2\2\2\u0802\u0805"+
		"\3\2\2\2\u0803\u0801\3\2\2\2\u0803\u0804\3\2\2\2\u0804\u010f\3\2\2\2\u0805"+
		"\u0803\3\2\2\2\u0806\u080a\5\u0112\u008a\2\u0807\u080a\5\u0114\u008b\2"+
		"\u0808\u080a\5\u0116\u008c\2\u0809\u0806\3\2\2\2\u0809\u0807\3\2\2\2\u0809"+
		"\u0808\3\2\2\2\u080a\u0111\3\2\2\2\u080b\u080c\7\u00bd\2\2\u080c\u080d"+
		"\7\u0186\2\2\u080d\u0812\5\u0118\u008d\2\u080e\u080f\7\u018c\2\2\u080f"+
		"\u0811\5\u0118\u008d\2\u0810\u080e\3\2\2\2\u0811\u0814\3\2\2\2\u0812\u0810"+
		"\3\2\2\2\u0812\u0813\3\2\2\2\u0813\u0815\3\2\2\2\u0814\u0812\3\2\2\2\u0815"+
		"\u0816\7\u0187\2\2\u0816\u0113\3\2\2\2\u0817\u0818\7\u014c\2\2\u0818\u0819"+
		"\7\u0188\2\2\u0819\u081e\5\u0118\u008d\2\u081a\u081b\7\u018c\2\2\u081b"+
		"\u081d\5\u0118\u008d\2\u081c\u081a\3\2\2\2\u081d\u0820\3\2\2\2\u081e\u081c"+
		"\3\2\2\2\u081e\u081f\3\2\2\2\u081f\u0821\3\2\2\2\u0820\u081e\3\2\2\2\u0821"+
		"\u0822\7\u0189\2\2\u0822\u0115\3\2\2\2\u0823\u0824\7Q\2\2\u0824\u0825"+
		"\7\u0186\2\2\u0825\u0826\5\u0118\u008d\2\u0826\u0827\7\u018c\2\2\u0827"+
		"\u0828\5\u0118\u008d\2\u0828\u0829\7\u0187\2\2\u0829\u0117\3\2\2\2\u082a"+
		"\u082d\5\u0132\u009a\2\u082b\u082d\5\u0110\u0089\2\u082c\u082a\3\2\2\2"+
		"\u082c\u082b\3\2\2\2\u082d\u0119\3\2\2\2\u082e\u0832\5\u017e\u00c0\2\u082f"+
		"\u0832\5\u0182\u00c2\2\u0830\u0832\5\u0152\u00aa\2\u0831\u082e\3\2\2\2"+
		"\u0831\u082f\3\2\2\2\u0831\u0830\3\2\2\2\u0832\u011b\3\2\2\2\u0833\u0839"+
		"\5\u017c\u00bf\2\u0834\u0839\5\u017a\u00be\2\u0835\u0839\5\u0178\u00bd"+
		"\2\u0836\u0839\5\u0104\u0083\2\u0837\u0839\5\u011e\u0090\2\u0838\u0833"+
		"\3\2\2\2\u0838\u0834\3\2\2\2\u0838\u0835\3\2\2\2\u0838\u0836\3\2\2\2\u0838"+
		"\u0837\3\2\2\2\u0839\u011d\3\2\2\2\u083a\u083b\7.\2\2\u083b\u083c\7\u0188"+
		"\2\2\u083c\u083d\7\u0177\2\2\u083d\u083e\5\u0106\u0084\2\u083e\u083f\7"+
		"\u0189\2\2\u083f\u011f\3\2\2\2\u0840\u0841\5\u0152\u00aa\2\u0841\u0121"+
		"\3\2\2\2\u0842\u0843\5\u013e\u00a0\2\u0843\u0123\3\2\2\2\u0844\u0847\5"+
		"\u013e\u00a0\2\u0845\u0847\5\u0120\u0091\2\u0846\u0844\3\2\2\2\u0846\u0845"+
		"\3\2\2\2\u0847\u0125\3\2\2\2\u0848\u084b\7\u0114\2\2\u0849\u084c\5\u0128"+
		"\u0095\2\u084a\u084c\5\u012c\u0097\2\u084b\u0849\3\2\2\2\u084b\u084a\3"+
		"\2\2\2\u084b\u084c\3\2\2\2\u084c\u0127\3\2\2\2\u084d\u084f\5\u012a\u0096"+
		"\2\u084e\u0850\5\u012e\u0098\2\u084f\u084e\3\2\2\2\u084f\u0850\3\2\2\2"+
		"\u0850\u0129\3\2\2\2\u0851\u0852\5\u0130\u0099\2\u0852\u0853\5\u017a\u00be"+
		"\2\u0853\u0855\3\2\2\2\u0854\u0851\3\2\2\2\u0855\u0856\3\2\2\2\u0856\u0854"+
		"\3\2\2\2\u0856\u0857\3\2\2\2\u0857\u012b\3\2\2\2\u0858\u085b\5\u012e\u0098"+
		"\2\u0859\u085c\5\u012a\u0096\2\u085a\u085c\5\u012e\u0098\2\u085b\u0859"+
		"\3\2\2\2\u085b\u085a\3\2\2\2\u085b\u085c\3\2\2\2\u085c\u012d\3\2\2\2\u085d"+
		"\u085e\5\u0130\u0099\2\u085e\u085f\5\u017a\u00be\2\u085f\u0860\7\u0166"+
		"\2\2\u0860\u0861\5\u017a\u00be\2\u0861\u012f\3\2\2\2\u0862\u0864\t$\2"+
		"\2\u0863\u0862\3\2\2\2\u0863\u0864\3\2\2\2\u0864\u0865\3\2\2\2\u0865\u0868"+
		"\t%\2\2\u0866\u0868\7\u019d\2\2\u0867\u0863\3\2\2\2\u0867\u0866\3\2\2"+
		"\2\u0868\u0131\3\2\2\2\u0869\u086b\7\u00be\2\2\u086a\u0869\3\2\2\2\u086a"+
		"\u086b\3\2\2\2\u086b\u086c\3\2\2\2\u086c\u086e\5\u013e\u00a0\2\u086d\u086f"+
		"\5\u013a\u009e\2\u086e\u086d\3\2\2\2\u086e\u086f\3\2\2\2\u086f\u0133\3"+
		"\2\2\2\u0870\u0872\7\u00be\2\2\u0871\u0870\3\2\2\2\u0871\u0872\3\2\2\2"+
		"\u0872\u0873\3\2\2\2\u0873\u0875\5\u013e\u00a0\2\u0874\u0876\5\u013a\u009e"+
		"\2\u0875\u0874\3\2\2\2\u0875\u0876\3\2\2\2\u0876\u0135\3\2\2\2\u0877\u0878"+
		"\5\u013e\u00a0\2\u0878\u0879\5\u0138\u009d\2\u0879\u0137\3\2\2\2\u087a"+
		"\u087b\7\u0125\2\2\u087b\u087d\5\u013e\u00a0\2\u087c\u087a\3\2\2\2\u087d"+
		"\u087e\3\2\2\2\u087e\u087c\3\2\2\2\u087e\u087f\3\2\2\2\u087f\u0882\3\2"+
		"\2\2\u0880\u0882\3\2\2\2\u0881\u087c\3\2\2\2\u0881\u0880\3\2\2\2\u0882"+
		"\u0139\3\2\2\2\u0883\u0884\7\u0188\2\2\u0884\u0885\5\u013c\u009f\2\u0885"+
		"\u0886\7\u0189\2\2\u0886\u013b\3\2\2\2\u0887\u088c\5\u013e\u00a0\2\u0888"+
		"\u0889\7\u018c\2\2\u0889\u088b\5\u013e\u00a0\2\u088a\u0888\3\2\2\2\u088b"+
		"\u088e\3\2\2\2\u088c\u088a\3\2\2\2\u088c\u088d\3\2\2\2\u088d\u013d\3\2"+
		"\2\2\u088e\u088c\3\2\2\2\u088f\u0894\5\u0142\u00a2\2\u0890\u0894\5\u0144"+
		"\u00a3\2\u0891\u0894\5\u0182\u00c2\2\u0892\u0894\5\u0140\u00a1\2\u0893"+
		"\u088f\3\2\2\2\u0893\u0890\3\2\2\2\u0893\u0891\3\2\2\2\u0893\u0892\3\2"+
		"\2\2\u0894\u013f\3\2\2\2\u0895\u0896\7\3\2\2\u0896\u0897\7\u018a\2\2\u0897"+
		"\u0898\5\u0142\u00a2\2\u0898\u0899\7\u018b\2\2\u0899\u0141\3\2\2\2\u089a"+
		"\u089b\t&\2\2\u089b\u0143\3\2\2\2\u089c\u089d\7\u019d\2\2\u089d\u0145"+
		"\3\2\2\2\u089e\u089f\7\u0176\2\2\u089f\u08a0\5\u0104\u0083\2\u08a0\u08a1"+
		"\7\u015f\2\2\u08a1\u08a2\5\u0104\u0083\2\u08a2\u0147\3\2\2\2\u08a3\u08a4"+
		"\5\u0152\u00aa\2\u08a4\u0149\3\2\2\2\u08a5\u08a6\5\u0152\u00aa\2\u08a6"+
		"\u014b\3\2\2\2\u08a7\u08a8\5\u0152\u00aa\2\u08a8\u014d\3\2\2\2\u08a9\u08aa"+
		"\5\u0152\u00aa\2\u08aa\u014f\3\2\2\2\u08ab\u08ac\5\u0152\u00aa\2\u08ac"+
		"\u0151\3\2\2\2\u08ad\u08b2\5\u013e\u00a0\2\u08ae\u08af\7\u0185\2\2\u08af"+
		"\u08b1\5\u013e\u00a0\2\u08b0\u08ae\3\2\2\2\u08b1\u08b4\3\2\2\2\u08b2\u08b3"+
		"\3\2\2\2\u08b2\u08b0\3\2\2\2\u08b3\u0153\3\2\2\2\u08b4\u08b2\3\2\2\2\u08b5"+
		"\u08b6\7\u0179\2\2\u08b6\u08b7\5\u015a\u00ae\2\u08b7\u0155\3\2\2\2\u08b8"+
		"\u08b9\7?\2\2\u08b9\u08ba\7\u012f\2\2\u08ba\u08bb\7\u00fa\2\2\u08bb\u0157"+
		"\3\2\2\2\u08bc\u08bd\7?\2\2\u08bd\u08be\7\u00fa\2\2\u08be\u0159\3\2\2"+
		"\2\u08bf\u08c0\7\u0188\2\2\u08c0\u08c5\5\u015c\u00af\2\u08c1\u08c2\7\u018c"+
		"\2\2\u08c2\u08c4\5\u015c\u00af\2\u08c3\u08c1\3\2\2\2\u08c4\u08c7\3\2\2"+
		"\2\u08c5\u08c3\3\2\2\2\u08c5\u08c6\3\2\2\2\u08c6\u08c8\3\2\2\2\u08c7\u08c5"+
		"\3\2\2\2\u08c8\u08c9\7\u0189\2\2\u08c9\u015b\3\2\2\2\u08ca\u08cf\5\u015e"+
		"\u00b0\2\u08cb\u08cd\7\u017d\2\2\u08cc\u08cb\3\2\2\2\u08cc\u08cd\3\2\2"+
		"\2\u08cd\u08ce\3\2\2\2\u08ce\u08d0\5\u0160\u00b1\2\u08cf\u08cc\3\2\2\2"+
		"\u08cf\u08d0\3\2\2\2\u08d0\u015d\3\2\2\2\u08d1\u08d5\5\u013e\u00a0\2\u08d2"+
		"\u08d5\5\u0120\u0091\2\u08d3\u08d5\7\u019d\2\2\u08d4\u08d1\3\2\2\2\u08d4"+
		"\u08d2\3\2\2\2\u08d4\u08d3\3\2\2\2\u08d5\u015f\3\2\2\2\u08d6\u08db\7\u019e"+
		"\2\2\u08d7\u08db\7\u019f\2\2\u08d8\u08db\5\u0174\u00bb\2\u08d9\u08db\7"+
		"\u019d\2\2\u08da\u08d6\3\2\2\2\u08da\u08d7\3\2\2\2\u08da\u08d8\3\2\2\2"+
		"\u08da\u08d9\3\2\2\2\u08db\u0161\3\2\2\2\u08dc\u08e3\7\u00ba\2\2\u08dd"+
		"\u08de\7\u0183\2\2\u08de\u08e3\7\u0183\2\2\u08df\u08e3\7\u0136\2\2\u08e0"+
		"\u08e1\7\u0182\2\2\u08e1\u08e3\7\u0182\2\2\u08e2\u08dc\3\2\2\2\u08e2\u08dd"+
		"\3\2\2\2\u08e2\u08df\3\2\2\2\u08e2\u08e0\3\2\2\2\u08e3\u0163\3\2\2\2\u08e4"+
		"\u08f3\7\u017d\2\2\u08e5\u08f3\7\u017e\2\2\u08e6\u08f3\7\u017f\2\2\u08e7"+
		"\u08e8\7\u017f\2\2\u08e8\u08f3\7\u017d\2\2\u08e9\u08ea\7\u017e\2\2\u08ea"+
		"\u08f3\7\u017d\2\2\u08eb\u08ec\7\u017f\2\2\u08ec\u08f3\7\u017e\2\2\u08ed"+
		"\u08ee\7\u0180\2\2\u08ee\u08f3\7\u017d\2\2\u08ef\u08f0\7\u017f\2\2\u08f0"+
		"\u08f1\7\u017d\2\2\u08f1\u08f3\7\u017e\2\2\u08f2\u08e4\3\2\2\2\u08f2\u08e5"+
		"\3\2\2\2\u08f2\u08e6\3\2\2\2\u08f2\u08e7\3\2\2\2\u08f2\u08e9\3\2\2\2\u08f2"+
		"\u08eb\3\2\2\2\u08f2\u08ed\3\2\2\2\u08f2\u08ef\3\2\2\2\u08f3\u0165\3\2"+
		"\2\2\u08f4\u08f5\7\u017f\2\2\u08f5\u08fc\7\u017f\2\2\u08f6\u08f7\7\u017e"+
		"\2\2\u08f7\u08fc\7\u017e\2\2\u08f8\u08fc\7\u0183\2\2\u08f9\u08fc\7\u0184"+
		"\2\2\u08fa\u08fc\7\u0182\2\2\u08fb\u08f4\3\2\2\2\u08fb\u08f6\3\2\2\2\u08fb"+
		"\u08f8\3\2\2\2\u08fb\u08f9\3\2\2\2\u08fb\u08fa\3\2\2\2\u08fc\u0167\3\2"+
		"\2\2\u08fd\u08fe\t\'\2\2\u08fe\u0169\3\2\2\2\u08ff\u0900\t(\2\2\u0900"+
		"\u016b\3\2\2\2\u0901\u0910\5\u0126\u0094\2\u0902\u0910\5\u016e\u00b8\2"+
		"\u0903\u0910\5\u0170\u00b9\2\u0904\u0906\7\u0195\2\2\u0905\u0904\3\2\2"+
		"\2\u0905\u0906\3\2\2\2\u0906\u0907\3\2\2\2\u0907\u0910\5\u0172\u00ba\2"+
		"\u0908\u0910\5\u0174\u00bb\2\u0909\u0910\7\u019f\2\2\u090a\u0910\7\u01a0"+
		"\2\2\u090b\u090d\7\u012f\2\2\u090c\u090b\3\2\2\2\u090c\u090d\3\2\2\2\u090d"+
		"\u090e\3\2\2\2\u090e\u0910\7\u0130\2\2\u090f\u0901\3\2\2\2\u090f\u0902"+
		"\3\2\2\2\u090f\u0903\3\2\2\2\u090f\u0905\3\2\2\2\u090f\u0908\3\2\2\2\u090f"+
		"\u0909\3\2\2\2\u090f\u090a\3\2\2\2\u090f\u090c\3\2\2\2\u0910\u016d\3\2"+
		"\2\2\u0911\u0912\5\u0178\u00bd\2\u0912\u0913\5\u0170\u00b9\2\u0913\u016f"+
		"\3\2\2\2\u0914\u0915\7\u019d\2\2\u0915\u0171\3\2\2\2\u0916\u0917\7\u019e"+
		"\2\2\u0917\u0173\3\2\2\2\u0918\u0919\t)\2\2\u0919\u0175\3\2\2\2\u091a"+
		"\u091b\t*\2\2\u091b\u0177\3\2\2\2\u091c\u091d\t+\2\2\u091d\u0179\3\2\2"+
		"\2\u091e\u091f\t,\2\2\u091f\u017b\3\2\2\2\u0920\u0921\t-\2\2\u0921\u017d"+
		"\3\2\2\2\u0922\u0923\t.\2\2\u0923\u017f\3\2\2\2\u0924\u0925\t/\2\2\u0925"+
		"\u0181\3\2\2\2\u0926\u0927\t\60\2\2\u0927\u0183\3\2\2\2\u010e\u018d\u018f"+
		"\u01b5\u01c7\u01cb\u01d4\u01d9\u01e0\u01eb\u01f4\u0200\u0203\u020a\u0212"+
		"\u0217\u021a\u0221\u0229\u022d\u0236\u023a\u023e\u0242\u024b\u0250\u0254"+
		"\u0258\u025c\u025f\u0263\u0268\u026e\u0273\u0278\u027b\u027f\u0287\u028f"+
		"\u0293\u0297\u029b\u029f\u02a3\u02a7\u02ab\u02af\u02b3\u02b7\u02bb\u02bf"+
		"\u02c3\u02c7\u02cb\u02cf\u02d3\u02d5\u02df\u02e7\u02f1\u0306\u030d\u0313"+
		"\u0316\u0319\u0323\u0326\u032e\u033a\u0352\u035f\u0364\u0368\u0370\u0374"+
		"\u037a\u0384\u0388\u038b\u038f\u0393\u0397\u039a\u03a3\u03a7\u03ae\u03b1"+
		"\u03bb\u03c3\u03cb\u03cf\u03de\u03f1\u03fc\u0400\u0407\u040c\u0412\u0416"+
		"\u041d\u0421\u0425\u0429\u0431\u0435\u043a\u0440\u0446\u0449\u044d\u0458"+
		"\u0461\u046f\u047b\u048a\u048d\u0491\u0494\u0496\u049b\u049f\u04a2\u04a6"+
		"\u04af\u04b8\u04c2\u04c7\u04d3\u04d6\u04d9\u04dc\u04e2\u04e6\u04ee\u04f1"+
		"\u04f6\u04f9\u04fb\u0509\u0514\u0519\u0521\u0524\u0527\u052c\u0530\u0533"+
		"\u0536\u053b\u0541\u0544\u0546\u054b\u054e\u0552\u0555\u0558\u0564\u056b"+
		"\u057b\u0588\u0592\u05ad\u05c3\u05d5\u05da\u05e6\u05f3\u05ff\u060b\u0610"+
		"\u062b\u0633\u0637\u063a\u063d\u0644\u0647\u064a\u064d\u0650\u0653\u0658"+
		"\u065b\u0664\u0669\u066d\u0672\u067b\u068e\u0696\u069e\u06a2\u06a6\u06b0"+
		"\u06ca\u06d2\u06de\u06f4\u06f6\u0701\u0704\u0706\u070a\u070e\u0715\u071e"+
		"\u0724\u0731\u0738\u073d\u0743\u074a\u074c\u074f\u075b\u0760\u0763\u0769"+
		"\u076b\u0771\u0788\u078a\u0792\u0796\u079f\u07a3\u07b3\u07bc\u07d4\u07db"+
		"\u07de\u07ec\u07f1\u07fa\u0803\u0809\u0812\u081e\u082c\u0831\u0838\u0846"+
		"\u084b\u084f\u0856\u085b\u0863\u0867\u086a\u086e\u0871\u0875\u087e\u0881"+
		"\u088c\u0893\u08b2\u08c5\u08cc\u08cf\u08d4\u08da\u08e2\u08f2\u08fb\u0905"+
		"\u090c\u090f";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}