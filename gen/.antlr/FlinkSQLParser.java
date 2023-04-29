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
		SPACE=1, COMMENT_INPUT=2, LINE_COMMENT=3, KW_ADD=4, KW_ADMIN=5, KW_AFTER=6, 
		KW_ANALYZE=7, KW_ASC=8, KW_BEFORE=9, KW_BYTES=10, KW_CASCADE=11, KW_CATALOG=12, 
		KW_CATALOGS=13, KW_CENTURY=14, KW_CHAIN=15, KW_CHANGELOG_MODE=16, KW_CHARACTERS=17, 
		KW_COMMENT=18, KW_COMPACT=19, KW_COLUMNS=20, KW_CONSTRAINTS=21, KW_CONSTRUCTOR=22, 
		KW_CUMULATE=23, KW_DATA=24, KW_DATABASE=25, KW_DATABASES=26, KW_DAYS=27, 
		KW_DECADE=28, KW_DEFINED=29, KW_DESC=30, KW_DESCRIPTOR=31, KW_DIV=32, 
		KW_ENCODING=33, KW_ENFORCED=34, KW_ENGINE=35, KW_EPOCH=36, KW_ERROR=37, 
		KW_ESTIMATED_COST=38, KW_EXCEPTION=39, KW_EXCLUDE=40, KW_EXCLUDING=41, 
		KW_EXTENDED=42, KW_FILE=43, KW_FINAL=44, KW_FIRST=45, KW_FOLLOWING=46, 
		KW_FORMAT=47, KW_FORTRAN=48, KW_FOUND=49, KW_FRAC_SECOND=50, KW_FUNCTIONS=51, 
		KW_GENERAL=52, KW_GENERATED=53, KW_GO=54, KW_GOTO=55, KW_GRANTED=56, KW_HOP=57, 
		KW_HOURS=58, KW_IF=59, KW_IGNORE=60, KW_INCREMENT=61, KW_INPUT=62, KW_INVOKER=63, 
		KW_JAR=64, KW_JARS=65, KW_JAVA=66, KW_JSON=67, KW_JSON_EXECUTION_PLAN=68, 
		KW_KEY=69, KW_KEY_MEMBER=70, KW_KEY_TYPE=71, KW_LABEL=72, KW_LAST=73, 
		KW_LENGTH=74, KW_LEVEL=75, KW_LOAD=76, KW_MAP=77, KW_MICROSECOND=78, KW_MILLENNIUM=79, 
		KW_MILLISECOND=80, KW_MINUTES=81, KW_MINVALUE=82, KW_MODIFY=83, KW_MODULES=84, 
		KW_MONTHS=85, KW_NANOSECOND=86, KW_NULLS=87, KW_NUMBER=88, KW_OPTION=89, 
		KW_OPTIONS=90, KW_ORDERING=91, KW_OUTPUT=92, KW_OVERWRITE=93, KW_OVERWRITING=94, 
		KW_PARTITIONED=95, KW_PARTITIONS=96, KW_PASSING=97, KW_PAST=98, KW_PATH=99, 
		KW_PLACING=100, KW_PLAN=101, KW_PRECEDING=102, KW_PRESERVE=103, KW_PRIOR=104, 
		KW_PRIVILEGES=105, KW_PUBLIC=106, KW_PYTHON=107, KW_PYTHON_FILES=108, 
		KW_PYTHON_REQUIREMENTS=109, KW_PYTHON_DEPENDENCIES=110, KW_PYTHON_JAR=111, 
		KW_PYTHON_ARCHIVES=112, KW_PYTHON_PARAMETER=113, KW_QUARTER=114, KW_RAW=115, 
		KW_READ=116, KW_RELATIVE=117, KW_REMOVE=118, KW_RENAME=119, KW_REPLACE=120, 
		KW_RESPECT=121, KW_RESTART=122, KW_RESTRICT=123, KW_ROLE=124, KW_ROW_COUNT=125, 
		KW_SCALA=126, KW_SCALAR=127, KW_SCALE=128, KW_SCHEMA=129, KW_SECONDS=130, 
		KW_SECTION=131, KW_SECURITY=132, KW_SELF=133, KW_SERVER=134, KW_SERVER_NAME=135, 
		KW_SESSION=136, KW_SETS=137, KW_SIMPLE=138, KW_SIZE=139, KW_SLIDE=140, 
		KW_SOURCE=141, KW_SPACE=142, KW_STATE=143, KW_STATEMENT=144, KW_STEP=145, 
		KW_STRING=146, KW_STRUCTURE=147, KW_STYLE=148, KW_TABLES=149, KW_TEMPORARY=150, 
		KW_TIMECOL=151, KW_TIMESTAMP_LTZ=152, KW_TIMESTAMPADD=153, KW_TIMESTAMPDIFF=154, 
		KW_TRANSFORM=155, KW_TUMBLE=156, KW_TYPE=157, KW_UNDER=158, KW_UNLOAD=159, 
		KW_USAGE=160, KW_USE=161, KW_UTF16=162, KW_UTF32=163, KW_UTF8=164, KW_VERSION=165, 
		KW_VIEW=166, KW_VIEWS=167, KW_VIRTUAL=168, KW_WATERMARK=169, KW_WATERMARKS=170, 
		KW_WEEK=171, KW_WEEKS=172, KW_WORK=173, KW_WRAPPER=174, KW_YEARS=175, 
		KW_ZONE=176, KW_ABS=177, KW_ALL=178, KW_ALLOW=179, KW_ALTER=180, KW_AND=181, 
		KW_ANY=182, KW_ARE=183, KW_ARRAY=184, KW_AS=185, KW_ASYMMETRIC=186, KW_AT=187, 
		KW_AVG=188, KW_BEGIN=189, KW_BETWEEN=190, KW_BIGINT=191, KW_BINARY=192, 
		KW_BIT=193, KW_BLOB=194, KW_BOOLEAN=195, KW_BOTH=196, KW_BY=197, KW_CALL=198, 
		KW_CALLED=199, KW_CASCADED=200, KW_CASE=201, KW_CAST=202, KW_CEIL=203, 
		KW_CHAR=204, KW_CHARACTER=205, KW_CHECK=206, KW_CLOB=207, KW_CLOSE=208, 
		KW_COALESCE=209, KW_COLLATE=210, KW_COLLECT=211, KW_COLUMN=212, KW_COMMIT=213, 
		KW_CONNECT=214, KW_CONSTRAINT=215, KW_CONTAINS=216, KW_CONVERT=217, KW_COUNT=218, 
		KW_CREATE=219, KW_CROSS=220, KW_CUBE=221, KW_CURRENT=222, KW_CURSOR=223, 
		KW_CYCLE=224, KW_DATE=225, KW_DATETIME=226, KW_DAY=227, KW_DEC=228, KW_DECIMAL=229, 
		KW_DECLARE=230, KW_DEFAULT=231, KW_DEFINE=232, KW_DELETE=233, KW_DESCRIBE=234, 
		KW_DISTINCT=235, KW_DOUBLE=236, KW_DROP=237, KW_EACH=238, KW_ELSE=239, 
		KW_END=240, KW_EQUALS=241, KW_ESCAPE=242, KW_EXCEPT=243, KW_EXECUTE=244, 
		KW_EXISTS=245, KW_EXPLAIN=246, KW_EXTERNAL=247, KW_EXTRACT=248, KW_FALSE=249, 
		KW_FLOAT=250, KW_FOR=251, KW_FROM=252, KW_FULL=253, KW_FUNCTION=254, KW_GLOBAL=255, 
		KW_GRANT=256, KW_GROUP=257, KW_GROUPING=258, KW_GROUPS=259, KW_HAVING=260, 
		KW_HOUR=261, KW_IMPORT=262, KW_IN=263, KW_INCLUDING=264, KW_INNER=265, 
		KW_INOUT=266, KW_INSERT=267, KW_INT=268, KW_INTEGER=269, KW_INTERSECT=270, 
		KW_INTERVAL=271, KW_INTO=272, KW_IS=273, KW_JOIN=274, KW_LAG=275, KW_LANGUAGE=276, 
		KW_LATERAL=277, KW_LEADING=278, KW_LEFT=279, KW_LIKE=280, KW_LIMIT=281, 
		KW_LOCAL=282, KW_MATCH=283, KW_MATCH_RECOGNIZE=284, KW_MEASURES=285, KW_MERGE=286, 
		KW_METADATA=287, KW_MINUS=288, KW_MINUTE=289, KW_MODIFIES=290, KW_MODULE=291, 
		KW_MONTH=292, KW_MULTISET=293, KW_NATURAL=294, KW_NEXT=295, KW_NO=296, 
		KW_NONE=297, KW_NOT=298, KW_NULL=299, KW_NUMERIC=300, KW_OF=301, KW_OFFSET=302, 
		KW_ON=303, KW_ONE=304, KW_OR=305, KW_ORDER=306, KW_OUT=307, KW_OUTER=308, 
		KW_OVER=309, KW_OVERLAY=310, KW_PARTITION=311, KW_PATTERN=312, KW_PER=313, 
		KW_PERCENT=314, KW_PERIOD=315, KW_POSITION=316, KW_POWER=317, KW_PRIMARY=318, 
		KW_RANGE=319, KW_RANK=320, KW_RESET=321, KW_REVOKE=322, KW_RIGHT=323, 
		KW_RLIKE=324, KW_ROLLBACK=325, KW_ROLLUP=326, KW_ROW=327, KW_ROWS=328, 
		KW_SECOND=329, KW_SELECT=330, KW_SET=331, KW_SHOW=332, KW_SIMILAR=333, 
		KW_SKIP=334, KW_SMALLINT=335, KW_START=336, KW_STATIC=337, KW_SUBSTRING=338, 
		KW_SUM=339, KW_SYMMETRIC=340, KW_SYSTEM=341, KW_SYSTEM_TIME=342, KW_SYSTEM_USER=343, 
		KW_TABLE=344, KW_TABLESAMPLE=345, KW_THEN=346, KW_TIME=347, KW_TIMESTAMP=348, 
		KW_TIMESTAMP_3=349, KW_TIMESTAMP_6=350, KW_TIMESTAMP_9=351, KW_TINYINT=352, 
		KW_TO=353, KW_TRAILING=354, KW_TRUE=355, KW_TRUNCATE=356, KW_UNION=357, 
		KW_UNIQUE=358, KW_UNKNOWN=359, KW_UNNEST=360, KW_UPPER=361, KW_UPSERT=362, 
		KW_USER=363, KW_USING=364, KW_VALUE=365, KW_VALUES=366, KW_VARBINARY=367, 
		KW_VARCHAR=368, KW_WHEN=369, KW_WHERE=370, KW_WINDOW=371, KW_WITH=372, 
		KW_WITHIN=373, KW_WITHOUT=374, KW_YEAR=375, EQUAL_SYMBOL=376, GREATER_SYMBOL=377, 
		LESS_SYMBOL=378, EXCLAMATION_SYMBOL=379, BIT_NOT_OP=380, BIT_OR_OP=381, 
		BIT_AND_OP=382, BIT_XOR_OP=383, DOT=384, LS_BRACKET=385, RS_BRACKET=386, 
		LR_BRACKET=387, RR_BRACKET=388, LB_BRACKET=389, RB_BRACKET=390, COMMA=391, 
		SEMICOLON=392, AT_SIGN=393, SINGLE_QUOTE_SYMB=394, DOUBLE_QUOTE_SYMB=395, 
		REVERSE_QUOTE_SYMB=396, COLON_SYMB=397, ASTERISK_SIGN=398, UNDERLINE_SIGN=399, 
		HYPNEN_SIGN=400, ADD_SIGN=401, PENCENT_SIGN=402, DOUBLE_VERTICAL_SIGN=403, 
		DOUBLE_HYPNEN_SIGN=404, SLASH_SIGN=405, QUESTION_MARK_SIGN=406, DOUBLE_RIGHT_ARROW=407, 
		STRING_LITERAL=408, DIG_LITERAL=409, REAL_LITERAL=410, BIT_STRING=411, 
		ID_LITERAL=412, SLASH_TEXT=413;
	public static final int
		RULE_program = 0, RULE_statement = 1, RULE_sqlStatements = 2, RULE_sqlStatement = 3, 
		RULE_emptyStatement = 4, RULE_ddlStatement = 5, RULE_dmlStatement = 6, 
		RULE_describeStatement = 7, RULE_explainStatement = 8, RULE_explainDetails = 9, 
		RULE_explainDetail = 10, RULE_useStatement = 11, RULE_useModuleStatement = 12, 
		RULE_showStatememt = 13, RULE_loadStatement = 14, RULE_unloadStatememt = 15, 
		RULE_setStatememt = 16, RULE_resetStatememt = 17, RULE_jarStatememt = 18, 
		RULE_dtFilePath = 19, RULE_createTable = 20, RULE_simpleCreateTable = 21, 
		RULE_createTableAsSelect = 22, RULE_columnOptionDefinition = 23, RULE_physicalColumnDefinition = 24, 
		RULE_columnName = 25, RULE_columnNameList = 26, RULE_columnType = 27, 
		RULE_lengthOneDimension = 28, RULE_lengthTwoOptionalDimension = 29, RULE_lengthTwoStringDimension = 30, 
		RULE_lengthOneTypeDimension = 31, RULE_mapTypeDimension = 32, RULE_rowTypeDimension = 33, 
		RULE_columnConstraint = 34, RULE_commentSpec = 35, RULE_metadataColumnDefinition = 36, 
		RULE_metadataKey = 37, RULE_computedColumnDefinition = 38, RULE_computedColumnExpression = 39, 
		RULE_watermarkDefinition = 40, RULE_tableConstraint = 41, RULE_constraintName = 42, 
		RULE_selfDefinitionClause = 43, RULE_partitionDefinition = 44, RULE_transformList = 45, 
		RULE_transform = 46, RULE_transformArgument = 47, RULE_likeDefinition = 48, 
		RULE_likeOption = 49, RULE_createCatalog = 50, RULE_createDatabase = 51, 
		RULE_createView = 52, RULE_createFunction = 53, RULE_usingClause = 54, 
		RULE_jarFileName = 55, RULE_alterTable = 56, RULE_renameDefinition = 57, 
		RULE_setKeyValueDefinition = 58, RULE_addConstraint = 59, RULE_dropConstraint = 60, 
		RULE_addUnique = 61, RULE_notForced = 62, RULE_alertView = 63, RULE_alterDatabase = 64, 
		RULE_alterFunction = 65, RULE_dropCatalog = 66, RULE_dropTable = 67, RULE_dropDatabase = 68, 
		RULE_dropView = 69, RULE_dropFunction = 70, RULE_insertStatement = 71, 
		RULE_insertSimpleStatement = 72, RULE_insertPartitionDefinition = 73, 
		RULE_valuesDefinition = 74, RULE_valuesRowDefinition = 75, RULE_insertMulStatementCompatibility = 76, 
		RULE_insertMulStatement = 77, RULE_queryStatement = 78, RULE_valuesCaluse = 79, 
		RULE_withClause = 80, RULE_withItem = 81, RULE_withItemName = 82, RULE_selectStatement = 83, 
		RULE_selectClause = 84, RULE_projectItemDefinition = 85, RULE_overWindowItem = 86, 
		RULE_fromClause = 87, RULE_tableExpression = 88, RULE_tableReference = 89, 
		RULE_tablePrimary = 90, RULE_systemTimePeriod = 91, RULE_dateTimeExpression = 92, 
		RULE_inlineDataValueClause = 93, RULE_windoTVFClause = 94, RULE_windowTVFExression = 95, 
		RULE_windoTVFName = 96, RULE_windowTVFParam = 97, RULE_timeIntervalParamName = 98, 
		RULE_columnDescriptor = 99, RULE_joinCondition = 100, RULE_whereClause = 101, 
		RULE_groupByClause = 102, RULE_groupItemDefinition = 103, RULE_groupingSets = 104, 
		RULE_groupingSetsNotaionName = 105, RULE_groupWindowFunction = 106, RULE_groupWindowFunctionName = 107, 
		RULE_timeAttrColumn = 108, RULE_havingClause = 109, RULE_windowClause = 110, 
		RULE_namedWindow = 111, RULE_windowSpec = 112, RULE_matchRecognizeClause = 113, 
		RULE_orderByCaluse = 114, RULE_orderItemDefition = 115, RULE_limitClause = 116, 
		RULE_partitionByClause = 117, RULE_quantifiers = 118, RULE_measuresClause = 119, 
		RULE_patternDefination = 120, RULE_patternVariable = 121, RULE_outputMode = 122, 
		RULE_afterMatchStrategy = 123, RULE_patternVariablesDefination = 124, 
		RULE_windowFrame = 125, RULE_frameBound = 126, RULE_withinClause = 127, 
		RULE_expression = 128, RULE_booleanExpression = 129, RULE_predicate = 130, 
		RULE_likePredicate = 131, RULE_valueExpression = 132, RULE_primaryExpression = 133, 
		RULE_functionName = 134, RULE_functionParam = 135, RULE_dereferenceDefinition = 136, 
		RULE_correlationName = 137, RULE_qualifiedName = 138, RULE_timeIntervalExpression = 139, 
		RULE_errorCapturingMultiUnitsInterval = 140, RULE_multiUnitsInterval = 141, 
		RULE_errorCapturingUnitToUnitInterval = 142, RULE_unitToUnitInterval = 143, 
		RULE_intervalValue = 144, RULE_columnAlias = 145, RULE_tableAlias = 146, 
		RULE_errorCapturingIdentifier = 147, RULE_errorCapturingIdentifierExtra = 148, 
		RULE_identifierList = 149, RULE_identifierSeq = 150, RULE_identifier = 151, 
		RULE_unquotedIdentifier = 152, RULE_quotedIdentifier = 153, RULE_whenClause = 154, 
		RULE_catalogPath = 155, RULE_databasePath = 156, RULE_databasePathCreate = 157, 
		RULE_tablePathCreate = 158, RULE_tablePath = 159, RULE_uid = 160, RULE_withOption = 161, 
		RULE_ifNotExists = 162, RULE_ifExists = 163, RULE_tablePropertyList = 164, 
		RULE_tableProperty = 165, RULE_tablePropertyKey = 166, RULE_tablePropertyValue = 167, 
		RULE_logicalOperator = 168, RULE_comparisonOperator = 169, RULE_bitOperator = 170, 
		RULE_mathOperator = 171, RULE_unaryOperator = 172, RULE_constant = 173, 
		RULE_timePointLiteral = 174, RULE_stringLiteral = 175, RULE_decimalLiteral = 176, 
		RULE_booleanLiteral = 177, RULE_setQuantifier = 178, RULE_timePointUnit = 179, 
		RULE_timeIntervalUnit = 180, RULE_reservedKeywordsUsedAsFuncParam = 181, 
		RULE_reservedKeywordsUsedAsFuncName = 182, RULE_reservedKeywords = 183, 
		RULE_nonReservedKeywords = 184;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "statement", "sqlStatements", "sqlStatement", "emptyStatement", 
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
			"unquotedIdentifier", "quotedIdentifier", "whenClause", "catalogPath", 
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
			null, null, null, null, "'ADD'", "'ADMIN'", "'AFTER'", "'ANALYZE'", "'ASC'", 
			"'BEFORE'", "'BYTES'", "'CASCADE'", "'CATALOG'", "'CATALOGS'", "'CENTURY'", 
			"'CHAIN'", "'CHANGELOG_MODE'", "'CHARACTERS'", null, "'COMPACT'", "'COLUMNS'", 
			"'CONSTRAINTS'", "'CONSTRUCTOR'", "'CUMULATE'", "'DATA'", "'DATABASE'", 
			"'DATABASES'", "'DAYS'", "'DECADE'", "'DEFINED'", "'DESC'", "'DESCRIPTOR'", 
			"'DIV'", "'ENCODING'", "'ENFORCED'", "'ENGINE'", "'EPOCH'", "'ERROR'", 
			"'ESTIMATED_COST'", "'EXCEPTION'", "'EXCLUDE'", "'EXCLUDING'", "'EXTENDED'", 
			"'FILE'", "'FINAL'", "'FIRST'", "'FOLLOWING'", "'FORMAT'", "'FORTRAN'", 
			"'FOUND'", "'FRAC_SECOND'", "'FUNCTIONS'", "'GENERAL'", "'GENERATED'", 
			"'GO'", "'GOTO'", "'GRANTED'", "'HOP'", "'HOURS'", "'IF'", "'IGNORE'", 
			"'INCREMENT'", "'INPUT'", "'INVOKER'", "'JAR'", "'JARS'", "'JAVA'", "'JSON'", 
			"'JSON_EXECUTION_PLAN'", "'KEY'", "'KEY_MEMBER'", "'KEY_TYPE'", "'LABEL'", 
			"'LAST'", "'LENGTH'", "'LEVEL'", "'LOAD'", "'MAP'", "'MICROSECOND'", 
			"'MILLENNIUM'", "'MILLISECOND'", "'MINUTES'", "'MINVALUE'", "'MODIFY'", 
			"'MODULES'", "'MONTHS'", "'NANOSECOND'", "'NULLS'", "'NUMBER'", "'OPTION'", 
			"'OPTIONS'", "'ORDERING'", "'OUTPUT'", "'OVERWRITE'", "'OVERWRITING'", 
			"'PARTITIONED'", "'PARTITIONS'", "'PASSING'", "'PAST'", "'PATH'", "'PLACING'", 
			"'PLAN'", "'PRECEDING'", "'PRESERVE'", "'PRIOR'", "'PRIVILEGES'", "'PUBLIC'", 
			"'PYTHON'", "'PYTHON_FILES'", "'PYTHON_REQUIREMENTS'", "'PYTHON_DEPENDENCIES'", 
			"'PYTHON_JAR'", "'PYTHON_ARCHIVES'", "'PYTHON_PARAMETER'", "'QUARTER'", 
			"'RAW'", "'READ'", "'RELATIVE'", "'REMOVE'", "'RENAME'", "'REPLACE'", 
			"'RESPECT'", "'RESTART'", "'RESTRICT'", "'ROLE'", "'ROW_COUNT'", "'SCALA'", 
			"'SCALAR'", "'SCALE'", "'SCHEMA'", "'SECONDS'", "'SECTION'", "'SECURITY'", 
			"'SELF'", "'SERVER'", "'SERVER_NAME'", "'SESSION'", "'SETS'", "'SIMPLE'", 
			"'SIZE'", "'SLIDE'", "'SOURCE'", "'SPACE'", "'STATE'", "'STATEMENT'", 
			"'STEP'", "'STRING'", "'STRUCTURE'", "'STYLE'", "'TABLES'", "'TEMPORARY'", 
			"'TIMECOL'", "'TIMESTAMP_LTZ'", "'TIMESTAMPADD'", "'TIMESTAMPDIFF'", 
			"'TRANSFORM'", "'TUMBLE'", "'TYPE'", "'UNDER'", "'UNLOAD'", "'USAGE'", 
			"'USE'", "'UTF16'", "'UTF32'", "'UTF8'", "'VERSION'", "'VIEW'", "'VIEWS'", 
			"'VIRTUAL'", "'WATERMARK'", "'WATERMARKS'", "'WEEK'", "'WEEKS'", "'WORK'", 
			"'WRAPPER'", "'YEARS'", "'ZONE'", "'ABS'", "'ALL'", "'ALLOW'", "'ALTER'", 
			"'AND'", "'ANY'", "'ARE'", "'ARRAY'", "'AS'", "'ASYMMETRIC'", "'AT'", 
			"'AVG'", "'BEGIN'", "'BETWEEN'", "'BIGINT'", "'BINARY'", "'BIT'", "'BLOB'", 
			"'BOOLEAN'", "'BOTH'", "'BY'", "'CALL'", "'CALLED'", "'CASCADED'", "'CASE'", 
			"'CAST'", "'CEIL'", "'CHAR'", "'CHARACTER'", "'CHECK'", "'CLOB'", "'CLOSE'", 
			"'COALESCE'", "'COLLATE'", "'COLLECT'", "'COLUMN'", "'COMMIT'", "'CONNECT'", 
			"'CONSTRAINT'", "'CONTAINS'", "'CONVERT'", "'COUNT'", "'CREATE'", "'CROSS'", 
			"'CUBE'", "'CURRENT'", "'CURSOR'", "'CYCLE'", "'DATE'", "'DATETIME'", 
			"'DAY'", "'DEC'", "'DECIMAL'", "'DECLARE'", "'DEFAULT'", "'DEFINE'", 
			"'DELETE'", "'DESCRIBE'", "'DISTINCT'", "'DOUBLE'", "'DROP'", "'EACH'", 
			"'ELSE'", "'END'", "'EQUALS'", "'ESCAPE'", "'EXCEPT'", "'EXECUTE'", "'EXISTS'", 
			"'EXPLAIN'", "'EXTERNAL'", "'EXTRACT'", "'FALSE'", "'FLOAT'", "'FOR'", 
			"'FROM'", "'FULL'", "'FUNCTION'", "'GLOBAL'", "'GRANT'", "'GROUP'", "'GROUPING'", 
			"'GROUPS'", "'HAVING'", "'HOUR'", "'IMPORT'", "'IN'", "'INCLUDING'", 
			"'INNER'", "'INOUT'", "'INSERT'", "'INT'", "'INTEGER'", "'INTERSECT'", 
			"'INTERVAL'", "'INTO'", "'IS'", "'JOIN'", "'LAG'", "'LANGUAGE'", "'LATERAL'", 
			"'LEADING'", "'LEFT'", "'LIKE'", "'LIMIT'", "'LOCAL'", "'MATCH'", "'MATCH_RECOGNIZE'", 
			"'MEASURES'", "'MERGE'", "'METADATA'", "'MINUS'", "'MINUTE'", "'MODIFIES'", 
			"'MODULE'", "'MONTH'", "'MULTISET'", "'NATURAL'", "'NEXT'", "'NO'", "'NONE'", 
			"'NOT'", "'NULL'", "'NUMERIC'", "'OF'", "'OFFSET'", "'ON'", "'ONE'", 
			"'OR'", "'ORDER'", "'OUT'", "'OUTER'", "'OVER'", "'OVERLAY'", "'PARTITION'", 
			"'PATTERN'", "'PER'", "'PERCENT'", "'PERIOD'", "'POSITION'", "'POWER'", 
			"'PRIMARY'", "'RANGE'", "'RANK'", "'RESET'", "'REVOKE'", "'RIGHT'", "'RLIKE'", 
			"'ROLLBACK'", "'ROLLUP'", "'ROW'", "'ROWS'", "'SECOND'", "'SELECT'", 
			"'SET'", "'SHOW'", "'SIMILAR'", "'SKIP'", "'SMALLINT'", "'START'", "'STATIC'", 
			"'SUBSTRING'", "'SUM'", "'SYMMETRIC'", "'SYSTEM'", "'SYSTEM_TIME'", "'SYSTEM_USER'", 
			"'TABLE'", "'TABLESAMPLE'", "'THEN'", "'TIME'", "'TIMESTAMP'", "'TIMESTAMP(3)'", 
			"'TIMESTAMP(6)'", "'TIMESTAMP(9)'", "'TINYINT'", "'TO'", "'TRAILING'", 
			"'TRUE'", "'TRUNCATE'", "'UNION'", "'UNIQUE'", "'UNKNOWN'", "'UNNEST'", 
			"'UPPER'", "'UPSERT'", "'USER'", "'USING'", "'VALUE'", "'VALUES'", "'VARBINARY'", 
			"'VARCHAR'", "'WHEN'", "'WHERE'", "'WINDOW'", "'WITH'", "'WITHIN'", "'WITHOUT'", 
			"'YEAR'", "'='", "'>'", "'<'", "'!'", "'~'", "'|'", "'&'", "'^'", "'.'", 
			"'['", "']'", "'('", "')'", "'{'", "'}'", "','", "';'", "'@'", "'''", 
			"'\"'", "'`'", "':'", "'*'", "'_'", "'-'", "'+'", "'%'", "'||'", "'--'", 
			"'/'", "'?'", "'=>'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "SPACE", "COMMENT_INPUT", "LINE_COMMENT", "KW_ADD", "KW_ADMIN", 
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
			"KW_TABLES", "KW_TEMPORARY", "KW_TIMECOL", "KW_TIMESTAMP_LTZ", "KW_TIMESTAMPADD", 
			"KW_TIMESTAMPDIFF", "KW_TRANSFORM", "KW_TUMBLE", "KW_TYPE", "KW_UNDER", 
			"KW_UNLOAD", "KW_USAGE", "KW_USE", "KW_UTF16", "KW_UTF32", "KW_UTF8", 
			"KW_VERSION", "KW_VIEW", "KW_VIEWS", "KW_VIRTUAL", "KW_WATERMARK", "KW_WATERMARKS", 
			"KW_WEEK", "KW_WEEKS", "KW_WORK", "KW_WRAPPER", "KW_YEARS", "KW_ZONE", 
			"KW_ABS", "KW_ALL", "KW_ALLOW", "KW_ALTER", "KW_AND", "KW_ANY", "KW_ARE", 
			"KW_ARRAY", "KW_AS", "KW_ASYMMETRIC", "KW_AT", "KW_AVG", "KW_BEGIN", 
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
			setState(370);
			statement();
			setState(371);
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
			setState(373);
			sqlStatements();
			setState(374);
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
			setState(380);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==KW_ADD || _la==KW_DESC || _la==KW_LOAD || _la==KW_REMOVE || ((((_la - 159)) & ~0x3f) == 0 && ((1L << (_la - 159)) & ((1L << (KW_UNLOAD - 159)) | (1L << (KW_USE - 159)) | (1L << (KW_ALTER - 159)) | (1L << (KW_BEGIN - 159)) | (1L << (KW_CREATE - 159)))) != 0) || ((((_la - 234)) & ~0x3f) == 0 && ((1L << (_la - 234)) & ((1L << (KW_DESCRIBE - 234)) | (1L << (KW_DROP - 234)) | (1L << (KW_EXECUTE - 234)) | (1L << (KW_EXPLAIN - 234)) | (1L << (KW_INSERT - 234)))) != 0) || ((((_la - 321)) & ~0x3f) == 0 && ((1L << (_la - 321)) & ((1L << (KW_RESET - 321)) | (1L << (KW_SELECT - 321)) | (1L << (KW_SET - 321)) | (1L << (KW_SHOW - 321)) | (1L << (KW_VALUES - 321)) | (1L << (KW_WITH - 321)))) != 0) || _la==LR_BRACKET || _la==SEMICOLON) {
				{
				setState(378);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
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
					setState(376);
					sqlStatement();
					}
					break;
				case SEMICOLON:
					{
					setState(377);
					emptyStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(382);
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
		enterRule(_localctx, 6, RULE_sqlStatement);
		try {
			setState(427);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_ALTER:
			case KW_CREATE:
			case KW_DROP:
				enterOuterAlt(_localctx, 1);
				{
				setState(383);
				ddlStatement();
				setState(385);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
				case 1:
					{
					setState(384);
					match(SEMICOLON);
					}
					break;
				}
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
				setState(387);
				dmlStatement();
				setState(389);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
				case 1:
					{
					setState(388);
					match(SEMICOLON);
					}
					break;
				}
				}
				break;
			case KW_DESC:
			case KW_DESCRIBE:
				enterOuterAlt(_localctx, 3);
				{
				setState(391);
				describeStatement();
				setState(393);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
				case 1:
					{
					setState(392);
					match(SEMICOLON);
					}
					break;
				}
				}
				break;
			case KW_EXPLAIN:
				enterOuterAlt(_localctx, 4);
				{
				setState(395);
				explainStatement();
				setState(397);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
				case 1:
					{
					setState(396);
					match(SEMICOLON);
					}
					break;
				}
				}
				break;
			case KW_USE:
				enterOuterAlt(_localctx, 5);
				{
				setState(399);
				useStatement();
				setState(401);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
				case 1:
					{
					setState(400);
					match(SEMICOLON);
					}
					break;
				}
				}
				break;
			case KW_SHOW:
				enterOuterAlt(_localctx, 6);
				{
				setState(403);
				showStatememt();
				setState(405);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
				case 1:
					{
					setState(404);
					match(SEMICOLON);
					}
					break;
				}
				}
				break;
			case KW_LOAD:
				enterOuterAlt(_localctx, 7);
				{
				setState(407);
				loadStatement();
				setState(409);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
				case 1:
					{
					setState(408);
					match(SEMICOLON);
					}
					break;
				}
				}
				break;
			case KW_UNLOAD:
				enterOuterAlt(_localctx, 8);
				{
				setState(411);
				unloadStatememt();
				setState(413);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
				case 1:
					{
					setState(412);
					match(SEMICOLON);
					}
					break;
				}
				}
				break;
			case KW_SET:
				enterOuterAlt(_localctx, 9);
				{
				setState(415);
				setStatememt();
				setState(417);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
				case 1:
					{
					setState(416);
					match(SEMICOLON);
					}
					break;
				}
				}
				break;
			case KW_RESET:
				enterOuterAlt(_localctx, 10);
				{
				setState(419);
				resetStatememt();
				setState(421);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
				case 1:
					{
					setState(420);
					match(SEMICOLON);
					}
					break;
				}
				}
				break;
			case KW_ADD:
			case KW_REMOVE:
				enterOuterAlt(_localctx, 11);
				{
				setState(423);
				jarStatememt();
				setState(425);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
				case 1:
					{
					setState(424);
					match(SEMICOLON);
					}
					break;
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

	public static class EmptyStatementContext extends ParserRuleContext {
		public TerminalNode SEMICOLON() { return getToken(FlinkSQLParser.SEMICOLON, 0); }
		public EmptyStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_emptyStatement; }
	}

	public final EmptyStatementContext emptyStatement() throws RecognitionException {
		EmptyStatementContext _localctx = new EmptyStatementContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_emptyStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(429);
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
		enterRule(_localctx, 10, RULE_ddlStatement);
		try {
			setState(445);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(431);
				createTable();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(432);
				createDatabase();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(433);
				createView();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(434);
				createFunction();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(435);
				createCatalog();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(436);
				alterTable();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(437);
				alertView();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(438);
				alterDatabase();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(439);
				alterFunction();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(440);
				dropCatalog();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(441);
				dropTable();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(442);
				dropDatabase();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(443);
				dropView();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(444);
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
		enterRule(_localctx, 12, RULE_dmlStatement);
		try {
			setState(449);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_SELECT:
			case KW_VALUES:
			case KW_WITH:
			case LR_BRACKET:
				enterOuterAlt(_localctx, 1);
				{
				setState(447);
				queryStatement(0);
				}
				break;
			case KW_BEGIN:
			case KW_EXECUTE:
			case KW_INSERT:
				enterOuterAlt(_localctx, 2);
				{
				setState(448);
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
		enterRule(_localctx, 14, RULE_describeStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(451);
			_la = _input.LA(1);
			if ( !(_la==KW_DESC || _la==KW_DESCRIBE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(452);
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
		enterRule(_localctx, 16, RULE_explainStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(454);
			match(KW_EXPLAIN);
			setState(458);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_CHANGELOG_MODE:
			case KW_ESTIMATED_COST:
			case KW_JSON_EXECUTION_PLAN:
				{
				setState(455);
				explainDetails();
				}
				break;
			case KW_PLAN:
				{
				setState(456);
				match(KW_PLAN);
				setState(457);
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
			setState(463);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				{
				setState(460);
				dmlStatement();
				}
				break;
			case 2:
				{
				setState(461);
				insertSimpleStatement();
				}
				break;
			case 3:
				{
				setState(462);
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
		enterRule(_localctx, 18, RULE_explainDetails);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(465);
			explainDetail();
			setState(470);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(466);
				match(COMMA);
				setState(467);
				explainDetail();
				}
				}
				setState(472);
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
		enterRule(_localctx, 20, RULE_explainDetail);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(473);
			_la = _input.LA(1);
			if ( !(((((_la - 16)) & ~0x3f) == 0 && ((1L << (_la - 16)) & ((1L << (KW_CHANGELOG_MODE - 16)) | (1L << (KW_ESTIMATED_COST - 16)) | (1L << (KW_JSON_EXECUTION_PLAN - 16)))) != 0)) ) {
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
		enterRule(_localctx, 22, RULE_useStatement);
		try {
			setState(481);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(475);
				match(KW_USE);
				setState(476);
				match(KW_CATALOG);
				setState(477);
				catalogPath();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(478);
				match(KW_USE);
				setState(479);
				databasePath();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(480);
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
		enterRule(_localctx, 24, RULE_useModuleStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(483);
			match(KW_USE);
			setState(484);
			match(KW_MODULES);
			setState(485);
			uid();
			setState(490);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(486);
				match(COMMA);
				setState(487);
				uid();
				}
				}
				setState(492);
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
		enterRule(_localctx, 26, RULE_showStatememt);
		int _la;
		try {
			setState(528);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,26,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(493);
				match(KW_SHOW);
				setState(494);
				_la = _input.LA(1);
				if ( !(((((_la - 13)) & ~0x3f) == 0 && ((1L << (_la - 13)) & ((1L << (KW_CATALOGS - 13)) | (1L << (KW_DATABASES - 13)) | (1L << (KW_JARS - 13)))) != 0) || _la==KW_VIEWS) ) {
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
				setState(495);
				match(KW_SHOW);
				setState(496);
				match(KW_CURRENT);
				setState(497);
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
				setState(498);
				match(KW_SHOW);
				setState(499);
				match(KW_TABLES);
				setState(502);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_FROM || _la==KW_IN) {
					{
					setState(500);
					_la = _input.LA(1);
					if ( !(_la==KW_FROM || _la==KW_IN) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(501);
					tablePath();
					}
				}

				setState(505);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_LIKE || _la==KW_NOT) {
					{
					setState(504);
					likePredicate();
					}
				}

				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(507);
				match(KW_SHOW);
				setState(508);
				match(KW_COLUMNS);
				setState(509);
				_la = _input.LA(1);
				if ( !(_la==KW_FROM || _la==KW_IN) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(510);
				uid();
				setState(512);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_LIKE || _la==KW_NOT) {
					{
					setState(511);
					likePredicate();
					}
				}

				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(514);
				match(KW_SHOW);
				setState(515);
				match(KW_CREATE);
				setState(516);
				_la = _input.LA(1);
				if ( !(_la==KW_VIEW || _la==KW_TABLE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(517);
				uid();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(518);
				match(KW_SHOW);
				setState(520);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_USER) {
					{
					setState(519);
					match(KW_USER);
					}
				}

				setState(522);
				match(KW_FUNCTIONS);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(523);
				match(KW_SHOW);
				setState(525);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_FULL) {
					{
					setState(524);
					match(KW_FULL);
					}
				}

				setState(527);
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
		enterRule(_localctx, 28, RULE_loadStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(530);
			match(KW_LOAD);
			setState(531);
			match(KW_MODULE);
			setState(532);
			uid();
			setState(535);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,27,_ctx) ) {
			case 1:
				{
				setState(533);
				match(KW_WITH);
				setState(534);
				tablePropertyList();
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
		enterRule(_localctx, 30, RULE_unloadStatememt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(537);
			match(KW_UNLOAD);
			setState(538);
			match(KW_MODULE);
			setState(539);
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
		enterRule(_localctx, 32, RULE_setStatememt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(541);
			match(KW_SET);
			setState(543);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,28,_ctx) ) {
			case 1:
				{
				setState(542);
				tableProperty();
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
		enterRule(_localctx, 34, RULE_resetStatememt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(545);
			match(KW_RESET);
			setState(547);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,29,_ctx) ) {
			case 1:
				{
				setState(546);
				tablePropertyKey();
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
		enterRule(_localctx, 36, RULE_jarStatememt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(549);
			_la = _input.LA(1);
			if ( !(_la==KW_ADD || _la==KW_REMOVE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(550);
			match(KW_JAR);
			setState(551);
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
		enterRule(_localctx, 38, RULE_dtFilePath);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(554); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(553);
				match(SLASH_TEXT);
				}
				}
				setState(556); 
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
		enterRule(_localctx, 40, RULE_createTable);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(560);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,31,_ctx) ) {
			case 1:
				{
				setState(558);
				simpleCreateTable();
				}
				break;
			case 2:
				{
				setState(559);
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
		enterRule(_localctx, 42, RULE_simpleCreateTable);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(562);
			match(KW_CREATE);
			setState(564);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_TEMPORARY) {
				{
				setState(563);
				match(KW_TEMPORARY);
				}
			}

			setState(566);
			match(KW_TABLE);
			setState(568);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				{
				setState(567);
				ifNotExists();
				}
				break;
			}
			setState(570);
			tablePathCreate();
			setState(571);
			match(LR_BRACKET);
			setState(572);
			columnOptionDefinition();
			setState(577);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,34,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(573);
					match(COMMA);
					setState(574);
					columnOptionDefinition();
					}
					} 
				}
				setState(579);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,34,_ctx);
			}
			setState(582);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,35,_ctx) ) {
			case 1:
				{
				setState(580);
				match(COMMA);
				setState(581);
				watermarkDefinition();
				}
				break;
			}
			setState(586);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,36,_ctx) ) {
			case 1:
				{
				setState(584);
				match(COMMA);
				setState(585);
				tableConstraint();
				}
				break;
			}
			setState(590);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(588);
				match(COMMA);
				setState(589);
				selfDefinitionClause();
				}
			}

			setState(592);
			match(RR_BRACKET);
			setState(594);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_COMMENT) {
				{
				setState(593);
				commentSpec();
				}
			}

			setState(597);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_PARTITIONED) {
				{
				setState(596);
				partitionDefinition();
				}
			}

			setState(599);
			withOption();
			setState(601);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_LIKE) {
				{
				setState(600);
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
		enterRule(_localctx, 44, RULE_createTableAsSelect);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(603);
			match(KW_CREATE);
			setState(604);
			match(KW_TABLE);
			setState(606);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,41,_ctx) ) {
			case 1:
				{
				setState(605);
				ifNotExists();
				}
				break;
			}
			setState(608);
			tablePathCreate();
			setState(609);
			withOption();
			setState(612);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_AS) {
				{
				setState(610);
				match(KW_AS);
				setState(611);
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
		enterRule(_localctx, 46, RULE_columnOptionDefinition);
		try {
			setState(617);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,43,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(614);
				physicalColumnDefinition();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(615);
				metadataColumnDefinition();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(616);
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
		enterRule(_localctx, 48, RULE_physicalColumnDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(619);
			columnName();
			setState(620);
			columnType();
			setState(622);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_CONSTRAINT || ((((_la - 298)) & ~0x3f) == 0 && ((1L << (_la - 298)) & ((1L << (KW_NOT - 298)) | (1L << (KW_NULL - 298)) | (1L << (KW_PRIMARY - 298)))) != 0)) {
				{
				setState(621);
				columnConstraint();
				}
			}

			setState(625);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_COMMENT) {
				{
				setState(624);
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
		enterRule(_localctx, 50, RULE_columnName);
		try {
			setState(629);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,46,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(627);
				uid();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(628);
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
		enterRule(_localctx, 52, RULE_columnNameList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(631);
			match(LR_BRACKET);
			setState(632);
			columnName();
			setState(637);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(633);
				match(COMMA);
				setState(634);
				columnName();
				}
				}
				setState(639);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(640);
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
		enterRule(_localctx, 54, RULE_columnType);
		int _la;
		try {
			setState(715);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_BOOLEAN:
			case KW_DATE:
			case KW_NULL:
				enterOuterAlt(_localctx, 1);
				{
				setState(642);
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
				setState(643);
				((ColumnTypeContext)_localctx).typeName = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==KW_BYTES || ((((_la - 146)) & ~0x3f) == 0 && ((1L << (_la - 146)) & ((1L << (KW_STRING - 146)) | (1L << (KW_TIMESTAMP_LTZ - 146)) | (1L << (KW_BIGINT - 146)) | (1L << (KW_BINARY - 146)) | (1L << (KW_CHAR - 146)))) != 0) || ((((_la - 226)) & ~0x3f) == 0 && ((1L << (_la - 226)) & ((1L << (KW_DATETIME - 226)) | (1L << (KW_INT - 226)) | (1L << (KW_INTEGER - 226)))) != 0) || ((((_la - 335)) & ~0x3f) == 0 && ((1L << (_la - 335)) & ((1L << (KW_SMALLINT - 335)) | (1L << (KW_TIME - 335)) | (1L << (KW_TINYINT - 335)) | (1L << (KW_VARBINARY - 335)) | (1L << (KW_VARCHAR - 335)))) != 0)) ) {
					((ColumnTypeContext)_localctx).typeName = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(645);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LR_BRACKET) {
					{
					setState(644);
					lengthOneDimension();
					}
				}

				}
				break;
			case KW_TIMESTAMP:
				enterOuterAlt(_localctx, 3);
				{
				setState(647);
				((ColumnTypeContext)_localctx).typeName = match(KW_TIMESTAMP);
				setState(649);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LR_BRACKET) {
					{
					setState(648);
					lengthOneDimension();
					}
				}

				setState(657);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_WITH || _la==KW_WITHOUT) {
					{
					setState(651);
					_la = _input.LA(1);
					if ( !(_la==KW_WITH || _la==KW_WITHOUT) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(653);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==KW_LOCAL) {
						{
						setState(652);
						match(KW_LOCAL);
						}
					}

					setState(655);
					match(KW_TIME);
					setState(656);
					match(KW_ZONE);
					}
				}

				}
				break;
			case KW_TIMESTAMP_3:
				enterOuterAlt(_localctx, 4);
				{
				setState(659);
				((ColumnTypeContext)_localctx).typeName = match(KW_TIMESTAMP_3);
				setState(661);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LR_BRACKET) {
					{
					setState(660);
					lengthOneDimension();
					}
				}

				setState(669);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_WITH || _la==KW_WITHOUT) {
					{
					setState(663);
					_la = _input.LA(1);
					if ( !(_la==KW_WITH || _la==KW_WITHOUT) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(665);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==KW_LOCAL) {
						{
						setState(664);
						match(KW_LOCAL);
						}
					}

					setState(667);
					match(KW_TIME);
					setState(668);
					match(KW_ZONE);
					}
				}

				}
				break;
			case KW_TIMESTAMP_6:
				enterOuterAlt(_localctx, 5);
				{
				setState(671);
				((ColumnTypeContext)_localctx).typeName = match(KW_TIMESTAMP_6);
				setState(673);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LR_BRACKET) {
					{
					setState(672);
					lengthOneDimension();
					}
				}

				setState(681);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_WITH || _la==KW_WITHOUT) {
					{
					setState(675);
					_la = _input.LA(1);
					if ( !(_la==KW_WITH || _la==KW_WITHOUT) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(677);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==KW_LOCAL) {
						{
						setState(676);
						match(KW_LOCAL);
						}
					}

					setState(679);
					match(KW_TIME);
					setState(680);
					match(KW_ZONE);
					}
				}

				}
				break;
			case KW_TIMESTAMP_9:
				enterOuterAlt(_localctx, 6);
				{
				setState(683);
				((ColumnTypeContext)_localctx).typeName = match(KW_TIMESTAMP_9);
				setState(685);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LR_BRACKET) {
					{
					setState(684);
					lengthOneDimension();
					}
				}

				setState(693);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_WITH || _la==KW_WITHOUT) {
					{
					setState(687);
					_la = _input.LA(1);
					if ( !(_la==KW_WITH || _la==KW_WITHOUT) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(689);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==KW_LOCAL) {
						{
						setState(688);
						match(KW_LOCAL);
						}
					}

					setState(691);
					match(KW_TIME);
					setState(692);
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
				setState(695);
				((ColumnTypeContext)_localctx).typeName = _input.LT(1);
				_la = _input.LA(1);
				if ( !(((((_la - 228)) & ~0x3f) == 0 && ((1L << (_la - 228)) & ((1L << (KW_DEC - 228)) | (1L << (KW_DECIMAL - 228)) | (1L << (KW_DOUBLE - 228)) | (1L << (KW_FLOAT - 228)))) != 0) || _la==KW_NUMERIC) ) {
					((ColumnTypeContext)_localctx).typeName = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(697);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LR_BRACKET) {
					{
					setState(696);
					lengthTwoOptionalDimension();
					}
				}

				}
				break;
			case KW_ARRAY:
			case KW_MULTISET:
				enterOuterAlt(_localctx, 8);
				{
				setState(699);
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
				setState(701);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LESS_SYMBOL) {
					{
					setState(700);
					lengthOneTypeDimension();
					}
				}

				}
				break;
			case KW_MAP:
				enterOuterAlt(_localctx, 9);
				{
				setState(703);
				((ColumnTypeContext)_localctx).type = match(KW_MAP);
				setState(705);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LESS_SYMBOL) {
					{
					setState(704);
					mapTypeDimension();
					}
				}

				}
				break;
			case KW_ROW:
				enterOuterAlt(_localctx, 10);
				{
				setState(707);
				((ColumnTypeContext)_localctx).type = match(KW_ROW);
				setState(709);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LESS_SYMBOL) {
					{
					setState(708);
					rowTypeDimension();
					}
				}

				}
				break;
			case KW_RAW:
				enterOuterAlt(_localctx, 11);
				{
				setState(711);
				((ColumnTypeContext)_localctx).type = match(KW_RAW);
				setState(713);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LR_BRACKET) {
					{
					setState(712);
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
		enterRule(_localctx, 56, RULE_lengthOneDimension);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(717);
			match(LR_BRACKET);
			setState(718);
			decimalLiteral();
			setState(719);
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
		enterRule(_localctx, 58, RULE_lengthTwoOptionalDimension);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(721);
			match(LR_BRACKET);
			setState(722);
			decimalLiteral();
			setState(725);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(723);
				match(COMMA);
				setState(724);
				decimalLiteral();
				}
			}

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
		enterRule(_localctx, 60, RULE_lengthTwoStringDimension);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(729);
			match(LR_BRACKET);
			setState(730);
			stringLiteral();
			setState(733);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(731);
				match(COMMA);
				setState(732);
				stringLiteral();
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

	public static class LengthOneTypeDimensionContext extends ParserRuleContext {
		public TerminalNode LESS_SYMBOL() { return getToken(FlinkSQLParser.LESS_SYMBOL, 0); }
		public ColumnTypeContext columnType() {
			return getRuleContext(ColumnTypeContext.class,0);
		}
		public TerminalNode GREATER_SYMBOL() { return getToken(FlinkSQLParser.GREATER_SYMBOL, 0); }
		public LengthOneTypeDimensionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lengthOneTypeDimension; }
	}

	public final LengthOneTypeDimensionContext lengthOneTypeDimension() throws RecognitionException {
		LengthOneTypeDimensionContext _localctx = new LengthOneTypeDimensionContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_lengthOneTypeDimension);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(737);
			match(LESS_SYMBOL);
			setState(738);
			columnType();
			setState(739);
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
		enterRule(_localctx, 64, RULE_mapTypeDimension);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(741);
			match(LESS_SYMBOL);
			setState(742);
			columnType();
			{
			setState(743);
			match(COMMA);
			setState(744);
			columnType();
			}
			setState(746);
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
		public RowTypeDimensionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rowTypeDimension; }
	}

	public final RowTypeDimensionContext rowTypeDimension() throws RecognitionException {
		RowTypeDimensionContext _localctx = new RowTypeDimensionContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_rowTypeDimension);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(748);
			match(LESS_SYMBOL);
			setState(749);
			columnName();
			setState(750);
			columnType();
			setState(757);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(751);
				match(COMMA);
				setState(752);
				columnName();
				setState(753);
				columnType();
				}
				}
				setState(759);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(760);
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
		enterRule(_localctx, 68, RULE_columnConstraint);
		int _la;
		try {
			setState(776);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_CONSTRAINT:
			case KW_PRIMARY:
				enterOuterAlt(_localctx, 1);
				{
				setState(764);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_CONSTRAINT) {
					{
					setState(762);
					match(KW_CONSTRAINT);
					setState(763);
					constraintName();
					}
				}

				setState(766);
				match(KW_PRIMARY);
				setState(767);
				match(KW_KEY);
				setState(770);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(768);
					match(KW_NOT);
					setState(769);
					match(KW_ENFORCED);
					}
				}

				}
				break;
			case KW_NOT:
			case KW_NULL:
				enterOuterAlt(_localctx, 2);
				{
				setState(773);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(772);
					match(KW_NOT);
					}
				}

				setState(775);
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
		enterRule(_localctx, 70, RULE_commentSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(778);
			match(KW_COMMENT);
			setState(779);
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
		enterRule(_localctx, 72, RULE_metadataColumnDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(781);
			columnName();
			setState(782);
			columnType();
			setState(783);
			match(KW_METADATA);
			setState(786);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_FROM) {
				{
				setState(784);
				match(KW_FROM);
				setState(785);
				metadataKey();
				}
			}

			setState(789);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_VIRTUAL) {
				{
				setState(788);
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
		enterRule(_localctx, 74, RULE_metadataKey);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(791);
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
		enterRule(_localctx, 76, RULE_computedColumnDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(793);
			columnName();
			setState(794);
			match(KW_AS);
			setState(795);
			computedColumnExpression();
			setState(797);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_COMMENT) {
				{
				setState(796);
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
		enterRule(_localctx, 78, RULE_computedColumnExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(799);
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
		enterRule(_localctx, 80, RULE_watermarkDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(801);
			match(KW_WATERMARK);
			setState(802);
			match(KW_FOR);
			setState(803);
			expression();
			setState(804);
			match(KW_AS);
			setState(805);
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
		enterRule(_localctx, 82, RULE_tableConstraint);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(809);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_CONSTRAINT) {
				{
				setState(807);
				match(KW_CONSTRAINT);
				setState(808);
				constraintName();
				}
			}

			setState(811);
			match(KW_PRIMARY);
			setState(812);
			match(KW_KEY);
			setState(813);
			columnNameList();
			setState(814);
			match(KW_NOT);
			setState(815);
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
		enterRule(_localctx, 84, RULE_constraintName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(817);
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
		enterRule(_localctx, 86, RULE_selfDefinitionClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(819);
			match(KW_PERIOD);
			setState(820);
			match(KW_FOR);
			setState(821);
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
		enterRule(_localctx, 88, RULE_partitionDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(823);
			match(KW_PARTITIONED);
			setState(824);
			match(KW_BY);
			setState(825);
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
		enterRule(_localctx, 90, RULE_transformList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(827);
			match(LR_BRACKET);
			setState(828);
			transform();
			setState(833);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(829);
				match(COMMA);
				setState(830);
				transform();
				}
				}
				setState(835);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(836);
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
		enterRule(_localctx, 92, RULE_transform);
		int _la;
		try {
			setState(851);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,80,_ctx) ) {
			case 1:
				_localctx = new IdentityTransformContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(838);
				qualifiedName();
				}
				break;
			case 2:
				_localctx = new ApplyTransformContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(839);
				((ApplyTransformContext)_localctx).transformName = identifier();
				setState(840);
				match(LR_BRACKET);
				setState(841);
				transformArgument();
				setState(846);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(842);
					match(COMMA);
					setState(843);
					transformArgument();
					}
					}
					setState(848);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(849);
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
		enterRule(_localctx, 94, RULE_transformArgument);
		try {
			setState(855);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,81,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(853);
				qualifiedName();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(854);
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
		enterRule(_localctx, 96, RULE_likeDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(857);
			match(KW_LIKE);
			setState(858);
			tablePath();
			setState(867);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,83,_ctx) ) {
			case 1:
				{
				setState(859);
				match(LR_BRACKET);
				setState(863);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==KW_EXCLUDING || _la==KW_OVERWRITING || _la==KW_INCLUDING) {
					{
					{
					setState(860);
					likeOption();
					}
					}
					setState(865);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(866);
				match(RR_BRACKET);
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
		enterRule(_localctx, 98, RULE_likeOption);
		int _la;
		try {
			setState(873);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,84,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(869);
				_la = _input.LA(1);
				if ( !(_la==KW_EXCLUDING || _la==KW_INCLUDING) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(870);
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
				setState(871);
				_la = _input.LA(1);
				if ( !(_la==KW_EXCLUDING || _la==KW_OVERWRITING || _la==KW_INCLUDING) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(872);
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
		enterRule(_localctx, 100, RULE_createCatalog);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(875);
			match(KW_CREATE);
			setState(876);
			match(KW_CATALOG);
			setState(877);
			uid();
			setState(878);
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
		public WithOptionContext withOption() {
			return getRuleContext(WithOptionContext.class,0);
		}
		public IfNotExistsContext ifNotExists() {
			return getRuleContext(IfNotExistsContext.class,0);
		}
		public CommentSpecContext commentSpec() {
			return getRuleContext(CommentSpecContext.class,0);
		}
		public CreateDatabaseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createDatabase; }
	}

	public final CreateDatabaseContext createDatabase() throws RecognitionException {
		CreateDatabaseContext _localctx = new CreateDatabaseContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_createDatabase);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(880);
			match(KW_CREATE);
			setState(881);
			match(KW_DATABASE);
			setState(883);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,85,_ctx) ) {
			case 1:
				{
				setState(882);
				ifNotExists();
				}
				break;
			}
			setState(885);
			databasePathCreate();
			setState(887);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_COMMENT) {
				{
				setState(886);
				commentSpec();
				}
			}

			setState(889);
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
		enterRule(_localctx, 104, RULE_createView);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(891);
			match(KW_CREATE);
			setState(893);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_TEMPORARY) {
				{
				setState(892);
				match(KW_TEMPORARY);
				}
			}

			setState(895);
			match(KW_VIEW);
			setState(897);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,88,_ctx) ) {
			case 1:
				{
				setState(896);
				ifNotExists();
				}
				break;
			}
			setState(899);
			uid();
			setState(901);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LR_BRACKET) {
				{
				setState(900);
				columnNameList();
				}
			}

			setState(904);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_COMMENT) {
				{
				setState(903);
				commentSpec();
				}
			}

			setState(906);
			match(KW_AS);
			setState(907);
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
		enterRule(_localctx, 106, RULE_createFunction);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(909);
			match(KW_CREATE);
			setState(913);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,91,_ctx) ) {
			case 1:
				{
				setState(910);
				match(KW_TEMPORARY);
				}
				break;
			case 2:
				{
				setState(911);
				match(KW_TEMPORARY);
				setState(912);
				match(KW_SYSTEM);
				}
				break;
			}
			setState(915);
			match(KW_FUNCTION);
			setState(917);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,92,_ctx) ) {
			case 1:
				{
				setState(916);
				ifNotExists();
				}
				break;
			}
			setState(919);
			functionName();
			setState(920);
			match(KW_AS);
			setState(921);
			identifier();
			setState(924);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_LANGUAGE) {
				{
				setState(922);
				match(KW_LANGUAGE);
				setState(923);
				_la = _input.LA(1);
				if ( !(((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (KW_JAVA - 66)) | (1L << (KW_PYTHON - 66)) | (1L << (KW_SCALA - 66)))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(927);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_USING) {
				{
				setState(926);
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
		enterRule(_localctx, 108, RULE_usingClause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(929);
			match(KW_USING);
			setState(930);
			match(KW_JAR);
			setState(931);
			jarFileName();
			setState(937);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(932);
				match(COMMA);
				setState(933);
				match(KW_JAR);
				setState(934);
				jarFileName();
				}
				}
				setState(939);
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
		enterRule(_localctx, 110, RULE_jarFileName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(940);
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
		enterRule(_localctx, 112, RULE_alterTable);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(942);
			match(KW_ALTER);
			setState(943);
			match(KW_TABLE);
			setState(945);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,96,_ctx) ) {
			case 1:
				{
				setState(944);
				ifExists();
				}
				break;
			}
			setState(947);
			tablePath();
			setState(953);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,97,_ctx) ) {
			case 1:
				{
				setState(948);
				renameDefinition();
				}
				break;
			case 2:
				{
				setState(949);
				setKeyValueDefinition();
				}
				break;
			case 3:
				{
				setState(950);
				addConstraint();
				}
				break;
			case 4:
				{
				setState(951);
				dropConstraint();
				}
				break;
			case 5:
				{
				setState(952);
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
		enterRule(_localctx, 114, RULE_renameDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(955);
			match(KW_RENAME);
			setState(957);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << KW_ADD) | (1L << KW_ADMIN) | (1L << KW_AFTER) | (1L << KW_ANALYZE) | (1L << KW_ASC) | (1L << KW_BEFORE) | (1L << KW_BYTES) | (1L << KW_CASCADE) | (1L << KW_CATALOG) | (1L << KW_CATALOGS) | (1L << KW_CENTURY) | (1L << KW_CHAIN) | (1L << KW_CHANGELOG_MODE) | (1L << KW_CHARACTERS) | (1L << KW_COMMENT) | (1L << KW_COMPACT) | (1L << KW_COLUMNS) | (1L << KW_CONSTRAINTS) | (1L << KW_CONSTRUCTOR) | (1L << KW_CUMULATE) | (1L << KW_DATA) | (1L << KW_DATABASE) | (1L << KW_DATABASES) | (1L << KW_DAYS) | (1L << KW_DECADE) | (1L << KW_DEFINED) | (1L << KW_DESC) | (1L << KW_DESCRIPTOR) | (1L << KW_DIV) | (1L << KW_ENCODING) | (1L << KW_ENFORCED) | (1L << KW_ENGINE) | (1L << KW_ERROR) | (1L << KW_ESTIMATED_COST) | (1L << KW_EXCEPTION) | (1L << KW_EXCLUDE) | (1L << KW_EXCLUDING) | (1L << KW_EXTENDED) | (1L << KW_FILE) | (1L << KW_FINAL) | (1L << KW_FIRST) | (1L << KW_FOLLOWING) | (1L << KW_FORMAT) | (1L << KW_FORTRAN) | (1L << KW_FOUND) | (1L << KW_FRAC_SECOND) | (1L << KW_FUNCTIONS) | (1L << KW_GENERAL) | (1L << KW_GENERATED) | (1L << KW_GO) | (1L << KW_GOTO) | (1L << KW_GRANTED) | (1L << KW_HOP) | (1L << KW_HOURS) | (1L << KW_IF) | (1L << KW_IGNORE) | (1L << KW_INCREMENT) | (1L << KW_INPUT) | (1L << KW_INVOKER))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (KW_JAR - 64)) | (1L << (KW_JARS - 64)) | (1L << (KW_JAVA - 64)) | (1L << (KW_JSON - 64)) | (1L << (KW_JSON_EXECUTION_PLAN - 64)) | (1L << (KW_KEY - 64)) | (1L << (KW_KEY_MEMBER - 64)) | (1L << (KW_KEY_TYPE - 64)) | (1L << (KW_LABEL - 64)) | (1L << (KW_LAST - 64)) | (1L << (KW_LENGTH - 64)) | (1L << (KW_LEVEL - 64)) | (1L << (KW_LOAD - 64)) | (1L << (KW_MAP - 64)) | (1L << (KW_MICROSECOND - 64)) | (1L << (KW_MILLENNIUM - 64)) | (1L << (KW_MILLISECOND - 64)) | (1L << (KW_MINUTES - 64)) | (1L << (KW_MINVALUE - 64)) | (1L << (KW_MODIFY - 64)) | (1L << (KW_MODULES - 64)) | (1L << (KW_MONTHS - 64)) | (1L << (KW_NANOSECOND - 64)) | (1L << (KW_NULLS - 64)) | (1L << (KW_NUMBER - 64)) | (1L << (KW_OPTION - 64)) | (1L << (KW_OPTIONS - 64)) | (1L << (KW_ORDERING - 64)) | (1L << (KW_OUTPUT - 64)) | (1L << (KW_OVERWRITE - 64)) | (1L << (KW_OVERWRITING - 64)) | (1L << (KW_PARTITIONED - 64)) | (1L << (KW_PARTITIONS - 64)) | (1L << (KW_PASSING - 64)) | (1L << (KW_PAST - 64)) | (1L << (KW_PATH - 64)) | (1L << (KW_PLACING - 64)) | (1L << (KW_PLAN - 64)) | (1L << (KW_PRECEDING - 64)) | (1L << (KW_PRESERVE - 64)) | (1L << (KW_PRIOR - 64)) | (1L << (KW_PRIVILEGES - 64)) | (1L << (KW_PUBLIC - 64)) | (1L << (KW_PYTHON - 64)) | (1L << (KW_PYTHON_FILES - 64)) | (1L << (KW_PYTHON_REQUIREMENTS - 64)) | (1L << (KW_PYTHON_DEPENDENCIES - 64)) | (1L << (KW_PYTHON_JAR - 64)) | (1L << (KW_PYTHON_ARCHIVES - 64)) | (1L << (KW_PYTHON_PARAMETER - 64)) | (1L << (KW_QUARTER - 64)) | (1L << (KW_RAW - 64)) | (1L << (KW_READ - 64)) | (1L << (KW_RELATIVE - 64)) | (1L << (KW_REMOVE - 64)) | (1L << (KW_RENAME - 64)) | (1L << (KW_REPLACE - 64)) | (1L << (KW_RESPECT - 64)) | (1L << (KW_RESTART - 64)) | (1L << (KW_RESTRICT - 64)) | (1L << (KW_ROLE - 64)) | (1L << (KW_ROW_COUNT - 64)) | (1L << (KW_SCALA - 64)) | (1L << (KW_SCALAR - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (KW_SCALE - 128)) | (1L << (KW_SCHEMA - 128)) | (1L << (KW_SECONDS - 128)) | (1L << (KW_SECTION - 128)) | (1L << (KW_SECURITY - 128)) | (1L << (KW_SELF - 128)) | (1L << (KW_SERVER - 128)) | (1L << (KW_SERVER_NAME - 128)) | (1L << (KW_SESSION - 128)) | (1L << (KW_SETS - 128)) | (1L << (KW_SIMPLE - 128)) | (1L << (KW_SIZE - 128)) | (1L << (KW_SLIDE - 128)) | (1L << (KW_SOURCE - 128)) | (1L << (KW_SPACE - 128)) | (1L << (KW_STATE - 128)) | (1L << (KW_STATEMENT - 128)) | (1L << (KW_STEP - 128)) | (1L << (KW_STRING - 128)) | (1L << (KW_STRUCTURE - 128)) | (1L << (KW_STYLE - 128)) | (1L << (KW_TABLES - 128)) | (1L << (KW_TEMPORARY - 128)) | (1L << (KW_TIMECOL - 128)) | (1L << (KW_TIMESTAMP_LTZ - 128)) | (1L << (KW_TIMESTAMPADD - 128)) | (1L << (KW_TIMESTAMPDIFF - 128)) | (1L << (KW_TRANSFORM - 128)) | (1L << (KW_TUMBLE - 128)) | (1L << (KW_TYPE - 128)) | (1L << (KW_UNDER - 128)) | (1L << (KW_UNLOAD - 128)) | (1L << (KW_USAGE - 128)) | (1L << (KW_USE - 128)) | (1L << (KW_UTF16 - 128)) | (1L << (KW_UTF32 - 128)) | (1L << (KW_UTF8 - 128)) | (1L << (KW_VERSION - 128)) | (1L << (KW_VIEW - 128)) | (1L << (KW_VIEWS - 128)) | (1L << (KW_VIRTUAL - 128)) | (1L << (KW_WATERMARK - 128)) | (1L << (KW_WATERMARKS - 128)) | (1L << (KW_WEEK - 128)) | (1L << (KW_WORK - 128)) | (1L << (KW_WRAPPER - 128)) | (1L << (KW_YEARS - 128)) | (1L << (KW_ZONE - 128)))) != 0) || ((((_la - 408)) & ~0x3f) == 0 && ((1L << (_la - 408)) & ((1L << (STRING_LITERAL - 408)) | (1L << (DIG_LITERAL - 408)) | (1L << (ID_LITERAL - 408)))) != 0)) {
				{
				setState(956);
				uid();
				}
			}

			setState(959);
			match(KW_TO);
			setState(960);
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
		enterRule(_localctx, 116, RULE_setKeyValueDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(962);
			match(KW_SET);
			setState(963);
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
		enterRule(_localctx, 118, RULE_addConstraint);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(965);
			match(KW_ADD);
			setState(966);
			match(KW_CONSTRAINT);
			setState(967);
			constraintName();
			setState(968);
			match(KW_PRIMARY);
			setState(969);
			match(KW_KEY);
			setState(970);
			columnNameList();
			setState(972);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_NOT) {
				{
				setState(971);
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
		enterRule(_localctx, 120, RULE_dropConstraint);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(974);
			match(KW_DROP);
			setState(975);
			match(KW_CONSTRAINT);
			setState(976);
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
		enterRule(_localctx, 122, RULE_addUnique);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(978);
			match(KW_ADD);
			setState(979);
			match(KW_UNIQUE);
			setState(980);
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
		enterRule(_localctx, 124, RULE_notForced);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(982);
			match(KW_NOT);
			setState(983);
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
		enterRule(_localctx, 126, RULE_alertView);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(985);
			match(KW_ALTER);
			setState(986);
			match(KW_VIEW);
			setState(987);
			uid();
			setState(991);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_RENAME:
				{
				setState(988);
				renameDefinition();
				}
				break;
			case KW_AS:
				{
				setState(989);
				match(KW_AS);
				setState(990);
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
		enterRule(_localctx, 128, RULE_alterDatabase);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(993);
			match(KW_ALTER);
			setState(994);
			match(KW_DATABASE);
			setState(995);
			databasePath();
			setState(996);
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
		enterRule(_localctx, 130, RULE_alterFunction);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(998);
			match(KW_ALTER);
			setState(1002);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,101,_ctx) ) {
			case 1:
				{
				setState(999);
				match(KW_TEMPORARY);
				}
				break;
			case 2:
				{
				setState(1000);
				match(KW_TEMPORARY);
				setState(1001);
				match(KW_SYSTEM);
				}
				break;
			}
			setState(1004);
			match(KW_FUNCTION);
			setState(1006);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,102,_ctx) ) {
			case 1:
				{
				setState(1005);
				ifExists();
				}
				break;
			}
			setState(1008);
			uid();
			setState(1009);
			match(KW_AS);
			setState(1010);
			identifier();
			setState(1013);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_LANGUAGE) {
				{
				setState(1011);
				match(KW_LANGUAGE);
				setState(1012);
				_la = _input.LA(1);
				if ( !(((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (KW_JAVA - 66)) | (1L << (KW_PYTHON - 66)) | (1L << (KW_SCALA - 66)))) != 0)) ) {
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
		enterRule(_localctx, 132, RULE_dropCatalog);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1015);
			match(KW_DROP);
			setState(1016);
			match(KW_CATALOG);
			setState(1018);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,104,_ctx) ) {
			case 1:
				{
				setState(1017);
				ifExists();
				}
				break;
			}
			setState(1020);
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
		enterRule(_localctx, 134, RULE_dropTable);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1022);
			match(KW_DROP);
			setState(1024);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_TEMPORARY) {
				{
				setState(1023);
				match(KW_TEMPORARY);
				}
			}

			setState(1026);
			match(KW_TABLE);
			setState(1028);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,106,_ctx) ) {
			case 1:
				{
				setState(1027);
				ifExists();
				}
				break;
			}
			setState(1030);
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
		enterRule(_localctx, 136, RULE_dropDatabase);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1032);
			match(KW_DROP);
			setState(1033);
			match(KW_DATABASE);
			setState(1035);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,107,_ctx) ) {
			case 1:
				{
				setState(1034);
				ifExists();
				}
				break;
			}
			setState(1037);
			databasePath();
			setState(1039);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_CASCADE || _la==KW_RESTRICT) {
				{
				setState(1038);
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
		enterRule(_localctx, 138, RULE_dropView);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1041);
			match(KW_DROP);
			setState(1043);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_TEMPORARY) {
				{
				setState(1042);
				match(KW_TEMPORARY);
				}
			}

			setState(1045);
			match(KW_VIEW);
			setState(1047);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,110,_ctx) ) {
			case 1:
				{
				setState(1046);
				ifExists();
				}
				break;
			}
			setState(1049);
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
		enterRule(_localctx, 140, RULE_dropFunction);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1051);
			match(KW_DROP);
			setState(1055);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,111,_ctx) ) {
			case 1:
				{
				setState(1052);
				match(KW_TEMPORARY);
				}
				break;
			case 2:
				{
				setState(1053);
				match(KW_TEMPORARY);
				setState(1054);
				match(KW_SYSTEM);
				}
				break;
			}
			setState(1057);
			match(KW_FUNCTION);
			setState(1059);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,112,_ctx) ) {
			case 1:
				{
				setState(1058);
				ifExists();
				}
				break;
			}
			setState(1061);
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
		enterRule(_localctx, 142, RULE_insertStatement);
		int _la;
		try {
			setState(1070);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,114,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(1064);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_EXECUTE) {
					{
					setState(1063);
					match(KW_EXECUTE);
					}
				}

				setState(1066);
				insertSimpleStatement();
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1067);
				insertMulStatementCompatibility();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				{
				setState(1068);
				match(KW_EXECUTE);
				setState(1069);
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
		enterRule(_localctx, 144, RULE_insertSimpleStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1072);
			match(KW_INSERT);
			setState(1073);
			_la = _input.LA(1);
			if ( !(_la==KW_OVERWRITE || _la==KW_INTO) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(1074);
			tablePath();
			setState(1083);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,117,_ctx) ) {
			case 1:
				{
				setState(1076);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_PARTITION) {
					{
					setState(1075);
					insertPartitionDefinition();
					}
				}

				setState(1079);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,116,_ctx) ) {
				case 1:
					{
					setState(1078);
					columnNameList();
					}
					break;
				}
				setState(1081);
				queryStatement(0);
				}
				break;
			case 2:
				{
				setState(1082);
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
		enterRule(_localctx, 146, RULE_insertPartitionDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1085);
			match(KW_PARTITION);
			setState(1086);
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
		enterRule(_localctx, 148, RULE_valuesDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1088);
			match(KW_VALUES);
			setState(1089);
			valuesRowDefinition();
			setState(1094);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1090);
				match(COMMA);
				setState(1091);
				valuesRowDefinition();
				}
				}
				setState(1096);
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
		enterRule(_localctx, 150, RULE_valuesRowDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1097);
			match(LR_BRACKET);
			setState(1098);
			constant();
			setState(1103);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1099);
				match(COMMA);
				setState(1100);
				constant();
				}
				}
				setState(1105);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1106);
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
		enterRule(_localctx, 152, RULE_insertMulStatementCompatibility);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1108);
			match(KW_BEGIN);
			setState(1109);
			match(KW_STATEMENT);
			setState(1110);
			match(KW_SET);
			setState(1111);
			match(SEMICOLON);
			setState(1115); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(1112);
				insertSimpleStatement();
				setState(1113);
				match(SEMICOLON);
				}
				}
				setState(1117); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==KW_INSERT );
			setState(1119);
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
		enterRule(_localctx, 154, RULE_insertMulStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1121);
			match(KW_STATEMENT);
			setState(1122);
			match(KW_SET);
			setState(1123);
			match(KW_BEGIN);
			setState(1127); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(1124);
				insertSimpleStatement();
				setState(1125);
				match(SEMICOLON);
				}
				}
				setState(1129); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==KW_INSERT );
			setState(1131);
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
		int _startState = 156;
		enterRecursionRule(_localctx, 156, RULE_queryStatement, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1156);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,126,_ctx) ) {
			case 1:
				{
				setState(1134);
				valuesCaluse();
				}
				break;
			case 2:
				{
				setState(1135);
				withClause();
				setState(1136);
				queryStatement(5);
				}
				break;
			case 3:
				{
				setState(1138);
				match(LR_BRACKET);
				setState(1139);
				queryStatement(0);
				setState(1140);
				match(RR_BRACKET);
				}
				break;
			case 4:
				{
				setState(1142);
				selectClause();
				setState(1144);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,122,_ctx) ) {
				case 1:
					{
					setState(1143);
					orderByCaluse();
					}
					break;
				}
				setState(1147);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,123,_ctx) ) {
				case 1:
					{
					setState(1146);
					limitClause();
					}
					break;
				}
				}
				break;
			case 5:
				{
				setState(1149);
				selectStatement();
				setState(1151);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,124,_ctx) ) {
				case 1:
					{
					setState(1150);
					orderByCaluse();
					}
					break;
				}
				setState(1154);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,125,_ctx) ) {
				case 1:
					{
					setState(1153);
					limitClause();
					}
					break;
				}
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(1172);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,130,_ctx);
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
					setState(1158);
					if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
					setState(1159);
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
					setState(1161);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==KW_ALL) {
						{
						setState(1160);
						match(KW_ALL);
						}
					}

					setState(1163);
					((QueryStatementContext)_localctx).right = queryStatement(0);
					setState(1165);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,128,_ctx) ) {
					case 1:
						{
						setState(1164);
						orderByCaluse();
						}
						break;
					}
					setState(1168);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,129,_ctx) ) {
					case 1:
						{
						setState(1167);
						limitClause();
						}
						break;
					}
					}
					} 
				}
				setState(1174);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,130,_ctx);
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
		enterRule(_localctx, 158, RULE_valuesCaluse);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1175);
			match(KW_VALUES);
			setState(1176);
			expression();
			setState(1181);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,131,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1177);
					match(COMMA);
					setState(1178);
					expression();
					}
					} 
				}
				setState(1183);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,131,_ctx);
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
		enterRule(_localctx, 160, RULE_withClause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1184);
			match(KW_WITH);
			setState(1185);
			withItem();
			setState(1190);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1186);
				match(COMMA);
				setState(1187);
				withItem();
				}
				}
				setState(1192);
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
		enterRule(_localctx, 162, RULE_withItem);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1193);
			withItemName();
			setState(1205);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LR_BRACKET) {
				{
				setState(1194);
				match(LR_BRACKET);
				setState(1195);
				columnName();
				setState(1200);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1196);
					match(COMMA);
					setState(1197);
					columnName();
					}
					}
					setState(1202);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1203);
				match(RR_BRACKET);
				}
			}

			setState(1207);
			match(KW_AS);
			setState(1208);
			match(LR_BRACKET);
			setState(1209);
			queryStatement(0);
			setState(1210);
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
		enterRule(_localctx, 164, RULE_withItemName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1212);
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
		enterRule(_localctx, 166, RULE_selectStatement);
		try {
			setState(1232);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,139,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1214);
				selectClause();
				setState(1215);
				fromClause();
				setState(1217);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,135,_ctx) ) {
				case 1:
					{
					setState(1216);
					whereClause();
					}
					break;
				}
				setState(1220);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,136,_ctx) ) {
				case 1:
					{
					setState(1219);
					groupByClause();
					}
					break;
				}
				setState(1223);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,137,_ctx) ) {
				case 1:
					{
					setState(1222);
					havingClause();
					}
					break;
				}
				setState(1226);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,138,_ctx) ) {
				case 1:
					{
					setState(1225);
					windowClause();
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1228);
				selectClause();
				setState(1229);
				fromClause();
				setState(1230);
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
		enterRule(_localctx, 168, RULE_selectClause);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1234);
			match(KW_SELECT);
			setState(1236);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_ALL || _la==KW_DISTINCT) {
				{
				setState(1235);
				setQuantifier();
				}
			}

			setState(1247);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,142,_ctx) ) {
			case 1:
				{
				setState(1238);
				match(ASTERISK_SIGN);
				}
				break;
			case 2:
				{
				setState(1239);
				projectItemDefinition();
				setState(1244);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,141,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(1240);
						match(COMMA);
						setState(1241);
						projectItemDefinition();
						}
						} 
					}
					setState(1246);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,141,_ctx);
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
		enterRule(_localctx, 170, RULE_projectItemDefinition);
		int _la;
		try {
			setState(1257);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,145,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1249);
				overWindowItem();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1250);
				expression();
				setState(1255);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,144,_ctx) ) {
				case 1:
					{
					setState(1252);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==KW_AS) {
						{
						setState(1251);
						match(KW_AS);
						}
					}

					setState(1254);
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
		enterRule(_localctx, 172, RULE_overWindowItem);
		try {
			setState(1271);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,146,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1259);
				primaryExpression(0);
				setState(1260);
				match(KW_OVER);
				setState(1261);
				windowSpec();
				setState(1262);
				match(KW_AS);
				setState(1263);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1265);
				primaryExpression(0);
				setState(1266);
				match(KW_OVER);
				setState(1267);
				errorCapturingIdentifier();
				setState(1268);
				match(KW_AS);
				setState(1269);
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
		enterRule(_localctx, 174, RULE_fromClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1273);
			match(KW_FROM);
			setState(1274);
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
		int _startState = 176;
		enterRecursionRule(_localctx, 176, RULE_tableExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1287);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,148,_ctx) ) {
			case 1:
				{
				setState(1277);
				tableReference();
				setState(1282);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,147,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(1278);
						match(COMMA);
						setState(1279);
						tableReference();
						}
						} 
					}
					setState(1284);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,147,_ctx);
				}
				}
				break;
			case 2:
				{
				setState(1285);
				inlineDataValueClause();
				}
				break;
			case 3:
				{
				setState(1286);
				windoTVFClause();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(1310);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,154,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(1308);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,153,_ctx) ) {
					case 1:
						{
						_localctx = new TableExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_tableExpression);
						setState(1289);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(1290);
						match(KW_CROSS);
						setState(1291);
						match(KW_JOIN);
						setState(1292);
						tableExpression(4);
						}
						break;
					case 2:
						{
						_localctx = new TableExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_tableExpression);
						setState(1293);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(1295);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==KW_NATURAL) {
							{
							setState(1294);
							match(KW_NATURAL);
							}
						}

						setState(1298);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (((((_la - 253)) & ~0x3f) == 0 && ((1L << (_la - 253)) & ((1L << (KW_FULL - 253)) | (1L << (KW_INNER - 253)) | (1L << (KW_LEFT - 253)))) != 0) || _la==KW_RIGHT) {
							{
							setState(1297);
							_la = _input.LA(1);
							if ( !(((((_la - 253)) & ~0x3f) == 0 && ((1L << (_la - 253)) & ((1L << (KW_FULL - 253)) | (1L << (KW_INNER - 253)) | (1L << (KW_LEFT - 253)))) != 0) || _la==KW_RIGHT) ) {
							_errHandler.recoverInline(this);
							}
							else {
								if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
								_errHandler.reportMatch(this);
								consume();
							}
							}
						}

						setState(1301);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==KW_OUTER) {
							{
							setState(1300);
							match(KW_OUTER);
							}
						}

						setState(1303);
						match(KW_JOIN);
						setState(1304);
						tableExpression(0);
						setState(1306);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,152,_ctx) ) {
						case 1:
							{
							setState(1305);
							joinCondition();
							}
							break;
						}
						}
						break;
					}
					} 
				}
				setState(1312);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,154,_ctx);
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
		enterRule(_localctx, 178, RULE_tableReference);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1313);
			tablePrimary();
			setState(1315);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,155,_ctx) ) {
			case 1:
				{
				setState(1314);
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
		enterRule(_localctx, 180, RULE_tablePrimary);
		int _la;
		try {
			setState(1358);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,162,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1318);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_TABLE) {
					{
					setState(1317);
					match(KW_TABLE);
					}
				}

				setState(1320);
				tablePath();
				setState(1322);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,157,_ctx) ) {
				case 1:
					{
					setState(1321);
					systemTimePeriod();
					}
					break;
				}
				setState(1328);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,159,_ctx) ) {
				case 1:
					{
					setState(1325);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==KW_AS) {
						{
						setState(1324);
						match(KW_AS);
						}
					}

					setState(1327);
					correlationName();
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1330);
				match(KW_LATERAL);
				setState(1331);
				match(KW_TABLE);
				setState(1332);
				match(LR_BRACKET);
				setState(1333);
				functionName();
				setState(1334);
				match(LR_BRACKET);
				setState(1335);
				functionParam();
				setState(1340);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1336);
					match(COMMA);
					setState(1337);
					functionParam();
					}
					}
					setState(1342);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1343);
				match(RR_BRACKET);
				setState(1344);
				match(RR_BRACKET);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1347);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_LATERAL) {
					{
					setState(1346);
					match(KW_LATERAL);
					}
				}

				setState(1349);
				match(LR_BRACKET);
				setState(1350);
				queryStatement(0);
				setState(1351);
				match(RR_BRACKET);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1353);
				match(KW_UNNEST);
				setState(1354);
				match(LR_BRACKET);
				setState(1355);
				expression();
				setState(1356);
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
		enterRule(_localctx, 182, RULE_systemTimePeriod);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1360);
			match(KW_FOR);
			setState(1361);
			match(KW_SYSTEM_TIME);
			setState(1362);
			match(KW_AS);
			setState(1363);
			match(KW_OF);
			setState(1364);
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
		enterRule(_localctx, 184, RULE_dateTimeExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1366);
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
		enterRule(_localctx, 186, RULE_inlineDataValueClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1368);
			match(LR_BRACKET);
			setState(1369);
			valuesDefinition();
			setState(1370);
			match(RR_BRACKET);
			setState(1371);
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
		enterRule(_localctx, 188, RULE_windoTVFClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1373);
			match(KW_TABLE);
			setState(1374);
			match(LR_BRACKET);
			setState(1375);
			windowTVFExression();
			setState(1376);
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
		enterRule(_localctx, 190, RULE_windowTVFExression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1378);
			windoTVFName();
			setState(1379);
			match(LR_BRACKET);
			setState(1380);
			windowTVFParam();
			setState(1385);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1381);
				match(COMMA);
				setState(1382);
				windowTVFParam();
				}
				}
				setState(1387);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1388);
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
		enterRule(_localctx, 192, RULE_windoTVFName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1390);
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
		enterRule(_localctx, 194, RULE_windowTVFParam);
		try {
			setState(1407);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,164,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1392);
				match(KW_TABLE);
				setState(1393);
				timeAttrColumn();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1394);
				columnDescriptor();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1395);
				timeIntervalExpression();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1396);
				match(KW_DATA);
				setState(1397);
				match(DOUBLE_RIGHT_ARROW);
				setState(1398);
				match(KW_TABLE);
				setState(1399);
				timeAttrColumn();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1400);
				match(KW_TIMECOL);
				setState(1401);
				match(DOUBLE_RIGHT_ARROW);
				setState(1402);
				columnDescriptor();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1403);
				timeIntervalParamName();
				setState(1404);
				match(DOUBLE_RIGHT_ARROW);
				setState(1405);
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
		enterRule(_localctx, 196, RULE_timeIntervalParamName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1409);
			_la = _input.LA(1);
			if ( !(_la==KW_DATA || ((((_la - 139)) & ~0x3f) == 0 && ((1L << (_la - 139)) & ((1L << (KW_SIZE - 139)) | (1L << (KW_SLIDE - 139)) | (1L << (KW_STEP - 139)) | (1L << (KW_TIMECOL - 139)))) != 0) || _la==KW_OFFSET) ) {
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
		enterRule(_localctx, 198, RULE_columnDescriptor);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1411);
			match(KW_DESCRIPTOR);
			setState(1412);
			match(LR_BRACKET);
			setState(1413);
			uid();
			setState(1414);
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
		enterRule(_localctx, 200, RULE_joinCondition);
		int _la;
		try {
			setState(1430);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_ON:
				enterOuterAlt(_localctx, 1);
				{
				setState(1416);
				match(KW_ON);
				setState(1417);
				booleanExpression(0);
				}
				break;
			case KW_USING:
				enterOuterAlt(_localctx, 2);
				{
				setState(1418);
				match(KW_USING);
				setState(1419);
				match(LR_BRACKET);
				setState(1420);
				uid();
				setState(1425);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1421);
					match(COMMA);
					setState(1422);
					uid();
					}
					}
					setState(1427);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1428);
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
		enterRule(_localctx, 202, RULE_whereClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1432);
			match(KW_WHERE);
			setState(1433);
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
		enterRule(_localctx, 204, RULE_groupByClause);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1435);
			match(KW_GROUP);
			setState(1436);
			match(KW_BY);
			setState(1437);
			groupItemDefinition();
			setState(1442);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,167,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1438);
					match(COMMA);
					setState(1439);
					groupItemDefinition();
					}
					} 
				}
				setState(1444);
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
		enterRule(_localctx, 206, RULE_groupItemDefinition);
		int _la;
		try {
			setState(1484);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,171,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1445);
				expression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1446);
				groupWindowFunction();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1447);
				match(LR_BRACKET);
				setState(1448);
				match(RR_BRACKET);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1449);
				match(LR_BRACKET);
				setState(1450);
				expression();
				setState(1455);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1451);
					match(COMMA);
					setState(1452);
					expression();
					}
					}
					setState(1457);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1458);
				match(RR_BRACKET);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1460);
				groupingSetsNotaionName();
				setState(1461);
				match(LR_BRACKET);
				setState(1462);
				expression();
				setState(1467);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1463);
					match(COMMA);
					setState(1464);
					expression();
					}
					}
					setState(1469);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1470);
				match(RR_BRACKET);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1472);
				groupingSets();
				setState(1473);
				match(LR_BRACKET);
				setState(1474);
				groupItemDefinition();
				setState(1479);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1475);
					match(COMMA);
					setState(1476);
					groupItemDefinition();
					}
					}
					setState(1481);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1482);
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
		enterRule(_localctx, 208, RULE_groupingSets);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1486);
			match(KW_GROUPING);
			setState(1487);
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
		enterRule(_localctx, 210, RULE_groupingSetsNotaionName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1489);
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
		enterRule(_localctx, 212, RULE_groupWindowFunction);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1491);
			groupWindowFunctionName();
			setState(1492);
			match(LR_BRACKET);
			setState(1493);
			timeAttrColumn();
			setState(1494);
			match(COMMA);
			setState(1495);
			timeIntervalExpression();
			setState(1496);
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
		enterRule(_localctx, 214, RULE_groupWindowFunctionName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1498);
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
		enterRule(_localctx, 216, RULE_timeAttrColumn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1500);
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
		enterRule(_localctx, 218, RULE_havingClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1502);
			match(KW_HAVING);
			setState(1503);
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
		enterRule(_localctx, 220, RULE_windowClause);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1505);
			match(KW_WINDOW);
			setState(1506);
			namedWindow();
			setState(1511);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,172,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1507);
					match(COMMA);
					setState(1508);
					namedWindow();
					}
					} 
				}
				setState(1513);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,172,_ctx);
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
		enterRule(_localctx, 222, RULE_namedWindow);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1514);
			((NamedWindowContext)_localctx).name = errorCapturingIdentifier();
			setState(1515);
			match(KW_AS);
			setState(1516);
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
		enterRule(_localctx, 224, RULE_windowSpec);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1519);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << KW_ADD) | (1L << KW_ADMIN) | (1L << KW_AFTER) | (1L << KW_ANALYZE) | (1L << KW_ASC) | (1L << KW_BEFORE) | (1L << KW_BYTES) | (1L << KW_CASCADE) | (1L << KW_CATALOG) | (1L << KW_CATALOGS) | (1L << KW_CENTURY) | (1L << KW_CHAIN) | (1L << KW_CHANGELOG_MODE) | (1L << KW_CHARACTERS) | (1L << KW_COMMENT) | (1L << KW_COMPACT) | (1L << KW_COLUMNS) | (1L << KW_CONSTRAINTS) | (1L << KW_CONSTRUCTOR) | (1L << KW_CUMULATE) | (1L << KW_DATA) | (1L << KW_DATABASE) | (1L << KW_DATABASES) | (1L << KW_DAYS) | (1L << KW_DECADE) | (1L << KW_DEFINED) | (1L << KW_DESC) | (1L << KW_DESCRIPTOR) | (1L << KW_DIV) | (1L << KW_ENCODING) | (1L << KW_ENFORCED) | (1L << KW_ENGINE) | (1L << KW_ERROR) | (1L << KW_ESTIMATED_COST) | (1L << KW_EXCEPTION) | (1L << KW_EXCLUDE) | (1L << KW_EXCLUDING) | (1L << KW_EXTENDED) | (1L << KW_FILE) | (1L << KW_FINAL) | (1L << KW_FIRST) | (1L << KW_FOLLOWING) | (1L << KW_FORMAT) | (1L << KW_FORTRAN) | (1L << KW_FOUND) | (1L << KW_FRAC_SECOND) | (1L << KW_FUNCTIONS) | (1L << KW_GENERAL) | (1L << KW_GENERATED) | (1L << KW_GO) | (1L << KW_GOTO) | (1L << KW_GRANTED) | (1L << KW_HOP) | (1L << KW_HOURS) | (1L << KW_IF) | (1L << KW_IGNORE) | (1L << KW_INCREMENT) | (1L << KW_INPUT) | (1L << KW_INVOKER))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (KW_JAR - 64)) | (1L << (KW_JARS - 64)) | (1L << (KW_JAVA - 64)) | (1L << (KW_JSON - 64)) | (1L << (KW_JSON_EXECUTION_PLAN - 64)) | (1L << (KW_KEY - 64)) | (1L << (KW_KEY_MEMBER - 64)) | (1L << (KW_KEY_TYPE - 64)) | (1L << (KW_LABEL - 64)) | (1L << (KW_LAST - 64)) | (1L << (KW_LENGTH - 64)) | (1L << (KW_LEVEL - 64)) | (1L << (KW_LOAD - 64)) | (1L << (KW_MAP - 64)) | (1L << (KW_MICROSECOND - 64)) | (1L << (KW_MILLENNIUM - 64)) | (1L << (KW_MILLISECOND - 64)) | (1L << (KW_MINUTES - 64)) | (1L << (KW_MINVALUE - 64)) | (1L << (KW_MODIFY - 64)) | (1L << (KW_MODULES - 64)) | (1L << (KW_MONTHS - 64)) | (1L << (KW_NANOSECOND - 64)) | (1L << (KW_NULLS - 64)) | (1L << (KW_NUMBER - 64)) | (1L << (KW_OPTION - 64)) | (1L << (KW_OPTIONS - 64)) | (1L << (KW_ORDERING - 64)) | (1L << (KW_OUTPUT - 64)) | (1L << (KW_OVERWRITE - 64)) | (1L << (KW_OVERWRITING - 64)) | (1L << (KW_PARTITIONED - 64)) | (1L << (KW_PARTITIONS - 64)) | (1L << (KW_PASSING - 64)) | (1L << (KW_PAST - 64)) | (1L << (KW_PATH - 64)) | (1L << (KW_PLACING - 64)) | (1L << (KW_PLAN - 64)) | (1L << (KW_PRECEDING - 64)) | (1L << (KW_PRESERVE - 64)) | (1L << (KW_PRIOR - 64)) | (1L << (KW_PRIVILEGES - 64)) | (1L << (KW_PUBLIC - 64)) | (1L << (KW_PYTHON - 64)) | (1L << (KW_PYTHON_FILES - 64)) | (1L << (KW_PYTHON_REQUIREMENTS - 64)) | (1L << (KW_PYTHON_DEPENDENCIES - 64)) | (1L << (KW_PYTHON_JAR - 64)) | (1L << (KW_PYTHON_ARCHIVES - 64)) | (1L << (KW_PYTHON_PARAMETER - 64)) | (1L << (KW_QUARTER - 64)) | (1L << (KW_RAW - 64)) | (1L << (KW_READ - 64)) | (1L << (KW_RELATIVE - 64)) | (1L << (KW_REMOVE - 64)) | (1L << (KW_RENAME - 64)) | (1L << (KW_REPLACE - 64)) | (1L << (KW_RESPECT - 64)) | (1L << (KW_RESTART - 64)) | (1L << (KW_RESTRICT - 64)) | (1L << (KW_ROLE - 64)) | (1L << (KW_ROW_COUNT - 64)) | (1L << (KW_SCALA - 64)) | (1L << (KW_SCALAR - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (KW_SCALE - 128)) | (1L << (KW_SCHEMA - 128)) | (1L << (KW_SECONDS - 128)) | (1L << (KW_SECTION - 128)) | (1L << (KW_SECURITY - 128)) | (1L << (KW_SELF - 128)) | (1L << (KW_SERVER - 128)) | (1L << (KW_SERVER_NAME - 128)) | (1L << (KW_SESSION - 128)) | (1L << (KW_SETS - 128)) | (1L << (KW_SIMPLE - 128)) | (1L << (KW_SIZE - 128)) | (1L << (KW_SLIDE - 128)) | (1L << (KW_SOURCE - 128)) | (1L << (KW_SPACE - 128)) | (1L << (KW_STATE - 128)) | (1L << (KW_STATEMENT - 128)) | (1L << (KW_STEP - 128)) | (1L << (KW_STRING - 128)) | (1L << (KW_STRUCTURE - 128)) | (1L << (KW_STYLE - 128)) | (1L << (KW_TABLES - 128)) | (1L << (KW_TEMPORARY - 128)) | (1L << (KW_TIMECOL - 128)) | (1L << (KW_TIMESTAMP_LTZ - 128)) | (1L << (KW_TIMESTAMPADD - 128)) | (1L << (KW_TIMESTAMPDIFF - 128)) | (1L << (KW_TRANSFORM - 128)) | (1L << (KW_TUMBLE - 128)) | (1L << (KW_TYPE - 128)) | (1L << (KW_UNDER - 128)) | (1L << (KW_UNLOAD - 128)) | (1L << (KW_USAGE - 128)) | (1L << (KW_USE - 128)) | (1L << (KW_UTF16 - 128)) | (1L << (KW_UTF32 - 128)) | (1L << (KW_UTF8 - 128)) | (1L << (KW_VERSION - 128)) | (1L << (KW_VIEW - 128)) | (1L << (KW_VIEWS - 128)) | (1L << (KW_VIRTUAL - 128)) | (1L << (KW_WATERMARK - 128)) | (1L << (KW_WATERMARKS - 128)) | (1L << (KW_WEEK - 128)) | (1L << (KW_WORK - 128)) | (1L << (KW_WRAPPER - 128)) | (1L << (KW_YEARS - 128)) | (1L << (KW_ZONE - 128)))) != 0) || ((((_la - 408)) & ~0x3f) == 0 && ((1L << (_la - 408)) & ((1L << (STRING_LITERAL - 408)) | (1L << (DIG_LITERAL - 408)) | (1L << (ID_LITERAL - 408)))) != 0)) {
				{
				setState(1518);
				((WindowSpecContext)_localctx).name = errorCapturingIdentifier();
				}
			}

			setState(1521);
			match(LR_BRACKET);
			setState(1523);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_PARTITION) {
				{
				setState(1522);
				partitionByClause();
				}
			}

			setState(1526);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_ORDER) {
				{
				setState(1525);
				orderByCaluse();
				}
			}

			setState(1529);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_RANGE || _la==KW_ROWS) {
				{
				setState(1528);
				windowFrame();
				}
			}

			setState(1531);
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
		enterRule(_localctx, 226, RULE_matchRecognizeClause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1533);
			match(KW_MATCH_RECOGNIZE);
			setState(1534);
			match(LR_BRACKET);
			setState(1536);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_PARTITION) {
				{
				setState(1535);
				partitionByClause();
				}
			}

			setState(1539);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_ORDER) {
				{
				setState(1538);
				orderByCaluse();
				}
			}

			setState(1542);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_MEASURES) {
				{
				setState(1541);
				measuresClause();
				}
			}

			setState(1545);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_ALL || _la==KW_ONE) {
				{
				setState(1544);
				outputMode();
				}
			}

			setState(1548);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_AFTER) {
				{
				setState(1547);
				afterMatchStrategy();
				}
			}

			setState(1551);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_PATTERN) {
				{
				setState(1550);
				patternDefination();
				}
			}

			setState(1553);
			patternVariablesDefination();
			setState(1554);
			match(RR_BRACKET);
			setState(1559);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,184,_ctx) ) {
			case 1:
				{
				setState(1556);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_AS) {
					{
					setState(1555);
					match(KW_AS);
					}
				}

				setState(1558);
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
		enterRule(_localctx, 228, RULE_orderByCaluse);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1561);
			match(KW_ORDER);
			setState(1562);
			match(KW_BY);
			setState(1563);
			orderItemDefition();
			setState(1568);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,185,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1564);
					match(COMMA);
					setState(1565);
					orderItemDefition();
					}
					} 
				}
				setState(1570);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,185,_ctx);
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
		enterRule(_localctx, 230, RULE_orderItemDefition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1571);
			expression();
			setState(1573);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,186,_ctx) ) {
			case 1:
				{
				setState(1572);
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
			setState(1577);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,187,_ctx) ) {
			case 1:
				{
				setState(1575);
				match(KW_NULLS);
				setState(1576);
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
		enterRule(_localctx, 232, RULE_limitClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1579);
			match(KW_LIMIT);
			setState(1582);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_ALL:
				{
				setState(1580);
				match(KW_ALL);
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
				setState(1581);
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
		enterRule(_localctx, 234, RULE_partitionByClause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1584);
			match(KW_PARTITION);
			setState(1585);
			match(KW_BY);
			setState(1586);
			expression();
			setState(1591);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1587);
				match(COMMA);
				setState(1588);
				expression();
				}
				}
				setState(1593);
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
		enterRule(_localctx, 236, RULE_quantifiers);
		try {
			setState(1610);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,190,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(1594);
				match(ASTERISK_SIGN);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(1595);
				match(ADD_SIGN);
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				{
				setState(1596);
				match(QUESTION_MARK_SIGN);
				}
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				{
				setState(1597);
				match(LB_BRACKET);
				setState(1598);
				match(DIG_LITERAL);
				setState(1599);
				match(COMMA);
				setState(1600);
				match(DIG_LITERAL);
				setState(1601);
				match(RB_BRACKET);
				}
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				{
				setState(1602);
				match(LB_BRACKET);
				setState(1603);
				match(DIG_LITERAL);
				setState(1604);
				match(COMMA);
				setState(1605);
				match(RB_BRACKET);
				}
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				{
				setState(1606);
				match(LB_BRACKET);
				setState(1607);
				match(COMMA);
				setState(1608);
				match(DIG_LITERAL);
				setState(1609);
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
		enterRule(_localctx, 238, RULE_measuresClause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1612);
			match(KW_MEASURES);
			setState(1613);
			projectItemDefinition();
			setState(1618);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1614);
				match(COMMA);
				setState(1615);
				projectItemDefinition();
				}
				}
				setState(1620);
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
		enterRule(_localctx, 240, RULE_patternDefination);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1621);
			match(KW_PATTERN);
			setState(1622);
			match(LR_BRACKET);
			setState(1624); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(1623);
				patternVariable();
				}
				}
				setState(1626); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==DIG_LITERAL || _la==ID_LITERAL );
			setState(1628);
			match(RR_BRACKET);
			setState(1630);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_WITHIN) {
				{
				setState(1629);
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
		enterRule(_localctx, 242, RULE_patternVariable);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1632);
			unquotedIdentifier();
			setState(1634);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 389)) & ~0x3f) == 0 && ((1L << (_la - 389)) & ((1L << (LB_BRACKET - 389)) | (1L << (ASTERISK_SIGN - 389)) | (1L << (ADD_SIGN - 389)) | (1L << (QUESTION_MARK_SIGN - 389)))) != 0)) {
				{
				setState(1633);
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
		enterRule(_localctx, 244, RULE_outputMode);
		try {
			setState(1644);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_ALL:
				enterOuterAlt(_localctx, 1);
				{
				setState(1636);
				match(KW_ALL);
				setState(1637);
				match(KW_ROWS);
				setState(1638);
				match(KW_PER);
				setState(1639);
				match(KW_MATCH);
				}
				break;
			case KW_ONE:
				enterOuterAlt(_localctx, 2);
				{
				setState(1640);
				match(KW_ONE);
				setState(1641);
				match(KW_ROW);
				setState(1642);
				match(KW_PER);
				setState(1643);
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
		enterRule(_localctx, 246, RULE_afterMatchStrategy);
		try {
			setState(1670);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,196,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1646);
				match(KW_AFTER);
				setState(1647);
				match(KW_MATCH);
				setState(1648);
				match(KW_SKIP);
				setState(1649);
				match(KW_PAST);
				setState(1650);
				match(KW_LAST);
				setState(1651);
				match(KW_ROW);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1652);
				match(KW_AFTER);
				setState(1653);
				match(KW_MATCH);
				setState(1654);
				match(KW_SKIP);
				setState(1655);
				match(KW_TO);
				setState(1656);
				match(KW_NEXT);
				setState(1657);
				match(KW_ROW);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1658);
				match(KW_AFTER);
				setState(1659);
				match(KW_MATCH);
				setState(1660);
				match(KW_SKIP);
				setState(1661);
				match(KW_TO);
				setState(1662);
				match(KW_LAST);
				setState(1663);
				unquotedIdentifier();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1664);
				match(KW_AFTER);
				setState(1665);
				match(KW_MATCH);
				setState(1666);
				match(KW_SKIP);
				setState(1667);
				match(KW_TO);
				setState(1668);
				match(KW_FIRST);
				setState(1669);
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
		enterRule(_localctx, 248, RULE_patternVariablesDefination);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1672);
			match(KW_DEFINE);
			setState(1673);
			projectItemDefinition();
			setState(1678);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1674);
				match(COMMA);
				setState(1675);
				projectItemDefinition();
				}
				}
				setState(1680);
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
		enterRule(_localctx, 250, RULE_windowFrame);
		try {
			setState(1690);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_RANGE:
				enterOuterAlt(_localctx, 1);
				{
				setState(1681);
				match(KW_RANGE);
				setState(1682);
				match(KW_BETWEEN);
				setState(1683);
				timeIntervalExpression();
				setState(1684);
				frameBound();
				}
				break;
			case KW_ROWS:
				enterOuterAlt(_localctx, 2);
				{
				setState(1686);
				match(KW_ROWS);
				setState(1687);
				match(KW_BETWEEN);
				setState(1688);
				match(DIG_LITERAL);
				setState(1689);
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
		enterRule(_localctx, 252, RULE_frameBound);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1692);
			match(KW_PRECEDING);
			setState(1693);
			match(KW_AND);
			setState(1694);
			match(KW_CURRENT);
			setState(1695);
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
		enterRule(_localctx, 254, RULE_withinClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1697);
			match(KW_WITHIN);
			setState(1698);
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
		enterRule(_localctx, 256, RULE_expression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1700);
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
		int _startState = 258;
		enterRecursionRule(_localctx, 258, RULE_booleanExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1714);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,200,_ctx) ) {
			case 1:
				{
				_localctx = new LogicalNotContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(1703);
				match(KW_NOT);
				setState(1704);
				booleanExpression(6);
				}
				break;
			case 2:
				{
				_localctx = new ExistsContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1705);
				match(KW_EXISTS);
				setState(1706);
				match(LR_BRACKET);
				setState(1707);
				queryStatement(0);
				setState(1708);
				match(RR_BRACKET);
				}
				break;
			case 3:
				{
				_localctx = new PredicatedContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1710);
				valueExpression(0);
				setState(1712);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,199,_ctx) ) {
				case 1:
					{
					setState(1711);
					predicate();
					}
					break;
				}
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(1730);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,203,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(1728);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,202,_ctx) ) {
					case 1:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						((LogicalBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_booleanExpression);
						setState(1716);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(1717);
						((LogicalBinaryContext)_localctx).operator = match(KW_AND);
						setState(1718);
						((LogicalBinaryContext)_localctx).right = booleanExpression(4);
						}
						break;
					case 2:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						((LogicalBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_booleanExpression);
						setState(1719);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(1720);
						((LogicalBinaryContext)_localctx).operator = match(KW_OR);
						setState(1721);
						((LogicalBinaryContext)_localctx).right = booleanExpression(3);
						}
						break;
					case 3:
						{
						_localctx = new LogicalNestedContext(new BooleanExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_booleanExpression);
						setState(1722);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(1723);
						match(KW_IS);
						setState(1725);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==KW_NOT) {
							{
							setState(1724);
							match(KW_NOT);
							}
						}

						setState(1727);
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
				setState(1732);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,203,_ctx);
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
		enterRule(_localctx, 260, RULE_predicate);
		int _la;
		try {
			setState(1800);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,214,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1734);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1733);
					match(KW_NOT);
					}
				}

				setState(1736);
				((PredicateContext)_localctx).kind = match(KW_BETWEEN);
				setState(1738);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_ASYMMETRIC || _la==KW_SYMMETRIC) {
					{
					setState(1737);
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

				setState(1740);
				((PredicateContext)_localctx).lower = valueExpression(0);
				setState(1741);
				match(KW_AND);
				setState(1742);
				((PredicateContext)_localctx).upper = valueExpression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1745);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1744);
					match(KW_NOT);
					}
				}

				setState(1747);
				((PredicateContext)_localctx).kind = match(KW_IN);
				setState(1748);
				match(LR_BRACKET);
				setState(1749);
				expression();
				setState(1754);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1750);
					match(COMMA);
					setState(1751);
					expression();
					}
					}
					setState(1756);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1757);
				match(RR_BRACKET);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1760);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1759);
					match(KW_NOT);
					}
				}

				setState(1762);
				((PredicateContext)_localctx).kind = match(KW_IN);
				setState(1763);
				match(LR_BRACKET);
				setState(1764);
				queryStatement(0);
				setState(1765);
				match(RR_BRACKET);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1767);
				((PredicateContext)_localctx).kind = match(KW_EXISTS);
				setState(1768);
				match(LR_BRACKET);
				setState(1769);
				queryStatement(0);
				setState(1770);
				match(RR_BRACKET);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1773);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1772);
					match(KW_NOT);
					}
				}

				setState(1775);
				((PredicateContext)_localctx).kind = match(KW_RLIKE);
				setState(1776);
				((PredicateContext)_localctx).pattern = valueExpression(0);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1777);
				likePredicate();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(1778);
				match(KW_IS);
				setState(1780);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1779);
					match(KW_NOT);
					}
				}

				setState(1782);
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
				setState(1783);
				match(KW_IS);
				setState(1785);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1784);
					match(KW_NOT);
					}
				}

				setState(1787);
				((PredicateContext)_localctx).kind = match(KW_DISTINCT);
				setState(1788);
				match(KW_FROM);
				setState(1789);
				((PredicateContext)_localctx).right = valueExpression(0);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
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
				((PredicateContext)_localctx).kind = match(KW_SIMILAR);
				setState(1794);
				match(KW_TO);
				setState(1795);
				((PredicateContext)_localctx).right = valueExpression(0);
				setState(1798);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,213,_ctx) ) {
				case 1:
					{
					setState(1796);
					match(KW_ESCAPE);
					setState(1797);
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
		enterRule(_localctx, 262, RULE_likePredicate);
		int _la;
		try {
			setState(1831);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,220,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1803);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1802);
					match(KW_NOT);
					}
				}

				setState(1805);
				((LikePredicateContext)_localctx).kind = match(KW_LIKE);
				setState(1806);
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
				setState(1820);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,217,_ctx) ) {
				case 1:
					{
					setState(1807);
					match(LR_BRACKET);
					setState(1808);
					match(RR_BRACKET);
					}
					break;
				case 2:
					{
					setState(1809);
					match(LR_BRACKET);
					setState(1810);
					expression();
					setState(1815);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(1811);
						match(COMMA);
						setState(1812);
						expression();
						}
						}
						setState(1817);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					setState(1818);
					match(RR_BRACKET);
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1823);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1822);
					match(KW_NOT);
					}
				}

				setState(1825);
				((LikePredicateContext)_localctx).kind = match(KW_LIKE);
				setState(1826);
				((LikePredicateContext)_localctx).pattern = valueExpression(0);
				setState(1829);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,219,_ctx) ) {
				case 1:
					{
					setState(1827);
					match(KW_ESCAPE);
					setState(1828);
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
		int _startState = 264;
		enterRecursionRule(_localctx, 264, RULE_valueExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1837);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,221,_ctx) ) {
			case 1:
				{
				_localctx = new ValueExpressionDefaultContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(1834);
				primaryExpression(0);
				}
				break;
			case 2:
				{
				_localctx = new ArithmeticUnaryContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1835);
				((ArithmeticUnaryContext)_localctx).operator = _input.LT(1);
				_la = _input.LA(1);
				if ( !(((((_la - 380)) & ~0x3f) == 0 && ((1L << (_la - 380)) & ((1L << (BIT_NOT_OP - 380)) | (1L << (HYPNEN_SIGN - 380)) | (1L << (ADD_SIGN - 380)))) != 0)) ) {
					((ArithmeticUnaryContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(1836);
				valueExpression(8);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(1862);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,223,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(1860);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,222,_ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1839);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(1840);
						((ArithmeticBinaryContext)_localctx).operator = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==KW_DIV || ((((_la - 398)) & ~0x3f) == 0 && ((1L << (_la - 398)) & ((1L << (ASTERISK_SIGN - 398)) | (1L << (PENCENT_SIGN - 398)) | (1L << (SLASH_SIGN - 398)))) != 0)) ) {
							((ArithmeticBinaryContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(1841);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(8);
						}
						break;
					case 2:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1842);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(1843);
						((ArithmeticBinaryContext)_localctx).operator = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 400)) & ~0x3f) == 0 && ((1L << (_la - 400)) & ((1L << (HYPNEN_SIGN - 400)) | (1L << (ADD_SIGN - 400)) | (1L << (DOUBLE_VERTICAL_SIGN - 400)))) != 0)) ) {
							((ArithmeticBinaryContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(1844);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(7);
						}
						break;
					case 3:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1845);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(1846);
						((ArithmeticBinaryContext)_localctx).operator = match(BIT_AND_OP);
						setState(1847);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(6);
						}
						break;
					case 4:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1848);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(1849);
						((ArithmeticBinaryContext)_localctx).operator = match(BIT_XOR_OP);
						setState(1850);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(5);
						}
						break;
					case 5:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1851);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(1852);
						((ArithmeticBinaryContext)_localctx).operator = match(BIT_OR_OP);
						setState(1853);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(4);
						}
						break;
					case 6:
						{
						_localctx = new ComparisonContext(new ValueExpressionContext(_parentctx, _parentState));
						((ComparisonContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1854);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(1855);
						comparisonOperator();
						setState(1856);
						((ComparisonContext)_localctx).right = valueExpression(3);
						}
						break;
					case 7:
						{
						_localctx = new ArithmeticBinaryAlternateContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryAlternateContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1858);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(1859);
						((ArithmeticBinaryAlternateContext)_localctx).right = match(SLASH_TEXT);
						}
						break;
					}
					} 
				}
				setState(1864);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,223,_ctx);
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
		int _startState = 266;
		enterRecursionRule(_localctx, 266, RULE_primaryExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1956);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,233,_ctx) ) {
			case 1:
				{
				_localctx = new SearchedCaseContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(1866);
				match(KW_CASE);
				setState(1868); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(1867);
					whenClause();
					}
					}
					setState(1870); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==KW_WHEN );
				setState(1874);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_ELSE) {
					{
					setState(1872);
					match(KW_ELSE);
					setState(1873);
					((SearchedCaseContext)_localctx).elseExpression = expression();
					}
				}

				setState(1876);
				match(KW_END);
				}
				break;
			case 2:
				{
				_localctx = new SimpleCaseContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1878);
				match(KW_CASE);
				setState(1879);
				((SimpleCaseContext)_localctx).value = expression();
				setState(1881); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(1880);
					whenClause();
					}
					}
					setState(1883); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==KW_WHEN );
				setState(1887);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_ELSE) {
					{
					setState(1885);
					match(KW_ELSE);
					setState(1886);
					((SimpleCaseContext)_localctx).elseExpression = expression();
					}
				}

				setState(1889);
				match(KW_END);
				}
				break;
			case 3:
				{
				_localctx = new CastContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1891);
				match(KW_CAST);
				setState(1892);
				match(LR_BRACKET);
				setState(1893);
				expression();
				setState(1894);
				match(KW_AS);
				setState(1895);
				columnType();
				setState(1896);
				match(RR_BRACKET);
				}
				break;
			case 4:
				{
				_localctx = new FirstContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1898);
				match(KW_FIRST);
				setState(1899);
				match(LR_BRACKET);
				setState(1900);
				expression();
				setState(1903);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_IGNORE) {
					{
					setState(1901);
					match(KW_IGNORE);
					setState(1902);
					match(KW_NULLS);
					}
				}

				setState(1905);
				match(RR_BRACKET);
				}
				break;
			case 5:
				{
				_localctx = new LastContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1907);
				match(KW_LAST);
				setState(1908);
				match(LR_BRACKET);
				setState(1909);
				expression();
				setState(1912);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_IGNORE) {
					{
					setState(1910);
					match(KW_IGNORE);
					setState(1911);
					match(KW_NULLS);
					}
				}

				setState(1914);
				match(RR_BRACKET);
				}
				break;
			case 6:
				{
				_localctx = new PositionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1916);
				match(KW_POSITION);
				setState(1917);
				match(LR_BRACKET);
				setState(1918);
				((PositionContext)_localctx).substr = valueExpression(0);
				setState(1919);
				match(KW_IN);
				setState(1920);
				((PositionContext)_localctx).str = valueExpression(0);
				setState(1921);
				match(RR_BRACKET);
				}
				break;
			case 7:
				{
				_localctx = new ConstantDefaultContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1923);
				constant();
				}
				break;
			case 8:
				{
				_localctx = new StarContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1924);
				match(ASTERISK_SIGN);
				}
				break;
			case 9:
				{
				_localctx = new StarContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1925);
				uid();
				setState(1926);
				match(DOT);
				setState(1927);
				match(ASTERISK_SIGN);
				}
				break;
			case 10:
				{
				_localctx = new SubqueryExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1929);
				match(LR_BRACKET);
				setState(1930);
				queryStatement(0);
				setState(1931);
				match(RR_BRACKET);
				}
				break;
			case 11:
				{
				_localctx = new FunctionCallContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1933);
				functionName();
				setState(1934);
				match(LR_BRACKET);
				setState(1946);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << KW_ADD) | (1L << KW_ADMIN) | (1L << KW_AFTER) | (1L << KW_ANALYZE) | (1L << KW_ASC) | (1L << KW_BEFORE) | (1L << KW_BYTES) | (1L << KW_CASCADE) | (1L << KW_CATALOG) | (1L << KW_CATALOGS) | (1L << KW_CENTURY) | (1L << KW_CHAIN) | (1L << KW_CHANGELOG_MODE) | (1L << KW_CHARACTERS) | (1L << KW_COMMENT) | (1L << KW_COMPACT) | (1L << KW_COLUMNS) | (1L << KW_CONSTRAINTS) | (1L << KW_CONSTRUCTOR) | (1L << KW_CUMULATE) | (1L << KW_DATA) | (1L << KW_DATABASE) | (1L << KW_DATABASES) | (1L << KW_DAYS) | (1L << KW_DECADE) | (1L << KW_DEFINED) | (1L << KW_DESC) | (1L << KW_DESCRIPTOR) | (1L << KW_DIV) | (1L << KW_ENCODING) | (1L << KW_ENFORCED) | (1L << KW_ENGINE) | (1L << KW_EPOCH) | (1L << KW_ERROR) | (1L << KW_ESTIMATED_COST) | (1L << KW_EXCEPTION) | (1L << KW_EXCLUDE) | (1L << KW_EXCLUDING) | (1L << KW_EXTENDED) | (1L << KW_FILE) | (1L << KW_FINAL) | (1L << KW_FIRST) | (1L << KW_FOLLOWING) | (1L << KW_FORMAT) | (1L << KW_FORTRAN) | (1L << KW_FOUND) | (1L << KW_FRAC_SECOND) | (1L << KW_FUNCTIONS) | (1L << KW_GENERAL) | (1L << KW_GENERATED) | (1L << KW_GO) | (1L << KW_GOTO) | (1L << KW_GRANTED) | (1L << KW_HOP) | (1L << KW_HOURS) | (1L << KW_IF) | (1L << KW_IGNORE) | (1L << KW_INCREMENT) | (1L << KW_INPUT) | (1L << KW_INVOKER))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (KW_JAR - 64)) | (1L << (KW_JARS - 64)) | (1L << (KW_JAVA - 64)) | (1L << (KW_JSON - 64)) | (1L << (KW_JSON_EXECUTION_PLAN - 64)) | (1L << (KW_KEY - 64)) | (1L << (KW_KEY_MEMBER - 64)) | (1L << (KW_KEY_TYPE - 64)) | (1L << (KW_LABEL - 64)) | (1L << (KW_LAST - 64)) | (1L << (KW_LENGTH - 64)) | (1L << (KW_LEVEL - 64)) | (1L << (KW_LOAD - 64)) | (1L << (KW_MAP - 64)) | (1L << (KW_MICROSECOND - 64)) | (1L << (KW_MILLENNIUM - 64)) | (1L << (KW_MILLISECOND - 64)) | (1L << (KW_MINUTES - 64)) | (1L << (KW_MINVALUE - 64)) | (1L << (KW_MODIFY - 64)) | (1L << (KW_MODULES - 64)) | (1L << (KW_MONTHS - 64)) | (1L << (KW_NANOSECOND - 64)) | (1L << (KW_NULLS - 64)) | (1L << (KW_NUMBER - 64)) | (1L << (KW_OPTION - 64)) | (1L << (KW_OPTIONS - 64)) | (1L << (KW_ORDERING - 64)) | (1L << (KW_OUTPUT - 64)) | (1L << (KW_OVERWRITE - 64)) | (1L << (KW_OVERWRITING - 64)) | (1L << (KW_PARTITIONED - 64)) | (1L << (KW_PARTITIONS - 64)) | (1L << (KW_PASSING - 64)) | (1L << (KW_PAST - 64)) | (1L << (KW_PATH - 64)) | (1L << (KW_PLACING - 64)) | (1L << (KW_PLAN - 64)) | (1L << (KW_PRECEDING - 64)) | (1L << (KW_PRESERVE - 64)) | (1L << (KW_PRIOR - 64)) | (1L << (KW_PRIVILEGES - 64)) | (1L << (KW_PUBLIC - 64)) | (1L << (KW_PYTHON - 64)) | (1L << (KW_PYTHON_FILES - 64)) | (1L << (KW_PYTHON_REQUIREMENTS - 64)) | (1L << (KW_PYTHON_DEPENDENCIES - 64)) | (1L << (KW_PYTHON_JAR - 64)) | (1L << (KW_PYTHON_ARCHIVES - 64)) | (1L << (KW_PYTHON_PARAMETER - 64)) | (1L << (KW_QUARTER - 64)) | (1L << (KW_RAW - 64)) | (1L << (KW_READ - 64)) | (1L << (KW_RELATIVE - 64)) | (1L << (KW_REMOVE - 64)) | (1L << (KW_RENAME - 64)) | (1L << (KW_REPLACE - 64)) | (1L << (KW_RESPECT - 64)) | (1L << (KW_RESTART - 64)) | (1L << (KW_RESTRICT - 64)) | (1L << (KW_ROLE - 64)) | (1L << (KW_ROW_COUNT - 64)) | (1L << (KW_SCALA - 64)) | (1L << (KW_SCALAR - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (KW_SCALE - 128)) | (1L << (KW_SCHEMA - 128)) | (1L << (KW_SECONDS - 128)) | (1L << (KW_SECTION - 128)) | (1L << (KW_SECURITY - 128)) | (1L << (KW_SELF - 128)) | (1L << (KW_SERVER - 128)) | (1L << (KW_SERVER_NAME - 128)) | (1L << (KW_SESSION - 128)) | (1L << (KW_SETS - 128)) | (1L << (KW_SIMPLE - 128)) | (1L << (KW_SIZE - 128)) | (1L << (KW_SLIDE - 128)) | (1L << (KW_SOURCE - 128)) | (1L << (KW_SPACE - 128)) | (1L << (KW_STATE - 128)) | (1L << (KW_STATEMENT - 128)) | (1L << (KW_STEP - 128)) | (1L << (KW_STRING - 128)) | (1L << (KW_STRUCTURE - 128)) | (1L << (KW_STYLE - 128)) | (1L << (KW_TABLES - 128)) | (1L << (KW_TEMPORARY - 128)) | (1L << (KW_TIMECOL - 128)) | (1L << (KW_TIMESTAMP_LTZ - 128)) | (1L << (KW_TIMESTAMPADD - 128)) | (1L << (KW_TIMESTAMPDIFF - 128)) | (1L << (KW_TRANSFORM - 128)) | (1L << (KW_TUMBLE - 128)) | (1L << (KW_TYPE - 128)) | (1L << (KW_UNDER - 128)) | (1L << (KW_UNLOAD - 128)) | (1L << (KW_USAGE - 128)) | (1L << (KW_USE - 128)) | (1L << (KW_UTF16 - 128)) | (1L << (KW_UTF32 - 128)) | (1L << (KW_UTF8 - 128)) | (1L << (KW_VERSION - 128)) | (1L << (KW_VIEW - 128)) | (1L << (KW_VIEWS - 128)) | (1L << (KW_VIRTUAL - 128)) | (1L << (KW_WATERMARK - 128)) | (1L << (KW_WATERMARKS - 128)) | (1L << (KW_WEEK - 128)) | (1L << (KW_WEEKS - 128)) | (1L << (KW_WORK - 128)) | (1L << (KW_WRAPPER - 128)) | (1L << (KW_YEARS - 128)) | (1L << (KW_ZONE - 128)) | (1L << (KW_ABS - 128)) | (1L << (KW_ALL - 128)) | (1L << (KW_ARRAY - 128)) | (1L << (KW_AVG - 128)))) != 0) || ((((_la - 196)) & ~0x3f) == 0 && ((1L << (_la - 196)) & ((1L << (KW_BOTH - 196)) | (1L << (KW_CASE - 196)) | (1L << (KW_CAST - 196)) | (1L << (KW_CEIL - 196)) | (1L << (KW_COALESCE - 196)) | (1L << (KW_COLLECT - 196)) | (1L << (KW_COUNT - 196)) | (1L << (KW_DATE - 196)) | (1L << (KW_DAY - 196)) | (1L << (KW_DISTINCT - 196)) | (1L << (KW_EXISTS - 196)) | (1L << (KW_FALSE - 196)) | (1L << (KW_GROUPING - 196)))) != 0) || ((((_la - 261)) & ~0x3f) == 0 && ((1L << (_la - 261)) & ((1L << (KW_HOUR - 261)) | (1L << (KW_INTERVAL - 261)) | (1L << (KW_LAG - 261)) | (1L << (KW_LEADING - 261)) | (1L << (KW_LEFT - 261)) | (1L << (KW_MINUTE - 261)) | (1L << (KW_MONTH - 261)) | (1L << (KW_NOT - 261)) | (1L << (KW_NULL - 261)) | (1L << (KW_OVERLAY - 261)) | (1L << (KW_POSITION - 261)) | (1L << (KW_POWER - 261)) | (1L << (KW_RANK - 261)) | (1L << (KW_RIGHT - 261)))) != 0) || ((((_la - 329)) & ~0x3f) == 0 && ((1L << (_la - 329)) & ((1L << (KW_SECOND - 329)) | (1L << (KW_SUBSTRING - 329)) | (1L << (KW_SUM - 329)) | (1L << (KW_TIME - 329)) | (1L << (KW_TIMESTAMP - 329)) | (1L << (KW_TIMESTAMP_3 - 329)) | (1L << (KW_TIMESTAMP_6 - 329)) | (1L << (KW_TIMESTAMP_9 - 329)) | (1L << (KW_TRAILING - 329)) | (1L << (KW_TRUE - 329)) | (1L << (KW_TRUNCATE - 329)) | (1L << (KW_UPPER - 329)) | (1L << (KW_YEAR - 329)) | (1L << (BIT_NOT_OP - 329)) | (1L << (LR_BRACKET - 329)))) != 0) || ((((_la - 398)) & ~0x3f) == 0 && ((1L << (_la - 398)) & ((1L << (ASTERISK_SIGN - 398)) | (1L << (HYPNEN_SIGN - 398)) | (1L << (ADD_SIGN - 398)) | (1L << (STRING_LITERAL - 398)) | (1L << (DIG_LITERAL - 398)) | (1L << (REAL_LITERAL - 398)) | (1L << (BIT_STRING - 398)) | (1L << (ID_LITERAL - 398)))) != 0)) {
					{
					setState(1936);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,230,_ctx) ) {
					case 1:
						{
						setState(1935);
						setQuantifier();
						}
						break;
					}
					setState(1938);
					functionParam();
					setState(1943);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(1939);
						match(COMMA);
						setState(1940);
						functionParam();
						}
						}
						setState(1945);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(1948);
				match(RR_BRACKET);
				}
				break;
			case 12:
				{
				_localctx = new ColumnReferenceContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1950);
				identifier();
				}
				break;
			case 13:
				{
				_localctx = new DereferenceContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1951);
				dereferenceDefinition();
				}
				break;
			case 14:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1952);
				match(LR_BRACKET);
				setState(1953);
				expression();
				setState(1954);
				match(RR_BRACKET);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(1965);
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
					setState(1958);
					if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
					setState(1959);
					match(LS_BRACKET);
					setState(1960);
					((SubscriptContext)_localctx).index = valueExpression(0);
					setState(1961);
					match(RS_BRACKET);
					}
					} 
				}
				setState(1967);
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
		enterRule(_localctx, 268, RULE_functionName);
		try {
			setState(1971);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,235,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1968);
				reservedKeywordsUsedAsFuncName();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1969);
				nonReservedKeywords();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1970);
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
		enterRule(_localctx, 270, RULE_functionParam);
		try {
			setState(1977);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,236,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1973);
				reservedKeywordsUsedAsFuncParam();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1974);
				timeIntervalUnit();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1975);
				timePointUnit();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1976);
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
		enterRule(_localctx, 272, RULE_dereferenceDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1979);
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
		enterRule(_localctx, 274, RULE_correlationName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1981);
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
		enterRule(_localctx, 276, RULE_qualifiedName);
		try {
			setState(1985);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,237,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1983);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1984);
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
		enterRule(_localctx, 278, RULE_timeIntervalExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1987);
			match(KW_INTERVAL);
			setState(1990);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,238,_ctx) ) {
			case 1:
				{
				setState(1988);
				errorCapturingMultiUnitsInterval();
				}
				break;
			case 2:
				{
				setState(1989);
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
		enterRule(_localctx, 280, RULE_errorCapturingMultiUnitsInterval);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1992);
			multiUnitsInterval();
			setState(1994);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,239,_ctx) ) {
			case 1:
				{
				setState(1993);
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
		enterRule(_localctx, 282, RULE_multiUnitsInterval);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1999); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(1996);
					intervalValue();
					setState(1997);
					timeIntervalUnit();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(2001); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,240,_ctx);
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
		enterRule(_localctx, 284, RULE_errorCapturingUnitToUnitInterval);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2003);
			((ErrorCapturingUnitToUnitIntervalContext)_localctx).body = unitToUnitInterval();
			setState(2006);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,241,_ctx) ) {
			case 1:
				{
				setState(2004);
				((ErrorCapturingUnitToUnitIntervalContext)_localctx).error1 = multiUnitsInterval();
				}
				break;
			case 2:
				{
				setState(2005);
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
		enterRule(_localctx, 286, RULE_unitToUnitInterval);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2008);
			((UnitToUnitIntervalContext)_localctx).value = intervalValue();
			setState(2009);
			((UnitToUnitIntervalContext)_localctx).from = timeIntervalUnit();
			setState(2010);
			match(KW_TO);
			setState(2011);
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
		enterRule(_localctx, 288, RULE_intervalValue);
		int _la;
		try {
			setState(2018);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case HYPNEN_SIGN:
			case ADD_SIGN:
			case DIG_LITERAL:
			case REAL_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(2014);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==HYPNEN_SIGN || _la==ADD_SIGN) {
					{
					setState(2013);
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

				setState(2016);
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
				setState(2017);
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
		enterRule(_localctx, 290, RULE_columnAlias);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2021);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_AS) {
				{
				setState(2020);
				match(KW_AS);
				}
			}

			setState(2023);
			identifier();
			setState(2025);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LR_BRACKET) {
				{
				setState(2024);
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
		enterRule(_localctx, 292, RULE_tableAlias);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2028);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_AS) {
				{
				setState(2027);
				match(KW_AS);
				}
			}

			setState(2030);
			identifier();
			setState(2032);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,247,_ctx) ) {
			case 1:
				{
				setState(2031);
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
		enterRule(_localctx, 294, RULE_errorCapturingIdentifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2034);
			identifier();
			setState(2035);
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
		enterRule(_localctx, 296, RULE_errorCapturingIdentifierExtra);
		int _la;
		try {
			setState(2044);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_MINUS:
				_localctx = new ErrorIdentContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(2039); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(2037);
					match(KW_MINUS);
					setState(2038);
					identifier();
					}
					}
					setState(2041); 
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
		enterRule(_localctx, 298, RULE_identifierList);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2046);
			match(LR_BRACKET);
			setState(2047);
			identifierSeq();
			setState(2048);
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
		enterRule(_localctx, 300, RULE_identifierSeq);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2050);
			identifier();
			setState(2055);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(2051);
				match(COMMA);
				setState(2052);
				identifier();
				}
				}
				setState(2057);
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

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 302, RULE_identifier);
		try {
			setState(2061);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DIG_LITERAL:
			case ID_LITERAL:
				_localctx = new UnquotedIdentifierAlternativeContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(2058);
				unquotedIdentifier();
				}
				break;
			case STRING_LITERAL:
				_localctx = new QuotedIdentifierAlternativeContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(2059);
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
				setState(2060);
				nonReservedKeywords();
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
		enterRule(_localctx, 304, RULE_unquotedIdentifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2063);
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
		enterRule(_localctx, 306, RULE_quotedIdentifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2065);
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
		enterRule(_localctx, 308, RULE_whenClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2067);
			match(KW_WHEN);
			setState(2068);
			((WhenClauseContext)_localctx).condition = expression();
			setState(2069);
			match(KW_THEN);
			setState(2070);
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
		enterRule(_localctx, 310, RULE_catalogPath);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2072);
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
		enterRule(_localctx, 312, RULE_databasePath);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2074);
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
		enterRule(_localctx, 314, RULE_databasePathCreate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2076);
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
		enterRule(_localctx, 316, RULE_tablePathCreate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2078);
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
		enterRule(_localctx, 318, RULE_tablePath);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2080);
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
		enterRule(_localctx, 320, RULE_uid);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(2082);
			identifier();
			setState(2087);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,252,_ctx);
			while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1+1 ) {
					{
					{
					setState(2083);
					match(DOT);
					setState(2084);
					identifier();
					}
					} 
				}
				setState(2089);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,252,_ctx);
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
		enterRule(_localctx, 322, RULE_withOption);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2090);
			match(KW_WITH);
			setState(2091);
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
		enterRule(_localctx, 324, RULE_ifNotExists);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2093);
			match(KW_IF);
			setState(2094);
			match(KW_NOT);
			setState(2095);
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
		enterRule(_localctx, 326, RULE_ifExists);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2097);
			match(KW_IF);
			setState(2098);
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
		enterRule(_localctx, 328, RULE_tablePropertyList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2100);
			match(LR_BRACKET);
			setState(2101);
			tableProperty();
			setState(2106);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(2102);
				match(COMMA);
				setState(2103);
				tableProperty();
				}
				}
				setState(2108);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(2109);
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
		enterRule(_localctx, 330, RULE_tableProperty);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2111);
			((TablePropertyContext)_localctx).key = tablePropertyKey();
			setState(2116);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_FALSE || ((((_la - 355)) & ~0x3f) == 0 && ((1L << (_la - 355)) & ((1L << (KW_TRUE - 355)) | (1L << (EQUAL_SYMBOL - 355)) | (1L << (STRING_LITERAL - 355)) | (1L << (DIG_LITERAL - 355)) | (1L << (REAL_LITERAL - 355)))) != 0)) {
				{
				setState(2113);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==EQUAL_SYMBOL) {
					{
					setState(2112);
					match(EQUAL_SYMBOL);
					}
				}

				setState(2115);
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
		enterRule(_localctx, 332, RULE_tablePropertyKey);
		try {
			setState(2121);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,256,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2118);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2119);
				dereferenceDefinition();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2120);
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
		enterRule(_localctx, 334, RULE_tablePropertyValue);
		try {
			setState(2127);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DIG_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(2123);
				match(DIG_LITERAL);
				}
				break;
			case REAL_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(2124);
				match(REAL_LITERAL);
				}
				break;
			case KW_FALSE:
			case KW_TRUE:
				enterOuterAlt(_localctx, 3);
				{
				setState(2125);
				booleanLiteral();
				}
				break;
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 4);
				{
				setState(2126);
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
		enterRule(_localctx, 336, RULE_logicalOperator);
		try {
			setState(2135);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_AND:
				enterOuterAlt(_localctx, 1);
				{
				setState(2129);
				match(KW_AND);
				}
				break;
			case BIT_AND_OP:
				enterOuterAlt(_localctx, 2);
				{
				setState(2130);
				match(BIT_AND_OP);
				setState(2131);
				match(BIT_AND_OP);
				}
				break;
			case KW_OR:
				enterOuterAlt(_localctx, 3);
				{
				setState(2132);
				match(KW_OR);
				}
				break;
			case BIT_OR_OP:
				enterOuterAlt(_localctx, 4);
				{
				setState(2133);
				match(BIT_OR_OP);
				setState(2134);
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
		enterRule(_localctx, 338, RULE_comparisonOperator);
		try {
			setState(2151);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,259,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2137);
				match(EQUAL_SYMBOL);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2138);
				match(GREATER_SYMBOL);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2139);
				match(LESS_SYMBOL);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2140);
				match(LESS_SYMBOL);
				setState(2141);
				match(EQUAL_SYMBOL);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(2142);
				match(GREATER_SYMBOL);
				setState(2143);
				match(EQUAL_SYMBOL);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(2144);
				match(LESS_SYMBOL);
				setState(2145);
				match(GREATER_SYMBOL);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(2146);
				match(EXCLAMATION_SYMBOL);
				setState(2147);
				match(EQUAL_SYMBOL);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(2148);
				match(LESS_SYMBOL);
				setState(2149);
				match(EQUAL_SYMBOL);
				setState(2150);
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
		enterRule(_localctx, 340, RULE_bitOperator);
		try {
			setState(2160);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LESS_SYMBOL:
				enterOuterAlt(_localctx, 1);
				{
				setState(2153);
				match(LESS_SYMBOL);
				setState(2154);
				match(LESS_SYMBOL);
				}
				break;
			case GREATER_SYMBOL:
				enterOuterAlt(_localctx, 2);
				{
				setState(2155);
				match(GREATER_SYMBOL);
				setState(2156);
				match(GREATER_SYMBOL);
				}
				break;
			case BIT_AND_OP:
				enterOuterAlt(_localctx, 3);
				{
				setState(2157);
				match(BIT_AND_OP);
				}
				break;
			case BIT_XOR_OP:
				enterOuterAlt(_localctx, 4);
				{
				setState(2158);
				match(BIT_XOR_OP);
				}
				break;
			case BIT_OR_OP:
				enterOuterAlt(_localctx, 5);
				{
				setState(2159);
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
		enterRule(_localctx, 342, RULE_mathOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2162);
			_la = _input.LA(1);
			if ( !(_la==KW_DIV || ((((_la - 398)) & ~0x3f) == 0 && ((1L << (_la - 398)) & ((1L << (ASTERISK_SIGN - 398)) | (1L << (HYPNEN_SIGN - 398)) | (1L << (ADD_SIGN - 398)) | (1L << (PENCENT_SIGN - 398)) | (1L << (DOUBLE_HYPNEN_SIGN - 398)) | (1L << (SLASH_SIGN - 398)))) != 0)) ) {
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
		enterRule(_localctx, 344, RULE_unaryOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2164);
			_la = _input.LA(1);
			if ( !(_la==KW_NOT || ((((_la - 379)) & ~0x3f) == 0 && ((1L << (_la - 379)) & ((1L << (EXCLAMATION_SYMBOL - 379)) | (1L << (BIT_NOT_OP - 379)) | (1L << (HYPNEN_SIGN - 379)) | (1L << (ADD_SIGN - 379)))) != 0)) ) {
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
		enterRule(_localctx, 346, RULE_constant);
		int _la;
		try {
			setState(2180);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_INTERVAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(2166);
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
				setState(2167);
				timePointLiteral();
				}
				break;
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 3);
				{
				setState(2168);
				stringLiteral();
				}
				break;
			case HYPNEN_SIGN:
			case DIG_LITERAL:
				enterOuterAlt(_localctx, 4);
				{
				setState(2170);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==HYPNEN_SIGN) {
					{
					setState(2169);
					match(HYPNEN_SIGN);
					}
				}

				setState(2172);
				decimalLiteral();
				}
				break;
			case KW_FALSE:
			case KW_TRUE:
				enterOuterAlt(_localctx, 5);
				{
				setState(2173);
				booleanLiteral();
				}
				break;
			case REAL_LITERAL:
				enterOuterAlt(_localctx, 6);
				{
				setState(2174);
				match(REAL_LITERAL);
				}
				break;
			case BIT_STRING:
				enterOuterAlt(_localctx, 7);
				{
				setState(2175);
				match(BIT_STRING);
				}
				break;
			case KW_NOT:
			case KW_NULL:
				enterOuterAlt(_localctx, 8);
				{
				setState(2177);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(2176);
					match(KW_NOT);
					}
				}

				setState(2179);
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
		enterRule(_localctx, 348, RULE_timePointLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2182);
			timePointUnit();
			setState(2183);
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
		enterRule(_localctx, 350, RULE_stringLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2185);
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
		enterRule(_localctx, 352, RULE_decimalLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2187);
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
		enterRule(_localctx, 354, RULE_booleanLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2189);
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
		enterRule(_localctx, 356, RULE_setQuantifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2191);
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
		enterRule(_localctx, 358, RULE_timePointUnit);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2193);
			_la = _input.LA(1);
			if ( !(((((_la - 78)) & ~0x3f) == 0 && ((1L << (_la - 78)) & ((1L << (KW_MICROSECOND - 78)) | (1L << (KW_MILLISECOND - 78)) | (1L << (KW_QUARTER - 78)))) != 0) || _la==KW_WEEK || _la==KW_DAY || ((((_la - 261)) & ~0x3f) == 0 && ((1L << (_la - 261)) & ((1L << (KW_HOUR - 261)) | (1L << (KW_MINUTE - 261)) | (1L << (KW_MONTH - 261)))) != 0) || _la==KW_SECOND || _la==KW_YEAR) ) {
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
		enterRule(_localctx, 360, RULE_timeIntervalUnit);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2195);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << KW_CENTURY) | (1L << KW_DAYS) | (1L << KW_DECADE) | (1L << KW_EPOCH) | (1L << KW_HOURS))) != 0) || ((((_la - 78)) & ~0x3f) == 0 && ((1L << (_la - 78)) & ((1L << (KW_MICROSECOND - 78)) | (1L << (KW_MILLENNIUM - 78)) | (1L << (KW_MILLISECOND - 78)) | (1L << (KW_MINUTES - 78)) | (1L << (KW_MONTHS - 78)) | (1L << (KW_NANOSECOND - 78)) | (1L << (KW_QUARTER - 78)) | (1L << (KW_SECONDS - 78)))) != 0) || ((((_la - 171)) & ~0x3f) == 0 && ((1L << (_la - 171)) & ((1L << (KW_WEEK - 171)) | (1L << (KW_WEEKS - 171)) | (1L << (KW_YEARS - 171)) | (1L << (KW_DAY - 171)))) != 0) || ((((_la - 261)) & ~0x3f) == 0 && ((1L << (_la - 261)) & ((1L << (KW_HOUR - 261)) | (1L << (KW_MINUTE - 261)) | (1L << (KW_MONTH - 261)))) != 0) || _la==KW_SECOND || _la==KW_YEAR) ) {
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
		enterRule(_localctx, 362, RULE_reservedKeywordsUsedAsFuncParam);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2197);
			_la = _input.LA(1);
			if ( !(((((_la - 178)) & ~0x3f) == 0 && ((1L << (_la - 178)) & ((1L << (KW_ALL - 178)) | (1L << (KW_BOTH - 178)) | (1L << (KW_DISTINCT - 178)))) != 0) || _la==KW_LEADING || _la==KW_TRAILING || _la==ASTERISK_SIGN) ) {
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
		enterRule(_localctx, 364, RULE_reservedKeywordsUsedAsFuncName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2199);
			_la = _input.LA(1);
			if ( !(((((_la - 59)) & ~0x3f) == 0 && ((1L << (_la - 59)) & ((1L << (KW_IF - 59)) | (1L << (KW_MAP - 59)) | (1L << (KW_QUARTER - 59)))) != 0) || ((((_la - 171)) & ~0x3f) == 0 && ((1L << (_la - 171)) & ((1L << (KW_WEEK - 171)) | (1L << (KW_ABS - 171)) | (1L << (KW_ARRAY - 171)) | (1L << (KW_AVG - 171)) | (1L << (KW_CAST - 171)) | (1L << (KW_CEIL - 171)) | (1L << (KW_COALESCE - 171)) | (1L << (KW_COLLECT - 171)) | (1L << (KW_COUNT - 171)) | (1L << (KW_DATE - 171)))) != 0) || ((((_la - 258)) & ~0x3f) == 0 && ((1L << (_la - 258)) & ((1L << (KW_GROUPING - 258)) | (1L << (KW_HOUR - 258)) | (1L << (KW_LAG - 258)) | (1L << (KW_LEFT - 258)) | (1L << (KW_MINUTE - 258)) | (1L << (KW_MONTH - 258)) | (1L << (KW_OVERLAY - 258)) | (1L << (KW_POSITION - 258)) | (1L << (KW_POWER - 258)) | (1L << (KW_RANK - 258)))) != 0) || ((((_la - 323)) & ~0x3f) == 0 && ((1L << (_la - 323)) & ((1L << (KW_RIGHT - 323)) | (1L << (KW_SECOND - 323)) | (1L << (KW_SUBSTRING - 323)) | (1L << (KW_SUM - 323)) | (1L << (KW_TIME - 323)) | (1L << (KW_TIMESTAMP - 323)) | (1L << (KW_TIMESTAMP_3 - 323)) | (1L << (KW_TIMESTAMP_6 - 323)) | (1L << (KW_TIMESTAMP_9 - 323)) | (1L << (KW_TRUNCATE - 323)) | (1L << (KW_UPPER - 323)) | (1L << (KW_YEAR - 323)))) != 0)) ) {
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
		enterRule(_localctx, 366, RULE_reservedKeywords);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2201);
			_la = _input.LA(1);
			if ( !(((((_la - 177)) & ~0x3f) == 0 && ((1L << (_la - 177)) & ((1L << (KW_ABS - 177)) | (1L << (KW_ALL - 177)) | (1L << (KW_ALLOW - 177)) | (1L << (KW_ALTER - 177)) | (1L << (KW_AND - 177)) | (1L << (KW_ANY - 177)) | (1L << (KW_ARE - 177)) | (1L << (KW_ARRAY - 177)) | (1L << (KW_AS - 177)) | (1L << (KW_ASYMMETRIC - 177)) | (1L << (KW_AT - 177)) | (1L << (KW_AVG - 177)) | (1L << (KW_BEGIN - 177)) | (1L << (KW_BETWEEN - 177)) | (1L << (KW_BIGINT - 177)) | (1L << (KW_BINARY - 177)) | (1L << (KW_BIT - 177)) | (1L << (KW_BLOB - 177)) | (1L << (KW_BOOLEAN - 177)) | (1L << (KW_BOTH - 177)) | (1L << (KW_BY - 177)) | (1L << (KW_CALL - 177)) | (1L << (KW_CALLED - 177)) | (1L << (KW_CASCADED - 177)) | (1L << (KW_CASE - 177)) | (1L << (KW_CAST - 177)) | (1L << (KW_CEIL - 177)) | (1L << (KW_CHAR - 177)) | (1L << (KW_CHARACTER - 177)) | (1L << (KW_CHECK - 177)) | (1L << (KW_CLOB - 177)) | (1L << (KW_CLOSE - 177)) | (1L << (KW_COALESCE - 177)) | (1L << (KW_COLLATE - 177)) | (1L << (KW_COLLECT - 177)) | (1L << (KW_COLUMN - 177)) | (1L << (KW_COMMIT - 177)) | (1L << (KW_CONNECT - 177)) | (1L << (KW_CONSTRAINT - 177)) | (1L << (KW_CONTAINS - 177)) | (1L << (KW_CONVERT - 177)) | (1L << (KW_COUNT - 177)) | (1L << (KW_CREATE - 177)) | (1L << (KW_CROSS - 177)) | (1L << (KW_CUBE - 177)) | (1L << (KW_CURRENT - 177)) | (1L << (KW_CURSOR - 177)) | (1L << (KW_CYCLE - 177)) | (1L << (KW_DATE - 177)) | (1L << (KW_DATETIME - 177)) | (1L << (KW_DAY - 177)) | (1L << (KW_DEC - 177)) | (1L << (KW_DECIMAL - 177)) | (1L << (KW_DECLARE - 177)) | (1L << (KW_DEFAULT - 177)) | (1L << (KW_DEFINE - 177)) | (1L << (KW_DELETE - 177)) | (1L << (KW_DESCRIBE - 177)) | (1L << (KW_DISTINCT - 177)) | (1L << (KW_DOUBLE - 177)) | (1L << (KW_DROP - 177)) | (1L << (KW_EACH - 177)) | (1L << (KW_ELSE - 177)) | (1L << (KW_END - 177)))) != 0) || ((((_la - 241)) & ~0x3f) == 0 && ((1L << (_la - 241)) & ((1L << (KW_EQUALS - 241)) | (1L << (KW_EXCEPT - 241)) | (1L << (KW_EXECUTE - 241)) | (1L << (KW_EXISTS - 241)) | (1L << (KW_EXPLAIN - 241)) | (1L << (KW_EXTERNAL - 241)) | (1L << (KW_EXTRACT - 241)) | (1L << (KW_FALSE - 241)) | (1L << (KW_FLOAT - 241)) | (1L << (KW_FOR - 241)) | (1L << (KW_FROM - 241)) | (1L << (KW_FULL - 241)) | (1L << (KW_FUNCTION - 241)) | (1L << (KW_GLOBAL - 241)) | (1L << (KW_GRANT - 241)) | (1L << (KW_GROUP - 241)) | (1L << (KW_GROUPING - 241)) | (1L << (KW_GROUPS - 241)) | (1L << (KW_HAVING - 241)) | (1L << (KW_HOUR - 241)) | (1L << (KW_IMPORT - 241)) | (1L << (KW_IN - 241)) | (1L << (KW_INCLUDING - 241)) | (1L << (KW_INNER - 241)) | (1L << (KW_INOUT - 241)) | (1L << (KW_INSERT - 241)) | (1L << (KW_INT - 241)) | (1L << (KW_INTEGER - 241)) | (1L << (KW_INTERSECT - 241)) | (1L << (KW_INTERVAL - 241)) | (1L << (KW_INTO - 241)) | (1L << (KW_IS - 241)) | (1L << (KW_JOIN - 241)) | (1L << (KW_LAG - 241)) | (1L << (KW_LANGUAGE - 241)) | (1L << (KW_LATERAL - 241)) | (1L << (KW_LEADING - 241)) | (1L << (KW_LEFT - 241)) | (1L << (KW_LIKE - 241)) | (1L << (KW_LIMIT - 241)) | (1L << (KW_LOCAL - 241)) | (1L << (KW_MATCH - 241)) | (1L << (KW_MATCH_RECOGNIZE - 241)) | (1L << (KW_MEASURES - 241)) | (1L << (KW_MERGE - 241)) | (1L << (KW_METADATA - 241)) | (1L << (KW_MINUS - 241)) | (1L << (KW_MINUTE - 241)) | (1L << (KW_MODIFIES - 241)) | (1L << (KW_MODULE - 241)) | (1L << (KW_MONTH - 241)) | (1L << (KW_MULTISET - 241)) | (1L << (KW_NATURAL - 241)) | (1L << (KW_NEXT - 241)) | (1L << (KW_NO - 241)) | (1L << (KW_NONE - 241)) | (1L << (KW_NOT - 241)) | (1L << (KW_NULL - 241)) | (1L << (KW_NUMERIC - 241)) | (1L << (KW_OF - 241)) | (1L << (KW_OFFSET - 241)) | (1L << (KW_ON - 241)) | (1L << (KW_ONE - 241)))) != 0) || ((((_la - 305)) & ~0x3f) == 0 && ((1L << (_la - 305)) & ((1L << (KW_OR - 305)) | (1L << (KW_ORDER - 305)) | (1L << (KW_OUT - 305)) | (1L << (KW_OUTER - 305)) | (1L << (KW_OVER - 305)) | (1L << (KW_OVERLAY - 305)) | (1L << (KW_PARTITION - 305)) | (1L << (KW_PATTERN - 305)) | (1L << (KW_PER - 305)) | (1L << (KW_PERCENT - 305)) | (1L << (KW_PERIOD - 305)) | (1L << (KW_POSITION - 305)) | (1L << (KW_PRIMARY - 305)) | (1L << (KW_RANGE - 305)) | (1L << (KW_RANK - 305)) | (1L << (KW_RESET - 305)) | (1L << (KW_REVOKE - 305)) | (1L << (KW_RIGHT - 305)) | (1L << (KW_RLIKE - 305)) | (1L << (KW_ROLLBACK - 305)) | (1L << (KW_ROLLUP - 305)) | (1L << (KW_ROW - 305)) | (1L << (KW_ROWS - 305)) | (1L << (KW_SECOND - 305)) | (1L << (KW_SELECT - 305)) | (1L << (KW_SET - 305)) | (1L << (KW_SHOW - 305)) | (1L << (KW_SIMILAR - 305)) | (1L << (KW_SKIP - 305)) | (1L << (KW_SMALLINT - 305)) | (1L << (KW_START - 305)) | (1L << (KW_STATIC - 305)) | (1L << (KW_SUBSTRING - 305)) | (1L << (KW_SUM - 305)) | (1L << (KW_SYSTEM - 305)) | (1L << (KW_SYSTEM_TIME - 305)) | (1L << (KW_SYSTEM_USER - 305)) | (1L << (KW_TABLE - 305)) | (1L << (KW_TABLESAMPLE - 305)) | (1L << (KW_THEN - 305)) | (1L << (KW_TIME - 305)) | (1L << (KW_TIMESTAMP - 305)) | (1L << (KW_TIMESTAMP_3 - 305)) | (1L << (KW_TIMESTAMP_6 - 305)) | (1L << (KW_TIMESTAMP_9 - 305)) | (1L << (KW_TINYINT - 305)) | (1L << (KW_TO - 305)) | (1L << (KW_TRUE - 305)) | (1L << (KW_TRUNCATE - 305)) | (1L << (KW_UNION - 305)) | (1L << (KW_UNIQUE - 305)) | (1L << (KW_UNKNOWN - 305)) | (1L << (KW_UNNEST - 305)) | (1L << (KW_UPPER - 305)) | (1L << (KW_UPSERT - 305)) | (1L << (KW_USER - 305)) | (1L << (KW_USING - 305)) | (1L << (KW_VALUE - 305)) | (1L << (KW_VALUES - 305)) | (1L << (KW_VARBINARY - 305)) | (1L << (KW_VARCHAR - 305)))) != 0) || ((((_la - 369)) & ~0x3f) == 0 && ((1L << (_la - 369)) & ((1L << (KW_WHEN - 369)) | (1L << (KW_WHERE - 369)) | (1L << (KW_WINDOW - 369)) | (1L << (KW_WITH - 369)) | (1L << (KW_WITHIN - 369)) | (1L << (KW_WITHOUT - 369)) | (1L << (KW_YEAR - 369)))) != 0)) ) {
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
		enterRule(_localctx, 368, RULE_nonReservedKeywords);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2203);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << KW_ADD) | (1L << KW_ADMIN) | (1L << KW_AFTER) | (1L << KW_ANALYZE) | (1L << KW_ASC) | (1L << KW_BEFORE) | (1L << KW_BYTES) | (1L << KW_CASCADE) | (1L << KW_CATALOG) | (1L << KW_CATALOGS) | (1L << KW_CENTURY) | (1L << KW_CHAIN) | (1L << KW_CHANGELOG_MODE) | (1L << KW_CHARACTERS) | (1L << KW_COMMENT) | (1L << KW_COMPACT) | (1L << KW_COLUMNS) | (1L << KW_CONSTRAINTS) | (1L << KW_CONSTRUCTOR) | (1L << KW_CUMULATE) | (1L << KW_DATA) | (1L << KW_DATABASE) | (1L << KW_DATABASES) | (1L << KW_DAYS) | (1L << KW_DECADE) | (1L << KW_DEFINED) | (1L << KW_DESC) | (1L << KW_DESCRIPTOR) | (1L << KW_DIV) | (1L << KW_ENCODING) | (1L << KW_ENFORCED) | (1L << KW_ENGINE) | (1L << KW_ERROR) | (1L << KW_ESTIMATED_COST) | (1L << KW_EXCEPTION) | (1L << KW_EXCLUDE) | (1L << KW_EXCLUDING) | (1L << KW_EXTENDED) | (1L << KW_FILE) | (1L << KW_FINAL) | (1L << KW_FIRST) | (1L << KW_FOLLOWING) | (1L << KW_FORMAT) | (1L << KW_FORTRAN) | (1L << KW_FOUND) | (1L << KW_FRAC_SECOND) | (1L << KW_FUNCTIONS) | (1L << KW_GENERAL) | (1L << KW_GENERATED) | (1L << KW_GO) | (1L << KW_GOTO) | (1L << KW_GRANTED) | (1L << KW_HOP) | (1L << KW_HOURS) | (1L << KW_IF) | (1L << KW_IGNORE) | (1L << KW_INCREMENT) | (1L << KW_INPUT) | (1L << KW_INVOKER))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (KW_JAR - 64)) | (1L << (KW_JARS - 64)) | (1L << (KW_JAVA - 64)) | (1L << (KW_JSON - 64)) | (1L << (KW_JSON_EXECUTION_PLAN - 64)) | (1L << (KW_KEY - 64)) | (1L << (KW_KEY_MEMBER - 64)) | (1L << (KW_KEY_TYPE - 64)) | (1L << (KW_LABEL - 64)) | (1L << (KW_LAST - 64)) | (1L << (KW_LENGTH - 64)) | (1L << (KW_LEVEL - 64)) | (1L << (KW_LOAD - 64)) | (1L << (KW_MAP - 64)) | (1L << (KW_MICROSECOND - 64)) | (1L << (KW_MILLENNIUM - 64)) | (1L << (KW_MILLISECOND - 64)) | (1L << (KW_MINUTES - 64)) | (1L << (KW_MINVALUE - 64)) | (1L << (KW_MODIFY - 64)) | (1L << (KW_MODULES - 64)) | (1L << (KW_MONTHS - 64)) | (1L << (KW_NANOSECOND - 64)) | (1L << (KW_NULLS - 64)) | (1L << (KW_NUMBER - 64)) | (1L << (KW_OPTION - 64)) | (1L << (KW_OPTIONS - 64)) | (1L << (KW_ORDERING - 64)) | (1L << (KW_OUTPUT - 64)) | (1L << (KW_OVERWRITE - 64)) | (1L << (KW_OVERWRITING - 64)) | (1L << (KW_PARTITIONED - 64)) | (1L << (KW_PARTITIONS - 64)) | (1L << (KW_PASSING - 64)) | (1L << (KW_PAST - 64)) | (1L << (KW_PATH - 64)) | (1L << (KW_PLACING - 64)) | (1L << (KW_PLAN - 64)) | (1L << (KW_PRECEDING - 64)) | (1L << (KW_PRESERVE - 64)) | (1L << (KW_PRIOR - 64)) | (1L << (KW_PRIVILEGES - 64)) | (1L << (KW_PUBLIC - 64)) | (1L << (KW_PYTHON - 64)) | (1L << (KW_PYTHON_FILES - 64)) | (1L << (KW_PYTHON_REQUIREMENTS - 64)) | (1L << (KW_PYTHON_DEPENDENCIES - 64)) | (1L << (KW_PYTHON_JAR - 64)) | (1L << (KW_PYTHON_ARCHIVES - 64)) | (1L << (KW_PYTHON_PARAMETER - 64)) | (1L << (KW_QUARTER - 64)) | (1L << (KW_RAW - 64)) | (1L << (KW_READ - 64)) | (1L << (KW_RELATIVE - 64)) | (1L << (KW_REMOVE - 64)) | (1L << (KW_RENAME - 64)) | (1L << (KW_REPLACE - 64)) | (1L << (KW_RESPECT - 64)) | (1L << (KW_RESTART - 64)) | (1L << (KW_RESTRICT - 64)) | (1L << (KW_ROLE - 64)) | (1L << (KW_ROW_COUNT - 64)) | (1L << (KW_SCALA - 64)) | (1L << (KW_SCALAR - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (KW_SCALE - 128)) | (1L << (KW_SCHEMA - 128)) | (1L << (KW_SECONDS - 128)) | (1L << (KW_SECTION - 128)) | (1L << (KW_SECURITY - 128)) | (1L << (KW_SELF - 128)) | (1L << (KW_SERVER - 128)) | (1L << (KW_SERVER_NAME - 128)) | (1L << (KW_SESSION - 128)) | (1L << (KW_SETS - 128)) | (1L << (KW_SIMPLE - 128)) | (1L << (KW_SIZE - 128)) | (1L << (KW_SLIDE - 128)) | (1L << (KW_SOURCE - 128)) | (1L << (KW_SPACE - 128)) | (1L << (KW_STATE - 128)) | (1L << (KW_STATEMENT - 128)) | (1L << (KW_STEP - 128)) | (1L << (KW_STRING - 128)) | (1L << (KW_STRUCTURE - 128)) | (1L << (KW_STYLE - 128)) | (1L << (KW_TABLES - 128)) | (1L << (KW_TEMPORARY - 128)) | (1L << (KW_TIMECOL - 128)) | (1L << (KW_TIMESTAMP_LTZ - 128)) | (1L << (KW_TIMESTAMPADD - 128)) | (1L << (KW_TIMESTAMPDIFF - 128)) | (1L << (KW_TRANSFORM - 128)) | (1L << (KW_TUMBLE - 128)) | (1L << (KW_TYPE - 128)) | (1L << (KW_UNDER - 128)) | (1L << (KW_UNLOAD - 128)) | (1L << (KW_USAGE - 128)) | (1L << (KW_USE - 128)) | (1L << (KW_UTF16 - 128)) | (1L << (KW_UTF32 - 128)) | (1L << (KW_UTF8 - 128)) | (1L << (KW_VERSION - 128)) | (1L << (KW_VIEW - 128)) | (1L << (KW_VIEWS - 128)) | (1L << (KW_VIRTUAL - 128)) | (1L << (KW_WATERMARK - 128)) | (1L << (KW_WATERMARKS - 128)) | (1L << (KW_WEEK - 128)) | (1L << (KW_WORK - 128)) | (1L << (KW_WRAPPER - 128)) | (1L << (KW_YEARS - 128)) | (1L << (KW_ZONE - 128)))) != 0)) ) {
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
		case 78:
			return queryStatement_sempred((QueryStatementContext)_localctx, predIndex);
		case 88:
			return tableExpression_sempred((TableExpressionContext)_localctx, predIndex);
		case 129:
			return booleanExpression_sempred((BooleanExpressionContext)_localctx, predIndex);
		case 132:
			return valueExpression_sempred((ValueExpressionContext)_localctx, predIndex);
		case 133:
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\u019f\u08a0\4\2\t"+
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
		"\4\u00b7\t\u00b7\4\u00b8\t\u00b8\4\u00b9\t\u00b9\4\u00ba\t\u00ba\3\2\3"+
		"\2\3\2\3\3\3\3\3\3\3\4\3\4\7\4\u017d\n\4\f\4\16\4\u0180\13\4\3\5\3\5\5"+
		"\5\u0184\n\5\3\5\3\5\5\5\u0188\n\5\3\5\3\5\5\5\u018c\n\5\3\5\3\5\5\5\u0190"+
		"\n\5\3\5\3\5\5\5\u0194\n\5\3\5\3\5\5\5\u0198\n\5\3\5\3\5\5\5\u019c\n\5"+
		"\3\5\3\5\5\5\u01a0\n\5\3\5\3\5\5\5\u01a4\n\5\3\5\3\5\5\5\u01a8\n\5\3\5"+
		"\3\5\5\5\u01ac\n\5\5\5\u01ae\n\5\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3"+
		"\7\3\7\3\7\3\7\3\7\3\7\3\7\5\7\u01c0\n\7\3\b\3\b\5\b\u01c4\n\b\3\t\3\t"+
		"\3\t\3\n\3\n\3\n\3\n\5\n\u01cd\n\n\3\n\3\n\3\n\5\n\u01d2\n\n\3\13\3\13"+
		"\3\13\7\13\u01d7\n\13\f\13\16\13\u01da\13\13\3\f\3\f\3\r\3\r\3\r\3\r\3"+
		"\r\3\r\5\r\u01e4\n\r\3\16\3\16\3\16\3\16\3\16\7\16\u01eb\n\16\f\16\16"+
		"\16\u01ee\13\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\5\17\u01f9"+
		"\n\17\3\17\5\17\u01fc\n\17\3\17\3\17\3\17\3\17\3\17\5\17\u0203\n\17\3"+
		"\17\3\17\3\17\3\17\3\17\3\17\5\17\u020b\n\17\3\17\3\17\3\17\5\17\u0210"+
		"\n\17\3\17\5\17\u0213\n\17\3\20\3\20\3\20\3\20\3\20\5\20\u021a\n\20\3"+
		"\21\3\21\3\21\3\21\3\22\3\22\5\22\u0222\n\22\3\23\3\23\5\23\u0226\n\23"+
		"\3\24\3\24\3\24\3\24\3\25\6\25\u022d\n\25\r\25\16\25\u022e\3\26\3\26\5"+
		"\26\u0233\n\26\3\27\3\27\5\27\u0237\n\27\3\27\3\27\5\27\u023b\n\27\3\27"+
		"\3\27\3\27\3\27\3\27\7\27\u0242\n\27\f\27\16\27\u0245\13\27\3\27\3\27"+
		"\5\27\u0249\n\27\3\27\3\27\5\27\u024d\n\27\3\27\3\27\5\27\u0251\n\27\3"+
		"\27\3\27\5\27\u0255\n\27\3\27\5\27\u0258\n\27\3\27\3\27\5\27\u025c\n\27"+
		"\3\30\3\30\3\30\5\30\u0261\n\30\3\30\3\30\3\30\3\30\5\30\u0267\n\30\3"+
		"\31\3\31\3\31\5\31\u026c\n\31\3\32\3\32\3\32\5\32\u0271\n\32\3\32\5\32"+
		"\u0274\n\32\3\33\3\33\5\33\u0278\n\33\3\34\3\34\3\34\3\34\7\34\u027e\n"+
		"\34\f\34\16\34\u0281\13\34\3\34\3\34\3\35\3\35\3\35\5\35\u0288\n\35\3"+
		"\35\3\35\5\35\u028c\n\35\3\35\3\35\5\35\u0290\n\35\3\35\3\35\5\35\u0294"+
		"\n\35\3\35\3\35\5\35\u0298\n\35\3\35\3\35\5\35\u029c\n\35\3\35\3\35\5"+
		"\35\u02a0\n\35\3\35\3\35\5\35\u02a4\n\35\3\35\3\35\5\35\u02a8\n\35\3\35"+
		"\3\35\5\35\u02ac\n\35\3\35\3\35\5\35\u02b0\n\35\3\35\3\35\5\35\u02b4\n"+
		"\35\3\35\3\35\5\35\u02b8\n\35\3\35\3\35\5\35\u02bc\n\35\3\35\3\35\5\35"+
		"\u02c0\n\35\3\35\3\35\5\35\u02c4\n\35\3\35\3\35\5\35\u02c8\n\35\3\35\3"+
		"\35\5\35\u02cc\n\35\5\35\u02ce\n\35\3\36\3\36\3\36\3\36\3\37\3\37\3\37"+
		"\3\37\5\37\u02d8\n\37\3\37\3\37\3 \3 \3 \3 \5 \u02e0\n \3 \3 \3!\3!\3"+
		"!\3!\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3#\3#\3#\3#\3#\3#\3#\7#\u02f6\n#\f#\16"+
		"#\u02f9\13#\3#\3#\3$\3$\5$\u02ff\n$\3$\3$\3$\3$\5$\u0305\n$\3$\5$\u0308"+
		"\n$\3$\5$\u030b\n$\3%\3%\3%\3&\3&\3&\3&\3&\5&\u0315\n&\3&\5&\u0318\n&"+
		"\3\'\3\'\3(\3(\3(\3(\5(\u0320\n(\3)\3)\3*\3*\3*\3*\3*\3*\3+\3+\5+\u032c"+
		"\n+\3+\3+\3+\3+\3+\3+\3,\3,\3-\3-\3-\3-\3.\3.\3.\3.\3/\3/\3/\3/\7/\u0342"+
		"\n/\f/\16/\u0345\13/\3/\3/\3\60\3\60\3\60\3\60\3\60\3\60\7\60\u034f\n"+
		"\60\f\60\16\60\u0352\13\60\3\60\3\60\5\60\u0356\n\60\3\61\3\61\5\61\u035a"+
		"\n\61\3\62\3\62\3\62\3\62\7\62\u0360\n\62\f\62\16\62\u0363\13\62\3\62"+
		"\5\62\u0366\n\62\3\63\3\63\3\63\3\63\5\63\u036c\n\63\3\64\3\64\3\64\3"+
		"\64\3\64\3\65\3\65\3\65\5\65\u0376\n\65\3\65\3\65\5\65\u037a\n\65\3\65"+
		"\3\65\3\66\3\66\5\66\u0380\n\66\3\66\3\66\5\66\u0384\n\66\3\66\3\66\5"+
		"\66\u0388\n\66\3\66\5\66\u038b\n\66\3\66\3\66\3\66\3\67\3\67\3\67\3\67"+
		"\5\67\u0394\n\67\3\67\3\67\5\67\u0398\n\67\3\67\3\67\3\67\3\67\3\67\5"+
		"\67\u039f\n\67\3\67\5\67\u03a2\n\67\38\38\38\38\38\38\78\u03aa\n8\f8\16"+
		"8\u03ad\138\39\39\3:\3:\3:\5:\u03b4\n:\3:\3:\3:\3:\3:\3:\5:\u03bc\n:\3"+
		";\3;\5;\u03c0\n;\3;\3;\3;\3<\3<\3<\3=\3=\3=\3=\3=\3=\3=\5=\u03cf\n=\3"+
		">\3>\3>\3>\3?\3?\3?\3?\3@\3@\3@\3A\3A\3A\3A\3A\3A\5A\u03e2\nA\3B\3B\3"+
		"B\3B\3B\3C\3C\3C\3C\5C\u03ed\nC\3C\3C\5C\u03f1\nC\3C\3C\3C\3C\3C\5C\u03f8"+
		"\nC\3D\3D\3D\5D\u03fd\nD\3D\3D\3E\3E\5E\u0403\nE\3E\3E\5E\u0407\nE\3E"+
		"\3E\3F\3F\3F\5F\u040e\nF\3F\3F\5F\u0412\nF\3G\3G\5G\u0416\nG\3G\3G\5G"+
		"\u041a\nG\3G\3G\3H\3H\3H\3H\5H\u0422\nH\3H\3H\5H\u0426\nH\3H\3H\3I\5I"+
		"\u042b\nI\3I\3I\3I\3I\5I\u0431\nI\3J\3J\3J\3J\5J\u0437\nJ\3J\5J\u043a"+
		"\nJ\3J\3J\5J\u043e\nJ\3K\3K\3K\3L\3L\3L\3L\7L\u0447\nL\fL\16L\u044a\13"+
		"L\3M\3M\3M\3M\7M\u0450\nM\fM\16M\u0453\13M\3M\3M\3N\3N\3N\3N\3N\3N\3N"+
		"\6N\u045e\nN\rN\16N\u045f\3N\3N\3O\3O\3O\3O\3O\3O\6O\u046a\nO\rO\16O\u046b"+
		"\3O\3O\3P\3P\3P\3P\3P\3P\3P\3P\3P\3P\3P\5P\u047b\nP\3P\5P\u047e\nP\3P"+
		"\3P\5P\u0482\nP\3P\5P\u0485\nP\5P\u0487\nP\3P\3P\3P\5P\u048c\nP\3P\3P"+
		"\5P\u0490\nP\3P\5P\u0493\nP\7P\u0495\nP\fP\16P\u0498\13P\3Q\3Q\3Q\3Q\7"+
		"Q\u049e\nQ\fQ\16Q\u04a1\13Q\3R\3R\3R\3R\7R\u04a7\nR\fR\16R\u04aa\13R\3"+
		"S\3S\3S\3S\3S\7S\u04b1\nS\fS\16S\u04b4\13S\3S\3S\5S\u04b8\nS\3S\3S\3S"+
		"\3S\3S\3T\3T\3U\3U\3U\5U\u04c4\nU\3U\5U\u04c7\nU\3U\5U\u04ca\nU\3U\5U"+
		"\u04cd\nU\3U\3U\3U\3U\5U\u04d3\nU\3V\3V\5V\u04d7\nV\3V\3V\3V\3V\7V\u04dd"+
		"\nV\fV\16V\u04e0\13V\5V\u04e2\nV\3W\3W\3W\5W\u04e7\nW\3W\5W\u04ea\nW\5"+
		"W\u04ec\nW\3X\3X\3X\3X\3X\3X\3X\3X\3X\3X\3X\3X\5X\u04fa\nX\3Y\3Y\3Y\3"+
		"Z\3Z\3Z\3Z\7Z\u0503\nZ\fZ\16Z\u0506\13Z\3Z\3Z\5Z\u050a\nZ\3Z\3Z\3Z\3Z"+
		"\3Z\3Z\5Z\u0512\nZ\3Z\5Z\u0515\nZ\3Z\5Z\u0518\nZ\3Z\3Z\3Z\5Z\u051d\nZ"+
		"\7Z\u051f\nZ\fZ\16Z\u0522\13Z\3[\3[\5[\u0526\n[\3\\\5\\\u0529\n\\\3\\"+
		"\3\\\5\\\u052d\n\\\3\\\5\\\u0530\n\\\3\\\5\\\u0533\n\\\3\\\3\\\3\\\3\\"+
		"\3\\\3\\\3\\\3\\\7\\\u053d\n\\\f\\\16\\\u0540\13\\\3\\\3\\\3\\\3\\\5\\"+
		"\u0546\n\\\3\\\3\\\3\\\3\\\3\\\3\\\3\\\3\\\3\\\5\\\u0551\n\\\3]\3]\3]"+
		"\3]\3]\3]\3^\3^\3_\3_\3_\3_\3_\3`\3`\3`\3`\3`\3a\3a\3a\3a\3a\7a\u056a"+
		"\na\fa\16a\u056d\13a\3a\3a\3b\3b\3c\3c\3c\3c\3c\3c\3c\3c\3c\3c\3c\3c\3"+
		"c\3c\3c\5c\u0582\nc\3d\3d\3e\3e\3e\3e\3e\3f\3f\3f\3f\3f\3f\3f\7f\u0592"+
		"\nf\ff\16f\u0595\13f\3f\3f\5f\u0599\nf\3g\3g\3g\3h\3h\3h\3h\3h\7h\u05a3"+
		"\nh\fh\16h\u05a6\13h\3i\3i\3i\3i\3i\3i\3i\3i\7i\u05b0\ni\fi\16i\u05b3"+
		"\13i\3i\3i\3i\3i\3i\3i\3i\7i\u05bc\ni\fi\16i\u05bf\13i\3i\3i\3i\3i\3i"+
		"\3i\3i\7i\u05c8\ni\fi\16i\u05cb\13i\3i\3i\5i\u05cf\ni\3j\3j\3j\3k\3k\3"+
		"l\3l\3l\3l\3l\3l\3l\3m\3m\3n\3n\3o\3o\3o\3p\3p\3p\3p\7p\u05e8\np\fp\16"+
		"p\u05eb\13p\3q\3q\3q\3q\3r\5r\u05f2\nr\3r\3r\5r\u05f6\nr\3r\5r\u05f9\n"+
		"r\3r\5r\u05fc\nr\3r\3r\3s\3s\3s\5s\u0603\ns\3s\5s\u0606\ns\3s\5s\u0609"+
		"\ns\3s\5s\u060c\ns\3s\5s\u060f\ns\3s\5s\u0612\ns\3s\3s\3s\5s\u0617\ns"+
		"\3s\5s\u061a\ns\3t\3t\3t\3t\3t\7t\u0621\nt\ft\16t\u0624\13t\3u\3u\5u\u0628"+
		"\nu\3u\3u\5u\u062c\nu\3v\3v\3v\5v\u0631\nv\3w\3w\3w\3w\3w\7w\u0638\nw"+
		"\fw\16w\u063b\13w\3x\3x\3x\3x\3x\3x\3x\3x\3x\3x\3x\3x\3x\3x\3x\3x\5x\u064d"+
		"\nx\3y\3y\3y\3y\7y\u0653\ny\fy\16y\u0656\13y\3z\3z\3z\6z\u065b\nz\rz\16"+
		"z\u065c\3z\3z\5z\u0661\nz\3{\3{\5{\u0665\n{\3|\3|\3|\3|\3|\3|\3|\3|\5"+
		"|\u066f\n|\3}\3}\3}\3}\3}\3}\3}\3}\3}\3}\3}\3}\3}\3}\3}\3}\3}\3}\3}\3"+
		"}\3}\3}\3}\3}\5}\u0689\n}\3~\3~\3~\3~\7~\u068f\n~\f~\16~\u0692\13~\3\177"+
		"\3\177\3\177\3\177\3\177\3\177\3\177\3\177\3\177\5\177\u069d\n\177\3\u0080"+
		"\3\u0080\3\u0080\3\u0080\3\u0080\3\u0081\3\u0081\3\u0081\3\u0082\3\u0082"+
		"\3\u0083\3\u0083\3\u0083\3\u0083\3\u0083\3\u0083\3\u0083\3\u0083\3\u0083"+
		"\3\u0083\5\u0083\u06b3\n\u0083\5\u0083\u06b5\n\u0083\3\u0083\3\u0083\3"+
		"\u0083\3\u0083\3\u0083\3\u0083\3\u0083\3\u0083\3\u0083\5\u0083\u06c0\n"+
		"\u0083\3\u0083\7\u0083\u06c3\n\u0083\f\u0083\16\u0083\u06c6\13\u0083\3"+
		"\u0084\5\u0084\u06c9\n\u0084\3\u0084\3\u0084\5\u0084\u06cd\n\u0084\3\u0084"+
		"\3\u0084\3\u0084\3\u0084\3\u0084\5\u0084\u06d4\n\u0084\3\u0084\3\u0084"+
		"\3\u0084\3\u0084\3\u0084\7\u0084\u06db\n\u0084\f\u0084\16\u0084\u06de"+
		"\13\u0084\3\u0084\3\u0084\3\u0084\5\u0084\u06e3\n\u0084\3\u0084\3\u0084"+
		"\3\u0084\3\u0084\3\u0084\3\u0084\3\u0084\3\u0084\3\u0084\3\u0084\3\u0084"+
		"\5\u0084\u06f0\n\u0084\3\u0084\3\u0084\3\u0084\3\u0084\3\u0084\5\u0084"+
		"\u06f7\n\u0084\3\u0084\3\u0084\3\u0084\5\u0084\u06fc\n\u0084\3\u0084\3"+
		"\u0084\3\u0084\3\u0084\5\u0084\u0702\n\u0084\3\u0084\3\u0084\3\u0084\3"+
		"\u0084\3\u0084\5\u0084\u0709\n\u0084\5\u0084\u070b\n\u0084\3\u0085\5\u0085"+
		"\u070e\n\u0085\3\u0085\3\u0085\3\u0085\3\u0085\3\u0085\3\u0085\3\u0085"+
		"\3\u0085\7\u0085\u0718\n\u0085\f\u0085\16\u0085\u071b\13\u0085\3\u0085"+
		"\3\u0085\5\u0085\u071f\n\u0085\3\u0085\5\u0085\u0722\n\u0085\3\u0085\3"+
		"\u0085\3\u0085\3\u0085\5\u0085\u0728\n\u0085\5\u0085\u072a\n\u0085\3\u0086"+
		"\3\u0086\3\u0086\3\u0086\5\u0086\u0730\n\u0086\3\u0086\3\u0086\3\u0086"+
		"\3\u0086\3\u0086\3\u0086\3\u0086\3\u0086\3\u0086\3\u0086\3\u0086\3\u0086"+
		"\3\u0086\3\u0086\3\u0086\3\u0086\3\u0086\3\u0086\3\u0086\3\u0086\3\u0086"+
		"\7\u0086\u0747\n\u0086\f\u0086\16\u0086\u074a\13\u0086\3\u0087\3\u0087"+
		"\3\u0087\6\u0087\u074f\n\u0087\r\u0087\16\u0087\u0750\3\u0087\3\u0087"+
		"\5\u0087\u0755\n\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\6\u0087"+
		"\u075c\n\u0087\r\u0087\16\u0087\u075d\3\u0087\3\u0087\5\u0087\u0762\n"+
		"\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087"+
		"\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\5\u0087\u0772\n\u0087"+
		"\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\5\u0087\u077b"+
		"\n\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087"+
		"\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087"+
		"\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\5\u0087\u0793\n\u0087\3\u0087"+
		"\3\u0087\3\u0087\7\u0087\u0798\n\u0087\f\u0087\16\u0087\u079b\13\u0087"+
		"\5\u0087\u079d\n\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087"+
		"\3\u0087\3\u0087\5\u0087\u07a7\n\u0087\3\u0087\3\u0087\3\u0087\3\u0087"+
		"\3\u0087\7\u0087\u07ae\n\u0087\f\u0087\16\u0087\u07b1\13\u0087\3\u0088"+
		"\3\u0088\3\u0088\5\u0088\u07b6\n\u0088\3\u0089\3\u0089\3\u0089\3\u0089"+
		"\5\u0089\u07bc\n\u0089\3\u008a\3\u008a\3\u008b\3\u008b\3\u008c\3\u008c"+
		"\5\u008c\u07c4\n\u008c\3\u008d\3\u008d\3\u008d\5\u008d\u07c9\n\u008d\3"+
		"\u008e\3\u008e\5\u008e\u07cd\n\u008e\3\u008f\3\u008f\3\u008f\6\u008f\u07d2"+
		"\n\u008f\r\u008f\16\u008f\u07d3\3\u0090\3\u0090\3\u0090\5\u0090\u07d9"+
		"\n\u0090\3\u0091\3\u0091\3\u0091\3\u0091\3\u0091\3\u0092\5\u0092\u07e1"+
		"\n\u0092\3\u0092\3\u0092\5\u0092\u07e5\n\u0092\3\u0093\5\u0093\u07e8\n"+
		"\u0093\3\u0093\3\u0093\5\u0093\u07ec\n\u0093\3\u0094\5\u0094\u07ef\n\u0094"+
		"\3\u0094\3\u0094\5\u0094\u07f3\n\u0094\3\u0095\3\u0095\3\u0095\3\u0096"+
		"\3\u0096\6\u0096\u07fa\n\u0096\r\u0096\16\u0096\u07fb\3\u0096\5\u0096"+
		"\u07ff\n\u0096\3\u0097\3\u0097\3\u0097\3\u0097\3\u0098\3\u0098\3\u0098"+
		"\7\u0098\u0808\n\u0098\f\u0098\16\u0098\u080b\13\u0098\3\u0099\3\u0099"+
		"\3\u0099\5\u0099\u0810\n\u0099\3\u009a\3\u009a\3\u009b\3\u009b\3\u009c"+
		"\3\u009c\3\u009c\3\u009c\3\u009c\3\u009d\3\u009d\3\u009e\3\u009e\3\u009f"+
		"\3\u009f\3\u00a0\3\u00a0\3\u00a1\3\u00a1\3\u00a2\3\u00a2\3\u00a2\7\u00a2"+
		"\u0828\n\u00a2\f\u00a2\16\u00a2\u082b\13\u00a2\3\u00a3\3\u00a3\3\u00a3"+
		"\3\u00a4\3\u00a4\3\u00a4\3\u00a4\3\u00a5\3\u00a5\3\u00a5\3\u00a6\3\u00a6"+
		"\3\u00a6\3\u00a6\7\u00a6\u083b\n\u00a6\f\u00a6\16\u00a6\u083e\13\u00a6"+
		"\3\u00a6\3\u00a6\3\u00a7\3\u00a7\5\u00a7\u0844\n\u00a7\3\u00a7\5\u00a7"+
		"\u0847\n\u00a7\3\u00a8\3\u00a8\3\u00a8\5\u00a8\u084c\n\u00a8\3\u00a9\3"+
		"\u00a9\3\u00a9\3\u00a9\5\u00a9\u0852\n\u00a9\3\u00aa\3\u00aa\3\u00aa\3"+
		"\u00aa\3\u00aa\3\u00aa\5\u00aa\u085a\n\u00aa\3\u00ab\3\u00ab\3\u00ab\3"+
		"\u00ab\3\u00ab\3\u00ab\3\u00ab\3\u00ab\3\u00ab\3\u00ab\3\u00ab\3\u00ab"+
		"\3\u00ab\3\u00ab\5\u00ab\u086a\n\u00ab\3\u00ac\3\u00ac\3\u00ac\3\u00ac"+
		"\3\u00ac\3\u00ac\3\u00ac\5\u00ac\u0873\n\u00ac\3\u00ad\3\u00ad\3\u00ae"+
		"\3\u00ae\3\u00af\3\u00af\3\u00af\3\u00af\5\u00af\u087d\n\u00af\3\u00af"+
		"\3\u00af\3\u00af\3\u00af\3\u00af\5\u00af\u0884\n\u00af\3\u00af\5\u00af"+
		"\u0887\n\u00af\3\u00b0\3\u00b0\3\u00b0\3\u00b1\3\u00b1\3\u00b2\3\u00b2"+
		"\3\u00b3\3\u00b3\3\u00b4\3\u00b4\3\u00b5\3\u00b5\3\u00b6\3\u00b6\3\u00b7"+
		"\3\u00b7\3\u00b8\3\u00b8\3\u00b9\3\u00b9\3\u00ba\3\u00ba\3\u00ba\3\u0829"+
		"\7\u009e\u00b2\u0104\u010a\u010c\u00bb\2\4\6\b\n\f\16\20\22\24\26\30\32"+
		"\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080"+
		"\u0082\u0084\u0086\u0088\u008a\u008c\u008e\u0090\u0092\u0094\u0096\u0098"+
		"\u009a\u009c\u009e\u00a0\u00a2\u00a4\u00a6\u00a8\u00aa\u00ac\u00ae\u00b0"+
		"\u00b2\u00b4\u00b6\u00b8\u00ba\u00bc\u00be\u00c0\u00c2\u00c4\u00c6\u00c8"+
		"\u00ca\u00cc\u00ce\u00d0\u00d2\u00d4\u00d6\u00d8\u00da\u00dc\u00de\u00e0"+
		"\u00e2\u00e4\u00e6\u00e8\u00ea\u00ec\u00ee\u00f0\u00f2\u00f4\u00f6\u00f8"+
		"\u00fa\u00fc\u00fe\u0100\u0102\u0104\u0106\u0108\u010a\u010c\u010e\u0110"+
		"\u0112\u0114\u0116\u0118\u011a\u011c\u011e\u0120\u0122\u0124\u0126\u0128"+
		"\u012a\u012c\u012e\u0130\u0132\u0134\u0136\u0138\u013a\u013c\u013e\u0140"+
		"\u0142\u0144\u0146\u0148\u014a\u014c\u014e\u0150\u0152\u0154\u0156\u0158"+
		"\u015a\u015c\u015e\u0160\u0162\u0164\u0166\u0168\u016a\u016c\u016e\u0170"+
		"\u0172\2\60\4\2  \u00ec\u00ec\5\2\22\22((FF\6\2\17\17\34\34CC\u00a9\u00a9"+
		"\4\2\16\16\33\33\4\2\u00fe\u00fe\u0109\u0109\4\2\u00a8\u00a8\u015a\u015a"+
		"\4\2\6\6xx\5\2\u00c5\u00c5\u00e3\u00e3\u012d\u012d\r\2\f\f\u0094\u0094"+
		"\u009a\u009a\u00c1\u00c2\u00ce\u00ce\u00e4\u00e4\u010e\u010f\u0151\u0151"+
		"\u015d\u015d\u0162\u0162\u0171\u0172\4\2\u0176\u0176\u0178\u0178\6\2\u00e6"+
		"\u00e7\u00ee\u00ee\u00fc\u00fc\u012e\u012e\4\2\u00ba\u00ba\u0127\u0127"+
		"\4\2++\u010a\u010a\5\2\27\27bb\u00b4\u00b4\5\2++``\u010a\u010a\5\2\67"+
		"\67\\\\\u00ac\u00ac\5\2DDmm\u0080\u0080\4\2\r\r}}\4\2__\u0112\u0112\5"+
		"\2\u00f5\u00f5\u0110\u0110\u0167\u0167\6\2\u00ff\u00ff\u010b\u010b\u0119"+
		"\u0119\u0145\u0145\5\2\31\31;;\u009e\u009e\7\2\32\32\u008d\u008e\u0093"+
		"\u0093\u0099\u0099\u0130\u0130\4\2\u00df\u00df\u0148\u0148\5\2;;\u008a"+
		"\u008a\u009e\u009e\4\2\n\n  \4\2//KK\6\2\u00fb\u00fb\u012d\u012d\u0165"+
		"\u0165\u0169\u0169\4\2\u00bc\u00bc\u0156\u0156\4\2\u00b4\u00b4\u00b8\u00b8"+
		"\4\2\u017e\u017e\u0192\u0193\6\2\"\"\u0190\u0190\u0194\u0194\u0197\u0197"+
		"\4\2\u0192\u0193\u0195\u0195\3\2\u0192\u0193\3\2\u019b\u019c\4\2\u019b"+
		"\u019b\u019e\u019e\6\2\"\"\u0190\u0190\u0192\u0194\u0196\u0197\5\2\u012c"+
		"\u012c\u017d\u017e\u0192\u0193\4\2\u00fb\u00fb\u0165\u0165\4\2\u00b4\u00b4"+
		"\u00ed\u00ed\f\2PPRRtt\u00ad\u00ad\u00e5\u00e5\u0107\u0107\u0123\u0123"+
		"\u0126\u0126\u014b\u014b\u0179\u0179\22\2\20\20\35\36&&<<PSWXtt\u0084"+
		"\u0084\u00ad\u00ae\u00b1\u00b1\u00e5\u00e5\u0107\u0107\u0123\u0123\u0126"+
		"\u0126\u014b\u014b\u0179\u0179\b\2\u00b4\u00b4\u00c6\u00c6\u00ed\u00ed"+
		"\u0118\u0118\u0164\u0164\u0190\u0190\36\2==OOtt\u00ad\u00ad\u00b3\u00b3"+
		"\u00ba\u00ba\u00be\u00be\u00cc\u00cd\u00d3\u00d3\u00d5\u00d5\u00dc\u00dc"+
		"\u00e3\u00e3\u0104\u0104\u0107\u0107\u0115\u0115\u0119\u0119\u0123\u0123"+
		"\u0126\u0126\u0138\u0138\u013e\u013f\u0142\u0142\u0145\u0145\u014b\u014b"+
		"\u0154\u0155\u015d\u0161\u0166\u0166\u016b\u016b\u0179\u0179\7\2\u00b3"+
		"\u00f3\u00f5\u013e\u0140\u0155\u0157\u0163\u0165\u0179\5\2\6%\'\u00ad"+
		"\u00af\u00b2\2\u0964\2\u0174\3\2\2\2\4\u0177\3\2\2\2\6\u017e\3\2\2\2\b"+
		"\u01ad\3\2\2\2\n\u01af\3\2\2\2\f\u01bf\3\2\2\2\16\u01c3\3\2\2\2\20\u01c5"+
		"\3\2\2\2\22\u01c8\3\2\2\2\24\u01d3\3\2\2\2\26\u01db\3\2\2\2\30\u01e3\3"+
		"\2\2\2\32\u01e5\3\2\2\2\34\u0212\3\2\2\2\36\u0214\3\2\2\2 \u021b\3\2\2"+
		"\2\"\u021f\3\2\2\2$\u0223\3\2\2\2&\u0227\3\2\2\2(\u022c\3\2\2\2*\u0232"+
		"\3\2\2\2,\u0234\3\2\2\2.\u025d\3\2\2\2\60\u026b\3\2\2\2\62\u026d\3\2\2"+
		"\2\64\u0277\3\2\2\2\66\u0279\3\2\2\28\u02cd\3\2\2\2:\u02cf\3\2\2\2<\u02d3"+
		"\3\2\2\2>\u02db\3\2\2\2@\u02e3\3\2\2\2B\u02e7\3\2\2\2D\u02ee\3\2\2\2F"+
		"\u030a\3\2\2\2H\u030c\3\2\2\2J\u030f\3\2\2\2L\u0319\3\2\2\2N\u031b\3\2"+
		"\2\2P\u0321\3\2\2\2R\u0323\3\2\2\2T\u032b\3\2\2\2V\u0333\3\2\2\2X\u0335"+
		"\3\2\2\2Z\u0339\3\2\2\2\\\u033d\3\2\2\2^\u0355\3\2\2\2`\u0359\3\2\2\2"+
		"b\u035b\3\2\2\2d\u036b\3\2\2\2f\u036d\3\2\2\2h\u0372\3\2\2\2j\u037d\3"+
		"\2\2\2l\u038f\3\2\2\2n\u03a3\3\2\2\2p\u03ae\3\2\2\2r\u03b0\3\2\2\2t\u03bd"+
		"\3\2\2\2v\u03c4\3\2\2\2x\u03c7\3\2\2\2z\u03d0\3\2\2\2|\u03d4\3\2\2\2~"+
		"\u03d8\3\2\2\2\u0080\u03db\3\2\2\2\u0082\u03e3\3\2\2\2\u0084\u03e8\3\2"+
		"\2\2\u0086\u03f9\3\2\2\2\u0088\u0400\3\2\2\2\u008a\u040a\3\2\2\2\u008c"+
		"\u0413\3\2\2\2\u008e\u041d\3\2\2\2\u0090\u0430\3\2\2\2\u0092\u0432\3\2"+
		"\2\2\u0094\u043f\3\2\2\2\u0096\u0442\3\2\2\2\u0098\u044b\3\2\2\2\u009a"+
		"\u0456\3\2\2\2\u009c\u0463\3\2\2\2\u009e\u0486\3\2\2\2\u00a0\u0499\3\2"+
		"\2\2\u00a2\u04a2\3\2\2\2\u00a4\u04ab\3\2\2\2\u00a6\u04be\3\2\2\2\u00a8"+
		"\u04d2\3\2\2\2\u00aa\u04d4\3\2\2\2\u00ac\u04eb\3\2\2\2\u00ae\u04f9\3\2"+
		"\2\2\u00b0\u04fb\3\2\2\2\u00b2\u0509\3\2\2\2\u00b4\u0523\3\2\2\2\u00b6"+
		"\u0550\3\2\2\2\u00b8\u0552\3\2\2\2\u00ba\u0558\3\2\2\2\u00bc\u055a\3\2"+
		"\2\2\u00be\u055f\3\2\2\2\u00c0\u0564\3\2\2\2\u00c2\u0570\3\2\2\2\u00c4"+
		"\u0581\3\2\2\2\u00c6\u0583\3\2\2\2\u00c8\u0585\3\2\2\2\u00ca\u0598\3\2"+
		"\2\2\u00cc\u059a\3\2\2\2\u00ce\u059d\3\2\2\2\u00d0\u05ce\3\2\2\2\u00d2"+
		"\u05d0\3\2\2\2\u00d4\u05d3\3\2\2\2\u00d6\u05d5\3\2\2\2\u00d8\u05dc\3\2"+
		"\2\2\u00da\u05de\3\2\2\2\u00dc\u05e0\3\2\2\2\u00de\u05e3\3\2\2\2\u00e0"+
		"\u05ec\3\2\2\2\u00e2\u05f1\3\2\2\2\u00e4\u05ff\3\2\2\2\u00e6\u061b\3\2"+
		"\2\2\u00e8\u0625\3\2\2\2\u00ea\u062d\3\2\2\2\u00ec\u0632\3\2\2\2\u00ee"+
		"\u064c\3\2\2\2\u00f0\u064e\3\2\2\2\u00f2\u0657\3\2\2\2\u00f4\u0662\3\2"+
		"\2\2\u00f6\u066e\3\2\2\2\u00f8\u0688\3\2\2\2\u00fa\u068a\3\2\2\2\u00fc"+
		"\u069c\3\2\2\2\u00fe\u069e\3\2\2\2\u0100\u06a3\3\2\2\2\u0102\u06a6\3\2"+
		"\2\2\u0104\u06b4\3\2\2\2\u0106\u070a\3\2\2\2\u0108\u0729\3\2\2\2\u010a"+
		"\u072f\3\2\2\2\u010c\u07a6\3\2\2\2\u010e\u07b5\3\2\2\2\u0110\u07bb\3\2"+
		"\2\2\u0112\u07bd\3\2\2\2\u0114\u07bf\3\2\2\2\u0116\u07c3\3\2\2\2\u0118"+
		"\u07c5\3\2\2\2\u011a\u07ca\3\2\2\2\u011c\u07d1\3\2\2\2\u011e\u07d5\3\2"+
		"\2\2\u0120\u07da\3\2\2\2\u0122\u07e4\3\2\2\2\u0124\u07e7\3\2\2\2\u0126"+
		"\u07ee\3\2\2\2\u0128\u07f4\3\2\2\2\u012a\u07fe\3\2\2\2\u012c\u0800\3\2"+
		"\2\2\u012e\u0804\3\2\2\2\u0130\u080f\3\2\2\2\u0132\u0811\3\2\2\2\u0134"+
		"\u0813\3\2\2\2\u0136\u0815\3\2\2\2\u0138\u081a\3\2\2\2\u013a\u081c\3\2"+
		"\2\2\u013c\u081e\3\2\2\2\u013e\u0820\3\2\2\2\u0140\u0822\3\2\2\2\u0142"+
		"\u0824\3\2\2\2\u0144\u082c\3\2\2\2\u0146\u082f\3\2\2\2\u0148\u0833\3\2"+
		"\2\2\u014a\u0836\3\2\2\2\u014c\u0841\3\2\2\2\u014e\u084b\3\2\2\2\u0150"+
		"\u0851\3\2\2\2\u0152\u0859\3\2\2\2\u0154\u0869\3\2\2\2\u0156\u0872\3\2"+
		"\2\2\u0158\u0874\3\2\2\2\u015a\u0876\3\2\2\2\u015c\u0886\3\2\2\2\u015e"+
		"\u0888\3\2\2\2\u0160\u088b\3\2\2\2\u0162\u088d\3\2\2\2\u0164\u088f\3\2"+
		"\2\2\u0166\u0891\3\2\2\2\u0168\u0893\3\2\2\2\u016a\u0895\3\2\2\2\u016c"+
		"\u0897\3\2\2\2\u016e\u0899\3\2\2\2\u0170\u089b\3\2\2\2\u0172\u089d\3\2"+
		"\2\2\u0174\u0175\5\4\3\2\u0175\u0176\7\2\2\3\u0176\3\3\2\2\2\u0177\u0178"+
		"\5\6\4\2\u0178\u0179\7\2\2\3\u0179\5\3\2\2\2\u017a\u017d\5\b\5\2\u017b"+
		"\u017d\5\n\6\2\u017c\u017a\3\2\2\2\u017c\u017b\3\2\2\2\u017d\u0180\3\2"+
		"\2\2\u017e\u017c\3\2\2\2\u017e\u017f\3\2\2\2\u017f\7\3\2\2\2\u0180\u017e"+
		"\3\2\2\2\u0181\u0183\5\f\7\2\u0182\u0184\7\u018a\2\2\u0183\u0182\3\2\2"+
		"\2\u0183\u0184\3\2\2\2\u0184\u01ae\3\2\2\2\u0185\u0187\5\16\b\2\u0186"+
		"\u0188\7\u018a\2\2\u0187\u0186\3\2\2\2\u0187\u0188\3\2\2\2\u0188\u01ae"+
		"\3\2\2\2\u0189\u018b\5\20\t\2\u018a\u018c\7\u018a\2\2\u018b\u018a\3\2"+
		"\2\2\u018b\u018c\3\2\2\2\u018c\u01ae\3\2\2\2\u018d\u018f\5\22\n\2\u018e"+
		"\u0190\7\u018a\2\2\u018f\u018e\3\2\2\2\u018f\u0190\3\2\2\2\u0190\u01ae"+
		"\3\2\2\2\u0191\u0193\5\30\r\2\u0192\u0194\7\u018a\2\2\u0193\u0192\3\2"+
		"\2\2\u0193\u0194\3\2\2\2\u0194\u01ae\3\2\2\2\u0195\u0197\5\34\17\2\u0196"+
		"\u0198\7\u018a\2\2\u0197\u0196\3\2\2\2\u0197\u0198\3\2\2\2\u0198\u01ae"+
		"\3\2\2\2\u0199\u019b\5\36\20\2\u019a\u019c\7\u018a\2\2\u019b\u019a\3\2"+
		"\2\2\u019b\u019c\3\2\2\2\u019c\u01ae\3\2\2\2\u019d\u019f\5 \21\2\u019e"+
		"\u01a0\7\u018a\2\2\u019f\u019e\3\2\2\2\u019f\u01a0\3\2\2\2\u01a0\u01ae"+
		"\3\2\2\2\u01a1\u01a3\5\"\22\2\u01a2\u01a4\7\u018a\2\2\u01a3\u01a2\3\2"+
		"\2\2\u01a3\u01a4\3\2\2\2\u01a4\u01ae\3\2\2\2\u01a5\u01a7\5$\23\2\u01a6"+
		"\u01a8\7\u018a\2\2\u01a7\u01a6\3\2\2\2\u01a7\u01a8\3\2\2\2\u01a8\u01ae"+
		"\3\2\2\2\u01a9\u01ab\5&\24\2\u01aa\u01ac\7\u018a\2\2\u01ab\u01aa\3\2\2"+
		"\2\u01ab\u01ac\3\2\2\2\u01ac\u01ae\3\2\2\2\u01ad\u0181\3\2\2\2\u01ad\u0185"+
		"\3\2\2\2\u01ad\u0189\3\2\2\2\u01ad\u018d\3\2\2\2\u01ad\u0191\3\2\2\2\u01ad"+
		"\u0195\3\2\2\2\u01ad\u0199\3\2\2\2\u01ad\u019d\3\2\2\2\u01ad\u01a1\3\2"+
		"\2\2\u01ad\u01a5\3\2\2\2\u01ad\u01a9\3\2\2\2\u01ae\t\3\2\2\2\u01af\u01b0"+
		"\7\u018a\2\2\u01b0\13\3\2\2\2\u01b1\u01c0\5*\26\2\u01b2\u01c0\5h\65\2"+
		"\u01b3\u01c0\5j\66\2\u01b4\u01c0\5l\67\2\u01b5\u01c0\5f\64\2\u01b6\u01c0"+
		"\5r:\2\u01b7\u01c0\5\u0080A\2\u01b8\u01c0\5\u0082B\2\u01b9\u01c0\5\u0084"+
		"C\2\u01ba\u01c0\5\u0086D\2\u01bb\u01c0\5\u0088E\2\u01bc\u01c0\5\u008a"+
		"F\2\u01bd\u01c0\5\u008cG\2\u01be\u01c0\5\u008eH\2\u01bf\u01b1\3\2\2\2"+
		"\u01bf\u01b2\3\2\2\2\u01bf\u01b3\3\2\2\2\u01bf\u01b4\3\2\2\2\u01bf\u01b5"+
		"\3\2\2\2\u01bf\u01b6\3\2\2\2\u01bf\u01b7\3\2\2\2\u01bf\u01b8\3\2\2\2\u01bf"+
		"\u01b9\3\2\2\2\u01bf\u01ba\3\2\2\2\u01bf\u01bb\3\2\2\2\u01bf\u01bc\3\2"+
		"\2\2\u01bf\u01bd\3\2\2\2\u01bf\u01be\3\2\2\2\u01c0\r\3\2\2\2\u01c1\u01c4"+
		"\5\u009eP\2\u01c2\u01c4\5\u0090I\2\u01c3\u01c1\3\2\2\2\u01c3\u01c2\3\2"+
		"\2\2\u01c4\17\3\2\2\2\u01c5\u01c6\t\2\2\2\u01c6\u01c7\5\u0140\u00a1\2"+
		"\u01c7\21\3\2\2\2\u01c8\u01cc\7\u00f8\2\2\u01c9\u01cd\5\24\13\2\u01ca"+
		"\u01cb\7g\2\2\u01cb\u01cd\7\u00fd\2\2\u01cc\u01c9\3\2\2\2\u01cc\u01ca"+
		"\3\2\2\2\u01cc\u01cd\3\2\2\2\u01cd\u01d1\3\2\2\2\u01ce\u01d2\5\16\b\2"+
		"\u01cf\u01d2\5\u0092J\2\u01d0\u01d2\5\u009cO\2\u01d1\u01ce\3\2\2\2\u01d1"+
		"\u01cf\3\2\2\2\u01d1\u01d0\3\2\2\2\u01d2\23\3\2\2\2\u01d3\u01d8\5\26\f"+
		"\2\u01d4\u01d5\7\u0189\2\2\u01d5\u01d7\5\26\f\2\u01d6\u01d4\3\2\2\2\u01d7"+
		"\u01da\3\2\2\2\u01d8\u01d6\3\2\2\2\u01d8\u01d9\3\2\2\2\u01d9\25\3\2\2"+
		"\2\u01da\u01d8\3\2\2\2\u01db\u01dc\t\3\2\2\u01dc\27\3\2\2\2\u01dd\u01de"+
		"\7\u00a3\2\2\u01de\u01df\7\16\2\2\u01df\u01e4\5\u0138\u009d\2\u01e0\u01e1"+
		"\7\u00a3\2\2\u01e1\u01e4\5\u013a\u009e\2\u01e2\u01e4\5\32\16\2\u01e3\u01dd"+
		"\3\2\2\2\u01e3\u01e0\3\2\2\2\u01e3\u01e2\3\2\2\2\u01e4\31\3\2\2\2\u01e5"+
		"\u01e6\7\u00a3\2\2\u01e6\u01e7\7V\2\2\u01e7\u01ec\5\u0142\u00a2\2\u01e8"+
		"\u01e9\7\u0189\2\2\u01e9\u01eb\5\u0142\u00a2\2\u01ea\u01e8\3\2\2\2\u01eb"+
		"\u01ee\3\2\2\2\u01ec\u01ea\3\2\2\2\u01ec\u01ed\3\2\2\2\u01ed\33\3\2\2"+
		"\2\u01ee\u01ec\3\2\2\2\u01ef\u01f0\7\u014e\2\2\u01f0\u0213\t\4\2\2\u01f1"+
		"\u01f2\7\u014e\2\2\u01f2\u01f3\7\u00e0\2\2\u01f3\u0213\t\5\2\2\u01f4\u01f5"+
		"\7\u014e\2\2\u01f5\u01f8\7\u0097\2\2\u01f6\u01f7\t\6\2\2\u01f7\u01f9\5"+
		"\u0140\u00a1\2\u01f8\u01f6\3\2\2\2\u01f8\u01f9\3\2\2\2\u01f9\u01fb\3\2"+
		"\2\2\u01fa\u01fc\5\u0108\u0085\2\u01fb\u01fa\3\2\2\2\u01fb\u01fc\3\2\2"+
		"\2\u01fc\u0213\3\2\2\2\u01fd\u01fe\7\u014e\2\2\u01fe\u01ff\7\26\2\2\u01ff"+
		"\u0200\t\6\2\2\u0200\u0202\5\u0142\u00a2\2\u0201\u0203\5\u0108\u0085\2"+
		"\u0202\u0201\3\2\2\2\u0202\u0203\3\2\2\2\u0203\u0213\3\2\2\2\u0204\u0205"+
		"\7\u014e\2\2\u0205\u0206\7\u00dd\2\2\u0206\u0207\t\7\2\2\u0207\u0213\5"+
		"\u0142\u00a2\2\u0208\u020a\7\u014e\2\2\u0209\u020b\7\u016d\2\2\u020a\u0209"+
		"\3\2\2\2\u020a\u020b\3\2\2\2\u020b\u020c\3\2\2\2\u020c\u0213\7\65\2\2"+
		"\u020d\u020f\7\u014e\2\2\u020e\u0210\7\u00ff\2\2\u020f\u020e\3\2\2\2\u020f"+
		"\u0210\3\2\2\2\u0210\u0211\3\2\2\2\u0211\u0213\7V\2\2\u0212\u01ef\3\2"+
		"\2\2\u0212\u01f1\3\2\2\2\u0212\u01f4\3\2\2\2\u0212\u01fd\3\2\2\2\u0212"+
		"\u0204\3\2\2\2\u0212\u0208\3\2\2\2\u0212\u020d\3\2\2\2\u0213\35\3\2\2"+
		"\2\u0214\u0215\7N\2\2\u0215\u0216\7\u0125\2\2\u0216\u0219\5\u0142\u00a2"+
		"\2\u0217\u0218\7\u0176\2\2\u0218\u021a\5\u014a\u00a6\2\u0219\u0217\3\2"+
		"\2\2\u0219\u021a\3\2\2\2\u021a\37\3\2\2\2\u021b\u021c\7\u00a1\2\2\u021c"+
		"\u021d\7\u0125\2\2\u021d\u021e\5\u0142\u00a2\2\u021e!\3\2\2\2\u021f\u0221"+
		"\7\u014d\2\2\u0220\u0222\5\u014c\u00a7\2\u0221\u0220\3\2\2\2\u0221\u0222"+
		"\3\2\2\2\u0222#\3\2\2\2\u0223\u0225\7\u0143\2\2\u0224\u0226\5\u014e\u00a8"+
		"\2\u0225\u0224\3\2\2\2\u0225\u0226\3\2\2\2\u0226%\3\2\2\2\u0227\u0228"+
		"\t\b\2\2\u0228\u0229\7B\2\2\u0229\u022a\5p9\2\u022a\'\3\2\2\2\u022b\u022d"+
		"\7\u019f\2\2\u022c\u022b\3\2\2\2\u022d\u022e\3\2\2\2\u022e\u022c\3\2\2"+
		"\2\u022e\u022f\3\2\2\2\u022f)\3\2\2\2\u0230\u0233\5,\27\2\u0231\u0233"+
		"\5.\30\2\u0232\u0230\3\2\2\2\u0232\u0231\3\2\2\2\u0233+\3\2\2\2\u0234"+
		"\u0236\7\u00dd\2\2\u0235\u0237\7\u0098\2\2\u0236\u0235\3\2\2\2\u0236\u0237"+
		"\3\2\2\2\u0237\u0238\3\2\2\2\u0238\u023a\7\u015a\2\2\u0239\u023b\5\u0146"+
		"\u00a4\2\u023a\u0239\3\2\2\2\u023a\u023b\3\2\2\2\u023b\u023c\3\2\2\2\u023c"+
		"\u023d\5\u013e\u00a0\2\u023d\u023e\7\u0185\2\2\u023e\u0243\5\60\31\2\u023f"+
		"\u0240\7\u0189\2\2\u0240\u0242\5\60\31\2\u0241\u023f\3\2\2\2\u0242\u0245"+
		"\3\2\2\2\u0243\u0241\3\2\2\2\u0243\u0244\3\2\2\2\u0244\u0248\3\2\2\2\u0245"+
		"\u0243\3\2\2\2\u0246\u0247\7\u0189\2\2\u0247\u0249\5R*\2\u0248\u0246\3"+
		"\2\2\2\u0248\u0249\3\2\2\2\u0249\u024c\3\2\2\2\u024a\u024b\7\u0189\2\2"+
		"\u024b\u024d\5T+\2\u024c\u024a\3\2\2\2\u024c\u024d\3\2\2\2\u024d\u0250"+
		"\3\2\2\2\u024e\u024f\7\u0189\2\2\u024f\u0251\5X-\2\u0250\u024e\3\2\2\2"+
		"\u0250\u0251\3\2\2\2\u0251\u0252\3\2\2\2\u0252\u0254\7\u0186\2\2\u0253"+
		"\u0255\5H%\2\u0254\u0253\3\2\2\2\u0254\u0255\3\2\2\2\u0255\u0257\3\2\2"+
		"\2\u0256\u0258\5Z.\2\u0257\u0256\3\2\2\2\u0257\u0258\3\2\2\2\u0258\u0259"+
		"\3\2\2\2\u0259\u025b\5\u0144\u00a3\2\u025a\u025c\5b\62\2\u025b\u025a\3"+
		"\2\2\2\u025b\u025c\3\2\2\2\u025c-\3\2\2\2\u025d\u025e\7\u00dd\2\2\u025e"+
		"\u0260\7\u015a\2\2\u025f\u0261\5\u0146\u00a4\2\u0260\u025f\3\2\2\2\u0260"+
		"\u0261\3\2\2\2\u0261\u0262\3\2\2\2\u0262\u0263\5\u013e\u00a0\2\u0263\u0266"+
		"\5\u0144\u00a3\2\u0264\u0265\7\u00bb\2\2\u0265\u0267\5\u009eP\2\u0266"+
		"\u0264\3\2\2\2\u0266\u0267\3\2\2\2\u0267/\3\2\2\2\u0268\u026c\5\62\32"+
		"\2\u0269\u026c\5J&\2\u026a\u026c\5N(\2\u026b\u0268\3\2\2\2\u026b\u0269"+
		"\3\2\2\2\u026b\u026a\3\2\2\2\u026c\61\3\2\2\2\u026d\u026e\5\64\33\2\u026e"+
		"\u0270\58\35\2\u026f\u0271\5F$\2\u0270\u026f\3\2\2\2\u0270\u0271\3\2\2"+
		"\2\u0271\u0273\3\2\2\2\u0272\u0274\5H%\2\u0273\u0272\3\2\2\2\u0273\u0274"+
		"\3\2\2\2\u0274\63\3\2\2\2\u0275\u0278\5\u0142\u00a2\2\u0276\u0278\5\u0102"+
		"\u0082\2\u0277\u0275\3\2\2\2\u0277\u0276\3\2\2\2\u0278\65\3\2\2\2\u0279"+
		"\u027a\7\u0185\2\2\u027a\u027f\5\64\33\2\u027b\u027c\7\u0189\2\2\u027c"+
		"\u027e\5\64\33\2\u027d\u027b\3\2\2\2\u027e\u0281\3\2\2\2\u027f\u027d\3"+
		"\2\2\2\u027f\u0280\3\2\2\2\u0280\u0282\3\2\2\2\u0281\u027f\3\2\2\2\u0282"+
		"\u0283\7\u0186\2\2\u0283\67\3\2\2\2\u0284\u02ce\t\t\2\2\u0285\u0287\t"+
		"\n\2\2\u0286\u0288\5:\36\2\u0287\u0286\3\2\2\2\u0287\u0288\3\2\2\2\u0288"+
		"\u02ce\3\2\2\2\u0289\u028b\7\u015e\2\2\u028a\u028c\5:\36\2\u028b\u028a"+
		"\3\2\2\2\u028b\u028c\3\2\2\2\u028c\u0293\3\2\2\2\u028d\u028f\t\13\2\2"+
		"\u028e\u0290\7\u011c\2\2\u028f\u028e\3\2\2\2\u028f\u0290\3\2\2\2\u0290"+
		"\u0291\3\2\2\2\u0291\u0292\7\u015d\2\2\u0292\u0294\7\u00b2\2\2\u0293\u028d"+
		"\3\2\2\2\u0293\u0294\3\2\2\2\u0294\u02ce\3\2\2\2\u0295\u0297\7\u015f\2"+
		"\2\u0296\u0298\5:\36\2\u0297\u0296\3\2\2\2\u0297\u0298\3\2\2\2\u0298\u029f"+
		"\3\2\2\2\u0299\u029b\t\13\2\2\u029a\u029c\7\u011c\2\2\u029b\u029a\3\2"+
		"\2\2\u029b\u029c\3\2\2\2\u029c\u029d\3\2\2\2\u029d\u029e\7\u015d\2\2\u029e"+
		"\u02a0\7\u00b2\2\2\u029f\u0299\3\2\2\2\u029f\u02a0\3\2\2\2\u02a0\u02ce"+
		"\3\2\2\2\u02a1\u02a3\7\u0160\2\2\u02a2\u02a4\5:\36\2\u02a3\u02a2\3\2\2"+
		"\2\u02a3\u02a4\3\2\2\2\u02a4\u02ab\3\2\2\2\u02a5\u02a7\t\13\2\2\u02a6"+
		"\u02a8\7\u011c\2\2\u02a7\u02a6\3\2\2\2\u02a7\u02a8\3\2\2\2\u02a8\u02a9"+
		"\3\2\2\2\u02a9\u02aa\7\u015d\2\2\u02aa\u02ac\7\u00b2\2\2\u02ab\u02a5\3"+
		"\2\2\2\u02ab\u02ac\3\2\2\2\u02ac\u02ce\3\2\2\2\u02ad\u02af\7\u0161\2\2"+
		"\u02ae\u02b0\5:\36\2\u02af\u02ae\3\2\2\2\u02af\u02b0\3\2\2\2\u02b0\u02b7"+
		"\3\2\2\2\u02b1\u02b3\t\13\2\2\u02b2\u02b4\7\u011c\2\2\u02b3\u02b2\3\2"+
		"\2\2\u02b3\u02b4\3\2\2\2\u02b4\u02b5\3\2\2\2\u02b5\u02b6\7\u015d\2\2\u02b6"+
		"\u02b8\7\u00b2\2\2\u02b7\u02b1\3\2\2\2\u02b7\u02b8\3\2\2\2\u02b8\u02ce"+
		"\3\2\2\2\u02b9\u02bb\t\f\2\2\u02ba\u02bc\5<\37\2\u02bb\u02ba\3\2\2\2\u02bb"+
		"\u02bc\3\2\2\2\u02bc\u02ce\3\2\2\2\u02bd\u02bf\t\r\2\2\u02be\u02c0\5@"+
		"!\2\u02bf\u02be\3\2\2\2\u02bf\u02c0\3\2\2\2\u02c0\u02ce\3\2\2\2\u02c1"+
		"\u02c3\7O\2\2\u02c2\u02c4\5B\"\2\u02c3\u02c2\3\2\2\2\u02c3\u02c4\3\2\2"+
		"\2\u02c4\u02ce\3\2\2\2\u02c5\u02c7\7\u0149\2\2\u02c6\u02c8\5D#\2\u02c7"+
		"\u02c6\3\2\2\2\u02c7\u02c8\3\2\2\2\u02c8\u02ce\3\2\2\2\u02c9\u02cb\7u"+
		"\2\2\u02ca\u02cc\5> \2\u02cb\u02ca\3\2\2\2\u02cb\u02cc\3\2\2\2\u02cc\u02ce"+
		"\3\2\2\2\u02cd\u0284\3\2\2\2\u02cd\u0285\3\2\2\2\u02cd\u0289\3\2\2\2\u02cd"+
		"\u0295\3\2\2\2\u02cd\u02a1\3\2\2\2\u02cd\u02ad\3\2\2\2\u02cd\u02b9\3\2"+
		"\2\2\u02cd\u02bd\3\2\2\2\u02cd\u02c1\3\2\2\2\u02cd\u02c5\3\2\2\2\u02cd"+
		"\u02c9\3\2\2\2\u02ce9\3\2\2\2\u02cf\u02d0\7\u0185\2\2\u02d0\u02d1\5\u0162"+
		"\u00b2\2\u02d1\u02d2\7\u0186\2\2\u02d2;\3\2\2\2\u02d3\u02d4\7\u0185\2"+
		"\2\u02d4\u02d7\5\u0162\u00b2\2\u02d5\u02d6\7\u0189\2\2\u02d6\u02d8\5\u0162"+
		"\u00b2\2\u02d7\u02d5\3\2\2\2\u02d7\u02d8\3\2\2\2\u02d8\u02d9\3\2\2\2\u02d9"+
		"\u02da\7\u0186\2\2\u02da=\3\2\2\2\u02db\u02dc\7\u0185\2\2\u02dc\u02df"+
		"\5\u0160\u00b1\2\u02dd\u02de\7\u0189\2\2\u02de\u02e0\5\u0160\u00b1\2\u02df"+
		"\u02dd\3\2\2\2\u02df\u02e0\3\2\2\2\u02e0\u02e1\3\2\2\2\u02e1\u02e2\7\u0186"+
		"\2\2\u02e2?\3\2\2\2\u02e3\u02e4\7\u017c\2\2\u02e4\u02e5\58\35\2\u02e5"+
		"\u02e6\7\u017b\2\2\u02e6A\3\2\2\2\u02e7\u02e8\7\u017c\2\2\u02e8\u02e9"+
		"\58\35\2\u02e9\u02ea\7\u0189\2\2\u02ea\u02eb\58\35\2\u02eb\u02ec\3\2\2"+
		"\2\u02ec\u02ed\7\u017b\2\2\u02edC\3\2\2\2\u02ee\u02ef\7\u017c\2\2\u02ef"+
		"\u02f0\5\64\33\2\u02f0\u02f7\58\35\2\u02f1\u02f2\7\u0189\2\2\u02f2\u02f3"+
		"\5\64\33\2\u02f3\u02f4\58\35\2\u02f4\u02f6\3\2\2\2\u02f5\u02f1\3\2\2\2"+
		"\u02f6\u02f9\3\2\2\2\u02f7\u02f5\3\2\2\2\u02f7\u02f8\3\2\2\2\u02f8\u02fa"+
		"\3\2\2\2\u02f9\u02f7\3\2\2\2\u02fa\u02fb\7\u017b\2\2\u02fbE\3\2\2\2\u02fc"+
		"\u02fd\7\u00d9\2\2\u02fd\u02ff\5V,\2\u02fe\u02fc\3\2\2\2\u02fe\u02ff\3"+
		"\2\2\2\u02ff\u0300\3\2\2\2\u0300\u0301\7\u0140\2\2\u0301\u0304\7G\2\2"+
		"\u0302\u0303\7\u012c\2\2\u0303\u0305\7$\2\2\u0304\u0302\3\2\2\2\u0304"+
		"\u0305\3\2\2\2\u0305\u030b\3\2\2\2\u0306\u0308\7\u012c\2\2\u0307\u0306"+
		"\3\2\2\2\u0307\u0308\3\2\2\2\u0308\u0309\3\2\2\2\u0309\u030b\7\u012d\2"+
		"\2\u030a\u02fe\3\2\2\2\u030a\u0307\3\2\2\2\u030bG\3\2\2\2\u030c\u030d"+
		"\7\24\2\2\u030d\u030e\7\u019a\2\2\u030eI\3\2\2\2\u030f\u0310\5\64\33\2"+
		"\u0310\u0311\58\35\2\u0311\u0314\7\u0121\2\2\u0312\u0313\7\u00fe\2\2\u0313"+
		"\u0315\5L\'\2\u0314\u0312\3\2\2\2\u0314\u0315\3\2\2\2\u0315\u0317\3\2"+
		"\2\2\u0316\u0318\7\u00aa\2\2\u0317\u0316\3\2\2\2\u0317\u0318\3\2\2\2\u0318"+
		"K\3\2\2\2\u0319\u031a\7\u019a\2\2\u031aM\3\2\2\2\u031b\u031c\5\64\33\2"+
		"\u031c\u031d\7\u00bb\2\2\u031d\u031f\5P)\2\u031e\u0320\5H%\2\u031f\u031e"+
		"\3\2\2\2\u031f\u0320\3\2\2\2\u0320O\3\2\2\2\u0321\u0322\5\u0102\u0082"+
		"\2\u0322Q\3\2\2\2\u0323\u0324\7\u00ab\2\2\u0324\u0325\7\u00fd\2\2\u0325"+
		"\u0326\5\u0102\u0082\2\u0326\u0327\7\u00bb\2\2\u0327\u0328\5\u0102\u0082"+
		"\2\u0328S\3\2\2\2\u0329\u032a\7\u00d9\2\2\u032a\u032c\5V,\2\u032b\u0329"+
		"\3\2\2\2\u032b\u032c\3\2\2\2\u032c\u032d\3\2\2\2\u032d\u032e\7\u0140\2"+
		"\2\u032e\u032f\7G\2\2\u032f\u0330\5\66\34\2\u0330\u0331\7\u012c\2\2\u0331"+
		"\u0332\7$\2\2\u0332U\3\2\2\2\u0333\u0334\5\u0130\u0099\2\u0334W\3\2\2"+
		"\2\u0335\u0336\7\u013d\2\2\u0336\u0337\7\u00fd\2\2\u0337\u0338\7\u0158"+
		"\2\2\u0338Y\3\2\2\2\u0339\u033a\7a\2\2\u033a\u033b\7\u00c7\2\2\u033b\u033c"+
		"\5\\/\2\u033c[\3\2\2\2\u033d\u033e\7\u0185\2\2\u033e\u0343\5^\60\2\u033f"+
		"\u0340\7\u0189\2\2\u0340\u0342\5^\60\2\u0341\u033f\3\2\2\2\u0342\u0345"+
		"\3\2\2\2\u0343\u0341\3\2\2\2\u0343\u0344\3\2\2\2\u0344\u0346\3\2\2\2\u0345"+
		"\u0343\3\2\2\2\u0346\u0347\7\u0186\2\2\u0347]\3\2\2\2\u0348\u0356\5\u0116"+
		"\u008c\2\u0349\u034a\5\u0130\u0099\2\u034a\u034b\7\u0185\2\2\u034b\u0350"+
		"\5`\61\2\u034c\u034d\7\u0189\2\2\u034d\u034f\5`\61\2\u034e\u034c\3\2\2"+
		"\2\u034f\u0352\3\2\2\2\u0350\u034e\3\2\2\2\u0350\u0351\3\2\2\2\u0351\u0353"+
		"\3\2\2\2\u0352\u0350\3\2\2\2\u0353\u0354\7\u0186\2\2\u0354\u0356\3\2\2"+
		"\2\u0355\u0348\3\2\2\2\u0355\u0349\3\2\2\2\u0356_\3\2\2\2\u0357\u035a"+
		"\5\u0116\u008c\2\u0358\u035a\5\u015c\u00af\2\u0359\u0357\3\2\2\2\u0359"+
		"\u0358\3\2\2\2\u035aa\3\2\2\2\u035b\u035c\7\u011a\2\2\u035c\u0365\5\u0140"+
		"\u00a1\2\u035d\u0361\7\u0185\2\2\u035e\u0360\5d\63\2\u035f\u035e\3\2\2"+
		"\2\u0360\u0363\3\2\2\2\u0361\u035f\3\2\2\2\u0361\u0362\3\2\2\2\u0362\u0364"+
		"\3\2\2\2\u0363\u0361\3\2\2\2\u0364\u0366\7\u0186\2\2\u0365\u035d\3\2\2"+
		"\2\u0365\u0366\3\2\2\2\u0366c\3\2\2\2\u0367\u0368\t\16\2\2\u0368\u036c"+
		"\t\17\2\2\u0369\u036a\t\20\2\2\u036a\u036c\t\21\2\2\u036b\u0367\3\2\2"+
		"\2\u036b\u0369\3\2\2\2\u036ce\3\2\2\2\u036d\u036e\7\u00dd\2\2\u036e\u036f"+
		"\7\16\2\2\u036f\u0370\5\u0142\u00a2\2\u0370\u0371\5\u0144\u00a3\2\u0371"+
		"g\3\2\2\2\u0372\u0373\7\u00dd\2\2\u0373\u0375\7\33\2\2\u0374\u0376\5\u0146"+
		"\u00a4\2\u0375\u0374\3\2\2\2\u0375\u0376\3\2\2\2\u0376\u0377\3\2\2\2\u0377"+
		"\u0379\5\u013c\u009f\2\u0378\u037a\5H%\2\u0379\u0378\3\2\2\2\u0379\u037a"+
		"\3\2\2\2\u037a\u037b\3\2\2\2\u037b\u037c\5\u0144\u00a3\2\u037ci\3\2\2"+
		"\2\u037d\u037f\7\u00dd\2\2\u037e\u0380\7\u0098\2\2\u037f\u037e\3\2\2\2"+
		"\u037f\u0380\3\2\2\2\u0380\u0381\3\2\2\2\u0381\u0383\7\u00a8\2\2\u0382"+
		"\u0384\5\u0146\u00a4\2\u0383\u0382\3\2\2\2\u0383\u0384\3\2\2\2\u0384\u0385"+
		"\3\2\2\2\u0385\u0387\5\u0142\u00a2\2\u0386\u0388\5\66\34\2\u0387\u0386"+
		"\3\2\2\2\u0387\u0388\3\2\2\2\u0388\u038a\3\2\2\2\u0389\u038b\5H%\2\u038a"+
		"\u0389\3\2\2\2\u038a\u038b\3\2\2\2\u038b\u038c\3\2\2\2\u038c\u038d\7\u00bb"+
		"\2\2\u038d\u038e\5\u009eP\2\u038ek\3\2\2\2\u038f\u0393\7\u00dd\2\2\u0390"+
		"\u0394\7\u0098\2\2\u0391\u0392\7\u0098\2\2\u0392\u0394\7\u0157\2\2\u0393"+
		"\u0390\3\2\2\2\u0393\u0391\3\2\2\2\u0393\u0394\3\2\2\2\u0394\u0395\3\2"+
		"\2\2\u0395\u0397\7\u0100\2\2\u0396\u0398\5\u0146\u00a4\2\u0397\u0396\3"+
		"\2\2\2\u0397\u0398\3\2\2\2\u0398\u0399\3\2\2\2\u0399\u039a\5\u010e\u0088"+
		"\2\u039a\u039b\7\u00bb\2\2\u039b\u039e\5\u0130\u0099\2\u039c\u039d\7\u0116"+
		"\2\2\u039d\u039f\t\22\2\2\u039e\u039c\3\2\2\2\u039e\u039f\3\2\2\2\u039f"+
		"\u03a1\3\2\2\2\u03a0\u03a2\5n8\2\u03a1\u03a0\3\2\2\2\u03a1\u03a2\3\2\2"+
		"\2\u03a2m\3\2\2\2\u03a3\u03a4\7\u016e\2\2\u03a4\u03a5\7B\2\2\u03a5\u03ab"+
		"\5p9\2\u03a6\u03a7\7\u0189\2\2\u03a7\u03a8\7B\2\2\u03a8\u03aa\5p9\2\u03a9"+
		"\u03a6\3\2\2\2\u03aa\u03ad\3\2\2\2\u03ab\u03a9\3\2\2\2\u03ab\u03ac\3\2"+
		"\2\2\u03aco\3\2\2\2\u03ad\u03ab\3\2\2\2\u03ae\u03af\7\u019a\2\2\u03af"+
		"q\3\2\2\2\u03b0\u03b1\7\u00b6\2\2\u03b1\u03b3\7\u015a\2\2\u03b2\u03b4"+
		"\5\u0148\u00a5\2\u03b3\u03b2\3\2\2\2\u03b3\u03b4\3\2\2\2\u03b4\u03b5\3"+
		"\2\2\2\u03b5\u03bb\5\u0140\u00a1\2\u03b6\u03bc\5t;\2\u03b7\u03bc\5v<\2"+
		"\u03b8\u03bc\5x=\2\u03b9\u03bc\5z>\2\u03ba\u03bc\5|?\2\u03bb\u03b6\3\2"+
		"\2\2\u03bb\u03b7\3\2\2\2\u03bb\u03b8\3\2\2\2\u03bb\u03b9\3\2\2\2\u03bb"+
		"\u03ba\3\2\2\2\u03bcs\3\2\2\2\u03bd\u03bf\7y\2\2\u03be\u03c0\5\u0142\u00a2"+
		"\2\u03bf\u03be\3\2\2\2\u03bf\u03c0\3\2\2\2\u03c0\u03c1\3\2\2\2\u03c1\u03c2"+
		"\7\u0163\2\2\u03c2\u03c3\5\u0142\u00a2\2\u03c3u\3\2\2\2\u03c4\u03c5\7"+
		"\u014d\2\2\u03c5\u03c6\5\u014a\u00a6\2\u03c6w\3\2\2\2\u03c7\u03c8\7\6"+
		"\2\2\u03c8\u03c9\7\u00d9\2\2\u03c9\u03ca\5V,\2\u03ca\u03cb\7\u0140\2\2"+
		"\u03cb\u03cc\7G\2\2\u03cc\u03ce\5\66\34\2\u03cd\u03cf\5~@\2\u03ce\u03cd"+
		"\3\2\2\2\u03ce\u03cf\3\2\2\2\u03cfy\3\2\2\2\u03d0\u03d1\7\u00ef\2\2\u03d1"+
		"\u03d2\7\u00d9\2\2\u03d2\u03d3\5V,\2\u03d3{\3\2\2\2\u03d4\u03d5\7\6\2"+
		"\2\u03d5\u03d6\7\u0168\2\2\u03d6\u03d7\5\66\34\2\u03d7}\3\2\2\2\u03d8"+
		"\u03d9\7\u012c\2\2\u03d9\u03da\7$\2\2\u03da\177\3\2\2\2\u03db\u03dc\7"+
		"\u00b6\2\2\u03dc\u03dd\7\u00a8\2\2\u03dd\u03e1\5\u0142\u00a2\2\u03de\u03e2"+
		"\5t;\2\u03df\u03e0\7\u00bb\2\2\u03e0\u03e2\5\u009eP\2\u03e1\u03de\3\2"+
		"\2\2\u03e1\u03df\3\2\2\2\u03e2\u0081\3\2\2\2\u03e3\u03e4\7\u00b6\2\2\u03e4"+
		"\u03e5\7\33\2\2\u03e5\u03e6\5\u013a\u009e\2\u03e6\u03e7\5v<\2\u03e7\u0083"+
		"\3\2\2\2\u03e8\u03ec\7\u00b6\2\2\u03e9\u03ed\7\u0098\2\2\u03ea\u03eb\7"+
		"\u0098\2\2\u03eb\u03ed\7\u0157\2\2\u03ec\u03e9\3\2\2\2\u03ec\u03ea\3\2"+
		"\2\2\u03ec\u03ed\3\2\2\2\u03ed\u03ee\3\2\2\2\u03ee\u03f0\7\u0100\2\2\u03ef"+
		"\u03f1\5\u0148\u00a5\2\u03f0\u03ef\3\2\2\2\u03f0\u03f1\3\2\2\2\u03f1\u03f2"+
		"\3\2\2\2\u03f2\u03f3\5\u0142\u00a2\2\u03f3\u03f4\7\u00bb\2\2\u03f4\u03f7"+
		"\5\u0130\u0099\2\u03f5\u03f6\7\u0116\2\2\u03f6\u03f8\t\22\2\2\u03f7\u03f5"+
		"\3\2\2\2\u03f7\u03f8\3\2\2\2\u03f8\u0085\3\2\2\2\u03f9\u03fa\7\u00ef\2"+
		"\2\u03fa\u03fc\7\16\2\2\u03fb\u03fd\5\u0148\u00a5\2\u03fc\u03fb\3\2\2"+
		"\2\u03fc\u03fd\3\2\2\2\u03fd\u03fe\3\2\2\2\u03fe\u03ff\5\u0138\u009d\2"+
		"\u03ff\u0087\3\2\2\2\u0400\u0402\7\u00ef\2\2\u0401\u0403\7\u0098\2\2\u0402"+
		"\u0401\3\2\2\2\u0402\u0403\3\2\2\2\u0403\u0404\3\2\2\2\u0404\u0406\7\u015a"+
		"\2\2\u0405\u0407\5\u0148\u00a5\2\u0406\u0405\3\2\2\2\u0406\u0407\3\2\2"+
		"\2\u0407\u0408\3\2\2\2\u0408\u0409\5\u0140\u00a1\2\u0409\u0089\3\2\2\2"+
		"\u040a\u040b\7\u00ef\2\2\u040b\u040d\7\33\2\2\u040c\u040e\5\u0148\u00a5"+
		"\2\u040d\u040c\3\2\2\2\u040d\u040e\3\2\2\2\u040e\u040f\3\2\2\2\u040f\u0411"+
		"\5\u013a\u009e\2\u0410\u0412\t\23\2\2\u0411\u0410\3\2\2\2\u0411\u0412"+
		"\3\2\2\2\u0412\u008b\3\2\2\2\u0413\u0415\7\u00ef\2\2\u0414\u0416\7\u0098"+
		"\2\2\u0415\u0414\3\2\2\2\u0415\u0416\3\2\2\2\u0416\u0417\3\2\2\2\u0417"+
		"\u0419\7\u00a8\2\2\u0418\u041a\5\u0148\u00a5\2\u0419\u0418\3\2\2\2\u0419"+
		"\u041a\3\2\2\2\u041a\u041b\3\2\2\2\u041b\u041c\5\u0142\u00a2\2\u041c\u008d"+
		"\3\2\2\2\u041d\u0421\7\u00ef\2\2\u041e\u0422\7\u0098\2\2\u041f\u0420\7"+
		"\u0098\2\2\u0420\u0422\7\u0157\2\2\u0421\u041e\3\2\2\2\u0421\u041f\3\2"+
		"\2\2\u0421\u0422\3\2\2\2\u0422\u0423\3\2\2\2\u0423\u0425\7\u0100\2\2\u0424"+
		"\u0426\5\u0148\u00a5\2\u0425\u0424\3\2\2\2\u0425\u0426\3\2\2\2\u0426\u0427"+
		"\3\2\2\2\u0427\u0428\5\u010e\u0088\2\u0428\u008f\3\2\2\2\u0429\u042b\7"+
		"\u00f6\2\2\u042a\u0429\3\2\2\2\u042a\u042b\3\2\2\2\u042b\u042c\3\2\2\2"+
		"\u042c\u0431\5\u0092J\2\u042d\u0431\5\u009aN\2\u042e\u042f\7\u00f6\2\2"+
		"\u042f\u0431\5\u009cO\2\u0430\u042a\3\2\2\2\u0430\u042d\3\2\2\2\u0430"+
		"\u042e\3\2\2\2\u0431\u0091\3\2\2\2\u0432\u0433\7\u010d\2\2\u0433\u0434"+
		"\t\24\2\2\u0434\u043d\5\u0140\u00a1\2\u0435\u0437\5\u0094K\2\u0436\u0435"+
		"\3\2\2\2\u0436\u0437\3\2\2\2\u0437\u0439\3\2\2\2\u0438\u043a\5\66\34\2"+
		"\u0439\u0438\3\2\2\2\u0439\u043a\3\2\2\2\u043a\u043b\3\2\2\2\u043b\u043e"+
		"\5\u009eP\2\u043c\u043e\5\u0096L\2\u043d\u0436\3\2\2\2\u043d\u043c\3\2"+
		"\2\2\u043e\u0093\3\2\2\2\u043f\u0440\7\u0139\2\2\u0440\u0441\5\u014a\u00a6"+
		"\2\u0441\u0095\3\2\2\2\u0442\u0443\7\u0170\2\2\u0443\u0448\5\u0098M\2"+
		"\u0444\u0445\7\u0189\2\2\u0445\u0447\5\u0098M\2\u0446\u0444\3\2\2\2\u0447"+
		"\u044a\3\2\2\2\u0448\u0446\3\2\2\2\u0448\u0449\3\2\2\2\u0449\u0097\3\2"+
		"\2\2\u044a\u0448\3\2\2\2\u044b\u044c\7\u0185\2\2\u044c\u0451\5\u015c\u00af"+
		"\2\u044d\u044e\7\u0189\2\2\u044e\u0450\5\u015c\u00af\2\u044f\u044d\3\2"+
		"\2\2\u0450\u0453\3\2\2\2\u0451\u044f\3\2\2\2\u0451\u0452\3\2\2\2\u0452"+
		"\u0454\3\2\2\2\u0453\u0451\3\2\2\2\u0454\u0455\7\u0186\2\2\u0455\u0099"+
		"\3\2\2\2\u0456\u0457\7\u00bf\2\2\u0457\u0458\7\u0092\2\2\u0458\u0459\7"+
		"\u014d\2\2\u0459\u045d\7\u018a\2\2\u045a\u045b\5\u0092J\2\u045b\u045c"+
		"\7\u018a\2\2\u045c\u045e\3\2\2\2\u045d\u045a\3\2\2\2\u045e\u045f\3\2\2"+
		"\2\u045f\u045d\3\2\2\2\u045f\u0460\3\2\2\2\u0460\u0461\3\2\2\2\u0461\u0462"+
		"\7\u00f2\2\2\u0462\u009b\3\2\2\2\u0463\u0464\7\u0092\2\2\u0464\u0465\7"+
		"\u014d\2\2\u0465\u0469\7\u00bf\2\2\u0466\u0467\5\u0092J\2\u0467\u0468"+
		"\7\u018a\2\2\u0468\u046a\3\2\2\2\u0469\u0466\3\2\2\2\u046a\u046b\3\2\2"+
		"\2\u046b\u0469\3\2\2\2\u046b\u046c\3\2\2\2\u046c\u046d\3\2\2\2\u046d\u046e"+
		"\7\u00f2\2\2\u046e\u009d\3\2\2\2\u046f\u0470\bP\1\2\u0470\u0487\5\u00a0"+
		"Q\2\u0471\u0472\5\u00a2R\2\u0472\u0473\5\u009eP\7\u0473\u0487\3\2\2\2"+
		"\u0474\u0475\7\u0185\2\2\u0475\u0476\5\u009eP\2\u0476\u0477\7\u0186\2"+
		"\2\u0477\u0487\3\2\2\2\u0478\u047a\5\u00aaV\2\u0479\u047b\5\u00e6t\2\u047a"+
		"\u0479\3\2\2\2\u047a\u047b\3\2\2\2\u047b\u047d\3\2\2\2\u047c\u047e\5\u00ea"+
		"v\2\u047d\u047c\3\2\2\2\u047d\u047e\3\2\2\2\u047e\u0487\3\2\2\2\u047f"+
		"\u0481\5\u00a8U\2\u0480\u0482\5\u00e6t\2\u0481\u0480\3\2\2\2\u0481\u0482"+
		"\3\2\2\2\u0482\u0484\3\2\2\2\u0483\u0485\5\u00eav\2\u0484\u0483\3\2\2"+
		"\2\u0484\u0485\3\2\2\2\u0485\u0487\3\2\2\2\u0486\u046f\3\2\2\2\u0486\u0471"+
		"\3\2\2\2\u0486\u0474\3\2\2\2\u0486\u0478\3\2\2\2\u0486\u047f\3\2\2\2\u0487"+
		"\u0496\3\2\2\2\u0488\u0489\f\5\2\2\u0489\u048b\t\25\2\2\u048a\u048c\7"+
		"\u00b4\2\2\u048b\u048a\3\2\2\2\u048b\u048c\3\2\2\2\u048c\u048d\3\2\2\2"+
		"\u048d\u048f\5\u009eP\2\u048e\u0490\5\u00e6t\2\u048f\u048e\3\2\2\2\u048f"+
		"\u0490\3\2\2\2\u0490\u0492\3\2\2\2\u0491\u0493\5\u00eav\2\u0492\u0491"+
		"\3\2\2\2\u0492\u0493\3\2\2\2\u0493\u0495\3\2\2\2\u0494\u0488\3\2\2\2\u0495"+
		"\u0498\3\2\2\2\u0496\u0494\3\2\2\2\u0496\u0497\3\2\2\2\u0497\u009f\3\2"+
		"\2\2\u0498\u0496\3\2\2\2\u0499\u049a\7\u0170\2\2\u049a\u049f\5\u0102\u0082"+
		"\2\u049b\u049c\7\u0189\2\2\u049c\u049e\5\u0102\u0082\2\u049d\u049b\3\2"+
		"\2\2\u049e\u04a1\3\2\2\2\u049f\u049d\3\2\2\2\u049f\u04a0\3\2\2\2\u04a0"+
		"\u00a1\3\2\2\2\u04a1\u049f\3\2\2\2\u04a2\u04a3\7\u0176\2\2\u04a3\u04a8"+
		"\5\u00a4S\2\u04a4\u04a5\7\u0189\2\2\u04a5\u04a7\5\u00a4S\2\u04a6\u04a4"+
		"\3\2\2\2\u04a7\u04aa\3\2\2\2\u04a8\u04a6\3\2\2\2\u04a8\u04a9\3\2\2\2\u04a9"+
		"\u00a3\3\2\2\2\u04aa\u04a8\3\2\2\2\u04ab\u04b7\5\u00a6T\2\u04ac\u04ad"+
		"\7\u0185\2\2\u04ad\u04b2\5\64\33\2\u04ae\u04af\7\u0189\2\2\u04af\u04b1"+
		"\5\64\33\2\u04b0\u04ae\3\2\2\2\u04b1\u04b4\3\2\2\2\u04b2\u04b0\3\2\2\2"+
		"\u04b2\u04b3\3\2\2\2\u04b3\u04b5\3\2\2\2\u04b4\u04b2\3\2\2\2\u04b5\u04b6"+
		"\7\u0186\2\2\u04b6\u04b8\3\2\2\2\u04b7\u04ac\3\2\2\2\u04b7\u04b8\3\2\2"+
		"\2\u04b8\u04b9\3\2\2\2\u04b9\u04ba\7\u00bb\2\2\u04ba\u04bb\7\u0185\2\2"+
		"\u04bb\u04bc\5\u009eP\2\u04bc\u04bd\7\u0186\2\2\u04bd\u00a5\3\2\2\2\u04be"+
		"\u04bf\5\u0130\u0099\2\u04bf\u00a7\3\2\2\2\u04c0\u04c1\5\u00aaV\2\u04c1"+
		"\u04c3\5\u00b0Y\2\u04c2\u04c4\5\u00ccg\2\u04c3\u04c2\3\2\2\2\u04c3\u04c4"+
		"\3\2\2\2\u04c4\u04c6\3\2\2\2\u04c5\u04c7\5\u00ceh\2\u04c6\u04c5\3\2\2"+
		"\2\u04c6\u04c7\3\2\2\2\u04c7\u04c9\3\2\2\2\u04c8\u04ca\5\u00dco\2\u04c9"+
		"\u04c8\3\2\2\2\u04c9\u04ca\3\2\2\2\u04ca\u04cc\3\2\2\2\u04cb\u04cd\5\u00de"+
		"p\2\u04cc\u04cb\3\2\2\2\u04cc\u04cd\3\2\2\2\u04cd\u04d3\3\2\2\2\u04ce"+
		"\u04cf\5\u00aaV\2\u04cf\u04d0\5\u00b0Y\2\u04d0\u04d1\5\u00e4s\2\u04d1"+
		"\u04d3\3\2\2\2\u04d2\u04c0\3\2\2\2\u04d2\u04ce\3\2\2\2\u04d3\u00a9\3\2"+
		"\2\2\u04d4\u04d6\7\u014c\2\2\u04d5\u04d7\5\u0166\u00b4\2\u04d6\u04d5\3"+
		"\2\2\2\u04d6\u04d7\3\2\2\2\u04d7\u04e1\3\2\2\2\u04d8\u04e2\7\u0190\2\2"+
		"\u04d9\u04de\5\u00acW\2\u04da\u04db\7\u0189\2\2\u04db\u04dd\5\u00acW\2"+
		"\u04dc\u04da\3\2\2\2\u04dd\u04e0\3\2\2\2\u04de\u04dc\3\2\2\2\u04de\u04df"+
		"\3\2\2\2\u04df\u04e2\3\2\2\2\u04e0\u04de\3\2\2\2\u04e1\u04d8\3\2\2\2\u04e1"+
		"\u04d9\3\2\2\2\u04e2\u00ab\3\2\2\2\u04e3\u04ec\5\u00aeX\2\u04e4\u04e9"+
		"\5\u0102\u0082\2\u04e5\u04e7\7\u00bb\2\2\u04e6\u04e5\3\2\2\2\u04e6\u04e7"+
		"\3\2\2\2\u04e7\u04e8\3\2\2\2\u04e8\u04ea\5\u0102\u0082\2\u04e9\u04e6\3"+
		"\2\2\2\u04e9\u04ea\3\2\2\2\u04ea\u04ec\3\2\2\2\u04eb\u04e3\3\2\2\2\u04eb"+
		"\u04e4\3\2\2\2\u04ec\u00ad\3\2\2\2\u04ed\u04ee\5\u010c\u0087\2\u04ee\u04ef"+
		"\7\u0137\2\2\u04ef\u04f0\5\u00e2r\2\u04f0\u04f1\7\u00bb\2\2\u04f1\u04f2"+
		"\5\u0130\u0099\2\u04f2\u04fa\3\2\2\2\u04f3\u04f4\5\u010c\u0087\2\u04f4"+
		"\u04f5\7\u0137\2\2\u04f5\u04f6\5\u0128\u0095\2\u04f6\u04f7\7\u00bb\2\2"+
		"\u04f7\u04f8\5\u0130\u0099\2\u04f8\u04fa\3\2\2\2\u04f9\u04ed\3\2\2\2\u04f9"+
		"\u04f3\3\2\2\2\u04fa\u00af\3\2\2\2\u04fb\u04fc\7\u00fe\2\2\u04fc\u04fd"+
		"\5\u00b2Z\2\u04fd\u00b1\3\2\2\2\u04fe\u04ff\bZ\1\2\u04ff\u0504\5\u00b4"+
		"[\2\u0500\u0501\7\u0189\2\2\u0501\u0503\5\u00b4[\2\u0502\u0500\3\2\2\2"+
		"\u0503\u0506\3\2\2\2\u0504\u0502\3\2\2\2\u0504\u0505\3\2\2\2\u0505\u050a"+
		"\3\2\2\2\u0506\u0504\3\2\2\2\u0507\u050a\5\u00bc_\2\u0508\u050a\5\u00be"+
		"`\2\u0509\u04fe\3\2\2\2\u0509\u0507\3\2\2\2\u0509\u0508\3\2\2\2\u050a"+
		"\u0520\3\2\2\2\u050b\u050c\f\5\2\2\u050c\u050d\7\u00de\2\2\u050d\u050e"+
		"\7\u0114\2\2\u050e\u051f\5\u00b2Z\6\u050f\u0511\f\6\2\2\u0510\u0512\7"+
		"\u0128\2\2\u0511\u0510\3\2\2\2\u0511\u0512\3\2\2\2\u0512\u0514\3\2\2\2"+
		"\u0513\u0515\t\26\2\2\u0514\u0513\3\2\2\2\u0514\u0515\3\2\2\2\u0515\u0517"+
		"\3\2\2\2\u0516\u0518\7\u0136\2\2\u0517\u0516\3\2\2\2\u0517\u0518\3\2\2"+
		"\2\u0518\u0519\3\2\2\2\u0519\u051a\7\u0114\2\2\u051a\u051c\5\u00b2Z\2"+
		"\u051b\u051d\5\u00caf\2\u051c\u051b\3\2\2\2\u051c\u051d\3\2\2\2\u051d"+
		"\u051f\3\2\2\2\u051e\u050b\3\2\2\2\u051e\u050f\3\2\2\2\u051f\u0522\3\2"+
		"\2\2\u0520\u051e\3\2\2\2\u0520\u0521\3\2\2\2\u0521\u00b3\3\2\2\2\u0522"+
		"\u0520\3\2\2\2\u0523\u0525\5\u00b6\\\2\u0524\u0526\5\u0126\u0094\2\u0525"+
		"\u0524\3\2\2\2\u0525\u0526\3\2\2\2\u0526\u00b5\3\2\2\2\u0527\u0529\7\u015a"+
		"\2\2\u0528\u0527\3\2\2\2\u0528\u0529\3\2\2\2\u0529\u052a\3\2\2\2\u052a"+
		"\u052c\5\u0140\u00a1\2\u052b\u052d\5\u00b8]\2\u052c\u052b\3\2\2\2\u052c"+
		"\u052d\3\2\2\2\u052d\u0532\3\2\2\2\u052e\u0530\7\u00bb\2\2\u052f\u052e"+
		"\3\2\2\2\u052f\u0530\3\2\2\2\u0530\u0531\3\2\2\2\u0531\u0533\5\u0114\u008b"+
		"\2\u0532\u052f\3\2\2\2\u0532\u0533\3\2\2\2\u0533\u0551\3\2\2\2\u0534\u0535"+
		"\7\u0117\2\2\u0535\u0536\7\u015a\2\2\u0536\u0537\7\u0185\2\2\u0537\u0538"+
		"\5\u010e\u0088\2\u0538\u0539\7\u0185\2\2\u0539\u053e\5\u0110\u0089\2\u053a"+
		"\u053b\7\u0189\2\2\u053b\u053d\5\u0110\u0089\2\u053c\u053a\3\2\2\2\u053d"+
		"\u0540\3\2\2\2\u053e\u053c\3\2\2\2\u053e\u053f\3\2\2\2\u053f\u0541\3\2"+
		"\2\2\u0540\u053e\3\2\2\2\u0541\u0542\7\u0186\2\2\u0542\u0543\7\u0186\2"+
		"\2\u0543\u0551\3\2\2\2\u0544\u0546\7\u0117\2\2\u0545\u0544\3\2\2\2\u0545"+
		"\u0546\3\2\2\2\u0546\u0547\3\2\2\2\u0547\u0548\7\u0185\2\2\u0548\u0549"+
		"\5\u009eP\2\u0549\u054a\7\u0186\2\2\u054a\u0551\3\2\2\2\u054b\u054c\7"+
		"\u016a\2\2\u054c\u054d\7\u0185\2\2\u054d\u054e\5\u0102\u0082\2\u054e\u054f"+
		"\7\u0186\2\2\u054f\u0551\3\2\2\2\u0550\u0528\3\2\2\2\u0550\u0534\3\2\2"+
		"\2\u0550\u0545\3\2\2\2\u0550\u054b\3\2\2\2\u0551\u00b7\3\2\2\2\u0552\u0553"+
		"\7\u00fd\2\2\u0553\u0554\7\u0158\2\2\u0554\u0555\7\u00bb\2\2\u0555\u0556"+
		"\7\u012f\2\2\u0556\u0557\5\u00ba^\2\u0557\u00b9\3\2\2\2\u0558\u0559\5"+
		"\u0102\u0082\2\u0559\u00bb\3\2\2\2\u055a\u055b\7\u0185\2\2\u055b\u055c"+
		"\5\u0096L\2\u055c\u055d\7\u0186\2\2\u055d\u055e\5\u0126\u0094\2\u055e"+
		"\u00bd\3\2\2\2\u055f\u0560\7\u015a\2\2\u0560\u0561\7\u0185\2\2\u0561\u0562"+
		"\5\u00c0a\2\u0562\u0563\7\u0186\2\2\u0563\u00bf\3\2\2\2\u0564\u0565\5"+
		"\u00c2b\2\u0565\u0566\7\u0185\2\2\u0566\u056b\5\u00c4c\2\u0567\u0568\7"+
		"\u0189\2\2\u0568\u056a\5\u00c4c\2\u0569\u0567\3\2\2\2\u056a\u056d\3\2"+
		"\2\2\u056b\u0569\3\2\2\2\u056b\u056c\3\2\2\2\u056c\u056e\3\2\2\2\u056d"+
		"\u056b\3\2\2\2\u056e\u056f\7\u0186\2\2\u056f\u00c1\3\2\2\2\u0570\u0571"+
		"\t\27\2\2\u0571\u00c3\3\2\2\2\u0572\u0573\7\u015a\2\2\u0573\u0582\5\u00da"+
		"n\2\u0574\u0582\5\u00c8e\2\u0575\u0582\5\u0118\u008d\2\u0576\u0577\7\32"+
		"\2\2\u0577\u0578\7\u0199\2\2\u0578\u0579\7\u015a\2\2\u0579\u0582\5\u00da"+
		"n\2\u057a\u057b\7\u0099\2\2\u057b\u057c\7\u0199\2\2\u057c\u0582\5\u00c8"+
		"e\2\u057d\u057e\5\u00c6d\2\u057e\u057f\7\u0199\2\2\u057f\u0580\5\u0118"+
		"\u008d\2\u0580\u0582\3\2\2\2\u0581\u0572\3\2\2\2\u0581\u0574\3\2\2\2\u0581"+
		"\u0575\3\2\2\2\u0581\u0576\3\2\2\2\u0581\u057a\3\2\2\2\u0581\u057d\3\2"+
		"\2\2\u0582\u00c5\3\2\2\2\u0583\u0584\t\30\2\2\u0584\u00c7\3\2\2\2\u0585"+
		"\u0586\7!\2\2\u0586\u0587\7\u0185\2\2\u0587\u0588\5\u0142\u00a2\2\u0588"+
		"\u0589\7\u0186\2\2\u0589\u00c9\3\2\2\2\u058a\u058b\7\u0131\2\2\u058b\u0599"+
		"\5\u0104\u0083\2\u058c\u058d\7\u016e\2\2\u058d\u058e\7\u0185\2\2\u058e"+
		"\u0593\5\u0142\u00a2\2\u058f\u0590\7\u0189\2\2\u0590\u0592\5\u0142\u00a2"+
		"\2\u0591\u058f\3\2\2\2\u0592\u0595\3\2\2\2\u0593\u0591\3\2\2\2\u0593\u0594"+
		"\3\2\2\2\u0594\u0596\3\2\2\2\u0595\u0593\3\2\2\2\u0596\u0597\7\u0186\2"+
		"\2\u0597\u0599\3\2\2\2\u0598\u058a\3\2\2\2\u0598\u058c\3\2\2\2\u0599\u00cb"+
		"\3\2\2\2\u059a\u059b\7\u0174\2\2\u059b\u059c\5\u0104\u0083\2\u059c\u00cd"+
		"\3\2\2\2\u059d\u059e\7\u0103\2\2\u059e\u059f\7\u00c7\2\2\u059f\u05a4\5"+
		"\u00d0i\2\u05a0\u05a1\7\u0189\2\2\u05a1\u05a3\5\u00d0i\2\u05a2\u05a0\3"+
		"\2\2\2\u05a3\u05a6\3\2\2\2\u05a4\u05a2\3\2\2\2\u05a4\u05a5\3\2\2\2\u05a5"+
		"\u00cf\3\2\2\2\u05a6\u05a4\3\2\2\2\u05a7\u05cf\5\u0102\u0082\2\u05a8\u05cf"+
		"\5\u00d6l\2\u05a9\u05aa\7\u0185\2\2\u05aa\u05cf\7\u0186\2\2\u05ab\u05ac"+
		"\7\u0185\2\2\u05ac\u05b1\5\u0102\u0082\2\u05ad\u05ae\7\u0189\2\2\u05ae"+
		"\u05b0\5\u0102\u0082\2\u05af\u05ad\3\2\2\2\u05b0\u05b3\3\2\2\2\u05b1\u05af"+
		"\3\2\2\2\u05b1\u05b2\3\2\2\2\u05b2\u05b4\3\2\2\2\u05b3\u05b1\3\2\2\2\u05b4"+
		"\u05b5\7\u0186\2\2\u05b5\u05cf\3\2\2\2\u05b6\u05b7\5\u00d4k\2\u05b7\u05b8"+
		"\7\u0185\2\2\u05b8\u05bd\5\u0102\u0082\2\u05b9\u05ba\7\u0189\2\2\u05ba"+
		"\u05bc\5\u0102\u0082\2\u05bb\u05b9\3\2\2\2\u05bc\u05bf\3\2\2\2\u05bd\u05bb"+
		"\3\2\2\2\u05bd\u05be\3\2\2\2\u05be\u05c0\3\2\2\2\u05bf\u05bd\3\2\2\2\u05c0"+
		"\u05c1\7\u0186\2\2\u05c1\u05cf\3\2\2\2\u05c2\u05c3\5\u00d2j\2\u05c3\u05c4"+
		"\7\u0185\2\2\u05c4\u05c9\5\u00d0i\2\u05c5\u05c6\7\u0189\2\2\u05c6\u05c8"+
		"\5\u00d0i\2\u05c7\u05c5\3\2\2\2\u05c8\u05cb\3\2\2\2\u05c9\u05c7\3\2\2"+
		"\2\u05c9\u05ca\3\2\2\2\u05ca\u05cc\3\2\2\2\u05cb\u05c9\3\2\2\2\u05cc\u05cd"+
		"\7\u0186\2\2\u05cd\u05cf\3\2\2\2\u05ce\u05a7\3\2\2\2\u05ce\u05a8\3\2\2"+
		"\2\u05ce\u05a9\3\2\2\2\u05ce\u05ab\3\2\2\2\u05ce\u05b6\3\2\2\2\u05ce\u05c2"+
		"\3\2\2\2\u05cf\u00d1\3\2\2\2\u05d0\u05d1\7\u0104\2\2\u05d1\u05d2\7\u008b"+
		"\2\2\u05d2\u00d3\3\2\2\2\u05d3\u05d4\t\31\2\2\u05d4\u00d5\3\2\2\2\u05d5"+
		"\u05d6\5\u00d8m\2\u05d6\u05d7\7\u0185\2\2\u05d7\u05d8\5\u00dan\2\u05d8"+
		"\u05d9\7\u0189\2\2\u05d9\u05da\5\u0118\u008d\2\u05da\u05db\7\u0186\2\2"+
		"\u05db\u00d7\3\2\2\2\u05dc\u05dd\t\32\2\2\u05dd\u00d9\3\2\2\2\u05de\u05df"+
		"\5\u0142\u00a2\2\u05df\u00db\3\2\2\2\u05e0\u05e1\7\u0106\2\2\u05e1\u05e2"+
		"\5\u0104\u0083\2\u05e2\u00dd\3\2\2\2\u05e3\u05e4\7\u0175\2\2\u05e4\u05e9"+
		"\5\u00e0q\2\u05e5\u05e6\7\u0189\2\2\u05e6\u05e8\5\u00e0q\2\u05e7\u05e5"+
		"\3\2\2\2\u05e8\u05eb\3\2\2\2\u05e9\u05e7\3\2\2\2\u05e9\u05ea\3\2\2\2\u05ea"+
		"\u00df\3\2\2\2\u05eb\u05e9\3\2\2\2\u05ec\u05ed\5\u0128\u0095\2\u05ed\u05ee"+
		"\7\u00bb\2\2\u05ee\u05ef\5\u00e2r\2\u05ef\u00e1\3\2\2\2\u05f0\u05f2\5"+
		"\u0128\u0095\2\u05f1\u05f0\3\2\2\2\u05f1\u05f2\3\2\2\2\u05f2\u05f3\3\2"+
		"\2\2\u05f3\u05f5\7\u0185\2\2\u05f4\u05f6\5\u00ecw\2\u05f5\u05f4\3\2\2"+
		"\2\u05f5\u05f6\3\2\2\2\u05f6\u05f8\3\2\2\2\u05f7\u05f9\5\u00e6t\2\u05f8"+
		"\u05f7\3\2\2\2\u05f8\u05f9\3\2\2\2\u05f9\u05fb\3\2\2\2\u05fa\u05fc\5\u00fc"+
		"\177\2\u05fb\u05fa\3\2\2\2\u05fb\u05fc\3\2\2\2\u05fc\u05fd\3\2\2\2\u05fd"+
		"\u05fe\7\u0186\2\2\u05fe\u00e3\3\2\2\2\u05ff\u0600\7\u011e\2\2\u0600\u0602"+
		"\7\u0185\2\2\u0601\u0603\5\u00ecw\2\u0602\u0601\3\2\2\2\u0602\u0603\3"+
		"\2\2\2\u0603\u0605\3\2\2\2\u0604\u0606\5\u00e6t\2\u0605\u0604\3\2\2\2"+
		"\u0605\u0606\3\2\2\2\u0606\u0608\3\2\2\2\u0607\u0609\5\u00f0y\2\u0608"+
		"\u0607\3\2\2\2\u0608\u0609\3\2\2\2\u0609\u060b\3\2\2\2\u060a\u060c\5\u00f6"+
		"|\2\u060b\u060a\3\2\2\2\u060b\u060c\3\2\2\2\u060c\u060e\3\2\2\2\u060d"+
		"\u060f\5\u00f8}\2\u060e\u060d\3\2\2\2\u060e\u060f\3\2\2\2\u060f\u0611"+
		"\3\2\2\2\u0610\u0612\5\u00f2z\2\u0611\u0610\3\2\2\2\u0611\u0612\3\2\2"+
		"\2\u0612\u0613\3\2\2\2\u0613\u0614\5\u00fa~\2\u0614\u0619\7\u0186\2\2"+
		"\u0615\u0617\7\u00bb\2\2\u0616\u0615\3\2\2\2\u0616\u0617\3\2\2\2\u0617"+
		"\u0618\3\2\2\2\u0618\u061a\5\u0130\u0099\2\u0619\u0616\3\2\2\2\u0619\u061a"+
		"\3\2\2\2\u061a\u00e5\3\2\2\2\u061b\u061c\7\u0134\2\2\u061c\u061d\7\u00c7"+
		"\2\2\u061d\u0622\5\u00e8u\2\u061e\u061f\7\u0189\2\2\u061f\u0621\5\u00e8"+
		"u\2\u0620\u061e\3\2\2\2\u0621\u0624\3\2\2\2\u0622\u0620\3\2\2\2\u0622"+
		"\u0623\3\2\2\2\u0623\u00e7\3\2\2\2\u0624\u0622\3\2\2\2\u0625\u0627\5\u0102"+
		"\u0082\2\u0626\u0628\t\33\2\2\u0627\u0626\3\2\2\2\u0627\u0628\3\2\2\2"+
		"\u0628\u062b\3\2\2\2\u0629\u062a\7Y\2\2\u062a\u062c\t\34\2\2\u062b\u0629"+
		"\3\2\2\2\u062b\u062c\3\2\2\2\u062c\u00e9\3\2\2\2\u062d\u0630\7\u011b\2"+
		"\2\u062e\u0631\7\u00b4\2\2\u062f\u0631\5\u0102\u0082\2\u0630\u062e\3\2"+
		"\2\2\u0630\u062f\3\2\2\2\u0631\u00eb\3\2\2\2\u0632\u0633\7\u0139\2\2\u0633"+
		"\u0634\7\u00c7\2\2\u0634\u0639\5\u0102\u0082\2\u0635\u0636\7\u0189\2\2"+
		"\u0636\u0638\5\u0102\u0082\2\u0637\u0635\3\2\2\2\u0638\u063b\3\2\2\2\u0639"+
		"\u0637\3\2\2\2\u0639\u063a\3\2\2\2\u063a\u00ed\3\2\2\2\u063b\u0639\3\2"+
		"\2\2\u063c\u064d\7\u0190\2\2\u063d\u064d\7\u0193\2\2\u063e\u064d\7\u0198"+
		"\2\2\u063f\u0640\7\u0187\2\2\u0640\u0641\7\u019b\2\2\u0641\u0642\7\u0189"+
		"\2\2\u0642\u0643\7\u019b\2\2\u0643\u064d\7\u0188\2\2\u0644\u0645\7\u0187"+
		"\2\2\u0645\u0646\7\u019b\2\2\u0646\u0647\7\u0189\2\2\u0647\u064d\7\u0188"+
		"\2\2\u0648\u0649\7\u0187\2\2\u0649\u064a\7\u0189\2\2\u064a\u064b\7\u019b"+
		"\2\2\u064b\u064d\7\u0188\2\2\u064c\u063c\3\2\2\2\u064c\u063d\3\2\2\2\u064c"+
		"\u063e\3\2\2\2\u064c\u063f\3\2\2\2\u064c\u0644\3\2\2\2\u064c\u0648\3\2"+
		"\2\2\u064d\u00ef\3\2\2\2\u064e\u064f\7\u011f\2\2\u064f\u0654\5\u00acW"+
		"\2\u0650\u0651\7\u0189\2\2\u0651\u0653\5\u00acW\2\u0652\u0650\3\2\2\2"+
		"\u0653\u0656\3\2\2\2\u0654\u0652\3\2\2\2\u0654\u0655\3\2\2\2\u0655\u00f1"+
		"\3\2\2\2\u0656\u0654\3\2\2\2\u0657\u0658\7\u013a\2\2\u0658\u065a\7\u0185"+
		"\2\2\u0659\u065b\5\u00f4{\2\u065a\u0659\3\2\2\2\u065b\u065c\3\2\2\2\u065c"+
		"\u065a\3\2\2\2\u065c\u065d\3\2\2\2\u065d\u065e\3\2\2\2\u065e\u0660\7\u0186"+
		"\2\2\u065f\u0661\5\u0100\u0081\2\u0660\u065f\3\2\2\2\u0660\u0661\3\2\2"+
		"\2\u0661\u00f3\3\2\2\2\u0662\u0664\5\u0132\u009a\2\u0663\u0665\5\u00ee"+
		"x\2\u0664\u0663\3\2\2\2\u0664\u0665\3\2\2\2\u0665\u00f5\3\2\2\2\u0666"+
		"\u0667\7\u00b4\2\2\u0667\u0668\7\u014a\2\2\u0668\u0669\7\u013b\2\2\u0669"+
		"\u066f\7\u011d\2\2\u066a\u066b\7\u0132\2\2\u066b\u066c\7\u0149\2\2\u066c"+
		"\u066d\7\u013b\2\2\u066d\u066f\7\u011d\2\2\u066e\u0666\3\2\2\2\u066e\u066a"+
		"\3\2\2\2\u066f\u00f7\3\2\2\2\u0670\u0671\7\b\2\2\u0671\u0672\7\u011d\2"+
		"\2\u0672\u0673\7\u0150\2\2\u0673\u0674\7d\2\2\u0674\u0675\7K\2\2\u0675"+
		"\u0689\7\u0149\2\2\u0676\u0677\7\b\2\2\u0677\u0678\7\u011d\2\2\u0678\u0679"+
		"\7\u0150\2\2\u0679\u067a\7\u0163\2\2\u067a\u067b\7\u0129\2\2\u067b\u0689"+
		"\7\u0149\2\2\u067c\u067d\7\b\2\2\u067d\u067e\7\u011d\2\2\u067e\u067f\7"+
		"\u0150\2\2\u067f\u0680\7\u0163\2\2\u0680\u0681\7K\2\2\u0681\u0689\5\u0132"+
		"\u009a\2\u0682\u0683\7\b\2\2\u0683\u0684\7\u011d\2\2\u0684\u0685\7\u0150"+
		"\2\2\u0685\u0686\7\u0163\2\2\u0686\u0687\7/\2\2\u0687\u0689\5\u0132\u009a"+
		"\2\u0688\u0670\3\2\2\2\u0688\u0676\3\2\2\2\u0688\u067c\3\2\2\2\u0688\u0682"+
		"\3\2\2\2\u0689\u00f9\3\2\2\2\u068a\u068b\7\u00ea\2\2\u068b\u0690\5\u00ac"+
		"W\2\u068c\u068d\7\u0189\2\2\u068d\u068f\5\u00acW\2\u068e\u068c\3\2\2\2"+
		"\u068f\u0692\3\2\2\2\u0690\u068e\3\2\2\2\u0690\u0691\3\2\2\2\u0691\u00fb"+
		"\3\2\2\2\u0692\u0690\3\2\2\2\u0693\u0694\7\u0141\2\2\u0694\u0695\7\u00c0"+
		"\2\2\u0695\u0696\5\u0118\u008d\2\u0696\u0697\5\u00fe\u0080\2\u0697\u069d"+
		"\3\2\2\2\u0698\u0699\7\u014a\2\2\u0699\u069a\7\u00c0\2\2\u069a\u069b\7"+
		"\u019b\2\2\u069b\u069d\5\u00fe\u0080\2\u069c\u0693\3\2\2\2\u069c\u0698"+
		"\3\2\2\2\u069d\u00fd\3\2\2\2\u069e\u069f\7h\2\2\u069f\u06a0\7\u00b7\2"+
		"\2\u06a0\u06a1\7\u00e0\2\2\u06a1\u06a2\7\u0149\2\2\u06a2\u00ff\3\2\2\2"+
		"\u06a3\u06a4\7\u0177\2\2\u06a4\u06a5\5\u0118\u008d\2\u06a5\u0101\3\2\2"+
		"\2\u06a6\u06a7\5\u0104\u0083\2\u06a7\u0103\3\2\2\2\u06a8\u06a9\b\u0083"+
		"\1\2\u06a9\u06aa\7\u012c\2\2\u06aa\u06b5\5\u0104\u0083\b\u06ab\u06ac\7"+
		"\u00f7\2\2\u06ac\u06ad\7\u0185\2\2\u06ad\u06ae\5\u009eP\2\u06ae\u06af"+
		"\7\u0186\2\2\u06af\u06b5\3\2\2\2\u06b0\u06b2\5\u010a\u0086\2\u06b1\u06b3"+
		"\5\u0106\u0084\2\u06b2\u06b1\3\2\2\2\u06b2\u06b3\3\2\2\2\u06b3\u06b5\3"+
		"\2\2\2\u06b4\u06a8\3\2\2\2\u06b4\u06ab\3\2\2\2\u06b4\u06b0\3\2\2\2\u06b5"+
		"\u06c4\3\2\2\2\u06b6\u06b7\f\5\2\2\u06b7\u06b8\7\u00b7\2\2\u06b8\u06c3"+
		"\5\u0104\u0083\6\u06b9\u06ba\f\4\2\2\u06ba\u06bb\7\u0133\2\2\u06bb\u06c3"+
		"\5\u0104\u0083\5\u06bc\u06bd\f\3\2\2\u06bd\u06bf\7\u0113\2\2\u06be\u06c0"+
		"\7\u012c\2\2\u06bf\u06be\3\2\2\2\u06bf\u06c0\3\2\2\2\u06c0\u06c1\3\2\2"+
		"\2\u06c1\u06c3\t\35\2\2\u06c2\u06b6\3\2\2\2\u06c2\u06b9\3\2\2\2\u06c2"+
		"\u06bc\3\2\2\2\u06c3\u06c6\3\2\2\2\u06c4\u06c2\3\2\2\2\u06c4\u06c5\3\2"+
		"\2\2\u06c5\u0105\3\2\2\2\u06c6\u06c4\3\2\2\2\u06c7\u06c9\7\u012c\2\2\u06c8"+
		"\u06c7\3\2\2\2\u06c8\u06c9\3\2\2\2\u06c9\u06ca\3\2\2\2\u06ca\u06cc\7\u00c0"+
		"\2\2\u06cb\u06cd\t\36\2\2\u06cc\u06cb\3\2\2\2\u06cc\u06cd\3\2\2\2\u06cd"+
		"\u06ce\3\2\2\2\u06ce\u06cf\5\u010a\u0086\2\u06cf\u06d0\7\u00b7\2\2\u06d0"+
		"\u06d1\5\u010a\u0086\2\u06d1\u070b\3\2\2\2\u06d2\u06d4\7\u012c\2\2\u06d3"+
		"\u06d2\3\2\2\2\u06d3\u06d4\3\2\2\2\u06d4\u06d5\3\2\2\2\u06d5\u06d6\7\u0109"+
		"\2\2\u06d6\u06d7\7\u0185\2\2\u06d7\u06dc\5\u0102\u0082\2\u06d8\u06d9\7"+
		"\u0189\2\2\u06d9\u06db\5\u0102\u0082\2\u06da\u06d8\3\2\2\2\u06db\u06de"+
		"\3\2\2\2\u06dc\u06da\3\2\2\2\u06dc\u06dd\3\2\2\2\u06dd\u06df\3\2\2\2\u06de"+
		"\u06dc\3\2\2\2\u06df\u06e0\7\u0186\2\2\u06e0\u070b\3\2\2\2\u06e1\u06e3"+
		"\7\u012c\2\2\u06e2\u06e1\3\2\2\2\u06e2\u06e3\3\2\2\2\u06e3\u06e4\3\2\2"+
		"\2\u06e4\u06e5\7\u0109\2\2\u06e5\u06e6\7\u0185\2\2\u06e6\u06e7\5\u009e"+
		"P\2\u06e7\u06e8\7\u0186\2\2\u06e8\u070b\3\2\2\2\u06e9\u06ea\7\u00f7\2"+
		"\2\u06ea\u06eb\7\u0185\2\2\u06eb\u06ec\5\u009eP\2\u06ec\u06ed\7\u0186"+
		"\2\2\u06ed\u070b\3\2\2\2\u06ee\u06f0\7\u012c\2\2\u06ef\u06ee\3\2\2\2\u06ef"+
		"\u06f0\3\2\2\2\u06f0\u06f1\3\2\2\2\u06f1\u06f2\7\u0146\2\2\u06f2\u070b"+
		"\5\u010a\u0086\2\u06f3\u070b\5\u0108\u0085\2\u06f4\u06f6\7\u0113\2\2\u06f5"+
		"\u06f7\7\u012c\2\2\u06f6\u06f5\3\2\2\2\u06f6\u06f7\3\2\2\2\u06f7\u06f8"+
		"\3\2\2\2\u06f8\u070b\t\35\2\2\u06f9\u06fb\7\u0113\2\2\u06fa\u06fc\7\u012c"+
		"\2\2\u06fb\u06fa\3\2\2\2\u06fb\u06fc\3\2\2\2\u06fc\u06fd\3\2\2\2\u06fd"+
		"\u06fe\7\u00ed\2\2\u06fe\u06ff\7\u00fe\2\2\u06ff\u070b\5\u010a\u0086\2"+
		"\u0700\u0702\7\u012c\2\2\u0701\u0700\3\2\2\2\u0701\u0702\3\2\2\2\u0702"+
		"\u0703\3\2\2\2\u0703\u0704\7\u014f\2\2\u0704\u0705\7\u0163\2\2\u0705\u0708"+
		"\5\u010a\u0086\2\u0706\u0707\7\u00f4\2\2\u0707\u0709\5\u0160\u00b1\2\u0708"+
		"\u0706\3\2\2\2\u0708\u0709\3\2\2\2\u0709\u070b\3\2\2\2\u070a\u06c8\3\2"+
		"\2\2\u070a\u06d3\3\2\2\2\u070a\u06e2\3\2\2\2\u070a\u06e9\3\2\2\2\u070a"+
		"\u06ef\3\2\2\2\u070a\u06f3\3\2\2\2\u070a\u06f4\3\2\2\2\u070a\u06f9\3\2"+
		"\2\2\u070a\u0701\3\2\2\2\u070b\u0107\3\2\2\2\u070c\u070e\7\u012c\2\2\u070d"+
		"\u070c\3\2\2\2\u070d\u070e\3\2\2\2\u070e\u070f\3\2\2\2\u070f\u0710\7\u011a"+
		"\2\2\u0710\u071e\t\37\2\2\u0711\u0712\7\u0185\2\2\u0712\u071f\7\u0186"+
		"\2\2\u0713\u0714\7\u0185\2\2\u0714\u0719\5\u0102\u0082\2\u0715\u0716\7"+
		"\u0189\2\2\u0716\u0718\5\u0102\u0082\2\u0717\u0715\3\2\2\2\u0718\u071b"+
		"\3\2\2\2\u0719\u0717\3\2\2\2\u0719\u071a\3\2\2\2\u071a\u071c\3\2\2\2\u071b"+
		"\u0719\3\2\2\2\u071c\u071d\7\u0186\2\2\u071d\u071f\3\2\2\2\u071e\u0711"+
		"\3\2\2\2\u071e\u0713\3\2\2\2\u071f\u072a\3\2\2\2\u0720\u0722\7\u012c\2"+
		"\2\u0721\u0720\3\2\2\2\u0721\u0722\3\2\2\2\u0722\u0723\3\2\2\2\u0723\u0724"+
		"\7\u011a\2\2\u0724\u0727\5\u010a\u0086\2\u0725\u0726\7\u00f4\2\2\u0726"+
		"\u0728\5\u0160\u00b1\2\u0727\u0725\3\2\2\2\u0727\u0728\3\2\2\2\u0728\u072a"+
		"\3\2\2\2\u0729\u070d\3\2\2\2\u0729\u0721\3\2\2\2\u072a\u0109\3\2\2\2\u072b"+
		"\u072c\b\u0086\1\2\u072c\u0730\5\u010c\u0087\2\u072d\u072e\t \2\2\u072e"+
		"\u0730\5\u010a\u0086\n\u072f\u072b\3\2\2\2\u072f\u072d\3\2\2\2\u0730\u0748"+
		"\3\2\2\2\u0731\u0732\f\t\2\2\u0732\u0733\t!\2\2\u0733\u0747\5\u010a\u0086"+
		"\n\u0734\u0735\f\b\2\2\u0735\u0736\t\"\2\2\u0736\u0747\5\u010a\u0086\t"+
		"\u0737\u0738\f\7\2\2\u0738\u0739\7\u0180\2\2\u0739\u0747\5\u010a\u0086"+
		"\b\u073a\u073b\f\6\2\2\u073b\u073c\7\u0181\2\2\u073c\u0747\5\u010a\u0086"+
		"\7\u073d\u073e\f\5\2\2\u073e\u073f\7\u017f\2\2\u073f\u0747\5\u010a\u0086"+
		"\6\u0740\u0741\f\4\2\2\u0741\u0742\5\u0154\u00ab\2\u0742\u0743\5\u010a"+
		"\u0086\5\u0743\u0747\3\2\2\2\u0744\u0745\f\3\2\2\u0745\u0747\7\u019f\2"+
		"\2\u0746\u0731\3\2\2\2\u0746\u0734\3\2\2\2\u0746\u0737\3\2\2\2\u0746\u073a"+
		"\3\2\2\2\u0746\u073d\3\2\2\2\u0746\u0740\3\2\2\2\u0746\u0744\3\2\2\2\u0747"+
		"\u074a\3\2\2\2\u0748\u0746\3\2\2\2\u0748\u0749\3\2\2\2\u0749\u010b\3\2"+
		"\2\2\u074a\u0748\3\2\2\2\u074b\u074c\b\u0087\1\2\u074c\u074e\7\u00cb\2"+
		"\2\u074d\u074f\5\u0136\u009c\2\u074e\u074d\3\2\2\2\u074f\u0750\3\2\2\2"+
		"\u0750\u074e\3\2\2\2\u0750\u0751\3\2\2\2\u0751\u0754\3\2\2\2\u0752\u0753"+
		"\7\u00f1\2\2\u0753\u0755\5\u0102\u0082\2\u0754\u0752\3\2\2\2\u0754\u0755"+
		"\3\2\2\2\u0755\u0756\3\2\2\2\u0756\u0757\7\u00f2\2\2\u0757\u07a7\3\2\2"+
		"\2\u0758\u0759\7\u00cb\2\2\u0759\u075b\5\u0102\u0082\2\u075a\u075c\5\u0136"+
		"\u009c\2\u075b\u075a\3\2\2\2\u075c\u075d\3\2\2\2\u075d\u075b\3\2\2\2\u075d"+
		"\u075e\3\2\2\2\u075e\u0761\3\2\2\2\u075f\u0760\7\u00f1\2\2\u0760\u0762"+
		"\5\u0102\u0082\2\u0761\u075f\3\2\2\2\u0761\u0762\3\2\2\2\u0762\u0763\3"+
		"\2\2\2\u0763\u0764\7\u00f2\2\2\u0764\u07a7\3\2\2\2\u0765\u0766\7\u00cc"+
		"\2\2\u0766\u0767\7\u0185\2\2\u0767\u0768\5\u0102\u0082\2\u0768\u0769\7"+
		"\u00bb\2\2\u0769\u076a\58\35\2\u076a\u076b\7\u0186\2\2\u076b\u07a7\3\2"+
		"\2\2\u076c\u076d\7/\2\2\u076d\u076e\7\u0185\2\2\u076e\u0771\5\u0102\u0082"+
		"\2\u076f\u0770\7>\2\2\u0770\u0772\7Y\2\2\u0771\u076f\3\2\2\2\u0771\u0772"+
		"\3\2\2\2\u0772\u0773\3\2\2\2\u0773\u0774\7\u0186\2\2\u0774\u07a7\3\2\2"+
		"\2\u0775\u0776\7K\2\2\u0776\u0777\7\u0185\2\2\u0777\u077a\5\u0102\u0082"+
		"\2\u0778\u0779\7>\2\2\u0779\u077b\7Y\2\2\u077a\u0778\3\2\2\2\u077a\u077b"+
		"\3\2\2\2\u077b\u077c\3\2\2\2\u077c\u077d\7\u0186\2\2\u077d\u07a7\3\2\2"+
		"\2\u077e\u077f\7\u013e\2\2\u077f\u0780\7\u0185\2\2\u0780\u0781\5\u010a"+
		"\u0086\2\u0781\u0782\7\u0109\2\2\u0782\u0783\5\u010a\u0086\2\u0783\u0784"+
		"\7\u0186\2\2\u0784\u07a7\3\2\2\2\u0785\u07a7\5\u015c\u00af\2\u0786\u07a7"+
		"\7\u0190\2\2\u0787\u0788\5\u0142\u00a2\2\u0788\u0789\7\u0182\2\2\u0789"+
		"\u078a\7\u0190\2\2\u078a\u07a7\3\2\2\2\u078b\u078c\7\u0185\2\2\u078c\u078d"+
		"\5\u009eP\2\u078d\u078e\7\u0186\2\2\u078e\u07a7\3\2\2\2\u078f\u0790\5"+
		"\u010e\u0088\2\u0790\u079c\7\u0185\2\2\u0791\u0793\5\u0166\u00b4\2\u0792"+
		"\u0791\3\2\2\2\u0792\u0793\3\2\2\2\u0793\u0794\3\2\2\2\u0794\u0799\5\u0110"+
		"\u0089\2\u0795\u0796\7\u0189\2\2\u0796\u0798\5\u0110\u0089\2\u0797\u0795"+
		"\3\2\2\2\u0798\u079b\3\2\2\2\u0799\u0797\3\2\2\2\u0799\u079a\3\2\2\2\u079a"+
		"\u079d\3\2\2\2\u079b\u0799\3\2\2\2\u079c\u0792\3\2\2\2\u079c\u079d\3\2"+
		"\2\2\u079d\u079e\3\2\2\2\u079e\u079f\7\u0186\2\2\u079f\u07a7\3\2\2\2\u07a0"+
		"\u07a7\5\u0130\u0099\2\u07a1\u07a7\5\u0112\u008a\2\u07a2\u07a3\7\u0185"+
		"\2\2\u07a3\u07a4\5\u0102\u0082\2\u07a4\u07a5\7\u0186\2\2\u07a5\u07a7\3"+
		"\2\2\2\u07a6\u074b\3\2\2\2\u07a6\u0758\3\2\2\2\u07a6\u0765\3\2\2\2\u07a6"+
		"\u076c\3\2\2\2\u07a6\u0775\3\2\2\2\u07a6\u077e\3\2\2\2\u07a6\u0785\3\2"+
		"\2\2\u07a6\u0786\3\2\2\2\u07a6\u0787\3\2\2\2\u07a6\u078b\3\2\2\2\u07a6"+
		"\u078f\3\2\2\2\u07a6\u07a0\3\2\2\2\u07a6\u07a1\3\2\2\2\u07a6\u07a2\3\2"+
		"\2\2\u07a7\u07af\3\2\2\2\u07a8\u07a9\f\6\2\2\u07a9\u07aa\7\u0183\2\2\u07aa"+
		"\u07ab\5\u010a\u0086\2\u07ab\u07ac\7\u0184\2\2\u07ac\u07ae\3\2\2\2\u07ad"+
		"\u07a8\3\2\2\2\u07ae\u07b1\3\2\2\2\u07af\u07ad\3\2\2\2\u07af\u07b0\3\2"+
		"\2\2\u07b0\u010d\3\2\2\2\u07b1\u07af\3\2\2\2\u07b2\u07b6\5\u016e\u00b8"+
		"\2\u07b3\u07b6\5\u0172\u00ba\2\u07b4\u07b6\5\u0142\u00a2\2\u07b5\u07b2"+
		"\3\2\2\2\u07b5\u07b3\3\2\2\2\u07b5\u07b4\3\2\2\2\u07b6\u010f\3\2\2\2\u07b7"+
		"\u07bc\5\u016c\u00b7\2\u07b8\u07bc\5\u016a\u00b6\2\u07b9\u07bc\5\u0168"+
		"\u00b5\2\u07ba\u07bc\5\u0102\u0082\2\u07bb\u07b7\3\2\2\2\u07bb\u07b8\3"+
		"\2\2\2\u07bb\u07b9\3\2\2\2\u07bb\u07ba\3\2\2\2\u07bc\u0111\3\2\2\2\u07bd"+
		"\u07be\5\u0142\u00a2\2\u07be\u0113\3\2\2\2\u07bf\u07c0\5\u0130\u0099\2"+
		"\u07c0\u0115\3\2\2\2\u07c1\u07c4\5\u0130\u0099\2\u07c2\u07c4\5\u0112\u008a"+
		"\2\u07c3\u07c1\3\2\2\2\u07c3\u07c2\3\2\2\2\u07c4\u0117\3\2\2\2\u07c5\u07c8"+
		"\7\u0111\2\2\u07c6\u07c9\5\u011a\u008e\2\u07c7\u07c9\5\u011e\u0090\2\u07c8"+
		"\u07c6\3\2\2\2\u07c8\u07c7\3\2\2\2\u07c8\u07c9\3\2\2\2\u07c9\u0119\3\2"+
		"\2\2\u07ca\u07cc\5\u011c\u008f\2\u07cb\u07cd\5\u0120\u0091\2\u07cc\u07cb"+
		"\3\2\2\2\u07cc\u07cd\3\2\2\2\u07cd\u011b\3\2\2\2\u07ce\u07cf\5\u0122\u0092"+
		"\2\u07cf\u07d0\5\u016a\u00b6\2\u07d0\u07d2\3\2\2\2\u07d1\u07ce\3\2\2\2"+
		"\u07d2\u07d3\3\2\2\2\u07d3\u07d1\3\2\2\2\u07d3\u07d4\3\2\2\2\u07d4\u011d"+
		"\3\2\2\2\u07d5\u07d8\5\u0120\u0091\2\u07d6\u07d9\5\u011c\u008f\2\u07d7"+
		"\u07d9\5\u0120\u0091\2\u07d8\u07d6\3\2\2\2\u07d8\u07d7\3\2\2\2\u07d8\u07d9"+
		"\3\2\2\2\u07d9\u011f\3\2\2\2\u07da\u07db\5\u0122\u0092\2\u07db\u07dc\5"+
		"\u016a\u00b6\2\u07dc\u07dd\7\u0163\2\2\u07dd\u07de\5\u016a\u00b6\2\u07de"+
		"\u0121\3\2\2\2\u07df\u07e1\t#\2\2\u07e0\u07df\3\2\2\2\u07e0\u07e1\3\2"+
		"\2\2\u07e1\u07e2\3\2\2\2\u07e2\u07e5\t$\2\2\u07e3\u07e5\7\u019a\2\2\u07e4"+
		"\u07e0\3\2\2\2\u07e4\u07e3\3\2\2\2\u07e5\u0123\3\2\2\2\u07e6\u07e8\7\u00bb"+
		"\2\2\u07e7\u07e6\3\2\2\2\u07e7\u07e8\3\2\2\2\u07e8\u07e9\3\2\2\2\u07e9"+
		"\u07eb\5\u0130\u0099\2\u07ea\u07ec\5\u012c\u0097\2\u07eb\u07ea\3\2\2\2"+
		"\u07eb\u07ec\3\2\2\2\u07ec\u0125\3\2\2\2\u07ed\u07ef\7\u00bb\2\2\u07ee"+
		"\u07ed\3\2\2\2\u07ee\u07ef\3\2\2\2\u07ef\u07f0\3\2\2\2\u07f0\u07f2\5\u0130"+
		"\u0099\2\u07f1\u07f3\5\u012c\u0097\2\u07f2\u07f1\3\2\2\2\u07f2\u07f3\3"+
		"\2\2\2\u07f3\u0127\3\2\2\2\u07f4\u07f5\5\u0130\u0099\2\u07f5\u07f6\5\u012a"+
		"\u0096\2\u07f6\u0129\3\2\2\2\u07f7\u07f8\7\u0122\2\2\u07f8\u07fa\5\u0130"+
		"\u0099\2\u07f9\u07f7\3\2\2\2\u07fa\u07fb\3\2\2\2\u07fb\u07f9\3\2\2\2\u07fb"+
		"\u07fc\3\2\2\2\u07fc\u07ff\3\2\2\2\u07fd\u07ff\3\2\2\2\u07fe\u07f9\3\2"+
		"\2\2\u07fe\u07fd\3\2\2\2\u07ff\u012b\3\2\2\2\u0800\u0801\7\u0185\2\2\u0801"+
		"\u0802\5\u012e\u0098\2\u0802\u0803\7\u0186\2\2\u0803\u012d\3\2\2\2\u0804"+
		"\u0809\5\u0130\u0099\2\u0805\u0806\7\u0189\2\2\u0806\u0808\5\u0130\u0099"+
		"\2\u0807\u0805\3\2\2\2\u0808\u080b\3\2\2\2\u0809\u0807\3\2\2\2\u0809\u080a"+
		"\3\2\2\2\u080a\u012f\3\2\2\2\u080b\u0809\3\2\2\2\u080c\u0810\5\u0132\u009a"+
		"\2\u080d\u0810\5\u0134\u009b\2\u080e\u0810\5\u0172\u00ba\2\u080f\u080c"+
		"\3\2\2\2\u080f\u080d\3\2\2\2\u080f\u080e\3\2\2\2\u0810\u0131\3\2\2\2\u0811"+
		"\u0812\t%\2\2\u0812\u0133\3\2\2\2\u0813\u0814\7\u019a\2\2\u0814\u0135"+
		"\3\2\2\2\u0815\u0816\7\u0173\2\2\u0816\u0817\5\u0102\u0082\2\u0817\u0818"+
		"\7\u015c\2\2\u0818\u0819\5\u0102\u0082\2\u0819\u0137\3\2\2\2\u081a\u081b"+
		"\5\u0142\u00a2\2\u081b\u0139\3\2\2\2\u081c\u081d\5\u0142\u00a2\2\u081d"+
		"\u013b\3\2\2\2\u081e\u081f\5\u0142\u00a2\2\u081f\u013d\3\2\2\2\u0820\u0821"+
		"\5\u0142\u00a2\2\u0821\u013f\3\2\2\2\u0822\u0823\5\u0142\u00a2\2\u0823"+
		"\u0141\3\2\2\2\u0824\u0829\5\u0130\u0099\2\u0825\u0826\7\u0182\2\2\u0826"+
		"\u0828\5\u0130\u0099\2\u0827\u0825\3\2\2\2\u0828\u082b\3\2\2\2\u0829\u082a"+
		"\3\2\2\2\u0829\u0827\3\2\2\2\u082a\u0143\3\2\2\2\u082b\u0829\3\2\2\2\u082c"+
		"\u082d\7\u0176\2\2\u082d\u082e\5\u014a\u00a6\2\u082e\u0145\3\2\2\2\u082f"+
		"\u0830\7=\2\2\u0830\u0831\7\u012c\2\2\u0831\u0832\7\u00f7\2\2\u0832\u0147"+
		"\3\2\2\2\u0833\u0834\7=\2\2\u0834\u0835\7\u00f7\2\2\u0835\u0149\3\2\2"+
		"\2\u0836\u0837\7\u0185\2\2\u0837\u083c\5\u014c\u00a7\2\u0838\u0839\7\u0189"+
		"\2\2\u0839\u083b\5\u014c\u00a7\2\u083a\u0838\3\2\2\2\u083b\u083e\3\2\2"+
		"\2\u083c\u083a\3\2\2\2\u083c\u083d\3\2\2\2\u083d\u083f\3\2\2\2\u083e\u083c"+
		"\3\2\2\2\u083f\u0840\7\u0186\2\2\u0840\u014b\3\2\2\2\u0841\u0846\5\u014e"+
		"\u00a8\2\u0842\u0844\7\u017a\2\2\u0843\u0842\3\2\2\2\u0843\u0844\3\2\2"+
		"\2\u0844\u0845\3\2\2\2\u0845\u0847\5\u0150\u00a9\2\u0846\u0843\3\2\2\2"+
		"\u0846\u0847\3\2\2\2\u0847\u014d\3\2\2\2\u0848\u084c\5\u0130\u0099\2\u0849"+
		"\u084c\5\u0112\u008a\2\u084a\u084c\7\u019a\2\2\u084b\u0848\3\2\2\2\u084b"+
		"\u0849\3\2\2\2\u084b\u084a\3\2\2\2\u084c\u014f\3\2\2\2\u084d\u0852\7\u019b"+
		"\2\2\u084e\u0852\7\u019c\2\2\u084f\u0852\5\u0164\u00b3\2\u0850\u0852\7"+
		"\u019a\2\2\u0851\u084d\3\2\2\2\u0851\u084e\3\2\2\2\u0851\u084f\3\2\2\2"+
		"\u0851\u0850\3\2\2\2\u0852\u0151\3\2\2\2\u0853\u085a\7\u00b7\2\2\u0854"+
		"\u0855\7\u0180\2\2\u0855\u085a\7\u0180\2\2\u0856\u085a\7\u0133\2\2\u0857"+
		"\u0858\7\u017f\2\2\u0858\u085a\7\u017f\2\2\u0859\u0853\3\2\2\2\u0859\u0854"+
		"\3\2\2\2\u0859\u0856\3\2\2\2\u0859\u0857\3\2\2\2\u085a\u0153\3\2\2\2\u085b"+
		"\u086a\7\u017a\2\2\u085c\u086a\7\u017b\2\2\u085d\u086a\7\u017c\2\2\u085e"+
		"\u085f\7\u017c\2\2\u085f\u086a\7\u017a\2\2\u0860\u0861\7\u017b\2\2\u0861"+
		"\u086a\7\u017a\2\2\u0862\u0863\7\u017c\2\2\u0863\u086a\7\u017b\2\2\u0864"+
		"\u0865\7\u017d\2\2\u0865\u086a\7\u017a\2\2\u0866\u0867\7\u017c\2\2\u0867"+
		"\u0868\7\u017a\2\2\u0868\u086a\7\u017b\2\2\u0869\u085b\3\2\2\2\u0869\u085c"+
		"\3\2\2\2\u0869\u085d\3\2\2\2\u0869\u085e\3\2\2\2\u0869\u0860\3\2\2\2\u0869"+
		"\u0862\3\2\2\2\u0869\u0864\3\2\2\2\u0869\u0866\3\2\2\2\u086a\u0155\3\2"+
		"\2\2\u086b\u086c\7\u017c\2\2\u086c\u0873\7\u017c\2\2\u086d\u086e\7\u017b"+
		"\2\2\u086e\u0873\7\u017b\2\2\u086f\u0873\7\u0180\2\2\u0870\u0873\7\u0181"+
		"\2\2\u0871\u0873\7\u017f\2\2\u0872\u086b\3\2\2\2\u0872\u086d\3\2\2\2\u0872"+
		"\u086f\3\2\2\2\u0872\u0870\3\2\2\2\u0872\u0871\3\2\2\2\u0873\u0157\3\2"+
		"\2\2\u0874\u0875\t&\2\2\u0875\u0159\3\2\2\2\u0876\u0877\t\'\2\2\u0877"+
		"\u015b\3\2\2\2\u0878\u0887\5\u0118\u008d\2\u0879\u0887\5\u015e\u00b0\2"+
		"\u087a\u0887\5\u0160\u00b1\2\u087b\u087d\7\u0192\2\2\u087c\u087b\3\2\2"+
		"\2\u087c\u087d\3\2\2\2\u087d\u087e\3\2\2\2\u087e\u0887\5\u0162\u00b2\2"+
		"\u087f\u0887\5\u0164\u00b3\2\u0880\u0887\7\u019c\2\2\u0881\u0887\7\u019d"+
		"\2\2\u0882\u0884\7\u012c\2\2\u0883\u0882\3\2\2\2\u0883\u0884\3\2\2\2\u0884"+
		"\u0885\3\2\2\2\u0885\u0887\7\u012d\2\2\u0886\u0878\3\2\2\2\u0886\u0879"+
		"\3\2\2\2\u0886\u087a\3\2\2\2\u0886\u087c\3\2\2\2\u0886\u087f\3\2\2\2\u0886"+
		"\u0880\3\2\2\2\u0886\u0881\3\2\2\2\u0886\u0883\3\2\2\2\u0887\u015d\3\2"+
		"\2\2\u0888\u0889\5\u0168\u00b5\2\u0889\u088a\5\u0160\u00b1\2\u088a\u015f"+
		"\3\2\2\2\u088b\u088c\7\u019a\2\2\u088c\u0161\3\2\2\2\u088d\u088e\7\u019b"+
		"\2\2\u088e\u0163\3\2\2\2\u088f\u0890\t(\2\2\u0890\u0165\3\2\2\2\u0891"+
		"\u0892\t)\2\2\u0892\u0167\3\2\2\2\u0893\u0894\t*\2\2\u0894\u0169\3\2\2"+
		"\2\u0895\u0896\t+\2\2\u0896\u016b\3\2\2\2\u0897\u0898\t,\2\2\u0898\u016d"+
		"\3\2\2\2\u0899\u089a\t-\2\2\u089a\u016f\3\2\2\2\u089b\u089c\t.\2\2\u089c"+
		"\u0171\3\2\2\2\u089d\u089e\t/\2\2\u089e\u0173\3\2\2\2\u010a\u017c\u017e"+
		"\u0183\u0187\u018b\u018f\u0193\u0197\u019b\u019f\u01a3\u01a7\u01ab\u01ad"+
		"\u01bf\u01c3\u01cc\u01d1\u01d8\u01e3\u01ec\u01f8\u01fb\u0202\u020a\u020f"+
		"\u0212\u0219\u0221\u0225\u022e\u0232\u0236\u023a\u0243\u0248\u024c\u0250"+
		"\u0254\u0257\u025b\u0260\u0266\u026b\u0270\u0273\u0277\u027f\u0287\u028b"+
		"\u028f\u0293\u0297\u029b\u029f\u02a3\u02a7\u02ab\u02af\u02b3\u02b7\u02bb"+
		"\u02bf\u02c3\u02c7\u02cb\u02cd\u02d7\u02df\u02f7\u02fe\u0304\u0307\u030a"+
		"\u0314\u0317\u031f\u032b\u0343\u0350\u0355\u0359\u0361\u0365\u036b\u0375"+
		"\u0379\u037f\u0383\u0387\u038a\u0393\u0397\u039e\u03a1\u03ab\u03b3\u03bb"+
		"\u03bf\u03ce\u03e1\u03ec\u03f0\u03f7\u03fc\u0402\u0406\u040d\u0411\u0415"+
		"\u0419\u0421\u0425\u042a\u0430\u0436\u0439\u043d\u0448\u0451\u045f\u046b"+
		"\u047a\u047d\u0481\u0484\u0486\u048b\u048f\u0492\u0496\u049f\u04a8\u04b2"+
		"\u04b7\u04c3\u04c6\u04c9\u04cc\u04d2\u04d6\u04de\u04e1\u04e6\u04e9\u04eb"+
		"\u04f9\u0504\u0509\u0511\u0514\u0517\u051c\u051e\u0520\u0525\u0528\u052c"+
		"\u052f\u0532\u053e\u0545\u0550\u056b\u0581\u0593\u0598\u05a4\u05b1\u05bd"+
		"\u05c9\u05ce\u05e9\u05f1\u05f5\u05f8\u05fb\u0602\u0605\u0608\u060b\u060e"+
		"\u0611\u0616\u0619\u0622\u0627\u062b\u0630\u0639\u064c\u0654\u065c\u0660"+
		"\u0664\u066e\u0688\u0690\u069c\u06b2\u06b4\u06bf\u06c2\u06c4\u06c8\u06cc"+
		"\u06d3\u06dc\u06e2\u06ef\u06f6\u06fb\u0701\u0708\u070a\u070d\u0719\u071e"+
		"\u0721\u0727\u0729\u072f\u0746\u0748\u0750\u0754\u075d\u0761\u0771\u077a"+
		"\u0792\u0799\u079c\u07a6\u07af\u07b5\u07bb\u07c3\u07c8\u07cc\u07d3\u07d8"+
		"\u07e0\u07e4\u07e7\u07eb\u07ee\u07f2\u07fb\u07fe\u0809\u080f\u0829\u083c"+
		"\u0843\u0846\u084b\u0851\u0859\u0869\u0872\u087c\u0883\u0886";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}