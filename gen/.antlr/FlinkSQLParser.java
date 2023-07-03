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
		RULE_unquotedIdentifier = 153, RULE_quotedIdentifier = 154, RULE_whenClause = 155, 
		RULE_catalogPath = 156, RULE_databasePath = 157, RULE_databasePathCreate = 158, 
		RULE_tablePathCreate = 159, RULE_tablePath = 160, RULE_uid = 161, RULE_withOption = 162, 
		RULE_ifNotExists = 163, RULE_ifExists = 164, RULE_tablePropertyList = 165, 
		RULE_tableProperty = 166, RULE_tablePropertyKey = 167, RULE_tablePropertyValue = 168, 
		RULE_logicalOperator = 169, RULE_comparisonOperator = 170, RULE_bitOperator = 171, 
		RULE_mathOperator = 172, RULE_unaryOperator = 173, RULE_constant = 174, 
		RULE_timePointLiteral = 175, RULE_stringLiteral = 176, RULE_decimalLiteral = 177, 
		RULE_booleanLiteral = 178, RULE_setQuantifier = 179, RULE_timePointUnit = 180, 
		RULE_timeIntervalUnit = 181, RULE_reservedKeywordsUsedAsFuncParam = 182, 
		RULE_reservedKeywordsUsedAsFuncName = 183, RULE_reservedKeywords = 184, 
		RULE_nonReservedKeywords = 185;
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
			setState(372);
			statement();
			setState(373);
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
			setState(375);
			sqlStatements();
			setState(376);
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
			setState(383);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << COMMENT_INPUT) | (1L << LINE_COMMENT) | (1L << KW_ADD) | (1L << KW_DESC))) != 0) || _la==KW_LOAD || _la==KW_REMOVE || ((((_la - 159)) & ~0x3f) == 0 && ((1L << (_la - 159)) & ((1L << (KW_UNLOAD - 159)) | (1L << (KW_USE - 159)) | (1L << (KW_ALTER - 159)) | (1L << (KW_BEGIN - 159)) | (1L << (KW_CREATE - 159)))) != 0) || ((((_la - 234)) & ~0x3f) == 0 && ((1L << (_la - 234)) & ((1L << (KW_DESCRIBE - 234)) | (1L << (KW_DROP - 234)) | (1L << (KW_EXECUTE - 234)) | (1L << (KW_EXPLAIN - 234)) | (1L << (KW_INSERT - 234)))) != 0) || ((((_la - 321)) & ~0x3f) == 0 && ((1L << (_la - 321)) & ((1L << (KW_RESET - 321)) | (1L << (KW_SELECT - 321)) | (1L << (KW_SET - 321)) | (1L << (KW_SHOW - 321)) | (1L << (KW_VALUES - 321)) | (1L << (KW_WITH - 321)))) != 0) || _la==LR_BRACKET || _la==SEMICOLON) {
				{
				setState(381);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case COMMENT_INPUT:
				case LINE_COMMENT:
					{
					setState(378);
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
					setState(379);
					sqlStatement();
					}
					break;
				case SEMICOLON:
					{
					setState(380);
					emptyStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(385);
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
			setState(386);
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
			setState(421);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_ALTER:
			case KW_CREATE:
			case KW_DROP:
				enterOuterAlt(_localctx, 1);
				{
				setState(388);
				ddlStatement();
				setState(389);
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
				setState(391);
				dmlStatement();
				setState(392);
				match(SEMICOLON);
				}
				break;
			case KW_DESC:
			case KW_DESCRIBE:
				enterOuterAlt(_localctx, 3);
				{
				setState(394);
				describeStatement();
				setState(395);
				match(SEMICOLON);
				}
				break;
			case KW_EXPLAIN:
				enterOuterAlt(_localctx, 4);
				{
				setState(397);
				explainStatement();
				setState(398);
				match(SEMICOLON);
				}
				break;
			case KW_USE:
				enterOuterAlt(_localctx, 5);
				{
				setState(400);
				useStatement();
				setState(401);
				match(SEMICOLON);
				}
				break;
			case KW_SHOW:
				enterOuterAlt(_localctx, 6);
				{
				setState(403);
				showStatememt();
				setState(404);
				match(SEMICOLON);
				}
				break;
			case KW_LOAD:
				enterOuterAlt(_localctx, 7);
				{
				setState(406);
				loadStatement();
				setState(407);
				match(SEMICOLON);
				}
				break;
			case KW_UNLOAD:
				enterOuterAlt(_localctx, 8);
				{
				setState(409);
				unloadStatememt();
				setState(410);
				match(SEMICOLON);
				}
				break;
			case KW_SET:
				enterOuterAlt(_localctx, 9);
				{
				setState(412);
				setStatememt();
				setState(413);
				match(SEMICOLON);
				}
				break;
			case KW_RESET:
				enterOuterAlt(_localctx, 10);
				{
				setState(415);
				resetStatememt();
				setState(416);
				match(SEMICOLON);
				}
				break;
			case KW_ADD:
			case KW_REMOVE:
				enterOuterAlt(_localctx, 11);
				{
				setState(418);
				jarStatememt();
				setState(419);
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
			setState(423);
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
			setState(439);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(425);
				createTable();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(426);
				createDatabase();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(427);
				createView();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(428);
				createFunction();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(429);
				createCatalog();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(430);
				alterTable();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(431);
				alertView();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(432);
				alterDatabase();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(433);
				alterFunction();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(434);
				dropCatalog();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(435);
				dropTable();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(436);
				dropDatabase();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(437);
				dropView();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(438);
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
			setState(443);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_SELECT:
			case KW_VALUES:
			case KW_WITH:
			case LR_BRACKET:
				enterOuterAlt(_localctx, 1);
				{
				setState(441);
				queryStatement(0);
				}
				break;
			case KW_BEGIN:
			case KW_EXECUTE:
			case KW_INSERT:
				enterOuterAlt(_localctx, 2);
				{
				setState(442);
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
			setState(445);
			_la = _input.LA(1);
			if ( !(_la==KW_DESC || _la==KW_DESCRIBE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(446);
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
			setState(448);
			match(KW_EXPLAIN);
			setState(452);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_CHANGELOG_MODE:
			case KW_ESTIMATED_COST:
			case KW_JSON_EXECUTION_PLAN:
				{
				setState(449);
				explainDetails();
				}
				break;
			case KW_PLAN:
				{
				setState(450);
				match(KW_PLAN);
				setState(451);
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
			setState(457);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				{
				setState(454);
				dmlStatement();
				}
				break;
			case 2:
				{
				setState(455);
				insertSimpleStatement();
				}
				break;
			case 3:
				{
				setState(456);
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
			setState(459);
			explainDetail();
			setState(464);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(460);
				match(COMMA);
				setState(461);
				explainDetail();
				}
				}
				setState(466);
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
			setState(467);
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
		enterRule(_localctx, 24, RULE_useStatement);
		try {
			setState(475);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(469);
				match(KW_USE);
				setState(470);
				match(KW_CATALOG);
				setState(471);
				catalogPath();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(472);
				match(KW_USE);
				setState(473);
				databasePath();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(474);
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
			setState(477);
			match(KW_USE);
			setState(478);
			match(KW_MODULES);
			setState(479);
			uid();
			setState(484);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(480);
				match(COMMA);
				setState(481);
				uid();
				}
				}
				setState(486);
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
			setState(522);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(487);
				match(KW_SHOW);
				setState(488);
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
				setState(489);
				match(KW_SHOW);
				setState(490);
				match(KW_CURRENT);
				setState(491);
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
				setState(492);
				match(KW_SHOW);
				setState(493);
				match(KW_TABLES);
				setState(496);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_FROM || _la==KW_IN) {
					{
					setState(494);
					_la = _input.LA(1);
					if ( !(_la==KW_FROM || _la==KW_IN) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(495);
					tablePath();
					}
				}

				setState(499);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_LIKE || _la==KW_NOT) {
					{
					setState(498);
					likePredicate();
					}
				}

				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(501);
				match(KW_SHOW);
				setState(502);
				match(KW_COLUMNS);
				setState(503);
				_la = _input.LA(1);
				if ( !(_la==KW_FROM || _la==KW_IN) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(504);
				uid();
				setState(506);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_LIKE || _la==KW_NOT) {
					{
					setState(505);
					likePredicate();
					}
				}

				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(508);
				match(KW_SHOW);
				setState(509);
				match(KW_CREATE);
				setState(510);
				_la = _input.LA(1);
				if ( !(_la==KW_VIEW || _la==KW_TABLE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(511);
				uid();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(512);
				match(KW_SHOW);
				setState(514);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_USER) {
					{
					setState(513);
					match(KW_USER);
					}
				}

				setState(516);
				match(KW_FUNCTIONS);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(517);
				match(KW_SHOW);
				setState(519);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_FULL) {
					{
					setState(518);
					match(KW_FULL);
					}
				}

				setState(521);
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
			setState(524);
			match(KW_LOAD);
			setState(525);
			match(KW_MODULE);
			setState(526);
			uid();
			setState(529);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_WITH) {
				{
				setState(527);
				match(KW_WITH);
				setState(528);
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
			setState(531);
			match(KW_UNLOAD);
			setState(532);
			match(KW_MODULE);
			setState(533);
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
			setState(535);
			match(KW_SET);
			setState(537);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << KW_ADD) | (1L << KW_ADMIN) | (1L << KW_AFTER) | (1L << KW_ANALYZE) | (1L << KW_ASC) | (1L << KW_BEFORE) | (1L << KW_BYTES) | (1L << KW_CASCADE) | (1L << KW_CATALOG) | (1L << KW_CATALOGS) | (1L << KW_CENTURY) | (1L << KW_CHAIN) | (1L << KW_CHANGELOG_MODE) | (1L << KW_CHARACTERS) | (1L << KW_COMMENT) | (1L << KW_COMPACT) | (1L << KW_COLUMNS) | (1L << KW_CONSTRAINTS) | (1L << KW_CONSTRUCTOR) | (1L << KW_CUMULATE) | (1L << KW_DATA) | (1L << KW_DATABASE) | (1L << KW_DATABASES) | (1L << KW_DAYS) | (1L << KW_DECADE) | (1L << KW_DEFINED) | (1L << KW_DESC) | (1L << KW_DESCRIPTOR) | (1L << KW_DIV) | (1L << KW_ENCODING) | (1L << KW_ENFORCED) | (1L << KW_ENGINE) | (1L << KW_ERROR) | (1L << KW_ESTIMATED_COST) | (1L << KW_EXCEPTION) | (1L << KW_EXCLUDE) | (1L << KW_EXCLUDING) | (1L << KW_EXTENDED) | (1L << KW_FILE) | (1L << KW_FINAL) | (1L << KW_FIRST) | (1L << KW_FOLLOWING) | (1L << KW_FORMAT) | (1L << KW_FORTRAN) | (1L << KW_FOUND) | (1L << KW_FRAC_SECOND) | (1L << KW_FUNCTIONS) | (1L << KW_GENERAL) | (1L << KW_GENERATED) | (1L << KW_GO) | (1L << KW_GOTO) | (1L << KW_GRANTED) | (1L << KW_HOP) | (1L << KW_HOURS) | (1L << KW_IF) | (1L << KW_IGNORE) | (1L << KW_INCREMENT) | (1L << KW_INPUT) | (1L << KW_INVOKER))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (KW_JAR - 64)) | (1L << (KW_JARS - 64)) | (1L << (KW_JAVA - 64)) | (1L << (KW_JSON - 64)) | (1L << (KW_JSON_EXECUTION_PLAN - 64)) | (1L << (KW_KEY - 64)) | (1L << (KW_KEY_MEMBER - 64)) | (1L << (KW_KEY_TYPE - 64)) | (1L << (KW_LABEL - 64)) | (1L << (KW_LAST - 64)) | (1L << (KW_LENGTH - 64)) | (1L << (KW_LEVEL - 64)) | (1L << (KW_LOAD - 64)) | (1L << (KW_MAP - 64)) | (1L << (KW_MICROSECOND - 64)) | (1L << (KW_MILLENNIUM - 64)) | (1L << (KW_MILLISECOND - 64)) | (1L << (KW_MINUTES - 64)) | (1L << (KW_MINVALUE - 64)) | (1L << (KW_MODIFY - 64)) | (1L << (KW_MODULES - 64)) | (1L << (KW_MONTHS - 64)) | (1L << (KW_NANOSECOND - 64)) | (1L << (KW_NULLS - 64)) | (1L << (KW_NUMBER - 64)) | (1L << (KW_OPTION - 64)) | (1L << (KW_OPTIONS - 64)) | (1L << (KW_ORDERING - 64)) | (1L << (KW_OUTPUT - 64)) | (1L << (KW_OVERWRITE - 64)) | (1L << (KW_OVERWRITING - 64)) | (1L << (KW_PARTITIONED - 64)) | (1L << (KW_PARTITIONS - 64)) | (1L << (KW_PASSING - 64)) | (1L << (KW_PAST - 64)) | (1L << (KW_PATH - 64)) | (1L << (KW_PLACING - 64)) | (1L << (KW_PLAN - 64)) | (1L << (KW_PRECEDING - 64)) | (1L << (KW_PRESERVE - 64)) | (1L << (KW_PRIOR - 64)) | (1L << (KW_PRIVILEGES - 64)) | (1L << (KW_PUBLIC - 64)) | (1L << (KW_PYTHON - 64)) | (1L << (KW_PYTHON_FILES - 64)) | (1L << (KW_PYTHON_REQUIREMENTS - 64)) | (1L << (KW_PYTHON_DEPENDENCIES - 64)) | (1L << (KW_PYTHON_JAR - 64)) | (1L << (KW_PYTHON_ARCHIVES - 64)) | (1L << (KW_PYTHON_PARAMETER - 64)) | (1L << (KW_QUARTER - 64)) | (1L << (KW_RAW - 64)) | (1L << (KW_READ - 64)) | (1L << (KW_RELATIVE - 64)) | (1L << (KW_REMOVE - 64)) | (1L << (KW_RENAME - 64)) | (1L << (KW_REPLACE - 64)) | (1L << (KW_RESPECT - 64)) | (1L << (KW_RESTART - 64)) | (1L << (KW_RESTRICT - 64)) | (1L << (KW_ROLE - 64)) | (1L << (KW_ROW_COUNT - 64)) | (1L << (KW_SCALA - 64)) | (1L << (KW_SCALAR - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (KW_SCALE - 128)) | (1L << (KW_SCHEMA - 128)) | (1L << (KW_SECONDS - 128)) | (1L << (KW_SECTION - 128)) | (1L << (KW_SECURITY - 128)) | (1L << (KW_SELF - 128)) | (1L << (KW_SERVER - 128)) | (1L << (KW_SERVER_NAME - 128)) | (1L << (KW_SESSION - 128)) | (1L << (KW_SETS - 128)) | (1L << (KW_SIMPLE - 128)) | (1L << (KW_SIZE - 128)) | (1L << (KW_SLIDE - 128)) | (1L << (KW_SOURCE - 128)) | (1L << (KW_SPACE - 128)) | (1L << (KW_STATE - 128)) | (1L << (KW_STATEMENT - 128)) | (1L << (KW_STEP - 128)) | (1L << (KW_STRING - 128)) | (1L << (KW_STRUCTURE - 128)) | (1L << (KW_STYLE - 128)) | (1L << (KW_TABLES - 128)) | (1L << (KW_TEMPORARY - 128)) | (1L << (KW_TIMECOL - 128)) | (1L << (KW_TIMESTAMP_LTZ - 128)) | (1L << (KW_TIMESTAMPADD - 128)) | (1L << (KW_TIMESTAMPDIFF - 128)) | (1L << (KW_TRANSFORM - 128)) | (1L << (KW_TUMBLE - 128)) | (1L << (KW_TYPE - 128)) | (1L << (KW_UNDER - 128)) | (1L << (KW_UNLOAD - 128)) | (1L << (KW_USAGE - 128)) | (1L << (KW_USE - 128)) | (1L << (KW_UTF16 - 128)) | (1L << (KW_UTF32 - 128)) | (1L << (KW_UTF8 - 128)) | (1L << (KW_VERSION - 128)) | (1L << (KW_VIEW - 128)) | (1L << (KW_VIEWS - 128)) | (1L << (KW_VIRTUAL - 128)) | (1L << (KW_WATERMARK - 128)) | (1L << (KW_WATERMARKS - 128)) | (1L << (KW_WEEK - 128)) | (1L << (KW_WORK - 128)) | (1L << (KW_WRAPPER - 128)) | (1L << (KW_YEARS - 128)) | (1L << (KW_ZONE - 128)))) != 0) || ((((_la - 408)) & ~0x3f) == 0 && ((1L << (_la - 408)) & ((1L << (STRING_LITERAL - 408)) | (1L << (DIG_LITERAL - 408)) | (1L << (ID_LITERAL - 408)))) != 0)) {
				{
				setState(536);
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
			setState(539);
			match(KW_RESET);
			setState(541);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << KW_ADD) | (1L << KW_ADMIN) | (1L << KW_AFTER) | (1L << KW_ANALYZE) | (1L << KW_ASC) | (1L << KW_BEFORE) | (1L << KW_BYTES) | (1L << KW_CASCADE) | (1L << KW_CATALOG) | (1L << KW_CATALOGS) | (1L << KW_CENTURY) | (1L << KW_CHAIN) | (1L << KW_CHANGELOG_MODE) | (1L << KW_CHARACTERS) | (1L << KW_COMMENT) | (1L << KW_COMPACT) | (1L << KW_COLUMNS) | (1L << KW_CONSTRAINTS) | (1L << KW_CONSTRUCTOR) | (1L << KW_CUMULATE) | (1L << KW_DATA) | (1L << KW_DATABASE) | (1L << KW_DATABASES) | (1L << KW_DAYS) | (1L << KW_DECADE) | (1L << KW_DEFINED) | (1L << KW_DESC) | (1L << KW_DESCRIPTOR) | (1L << KW_DIV) | (1L << KW_ENCODING) | (1L << KW_ENFORCED) | (1L << KW_ENGINE) | (1L << KW_ERROR) | (1L << KW_ESTIMATED_COST) | (1L << KW_EXCEPTION) | (1L << KW_EXCLUDE) | (1L << KW_EXCLUDING) | (1L << KW_EXTENDED) | (1L << KW_FILE) | (1L << KW_FINAL) | (1L << KW_FIRST) | (1L << KW_FOLLOWING) | (1L << KW_FORMAT) | (1L << KW_FORTRAN) | (1L << KW_FOUND) | (1L << KW_FRAC_SECOND) | (1L << KW_FUNCTIONS) | (1L << KW_GENERAL) | (1L << KW_GENERATED) | (1L << KW_GO) | (1L << KW_GOTO) | (1L << KW_GRANTED) | (1L << KW_HOP) | (1L << KW_HOURS) | (1L << KW_IF) | (1L << KW_IGNORE) | (1L << KW_INCREMENT) | (1L << KW_INPUT) | (1L << KW_INVOKER))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (KW_JAR - 64)) | (1L << (KW_JARS - 64)) | (1L << (KW_JAVA - 64)) | (1L << (KW_JSON - 64)) | (1L << (KW_JSON_EXECUTION_PLAN - 64)) | (1L << (KW_KEY - 64)) | (1L << (KW_KEY_MEMBER - 64)) | (1L << (KW_KEY_TYPE - 64)) | (1L << (KW_LABEL - 64)) | (1L << (KW_LAST - 64)) | (1L << (KW_LENGTH - 64)) | (1L << (KW_LEVEL - 64)) | (1L << (KW_LOAD - 64)) | (1L << (KW_MAP - 64)) | (1L << (KW_MICROSECOND - 64)) | (1L << (KW_MILLENNIUM - 64)) | (1L << (KW_MILLISECOND - 64)) | (1L << (KW_MINUTES - 64)) | (1L << (KW_MINVALUE - 64)) | (1L << (KW_MODIFY - 64)) | (1L << (KW_MODULES - 64)) | (1L << (KW_MONTHS - 64)) | (1L << (KW_NANOSECOND - 64)) | (1L << (KW_NULLS - 64)) | (1L << (KW_NUMBER - 64)) | (1L << (KW_OPTION - 64)) | (1L << (KW_OPTIONS - 64)) | (1L << (KW_ORDERING - 64)) | (1L << (KW_OUTPUT - 64)) | (1L << (KW_OVERWRITE - 64)) | (1L << (KW_OVERWRITING - 64)) | (1L << (KW_PARTITIONED - 64)) | (1L << (KW_PARTITIONS - 64)) | (1L << (KW_PASSING - 64)) | (1L << (KW_PAST - 64)) | (1L << (KW_PATH - 64)) | (1L << (KW_PLACING - 64)) | (1L << (KW_PLAN - 64)) | (1L << (KW_PRECEDING - 64)) | (1L << (KW_PRESERVE - 64)) | (1L << (KW_PRIOR - 64)) | (1L << (KW_PRIVILEGES - 64)) | (1L << (KW_PUBLIC - 64)) | (1L << (KW_PYTHON - 64)) | (1L << (KW_PYTHON_FILES - 64)) | (1L << (KW_PYTHON_REQUIREMENTS - 64)) | (1L << (KW_PYTHON_DEPENDENCIES - 64)) | (1L << (KW_PYTHON_JAR - 64)) | (1L << (KW_PYTHON_ARCHIVES - 64)) | (1L << (KW_PYTHON_PARAMETER - 64)) | (1L << (KW_QUARTER - 64)) | (1L << (KW_RAW - 64)) | (1L << (KW_READ - 64)) | (1L << (KW_RELATIVE - 64)) | (1L << (KW_REMOVE - 64)) | (1L << (KW_RENAME - 64)) | (1L << (KW_REPLACE - 64)) | (1L << (KW_RESPECT - 64)) | (1L << (KW_RESTART - 64)) | (1L << (KW_RESTRICT - 64)) | (1L << (KW_ROLE - 64)) | (1L << (KW_ROW_COUNT - 64)) | (1L << (KW_SCALA - 64)) | (1L << (KW_SCALAR - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (KW_SCALE - 128)) | (1L << (KW_SCHEMA - 128)) | (1L << (KW_SECONDS - 128)) | (1L << (KW_SECTION - 128)) | (1L << (KW_SECURITY - 128)) | (1L << (KW_SELF - 128)) | (1L << (KW_SERVER - 128)) | (1L << (KW_SERVER_NAME - 128)) | (1L << (KW_SESSION - 128)) | (1L << (KW_SETS - 128)) | (1L << (KW_SIMPLE - 128)) | (1L << (KW_SIZE - 128)) | (1L << (KW_SLIDE - 128)) | (1L << (KW_SOURCE - 128)) | (1L << (KW_SPACE - 128)) | (1L << (KW_STATE - 128)) | (1L << (KW_STATEMENT - 128)) | (1L << (KW_STEP - 128)) | (1L << (KW_STRING - 128)) | (1L << (KW_STRUCTURE - 128)) | (1L << (KW_STYLE - 128)) | (1L << (KW_TABLES - 128)) | (1L << (KW_TEMPORARY - 128)) | (1L << (KW_TIMECOL - 128)) | (1L << (KW_TIMESTAMP_LTZ - 128)) | (1L << (KW_TIMESTAMPADD - 128)) | (1L << (KW_TIMESTAMPDIFF - 128)) | (1L << (KW_TRANSFORM - 128)) | (1L << (KW_TUMBLE - 128)) | (1L << (KW_TYPE - 128)) | (1L << (KW_UNDER - 128)) | (1L << (KW_UNLOAD - 128)) | (1L << (KW_USAGE - 128)) | (1L << (KW_USE - 128)) | (1L << (KW_UTF16 - 128)) | (1L << (KW_UTF32 - 128)) | (1L << (KW_UTF8 - 128)) | (1L << (KW_VERSION - 128)) | (1L << (KW_VIEW - 128)) | (1L << (KW_VIEWS - 128)) | (1L << (KW_VIRTUAL - 128)) | (1L << (KW_WATERMARK - 128)) | (1L << (KW_WATERMARKS - 128)) | (1L << (KW_WEEK - 128)) | (1L << (KW_WORK - 128)) | (1L << (KW_WRAPPER - 128)) | (1L << (KW_YEARS - 128)) | (1L << (KW_ZONE - 128)))) != 0) || ((((_la - 408)) & ~0x3f) == 0 && ((1L << (_la - 408)) & ((1L << (STRING_LITERAL - 408)) | (1L << (DIG_LITERAL - 408)) | (1L << (ID_LITERAL - 408)))) != 0)) {
				{
				setState(540);
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
			setState(543);
			_la = _input.LA(1);
			if ( !(_la==KW_ADD || _la==KW_REMOVE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(544);
			match(KW_JAR);
			setState(545);
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
			setState(548); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(547);
				match(SLASH_TEXT);
				}
				}
				setState(550); 
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
			setState(554);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				{
				setState(552);
				simpleCreateTable();
				}
				break;
			case 2:
				{
				setState(553);
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
			setState(556);
			match(KW_CREATE);
			setState(558);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_TEMPORARY) {
				{
				setState(557);
				match(KW_TEMPORARY);
				}
			}

			setState(560);
			match(KW_TABLE);
			setState(562);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
			case 1:
				{
				setState(561);
				ifNotExists();
				}
				break;
			}
			setState(564);
			tablePathCreate();
			setState(565);
			match(LR_BRACKET);
			setState(566);
			columnOptionDefinition();
			setState(571);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(567);
					match(COMMA);
					setState(568);
					columnOptionDefinition();
					}
					} 
				}
				setState(573);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
			}
			setState(576);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				{
				setState(574);
				match(COMMA);
				setState(575);
				watermarkDefinition();
				}
				break;
			}
			setState(580);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
			case 1:
				{
				setState(578);
				match(COMMA);
				setState(579);
				tableConstraint();
				}
				break;
			}
			setState(584);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(582);
				match(COMMA);
				setState(583);
				selfDefinitionClause();
				}
			}

			setState(586);
			match(RR_BRACKET);
			setState(588);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_COMMENT) {
				{
				setState(587);
				commentSpec();
				}
			}

			setState(591);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_PARTITIONED) {
				{
				setState(590);
				partitionDefinition();
				}
			}

			setState(593);
			withOption();
			setState(595);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_LIKE) {
				{
				setState(594);
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
			setState(597);
			match(KW_CREATE);
			setState(598);
			match(KW_TABLE);
			setState(600);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
			case 1:
				{
				setState(599);
				ifNotExists();
				}
				break;
			}
			setState(602);
			tablePathCreate();
			setState(603);
			withOption();
			setState(606);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_AS) {
				{
				setState(604);
				match(KW_AS);
				setState(605);
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
			setState(611);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,32,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(608);
				physicalColumnDefinition();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(609);
				metadataColumnDefinition();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(610);
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
			setState(613);
			columnName();
			setState(614);
			columnType();
			setState(616);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_CONSTRAINT || ((((_la - 298)) & ~0x3f) == 0 && ((1L << (_la - 298)) & ((1L << (KW_NOT - 298)) | (1L << (KW_NULL - 298)) | (1L << (KW_PRIMARY - 298)))) != 0)) {
				{
				setState(615);
				columnConstraint();
				}
			}

			setState(619);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_COMMENT) {
				{
				setState(618);
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
			setState(623);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,35,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(621);
				uid();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(622);
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
			setState(625);
			match(LR_BRACKET);
			setState(626);
			columnName();
			setState(631);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(627);
				match(COMMA);
				setState(628);
				columnName();
				}
				}
				setState(633);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(634);
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
			setState(709);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_BOOLEAN:
			case KW_DATE:
			case KW_NULL:
				enterOuterAlt(_localctx, 1);
				{
				setState(636);
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
				setState(637);
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
				setState(639);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LR_BRACKET) {
					{
					setState(638);
					lengthOneDimension();
					}
				}

				}
				break;
			case KW_TIMESTAMP:
				enterOuterAlt(_localctx, 3);
				{
				setState(641);
				((ColumnTypeContext)_localctx).typeName = match(KW_TIMESTAMP);
				setState(643);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LR_BRACKET) {
					{
					setState(642);
					lengthOneDimension();
					}
				}

				setState(651);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_WITH || _la==KW_WITHOUT) {
					{
					setState(645);
					_la = _input.LA(1);
					if ( !(_la==KW_WITH || _la==KW_WITHOUT) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(647);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==KW_LOCAL) {
						{
						setState(646);
						match(KW_LOCAL);
						}
					}

					setState(649);
					match(KW_TIME);
					setState(650);
					match(KW_ZONE);
					}
				}

				}
				break;
			case KW_TIMESTAMP_3:
				enterOuterAlt(_localctx, 4);
				{
				setState(653);
				((ColumnTypeContext)_localctx).typeName = match(KW_TIMESTAMP_3);
				setState(655);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LR_BRACKET) {
					{
					setState(654);
					lengthOneDimension();
					}
				}

				setState(663);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_WITH || _la==KW_WITHOUT) {
					{
					setState(657);
					_la = _input.LA(1);
					if ( !(_la==KW_WITH || _la==KW_WITHOUT) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(659);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==KW_LOCAL) {
						{
						setState(658);
						match(KW_LOCAL);
						}
					}

					setState(661);
					match(KW_TIME);
					setState(662);
					match(KW_ZONE);
					}
				}

				}
				break;
			case KW_TIMESTAMP_6:
				enterOuterAlt(_localctx, 5);
				{
				setState(665);
				((ColumnTypeContext)_localctx).typeName = match(KW_TIMESTAMP_6);
				setState(667);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LR_BRACKET) {
					{
					setState(666);
					lengthOneDimension();
					}
				}

				setState(675);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_WITH || _la==KW_WITHOUT) {
					{
					setState(669);
					_la = _input.LA(1);
					if ( !(_la==KW_WITH || _la==KW_WITHOUT) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(671);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==KW_LOCAL) {
						{
						setState(670);
						match(KW_LOCAL);
						}
					}

					setState(673);
					match(KW_TIME);
					setState(674);
					match(KW_ZONE);
					}
				}

				}
				break;
			case KW_TIMESTAMP_9:
				enterOuterAlt(_localctx, 6);
				{
				setState(677);
				((ColumnTypeContext)_localctx).typeName = match(KW_TIMESTAMP_9);
				setState(679);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LR_BRACKET) {
					{
					setState(678);
					lengthOneDimension();
					}
				}

				setState(687);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_WITH || _la==KW_WITHOUT) {
					{
					setState(681);
					_la = _input.LA(1);
					if ( !(_la==KW_WITH || _la==KW_WITHOUT) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(683);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==KW_LOCAL) {
						{
						setState(682);
						match(KW_LOCAL);
						}
					}

					setState(685);
					match(KW_TIME);
					setState(686);
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
				setState(689);
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
				setState(691);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LR_BRACKET) {
					{
					setState(690);
					lengthTwoOptionalDimension();
					}
				}

				}
				break;
			case KW_ARRAY:
			case KW_MULTISET:
				enterOuterAlt(_localctx, 8);
				{
				setState(693);
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
				setState(695);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LESS_SYMBOL) {
					{
					setState(694);
					lengthOneTypeDimension();
					}
				}

				}
				break;
			case KW_MAP:
				enterOuterAlt(_localctx, 9);
				{
				setState(697);
				((ColumnTypeContext)_localctx).type = match(KW_MAP);
				setState(699);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LESS_SYMBOL) {
					{
					setState(698);
					mapTypeDimension();
					}
				}

				}
				break;
			case KW_ROW:
				enterOuterAlt(_localctx, 10);
				{
				setState(701);
				((ColumnTypeContext)_localctx).type = match(KW_ROW);
				setState(703);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LESS_SYMBOL) {
					{
					setState(702);
					rowTypeDimension();
					}
				}

				}
				break;
			case KW_RAW:
				enterOuterAlt(_localctx, 11);
				{
				setState(705);
				((ColumnTypeContext)_localctx).type = match(KW_RAW);
				setState(707);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LR_BRACKET) {
					{
					setState(706);
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
			setState(711);
			match(LR_BRACKET);
			setState(712);
			decimalLiteral();
			setState(713);
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
			setState(715);
			match(LR_BRACKET);
			setState(716);
			decimalLiteral();
			setState(719);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(717);
				match(COMMA);
				setState(718);
				decimalLiteral();
				}
			}

			setState(721);
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
			setState(723);
			match(LR_BRACKET);
			setState(724);
			stringLiteral();
			setState(727);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(725);
				match(COMMA);
				setState(726);
				stringLiteral();
				}
			}

			setState(729);
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
		enterRule(_localctx, 64, RULE_lengthOneTypeDimension);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(731);
			match(LESS_SYMBOL);
			setState(732);
			columnType();
			setState(733);
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
			setState(735);
			match(LESS_SYMBOL);
			setState(736);
			columnType();
			{
			setState(737);
			match(COMMA);
			setState(738);
			columnType();
			}
			setState(740);
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
		enterRule(_localctx, 68, RULE_rowTypeDimension);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(742);
			match(LESS_SYMBOL);
			setState(743);
			columnName();
			setState(744);
			columnType();
			setState(751);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(745);
				match(COMMA);
				setState(746);
				columnName();
				setState(747);
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
			setState(770);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_CONSTRAINT:
			case KW_PRIMARY:
				enterOuterAlt(_localctx, 1);
				{
				setState(758);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_CONSTRAINT) {
					{
					setState(756);
					match(KW_CONSTRAINT);
					setState(757);
					constraintName();
					}
				}

				setState(760);
				match(KW_PRIMARY);
				setState(761);
				match(KW_KEY);
				setState(764);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(762);
					match(KW_NOT);
					setState(763);
					match(KW_ENFORCED);
					}
				}

				}
				break;
			case KW_NOT:
			case KW_NULL:
				enterOuterAlt(_localctx, 2);
				{
				setState(767);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(766);
					match(KW_NOT);
					}
				}

				setState(769);
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
			setState(772);
			match(KW_COMMENT);
			setState(773);
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
			setState(775);
			columnName();
			setState(776);
			columnType();
			setState(777);
			match(KW_METADATA);
			setState(780);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_FROM) {
				{
				setState(778);
				match(KW_FROM);
				setState(779);
				metadataKey();
				}
			}

			setState(783);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_VIRTUAL) {
				{
				setState(782);
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
			setState(785);
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
			setState(787);
			columnName();
			setState(788);
			match(KW_AS);
			setState(789);
			computedColumnExpression();
			setState(791);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_COMMENT) {
				{
				setState(790);
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
			setState(793);
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
			setState(795);
			match(KW_WATERMARK);
			setState(796);
			match(KW_FOR);
			setState(797);
			expression();
			setState(798);
			match(KW_AS);
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
			setState(803);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_CONSTRAINT) {
				{
				setState(801);
				match(KW_CONSTRAINT);
				setState(802);
				constraintName();
				}
			}

			setState(805);
			match(KW_PRIMARY);
			setState(806);
			match(KW_KEY);
			setState(807);
			columnNameList();
			setState(808);
			match(KW_NOT);
			setState(809);
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
			setState(811);
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
			setState(813);
			match(KW_PERIOD);
			setState(814);
			match(KW_FOR);
			setState(815);
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
			setState(817);
			match(KW_PARTITIONED);
			setState(818);
			match(KW_BY);
			setState(819);
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
			setState(821);
			match(LR_BRACKET);
			setState(822);
			transform();
			setState(827);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(823);
				match(COMMA);
				setState(824);
				transform();
				}
				}
				setState(829);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(830);
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
			setState(845);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,69,_ctx) ) {
			case 1:
				_localctx = new IdentityTransformContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(832);
				qualifiedName();
				}
				break;
			case 2:
				_localctx = new ApplyTransformContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(833);
				((ApplyTransformContext)_localctx).transformName = identifier();
				setState(834);
				match(LR_BRACKET);
				setState(835);
				transformArgument();
				setState(840);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(836);
					match(COMMA);
					setState(837);
					transformArgument();
					}
					}
					setState(842);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(843);
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
			setState(849);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,70,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(847);
				qualifiedName();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(848);
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
			setState(851);
			match(KW_LIKE);
			setState(852);
			tablePath();
			setState(861);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LR_BRACKET) {
				{
				setState(853);
				match(LR_BRACKET);
				setState(857);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==KW_EXCLUDING || _la==KW_OVERWRITING || _la==KW_INCLUDING) {
					{
					{
					setState(854);
					likeOption();
					}
					}
					setState(859);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(860);
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
			setState(867);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,73,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(863);
				_la = _input.LA(1);
				if ( !(_la==KW_EXCLUDING || _la==KW_INCLUDING) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(864);
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
				setState(865);
				_la = _input.LA(1);
				if ( !(_la==KW_EXCLUDING || _la==KW_OVERWRITING || _la==KW_INCLUDING) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(866);
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
			setState(869);
			match(KW_CREATE);
			setState(870);
			match(KW_CATALOG);
			setState(871);
			uid();
			setState(872);
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
		enterRule(_localctx, 104, RULE_createDatabase);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(874);
			match(KW_CREATE);
			setState(875);
			match(KW_DATABASE);
			setState(877);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,74,_ctx) ) {
			case 1:
				{
				setState(876);
				ifNotExists();
				}
				break;
			}
			setState(879);
			databasePathCreate();
			setState(881);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_COMMENT) {
				{
				setState(880);
				commentSpec();
				}
			}

			setState(883);
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
		enterRule(_localctx, 106, RULE_createView);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(885);
			match(KW_CREATE);
			setState(887);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_TEMPORARY) {
				{
				setState(886);
				match(KW_TEMPORARY);
				}
			}

			setState(889);
			match(KW_VIEW);
			setState(891);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,77,_ctx) ) {
			case 1:
				{
				setState(890);
				ifNotExists();
				}
				break;
			}
			setState(893);
			uid();
			setState(895);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LR_BRACKET) {
				{
				setState(894);
				columnNameList();
				}
			}

			setState(898);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_COMMENT) {
				{
				setState(897);
				commentSpec();
				}
			}

			setState(900);
			match(KW_AS);
			setState(901);
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
			setState(903);
			match(KW_CREATE);
			setState(907);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,80,_ctx) ) {
			case 1:
				{
				setState(904);
				match(KW_TEMPORARY);
				}
				break;
			case 2:
				{
				setState(905);
				match(KW_TEMPORARY);
				setState(906);
				match(KW_SYSTEM);
				}
				break;
			}
			setState(909);
			match(KW_FUNCTION);
			setState(911);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,81,_ctx) ) {
			case 1:
				{
				setState(910);
				ifNotExists();
				}
				break;
			}
			setState(913);
			functionName();
			setState(914);
			match(KW_AS);
			setState(915);
			identifier();
			setState(918);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_LANGUAGE) {
				{
				setState(916);
				match(KW_LANGUAGE);
				setState(917);
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

			setState(921);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_USING) {
				{
				setState(920);
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
			setState(923);
			match(KW_USING);
			setState(924);
			match(KW_JAR);
			setState(925);
			jarFileName();
			setState(931);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(926);
				match(COMMA);
				setState(927);
				match(KW_JAR);
				setState(928);
				jarFileName();
				}
				}
				setState(933);
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
			setState(934);
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
			setState(936);
			match(KW_ALTER);
			setState(937);
			match(KW_TABLE);
			setState(939);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,85,_ctx) ) {
			case 1:
				{
				setState(938);
				ifExists();
				}
				break;
			}
			setState(941);
			tablePath();
			setState(947);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,86,_ctx) ) {
			case 1:
				{
				setState(942);
				renameDefinition();
				}
				break;
			case 2:
				{
				setState(943);
				setKeyValueDefinition();
				}
				break;
			case 3:
				{
				setState(944);
				addConstraint();
				}
				break;
			case 4:
				{
				setState(945);
				dropConstraint();
				}
				break;
			case 5:
				{
				setState(946);
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
			setState(949);
			match(KW_RENAME);
			setState(951);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << KW_ADD) | (1L << KW_ADMIN) | (1L << KW_AFTER) | (1L << KW_ANALYZE) | (1L << KW_ASC) | (1L << KW_BEFORE) | (1L << KW_BYTES) | (1L << KW_CASCADE) | (1L << KW_CATALOG) | (1L << KW_CATALOGS) | (1L << KW_CENTURY) | (1L << KW_CHAIN) | (1L << KW_CHANGELOG_MODE) | (1L << KW_CHARACTERS) | (1L << KW_COMMENT) | (1L << KW_COMPACT) | (1L << KW_COLUMNS) | (1L << KW_CONSTRAINTS) | (1L << KW_CONSTRUCTOR) | (1L << KW_CUMULATE) | (1L << KW_DATA) | (1L << KW_DATABASE) | (1L << KW_DATABASES) | (1L << KW_DAYS) | (1L << KW_DECADE) | (1L << KW_DEFINED) | (1L << KW_DESC) | (1L << KW_DESCRIPTOR) | (1L << KW_DIV) | (1L << KW_ENCODING) | (1L << KW_ENFORCED) | (1L << KW_ENGINE) | (1L << KW_ERROR) | (1L << KW_ESTIMATED_COST) | (1L << KW_EXCEPTION) | (1L << KW_EXCLUDE) | (1L << KW_EXCLUDING) | (1L << KW_EXTENDED) | (1L << KW_FILE) | (1L << KW_FINAL) | (1L << KW_FIRST) | (1L << KW_FOLLOWING) | (1L << KW_FORMAT) | (1L << KW_FORTRAN) | (1L << KW_FOUND) | (1L << KW_FRAC_SECOND) | (1L << KW_FUNCTIONS) | (1L << KW_GENERAL) | (1L << KW_GENERATED) | (1L << KW_GO) | (1L << KW_GOTO) | (1L << KW_GRANTED) | (1L << KW_HOP) | (1L << KW_HOURS) | (1L << KW_IF) | (1L << KW_IGNORE) | (1L << KW_INCREMENT) | (1L << KW_INPUT) | (1L << KW_INVOKER))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (KW_JAR - 64)) | (1L << (KW_JARS - 64)) | (1L << (KW_JAVA - 64)) | (1L << (KW_JSON - 64)) | (1L << (KW_JSON_EXECUTION_PLAN - 64)) | (1L << (KW_KEY - 64)) | (1L << (KW_KEY_MEMBER - 64)) | (1L << (KW_KEY_TYPE - 64)) | (1L << (KW_LABEL - 64)) | (1L << (KW_LAST - 64)) | (1L << (KW_LENGTH - 64)) | (1L << (KW_LEVEL - 64)) | (1L << (KW_LOAD - 64)) | (1L << (KW_MAP - 64)) | (1L << (KW_MICROSECOND - 64)) | (1L << (KW_MILLENNIUM - 64)) | (1L << (KW_MILLISECOND - 64)) | (1L << (KW_MINUTES - 64)) | (1L << (KW_MINVALUE - 64)) | (1L << (KW_MODIFY - 64)) | (1L << (KW_MODULES - 64)) | (1L << (KW_MONTHS - 64)) | (1L << (KW_NANOSECOND - 64)) | (1L << (KW_NULLS - 64)) | (1L << (KW_NUMBER - 64)) | (1L << (KW_OPTION - 64)) | (1L << (KW_OPTIONS - 64)) | (1L << (KW_ORDERING - 64)) | (1L << (KW_OUTPUT - 64)) | (1L << (KW_OVERWRITE - 64)) | (1L << (KW_OVERWRITING - 64)) | (1L << (KW_PARTITIONED - 64)) | (1L << (KW_PARTITIONS - 64)) | (1L << (KW_PASSING - 64)) | (1L << (KW_PAST - 64)) | (1L << (KW_PATH - 64)) | (1L << (KW_PLACING - 64)) | (1L << (KW_PLAN - 64)) | (1L << (KW_PRECEDING - 64)) | (1L << (KW_PRESERVE - 64)) | (1L << (KW_PRIOR - 64)) | (1L << (KW_PRIVILEGES - 64)) | (1L << (KW_PUBLIC - 64)) | (1L << (KW_PYTHON - 64)) | (1L << (KW_PYTHON_FILES - 64)) | (1L << (KW_PYTHON_REQUIREMENTS - 64)) | (1L << (KW_PYTHON_DEPENDENCIES - 64)) | (1L << (KW_PYTHON_JAR - 64)) | (1L << (KW_PYTHON_ARCHIVES - 64)) | (1L << (KW_PYTHON_PARAMETER - 64)) | (1L << (KW_QUARTER - 64)) | (1L << (KW_RAW - 64)) | (1L << (KW_READ - 64)) | (1L << (KW_RELATIVE - 64)) | (1L << (KW_REMOVE - 64)) | (1L << (KW_RENAME - 64)) | (1L << (KW_REPLACE - 64)) | (1L << (KW_RESPECT - 64)) | (1L << (KW_RESTART - 64)) | (1L << (KW_RESTRICT - 64)) | (1L << (KW_ROLE - 64)) | (1L << (KW_ROW_COUNT - 64)) | (1L << (KW_SCALA - 64)) | (1L << (KW_SCALAR - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (KW_SCALE - 128)) | (1L << (KW_SCHEMA - 128)) | (1L << (KW_SECONDS - 128)) | (1L << (KW_SECTION - 128)) | (1L << (KW_SECURITY - 128)) | (1L << (KW_SELF - 128)) | (1L << (KW_SERVER - 128)) | (1L << (KW_SERVER_NAME - 128)) | (1L << (KW_SESSION - 128)) | (1L << (KW_SETS - 128)) | (1L << (KW_SIMPLE - 128)) | (1L << (KW_SIZE - 128)) | (1L << (KW_SLIDE - 128)) | (1L << (KW_SOURCE - 128)) | (1L << (KW_SPACE - 128)) | (1L << (KW_STATE - 128)) | (1L << (KW_STATEMENT - 128)) | (1L << (KW_STEP - 128)) | (1L << (KW_STRING - 128)) | (1L << (KW_STRUCTURE - 128)) | (1L << (KW_STYLE - 128)) | (1L << (KW_TABLES - 128)) | (1L << (KW_TEMPORARY - 128)) | (1L << (KW_TIMECOL - 128)) | (1L << (KW_TIMESTAMP_LTZ - 128)) | (1L << (KW_TIMESTAMPADD - 128)) | (1L << (KW_TIMESTAMPDIFF - 128)) | (1L << (KW_TRANSFORM - 128)) | (1L << (KW_TUMBLE - 128)) | (1L << (KW_TYPE - 128)) | (1L << (KW_UNDER - 128)) | (1L << (KW_UNLOAD - 128)) | (1L << (KW_USAGE - 128)) | (1L << (KW_USE - 128)) | (1L << (KW_UTF16 - 128)) | (1L << (KW_UTF32 - 128)) | (1L << (KW_UTF8 - 128)) | (1L << (KW_VERSION - 128)) | (1L << (KW_VIEW - 128)) | (1L << (KW_VIEWS - 128)) | (1L << (KW_VIRTUAL - 128)) | (1L << (KW_WATERMARK - 128)) | (1L << (KW_WATERMARKS - 128)) | (1L << (KW_WEEK - 128)) | (1L << (KW_WORK - 128)) | (1L << (KW_WRAPPER - 128)) | (1L << (KW_YEARS - 128)) | (1L << (KW_ZONE - 128)))) != 0) || ((((_la - 408)) & ~0x3f) == 0 && ((1L << (_la - 408)) & ((1L << (STRING_LITERAL - 408)) | (1L << (DIG_LITERAL - 408)) | (1L << (ID_LITERAL - 408)))) != 0)) {
				{
				setState(950);
				uid();
				}
			}

			setState(953);
			match(KW_TO);
			setState(954);
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
			setState(956);
			match(KW_SET);
			setState(957);
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
			setState(959);
			match(KW_ADD);
			setState(960);
			match(KW_CONSTRAINT);
			setState(961);
			constraintName();
			setState(962);
			match(KW_PRIMARY);
			setState(963);
			match(KW_KEY);
			setState(964);
			columnNameList();
			setState(966);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_NOT) {
				{
				setState(965);
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
			setState(968);
			match(KW_DROP);
			setState(969);
			match(KW_CONSTRAINT);
			setState(970);
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
			setState(972);
			match(KW_ADD);
			setState(973);
			match(KW_UNIQUE);
			setState(974);
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
			setState(976);
			match(KW_NOT);
			setState(977);
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
			setState(979);
			match(KW_ALTER);
			setState(980);
			match(KW_VIEW);
			setState(981);
			uid();
			setState(985);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_RENAME:
				{
				setState(982);
				renameDefinition();
				}
				break;
			case KW_AS:
				{
				setState(983);
				match(KW_AS);
				setState(984);
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
			setState(987);
			match(KW_ALTER);
			setState(988);
			match(KW_DATABASE);
			setState(989);
			databasePath();
			setState(990);
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
			setState(992);
			match(KW_ALTER);
			setState(996);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,90,_ctx) ) {
			case 1:
				{
				setState(993);
				match(KW_TEMPORARY);
				}
				break;
			case 2:
				{
				setState(994);
				match(KW_TEMPORARY);
				setState(995);
				match(KW_SYSTEM);
				}
				break;
			}
			setState(998);
			match(KW_FUNCTION);
			setState(1000);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,91,_ctx) ) {
			case 1:
				{
				setState(999);
				ifExists();
				}
				break;
			}
			setState(1002);
			uid();
			setState(1003);
			match(KW_AS);
			setState(1004);
			identifier();
			setState(1007);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_LANGUAGE) {
				{
				setState(1005);
				match(KW_LANGUAGE);
				setState(1006);
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
		enterRule(_localctx, 134, RULE_dropCatalog);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1009);
			match(KW_DROP);
			setState(1010);
			match(KW_CATALOG);
			setState(1012);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,93,_ctx) ) {
			case 1:
				{
				setState(1011);
				ifExists();
				}
				break;
			}
			setState(1014);
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
			setState(1016);
			match(KW_DROP);
			setState(1018);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_TEMPORARY) {
				{
				setState(1017);
				match(KW_TEMPORARY);
				}
			}

			setState(1020);
			match(KW_TABLE);
			setState(1022);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,95,_ctx) ) {
			case 1:
				{
				setState(1021);
				ifExists();
				}
				break;
			}
			setState(1024);
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
			setState(1026);
			match(KW_DROP);
			setState(1027);
			match(KW_DATABASE);
			setState(1029);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,96,_ctx) ) {
			case 1:
				{
				setState(1028);
				ifExists();
				}
				break;
			}
			setState(1031);
			databasePath();
			setState(1033);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_CASCADE || _la==KW_RESTRICT) {
				{
				setState(1032);
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
			setState(1035);
			match(KW_DROP);
			setState(1037);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_TEMPORARY) {
				{
				setState(1036);
				match(KW_TEMPORARY);
				}
			}

			setState(1039);
			match(KW_VIEW);
			setState(1041);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,99,_ctx) ) {
			case 1:
				{
				setState(1040);
				ifExists();
				}
				break;
			}
			setState(1043);
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
			setState(1045);
			match(KW_DROP);
			setState(1049);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,100,_ctx) ) {
			case 1:
				{
				setState(1046);
				match(KW_TEMPORARY);
				}
				break;
			case 2:
				{
				setState(1047);
				match(KW_TEMPORARY);
				setState(1048);
				match(KW_SYSTEM);
				}
				break;
			}
			setState(1051);
			match(KW_FUNCTION);
			setState(1053);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,101,_ctx) ) {
			case 1:
				{
				setState(1052);
				ifExists();
				}
				break;
			}
			setState(1055);
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
			setState(1064);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,103,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(1058);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_EXECUTE) {
					{
					setState(1057);
					match(KW_EXECUTE);
					}
				}

				setState(1060);
				insertSimpleStatement();
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1061);
				insertMulStatementCompatibility();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				{
				setState(1062);
				match(KW_EXECUTE);
				setState(1063);
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
			setState(1066);
			match(KW_INSERT);
			setState(1067);
			_la = _input.LA(1);
			if ( !(_la==KW_OVERWRITE || _la==KW_INTO) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(1068);
			tablePath();
			setState(1077);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,106,_ctx) ) {
			case 1:
				{
				setState(1070);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_PARTITION) {
					{
					setState(1069);
					insertPartitionDefinition();
					}
				}

				setState(1073);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,105,_ctx) ) {
				case 1:
					{
					setState(1072);
					columnNameList();
					}
					break;
				}
				setState(1075);
				queryStatement(0);
				}
				break;
			case 2:
				{
				setState(1076);
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
			setState(1079);
			match(KW_PARTITION);
			setState(1080);
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
			setState(1082);
			match(KW_VALUES);
			setState(1083);
			valuesRowDefinition();
			setState(1088);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1084);
				match(COMMA);
				setState(1085);
				valuesRowDefinition();
				}
				}
				setState(1090);
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
			setState(1091);
			match(LR_BRACKET);
			setState(1092);
			constant();
			setState(1097);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1093);
				match(COMMA);
				setState(1094);
				constant();
				}
				}
				setState(1099);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1100);
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
			setState(1102);
			match(KW_BEGIN);
			setState(1103);
			match(KW_STATEMENT);
			setState(1104);
			match(KW_SET);
			setState(1105);
			match(SEMICOLON);
			setState(1109); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(1106);
				insertSimpleStatement();
				setState(1107);
				match(SEMICOLON);
				}
				}
				setState(1111); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==KW_INSERT );
			setState(1113);
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
			setState(1115);
			match(KW_STATEMENT);
			setState(1116);
			match(KW_SET);
			setState(1117);
			match(KW_BEGIN);
			setState(1121); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(1118);
				insertSimpleStatement();
				setState(1119);
				match(SEMICOLON);
				}
				}
				setState(1123); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==KW_INSERT );
			setState(1125);
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
			setState(1150);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,115,_ctx) ) {
			case 1:
				{
				setState(1128);
				valuesCaluse();
				}
				break;
			case 2:
				{
				setState(1129);
				withClause();
				setState(1130);
				queryStatement(5);
				}
				break;
			case 3:
				{
				setState(1132);
				match(LR_BRACKET);
				setState(1133);
				queryStatement(0);
				setState(1134);
				match(RR_BRACKET);
				}
				break;
			case 4:
				{
				setState(1136);
				selectClause();
				setState(1138);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,111,_ctx) ) {
				case 1:
					{
					setState(1137);
					orderByCaluse();
					}
					break;
				}
				setState(1141);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,112,_ctx) ) {
				case 1:
					{
					setState(1140);
					limitClause();
					}
					break;
				}
				}
				break;
			case 5:
				{
				setState(1143);
				selectStatement();
				setState(1145);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,113,_ctx) ) {
				case 1:
					{
					setState(1144);
					orderByCaluse();
					}
					break;
				}
				setState(1148);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,114,_ctx) ) {
				case 1:
					{
					setState(1147);
					limitClause();
					}
					break;
				}
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(1166);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,119,_ctx);
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
					setState(1152);
					if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
					setState(1153);
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
					setState(1155);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==KW_ALL) {
						{
						setState(1154);
						match(KW_ALL);
						}
					}

					setState(1157);
					((QueryStatementContext)_localctx).right = queryStatement(0);
					setState(1159);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,117,_ctx) ) {
					case 1:
						{
						setState(1158);
						orderByCaluse();
						}
						break;
					}
					setState(1162);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,118,_ctx) ) {
					case 1:
						{
						setState(1161);
						limitClause();
						}
						break;
					}
					}
					} 
				}
				setState(1168);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,119,_ctx);
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
			setState(1169);
			match(KW_VALUES);
			setState(1170);
			expression();
			setState(1175);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,120,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1171);
					match(COMMA);
					setState(1172);
					expression();
					}
					} 
				}
				setState(1177);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,120,_ctx);
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
			setState(1178);
			match(KW_WITH);
			setState(1179);
			withItem();
			setState(1184);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1180);
				match(COMMA);
				setState(1181);
				withItem();
				}
				}
				setState(1186);
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
			setState(1187);
			withItemName();
			setState(1199);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LR_BRACKET) {
				{
				setState(1188);
				match(LR_BRACKET);
				setState(1189);
				columnName();
				setState(1194);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1190);
					match(COMMA);
					setState(1191);
					columnName();
					}
					}
					setState(1196);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1197);
				match(RR_BRACKET);
				}
			}

			setState(1201);
			match(KW_AS);
			setState(1202);
			match(LR_BRACKET);
			setState(1203);
			queryStatement(0);
			setState(1204);
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
			setState(1206);
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
			setState(1226);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,128,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1208);
				selectClause();
				setState(1209);
				fromClause();
				setState(1211);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,124,_ctx) ) {
				case 1:
					{
					setState(1210);
					whereClause();
					}
					break;
				}
				setState(1214);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,125,_ctx) ) {
				case 1:
					{
					setState(1213);
					groupByClause();
					}
					break;
				}
				setState(1217);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,126,_ctx) ) {
				case 1:
					{
					setState(1216);
					havingClause();
					}
					break;
				}
				setState(1220);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,127,_ctx) ) {
				case 1:
					{
					setState(1219);
					windowClause();
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1222);
				selectClause();
				setState(1223);
				fromClause();
				setState(1224);
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
			setState(1228);
			match(KW_SELECT);
			setState(1230);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_ALL || _la==KW_DISTINCT) {
				{
				setState(1229);
				setQuantifier();
				}
			}

			setState(1241);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,131,_ctx) ) {
			case 1:
				{
				setState(1232);
				match(ASTERISK_SIGN);
				}
				break;
			case 2:
				{
				setState(1233);
				projectItemDefinition();
				setState(1238);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,130,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(1234);
						match(COMMA);
						setState(1235);
						projectItemDefinition();
						}
						} 
					}
					setState(1240);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,130,_ctx);
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
			setState(1251);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,134,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1243);
				overWindowItem();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1244);
				expression();
				setState(1249);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,133,_ctx) ) {
				case 1:
					{
					setState(1246);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==KW_AS) {
						{
						setState(1245);
						match(KW_AS);
						}
					}

					setState(1248);
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
			setState(1265);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,135,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1253);
				primaryExpression(0);
				setState(1254);
				match(KW_OVER);
				setState(1255);
				windowSpec();
				setState(1256);
				match(KW_AS);
				setState(1257);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1259);
				primaryExpression(0);
				setState(1260);
				match(KW_OVER);
				setState(1261);
				errorCapturingIdentifier();
				setState(1262);
				match(KW_AS);
				setState(1263);
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
			setState(1267);
			match(KW_FROM);
			setState(1268);
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
			setState(1281);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,137,_ctx) ) {
			case 1:
				{
				setState(1271);
				tableReference();
				setState(1276);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,136,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(1272);
						match(COMMA);
						setState(1273);
						tableReference();
						}
						} 
					}
					setState(1278);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,136,_ctx);
				}
				}
				break;
			case 2:
				{
				setState(1279);
				inlineDataValueClause();
				}
				break;
			case 3:
				{
				setState(1280);
				windoTVFClause();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(1304);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,143,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(1302);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,142,_ctx) ) {
					case 1:
						{
						_localctx = new TableExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_tableExpression);
						setState(1283);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(1284);
						match(KW_CROSS);
						setState(1285);
						match(KW_JOIN);
						setState(1286);
						tableExpression(4);
						}
						break;
					case 2:
						{
						_localctx = new TableExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_tableExpression);
						setState(1287);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(1289);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==KW_NATURAL) {
							{
							setState(1288);
							match(KW_NATURAL);
							}
						}

						setState(1292);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (((((_la - 253)) & ~0x3f) == 0 && ((1L << (_la - 253)) & ((1L << (KW_FULL - 253)) | (1L << (KW_INNER - 253)) | (1L << (KW_LEFT - 253)))) != 0) || _la==KW_RIGHT) {
							{
							setState(1291);
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

						setState(1295);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==KW_OUTER) {
							{
							setState(1294);
							match(KW_OUTER);
							}
						}

						setState(1297);
						match(KW_JOIN);
						setState(1298);
						tableExpression(0);
						setState(1300);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,141,_ctx) ) {
						case 1:
							{
							setState(1299);
							joinCondition();
							}
							break;
						}
						}
						break;
					}
					} 
				}
				setState(1306);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,143,_ctx);
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
			setState(1307);
			tablePrimary();
			setState(1309);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,144,_ctx) ) {
			case 1:
				{
				setState(1308);
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
			setState(1352);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,151,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1312);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_TABLE) {
					{
					setState(1311);
					match(KW_TABLE);
					}
				}

				setState(1314);
				tablePath();
				setState(1316);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,146,_ctx) ) {
				case 1:
					{
					setState(1315);
					systemTimePeriod();
					}
					break;
				}
				setState(1322);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,148,_ctx) ) {
				case 1:
					{
					setState(1319);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==KW_AS) {
						{
						setState(1318);
						match(KW_AS);
						}
					}

					setState(1321);
					correlationName();
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1324);
				match(KW_LATERAL);
				setState(1325);
				match(KW_TABLE);
				setState(1326);
				match(LR_BRACKET);
				setState(1327);
				functionName();
				setState(1328);
				match(LR_BRACKET);
				setState(1329);
				functionParam();
				setState(1334);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1330);
					match(COMMA);
					setState(1331);
					functionParam();
					}
					}
					setState(1336);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1337);
				match(RR_BRACKET);
				setState(1338);
				match(RR_BRACKET);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1341);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_LATERAL) {
					{
					setState(1340);
					match(KW_LATERAL);
					}
				}

				setState(1343);
				match(LR_BRACKET);
				setState(1344);
				queryStatement(0);
				setState(1345);
				match(RR_BRACKET);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1347);
				match(KW_UNNEST);
				setState(1348);
				match(LR_BRACKET);
				setState(1349);
				expression();
				setState(1350);
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
			setState(1354);
			match(KW_FOR);
			setState(1355);
			match(KW_SYSTEM_TIME);
			setState(1356);
			match(KW_AS);
			setState(1357);
			match(KW_OF);
			setState(1358);
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
			setState(1360);
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
			setState(1362);
			match(LR_BRACKET);
			setState(1363);
			valuesDefinition();
			setState(1364);
			match(RR_BRACKET);
			setState(1365);
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
			setState(1367);
			match(KW_TABLE);
			setState(1368);
			match(LR_BRACKET);
			setState(1369);
			windowTVFExression();
			setState(1370);
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
			setState(1372);
			windoTVFName();
			setState(1373);
			match(LR_BRACKET);
			setState(1374);
			windowTVFParam();
			setState(1379);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1375);
				match(COMMA);
				setState(1376);
				windowTVFParam();
				}
				}
				setState(1381);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1382);
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
			setState(1384);
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
			setState(1401);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,153,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1386);
				match(KW_TABLE);
				setState(1387);
				timeAttrColumn();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1388);
				columnDescriptor();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1389);
				timeIntervalExpression();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1390);
				match(KW_DATA);
				setState(1391);
				match(DOUBLE_RIGHT_ARROW);
				setState(1392);
				match(KW_TABLE);
				setState(1393);
				timeAttrColumn();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1394);
				match(KW_TIMECOL);
				setState(1395);
				match(DOUBLE_RIGHT_ARROW);
				setState(1396);
				columnDescriptor();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1397);
				timeIntervalParamName();
				setState(1398);
				match(DOUBLE_RIGHT_ARROW);
				setState(1399);
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
			setState(1403);
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
		enterRule(_localctx, 200, RULE_columnDescriptor);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1405);
			match(KW_DESCRIPTOR);
			setState(1406);
			match(LR_BRACKET);
			setState(1407);
			uid();
			setState(1408);
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
			setState(1424);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_ON:
				enterOuterAlt(_localctx, 1);
				{
				setState(1410);
				match(KW_ON);
				setState(1411);
				booleanExpression(0);
				}
				break;
			case KW_USING:
				enterOuterAlt(_localctx, 2);
				{
				setState(1412);
				match(KW_USING);
				setState(1413);
				match(LR_BRACKET);
				setState(1414);
				uid();
				setState(1419);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1415);
					match(COMMA);
					setState(1416);
					uid();
					}
					}
					setState(1421);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1422);
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
			setState(1426);
			match(KW_WHERE);
			setState(1427);
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
			setState(1429);
			match(KW_GROUP);
			setState(1430);
			match(KW_BY);
			setState(1431);
			groupItemDefinition();
			setState(1436);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,156,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1432);
					match(COMMA);
					setState(1433);
					groupItemDefinition();
					}
					} 
				}
				setState(1438);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,156,_ctx);
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
			setState(1478);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,160,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1439);
				expression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1440);
				groupWindowFunction();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1441);
				match(LR_BRACKET);
				setState(1442);
				match(RR_BRACKET);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1443);
				match(LR_BRACKET);
				setState(1444);
				expression();
				setState(1449);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1445);
					match(COMMA);
					setState(1446);
					expression();
					}
					}
					setState(1451);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1452);
				match(RR_BRACKET);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1454);
				groupingSetsNotaionName();
				setState(1455);
				match(LR_BRACKET);
				setState(1456);
				expression();
				setState(1461);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1457);
					match(COMMA);
					setState(1458);
					expression();
					}
					}
					setState(1463);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1464);
				match(RR_BRACKET);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1466);
				groupingSets();
				setState(1467);
				match(LR_BRACKET);
				setState(1468);
				groupItemDefinition();
				setState(1473);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1469);
					match(COMMA);
					setState(1470);
					groupItemDefinition();
					}
					}
					setState(1475);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1476);
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
			setState(1480);
			match(KW_GROUPING);
			setState(1481);
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
			setState(1483);
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
			setState(1485);
			groupWindowFunctionName();
			setState(1486);
			match(LR_BRACKET);
			setState(1487);
			timeAttrColumn();
			setState(1488);
			match(COMMA);
			setState(1489);
			timeIntervalExpression();
			setState(1490);
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
			setState(1492);
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
			setState(1494);
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
			setState(1496);
			match(KW_HAVING);
			setState(1497);
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
			setState(1499);
			match(KW_WINDOW);
			setState(1500);
			namedWindow();
			setState(1505);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,161,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1501);
					match(COMMA);
					setState(1502);
					namedWindow();
					}
					} 
				}
				setState(1507);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,161,_ctx);
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
			setState(1508);
			((NamedWindowContext)_localctx).name = errorCapturingIdentifier();
			setState(1509);
			match(KW_AS);
			setState(1510);
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
			setState(1513);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << KW_ADD) | (1L << KW_ADMIN) | (1L << KW_AFTER) | (1L << KW_ANALYZE) | (1L << KW_ASC) | (1L << KW_BEFORE) | (1L << KW_BYTES) | (1L << KW_CASCADE) | (1L << KW_CATALOG) | (1L << KW_CATALOGS) | (1L << KW_CENTURY) | (1L << KW_CHAIN) | (1L << KW_CHANGELOG_MODE) | (1L << KW_CHARACTERS) | (1L << KW_COMMENT) | (1L << KW_COMPACT) | (1L << KW_COLUMNS) | (1L << KW_CONSTRAINTS) | (1L << KW_CONSTRUCTOR) | (1L << KW_CUMULATE) | (1L << KW_DATA) | (1L << KW_DATABASE) | (1L << KW_DATABASES) | (1L << KW_DAYS) | (1L << KW_DECADE) | (1L << KW_DEFINED) | (1L << KW_DESC) | (1L << KW_DESCRIPTOR) | (1L << KW_DIV) | (1L << KW_ENCODING) | (1L << KW_ENFORCED) | (1L << KW_ENGINE) | (1L << KW_ERROR) | (1L << KW_ESTIMATED_COST) | (1L << KW_EXCEPTION) | (1L << KW_EXCLUDE) | (1L << KW_EXCLUDING) | (1L << KW_EXTENDED) | (1L << KW_FILE) | (1L << KW_FINAL) | (1L << KW_FIRST) | (1L << KW_FOLLOWING) | (1L << KW_FORMAT) | (1L << KW_FORTRAN) | (1L << KW_FOUND) | (1L << KW_FRAC_SECOND) | (1L << KW_FUNCTIONS) | (1L << KW_GENERAL) | (1L << KW_GENERATED) | (1L << KW_GO) | (1L << KW_GOTO) | (1L << KW_GRANTED) | (1L << KW_HOP) | (1L << KW_HOURS) | (1L << KW_IF) | (1L << KW_IGNORE) | (1L << KW_INCREMENT) | (1L << KW_INPUT) | (1L << KW_INVOKER))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (KW_JAR - 64)) | (1L << (KW_JARS - 64)) | (1L << (KW_JAVA - 64)) | (1L << (KW_JSON - 64)) | (1L << (KW_JSON_EXECUTION_PLAN - 64)) | (1L << (KW_KEY - 64)) | (1L << (KW_KEY_MEMBER - 64)) | (1L << (KW_KEY_TYPE - 64)) | (1L << (KW_LABEL - 64)) | (1L << (KW_LAST - 64)) | (1L << (KW_LENGTH - 64)) | (1L << (KW_LEVEL - 64)) | (1L << (KW_LOAD - 64)) | (1L << (KW_MAP - 64)) | (1L << (KW_MICROSECOND - 64)) | (1L << (KW_MILLENNIUM - 64)) | (1L << (KW_MILLISECOND - 64)) | (1L << (KW_MINUTES - 64)) | (1L << (KW_MINVALUE - 64)) | (1L << (KW_MODIFY - 64)) | (1L << (KW_MODULES - 64)) | (1L << (KW_MONTHS - 64)) | (1L << (KW_NANOSECOND - 64)) | (1L << (KW_NULLS - 64)) | (1L << (KW_NUMBER - 64)) | (1L << (KW_OPTION - 64)) | (1L << (KW_OPTIONS - 64)) | (1L << (KW_ORDERING - 64)) | (1L << (KW_OUTPUT - 64)) | (1L << (KW_OVERWRITE - 64)) | (1L << (KW_OVERWRITING - 64)) | (1L << (KW_PARTITIONED - 64)) | (1L << (KW_PARTITIONS - 64)) | (1L << (KW_PASSING - 64)) | (1L << (KW_PAST - 64)) | (1L << (KW_PATH - 64)) | (1L << (KW_PLACING - 64)) | (1L << (KW_PLAN - 64)) | (1L << (KW_PRECEDING - 64)) | (1L << (KW_PRESERVE - 64)) | (1L << (KW_PRIOR - 64)) | (1L << (KW_PRIVILEGES - 64)) | (1L << (KW_PUBLIC - 64)) | (1L << (KW_PYTHON - 64)) | (1L << (KW_PYTHON_FILES - 64)) | (1L << (KW_PYTHON_REQUIREMENTS - 64)) | (1L << (KW_PYTHON_DEPENDENCIES - 64)) | (1L << (KW_PYTHON_JAR - 64)) | (1L << (KW_PYTHON_ARCHIVES - 64)) | (1L << (KW_PYTHON_PARAMETER - 64)) | (1L << (KW_QUARTER - 64)) | (1L << (KW_RAW - 64)) | (1L << (KW_READ - 64)) | (1L << (KW_RELATIVE - 64)) | (1L << (KW_REMOVE - 64)) | (1L << (KW_RENAME - 64)) | (1L << (KW_REPLACE - 64)) | (1L << (KW_RESPECT - 64)) | (1L << (KW_RESTART - 64)) | (1L << (KW_RESTRICT - 64)) | (1L << (KW_ROLE - 64)) | (1L << (KW_ROW_COUNT - 64)) | (1L << (KW_SCALA - 64)) | (1L << (KW_SCALAR - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (KW_SCALE - 128)) | (1L << (KW_SCHEMA - 128)) | (1L << (KW_SECONDS - 128)) | (1L << (KW_SECTION - 128)) | (1L << (KW_SECURITY - 128)) | (1L << (KW_SELF - 128)) | (1L << (KW_SERVER - 128)) | (1L << (KW_SERVER_NAME - 128)) | (1L << (KW_SESSION - 128)) | (1L << (KW_SETS - 128)) | (1L << (KW_SIMPLE - 128)) | (1L << (KW_SIZE - 128)) | (1L << (KW_SLIDE - 128)) | (1L << (KW_SOURCE - 128)) | (1L << (KW_SPACE - 128)) | (1L << (KW_STATE - 128)) | (1L << (KW_STATEMENT - 128)) | (1L << (KW_STEP - 128)) | (1L << (KW_STRING - 128)) | (1L << (KW_STRUCTURE - 128)) | (1L << (KW_STYLE - 128)) | (1L << (KW_TABLES - 128)) | (1L << (KW_TEMPORARY - 128)) | (1L << (KW_TIMECOL - 128)) | (1L << (KW_TIMESTAMP_LTZ - 128)) | (1L << (KW_TIMESTAMPADD - 128)) | (1L << (KW_TIMESTAMPDIFF - 128)) | (1L << (KW_TRANSFORM - 128)) | (1L << (KW_TUMBLE - 128)) | (1L << (KW_TYPE - 128)) | (1L << (KW_UNDER - 128)) | (1L << (KW_UNLOAD - 128)) | (1L << (KW_USAGE - 128)) | (1L << (KW_USE - 128)) | (1L << (KW_UTF16 - 128)) | (1L << (KW_UTF32 - 128)) | (1L << (KW_UTF8 - 128)) | (1L << (KW_VERSION - 128)) | (1L << (KW_VIEW - 128)) | (1L << (KW_VIEWS - 128)) | (1L << (KW_VIRTUAL - 128)) | (1L << (KW_WATERMARK - 128)) | (1L << (KW_WATERMARKS - 128)) | (1L << (KW_WEEK - 128)) | (1L << (KW_WORK - 128)) | (1L << (KW_WRAPPER - 128)) | (1L << (KW_YEARS - 128)) | (1L << (KW_ZONE - 128)))) != 0) || ((((_la - 408)) & ~0x3f) == 0 && ((1L << (_la - 408)) & ((1L << (STRING_LITERAL - 408)) | (1L << (DIG_LITERAL - 408)) | (1L << (ID_LITERAL - 408)))) != 0)) {
				{
				setState(1512);
				((WindowSpecContext)_localctx).name = errorCapturingIdentifier();
				}
			}

			setState(1515);
			match(LR_BRACKET);
			setState(1517);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_PARTITION) {
				{
				setState(1516);
				partitionByClause();
				}
			}

			setState(1520);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_ORDER) {
				{
				setState(1519);
				orderByCaluse();
				}
			}

			setState(1523);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_RANGE || _la==KW_ROWS) {
				{
				setState(1522);
				windowFrame();
				}
			}

			setState(1525);
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
			setState(1527);
			match(KW_MATCH_RECOGNIZE);
			setState(1528);
			match(LR_BRACKET);
			setState(1530);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_PARTITION) {
				{
				setState(1529);
				partitionByClause();
				}
			}

			setState(1533);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_ORDER) {
				{
				setState(1532);
				orderByCaluse();
				}
			}

			setState(1536);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_MEASURES) {
				{
				setState(1535);
				measuresClause();
				}
			}

			setState(1539);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_ALL || _la==KW_ONE) {
				{
				setState(1538);
				outputMode();
				}
			}

			setState(1542);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_AFTER) {
				{
				setState(1541);
				afterMatchStrategy();
				}
			}

			setState(1545);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_PATTERN) {
				{
				setState(1544);
				patternDefination();
				}
			}

			setState(1547);
			patternVariablesDefination();
			setState(1548);
			match(RR_BRACKET);
			setState(1553);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,173,_ctx) ) {
			case 1:
				{
				setState(1550);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_AS) {
					{
					setState(1549);
					match(KW_AS);
					}
				}

				setState(1552);
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
			setState(1555);
			match(KW_ORDER);
			setState(1556);
			match(KW_BY);
			setState(1557);
			orderItemDefition();
			setState(1562);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,174,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1558);
					match(COMMA);
					setState(1559);
					orderItemDefition();
					}
					} 
				}
				setState(1564);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,174,_ctx);
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
			setState(1565);
			expression();
			setState(1567);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,175,_ctx) ) {
			case 1:
				{
				setState(1566);
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
			setState(1571);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,176,_ctx) ) {
			case 1:
				{
				setState(1569);
				match(KW_NULLS);
				setState(1570);
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
			setState(1573);
			match(KW_LIMIT);
			setState(1576);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_ALL:
				{
				setState(1574);
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
				setState(1575);
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
			setState(1578);
			match(KW_PARTITION);
			setState(1579);
			match(KW_BY);
			setState(1580);
			expression();
			setState(1585);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1581);
				match(COMMA);
				setState(1582);
				expression();
				}
				}
				setState(1587);
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
			setState(1604);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,179,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(1588);
				match(ASTERISK_SIGN);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(1589);
				match(ADD_SIGN);
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				{
				setState(1590);
				match(QUESTION_MARK_SIGN);
				}
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				{
				setState(1591);
				match(LB_BRACKET);
				setState(1592);
				match(DIG_LITERAL);
				setState(1593);
				match(COMMA);
				setState(1594);
				match(DIG_LITERAL);
				setState(1595);
				match(RB_BRACKET);
				}
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				{
				setState(1596);
				match(LB_BRACKET);
				setState(1597);
				match(DIG_LITERAL);
				setState(1598);
				match(COMMA);
				setState(1599);
				match(RB_BRACKET);
				}
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				{
				setState(1600);
				match(LB_BRACKET);
				setState(1601);
				match(COMMA);
				setState(1602);
				match(DIG_LITERAL);
				setState(1603);
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
			setState(1606);
			match(KW_MEASURES);
			setState(1607);
			projectItemDefinition();
			setState(1612);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1608);
				match(COMMA);
				setState(1609);
				projectItemDefinition();
				}
				}
				setState(1614);
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
			setState(1615);
			match(KW_PATTERN);
			setState(1616);
			match(LR_BRACKET);
			setState(1618); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(1617);
				patternVariable();
				}
				}
				setState(1620); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==DIG_LITERAL || _la==ID_LITERAL );
			setState(1622);
			match(RR_BRACKET);
			setState(1624);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_WITHIN) {
				{
				setState(1623);
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
			setState(1626);
			unquotedIdentifier();
			setState(1628);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 389)) & ~0x3f) == 0 && ((1L << (_la - 389)) & ((1L << (LB_BRACKET - 389)) | (1L << (ASTERISK_SIGN - 389)) | (1L << (ADD_SIGN - 389)) | (1L << (QUESTION_MARK_SIGN - 389)))) != 0)) {
				{
				setState(1627);
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
			setState(1638);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_ALL:
				enterOuterAlt(_localctx, 1);
				{
				setState(1630);
				match(KW_ALL);
				setState(1631);
				match(KW_ROWS);
				setState(1632);
				match(KW_PER);
				setState(1633);
				match(KW_MATCH);
				}
				break;
			case KW_ONE:
				enterOuterAlt(_localctx, 2);
				{
				setState(1634);
				match(KW_ONE);
				setState(1635);
				match(KW_ROW);
				setState(1636);
				match(KW_PER);
				setState(1637);
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
			setState(1664);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,185,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1640);
				match(KW_AFTER);
				setState(1641);
				match(KW_MATCH);
				setState(1642);
				match(KW_SKIP);
				setState(1643);
				match(KW_PAST);
				setState(1644);
				match(KW_LAST);
				setState(1645);
				match(KW_ROW);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1646);
				match(KW_AFTER);
				setState(1647);
				match(KW_MATCH);
				setState(1648);
				match(KW_SKIP);
				setState(1649);
				match(KW_TO);
				setState(1650);
				match(KW_NEXT);
				setState(1651);
				match(KW_ROW);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
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
				match(KW_LAST);
				setState(1657);
				unquotedIdentifier();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
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
				match(KW_FIRST);
				setState(1663);
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
			setState(1666);
			match(KW_DEFINE);
			setState(1667);
			projectItemDefinition();
			setState(1672);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1668);
				match(COMMA);
				setState(1669);
				projectItemDefinition();
				}
				}
				setState(1674);
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
			setState(1684);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_RANGE:
				enterOuterAlt(_localctx, 1);
				{
				setState(1675);
				match(KW_RANGE);
				setState(1676);
				match(KW_BETWEEN);
				setState(1677);
				timeIntervalExpression();
				setState(1678);
				frameBound();
				}
				break;
			case KW_ROWS:
				enterOuterAlt(_localctx, 2);
				{
				setState(1680);
				match(KW_ROWS);
				setState(1681);
				match(KW_BETWEEN);
				setState(1682);
				match(DIG_LITERAL);
				setState(1683);
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
			setState(1686);
			match(KW_PRECEDING);
			setState(1687);
			match(KW_AND);
			setState(1688);
			match(KW_CURRENT);
			setState(1689);
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
			setState(1691);
			match(KW_WITHIN);
			setState(1692);
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
			setState(1694);
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
			setState(1708);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,189,_ctx) ) {
			case 1:
				{
				_localctx = new LogicalNotContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(1697);
				match(KW_NOT);
				setState(1698);
				booleanExpression(6);
				}
				break;
			case 2:
				{
				_localctx = new ExistsContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1699);
				match(KW_EXISTS);
				setState(1700);
				match(LR_BRACKET);
				setState(1701);
				queryStatement(0);
				setState(1702);
				match(RR_BRACKET);
				}
				break;
			case 3:
				{
				_localctx = new PredicatedContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1704);
				valueExpression(0);
				setState(1706);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,188,_ctx) ) {
				case 1:
					{
					setState(1705);
					predicate();
					}
					break;
				}
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(1724);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,192,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(1722);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,191,_ctx) ) {
					case 1:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						((LogicalBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_booleanExpression);
						setState(1710);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(1711);
						((LogicalBinaryContext)_localctx).operator = match(KW_AND);
						setState(1712);
						((LogicalBinaryContext)_localctx).right = booleanExpression(4);
						}
						break;
					case 2:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						((LogicalBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_booleanExpression);
						setState(1713);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(1714);
						((LogicalBinaryContext)_localctx).operator = match(KW_OR);
						setState(1715);
						((LogicalBinaryContext)_localctx).right = booleanExpression(3);
						}
						break;
					case 3:
						{
						_localctx = new LogicalNestedContext(new BooleanExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_booleanExpression);
						setState(1716);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(1717);
						match(KW_IS);
						setState(1719);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==KW_NOT) {
							{
							setState(1718);
							match(KW_NOT);
							}
						}

						setState(1721);
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
				setState(1726);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,192,_ctx);
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
			setState(1794);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,203,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1728);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1727);
					match(KW_NOT);
					}
				}

				setState(1730);
				((PredicateContext)_localctx).kind = match(KW_BETWEEN);
				setState(1732);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_ASYMMETRIC || _la==KW_SYMMETRIC) {
					{
					setState(1731);
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

				setState(1734);
				((PredicateContext)_localctx).lower = valueExpression(0);
				setState(1735);
				match(KW_AND);
				setState(1736);
				((PredicateContext)_localctx).upper = valueExpression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1739);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1738);
					match(KW_NOT);
					}
				}

				setState(1741);
				((PredicateContext)_localctx).kind = match(KW_IN);
				setState(1742);
				match(LR_BRACKET);
				setState(1743);
				expression();
				setState(1748);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1744);
					match(COMMA);
					setState(1745);
					expression();
					}
					}
					setState(1750);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1751);
				match(RR_BRACKET);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1754);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1753);
					match(KW_NOT);
					}
				}

				setState(1756);
				((PredicateContext)_localctx).kind = match(KW_IN);
				setState(1757);
				match(LR_BRACKET);
				setState(1758);
				queryStatement(0);
				setState(1759);
				match(RR_BRACKET);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1761);
				((PredicateContext)_localctx).kind = match(KW_EXISTS);
				setState(1762);
				match(LR_BRACKET);
				setState(1763);
				queryStatement(0);
				setState(1764);
				match(RR_BRACKET);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
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
				((PredicateContext)_localctx).kind = match(KW_RLIKE);
				setState(1770);
				((PredicateContext)_localctx).pattern = valueExpression(0);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1771);
				likePredicate();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(1772);
				match(KW_IS);
				setState(1774);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1773);
					match(KW_NOT);
					}
				}

				setState(1776);
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
				setState(1777);
				match(KW_IS);
				setState(1779);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1778);
					match(KW_NOT);
					}
				}

				setState(1781);
				((PredicateContext)_localctx).kind = match(KW_DISTINCT);
				setState(1782);
				match(KW_FROM);
				setState(1783);
				((PredicateContext)_localctx).right = valueExpression(0);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
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
				((PredicateContext)_localctx).kind = match(KW_SIMILAR);
				setState(1788);
				match(KW_TO);
				setState(1789);
				((PredicateContext)_localctx).right = valueExpression(0);
				setState(1792);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,202,_ctx) ) {
				case 1:
					{
					setState(1790);
					match(KW_ESCAPE);
					setState(1791);
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
			setState(1825);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,209,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1797);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1796);
					match(KW_NOT);
					}
				}

				setState(1799);
				((LikePredicateContext)_localctx).kind = match(KW_LIKE);
				setState(1800);
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
				setState(1814);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,206,_ctx) ) {
				case 1:
					{
					setState(1801);
					match(LR_BRACKET);
					setState(1802);
					match(RR_BRACKET);
					}
					break;
				case 2:
					{
					setState(1803);
					match(LR_BRACKET);
					setState(1804);
					expression();
					setState(1809);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(1805);
						match(COMMA);
						setState(1806);
						expression();
						}
						}
						setState(1811);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					setState(1812);
					match(RR_BRACKET);
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1817);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(1816);
					match(KW_NOT);
					}
				}

				setState(1819);
				((LikePredicateContext)_localctx).kind = match(KW_LIKE);
				setState(1820);
				((LikePredicateContext)_localctx).pattern = valueExpression(0);
				setState(1823);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,208,_ctx) ) {
				case 1:
					{
					setState(1821);
					match(KW_ESCAPE);
					setState(1822);
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
			setState(1831);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,210,_ctx) ) {
			case 1:
				{
				_localctx = new ValueExpressionDefaultContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(1828);
				primaryExpression(0);
				}
				break;
			case 2:
				{
				_localctx = new ArithmeticUnaryContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1829);
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
				setState(1830);
				valueExpression(8);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(1856);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,212,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(1854);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,211,_ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1833);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(1834);
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
						setState(1835);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(8);
						}
						break;
					case 2:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1836);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(1837);
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
						setState(1838);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(7);
						}
						break;
					case 3:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1839);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(1840);
						((ArithmeticBinaryContext)_localctx).operator = match(BIT_AND_OP);
						setState(1841);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(6);
						}
						break;
					case 4:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1842);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(1843);
						((ArithmeticBinaryContext)_localctx).operator = match(BIT_XOR_OP);
						setState(1844);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(5);
						}
						break;
					case 5:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1845);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(1846);
						((ArithmeticBinaryContext)_localctx).operator = match(BIT_OR_OP);
						setState(1847);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(4);
						}
						break;
					case 6:
						{
						_localctx = new ComparisonContext(new ValueExpressionContext(_parentctx, _parentState));
						((ComparisonContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1848);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(1849);
						comparisonOperator();
						setState(1850);
						((ComparisonContext)_localctx).right = valueExpression(3);
						}
						break;
					case 7:
						{
						_localctx = new ArithmeticBinaryAlternateContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryAlternateContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1852);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(1853);
						((ArithmeticBinaryAlternateContext)_localctx).right = match(SLASH_TEXT);
						}
						break;
					}
					} 
				}
				setState(1858);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,212,_ctx);
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
		int _startState = 268;
		enterRecursionRule(_localctx, 268, RULE_primaryExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1950);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,222,_ctx) ) {
			case 1:
				{
				_localctx = new SearchedCaseContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(1860);
				match(KW_CASE);
				setState(1862); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(1861);
					whenClause();
					}
					}
					setState(1864); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==KW_WHEN );
				setState(1868);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_ELSE) {
					{
					setState(1866);
					match(KW_ELSE);
					setState(1867);
					((SearchedCaseContext)_localctx).elseExpression = expression();
					}
				}

				setState(1870);
				match(KW_END);
				}
				break;
			case 2:
				{
				_localctx = new SimpleCaseContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1872);
				match(KW_CASE);
				setState(1873);
				((SimpleCaseContext)_localctx).value = expression();
				setState(1875); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(1874);
					whenClause();
					}
					}
					setState(1877); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==KW_WHEN );
				setState(1881);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_ELSE) {
					{
					setState(1879);
					match(KW_ELSE);
					setState(1880);
					((SimpleCaseContext)_localctx).elseExpression = expression();
					}
				}

				setState(1883);
				match(KW_END);
				}
				break;
			case 3:
				{
				_localctx = new CastContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1885);
				match(KW_CAST);
				setState(1886);
				match(LR_BRACKET);
				setState(1887);
				expression();
				setState(1888);
				match(KW_AS);
				setState(1889);
				columnType();
				setState(1890);
				match(RR_BRACKET);
				}
				break;
			case 4:
				{
				_localctx = new FirstContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1892);
				match(KW_FIRST);
				setState(1893);
				match(LR_BRACKET);
				setState(1894);
				expression();
				setState(1897);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_IGNORE) {
					{
					setState(1895);
					match(KW_IGNORE);
					setState(1896);
					match(KW_NULLS);
					}
				}

				setState(1899);
				match(RR_BRACKET);
				}
				break;
			case 5:
				{
				_localctx = new LastContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1901);
				match(KW_LAST);
				setState(1902);
				match(LR_BRACKET);
				setState(1903);
				expression();
				setState(1906);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_IGNORE) {
					{
					setState(1904);
					match(KW_IGNORE);
					setState(1905);
					match(KW_NULLS);
					}
				}

				setState(1908);
				match(RR_BRACKET);
				}
				break;
			case 6:
				{
				_localctx = new PositionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1910);
				match(KW_POSITION);
				setState(1911);
				match(LR_BRACKET);
				setState(1912);
				((PositionContext)_localctx).substr = valueExpression(0);
				setState(1913);
				match(KW_IN);
				setState(1914);
				((PositionContext)_localctx).str = valueExpression(0);
				setState(1915);
				match(RR_BRACKET);
				}
				break;
			case 7:
				{
				_localctx = new ConstantDefaultContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1917);
				constant();
				}
				break;
			case 8:
				{
				_localctx = new StarContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1918);
				match(ASTERISK_SIGN);
				}
				break;
			case 9:
				{
				_localctx = new StarContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1919);
				uid();
				setState(1920);
				match(DOT);
				setState(1921);
				match(ASTERISK_SIGN);
				}
				break;
			case 10:
				{
				_localctx = new SubqueryExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1923);
				match(LR_BRACKET);
				setState(1924);
				queryStatement(0);
				setState(1925);
				match(RR_BRACKET);
				}
				break;
			case 11:
				{
				_localctx = new FunctionCallContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1927);
				functionName();
				setState(1928);
				match(LR_BRACKET);
				setState(1940);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << KW_ADD) | (1L << KW_ADMIN) | (1L << KW_AFTER) | (1L << KW_ANALYZE) | (1L << KW_ASC) | (1L << KW_BEFORE) | (1L << KW_BYTES) | (1L << KW_CASCADE) | (1L << KW_CATALOG) | (1L << KW_CATALOGS) | (1L << KW_CENTURY) | (1L << KW_CHAIN) | (1L << KW_CHANGELOG_MODE) | (1L << KW_CHARACTERS) | (1L << KW_COMMENT) | (1L << KW_COMPACT) | (1L << KW_COLUMNS) | (1L << KW_CONSTRAINTS) | (1L << KW_CONSTRUCTOR) | (1L << KW_CUMULATE) | (1L << KW_DATA) | (1L << KW_DATABASE) | (1L << KW_DATABASES) | (1L << KW_DAYS) | (1L << KW_DECADE) | (1L << KW_DEFINED) | (1L << KW_DESC) | (1L << KW_DESCRIPTOR) | (1L << KW_DIV) | (1L << KW_ENCODING) | (1L << KW_ENFORCED) | (1L << KW_ENGINE) | (1L << KW_EPOCH) | (1L << KW_ERROR) | (1L << KW_ESTIMATED_COST) | (1L << KW_EXCEPTION) | (1L << KW_EXCLUDE) | (1L << KW_EXCLUDING) | (1L << KW_EXTENDED) | (1L << KW_FILE) | (1L << KW_FINAL) | (1L << KW_FIRST) | (1L << KW_FOLLOWING) | (1L << KW_FORMAT) | (1L << KW_FORTRAN) | (1L << KW_FOUND) | (1L << KW_FRAC_SECOND) | (1L << KW_FUNCTIONS) | (1L << KW_GENERAL) | (1L << KW_GENERATED) | (1L << KW_GO) | (1L << KW_GOTO) | (1L << KW_GRANTED) | (1L << KW_HOP) | (1L << KW_HOURS) | (1L << KW_IF) | (1L << KW_IGNORE) | (1L << KW_INCREMENT) | (1L << KW_INPUT) | (1L << KW_INVOKER))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (KW_JAR - 64)) | (1L << (KW_JARS - 64)) | (1L << (KW_JAVA - 64)) | (1L << (KW_JSON - 64)) | (1L << (KW_JSON_EXECUTION_PLAN - 64)) | (1L << (KW_KEY - 64)) | (1L << (KW_KEY_MEMBER - 64)) | (1L << (KW_KEY_TYPE - 64)) | (1L << (KW_LABEL - 64)) | (1L << (KW_LAST - 64)) | (1L << (KW_LENGTH - 64)) | (1L << (KW_LEVEL - 64)) | (1L << (KW_LOAD - 64)) | (1L << (KW_MAP - 64)) | (1L << (KW_MICROSECOND - 64)) | (1L << (KW_MILLENNIUM - 64)) | (1L << (KW_MILLISECOND - 64)) | (1L << (KW_MINUTES - 64)) | (1L << (KW_MINVALUE - 64)) | (1L << (KW_MODIFY - 64)) | (1L << (KW_MODULES - 64)) | (1L << (KW_MONTHS - 64)) | (1L << (KW_NANOSECOND - 64)) | (1L << (KW_NULLS - 64)) | (1L << (KW_NUMBER - 64)) | (1L << (KW_OPTION - 64)) | (1L << (KW_OPTIONS - 64)) | (1L << (KW_ORDERING - 64)) | (1L << (KW_OUTPUT - 64)) | (1L << (KW_OVERWRITE - 64)) | (1L << (KW_OVERWRITING - 64)) | (1L << (KW_PARTITIONED - 64)) | (1L << (KW_PARTITIONS - 64)) | (1L << (KW_PASSING - 64)) | (1L << (KW_PAST - 64)) | (1L << (KW_PATH - 64)) | (1L << (KW_PLACING - 64)) | (1L << (KW_PLAN - 64)) | (1L << (KW_PRECEDING - 64)) | (1L << (KW_PRESERVE - 64)) | (1L << (KW_PRIOR - 64)) | (1L << (KW_PRIVILEGES - 64)) | (1L << (KW_PUBLIC - 64)) | (1L << (KW_PYTHON - 64)) | (1L << (KW_PYTHON_FILES - 64)) | (1L << (KW_PYTHON_REQUIREMENTS - 64)) | (1L << (KW_PYTHON_DEPENDENCIES - 64)) | (1L << (KW_PYTHON_JAR - 64)) | (1L << (KW_PYTHON_ARCHIVES - 64)) | (1L << (KW_PYTHON_PARAMETER - 64)) | (1L << (KW_QUARTER - 64)) | (1L << (KW_RAW - 64)) | (1L << (KW_READ - 64)) | (1L << (KW_RELATIVE - 64)) | (1L << (KW_REMOVE - 64)) | (1L << (KW_RENAME - 64)) | (1L << (KW_REPLACE - 64)) | (1L << (KW_RESPECT - 64)) | (1L << (KW_RESTART - 64)) | (1L << (KW_RESTRICT - 64)) | (1L << (KW_ROLE - 64)) | (1L << (KW_ROW_COUNT - 64)) | (1L << (KW_SCALA - 64)) | (1L << (KW_SCALAR - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (KW_SCALE - 128)) | (1L << (KW_SCHEMA - 128)) | (1L << (KW_SECONDS - 128)) | (1L << (KW_SECTION - 128)) | (1L << (KW_SECURITY - 128)) | (1L << (KW_SELF - 128)) | (1L << (KW_SERVER - 128)) | (1L << (KW_SERVER_NAME - 128)) | (1L << (KW_SESSION - 128)) | (1L << (KW_SETS - 128)) | (1L << (KW_SIMPLE - 128)) | (1L << (KW_SIZE - 128)) | (1L << (KW_SLIDE - 128)) | (1L << (KW_SOURCE - 128)) | (1L << (KW_SPACE - 128)) | (1L << (KW_STATE - 128)) | (1L << (KW_STATEMENT - 128)) | (1L << (KW_STEP - 128)) | (1L << (KW_STRING - 128)) | (1L << (KW_STRUCTURE - 128)) | (1L << (KW_STYLE - 128)) | (1L << (KW_TABLES - 128)) | (1L << (KW_TEMPORARY - 128)) | (1L << (KW_TIMECOL - 128)) | (1L << (KW_TIMESTAMP_LTZ - 128)) | (1L << (KW_TIMESTAMPADD - 128)) | (1L << (KW_TIMESTAMPDIFF - 128)) | (1L << (KW_TRANSFORM - 128)) | (1L << (KW_TUMBLE - 128)) | (1L << (KW_TYPE - 128)) | (1L << (KW_UNDER - 128)) | (1L << (KW_UNLOAD - 128)) | (1L << (KW_USAGE - 128)) | (1L << (KW_USE - 128)) | (1L << (KW_UTF16 - 128)) | (1L << (KW_UTF32 - 128)) | (1L << (KW_UTF8 - 128)) | (1L << (KW_VERSION - 128)) | (1L << (KW_VIEW - 128)) | (1L << (KW_VIEWS - 128)) | (1L << (KW_VIRTUAL - 128)) | (1L << (KW_WATERMARK - 128)) | (1L << (KW_WATERMARKS - 128)) | (1L << (KW_WEEK - 128)) | (1L << (KW_WEEKS - 128)) | (1L << (KW_WORK - 128)) | (1L << (KW_WRAPPER - 128)) | (1L << (KW_YEARS - 128)) | (1L << (KW_ZONE - 128)) | (1L << (KW_ABS - 128)) | (1L << (KW_ALL - 128)) | (1L << (KW_ARRAY - 128)) | (1L << (KW_AVG - 128)))) != 0) || ((((_la - 196)) & ~0x3f) == 0 && ((1L << (_la - 196)) & ((1L << (KW_BOTH - 196)) | (1L << (KW_CASE - 196)) | (1L << (KW_CAST - 196)) | (1L << (KW_CEIL - 196)) | (1L << (KW_COALESCE - 196)) | (1L << (KW_COLLECT - 196)) | (1L << (KW_COUNT - 196)) | (1L << (KW_DATE - 196)) | (1L << (KW_DAY - 196)) | (1L << (KW_DISTINCT - 196)) | (1L << (KW_EXISTS - 196)) | (1L << (KW_FALSE - 196)) | (1L << (KW_GROUPING - 196)))) != 0) || ((((_la - 261)) & ~0x3f) == 0 && ((1L << (_la - 261)) & ((1L << (KW_HOUR - 261)) | (1L << (KW_INTERVAL - 261)) | (1L << (KW_LAG - 261)) | (1L << (KW_LEADING - 261)) | (1L << (KW_LEFT - 261)) | (1L << (KW_MINUTE - 261)) | (1L << (KW_MONTH - 261)) | (1L << (KW_NOT - 261)) | (1L << (KW_NULL - 261)) | (1L << (KW_OVERLAY - 261)) | (1L << (KW_POSITION - 261)) | (1L << (KW_POWER - 261)) | (1L << (KW_RANK - 261)) | (1L << (KW_RIGHT - 261)))) != 0) || ((((_la - 329)) & ~0x3f) == 0 && ((1L << (_la - 329)) & ((1L << (KW_SECOND - 329)) | (1L << (KW_SUBSTRING - 329)) | (1L << (KW_SUM - 329)) | (1L << (KW_TIME - 329)) | (1L << (KW_TIMESTAMP - 329)) | (1L << (KW_TIMESTAMP_3 - 329)) | (1L << (KW_TIMESTAMP_6 - 329)) | (1L << (KW_TIMESTAMP_9 - 329)) | (1L << (KW_TRAILING - 329)) | (1L << (KW_TRUE - 329)) | (1L << (KW_TRUNCATE - 329)) | (1L << (KW_UPPER - 329)) | (1L << (KW_YEAR - 329)) | (1L << (BIT_NOT_OP - 329)) | (1L << (LR_BRACKET - 329)))) != 0) || ((((_la - 398)) & ~0x3f) == 0 && ((1L << (_la - 398)) & ((1L << (ASTERISK_SIGN - 398)) | (1L << (HYPNEN_SIGN - 398)) | (1L << (ADD_SIGN - 398)) | (1L << (STRING_LITERAL - 398)) | (1L << (DIG_LITERAL - 398)) | (1L << (REAL_LITERAL - 398)) | (1L << (BIT_STRING - 398)) | (1L << (ID_LITERAL - 398)))) != 0)) {
					{
					setState(1930);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,219,_ctx) ) {
					case 1:
						{
						setState(1929);
						setQuantifier();
						}
						break;
					}
					setState(1932);
					functionParam();
					setState(1937);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(1933);
						match(COMMA);
						setState(1934);
						functionParam();
						}
						}
						setState(1939);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(1942);
				match(RR_BRACKET);
				}
				break;
			case 12:
				{
				_localctx = new ColumnReferenceContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1944);
				identifier();
				}
				break;
			case 13:
				{
				_localctx = new DereferenceContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1945);
				dereferenceDefinition();
				}
				break;
			case 14:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1946);
				match(LR_BRACKET);
				setState(1947);
				expression();
				setState(1948);
				match(RR_BRACKET);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(1959);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,223,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new SubscriptContext(new PrimaryExpressionContext(_parentctx, _parentState));
					((SubscriptContext)_localctx).value = _prevctx;
					pushNewRecursionContext(_localctx, _startState, RULE_primaryExpression);
					setState(1952);
					if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
					setState(1953);
					match(LS_BRACKET);
					setState(1954);
					((SubscriptContext)_localctx).index = valueExpression(0);
					setState(1955);
					match(RS_BRACKET);
					}
					} 
				}
				setState(1961);
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
			setState(1965);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,224,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1962);
				reservedKeywordsUsedAsFuncName();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1963);
				nonReservedKeywords();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1964);
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
			setState(1971);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,225,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1967);
				reservedKeywordsUsedAsFuncParam();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1968);
				timeIntervalUnit();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1969);
				timePointUnit();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1970);
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
			setState(1973);
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
			setState(1975);
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
			setState(1979);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,226,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1977);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1978);
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
			setState(1981);
			match(KW_INTERVAL);
			setState(1984);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,227,_ctx) ) {
			case 1:
				{
				setState(1982);
				errorCapturingMultiUnitsInterval();
				}
				break;
			case 2:
				{
				setState(1983);
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
			setState(1986);
			multiUnitsInterval();
			setState(1988);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,228,_ctx) ) {
			case 1:
				{
				setState(1987);
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
			setState(1993); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(1990);
					intervalValue();
					setState(1991);
					timeIntervalUnit();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1995); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,229,_ctx);
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
			setState(1997);
			((ErrorCapturingUnitToUnitIntervalContext)_localctx).body = unitToUnitInterval();
			setState(2000);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,230,_ctx) ) {
			case 1:
				{
				setState(1998);
				((ErrorCapturingUnitToUnitIntervalContext)_localctx).error1 = multiUnitsInterval();
				}
				break;
			case 2:
				{
				setState(1999);
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
			setState(2002);
			((UnitToUnitIntervalContext)_localctx).value = intervalValue();
			setState(2003);
			((UnitToUnitIntervalContext)_localctx).from = timeIntervalUnit();
			setState(2004);
			match(KW_TO);
			setState(2005);
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
			setState(2012);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case HYPNEN_SIGN:
			case ADD_SIGN:
			case DIG_LITERAL:
			case REAL_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(2008);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==HYPNEN_SIGN || _la==ADD_SIGN) {
					{
					setState(2007);
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

				setState(2010);
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
				setState(2011);
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
			setState(2015);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_AS) {
				{
				setState(2014);
				match(KW_AS);
				}
			}

			setState(2017);
			identifier();
			setState(2019);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LR_BRACKET) {
				{
				setState(2018);
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
			setState(2022);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_AS) {
				{
				setState(2021);
				match(KW_AS);
				}
			}

			setState(2024);
			identifier();
			setState(2026);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,236,_ctx) ) {
			case 1:
				{
				setState(2025);
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
			setState(2028);
			identifier();
			setState(2029);
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
			setState(2038);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_MINUS:
				_localctx = new ErrorIdentContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(2033); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(2031);
					match(KW_MINUS);
					setState(2032);
					identifier();
					}
					}
					setState(2035); 
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
			setState(2040);
			match(LR_BRACKET);
			setState(2041);
			identifierSeq();
			setState(2042);
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
			setState(2044);
			identifier();
			setState(2049);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(2045);
				match(COMMA);
				setState(2046);
				identifier();
				}
				}
				setState(2051);
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
		enterRule(_localctx, 304, RULE_identifier);
		try {
			setState(2055);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DIG_LITERAL:
			case ID_LITERAL:
				_localctx = new UnquotedIdentifierAlternativeContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(2052);
				unquotedIdentifier();
				}
				break;
			case STRING_LITERAL:
				_localctx = new QuotedIdentifierAlternativeContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(2053);
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
				setState(2054);
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
		enterRule(_localctx, 306, RULE_unquotedIdentifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2057);
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
		enterRule(_localctx, 308, RULE_quotedIdentifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2059);
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
		enterRule(_localctx, 310, RULE_whenClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2061);
			match(KW_WHEN);
			setState(2062);
			((WhenClauseContext)_localctx).condition = expression();
			setState(2063);
			match(KW_THEN);
			setState(2064);
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
		enterRule(_localctx, 312, RULE_catalogPath);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2066);
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
		enterRule(_localctx, 314, RULE_databasePath);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2068);
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
		enterRule(_localctx, 316, RULE_databasePathCreate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2070);
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
		enterRule(_localctx, 318, RULE_tablePathCreate);
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
		enterRule(_localctx, 320, RULE_tablePath);
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
		enterRule(_localctx, 322, RULE_uid);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(2076);
			identifier();
			setState(2081);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,241,_ctx);
			while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1+1 ) {
					{
					{
					setState(2077);
					match(DOT);
					setState(2078);
					identifier();
					}
					} 
				}
				setState(2083);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,241,_ctx);
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
		enterRule(_localctx, 324, RULE_withOption);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2084);
			match(KW_WITH);
			setState(2085);
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
		enterRule(_localctx, 326, RULE_ifNotExists);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2087);
			match(KW_IF);
			setState(2088);
			match(KW_NOT);
			setState(2089);
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
		enterRule(_localctx, 328, RULE_ifExists);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2091);
			match(KW_IF);
			setState(2092);
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
		enterRule(_localctx, 330, RULE_tablePropertyList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2094);
			match(LR_BRACKET);
			setState(2095);
			tableProperty();
			setState(2100);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(2096);
				match(COMMA);
				setState(2097);
				tableProperty();
				}
				}
				setState(2102);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(2103);
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
		enterRule(_localctx, 332, RULE_tableProperty);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2105);
			((TablePropertyContext)_localctx).key = tablePropertyKey();
			setState(2110);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_FALSE || ((((_la - 355)) & ~0x3f) == 0 && ((1L << (_la - 355)) & ((1L << (KW_TRUE - 355)) | (1L << (EQUAL_SYMBOL - 355)) | (1L << (STRING_LITERAL - 355)) | (1L << (DIG_LITERAL - 355)) | (1L << (REAL_LITERAL - 355)))) != 0)) {
				{
				setState(2107);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==EQUAL_SYMBOL) {
					{
					setState(2106);
					match(EQUAL_SYMBOL);
					}
				}

				setState(2109);
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
		enterRule(_localctx, 334, RULE_tablePropertyKey);
		try {
			setState(2115);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,245,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2112);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2113);
				dereferenceDefinition();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2114);
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
		enterRule(_localctx, 336, RULE_tablePropertyValue);
		try {
			setState(2121);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DIG_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(2117);
				match(DIG_LITERAL);
				}
				break;
			case REAL_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(2118);
				match(REAL_LITERAL);
				}
				break;
			case KW_FALSE:
			case KW_TRUE:
				enterOuterAlt(_localctx, 3);
				{
				setState(2119);
				booleanLiteral();
				}
				break;
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 4);
				{
				setState(2120);
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
		enterRule(_localctx, 338, RULE_logicalOperator);
		try {
			setState(2129);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_AND:
				enterOuterAlt(_localctx, 1);
				{
				setState(2123);
				match(KW_AND);
				}
				break;
			case BIT_AND_OP:
				enterOuterAlt(_localctx, 2);
				{
				setState(2124);
				match(BIT_AND_OP);
				setState(2125);
				match(BIT_AND_OP);
				}
				break;
			case KW_OR:
				enterOuterAlt(_localctx, 3);
				{
				setState(2126);
				match(KW_OR);
				}
				break;
			case BIT_OR_OP:
				enterOuterAlt(_localctx, 4);
				{
				setState(2127);
				match(BIT_OR_OP);
				setState(2128);
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
		enterRule(_localctx, 340, RULE_comparisonOperator);
		try {
			setState(2145);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,248,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2131);
				match(EQUAL_SYMBOL);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2132);
				match(GREATER_SYMBOL);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2133);
				match(LESS_SYMBOL);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2134);
				match(LESS_SYMBOL);
				setState(2135);
				match(EQUAL_SYMBOL);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(2136);
				match(GREATER_SYMBOL);
				setState(2137);
				match(EQUAL_SYMBOL);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(2138);
				match(LESS_SYMBOL);
				setState(2139);
				match(GREATER_SYMBOL);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(2140);
				match(EXCLAMATION_SYMBOL);
				setState(2141);
				match(EQUAL_SYMBOL);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(2142);
				match(LESS_SYMBOL);
				setState(2143);
				match(EQUAL_SYMBOL);
				setState(2144);
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
		enterRule(_localctx, 342, RULE_bitOperator);
		try {
			setState(2154);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LESS_SYMBOL:
				enterOuterAlt(_localctx, 1);
				{
				setState(2147);
				match(LESS_SYMBOL);
				setState(2148);
				match(LESS_SYMBOL);
				}
				break;
			case GREATER_SYMBOL:
				enterOuterAlt(_localctx, 2);
				{
				setState(2149);
				match(GREATER_SYMBOL);
				setState(2150);
				match(GREATER_SYMBOL);
				}
				break;
			case BIT_AND_OP:
				enterOuterAlt(_localctx, 3);
				{
				setState(2151);
				match(BIT_AND_OP);
				}
				break;
			case BIT_XOR_OP:
				enterOuterAlt(_localctx, 4);
				{
				setState(2152);
				match(BIT_XOR_OP);
				}
				break;
			case BIT_OR_OP:
				enterOuterAlt(_localctx, 5);
				{
				setState(2153);
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
		enterRule(_localctx, 344, RULE_mathOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2156);
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
		enterRule(_localctx, 346, RULE_unaryOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2158);
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
		enterRule(_localctx, 348, RULE_constant);
		int _la;
		try {
			setState(2174);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_INTERVAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(2160);
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
				setState(2161);
				timePointLiteral();
				}
				break;
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 3);
				{
				setState(2162);
				stringLiteral();
				}
				break;
			case HYPNEN_SIGN:
			case DIG_LITERAL:
				enterOuterAlt(_localctx, 4);
				{
				setState(2164);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==HYPNEN_SIGN) {
					{
					setState(2163);
					match(HYPNEN_SIGN);
					}
				}

				setState(2166);
				decimalLiteral();
				}
				break;
			case KW_FALSE:
			case KW_TRUE:
				enterOuterAlt(_localctx, 5);
				{
				setState(2167);
				booleanLiteral();
				}
				break;
			case REAL_LITERAL:
				enterOuterAlt(_localctx, 6);
				{
				setState(2168);
				match(REAL_LITERAL);
				}
				break;
			case BIT_STRING:
				enterOuterAlt(_localctx, 7);
				{
				setState(2169);
				match(BIT_STRING);
				}
				break;
			case KW_NOT:
			case KW_NULL:
				enterOuterAlt(_localctx, 8);
				{
				setState(2171);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KW_NOT) {
					{
					setState(2170);
					match(KW_NOT);
					}
				}

				setState(2173);
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
		enterRule(_localctx, 350, RULE_timePointLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2176);
			timePointUnit();
			setState(2177);
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
		enterRule(_localctx, 352, RULE_stringLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2179);
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
		enterRule(_localctx, 354, RULE_decimalLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2181);
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
		enterRule(_localctx, 356, RULE_booleanLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2183);
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
		enterRule(_localctx, 358, RULE_setQuantifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2185);
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
		enterRule(_localctx, 360, RULE_timePointUnit);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2187);
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
		enterRule(_localctx, 362, RULE_timeIntervalUnit);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2189);
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
		enterRule(_localctx, 364, RULE_reservedKeywordsUsedAsFuncParam);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2191);
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
		enterRule(_localctx, 366, RULE_reservedKeywordsUsedAsFuncName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2193);
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
		enterRule(_localctx, 368, RULE_reservedKeywords);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2195);
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
		enterRule(_localctx, 370, RULE_nonReservedKeywords);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2197);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\u019f\u089a\4\2\t"+
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
		"\t\u00bb\3\2\3\2\3\2\3\3\3\3\3\3\3\4\3\4\3\4\7\4\u0180\n\4\f\4\16\4\u0183"+
		"\13\4\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6"+
		"\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3"+
		"\6\3\6\5\6\u01a8\n\6\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3"+
		"\b\3\b\3\b\3\b\5\b\u01ba\n\b\3\t\3\t\5\t\u01be\n\t\3\n\3\n\3\n\3\13\3"+
		"\13\3\13\3\13\5\13\u01c7\n\13\3\13\3\13\3\13\5\13\u01cc\n\13\3\f\3\f\3"+
		"\f\7\f\u01d1\n\f\f\f\16\f\u01d4\13\f\3\r\3\r\3\16\3\16\3\16\3\16\3\16"+
		"\3\16\5\16\u01de\n\16\3\17\3\17\3\17\3\17\3\17\7\17\u01e5\n\17\f\17\16"+
		"\17\u01e8\13\17\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\5\20\u01f3"+
		"\n\20\3\20\5\20\u01f6\n\20\3\20\3\20\3\20\3\20\3\20\5\20\u01fd\n\20\3"+
		"\20\3\20\3\20\3\20\3\20\3\20\5\20\u0205\n\20\3\20\3\20\3\20\5\20\u020a"+
		"\n\20\3\20\5\20\u020d\n\20\3\21\3\21\3\21\3\21\3\21\5\21\u0214\n\21\3"+
		"\22\3\22\3\22\3\22\3\23\3\23\5\23\u021c\n\23\3\24\3\24\5\24\u0220\n\24"+
		"\3\25\3\25\3\25\3\25\3\26\6\26\u0227\n\26\r\26\16\26\u0228\3\27\3\27\5"+
		"\27\u022d\n\27\3\30\3\30\5\30\u0231\n\30\3\30\3\30\5\30\u0235\n\30\3\30"+
		"\3\30\3\30\3\30\3\30\7\30\u023c\n\30\f\30\16\30\u023f\13\30\3\30\3\30"+
		"\5\30\u0243\n\30\3\30\3\30\5\30\u0247\n\30\3\30\3\30\5\30\u024b\n\30\3"+
		"\30\3\30\5\30\u024f\n\30\3\30\5\30\u0252\n\30\3\30\3\30\5\30\u0256\n\30"+
		"\3\31\3\31\3\31\5\31\u025b\n\31\3\31\3\31\3\31\3\31\5\31\u0261\n\31\3"+
		"\32\3\32\3\32\5\32\u0266\n\32\3\33\3\33\3\33\5\33\u026b\n\33\3\33\5\33"+
		"\u026e\n\33\3\34\3\34\5\34\u0272\n\34\3\35\3\35\3\35\3\35\7\35\u0278\n"+
		"\35\f\35\16\35\u027b\13\35\3\35\3\35\3\36\3\36\3\36\5\36\u0282\n\36\3"+
		"\36\3\36\5\36\u0286\n\36\3\36\3\36\5\36\u028a\n\36\3\36\3\36\5\36\u028e"+
		"\n\36\3\36\3\36\5\36\u0292\n\36\3\36\3\36\5\36\u0296\n\36\3\36\3\36\5"+
		"\36\u029a\n\36\3\36\3\36\5\36\u029e\n\36\3\36\3\36\5\36\u02a2\n\36\3\36"+
		"\3\36\5\36\u02a6\n\36\3\36\3\36\5\36\u02aa\n\36\3\36\3\36\5\36\u02ae\n"+
		"\36\3\36\3\36\5\36\u02b2\n\36\3\36\3\36\5\36\u02b6\n\36\3\36\3\36\5\36"+
		"\u02ba\n\36\3\36\3\36\5\36\u02be\n\36\3\36\3\36\5\36\u02c2\n\36\3\36\3"+
		"\36\5\36\u02c6\n\36\5\36\u02c8\n\36\3\37\3\37\3\37\3\37\3 \3 \3 \3 \5"+
		" \u02d2\n \3 \3 \3!\3!\3!\3!\5!\u02da\n!\3!\3!\3\"\3\"\3\"\3\"\3#\3#\3"+
		"#\3#\3#\3#\3#\3$\3$\3$\3$\3$\3$\3$\7$\u02f0\n$\f$\16$\u02f3\13$\3$\3$"+
		"\3%\3%\5%\u02f9\n%\3%\3%\3%\3%\5%\u02ff\n%\3%\5%\u0302\n%\3%\5%\u0305"+
		"\n%\3&\3&\3&\3\'\3\'\3\'\3\'\3\'\5\'\u030f\n\'\3\'\5\'\u0312\n\'\3(\3"+
		"(\3)\3)\3)\3)\5)\u031a\n)\3*\3*\3+\3+\3+\3+\3+\3+\3,\3,\5,\u0326\n,\3"+
		",\3,\3,\3,\3,\3,\3-\3-\3.\3.\3.\3.\3/\3/\3/\3/\3\60\3\60\3\60\3\60\7\60"+
		"\u033c\n\60\f\60\16\60\u033f\13\60\3\60\3\60\3\61\3\61\3\61\3\61\3\61"+
		"\3\61\7\61\u0349\n\61\f\61\16\61\u034c\13\61\3\61\3\61\5\61\u0350\n\61"+
		"\3\62\3\62\5\62\u0354\n\62\3\63\3\63\3\63\3\63\7\63\u035a\n\63\f\63\16"+
		"\63\u035d\13\63\3\63\5\63\u0360\n\63\3\64\3\64\3\64\3\64\5\64\u0366\n"+
		"\64\3\65\3\65\3\65\3\65\3\65\3\66\3\66\3\66\5\66\u0370\n\66\3\66\3\66"+
		"\5\66\u0374\n\66\3\66\3\66\3\67\3\67\5\67\u037a\n\67\3\67\3\67\5\67\u037e"+
		"\n\67\3\67\3\67\5\67\u0382\n\67\3\67\5\67\u0385\n\67\3\67\3\67\3\67\3"+
		"8\38\38\38\58\u038e\n8\38\38\58\u0392\n8\38\38\38\38\38\58\u0399\n8\3"+
		"8\58\u039c\n8\39\39\39\39\39\39\79\u03a4\n9\f9\169\u03a7\139\3:\3:\3;"+
		"\3;\3;\5;\u03ae\n;\3;\3;\3;\3;\3;\3;\5;\u03b6\n;\3<\3<\5<\u03ba\n<\3<"+
		"\3<\3<\3=\3=\3=\3>\3>\3>\3>\3>\3>\3>\5>\u03c9\n>\3?\3?\3?\3?\3@\3@\3@"+
		"\3@\3A\3A\3A\3B\3B\3B\3B\3B\3B\5B\u03dc\nB\3C\3C\3C\3C\3C\3D\3D\3D\3D"+
		"\5D\u03e7\nD\3D\3D\5D\u03eb\nD\3D\3D\3D\3D\3D\5D\u03f2\nD\3E\3E\3E\5E"+
		"\u03f7\nE\3E\3E\3F\3F\5F\u03fd\nF\3F\3F\5F\u0401\nF\3F\3F\3G\3G\3G\5G"+
		"\u0408\nG\3G\3G\5G\u040c\nG\3H\3H\5H\u0410\nH\3H\3H\5H\u0414\nH\3H\3H"+
		"\3I\3I\3I\3I\5I\u041c\nI\3I\3I\5I\u0420\nI\3I\3I\3J\5J\u0425\nJ\3J\3J"+
		"\3J\3J\5J\u042b\nJ\3K\3K\3K\3K\5K\u0431\nK\3K\5K\u0434\nK\3K\3K\5K\u0438"+
		"\nK\3L\3L\3L\3M\3M\3M\3M\7M\u0441\nM\fM\16M\u0444\13M\3N\3N\3N\3N\7N\u044a"+
		"\nN\fN\16N\u044d\13N\3N\3N\3O\3O\3O\3O\3O\3O\3O\6O\u0458\nO\rO\16O\u0459"+
		"\3O\3O\3P\3P\3P\3P\3P\3P\6P\u0464\nP\rP\16P\u0465\3P\3P\3Q\3Q\3Q\3Q\3"+
		"Q\3Q\3Q\3Q\3Q\3Q\3Q\5Q\u0475\nQ\3Q\5Q\u0478\nQ\3Q\3Q\5Q\u047c\nQ\3Q\5"+
		"Q\u047f\nQ\5Q\u0481\nQ\3Q\3Q\3Q\5Q\u0486\nQ\3Q\3Q\5Q\u048a\nQ\3Q\5Q\u048d"+
		"\nQ\7Q\u048f\nQ\fQ\16Q\u0492\13Q\3R\3R\3R\3R\7R\u0498\nR\fR\16R\u049b"+
		"\13R\3S\3S\3S\3S\7S\u04a1\nS\fS\16S\u04a4\13S\3T\3T\3T\3T\3T\7T\u04ab"+
		"\nT\fT\16T\u04ae\13T\3T\3T\5T\u04b2\nT\3T\3T\3T\3T\3T\3U\3U\3V\3V\3V\5"+
		"V\u04be\nV\3V\5V\u04c1\nV\3V\5V\u04c4\nV\3V\5V\u04c7\nV\3V\3V\3V\3V\5"+
		"V\u04cd\nV\3W\3W\5W\u04d1\nW\3W\3W\3W\3W\7W\u04d7\nW\fW\16W\u04da\13W"+
		"\5W\u04dc\nW\3X\3X\3X\5X\u04e1\nX\3X\5X\u04e4\nX\5X\u04e6\nX\3Y\3Y\3Y"+
		"\3Y\3Y\3Y\3Y\3Y\3Y\3Y\3Y\3Y\5Y\u04f4\nY\3Z\3Z\3Z\3[\3[\3[\3[\7[\u04fd"+
		"\n[\f[\16[\u0500\13[\3[\3[\5[\u0504\n[\3[\3[\3[\3[\3[\3[\5[\u050c\n[\3"+
		"[\5[\u050f\n[\3[\5[\u0512\n[\3[\3[\3[\5[\u0517\n[\7[\u0519\n[\f[\16[\u051c"+
		"\13[\3\\\3\\\5\\\u0520\n\\\3]\5]\u0523\n]\3]\3]\5]\u0527\n]\3]\5]\u052a"+
		"\n]\3]\5]\u052d\n]\3]\3]\3]\3]\3]\3]\3]\3]\7]\u0537\n]\f]\16]\u053a\13"+
		"]\3]\3]\3]\3]\5]\u0540\n]\3]\3]\3]\3]\3]\3]\3]\3]\3]\5]\u054b\n]\3^\3"+
		"^\3^\3^\3^\3^\3_\3_\3`\3`\3`\3`\3`\3a\3a\3a\3a\3a\3b\3b\3b\3b\3b\7b\u0564"+
		"\nb\fb\16b\u0567\13b\3b\3b\3c\3c\3d\3d\3d\3d\3d\3d\3d\3d\3d\3d\3d\3d\3"+
		"d\3d\3d\5d\u057c\nd\3e\3e\3f\3f\3f\3f\3f\3g\3g\3g\3g\3g\3g\3g\7g\u058c"+
		"\ng\fg\16g\u058f\13g\3g\3g\5g\u0593\ng\3h\3h\3h\3i\3i\3i\3i\3i\7i\u059d"+
		"\ni\fi\16i\u05a0\13i\3j\3j\3j\3j\3j\3j\3j\3j\7j\u05aa\nj\fj\16j\u05ad"+
		"\13j\3j\3j\3j\3j\3j\3j\3j\7j\u05b6\nj\fj\16j\u05b9\13j\3j\3j\3j\3j\3j"+
		"\3j\3j\7j\u05c2\nj\fj\16j\u05c5\13j\3j\3j\5j\u05c9\nj\3k\3k\3k\3l\3l\3"+
		"m\3m\3m\3m\3m\3m\3m\3n\3n\3o\3o\3p\3p\3p\3q\3q\3q\3q\7q\u05e2\nq\fq\16"+
		"q\u05e5\13q\3r\3r\3r\3r\3s\5s\u05ec\ns\3s\3s\5s\u05f0\ns\3s\5s\u05f3\n"+
		"s\3s\5s\u05f6\ns\3s\3s\3t\3t\3t\5t\u05fd\nt\3t\5t\u0600\nt\3t\5t\u0603"+
		"\nt\3t\5t\u0606\nt\3t\5t\u0609\nt\3t\5t\u060c\nt\3t\3t\3t\5t\u0611\nt"+
		"\3t\5t\u0614\nt\3u\3u\3u\3u\3u\7u\u061b\nu\fu\16u\u061e\13u\3v\3v\5v\u0622"+
		"\nv\3v\3v\5v\u0626\nv\3w\3w\3w\5w\u062b\nw\3x\3x\3x\3x\3x\7x\u0632\nx"+
		"\fx\16x\u0635\13x\3y\3y\3y\3y\3y\3y\3y\3y\3y\3y\3y\3y\3y\3y\3y\3y\5y\u0647"+
		"\ny\3z\3z\3z\3z\7z\u064d\nz\fz\16z\u0650\13z\3{\3{\3{\6{\u0655\n{\r{\16"+
		"{\u0656\3{\3{\5{\u065b\n{\3|\3|\5|\u065f\n|\3}\3}\3}\3}\3}\3}\3}\3}\5"+
		"}\u0669\n}\3~\3~\3~\3~\3~\3~\3~\3~\3~\3~\3~\3~\3~\3~\3~\3~\3~\3~\3~\3"+
		"~\3~\3~\3~\3~\5~\u0683\n~\3\177\3\177\3\177\3\177\7\177\u0689\n\177\f"+
		"\177\16\177\u068c\13\177\3\u0080\3\u0080\3\u0080\3\u0080\3\u0080\3\u0080"+
		"\3\u0080\3\u0080\3\u0080\5\u0080\u0697\n\u0080\3\u0081\3\u0081\3\u0081"+
		"\3\u0081\3\u0081\3\u0082\3\u0082\3\u0082\3\u0083\3\u0083\3\u0084\3\u0084"+
		"\3\u0084\3\u0084\3\u0084\3\u0084\3\u0084\3\u0084\3\u0084\3\u0084\5\u0084"+
		"\u06ad\n\u0084\5\u0084\u06af\n\u0084\3\u0084\3\u0084\3\u0084\3\u0084\3"+
		"\u0084\3\u0084\3\u0084\3\u0084\3\u0084\5\u0084\u06ba\n\u0084\3\u0084\7"+
		"\u0084\u06bd\n\u0084\f\u0084\16\u0084\u06c0\13\u0084\3\u0085\5\u0085\u06c3"+
		"\n\u0085\3\u0085\3\u0085\5\u0085\u06c7\n\u0085\3\u0085\3\u0085\3\u0085"+
		"\3\u0085\3\u0085\5\u0085\u06ce\n\u0085\3\u0085\3\u0085\3\u0085\3\u0085"+
		"\3\u0085\7\u0085\u06d5\n\u0085\f\u0085\16\u0085\u06d8\13\u0085\3\u0085"+
		"\3\u0085\3\u0085\5\u0085\u06dd\n\u0085\3\u0085\3\u0085\3\u0085\3\u0085"+
		"\3\u0085\3\u0085\3\u0085\3\u0085\3\u0085\3\u0085\3\u0085\5\u0085\u06ea"+
		"\n\u0085\3\u0085\3\u0085\3\u0085\3\u0085\3\u0085\5\u0085\u06f1\n\u0085"+
		"\3\u0085\3\u0085\3\u0085\5\u0085\u06f6\n\u0085\3\u0085\3\u0085\3\u0085"+
		"\3\u0085\5\u0085\u06fc\n\u0085\3\u0085\3\u0085\3\u0085\3\u0085\3\u0085"+
		"\5\u0085\u0703\n\u0085\5\u0085\u0705\n\u0085\3\u0086\5\u0086\u0708\n\u0086"+
		"\3\u0086\3\u0086\3\u0086\3\u0086\3\u0086\3\u0086\3\u0086\3\u0086\7\u0086"+
		"\u0712\n\u0086\f\u0086\16\u0086\u0715\13\u0086\3\u0086\3\u0086\5\u0086"+
		"\u0719\n\u0086\3\u0086\5\u0086\u071c\n\u0086\3\u0086\3\u0086\3\u0086\3"+
		"\u0086\5\u0086\u0722\n\u0086\5\u0086\u0724\n\u0086\3\u0087\3\u0087\3\u0087"+
		"\3\u0087\5\u0087\u072a\n\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087"+
		"\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087"+
		"\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\7\u0087\u0741"+
		"\n\u0087\f\u0087\16\u0087\u0744\13\u0087\3\u0088\3\u0088\3\u0088\6\u0088"+
		"\u0749\n\u0088\r\u0088\16\u0088\u074a\3\u0088\3\u0088\5\u0088\u074f\n"+
		"\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\6\u0088\u0756\n\u0088\r"+
		"\u0088\16\u0088\u0757\3\u0088\3\u0088\5\u0088\u075c\n\u0088\3\u0088\3"+
		"\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088"+
		"\3\u0088\3\u0088\3\u0088\3\u0088\5\u0088\u076c\n\u0088\3\u0088\3\u0088"+
		"\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\5\u0088\u0775\n\u0088\3\u0088"+
		"\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088"+
		"\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088"+
		"\3\u0088\3\u0088\3\u0088\5\u0088\u078d\n\u0088\3\u0088\3\u0088\3\u0088"+
		"\7\u0088\u0792\n\u0088\f\u0088\16\u0088\u0795\13\u0088\5\u0088\u0797\n"+
		"\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088"+
		"\5\u0088\u07a1\n\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\7\u0088"+
		"\u07a8\n\u0088\f\u0088\16\u0088\u07ab\13\u0088\3\u0089\3\u0089\3\u0089"+
		"\5\u0089\u07b0\n\u0089\3\u008a\3\u008a\3\u008a\3\u008a\5\u008a\u07b6\n"+
		"\u008a\3\u008b\3\u008b\3\u008c\3\u008c\3\u008d\3\u008d\5\u008d\u07be\n"+
		"\u008d\3\u008e\3\u008e\3\u008e\5\u008e\u07c3\n\u008e\3\u008f\3\u008f\5"+
		"\u008f\u07c7\n\u008f\3\u0090\3\u0090\3\u0090\6\u0090\u07cc\n\u0090\r\u0090"+
		"\16\u0090\u07cd\3\u0091\3\u0091\3\u0091\5\u0091\u07d3\n\u0091\3\u0092"+
		"\3\u0092\3\u0092\3\u0092\3\u0092\3\u0093\5\u0093\u07db\n\u0093\3\u0093"+
		"\3\u0093\5\u0093\u07df\n\u0093\3\u0094\5\u0094\u07e2\n\u0094\3\u0094\3"+
		"\u0094\5\u0094\u07e6\n\u0094\3\u0095\5\u0095\u07e9\n\u0095\3\u0095\3\u0095"+
		"\5\u0095\u07ed\n\u0095\3\u0096\3\u0096\3\u0096\3\u0097\3\u0097\6\u0097"+
		"\u07f4\n\u0097\r\u0097\16\u0097\u07f5\3\u0097\5\u0097\u07f9\n\u0097\3"+
		"\u0098\3\u0098\3\u0098\3\u0098\3\u0099\3\u0099\3\u0099\7\u0099\u0802\n"+
		"\u0099\f\u0099\16\u0099\u0805\13\u0099\3\u009a\3\u009a\3\u009a\5\u009a"+
		"\u080a\n\u009a\3\u009b\3\u009b\3\u009c\3\u009c\3\u009d\3\u009d\3\u009d"+
		"\3\u009d\3\u009d\3\u009e\3\u009e\3\u009f\3\u009f\3\u00a0\3\u00a0\3\u00a1"+
		"\3\u00a1\3\u00a2\3\u00a2\3\u00a3\3\u00a3\3\u00a3\7\u00a3\u0822\n\u00a3"+
		"\f\u00a3\16\u00a3\u0825\13\u00a3\3\u00a4\3\u00a4\3\u00a4\3\u00a5\3\u00a5"+
		"\3\u00a5\3\u00a5\3\u00a6\3\u00a6\3\u00a6\3\u00a7\3\u00a7\3\u00a7\3\u00a7"+
		"\7\u00a7\u0835\n\u00a7\f\u00a7\16\u00a7\u0838\13\u00a7\3\u00a7\3\u00a7"+
		"\3\u00a8\3\u00a8\5\u00a8\u083e\n\u00a8\3\u00a8\5\u00a8\u0841\n\u00a8\3"+
		"\u00a9\3\u00a9\3\u00a9\5\u00a9\u0846\n\u00a9\3\u00aa\3\u00aa\3\u00aa\3"+
		"\u00aa\5\u00aa\u084c\n\u00aa\3\u00ab\3\u00ab\3\u00ab\3\u00ab\3\u00ab\3"+
		"\u00ab\5\u00ab\u0854\n\u00ab\3\u00ac\3\u00ac\3\u00ac\3\u00ac\3\u00ac\3"+
		"\u00ac\3\u00ac\3\u00ac\3\u00ac\3\u00ac\3\u00ac\3\u00ac\3\u00ac\3\u00ac"+
		"\5\u00ac\u0864\n\u00ac\3\u00ad\3\u00ad\3\u00ad\3\u00ad\3\u00ad\3\u00ad"+
		"\3\u00ad\5\u00ad\u086d\n\u00ad\3\u00ae\3\u00ae\3\u00af\3\u00af\3\u00b0"+
		"\3\u00b0\3\u00b0\3\u00b0\5\u00b0\u0877\n\u00b0\3\u00b0\3\u00b0\3\u00b0"+
		"\3\u00b0\3\u00b0\5\u00b0\u087e\n\u00b0\3\u00b0\5\u00b0\u0881\n\u00b0\3"+
		"\u00b1\3\u00b1\3\u00b1\3\u00b2\3\u00b2\3\u00b3\3\u00b3\3\u00b4\3\u00b4"+
		"\3\u00b5\3\u00b5\3\u00b6\3\u00b6\3\u00b7\3\u00b7\3\u00b8\3\u00b8\3\u00b9"+
		"\3\u00b9\3\u00ba\3\u00ba\3\u00bb\3\u00bb\3\u00bb\3\u0823\7\u00a0\u00b4"+
		"\u0106\u010c\u010e\u00bc\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&("+
		"*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084"+
		"\u0086\u0088\u008a\u008c\u008e\u0090\u0092\u0094\u0096\u0098\u009a\u009c"+
		"\u009e\u00a0\u00a2\u00a4\u00a6\u00a8\u00aa\u00ac\u00ae\u00b0\u00b2\u00b4"+
		"\u00b6\u00b8\u00ba\u00bc\u00be\u00c0\u00c2\u00c4\u00c6\u00c8\u00ca\u00cc"+
		"\u00ce\u00d0\u00d2\u00d4\u00d6\u00d8\u00da\u00dc\u00de\u00e0\u00e2\u00e4"+
		"\u00e6\u00e8\u00ea\u00ec\u00ee\u00f0\u00f2\u00f4\u00f6\u00f8\u00fa\u00fc"+
		"\u00fe\u0100\u0102\u0104\u0106\u0108\u010a\u010c\u010e\u0110\u0112\u0114"+
		"\u0116\u0118\u011a\u011c\u011e\u0120\u0122\u0124\u0126\u0128\u012a\u012c"+
		"\u012e\u0130\u0132\u0134\u0136\u0138\u013a\u013c\u013e\u0140\u0142\u0144"+
		"\u0146\u0148\u014a\u014c\u014e\u0150\u0152\u0154\u0156\u0158\u015a\u015c"+
		"\u015e\u0160\u0162\u0164\u0166\u0168\u016a\u016c\u016e\u0170\u0172\u0174"+
		"\2\61\3\2\4\5\4\2  \u00ec\u00ec\5\2\22\22((FF\6\2\17\17\34\34CC\u00a9"+
		"\u00a9\4\2\16\16\33\33\4\2\u00fe\u00fe\u0109\u0109\4\2\u00a8\u00a8\u015a"+
		"\u015a\4\2\6\6xx\5\2\u00c5\u00c5\u00e3\u00e3\u012d\u012d\r\2\f\f\u0094"+
		"\u0094\u009a\u009a\u00c1\u00c2\u00ce\u00ce\u00e4\u00e4\u010e\u010f\u0151"+
		"\u0151\u015d\u015d\u0162\u0162\u0171\u0172\4\2\u0176\u0176\u0178\u0178"+
		"\6\2\u00e6\u00e7\u00ee\u00ee\u00fc\u00fc\u012e\u012e\4\2\u00ba\u00ba\u0127"+
		"\u0127\4\2++\u010a\u010a\5\2\27\27bb\u00b4\u00b4\5\2++``\u010a\u010a\5"+
		"\2\67\67\\\\\u00ac\u00ac\5\2DDmm\u0080\u0080\4\2\r\r}}\4\2__\u0112\u0112"+
		"\5\2\u00f5\u00f5\u0110\u0110\u0167\u0167\6\2\u00ff\u00ff\u010b\u010b\u0119"+
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
		"\u00af\u00b2\2\u0953\2\u0176\3\2\2\2\4\u0179\3\2\2\2\6\u0181\3\2\2\2\b"+
		"\u0184\3\2\2\2\n\u01a7\3\2\2\2\f\u01a9\3\2\2\2\16\u01b9\3\2\2\2\20\u01bd"+
		"\3\2\2\2\22\u01bf\3\2\2\2\24\u01c2\3\2\2\2\26\u01cd\3\2\2\2\30\u01d5\3"+
		"\2\2\2\32\u01dd\3\2\2\2\34\u01df\3\2\2\2\36\u020c\3\2\2\2 \u020e\3\2\2"+
		"\2\"\u0215\3\2\2\2$\u0219\3\2\2\2&\u021d\3\2\2\2(\u0221\3\2\2\2*\u0226"+
		"\3\2\2\2,\u022c\3\2\2\2.\u022e\3\2\2\2\60\u0257\3\2\2\2\62\u0265\3\2\2"+
		"\2\64\u0267\3\2\2\2\66\u0271\3\2\2\28\u0273\3\2\2\2:\u02c7\3\2\2\2<\u02c9"+
		"\3\2\2\2>\u02cd\3\2\2\2@\u02d5\3\2\2\2B\u02dd\3\2\2\2D\u02e1\3\2\2\2F"+
		"\u02e8\3\2\2\2H\u0304\3\2\2\2J\u0306\3\2\2\2L\u0309\3\2\2\2N\u0313\3\2"+
		"\2\2P\u0315\3\2\2\2R\u031b\3\2\2\2T\u031d\3\2\2\2V\u0325\3\2\2\2X\u032d"+
		"\3\2\2\2Z\u032f\3\2\2\2\\\u0333\3\2\2\2^\u0337\3\2\2\2`\u034f\3\2\2\2"+
		"b\u0353\3\2\2\2d\u0355\3\2\2\2f\u0365\3\2\2\2h\u0367\3\2\2\2j\u036c\3"+
		"\2\2\2l\u0377\3\2\2\2n\u0389\3\2\2\2p\u039d\3\2\2\2r\u03a8\3\2\2\2t\u03aa"+
		"\3\2\2\2v\u03b7\3\2\2\2x\u03be\3\2\2\2z\u03c1\3\2\2\2|\u03ca\3\2\2\2~"+
		"\u03ce\3\2\2\2\u0080\u03d2\3\2\2\2\u0082\u03d5\3\2\2\2\u0084\u03dd\3\2"+
		"\2\2\u0086\u03e2\3\2\2\2\u0088\u03f3\3\2\2\2\u008a\u03fa\3\2\2\2\u008c"+
		"\u0404\3\2\2\2\u008e\u040d\3\2\2\2\u0090\u0417\3\2\2\2\u0092\u042a\3\2"+
		"\2\2\u0094\u042c\3\2\2\2\u0096\u0439\3\2\2\2\u0098\u043c\3\2\2\2\u009a"+
		"\u0445\3\2\2\2\u009c\u0450\3\2\2\2\u009e\u045d\3\2\2\2\u00a0\u0480\3\2"+
		"\2\2\u00a2\u0493\3\2\2\2\u00a4\u049c\3\2\2\2\u00a6\u04a5\3\2\2\2\u00a8"+
		"\u04b8\3\2\2\2\u00aa\u04cc\3\2\2\2\u00ac\u04ce\3\2\2\2\u00ae\u04e5\3\2"+
		"\2\2\u00b0\u04f3\3\2\2\2\u00b2\u04f5\3\2\2\2\u00b4\u0503\3\2\2\2\u00b6"+
		"\u051d\3\2\2\2\u00b8\u054a\3\2\2\2\u00ba\u054c\3\2\2\2\u00bc\u0552\3\2"+
		"\2\2\u00be\u0554\3\2\2\2\u00c0\u0559\3\2\2\2\u00c2\u055e\3\2\2\2\u00c4"+
		"\u056a\3\2\2\2\u00c6\u057b\3\2\2\2\u00c8\u057d\3\2\2\2\u00ca\u057f\3\2"+
		"\2\2\u00cc\u0592\3\2\2\2\u00ce\u0594\3\2\2\2\u00d0\u0597\3\2\2\2\u00d2"+
		"\u05c8\3\2\2\2\u00d4\u05ca\3\2\2\2\u00d6\u05cd\3\2\2\2\u00d8\u05cf\3\2"+
		"\2\2\u00da\u05d6\3\2\2\2\u00dc\u05d8\3\2\2\2\u00de\u05da\3\2\2\2\u00e0"+
		"\u05dd\3\2\2\2\u00e2\u05e6\3\2\2\2\u00e4\u05eb\3\2\2\2\u00e6\u05f9\3\2"+
		"\2\2\u00e8\u0615\3\2\2\2\u00ea\u061f\3\2\2\2\u00ec\u0627\3\2\2\2\u00ee"+
		"\u062c\3\2\2\2\u00f0\u0646\3\2\2\2\u00f2\u0648\3\2\2\2\u00f4\u0651\3\2"+
		"\2\2\u00f6\u065c\3\2\2\2\u00f8\u0668\3\2\2\2\u00fa\u0682\3\2\2\2\u00fc"+
		"\u0684\3\2\2\2\u00fe\u0696\3\2\2\2\u0100\u0698\3\2\2\2\u0102\u069d\3\2"+
		"\2\2\u0104\u06a0\3\2\2\2\u0106\u06ae\3\2\2\2\u0108\u0704\3\2\2\2\u010a"+
		"\u0723\3\2\2\2\u010c\u0729\3\2\2\2\u010e\u07a0\3\2\2\2\u0110\u07af\3\2"+
		"\2\2\u0112\u07b5\3\2\2\2\u0114\u07b7\3\2\2\2\u0116\u07b9\3\2\2\2\u0118"+
		"\u07bd\3\2\2\2\u011a\u07bf\3\2\2\2\u011c\u07c4\3\2\2\2\u011e\u07cb\3\2"+
		"\2\2\u0120\u07cf\3\2\2\2\u0122\u07d4\3\2\2\2\u0124\u07de\3\2\2\2\u0126"+
		"\u07e1\3\2\2\2\u0128\u07e8\3\2\2\2\u012a\u07ee\3\2\2\2\u012c\u07f8\3\2"+
		"\2\2\u012e\u07fa\3\2\2\2\u0130\u07fe\3\2\2\2\u0132\u0809\3\2\2\2\u0134"+
		"\u080b\3\2\2\2\u0136\u080d\3\2\2\2\u0138\u080f\3\2\2\2\u013a\u0814\3\2"+
		"\2\2\u013c\u0816\3\2\2\2\u013e\u0818\3\2\2\2\u0140\u081a\3\2\2\2\u0142"+
		"\u081c\3\2\2\2\u0144\u081e\3\2\2\2\u0146\u0826\3\2\2\2\u0148\u0829\3\2"+
		"\2\2\u014a\u082d\3\2\2\2\u014c\u0830\3\2\2\2\u014e\u083b\3\2\2\2\u0150"+
		"\u0845\3\2\2\2\u0152\u084b\3\2\2\2\u0154\u0853\3\2\2\2\u0156\u0863\3\2"+
		"\2\2\u0158\u086c\3\2\2\2\u015a\u086e\3\2\2\2\u015c\u0870\3\2\2\2\u015e"+
		"\u0880\3\2\2\2\u0160\u0882\3\2\2\2\u0162\u0885\3\2\2\2\u0164\u0887\3\2"+
		"\2\2\u0166\u0889\3\2\2\2\u0168\u088b\3\2\2\2\u016a\u088d\3\2\2\2\u016c"+
		"\u088f\3\2\2\2\u016e\u0891\3\2\2\2\u0170\u0893\3\2\2\2\u0172\u0895\3\2"+
		"\2\2\u0174\u0897\3\2\2\2\u0176\u0177\5\4\3\2\u0177\u0178\7\2\2\3\u0178"+
		"\3\3\2\2\2\u0179\u017a\5\6\4\2\u017a\u017b\7\2\2\3\u017b\5\3\2\2\2\u017c"+
		"\u0180\5\b\5\2\u017d\u0180\5\n\6\2\u017e\u0180\5\f\7\2\u017f\u017c\3\2"+
		"\2\2\u017f\u017d\3\2\2\2\u017f\u017e\3\2\2\2\u0180\u0183\3\2\2\2\u0181"+
		"\u017f\3\2\2\2\u0181\u0182\3\2\2\2\u0182\7\3\2\2\2\u0183\u0181\3\2\2\2"+
		"\u0184\u0185\t\2\2\2\u0185\t\3\2\2\2\u0186\u0187\5\16\b\2\u0187\u0188"+
		"\7\u018a\2\2\u0188\u01a8\3\2\2\2\u0189\u018a\5\20\t\2\u018a\u018b\7\u018a"+
		"\2\2\u018b\u01a8\3\2\2\2\u018c\u018d\5\22\n\2\u018d\u018e\7\u018a\2\2"+
		"\u018e\u01a8\3\2\2\2\u018f\u0190\5\24\13\2\u0190\u0191\7\u018a\2\2\u0191"+
		"\u01a8\3\2\2\2\u0192\u0193\5\32\16\2\u0193\u0194\7\u018a\2\2\u0194\u01a8"+
		"\3\2\2\2\u0195\u0196\5\36\20\2\u0196\u0197\7\u018a\2\2\u0197\u01a8\3\2"+
		"\2\2\u0198\u0199\5 \21\2\u0199\u019a\7\u018a\2\2\u019a\u01a8\3\2\2\2\u019b"+
		"\u019c\5\"\22\2\u019c\u019d\7\u018a\2\2\u019d\u01a8\3\2\2\2\u019e\u019f"+
		"\5$\23\2\u019f\u01a0\7\u018a\2\2\u01a0\u01a8\3\2\2\2\u01a1\u01a2\5&\24"+
		"\2\u01a2\u01a3\7\u018a\2\2\u01a3\u01a8\3\2\2\2\u01a4\u01a5\5(\25\2\u01a5"+
		"\u01a6\7\u018a\2\2\u01a6\u01a8\3\2\2\2\u01a7\u0186\3\2\2\2\u01a7\u0189"+
		"\3\2\2\2\u01a7\u018c\3\2\2\2\u01a7\u018f\3\2\2\2\u01a7\u0192\3\2\2\2\u01a7"+
		"\u0195\3\2\2\2\u01a7\u0198\3\2\2\2\u01a7\u019b\3\2\2\2\u01a7\u019e\3\2"+
		"\2\2\u01a7\u01a1\3\2\2\2\u01a7\u01a4\3\2\2\2\u01a8\13\3\2\2\2\u01a9\u01aa"+
		"\7\u018a\2\2\u01aa\r\3\2\2\2\u01ab\u01ba\5,\27\2\u01ac\u01ba\5j\66\2\u01ad"+
		"\u01ba\5l\67\2\u01ae\u01ba\5n8\2\u01af\u01ba\5h\65\2\u01b0\u01ba\5t;\2"+
		"\u01b1\u01ba\5\u0082B\2\u01b2\u01ba\5\u0084C\2\u01b3\u01ba\5\u0086D\2"+
		"\u01b4\u01ba\5\u0088E\2\u01b5\u01ba\5\u008aF\2\u01b6\u01ba\5\u008cG\2"+
		"\u01b7\u01ba\5\u008eH\2\u01b8\u01ba\5\u0090I\2\u01b9\u01ab\3\2\2\2\u01b9"+
		"\u01ac\3\2\2\2\u01b9\u01ad\3\2\2\2\u01b9\u01ae\3\2\2\2\u01b9\u01af\3\2"+
		"\2\2\u01b9\u01b0\3\2\2\2\u01b9\u01b1\3\2\2\2\u01b9\u01b2\3\2\2\2\u01b9"+
		"\u01b3\3\2\2\2\u01b9\u01b4\3\2\2\2\u01b9\u01b5\3\2\2\2\u01b9\u01b6\3\2"+
		"\2\2\u01b9\u01b7\3\2\2\2\u01b9\u01b8\3\2\2\2\u01ba\17\3\2\2\2\u01bb\u01be"+
		"\5\u00a0Q\2\u01bc\u01be\5\u0092J\2\u01bd\u01bb\3\2\2\2\u01bd\u01bc\3\2"+
		"\2\2\u01be\21\3\2\2\2\u01bf\u01c0\t\3\2\2\u01c0\u01c1\5\u0142\u00a2\2"+
		"\u01c1\23\3\2\2\2\u01c2\u01c6\7\u00f8\2\2\u01c3\u01c7\5\26\f\2\u01c4\u01c5"+
		"\7g\2\2\u01c5\u01c7\7\u00fd\2\2\u01c6\u01c3\3\2\2\2\u01c6\u01c4\3\2\2"+
		"\2\u01c6\u01c7\3\2\2\2\u01c7\u01cb\3\2\2\2\u01c8\u01cc\5\20\t\2\u01c9"+
		"\u01cc\5\u0094K\2\u01ca\u01cc\5\u009eP\2\u01cb\u01c8\3\2\2\2\u01cb\u01c9"+
		"\3\2\2\2\u01cb\u01ca\3\2\2\2\u01cc\25\3\2\2\2\u01cd\u01d2\5\30\r\2\u01ce"+
		"\u01cf\7\u0189\2\2\u01cf\u01d1\5\30\r\2\u01d0\u01ce\3\2\2\2\u01d1\u01d4"+
		"\3\2\2\2\u01d2\u01d0\3\2\2\2\u01d2\u01d3\3\2\2\2\u01d3\27\3\2\2\2\u01d4"+
		"\u01d2\3\2\2\2\u01d5\u01d6\t\4\2\2\u01d6\31\3\2\2\2\u01d7\u01d8\7\u00a3"+
		"\2\2\u01d8\u01d9\7\16\2\2\u01d9\u01de\5\u013a\u009e\2\u01da\u01db\7\u00a3"+
		"\2\2\u01db\u01de\5\u013c\u009f\2\u01dc\u01de\5\34\17\2\u01dd\u01d7\3\2"+
		"\2\2\u01dd\u01da\3\2\2\2\u01dd\u01dc\3\2\2\2\u01de\33\3\2\2\2\u01df\u01e0"+
		"\7\u00a3\2\2\u01e0\u01e1\7V\2\2\u01e1\u01e6\5\u0144\u00a3\2\u01e2\u01e3"+
		"\7\u0189\2\2\u01e3\u01e5\5\u0144\u00a3\2\u01e4\u01e2\3\2\2\2\u01e5\u01e8"+
		"\3\2\2\2\u01e6\u01e4\3\2\2\2\u01e6\u01e7\3\2\2\2\u01e7\35\3\2\2\2\u01e8"+
		"\u01e6\3\2\2\2\u01e9\u01ea\7\u014e\2\2\u01ea\u020d\t\5\2\2\u01eb\u01ec"+
		"\7\u014e\2\2\u01ec\u01ed\7\u00e0\2\2\u01ed\u020d\t\6\2\2\u01ee\u01ef\7"+
		"\u014e\2\2\u01ef\u01f2\7\u0097\2\2\u01f0\u01f1\t\7\2\2\u01f1\u01f3\5\u0142"+
		"\u00a2\2\u01f2\u01f0\3\2\2\2\u01f2\u01f3\3\2\2\2\u01f3\u01f5\3\2\2\2\u01f4"+
		"\u01f6\5\u010a\u0086\2\u01f5\u01f4\3\2\2\2\u01f5\u01f6\3\2\2\2\u01f6\u020d"+
		"\3\2\2\2\u01f7\u01f8\7\u014e\2\2\u01f8\u01f9\7\26\2\2\u01f9\u01fa\t\7"+
		"\2\2\u01fa\u01fc\5\u0144\u00a3\2\u01fb\u01fd\5\u010a\u0086\2\u01fc\u01fb"+
		"\3\2\2\2\u01fc\u01fd\3\2\2\2\u01fd\u020d\3\2\2\2\u01fe\u01ff\7\u014e\2"+
		"\2\u01ff\u0200\7\u00dd\2\2\u0200\u0201\t\b\2\2\u0201\u020d\5\u0144\u00a3"+
		"\2\u0202\u0204\7\u014e\2\2\u0203\u0205\7\u016d\2\2\u0204\u0203\3\2\2\2"+
		"\u0204\u0205\3\2\2\2\u0205\u0206\3\2\2\2\u0206\u020d\7\65\2\2\u0207\u0209"+
		"\7\u014e\2\2\u0208\u020a\7\u00ff\2\2\u0209\u0208\3\2\2\2\u0209\u020a\3"+
		"\2\2\2\u020a\u020b\3\2\2\2\u020b\u020d\7V\2\2\u020c\u01e9\3\2\2\2\u020c"+
		"\u01eb\3\2\2\2\u020c\u01ee\3\2\2\2\u020c\u01f7\3\2\2\2\u020c\u01fe\3\2"+
		"\2\2\u020c\u0202\3\2\2\2\u020c\u0207\3\2\2\2\u020d\37\3\2\2\2\u020e\u020f"+
		"\7N\2\2\u020f\u0210\7\u0125\2\2\u0210\u0213\5\u0144\u00a3\2\u0211\u0212"+
		"\7\u0176\2\2\u0212\u0214\5\u014c\u00a7\2\u0213\u0211\3\2\2\2\u0213\u0214"+
		"\3\2\2\2\u0214!\3\2\2\2\u0215\u0216\7\u00a1\2\2\u0216\u0217\7\u0125\2"+
		"\2\u0217\u0218\5\u0144\u00a3\2\u0218#\3\2\2\2\u0219\u021b\7\u014d\2\2"+
		"\u021a\u021c\5\u014e\u00a8\2\u021b\u021a\3\2\2\2\u021b\u021c\3\2\2\2\u021c"+
		"%\3\2\2\2\u021d\u021f\7\u0143\2\2\u021e\u0220\5\u0150\u00a9\2\u021f\u021e"+
		"\3\2\2\2\u021f\u0220\3\2\2\2\u0220\'\3\2\2\2\u0221\u0222\t\t\2\2\u0222"+
		"\u0223\7B\2\2\u0223\u0224\5r:\2\u0224)\3\2\2\2\u0225\u0227\7\u019f\2\2"+
		"\u0226\u0225\3\2\2\2\u0227\u0228\3\2\2\2\u0228\u0226\3\2\2\2\u0228\u0229"+
		"\3\2\2\2\u0229+\3\2\2\2\u022a\u022d\5.\30\2\u022b\u022d\5\60\31\2\u022c"+
		"\u022a\3\2\2\2\u022c\u022b\3\2\2\2\u022d-\3\2\2\2\u022e\u0230\7\u00dd"+
		"\2\2\u022f\u0231\7\u0098\2\2\u0230\u022f\3\2\2\2\u0230\u0231\3\2\2\2\u0231"+
		"\u0232\3\2\2\2\u0232\u0234\7\u015a\2\2\u0233\u0235\5\u0148\u00a5\2\u0234"+
		"\u0233\3\2\2\2\u0234\u0235\3\2\2\2\u0235\u0236\3\2\2\2\u0236\u0237\5\u0140"+
		"\u00a1\2\u0237\u0238\7\u0185\2\2\u0238\u023d\5\62\32\2\u0239\u023a\7\u0189"+
		"\2\2\u023a\u023c\5\62\32\2\u023b\u0239\3\2\2\2\u023c\u023f\3\2\2\2\u023d"+
		"\u023b\3\2\2\2\u023d\u023e\3\2\2\2\u023e\u0242\3\2\2\2\u023f\u023d\3\2"+
		"\2\2\u0240\u0241\7\u0189\2\2\u0241\u0243\5T+\2\u0242\u0240\3\2\2\2\u0242"+
		"\u0243\3\2\2\2\u0243\u0246\3\2\2\2\u0244\u0245\7\u0189\2\2\u0245\u0247"+
		"\5V,\2\u0246\u0244\3\2\2\2\u0246\u0247\3\2\2\2\u0247\u024a\3\2\2\2\u0248"+
		"\u0249\7\u0189\2\2\u0249\u024b\5Z.\2\u024a\u0248\3\2\2\2\u024a\u024b\3"+
		"\2\2\2\u024b\u024c\3\2\2\2\u024c\u024e\7\u0186\2\2\u024d\u024f\5J&\2\u024e"+
		"\u024d\3\2\2\2\u024e\u024f\3\2\2\2\u024f\u0251\3\2\2\2\u0250\u0252\5\\"+
		"/\2\u0251\u0250\3\2\2\2\u0251\u0252\3\2\2\2\u0252\u0253\3\2\2\2\u0253"+
		"\u0255\5\u0146\u00a4\2\u0254\u0256\5d\63\2\u0255\u0254\3\2\2\2\u0255\u0256"+
		"\3\2\2\2\u0256/\3\2\2\2\u0257\u0258\7\u00dd\2\2\u0258\u025a\7\u015a\2"+
		"\2\u0259\u025b\5\u0148\u00a5\2\u025a\u0259\3\2\2\2\u025a\u025b\3\2\2\2"+
		"\u025b\u025c\3\2\2\2\u025c\u025d\5\u0140\u00a1\2\u025d\u0260\5\u0146\u00a4"+
		"\2\u025e\u025f\7\u00bb\2\2\u025f\u0261\5\u00a0Q\2\u0260\u025e\3\2\2\2"+
		"\u0260\u0261\3\2\2\2\u0261\61\3\2\2\2\u0262\u0266\5\64\33\2\u0263\u0266"+
		"\5L\'\2\u0264\u0266\5P)\2\u0265\u0262\3\2\2\2\u0265\u0263\3\2\2\2\u0265"+
		"\u0264\3\2\2\2\u0266\63\3\2\2\2\u0267\u0268\5\66\34\2\u0268\u026a\5:\36"+
		"\2\u0269\u026b\5H%\2\u026a\u0269\3\2\2\2\u026a\u026b\3\2\2\2\u026b\u026d"+
		"\3\2\2\2\u026c\u026e\5J&\2\u026d\u026c\3\2\2\2\u026d\u026e\3\2\2\2\u026e"+
		"\65\3\2\2\2\u026f\u0272\5\u0144\u00a3\2\u0270\u0272\5\u0104\u0083\2\u0271"+
		"\u026f\3\2\2\2\u0271\u0270\3\2\2\2\u0272\67\3\2\2\2\u0273\u0274\7\u0185"+
		"\2\2\u0274\u0279\5\66\34\2\u0275\u0276\7\u0189\2\2\u0276\u0278\5\66\34"+
		"\2\u0277\u0275\3\2\2\2\u0278\u027b\3\2\2\2\u0279\u0277\3\2\2\2\u0279\u027a"+
		"\3\2\2\2\u027a\u027c\3\2\2\2\u027b\u0279\3\2\2\2\u027c\u027d\7\u0186\2"+
		"\2\u027d9\3\2\2\2\u027e\u02c8\t\n\2\2\u027f\u0281\t\13\2\2\u0280\u0282"+
		"\5<\37\2\u0281\u0280\3\2\2\2\u0281\u0282\3\2\2\2\u0282\u02c8\3\2\2\2\u0283"+
		"\u0285\7\u015e\2\2\u0284\u0286\5<\37\2\u0285\u0284\3\2\2\2\u0285\u0286"+
		"\3\2\2\2\u0286\u028d\3\2\2\2\u0287\u0289\t\f\2\2\u0288\u028a\7\u011c\2"+
		"\2\u0289\u0288\3\2\2\2\u0289\u028a\3\2\2\2\u028a\u028b\3\2\2\2\u028b\u028c"+
		"\7\u015d\2\2\u028c\u028e\7\u00b2\2\2\u028d\u0287\3\2\2\2\u028d\u028e\3"+
		"\2\2\2\u028e\u02c8\3\2\2\2\u028f\u0291\7\u015f\2\2\u0290\u0292\5<\37\2"+
		"\u0291\u0290\3\2\2\2\u0291\u0292\3\2\2\2\u0292\u0299\3\2\2\2\u0293\u0295"+
		"\t\f\2\2\u0294\u0296\7\u011c\2\2\u0295\u0294\3\2\2\2\u0295\u0296\3\2\2"+
		"\2\u0296\u0297\3\2\2\2\u0297\u0298\7\u015d\2\2\u0298\u029a\7\u00b2\2\2"+
		"\u0299\u0293\3\2\2\2\u0299\u029a\3\2\2\2\u029a\u02c8\3\2\2\2\u029b\u029d"+
		"\7\u0160\2\2\u029c\u029e\5<\37\2\u029d\u029c\3\2\2\2\u029d\u029e\3\2\2"+
		"\2\u029e\u02a5\3\2\2\2\u029f\u02a1\t\f\2\2\u02a0\u02a2\7\u011c\2\2\u02a1"+
		"\u02a0\3\2\2\2\u02a1\u02a2\3\2\2\2\u02a2\u02a3\3\2\2\2\u02a3\u02a4\7\u015d"+
		"\2\2\u02a4\u02a6\7\u00b2\2\2\u02a5\u029f\3\2\2\2\u02a5\u02a6\3\2\2\2\u02a6"+
		"\u02c8\3\2\2\2\u02a7\u02a9\7\u0161\2\2\u02a8\u02aa\5<\37\2\u02a9\u02a8"+
		"\3\2\2\2\u02a9\u02aa\3\2\2\2\u02aa\u02b1\3\2\2\2\u02ab\u02ad\t\f\2\2\u02ac"+
		"\u02ae\7\u011c\2\2\u02ad\u02ac\3\2\2\2\u02ad\u02ae\3\2\2\2\u02ae\u02af"+
		"\3\2\2\2\u02af\u02b0\7\u015d\2\2\u02b0\u02b2\7\u00b2\2\2\u02b1\u02ab\3"+
		"\2\2\2\u02b1\u02b2\3\2\2\2\u02b2\u02c8\3\2\2\2\u02b3\u02b5\t\r\2\2\u02b4"+
		"\u02b6\5> \2\u02b5\u02b4\3\2\2\2\u02b5\u02b6\3\2\2\2\u02b6\u02c8\3\2\2"+
		"\2\u02b7\u02b9\t\16\2\2\u02b8\u02ba\5B\"\2\u02b9\u02b8\3\2\2\2\u02b9\u02ba"+
		"\3\2\2\2\u02ba\u02c8\3\2\2\2\u02bb\u02bd\7O\2\2\u02bc\u02be\5D#\2\u02bd"+
		"\u02bc\3\2\2\2\u02bd\u02be\3\2\2\2\u02be\u02c8\3\2\2\2\u02bf\u02c1\7\u0149"+
		"\2\2\u02c0\u02c2\5F$\2\u02c1\u02c0\3\2\2\2\u02c1\u02c2\3\2\2\2\u02c2\u02c8"+
		"\3\2\2\2\u02c3\u02c5\7u\2\2\u02c4\u02c6\5@!\2\u02c5\u02c4\3\2\2\2\u02c5"+
		"\u02c6\3\2\2\2\u02c6\u02c8\3\2\2\2\u02c7\u027e\3\2\2\2\u02c7\u027f\3\2"+
		"\2\2\u02c7\u0283\3\2\2\2\u02c7\u028f\3\2\2\2\u02c7\u029b\3\2\2\2\u02c7"+
		"\u02a7\3\2\2\2\u02c7\u02b3\3\2\2\2\u02c7\u02b7\3\2\2\2\u02c7\u02bb\3\2"+
		"\2\2\u02c7\u02bf\3\2\2\2\u02c7\u02c3\3\2\2\2\u02c8;\3\2\2\2\u02c9\u02ca"+
		"\7\u0185\2\2\u02ca\u02cb\5\u0164\u00b3\2\u02cb\u02cc\7\u0186\2\2\u02cc"+
		"=\3\2\2\2\u02cd\u02ce\7\u0185\2\2\u02ce\u02d1\5\u0164\u00b3\2\u02cf\u02d0"+
		"\7\u0189\2\2\u02d0\u02d2\5\u0164\u00b3\2\u02d1\u02cf\3\2\2\2\u02d1\u02d2"+
		"\3\2\2\2\u02d2\u02d3\3\2\2\2\u02d3\u02d4\7\u0186\2\2\u02d4?\3\2\2\2\u02d5"+
		"\u02d6\7\u0185\2\2\u02d6\u02d9\5\u0162\u00b2\2\u02d7\u02d8\7\u0189\2\2"+
		"\u02d8\u02da\5\u0162\u00b2\2\u02d9\u02d7\3\2\2\2\u02d9\u02da\3\2\2\2\u02da"+
		"\u02db\3\2\2\2\u02db\u02dc\7\u0186\2\2\u02dcA\3\2\2\2\u02dd\u02de\7\u017c"+
		"\2\2\u02de\u02df\5:\36\2\u02df\u02e0\7\u017b\2\2\u02e0C\3\2\2\2\u02e1"+
		"\u02e2\7\u017c\2\2\u02e2\u02e3\5:\36\2\u02e3\u02e4\7\u0189\2\2\u02e4\u02e5"+
		"\5:\36\2\u02e5\u02e6\3\2\2\2\u02e6\u02e7\7\u017b\2\2\u02e7E\3\2\2\2\u02e8"+
		"\u02e9\7\u017c\2\2\u02e9\u02ea\5\66\34\2\u02ea\u02f1\5:\36\2\u02eb\u02ec"+
		"\7\u0189\2\2\u02ec\u02ed\5\66\34\2\u02ed\u02ee\5:\36\2\u02ee\u02f0\3\2"+
		"\2\2\u02ef\u02eb\3\2\2\2\u02f0\u02f3\3\2\2\2\u02f1\u02ef\3\2\2\2\u02f1"+
		"\u02f2\3\2\2\2\u02f2\u02f4\3\2\2\2\u02f3\u02f1\3\2\2\2\u02f4\u02f5\7\u017b"+
		"\2\2\u02f5G\3\2\2\2\u02f6\u02f7\7\u00d9\2\2\u02f7\u02f9\5X-\2\u02f8\u02f6"+
		"\3\2\2\2\u02f8\u02f9\3\2\2\2\u02f9\u02fa\3\2\2\2\u02fa\u02fb\7\u0140\2"+
		"\2\u02fb\u02fe\7G\2\2\u02fc\u02fd\7\u012c\2\2\u02fd\u02ff\7$\2\2\u02fe"+
		"\u02fc\3\2\2\2\u02fe\u02ff\3\2\2\2\u02ff\u0305\3\2\2\2\u0300\u0302\7\u012c"+
		"\2\2\u0301\u0300\3\2\2\2\u0301\u0302\3\2\2\2\u0302\u0303\3\2\2\2\u0303"+
		"\u0305\7\u012d\2\2\u0304\u02f8\3\2\2\2\u0304\u0301\3\2\2\2\u0305I\3\2"+
		"\2\2\u0306\u0307\7\24\2\2\u0307\u0308\7\u019a\2\2\u0308K\3\2\2\2\u0309"+
		"\u030a\5\66\34\2\u030a\u030b\5:\36\2\u030b\u030e\7\u0121\2\2\u030c\u030d"+
		"\7\u00fe\2\2\u030d\u030f\5N(\2\u030e\u030c\3\2\2\2\u030e\u030f\3\2\2\2"+
		"\u030f\u0311\3\2\2\2\u0310\u0312\7\u00aa\2\2\u0311\u0310\3\2\2\2\u0311"+
		"\u0312\3\2\2\2\u0312M\3\2\2\2\u0313\u0314\7\u019a\2\2\u0314O\3\2\2\2\u0315"+
		"\u0316\5\66\34\2\u0316\u0317\7\u00bb\2\2\u0317\u0319\5R*\2\u0318\u031a"+
		"\5J&\2\u0319\u0318\3\2\2\2\u0319\u031a\3\2\2\2\u031aQ\3\2\2\2\u031b\u031c"+
		"\5\u0104\u0083\2\u031cS\3\2\2\2\u031d\u031e\7\u00ab\2\2\u031e\u031f\7"+
		"\u00fd\2\2\u031f\u0320\5\u0104\u0083\2\u0320\u0321\7\u00bb\2\2\u0321\u0322"+
		"\5\u0104\u0083\2\u0322U\3\2\2\2\u0323\u0324\7\u00d9\2\2\u0324\u0326\5"+
		"X-\2\u0325\u0323\3\2\2\2\u0325\u0326\3\2\2\2\u0326\u0327\3\2\2\2\u0327"+
		"\u0328\7\u0140\2\2\u0328\u0329\7G\2\2\u0329\u032a\58\35\2\u032a\u032b"+
		"\7\u012c\2\2\u032b\u032c\7$\2\2\u032cW\3\2\2\2\u032d\u032e\5\u0132\u009a"+
		"\2\u032eY\3\2\2\2\u032f\u0330\7\u013d\2\2\u0330\u0331\7\u00fd\2\2\u0331"+
		"\u0332\7\u0158\2\2\u0332[\3\2\2\2\u0333\u0334\7a\2\2\u0334\u0335\7\u00c7"+
		"\2\2\u0335\u0336\5^\60\2\u0336]\3\2\2\2\u0337\u0338\7\u0185\2\2\u0338"+
		"\u033d\5`\61\2\u0339\u033a\7\u0189\2\2\u033a\u033c\5`\61\2\u033b\u0339"+
		"\3\2\2\2\u033c\u033f\3\2\2\2\u033d\u033b\3\2\2\2\u033d\u033e\3\2\2\2\u033e"+
		"\u0340\3\2\2\2\u033f\u033d\3\2\2\2\u0340\u0341\7\u0186\2\2\u0341_\3\2"+
		"\2\2\u0342\u0350\5\u0118\u008d\2\u0343\u0344\5\u0132\u009a\2\u0344\u0345"+
		"\7\u0185\2\2\u0345\u034a\5b\62\2\u0346\u0347\7\u0189\2\2\u0347\u0349\5"+
		"b\62\2\u0348\u0346\3\2\2\2\u0349\u034c\3\2\2\2\u034a\u0348\3\2\2\2\u034a"+
		"\u034b\3\2\2\2\u034b\u034d\3\2\2\2\u034c\u034a\3\2\2\2\u034d\u034e\7\u0186"+
		"\2\2\u034e\u0350\3\2\2\2\u034f\u0342\3\2\2\2\u034f\u0343\3\2\2\2\u0350"+
		"a\3\2\2\2\u0351\u0354\5\u0118\u008d\2\u0352\u0354\5\u015e\u00b0\2\u0353"+
		"\u0351\3\2\2\2\u0353\u0352\3\2\2\2\u0354c\3\2\2\2\u0355\u0356\7\u011a"+
		"\2\2\u0356\u035f\5\u0142\u00a2\2\u0357\u035b\7\u0185\2\2\u0358\u035a\5"+
		"f\64\2\u0359\u0358\3\2\2\2\u035a\u035d\3\2\2\2\u035b\u0359\3\2\2\2\u035b"+
		"\u035c\3\2\2\2\u035c\u035e\3\2\2\2\u035d\u035b\3\2\2\2\u035e\u0360\7\u0186"+
		"\2\2\u035f\u0357\3\2\2\2\u035f\u0360\3\2\2\2\u0360e\3\2\2\2\u0361\u0362"+
		"\t\17\2\2\u0362\u0366\t\20\2\2\u0363\u0364\t\21\2\2\u0364\u0366\t\22\2"+
		"\2\u0365\u0361\3\2\2\2\u0365\u0363\3\2\2\2\u0366g\3\2\2\2\u0367\u0368"+
		"\7\u00dd\2\2\u0368\u0369\7\16\2\2\u0369\u036a\5\u0144\u00a3\2\u036a\u036b"+
		"\5\u0146\u00a4\2\u036bi\3\2\2\2\u036c\u036d\7\u00dd\2\2\u036d\u036f\7"+
		"\33\2\2\u036e\u0370\5\u0148\u00a5\2\u036f\u036e\3\2\2\2\u036f\u0370\3"+
		"\2\2\2\u0370\u0371\3\2\2\2\u0371\u0373\5\u013e\u00a0\2\u0372\u0374\5J"+
		"&\2\u0373\u0372\3\2\2\2\u0373\u0374\3\2\2\2\u0374\u0375\3\2\2\2\u0375"+
		"\u0376\5\u0146\u00a4\2\u0376k\3\2\2\2\u0377\u0379\7\u00dd\2\2\u0378\u037a"+
		"\7\u0098\2\2\u0379\u0378\3\2\2\2\u0379\u037a\3\2\2\2\u037a\u037b\3\2\2"+
		"\2\u037b\u037d\7\u00a8\2\2\u037c\u037e\5\u0148\u00a5\2\u037d\u037c\3\2"+
		"\2\2\u037d\u037e\3\2\2\2\u037e\u037f\3\2\2\2\u037f\u0381\5\u0144\u00a3"+
		"\2\u0380\u0382\58\35\2\u0381\u0380\3\2\2\2\u0381\u0382\3\2\2\2\u0382\u0384"+
		"\3\2\2\2\u0383\u0385\5J&\2\u0384\u0383\3\2\2\2\u0384\u0385\3\2\2\2\u0385"+
		"\u0386\3\2\2\2\u0386\u0387\7\u00bb\2\2\u0387\u0388\5\u00a0Q\2\u0388m\3"+
		"\2\2\2\u0389\u038d\7\u00dd\2\2\u038a\u038e\7\u0098\2\2\u038b\u038c\7\u0098"+
		"\2\2\u038c\u038e\7\u0157\2\2\u038d\u038a\3\2\2\2\u038d\u038b\3\2\2\2\u038d"+
		"\u038e\3\2\2\2\u038e\u038f\3\2\2\2\u038f\u0391\7\u0100\2\2\u0390\u0392"+
		"\5\u0148\u00a5\2\u0391\u0390\3\2\2\2\u0391\u0392\3\2\2\2\u0392\u0393\3"+
		"\2\2\2\u0393\u0394\5\u0110\u0089\2\u0394\u0395\7\u00bb\2\2\u0395\u0398"+
		"\5\u0132\u009a\2\u0396\u0397\7\u0116\2\2\u0397\u0399\t\23\2\2\u0398\u0396"+
		"\3\2\2\2\u0398\u0399\3\2\2\2\u0399\u039b\3\2\2\2\u039a\u039c\5p9\2\u039b"+
		"\u039a\3\2\2\2\u039b\u039c\3\2\2\2\u039co\3\2\2\2\u039d\u039e\7\u016e"+
		"\2\2\u039e\u039f\7B\2\2\u039f\u03a5\5r:\2\u03a0\u03a1\7\u0189\2\2\u03a1"+
		"\u03a2\7B\2\2\u03a2\u03a4\5r:\2\u03a3\u03a0\3\2\2\2\u03a4\u03a7\3\2\2"+
		"\2\u03a5\u03a3\3\2\2\2\u03a5\u03a6\3\2\2\2\u03a6q\3\2\2\2\u03a7\u03a5"+
		"\3\2\2\2\u03a8\u03a9\7\u019a\2\2\u03a9s\3\2\2\2\u03aa\u03ab\7\u00b6\2"+
		"\2\u03ab\u03ad\7\u015a\2\2\u03ac\u03ae\5\u014a\u00a6\2\u03ad\u03ac\3\2"+
		"\2\2\u03ad\u03ae\3\2\2\2\u03ae\u03af\3\2\2\2\u03af\u03b5\5\u0142\u00a2"+
		"\2\u03b0\u03b6\5v<\2\u03b1\u03b6\5x=\2\u03b2\u03b6\5z>\2\u03b3\u03b6\5"+
		"|?\2\u03b4\u03b6\5~@\2\u03b5\u03b0\3\2\2\2\u03b5\u03b1\3\2\2\2\u03b5\u03b2"+
		"\3\2\2\2\u03b5\u03b3\3\2\2\2\u03b5\u03b4\3\2\2\2\u03b6u\3\2\2\2\u03b7"+
		"\u03b9\7y\2\2\u03b8\u03ba\5\u0144\u00a3\2\u03b9\u03b8\3\2\2\2\u03b9\u03ba"+
		"\3\2\2\2\u03ba\u03bb\3\2\2\2\u03bb\u03bc\7\u0163\2\2\u03bc\u03bd\5\u0144"+
		"\u00a3\2\u03bdw\3\2\2\2\u03be\u03bf\7\u014d\2\2\u03bf\u03c0\5\u014c\u00a7"+
		"\2\u03c0y\3\2\2\2\u03c1\u03c2\7\6\2\2\u03c2\u03c3\7\u00d9\2\2\u03c3\u03c4"+
		"\5X-\2\u03c4\u03c5\7\u0140\2\2\u03c5\u03c6\7G\2\2\u03c6\u03c8\58\35\2"+
		"\u03c7\u03c9\5\u0080A\2\u03c8\u03c7\3\2\2\2\u03c8\u03c9\3\2\2\2\u03c9"+
		"{\3\2\2\2\u03ca\u03cb\7\u00ef\2\2\u03cb\u03cc\7\u00d9\2\2\u03cc\u03cd"+
		"\5X-\2\u03cd}\3\2\2\2\u03ce\u03cf\7\6\2\2\u03cf\u03d0\7\u0168\2\2\u03d0"+
		"\u03d1\58\35\2\u03d1\177\3\2\2\2\u03d2\u03d3\7\u012c\2\2\u03d3\u03d4\7"+
		"$\2\2\u03d4\u0081\3\2\2\2\u03d5\u03d6\7\u00b6\2\2\u03d6\u03d7\7\u00a8"+
		"\2\2\u03d7\u03db\5\u0144\u00a3\2\u03d8\u03dc\5v<\2\u03d9\u03da\7\u00bb"+
		"\2\2\u03da\u03dc\5\u00a0Q\2\u03db\u03d8\3\2\2\2\u03db\u03d9\3\2\2\2\u03dc"+
		"\u0083\3\2\2\2\u03dd\u03de\7\u00b6\2\2\u03de\u03df\7\33\2\2\u03df\u03e0"+
		"\5\u013c\u009f\2\u03e0\u03e1\5x=\2\u03e1\u0085\3\2\2\2\u03e2\u03e6\7\u00b6"+
		"\2\2\u03e3\u03e7\7\u0098\2\2\u03e4\u03e5\7\u0098\2\2\u03e5\u03e7\7\u0157"+
		"\2\2\u03e6\u03e3\3\2\2\2\u03e6\u03e4\3\2\2\2\u03e6\u03e7\3\2\2\2\u03e7"+
		"\u03e8\3\2\2\2\u03e8\u03ea\7\u0100\2\2\u03e9\u03eb\5\u014a\u00a6\2\u03ea"+
		"\u03e9\3\2\2\2\u03ea\u03eb\3\2\2\2\u03eb\u03ec\3\2\2\2\u03ec\u03ed\5\u0144"+
		"\u00a3\2\u03ed\u03ee\7\u00bb\2\2\u03ee\u03f1\5\u0132\u009a\2\u03ef\u03f0"+
		"\7\u0116\2\2\u03f0\u03f2\t\23\2\2\u03f1\u03ef\3\2\2\2\u03f1\u03f2\3\2"+
		"\2\2\u03f2\u0087\3\2\2\2\u03f3\u03f4\7\u00ef\2\2\u03f4\u03f6\7\16\2\2"+
		"\u03f5\u03f7\5\u014a\u00a6\2\u03f6\u03f5\3\2\2\2\u03f6\u03f7\3\2\2\2\u03f7"+
		"\u03f8\3\2\2\2\u03f8\u03f9\5\u013a\u009e\2\u03f9\u0089\3\2\2\2\u03fa\u03fc"+
		"\7\u00ef\2\2\u03fb\u03fd\7\u0098\2\2\u03fc\u03fb\3\2\2\2\u03fc\u03fd\3"+
		"\2\2\2\u03fd\u03fe\3\2\2\2\u03fe\u0400\7\u015a\2\2\u03ff\u0401\5\u014a"+
		"\u00a6\2\u0400\u03ff\3\2\2\2\u0400\u0401\3\2\2\2\u0401\u0402\3\2\2\2\u0402"+
		"\u0403\5\u0142\u00a2\2\u0403\u008b\3\2\2\2\u0404\u0405\7\u00ef\2\2\u0405"+
		"\u0407\7\33\2\2\u0406\u0408\5\u014a\u00a6\2\u0407\u0406\3\2\2\2\u0407"+
		"\u0408\3\2\2\2\u0408\u0409\3\2\2\2\u0409\u040b\5\u013c\u009f\2\u040a\u040c"+
		"\t\24\2\2\u040b\u040a\3\2\2\2\u040b\u040c\3\2\2\2\u040c\u008d\3\2\2\2"+
		"\u040d\u040f\7\u00ef\2\2\u040e\u0410\7\u0098\2\2\u040f\u040e\3\2\2\2\u040f"+
		"\u0410\3\2\2\2\u0410\u0411\3\2\2\2\u0411\u0413\7\u00a8\2\2\u0412\u0414"+
		"\5\u014a\u00a6\2\u0413\u0412\3\2\2\2\u0413\u0414\3\2\2\2\u0414\u0415\3"+
		"\2\2\2\u0415\u0416\5\u0144\u00a3\2\u0416\u008f\3\2\2\2\u0417\u041b\7\u00ef"+
		"\2\2\u0418\u041c\7\u0098\2\2\u0419\u041a\7\u0098\2\2\u041a\u041c\7\u0157"+
		"\2\2\u041b\u0418\3\2\2\2\u041b\u0419\3\2\2\2\u041b\u041c\3\2\2\2\u041c"+
		"\u041d\3\2\2\2\u041d\u041f\7\u0100\2\2\u041e\u0420\5\u014a\u00a6\2\u041f"+
		"\u041e\3\2\2\2\u041f\u0420\3\2\2\2\u0420\u0421\3\2\2\2\u0421\u0422\5\u0110"+
		"\u0089\2\u0422\u0091\3\2\2\2\u0423\u0425\7\u00f6\2\2\u0424\u0423\3\2\2"+
		"\2\u0424\u0425\3\2\2\2\u0425\u0426\3\2\2\2\u0426\u042b\5\u0094K\2\u0427"+
		"\u042b\5\u009cO\2\u0428\u0429\7\u00f6\2\2\u0429\u042b\5\u009eP\2\u042a"+
		"\u0424\3\2\2\2\u042a\u0427\3\2\2\2\u042a\u0428\3\2\2\2\u042b\u0093\3\2"+
		"\2\2\u042c\u042d\7\u010d\2\2\u042d\u042e\t\25\2\2\u042e\u0437\5\u0142"+
		"\u00a2\2\u042f\u0431\5\u0096L\2\u0430\u042f\3\2\2\2\u0430\u0431\3\2\2"+
		"\2\u0431\u0433\3\2\2\2\u0432\u0434\58\35\2\u0433\u0432\3\2\2\2\u0433\u0434"+
		"\3\2\2\2\u0434\u0435\3\2\2\2\u0435\u0438\5\u00a0Q\2\u0436\u0438\5\u0098"+
		"M\2\u0437\u0430\3\2\2\2\u0437\u0436\3\2\2\2\u0438\u0095\3\2\2\2\u0439"+
		"\u043a\7\u0139\2\2\u043a\u043b\5\u014c\u00a7\2\u043b\u0097\3\2\2\2\u043c"+
		"\u043d\7\u0170\2\2\u043d\u0442\5\u009aN\2\u043e\u043f\7\u0189\2\2\u043f"+
		"\u0441\5\u009aN\2\u0440\u043e\3\2\2\2\u0441\u0444\3\2\2\2\u0442\u0440"+
		"\3\2\2\2\u0442\u0443\3\2\2\2\u0443\u0099\3\2\2\2\u0444\u0442\3\2\2\2\u0445"+
		"\u0446\7\u0185\2\2\u0446\u044b\5\u015e\u00b0\2\u0447\u0448\7\u0189\2\2"+
		"\u0448\u044a\5\u015e\u00b0\2\u0449\u0447\3\2\2\2\u044a\u044d\3\2\2\2\u044b"+
		"\u0449\3\2\2\2\u044b\u044c\3\2\2\2\u044c\u044e\3\2\2\2\u044d\u044b\3\2"+
		"\2\2\u044e\u044f\7\u0186\2\2\u044f\u009b\3\2\2\2\u0450\u0451\7\u00bf\2"+
		"\2\u0451\u0452\7\u0092\2\2\u0452\u0453\7\u014d\2\2\u0453\u0457\7\u018a"+
		"\2\2\u0454\u0455\5\u0094K\2\u0455\u0456\7\u018a\2\2\u0456\u0458\3\2\2"+
		"\2\u0457\u0454\3\2\2\2\u0458\u0459\3\2\2\2\u0459\u0457\3\2\2\2\u0459\u045a"+
		"\3\2\2\2\u045a\u045b\3\2\2\2\u045b\u045c\7\u00f2\2\2\u045c\u009d\3\2\2"+
		"\2\u045d\u045e\7\u0092\2\2\u045e\u045f\7\u014d\2\2\u045f\u0463\7\u00bf"+
		"\2\2\u0460\u0461\5\u0094K\2\u0461\u0462\7\u018a\2\2\u0462\u0464\3\2\2"+
		"\2\u0463\u0460\3\2\2\2\u0464\u0465\3\2\2\2\u0465\u0463\3\2\2\2\u0465\u0466"+
		"\3\2\2\2\u0466\u0467\3\2\2\2\u0467\u0468\7\u00f2\2\2\u0468\u009f\3\2\2"+
		"\2\u0469\u046a\bQ\1\2\u046a\u0481\5\u00a2R\2\u046b\u046c\5\u00a4S\2\u046c"+
		"\u046d\5\u00a0Q\7\u046d\u0481\3\2\2\2\u046e\u046f\7\u0185\2\2\u046f\u0470"+
		"\5\u00a0Q\2\u0470\u0471\7\u0186\2\2\u0471\u0481\3\2\2\2\u0472\u0474\5"+
		"\u00acW\2\u0473\u0475\5\u00e8u\2\u0474\u0473\3\2\2\2\u0474\u0475\3\2\2"+
		"\2\u0475\u0477\3\2\2\2\u0476\u0478\5\u00ecw\2\u0477\u0476\3\2\2\2\u0477"+
		"\u0478\3\2\2\2\u0478\u0481\3\2\2\2\u0479\u047b\5\u00aaV\2\u047a\u047c"+
		"\5\u00e8u\2\u047b\u047a\3\2\2\2\u047b\u047c\3\2\2\2\u047c\u047e\3\2\2"+
		"\2\u047d\u047f\5\u00ecw\2\u047e\u047d\3\2\2\2\u047e\u047f\3\2\2\2\u047f"+
		"\u0481\3\2\2\2\u0480\u0469\3\2\2\2\u0480\u046b\3\2\2\2\u0480\u046e\3\2"+
		"\2\2\u0480\u0472\3\2\2\2\u0480\u0479\3\2\2\2\u0481\u0490\3\2\2\2\u0482"+
		"\u0483\f\5\2\2\u0483\u0485\t\26\2\2\u0484\u0486\7\u00b4\2\2\u0485\u0484"+
		"\3\2\2\2\u0485\u0486\3\2\2\2\u0486\u0487\3\2\2\2\u0487\u0489\5\u00a0Q"+
		"\2\u0488\u048a\5\u00e8u\2\u0489\u0488\3\2\2\2\u0489\u048a\3\2\2\2\u048a"+
		"\u048c\3\2\2\2\u048b\u048d\5\u00ecw\2\u048c\u048b\3\2\2\2\u048c\u048d"+
		"\3\2\2\2\u048d\u048f\3\2\2\2\u048e\u0482\3\2\2\2\u048f\u0492\3\2\2\2\u0490"+
		"\u048e\3\2\2\2\u0490\u0491\3\2\2\2\u0491\u00a1\3\2\2\2\u0492\u0490\3\2"+
		"\2\2\u0493\u0494\7\u0170\2\2\u0494\u0499\5\u0104\u0083\2\u0495\u0496\7"+
		"\u0189\2\2\u0496\u0498\5\u0104\u0083\2\u0497\u0495\3\2\2\2\u0498\u049b"+
		"\3\2\2\2\u0499\u0497\3\2\2\2\u0499\u049a\3\2\2\2\u049a\u00a3\3\2\2\2\u049b"+
		"\u0499\3\2\2\2\u049c\u049d\7\u0176\2\2\u049d\u04a2\5\u00a6T\2\u049e\u049f"+
		"\7\u0189\2\2\u049f\u04a1\5\u00a6T\2\u04a0\u049e\3\2\2\2\u04a1\u04a4\3"+
		"\2\2\2\u04a2\u04a0\3\2\2\2\u04a2\u04a3\3\2\2\2\u04a3\u00a5\3\2\2\2\u04a4"+
		"\u04a2\3\2\2\2\u04a5\u04b1\5\u00a8U\2\u04a6\u04a7\7\u0185\2\2\u04a7\u04ac"+
		"\5\66\34\2\u04a8\u04a9\7\u0189\2\2\u04a9\u04ab\5\66\34\2\u04aa\u04a8\3"+
		"\2\2\2\u04ab\u04ae\3\2\2\2\u04ac\u04aa\3\2\2\2\u04ac\u04ad\3\2\2\2\u04ad"+
		"\u04af\3\2\2\2\u04ae\u04ac\3\2\2\2\u04af\u04b0\7\u0186\2\2\u04b0\u04b2"+
		"\3\2\2\2\u04b1\u04a6\3\2\2\2\u04b1\u04b2\3\2\2\2\u04b2\u04b3\3\2\2\2\u04b3"+
		"\u04b4\7\u00bb\2\2\u04b4\u04b5\7\u0185\2\2\u04b5\u04b6\5\u00a0Q\2\u04b6"+
		"\u04b7\7\u0186\2\2\u04b7\u00a7\3\2\2\2\u04b8\u04b9\5\u0132\u009a\2\u04b9"+
		"\u00a9\3\2\2\2\u04ba\u04bb\5\u00acW\2\u04bb\u04bd\5\u00b2Z\2\u04bc\u04be"+
		"\5\u00ceh\2\u04bd\u04bc\3\2\2\2\u04bd\u04be\3\2\2\2\u04be\u04c0\3\2\2"+
		"\2\u04bf\u04c1\5\u00d0i\2\u04c0\u04bf\3\2\2\2\u04c0\u04c1\3\2\2\2\u04c1"+
		"\u04c3\3\2\2\2\u04c2\u04c4\5\u00dep\2\u04c3\u04c2\3\2\2\2\u04c3\u04c4"+
		"\3\2\2\2\u04c4\u04c6\3\2\2\2\u04c5\u04c7\5\u00e0q\2\u04c6\u04c5\3\2\2"+
		"\2\u04c6\u04c7\3\2\2\2\u04c7\u04cd\3\2\2\2\u04c8\u04c9\5\u00acW\2\u04c9"+
		"\u04ca\5\u00b2Z\2\u04ca\u04cb\5\u00e6t\2\u04cb\u04cd\3\2\2\2\u04cc\u04ba"+
		"\3\2\2\2\u04cc\u04c8\3\2\2\2\u04cd\u00ab\3\2\2\2\u04ce\u04d0\7\u014c\2"+
		"\2\u04cf\u04d1\5\u0168\u00b5\2\u04d0\u04cf\3\2\2\2\u04d0\u04d1\3\2\2\2"+
		"\u04d1\u04db\3\2\2\2\u04d2\u04dc\7\u0190\2\2\u04d3\u04d8\5\u00aeX\2\u04d4"+
		"\u04d5\7\u0189\2\2\u04d5\u04d7\5\u00aeX\2\u04d6\u04d4\3\2\2\2\u04d7\u04da"+
		"\3\2\2\2\u04d8\u04d6\3\2\2\2\u04d8\u04d9\3\2\2\2\u04d9\u04dc\3\2\2\2\u04da"+
		"\u04d8\3\2\2\2\u04db\u04d2\3\2\2\2\u04db\u04d3\3\2\2\2\u04dc\u00ad\3\2"+
		"\2\2\u04dd\u04e6\5\u00b0Y\2\u04de\u04e3\5\u0104\u0083\2\u04df\u04e1\7"+
		"\u00bb\2\2\u04e0\u04df\3\2\2\2\u04e0\u04e1\3\2\2\2\u04e1\u04e2\3\2\2\2"+
		"\u04e2\u04e4\5\u0104\u0083\2\u04e3\u04e0\3\2\2\2\u04e3\u04e4\3\2\2\2\u04e4"+
		"\u04e6\3\2\2\2\u04e5\u04dd\3\2\2\2\u04e5\u04de\3\2\2\2\u04e6\u00af\3\2"+
		"\2\2\u04e7\u04e8\5\u010e\u0088\2\u04e8\u04e9\7\u0137\2\2\u04e9\u04ea\5"+
		"\u00e4s\2\u04ea\u04eb\7\u00bb\2\2\u04eb\u04ec\5\u0132\u009a\2\u04ec\u04f4"+
		"\3\2\2\2\u04ed\u04ee\5\u010e\u0088\2\u04ee\u04ef\7\u0137\2\2\u04ef\u04f0"+
		"\5\u012a\u0096\2\u04f0\u04f1\7\u00bb\2\2\u04f1\u04f2\5\u0132\u009a\2\u04f2"+
		"\u04f4\3\2\2\2\u04f3\u04e7\3\2\2\2\u04f3\u04ed\3\2\2\2\u04f4\u00b1\3\2"+
		"\2\2\u04f5\u04f6\7\u00fe\2\2\u04f6\u04f7\5\u00b4[\2\u04f7\u00b3\3\2\2"+
		"\2\u04f8\u04f9\b[\1\2\u04f9\u04fe\5\u00b6\\\2\u04fa\u04fb\7\u0189\2\2"+
		"\u04fb\u04fd\5\u00b6\\\2\u04fc\u04fa\3\2\2\2\u04fd\u0500\3\2\2\2\u04fe"+
		"\u04fc\3\2\2\2\u04fe\u04ff\3\2\2\2\u04ff\u0504\3\2\2\2\u0500\u04fe\3\2"+
		"\2\2\u0501\u0504\5\u00be`\2\u0502\u0504\5\u00c0a\2\u0503\u04f8\3\2\2\2"+
		"\u0503\u0501\3\2\2\2\u0503\u0502\3\2\2\2\u0504\u051a\3\2\2\2\u0505\u0506"+
		"\f\5\2\2\u0506\u0507\7\u00de\2\2\u0507\u0508\7\u0114\2\2\u0508\u0519\5"+
		"\u00b4[\6\u0509\u050b\f\6\2\2\u050a\u050c\7\u0128\2\2\u050b\u050a\3\2"+
		"\2\2\u050b\u050c\3\2\2\2\u050c\u050e\3\2\2\2\u050d\u050f\t\27\2\2\u050e"+
		"\u050d\3\2\2\2\u050e\u050f\3\2\2\2\u050f\u0511\3\2\2\2\u0510\u0512\7\u0136"+
		"\2\2\u0511\u0510\3\2\2\2\u0511\u0512\3\2\2\2\u0512\u0513\3\2\2\2\u0513"+
		"\u0514\7\u0114\2\2\u0514\u0516\5\u00b4[\2\u0515\u0517\5\u00ccg\2\u0516"+
		"\u0515\3\2\2\2\u0516\u0517\3\2\2\2\u0517\u0519\3\2\2\2\u0518\u0505\3\2"+
		"\2\2\u0518\u0509\3\2\2\2\u0519\u051c\3\2\2\2\u051a\u0518\3\2\2\2\u051a"+
		"\u051b\3\2\2\2\u051b\u00b5\3\2\2\2\u051c\u051a\3\2\2\2\u051d\u051f\5\u00b8"+
		"]\2\u051e\u0520\5\u0128\u0095\2\u051f\u051e\3\2\2\2\u051f\u0520\3\2\2"+
		"\2\u0520\u00b7\3\2\2\2\u0521\u0523\7\u015a\2\2\u0522\u0521\3\2\2\2\u0522"+
		"\u0523\3\2\2\2\u0523\u0524\3\2\2\2\u0524\u0526\5\u0142\u00a2\2\u0525\u0527"+
		"\5\u00ba^\2\u0526\u0525\3\2\2\2\u0526\u0527\3\2\2\2\u0527\u052c\3\2\2"+
		"\2\u0528\u052a\7\u00bb\2\2\u0529\u0528\3\2\2\2\u0529\u052a\3\2\2\2\u052a"+
		"\u052b\3\2\2\2\u052b\u052d\5\u0116\u008c\2\u052c\u0529\3\2\2\2\u052c\u052d"+
		"\3\2\2\2\u052d\u054b\3\2\2\2\u052e\u052f\7\u0117\2\2\u052f\u0530\7\u015a"+
		"\2\2\u0530\u0531\7\u0185\2\2\u0531\u0532\5\u0110\u0089\2\u0532\u0533\7"+
		"\u0185\2\2\u0533\u0538\5\u0112\u008a\2\u0534\u0535\7\u0189\2\2\u0535\u0537"+
		"\5\u0112\u008a\2\u0536\u0534\3\2\2\2\u0537\u053a\3\2\2\2\u0538\u0536\3"+
		"\2\2\2\u0538\u0539\3\2\2\2\u0539\u053b\3\2\2\2\u053a\u0538\3\2\2\2\u053b"+
		"\u053c\7\u0186\2\2\u053c\u053d\7\u0186\2\2\u053d\u054b\3\2\2\2\u053e\u0540"+
		"\7\u0117\2\2\u053f\u053e\3\2\2\2\u053f\u0540\3\2\2\2\u0540\u0541\3\2\2"+
		"\2\u0541\u0542\7\u0185\2\2\u0542\u0543\5\u00a0Q\2\u0543\u0544\7\u0186"+
		"\2\2\u0544\u054b\3\2\2\2\u0545\u0546\7\u016a\2\2\u0546\u0547\7\u0185\2"+
		"\2\u0547\u0548\5\u0104\u0083\2\u0548\u0549\7\u0186\2\2\u0549\u054b\3\2"+
		"\2\2\u054a\u0522\3\2\2\2\u054a\u052e\3\2\2\2\u054a\u053f\3\2\2\2\u054a"+
		"\u0545\3\2\2\2\u054b\u00b9\3\2\2\2\u054c\u054d\7\u00fd\2\2\u054d\u054e"+
		"\7\u0158\2\2\u054e\u054f\7\u00bb\2\2\u054f\u0550\7\u012f\2\2\u0550\u0551"+
		"\5\u00bc_\2\u0551\u00bb\3\2\2\2\u0552\u0553\5\u0104\u0083\2\u0553\u00bd"+
		"\3\2\2\2\u0554\u0555\7\u0185\2\2\u0555\u0556\5\u0098M\2\u0556\u0557\7"+
		"\u0186\2\2\u0557\u0558\5\u0128\u0095\2\u0558\u00bf\3\2\2\2\u0559\u055a"+
		"\7\u015a\2\2\u055a\u055b\7\u0185\2\2\u055b\u055c\5\u00c2b\2\u055c\u055d"+
		"\7\u0186\2\2\u055d\u00c1\3\2\2\2\u055e\u055f\5\u00c4c\2\u055f\u0560\7"+
		"\u0185\2\2\u0560\u0565\5\u00c6d\2\u0561\u0562\7\u0189\2\2\u0562\u0564"+
		"\5\u00c6d\2\u0563\u0561\3\2\2\2\u0564\u0567\3\2\2\2\u0565\u0563\3\2\2"+
		"\2\u0565\u0566\3\2\2\2\u0566\u0568\3\2\2\2\u0567\u0565\3\2\2\2\u0568\u0569"+
		"\7\u0186\2\2\u0569\u00c3\3\2\2\2\u056a\u056b\t\30\2\2\u056b\u00c5\3\2"+
		"\2\2\u056c\u056d\7\u015a\2\2\u056d\u057c\5\u00dco\2\u056e\u057c\5\u00ca"+
		"f\2\u056f\u057c\5\u011a\u008e\2\u0570\u0571\7\32\2\2\u0571\u0572\7\u0199"+
		"\2\2\u0572\u0573\7\u015a\2\2\u0573\u057c\5\u00dco\2\u0574\u0575\7\u0099"+
		"\2\2\u0575\u0576\7\u0199\2\2\u0576\u057c\5\u00caf\2\u0577\u0578\5\u00c8"+
		"e\2\u0578\u0579\7\u0199\2\2\u0579\u057a\5\u011a\u008e\2\u057a\u057c\3"+
		"\2\2\2\u057b\u056c\3\2\2\2\u057b\u056e\3\2\2\2\u057b\u056f\3\2\2\2\u057b"+
		"\u0570\3\2\2\2\u057b\u0574\3\2\2\2\u057b\u0577\3\2\2\2\u057c\u00c7\3\2"+
		"\2\2\u057d\u057e\t\31\2\2\u057e\u00c9\3\2\2\2\u057f\u0580\7!\2\2\u0580"+
		"\u0581\7\u0185\2\2\u0581\u0582\5\u0144\u00a3\2\u0582\u0583\7\u0186\2\2"+
		"\u0583\u00cb\3\2\2\2\u0584\u0585\7\u0131\2\2\u0585\u0593\5\u0106\u0084"+
		"\2\u0586\u0587\7\u016e\2\2\u0587\u0588\7\u0185\2\2\u0588\u058d\5\u0144"+
		"\u00a3\2\u0589\u058a\7\u0189\2\2\u058a\u058c\5\u0144\u00a3\2\u058b\u0589"+
		"\3\2\2\2\u058c\u058f\3\2\2\2\u058d\u058b\3\2\2\2\u058d\u058e\3\2\2\2\u058e"+
		"\u0590\3\2\2\2\u058f\u058d\3\2\2\2\u0590\u0591\7\u0186\2\2\u0591\u0593"+
		"\3\2\2\2\u0592\u0584\3\2\2\2\u0592\u0586\3\2\2\2\u0593\u00cd\3\2\2\2\u0594"+
		"\u0595\7\u0174\2\2\u0595\u0596\5\u0106\u0084\2\u0596\u00cf\3\2\2\2\u0597"+
		"\u0598\7\u0103\2\2\u0598\u0599\7\u00c7\2\2\u0599\u059e\5\u00d2j\2\u059a"+
		"\u059b\7\u0189\2\2\u059b\u059d\5\u00d2j\2\u059c\u059a\3\2\2\2\u059d\u05a0"+
		"\3\2\2\2\u059e\u059c\3\2\2\2\u059e\u059f\3\2\2\2\u059f\u00d1\3\2\2\2\u05a0"+
		"\u059e\3\2\2\2\u05a1\u05c9\5\u0104\u0083\2\u05a2\u05c9\5\u00d8m\2\u05a3"+
		"\u05a4\7\u0185\2\2\u05a4\u05c9\7\u0186\2\2\u05a5\u05a6\7\u0185\2\2\u05a6"+
		"\u05ab\5\u0104\u0083\2\u05a7\u05a8\7\u0189\2\2\u05a8\u05aa\5\u0104\u0083"+
		"\2\u05a9\u05a7\3\2\2\2\u05aa\u05ad\3\2\2\2\u05ab\u05a9\3\2\2\2\u05ab\u05ac"+
		"\3\2\2\2\u05ac\u05ae\3\2\2\2\u05ad\u05ab\3\2\2\2\u05ae\u05af\7\u0186\2"+
		"\2\u05af\u05c9\3\2\2\2\u05b0\u05b1\5\u00d6l\2\u05b1\u05b2\7\u0185\2\2"+
		"\u05b2\u05b7\5\u0104\u0083\2\u05b3\u05b4\7\u0189\2\2\u05b4\u05b6\5\u0104"+
		"\u0083\2\u05b5\u05b3\3\2\2\2\u05b6\u05b9\3\2\2\2\u05b7\u05b5\3\2\2\2\u05b7"+
		"\u05b8\3\2\2\2\u05b8\u05ba\3\2\2\2\u05b9\u05b7\3\2\2\2\u05ba\u05bb\7\u0186"+
		"\2\2\u05bb\u05c9\3\2\2\2\u05bc\u05bd\5\u00d4k\2\u05bd\u05be\7\u0185\2"+
		"\2\u05be\u05c3\5\u00d2j\2\u05bf\u05c0\7\u0189\2\2\u05c0\u05c2\5\u00d2"+
		"j\2\u05c1\u05bf\3\2\2\2\u05c2\u05c5\3\2\2\2\u05c3\u05c1\3\2\2\2\u05c3"+
		"\u05c4\3\2\2\2\u05c4\u05c6\3\2\2\2\u05c5\u05c3\3\2\2\2\u05c6\u05c7\7\u0186"+
		"\2\2\u05c7\u05c9\3\2\2\2\u05c8\u05a1\3\2\2\2\u05c8\u05a2\3\2\2\2\u05c8"+
		"\u05a3\3\2\2\2\u05c8\u05a5\3\2\2\2\u05c8\u05b0\3\2\2\2\u05c8\u05bc\3\2"+
		"\2\2\u05c9\u00d3\3\2\2\2\u05ca\u05cb\7\u0104\2\2\u05cb\u05cc\7\u008b\2"+
		"\2\u05cc\u00d5\3\2\2\2\u05cd\u05ce\t\32\2\2\u05ce\u00d7\3\2\2\2\u05cf"+
		"\u05d0\5\u00dan\2\u05d0\u05d1\7\u0185\2\2\u05d1\u05d2\5\u00dco\2\u05d2"+
		"\u05d3\7\u0189\2\2\u05d3\u05d4\5\u011a\u008e\2\u05d4\u05d5\7\u0186\2\2"+
		"\u05d5\u00d9\3\2\2\2\u05d6\u05d7\t\33\2\2\u05d7\u00db\3\2\2\2\u05d8\u05d9"+
		"\5\u0144\u00a3\2\u05d9\u00dd\3\2\2\2\u05da\u05db\7\u0106\2\2\u05db\u05dc"+
		"\5\u0106\u0084\2\u05dc\u00df\3\2\2\2\u05dd\u05de\7\u0175\2\2\u05de\u05e3"+
		"\5\u00e2r\2\u05df\u05e0\7\u0189\2\2\u05e0\u05e2\5\u00e2r\2\u05e1\u05df"+
		"\3\2\2\2\u05e2\u05e5\3\2\2\2\u05e3\u05e1\3\2\2\2\u05e3\u05e4\3\2\2\2\u05e4"+
		"\u00e1\3\2\2\2\u05e5\u05e3\3\2\2\2\u05e6\u05e7\5\u012a\u0096\2\u05e7\u05e8"+
		"\7\u00bb\2\2\u05e8\u05e9\5\u00e4s\2\u05e9\u00e3\3\2\2\2\u05ea\u05ec\5"+
		"\u012a\u0096\2\u05eb\u05ea\3\2\2\2\u05eb\u05ec\3\2\2\2\u05ec\u05ed\3\2"+
		"\2\2\u05ed\u05ef\7\u0185\2\2\u05ee\u05f0\5\u00eex\2\u05ef\u05ee\3\2\2"+
		"\2\u05ef\u05f0\3\2\2\2\u05f0\u05f2\3\2\2\2\u05f1\u05f3\5\u00e8u\2\u05f2"+
		"\u05f1\3\2\2\2\u05f2\u05f3\3\2\2\2\u05f3\u05f5\3\2\2\2\u05f4\u05f6\5\u00fe"+
		"\u0080\2\u05f5\u05f4\3\2\2\2\u05f5\u05f6\3\2\2\2\u05f6\u05f7\3\2\2\2\u05f7"+
		"\u05f8\7\u0186\2\2\u05f8\u00e5\3\2\2\2\u05f9\u05fa\7\u011e\2\2\u05fa\u05fc"+
		"\7\u0185\2\2\u05fb\u05fd\5\u00eex\2\u05fc\u05fb\3\2\2\2\u05fc\u05fd\3"+
		"\2\2\2\u05fd\u05ff\3\2\2\2\u05fe\u0600\5\u00e8u\2\u05ff\u05fe\3\2\2\2"+
		"\u05ff\u0600\3\2\2\2\u0600\u0602\3\2\2\2\u0601\u0603\5\u00f2z\2\u0602"+
		"\u0601\3\2\2\2\u0602\u0603\3\2\2\2\u0603\u0605\3\2\2\2\u0604\u0606\5\u00f8"+
		"}\2\u0605\u0604\3\2\2\2\u0605\u0606\3\2\2\2\u0606\u0608\3\2\2\2\u0607"+
		"\u0609\5\u00fa~\2\u0608\u0607\3\2\2\2\u0608\u0609\3\2\2\2\u0609\u060b"+
		"\3\2\2\2\u060a\u060c\5\u00f4{\2\u060b\u060a\3\2\2\2\u060b\u060c\3\2\2"+
		"\2\u060c\u060d\3\2\2\2\u060d\u060e\5\u00fc\177\2\u060e\u0613\7\u0186\2"+
		"\2\u060f\u0611\7\u00bb\2\2\u0610\u060f\3\2\2\2\u0610\u0611\3\2\2\2\u0611"+
		"\u0612\3\2\2\2\u0612\u0614\5\u0132\u009a\2\u0613\u0610\3\2\2\2\u0613\u0614"+
		"\3\2\2\2\u0614\u00e7\3\2\2\2\u0615\u0616\7\u0134\2\2\u0616\u0617\7\u00c7"+
		"\2\2\u0617\u061c\5\u00eav\2\u0618\u0619\7\u0189\2\2\u0619\u061b\5\u00ea"+
		"v\2\u061a\u0618\3\2\2\2\u061b\u061e\3\2\2\2\u061c\u061a\3\2\2\2\u061c"+
		"\u061d\3\2\2\2\u061d\u00e9\3\2\2\2\u061e\u061c\3\2\2\2\u061f\u0621\5\u0104"+
		"\u0083\2\u0620\u0622\t\34\2\2\u0621\u0620\3\2\2\2\u0621\u0622\3\2\2\2"+
		"\u0622\u0625\3\2\2\2\u0623\u0624\7Y\2\2\u0624\u0626\t\35\2\2\u0625\u0623"+
		"\3\2\2\2\u0625\u0626\3\2\2\2\u0626\u00eb\3\2\2\2\u0627\u062a\7\u011b\2"+
		"\2\u0628\u062b\7\u00b4\2\2\u0629\u062b\5\u0104\u0083\2\u062a\u0628\3\2"+
		"\2\2\u062a\u0629\3\2\2\2\u062b\u00ed\3\2\2\2\u062c\u062d\7\u0139\2\2\u062d"+
		"\u062e\7\u00c7\2\2\u062e\u0633\5\u0104\u0083\2\u062f\u0630\7\u0189\2\2"+
		"\u0630\u0632\5\u0104\u0083\2\u0631\u062f\3\2\2\2\u0632\u0635\3\2\2\2\u0633"+
		"\u0631\3\2\2\2\u0633\u0634\3\2\2\2\u0634\u00ef\3\2\2\2\u0635\u0633\3\2"+
		"\2\2\u0636\u0647\7\u0190\2\2\u0637\u0647\7\u0193\2\2\u0638\u0647\7\u0198"+
		"\2\2\u0639\u063a\7\u0187\2\2\u063a\u063b\7\u019b\2\2\u063b\u063c\7\u0189"+
		"\2\2\u063c\u063d\7\u019b\2\2\u063d\u0647\7\u0188\2\2\u063e\u063f\7\u0187"+
		"\2\2\u063f\u0640\7\u019b\2\2\u0640\u0641\7\u0189\2\2\u0641\u0647\7\u0188"+
		"\2\2\u0642\u0643\7\u0187\2\2\u0643\u0644\7\u0189\2\2\u0644\u0645\7\u019b"+
		"\2\2\u0645\u0647\7\u0188\2\2\u0646\u0636\3\2\2\2\u0646\u0637\3\2\2\2\u0646"+
		"\u0638\3\2\2\2\u0646\u0639\3\2\2\2\u0646\u063e\3\2\2\2\u0646\u0642\3\2"+
		"\2\2\u0647\u00f1\3\2\2\2\u0648\u0649\7\u011f\2\2\u0649\u064e\5\u00aeX"+
		"\2\u064a\u064b\7\u0189\2\2\u064b\u064d\5\u00aeX\2\u064c\u064a\3\2\2\2"+
		"\u064d\u0650\3\2\2\2\u064e\u064c\3\2\2\2\u064e\u064f\3\2\2\2\u064f\u00f3"+
		"\3\2\2\2\u0650\u064e\3\2\2\2\u0651\u0652\7\u013a\2\2\u0652\u0654\7\u0185"+
		"\2\2\u0653\u0655\5\u00f6|\2\u0654\u0653\3\2\2\2\u0655\u0656\3\2\2\2\u0656"+
		"\u0654\3\2\2\2\u0656\u0657\3\2\2\2\u0657\u0658\3\2\2\2\u0658\u065a\7\u0186"+
		"\2\2\u0659\u065b\5\u0102\u0082\2\u065a\u0659\3\2\2\2\u065a\u065b\3\2\2"+
		"\2\u065b\u00f5\3\2\2\2\u065c\u065e\5\u0134\u009b\2\u065d\u065f\5\u00f0"+
		"y\2\u065e\u065d\3\2\2\2\u065e\u065f\3\2\2\2\u065f\u00f7\3\2\2\2\u0660"+
		"\u0661\7\u00b4\2\2\u0661\u0662\7\u014a\2\2\u0662\u0663\7\u013b\2\2\u0663"+
		"\u0669\7\u011d\2\2\u0664\u0665\7\u0132\2\2\u0665\u0666\7\u0149\2\2\u0666"+
		"\u0667\7\u013b\2\2\u0667\u0669\7\u011d\2\2\u0668\u0660\3\2\2\2\u0668\u0664"+
		"\3\2\2\2\u0669\u00f9\3\2\2\2\u066a\u066b\7\b\2\2\u066b\u066c\7\u011d\2"+
		"\2\u066c\u066d\7\u0150\2\2\u066d\u066e\7d\2\2\u066e\u066f\7K\2\2\u066f"+
		"\u0683\7\u0149\2\2\u0670\u0671\7\b\2\2\u0671\u0672\7\u011d\2\2\u0672\u0673"+
		"\7\u0150\2\2\u0673\u0674\7\u0163\2\2\u0674\u0675\7\u0129\2\2\u0675\u0683"+
		"\7\u0149\2\2\u0676\u0677\7\b\2\2\u0677\u0678\7\u011d\2\2\u0678\u0679\7"+
		"\u0150\2\2\u0679\u067a\7\u0163\2\2\u067a\u067b\7K\2\2\u067b\u0683\5\u0134"+
		"\u009b\2\u067c\u067d\7\b\2\2\u067d\u067e\7\u011d\2\2\u067e\u067f\7\u0150"+
		"\2\2\u067f\u0680\7\u0163\2\2\u0680\u0681\7/\2\2\u0681\u0683\5\u0134\u009b"+
		"\2\u0682\u066a\3\2\2\2\u0682\u0670\3\2\2\2\u0682\u0676\3\2\2\2\u0682\u067c"+
		"\3\2\2\2\u0683\u00fb\3\2\2\2\u0684\u0685\7\u00ea\2\2\u0685\u068a\5\u00ae"+
		"X\2\u0686\u0687\7\u0189\2\2\u0687\u0689\5\u00aeX\2\u0688\u0686\3\2\2\2"+
		"\u0689\u068c\3\2\2\2\u068a\u0688\3\2\2\2\u068a\u068b\3\2\2\2\u068b\u00fd"+
		"\3\2\2\2\u068c\u068a\3\2\2\2\u068d\u068e\7\u0141\2\2\u068e\u068f\7\u00c0"+
		"\2\2\u068f\u0690\5\u011a\u008e\2\u0690\u0691\5\u0100\u0081\2\u0691\u0697"+
		"\3\2\2\2\u0692\u0693\7\u014a\2\2\u0693\u0694\7\u00c0\2\2\u0694\u0695\7"+
		"\u019b\2\2\u0695\u0697\5\u0100\u0081\2\u0696\u068d\3\2\2\2\u0696\u0692"+
		"\3\2\2\2\u0697\u00ff\3\2\2\2\u0698\u0699\7h\2\2\u0699\u069a\7\u00b7\2"+
		"\2\u069a\u069b\7\u00e0\2\2\u069b\u069c\7\u0149\2\2\u069c\u0101\3\2\2\2"+
		"\u069d\u069e\7\u0177\2\2\u069e\u069f\5\u011a\u008e\2\u069f\u0103\3\2\2"+
		"\2\u06a0\u06a1\5\u0106\u0084\2\u06a1\u0105\3\2\2\2\u06a2\u06a3\b\u0084"+
		"\1\2\u06a3\u06a4\7\u012c\2\2\u06a4\u06af\5\u0106\u0084\b\u06a5\u06a6\7"+
		"\u00f7\2\2\u06a6\u06a7\7\u0185\2\2\u06a7\u06a8\5\u00a0Q\2\u06a8\u06a9"+
		"\7\u0186\2\2\u06a9\u06af\3\2\2\2\u06aa\u06ac\5\u010c\u0087\2\u06ab\u06ad"+
		"\5\u0108\u0085\2\u06ac\u06ab\3\2\2\2\u06ac\u06ad\3\2\2\2\u06ad\u06af\3"+
		"\2\2\2\u06ae\u06a2\3\2\2\2\u06ae\u06a5\3\2\2\2\u06ae\u06aa\3\2\2\2\u06af"+
		"\u06be\3\2\2\2\u06b0\u06b1\f\5\2\2\u06b1\u06b2\7\u00b7\2\2\u06b2\u06bd"+
		"\5\u0106\u0084\6\u06b3\u06b4\f\4\2\2\u06b4\u06b5\7\u0133\2\2\u06b5\u06bd"+
		"\5\u0106\u0084\5\u06b6\u06b7\f\3\2\2\u06b7\u06b9\7\u0113\2\2\u06b8\u06ba"+
		"\7\u012c\2\2\u06b9\u06b8\3\2\2\2\u06b9\u06ba\3\2\2\2\u06ba\u06bb\3\2\2"+
		"\2\u06bb\u06bd\t\36\2\2\u06bc\u06b0\3\2\2\2\u06bc\u06b3\3\2\2\2\u06bc"+
		"\u06b6\3\2\2\2\u06bd\u06c0\3\2\2\2\u06be\u06bc\3\2\2\2\u06be\u06bf\3\2"+
		"\2\2\u06bf\u0107\3\2\2\2\u06c0\u06be\3\2\2\2\u06c1\u06c3\7\u012c\2\2\u06c2"+
		"\u06c1\3\2\2\2\u06c2\u06c3\3\2\2\2\u06c3\u06c4\3\2\2\2\u06c4\u06c6\7\u00c0"+
		"\2\2\u06c5\u06c7\t\37\2\2\u06c6\u06c5\3\2\2\2\u06c6\u06c7\3\2\2\2\u06c7"+
		"\u06c8\3\2\2\2\u06c8\u06c9\5\u010c\u0087\2\u06c9\u06ca\7\u00b7\2\2\u06ca"+
		"\u06cb\5\u010c\u0087\2\u06cb\u0705\3\2\2\2\u06cc\u06ce\7\u012c\2\2\u06cd"+
		"\u06cc\3\2\2\2\u06cd\u06ce\3\2\2\2\u06ce\u06cf\3\2\2\2\u06cf\u06d0\7\u0109"+
		"\2\2\u06d0\u06d1\7\u0185\2\2\u06d1\u06d6\5\u0104\u0083\2\u06d2\u06d3\7"+
		"\u0189\2\2\u06d3\u06d5\5\u0104\u0083\2\u06d4\u06d2\3\2\2\2\u06d5\u06d8"+
		"\3\2\2\2\u06d6\u06d4\3\2\2\2\u06d6\u06d7\3\2\2\2\u06d7\u06d9\3\2\2\2\u06d8"+
		"\u06d6\3\2\2\2\u06d9\u06da\7\u0186\2\2\u06da\u0705\3\2\2\2\u06db\u06dd"+
		"\7\u012c\2\2\u06dc\u06db\3\2\2\2\u06dc\u06dd\3\2\2\2\u06dd\u06de\3\2\2"+
		"\2\u06de\u06df\7\u0109\2\2\u06df\u06e0\7\u0185\2\2\u06e0\u06e1\5\u00a0"+
		"Q\2\u06e1\u06e2\7\u0186\2\2\u06e2\u0705\3\2\2\2\u06e3\u06e4\7\u00f7\2"+
		"\2\u06e4\u06e5\7\u0185\2\2\u06e5\u06e6\5\u00a0Q\2\u06e6\u06e7\7\u0186"+
		"\2\2\u06e7\u0705\3\2\2\2\u06e8\u06ea\7\u012c\2\2\u06e9\u06e8\3\2\2\2\u06e9"+
		"\u06ea\3\2\2\2\u06ea\u06eb\3\2\2\2\u06eb\u06ec\7\u0146\2\2\u06ec\u0705"+
		"\5\u010c\u0087\2\u06ed\u0705\5\u010a\u0086\2\u06ee\u06f0\7\u0113\2\2\u06ef"+
		"\u06f1\7\u012c\2\2\u06f0\u06ef\3\2\2\2\u06f0\u06f1\3\2\2\2\u06f1\u06f2"+
		"\3\2\2\2\u06f2\u0705\t\36\2\2\u06f3\u06f5\7\u0113\2\2\u06f4\u06f6\7\u012c"+
		"\2\2\u06f5\u06f4\3\2\2\2\u06f5\u06f6\3\2\2\2\u06f6\u06f7\3\2\2\2\u06f7"+
		"\u06f8\7\u00ed\2\2\u06f8\u06f9\7\u00fe\2\2\u06f9\u0705\5\u010c\u0087\2"+
		"\u06fa\u06fc\7\u012c\2\2\u06fb\u06fa\3\2\2\2\u06fb\u06fc\3\2\2\2\u06fc"+
		"\u06fd\3\2\2\2\u06fd\u06fe\7\u014f\2\2\u06fe\u06ff\7\u0163\2\2\u06ff\u0702"+
		"\5\u010c\u0087\2\u0700\u0701\7\u00f4\2\2\u0701\u0703\5\u0162\u00b2\2\u0702"+
		"\u0700\3\2\2\2\u0702\u0703\3\2\2\2\u0703\u0705\3\2\2\2\u0704\u06c2\3\2"+
		"\2\2\u0704\u06cd\3\2\2\2\u0704\u06dc\3\2\2\2\u0704\u06e3\3\2\2\2\u0704"+
		"\u06e9\3\2\2\2\u0704\u06ed\3\2\2\2\u0704\u06ee\3\2\2\2\u0704\u06f3\3\2"+
		"\2\2\u0704\u06fb\3\2\2\2\u0705\u0109\3\2\2\2\u0706\u0708\7\u012c\2\2\u0707"+
		"\u0706\3\2\2\2\u0707\u0708\3\2\2\2\u0708\u0709\3\2\2\2\u0709\u070a\7\u011a"+
		"\2\2\u070a\u0718\t \2\2\u070b\u070c\7\u0185\2\2\u070c\u0719\7\u0186\2"+
		"\2\u070d\u070e\7\u0185\2\2\u070e\u0713\5\u0104\u0083\2\u070f\u0710\7\u0189"+
		"\2\2\u0710\u0712\5\u0104\u0083\2\u0711\u070f\3\2\2\2\u0712\u0715\3\2\2"+
		"\2\u0713\u0711\3\2\2\2\u0713\u0714\3\2\2\2\u0714\u0716\3\2\2\2\u0715\u0713"+
		"\3\2\2\2\u0716\u0717\7\u0186\2\2\u0717\u0719\3\2\2\2\u0718\u070b\3\2\2"+
		"\2\u0718\u070d\3\2\2\2\u0719\u0724\3\2\2\2\u071a\u071c\7\u012c\2\2\u071b"+
		"\u071a\3\2\2\2\u071b\u071c\3\2\2\2\u071c\u071d\3\2\2\2\u071d\u071e\7\u011a"+
		"\2\2\u071e\u0721\5\u010c\u0087\2\u071f\u0720\7\u00f4\2\2\u0720\u0722\5"+
		"\u0162\u00b2\2\u0721\u071f\3\2\2\2\u0721\u0722\3\2\2\2\u0722\u0724\3\2"+
		"\2\2\u0723\u0707\3\2\2\2\u0723\u071b\3\2\2\2\u0724\u010b\3\2\2\2\u0725"+
		"\u0726\b\u0087\1\2\u0726\u072a\5\u010e\u0088\2\u0727\u0728\t!\2\2\u0728"+
		"\u072a\5\u010c\u0087\n\u0729\u0725\3\2\2\2\u0729\u0727\3\2\2\2\u072a\u0742"+
		"\3\2\2\2\u072b\u072c\f\t\2\2\u072c\u072d\t\"\2\2\u072d\u0741\5\u010c\u0087"+
		"\n\u072e\u072f\f\b\2\2\u072f\u0730\t#\2\2\u0730\u0741\5\u010c\u0087\t"+
		"\u0731\u0732\f\7\2\2\u0732\u0733\7\u0180\2\2\u0733\u0741\5\u010c\u0087"+
		"\b\u0734\u0735\f\6\2\2\u0735\u0736\7\u0181\2\2\u0736\u0741\5\u010c\u0087"+
		"\7\u0737\u0738\f\5\2\2\u0738\u0739\7\u017f\2\2\u0739\u0741\5\u010c\u0087"+
		"\6\u073a\u073b\f\4\2\2\u073b\u073c\5\u0156\u00ac\2\u073c\u073d\5\u010c"+
		"\u0087\5\u073d\u0741\3\2\2\2\u073e\u073f\f\3\2\2\u073f\u0741\7\u019f\2"+
		"\2\u0740\u072b\3\2\2\2\u0740\u072e\3\2\2\2\u0740\u0731\3\2\2\2\u0740\u0734"+
		"\3\2\2\2\u0740\u0737\3\2\2\2\u0740\u073a\3\2\2\2\u0740\u073e\3\2\2\2\u0741"+
		"\u0744\3\2\2\2\u0742\u0740\3\2\2\2\u0742\u0743\3\2\2\2\u0743\u010d\3\2"+
		"\2\2\u0744\u0742\3\2\2\2\u0745\u0746\b\u0088\1\2\u0746\u0748\7\u00cb\2"+
		"\2\u0747\u0749\5\u0138\u009d\2\u0748\u0747\3\2\2\2\u0749\u074a\3\2\2\2"+
		"\u074a\u0748\3\2\2\2\u074a\u074b\3\2\2\2\u074b\u074e\3\2\2\2\u074c\u074d"+
		"\7\u00f1\2\2\u074d\u074f\5\u0104\u0083\2\u074e\u074c\3\2\2\2\u074e\u074f"+
		"\3\2\2\2\u074f\u0750\3\2\2\2\u0750\u0751\7\u00f2\2\2\u0751\u07a1\3\2\2"+
		"\2\u0752\u0753\7\u00cb\2\2\u0753\u0755\5\u0104\u0083\2\u0754\u0756\5\u0138"+
		"\u009d\2\u0755\u0754\3\2\2\2\u0756\u0757\3\2\2\2\u0757\u0755\3\2\2\2\u0757"+
		"\u0758\3\2\2\2\u0758\u075b\3\2\2\2\u0759\u075a\7\u00f1\2\2\u075a\u075c"+
		"\5\u0104\u0083\2\u075b\u0759\3\2\2\2\u075b\u075c\3\2\2\2\u075c\u075d\3"+
		"\2\2\2\u075d\u075e\7\u00f2\2\2\u075e\u07a1\3\2\2\2\u075f\u0760\7\u00cc"+
		"\2\2\u0760\u0761\7\u0185\2\2\u0761\u0762\5\u0104\u0083\2\u0762\u0763\7"+
		"\u00bb\2\2\u0763\u0764\5:\36\2\u0764\u0765\7\u0186\2\2\u0765\u07a1\3\2"+
		"\2\2\u0766\u0767\7/\2\2\u0767\u0768\7\u0185\2\2\u0768\u076b\5\u0104\u0083"+
		"\2\u0769\u076a\7>\2\2\u076a\u076c\7Y\2\2\u076b\u0769\3\2\2\2\u076b\u076c"+
		"\3\2\2\2\u076c\u076d\3\2\2\2\u076d\u076e\7\u0186\2\2\u076e\u07a1\3\2\2"+
		"\2\u076f\u0770\7K\2\2\u0770\u0771\7\u0185\2\2\u0771\u0774\5\u0104\u0083"+
		"\2\u0772\u0773\7>\2\2\u0773\u0775\7Y\2\2\u0774\u0772\3\2\2\2\u0774\u0775"+
		"\3\2\2\2\u0775\u0776\3\2\2\2\u0776\u0777\7\u0186\2\2\u0777\u07a1\3\2\2"+
		"\2\u0778\u0779\7\u013e\2\2\u0779\u077a\7\u0185\2\2\u077a\u077b\5\u010c"+
		"\u0087\2\u077b\u077c\7\u0109\2\2\u077c\u077d\5\u010c\u0087\2\u077d\u077e"+
		"\7\u0186\2\2\u077e\u07a1\3\2\2\2\u077f\u07a1\5\u015e\u00b0\2\u0780\u07a1"+
		"\7\u0190\2\2\u0781\u0782\5\u0144\u00a3\2\u0782\u0783\7\u0182\2\2\u0783"+
		"\u0784\7\u0190\2\2\u0784\u07a1\3\2\2\2\u0785\u0786\7\u0185\2\2\u0786\u0787"+
		"\5\u00a0Q\2\u0787\u0788\7\u0186\2\2\u0788\u07a1\3\2\2\2\u0789\u078a\5"+
		"\u0110\u0089\2\u078a\u0796\7\u0185\2\2\u078b\u078d\5\u0168\u00b5\2\u078c"+
		"\u078b\3\2\2\2\u078c\u078d\3\2\2\2\u078d\u078e\3\2\2\2\u078e\u0793\5\u0112"+
		"\u008a\2\u078f\u0790\7\u0189\2\2\u0790\u0792\5\u0112\u008a\2\u0791\u078f"+
		"\3\2\2\2\u0792\u0795\3\2\2\2\u0793\u0791\3\2\2\2\u0793\u0794\3\2\2\2\u0794"+
		"\u0797\3\2\2\2\u0795\u0793\3\2\2\2\u0796\u078c\3\2\2\2\u0796\u0797\3\2"+
		"\2\2\u0797\u0798\3\2\2\2\u0798\u0799\7\u0186\2\2\u0799\u07a1\3\2\2\2\u079a"+
		"\u07a1\5\u0132\u009a\2\u079b\u07a1\5\u0114\u008b\2\u079c\u079d\7\u0185"+
		"\2\2\u079d\u079e\5\u0104\u0083\2\u079e\u079f\7\u0186\2\2\u079f\u07a1\3"+
		"\2\2\2\u07a0\u0745\3\2\2\2\u07a0\u0752\3\2\2\2\u07a0\u075f\3\2\2\2\u07a0"+
		"\u0766\3\2\2\2\u07a0\u076f\3\2\2\2\u07a0\u0778\3\2\2\2\u07a0\u077f\3\2"+
		"\2\2\u07a0\u0780\3\2\2\2\u07a0\u0781\3\2\2\2\u07a0\u0785\3\2\2\2\u07a0"+
		"\u0789\3\2\2\2\u07a0\u079a\3\2\2\2\u07a0\u079b\3\2\2\2\u07a0\u079c\3\2"+
		"\2\2\u07a1\u07a9\3\2\2\2\u07a2\u07a3\f\6\2\2\u07a3\u07a4\7\u0183\2\2\u07a4"+
		"\u07a5\5\u010c\u0087\2\u07a5\u07a6\7\u0184\2\2\u07a6\u07a8\3\2\2\2\u07a7"+
		"\u07a2\3\2\2\2\u07a8\u07ab\3\2\2\2\u07a9\u07a7\3\2\2\2\u07a9\u07aa\3\2"+
		"\2\2\u07aa\u010f\3\2\2\2\u07ab\u07a9\3\2\2\2\u07ac\u07b0\5\u0170\u00b9"+
		"\2\u07ad\u07b0\5\u0174\u00bb\2\u07ae\u07b0\5\u0144\u00a3\2\u07af\u07ac"+
		"\3\2\2\2\u07af\u07ad\3\2\2\2\u07af\u07ae\3\2\2\2\u07b0\u0111\3\2\2\2\u07b1"+
		"\u07b6\5\u016e\u00b8\2\u07b2\u07b6\5\u016c\u00b7\2\u07b3\u07b6\5\u016a"+
		"\u00b6\2\u07b4\u07b6\5\u0104\u0083\2\u07b5\u07b1\3\2\2\2\u07b5\u07b2\3"+
		"\2\2\2\u07b5\u07b3\3\2\2\2\u07b5\u07b4\3\2\2\2\u07b6\u0113\3\2\2\2\u07b7"+
		"\u07b8\5\u0144\u00a3\2\u07b8\u0115\3\2\2\2\u07b9\u07ba\5\u0132\u009a\2"+
		"\u07ba\u0117\3\2\2\2\u07bb\u07be\5\u0132\u009a\2\u07bc\u07be\5\u0114\u008b"+
		"\2\u07bd\u07bb\3\2\2\2\u07bd\u07bc\3\2\2\2\u07be\u0119\3\2\2\2\u07bf\u07c2"+
		"\7\u0111\2\2\u07c0\u07c3\5\u011c\u008f\2\u07c1\u07c3\5\u0120\u0091\2\u07c2"+
		"\u07c0\3\2\2\2\u07c2\u07c1\3\2\2\2\u07c2\u07c3\3\2\2\2\u07c3\u011b\3\2"+
		"\2\2\u07c4\u07c6\5\u011e\u0090\2\u07c5\u07c7\5\u0122\u0092\2\u07c6\u07c5"+
		"\3\2\2\2\u07c6\u07c7\3\2\2\2\u07c7\u011d\3\2\2\2\u07c8\u07c9\5\u0124\u0093"+
		"\2\u07c9\u07ca\5\u016c\u00b7\2\u07ca\u07cc\3\2\2\2\u07cb\u07c8\3\2\2\2"+
		"\u07cc\u07cd\3\2\2\2\u07cd\u07cb\3\2\2\2\u07cd\u07ce\3\2\2\2\u07ce\u011f"+
		"\3\2\2\2\u07cf\u07d2\5\u0122\u0092\2\u07d0\u07d3\5\u011e\u0090\2\u07d1"+
		"\u07d3\5\u0122\u0092\2\u07d2\u07d0\3\2\2\2\u07d2\u07d1\3\2\2\2\u07d2\u07d3"+
		"\3\2\2\2\u07d3\u0121\3\2\2\2\u07d4\u07d5\5\u0124\u0093\2\u07d5\u07d6\5"+
		"\u016c\u00b7\2\u07d6\u07d7\7\u0163\2\2\u07d7\u07d8\5\u016c\u00b7\2\u07d8"+
		"\u0123\3\2\2\2\u07d9\u07db\t$\2\2\u07da\u07d9\3\2\2\2\u07da\u07db\3\2"+
		"\2\2\u07db\u07dc\3\2\2\2\u07dc\u07df\t%\2\2\u07dd\u07df\7\u019a\2\2\u07de"+
		"\u07da\3\2\2\2\u07de\u07dd\3\2\2\2\u07df\u0125\3\2\2\2\u07e0\u07e2\7\u00bb"+
		"\2\2\u07e1\u07e0\3\2\2\2\u07e1\u07e2\3\2\2\2\u07e2\u07e3\3\2\2\2\u07e3"+
		"\u07e5\5\u0132\u009a\2\u07e4\u07e6\5\u012e\u0098\2\u07e5\u07e4\3\2\2\2"+
		"\u07e5\u07e6\3\2\2\2\u07e6\u0127\3\2\2\2\u07e7\u07e9\7\u00bb\2\2\u07e8"+
		"\u07e7\3\2\2\2\u07e8\u07e9\3\2\2\2\u07e9\u07ea\3\2\2\2\u07ea\u07ec\5\u0132"+
		"\u009a\2\u07eb\u07ed\5\u012e\u0098\2\u07ec\u07eb\3\2\2\2\u07ec\u07ed\3"+
		"\2\2\2\u07ed\u0129\3\2\2\2\u07ee\u07ef\5\u0132\u009a\2\u07ef\u07f0\5\u012c"+
		"\u0097\2\u07f0\u012b\3\2\2\2\u07f1\u07f2\7\u0122\2\2\u07f2\u07f4\5\u0132"+
		"\u009a\2\u07f3\u07f1\3\2\2\2\u07f4\u07f5\3\2\2\2\u07f5\u07f3\3\2\2\2\u07f5"+
		"\u07f6\3\2\2\2\u07f6\u07f9\3\2\2\2\u07f7\u07f9\3\2\2\2\u07f8\u07f3\3\2"+
		"\2\2\u07f8\u07f7\3\2\2\2\u07f9\u012d\3\2\2\2\u07fa\u07fb\7\u0185\2\2\u07fb"+
		"\u07fc\5\u0130\u0099\2\u07fc\u07fd\7\u0186\2\2\u07fd\u012f\3\2\2\2\u07fe"+
		"\u0803\5\u0132\u009a\2\u07ff\u0800\7\u0189\2\2\u0800\u0802\5\u0132\u009a"+
		"\2\u0801\u07ff\3\2\2\2\u0802\u0805\3\2\2\2\u0803\u0801\3\2\2\2\u0803\u0804"+
		"\3\2\2\2\u0804\u0131\3\2\2\2\u0805\u0803\3\2\2\2\u0806\u080a\5\u0134\u009b"+
		"\2\u0807\u080a\5\u0136\u009c\2\u0808\u080a\5\u0174\u00bb\2\u0809\u0806"+
		"\3\2\2\2\u0809\u0807\3\2\2\2\u0809\u0808\3\2\2\2\u080a\u0133\3\2\2\2\u080b"+
		"\u080c\t&\2\2\u080c\u0135\3\2\2\2\u080d\u080e\7\u019a\2\2\u080e\u0137"+
		"\3\2\2\2\u080f\u0810\7\u0173\2\2\u0810\u0811\5\u0104\u0083\2\u0811\u0812"+
		"\7\u015c\2\2\u0812\u0813\5\u0104\u0083\2\u0813\u0139\3\2\2\2\u0814\u0815"+
		"\5\u0144\u00a3\2\u0815\u013b\3\2\2\2\u0816\u0817\5\u0144\u00a3\2\u0817"+
		"\u013d\3\2\2\2\u0818\u0819\5\u0144\u00a3\2\u0819\u013f\3\2\2\2\u081a\u081b"+
		"\5\u0144\u00a3\2\u081b\u0141\3\2\2\2\u081c\u081d\5\u0144\u00a3\2\u081d"+
		"\u0143\3\2\2\2\u081e\u0823\5\u0132\u009a\2\u081f\u0820\7\u0182\2\2\u0820"+
		"\u0822\5\u0132\u009a\2\u0821\u081f\3\2\2\2\u0822\u0825\3\2\2\2\u0823\u0824"+
		"\3\2\2\2\u0823\u0821\3\2\2\2\u0824\u0145\3\2\2\2\u0825\u0823\3\2\2\2\u0826"+
		"\u0827\7\u0176\2\2\u0827\u0828\5\u014c\u00a7\2\u0828\u0147\3\2\2\2\u0829"+
		"\u082a\7=\2\2\u082a\u082b\7\u012c\2\2\u082b\u082c\7\u00f7\2\2\u082c\u0149"+
		"\3\2\2\2\u082d\u082e\7=\2\2\u082e\u082f\7\u00f7\2\2\u082f\u014b\3\2\2"+
		"\2\u0830\u0831\7\u0185\2\2\u0831\u0836\5\u014e\u00a8\2\u0832\u0833\7\u0189"+
		"\2\2\u0833\u0835\5\u014e\u00a8\2\u0834\u0832\3\2\2\2\u0835\u0838\3\2\2"+
		"\2\u0836\u0834\3\2\2\2\u0836\u0837\3\2\2\2\u0837\u0839\3\2\2\2\u0838\u0836"+
		"\3\2\2\2\u0839\u083a\7\u0186\2\2\u083a\u014d\3\2\2\2\u083b\u0840\5\u0150"+
		"\u00a9\2\u083c\u083e\7\u017a\2\2\u083d\u083c\3\2\2\2\u083d\u083e\3\2\2"+
		"\2\u083e\u083f\3\2\2\2\u083f\u0841\5\u0152\u00aa\2\u0840\u083d\3\2\2\2"+
		"\u0840\u0841\3\2\2\2\u0841\u014f\3\2\2\2\u0842\u0846\5\u0132\u009a\2\u0843"+
		"\u0846\5\u0114\u008b\2\u0844\u0846\7\u019a\2\2\u0845\u0842\3\2\2\2\u0845"+
		"\u0843\3\2\2\2\u0845\u0844\3\2\2\2\u0846\u0151\3\2\2\2\u0847\u084c\7\u019b"+
		"\2\2\u0848\u084c\7\u019c\2\2\u0849\u084c\5\u0166\u00b4\2\u084a\u084c\7"+
		"\u019a\2\2\u084b\u0847\3\2\2\2\u084b\u0848\3\2\2\2\u084b\u0849\3\2\2\2"+
		"\u084b\u084a\3\2\2\2\u084c\u0153\3\2\2\2\u084d\u0854\7\u00b7\2\2\u084e"+
		"\u084f\7\u0180\2\2\u084f\u0854\7\u0180\2\2\u0850\u0854\7\u0133\2\2\u0851"+
		"\u0852\7\u017f\2\2\u0852\u0854\7\u017f\2\2\u0853\u084d\3\2\2\2\u0853\u084e"+
		"\3\2\2\2\u0853\u0850\3\2\2\2\u0853\u0851\3\2\2\2\u0854\u0155\3\2\2\2\u0855"+
		"\u0864\7\u017a\2\2\u0856\u0864\7\u017b\2\2\u0857\u0864\7\u017c\2\2\u0858"+
		"\u0859\7\u017c\2\2\u0859\u0864\7\u017a\2\2\u085a\u085b\7\u017b\2\2\u085b"+
		"\u0864\7\u017a\2\2\u085c\u085d\7\u017c\2\2\u085d\u0864\7\u017b\2\2\u085e"+
		"\u085f\7\u017d\2\2\u085f\u0864\7\u017a\2\2\u0860\u0861\7\u017c\2\2\u0861"+
		"\u0862\7\u017a\2\2\u0862\u0864\7\u017b\2\2\u0863\u0855\3\2\2\2\u0863\u0856"+
		"\3\2\2\2\u0863\u0857\3\2\2\2\u0863\u0858\3\2\2\2\u0863\u085a\3\2\2\2\u0863"+
		"\u085c\3\2\2\2\u0863\u085e\3\2\2\2\u0863\u0860\3\2\2\2\u0864\u0157\3\2"+
		"\2\2\u0865\u0866\7\u017c\2\2\u0866\u086d\7\u017c\2\2\u0867\u0868\7\u017b"+
		"\2\2\u0868\u086d\7\u017b\2\2\u0869\u086d\7\u0180\2\2\u086a\u086d\7\u0181"+
		"\2\2\u086b\u086d\7\u017f\2\2\u086c\u0865\3\2\2\2\u086c\u0867\3\2\2\2\u086c"+
		"\u0869\3\2\2\2\u086c\u086a\3\2\2\2\u086c\u086b\3\2\2\2\u086d\u0159\3\2"+
		"\2\2\u086e\u086f\t\'\2\2\u086f\u015b\3\2\2\2\u0870\u0871\t(\2\2\u0871"+
		"\u015d\3\2\2\2\u0872\u0881\5\u011a\u008e\2\u0873\u0881\5\u0160\u00b1\2"+
		"\u0874\u0881\5\u0162\u00b2\2\u0875\u0877\7\u0192\2\2\u0876\u0875\3\2\2"+
		"\2\u0876\u0877\3\2\2\2\u0877\u0878\3\2\2\2\u0878\u0881\5\u0164\u00b3\2"+
		"\u0879\u0881\5\u0166\u00b4\2\u087a\u0881\7\u019c\2\2\u087b\u0881\7\u019d"+
		"\2\2\u087c\u087e\7\u012c\2\2\u087d\u087c\3\2\2\2\u087d\u087e\3\2\2\2\u087e"+
		"\u087f\3\2\2\2\u087f\u0881\7\u012d\2\2\u0880\u0872\3\2\2\2\u0880\u0873"+
		"\3\2\2\2\u0880\u0874\3\2\2\2\u0880\u0876\3\2\2\2\u0880\u0879\3\2\2\2\u0880"+
		"\u087a\3\2\2\2\u0880\u087b\3\2\2\2\u0880\u087d\3\2\2\2\u0881\u015f\3\2"+
		"\2\2\u0882\u0883\5\u016a\u00b6\2\u0883\u0884\5\u0162\u00b2\2\u0884\u0161"+
		"\3\2\2\2\u0885\u0886\7\u019a\2\2\u0886\u0163\3\2\2\2\u0887\u0888\7\u019b"+
		"\2\2\u0888\u0165\3\2\2\2\u0889\u088a\t)\2\2\u088a\u0167\3\2\2\2\u088b"+
		"\u088c\t*\2\2\u088c\u0169\3\2\2\2\u088d\u088e\t+\2\2\u088e\u016b\3\2\2"+
		"\2\u088f\u0890\t,\2\2\u0890\u016d\3\2\2\2\u0891\u0892\t-\2\2\u0892\u016f"+
		"\3\2\2\2\u0893\u0894\t.\2\2\u0894\u0171\3\2\2\2\u0895\u0896\t/\2\2\u0896"+
		"\u0173\3\2\2\2\u0897\u0898\t\60\2\2\u0898\u0175\3\2\2\2\u00ff\u017f\u0181"+
		"\u01a7\u01b9\u01bd\u01c6\u01cb\u01d2\u01dd\u01e6\u01f2\u01f5\u01fc\u0204"+
		"\u0209\u020c\u0213\u021b\u021f\u0228\u022c\u0230\u0234\u023d\u0242\u0246"+
		"\u024a\u024e\u0251\u0255\u025a\u0260\u0265\u026a\u026d\u0271\u0279\u0281"+
		"\u0285\u0289\u028d\u0291\u0295\u0299\u029d\u02a1\u02a5\u02a9\u02ad\u02b1"+
		"\u02b5\u02b9\u02bd\u02c1\u02c5\u02c7\u02d1\u02d9\u02f1\u02f8\u02fe\u0301"+
		"\u0304\u030e\u0311\u0319\u0325\u033d\u034a\u034f\u0353\u035b\u035f\u0365"+
		"\u036f\u0373\u0379\u037d\u0381\u0384\u038d\u0391\u0398\u039b\u03a5\u03ad"+
		"\u03b5\u03b9\u03c8\u03db\u03e6\u03ea\u03f1\u03f6\u03fc\u0400\u0407\u040b"+
		"\u040f\u0413\u041b\u041f\u0424\u042a\u0430\u0433\u0437\u0442\u044b\u0459"+
		"\u0465\u0474\u0477\u047b\u047e\u0480\u0485\u0489\u048c\u0490\u0499\u04a2"+
		"\u04ac\u04b1\u04bd\u04c0\u04c3\u04c6\u04cc\u04d0\u04d8\u04db\u04e0\u04e3"+
		"\u04e5\u04f3\u04fe\u0503\u050b\u050e\u0511\u0516\u0518\u051a\u051f\u0522"+
		"\u0526\u0529\u052c\u0538\u053f\u054a\u0565\u057b\u058d\u0592\u059e\u05ab"+
		"\u05b7\u05c3\u05c8\u05e3\u05eb\u05ef\u05f2\u05f5\u05fc\u05ff\u0602\u0605"+
		"\u0608\u060b\u0610\u0613\u061c\u0621\u0625\u062a\u0633\u0646\u064e\u0656"+
		"\u065a\u065e\u0668\u0682\u068a\u0696\u06ac\u06ae\u06b9\u06bc\u06be\u06c2"+
		"\u06c6\u06cd\u06d6\u06dc\u06e9\u06f0\u06f5\u06fb\u0702\u0704\u0707\u0713"+
		"\u0718\u071b\u0721\u0723\u0729\u0740\u0742\u074a\u074e\u0757\u075b\u076b"+
		"\u0774\u078c\u0793\u0796\u07a0\u07a9\u07af\u07b5\u07bd\u07c2\u07c6\u07cd"+
		"\u07d2\u07da\u07de\u07e1\u07e5\u07e8\u07ec\u07f5\u07f8\u0803\u0809\u0823"+
		"\u0836\u083d\u0840\u0845\u084b\u0853\u0863\u086c\u0876\u087d\u0880";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}