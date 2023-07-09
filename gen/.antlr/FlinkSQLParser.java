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
		KW_EXTENDED=43, KW_FILE=44, KW_FINAL=45, KW_FIRST=46, KW_FOLLOWING=47, 
		KW_FORMAT=48, KW_FORTRAN=49, KW_FOUND=50, KW_FRAC_SECOND=51, KW_FUNCTIONS=52, 
		KW_GENERAL=53, KW_GENERATED=54, KW_GO=55, KW_GOTO=56, KW_GRANTED=57, KW_HOP=58, 
		KW_HOURS=59, KW_IF=60, KW_IGNORE=61, KW_INCREMENT=62, KW_INPUT=63, KW_INVOKER=64, 
		KW_JAR=65, KW_JARS=66, KW_JAVA=67, KW_JSON=68, KW_JSON_EXECUTION_PLAN=69, 
		KW_KEY=70, KW_KEY_MEMBER=71, KW_KEY_TYPE=72, KW_LABEL=73, KW_LAST=74, 
		KW_LENGTH=75, KW_LEVEL=76, KW_LOAD=77, KW_MAP=78, KW_MICROSECOND=79, KW_MILLENNIUM=80, 
		KW_MILLISECOND=81, KW_MINUTES=82, KW_MINVALUE=83, KW_MODIFY=84, KW_MODULES=85, 
		KW_MONTHS=86, KW_NANOSECOND=87, KW_NULLS=88, KW_NUMBER=89, KW_OPTION=90, 
		KW_OPTIONS=91, KW_ORDERING=92, KW_OUTPUT=93, KW_OVERWRITE=94, KW_OVERWRITING=95, 
		KW_PARTITIONED=96, KW_PARTITIONS=97, KW_PASSING=98, KW_PAST=99, KW_PATH=100, 
		KW_PLACING=101, KW_PLAN=102, KW_PRECEDING=103, KW_PRESERVE=104, KW_PRIOR=105, 
		KW_PRIVILEGES=106, KW_PUBLIC=107, KW_PYTHON=108, KW_PYTHON_FILES=109, 
		KW_PYTHON_REQUIREMENTS=110, KW_PYTHON_DEPENDENCIES=111, KW_PYTHON_JAR=112, 
		KW_PYTHON_ARCHIVES=113, KW_PYTHON_PARAMETER=114, KW_QUARTER=115, KW_RAW=116, 
		KW_READ=117, KW_RELATIVE=118, KW_REMOVE=119, KW_RENAME=120, KW_REPLACE=121, 
		KW_RESPECT=122, KW_RESTART=123, KW_RESTRICT=124, KW_ROLE=125, KW_ROW_COUNT=126, 
		KW_SCALA=127, KW_SCALAR=128, KW_SCALE=129, KW_SCHEMA=130, KW_SECONDS=131, 
		KW_SECTION=132, KW_SECURITY=133, KW_SELF=134, KW_SERVER=135, KW_SERVER_NAME=136, 
		KW_SESSION=137, KW_SETS=138, KW_SIMPLE=139, KW_SIZE=140, KW_SLIDE=141, 
		KW_SOURCE=142, KW_SPACE=143, KW_STATE=144, KW_STATEMENT=145, KW_STEP=146, 
		KW_STRING=147, KW_STRUCTURE=148, KW_STYLE=149, KW_TABLES=150, KW_TEMPORARY=151, 
		KW_TIMECOL=152, KW_FLOOR=153, KW_TIMESTAMP_LTZ=154, KW_TIMESTAMPADD=155, 
		KW_TIMESTAMPDIFF=156, KW_TRANSFORM=157, KW_TUMBLE=158, KW_TYPE=159, KW_UNDER=160, 
		KW_UNLOAD=161, KW_USAGE=162, KW_USE=163, KW_UTF16=164, KW_UTF32=165, KW_UTF8=166, 
		KW_VERSION=167, KW_VIEW=168, KW_VIEWS=169, KW_VIRTUAL=170, KW_WATERMARK=171, 
		KW_WATERMARKS=172, KW_WEEK=173, KW_WEEKS=174, KW_WORK=175, KW_WRAPPER=176, 
		KW_YEARS=177, KW_ZONE=178, KW_ABS=179, KW_ALL=180, KW_ALLOW=181, KW_ALTER=182, 
		KW_AND=183, KW_ANY=184, KW_ARE=185, KW_ARRAY=186, KW_AS=187, KW_ASYMMETRIC=188, 
		KW_AT=189, KW_AVG=190, KW_BEGIN=191, KW_BETWEEN=192, KW_BIGINT=193, KW_BINARY=194, 
		KW_BIT=195, KW_BLOB=196, KW_BOOLEAN=197, KW_BOTH=198, KW_BY=199, KW_CALL=200, 
		KW_CALLED=201, KW_CASCADED=202, KW_CASE=203, KW_CAST=204, KW_CEIL=205, 
		KW_CHAR=206, KW_CHARACTER=207, KW_CHECK=208, KW_CLOB=209, KW_CLOSE=210, 
		KW_COALESCE=211, KW_COLLATE=212, KW_COLLECT=213, KW_COLUMN=214, KW_COMMIT=215, 
		KW_CONNECT=216, KW_CONSTRAINT=217, KW_CONTAINS=218, KW_CONVERT=219, KW_COUNT=220, 
		KW_CREATE=221, KW_CROSS=222, KW_CUBE=223, KW_CURRENT=224, KW_CURSOR=225, 
		KW_CYCLE=226, KW_DATE=227, KW_DATETIME=228, KW_DAY=229, KW_DEC=230, KW_DECIMAL=231, 
		KW_DECLARE=232, KW_DEFAULT=233, KW_DEFINE=234, KW_DELETE=235, KW_DESCRIBE=236, 
		KW_DISTINCT=237, KW_DOUBLE=238, KW_DROP=239, KW_EACH=240, KW_ELSE=241, 
		KW_END=242, KW_EQUALS=243, KW_ESCAPE=244, KW_EXCEPT=245, KW_EXECUTE=246, 
		KW_EXISTS=247, KW_EXPLAIN=248, KW_EXTERNAL=249, KW_EXTRACT=250, KW_FALSE=251, 
		KW_FLOAT=252, KW_FOR=253, KW_FROM=254, KW_FULL=255, KW_FUNCTION=256, KW_GLOBAL=257, 
		KW_GRANT=258, KW_GROUP=259, KW_GROUPING=260, KW_GROUPS=261, KW_HAVING=262, 
		KW_HOUR=263, KW_IMPORT=264, KW_IN=265, KW_INCLUDING=266, KW_INNER=267, 
		KW_INOUT=268, KW_INSERT=269, KW_INT=270, KW_INTEGER=271, KW_INTERSECT=272, 
		KW_INTERVAL=273, KW_INTO=274, KW_IS=275, KW_JOIN=276, KW_LAG=277, KW_LANGUAGE=278, 
		KW_LATERAL=279, KW_LEADING=280, KW_LEFT=281, KW_LIKE=282, KW_LIMIT=283, 
		KW_LOCAL=284, KW_MATCH=285, KW_MATCH_RECOGNIZE=286, KW_MEASURES=287, KW_MERGE=288, 
		KW_METADATA=289, KW_MINUS=290, KW_MINUTE=291, KW_MODIFIES=292, KW_MODULE=293, 
		KW_MONTH=294, KW_MULTISET=295, KW_NATURAL=296, KW_NEXT=297, KW_NO=298, 
		KW_NONE=299, KW_NOT=300, KW_NULL=301, KW_NUMERIC=302, KW_OF=303, KW_OFFSET=304, 
		KW_ON=305, KW_ONE=306, KW_OR=307, KW_ORDER=308, KW_OUT=309, KW_OUTER=310, 
		KW_OVER=311, KW_OVERLAY=312, KW_PARTITION=313, KW_PATTERN=314, KW_PER=315, 
		KW_PERCENT=316, KW_PERIOD=317, KW_POSITION=318, KW_POWER=319, KW_PRIMARY=320, 
		KW_RANGE=321, KW_RANK=322, KW_RESET=323, KW_REVOKE=324, KW_RIGHT=325, 
		KW_RLIKE=326, KW_ROLLBACK=327, KW_ROLLUP=328, KW_ROW=329, KW_ROWS=330, 
		KW_SECOND=331, KW_SELECT=332, KW_SET=333, KW_SHOW=334, KW_SIMILAR=335, 
		KW_SKIP=336, KW_SMALLINT=337, KW_START=338, KW_STATIC=339, KW_SUBSTRING=340, 
		KW_SUM=341, KW_SYMMETRIC=342, KW_SYSTEM=343, KW_SYSTEM_TIME=344, KW_SYSTEM_USER=345, 
		KW_TABLE=346, KW_TABLESAMPLE=347, KW_THEN=348, KW_TIME=349, KW_TIMESTAMP=350, 
		KW_TIMESTAMP_3=351, KW_TIMESTAMP_6=352, KW_TIMESTAMP_9=353, KW_TINYINT=354, 
		KW_TO=355, KW_TRAILING=356, KW_TRUE=357, KW_TRUNCATE=358, KW_UNION=359, 
		KW_UNIQUE=360, KW_UNKNOWN=361, KW_UNNEST=362, KW_UPPER=363, KW_UPSERT=364, 
		KW_USER=365, KW_USING=366, KW_VALUE=367, KW_VALUES=368, KW_VARBINARY=369, 
		KW_VARCHAR=370, KW_WHEN=371, KW_WHERE=372, KW_WINDOW=373, KW_WITH=374, 
		KW_WITHIN=375, KW_WITHOUT=376, KW_YEAR=377, EQUAL_SYMBOL=378, GREATER_SYMBOL=379, 
		LESS_SYMBOL=380, EXCLAMATION_SYMBOL=381, BIT_NOT_OP=382, BIT_OR_OP=383, 
		BIT_AND_OP=384, BIT_XOR_OP=385, DOT=386, LS_BRACKET=387, RS_BRACKET=388, 
		LR_BRACKET=389, RR_BRACKET=390, LB_BRACKET=391, RB_BRACKET=392, COMMA=393, 
		SEMICOLON=394, AT_SIGN=395, SINGLE_QUOTE_SYMB=396, DOUBLE_QUOTE_SYMB=397, 
		REVERSE_QUOTE_SYMB=398, COLON_SYMB=399, ASTERISK_SIGN=400, UNDERLINE_SIGN=401, 
		HYPNEN_SIGN=402, ADD_SIGN=403, PENCENT_SIGN=404, DOUBLE_VERTICAL_SIGN=405, 
		DOUBLE_HYPNEN_SIGN=406, SLASH_SIGN=407, QUESTION_MARK_SIGN=408, DOUBLE_RIGHT_ARROW=409, 
		STRING_LITERAL=410, DIG_LITERAL=411, REAL_LITERAL=412, BIT_STRING=413, 
		ID_LITERAL=414, SLASH_TEXT=415;
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
		RULE_functionName = 135, RULE_functionParam = 136, RULE_dereferenceDefinition = 137, 
		RULE_correlationName = 138, RULE_qualifiedName = 139, RULE_timeIntervalExpression = 140, 
		RULE_errorCapturingMultiUnitsInterval = 141, RULE_multiUnitsInterval = 142, 
		RULE_errorCapturingUnitToUnitInterval = 143, RULE_unitToUnitInterval = 144, 
		RULE_intervalValue = 145, RULE_columnAlias = 146, RULE_tableAlias = 147, 
		RULE_errorCapturingIdentifier = 148, RULE_errorCapturingIdentifierExtra = 149, 
		RULE_identifierList = 150, RULE_identifierSeq = 151, RULE_identifier = 152, 
		RULE_refVar = 153, RULE_unquotedIdentifier = 154, RULE_quotedIdentifier = 155, 
		RULE_whenClause = 156, RULE_catalogPath = 157, RULE_databasePath = 158, 
		RULE_databasePathCreate = 159, RULE_tablePathCreate = 160, RULE_tablePath = 161, 
		RULE_uid = 162, RULE_withOption = 163, RULE_ifNotExists = 164, RULE_ifExists = 165, 
		RULE_tablePropertyList = 166, RULE_tableProperty = 167, RULE_tablePropertyKey = 168, 
		RULE_tablePropertyValue = 169, RULE_logicalOperator = 170, RULE_comparisonOperator = 171, 
		RULE_bitOperator = 172, RULE_mathOperator = 173, RULE_unaryOperator = 174, 
		RULE_constant = 175, RULE_timePointLiteral = 176, RULE_stringLiteral = 177, 
		RULE_decimalLiteral = 178, RULE_booleanLiteral = 179, RULE_setQuantifier = 180, 
		RULE_timePointUnit = 181, RULE_timeIntervalUnit = 182, RULE_reservedKeywordsUsedAsFuncParam = 183, 
		RULE_reservedKeywordsUsedAsFuncName = 184, RULE_reservedKeywords = 185, 
		RULE_nonReservedKeywords = 186;
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
			"functionName", "functionParam", "dereferenceDefinition", "correlationName", 
			"qualifiedName", "timeIntervalExpression", "errorCapturingMultiUnitsInterval", 
			"multiUnitsInterval", "errorCapturingUnitToUnitInterval", "unitToUnitInterval", 
			"intervalValue", "columnAlias", "tableAlias", "errorCapturingIdentifier", 
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
			null, null, null, null, null, null, "'='", "'>'", "'<'", "'!'", "'~'", 
			"'|'", "'&'", "'^'", "'.'", "'['", "']'", "'('", "')'", "'{'", "'}'", 
			"','", "';'", "'@'", "'''", "'\"'", "'`'", "':'", "'*'", "'_'", "'-'", 
			"'+'", "'%'", "'||'", "'--'", "'/'", "'?'", "'=>'"
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
			"KW_EXCEPTION", "KW_EXCLUDE", "KW_EXCLUDING", "KW_EXTENDED", "KW_FILE", 
			"KW_FINAL", "KW_FIRST", "KW_FOLLOWING", "KW_FORMAT", "KW_FORTRAN", "KW_FOUND", 
			"KW_FRAC_SECOND", "KW_FUNCTIONS", "KW_GENERAL", "KW_GENERATED", "KW_GO", 
			"KW_GOTO", "KW_GRANTED", "KW_HOP", "KW_HOURS", "KW_IF", "KW_IGNORE", 
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
			setState(374);
			statement();
			setState(375);
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
			setState(377);
			sqlStatements();
			setState(378);
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
			setState(385);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << COMMENT_INPUT) | (1L << LINE_COMMENT) | (1L << KW_ADD) | (1L << KW_DESC))) != 0) || _la==KW_LOAD || _la==KW_REMOVE || ((((_la - 161)) & ~0x3f) == 0 && ((1L << (_la - 161)) & ((1L << (KW_UNLOAD - 161)) | (1L << (KW_USE - 161)) | (1L << (KW_ALTER - 161)) | (1L << (KW_BEGIN - 161)) | (1L << (KW_CREATE - 161)))) != 0) || ((((_la - 236)) & ~0x3f) == 0 && ((1L << (_la - 236)) & ((1L << (KW_DESCRIBE - 236)) | (1L << (KW_DROP - 236)) | (1L << (KW_EXECUTE - 236)) | (1L << (KW_EXPLAIN - 236)) | (1L << (KW_INSERT - 236)))) != 0) || ((((_la - 323)) & ~0x3f) == 0 && ((1L << (_la - 323)) & ((1L << (KW_RESET - 323)) | (1L << (KW_SELECT - 323)) | (1L << (KW_SET - 323)) | (1L << (KW_SHOW - 323)) | (1L << (KW_VALUES - 323)) | (1L << (KW_WITH - 323)))) != 0) || _la==LR_BRACKET || _la==SEMICOLON) {
				{
				setState(383);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case COMMENT_INPUT:
				case LINE_COMMENT:
					{
					setState(380);
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
					setState(381);
					sqlStatement();
					}
					break;
				case SEMICOLON:
					{
					setState(382);
					emptyStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(387);
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
			setState(388);
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
			setState(423);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_ALTER:
			case KW_CREATE:
			case KW_DROP:
				enterOuterAlt(_localctx, 1);
				{
				setState(390);
				ddlStatement();
				setState(391);
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
				setState(393);
				dmlStatement();
				setState(394);
				match(SEMICOLON);
				}
				break;
			case KW_DESC:
			case KW_DESCRIBE:
				enterOuterAlt(_localctx, 3);
				{
				setState(396);
				describeStatement();
				setState(397);
				match(SEMICOLON);
				}
				break;
			case KW_EXPLAIN:
				enterOuterAlt(_localctx, 4);
				{
				setState(399);
				explainStatement();
				setState(400);
				match(SEMICOLON);
				}
				break;
			case KW_USE:
				enterOuterAlt(_localctx, 5);
				{
				setState(402);
				useStatement();
				setState(403);
				match(SEMICOLON);
				}
				break;
			case KW_SHOW:
				enterOuterAlt(_localctx, 6);
				{
				setState(405);
				showStatememt();
				setState(406);
				match(SEMICOLON);
				}
				break;
			case KW_LOAD:
				enterOuterAlt(_localctx, 7);
				{
				setState(408);
				loadStatement();
				setState(409);
				match(SEMICOLON);
				}
				break;
			case KW_UNLOAD:
				enterOuterAlt(_localctx, 8);
				{
				setState(411);
				unloadStatememt();
				setState(412);
				match(SEMICOLON);
				}
				break;
			case KW_SET:
				enterOuterAlt(_localctx, 9);
				{
				setState(414);
				setStatememt();
				setState(415);
				match(SEMICOLON);
				}
				break;
			case KW_RESET:
				enterOuterAlt(_localctx, 10);
				{
				setState(417);
				resetStatememt();
				setState(418);
				match(SEMICOLON);
				}
				break;
			case KW_ADD:
			case KW_REMOVE:
				enterOuterAlt(_localctx, 11);
				{
				setState(420);
				jarStatememt();
				setState(421);
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
			setState(425);
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
			setState(441);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(427);
				createTable();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(428);
				createDatabase();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(429);
				createView();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(430);
				createFunction();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(431);
				createCatalog();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(432);
				alterTable();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(433);
				alertView();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(434);
				alterDatabase();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(435);
				alterFunction();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(436);
				dropCatalog();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(437);
				dropTable();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(438);
				dropDatabase();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(439);
				dropView();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(440);
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
			setState(445);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_SELECT:
			case KW_VALUES:
			case KW_WITH:
			case LR_BRACKET:
				enterOuterAlt(_localctx, 1);
				{
				setState(443);
				queryStatement(0);
				}
				break;
			case KW_BEGIN:
			case KW_EXECUTE:
			case KW_INSERT:
				enterOuterAlt(_localctx, 2);
				{
				setState(444);
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
			setState(447);
			_la = _input.LA(1);
			if ( !(_la==KW_DESC || _la==KW_DESCRIBE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(448);
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
			setState(450);
			match(KW_EXPLAIN);
			setState(454);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_CHANGELOG_MODE:
			case KW_ESTIMATED_COST:
			case KW_JSON_EXECUTION_PLAN:
				{
				setState(451);
				explainDetails();
				}
				break;
			case KW_PLAN:
				{
				setState(452);
				match(KW_PLAN);
				setState(453);
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
			setState(459);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				{
				setState(456);
				dmlStatement();
				}
				break;
			case 2:
				{
				setState(457);
				insertSimpleStatement();
				}
				break;
			case 3:
				{
				setState(458);
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
			setState(461);
			explainDetail();
			setState(466);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(462);
				match(COMMA);
				setState(463);
				explainDetail();
				}
				}
				setState(468);
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
			setState(469);
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
			setState(477);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(471);
				match(KW_USE);
				setState(472);
				match(KW_CATALOG);
				setState(473);
				catalogPath();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(474);
				match(KW_USE);
				setState(475);
				databasePath();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(476);
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
			setState(479);
			match(KW_USE);
			setState(480);
			match(KW_MODULES);
			setState(481);
			uid();
			setState(486);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(482);
				match(COMMA);
				setState(483);
				uid();
				}
				}
				setState(488);
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
			setState(524);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(489);
				match(KW_SHOW);
				setState(490);
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
				setState(491);
				match(KW_SHOW);
				setState(492);
				match(KW_CURRENT);
				setState(493);
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
				setState(494);
				match(KW_SHOW);
				setState(495);
				match(KW_TABLES);
				setState(498);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_FROM || _la==KW_IN) {
					{
					setState(496);
					_la = _input.LA(1);
					if ( !(_la==KW_FROM || _la==KW_IN) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(497);
					tablePath();
					}
				}

				setState(501);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_LIKE || _la==KW_NOT) {
					{
					setState(500);
					likePredicate();
					}
				}

				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(503);
				match(KW_SHOW);
				setState(504);
				match(KW_COLUMNS);
				setState(505);
				_la = _input.LA(1);
				if ( !(_la==KW_FROM || _la==KW_IN) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(506);
				uid();
				setState(508);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_LIKE || _la==KW_NOT) {
					{
					setState(507);
					likePredicate();
					}
				}

				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(510);
				match(KW_SHOW);
				setState(511);
				match(KW_CREATE);
				setState(512);
				_la = _input.LA(1);
				if ( !(_la==KW_VIEW || _la==KW_TABLE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(513);
				uid();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(514);
				match(KW_SHOW);
				setState(516);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_USER) {
					{
					setState(515);
					match(KW_USER);
					}
				}

				setState(518);
				match(KW_FUNCTIONS);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(519);
				match(KW_SHOW);
				setState(521);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_FULL) {
					{
					setState(520);
					match(KW_FULL);
					}
				}

				setState(523);
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
			setState(526);
			match(KW_LOAD);
			setState(527);
			match(KW_MODULE);
			setState(528);
			uid();
			setState(531);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_WITH) {
				{
				setState(529);
				match(KW_WITH);
				setState(530);
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
			setState(533);
			match(KW_UNLOAD);
			setState(534);
			match(KW_MODULE);
			setState(535);
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
			setState(537);
			match(KW_SET);
			setState(539);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << KW_ADD) | (1L << KW_ADMIN) | (1L << KW_AFTER) | (1L << KW_ANALYZE) | (1L << KW_ASC) | (1L << KW_BEFORE) | (1L << KW_BYTES) | (1L << KW_CASCADE) | (1L << KW_CATALOG) | (1L << KW_CATALOGS) | (1L << KW_CENTURY) | (1L << KW_CHAIN) | (1L << KW_CHANGELOG_MODE) | (1L << KW_CHARACTERS) | (1L << KW_COMMENT) | (1L << KW_COMPACT) | (1L << KW_COLUMNS) | (1L << KW_CONSTRAINTS) | (1L << KW_CONSTRUCTOR) | (1L << KW_CUMULATE) | (1L << KW_DATA) | (1L << KW_DATABASE) | (1L << KW_DATABASES) | (1L << KW_DAYS) | (1L << KW_DECADE) | (1L << KW_DEFINED) | (1L << KW_DESC) | (1L << KW_DESCRIPTOR) | (1L << KW_DIV) | (1L << KW_ENCODING) | (1L << KW_ENFORCED) | (1L << KW_ENGINE) | (1L << KW_ERROR) | (1L << KW_ESTIMATED_COST) | (1L << KW_EXCEPTION) | (1L << KW_EXCLUDE) | (1L << KW_EXCLUDING) | (1L << KW_EXTENDED) | (1L << KW_FILE) | (1L << KW_FINAL) | (1L << KW_FIRST) | (1L << KW_FOLLOWING) | (1L << KW_FORMAT) | (1L << KW_FORTRAN) | (1L << KW_FOUND) | (1L << KW_FRAC_SECOND) | (1L << KW_FUNCTIONS) | (1L << KW_GENERAL) | (1L << KW_GENERATED) | (1L << KW_GO) | (1L << KW_GOTO) | (1L << KW_GRANTED) | (1L << KW_HOP) | (1L << KW_HOURS) | (1L << KW_IF) | (1L << KW_IGNORE) | (1L << KW_INCREMENT) | (1L << KW_INPUT))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (KW_INVOKER - 64)) | (1L << (KW_JAR - 64)) | (1L << (KW_JARS - 64)) | (1L << (KW_JAVA - 64)) | (1L << (KW_JSON - 64)) | (1L << (KW_JSON_EXECUTION_PLAN - 64)) | (1L << (KW_KEY - 64)) | (1L << (KW_KEY_MEMBER - 64)) | (1L << (KW_KEY_TYPE - 64)) | (1L << (KW_LABEL - 64)) | (1L << (KW_LAST - 64)) | (1L << (KW_LENGTH - 64)) | (1L << (KW_LEVEL - 64)) | (1L << (KW_LOAD - 64)) | (1L << (KW_MAP - 64)) | (1L << (KW_MICROSECOND - 64)) | (1L << (KW_MILLENNIUM - 64)) | (1L << (KW_MILLISECOND - 64)) | (1L << (KW_MINUTES - 64)) | (1L << (KW_MINVALUE - 64)) | (1L << (KW_MODIFY - 64)) | (1L << (KW_MODULES - 64)) | (1L << (KW_MONTHS - 64)) | (1L << (KW_NANOSECOND - 64)) | (1L << (KW_NULLS - 64)) | (1L << (KW_NUMBER - 64)) | (1L << (KW_OPTION - 64)) | (1L << (KW_OPTIONS - 64)) | (1L << (KW_ORDERING - 64)) | (1L << (KW_OUTPUT - 64)) | (1L << (KW_OVERWRITE - 64)) | (1L << (KW_OVERWRITING - 64)) | (1L << (KW_PARTITIONED - 64)) | (1L << (KW_PARTITIONS - 64)) | (1L << (KW_PASSING - 64)) | (1L << (KW_PAST - 64)) | (1L << (KW_PATH - 64)) | (1L << (KW_PLACING - 64)) | (1L << (KW_PLAN - 64)) | (1L << (KW_PRECEDING - 64)) | (1L << (KW_PRESERVE - 64)) | (1L << (KW_PRIOR - 64)) | (1L << (KW_PRIVILEGES - 64)) | (1L << (KW_PUBLIC - 64)) | (1L << (KW_PYTHON - 64)) | (1L << (KW_PYTHON_FILES - 64)) | (1L << (KW_PYTHON_REQUIREMENTS - 64)) | (1L << (KW_PYTHON_DEPENDENCIES - 64)) | (1L << (KW_PYTHON_JAR - 64)) | (1L << (KW_PYTHON_ARCHIVES - 64)) | (1L << (KW_PYTHON_PARAMETER - 64)) | (1L << (KW_QUARTER - 64)) | (1L << (KW_RAW - 64)) | (1L << (KW_READ - 64)) | (1L << (KW_RELATIVE - 64)) | (1L << (KW_REMOVE - 64)) | (1L << (KW_RENAME - 64)) | (1L << (KW_REPLACE - 64)) | (1L << (KW_RESPECT - 64)) | (1L << (KW_RESTART - 64)) | (1L << (KW_RESTRICT - 64)) | (1L << (KW_ROLE - 64)) | (1L << (KW_ROW_COUNT - 64)) | (1L << (KW_SCALA - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (KW_SCALAR - 128)) | (1L << (KW_SCALE - 128)) | (1L << (KW_SCHEMA - 128)) | (1L << (KW_SECONDS - 128)) | (1L << (KW_SECTION - 128)) | (1L << (KW_SECURITY - 128)) | (1L << (KW_SELF - 128)) | (1L << (KW_SERVER - 128)) | (1L << (KW_SERVER_NAME - 128)) | (1L << (KW_SESSION - 128)) | (1L << (KW_SETS - 128)) | (1L << (KW_SIMPLE - 128)) | (1L << (KW_SIZE - 128)) | (1L << (KW_SLIDE - 128)) | (1L << (KW_SOURCE - 128)) | (1L << (KW_SPACE - 128)) | (1L << (KW_STATE - 128)) | (1L << (KW_STATEMENT - 128)) | (1L << (KW_STEP - 128)) | (1L << (KW_STRING - 128)) | (1L << (KW_STRUCTURE - 128)) | (1L << (KW_STYLE - 128)) | (1L << (KW_TABLES - 128)) | (1L << (KW_TEMPORARY - 128)) | (1L << (KW_TIMECOL - 128)) | (1L << (KW_FLOOR - 128)) | (1L << (KW_TIMESTAMP_LTZ - 128)) | (1L << (KW_TIMESTAMPADD - 128)) | (1L << (KW_TIMESTAMPDIFF - 128)) | (1L << (KW_TRANSFORM - 128)) | (1L << (KW_TUMBLE - 128)) | (1L << (KW_TYPE - 128)) | (1L << (KW_UNDER - 128)) | (1L << (KW_UNLOAD - 128)) | (1L << (KW_USAGE - 128)) | (1L << (KW_USE - 128)) | (1L << (KW_UTF16 - 128)) | (1L << (KW_UTF32 - 128)) | (1L << (KW_UTF8 - 128)) | (1L << (KW_VERSION - 128)) | (1L << (KW_VIEW - 128)) | (1L << (KW_VIEWS - 128)) | (1L << (KW_VIRTUAL - 128)) | (1L << (KW_WATERMARK - 128)) | (1L << (KW_WATERMARKS - 128)) | (1L << (KW_WEEK - 128)) | (1L << (KW_WORK - 128)) | (1L << (KW_WRAPPER - 128)) | (1L << (KW_YEARS - 128)) | (1L << (KW_ZONE - 128)))) != 0) || ((((_la - 410)) & ~0x3f) == 0 && ((1L << (_la - 410)) & ((1L << (STRING_LITERAL - 410)) | (1L << (DIG_LITERAL - 410)) | (1L << (ID_LITERAL - 410)))) != 0)) {
				{
				setState(538);
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
			setState(541);
			match(KW_RESET);
			setState(543);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << KW_ADD) | (1L << KW_ADMIN) | (1L << KW_AFTER) | (1L << KW_ANALYZE) | (1L << KW_ASC) | (1L << KW_BEFORE) | (1L << KW_BYTES) | (1L << KW_CASCADE) | (1L << KW_CATALOG) | (1L << KW_CATALOGS) | (1L << KW_CENTURY) | (1L << KW_CHAIN) | (1L << KW_CHANGELOG_MODE) | (1L << KW_CHARACTERS) | (1L << KW_COMMENT) | (1L << KW_COMPACT) | (1L << KW_COLUMNS) | (1L << KW_CONSTRAINTS) | (1L << KW_CONSTRUCTOR) | (1L << KW_CUMULATE) | (1L << KW_DATA) | (1L << KW_DATABASE) | (1L << KW_DATABASES) | (1L << KW_DAYS) | (1L << KW_DECADE) | (1L << KW_DEFINED) | (1L << KW_DESC) | (1L << KW_DESCRIPTOR) | (1L << KW_DIV) | (1L << KW_ENCODING) | (1L << KW_ENFORCED) | (1L << KW_ENGINE) | (1L << KW_ERROR) | (1L << KW_ESTIMATED_COST) | (1L << KW_EXCEPTION) | (1L << KW_EXCLUDE) | (1L << KW_EXCLUDING) | (1L << KW_EXTENDED) | (1L << KW_FILE) | (1L << KW_FINAL) | (1L << KW_FIRST) | (1L << KW_FOLLOWING) | (1L << KW_FORMAT) | (1L << KW_FORTRAN) | (1L << KW_FOUND) | (1L << KW_FRAC_SECOND) | (1L << KW_FUNCTIONS) | (1L << KW_GENERAL) | (1L << KW_GENERATED) | (1L << KW_GO) | (1L << KW_GOTO) | (1L << KW_GRANTED) | (1L << KW_HOP) | (1L << KW_HOURS) | (1L << KW_IF) | (1L << KW_IGNORE) | (1L << KW_INCREMENT) | (1L << KW_INPUT))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (KW_INVOKER - 64)) | (1L << (KW_JAR - 64)) | (1L << (KW_JARS - 64)) | (1L << (KW_JAVA - 64)) | (1L << (KW_JSON - 64)) | (1L << (KW_JSON_EXECUTION_PLAN - 64)) | (1L << (KW_KEY - 64)) | (1L << (KW_KEY_MEMBER - 64)) | (1L << (KW_KEY_TYPE - 64)) | (1L << (KW_LABEL - 64)) | (1L << (KW_LAST - 64)) | (1L << (KW_LENGTH - 64)) | (1L << (KW_LEVEL - 64)) | (1L << (KW_LOAD - 64)) | (1L << (KW_MAP - 64)) | (1L << (KW_MICROSECOND - 64)) | (1L << (KW_MILLENNIUM - 64)) | (1L << (KW_MILLISECOND - 64)) | (1L << (KW_MINUTES - 64)) | (1L << (KW_MINVALUE - 64)) | (1L << (KW_MODIFY - 64)) | (1L << (KW_MODULES - 64)) | (1L << (KW_MONTHS - 64)) | (1L << (KW_NANOSECOND - 64)) | (1L << (KW_NULLS - 64)) | (1L << (KW_NUMBER - 64)) | (1L << (KW_OPTION - 64)) | (1L << (KW_OPTIONS - 64)) | (1L << (KW_ORDERING - 64)) | (1L << (KW_OUTPUT - 64)) | (1L << (KW_OVERWRITE - 64)) | (1L << (KW_OVERWRITING - 64)) | (1L << (KW_PARTITIONED - 64)) | (1L << (KW_PARTITIONS - 64)) | (1L << (KW_PASSING - 64)) | (1L << (KW_PAST - 64)) | (1L << (KW_PATH - 64)) | (1L << (KW_PLACING - 64)) | (1L << (KW_PLAN - 64)) | (1L << (KW_PRECEDING - 64)) | (1L << (KW_PRESERVE - 64)) | (1L << (KW_PRIOR - 64)) | (1L << (KW_PRIVILEGES - 64)) | (1L << (KW_PUBLIC - 64)) | (1L << (KW_PYTHON - 64)) | (1L << (KW_PYTHON_FILES - 64)) | (1L << (KW_PYTHON_REQUIREMENTS - 64)) | (1L << (KW_PYTHON_DEPENDENCIES - 64)) | (1L << (KW_PYTHON_JAR - 64)) | (1L << (KW_PYTHON_ARCHIVES - 64)) | (1L << (KW_PYTHON_PARAMETER - 64)) | (1L << (KW_QUARTER - 64)) | (1L << (KW_RAW - 64)) | (1L << (KW_READ - 64)) | (1L << (KW_RELATIVE - 64)) | (1L << (KW_REMOVE - 64)) | (1L << (KW_RENAME - 64)) | (1L << (KW_REPLACE - 64)) | (1L << (KW_RESPECT - 64)) | (1L << (KW_RESTART - 64)) | (1L << (KW_RESTRICT - 64)) | (1L << (KW_ROLE - 64)) | (1L << (KW_ROW_COUNT - 64)) | (1L << (KW_SCALA - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (KW_SCALAR - 128)) | (1L << (KW_SCALE - 128)) | (1L << (KW_SCHEMA - 128)) | (1L << (KW_SECONDS - 128)) | (1L << (KW_SECTION - 128)) | (1L << (KW_SECURITY - 128)) | (1L << (KW_SELF - 128)) | (1L << (KW_SERVER - 128)) | (1L << (KW_SERVER_NAME - 128)) | (1L << (KW_SESSION - 128)) | (1L << (KW_SETS - 128)) | (1L << (KW_SIMPLE - 128)) | (1L << (KW_SIZE - 128)) | (1L << (KW_SLIDE - 128)) | (1L << (KW_SOURCE - 128)) | (1L << (KW_SPACE - 128)) | (1L << (KW_STATE - 128)) | (1L << (KW_STATEMENT - 128)) | (1L << (KW_STEP - 128)) | (1L << (KW_STRING - 128)) | (1L << (KW_STRUCTURE - 128)) | (1L << (KW_STYLE - 128)) | (1L << (KW_TABLES - 128)) | (1L << (KW_TEMPORARY - 128)) | (1L << (KW_TIMECOL - 128)) | (1L << (KW_FLOOR - 128)) | (1L << (KW_TIMESTAMP_LTZ - 128)) | (1L << (KW_TIMESTAMPADD - 128)) | (1L << (KW_TIMESTAMPDIFF - 128)) | (1L << (KW_TRANSFORM - 128)) | (1L << (KW_TUMBLE - 128)) | (1L << (KW_TYPE - 128)) | (1L << (KW_UNDER - 128)) | (1L << (KW_UNLOAD - 128)) | (1L << (KW_USAGE - 128)) | (1L << (KW_USE - 128)) | (1L << (KW_UTF16 - 128)) | (1L << (KW_UTF32 - 128)) | (1L << (KW_UTF8 - 128)) | (1L << (KW_VERSION - 128)) | (1L << (KW_VIEW - 128)) | (1L << (KW_VIEWS - 128)) | (1L << (KW_VIRTUAL - 128)) | (1L << (KW_WATERMARK - 128)) | (1L << (KW_WATERMARKS - 128)) | (1L << (KW_WEEK - 128)) | (1L << (KW_WORK - 128)) | (1L << (KW_WRAPPER - 128)) | (1L << (KW_YEARS - 128)) | (1L << (KW_ZONE - 128)))) != 0) || ((((_la - 410)) & ~0x3f) == 0 && ((1L << (_la - 410)) & ((1L << (STRING_LITERAL - 410)) | (1L << (DIG_LITERAL - 410)) | (1L << (ID_LITERAL - 410)))) != 0)) {
				{
				setState(542);
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
			setState(545);
			_la = _input.LA(1);
			if ( !(_la==KW_ADD || _la==KW_REMOVE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(546);
			match(KW_JAR);
			setState(547);
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
			setState(550); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(549);
				match(SLASH_TEXT);
				}
				}
				setState(552); 
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
			setState(556);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				{
				setState(554);
				simpleCreateTable();
				}
				break;
			case 2:
				{
				setState(555);
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
			setState(558);
			match(KW_CREATE);
			setState(560);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_TEMPORARY) {
				{
				setState(559);
				match(KW_TEMPORARY);
				}
			}

			setState(562);
			match(KW_TABLE);
			setState(564);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
			case 1:
				{
				setState(563);
				ifNotExists();
				}
				break;
			}
			setState(566);
			tablePathCreate();
			setState(567);
			match(LR_BRACKET);
			setState(568);
			columnOptionDefinition();
			setState(573);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(569);
					match(COMMA);
					setState(570);
					columnOptionDefinition();
					}
					} 
				}
				setState(575);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
			}
			setState(578);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				{
				setState(576);
				match(COMMA);
				setState(577);
				watermarkDefinition();
				}
				break;
			}
			setState(582);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
			case 1:
				{
				setState(580);
				match(COMMA);
				setState(581);
				tableConstraint();
				}
				break;
			}
			setState(586);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(584);
				match(COMMA);
				setState(585);
				selfDefinitionClause();
				}
			}

			setState(588);
			match(RR_BRACKET);
			setState(590);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_COMMENT) {
				{
				setState(589);
				commentSpec();
				}
			}

			setState(593);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_PARTITIONED) {
				{
				setState(592);
				partitionDefinition();
				}
			}

			setState(595);
			withOption();
			setState(597);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_LIKE) {
				{
				setState(596);
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
			setState(599);
			match(KW_CREATE);
			setState(600);
			match(KW_TABLE);
			setState(602);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
			case 1:
				{
				setState(601);
				ifNotExists();
				}
				break;
			}
			setState(604);
			tablePathCreate();
			setState(605);
			withOption();
			setState(608);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_AS) {
				{
				setState(606);
				match(KW_AS);
				setState(607);
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
			setState(613);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,32,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(610);
				physicalColumnDefinition();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(611);
				metadataColumnDefinition();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(612);
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
			setState(615);
			columnName();
			setState(616);
			columnType();
			setState(618);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_CONSTRAINT || ((((_la - 300)) & ~0x3f) == 0 && ((1L << (_la - 300)) & ((1L << (KW_NOT - 300)) | (1L << (KW_NULL - 300)) | (1L << (KW_PRIMARY - 300)))) != 0)) {
				{
				setState(617);
				columnConstraint();
				}
			}

			setState(621);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_COMMENT) {
				{
				setState(620);
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
			setState(625);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,35,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(623);
				uid();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(624);
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
			setState(627);
			match(LR_BRACKET);
			setState(628);
			columnName();
			setState(633);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(629);
				match(COMMA);
				setState(630);
				columnName();
				}
				}
				setState(635);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(636);
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
			setState(711);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_BOOLEAN:
			case KW_DATE:
			case KW_NULL:
				enterOuterAlt(_localctx, 1);
				{
				setState(638);
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
				setState(639);
				((ColumnTypeContext)_localctx).typeName = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==KW_BYTES || ((((_la - 147)) & ~0x3f) == 0 && ((1L << (_la - 147)) & ((1L << (KW_STRING - 147)) | (1L << (KW_TIMESTAMP_LTZ - 147)) | (1L << (KW_BIGINT - 147)) | (1L << (KW_BINARY - 147)) | (1L << (KW_CHAR - 147)))) != 0) || ((((_la - 228)) & ~0x3f) == 0 && ((1L << (_la - 228)) & ((1L << (KW_DATETIME - 228)) | (1L << (KW_INT - 228)) | (1L << (KW_INTEGER - 228)))) != 0) || ((((_la - 337)) & ~0x3f) == 0 && ((1L << (_la - 337)) & ((1L << (KW_SMALLINT - 337)) | (1L << (KW_TIME - 337)) | (1L << (KW_TINYINT - 337)) | (1L << (KW_VARBINARY - 337)) | (1L << (KW_VARCHAR - 337)))) != 0)) ) {
					((ColumnTypeContext)_localctx).typeName = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(641);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LR_BRACKET) {
					{
					setState(640);
					lengthOneDimension();
					}
				}

				}
				break;
			case KW_TIMESTAMP:
				enterOuterAlt(_localctx, 3);
				{
				setState(643);
				((ColumnTypeContext)_localctx).typeName = match(KW_TIMESTAMP);
				setState(645);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LR_BRACKET) {
					{
					setState(644);
					lengthOneDimension();
					}
				}

				setState(653);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_WITH || _la==KW_WITHOUT) {
					{
					setState(647);
					_la = _input.LA(1);
					if ( !(_la==KW_WITH || _la==KW_WITHOUT) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(649);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==KW_LOCAL) {
						{
						setState(648);
						match(KW_LOCAL);
						}
					}

					setState(651);
					match(KW_TIME);
					setState(652);
					match(KW_ZONE);
					}
				}

				}
				break;
			case KW_TIMESTAMP_3:
				enterOuterAlt(_localctx, 4);
				{
				setState(655);
				((ColumnTypeContext)_localctx).typeName = match(KW_TIMESTAMP_3);
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
			case KW_TIMESTAMP_6:
				enterOuterAlt(_localctx, 5);
				{
				setState(667);
				((ColumnTypeContext)_localctx).typeName = match(KW_TIMESTAMP_6);
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
			case KW_TIMESTAMP_9:
				enterOuterAlt(_localctx, 6);
				{
				setState(679);
				((ColumnTypeContext)_localctx).typeName = match(KW_TIMESTAMP_9);
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
			case KW_DEC:
			case KW_DECIMAL:
			case KW_DOUBLE:
			case KW_FLOAT:
			case KW_NUMERIC:
				enterOuterAlt(_localctx, 7);
				{
				setState(691);
				((ColumnTypeContext)_localctx).typeName = _input.LT(1);
				_la = _input.LA(1);
				if ( !(((((_la - 230)) & ~0x3f) == 0 && ((1L << (_la - 230)) & ((1L << (KW_DEC - 230)) | (1L << (KW_DECIMAL - 230)) | (1L << (KW_DOUBLE - 230)) | (1L << (KW_FLOAT - 230)))) != 0) || _la==KW_NUMERIC) ) {
					((ColumnTypeContext)_localctx).typeName = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(693);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LR_BRACKET) {
					{
					setState(692);
					lengthTwoOptionalDimension();
					}
				}

				}
				break;
			case KW_ARRAY:
			case KW_MULTISET:
				enterOuterAlt(_localctx, 8);
				{
				setState(695);
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
				setState(697);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LESS_SYMBOL || _la==LS_BRACKET) {
					{
					setState(696);
					lengthOneTypeDimension();
					}
				}

				}
				break;
			case KW_MAP:
				enterOuterAlt(_localctx, 9);
				{
				setState(699);
				((ColumnTypeContext)_localctx).type = match(KW_MAP);
				setState(701);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LESS_SYMBOL) {
					{
					setState(700);
					mapTypeDimension();
					}
				}

				}
				break;
			case KW_ROW:
				enterOuterAlt(_localctx, 10);
				{
				setState(703);
				((ColumnTypeContext)_localctx).type = match(KW_ROW);
				setState(705);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LESS_SYMBOL || _la==LS_BRACKET) {
					{
					setState(704);
					rowTypeDimension();
					}
				}

				}
				break;
			case KW_RAW:
				enterOuterAlt(_localctx, 11);
				{
				setState(707);
				((ColumnTypeContext)_localctx).type = match(KW_RAW);
				setState(709);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LR_BRACKET) {
					{
					setState(708);
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
			setState(713);
			match(LR_BRACKET);
			setState(714);
			decimalLiteral();
			setState(715);
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
			setState(717);
			match(LR_BRACKET);
			setState(718);
			decimalLiteral();
			setState(721);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(719);
				match(COMMA);
				setState(720);
				decimalLiteral();
				}
			}

			setState(723);
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
			setState(725);
			match(LR_BRACKET);
			setState(726);
			stringLiteral();
			setState(729);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(727);
				match(COMMA);
				setState(728);
				stringLiteral();
				}
			}

			setState(731);
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
	public static class LengthBracketTypeDimensionContext extends LengthOneTypeDimensionContext {
		public TerminalNode LS_BRACKET() { return getToken(FlinkSQLParser.LS_BRACKET, 0); }
		public List<ColumnTypeContext> columnType() {
			return getRuleContexts(ColumnTypeContext.class);
		}
		public ColumnTypeContext columnType(int i) {
			return getRuleContext(ColumnTypeContext.class,i);
		}
		public TerminalNode RS_BRACKET() { return getToken(FlinkSQLParser.RS_BRACKET, 0); }
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public LengthBracketTypeDimensionContext(LengthOneTypeDimensionContext ctx) { copyFrom(ctx); }
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
			setState(755);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LESS_SYMBOL:
				_localctx = new LengthSymbolsTypeDimensionContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(733);
				match(LESS_SYMBOL);
				setState(734);
				columnType();
				setState(739);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(735);
					match(COMMA);
					setState(736);
					columnType();
					}
					}
					setState(741);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(742);
				match(GREATER_SYMBOL);
				}
				break;
			case LS_BRACKET:
				_localctx = new LengthBracketTypeDimensionContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(744);
				match(LS_BRACKET);
				setState(745);
				columnType();
				setState(750);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(746);
					match(COMMA);
					setState(747);
					columnType();
					}
					}
					setState(752);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(753);
				match(RS_BRACKET);
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
			setState(757);
			match(LESS_SYMBOL);
			setState(758);
			columnType();
			{
			setState(759);
			match(COMMA);
			setState(760);
			columnType();
			}
			setState(762);
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
	public static class RowBracketTypeDimensionContext extends RowTypeDimensionContext {
		public TerminalNode LS_BRACKET() { return getToken(FlinkSQLParser.LS_BRACKET, 0); }
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
		public TerminalNode RS_BRACKET() { return getToken(FlinkSQLParser.RS_BRACKET, 0); }
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public RowBracketTypeDimensionContext(RowTypeDimensionContext ctx) { copyFrom(ctx); }
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
			setState(792);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LESS_SYMBOL:
				_localctx = new RowSymbolsTypeDimensionContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(764);
				match(LESS_SYMBOL);
				setState(765);
				columnName();
				setState(766);
				columnType();
				setState(773);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(767);
					match(COMMA);
					setState(768);
					columnName();
					setState(769);
					columnType();
					}
					}
					setState(775);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(776);
				match(GREATER_SYMBOL);
				}
				break;
			case LS_BRACKET:
				_localctx = new RowBracketTypeDimensionContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(778);
				match(LS_BRACKET);
				setState(779);
				columnName();
				setState(780);
				columnType();
				setState(787);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(781);
					match(COMMA);
					setState(782);
					columnName();
					setState(783);
					columnType();
					}
					}
					setState(789);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(790);
				match(RS_BRACKET);
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
			setState(808);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_CONSTRAINT:
			case KW_PRIMARY:
				enterOuterAlt(_localctx, 1);
				{
				setState(796);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_CONSTRAINT) {
					{
					setState(794);
					match(KW_CONSTRAINT);
					setState(795);
					constraintName();
					}
				}

				setState(798);
				match(KW_PRIMARY);
				setState(799);
				match(KW_KEY);
				setState(802);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(800);
					match(KW_NOT);
					setState(801);
					match(KW_ENFORCED);
					}
				}

				}
				break;
			case KW_NOT:
			case KW_NULL:
				enterOuterAlt(_localctx, 2);
				{
				setState(805);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(804);
					match(KW_NOT);
					}
				}

				setState(807);
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
			setState(810);
			match(KW_COMMENT);
			setState(811);
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
			setState(813);
			columnName();
			setState(814);
			columnType();
			setState(815);
			match(KW_METADATA);
			setState(818);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_FROM) {
				{
				setState(816);
				match(KW_FROM);
				setState(817);
				metadataKey();
				}
			}

			setState(821);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_VIRTUAL) {
				{
				setState(820);
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
			setState(823);
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
			setState(825);
			columnName();
			setState(826);
			match(KW_AS);
			setState(827);
			computedColumnExpression();
			setState(829);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_COMMENT) {
				{
				setState(828);
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
			setState(831);
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
			setState(833);
			match(KW_WATERMARK);
			setState(834);
			match(KW_FOR);
			setState(835);
			expression();
			setState(836);
			match(KW_AS);
			setState(837);
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
			setState(841);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_CONSTRAINT) {
				{
				setState(839);
				match(KW_CONSTRAINT);
				setState(840);
				constraintName();
				}
			}

			setState(843);
			match(KW_PRIMARY);
			setState(844);
			match(KW_KEY);
			setState(845);
			columnNameList();
			setState(846);
			match(KW_NOT);
			setState(847);
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
			setState(849);
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
			setState(851);
			match(KW_PERIOD);
			setState(852);
			match(KW_FOR);
			setState(853);
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
			setState(855);
			match(KW_PARTITIONED);
			setState(856);
			match(KW_BY);
			setState(857);
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
			setState(859);
			match(LR_BRACKET);
			setState(860);
			transform();
			setState(865);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(861);
				match(COMMA);
				setState(862);
				transform();
				}
				}
				setState(867);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(868);
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
			setState(883);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,74,_ctx) ) {
			case 1:
				_localctx = new IdentityTransformContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(870);
				qualifiedName();
				}
				break;
			case 2:
				_localctx = new ApplyTransformContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(871);
				((ApplyTransformContext)_localctx).transformName = identifier();
				setState(872);
				match(LR_BRACKET);
				setState(873);
				transformArgument();
				setState(878);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(874);
					match(COMMA);
					setState(875);
					transformArgument();
					}
					}
					setState(880);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(881);
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
			setState(887);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,75,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(885);
				qualifiedName();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(886);
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
			setState(889);
			match(KW_LIKE);
			setState(890);
			tablePath();
			setState(899);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LR_BRACKET) {
				{
				setState(891);
				match(LR_BRACKET);
				setState(895);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==KW_EXCLUDING || _la==KW_OVERWRITING || _la==KW_INCLUDING) {
					{
					{
					setState(892);
					likeOption();
					}
					}
					setState(897);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(898);
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
			setState(905);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,78,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(901);
				_la = _input.LA(1);
				if ( !(_la==KW_EXCLUDING || _la==KW_INCLUDING) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(902);
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
				setState(903);
				_la = _input.LA(1);
				if ( !(_la==KW_EXCLUDING || _la==KW_OVERWRITING || _la==KW_INCLUDING) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(904);
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
			setState(907);
			match(KW_CREATE);
			setState(908);
			match(KW_CATALOG);
			setState(909);
			uid();
			setState(910);
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
			setState(912);
			match(KW_CREATE);
			setState(913);
			match(KW_DATABASE);
			setState(915);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,79,_ctx) ) {
			case 1:
				{
				setState(914);
				ifNotExists();
				}
				break;
			}
			setState(917);
			databasePathCreate();
			setState(919);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_COMMENT) {
				{
				setState(918);
				commentSpec();
				}
			}

			setState(922);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_WITH) {
				{
				setState(921);
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
			setState(924);
			match(KW_CREATE);
			setState(926);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_TEMPORARY) {
				{
				setState(925);
				match(KW_TEMPORARY);
				}
			}

			setState(928);
			match(KW_VIEW);
			setState(930);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,83,_ctx) ) {
			case 1:
				{
				setState(929);
				ifNotExists();
				}
				break;
			}
			setState(932);
			uid();
			setState(934);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LR_BRACKET) {
				{
				setState(933);
				columnNameList();
				}
			}

			setState(937);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_COMMENT) {
				{
				setState(936);
				commentSpec();
				}
			}

			setState(939);
			match(KW_AS);
			setState(940);
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
			setState(942);
			match(KW_CREATE);
			setState(946);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,86,_ctx) ) {
			case 1:
				{
				setState(943);
				match(KW_TEMPORARY);
				}
				break;
			case 2:
				{
				setState(944);
				match(KW_TEMPORARY);
				setState(945);
				match(KW_SYSTEM);
				}
				break;
			}
			setState(948);
			match(KW_FUNCTION);
			setState(950);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,87,_ctx) ) {
			case 1:
				{
				setState(949);
				ifNotExists();
				}
				break;
			}
			setState(952);
			functionName();
			setState(953);
			match(KW_AS);
			setState(954);
			identifier();
			setState(957);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_LANGUAGE) {
				{
				setState(955);
				match(KW_LANGUAGE);
				setState(956);
				_la = _input.LA(1);
				if ( !(((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & ((1L << (KW_JAVA - 67)) | (1L << (KW_PYTHON - 67)) | (1L << (KW_SCALA - 67)))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(960);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_USING) {
				{
				setState(959);
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
			setState(962);
			match(KW_USING);
			setState(963);
			match(KW_JAR);
			setState(964);
			jarFileName();
			setState(970);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(965);
				match(COMMA);
				setState(966);
				match(KW_JAR);
				setState(967);
				jarFileName();
				}
				}
				setState(972);
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
			setState(973);
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
			setState(975);
			match(KW_ALTER);
			setState(976);
			match(KW_TABLE);
			setState(978);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,91,_ctx) ) {
			case 1:
				{
				setState(977);
				ifExists();
				}
				break;
			}
			setState(980);
			tablePath();
			setState(986);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,92,_ctx) ) {
			case 1:
				{
				setState(981);
				renameDefinition();
				}
				break;
			case 2:
				{
				setState(982);
				setKeyValueDefinition();
				}
				break;
			case 3:
				{
				setState(983);
				addConstraint();
				}
				break;
			case 4:
				{
				setState(984);
				dropConstraint();
				}
				break;
			case 5:
				{
				setState(985);
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
			setState(988);
			match(KW_RENAME);
			setState(990);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << KW_ADD) | (1L << KW_ADMIN) | (1L << KW_AFTER) | (1L << KW_ANALYZE) | (1L << KW_ASC) | (1L << KW_BEFORE) | (1L << KW_BYTES) | (1L << KW_CASCADE) | (1L << KW_CATALOG) | (1L << KW_CATALOGS) | (1L << KW_CENTURY) | (1L << KW_CHAIN) | (1L << KW_CHANGELOG_MODE) | (1L << KW_CHARACTERS) | (1L << KW_COMMENT) | (1L << KW_COMPACT) | (1L << KW_COLUMNS) | (1L << KW_CONSTRAINTS) | (1L << KW_CONSTRUCTOR) | (1L << KW_CUMULATE) | (1L << KW_DATA) | (1L << KW_DATABASE) | (1L << KW_DATABASES) | (1L << KW_DAYS) | (1L << KW_DECADE) | (1L << KW_DEFINED) | (1L << KW_DESC) | (1L << KW_DESCRIPTOR) | (1L << KW_DIV) | (1L << KW_ENCODING) | (1L << KW_ENFORCED) | (1L << KW_ENGINE) | (1L << KW_ERROR) | (1L << KW_ESTIMATED_COST) | (1L << KW_EXCEPTION) | (1L << KW_EXCLUDE) | (1L << KW_EXCLUDING) | (1L << KW_EXTENDED) | (1L << KW_FILE) | (1L << KW_FINAL) | (1L << KW_FIRST) | (1L << KW_FOLLOWING) | (1L << KW_FORMAT) | (1L << KW_FORTRAN) | (1L << KW_FOUND) | (1L << KW_FRAC_SECOND) | (1L << KW_FUNCTIONS) | (1L << KW_GENERAL) | (1L << KW_GENERATED) | (1L << KW_GO) | (1L << KW_GOTO) | (1L << KW_GRANTED) | (1L << KW_HOP) | (1L << KW_HOURS) | (1L << KW_IF) | (1L << KW_IGNORE) | (1L << KW_INCREMENT) | (1L << KW_INPUT))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (KW_INVOKER - 64)) | (1L << (KW_JAR - 64)) | (1L << (KW_JARS - 64)) | (1L << (KW_JAVA - 64)) | (1L << (KW_JSON - 64)) | (1L << (KW_JSON_EXECUTION_PLAN - 64)) | (1L << (KW_KEY - 64)) | (1L << (KW_KEY_MEMBER - 64)) | (1L << (KW_KEY_TYPE - 64)) | (1L << (KW_LABEL - 64)) | (1L << (KW_LAST - 64)) | (1L << (KW_LENGTH - 64)) | (1L << (KW_LEVEL - 64)) | (1L << (KW_LOAD - 64)) | (1L << (KW_MAP - 64)) | (1L << (KW_MICROSECOND - 64)) | (1L << (KW_MILLENNIUM - 64)) | (1L << (KW_MILLISECOND - 64)) | (1L << (KW_MINUTES - 64)) | (1L << (KW_MINVALUE - 64)) | (1L << (KW_MODIFY - 64)) | (1L << (KW_MODULES - 64)) | (1L << (KW_MONTHS - 64)) | (1L << (KW_NANOSECOND - 64)) | (1L << (KW_NULLS - 64)) | (1L << (KW_NUMBER - 64)) | (1L << (KW_OPTION - 64)) | (1L << (KW_OPTIONS - 64)) | (1L << (KW_ORDERING - 64)) | (1L << (KW_OUTPUT - 64)) | (1L << (KW_OVERWRITE - 64)) | (1L << (KW_OVERWRITING - 64)) | (1L << (KW_PARTITIONED - 64)) | (1L << (KW_PARTITIONS - 64)) | (1L << (KW_PASSING - 64)) | (1L << (KW_PAST - 64)) | (1L << (KW_PATH - 64)) | (1L << (KW_PLACING - 64)) | (1L << (KW_PLAN - 64)) | (1L << (KW_PRECEDING - 64)) | (1L << (KW_PRESERVE - 64)) | (1L << (KW_PRIOR - 64)) | (1L << (KW_PRIVILEGES - 64)) | (1L << (KW_PUBLIC - 64)) | (1L << (KW_PYTHON - 64)) | (1L << (KW_PYTHON_FILES - 64)) | (1L << (KW_PYTHON_REQUIREMENTS - 64)) | (1L << (KW_PYTHON_DEPENDENCIES - 64)) | (1L << (KW_PYTHON_JAR - 64)) | (1L << (KW_PYTHON_ARCHIVES - 64)) | (1L << (KW_PYTHON_PARAMETER - 64)) | (1L << (KW_QUARTER - 64)) | (1L << (KW_RAW - 64)) | (1L << (KW_READ - 64)) | (1L << (KW_RELATIVE - 64)) | (1L << (KW_REMOVE - 64)) | (1L << (KW_RENAME - 64)) | (1L << (KW_REPLACE - 64)) | (1L << (KW_RESPECT - 64)) | (1L << (KW_RESTART - 64)) | (1L << (KW_RESTRICT - 64)) | (1L << (KW_ROLE - 64)) | (1L << (KW_ROW_COUNT - 64)) | (1L << (KW_SCALA - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (KW_SCALAR - 128)) | (1L << (KW_SCALE - 128)) | (1L << (KW_SCHEMA - 128)) | (1L << (KW_SECONDS - 128)) | (1L << (KW_SECTION - 128)) | (1L << (KW_SECURITY - 128)) | (1L << (KW_SELF - 128)) | (1L << (KW_SERVER - 128)) | (1L << (KW_SERVER_NAME - 128)) | (1L << (KW_SESSION - 128)) | (1L << (KW_SETS - 128)) | (1L << (KW_SIMPLE - 128)) | (1L << (KW_SIZE - 128)) | (1L << (KW_SLIDE - 128)) | (1L << (KW_SOURCE - 128)) | (1L << (KW_SPACE - 128)) | (1L << (KW_STATE - 128)) | (1L << (KW_STATEMENT - 128)) | (1L << (KW_STEP - 128)) | (1L << (KW_STRING - 128)) | (1L << (KW_STRUCTURE - 128)) | (1L << (KW_STYLE - 128)) | (1L << (KW_TABLES - 128)) | (1L << (KW_TEMPORARY - 128)) | (1L << (KW_TIMECOL - 128)) | (1L << (KW_FLOOR - 128)) | (1L << (KW_TIMESTAMP_LTZ - 128)) | (1L << (KW_TIMESTAMPADD - 128)) | (1L << (KW_TIMESTAMPDIFF - 128)) | (1L << (KW_TRANSFORM - 128)) | (1L << (KW_TUMBLE - 128)) | (1L << (KW_TYPE - 128)) | (1L << (KW_UNDER - 128)) | (1L << (KW_UNLOAD - 128)) | (1L << (KW_USAGE - 128)) | (1L << (KW_USE - 128)) | (1L << (KW_UTF16 - 128)) | (1L << (KW_UTF32 - 128)) | (1L << (KW_UTF8 - 128)) | (1L << (KW_VERSION - 128)) | (1L << (KW_VIEW - 128)) | (1L << (KW_VIEWS - 128)) | (1L << (KW_VIRTUAL - 128)) | (1L << (KW_WATERMARK - 128)) | (1L << (KW_WATERMARKS - 128)) | (1L << (KW_WEEK - 128)) | (1L << (KW_WORK - 128)) | (1L << (KW_WRAPPER - 128)) | (1L << (KW_YEARS - 128)) | (1L << (KW_ZONE - 128)))) != 0) || ((((_la - 410)) & ~0x3f) == 0 && ((1L << (_la - 410)) & ((1L << (STRING_LITERAL - 410)) | (1L << (DIG_LITERAL - 410)) | (1L << (ID_LITERAL - 410)))) != 0)) {
				{
				setState(989);
				uid();
				}
			}

			setState(992);
			match(KW_TO);
			setState(993);
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
			setState(995);
			match(KW_SET);
			setState(996);
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
			setState(998);
			match(KW_ADD);
			setState(999);
			match(KW_CONSTRAINT);
			setState(1000);
			constraintName();
			setState(1001);
			match(KW_PRIMARY);
			setState(1002);
			match(KW_KEY);
			setState(1003);
			columnNameList();
			setState(1005);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_NOT) {
				{
				setState(1004);
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
			setState(1007);
			match(KW_DROP);
			setState(1008);
			match(KW_CONSTRAINT);
			setState(1009);
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
			setState(1011);
			match(KW_ADD);
			setState(1012);
			match(KW_UNIQUE);
			setState(1013);
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
			setState(1015);
			match(KW_NOT);
			setState(1016);
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
			setState(1018);
			match(KW_ALTER);
			setState(1019);
			match(KW_VIEW);
			setState(1020);
			uid();
			setState(1024);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_RENAME:
				{
				setState(1021);
				renameDefinition();
				}
				break;
			case KW_AS:
				{
				setState(1022);
				match(KW_AS);
				setState(1023);
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
			setState(1026);
			match(KW_ALTER);
			setState(1027);
			match(KW_DATABASE);
			setState(1028);
			databasePath();
			setState(1029);
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
			setState(1031);
			match(KW_ALTER);
			setState(1035);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,96,_ctx) ) {
			case 1:
				{
				setState(1032);
				match(KW_TEMPORARY);
				}
				break;
			case 2:
				{
				setState(1033);
				match(KW_TEMPORARY);
				setState(1034);
				match(KW_SYSTEM);
				}
				break;
			}
			setState(1037);
			match(KW_FUNCTION);
			setState(1039);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,97,_ctx) ) {
			case 1:
				{
				setState(1038);
				ifExists();
				}
				break;
			}
			setState(1041);
			uid();
			setState(1042);
			match(KW_AS);
			setState(1043);
			identifier();
			setState(1046);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_LANGUAGE) {
				{
				setState(1044);
				match(KW_LANGUAGE);
				setState(1045);
				_la = _input.LA(1);
				if ( !(((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & ((1L << (KW_JAVA - 67)) | (1L << (KW_PYTHON - 67)) | (1L << (KW_SCALA - 67)))) != 0)) ) {
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
			setState(1048);
			match(KW_DROP);
			setState(1049);
			match(KW_CATALOG);
			setState(1051);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,99,_ctx) ) {
			case 1:
				{
				setState(1050);
				ifExists();
				}
				break;
			}
			setState(1053);
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
			setState(1055);
			match(KW_DROP);
			setState(1057);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_TEMPORARY) {
				{
				setState(1056);
				match(KW_TEMPORARY);
				}
			}

			setState(1059);
			match(KW_TABLE);
			setState(1061);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,101,_ctx) ) {
			case 1:
				{
				setState(1060);
				ifExists();
				}
				break;
			}
			setState(1063);
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
			setState(1065);
			match(KW_DROP);
			setState(1066);
			match(KW_DATABASE);
			setState(1068);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,102,_ctx) ) {
			case 1:
				{
				setState(1067);
				ifExists();
				}
				break;
			}
			setState(1070);
			databasePath();
			setState(1072);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_CASCADE || _la==KW_RESTRICT) {
				{
				setState(1071);
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
			setState(1074);
			match(KW_DROP);
			setState(1076);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_TEMPORARY) {
				{
				setState(1075);
				match(KW_TEMPORARY);
				}
			}

			setState(1078);
			match(KW_VIEW);
			setState(1080);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,105,_ctx) ) {
			case 1:
				{
				setState(1079);
				ifExists();
				}
				break;
			}
			setState(1082);
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
			setState(1084);
			match(KW_DROP);
			setState(1088);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,106,_ctx) ) {
			case 1:
				{
				setState(1085);
				match(KW_TEMPORARY);
				}
				break;
			case 2:
				{
				setState(1086);
				match(KW_TEMPORARY);
				setState(1087);
				match(KW_SYSTEM);
				}
				break;
			}
			setState(1090);
			match(KW_FUNCTION);
			setState(1092);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,107,_ctx) ) {
			case 1:
				{
				setState(1091);
				ifExists();
				}
				break;
			}
			setState(1094);
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
			setState(1103);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,109,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(1097);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_EXECUTE) {
					{
					setState(1096);
					match(KW_EXECUTE);
					}
				}

				setState(1099);
				insertSimpleStatement();
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1100);
				insertMulStatementCompatibility();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				{
				setState(1101);
				match(KW_EXECUTE);
				setState(1102);
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
			setState(1105);
			match(KW_INSERT);
			setState(1106);
			_la = _input.LA(1);
			if ( !(_la==KW_OVERWRITE || _la==KW_INTO) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(1107);
			tablePath();
			setState(1116);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,112,_ctx) ) {
			case 1:
				{
				setState(1109);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_PARTITION) {
					{
					setState(1108);
					insertPartitionDefinition();
					}
				}

				setState(1112);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,111,_ctx) ) {
				case 1:
					{
					setState(1111);
					columnNameList();
					}
					break;
				}
				setState(1114);
				queryStatement(0);
				}
				break;
			case 2:
				{
				setState(1115);
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
			setState(1118);
			match(KW_PARTITION);
			setState(1119);
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
			setState(1121);
			match(KW_VALUES);
			setState(1122);
			valuesRowDefinition();
			setState(1127);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1123);
				match(COMMA);
				setState(1124);
				valuesRowDefinition();
				}
				}
				setState(1129);
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
			setState(1130);
			match(LR_BRACKET);
			setState(1131);
			constant();
			setState(1136);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1132);
				match(COMMA);
				setState(1133);
				constant();
				}
				}
				setState(1138);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1139);
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
			setState(1141);
			match(KW_BEGIN);
			setState(1142);
			match(KW_STATEMENT);
			setState(1143);
			match(KW_SET);
			setState(1144);
			match(SEMICOLON);
			setState(1148); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(1145);
				insertSimpleStatement();
				setState(1146);
				match(SEMICOLON);
				}
				}
				setState(1150); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==KW_INSERT );
			setState(1152);
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
			setState(1154);
			match(KW_STATEMENT);
			setState(1155);
			match(KW_SET);
			setState(1156);
			match(KW_BEGIN);
			setState(1160); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(1157);
				insertSimpleStatement();
				setState(1158);
				match(SEMICOLON);
				}
				}
				setState(1162); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==KW_INSERT );
			setState(1164);
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
			setState(1189);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,121,_ctx) ) {
			case 1:
				{
				setState(1167);
				valuesCaluse();
				}
				break;
			case 2:
				{
				setState(1168);
				withClause();
				setState(1169);
				queryStatement(5);
				}
				break;
			case 3:
				{
				setState(1171);
				match(LR_BRACKET);
				setState(1172);
				queryStatement(0);
				setState(1173);
				match(RR_BRACKET);
				}
				break;
			case 4:
				{
				setState(1175);
				selectClause();
				setState(1177);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,117,_ctx) ) {
				case 1:
					{
					setState(1176);
					orderByCaluse();
					}
					break;
				}
				setState(1180);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,118,_ctx) ) {
				case 1:
					{
					setState(1179);
					limitClause();
					}
					break;
				}
				}
				break;
			case 5:
				{
				setState(1182);
				selectStatement();
				setState(1184);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,119,_ctx) ) {
				case 1:
					{
					setState(1183);
					orderByCaluse();
					}
					break;
				}
				setState(1187);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,120,_ctx) ) {
				case 1:
					{
					setState(1186);
					limitClause();
					}
					break;
				}
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(1205);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,125,_ctx);
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
					setState(1191);
					if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
					setState(1192);
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
					setState(1194);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==KW_ALL) {
						{
						setState(1193);
						match(KW_ALL);
						}
					}

					setState(1196);
					((QueryStatementContext)_localctx).right = queryStatement(0);
					setState(1198);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,123,_ctx) ) {
					case 1:
						{
						setState(1197);
						orderByCaluse();
						}
						break;
					}
					setState(1201);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,124,_ctx) ) {
					case 1:
						{
						setState(1200);
						limitClause();
						}
						break;
					}
					}
					} 
				}
				setState(1207);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,125,_ctx);
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
			setState(1208);
			match(KW_VALUES);
			setState(1209);
			expression();
			setState(1214);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,126,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1210);
					match(COMMA);
					setState(1211);
					expression();
					}
					} 
				}
				setState(1216);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,126,_ctx);
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
			setState(1217);
			match(KW_WITH);
			setState(1218);
			withItem();
			setState(1223);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1219);
				match(COMMA);
				setState(1220);
				withItem();
				}
				}
				setState(1225);
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
			setState(1226);
			withItemName();
			setState(1238);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LR_BRACKET) {
				{
				setState(1227);
				match(LR_BRACKET);
				setState(1228);
				columnName();
				setState(1233);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1229);
					match(COMMA);
					setState(1230);
					columnName();
					}
					}
					setState(1235);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1236);
				match(RR_BRACKET);
				}
			}

			setState(1240);
			match(KW_AS);
			setState(1241);
			match(LR_BRACKET);
			setState(1242);
			queryStatement(0);
			setState(1243);
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
			setState(1245);
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
			setState(1265);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,134,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1247);
				selectClause();
				setState(1248);
				fromClause();
				setState(1250);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,130,_ctx) ) {
				case 1:
					{
					setState(1249);
					whereClause();
					}
					break;
				}
				setState(1253);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,131,_ctx) ) {
				case 1:
					{
					setState(1252);
					groupByClause();
					}
					break;
				}
				setState(1256);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,132,_ctx) ) {
				case 1:
					{
					setState(1255);
					havingClause();
					}
					break;
				}
				setState(1259);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,133,_ctx) ) {
				case 1:
					{
					setState(1258);
					windowClause();
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1261);
				selectClause();
				setState(1262);
				fromClause();
				setState(1263);
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
			setState(1267);
			match(KW_SELECT);
			setState(1269);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_ALL || _la==KW_DISTINCT) {
				{
				setState(1268);
				setQuantifier();
				}
			}

			setState(1280);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,137,_ctx) ) {
			case 1:
				{
				setState(1271);
				match(ASTERISK_SIGN);
				}
				break;
			case 2:
				{
				setState(1272);
				projectItemDefinition();
				setState(1277);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,136,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(1273);
						match(COMMA);
						setState(1274);
						projectItemDefinition();
						}
						} 
					}
					setState(1279);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,136,_ctx);
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
			setState(1290);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,140,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1282);
				overWindowItem();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1283);
				expression();
				setState(1288);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,139,_ctx) ) {
				case 1:
					{
					setState(1285);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==KW_AS) {
						{
						setState(1284);
						match(KW_AS);
						}
					}

					setState(1287);
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
			setState(1304);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,141,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1292);
				primaryExpression(0);
				setState(1293);
				match(KW_OVER);
				setState(1294);
				windowSpec();
				setState(1295);
				match(KW_AS);
				setState(1296);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1298);
				primaryExpression(0);
				setState(1299);
				match(KW_OVER);
				setState(1300);
				errorCapturingIdentifier();
				setState(1301);
				match(KW_AS);
				setState(1302);
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
			setState(1306);
			match(KW_FROM);
			setState(1307);
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
			setState(1320);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,143,_ctx) ) {
			case 1:
				{
				setState(1310);
				tableReference();
				setState(1315);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,142,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(1311);
						match(COMMA);
						setState(1312);
						tableReference();
						}
						} 
					}
					setState(1317);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,142,_ctx);
				}
				}
				break;
			case 2:
				{
				setState(1318);
				inlineDataValueClause();
				}
				break;
			case 3:
				{
				setState(1319);
				windoTVFClause();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(1343);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,149,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(1341);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,148,_ctx) ) {
					case 1:
						{
						_localctx = new TableExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_tableExpression);
						setState(1322);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(1323);
						match(KW_CROSS);
						setState(1324);
						match(KW_JOIN);
						setState(1325);
						tableExpression(4);
						}
						break;
					case 2:
						{
						_localctx = new TableExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_tableExpression);
						setState(1326);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(1328);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==KW_NATURAL) {
							{
							setState(1327);
							match(KW_NATURAL);
							}
						}

						setState(1331);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (((((_la - 255)) & ~0x3f) == 0 && ((1L << (_la - 255)) & ((1L << (KW_FULL - 255)) | (1L << (KW_INNER - 255)) | (1L << (KW_LEFT - 255)))) != 0) || _la==KW_RIGHT) {
							{
							setState(1330);
							_la = _input.LA(1);
							if ( !(((((_la - 255)) & ~0x3f) == 0 && ((1L << (_la - 255)) & ((1L << (KW_FULL - 255)) | (1L << (KW_INNER - 255)) | (1L << (KW_LEFT - 255)))) != 0) || _la==KW_RIGHT) ) {
							_errHandler.recoverInline(this);
							}
							else {
								if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
								_errHandler.reportMatch(this);
								consume();
							}
							}
						}

						setState(1334);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==KW_OUTER) {
							{
							setState(1333);
							match(KW_OUTER);
							}
						}

						setState(1336);
						match(KW_JOIN);
						setState(1337);
						tableExpression(0);
						setState(1339);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,147,_ctx) ) {
						case 1:
							{
							setState(1338);
							joinCondition();
							}
							break;
						}
						}
						break;
					}
					} 
				}
				setState(1345);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,149,_ctx);
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
			setState(1346);
			tablePrimary();
			setState(1348);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,150,_ctx) ) {
			case 1:
				{
				setState(1347);
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
			setState(1391);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,157,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1351);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_TABLE) {
					{
					setState(1350);
					match(KW_TABLE);
					}
				}

				setState(1353);
				tablePath();
				setState(1355);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,152,_ctx) ) {
				case 1:
					{
					setState(1354);
					systemTimePeriod();
					}
					break;
				}
				setState(1361);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,154,_ctx) ) {
				case 1:
					{
					setState(1358);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==KW_AS) {
						{
						setState(1357);
						match(KW_AS);
						}
					}

					setState(1360);
					correlationName();
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1363);
				match(KW_LATERAL);
				setState(1364);
				match(KW_TABLE);
				setState(1365);
				match(LR_BRACKET);
				setState(1366);
				functionName();
				setState(1367);
				match(LR_BRACKET);
				setState(1368);
				functionParam();
				setState(1373);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1369);
					match(COMMA);
					setState(1370);
					functionParam();
					}
					}
					setState(1375);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1376);
				match(RR_BRACKET);
				setState(1377);
				match(RR_BRACKET);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1380);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_LATERAL) {
					{
					setState(1379);
					match(KW_LATERAL);
					}
				}

				setState(1382);
				match(LR_BRACKET);
				setState(1383);
				queryStatement(0);
				setState(1384);
				match(RR_BRACKET);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1386);
				match(KW_UNNEST);
				setState(1387);
				match(LR_BRACKET);
				setState(1388);
				expression();
				setState(1389);
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
			setState(1393);
			match(KW_FOR);
			setState(1394);
			match(KW_SYSTEM_TIME);
			setState(1395);
			match(KW_AS);
			setState(1396);
			match(KW_OF);
			setState(1397);
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
			setState(1399);
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
			setState(1401);
			match(LR_BRACKET);
			setState(1402);
			valuesDefinition();
			setState(1403);
			match(RR_BRACKET);
			setState(1404);
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
			setState(1406);
			match(KW_TABLE);
			setState(1407);
			match(LR_BRACKET);
			setState(1408);
			windowTVFExression();
			setState(1409);
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
			setState(1411);
			windoTVFName();
			setState(1412);
			match(LR_BRACKET);
			setState(1413);
			windowTVFParam();
			setState(1418);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1414);
				match(COMMA);
				setState(1415);
				windowTVFParam();
				}
				}
				setState(1420);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1421);
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
			setState(1423);
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
			setState(1440);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,159,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1425);
				match(KW_TABLE);
				setState(1426);
				timeAttrColumn();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1427);
				columnDescriptor();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1428);
				timeIntervalExpression();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1429);
				match(KW_DATA);
				setState(1430);
				match(DOUBLE_RIGHT_ARROW);
				setState(1431);
				match(KW_TABLE);
				setState(1432);
				timeAttrColumn();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1433);
				match(KW_TIMECOL);
				setState(1434);
				match(DOUBLE_RIGHT_ARROW);
				setState(1435);
				columnDescriptor();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1436);
				timeIntervalParamName();
				setState(1437);
				match(DOUBLE_RIGHT_ARROW);
				setState(1438);
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
			setState(1442);
			_la = _input.LA(1);
			if ( !(_la==KW_DATA || ((((_la - 140)) & ~0x3f) == 0 && ((1L << (_la - 140)) & ((1L << (KW_SIZE - 140)) | (1L << (KW_SLIDE - 140)) | (1L << (KW_STEP - 140)) | (1L << (KW_TIMECOL - 140)))) != 0) || _la==KW_OFFSET) ) {
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
			setState(1444);
			match(KW_DESCRIPTOR);
			setState(1445);
			match(LR_BRACKET);
			setState(1446);
			uid();
			setState(1447);
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
			setState(1463);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_ON:
				enterOuterAlt(_localctx, 1);
				{
				setState(1449);
				match(KW_ON);
				setState(1450);
				booleanExpression(0);
				}
				break;
			case KW_USING:
				enterOuterAlt(_localctx, 2);
				{
				setState(1451);
				match(KW_USING);
				setState(1452);
				match(LR_BRACKET);
				setState(1453);
				uid();
				setState(1458);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1454);
					match(COMMA);
					setState(1455);
					uid();
					}
					}
					setState(1460);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1461);
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
			setState(1465);
			match(KW_WHERE);
			setState(1466);
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
			setState(1468);
			match(KW_GROUP);
			setState(1469);
			match(KW_BY);
			setState(1470);
			groupItemDefinition();
			setState(1475);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,162,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1471);
					match(COMMA);
					setState(1472);
					groupItemDefinition();
					}
					} 
				}
				setState(1477);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,162,_ctx);
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
			setState(1517);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,166,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1478);
				expression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1479);
				groupWindowFunction();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1480);
				match(LR_BRACKET);
				setState(1481);
				match(RR_BRACKET);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1482);
				match(LR_BRACKET);
				setState(1483);
				expression();
				setState(1488);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1484);
					match(COMMA);
					setState(1485);
					expression();
					}
					}
					setState(1490);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1491);
				match(RR_BRACKET);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1493);
				groupingSetsNotaionName();
				setState(1494);
				match(LR_BRACKET);
				setState(1495);
				expression();
				setState(1500);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1496);
					match(COMMA);
					setState(1497);
					expression();
					}
					}
					setState(1502);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1503);
				match(RR_BRACKET);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1505);
				groupingSets();
				setState(1506);
				match(LR_BRACKET);
				setState(1507);
				groupItemDefinition();
				setState(1512);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1508);
					match(COMMA);
					setState(1509);
					groupItemDefinition();
					}
					}
					setState(1514);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1515);
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
			setState(1519);
			match(KW_GROUPING);
			setState(1520);
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
			setState(1522);
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
			setState(1524);
			groupWindowFunctionName();
			setState(1525);
			match(LR_BRACKET);
			setState(1526);
			timeAttrColumn();
			setState(1527);
			match(COMMA);
			setState(1528);
			timeIntervalExpression();
			setState(1529);
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
			setState(1531);
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
			setState(1533);
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
			setState(1535);
			match(KW_HAVING);
			setState(1536);
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
			setState(1538);
			match(KW_WINDOW);
			setState(1539);
			namedWindow();
			setState(1544);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,167,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1540);
					match(COMMA);
					setState(1541);
					namedWindow();
					}
					} 
				}
				setState(1546);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,167,_ctx);
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
			setState(1547);
			((NamedWindowContext)_localctx).name = errorCapturingIdentifier();
			setState(1548);
			match(KW_AS);
			setState(1549);
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
			setState(1552);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << KW_ADD) | (1L << KW_ADMIN) | (1L << KW_AFTER) | (1L << KW_ANALYZE) | (1L << KW_ASC) | (1L << KW_BEFORE) | (1L << KW_BYTES) | (1L << KW_CASCADE) | (1L << KW_CATALOG) | (1L << KW_CATALOGS) | (1L << KW_CENTURY) | (1L << KW_CHAIN) | (1L << KW_CHANGELOG_MODE) | (1L << KW_CHARACTERS) | (1L << KW_COMMENT) | (1L << KW_COMPACT) | (1L << KW_COLUMNS) | (1L << KW_CONSTRAINTS) | (1L << KW_CONSTRUCTOR) | (1L << KW_CUMULATE) | (1L << KW_DATA) | (1L << KW_DATABASE) | (1L << KW_DATABASES) | (1L << KW_DAYS) | (1L << KW_DECADE) | (1L << KW_DEFINED) | (1L << KW_DESC) | (1L << KW_DESCRIPTOR) | (1L << KW_DIV) | (1L << KW_ENCODING) | (1L << KW_ENFORCED) | (1L << KW_ENGINE) | (1L << KW_ERROR) | (1L << KW_ESTIMATED_COST) | (1L << KW_EXCEPTION) | (1L << KW_EXCLUDE) | (1L << KW_EXCLUDING) | (1L << KW_EXTENDED) | (1L << KW_FILE) | (1L << KW_FINAL) | (1L << KW_FIRST) | (1L << KW_FOLLOWING) | (1L << KW_FORMAT) | (1L << KW_FORTRAN) | (1L << KW_FOUND) | (1L << KW_FRAC_SECOND) | (1L << KW_FUNCTIONS) | (1L << KW_GENERAL) | (1L << KW_GENERATED) | (1L << KW_GO) | (1L << KW_GOTO) | (1L << KW_GRANTED) | (1L << KW_HOP) | (1L << KW_HOURS) | (1L << KW_IF) | (1L << KW_IGNORE) | (1L << KW_INCREMENT) | (1L << KW_INPUT))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (KW_INVOKER - 64)) | (1L << (KW_JAR - 64)) | (1L << (KW_JARS - 64)) | (1L << (KW_JAVA - 64)) | (1L << (KW_JSON - 64)) | (1L << (KW_JSON_EXECUTION_PLAN - 64)) | (1L << (KW_KEY - 64)) | (1L << (KW_KEY_MEMBER - 64)) | (1L << (KW_KEY_TYPE - 64)) | (1L << (KW_LABEL - 64)) | (1L << (KW_LAST - 64)) | (1L << (KW_LENGTH - 64)) | (1L << (KW_LEVEL - 64)) | (1L << (KW_LOAD - 64)) | (1L << (KW_MAP - 64)) | (1L << (KW_MICROSECOND - 64)) | (1L << (KW_MILLENNIUM - 64)) | (1L << (KW_MILLISECOND - 64)) | (1L << (KW_MINUTES - 64)) | (1L << (KW_MINVALUE - 64)) | (1L << (KW_MODIFY - 64)) | (1L << (KW_MODULES - 64)) | (1L << (KW_MONTHS - 64)) | (1L << (KW_NANOSECOND - 64)) | (1L << (KW_NULLS - 64)) | (1L << (KW_NUMBER - 64)) | (1L << (KW_OPTION - 64)) | (1L << (KW_OPTIONS - 64)) | (1L << (KW_ORDERING - 64)) | (1L << (KW_OUTPUT - 64)) | (1L << (KW_OVERWRITE - 64)) | (1L << (KW_OVERWRITING - 64)) | (1L << (KW_PARTITIONED - 64)) | (1L << (KW_PARTITIONS - 64)) | (1L << (KW_PASSING - 64)) | (1L << (KW_PAST - 64)) | (1L << (KW_PATH - 64)) | (1L << (KW_PLACING - 64)) | (1L << (KW_PLAN - 64)) | (1L << (KW_PRECEDING - 64)) | (1L << (KW_PRESERVE - 64)) | (1L << (KW_PRIOR - 64)) | (1L << (KW_PRIVILEGES - 64)) | (1L << (KW_PUBLIC - 64)) | (1L << (KW_PYTHON - 64)) | (1L << (KW_PYTHON_FILES - 64)) | (1L << (KW_PYTHON_REQUIREMENTS - 64)) | (1L << (KW_PYTHON_DEPENDENCIES - 64)) | (1L << (KW_PYTHON_JAR - 64)) | (1L << (KW_PYTHON_ARCHIVES - 64)) | (1L << (KW_PYTHON_PARAMETER - 64)) | (1L << (KW_QUARTER - 64)) | (1L << (KW_RAW - 64)) | (1L << (KW_READ - 64)) | (1L << (KW_RELATIVE - 64)) | (1L << (KW_REMOVE - 64)) | (1L << (KW_RENAME - 64)) | (1L << (KW_REPLACE - 64)) | (1L << (KW_RESPECT - 64)) | (1L << (KW_RESTART - 64)) | (1L << (KW_RESTRICT - 64)) | (1L << (KW_ROLE - 64)) | (1L << (KW_ROW_COUNT - 64)) | (1L << (KW_SCALA - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (KW_SCALAR - 128)) | (1L << (KW_SCALE - 128)) | (1L << (KW_SCHEMA - 128)) | (1L << (KW_SECONDS - 128)) | (1L << (KW_SECTION - 128)) | (1L << (KW_SECURITY - 128)) | (1L << (KW_SELF - 128)) | (1L << (KW_SERVER - 128)) | (1L << (KW_SERVER_NAME - 128)) | (1L << (KW_SESSION - 128)) | (1L << (KW_SETS - 128)) | (1L << (KW_SIMPLE - 128)) | (1L << (KW_SIZE - 128)) | (1L << (KW_SLIDE - 128)) | (1L << (KW_SOURCE - 128)) | (1L << (KW_SPACE - 128)) | (1L << (KW_STATE - 128)) | (1L << (KW_STATEMENT - 128)) | (1L << (KW_STEP - 128)) | (1L << (KW_STRING - 128)) | (1L << (KW_STRUCTURE - 128)) | (1L << (KW_STYLE - 128)) | (1L << (KW_TABLES - 128)) | (1L << (KW_TEMPORARY - 128)) | (1L << (KW_TIMECOL - 128)) | (1L << (KW_FLOOR - 128)) | (1L << (KW_TIMESTAMP_LTZ - 128)) | (1L << (KW_TIMESTAMPADD - 128)) | (1L << (KW_TIMESTAMPDIFF - 128)) | (1L << (KW_TRANSFORM - 128)) | (1L << (KW_TUMBLE - 128)) | (1L << (KW_TYPE - 128)) | (1L << (KW_UNDER - 128)) | (1L << (KW_UNLOAD - 128)) | (1L << (KW_USAGE - 128)) | (1L << (KW_USE - 128)) | (1L << (KW_UTF16 - 128)) | (1L << (KW_UTF32 - 128)) | (1L << (KW_UTF8 - 128)) | (1L << (KW_VERSION - 128)) | (1L << (KW_VIEW - 128)) | (1L << (KW_VIEWS - 128)) | (1L << (KW_VIRTUAL - 128)) | (1L << (KW_WATERMARK - 128)) | (1L << (KW_WATERMARKS - 128)) | (1L << (KW_WEEK - 128)) | (1L << (KW_WORK - 128)) | (1L << (KW_WRAPPER - 128)) | (1L << (KW_YEARS - 128)) | (1L << (KW_ZONE - 128)))) != 0) || ((((_la - 410)) & ~0x3f) == 0 && ((1L << (_la - 410)) & ((1L << (STRING_LITERAL - 410)) | (1L << (DIG_LITERAL - 410)) | (1L << (ID_LITERAL - 410)))) != 0)) {
				{
				setState(1551);
				((WindowSpecContext)_localctx).name = errorCapturingIdentifier();
				}
			}

			setState(1554);
			match(LR_BRACKET);
			setState(1556);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_PARTITION) {
				{
				setState(1555);
				partitionByClause();
				}
			}

			setState(1559);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_ORDER) {
				{
				setState(1558);
				orderByCaluse();
				}
			}

			setState(1562);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_RANGE || _la==KW_ROWS) {
				{
				setState(1561);
				windowFrame();
				}
			}

			setState(1564);
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
			setState(1566);
			match(KW_MATCH_RECOGNIZE);
			setState(1567);
			match(LR_BRACKET);
			setState(1569);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_PARTITION) {
				{
				setState(1568);
				partitionByClause();
				}
			}

			setState(1572);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_ORDER) {
				{
				setState(1571);
				orderByCaluse();
				}
			}

			setState(1575);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_MEASURES) {
				{
				setState(1574);
				measuresClause();
				}
			}

			setState(1578);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_ALL || _la==KW_ONE) {
				{
				setState(1577);
				outputMode();
				}
			}

			setState(1581);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_AFTER) {
				{
				setState(1580);
				afterMatchStrategy();
				}
			}

			setState(1584);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_PATTERN) {
				{
				setState(1583);
				patternDefination();
				}
			}

			setState(1586);
			patternVariablesDefination();
			setState(1587);
			match(RR_BRACKET);
			setState(1592);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,179,_ctx) ) {
			case 1:
				{
				setState(1589);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_AS) {
					{
					setState(1588);
					match(KW_AS);
					}
				}

				setState(1591);
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
			setState(1594);
			match(KW_ORDER);
			setState(1595);
			match(KW_BY);
			setState(1596);
			orderItemDefition();
			setState(1601);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,180,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1597);
					match(COMMA);
					setState(1598);
					orderItemDefition();
					}
					} 
				}
				setState(1603);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,180,_ctx);
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
			setState(1604);
			expression();
			setState(1606);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,181,_ctx) ) {
			case 1:
				{
				setState(1605);
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
			setState(1610);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,182,_ctx) ) {
			case 1:
				{
				setState(1608);
				match(KW_NULLS);
				setState(1609);
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
			setState(1612);
			match(KW_LIMIT);
			setState(1615);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_ALL:
				{
				setState(1613);
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
				setState(1614);
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
			setState(1617);
			match(KW_PARTITION);
			setState(1618);
			match(KW_BY);
			setState(1619);
			expression();
			setState(1624);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1620);
				match(COMMA);
				setState(1621);
				expression();
				}
				}
				setState(1626);
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
			setState(1643);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,185,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(1627);
				match(ASTERISK_SIGN);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(1628);
				match(ADD_SIGN);
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				{
				setState(1629);
				match(QUESTION_MARK_SIGN);
				}
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				{
				setState(1630);
				match(LB_BRACKET);
				setState(1631);
				match(DIG_LITERAL);
				setState(1632);
				match(COMMA);
				setState(1633);
				match(DIG_LITERAL);
				setState(1634);
				match(RB_BRACKET);
				}
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				{
				setState(1635);
				match(LB_BRACKET);
				setState(1636);
				match(DIG_LITERAL);
				setState(1637);
				match(COMMA);
				setState(1638);
				match(RB_BRACKET);
				}
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				{
				setState(1639);
				match(LB_BRACKET);
				setState(1640);
				match(COMMA);
				setState(1641);
				match(DIG_LITERAL);
				setState(1642);
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
			setState(1645);
			match(KW_MEASURES);
			setState(1646);
			projectItemDefinition();
			setState(1651);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1647);
				match(COMMA);
				setState(1648);
				projectItemDefinition();
				}
				}
				setState(1653);
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
			setState(1654);
			match(KW_PATTERN);
			setState(1655);
			match(LR_BRACKET);
			setState(1657); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(1656);
				patternVariable();
				}
				}
				setState(1659); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==DIG_LITERAL || _la==ID_LITERAL );
			setState(1661);
			match(RR_BRACKET);
			setState(1663);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_WITHIN) {
				{
				setState(1662);
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
			setState(1665);
			unquotedIdentifier();
			setState(1667);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 391)) & ~0x3f) == 0 && ((1L << (_la - 391)) & ((1L << (LB_BRACKET - 391)) | (1L << (ASTERISK_SIGN - 391)) | (1L << (ADD_SIGN - 391)) | (1L << (QUESTION_MARK_SIGN - 391)))) != 0)) {
				{
				setState(1666);
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
			setState(1677);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_ALL:
				enterOuterAlt(_localctx, 1);
				{
				setState(1669);
				match(KW_ALL);
				setState(1670);
				match(KW_ROWS);
				setState(1671);
				match(KW_PER);
				setState(1672);
				match(KW_MATCH);
				}
				break;
			case KW_ONE:
				enterOuterAlt(_localctx, 2);
				{
				setState(1673);
				match(KW_ONE);
				setState(1674);
				match(KW_ROW);
				setState(1675);
				match(KW_PER);
				setState(1676);
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
			setState(1703);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,191,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1679);
				match(KW_AFTER);
				setState(1680);
				match(KW_MATCH);
				setState(1681);
				match(KW_SKIP);
				setState(1682);
				match(KW_PAST);
				setState(1683);
				match(KW_LAST);
				setState(1684);
				match(KW_ROW);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1685);
				match(KW_AFTER);
				setState(1686);
				match(KW_MATCH);
				setState(1687);
				match(KW_SKIP);
				setState(1688);
				match(KW_TO);
				setState(1689);
				match(KW_NEXT);
				setState(1690);
				match(KW_ROW);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1691);
				match(KW_AFTER);
				setState(1692);
				match(KW_MATCH);
				setState(1693);
				match(KW_SKIP);
				setState(1694);
				match(KW_TO);
				setState(1695);
				match(KW_LAST);
				setState(1696);
				unquotedIdentifier();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1697);
				match(KW_AFTER);
				setState(1698);
				match(KW_MATCH);
				setState(1699);
				match(KW_SKIP);
				setState(1700);
				match(KW_TO);
				setState(1701);
				match(KW_FIRST);
				setState(1702);
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
			setState(1705);
			match(KW_DEFINE);
			setState(1706);
			projectItemDefinition();
			setState(1711);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1707);
				match(COMMA);
				setState(1708);
				projectItemDefinition();
				}
				}
				setState(1713);
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
			setState(1723);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_RANGE:
				enterOuterAlt(_localctx, 1);
				{
				setState(1714);
				match(KW_RANGE);
				setState(1715);
				match(KW_BETWEEN);
				setState(1716);
				timeIntervalExpression();
				setState(1717);
				frameBound();
				}
				break;
			case KW_ROWS:
				enterOuterAlt(_localctx, 2);
				{
				setState(1719);
				match(KW_ROWS);
				setState(1720);
				match(KW_BETWEEN);
				setState(1721);
				match(DIG_LITERAL);
				setState(1722);
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
			setState(1725);
			match(KW_PRECEDING);
			setState(1726);
			match(KW_AND);
			setState(1727);
			match(KW_CURRENT);
			setState(1728);
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
			setState(1730);
			match(KW_WITHIN);
			setState(1731);
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
			setState(1733);
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
			setState(1747);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,195,_ctx) ) {
			case 1:
				{
				_localctx = new LogicalNotContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(1736);
				match(KW_NOT);
				setState(1737);
				booleanExpression(6);
				}
				break;
			case 2:
				{
				_localctx = new ExistsContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1738);
				match(KW_EXISTS);
				setState(1739);
				match(LR_BRACKET);
				setState(1740);
				queryStatement(0);
				setState(1741);
				match(RR_BRACKET);
				}
				break;
			case 3:
				{
				_localctx = new PredicatedContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1743);
				valueExpression(0);
				setState(1745);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,194,_ctx) ) {
				case 1:
					{
					setState(1744);
					predicate();
					}
					break;
				}
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(1763);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,198,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(1761);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,197,_ctx) ) {
					case 1:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						((LogicalBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_booleanExpression);
						setState(1749);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(1750);
						((LogicalBinaryContext)_localctx).operator = match(KW_AND);
						setState(1751);
						((LogicalBinaryContext)_localctx).right = booleanExpression(4);
						}
						break;
					case 2:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						((LogicalBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_booleanExpression);
						setState(1752);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(1753);
						((LogicalBinaryContext)_localctx).operator = match(KW_OR);
						setState(1754);
						((LogicalBinaryContext)_localctx).right = booleanExpression(3);
						}
						break;
					case 3:
						{
						_localctx = new LogicalNestedContext(new BooleanExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_booleanExpression);
						setState(1755);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(1756);
						match(KW_IS);
						setState(1758);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==KW_NOT) {
							{
							setState(1757);
							match(KW_NOT);
							}
						}

						setState(1760);
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
				setState(1765);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,198,_ctx);
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
			setState(1833);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,209,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1767);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1766);
					match(KW_NOT);
					}
				}

				setState(1769);
				((PredicateContext)_localctx).kind = match(KW_BETWEEN);
				setState(1771);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_ASYMMETRIC || _la==KW_SYMMETRIC) {
					{
					setState(1770);
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

				setState(1773);
				((PredicateContext)_localctx).lower = valueExpression(0);
				setState(1774);
				match(KW_AND);
				setState(1775);
				((PredicateContext)_localctx).upper = valueExpression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1778);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1777);
					match(KW_NOT);
					}
				}

				setState(1780);
				((PredicateContext)_localctx).kind = match(KW_IN);
				setState(1781);
				match(LR_BRACKET);
				setState(1782);
				expression();
				setState(1787);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1783);
					match(COMMA);
					setState(1784);
					expression();
					}
					}
					setState(1789);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1790);
				match(RR_BRACKET);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1793);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1792);
					match(KW_NOT);
					}
				}

				setState(1795);
				((PredicateContext)_localctx).kind = match(KW_IN);
				setState(1796);
				match(LR_BRACKET);
				setState(1797);
				queryStatement(0);
				setState(1798);
				match(RR_BRACKET);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1800);
				((PredicateContext)_localctx).kind = match(KW_EXISTS);
				setState(1801);
				match(LR_BRACKET);
				setState(1802);
				queryStatement(0);
				setState(1803);
				match(RR_BRACKET);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1806);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1805);
					match(KW_NOT);
					}
				}

				setState(1808);
				((PredicateContext)_localctx).kind = match(KW_RLIKE);
				setState(1809);
				((PredicateContext)_localctx).pattern = valueExpression(0);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1810);
				likePredicate();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(1811);
				match(KW_IS);
				setState(1813);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1812);
					match(KW_NOT);
					}
				}

				setState(1815);
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
				setState(1816);
				match(KW_IS);
				setState(1818);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1817);
					match(KW_NOT);
					}
				}

				setState(1820);
				((PredicateContext)_localctx).kind = match(KW_DISTINCT);
				setState(1821);
				match(KW_FROM);
				setState(1822);
				((PredicateContext)_localctx).right = valueExpression(0);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(1824);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1823);
					match(KW_NOT);
					}
				}

				setState(1826);
				((PredicateContext)_localctx).kind = match(KW_SIMILAR);
				setState(1827);
				match(KW_TO);
				setState(1828);
				((PredicateContext)_localctx).right = valueExpression(0);
				setState(1831);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,208,_ctx) ) {
				case 1:
					{
					setState(1829);
					match(KW_ESCAPE);
					setState(1830);
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
			setState(1864);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,215,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1836);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1835);
					match(KW_NOT);
					}
				}

				setState(1838);
				((LikePredicateContext)_localctx).kind = match(KW_LIKE);
				setState(1839);
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
				setState(1853);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,212,_ctx) ) {
				case 1:
					{
					setState(1840);
					match(LR_BRACKET);
					setState(1841);
					match(RR_BRACKET);
					}
					break;
				case 2:
					{
					setState(1842);
					match(LR_BRACKET);
					setState(1843);
					expression();
					setState(1848);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(1844);
						match(COMMA);
						setState(1845);
						expression();
						}
						}
						setState(1850);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					setState(1851);
					match(RR_BRACKET);
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1856);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1855);
					match(KW_NOT);
					}
				}

				setState(1858);
				((LikePredicateContext)_localctx).kind = match(KW_LIKE);
				setState(1859);
				((LikePredicateContext)_localctx).pattern = valueExpression(0);
				setState(1862);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,214,_ctx) ) {
				case 1:
					{
					setState(1860);
					match(KW_ESCAPE);
					setState(1861);
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
			setState(1870);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,216,_ctx) ) {
			case 1:
				{
				_localctx = new ValueExpressionDefaultContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(1867);
				primaryExpression(0);
				}
				break;
			case 2:
				{
				_localctx = new ArithmeticUnaryContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1868);
				((ArithmeticUnaryContext)_localctx).operator = _input.LT(1);
				_la = _input.LA(1);
				if ( !(((((_la - 382)) & ~0x3f) == 0 && ((1L << (_la - 382)) & ((1L << (BIT_NOT_OP - 382)) | (1L << (HYPNEN_SIGN - 382)) | (1L << (ADD_SIGN - 382)))) != 0)) ) {
					((ArithmeticUnaryContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(1869);
				valueExpression(8);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(1895);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,218,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(1893);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,217,_ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1872);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(1873);
						((ArithmeticBinaryContext)_localctx).operator = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==KW_DIV || ((((_la - 400)) & ~0x3f) == 0 && ((1L << (_la - 400)) & ((1L << (ASTERISK_SIGN - 400)) | (1L << (PENCENT_SIGN - 400)) | (1L << (SLASH_SIGN - 400)))) != 0)) ) {
							((ArithmeticBinaryContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(1874);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(8);
						}
						break;
					case 2:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1875);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(1876);
						((ArithmeticBinaryContext)_localctx).operator = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 402)) & ~0x3f) == 0 && ((1L << (_la - 402)) & ((1L << (HYPNEN_SIGN - 402)) | (1L << (ADD_SIGN - 402)) | (1L << (DOUBLE_VERTICAL_SIGN - 402)))) != 0)) ) {
							((ArithmeticBinaryContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(1877);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(7);
						}
						break;
					case 3:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1878);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(1879);
						((ArithmeticBinaryContext)_localctx).operator = match(BIT_AND_OP);
						setState(1880);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(6);
						}
						break;
					case 4:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1881);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(1882);
						((ArithmeticBinaryContext)_localctx).operator = match(BIT_XOR_OP);
						setState(1883);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(5);
						}
						break;
					case 5:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1884);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(1885);
						((ArithmeticBinaryContext)_localctx).operator = match(BIT_OR_OP);
						setState(1886);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(4);
						}
						break;
					case 6:
						{
						_localctx = new ComparisonContext(new ValueExpressionContext(_parentctx, _parentState));
						((ComparisonContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1887);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(1888);
						comparisonOperator();
						setState(1889);
						((ComparisonContext)_localctx).right = valueExpression(3);
						}
						break;
					case 7:
						{
						_localctx = new ArithmeticBinaryAlternateContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryAlternateContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1891);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(1892);
						((ArithmeticBinaryAlternateContext)_localctx).right = match(SLASH_TEXT);
						}
						break;
					}
					} 
				}
				setState(1897);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,218,_ctx);
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
			setState(1996);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,228,_ctx) ) {
			case 1:
				{
				_localctx = new SearchedCaseContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(1899);
				match(KW_CASE);
				setState(1901); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(1900);
					whenClause();
					}
					}
					setState(1903); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==KW_WHEN );
				setState(1907);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_ELSE) {
					{
					setState(1905);
					match(KW_ELSE);
					setState(1906);
					((SearchedCaseContext)_localctx).elseExpression = expression();
					}
				}

				setState(1909);
				match(KW_END);
				}
				break;
			case 2:
				{
				_localctx = new SimpleCaseContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1911);
				match(KW_CASE);
				setState(1912);
				((SimpleCaseContext)_localctx).value = expression();
				setState(1914); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(1913);
					whenClause();
					}
					}
					setState(1916); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==KW_WHEN );
				setState(1920);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_ELSE) {
					{
					setState(1918);
					match(KW_ELSE);
					setState(1919);
					((SimpleCaseContext)_localctx).elseExpression = expression();
					}
				}

				setState(1922);
				match(KW_END);
				}
				break;
			case 3:
				{
				_localctx = new CastContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1924);
				match(KW_CAST);
				setState(1925);
				match(LR_BRACKET);
				setState(1926);
				expression();
				setState(1927);
				match(KW_AS);
				setState(1928);
				columnType();
				setState(1929);
				match(RR_BRACKET);
				}
				break;
			case 4:
				{
				_localctx = new FirstContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1931);
				match(KW_FIRST);
				setState(1932);
				match(LR_BRACKET);
				setState(1933);
				expression();
				setState(1936);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_IGNORE) {
					{
					setState(1934);
					match(KW_IGNORE);
					setState(1935);
					match(KW_NULLS);
					}
				}

				setState(1938);
				match(RR_BRACKET);
				}
				break;
			case 5:
				{
				_localctx = new LastContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1940);
				match(KW_LAST);
				setState(1941);
				match(LR_BRACKET);
				setState(1942);
				expression();
				setState(1945);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_IGNORE) {
					{
					setState(1943);
					match(KW_IGNORE);
					setState(1944);
					match(KW_NULLS);
					}
				}

				setState(1947);
				match(RR_BRACKET);
				}
				break;
			case 6:
				{
				_localctx = new PositionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1949);
				match(KW_POSITION);
				setState(1950);
				match(LR_BRACKET);
				setState(1951);
				((PositionContext)_localctx).substr = valueExpression(0);
				setState(1952);
				match(KW_IN);
				setState(1953);
				((PositionContext)_localctx).str = valueExpression(0);
				setState(1954);
				match(RR_BRACKET);
				}
				break;
			case 7:
				{
				_localctx = new ConstantDefaultContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1956);
				constant();
				}
				break;
			case 8:
				{
				_localctx = new StarContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1957);
				match(ASTERISK_SIGN);
				}
				break;
			case 9:
				{
				_localctx = new StarContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1958);
				uid();
				setState(1959);
				match(DOT);
				setState(1960);
				match(ASTERISK_SIGN);
				}
				break;
			case 10:
				{
				_localctx = new SubqueryExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1962);
				match(LR_BRACKET);
				setState(1963);
				queryStatement(0);
				setState(1964);
				match(RR_BRACKET);
				}
				break;
			case 11:
				{
				_localctx = new FunctionCallContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1966);
				functionName();
				setState(1967);
				match(LR_BRACKET);
				setState(1979);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << KW_ADD) | (1L << KW_ADMIN) | (1L << KW_AFTER) | (1L << KW_ANALYZE) | (1L << KW_ASC) | (1L << KW_BEFORE) | (1L << KW_BYTES) | (1L << KW_CASCADE) | (1L << KW_CATALOG) | (1L << KW_CATALOGS) | (1L << KW_CENTURY) | (1L << KW_CHAIN) | (1L << KW_CHANGELOG_MODE) | (1L << KW_CHARACTERS) | (1L << KW_COMMENT) | (1L << KW_COMPACT) | (1L << KW_COLUMNS) | (1L << KW_CONSTRAINTS) | (1L << KW_CONSTRUCTOR) | (1L << KW_CUMULATE) | (1L << KW_DATA) | (1L << KW_DATABASE) | (1L << KW_DATABASES) | (1L << KW_DAYS) | (1L << KW_DECADE) | (1L << KW_DEFINED) | (1L << KW_DESC) | (1L << KW_DESCRIPTOR) | (1L << KW_DIV) | (1L << KW_ENCODING) | (1L << KW_ENFORCED) | (1L << KW_ENGINE) | (1L << KW_EPOCH) | (1L << KW_ERROR) | (1L << KW_ESTIMATED_COST) | (1L << KW_EXCEPTION) | (1L << KW_EXCLUDE) | (1L << KW_EXCLUDING) | (1L << KW_EXTENDED) | (1L << KW_FILE) | (1L << KW_FINAL) | (1L << KW_FIRST) | (1L << KW_FOLLOWING) | (1L << KW_FORMAT) | (1L << KW_FORTRAN) | (1L << KW_FOUND) | (1L << KW_FRAC_SECOND) | (1L << KW_FUNCTIONS) | (1L << KW_GENERAL) | (1L << KW_GENERATED) | (1L << KW_GO) | (1L << KW_GOTO) | (1L << KW_GRANTED) | (1L << KW_HOP) | (1L << KW_HOURS) | (1L << KW_IF) | (1L << KW_IGNORE) | (1L << KW_INCREMENT) | (1L << KW_INPUT))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (KW_INVOKER - 64)) | (1L << (KW_JAR - 64)) | (1L << (KW_JARS - 64)) | (1L << (KW_JAVA - 64)) | (1L << (KW_JSON - 64)) | (1L << (KW_JSON_EXECUTION_PLAN - 64)) | (1L << (KW_KEY - 64)) | (1L << (KW_KEY_MEMBER - 64)) | (1L << (KW_KEY_TYPE - 64)) | (1L << (KW_LABEL - 64)) | (1L << (KW_LAST - 64)) | (1L << (KW_LENGTH - 64)) | (1L << (KW_LEVEL - 64)) | (1L << (KW_LOAD - 64)) | (1L << (KW_MAP - 64)) | (1L << (KW_MICROSECOND - 64)) | (1L << (KW_MILLENNIUM - 64)) | (1L << (KW_MILLISECOND - 64)) | (1L << (KW_MINUTES - 64)) | (1L << (KW_MINVALUE - 64)) | (1L << (KW_MODIFY - 64)) | (1L << (KW_MODULES - 64)) | (1L << (KW_MONTHS - 64)) | (1L << (KW_NANOSECOND - 64)) | (1L << (KW_NULLS - 64)) | (1L << (KW_NUMBER - 64)) | (1L << (KW_OPTION - 64)) | (1L << (KW_OPTIONS - 64)) | (1L << (KW_ORDERING - 64)) | (1L << (KW_OUTPUT - 64)) | (1L << (KW_OVERWRITE - 64)) | (1L << (KW_OVERWRITING - 64)) | (1L << (KW_PARTITIONED - 64)) | (1L << (KW_PARTITIONS - 64)) | (1L << (KW_PASSING - 64)) | (1L << (KW_PAST - 64)) | (1L << (KW_PATH - 64)) | (1L << (KW_PLACING - 64)) | (1L << (KW_PLAN - 64)) | (1L << (KW_PRECEDING - 64)) | (1L << (KW_PRESERVE - 64)) | (1L << (KW_PRIOR - 64)) | (1L << (KW_PRIVILEGES - 64)) | (1L << (KW_PUBLIC - 64)) | (1L << (KW_PYTHON - 64)) | (1L << (KW_PYTHON_FILES - 64)) | (1L << (KW_PYTHON_REQUIREMENTS - 64)) | (1L << (KW_PYTHON_DEPENDENCIES - 64)) | (1L << (KW_PYTHON_JAR - 64)) | (1L << (KW_PYTHON_ARCHIVES - 64)) | (1L << (KW_PYTHON_PARAMETER - 64)) | (1L << (KW_QUARTER - 64)) | (1L << (KW_RAW - 64)) | (1L << (KW_READ - 64)) | (1L << (KW_RELATIVE - 64)) | (1L << (KW_REMOVE - 64)) | (1L << (KW_RENAME - 64)) | (1L << (KW_REPLACE - 64)) | (1L << (KW_RESPECT - 64)) | (1L << (KW_RESTART - 64)) | (1L << (KW_RESTRICT - 64)) | (1L << (KW_ROLE - 64)) | (1L << (KW_ROW_COUNT - 64)) | (1L << (KW_SCALA - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (KW_SCALAR - 128)) | (1L << (KW_SCALE - 128)) | (1L << (KW_SCHEMA - 128)) | (1L << (KW_SECONDS - 128)) | (1L << (KW_SECTION - 128)) | (1L << (KW_SECURITY - 128)) | (1L << (KW_SELF - 128)) | (1L << (KW_SERVER - 128)) | (1L << (KW_SERVER_NAME - 128)) | (1L << (KW_SESSION - 128)) | (1L << (KW_SETS - 128)) | (1L << (KW_SIMPLE - 128)) | (1L << (KW_SIZE - 128)) | (1L << (KW_SLIDE - 128)) | (1L << (KW_SOURCE - 128)) | (1L << (KW_SPACE - 128)) | (1L << (KW_STATE - 128)) | (1L << (KW_STATEMENT - 128)) | (1L << (KW_STEP - 128)) | (1L << (KW_STRING - 128)) | (1L << (KW_STRUCTURE - 128)) | (1L << (KW_STYLE - 128)) | (1L << (KW_TABLES - 128)) | (1L << (KW_TEMPORARY - 128)) | (1L << (KW_TIMECOL - 128)) | (1L << (KW_FLOOR - 128)) | (1L << (KW_TIMESTAMP_LTZ - 128)) | (1L << (KW_TIMESTAMPADD - 128)) | (1L << (KW_TIMESTAMPDIFF - 128)) | (1L << (KW_TRANSFORM - 128)) | (1L << (KW_TUMBLE - 128)) | (1L << (KW_TYPE - 128)) | (1L << (KW_UNDER - 128)) | (1L << (KW_UNLOAD - 128)) | (1L << (KW_USAGE - 128)) | (1L << (KW_USE - 128)) | (1L << (KW_UTF16 - 128)) | (1L << (KW_UTF32 - 128)) | (1L << (KW_UTF8 - 128)) | (1L << (KW_VERSION - 128)) | (1L << (KW_VIEW - 128)) | (1L << (KW_VIEWS - 128)) | (1L << (KW_VIRTUAL - 128)) | (1L << (KW_WATERMARK - 128)) | (1L << (KW_WATERMARKS - 128)) | (1L << (KW_WEEK - 128)) | (1L << (KW_WEEKS - 128)) | (1L << (KW_WORK - 128)) | (1L << (KW_WRAPPER - 128)) | (1L << (KW_YEARS - 128)) | (1L << (KW_ZONE - 128)) | (1L << (KW_ABS - 128)) | (1L << (KW_ALL - 128)) | (1L << (KW_ARRAY - 128)) | (1L << (KW_AVG - 128)))) != 0) || ((((_la - 198)) & ~0x3f) == 0 && ((1L << (_la - 198)) & ((1L << (KW_BOTH - 198)) | (1L << (KW_CASE - 198)) | (1L << (KW_CAST - 198)) | (1L << (KW_CEIL - 198)) | (1L << (KW_COALESCE - 198)) | (1L << (KW_COLLECT - 198)) | (1L << (KW_COUNT - 198)) | (1L << (KW_DATE - 198)) | (1L << (KW_DAY - 198)) | (1L << (KW_DISTINCT - 198)) | (1L << (KW_EXISTS - 198)) | (1L << (KW_FALSE - 198)) | (1L << (KW_GROUPING - 198)))) != 0) || ((((_la - 263)) & ~0x3f) == 0 && ((1L << (_la - 263)) & ((1L << (KW_HOUR - 263)) | (1L << (KW_INTERVAL - 263)) | (1L << (KW_LAG - 263)) | (1L << (KW_LEADING - 263)) | (1L << (KW_LEFT - 263)) | (1L << (KW_MINUTE - 263)) | (1L << (KW_MONTH - 263)) | (1L << (KW_NOT - 263)) | (1L << (KW_NULL - 263)) | (1L << (KW_OVERLAY - 263)) | (1L << (KW_POSITION - 263)) | (1L << (KW_POWER - 263)) | (1L << (KW_RANK - 263)) | (1L << (KW_RIGHT - 263)))) != 0) || ((((_la - 331)) & ~0x3f) == 0 && ((1L << (_la - 331)) & ((1L << (KW_SECOND - 331)) | (1L << (KW_SUBSTRING - 331)) | (1L << (KW_SUM - 331)) | (1L << (KW_TIME - 331)) | (1L << (KW_TIMESTAMP - 331)) | (1L << (KW_TIMESTAMP_3 - 331)) | (1L << (KW_TIMESTAMP_6 - 331)) | (1L << (KW_TIMESTAMP_9 - 331)) | (1L << (KW_TRAILING - 331)) | (1L << (KW_TRUE - 331)) | (1L << (KW_TRUNCATE - 331)) | (1L << (KW_UPPER - 331)) | (1L << (KW_YEAR - 331)) | (1L << (BIT_NOT_OP - 331)) | (1L << (LR_BRACKET - 331)))) != 0) || ((((_la - 400)) & ~0x3f) == 0 && ((1L << (_la - 400)) & ((1L << (ASTERISK_SIGN - 400)) | (1L << (HYPNEN_SIGN - 400)) | (1L << (ADD_SIGN - 400)) | (1L << (STRING_LITERAL - 400)) | (1L << (DIG_LITERAL - 400)) | (1L << (REAL_LITERAL - 400)) | (1L << (BIT_STRING - 400)) | (1L << (ID_LITERAL - 400)))) != 0)) {
					{
					setState(1969);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,225,_ctx) ) {
					case 1:
						{
						setState(1968);
						setQuantifier();
						}
						break;
					}
					setState(1971);
					functionParam();
					setState(1976);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(1972);
						match(COMMA);
						setState(1973);
						functionParam();
						}
						}
						setState(1978);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(1981);
				match(RR_BRACKET);
				}
				break;
			case 12:
				{
				_localctx = new FunctionCallContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1983);
				functionName();
				setState(1984);
				match(LR_BRACKET);
				setState(1985);
				functionParam();
				setState(1986);
				match(KW_TO);
				setState(1987);
				functionParam();
				setState(1988);
				match(RR_BRACKET);
				}
				break;
			case 13:
				{
				_localctx = new ColumnReferenceContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1990);
				identifier();
				}
				break;
			case 14:
				{
				_localctx = new DereferenceContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1991);
				dereferenceDefinition();
				}
				break;
			case 15:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1992);
				match(LR_BRACKET);
				setState(1993);
				expression();
				setState(1994);
				match(RR_BRACKET);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(2005);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,229,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new SubscriptContext(new PrimaryExpressionContext(_parentctx, _parentState));
					((SubscriptContext)_localctx).value = _prevctx;
					pushNewRecursionContext(_localctx, _startState, RULE_primaryExpression);
					setState(1998);
					if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
					setState(1999);
					match(LS_BRACKET);
					setState(2000);
					((SubscriptContext)_localctx).index = valueExpression(0);
					setState(2001);
					match(RS_BRACKET);
					}
					} 
				}
				setState(2007);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,229,_ctx);
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
		enterRule(_localctx, 270, RULE_functionName);
		try {
			setState(2011);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,230,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2008);
				reservedKeywordsUsedAsFuncName();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2009);
				nonReservedKeywords();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2010);
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
		public FunctionParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionParam; }
	}

	public final FunctionParamContext functionParam() throws RecognitionException {
		FunctionParamContext _localctx = new FunctionParamContext(_ctx, getState());
		enterRule(_localctx, 272, RULE_functionParam);
		try {
			setState(2017);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,231,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2013);
				reservedKeywordsUsedAsFuncParam();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2014);
				timeIntervalUnit();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2015);
				timePointUnit();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2016);
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
		enterRule(_localctx, 274, RULE_dereferenceDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2019);
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
		enterRule(_localctx, 276, RULE_correlationName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2021);
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
		enterRule(_localctx, 278, RULE_qualifiedName);
		try {
			setState(2025);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,232,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2023);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2024);
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
		enterRule(_localctx, 280, RULE_timeIntervalExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2027);
			match(KW_INTERVAL);
			setState(2030);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,233,_ctx) ) {
			case 1:
				{
				setState(2028);
				errorCapturingMultiUnitsInterval();
				}
				break;
			case 2:
				{
				setState(2029);
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
		enterRule(_localctx, 282, RULE_errorCapturingMultiUnitsInterval);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2032);
			multiUnitsInterval();
			setState(2034);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,234,_ctx) ) {
			case 1:
				{
				setState(2033);
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
		enterRule(_localctx, 284, RULE_multiUnitsInterval);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(2039); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(2036);
					intervalValue();
					setState(2037);
					timeIntervalUnit();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(2041); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,235,_ctx);
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
		enterRule(_localctx, 286, RULE_errorCapturingUnitToUnitInterval);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2043);
			((ErrorCapturingUnitToUnitIntervalContext)_localctx).body = unitToUnitInterval();
			setState(2046);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,236,_ctx) ) {
			case 1:
				{
				setState(2044);
				((ErrorCapturingUnitToUnitIntervalContext)_localctx).error1 = multiUnitsInterval();
				}
				break;
			case 2:
				{
				setState(2045);
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
		enterRule(_localctx, 288, RULE_unitToUnitInterval);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2048);
			((UnitToUnitIntervalContext)_localctx).value = intervalValue();
			setState(2049);
			((UnitToUnitIntervalContext)_localctx).from = timeIntervalUnit();
			setState(2050);
			match(KW_TO);
			setState(2051);
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
		enterRule(_localctx, 290, RULE_intervalValue);
		int _la;
		try {
			setState(2058);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case HYPNEN_SIGN:
			case ADD_SIGN:
			case DIG_LITERAL:
			case REAL_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(2054);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==HYPNEN_SIGN || _la==ADD_SIGN) {
					{
					setState(2053);
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

				setState(2056);
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
				setState(2057);
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
		enterRule(_localctx, 292, RULE_columnAlias);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2061);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_AS) {
				{
				setState(2060);
				match(KW_AS);
				}
			}

			setState(2063);
			identifier();
			setState(2065);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LR_BRACKET) {
				{
				setState(2064);
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
		enterRule(_localctx, 294, RULE_tableAlias);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2068);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_AS) {
				{
				setState(2067);
				match(KW_AS);
				}
			}

			setState(2070);
			identifier();
			setState(2072);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,242,_ctx) ) {
			case 1:
				{
				setState(2071);
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
		enterRule(_localctx, 296, RULE_errorCapturingIdentifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2074);
			identifier();
			setState(2075);
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
		enterRule(_localctx, 298, RULE_errorCapturingIdentifierExtra);
		int _la;
		try {
			setState(2084);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_MINUS:
				_localctx = new ErrorIdentContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(2079); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(2077);
					match(KW_MINUS);
					setState(2078);
					identifier();
					}
					}
					setState(2081); 
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
		enterRule(_localctx, 300, RULE_identifierList);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2086);
			match(LR_BRACKET);
			setState(2087);
			identifierSeq();
			setState(2088);
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
		enterRule(_localctx, 302, RULE_identifierSeq);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2090);
			identifier();
			setState(2095);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(2091);
				match(COMMA);
				setState(2092);
				identifier();
				}
				}
				setState(2097);
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
		enterRule(_localctx, 304, RULE_identifier);
		try {
			setState(2102);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DIG_LITERAL:
			case ID_LITERAL:
				_localctx = new UnquotedIdentifierAlternativeContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(2098);
				unquotedIdentifier();
				}
				break;
			case STRING_LITERAL:
				_localctx = new QuotedIdentifierAlternativeContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(2099);
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
				setState(2100);
				nonReservedKeywords();
				}
				break;
			case T__0:
				_localctx = new UrefVarAlternativeContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(2101);
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
		enterRule(_localctx, 306, RULE_refVar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2104);
			match(T__0);
			setState(2105);
			match(LB_BRACKET);
			setState(2106);
			unquotedIdentifier();
			setState(2107);
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
		enterRule(_localctx, 308, RULE_unquotedIdentifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2109);
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
		enterRule(_localctx, 310, RULE_quotedIdentifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2111);
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
		enterRule(_localctx, 312, RULE_whenClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2113);
			match(KW_WHEN);
			setState(2114);
			((WhenClauseContext)_localctx).condition = expression();
			setState(2115);
			match(KW_THEN);
			setState(2116);
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
		enterRule(_localctx, 314, RULE_catalogPath);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2118);
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
		enterRule(_localctx, 316, RULE_databasePath);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2120);
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
		enterRule(_localctx, 318, RULE_databasePathCreate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2122);
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
		enterRule(_localctx, 320, RULE_tablePathCreate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2124);
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
		enterRule(_localctx, 322, RULE_tablePath);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2126);
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
		enterRule(_localctx, 324, RULE_uid);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(2128);
			identifier();
			setState(2133);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,247,_ctx);
			while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1+1 ) {
					{
					{
					setState(2129);
					match(DOT);
					setState(2130);
					identifier();
					}
					} 
				}
				setState(2135);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,247,_ctx);
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
		enterRule(_localctx, 326, RULE_withOption);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2136);
			match(KW_WITH);
			setState(2137);
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
		enterRule(_localctx, 328, RULE_ifNotExists);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2139);
			match(KW_IF);
			setState(2140);
			match(KW_NOT);
			setState(2141);
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
		enterRule(_localctx, 330, RULE_ifExists);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2143);
			match(KW_IF);
			setState(2144);
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
		enterRule(_localctx, 332, RULE_tablePropertyList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2146);
			match(LR_BRACKET);
			setState(2147);
			tableProperty();
			setState(2152);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(2148);
				match(COMMA);
				setState(2149);
				tableProperty();
				}
				}
				setState(2154);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(2155);
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
		enterRule(_localctx, 334, RULE_tableProperty);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2157);
			((TablePropertyContext)_localctx).key = tablePropertyKey();
			setState(2162);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_FALSE || ((((_la - 357)) & ~0x3f) == 0 && ((1L << (_la - 357)) & ((1L << (KW_TRUE - 357)) | (1L << (EQUAL_SYMBOL - 357)) | (1L << (STRING_LITERAL - 357)) | (1L << (DIG_LITERAL - 357)) | (1L << (REAL_LITERAL - 357)))) != 0)) {
				{
				setState(2159);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==EQUAL_SYMBOL) {
					{
					setState(2158);
					match(EQUAL_SYMBOL);
					}
				}

				setState(2161);
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
		enterRule(_localctx, 336, RULE_tablePropertyKey);
		try {
			setState(2167);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,251,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2164);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2165);
				dereferenceDefinition();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2166);
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
		enterRule(_localctx, 338, RULE_tablePropertyValue);
		try {
			setState(2173);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DIG_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(2169);
				match(DIG_LITERAL);
				}
				break;
			case REAL_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(2170);
				match(REAL_LITERAL);
				}
				break;
			case KW_FALSE:
			case KW_TRUE:
				enterOuterAlt(_localctx, 3);
				{
				setState(2171);
				booleanLiteral();
				}
				break;
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 4);
				{
				setState(2172);
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
		enterRule(_localctx, 340, RULE_logicalOperator);
		try {
			setState(2181);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_AND:
				enterOuterAlt(_localctx, 1);
				{
				setState(2175);
				match(KW_AND);
				}
				break;
			case BIT_AND_OP:
				enterOuterAlt(_localctx, 2);
				{
				setState(2176);
				match(BIT_AND_OP);
				setState(2177);
				match(BIT_AND_OP);
				}
				break;
			case KW_OR:
				enterOuterAlt(_localctx, 3);
				{
				setState(2178);
				match(KW_OR);
				}
				break;
			case BIT_OR_OP:
				enterOuterAlt(_localctx, 4);
				{
				setState(2179);
				match(BIT_OR_OP);
				setState(2180);
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
		enterRule(_localctx, 342, RULE_comparisonOperator);
		try {
			setState(2197);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,254,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2183);
				match(EQUAL_SYMBOL);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2184);
				match(GREATER_SYMBOL);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2185);
				match(LESS_SYMBOL);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2186);
				match(LESS_SYMBOL);
				setState(2187);
				match(EQUAL_SYMBOL);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(2188);
				match(GREATER_SYMBOL);
				setState(2189);
				match(EQUAL_SYMBOL);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(2190);
				match(LESS_SYMBOL);
				setState(2191);
				match(GREATER_SYMBOL);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(2192);
				match(EXCLAMATION_SYMBOL);
				setState(2193);
				match(EQUAL_SYMBOL);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(2194);
				match(LESS_SYMBOL);
				setState(2195);
				match(EQUAL_SYMBOL);
				setState(2196);
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
		enterRule(_localctx, 344, RULE_bitOperator);
		try {
			setState(2206);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LESS_SYMBOL:
				enterOuterAlt(_localctx, 1);
				{
				setState(2199);
				match(LESS_SYMBOL);
				setState(2200);
				match(LESS_SYMBOL);
				}
				break;
			case GREATER_SYMBOL:
				enterOuterAlt(_localctx, 2);
				{
				setState(2201);
				match(GREATER_SYMBOL);
				setState(2202);
				match(GREATER_SYMBOL);
				}
				break;
			case BIT_AND_OP:
				enterOuterAlt(_localctx, 3);
				{
				setState(2203);
				match(BIT_AND_OP);
				}
				break;
			case BIT_XOR_OP:
				enterOuterAlt(_localctx, 4);
				{
				setState(2204);
				match(BIT_XOR_OP);
				}
				break;
			case BIT_OR_OP:
				enterOuterAlt(_localctx, 5);
				{
				setState(2205);
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
		enterRule(_localctx, 346, RULE_mathOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2208);
			_la = _input.LA(1);
			if ( !(_la==KW_DIV || ((((_la - 400)) & ~0x3f) == 0 && ((1L << (_la - 400)) & ((1L << (ASTERISK_SIGN - 400)) | (1L << (HYPNEN_SIGN - 400)) | (1L << (ADD_SIGN - 400)) | (1L << (PENCENT_SIGN - 400)) | (1L << (DOUBLE_HYPNEN_SIGN - 400)) | (1L << (SLASH_SIGN - 400)))) != 0)) ) {
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
		enterRule(_localctx, 348, RULE_unaryOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2210);
			_la = _input.LA(1);
			if ( !(_la==KW_NOT || ((((_la - 381)) & ~0x3f) == 0 && ((1L << (_la - 381)) & ((1L << (EXCLAMATION_SYMBOL - 381)) | (1L << (BIT_NOT_OP - 381)) | (1L << (HYPNEN_SIGN - 381)) | (1L << (ADD_SIGN - 381)))) != 0)) ) {
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
		enterRule(_localctx, 350, RULE_constant);
		int _la;
		try {
			setState(2226);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_INTERVAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(2212);
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
				setState(2213);
				timePointLiteral();
				}
				break;
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 3);
				{
				setState(2214);
				stringLiteral();
				}
				break;
			case HYPNEN_SIGN:
			case DIG_LITERAL:
				enterOuterAlt(_localctx, 4);
				{
				setState(2216);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==HYPNEN_SIGN) {
					{
					setState(2215);
					match(HYPNEN_SIGN);
					}
				}

				setState(2218);
				decimalLiteral();
				}
				break;
			case KW_FALSE:
			case KW_TRUE:
				enterOuterAlt(_localctx, 5);
				{
				setState(2219);
				booleanLiteral();
				}
				break;
			case REAL_LITERAL:
				enterOuterAlt(_localctx, 6);
				{
				setState(2220);
				match(REAL_LITERAL);
				}
				break;
			case BIT_STRING:
				enterOuterAlt(_localctx, 7);
				{
				setState(2221);
				match(BIT_STRING);
				}
				break;
			case KW_NOT:
			case KW_NULL:
				enterOuterAlt(_localctx, 8);
				{
				setState(2223);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(2222);
					match(KW_NOT);
					}
				}

				setState(2225);
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
		enterRule(_localctx, 352, RULE_timePointLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2228);
			timePointUnit();
			setState(2229);
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
		enterRule(_localctx, 354, RULE_stringLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2231);
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
		enterRule(_localctx, 356, RULE_decimalLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2233);
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
		enterRule(_localctx, 358, RULE_booleanLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2235);
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
		enterRule(_localctx, 360, RULE_setQuantifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2237);
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
		enterRule(_localctx, 362, RULE_timePointUnit);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2239);
			_la = _input.LA(1);
			if ( !(((((_la - 79)) & ~0x3f) == 0 && ((1L << (_la - 79)) & ((1L << (KW_MICROSECOND - 79)) | (1L << (KW_MILLISECOND - 79)) | (1L << (KW_QUARTER - 79)))) != 0) || _la==KW_WEEK || _la==KW_DAY || ((((_la - 263)) & ~0x3f) == 0 && ((1L << (_la - 263)) & ((1L << (KW_HOUR - 263)) | (1L << (KW_MINUTE - 263)) | (1L << (KW_MONTH - 263)))) != 0) || _la==KW_SECOND || _la==KW_YEAR) ) {
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
		enterRule(_localctx, 364, RULE_timeIntervalUnit);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2241);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << KW_CENTURY) | (1L << KW_DAYS) | (1L << KW_DECADE) | (1L << KW_EPOCH) | (1L << KW_HOURS))) != 0) || ((((_la - 79)) & ~0x3f) == 0 && ((1L << (_la - 79)) & ((1L << (KW_MICROSECOND - 79)) | (1L << (KW_MILLENNIUM - 79)) | (1L << (KW_MILLISECOND - 79)) | (1L << (KW_MINUTES - 79)) | (1L << (KW_MONTHS - 79)) | (1L << (KW_NANOSECOND - 79)) | (1L << (KW_QUARTER - 79)) | (1L << (KW_SECONDS - 79)))) != 0) || ((((_la - 173)) & ~0x3f) == 0 && ((1L << (_la - 173)) & ((1L << (KW_WEEK - 173)) | (1L << (KW_WEEKS - 173)) | (1L << (KW_YEARS - 173)) | (1L << (KW_DAY - 173)))) != 0) || ((((_la - 263)) & ~0x3f) == 0 && ((1L << (_la - 263)) & ((1L << (KW_HOUR - 263)) | (1L << (KW_MINUTE - 263)) | (1L << (KW_MONTH - 263)))) != 0) || _la==KW_SECOND || _la==KW_YEAR) ) {
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
		enterRule(_localctx, 366, RULE_reservedKeywordsUsedAsFuncParam);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2243);
			_la = _input.LA(1);
			if ( !(((((_la - 180)) & ~0x3f) == 0 && ((1L << (_la - 180)) & ((1L << (KW_ALL - 180)) | (1L << (KW_BOTH - 180)) | (1L << (KW_DISTINCT - 180)))) != 0) || _la==KW_LEADING || _la==KW_TRAILING || _la==ASTERISK_SIGN) ) {
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
		enterRule(_localctx, 368, RULE_reservedKeywordsUsedAsFuncName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2245);
			_la = _input.LA(1);
			if ( !(((((_la - 60)) & ~0x3f) == 0 && ((1L << (_la - 60)) & ((1L << (KW_IF - 60)) | (1L << (KW_MAP - 60)) | (1L << (KW_QUARTER - 60)))) != 0) || ((((_la - 173)) & ~0x3f) == 0 && ((1L << (_la - 173)) & ((1L << (KW_WEEK - 173)) | (1L << (KW_ABS - 173)) | (1L << (KW_ARRAY - 173)) | (1L << (KW_AVG - 173)) | (1L << (KW_CAST - 173)) | (1L << (KW_CEIL - 173)) | (1L << (KW_COALESCE - 173)) | (1L << (KW_COLLECT - 173)) | (1L << (KW_COUNT - 173)) | (1L << (KW_DATE - 173)))) != 0) || ((((_la - 260)) & ~0x3f) == 0 && ((1L << (_la - 260)) & ((1L << (KW_GROUPING - 260)) | (1L << (KW_HOUR - 260)) | (1L << (KW_LAG - 260)) | (1L << (KW_LEFT - 260)) | (1L << (KW_MINUTE - 260)) | (1L << (KW_MONTH - 260)) | (1L << (KW_OVERLAY - 260)) | (1L << (KW_POSITION - 260)) | (1L << (KW_POWER - 260)) | (1L << (KW_RANK - 260)))) != 0) || ((((_la - 325)) & ~0x3f) == 0 && ((1L << (_la - 325)) & ((1L << (KW_RIGHT - 325)) | (1L << (KW_SECOND - 325)) | (1L << (KW_SUBSTRING - 325)) | (1L << (KW_SUM - 325)) | (1L << (KW_TIME - 325)) | (1L << (KW_TIMESTAMP - 325)) | (1L << (KW_TIMESTAMP_3 - 325)) | (1L << (KW_TIMESTAMP_6 - 325)) | (1L << (KW_TIMESTAMP_9 - 325)) | (1L << (KW_TRUNCATE - 325)) | (1L << (KW_UPPER - 325)) | (1L << (KW_YEAR - 325)))) != 0)) ) {
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
		enterRule(_localctx, 370, RULE_reservedKeywords);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2247);
			_la = _input.LA(1);
			if ( !(((((_la - 179)) & ~0x3f) == 0 && ((1L << (_la - 179)) & ((1L << (KW_ABS - 179)) | (1L << (KW_ALL - 179)) | (1L << (KW_ALLOW - 179)) | (1L << (KW_ALTER - 179)) | (1L << (KW_AND - 179)) | (1L << (KW_ANY - 179)) | (1L << (KW_ARE - 179)) | (1L << (KW_ARRAY - 179)) | (1L << (KW_AS - 179)) | (1L << (KW_ASYMMETRIC - 179)) | (1L << (KW_AT - 179)) | (1L << (KW_AVG - 179)) | (1L << (KW_BEGIN - 179)) | (1L << (KW_BETWEEN - 179)) | (1L << (KW_BIGINT - 179)) | (1L << (KW_BINARY - 179)) | (1L << (KW_BIT - 179)) | (1L << (KW_BLOB - 179)) | (1L << (KW_BOOLEAN - 179)) | (1L << (KW_BOTH - 179)) | (1L << (KW_BY - 179)) | (1L << (KW_CALL - 179)) | (1L << (KW_CALLED - 179)) | (1L << (KW_CASCADED - 179)) | (1L << (KW_CASE - 179)) | (1L << (KW_CAST - 179)) | (1L << (KW_CEIL - 179)) | (1L << (KW_CHAR - 179)) | (1L << (KW_CHARACTER - 179)) | (1L << (KW_CHECK - 179)) | (1L << (KW_CLOB - 179)) | (1L << (KW_CLOSE - 179)) | (1L << (KW_COALESCE - 179)) | (1L << (KW_COLLATE - 179)) | (1L << (KW_COLLECT - 179)) | (1L << (KW_COLUMN - 179)) | (1L << (KW_COMMIT - 179)) | (1L << (KW_CONNECT - 179)) | (1L << (KW_CONSTRAINT - 179)) | (1L << (KW_CONTAINS - 179)) | (1L << (KW_CONVERT - 179)) | (1L << (KW_COUNT - 179)) | (1L << (KW_CREATE - 179)) | (1L << (KW_CROSS - 179)) | (1L << (KW_CUBE - 179)) | (1L << (KW_CURRENT - 179)) | (1L << (KW_CURSOR - 179)) | (1L << (KW_CYCLE - 179)) | (1L << (KW_DATE - 179)) | (1L << (KW_DATETIME - 179)) | (1L << (KW_DAY - 179)) | (1L << (KW_DEC - 179)) | (1L << (KW_DECIMAL - 179)) | (1L << (KW_DECLARE - 179)) | (1L << (KW_DEFAULT - 179)) | (1L << (KW_DEFINE - 179)) | (1L << (KW_DELETE - 179)) | (1L << (KW_DESCRIBE - 179)) | (1L << (KW_DISTINCT - 179)) | (1L << (KW_DOUBLE - 179)) | (1L << (KW_DROP - 179)) | (1L << (KW_EACH - 179)) | (1L << (KW_ELSE - 179)) | (1L << (KW_END - 179)))) != 0) || ((((_la - 243)) & ~0x3f) == 0 && ((1L << (_la - 243)) & ((1L << (KW_EQUALS - 243)) | (1L << (KW_EXCEPT - 243)) | (1L << (KW_EXECUTE - 243)) | (1L << (KW_EXISTS - 243)) | (1L << (KW_EXPLAIN - 243)) | (1L << (KW_EXTERNAL - 243)) | (1L << (KW_EXTRACT - 243)) | (1L << (KW_FALSE - 243)) | (1L << (KW_FLOAT - 243)) | (1L << (KW_FOR - 243)) | (1L << (KW_FROM - 243)) | (1L << (KW_FULL - 243)) | (1L << (KW_FUNCTION - 243)) | (1L << (KW_GLOBAL - 243)) | (1L << (KW_GRANT - 243)) | (1L << (KW_GROUP - 243)) | (1L << (KW_GROUPING - 243)) | (1L << (KW_GROUPS - 243)) | (1L << (KW_HAVING - 243)) | (1L << (KW_HOUR - 243)) | (1L << (KW_IMPORT - 243)) | (1L << (KW_IN - 243)) | (1L << (KW_INCLUDING - 243)) | (1L << (KW_INNER - 243)) | (1L << (KW_INOUT - 243)) | (1L << (KW_INSERT - 243)) | (1L << (KW_INT - 243)) | (1L << (KW_INTEGER - 243)) | (1L << (KW_INTERSECT - 243)) | (1L << (KW_INTERVAL - 243)) | (1L << (KW_INTO - 243)) | (1L << (KW_IS - 243)) | (1L << (KW_JOIN - 243)) | (1L << (KW_LAG - 243)) | (1L << (KW_LANGUAGE - 243)) | (1L << (KW_LATERAL - 243)) | (1L << (KW_LEADING - 243)) | (1L << (KW_LEFT - 243)) | (1L << (KW_LIKE - 243)) | (1L << (KW_LIMIT - 243)) | (1L << (KW_LOCAL - 243)) | (1L << (KW_MATCH - 243)) | (1L << (KW_MATCH_RECOGNIZE - 243)) | (1L << (KW_MEASURES - 243)) | (1L << (KW_MERGE - 243)) | (1L << (KW_METADATA - 243)) | (1L << (KW_MINUS - 243)) | (1L << (KW_MINUTE - 243)) | (1L << (KW_MODIFIES - 243)) | (1L << (KW_MODULE - 243)) | (1L << (KW_MONTH - 243)) | (1L << (KW_MULTISET - 243)) | (1L << (KW_NATURAL - 243)) | (1L << (KW_NEXT - 243)) | (1L << (KW_NO - 243)) | (1L << (KW_NONE - 243)) | (1L << (KW_NOT - 243)) | (1L << (KW_NULL - 243)) | (1L << (KW_NUMERIC - 243)) | (1L << (KW_OF - 243)) | (1L << (KW_OFFSET - 243)) | (1L << (KW_ON - 243)) | (1L << (KW_ONE - 243)))) != 0) || ((((_la - 307)) & ~0x3f) == 0 && ((1L << (_la - 307)) & ((1L << (KW_OR - 307)) | (1L << (KW_ORDER - 307)) | (1L << (KW_OUT - 307)) | (1L << (KW_OUTER - 307)) | (1L << (KW_OVER - 307)) | (1L << (KW_OVERLAY - 307)) | (1L << (KW_PARTITION - 307)) | (1L << (KW_PATTERN - 307)) | (1L << (KW_PER - 307)) | (1L << (KW_PERCENT - 307)) | (1L << (KW_PERIOD - 307)) | (1L << (KW_POSITION - 307)) | (1L << (KW_PRIMARY - 307)) | (1L << (KW_RANGE - 307)) | (1L << (KW_RANK - 307)) | (1L << (KW_RESET - 307)) | (1L << (KW_REVOKE - 307)) | (1L << (KW_RIGHT - 307)) | (1L << (KW_RLIKE - 307)) | (1L << (KW_ROLLBACK - 307)) | (1L << (KW_ROLLUP - 307)) | (1L << (KW_ROW - 307)) | (1L << (KW_ROWS - 307)) | (1L << (KW_SECOND - 307)) | (1L << (KW_SELECT - 307)) | (1L << (KW_SET - 307)) | (1L << (KW_SHOW - 307)) | (1L << (KW_SIMILAR - 307)) | (1L << (KW_SKIP - 307)) | (1L << (KW_SMALLINT - 307)) | (1L << (KW_START - 307)) | (1L << (KW_STATIC - 307)) | (1L << (KW_SUBSTRING - 307)) | (1L << (KW_SUM - 307)) | (1L << (KW_SYSTEM - 307)) | (1L << (KW_SYSTEM_TIME - 307)) | (1L << (KW_SYSTEM_USER - 307)) | (1L << (KW_TABLE - 307)) | (1L << (KW_TABLESAMPLE - 307)) | (1L << (KW_THEN - 307)) | (1L << (KW_TIME - 307)) | (1L << (KW_TIMESTAMP - 307)) | (1L << (KW_TIMESTAMP_3 - 307)) | (1L << (KW_TIMESTAMP_6 - 307)) | (1L << (KW_TIMESTAMP_9 - 307)) | (1L << (KW_TINYINT - 307)) | (1L << (KW_TO - 307)) | (1L << (KW_TRUE - 307)) | (1L << (KW_TRUNCATE - 307)) | (1L << (KW_UNION - 307)) | (1L << (KW_UNIQUE - 307)) | (1L << (KW_UNKNOWN - 307)) | (1L << (KW_UNNEST - 307)) | (1L << (KW_UPPER - 307)) | (1L << (KW_UPSERT - 307)) | (1L << (KW_USER - 307)) | (1L << (KW_USING - 307)) | (1L << (KW_VALUE - 307)) | (1L << (KW_VALUES - 307)) | (1L << (KW_VARBINARY - 307)) | (1L << (KW_VARCHAR - 307)))) != 0) || ((((_la - 371)) & ~0x3f) == 0 && ((1L << (_la - 371)) & ((1L << (KW_WHEN - 371)) | (1L << (KW_WHERE - 371)) | (1L << (KW_WINDOW - 371)) | (1L << (KW_WITH - 371)) | (1L << (KW_WITHIN - 371)) | (1L << (KW_WITHOUT - 371)) | (1L << (KW_YEAR - 371)))) != 0)) ) {
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
		enterRule(_localctx, 372, RULE_nonReservedKeywords);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2249);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << KW_ADD) | (1L << KW_ADMIN) | (1L << KW_AFTER) | (1L << KW_ANALYZE) | (1L << KW_ASC) | (1L << KW_BEFORE) | (1L << KW_BYTES) | (1L << KW_CASCADE) | (1L << KW_CATALOG) | (1L << KW_CATALOGS) | (1L << KW_CENTURY) | (1L << KW_CHAIN) | (1L << KW_CHANGELOG_MODE) | (1L << KW_CHARACTERS) | (1L << KW_COMMENT) | (1L << KW_COMPACT) | (1L << KW_COLUMNS) | (1L << KW_CONSTRAINTS) | (1L << KW_CONSTRUCTOR) | (1L << KW_CUMULATE) | (1L << KW_DATA) | (1L << KW_DATABASE) | (1L << KW_DATABASES) | (1L << KW_DAYS) | (1L << KW_DECADE) | (1L << KW_DEFINED) | (1L << KW_DESC) | (1L << KW_DESCRIPTOR) | (1L << KW_DIV) | (1L << KW_ENCODING) | (1L << KW_ENFORCED) | (1L << KW_ENGINE) | (1L << KW_ERROR) | (1L << KW_ESTIMATED_COST) | (1L << KW_EXCEPTION) | (1L << KW_EXCLUDE) | (1L << KW_EXCLUDING) | (1L << KW_EXTENDED) | (1L << KW_FILE) | (1L << KW_FINAL) | (1L << KW_FIRST) | (1L << KW_FOLLOWING) | (1L << KW_FORMAT) | (1L << KW_FORTRAN) | (1L << KW_FOUND) | (1L << KW_FRAC_SECOND) | (1L << KW_FUNCTIONS) | (1L << KW_GENERAL) | (1L << KW_GENERATED) | (1L << KW_GO) | (1L << KW_GOTO) | (1L << KW_GRANTED) | (1L << KW_HOP) | (1L << KW_HOURS) | (1L << KW_IF) | (1L << KW_IGNORE) | (1L << KW_INCREMENT) | (1L << KW_INPUT))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (KW_INVOKER - 64)) | (1L << (KW_JAR - 64)) | (1L << (KW_JARS - 64)) | (1L << (KW_JAVA - 64)) | (1L << (KW_JSON - 64)) | (1L << (KW_JSON_EXECUTION_PLAN - 64)) | (1L << (KW_KEY - 64)) | (1L << (KW_KEY_MEMBER - 64)) | (1L << (KW_KEY_TYPE - 64)) | (1L << (KW_LABEL - 64)) | (1L << (KW_LAST - 64)) | (1L << (KW_LENGTH - 64)) | (1L << (KW_LEVEL - 64)) | (1L << (KW_LOAD - 64)) | (1L << (KW_MAP - 64)) | (1L << (KW_MICROSECOND - 64)) | (1L << (KW_MILLENNIUM - 64)) | (1L << (KW_MILLISECOND - 64)) | (1L << (KW_MINUTES - 64)) | (1L << (KW_MINVALUE - 64)) | (1L << (KW_MODIFY - 64)) | (1L << (KW_MODULES - 64)) | (1L << (KW_MONTHS - 64)) | (1L << (KW_NANOSECOND - 64)) | (1L << (KW_NULLS - 64)) | (1L << (KW_NUMBER - 64)) | (1L << (KW_OPTION - 64)) | (1L << (KW_OPTIONS - 64)) | (1L << (KW_ORDERING - 64)) | (1L << (KW_OUTPUT - 64)) | (1L << (KW_OVERWRITE - 64)) | (1L << (KW_OVERWRITING - 64)) | (1L << (KW_PARTITIONED - 64)) | (1L << (KW_PARTITIONS - 64)) | (1L << (KW_PASSING - 64)) | (1L << (KW_PAST - 64)) | (1L << (KW_PATH - 64)) | (1L << (KW_PLACING - 64)) | (1L << (KW_PLAN - 64)) | (1L << (KW_PRECEDING - 64)) | (1L << (KW_PRESERVE - 64)) | (1L << (KW_PRIOR - 64)) | (1L << (KW_PRIVILEGES - 64)) | (1L << (KW_PUBLIC - 64)) | (1L << (KW_PYTHON - 64)) | (1L << (KW_PYTHON_FILES - 64)) | (1L << (KW_PYTHON_REQUIREMENTS - 64)) | (1L << (KW_PYTHON_DEPENDENCIES - 64)) | (1L << (KW_PYTHON_JAR - 64)) | (1L << (KW_PYTHON_ARCHIVES - 64)) | (1L << (KW_PYTHON_PARAMETER - 64)) | (1L << (KW_QUARTER - 64)) | (1L << (KW_RAW - 64)) | (1L << (KW_READ - 64)) | (1L << (KW_RELATIVE - 64)) | (1L << (KW_REMOVE - 64)) | (1L << (KW_RENAME - 64)) | (1L << (KW_REPLACE - 64)) | (1L << (KW_RESPECT - 64)) | (1L << (KW_RESTART - 64)) | (1L << (KW_RESTRICT - 64)) | (1L << (KW_ROLE - 64)) | (1L << (KW_ROW_COUNT - 64)) | (1L << (KW_SCALA - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (KW_SCALAR - 128)) | (1L << (KW_SCALE - 128)) | (1L << (KW_SCHEMA - 128)) | (1L << (KW_SECONDS - 128)) | (1L << (KW_SECTION - 128)) | (1L << (KW_SECURITY - 128)) | (1L << (KW_SELF - 128)) | (1L << (KW_SERVER - 128)) | (1L << (KW_SERVER_NAME - 128)) | (1L << (KW_SESSION - 128)) | (1L << (KW_SETS - 128)) | (1L << (KW_SIMPLE - 128)) | (1L << (KW_SIZE - 128)) | (1L << (KW_SLIDE - 128)) | (1L << (KW_SOURCE - 128)) | (1L << (KW_SPACE - 128)) | (1L << (KW_STATE - 128)) | (1L << (KW_STATEMENT - 128)) | (1L << (KW_STEP - 128)) | (1L << (KW_STRING - 128)) | (1L << (KW_STRUCTURE - 128)) | (1L << (KW_STYLE - 128)) | (1L << (KW_TABLES - 128)) | (1L << (KW_TEMPORARY - 128)) | (1L << (KW_TIMECOL - 128)) | (1L << (KW_FLOOR - 128)) | (1L << (KW_TIMESTAMP_LTZ - 128)) | (1L << (KW_TIMESTAMPADD - 128)) | (1L << (KW_TIMESTAMPDIFF - 128)) | (1L << (KW_TRANSFORM - 128)) | (1L << (KW_TUMBLE - 128)) | (1L << (KW_TYPE - 128)) | (1L << (KW_UNDER - 128)) | (1L << (KW_UNLOAD - 128)) | (1L << (KW_USAGE - 128)) | (1L << (KW_USE - 128)) | (1L << (KW_UTF16 - 128)) | (1L << (KW_UTF32 - 128)) | (1L << (KW_UTF8 - 128)) | (1L << (KW_VERSION - 128)) | (1L << (KW_VIEW - 128)) | (1L << (KW_VIEWS - 128)) | (1L << (KW_VIRTUAL - 128)) | (1L << (KW_WATERMARK - 128)) | (1L << (KW_WATERMARKS - 128)) | (1L << (KW_WEEK - 128)) | (1L << (KW_WORK - 128)) | (1L << (KW_WRAPPER - 128)) | (1L << (KW_YEARS - 128)) | (1L << (KW_ZONE - 128)))) != 0)) ) {
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
			return precpred(_ctx, 4);
		}
		return true;
	}
	private boolean booleanExpression_sempred(BooleanExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 3:
			return precpred(_ctx, 3);
		case 4:
			return precpred(_ctx, 2);
		case 5:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean valueExpression_sempred(ValueExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 6:
			return precpred(_ctx, 7);
		case 7:
			return precpred(_ctx, 6);
		case 8:
			return precpred(_ctx, 5);
		case 9:
			return precpred(_ctx, 4);
		case 10:
			return precpred(_ctx, 3);
		case 11:
			return precpred(_ctx, 2);
		case 12:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean primaryExpression_sempred(PrimaryExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 13:
			return precpred(_ctx, 4);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\u01a1\u08ce\4\2\t"+
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
		"\t\u00bb\4\u00bc\t\u00bc\3\2\3\2\3\2\3\3\3\3\3\3\3\4\3\4\3\4\7\4\u0182"+
		"\n\4\f\4\16\4\u0185\13\4\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3"+
		"\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6"+
		"\3\6\3\6\3\6\3\6\3\6\3\6\5\6\u01aa\n\6\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u01bc\n\b\3\t\3\t\5\t\u01c0\n\t\3"+
		"\n\3\n\3\n\3\13\3\13\3\13\3\13\5\13\u01c9\n\13\3\13\3\13\3\13\5\13\u01ce"+
		"\n\13\3\f\3\f\3\f\7\f\u01d3\n\f\f\f\16\f\u01d6\13\f\3\r\3\r\3\16\3\16"+
		"\3\16\3\16\3\16\3\16\5\16\u01e0\n\16\3\17\3\17\3\17\3\17\3\17\7\17\u01e7"+
		"\n\17\f\17\16\17\u01ea\13\17\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3"+
		"\20\5\20\u01f5\n\20\3\20\5\20\u01f8\n\20\3\20\3\20\3\20\3\20\3\20\5\20"+
		"\u01ff\n\20\3\20\3\20\3\20\3\20\3\20\3\20\5\20\u0207\n\20\3\20\3\20\3"+
		"\20\5\20\u020c\n\20\3\20\5\20\u020f\n\20\3\21\3\21\3\21\3\21\3\21\5\21"+
		"\u0216\n\21\3\22\3\22\3\22\3\22\3\23\3\23\5\23\u021e\n\23\3\24\3\24\5"+
		"\24\u0222\n\24\3\25\3\25\3\25\3\25\3\26\6\26\u0229\n\26\r\26\16\26\u022a"+
		"\3\27\3\27\5\27\u022f\n\27\3\30\3\30\5\30\u0233\n\30\3\30\3\30\5\30\u0237"+
		"\n\30\3\30\3\30\3\30\3\30\3\30\7\30\u023e\n\30\f\30\16\30\u0241\13\30"+
		"\3\30\3\30\5\30\u0245\n\30\3\30\3\30\5\30\u0249\n\30\3\30\3\30\5\30\u024d"+
		"\n\30\3\30\3\30\5\30\u0251\n\30\3\30\5\30\u0254\n\30\3\30\3\30\5\30\u0258"+
		"\n\30\3\31\3\31\3\31\5\31\u025d\n\31\3\31\3\31\3\31\3\31\5\31\u0263\n"+
		"\31\3\32\3\32\3\32\5\32\u0268\n\32\3\33\3\33\3\33\5\33\u026d\n\33\3\33"+
		"\5\33\u0270\n\33\3\34\3\34\5\34\u0274\n\34\3\35\3\35\3\35\3\35\7\35\u027a"+
		"\n\35\f\35\16\35\u027d\13\35\3\35\3\35\3\36\3\36\3\36\5\36\u0284\n\36"+
		"\3\36\3\36\5\36\u0288\n\36\3\36\3\36\5\36\u028c\n\36\3\36\3\36\5\36\u0290"+
		"\n\36\3\36\3\36\5\36\u0294\n\36\3\36\3\36\5\36\u0298\n\36\3\36\3\36\5"+
		"\36\u029c\n\36\3\36\3\36\5\36\u02a0\n\36\3\36\3\36\5\36\u02a4\n\36\3\36"+
		"\3\36\5\36\u02a8\n\36\3\36\3\36\5\36\u02ac\n\36\3\36\3\36\5\36\u02b0\n"+
		"\36\3\36\3\36\5\36\u02b4\n\36\3\36\3\36\5\36\u02b8\n\36\3\36\3\36\5\36"+
		"\u02bc\n\36\3\36\3\36\5\36\u02c0\n\36\3\36\3\36\5\36\u02c4\n\36\3\36\3"+
		"\36\5\36\u02c8\n\36\5\36\u02ca\n\36\3\37\3\37\3\37\3\37\3 \3 \3 \3 \5"+
		" \u02d4\n \3 \3 \3!\3!\3!\3!\5!\u02dc\n!\3!\3!\3\"\3\"\3\"\3\"\7\"\u02e4"+
		"\n\"\f\"\16\"\u02e7\13\"\3\"\3\"\3\"\3\"\3\"\3\"\7\"\u02ef\n\"\f\"\16"+
		"\"\u02f2\13\"\3\"\3\"\5\"\u02f6\n\"\3#\3#\3#\3#\3#\3#\3#\3$\3$\3$\3$\3"+
		"$\3$\3$\7$\u0306\n$\f$\16$\u0309\13$\3$\3$\3$\3$\3$\3$\3$\3$\3$\7$\u0314"+
		"\n$\f$\16$\u0317\13$\3$\3$\5$\u031b\n$\3%\3%\5%\u031f\n%\3%\3%\3%\3%\5"+
		"%\u0325\n%\3%\5%\u0328\n%\3%\5%\u032b\n%\3&\3&\3&\3\'\3\'\3\'\3\'\3\'"+
		"\5\'\u0335\n\'\3\'\5\'\u0338\n\'\3(\3(\3)\3)\3)\3)\5)\u0340\n)\3*\3*\3"+
		"+\3+\3+\3+\3+\3+\3,\3,\5,\u034c\n,\3,\3,\3,\3,\3,\3,\3-\3-\3.\3.\3.\3"+
		".\3/\3/\3/\3/\3\60\3\60\3\60\3\60\7\60\u0362\n\60\f\60\16\60\u0365\13"+
		"\60\3\60\3\60\3\61\3\61\3\61\3\61\3\61\3\61\7\61\u036f\n\61\f\61\16\61"+
		"\u0372\13\61\3\61\3\61\5\61\u0376\n\61\3\62\3\62\5\62\u037a\n\62\3\63"+
		"\3\63\3\63\3\63\7\63\u0380\n\63\f\63\16\63\u0383\13\63\3\63\5\63\u0386"+
		"\n\63\3\64\3\64\3\64\3\64\5\64\u038c\n\64\3\65\3\65\3\65\3\65\3\65\3\66"+
		"\3\66\3\66\5\66\u0396\n\66\3\66\3\66\5\66\u039a\n\66\3\66\5\66\u039d\n"+
		"\66\3\67\3\67\5\67\u03a1\n\67\3\67\3\67\5\67\u03a5\n\67\3\67\3\67\5\67"+
		"\u03a9\n\67\3\67\5\67\u03ac\n\67\3\67\3\67\3\67\38\38\38\38\58\u03b5\n"+
		"8\38\38\58\u03b9\n8\38\38\38\38\38\58\u03c0\n8\38\58\u03c3\n8\39\39\3"+
		"9\39\39\39\79\u03cb\n9\f9\169\u03ce\139\3:\3:\3;\3;\3;\5;\u03d5\n;\3;"+
		"\3;\3;\3;\3;\3;\5;\u03dd\n;\3<\3<\5<\u03e1\n<\3<\3<\3<\3=\3=\3=\3>\3>"+
		"\3>\3>\3>\3>\3>\5>\u03f0\n>\3?\3?\3?\3?\3@\3@\3@\3@\3A\3A\3A\3B\3B\3B"+
		"\3B\3B\3B\5B\u0403\nB\3C\3C\3C\3C\3C\3D\3D\3D\3D\5D\u040e\nD\3D\3D\5D"+
		"\u0412\nD\3D\3D\3D\3D\3D\5D\u0419\nD\3E\3E\3E\5E\u041e\nE\3E\3E\3F\3F"+
		"\5F\u0424\nF\3F\3F\5F\u0428\nF\3F\3F\3G\3G\3G\5G\u042f\nG\3G\3G\5G\u0433"+
		"\nG\3H\3H\5H\u0437\nH\3H\3H\5H\u043b\nH\3H\3H\3I\3I\3I\3I\5I\u0443\nI"+
		"\3I\3I\5I\u0447\nI\3I\3I\3J\5J\u044c\nJ\3J\3J\3J\3J\5J\u0452\nJ\3K\3K"+
		"\3K\3K\5K\u0458\nK\3K\5K\u045b\nK\3K\3K\5K\u045f\nK\3L\3L\3L\3M\3M\3M"+
		"\3M\7M\u0468\nM\fM\16M\u046b\13M\3N\3N\3N\3N\7N\u0471\nN\fN\16N\u0474"+
		"\13N\3N\3N\3O\3O\3O\3O\3O\3O\3O\6O\u047f\nO\rO\16O\u0480\3O\3O\3P\3P\3"+
		"P\3P\3P\3P\6P\u048b\nP\rP\16P\u048c\3P\3P\3Q\3Q\3Q\3Q\3Q\3Q\3Q\3Q\3Q\3"+
		"Q\3Q\5Q\u049c\nQ\3Q\5Q\u049f\nQ\3Q\3Q\5Q\u04a3\nQ\3Q\5Q\u04a6\nQ\5Q\u04a8"+
		"\nQ\3Q\3Q\3Q\5Q\u04ad\nQ\3Q\3Q\5Q\u04b1\nQ\3Q\5Q\u04b4\nQ\7Q\u04b6\nQ"+
		"\fQ\16Q\u04b9\13Q\3R\3R\3R\3R\7R\u04bf\nR\fR\16R\u04c2\13R\3S\3S\3S\3"+
		"S\7S\u04c8\nS\fS\16S\u04cb\13S\3T\3T\3T\3T\3T\7T\u04d2\nT\fT\16T\u04d5"+
		"\13T\3T\3T\5T\u04d9\nT\3T\3T\3T\3T\3T\3U\3U\3V\3V\3V\5V\u04e5\nV\3V\5"+
		"V\u04e8\nV\3V\5V\u04eb\nV\3V\5V\u04ee\nV\3V\3V\3V\3V\5V\u04f4\nV\3W\3"+
		"W\5W\u04f8\nW\3W\3W\3W\3W\7W\u04fe\nW\fW\16W\u0501\13W\5W\u0503\nW\3X"+
		"\3X\3X\5X\u0508\nX\3X\5X\u050b\nX\5X\u050d\nX\3Y\3Y\3Y\3Y\3Y\3Y\3Y\3Y"+
		"\3Y\3Y\3Y\3Y\5Y\u051b\nY\3Z\3Z\3Z\3[\3[\3[\3[\7[\u0524\n[\f[\16[\u0527"+
		"\13[\3[\3[\5[\u052b\n[\3[\3[\3[\3[\3[\3[\5[\u0533\n[\3[\5[\u0536\n[\3"+
		"[\5[\u0539\n[\3[\3[\3[\5[\u053e\n[\7[\u0540\n[\f[\16[\u0543\13[\3\\\3"+
		"\\\5\\\u0547\n\\\3]\5]\u054a\n]\3]\3]\5]\u054e\n]\3]\5]\u0551\n]\3]\5"+
		"]\u0554\n]\3]\3]\3]\3]\3]\3]\3]\3]\7]\u055e\n]\f]\16]\u0561\13]\3]\3]"+
		"\3]\3]\5]\u0567\n]\3]\3]\3]\3]\3]\3]\3]\3]\3]\5]\u0572\n]\3^\3^\3^\3^"+
		"\3^\3^\3_\3_\3`\3`\3`\3`\3`\3a\3a\3a\3a\3a\3b\3b\3b\3b\3b\7b\u058b\nb"+
		"\fb\16b\u058e\13b\3b\3b\3c\3c\3d\3d\3d\3d\3d\3d\3d\3d\3d\3d\3d\3d\3d\3"+
		"d\3d\5d\u05a3\nd\3e\3e\3f\3f\3f\3f\3f\3g\3g\3g\3g\3g\3g\3g\7g\u05b3\n"+
		"g\fg\16g\u05b6\13g\3g\3g\5g\u05ba\ng\3h\3h\3h\3i\3i\3i\3i\3i\7i\u05c4"+
		"\ni\fi\16i\u05c7\13i\3j\3j\3j\3j\3j\3j\3j\3j\7j\u05d1\nj\fj\16j\u05d4"+
		"\13j\3j\3j\3j\3j\3j\3j\3j\7j\u05dd\nj\fj\16j\u05e0\13j\3j\3j\3j\3j\3j"+
		"\3j\3j\7j\u05e9\nj\fj\16j\u05ec\13j\3j\3j\5j\u05f0\nj\3k\3k\3k\3l\3l\3"+
		"m\3m\3m\3m\3m\3m\3m\3n\3n\3o\3o\3p\3p\3p\3q\3q\3q\3q\7q\u0609\nq\fq\16"+
		"q\u060c\13q\3r\3r\3r\3r\3s\5s\u0613\ns\3s\3s\5s\u0617\ns\3s\5s\u061a\n"+
		"s\3s\5s\u061d\ns\3s\3s\3t\3t\3t\5t\u0624\nt\3t\5t\u0627\nt\3t\5t\u062a"+
		"\nt\3t\5t\u062d\nt\3t\5t\u0630\nt\3t\5t\u0633\nt\3t\3t\3t\5t\u0638\nt"+
		"\3t\5t\u063b\nt\3u\3u\3u\3u\3u\7u\u0642\nu\fu\16u\u0645\13u\3v\3v\5v\u0649"+
		"\nv\3v\3v\5v\u064d\nv\3w\3w\3w\5w\u0652\nw\3x\3x\3x\3x\3x\7x\u0659\nx"+
		"\fx\16x\u065c\13x\3y\3y\3y\3y\3y\3y\3y\3y\3y\3y\3y\3y\3y\3y\3y\3y\5y\u066e"+
		"\ny\3z\3z\3z\3z\7z\u0674\nz\fz\16z\u0677\13z\3{\3{\3{\6{\u067c\n{\r{\16"+
		"{\u067d\3{\3{\5{\u0682\n{\3|\3|\5|\u0686\n|\3}\3}\3}\3}\3}\3}\3}\3}\5"+
		"}\u0690\n}\3~\3~\3~\3~\3~\3~\3~\3~\3~\3~\3~\3~\3~\3~\3~\3~\3~\3~\3~\3"+
		"~\3~\3~\3~\3~\5~\u06aa\n~\3\177\3\177\3\177\3\177\7\177\u06b0\n\177\f"+
		"\177\16\177\u06b3\13\177\3\u0080\3\u0080\3\u0080\3\u0080\3\u0080\3\u0080"+
		"\3\u0080\3\u0080\3\u0080\5\u0080\u06be\n\u0080\3\u0081\3\u0081\3\u0081"+
		"\3\u0081\3\u0081\3\u0082\3\u0082\3\u0082\3\u0083\3\u0083\3\u0084\3\u0084"+
		"\3\u0084\3\u0084\3\u0084\3\u0084\3\u0084\3\u0084\3\u0084\3\u0084\5\u0084"+
		"\u06d4\n\u0084\5\u0084\u06d6\n\u0084\3\u0084\3\u0084\3\u0084\3\u0084\3"+
		"\u0084\3\u0084\3\u0084\3\u0084\3\u0084\5\u0084\u06e1\n\u0084\3\u0084\7"+
		"\u0084\u06e4\n\u0084\f\u0084\16\u0084\u06e7\13\u0084\3\u0085\5\u0085\u06ea"+
		"\n\u0085\3\u0085\3\u0085\5\u0085\u06ee\n\u0085\3\u0085\3\u0085\3\u0085"+
		"\3\u0085\3\u0085\5\u0085\u06f5\n\u0085\3\u0085\3\u0085\3\u0085\3\u0085"+
		"\3\u0085\7\u0085\u06fc\n\u0085\f\u0085\16\u0085\u06ff\13\u0085\3\u0085"+
		"\3\u0085\3\u0085\5\u0085\u0704\n\u0085\3\u0085\3\u0085\3\u0085\3\u0085"+
		"\3\u0085\3\u0085\3\u0085\3\u0085\3\u0085\3\u0085\3\u0085\5\u0085\u0711"+
		"\n\u0085\3\u0085\3\u0085\3\u0085\3\u0085\3\u0085\5\u0085\u0718\n\u0085"+
		"\3\u0085\3\u0085\3\u0085\5\u0085\u071d\n\u0085\3\u0085\3\u0085\3\u0085"+
		"\3\u0085\5\u0085\u0723\n\u0085\3\u0085\3\u0085\3\u0085\3\u0085\3\u0085"+
		"\5\u0085\u072a\n\u0085\5\u0085\u072c\n\u0085\3\u0086\5\u0086\u072f\n\u0086"+
		"\3\u0086\3\u0086\3\u0086\3\u0086\3\u0086\3\u0086\3\u0086\3\u0086\7\u0086"+
		"\u0739\n\u0086\f\u0086\16\u0086\u073c\13\u0086\3\u0086\3\u0086\5\u0086"+
		"\u0740\n\u0086\3\u0086\5\u0086\u0743\n\u0086\3\u0086\3\u0086\3\u0086\3"+
		"\u0086\5\u0086\u0749\n\u0086\5\u0086\u074b\n\u0086\3\u0087\3\u0087\3\u0087"+
		"\3\u0087\5\u0087\u0751\n\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087"+
		"\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087"+
		"\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\7\u0087\u0768"+
		"\n\u0087\f\u0087\16\u0087\u076b\13\u0087\3\u0088\3\u0088\3\u0088\6\u0088"+
		"\u0770\n\u0088\r\u0088\16\u0088\u0771\3\u0088\3\u0088\5\u0088\u0776\n"+
		"\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\6\u0088\u077d\n\u0088\r"+
		"\u0088\16\u0088\u077e\3\u0088\3\u0088\5\u0088\u0783\n\u0088\3\u0088\3"+
		"\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088"+
		"\3\u0088\3\u0088\3\u0088\3\u0088\5\u0088\u0793\n\u0088\3\u0088\3\u0088"+
		"\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\5\u0088\u079c\n\u0088\3\u0088"+
		"\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088"+
		"\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088"+
		"\3\u0088\3\u0088\3\u0088\5\u0088\u07b4\n\u0088\3\u0088\3\u0088\3\u0088"+
		"\7\u0088\u07b9\n\u0088\f\u0088\16\u0088\u07bc\13\u0088\5\u0088\u07be\n"+
		"\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088"+
		"\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\5\u0088\u07cf"+
		"\n\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\7\u0088\u07d6\n\u0088"+
		"\f\u0088\16\u0088\u07d9\13\u0088\3\u0089\3\u0089\3\u0089\5\u0089\u07de"+
		"\n\u0089\3\u008a\3\u008a\3\u008a\3\u008a\5\u008a\u07e4\n\u008a\3\u008b"+
		"\3\u008b\3\u008c\3\u008c\3\u008d\3\u008d\5\u008d\u07ec\n\u008d\3\u008e"+
		"\3\u008e\3\u008e\5\u008e\u07f1\n\u008e\3\u008f\3\u008f\5\u008f\u07f5\n"+
		"\u008f\3\u0090\3\u0090\3\u0090\6\u0090\u07fa\n\u0090\r\u0090\16\u0090"+
		"\u07fb\3\u0091\3\u0091\3\u0091\5\u0091\u0801\n\u0091\3\u0092\3\u0092\3"+
		"\u0092\3\u0092\3\u0092\3\u0093\5\u0093\u0809\n\u0093\3\u0093\3\u0093\5"+
		"\u0093\u080d\n\u0093\3\u0094\5\u0094\u0810\n\u0094\3\u0094\3\u0094\5\u0094"+
		"\u0814\n\u0094\3\u0095\5\u0095\u0817\n\u0095\3\u0095\3\u0095\5\u0095\u081b"+
		"\n\u0095\3\u0096\3\u0096\3\u0096\3\u0097\3\u0097\6\u0097\u0822\n\u0097"+
		"\r\u0097\16\u0097\u0823\3\u0097\5\u0097\u0827\n\u0097\3\u0098\3\u0098"+
		"\3\u0098\3\u0098\3\u0099\3\u0099\3\u0099\7\u0099\u0830\n\u0099\f\u0099"+
		"\16\u0099\u0833\13\u0099\3\u009a\3\u009a\3\u009a\3\u009a\5\u009a\u0839"+
		"\n\u009a\3\u009b\3\u009b\3\u009b\3\u009b\3\u009b\3\u009c\3\u009c\3\u009d"+
		"\3\u009d\3\u009e\3\u009e\3\u009e\3\u009e\3\u009e\3\u009f\3\u009f\3\u00a0"+
		"\3\u00a0\3\u00a1\3\u00a1\3\u00a2\3\u00a2\3\u00a3\3\u00a3\3\u00a4\3\u00a4"+
		"\3\u00a4\7\u00a4\u0856\n\u00a4\f\u00a4\16\u00a4\u0859\13\u00a4\3\u00a5"+
		"\3\u00a5\3\u00a5\3\u00a6\3\u00a6\3\u00a6\3\u00a6\3\u00a7\3\u00a7\3\u00a7"+
		"\3\u00a8\3\u00a8\3\u00a8\3\u00a8\7\u00a8\u0869\n\u00a8\f\u00a8\16\u00a8"+
		"\u086c\13\u00a8\3\u00a8\3\u00a8\3\u00a9\3\u00a9\5\u00a9\u0872\n\u00a9"+
		"\3\u00a9\5\u00a9\u0875\n\u00a9\3\u00aa\3\u00aa\3\u00aa\5\u00aa\u087a\n"+
		"\u00aa\3\u00ab\3\u00ab\3\u00ab\3\u00ab\5\u00ab\u0880\n\u00ab\3\u00ac\3"+
		"\u00ac\3\u00ac\3\u00ac\3\u00ac\3\u00ac\5\u00ac\u0888\n\u00ac\3\u00ad\3"+
		"\u00ad\3\u00ad\3\u00ad\3\u00ad\3\u00ad\3\u00ad\3\u00ad\3\u00ad\3\u00ad"+
		"\3\u00ad\3\u00ad\3\u00ad\3\u00ad\5\u00ad\u0898\n\u00ad\3\u00ae\3\u00ae"+
		"\3\u00ae\3\u00ae\3\u00ae\3\u00ae\3\u00ae\5\u00ae\u08a1\n\u00ae\3\u00af"+
		"\3\u00af\3\u00b0\3\u00b0\3\u00b1\3\u00b1\3\u00b1\3\u00b1\5\u00b1\u08ab"+
		"\n\u00b1\3\u00b1\3\u00b1\3\u00b1\3\u00b1\3\u00b1\5\u00b1\u08b2\n\u00b1"+
		"\3\u00b1\5\u00b1\u08b5\n\u00b1\3\u00b2\3\u00b2\3\u00b2\3\u00b3\3\u00b3"+
		"\3\u00b4\3\u00b4\3\u00b5\3\u00b5\3\u00b6\3\u00b6\3\u00b7\3\u00b7\3\u00b8"+
		"\3\u00b8\3\u00b9\3\u00b9\3\u00ba\3\u00ba\3\u00bb\3\u00bb\3\u00bc\3\u00bc"+
		"\3\u00bc\3\u0857\7\u00a0\u00b4\u0106\u010c\u010e\u00bd\2\4\6\b\n\f\16"+
		"\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bd"+
		"fhjlnprtvxz|~\u0080\u0082\u0084\u0086\u0088\u008a\u008c\u008e\u0090\u0092"+
		"\u0094\u0096\u0098\u009a\u009c\u009e\u00a0\u00a2\u00a4\u00a6\u00a8\u00aa"+
		"\u00ac\u00ae\u00b0\u00b2\u00b4\u00b6\u00b8\u00ba\u00bc\u00be\u00c0\u00c2"+
		"\u00c4\u00c6\u00c8\u00ca\u00cc\u00ce\u00d0\u00d2\u00d4\u00d6\u00d8\u00da"+
		"\u00dc\u00de\u00e0\u00e2\u00e4\u00e6\u00e8\u00ea\u00ec\u00ee\u00f0\u00f2"+
		"\u00f4\u00f6\u00f8\u00fa\u00fc\u00fe\u0100\u0102\u0104\u0106\u0108\u010a"+
		"\u010c\u010e\u0110\u0112\u0114\u0116\u0118\u011a\u011c\u011e\u0120\u0122"+
		"\u0124\u0126\u0128\u012a\u012c\u012e\u0130\u0132\u0134\u0136\u0138\u013a"+
		"\u013c\u013e\u0140\u0142\u0144\u0146\u0148\u014a\u014c\u014e\u0150\u0152"+
		"\u0154\u0156\u0158\u015a\u015c\u015e\u0160\u0162\u0164\u0166\u0168\u016a"+
		"\u016c\u016e\u0170\u0172\u0174\u0176\2\61\3\2\5\6\4\2!!\u00ee\u00ee\5"+
		"\2\23\23))GG\6\2\20\20\35\35DD\u00ab\u00ab\4\2\17\17\34\34\4\2\u0100\u0100"+
		"\u010b\u010b\4\2\u00aa\u00aa\u015c\u015c\4\2\7\7yy\5\2\u00c7\u00c7\u00e5"+
		"\u00e5\u012f\u012f\r\2\r\r\u0095\u0095\u009c\u009c\u00c3\u00c4\u00d0\u00d0"+
		"\u00e6\u00e6\u0110\u0111\u0153\u0153\u015f\u015f\u0164\u0164\u0173\u0174"+
		"\4\2\u0178\u0178\u017a\u017a\6\2\u00e8\u00e9\u00f0\u00f0\u00fe\u00fe\u0130"+
		"\u0130\4\2\u00bc\u00bc\u0129\u0129\4\2,,\u010c\u010c\5\2\30\30cc\u00b6"+
		"\u00b6\5\2,,aa\u010c\u010c\5\288]]\u00ae\u00ae\5\2EEnn\u0081\u0081\4\2"+
		"\16\16~~\4\2``\u0114\u0114\5\2\u00f7\u00f7\u0112\u0112\u0169\u0169\6\2"+
		"\u0101\u0101\u010d\u010d\u011b\u011b\u0147\u0147\5\2\32\32<<\u00a0\u00a0"+
		"\7\2\33\33\u008e\u008f\u0094\u0094\u009a\u009a\u0132\u0132\4\2\u00e1\u00e1"+
		"\u014a\u014a\5\2<<\u008b\u008b\u00a0\u00a0\4\2\13\13!!\4\2\60\60LL\6\2"+
		"\u00fd\u00fd\u012f\u012f\u0167\u0167\u016b\u016b\4\2\u00be\u00be\u0158"+
		"\u0158\4\2\u00b6\u00b6\u00ba\u00ba\4\2\u0180\u0180\u0194\u0195\6\2##\u0192"+
		"\u0192\u0196\u0196\u0199\u0199\4\2\u0194\u0195\u0197\u0197\3\2\u0194\u0195"+
		"\3\2\u019d\u019e\4\2\u019d\u019d\u01a0\u01a0\6\2##\u0192\u0192\u0194\u0196"+
		"\u0198\u0199\5\2\u012e\u012e\u017f\u0180\u0194\u0195\4\2\u00fd\u00fd\u0167"+
		"\u0167\4\2\u00b6\u00b6\u00ef\u00ef\f\2QQSSuu\u00af\u00af\u00e7\u00e7\u0109"+
		"\u0109\u0125\u0125\u0128\u0128\u014d\u014d\u017b\u017b\22\2\21\21\36\37"+
		"\'\'==QTXYuu\u0085\u0085\u00af\u00b0\u00b3\u00b3\u00e7\u00e7\u0109\u0109"+
		"\u0125\u0125\u0128\u0128\u014d\u014d\u017b\u017b\b\2\u00b6\u00b6\u00c8"+
		"\u00c8\u00ef\u00ef\u011a\u011a\u0166\u0166\u0192\u0192\36\2>>PPuu\u00af"+
		"\u00af\u00b5\u00b5\u00bc\u00bc\u00c0\u00c0\u00ce\u00cf\u00d5\u00d5\u00d7"+
		"\u00d7\u00de\u00de\u00e5\u00e5\u0106\u0106\u0109\u0109\u0117\u0117\u011b"+
		"\u011b\u0125\u0125\u0128\u0128\u013a\u013a\u0140\u0141\u0144\u0144\u0147"+
		"\u0147\u014d\u014d\u0156\u0157\u015f\u0163\u0168\u0168\u016d\u016d\u017b"+
		"\u017b\7\2\u00b5\u00f5\u00f7\u0140\u0142\u0157\u0159\u0165\u0167\u017b"+
		"\5\2\7&(\u00af\u00b1\u00b4\2\u098e\2\u0178\3\2\2\2\4\u017b\3\2\2\2\6\u0183"+
		"\3\2\2\2\b\u0186\3\2\2\2\n\u01a9\3\2\2\2\f\u01ab\3\2\2\2\16\u01bb\3\2"+
		"\2\2\20\u01bf\3\2\2\2\22\u01c1\3\2\2\2\24\u01c4\3\2\2\2\26\u01cf\3\2\2"+
		"\2\30\u01d7\3\2\2\2\32\u01df\3\2\2\2\34\u01e1\3\2\2\2\36\u020e\3\2\2\2"+
		" \u0210\3\2\2\2\"\u0217\3\2\2\2$\u021b\3\2\2\2&\u021f\3\2\2\2(\u0223\3"+
		"\2\2\2*\u0228\3\2\2\2,\u022e\3\2\2\2.\u0230\3\2\2\2\60\u0259\3\2\2\2\62"+
		"\u0267\3\2\2\2\64\u0269\3\2\2\2\66\u0273\3\2\2\28\u0275\3\2\2\2:\u02c9"+
		"\3\2\2\2<\u02cb\3\2\2\2>\u02cf\3\2\2\2@\u02d7\3\2\2\2B\u02f5\3\2\2\2D"+
		"\u02f7\3\2\2\2F\u031a\3\2\2\2H\u032a\3\2\2\2J\u032c\3\2\2\2L\u032f\3\2"+
		"\2\2N\u0339\3\2\2\2P\u033b\3\2\2\2R\u0341\3\2\2\2T\u0343\3\2\2\2V\u034b"+
		"\3\2\2\2X\u0353\3\2\2\2Z\u0355\3\2\2\2\\\u0359\3\2\2\2^\u035d\3\2\2\2"+
		"`\u0375\3\2\2\2b\u0379\3\2\2\2d\u037b\3\2\2\2f\u038b\3\2\2\2h\u038d\3"+
		"\2\2\2j\u0392\3\2\2\2l\u039e\3\2\2\2n\u03b0\3\2\2\2p\u03c4\3\2\2\2r\u03cf"+
		"\3\2\2\2t\u03d1\3\2\2\2v\u03de\3\2\2\2x\u03e5\3\2\2\2z\u03e8\3\2\2\2|"+
		"\u03f1\3\2\2\2~\u03f5\3\2\2\2\u0080\u03f9\3\2\2\2\u0082\u03fc\3\2\2\2"+
		"\u0084\u0404\3\2\2\2\u0086\u0409\3\2\2\2\u0088\u041a\3\2\2\2\u008a\u0421"+
		"\3\2\2\2\u008c\u042b\3\2\2\2\u008e\u0434\3\2\2\2\u0090\u043e\3\2\2\2\u0092"+
		"\u0451\3\2\2\2\u0094\u0453\3\2\2\2\u0096\u0460\3\2\2\2\u0098\u0463\3\2"+
		"\2\2\u009a\u046c\3\2\2\2\u009c\u0477\3\2\2\2\u009e\u0484\3\2\2\2\u00a0"+
		"\u04a7\3\2\2\2\u00a2\u04ba\3\2\2\2\u00a4\u04c3\3\2\2\2\u00a6\u04cc\3\2"+
		"\2\2\u00a8\u04df\3\2\2\2\u00aa\u04f3\3\2\2\2\u00ac\u04f5\3\2\2\2\u00ae"+
		"\u050c\3\2\2\2\u00b0\u051a\3\2\2\2\u00b2\u051c\3\2\2\2\u00b4\u052a\3\2"+
		"\2\2\u00b6\u0544\3\2\2\2\u00b8\u0571\3\2\2\2\u00ba\u0573\3\2\2\2\u00bc"+
		"\u0579\3\2\2\2\u00be\u057b\3\2\2\2\u00c0\u0580\3\2\2\2\u00c2\u0585\3\2"+
		"\2\2\u00c4\u0591\3\2\2\2\u00c6\u05a2\3\2\2\2\u00c8\u05a4\3\2\2\2\u00ca"+
		"\u05a6\3\2\2\2\u00cc\u05b9\3\2\2\2\u00ce\u05bb\3\2\2\2\u00d0\u05be\3\2"+
		"\2\2\u00d2\u05ef\3\2\2\2\u00d4\u05f1\3\2\2\2\u00d6\u05f4\3\2\2\2\u00d8"+
		"\u05f6\3\2\2\2\u00da\u05fd\3\2\2\2\u00dc\u05ff\3\2\2\2\u00de\u0601\3\2"+
		"\2\2\u00e0\u0604\3\2\2\2\u00e2\u060d\3\2\2\2\u00e4\u0612\3\2\2\2\u00e6"+
		"\u0620\3\2\2\2\u00e8\u063c\3\2\2\2\u00ea\u0646\3\2\2\2\u00ec\u064e\3\2"+
		"\2\2\u00ee\u0653\3\2\2\2\u00f0\u066d\3\2\2\2\u00f2\u066f\3\2\2\2\u00f4"+
		"\u0678\3\2\2\2\u00f6\u0683\3\2\2\2\u00f8\u068f\3\2\2\2\u00fa\u06a9\3\2"+
		"\2\2\u00fc\u06ab\3\2\2\2\u00fe\u06bd\3\2\2\2\u0100\u06bf\3\2\2\2\u0102"+
		"\u06c4\3\2\2\2\u0104\u06c7\3\2\2\2\u0106\u06d5\3\2\2\2\u0108\u072b\3\2"+
		"\2\2\u010a\u074a\3\2\2\2\u010c\u0750\3\2\2\2\u010e\u07ce\3\2\2\2\u0110"+
		"\u07dd\3\2\2\2\u0112\u07e3\3\2\2\2\u0114\u07e5\3\2\2\2\u0116\u07e7\3\2"+
		"\2\2\u0118\u07eb\3\2\2\2\u011a\u07ed\3\2\2\2\u011c\u07f2\3\2\2\2\u011e"+
		"\u07f9\3\2\2\2\u0120\u07fd\3\2\2\2\u0122\u0802\3\2\2\2\u0124\u080c\3\2"+
		"\2\2\u0126\u080f\3\2\2\2\u0128\u0816\3\2\2\2\u012a\u081c\3\2\2\2\u012c"+
		"\u0826\3\2\2\2\u012e\u0828\3\2\2\2\u0130\u082c\3\2\2\2\u0132\u0838\3\2"+
		"\2\2\u0134\u083a\3\2\2\2\u0136\u083f\3\2\2\2\u0138\u0841\3\2\2\2\u013a"+
		"\u0843\3\2\2\2\u013c\u0848\3\2\2\2\u013e\u084a\3\2\2\2\u0140\u084c\3\2"+
		"\2\2\u0142\u084e\3\2\2\2\u0144\u0850\3\2\2\2\u0146\u0852\3\2\2\2\u0148"+
		"\u085a\3\2\2\2\u014a\u085d\3\2\2\2\u014c\u0861\3\2\2\2\u014e\u0864\3\2"+
		"\2\2\u0150\u086f\3\2\2\2\u0152\u0879\3\2\2\2\u0154\u087f\3\2\2\2\u0156"+
		"\u0887\3\2\2\2\u0158\u0897\3\2\2\2\u015a\u08a0\3\2\2\2\u015c\u08a2\3\2"+
		"\2\2\u015e\u08a4\3\2\2\2\u0160\u08b4\3\2\2\2\u0162\u08b6\3\2\2\2\u0164"+
		"\u08b9\3\2\2\2\u0166\u08bb\3\2\2\2\u0168\u08bd\3\2\2\2\u016a\u08bf\3\2"+
		"\2\2\u016c\u08c1\3\2\2\2\u016e\u08c3\3\2\2\2\u0170\u08c5\3\2\2\2\u0172"+
		"\u08c7\3\2\2\2\u0174\u08c9\3\2\2\2\u0176\u08cb\3\2\2\2\u0178\u0179\5\4"+
		"\3\2\u0179\u017a\7\2\2\3\u017a\3\3\2\2\2\u017b\u017c\5\6\4\2\u017c\u017d"+
		"\7\2\2\3\u017d\5\3\2\2\2\u017e\u0182\5\b\5\2\u017f\u0182\5\n\6\2\u0180"+
		"\u0182\5\f\7\2\u0181\u017e\3\2\2\2\u0181\u017f\3\2\2\2\u0181\u0180\3\2"+
		"\2\2\u0182\u0185\3\2\2\2\u0183\u0181\3\2\2\2\u0183\u0184\3\2\2\2\u0184"+
		"\7\3\2\2\2\u0185\u0183\3\2\2\2\u0186\u0187\t\2\2\2\u0187\t\3\2\2\2\u0188"+
		"\u0189\5\16\b\2\u0189\u018a\7\u018c\2\2\u018a\u01aa\3\2\2\2\u018b\u018c"+
		"\5\20\t\2\u018c\u018d\7\u018c\2\2\u018d\u01aa\3\2\2\2\u018e\u018f\5\22"+
		"\n\2\u018f\u0190\7\u018c\2\2\u0190\u01aa\3\2\2\2\u0191\u0192\5\24\13\2"+
		"\u0192\u0193\7\u018c\2\2\u0193\u01aa\3\2\2\2\u0194\u0195\5\32\16\2\u0195"+
		"\u0196\7\u018c\2\2\u0196\u01aa\3\2\2\2\u0197\u0198\5\36\20\2\u0198\u0199"+
		"\7\u018c\2\2\u0199\u01aa\3\2\2\2\u019a\u019b\5 \21\2\u019b\u019c\7\u018c"+
		"\2\2\u019c\u01aa\3\2\2\2\u019d\u019e\5\"\22\2\u019e\u019f\7\u018c\2\2"+
		"\u019f\u01aa\3\2\2\2\u01a0\u01a1\5$\23\2\u01a1\u01a2\7\u018c\2\2\u01a2"+
		"\u01aa\3\2\2\2\u01a3\u01a4\5&\24\2\u01a4\u01a5\7\u018c\2\2\u01a5\u01aa"+
		"\3\2\2\2\u01a6\u01a7\5(\25\2\u01a7\u01a8\7\u018c\2\2\u01a8\u01aa\3\2\2"+
		"\2\u01a9\u0188\3\2\2\2\u01a9\u018b\3\2\2\2\u01a9\u018e\3\2\2\2\u01a9\u0191"+
		"\3\2\2\2\u01a9\u0194\3\2\2\2\u01a9\u0197\3\2\2\2\u01a9\u019a\3\2\2\2\u01a9"+
		"\u019d\3\2\2\2\u01a9\u01a0\3\2\2\2\u01a9\u01a3\3\2\2\2\u01a9\u01a6\3\2"+
		"\2\2\u01aa\13\3\2\2\2\u01ab\u01ac\7\u018c\2\2\u01ac\r\3\2\2\2\u01ad\u01bc"+
		"\5,\27\2\u01ae\u01bc\5j\66\2\u01af\u01bc\5l\67\2\u01b0\u01bc\5n8\2\u01b1"+
		"\u01bc\5h\65\2\u01b2\u01bc\5t;\2\u01b3\u01bc\5\u0082B\2\u01b4\u01bc\5"+
		"\u0084C\2\u01b5\u01bc\5\u0086D\2\u01b6\u01bc\5\u0088E\2\u01b7\u01bc\5"+
		"\u008aF\2\u01b8\u01bc\5\u008cG\2\u01b9\u01bc\5\u008eH\2\u01ba\u01bc\5"+
		"\u0090I\2\u01bb\u01ad\3\2\2\2\u01bb\u01ae\3\2\2\2\u01bb\u01af\3\2\2\2"+
		"\u01bb\u01b0\3\2\2\2\u01bb\u01b1\3\2\2\2\u01bb\u01b2\3\2\2\2\u01bb\u01b3"+
		"\3\2\2\2\u01bb\u01b4\3\2\2\2\u01bb\u01b5\3\2\2\2\u01bb\u01b6\3\2\2\2\u01bb"+
		"\u01b7\3\2\2\2\u01bb\u01b8\3\2\2\2\u01bb\u01b9\3\2\2\2\u01bb\u01ba\3\2"+
		"\2\2\u01bc\17\3\2\2\2\u01bd\u01c0\5\u00a0Q\2\u01be\u01c0\5\u0092J\2\u01bf"+
		"\u01bd\3\2\2\2\u01bf\u01be\3\2\2\2\u01c0\21\3\2\2\2\u01c1\u01c2\t\3\2"+
		"\2\u01c2\u01c3\5\u0144\u00a3\2\u01c3\23\3\2\2\2\u01c4\u01c8\7\u00fa\2"+
		"\2\u01c5\u01c9\5\26\f\2\u01c6\u01c7\7h\2\2\u01c7\u01c9\7\u00ff\2\2\u01c8"+
		"\u01c5\3\2\2\2\u01c8\u01c6\3\2\2\2\u01c8\u01c9\3\2\2\2\u01c9\u01cd\3\2"+
		"\2\2\u01ca\u01ce\5\20\t\2\u01cb\u01ce\5\u0094K\2\u01cc\u01ce\5\u009eP"+
		"\2\u01cd\u01ca\3\2\2\2\u01cd\u01cb\3\2\2\2\u01cd\u01cc\3\2\2\2\u01ce\25"+
		"\3\2\2\2\u01cf\u01d4\5\30\r\2\u01d0\u01d1\7\u018b\2\2\u01d1\u01d3\5\30"+
		"\r\2\u01d2\u01d0\3\2\2\2\u01d3\u01d6\3\2\2\2\u01d4\u01d2\3\2\2\2\u01d4"+
		"\u01d5\3\2\2\2\u01d5\27\3\2\2\2\u01d6\u01d4\3\2\2\2\u01d7\u01d8\t\4\2"+
		"\2\u01d8\31\3\2\2\2\u01d9\u01da\7\u00a5\2\2\u01da\u01db\7\17\2\2\u01db"+
		"\u01e0\5\u013c\u009f\2\u01dc\u01dd\7\u00a5\2\2\u01dd\u01e0\5\u013e\u00a0"+
		"\2\u01de\u01e0\5\34\17\2\u01df\u01d9\3\2\2\2\u01df\u01dc\3\2\2\2\u01df"+
		"\u01de\3\2\2\2\u01e0\33\3\2\2\2\u01e1\u01e2\7\u00a5\2\2\u01e2\u01e3\7"+
		"W\2\2\u01e3\u01e8\5\u0146\u00a4\2\u01e4\u01e5\7\u018b\2\2\u01e5\u01e7"+
		"\5\u0146\u00a4\2\u01e6\u01e4\3\2\2\2\u01e7\u01ea\3\2\2\2\u01e8\u01e6\3"+
		"\2\2\2\u01e8\u01e9\3\2\2\2\u01e9\35\3\2\2\2\u01ea\u01e8\3\2\2\2\u01eb"+
		"\u01ec\7\u0150\2\2\u01ec\u020f\t\5\2\2\u01ed\u01ee\7\u0150\2\2\u01ee\u01ef"+
		"\7\u00e2\2\2\u01ef\u020f\t\6\2\2\u01f0\u01f1\7\u0150\2\2\u01f1\u01f4\7"+
		"\u0098\2\2\u01f2\u01f3\t\7\2\2\u01f3\u01f5\5\u0144\u00a3\2\u01f4\u01f2"+
		"\3\2\2\2\u01f4\u01f5\3\2\2\2\u01f5\u01f7\3\2\2\2\u01f6\u01f8\5\u010a\u0086"+
		"\2\u01f7\u01f6\3\2\2\2\u01f7\u01f8\3\2\2\2\u01f8\u020f\3\2\2\2\u01f9\u01fa"+
		"\7\u0150\2\2\u01fa\u01fb\7\27\2\2\u01fb\u01fc\t\7\2\2\u01fc\u01fe\5\u0146"+
		"\u00a4\2\u01fd\u01ff\5\u010a\u0086\2\u01fe\u01fd\3\2\2\2\u01fe\u01ff\3"+
		"\2\2\2\u01ff\u020f\3\2\2\2\u0200\u0201\7\u0150\2\2\u0201\u0202\7\u00df"+
		"\2\2\u0202\u0203\t\b\2\2\u0203\u020f\5\u0146\u00a4\2\u0204\u0206\7\u0150"+
		"\2\2\u0205\u0207\7\u016f\2\2\u0206\u0205\3\2\2\2\u0206\u0207\3\2\2\2\u0207"+
		"\u0208\3\2\2\2\u0208\u020f\7\66\2\2\u0209\u020b\7\u0150\2\2\u020a\u020c"+
		"\7\u0101\2\2\u020b\u020a\3\2\2\2\u020b\u020c\3\2\2\2\u020c\u020d\3\2\2"+
		"\2\u020d\u020f\7W\2\2\u020e\u01eb\3\2\2\2\u020e\u01ed\3\2\2\2\u020e\u01f0"+
		"\3\2\2\2\u020e\u01f9\3\2\2\2\u020e\u0200\3\2\2\2\u020e\u0204\3\2\2\2\u020e"+
		"\u0209\3\2\2\2\u020f\37\3\2\2\2\u0210\u0211\7O\2\2\u0211\u0212\7\u0127"+
		"\2\2\u0212\u0215\5\u0146\u00a4\2\u0213\u0214\7\u0178\2\2\u0214\u0216\5"+
		"\u014e\u00a8\2\u0215\u0213\3\2\2\2\u0215\u0216\3\2\2\2\u0216!\3\2\2\2"+
		"\u0217\u0218\7\u00a3\2\2\u0218\u0219\7\u0127\2\2\u0219\u021a\5\u0146\u00a4"+
		"\2\u021a#\3\2\2\2\u021b\u021d\7\u014f\2\2\u021c\u021e\5\u0150\u00a9\2"+
		"\u021d\u021c\3\2\2\2\u021d\u021e\3\2\2\2\u021e%\3\2\2\2\u021f\u0221\7"+
		"\u0145\2\2\u0220\u0222\5\u0152\u00aa\2\u0221\u0220\3\2\2\2\u0221\u0222"+
		"\3\2\2\2\u0222\'\3\2\2\2\u0223\u0224\t\t\2\2\u0224\u0225\7C\2\2\u0225"+
		"\u0226\5r:\2\u0226)\3\2\2\2\u0227\u0229\7\u01a1\2\2\u0228\u0227\3\2\2"+
		"\2\u0229\u022a\3\2\2\2\u022a\u0228\3\2\2\2\u022a\u022b\3\2\2\2\u022b+"+
		"\3\2\2\2\u022c\u022f\5.\30\2\u022d\u022f\5\60\31\2\u022e\u022c\3\2\2\2"+
		"\u022e\u022d\3\2\2\2\u022f-\3\2\2\2\u0230\u0232\7\u00df\2\2\u0231\u0233"+
		"\7\u0099\2\2\u0232\u0231\3\2\2\2\u0232\u0233\3\2\2\2\u0233\u0234\3\2\2"+
		"\2\u0234\u0236\7\u015c\2\2\u0235\u0237\5\u014a\u00a6\2\u0236\u0235\3\2"+
		"\2\2\u0236\u0237\3\2\2\2\u0237\u0238\3\2\2\2\u0238\u0239\5\u0142\u00a2"+
		"\2\u0239\u023a\7\u0187\2\2\u023a\u023f\5\62\32\2\u023b\u023c\7\u018b\2"+
		"\2\u023c\u023e\5\62\32\2\u023d\u023b\3\2\2\2\u023e\u0241\3\2\2\2\u023f"+
		"\u023d\3\2\2\2\u023f\u0240\3\2\2\2\u0240\u0244\3\2\2\2\u0241\u023f\3\2"+
		"\2\2\u0242\u0243\7\u018b\2\2\u0243\u0245\5T+\2\u0244\u0242\3\2\2\2\u0244"+
		"\u0245\3\2\2\2\u0245\u0248\3\2\2\2\u0246\u0247\7\u018b\2\2\u0247\u0249"+
		"\5V,\2\u0248\u0246\3\2\2\2\u0248\u0249\3\2\2\2\u0249\u024c\3\2\2\2\u024a"+
		"\u024b\7\u018b\2\2\u024b\u024d\5Z.\2\u024c\u024a\3\2\2\2\u024c\u024d\3"+
		"\2\2\2\u024d\u024e\3\2\2\2\u024e\u0250\7\u0188\2\2\u024f\u0251\5J&\2\u0250"+
		"\u024f\3\2\2\2\u0250\u0251\3\2\2\2\u0251\u0253\3\2\2\2\u0252\u0254\5\\"+
		"/\2\u0253\u0252\3\2\2\2\u0253\u0254\3\2\2\2\u0254\u0255\3\2\2\2\u0255"+
		"\u0257\5\u0148\u00a5\2\u0256\u0258\5d\63\2\u0257\u0256\3\2\2\2\u0257\u0258"+
		"\3\2\2\2\u0258/\3\2\2\2\u0259\u025a\7\u00df\2\2\u025a\u025c\7\u015c\2"+
		"\2\u025b\u025d\5\u014a\u00a6\2\u025c\u025b\3\2\2\2\u025c\u025d\3\2\2\2"+
		"\u025d\u025e\3\2\2\2\u025e\u025f\5\u0142\u00a2\2\u025f\u0262\5\u0148\u00a5"+
		"\2\u0260\u0261\7\u00bd\2\2\u0261\u0263\5\u00a0Q\2\u0262\u0260\3\2\2\2"+
		"\u0262\u0263\3\2\2\2\u0263\61\3\2\2\2\u0264\u0268\5\64\33\2\u0265\u0268"+
		"\5L\'\2\u0266\u0268\5P)\2\u0267\u0264\3\2\2\2\u0267\u0265\3\2\2\2\u0267"+
		"\u0266\3\2\2\2\u0268\63\3\2\2\2\u0269\u026a\5\66\34\2\u026a\u026c\5:\36"+
		"\2\u026b\u026d\5H%\2\u026c\u026b\3\2\2\2\u026c\u026d\3\2\2\2\u026d\u026f"+
		"\3\2\2\2\u026e\u0270\5J&\2\u026f\u026e\3\2\2\2\u026f\u0270\3\2\2\2\u0270"+
		"\65\3\2\2\2\u0271\u0274\5\u0146\u00a4\2\u0272\u0274\5\u0104\u0083\2\u0273"+
		"\u0271\3\2\2\2\u0273\u0272\3\2\2\2\u0274\67\3\2\2\2\u0275\u0276\7\u0187"+
		"\2\2\u0276\u027b\5\66\34\2\u0277\u0278\7\u018b\2\2\u0278\u027a\5\66\34"+
		"\2\u0279\u0277\3\2\2\2\u027a\u027d\3\2\2\2\u027b\u0279\3\2\2\2\u027b\u027c"+
		"\3\2\2\2\u027c\u027e\3\2\2\2\u027d\u027b\3\2\2\2\u027e\u027f\7\u0188\2"+
		"\2\u027f9\3\2\2\2\u0280\u02ca\t\n\2\2\u0281\u0283\t\13\2\2\u0282\u0284"+
		"\5<\37\2\u0283\u0282\3\2\2\2\u0283\u0284\3\2\2\2\u0284\u02ca\3\2\2\2\u0285"+
		"\u0287\7\u0160\2\2\u0286\u0288\5<\37\2\u0287\u0286\3\2\2\2\u0287\u0288"+
		"\3\2\2\2\u0288\u028f\3\2\2\2\u0289\u028b\t\f\2\2\u028a\u028c\7\u011e\2"+
		"\2\u028b\u028a\3\2\2\2\u028b\u028c\3\2\2\2\u028c\u028d\3\2\2\2\u028d\u028e"+
		"\7\u015f\2\2\u028e\u0290\7\u00b4\2\2\u028f\u0289\3\2\2\2\u028f\u0290\3"+
		"\2\2\2\u0290\u02ca\3\2\2\2\u0291\u0293\7\u0161\2\2\u0292\u0294\5<\37\2"+
		"\u0293\u0292\3\2\2\2\u0293\u0294\3\2\2\2\u0294\u029b\3\2\2\2\u0295\u0297"+
		"\t\f\2\2\u0296\u0298\7\u011e\2\2\u0297\u0296\3\2\2\2\u0297\u0298\3\2\2"+
		"\2\u0298\u0299\3\2\2\2\u0299\u029a\7\u015f\2\2\u029a\u029c\7\u00b4\2\2"+
		"\u029b\u0295\3\2\2\2\u029b\u029c\3\2\2\2\u029c\u02ca\3\2\2\2\u029d\u029f"+
		"\7\u0162\2\2\u029e\u02a0\5<\37\2\u029f\u029e\3\2\2\2\u029f\u02a0\3\2\2"+
		"\2\u02a0\u02a7\3\2\2\2\u02a1\u02a3\t\f\2\2\u02a2\u02a4\7\u011e\2\2\u02a3"+
		"\u02a2\3\2\2\2\u02a3\u02a4\3\2\2\2\u02a4\u02a5\3\2\2\2\u02a5\u02a6\7\u015f"+
		"\2\2\u02a6\u02a8\7\u00b4\2\2\u02a7\u02a1\3\2\2\2\u02a7\u02a8\3\2\2\2\u02a8"+
		"\u02ca\3\2\2\2\u02a9\u02ab\7\u0163\2\2\u02aa\u02ac\5<\37\2\u02ab\u02aa"+
		"\3\2\2\2\u02ab\u02ac\3\2\2\2\u02ac\u02b3\3\2\2\2\u02ad\u02af\t\f\2\2\u02ae"+
		"\u02b0\7\u011e\2\2\u02af\u02ae\3\2\2\2\u02af\u02b0\3\2\2\2\u02b0\u02b1"+
		"\3\2\2\2\u02b1\u02b2\7\u015f\2\2\u02b2\u02b4\7\u00b4\2\2\u02b3\u02ad\3"+
		"\2\2\2\u02b3\u02b4\3\2\2\2\u02b4\u02ca\3\2\2\2\u02b5\u02b7\t\r\2\2\u02b6"+
		"\u02b8\5> \2\u02b7\u02b6\3\2\2\2\u02b7\u02b8\3\2\2\2\u02b8\u02ca\3\2\2"+
		"\2\u02b9\u02bb\t\16\2\2\u02ba\u02bc\5B\"\2\u02bb\u02ba\3\2\2\2\u02bb\u02bc"+
		"\3\2\2\2\u02bc\u02ca\3\2\2\2\u02bd\u02bf\7P\2\2\u02be\u02c0\5D#\2\u02bf"+
		"\u02be\3\2\2\2\u02bf\u02c0\3\2\2\2\u02c0\u02ca\3\2\2\2\u02c1\u02c3\7\u014b"+
		"\2\2\u02c2\u02c4\5F$\2\u02c3\u02c2\3\2\2\2\u02c3\u02c4\3\2\2\2\u02c4\u02ca"+
		"\3\2\2\2\u02c5\u02c7\7v\2\2\u02c6\u02c8\5@!\2\u02c7\u02c6\3\2\2\2\u02c7"+
		"\u02c8\3\2\2\2\u02c8\u02ca\3\2\2\2\u02c9\u0280\3\2\2\2\u02c9\u0281\3\2"+
		"\2\2\u02c9\u0285\3\2\2\2\u02c9\u0291\3\2\2\2\u02c9\u029d\3\2\2\2\u02c9"+
		"\u02a9\3\2\2\2\u02c9\u02b5\3\2\2\2\u02c9\u02b9\3\2\2\2\u02c9\u02bd\3\2"+
		"\2\2\u02c9\u02c1\3\2\2\2\u02c9\u02c5\3\2\2\2\u02ca;\3\2\2\2\u02cb\u02cc"+
		"\7\u0187\2\2\u02cc\u02cd\5\u0166\u00b4\2\u02cd\u02ce\7\u0188\2\2\u02ce"+
		"=\3\2\2\2\u02cf\u02d0\7\u0187\2\2\u02d0\u02d3\5\u0166\u00b4\2\u02d1\u02d2"+
		"\7\u018b\2\2\u02d2\u02d4\5\u0166\u00b4\2\u02d3\u02d1\3\2\2\2\u02d3\u02d4"+
		"\3\2\2\2\u02d4\u02d5\3\2\2\2\u02d5\u02d6\7\u0188\2\2\u02d6?\3\2\2\2\u02d7"+
		"\u02d8\7\u0187\2\2\u02d8\u02db\5\u0164\u00b3\2\u02d9\u02da\7\u018b\2\2"+
		"\u02da\u02dc\5\u0164\u00b3\2\u02db\u02d9\3\2\2\2\u02db\u02dc\3\2\2\2\u02dc"+
		"\u02dd\3\2\2\2\u02dd\u02de\7\u0188\2\2\u02deA\3\2\2\2\u02df\u02e0\7\u017e"+
		"\2\2\u02e0\u02e5\5:\36\2\u02e1\u02e2\7\u018b\2\2\u02e2\u02e4\5:\36\2\u02e3"+
		"\u02e1\3\2\2\2\u02e4\u02e7\3\2\2\2\u02e5\u02e3\3\2\2\2\u02e5\u02e6\3\2"+
		"\2\2\u02e6\u02e8\3\2\2\2\u02e7\u02e5\3\2\2\2\u02e8\u02e9\7\u017d\2\2\u02e9"+
		"\u02f6\3\2\2\2\u02ea\u02eb\7\u0185\2\2\u02eb\u02f0\5:\36\2\u02ec\u02ed"+
		"\7\u018b\2\2\u02ed\u02ef\5:\36\2\u02ee\u02ec\3\2\2\2\u02ef\u02f2\3\2\2"+
		"\2\u02f0\u02ee\3\2\2\2\u02f0\u02f1\3\2\2\2\u02f1\u02f3\3\2\2\2\u02f2\u02f0"+
		"\3\2\2\2\u02f3\u02f4\7\u0186\2\2\u02f4\u02f6\3\2\2\2\u02f5\u02df\3\2\2"+
		"\2\u02f5\u02ea\3\2\2\2\u02f6C\3\2\2\2\u02f7\u02f8\7\u017e\2\2\u02f8\u02f9"+
		"\5:\36\2\u02f9\u02fa\7\u018b\2\2\u02fa\u02fb\5:\36\2\u02fb\u02fc\3\2\2"+
		"\2\u02fc\u02fd\7\u017d\2\2\u02fdE\3\2\2\2\u02fe\u02ff\7\u017e\2\2\u02ff"+
		"\u0300\5\66\34\2\u0300\u0307\5:\36\2\u0301\u0302\7\u018b\2\2\u0302\u0303"+
		"\5\66\34\2\u0303\u0304\5:\36\2\u0304\u0306\3\2\2\2\u0305\u0301\3\2\2\2"+
		"\u0306\u0309\3\2\2\2\u0307\u0305\3\2\2\2\u0307\u0308\3\2\2\2\u0308\u030a"+
		"\3\2\2\2\u0309\u0307\3\2\2\2\u030a\u030b\7\u017d\2\2\u030b\u031b\3\2\2"+
		"\2\u030c\u030d\7\u0185\2\2\u030d\u030e\5\66\34\2\u030e\u0315\5:\36\2\u030f"+
		"\u0310\7\u018b\2\2\u0310\u0311\5\66\34\2\u0311\u0312\5:\36\2\u0312\u0314"+
		"\3\2\2\2\u0313\u030f\3\2\2\2\u0314\u0317\3\2\2\2\u0315\u0313\3\2\2\2\u0315"+
		"\u0316\3\2\2\2\u0316\u0318\3\2\2\2\u0317\u0315\3\2\2\2\u0318\u0319\7\u0186"+
		"\2\2\u0319\u031b\3\2\2\2\u031a\u02fe\3\2\2\2\u031a\u030c\3\2\2\2\u031b"+
		"G\3\2\2\2\u031c\u031d\7\u00db\2\2\u031d\u031f\5X-\2\u031e\u031c\3\2\2"+
		"\2\u031e\u031f\3\2\2\2\u031f\u0320\3\2\2\2\u0320\u0321\7\u0142\2\2\u0321"+
		"\u0324\7H\2\2\u0322\u0323\7\u012e\2\2\u0323\u0325\7%\2\2\u0324\u0322\3"+
		"\2\2\2\u0324\u0325\3\2\2\2\u0325\u032b\3\2\2\2\u0326\u0328\7\u012e\2\2"+
		"\u0327\u0326\3\2\2\2\u0327\u0328\3\2\2\2\u0328\u0329\3\2\2\2\u0329\u032b"+
		"\7\u012f\2\2\u032a\u031e\3\2\2\2\u032a\u0327\3\2\2\2\u032bI\3\2\2\2\u032c"+
		"\u032d\7\25\2\2\u032d\u032e\7\u019c\2\2\u032eK\3\2\2\2\u032f\u0330\5\66"+
		"\34\2\u0330\u0331\5:\36\2\u0331\u0334\7\u0123\2\2\u0332\u0333\7\u0100"+
		"\2\2\u0333\u0335\5N(\2\u0334\u0332\3\2\2\2\u0334\u0335\3\2\2\2\u0335\u0337"+
		"\3\2\2\2\u0336\u0338\7\u00ac\2\2\u0337\u0336\3\2\2\2\u0337\u0338\3\2\2"+
		"\2\u0338M\3\2\2\2\u0339\u033a\7\u019c\2\2\u033aO\3\2\2\2\u033b\u033c\5"+
		"\66\34\2\u033c\u033d\7\u00bd\2\2\u033d\u033f\5R*\2\u033e\u0340\5J&\2\u033f"+
		"\u033e\3\2\2\2\u033f\u0340\3\2\2\2\u0340Q\3\2\2\2\u0341\u0342\5\u0104"+
		"\u0083\2\u0342S\3\2\2\2\u0343\u0344\7\u00ad\2\2\u0344\u0345\7\u00ff\2"+
		"\2\u0345\u0346\5\u0104\u0083\2\u0346\u0347\7\u00bd\2\2\u0347\u0348\5\u0104"+
		"\u0083\2\u0348U\3\2\2\2\u0349\u034a\7\u00db\2\2\u034a\u034c\5X-\2\u034b"+
		"\u0349\3\2\2\2\u034b\u034c\3\2\2\2\u034c\u034d\3\2\2\2\u034d\u034e\7\u0142"+
		"\2\2\u034e\u034f\7H\2\2\u034f\u0350\58\35\2\u0350\u0351\7\u012e\2\2\u0351"+
		"\u0352\7%\2\2\u0352W\3\2\2\2\u0353\u0354\5\u0132\u009a\2\u0354Y\3\2\2"+
		"\2\u0355\u0356\7\u013f\2\2\u0356\u0357\7\u00ff\2\2\u0357\u0358\7\u015a"+
		"\2\2\u0358[\3\2\2\2\u0359\u035a\7b\2\2\u035a\u035b\7\u00c9\2\2\u035b\u035c"+
		"\5^\60\2\u035c]\3\2\2\2\u035d\u035e\7\u0187\2\2\u035e\u0363\5`\61\2\u035f"+
		"\u0360\7\u018b\2\2\u0360\u0362\5`\61\2\u0361\u035f\3\2\2\2\u0362\u0365"+
		"\3\2\2\2\u0363\u0361\3\2\2\2\u0363\u0364\3\2\2\2\u0364\u0366\3\2\2\2\u0365"+
		"\u0363\3\2\2\2\u0366\u0367\7\u0188\2\2\u0367_\3\2\2\2\u0368\u0376\5\u0118"+
		"\u008d\2\u0369\u036a\5\u0132\u009a\2\u036a\u036b\7\u0187\2\2\u036b\u0370"+
		"\5b\62\2\u036c\u036d\7\u018b\2\2\u036d\u036f\5b\62\2\u036e\u036c\3\2\2"+
		"\2\u036f\u0372\3\2\2\2\u0370\u036e\3\2\2\2\u0370\u0371\3\2\2\2\u0371\u0373"+
		"\3\2\2\2\u0372\u0370\3\2\2\2\u0373\u0374\7\u0188\2\2\u0374\u0376\3\2\2"+
		"\2\u0375\u0368\3\2\2\2\u0375\u0369\3\2\2\2\u0376a\3\2\2\2\u0377\u037a"+
		"\5\u0118\u008d\2\u0378\u037a\5\u0160\u00b1\2\u0379\u0377\3\2\2\2\u0379"+
		"\u0378\3\2\2\2\u037ac\3\2\2\2\u037b\u037c\7\u011c\2\2\u037c\u0385\5\u0144"+
		"\u00a3\2\u037d\u0381\7\u0187\2\2\u037e\u0380\5f\64\2\u037f\u037e\3\2\2"+
		"\2\u0380\u0383\3\2\2\2\u0381\u037f\3\2\2\2\u0381\u0382\3\2\2\2\u0382\u0384"+
		"\3\2\2\2\u0383\u0381\3\2\2\2\u0384\u0386\7\u0188\2\2\u0385\u037d\3\2\2"+
		"\2\u0385\u0386\3\2\2\2\u0386e\3\2\2\2\u0387\u0388\t\17\2\2\u0388\u038c"+
		"\t\20\2\2\u0389\u038a\t\21\2\2\u038a\u038c\t\22\2\2\u038b\u0387\3\2\2"+
		"\2\u038b\u0389\3\2\2\2\u038cg\3\2\2\2\u038d\u038e\7\u00df\2\2\u038e\u038f"+
		"\7\17\2\2\u038f\u0390\5\u0146\u00a4\2\u0390\u0391\5\u0148\u00a5\2\u0391"+
		"i\3\2\2\2\u0392\u0393\7\u00df\2\2\u0393\u0395\7\34\2\2\u0394\u0396\5\u014a"+
		"\u00a6\2\u0395\u0394\3\2\2\2\u0395\u0396\3\2\2\2\u0396\u0397\3\2\2\2\u0397"+
		"\u0399\5\u0140\u00a1\2\u0398\u039a\5J&\2\u0399\u0398\3\2\2\2\u0399\u039a"+
		"\3\2\2\2\u039a\u039c\3\2\2\2\u039b\u039d\5\u0148\u00a5\2\u039c\u039b\3"+
		"\2\2\2\u039c\u039d\3\2\2\2\u039dk\3\2\2\2\u039e\u03a0\7\u00df\2\2\u039f"+
		"\u03a1\7\u0099\2\2\u03a0\u039f\3\2\2\2\u03a0\u03a1\3\2\2\2\u03a1\u03a2"+
		"\3\2\2\2\u03a2\u03a4\7\u00aa\2\2\u03a3\u03a5\5\u014a\u00a6\2\u03a4\u03a3"+
		"\3\2\2\2\u03a4\u03a5\3\2\2\2\u03a5\u03a6\3\2\2\2\u03a6\u03a8\5\u0146\u00a4"+
		"\2\u03a7\u03a9\58\35\2\u03a8\u03a7\3\2\2\2\u03a8\u03a9\3\2\2\2\u03a9\u03ab"+
		"\3\2\2\2\u03aa\u03ac\5J&\2\u03ab\u03aa\3\2\2\2\u03ab\u03ac\3\2\2\2\u03ac"+
		"\u03ad\3\2\2\2\u03ad\u03ae\7\u00bd\2\2\u03ae\u03af\5\u00a0Q\2\u03afm\3"+
		"\2\2\2\u03b0\u03b4\7\u00df\2\2\u03b1\u03b5\7\u0099\2\2\u03b2\u03b3\7\u0099"+
		"\2\2\u03b3\u03b5\7\u0159\2\2\u03b4\u03b1\3\2\2\2\u03b4\u03b2\3\2\2\2\u03b4"+
		"\u03b5\3\2\2\2\u03b5\u03b6\3\2\2\2\u03b6\u03b8\7\u0102\2\2\u03b7\u03b9"+
		"\5\u014a\u00a6\2\u03b8\u03b7\3\2\2\2\u03b8\u03b9\3\2\2\2\u03b9\u03ba\3"+
		"\2\2\2\u03ba\u03bb\5\u0110\u0089\2\u03bb\u03bc\7\u00bd\2\2\u03bc\u03bf"+
		"\5\u0132\u009a\2\u03bd\u03be\7\u0118\2\2\u03be\u03c0\t\23\2\2\u03bf\u03bd"+
		"\3\2\2\2\u03bf\u03c0\3\2\2\2\u03c0\u03c2\3\2\2\2\u03c1\u03c3\5p9\2\u03c2"+
		"\u03c1\3\2\2\2\u03c2\u03c3\3\2\2\2\u03c3o\3\2\2\2\u03c4\u03c5\7\u0170"+
		"\2\2\u03c5\u03c6\7C\2\2\u03c6\u03cc\5r:\2\u03c7\u03c8\7\u018b\2\2\u03c8"+
		"\u03c9\7C\2\2\u03c9\u03cb\5r:\2\u03ca\u03c7\3\2\2\2\u03cb\u03ce\3\2\2"+
		"\2\u03cc\u03ca\3\2\2\2\u03cc\u03cd\3\2\2\2\u03cdq\3\2\2\2\u03ce\u03cc"+
		"\3\2\2\2\u03cf\u03d0\7\u019c\2\2\u03d0s\3\2\2\2\u03d1\u03d2\7\u00b8\2"+
		"\2\u03d2\u03d4\7\u015c\2\2\u03d3\u03d5\5\u014c\u00a7\2\u03d4\u03d3\3\2"+
		"\2\2\u03d4\u03d5\3\2\2\2\u03d5\u03d6\3\2\2\2\u03d6\u03dc\5\u0144\u00a3"+
		"\2\u03d7\u03dd\5v<\2\u03d8\u03dd\5x=\2\u03d9\u03dd\5z>\2\u03da\u03dd\5"+
		"|?\2\u03db\u03dd\5~@\2\u03dc\u03d7\3\2\2\2\u03dc\u03d8\3\2\2\2\u03dc\u03d9"+
		"\3\2\2\2\u03dc\u03da\3\2\2\2\u03dc\u03db\3\2\2\2\u03ddu\3\2\2\2\u03de"+
		"\u03e0\7z\2\2\u03df\u03e1\5\u0146\u00a4\2\u03e0\u03df\3\2\2\2\u03e0\u03e1"+
		"\3\2\2\2\u03e1\u03e2\3\2\2\2\u03e2\u03e3\7\u0165\2\2\u03e3\u03e4\5\u0146"+
		"\u00a4\2\u03e4w\3\2\2\2\u03e5\u03e6\7\u014f\2\2\u03e6\u03e7\5\u014e\u00a8"+
		"\2\u03e7y\3\2\2\2\u03e8\u03e9\7\7\2\2\u03e9\u03ea\7\u00db\2\2\u03ea\u03eb"+
		"\5X-\2\u03eb\u03ec\7\u0142\2\2\u03ec\u03ed\7H\2\2\u03ed\u03ef\58\35\2"+
		"\u03ee\u03f0\5\u0080A\2\u03ef\u03ee\3\2\2\2\u03ef\u03f0\3\2\2\2\u03f0"+
		"{\3\2\2\2\u03f1\u03f2\7\u00f1\2\2\u03f2\u03f3\7\u00db\2\2\u03f3\u03f4"+
		"\5X-\2\u03f4}\3\2\2\2\u03f5\u03f6\7\7\2\2\u03f6\u03f7\7\u016a\2\2\u03f7"+
		"\u03f8\58\35\2\u03f8\177\3\2\2\2\u03f9\u03fa\7\u012e\2\2\u03fa\u03fb\7"+
		"%\2\2\u03fb\u0081\3\2\2\2\u03fc\u03fd\7\u00b8\2\2\u03fd\u03fe\7\u00aa"+
		"\2\2\u03fe\u0402\5\u0146\u00a4\2\u03ff\u0403\5v<\2\u0400\u0401\7\u00bd"+
		"\2\2\u0401\u0403\5\u00a0Q\2\u0402\u03ff\3\2\2\2\u0402\u0400\3\2\2\2\u0403"+
		"\u0083\3\2\2\2\u0404\u0405\7\u00b8\2\2\u0405\u0406\7\34\2\2\u0406\u0407"+
		"\5\u013e\u00a0\2\u0407\u0408\5x=\2\u0408\u0085\3\2\2\2\u0409\u040d\7\u00b8"+
		"\2\2\u040a\u040e\7\u0099\2\2\u040b\u040c\7\u0099\2\2\u040c\u040e\7\u0159"+
		"\2\2\u040d\u040a\3\2\2\2\u040d\u040b\3\2\2\2\u040d\u040e\3\2\2\2\u040e"+
		"\u040f\3\2\2\2\u040f\u0411\7\u0102\2\2\u0410\u0412\5\u014c\u00a7\2\u0411"+
		"\u0410\3\2\2\2\u0411\u0412\3\2\2\2\u0412\u0413\3\2\2\2\u0413\u0414\5\u0146"+
		"\u00a4\2\u0414\u0415\7\u00bd\2\2\u0415\u0418\5\u0132\u009a\2\u0416\u0417"+
		"\7\u0118\2\2\u0417\u0419\t\23\2\2\u0418\u0416\3\2\2\2\u0418\u0419\3\2"+
		"\2\2\u0419\u0087\3\2\2\2\u041a\u041b\7\u00f1\2\2\u041b\u041d\7\17\2\2"+
		"\u041c\u041e\5\u014c\u00a7\2\u041d\u041c\3\2\2\2\u041d\u041e\3\2\2\2\u041e"+
		"\u041f\3\2\2\2\u041f\u0420\5\u013c\u009f\2\u0420\u0089\3\2\2\2\u0421\u0423"+
		"\7\u00f1\2\2\u0422\u0424\7\u0099\2\2\u0423\u0422\3\2\2\2\u0423\u0424\3"+
		"\2\2\2\u0424\u0425\3\2\2\2\u0425\u0427\7\u015c\2\2\u0426\u0428\5\u014c"+
		"\u00a7\2\u0427\u0426\3\2\2\2\u0427\u0428\3\2\2\2\u0428\u0429\3\2\2\2\u0429"+
		"\u042a\5\u0144\u00a3\2\u042a\u008b\3\2\2\2\u042b\u042c\7\u00f1\2\2\u042c"+
		"\u042e\7\34\2\2\u042d\u042f\5\u014c\u00a7\2\u042e\u042d\3\2\2\2\u042e"+
		"\u042f\3\2\2\2\u042f\u0430\3\2\2\2\u0430\u0432\5\u013e\u00a0\2\u0431\u0433"+
		"\t\24\2\2\u0432\u0431\3\2\2\2\u0432\u0433\3\2\2\2\u0433\u008d\3\2\2\2"+
		"\u0434\u0436\7\u00f1\2\2\u0435\u0437\7\u0099\2\2\u0436\u0435\3\2\2\2\u0436"+
		"\u0437\3\2\2\2\u0437\u0438\3\2\2\2\u0438\u043a\7\u00aa\2\2\u0439\u043b"+
		"\5\u014c\u00a7\2\u043a\u0439\3\2\2\2\u043a\u043b\3\2\2\2\u043b\u043c\3"+
		"\2\2\2\u043c\u043d\5\u0146\u00a4\2\u043d\u008f\3\2\2\2\u043e\u0442\7\u00f1"+
		"\2\2\u043f\u0443\7\u0099\2\2\u0440\u0441\7\u0099\2\2\u0441\u0443\7\u0159"+
		"\2\2\u0442\u043f\3\2\2\2\u0442\u0440\3\2\2\2\u0442\u0443\3\2\2\2\u0443"+
		"\u0444\3\2\2\2\u0444\u0446\7\u0102\2\2\u0445\u0447\5\u014c\u00a7\2\u0446"+
		"\u0445\3\2\2\2\u0446\u0447\3\2\2\2\u0447\u0448\3\2\2\2\u0448\u0449\5\u0110"+
		"\u0089\2\u0449\u0091\3\2\2\2\u044a\u044c\7\u00f8\2\2\u044b\u044a\3\2\2"+
		"\2\u044b\u044c\3\2\2\2\u044c\u044d\3\2\2\2\u044d\u0452\5\u0094K\2\u044e"+
		"\u0452\5\u009cO\2\u044f\u0450\7\u00f8\2\2\u0450\u0452\5\u009eP\2\u0451"+
		"\u044b\3\2\2\2\u0451\u044e\3\2\2\2\u0451\u044f\3\2\2\2\u0452\u0093\3\2"+
		"\2\2\u0453\u0454\7\u010f\2\2\u0454\u0455\t\25\2\2\u0455\u045e\5\u0144"+
		"\u00a3\2\u0456\u0458\5\u0096L\2\u0457\u0456\3\2\2\2\u0457\u0458\3\2\2"+
		"\2\u0458\u045a\3\2\2\2\u0459\u045b\58\35\2\u045a\u0459\3\2\2\2\u045a\u045b"+
		"\3\2\2\2\u045b\u045c\3\2\2\2\u045c\u045f\5\u00a0Q\2\u045d\u045f\5\u0098"+
		"M\2\u045e\u0457\3\2\2\2\u045e\u045d\3\2\2\2\u045f\u0095\3\2\2\2\u0460"+
		"\u0461\7\u013b\2\2\u0461\u0462\5\u014e\u00a8\2\u0462\u0097\3\2\2\2\u0463"+
		"\u0464\7\u0172\2\2\u0464\u0469\5\u009aN\2\u0465\u0466\7\u018b\2\2\u0466"+
		"\u0468\5\u009aN\2\u0467\u0465\3\2\2\2\u0468\u046b\3\2\2\2\u0469\u0467"+
		"\3\2\2\2\u0469\u046a\3\2\2\2\u046a\u0099\3\2\2\2\u046b\u0469\3\2\2\2\u046c"+
		"\u046d\7\u0187\2\2\u046d\u0472\5\u0160\u00b1\2\u046e\u046f\7\u018b\2\2"+
		"\u046f\u0471\5\u0160\u00b1\2\u0470\u046e\3\2\2\2\u0471\u0474\3\2\2\2\u0472"+
		"\u0470\3\2\2\2\u0472\u0473\3\2\2\2\u0473\u0475\3\2\2\2\u0474\u0472\3\2"+
		"\2\2\u0475\u0476\7\u0188\2\2\u0476\u009b\3\2\2\2\u0477\u0478\7\u00c1\2"+
		"\2\u0478\u0479\7\u0093\2\2\u0479\u047a\7\u014f\2\2\u047a\u047e\7\u018c"+
		"\2\2\u047b\u047c\5\u0094K\2\u047c\u047d\7\u018c\2\2\u047d\u047f\3\2\2"+
		"\2\u047e\u047b\3\2\2\2\u047f\u0480\3\2\2\2\u0480\u047e\3\2\2\2\u0480\u0481"+
		"\3\2\2\2\u0481\u0482\3\2\2\2\u0482\u0483\7\u00f4\2\2\u0483\u009d\3\2\2"+
		"\2\u0484\u0485\7\u0093\2\2\u0485\u0486\7\u014f\2\2\u0486\u048a\7\u00c1"+
		"\2\2\u0487\u0488\5\u0094K\2\u0488\u0489\7\u018c\2\2\u0489\u048b\3\2\2"+
		"\2\u048a\u0487\3\2\2\2\u048b\u048c\3\2\2\2\u048c\u048a\3\2\2\2\u048c\u048d"+
		"\3\2\2\2\u048d\u048e\3\2\2\2\u048e\u048f\7\u00f4\2\2\u048f\u009f\3\2\2"+
		"\2\u0490\u0491\bQ\1\2\u0491\u04a8\5\u00a2R\2\u0492\u0493\5\u00a4S\2\u0493"+
		"\u0494\5\u00a0Q\7\u0494\u04a8\3\2\2\2\u0495\u0496\7\u0187\2\2\u0496\u0497"+
		"\5\u00a0Q\2\u0497\u0498\7\u0188\2\2\u0498\u04a8\3\2\2\2\u0499\u049b\5"+
		"\u00acW\2\u049a\u049c\5\u00e8u\2\u049b\u049a\3\2\2\2\u049b\u049c\3\2\2"+
		"\2\u049c\u049e\3\2\2\2\u049d\u049f\5\u00ecw\2\u049e\u049d\3\2\2\2\u049e"+
		"\u049f\3\2\2\2\u049f\u04a8\3\2\2\2\u04a0\u04a2\5\u00aaV\2\u04a1\u04a3"+
		"\5\u00e8u\2\u04a2\u04a1\3\2\2\2\u04a2\u04a3\3\2\2\2\u04a3\u04a5\3\2\2"+
		"\2\u04a4\u04a6\5\u00ecw\2\u04a5\u04a4\3\2\2\2\u04a5\u04a6\3\2\2\2\u04a6"+
		"\u04a8\3\2\2\2\u04a7\u0490\3\2\2\2\u04a7\u0492\3\2\2\2\u04a7\u0495\3\2"+
		"\2\2\u04a7\u0499\3\2\2\2\u04a7\u04a0\3\2\2\2\u04a8\u04b7\3\2\2\2\u04a9"+
		"\u04aa\f\5\2\2\u04aa\u04ac\t\26\2\2\u04ab\u04ad\7\u00b6\2\2\u04ac\u04ab"+
		"\3\2\2\2\u04ac\u04ad\3\2\2\2\u04ad\u04ae\3\2\2\2\u04ae\u04b0\5\u00a0Q"+
		"\2\u04af\u04b1\5\u00e8u\2\u04b0\u04af\3\2\2\2\u04b0\u04b1\3\2\2\2\u04b1"+
		"\u04b3\3\2\2\2\u04b2\u04b4\5\u00ecw\2\u04b3\u04b2\3\2\2\2\u04b3\u04b4"+
		"\3\2\2\2\u04b4\u04b6\3\2\2\2\u04b5\u04a9\3\2\2\2\u04b6\u04b9\3\2\2\2\u04b7"+
		"\u04b5\3\2\2\2\u04b7\u04b8\3\2\2\2\u04b8\u00a1\3\2\2\2\u04b9\u04b7\3\2"+
		"\2\2\u04ba\u04bb\7\u0172\2\2\u04bb\u04c0\5\u0104\u0083\2\u04bc\u04bd\7"+
		"\u018b\2\2\u04bd\u04bf\5\u0104\u0083\2\u04be\u04bc\3\2\2\2\u04bf\u04c2"+
		"\3\2\2\2\u04c0\u04be\3\2\2\2\u04c0\u04c1\3\2\2\2\u04c1\u00a3\3\2\2\2\u04c2"+
		"\u04c0\3\2\2\2\u04c3\u04c4\7\u0178\2\2\u04c4\u04c9\5\u00a6T\2\u04c5\u04c6"+
		"\7\u018b\2\2\u04c6\u04c8\5\u00a6T\2\u04c7\u04c5\3\2\2\2\u04c8\u04cb\3"+
		"\2\2\2\u04c9\u04c7\3\2\2\2\u04c9\u04ca\3\2\2\2\u04ca\u00a5\3\2\2\2\u04cb"+
		"\u04c9\3\2\2\2\u04cc\u04d8\5\u00a8U\2\u04cd\u04ce\7\u0187\2\2\u04ce\u04d3"+
		"\5\66\34\2\u04cf\u04d0\7\u018b\2\2\u04d0\u04d2\5\66\34\2\u04d1\u04cf\3"+
		"\2\2\2\u04d2\u04d5\3\2\2\2\u04d3\u04d1\3\2\2\2\u04d3\u04d4\3\2\2\2\u04d4"+
		"\u04d6\3\2\2\2\u04d5\u04d3\3\2\2\2\u04d6\u04d7\7\u0188\2\2\u04d7\u04d9"+
		"\3\2\2\2\u04d8\u04cd\3\2\2\2\u04d8\u04d9\3\2\2\2\u04d9\u04da\3\2\2\2\u04da"+
		"\u04db\7\u00bd\2\2\u04db\u04dc\7\u0187\2\2\u04dc\u04dd\5\u00a0Q\2\u04dd"+
		"\u04de\7\u0188\2\2\u04de\u00a7\3\2\2\2\u04df\u04e0\5\u0132\u009a\2\u04e0"+
		"\u00a9\3\2\2\2\u04e1\u04e2\5\u00acW\2\u04e2\u04e4\5\u00b2Z\2\u04e3\u04e5"+
		"\5\u00ceh\2\u04e4\u04e3\3\2\2\2\u04e4\u04e5\3\2\2\2\u04e5\u04e7\3\2\2"+
		"\2\u04e6\u04e8\5\u00d0i\2\u04e7\u04e6\3\2\2\2\u04e7\u04e8\3\2\2\2\u04e8"+
		"\u04ea\3\2\2\2\u04e9\u04eb\5\u00dep\2\u04ea\u04e9\3\2\2\2\u04ea\u04eb"+
		"\3\2\2\2\u04eb\u04ed\3\2\2\2\u04ec\u04ee\5\u00e0q\2\u04ed\u04ec\3\2\2"+
		"\2\u04ed\u04ee\3\2\2\2\u04ee\u04f4\3\2\2\2\u04ef\u04f0\5\u00acW\2\u04f0"+
		"\u04f1\5\u00b2Z\2\u04f1\u04f2\5\u00e6t\2\u04f2\u04f4\3\2\2\2\u04f3\u04e1"+
		"\3\2\2\2\u04f3\u04ef\3\2\2\2\u04f4\u00ab\3\2\2\2\u04f5\u04f7\7\u014e\2"+
		"\2\u04f6\u04f8\5\u016a\u00b6\2\u04f7\u04f6\3\2\2\2\u04f7\u04f8\3\2\2\2"+
		"\u04f8\u0502\3\2\2\2\u04f9\u0503\7\u0192\2\2\u04fa\u04ff\5\u00aeX\2\u04fb"+
		"\u04fc\7\u018b\2\2\u04fc\u04fe\5\u00aeX\2\u04fd\u04fb\3\2\2\2\u04fe\u0501"+
		"\3\2\2\2\u04ff\u04fd\3\2\2\2\u04ff\u0500\3\2\2\2\u0500\u0503\3\2\2\2\u0501"+
		"\u04ff\3\2\2\2\u0502\u04f9\3\2\2\2\u0502\u04fa\3\2\2\2\u0503\u00ad\3\2"+
		"\2\2\u0504\u050d\5\u00b0Y\2\u0505\u050a\5\u0104\u0083\2\u0506\u0508\7"+
		"\u00bd\2\2\u0507\u0506\3\2\2\2\u0507\u0508\3\2\2\2\u0508\u0509\3\2\2\2"+
		"\u0509\u050b\5\u0104\u0083\2\u050a\u0507\3\2\2\2\u050a\u050b\3\2\2\2\u050b"+
		"\u050d\3\2\2\2\u050c\u0504\3\2\2\2\u050c\u0505\3\2\2\2\u050d\u00af\3\2"+
		"\2\2\u050e\u050f\5\u010e\u0088\2\u050f\u0510\7\u0139\2\2\u0510\u0511\5"+
		"\u00e4s\2\u0511\u0512\7\u00bd\2\2\u0512\u0513\5\u0132\u009a\2\u0513\u051b"+
		"\3\2\2\2\u0514\u0515\5\u010e\u0088\2\u0515\u0516\7\u0139\2\2\u0516\u0517"+
		"\5\u012a\u0096\2\u0517\u0518\7\u00bd\2\2\u0518\u0519\5\u0132\u009a\2\u0519"+
		"\u051b\3\2\2\2\u051a\u050e\3\2\2\2\u051a\u0514\3\2\2\2\u051b\u00b1\3\2"+
		"\2\2\u051c\u051d\7\u0100\2\2\u051d\u051e\5\u00b4[\2\u051e\u00b3\3\2\2"+
		"\2\u051f\u0520\b[\1\2\u0520\u0525\5\u00b6\\\2\u0521\u0522\7\u018b\2\2"+
		"\u0522\u0524\5\u00b6\\\2\u0523\u0521\3\2\2\2\u0524\u0527\3\2\2\2\u0525"+
		"\u0523\3\2\2\2\u0525\u0526\3\2\2\2\u0526\u052b\3\2\2\2\u0527\u0525\3\2"+
		"\2\2\u0528\u052b\5\u00be`\2\u0529\u052b\5\u00c0a\2\u052a\u051f\3\2\2\2"+
		"\u052a\u0528\3\2\2\2\u052a\u0529\3\2\2\2\u052b\u0541\3\2\2\2\u052c\u052d"+
		"\f\5\2\2\u052d\u052e\7\u00e0\2\2\u052e\u052f\7\u0116\2\2\u052f\u0540\5"+
		"\u00b4[\6\u0530\u0532\f\6\2\2\u0531\u0533\7\u012a\2\2\u0532\u0531\3\2"+
		"\2\2\u0532\u0533\3\2\2\2\u0533\u0535\3\2\2\2\u0534\u0536\t\27\2\2\u0535"+
		"\u0534\3\2\2\2\u0535\u0536\3\2\2\2\u0536\u0538\3\2\2\2\u0537\u0539\7\u0138"+
		"\2\2\u0538\u0537\3\2\2\2\u0538\u0539\3\2\2\2\u0539\u053a\3\2\2\2\u053a"+
		"\u053b\7\u0116\2\2\u053b\u053d\5\u00b4[\2\u053c\u053e\5\u00ccg\2\u053d"+
		"\u053c\3\2\2\2\u053d\u053e\3\2\2\2\u053e\u0540\3\2\2\2\u053f\u052c\3\2"+
		"\2\2\u053f\u0530\3\2\2\2\u0540\u0543\3\2\2\2\u0541\u053f\3\2\2\2\u0541"+
		"\u0542\3\2\2\2\u0542\u00b5\3\2\2\2\u0543\u0541\3\2\2\2\u0544\u0546\5\u00b8"+
		"]\2\u0545\u0547\5\u0128\u0095\2\u0546\u0545\3\2\2\2\u0546\u0547\3\2\2"+
		"\2\u0547\u00b7\3\2\2\2\u0548\u054a\7\u015c\2\2\u0549\u0548\3\2\2\2\u0549"+
		"\u054a\3\2\2\2\u054a\u054b\3\2\2\2\u054b\u054d\5\u0144\u00a3\2\u054c\u054e"+
		"\5\u00ba^\2\u054d\u054c\3\2\2\2\u054d\u054e\3\2\2\2\u054e\u0553\3\2\2"+
		"\2\u054f\u0551\7\u00bd\2\2\u0550\u054f\3\2\2\2\u0550\u0551\3\2\2\2\u0551"+
		"\u0552\3\2\2\2\u0552\u0554\5\u0116\u008c\2\u0553\u0550\3\2\2\2\u0553\u0554"+
		"\3\2\2\2\u0554\u0572\3\2\2\2\u0555\u0556\7\u0119\2\2\u0556\u0557\7\u015c"+
		"\2\2\u0557\u0558\7\u0187\2\2\u0558\u0559\5\u0110\u0089\2\u0559\u055a\7"+
		"\u0187\2\2\u055a\u055f\5\u0112\u008a\2\u055b\u055c\7\u018b\2\2\u055c\u055e"+
		"\5\u0112\u008a\2\u055d\u055b\3\2\2\2\u055e\u0561\3\2\2\2\u055f\u055d\3"+
		"\2\2\2\u055f\u0560\3\2\2\2\u0560\u0562\3\2\2\2\u0561\u055f\3\2\2\2\u0562"+
		"\u0563\7\u0188\2\2\u0563\u0564\7\u0188\2\2\u0564\u0572\3\2\2\2\u0565\u0567"+
		"\7\u0119\2\2\u0566\u0565\3\2\2\2\u0566\u0567\3\2\2\2\u0567\u0568\3\2\2"+
		"\2\u0568\u0569\7\u0187\2\2\u0569\u056a\5\u00a0Q\2\u056a\u056b\7\u0188"+
		"\2\2\u056b\u0572\3\2\2\2\u056c\u056d\7\u016c\2\2\u056d\u056e\7\u0187\2"+
		"\2\u056e\u056f\5\u0104\u0083\2\u056f\u0570\7\u0188\2\2\u0570\u0572\3\2"+
		"\2\2\u0571\u0549\3\2\2\2\u0571\u0555\3\2\2\2\u0571\u0566\3\2\2\2\u0571"+
		"\u056c\3\2\2\2\u0572\u00b9\3\2\2\2\u0573\u0574\7\u00ff\2\2\u0574\u0575"+
		"\7\u015a\2\2\u0575\u0576\7\u00bd\2\2\u0576\u0577\7\u0131\2\2\u0577\u0578"+
		"\5\u00bc_\2\u0578\u00bb\3\2\2\2\u0579\u057a\5\u0104\u0083\2\u057a\u00bd"+
		"\3\2\2\2\u057b\u057c\7\u0187\2\2\u057c\u057d\5\u0098M\2\u057d\u057e\7"+
		"\u0188\2\2\u057e\u057f\5\u0128\u0095\2\u057f\u00bf\3\2\2\2\u0580\u0581"+
		"\7\u015c\2\2\u0581\u0582\7\u0187\2\2\u0582\u0583\5\u00c2b\2\u0583\u0584"+
		"\7\u0188\2\2\u0584\u00c1\3\2\2\2\u0585\u0586\5\u00c4c\2\u0586\u0587\7"+
		"\u0187\2\2\u0587\u058c\5\u00c6d\2\u0588\u0589\7\u018b\2\2\u0589\u058b"+
		"\5\u00c6d\2\u058a\u0588\3\2\2\2\u058b\u058e\3\2\2\2\u058c\u058a\3\2\2"+
		"\2\u058c\u058d\3\2\2\2\u058d\u058f\3\2\2\2\u058e\u058c\3\2\2\2\u058f\u0590"+
		"\7\u0188\2\2\u0590\u00c3\3\2\2\2\u0591\u0592\t\30\2\2\u0592\u00c5\3\2"+
		"\2\2\u0593\u0594\7\u015c\2\2\u0594\u05a3\5\u00dco\2\u0595\u05a3\5\u00ca"+
		"f\2\u0596\u05a3\5\u011a\u008e\2\u0597\u0598\7\33\2\2\u0598\u0599\7\u019b"+
		"\2\2\u0599\u059a\7\u015c\2\2\u059a\u05a3\5\u00dco\2\u059b\u059c\7\u009a"+
		"\2\2\u059c\u059d\7\u019b\2\2\u059d\u05a3\5\u00caf\2\u059e\u059f\5\u00c8"+
		"e\2\u059f\u05a0\7\u019b\2\2\u05a0\u05a1\5\u011a\u008e\2\u05a1\u05a3\3"+
		"\2\2\2\u05a2\u0593\3\2\2\2\u05a2\u0595\3\2\2\2\u05a2\u0596\3\2\2\2\u05a2"+
		"\u0597\3\2\2\2\u05a2\u059b\3\2\2\2\u05a2\u059e\3\2\2\2\u05a3\u00c7\3\2"+
		"\2\2\u05a4\u05a5\t\31\2\2\u05a5\u00c9\3\2\2\2\u05a6\u05a7\7\"\2\2\u05a7"+
		"\u05a8\7\u0187\2\2\u05a8\u05a9\5\u0146\u00a4\2\u05a9\u05aa\7\u0188\2\2"+
		"\u05aa\u00cb\3\2\2\2\u05ab\u05ac\7\u0133\2\2\u05ac\u05ba\5\u0106\u0084"+
		"\2\u05ad\u05ae\7\u0170\2\2\u05ae\u05af\7\u0187\2\2\u05af\u05b4\5\u0146"+
		"\u00a4\2\u05b0\u05b1\7\u018b\2\2\u05b1\u05b3\5\u0146\u00a4\2\u05b2\u05b0"+
		"\3\2\2\2\u05b3\u05b6\3\2\2\2\u05b4\u05b2\3\2\2\2\u05b4\u05b5\3\2\2\2\u05b5"+
		"\u05b7\3\2\2\2\u05b6\u05b4\3\2\2\2\u05b7\u05b8\7\u0188\2\2\u05b8\u05ba"+
		"\3\2\2\2\u05b9\u05ab\3\2\2\2\u05b9\u05ad\3\2\2\2\u05ba\u00cd\3\2\2\2\u05bb"+
		"\u05bc\7\u0176\2\2\u05bc\u05bd\5\u0106\u0084\2\u05bd\u00cf\3\2\2\2\u05be"+
		"\u05bf\7\u0105\2\2\u05bf\u05c0\7\u00c9\2\2\u05c0\u05c5\5\u00d2j\2\u05c1"+
		"\u05c2\7\u018b\2\2\u05c2\u05c4\5\u00d2j\2\u05c3\u05c1\3\2\2\2\u05c4\u05c7"+
		"\3\2\2\2\u05c5\u05c3\3\2\2\2\u05c5\u05c6\3\2\2\2\u05c6\u00d1\3\2\2\2\u05c7"+
		"\u05c5\3\2\2\2\u05c8\u05f0\5\u0104\u0083\2\u05c9\u05f0\5\u00d8m\2\u05ca"+
		"\u05cb\7\u0187\2\2\u05cb\u05f0\7\u0188\2\2\u05cc\u05cd\7\u0187\2\2\u05cd"+
		"\u05d2\5\u0104\u0083\2\u05ce\u05cf\7\u018b\2\2\u05cf\u05d1\5\u0104\u0083"+
		"\2\u05d0\u05ce\3\2\2\2\u05d1\u05d4\3\2\2\2\u05d2\u05d0\3\2\2\2\u05d2\u05d3"+
		"\3\2\2\2\u05d3\u05d5\3\2\2\2\u05d4\u05d2\3\2\2\2\u05d5\u05d6\7\u0188\2"+
		"\2\u05d6\u05f0\3\2\2\2\u05d7\u05d8\5\u00d6l\2\u05d8\u05d9\7\u0187\2\2"+
		"\u05d9\u05de\5\u0104\u0083\2\u05da\u05db\7\u018b\2\2\u05db\u05dd\5\u0104"+
		"\u0083\2\u05dc\u05da\3\2\2\2\u05dd\u05e0\3\2\2\2\u05de\u05dc\3\2\2\2\u05de"+
		"\u05df\3\2\2\2\u05df\u05e1\3\2\2\2\u05e0\u05de\3\2\2\2\u05e1\u05e2\7\u0188"+
		"\2\2\u05e2\u05f0\3\2\2\2\u05e3\u05e4\5\u00d4k\2\u05e4\u05e5\7\u0187\2"+
		"\2\u05e5\u05ea\5\u00d2j\2\u05e6\u05e7\7\u018b\2\2\u05e7\u05e9\5\u00d2"+
		"j\2\u05e8\u05e6\3\2\2\2\u05e9\u05ec\3\2\2\2\u05ea\u05e8\3\2\2\2\u05ea"+
		"\u05eb\3\2\2\2\u05eb\u05ed\3\2\2\2\u05ec\u05ea\3\2\2\2\u05ed\u05ee\7\u0188"+
		"\2\2\u05ee\u05f0\3\2\2\2\u05ef\u05c8\3\2\2\2\u05ef\u05c9\3\2\2\2\u05ef"+
		"\u05ca\3\2\2\2\u05ef\u05cc\3\2\2\2\u05ef\u05d7\3\2\2\2\u05ef\u05e3\3\2"+
		"\2\2\u05f0\u00d3\3\2\2\2\u05f1\u05f2\7\u0106\2\2\u05f2\u05f3\7\u008c\2"+
		"\2\u05f3\u00d5\3\2\2\2\u05f4\u05f5\t\32\2\2\u05f5\u00d7\3\2\2\2\u05f6"+
		"\u05f7\5\u00dan\2\u05f7\u05f8\7\u0187\2\2\u05f8\u05f9\5\u00dco\2\u05f9"+
		"\u05fa\7\u018b\2\2\u05fa\u05fb\5\u011a\u008e\2\u05fb\u05fc\7\u0188\2\2"+
		"\u05fc\u00d9\3\2\2\2\u05fd\u05fe\t\33\2\2\u05fe\u00db\3\2\2\2\u05ff\u0600"+
		"\5\u0146\u00a4\2\u0600\u00dd\3\2\2\2\u0601\u0602\7\u0108\2\2\u0602\u0603"+
		"\5\u0106\u0084\2\u0603\u00df\3\2\2\2\u0604\u0605\7\u0177\2\2\u0605\u060a"+
		"\5\u00e2r\2\u0606\u0607\7\u018b\2\2\u0607\u0609\5\u00e2r\2\u0608\u0606"+
		"\3\2\2\2\u0609\u060c\3\2\2\2\u060a\u0608\3\2\2\2\u060a\u060b\3\2\2\2\u060b"+
		"\u00e1\3\2\2\2\u060c\u060a\3\2\2\2\u060d\u060e\5\u012a\u0096\2\u060e\u060f"+
		"\7\u00bd\2\2\u060f\u0610\5\u00e4s\2\u0610\u00e3\3\2\2\2\u0611\u0613\5"+
		"\u012a\u0096\2\u0612\u0611\3\2\2\2\u0612\u0613\3\2\2\2\u0613\u0614\3\2"+
		"\2\2\u0614\u0616\7\u0187\2\2\u0615\u0617\5\u00eex\2\u0616\u0615\3\2\2"+
		"\2\u0616\u0617\3\2\2\2\u0617\u0619\3\2\2\2\u0618\u061a\5\u00e8u\2\u0619"+
		"\u0618\3\2\2\2\u0619\u061a\3\2\2\2\u061a\u061c\3\2\2\2\u061b\u061d\5\u00fe"+
		"\u0080\2\u061c\u061b\3\2\2\2\u061c\u061d\3\2\2\2\u061d\u061e\3\2\2\2\u061e"+
		"\u061f\7\u0188\2\2\u061f\u00e5\3\2\2\2\u0620\u0621\7\u0120\2\2\u0621\u0623"+
		"\7\u0187\2\2\u0622\u0624\5\u00eex\2\u0623\u0622\3\2\2\2\u0623\u0624\3"+
		"\2\2\2\u0624\u0626\3\2\2\2\u0625\u0627\5\u00e8u\2\u0626\u0625\3\2\2\2"+
		"\u0626\u0627\3\2\2\2\u0627\u0629\3\2\2\2\u0628\u062a\5\u00f2z\2\u0629"+
		"\u0628\3\2\2\2\u0629\u062a\3\2\2\2\u062a\u062c\3\2\2\2\u062b\u062d\5\u00f8"+
		"}\2\u062c\u062b\3\2\2\2\u062c\u062d\3\2\2\2\u062d\u062f\3\2\2\2\u062e"+
		"\u0630\5\u00fa~\2\u062f\u062e\3\2\2\2\u062f\u0630\3\2\2\2\u0630\u0632"+
		"\3\2\2\2\u0631\u0633\5\u00f4{\2\u0632\u0631\3\2\2\2\u0632\u0633\3\2\2"+
		"\2\u0633\u0634\3\2\2\2\u0634\u0635\5\u00fc\177\2\u0635\u063a\7\u0188\2"+
		"\2\u0636\u0638\7\u00bd\2\2\u0637\u0636\3\2\2\2\u0637\u0638\3\2\2\2\u0638"+
		"\u0639\3\2\2\2\u0639\u063b\5\u0132\u009a\2\u063a\u0637\3\2\2\2\u063a\u063b"+
		"\3\2\2\2\u063b\u00e7\3\2\2\2\u063c\u063d\7\u0136\2\2\u063d\u063e\7\u00c9"+
		"\2\2\u063e\u0643\5\u00eav\2\u063f\u0640\7\u018b\2\2\u0640\u0642\5\u00ea"+
		"v\2\u0641\u063f\3\2\2\2\u0642\u0645\3\2\2\2\u0643\u0641\3\2\2\2\u0643"+
		"\u0644\3\2\2\2\u0644\u00e9\3\2\2\2\u0645\u0643\3\2\2\2\u0646\u0648\5\u0104"+
		"\u0083\2\u0647\u0649\t\34\2\2\u0648\u0647\3\2\2\2\u0648\u0649\3\2\2\2"+
		"\u0649\u064c\3\2\2\2\u064a\u064b\7Z\2\2\u064b\u064d\t\35\2\2\u064c\u064a"+
		"\3\2\2\2\u064c\u064d\3\2\2\2\u064d\u00eb\3\2\2\2\u064e\u0651\7\u011d\2"+
		"\2\u064f\u0652\7\u00b6\2\2\u0650\u0652\5\u0104\u0083\2\u0651\u064f\3\2"+
		"\2\2\u0651\u0650\3\2\2\2\u0652\u00ed\3\2\2\2\u0653\u0654\7\u013b\2\2\u0654"+
		"\u0655\7\u00c9\2\2\u0655\u065a\5\u0104\u0083\2\u0656\u0657\7\u018b\2\2"+
		"\u0657\u0659\5\u0104\u0083\2\u0658\u0656\3\2\2\2\u0659\u065c\3\2\2\2\u065a"+
		"\u0658\3\2\2\2\u065a\u065b\3\2\2\2\u065b\u00ef\3\2\2\2\u065c\u065a\3\2"+
		"\2\2\u065d\u066e\7\u0192\2\2\u065e\u066e\7\u0195\2\2\u065f\u066e\7\u019a"+
		"\2\2\u0660\u0661\7\u0189\2\2\u0661\u0662\7\u019d\2\2\u0662\u0663\7\u018b"+
		"\2\2\u0663\u0664\7\u019d\2\2\u0664\u066e\7\u018a\2\2\u0665\u0666\7\u0189"+
		"\2\2\u0666\u0667\7\u019d\2\2\u0667\u0668\7\u018b\2\2\u0668\u066e\7\u018a"+
		"\2\2\u0669\u066a\7\u0189\2\2\u066a\u066b\7\u018b\2\2\u066b\u066c\7\u019d"+
		"\2\2\u066c\u066e\7\u018a\2\2\u066d\u065d\3\2\2\2\u066d\u065e\3\2\2\2\u066d"+
		"\u065f\3\2\2\2\u066d\u0660\3\2\2\2\u066d\u0665\3\2\2\2\u066d\u0669\3\2"+
		"\2\2\u066e\u00f1\3\2\2\2\u066f\u0670\7\u0121\2\2\u0670\u0675\5\u00aeX"+
		"\2\u0671\u0672\7\u018b\2\2\u0672\u0674\5\u00aeX\2\u0673\u0671\3\2\2\2"+
		"\u0674\u0677\3\2\2\2\u0675\u0673\3\2\2\2\u0675\u0676\3\2\2\2\u0676\u00f3"+
		"\3\2\2\2\u0677\u0675\3\2\2\2\u0678\u0679\7\u013c\2\2\u0679\u067b\7\u0187"+
		"\2\2\u067a\u067c\5\u00f6|\2\u067b\u067a\3\2\2\2\u067c\u067d\3\2\2\2\u067d"+
		"\u067b\3\2\2\2\u067d\u067e\3\2\2\2\u067e\u067f\3\2\2\2\u067f\u0681\7\u0188"+
		"\2\2\u0680\u0682\5\u0102\u0082\2\u0681\u0680\3\2\2\2\u0681\u0682\3\2\2"+
		"\2\u0682\u00f5\3\2\2\2\u0683\u0685\5\u0136\u009c\2\u0684\u0686\5\u00f0"+
		"y\2\u0685\u0684\3\2\2\2\u0685\u0686\3\2\2\2\u0686\u00f7\3\2\2\2\u0687"+
		"\u0688\7\u00b6\2\2\u0688\u0689\7\u014c\2\2\u0689\u068a\7\u013d\2\2\u068a"+
		"\u0690\7\u011f\2\2\u068b\u068c\7\u0134\2\2\u068c\u068d\7\u014b\2\2\u068d"+
		"\u068e\7\u013d\2\2\u068e\u0690\7\u011f\2\2\u068f\u0687\3\2\2\2\u068f\u068b"+
		"\3\2\2\2\u0690\u00f9\3\2\2\2\u0691\u0692\7\t\2\2\u0692\u0693\7\u011f\2"+
		"\2\u0693\u0694\7\u0152\2\2\u0694\u0695\7e\2\2\u0695\u0696\7L\2\2\u0696"+
		"\u06aa\7\u014b\2\2\u0697\u0698\7\t\2\2\u0698\u0699\7\u011f\2\2\u0699\u069a"+
		"\7\u0152\2\2\u069a\u069b\7\u0165\2\2\u069b\u069c\7\u012b\2\2\u069c\u06aa"+
		"\7\u014b\2\2\u069d\u069e\7\t\2\2\u069e\u069f\7\u011f\2\2\u069f\u06a0\7"+
		"\u0152\2\2\u06a0\u06a1\7\u0165\2\2\u06a1\u06a2\7L\2\2\u06a2\u06aa\5\u0136"+
		"\u009c\2\u06a3\u06a4\7\t\2\2\u06a4\u06a5\7\u011f\2\2\u06a5\u06a6\7\u0152"+
		"\2\2\u06a6\u06a7\7\u0165\2\2\u06a7\u06a8\7\60\2\2\u06a8\u06aa\5\u0136"+
		"\u009c\2\u06a9\u0691\3\2\2\2\u06a9\u0697\3\2\2\2\u06a9\u069d\3\2\2\2\u06a9"+
		"\u06a3\3\2\2\2\u06aa\u00fb\3\2\2\2\u06ab\u06ac\7\u00ec\2\2\u06ac\u06b1"+
		"\5\u00aeX\2\u06ad\u06ae\7\u018b\2\2\u06ae\u06b0\5\u00aeX\2\u06af\u06ad"+
		"\3\2\2\2\u06b0\u06b3\3\2\2\2\u06b1\u06af\3\2\2\2\u06b1\u06b2\3\2\2\2\u06b2"+
		"\u00fd\3\2\2\2\u06b3\u06b1\3\2\2\2\u06b4\u06b5\7\u0143\2\2\u06b5\u06b6"+
		"\7\u00c2\2\2\u06b6\u06b7\5\u011a\u008e\2\u06b7\u06b8\5\u0100\u0081\2\u06b8"+
		"\u06be\3\2\2\2\u06b9\u06ba\7\u014c\2\2\u06ba\u06bb\7\u00c2\2\2\u06bb\u06bc"+
		"\7\u019d\2\2\u06bc\u06be\5\u0100\u0081\2\u06bd\u06b4\3\2\2\2\u06bd\u06b9"+
		"\3\2\2\2\u06be\u00ff\3\2\2\2\u06bf\u06c0\7i\2\2\u06c0\u06c1\7\u00b9\2"+
		"\2\u06c1\u06c2\7\u00e2\2\2\u06c2\u06c3\7\u014b\2\2\u06c3\u0101\3\2\2\2"+
		"\u06c4\u06c5\7\u0179\2\2\u06c5\u06c6\5\u011a\u008e\2\u06c6\u0103\3\2\2"+
		"\2\u06c7\u06c8\5\u0106\u0084\2\u06c8\u0105\3\2\2\2\u06c9\u06ca\b\u0084"+
		"\1\2\u06ca\u06cb\7\u012e\2\2\u06cb\u06d6\5\u0106\u0084\b\u06cc\u06cd\7"+
		"\u00f9\2\2\u06cd\u06ce\7\u0187\2\2\u06ce\u06cf\5\u00a0Q\2\u06cf\u06d0"+
		"\7\u0188\2\2\u06d0\u06d6\3\2\2\2\u06d1\u06d3\5\u010c\u0087\2\u06d2\u06d4"+
		"\5\u0108\u0085\2\u06d3\u06d2\3\2\2\2\u06d3\u06d4\3\2\2\2\u06d4\u06d6\3"+
		"\2\2\2\u06d5\u06c9\3\2\2\2\u06d5\u06cc\3\2\2\2\u06d5\u06d1\3\2\2\2\u06d6"+
		"\u06e5\3\2\2\2\u06d7\u06d8\f\5\2\2\u06d8\u06d9\7\u00b9\2\2\u06d9\u06e4"+
		"\5\u0106\u0084\6\u06da\u06db\f\4\2\2\u06db\u06dc\7\u0135\2\2\u06dc\u06e4"+
		"\5\u0106\u0084\5\u06dd\u06de\f\3\2\2\u06de\u06e0\7\u0115\2\2\u06df\u06e1"+
		"\7\u012e\2\2\u06e0\u06df\3\2\2\2\u06e0\u06e1\3\2\2\2\u06e1\u06e2\3\2\2"+
		"\2\u06e2\u06e4\t\36\2\2\u06e3\u06d7\3\2\2\2\u06e3\u06da\3\2\2\2\u06e3"+
		"\u06dd\3\2\2\2\u06e4\u06e7\3\2\2\2\u06e5\u06e3\3\2\2\2\u06e5\u06e6\3\2"+
		"\2\2\u06e6\u0107\3\2\2\2\u06e7\u06e5\3\2\2\2\u06e8\u06ea\7\u012e\2\2\u06e9"+
		"\u06e8\3\2\2\2\u06e9\u06ea\3\2\2\2\u06ea\u06eb\3\2\2\2\u06eb\u06ed\7\u00c2"+
		"\2\2\u06ec\u06ee\t\37\2\2\u06ed\u06ec\3\2\2\2\u06ed\u06ee\3\2\2\2\u06ee"+
		"\u06ef\3\2\2\2\u06ef\u06f0\5\u010c\u0087\2\u06f0\u06f1\7\u00b9\2\2\u06f1"+
		"\u06f2\5\u010c\u0087\2\u06f2\u072c\3\2\2\2\u06f3\u06f5\7\u012e\2\2\u06f4"+
		"\u06f3\3\2\2\2\u06f4\u06f5\3\2\2\2\u06f5\u06f6\3\2\2\2\u06f6\u06f7\7\u010b"+
		"\2\2\u06f7\u06f8\7\u0187\2\2\u06f8\u06fd\5\u0104\u0083\2\u06f9\u06fa\7"+
		"\u018b\2\2\u06fa\u06fc\5\u0104\u0083\2\u06fb\u06f9\3\2\2\2\u06fc\u06ff"+
		"\3\2\2\2\u06fd\u06fb\3\2\2\2\u06fd\u06fe\3\2\2\2\u06fe\u0700\3\2\2\2\u06ff"+
		"\u06fd\3\2\2\2\u0700\u0701\7\u0188\2\2\u0701\u072c\3\2\2\2\u0702\u0704"+
		"\7\u012e\2\2\u0703\u0702\3\2\2\2\u0703\u0704\3\2\2\2\u0704\u0705\3\2\2"+
		"\2\u0705\u0706\7\u010b\2\2\u0706\u0707\7\u0187\2\2\u0707\u0708\5\u00a0"+
		"Q\2\u0708\u0709\7\u0188\2\2\u0709\u072c\3\2\2\2\u070a\u070b\7\u00f9\2"+
		"\2\u070b\u070c\7\u0187\2\2\u070c\u070d\5\u00a0Q\2\u070d\u070e\7\u0188"+
		"\2\2\u070e\u072c\3\2\2\2\u070f\u0711\7\u012e\2\2\u0710\u070f\3\2\2\2\u0710"+
		"\u0711\3\2\2\2\u0711\u0712\3\2\2\2\u0712\u0713\7\u0148\2\2\u0713\u072c"+
		"\5\u010c\u0087\2\u0714\u072c\5\u010a\u0086\2\u0715\u0717\7\u0115\2\2\u0716"+
		"\u0718\7\u012e\2\2\u0717\u0716\3\2\2\2\u0717\u0718\3\2\2\2\u0718\u0719"+
		"\3\2\2\2\u0719\u072c\t\36\2\2\u071a\u071c\7\u0115\2\2\u071b\u071d\7\u012e"+
		"\2\2\u071c\u071b\3\2\2\2\u071c\u071d\3\2\2\2\u071d\u071e\3\2\2\2\u071e"+
		"\u071f\7\u00ef\2\2\u071f\u0720\7\u0100\2\2\u0720\u072c\5\u010c\u0087\2"+
		"\u0721\u0723\7\u012e\2\2\u0722\u0721\3\2\2\2\u0722\u0723\3\2\2\2\u0723"+
		"\u0724\3\2\2\2\u0724\u0725\7\u0151\2\2\u0725\u0726\7\u0165\2\2\u0726\u0729"+
		"\5\u010c\u0087\2\u0727\u0728\7\u00f6\2\2\u0728\u072a\5\u0164\u00b3\2\u0729"+
		"\u0727\3\2\2\2\u0729\u072a\3\2\2\2\u072a\u072c\3\2\2\2\u072b\u06e9\3\2"+
		"\2\2\u072b\u06f4\3\2\2\2\u072b\u0703\3\2\2\2\u072b\u070a\3\2\2\2\u072b"+
		"\u0710\3\2\2\2\u072b\u0714\3\2\2\2\u072b\u0715\3\2\2\2\u072b\u071a\3\2"+
		"\2\2\u072b\u0722\3\2\2\2\u072c\u0109\3\2\2\2\u072d\u072f\7\u012e\2\2\u072e"+
		"\u072d\3\2\2\2\u072e\u072f\3\2\2\2\u072f\u0730\3\2\2\2\u0730\u0731\7\u011c"+
		"\2\2\u0731\u073f\t \2\2\u0732\u0733\7\u0187\2\2\u0733\u0740\7\u0188\2"+
		"\2\u0734\u0735\7\u0187\2\2\u0735\u073a\5\u0104\u0083\2\u0736\u0737\7\u018b"+
		"\2\2\u0737\u0739\5\u0104\u0083\2\u0738\u0736\3\2\2\2\u0739\u073c\3\2\2"+
		"\2\u073a\u0738\3\2\2\2\u073a\u073b\3\2\2\2\u073b\u073d\3\2\2\2\u073c\u073a"+
		"\3\2\2\2\u073d\u073e\7\u0188\2\2\u073e\u0740\3\2\2\2\u073f\u0732\3\2\2"+
		"\2\u073f\u0734\3\2\2\2\u0740\u074b\3\2\2\2\u0741\u0743\7\u012e\2\2\u0742"+
		"\u0741\3\2\2\2\u0742\u0743\3\2\2\2\u0743\u0744\3\2\2\2\u0744\u0745\7\u011c"+
		"\2\2\u0745\u0748\5\u010c\u0087\2\u0746\u0747\7\u00f6\2\2\u0747\u0749\5"+
		"\u0164\u00b3\2\u0748\u0746\3\2\2\2\u0748\u0749\3\2\2\2\u0749\u074b\3\2"+
		"\2\2\u074a\u072e\3\2\2\2\u074a\u0742\3\2\2\2\u074b\u010b\3\2\2\2\u074c"+
		"\u074d\b\u0087\1\2\u074d\u0751\5\u010e\u0088\2\u074e\u074f\t!\2\2\u074f"+
		"\u0751\5\u010c\u0087\n\u0750\u074c\3\2\2\2\u0750\u074e\3\2\2\2\u0751\u0769"+
		"\3\2\2\2\u0752\u0753\f\t\2\2\u0753\u0754\t\"\2\2\u0754\u0768\5\u010c\u0087"+
		"\n\u0755\u0756\f\b\2\2\u0756\u0757\t#\2\2\u0757\u0768\5\u010c\u0087\t"+
		"\u0758\u0759\f\7\2\2\u0759\u075a\7\u0182\2\2\u075a\u0768\5\u010c\u0087"+
		"\b\u075b\u075c\f\6\2\2\u075c\u075d\7\u0183\2\2\u075d\u0768\5\u010c\u0087"+
		"\7\u075e\u075f\f\5\2\2\u075f\u0760\7\u0181\2\2\u0760\u0768\5\u010c\u0087"+
		"\6\u0761\u0762\f\4\2\2\u0762\u0763\5\u0158\u00ad\2\u0763\u0764\5\u010c"+
		"\u0087\5\u0764\u0768\3\2\2\2\u0765\u0766\f\3\2\2\u0766\u0768\7\u01a1\2"+
		"\2\u0767\u0752\3\2\2\2\u0767\u0755\3\2\2\2\u0767\u0758\3\2\2\2\u0767\u075b"+
		"\3\2\2\2\u0767\u075e\3\2\2\2\u0767\u0761\3\2\2\2\u0767\u0765\3\2\2\2\u0768"+
		"\u076b\3\2\2\2\u0769\u0767\3\2\2\2\u0769\u076a\3\2\2\2\u076a\u010d\3\2"+
		"\2\2\u076b\u0769\3\2\2\2\u076c\u076d\b\u0088\1\2\u076d\u076f\7\u00cd\2"+
		"\2\u076e\u0770\5\u013a\u009e\2\u076f\u076e\3\2\2\2\u0770\u0771\3\2\2\2"+
		"\u0771\u076f\3\2\2\2\u0771\u0772\3\2\2\2\u0772\u0775\3\2\2\2\u0773\u0774"+
		"\7\u00f3\2\2\u0774\u0776\5\u0104\u0083\2\u0775\u0773\3\2\2\2\u0775\u0776"+
		"\3\2\2\2\u0776\u0777\3\2\2\2\u0777\u0778\7\u00f4\2\2\u0778\u07cf\3\2\2"+
		"\2\u0779\u077a\7\u00cd\2\2\u077a\u077c\5\u0104\u0083\2\u077b\u077d\5\u013a"+
		"\u009e\2\u077c\u077b\3\2\2\2\u077d\u077e\3\2\2\2\u077e\u077c\3\2\2\2\u077e"+
		"\u077f\3\2\2\2\u077f\u0782\3\2\2\2\u0780\u0781\7\u00f3\2\2\u0781\u0783"+
		"\5\u0104\u0083\2\u0782\u0780\3\2\2\2\u0782\u0783\3\2\2\2\u0783\u0784\3"+
		"\2\2\2\u0784\u0785\7\u00f4\2\2\u0785\u07cf\3\2\2\2\u0786\u0787\7\u00ce"+
		"\2\2\u0787\u0788\7\u0187\2\2\u0788\u0789\5\u0104\u0083\2\u0789\u078a\7"+
		"\u00bd\2\2\u078a\u078b\5:\36\2\u078b\u078c\7\u0188\2\2\u078c\u07cf\3\2"+
		"\2\2\u078d\u078e\7\60\2\2\u078e\u078f\7\u0187\2\2\u078f\u0792\5\u0104"+
		"\u0083\2\u0790\u0791\7?\2\2\u0791\u0793\7Z\2\2\u0792\u0790\3\2\2\2\u0792"+
		"\u0793\3\2\2\2\u0793\u0794\3\2\2\2\u0794\u0795\7\u0188\2\2\u0795\u07cf"+
		"\3\2\2\2\u0796\u0797\7L\2\2\u0797\u0798\7\u0187\2\2\u0798\u079b\5\u0104"+
		"\u0083\2\u0799\u079a\7?\2\2\u079a\u079c\7Z\2\2\u079b\u0799\3\2\2\2\u079b"+
		"\u079c\3\2\2\2\u079c\u079d\3\2\2\2\u079d\u079e\7\u0188\2\2\u079e\u07cf"+
		"\3\2\2\2\u079f\u07a0\7\u0140\2\2\u07a0\u07a1\7\u0187\2\2\u07a1\u07a2\5"+
		"\u010c\u0087\2\u07a2\u07a3\7\u010b\2\2\u07a3\u07a4\5\u010c\u0087\2\u07a4"+
		"\u07a5\7\u0188\2\2\u07a5\u07cf\3\2\2\2\u07a6\u07cf\5\u0160\u00b1\2\u07a7"+
		"\u07cf\7\u0192\2\2\u07a8\u07a9\5\u0146\u00a4\2\u07a9\u07aa\7\u0184\2\2"+
		"\u07aa\u07ab\7\u0192\2\2\u07ab\u07cf\3\2\2\2\u07ac\u07ad\7\u0187\2\2\u07ad"+
		"\u07ae\5\u00a0Q\2\u07ae\u07af\7\u0188\2\2\u07af\u07cf\3\2\2\2\u07b0\u07b1"+
		"\5\u0110\u0089\2\u07b1\u07bd\7\u0187\2\2\u07b2\u07b4\5\u016a\u00b6\2\u07b3"+
		"\u07b2\3\2\2\2\u07b3\u07b4\3\2\2\2\u07b4\u07b5\3\2\2\2\u07b5\u07ba\5\u0112"+
		"\u008a\2\u07b6\u07b7\7\u018b\2\2\u07b7\u07b9\5\u0112\u008a\2\u07b8\u07b6"+
		"\3\2\2\2\u07b9\u07bc\3\2\2\2\u07ba\u07b8\3\2\2\2\u07ba\u07bb\3\2\2\2\u07bb"+
		"\u07be\3\2\2\2\u07bc\u07ba\3\2\2\2\u07bd\u07b3\3\2\2\2\u07bd\u07be\3\2"+
		"\2\2\u07be\u07bf\3\2\2\2\u07bf\u07c0\7\u0188\2\2\u07c0\u07cf\3\2\2\2\u07c1"+
		"\u07c2\5\u0110\u0089\2\u07c2\u07c3\7\u0187\2\2\u07c3\u07c4\5\u0112\u008a"+
		"\2\u07c4\u07c5\7\u0165\2\2\u07c5\u07c6\5\u0112\u008a\2\u07c6\u07c7\7\u0188"+
		"\2\2\u07c7\u07cf\3\2\2\2\u07c8\u07cf\5\u0132\u009a\2\u07c9\u07cf\5\u0114"+
		"\u008b\2\u07ca\u07cb\7\u0187\2\2\u07cb\u07cc\5\u0104\u0083\2\u07cc\u07cd"+
		"\7\u0188\2\2\u07cd\u07cf\3\2\2\2\u07ce\u076c\3\2\2\2\u07ce\u0779\3\2\2"+
		"\2\u07ce\u0786\3\2\2\2\u07ce\u078d\3\2\2\2\u07ce\u0796\3\2\2\2\u07ce\u079f"+
		"\3\2\2\2\u07ce\u07a6\3\2\2\2\u07ce\u07a7\3\2\2\2\u07ce\u07a8\3\2\2\2\u07ce"+
		"\u07ac\3\2\2\2\u07ce\u07b0\3\2\2\2\u07ce\u07c1\3\2\2\2\u07ce\u07c8\3\2"+
		"\2\2\u07ce\u07c9\3\2\2\2\u07ce\u07ca\3\2\2\2\u07cf\u07d7\3\2\2\2\u07d0"+
		"\u07d1\f\6\2\2\u07d1\u07d2\7\u0185\2\2\u07d2\u07d3\5\u010c\u0087\2\u07d3"+
		"\u07d4\7\u0186\2\2\u07d4\u07d6\3\2\2\2\u07d5\u07d0\3\2\2\2\u07d6\u07d9"+
		"\3\2\2\2\u07d7\u07d5\3\2\2\2\u07d7\u07d8\3\2\2\2\u07d8\u010f\3\2\2\2\u07d9"+
		"\u07d7\3\2\2\2\u07da\u07de\5\u0172\u00ba\2\u07db\u07de\5\u0176\u00bc\2"+
		"\u07dc\u07de\5\u0146\u00a4\2\u07dd\u07da\3\2\2\2\u07dd\u07db\3\2\2\2\u07dd"+
		"\u07dc\3\2\2\2\u07de\u0111\3\2\2\2\u07df\u07e4\5\u0170\u00b9\2\u07e0\u07e4"+
		"\5\u016e\u00b8\2\u07e1\u07e4\5\u016c\u00b7\2\u07e2\u07e4\5\u0104\u0083"+
		"\2\u07e3\u07df\3\2\2\2\u07e3\u07e0\3\2\2\2\u07e3\u07e1\3\2\2\2\u07e3\u07e2"+
		"\3\2\2\2\u07e4\u0113\3\2\2\2\u07e5\u07e6\5\u0146\u00a4\2\u07e6\u0115\3"+
		"\2\2\2\u07e7\u07e8\5\u0132\u009a\2\u07e8\u0117\3\2\2\2\u07e9\u07ec\5\u0132"+
		"\u009a\2\u07ea\u07ec\5\u0114\u008b\2\u07eb\u07e9\3\2\2\2\u07eb\u07ea\3"+
		"\2\2\2\u07ec\u0119\3\2\2\2\u07ed\u07f0\7\u0113\2\2\u07ee\u07f1\5\u011c"+
		"\u008f\2\u07ef\u07f1\5\u0120\u0091\2\u07f0\u07ee\3\2\2\2\u07f0\u07ef\3"+
		"\2\2\2\u07f0\u07f1\3\2\2\2\u07f1\u011b\3\2\2\2\u07f2\u07f4\5\u011e\u0090"+
		"\2\u07f3\u07f5\5\u0122\u0092\2\u07f4\u07f3\3\2\2\2\u07f4\u07f5\3\2\2\2"+
		"\u07f5\u011d\3\2\2\2\u07f6\u07f7\5\u0124\u0093\2\u07f7\u07f8\5\u016e\u00b8"+
		"\2\u07f8\u07fa\3\2\2\2\u07f9\u07f6\3\2\2\2\u07fa\u07fb\3\2\2\2\u07fb\u07f9"+
		"\3\2\2\2\u07fb\u07fc\3\2\2\2\u07fc\u011f\3\2\2\2\u07fd\u0800\5\u0122\u0092"+
		"\2\u07fe\u0801\5\u011e\u0090\2\u07ff\u0801\5\u0122\u0092\2\u0800\u07fe"+
		"\3\2\2\2\u0800\u07ff\3\2\2\2\u0800\u0801\3\2\2\2\u0801\u0121\3\2\2\2\u0802"+
		"\u0803\5\u0124\u0093\2\u0803\u0804\5\u016e\u00b8\2\u0804\u0805\7\u0165"+
		"\2\2\u0805\u0806\5\u016e\u00b8\2\u0806\u0123\3\2\2\2\u0807\u0809\t$\2"+
		"\2\u0808\u0807\3\2\2\2\u0808\u0809\3\2\2\2\u0809\u080a\3\2\2\2\u080a\u080d"+
		"\t%\2\2\u080b\u080d\7\u019c\2\2\u080c\u0808\3\2\2\2\u080c\u080b\3\2\2"+
		"\2\u080d\u0125\3\2\2\2\u080e\u0810\7\u00bd\2\2\u080f\u080e\3\2\2\2\u080f"+
		"\u0810\3\2\2\2\u0810\u0811\3\2\2\2\u0811\u0813\5\u0132\u009a\2\u0812\u0814"+
		"\5\u012e\u0098\2\u0813\u0812\3\2\2\2\u0813\u0814\3\2\2\2\u0814\u0127\3"+
		"\2\2\2\u0815\u0817\7\u00bd\2\2\u0816\u0815\3\2\2\2\u0816\u0817\3\2\2\2"+
		"\u0817\u0818\3\2\2\2\u0818\u081a\5\u0132\u009a\2\u0819\u081b\5\u012e\u0098"+
		"\2\u081a\u0819\3\2\2\2\u081a\u081b\3\2\2\2\u081b\u0129\3\2\2\2\u081c\u081d"+
		"\5\u0132\u009a\2\u081d\u081e\5\u012c\u0097\2\u081e\u012b\3\2\2\2\u081f"+
		"\u0820\7\u0124\2\2\u0820\u0822\5\u0132\u009a\2\u0821\u081f\3\2\2\2\u0822"+
		"\u0823\3\2\2\2\u0823\u0821\3\2\2\2\u0823\u0824\3\2\2\2\u0824\u0827\3\2"+
		"\2\2\u0825\u0827\3\2\2\2\u0826\u0821\3\2\2\2\u0826\u0825\3\2\2\2\u0827"+
		"\u012d\3\2\2\2\u0828\u0829\7\u0187\2\2\u0829\u082a\5\u0130\u0099\2\u082a"+
		"\u082b\7\u0188\2\2\u082b\u012f\3\2\2\2\u082c\u0831\5\u0132\u009a\2\u082d"+
		"\u082e\7\u018b\2\2\u082e\u0830\5\u0132\u009a\2\u082f\u082d\3\2\2\2\u0830"+
		"\u0833\3\2\2\2\u0831\u082f\3\2\2\2\u0831\u0832\3\2\2\2\u0832\u0131\3\2"+
		"\2\2\u0833\u0831\3\2\2\2\u0834\u0839\5\u0136\u009c\2\u0835\u0839\5\u0138"+
		"\u009d\2\u0836\u0839\5\u0176\u00bc\2\u0837\u0839\5\u0134\u009b\2\u0838"+
		"\u0834\3\2\2\2\u0838\u0835\3\2\2\2\u0838\u0836\3\2\2\2\u0838\u0837\3\2"+
		"\2\2\u0839\u0133\3\2\2\2\u083a\u083b\7\3\2\2\u083b\u083c\7\u0189\2\2\u083c"+
		"\u083d\5\u0136\u009c\2\u083d\u083e\7\u018a\2\2\u083e\u0135\3\2\2\2\u083f"+
		"\u0840\t&\2\2\u0840\u0137\3\2\2\2\u0841\u0842\7\u019c\2\2\u0842\u0139"+
		"\3\2\2\2\u0843\u0844\7\u0175\2\2\u0844\u0845\5\u0104\u0083\2\u0845\u0846"+
		"\7\u015e\2\2\u0846\u0847\5\u0104\u0083\2\u0847\u013b\3\2\2\2\u0848\u0849"+
		"\5\u0146\u00a4\2\u0849\u013d\3\2\2\2\u084a\u084b\5\u0146\u00a4\2\u084b"+
		"\u013f\3\2\2\2\u084c\u084d\5\u0146\u00a4\2\u084d\u0141\3\2\2\2\u084e\u084f"+
		"\5\u0146\u00a4\2\u084f\u0143\3\2\2\2\u0850\u0851\5\u0146\u00a4\2\u0851"+
		"\u0145\3\2\2\2\u0852\u0857\5\u0132\u009a\2\u0853\u0854\7\u0184\2\2\u0854"+
		"\u0856\5\u0132\u009a\2\u0855\u0853\3\2\2\2\u0856\u0859\3\2\2\2\u0857\u0858"+
		"\3\2\2\2\u0857\u0855\3\2\2\2\u0858\u0147\3\2\2\2\u0859\u0857\3\2\2\2\u085a"+
		"\u085b\7\u0178\2\2\u085b\u085c\5\u014e\u00a8\2\u085c\u0149\3\2\2\2\u085d"+
		"\u085e\7>\2\2\u085e\u085f\7\u012e\2\2\u085f\u0860\7\u00f9\2\2\u0860\u014b"+
		"\3\2\2\2\u0861\u0862\7>\2\2\u0862\u0863\7\u00f9\2\2\u0863\u014d\3\2\2"+
		"\2\u0864\u0865\7\u0187\2\2\u0865\u086a\5\u0150\u00a9\2\u0866\u0867\7\u018b"+
		"\2\2\u0867\u0869\5\u0150\u00a9\2\u0868\u0866\3\2\2\2\u0869\u086c\3\2\2"+
		"\2\u086a\u0868\3\2\2\2\u086a\u086b\3\2\2\2\u086b\u086d\3\2\2\2\u086c\u086a"+
		"\3\2\2\2\u086d\u086e\7\u0188\2\2\u086e\u014f\3\2\2\2\u086f\u0874\5\u0152"+
		"\u00aa\2\u0870\u0872\7\u017c\2\2\u0871\u0870\3\2\2\2\u0871\u0872\3\2\2"+
		"\2\u0872\u0873\3\2\2\2\u0873\u0875\5\u0154\u00ab\2\u0874\u0871\3\2\2\2"+
		"\u0874\u0875\3\2\2\2\u0875\u0151\3\2\2\2\u0876\u087a\5\u0132\u009a\2\u0877"+
		"\u087a\5\u0114\u008b\2\u0878\u087a\7\u019c\2\2\u0879\u0876\3\2\2\2\u0879"+
		"\u0877\3\2\2\2\u0879\u0878\3\2\2\2\u087a\u0153\3\2\2\2\u087b\u0880\7\u019d"+
		"\2\2\u087c\u0880\7\u019e\2\2\u087d\u0880\5\u0168\u00b5\2\u087e\u0880\7"+
		"\u019c\2\2\u087f\u087b\3\2\2\2\u087f\u087c\3\2\2\2\u087f\u087d\3\2\2\2"+
		"\u087f\u087e\3\2\2\2\u0880\u0155\3\2\2\2\u0881\u0888\7\u00b9\2\2\u0882"+
		"\u0883\7\u0182\2\2\u0883\u0888\7\u0182\2\2\u0884\u0888\7\u0135\2\2\u0885"+
		"\u0886\7\u0181\2\2\u0886\u0888\7\u0181\2\2\u0887\u0881\3\2\2\2\u0887\u0882"+
		"\3\2\2\2\u0887\u0884\3\2\2\2\u0887\u0885\3\2\2\2\u0888\u0157\3\2\2\2\u0889"+
		"\u0898\7\u017c\2\2\u088a\u0898\7\u017d\2\2\u088b\u0898\7\u017e\2\2\u088c"+
		"\u088d\7\u017e\2\2\u088d\u0898\7\u017c\2\2\u088e\u088f\7\u017d\2\2\u088f"+
		"\u0898\7\u017c\2\2\u0890\u0891\7\u017e\2\2\u0891\u0898\7\u017d\2\2\u0892"+
		"\u0893\7\u017f\2\2\u0893\u0898\7\u017c\2\2\u0894\u0895\7\u017e\2\2\u0895"+
		"\u0896\7\u017c\2\2\u0896\u0898\7\u017d\2\2\u0897\u0889\3\2\2\2\u0897\u088a"+
		"\3\2\2\2\u0897\u088b\3\2\2\2\u0897\u088c\3\2\2\2\u0897\u088e\3\2\2\2\u0897"+
		"\u0890\3\2\2\2\u0897\u0892\3\2\2\2\u0897\u0894\3\2\2\2\u0898\u0159\3\2"+
		"\2\2\u0899\u089a\7\u017e\2\2\u089a\u08a1\7\u017e\2\2\u089b\u089c\7\u017d"+
		"\2\2\u089c\u08a1\7\u017d\2\2\u089d\u08a1\7\u0182\2\2\u089e\u08a1\7\u0183"+
		"\2\2\u089f\u08a1\7\u0181\2\2\u08a0\u0899\3\2\2\2\u08a0\u089b\3\2\2\2\u08a0"+
		"\u089d\3\2\2\2\u08a0\u089e\3\2\2\2\u08a0\u089f\3\2\2\2\u08a1\u015b\3\2"+
		"\2\2\u08a2\u08a3\t\'\2\2\u08a3\u015d\3\2\2\2\u08a4\u08a5\t(\2\2\u08a5"+
		"\u015f\3\2\2\2\u08a6\u08b5\5\u011a\u008e\2\u08a7\u08b5\5\u0162\u00b2\2"+
		"\u08a8\u08b5\5\u0164\u00b3\2\u08a9\u08ab\7\u0194\2\2\u08aa\u08a9\3\2\2"+
		"\2\u08aa\u08ab\3\2\2\2\u08ab\u08ac\3\2\2\2\u08ac\u08b5\5\u0166\u00b4\2"+
		"\u08ad\u08b5\5\u0168\u00b5\2\u08ae\u08b5\7\u019e\2\2\u08af\u08b5\7\u019f"+
		"\2\2\u08b0\u08b2\7\u012e\2\2\u08b1\u08b0\3\2\2\2\u08b1\u08b2\3\2\2\2\u08b2"+
		"\u08b3\3\2\2\2\u08b3\u08b5\7\u012f\2\2\u08b4\u08a6\3\2\2\2\u08b4\u08a7"+
		"\3\2\2\2\u08b4\u08a8\3\2\2\2\u08b4\u08aa\3\2\2\2\u08b4\u08ad\3\2\2\2\u08b4"+
		"\u08ae\3\2\2\2\u08b4\u08af\3\2\2\2\u08b4\u08b1\3\2\2\2\u08b5\u0161\3\2"+
		"\2\2\u08b6\u08b7\5\u016c\u00b7\2\u08b7\u08b8\5\u0164\u00b3\2\u08b8\u0163"+
		"\3\2\2\2\u08b9\u08ba\7\u019c\2\2\u08ba\u0165\3\2\2\2\u08bb\u08bc\7\u019d"+
		"\2\2\u08bc\u0167\3\2\2\2\u08bd\u08be\t)\2\2\u08be\u0169\3\2\2\2\u08bf"+
		"\u08c0\t*\2\2\u08c0\u016b\3\2\2\2\u08c1\u08c2\t+\2\2\u08c2\u016d\3\2\2"+
		"\2\u08c3\u08c4\t,\2\2\u08c4\u016f\3\2\2\2\u08c5\u08c6\t-\2\2\u08c6\u0171"+
		"\3\2\2\2\u08c7\u08c8\t.\2\2\u08c8\u0173\3\2\2\2\u08c9\u08ca\t/\2\2\u08ca"+
		"\u0175\3\2\2\2\u08cb\u08cc\t\60\2\2\u08cc\u0177\3\2\2\2\u0105\u0181\u0183"+
		"\u01a9\u01bb\u01bf\u01c8\u01cd\u01d4\u01df\u01e8\u01f4\u01f7\u01fe\u0206"+
		"\u020b\u020e\u0215\u021d\u0221\u022a\u022e\u0232\u0236\u023f\u0244\u0248"+
		"\u024c\u0250\u0253\u0257\u025c\u0262\u0267\u026c\u026f\u0273\u027b\u0283"+
		"\u0287\u028b\u028f\u0293\u0297\u029b\u029f\u02a3\u02a7\u02ab\u02af\u02b3"+
		"\u02b7\u02bb\u02bf\u02c3\u02c7\u02c9\u02d3\u02db\u02e5\u02f0\u02f5\u0307"+
		"\u0315\u031a\u031e\u0324\u0327\u032a\u0334\u0337\u033f\u034b\u0363\u0370"+
		"\u0375\u0379\u0381\u0385\u038b\u0395\u0399\u039c\u03a0\u03a4\u03a8\u03ab"+
		"\u03b4\u03b8\u03bf\u03c2\u03cc\u03d4\u03dc\u03e0\u03ef\u0402\u040d\u0411"+
		"\u0418\u041d\u0423\u0427\u042e\u0432\u0436\u043a\u0442\u0446\u044b\u0451"+
		"\u0457\u045a\u045e\u0469\u0472\u0480\u048c\u049b\u049e\u04a2\u04a5\u04a7"+
		"\u04ac\u04b0\u04b3\u04b7\u04c0\u04c9\u04d3\u04d8\u04e4\u04e7\u04ea\u04ed"+
		"\u04f3\u04f7\u04ff\u0502\u0507\u050a\u050c\u051a\u0525\u052a\u0532\u0535"+
		"\u0538\u053d\u053f\u0541\u0546\u0549\u054d\u0550\u0553\u055f\u0566\u0571"+
		"\u058c\u05a2\u05b4\u05b9\u05c5\u05d2\u05de\u05ea\u05ef\u060a\u0612\u0616"+
		"\u0619\u061c\u0623\u0626\u0629\u062c\u062f\u0632\u0637\u063a\u0643\u0648"+
		"\u064c\u0651\u065a\u066d\u0675\u067d\u0681\u0685\u068f\u06a9\u06b1\u06bd"+
		"\u06d3\u06d5\u06e0\u06e3\u06e5\u06e9\u06ed\u06f4\u06fd\u0703\u0710\u0717"+
		"\u071c\u0722\u0729\u072b\u072e\u073a\u073f\u0742\u0748\u074a\u0750\u0767"+
		"\u0769\u0771\u0775\u077e\u0782\u0792\u079b\u07b3\u07ba\u07bd\u07ce\u07d7"+
		"\u07dd\u07e3\u07eb\u07f0\u07f4\u07fb\u0800\u0808\u080c\u080f\u0813\u0816"+
		"\u081a\u0823\u0826\u0831\u0838\u0857\u086a\u0871\u0874\u0879\u087f\u0887"+
		"\u0897\u08a0\u08aa\u08b1\u08b4";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}