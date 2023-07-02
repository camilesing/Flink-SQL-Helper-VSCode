// Generated from gen/FlinkSQL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { FlinkSQLListener } from "./FlinkSQLListener";
import { FlinkSQLVisitor } from "./FlinkSQLVisitor";


export class FlinkSQLParser extends Parser {
	public static readonly SPACE = 1;
	public static readonly COMMENT_INPUT = 2;
	public static readonly LINE_COMMENT = 3;
	public static readonly KW_ADD = 4;
	public static readonly KW_ADMIN = 5;
	public static readonly KW_AFTER = 6;
	public static readonly KW_ANALYZE = 7;
	public static readonly KW_ASC = 8;
	public static readonly KW_BEFORE = 9;
	public static readonly KW_BYTES = 10;
	public static readonly KW_CASCADE = 11;
	public static readonly KW_CATALOG = 12;
	public static readonly KW_CATALOGS = 13;
	public static readonly KW_CENTURY = 14;
	public static readonly KW_CHAIN = 15;
	public static readonly KW_CHANGELOG_MODE = 16;
	public static readonly KW_CHARACTERS = 17;
	public static readonly KW_COMMENT = 18;
	public static readonly KW_COMPACT = 19;
	public static readonly KW_COLUMNS = 20;
	public static readonly KW_CONSTRAINTS = 21;
	public static readonly KW_CONSTRUCTOR = 22;
	public static readonly KW_CUMULATE = 23;
	public static readonly KW_DATA = 24;
	public static readonly KW_DATABASE = 25;
	public static readonly KW_DATABASES = 26;
	public static readonly KW_DAYS = 27;
	public static readonly KW_DECADE = 28;
	public static readonly KW_DEFINED = 29;
	public static readonly KW_DESC = 30;
	public static readonly KW_DESCRIPTOR = 31;
	public static readonly KW_DIV = 32;
	public static readonly KW_ENCODING = 33;
	public static readonly KW_ENFORCED = 34;
	public static readonly KW_ENGINE = 35;
	public static readonly KW_EPOCH = 36;
	public static readonly KW_ERROR = 37;
	public static readonly KW_ESTIMATED_COST = 38;
	public static readonly KW_EXCEPTION = 39;
	public static readonly KW_EXCLUDE = 40;
	public static readonly KW_EXCLUDING = 41;
	public static readonly KW_EXTENDED = 42;
	public static readonly KW_FILE = 43;
	public static readonly KW_FINAL = 44;
	public static readonly KW_FIRST = 45;
	public static readonly KW_FOLLOWING = 46;
	public static readonly KW_FORMAT = 47;
	public static readonly KW_FORTRAN = 48;
	public static readonly KW_FOUND = 49;
	public static readonly KW_FRAC_SECOND = 50;
	public static readonly KW_FUNCTIONS = 51;
	public static readonly KW_GENERAL = 52;
	public static readonly KW_GENERATED = 53;
	public static readonly KW_GO = 54;
	public static readonly KW_GOTO = 55;
	public static readonly KW_GRANTED = 56;
	public static readonly KW_HOP = 57;
	public static readonly KW_HOURS = 58;
	public static readonly KW_IF = 59;
	public static readonly KW_IGNORE = 60;
	public static readonly KW_INCREMENT = 61;
	public static readonly KW_INPUT = 62;
	public static readonly KW_INVOKER = 63;
	public static readonly KW_JAR = 64;
	public static readonly KW_JARS = 65;
	public static readonly KW_JAVA = 66;
	public static readonly KW_JSON = 67;
	public static readonly KW_JSON_EXECUTION_PLAN = 68;
	public static readonly KW_KEY = 69;
	public static readonly KW_KEY_MEMBER = 70;
	public static readonly KW_KEY_TYPE = 71;
	public static readonly KW_LABEL = 72;
	public static readonly KW_LAST = 73;
	public static readonly KW_LENGTH = 74;
	public static readonly KW_LEVEL = 75;
	public static readonly KW_LOAD = 76;
	public static readonly KW_MAP = 77;
	public static readonly KW_MICROSECOND = 78;
	public static readonly KW_MILLENNIUM = 79;
	public static readonly KW_MILLISECOND = 80;
	public static readonly KW_MINUTES = 81;
	public static readonly KW_MINVALUE = 82;
	public static readonly KW_MODIFY = 83;
	public static readonly KW_MODULES = 84;
	public static readonly KW_MONTHS = 85;
	public static readonly KW_NANOSECOND = 86;
	public static readonly KW_NULLS = 87;
	public static readonly KW_NUMBER = 88;
	public static readonly KW_OPTION = 89;
	public static readonly KW_OPTIONS = 90;
	public static readonly KW_ORDERING = 91;
	public static readonly KW_OUTPUT = 92;
	public static readonly KW_OVERWRITE = 93;
	public static readonly KW_OVERWRITING = 94;
	public static readonly KW_PARTITIONED = 95;
	public static readonly KW_PARTITIONS = 96;
	public static readonly KW_PASSING = 97;
	public static readonly KW_PAST = 98;
	public static readonly KW_PATH = 99;
	public static readonly KW_PLACING = 100;
	public static readonly KW_PLAN = 101;
	public static readonly KW_PRECEDING = 102;
	public static readonly KW_PRESERVE = 103;
	public static readonly KW_PRIOR = 104;
	public static readonly KW_PRIVILEGES = 105;
	public static readonly KW_PUBLIC = 106;
	public static readonly KW_PYTHON = 107;
	public static readonly KW_PYTHON_FILES = 108;
	public static readonly KW_PYTHON_REQUIREMENTS = 109;
	public static readonly KW_PYTHON_DEPENDENCIES = 110;
	public static readonly KW_PYTHON_JAR = 111;
	public static readonly KW_PYTHON_ARCHIVES = 112;
	public static readonly KW_PYTHON_PARAMETER = 113;
	public static readonly KW_QUARTER = 114;
	public static readonly KW_RAW = 115;
	public static readonly KW_READ = 116;
	public static readonly KW_RELATIVE = 117;
	public static readonly KW_REMOVE = 118;
	public static readonly KW_RENAME = 119;
	public static readonly KW_REPLACE = 120;
	public static readonly KW_RESPECT = 121;
	public static readonly KW_RESTART = 122;
	public static readonly KW_RESTRICT = 123;
	public static readonly KW_ROLE = 124;
	public static readonly KW_ROW_COUNT = 125;
	public static readonly KW_SCALA = 126;
	public static readonly KW_SCALAR = 127;
	public static readonly KW_SCALE = 128;
	public static readonly KW_SCHEMA = 129;
	public static readonly KW_SECONDS = 130;
	public static readonly KW_SECTION = 131;
	public static readonly KW_SECURITY = 132;
	public static readonly KW_SELF = 133;
	public static readonly KW_SERVER = 134;
	public static readonly KW_SERVER_NAME = 135;
	public static readonly KW_SESSION = 136;
	public static readonly KW_SETS = 137;
	public static readonly KW_SIMPLE = 138;
	public static readonly KW_SIZE = 139;
	public static readonly KW_SLIDE = 140;
	public static readonly KW_SOURCE = 141;
	public static readonly KW_SPACE = 142;
	public static readonly KW_STATE = 143;
	public static readonly KW_STATEMENT = 144;
	public static readonly KW_STEP = 145;
	public static readonly KW_STRING = 146;
	public static readonly KW_STRUCTURE = 147;
	public static readonly KW_STYLE = 148;
	public static readonly KW_TABLES = 149;
	public static readonly KW_TEMPORARY = 150;
	public static readonly KW_TIMECOL = 151;
	public static readonly KW_TIMESTAMP_LTZ = 152;
	public static readonly KW_TIMESTAMPADD = 153;
	public static readonly KW_TIMESTAMPDIFF = 154;
	public static readonly KW_TRANSFORM = 155;
	public static readonly KW_TUMBLE = 156;
	public static readonly KW_TYPE = 157;
	public static readonly KW_UNDER = 158;
	public static readonly KW_UNLOAD = 159;
	public static readonly KW_USAGE = 160;
	public static readonly KW_USE = 161;
	public static readonly KW_UTF16 = 162;
	public static readonly KW_UTF32 = 163;
	public static readonly KW_UTF8 = 164;
	public static readonly KW_VERSION = 165;
	public static readonly KW_VIEW = 166;
	public static readonly KW_VIEWS = 167;
	public static readonly KW_VIRTUAL = 168;
	public static readonly KW_WATERMARK = 169;
	public static readonly KW_WATERMARKS = 170;
	public static readonly KW_WEEK = 171;
	public static readonly KW_WEEKS = 172;
	public static readonly KW_WORK = 173;
	public static readonly KW_WRAPPER = 174;
	public static readonly KW_YEARS = 175;
	public static readonly KW_ZONE = 176;
	public static readonly KW_ABS = 177;
	public static readonly KW_ALL = 178;
	public static readonly KW_ALLOW = 179;
	public static readonly KW_ALTER = 180;
	public static readonly KW_AND = 181;
	public static readonly KW_ANY = 182;
	public static readonly KW_ARE = 183;
	public static readonly KW_ARRAY = 184;
	public static readonly KW_AS = 185;
	public static readonly KW_ASYMMETRIC = 186;
	public static readonly KW_AT = 187;
	public static readonly KW_AVG = 188;
	public static readonly KW_BEGIN = 189;
	public static readonly KW_BETWEEN = 190;
	public static readonly KW_BIGINT = 191;
	public static readonly KW_BINARY = 192;
	public static readonly KW_BIT = 193;
	public static readonly KW_BLOB = 194;
	public static readonly KW_BOOLEAN = 195;
	public static readonly KW_BOTH = 196;
	public static readonly KW_BY = 197;
	public static readonly KW_CALL = 198;
	public static readonly KW_CALLED = 199;
	public static readonly KW_CASCADED = 200;
	public static readonly KW_CASE = 201;
	public static readonly KW_CAST = 202;
	public static readonly KW_CEIL = 203;
	public static readonly KW_CHAR = 204;
	public static readonly KW_CHARACTER = 205;
	public static readonly KW_CHECK = 206;
	public static readonly KW_CLOB = 207;
	public static readonly KW_CLOSE = 208;
	public static readonly KW_COALESCE = 209;
	public static readonly KW_COLLATE = 210;
	public static readonly KW_COLLECT = 211;
	public static readonly KW_COLUMN = 212;
	public static readonly KW_COMMIT = 213;
	public static readonly KW_CONNECT = 214;
	public static readonly KW_CONSTRAINT = 215;
	public static readonly KW_CONTAINS = 216;
	public static readonly KW_CONVERT = 217;
	public static readonly KW_COUNT = 218;
	public static readonly KW_CREATE = 219;
	public static readonly KW_CROSS = 220;
	public static readonly KW_CUBE = 221;
	public static readonly KW_CURRENT = 222;
	public static readonly KW_CURSOR = 223;
	public static readonly KW_CYCLE = 224;
	public static readonly KW_DATE = 225;
	public static readonly KW_DATETIME = 226;
	public static readonly KW_DAY = 227;
	public static readonly KW_DEC = 228;
	public static readonly KW_DECIMAL = 229;
	public static readonly KW_DECLARE = 230;
	public static readonly KW_DEFAULT = 231;
	public static readonly KW_DEFINE = 232;
	public static readonly KW_DELETE = 233;
	public static readonly KW_DESCRIBE = 234;
	public static readonly KW_DISTINCT = 235;
	public static readonly KW_DOUBLE = 236;
	public static readonly KW_DROP = 237;
	public static readonly KW_EACH = 238;
	public static readonly KW_ELSE = 239;
	public static readonly KW_END = 240;
	public static readonly KW_EQUALS = 241;
	public static readonly KW_ESCAPE = 242;
	public static readonly KW_EXCEPT = 243;
	public static readonly KW_EXECUTE = 244;
	public static readonly KW_EXISTS = 245;
	public static readonly KW_EXPLAIN = 246;
	public static readonly KW_EXTERNAL = 247;
	public static readonly KW_EXTRACT = 248;
	public static readonly KW_FALSE = 249;
	public static readonly KW_FLOAT = 250;
	public static readonly KW_FOR = 251;
	public static readonly KW_FROM = 252;
	public static readonly KW_FULL = 253;
	public static readonly KW_FUNCTION = 254;
	public static readonly KW_GLOBAL = 255;
	public static readonly KW_GRANT = 256;
	public static readonly KW_GROUP = 257;
	public static readonly KW_GROUPING = 258;
	public static readonly KW_GROUPS = 259;
	public static readonly KW_HAVING = 260;
	public static readonly KW_HOUR = 261;
	public static readonly KW_IMPORT = 262;
	public static readonly KW_IN = 263;
	public static readonly KW_INCLUDING = 264;
	public static readonly KW_INNER = 265;
	public static readonly KW_INOUT = 266;
	public static readonly KW_INSERT = 267;
	public static readonly KW_INT = 268;
	public static readonly KW_INTEGER = 269;
	public static readonly KW_INTERSECT = 270;
	public static readonly KW_INTERVAL = 271;
	public static readonly KW_INTO = 272;
	public static readonly KW_IS = 273;
	public static readonly KW_JOIN = 274;
	public static readonly KW_LAG = 275;
	public static readonly KW_LANGUAGE = 276;
	public static readonly KW_LATERAL = 277;
	public static readonly KW_LEADING = 278;
	public static readonly KW_LEFT = 279;
	public static readonly KW_LIKE = 280;
	public static readonly KW_LIMIT = 281;
	public static readonly KW_LOCAL = 282;
	public static readonly KW_MATCH = 283;
	public static readonly KW_MATCH_RECOGNIZE = 284;
	public static readonly KW_MEASURES = 285;
	public static readonly KW_MERGE = 286;
	public static readonly KW_METADATA = 287;
	public static readonly KW_MINUS = 288;
	public static readonly KW_MINUTE = 289;
	public static readonly KW_MODIFIES = 290;
	public static readonly KW_MODULE = 291;
	public static readonly KW_MONTH = 292;
	public static readonly KW_MULTISET = 293;
	public static readonly KW_NATURAL = 294;
	public static readonly KW_NEXT = 295;
	public static readonly KW_NO = 296;
	public static readonly KW_NONE = 297;
	public static readonly KW_NOT = 298;
	public static readonly KW_NULL = 299;
	public static readonly KW_NUMERIC = 300;
	public static readonly KW_OF = 301;
	public static readonly KW_OFFSET = 302;
	public static readonly KW_ON = 303;
	public static readonly KW_ONE = 304;
	public static readonly KW_OR = 305;
	public static readonly KW_ORDER = 306;
	public static readonly KW_OUT = 307;
	public static readonly KW_OUTER = 308;
	public static readonly KW_OVER = 309;
	public static readonly KW_OVERLAY = 310;
	public static readonly KW_PARTITION = 311;
	public static readonly KW_PATTERN = 312;
	public static readonly KW_PER = 313;
	public static readonly KW_PERCENT = 314;
	public static readonly KW_PERIOD = 315;
	public static readonly KW_POSITION = 316;
	public static readonly KW_POWER = 317;
	public static readonly KW_PRIMARY = 318;
	public static readonly KW_RANGE = 319;
	public static readonly KW_RANK = 320;
	public static readonly KW_RESET = 321;
	public static readonly KW_REVOKE = 322;
	public static readonly KW_RIGHT = 323;
	public static readonly KW_RLIKE = 324;
	public static readonly KW_ROLLBACK = 325;
	public static readonly KW_ROLLUP = 326;
	public static readonly KW_ROW = 327;
	public static readonly KW_ROWS = 328;
	public static readonly KW_SECOND = 329;
	public static readonly KW_SELECT = 330;
	public static readonly KW_SET = 331;
	public static readonly KW_SHOW = 332;
	public static readonly KW_SIMILAR = 333;
	public static readonly KW_SKIP = 334;
	public static readonly KW_SMALLINT = 335;
	public static readonly KW_START = 336;
	public static readonly KW_STATIC = 337;
	public static readonly KW_SUBSTRING = 338;
	public static readonly KW_SUM = 339;
	public static readonly KW_SYMMETRIC = 340;
	public static readonly KW_SYSTEM = 341;
	public static readonly KW_SYSTEM_TIME = 342;
	public static readonly KW_SYSTEM_USER = 343;
	public static readonly KW_TABLE = 344;
	public static readonly KW_TABLESAMPLE = 345;
	public static readonly KW_THEN = 346;
	public static readonly KW_TIME = 347;
	public static readonly KW_TIMESTAMP = 348;
	public static readonly KW_TIMESTAMP_3 = 349;
	public static readonly KW_TIMESTAMP_6 = 350;
	public static readonly KW_TIMESTAMP_9 = 351;
	public static readonly KW_TINYINT = 352;
	public static readonly KW_TO = 353;
	public static readonly KW_TRAILING = 354;
	public static readonly KW_TRUE = 355;
	public static readonly KW_TRUNCATE = 356;
	public static readonly KW_UNION = 357;
	public static readonly KW_UNIQUE = 358;
	public static readonly KW_UNKNOWN = 359;
	public static readonly KW_UNNEST = 360;
	public static readonly KW_UPPER = 361;
	public static readonly KW_UPSERT = 362;
	public static readonly KW_USER = 363;
	public static readonly KW_USING = 364;
	public static readonly KW_VALUE = 365;
	public static readonly KW_VALUES = 366;
	public static readonly KW_VARBINARY = 367;
	public static readonly KW_VARCHAR = 368;
	public static readonly KW_WHEN = 369;
	public static readonly KW_WHERE = 370;
	public static readonly KW_WINDOW = 371;
	public static readonly KW_WITH = 372;
	public static readonly KW_WITHIN = 373;
	public static readonly KW_WITHOUT = 374;
	public static readonly KW_YEAR = 375;
	public static readonly EQUAL_SYMBOL = 376;
	public static readonly GREATER_SYMBOL = 377;
	public static readonly LESS_SYMBOL = 378;
	public static readonly EXCLAMATION_SYMBOL = 379;
	public static readonly BIT_NOT_OP = 380;
	public static readonly BIT_OR_OP = 381;
	public static readonly BIT_AND_OP = 382;
	public static readonly BIT_XOR_OP = 383;
	public static readonly DOT = 384;
	public static readonly LS_BRACKET = 385;
	public static readonly RS_BRACKET = 386;
	public static readonly LR_BRACKET = 387;
	public static readonly RR_BRACKET = 388;
	public static readonly LB_BRACKET = 389;
	public static readonly RB_BRACKET = 390;
	public static readonly COMMA = 391;
	public static readonly SEMICOLON = 392;
	public static readonly AT_SIGN = 393;
	public static readonly SINGLE_QUOTE_SYMB = 394;
	public static readonly DOUBLE_QUOTE_SYMB = 395;
	public static readonly REVERSE_QUOTE_SYMB = 396;
	public static readonly COLON_SYMB = 397;
	public static readonly ASTERISK_SIGN = 398;
	public static readonly UNDERLINE_SIGN = 399;
	public static readonly HYPNEN_SIGN = 400;
	public static readonly ADD_SIGN = 401;
	public static readonly PENCENT_SIGN = 402;
	public static readonly DOUBLE_VERTICAL_SIGN = 403;
	public static readonly DOUBLE_HYPNEN_SIGN = 404;
	public static readonly SLASH_SIGN = 405;
	public static readonly QUESTION_MARK_SIGN = 406;
	public static readonly DOUBLE_RIGHT_ARROW = 407;
	public static readonly STRING_LITERAL = 408;
	public static readonly DIG_LITERAL = 409;
	public static readonly REAL_LITERAL = 410;
	public static readonly BIT_STRING = 411;
	public static readonly ID_LITERAL = 412;
	public static readonly SLASH_TEXT = 413;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_sqlStatements = 2;
	public static readonly RULE_sqlStatement = 3;
	public static readonly RULE_emptyStatement = 4;
	public static readonly RULE_ddlStatement = 5;
	public static readonly RULE_dmlStatement = 6;
	public static readonly RULE_describeStatement = 7;
	public static readonly RULE_explainStatement = 8;
	public static readonly RULE_explainDetails = 9;
	public static readonly RULE_explainDetail = 10;
	public static readonly RULE_useStatement = 11;
	public static readonly RULE_useModuleStatement = 12;
	public static readonly RULE_showStatememt = 13;
	public static readonly RULE_loadStatement = 14;
	public static readonly RULE_unloadStatememt = 15;
	public static readonly RULE_setStatememt = 16;
	public static readonly RULE_resetStatememt = 17;
	public static readonly RULE_jarStatememt = 18;
	public static readonly RULE_dtFilePath = 19;
	public static readonly RULE_createTable = 20;
	public static readonly RULE_simpleCreateTable = 21;
	public static readonly RULE_createTableAsSelect = 22;
	public static readonly RULE_columnOptionDefinition = 23;
	public static readonly RULE_physicalColumnDefinition = 24;
	public static readonly RULE_columnName = 25;
	public static readonly RULE_columnNameList = 26;
	public static readonly RULE_columnType = 27;
	public static readonly RULE_lengthOneDimension = 28;
	public static readonly RULE_lengthTwoOptionalDimension = 29;
	public static readonly RULE_lengthTwoStringDimension = 30;
	public static readonly RULE_lengthOneTypeDimension = 31;
	public static readonly RULE_mapTypeDimension = 32;
	public static readonly RULE_rowTypeDimension = 33;
	public static readonly RULE_columnConstraint = 34;
	public static readonly RULE_commentSpec = 35;
	public static readonly RULE_metadataColumnDefinition = 36;
	public static readonly RULE_metadataKey = 37;
	public static readonly RULE_computedColumnDefinition = 38;
	public static readonly RULE_computedColumnExpression = 39;
	public static readonly RULE_watermarkDefinition = 40;
	public static readonly RULE_tableConstraint = 41;
	public static readonly RULE_constraintName = 42;
	public static readonly RULE_selfDefinitionClause = 43;
	public static readonly RULE_partitionDefinition = 44;
	public static readonly RULE_transformList = 45;
	public static readonly RULE_transform = 46;
	public static readonly RULE_transformArgument = 47;
	public static readonly RULE_likeDefinition = 48;
	public static readonly RULE_likeOption = 49;
	public static readonly RULE_createCatalog = 50;
	public static readonly RULE_createDatabase = 51;
	public static readonly RULE_createView = 52;
	public static readonly RULE_createFunction = 53;
	public static readonly RULE_usingClause = 54;
	public static readonly RULE_jarFileName = 55;
	public static readonly RULE_alterTable = 56;
	public static readonly RULE_renameDefinition = 57;
	public static readonly RULE_setKeyValueDefinition = 58;
	public static readonly RULE_addConstraint = 59;
	public static readonly RULE_dropConstraint = 60;
	public static readonly RULE_addUnique = 61;
	public static readonly RULE_notForced = 62;
	public static readonly RULE_alertView = 63;
	public static readonly RULE_alterDatabase = 64;
	public static readonly RULE_alterFunction = 65;
	public static readonly RULE_dropCatalog = 66;
	public static readonly RULE_dropTable = 67;
	public static readonly RULE_dropDatabase = 68;
	public static readonly RULE_dropView = 69;
	public static readonly RULE_dropFunction = 70;
	public static readonly RULE_insertStatement = 71;
	public static readonly RULE_insertSimpleStatement = 72;
	public static readonly RULE_insertPartitionDefinition = 73;
	public static readonly RULE_valuesDefinition = 74;
	public static readonly RULE_valuesRowDefinition = 75;
	public static readonly RULE_insertMulStatementCompatibility = 76;
	public static readonly RULE_insertMulStatement = 77;
	public static readonly RULE_queryStatement = 78;
	public static readonly RULE_valuesCaluse = 79;
	public static readonly RULE_withClause = 80;
	public static readonly RULE_withItem = 81;
	public static readonly RULE_withItemName = 82;
	public static readonly RULE_selectStatement = 83;
	public static readonly RULE_selectClause = 84;
	public static readonly RULE_projectItemDefinition = 85;
	public static readonly RULE_overWindowItem = 86;
	public static readonly RULE_fromClause = 87;
	public static readonly RULE_tableExpression = 88;
	public static readonly RULE_tableReference = 89;
	public static readonly RULE_tablePrimary = 90;
	public static readonly RULE_systemTimePeriod = 91;
	public static readonly RULE_dateTimeExpression = 92;
	public static readonly RULE_inlineDataValueClause = 93;
	public static readonly RULE_windoTVFClause = 94;
	public static readonly RULE_windowTVFExression = 95;
	public static readonly RULE_windoTVFName = 96;
	public static readonly RULE_windowTVFParam = 97;
	public static readonly RULE_timeIntervalParamName = 98;
	public static readonly RULE_columnDescriptor = 99;
	public static readonly RULE_joinCondition = 100;
	public static readonly RULE_whereClause = 101;
	public static readonly RULE_groupByClause = 102;
	public static readonly RULE_groupItemDefinition = 103;
	public static readonly RULE_groupingSets = 104;
	public static readonly RULE_groupingSetsNotaionName = 105;
	public static readonly RULE_groupWindowFunction = 106;
	public static readonly RULE_groupWindowFunctionName = 107;
	public static readonly RULE_timeAttrColumn = 108;
	public static readonly RULE_havingClause = 109;
	public static readonly RULE_windowClause = 110;
	public static readonly RULE_namedWindow = 111;
	public static readonly RULE_windowSpec = 112;
	public static readonly RULE_matchRecognizeClause = 113;
	public static readonly RULE_orderByCaluse = 114;
	public static readonly RULE_orderItemDefition = 115;
	public static readonly RULE_limitClause = 116;
	public static readonly RULE_partitionByClause = 117;
	public static readonly RULE_quantifiers = 118;
	public static readonly RULE_measuresClause = 119;
	public static readonly RULE_patternDefination = 120;
	public static readonly RULE_patternVariable = 121;
	public static readonly RULE_outputMode = 122;
	public static readonly RULE_afterMatchStrategy = 123;
	public static readonly RULE_patternVariablesDefination = 124;
	public static readonly RULE_windowFrame = 125;
	public static readonly RULE_frameBound = 126;
	public static readonly RULE_withinClause = 127;
	public static readonly RULE_expression = 128;
	public static readonly RULE_booleanExpression = 129;
	public static readonly RULE_predicate = 130;
	public static readonly RULE_likePredicate = 131;
	public static readonly RULE_valueExpression = 132;
	public static readonly RULE_primaryExpression = 133;
	public static readonly RULE_functionName = 134;
	public static readonly RULE_functionParam = 135;
	public static readonly RULE_dereferenceDefinition = 136;
	public static readonly RULE_correlationName = 137;
	public static readonly RULE_qualifiedName = 138;
	public static readonly RULE_timeIntervalExpression = 139;
	public static readonly RULE_errorCapturingMultiUnitsInterval = 140;
	public static readonly RULE_multiUnitsInterval = 141;
	public static readonly RULE_errorCapturingUnitToUnitInterval = 142;
	public static readonly RULE_unitToUnitInterval = 143;
	public static readonly RULE_intervalValue = 144;
	public static readonly RULE_columnAlias = 145;
	public static readonly RULE_tableAlias = 146;
	public static readonly RULE_errorCapturingIdentifier = 147;
	public static readonly RULE_errorCapturingIdentifierExtra = 148;
	public static readonly RULE_identifierList = 149;
	public static readonly RULE_identifierSeq = 150;
	public static readonly RULE_identifier = 151;
	public static readonly RULE_unquotedIdentifier = 152;
	public static readonly RULE_quotedIdentifier = 153;
	public static readonly RULE_whenClause = 154;
	public static readonly RULE_catalogPath = 155;
	public static readonly RULE_databasePath = 156;
	public static readonly RULE_databasePathCreate = 157;
	public static readonly RULE_tablePathCreate = 158;
	public static readonly RULE_tablePath = 159;
	public static readonly RULE_uid = 160;
	public static readonly RULE_withOption = 161;
	public static readonly RULE_ifNotExists = 162;
	public static readonly RULE_ifExists = 163;
	public static readonly RULE_tablePropertyList = 164;
	public static readonly RULE_tableProperty = 165;
	public static readonly RULE_tablePropertyKey = 166;
	public static readonly RULE_tablePropertyValue = 167;
	public static readonly RULE_logicalOperator = 168;
	public static readonly RULE_comparisonOperator = 169;
	public static readonly RULE_bitOperator = 170;
	public static readonly RULE_mathOperator = 171;
	public static readonly RULE_unaryOperator = 172;
	public static readonly RULE_constant = 173;
	public static readonly RULE_timePointLiteral = 174;
	public static readonly RULE_stringLiteral = 175;
	public static readonly RULE_decimalLiteral = 176;
	public static readonly RULE_booleanLiteral = 177;
	public static readonly RULE_setQuantifier = 178;
	public static readonly RULE_timePointUnit = 179;
	public static readonly RULE_timeIntervalUnit = 180;
	public static readonly RULE_reservedKeywordsUsedAsFuncParam = 181;
	public static readonly RULE_reservedKeywordsUsedAsFuncName = 182;
	public static readonly RULE_reservedKeywords = 183;
	public static readonly RULE_nonReservedKeywords = 184;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "sqlStatements", "sqlStatement", "emptyStatement", 
		"ddlStatement", "dmlStatement", "describeStatement", "explainStatement", 
		"explainDetails", "explainDetail", "useStatement", "useModuleStatement", 
		"showStatememt", "loadStatement", "unloadStatememt", "setStatememt", "resetStatememt", 
		"jarStatememt", "dtFilePath", "createTable", "simpleCreateTable", "createTableAsSelect", 
		"columnOptionDefinition", "physicalColumnDefinition", "columnName", "columnNameList", 
		"columnType", "lengthOneDimension", "lengthTwoOptionalDimension", "lengthTwoStringDimension", 
		"lengthOneTypeDimension", "mapTypeDimension", "rowTypeDimension", "columnConstraint", 
		"commentSpec", "metadataColumnDefinition", "metadataKey", "computedColumnDefinition", 
		"computedColumnExpression", "watermarkDefinition", "tableConstraint", 
		"constraintName", "selfDefinitionClause", "partitionDefinition", "transformList", 
		"transform", "transformArgument", "likeDefinition", "likeOption", "createCatalog", 
		"createDatabase", "createView", "createFunction", "usingClause", "jarFileName", 
		"alterTable", "renameDefinition", "setKeyValueDefinition", "addConstraint", 
		"dropConstraint", "addUnique", "notForced", "alertView", "alterDatabase", 
		"alterFunction", "dropCatalog", "dropTable", "dropDatabase", "dropView", 
		"dropFunction", "insertStatement", "insertSimpleStatement", "insertPartitionDefinition", 
		"valuesDefinition", "valuesRowDefinition", "insertMulStatementCompatibility", 
		"insertMulStatement", "queryStatement", "valuesCaluse", "withClause", 
		"withItem", "withItemName", "selectStatement", "selectClause", "projectItemDefinition", 
		"overWindowItem", "fromClause", "tableExpression", "tableReference", "tablePrimary", 
		"systemTimePeriod", "dateTimeExpression", "inlineDataValueClause", "windoTVFClause", 
		"windowTVFExression", "windoTVFName", "windowTVFParam", "timeIntervalParamName", 
		"columnDescriptor", "joinCondition", "whereClause", "groupByClause", "groupItemDefinition", 
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
		"uid", "withOption", "ifNotExists", "ifExists", "tablePropertyList", "tableProperty", 
		"tablePropertyKey", "tablePropertyValue", "logicalOperator", "comparisonOperator", 
		"bitOperator", "mathOperator", "unaryOperator", "constant", "timePointLiteral", 
		"stringLiteral", "decimalLiteral", "booleanLiteral", "setQuantifier", 
		"timePointUnit", "timeIntervalUnit", "reservedKeywordsUsedAsFuncParam", 
		"reservedKeywordsUsedAsFuncName", "reservedKeywords", "nonReservedKeywords",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'ADD'", "'ADMIN'", "'AFTER'", 
		"'ANALYZE'", "'ASC'", "'BEFORE'", "'BYTES'", "'CASCADE'", "'CATALOG'", 
		"'CATALOGS'", "'CENTURY'", "'CHAIN'", "'CHANGELOG_MODE'", "'CHARACTERS'", 
		undefined, "'COMPACT'", "'COLUMNS'", "'CONSTRAINTS'", "'CONSTRUCTOR'", 
		"'CUMULATE'", "'DATA'", "'DATABASE'", "'DATABASES'", "'DAYS'", "'DECADE'", 
		"'DEFINED'", "'DESC'", "'DESCRIPTOR'", "'DIV'", "'ENCODING'", "'ENFORCED'", 
		"'ENGINE'", "'EPOCH'", "'ERROR'", "'ESTIMATED_COST'", "'EXCEPTION'", "'EXCLUDE'", 
		"'EXCLUDING'", "'EXTENDED'", "'FILE'", "'FINAL'", "'FIRST'", "'FOLLOWING'", 
		"'FORMAT'", "'FORTRAN'", "'FOUND'", "'FRAC_SECOND'", "'FUNCTIONS'", "'GENERAL'", 
		"'GENERATED'", "'GO'", "'GOTO'", "'GRANTED'", "'HOP'", "'HOURS'", "'IF'", 
		"'IGNORE'", "'INCREMENT'", "'INPUT'", "'INVOKER'", "'JAR'", "'JARS'", 
		"'JAVA'", "'JSON'", "'JSON_EXECUTION_PLAN'", "'KEY'", "'KEY_MEMBER'", 
		"'KEY_TYPE'", "'LABEL'", "'LAST'", "'LENGTH'", "'LEVEL'", "'LOAD'", "'MAP'", 
		"'MICROSECOND'", "'MILLENNIUM'", "'MILLISECOND'", "'MINUTES'", "'MINVALUE'", 
		"'MODIFY'", "'MODULES'", "'MONTHS'", "'NANOSECOND'", "'NULLS'", "'NUMBER'", 
		"'OPTION'", "'OPTIONS'", "'ORDERING'", "'OUTPUT'", "'OVERWRITE'", "'OVERWRITING'", 
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
		"'TIMECOL'", "'TIMESTAMP_LTZ'", "'TIMESTAMPADD'", "'TIMESTAMPDIFF'", "'TRANSFORM'", 
		"'TUMBLE'", "'TYPE'", "'UNDER'", "'UNLOAD'", "'USAGE'", "'USE'", "'UTF16'", 
		"'UTF32'", "'UTF8'", "'VERSION'", "'VIEW'", "'VIEWS'", "'VIRTUAL'", "'WATERMARK'", 
		"'WATERMARKS'", "'WEEK'", "'WEEKS'", "'WORK'", "'WRAPPER'", "'YEARS'", 
		"'ZONE'", "'ABS'", "'ALL'", "'ALLOW'", "'ALTER'", "'AND'", "'ANY'", "'ARE'", 
		"'ARRAY'", "'AS'", "'ASYMMETRIC'", "'AT'", "'AVG'", "'BEGIN'", "'BETWEEN'", 
		"'BIGINT'", "'BINARY'", "'BIT'", "'BLOB'", "'BOOLEAN'", "'BOTH'", "'BY'", 
		"'CALL'", "'CALLED'", "'CASCADED'", "'CASE'", "'CAST'", "'CEIL'", "'CHAR'", 
		"'CHARACTER'", "'CHECK'", "'CLOB'", "'CLOSE'", "'COALESCE'", "'COLLATE'", 
		"'COLLECT'", "'COLUMN'", "'COMMIT'", "'CONNECT'", "'CONSTRAINT'", "'CONTAINS'", 
		"'CONVERT'", "'COUNT'", "'CREATE'", "'CROSS'", "'CUBE'", "'CURRENT'", 
		"'CURSOR'", "'CYCLE'", "'DATE'", "'DATETIME'", "'DAY'", "'DEC'", "'DECIMAL'", 
		"'DECLARE'", "'DEFAULT'", "'DEFINE'", "'DELETE'", "'DESCRIBE'", "'DISTINCT'", 
		"'DOUBLE'", "'DROP'", "'EACH'", "'ELSE'", "'END'", "'EQUALS'", "'ESCAPE'", 
		"'EXCEPT'", "'EXECUTE'", "'EXISTS'", "'EXPLAIN'", "'EXTERNAL'", "'EXTRACT'", 
		"'FALSE'", "'FLOAT'", "'FOR'", "'FROM'", "'FULL'", "'FUNCTION'", "'GLOBAL'", 
		"'GRANT'", "'GROUP'", "'GROUPING'", "'GROUPS'", "'HAVING'", "'HOUR'", 
		"'IMPORT'", "'IN'", "'INCLUDING'", "'INNER'", "'INOUT'", "'INSERT'", "'INT'", 
		"'INTEGER'", "'INTERSECT'", "'INTERVAL'", "'INTO'", "'IS'", "'JOIN'", 
		"'LAG'", "'LANGUAGE'", "'LATERAL'", "'LEADING'", "'LEFT'", "'LIKE'", "'LIMIT'", 
		"'LOCAL'", "'MATCH'", "'MATCH_RECOGNIZE'", "'MEASURES'", "'MERGE'", "'METADATA'", 
		"'MINUS'", "'MINUTE'", "'MODIFIES'", "'MODULE'", "'MONTH'", "'MULTISET'", 
		"'NATURAL'", "'NEXT'", "'NO'", "'NONE'", "'NOT'", "'NULL'", "'NUMERIC'", 
		"'OF'", "'OFFSET'", "'ON'", "'ONE'", "'OR'", "'ORDER'", "'OUT'", "'OUTER'", 
		"'OVER'", "'OVERLAY'", "'PARTITION'", "'PATTERN'", "'PER'", "'PERCENT'", 
		"'PERIOD'", "'POSITION'", "'POWER'", "'PRIMARY'", "'RANGE'", "'RANK'", 
		"'RESET'", "'REVOKE'", "'RIGHT'", "'RLIKE'", "'ROLLBACK'", "'ROLLUP'", 
		"'ROW'", "'ROWS'", "'SECOND'", "'SELECT'", "'SET'", "'SHOW'", "'SIMILAR'", 
		"'SKIP'", "'SMALLINT'", "'START'", "'STATIC'", "'SUBSTRING'", "'SUM'", 
		"'SYMMETRIC'", "'SYSTEM'", "'SYSTEM_TIME'", "'SYSTEM_USER'", "'TABLE'", 
		"'TABLESAMPLE'", "'THEN'", "'TIME'", "'TIMESTAMP'", "'TIMESTAMP(3)'", 
		"'TIMESTAMP(6)'", "'TIMESTAMP(9)'", "'TINYINT'", "'TO'", "'TRAILING'", 
		"'TRUE'", "'TRUNCATE'", "'UNION'", "'UNIQUE'", "'UNKNOWN'", "'UNNEST'", 
		"'UPPER'", "'UPSERT'", "'USER'", "'USING'", "'VALUE'", "'VALUES'", "'VARBINARY'", 
		"'VARCHAR'", "'WHEN'", "'WHERE'", "'WINDOW'", "'WITH'", "'WITHIN'", "'WITHOUT'", 
		"'YEAR'", "'='", "'>'", "'<'", "'!'", "'~'", "'|'", "'&'", "'^'", "'.'", 
		"'['", "']'", "'('", "')'", "'{'", "'}'", "','", "';'", "'@'", "'''", 
		"'\"'", "'`'", "':'", "'*'", "'_'", "'-'", "'+'", "'%'", "'||'", "'--'", 
		"'/'", "'?'", "'=>'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SPACE", "COMMENT_INPUT", "LINE_COMMENT", "KW_ADD", "KW_ADMIN", 
		"KW_AFTER", "KW_ANALYZE", "KW_ASC", "KW_BEFORE", "KW_BYTES", "KW_CASCADE", 
		"KW_CATALOG", "KW_CATALOGS", "KW_CENTURY", "KW_CHAIN", "KW_CHANGELOG_MODE", 
		"KW_CHARACTERS", "KW_COMMENT", "KW_COMPACT", "KW_COLUMNS", "KW_CONSTRAINTS", 
		"KW_CONSTRUCTOR", "KW_CUMULATE", "KW_DATA", "KW_DATABASE", "KW_DATABASES", 
		"KW_DAYS", "KW_DECADE", "KW_DEFINED", "KW_DESC", "KW_DESCRIPTOR", "KW_DIV", 
		"KW_ENCODING", "KW_ENFORCED", "KW_ENGINE", "KW_EPOCH", "KW_ERROR", "KW_ESTIMATED_COST", 
		"KW_EXCEPTION", "KW_EXCLUDE", "KW_EXCLUDING", "KW_EXTENDED", "KW_FILE", 
		"KW_FINAL", "KW_FIRST", "KW_FOLLOWING", "KW_FORMAT", "KW_FORTRAN", "KW_FOUND", 
		"KW_FRAC_SECOND", "KW_FUNCTIONS", "KW_GENERAL", "KW_GENERATED", "KW_GO", 
		"KW_GOTO", "KW_GRANTED", "KW_HOP", "KW_HOURS", "KW_IF", "KW_IGNORE", "KW_INCREMENT", 
		"KW_INPUT", "KW_INVOKER", "KW_JAR", "KW_JARS", "KW_JAVA", "KW_JSON", "KW_JSON_EXECUTION_PLAN", 
		"KW_KEY", "KW_KEY_MEMBER", "KW_KEY_TYPE", "KW_LABEL", "KW_LAST", "KW_LENGTH", 
		"KW_LEVEL", "KW_LOAD", "KW_MAP", "KW_MICROSECOND", "KW_MILLENNIUM", "KW_MILLISECOND", 
		"KW_MINUTES", "KW_MINVALUE", "KW_MODIFY", "KW_MODULES", "KW_MONTHS", "KW_NANOSECOND", 
		"KW_NULLS", "KW_NUMBER", "KW_OPTION", "KW_OPTIONS", "KW_ORDERING", "KW_OUTPUT", 
		"KW_OVERWRITE", "KW_OVERWRITING", "KW_PARTITIONED", "KW_PARTITIONS", "KW_PASSING", 
		"KW_PAST", "KW_PATH", "KW_PLACING", "KW_PLAN", "KW_PRECEDING", "KW_PRESERVE", 
		"KW_PRIOR", "KW_PRIVILEGES", "KW_PUBLIC", "KW_PYTHON", "KW_PYTHON_FILES", 
		"KW_PYTHON_REQUIREMENTS", "KW_PYTHON_DEPENDENCIES", "KW_PYTHON_JAR", "KW_PYTHON_ARCHIVES", 
		"KW_PYTHON_PARAMETER", "KW_QUARTER", "KW_RAW", "KW_READ", "KW_RELATIVE", 
		"KW_REMOVE", "KW_RENAME", "KW_REPLACE", "KW_RESPECT", "KW_RESTART", "KW_RESTRICT", 
		"KW_ROLE", "KW_ROW_COUNT", "KW_SCALA", "KW_SCALAR", "KW_SCALE", "KW_SCHEMA", 
		"KW_SECONDS", "KW_SECTION", "KW_SECURITY", "KW_SELF", "KW_SERVER", "KW_SERVER_NAME", 
		"KW_SESSION", "KW_SETS", "KW_SIMPLE", "KW_SIZE", "KW_SLIDE", "KW_SOURCE", 
		"KW_SPACE", "KW_STATE", "KW_STATEMENT", "KW_STEP", "KW_STRING", "KW_STRUCTURE", 
		"KW_STYLE", "KW_TABLES", "KW_TEMPORARY", "KW_TIMECOL", "KW_TIMESTAMP_LTZ", 
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
		"KW_DOUBLE", "KW_DROP", "KW_EACH", "KW_ELSE", "KW_END", "KW_EQUALS", "KW_ESCAPE", 
		"KW_EXCEPT", "KW_EXECUTE", "KW_EXISTS", "KW_EXPLAIN", "KW_EXTERNAL", "KW_EXTRACT", 
		"KW_FALSE", "KW_FLOAT", "KW_FOR", "KW_FROM", "KW_FULL", "KW_FUNCTION", 
		"KW_GLOBAL", "KW_GRANT", "KW_GROUP", "KW_GROUPING", "KW_GROUPS", "KW_HAVING", 
		"KW_HOUR", "KW_IMPORT", "KW_IN", "KW_INCLUDING", "KW_INNER", "KW_INOUT", 
		"KW_INSERT", "KW_INT", "KW_INTEGER", "KW_INTERSECT", "KW_INTERVAL", "KW_INTO", 
		"KW_IS", "KW_JOIN", "KW_LAG", "KW_LANGUAGE", "KW_LATERAL", "KW_LEADING", 
		"KW_LEFT", "KW_LIKE", "KW_LIMIT", "KW_LOCAL", "KW_MATCH", "KW_MATCH_RECOGNIZE", 
		"KW_MEASURES", "KW_MERGE", "KW_METADATA", "KW_MINUS", "KW_MINUTE", "KW_MODIFIES", 
		"KW_MODULE", "KW_MONTH", "KW_MULTISET", "KW_NATURAL", "KW_NEXT", "KW_NO", 
		"KW_NONE", "KW_NOT", "KW_NULL", "KW_NUMERIC", "KW_OF", "KW_OFFSET", "KW_ON", 
		"KW_ONE", "KW_OR", "KW_ORDER", "KW_OUT", "KW_OUTER", "KW_OVER", "KW_OVERLAY", 
		"KW_PARTITION", "KW_PATTERN", "KW_PER", "KW_PERCENT", "KW_PERIOD", "KW_POSITION", 
		"KW_POWER", "KW_PRIMARY", "KW_RANGE", "KW_RANK", "KW_RESET", "KW_REVOKE", 
		"KW_RIGHT", "KW_RLIKE", "KW_ROLLBACK", "KW_ROLLUP", "KW_ROW", "KW_ROWS", 
		"KW_SECOND", "KW_SELECT", "KW_SET", "KW_SHOW", "KW_SIMILAR", "KW_SKIP", 
		"KW_SMALLINT", "KW_START", "KW_STATIC", "KW_SUBSTRING", "KW_SUM", "KW_SYMMETRIC", 
		"KW_SYSTEM", "KW_SYSTEM_TIME", "KW_SYSTEM_USER", "KW_TABLE", "KW_TABLESAMPLE", 
		"KW_THEN", "KW_TIME", "KW_TIMESTAMP", "KW_TIMESTAMP_3", "KW_TIMESTAMP_6", 
		"KW_TIMESTAMP_9", "KW_TINYINT", "KW_TO", "KW_TRAILING", "KW_TRUE", "KW_TRUNCATE", 
		"KW_UNION", "KW_UNIQUE", "KW_UNKNOWN", "KW_UNNEST", "KW_UPPER", "KW_UPSERT", 
		"KW_USER", "KW_USING", "KW_VALUE", "KW_VALUES", "KW_VARBINARY", "KW_VARCHAR", 
		"KW_WHEN", "KW_WHERE", "KW_WINDOW", "KW_WITH", "KW_WITHIN", "KW_WITHOUT", 
		"KW_YEAR", "EQUAL_SYMBOL", "GREATER_SYMBOL", "LESS_SYMBOL", "EXCLAMATION_SYMBOL", 
		"BIT_NOT_OP", "BIT_OR_OP", "BIT_AND_OP", "BIT_XOR_OP", "DOT", "LS_BRACKET", 
		"RS_BRACKET", "LR_BRACKET", "RR_BRACKET", "LB_BRACKET", "RB_BRACKET", 
		"COMMA", "SEMICOLON", "AT_SIGN", "SINGLE_QUOTE_SYMB", "DOUBLE_QUOTE_SYMB", 
		"REVERSE_QUOTE_SYMB", "COLON_SYMB", "ASTERISK_SIGN", "UNDERLINE_SIGN", 
		"HYPNEN_SIGN", "ADD_SIGN", "PENCENT_SIGN", "DOUBLE_VERTICAL_SIGN", "DOUBLE_HYPNEN_SIGN", 
		"SLASH_SIGN", "QUESTION_MARK_SIGN", "DOUBLE_RIGHT_ARROW", "STRING_LITERAL", 
		"DIG_LITERAL", "REAL_LITERAL", "BIT_STRING", "ID_LITERAL", "SLASH_TEXT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FlinkSQLParser._LITERAL_NAMES, FlinkSQLParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FlinkSQLParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "FlinkSQL.g4"; }

	// @Override
	public get ruleNames(): string[] { return FlinkSQLParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return FlinkSQLParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(FlinkSQLParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, FlinkSQLParser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 370;
			this.statement();
			this.state = 371;
			this.match(FlinkSQLParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, FlinkSQLParser.RULE_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 373;
			this.sqlStatements();
			this.state = 374;
			this.match(FlinkSQLParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sqlStatements(): SqlStatementsContext {
		let _localctx: SqlStatementsContext = new SqlStatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, FlinkSQLParser.RULE_sqlStatements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 380;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.KW_ADD || _la === FlinkSQLParser.KW_DESC || _la === FlinkSQLParser.KW_LOAD || _la === FlinkSQLParser.KW_REMOVE || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & ((1 << (FlinkSQLParser.KW_UNLOAD - 159)) | (1 << (FlinkSQLParser.KW_USE - 159)) | (1 << (FlinkSQLParser.KW_ALTER - 159)) | (1 << (FlinkSQLParser.KW_BEGIN - 159)))) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & ((1 << (FlinkSQLParser.KW_CREATE - 219)) | (1 << (FlinkSQLParser.KW_DESCRIBE - 219)) | (1 << (FlinkSQLParser.KW_DROP - 219)) | (1 << (FlinkSQLParser.KW_EXECUTE - 219)) | (1 << (FlinkSQLParser.KW_EXPLAIN - 219)))) !== 0) || _la === FlinkSQLParser.KW_INSERT || ((((_la - 321)) & ~0x1F) === 0 && ((1 << (_la - 321)) & ((1 << (FlinkSQLParser.KW_RESET - 321)) | (1 << (FlinkSQLParser.KW_SELECT - 321)) | (1 << (FlinkSQLParser.KW_SET - 321)) | (1 << (FlinkSQLParser.KW_SHOW - 321)))) !== 0) || ((((_la - 366)) & ~0x1F) === 0 && ((1 << (_la - 366)) & ((1 << (FlinkSQLParser.KW_VALUES - 366)) | (1 << (FlinkSQLParser.KW_WITH - 366)) | (1 << (FlinkSQLParser.LR_BRACKET - 366)) | (1 << (FlinkSQLParser.SEMICOLON - 366)))) !== 0)) {
				{
				this.state = 378;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case FlinkSQLParser.KW_ADD:
				case FlinkSQLParser.KW_DESC:
				case FlinkSQLParser.KW_LOAD:
				case FlinkSQLParser.KW_REMOVE:
				case FlinkSQLParser.KW_UNLOAD:
				case FlinkSQLParser.KW_USE:
				case FlinkSQLParser.KW_ALTER:
				case FlinkSQLParser.KW_BEGIN:
				case FlinkSQLParser.KW_CREATE:
				case FlinkSQLParser.KW_DESCRIBE:
				case FlinkSQLParser.KW_DROP:
				case FlinkSQLParser.KW_EXECUTE:
				case FlinkSQLParser.KW_EXPLAIN:
				case FlinkSQLParser.KW_INSERT:
				case FlinkSQLParser.KW_RESET:
				case FlinkSQLParser.KW_SELECT:
				case FlinkSQLParser.KW_SET:
				case FlinkSQLParser.KW_SHOW:
				case FlinkSQLParser.KW_VALUES:
				case FlinkSQLParser.KW_WITH:
				case FlinkSQLParser.LR_BRACKET:
					{
					this.state = 376;
					this.sqlStatement();
					}
					break;
				case FlinkSQLParser.SEMICOLON:
					{
					this.state = 377;
					this.emptyStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 382;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sqlStatement(): SqlStatementContext {
		let _localctx: SqlStatementContext = new SqlStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FlinkSQLParser.RULE_sqlStatement);
		try {
			this.state = 416;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_ALTER:
			case FlinkSQLParser.KW_CREATE:
			case FlinkSQLParser.KW_DROP:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 383;
				this.ddlStatement();
				this.state = 384;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_BEGIN:
			case FlinkSQLParser.KW_EXECUTE:
			case FlinkSQLParser.KW_INSERT:
			case FlinkSQLParser.KW_SELECT:
			case FlinkSQLParser.KW_VALUES:
			case FlinkSQLParser.KW_WITH:
			case FlinkSQLParser.LR_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 386;
				this.dmlStatement();
				this.state = 387;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_DESC:
			case FlinkSQLParser.KW_DESCRIBE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 389;
				this.describeStatement();
				this.state = 390;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_EXPLAIN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 392;
				this.explainStatement();
				this.state = 393;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_USE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 395;
				this.useStatement();
				this.state = 396;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_SHOW:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 398;
				this.showStatememt();
				this.state = 399;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_LOAD:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 401;
				this.loadStatement();
				this.state = 402;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_UNLOAD:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 404;
				this.unloadStatememt();
				this.state = 405;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_SET:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 407;
				this.setStatememt();
				this.state = 408;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_RESET:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 410;
				this.resetStatememt();
				this.state = 411;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_ADD:
			case FlinkSQLParser.KW_REMOVE:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 413;
				this.jarStatememt();
				this.state = 414;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyStatement(): EmptyStatementContext {
		let _localctx: EmptyStatementContext = new EmptyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FlinkSQLParser.RULE_emptyStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 418;
			this.match(FlinkSQLParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ddlStatement(): DdlStatementContext {
		let _localctx: DdlStatementContext = new DdlStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FlinkSQLParser.RULE_ddlStatement);
		try {
			this.state = 434;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 420;
				this.createTable();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 421;
				this.createDatabase();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 422;
				this.createView();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 423;
				this.createFunction();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 424;
				this.createCatalog();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 425;
				this.alterTable();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 426;
				this.alertView();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 427;
				this.alterDatabase();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 428;
				this.alterFunction();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 429;
				this.dropCatalog();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 430;
				this.dropTable();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 431;
				this.dropDatabase();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 432;
				this.dropView();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 433;
				this.dropFunction();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dmlStatement(): DmlStatementContext {
		let _localctx: DmlStatementContext = new DmlStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FlinkSQLParser.RULE_dmlStatement);
		try {
			this.state = 438;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_SELECT:
			case FlinkSQLParser.KW_VALUES:
			case FlinkSQLParser.KW_WITH:
			case FlinkSQLParser.LR_BRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 436;
				this.queryStatement(0);
				}
				break;
			case FlinkSQLParser.KW_BEGIN:
			case FlinkSQLParser.KW_EXECUTE:
			case FlinkSQLParser.KW_INSERT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 437;
				this.insertStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public describeStatement(): DescribeStatementContext {
		let _localctx: DescribeStatementContext = new DescribeStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FlinkSQLParser.RULE_describeStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 440;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.KW_DESC || _la === FlinkSQLParser.KW_DESCRIBE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 441;
			this.tablePath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explainStatement(): ExplainStatementContext {
		let _localctx: ExplainStatementContext = new ExplainStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FlinkSQLParser.RULE_explainStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 443;
			this.match(FlinkSQLParser.KW_EXPLAIN);
			this.state = 447;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_CHANGELOG_MODE:
			case FlinkSQLParser.KW_ESTIMATED_COST:
			case FlinkSQLParser.KW_JSON_EXECUTION_PLAN:
				{
				this.state = 444;
				this.explainDetails();
				}
				break;
			case FlinkSQLParser.KW_PLAN:
				{
				this.state = 445;
				this.match(FlinkSQLParser.KW_PLAN);
				this.state = 446;
				this.match(FlinkSQLParser.KW_FOR);
				}
				break;
			case FlinkSQLParser.KW_STATEMENT:
			case FlinkSQLParser.KW_BEGIN:
			case FlinkSQLParser.KW_EXECUTE:
			case FlinkSQLParser.KW_INSERT:
			case FlinkSQLParser.KW_SELECT:
			case FlinkSQLParser.KW_VALUES:
			case FlinkSQLParser.KW_WITH:
			case FlinkSQLParser.LR_BRACKET:
				break;
			default:
				break;
			}
			this.state = 452;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 449;
				this.dmlStatement();
				}
				break;

			case 2:
				{
				this.state = 450;
				this.insertSimpleStatement();
				}
				break;

			case 3:
				{
				this.state = 451;
				this.insertMulStatement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explainDetails(): ExplainDetailsContext {
		let _localctx: ExplainDetailsContext = new ExplainDetailsContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, FlinkSQLParser.RULE_explainDetails);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 454;
			this.explainDetail();
			this.state = 459;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 455;
				this.match(FlinkSQLParser.COMMA);
				this.state = 456;
				this.explainDetail();
				}
				}
				this.state = 461;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explainDetail(): ExplainDetailContext {
		let _localctx: ExplainDetailContext = new ExplainDetailContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, FlinkSQLParser.RULE_explainDetail);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 462;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.KW_CHANGELOG_MODE || _la === FlinkSQLParser.KW_ESTIMATED_COST || _la === FlinkSQLParser.KW_JSON_EXECUTION_PLAN)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public useStatement(): UseStatementContext {
		let _localctx: UseStatementContext = new UseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, FlinkSQLParser.RULE_useStatement);
		try {
			this.state = 470;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 464;
				this.match(FlinkSQLParser.KW_USE);
				this.state = 465;
				this.match(FlinkSQLParser.KW_CATALOG);
				this.state = 466;
				this.catalogPath();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 467;
				this.match(FlinkSQLParser.KW_USE);
				this.state = 468;
				this.databasePath();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 469;
				this.useModuleStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public useModuleStatement(): UseModuleStatementContext {
		let _localctx: UseModuleStatementContext = new UseModuleStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, FlinkSQLParser.RULE_useModuleStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 472;
			this.match(FlinkSQLParser.KW_USE);
			this.state = 473;
			this.match(FlinkSQLParser.KW_MODULES);
			this.state = 474;
			this.uid();
			this.state = 479;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 475;
				this.match(FlinkSQLParser.COMMA);
				this.state = 476;
				this.uid();
				}
				}
				this.state = 481;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public showStatememt(): ShowStatememtContext {
		let _localctx: ShowStatememtContext = new ShowStatememtContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, FlinkSQLParser.RULE_showStatememt);
		let _la: number;
		try {
			this.state = 517;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 482;
				this.match(FlinkSQLParser.KW_SHOW);
				this.state = 483;
				_la = this._input.LA(1);
				if (!(_la === FlinkSQLParser.KW_CATALOGS || _la === FlinkSQLParser.KW_DATABASES || _la === FlinkSQLParser.KW_JARS || _la === FlinkSQLParser.KW_VIEWS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 484;
				this.match(FlinkSQLParser.KW_SHOW);
				this.state = 485;
				this.match(FlinkSQLParser.KW_CURRENT);
				this.state = 486;
				_la = this._input.LA(1);
				if (!(_la === FlinkSQLParser.KW_CATALOG || _la === FlinkSQLParser.KW_DATABASE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 487;
				this.match(FlinkSQLParser.KW_SHOW);
				this.state = 488;
				this.match(FlinkSQLParser.KW_TABLES);
				this.state = 491;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_FROM || _la === FlinkSQLParser.KW_IN) {
					{
					this.state = 489;
					_la = this._input.LA(1);
					if (!(_la === FlinkSQLParser.KW_FROM || _la === FlinkSQLParser.KW_IN)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 490;
					this.tablePath();
					}
				}

				this.state = 494;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_LIKE || _la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 493;
					this.likePredicate();
					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 496;
				this.match(FlinkSQLParser.KW_SHOW);
				this.state = 497;
				this.match(FlinkSQLParser.KW_COLUMNS);
				this.state = 498;
				_la = this._input.LA(1);
				if (!(_la === FlinkSQLParser.KW_FROM || _la === FlinkSQLParser.KW_IN)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 499;
				this.uid();
				this.state = 501;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_LIKE || _la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 500;
					this.likePredicate();
					}
				}

				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 503;
				this.match(FlinkSQLParser.KW_SHOW);
				this.state = 504;
				this.match(FlinkSQLParser.KW_CREATE);
				this.state = 505;
				_la = this._input.LA(1);
				if (!(_la === FlinkSQLParser.KW_VIEW || _la === FlinkSQLParser.KW_TABLE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 506;
				this.uid();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 507;
				this.match(FlinkSQLParser.KW_SHOW);
				this.state = 509;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_USER) {
					{
					this.state = 508;
					this.match(FlinkSQLParser.KW_USER);
					}
				}

				this.state = 511;
				this.match(FlinkSQLParser.KW_FUNCTIONS);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 512;
				this.match(FlinkSQLParser.KW_SHOW);
				this.state = 514;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_FULL) {
					{
					this.state = 513;
					this.match(FlinkSQLParser.KW_FULL);
					}
				}

				this.state = 516;
				this.match(FlinkSQLParser.KW_MODULES);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loadStatement(): LoadStatementContext {
		let _localctx: LoadStatementContext = new LoadStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, FlinkSQLParser.RULE_loadStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 519;
			this.match(FlinkSQLParser.KW_LOAD);
			this.state = 520;
			this.match(FlinkSQLParser.KW_MODULE);
			this.state = 521;
			this.uid();
			this.state = 524;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_WITH) {
				{
				this.state = 522;
				this.match(FlinkSQLParser.KW_WITH);
				this.state = 523;
				this.tablePropertyList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unloadStatememt(): UnloadStatememtContext {
		let _localctx: UnloadStatememtContext = new UnloadStatememtContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, FlinkSQLParser.RULE_unloadStatememt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 526;
			this.match(FlinkSQLParser.KW_UNLOAD);
			this.state = 527;
			this.match(FlinkSQLParser.KW_MODULE);
			this.state = 528;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setStatememt(): SetStatememtContext {
		let _localctx: SetStatememtContext = new SetStatememtContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, FlinkSQLParser.RULE_setStatememt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 530;
			this.match(FlinkSQLParser.KW_SET);
			this.state = 532;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSQLParser.KW_ADD) | (1 << FlinkSQLParser.KW_ADMIN) | (1 << FlinkSQLParser.KW_AFTER) | (1 << FlinkSQLParser.KW_ANALYZE) | (1 << FlinkSQLParser.KW_ASC) | (1 << FlinkSQLParser.KW_BEFORE) | (1 << FlinkSQLParser.KW_BYTES) | (1 << FlinkSQLParser.KW_CASCADE) | (1 << FlinkSQLParser.KW_CATALOG) | (1 << FlinkSQLParser.KW_CATALOGS) | (1 << FlinkSQLParser.KW_CENTURY) | (1 << FlinkSQLParser.KW_CHAIN) | (1 << FlinkSQLParser.KW_CHANGELOG_MODE) | (1 << FlinkSQLParser.KW_CHARACTERS) | (1 << FlinkSQLParser.KW_COMMENT) | (1 << FlinkSQLParser.KW_COMPACT) | (1 << FlinkSQLParser.KW_COLUMNS) | (1 << FlinkSQLParser.KW_CONSTRAINTS) | (1 << FlinkSQLParser.KW_CONSTRUCTOR) | (1 << FlinkSQLParser.KW_CUMULATE) | (1 << FlinkSQLParser.KW_DATA) | (1 << FlinkSQLParser.KW_DATABASE) | (1 << FlinkSQLParser.KW_DATABASES) | (1 << FlinkSQLParser.KW_DAYS) | (1 << FlinkSQLParser.KW_DECADE) | (1 << FlinkSQLParser.KW_DEFINED) | (1 << FlinkSQLParser.KW_DESC) | (1 << FlinkSQLParser.KW_DESCRIPTOR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSQLParser.KW_DIV - 32)) | (1 << (FlinkSQLParser.KW_ENCODING - 32)) | (1 << (FlinkSQLParser.KW_ENFORCED - 32)) | (1 << (FlinkSQLParser.KW_ENGINE - 32)) | (1 << (FlinkSQLParser.KW_ERROR - 32)) | (1 << (FlinkSQLParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSQLParser.KW_EXCEPTION - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDE - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDING - 32)) | (1 << (FlinkSQLParser.KW_EXTENDED - 32)) | (1 << (FlinkSQLParser.KW_FILE - 32)) | (1 << (FlinkSQLParser.KW_FINAL - 32)) | (1 << (FlinkSQLParser.KW_FIRST - 32)) | (1 << (FlinkSQLParser.KW_FOLLOWING - 32)) | (1 << (FlinkSQLParser.KW_FORMAT - 32)) | (1 << (FlinkSQLParser.KW_FORTRAN - 32)) | (1 << (FlinkSQLParser.KW_FOUND - 32)) | (1 << (FlinkSQLParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSQLParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSQLParser.KW_GENERAL - 32)) | (1 << (FlinkSQLParser.KW_GENERATED - 32)) | (1 << (FlinkSQLParser.KW_GO - 32)) | (1 << (FlinkSQLParser.KW_GOTO - 32)) | (1 << (FlinkSQLParser.KW_GRANTED - 32)) | (1 << (FlinkSQLParser.KW_HOP - 32)) | (1 << (FlinkSQLParser.KW_HOURS - 32)) | (1 << (FlinkSQLParser.KW_IF - 32)) | (1 << (FlinkSQLParser.KW_IGNORE - 32)) | (1 << (FlinkSQLParser.KW_INCREMENT - 32)) | (1 << (FlinkSQLParser.KW_INPUT - 32)) | (1 << (FlinkSQLParser.KW_INVOKER - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSQLParser.KW_JAR - 64)) | (1 << (FlinkSQLParser.KW_JARS - 64)) | (1 << (FlinkSQLParser.KW_JAVA - 64)) | (1 << (FlinkSQLParser.KW_JSON - 64)) | (1 << (FlinkSQLParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSQLParser.KW_KEY - 64)) | (1 << (FlinkSQLParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSQLParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSQLParser.KW_LABEL - 64)) | (1 << (FlinkSQLParser.KW_LAST - 64)) | (1 << (FlinkSQLParser.KW_LENGTH - 64)) | (1 << (FlinkSQLParser.KW_LEVEL - 64)) | (1 << (FlinkSQLParser.KW_LOAD - 64)) | (1 << (FlinkSQLParser.KW_MAP - 64)) | (1 << (FlinkSQLParser.KW_MICROSECOND - 64)) | (1 << (FlinkSQLParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSQLParser.KW_MILLISECOND - 64)) | (1 << (FlinkSQLParser.KW_MINUTES - 64)) | (1 << (FlinkSQLParser.KW_MINVALUE - 64)) | (1 << (FlinkSQLParser.KW_MODIFY - 64)) | (1 << (FlinkSQLParser.KW_MODULES - 64)) | (1 << (FlinkSQLParser.KW_MONTHS - 64)) | (1 << (FlinkSQLParser.KW_NANOSECOND - 64)) | (1 << (FlinkSQLParser.KW_NULLS - 64)) | (1 << (FlinkSQLParser.KW_NUMBER - 64)) | (1 << (FlinkSQLParser.KW_OPTION - 64)) | (1 << (FlinkSQLParser.KW_OPTIONS - 64)) | (1 << (FlinkSQLParser.KW_ORDERING - 64)) | (1 << (FlinkSQLParser.KW_OUTPUT - 64)) | (1 << (FlinkSQLParser.KW_OVERWRITE - 64)) | (1 << (FlinkSQLParser.KW_OVERWRITING - 64)) | (1 << (FlinkSQLParser.KW_PARTITIONED - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSQLParser.KW_PARTITIONS - 96)) | (1 << (FlinkSQLParser.KW_PASSING - 96)) | (1 << (FlinkSQLParser.KW_PAST - 96)) | (1 << (FlinkSQLParser.KW_PATH - 96)) | (1 << (FlinkSQLParser.KW_PLACING - 96)) | (1 << (FlinkSQLParser.KW_PLAN - 96)) | (1 << (FlinkSQLParser.KW_PRECEDING - 96)) | (1 << (FlinkSQLParser.KW_PRESERVE - 96)) | (1 << (FlinkSQLParser.KW_PRIOR - 96)) | (1 << (FlinkSQLParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSQLParser.KW_PUBLIC - 96)) | (1 << (FlinkSQLParser.KW_PYTHON - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSQLParser.KW_QUARTER - 96)) | (1 << (FlinkSQLParser.KW_RAW - 96)) | (1 << (FlinkSQLParser.KW_READ - 96)) | (1 << (FlinkSQLParser.KW_RELATIVE - 96)) | (1 << (FlinkSQLParser.KW_REMOVE - 96)) | (1 << (FlinkSQLParser.KW_RENAME - 96)) | (1 << (FlinkSQLParser.KW_REPLACE - 96)) | (1 << (FlinkSQLParser.KW_RESPECT - 96)) | (1 << (FlinkSQLParser.KW_RESTART - 96)) | (1 << (FlinkSQLParser.KW_RESTRICT - 96)) | (1 << (FlinkSQLParser.KW_ROLE - 96)) | (1 << (FlinkSQLParser.KW_ROW_COUNT - 96)) | (1 << (FlinkSQLParser.KW_SCALA - 96)) | (1 << (FlinkSQLParser.KW_SCALAR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSQLParser.KW_SCALE - 128)) | (1 << (FlinkSQLParser.KW_SCHEMA - 128)) | (1 << (FlinkSQLParser.KW_SECONDS - 128)) | (1 << (FlinkSQLParser.KW_SECTION - 128)) | (1 << (FlinkSQLParser.KW_SECURITY - 128)) | (1 << (FlinkSQLParser.KW_SELF - 128)) | (1 << (FlinkSQLParser.KW_SERVER - 128)) | (1 << (FlinkSQLParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSQLParser.KW_SESSION - 128)) | (1 << (FlinkSQLParser.KW_SETS - 128)) | (1 << (FlinkSQLParser.KW_SIMPLE - 128)) | (1 << (FlinkSQLParser.KW_SIZE - 128)) | (1 << (FlinkSQLParser.KW_SLIDE - 128)) | (1 << (FlinkSQLParser.KW_SOURCE - 128)) | (1 << (FlinkSQLParser.KW_SPACE - 128)) | (1 << (FlinkSQLParser.KW_STATE - 128)) | (1 << (FlinkSQLParser.KW_STATEMENT - 128)) | (1 << (FlinkSQLParser.KW_STEP - 128)) | (1 << (FlinkSQLParser.KW_STRING - 128)) | (1 << (FlinkSQLParser.KW_STRUCTURE - 128)) | (1 << (FlinkSQLParser.KW_STYLE - 128)) | (1 << (FlinkSQLParser.KW_TABLES - 128)) | (1 << (FlinkSQLParser.KW_TEMPORARY - 128)) | (1 << (FlinkSQLParser.KW_TIMECOL - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_LTZ - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPADD - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPDIFF - 128)) | (1 << (FlinkSQLParser.KW_TRANSFORM - 128)) | (1 << (FlinkSQLParser.KW_TUMBLE - 128)) | (1 << (FlinkSQLParser.KW_TYPE - 128)) | (1 << (FlinkSQLParser.KW_UNDER - 128)) | (1 << (FlinkSQLParser.KW_UNLOAD - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSQLParser.KW_USAGE - 160)) | (1 << (FlinkSQLParser.KW_USE - 160)) | (1 << (FlinkSQLParser.KW_UTF16 - 160)) | (1 << (FlinkSQLParser.KW_UTF32 - 160)) | (1 << (FlinkSQLParser.KW_UTF8 - 160)) | (1 << (FlinkSQLParser.KW_VERSION - 160)) | (1 << (FlinkSQLParser.KW_VIEW - 160)) | (1 << (FlinkSQLParser.KW_VIEWS - 160)) | (1 << (FlinkSQLParser.KW_VIRTUAL - 160)) | (1 << (FlinkSQLParser.KW_WATERMARK - 160)) | (1 << (FlinkSQLParser.KW_WATERMARKS - 160)) | (1 << (FlinkSQLParser.KW_WEEK - 160)) | (1 << (FlinkSQLParser.KW_WORK - 160)) | (1 << (FlinkSQLParser.KW_WRAPPER - 160)) | (1 << (FlinkSQLParser.KW_YEARS - 160)) | (1 << (FlinkSQLParser.KW_ZONE - 160)))) !== 0) || ((((_la - 408)) & ~0x1F) === 0 && ((1 << (_la - 408)) & ((1 << (FlinkSQLParser.STRING_LITERAL - 408)) | (1 << (FlinkSQLParser.DIG_LITERAL - 408)) | (1 << (FlinkSQLParser.ID_LITERAL - 408)))) !== 0)) {
				{
				this.state = 531;
				this.tableProperty();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resetStatememt(): ResetStatememtContext {
		let _localctx: ResetStatememtContext = new ResetStatememtContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, FlinkSQLParser.RULE_resetStatememt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 534;
			this.match(FlinkSQLParser.KW_RESET);
			this.state = 536;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSQLParser.KW_ADD) | (1 << FlinkSQLParser.KW_ADMIN) | (1 << FlinkSQLParser.KW_AFTER) | (1 << FlinkSQLParser.KW_ANALYZE) | (1 << FlinkSQLParser.KW_ASC) | (1 << FlinkSQLParser.KW_BEFORE) | (1 << FlinkSQLParser.KW_BYTES) | (1 << FlinkSQLParser.KW_CASCADE) | (1 << FlinkSQLParser.KW_CATALOG) | (1 << FlinkSQLParser.KW_CATALOGS) | (1 << FlinkSQLParser.KW_CENTURY) | (1 << FlinkSQLParser.KW_CHAIN) | (1 << FlinkSQLParser.KW_CHANGELOG_MODE) | (1 << FlinkSQLParser.KW_CHARACTERS) | (1 << FlinkSQLParser.KW_COMMENT) | (1 << FlinkSQLParser.KW_COMPACT) | (1 << FlinkSQLParser.KW_COLUMNS) | (1 << FlinkSQLParser.KW_CONSTRAINTS) | (1 << FlinkSQLParser.KW_CONSTRUCTOR) | (1 << FlinkSQLParser.KW_CUMULATE) | (1 << FlinkSQLParser.KW_DATA) | (1 << FlinkSQLParser.KW_DATABASE) | (1 << FlinkSQLParser.KW_DATABASES) | (1 << FlinkSQLParser.KW_DAYS) | (1 << FlinkSQLParser.KW_DECADE) | (1 << FlinkSQLParser.KW_DEFINED) | (1 << FlinkSQLParser.KW_DESC) | (1 << FlinkSQLParser.KW_DESCRIPTOR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSQLParser.KW_DIV - 32)) | (1 << (FlinkSQLParser.KW_ENCODING - 32)) | (1 << (FlinkSQLParser.KW_ENFORCED - 32)) | (1 << (FlinkSQLParser.KW_ENGINE - 32)) | (1 << (FlinkSQLParser.KW_ERROR - 32)) | (1 << (FlinkSQLParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSQLParser.KW_EXCEPTION - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDE - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDING - 32)) | (1 << (FlinkSQLParser.KW_EXTENDED - 32)) | (1 << (FlinkSQLParser.KW_FILE - 32)) | (1 << (FlinkSQLParser.KW_FINAL - 32)) | (1 << (FlinkSQLParser.KW_FIRST - 32)) | (1 << (FlinkSQLParser.KW_FOLLOWING - 32)) | (1 << (FlinkSQLParser.KW_FORMAT - 32)) | (1 << (FlinkSQLParser.KW_FORTRAN - 32)) | (1 << (FlinkSQLParser.KW_FOUND - 32)) | (1 << (FlinkSQLParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSQLParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSQLParser.KW_GENERAL - 32)) | (1 << (FlinkSQLParser.KW_GENERATED - 32)) | (1 << (FlinkSQLParser.KW_GO - 32)) | (1 << (FlinkSQLParser.KW_GOTO - 32)) | (1 << (FlinkSQLParser.KW_GRANTED - 32)) | (1 << (FlinkSQLParser.KW_HOP - 32)) | (1 << (FlinkSQLParser.KW_HOURS - 32)) | (1 << (FlinkSQLParser.KW_IF - 32)) | (1 << (FlinkSQLParser.KW_IGNORE - 32)) | (1 << (FlinkSQLParser.KW_INCREMENT - 32)) | (1 << (FlinkSQLParser.KW_INPUT - 32)) | (1 << (FlinkSQLParser.KW_INVOKER - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSQLParser.KW_JAR - 64)) | (1 << (FlinkSQLParser.KW_JARS - 64)) | (1 << (FlinkSQLParser.KW_JAVA - 64)) | (1 << (FlinkSQLParser.KW_JSON - 64)) | (1 << (FlinkSQLParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSQLParser.KW_KEY - 64)) | (1 << (FlinkSQLParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSQLParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSQLParser.KW_LABEL - 64)) | (1 << (FlinkSQLParser.KW_LAST - 64)) | (1 << (FlinkSQLParser.KW_LENGTH - 64)) | (1 << (FlinkSQLParser.KW_LEVEL - 64)) | (1 << (FlinkSQLParser.KW_LOAD - 64)) | (1 << (FlinkSQLParser.KW_MAP - 64)) | (1 << (FlinkSQLParser.KW_MICROSECOND - 64)) | (1 << (FlinkSQLParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSQLParser.KW_MILLISECOND - 64)) | (1 << (FlinkSQLParser.KW_MINUTES - 64)) | (1 << (FlinkSQLParser.KW_MINVALUE - 64)) | (1 << (FlinkSQLParser.KW_MODIFY - 64)) | (1 << (FlinkSQLParser.KW_MODULES - 64)) | (1 << (FlinkSQLParser.KW_MONTHS - 64)) | (1 << (FlinkSQLParser.KW_NANOSECOND - 64)) | (1 << (FlinkSQLParser.KW_NULLS - 64)) | (1 << (FlinkSQLParser.KW_NUMBER - 64)) | (1 << (FlinkSQLParser.KW_OPTION - 64)) | (1 << (FlinkSQLParser.KW_OPTIONS - 64)) | (1 << (FlinkSQLParser.KW_ORDERING - 64)) | (1 << (FlinkSQLParser.KW_OUTPUT - 64)) | (1 << (FlinkSQLParser.KW_OVERWRITE - 64)) | (1 << (FlinkSQLParser.KW_OVERWRITING - 64)) | (1 << (FlinkSQLParser.KW_PARTITIONED - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSQLParser.KW_PARTITIONS - 96)) | (1 << (FlinkSQLParser.KW_PASSING - 96)) | (1 << (FlinkSQLParser.KW_PAST - 96)) | (1 << (FlinkSQLParser.KW_PATH - 96)) | (1 << (FlinkSQLParser.KW_PLACING - 96)) | (1 << (FlinkSQLParser.KW_PLAN - 96)) | (1 << (FlinkSQLParser.KW_PRECEDING - 96)) | (1 << (FlinkSQLParser.KW_PRESERVE - 96)) | (1 << (FlinkSQLParser.KW_PRIOR - 96)) | (1 << (FlinkSQLParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSQLParser.KW_PUBLIC - 96)) | (1 << (FlinkSQLParser.KW_PYTHON - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSQLParser.KW_QUARTER - 96)) | (1 << (FlinkSQLParser.KW_RAW - 96)) | (1 << (FlinkSQLParser.KW_READ - 96)) | (1 << (FlinkSQLParser.KW_RELATIVE - 96)) | (1 << (FlinkSQLParser.KW_REMOVE - 96)) | (1 << (FlinkSQLParser.KW_RENAME - 96)) | (1 << (FlinkSQLParser.KW_REPLACE - 96)) | (1 << (FlinkSQLParser.KW_RESPECT - 96)) | (1 << (FlinkSQLParser.KW_RESTART - 96)) | (1 << (FlinkSQLParser.KW_RESTRICT - 96)) | (1 << (FlinkSQLParser.KW_ROLE - 96)) | (1 << (FlinkSQLParser.KW_ROW_COUNT - 96)) | (1 << (FlinkSQLParser.KW_SCALA - 96)) | (1 << (FlinkSQLParser.KW_SCALAR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSQLParser.KW_SCALE - 128)) | (1 << (FlinkSQLParser.KW_SCHEMA - 128)) | (1 << (FlinkSQLParser.KW_SECONDS - 128)) | (1 << (FlinkSQLParser.KW_SECTION - 128)) | (1 << (FlinkSQLParser.KW_SECURITY - 128)) | (1 << (FlinkSQLParser.KW_SELF - 128)) | (1 << (FlinkSQLParser.KW_SERVER - 128)) | (1 << (FlinkSQLParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSQLParser.KW_SESSION - 128)) | (1 << (FlinkSQLParser.KW_SETS - 128)) | (1 << (FlinkSQLParser.KW_SIMPLE - 128)) | (1 << (FlinkSQLParser.KW_SIZE - 128)) | (1 << (FlinkSQLParser.KW_SLIDE - 128)) | (1 << (FlinkSQLParser.KW_SOURCE - 128)) | (1 << (FlinkSQLParser.KW_SPACE - 128)) | (1 << (FlinkSQLParser.KW_STATE - 128)) | (1 << (FlinkSQLParser.KW_STATEMENT - 128)) | (1 << (FlinkSQLParser.KW_STEP - 128)) | (1 << (FlinkSQLParser.KW_STRING - 128)) | (1 << (FlinkSQLParser.KW_STRUCTURE - 128)) | (1 << (FlinkSQLParser.KW_STYLE - 128)) | (1 << (FlinkSQLParser.KW_TABLES - 128)) | (1 << (FlinkSQLParser.KW_TEMPORARY - 128)) | (1 << (FlinkSQLParser.KW_TIMECOL - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_LTZ - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPADD - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPDIFF - 128)) | (1 << (FlinkSQLParser.KW_TRANSFORM - 128)) | (1 << (FlinkSQLParser.KW_TUMBLE - 128)) | (1 << (FlinkSQLParser.KW_TYPE - 128)) | (1 << (FlinkSQLParser.KW_UNDER - 128)) | (1 << (FlinkSQLParser.KW_UNLOAD - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSQLParser.KW_USAGE - 160)) | (1 << (FlinkSQLParser.KW_USE - 160)) | (1 << (FlinkSQLParser.KW_UTF16 - 160)) | (1 << (FlinkSQLParser.KW_UTF32 - 160)) | (1 << (FlinkSQLParser.KW_UTF8 - 160)) | (1 << (FlinkSQLParser.KW_VERSION - 160)) | (1 << (FlinkSQLParser.KW_VIEW - 160)) | (1 << (FlinkSQLParser.KW_VIEWS - 160)) | (1 << (FlinkSQLParser.KW_VIRTUAL - 160)) | (1 << (FlinkSQLParser.KW_WATERMARK - 160)) | (1 << (FlinkSQLParser.KW_WATERMARKS - 160)) | (1 << (FlinkSQLParser.KW_WEEK - 160)) | (1 << (FlinkSQLParser.KW_WORK - 160)) | (1 << (FlinkSQLParser.KW_WRAPPER - 160)) | (1 << (FlinkSQLParser.KW_YEARS - 160)) | (1 << (FlinkSQLParser.KW_ZONE - 160)))) !== 0) || ((((_la - 408)) & ~0x1F) === 0 && ((1 << (_la - 408)) & ((1 << (FlinkSQLParser.STRING_LITERAL - 408)) | (1 << (FlinkSQLParser.DIG_LITERAL - 408)) | (1 << (FlinkSQLParser.ID_LITERAL - 408)))) !== 0)) {
				{
				this.state = 535;
				this.tablePropertyKey();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jarStatememt(): JarStatememtContext {
		let _localctx: JarStatememtContext = new JarStatememtContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, FlinkSQLParser.RULE_jarStatememt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 538;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.KW_ADD || _la === FlinkSQLParser.KW_REMOVE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 539;
			this.match(FlinkSQLParser.KW_JAR);
			this.state = 540;
			this.jarFileName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dtFilePath(): DtFilePathContext {
		let _localctx: DtFilePathContext = new DtFilePathContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, FlinkSQLParser.RULE_dtFilePath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 543;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 542;
				this.match(FlinkSQLParser.SLASH_TEXT);
				}
				}
				this.state = 545;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FlinkSQLParser.SLASH_TEXT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createTable(): CreateTableContext {
		let _localctx: CreateTableContext = new CreateTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, FlinkSQLParser.RULE_createTable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 549;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 547;
				this.simpleCreateTable();
				}
				break;

			case 2:
				{
				this.state = 548;
				this.createTableAsSelect();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleCreateTable(): SimpleCreateTableContext {
		let _localctx: SimpleCreateTableContext = new SimpleCreateTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, FlinkSQLParser.RULE_simpleCreateTable);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 551;
			this.match(FlinkSQLParser.KW_CREATE);
			this.state = 553;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_TEMPORARY) {
				{
				this.state = 552;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				}
			}

			this.state = 555;
			this.match(FlinkSQLParser.KW_TABLE);
			this.state = 557;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 556;
				this.ifNotExists();
				}
				break;
			}
			this.state = 559;
			this.tablePathCreate();
			this.state = 560;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 561;
			this.columnOptionDefinition();
			this.state = 566;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 562;
					this.match(FlinkSQLParser.COMMA);
					this.state = 563;
					this.columnOptionDefinition();
					}
					}
				}
				this.state = 568;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			}
			this.state = 571;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 569;
				this.match(FlinkSQLParser.COMMA);
				this.state = 570;
				this.watermarkDefinition();
				}
				break;
			}
			this.state = 575;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 573;
				this.match(FlinkSQLParser.COMMA);
				this.state = 574;
				this.tableConstraint();
				}
				break;
			}
			this.state = 579;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.COMMA) {
				{
				this.state = 577;
				this.match(FlinkSQLParser.COMMA);
				this.state = 578;
				this.selfDefinitionClause();
				}
			}

			this.state = 581;
			this.match(FlinkSQLParser.RR_BRACKET);
			this.state = 583;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_COMMENT) {
				{
				this.state = 582;
				this.commentSpec();
				}
			}

			this.state = 586;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_PARTITIONED) {
				{
				this.state = 585;
				this.partitionDefinition();
				}
			}

			this.state = 588;
			this.withOption();
			this.state = 590;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_LIKE) {
				{
				this.state = 589;
				this.likeDefinition();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createTableAsSelect(): CreateTableAsSelectContext {
		let _localctx: CreateTableAsSelectContext = new CreateTableAsSelectContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, FlinkSQLParser.RULE_createTableAsSelect);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 592;
			this.match(FlinkSQLParser.KW_CREATE);
			this.state = 593;
			this.match(FlinkSQLParser.KW_TABLE);
			this.state = 595;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 594;
				this.ifNotExists();
				}
				break;
			}
			this.state = 597;
			this.tablePathCreate();
			this.state = 598;
			this.withOption();
			this.state = 601;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_AS) {
				{
				this.state = 599;
				this.match(FlinkSQLParser.KW_AS);
				this.state = 600;
				this.queryStatement(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnOptionDefinition(): ColumnOptionDefinitionContext {
		let _localctx: ColumnOptionDefinitionContext = new ColumnOptionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, FlinkSQLParser.RULE_columnOptionDefinition);
		try {
			this.state = 606;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 603;
				this.physicalColumnDefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 604;
				this.metadataColumnDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 605;
				this.computedColumnDefinition();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public physicalColumnDefinition(): PhysicalColumnDefinitionContext {
		let _localctx: PhysicalColumnDefinitionContext = new PhysicalColumnDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, FlinkSQLParser.RULE_physicalColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 608;
			this.columnName();
			this.state = 609;
			this.columnType();
			this.state = 611;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_CONSTRAINT || ((((_la - 298)) & ~0x1F) === 0 && ((1 << (_la - 298)) & ((1 << (FlinkSQLParser.KW_NOT - 298)) | (1 << (FlinkSQLParser.KW_NULL - 298)) | (1 << (FlinkSQLParser.KW_PRIMARY - 298)))) !== 0)) {
				{
				this.state = 610;
				this.columnConstraint();
				}
			}

			this.state = 614;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_COMMENT) {
				{
				this.state = 613;
				this.commentSpec();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnName(): ColumnNameContext {
		let _localctx: ColumnNameContext = new ColumnNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, FlinkSQLParser.RULE_columnName);
		try {
			this.state = 618;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 616;
				this.uid();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 617;
				this.expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnNameList(): ColumnNameListContext {
		let _localctx: ColumnNameListContext = new ColumnNameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, FlinkSQLParser.RULE_columnNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 620;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 621;
			this.columnName();
			this.state = 626;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 622;
				this.match(FlinkSQLParser.COMMA);
				this.state = 623;
				this.columnName();
				}
				}
				this.state = 628;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 629;
			this.match(FlinkSQLParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnType(): ColumnTypeContext {
		let _localctx: ColumnTypeContext = new ColumnTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, FlinkSQLParser.RULE_columnType);
		let _la: number;
		try {
			this.state = 704;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_BOOLEAN:
			case FlinkSQLParser.KW_DATE:
			case FlinkSQLParser.KW_NULL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 631;
				_localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSQLParser.KW_BOOLEAN || _la === FlinkSQLParser.KW_DATE || _la === FlinkSQLParser.KW_NULL)) {
					_localctx._typeName = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case FlinkSQLParser.KW_BYTES:
			case FlinkSQLParser.KW_STRING:
			case FlinkSQLParser.KW_TIMESTAMP_LTZ:
			case FlinkSQLParser.KW_BIGINT:
			case FlinkSQLParser.KW_BINARY:
			case FlinkSQLParser.KW_CHAR:
			case FlinkSQLParser.KW_DATETIME:
			case FlinkSQLParser.KW_INT:
			case FlinkSQLParser.KW_INTEGER:
			case FlinkSQLParser.KW_SMALLINT:
			case FlinkSQLParser.KW_TIME:
			case FlinkSQLParser.KW_TINYINT:
			case FlinkSQLParser.KW_VARBINARY:
			case FlinkSQLParser.KW_VARCHAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 632;
				_localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSQLParser.KW_BYTES || _la === FlinkSQLParser.KW_STRING || _la === FlinkSQLParser.KW_TIMESTAMP_LTZ || ((((_la - 191)) & ~0x1F) === 0 && ((1 << (_la - 191)) & ((1 << (FlinkSQLParser.KW_BIGINT - 191)) | (1 << (FlinkSQLParser.KW_BINARY - 191)) | (1 << (FlinkSQLParser.KW_CHAR - 191)))) !== 0) || _la === FlinkSQLParser.KW_DATETIME || _la === FlinkSQLParser.KW_INT || _la === FlinkSQLParser.KW_INTEGER || ((((_la - 335)) & ~0x1F) === 0 && ((1 << (_la - 335)) & ((1 << (FlinkSQLParser.KW_SMALLINT - 335)) | (1 << (FlinkSQLParser.KW_TIME - 335)) | (1 << (FlinkSQLParser.KW_TINYINT - 335)))) !== 0) || _la === FlinkSQLParser.KW_VARBINARY || _la === FlinkSQLParser.KW_VARCHAR)) {
					_localctx._typeName = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 634;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LR_BRACKET) {
					{
					this.state = 633;
					this.lengthOneDimension();
					}
				}

				}
				break;
			case FlinkSQLParser.KW_TIMESTAMP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 636;
				_localctx._typeName = this.match(FlinkSQLParser.KW_TIMESTAMP);
				this.state = 638;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LR_BRACKET) {
					{
					this.state = 637;
					this.lengthOneDimension();
					}
				}

				this.state = 646;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_WITH || _la === FlinkSQLParser.KW_WITHOUT) {
					{
					this.state = 640;
					_la = this._input.LA(1);
					if (!(_la === FlinkSQLParser.KW_WITH || _la === FlinkSQLParser.KW_WITHOUT)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 642;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSQLParser.KW_LOCAL) {
						{
						this.state = 641;
						this.match(FlinkSQLParser.KW_LOCAL);
						}
					}

					this.state = 644;
					this.match(FlinkSQLParser.KW_TIME);
					this.state = 645;
					this.match(FlinkSQLParser.KW_ZONE);
					}
				}

				}
				break;
			case FlinkSQLParser.KW_TIMESTAMP_3:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 648;
				_localctx._typeName = this.match(FlinkSQLParser.KW_TIMESTAMP_3);
				this.state = 650;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LR_BRACKET) {
					{
					this.state = 649;
					this.lengthOneDimension();
					}
				}

				this.state = 658;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_WITH || _la === FlinkSQLParser.KW_WITHOUT) {
					{
					this.state = 652;
					_la = this._input.LA(1);
					if (!(_la === FlinkSQLParser.KW_WITH || _la === FlinkSQLParser.KW_WITHOUT)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 654;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSQLParser.KW_LOCAL) {
						{
						this.state = 653;
						this.match(FlinkSQLParser.KW_LOCAL);
						}
					}

					this.state = 656;
					this.match(FlinkSQLParser.KW_TIME);
					this.state = 657;
					this.match(FlinkSQLParser.KW_ZONE);
					}
				}

				}
				break;
			case FlinkSQLParser.KW_TIMESTAMP_6:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 660;
				_localctx._typeName = this.match(FlinkSQLParser.KW_TIMESTAMP_6);
				this.state = 662;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LR_BRACKET) {
					{
					this.state = 661;
					this.lengthOneDimension();
					}
				}

				this.state = 670;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_WITH || _la === FlinkSQLParser.KW_WITHOUT) {
					{
					this.state = 664;
					_la = this._input.LA(1);
					if (!(_la === FlinkSQLParser.KW_WITH || _la === FlinkSQLParser.KW_WITHOUT)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 666;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSQLParser.KW_LOCAL) {
						{
						this.state = 665;
						this.match(FlinkSQLParser.KW_LOCAL);
						}
					}

					this.state = 668;
					this.match(FlinkSQLParser.KW_TIME);
					this.state = 669;
					this.match(FlinkSQLParser.KW_ZONE);
					}
				}

				}
				break;
			case FlinkSQLParser.KW_TIMESTAMP_9:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 672;
				_localctx._typeName = this.match(FlinkSQLParser.KW_TIMESTAMP_9);
				this.state = 674;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LR_BRACKET) {
					{
					this.state = 673;
					this.lengthOneDimension();
					}
				}

				this.state = 682;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_WITH || _la === FlinkSQLParser.KW_WITHOUT) {
					{
					this.state = 676;
					_la = this._input.LA(1);
					if (!(_la === FlinkSQLParser.KW_WITH || _la === FlinkSQLParser.KW_WITHOUT)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 678;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSQLParser.KW_LOCAL) {
						{
						this.state = 677;
						this.match(FlinkSQLParser.KW_LOCAL);
						}
					}

					this.state = 680;
					this.match(FlinkSQLParser.KW_TIME);
					this.state = 681;
					this.match(FlinkSQLParser.KW_ZONE);
					}
				}

				}
				break;
			case FlinkSQLParser.KW_DEC:
			case FlinkSQLParser.KW_DECIMAL:
			case FlinkSQLParser.KW_DOUBLE:
			case FlinkSQLParser.KW_FLOAT:
			case FlinkSQLParser.KW_NUMERIC:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 684;
				_localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & ((1 << (FlinkSQLParser.KW_DEC - 228)) | (1 << (FlinkSQLParser.KW_DECIMAL - 228)) | (1 << (FlinkSQLParser.KW_DOUBLE - 228)) | (1 << (FlinkSQLParser.KW_FLOAT - 228)))) !== 0) || _la === FlinkSQLParser.KW_NUMERIC)) {
					_localctx._typeName = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 686;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LR_BRACKET) {
					{
					this.state = 685;
					this.lengthTwoOptionalDimension();
					}
				}

				}
				break;
			case FlinkSQLParser.KW_ARRAY:
			case FlinkSQLParser.KW_MULTISET:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 688;
				_localctx._type = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSQLParser.KW_ARRAY || _la === FlinkSQLParser.KW_MULTISET)) {
					_localctx._type = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 690;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LESS_SYMBOL) {
					{
					this.state = 689;
					this.lengthOneTypeDimension();
					}
				}

				}
				break;
			case FlinkSQLParser.KW_MAP:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 692;
				_localctx._type = this.match(FlinkSQLParser.KW_MAP);
				this.state = 694;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LESS_SYMBOL) {
					{
					this.state = 693;
					this.mapTypeDimension();
					}
				}

				}
				break;
			case FlinkSQLParser.KW_ROW:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 696;
				_localctx._type = this.match(FlinkSQLParser.KW_ROW);
				this.state = 698;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LESS_SYMBOL) {
					{
					this.state = 697;
					this.rowTypeDimension();
					}
				}

				}
				break;
			case FlinkSQLParser.KW_RAW:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 700;
				_localctx._type = this.match(FlinkSQLParser.KW_RAW);
				this.state = 702;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LR_BRACKET) {
					{
					this.state = 701;
					this.lengthTwoStringDimension();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lengthOneDimension(): LengthOneDimensionContext {
		let _localctx: LengthOneDimensionContext = new LengthOneDimensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, FlinkSQLParser.RULE_lengthOneDimension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 706;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 707;
			this.decimalLiteral();
			this.state = 708;
			this.match(FlinkSQLParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext {
		let _localctx: LengthTwoOptionalDimensionContext = new LengthTwoOptionalDimensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, FlinkSQLParser.RULE_lengthTwoOptionalDimension);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 710;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 711;
			this.decimalLiteral();
			this.state = 714;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.COMMA) {
				{
				this.state = 712;
				this.match(FlinkSQLParser.COMMA);
				this.state = 713;
				this.decimalLiteral();
				}
			}

			this.state = 716;
			this.match(FlinkSQLParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lengthTwoStringDimension(): LengthTwoStringDimensionContext {
		let _localctx: LengthTwoStringDimensionContext = new LengthTwoStringDimensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, FlinkSQLParser.RULE_lengthTwoStringDimension);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 718;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 719;
			this.stringLiteral();
			this.state = 722;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.COMMA) {
				{
				this.state = 720;
				this.match(FlinkSQLParser.COMMA);
				this.state = 721;
				this.stringLiteral();
				}
			}

			this.state = 724;
			this.match(FlinkSQLParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lengthOneTypeDimension(): LengthOneTypeDimensionContext {
		let _localctx: LengthOneTypeDimensionContext = new LengthOneTypeDimensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, FlinkSQLParser.RULE_lengthOneTypeDimension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 726;
			this.match(FlinkSQLParser.LESS_SYMBOL);
			this.state = 727;
			this.columnType();
			this.state = 728;
			this.match(FlinkSQLParser.GREATER_SYMBOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapTypeDimension(): MapTypeDimensionContext {
		let _localctx: MapTypeDimensionContext = new MapTypeDimensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, FlinkSQLParser.RULE_mapTypeDimension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 730;
			this.match(FlinkSQLParser.LESS_SYMBOL);
			this.state = 731;
			this.columnType();
			{
			this.state = 732;
			this.match(FlinkSQLParser.COMMA);
			this.state = 733;
			this.columnType();
			}
			this.state = 735;
			this.match(FlinkSQLParser.GREATER_SYMBOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rowTypeDimension(): RowTypeDimensionContext {
		let _localctx: RowTypeDimensionContext = new RowTypeDimensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, FlinkSQLParser.RULE_rowTypeDimension);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 737;
			this.match(FlinkSQLParser.LESS_SYMBOL);
			this.state = 738;
			this.columnName();
			this.state = 739;
			this.columnType();
			this.state = 746;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 740;
				this.match(FlinkSQLParser.COMMA);
				this.state = 741;
				this.columnName();
				this.state = 742;
				this.columnType();
				}
				}
				this.state = 748;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 749;
			this.match(FlinkSQLParser.GREATER_SYMBOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnConstraint(): ColumnConstraintContext {
		let _localctx: ColumnConstraintContext = new ColumnConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, FlinkSQLParser.RULE_columnConstraint);
		let _la: number;
		try {
			this.state = 765;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_CONSTRAINT:
			case FlinkSQLParser.KW_PRIMARY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 753;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_CONSTRAINT) {
					{
					this.state = 751;
					this.match(FlinkSQLParser.KW_CONSTRAINT);
					this.state = 752;
					this.constraintName();
					}
				}

				this.state = 755;
				this.match(FlinkSQLParser.KW_PRIMARY);
				this.state = 756;
				this.match(FlinkSQLParser.KW_KEY);
				this.state = 759;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 757;
					this.match(FlinkSQLParser.KW_NOT);
					this.state = 758;
					this.match(FlinkSQLParser.KW_ENFORCED);
					}
				}

				}
				break;
			case FlinkSQLParser.KW_NOT:
			case FlinkSQLParser.KW_NULL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 762;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 761;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 764;
				this.match(FlinkSQLParser.KW_NULL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commentSpec(): CommentSpecContext {
		let _localctx: CommentSpecContext = new CommentSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, FlinkSQLParser.RULE_commentSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 767;
			this.match(FlinkSQLParser.KW_COMMENT);
			this.state = 768;
			this.match(FlinkSQLParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public metadataColumnDefinition(): MetadataColumnDefinitionContext {
		let _localctx: MetadataColumnDefinitionContext = new MetadataColumnDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, FlinkSQLParser.RULE_metadataColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 770;
			this.columnName();
			this.state = 771;
			this.columnType();
			this.state = 772;
			this.match(FlinkSQLParser.KW_METADATA);
			this.state = 775;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_FROM) {
				{
				this.state = 773;
				this.match(FlinkSQLParser.KW_FROM);
				this.state = 774;
				this.metadataKey();
				}
			}

			this.state = 778;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_VIRTUAL) {
				{
				this.state = 777;
				this.match(FlinkSQLParser.KW_VIRTUAL);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public metadataKey(): MetadataKeyContext {
		let _localctx: MetadataKeyContext = new MetadataKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, FlinkSQLParser.RULE_metadataKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 780;
			this.match(FlinkSQLParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public computedColumnDefinition(): ComputedColumnDefinitionContext {
		let _localctx: ComputedColumnDefinitionContext = new ComputedColumnDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, FlinkSQLParser.RULE_computedColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 782;
			this.columnName();
			this.state = 783;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 784;
			this.computedColumnExpression();
			this.state = 786;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_COMMENT) {
				{
				this.state = 785;
				this.commentSpec();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public computedColumnExpression(): ComputedColumnExpressionContext {
		let _localctx: ComputedColumnExpressionContext = new ComputedColumnExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, FlinkSQLParser.RULE_computedColumnExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 788;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public watermarkDefinition(): WatermarkDefinitionContext {
		let _localctx: WatermarkDefinitionContext = new WatermarkDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, FlinkSQLParser.RULE_watermarkDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 790;
			this.match(FlinkSQLParser.KW_WATERMARK);
			this.state = 791;
			this.match(FlinkSQLParser.KW_FOR);
			this.state = 792;
			this.expression();
			this.state = 793;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 794;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableConstraint(): TableConstraintContext {
		let _localctx: TableConstraintContext = new TableConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, FlinkSQLParser.RULE_tableConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 798;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_CONSTRAINT) {
				{
				this.state = 796;
				this.match(FlinkSQLParser.KW_CONSTRAINT);
				this.state = 797;
				this.constraintName();
				}
			}

			this.state = 800;
			this.match(FlinkSQLParser.KW_PRIMARY);
			this.state = 801;
			this.match(FlinkSQLParser.KW_KEY);
			this.state = 802;
			this.columnNameList();
			this.state = 803;
			this.match(FlinkSQLParser.KW_NOT);
			this.state = 804;
			this.match(FlinkSQLParser.KW_ENFORCED);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constraintName(): ConstraintNameContext {
		let _localctx: ConstraintNameContext = new ConstraintNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, FlinkSQLParser.RULE_constraintName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 806;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selfDefinitionClause(): SelfDefinitionClauseContext {
		let _localctx: SelfDefinitionClauseContext = new SelfDefinitionClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, FlinkSQLParser.RULE_selfDefinitionClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 808;
			this.match(FlinkSQLParser.KW_PERIOD);
			this.state = 809;
			this.match(FlinkSQLParser.KW_FOR);
			this.state = 810;
			this.match(FlinkSQLParser.KW_SYSTEM_TIME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partitionDefinition(): PartitionDefinitionContext {
		let _localctx: PartitionDefinitionContext = new PartitionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, FlinkSQLParser.RULE_partitionDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 812;
			this.match(FlinkSQLParser.KW_PARTITIONED);
			this.state = 813;
			this.match(FlinkSQLParser.KW_BY);
			this.state = 814;
			this.transformList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public transformList(): TransformListContext {
		let _localctx: TransformListContext = new TransformListContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, FlinkSQLParser.RULE_transformList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 816;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 817;
			this.transform();
			this.state = 822;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 818;
				this.match(FlinkSQLParser.COMMA);
				this.state = 819;
				this.transform();
				}
				}
				this.state = 824;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 825;
			this.match(FlinkSQLParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public transform(): TransformContext {
		let _localctx: TransformContext = new TransformContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, FlinkSQLParser.RULE_transform);
		let _la: number;
		try {
			this.state = 840;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				_localctx = new IdentityTransformContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 827;
				this.qualifiedName();
				}
				break;

			case 2:
				_localctx = new ApplyTransformContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 828;
				(_localctx as ApplyTransformContext)._transformName = this.identifier();
				this.state = 829;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 830;
				this.transformArgument();
				this.state = 835;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 831;
					this.match(FlinkSQLParser.COMMA);
					this.state = 832;
					this.transformArgument();
					}
					}
					this.state = 837;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 838;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public transformArgument(): TransformArgumentContext {
		let _localctx: TransformArgumentContext = new TransformArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, FlinkSQLParser.RULE_transformArgument);
		try {
			this.state = 844;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 842;
				this.qualifiedName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 843;
				this.constant();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public likeDefinition(): LikeDefinitionContext {
		let _localctx: LikeDefinitionContext = new LikeDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, FlinkSQLParser.RULE_likeDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 846;
			this.match(FlinkSQLParser.KW_LIKE);
			this.state = 847;
			this.tablePath();
			this.state = 856;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.LR_BRACKET) {
				{
				this.state = 848;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 852;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.KW_EXCLUDING || _la === FlinkSQLParser.KW_OVERWRITING || _la === FlinkSQLParser.KW_INCLUDING) {
					{
					{
					this.state = 849;
					this.likeOption();
					}
					}
					this.state = 854;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 855;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public likeOption(): LikeOptionContext {
		let _localctx: LikeOptionContext = new LikeOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, FlinkSQLParser.RULE_likeOption);
		let _la: number;
		try {
			this.state = 862;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 858;
				_la = this._input.LA(1);
				if (!(_la === FlinkSQLParser.KW_EXCLUDING || _la === FlinkSQLParser.KW_INCLUDING)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 859;
				_la = this._input.LA(1);
				if (!(_la === FlinkSQLParser.KW_CONSTRAINTS || _la === FlinkSQLParser.KW_PARTITIONS || _la === FlinkSQLParser.KW_ALL)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 860;
				_la = this._input.LA(1);
				if (!(_la === FlinkSQLParser.KW_EXCLUDING || _la === FlinkSQLParser.KW_OVERWRITING || _la === FlinkSQLParser.KW_INCLUDING)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 861;
				_la = this._input.LA(1);
				if (!(_la === FlinkSQLParser.KW_GENERATED || _la === FlinkSQLParser.KW_OPTIONS || _la === FlinkSQLParser.KW_WATERMARKS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createCatalog(): CreateCatalogContext {
		let _localctx: CreateCatalogContext = new CreateCatalogContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, FlinkSQLParser.RULE_createCatalog);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 864;
			this.match(FlinkSQLParser.KW_CREATE);
			this.state = 865;
			this.match(FlinkSQLParser.KW_CATALOG);
			this.state = 866;
			this.uid();
			this.state = 867;
			this.withOption();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createDatabase(): CreateDatabaseContext {
		let _localctx: CreateDatabaseContext = new CreateDatabaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, FlinkSQLParser.RULE_createDatabase);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 869;
			this.match(FlinkSQLParser.KW_CREATE);
			this.state = 870;
			this.match(FlinkSQLParser.KW_DATABASE);
			this.state = 872;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				{
				this.state = 871;
				this.ifNotExists();
				}
				break;
			}
			this.state = 874;
			this.databasePathCreate();
			this.state = 876;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_COMMENT) {
				{
				this.state = 875;
				this.commentSpec();
				}
			}

			this.state = 878;
			this.withOption();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createView(): CreateViewContext {
		let _localctx: CreateViewContext = new CreateViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, FlinkSQLParser.RULE_createView);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 880;
			this.match(FlinkSQLParser.KW_CREATE);
			this.state = 882;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_TEMPORARY) {
				{
				this.state = 881;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				}
			}

			this.state = 884;
			this.match(FlinkSQLParser.KW_VIEW);
			this.state = 886;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				{
				this.state = 885;
				this.ifNotExists();
				}
				break;
			}
			this.state = 888;
			this.uid();
			this.state = 890;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.LR_BRACKET) {
				{
				this.state = 889;
				this.columnNameList();
				}
			}

			this.state = 893;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_COMMENT) {
				{
				this.state = 892;
				this.commentSpec();
				}
			}

			this.state = 895;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 896;
			this.queryStatement(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createFunction(): CreateFunctionContext {
		let _localctx: CreateFunctionContext = new CreateFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, FlinkSQLParser.RULE_createFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 898;
			this.match(FlinkSQLParser.KW_CREATE);
			this.state = 902;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				{
				this.state = 899;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				}
				break;

			case 2:
				{
				this.state = 900;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				this.state = 901;
				this.match(FlinkSQLParser.KW_SYSTEM);
				}
				break;
			}
			this.state = 904;
			this.match(FlinkSQLParser.KW_FUNCTION);
			this.state = 906;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				{
				this.state = 905;
				this.ifNotExists();
				}
				break;
			}
			this.state = 908;
			this.functionName();
			this.state = 909;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 910;
			this.identifier();
			this.state = 913;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_LANGUAGE) {
				{
				this.state = 911;
				this.match(FlinkSQLParser.KW_LANGUAGE);
				this.state = 912;
				_la = this._input.LA(1);
				if (!(_la === FlinkSQLParser.KW_JAVA || _la === FlinkSQLParser.KW_PYTHON || _la === FlinkSQLParser.KW_SCALA)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 916;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_USING) {
				{
				this.state = 915;
				this.usingClause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usingClause(): UsingClauseContext {
		let _localctx: UsingClauseContext = new UsingClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, FlinkSQLParser.RULE_usingClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 918;
			this.match(FlinkSQLParser.KW_USING);
			this.state = 919;
			this.match(FlinkSQLParser.KW_JAR);
			this.state = 920;
			this.jarFileName();
			this.state = 926;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 921;
				this.match(FlinkSQLParser.COMMA);
				this.state = 922;
				this.match(FlinkSQLParser.KW_JAR);
				this.state = 923;
				this.jarFileName();
				}
				}
				this.state = 928;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jarFileName(): JarFileNameContext {
		let _localctx: JarFileNameContext = new JarFileNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, FlinkSQLParser.RULE_jarFileName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 929;
			this.match(FlinkSQLParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alterTable(): AlterTableContext {
		let _localctx: AlterTableContext = new AlterTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, FlinkSQLParser.RULE_alterTable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 931;
			this.match(FlinkSQLParser.KW_ALTER);
			this.state = 932;
			this.match(FlinkSQLParser.KW_TABLE);
			this.state = 934;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				{
				this.state = 933;
				this.ifExists();
				}
				break;
			}
			this.state = 936;
			this.tablePath();
			this.state = 942;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				this.state = 937;
				this.renameDefinition();
				}
				break;

			case 2:
				{
				this.state = 938;
				this.setKeyValueDefinition();
				}
				break;

			case 3:
				{
				this.state = 939;
				this.addConstraint();
				}
				break;

			case 4:
				{
				this.state = 940;
				this.dropConstraint();
				}
				break;

			case 5:
				{
				this.state = 941;
				this.addUnique();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public renameDefinition(): RenameDefinitionContext {
		let _localctx: RenameDefinitionContext = new RenameDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, FlinkSQLParser.RULE_renameDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 944;
			this.match(FlinkSQLParser.KW_RENAME);
			this.state = 946;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSQLParser.KW_ADD) | (1 << FlinkSQLParser.KW_ADMIN) | (1 << FlinkSQLParser.KW_AFTER) | (1 << FlinkSQLParser.KW_ANALYZE) | (1 << FlinkSQLParser.KW_ASC) | (1 << FlinkSQLParser.KW_BEFORE) | (1 << FlinkSQLParser.KW_BYTES) | (1 << FlinkSQLParser.KW_CASCADE) | (1 << FlinkSQLParser.KW_CATALOG) | (1 << FlinkSQLParser.KW_CATALOGS) | (1 << FlinkSQLParser.KW_CENTURY) | (1 << FlinkSQLParser.KW_CHAIN) | (1 << FlinkSQLParser.KW_CHANGELOG_MODE) | (1 << FlinkSQLParser.KW_CHARACTERS) | (1 << FlinkSQLParser.KW_COMMENT) | (1 << FlinkSQLParser.KW_COMPACT) | (1 << FlinkSQLParser.KW_COLUMNS) | (1 << FlinkSQLParser.KW_CONSTRAINTS) | (1 << FlinkSQLParser.KW_CONSTRUCTOR) | (1 << FlinkSQLParser.KW_CUMULATE) | (1 << FlinkSQLParser.KW_DATA) | (1 << FlinkSQLParser.KW_DATABASE) | (1 << FlinkSQLParser.KW_DATABASES) | (1 << FlinkSQLParser.KW_DAYS) | (1 << FlinkSQLParser.KW_DECADE) | (1 << FlinkSQLParser.KW_DEFINED) | (1 << FlinkSQLParser.KW_DESC) | (1 << FlinkSQLParser.KW_DESCRIPTOR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSQLParser.KW_DIV - 32)) | (1 << (FlinkSQLParser.KW_ENCODING - 32)) | (1 << (FlinkSQLParser.KW_ENFORCED - 32)) | (1 << (FlinkSQLParser.KW_ENGINE - 32)) | (1 << (FlinkSQLParser.KW_ERROR - 32)) | (1 << (FlinkSQLParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSQLParser.KW_EXCEPTION - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDE - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDING - 32)) | (1 << (FlinkSQLParser.KW_EXTENDED - 32)) | (1 << (FlinkSQLParser.KW_FILE - 32)) | (1 << (FlinkSQLParser.KW_FINAL - 32)) | (1 << (FlinkSQLParser.KW_FIRST - 32)) | (1 << (FlinkSQLParser.KW_FOLLOWING - 32)) | (1 << (FlinkSQLParser.KW_FORMAT - 32)) | (1 << (FlinkSQLParser.KW_FORTRAN - 32)) | (1 << (FlinkSQLParser.KW_FOUND - 32)) | (1 << (FlinkSQLParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSQLParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSQLParser.KW_GENERAL - 32)) | (1 << (FlinkSQLParser.KW_GENERATED - 32)) | (1 << (FlinkSQLParser.KW_GO - 32)) | (1 << (FlinkSQLParser.KW_GOTO - 32)) | (1 << (FlinkSQLParser.KW_GRANTED - 32)) | (1 << (FlinkSQLParser.KW_HOP - 32)) | (1 << (FlinkSQLParser.KW_HOURS - 32)) | (1 << (FlinkSQLParser.KW_IF - 32)) | (1 << (FlinkSQLParser.KW_IGNORE - 32)) | (1 << (FlinkSQLParser.KW_INCREMENT - 32)) | (1 << (FlinkSQLParser.KW_INPUT - 32)) | (1 << (FlinkSQLParser.KW_INVOKER - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSQLParser.KW_JAR - 64)) | (1 << (FlinkSQLParser.KW_JARS - 64)) | (1 << (FlinkSQLParser.KW_JAVA - 64)) | (1 << (FlinkSQLParser.KW_JSON - 64)) | (1 << (FlinkSQLParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSQLParser.KW_KEY - 64)) | (1 << (FlinkSQLParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSQLParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSQLParser.KW_LABEL - 64)) | (1 << (FlinkSQLParser.KW_LAST - 64)) | (1 << (FlinkSQLParser.KW_LENGTH - 64)) | (1 << (FlinkSQLParser.KW_LEVEL - 64)) | (1 << (FlinkSQLParser.KW_LOAD - 64)) | (1 << (FlinkSQLParser.KW_MAP - 64)) | (1 << (FlinkSQLParser.KW_MICROSECOND - 64)) | (1 << (FlinkSQLParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSQLParser.KW_MILLISECOND - 64)) | (1 << (FlinkSQLParser.KW_MINUTES - 64)) | (1 << (FlinkSQLParser.KW_MINVALUE - 64)) | (1 << (FlinkSQLParser.KW_MODIFY - 64)) | (1 << (FlinkSQLParser.KW_MODULES - 64)) | (1 << (FlinkSQLParser.KW_MONTHS - 64)) | (1 << (FlinkSQLParser.KW_NANOSECOND - 64)) | (1 << (FlinkSQLParser.KW_NULLS - 64)) | (1 << (FlinkSQLParser.KW_NUMBER - 64)) | (1 << (FlinkSQLParser.KW_OPTION - 64)) | (1 << (FlinkSQLParser.KW_OPTIONS - 64)) | (1 << (FlinkSQLParser.KW_ORDERING - 64)) | (1 << (FlinkSQLParser.KW_OUTPUT - 64)) | (1 << (FlinkSQLParser.KW_OVERWRITE - 64)) | (1 << (FlinkSQLParser.KW_OVERWRITING - 64)) | (1 << (FlinkSQLParser.KW_PARTITIONED - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSQLParser.KW_PARTITIONS - 96)) | (1 << (FlinkSQLParser.KW_PASSING - 96)) | (1 << (FlinkSQLParser.KW_PAST - 96)) | (1 << (FlinkSQLParser.KW_PATH - 96)) | (1 << (FlinkSQLParser.KW_PLACING - 96)) | (1 << (FlinkSQLParser.KW_PLAN - 96)) | (1 << (FlinkSQLParser.KW_PRECEDING - 96)) | (1 << (FlinkSQLParser.KW_PRESERVE - 96)) | (1 << (FlinkSQLParser.KW_PRIOR - 96)) | (1 << (FlinkSQLParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSQLParser.KW_PUBLIC - 96)) | (1 << (FlinkSQLParser.KW_PYTHON - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSQLParser.KW_QUARTER - 96)) | (1 << (FlinkSQLParser.KW_RAW - 96)) | (1 << (FlinkSQLParser.KW_READ - 96)) | (1 << (FlinkSQLParser.KW_RELATIVE - 96)) | (1 << (FlinkSQLParser.KW_REMOVE - 96)) | (1 << (FlinkSQLParser.KW_RENAME - 96)) | (1 << (FlinkSQLParser.KW_REPLACE - 96)) | (1 << (FlinkSQLParser.KW_RESPECT - 96)) | (1 << (FlinkSQLParser.KW_RESTART - 96)) | (1 << (FlinkSQLParser.KW_RESTRICT - 96)) | (1 << (FlinkSQLParser.KW_ROLE - 96)) | (1 << (FlinkSQLParser.KW_ROW_COUNT - 96)) | (1 << (FlinkSQLParser.KW_SCALA - 96)) | (1 << (FlinkSQLParser.KW_SCALAR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSQLParser.KW_SCALE - 128)) | (1 << (FlinkSQLParser.KW_SCHEMA - 128)) | (1 << (FlinkSQLParser.KW_SECONDS - 128)) | (1 << (FlinkSQLParser.KW_SECTION - 128)) | (1 << (FlinkSQLParser.KW_SECURITY - 128)) | (1 << (FlinkSQLParser.KW_SELF - 128)) | (1 << (FlinkSQLParser.KW_SERVER - 128)) | (1 << (FlinkSQLParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSQLParser.KW_SESSION - 128)) | (1 << (FlinkSQLParser.KW_SETS - 128)) | (1 << (FlinkSQLParser.KW_SIMPLE - 128)) | (1 << (FlinkSQLParser.KW_SIZE - 128)) | (1 << (FlinkSQLParser.KW_SLIDE - 128)) | (1 << (FlinkSQLParser.KW_SOURCE - 128)) | (1 << (FlinkSQLParser.KW_SPACE - 128)) | (1 << (FlinkSQLParser.KW_STATE - 128)) | (1 << (FlinkSQLParser.KW_STATEMENT - 128)) | (1 << (FlinkSQLParser.KW_STEP - 128)) | (1 << (FlinkSQLParser.KW_STRING - 128)) | (1 << (FlinkSQLParser.KW_STRUCTURE - 128)) | (1 << (FlinkSQLParser.KW_STYLE - 128)) | (1 << (FlinkSQLParser.KW_TABLES - 128)) | (1 << (FlinkSQLParser.KW_TEMPORARY - 128)) | (1 << (FlinkSQLParser.KW_TIMECOL - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_LTZ - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPADD - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPDIFF - 128)) | (1 << (FlinkSQLParser.KW_TRANSFORM - 128)) | (1 << (FlinkSQLParser.KW_TUMBLE - 128)) | (1 << (FlinkSQLParser.KW_TYPE - 128)) | (1 << (FlinkSQLParser.KW_UNDER - 128)) | (1 << (FlinkSQLParser.KW_UNLOAD - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSQLParser.KW_USAGE - 160)) | (1 << (FlinkSQLParser.KW_USE - 160)) | (1 << (FlinkSQLParser.KW_UTF16 - 160)) | (1 << (FlinkSQLParser.KW_UTF32 - 160)) | (1 << (FlinkSQLParser.KW_UTF8 - 160)) | (1 << (FlinkSQLParser.KW_VERSION - 160)) | (1 << (FlinkSQLParser.KW_VIEW - 160)) | (1 << (FlinkSQLParser.KW_VIEWS - 160)) | (1 << (FlinkSQLParser.KW_VIRTUAL - 160)) | (1 << (FlinkSQLParser.KW_WATERMARK - 160)) | (1 << (FlinkSQLParser.KW_WATERMARKS - 160)) | (1 << (FlinkSQLParser.KW_WEEK - 160)) | (1 << (FlinkSQLParser.KW_WORK - 160)) | (1 << (FlinkSQLParser.KW_WRAPPER - 160)) | (1 << (FlinkSQLParser.KW_YEARS - 160)) | (1 << (FlinkSQLParser.KW_ZONE - 160)))) !== 0) || ((((_la - 408)) & ~0x1F) === 0 && ((1 << (_la - 408)) & ((1 << (FlinkSQLParser.STRING_LITERAL - 408)) | (1 << (FlinkSQLParser.DIG_LITERAL - 408)) | (1 << (FlinkSQLParser.ID_LITERAL - 408)))) !== 0)) {
				{
				this.state = 945;
				this.uid();
				}
			}

			this.state = 948;
			this.match(FlinkSQLParser.KW_TO);
			this.state = 949;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setKeyValueDefinition(): SetKeyValueDefinitionContext {
		let _localctx: SetKeyValueDefinitionContext = new SetKeyValueDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, FlinkSQLParser.RULE_setKeyValueDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 951;
			this.match(FlinkSQLParser.KW_SET);
			this.state = 952;
			this.tablePropertyList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public addConstraint(): AddConstraintContext {
		let _localctx: AddConstraintContext = new AddConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, FlinkSQLParser.RULE_addConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 954;
			this.match(FlinkSQLParser.KW_ADD);
			this.state = 955;
			this.match(FlinkSQLParser.KW_CONSTRAINT);
			this.state = 956;
			this.constraintName();
			this.state = 957;
			this.match(FlinkSQLParser.KW_PRIMARY);
			this.state = 958;
			this.match(FlinkSQLParser.KW_KEY);
			this.state = 959;
			this.columnNameList();
			this.state = 961;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_NOT) {
				{
				this.state = 960;
				this.notForced();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropConstraint(): DropConstraintContext {
		let _localctx: DropConstraintContext = new DropConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, FlinkSQLParser.RULE_dropConstraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 963;
			this.match(FlinkSQLParser.KW_DROP);
			this.state = 964;
			this.match(FlinkSQLParser.KW_CONSTRAINT);
			this.state = 965;
			this.constraintName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public addUnique(): AddUniqueContext {
		let _localctx: AddUniqueContext = new AddUniqueContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, FlinkSQLParser.RULE_addUnique);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 967;
			this.match(FlinkSQLParser.KW_ADD);
			this.state = 968;
			this.match(FlinkSQLParser.KW_UNIQUE);
			this.state = 969;
			this.columnNameList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public notForced(): NotForcedContext {
		let _localctx: NotForcedContext = new NotForcedContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, FlinkSQLParser.RULE_notForced);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 971;
			this.match(FlinkSQLParser.KW_NOT);
			this.state = 972;
			this.match(FlinkSQLParser.KW_ENFORCED);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alertView(): AlertViewContext {
		let _localctx: AlertViewContext = new AlertViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, FlinkSQLParser.RULE_alertView);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 974;
			this.match(FlinkSQLParser.KW_ALTER);
			this.state = 975;
			this.match(FlinkSQLParser.KW_VIEW);
			this.state = 976;
			this.uid();
			this.state = 980;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_RENAME:
				{
				this.state = 977;
				this.renameDefinition();
				}
				break;
			case FlinkSQLParser.KW_AS:
				{
				this.state = 978;
				this.match(FlinkSQLParser.KW_AS);
				this.state = 979;
				this.queryStatement(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alterDatabase(): AlterDatabaseContext {
		let _localctx: AlterDatabaseContext = new AlterDatabaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, FlinkSQLParser.RULE_alterDatabase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 982;
			this.match(FlinkSQLParser.KW_ALTER);
			this.state = 983;
			this.match(FlinkSQLParser.KW_DATABASE);
			this.state = 984;
			this.databasePath();
			this.state = 985;
			this.setKeyValueDefinition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alterFunction(): AlterFunctionContext {
		let _localctx: AlterFunctionContext = new AlterFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, FlinkSQLParser.RULE_alterFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 987;
			this.match(FlinkSQLParser.KW_ALTER);
			this.state = 991;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				{
				this.state = 988;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				}
				break;

			case 2:
				{
				this.state = 989;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				this.state = 990;
				this.match(FlinkSQLParser.KW_SYSTEM);
				}
				break;
			}
			this.state = 993;
			this.match(FlinkSQLParser.KW_FUNCTION);
			this.state = 995;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				{
				this.state = 994;
				this.ifExists();
				}
				break;
			}
			this.state = 997;
			this.uid();
			this.state = 998;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 999;
			this.identifier();
			this.state = 1002;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_LANGUAGE) {
				{
				this.state = 1000;
				this.match(FlinkSQLParser.KW_LANGUAGE);
				this.state = 1001;
				_la = this._input.LA(1);
				if (!(_la === FlinkSQLParser.KW_JAVA || _la === FlinkSQLParser.KW_PYTHON || _la === FlinkSQLParser.KW_SCALA)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropCatalog(): DropCatalogContext {
		let _localctx: DropCatalogContext = new DropCatalogContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, FlinkSQLParser.RULE_dropCatalog);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1004;
			this.match(FlinkSQLParser.KW_DROP);
			this.state = 1005;
			this.match(FlinkSQLParser.KW_CATALOG);
			this.state = 1007;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				{
				this.state = 1006;
				this.ifExists();
				}
				break;
			}
			this.state = 1009;
			this.catalogPath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropTable(): DropTableContext {
		let _localctx: DropTableContext = new DropTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, FlinkSQLParser.RULE_dropTable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1011;
			this.match(FlinkSQLParser.KW_DROP);
			this.state = 1013;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_TEMPORARY) {
				{
				this.state = 1012;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				}
			}

			this.state = 1015;
			this.match(FlinkSQLParser.KW_TABLE);
			this.state = 1017;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				{
				this.state = 1016;
				this.ifExists();
				}
				break;
			}
			this.state = 1019;
			this.tablePath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropDatabase(): DropDatabaseContext {
		let _localctx: DropDatabaseContext = new DropDatabaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, FlinkSQLParser.RULE_dropDatabase);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1021;
			this.match(FlinkSQLParser.KW_DROP);
			this.state = 1022;
			this.match(FlinkSQLParser.KW_DATABASE);
			this.state = 1024;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				{
				this.state = 1023;
				this.ifExists();
				}
				break;
			}
			this.state = 1026;
			this.databasePath();
			this.state = 1028;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_CASCADE || _la === FlinkSQLParser.KW_RESTRICT) {
				{
				this.state = 1027;
				_localctx._dropType = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSQLParser.KW_CASCADE || _la === FlinkSQLParser.KW_RESTRICT)) {
					_localctx._dropType = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropView(): DropViewContext {
		let _localctx: DropViewContext = new DropViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, FlinkSQLParser.RULE_dropView);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1030;
			this.match(FlinkSQLParser.KW_DROP);
			this.state = 1032;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_TEMPORARY) {
				{
				this.state = 1031;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				}
			}

			this.state = 1034;
			this.match(FlinkSQLParser.KW_VIEW);
			this.state = 1036;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				{
				this.state = 1035;
				this.ifExists();
				}
				break;
			}
			this.state = 1038;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropFunction(): DropFunctionContext {
		let _localctx: DropFunctionContext = new DropFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, FlinkSQLParser.RULE_dropFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1040;
			this.match(FlinkSQLParser.KW_DROP);
			this.state = 1044;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
			case 1:
				{
				this.state = 1041;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				}
				break;

			case 2:
				{
				this.state = 1042;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				this.state = 1043;
				this.match(FlinkSQLParser.KW_SYSTEM);
				}
				break;
			}
			this.state = 1046;
			this.match(FlinkSQLParser.KW_FUNCTION);
			this.state = 1048;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				{
				this.state = 1047;
				this.ifExists();
				}
				break;
			}
			this.state = 1050;
			this.functionName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public insertStatement(): InsertStatementContext {
		let _localctx: InsertStatementContext = new InsertStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, FlinkSQLParser.RULE_insertStatement);
		let _la: number;
		try {
			this.state = 1059;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 1053;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_EXECUTE) {
					{
					this.state = 1052;
					this.match(FlinkSQLParser.KW_EXECUTE);
					}
				}

				this.state = 1055;
				this.insertSimpleStatement();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1056;
				this.insertMulStatementCompatibility();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 1057;
				this.match(FlinkSQLParser.KW_EXECUTE);
				this.state = 1058;
				this.insertMulStatement();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public insertSimpleStatement(): InsertSimpleStatementContext {
		let _localctx: InsertSimpleStatementContext = new InsertSimpleStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, FlinkSQLParser.RULE_insertSimpleStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1061;
			this.match(FlinkSQLParser.KW_INSERT);
			this.state = 1062;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.KW_OVERWRITE || _la === FlinkSQLParser.KW_INTO)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1063;
			this.tablePath();
			this.state = 1072;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				{
				this.state = 1065;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_PARTITION) {
					{
					this.state = 1064;
					this.insertPartitionDefinition();
					}
				}

				this.state = 1068;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
				case 1:
					{
					this.state = 1067;
					this.columnNameList();
					}
					break;
				}
				this.state = 1070;
				this.queryStatement(0);
				}
				break;

			case 2:
				{
				this.state = 1071;
				this.valuesDefinition();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public insertPartitionDefinition(): InsertPartitionDefinitionContext {
		let _localctx: InsertPartitionDefinitionContext = new InsertPartitionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, FlinkSQLParser.RULE_insertPartitionDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1074;
			this.match(FlinkSQLParser.KW_PARTITION);
			this.state = 1075;
			this.tablePropertyList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valuesDefinition(): ValuesDefinitionContext {
		let _localctx: ValuesDefinitionContext = new ValuesDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, FlinkSQLParser.RULE_valuesDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1077;
			this.match(FlinkSQLParser.KW_VALUES);
			this.state = 1078;
			this.valuesRowDefinition();
			this.state = 1083;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1079;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1080;
				this.valuesRowDefinition();
				}
				}
				this.state = 1085;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valuesRowDefinition(): ValuesRowDefinitionContext {
		let _localctx: ValuesRowDefinitionContext = new ValuesRowDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, FlinkSQLParser.RULE_valuesRowDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1086;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1087;
			this.constant();
			this.state = 1092;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1088;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1089;
				this.constant();
				}
				}
				this.state = 1094;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1095;
			this.match(FlinkSQLParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public insertMulStatementCompatibility(): InsertMulStatementCompatibilityContext {
		let _localctx: InsertMulStatementCompatibilityContext = new InsertMulStatementCompatibilityContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, FlinkSQLParser.RULE_insertMulStatementCompatibility);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1097;
			this.match(FlinkSQLParser.KW_BEGIN);
			this.state = 1098;
			this.match(FlinkSQLParser.KW_STATEMENT);
			this.state = 1099;
			this.match(FlinkSQLParser.KW_SET);
			this.state = 1100;
			this.match(FlinkSQLParser.SEMICOLON);
			this.state = 1104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1101;
				this.insertSimpleStatement();
				this.state = 1102;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				}
				this.state = 1106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FlinkSQLParser.KW_INSERT);
			this.state = 1108;
			this.match(FlinkSQLParser.KW_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public insertMulStatement(): InsertMulStatementContext {
		let _localctx: InsertMulStatementContext = new InsertMulStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, FlinkSQLParser.RULE_insertMulStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1110;
			this.match(FlinkSQLParser.KW_STATEMENT);
			this.state = 1111;
			this.match(FlinkSQLParser.KW_SET);
			this.state = 1112;
			this.match(FlinkSQLParser.KW_BEGIN);
			this.state = 1116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1113;
				this.insertSimpleStatement();
				this.state = 1114;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				}
				this.state = 1118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FlinkSQLParser.KW_INSERT);
			this.state = 1120;
			this.match(FlinkSQLParser.KW_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public queryStatement(): QueryStatementContext;
	public queryStatement(_p: number): QueryStatementContext;
	// @RuleVersion(0)
	public queryStatement(_p?: number): QueryStatementContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: QueryStatementContext = new QueryStatementContext(this._ctx, _parentState);
		let _prevctx: QueryStatementContext = _localctx;
		let _startState: number = 156;
		this.enterRecursionRule(_localctx, 156, FlinkSQLParser.RULE_queryStatement, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1145;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
			case 1:
				{
				this.state = 1123;
				this.valuesCaluse();
				}
				break;

			case 2:
				{
				this.state = 1124;
				this.withClause();
				this.state = 1125;
				this.queryStatement(5);
				}
				break;

			case 3:
				{
				this.state = 1127;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1128;
				this.queryStatement(0);
				this.state = 1129;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 4:
				{
				this.state = 1131;
				this.selectClause();
				this.state = 1133;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
				case 1:
					{
					this.state = 1132;
					this.orderByCaluse();
					}
					break;
				}
				this.state = 1136;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
				case 1:
					{
					this.state = 1135;
					this.limitClause();
					}
					break;
				}
				}
				break;

			case 5:
				{
				this.state = 1138;
				this.selectStatement();
				this.state = 1140;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
				case 1:
					{
					this.state = 1139;
					this.orderByCaluse();
					}
					break;
				}
				this.state = 1143;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
				case 1:
					{
					this.state = 1142;
					this.limitClause();
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1161;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new QueryStatementContext(_parentctx, _parentState);
					_localctx._left = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_queryStatement);
					this.state = 1147;
					if (!(this.precpred(this._ctx, 3))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
					}
					this.state = 1148;
					_localctx._operator = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === FlinkSQLParser.KW_EXCEPT || _la === FlinkSQLParser.KW_INTERSECT || _la === FlinkSQLParser.KW_UNION)) {
						_localctx._operator = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 1150;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSQLParser.KW_ALL) {
						{
						this.state = 1149;
						this.match(FlinkSQLParser.KW_ALL);
						}
					}

					this.state = 1152;
					_localctx._right = this.queryStatement(0);
					this.state = 1154;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
					case 1:
						{
						this.state = 1153;
						this.orderByCaluse();
						}
						break;
					}
					this.state = 1157;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
					case 1:
						{
						this.state = 1156;
						this.limitClause();
						}
						break;
					}
					}
					}
				}
				this.state = 1163;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valuesCaluse(): ValuesCaluseContext {
		let _localctx: ValuesCaluseContext = new ValuesCaluseContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, FlinkSQLParser.RULE_valuesCaluse);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1164;
			this.match(FlinkSQLParser.KW_VALUES);
			this.state = 1165;
			this.expression();
			this.state = 1170;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1166;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1167;
					this.expression();
					}
					}
				}
				this.state = 1172;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public withClause(): WithClauseContext {
		let _localctx: WithClauseContext = new WithClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, FlinkSQLParser.RULE_withClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1173;
			this.match(FlinkSQLParser.KW_WITH);
			this.state = 1174;
			this.withItem();
			this.state = 1179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1175;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1176;
				this.withItem();
				}
				}
				this.state = 1181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public withItem(): WithItemContext {
		let _localctx: WithItemContext = new WithItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, FlinkSQLParser.RULE_withItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1182;
			this.withItemName();
			this.state = 1194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.LR_BRACKET) {
				{
				this.state = 1183;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1184;
				this.columnName();
				this.state = 1189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1185;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1186;
					this.columnName();
					}
					}
					this.state = 1191;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1192;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
			}

			this.state = 1196;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 1197;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1198;
			this.queryStatement(0);
			this.state = 1199;
			this.match(FlinkSQLParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public withItemName(): WithItemNameContext {
		let _localctx: WithItemNameContext = new WithItemNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, FlinkSQLParser.RULE_withItemName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1201;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectStatement(): SelectStatementContext {
		let _localctx: SelectStatementContext = new SelectStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, FlinkSQLParser.RULE_selectStatement);
		try {
			this.state = 1221;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1203;
				this.selectClause();
				this.state = 1204;
				this.fromClause();
				this.state = 1206;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
				case 1:
					{
					this.state = 1205;
					this.whereClause();
					}
					break;
				}
				this.state = 1209;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 125, this._ctx) ) {
				case 1:
					{
					this.state = 1208;
					this.groupByClause();
					}
					break;
				}
				this.state = 1212;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
				case 1:
					{
					this.state = 1211;
					this.havingClause();
					}
					break;
				}
				this.state = 1215;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
				case 1:
					{
					this.state = 1214;
					this.windowClause();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1217;
				this.selectClause();
				this.state = 1218;
				this.fromClause();
				this.state = 1219;
				this.matchRecognizeClause();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectClause(): SelectClauseContext {
		let _localctx: SelectClauseContext = new SelectClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, FlinkSQLParser.RULE_selectClause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1223;
			this.match(FlinkSQLParser.KW_SELECT);
			this.state = 1225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_ALL || _la === FlinkSQLParser.KW_DISTINCT) {
				{
				this.state = 1224;
				this.setQuantifier();
				}
			}

			this.state = 1236;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				{
				this.state = 1227;
				this.match(FlinkSQLParser.ASTERISK_SIGN);
				}
				break;

			case 2:
				{
				this.state = 1228;
				this.projectItemDefinition();
				this.state = 1233;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1229;
						this.match(FlinkSQLParser.COMMA);
						this.state = 1230;
						this.projectItemDefinition();
						}
						}
					}
					this.state = 1235;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public projectItemDefinition(): ProjectItemDefinitionContext {
		let _localctx: ProjectItemDefinitionContext = new ProjectItemDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, FlinkSQLParser.RULE_projectItemDefinition);
		let _la: number;
		try {
			this.state = 1246;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1238;
				this.overWindowItem();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1239;
				this.expression();
				this.state = 1244;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 133, this._ctx) ) {
				case 1:
					{
					this.state = 1241;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSQLParser.KW_AS) {
						{
						this.state = 1240;
						this.match(FlinkSQLParser.KW_AS);
						}
					}

					this.state = 1243;
					this.expression();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public overWindowItem(): OverWindowItemContext {
		let _localctx: OverWindowItemContext = new OverWindowItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, FlinkSQLParser.RULE_overWindowItem);
		try {
			this.state = 1260;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1248;
				this.primaryExpression(0);
				this.state = 1249;
				this.match(FlinkSQLParser.KW_OVER);
				this.state = 1250;
				this.windowSpec();
				this.state = 1251;
				this.match(FlinkSQLParser.KW_AS);
				this.state = 1252;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1254;
				this.primaryExpression(0);
				this.state = 1255;
				this.match(FlinkSQLParser.KW_OVER);
				this.state = 1256;
				this.errorCapturingIdentifier();
				this.state = 1257;
				this.match(FlinkSQLParser.KW_AS);
				this.state = 1258;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fromClause(): FromClauseContext {
		let _localctx: FromClauseContext = new FromClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, FlinkSQLParser.RULE_fromClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1262;
			this.match(FlinkSQLParser.KW_FROM);
			this.state = 1263;
			this.tableExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public tableExpression(): TableExpressionContext;
	public tableExpression(_p: number): TableExpressionContext;
	// @RuleVersion(0)
	public tableExpression(_p?: number): TableExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TableExpressionContext = new TableExpressionContext(this._ctx, _parentState);
		let _prevctx: TableExpressionContext = _localctx;
		let _startState: number = 176;
		this.enterRecursionRule(_localctx, 176, FlinkSQLParser.RULE_tableExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1276;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 137, this._ctx) ) {
			case 1:
				{
				this.state = 1266;
				this.tableReference();
				this.state = 1271;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1267;
						this.match(FlinkSQLParser.COMMA);
						this.state = 1268;
						this.tableReference();
						}
						}
					}
					this.state = 1273;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
				}
				}
				break;

			case 2:
				{
				this.state = 1274;
				this.inlineDataValueClause();
				}
				break;

			case 3:
				{
				this.state = 1275;
				this.windoTVFClause();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1299;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1297;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
					case 1:
						{
						_localctx = new TableExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_tableExpression);
						this.state = 1278;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1279;
						this.match(FlinkSQLParser.KW_CROSS);
						this.state = 1280;
						this.match(FlinkSQLParser.KW_JOIN);
						this.state = 1281;
						this.tableExpression(4);
						}
						break;

					case 2:
						{
						_localctx = new TableExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_tableExpression);
						this.state = 1282;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1284;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FlinkSQLParser.KW_NATURAL) {
							{
							this.state = 1283;
							this.match(FlinkSQLParser.KW_NATURAL);
							}
						}

						this.state = 1287;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 253)) & ~0x1F) === 0 && ((1 << (_la - 253)) & ((1 << (FlinkSQLParser.KW_FULL - 253)) | (1 << (FlinkSQLParser.KW_INNER - 253)) | (1 << (FlinkSQLParser.KW_LEFT - 253)))) !== 0) || _la === FlinkSQLParser.KW_RIGHT) {
							{
							this.state = 1286;
							_la = this._input.LA(1);
							if (!(((((_la - 253)) & ~0x1F) === 0 && ((1 << (_la - 253)) & ((1 << (FlinkSQLParser.KW_FULL - 253)) | (1 << (FlinkSQLParser.KW_INNER - 253)) | (1 << (FlinkSQLParser.KW_LEFT - 253)))) !== 0) || _la === FlinkSQLParser.KW_RIGHT)) {
							this._errHandler.recoverInline(this);
							} else {
								if (this._input.LA(1) === Token.EOF) {
									this.matchedEOF = true;
								}

								this._errHandler.reportMatch(this);
								this.consume();
							}
							}
						}

						this.state = 1290;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FlinkSQLParser.KW_OUTER) {
							{
							this.state = 1289;
							this.match(FlinkSQLParser.KW_OUTER);
							}
						}

						this.state = 1292;
						this.match(FlinkSQLParser.KW_JOIN);
						this.state = 1293;
						this.tableExpression(0);
						this.state = 1295;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 141, this._ctx) ) {
						case 1:
							{
							this.state = 1294;
							this.joinCondition();
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 1301;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableReference(): TableReferenceContext {
		let _localctx: TableReferenceContext = new TableReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, FlinkSQLParser.RULE_tableReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1302;
			this.tablePrimary();
			this.state = 1304;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 144, this._ctx) ) {
			case 1:
				{
				this.state = 1303;
				this.tableAlias();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tablePrimary(): TablePrimaryContext {
		let _localctx: TablePrimaryContext = new TablePrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, FlinkSQLParser.RULE_tablePrimary);
		let _la: number;
		try {
			this.state = 1347;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 151, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1307;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_TABLE) {
					{
					this.state = 1306;
					this.match(FlinkSQLParser.KW_TABLE);
					}
				}

				this.state = 1309;
				this.tablePath();
				this.state = 1311;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
				case 1:
					{
					this.state = 1310;
					this.systemTimePeriod();
					}
					break;
				}
				this.state = 1317;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 148, this._ctx) ) {
				case 1:
					{
					this.state = 1314;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSQLParser.KW_AS) {
						{
						this.state = 1313;
						this.match(FlinkSQLParser.KW_AS);
						}
					}

					this.state = 1316;
					this.correlationName();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1319;
				this.match(FlinkSQLParser.KW_LATERAL);
				this.state = 1320;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 1321;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1322;
				this.functionName();
				this.state = 1323;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1324;
				this.functionParam();
				this.state = 1329;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1325;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1326;
					this.functionParam();
					}
					}
					this.state = 1331;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1332;
				this.match(FlinkSQLParser.RR_BRACKET);
				this.state = 1333;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1336;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_LATERAL) {
					{
					this.state = 1335;
					this.match(FlinkSQLParser.KW_LATERAL);
					}
				}

				this.state = 1338;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1339;
				this.queryStatement(0);
				this.state = 1340;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1342;
				this.match(FlinkSQLParser.KW_UNNEST);
				this.state = 1343;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1344;
				this.expression();
				this.state = 1345;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public systemTimePeriod(): SystemTimePeriodContext {
		let _localctx: SystemTimePeriodContext = new SystemTimePeriodContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, FlinkSQLParser.RULE_systemTimePeriod);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1349;
			this.match(FlinkSQLParser.KW_FOR);
			this.state = 1350;
			this.match(FlinkSQLParser.KW_SYSTEM_TIME);
			this.state = 1351;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 1352;
			this.match(FlinkSQLParser.KW_OF);
			this.state = 1353;
			this.dateTimeExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dateTimeExpression(): DateTimeExpressionContext {
		let _localctx: DateTimeExpressionContext = new DateTimeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, FlinkSQLParser.RULE_dateTimeExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1355;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inlineDataValueClause(): InlineDataValueClauseContext {
		let _localctx: InlineDataValueClauseContext = new InlineDataValueClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, FlinkSQLParser.RULE_inlineDataValueClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1357;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1358;
			this.valuesDefinition();
			this.state = 1359;
			this.match(FlinkSQLParser.RR_BRACKET);
			this.state = 1360;
			this.tableAlias();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windoTVFClause(): WindoTVFClauseContext {
		let _localctx: WindoTVFClauseContext = new WindoTVFClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, FlinkSQLParser.RULE_windoTVFClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1362;
			this.match(FlinkSQLParser.KW_TABLE);
			this.state = 1363;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1364;
			this.windowTVFExression();
			this.state = 1365;
			this.match(FlinkSQLParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windowTVFExression(): WindowTVFExressionContext {
		let _localctx: WindowTVFExressionContext = new WindowTVFExressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, FlinkSQLParser.RULE_windowTVFExression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1367;
			this.windoTVFName();
			this.state = 1368;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1369;
			this.windowTVFParam();
			this.state = 1374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1370;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1371;
				this.windowTVFParam();
				}
				}
				this.state = 1376;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1377;
			this.match(FlinkSQLParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windoTVFName(): WindoTVFNameContext {
		let _localctx: WindoTVFNameContext = new WindoTVFNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, FlinkSQLParser.RULE_windoTVFName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1379;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.KW_CUMULATE || _la === FlinkSQLParser.KW_HOP || _la === FlinkSQLParser.KW_TUMBLE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windowTVFParam(): WindowTVFParamContext {
		let _localctx: WindowTVFParamContext = new WindowTVFParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, FlinkSQLParser.RULE_windowTVFParam);
		try {
			this.state = 1396;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 153, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1381;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 1382;
				this.timeAttrColumn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1383;
				this.columnDescriptor();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1384;
				this.timeIntervalExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1385;
				this.match(FlinkSQLParser.KW_DATA);
				this.state = 1386;
				this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
				this.state = 1387;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 1388;
				this.timeAttrColumn();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1389;
				this.match(FlinkSQLParser.KW_TIMECOL);
				this.state = 1390;
				this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
				this.state = 1391;
				this.columnDescriptor();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1392;
				this.timeIntervalParamName();
				this.state = 1393;
				this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
				this.state = 1394;
				this.timeIntervalExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeIntervalParamName(): TimeIntervalParamNameContext {
		let _localctx: TimeIntervalParamNameContext = new TimeIntervalParamNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, FlinkSQLParser.RULE_timeIntervalParamName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1398;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.KW_DATA || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (FlinkSQLParser.KW_SIZE - 139)) | (1 << (FlinkSQLParser.KW_SLIDE - 139)) | (1 << (FlinkSQLParser.KW_STEP - 139)) | (1 << (FlinkSQLParser.KW_TIMECOL - 139)))) !== 0) || _la === FlinkSQLParser.KW_OFFSET)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnDescriptor(): ColumnDescriptorContext {
		let _localctx: ColumnDescriptorContext = new ColumnDescriptorContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, FlinkSQLParser.RULE_columnDescriptor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1400;
			this.match(FlinkSQLParser.KW_DESCRIPTOR);
			this.state = 1401;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1402;
			this.uid();
			this.state = 1403;
			this.match(FlinkSQLParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinCondition(): JoinConditionContext {
		let _localctx: JoinConditionContext = new JoinConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, FlinkSQLParser.RULE_joinCondition);
		let _la: number;
		try {
			this.state = 1419;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_ON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1405;
				this.match(FlinkSQLParser.KW_ON);
				this.state = 1406;
				this.booleanExpression(0);
				}
				break;
			case FlinkSQLParser.KW_USING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1407;
				this.match(FlinkSQLParser.KW_USING);
				this.state = 1408;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1409;
				this.uid();
				this.state = 1414;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1410;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1411;
					this.uid();
					}
					}
					this.state = 1416;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1417;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whereClause(): WhereClauseContext {
		let _localctx: WhereClauseContext = new WhereClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, FlinkSQLParser.RULE_whereClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1421;
			this.match(FlinkSQLParser.KW_WHERE);
			this.state = 1422;
			this.booleanExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupByClause(): GroupByClauseContext {
		let _localctx: GroupByClauseContext = new GroupByClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, FlinkSQLParser.RULE_groupByClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1424;
			this.match(FlinkSQLParser.KW_GROUP);
			this.state = 1425;
			this.match(FlinkSQLParser.KW_BY);
			this.state = 1426;
			this.groupItemDefinition();
			this.state = 1431;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1427;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1428;
					this.groupItemDefinition();
					}
					}
				}
				this.state = 1433;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupItemDefinition(): GroupItemDefinitionContext {
		let _localctx: GroupItemDefinitionContext = new GroupItemDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, FlinkSQLParser.RULE_groupItemDefinition);
		let _la: number;
		try {
			this.state = 1473;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 160, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1434;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1435;
				this.groupWindowFunction();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1436;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1437;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1438;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1439;
				this.expression();
				this.state = 1444;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1440;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1441;
					this.expression();
					}
					}
					this.state = 1446;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1447;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1449;
				this.groupingSetsNotaionName();
				this.state = 1450;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1451;
				this.expression();
				this.state = 1456;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1452;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1453;
					this.expression();
					}
					}
					this.state = 1458;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1459;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1461;
				this.groupingSets();
				this.state = 1462;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1463;
				this.groupItemDefinition();
				this.state = 1468;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1464;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1465;
					this.groupItemDefinition();
					}
					}
					this.state = 1470;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1471;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupingSets(): GroupingSetsContext {
		let _localctx: GroupingSetsContext = new GroupingSetsContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, FlinkSQLParser.RULE_groupingSets);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1475;
			this.match(FlinkSQLParser.KW_GROUPING);
			this.state = 1476;
			this.match(FlinkSQLParser.KW_SETS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupingSetsNotaionName(): GroupingSetsNotaionNameContext {
		let _localctx: GroupingSetsNotaionNameContext = new GroupingSetsNotaionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, FlinkSQLParser.RULE_groupingSetsNotaionName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1478;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.KW_CUBE || _la === FlinkSQLParser.KW_ROLLUP)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupWindowFunction(): GroupWindowFunctionContext {
		let _localctx: GroupWindowFunctionContext = new GroupWindowFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, FlinkSQLParser.RULE_groupWindowFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1480;
			this.groupWindowFunctionName();
			this.state = 1481;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1482;
			this.timeAttrColumn();
			this.state = 1483;
			this.match(FlinkSQLParser.COMMA);
			this.state = 1484;
			this.timeIntervalExpression();
			this.state = 1485;
			this.match(FlinkSQLParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupWindowFunctionName(): GroupWindowFunctionNameContext {
		let _localctx: GroupWindowFunctionNameContext = new GroupWindowFunctionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, FlinkSQLParser.RULE_groupWindowFunctionName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1487;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.KW_HOP || _la === FlinkSQLParser.KW_SESSION || _la === FlinkSQLParser.KW_TUMBLE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeAttrColumn(): TimeAttrColumnContext {
		let _localctx: TimeAttrColumnContext = new TimeAttrColumnContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, FlinkSQLParser.RULE_timeAttrColumn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1489;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public havingClause(): HavingClauseContext {
		let _localctx: HavingClauseContext = new HavingClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, FlinkSQLParser.RULE_havingClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1491;
			this.match(FlinkSQLParser.KW_HAVING);
			this.state = 1492;
			this.booleanExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windowClause(): WindowClauseContext {
		let _localctx: WindowClauseContext = new WindowClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, FlinkSQLParser.RULE_windowClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1494;
			this.match(FlinkSQLParser.KW_WINDOW);
			this.state = 1495;
			this.namedWindow();
			this.state = 1500;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1496;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1497;
					this.namedWindow();
					}
					}
				}
				this.state = 1502;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedWindow(): NamedWindowContext {
		let _localctx: NamedWindowContext = new NamedWindowContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, FlinkSQLParser.RULE_namedWindow);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1503;
			_localctx._name = this.errorCapturingIdentifier();
			this.state = 1504;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 1505;
			this.windowSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windowSpec(): WindowSpecContext {
		let _localctx: WindowSpecContext = new WindowSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, FlinkSQLParser.RULE_windowSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1508;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSQLParser.KW_ADD) | (1 << FlinkSQLParser.KW_ADMIN) | (1 << FlinkSQLParser.KW_AFTER) | (1 << FlinkSQLParser.KW_ANALYZE) | (1 << FlinkSQLParser.KW_ASC) | (1 << FlinkSQLParser.KW_BEFORE) | (1 << FlinkSQLParser.KW_BYTES) | (1 << FlinkSQLParser.KW_CASCADE) | (1 << FlinkSQLParser.KW_CATALOG) | (1 << FlinkSQLParser.KW_CATALOGS) | (1 << FlinkSQLParser.KW_CENTURY) | (1 << FlinkSQLParser.KW_CHAIN) | (1 << FlinkSQLParser.KW_CHANGELOG_MODE) | (1 << FlinkSQLParser.KW_CHARACTERS) | (1 << FlinkSQLParser.KW_COMMENT) | (1 << FlinkSQLParser.KW_COMPACT) | (1 << FlinkSQLParser.KW_COLUMNS) | (1 << FlinkSQLParser.KW_CONSTRAINTS) | (1 << FlinkSQLParser.KW_CONSTRUCTOR) | (1 << FlinkSQLParser.KW_CUMULATE) | (1 << FlinkSQLParser.KW_DATA) | (1 << FlinkSQLParser.KW_DATABASE) | (1 << FlinkSQLParser.KW_DATABASES) | (1 << FlinkSQLParser.KW_DAYS) | (1 << FlinkSQLParser.KW_DECADE) | (1 << FlinkSQLParser.KW_DEFINED) | (1 << FlinkSQLParser.KW_DESC) | (1 << FlinkSQLParser.KW_DESCRIPTOR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSQLParser.KW_DIV - 32)) | (1 << (FlinkSQLParser.KW_ENCODING - 32)) | (1 << (FlinkSQLParser.KW_ENFORCED - 32)) | (1 << (FlinkSQLParser.KW_ENGINE - 32)) | (1 << (FlinkSQLParser.KW_ERROR - 32)) | (1 << (FlinkSQLParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSQLParser.KW_EXCEPTION - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDE - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDING - 32)) | (1 << (FlinkSQLParser.KW_EXTENDED - 32)) | (1 << (FlinkSQLParser.KW_FILE - 32)) | (1 << (FlinkSQLParser.KW_FINAL - 32)) | (1 << (FlinkSQLParser.KW_FIRST - 32)) | (1 << (FlinkSQLParser.KW_FOLLOWING - 32)) | (1 << (FlinkSQLParser.KW_FORMAT - 32)) | (1 << (FlinkSQLParser.KW_FORTRAN - 32)) | (1 << (FlinkSQLParser.KW_FOUND - 32)) | (1 << (FlinkSQLParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSQLParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSQLParser.KW_GENERAL - 32)) | (1 << (FlinkSQLParser.KW_GENERATED - 32)) | (1 << (FlinkSQLParser.KW_GO - 32)) | (1 << (FlinkSQLParser.KW_GOTO - 32)) | (1 << (FlinkSQLParser.KW_GRANTED - 32)) | (1 << (FlinkSQLParser.KW_HOP - 32)) | (1 << (FlinkSQLParser.KW_HOURS - 32)) | (1 << (FlinkSQLParser.KW_IF - 32)) | (1 << (FlinkSQLParser.KW_IGNORE - 32)) | (1 << (FlinkSQLParser.KW_INCREMENT - 32)) | (1 << (FlinkSQLParser.KW_INPUT - 32)) | (1 << (FlinkSQLParser.KW_INVOKER - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSQLParser.KW_JAR - 64)) | (1 << (FlinkSQLParser.KW_JARS - 64)) | (1 << (FlinkSQLParser.KW_JAVA - 64)) | (1 << (FlinkSQLParser.KW_JSON - 64)) | (1 << (FlinkSQLParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSQLParser.KW_KEY - 64)) | (1 << (FlinkSQLParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSQLParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSQLParser.KW_LABEL - 64)) | (1 << (FlinkSQLParser.KW_LAST - 64)) | (1 << (FlinkSQLParser.KW_LENGTH - 64)) | (1 << (FlinkSQLParser.KW_LEVEL - 64)) | (1 << (FlinkSQLParser.KW_LOAD - 64)) | (1 << (FlinkSQLParser.KW_MAP - 64)) | (1 << (FlinkSQLParser.KW_MICROSECOND - 64)) | (1 << (FlinkSQLParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSQLParser.KW_MILLISECOND - 64)) | (1 << (FlinkSQLParser.KW_MINUTES - 64)) | (1 << (FlinkSQLParser.KW_MINVALUE - 64)) | (1 << (FlinkSQLParser.KW_MODIFY - 64)) | (1 << (FlinkSQLParser.KW_MODULES - 64)) | (1 << (FlinkSQLParser.KW_MONTHS - 64)) | (1 << (FlinkSQLParser.KW_NANOSECOND - 64)) | (1 << (FlinkSQLParser.KW_NULLS - 64)) | (1 << (FlinkSQLParser.KW_NUMBER - 64)) | (1 << (FlinkSQLParser.KW_OPTION - 64)) | (1 << (FlinkSQLParser.KW_OPTIONS - 64)) | (1 << (FlinkSQLParser.KW_ORDERING - 64)) | (1 << (FlinkSQLParser.KW_OUTPUT - 64)) | (1 << (FlinkSQLParser.KW_OVERWRITE - 64)) | (1 << (FlinkSQLParser.KW_OVERWRITING - 64)) | (1 << (FlinkSQLParser.KW_PARTITIONED - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSQLParser.KW_PARTITIONS - 96)) | (1 << (FlinkSQLParser.KW_PASSING - 96)) | (1 << (FlinkSQLParser.KW_PAST - 96)) | (1 << (FlinkSQLParser.KW_PATH - 96)) | (1 << (FlinkSQLParser.KW_PLACING - 96)) | (1 << (FlinkSQLParser.KW_PLAN - 96)) | (1 << (FlinkSQLParser.KW_PRECEDING - 96)) | (1 << (FlinkSQLParser.KW_PRESERVE - 96)) | (1 << (FlinkSQLParser.KW_PRIOR - 96)) | (1 << (FlinkSQLParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSQLParser.KW_PUBLIC - 96)) | (1 << (FlinkSQLParser.KW_PYTHON - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSQLParser.KW_QUARTER - 96)) | (1 << (FlinkSQLParser.KW_RAW - 96)) | (1 << (FlinkSQLParser.KW_READ - 96)) | (1 << (FlinkSQLParser.KW_RELATIVE - 96)) | (1 << (FlinkSQLParser.KW_REMOVE - 96)) | (1 << (FlinkSQLParser.KW_RENAME - 96)) | (1 << (FlinkSQLParser.KW_REPLACE - 96)) | (1 << (FlinkSQLParser.KW_RESPECT - 96)) | (1 << (FlinkSQLParser.KW_RESTART - 96)) | (1 << (FlinkSQLParser.KW_RESTRICT - 96)) | (1 << (FlinkSQLParser.KW_ROLE - 96)) | (1 << (FlinkSQLParser.KW_ROW_COUNT - 96)) | (1 << (FlinkSQLParser.KW_SCALA - 96)) | (1 << (FlinkSQLParser.KW_SCALAR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSQLParser.KW_SCALE - 128)) | (1 << (FlinkSQLParser.KW_SCHEMA - 128)) | (1 << (FlinkSQLParser.KW_SECONDS - 128)) | (1 << (FlinkSQLParser.KW_SECTION - 128)) | (1 << (FlinkSQLParser.KW_SECURITY - 128)) | (1 << (FlinkSQLParser.KW_SELF - 128)) | (1 << (FlinkSQLParser.KW_SERVER - 128)) | (1 << (FlinkSQLParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSQLParser.KW_SESSION - 128)) | (1 << (FlinkSQLParser.KW_SETS - 128)) | (1 << (FlinkSQLParser.KW_SIMPLE - 128)) | (1 << (FlinkSQLParser.KW_SIZE - 128)) | (1 << (FlinkSQLParser.KW_SLIDE - 128)) | (1 << (FlinkSQLParser.KW_SOURCE - 128)) | (1 << (FlinkSQLParser.KW_SPACE - 128)) | (1 << (FlinkSQLParser.KW_STATE - 128)) | (1 << (FlinkSQLParser.KW_STATEMENT - 128)) | (1 << (FlinkSQLParser.KW_STEP - 128)) | (1 << (FlinkSQLParser.KW_STRING - 128)) | (1 << (FlinkSQLParser.KW_STRUCTURE - 128)) | (1 << (FlinkSQLParser.KW_STYLE - 128)) | (1 << (FlinkSQLParser.KW_TABLES - 128)) | (1 << (FlinkSQLParser.KW_TEMPORARY - 128)) | (1 << (FlinkSQLParser.KW_TIMECOL - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_LTZ - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPADD - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPDIFF - 128)) | (1 << (FlinkSQLParser.KW_TRANSFORM - 128)) | (1 << (FlinkSQLParser.KW_TUMBLE - 128)) | (1 << (FlinkSQLParser.KW_TYPE - 128)) | (1 << (FlinkSQLParser.KW_UNDER - 128)) | (1 << (FlinkSQLParser.KW_UNLOAD - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSQLParser.KW_USAGE - 160)) | (1 << (FlinkSQLParser.KW_USE - 160)) | (1 << (FlinkSQLParser.KW_UTF16 - 160)) | (1 << (FlinkSQLParser.KW_UTF32 - 160)) | (1 << (FlinkSQLParser.KW_UTF8 - 160)) | (1 << (FlinkSQLParser.KW_VERSION - 160)) | (1 << (FlinkSQLParser.KW_VIEW - 160)) | (1 << (FlinkSQLParser.KW_VIEWS - 160)) | (1 << (FlinkSQLParser.KW_VIRTUAL - 160)) | (1 << (FlinkSQLParser.KW_WATERMARK - 160)) | (1 << (FlinkSQLParser.KW_WATERMARKS - 160)) | (1 << (FlinkSQLParser.KW_WEEK - 160)) | (1 << (FlinkSQLParser.KW_WORK - 160)) | (1 << (FlinkSQLParser.KW_WRAPPER - 160)) | (1 << (FlinkSQLParser.KW_YEARS - 160)) | (1 << (FlinkSQLParser.KW_ZONE - 160)))) !== 0) || ((((_la - 408)) & ~0x1F) === 0 && ((1 << (_la - 408)) & ((1 << (FlinkSQLParser.STRING_LITERAL - 408)) | (1 << (FlinkSQLParser.DIG_LITERAL - 408)) | (1 << (FlinkSQLParser.ID_LITERAL - 408)))) !== 0)) {
				{
				this.state = 1507;
				_localctx._name = this.errorCapturingIdentifier();
				}
			}

			this.state = 1510;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1512;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_PARTITION) {
				{
				this.state = 1511;
				this.partitionByClause();
				}
			}

			this.state = 1515;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_ORDER) {
				{
				this.state = 1514;
				this.orderByCaluse();
				}
			}

			this.state = 1518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_RANGE || _la === FlinkSQLParser.KW_ROWS) {
				{
				this.state = 1517;
				this.windowFrame();
				}
			}

			this.state = 1520;
			this.match(FlinkSQLParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public matchRecognizeClause(): MatchRecognizeClauseContext {
		let _localctx: MatchRecognizeClauseContext = new MatchRecognizeClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, FlinkSQLParser.RULE_matchRecognizeClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1522;
			this.match(FlinkSQLParser.KW_MATCH_RECOGNIZE);
			this.state = 1523;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1525;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_PARTITION) {
				{
				this.state = 1524;
				this.partitionByClause();
				}
			}

			this.state = 1528;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_ORDER) {
				{
				this.state = 1527;
				this.orderByCaluse();
				}
			}

			this.state = 1531;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_MEASURES) {
				{
				this.state = 1530;
				this.measuresClause();
				}
			}

			this.state = 1534;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_ALL || _la === FlinkSQLParser.KW_ONE) {
				{
				this.state = 1533;
				this.outputMode();
				}
			}

			this.state = 1537;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_AFTER) {
				{
				this.state = 1536;
				this.afterMatchStrategy();
				}
			}

			this.state = 1540;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_PATTERN) {
				{
				this.state = 1539;
				this.patternDefination();
				}
			}

			this.state = 1542;
			this.patternVariablesDefination();
			this.state = 1543;
			this.match(FlinkSQLParser.RR_BRACKET);
			this.state = 1548;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 173, this._ctx) ) {
			case 1:
				{
				this.state = 1545;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_AS) {
					{
					this.state = 1544;
					this.match(FlinkSQLParser.KW_AS);
					}
				}

				this.state = 1547;
				this.identifier();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderByCaluse(): OrderByCaluseContext {
		let _localctx: OrderByCaluseContext = new OrderByCaluseContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, FlinkSQLParser.RULE_orderByCaluse);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1550;
			this.match(FlinkSQLParser.KW_ORDER);
			this.state = 1551;
			this.match(FlinkSQLParser.KW_BY);
			this.state = 1552;
			this.orderItemDefition();
			this.state = 1557;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1553;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1554;
					this.orderItemDefition();
					}
					}
				}
				this.state = 1559;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderItemDefition(): OrderItemDefitionContext {
		let _localctx: OrderItemDefitionContext = new OrderItemDefitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, FlinkSQLParser.RULE_orderItemDefition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1560;
			this.expression();
			this.state = 1562;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 175, this._ctx) ) {
			case 1:
				{
				this.state = 1561;
				_localctx._ordering = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSQLParser.KW_ASC || _la === FlinkSQLParser.KW_DESC)) {
					_localctx._ordering = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
			this.state = 1566;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 176, this._ctx) ) {
			case 1:
				{
				this.state = 1564;
				this.match(FlinkSQLParser.KW_NULLS);
				this.state = 1565;
				_localctx._nullOrder = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSQLParser.KW_FIRST || _la === FlinkSQLParser.KW_LAST)) {
					_localctx._nullOrder = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public limitClause(): LimitClauseContext {
		let _localctx: LimitClauseContext = new LimitClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, FlinkSQLParser.RULE_limitClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1568;
			this.match(FlinkSQLParser.KW_LIMIT);
			this.state = 1571;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_ALL:
				{
				this.state = 1569;
				this.match(FlinkSQLParser.KW_ALL);
				}
				break;
			case FlinkSQLParser.KW_ADD:
			case FlinkSQLParser.KW_ADMIN:
			case FlinkSQLParser.KW_AFTER:
			case FlinkSQLParser.KW_ANALYZE:
			case FlinkSQLParser.KW_ASC:
			case FlinkSQLParser.KW_BEFORE:
			case FlinkSQLParser.KW_BYTES:
			case FlinkSQLParser.KW_CASCADE:
			case FlinkSQLParser.KW_CATALOG:
			case FlinkSQLParser.KW_CATALOGS:
			case FlinkSQLParser.KW_CENTURY:
			case FlinkSQLParser.KW_CHAIN:
			case FlinkSQLParser.KW_CHANGELOG_MODE:
			case FlinkSQLParser.KW_CHARACTERS:
			case FlinkSQLParser.KW_COMMENT:
			case FlinkSQLParser.KW_COMPACT:
			case FlinkSQLParser.KW_COLUMNS:
			case FlinkSQLParser.KW_CONSTRAINTS:
			case FlinkSQLParser.KW_CONSTRUCTOR:
			case FlinkSQLParser.KW_CUMULATE:
			case FlinkSQLParser.KW_DATA:
			case FlinkSQLParser.KW_DATABASE:
			case FlinkSQLParser.KW_DATABASES:
			case FlinkSQLParser.KW_DAYS:
			case FlinkSQLParser.KW_DECADE:
			case FlinkSQLParser.KW_DEFINED:
			case FlinkSQLParser.KW_DESC:
			case FlinkSQLParser.KW_DESCRIPTOR:
			case FlinkSQLParser.KW_DIV:
			case FlinkSQLParser.KW_ENCODING:
			case FlinkSQLParser.KW_ENFORCED:
			case FlinkSQLParser.KW_ENGINE:
			case FlinkSQLParser.KW_ERROR:
			case FlinkSQLParser.KW_ESTIMATED_COST:
			case FlinkSQLParser.KW_EXCEPTION:
			case FlinkSQLParser.KW_EXCLUDE:
			case FlinkSQLParser.KW_EXCLUDING:
			case FlinkSQLParser.KW_EXTENDED:
			case FlinkSQLParser.KW_FILE:
			case FlinkSQLParser.KW_FINAL:
			case FlinkSQLParser.KW_FIRST:
			case FlinkSQLParser.KW_FOLLOWING:
			case FlinkSQLParser.KW_FORMAT:
			case FlinkSQLParser.KW_FORTRAN:
			case FlinkSQLParser.KW_FOUND:
			case FlinkSQLParser.KW_FRAC_SECOND:
			case FlinkSQLParser.KW_FUNCTIONS:
			case FlinkSQLParser.KW_GENERAL:
			case FlinkSQLParser.KW_GENERATED:
			case FlinkSQLParser.KW_GO:
			case FlinkSQLParser.KW_GOTO:
			case FlinkSQLParser.KW_GRANTED:
			case FlinkSQLParser.KW_HOP:
			case FlinkSQLParser.KW_HOURS:
			case FlinkSQLParser.KW_IF:
			case FlinkSQLParser.KW_IGNORE:
			case FlinkSQLParser.KW_INCREMENT:
			case FlinkSQLParser.KW_INPUT:
			case FlinkSQLParser.KW_INVOKER:
			case FlinkSQLParser.KW_JAR:
			case FlinkSQLParser.KW_JARS:
			case FlinkSQLParser.KW_JAVA:
			case FlinkSQLParser.KW_JSON:
			case FlinkSQLParser.KW_JSON_EXECUTION_PLAN:
			case FlinkSQLParser.KW_KEY:
			case FlinkSQLParser.KW_KEY_MEMBER:
			case FlinkSQLParser.KW_KEY_TYPE:
			case FlinkSQLParser.KW_LABEL:
			case FlinkSQLParser.KW_LAST:
			case FlinkSQLParser.KW_LENGTH:
			case FlinkSQLParser.KW_LEVEL:
			case FlinkSQLParser.KW_LOAD:
			case FlinkSQLParser.KW_MAP:
			case FlinkSQLParser.KW_MICROSECOND:
			case FlinkSQLParser.KW_MILLENNIUM:
			case FlinkSQLParser.KW_MILLISECOND:
			case FlinkSQLParser.KW_MINUTES:
			case FlinkSQLParser.KW_MINVALUE:
			case FlinkSQLParser.KW_MODIFY:
			case FlinkSQLParser.KW_MODULES:
			case FlinkSQLParser.KW_MONTHS:
			case FlinkSQLParser.KW_NANOSECOND:
			case FlinkSQLParser.KW_NULLS:
			case FlinkSQLParser.KW_NUMBER:
			case FlinkSQLParser.KW_OPTION:
			case FlinkSQLParser.KW_OPTIONS:
			case FlinkSQLParser.KW_ORDERING:
			case FlinkSQLParser.KW_OUTPUT:
			case FlinkSQLParser.KW_OVERWRITE:
			case FlinkSQLParser.KW_OVERWRITING:
			case FlinkSQLParser.KW_PARTITIONED:
			case FlinkSQLParser.KW_PARTITIONS:
			case FlinkSQLParser.KW_PASSING:
			case FlinkSQLParser.KW_PAST:
			case FlinkSQLParser.KW_PATH:
			case FlinkSQLParser.KW_PLACING:
			case FlinkSQLParser.KW_PLAN:
			case FlinkSQLParser.KW_PRECEDING:
			case FlinkSQLParser.KW_PRESERVE:
			case FlinkSQLParser.KW_PRIOR:
			case FlinkSQLParser.KW_PRIVILEGES:
			case FlinkSQLParser.KW_PUBLIC:
			case FlinkSQLParser.KW_PYTHON:
			case FlinkSQLParser.KW_PYTHON_FILES:
			case FlinkSQLParser.KW_PYTHON_REQUIREMENTS:
			case FlinkSQLParser.KW_PYTHON_DEPENDENCIES:
			case FlinkSQLParser.KW_PYTHON_JAR:
			case FlinkSQLParser.KW_PYTHON_ARCHIVES:
			case FlinkSQLParser.KW_PYTHON_PARAMETER:
			case FlinkSQLParser.KW_QUARTER:
			case FlinkSQLParser.KW_RAW:
			case FlinkSQLParser.KW_READ:
			case FlinkSQLParser.KW_RELATIVE:
			case FlinkSQLParser.KW_REMOVE:
			case FlinkSQLParser.KW_RENAME:
			case FlinkSQLParser.KW_REPLACE:
			case FlinkSQLParser.KW_RESPECT:
			case FlinkSQLParser.KW_RESTART:
			case FlinkSQLParser.KW_RESTRICT:
			case FlinkSQLParser.KW_ROLE:
			case FlinkSQLParser.KW_ROW_COUNT:
			case FlinkSQLParser.KW_SCALA:
			case FlinkSQLParser.KW_SCALAR:
			case FlinkSQLParser.KW_SCALE:
			case FlinkSQLParser.KW_SCHEMA:
			case FlinkSQLParser.KW_SECONDS:
			case FlinkSQLParser.KW_SECTION:
			case FlinkSQLParser.KW_SECURITY:
			case FlinkSQLParser.KW_SELF:
			case FlinkSQLParser.KW_SERVER:
			case FlinkSQLParser.KW_SERVER_NAME:
			case FlinkSQLParser.KW_SESSION:
			case FlinkSQLParser.KW_SETS:
			case FlinkSQLParser.KW_SIMPLE:
			case FlinkSQLParser.KW_SIZE:
			case FlinkSQLParser.KW_SLIDE:
			case FlinkSQLParser.KW_SOURCE:
			case FlinkSQLParser.KW_SPACE:
			case FlinkSQLParser.KW_STATE:
			case FlinkSQLParser.KW_STATEMENT:
			case FlinkSQLParser.KW_STEP:
			case FlinkSQLParser.KW_STRING:
			case FlinkSQLParser.KW_STRUCTURE:
			case FlinkSQLParser.KW_STYLE:
			case FlinkSQLParser.KW_TABLES:
			case FlinkSQLParser.KW_TEMPORARY:
			case FlinkSQLParser.KW_TIMECOL:
			case FlinkSQLParser.KW_TIMESTAMP_LTZ:
			case FlinkSQLParser.KW_TIMESTAMPADD:
			case FlinkSQLParser.KW_TIMESTAMPDIFF:
			case FlinkSQLParser.KW_TRANSFORM:
			case FlinkSQLParser.KW_TUMBLE:
			case FlinkSQLParser.KW_TYPE:
			case FlinkSQLParser.KW_UNDER:
			case FlinkSQLParser.KW_UNLOAD:
			case FlinkSQLParser.KW_USAGE:
			case FlinkSQLParser.KW_USE:
			case FlinkSQLParser.KW_UTF16:
			case FlinkSQLParser.KW_UTF32:
			case FlinkSQLParser.KW_UTF8:
			case FlinkSQLParser.KW_VERSION:
			case FlinkSQLParser.KW_VIEW:
			case FlinkSQLParser.KW_VIEWS:
			case FlinkSQLParser.KW_VIRTUAL:
			case FlinkSQLParser.KW_WATERMARK:
			case FlinkSQLParser.KW_WATERMARKS:
			case FlinkSQLParser.KW_WEEK:
			case FlinkSQLParser.KW_WORK:
			case FlinkSQLParser.KW_WRAPPER:
			case FlinkSQLParser.KW_YEARS:
			case FlinkSQLParser.KW_ZONE:
			case FlinkSQLParser.KW_ABS:
			case FlinkSQLParser.KW_ARRAY:
			case FlinkSQLParser.KW_AVG:
			case FlinkSQLParser.KW_CASE:
			case FlinkSQLParser.KW_CAST:
			case FlinkSQLParser.KW_CEIL:
			case FlinkSQLParser.KW_COALESCE:
			case FlinkSQLParser.KW_COLLECT:
			case FlinkSQLParser.KW_COUNT:
			case FlinkSQLParser.KW_DATE:
			case FlinkSQLParser.KW_DAY:
			case FlinkSQLParser.KW_EXISTS:
			case FlinkSQLParser.KW_FALSE:
			case FlinkSQLParser.KW_GROUPING:
			case FlinkSQLParser.KW_HOUR:
			case FlinkSQLParser.KW_INTERVAL:
			case FlinkSQLParser.KW_LAG:
			case FlinkSQLParser.KW_LEFT:
			case FlinkSQLParser.KW_MINUTE:
			case FlinkSQLParser.KW_MONTH:
			case FlinkSQLParser.KW_NOT:
			case FlinkSQLParser.KW_NULL:
			case FlinkSQLParser.KW_OVERLAY:
			case FlinkSQLParser.KW_POSITION:
			case FlinkSQLParser.KW_POWER:
			case FlinkSQLParser.KW_RANK:
			case FlinkSQLParser.KW_RIGHT:
			case FlinkSQLParser.KW_SECOND:
			case FlinkSQLParser.KW_SUBSTRING:
			case FlinkSQLParser.KW_SUM:
			case FlinkSQLParser.KW_TIME:
			case FlinkSQLParser.KW_TIMESTAMP:
			case FlinkSQLParser.KW_TIMESTAMP_3:
			case FlinkSQLParser.KW_TIMESTAMP_6:
			case FlinkSQLParser.KW_TIMESTAMP_9:
			case FlinkSQLParser.KW_TRUE:
			case FlinkSQLParser.KW_TRUNCATE:
			case FlinkSQLParser.KW_UPPER:
			case FlinkSQLParser.KW_YEAR:
			case FlinkSQLParser.BIT_NOT_OP:
			case FlinkSQLParser.LR_BRACKET:
			case FlinkSQLParser.ASTERISK_SIGN:
			case FlinkSQLParser.HYPNEN_SIGN:
			case FlinkSQLParser.ADD_SIGN:
			case FlinkSQLParser.STRING_LITERAL:
			case FlinkSQLParser.DIG_LITERAL:
			case FlinkSQLParser.REAL_LITERAL:
			case FlinkSQLParser.BIT_STRING:
			case FlinkSQLParser.ID_LITERAL:
				{
				this.state = 1570;
				_localctx._limit = this.expression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partitionByClause(): PartitionByClauseContext {
		let _localctx: PartitionByClauseContext = new PartitionByClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, FlinkSQLParser.RULE_partitionByClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1573;
			this.match(FlinkSQLParser.KW_PARTITION);
			this.state = 1574;
			this.match(FlinkSQLParser.KW_BY);
			this.state = 1575;
			this.expression();
			this.state = 1580;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1576;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1577;
				this.expression();
				}
				}
				this.state = 1582;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quantifiers(): QuantifiersContext {
		let _localctx: QuantifiersContext = new QuantifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, FlinkSQLParser.RULE_quantifiers);
		try {
			this.state = 1599;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 179, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 1583;
				this.match(FlinkSQLParser.ASTERISK_SIGN);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 1584;
				this.match(FlinkSQLParser.ADD_SIGN);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 1585;
				this.match(FlinkSQLParser.QUESTION_MARK_SIGN);
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				{
				this.state = 1586;
				this.match(FlinkSQLParser.LB_BRACKET);
				this.state = 1587;
				this.match(FlinkSQLParser.DIG_LITERAL);
				this.state = 1588;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1589;
				this.match(FlinkSQLParser.DIG_LITERAL);
				this.state = 1590;
				this.match(FlinkSQLParser.RB_BRACKET);
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				{
				this.state = 1591;
				this.match(FlinkSQLParser.LB_BRACKET);
				this.state = 1592;
				this.match(FlinkSQLParser.DIG_LITERAL);
				this.state = 1593;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1594;
				this.match(FlinkSQLParser.RB_BRACKET);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				{
				this.state = 1595;
				this.match(FlinkSQLParser.LB_BRACKET);
				this.state = 1596;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1597;
				this.match(FlinkSQLParser.DIG_LITERAL);
				this.state = 1598;
				this.match(FlinkSQLParser.RB_BRACKET);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public measuresClause(): MeasuresClauseContext {
		let _localctx: MeasuresClauseContext = new MeasuresClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, FlinkSQLParser.RULE_measuresClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1601;
			this.match(FlinkSQLParser.KW_MEASURES);
			this.state = 1602;
			this.projectItemDefinition();
			this.state = 1607;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1603;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1604;
				this.projectItemDefinition();
				}
				}
				this.state = 1609;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public patternDefination(): PatternDefinationContext {
		let _localctx: PatternDefinationContext = new PatternDefinationContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, FlinkSQLParser.RULE_patternDefination);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1610;
			this.match(FlinkSQLParser.KW_PATTERN);
			this.state = 1611;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1613;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1612;
				this.patternVariable();
				}
				}
				this.state = 1615;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FlinkSQLParser.DIG_LITERAL || _la === FlinkSQLParser.ID_LITERAL);
			this.state = 1617;
			this.match(FlinkSQLParser.RR_BRACKET);
			this.state = 1619;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_WITHIN) {
				{
				this.state = 1618;
				this.withinClause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public patternVariable(): PatternVariableContext {
		let _localctx: PatternVariableContext = new PatternVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, FlinkSQLParser.RULE_patternVariable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1621;
			this.unquotedIdentifier();
			this.state = 1623;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 389)) & ~0x1F) === 0 && ((1 << (_la - 389)) & ((1 << (FlinkSQLParser.LB_BRACKET - 389)) | (1 << (FlinkSQLParser.ASTERISK_SIGN - 389)) | (1 << (FlinkSQLParser.ADD_SIGN - 389)) | (1 << (FlinkSQLParser.QUESTION_MARK_SIGN - 389)))) !== 0)) {
				{
				this.state = 1622;
				this.quantifiers();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public outputMode(): OutputModeContext {
		let _localctx: OutputModeContext = new OutputModeContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, FlinkSQLParser.RULE_outputMode);
		try {
			this.state = 1633;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_ALL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1625;
				this.match(FlinkSQLParser.KW_ALL);
				this.state = 1626;
				this.match(FlinkSQLParser.KW_ROWS);
				this.state = 1627;
				this.match(FlinkSQLParser.KW_PER);
				this.state = 1628;
				this.match(FlinkSQLParser.KW_MATCH);
				}
				break;
			case FlinkSQLParser.KW_ONE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1629;
				this.match(FlinkSQLParser.KW_ONE);
				this.state = 1630;
				this.match(FlinkSQLParser.KW_ROW);
				this.state = 1631;
				this.match(FlinkSQLParser.KW_PER);
				this.state = 1632;
				this.match(FlinkSQLParser.KW_MATCH);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public afterMatchStrategy(): AfterMatchStrategyContext {
		let _localctx: AfterMatchStrategyContext = new AfterMatchStrategyContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, FlinkSQLParser.RULE_afterMatchStrategy);
		try {
			this.state = 1659;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 185, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1635;
				this.match(FlinkSQLParser.KW_AFTER);
				this.state = 1636;
				this.match(FlinkSQLParser.KW_MATCH);
				this.state = 1637;
				this.match(FlinkSQLParser.KW_SKIP);
				this.state = 1638;
				this.match(FlinkSQLParser.KW_PAST);
				this.state = 1639;
				this.match(FlinkSQLParser.KW_LAST);
				this.state = 1640;
				this.match(FlinkSQLParser.KW_ROW);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1641;
				this.match(FlinkSQLParser.KW_AFTER);
				this.state = 1642;
				this.match(FlinkSQLParser.KW_MATCH);
				this.state = 1643;
				this.match(FlinkSQLParser.KW_SKIP);
				this.state = 1644;
				this.match(FlinkSQLParser.KW_TO);
				this.state = 1645;
				this.match(FlinkSQLParser.KW_NEXT);
				this.state = 1646;
				this.match(FlinkSQLParser.KW_ROW);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1647;
				this.match(FlinkSQLParser.KW_AFTER);
				this.state = 1648;
				this.match(FlinkSQLParser.KW_MATCH);
				this.state = 1649;
				this.match(FlinkSQLParser.KW_SKIP);
				this.state = 1650;
				this.match(FlinkSQLParser.KW_TO);
				this.state = 1651;
				this.match(FlinkSQLParser.KW_LAST);
				this.state = 1652;
				this.unquotedIdentifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1653;
				this.match(FlinkSQLParser.KW_AFTER);
				this.state = 1654;
				this.match(FlinkSQLParser.KW_MATCH);
				this.state = 1655;
				this.match(FlinkSQLParser.KW_SKIP);
				this.state = 1656;
				this.match(FlinkSQLParser.KW_TO);
				this.state = 1657;
				this.match(FlinkSQLParser.KW_FIRST);
				this.state = 1658;
				this.unquotedIdentifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public patternVariablesDefination(): PatternVariablesDefinationContext {
		let _localctx: PatternVariablesDefinationContext = new PatternVariablesDefinationContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, FlinkSQLParser.RULE_patternVariablesDefination);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1661;
			this.match(FlinkSQLParser.KW_DEFINE);
			this.state = 1662;
			this.projectItemDefinition();
			this.state = 1667;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1663;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1664;
				this.projectItemDefinition();
				}
				}
				this.state = 1669;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windowFrame(): WindowFrameContext {
		let _localctx: WindowFrameContext = new WindowFrameContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, FlinkSQLParser.RULE_windowFrame);
		try {
			this.state = 1679;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_RANGE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1670;
				this.match(FlinkSQLParser.KW_RANGE);
				this.state = 1671;
				this.match(FlinkSQLParser.KW_BETWEEN);
				this.state = 1672;
				this.timeIntervalExpression();
				this.state = 1673;
				this.frameBound();
				}
				break;
			case FlinkSQLParser.KW_ROWS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1675;
				this.match(FlinkSQLParser.KW_ROWS);
				this.state = 1676;
				this.match(FlinkSQLParser.KW_BETWEEN);
				this.state = 1677;
				this.match(FlinkSQLParser.DIG_LITERAL);
				this.state = 1678;
				this.frameBound();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public frameBound(): FrameBoundContext {
		let _localctx: FrameBoundContext = new FrameBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, FlinkSQLParser.RULE_frameBound);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1681;
			this.match(FlinkSQLParser.KW_PRECEDING);
			this.state = 1682;
			this.match(FlinkSQLParser.KW_AND);
			this.state = 1683;
			this.match(FlinkSQLParser.KW_CURRENT);
			this.state = 1684;
			this.match(FlinkSQLParser.KW_ROW);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public withinClause(): WithinClauseContext {
		let _localctx: WithinClauseContext = new WithinClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, FlinkSQLParser.RULE_withinClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1686;
			this.match(FlinkSQLParser.KW_WITHIN);
			this.state = 1687;
			this.timeIntervalExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, FlinkSQLParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1689;
			this.booleanExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public booleanExpression(): BooleanExpressionContext;
	public booleanExpression(_p: number): BooleanExpressionContext;
	// @RuleVersion(0)
	public booleanExpression(_p?: number): BooleanExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BooleanExpressionContext = new BooleanExpressionContext(this._ctx, _parentState);
		let _prevctx: BooleanExpressionContext = _localctx;
		let _startState: number = 258;
		this.enterRecursionRule(_localctx, 258, FlinkSQLParser.RULE_booleanExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1703;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 189, this._ctx) ) {
			case 1:
				{
				_localctx = new LogicalNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1692;
				this.match(FlinkSQLParser.KW_NOT);
				this.state = 1693;
				this.booleanExpression(6);
				}
				break;

			case 2:
				{
				_localctx = new ExistsContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1694;
				this.match(FlinkSQLParser.KW_EXISTS);
				this.state = 1695;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1696;
				this.queryStatement(0);
				this.state = 1697;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 3:
				{
				_localctx = new PredicatedContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1699;
				this.valueExpression(0);
				this.state = 1701;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 188, this._ctx) ) {
				case 1:
					{
					this.state = 1700;
					this.predicate();
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1719;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1717;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 191, this._ctx) ) {
					case 1:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_booleanExpression);
						this.state = 1705;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1706;
						(_localctx as LogicalBinaryContext)._operator = this.match(FlinkSQLParser.KW_AND);
						this.state = 1707;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(4);
						}
						break;

					case 2:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_booleanExpression);
						this.state = 1708;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1709;
						(_localctx as LogicalBinaryContext)._operator = this.match(FlinkSQLParser.KW_OR);
						this.state = 1710;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;

					case 3:
						{
						_localctx = new LogicalNestedContext(new BooleanExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_booleanExpression);
						this.state = 1711;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1712;
						this.match(FlinkSQLParser.KW_IS);
						this.state = 1714;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FlinkSQLParser.KW_NOT) {
							{
							this.state = 1713;
							this.match(FlinkSQLParser.KW_NOT);
							}
						}

						this.state = 1716;
						(_localctx as LogicalNestedContext)._kind = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === FlinkSQLParser.KW_FALSE || _la === FlinkSQLParser.KW_NULL || _la === FlinkSQLParser.KW_TRUE || _la === FlinkSQLParser.KW_UNKNOWN)) {
							(_localctx as LogicalNestedContext)._kind = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;
					}
					}
				}
				this.state = 1721;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predicate(): PredicateContext {
		let _localctx: PredicateContext = new PredicateContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, FlinkSQLParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 1789;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 203, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1723;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 1722;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 1725;
				_localctx._kind = this.match(FlinkSQLParser.KW_BETWEEN);
				this.state = 1727;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_ASYMMETRIC || _la === FlinkSQLParser.KW_SYMMETRIC) {
					{
					this.state = 1726;
					_la = this._input.LA(1);
					if (!(_la === FlinkSQLParser.KW_ASYMMETRIC || _la === FlinkSQLParser.KW_SYMMETRIC)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 1729;
				_localctx._lower = this.valueExpression(0);
				this.state = 1730;
				this.match(FlinkSQLParser.KW_AND);
				this.state = 1731;
				_localctx._upper = this.valueExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1734;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 1733;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 1736;
				_localctx._kind = this.match(FlinkSQLParser.KW_IN);
				this.state = 1737;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1738;
				this.expression();
				this.state = 1743;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1739;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1740;
					this.expression();
					}
					}
					this.state = 1745;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1746;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1749;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 1748;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 1751;
				_localctx._kind = this.match(FlinkSQLParser.KW_IN);
				this.state = 1752;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1753;
				this.queryStatement(0);
				this.state = 1754;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1756;
				_localctx._kind = this.match(FlinkSQLParser.KW_EXISTS);
				this.state = 1757;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1758;
				this.queryStatement(0);
				this.state = 1759;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1762;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 1761;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 1764;
				_localctx._kind = this.match(FlinkSQLParser.KW_RLIKE);
				this.state = 1765;
				_localctx._pattern = this.valueExpression(0);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1766;
				this.likePredicate();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1767;
				this.match(FlinkSQLParser.KW_IS);
				this.state = 1769;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 1768;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 1771;
				_localctx._kind = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSQLParser.KW_FALSE || _la === FlinkSQLParser.KW_NULL || _la === FlinkSQLParser.KW_TRUE || _la === FlinkSQLParser.KW_UNKNOWN)) {
					_localctx._kind = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1772;
				this.match(FlinkSQLParser.KW_IS);
				this.state = 1774;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 1773;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 1776;
				_localctx._kind = this.match(FlinkSQLParser.KW_DISTINCT);
				this.state = 1777;
				this.match(FlinkSQLParser.KW_FROM);
				this.state = 1778;
				_localctx._right = this.valueExpression(0);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1780;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 1779;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 1782;
				_localctx._kind = this.match(FlinkSQLParser.KW_SIMILAR);
				this.state = 1783;
				this.match(FlinkSQLParser.KW_TO);
				this.state = 1784;
				_localctx._right = this.valueExpression(0);
				this.state = 1787;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 202, this._ctx) ) {
				case 1:
					{
					this.state = 1785;
					this.match(FlinkSQLParser.KW_ESCAPE);
					this.state = 1786;
					this.stringLiteral();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public likePredicate(): LikePredicateContext {
		let _localctx: LikePredicateContext = new LikePredicateContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, FlinkSQLParser.RULE_likePredicate);
		let _la: number;
		try {
			this.state = 1820;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 209, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1792;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 1791;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 1794;
				_localctx._kind = this.match(FlinkSQLParser.KW_LIKE);
				this.state = 1795;
				_localctx._quantifier = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSQLParser.KW_ALL || _la === FlinkSQLParser.KW_ANY)) {
					_localctx._quantifier = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1809;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 206, this._ctx) ) {
				case 1:
					{
					this.state = 1796;
					this.match(FlinkSQLParser.LR_BRACKET);
					this.state = 1797;
					this.match(FlinkSQLParser.RR_BRACKET);
					}
					break;

				case 2:
					{
					this.state = 1798;
					this.match(FlinkSQLParser.LR_BRACKET);
					this.state = 1799;
					this.expression();
					this.state = 1804;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === FlinkSQLParser.COMMA) {
						{
						{
						this.state = 1800;
						this.match(FlinkSQLParser.COMMA);
						this.state = 1801;
						this.expression();
						}
						}
						this.state = 1806;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1807;
					this.match(FlinkSQLParser.RR_BRACKET);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1812;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 1811;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 1814;
				_localctx._kind = this.match(FlinkSQLParser.KW_LIKE);
				this.state = 1815;
				_localctx._pattern = this.valueExpression(0);
				this.state = 1818;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 208, this._ctx) ) {
				case 1:
					{
					this.state = 1816;
					this.match(FlinkSQLParser.KW_ESCAPE);
					this.state = 1817;
					this.stringLiteral();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public valueExpression(): ValueExpressionContext;
	public valueExpression(_p: number): ValueExpressionContext;
	// @RuleVersion(0)
	public valueExpression(_p?: number): ValueExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ValueExpressionContext = new ValueExpressionContext(this._ctx, _parentState);
		let _prevctx: ValueExpressionContext = _localctx;
		let _startState: number = 264;
		this.enterRecursionRule(_localctx, 264, FlinkSQLParser.RULE_valueExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1826;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 210, this._ctx) ) {
			case 1:
				{
				_localctx = new ValueExpressionDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1823;
				this.primaryExpression(0);
				}
				break;

			case 2:
				{
				_localctx = new ArithmeticUnaryContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1824;
				(_localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 380)) & ~0x1F) === 0 && ((1 << (_la - 380)) & ((1 << (FlinkSQLParser.BIT_NOT_OP - 380)) | (1 << (FlinkSQLParser.HYPNEN_SIGN - 380)) | (1 << (FlinkSQLParser.ADD_SIGN - 380)))) !== 0))) {
					(_localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1825;
				this.valueExpression(8);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1851;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 212, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1849;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 211, this._ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_valueExpression);
						this.state = 1828;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 1829;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === FlinkSQLParser.KW_DIV || ((((_la - 398)) & ~0x1F) === 0 && ((1 << (_la - 398)) & ((1 << (FlinkSQLParser.ASTERISK_SIGN - 398)) | (1 << (FlinkSQLParser.PENCENT_SIGN - 398)) | (1 << (FlinkSQLParser.SLASH_SIGN - 398)))) !== 0))) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1830;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(8);
						}
						break;

					case 2:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_valueExpression);
						this.state = 1831;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1832;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 400)) & ~0x1F) === 0 && ((1 << (_la - 400)) & ((1 << (FlinkSQLParser.HYPNEN_SIGN - 400)) | (1 << (FlinkSQLParser.ADD_SIGN - 400)) | (1 << (FlinkSQLParser.DOUBLE_VERTICAL_SIGN - 400)))) !== 0))) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1833;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(7);
						}
						break;

					case 3:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_valueExpression);
						this.state = 1834;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1835;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSQLParser.BIT_AND_OP);
						this.state = 1836;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(6);
						}
						break;

					case 4:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_valueExpression);
						this.state = 1837;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1838;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSQLParser.BIT_XOR_OP);
						this.state = 1839;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(5);
						}
						break;

					case 5:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_valueExpression);
						this.state = 1840;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1841;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSQLParser.BIT_OR_OP);
						this.state = 1842;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;

					case 6:
						{
						_localctx = new ComparisonContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ComparisonContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_valueExpression);
						this.state = 1843;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1844;
						this.comparisonOperator();
						this.state = 1845;
						(_localctx as ComparisonContext)._right = this.valueExpression(3);
						}
						break;

					case 7:
						{
						_localctx = new ArithmeticBinaryAlternateContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryAlternateContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_valueExpression);
						this.state = 1847;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1848;
						(_localctx as ArithmeticBinaryAlternateContext)._right = this.match(FlinkSQLParser.SLASH_TEXT);
						}
						break;
					}
					}
				}
				this.state = 1853;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 212, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public primaryExpression(): PrimaryExpressionContext;
	public primaryExpression(_p: number): PrimaryExpressionContext;
	// @RuleVersion(0)
	public primaryExpression(_p?: number): PrimaryExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, _parentState);
		let _prevctx: PrimaryExpressionContext = _localctx;
		let _startState: number = 266;
		this.enterRecursionRule(_localctx, 266, FlinkSQLParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1945;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 222, this._ctx) ) {
			case 1:
				{
				_localctx = new SearchedCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1855;
				this.match(FlinkSQLParser.KW_CASE);
				this.state = 1857;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1856;
					this.whenClause();
					}
					}
					this.state = 1859;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === FlinkSQLParser.KW_WHEN);
				this.state = 1863;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_ELSE) {
					{
					this.state = 1861;
					this.match(FlinkSQLParser.KW_ELSE);
					this.state = 1862;
					(_localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1865;
				this.match(FlinkSQLParser.KW_END);
				}
				break;

			case 2:
				{
				_localctx = new SimpleCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1867;
				this.match(FlinkSQLParser.KW_CASE);
				this.state = 1868;
				(_localctx as SimpleCaseContext)._value = this.expression();
				this.state = 1870;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1869;
					this.whenClause();
					}
					}
					this.state = 1872;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === FlinkSQLParser.KW_WHEN);
				this.state = 1876;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_ELSE) {
					{
					this.state = 1874;
					this.match(FlinkSQLParser.KW_ELSE);
					this.state = 1875;
					(_localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1878;
				this.match(FlinkSQLParser.KW_END);
				}
				break;

			case 3:
				{
				_localctx = new CastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1880;
				this.match(FlinkSQLParser.KW_CAST);
				this.state = 1881;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1882;
				this.expression();
				this.state = 1883;
				this.match(FlinkSQLParser.KW_AS);
				this.state = 1884;
				this.columnType();
				this.state = 1885;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 4:
				{
				_localctx = new FirstContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1887;
				this.match(FlinkSQLParser.KW_FIRST);
				this.state = 1888;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1889;
				this.expression();
				this.state = 1892;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_IGNORE) {
					{
					this.state = 1890;
					this.match(FlinkSQLParser.KW_IGNORE);
					this.state = 1891;
					this.match(FlinkSQLParser.KW_NULLS);
					}
				}

				this.state = 1894;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 5:
				{
				_localctx = new LastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1896;
				this.match(FlinkSQLParser.KW_LAST);
				this.state = 1897;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1898;
				this.expression();
				this.state = 1901;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_IGNORE) {
					{
					this.state = 1899;
					this.match(FlinkSQLParser.KW_IGNORE);
					this.state = 1900;
					this.match(FlinkSQLParser.KW_NULLS);
					}
				}

				this.state = 1903;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 6:
				{
				_localctx = new PositionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1905;
				this.match(FlinkSQLParser.KW_POSITION);
				this.state = 1906;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1907;
				(_localctx as PositionContext)._substr = this.valueExpression(0);
				this.state = 1908;
				this.match(FlinkSQLParser.KW_IN);
				this.state = 1909;
				(_localctx as PositionContext)._str = this.valueExpression(0);
				this.state = 1910;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 7:
				{
				_localctx = new ConstantDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1912;
				this.constant();
				}
				break;

			case 8:
				{
				_localctx = new StarContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1913;
				this.match(FlinkSQLParser.ASTERISK_SIGN);
				}
				break;

			case 9:
				{
				_localctx = new StarContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1914;
				this.uid();
				this.state = 1915;
				this.match(FlinkSQLParser.DOT);
				this.state = 1916;
				this.match(FlinkSQLParser.ASTERISK_SIGN);
				}
				break;

			case 10:
				{
				_localctx = new SubqueryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1918;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1919;
				this.queryStatement(0);
				this.state = 1920;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 11:
				{
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1922;
				this.functionName();
				this.state = 1923;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1935;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSQLParser.KW_ADD) | (1 << FlinkSQLParser.KW_ADMIN) | (1 << FlinkSQLParser.KW_AFTER) | (1 << FlinkSQLParser.KW_ANALYZE) | (1 << FlinkSQLParser.KW_ASC) | (1 << FlinkSQLParser.KW_BEFORE) | (1 << FlinkSQLParser.KW_BYTES) | (1 << FlinkSQLParser.KW_CASCADE) | (1 << FlinkSQLParser.KW_CATALOG) | (1 << FlinkSQLParser.KW_CATALOGS) | (1 << FlinkSQLParser.KW_CENTURY) | (1 << FlinkSQLParser.KW_CHAIN) | (1 << FlinkSQLParser.KW_CHANGELOG_MODE) | (1 << FlinkSQLParser.KW_CHARACTERS) | (1 << FlinkSQLParser.KW_COMMENT) | (1 << FlinkSQLParser.KW_COMPACT) | (1 << FlinkSQLParser.KW_COLUMNS) | (1 << FlinkSQLParser.KW_CONSTRAINTS) | (1 << FlinkSQLParser.KW_CONSTRUCTOR) | (1 << FlinkSQLParser.KW_CUMULATE) | (1 << FlinkSQLParser.KW_DATA) | (1 << FlinkSQLParser.KW_DATABASE) | (1 << FlinkSQLParser.KW_DATABASES) | (1 << FlinkSQLParser.KW_DAYS) | (1 << FlinkSQLParser.KW_DECADE) | (1 << FlinkSQLParser.KW_DEFINED) | (1 << FlinkSQLParser.KW_DESC) | (1 << FlinkSQLParser.KW_DESCRIPTOR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSQLParser.KW_DIV - 32)) | (1 << (FlinkSQLParser.KW_ENCODING - 32)) | (1 << (FlinkSQLParser.KW_ENFORCED - 32)) | (1 << (FlinkSQLParser.KW_ENGINE - 32)) | (1 << (FlinkSQLParser.KW_EPOCH - 32)) | (1 << (FlinkSQLParser.KW_ERROR - 32)) | (1 << (FlinkSQLParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSQLParser.KW_EXCEPTION - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDE - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDING - 32)) | (1 << (FlinkSQLParser.KW_EXTENDED - 32)) | (1 << (FlinkSQLParser.KW_FILE - 32)) | (1 << (FlinkSQLParser.KW_FINAL - 32)) | (1 << (FlinkSQLParser.KW_FIRST - 32)) | (1 << (FlinkSQLParser.KW_FOLLOWING - 32)) | (1 << (FlinkSQLParser.KW_FORMAT - 32)) | (1 << (FlinkSQLParser.KW_FORTRAN - 32)) | (1 << (FlinkSQLParser.KW_FOUND - 32)) | (1 << (FlinkSQLParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSQLParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSQLParser.KW_GENERAL - 32)) | (1 << (FlinkSQLParser.KW_GENERATED - 32)) | (1 << (FlinkSQLParser.KW_GO - 32)) | (1 << (FlinkSQLParser.KW_GOTO - 32)) | (1 << (FlinkSQLParser.KW_GRANTED - 32)) | (1 << (FlinkSQLParser.KW_HOP - 32)) | (1 << (FlinkSQLParser.KW_HOURS - 32)) | (1 << (FlinkSQLParser.KW_IF - 32)) | (1 << (FlinkSQLParser.KW_IGNORE - 32)) | (1 << (FlinkSQLParser.KW_INCREMENT - 32)) | (1 << (FlinkSQLParser.KW_INPUT - 32)) | (1 << (FlinkSQLParser.KW_INVOKER - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSQLParser.KW_JAR - 64)) | (1 << (FlinkSQLParser.KW_JARS - 64)) | (1 << (FlinkSQLParser.KW_JAVA - 64)) | (1 << (FlinkSQLParser.KW_JSON - 64)) | (1 << (FlinkSQLParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSQLParser.KW_KEY - 64)) | (1 << (FlinkSQLParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSQLParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSQLParser.KW_LABEL - 64)) | (1 << (FlinkSQLParser.KW_LAST - 64)) | (1 << (FlinkSQLParser.KW_LENGTH - 64)) | (1 << (FlinkSQLParser.KW_LEVEL - 64)) | (1 << (FlinkSQLParser.KW_LOAD - 64)) | (1 << (FlinkSQLParser.KW_MAP - 64)) | (1 << (FlinkSQLParser.KW_MICROSECOND - 64)) | (1 << (FlinkSQLParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSQLParser.KW_MILLISECOND - 64)) | (1 << (FlinkSQLParser.KW_MINUTES - 64)) | (1 << (FlinkSQLParser.KW_MINVALUE - 64)) | (1 << (FlinkSQLParser.KW_MODIFY - 64)) | (1 << (FlinkSQLParser.KW_MODULES - 64)) | (1 << (FlinkSQLParser.KW_MONTHS - 64)) | (1 << (FlinkSQLParser.KW_NANOSECOND - 64)) | (1 << (FlinkSQLParser.KW_NULLS - 64)) | (1 << (FlinkSQLParser.KW_NUMBER - 64)) | (1 << (FlinkSQLParser.KW_OPTION - 64)) | (1 << (FlinkSQLParser.KW_OPTIONS - 64)) | (1 << (FlinkSQLParser.KW_ORDERING - 64)) | (1 << (FlinkSQLParser.KW_OUTPUT - 64)) | (1 << (FlinkSQLParser.KW_OVERWRITE - 64)) | (1 << (FlinkSQLParser.KW_OVERWRITING - 64)) | (1 << (FlinkSQLParser.KW_PARTITIONED - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSQLParser.KW_PARTITIONS - 96)) | (1 << (FlinkSQLParser.KW_PASSING - 96)) | (1 << (FlinkSQLParser.KW_PAST - 96)) | (1 << (FlinkSQLParser.KW_PATH - 96)) | (1 << (FlinkSQLParser.KW_PLACING - 96)) | (1 << (FlinkSQLParser.KW_PLAN - 96)) | (1 << (FlinkSQLParser.KW_PRECEDING - 96)) | (1 << (FlinkSQLParser.KW_PRESERVE - 96)) | (1 << (FlinkSQLParser.KW_PRIOR - 96)) | (1 << (FlinkSQLParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSQLParser.KW_PUBLIC - 96)) | (1 << (FlinkSQLParser.KW_PYTHON - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSQLParser.KW_QUARTER - 96)) | (1 << (FlinkSQLParser.KW_RAW - 96)) | (1 << (FlinkSQLParser.KW_READ - 96)) | (1 << (FlinkSQLParser.KW_RELATIVE - 96)) | (1 << (FlinkSQLParser.KW_REMOVE - 96)) | (1 << (FlinkSQLParser.KW_RENAME - 96)) | (1 << (FlinkSQLParser.KW_REPLACE - 96)) | (1 << (FlinkSQLParser.KW_RESPECT - 96)) | (1 << (FlinkSQLParser.KW_RESTART - 96)) | (1 << (FlinkSQLParser.KW_RESTRICT - 96)) | (1 << (FlinkSQLParser.KW_ROLE - 96)) | (1 << (FlinkSQLParser.KW_ROW_COUNT - 96)) | (1 << (FlinkSQLParser.KW_SCALA - 96)) | (1 << (FlinkSQLParser.KW_SCALAR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSQLParser.KW_SCALE - 128)) | (1 << (FlinkSQLParser.KW_SCHEMA - 128)) | (1 << (FlinkSQLParser.KW_SECONDS - 128)) | (1 << (FlinkSQLParser.KW_SECTION - 128)) | (1 << (FlinkSQLParser.KW_SECURITY - 128)) | (1 << (FlinkSQLParser.KW_SELF - 128)) | (1 << (FlinkSQLParser.KW_SERVER - 128)) | (1 << (FlinkSQLParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSQLParser.KW_SESSION - 128)) | (1 << (FlinkSQLParser.KW_SETS - 128)) | (1 << (FlinkSQLParser.KW_SIMPLE - 128)) | (1 << (FlinkSQLParser.KW_SIZE - 128)) | (1 << (FlinkSQLParser.KW_SLIDE - 128)) | (1 << (FlinkSQLParser.KW_SOURCE - 128)) | (1 << (FlinkSQLParser.KW_SPACE - 128)) | (1 << (FlinkSQLParser.KW_STATE - 128)) | (1 << (FlinkSQLParser.KW_STATEMENT - 128)) | (1 << (FlinkSQLParser.KW_STEP - 128)) | (1 << (FlinkSQLParser.KW_STRING - 128)) | (1 << (FlinkSQLParser.KW_STRUCTURE - 128)) | (1 << (FlinkSQLParser.KW_STYLE - 128)) | (1 << (FlinkSQLParser.KW_TABLES - 128)) | (1 << (FlinkSQLParser.KW_TEMPORARY - 128)) | (1 << (FlinkSQLParser.KW_TIMECOL - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_LTZ - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPADD - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPDIFF - 128)) | (1 << (FlinkSQLParser.KW_TRANSFORM - 128)) | (1 << (FlinkSQLParser.KW_TUMBLE - 128)) | (1 << (FlinkSQLParser.KW_TYPE - 128)) | (1 << (FlinkSQLParser.KW_UNDER - 128)) | (1 << (FlinkSQLParser.KW_UNLOAD - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSQLParser.KW_USAGE - 160)) | (1 << (FlinkSQLParser.KW_USE - 160)) | (1 << (FlinkSQLParser.KW_UTF16 - 160)) | (1 << (FlinkSQLParser.KW_UTF32 - 160)) | (1 << (FlinkSQLParser.KW_UTF8 - 160)) | (1 << (FlinkSQLParser.KW_VERSION - 160)) | (1 << (FlinkSQLParser.KW_VIEW - 160)) | (1 << (FlinkSQLParser.KW_VIEWS - 160)) | (1 << (FlinkSQLParser.KW_VIRTUAL - 160)) | (1 << (FlinkSQLParser.KW_WATERMARK - 160)) | (1 << (FlinkSQLParser.KW_WATERMARKS - 160)) | (1 << (FlinkSQLParser.KW_WEEK - 160)) | (1 << (FlinkSQLParser.KW_WEEKS - 160)) | (1 << (FlinkSQLParser.KW_WORK - 160)) | (1 << (FlinkSQLParser.KW_WRAPPER - 160)) | (1 << (FlinkSQLParser.KW_YEARS - 160)) | (1 << (FlinkSQLParser.KW_ZONE - 160)) | (1 << (FlinkSQLParser.KW_ABS - 160)) | (1 << (FlinkSQLParser.KW_ALL - 160)) | (1 << (FlinkSQLParser.KW_ARRAY - 160)) | (1 << (FlinkSQLParser.KW_AVG - 160)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (FlinkSQLParser.KW_BOTH - 196)) | (1 << (FlinkSQLParser.KW_CASE - 196)) | (1 << (FlinkSQLParser.KW_CAST - 196)) | (1 << (FlinkSQLParser.KW_CEIL - 196)) | (1 << (FlinkSQLParser.KW_COALESCE - 196)) | (1 << (FlinkSQLParser.KW_COLLECT - 196)) | (1 << (FlinkSQLParser.KW_COUNT - 196)) | (1 << (FlinkSQLParser.KW_DATE - 196)) | (1 << (FlinkSQLParser.KW_DAY - 196)))) !== 0) || ((((_la - 235)) & ~0x1F) === 0 && ((1 << (_la - 235)) & ((1 << (FlinkSQLParser.KW_DISTINCT - 235)) | (1 << (FlinkSQLParser.KW_EXISTS - 235)) | (1 << (FlinkSQLParser.KW_FALSE - 235)) | (1 << (FlinkSQLParser.KW_GROUPING - 235)) | (1 << (FlinkSQLParser.KW_HOUR - 235)))) !== 0) || ((((_la - 271)) & ~0x1F) === 0 && ((1 << (_la - 271)) & ((1 << (FlinkSQLParser.KW_INTERVAL - 271)) | (1 << (FlinkSQLParser.KW_LAG - 271)) | (1 << (FlinkSQLParser.KW_LEADING - 271)) | (1 << (FlinkSQLParser.KW_LEFT - 271)) | (1 << (FlinkSQLParser.KW_MINUTE - 271)) | (1 << (FlinkSQLParser.KW_MONTH - 271)) | (1 << (FlinkSQLParser.KW_NOT - 271)) | (1 << (FlinkSQLParser.KW_NULL - 271)))) !== 0) || ((((_la - 310)) & ~0x1F) === 0 && ((1 << (_la - 310)) & ((1 << (FlinkSQLParser.KW_OVERLAY - 310)) | (1 << (FlinkSQLParser.KW_POSITION - 310)) | (1 << (FlinkSQLParser.KW_POWER - 310)) | (1 << (FlinkSQLParser.KW_RANK - 310)) | (1 << (FlinkSQLParser.KW_RIGHT - 310)) | (1 << (FlinkSQLParser.KW_SECOND - 310)) | (1 << (FlinkSQLParser.KW_SUBSTRING - 310)) | (1 << (FlinkSQLParser.KW_SUM - 310)))) !== 0) || ((((_la - 347)) & ~0x1F) === 0 && ((1 << (_la - 347)) & ((1 << (FlinkSQLParser.KW_TIME - 347)) | (1 << (FlinkSQLParser.KW_TIMESTAMP - 347)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_3 - 347)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_6 - 347)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_9 - 347)) | (1 << (FlinkSQLParser.KW_TRAILING - 347)) | (1 << (FlinkSQLParser.KW_TRUE - 347)) | (1 << (FlinkSQLParser.KW_TRUNCATE - 347)) | (1 << (FlinkSQLParser.KW_UPPER - 347)) | (1 << (FlinkSQLParser.KW_YEAR - 347)))) !== 0) || ((((_la - 380)) & ~0x1F) === 0 && ((1 << (_la - 380)) & ((1 << (FlinkSQLParser.BIT_NOT_OP - 380)) | (1 << (FlinkSQLParser.LR_BRACKET - 380)) | (1 << (FlinkSQLParser.ASTERISK_SIGN - 380)) | (1 << (FlinkSQLParser.HYPNEN_SIGN - 380)) | (1 << (FlinkSQLParser.ADD_SIGN - 380)) | (1 << (FlinkSQLParser.STRING_LITERAL - 380)) | (1 << (FlinkSQLParser.DIG_LITERAL - 380)) | (1 << (FlinkSQLParser.REAL_LITERAL - 380)) | (1 << (FlinkSQLParser.BIT_STRING - 380)))) !== 0) || _la === FlinkSQLParser.ID_LITERAL) {
					{
					this.state = 1925;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 219, this._ctx) ) {
					case 1:
						{
						this.state = 1924;
						this.setQuantifier();
						}
						break;
					}
					this.state = 1927;
					this.functionParam();
					this.state = 1932;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === FlinkSQLParser.COMMA) {
						{
						{
						this.state = 1928;
						this.match(FlinkSQLParser.COMMA);
						this.state = 1929;
						this.functionParam();
						}
						}
						this.state = 1934;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1937;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 12:
				{
				_localctx = new ColumnReferenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1939;
				this.identifier();
				}
				break;

			case 13:
				{
				_localctx = new DereferenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1940;
				this.dereferenceDefinition();
				}
				break;

			case 14:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1941;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1942;
				this.expression();
				this.state = 1943;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1954;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 223, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new SubscriptContext(new PrimaryExpressionContext(_parentctx, _parentState));
					(_localctx as SubscriptContext)._value = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_primaryExpression);
					this.state = 1947;
					if (!(this.precpred(this._ctx, 4))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
					}
					this.state = 1948;
					this.match(FlinkSQLParser.LS_BRACKET);
					this.state = 1949;
					(_localctx as SubscriptContext)._index = this.valueExpression(0);
					this.state = 1950;
					this.match(FlinkSQLParser.RS_BRACKET);
					}
					}
				}
				this.state = 1956;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 223, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionName(): FunctionNameContext {
		let _localctx: FunctionNameContext = new FunctionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, FlinkSQLParser.RULE_functionName);
		try {
			this.state = 1960;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 224, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1957;
				this.reservedKeywordsUsedAsFuncName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1958;
				this.nonReservedKeywords();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1959;
				this.uid();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionParam(): FunctionParamContext {
		let _localctx: FunctionParamContext = new FunctionParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, FlinkSQLParser.RULE_functionParam);
		try {
			this.state = 1966;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 225, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1962;
				this.reservedKeywordsUsedAsFuncParam();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1963;
				this.timeIntervalUnit();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1964;
				this.timePointUnit();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1965;
				this.expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dereferenceDefinition(): DereferenceDefinitionContext {
		let _localctx: DereferenceDefinitionContext = new DereferenceDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, FlinkSQLParser.RULE_dereferenceDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1968;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public correlationName(): CorrelationNameContext {
		let _localctx: CorrelationNameContext = new CorrelationNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, FlinkSQLParser.RULE_correlationName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1970;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, FlinkSQLParser.RULE_qualifiedName);
		try {
			this.state = 1974;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 226, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1972;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1973;
				this.dereferenceDefinition();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeIntervalExpression(): TimeIntervalExpressionContext {
		let _localctx: TimeIntervalExpressionContext = new TimeIntervalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, FlinkSQLParser.RULE_timeIntervalExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1976;
			this.match(FlinkSQLParser.KW_INTERVAL);
			this.state = 1979;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 227, this._ctx) ) {
			case 1:
				{
				this.state = 1977;
				this.errorCapturingMultiUnitsInterval();
				}
				break;

			case 2:
				{
				this.state = 1978;
				this.errorCapturingUnitToUnitInterval();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorCapturingMultiUnitsInterval(): ErrorCapturingMultiUnitsIntervalContext {
		let _localctx: ErrorCapturingMultiUnitsIntervalContext = new ErrorCapturingMultiUnitsIntervalContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, FlinkSQLParser.RULE_errorCapturingMultiUnitsInterval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1981;
			this.multiUnitsInterval();
			this.state = 1983;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 228, this._ctx) ) {
			case 1:
				{
				this.state = 1982;
				this.unitToUnitInterval();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiUnitsInterval(): MultiUnitsIntervalContext {
		let _localctx: MultiUnitsIntervalContext = new MultiUnitsIntervalContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, FlinkSQLParser.RULE_multiUnitsInterval);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1988;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1985;
					this.intervalValue();
					this.state = 1986;
					this.timeIntervalUnit();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1990;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 229, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorCapturingUnitToUnitInterval(): ErrorCapturingUnitToUnitIntervalContext {
		let _localctx: ErrorCapturingUnitToUnitIntervalContext = new ErrorCapturingUnitToUnitIntervalContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, FlinkSQLParser.RULE_errorCapturingUnitToUnitInterval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1992;
			_localctx._body = this.unitToUnitInterval();
			this.state = 1995;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 230, this._ctx) ) {
			case 1:
				{
				this.state = 1993;
				_localctx._error1 = this.multiUnitsInterval();
				}
				break;

			case 2:
				{
				this.state = 1994;
				_localctx._error2 = this.unitToUnitInterval();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unitToUnitInterval(): UnitToUnitIntervalContext {
		let _localctx: UnitToUnitIntervalContext = new UnitToUnitIntervalContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, FlinkSQLParser.RULE_unitToUnitInterval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1997;
			_localctx._value = this.intervalValue();
			this.state = 1998;
			_localctx._from = this.timeIntervalUnit();
			this.state = 1999;
			this.match(FlinkSQLParser.KW_TO);
			this.state = 2000;
			_localctx._to = this.timeIntervalUnit();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intervalValue(): IntervalValueContext {
		let _localctx: IntervalValueContext = new IntervalValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, FlinkSQLParser.RULE_intervalValue);
		let _la: number;
		try {
			this.state = 2007;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.HYPNEN_SIGN:
			case FlinkSQLParser.ADD_SIGN:
			case FlinkSQLParser.DIG_LITERAL:
			case FlinkSQLParser.REAL_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2003;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.HYPNEN_SIGN || _la === FlinkSQLParser.ADD_SIGN) {
					{
					this.state = 2002;
					_la = this._input.LA(1);
					if (!(_la === FlinkSQLParser.HYPNEN_SIGN || _la === FlinkSQLParser.ADD_SIGN)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 2005;
				_la = this._input.LA(1);
				if (!(_la === FlinkSQLParser.DIG_LITERAL || _la === FlinkSQLParser.REAL_LITERAL)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case FlinkSQLParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2006;
				this.match(FlinkSQLParser.STRING_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnAlias(): ColumnAliasContext {
		let _localctx: ColumnAliasContext = new ColumnAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, FlinkSQLParser.RULE_columnAlias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2010;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_AS) {
				{
				this.state = 2009;
				this.match(FlinkSQLParser.KW_AS);
				}
			}

			this.state = 2012;
			this.identifier();
			this.state = 2014;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.LR_BRACKET) {
				{
				this.state = 2013;
				this.identifierList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableAlias(): TableAliasContext {
		let _localctx: TableAliasContext = new TableAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, FlinkSQLParser.RULE_tableAlias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2017;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_AS) {
				{
				this.state = 2016;
				this.match(FlinkSQLParser.KW_AS);
				}
			}

			this.state = 2019;
			this.identifier();
			this.state = 2021;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 236, this._ctx) ) {
			case 1:
				{
				this.state = 2020;
				this.identifierList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		let _localctx: ErrorCapturingIdentifierContext = new ErrorCapturingIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, FlinkSQLParser.RULE_errorCapturingIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2023;
			this.identifier();
			this.state = 2024;
			this.errorCapturingIdentifierExtra();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorCapturingIdentifierExtra(): ErrorCapturingIdentifierExtraContext {
		let _localctx: ErrorCapturingIdentifierExtraContext = new ErrorCapturingIdentifierExtraContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, FlinkSQLParser.RULE_errorCapturingIdentifierExtra);
		let _la: number;
		try {
			this.state = 2033;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_MINUS:
				_localctx = new ErrorIdentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2028;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2026;
					this.match(FlinkSQLParser.KW_MINUS);
					this.state = 2027;
					this.identifier();
					}
					}
					this.state = 2030;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === FlinkSQLParser.KW_MINUS);
				}
				break;
			case FlinkSQLParser.KW_AS:
			case FlinkSQLParser.LR_BRACKET:
				_localctx = new RealIdentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, FlinkSQLParser.RULE_identifierList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2035;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 2036;
			this.identifierSeq();
			this.state = 2037;
			this.match(FlinkSQLParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierSeq(): IdentifierSeqContext {
		let _localctx: IdentifierSeqContext = new IdentifierSeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, FlinkSQLParser.RULE_identifierSeq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2039;
			this.identifier();
			this.state = 2044;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 2040;
				this.match(FlinkSQLParser.COMMA);
				this.state = 2041;
				this.identifier();
				}
				}
				this.state = 2046;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, FlinkSQLParser.RULE_identifier);
		try {
			this.state = 2050;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.DIG_LITERAL:
			case FlinkSQLParser.ID_LITERAL:
				_localctx = new UnquotedIdentifierAlternativeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2047;
				this.unquotedIdentifier();
				}
				break;
			case FlinkSQLParser.STRING_LITERAL:
				_localctx = new QuotedIdentifierAlternativeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2048;
				this.quotedIdentifier();
				}
				break;
			case FlinkSQLParser.KW_ADD:
			case FlinkSQLParser.KW_ADMIN:
			case FlinkSQLParser.KW_AFTER:
			case FlinkSQLParser.KW_ANALYZE:
			case FlinkSQLParser.KW_ASC:
			case FlinkSQLParser.KW_BEFORE:
			case FlinkSQLParser.KW_BYTES:
			case FlinkSQLParser.KW_CASCADE:
			case FlinkSQLParser.KW_CATALOG:
			case FlinkSQLParser.KW_CATALOGS:
			case FlinkSQLParser.KW_CENTURY:
			case FlinkSQLParser.KW_CHAIN:
			case FlinkSQLParser.KW_CHANGELOG_MODE:
			case FlinkSQLParser.KW_CHARACTERS:
			case FlinkSQLParser.KW_COMMENT:
			case FlinkSQLParser.KW_COMPACT:
			case FlinkSQLParser.KW_COLUMNS:
			case FlinkSQLParser.KW_CONSTRAINTS:
			case FlinkSQLParser.KW_CONSTRUCTOR:
			case FlinkSQLParser.KW_CUMULATE:
			case FlinkSQLParser.KW_DATA:
			case FlinkSQLParser.KW_DATABASE:
			case FlinkSQLParser.KW_DATABASES:
			case FlinkSQLParser.KW_DAYS:
			case FlinkSQLParser.KW_DECADE:
			case FlinkSQLParser.KW_DEFINED:
			case FlinkSQLParser.KW_DESC:
			case FlinkSQLParser.KW_DESCRIPTOR:
			case FlinkSQLParser.KW_DIV:
			case FlinkSQLParser.KW_ENCODING:
			case FlinkSQLParser.KW_ENFORCED:
			case FlinkSQLParser.KW_ENGINE:
			case FlinkSQLParser.KW_ERROR:
			case FlinkSQLParser.KW_ESTIMATED_COST:
			case FlinkSQLParser.KW_EXCEPTION:
			case FlinkSQLParser.KW_EXCLUDE:
			case FlinkSQLParser.KW_EXCLUDING:
			case FlinkSQLParser.KW_EXTENDED:
			case FlinkSQLParser.KW_FILE:
			case FlinkSQLParser.KW_FINAL:
			case FlinkSQLParser.KW_FIRST:
			case FlinkSQLParser.KW_FOLLOWING:
			case FlinkSQLParser.KW_FORMAT:
			case FlinkSQLParser.KW_FORTRAN:
			case FlinkSQLParser.KW_FOUND:
			case FlinkSQLParser.KW_FRAC_SECOND:
			case FlinkSQLParser.KW_FUNCTIONS:
			case FlinkSQLParser.KW_GENERAL:
			case FlinkSQLParser.KW_GENERATED:
			case FlinkSQLParser.KW_GO:
			case FlinkSQLParser.KW_GOTO:
			case FlinkSQLParser.KW_GRANTED:
			case FlinkSQLParser.KW_HOP:
			case FlinkSQLParser.KW_HOURS:
			case FlinkSQLParser.KW_IF:
			case FlinkSQLParser.KW_IGNORE:
			case FlinkSQLParser.KW_INCREMENT:
			case FlinkSQLParser.KW_INPUT:
			case FlinkSQLParser.KW_INVOKER:
			case FlinkSQLParser.KW_JAR:
			case FlinkSQLParser.KW_JARS:
			case FlinkSQLParser.KW_JAVA:
			case FlinkSQLParser.KW_JSON:
			case FlinkSQLParser.KW_JSON_EXECUTION_PLAN:
			case FlinkSQLParser.KW_KEY:
			case FlinkSQLParser.KW_KEY_MEMBER:
			case FlinkSQLParser.KW_KEY_TYPE:
			case FlinkSQLParser.KW_LABEL:
			case FlinkSQLParser.KW_LAST:
			case FlinkSQLParser.KW_LENGTH:
			case FlinkSQLParser.KW_LEVEL:
			case FlinkSQLParser.KW_LOAD:
			case FlinkSQLParser.KW_MAP:
			case FlinkSQLParser.KW_MICROSECOND:
			case FlinkSQLParser.KW_MILLENNIUM:
			case FlinkSQLParser.KW_MILLISECOND:
			case FlinkSQLParser.KW_MINUTES:
			case FlinkSQLParser.KW_MINVALUE:
			case FlinkSQLParser.KW_MODIFY:
			case FlinkSQLParser.KW_MODULES:
			case FlinkSQLParser.KW_MONTHS:
			case FlinkSQLParser.KW_NANOSECOND:
			case FlinkSQLParser.KW_NULLS:
			case FlinkSQLParser.KW_NUMBER:
			case FlinkSQLParser.KW_OPTION:
			case FlinkSQLParser.KW_OPTIONS:
			case FlinkSQLParser.KW_ORDERING:
			case FlinkSQLParser.KW_OUTPUT:
			case FlinkSQLParser.KW_OVERWRITE:
			case FlinkSQLParser.KW_OVERWRITING:
			case FlinkSQLParser.KW_PARTITIONED:
			case FlinkSQLParser.KW_PARTITIONS:
			case FlinkSQLParser.KW_PASSING:
			case FlinkSQLParser.KW_PAST:
			case FlinkSQLParser.KW_PATH:
			case FlinkSQLParser.KW_PLACING:
			case FlinkSQLParser.KW_PLAN:
			case FlinkSQLParser.KW_PRECEDING:
			case FlinkSQLParser.KW_PRESERVE:
			case FlinkSQLParser.KW_PRIOR:
			case FlinkSQLParser.KW_PRIVILEGES:
			case FlinkSQLParser.KW_PUBLIC:
			case FlinkSQLParser.KW_PYTHON:
			case FlinkSQLParser.KW_PYTHON_FILES:
			case FlinkSQLParser.KW_PYTHON_REQUIREMENTS:
			case FlinkSQLParser.KW_PYTHON_DEPENDENCIES:
			case FlinkSQLParser.KW_PYTHON_JAR:
			case FlinkSQLParser.KW_PYTHON_ARCHIVES:
			case FlinkSQLParser.KW_PYTHON_PARAMETER:
			case FlinkSQLParser.KW_QUARTER:
			case FlinkSQLParser.KW_RAW:
			case FlinkSQLParser.KW_READ:
			case FlinkSQLParser.KW_RELATIVE:
			case FlinkSQLParser.KW_REMOVE:
			case FlinkSQLParser.KW_RENAME:
			case FlinkSQLParser.KW_REPLACE:
			case FlinkSQLParser.KW_RESPECT:
			case FlinkSQLParser.KW_RESTART:
			case FlinkSQLParser.KW_RESTRICT:
			case FlinkSQLParser.KW_ROLE:
			case FlinkSQLParser.KW_ROW_COUNT:
			case FlinkSQLParser.KW_SCALA:
			case FlinkSQLParser.KW_SCALAR:
			case FlinkSQLParser.KW_SCALE:
			case FlinkSQLParser.KW_SCHEMA:
			case FlinkSQLParser.KW_SECONDS:
			case FlinkSQLParser.KW_SECTION:
			case FlinkSQLParser.KW_SECURITY:
			case FlinkSQLParser.KW_SELF:
			case FlinkSQLParser.KW_SERVER:
			case FlinkSQLParser.KW_SERVER_NAME:
			case FlinkSQLParser.KW_SESSION:
			case FlinkSQLParser.KW_SETS:
			case FlinkSQLParser.KW_SIMPLE:
			case FlinkSQLParser.KW_SIZE:
			case FlinkSQLParser.KW_SLIDE:
			case FlinkSQLParser.KW_SOURCE:
			case FlinkSQLParser.KW_SPACE:
			case FlinkSQLParser.KW_STATE:
			case FlinkSQLParser.KW_STATEMENT:
			case FlinkSQLParser.KW_STEP:
			case FlinkSQLParser.KW_STRING:
			case FlinkSQLParser.KW_STRUCTURE:
			case FlinkSQLParser.KW_STYLE:
			case FlinkSQLParser.KW_TABLES:
			case FlinkSQLParser.KW_TEMPORARY:
			case FlinkSQLParser.KW_TIMECOL:
			case FlinkSQLParser.KW_TIMESTAMP_LTZ:
			case FlinkSQLParser.KW_TIMESTAMPADD:
			case FlinkSQLParser.KW_TIMESTAMPDIFF:
			case FlinkSQLParser.KW_TRANSFORM:
			case FlinkSQLParser.KW_TUMBLE:
			case FlinkSQLParser.KW_TYPE:
			case FlinkSQLParser.KW_UNDER:
			case FlinkSQLParser.KW_UNLOAD:
			case FlinkSQLParser.KW_USAGE:
			case FlinkSQLParser.KW_USE:
			case FlinkSQLParser.KW_UTF16:
			case FlinkSQLParser.KW_UTF32:
			case FlinkSQLParser.KW_UTF8:
			case FlinkSQLParser.KW_VERSION:
			case FlinkSQLParser.KW_VIEW:
			case FlinkSQLParser.KW_VIEWS:
			case FlinkSQLParser.KW_VIRTUAL:
			case FlinkSQLParser.KW_WATERMARK:
			case FlinkSQLParser.KW_WATERMARKS:
			case FlinkSQLParser.KW_WEEK:
			case FlinkSQLParser.KW_WORK:
			case FlinkSQLParser.KW_WRAPPER:
			case FlinkSQLParser.KW_YEARS:
			case FlinkSQLParser.KW_ZONE:
				_localctx = new NonReservedKeywordsAlternativeContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2049;
				this.nonReservedKeywords();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unquotedIdentifier(): UnquotedIdentifierContext {
		let _localctx: UnquotedIdentifierContext = new UnquotedIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, FlinkSQLParser.RULE_unquotedIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2052;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.DIG_LITERAL || _la === FlinkSQLParser.ID_LITERAL)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quotedIdentifier(): QuotedIdentifierContext {
		let _localctx: QuotedIdentifierContext = new QuotedIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, FlinkSQLParser.RULE_quotedIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2054;
			this.match(FlinkSQLParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whenClause(): WhenClauseContext {
		let _localctx: WhenClauseContext = new WhenClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, FlinkSQLParser.RULE_whenClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2056;
			this.match(FlinkSQLParser.KW_WHEN);
			this.state = 2057;
			_localctx._condition = this.expression();
			this.state = 2058;
			this.match(FlinkSQLParser.KW_THEN);
			this.state = 2059;
			_localctx._result = this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catalogPath(): CatalogPathContext {
		let _localctx: CatalogPathContext = new CatalogPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, FlinkSQLParser.RULE_catalogPath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2061;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public databasePath(): DatabasePathContext {
		let _localctx: DatabasePathContext = new DatabasePathContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, FlinkSQLParser.RULE_databasePath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2063;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public databasePathCreate(): DatabasePathCreateContext {
		let _localctx: DatabasePathCreateContext = new DatabasePathCreateContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, FlinkSQLParser.RULE_databasePathCreate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2065;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tablePathCreate(): TablePathCreateContext {
		let _localctx: TablePathCreateContext = new TablePathCreateContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, FlinkSQLParser.RULE_tablePathCreate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2067;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tablePath(): TablePathContext {
		let _localctx: TablePathContext = new TablePathContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, FlinkSQLParser.RULE_tablePath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2069;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uid(): UidContext {
		let _localctx: UidContext = new UidContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, FlinkSQLParser.RULE_uid);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2071;
			this.identifier();
			this.state = 2076;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 241, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 2072;
					this.match(FlinkSQLParser.DOT);
					this.state = 2073;
					this.identifier();
					}
					}
				}
				this.state = 2078;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 241, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public withOption(): WithOptionContext {
		let _localctx: WithOptionContext = new WithOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, FlinkSQLParser.RULE_withOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2079;
			this.match(FlinkSQLParser.KW_WITH);
			this.state = 2080;
			this.tablePropertyList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifNotExists(): IfNotExistsContext {
		let _localctx: IfNotExistsContext = new IfNotExistsContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, FlinkSQLParser.RULE_ifNotExists);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2082;
			this.match(FlinkSQLParser.KW_IF);
			this.state = 2083;
			this.match(FlinkSQLParser.KW_NOT);
			this.state = 2084;
			this.match(FlinkSQLParser.KW_EXISTS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifExists(): IfExistsContext {
		let _localctx: IfExistsContext = new IfExistsContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, FlinkSQLParser.RULE_ifExists);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2086;
			this.match(FlinkSQLParser.KW_IF);
			this.state = 2087;
			this.match(FlinkSQLParser.KW_EXISTS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tablePropertyList(): TablePropertyListContext {
		let _localctx: TablePropertyListContext = new TablePropertyListContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, FlinkSQLParser.RULE_tablePropertyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2089;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 2090;
			this.tableProperty();
			this.state = 2095;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 2091;
				this.match(FlinkSQLParser.COMMA);
				this.state = 2092;
				this.tableProperty();
				}
				}
				this.state = 2097;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2098;
			this.match(FlinkSQLParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableProperty(): TablePropertyContext {
		let _localctx: TablePropertyContext = new TablePropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, FlinkSQLParser.RULE_tableProperty);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2100;
			_localctx._key = this.tablePropertyKey();
			this.state = 2105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_FALSE || _la === FlinkSQLParser.KW_TRUE || _la === FlinkSQLParser.EQUAL_SYMBOL || ((((_la - 408)) & ~0x1F) === 0 && ((1 << (_la - 408)) & ((1 << (FlinkSQLParser.STRING_LITERAL - 408)) | (1 << (FlinkSQLParser.DIG_LITERAL - 408)) | (1 << (FlinkSQLParser.REAL_LITERAL - 408)))) !== 0)) {
				{
				this.state = 2102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.EQUAL_SYMBOL) {
					{
					this.state = 2101;
					this.match(FlinkSQLParser.EQUAL_SYMBOL);
					}
				}

				this.state = 2104;
				_localctx._value = this.tablePropertyValue();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tablePropertyKey(): TablePropertyKeyContext {
		let _localctx: TablePropertyKeyContext = new TablePropertyKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 332, FlinkSQLParser.RULE_tablePropertyKey);
		try {
			this.state = 2110;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 245, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2107;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2108;
				this.dereferenceDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2109;
				this.match(FlinkSQLParser.STRING_LITERAL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tablePropertyValue(): TablePropertyValueContext {
		let _localctx: TablePropertyValueContext = new TablePropertyValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 334, FlinkSQLParser.RULE_tablePropertyValue);
		try {
			this.state = 2116;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.DIG_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2112;
				this.match(FlinkSQLParser.DIG_LITERAL);
				}
				break;
			case FlinkSQLParser.REAL_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2113;
				this.match(FlinkSQLParser.REAL_LITERAL);
				}
				break;
			case FlinkSQLParser.KW_FALSE:
			case FlinkSQLParser.KW_TRUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2114;
				this.booleanLiteral();
				}
				break;
			case FlinkSQLParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2115;
				this.match(FlinkSQLParser.STRING_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicalOperator(): LogicalOperatorContext {
		let _localctx: LogicalOperatorContext = new LogicalOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, FlinkSQLParser.RULE_logicalOperator);
		try {
			this.state = 2124;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_AND:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2118;
				this.match(FlinkSQLParser.KW_AND);
				}
				break;
			case FlinkSQLParser.BIT_AND_OP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2119;
				this.match(FlinkSQLParser.BIT_AND_OP);
				this.state = 2120;
				this.match(FlinkSQLParser.BIT_AND_OP);
				}
				break;
			case FlinkSQLParser.KW_OR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2121;
				this.match(FlinkSQLParser.KW_OR);
				}
				break;
			case FlinkSQLParser.BIT_OR_OP:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2122;
				this.match(FlinkSQLParser.BIT_OR_OP);
				this.state = 2123;
				this.match(FlinkSQLParser.BIT_OR_OP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparisonOperator(): ComparisonOperatorContext {
		let _localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, FlinkSQLParser.RULE_comparisonOperator);
		try {
			this.state = 2140;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 248, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2126;
				this.match(FlinkSQLParser.EQUAL_SYMBOL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2127;
				this.match(FlinkSQLParser.GREATER_SYMBOL);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2128;
				this.match(FlinkSQLParser.LESS_SYMBOL);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2129;
				this.match(FlinkSQLParser.LESS_SYMBOL);
				this.state = 2130;
				this.match(FlinkSQLParser.EQUAL_SYMBOL);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2131;
				this.match(FlinkSQLParser.GREATER_SYMBOL);
				this.state = 2132;
				this.match(FlinkSQLParser.EQUAL_SYMBOL);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2133;
				this.match(FlinkSQLParser.LESS_SYMBOL);
				this.state = 2134;
				this.match(FlinkSQLParser.GREATER_SYMBOL);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2135;
				this.match(FlinkSQLParser.EXCLAMATION_SYMBOL);
				this.state = 2136;
				this.match(FlinkSQLParser.EQUAL_SYMBOL);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2137;
				this.match(FlinkSQLParser.LESS_SYMBOL);
				this.state = 2138;
				this.match(FlinkSQLParser.EQUAL_SYMBOL);
				this.state = 2139;
				this.match(FlinkSQLParser.GREATER_SYMBOL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitOperator(): BitOperatorContext {
		let _localctx: BitOperatorContext = new BitOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 340, FlinkSQLParser.RULE_bitOperator);
		try {
			this.state = 2149;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.LESS_SYMBOL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2142;
				this.match(FlinkSQLParser.LESS_SYMBOL);
				this.state = 2143;
				this.match(FlinkSQLParser.LESS_SYMBOL);
				}
				break;
			case FlinkSQLParser.GREATER_SYMBOL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2144;
				this.match(FlinkSQLParser.GREATER_SYMBOL);
				this.state = 2145;
				this.match(FlinkSQLParser.GREATER_SYMBOL);
				}
				break;
			case FlinkSQLParser.BIT_AND_OP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2146;
				this.match(FlinkSQLParser.BIT_AND_OP);
				}
				break;
			case FlinkSQLParser.BIT_XOR_OP:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2147;
				this.match(FlinkSQLParser.BIT_XOR_OP);
				}
				break;
			case FlinkSQLParser.BIT_OR_OP:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2148;
				this.match(FlinkSQLParser.BIT_OR_OP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mathOperator(): MathOperatorContext {
		let _localctx: MathOperatorContext = new MathOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 342, FlinkSQLParser.RULE_mathOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2151;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.KW_DIV || ((((_la - 398)) & ~0x1F) === 0 && ((1 << (_la - 398)) & ((1 << (FlinkSQLParser.ASTERISK_SIGN - 398)) | (1 << (FlinkSQLParser.HYPNEN_SIGN - 398)) | (1 << (FlinkSQLParser.ADD_SIGN - 398)) | (1 << (FlinkSQLParser.PENCENT_SIGN - 398)) | (1 << (FlinkSQLParser.DOUBLE_HYPNEN_SIGN - 398)) | (1 << (FlinkSQLParser.SLASH_SIGN - 398)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryOperator(): UnaryOperatorContext {
		let _localctx: UnaryOperatorContext = new UnaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, FlinkSQLParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2153;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.KW_NOT || ((((_la - 379)) & ~0x1F) === 0 && ((1 << (_la - 379)) & ((1 << (FlinkSQLParser.EXCLAMATION_SYMBOL - 379)) | (1 << (FlinkSQLParser.BIT_NOT_OP - 379)) | (1 << (FlinkSQLParser.HYPNEN_SIGN - 379)) | (1 << (FlinkSQLParser.ADD_SIGN - 379)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 346, FlinkSQLParser.RULE_constant);
		let _la: number;
		try {
			this.state = 2169;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_INTERVAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2155;
				this.timeIntervalExpression();
				}
				break;
			case FlinkSQLParser.KW_MICROSECOND:
			case FlinkSQLParser.KW_MILLISECOND:
			case FlinkSQLParser.KW_QUARTER:
			case FlinkSQLParser.KW_WEEK:
			case FlinkSQLParser.KW_DAY:
			case FlinkSQLParser.KW_HOUR:
			case FlinkSQLParser.KW_MINUTE:
			case FlinkSQLParser.KW_MONTH:
			case FlinkSQLParser.KW_SECOND:
			case FlinkSQLParser.KW_YEAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2156;
				this.timePointLiteral();
				}
				break;
			case FlinkSQLParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2157;
				this.stringLiteral();
				}
				break;
			case FlinkSQLParser.HYPNEN_SIGN:
			case FlinkSQLParser.DIG_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.HYPNEN_SIGN) {
					{
					this.state = 2158;
					this.match(FlinkSQLParser.HYPNEN_SIGN);
					}
				}

				this.state = 2161;
				this.decimalLiteral();
				}
				break;
			case FlinkSQLParser.KW_FALSE:
			case FlinkSQLParser.KW_TRUE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2162;
				this.booleanLiteral();
				}
				break;
			case FlinkSQLParser.REAL_LITERAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2163;
				this.match(FlinkSQLParser.REAL_LITERAL);
				}
				break;
			case FlinkSQLParser.BIT_STRING:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2164;
				this.match(FlinkSQLParser.BIT_STRING);
				}
				break;
			case FlinkSQLParser.KW_NOT:
			case FlinkSQLParser.KW_NULL:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 2165;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 2168;
				this.match(FlinkSQLParser.KW_NULL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timePointLiteral(): TimePointLiteralContext {
		let _localctx: TimePointLiteralContext = new TimePointLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 348, FlinkSQLParser.RULE_timePointLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2171;
			this.timePointUnit();
			this.state = 2172;
			this.stringLiteral();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 350, FlinkSQLParser.RULE_stringLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2174;
			this.match(FlinkSQLParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decimalLiteral(): DecimalLiteralContext {
		let _localctx: DecimalLiteralContext = new DecimalLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 352, FlinkSQLParser.RULE_decimalLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2176;
			this.match(FlinkSQLParser.DIG_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanLiteral(): BooleanLiteralContext {
		let _localctx: BooleanLiteralContext = new BooleanLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 354, FlinkSQLParser.RULE_booleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2178;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.KW_FALSE || _la === FlinkSQLParser.KW_TRUE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setQuantifier(): SetQuantifierContext {
		let _localctx: SetQuantifierContext = new SetQuantifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 356, FlinkSQLParser.RULE_setQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2180;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.KW_ALL || _la === FlinkSQLParser.KW_DISTINCT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timePointUnit(): TimePointUnitContext {
		let _localctx: TimePointUnitContext = new TimePointUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 358, FlinkSQLParser.RULE_timePointUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2182;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.KW_MICROSECOND || _la === FlinkSQLParser.KW_MILLISECOND || _la === FlinkSQLParser.KW_QUARTER || _la === FlinkSQLParser.KW_WEEK || _la === FlinkSQLParser.KW_DAY || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & ((1 << (FlinkSQLParser.KW_HOUR - 261)) | (1 << (FlinkSQLParser.KW_MINUTE - 261)) | (1 << (FlinkSQLParser.KW_MONTH - 261)))) !== 0) || _la === FlinkSQLParser.KW_SECOND || _la === FlinkSQLParser.KW_YEAR)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeIntervalUnit(): TimeIntervalUnitContext {
		let _localctx: TimeIntervalUnitContext = new TimeIntervalUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 360, FlinkSQLParser.RULE_timeIntervalUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2184;
			_la = this._input.LA(1);
			if (!(((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & ((1 << (FlinkSQLParser.KW_CENTURY - 14)) | (1 << (FlinkSQLParser.KW_DAYS - 14)) | (1 << (FlinkSQLParser.KW_DECADE - 14)) | (1 << (FlinkSQLParser.KW_EPOCH - 14)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (FlinkSQLParser.KW_HOURS - 58)) | (1 << (FlinkSQLParser.KW_MICROSECOND - 58)) | (1 << (FlinkSQLParser.KW_MILLENNIUM - 58)) | (1 << (FlinkSQLParser.KW_MILLISECOND - 58)) | (1 << (FlinkSQLParser.KW_MINUTES - 58)) | (1 << (FlinkSQLParser.KW_MONTHS - 58)) | (1 << (FlinkSQLParser.KW_NANOSECOND - 58)))) !== 0) || _la === FlinkSQLParser.KW_QUARTER || _la === FlinkSQLParser.KW_SECONDS || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & ((1 << (FlinkSQLParser.KW_WEEK - 171)) | (1 << (FlinkSQLParser.KW_WEEKS - 171)) | (1 << (FlinkSQLParser.KW_YEARS - 171)))) !== 0) || _la === FlinkSQLParser.KW_DAY || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & ((1 << (FlinkSQLParser.KW_HOUR - 261)) | (1 << (FlinkSQLParser.KW_MINUTE - 261)) | (1 << (FlinkSQLParser.KW_MONTH - 261)))) !== 0) || _la === FlinkSQLParser.KW_SECOND || _la === FlinkSQLParser.KW_YEAR)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reservedKeywordsUsedAsFuncParam(): ReservedKeywordsUsedAsFuncParamContext {
		let _localctx: ReservedKeywordsUsedAsFuncParamContext = new ReservedKeywordsUsedAsFuncParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 362, FlinkSQLParser.RULE_reservedKeywordsUsedAsFuncParam);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2186;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.KW_ALL || _la === FlinkSQLParser.KW_BOTH || _la === FlinkSQLParser.KW_DISTINCT || _la === FlinkSQLParser.KW_LEADING || _la === FlinkSQLParser.KW_TRAILING || _la === FlinkSQLParser.ASTERISK_SIGN)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reservedKeywordsUsedAsFuncName(): ReservedKeywordsUsedAsFuncNameContext {
		let _localctx: ReservedKeywordsUsedAsFuncNameContext = new ReservedKeywordsUsedAsFuncNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 364, FlinkSQLParser.RULE_reservedKeywordsUsedAsFuncName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2188;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.KW_IF || _la === FlinkSQLParser.KW_MAP || _la === FlinkSQLParser.KW_QUARTER || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & ((1 << (FlinkSQLParser.KW_WEEK - 171)) | (1 << (FlinkSQLParser.KW_ABS - 171)) | (1 << (FlinkSQLParser.KW_ARRAY - 171)) | (1 << (FlinkSQLParser.KW_AVG - 171)) | (1 << (FlinkSQLParser.KW_CAST - 171)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (FlinkSQLParser.KW_CEIL - 203)) | (1 << (FlinkSQLParser.KW_COALESCE - 203)) | (1 << (FlinkSQLParser.KW_COLLECT - 203)) | (1 << (FlinkSQLParser.KW_COUNT - 203)) | (1 << (FlinkSQLParser.KW_DATE - 203)))) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & ((1 << (FlinkSQLParser.KW_GROUPING - 258)) | (1 << (FlinkSQLParser.KW_HOUR - 258)) | (1 << (FlinkSQLParser.KW_LAG - 258)) | (1 << (FlinkSQLParser.KW_LEFT - 258)) | (1 << (FlinkSQLParser.KW_MINUTE - 258)))) !== 0) || ((((_la - 292)) & ~0x1F) === 0 && ((1 << (_la - 292)) & ((1 << (FlinkSQLParser.KW_MONTH - 292)) | (1 << (FlinkSQLParser.KW_OVERLAY - 292)) | (1 << (FlinkSQLParser.KW_POSITION - 292)) | (1 << (FlinkSQLParser.KW_POWER - 292)) | (1 << (FlinkSQLParser.KW_RANK - 292)) | (1 << (FlinkSQLParser.KW_RIGHT - 292)))) !== 0) || ((((_la - 329)) & ~0x1F) === 0 && ((1 << (_la - 329)) & ((1 << (FlinkSQLParser.KW_SECOND - 329)) | (1 << (FlinkSQLParser.KW_SUBSTRING - 329)) | (1 << (FlinkSQLParser.KW_SUM - 329)) | (1 << (FlinkSQLParser.KW_TIME - 329)) | (1 << (FlinkSQLParser.KW_TIMESTAMP - 329)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_3 - 329)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_6 - 329)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_9 - 329)) | (1 << (FlinkSQLParser.KW_TRUNCATE - 329)))) !== 0) || _la === FlinkSQLParser.KW_UPPER || _la === FlinkSQLParser.KW_YEAR)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reservedKeywords(): ReservedKeywordsContext {
		let _localctx: ReservedKeywordsContext = new ReservedKeywordsContext(this._ctx, this.state);
		this.enterRule(_localctx, 366, FlinkSQLParser.RULE_reservedKeywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2190;
			_la = this._input.LA(1);
			if (!(((((_la - 177)) & ~0x1F) === 0 && ((1 << (_la - 177)) & ((1 << (FlinkSQLParser.KW_ABS - 177)) | (1 << (FlinkSQLParser.KW_ALL - 177)) | (1 << (FlinkSQLParser.KW_ALLOW - 177)) | (1 << (FlinkSQLParser.KW_ALTER - 177)) | (1 << (FlinkSQLParser.KW_AND - 177)) | (1 << (FlinkSQLParser.KW_ANY - 177)) | (1 << (FlinkSQLParser.KW_ARE - 177)) | (1 << (FlinkSQLParser.KW_ARRAY - 177)) | (1 << (FlinkSQLParser.KW_AS - 177)) | (1 << (FlinkSQLParser.KW_ASYMMETRIC - 177)) | (1 << (FlinkSQLParser.KW_AT - 177)) | (1 << (FlinkSQLParser.KW_AVG - 177)) | (1 << (FlinkSQLParser.KW_BEGIN - 177)) | (1 << (FlinkSQLParser.KW_BETWEEN - 177)) | (1 << (FlinkSQLParser.KW_BIGINT - 177)) | (1 << (FlinkSQLParser.KW_BINARY - 177)) | (1 << (FlinkSQLParser.KW_BIT - 177)) | (1 << (FlinkSQLParser.KW_BLOB - 177)) | (1 << (FlinkSQLParser.KW_BOOLEAN - 177)) | (1 << (FlinkSQLParser.KW_BOTH - 177)) | (1 << (FlinkSQLParser.KW_BY - 177)) | (1 << (FlinkSQLParser.KW_CALL - 177)) | (1 << (FlinkSQLParser.KW_CALLED - 177)) | (1 << (FlinkSQLParser.KW_CASCADED - 177)) | (1 << (FlinkSQLParser.KW_CASE - 177)) | (1 << (FlinkSQLParser.KW_CAST - 177)) | (1 << (FlinkSQLParser.KW_CEIL - 177)) | (1 << (FlinkSQLParser.KW_CHAR - 177)) | (1 << (FlinkSQLParser.KW_CHARACTER - 177)) | (1 << (FlinkSQLParser.KW_CHECK - 177)) | (1 << (FlinkSQLParser.KW_CLOB - 177)) | (1 << (FlinkSQLParser.KW_CLOSE - 177)))) !== 0) || ((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & ((1 << (FlinkSQLParser.KW_COALESCE - 209)) | (1 << (FlinkSQLParser.KW_COLLATE - 209)) | (1 << (FlinkSQLParser.KW_COLLECT - 209)) | (1 << (FlinkSQLParser.KW_COLUMN - 209)) | (1 << (FlinkSQLParser.KW_COMMIT - 209)) | (1 << (FlinkSQLParser.KW_CONNECT - 209)) | (1 << (FlinkSQLParser.KW_CONSTRAINT - 209)) | (1 << (FlinkSQLParser.KW_CONTAINS - 209)) | (1 << (FlinkSQLParser.KW_CONVERT - 209)) | (1 << (FlinkSQLParser.KW_COUNT - 209)) | (1 << (FlinkSQLParser.KW_CREATE - 209)) | (1 << (FlinkSQLParser.KW_CROSS - 209)) | (1 << (FlinkSQLParser.KW_CUBE - 209)) | (1 << (FlinkSQLParser.KW_CURRENT - 209)) | (1 << (FlinkSQLParser.KW_CURSOR - 209)) | (1 << (FlinkSQLParser.KW_CYCLE - 209)) | (1 << (FlinkSQLParser.KW_DATE - 209)) | (1 << (FlinkSQLParser.KW_DATETIME - 209)) | (1 << (FlinkSQLParser.KW_DAY - 209)) | (1 << (FlinkSQLParser.KW_DEC - 209)) | (1 << (FlinkSQLParser.KW_DECIMAL - 209)) | (1 << (FlinkSQLParser.KW_DECLARE - 209)) | (1 << (FlinkSQLParser.KW_DEFAULT - 209)) | (1 << (FlinkSQLParser.KW_DEFINE - 209)) | (1 << (FlinkSQLParser.KW_DELETE - 209)) | (1 << (FlinkSQLParser.KW_DESCRIBE - 209)) | (1 << (FlinkSQLParser.KW_DISTINCT - 209)) | (1 << (FlinkSQLParser.KW_DOUBLE - 209)) | (1 << (FlinkSQLParser.KW_DROP - 209)) | (1 << (FlinkSQLParser.KW_EACH - 209)) | (1 << (FlinkSQLParser.KW_ELSE - 209)) | (1 << (FlinkSQLParser.KW_END - 209)))) !== 0) || ((((_la - 241)) & ~0x1F) === 0 && ((1 << (_la - 241)) & ((1 << (FlinkSQLParser.KW_EQUALS - 241)) | (1 << (FlinkSQLParser.KW_EXCEPT - 241)) | (1 << (FlinkSQLParser.KW_EXECUTE - 241)) | (1 << (FlinkSQLParser.KW_EXISTS - 241)) | (1 << (FlinkSQLParser.KW_EXPLAIN - 241)) | (1 << (FlinkSQLParser.KW_EXTERNAL - 241)) | (1 << (FlinkSQLParser.KW_EXTRACT - 241)) | (1 << (FlinkSQLParser.KW_FALSE - 241)) | (1 << (FlinkSQLParser.KW_FLOAT - 241)) | (1 << (FlinkSQLParser.KW_FOR - 241)) | (1 << (FlinkSQLParser.KW_FROM - 241)) | (1 << (FlinkSQLParser.KW_FULL - 241)) | (1 << (FlinkSQLParser.KW_FUNCTION - 241)) | (1 << (FlinkSQLParser.KW_GLOBAL - 241)) | (1 << (FlinkSQLParser.KW_GRANT - 241)) | (1 << (FlinkSQLParser.KW_GROUP - 241)) | (1 << (FlinkSQLParser.KW_GROUPING - 241)) | (1 << (FlinkSQLParser.KW_GROUPS - 241)) | (1 << (FlinkSQLParser.KW_HAVING - 241)) | (1 << (FlinkSQLParser.KW_HOUR - 241)) | (1 << (FlinkSQLParser.KW_IMPORT - 241)) | (1 << (FlinkSQLParser.KW_IN - 241)) | (1 << (FlinkSQLParser.KW_INCLUDING - 241)) | (1 << (FlinkSQLParser.KW_INNER - 241)) | (1 << (FlinkSQLParser.KW_INOUT - 241)) | (1 << (FlinkSQLParser.KW_INSERT - 241)) | (1 << (FlinkSQLParser.KW_INT - 241)) | (1 << (FlinkSQLParser.KW_INTEGER - 241)) | (1 << (FlinkSQLParser.KW_INTERSECT - 241)) | (1 << (FlinkSQLParser.KW_INTERVAL - 241)) | (1 << (FlinkSQLParser.KW_INTO - 241)))) !== 0) || ((((_la - 273)) & ~0x1F) === 0 && ((1 << (_la - 273)) & ((1 << (FlinkSQLParser.KW_IS - 273)) | (1 << (FlinkSQLParser.KW_JOIN - 273)) | (1 << (FlinkSQLParser.KW_LAG - 273)) | (1 << (FlinkSQLParser.KW_LANGUAGE - 273)) | (1 << (FlinkSQLParser.KW_LATERAL - 273)) | (1 << (FlinkSQLParser.KW_LEADING - 273)) | (1 << (FlinkSQLParser.KW_LEFT - 273)) | (1 << (FlinkSQLParser.KW_LIKE - 273)) | (1 << (FlinkSQLParser.KW_LIMIT - 273)) | (1 << (FlinkSQLParser.KW_LOCAL - 273)) | (1 << (FlinkSQLParser.KW_MATCH - 273)) | (1 << (FlinkSQLParser.KW_MATCH_RECOGNIZE - 273)) | (1 << (FlinkSQLParser.KW_MEASURES - 273)) | (1 << (FlinkSQLParser.KW_MERGE - 273)) | (1 << (FlinkSQLParser.KW_METADATA - 273)) | (1 << (FlinkSQLParser.KW_MINUS - 273)) | (1 << (FlinkSQLParser.KW_MINUTE - 273)) | (1 << (FlinkSQLParser.KW_MODIFIES - 273)) | (1 << (FlinkSQLParser.KW_MODULE - 273)) | (1 << (FlinkSQLParser.KW_MONTH - 273)) | (1 << (FlinkSQLParser.KW_MULTISET - 273)) | (1 << (FlinkSQLParser.KW_NATURAL - 273)) | (1 << (FlinkSQLParser.KW_NEXT - 273)) | (1 << (FlinkSQLParser.KW_NO - 273)) | (1 << (FlinkSQLParser.KW_NONE - 273)) | (1 << (FlinkSQLParser.KW_NOT - 273)) | (1 << (FlinkSQLParser.KW_NULL - 273)) | (1 << (FlinkSQLParser.KW_NUMERIC - 273)) | (1 << (FlinkSQLParser.KW_OF - 273)) | (1 << (FlinkSQLParser.KW_OFFSET - 273)) | (1 << (FlinkSQLParser.KW_ON - 273)) | (1 << (FlinkSQLParser.KW_ONE - 273)))) !== 0) || ((((_la - 305)) & ~0x1F) === 0 && ((1 << (_la - 305)) & ((1 << (FlinkSQLParser.KW_OR - 305)) | (1 << (FlinkSQLParser.KW_ORDER - 305)) | (1 << (FlinkSQLParser.KW_OUT - 305)) | (1 << (FlinkSQLParser.KW_OUTER - 305)) | (1 << (FlinkSQLParser.KW_OVER - 305)) | (1 << (FlinkSQLParser.KW_OVERLAY - 305)) | (1 << (FlinkSQLParser.KW_PARTITION - 305)) | (1 << (FlinkSQLParser.KW_PATTERN - 305)) | (1 << (FlinkSQLParser.KW_PER - 305)) | (1 << (FlinkSQLParser.KW_PERCENT - 305)) | (1 << (FlinkSQLParser.KW_PERIOD - 305)) | (1 << (FlinkSQLParser.KW_POSITION - 305)) | (1 << (FlinkSQLParser.KW_PRIMARY - 305)) | (1 << (FlinkSQLParser.KW_RANGE - 305)) | (1 << (FlinkSQLParser.KW_RANK - 305)) | (1 << (FlinkSQLParser.KW_RESET - 305)) | (1 << (FlinkSQLParser.KW_REVOKE - 305)) | (1 << (FlinkSQLParser.KW_RIGHT - 305)) | (1 << (FlinkSQLParser.KW_RLIKE - 305)) | (1 << (FlinkSQLParser.KW_ROLLBACK - 305)) | (1 << (FlinkSQLParser.KW_ROLLUP - 305)) | (1 << (FlinkSQLParser.KW_ROW - 305)) | (1 << (FlinkSQLParser.KW_ROWS - 305)) | (1 << (FlinkSQLParser.KW_SECOND - 305)) | (1 << (FlinkSQLParser.KW_SELECT - 305)) | (1 << (FlinkSQLParser.KW_SET - 305)) | (1 << (FlinkSQLParser.KW_SHOW - 305)) | (1 << (FlinkSQLParser.KW_SIMILAR - 305)) | (1 << (FlinkSQLParser.KW_SKIP - 305)) | (1 << (FlinkSQLParser.KW_SMALLINT - 305)) | (1 << (FlinkSQLParser.KW_START - 305)))) !== 0) || ((((_la - 337)) & ~0x1F) === 0 && ((1 << (_la - 337)) & ((1 << (FlinkSQLParser.KW_STATIC - 337)) | (1 << (FlinkSQLParser.KW_SUBSTRING - 337)) | (1 << (FlinkSQLParser.KW_SUM - 337)) | (1 << (FlinkSQLParser.KW_SYSTEM - 337)) | (1 << (FlinkSQLParser.KW_SYSTEM_TIME - 337)) | (1 << (FlinkSQLParser.KW_SYSTEM_USER - 337)) | (1 << (FlinkSQLParser.KW_TABLE - 337)) | (1 << (FlinkSQLParser.KW_TABLESAMPLE - 337)) | (1 << (FlinkSQLParser.KW_THEN - 337)) | (1 << (FlinkSQLParser.KW_TIME - 337)) | (1 << (FlinkSQLParser.KW_TIMESTAMP - 337)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_3 - 337)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_6 - 337)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_9 - 337)) | (1 << (FlinkSQLParser.KW_TINYINT - 337)) | (1 << (FlinkSQLParser.KW_TO - 337)) | (1 << (FlinkSQLParser.KW_TRUE - 337)) | (1 << (FlinkSQLParser.KW_TRUNCATE - 337)) | (1 << (FlinkSQLParser.KW_UNION - 337)) | (1 << (FlinkSQLParser.KW_UNIQUE - 337)) | (1 << (FlinkSQLParser.KW_UNKNOWN - 337)) | (1 << (FlinkSQLParser.KW_UNNEST - 337)) | (1 << (FlinkSQLParser.KW_UPPER - 337)) | (1 << (FlinkSQLParser.KW_UPSERT - 337)) | (1 << (FlinkSQLParser.KW_USER - 337)) | (1 << (FlinkSQLParser.KW_USING - 337)) | (1 << (FlinkSQLParser.KW_VALUE - 337)) | (1 << (FlinkSQLParser.KW_VALUES - 337)) | (1 << (FlinkSQLParser.KW_VARBINARY - 337)) | (1 << (FlinkSQLParser.KW_VARCHAR - 337)))) !== 0) || ((((_la - 369)) & ~0x1F) === 0 && ((1 << (_la - 369)) & ((1 << (FlinkSQLParser.KW_WHEN - 369)) | (1 << (FlinkSQLParser.KW_WHERE - 369)) | (1 << (FlinkSQLParser.KW_WINDOW - 369)) | (1 << (FlinkSQLParser.KW_WITH - 369)) | (1 << (FlinkSQLParser.KW_WITHIN - 369)) | (1 << (FlinkSQLParser.KW_WITHOUT - 369)) | (1 << (FlinkSQLParser.KW_YEAR - 369)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonReservedKeywords(): NonReservedKeywordsContext {
		let _localctx: NonReservedKeywordsContext = new NonReservedKeywordsContext(this._ctx, this.state);
		this.enterRule(_localctx, 368, FlinkSQLParser.RULE_nonReservedKeywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2192;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSQLParser.KW_ADD) | (1 << FlinkSQLParser.KW_ADMIN) | (1 << FlinkSQLParser.KW_AFTER) | (1 << FlinkSQLParser.KW_ANALYZE) | (1 << FlinkSQLParser.KW_ASC) | (1 << FlinkSQLParser.KW_BEFORE) | (1 << FlinkSQLParser.KW_BYTES) | (1 << FlinkSQLParser.KW_CASCADE) | (1 << FlinkSQLParser.KW_CATALOG) | (1 << FlinkSQLParser.KW_CATALOGS) | (1 << FlinkSQLParser.KW_CENTURY) | (1 << FlinkSQLParser.KW_CHAIN) | (1 << FlinkSQLParser.KW_CHANGELOG_MODE) | (1 << FlinkSQLParser.KW_CHARACTERS) | (1 << FlinkSQLParser.KW_COMMENT) | (1 << FlinkSQLParser.KW_COMPACT) | (1 << FlinkSQLParser.KW_COLUMNS) | (1 << FlinkSQLParser.KW_CONSTRAINTS) | (1 << FlinkSQLParser.KW_CONSTRUCTOR) | (1 << FlinkSQLParser.KW_CUMULATE) | (1 << FlinkSQLParser.KW_DATA) | (1 << FlinkSQLParser.KW_DATABASE) | (1 << FlinkSQLParser.KW_DATABASES) | (1 << FlinkSQLParser.KW_DAYS) | (1 << FlinkSQLParser.KW_DECADE) | (1 << FlinkSQLParser.KW_DEFINED) | (1 << FlinkSQLParser.KW_DESC) | (1 << FlinkSQLParser.KW_DESCRIPTOR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSQLParser.KW_DIV - 32)) | (1 << (FlinkSQLParser.KW_ENCODING - 32)) | (1 << (FlinkSQLParser.KW_ENFORCED - 32)) | (1 << (FlinkSQLParser.KW_ENGINE - 32)) | (1 << (FlinkSQLParser.KW_ERROR - 32)) | (1 << (FlinkSQLParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSQLParser.KW_EXCEPTION - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDE - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDING - 32)) | (1 << (FlinkSQLParser.KW_EXTENDED - 32)) | (1 << (FlinkSQLParser.KW_FILE - 32)) | (1 << (FlinkSQLParser.KW_FINAL - 32)) | (1 << (FlinkSQLParser.KW_FIRST - 32)) | (1 << (FlinkSQLParser.KW_FOLLOWING - 32)) | (1 << (FlinkSQLParser.KW_FORMAT - 32)) | (1 << (FlinkSQLParser.KW_FORTRAN - 32)) | (1 << (FlinkSQLParser.KW_FOUND - 32)) | (1 << (FlinkSQLParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSQLParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSQLParser.KW_GENERAL - 32)) | (1 << (FlinkSQLParser.KW_GENERATED - 32)) | (1 << (FlinkSQLParser.KW_GO - 32)) | (1 << (FlinkSQLParser.KW_GOTO - 32)) | (1 << (FlinkSQLParser.KW_GRANTED - 32)) | (1 << (FlinkSQLParser.KW_HOP - 32)) | (1 << (FlinkSQLParser.KW_HOURS - 32)) | (1 << (FlinkSQLParser.KW_IF - 32)) | (1 << (FlinkSQLParser.KW_IGNORE - 32)) | (1 << (FlinkSQLParser.KW_INCREMENT - 32)) | (1 << (FlinkSQLParser.KW_INPUT - 32)) | (1 << (FlinkSQLParser.KW_INVOKER - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSQLParser.KW_JAR - 64)) | (1 << (FlinkSQLParser.KW_JARS - 64)) | (1 << (FlinkSQLParser.KW_JAVA - 64)) | (1 << (FlinkSQLParser.KW_JSON - 64)) | (1 << (FlinkSQLParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSQLParser.KW_KEY - 64)) | (1 << (FlinkSQLParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSQLParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSQLParser.KW_LABEL - 64)) | (1 << (FlinkSQLParser.KW_LAST - 64)) | (1 << (FlinkSQLParser.KW_LENGTH - 64)) | (1 << (FlinkSQLParser.KW_LEVEL - 64)) | (1 << (FlinkSQLParser.KW_LOAD - 64)) | (1 << (FlinkSQLParser.KW_MAP - 64)) | (1 << (FlinkSQLParser.KW_MICROSECOND - 64)) | (1 << (FlinkSQLParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSQLParser.KW_MILLISECOND - 64)) | (1 << (FlinkSQLParser.KW_MINUTES - 64)) | (1 << (FlinkSQLParser.KW_MINVALUE - 64)) | (1 << (FlinkSQLParser.KW_MODIFY - 64)) | (1 << (FlinkSQLParser.KW_MODULES - 64)) | (1 << (FlinkSQLParser.KW_MONTHS - 64)) | (1 << (FlinkSQLParser.KW_NANOSECOND - 64)) | (1 << (FlinkSQLParser.KW_NULLS - 64)) | (1 << (FlinkSQLParser.KW_NUMBER - 64)) | (1 << (FlinkSQLParser.KW_OPTION - 64)) | (1 << (FlinkSQLParser.KW_OPTIONS - 64)) | (1 << (FlinkSQLParser.KW_ORDERING - 64)) | (1 << (FlinkSQLParser.KW_OUTPUT - 64)) | (1 << (FlinkSQLParser.KW_OVERWRITE - 64)) | (1 << (FlinkSQLParser.KW_OVERWRITING - 64)) | (1 << (FlinkSQLParser.KW_PARTITIONED - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSQLParser.KW_PARTITIONS - 96)) | (1 << (FlinkSQLParser.KW_PASSING - 96)) | (1 << (FlinkSQLParser.KW_PAST - 96)) | (1 << (FlinkSQLParser.KW_PATH - 96)) | (1 << (FlinkSQLParser.KW_PLACING - 96)) | (1 << (FlinkSQLParser.KW_PLAN - 96)) | (1 << (FlinkSQLParser.KW_PRECEDING - 96)) | (1 << (FlinkSQLParser.KW_PRESERVE - 96)) | (1 << (FlinkSQLParser.KW_PRIOR - 96)) | (1 << (FlinkSQLParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSQLParser.KW_PUBLIC - 96)) | (1 << (FlinkSQLParser.KW_PYTHON - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSQLParser.KW_QUARTER - 96)) | (1 << (FlinkSQLParser.KW_RAW - 96)) | (1 << (FlinkSQLParser.KW_READ - 96)) | (1 << (FlinkSQLParser.KW_RELATIVE - 96)) | (1 << (FlinkSQLParser.KW_REMOVE - 96)) | (1 << (FlinkSQLParser.KW_RENAME - 96)) | (1 << (FlinkSQLParser.KW_REPLACE - 96)) | (1 << (FlinkSQLParser.KW_RESPECT - 96)) | (1 << (FlinkSQLParser.KW_RESTART - 96)) | (1 << (FlinkSQLParser.KW_RESTRICT - 96)) | (1 << (FlinkSQLParser.KW_ROLE - 96)) | (1 << (FlinkSQLParser.KW_ROW_COUNT - 96)) | (1 << (FlinkSQLParser.KW_SCALA - 96)) | (1 << (FlinkSQLParser.KW_SCALAR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSQLParser.KW_SCALE - 128)) | (1 << (FlinkSQLParser.KW_SCHEMA - 128)) | (1 << (FlinkSQLParser.KW_SECONDS - 128)) | (1 << (FlinkSQLParser.KW_SECTION - 128)) | (1 << (FlinkSQLParser.KW_SECURITY - 128)) | (1 << (FlinkSQLParser.KW_SELF - 128)) | (1 << (FlinkSQLParser.KW_SERVER - 128)) | (1 << (FlinkSQLParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSQLParser.KW_SESSION - 128)) | (1 << (FlinkSQLParser.KW_SETS - 128)) | (1 << (FlinkSQLParser.KW_SIMPLE - 128)) | (1 << (FlinkSQLParser.KW_SIZE - 128)) | (1 << (FlinkSQLParser.KW_SLIDE - 128)) | (1 << (FlinkSQLParser.KW_SOURCE - 128)) | (1 << (FlinkSQLParser.KW_SPACE - 128)) | (1 << (FlinkSQLParser.KW_STATE - 128)) | (1 << (FlinkSQLParser.KW_STATEMENT - 128)) | (1 << (FlinkSQLParser.KW_STEP - 128)) | (1 << (FlinkSQLParser.KW_STRING - 128)) | (1 << (FlinkSQLParser.KW_STRUCTURE - 128)) | (1 << (FlinkSQLParser.KW_STYLE - 128)) | (1 << (FlinkSQLParser.KW_TABLES - 128)) | (1 << (FlinkSQLParser.KW_TEMPORARY - 128)) | (1 << (FlinkSQLParser.KW_TIMECOL - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_LTZ - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPADD - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPDIFF - 128)) | (1 << (FlinkSQLParser.KW_TRANSFORM - 128)) | (1 << (FlinkSQLParser.KW_TUMBLE - 128)) | (1 << (FlinkSQLParser.KW_TYPE - 128)) | (1 << (FlinkSQLParser.KW_UNDER - 128)) | (1 << (FlinkSQLParser.KW_UNLOAD - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSQLParser.KW_USAGE - 160)) | (1 << (FlinkSQLParser.KW_USE - 160)) | (1 << (FlinkSQLParser.KW_UTF16 - 160)) | (1 << (FlinkSQLParser.KW_UTF32 - 160)) | (1 << (FlinkSQLParser.KW_UTF8 - 160)) | (1 << (FlinkSQLParser.KW_VERSION - 160)) | (1 << (FlinkSQLParser.KW_VIEW - 160)) | (1 << (FlinkSQLParser.KW_VIEWS - 160)) | (1 << (FlinkSQLParser.KW_VIRTUAL - 160)) | (1 << (FlinkSQLParser.KW_WATERMARK - 160)) | (1 << (FlinkSQLParser.KW_WATERMARKS - 160)) | (1 << (FlinkSQLParser.KW_WEEK - 160)) | (1 << (FlinkSQLParser.KW_WORK - 160)) | (1 << (FlinkSQLParser.KW_WRAPPER - 160)) | (1 << (FlinkSQLParser.KW_YEARS - 160)) | (1 << (FlinkSQLParser.KW_ZONE - 160)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 78:
			return this.queryStatement_sempred(_localctx as QueryStatementContext, predIndex);

		case 88:
			return this.tableExpression_sempred(_localctx as TableExpressionContext, predIndex);

		case 129:
			return this.booleanExpression_sempred(_localctx as BooleanExpressionContext, predIndex);

		case 132:
			return this.valueExpression_sempred(_localctx as ValueExpressionContext, predIndex);

		case 133:
			return this.primaryExpression_sempred(_localctx as PrimaryExpressionContext, predIndex);
		}
		return true;
	}
	private queryStatement_sempred(_localctx: QueryStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private tableExpression_sempred(_localctx: TableExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 3);

		case 2:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}
	private booleanExpression_sempred(_localctx: BooleanExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 3);

		case 4:
			return this.precpred(this._ctx, 2);

		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private valueExpression_sempred(_localctx: ValueExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 7);

		case 7:
			return this.precpred(this._ctx, 6);

		case 8:
			return this.precpred(this._ctx, 5);

		case 9:
			return this.precpred(this._ctx, 4);

		case 10:
			return this.precpred(this._ctx, 3);

		case 11:
			return this.precpred(this._ctx, 2);

		case 12:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private primaryExpression_sempred(_localctx: PrimaryExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 5;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\u019F\u0895\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
		"\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
		"\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3" +
		"\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8" +
		"\x04\xB9\t\xB9\x04\xBA\t\xBA\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x07\x04\u017D\n\x04\f\x04\x0E\x04\u0180\v\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u01A3\n\x05\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u01B5\n\x07\x03" +
		"\b\x03\b\x05\b\u01B9\n\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x05" +
		"\n\u01C2\n\n\x03\n\x03\n\x03\n\x05\n\u01C7\n\n\x03\v\x03\v\x03\v\x07\v" +
		"\u01CC\n\v\f\v\x0E\v\u01CF\v\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x05\r\u01D9\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E" +
		"\u01E0\n\x0E\f\x0E\x0E\x0E\u01E3\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u01EE\n\x0F\x03\x0F\x05" +
		"\x0F\u01F1\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u01F8" +
		"\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0200\n" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0205\n\x0F\x03\x0F\x05\x0F\u0208" +
		"\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u020F\n\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x05\x12\u0217\n\x12\x03\x13" +
		"\x03\x13\x05\x13\u021B\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x06" +
		"\x15\u0222\n\x15\r\x15\x0E\x15\u0223\x03\x16\x03\x16\x05\x16\u0228\n\x16" +
		"\x03\x17\x03\x17\x05\x17\u022C\n\x17\x03\x17\x03\x17\x05\x17\u0230\n\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u0237\n\x17\f\x17\x0E" +
		"\x17\u023A\v\x17\x03\x17\x03\x17\x05\x17\u023E\n\x17\x03\x17\x03\x17\x05" +
		"\x17\u0242\n\x17\x03\x17\x03\x17\x05\x17\u0246\n\x17\x03\x17\x03\x17\x05" +
		"\x17\u024A\n\x17\x03\x17\x05\x17\u024D\n\x17\x03\x17\x03\x17\x05\x17\u0251" +
		"\n\x17\x03\x18\x03\x18\x03\x18\x05\x18\u0256\n\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x05\x18\u025C\n\x18\x03\x19\x03\x19\x03\x19\x05\x19\u0261" +
		"\n\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0266\n\x1A\x03\x1A\x05\x1A\u0269" +
		"\n\x1A\x03\x1B\x03\x1B\x05\x1B\u026D\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x07\x1C\u0273\n\x1C\f\x1C\x0E\x1C\u0276\v\x1C\x03\x1C\x03\x1C\x03" +
		"\x1D\x03\x1D\x03\x1D\x05\x1D\u027D\n\x1D\x03\x1D\x03\x1D\x05\x1D\u0281" +
		"\n\x1D\x03\x1D\x03\x1D\x05\x1D\u0285\n\x1D\x03\x1D\x03\x1D\x05\x1D\u0289" +
		"\n\x1D\x03\x1D\x03\x1D\x05\x1D\u028D\n\x1D\x03\x1D\x03\x1D\x05\x1D\u0291" +
		"\n\x1D\x03\x1D\x03\x1D\x05\x1D\u0295\n\x1D\x03\x1D\x03\x1D\x05\x1D\u0299" +
		"\n\x1D\x03\x1D\x03\x1D\x05\x1D\u029D\n\x1D\x03\x1D\x03\x1D\x05\x1D\u02A1" +
		"\n\x1D\x03\x1D\x03\x1D\x05\x1D\u02A5\n\x1D\x03\x1D\x03\x1D\x05\x1D\u02A9" +
		"\n\x1D\x03\x1D\x03\x1D\x05\x1D\u02AD\n\x1D\x03\x1D\x03\x1D\x05\x1D\u02B1" +
		"\n\x1D\x03\x1D\x03\x1D\x05\x1D\u02B5\n\x1D\x03\x1D\x03\x1D\x05\x1D\u02B9" +
		"\n\x1D\x03\x1D\x03\x1D\x05\x1D\u02BD\n\x1D\x03\x1D\x03\x1D\x05\x1D\u02C1" +
		"\n\x1D\x05\x1D\u02C3\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x05\x1F\u02CD\n\x1F\x03\x1F\x03\x1F\x03 \x03 \x03" +
		" \x03 \x05 \u02D5\n \x03 \x03 \x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03" +
		"\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x07#\u02EB\n#" +
		"\f#\x0E#\u02EE\v#\x03#\x03#\x03$\x03$\x05$\u02F4\n$\x03$\x03$\x03$\x03" +
		"$\x05$\u02FA\n$\x03$\x05$\u02FD\n$\x03$\x05$\u0300\n$\x03%\x03%\x03%\x03" +
		"&\x03&\x03&\x03&\x03&\x05&\u030A\n&\x03&\x05&\u030D\n&\x03\'\x03\'\x03" +
		"(\x03(\x03(\x03(\x05(\u0315\n(\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03" +
		"*\x03+\x03+\x05+\u0321\n+\x03+\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03" +
		"-\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x07/\u0337\n" +
		"/\f/\x0E/\u033A\v/\x03/\x03/\x030\x030\x030\x030\x030\x030\x070\u0344" +
		"\n0\f0\x0E0\u0347\v0\x030\x030\x050\u034B\n0\x031\x031\x051\u034F\n1\x03" +
		"2\x032\x032\x032\x072\u0355\n2\f2\x0E2\u0358\v2\x032\x052\u035B\n2\x03" +
		"3\x033\x033\x033\x053\u0361\n3\x034\x034\x034\x034\x034\x035\x035\x03" +
		"5\x055\u036B\n5\x035\x035\x055\u036F\n5\x035\x035\x036\x036\x056\u0375" +
		"\n6\x036\x036\x056\u0379\n6\x036\x036\x056\u037D\n6\x036\x056\u0380\n" +
		"6\x036\x036\x036\x037\x037\x037\x037\x057\u0389\n7\x037\x037\x057\u038D" +
		"\n7\x037\x037\x037\x037\x037\x057\u0394\n7\x037\x057\u0397\n7\x038\x03" +
		"8\x038\x038\x038\x038\x078\u039F\n8\f8\x0E8\u03A2\v8\x039\x039\x03:\x03" +
		":\x03:\x05:\u03A9\n:\x03:\x03:\x03:\x03:\x03:\x03:\x05:\u03B1\n:\x03;" +
		"\x03;\x05;\u03B5\n;\x03;\x03;\x03;\x03<\x03<\x03<\x03=\x03=\x03=\x03=" +
		"\x03=\x03=\x03=\x05=\u03C4\n=\x03>\x03>\x03>\x03>\x03?\x03?\x03?\x03?" +
		"\x03@\x03@\x03@\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u03D7\nA\x03B\x03B" +
		"\x03B\x03B\x03B\x03C\x03C\x03C\x03C\x05C\u03E2\nC\x03C\x03C\x05C\u03E6" +
		"\nC\x03C\x03C\x03C\x03C\x03C\x05C\u03ED\nC\x03D\x03D\x03D\x05D\u03F2\n" +
		"D\x03D\x03D\x03E\x03E\x05E\u03F8\nE\x03E\x03E\x05E\u03FC\nE\x03E\x03E" +
		"\x03F\x03F\x03F\x05F\u0403\nF\x03F\x03F\x05F\u0407\nF\x03G\x03G\x05G\u040B" +
		"\nG\x03G\x03G\x05G\u040F\nG\x03G\x03G\x03H\x03H\x03H\x03H\x05H\u0417\n" +
		"H\x03H\x03H\x05H\u041B\nH\x03H\x03H\x03I\x05I\u0420\nI\x03I\x03I\x03I" +
		"\x03I\x05I\u0426\nI\x03J\x03J\x03J\x03J\x05J\u042C\nJ\x03J\x05J\u042F" +
		"\nJ\x03J\x03J\x05J\u0433\nJ\x03K\x03K\x03K\x03L\x03L\x03L\x03L\x07L\u043C" +
		"\nL\fL\x0EL\u043F\vL\x03M\x03M\x03M\x03M\x07M\u0445\nM\fM\x0EM\u0448\v" +
		"M\x03M\x03M\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x06N\u0453\nN\rN\x0EN\u0454" +
		"\x03N\x03N\x03O\x03O\x03O\x03O\x03O\x03O\x06O\u045F\nO\rO\x0EO\u0460\x03" +
		"O\x03O\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x05P\u0470" +
		"\nP\x03P\x05P\u0473\nP\x03P\x03P\x05P\u0477\nP\x03P\x05P\u047A\nP\x05" +
		"P\u047C\nP\x03P\x03P\x03P\x05P\u0481\nP\x03P\x03P\x05P\u0485\nP\x03P\x05" +
		"P\u0488\nP\x07P\u048A\nP\fP\x0EP\u048D\vP\x03Q\x03Q\x03Q\x03Q\x07Q\u0493" +
		"\nQ\fQ\x0EQ\u0496\vQ\x03R\x03R\x03R\x03R\x07R\u049C\nR\fR\x0ER\u049F\v" +
		"R\x03S\x03S\x03S\x03S\x03S\x07S\u04A6\nS\fS\x0ES\u04A9\vS\x03S\x03S\x05" +
		"S\u04AD\nS\x03S\x03S\x03S\x03S\x03S\x03T\x03T\x03U\x03U\x03U\x05U\u04B9" +
		"\nU\x03U\x05U\u04BC\nU\x03U\x05U\u04BF\nU\x03U\x05U\u04C2\nU\x03U\x03" +
		"U\x03U\x03U\x05U\u04C8\nU\x03V\x03V\x05V\u04CC\nV\x03V\x03V\x03V\x03V" +
		"\x07V\u04D2\nV\fV\x0EV\u04D5\vV\x05V\u04D7\nV\x03W\x03W\x03W\x05W\u04DC" +
		"\nW\x03W\x05W\u04DF\nW\x05W\u04E1\nW\x03X\x03X\x03X\x03X\x03X\x03X\x03" +
		"X\x03X\x03X\x03X\x03X\x03X\x05X\u04EF\nX\x03Y\x03Y\x03Y\x03Z\x03Z\x03" +
		"Z\x03Z\x07Z\u04F8\nZ\fZ\x0EZ\u04FB\vZ\x03Z\x03Z\x05Z\u04FF\nZ\x03Z\x03" +
		"Z\x03Z\x03Z\x03Z\x03Z\x05Z\u0507\nZ\x03Z\x05Z\u050A\nZ\x03Z\x05Z\u050D" +
		"\nZ\x03Z\x03Z\x03Z\x05Z\u0512\nZ\x07Z\u0514\nZ\fZ\x0EZ\u0517\vZ\x03[\x03" +
		"[\x05[\u051B\n[\x03\\\x05\\\u051E\n\\\x03\\\x03\\\x05\\\u0522\n\\\x03" +
		"\\\x05\\\u0525\n\\\x03\\\x05\\\u0528\n\\\x03\\\x03\\\x03\\\x03\\\x03\\" +
		"\x03\\\x03\\\x03\\\x07\\\u0532\n\\\f\\\x0E\\\u0535\v\\\x03\\\x03\\\x03" +
		"\\\x03\\\x05\\\u053B\n\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03" +
		"\\\x03\\\x05\\\u0546\n\\\x03]\x03]\x03]\x03]\x03]\x03]\x03^\x03^\x03_" +
		"\x03_\x03_\x03_\x03_\x03`\x03`\x03`\x03`\x03`\x03a\x03a\x03a\x03a\x03" +
		"a\x07a\u055F\na\fa\x0Ea\u0562\va\x03a\x03a\x03b\x03b\x03c\x03c\x03c\x03" +
		"c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x05c\u0577\n" +
		"c\x03d\x03d\x03e\x03e\x03e\x03e\x03e\x03f\x03f\x03f\x03f\x03f\x03f\x03" +
		"f\x07f\u0587\nf\ff\x0Ef\u058A\vf\x03f\x03f\x05f\u058E\nf\x03g\x03g\x03" +
		"g\x03h\x03h\x03h\x03h\x03h\x07h\u0598\nh\fh\x0Eh\u059B\vh\x03i\x03i\x03" +
		"i\x03i\x03i\x03i\x03i\x03i\x07i\u05A5\ni\fi\x0Ei\u05A8\vi\x03i\x03i\x03" +
		"i\x03i\x03i\x03i\x03i\x07i\u05B1\ni\fi\x0Ei\u05B4\vi\x03i\x03i\x03i\x03" +
		"i\x03i\x03i\x03i\x07i\u05BD\ni\fi\x0Ei\u05C0\vi\x03i\x03i\x05i\u05C4\n" +
		"i\x03j\x03j\x03j\x03k\x03k\x03l\x03l\x03l\x03l\x03l\x03l\x03l\x03m\x03" +
		"m\x03n\x03n\x03o\x03o\x03o\x03p\x03p\x03p\x03p\x07p\u05DD\np\fp\x0Ep\u05E0" +
		"\vp\x03q\x03q\x03q\x03q\x03r\x05r\u05E7\nr\x03r\x03r\x05r\u05EB\nr\x03" +
		"r\x05r\u05EE\nr\x03r\x05r\u05F1\nr\x03r\x03r\x03s\x03s\x03s\x05s\u05F8" +
		"\ns\x03s\x05s\u05FB\ns\x03s\x05s\u05FE\ns\x03s\x05s\u0601\ns\x03s\x05" +
		"s\u0604\ns\x03s\x05s\u0607\ns\x03s\x03s\x03s\x05s\u060C\ns\x03s\x05s\u060F" +
		"\ns\x03t\x03t\x03t\x03t\x03t\x07t\u0616\nt\ft\x0Et\u0619\vt\x03u\x03u" +
		"\x05u\u061D\nu\x03u\x03u\x05u\u0621\nu\x03v\x03v\x03v\x05v\u0626\nv\x03" +
		"w\x03w\x03w\x03w\x03w\x07w\u062D\nw\fw\x0Ew\u0630\vw\x03x\x03x\x03x\x03" +
		"x\x03x\x03x\x03x\x03x\x03x\x03x\x03x\x03x\x03x\x03x\x03x\x03x\x05x\u0642" +
		"\nx\x03y\x03y\x03y\x03y\x07y\u0648\ny\fy\x0Ey\u064B\vy\x03z\x03z\x03z" +
		"\x06z\u0650\nz\rz\x0Ez\u0651\x03z\x03z\x05z\u0656\nz\x03{\x03{\x05{\u065A" +
		"\n{\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x05|\u0664\n|\x03}\x03}\x03" +
		"}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x03" +
		"}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x05}\u067E\n}\x03~\x03~\x03~\x03" +
		"~\x07~\u0684\n~\f~\x0E~\u0687\v~\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F" +
		"\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x05\x7F\u0692\n\x7F\x03\x80\x03\x80\x03" +
		"\x80\x03\x80\x03\x80\x03\x81\x03\x81\x03\x81\x03\x82\x03\x82\x03\x83\x03" +
		"\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x05" +
		"\x83\u06A8\n\x83\x05\x83\u06AA\n\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03" +
		"\x83\x03\x83\x03\x83\x03\x83\x03\x83\x05\x83\u06B5\n\x83\x03\x83\x07\x83" +
		"\u06B8\n\x83\f\x83\x0E\x83\u06BB\v\x83\x03\x84\x05\x84\u06BE\n\x84\x03" +
		"\x84\x03\x84\x05\x84\u06C2\n\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84" +
		"\x05\x84\u06C9\n\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x07\x84\u06D0" +
		"\n\x84\f\x84\x0E\x84\u06D3\v\x84\x03\x84\x03\x84\x03\x84\x05\x84\u06D8" +
		"\n\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84" +
		"\x03\x84\x03\x84\x03\x84\x05\x84\u06E5\n\x84\x03\x84\x03\x84\x03\x84\x03" +
		"\x84\x03\x84\x05\x84\u06EC\n\x84\x03\x84\x03\x84\x03\x84\x05\x84\u06F1" +
		"\n\x84\x03\x84\x03\x84\x03\x84\x03\x84\x05\x84\u06F7\n\x84\x03\x84\x03" +
		"\x84\x03\x84\x03\x84\x03\x84\x05\x84\u06FE\n\x84\x05\x84\u0700\n\x84\x03" +
		"\x85\x05\x85\u0703\n\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85" +
		"\x03\x85\x03\x85\x07\x85\u070D\n\x85\f\x85\x0E\x85\u0710\v\x85\x03\x85" +
		"\x03\x85\x05\x85\u0714\n\x85\x03\x85\x05\x85\u0717\n\x85\x03\x85\x03\x85" +
		"\x03\x85\x03\x85\x05\x85\u071D\n\x85\x05\x85\u071F\n\x85\x03\x86\x03\x86" +
		"\x03\x86\x03\x86\x05\x86\u0725\n\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03" +
		"\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03" +
		"\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x07\x86\u073C" +
		"\n\x86\f\x86\x0E\x86\u073F\v\x86\x03\x87\x03\x87\x03\x87\x06\x87\u0744" +
		"\n\x87\r\x87\x0E\x87\u0745\x03\x87\x03\x87\x05\x87\u074A\n\x87\x03\x87" +
		"\x03\x87\x03\x87\x03\x87\x03\x87\x06\x87\u0751\n\x87\r\x87\x0E\x87\u0752" +
		"\x03\x87\x03\x87\x05\x87\u0757\n\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03" +
		"\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03" +
		"\x87\x05\x87\u0767\n\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87" +
		"\x03\x87\x05\x87\u0770\n\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03" +
		"\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03" +
		"\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x05\x87\u0788" +
		"\n\x87\x03\x87\x03\x87\x03\x87\x07\x87\u078D\n\x87\f\x87\x0E\x87\u0790" +
		"\v\x87\x05\x87\u0792\n\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03" +
		"\x87\x03\x87\x03\x87\x05\x87\u079C\n\x87\x03\x87\x03\x87\x03\x87\x03\x87" +
		"\x03\x87\x07\x87\u07A3\n\x87\f\x87\x0E\x87\u07A6\v\x87\x03\x88\x03\x88" +
		"\x03\x88\x05\x88\u07AB\n\x88\x03\x89\x03\x89\x03\x89\x03\x89\x05\x89\u07B1" +
		"\n\x89\x03\x8A\x03\x8A\x03\x8B\x03\x8B\x03\x8C\x03\x8C\x05\x8C\u07B9\n" +
		"\x8C\x03\x8D\x03\x8D\x03\x8D\x05\x8D\u07BE\n\x8D\x03\x8E\x03\x8E\x05\x8E" +
		"\u07C2\n\x8E\x03\x8F\x03\x8F\x03\x8F\x06\x8F\u07C7\n\x8F\r\x8F\x0E\x8F" +
		"\u07C8\x03\x90\x03\x90\x03\x90\x05\x90\u07CE\n\x90\x03\x91\x03\x91\x03" +
		"\x91\x03\x91\x03\x91\x03\x92\x05\x92\u07D6\n\x92\x03\x92\x03\x92\x05\x92" +
		"\u07DA\n\x92\x03\x93\x05\x93\u07DD\n\x93\x03\x93\x03\x93\x05\x93\u07E1" +
		"\n\x93\x03\x94\x05\x94\u07E4\n\x94\x03\x94\x03\x94\x05\x94\u07E8\n\x94" +
		"\x03\x95\x03\x95\x03\x95\x03\x96\x03\x96\x06\x96\u07EF\n\x96\r\x96\x0E" +
		"\x96\u07F0\x03\x96\x05\x96\u07F4\n\x96\x03\x97\x03\x97\x03\x97\x03\x97" +
		"\x03\x98\x03\x98\x03\x98\x07\x98\u07FD\n\x98\f\x98\x0E\x98\u0800\v\x98" +
		"\x03\x99\x03\x99\x03\x99\x05\x99\u0805\n\x99\x03\x9A\x03\x9A\x03\x9B\x03" +
		"\x9B\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9D\x03\x9D\x03\x9E\x03" +
		"\x9E\x03\x9F\x03\x9F\x03\xA0\x03\xA0\x03\xA1\x03\xA1\x03\xA2\x03\xA2\x03" +
		"\xA2\x07\xA2\u081D\n\xA2\f\xA2\x0E\xA2\u0820\v\xA2\x03\xA3\x03\xA3\x03" +
		"\xA3\x03\xA4\x03\xA4\x03\xA4\x03\xA4\x03\xA5\x03\xA5\x03\xA5\x03\xA6\x03" +
		"\xA6\x03\xA6\x03\xA6\x07\xA6\u0830\n\xA6\f\xA6\x0E\xA6\u0833\v\xA6\x03" +
		"\xA6\x03\xA6\x03\xA7\x03\xA7\x05\xA7\u0839\n\xA7\x03\xA7\x05\xA7\u083C" +
		"\n\xA7\x03\xA8\x03\xA8\x03\xA8\x05\xA8\u0841\n\xA8\x03\xA9\x03\xA9\x03" +
		"\xA9\x03\xA9\x05\xA9\u0847\n\xA9\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA" +
		"\x03\xAA\x05\xAA\u084F\n\xAA\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03" +
		"\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x05" +
		"\xAB\u085F\n\xAB\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAC" +
		"\x05\xAC\u0868\n\xAC\x03\xAD\x03\xAD\x03\xAE\x03\xAE\x03\xAF\x03\xAF\x03" +
		"\xAF\x03\xAF\x05\xAF\u0872\n\xAF\x03\xAF\x03\xAF\x03\xAF\x03\xAF\x03\xAF" +
		"\x05\xAF\u0879\n\xAF\x03\xAF\x05\xAF\u087C\n\xAF\x03\xB0\x03\xB0\x03\xB0" +
		"\x03\xB1\x03\xB1\x03\xB2\x03\xB2\x03\xB3\x03\xB3\x03\xB4\x03\xB4\x03\xB5" +
		"\x03\xB5\x03\xB6\x03\xB6\x03\xB7\x03\xB7\x03\xB8\x03\xB8\x03\xB9\x03\xB9" +
		"\x03\xBA\x03\xBA\x03\xBA\x03\u081E\x02\x07\x9E\xB2\u0104\u010A\u010C\xBB" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
		"F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02" +
		"b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02" +
		"~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02" +
		"\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02" +
		"\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02" +
		"\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02" +
		"\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02" +
		"\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02" +
		"\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02" +
		"\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108\x02\u010A" +
		"\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116\x02\u0118" +
		"\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124";
	private static readonly _serializedATNSegment1: string =
		"\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02\u0130\x02\u0132" +
		"\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02\u013E\x02\u0140" +
		"\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02\u014C\x02\u014E" +
		"\x02\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02\u015A\x02\u015C" +
		"\x02\u015E\x02\u0160\x02\u0162\x02\u0164\x02\u0166\x02\u0168\x02\u016A" +
		"\x02\u016C\x02\u016E\x02\u0170\x02\u0172\x02\x020\x04\x02  \xEC\xEC\x05" +
		"\x02\x12\x12((FF\x06\x02\x0F\x0F\x1C\x1CCC\xA9\xA9\x04\x02\x0E\x0E\x1B" +
		"\x1B\x04\x02\xFE\xFE\u0109\u0109\x04\x02\xA8\xA8\u015A\u015A\x04\x02\x06" +
		"\x06xx\x05\x02\xC5\xC5\xE3\xE3\u012D\u012D\r\x02\f\f\x94\x94\x9A\x9A\xC1" +
		"\xC2\xCE\xCE\xE4\xE4\u010E\u010F\u0151\u0151\u015D\u015D\u0162\u0162\u0171" +
		"\u0172\x04\x02\u0176\u0176\u0178\u0178\x06\x02\xE6\xE7\xEE\xEE\xFC\xFC" +
		"\u012E\u012E\x04\x02\xBA\xBA\u0127\u0127\x04\x02++\u010A\u010A\x05\x02" +
		"\x17\x17bb\xB4\xB4\x05\x02++``\u010A\u010A\x05\x0277\\\\\xAC\xAC\x05\x02" +
		"DDmm\x80\x80\x04\x02\r\r}}\x04\x02__\u0112\u0112\x05\x02\xF5\xF5\u0110" +
		"\u0110\u0167\u0167\x06\x02\xFF\xFF\u010B\u010B\u0119\u0119\u0145\u0145" +
		"\x05\x02\x19\x19;;\x9E\x9E\x07\x02\x1A\x1A\x8D\x8E\x93\x93\x99\x99\u0130" +
		"\u0130\x04\x02\xDF\xDF\u0148\u0148\x05\x02;;\x8A\x8A\x9E\x9E\x04\x02\n" +
		"\n  \x04\x02//KK\x06\x02\xFB\xFB\u012D\u012D\u0165\u0165\u0169\u0169\x04" +
		"\x02\xBC\xBC\u0156\u0156\x04\x02\xB4\xB4\xB8\xB8\x04\x02\u017E\u017E\u0192" +
		"\u0193\x06\x02\"\"\u0190\u0190\u0194\u0194\u0197\u0197\x04\x02\u0192\u0193" +
		"\u0195\u0195\x03\x02\u0192\u0193\x03\x02\u019B\u019C\x04\x02\u019B\u019B" +
		"\u019E\u019E\x06\x02\"\"\u0190\u0190\u0192\u0194\u0196\u0197\x05\x02\u012C" +
		"\u012C\u017D\u017E\u0192\u0193\x04\x02\xFB\xFB\u0165\u0165\x04\x02\xB4" +
		"\xB4\xED\xED\f\x02PPRRtt\xAD\xAD\xE5\xE5\u0107\u0107\u0123\u0123\u0126" +
		"\u0126\u014B\u014B\u0179\u0179\x12\x02\x10\x10\x1D\x1E&&<<PSWXtt\x84\x84" +
		"\xAD\xAE\xB1\xB1\xE5\xE5\u0107\u0107\u0123\u0123\u0126\u0126\u014B\u014B" +
		"\u0179\u0179\b\x02\xB4\xB4\xC6\xC6\xED\xED\u0118\u0118\u0164\u0164\u0190" +
		"\u0190\x1E\x02==OOtt\xAD\xAD\xB3\xB3\xBA\xBA\xBE\xBE\xCC\xCD\xD3\xD3\xD5" +
		"\xD5\xDC\xDC\xE3\xE3\u0104\u0104\u0107\u0107\u0115\u0115\u0119\u0119\u0123" +
		"\u0123\u0126\u0126\u0138\u0138\u013E\u013F\u0142\u0142\u0145\u0145\u014B" +
		"\u014B\u0154\u0155\u015D\u0161\u0166\u0166\u016B\u016B\u0179\u0179\x07" +
		"\x02\xB3\xF3\xF5\u013E\u0140\u0155\u0157\u0163\u0165\u0179\x05\x02\x06" +
		"%\'\xAD\xAF\xB2\x02\u094E\x02\u0174\x03\x02\x02\x02\x04\u0177\x03\x02" +
		"\x02\x02\x06\u017E\x03\x02\x02\x02\b\u01A2\x03\x02\x02\x02\n\u01A4\x03" +
		"\x02\x02\x02\f\u01B4\x03\x02\x02\x02\x0E\u01B8\x03\x02\x02\x02\x10\u01BA" +
		"\x03\x02\x02\x02\x12\u01BD\x03\x02\x02\x02\x14\u01C8\x03\x02\x02\x02\x16" +
		"\u01D0\x03\x02\x02\x02\x18\u01D8\x03\x02\x02\x02\x1A\u01DA\x03\x02\x02" +
		"\x02\x1C\u0207\x03\x02\x02\x02\x1E\u0209\x03\x02\x02\x02 \u0210\x03\x02" +
		"\x02\x02\"\u0214\x03\x02\x02\x02$\u0218\x03\x02\x02\x02&\u021C\x03\x02" +
		"\x02\x02(\u0221\x03\x02\x02\x02*\u0227\x03\x02\x02\x02,\u0229\x03\x02" +
		"\x02\x02.\u0252\x03\x02\x02\x020\u0260\x03\x02\x02\x022\u0262\x03\x02" +
		"\x02\x024\u026C\x03\x02\x02\x026\u026E\x03\x02\x02\x028\u02C2\x03\x02" +
		"\x02\x02:\u02C4\x03\x02\x02\x02<\u02C8\x03\x02\x02\x02>\u02D0\x03\x02" +
		"\x02\x02@\u02D8\x03\x02\x02\x02B\u02DC\x03\x02\x02\x02D\u02E3\x03\x02" +
		"\x02\x02F\u02FF\x03\x02\x02\x02H\u0301\x03\x02\x02\x02J\u0304\x03\x02" +
		"\x02\x02L\u030E\x03\x02\x02\x02N\u0310\x03\x02\x02\x02P\u0316\x03\x02" +
		"\x02\x02R\u0318\x03\x02\x02\x02T\u0320\x03\x02\x02\x02V\u0328\x03\x02" +
		"\x02\x02X\u032A\x03\x02\x02\x02Z\u032E\x03\x02\x02\x02\\\u0332\x03\x02" +
		"\x02\x02^\u034A\x03\x02\x02\x02`\u034E\x03\x02\x02\x02b\u0350\x03\x02" +
		"\x02\x02d\u0360\x03\x02\x02\x02f\u0362\x03\x02\x02\x02h\u0367\x03\x02" +
		"\x02\x02j\u0372\x03\x02\x02\x02l\u0384\x03\x02\x02\x02n\u0398\x03\x02" +
		"\x02\x02p\u03A3\x03\x02\x02\x02r\u03A5\x03\x02\x02\x02t\u03B2\x03\x02" +
		"\x02\x02v\u03B9\x03\x02\x02\x02x\u03BC\x03\x02\x02\x02z\u03C5\x03\x02" +
		"\x02\x02|\u03C9\x03\x02\x02\x02~\u03CD\x03\x02\x02\x02\x80\u03D0\x03\x02" +
		"\x02\x02\x82\u03D8\x03\x02\x02\x02\x84\u03DD\x03\x02\x02\x02\x86\u03EE" +
		"\x03\x02\x02\x02\x88\u03F5\x03\x02\x02\x02\x8A\u03FF\x03\x02\x02\x02\x8C" +
		"\u0408\x03\x02\x02\x02\x8E\u0412\x03\x02\x02\x02\x90\u0425\x03\x02\x02" +
		"\x02\x92\u0427\x03\x02\x02\x02\x94\u0434\x03\x02\x02\x02\x96\u0437\x03" +
		"\x02\x02\x02\x98\u0440\x03\x02\x02\x02\x9A\u044B\x03\x02\x02\x02\x9C\u0458" +
		"\x03\x02\x02\x02\x9E\u047B\x03\x02\x02\x02\xA0\u048E\x03\x02\x02\x02\xA2" +
		"\u0497\x03\x02\x02\x02\xA4\u04A0\x03\x02\x02\x02\xA6\u04B3\x03\x02\x02" +
		"\x02\xA8\u04C7\x03\x02\x02\x02\xAA\u04C9\x03\x02\x02\x02\xAC\u04E0\x03" +
		"\x02\x02\x02\xAE\u04EE\x03\x02\x02\x02\xB0\u04F0\x03\x02\x02\x02\xB2\u04FE" +
		"\x03\x02\x02\x02\xB4\u0518\x03\x02\x02\x02\xB6\u0545\x03\x02\x02\x02\xB8" +
		"\u0547\x03\x02\x02\x02\xBA\u054D\x03\x02\x02\x02\xBC\u054F\x03\x02\x02" +
		"\x02\xBE\u0554\x03\x02\x02\x02\xC0\u0559\x03\x02\x02\x02\xC2\u0565\x03" +
		"\x02\x02\x02\xC4\u0576\x03\x02\x02\x02\xC6\u0578\x03\x02\x02\x02\xC8\u057A" +
		"\x03\x02\x02\x02\xCA\u058D\x03\x02\x02\x02\xCC\u058F\x03\x02\x02\x02\xCE" +
		"\u0592\x03\x02\x02\x02\xD0\u05C3\x03\x02\x02\x02\xD2\u05C5\x03\x02\x02" +
		"\x02\xD4\u05C8\x03\x02\x02\x02\xD6\u05CA\x03\x02\x02\x02\xD8\u05D1\x03" +
		"\x02\x02\x02\xDA\u05D3\x03\x02\x02\x02\xDC\u05D5\x03\x02\x02\x02\xDE\u05D8" +
		"\x03\x02\x02\x02\xE0\u05E1\x03\x02\x02\x02\xE2\u05E6\x03\x02\x02\x02\xE4" +
		"\u05F4\x03\x02\x02\x02\xE6\u0610\x03\x02\x02\x02\xE8\u061A\x03\x02\x02" +
		"\x02\xEA\u0622\x03\x02\x02\x02\xEC\u0627\x03\x02\x02\x02\xEE\u0641\x03" +
		"\x02\x02\x02\xF0\u0643\x03\x02\x02\x02\xF2\u064C\x03\x02\x02\x02\xF4\u0657" +
		"\x03\x02\x02\x02\xF6\u0663\x03\x02\x02\x02\xF8\u067D\x03\x02\x02\x02\xFA" +
		"\u067F\x03\x02\x02\x02\xFC\u0691\x03\x02\x02\x02\xFE\u0693\x03\x02\x02" +
		"\x02\u0100\u0698\x03\x02\x02\x02\u0102\u069B\x03\x02\x02\x02\u0104\u06A9" +
		"\x03\x02\x02\x02\u0106\u06FF\x03\x02\x02\x02\u0108\u071E\x03\x02\x02\x02" +
		"\u010A\u0724\x03\x02\x02\x02\u010C\u079B\x03\x02\x02\x02\u010E\u07AA\x03" +
		"\x02\x02\x02\u0110\u07B0\x03\x02\x02\x02\u0112\u07B2\x03\x02\x02\x02\u0114" +
		"\u07B4\x03\x02\x02\x02\u0116\u07B8\x03\x02\x02\x02\u0118\u07BA\x03\x02" +
		"\x02\x02\u011A\u07BF\x03\x02\x02\x02\u011C\u07C6\x03\x02\x02\x02\u011E" +
		"\u07CA\x03\x02\x02\x02\u0120\u07CF\x03\x02\x02\x02\u0122\u07D9\x03\x02" +
		"\x02\x02\u0124\u07DC\x03\x02\x02\x02\u0126\u07E3\x03\x02\x02\x02\u0128" +
		"\u07E9\x03\x02\x02\x02\u012A\u07F3\x03\x02\x02\x02\u012C\u07F5\x03\x02" +
		"\x02\x02\u012E\u07F9\x03\x02\x02\x02\u0130\u0804\x03\x02\x02\x02\u0132" +
		"\u0806\x03\x02\x02\x02\u0134\u0808\x03\x02\x02\x02\u0136\u080A\x03\x02" +
		"\x02\x02\u0138\u080F\x03\x02\x02\x02\u013A\u0811\x03\x02\x02\x02\u013C" +
		"\u0813\x03\x02\x02\x02\u013E\u0815\x03\x02\x02\x02\u0140\u0817\x03\x02" +
		"\x02\x02\u0142\u0819\x03\x02\x02\x02\u0144\u0821\x03\x02\x02\x02\u0146" +
		"\u0824\x03\x02\x02\x02\u0148\u0828\x03\x02\x02\x02\u014A\u082B\x03\x02" +
		"\x02\x02\u014C\u0836\x03\x02\x02\x02\u014E\u0840\x03\x02\x02\x02\u0150" +
		"\u0846\x03\x02\x02\x02\u0152\u084E\x03\x02\x02\x02\u0154\u085E\x03\x02" +
		"\x02\x02\u0156\u0867\x03\x02\x02\x02\u0158\u0869\x03\x02\x02\x02\u015A" +
		"\u086B\x03\x02\x02\x02\u015C\u087B\x03\x02\x02\x02\u015E\u087D\x03\x02" +
		"\x02\x02\u0160\u0880\x03\x02\x02\x02\u0162\u0882\x03\x02\x02\x02\u0164" +
		"\u0884\x03\x02\x02\x02\u0166\u0886\x03\x02\x02\x02\u0168\u0888\x03\x02" +
		"\x02\x02\u016A\u088A\x03\x02\x02\x02\u016C\u088C\x03\x02\x02\x02\u016E" +
		"\u088E\x03\x02\x02\x02\u0170\u0890\x03\x02\x02\x02\u0172\u0892\x03\x02" +
		"\x02\x02\u0174\u0175\x05\x04\x03\x02\u0175\u0176\x07\x02\x02\x03\u0176" +
		"\x03\x03\x02\x02\x02\u0177\u0178\x05\x06\x04\x02\u0178\u0179\x07\x02\x02" +
		"\x03\u0179\x05\x03\x02\x02\x02\u017A\u017D\x05\b\x05\x02\u017B\u017D\x05" +
		"\n\x06\x02\u017C\u017A\x03\x02\x02\x02\u017C\u017B\x03\x02\x02\x02\u017D" +
		"\u0180\x03\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017E\u017F\x03\x02" +
		"\x02\x02\u017F\x07\x03\x02\x02\x02\u0180\u017E\x03\x02\x02\x02\u0181\u0182" +
		"\x05\f\x07\x02\u0182\u0183\x07\u018A\x02\x02\u0183\u01A3\x03\x02\x02\x02" +
		"\u0184\u0185\x05\x0E\b\x02\u0185\u0186\x07\u018A\x02\x02\u0186\u01A3\x03" +
		"\x02\x02\x02\u0187\u0188\x05\x10\t\x02\u0188\u0189\x07\u018A\x02\x02\u0189" +
		"\u01A3\x03\x02\x02\x02\u018A\u018B\x05\x12\n\x02\u018B\u018C\x07\u018A" +
		"\x02\x02\u018C\u01A3\x03\x02\x02\x02\u018D\u018E\x05\x18\r\x02\u018E\u018F" +
		"\x07\u018A\x02\x02\u018F\u01A3\x03\x02\x02\x02\u0190\u0191\x05\x1C\x0F" +
		"\x02\u0191\u0192\x07\u018A\x02\x02\u0192\u01A3\x03\x02\x02\x02\u0193\u0194" +
		"\x05\x1E\x10\x02\u0194\u0195\x07\u018A\x02\x02\u0195\u01A3\x03\x02\x02" +
		"\x02\u0196\u0197\x05 \x11\x02\u0197\u0198\x07\u018A\x02\x02\u0198\u01A3" +
		"\x03\x02\x02\x02\u0199\u019A\x05\"\x12\x02\u019A\u019B\x07\u018A\x02\x02" +
		"\u019B\u01A3\x03\x02\x02\x02\u019C\u019D\x05$\x13\x02\u019D\u019E\x07" +
		"\u018A\x02\x02\u019E\u01A3\x03\x02\x02\x02\u019F\u01A0\x05&\x14\x02\u01A0" +
		"\u01A1\x07\u018A\x02\x02\u01A1\u01A3\x03\x02\x02\x02\u01A2\u0181\x03\x02" +
		"\x02\x02\u01A2\u0184\x03\x02\x02\x02\u01A2\u0187\x03\x02\x02\x02\u01A2" +
		"\u018A\x03\x02\x02\x02\u01A2\u018D\x03\x02\x02\x02\u01A2\u0190\x03\x02" +
		"\x02\x02\u01A2\u0193\x03\x02\x02\x02\u01A2\u0196\x03\x02\x02\x02\u01A2" +
		"\u0199\x03\x02\x02\x02\u01A2\u019C\x03\x02\x02\x02\u01A2\u019F\x03\x02" +
		"\x02\x02\u01A3\t\x03\x02\x02\x02\u01A4\u01A5\x07\u018A\x02\x02\u01A5\v" +
		"\x03\x02\x02\x02\u01A6\u01B5\x05*\x16\x02\u01A7\u01B5\x05h5\x02\u01A8" +
		"\u01B5\x05j6\x02\u01A9\u01B5\x05l7\x02\u01AA\u01B5\x05f4\x02\u01AB\u01B5" +
		"\x05r:\x02\u01AC\u01B5\x05\x80A\x02\u01AD\u01B5\x05\x82B\x02\u01AE\u01B5" +
		"\x05\x84C\x02\u01AF\u01B5\x05\x86D\x02\u01B0\u01B5\x05\x88E\x02\u01B1" +
		"\u01B5\x05\x8AF\x02\u01B2\u01B5\x05\x8CG\x02\u01B3\u01B5\x05\x8EH\x02" +
		"\u01B4\u01A6\x03\x02\x02\x02\u01B4\u01A7\x03\x02\x02\x02\u01B4\u01A8\x03" +
		"\x02\x02\x02\u01B4\u01A9\x03\x02\x02\x02\u01B4\u01AA\x03\x02\x02\x02\u01B4" +
		"\u01AB\x03\x02\x02\x02\u01B4\u01AC\x03\x02\x02\x02\u01B4\u01AD\x03\x02" +
		"\x02\x02\u01B4\u01AE\x03\x02\x02\x02\u01B4\u01AF\x03\x02\x02\x02\u01B4" +
		"\u01B0\x03\x02\x02\x02\u01B4\u01B1\x03\x02\x02\x02\u01B4\u01B2\x03\x02" +
		"\x02\x02\u01B4\u01B3\x03\x02\x02\x02\u01B5\r\x03\x02\x02\x02\u01B6\u01B9" +
		"\x05\x9EP\x02\u01B7\u01B9\x05\x90I\x02\u01B8\u01B6\x03\x02\x02\x02\u01B8" +
		"\u01B7\x03\x02\x02\x02\u01B9\x0F\x03\x02\x02\x02\u01BA\u01BB\t\x02\x02" +
		"\x02\u01BB\u01BC\x05\u0140\xA1\x02\u01BC\x11\x03\x02\x02\x02\u01BD\u01C1" +
		"\x07\xF8\x02\x02\u01BE\u01C2\x05\x14\v\x02\u01BF\u01C0\x07g\x02\x02\u01C0" +
		"\u01C2\x07\xFD\x02\x02\u01C1\u01BE\x03\x02\x02\x02\u01C1\u01BF\x03\x02" +
		"\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C6\x03\x02\x02\x02\u01C3" +
		"\u01C7\x05\x0E\b\x02\u01C4\u01C7\x05\x92J\x02\u01C5\u01C7\x05\x9CO\x02" +
		"\u01C6\u01C3\x03\x02\x02\x02\u01C6\u01C4\x03\x02\x02\x02\u01C6\u01C5\x03" +
		"\x02\x02\x02\u01C7\x13\x03\x02\x02\x02\u01C8\u01CD\x05\x16\f\x02\u01C9" +
		"\u01CA\x07\u0189\x02\x02\u01CA\u01CC\x05\x16\f\x02\u01CB\u01C9\x03\x02" +
		"\x02\x02\u01CC\u01CF\x03\x02\x02\x02\u01CD\u01CB\x03\x02\x02\x02\u01CD" +
		"\u01CE\x03\x02\x02\x02\u01CE\x15\x03\x02\x02\x02\u01CF\u01CD\x03\x02\x02" +
		"\x02\u01D0\u01D1\t\x03\x02\x02\u01D1\x17\x03\x02\x02\x02\u01D2\u01D3\x07" +
		"\xA3\x02\x02\u01D3\u01D4\x07\x0E\x02\x02\u01D4\u01D9\x05\u0138\x9D\x02" +
		"\u01D5\u01D6\x07\xA3\x02\x02\u01D6\u01D9\x05\u013A\x9E\x02\u01D7\u01D9" +
		"\x05\x1A\x0E\x02\u01D8\u01D2\x03\x02\x02\x02\u01D8\u01D5\x03\x02\x02\x02" +
		"\u01D8\u01D7\x03\x02\x02\x02\u01D9\x19\x03\x02\x02\x02\u01DA\u01DB\x07" +
		"\xA3\x02\x02\u01DB\u01DC\x07V\x02\x02\u01DC\u01E1\x05\u0142\xA2\x02\u01DD" +
		"\u01DE\x07\u0189\x02\x02\u01DE\u01E0\x05\u0142\xA2\x02\u01DF\u01DD\x03" +
		"\x02\x02\x02\u01E0\u01E3\x03\x02\x02\x02\u01E1\u01DF\x03\x02\x02\x02\u01E1" +
		"\u01E2\x03\x02\x02\x02\u01E2\x1B\x03\x02\x02\x02\u01E3\u01E1\x03\x02\x02" +
		"\x02\u01E4\u01E5\x07\u014E\x02\x02\u01E5\u0208\t\x04\x02\x02\u01E6\u01E7" +
		"\x07\u014E\x02\x02\u01E7\u01E8\x07\xE0\x02\x02\u01E8\u0208\t\x05\x02\x02" +
		"\u01E9\u01EA\x07\u014E\x02\x02\u01EA\u01ED\x07\x97\x02\x02\u01EB\u01EC" +
		"\t\x06\x02\x02\u01EC\u01EE\x05\u0140\xA1\x02\u01ED\u01EB\x03\x02\x02\x02" +
		"\u01ED\u01EE\x03\x02\x02\x02\u01EE\u01F0\x03\x02\x02\x02\u01EF\u01F1\x05" +
		"\u0108\x85\x02\u01F0\u01EF\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02" +
		"\u01F1\u0208\x03\x02\x02\x02\u01F2\u01F3\x07\u014E\x02\x02\u01F3\u01F4" +
		"\x07\x16\x02\x02\u01F4\u01F5\t\x06\x02\x02\u01F5\u01F7\x05\u0142\xA2\x02" +
		"\u01F6\u01F8\x05\u0108\x85\x02\u01F7\u01F6\x03\x02\x02\x02\u01F7\u01F8" +
		"\x03\x02\x02\x02\u01F8\u0208\x03\x02\x02\x02\u01F9\u01FA\x07\u014E\x02" +
		"\x02\u01FA\u01FB\x07\xDD\x02\x02\u01FB\u01FC\t\x07\x02\x02\u01FC\u0208" +
		"\x05\u0142\xA2\x02\u01FD\u01FF\x07\u014E\x02\x02\u01FE\u0200\x07\u016D" +
		"\x02\x02\u01FF\u01FE\x03\x02\x02\x02\u01FF\u0200\x03\x02\x02\x02\u0200" +
		"\u0201\x03\x02\x02\x02\u0201\u0208\x075\x02\x02\u0202\u0204\x07\u014E" +
		"\x02\x02\u0203\u0205\x07\xFF\x02\x02\u0204\u0203\x03\x02\x02\x02\u0204" +
		"\u0205\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206\u0208\x07V\x02" +
		"\x02\u0207\u01E4\x03\x02\x02\x02\u0207\u01E6\x03\x02\x02\x02\u0207\u01E9" +
		"\x03\x02\x02\x02\u0207\u01F2\x03\x02\x02\x02\u0207\u01F9\x03\x02\x02\x02" +
		"\u0207\u01FD\x03\x02\x02\x02\u0207\u0202\x03\x02\x02\x02\u0208\x1D\x03" +
		"\x02\x02\x02\u0209\u020A\x07N\x02\x02\u020A\u020B\x07\u0125\x02\x02\u020B" +
		"\u020E\x05\u0142\xA2\x02\u020C\u020D\x07\u0176\x02\x02\u020D\u020F\x05" +
		"\u014A\xA6\x02\u020E\u020C\x03\x02\x02\x02\u020E\u020F\x03\x02\x02\x02" +
		"\u020F\x1F\x03\x02\x02\x02\u0210\u0211\x07\xA1\x02\x02\u0211\u0212\x07" +
		"\u0125\x02\x02\u0212\u0213\x05\u0142\xA2\x02\u0213!\x03\x02\x02\x02\u0214" +
		"\u0216\x07\u014D\x02\x02\u0215\u0217\x05\u014C\xA7\x02\u0216\u0215\x03" +
		"\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217#\x03\x02\x02\x02\u0218" +
		"\u021A\x07\u0143\x02\x02\u0219\u021B\x05\u014E\xA8\x02\u021A\u0219\x03" +
		"\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B%\x03\x02\x02\x02\u021C" +
		"\u021D\t\b\x02\x02\u021D\u021E\x07B\x02\x02\u021E\u021F\x05p9\x02\u021F" +
		"\'\x03\x02\x02\x02\u0220\u0222\x07\u019F\x02\x02\u0221\u0220\x03\x02\x02" +
		"\x02\u0222\u0223\x03\x02\x02\x02\u0223\u0221\x03\x02\x02\x02\u0223\u0224" +
		"\x03\x02\x02\x02\u0224)\x03\x02\x02\x02\u0225\u0228\x05,\x17\x02\u0226" +
		"\u0228\x05.\x18\x02\u0227\u0225\x03\x02\x02\x02\u0227\u0226\x03\x02\x02" +
		"\x02\u0228+\x03\x02\x02\x02\u0229\u022B\x07\xDD\x02\x02\u022A\u022C\x07" +
		"\x98\x02\x02\u022B\u022A\x03\x02\x02\x02\u022B\u022C\x03\x02\x02\x02\u022C" +
		"\u022D\x03\x02\x02\x02\u022D\u022F\x07\u015A\x02\x02\u022E\u0230\x05\u0146" +
		"\xA4\x02\u022F\u022E\x03\x02\x02\x02\u022F\u0230\x03\x02\x02\x02\u0230" +
		"\u0231\x03\x02\x02\x02\u0231\u0232\x05\u013E\xA0\x02\u0232\u0233\x07\u0185" +
		"\x02\x02\u0233\u0238\x050\x19\x02\u0234\u0235\x07\u0189\x02\x02\u0235" +
		"\u0237\x050\x19\x02\u0236\u0234\x03\x02\x02\x02\u0237\u023A\x03\x02\x02" +
		"\x02\u0238\u0236\x03\x02\x02\x02\u0238\u0239\x03\x02\x02\x02\u0239\u023D" +
		"\x03\x02\x02\x02\u023A\u0238\x03\x02\x02\x02\u023B\u023C\x07\u0189\x02" +
		"\x02\u023C\u023E\x05R*\x02\u023D\u023B\x03\x02\x02\x02\u023D\u023E\x03" +
		"\x02\x02\x02\u023E\u0241\x03\x02\x02\x02\u023F\u0240\x07\u0189\x02\x02" +
		"\u0240\u0242\x05T+\x02\u0241\u023F\x03\x02\x02\x02\u0241\u0242\x03\x02" +
		"\x02\x02\u0242\u0245\x03\x02\x02\x02\u0243\u0244\x07\u0189\x02\x02\u0244" +
		"\u0246\x05X-\x02\u0245\u0243\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02" +
		"\u0246\u0247\x03\x02\x02\x02\u0247\u0249\x07\u0186\x02\x02\u0248\u024A" +
		"\x05H%\x02\u0249\u0248\x03\x02\x02\x02\u0249\u024A\x03\x02\x02\x02\u024A" +
		"\u024C\x03\x02\x02\x02\u024B\u024D\x05Z.\x02\u024C\u024B\x03\x02\x02\x02" +
		"\u024C\u024D\x03\x02\x02\x02\u024D\u024E\x03\x02\x02\x02\u024E\u0250\x05" +
		"\u0144\xA3\x02\u024F\u0251\x05b2\x02\u0250\u024F\x03\x02\x02\x02\u0250" +
		"\u0251\x03\x02\x02\x02\u0251-\x03\x02\x02\x02\u0252\u0253\x07\xDD\x02" +
		"\x02\u0253\u0255\x07\u015A\x02\x02\u0254\u0256\x05\u0146\xA4\x02\u0255" +
		"\u0254\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256\u0257\x03\x02" +
		"\x02\x02\u0257\u0258\x05\u013E\xA0\x02\u0258\u025B\x05\u0144\xA3\x02\u0259" +
		"\u025A\x07\xBB\x02\x02\u025A\u025C\x05\x9EP\x02\u025B\u0259\x03\x02\x02" +
		"\x02\u025B\u025C\x03\x02\x02\x02\u025C/\x03\x02\x02\x02\u025D\u0261\x05" +
		"2\x1A\x02\u025E\u0261\x05J&\x02\u025F\u0261\x05N(\x02\u0260\u025D\x03" +
		"\x02\x02\x02\u0260\u025E\x03\x02\x02\x02\u0260\u025F\x03\x02\x02\x02\u0261" +
		"1\x03\x02\x02\x02\u0262\u0263\x054\x1B\x02\u0263\u0265\x058\x1D\x02\u0264" +
		"\u0266\x05F$\x02\u0265\u0264\x03\x02\x02\x02\u0265\u0266\x03\x02\x02\x02" +
		"\u0266\u0268\x03\x02\x02\x02\u0267\u0269\x05H%\x02\u0268\u0267\x03\x02" +
		"\x02\x02\u0268\u0269\x03\x02\x02\x02\u02693\x03\x02\x02\x02\u026A\u026D" +
		"\x05\u0142\xA2\x02\u026B\u026D\x05\u0102\x82\x02\u026C\u026A\x03\x02\x02" +
		"\x02\u026C\u026B\x03\x02\x02\x02\u026D5\x03\x02\x02\x02\u026E\u026F\x07" +
		"\u0185\x02\x02\u026F\u0274\x054\x1B\x02\u0270\u0271\x07\u0189\x02\x02" +
		"\u0271\u0273\x054\x1B\x02\u0272\u0270\x03\x02\x02\x02\u0273\u0276\x03" +
		"\x02\x02\x02\u0274\u0272\x03\x02\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275" +
		"\u0277\x03\x02\x02\x02\u0276\u0274\x03\x02\x02\x02\u0277\u0278\x07\u0186" +
		"\x02\x02\u02787\x03\x02\x02\x02\u0279\u02C3\t\t\x02\x02\u027A\u027C\t" +
		"\n\x02\x02\u027B\u027D\x05:\x1E\x02\u027C\u027B\x03\x02\x02\x02\u027C" +
		"\u027D\x03\x02\x02\x02\u027D\u02C3\x03\x02\x02\x02\u027E\u0280\x07\u015E" +
		"\x02\x02\u027F\u0281\x05:\x1E\x02\u0280\u027F\x03\x02\x02\x02\u0280\u0281" +
		"\x03\x02\x02\x02\u0281\u0288\x03\x02\x02\x02\u0282\u0284\t\v\x02\x02\u0283" +
		"\u0285\x07\u011C\x02\x02\u0284\u0283\x03\x02\x02\x02\u0284\u0285\x03\x02" +
		"\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286\u0287\x07\u015D\x02\x02\u0287" +
		"\u0289\x07\xB2\x02\x02\u0288\u0282\x03\x02\x02\x02\u0288\u0289\x03\x02" +
		"\x02\x02\u0289\u02C3\x03\x02\x02\x02\u028A\u028C\x07\u015F\x02\x02\u028B" +
		"\u028D\x05:\x1E\x02\u028C\u028B\x03\x02\x02\x02\u028C\u028D\x03\x02\x02" +
		"\x02\u028D\u0294\x03\x02\x02\x02\u028E\u0290\t\v\x02\x02\u028F\u0291\x07" +
		"\u011C\x02\x02\u0290\u028F\x03\x02\x02\x02\u0290\u0291\x03\x02\x02\x02" +
		"\u0291\u0292\x03\x02\x02\x02\u0292\u0293\x07\u015D\x02\x02\u0293\u0295" +
		"\x07\xB2\x02\x02\u0294\u028E\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02" +
		"\u0295\u02C3\x03\x02\x02\x02\u0296\u0298\x07\u0160\x02\x02\u0297\u0299" +
		"\x05:\x1E\x02\u0298\u0297\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02" +
		"\u0299\u02A0\x03\x02\x02\x02\u029A\u029C\t\v\x02\x02\u029B\u029D\x07\u011C" +
		"\x02\x02\u029C\u029B\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D" +
		"\u029E\x03\x02\x02\x02\u029E\u029F\x07\u015D\x02\x02\u029F\u02A1\x07\xB2" +
		"\x02\x02\u02A0\u029A\x03\x02\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1" +
		"\u02C3\x03\x02\x02\x02\u02A2\u02A4\x07\u0161\x02\x02\u02A3\u02A5\x05:" +
		"\x1E\x02\u02A4\u02A3\x03\x02\x02\x02\u02A4\u02A5\x03\x02\x02\x02\u02A5" +
		"\u02AC\x03\x02\x02\x02\u02A6\u02A8\t\v\x02\x02\u02A7\u02A9\x07\u011C\x02" +
		"\x02\u02A8\u02A7\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9\u02AA" +
		"\x03\x02\x02\x02\u02AA\u02AB\x07\u015D\x02\x02\u02AB\u02AD\x07\xB2\x02" +
		"\x02\u02AC\u02A6\x03\x02\x02\x02\u02AC\u02AD\x03\x02\x02\x02\u02AD\u02C3" +
		"\x03\x02\x02\x02\u02AE\u02B0\t\f\x02\x02\u02AF\u02B1\x05<\x1F\x02\u02B0" +
		"\u02AF\x03\x02\x02\x02\u02B0\u02B1\x03\x02\x02\x02\u02B1\u02C3\x03\x02" +
		"\x02\x02\u02B2\u02B4\t\r\x02\x02\u02B3\u02B5\x05@!\x02\u02B4\u02B3\x03" +
		"\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02C3\x03\x02\x02\x02\u02B6" +
		"\u02B8\x07O\x02\x02\u02B7\u02B9\x05B\"\x02\u02B8\u02B7\x03\x02\x02\x02" +
		"\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02C3\x03\x02\x02\x02\u02BA\u02BC\x07" +
		"\u0149\x02\x02\u02BB\u02BD\x05D#\x02\u02BC\u02BB\x03\x02\x02\x02\u02BC" +
		"\u02BD\x03\x02\x02\x02\u02BD\u02C3\x03\x02\x02\x02\u02BE\u02C0\x07u\x02" +
		"\x02\u02BF\u02C1\x05> \x02\u02C0\u02BF\x03\x02\x02\x02\u02C0\u02C1\x03" +
		"\x02\x02\x02\u02C1\u02C3\x03\x02\x02\x02\u02C2\u0279\x03\x02\x02\x02\u02C2" +
		"\u027A\x03\x02\x02\x02\u02C2\u027E\x03\x02\x02\x02\u02C2\u028A\x03\x02" +
		"\x02\x02\u02C2\u0296\x03\x02\x02\x02\u02C2\u02A2\x03\x02\x02\x02\u02C2" +
		"\u02AE\x03\x02\x02\x02\u02C2\u02B2\x03\x02\x02\x02\u02C2\u02B6\x03\x02" +
		"\x02\x02\u02C2\u02BA\x03\x02\x02\x02\u02C2\u02BE\x03\x02\x02\x02\u02C3" +
		"9\x03\x02\x02\x02\u02C4\u02C5\x07\u0185\x02\x02\u02C5\u02C6\x05\u0162" +
		"\xB2\x02\u02C6\u02C7\x07\u0186\x02\x02\u02C7;\x03\x02\x02\x02\u02C8\u02C9" +
		"\x07\u0185\x02\x02\u02C9\u02CC\x05\u0162\xB2\x02\u02CA\u02CB\x07\u0189" +
		"\x02\x02\u02CB\u02CD\x05\u0162\xB2\x02\u02CC\u02CA\x03\x02\x02\x02\u02CC" +
		"\u02CD\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02CF\x07\u0186" +
		"\x02\x02\u02CF=\x03\x02\x02\x02\u02D0\u02D1\x07\u0185\x02\x02\u02D1\u02D4" +
		"\x05\u0160\xB1\x02\u02D2\u02D3\x07\u0189\x02\x02\u02D3\u02D5\x05\u0160" +
		"\xB1\x02\u02D4\u02D2\x03\x02\x02\x02\u02D4\u02D5\x03\x02\x02\x02\u02D5" +
		"\u02D6\x03\x02\x02\x02\u02D6\u02D7\x07\u0186\x02\x02\u02D7?\x03\x02\x02" +
		"\x02\u02D8\u02D9\x07\u017C\x02\x02\u02D9\u02DA\x058\x1D\x02\u02DA\u02DB" +
		"\x07\u017B\x02\x02\u02DBA\x03\x02\x02\x02\u02DC\u02DD\x07\u017C\x02\x02" +
		"\u02DD\u02DE\x058\x1D\x02\u02DE\u02DF\x07\u0189\x02\x02\u02DF\u02E0\x05" +
		"8\x1D\x02\u02E0\u02E1\x03\x02\x02\x02\u02E1\u02E2\x07\u017B\x02\x02\u02E2" +
		"C\x03\x02\x02\x02\u02E3\u02E4\x07\u017C\x02\x02\u02E4\u02E5\x054\x1B\x02" +
		"\u02E5\u02EC\x058\x1D\x02\u02E6\u02E7\x07\u0189\x02\x02\u02E7\u02E8\x05" +
		"4\x1B\x02\u02E8\u02E9\x058\x1D\x02\u02E9\u02EB\x03\x02\x02\x02\u02EA\u02E6" +
		"\x03\x02\x02\x02\u02EB\u02EE\x03\x02\x02\x02\u02EC\u02EA\x03\x02\x02\x02" +
		"\u02EC\u02ED\x03\x02\x02\x02\u02ED\u02EF\x03\x02\x02\x02\u02EE\u02EC\x03" +
		"\x02\x02\x02\u02EF\u02F0\x07\u017B\x02\x02\u02F0E\x03\x02\x02\x02\u02F1" +
		"\u02F2\x07\xD9\x02\x02\u02F2\u02F4\x05V,\x02\u02F3\u02F1\x03\x02\x02\x02" +
		"\u02F3\u02F4\x03\x02\x02\x02\u02F4\u02F5\x03\x02\x02\x02\u02F5\u02F6\x07" +
		"\u0140\x02\x02\u02F6\u02F9\x07G\x02\x02\u02F7\u02F8\x07\u012C\x02\x02" +
		"\u02F8\u02FA\x07$\x02\x02\u02F9\u02F7\x03\x02\x02\x02\u02F9\u02FA\x03" +
		"\x02\x02\x02\u02FA\u0300\x03\x02\x02\x02\u02FB\u02FD\x07\u012C\x02\x02" +
		"\u02FC\u02FB\x03\x02\x02\x02\u02FC\u02FD\x03\x02\x02\x02\u02FD\u02FE\x03" +
		"\x02\x02\x02\u02FE\u0300\x07\u012D\x02\x02\u02FF\u02F3\x03\x02\x02\x02" +
		"\u02FF\u02FC\x03\x02\x02\x02\u0300G\x03\x02\x02\x02\u0301\u0302\x07\x14" +
		"\x02\x02\u0302\u0303\x07\u019A\x02\x02\u0303I\x03\x02\x02\x02\u0304\u0305" +
		"\x054\x1B\x02\u0305\u0306\x058\x1D\x02\u0306\u0309\x07\u0121\x02\x02\u0307" +
		"\u0308\x07\xFE\x02\x02\u0308\u030A\x05L\'\x02\u0309\u0307\x03\x02\x02" +
		"\x02\u0309\u030A\x03\x02\x02\x02\u030A\u030C\x03\x02\x02\x02\u030B\u030D" +
		"\x07\xAA\x02\x02\u030C\u030B\x03\x02\x02\x02\u030C\u030D\x03\x02\x02\x02" +
		"\u030DK\x03\x02\x02\x02\u030E\u030F\x07\u019A\x02\x02\u030FM\x03\x02\x02" +
		"\x02\u0310\u0311\x054\x1B\x02\u0311\u0312\x07\xBB\x02\x02\u0312\u0314" +
		"\x05P)\x02\u0313\u0315\x05H%\x02\u0314\u0313\x03\x02\x02\x02\u0314\u0315" +
		"\x03\x02\x02\x02\u0315O\x03\x02\x02\x02\u0316\u0317\x05\u0102\x82\x02" +
		"\u0317Q\x03\x02\x02\x02\u0318\u0319\x07\xAB\x02\x02\u0319\u031A\x07\xFD" +
		"\x02\x02\u031A\u031B\x05\u0102\x82\x02\u031B\u031C\x07\xBB\x02\x02\u031C" +
		"\u031D\x05\u0102\x82\x02\u031DS\x03\x02\x02\x02\u031E\u031F\x07\xD9\x02" +
		"\x02\u031F\u0321\x05V,\x02\u0320\u031E\x03\x02\x02\x02\u0320\u0321\x03" +
		"\x02\x02\x02\u0321\u0322\x03\x02\x02\x02\u0322\u0323\x07\u0140\x02\x02" +
		"\u0323\u0324\x07G\x02\x02\u0324\u0325\x056\x1C\x02\u0325\u0326\x07\u012C" +
		"\x02\x02\u0326\u0327\x07$\x02\x02\u0327U\x03\x02\x02\x02\u0328\u0329\x05" +
		"\u0130\x99\x02\u0329W\x03\x02\x02\x02\u032A\u032B\x07\u013D\x02\x02\u032B" +
		"\u032C\x07\xFD\x02\x02\u032C\u032D\x07\u0158\x02\x02\u032DY\x03\x02\x02" +
		"\x02\u032E\u032F\x07a\x02\x02\u032F\u0330\x07\xC7\x02\x02\u0330\u0331" +
		"\x05\\/\x02\u0331[\x03\x02\x02\x02\u0332\u0333\x07\u0185\x02\x02\u0333" +
		"\u0338\x05^0\x02\u0334\u0335\x07\u0189\x02\x02\u0335\u0337\x05^0\x02\u0336" +
		"\u0334\x03\x02\x02\x02\u0337\u033A\x03\x02\x02\x02\u0338\u0336\x03\x02" +
		"\x02\x02\u0338";
	private static readonly _serializedATNSegment2: string =
		"\u0339\x03\x02\x02\x02\u0339\u033B\x03\x02\x02\x02\u033A\u0338\x03\x02" +
		"\x02\x02\u033B\u033C\x07\u0186\x02\x02\u033C]\x03\x02\x02\x02\u033D\u034B" +
		"\x05\u0116\x8C\x02\u033E\u033F\x05\u0130\x99\x02\u033F\u0340\x07\u0185" +
		"\x02\x02\u0340\u0345\x05`1\x02\u0341\u0342\x07\u0189\x02\x02\u0342\u0344" +
		"\x05`1\x02\u0343\u0341\x03\x02\x02\x02\u0344\u0347\x03\x02\x02\x02\u0345" +
		"\u0343\x03\x02\x02\x02\u0345\u0346\x03\x02\x02\x02\u0346\u0348\x03\x02" +
		"\x02\x02\u0347\u0345\x03\x02\x02\x02\u0348\u0349\x07\u0186\x02\x02\u0349" +
		"\u034B\x03\x02\x02\x02\u034A\u033D\x03\x02\x02\x02\u034A\u033E\x03\x02" +
		"\x02\x02\u034B_\x03\x02\x02\x02\u034C\u034F\x05\u0116\x8C\x02\u034D\u034F" +
		"\x05\u015C\xAF\x02\u034E\u034C\x03\x02\x02\x02\u034E\u034D\x03\x02\x02" +
		"\x02\u034Fa\x03\x02\x02\x02\u0350\u0351\x07\u011A\x02\x02\u0351\u035A" +
		"\x05\u0140\xA1\x02\u0352\u0356\x07\u0185\x02\x02\u0353\u0355\x05d3\x02" +
		"\u0354\u0353\x03\x02\x02\x02\u0355\u0358\x03\x02\x02\x02\u0356\u0354\x03" +
		"\x02\x02\x02\u0356\u0357\x03\x02\x02\x02\u0357\u0359\x03\x02\x02\x02\u0358" +
		"\u0356\x03\x02\x02\x02\u0359\u035B\x07\u0186\x02\x02\u035A\u0352\x03\x02" +
		"\x02\x02\u035A\u035B\x03\x02\x02\x02\u035Bc\x03\x02\x02\x02\u035C\u035D" +
		"\t\x0E\x02\x02\u035D\u0361\t\x0F\x02\x02\u035E\u035F\t\x10\x02\x02\u035F" +
		"\u0361\t\x11\x02\x02\u0360\u035C\x03\x02\x02\x02\u0360\u035E\x03\x02\x02" +
		"\x02\u0361e\x03\x02\x02\x02\u0362\u0363\x07\xDD\x02\x02\u0363\u0364\x07" +
		"\x0E\x02\x02\u0364\u0365\x05\u0142\xA2\x02\u0365\u0366\x05\u0144\xA3\x02" +
		"\u0366g\x03\x02\x02\x02\u0367\u0368\x07\xDD\x02\x02\u0368\u036A\x07\x1B" +
		"\x02\x02\u0369\u036B\x05\u0146\xA4\x02\u036A\u0369\x03\x02\x02\x02\u036A" +
		"\u036B\x03\x02\x02\x02\u036B\u036C\x03\x02\x02\x02\u036C\u036E\x05\u013C" +
		"\x9F\x02\u036D\u036F\x05H%\x02\u036E\u036D\x03\x02\x02\x02\u036E\u036F" +
		"\x03\x02\x02\x02\u036F\u0370\x03\x02\x02\x02\u0370\u0371\x05\u0144\xA3" +
		"\x02\u0371i\x03\x02\x02\x02\u0372\u0374\x07\xDD\x02\x02\u0373\u0375\x07" +
		"\x98\x02\x02\u0374\u0373\x03\x02\x02\x02\u0374\u0375\x03\x02\x02\x02\u0375" +
		"\u0376\x03\x02\x02\x02\u0376\u0378\x07\xA8\x02\x02\u0377\u0379\x05\u0146" +
		"\xA4\x02\u0378\u0377\x03\x02\x02\x02\u0378\u0379\x03\x02\x02\x02\u0379" +
		"\u037A\x03\x02\x02\x02\u037A\u037C\x05\u0142\xA2\x02\u037B\u037D\x056" +
		"\x1C\x02\u037C\u037B\x03\x02\x02\x02\u037C\u037D\x03\x02\x02\x02\u037D" +
		"\u037F\x03\x02\x02\x02\u037E\u0380\x05H%\x02\u037F\u037E\x03\x02\x02\x02" +
		"\u037F\u0380\x03\x02\x02\x02\u0380\u0381\x03\x02\x02\x02\u0381\u0382\x07" +
		"\xBB\x02\x02\u0382\u0383\x05\x9EP\x02\u0383k\x03\x02\x02\x02\u0384\u0388" +
		"\x07\xDD\x02\x02\u0385\u0389\x07\x98\x02\x02\u0386\u0387\x07\x98\x02\x02" +
		"\u0387\u0389\x07\u0157\x02\x02\u0388\u0385\x03\x02\x02\x02\u0388\u0386" +
		"\x03\x02\x02\x02\u0388\u0389\x03\x02\x02\x02\u0389\u038A\x03\x02\x02\x02" +
		"\u038A\u038C\x07\u0100\x02\x02\u038B\u038D\x05\u0146\xA4\x02\u038C\u038B" +
		"\x03\x02\x02\x02\u038C\u038D\x03\x02\x02\x02\u038D\u038E\x03\x02\x02\x02" +
		"\u038E\u038F\x05\u010E\x88\x02\u038F\u0390\x07\xBB\x02\x02\u0390\u0393" +
		"\x05\u0130\x99\x02\u0391\u0392\x07\u0116\x02\x02\u0392\u0394\t\x12\x02" +
		"\x02\u0393\u0391\x03\x02\x02\x02\u0393\u0394\x03\x02\x02\x02\u0394\u0396" +
		"\x03\x02\x02\x02\u0395\u0397\x05n8\x02\u0396\u0395\x03\x02\x02\x02\u0396" +
		"\u0397\x03\x02\x02\x02\u0397m\x03\x02\x02\x02\u0398\u0399\x07\u016E\x02" +
		"\x02\u0399\u039A\x07B\x02\x02\u039A\u03A0\x05p9\x02\u039B\u039C\x07\u0189" +
		"\x02\x02\u039C\u039D\x07B\x02\x02\u039D\u039F\x05p9\x02\u039E\u039B\x03" +
		"\x02\x02\x02\u039F\u03A2\x03\x02\x02\x02\u03A0\u039E\x03\x02\x02\x02\u03A0" +
		"\u03A1\x03\x02\x02\x02\u03A1o\x03\x02\x02\x02\u03A2\u03A0\x03\x02\x02" +
		"\x02\u03A3\u03A4\x07\u019A\x02\x02\u03A4q\x03\x02\x02\x02\u03A5\u03A6" +
		"\x07\xB6\x02\x02\u03A6\u03A8\x07\u015A\x02\x02\u03A7\u03A9\x05\u0148\xA5" +
		"\x02\u03A8\u03A7\x03\x02\x02\x02\u03A8\u03A9\x03\x02\x02\x02\u03A9\u03AA" +
		"\x03\x02\x02\x02\u03AA\u03B0\x05\u0140\xA1\x02\u03AB\u03B1\x05t;\x02\u03AC" +
		"\u03B1\x05v<\x02\u03AD\u03B1\x05x=\x02\u03AE\u03B1\x05z>\x02\u03AF\u03B1" +
		"\x05|?\x02\u03B0\u03AB\x03\x02\x02\x02\u03B0\u03AC\x03\x02\x02\x02\u03B0" +
		"\u03AD\x03\x02\x02\x02\u03B0\u03AE\x03\x02\x02\x02\u03B0\u03AF\x03\x02" +
		"\x02\x02\u03B1s\x03\x02\x02\x02\u03B2\u03B4\x07y\x02\x02\u03B3\u03B5\x05" +
		"\u0142\xA2\x02\u03B4\u03B3\x03\x02\x02\x02\u03B4\u03B5\x03\x02\x02\x02" +
		"\u03B5\u03B6\x03\x02\x02\x02\u03B6\u03B7\x07\u0163\x02\x02\u03B7\u03B8" +
		"\x05\u0142\xA2\x02\u03B8u\x03\x02\x02\x02\u03B9\u03BA\x07\u014D\x02\x02" +
		"\u03BA\u03BB\x05\u014A\xA6\x02\u03BBw\x03\x02\x02\x02\u03BC\u03BD\x07" +
		"\x06\x02\x02\u03BD\u03BE\x07\xD9\x02\x02\u03BE\u03BF\x05V,\x02\u03BF\u03C0" +
		"\x07\u0140\x02\x02\u03C0\u03C1\x07G\x02\x02\u03C1\u03C3\x056\x1C\x02\u03C2" +
		"\u03C4\x05~@\x02\u03C3\u03C2\x03\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02" +
		"\u03C4y\x03\x02\x02\x02\u03C5\u03C6\x07\xEF\x02\x02\u03C6\u03C7\x07\xD9" +
		"\x02\x02\u03C7\u03C8\x05V,\x02\u03C8{\x03\x02\x02\x02\u03C9\u03CA\x07" +
		"\x06\x02\x02\u03CA\u03CB\x07\u0168\x02\x02\u03CB\u03CC\x056\x1C\x02\u03CC" +
		"}\x03\x02\x02\x02\u03CD\u03CE\x07\u012C\x02\x02\u03CE\u03CF\x07$\x02\x02" +
		"\u03CF\x7F\x03\x02\x02\x02\u03D0\u03D1\x07\xB6\x02\x02\u03D1\u03D2\x07" +
		"\xA8\x02\x02\u03D2\u03D6\x05\u0142\xA2\x02\u03D3\u03D7\x05t;\x02\u03D4" +
		"\u03D5\x07\xBB\x02\x02\u03D5\u03D7\x05\x9EP\x02\u03D6\u03D3\x03\x02\x02" +
		"\x02\u03D6\u03D4\x03\x02\x02\x02\u03D7\x81\x03\x02\x02\x02\u03D8\u03D9" +
		"\x07\xB6\x02\x02\u03D9\u03DA\x07\x1B\x02\x02\u03DA\u03DB\x05\u013A\x9E" +
		"\x02\u03DB\u03DC\x05v<\x02\u03DC\x83\x03\x02\x02\x02\u03DD\u03E1\x07\xB6" +
		"\x02\x02\u03DE\u03E2\x07\x98\x02\x02\u03DF\u03E0\x07\x98\x02\x02\u03E0" +
		"\u03E2\x07\u0157\x02\x02\u03E1\u03DE\x03\x02\x02\x02\u03E1\u03DF\x03\x02" +
		"\x02\x02\u03E1\u03E2\x03\x02\x02\x02\u03E2\u03E3\x03\x02\x02\x02\u03E3" +
		"\u03E5\x07\u0100\x02\x02\u03E4\u03E6\x05\u0148\xA5\x02\u03E5\u03E4\x03" +
		"\x02\x02\x02\u03E5\u03E6\x03\x02\x02\x02\u03E6\u03E7\x03\x02\x02\x02\u03E7" +
		"\u03E8\x05\u0142\xA2\x02\u03E8\u03E9\x07\xBB\x02\x02\u03E9\u03EC\x05\u0130" +
		"\x99\x02\u03EA\u03EB\x07\u0116\x02\x02\u03EB\u03ED\t\x12\x02\x02\u03EC" +
		"\u03EA\x03\x02\x02\x02\u03EC\u03ED\x03\x02\x02\x02\u03ED\x85\x03\x02\x02" +
		"\x02\u03EE\u03EF\x07\xEF\x02\x02\u03EF\u03F1\x07\x0E\x02\x02\u03F0\u03F2" +
		"\x05\u0148\xA5\x02\u03F1\u03F0\x03\x02\x02\x02\u03F1\u03F2\x03\x02\x02" +
		"\x02\u03F2\u03F3\x03\x02\x02\x02\u03F3\u03F4\x05\u0138\x9D\x02\u03F4\x87" +
		"\x03\x02\x02\x02\u03F5\u03F7\x07\xEF\x02\x02\u03F6\u03F8\x07\x98\x02\x02" +
		"\u03F7\u03F6\x03\x02\x02\x02\u03F7\u03F8\x03\x02\x02\x02\u03F8\u03F9\x03" +
		"\x02\x02\x02\u03F9\u03FB\x07\u015A\x02\x02\u03FA\u03FC\x05\u0148\xA5\x02" +
		"\u03FB\u03FA\x03\x02\x02\x02\u03FB\u03FC\x03\x02\x02\x02\u03FC\u03FD\x03" +
		"\x02\x02\x02\u03FD\u03FE\x05\u0140\xA1\x02\u03FE\x89\x03\x02\x02\x02\u03FF" +
		"\u0400\x07\xEF\x02\x02\u0400\u0402\x07\x1B\x02\x02\u0401\u0403\x05\u0148" +
		"\xA5\x02\u0402\u0401\x03\x02\x02\x02\u0402\u0403\x03\x02\x02\x02\u0403" +
		"\u0404\x03\x02\x02\x02\u0404\u0406\x05\u013A\x9E\x02\u0405\u0407\t\x13" +
		"\x02\x02\u0406\u0405\x03\x02\x02\x02\u0406\u0407\x03\x02\x02\x02\u0407" +
		"\x8B\x03\x02\x02\x02\u0408\u040A\x07\xEF\x02\x02\u0409\u040B\x07\x98\x02" +
		"\x02\u040A\u0409\x03\x02\x02\x02\u040A\u040B\x03\x02\x02\x02\u040B\u040C" +
		"\x03\x02\x02\x02\u040C\u040E\x07\xA8\x02\x02\u040D\u040F\x05\u0148\xA5" +
		"\x02\u040E\u040D\x03\x02\x02\x02\u040E\u040F\x03\x02\x02\x02\u040F\u0410" +
		"\x03\x02\x02\x02\u0410\u0411\x05\u0142\xA2\x02\u0411\x8D\x03\x02\x02\x02" +
		"\u0412\u0416\x07\xEF\x02\x02\u0413\u0417\x07\x98\x02\x02\u0414\u0415\x07" +
		"\x98\x02\x02\u0415\u0417\x07\u0157\x02\x02\u0416\u0413\x03\x02\x02\x02" +
		"\u0416\u0414\x03\x02\x02\x02\u0416\u0417\x03\x02\x02\x02\u0417\u0418\x03" +
		"\x02\x02\x02\u0418\u041A\x07\u0100\x02\x02\u0419\u041B\x05\u0148\xA5\x02" +
		"\u041A\u0419\x03\x02\x02\x02\u041A\u041B\x03\x02\x02\x02\u041B\u041C\x03" +
		"\x02\x02\x02\u041C\u041D\x05\u010E\x88\x02\u041D\x8F\x03\x02\x02\x02\u041E" +
		"\u0420\x07\xF6\x02\x02\u041F\u041E\x03\x02\x02\x02\u041F\u0420\x03\x02" +
		"\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421\u0426\x05\x92J\x02\u0422\u0426" +
		"\x05\x9AN\x02\u0423\u0424\x07\xF6\x02\x02\u0424\u0426\x05\x9CO\x02\u0425" +
		"\u041F\x03\x02\x02\x02\u0425\u0422\x03\x02\x02\x02\u0425\u0423\x03\x02" +
		"\x02\x02\u0426\x91\x03\x02\x02\x02\u0427\u0428\x07\u010D\x02\x02\u0428" +
		"\u0429\t\x14\x02\x02\u0429\u0432\x05\u0140\xA1\x02\u042A\u042C\x05\x94" +
		"K\x02\u042B\u042A\x03\x02\x02\x02\u042B\u042C\x03\x02\x02\x02\u042C\u042E" +
		"\x03\x02\x02\x02\u042D\u042F\x056\x1C\x02\u042E\u042D\x03\x02\x02\x02" +
		"\u042E\u042F\x03\x02\x02\x02\u042F\u0430\x03\x02\x02\x02\u0430\u0433\x05" +
		"\x9EP\x02\u0431\u0433\x05\x96L\x02\u0432\u042B\x03\x02\x02\x02\u0432\u0431" +
		"\x03\x02\x02\x02\u0433\x93\x03\x02\x02\x02\u0434\u0435\x07\u0139\x02\x02" +
		"\u0435\u0436\x05\u014A\xA6\x02\u0436\x95\x03\x02\x02\x02\u0437\u0438\x07" +
		"\u0170\x02\x02\u0438\u043D\x05\x98M\x02\u0439\u043A\x07\u0189\x02\x02" +
		"\u043A\u043C\x05\x98M\x02\u043B\u0439\x03\x02\x02\x02\u043C\u043F\x03" +
		"\x02\x02\x02\u043D\u043B\x03\x02\x02\x02\u043D\u043E\x03\x02\x02\x02\u043E" +
		"\x97\x03\x02\x02\x02\u043F\u043D\x03\x02\x02\x02\u0440\u0441\x07\u0185" +
		"\x02\x02\u0441\u0446\x05\u015C\xAF\x02\u0442\u0443\x07\u0189\x02\x02\u0443" +
		"\u0445\x05\u015C\xAF\x02\u0444\u0442\x03\x02\x02\x02\u0445\u0448\x03\x02" +
		"\x02\x02\u0446\u0444\x03\x02\x02\x02\u0446\u0447\x03\x02\x02\x02\u0447" +
		"\u0449\x03\x02\x02\x02\u0448\u0446\x03\x02\x02\x02\u0449\u044A\x07\u0186" +
		"\x02\x02\u044A\x99\x03\x02\x02\x02\u044B\u044C\x07\xBF\x02\x02\u044C\u044D" +
		"\x07\x92\x02\x02\u044D\u044E\x07\u014D\x02\x02\u044E\u0452\x07\u018A\x02" +
		"\x02\u044F\u0450\x05\x92J\x02\u0450\u0451\x07\u018A\x02\x02\u0451\u0453" +
		"\x03\x02\x02\x02\u0452\u044F\x03\x02\x02\x02\u0453\u0454\x03\x02\x02\x02" +
		"\u0454\u0452\x03\x02\x02\x02\u0454\u0455\x03\x02\x02\x02\u0455\u0456\x03" +
		"\x02\x02\x02\u0456\u0457\x07\xF2\x02\x02\u0457\x9B\x03\x02\x02\x02\u0458" +
		"\u0459\x07\x92\x02\x02\u0459\u045A\x07\u014D\x02\x02\u045A\u045E\x07\xBF" +
		"\x02\x02\u045B\u045C\x05\x92J\x02\u045C\u045D\x07\u018A\x02\x02\u045D" +
		"\u045F\x03\x02\x02\x02\u045E\u045B\x03\x02\x02\x02\u045F\u0460\x03\x02" +
		"\x02\x02\u0460\u045E\x03\x02\x02\x02\u0460\u0461\x03\x02\x02\x02\u0461" +
		"\u0462\x03\x02\x02\x02\u0462\u0463\x07\xF2\x02\x02\u0463\x9D\x03\x02\x02" +
		"\x02\u0464\u0465\bP\x01\x02\u0465\u047C\x05\xA0Q\x02\u0466\u0467\x05\xA2" +
		"R\x02\u0467\u0468\x05\x9EP\x07\u0468\u047C\x03\x02\x02\x02\u0469\u046A" +
		"\x07\u0185\x02\x02\u046A\u046B\x05\x9EP\x02\u046B\u046C\x07\u0186\x02" +
		"\x02\u046C\u047C\x03\x02\x02\x02\u046D\u046F\x05\xAAV\x02\u046E\u0470" +
		"\x05\xE6t\x02\u046F\u046E\x03\x02\x02\x02\u046F\u0470\x03\x02\x02\x02" +
		"\u0470\u0472\x03\x02\x02\x02\u0471\u0473\x05\xEAv\x02\u0472\u0471\x03" +
		"\x02\x02\x02\u0472\u0473\x03\x02\x02\x02\u0473\u047C\x03\x02\x02\x02\u0474" +
		"\u0476\x05\xA8U\x02\u0475\u0477\x05\xE6t\x02\u0476\u0475\x03\x02\x02\x02" +
		"\u0476\u0477\x03\x02\x02\x02\u0477\u0479\x03\x02\x02\x02\u0478\u047A\x05" +
		"\xEAv\x02\u0479\u0478\x03\x02\x02\x02\u0479\u047A\x03\x02\x02\x02\u047A" +
		"\u047C\x03\x02\x02\x02\u047B\u0464\x03\x02\x02\x02\u047B\u0466\x03\x02" +
		"\x02\x02\u047B\u0469\x03\x02\x02\x02\u047B\u046D\x03\x02\x02\x02\u047B" +
		"\u0474\x03\x02\x02\x02\u047C\u048B\x03\x02\x02\x02\u047D\u047E\f\x05\x02" +
		"\x02\u047E\u0480\t\x15\x02\x02\u047F\u0481\x07\xB4\x02\x02\u0480\u047F" +
		"\x03\x02\x02\x02\u0480\u0481\x03\x02\x02\x02\u0481\u0482\x03\x02\x02\x02" +
		"\u0482\u0484\x05\x9EP\x02\u0483\u0485\x05\xE6t\x02\u0484\u0483\x03\x02" +
		"\x02\x02\u0484\u0485\x03\x02\x02\x02\u0485\u0487\x03\x02\x02\x02\u0486" +
		"\u0488\x05\xEAv\x02\u0487\u0486\x03\x02\x02\x02\u0487\u0488\x03\x02\x02" +
		"\x02\u0488\u048A\x03\x02\x02\x02\u0489\u047D\x03\x02\x02\x02\u048A\u048D" +
		"\x03\x02\x02\x02\u048B\u0489\x03\x02\x02\x02\u048B\u048C\x03\x02\x02\x02" +
		"\u048C\x9F\x03\x02\x02\x02\u048D\u048B\x03\x02\x02\x02\u048E\u048F\x07" +
		"\u0170\x02\x02\u048F\u0494\x05\u0102\x82\x02\u0490\u0491\x07\u0189\x02" +
		"\x02\u0491\u0493\x05\u0102\x82\x02\u0492\u0490\x03\x02\x02\x02\u0493\u0496" +
		"\x03\x02\x02\x02\u0494\u0492\x03\x02\x02\x02\u0494\u0495\x03\x02\x02\x02" +
		"\u0495\xA1\x03\x02\x02\x02\u0496\u0494\x03\x02\x02\x02\u0497\u0498\x07" +
		"\u0176\x02\x02\u0498\u049D\x05\xA4S\x02\u0499\u049A\x07\u0189\x02\x02" +
		"\u049A\u049C\x05\xA4S\x02\u049B\u0499\x03\x02\x02\x02\u049C\u049F\x03" +
		"\x02\x02\x02\u049D\u049B\x03\x02\x02\x02\u049D\u049E\x03\x02\x02\x02\u049E" +
		"\xA3\x03\x02\x02\x02\u049F\u049D\x03\x02\x02\x02\u04A0\u04AC\x05\xA6T" +
		"\x02\u04A1\u04A2\x07\u0185\x02\x02\u04A2\u04A7\x054\x1B\x02\u04A3\u04A4" +
		"\x07\u0189\x02\x02\u04A4\u04A6\x054\x1B\x02\u04A5\u04A3\x03\x02\x02\x02" +
		"\u04A6\u04A9\x03\x02\x02\x02\u04A7\u04A5\x03\x02\x02\x02\u04A7\u04A8\x03" +
		"\x02\x02\x02\u04A8\u04AA\x03\x02\x02\x02\u04A9\u04A7\x03\x02\x02\x02\u04AA" +
		"\u04AB\x07\u0186\x02\x02\u04AB\u04AD\x03\x02\x02\x02\u04AC\u04A1\x03\x02" +
		"\x02\x02\u04AC\u04AD\x03\x02\x02\x02\u04AD\u04AE\x03\x02\x02\x02\u04AE" +
		"\u04AF\x07\xBB\x02\x02\u04AF\u04B0\x07\u0185\x02\x02\u04B0\u04B1\x05\x9E" +
		"P\x02\u04B1\u04B2\x07\u0186\x02\x02\u04B2\xA5\x03\x02\x02\x02\u04B3\u04B4" +
		"\x05\u0130\x99\x02\u04B4\xA7\x03\x02\x02\x02\u04B5\u04B6\x05\xAAV\x02" +
		"\u04B6\u04B8\x05\xB0Y\x02\u04B7\u04B9\x05\xCCg\x02\u04B8\u04B7\x03\x02" +
		"\x02\x02\u04B8\u04B9\x03\x02\x02\x02\u04B9\u04BB\x03\x02\x02\x02\u04BA" +
		"\u04BC\x05\xCEh\x02\u04BB\u04BA\x03\x02\x02\x02\u04BB\u04BC\x03\x02\x02" +
		"\x02\u04BC\u04BE\x03\x02\x02\x02\u04BD\u04BF\x05\xDCo\x02\u04BE\u04BD" +
		"\x03\x02\x02\x02\u04BE\u04BF\x03\x02\x02\x02\u04BF\u04C1\x03\x02\x02\x02" +
		"\u04C0\u04C2\x05\xDEp\x02\u04C1\u04C0\x03\x02\x02\x02\u04C1\u04C2\x03" +
		"\x02\x02\x02\u04C2\u04C8\x03\x02\x02\x02\u04C3\u04C4\x05\xAAV\x02\u04C4" +
		"\u04C5\x05\xB0Y\x02\u04C5\u04C6\x05\xE4s\x02\u04C6\u04C8\x03\x02\x02\x02" +
		"\u04C7\u04B5\x03\x02\x02\x02\u04C7\u04C3\x03\x02\x02\x02\u04C8\xA9\x03" +
		"\x02\x02\x02\u04C9\u04CB\x07\u014C\x02\x02\u04CA\u04CC\x05\u0166\xB4\x02" +
		"\u04CB\u04CA\x03\x02\x02\x02\u04CB\u04CC\x03\x02\x02\x02\u04CC\u04D6\x03" +
		"\x02\x02\x02\u04CD\u04D7\x07\u0190\x02\x02\u04CE\u04D3\x05\xACW\x02\u04CF" +
		"\u04D0\x07\u0189\x02\x02\u04D0\u04D2\x05\xACW\x02\u04D1\u04CF\x03\x02" +
		"\x02\x02\u04D2\u04D5\x03\x02\x02\x02\u04D3\u04D1\x03\x02\x02\x02\u04D3" +
		"\u04D4\x03\x02\x02\x02\u04D4\u04D7\x03\x02\x02\x02\u04D5\u04D3\x03\x02" +
		"\x02\x02\u04D6\u04CD\x03\x02\x02\x02\u04D6\u04CE\x03\x02\x02\x02\u04D7" +
		"\xAB\x03\x02\x02\x02\u04D8\u04E1\x05\xAEX\x02\u04D9\u04DE\x05\u0102\x82" +
		"\x02\u04DA\u04DC\x07\xBB\x02\x02\u04DB\u04DA\x03\x02\x02\x02\u04DB\u04DC" +
		"\x03\x02\x02\x02\u04DC\u04DD\x03\x02\x02\x02\u04DD\u04DF\x05\u0102\x82" +
		"\x02\u04DE\u04DB\x03\x02\x02\x02\u04DE\u04DF\x03\x02\x02\x02\u04DF\u04E1" +
		"\x03\x02\x02\x02\u04E0\u04D8\x03\x02\x02\x02\u04E0\u04D9\x03\x02\x02\x02" +
		"\u04E1\xAD\x03\x02\x02\x02\u04E2\u04E3\x05\u010C\x87\x02\u04E3\u04E4\x07" +
		"\u0137\x02\x02\u04E4\u04E5\x05\xE2r\x02\u04E5\u04E6\x07\xBB\x02\x02\u04E6" +
		"\u04E7\x05\u0130\x99\x02\u04E7\u04EF\x03\x02\x02\x02\u04E8\u04E9\x05\u010C" +
		"\x87\x02\u04E9\u04EA\x07\u0137\x02\x02\u04EA\u04EB\x05\u0128\x95\x02\u04EB" +
		"\u04EC\x07\xBB\x02\x02\u04EC\u04ED\x05\u0130\x99\x02\u04ED\u04EF\x03\x02" +
		"\x02\x02\u04EE\u04E2\x03\x02\x02\x02\u04EE\u04E8\x03\x02\x02\x02\u04EF" +
		"\xAF\x03\x02\x02\x02\u04F0\u04F1\x07\xFE\x02\x02\u04F1\u04F2\x05\xB2Z" +
		"\x02\u04F2\xB1\x03\x02\x02\x02\u04F3\u04F4\bZ\x01\x02\u04F4\u04F9\x05" +
		"\xB4[\x02\u04F5\u04F6\x07\u0189\x02\x02\u04F6\u04F8\x05\xB4[\x02\u04F7" +
		"\u04F5\x03\x02\x02\x02\u04F8\u04FB\x03\x02\x02\x02\u04F9\u04F7\x03\x02" +
		"\x02\x02\u04F9\u04FA\x03\x02\x02\x02\u04FA\u04FF\x03\x02\x02\x02\u04FB" +
		"\u04F9\x03\x02\x02\x02\u04FC\u04FF\x05\xBC_\x02\u04FD\u04FF\x05\xBE`\x02" +
		"\u04FE\u04F3\x03\x02\x02\x02\u04FE\u04FC\x03\x02\x02\x02\u04FE\u04FD\x03" +
		"\x02\x02\x02\u04FF\u0515\x03\x02\x02\x02\u0500\u0501\f\x05\x02\x02\u0501" +
		"\u0502\x07\xDE\x02\x02\u0502\u0503\x07\u0114\x02\x02\u0503\u0514\x05\xB2" +
		"Z\x06\u0504\u0506\f\x06\x02\x02\u0505\u0507\x07\u0128\x02\x02\u0506\u0505" +
		"\x03\x02\x02\x02\u0506\u0507\x03\x02\x02\x02\u0507\u0509\x03\x02\x02\x02" +
		"\u0508\u050A\t\x16\x02\x02\u0509\u0508\x03\x02\x02\x02\u0509\u050A\x03" +
		"\x02\x02\x02\u050A\u050C\x03\x02\x02\x02\u050B\u050D\x07\u0136\x02\x02" +
		"\u050C\u050B\x03\x02\x02\x02\u050C\u050D\x03\x02\x02\x02\u050D\u050E\x03" +
		"\x02\x02\x02\u050E\u050F\x07\u0114\x02\x02\u050F\u0511\x05\xB2Z\x02\u0510" +
		"\u0512\x05\xCAf\x02\u0511\u0510\x03\x02\x02\x02\u0511\u0512\x03\x02\x02" +
		"\x02\u0512\u0514\x03\x02\x02\x02\u0513\u0500\x03\x02\x02\x02\u0513\u0504" +
		"\x03\x02\x02\x02\u0514\u0517\x03\x02\x02\x02\u0515\u0513\x03\x02\x02\x02" +
		"\u0515\u0516\x03\x02\x02\x02\u0516\xB3\x03\x02\x02\x02\u0517\u0515\x03" +
		"\x02\x02\x02\u0518\u051A\x05\xB6\\\x02\u0519\u051B\x05\u0126\x94\x02\u051A" +
		"\u0519\x03\x02\x02\x02\u051A\u051B\x03\x02\x02\x02\u051B\xB5\x03\x02\x02" +
		"\x02\u051C\u051E\x07\u015A\x02\x02\u051D\u051C\x03\x02\x02\x02\u051D\u051E" +
		"\x03\x02\x02\x02\u051E\u051F\x03\x02\x02\x02\u051F\u0521\x05\u0140\xA1" +
		"\x02\u0520\u0522\x05\xB8]\x02\u0521\u0520\x03\x02\x02\x02\u0521\u0522" +
		"\x03\x02\x02\x02\u0522\u0527\x03\x02\x02\x02\u0523\u0525\x07\xBB\x02\x02" +
		"\u0524\u0523\x03\x02\x02\x02\u0524\u0525\x03\x02\x02\x02\u0525\u0526\x03" +
		"\x02\x02\x02\u0526\u0528\x05\u0114\x8B\x02\u0527\u0524\x03\x02\x02\x02" +
		"\u0527\u0528\x03\x02\x02\x02\u0528\u0546\x03\x02\x02\x02\u0529\u052A\x07" +
		"\u0117\x02\x02\u052A\u052B\x07\u015A\x02\x02\u052B\u052C\x07\u0185\x02" +
		"\x02\u052C\u052D\x05\u010E\x88\x02\u052D\u052E\x07\u0185\x02\x02\u052E" +
		"\u0533\x05\u0110\x89\x02\u052F\u0530\x07\u0189\x02\x02\u0530\u0532\x05" +
		"\u0110\x89\x02\u0531\u052F\x03\x02\x02\x02\u0532\u0535\x03\x02\x02\x02" +
		"\u0533\u0531\x03\x02\x02\x02\u0533\u0534\x03\x02\x02\x02\u0534\u0536\x03" +
		"\x02\x02\x02\u0535\u0533\x03\x02\x02\x02\u0536\u0537\x07\u0186\x02\x02" +
		"\u0537\u0538\x07\u0186\x02\x02\u0538\u0546\x03\x02\x02\x02\u0539\u053B" +
		"\x07\u0117\x02\x02\u053A\u0539\x03\x02\x02\x02\u053A\u053B\x03\x02\x02" +
		"\x02\u053B\u053C\x03\x02\x02\x02\u053C\u053D\x07\u0185\x02\x02\u053D\u053E" +
		"\x05\x9EP\x02\u053E\u053F\x07\u0186\x02\x02\u053F\u0546\x03\x02\x02\x02" +
		"\u0540\u0541\x07\u016A\x02\x02\u0541\u0542\x07\u0185\x02\x02\u0542\u0543" +
		"\x05\u0102\x82\x02\u0543\u0544\x07\u0186\x02\x02\u0544\u0546\x03\x02\x02" +
		"\x02\u0545\u051D\x03\x02\x02\x02\u0545\u0529\x03\x02\x02\x02\u0545\u053A" +
		"\x03\x02\x02\x02\u0545\u0540\x03\x02\x02\x02\u0546\xB7\x03\x02\x02\x02" +
		"\u0547\u0548\x07\xFD\x02\x02\u0548\u0549\x07\u0158\x02\x02\u0549\u054A" +
		"\x07\xBB\x02\x02\u054A\u054B\x07\u012F\x02\x02\u054B\u054C\x05\xBA^\x02" +
		"\u054C\xB9\x03\x02\x02\x02\u054D\u054E\x05\u0102\x82\x02\u054E\xBB\x03" +
		"\x02\x02\x02\u054F\u0550\x07\u0185\x02\x02\u0550\u0551\x05\x96L\x02\u0551" +
		"\u0552\x07\u0186\x02\x02\u0552\u0553\x05\u0126\x94\x02\u0553\xBD\x03\x02" +
		"\x02\x02\u0554\u0555\x07\u015A\x02\x02\u0555\u0556\x07\u0185\x02\x02\u0556" +
		"\u0557\x05\xC0a\x02\u0557\u0558\x07\u0186\x02\x02\u0558\xBF\x03\x02\x02" +
		"\x02\u0559\u055A\x05\xC2b\x02\u055A\u055B\x07\u0185\x02\x02\u055B\u0560" +
		"\x05\xC4c\x02\u055C\u055D\x07\u0189\x02\x02\u055D\u055F\x05\xC4c\x02\u055E" +
		"\u055C\x03\x02\x02\x02\u055F\u0562\x03\x02\x02\x02\u0560\u055E\x03\x02" +
		"\x02\x02\u0560\u0561\x03\x02\x02\x02\u0561\u0563\x03\x02\x02\x02\u0562" +
		"\u0560\x03\x02\x02\x02\u0563\u0564\x07\u0186\x02\x02\u0564\xC1\x03\x02" +
		"\x02\x02\u0565\u0566\t\x17\x02\x02\u0566\xC3\x03\x02\x02\x02\u0567\u0568" +
		"\x07\u015A\x02\x02\u0568\u0577\x05\xDAn\x02\u0569\u0577\x05\xC8e\x02\u056A" +
		"\u0577\x05\u0118\x8D\x02\u056B\u056C\x07\x1A\x02\x02\u056C\u056D\x07\u0199" +
		"\x02\x02\u056D\u056E\x07\u015A\x02\x02\u056E\u0577\x05\xDAn\x02\u056F" +
		"\u0570\x07\x99\x02\x02\u0570\u0571\x07\u0199\x02\x02\u0571\u0577\x05\xC8" +
		"e\x02\u0572\u0573\x05\xC6d\x02\u0573\u0574\x07\u0199\x02\x02\u0574\u0575" +
		"\x05\u0118\x8D\x02\u0575\u0577\x03\x02\x02\x02\u0576\u0567\x03\x02\x02" +
		"\x02\u0576\u0569\x03\x02\x02\x02\u0576\u056A\x03\x02\x02\x02\u0576\u056B" +
		"\x03\x02\x02\x02\u0576\u056F\x03\x02\x02\x02\u0576\u0572\x03\x02\x02\x02" +
		"\u0577\xC5\x03\x02\x02\x02\u0578\u0579\t\x18\x02\x02\u0579\xC7\x03\x02" +
		"\x02\x02\u057A\u057B\x07!\x02\x02\u057B\u057C\x07\u0185\x02\x02\u057C" +
		"\u057D\x05\u0142\xA2\x02\u057D\u057E\x07\u0186\x02\x02\u057E\xC9\x03\x02" +
		"\x02\x02\u057F\u0580\x07\u0131\x02\x02\u0580\u058E\x05\u0104\x83\x02\u0581" +
		"\u0582\x07\u016E\x02\x02\u0582\u0583\x07\u0185\x02\x02\u0583\u0588\x05" +
		"\u0142\xA2\x02\u0584\u0585\x07\u0189\x02\x02\u0585\u0587\x05\u0142\xA2" +
		"\x02\u0586\u0584\x03\x02\x02\x02\u0587\u058A\x03\x02\x02\x02\u0588\u0586" +
		"\x03\x02\x02\x02\u0588\u0589\x03\x02\x02\x02\u0589\u058B\x03\x02\x02\x02" +
		"\u058A\u0588\x03\x02\x02\x02\u058B\u058C\x07\u0186\x02\x02\u058C\u058E" +
		"\x03\x02\x02\x02\u058D\u057F\x03\x02\x02\x02\u058D\u0581\x03\x02\x02\x02" +
		"\u058E\xCB\x03\x02\x02\x02\u058F\u0590\x07\u0174\x02\x02\u0590\u0591\x05" +
		"\u0104\x83\x02\u0591\xCD\x03\x02\x02\x02\u0592\u0593\x07\u0103\x02\x02" +
		"\u0593\u0594\x07\xC7\x02\x02\u0594\u0599\x05\xD0i\x02\u0595\u0596\x07" +
		"\u0189\x02\x02\u0596\u0598\x05\xD0i\x02\u0597\u0595\x03\x02\x02\x02\u0598" +
		"\u059B\x03\x02\x02\x02\u0599\u0597\x03\x02\x02\x02\u0599\u059A\x03\x02" +
		"\x02\x02\u059A\xCF\x03\x02\x02\x02\u059B\u0599\x03\x02\x02\x02\u059C\u05C4" +
		"\x05\u0102\x82\x02\u059D\u05C4\x05\xD6l\x02\u059E\u059F\x07\u0185\x02" +
		"\x02\u059F\u05C4\x07\u0186\x02\x02\u05A0\u05A1\x07\u0185\x02\x02\u05A1" +
		"\u05A6\x05\u0102\x82\x02\u05A2\u05A3\x07\u0189\x02\x02\u05A3\u05A5\x05" +
		"\u0102\x82\x02\u05A4\u05A2\x03\x02\x02\x02\u05A5\u05A8\x03\x02\x02\x02" +
		"\u05A6\u05A4\x03\x02\x02\x02\u05A6\u05A7\x03\x02\x02\x02\u05A7\u05A9\x03" +
		"\x02\x02\x02\u05A8\u05A6\x03\x02\x02\x02\u05A9\u05AA\x07\u0186\x02\x02" +
		"\u05AA\u05C4\x03\x02\x02\x02\u05AB\u05AC\x05\xD4k\x02\u05AC\u05AD\x07" +
		"\u0185\x02\x02\u05AD\u05B2\x05\u0102\x82\x02\u05AE\u05AF\x07\u0189\x02" +
		"\x02\u05AF\u05B1\x05\u0102\x82\x02\u05B0\u05AE\x03\x02\x02\x02\u05B1\u05B4" +
		"\x03\x02\x02\x02\u05B2\u05B0\x03\x02\x02\x02\u05B2\u05B3\x03\x02\x02\x02" +
		"\u05B3\u05B5\x03\x02\x02\x02\u05B4\u05B2\x03\x02\x02\x02\u05B5\u05B6\x07" +
		"\u0186\x02\x02\u05B6\u05C4\x03\x02\x02\x02\u05B7\u05B8\x05\xD2j\x02\u05B8" +
		"\u05B9\x07\u0185\x02\x02\u05B9\u05BE\x05\xD0i\x02\u05BA\u05BB\x07\u0189" +
		"\x02\x02\u05BB\u05BD\x05\xD0i\x02\u05BC\u05BA\x03\x02\x02\x02\u05BD\u05C0" +
		"\x03\x02\x02\x02\u05BE\u05BC\x03\x02\x02\x02\u05BE\u05BF\x03\x02\x02\x02" +
		"\u05BF\u05C1\x03\x02\x02\x02\u05C0\u05BE\x03\x02\x02\x02\u05C1\u05C2\x07" +
		"\u0186\x02\x02\u05C2\u05C4\x03\x02\x02\x02\u05C3\u059C\x03\x02\x02\x02" +
		"\u05C3\u059D\x03\x02\x02\x02\u05C3\u059E\x03\x02\x02\x02\u05C3\u05A0\x03" +
		"\x02\x02\x02\u05C3\u05AB\x03\x02\x02\x02\u05C3\u05B7\x03\x02\x02\x02\u05C4" +
		"\xD1\x03\x02\x02\x02\u05C5\u05C6\x07\u0104\x02\x02\u05C6\u05C7\x07\x8B" +
		"\x02\x02\u05C7\xD3\x03\x02\x02\x02\u05C8\u05C9\t\x19\x02\x02\u05C9\xD5" +
		"\x03\x02\x02\x02\u05CA\u05CB\x05\xD8m\x02\u05CB\u05CC\x07\u0185\x02\x02" +
		"\u05CC\u05CD\x05\xDAn\x02\u05CD\u05CE\x07\u0189\x02\x02\u05CE\u05CF\x05" +
		"\u0118\x8D\x02\u05CF\u05D0\x07\u0186\x02\x02\u05D0\xD7\x03\x02\x02\x02" +
		"\u05D1\u05D2\t\x1A\x02\x02\u05D2\xD9\x03\x02\x02\x02\u05D3\u05D4\x05\u0142" +
		"\xA2\x02\u05D4\xDB\x03\x02\x02\x02\u05D5\u05D6\x07\u0106\x02\x02\u05D6" +
		"\u05D7\x05\u0104\x83\x02\u05D7\xDD\x03\x02\x02\x02\u05D8\u05D9\x07\u0175" +
		"\x02\x02\u05D9\u05DE\x05\xE0q\x02\u05DA\u05DB\x07\u0189\x02\x02\u05DB" +
		"\u05DD\x05\xE0q\x02\u05DC\u05DA\x03\x02\x02\x02\u05DD\u05E0\x03\x02\x02" +
		"\x02\u05DE\u05DC\x03\x02\x02\x02\u05DE\u05DF\x03\x02\x02\x02\u05DF\xDF" +
		"\x03\x02\x02\x02\u05E0\u05DE\x03\x02\x02\x02\u05E1\u05E2\x05\u0128\x95" +
		"\x02\u05E2\u05E3\x07\xBB\x02\x02\u05E3\u05E4\x05\xE2r\x02\u05E4\xE1\x03" +
		"\x02\x02\x02\u05E5\u05E7\x05\u0128\x95\x02\u05E6\u05E5\x03\x02\x02\x02" +
		"\u05E6\u05E7\x03\x02\x02\x02\u05E7\u05E8\x03\x02\x02\x02\u05E8\u05EA\x07" +
		"\u0185\x02\x02\u05E9\u05EB\x05\xECw\x02\u05EA\u05E9\x03\x02\x02\x02\u05EA" +
		"\u05EB\x03\x02\x02\x02\u05EB\u05ED\x03\x02\x02\x02\u05EC\u05EE\x05\xE6" +
		"t\x02\u05ED\u05EC\x03\x02\x02\x02\u05ED\u05EE\x03\x02\x02\x02\u05EE\u05F0" +
		"\x03\x02\x02\x02\u05EF\u05F1\x05\xFC\x7F\x02\u05F0\u05EF\x03\x02\x02\x02" +
		"\u05F0\u05F1\x03\x02\x02\x02\u05F1\u05F2\x03\x02\x02\x02\u05F2\u05F3\x07" +
		"\u0186\x02\x02\u05F3\xE3\x03\x02\x02\x02\u05F4\u05F5\x07\u011E\x02\x02" +
		"\u05F5\u05F7\x07\u0185\x02\x02\u05F6\u05F8\x05\xECw\x02\u05F7\u05F6\x03" +
		"\x02\x02\x02\u05F7\u05F8\x03\x02\x02\x02\u05F8\u05FA\x03\x02\x02\x02\u05F9" +
		"\u05FB\x05\xE6t\x02\u05FA\u05F9\x03\x02\x02\x02\u05FA\u05FB\x03\x02\x02" +
		"\x02\u05FB\u05FD\x03\x02\x02\x02\u05FC\u05FE\x05\xF0y\x02\u05FD\u05FC" +
		"\x03\x02\x02\x02\u05FD\u05FE\x03\x02\x02\x02\u05FE\u0600\x03\x02\x02\x02" +
		"\u05FF\u0601\x05";
	private static readonly _serializedATNSegment3: string =
		"\xF6|\x02\u0600\u05FF\x03\x02\x02\x02\u0600\u0601\x03\x02\x02\x02\u0601" +
		"\u0603\x03\x02\x02\x02\u0602\u0604\x05\xF8}\x02\u0603\u0602\x03\x02\x02" +
		"\x02\u0603\u0604\x03\x02\x02\x02\u0604\u0606\x03\x02\x02\x02\u0605\u0607" +
		"\x05\xF2z\x02\u0606\u0605\x03\x02\x02\x02\u0606\u0607\x03\x02\x02\x02" +
		"\u0607\u0608\x03\x02\x02\x02\u0608\u0609\x05\xFA~\x02\u0609\u060E\x07" +
		"\u0186\x02\x02\u060A\u060C\x07\xBB\x02\x02\u060B\u060A\x03\x02\x02\x02" +
		"\u060B\u060C\x03\x02\x02\x02\u060C\u060D\x03\x02\x02\x02\u060D\u060F\x05" +
		"\u0130\x99\x02\u060E\u060B\x03\x02\x02\x02\u060E\u060F\x03\x02\x02\x02" +
		"\u060F\xE5\x03\x02\x02\x02\u0610\u0611\x07\u0134\x02\x02\u0611\u0612\x07" +
		"\xC7\x02\x02\u0612\u0617\x05\xE8u\x02\u0613\u0614\x07\u0189\x02\x02\u0614" +
		"\u0616\x05\xE8u\x02\u0615\u0613\x03\x02\x02\x02\u0616\u0619\x03\x02\x02" +
		"\x02\u0617\u0615\x03\x02\x02\x02\u0617\u0618\x03\x02\x02\x02\u0618\xE7" +
		"\x03\x02\x02\x02\u0619\u0617\x03\x02\x02\x02\u061A\u061C\x05\u0102\x82" +
		"\x02\u061B\u061D\t\x1B\x02\x02\u061C\u061B\x03\x02\x02\x02\u061C\u061D" +
		"\x03\x02\x02\x02\u061D\u0620\x03\x02\x02\x02\u061E\u061F\x07Y\x02\x02" +
		"\u061F\u0621\t\x1C\x02\x02\u0620\u061E\x03\x02\x02\x02\u0620\u0621\x03" +
		"\x02\x02\x02\u0621\xE9\x03\x02\x02\x02\u0622\u0625\x07\u011B\x02\x02\u0623" +
		"\u0626\x07\xB4\x02\x02\u0624\u0626\x05\u0102\x82\x02\u0625\u0623\x03\x02" +
		"\x02\x02\u0625\u0624\x03\x02\x02\x02\u0626\xEB\x03\x02\x02\x02\u0627\u0628" +
		"\x07\u0139\x02\x02\u0628\u0629\x07\xC7\x02\x02\u0629\u062E\x05\u0102\x82" +
		"\x02\u062A\u062B\x07\u0189\x02\x02\u062B\u062D\x05\u0102\x82\x02\u062C" +
		"\u062A\x03\x02\x02\x02\u062D\u0630\x03\x02\x02\x02\u062E\u062C\x03\x02" +
		"\x02\x02\u062E\u062F\x03\x02\x02\x02\u062F\xED\x03\x02\x02\x02\u0630\u062E" +
		"\x03\x02\x02\x02\u0631\u0642\x07\u0190\x02\x02\u0632\u0642\x07\u0193\x02" +
		"\x02\u0633\u0642\x07\u0198\x02\x02\u0634\u0635\x07\u0187\x02\x02\u0635" +
		"\u0636\x07\u019B\x02\x02\u0636\u0637\x07\u0189\x02\x02\u0637\u0638\x07" +
		"\u019B\x02\x02\u0638\u0642\x07\u0188\x02\x02\u0639\u063A\x07\u0187\x02" +
		"\x02\u063A\u063B\x07\u019B\x02\x02\u063B\u063C\x07\u0189\x02\x02\u063C" +
		"\u0642\x07\u0188\x02\x02\u063D\u063E\x07\u0187\x02\x02\u063E\u063F\x07" +
		"\u0189\x02\x02\u063F\u0640\x07\u019B\x02\x02\u0640\u0642\x07\u0188\x02" +
		"\x02\u0641\u0631\x03\x02\x02\x02\u0641\u0632\x03\x02\x02\x02\u0641\u0633" +
		"\x03\x02\x02\x02\u0641\u0634\x03\x02\x02\x02\u0641\u0639\x03\x02\x02\x02" +
		"\u0641\u063D\x03\x02\x02\x02\u0642\xEF\x03\x02\x02\x02\u0643\u0644\x07" +
		"\u011F\x02\x02\u0644\u0649\x05\xACW\x02\u0645\u0646\x07\u0189\x02\x02" +
		"\u0646\u0648\x05\xACW\x02\u0647\u0645\x03\x02\x02\x02\u0648\u064B\x03" +
		"\x02\x02\x02\u0649\u0647\x03\x02\x02\x02\u0649\u064A\x03\x02\x02\x02\u064A" +
		"\xF1\x03\x02\x02\x02\u064B\u0649\x03\x02\x02\x02\u064C\u064D\x07\u013A" +
		"\x02\x02\u064D\u064F\x07\u0185\x02\x02\u064E\u0650\x05\xF4{\x02\u064F" +
		"\u064E\x03\x02\x02\x02\u0650\u0651\x03\x02\x02\x02\u0651\u064F\x03\x02" +
		"\x02\x02\u0651\u0652\x03\x02\x02\x02\u0652\u0653\x03\x02\x02\x02\u0653" +
		"\u0655\x07\u0186\x02\x02\u0654\u0656\x05\u0100\x81\x02\u0655\u0654\x03" +
		"\x02\x02\x02\u0655\u0656\x03\x02\x02\x02\u0656\xF3\x03\x02\x02\x02\u0657" +
		"\u0659\x05\u0132\x9A\x02\u0658\u065A\x05\xEEx\x02\u0659\u0658\x03\x02" +
		"\x02\x02\u0659\u065A\x03\x02\x02\x02\u065A\xF5\x03\x02\x02\x02\u065B\u065C" +
		"\x07\xB4\x02\x02\u065C\u065D\x07\u014A\x02\x02\u065D\u065E\x07\u013B\x02" +
		"\x02\u065E\u0664\x07\u011D\x02\x02\u065F\u0660\x07\u0132\x02\x02\u0660" +
		"\u0661\x07\u0149\x02\x02\u0661\u0662\x07\u013B\x02\x02\u0662\u0664\x07" +
		"\u011D\x02\x02\u0663\u065B\x03\x02\x02\x02\u0663\u065F\x03\x02\x02\x02" +
		"\u0664\xF7\x03\x02\x02\x02\u0665\u0666\x07\b\x02\x02\u0666\u0667\x07\u011D" +
		"\x02\x02\u0667\u0668\x07\u0150\x02\x02\u0668\u0669\x07d\x02\x02\u0669" +
		"\u066A\x07K\x02\x02\u066A\u067E\x07\u0149\x02\x02\u066B\u066C\x07\b\x02" +
		"\x02\u066C\u066D\x07\u011D\x02\x02\u066D\u066E\x07\u0150\x02\x02\u066E" +
		"\u066F\x07\u0163\x02\x02\u066F\u0670\x07\u0129\x02\x02\u0670\u067E\x07" +
		"\u0149\x02\x02\u0671\u0672\x07\b\x02\x02\u0672\u0673\x07\u011D\x02\x02" +
		"\u0673\u0674\x07\u0150\x02\x02\u0674\u0675\x07\u0163\x02\x02\u0675\u0676" +
		"\x07K\x02\x02\u0676\u067E\x05\u0132\x9A\x02\u0677\u0678\x07\b\x02\x02" +
		"\u0678\u0679\x07\u011D\x02\x02\u0679\u067A\x07\u0150\x02\x02\u067A\u067B" +
		"\x07\u0163\x02\x02\u067B\u067C\x07/\x02\x02\u067C\u067E\x05\u0132\x9A" +
		"\x02\u067D\u0665\x03\x02\x02\x02\u067D\u066B\x03\x02\x02\x02\u067D\u0671" +
		"\x03\x02\x02\x02\u067D\u0677\x03\x02\x02\x02\u067E\xF9\x03\x02\x02\x02" +
		"\u067F\u0680\x07\xEA\x02\x02\u0680\u0685\x05\xACW\x02\u0681\u0682\x07" +
		"\u0189\x02\x02\u0682\u0684\x05\xACW\x02\u0683\u0681\x03\x02\x02\x02\u0684" +
		"\u0687\x03\x02\x02\x02\u0685\u0683\x03\x02\x02\x02\u0685\u0686\x03\x02" +
		"\x02\x02\u0686\xFB\x03\x02\x02\x02\u0687\u0685\x03\x02\x02\x02\u0688\u0689" +
		"\x07\u0141\x02\x02\u0689\u068A\x07\xC0\x02\x02\u068A\u068B\x05\u0118\x8D" +
		"\x02\u068B\u068C\x05\xFE\x80\x02\u068C\u0692\x03\x02\x02\x02\u068D\u068E" +
		"\x07\u014A\x02\x02\u068E\u068F\x07\xC0\x02\x02\u068F\u0690\x07\u019B\x02" +
		"\x02\u0690\u0692\x05\xFE\x80\x02\u0691\u0688\x03\x02\x02\x02\u0691\u068D" +
		"\x03\x02\x02\x02\u0692\xFD\x03\x02\x02\x02\u0693\u0694\x07h\x02\x02\u0694" +
		"\u0695\x07\xB7\x02\x02\u0695\u0696\x07\xE0\x02\x02\u0696\u0697\x07\u0149" +
		"\x02\x02\u0697\xFF\x03\x02\x02\x02\u0698\u0699\x07\u0177\x02\x02\u0699" +
		"\u069A\x05\u0118\x8D\x02\u069A\u0101\x03\x02\x02\x02\u069B\u069C\x05\u0104" +
		"\x83\x02\u069C\u0103\x03\x02\x02\x02\u069D\u069E\b\x83\x01\x02\u069E\u069F" +
		"\x07\u012C\x02\x02\u069F\u06AA\x05\u0104\x83\b\u06A0\u06A1\x07\xF7\x02" +
		"\x02\u06A1\u06A2\x07\u0185\x02\x02\u06A2\u06A3\x05\x9EP\x02\u06A3\u06A4" +
		"\x07\u0186\x02\x02\u06A4\u06AA\x03\x02\x02\x02\u06A5\u06A7\x05\u010A\x86" +
		"\x02\u06A6\u06A8\x05\u0106\x84\x02\u06A7\u06A6\x03\x02\x02\x02\u06A7\u06A8" +
		"\x03\x02\x02\x02\u06A8\u06AA\x03\x02\x02\x02\u06A9\u069D\x03\x02\x02\x02" +
		"\u06A9\u06A0\x03\x02\x02\x02\u06A9\u06A5\x03\x02\x02\x02\u06AA\u06B9\x03" +
		"\x02\x02\x02\u06AB\u06AC\f\x05\x02\x02\u06AC\u06AD\x07\xB7\x02\x02\u06AD" +
		"\u06B8\x05\u0104\x83\x06\u06AE\u06AF\f\x04\x02\x02\u06AF\u06B0\x07\u0133" +
		"\x02\x02\u06B0\u06B8\x05\u0104\x83\x05\u06B1\u06B2\f\x03\x02\x02\u06B2" +
		"\u06B4\x07\u0113\x02\x02\u06B3\u06B5\x07\u012C\x02\x02\u06B4\u06B3\x03" +
		"\x02\x02\x02\u06B4\u06B5\x03\x02\x02\x02\u06B5\u06B6\x03\x02\x02\x02\u06B6" +
		"\u06B8\t\x1D\x02\x02\u06B7\u06AB\x03\x02\x02\x02\u06B7\u06AE\x03\x02\x02" +
		"\x02\u06B7\u06B1\x03\x02\x02\x02\u06B8\u06BB\x03\x02\x02\x02\u06B9\u06B7" +
		"\x03\x02\x02\x02\u06B9\u06BA\x03\x02\x02\x02\u06BA\u0105\x03\x02\x02\x02" +
		"\u06BB\u06B9\x03\x02\x02\x02\u06BC\u06BE\x07\u012C\x02\x02\u06BD\u06BC" +
		"\x03\x02\x02\x02\u06BD\u06BE\x03\x02\x02\x02\u06BE\u06BF\x03\x02\x02\x02" +
		"\u06BF\u06C1\x07\xC0\x02\x02\u06C0\u06C2\t\x1E\x02\x02\u06C1\u06C0\x03" +
		"\x02\x02\x02\u06C1\u06C2\x03\x02\x02\x02\u06C2\u06C3\x03\x02\x02\x02\u06C3" +
		"\u06C4\x05\u010A\x86\x02\u06C4\u06C5\x07\xB7\x02\x02\u06C5\u06C6\x05\u010A" +
		"\x86\x02\u06C6\u0700\x03\x02\x02\x02\u06C7\u06C9\x07\u012C\x02\x02\u06C8" +
		"\u06C7\x03\x02\x02\x02\u06C8\u06C9\x03\x02\x02\x02\u06C9\u06CA\x03\x02" +
		"\x02\x02\u06CA\u06CB\x07\u0109\x02\x02\u06CB\u06CC\x07\u0185\x02\x02\u06CC" +
		"\u06D1\x05\u0102\x82\x02\u06CD\u06CE\x07\u0189\x02\x02\u06CE\u06D0\x05" +
		"\u0102\x82\x02\u06CF\u06CD\x03\x02\x02\x02\u06D0\u06D3\x03\x02\x02\x02" +
		"\u06D1\u06CF\x03\x02\x02\x02\u06D1\u06D2\x03\x02\x02\x02\u06D2\u06D4\x03" +
		"\x02\x02\x02\u06D3\u06D1\x03\x02\x02\x02\u06D4\u06D5\x07\u0186\x02\x02" +
		"\u06D5\u0700\x03\x02\x02\x02\u06D6\u06D8\x07\u012C\x02\x02\u06D7\u06D6" +
		"\x03\x02\x02\x02\u06D7\u06D8\x03\x02\x02\x02\u06D8\u06D9\x03\x02\x02\x02" +
		"\u06D9\u06DA\x07\u0109\x02\x02\u06DA\u06DB\x07\u0185\x02\x02\u06DB\u06DC" +
		"\x05\x9EP\x02\u06DC\u06DD\x07\u0186\x02\x02\u06DD\u0700\x03\x02\x02\x02" +
		"\u06DE\u06DF\x07\xF7\x02\x02\u06DF\u06E0\x07\u0185\x02\x02\u06E0\u06E1" +
		"\x05\x9EP\x02\u06E1\u06E2\x07\u0186\x02\x02\u06E2\u0700\x03\x02\x02\x02" +
		"\u06E3\u06E5\x07\u012C\x02\x02\u06E4\u06E3\x03\x02\x02\x02\u06E4\u06E5" +
		"\x03\x02\x02\x02\u06E5\u06E6\x03\x02\x02\x02\u06E6\u06E7\x07\u0146\x02" +
		"\x02\u06E7\u0700\x05\u010A\x86\x02\u06E8\u0700\x05\u0108\x85\x02\u06E9" +
		"\u06EB\x07\u0113\x02\x02\u06EA\u06EC\x07\u012C\x02\x02\u06EB\u06EA\x03" +
		"\x02\x02\x02\u06EB\u06EC\x03\x02\x02\x02\u06EC\u06ED\x03\x02\x02\x02\u06ED" +
		"\u0700\t\x1D\x02\x02\u06EE\u06F0\x07\u0113\x02\x02\u06EF\u06F1\x07\u012C" +
		"\x02\x02\u06F0\u06EF\x03\x02\x02\x02\u06F0\u06F1\x03\x02\x02\x02\u06F1" +
		"\u06F2\x03\x02\x02\x02\u06F2\u06F3\x07\xED\x02\x02\u06F3\u06F4\x07\xFE" +
		"\x02\x02\u06F4\u0700\x05\u010A\x86\x02\u06F5\u06F7\x07\u012C\x02\x02\u06F6" +
		"\u06F5\x03\x02\x02\x02\u06F6\u06F7\x03\x02\x02\x02\u06F7\u06F8\x03\x02" +
		"\x02\x02\u06F8\u06F9\x07\u014F\x02\x02\u06F9\u06FA\x07\u0163\x02\x02\u06FA" +
		"\u06FD\x05\u010A\x86\x02\u06FB\u06FC\x07\xF4\x02\x02\u06FC\u06FE\x05\u0160" +
		"\xB1\x02\u06FD\u06FB\x03\x02\x02\x02\u06FD\u06FE\x03\x02\x02\x02\u06FE" +
		"\u0700\x03\x02\x02\x02\u06FF\u06BD\x03\x02\x02\x02\u06FF\u06C8\x03\x02" +
		"\x02\x02\u06FF\u06D7\x03\x02\x02\x02\u06FF\u06DE\x03\x02\x02\x02\u06FF" +
		"\u06E4\x03\x02\x02\x02\u06FF\u06E8\x03\x02\x02\x02\u06FF\u06E9\x03\x02" +
		"\x02\x02\u06FF\u06EE\x03\x02\x02\x02\u06FF\u06F6\x03\x02\x02\x02\u0700" +
		"\u0107\x03\x02\x02\x02\u0701\u0703\x07\u012C\x02\x02\u0702\u0701\x03\x02" +
		"\x02\x02\u0702\u0703\x03\x02\x02\x02\u0703\u0704\x03\x02\x02\x02\u0704" +
		"\u0705\x07\u011A\x02\x02\u0705\u0713\t\x1F\x02\x02\u0706\u0707\x07\u0185" +
		"\x02\x02\u0707\u0714\x07\u0186\x02\x02\u0708\u0709\x07\u0185\x02\x02\u0709" +
		"\u070E\x05\u0102\x82\x02\u070A\u070B\x07\u0189\x02\x02\u070B\u070D\x05" +
		"\u0102\x82\x02\u070C\u070A\x03\x02\x02\x02\u070D\u0710\x03\x02\x02\x02" +
		"\u070E\u070C\x03\x02\x02\x02\u070E\u070F\x03\x02\x02\x02\u070F\u0711\x03" +
		"\x02\x02\x02\u0710\u070E\x03\x02\x02\x02\u0711\u0712\x07\u0186\x02\x02" +
		"\u0712\u0714\x03\x02\x02\x02\u0713\u0706\x03\x02\x02\x02\u0713\u0708\x03" +
		"\x02\x02\x02\u0714\u071F\x03\x02\x02\x02\u0715\u0717\x07\u012C\x02\x02" +
		"\u0716\u0715\x03\x02\x02\x02\u0716\u0717\x03\x02\x02\x02\u0717\u0718\x03" +
		"\x02\x02\x02\u0718\u0719\x07\u011A\x02\x02\u0719\u071C\x05\u010A\x86\x02" +
		"\u071A\u071B\x07\xF4\x02\x02\u071B\u071D\x05\u0160\xB1\x02\u071C\u071A" +
		"\x03\x02\x02\x02\u071C\u071D\x03\x02\x02\x02\u071D\u071F\x03\x02\x02\x02" +
		"\u071E\u0702\x03\x02\x02\x02\u071E\u0716\x03\x02\x02\x02\u071F\u0109\x03" +
		"\x02\x02\x02\u0720\u0721\b\x86\x01\x02\u0721\u0725\x05\u010C\x87\x02\u0722" +
		"\u0723\t \x02\x02\u0723\u0725\x05\u010A\x86\n\u0724\u0720\x03\x02\x02" +
		"\x02\u0724\u0722\x03\x02\x02\x02\u0725\u073D\x03\x02\x02\x02\u0726\u0727" +
		"\f\t\x02\x02\u0727\u0728\t!\x02\x02\u0728\u073C\x05\u010A\x86\n\u0729" +
		"\u072A\f\b\x02\x02\u072A\u072B\t\"\x02\x02\u072B\u073C\x05\u010A\x86\t" +
		"\u072C\u072D\f\x07\x02\x02\u072D\u072E\x07\u0180\x02\x02\u072E\u073C\x05" +
		"\u010A\x86\b\u072F\u0730\f\x06\x02\x02\u0730\u0731\x07\u0181\x02\x02\u0731" +
		"\u073C\x05\u010A\x86\x07\u0732\u0733\f\x05\x02\x02\u0733\u0734\x07\u017F" +
		"\x02\x02\u0734\u073C\x05\u010A\x86\x06\u0735\u0736\f\x04\x02\x02\u0736" +
		"\u0737\x05\u0154\xAB\x02\u0737\u0738\x05\u010A\x86\x05\u0738\u073C\x03" +
		"\x02\x02\x02\u0739\u073A\f\x03\x02\x02\u073A\u073C\x07\u019F\x02\x02\u073B" +
		"\u0726\x03\x02\x02\x02\u073B\u0729\x03\x02\x02\x02\u073B\u072C\x03\x02" +
		"\x02\x02\u073B\u072F\x03\x02\x02\x02\u073B\u0732\x03\x02\x02\x02\u073B" +
		"\u0735\x03\x02\x02\x02\u073B\u0739\x03\x02\x02\x02\u073C\u073F\x03\x02" +
		"\x02\x02\u073D\u073B\x03\x02\x02\x02\u073D\u073E\x03\x02\x02\x02\u073E" +
		"\u010B\x03\x02\x02\x02\u073F\u073D\x03\x02\x02\x02\u0740\u0741\b\x87\x01" +
		"\x02\u0741\u0743\x07\xCB\x02\x02\u0742\u0744\x05\u0136\x9C\x02\u0743\u0742" +
		"\x03\x02\x02\x02\u0744\u0745\x03\x02\x02\x02\u0745\u0743\x03\x02\x02\x02" +
		"\u0745\u0746\x03\x02\x02\x02\u0746\u0749\x03\x02\x02\x02\u0747\u0748\x07" +
		"\xF1\x02\x02\u0748\u074A\x05\u0102\x82\x02\u0749\u0747\x03\x02\x02\x02" +
		"\u0749\u074A\x03\x02\x02\x02\u074A\u074B\x03\x02\x02\x02\u074B\u074C\x07" +
		"\xF2\x02\x02\u074C\u079C\x03\x02\x02\x02\u074D\u074E\x07\xCB\x02\x02\u074E" +
		"\u0750\x05\u0102\x82\x02\u074F\u0751\x05\u0136\x9C\x02\u0750\u074F\x03" +
		"\x02\x02\x02\u0751\u0752\x03\x02\x02\x02\u0752\u0750\x03\x02\x02\x02\u0752" +
		"\u0753\x03\x02\x02\x02\u0753\u0756\x03\x02\x02\x02\u0754\u0755\x07\xF1" +
		"\x02\x02\u0755\u0757\x05\u0102\x82\x02\u0756\u0754\x03\x02\x02\x02\u0756" +
		"\u0757\x03\x02\x02\x02\u0757\u0758\x03\x02\x02\x02\u0758\u0759\x07\xF2" +
		"\x02\x02\u0759\u079C\x03\x02\x02\x02\u075A\u075B\x07\xCC\x02\x02\u075B" +
		"\u075C\x07\u0185\x02\x02\u075C\u075D\x05\u0102\x82\x02\u075D\u075E\x07" +
		"\xBB\x02\x02\u075E\u075F\x058\x1D\x02\u075F\u0760\x07\u0186\x02\x02\u0760" +
		"\u079C\x03\x02\x02\x02\u0761\u0762\x07/\x02\x02\u0762\u0763\x07\u0185" +
		"\x02\x02\u0763\u0766\x05\u0102\x82\x02\u0764\u0765\x07>\x02\x02\u0765" +
		"\u0767\x07Y\x02\x02\u0766\u0764\x03\x02\x02\x02\u0766\u0767\x03\x02\x02" +
		"\x02\u0767\u0768\x03\x02\x02\x02\u0768\u0769\x07\u0186\x02\x02\u0769\u079C" +
		"\x03\x02\x02\x02\u076A\u076B\x07K\x02\x02\u076B\u076C\x07\u0185\x02\x02" +
		"\u076C\u076F\x05\u0102\x82\x02\u076D\u076E\x07>\x02\x02\u076E\u0770\x07" +
		"Y\x02\x02\u076F\u076D\x03\x02\x02\x02\u076F\u0770\x03\x02\x02\x02\u0770" +
		"\u0771\x03\x02\x02\x02\u0771\u0772\x07\u0186\x02\x02\u0772\u079C\x03\x02" +
		"\x02\x02\u0773\u0774\x07\u013E\x02\x02\u0774\u0775\x07\u0185\x02\x02\u0775" +
		"\u0776\x05\u010A\x86\x02\u0776\u0777\x07\u0109\x02\x02\u0777\u0778\x05" +
		"\u010A\x86\x02\u0778\u0779\x07\u0186\x02\x02\u0779\u079C\x03\x02\x02\x02" +
		"\u077A\u079C\x05\u015C\xAF\x02\u077B\u079C\x07\u0190\x02\x02\u077C\u077D" +
		"\x05\u0142\xA2\x02\u077D\u077E\x07\u0182\x02\x02\u077E\u077F\x07\u0190" +
		"\x02\x02\u077F\u079C\x03\x02\x02\x02\u0780\u0781\x07\u0185\x02\x02\u0781" +
		"\u0782\x05\x9EP\x02\u0782\u0783\x07\u0186\x02\x02\u0783\u079C\x03\x02" +
		"\x02\x02\u0784\u0785\x05\u010E\x88\x02\u0785\u0791\x07\u0185\x02\x02\u0786" +
		"\u0788\x05\u0166\xB4\x02\u0787\u0786\x03\x02\x02\x02\u0787\u0788\x03\x02" +
		"\x02\x02\u0788\u0789\x03\x02\x02\x02\u0789\u078E\x05\u0110\x89\x02\u078A" +
		"\u078B\x07\u0189\x02\x02\u078B\u078D\x05\u0110\x89\x02\u078C\u078A\x03" +
		"\x02\x02\x02\u078D\u0790\x03\x02\x02\x02\u078E\u078C\x03\x02\x02\x02\u078E" +
		"\u078F\x03\x02\x02\x02\u078F\u0792\x03\x02\x02\x02\u0790\u078E\x03\x02" +
		"\x02\x02\u0791\u0787\x03\x02\x02\x02\u0791\u0792\x03\x02\x02\x02\u0792" +
		"\u0793\x03\x02\x02\x02\u0793\u0794\x07\u0186\x02\x02\u0794\u079C\x03\x02" +
		"\x02\x02\u0795\u079C\x05\u0130\x99\x02\u0796\u079C\x05\u0112\x8A\x02\u0797" +
		"\u0798\x07\u0185\x02\x02\u0798\u0799\x05\u0102\x82\x02\u0799\u079A\x07" +
		"\u0186\x02\x02\u079A\u079C\x03\x02\x02\x02\u079B\u0740\x03\x02\x02\x02" +
		"\u079B\u074D\x03\x02\x02\x02\u079B\u075A\x03\x02\x02\x02\u079B\u0761\x03" +
		"\x02\x02\x02\u079B\u076A\x03\x02\x02\x02\u079B\u0773\x03\x02\x02\x02\u079B" +
		"\u077A\x03\x02\x02\x02\u079B\u077B\x03\x02\x02\x02\u079B\u077C\x03\x02" +
		"\x02\x02\u079B\u0780\x03\x02\x02\x02\u079B\u0784\x03\x02\x02\x02\u079B" +
		"\u0795\x03\x02\x02\x02\u079B\u0796\x03\x02\x02\x02\u079B\u0797\x03\x02" +
		"\x02\x02\u079C\u07A4\x03\x02\x02\x02\u079D\u079E\f\x06\x02\x02\u079E\u079F" +
		"\x07\u0183\x02\x02\u079F\u07A0\x05\u010A\x86\x02\u07A0\u07A1\x07\u0184" +
		"\x02\x02\u07A1\u07A3\x03\x02\x02\x02\u07A2\u079D\x03\x02\x02\x02\u07A3" +
		"\u07A6\x03\x02\x02\x02\u07A4\u07A2\x03\x02\x02\x02\u07A4\u07A5\x03\x02" +
		"\x02\x02\u07A5\u010D\x03\x02\x02\x02\u07A6\u07A4\x03\x02\x02\x02\u07A7" +
		"\u07AB\x05\u016E\xB8\x02\u07A8\u07AB\x05\u0172\xBA\x02\u07A9\u07AB\x05" +
		"\u0142\xA2\x02\u07AA\u07A7\x03\x02\x02\x02\u07AA\u07A8\x03\x02\x02\x02" +
		"\u07AA\u07A9\x03\x02\x02\x02\u07AB\u010F\x03\x02\x02\x02\u07AC\u07B1\x05" +
		"\u016C\xB7\x02\u07AD\u07B1\x05\u016A\xB6\x02\u07AE\u07B1\x05\u0168\xB5" +
		"\x02\u07AF\u07B1\x05\u0102\x82\x02\u07B0\u07AC\x03\x02\x02\x02\u07B0\u07AD" +
		"\x03\x02\x02\x02\u07B0\u07AE\x03\x02\x02\x02\u07B0\u07AF\x03\x02\x02\x02" +
		"\u07B1\u0111\x03\x02\x02\x02\u07B2\u07B3\x05\u0142\xA2\x02\u07B3\u0113" +
		"\x03\x02\x02\x02\u07B4\u07B5\x05\u0130\x99\x02\u07B5\u0115\x03\x02\x02" +
		"\x02\u07B6\u07B9\x05\u0130\x99\x02\u07B7\u07B9\x05\u0112\x8A\x02\u07B8" +
		"\u07B6\x03\x02\x02\x02\u07B8\u07B7\x03\x02\x02\x02\u07B9\u0117\x03\x02" +
		"\x02\x02\u07BA\u07BD\x07\u0111\x02\x02\u07BB\u07BE\x05\u011A\x8E\x02\u07BC" +
		"\u07BE\x05\u011E\x90\x02\u07BD\u07BB\x03\x02\x02\x02\u07BD\u07BC\x03\x02" +
		"\x02\x02\u07BD\u07BE\x03\x02\x02\x02\u07BE\u0119\x03\x02\x02\x02\u07BF" +
		"\u07C1\x05\u011C\x8F\x02\u07C0\u07C2\x05\u0120\x91\x02\u07C1\u07C0\x03" +
		"\x02\x02\x02\u07C1\u07C2\x03\x02\x02\x02\u07C2\u011B\x03\x02\x02\x02\u07C3" +
		"\u07C4\x05\u0122\x92\x02\u07C4\u07C5\x05\u016A\xB6\x02\u07C5\u07C7\x03" +
		"\x02\x02\x02\u07C6\u07C3\x03\x02\x02\x02\u07C7\u07C8\x03\x02\x02\x02\u07C8" +
		"\u07C6\x03\x02\x02\x02\u07C8\u07C9\x03\x02\x02\x02\u07C9\u011D\x03\x02" +
		"\x02\x02\u07CA\u07CD\x05\u0120\x91\x02\u07CB\u07CE\x05\u011C\x8F\x02\u07CC" +
		"\u07CE\x05\u0120\x91\x02\u07CD\u07CB\x03\x02\x02\x02\u07CD\u07CC\x03\x02" +
		"\x02\x02\u07CD\u07CE\x03\x02\x02\x02\u07CE\u011F\x03\x02\x02\x02\u07CF" +
		"\u07D0\x05\u0122\x92\x02\u07D0\u07D1\x05\u016A\xB6\x02\u07D1\u07D2\x07" +
		"\u0163\x02\x02\u07D2\u07D3\x05\u016A\xB6\x02\u07D3\u0121\x03\x02\x02\x02" +
		"\u07D4\u07D6\t#\x02\x02\u07D5\u07D4\x03\x02\x02\x02\u07D5\u07D6\x03\x02" +
		"\x02\x02\u07D6\u07D7\x03\x02\x02\x02\u07D7\u07DA\t$\x02\x02\u07D8\u07DA" +
		"\x07\u019A\x02\x02\u07D9\u07D5\x03\x02\x02\x02\u07D9\u07D8\x03\x02\x02" +
		"\x02\u07DA\u0123\x03\x02\x02\x02\u07DB\u07DD\x07\xBB\x02\x02\u07DC\u07DB" +
		"\x03\x02\x02\x02\u07DC\u07DD\x03\x02\x02\x02\u07DD\u07DE\x03\x02\x02\x02" +
		"\u07DE\u07E0\x05\u0130\x99\x02\u07DF\u07E1\x05\u012C\x97\x02\u07E0\u07DF" +
		"\x03\x02\x02\x02\u07E0\u07E1\x03\x02\x02\x02\u07E1\u0125\x03\x02\x02\x02" +
		"\u07E2\u07E4\x07\xBB\x02\x02\u07E3\u07E2\x03\x02\x02\x02\u07E3\u07E4\x03" +
		"\x02\x02\x02\u07E4\u07E5\x03\x02\x02\x02\u07E5\u07E7\x05\u0130\x99\x02" +
		"\u07E6\u07E8\x05\u012C\x97\x02\u07E7\u07E6\x03\x02\x02\x02\u07E7\u07E8" +
		"\x03\x02\x02\x02\u07E8\u0127\x03\x02\x02\x02\u07E9\u07EA\x05\u0130\x99" +
		"\x02\u07EA\u07EB\x05\u012A\x96\x02\u07EB\u0129\x03\x02\x02\x02\u07EC\u07ED" +
		"\x07\u0122\x02\x02\u07ED\u07EF\x05\u0130\x99\x02\u07EE\u07EC\x03\x02\x02" +
		"\x02\u07EF\u07F0\x03\x02\x02\x02\u07F0\u07EE\x03\x02\x02\x02\u07F0\u07F1" +
		"\x03\x02\x02\x02\u07F1\u07F4\x03\x02\x02\x02\u07F2\u07F4\x03\x02\x02\x02" +
		"\u07F3\u07EE\x03\x02\x02\x02\u07F3\u07F2\x03\x02\x02\x02\u07F4\u012B\x03" +
		"\x02\x02\x02\u07F5\u07F6\x07\u0185\x02\x02\u07F6\u07F7\x05\u012E\x98\x02" +
		"\u07F7\u07F8\x07\u0186\x02\x02\u07F8\u012D\x03\x02\x02\x02\u07F9\u07FE" +
		"\x05\u0130\x99\x02\u07FA\u07FB\x07\u0189\x02\x02\u07FB\u07FD\x05\u0130" +
		"\x99\x02\u07FC\u07FA\x03\x02\x02\x02\u07FD\u0800\x03\x02\x02\x02\u07FE" +
		"\u07FC\x03\x02\x02\x02\u07FE\u07FF\x03\x02\x02\x02\u07FF\u012F\x03\x02" +
		"\x02\x02\u0800\u07FE\x03\x02\x02\x02\u0801\u0805\x05\u0132\x9A\x02\u0802" +
		"\u0805\x05\u0134\x9B\x02\u0803\u0805\x05\u0172\xBA\x02\u0804\u0801\x03" +
		"\x02\x02\x02\u0804\u0802\x03\x02\x02\x02\u0804\u0803\x03\x02\x02\x02\u0805" +
		"\u0131\x03\x02\x02\x02\u0806\u0807\t%\x02\x02\u0807\u0133\x03\x02\x02" +
		"\x02\u0808\u0809\x07\u019A\x02\x02\u0809\u0135\x03\x02\x02\x02\u080A\u080B" +
		"\x07\u0173\x02\x02\u080B\u080C\x05\u0102\x82\x02\u080C\u080D\x07\u015C" +
		"\x02\x02\u080D\u080E\x05\u0102\x82\x02\u080E\u0137\x03\x02\x02\x02\u080F" +
		"\u0810\x05\u0142\xA2\x02\u0810\u0139\x03\x02\x02\x02\u0811\u0812\x05\u0142" +
		"\xA2\x02\u0812\u013B\x03\x02\x02\x02\u0813\u0814\x05\u0142\xA2\x02\u0814" +
		"\u013D\x03\x02\x02\x02\u0815\u0816\x05\u0142\xA2\x02\u0816\u013F\x03\x02" +
		"\x02\x02\u0817\u0818\x05\u0142\xA2\x02\u0818\u0141\x03\x02\x02\x02\u0819" +
		"\u081E\x05\u0130\x99\x02\u081A\u081B\x07\u0182\x02\x02\u081B\u081D\x05" +
		"\u0130\x99\x02\u081C\u081A\x03\x02\x02\x02\u081D\u0820\x03\x02\x02\x02" +
		"\u081E\u081F\x03\x02\x02\x02\u081E\u081C\x03\x02\x02\x02\u081F\u0143\x03" +
		"\x02\x02\x02\u0820\u081E\x03\x02\x02\x02\u0821\u0822\x07\u0176\x02\x02" +
		"\u0822\u0823\x05\u014A\xA6\x02\u0823\u0145\x03\x02\x02\x02\u0824\u0825" +
		"\x07=\x02\x02\u0825\u0826\x07\u012C\x02\x02\u0826\u0827\x07\xF7\x02\x02" +
		"\u0827\u0147\x03\x02\x02\x02\u0828\u0829\x07=\x02\x02\u0829\u082A\x07" +
		"\xF7\x02\x02\u082A\u0149\x03\x02\x02\x02\u082B\u082C\x07\u0185\x02\x02" +
		"\u082C\u0831\x05\u014C\xA7\x02\u082D\u082E\x07\u0189\x02\x02\u082E\u0830" +
		"\x05\u014C\xA7\x02\u082F\u082D\x03\x02\x02\x02\u0830\u0833\x03\x02\x02" +
		"\x02\u0831\u082F\x03\x02\x02\x02\u0831\u0832\x03\x02\x02\x02\u0832\u0834" +
		"\x03\x02\x02\x02\u0833\u0831\x03\x02\x02\x02\u0834\u0835\x07\u0186\x02" +
		"\x02\u0835\u014B\x03\x02\x02\x02\u0836\u083B\x05\u014E\xA8\x02\u0837\u0839" +
		"\x07\u017A\x02\x02\u0838\u0837\x03\x02\x02\x02\u0838\u0839\x03\x02\x02" +
		"\x02\u0839\u083A\x03\x02\x02\x02\u083A\u083C\x05\u0150\xA9\x02\u083B\u0838" +
		"\x03\x02\x02\x02\u083B\u083C\x03\x02\x02\x02\u083C\u014D\x03\x02\x02\x02" +
		"\u083D\u0841\x05\u0130\x99\x02\u083E\u0841\x05\u0112\x8A\x02\u083F\u0841" +
		"\x07\u019A\x02\x02\u0840\u083D\x03\x02\x02\x02\u0840\u083E\x03\x02\x02" +
		"\x02\u0840\u083F\x03\x02\x02\x02\u0841\u014F\x03\x02\x02\x02\u0842\u0847" +
		"\x07\u019B\x02\x02\u0843\u0847\x07\u019C\x02\x02\u0844\u0847\x05\u0164" +
		"\xB3\x02\u0845\u0847\x07\u019A\x02\x02\u0846\u0842\x03\x02\x02\x02\u0846" +
		"\u0843\x03\x02\x02\x02\u0846\u0844\x03\x02\x02\x02\u0846\u0845\x03\x02" +
		"\x02\x02\u0847\u0151\x03\x02\x02\x02\u0848\u084F\x07\xB7\x02\x02\u0849" +
		"\u084A\x07\u0180\x02\x02\u084A\u084F\x07\u0180\x02\x02\u084B\u084F\x07" +
		"\u0133\x02\x02\u084C\u084D\x07\u017F\x02\x02\u084D\u084F\x07\u017F\x02" +
		"\x02\u084E\u0848\x03\x02\x02\x02\u084E\u0849\x03\x02\x02\x02\u084E\u084B" +
		"\x03\x02\x02\x02\u084E\u084C\x03\x02\x02\x02\u084F\u0153\x03\x02\x02\x02" +
		"\u0850\u085F\x07\u017A\x02\x02\u0851\u085F\x07\u017B\x02\x02\u0852\u085F" +
		"\x07\u017C\x02\x02\u0853\u0854\x07\u017C\x02\x02\u0854\u085F\x07\u017A" +
		"\x02\x02\u0855\u0856\x07\u017B\x02\x02\u0856\u085F\x07\u017A\x02\x02\u0857" +
		"\u0858\x07\u017C\x02\x02\u0858\u085F\x07\u017B\x02\x02\u0859\u085A\x07" +
		"\u017D\x02\x02\u085A\u085F\x07\u017A\x02\x02\u085B\u085C\x07\u017C\x02" +
		"\x02\u085C\u085D\x07\u017A\x02\x02\u085D\u085F\x07\u017B\x02\x02\u085E" +
		"\u0850\x03\x02\x02\x02\u085E\u0851\x03\x02\x02\x02\u085E\u0852\x03\x02" +
		"\x02\x02\u085E\u0853\x03\x02\x02\x02\u085E\u0855\x03\x02\x02\x02\u085E" +
		"\u0857\x03\x02\x02\x02\u085E\u0859\x03\x02\x02\x02\u085E\u085B\x03\x02" +
		"\x02\x02\u085F\u0155\x03\x02\x02\x02\u0860\u0861\x07\u017C\x02\x02\u0861" +
		"\u0868\x07\u017C\x02\x02\u0862\u0863\x07\u017B\x02\x02\u0863\u0868\x07" +
		"\u017B\x02\x02\u0864\u0868\x07\u0180\x02\x02\u0865\u0868\x07\u0181\x02" +
		"\x02\u0866\u0868\x07\u017F\x02\x02\u0867\u0860\x03\x02\x02\x02\u0867\u0862" +
		"\x03\x02\x02\x02\u0867\u0864\x03\x02\x02\x02\u0867\u0865\x03\x02\x02\x02" +
		"\u0867\u0866\x03\x02\x02\x02\u0868\u0157\x03\x02\x02\x02\u0869\u086A\t" +
		"&\x02\x02\u086A\u0159\x03\x02\x02\x02\u086B\u086C\t\'\x02\x02\u086C\u015B" +
		"\x03\x02\x02\x02\u086D\u087C\x05\u0118\x8D\x02\u086E\u087C\x05\u015E\xB0" +
		"\x02\u086F\u087C\x05\u0160\xB1\x02\u0870\u0872\x07\u0192\x02\x02\u0871" +
		"\u0870\x03\x02\x02\x02\u0871\u0872\x03\x02\x02\x02\u0872\u0873\x03\x02" +
		"\x02\x02\u0873\u087C\x05\u0162\xB2\x02\u0874\u087C\x05\u0164\xB3\x02\u0875" +
		"\u087C\x07\u019C\x02\x02\u0876\u087C\x07\u019D\x02\x02\u0877\u0879\x07" +
		"\u012C\x02\x02\u0878\u0877\x03\x02\x02\x02\u0878\u0879\x03\x02\x02\x02" +
		"\u0879\u087A\x03\x02\x02\x02\u087A\u087C\x07\u012D\x02\x02\u087B\u086D" +
		"\x03\x02\x02\x02\u087B\u086E\x03\x02\x02\x02\u087B\u086F\x03\x02\x02\x02" +
		"\u087B\u0871\x03\x02\x02\x02\u087B\u0874\x03\x02\x02\x02\u087B\u0875\x03" +
		"\x02\x02\x02\u087B\u0876\x03\x02\x02\x02\u087B\u0878\x03\x02\x02\x02\u087C" +
		"\u015D\x03\x02\x02\x02\u087D\u087E\x05\u0168\xB5\x02\u087E\u087F\x05\u0160" +
		"\xB1\x02\u087F\u015F\x03\x02\x02\x02\u0880\u0881\x07\u019A\x02\x02\u0881" +
		"\u0161\x03\x02\x02\x02\u0882\u0883\x07\u019B\x02\x02\u0883\u0163\x03\x02" +
		"\x02\x02\u0884\u0885\t(\x02\x02\u0885\u0165\x03\x02\x02\x02\u0886\u0887" +
		"\t)\x02\x02\u0887\u0167\x03\x02\x02\x02\u0888\u0889\t*\x02\x02\u0889\u0169" +
		"\x03\x02\x02\x02\u088A\u088B\t+\x02\x02\u088B\u016B\x03\x02\x02\x02\u088C" +
		"\u088D\t,\x02\x02\u088D\u016D\x03\x02\x02\x02\u088E\u088F\t-\x02\x02\u088F" +
		"\u016F\x03\x02\x02\x02\u0890\u0891\t.\x02\x02\u0891\u0171\x03\x02\x02" +
		"\x02\u0892\u0893\t/\x02\x02\u0893\u0173\x03\x02\x02\x02\xFF\u017C\u017E" +
		"\u01A2\u01B4\u01B8\u01C1\u01C6\u01CD\u01D8\u01E1\u01ED\u01F0\u01F7\u01FF" +
		"\u0204\u0207\u020E\u0216\u021A\u0223\u0227\u022B\u022F\u0238\u023D\u0241" +
		"\u0245\u0249\u024C\u0250\u0255\u025B\u0260\u0265\u0268\u026C\u0274\u027C" +
		"\u0280\u0284\u0288\u028C\u0290\u0294\u0298\u029C\u02A0\u02A4\u02A8\u02AC" +
		"\u02B0\u02B4\u02B8\u02BC\u02C0\u02C2\u02CC\u02D4\u02EC\u02F3\u02F9\u02FC" +
		"\u02FF\u0309\u030C\u0314\u0320\u0338\u0345\u034A\u034E\u0356\u035A\u0360" +
		"\u036A\u036E\u0374\u0378\u037C\u037F\u0388\u038C\u0393\u0396\u03A0\u03A8" +
		"\u03B0\u03B4\u03C3\u03D6\u03E1\u03E5\u03EC\u03F1\u03F7\u03FB\u0402\u0406" +
		"\u040A\u040E\u0416\u041A\u041F\u0425\u042B\u042E\u0432\u043D\u0446\u0454" +
		"\u0460\u046F\u0472\u0476\u0479\u047B\u0480\u0484\u0487\u048B\u0494\u049D" +
		"\u04A7\u04AC\u04B8\u04BB\u04BE\u04C1\u04C7\u04CB\u04D3\u04D6\u04DB\u04DE" +
		"\u04E0\u04EE\u04F9\u04FE\u0506\u0509\u050C\u0511\u0513\u0515\u051A\u051D" +
		"\u0521\u0524\u0527\u0533\u053A\u0545\u0560\u0576\u0588\u058D\u0599\u05A6" +
		"\u05B2\u05BE\u05C3\u05DE\u05E6\u05EA\u05ED\u05F0\u05F7\u05FA\u05FD\u0600" +
		"\u0603\u0606\u060B\u060E\u0617\u061C\u0620\u0625\u062E\u0641\u0649\u0651" +
		"\u0655\u0659";
	private static readonly _serializedATNSegment4: string =
		"\u0663\u067D\u0685\u0691\u06A7\u06A9\u06B4\u06B7\u06B9\u06BD\u06C1\u06C8" +
		"\u06D1\u06D7\u06E4\u06EB\u06F0\u06F6\u06FD\u06FF\u0702\u070E\u0713\u0716" +
		"\u071C\u071E\u0724\u073B\u073D\u0745\u0749\u0752\u0756\u0766\u076F\u0787" +
		"\u078E\u0791\u079B\u07A4\u07AA\u07B0\u07B8\u07BD\u07C1\u07C8\u07CD\u07D5" +
		"\u07D9\u07DC\u07E0\u07E3\u07E7\u07F0\u07F3\u07FE\u0804\u081E\u0831\u0838" +
		"\u083B\u0840\u0846\u084E\u085E\u0867\u0871\u0878\u087B";
	public static readonly _serializedATN: string = Utils.join(
		[
			FlinkSQLParser._serializedATNSegment0,
			FlinkSQLParser._serializedATNSegment1,
			FlinkSQLParser._serializedATNSegment2,
			FlinkSQLParser._serializedATNSegment3,
			FlinkSQLParser._serializedATNSegment4,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FlinkSQLParser.__ATN) {
			FlinkSQLParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FlinkSQLParser._serializedATN));
		}

		return FlinkSQLParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public EOF(): TerminalNode { return this.getToken(FlinkSQLParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_program; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public sqlStatements(): SqlStatementsContext {
		return this.getRuleContext(0, SqlStatementsContext);
	}
	public EOF(): TerminalNode { return this.getToken(FlinkSQLParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_statement; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SqlStatementsContext extends ParserRuleContext {
	public sqlStatement(): SqlStatementContext[];
	public sqlStatement(i: number): SqlStatementContext;
	public sqlStatement(i?: number): SqlStatementContext | SqlStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SqlStatementContext);
		} else {
			return this.getRuleContext(i, SqlStatementContext);
		}
	}
	public emptyStatement(): EmptyStatementContext[];
	public emptyStatement(i: number): EmptyStatementContext;
	public emptyStatement(i?: number): EmptyStatementContext | EmptyStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EmptyStatementContext);
		} else {
			return this.getRuleContext(i, EmptyStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_sqlStatements; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterSqlStatements) {
			listener.enterSqlStatements(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitSqlStatements) {
			listener.exitSqlStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitSqlStatements) {
			return visitor.visitSqlStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SqlStatementContext extends ParserRuleContext {
	public ddlStatement(): DdlStatementContext | undefined {
		return this.tryGetRuleContext(0, DdlStatementContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(FlinkSQLParser.SEMICOLON, 0); }
	public dmlStatement(): DmlStatementContext | undefined {
		return this.tryGetRuleContext(0, DmlStatementContext);
	}
	public describeStatement(): DescribeStatementContext | undefined {
		return this.tryGetRuleContext(0, DescribeStatementContext);
	}
	public explainStatement(): ExplainStatementContext | undefined {
		return this.tryGetRuleContext(0, ExplainStatementContext);
	}
	public useStatement(): UseStatementContext | undefined {
		return this.tryGetRuleContext(0, UseStatementContext);
	}
	public showStatememt(): ShowStatememtContext | undefined {
		return this.tryGetRuleContext(0, ShowStatememtContext);
	}
	public loadStatement(): LoadStatementContext | undefined {
		return this.tryGetRuleContext(0, LoadStatementContext);
	}
	public unloadStatememt(): UnloadStatememtContext | undefined {
		return this.tryGetRuleContext(0, UnloadStatememtContext);
	}
	public setStatememt(): SetStatememtContext | undefined {
		return this.tryGetRuleContext(0, SetStatememtContext);
	}
	public resetStatememt(): ResetStatememtContext | undefined {
		return this.tryGetRuleContext(0, ResetStatememtContext);
	}
	public jarStatememt(): JarStatememtContext | undefined {
		return this.tryGetRuleContext(0, JarStatememtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_sqlStatement; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterSqlStatement) {
			listener.enterSqlStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitSqlStatement) {
			listener.exitSqlStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitSqlStatement) {
			return visitor.visitSqlStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStatementContext extends ParserRuleContext {
	public SEMICOLON(): TerminalNode { return this.getToken(FlinkSQLParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_emptyStatement; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterEmptyStatement) {
			listener.enterEmptyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitEmptyStatement) {
			listener.exitEmptyStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitEmptyStatement) {
			return visitor.visitEmptyStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DdlStatementContext extends ParserRuleContext {
	public createTable(): CreateTableContext | undefined {
		return this.tryGetRuleContext(0, CreateTableContext);
	}
	public createDatabase(): CreateDatabaseContext | undefined {
		return this.tryGetRuleContext(0, CreateDatabaseContext);
	}
	public createView(): CreateViewContext | undefined {
		return this.tryGetRuleContext(0, CreateViewContext);
	}
	public createFunction(): CreateFunctionContext | undefined {
		return this.tryGetRuleContext(0, CreateFunctionContext);
	}
	public createCatalog(): CreateCatalogContext | undefined {
		return this.tryGetRuleContext(0, CreateCatalogContext);
	}
	public alterTable(): AlterTableContext | undefined {
		return this.tryGetRuleContext(0, AlterTableContext);
	}
	public alertView(): AlertViewContext | undefined {
		return this.tryGetRuleContext(0, AlertViewContext);
	}
	public alterDatabase(): AlterDatabaseContext | undefined {
		return this.tryGetRuleContext(0, AlterDatabaseContext);
	}
	public alterFunction(): AlterFunctionContext | undefined {
		return this.tryGetRuleContext(0, AlterFunctionContext);
	}
	public dropCatalog(): DropCatalogContext | undefined {
		return this.tryGetRuleContext(0, DropCatalogContext);
	}
	public dropTable(): DropTableContext | undefined {
		return this.tryGetRuleContext(0, DropTableContext);
	}
	public dropDatabase(): DropDatabaseContext | undefined {
		return this.tryGetRuleContext(0, DropDatabaseContext);
	}
	public dropView(): DropViewContext | undefined {
		return this.tryGetRuleContext(0, DropViewContext);
	}
	public dropFunction(): DropFunctionContext | undefined {
		return this.tryGetRuleContext(0, DropFunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_ddlStatement; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterDdlStatement) {
			listener.enterDdlStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitDdlStatement) {
			listener.exitDdlStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitDdlStatement) {
			return visitor.visitDdlStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DmlStatementContext extends ParserRuleContext {
	public queryStatement(): QueryStatementContext | undefined {
		return this.tryGetRuleContext(0, QueryStatementContext);
	}
	public insertStatement(): InsertStatementContext | undefined {
		return this.tryGetRuleContext(0, InsertStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_dmlStatement; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterDmlStatement) {
			listener.enterDmlStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitDmlStatement) {
			listener.exitDmlStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitDmlStatement) {
			return visitor.visitDmlStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DescribeStatementContext extends ParserRuleContext {
	public tablePath(): TablePathContext {
		return this.getRuleContext(0, TablePathContext);
	}
	public KW_DESCRIBE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DESCRIBE, 0); }
	public KW_DESC(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DESC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_describeStatement; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterDescribeStatement) {
			listener.enterDescribeStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitDescribeStatement) {
			listener.exitDescribeStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitDescribeStatement) {
			return visitor.visitDescribeStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplainStatementContext extends ParserRuleContext {
	public KW_EXPLAIN(): TerminalNode { return this.getToken(FlinkSQLParser.KW_EXPLAIN, 0); }
	public dmlStatement(): DmlStatementContext | undefined {
		return this.tryGetRuleContext(0, DmlStatementContext);
	}
	public insertSimpleStatement(): InsertSimpleStatementContext | undefined {
		return this.tryGetRuleContext(0, InsertSimpleStatementContext);
	}
	public insertMulStatement(): InsertMulStatementContext | undefined {
		return this.tryGetRuleContext(0, InsertMulStatementContext);
	}
	public explainDetails(): ExplainDetailsContext | undefined {
		return this.tryGetRuleContext(0, ExplainDetailsContext);
	}
	public KW_PLAN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PLAN, 0); }
	public KW_FOR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_explainStatement; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterExplainStatement) {
			listener.enterExplainStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitExplainStatement) {
			listener.exitExplainStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitExplainStatement) {
			return visitor.visitExplainStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplainDetailsContext extends ParserRuleContext {
	public explainDetail(): ExplainDetailContext[];
	public explainDetail(i: number): ExplainDetailContext;
	public explainDetail(i?: number): ExplainDetailContext | ExplainDetailContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExplainDetailContext);
		} else {
			return this.getRuleContext(i, ExplainDetailContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_explainDetails; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterExplainDetails) {
			listener.enterExplainDetails(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitExplainDetails) {
			listener.exitExplainDetails(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitExplainDetails) {
			return visitor.visitExplainDetails(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplainDetailContext extends ParserRuleContext {
	public KW_CHANGELOG_MODE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CHANGELOG_MODE, 0); }
	public KW_JSON_EXECUTION_PLAN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_JSON_EXECUTION_PLAN, 0); }
	public KW_ESTIMATED_COST(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ESTIMATED_COST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_explainDetail; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterExplainDetail) {
			listener.enterExplainDetail(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitExplainDetail) {
			listener.exitExplainDetail(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitExplainDetail) {
			return visitor.visitExplainDetail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UseStatementContext extends ParserRuleContext {
	public KW_USE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_USE, 0); }
	public KW_CATALOG(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CATALOG, 0); }
	public catalogPath(): CatalogPathContext | undefined {
		return this.tryGetRuleContext(0, CatalogPathContext);
	}
	public databasePath(): DatabasePathContext | undefined {
		return this.tryGetRuleContext(0, DatabasePathContext);
	}
	public useModuleStatement(): UseModuleStatementContext | undefined {
		return this.tryGetRuleContext(0, UseModuleStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_useStatement; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterUseStatement) {
			listener.enterUseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitUseStatement) {
			listener.exitUseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitUseStatement) {
			return visitor.visitUseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UseModuleStatementContext extends ParserRuleContext {
	public KW_USE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_USE, 0); }
	public KW_MODULES(): TerminalNode { return this.getToken(FlinkSQLParser.KW_MODULES, 0); }
	public uid(): UidContext[];
	public uid(i: number): UidContext;
	public uid(i?: number): UidContext | UidContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UidContext);
		} else {
			return this.getRuleContext(i, UidContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_useModuleStatement; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterUseModuleStatement) {
			listener.enterUseModuleStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitUseModuleStatement) {
			listener.exitUseModuleStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitUseModuleStatement) {
			return visitor.visitUseModuleStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShowStatememtContext extends ParserRuleContext {
	public KW_SHOW(): TerminalNode { return this.getToken(FlinkSQLParser.KW_SHOW, 0); }
	public KW_CATALOGS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CATALOGS, 0); }
	public KW_DATABASES(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DATABASES, 0); }
	public KW_VIEWS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_VIEWS, 0); }
	public KW_JARS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_JARS, 0); }
	public KW_CURRENT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CURRENT, 0); }
	public KW_CATALOG(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CATALOG, 0); }
	public KW_DATABASE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DATABASE, 0); }
	public KW_TABLES(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TABLES, 0); }
	public tablePath(): TablePathContext | undefined {
		return this.tryGetRuleContext(0, TablePathContext);
	}
	public likePredicate(): LikePredicateContext | undefined {
		return this.tryGetRuleContext(0, LikePredicateContext);
	}
	public KW_FROM(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FROM, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_IN, 0); }
	public KW_COLUMNS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_COLUMNS, 0); }
	public uid(): UidContext | undefined {
		return this.tryGetRuleContext(0, UidContext);
	}
	public KW_CREATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CREATE, 0); }
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TABLE, 0); }
	public KW_VIEW(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_VIEW, 0); }
	public KW_FUNCTIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FUNCTIONS, 0); }
	public KW_USER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_USER, 0); }
	public KW_MODULES(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MODULES, 0); }
	public KW_FULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_showStatememt; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterShowStatememt) {
			listener.enterShowStatememt(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitShowStatememt) {
			listener.exitShowStatememt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitShowStatememt) {
			return visitor.visitShowStatememt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoadStatementContext extends ParserRuleContext {
	public KW_LOAD(): TerminalNode { return this.getToken(FlinkSQLParser.KW_LOAD, 0); }
	public KW_MODULE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_MODULE, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_WITH, 0); }
	public tablePropertyList(): TablePropertyListContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_loadStatement; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterLoadStatement) {
			listener.enterLoadStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitLoadStatement) {
			listener.exitLoadStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitLoadStatement) {
			return visitor.visitLoadStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnloadStatememtContext extends ParserRuleContext {
	public KW_UNLOAD(): TerminalNode { return this.getToken(FlinkSQLParser.KW_UNLOAD, 0); }
	public KW_MODULE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_MODULE, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_unloadStatememt; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterUnloadStatememt) {
			listener.enterUnloadStatememt(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitUnloadStatememt) {
			listener.exitUnloadStatememt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitUnloadStatememt) {
			return visitor.visitUnloadStatememt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetStatememtContext extends ParserRuleContext {
	public KW_SET(): TerminalNode { return this.getToken(FlinkSQLParser.KW_SET, 0); }
	public tableProperty(): TablePropertyContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_setStatememt; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterSetStatememt) {
			listener.enterSetStatememt(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitSetStatememt) {
			listener.exitSetStatememt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitSetStatememt) {
			return visitor.visitSetStatememt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResetStatememtContext extends ParserRuleContext {
	public KW_RESET(): TerminalNode { return this.getToken(FlinkSQLParser.KW_RESET, 0); }
	public tablePropertyKey(): TablePropertyKeyContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyKeyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_resetStatememt; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterResetStatememt) {
			listener.enterResetStatememt(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitResetStatememt) {
			listener.exitResetStatememt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitResetStatememt) {
			return visitor.visitResetStatememt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JarStatememtContext extends ParserRuleContext {
	public KW_JAR(): TerminalNode { return this.getToken(FlinkSQLParser.KW_JAR, 0); }
	public jarFileName(): JarFileNameContext {
		return this.getRuleContext(0, JarFileNameContext);
	}
	public KW_ADD(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ADD, 0); }
	public KW_REMOVE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_REMOVE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_jarStatememt; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterJarStatememt) {
			listener.enterJarStatememt(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitJarStatememt) {
			listener.exitJarStatememt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitJarStatememt) {
			return visitor.visitJarStatememt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DtFilePathContext extends ParserRuleContext {
	public SLASH_TEXT(): TerminalNode[];
	public SLASH_TEXT(i: number): TerminalNode;
	public SLASH_TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.SLASH_TEXT);
		} else {
			return this.getToken(FlinkSQLParser.SLASH_TEXT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_dtFilePath; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterDtFilePath) {
			listener.enterDtFilePath(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitDtFilePath) {
			listener.exitDtFilePath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitDtFilePath) {
			return visitor.visitDtFilePath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateTableContext extends ParserRuleContext {
	public simpleCreateTable(): SimpleCreateTableContext | undefined {
		return this.tryGetRuleContext(0, SimpleCreateTableContext);
	}
	public createTableAsSelect(): CreateTableAsSelectContext | undefined {
		return this.tryGetRuleContext(0, CreateTableAsSelectContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_createTable; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterCreateTable) {
			listener.enterCreateTable(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitCreateTable) {
			listener.exitCreateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitCreateTable) {
			return visitor.visitCreateTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleCreateTableContext extends ParserRuleContext {
	public KW_CREATE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_CREATE, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_TABLE, 0); }
	public tablePathCreate(): TablePathCreateContext {
		return this.getRuleContext(0, TablePathCreateContext);
	}
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public columnOptionDefinition(): ColumnOptionDefinitionContext[];
	public columnOptionDefinition(i: number): ColumnOptionDefinitionContext;
	public columnOptionDefinition(i?: number): ColumnOptionDefinitionContext | ColumnOptionDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnOptionDefinitionContext);
		} else {
			return this.getRuleContext(i, ColumnOptionDefinitionContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	public withOption(): WithOptionContext {
		return this.getRuleContext(0, WithOptionContext);
	}
	public KW_TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TEMPORARY, 0); }
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	public watermarkDefinition(): WatermarkDefinitionContext | undefined {
		return this.tryGetRuleContext(0, WatermarkDefinitionContext);
	}
	public tableConstraint(): TableConstraintContext | undefined {
		return this.tryGetRuleContext(0, TableConstraintContext);
	}
	public selfDefinitionClause(): SelfDefinitionClauseContext | undefined {
		return this.tryGetRuleContext(0, SelfDefinitionClauseContext);
	}
	public commentSpec(): CommentSpecContext | undefined {
		return this.tryGetRuleContext(0, CommentSpecContext);
	}
	public partitionDefinition(): PartitionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, PartitionDefinitionContext);
	}
	public likeDefinition(): LikeDefinitionContext | undefined {
		return this.tryGetRuleContext(0, LikeDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_simpleCreateTable; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterSimpleCreateTable) {
			listener.enterSimpleCreateTable(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitSimpleCreateTable) {
			listener.exitSimpleCreateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitSimpleCreateTable) {
			return visitor.visitSimpleCreateTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateTableAsSelectContext extends ParserRuleContext {
	public KW_CREATE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_CREATE, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_TABLE, 0); }
	public tablePathCreate(): TablePathCreateContext {
		return this.getRuleContext(0, TablePathCreateContext);
	}
	public withOption(): WithOptionContext {
		return this.getRuleContext(0, WithOptionContext);
	}
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_AS, 0); }
	public queryStatement(): QueryStatementContext | undefined {
		return this.tryGetRuleContext(0, QueryStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_createTableAsSelect; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterCreateTableAsSelect) {
			listener.enterCreateTableAsSelect(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitCreateTableAsSelect) {
			listener.exitCreateTableAsSelect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitCreateTableAsSelect) {
			return visitor.visitCreateTableAsSelect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnOptionDefinitionContext extends ParserRuleContext {
	public physicalColumnDefinition(): PhysicalColumnDefinitionContext | undefined {
		return this.tryGetRuleContext(0, PhysicalColumnDefinitionContext);
	}
	public metadataColumnDefinition(): MetadataColumnDefinitionContext | undefined {
		return this.tryGetRuleContext(0, MetadataColumnDefinitionContext);
	}
	public computedColumnDefinition(): ComputedColumnDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ComputedColumnDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_columnOptionDefinition; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterColumnOptionDefinition) {
			listener.enterColumnOptionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitColumnOptionDefinition) {
			listener.exitColumnOptionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitColumnOptionDefinition) {
			return visitor.visitColumnOptionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PhysicalColumnDefinitionContext extends ParserRuleContext {
	public columnName(): ColumnNameContext {
		return this.getRuleContext(0, ColumnNameContext);
	}
	public columnType(): ColumnTypeContext {
		return this.getRuleContext(0, ColumnTypeContext);
	}
	public columnConstraint(): ColumnConstraintContext | undefined {
		return this.tryGetRuleContext(0, ColumnConstraintContext);
	}
	public commentSpec(): CommentSpecContext | undefined {
		return this.tryGetRuleContext(0, CommentSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_physicalColumnDefinition; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterPhysicalColumnDefinition) {
			listener.enterPhysicalColumnDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitPhysicalColumnDefinition) {
			listener.exitPhysicalColumnDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitPhysicalColumnDefinition) {
			return visitor.visitPhysicalColumnDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnNameContext extends ParserRuleContext {
	public uid(): UidContext | undefined {
		return this.tryGetRuleContext(0, UidContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_columnName; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterColumnName) {
			listener.enterColumnName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitColumnName) {
			listener.exitColumnName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitColumnName) {
			return visitor.visitColumnName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnNameListContext extends ParserRuleContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public columnName(): ColumnNameContext[];
	public columnName(i: number): ColumnNameContext;
	public columnName(i?: number): ColumnNameContext | ColumnNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnNameContext);
		} else {
			return this.getRuleContext(i, ColumnNameContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_columnNameList; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterColumnNameList) {
			listener.enterColumnNameList(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitColumnNameList) {
			listener.exitColumnNameList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitColumnNameList) {
			return visitor.visitColumnNameList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnTypeContext extends ParserRuleContext {
	public _typeName!: Token;
	public _type!: Token;
	public KW_DATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DATE, 0); }
	public KW_BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_BOOLEAN, 0); }
	public KW_NULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NULL, 0); }
	public KW_CHAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CHAR, 0); }
	public KW_VARCHAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_VARCHAR, 0); }
	public KW_STRING(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_STRING, 0); }
	public KW_BINARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_BINARY, 0); }
	public KW_VARBINARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_VARBINARY, 0); }
	public KW_BYTES(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_BYTES, 0); }
	public KW_TINYINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TINYINT, 0); }
	public KW_SMALLINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SMALLINT, 0); }
	public KW_INT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_INT, 0); }
	public KW_INTEGER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_INTEGER, 0); }
	public KW_BIGINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_BIGINT, 0); }
	public KW_TIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TIME, 0); }
	public KW_TIMESTAMP_LTZ(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TIMESTAMP_LTZ, 0); }
	public KW_DATETIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DATETIME, 0); }
	public lengthOneDimension(): LengthOneDimensionContext | undefined {
		return this.tryGetRuleContext(0, LengthOneDimensionContext);
	}
	public KW_TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TIMESTAMP, 0); }
	public KW_ZONE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ZONE, 0); }
	public KW_WITHOUT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_WITHOUT, 0); }
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_WITH, 0); }
	public KW_LOCAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LOCAL, 0); }
	public KW_TIMESTAMP_3(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TIMESTAMP_3, 0); }
	public KW_TIMESTAMP_6(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TIMESTAMP_6, 0); }
	public KW_TIMESTAMP_9(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TIMESTAMP_9, 0); }
	public KW_DECIMAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DECIMAL, 0); }
	public KW_DEC(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DEC, 0); }
	public KW_NUMERIC(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NUMERIC, 0); }
	public KW_FLOAT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FLOAT, 0); }
	public KW_DOUBLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DOUBLE, 0); }
	public lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext | undefined {
		return this.tryGetRuleContext(0, LengthTwoOptionalDimensionContext);
	}
	public KW_ARRAY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ARRAY, 0); }
	public KW_MULTISET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MULTISET, 0); }
	public lengthOneTypeDimension(): LengthOneTypeDimensionContext | undefined {
		return this.tryGetRuleContext(0, LengthOneTypeDimensionContext);
	}
	public KW_MAP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MAP, 0); }
	public mapTypeDimension(): MapTypeDimensionContext | undefined {
		return this.tryGetRuleContext(0, MapTypeDimensionContext);
	}
	public KW_ROW(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ROW, 0); }
	public rowTypeDimension(): RowTypeDimensionContext | undefined {
		return this.tryGetRuleContext(0, RowTypeDimensionContext);
	}
	public KW_RAW(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_RAW, 0); }
	public lengthTwoStringDimension(): LengthTwoStringDimensionContext | undefined {
		return this.tryGetRuleContext(0, LengthTwoStringDimensionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_columnType; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterColumnType) {
			listener.enterColumnType(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitColumnType) {
			listener.exitColumnType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitColumnType) {
			return visitor.visitColumnType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LengthOneDimensionContext extends ParserRuleContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public decimalLiteral(): DecimalLiteralContext {
		return this.getRuleContext(0, DecimalLiteralContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_lengthOneDimension; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterLengthOneDimension) {
			listener.enterLengthOneDimension(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitLengthOneDimension) {
			listener.exitLengthOneDimension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitLengthOneDimension) {
			return visitor.visitLengthOneDimension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LengthTwoOptionalDimensionContext extends ParserRuleContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public decimalLiteral(): DecimalLiteralContext[];
	public decimalLiteral(i: number): DecimalLiteralContext;
	public decimalLiteral(i?: number): DecimalLiteralContext | DecimalLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DecimalLiteralContext);
		} else {
			return this.getRuleContext(i, DecimalLiteralContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_lengthTwoOptionalDimension; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterLengthTwoOptionalDimension) {
			listener.enterLengthTwoOptionalDimension(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitLengthTwoOptionalDimension) {
			listener.exitLengthTwoOptionalDimension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitLengthTwoOptionalDimension) {
			return visitor.visitLengthTwoOptionalDimension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LengthTwoStringDimensionContext extends ParserRuleContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public stringLiteral(): StringLiteralContext[];
	public stringLiteral(i: number): StringLiteralContext;
	public stringLiteral(i?: number): StringLiteralContext | StringLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringLiteralContext);
		} else {
			return this.getRuleContext(i, StringLiteralContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_lengthTwoStringDimension; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterLengthTwoStringDimension) {
			listener.enterLengthTwoStringDimension(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitLengthTwoStringDimension) {
			listener.exitLengthTwoStringDimension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitLengthTwoStringDimension) {
			return visitor.visitLengthTwoStringDimension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LengthOneTypeDimensionContext extends ParserRuleContext {
	public LESS_SYMBOL(): TerminalNode { return this.getToken(FlinkSQLParser.LESS_SYMBOL, 0); }
	public columnType(): ColumnTypeContext {
		return this.getRuleContext(0, ColumnTypeContext);
	}
	public GREATER_SYMBOL(): TerminalNode { return this.getToken(FlinkSQLParser.GREATER_SYMBOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_lengthOneTypeDimension; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterLengthOneTypeDimension) {
			listener.enterLengthOneTypeDimension(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitLengthOneTypeDimension) {
			listener.exitLengthOneTypeDimension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitLengthOneTypeDimension) {
			return visitor.visitLengthOneTypeDimension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapTypeDimensionContext extends ParserRuleContext {
	public LESS_SYMBOL(): TerminalNode { return this.getToken(FlinkSQLParser.LESS_SYMBOL, 0); }
	public columnType(): ColumnTypeContext[];
	public columnType(i: number): ColumnTypeContext;
	public columnType(i?: number): ColumnTypeContext | ColumnTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnTypeContext);
		} else {
			return this.getRuleContext(i, ColumnTypeContext);
		}
	}
	public GREATER_SYMBOL(): TerminalNode { return this.getToken(FlinkSQLParser.GREATER_SYMBOL, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_mapTypeDimension; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterMapTypeDimension) {
			listener.enterMapTypeDimension(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitMapTypeDimension) {
			listener.exitMapTypeDimension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitMapTypeDimension) {
			return visitor.visitMapTypeDimension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RowTypeDimensionContext extends ParserRuleContext {
	public LESS_SYMBOL(): TerminalNode { return this.getToken(FlinkSQLParser.LESS_SYMBOL, 0); }
	public columnName(): ColumnNameContext[];
	public columnName(i: number): ColumnNameContext;
	public columnName(i?: number): ColumnNameContext | ColumnNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnNameContext);
		} else {
			return this.getRuleContext(i, ColumnNameContext);
		}
	}
	public columnType(): ColumnTypeContext[];
	public columnType(i: number): ColumnTypeContext;
	public columnType(i?: number): ColumnTypeContext | ColumnTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnTypeContext);
		} else {
			return this.getRuleContext(i, ColumnTypeContext);
		}
	}
	public GREATER_SYMBOL(): TerminalNode { return this.getToken(FlinkSQLParser.GREATER_SYMBOL, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_rowTypeDimension; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterRowTypeDimension) {
			listener.enterRowTypeDimension(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitRowTypeDimension) {
			listener.exitRowTypeDimension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitRowTypeDimension) {
			return visitor.visitRowTypeDimension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnConstraintContext extends ParserRuleContext {
	public KW_PRIMARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PRIMARY, 0); }
	public KW_KEY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_KEY, 0); }
	public KW_CONSTRAINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CONSTRAINT, 0); }
	public constraintName(): ConstraintNameContext | undefined {
		return this.tryGetRuleContext(0, ConstraintNameContext);
	}
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NOT, 0); }
	public KW_ENFORCED(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ENFORCED, 0); }
	public KW_NULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_columnConstraint; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterColumnConstraint) {
			listener.enterColumnConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitColumnConstraint) {
			listener.exitColumnConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitColumnConstraint) {
			return visitor.visitColumnConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentSpecContext extends ParserRuleContext {
	public KW_COMMENT(): TerminalNode { return this.getToken(FlinkSQLParser.KW_COMMENT, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(FlinkSQLParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_commentSpec; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterCommentSpec) {
			listener.enterCommentSpec(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitCommentSpec) {
			listener.exitCommentSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitCommentSpec) {
			return visitor.visitCommentSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MetadataColumnDefinitionContext extends ParserRuleContext {
	public columnName(): ColumnNameContext {
		return this.getRuleContext(0, ColumnNameContext);
	}
	public columnType(): ColumnTypeContext {
		return this.getRuleContext(0, ColumnTypeContext);
	}
	public KW_METADATA(): TerminalNode { return this.getToken(FlinkSQLParser.KW_METADATA, 0); }
	public KW_FROM(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FROM, 0); }
	public metadataKey(): MetadataKeyContext | undefined {
		return this.tryGetRuleContext(0, MetadataKeyContext);
	}
	public KW_VIRTUAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_VIRTUAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_metadataColumnDefinition; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterMetadataColumnDefinition) {
			listener.enterMetadataColumnDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitMetadataColumnDefinition) {
			listener.exitMetadataColumnDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitMetadataColumnDefinition) {
			return visitor.visitMetadataColumnDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MetadataKeyContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(FlinkSQLParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_metadataKey; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterMetadataKey) {
			listener.enterMetadataKey(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitMetadataKey) {
			listener.exitMetadataKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitMetadataKey) {
			return visitor.visitMetadataKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComputedColumnDefinitionContext extends ParserRuleContext {
	public columnName(): ColumnNameContext {
		return this.getRuleContext(0, ColumnNameContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(FlinkSQLParser.KW_AS, 0); }
	public computedColumnExpression(): ComputedColumnExpressionContext {
		return this.getRuleContext(0, ComputedColumnExpressionContext);
	}
	public commentSpec(): CommentSpecContext | undefined {
		return this.tryGetRuleContext(0, CommentSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_computedColumnDefinition; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterComputedColumnDefinition) {
			listener.enterComputedColumnDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitComputedColumnDefinition) {
			listener.exitComputedColumnDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitComputedColumnDefinition) {
			return visitor.visitComputedColumnDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComputedColumnExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_computedColumnExpression; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterComputedColumnExpression) {
			listener.enterComputedColumnExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitComputedColumnExpression) {
			listener.exitComputedColumnExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitComputedColumnExpression) {
			return visitor.visitComputedColumnExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WatermarkDefinitionContext extends ParserRuleContext {
	public KW_WATERMARK(): TerminalNode { return this.getToken(FlinkSQLParser.KW_WATERMARK, 0); }
	public KW_FOR(): TerminalNode { return this.getToken(FlinkSQLParser.KW_FOR, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public KW_AS(): TerminalNode { return this.getToken(FlinkSQLParser.KW_AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_watermarkDefinition; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterWatermarkDefinition) {
			listener.enterWatermarkDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitWatermarkDefinition) {
			listener.exitWatermarkDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitWatermarkDefinition) {
			return visitor.visitWatermarkDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableConstraintContext extends ParserRuleContext {
	public KW_PRIMARY(): TerminalNode { return this.getToken(FlinkSQLParser.KW_PRIMARY, 0); }
	public KW_KEY(): TerminalNode { return this.getToken(FlinkSQLParser.KW_KEY, 0); }
	public columnNameList(): ColumnNameListContext {
		return this.getRuleContext(0, ColumnNameListContext);
	}
	public KW_NOT(): TerminalNode { return this.getToken(FlinkSQLParser.KW_NOT, 0); }
	public KW_ENFORCED(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ENFORCED, 0); }
	public KW_CONSTRAINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CONSTRAINT, 0); }
	public constraintName(): ConstraintNameContext | undefined {
		return this.tryGetRuleContext(0, ConstraintNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_tableConstraint; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterTableConstraint) {
			listener.enterTableConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitTableConstraint) {
			listener.exitTableConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitTableConstraint) {
			return visitor.visitTableConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstraintNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_constraintName; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterConstraintName) {
			listener.enterConstraintName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitConstraintName) {
			listener.exitConstraintName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitConstraintName) {
			return visitor.visitConstraintName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelfDefinitionClauseContext extends ParserRuleContext {
	public KW_PERIOD(): TerminalNode { return this.getToken(FlinkSQLParser.KW_PERIOD, 0); }
	public KW_FOR(): TerminalNode { return this.getToken(FlinkSQLParser.KW_FOR, 0); }
	public KW_SYSTEM_TIME(): TerminalNode { return this.getToken(FlinkSQLParser.KW_SYSTEM_TIME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_selfDefinitionClause; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterSelfDefinitionClause) {
			listener.enterSelfDefinitionClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitSelfDefinitionClause) {
			listener.exitSelfDefinitionClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitSelfDefinitionClause) {
			return visitor.visitSelfDefinitionClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartitionDefinitionContext extends ParserRuleContext {
	public KW_PARTITIONED(): TerminalNode { return this.getToken(FlinkSQLParser.KW_PARTITIONED, 0); }
	public KW_BY(): TerminalNode { return this.getToken(FlinkSQLParser.KW_BY, 0); }
	public transformList(): TransformListContext {
		return this.getRuleContext(0, TransformListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_partitionDefinition; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterPartitionDefinition) {
			listener.enterPartitionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitPartitionDefinition) {
			listener.exitPartitionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitPartitionDefinition) {
			return visitor.visitPartitionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransformListContext extends ParserRuleContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public transform(): TransformContext[];
	public transform(i: number): TransformContext;
	public transform(i?: number): TransformContext | TransformContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TransformContext);
		} else {
			return this.getRuleContext(i, TransformContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_transformList; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterTransformList) {
			listener.enterTransformList(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitTransformList) {
			listener.exitTransformList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitTransformList) {
			return visitor.visitTransformList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransformContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_transform; }
	public copyFrom(ctx: TransformContext): void {
		super.copyFrom(ctx);
	}
}
export class IdentityTransformContext extends TransformContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: TransformContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterIdentityTransform) {
			listener.enterIdentityTransform(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitIdentityTransform) {
			listener.exitIdentityTransform(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitIdentityTransform) {
			return visitor.visitIdentityTransform(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ApplyTransformContext extends TransformContext {
	public _transformName!: IdentifierContext;
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public transformArgument(): TransformArgumentContext[];
	public transformArgument(i: number): TransformArgumentContext;
	public transformArgument(i?: number): TransformArgumentContext | TransformArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TransformArgumentContext);
		} else {
			return this.getRuleContext(i, TransformArgumentContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	constructor(ctx: TransformContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterApplyTransform) {
			listener.enterApplyTransform(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitApplyTransform) {
			listener.exitApplyTransform(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitApplyTransform) {
			return visitor.visitApplyTransform(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransformArgumentContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_transformArgument; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterTransformArgument) {
			listener.enterTransformArgument(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitTransformArgument) {
			listener.exitTransformArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitTransformArgument) {
			return visitor.visitTransformArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LikeDefinitionContext extends ParserRuleContext {
	public KW_LIKE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_LIKE, 0); }
	public tablePath(): TablePathContext {
		return this.getRuleContext(0, TablePathContext);
	}
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.LR_BRACKET, 0); }
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.RR_BRACKET, 0); }
	public likeOption(): LikeOptionContext[];
	public likeOption(i: number): LikeOptionContext;
	public likeOption(i?: number): LikeOptionContext | LikeOptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LikeOptionContext);
		} else {
			return this.getRuleContext(i, LikeOptionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_likeDefinition; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterLikeDefinition) {
			listener.enterLikeDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitLikeDefinition) {
			listener.exitLikeDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitLikeDefinition) {
			return visitor.visitLikeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LikeOptionContext extends ParserRuleContext {
	public KW_INCLUDING(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_INCLUDING, 0); }
	public KW_EXCLUDING(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_EXCLUDING, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ALL, 0); }
	public KW_CONSTRAINTS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CONSTRAINTS, 0); }
	public KW_PARTITIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PARTITIONS, 0); }
	public KW_OVERWRITING(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_OVERWRITING, 0); }
	public KW_GENERATED(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_GENERATED, 0); }
	public KW_OPTIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_OPTIONS, 0); }
	public KW_WATERMARKS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_WATERMARKS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_likeOption; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterLikeOption) {
			listener.enterLikeOption(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitLikeOption) {
			listener.exitLikeOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitLikeOption) {
			return visitor.visitLikeOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateCatalogContext extends ParserRuleContext {
	public KW_CREATE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_CREATE, 0); }
	public KW_CATALOG(): TerminalNode { return this.getToken(FlinkSQLParser.KW_CATALOG, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public withOption(): WithOptionContext {
		return this.getRuleContext(0, WithOptionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_createCatalog; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterCreateCatalog) {
			listener.enterCreateCatalog(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitCreateCatalog) {
			listener.exitCreateCatalog(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitCreateCatalog) {
			return visitor.visitCreateCatalog(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateDatabaseContext extends ParserRuleContext {
	public KW_CREATE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_CREATE, 0); }
	public KW_DATABASE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_DATABASE, 0); }
	public databasePathCreate(): DatabasePathCreateContext {
		return this.getRuleContext(0, DatabasePathCreateContext);
	}
	public withOption(): WithOptionContext {
		return this.getRuleContext(0, WithOptionContext);
	}
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	public commentSpec(): CommentSpecContext | undefined {
		return this.tryGetRuleContext(0, CommentSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_createDatabase; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterCreateDatabase) {
			listener.enterCreateDatabase(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitCreateDatabase) {
			listener.exitCreateDatabase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitCreateDatabase) {
			return visitor.visitCreateDatabase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateViewContext extends ParserRuleContext {
	public KW_CREATE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_CREATE, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(FlinkSQLParser.KW_VIEW, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(FlinkSQLParser.KW_AS, 0); }
	public queryStatement(): QueryStatementContext {
		return this.getRuleContext(0, QueryStatementContext);
	}
	public KW_TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TEMPORARY, 0); }
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	public columnNameList(): ColumnNameListContext | undefined {
		return this.tryGetRuleContext(0, ColumnNameListContext);
	}
	public commentSpec(): CommentSpecContext | undefined {
		return this.tryGetRuleContext(0, CommentSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_createView; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterCreateView) {
			listener.enterCreateView(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitCreateView) {
			listener.exitCreateView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitCreateView) {
			return visitor.visitCreateView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateFunctionContext extends ParserRuleContext {
	public KW_CREATE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_CREATE, 0); }
	public KW_FUNCTION(): TerminalNode { return this.getToken(FlinkSQLParser.KW_FUNCTION, 0); }
	public functionName(): FunctionNameContext {
		return this.getRuleContext(0, FunctionNameContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(FlinkSQLParser.KW_AS, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TEMPORARY, 0); }
	public KW_SYSTEM(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SYSTEM, 0); }
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	public KW_LANGUAGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LANGUAGE, 0); }
	public usingClause(): UsingClauseContext | undefined {
		return this.tryGetRuleContext(0, UsingClauseContext);
	}
	public KW_JAVA(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_JAVA, 0); }
	public KW_SCALA(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SCALA, 0); }
	public KW_PYTHON(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PYTHON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_createFunction; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterCreateFunction) {
			listener.enterCreateFunction(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitCreateFunction) {
			listener.exitCreateFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitCreateFunction) {
			return visitor.visitCreateFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsingClauseContext extends ParserRuleContext {
	public KW_USING(): TerminalNode { return this.getToken(FlinkSQLParser.KW_USING, 0); }
	public KW_JAR(): TerminalNode[];
	public KW_JAR(i: number): TerminalNode;
	public KW_JAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.KW_JAR);
		} else {
			return this.getToken(FlinkSQLParser.KW_JAR, i);
		}
	}
	public jarFileName(): JarFileNameContext[];
	public jarFileName(i: number): JarFileNameContext;
	public jarFileName(i?: number): JarFileNameContext | JarFileNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JarFileNameContext);
		} else {
			return this.getRuleContext(i, JarFileNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_usingClause; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterUsingClause) {
			listener.enterUsingClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitUsingClause) {
			listener.exitUsingClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitUsingClause) {
			return visitor.visitUsingClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JarFileNameContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(FlinkSQLParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_jarFileName; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterJarFileName) {
			listener.enterJarFileName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitJarFileName) {
			listener.exitJarFileName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitJarFileName) {
			return visitor.visitJarFileName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlterTableContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_TABLE, 0); }
	public tablePath(): TablePathContext {
		return this.getRuleContext(0, TablePathContext);
	}
	public renameDefinition(): RenameDefinitionContext | undefined {
		return this.tryGetRuleContext(0, RenameDefinitionContext);
	}
	public setKeyValueDefinition(): SetKeyValueDefinitionContext | undefined {
		return this.tryGetRuleContext(0, SetKeyValueDefinitionContext);
	}
	public addConstraint(): AddConstraintContext | undefined {
		return this.tryGetRuleContext(0, AddConstraintContext);
	}
	public dropConstraint(): DropConstraintContext | undefined {
		return this.tryGetRuleContext(0, DropConstraintContext);
	}
	public addUnique(): AddUniqueContext | undefined {
		return this.tryGetRuleContext(0, AddUniqueContext);
	}
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_alterTable; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterAlterTable) {
			listener.enterAlterTable(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitAlterTable) {
			listener.exitAlterTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitAlterTable) {
			return visitor.visitAlterTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RenameDefinitionContext extends ParserRuleContext {
	public KW_RENAME(): TerminalNode { return this.getToken(FlinkSQLParser.KW_RENAME, 0); }
	public KW_TO(): TerminalNode { return this.getToken(FlinkSQLParser.KW_TO, 0); }
	public uid(): UidContext[];
	public uid(i: number): UidContext;
	public uid(i?: number): UidContext | UidContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UidContext);
		} else {
			return this.getRuleContext(i, UidContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_renameDefinition; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterRenameDefinition) {
			listener.enterRenameDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitRenameDefinition) {
			listener.exitRenameDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitRenameDefinition) {
			return visitor.visitRenameDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetKeyValueDefinitionContext extends ParserRuleContext {
	public KW_SET(): TerminalNode { return this.getToken(FlinkSQLParser.KW_SET, 0); }
	public tablePropertyList(): TablePropertyListContext {
		return this.getRuleContext(0, TablePropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_setKeyValueDefinition; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterSetKeyValueDefinition) {
			listener.enterSetKeyValueDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitSetKeyValueDefinition) {
			listener.exitSetKeyValueDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitSetKeyValueDefinition) {
			return visitor.visitSetKeyValueDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddConstraintContext extends ParserRuleContext {
	public KW_ADD(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ADD, 0); }
	public KW_CONSTRAINT(): TerminalNode { return this.getToken(FlinkSQLParser.KW_CONSTRAINT, 0); }
	public constraintName(): ConstraintNameContext {
		return this.getRuleContext(0, ConstraintNameContext);
	}
	public KW_PRIMARY(): TerminalNode { return this.getToken(FlinkSQLParser.KW_PRIMARY, 0); }
	public KW_KEY(): TerminalNode { return this.getToken(FlinkSQLParser.KW_KEY, 0); }
	public columnNameList(): ColumnNameListContext {
		return this.getRuleContext(0, ColumnNameListContext);
	}
	public notForced(): NotForcedContext | undefined {
		return this.tryGetRuleContext(0, NotForcedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_addConstraint; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterAddConstraint) {
			listener.enterAddConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitAddConstraint) {
			listener.exitAddConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitAddConstraint) {
			return visitor.visitAddConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropConstraintContext extends ParserRuleContext {
	public KW_DROP(): TerminalNode { return this.getToken(FlinkSQLParser.KW_DROP, 0); }
	public KW_CONSTRAINT(): TerminalNode { return this.getToken(FlinkSQLParser.KW_CONSTRAINT, 0); }
	public constraintName(): ConstraintNameContext {
		return this.getRuleContext(0, ConstraintNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_dropConstraint; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterDropConstraint) {
			listener.enterDropConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitDropConstraint) {
			listener.exitDropConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitDropConstraint) {
			return visitor.visitDropConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddUniqueContext extends ParserRuleContext {
	public KW_ADD(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ADD, 0); }
	public KW_UNIQUE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_UNIQUE, 0); }
	public columnNameList(): ColumnNameListContext {
		return this.getRuleContext(0, ColumnNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_addUnique; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterAddUnique) {
			listener.enterAddUnique(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitAddUnique) {
			listener.exitAddUnique(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitAddUnique) {
			return visitor.visitAddUnique(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NotForcedContext extends ParserRuleContext {
	public KW_NOT(): TerminalNode { return this.getToken(FlinkSQLParser.KW_NOT, 0); }
	public KW_ENFORCED(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ENFORCED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_notForced; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterNotForced) {
			listener.enterNotForced(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitNotForced) {
			listener.exitNotForced(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitNotForced) {
			return visitor.visitNotForced(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlertViewContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ALTER, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(FlinkSQLParser.KW_VIEW, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public renameDefinition(): RenameDefinitionContext | undefined {
		return this.tryGetRuleContext(0, RenameDefinitionContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_AS, 0); }
	public queryStatement(): QueryStatementContext | undefined {
		return this.tryGetRuleContext(0, QueryStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_alertView; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterAlertView) {
			listener.enterAlertView(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitAlertView) {
			listener.exitAlertView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitAlertView) {
			return visitor.visitAlertView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlterDatabaseContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ALTER, 0); }
	public KW_DATABASE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_DATABASE, 0); }
	public databasePath(): DatabasePathContext {
		return this.getRuleContext(0, DatabasePathContext);
	}
	public setKeyValueDefinition(): SetKeyValueDefinitionContext {
		return this.getRuleContext(0, SetKeyValueDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_alterDatabase; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterAlterDatabase) {
			listener.enterAlterDatabase(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitAlterDatabase) {
			listener.exitAlterDatabase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitAlterDatabase) {
			return visitor.visitAlterDatabase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlterFunctionContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ALTER, 0); }
	public KW_FUNCTION(): TerminalNode { return this.getToken(FlinkSQLParser.KW_FUNCTION, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(FlinkSQLParser.KW_AS, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TEMPORARY, 0); }
	public KW_SYSTEM(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SYSTEM, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	public KW_LANGUAGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LANGUAGE, 0); }
	public KW_JAVA(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_JAVA, 0); }
	public KW_SCALA(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SCALA, 0); }
	public KW_PYTHON(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PYTHON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_alterFunction; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterAlterFunction) {
			listener.enterAlterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitAlterFunction) {
			listener.exitAlterFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitAlterFunction) {
			return visitor.visitAlterFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropCatalogContext extends ParserRuleContext {
	public KW_DROP(): TerminalNode { return this.getToken(FlinkSQLParser.KW_DROP, 0); }
	public KW_CATALOG(): TerminalNode { return this.getToken(FlinkSQLParser.KW_CATALOG, 0); }
	public catalogPath(): CatalogPathContext {
		return this.getRuleContext(0, CatalogPathContext);
	}
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_dropCatalog; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterDropCatalog) {
			listener.enterDropCatalog(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitDropCatalog) {
			listener.exitDropCatalog(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitDropCatalog) {
			return visitor.visitDropCatalog(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropTableContext extends ParserRuleContext {
	public KW_DROP(): TerminalNode { return this.getToken(FlinkSQLParser.KW_DROP, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_TABLE, 0); }
	public tablePath(): TablePathContext {
		return this.getRuleContext(0, TablePathContext);
	}
	public KW_TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TEMPORARY, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_dropTable; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterDropTable) {
			listener.enterDropTable(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitDropTable) {
			listener.exitDropTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitDropTable) {
			return visitor.visitDropTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropDatabaseContext extends ParserRuleContext {
	public _dropType!: Token;
	public KW_DROP(): TerminalNode { return this.getToken(FlinkSQLParser.KW_DROP, 0); }
	public KW_DATABASE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_DATABASE, 0); }
	public databasePath(): DatabasePathContext {
		return this.getRuleContext(0, DatabasePathContext);
	}
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	public KW_RESTRICT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_RESTRICT, 0); }
	public KW_CASCADE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CASCADE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_dropDatabase; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterDropDatabase) {
			listener.enterDropDatabase(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitDropDatabase) {
			listener.exitDropDatabase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitDropDatabase) {
			return visitor.visitDropDatabase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropViewContext extends ParserRuleContext {
	public KW_DROP(): TerminalNode { return this.getToken(FlinkSQLParser.KW_DROP, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(FlinkSQLParser.KW_VIEW, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public KW_TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TEMPORARY, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_dropView; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterDropView) {
			listener.enterDropView(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitDropView) {
			listener.exitDropView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitDropView) {
			return visitor.visitDropView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropFunctionContext extends ParserRuleContext {
	public KW_DROP(): TerminalNode { return this.getToken(FlinkSQLParser.KW_DROP, 0); }
	public KW_FUNCTION(): TerminalNode { return this.getToken(FlinkSQLParser.KW_FUNCTION, 0); }
	public functionName(): FunctionNameContext {
		return this.getRuleContext(0, FunctionNameContext);
	}
	public KW_TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TEMPORARY, 0); }
	public KW_SYSTEM(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SYSTEM, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_dropFunction; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterDropFunction) {
			listener.enterDropFunction(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitDropFunction) {
			listener.exitDropFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitDropFunction) {
			return visitor.visitDropFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InsertStatementContext extends ParserRuleContext {
	public insertSimpleStatement(): InsertSimpleStatementContext | undefined {
		return this.tryGetRuleContext(0, InsertSimpleStatementContext);
	}
	public KW_EXECUTE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_EXECUTE, 0); }
	public insertMulStatementCompatibility(): InsertMulStatementCompatibilityContext | undefined {
		return this.tryGetRuleContext(0, InsertMulStatementCompatibilityContext);
	}
	public insertMulStatement(): InsertMulStatementContext | undefined {
		return this.tryGetRuleContext(0, InsertMulStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_insertStatement; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterInsertStatement) {
			listener.enterInsertStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitInsertStatement) {
			listener.exitInsertStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitInsertStatement) {
			return visitor.visitInsertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InsertSimpleStatementContext extends ParserRuleContext {
	public KW_INSERT(): TerminalNode { return this.getToken(FlinkSQLParser.KW_INSERT, 0); }
	public tablePath(): TablePathContext {
		return this.getRuleContext(0, TablePathContext);
	}
	public KW_INTO(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_INTO, 0); }
	public KW_OVERWRITE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_OVERWRITE, 0); }
	public queryStatement(): QueryStatementContext | undefined {
		return this.tryGetRuleContext(0, QueryStatementContext);
	}
	public valuesDefinition(): ValuesDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ValuesDefinitionContext);
	}
	public insertPartitionDefinition(): InsertPartitionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, InsertPartitionDefinitionContext);
	}
	public columnNameList(): ColumnNameListContext | undefined {
		return this.tryGetRuleContext(0, ColumnNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_insertSimpleStatement; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterInsertSimpleStatement) {
			listener.enterInsertSimpleStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitInsertSimpleStatement) {
			listener.exitInsertSimpleStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitInsertSimpleStatement) {
			return visitor.visitInsertSimpleStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InsertPartitionDefinitionContext extends ParserRuleContext {
	public KW_PARTITION(): TerminalNode { return this.getToken(FlinkSQLParser.KW_PARTITION, 0); }
	public tablePropertyList(): TablePropertyListContext {
		return this.getRuleContext(0, TablePropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_insertPartitionDefinition; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterInsertPartitionDefinition) {
			listener.enterInsertPartitionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitInsertPartitionDefinition) {
			listener.exitInsertPartitionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitInsertPartitionDefinition) {
			return visitor.visitInsertPartitionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValuesDefinitionContext extends ParserRuleContext {
	public KW_VALUES(): TerminalNode { return this.getToken(FlinkSQLParser.KW_VALUES, 0); }
	public valuesRowDefinition(): ValuesRowDefinitionContext[];
	public valuesRowDefinition(i: number): ValuesRowDefinitionContext;
	public valuesRowDefinition(i?: number): ValuesRowDefinitionContext | ValuesRowDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValuesRowDefinitionContext);
		} else {
			return this.getRuleContext(i, ValuesRowDefinitionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_valuesDefinition; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterValuesDefinition) {
			listener.enterValuesDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitValuesDefinition) {
			listener.exitValuesDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitValuesDefinition) {
			return visitor.visitValuesDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValuesRowDefinitionContext extends ParserRuleContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_valuesRowDefinition; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterValuesRowDefinition) {
			listener.enterValuesRowDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitValuesRowDefinition) {
			listener.exitValuesRowDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitValuesRowDefinition) {
			return visitor.visitValuesRowDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InsertMulStatementCompatibilityContext extends ParserRuleContext {
	public KW_BEGIN(): TerminalNode { return this.getToken(FlinkSQLParser.KW_BEGIN, 0); }
	public KW_STATEMENT(): TerminalNode { return this.getToken(FlinkSQLParser.KW_STATEMENT, 0); }
	public KW_SET(): TerminalNode { return this.getToken(FlinkSQLParser.KW_SET, 0); }
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.SEMICOLON);
		} else {
			return this.getToken(FlinkSQLParser.SEMICOLON, i);
		}
	}
	public KW_END(): TerminalNode { return this.getToken(FlinkSQLParser.KW_END, 0); }
	public insertSimpleStatement(): InsertSimpleStatementContext[];
	public insertSimpleStatement(i: number): InsertSimpleStatementContext;
	public insertSimpleStatement(i?: number): InsertSimpleStatementContext | InsertSimpleStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InsertSimpleStatementContext);
		} else {
			return this.getRuleContext(i, InsertSimpleStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_insertMulStatementCompatibility; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterInsertMulStatementCompatibility) {
			listener.enterInsertMulStatementCompatibility(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitInsertMulStatementCompatibility) {
			listener.exitInsertMulStatementCompatibility(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitInsertMulStatementCompatibility) {
			return visitor.visitInsertMulStatementCompatibility(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InsertMulStatementContext extends ParserRuleContext {
	public KW_STATEMENT(): TerminalNode { return this.getToken(FlinkSQLParser.KW_STATEMENT, 0); }
	public KW_SET(): TerminalNode { return this.getToken(FlinkSQLParser.KW_SET, 0); }
	public KW_BEGIN(): TerminalNode { return this.getToken(FlinkSQLParser.KW_BEGIN, 0); }
	public KW_END(): TerminalNode { return this.getToken(FlinkSQLParser.KW_END, 0); }
	public insertSimpleStatement(): InsertSimpleStatementContext[];
	public insertSimpleStatement(i: number): InsertSimpleStatementContext;
	public insertSimpleStatement(i?: number): InsertSimpleStatementContext | InsertSimpleStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InsertSimpleStatementContext);
		} else {
			return this.getRuleContext(i, InsertSimpleStatementContext);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.SEMICOLON);
		} else {
			return this.getToken(FlinkSQLParser.SEMICOLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_insertMulStatement; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterInsertMulStatement) {
			listener.enterInsertMulStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitInsertMulStatement) {
			listener.exitInsertMulStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitInsertMulStatement) {
			return visitor.visitInsertMulStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryStatementContext extends ParserRuleContext {
	public _left!: QueryStatementContext;
	public _operator!: Token;
	public _right!: QueryStatementContext;
	public valuesCaluse(): ValuesCaluseContext | undefined {
		return this.tryGetRuleContext(0, ValuesCaluseContext);
	}
	public withClause(): WithClauseContext | undefined {
		return this.tryGetRuleContext(0, WithClauseContext);
	}
	public queryStatement(): QueryStatementContext[];
	public queryStatement(i: number): QueryStatementContext;
	public queryStatement(i?: number): QueryStatementContext | QueryStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QueryStatementContext);
		} else {
			return this.getRuleContext(i, QueryStatementContext);
		}
	}
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.LR_BRACKET, 0); }
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.RR_BRACKET, 0); }
	public KW_INTERSECT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_INTERSECT, 0); }
	public KW_UNION(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_UNION, 0); }
	public KW_EXCEPT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_EXCEPT, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ALL, 0); }
	public orderByCaluse(): OrderByCaluseContext | undefined {
		return this.tryGetRuleContext(0, OrderByCaluseContext);
	}
	public limitClause(): LimitClauseContext | undefined {
		return this.tryGetRuleContext(0, LimitClauseContext);
	}
	public selectClause(): SelectClauseContext | undefined {
		return this.tryGetRuleContext(0, SelectClauseContext);
	}
	public selectStatement(): SelectStatementContext | undefined {
		return this.tryGetRuleContext(0, SelectStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_queryStatement; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterQueryStatement) {
			listener.enterQueryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitQueryStatement) {
			listener.exitQueryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitQueryStatement) {
			return visitor.visitQueryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValuesCaluseContext extends ParserRuleContext {
	public KW_VALUES(): TerminalNode { return this.getToken(FlinkSQLParser.KW_VALUES, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_valuesCaluse; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterValuesCaluse) {
			listener.enterValuesCaluse(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitValuesCaluse) {
			listener.exitValuesCaluse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitValuesCaluse) {
			return visitor.visitValuesCaluse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithClauseContext extends ParserRuleContext {
	public KW_WITH(): TerminalNode { return this.getToken(FlinkSQLParser.KW_WITH, 0); }
	public withItem(): WithItemContext[];
	public withItem(i: number): WithItemContext;
	public withItem(i?: number): WithItemContext | WithItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WithItemContext);
		} else {
			return this.getRuleContext(i, WithItemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_withClause; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterWithClause) {
			listener.enterWithClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitWithClause) {
			listener.exitWithClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitWithClause) {
			return visitor.visitWithClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithItemContext extends ParserRuleContext {
	public withItemName(): WithItemNameContext {
		return this.getRuleContext(0, WithItemNameContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(FlinkSQLParser.KW_AS, 0); }
	public LR_BRACKET(): TerminalNode[];
	public LR_BRACKET(i: number): TerminalNode;
	public LR_BRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.LR_BRACKET);
		} else {
			return this.getToken(FlinkSQLParser.LR_BRACKET, i);
		}
	}
	public queryStatement(): QueryStatementContext {
		return this.getRuleContext(0, QueryStatementContext);
	}
	public RR_BRACKET(): TerminalNode[];
	public RR_BRACKET(i: number): TerminalNode;
	public RR_BRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.RR_BRACKET);
		} else {
			return this.getToken(FlinkSQLParser.RR_BRACKET, i);
		}
	}
	public columnName(): ColumnNameContext[];
	public columnName(i: number): ColumnNameContext;
	public columnName(i?: number): ColumnNameContext | ColumnNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnNameContext);
		} else {
			return this.getRuleContext(i, ColumnNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_withItem; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterWithItem) {
			listener.enterWithItem(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitWithItem) {
			listener.exitWithItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitWithItem) {
			return visitor.visitWithItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithItemNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_withItemName; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterWithItemName) {
			listener.enterWithItemName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitWithItemName) {
			listener.exitWithItemName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitWithItemName) {
			return visitor.visitWithItemName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectStatementContext extends ParserRuleContext {
	public selectClause(): SelectClauseContext {
		return this.getRuleContext(0, SelectClauseContext);
	}
	public fromClause(): FromClauseContext {
		return this.getRuleContext(0, FromClauseContext);
	}
	public whereClause(): WhereClauseContext | undefined {
		return this.tryGetRuleContext(0, WhereClauseContext);
	}
	public groupByClause(): GroupByClauseContext | undefined {
		return this.tryGetRuleContext(0, GroupByClauseContext);
	}
	public havingClause(): HavingClauseContext | undefined {
		return this.tryGetRuleContext(0, HavingClauseContext);
	}
	public windowClause(): WindowClauseContext | undefined {
		return this.tryGetRuleContext(0, WindowClauseContext);
	}
	public matchRecognizeClause(): MatchRecognizeClauseContext | undefined {
		return this.tryGetRuleContext(0, MatchRecognizeClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_selectStatement; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterSelectStatement) {
			listener.enterSelectStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitSelectStatement) {
			listener.exitSelectStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitSelectStatement) {
			return visitor.visitSelectStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectClauseContext extends ParserRuleContext {
	public KW_SELECT(): TerminalNode { return this.getToken(FlinkSQLParser.KW_SELECT, 0); }
	public ASTERISK_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.ASTERISK_SIGN, 0); }
	public projectItemDefinition(): ProjectItemDefinitionContext[];
	public projectItemDefinition(i: number): ProjectItemDefinitionContext;
	public projectItemDefinition(i?: number): ProjectItemDefinitionContext | ProjectItemDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProjectItemDefinitionContext);
		} else {
			return this.getRuleContext(i, ProjectItemDefinitionContext);
		}
	}
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_selectClause; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterSelectClause) {
			listener.enterSelectClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitSelectClause) {
			listener.exitSelectClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitSelectClause) {
			return visitor.visitSelectClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProjectItemDefinitionContext extends ParserRuleContext {
	public overWindowItem(): OverWindowItemContext | undefined {
		return this.tryGetRuleContext(0, OverWindowItemContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_projectItemDefinition; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterProjectItemDefinition) {
			listener.enterProjectItemDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitProjectItemDefinition) {
			listener.exitProjectItemDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitProjectItemDefinition) {
			return visitor.visitProjectItemDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OverWindowItemContext extends ParserRuleContext {
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	public KW_OVER(): TerminalNode { return this.getToken(FlinkSQLParser.KW_OVER, 0); }
	public windowSpec(): WindowSpecContext | undefined {
		return this.tryGetRuleContext(0, WindowSpecContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(FlinkSQLParser.KW_AS, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext | undefined {
		return this.tryGetRuleContext(0, ErrorCapturingIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_overWindowItem; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterOverWindowItem) {
			listener.enterOverWindowItem(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitOverWindowItem) {
			listener.exitOverWindowItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitOverWindowItem) {
			return visitor.visitOverWindowItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FromClauseContext extends ParserRuleContext {
	public KW_FROM(): TerminalNode { return this.getToken(FlinkSQLParser.KW_FROM, 0); }
	public tableExpression(): TableExpressionContext {
		return this.getRuleContext(0, TableExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_fromClause; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterFromClause) {
			listener.enterFromClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitFromClause) {
			listener.exitFromClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitFromClause) {
			return visitor.visitFromClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableExpressionContext extends ParserRuleContext {
	public tableReference(): TableReferenceContext[];
	public tableReference(i: number): TableReferenceContext;
	public tableReference(i?: number): TableReferenceContext | TableReferenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TableReferenceContext);
		} else {
			return this.getRuleContext(i, TableReferenceContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	public tableExpression(): TableExpressionContext[];
	public tableExpression(i: number): TableExpressionContext;
	public tableExpression(i?: number): TableExpressionContext | TableExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TableExpressionContext);
		} else {
			return this.getRuleContext(i, TableExpressionContext);
		}
	}
	public KW_JOIN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_JOIN, 0); }
	public KW_NATURAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NATURAL, 0); }
	public KW_OUTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_OUTER, 0); }
	public joinCondition(): JoinConditionContext | undefined {
		return this.tryGetRuleContext(0, JoinConditionContext);
	}
	public KW_LEFT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LEFT, 0); }
	public KW_RIGHT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_RIGHT, 0); }
	public KW_FULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FULL, 0); }
	public KW_INNER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_INNER, 0); }
	public KW_CROSS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CROSS, 0); }
	public inlineDataValueClause(): InlineDataValueClauseContext | undefined {
		return this.tryGetRuleContext(0, InlineDataValueClauseContext);
	}
	public windoTVFClause(): WindoTVFClauseContext | undefined {
		return this.tryGetRuleContext(0, WindoTVFClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_tableExpression; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterTableExpression) {
			listener.enterTableExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitTableExpression) {
			listener.exitTableExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitTableExpression) {
			return visitor.visitTableExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableReferenceContext extends ParserRuleContext {
	public tablePrimary(): TablePrimaryContext {
		return this.getRuleContext(0, TablePrimaryContext);
	}
	public tableAlias(): TableAliasContext | undefined {
		return this.tryGetRuleContext(0, TableAliasContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_tableReference; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterTableReference) {
			listener.enterTableReference(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitTableReference) {
			listener.exitTableReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitTableReference) {
			return visitor.visitTableReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePrimaryContext extends ParserRuleContext {
	public tablePath(): TablePathContext | undefined {
		return this.tryGetRuleContext(0, TablePathContext);
	}
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TABLE, 0); }
	public systemTimePeriod(): SystemTimePeriodContext | undefined {
		return this.tryGetRuleContext(0, SystemTimePeriodContext);
	}
	public correlationName(): CorrelationNameContext | undefined {
		return this.tryGetRuleContext(0, CorrelationNameContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_AS, 0); }
	public KW_LATERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LATERAL, 0); }
	public LR_BRACKET(): TerminalNode[];
	public LR_BRACKET(i: number): TerminalNode;
	public LR_BRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.LR_BRACKET);
		} else {
			return this.getToken(FlinkSQLParser.LR_BRACKET, i);
		}
	}
	public functionName(): FunctionNameContext | undefined {
		return this.tryGetRuleContext(0, FunctionNameContext);
	}
	public functionParam(): FunctionParamContext[];
	public functionParam(i: number): FunctionParamContext;
	public functionParam(i?: number): FunctionParamContext | FunctionParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionParamContext);
		} else {
			return this.getRuleContext(i, FunctionParamContext);
		}
	}
	public RR_BRACKET(): TerminalNode[];
	public RR_BRACKET(i: number): TerminalNode;
	public RR_BRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.RR_BRACKET);
		} else {
			return this.getToken(FlinkSQLParser.RR_BRACKET, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	public queryStatement(): QueryStatementContext | undefined {
		return this.tryGetRuleContext(0, QueryStatementContext);
	}
	public KW_UNNEST(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_UNNEST, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_tablePrimary; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterTablePrimary) {
			listener.enterTablePrimary(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitTablePrimary) {
			listener.exitTablePrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitTablePrimary) {
			return visitor.visitTablePrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SystemTimePeriodContext extends ParserRuleContext {
	public KW_FOR(): TerminalNode { return this.getToken(FlinkSQLParser.KW_FOR, 0); }
	public KW_SYSTEM_TIME(): TerminalNode { return this.getToken(FlinkSQLParser.KW_SYSTEM_TIME, 0); }
	public KW_AS(): TerminalNode { return this.getToken(FlinkSQLParser.KW_AS, 0); }
	public KW_OF(): TerminalNode { return this.getToken(FlinkSQLParser.KW_OF, 0); }
	public dateTimeExpression(): DateTimeExpressionContext {
		return this.getRuleContext(0, DateTimeExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_systemTimePeriod; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterSystemTimePeriod) {
			listener.enterSystemTimePeriod(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitSystemTimePeriod) {
			listener.exitSystemTimePeriod(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitSystemTimePeriod) {
			return visitor.visitSystemTimePeriod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateTimeExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_dateTimeExpression; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterDateTimeExpression) {
			listener.enterDateTimeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitDateTimeExpression) {
			listener.exitDateTimeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitDateTimeExpression) {
			return visitor.visitDateTimeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineDataValueClauseContext extends ParserRuleContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public valuesDefinition(): ValuesDefinitionContext {
		return this.getRuleContext(0, ValuesDefinitionContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	public tableAlias(): TableAliasContext {
		return this.getRuleContext(0, TableAliasContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_inlineDataValueClause; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterInlineDataValueClause) {
			listener.enterInlineDataValueClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitInlineDataValueClause) {
			listener.exitInlineDataValueClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitInlineDataValueClause) {
			return visitor.visitInlineDataValueClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindoTVFClauseContext extends ParserRuleContext {
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_TABLE, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public windowTVFExression(): WindowTVFExressionContext {
		return this.getRuleContext(0, WindowTVFExressionContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_windoTVFClause; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterWindoTVFClause) {
			listener.enterWindoTVFClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitWindoTVFClause) {
			listener.exitWindoTVFClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitWindoTVFClause) {
			return visitor.visitWindoTVFClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowTVFExressionContext extends ParserRuleContext {
	public windoTVFName(): WindoTVFNameContext {
		return this.getRuleContext(0, WindoTVFNameContext);
	}
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public windowTVFParam(): WindowTVFParamContext[];
	public windowTVFParam(i: number): WindowTVFParamContext;
	public windowTVFParam(i?: number): WindowTVFParamContext | WindowTVFParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WindowTVFParamContext);
		} else {
			return this.getRuleContext(i, WindowTVFParamContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_windowTVFExression; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterWindowTVFExression) {
			listener.enterWindowTVFExression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitWindowTVFExression) {
			listener.exitWindowTVFExression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitWindowTVFExression) {
			return visitor.visitWindowTVFExression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindoTVFNameContext extends ParserRuleContext {
	public KW_TUMBLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TUMBLE, 0); }
	public KW_HOP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_HOP, 0); }
	public KW_CUMULATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CUMULATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_windoTVFName; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterWindoTVFName) {
			listener.enterWindoTVFName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitWindoTVFName) {
			listener.exitWindoTVFName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitWindoTVFName) {
			return visitor.visitWindoTVFName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowTVFParamContext extends ParserRuleContext {
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TABLE, 0); }
	public timeAttrColumn(): TimeAttrColumnContext | undefined {
		return this.tryGetRuleContext(0, TimeAttrColumnContext);
	}
	public columnDescriptor(): ColumnDescriptorContext | undefined {
		return this.tryGetRuleContext(0, ColumnDescriptorContext);
	}
	public timeIntervalExpression(): TimeIntervalExpressionContext | undefined {
		return this.tryGetRuleContext(0, TimeIntervalExpressionContext);
	}
	public KW_DATA(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DATA, 0); }
	public DOUBLE_RIGHT_ARROW(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.DOUBLE_RIGHT_ARROW, 0); }
	public KW_TIMECOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TIMECOL, 0); }
	public timeIntervalParamName(): TimeIntervalParamNameContext | undefined {
		return this.tryGetRuleContext(0, TimeIntervalParamNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_windowTVFParam; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterWindowTVFParam) {
			listener.enterWindowTVFParam(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitWindowTVFParam) {
			listener.exitWindowTVFParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitWindowTVFParam) {
			return visitor.visitWindowTVFParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeIntervalParamNameContext extends ParserRuleContext {
	public KW_DATA(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DATA, 0); }
	public KW_TIMECOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TIMECOL, 0); }
	public KW_SIZE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SIZE, 0); }
	public KW_OFFSET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_OFFSET, 0); }
	public KW_STEP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_STEP, 0); }
	public KW_SLIDE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SLIDE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_timeIntervalParamName; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterTimeIntervalParamName) {
			listener.enterTimeIntervalParamName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitTimeIntervalParamName) {
			listener.exitTimeIntervalParamName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitTimeIntervalParamName) {
			return visitor.visitTimeIntervalParamName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnDescriptorContext extends ParserRuleContext {
	public KW_DESCRIPTOR(): TerminalNode { return this.getToken(FlinkSQLParser.KW_DESCRIPTOR, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_columnDescriptor; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterColumnDescriptor) {
			listener.enterColumnDescriptor(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitColumnDescriptor) {
			listener.exitColumnDescriptor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitColumnDescriptor) {
			return visitor.visitColumnDescriptor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinConditionContext extends ParserRuleContext {
	public KW_ON(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ON, 0); }
	public booleanExpression(): BooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanExpressionContext);
	}
	public KW_USING(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_USING, 0); }
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.LR_BRACKET, 0); }
	public uid(): UidContext[];
	public uid(i: number): UidContext;
	public uid(i?: number): UidContext | UidContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UidContext);
		} else {
			return this.getRuleContext(i, UidContext);
		}
	}
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_joinCondition; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterJoinCondition) {
			listener.enterJoinCondition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitJoinCondition) {
			listener.exitJoinCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitJoinCondition) {
			return visitor.visitJoinCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhereClauseContext extends ParserRuleContext {
	public KW_WHERE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_WHERE, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_whereClause; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterWhereClause) {
			listener.enterWhereClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitWhereClause) {
			listener.exitWhereClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitWhereClause) {
			return visitor.visitWhereClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupByClauseContext extends ParserRuleContext {
	public KW_GROUP(): TerminalNode { return this.getToken(FlinkSQLParser.KW_GROUP, 0); }
	public KW_BY(): TerminalNode { return this.getToken(FlinkSQLParser.KW_BY, 0); }
	public groupItemDefinition(): GroupItemDefinitionContext[];
	public groupItemDefinition(i: number): GroupItemDefinitionContext;
	public groupItemDefinition(i?: number): GroupItemDefinitionContext | GroupItemDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupItemDefinitionContext);
		} else {
			return this.getRuleContext(i, GroupItemDefinitionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_groupByClause; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterGroupByClause) {
			listener.enterGroupByClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitGroupByClause) {
			listener.exitGroupByClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitGroupByClause) {
			return visitor.visitGroupByClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupItemDefinitionContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public groupWindowFunction(): GroupWindowFunctionContext | undefined {
		return this.tryGetRuleContext(0, GroupWindowFunctionContext);
	}
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.LR_BRACKET, 0); }
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	public groupingSetsNotaionName(): GroupingSetsNotaionNameContext | undefined {
		return this.tryGetRuleContext(0, GroupingSetsNotaionNameContext);
	}
	public groupingSets(): GroupingSetsContext | undefined {
		return this.tryGetRuleContext(0, GroupingSetsContext);
	}
	public groupItemDefinition(): GroupItemDefinitionContext[];
	public groupItemDefinition(i: number): GroupItemDefinitionContext;
	public groupItemDefinition(i?: number): GroupItemDefinitionContext | GroupItemDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupItemDefinitionContext);
		} else {
			return this.getRuleContext(i, GroupItemDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_groupItemDefinition; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterGroupItemDefinition) {
			listener.enterGroupItemDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitGroupItemDefinition) {
			listener.exitGroupItemDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitGroupItemDefinition) {
			return visitor.visitGroupItemDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupingSetsContext extends ParserRuleContext {
	public KW_GROUPING(): TerminalNode { return this.getToken(FlinkSQLParser.KW_GROUPING, 0); }
	public KW_SETS(): TerminalNode { return this.getToken(FlinkSQLParser.KW_SETS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_groupingSets; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterGroupingSets) {
			listener.enterGroupingSets(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitGroupingSets) {
			listener.exitGroupingSets(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitGroupingSets) {
			return visitor.visitGroupingSets(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupingSetsNotaionNameContext extends ParserRuleContext {
	public KW_CUBE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CUBE, 0); }
	public KW_ROLLUP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ROLLUP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_groupingSetsNotaionName; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterGroupingSetsNotaionName) {
			listener.enterGroupingSetsNotaionName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitGroupingSetsNotaionName) {
			listener.exitGroupingSetsNotaionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitGroupingSetsNotaionName) {
			return visitor.visitGroupingSetsNotaionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupWindowFunctionContext extends ParserRuleContext {
	public groupWindowFunctionName(): GroupWindowFunctionNameContext {
		return this.getRuleContext(0, GroupWindowFunctionNameContext);
	}
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public timeAttrColumn(): TimeAttrColumnContext {
		return this.getRuleContext(0, TimeAttrColumnContext);
	}
	public COMMA(): TerminalNode { return this.getToken(FlinkSQLParser.COMMA, 0); }
	public timeIntervalExpression(): TimeIntervalExpressionContext {
		return this.getRuleContext(0, TimeIntervalExpressionContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_groupWindowFunction; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterGroupWindowFunction) {
			listener.enterGroupWindowFunction(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitGroupWindowFunction) {
			listener.exitGroupWindowFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitGroupWindowFunction) {
			return visitor.visitGroupWindowFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupWindowFunctionNameContext extends ParserRuleContext {
	public KW_TUMBLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TUMBLE, 0); }
	public KW_HOP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_HOP, 0); }
	public KW_SESSION(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SESSION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_groupWindowFunctionName; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterGroupWindowFunctionName) {
			listener.enterGroupWindowFunctionName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitGroupWindowFunctionName) {
			listener.exitGroupWindowFunctionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitGroupWindowFunctionName) {
			return visitor.visitGroupWindowFunctionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeAttrColumnContext extends ParserRuleContext {
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_timeAttrColumn; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterTimeAttrColumn) {
			listener.enterTimeAttrColumn(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitTimeAttrColumn) {
			listener.exitTimeAttrColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitTimeAttrColumn) {
			return visitor.visitTimeAttrColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HavingClauseContext extends ParserRuleContext {
	public KW_HAVING(): TerminalNode { return this.getToken(FlinkSQLParser.KW_HAVING, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_havingClause; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterHavingClause) {
			listener.enterHavingClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitHavingClause) {
			listener.exitHavingClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitHavingClause) {
			return visitor.visitHavingClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowClauseContext extends ParserRuleContext {
	public KW_WINDOW(): TerminalNode { return this.getToken(FlinkSQLParser.KW_WINDOW, 0); }
	public namedWindow(): NamedWindowContext[];
	public namedWindow(i: number): NamedWindowContext;
	public namedWindow(i?: number): NamedWindowContext | NamedWindowContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedWindowContext);
		} else {
			return this.getRuleContext(i, NamedWindowContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_windowClause; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterWindowClause) {
			listener.enterWindowClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitWindowClause) {
			listener.exitWindowClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitWindowClause) {
			return visitor.visitWindowClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedWindowContext extends ParserRuleContext {
	public _name!: ErrorCapturingIdentifierContext;
	public KW_AS(): TerminalNode { return this.getToken(FlinkSQLParser.KW_AS, 0); }
	public windowSpec(): WindowSpecContext {
		return this.getRuleContext(0, WindowSpecContext);
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		return this.getRuleContext(0, ErrorCapturingIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_namedWindow; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterNamedWindow) {
			listener.enterNamedWindow(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitNamedWindow) {
			listener.exitNamedWindow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitNamedWindow) {
			return visitor.visitNamedWindow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowSpecContext extends ParserRuleContext {
	public _name!: ErrorCapturingIdentifierContext;
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	public partitionByClause(): PartitionByClauseContext | undefined {
		return this.tryGetRuleContext(0, PartitionByClauseContext);
	}
	public orderByCaluse(): OrderByCaluseContext | undefined {
		return this.tryGetRuleContext(0, OrderByCaluseContext);
	}
	public windowFrame(): WindowFrameContext | undefined {
		return this.tryGetRuleContext(0, WindowFrameContext);
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext | undefined {
		return this.tryGetRuleContext(0, ErrorCapturingIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_windowSpec; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterWindowSpec) {
			listener.enterWindowSpec(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitWindowSpec) {
			listener.exitWindowSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitWindowSpec) {
			return visitor.visitWindowSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MatchRecognizeClauseContext extends ParserRuleContext {
	public KW_MATCH_RECOGNIZE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_MATCH_RECOGNIZE, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public patternVariablesDefination(): PatternVariablesDefinationContext {
		return this.getRuleContext(0, PatternVariablesDefinationContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	public partitionByClause(): PartitionByClauseContext | undefined {
		return this.tryGetRuleContext(0, PartitionByClauseContext);
	}
	public orderByCaluse(): OrderByCaluseContext | undefined {
		return this.tryGetRuleContext(0, OrderByCaluseContext);
	}
	public measuresClause(): MeasuresClauseContext | undefined {
		return this.tryGetRuleContext(0, MeasuresClauseContext);
	}
	public outputMode(): OutputModeContext | undefined {
		return this.tryGetRuleContext(0, OutputModeContext);
	}
	public afterMatchStrategy(): AfterMatchStrategyContext | undefined {
		return this.tryGetRuleContext(0, AfterMatchStrategyContext);
	}
	public patternDefination(): PatternDefinationContext | undefined {
		return this.tryGetRuleContext(0, PatternDefinationContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_matchRecognizeClause; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterMatchRecognizeClause) {
			listener.enterMatchRecognizeClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitMatchRecognizeClause) {
			listener.exitMatchRecognizeClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitMatchRecognizeClause) {
			return visitor.visitMatchRecognizeClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderByCaluseContext extends ParserRuleContext {
	public KW_ORDER(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ORDER, 0); }
	public KW_BY(): TerminalNode { return this.getToken(FlinkSQLParser.KW_BY, 0); }
	public orderItemDefition(): OrderItemDefitionContext[];
	public orderItemDefition(i: number): OrderItemDefitionContext;
	public orderItemDefition(i?: number): OrderItemDefitionContext | OrderItemDefitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OrderItemDefitionContext);
		} else {
			return this.getRuleContext(i, OrderItemDefitionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_orderByCaluse; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterOrderByCaluse) {
			listener.enterOrderByCaluse(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitOrderByCaluse) {
			listener.exitOrderByCaluse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitOrderByCaluse) {
			return visitor.visitOrderByCaluse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderItemDefitionContext extends ParserRuleContext {
	public _ordering!: Token;
	public _nullOrder!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public KW_NULLS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NULLS, 0); }
	public KW_ASC(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ASC, 0); }
	public KW_DESC(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DESC, 0); }
	public KW_LAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LAST, 0); }
	public KW_FIRST(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FIRST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_orderItemDefition; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterOrderItemDefition) {
			listener.enterOrderItemDefition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitOrderItemDefition) {
			listener.exitOrderItemDefition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitOrderItemDefition) {
			return visitor.visitOrderItemDefition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LimitClauseContext extends ParserRuleContext {
	public _limit!: ExpressionContext;
	public KW_LIMIT(): TerminalNode { return this.getToken(FlinkSQLParser.KW_LIMIT, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ALL, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_limitClause; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterLimitClause) {
			listener.enterLimitClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitLimitClause) {
			listener.exitLimitClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitLimitClause) {
			return visitor.visitLimitClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartitionByClauseContext extends ParserRuleContext {
	public KW_PARTITION(): TerminalNode { return this.getToken(FlinkSQLParser.KW_PARTITION, 0); }
	public KW_BY(): TerminalNode { return this.getToken(FlinkSQLParser.KW_BY, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_partitionByClause; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterPartitionByClause) {
			listener.enterPartitionByClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitPartitionByClause) {
			listener.exitPartitionByClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitPartitionByClause) {
			return visitor.visitPartitionByClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuantifiersContext extends ParserRuleContext {
	public ASTERISK_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.ASTERISK_SIGN, 0); }
	public ADD_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.ADD_SIGN, 0); }
	public QUESTION_MARK_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.QUESTION_MARK_SIGN, 0); }
	public LB_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.LB_BRACKET, 0); }
	public DIG_LITERAL(): TerminalNode[];
	public DIG_LITERAL(i: number): TerminalNode;
	public DIG_LITERAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.DIG_LITERAL);
		} else {
			return this.getToken(FlinkSQLParser.DIG_LITERAL, i);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.COMMA, 0); }
	public RB_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.RB_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_quantifiers; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterQuantifiers) {
			listener.enterQuantifiers(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitQuantifiers) {
			listener.exitQuantifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitQuantifiers) {
			return visitor.visitQuantifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MeasuresClauseContext extends ParserRuleContext {
	public KW_MEASURES(): TerminalNode { return this.getToken(FlinkSQLParser.KW_MEASURES, 0); }
	public projectItemDefinition(): ProjectItemDefinitionContext[];
	public projectItemDefinition(i: number): ProjectItemDefinitionContext;
	public projectItemDefinition(i?: number): ProjectItemDefinitionContext | ProjectItemDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProjectItemDefinitionContext);
		} else {
			return this.getRuleContext(i, ProjectItemDefinitionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_measuresClause; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterMeasuresClause) {
			listener.enterMeasuresClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitMeasuresClause) {
			listener.exitMeasuresClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitMeasuresClause) {
			return visitor.visitMeasuresClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternDefinationContext extends ParserRuleContext {
	public KW_PATTERN(): TerminalNode { return this.getToken(FlinkSQLParser.KW_PATTERN, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	public patternVariable(): PatternVariableContext[];
	public patternVariable(i: number): PatternVariableContext;
	public patternVariable(i?: number): PatternVariableContext | PatternVariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PatternVariableContext);
		} else {
			return this.getRuleContext(i, PatternVariableContext);
		}
	}
	public withinClause(): WithinClauseContext | undefined {
		return this.tryGetRuleContext(0, WithinClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_patternDefination; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterPatternDefination) {
			listener.enterPatternDefination(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitPatternDefination) {
			listener.exitPatternDefination(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitPatternDefination) {
			return visitor.visitPatternDefination(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternVariableContext extends ParserRuleContext {
	public unquotedIdentifier(): UnquotedIdentifierContext {
		return this.getRuleContext(0, UnquotedIdentifierContext);
	}
	public quantifiers(): QuantifiersContext | undefined {
		return this.tryGetRuleContext(0, QuantifiersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_patternVariable; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterPatternVariable) {
			listener.enterPatternVariable(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitPatternVariable) {
			listener.exitPatternVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitPatternVariable) {
			return visitor.visitPatternVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputModeContext extends ParserRuleContext {
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ALL, 0); }
	public KW_ROWS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ROWS, 0); }
	public KW_PER(): TerminalNode { return this.getToken(FlinkSQLParser.KW_PER, 0); }
	public KW_MATCH(): TerminalNode { return this.getToken(FlinkSQLParser.KW_MATCH, 0); }
	public KW_ONE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ONE, 0); }
	public KW_ROW(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ROW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_outputMode; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterOutputMode) {
			listener.enterOutputMode(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitOutputMode) {
			listener.exitOutputMode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitOutputMode) {
			return visitor.visitOutputMode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AfterMatchStrategyContext extends ParserRuleContext {
	public KW_AFTER(): TerminalNode { return this.getToken(FlinkSQLParser.KW_AFTER, 0); }
	public KW_MATCH(): TerminalNode { return this.getToken(FlinkSQLParser.KW_MATCH, 0); }
	public KW_SKIP(): TerminalNode { return this.getToken(FlinkSQLParser.KW_SKIP, 0); }
	public KW_PAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PAST, 0); }
	public KW_LAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LAST, 0); }
	public KW_ROW(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ROW, 0); }
	public KW_TO(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TO, 0); }
	public KW_NEXT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NEXT, 0); }
	public unquotedIdentifier(): UnquotedIdentifierContext | undefined {
		return this.tryGetRuleContext(0, UnquotedIdentifierContext);
	}
	public KW_FIRST(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FIRST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_afterMatchStrategy; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterAfterMatchStrategy) {
			listener.enterAfterMatchStrategy(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitAfterMatchStrategy) {
			listener.exitAfterMatchStrategy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitAfterMatchStrategy) {
			return visitor.visitAfterMatchStrategy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternVariablesDefinationContext extends ParserRuleContext {
	public KW_DEFINE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_DEFINE, 0); }
	public projectItemDefinition(): ProjectItemDefinitionContext[];
	public projectItemDefinition(i: number): ProjectItemDefinitionContext;
	public projectItemDefinition(i?: number): ProjectItemDefinitionContext | ProjectItemDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProjectItemDefinitionContext);
		} else {
			return this.getRuleContext(i, ProjectItemDefinitionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_patternVariablesDefination; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterPatternVariablesDefination) {
			listener.enterPatternVariablesDefination(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitPatternVariablesDefination) {
			listener.exitPatternVariablesDefination(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitPatternVariablesDefination) {
			return visitor.visitPatternVariablesDefination(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowFrameContext extends ParserRuleContext {
	public KW_RANGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_RANGE, 0); }
	public KW_BETWEEN(): TerminalNode { return this.getToken(FlinkSQLParser.KW_BETWEEN, 0); }
	public timeIntervalExpression(): TimeIntervalExpressionContext | undefined {
		return this.tryGetRuleContext(0, TimeIntervalExpressionContext);
	}
	public frameBound(): FrameBoundContext {
		return this.getRuleContext(0, FrameBoundContext);
	}
	public KW_ROWS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ROWS, 0); }
	public DIG_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.DIG_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_windowFrame; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterWindowFrame) {
			listener.enterWindowFrame(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitWindowFrame) {
			listener.exitWindowFrame(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitWindowFrame) {
			return visitor.visitWindowFrame(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FrameBoundContext extends ParserRuleContext {
	public KW_PRECEDING(): TerminalNode { return this.getToken(FlinkSQLParser.KW_PRECEDING, 0); }
	public KW_AND(): TerminalNode { return this.getToken(FlinkSQLParser.KW_AND, 0); }
	public KW_CURRENT(): TerminalNode { return this.getToken(FlinkSQLParser.KW_CURRENT, 0); }
	public KW_ROW(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ROW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_frameBound; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterFrameBound) {
			listener.enterFrameBound(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitFrameBound) {
			listener.exitFrameBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitFrameBound) {
			return visitor.visitFrameBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithinClauseContext extends ParserRuleContext {
	public KW_WITHIN(): TerminalNode { return this.getToken(FlinkSQLParser.KW_WITHIN, 0); }
	public timeIntervalExpression(): TimeIntervalExpressionContext {
		return this.getRuleContext(0, TimeIntervalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_withinClause; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterWithinClause) {
			listener.enterWithinClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitWithinClause) {
			listener.exitWithinClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitWithinClause) {
			return visitor.visitWithinClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_expression; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_booleanExpression; }
	public copyFrom(ctx: BooleanExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class LogicalNotContext extends BooleanExpressionContext {
	public KW_NOT(): TerminalNode { return this.getToken(FlinkSQLParser.KW_NOT, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterLogicalNot) {
			listener.enterLogicalNot(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitLogicalNot) {
			listener.exitLogicalNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitLogicalNot) {
			return visitor.visitLogicalNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExistsContext extends BooleanExpressionContext {
	public KW_EXISTS(): TerminalNode { return this.getToken(FlinkSQLParser.KW_EXISTS, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public queryStatement(): QueryStatementContext {
		return this.getRuleContext(0, QueryStatementContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterExists) {
			listener.enterExists(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitExists) {
			listener.exitExists(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitExists) {
			return visitor.visitExists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PredicatedContext extends BooleanExpressionContext {
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public predicate(): PredicateContext | undefined {
		return this.tryGetRuleContext(0, PredicateContext);
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterPredicated) {
			listener.enterPredicated(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitPredicated) {
			listener.exitPredicated(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitPredicated) {
			return visitor.visitPredicated(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalBinaryContext extends BooleanExpressionContext {
	public _left!: BooleanExpressionContext;
	public _operator!: Token;
	public _right!: BooleanExpressionContext;
	public booleanExpression(): BooleanExpressionContext[];
	public booleanExpression(i: number): BooleanExpressionContext;
	public booleanExpression(i?: number): BooleanExpressionContext | BooleanExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanExpressionContext);
		}
	}
	public KW_AND(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_AND, 0); }
	public KW_OR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_OR, 0); }
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterLogicalBinary) {
			listener.enterLogicalBinary(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitLogicalBinary) {
			listener.exitLogicalBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitLogicalBinary) {
			return visitor.visitLogicalBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalNestedContext extends BooleanExpressionContext {
	public _kind!: Token;
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	public KW_IS(): TerminalNode { return this.getToken(FlinkSQLParser.KW_IS, 0); }
	public KW_TRUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TRUE, 0); }
	public KW_FALSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FALSE, 0); }
	public KW_UNKNOWN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_UNKNOWN, 0); }
	public KW_NULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NULL, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NOT, 0); }
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterLogicalNested) {
			listener.enterLogicalNested(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitLogicalNested) {
			listener.exitLogicalNested(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitLogicalNested) {
			return visitor.visitLogicalNested(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateContext extends ParserRuleContext {
	public _kind!: Token;
	public _lower!: ValueExpressionContext;
	public _upper!: ValueExpressionContext;
	public _pattern!: ValueExpressionContext;
	public _right!: ValueExpressionContext;
	public KW_AND(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_AND, 0); }
	public KW_BETWEEN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_BETWEEN, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NOT, 0); }
	public KW_ASYMMETRIC(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ASYMMETRIC, 0); }
	public KW_SYMMETRIC(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SYMMETRIC, 0); }
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.LR_BRACKET, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.RR_BRACKET, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_IN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	public queryStatement(): QueryStatementContext | undefined {
		return this.tryGetRuleContext(0, QueryStatementContext);
	}
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_EXISTS, 0); }
	public KW_RLIKE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_RLIKE, 0); }
	public likePredicate(): LikePredicateContext | undefined {
		return this.tryGetRuleContext(0, LikePredicateContext);
	}
	public KW_IS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_IS, 0); }
	public KW_TRUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TRUE, 0); }
	public KW_FALSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FALSE, 0); }
	public KW_UNKNOWN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_UNKNOWN, 0); }
	public KW_NULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NULL, 0); }
	public KW_FROM(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FROM, 0); }
	public KW_DISTINCT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DISTINCT, 0); }
	public KW_TO(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TO, 0); }
	public KW_SIMILAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SIMILAR, 0); }
	public KW_ESCAPE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ESCAPE, 0); }
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_predicate; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterPredicate) {
			listener.enterPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitPredicate) {
			listener.exitPredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitPredicate) {
			return visitor.visitPredicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LikePredicateContext extends ParserRuleContext {
	public _kind!: Token;
	public _quantifier!: Token;
	public _pattern!: ValueExpressionContext;
	public KW_LIKE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_LIKE, 0); }
	public KW_ANY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ANY, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ALL, 0); }
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.LR_BRACKET, 0); }
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.RR_BRACKET, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NOT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	public valueExpression(): ValueExpressionContext | undefined {
		return this.tryGetRuleContext(0, ValueExpressionContext);
	}
	public KW_ESCAPE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ESCAPE, 0); }
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_likePredicate; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterLikePredicate) {
			listener.enterLikePredicate(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitLikePredicate) {
			listener.exitLikePredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitLikePredicate) {
			return visitor.visitLikePredicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_valueExpression; }
	public copyFrom(ctx: ValueExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ValueExpressionDefaultContext extends ValueExpressionContext {
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterValueExpressionDefault) {
			listener.enterValueExpressionDefault(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitValueExpressionDefault) {
			listener.exitValueExpressionDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitValueExpressionDefault) {
			return visitor.visitValueExpressionDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticUnaryContext extends ValueExpressionContext {
	public _operator!: Token;
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public HYPNEN_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.HYPNEN_SIGN, 0); }
	public ADD_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.ADD_SIGN, 0); }
	public BIT_NOT_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.BIT_NOT_OP, 0); }
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterArithmeticUnary) {
			listener.enterArithmeticUnary(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitArithmeticUnary) {
			listener.exitArithmeticUnary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitArithmeticUnary) {
			return visitor.visitArithmeticUnary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticBinaryContext extends ValueExpressionContext {
	public _left!: ValueExpressionContext;
	public _operator!: Token;
	public _right!: ValueExpressionContext;
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public ASTERISK_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.ASTERISK_SIGN, 0); }
	public SLASH_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.SLASH_SIGN, 0); }
	public PENCENT_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.PENCENT_SIGN, 0); }
	public KW_DIV(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DIV, 0); }
	public ADD_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.ADD_SIGN, 0); }
	public HYPNEN_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.HYPNEN_SIGN, 0); }
	public DOUBLE_VERTICAL_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.DOUBLE_VERTICAL_SIGN, 0); }
	public BIT_AND_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.BIT_AND_OP, 0); }
	public BIT_XOR_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.BIT_XOR_OP, 0); }
	public BIT_OR_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.BIT_OR_OP, 0); }
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterArithmeticBinary) {
			listener.enterArithmeticBinary(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitArithmeticBinary) {
			listener.exitArithmeticBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitArithmeticBinary) {
			return visitor.visitArithmeticBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComparisonContext extends ValueExpressionContext {
	public _left!: ValueExpressionContext;
	public _right!: ValueExpressionContext;
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getRuleContext(0, ComparisonOperatorContext);
	}
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitComparison) {
			listener.exitComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitComparison) {
			return visitor.visitComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticBinaryAlternateContext extends ValueExpressionContext {
	public _left!: ValueExpressionContext;
	public _right!: Token;
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public SLASH_TEXT(): TerminalNode { return this.getToken(FlinkSQLParser.SLASH_TEXT, 0); }
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterArithmeticBinaryAlternate) {
			listener.enterArithmeticBinaryAlternate(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitArithmeticBinaryAlternate) {
			listener.exitArithmeticBinaryAlternate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitArithmeticBinaryAlternate) {
			return visitor.visitArithmeticBinaryAlternate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_primaryExpression; }
	public copyFrom(ctx: PrimaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class SearchedCaseContext extends PrimaryExpressionContext {
	public _elseExpression!: ExpressionContext;
	public KW_CASE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_CASE, 0); }
	public KW_END(): TerminalNode { return this.getToken(FlinkSQLParser.KW_END, 0); }
	public whenClause(): WhenClauseContext[];
	public whenClause(i: number): WhenClauseContext;
	public whenClause(i?: number): WhenClauseContext | WhenClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenClauseContext);
		} else {
			return this.getRuleContext(i, WhenClauseContext);
		}
	}
	public KW_ELSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ELSE, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterSearchedCase) {
			listener.enterSearchedCase(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitSearchedCase) {
			listener.exitSearchedCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitSearchedCase) {
			return visitor.visitSearchedCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SimpleCaseContext extends PrimaryExpressionContext {
	public _value!: ExpressionContext;
	public _elseExpression!: ExpressionContext;
	public KW_CASE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_CASE, 0); }
	public KW_END(): TerminalNode { return this.getToken(FlinkSQLParser.KW_END, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public whenClause(): WhenClauseContext[];
	public whenClause(i: number): WhenClauseContext;
	public whenClause(i?: number): WhenClauseContext | WhenClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenClauseContext);
		} else {
			return this.getRuleContext(i, WhenClauseContext);
		}
	}
	public KW_ELSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ELSE, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterSimpleCase) {
			listener.enterSimpleCase(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitSimpleCase) {
			listener.exitSimpleCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitSimpleCase) {
			return visitor.visitSimpleCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CastContext extends PrimaryExpressionContext {
	public KW_CAST(): TerminalNode { return this.getToken(FlinkSQLParser.KW_CAST, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(FlinkSQLParser.KW_AS, 0); }
	public columnType(): ColumnTypeContext {
		return this.getRuleContext(0, ColumnTypeContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterCast) {
			listener.enterCast(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitCast) {
			listener.exitCast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitCast) {
			return visitor.visitCast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FirstContext extends PrimaryExpressionContext {
	public KW_FIRST(): TerminalNode { return this.getToken(FlinkSQLParser.KW_FIRST, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	public KW_IGNORE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_IGNORE, 0); }
	public KW_NULLS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NULLS, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterFirst) {
			listener.enterFirst(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitFirst) {
			listener.exitFirst(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitFirst) {
			return visitor.visitFirst(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LastContext extends PrimaryExpressionContext {
	public KW_LAST(): TerminalNode { return this.getToken(FlinkSQLParser.KW_LAST, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	public KW_IGNORE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_IGNORE, 0); }
	public KW_NULLS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NULLS, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterLast) {
			listener.enterLast(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitLast) {
			listener.exitLast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitLast) {
			return visitor.visitLast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PositionContext extends PrimaryExpressionContext {
	public _substr!: ValueExpressionContext;
	public _str!: ValueExpressionContext;
	public KW_POSITION(): TerminalNode { return this.getToken(FlinkSQLParser.KW_POSITION, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public KW_IN(): TerminalNode { return this.getToken(FlinkSQLParser.KW_IN, 0); }
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterPosition) {
			listener.enterPosition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitPosition) {
			listener.exitPosition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitPosition) {
			return visitor.visitPosition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstantDefaultContext extends PrimaryExpressionContext {
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterConstantDefault) {
			listener.enterConstantDefault(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitConstantDefault) {
			listener.exitConstantDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitConstantDefault) {
			return visitor.visitConstantDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StarContext extends PrimaryExpressionContext {
	public ASTERISK_SIGN(): TerminalNode { return this.getToken(FlinkSQLParser.ASTERISK_SIGN, 0); }
	public uid(): UidContext | undefined {
		return this.tryGetRuleContext(0, UidContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.DOT, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterStar) {
			listener.enterStar(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitStar) {
			listener.exitStar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitStar) {
			return visitor.visitStar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubqueryExpressionContext extends PrimaryExpressionContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public queryStatement(): QueryStatementContext {
		return this.getRuleContext(0, QueryStatementContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterSubqueryExpression) {
			listener.enterSubqueryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitSubqueryExpression) {
			listener.exitSubqueryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitSubqueryExpression) {
			return visitor.visitSubqueryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallContext extends PrimaryExpressionContext {
	public functionName(): FunctionNameContext {
		return this.getRuleContext(0, FunctionNameContext);
	}
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	public functionParam(): FunctionParamContext[];
	public functionParam(i: number): FunctionParamContext;
	public functionParam(i?: number): FunctionParamContext | FunctionParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionParamContext);
		} else {
			return this.getRuleContext(i, FunctionParamContext);
		}
	}
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubscriptContext extends PrimaryExpressionContext {
	public _value!: PrimaryExpressionContext;
	public _index!: ValueExpressionContext;
	public LS_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LS_BRACKET, 0); }
	public RS_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RS_BRACKET, 0); }
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterSubscript) {
			listener.enterSubscript(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitSubscript) {
			listener.exitSubscript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitSubscript) {
			return visitor.visitSubscript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ColumnReferenceContext extends PrimaryExpressionContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterColumnReference) {
			listener.enterColumnReference(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitColumnReference) {
			listener.exitColumnReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitColumnReference) {
			return visitor.visitColumnReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DereferenceContext extends PrimaryExpressionContext {
	public dereferenceDefinition(): DereferenceDefinitionContext {
		return this.getRuleContext(0, DereferenceDefinitionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterDereference) {
			listener.enterDereference(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitDereference) {
			listener.exitDereference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitDereference) {
			return visitor.visitDereference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedExpressionContext extends PrimaryExpressionContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterParenthesizedExpression) {
			listener.enterParenthesizedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitParenthesizedExpression) {
			listener.exitParenthesizedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) {
			return visitor.visitParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionNameContext extends ParserRuleContext {
	public reservedKeywordsUsedAsFuncName(): ReservedKeywordsUsedAsFuncNameContext | undefined {
		return this.tryGetRuleContext(0, ReservedKeywordsUsedAsFuncNameContext);
	}
	public nonReservedKeywords(): NonReservedKeywordsContext | undefined {
		return this.tryGetRuleContext(0, NonReservedKeywordsContext);
	}
	public uid(): UidContext | undefined {
		return this.tryGetRuleContext(0, UidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_functionName; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterFunctionName) {
			listener.enterFunctionName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitFunctionName) {
			listener.exitFunctionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitFunctionName) {
			return visitor.visitFunctionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionParamContext extends ParserRuleContext {
	public reservedKeywordsUsedAsFuncParam(): ReservedKeywordsUsedAsFuncParamContext | undefined {
		return this.tryGetRuleContext(0, ReservedKeywordsUsedAsFuncParamContext);
	}
	public timeIntervalUnit(): TimeIntervalUnitContext | undefined {
		return this.tryGetRuleContext(0, TimeIntervalUnitContext);
	}
	public timePointUnit(): TimePointUnitContext | undefined {
		return this.tryGetRuleContext(0, TimePointUnitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_functionParam; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterFunctionParam) {
			listener.enterFunctionParam(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitFunctionParam) {
			listener.exitFunctionParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitFunctionParam) {
			return visitor.visitFunctionParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DereferenceDefinitionContext extends ParserRuleContext {
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_dereferenceDefinition; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterDereferenceDefinition) {
			listener.enterDereferenceDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitDereferenceDefinition) {
			listener.exitDereferenceDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitDereferenceDefinition) {
			return visitor.visitDereferenceDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CorrelationNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_correlationName; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterCorrelationName) {
			listener.enterCorrelationName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitCorrelationName) {
			listener.exitCorrelationName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitCorrelationName) {
			return visitor.visitCorrelationName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public dereferenceDefinition(): DereferenceDefinitionContext | undefined {
		return this.tryGetRuleContext(0, DereferenceDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeIntervalExpressionContext extends ParserRuleContext {
	public KW_INTERVAL(): TerminalNode { return this.getToken(FlinkSQLParser.KW_INTERVAL, 0); }
	public errorCapturingMultiUnitsInterval(): ErrorCapturingMultiUnitsIntervalContext | undefined {
		return this.tryGetRuleContext(0, ErrorCapturingMultiUnitsIntervalContext);
	}
	public errorCapturingUnitToUnitInterval(): ErrorCapturingUnitToUnitIntervalContext | undefined {
		return this.tryGetRuleContext(0, ErrorCapturingUnitToUnitIntervalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_timeIntervalExpression; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterTimeIntervalExpression) {
			listener.enterTimeIntervalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitTimeIntervalExpression) {
			listener.exitTimeIntervalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitTimeIntervalExpression) {
			return visitor.visitTimeIntervalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorCapturingMultiUnitsIntervalContext extends ParserRuleContext {
	public multiUnitsInterval(): MultiUnitsIntervalContext {
		return this.getRuleContext(0, MultiUnitsIntervalContext);
	}
	public unitToUnitInterval(): UnitToUnitIntervalContext | undefined {
		return this.tryGetRuleContext(0, UnitToUnitIntervalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_errorCapturingMultiUnitsInterval; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterErrorCapturingMultiUnitsInterval) {
			listener.enterErrorCapturingMultiUnitsInterval(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitErrorCapturingMultiUnitsInterval) {
			listener.exitErrorCapturingMultiUnitsInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitErrorCapturingMultiUnitsInterval) {
			return visitor.visitErrorCapturingMultiUnitsInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiUnitsIntervalContext extends ParserRuleContext {
	public intervalValue(): IntervalValueContext[];
	public intervalValue(i: number): IntervalValueContext;
	public intervalValue(i?: number): IntervalValueContext | IntervalValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntervalValueContext);
		} else {
			return this.getRuleContext(i, IntervalValueContext);
		}
	}
	public timeIntervalUnit(): TimeIntervalUnitContext[];
	public timeIntervalUnit(i: number): TimeIntervalUnitContext;
	public timeIntervalUnit(i?: number): TimeIntervalUnitContext | TimeIntervalUnitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TimeIntervalUnitContext);
		} else {
			return this.getRuleContext(i, TimeIntervalUnitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_multiUnitsInterval; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterMultiUnitsInterval) {
			listener.enterMultiUnitsInterval(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitMultiUnitsInterval) {
			listener.exitMultiUnitsInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitMultiUnitsInterval) {
			return visitor.visitMultiUnitsInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorCapturingUnitToUnitIntervalContext extends ParserRuleContext {
	public _body!: UnitToUnitIntervalContext;
	public _error1!: MultiUnitsIntervalContext;
	public _error2!: UnitToUnitIntervalContext;
	public unitToUnitInterval(): UnitToUnitIntervalContext[];
	public unitToUnitInterval(i: number): UnitToUnitIntervalContext;
	public unitToUnitInterval(i?: number): UnitToUnitIntervalContext | UnitToUnitIntervalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnitToUnitIntervalContext);
		} else {
			return this.getRuleContext(i, UnitToUnitIntervalContext);
		}
	}
	public multiUnitsInterval(): MultiUnitsIntervalContext | undefined {
		return this.tryGetRuleContext(0, MultiUnitsIntervalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_errorCapturingUnitToUnitInterval; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterErrorCapturingUnitToUnitInterval) {
			listener.enterErrorCapturingUnitToUnitInterval(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitErrorCapturingUnitToUnitInterval) {
			listener.exitErrorCapturingUnitToUnitInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitErrorCapturingUnitToUnitInterval) {
			return visitor.visitErrorCapturingUnitToUnitInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnitToUnitIntervalContext extends ParserRuleContext {
	public _value!: IntervalValueContext;
	public _from!: TimeIntervalUnitContext;
	public _to!: TimeIntervalUnitContext;
	public KW_TO(): TerminalNode { return this.getToken(FlinkSQLParser.KW_TO, 0); }
	public intervalValue(): IntervalValueContext {
		return this.getRuleContext(0, IntervalValueContext);
	}
	public timeIntervalUnit(): TimeIntervalUnitContext[];
	public timeIntervalUnit(i: number): TimeIntervalUnitContext;
	public timeIntervalUnit(i?: number): TimeIntervalUnitContext | TimeIntervalUnitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TimeIntervalUnitContext);
		} else {
			return this.getRuleContext(i, TimeIntervalUnitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_unitToUnitInterval; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterUnitToUnitInterval) {
			listener.enterUnitToUnitInterval(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitUnitToUnitInterval) {
			listener.exitUnitToUnitInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitUnitToUnitInterval) {
			return visitor.visitUnitToUnitInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntervalValueContext extends ParserRuleContext {
	public DIG_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.DIG_LITERAL, 0); }
	public REAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.REAL_LITERAL, 0); }
	public ADD_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.ADD_SIGN, 0); }
	public HYPNEN_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.HYPNEN_SIGN, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_intervalValue; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterIntervalValue) {
			listener.enterIntervalValue(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitIntervalValue) {
			listener.exitIntervalValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitIntervalValue) {
			return visitor.visitIntervalValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnAliasContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_AS, 0); }
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_columnAlias; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterColumnAlias) {
			listener.enterColumnAlias(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitColumnAlias) {
			listener.exitColumnAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitColumnAlias) {
			return visitor.visitColumnAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableAliasContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_AS, 0); }
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_tableAlias; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterTableAlias) {
			listener.enterTableAlias(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitTableAlias) {
			listener.exitTableAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitTableAlias) {
			return visitor.visitTableAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorCapturingIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public errorCapturingIdentifierExtra(): ErrorCapturingIdentifierExtraContext {
		return this.getRuleContext(0, ErrorCapturingIdentifierExtraContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_errorCapturingIdentifier; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterErrorCapturingIdentifier) {
			listener.enterErrorCapturingIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitErrorCapturingIdentifier) {
			listener.exitErrorCapturingIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitErrorCapturingIdentifier) {
			return visitor.visitErrorCapturingIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorCapturingIdentifierExtraContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_errorCapturingIdentifierExtra; }
	public copyFrom(ctx: ErrorCapturingIdentifierExtraContext): void {
		super.copyFrom(ctx);
	}
}
export class ErrorIdentContext extends ErrorCapturingIdentifierExtraContext {
	public KW_MINUS(): TerminalNode[];
	public KW_MINUS(i: number): TerminalNode;
	public KW_MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.KW_MINUS);
		} else {
			return this.getToken(FlinkSQLParser.KW_MINUS, i);
		}
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(ctx: ErrorCapturingIdentifierExtraContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterErrorIdent) {
			listener.enterErrorIdent(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitErrorIdent) {
			listener.exitErrorIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitErrorIdent) {
			return visitor.visitErrorIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RealIdentContext extends ErrorCapturingIdentifierExtraContext {
	constructor(ctx: ErrorCapturingIdentifierExtraContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterRealIdent) {
			listener.enterRealIdent(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitRealIdent) {
			listener.exitRealIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitRealIdent) {
			return visitor.visitRealIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public identifierSeq(): IdentifierSeqContext {
		return this.getRuleContext(0, IdentifierSeqContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_identifierList; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierSeqContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_identifierSeq; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterIdentifierSeq) {
			listener.enterIdentifierSeq(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitIdentifierSeq) {
			listener.exitIdentifierSeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitIdentifierSeq) {
			return visitor.visitIdentifierSeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_identifier; }
	public copyFrom(ctx: IdentifierContext): void {
		super.copyFrom(ctx);
	}
}
export class UnquotedIdentifierAlternativeContext extends IdentifierContext {
	public unquotedIdentifier(): UnquotedIdentifierContext {
		return this.getRuleContext(0, UnquotedIdentifierContext);
	}
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterUnquotedIdentifierAlternative) {
			listener.enterUnquotedIdentifierAlternative(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitUnquotedIdentifierAlternative) {
			listener.exitUnquotedIdentifierAlternative(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitUnquotedIdentifierAlternative) {
			return visitor.visitUnquotedIdentifierAlternative(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QuotedIdentifierAlternativeContext extends IdentifierContext {
	public quotedIdentifier(): QuotedIdentifierContext {
		return this.getRuleContext(0, QuotedIdentifierContext);
	}
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterQuotedIdentifierAlternative) {
			listener.enterQuotedIdentifierAlternative(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitQuotedIdentifierAlternative) {
			listener.exitQuotedIdentifierAlternative(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitQuotedIdentifierAlternative) {
			return visitor.visitQuotedIdentifierAlternative(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NonReservedKeywordsAlternativeContext extends IdentifierContext {
	public nonReservedKeywords(): NonReservedKeywordsContext {
		return this.getRuleContext(0, NonReservedKeywordsContext);
	}
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterNonReservedKeywordsAlternative) {
			listener.enterNonReservedKeywordsAlternative(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitNonReservedKeywordsAlternative) {
			listener.exitNonReservedKeywordsAlternative(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitNonReservedKeywordsAlternative) {
			return visitor.visitNonReservedKeywordsAlternative(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnquotedIdentifierContext extends ParserRuleContext {
	public DIG_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.DIG_LITERAL, 0); }
	public ID_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.ID_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_unquotedIdentifier; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterUnquotedIdentifier) {
			listener.enterUnquotedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitUnquotedIdentifier) {
			listener.exitUnquotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitUnquotedIdentifier) {
			return visitor.visitUnquotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuotedIdentifierContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(FlinkSQLParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_quotedIdentifier; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterQuotedIdentifier) {
			listener.enterQuotedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitQuotedIdentifier) {
			listener.exitQuotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitQuotedIdentifier) {
			return visitor.visitQuotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhenClauseContext extends ParserRuleContext {
	public _condition!: ExpressionContext;
	public _result!: ExpressionContext;
	public KW_WHEN(): TerminalNode { return this.getToken(FlinkSQLParser.KW_WHEN, 0); }
	public KW_THEN(): TerminalNode { return this.getToken(FlinkSQLParser.KW_THEN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_whenClause; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterWhenClause) {
			listener.enterWhenClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitWhenClause) {
			listener.exitWhenClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitWhenClause) {
			return visitor.visitWhenClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatalogPathContext extends ParserRuleContext {
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_catalogPath; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterCatalogPath) {
			listener.enterCatalogPath(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitCatalogPath) {
			listener.exitCatalogPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitCatalogPath) {
			return visitor.visitCatalogPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatabasePathContext extends ParserRuleContext {
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_databasePath; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterDatabasePath) {
			listener.enterDatabasePath(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitDatabasePath) {
			listener.exitDatabasePath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitDatabasePath) {
			return visitor.visitDatabasePath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatabasePathCreateContext extends ParserRuleContext {
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_databasePathCreate; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterDatabasePathCreate) {
			listener.enterDatabasePathCreate(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitDatabasePathCreate) {
			listener.exitDatabasePathCreate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitDatabasePathCreate) {
			return visitor.visitDatabasePathCreate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePathCreateContext extends ParserRuleContext {
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_tablePathCreate; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterTablePathCreate) {
			listener.enterTablePathCreate(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitTablePathCreate) {
			listener.exitTablePathCreate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitTablePathCreate) {
			return visitor.visitTablePathCreate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePathContext extends ParserRuleContext {
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_tablePath; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterTablePath) {
			listener.enterTablePath(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitTablePath) {
			listener.exitTablePath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitTablePath) {
			return visitor.visitTablePath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UidContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.DOT);
		} else {
			return this.getToken(FlinkSQLParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_uid; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterUid) {
			listener.enterUid(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitUid) {
			listener.exitUid(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitUid) {
			return visitor.visitUid(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithOptionContext extends ParserRuleContext {
	public KW_WITH(): TerminalNode { return this.getToken(FlinkSQLParser.KW_WITH, 0); }
	public tablePropertyList(): TablePropertyListContext {
		return this.getRuleContext(0, TablePropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_withOption; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterWithOption) {
			listener.enterWithOption(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitWithOption) {
			listener.exitWithOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitWithOption) {
			return visitor.visitWithOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfNotExistsContext extends ParserRuleContext {
	public KW_IF(): TerminalNode { return this.getToken(FlinkSQLParser.KW_IF, 0); }
	public KW_NOT(): TerminalNode { return this.getToken(FlinkSQLParser.KW_NOT, 0); }
	public KW_EXISTS(): TerminalNode { return this.getToken(FlinkSQLParser.KW_EXISTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_ifNotExists; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterIfNotExists) {
			listener.enterIfNotExists(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitIfNotExists) {
			listener.exitIfNotExists(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitIfNotExists) {
			return visitor.visitIfNotExists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfExistsContext extends ParserRuleContext {
	public KW_IF(): TerminalNode { return this.getToken(FlinkSQLParser.KW_IF, 0); }
	public KW_EXISTS(): TerminalNode { return this.getToken(FlinkSQLParser.KW_EXISTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_ifExists; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterIfExists) {
			listener.enterIfExists(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitIfExists) {
			listener.exitIfExists(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitIfExists) {
			return visitor.visitIfExists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropertyListContext extends ParserRuleContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public tableProperty(): TablePropertyContext[];
	public tableProperty(i: number): TablePropertyContext;
	public tableProperty(i?: number): TablePropertyContext | TablePropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TablePropertyContext);
		} else {
			return this.getRuleContext(i, TablePropertyContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_tablePropertyList; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterTablePropertyList) {
			listener.enterTablePropertyList(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitTablePropertyList) {
			listener.exitTablePropertyList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitTablePropertyList) {
			return visitor.visitTablePropertyList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropertyContext extends ParserRuleContext {
	public _key!: TablePropertyKeyContext;
	public _value!: TablePropertyValueContext;
	public tablePropertyKey(): TablePropertyKeyContext {
		return this.getRuleContext(0, TablePropertyKeyContext);
	}
	public tablePropertyValue(): TablePropertyValueContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyValueContext);
	}
	public EQUAL_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.EQUAL_SYMBOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_tableProperty; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterTableProperty) {
			listener.enterTableProperty(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitTableProperty) {
			listener.exitTableProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitTableProperty) {
			return visitor.visitTableProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropertyKeyContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public dereferenceDefinition(): DereferenceDefinitionContext | undefined {
		return this.tryGetRuleContext(0, DereferenceDefinitionContext);
	}
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_tablePropertyKey; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterTablePropertyKey) {
			listener.enterTablePropertyKey(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitTablePropertyKey) {
			listener.exitTablePropertyKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitTablePropertyKey) {
			return visitor.visitTablePropertyKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropertyValueContext extends ParserRuleContext {
	public DIG_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.DIG_LITERAL, 0); }
	public REAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.REAL_LITERAL, 0); }
	public booleanLiteral(): BooleanLiteralContext | undefined {
		return this.tryGetRuleContext(0, BooleanLiteralContext);
	}
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_tablePropertyValue; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterTablePropertyValue) {
			listener.enterTablePropertyValue(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitTablePropertyValue) {
			listener.exitTablePropertyValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitTablePropertyValue) {
			return visitor.visitTablePropertyValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalOperatorContext extends ParserRuleContext {
	public KW_AND(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_AND, 0); }
	public BIT_AND_OP(): TerminalNode[];
	public BIT_AND_OP(i: number): TerminalNode;
	public BIT_AND_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.BIT_AND_OP);
		} else {
			return this.getToken(FlinkSQLParser.BIT_AND_OP, i);
		}
	}
	public KW_OR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_OR, 0); }
	public BIT_OR_OP(): TerminalNode[];
	public BIT_OR_OP(i: number): TerminalNode;
	public BIT_OR_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.BIT_OR_OP);
		} else {
			return this.getToken(FlinkSQLParser.BIT_OR_OP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_logicalOperator; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterLogicalOperator) {
			listener.enterLogicalOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitLogicalOperator) {
			listener.exitLogicalOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitLogicalOperator) {
			return visitor.visitLogicalOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	public EQUAL_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.EQUAL_SYMBOL, 0); }
	public GREATER_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.GREATER_SYMBOL, 0); }
	public LESS_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.LESS_SYMBOL, 0); }
	public EXCLAMATION_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.EXCLAMATION_SYMBOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_comparisonOperator; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterComparisonOperator) {
			listener.enterComparisonOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitComparisonOperator) {
			listener.exitComparisonOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitComparisonOperator) {
			return visitor.visitComparisonOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitOperatorContext extends ParserRuleContext {
	public LESS_SYMBOL(): TerminalNode[];
	public LESS_SYMBOL(i: number): TerminalNode;
	public LESS_SYMBOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.LESS_SYMBOL);
		} else {
			return this.getToken(FlinkSQLParser.LESS_SYMBOL, i);
		}
	}
	public GREATER_SYMBOL(): TerminalNode[];
	public GREATER_SYMBOL(i: number): TerminalNode;
	public GREATER_SYMBOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.GREATER_SYMBOL);
		} else {
			return this.getToken(FlinkSQLParser.GREATER_SYMBOL, i);
		}
	}
	public BIT_AND_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.BIT_AND_OP, 0); }
	public BIT_XOR_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.BIT_XOR_OP, 0); }
	public BIT_OR_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.BIT_OR_OP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_bitOperator; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterBitOperator) {
			listener.enterBitOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitBitOperator) {
			listener.exitBitOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitBitOperator) {
			return visitor.visitBitOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MathOperatorContext extends ParserRuleContext {
	public ASTERISK_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.ASTERISK_SIGN, 0); }
	public SLASH_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.SLASH_SIGN, 0); }
	public PENCENT_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.PENCENT_SIGN, 0); }
	public KW_DIV(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DIV, 0); }
	public ADD_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.ADD_SIGN, 0); }
	public HYPNEN_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.HYPNEN_SIGN, 0); }
	public DOUBLE_HYPNEN_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.DOUBLE_HYPNEN_SIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_mathOperator; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterMathOperator) {
			listener.enterMathOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitMathOperator) {
			listener.exitMathOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitMathOperator) {
			return visitor.visitMathOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryOperatorContext extends ParserRuleContext {
	public EXCLAMATION_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.EXCLAMATION_SYMBOL, 0); }
	public BIT_NOT_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.BIT_NOT_OP, 0); }
	public ADD_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.ADD_SIGN, 0); }
	public HYPNEN_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.HYPNEN_SIGN, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_unaryOperator; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterUnaryOperator) {
			listener.enterUnaryOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitUnaryOperator) {
			listener.exitUnaryOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitUnaryOperator) {
			return visitor.visitUnaryOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	public timeIntervalExpression(): TimeIntervalExpressionContext | undefined {
		return this.tryGetRuleContext(0, TimeIntervalExpressionContext);
	}
	public timePointLiteral(): TimePointLiteralContext | undefined {
		return this.tryGetRuleContext(0, TimePointLiteralContext);
	}
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public decimalLiteral(): DecimalLiteralContext | undefined {
		return this.tryGetRuleContext(0, DecimalLiteralContext);
	}
	public HYPNEN_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.HYPNEN_SIGN, 0); }
	public booleanLiteral(): BooleanLiteralContext | undefined {
		return this.tryGetRuleContext(0, BooleanLiteralContext);
	}
	public REAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.REAL_LITERAL, 0); }
	public BIT_STRING(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.BIT_STRING, 0); }
	public KW_NULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NULL, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_constant; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterConstant) {
			listener.enterConstant(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitConstant) {
			listener.exitConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitConstant) {
			return visitor.visitConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimePointLiteralContext extends ParserRuleContext {
	public timePointUnit(): TimePointUnitContext {
		return this.getRuleContext(0, TimePointUnitContext);
	}
	public stringLiteral(): StringLiteralContext {
		return this.getRuleContext(0, StringLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_timePointLiteral; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterTimePointLiteral) {
			listener.enterTimePointLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitTimePointLiteral) {
			listener.exitTimePointLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitTimePointLiteral) {
			return visitor.visitTimePointLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(FlinkSQLParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_stringLiteral; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DecimalLiteralContext extends ParserRuleContext {
	public DIG_LITERAL(): TerminalNode { return this.getToken(FlinkSQLParser.DIG_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_decimalLiteral; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterDecimalLiteral) {
			listener.enterDecimalLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitDecimalLiteral) {
			listener.exitDecimalLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitDecimalLiteral) {
			return visitor.visitDecimalLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanLiteralContext extends ParserRuleContext {
	public KW_TRUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TRUE, 0); }
	public KW_FALSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_booleanLiteral; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterBooleanLiteral) {
			listener.enterBooleanLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitBooleanLiteral) {
			listener.exitBooleanLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitBooleanLiteral) {
			return visitor.visitBooleanLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetQuantifierContext extends ParserRuleContext {
	public KW_DISTINCT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DISTINCT, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_setQuantifier; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterSetQuantifier) {
			listener.enterSetQuantifier(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitSetQuantifier) {
			listener.exitSetQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitSetQuantifier) {
			return visitor.visitSetQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimePointUnitContext extends ParserRuleContext {
	public KW_YEAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_YEAR, 0); }
	public KW_QUARTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_QUARTER, 0); }
	public KW_MONTH(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MONTH, 0); }
	public KW_WEEK(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_WEEK, 0); }
	public KW_DAY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DAY, 0); }
	public KW_HOUR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_HOUR, 0); }
	public KW_MINUTE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MINUTE, 0); }
	public KW_SECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SECOND, 0); }
	public KW_MILLISECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MILLISECOND, 0); }
	public KW_MICROSECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MICROSECOND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_timePointUnit; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterTimePointUnit) {
			listener.enterTimePointUnit(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitTimePointUnit) {
			listener.exitTimePointUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitTimePointUnit) {
			return visitor.visitTimePointUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeIntervalUnitContext extends ParserRuleContext {
	public KW_MILLENNIUM(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MILLENNIUM, 0); }
	public KW_CENTURY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CENTURY, 0); }
	public KW_DECADE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DECADE, 0); }
	public KW_YEAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_YEAR, 0); }
	public KW_YEARS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_YEARS, 0); }
	public KW_QUARTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_QUARTER, 0); }
	public KW_MONTH(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MONTH, 0); }
	public KW_MONTHS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MONTHS, 0); }
	public KW_WEEK(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_WEEK, 0); }
	public KW_WEEKS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_WEEKS, 0); }
	public KW_DAY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DAY, 0); }
	public KW_DAYS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DAYS, 0); }
	public KW_HOUR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_HOUR, 0); }
	public KW_HOURS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_HOURS, 0); }
	public KW_MINUTE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MINUTE, 0); }
	public KW_MINUTES(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MINUTES, 0); }
	public KW_SECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SECOND, 0); }
	public KW_SECONDS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SECONDS, 0); }
	public KW_MILLISECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MILLISECOND, 0); }
	public KW_MICROSECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MICROSECOND, 0); }
	public KW_NANOSECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NANOSECOND, 0); }
	public KW_EPOCH(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_EPOCH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_timeIntervalUnit; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterTimeIntervalUnit) {
			listener.enterTimeIntervalUnit(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitTimeIntervalUnit) {
			listener.exitTimeIntervalUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitTimeIntervalUnit) {
			return visitor.visitTimeIntervalUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedKeywordsUsedAsFuncParamContext extends ParserRuleContext {
	public KW_LEADING(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LEADING, 0); }
	public KW_TRAILING(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TRAILING, 0); }
	public KW_BOTH(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_BOTH, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ALL, 0); }
	public KW_DISTINCT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DISTINCT, 0); }
	public ASTERISK_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.ASTERISK_SIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_reservedKeywordsUsedAsFuncParam; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterReservedKeywordsUsedAsFuncParam) {
			listener.enterReservedKeywordsUsedAsFuncParam(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitReservedKeywordsUsedAsFuncParam) {
			listener.exitReservedKeywordsUsedAsFuncParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitReservedKeywordsUsedAsFuncParam) {
			return visitor.visitReservedKeywordsUsedAsFuncParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedKeywordsUsedAsFuncNameContext extends ParserRuleContext {
	public KW_ABS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ABS, 0); }
	public KW_ARRAY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ARRAY, 0); }
	public KW_AVG(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_AVG, 0); }
	public KW_CAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CAST, 0); }
	public KW_CEIL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CEIL, 0); }
	public KW_COALESCE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_COALESCE, 0); }
	public KW_COLLECT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_COLLECT, 0); }
	public KW_COUNT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_COUNT, 0); }
	public KW_DATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DATE, 0); }
	public KW_GROUPING(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_GROUPING, 0); }
	public KW_HOUR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_HOUR, 0); }
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_IF, 0); }
	public KW_LAG(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LAG, 0); }
	public KW_LEFT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LEFT, 0); }
	public KW_MAP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MAP, 0); }
	public KW_MINUTE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MINUTE, 0); }
	public KW_MONTH(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MONTH, 0); }
	public KW_OVERLAY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_OVERLAY, 0); }
	public KW_POSITION(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_POSITION, 0); }
	public KW_POWER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_POWER, 0); }
	public KW_QUARTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_QUARTER, 0); }
	public KW_RANK(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_RANK, 0); }
	public KW_RIGHT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_RIGHT, 0); }
	public KW_SECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SECOND, 0); }
	public KW_SUBSTRING(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SUBSTRING, 0); }
	public KW_SUM(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SUM, 0); }
	public KW_TIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TIME, 0); }
	public KW_TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TIMESTAMP, 0); }
	public KW_TIMESTAMP_3(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TIMESTAMP_3, 0); }
	public KW_TIMESTAMP_6(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TIMESTAMP_6, 0); }
	public KW_TIMESTAMP_9(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TIMESTAMP_9, 0); }
	public KW_TRUNCATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TRUNCATE, 0); }
	public KW_UPPER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_UPPER, 0); }
	public KW_WEEK(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_WEEK, 0); }
	public KW_YEAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_YEAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_reservedKeywordsUsedAsFuncName; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterReservedKeywordsUsedAsFuncName) {
			listener.enterReservedKeywordsUsedAsFuncName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitReservedKeywordsUsedAsFuncName) {
			listener.exitReservedKeywordsUsedAsFuncName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitReservedKeywordsUsedAsFuncName) {
			return visitor.visitReservedKeywordsUsedAsFuncName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedKeywordsContext extends ParserRuleContext {
	public KW_ABS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ABS, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ALL, 0); }
	public KW_ALLOW(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ALLOW, 0); }
	public KW_ALTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ALTER, 0); }
	public KW_AND(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_AND, 0); }
	public KW_ANY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ANY, 0); }
	public KW_ARE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ARE, 0); }
	public KW_ARRAY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ARRAY, 0); }
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_AS, 0); }
	public KW_ASYMMETRIC(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ASYMMETRIC, 0); }
	public KW_AT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_AT, 0); }
	public KW_AVG(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_AVG, 0); }
	public KW_BEGIN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_BEGIN, 0); }
	public KW_BETWEEN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_BETWEEN, 0); }
	public KW_BIGINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_BIGINT, 0); }
	public KW_BINARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_BINARY, 0); }
	public KW_BIT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_BIT, 0); }
	public KW_BLOB(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_BLOB, 0); }
	public KW_BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_BOOLEAN, 0); }
	public KW_BOTH(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_BOTH, 0); }
	public KW_BY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_BY, 0); }
	public KW_CALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CALL, 0); }
	public KW_CALLED(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CALLED, 0); }
	public KW_CASCADED(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CASCADED, 0); }
	public KW_CASE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CASE, 0); }
	public KW_CAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CAST, 0); }
	public KW_CEIL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CEIL, 0); }
	public KW_CHAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CHAR, 0); }
	public KW_CHARACTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CHARACTER, 0); }
	public KW_CHECK(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CHECK, 0); }
	public KW_CLOB(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CLOB, 0); }
	public KW_CLOSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CLOSE, 0); }
	public KW_COALESCE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_COALESCE, 0); }
	public KW_COLLATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_COLLATE, 0); }
	public KW_COLLECT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_COLLECT, 0); }
	public KW_COLUMN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_COLUMN, 0); }
	public KW_COMMIT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_COMMIT, 0); }
	public KW_CONNECT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CONNECT, 0); }
	public KW_CONSTRAINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CONSTRAINT, 0); }
	public KW_CONTAINS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CONTAINS, 0); }
	public KW_CONVERT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CONVERT, 0); }
	public KW_COUNT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_COUNT, 0); }
	public KW_CREATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CREATE, 0); }
	public KW_CROSS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CROSS, 0); }
	public KW_CUBE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CUBE, 0); }
	public KW_CURRENT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CURRENT, 0); }
	public KW_CURSOR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CURSOR, 0); }
	public KW_CYCLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CYCLE, 0); }
	public KW_DATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DATE, 0); }
	public KW_DATETIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DATETIME, 0); }
	public KW_DAY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DAY, 0); }
	public KW_DEC(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DEC, 0); }
	public KW_DECIMAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DECIMAL, 0); }
	public KW_DECLARE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DECLARE, 0); }
	public KW_DEFAULT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DEFAULT, 0); }
	public KW_DEFINE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DEFINE, 0); }
	public KW_DELETE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DELETE, 0); }
	public KW_DESCRIBE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DESCRIBE, 0); }
	public KW_DISTINCT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DISTINCT, 0); }
	public KW_DOUBLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DOUBLE, 0); }
	public KW_DROP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DROP, 0); }
	public KW_EACH(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_EACH, 0); }
	public KW_ELSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ELSE, 0); }
	public KW_END(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_END, 0); }
	public KW_EQUALS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_EQUALS, 0); }
	public KW_EXCEPT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_EXCEPT, 0); }
	public KW_EXECUTE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_EXECUTE, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_EXISTS, 0); }
	public KW_EXPLAIN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_EXPLAIN, 0); }
	public KW_EXTERNAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_EXTERNAL, 0); }
	public KW_EXTRACT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_EXTRACT, 0); }
	public KW_FALSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FALSE, 0); }
	public KW_FLOAT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FLOAT, 0); }
	public KW_FOR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FOR, 0); }
	public KW_FROM(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FROM, 0); }
	public KW_FULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FULL, 0); }
	public KW_FUNCTION(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FUNCTION, 0); }
	public KW_GLOBAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_GLOBAL, 0); }
	public KW_GRANT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_GRANT, 0); }
	public KW_GROUP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_GROUP, 0); }
	public KW_GROUPING(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_GROUPING, 0); }
	public KW_GROUPS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_GROUPS, 0); }
	public KW_HAVING(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_HAVING, 0); }
	public KW_HOUR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_HOUR, 0); }
	public KW_IMPORT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_IMPORT, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_IN, 0); }
	public KW_INCLUDING(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_INCLUDING, 0); }
	public KW_INNER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_INNER, 0); }
	public KW_INOUT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_INOUT, 0); }
	public KW_INSERT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_INSERT, 0); }
	public KW_INT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_INT, 0); }
	public KW_INTEGER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_INTEGER, 0); }
	public KW_INTERSECT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_INTERSECT, 0); }
	public KW_INTERVAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_INTERVAL, 0); }
	public KW_INTO(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_INTO, 0); }
	public KW_IS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_IS, 0); }
	public KW_JOIN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_JOIN, 0); }
	public KW_LAG(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LAG, 0); }
	public KW_LANGUAGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LANGUAGE, 0); }
	public KW_LATERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LATERAL, 0); }
	public KW_LEADING(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LEADING, 0); }
	public KW_LEFT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LEFT, 0); }
	public KW_LIKE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LIKE, 0); }
	public KW_LIMIT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LIMIT, 0); }
	public KW_LOCAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LOCAL, 0); }
	public KW_MATCH(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MATCH, 0); }
	public KW_MATCH_RECOGNIZE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MATCH_RECOGNIZE, 0); }
	public KW_MEASURES(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MEASURES, 0); }
	public KW_MERGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MERGE, 0); }
	public KW_METADATA(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_METADATA, 0); }
	public KW_MINUS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MINUS, 0); }
	public KW_MINUTE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MINUTE, 0); }
	public KW_MODIFIES(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MODIFIES, 0); }
	public KW_MODULE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MODULE, 0); }
	public KW_MONTH(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MONTH, 0); }
	public KW_MULTISET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MULTISET, 0); }
	public KW_NATURAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NATURAL, 0); }
	public KW_NEXT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NEXT, 0); }
	public KW_NO(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NO, 0); }
	public KW_NONE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NONE, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NOT, 0); }
	public KW_NULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NULL, 0); }
	public KW_NUMERIC(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NUMERIC, 0); }
	public KW_OF(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_OF, 0); }
	public KW_OFFSET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_OFFSET, 0); }
	public KW_ON(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ON, 0); }
	public KW_ONE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ONE, 0); }
	public KW_OR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_OR, 0); }
	public KW_ORDER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ORDER, 0); }
	public KW_OUT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_OUT, 0); }
	public KW_OUTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_OUTER, 0); }
	public KW_OVER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_OVER, 0); }
	public KW_OVERLAY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_OVERLAY, 0); }
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PARTITION, 0); }
	public KW_PATTERN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PATTERN, 0); }
	public KW_PER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PER, 0); }
	public KW_PERCENT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PERCENT, 0); }
	public KW_PERIOD(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PERIOD, 0); }
	public KW_POSITION(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_POSITION, 0); }
	public KW_PRIMARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PRIMARY, 0); }
	public KW_RANGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_RANGE, 0); }
	public KW_RANK(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_RANK, 0); }
	public KW_RESET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_RESET, 0); }
	public KW_REVOKE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_REVOKE, 0); }
	public KW_RIGHT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_RIGHT, 0); }
	public KW_RLIKE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_RLIKE, 0); }
	public KW_ROLLBACK(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ROLLBACK, 0); }
	public KW_ROLLUP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ROLLUP, 0); }
	public KW_ROW(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ROW, 0); }
	public KW_ROWS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ROWS, 0); }
	public KW_SECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SECOND, 0); }
	public KW_SELECT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SELECT, 0); }
	public KW_SET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SET, 0); }
	public KW_SHOW(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SHOW, 0); }
	public KW_SIMILAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SIMILAR, 0); }
	public KW_SKIP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SKIP, 0); }
	public KW_SMALLINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SMALLINT, 0); }
	public KW_START(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_START, 0); }
	public KW_STATIC(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_STATIC, 0); }
	public KW_SUBSTRING(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SUBSTRING, 0); }
	public KW_SUM(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SUM, 0); }
	public KW_SYSTEM_TIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SYSTEM_TIME, 0); }
	public KW_SYSTEM(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SYSTEM, 0); }
	public KW_SYSTEM_USER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SYSTEM_USER, 0); }
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TABLE, 0); }
	public KW_TABLESAMPLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TABLESAMPLE, 0); }
	public KW_THEN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_THEN, 0); }
	public KW_TIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TIME, 0); }
	public KW_TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TIMESTAMP, 0); }
	public KW_TIMESTAMP_3(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TIMESTAMP_3, 0); }
	public KW_TIMESTAMP_6(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TIMESTAMP_6, 0); }
	public KW_TIMESTAMP_9(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TIMESTAMP_9, 0); }
	public KW_TINYINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TINYINT, 0); }
	public KW_TO(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TO, 0); }
	public KW_TRUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TRUE, 0); }
	public KW_TRUNCATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TRUNCATE, 0); }
	public KW_UNION(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_UNION, 0); }
	public KW_UNIQUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_UNIQUE, 0); }
	public KW_UNKNOWN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_UNKNOWN, 0); }
	public KW_UNNEST(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_UNNEST, 0); }
	public KW_UPPER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_UPPER, 0); }
	public KW_UPSERT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_UPSERT, 0); }
	public KW_USER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_USER, 0); }
	public KW_USING(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_USING, 0); }
	public KW_VALUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_VALUE, 0); }
	public KW_VALUES(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_VALUES, 0); }
	public KW_VARBINARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_VARBINARY, 0); }
	public KW_VARCHAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_VARCHAR, 0); }
	public KW_WHEN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_WHEN, 0); }
	public KW_WHERE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_WHERE, 0); }
	public KW_WINDOW(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_WINDOW, 0); }
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_WITH, 0); }
	public KW_WITHIN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_WITHIN, 0); }
	public KW_WITHOUT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_WITHOUT, 0); }
	public KW_YEAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_YEAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_reservedKeywords; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterReservedKeywords) {
			listener.enterReservedKeywords(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitReservedKeywords) {
			listener.exitReservedKeywords(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitReservedKeywords) {
			return visitor.visitReservedKeywords(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonReservedKeywordsContext extends ParserRuleContext {
	public KW_ADD(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ADD, 0); }
	public KW_ADMIN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ADMIN, 0); }
	public KW_AFTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_AFTER, 0); }
	public KW_ANALYZE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ANALYZE, 0); }
	public KW_ASC(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ASC, 0); }
	public KW_BEFORE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_BEFORE, 0); }
	public KW_BYTES(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_BYTES, 0); }
	public KW_CASCADE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CASCADE, 0); }
	public KW_CATALOG(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CATALOG, 0); }
	public KW_CATALOGS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CATALOGS, 0); }
	public KW_CENTURY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CENTURY, 0); }
	public KW_CHAIN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CHAIN, 0); }
	public KW_CHANGELOG_MODE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CHANGELOG_MODE, 0); }
	public KW_CHARACTERS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CHARACTERS, 0); }
	public KW_COMMENT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_COMMENT, 0); }
	public KW_COMPACT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_COMPACT, 0); }
	public KW_COLUMNS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_COLUMNS, 0); }
	public KW_CONSTRAINTS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CONSTRAINTS, 0); }
	public KW_CONSTRUCTOR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CONSTRUCTOR, 0); }
	public KW_CUMULATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CUMULATE, 0); }
	public KW_DATA(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DATA, 0); }
	public KW_DATABASE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DATABASE, 0); }
	public KW_DATABASES(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DATABASES, 0); }
	public KW_DAYS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DAYS, 0); }
	public KW_DECADE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DECADE, 0); }
	public KW_DEFINED(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DEFINED, 0); }
	public KW_DESC(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DESC, 0); }
	public KW_DESCRIPTOR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DESCRIPTOR, 0); }
	public KW_DIV(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DIV, 0); }
	public KW_ENCODING(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ENCODING, 0); }
	public KW_ENFORCED(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ENFORCED, 0); }
	public KW_ENGINE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ENGINE, 0); }
	public KW_ERROR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ERROR, 0); }
	public KW_ESTIMATED_COST(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ESTIMATED_COST, 0); }
	public KW_EXCEPTION(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_EXCEPTION, 0); }
	public KW_EXCLUDE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_EXCLUDE, 0); }
	public KW_EXCLUDING(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_EXCLUDING, 0); }
	public KW_EXTENDED(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_EXTENDED, 0); }
	public KW_FILE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FILE, 0); }
	public KW_FINAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FINAL, 0); }
	public KW_FIRST(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FIRST, 0); }
	public KW_FOLLOWING(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FOLLOWING, 0); }
	public KW_FORMAT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FORMAT, 0); }
	public KW_FORTRAN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FORTRAN, 0); }
	public KW_FOUND(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FOUND, 0); }
	public KW_FRAC_SECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FRAC_SECOND, 0); }
	public KW_FUNCTIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FUNCTIONS, 0); }
	public KW_GENERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_GENERAL, 0); }
	public KW_GENERATED(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_GENERATED, 0); }
	public KW_GO(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_GO, 0); }
	public KW_GOTO(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_GOTO, 0); }
	public KW_GRANTED(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_GRANTED, 0); }
	public KW_HOP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_HOP, 0); }
	public KW_HOURS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_HOURS, 0); }
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_IF, 0); }
	public KW_IGNORE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_IGNORE, 0); }
	public KW_INCREMENT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_INCREMENT, 0); }
	public KW_INPUT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_INPUT, 0); }
	public KW_INVOKER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_INVOKER, 0); }
	public KW_JAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_JAR, 0); }
	public KW_JARS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_JARS, 0); }
	public KW_JAVA(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_JAVA, 0); }
	public KW_JSON(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_JSON, 0); }
	public KW_JSON_EXECUTION_PLAN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_JSON_EXECUTION_PLAN, 0); }
	public KW_KEY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_KEY, 0); }
	public KW_KEY_MEMBER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_KEY_MEMBER, 0); }
	public KW_KEY_TYPE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_KEY_TYPE, 0); }
	public KW_LABEL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LABEL, 0); }
	public KW_LAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LAST, 0); }
	public KW_LENGTH(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LENGTH, 0); }
	public KW_LEVEL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LEVEL, 0); }
	public KW_LOAD(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LOAD, 0); }
	public KW_MAP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MAP, 0); }
	public KW_MICROSECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MICROSECOND, 0); }
	public KW_MILLENNIUM(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MILLENNIUM, 0); }
	public KW_MILLISECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MILLISECOND, 0); }
	public KW_MINUTES(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MINUTES, 0); }
	public KW_MINVALUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MINVALUE, 0); }
	public KW_MODIFY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MODIFY, 0); }
	public KW_MODULES(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MODULES, 0); }
	public KW_MONTHS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MONTHS, 0); }
	public KW_NANOSECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NANOSECOND, 0); }
	public KW_NULLS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NULLS, 0); }
	public KW_NUMBER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NUMBER, 0); }
	public KW_OPTION(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_OPTION, 0); }
	public KW_OPTIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_OPTIONS, 0); }
	public KW_ORDERING(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ORDERING, 0); }
	public KW_OUTPUT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_OUTPUT, 0); }
	public KW_OVERWRITE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_OVERWRITE, 0); }
	public KW_OVERWRITING(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_OVERWRITING, 0); }
	public KW_PARTITIONED(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PARTITIONED, 0); }
	public KW_PARTITIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PARTITIONS, 0); }
	public KW_PASSING(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PASSING, 0); }
	public KW_PAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PAST, 0); }
	public KW_PATH(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PATH, 0); }
	public KW_PLACING(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PLACING, 0); }
	public KW_PLAN(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PLAN, 0); }
	public KW_PRECEDING(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PRECEDING, 0); }
	public KW_PRESERVE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PRESERVE, 0); }
	public KW_PRIOR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PRIOR, 0); }
	public KW_PRIVILEGES(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PRIVILEGES, 0); }
	public KW_PUBLIC(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PUBLIC, 0); }
	public KW_PYTHON(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PYTHON, 0); }
	public KW_PYTHON_FILES(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PYTHON_FILES, 0); }
	public KW_PYTHON_REQUIREMENTS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PYTHON_REQUIREMENTS, 0); }
	public KW_PYTHON_DEPENDENCIES(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PYTHON_DEPENDENCIES, 0); }
	public KW_PYTHON_JAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PYTHON_JAR, 0); }
	public KW_PYTHON_ARCHIVES(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PYTHON_ARCHIVES, 0); }
	public KW_PYTHON_PARAMETER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PYTHON_PARAMETER, 0); }
	public KW_QUARTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_QUARTER, 0); }
	public KW_RAW(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_RAW, 0); }
	public KW_READ(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_READ, 0); }
	public KW_RELATIVE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_RELATIVE, 0); }
	public KW_REMOVE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_REMOVE, 0); }
	public KW_RENAME(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_RENAME, 0); }
	public KW_REPLACE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_REPLACE, 0); }
	public KW_RESPECT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_RESPECT, 0); }
	public KW_RESTART(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_RESTART, 0); }
	public KW_RESTRICT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_RESTRICT, 0); }
	public KW_ROLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ROLE, 0); }
	public KW_ROW_COUNT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ROW_COUNT, 0); }
	public KW_SCALA(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SCALA, 0); }
	public KW_SCALAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SCALAR, 0); }
	public KW_SCALE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SCALE, 0); }
	public KW_SCHEMA(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SCHEMA, 0); }
	public KW_SECONDS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SECONDS, 0); }
	public KW_SECTION(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SECTION, 0); }
	public KW_SECURITY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SECURITY, 0); }
	public KW_SELF(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SELF, 0); }
	public KW_SERVER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SERVER, 0); }
	public KW_SERVER_NAME(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SERVER_NAME, 0); }
	public KW_SESSION(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SESSION, 0); }
	public KW_SETS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SETS, 0); }
	public KW_SIMPLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SIMPLE, 0); }
	public KW_SIZE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SIZE, 0); }
	public KW_SLIDE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SLIDE, 0); }
	public KW_SOURCE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SOURCE, 0); }
	public KW_SPACE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SPACE, 0); }
	public KW_STATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_STATE, 0); }
	public KW_STATEMENT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_STATEMENT, 0); }
	public KW_STEP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_STEP, 0); }
	public KW_STRING(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_STRING, 0); }
	public KW_STRUCTURE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_STRUCTURE, 0); }
	public KW_STYLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_STYLE, 0); }
	public KW_TABLES(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TABLES, 0); }
	public KW_TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TEMPORARY, 0); }
	public KW_TIMECOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TIMECOL, 0); }
	public KW_TIMESTAMP_LTZ(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TIMESTAMP_LTZ, 0); }
	public KW_TIMESTAMPADD(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TIMESTAMPADD, 0); }
	public KW_TIMESTAMPDIFF(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TIMESTAMPDIFF, 0); }
	public KW_TRANSFORM(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TRANSFORM, 0); }
	public KW_TUMBLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TUMBLE, 0); }
	public KW_TYPE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TYPE, 0); }
	public KW_UNDER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_UNDER, 0); }
	public KW_UNLOAD(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_UNLOAD, 0); }
	public KW_USAGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_USAGE, 0); }
	public KW_USE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_USE, 0); }
	public KW_UTF16(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_UTF16, 0); }
	public KW_UTF32(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_UTF32, 0); }
	public KW_UTF8(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_UTF8, 0); }
	public KW_VERSION(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_VERSION, 0); }
	public KW_VIEW(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_VIEW, 0); }
	public KW_VIEWS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_VIEWS, 0); }
	public KW_VIRTUAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_VIRTUAL, 0); }
	public KW_WATERMARK(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_WATERMARK, 0); }
	public KW_WATERMARKS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_WATERMARKS, 0); }
	public KW_WEEK(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_WEEK, 0); }
	public KW_WORK(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_WORK, 0); }
	public KW_WRAPPER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_WRAPPER, 0); }
	public KW_YEARS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_YEARS, 0); }
	public KW_ZONE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ZONE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_nonReservedKeywords; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterNonReservedKeywords) {
			listener.enterNonReservedKeywords(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitNonReservedKeywords) {
			listener.exitNonReservedKeywords(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitNonReservedKeywords) {
			return visitor.visitNonReservedKeywords(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


