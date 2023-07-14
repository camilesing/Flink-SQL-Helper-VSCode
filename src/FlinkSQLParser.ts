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
	public static readonly T__0 = 1;
	public static readonly SPACE = 2;
	public static readonly COMMENT_INPUT = 3;
	public static readonly LINE_COMMENT = 4;
	public static readonly KW_ADD = 5;
	public static readonly KW_ADMIN = 6;
	public static readonly KW_AFTER = 7;
	public static readonly KW_ANALYZE = 8;
	public static readonly KW_ASC = 9;
	public static readonly KW_BEFORE = 10;
	public static readonly KW_BYTES = 11;
	public static readonly KW_CASCADE = 12;
	public static readonly KW_CATALOG = 13;
	public static readonly KW_CATALOGS = 14;
	public static readonly KW_CENTURY = 15;
	public static readonly KW_CHAIN = 16;
	public static readonly KW_CHANGELOG_MODE = 17;
	public static readonly KW_CHARACTERS = 18;
	public static readonly KW_COMMENT = 19;
	public static readonly KW_COMPACT = 20;
	public static readonly KW_COLUMNS = 21;
	public static readonly KW_CONSTRAINTS = 22;
	public static readonly KW_CONSTRUCTOR = 23;
	public static readonly KW_CUMULATE = 24;
	public static readonly KW_DATA = 25;
	public static readonly KW_DATABASE = 26;
	public static readonly KW_DATABASES = 27;
	public static readonly KW_DAYS = 28;
	public static readonly KW_DECADE = 29;
	public static readonly KW_DEFINED = 30;
	public static readonly KW_DESC = 31;
	public static readonly KW_DESCRIPTOR = 32;
	public static readonly KW_DIV = 33;
	public static readonly KW_ENCODING = 34;
	public static readonly KW_ENFORCED = 35;
	public static readonly KW_ENGINE = 36;
	public static readonly KW_EPOCH = 37;
	public static readonly KW_ERROR = 38;
	public static readonly KW_ESTIMATED_COST = 39;
	public static readonly KW_EXCEPTION = 40;
	public static readonly KW_EXCLUDE = 41;
	public static readonly KW_EXCLUDING = 42;
	public static readonly KW_EXTENDED = 43;
	public static readonly KW_FILTER = 44;
	public static readonly KW_FILE = 45;
	public static readonly KW_FINAL = 46;
	public static readonly KW_FIRST = 47;
	public static readonly KW_FOLLOWING = 48;
	public static readonly KW_FORMAT = 49;
	public static readonly KW_FORTRAN = 50;
	public static readonly KW_FOUND = 51;
	public static readonly KW_FRAC_SECOND = 52;
	public static readonly KW_FUNCTIONS = 53;
	public static readonly KW_GENERAL = 54;
	public static readonly KW_GENERATED = 55;
	public static readonly KW_GO = 56;
	public static readonly KW_GOTO = 57;
	public static readonly KW_GRANTED = 58;
	public static readonly KW_HOP = 59;
	public static readonly KW_HOURS = 60;
	public static readonly KW_IF = 61;
	public static readonly KW_IGNORE = 62;
	public static readonly KW_INCREMENT = 63;
	public static readonly KW_INPUT = 64;
	public static readonly KW_INVOKER = 65;
	public static readonly KW_JAR = 66;
	public static readonly KW_JARS = 67;
	public static readonly KW_JAVA = 68;
	public static readonly KW_JSON = 69;
	public static readonly KW_JSON_EXECUTION_PLAN = 70;
	public static readonly KW_KEY = 71;
	public static readonly KW_KEY_MEMBER = 72;
	public static readonly KW_KEY_TYPE = 73;
	public static readonly KW_LABEL = 74;
	public static readonly KW_LAST = 75;
	public static readonly KW_LENGTH = 76;
	public static readonly KW_LEVEL = 77;
	public static readonly KW_LOAD = 78;
	public static readonly KW_MAP = 79;
	public static readonly KW_MICROSECOND = 80;
	public static readonly KW_MILLENNIUM = 81;
	public static readonly KW_MILLISECOND = 82;
	public static readonly KW_MINUTES = 83;
	public static readonly KW_MINVALUE = 84;
	public static readonly KW_MODIFY = 85;
	public static readonly KW_MODULES = 86;
	public static readonly KW_MONTHS = 87;
	public static readonly KW_NANOSECOND = 88;
	public static readonly KW_NULLS = 89;
	public static readonly KW_NUMBER = 90;
	public static readonly KW_OPTION = 91;
	public static readonly KW_OPTIONS = 92;
	public static readonly KW_ORDERING = 93;
	public static readonly KW_OUTPUT = 94;
	public static readonly KW_OVERWRITE = 95;
	public static readonly KW_OVERWRITING = 96;
	public static readonly KW_PARTITIONED = 97;
	public static readonly KW_PARTITIONS = 98;
	public static readonly KW_PASSING = 99;
	public static readonly KW_PAST = 100;
	public static readonly KW_PATH = 101;
	public static readonly KW_PLACING = 102;
	public static readonly KW_PLAN = 103;
	public static readonly KW_PRECEDING = 104;
	public static readonly KW_PRESERVE = 105;
	public static readonly KW_PRIOR = 106;
	public static readonly KW_PRIVILEGES = 107;
	public static readonly KW_PUBLIC = 108;
	public static readonly KW_PYTHON = 109;
	public static readonly KW_PYTHON_FILES = 110;
	public static readonly KW_PYTHON_REQUIREMENTS = 111;
	public static readonly KW_PYTHON_DEPENDENCIES = 112;
	public static readonly KW_PYTHON_JAR = 113;
	public static readonly KW_PYTHON_ARCHIVES = 114;
	public static readonly KW_PYTHON_PARAMETER = 115;
	public static readonly KW_QUARTER = 116;
	public static readonly KW_RAW = 117;
	public static readonly KW_READ = 118;
	public static readonly KW_RELATIVE = 119;
	public static readonly KW_REMOVE = 120;
	public static readonly KW_RENAME = 121;
	public static readonly KW_REPLACE = 122;
	public static readonly KW_RESPECT = 123;
	public static readonly KW_RESTART = 124;
	public static readonly KW_RESTRICT = 125;
	public static readonly KW_ROLE = 126;
	public static readonly KW_ROW_COUNT = 127;
	public static readonly KW_SCALA = 128;
	public static readonly KW_SCALAR = 129;
	public static readonly KW_SCALE = 130;
	public static readonly KW_SCHEMA = 131;
	public static readonly KW_SECONDS = 132;
	public static readonly KW_SECTION = 133;
	public static readonly KW_SECURITY = 134;
	public static readonly KW_SELF = 135;
	public static readonly KW_SERVER = 136;
	public static readonly KW_SERVER_NAME = 137;
	public static readonly KW_SESSION = 138;
	public static readonly KW_SETS = 139;
	public static readonly KW_SIMPLE = 140;
	public static readonly KW_SIZE = 141;
	public static readonly KW_SLIDE = 142;
	public static readonly KW_SOURCE = 143;
	public static readonly KW_SPACE = 144;
	public static readonly KW_STATE = 145;
	public static readonly KW_STATEMENT = 146;
	public static readonly KW_STEP = 147;
	public static readonly KW_STRING = 148;
	public static readonly KW_STRUCTURE = 149;
	public static readonly KW_STYLE = 150;
	public static readonly KW_TABLES = 151;
	public static readonly KW_TEMPORARY = 152;
	public static readonly KW_TIMECOL = 153;
	public static readonly KW_FLOOR = 154;
	public static readonly KW_TIMESTAMP_LTZ = 155;
	public static readonly KW_TIMESTAMPADD = 156;
	public static readonly KW_TIMESTAMPDIFF = 157;
	public static readonly KW_TRANSFORM = 158;
	public static readonly KW_TUMBLE = 159;
	public static readonly KW_TYPE = 160;
	public static readonly KW_UNDER = 161;
	public static readonly KW_UNLOAD = 162;
	public static readonly KW_USAGE = 163;
	public static readonly KW_USE = 164;
	public static readonly KW_UTF16 = 165;
	public static readonly KW_UTF32 = 166;
	public static readonly KW_UTF8 = 167;
	public static readonly KW_VERSION = 168;
	public static readonly KW_VIEW = 169;
	public static readonly KW_VIEWS = 170;
	public static readonly KW_VIRTUAL = 171;
	public static readonly KW_WATERMARK = 172;
	public static readonly KW_WATERMARKS = 173;
	public static readonly KW_WEEK = 174;
	public static readonly KW_WEEKS = 175;
	public static readonly KW_WORK = 176;
	public static readonly KW_WRAPPER = 177;
	public static readonly KW_YEARS = 178;
	public static readonly KW_ZONE = 179;
	public static readonly KW_ABS = 180;
	public static readonly KW_ALL = 181;
	public static readonly KW_ALLOW = 182;
	public static readonly KW_ALTER = 183;
	public static readonly KW_AND = 184;
	public static readonly KW_ANY = 185;
	public static readonly KW_ARE = 186;
	public static readonly KW_ARRAY = 187;
	public static readonly KW_AS = 188;
	public static readonly KW_ASYMMETRIC = 189;
	public static readonly KW_AT = 190;
	public static readonly KW_AVG = 191;
	public static readonly KW_BEGIN = 192;
	public static readonly KW_BETWEEN = 193;
	public static readonly KW_BIGINT = 194;
	public static readonly KW_BINARY = 195;
	public static readonly KW_BIT = 196;
	public static readonly KW_BLOB = 197;
	public static readonly KW_BOOLEAN = 198;
	public static readonly KW_BOTH = 199;
	public static readonly KW_BY = 200;
	public static readonly KW_CALL = 201;
	public static readonly KW_CALLED = 202;
	public static readonly KW_CASCADED = 203;
	public static readonly KW_CASE = 204;
	public static readonly KW_CAST = 205;
	public static readonly KW_CEIL = 206;
	public static readonly KW_CHAR = 207;
	public static readonly KW_CHARACTER = 208;
	public static readonly KW_CHECK = 209;
	public static readonly KW_CLOB = 210;
	public static readonly KW_CLOSE = 211;
	public static readonly KW_COALESCE = 212;
	public static readonly KW_COLLATE = 213;
	public static readonly KW_COLLECT = 214;
	public static readonly KW_COLUMN = 215;
	public static readonly KW_COMMIT = 216;
	public static readonly KW_CONNECT = 217;
	public static readonly KW_CONSTRAINT = 218;
	public static readonly KW_CONTAINS = 219;
	public static readonly KW_CONVERT = 220;
	public static readonly KW_COUNT = 221;
	public static readonly KW_CREATE = 222;
	public static readonly KW_CROSS = 223;
	public static readonly KW_CUBE = 224;
	public static readonly KW_CURRENT = 225;
	public static readonly KW_CURSOR = 226;
	public static readonly KW_CYCLE = 227;
	public static readonly KW_DATE = 228;
	public static readonly KW_DATETIME = 229;
	public static readonly KW_DAY = 230;
	public static readonly KW_DEC = 231;
	public static readonly KW_DECIMAL = 232;
	public static readonly KW_DECLARE = 233;
	public static readonly KW_DEFAULT = 234;
	public static readonly KW_DEFINE = 235;
	public static readonly KW_DELETE = 236;
	public static readonly KW_DESCRIBE = 237;
	public static readonly KW_DISTINCT = 238;
	public static readonly KW_DOUBLE = 239;
	public static readonly KW_DROP = 240;
	public static readonly KW_EACH = 241;
	public static readonly KW_ELSE = 242;
	public static readonly KW_END = 243;
	public static readonly KW_EQUALS = 244;
	public static readonly KW_ESCAPE = 245;
	public static readonly KW_EXCEPT = 246;
	public static readonly KW_EXECUTE = 247;
	public static readonly KW_EXISTS = 248;
	public static readonly KW_EXPLAIN = 249;
	public static readonly KW_EXTERNAL = 250;
	public static readonly KW_EXTRACT = 251;
	public static readonly KW_FALSE = 252;
	public static readonly KW_FLOAT = 253;
	public static readonly KW_FOR = 254;
	public static readonly KW_FROM = 255;
	public static readonly KW_FULL = 256;
	public static readonly KW_FUNCTION = 257;
	public static readonly KW_GLOBAL = 258;
	public static readonly KW_GRANT = 259;
	public static readonly KW_GROUP = 260;
	public static readonly KW_GROUPING = 261;
	public static readonly KW_GROUPS = 262;
	public static readonly KW_HAVING = 263;
	public static readonly KW_HOUR = 264;
	public static readonly KW_IMPORT = 265;
	public static readonly KW_IN = 266;
	public static readonly KW_INCLUDING = 267;
	public static readonly KW_INNER = 268;
	public static readonly KW_INOUT = 269;
	public static readonly KW_INSERT = 270;
	public static readonly KW_INT = 271;
	public static readonly KW_INTEGER = 272;
	public static readonly KW_INTERSECT = 273;
	public static readonly KW_INTERVAL = 274;
	public static readonly KW_INTO = 275;
	public static readonly KW_IS = 276;
	public static readonly KW_JOIN = 277;
	public static readonly KW_LAG = 278;
	public static readonly KW_LANGUAGE = 279;
	public static readonly KW_LATERAL = 280;
	public static readonly KW_LEADING = 281;
	public static readonly KW_LEFT = 282;
	public static readonly KW_LIKE = 283;
	public static readonly KW_LIMIT = 284;
	public static readonly KW_LOCAL = 285;
	public static readonly KW_MATCH = 286;
	public static readonly KW_MATCH_RECOGNIZE = 287;
	public static readonly KW_MEASURES = 288;
	public static readonly KW_MERGE = 289;
	public static readonly KW_METADATA = 290;
	public static readonly KW_MINUS = 291;
	public static readonly KW_MINUTE = 292;
	public static readonly KW_MODIFIES = 293;
	public static readonly KW_MODULE = 294;
	public static readonly KW_MONTH = 295;
	public static readonly KW_MULTISET = 296;
	public static readonly KW_NATURAL = 297;
	public static readonly KW_NEXT = 298;
	public static readonly KW_NO = 299;
	public static readonly KW_NONE = 300;
	public static readonly KW_NOT = 301;
	public static readonly KW_NULL = 302;
	public static readonly KW_NUMERIC = 303;
	public static readonly KW_OF = 304;
	public static readonly KW_OFFSET = 305;
	public static readonly KW_ON = 306;
	public static readonly KW_ONE = 307;
	public static readonly KW_OR = 308;
	public static readonly KW_ORDER = 309;
	public static readonly KW_OUT = 310;
	public static readonly KW_OUTER = 311;
	public static readonly KW_OVER = 312;
	public static readonly KW_OVERLAY = 313;
	public static readonly KW_PARTITION = 314;
	public static readonly KW_PATTERN = 315;
	public static readonly KW_PER = 316;
	public static readonly KW_PERCENT = 317;
	public static readonly KW_PERIOD = 318;
	public static readonly KW_POSITION = 319;
	public static readonly KW_POWER = 320;
	public static readonly KW_PRIMARY = 321;
	public static readonly KW_RANGE = 322;
	public static readonly KW_RANK = 323;
	public static readonly KW_RESET = 324;
	public static readonly KW_REVOKE = 325;
	public static readonly KW_RIGHT = 326;
	public static readonly KW_RLIKE = 327;
	public static readonly KW_ROLLBACK = 328;
	public static readonly KW_ROLLUP = 329;
	public static readonly KW_ROW = 330;
	public static readonly KW_ROWS = 331;
	public static readonly KW_SECOND = 332;
	public static readonly KW_SELECT = 333;
	public static readonly KW_SET = 334;
	public static readonly KW_SHOW = 335;
	public static readonly KW_SIMILAR = 336;
	public static readonly KW_SKIP = 337;
	public static readonly KW_SMALLINT = 338;
	public static readonly KW_START = 339;
	public static readonly KW_STATIC = 340;
	public static readonly KW_SUBSTRING = 341;
	public static readonly KW_SUM = 342;
	public static readonly KW_SYMMETRIC = 343;
	public static readonly KW_SYSTEM = 344;
	public static readonly KW_SYSTEM_TIME = 345;
	public static readonly KW_SYSTEM_USER = 346;
	public static readonly KW_TABLE = 347;
	public static readonly KW_TABLESAMPLE = 348;
	public static readonly KW_THEN = 349;
	public static readonly KW_TIME = 350;
	public static readonly KW_TIMESTAMP = 351;
	public static readonly KW_TIMESTAMP_3 = 352;
	public static readonly KW_TIMESTAMP_6 = 353;
	public static readonly KW_TIMESTAMP_9 = 354;
	public static readonly KW_TINYINT = 355;
	public static readonly KW_TO = 356;
	public static readonly KW_TRAILING = 357;
	public static readonly KW_TRUE = 358;
	public static readonly KW_TRUNCATE = 359;
	public static readonly KW_UNION = 360;
	public static readonly KW_UNIQUE = 361;
	public static readonly KW_UNKNOWN = 362;
	public static readonly KW_UNNEST = 363;
	public static readonly KW_UPPER = 364;
	public static readonly KW_UPSERT = 365;
	public static readonly KW_USER = 366;
	public static readonly KW_USING = 367;
	public static readonly KW_VALUE = 368;
	public static readonly KW_VALUES = 369;
	public static readonly KW_VARBINARY = 370;
	public static readonly KW_VARCHAR = 371;
	public static readonly KW_WHEN = 372;
	public static readonly KW_WHERE = 373;
	public static readonly KW_WINDOW = 374;
	public static readonly KW_WITH = 375;
	public static readonly KW_WITHIN = 376;
	public static readonly KW_WITHOUT = 377;
	public static readonly KW_YEAR = 378;
	public static readonly EQUAL_SYMBOL = 379;
	public static readonly GREATER_SYMBOL = 380;
	public static readonly LESS_SYMBOL = 381;
	public static readonly EXCLAMATION_SYMBOL = 382;
	public static readonly BIT_NOT_OP = 383;
	public static readonly BIT_OR_OP = 384;
	public static readonly BIT_AND_OP = 385;
	public static readonly BIT_XOR_OP = 386;
	public static readonly DOT = 387;
	public static readonly LS_BRACKET = 388;
	public static readonly RS_BRACKET = 389;
	public static readonly LR_BRACKET = 390;
	public static readonly RR_BRACKET = 391;
	public static readonly LB_BRACKET = 392;
	public static readonly RB_BRACKET = 393;
	public static readonly COMMA = 394;
	public static readonly SEMICOLON = 395;
	public static readonly AT_SIGN = 396;
	public static readonly SINGLE_QUOTE_SYMB = 397;
	public static readonly DOUBLE_QUOTE_SYMB = 398;
	public static readonly REVERSE_QUOTE_SYMB = 399;
	public static readonly COLON_SYMB = 400;
	public static readonly ASTERISK_SIGN = 401;
	public static readonly UNDERLINE_SIGN = 402;
	public static readonly HYPNEN_SIGN = 403;
	public static readonly ADD_SIGN = 404;
	public static readonly PENCENT_SIGN = 405;
	public static readonly DOUBLE_VERTICAL_SIGN = 406;
	public static readonly DOUBLE_HYPNEN_SIGN = 407;
	public static readonly SLASH_SIGN = 408;
	public static readonly QUESTION_MARK_SIGN = 409;
	public static readonly DOUBLE_RIGHT_ARROW = 410;
	public static readonly STRING_LITERAL = 411;
	public static readonly DIG_LITERAL = 412;
	public static readonly REAL_LITERAL = 413;
	public static readonly BIT_STRING = 414;
	public static readonly ID_LITERAL = 415;
	public static readonly SLASH_TEXT = 416;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_sqlStatements = 2;
	public static readonly RULE_comment = 3;
	public static readonly RULE_sqlStatement = 4;
	public static readonly RULE_emptyStatement = 5;
	public static readonly RULE_ddlStatement = 6;
	public static readonly RULE_dmlStatement = 7;
	public static readonly RULE_describeStatement = 8;
	public static readonly RULE_explainStatement = 9;
	public static readonly RULE_explainDetails = 10;
	public static readonly RULE_explainDetail = 11;
	public static readonly RULE_useStatement = 12;
	public static readonly RULE_useModuleStatement = 13;
	public static readonly RULE_showStatememt = 14;
	public static readonly RULE_loadStatement = 15;
	public static readonly RULE_unloadStatememt = 16;
	public static readonly RULE_setStatememt = 17;
	public static readonly RULE_resetStatememt = 18;
	public static readonly RULE_jarStatememt = 19;
	public static readonly RULE_dtFilePath = 20;
	public static readonly RULE_createTable = 21;
	public static readonly RULE_simpleCreateTable = 22;
	public static readonly RULE_createTableAsSelect = 23;
	public static readonly RULE_columnOptionDefinition = 24;
	public static readonly RULE_physicalColumnDefinition = 25;
	public static readonly RULE_columnName = 26;
	public static readonly RULE_columnNameList = 27;
	public static readonly RULE_columnType = 28;
	public static readonly RULE_lengthOneDimension = 29;
	public static readonly RULE_lengthTwoOptionalDimension = 30;
	public static readonly RULE_lengthTwoStringDimension = 31;
	public static readonly RULE_lengthOneTypeDimension = 32;
	public static readonly RULE_mapTypeDimension = 33;
	public static readonly RULE_rowTypeDimension = 34;
	public static readonly RULE_columnConstraint = 35;
	public static readonly RULE_commentSpec = 36;
	public static readonly RULE_metadataColumnDefinition = 37;
	public static readonly RULE_metadataKey = 38;
	public static readonly RULE_computedColumnDefinition = 39;
	public static readonly RULE_computedColumnExpression = 40;
	public static readonly RULE_watermarkDefinition = 41;
	public static readonly RULE_tableConstraint = 42;
	public static readonly RULE_constraintName = 43;
	public static readonly RULE_selfDefinitionClause = 44;
	public static readonly RULE_partitionDefinition = 45;
	public static readonly RULE_transformList = 46;
	public static readonly RULE_transform = 47;
	public static readonly RULE_transformArgument = 48;
	public static readonly RULE_likeDefinition = 49;
	public static readonly RULE_likeOption = 50;
	public static readonly RULE_createCatalog = 51;
	public static readonly RULE_createDatabase = 52;
	public static readonly RULE_createView = 53;
	public static readonly RULE_createFunction = 54;
	public static readonly RULE_usingClause = 55;
	public static readonly RULE_jarFileName = 56;
	public static readonly RULE_alterTable = 57;
	public static readonly RULE_renameDefinition = 58;
	public static readonly RULE_setKeyValueDefinition = 59;
	public static readonly RULE_addConstraint = 60;
	public static readonly RULE_dropConstraint = 61;
	public static readonly RULE_addUnique = 62;
	public static readonly RULE_notForced = 63;
	public static readonly RULE_alertView = 64;
	public static readonly RULE_alterDatabase = 65;
	public static readonly RULE_alterFunction = 66;
	public static readonly RULE_dropCatalog = 67;
	public static readonly RULE_dropTable = 68;
	public static readonly RULE_dropDatabase = 69;
	public static readonly RULE_dropView = 70;
	public static readonly RULE_dropFunction = 71;
	public static readonly RULE_insertStatement = 72;
	public static readonly RULE_insertSimpleStatement = 73;
	public static readonly RULE_insertPartitionDefinition = 74;
	public static readonly RULE_valuesDefinition = 75;
	public static readonly RULE_valuesRowDefinition = 76;
	public static readonly RULE_insertMulStatementCompatibility = 77;
	public static readonly RULE_insertMulStatement = 78;
	public static readonly RULE_queryStatement = 79;
	public static readonly RULE_valuesCaluse = 80;
	public static readonly RULE_withClause = 81;
	public static readonly RULE_withItem = 82;
	public static readonly RULE_withItemName = 83;
	public static readonly RULE_selectStatement = 84;
	public static readonly RULE_selectClause = 85;
	public static readonly RULE_projectItemDefinition = 86;
	public static readonly RULE_overWindowItem = 87;
	public static readonly RULE_fromClause = 88;
	public static readonly RULE_tableExpression = 89;
	public static readonly RULE_tableReference = 90;
	public static readonly RULE_tablePrimary = 91;
	public static readonly RULE_systemTimePeriod = 92;
	public static readonly RULE_dateTimeExpression = 93;
	public static readonly RULE_inlineDataValueClause = 94;
	public static readonly RULE_windoTVFClause = 95;
	public static readonly RULE_windowTVFExression = 96;
	public static readonly RULE_windoTVFName = 97;
	public static readonly RULE_windowTVFParam = 98;
	public static readonly RULE_timeIntervalParamName = 99;
	public static readonly RULE_columnDescriptor = 100;
	public static readonly RULE_joinCondition = 101;
	public static readonly RULE_whereClause = 102;
	public static readonly RULE_groupByClause = 103;
	public static readonly RULE_groupItemDefinition = 104;
	public static readonly RULE_groupingSets = 105;
	public static readonly RULE_groupingSetsNotaionName = 106;
	public static readonly RULE_groupWindowFunction = 107;
	public static readonly RULE_groupWindowFunctionName = 108;
	public static readonly RULE_timeAttrColumn = 109;
	public static readonly RULE_havingClause = 110;
	public static readonly RULE_windowClause = 111;
	public static readonly RULE_namedWindow = 112;
	public static readonly RULE_windowSpec = 113;
	public static readonly RULE_matchRecognizeClause = 114;
	public static readonly RULE_orderByCaluse = 115;
	public static readonly RULE_orderItemDefition = 116;
	public static readonly RULE_limitClause = 117;
	public static readonly RULE_partitionByClause = 118;
	public static readonly RULE_quantifiers = 119;
	public static readonly RULE_measuresClause = 120;
	public static readonly RULE_patternDefination = 121;
	public static readonly RULE_patternVariable = 122;
	public static readonly RULE_outputMode = 123;
	public static readonly RULE_afterMatchStrategy = 124;
	public static readonly RULE_patternVariablesDefination = 125;
	public static readonly RULE_windowFrame = 126;
	public static readonly RULE_frameBound = 127;
	public static readonly RULE_withinClause = 128;
	public static readonly RULE_expression = 129;
	public static readonly RULE_booleanExpression = 130;
	public static readonly RULE_predicate = 131;
	public static readonly RULE_likePredicate = 132;
	public static readonly RULE_valueExpression = 133;
	public static readonly RULE_primaryExpression = 134;
	public static readonly RULE_complexDataTypeExpression = 135;
	public static readonly RULE_arrayExpression = 136;
	public static readonly RULE_rowExpression = 137;
	public static readonly RULE_mapExpression = 138;
	public static readonly RULE_rowFieldExpression = 139;
	public static readonly RULE_dataTypeExpression = 140;
	public static readonly RULE_functionName = 141;
	public static readonly RULE_functionParam = 142;
	public static readonly RULE_filterClause = 143;
	public static readonly RULE_dereferenceDefinition = 144;
	public static readonly RULE_correlationName = 145;
	public static readonly RULE_qualifiedName = 146;
	public static readonly RULE_timeIntervalExpression = 147;
	public static readonly RULE_errorCapturingMultiUnitsInterval = 148;
	public static readonly RULE_multiUnitsInterval = 149;
	public static readonly RULE_errorCapturingUnitToUnitInterval = 150;
	public static readonly RULE_unitToUnitInterval = 151;
	public static readonly RULE_intervalValue = 152;
	public static readonly RULE_columnAlias = 153;
	public static readonly RULE_tableAlias = 154;
	public static readonly RULE_errorCapturingIdentifier = 155;
	public static readonly RULE_errorCapturingIdentifierExtra = 156;
	public static readonly RULE_identifierList = 157;
	public static readonly RULE_identifierSeq = 158;
	public static readonly RULE_identifier = 159;
	public static readonly RULE_refVar = 160;
	public static readonly RULE_unquotedIdentifier = 161;
	public static readonly RULE_quotedIdentifier = 162;
	public static readonly RULE_whenClause = 163;
	public static readonly RULE_catalogPath = 164;
	public static readonly RULE_databasePath = 165;
	public static readonly RULE_databasePathCreate = 166;
	public static readonly RULE_tablePathCreate = 167;
	public static readonly RULE_tablePath = 168;
	public static readonly RULE_uid = 169;
	public static readonly RULE_withOption = 170;
	public static readonly RULE_ifNotExists = 171;
	public static readonly RULE_ifExists = 172;
	public static readonly RULE_tablePropertyList = 173;
	public static readonly RULE_tableProperty = 174;
	public static readonly RULE_tablePropertyKey = 175;
	public static readonly RULE_tablePropertyValue = 176;
	public static readonly RULE_logicalOperator = 177;
	public static readonly RULE_comparisonOperator = 178;
	public static readonly RULE_bitOperator = 179;
	public static readonly RULE_mathOperator = 180;
	public static readonly RULE_unaryOperator = 181;
	public static readonly RULE_constant = 182;
	public static readonly RULE_timePointLiteral = 183;
	public static readonly RULE_stringLiteral = 184;
	public static readonly RULE_decimalLiteral = 185;
	public static readonly RULE_booleanLiteral = 186;
	public static readonly RULE_setQuantifier = 187;
	public static readonly RULE_timePointUnit = 188;
	public static readonly RULE_timeIntervalUnit = 189;
	public static readonly RULE_reservedKeywordsUsedAsFuncParam = 190;
	public static readonly RULE_reservedKeywordsUsedAsFuncName = 191;
	public static readonly RULE_reservedKeywords = 192;
	public static readonly RULE_nonReservedKeywords = 193;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "sqlStatements", "comment", "sqlStatement", "emptyStatement", 
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
		"complexDataTypeExpression", "arrayExpression", "rowExpression", "mapExpression", 
		"rowFieldExpression", "dataTypeExpression", "functionName", "functionParam", 
		"filterClause", "dereferenceDefinition", "correlationName", "qualifiedName", 
		"timeIntervalExpression", "errorCapturingMultiUnitsInterval", "multiUnitsInterval", 
		"errorCapturingUnitToUnitInterval", "unitToUnitInterval", "intervalValue", 
		"columnAlias", "tableAlias", "errorCapturingIdentifier", "errorCapturingIdentifierExtra", 
		"identifierList", "identifierSeq", "identifier", "refVar", "unquotedIdentifier", 
		"quotedIdentifier", "whenClause", "catalogPath", "databasePath", "databasePathCreate", 
		"tablePathCreate", "tablePath", "uid", "withOption", "ifNotExists", "ifExists", 
		"tablePropertyList", "tableProperty", "tablePropertyKey", "tablePropertyValue", 
		"logicalOperator", "comparisonOperator", "bitOperator", "mathOperator", 
		"unaryOperator", "constant", "timePointLiteral", "stringLiteral", "decimalLiteral", 
		"booleanLiteral", "setQuantifier", "timePointUnit", "timeIntervalUnit", 
		"reservedKeywordsUsedAsFuncParam", "reservedKeywordsUsedAsFuncName", "reservedKeywords", 
		"nonReservedKeywords",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'$'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'='", "'>'", "'<'", "'!'", "'~'", "'|'", "'&'", "'^'", "'.'", 
		"'['", "']'", "'('", "')'", "'{'", "'}'", "','", "';'", "'@'", "'''", 
		"'\"'", "'`'", "':'", "'*'", "'_'", "'-'", "'+'", "'%'", "'||'", "'--'", 
		"'/'", "'?'", "'=>'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "SPACE", "COMMENT_INPUT", "LINE_COMMENT", "KW_ADD", 
		"KW_ADMIN", "KW_AFTER", "KW_ANALYZE", "KW_ASC", "KW_BEFORE", "KW_BYTES", 
		"KW_CASCADE", "KW_CATALOG", "KW_CATALOGS", "KW_CENTURY", "KW_CHAIN", "KW_CHANGELOG_MODE", 
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
		"KW_LABEL", "KW_LAST", "KW_LENGTH", "KW_LEVEL", "KW_LOAD", "KW_MAP", "KW_MICROSECOND", 
		"KW_MILLENNIUM", "KW_MILLISECOND", "KW_MINUTES", "KW_MINVALUE", "KW_MODIFY", 
		"KW_MODULES", "KW_MONTHS", "KW_NANOSECOND", "KW_NULLS", "KW_NUMBER", "KW_OPTION", 
		"KW_OPTIONS", "KW_ORDERING", "KW_OUTPUT", "KW_OVERWRITE", "KW_OVERWRITING", 
		"KW_PARTITIONED", "KW_PARTITIONS", "KW_PASSING", "KW_PAST", "KW_PATH", 
		"KW_PLACING", "KW_PLAN", "KW_PRECEDING", "KW_PRESERVE", "KW_PRIOR", "KW_PRIVILEGES", 
		"KW_PUBLIC", "KW_PYTHON", "KW_PYTHON_FILES", "KW_PYTHON_REQUIREMENTS", 
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
			this.state = 388;
			this.statement();
			this.state = 389;
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
			this.state = 391;
			this.sqlStatements();
			this.state = 392;
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
			this.state = 399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSQLParser.COMMENT_INPUT) | (1 << FlinkSQLParser.LINE_COMMENT) | (1 << FlinkSQLParser.KW_ADD) | (1 << FlinkSQLParser.KW_DESC))) !== 0) || _la === FlinkSQLParser.KW_LOAD || _la === FlinkSQLParser.KW_REMOVE || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (FlinkSQLParser.KW_UNLOAD - 162)) | (1 << (FlinkSQLParser.KW_USE - 162)) | (1 << (FlinkSQLParser.KW_ALTER - 162)) | (1 << (FlinkSQLParser.KW_BEGIN - 162)))) !== 0) || ((((_la - 222)) & ~0x1F) === 0 && ((1 << (_la - 222)) & ((1 << (FlinkSQLParser.KW_CREATE - 222)) | (1 << (FlinkSQLParser.KW_DESCRIBE - 222)) | (1 << (FlinkSQLParser.KW_DROP - 222)) | (1 << (FlinkSQLParser.KW_EXECUTE - 222)) | (1 << (FlinkSQLParser.KW_EXPLAIN - 222)))) !== 0) || _la === FlinkSQLParser.KW_INSERT || ((((_la - 324)) & ~0x1F) === 0 && ((1 << (_la - 324)) & ((1 << (FlinkSQLParser.KW_RESET - 324)) | (1 << (FlinkSQLParser.KW_SELECT - 324)) | (1 << (FlinkSQLParser.KW_SET - 324)) | (1 << (FlinkSQLParser.KW_SHOW - 324)))) !== 0) || ((((_la - 369)) & ~0x1F) === 0 && ((1 << (_la - 369)) & ((1 << (FlinkSQLParser.KW_VALUES - 369)) | (1 << (FlinkSQLParser.KW_WITH - 369)) | (1 << (FlinkSQLParser.LR_BRACKET - 369)) | (1 << (FlinkSQLParser.SEMICOLON - 369)))) !== 0)) {
				{
				this.state = 397;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case FlinkSQLParser.COMMENT_INPUT:
				case FlinkSQLParser.LINE_COMMENT:
					{
					this.state = 394;
					this.comment();
					}
					break;
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
					this.state = 395;
					this.sqlStatement();
					}
					break;
				case FlinkSQLParser.SEMICOLON:
					{
					this.state = 396;
					this.emptyStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 401;
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
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FlinkSQLParser.RULE_comment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 402;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.COMMENT_INPUT || _la === FlinkSQLParser.LINE_COMMENT)) {
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
	public sqlStatement(): SqlStatementContext {
		let _localctx: SqlStatementContext = new SqlStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FlinkSQLParser.RULE_sqlStatement);
		try {
			this.state = 437;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_ALTER:
			case FlinkSQLParser.KW_CREATE:
			case FlinkSQLParser.KW_DROP:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 404;
				this.ddlStatement();
				this.state = 405;
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
				this.state = 407;
				this.dmlStatement();
				this.state = 408;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_DESC:
			case FlinkSQLParser.KW_DESCRIBE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 410;
				this.describeStatement();
				this.state = 411;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_EXPLAIN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 413;
				this.explainStatement();
				this.state = 414;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_USE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 416;
				this.useStatement();
				this.state = 417;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_SHOW:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 419;
				this.showStatememt();
				this.state = 420;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_LOAD:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 422;
				this.loadStatement();
				this.state = 423;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_UNLOAD:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 425;
				this.unloadStatememt();
				this.state = 426;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_SET:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 428;
				this.setStatememt();
				this.state = 429;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_RESET:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 431;
				this.resetStatememt();
				this.state = 432;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_ADD:
			case FlinkSQLParser.KW_REMOVE:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 434;
				this.jarStatememt();
				this.state = 435;
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
		this.enterRule(_localctx, 10, FlinkSQLParser.RULE_emptyStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 439;
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
		this.enterRule(_localctx, 12, FlinkSQLParser.RULE_ddlStatement);
		try {
			this.state = 455;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 441;
				this.createTable();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 442;
				this.createDatabase();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 443;
				this.createView();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 444;
				this.createFunction();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 445;
				this.createCatalog();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 446;
				this.alterTable();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 447;
				this.alertView();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 448;
				this.alterDatabase();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 449;
				this.alterFunction();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 450;
				this.dropCatalog();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 451;
				this.dropTable();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 452;
				this.dropDatabase();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 453;
				this.dropView();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 454;
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
		this.enterRule(_localctx, 14, FlinkSQLParser.RULE_dmlStatement);
		try {
			this.state = 459;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_SELECT:
			case FlinkSQLParser.KW_VALUES:
			case FlinkSQLParser.KW_WITH:
			case FlinkSQLParser.LR_BRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 457;
				this.queryStatement(0);
				}
				break;
			case FlinkSQLParser.KW_BEGIN:
			case FlinkSQLParser.KW_EXECUTE:
			case FlinkSQLParser.KW_INSERT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 458;
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
		this.enterRule(_localctx, 16, FlinkSQLParser.RULE_describeStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 461;
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
			this.state = 462;
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
		this.enterRule(_localctx, 18, FlinkSQLParser.RULE_explainStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 464;
			this.match(FlinkSQLParser.KW_EXPLAIN);
			this.state = 468;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_CHANGELOG_MODE:
			case FlinkSQLParser.KW_ESTIMATED_COST:
			case FlinkSQLParser.KW_JSON_EXECUTION_PLAN:
				{
				this.state = 465;
				this.explainDetails();
				}
				break;
			case FlinkSQLParser.KW_PLAN:
				{
				this.state = 466;
				this.match(FlinkSQLParser.KW_PLAN);
				this.state = 467;
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
			this.state = 473;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 470;
				this.dmlStatement();
				}
				break;

			case 2:
				{
				this.state = 471;
				this.insertSimpleStatement();
				}
				break;

			case 3:
				{
				this.state = 472;
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
		this.enterRule(_localctx, 20, FlinkSQLParser.RULE_explainDetails);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 475;
			this.explainDetail();
			this.state = 480;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 476;
				this.match(FlinkSQLParser.COMMA);
				this.state = 477;
				this.explainDetail();
				}
				}
				this.state = 482;
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
		this.enterRule(_localctx, 22, FlinkSQLParser.RULE_explainDetail);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 483;
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
		this.enterRule(_localctx, 24, FlinkSQLParser.RULE_useStatement);
		try {
			this.state = 491;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 485;
				this.match(FlinkSQLParser.KW_USE);
				this.state = 486;
				this.match(FlinkSQLParser.KW_CATALOG);
				this.state = 487;
				this.catalogPath();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 488;
				this.match(FlinkSQLParser.KW_USE);
				this.state = 489;
				this.databasePath();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 490;
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
		this.enterRule(_localctx, 26, FlinkSQLParser.RULE_useModuleStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 493;
			this.match(FlinkSQLParser.KW_USE);
			this.state = 494;
			this.match(FlinkSQLParser.KW_MODULES);
			this.state = 495;
			this.uid();
			this.state = 500;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 496;
				this.match(FlinkSQLParser.COMMA);
				this.state = 497;
				this.uid();
				}
				}
				this.state = 502;
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
		this.enterRule(_localctx, 28, FlinkSQLParser.RULE_showStatememt);
		let _la: number;
		try {
			this.state = 538;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 503;
				this.match(FlinkSQLParser.KW_SHOW);
				this.state = 504;
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
				this.state = 505;
				this.match(FlinkSQLParser.KW_SHOW);
				this.state = 506;
				this.match(FlinkSQLParser.KW_CURRENT);
				this.state = 507;
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
				this.state = 508;
				this.match(FlinkSQLParser.KW_SHOW);
				this.state = 509;
				this.match(FlinkSQLParser.KW_TABLES);
				this.state = 512;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_FROM || _la === FlinkSQLParser.KW_IN) {
					{
					this.state = 510;
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
					this.state = 511;
					this.tablePath();
					}
				}

				this.state = 515;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_LIKE || _la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 514;
					this.likePredicate();
					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 517;
				this.match(FlinkSQLParser.KW_SHOW);
				this.state = 518;
				this.match(FlinkSQLParser.KW_COLUMNS);
				this.state = 519;
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
				this.state = 520;
				this.uid();
				this.state = 522;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_LIKE || _la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 521;
					this.likePredicate();
					}
				}

				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 524;
				this.match(FlinkSQLParser.KW_SHOW);
				this.state = 525;
				this.match(FlinkSQLParser.KW_CREATE);
				this.state = 526;
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
				this.state = 527;
				this.uid();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 528;
				this.match(FlinkSQLParser.KW_SHOW);
				this.state = 530;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_USER) {
					{
					this.state = 529;
					this.match(FlinkSQLParser.KW_USER);
					}
				}

				this.state = 532;
				this.match(FlinkSQLParser.KW_FUNCTIONS);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 533;
				this.match(FlinkSQLParser.KW_SHOW);
				this.state = 535;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_FULL) {
					{
					this.state = 534;
					this.match(FlinkSQLParser.KW_FULL);
					}
				}

				this.state = 537;
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
		this.enterRule(_localctx, 30, FlinkSQLParser.RULE_loadStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 540;
			this.match(FlinkSQLParser.KW_LOAD);
			this.state = 541;
			this.match(FlinkSQLParser.KW_MODULE);
			this.state = 542;
			this.uid();
			this.state = 545;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_WITH) {
				{
				this.state = 543;
				this.match(FlinkSQLParser.KW_WITH);
				this.state = 544;
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
		this.enterRule(_localctx, 32, FlinkSQLParser.RULE_unloadStatememt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 547;
			this.match(FlinkSQLParser.KW_UNLOAD);
			this.state = 548;
			this.match(FlinkSQLParser.KW_MODULE);
			this.state = 549;
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
		this.enterRule(_localctx, 34, FlinkSQLParser.RULE_setStatememt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 551;
			this.match(FlinkSQLParser.KW_SET);
			this.state = 553;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSQLParser.T__0) | (1 << FlinkSQLParser.KW_ADD) | (1 << FlinkSQLParser.KW_ADMIN) | (1 << FlinkSQLParser.KW_AFTER) | (1 << FlinkSQLParser.KW_ANALYZE) | (1 << FlinkSQLParser.KW_ASC) | (1 << FlinkSQLParser.KW_BEFORE) | (1 << FlinkSQLParser.KW_BYTES) | (1 << FlinkSQLParser.KW_CASCADE) | (1 << FlinkSQLParser.KW_CATALOG) | (1 << FlinkSQLParser.KW_CATALOGS) | (1 << FlinkSQLParser.KW_CENTURY) | (1 << FlinkSQLParser.KW_CHAIN) | (1 << FlinkSQLParser.KW_CHANGELOG_MODE) | (1 << FlinkSQLParser.KW_CHARACTERS) | (1 << FlinkSQLParser.KW_COMMENT) | (1 << FlinkSQLParser.KW_COMPACT) | (1 << FlinkSQLParser.KW_COLUMNS) | (1 << FlinkSQLParser.KW_CONSTRAINTS) | (1 << FlinkSQLParser.KW_CONSTRUCTOR) | (1 << FlinkSQLParser.KW_CUMULATE) | (1 << FlinkSQLParser.KW_DATA) | (1 << FlinkSQLParser.KW_DATABASE) | (1 << FlinkSQLParser.KW_DATABASES) | (1 << FlinkSQLParser.KW_DAYS) | (1 << FlinkSQLParser.KW_DECADE) | (1 << FlinkSQLParser.KW_DEFINED) | (1 << FlinkSQLParser.KW_DESC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSQLParser.KW_DESCRIPTOR - 32)) | (1 << (FlinkSQLParser.KW_DIV - 32)) | (1 << (FlinkSQLParser.KW_ENCODING - 32)) | (1 << (FlinkSQLParser.KW_ENFORCED - 32)) | (1 << (FlinkSQLParser.KW_ENGINE - 32)) | (1 << (FlinkSQLParser.KW_ERROR - 32)) | (1 << (FlinkSQLParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSQLParser.KW_EXCEPTION - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDE - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDING - 32)) | (1 << (FlinkSQLParser.KW_EXTENDED - 32)) | (1 << (FlinkSQLParser.KW_FILE - 32)) | (1 << (FlinkSQLParser.KW_FINAL - 32)) | (1 << (FlinkSQLParser.KW_FIRST - 32)) | (1 << (FlinkSQLParser.KW_FOLLOWING - 32)) | (1 << (FlinkSQLParser.KW_FORMAT - 32)) | (1 << (FlinkSQLParser.KW_FORTRAN - 32)) | (1 << (FlinkSQLParser.KW_FOUND - 32)) | (1 << (FlinkSQLParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSQLParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSQLParser.KW_GENERAL - 32)) | (1 << (FlinkSQLParser.KW_GENERATED - 32)) | (1 << (FlinkSQLParser.KW_GO - 32)) | (1 << (FlinkSQLParser.KW_GOTO - 32)) | (1 << (FlinkSQLParser.KW_GRANTED - 32)) | (1 << (FlinkSQLParser.KW_HOP - 32)) | (1 << (FlinkSQLParser.KW_HOURS - 32)) | (1 << (FlinkSQLParser.KW_IF - 32)) | (1 << (FlinkSQLParser.KW_IGNORE - 32)) | (1 << (FlinkSQLParser.KW_INCREMENT - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSQLParser.KW_INPUT - 64)) | (1 << (FlinkSQLParser.KW_INVOKER - 64)) | (1 << (FlinkSQLParser.KW_JAR - 64)) | (1 << (FlinkSQLParser.KW_JARS - 64)) | (1 << (FlinkSQLParser.KW_JAVA - 64)) | (1 << (FlinkSQLParser.KW_JSON - 64)) | (1 << (FlinkSQLParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSQLParser.KW_KEY - 64)) | (1 << (FlinkSQLParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSQLParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSQLParser.KW_LABEL - 64)) | (1 << (FlinkSQLParser.KW_LAST - 64)) | (1 << (FlinkSQLParser.KW_LENGTH - 64)) | (1 << (FlinkSQLParser.KW_LEVEL - 64)) | (1 << (FlinkSQLParser.KW_LOAD - 64)) | (1 << (FlinkSQLParser.KW_MAP - 64)) | (1 << (FlinkSQLParser.KW_MICROSECOND - 64)) | (1 << (FlinkSQLParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSQLParser.KW_MILLISECOND - 64)) | (1 << (FlinkSQLParser.KW_MINUTES - 64)) | (1 << (FlinkSQLParser.KW_MINVALUE - 64)) | (1 << (FlinkSQLParser.KW_MODIFY - 64)) | (1 << (FlinkSQLParser.KW_MODULES - 64)) | (1 << (FlinkSQLParser.KW_MONTHS - 64)) | (1 << (FlinkSQLParser.KW_NANOSECOND - 64)) | (1 << (FlinkSQLParser.KW_NULLS - 64)) | (1 << (FlinkSQLParser.KW_NUMBER - 64)) | (1 << (FlinkSQLParser.KW_OPTION - 64)) | (1 << (FlinkSQLParser.KW_OPTIONS - 64)) | (1 << (FlinkSQLParser.KW_ORDERING - 64)) | (1 << (FlinkSQLParser.KW_OUTPUT - 64)) | (1 << (FlinkSQLParser.KW_OVERWRITE - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSQLParser.KW_OVERWRITING - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONED - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONS - 96)) | (1 << (FlinkSQLParser.KW_PASSING - 96)) | (1 << (FlinkSQLParser.KW_PAST - 96)) | (1 << (FlinkSQLParser.KW_PATH - 96)) | (1 << (FlinkSQLParser.KW_PLACING - 96)) | (1 << (FlinkSQLParser.KW_PLAN - 96)) | (1 << (FlinkSQLParser.KW_PRECEDING - 96)) | (1 << (FlinkSQLParser.KW_PRESERVE - 96)) | (1 << (FlinkSQLParser.KW_PRIOR - 96)) | (1 << (FlinkSQLParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSQLParser.KW_PUBLIC - 96)) | (1 << (FlinkSQLParser.KW_PYTHON - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSQLParser.KW_QUARTER - 96)) | (1 << (FlinkSQLParser.KW_RAW - 96)) | (1 << (FlinkSQLParser.KW_READ - 96)) | (1 << (FlinkSQLParser.KW_RELATIVE - 96)) | (1 << (FlinkSQLParser.KW_REMOVE - 96)) | (1 << (FlinkSQLParser.KW_RENAME - 96)) | (1 << (FlinkSQLParser.KW_REPLACE - 96)) | (1 << (FlinkSQLParser.KW_RESPECT - 96)) | (1 << (FlinkSQLParser.KW_RESTART - 96)) | (1 << (FlinkSQLParser.KW_RESTRICT - 96)) | (1 << (FlinkSQLParser.KW_ROLE - 96)) | (1 << (FlinkSQLParser.KW_ROW_COUNT - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSQLParser.KW_SCALA - 128)) | (1 << (FlinkSQLParser.KW_SCALAR - 128)) | (1 << (FlinkSQLParser.KW_SCALE - 128)) | (1 << (FlinkSQLParser.KW_SCHEMA - 128)) | (1 << (FlinkSQLParser.KW_SECONDS - 128)) | (1 << (FlinkSQLParser.KW_SECTION - 128)) | (1 << (FlinkSQLParser.KW_SECURITY - 128)) | (1 << (FlinkSQLParser.KW_SELF - 128)) | (1 << (FlinkSQLParser.KW_SERVER - 128)) | (1 << (FlinkSQLParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSQLParser.KW_SESSION - 128)) | (1 << (FlinkSQLParser.KW_SETS - 128)) | (1 << (FlinkSQLParser.KW_SIMPLE - 128)) | (1 << (FlinkSQLParser.KW_SIZE - 128)) | (1 << (FlinkSQLParser.KW_SLIDE - 128)) | (1 << (FlinkSQLParser.KW_SOURCE - 128)) | (1 << (FlinkSQLParser.KW_SPACE - 128)) | (1 << (FlinkSQLParser.KW_STATE - 128)) | (1 << (FlinkSQLParser.KW_STATEMENT - 128)) | (1 << (FlinkSQLParser.KW_STEP - 128)) | (1 << (FlinkSQLParser.KW_STRING - 128)) | (1 << (FlinkSQLParser.KW_STRUCTURE - 128)) | (1 << (FlinkSQLParser.KW_STYLE - 128)) | (1 << (FlinkSQLParser.KW_TABLES - 128)) | (1 << (FlinkSQLParser.KW_TEMPORARY - 128)) | (1 << (FlinkSQLParser.KW_TIMECOL - 128)) | (1 << (FlinkSQLParser.KW_FLOOR - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_LTZ - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPADD - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPDIFF - 128)) | (1 << (FlinkSQLParser.KW_TRANSFORM - 128)) | (1 << (FlinkSQLParser.KW_TUMBLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSQLParser.KW_TYPE - 160)) | (1 << (FlinkSQLParser.KW_UNDER - 160)) | (1 << (FlinkSQLParser.KW_UNLOAD - 160)) | (1 << (FlinkSQLParser.KW_USAGE - 160)) | (1 << (FlinkSQLParser.KW_USE - 160)) | (1 << (FlinkSQLParser.KW_UTF16 - 160)) | (1 << (FlinkSQLParser.KW_UTF32 - 160)) | (1 << (FlinkSQLParser.KW_UTF8 - 160)) | (1 << (FlinkSQLParser.KW_VERSION - 160)) | (1 << (FlinkSQLParser.KW_VIEW - 160)) | (1 << (FlinkSQLParser.KW_VIEWS - 160)) | (1 << (FlinkSQLParser.KW_VIRTUAL - 160)) | (1 << (FlinkSQLParser.KW_WATERMARK - 160)) | (1 << (FlinkSQLParser.KW_WATERMARKS - 160)) | (1 << (FlinkSQLParser.KW_WEEK - 160)) | (1 << (FlinkSQLParser.KW_WORK - 160)) | (1 << (FlinkSQLParser.KW_WRAPPER - 160)) | (1 << (FlinkSQLParser.KW_YEARS - 160)) | (1 << (FlinkSQLParser.KW_ZONE - 160)))) !== 0) || ((((_la - 411)) & ~0x1F) === 0 && ((1 << (_la - 411)) & ((1 << (FlinkSQLParser.STRING_LITERAL - 411)) | (1 << (FlinkSQLParser.DIG_LITERAL - 411)) | (1 << (FlinkSQLParser.ID_LITERAL - 411)))) !== 0)) {
				{
				this.state = 552;
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
		this.enterRule(_localctx, 36, FlinkSQLParser.RULE_resetStatememt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 555;
			this.match(FlinkSQLParser.KW_RESET);
			this.state = 557;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSQLParser.T__0) | (1 << FlinkSQLParser.KW_ADD) | (1 << FlinkSQLParser.KW_ADMIN) | (1 << FlinkSQLParser.KW_AFTER) | (1 << FlinkSQLParser.KW_ANALYZE) | (1 << FlinkSQLParser.KW_ASC) | (1 << FlinkSQLParser.KW_BEFORE) | (1 << FlinkSQLParser.KW_BYTES) | (1 << FlinkSQLParser.KW_CASCADE) | (1 << FlinkSQLParser.KW_CATALOG) | (1 << FlinkSQLParser.KW_CATALOGS) | (1 << FlinkSQLParser.KW_CENTURY) | (1 << FlinkSQLParser.KW_CHAIN) | (1 << FlinkSQLParser.KW_CHANGELOG_MODE) | (1 << FlinkSQLParser.KW_CHARACTERS) | (1 << FlinkSQLParser.KW_COMMENT) | (1 << FlinkSQLParser.KW_COMPACT) | (1 << FlinkSQLParser.KW_COLUMNS) | (1 << FlinkSQLParser.KW_CONSTRAINTS) | (1 << FlinkSQLParser.KW_CONSTRUCTOR) | (1 << FlinkSQLParser.KW_CUMULATE) | (1 << FlinkSQLParser.KW_DATA) | (1 << FlinkSQLParser.KW_DATABASE) | (1 << FlinkSQLParser.KW_DATABASES) | (1 << FlinkSQLParser.KW_DAYS) | (1 << FlinkSQLParser.KW_DECADE) | (1 << FlinkSQLParser.KW_DEFINED) | (1 << FlinkSQLParser.KW_DESC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSQLParser.KW_DESCRIPTOR - 32)) | (1 << (FlinkSQLParser.KW_DIV - 32)) | (1 << (FlinkSQLParser.KW_ENCODING - 32)) | (1 << (FlinkSQLParser.KW_ENFORCED - 32)) | (1 << (FlinkSQLParser.KW_ENGINE - 32)) | (1 << (FlinkSQLParser.KW_ERROR - 32)) | (1 << (FlinkSQLParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSQLParser.KW_EXCEPTION - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDE - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDING - 32)) | (1 << (FlinkSQLParser.KW_EXTENDED - 32)) | (1 << (FlinkSQLParser.KW_FILE - 32)) | (1 << (FlinkSQLParser.KW_FINAL - 32)) | (1 << (FlinkSQLParser.KW_FIRST - 32)) | (1 << (FlinkSQLParser.KW_FOLLOWING - 32)) | (1 << (FlinkSQLParser.KW_FORMAT - 32)) | (1 << (FlinkSQLParser.KW_FORTRAN - 32)) | (1 << (FlinkSQLParser.KW_FOUND - 32)) | (1 << (FlinkSQLParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSQLParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSQLParser.KW_GENERAL - 32)) | (1 << (FlinkSQLParser.KW_GENERATED - 32)) | (1 << (FlinkSQLParser.KW_GO - 32)) | (1 << (FlinkSQLParser.KW_GOTO - 32)) | (1 << (FlinkSQLParser.KW_GRANTED - 32)) | (1 << (FlinkSQLParser.KW_HOP - 32)) | (1 << (FlinkSQLParser.KW_HOURS - 32)) | (1 << (FlinkSQLParser.KW_IF - 32)) | (1 << (FlinkSQLParser.KW_IGNORE - 32)) | (1 << (FlinkSQLParser.KW_INCREMENT - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSQLParser.KW_INPUT - 64)) | (1 << (FlinkSQLParser.KW_INVOKER - 64)) | (1 << (FlinkSQLParser.KW_JAR - 64)) | (1 << (FlinkSQLParser.KW_JARS - 64)) | (1 << (FlinkSQLParser.KW_JAVA - 64)) | (1 << (FlinkSQLParser.KW_JSON - 64)) | (1 << (FlinkSQLParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSQLParser.KW_KEY - 64)) | (1 << (FlinkSQLParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSQLParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSQLParser.KW_LABEL - 64)) | (1 << (FlinkSQLParser.KW_LAST - 64)) | (1 << (FlinkSQLParser.KW_LENGTH - 64)) | (1 << (FlinkSQLParser.KW_LEVEL - 64)) | (1 << (FlinkSQLParser.KW_LOAD - 64)) | (1 << (FlinkSQLParser.KW_MAP - 64)) | (1 << (FlinkSQLParser.KW_MICROSECOND - 64)) | (1 << (FlinkSQLParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSQLParser.KW_MILLISECOND - 64)) | (1 << (FlinkSQLParser.KW_MINUTES - 64)) | (1 << (FlinkSQLParser.KW_MINVALUE - 64)) | (1 << (FlinkSQLParser.KW_MODIFY - 64)) | (1 << (FlinkSQLParser.KW_MODULES - 64)) | (1 << (FlinkSQLParser.KW_MONTHS - 64)) | (1 << (FlinkSQLParser.KW_NANOSECOND - 64)) | (1 << (FlinkSQLParser.KW_NULLS - 64)) | (1 << (FlinkSQLParser.KW_NUMBER - 64)) | (1 << (FlinkSQLParser.KW_OPTION - 64)) | (1 << (FlinkSQLParser.KW_OPTIONS - 64)) | (1 << (FlinkSQLParser.KW_ORDERING - 64)) | (1 << (FlinkSQLParser.KW_OUTPUT - 64)) | (1 << (FlinkSQLParser.KW_OVERWRITE - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSQLParser.KW_OVERWRITING - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONED - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONS - 96)) | (1 << (FlinkSQLParser.KW_PASSING - 96)) | (1 << (FlinkSQLParser.KW_PAST - 96)) | (1 << (FlinkSQLParser.KW_PATH - 96)) | (1 << (FlinkSQLParser.KW_PLACING - 96)) | (1 << (FlinkSQLParser.KW_PLAN - 96)) | (1 << (FlinkSQLParser.KW_PRECEDING - 96)) | (1 << (FlinkSQLParser.KW_PRESERVE - 96)) | (1 << (FlinkSQLParser.KW_PRIOR - 96)) | (1 << (FlinkSQLParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSQLParser.KW_PUBLIC - 96)) | (1 << (FlinkSQLParser.KW_PYTHON - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSQLParser.KW_QUARTER - 96)) | (1 << (FlinkSQLParser.KW_RAW - 96)) | (1 << (FlinkSQLParser.KW_READ - 96)) | (1 << (FlinkSQLParser.KW_RELATIVE - 96)) | (1 << (FlinkSQLParser.KW_REMOVE - 96)) | (1 << (FlinkSQLParser.KW_RENAME - 96)) | (1 << (FlinkSQLParser.KW_REPLACE - 96)) | (1 << (FlinkSQLParser.KW_RESPECT - 96)) | (1 << (FlinkSQLParser.KW_RESTART - 96)) | (1 << (FlinkSQLParser.KW_RESTRICT - 96)) | (1 << (FlinkSQLParser.KW_ROLE - 96)) | (1 << (FlinkSQLParser.KW_ROW_COUNT - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSQLParser.KW_SCALA - 128)) | (1 << (FlinkSQLParser.KW_SCALAR - 128)) | (1 << (FlinkSQLParser.KW_SCALE - 128)) | (1 << (FlinkSQLParser.KW_SCHEMA - 128)) | (1 << (FlinkSQLParser.KW_SECONDS - 128)) | (1 << (FlinkSQLParser.KW_SECTION - 128)) | (1 << (FlinkSQLParser.KW_SECURITY - 128)) | (1 << (FlinkSQLParser.KW_SELF - 128)) | (1 << (FlinkSQLParser.KW_SERVER - 128)) | (1 << (FlinkSQLParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSQLParser.KW_SESSION - 128)) | (1 << (FlinkSQLParser.KW_SETS - 128)) | (1 << (FlinkSQLParser.KW_SIMPLE - 128)) | (1 << (FlinkSQLParser.KW_SIZE - 128)) | (1 << (FlinkSQLParser.KW_SLIDE - 128)) | (1 << (FlinkSQLParser.KW_SOURCE - 128)) | (1 << (FlinkSQLParser.KW_SPACE - 128)) | (1 << (FlinkSQLParser.KW_STATE - 128)) | (1 << (FlinkSQLParser.KW_STATEMENT - 128)) | (1 << (FlinkSQLParser.KW_STEP - 128)) | (1 << (FlinkSQLParser.KW_STRING - 128)) | (1 << (FlinkSQLParser.KW_STRUCTURE - 128)) | (1 << (FlinkSQLParser.KW_STYLE - 128)) | (1 << (FlinkSQLParser.KW_TABLES - 128)) | (1 << (FlinkSQLParser.KW_TEMPORARY - 128)) | (1 << (FlinkSQLParser.KW_TIMECOL - 128)) | (1 << (FlinkSQLParser.KW_FLOOR - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_LTZ - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPADD - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPDIFF - 128)) | (1 << (FlinkSQLParser.KW_TRANSFORM - 128)) | (1 << (FlinkSQLParser.KW_TUMBLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSQLParser.KW_TYPE - 160)) | (1 << (FlinkSQLParser.KW_UNDER - 160)) | (1 << (FlinkSQLParser.KW_UNLOAD - 160)) | (1 << (FlinkSQLParser.KW_USAGE - 160)) | (1 << (FlinkSQLParser.KW_USE - 160)) | (1 << (FlinkSQLParser.KW_UTF16 - 160)) | (1 << (FlinkSQLParser.KW_UTF32 - 160)) | (1 << (FlinkSQLParser.KW_UTF8 - 160)) | (1 << (FlinkSQLParser.KW_VERSION - 160)) | (1 << (FlinkSQLParser.KW_VIEW - 160)) | (1 << (FlinkSQLParser.KW_VIEWS - 160)) | (1 << (FlinkSQLParser.KW_VIRTUAL - 160)) | (1 << (FlinkSQLParser.KW_WATERMARK - 160)) | (1 << (FlinkSQLParser.KW_WATERMARKS - 160)) | (1 << (FlinkSQLParser.KW_WEEK - 160)) | (1 << (FlinkSQLParser.KW_WORK - 160)) | (1 << (FlinkSQLParser.KW_WRAPPER - 160)) | (1 << (FlinkSQLParser.KW_YEARS - 160)) | (1 << (FlinkSQLParser.KW_ZONE - 160)))) !== 0) || ((((_la - 411)) & ~0x1F) === 0 && ((1 << (_la - 411)) & ((1 << (FlinkSQLParser.STRING_LITERAL - 411)) | (1 << (FlinkSQLParser.DIG_LITERAL - 411)) | (1 << (FlinkSQLParser.ID_LITERAL - 411)))) !== 0)) {
				{
				this.state = 556;
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
		this.enterRule(_localctx, 38, FlinkSQLParser.RULE_jarStatememt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 559;
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
			this.state = 560;
			this.match(FlinkSQLParser.KW_JAR);
			this.state = 561;
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
		this.enterRule(_localctx, 40, FlinkSQLParser.RULE_dtFilePath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 564;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 563;
				this.match(FlinkSQLParser.SLASH_TEXT);
				}
				}
				this.state = 566;
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
		this.enterRule(_localctx, 42, FlinkSQLParser.RULE_createTable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 570;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 568;
				this.simpleCreateTable();
				}
				break;

			case 2:
				{
				this.state = 569;
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
		this.enterRule(_localctx, 44, FlinkSQLParser.RULE_simpleCreateTable);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 572;
			this.match(FlinkSQLParser.KW_CREATE);
			this.state = 574;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_TEMPORARY) {
				{
				this.state = 573;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				}
			}

			this.state = 576;
			this.match(FlinkSQLParser.KW_TABLE);
			this.state = 578;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 577;
				this.ifNotExists();
				}
				break;
			}
			this.state = 580;
			this.tablePathCreate();
			this.state = 581;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 582;
			this.columnOptionDefinition();
			this.state = 587;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 583;
					this.match(FlinkSQLParser.COMMA);
					this.state = 584;
					this.columnOptionDefinition();
					}
					}
				}
				this.state = 589;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			}
			this.state = 592;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 590;
				this.match(FlinkSQLParser.COMMA);
				this.state = 591;
				this.watermarkDefinition();
				}
				break;
			}
			this.state = 596;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 594;
				this.match(FlinkSQLParser.COMMA);
				this.state = 595;
				this.tableConstraint();
				}
				break;
			}
			this.state = 600;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.COMMA) {
				{
				this.state = 598;
				this.match(FlinkSQLParser.COMMA);
				this.state = 599;
				this.selfDefinitionClause();
				}
			}

			this.state = 602;
			this.match(FlinkSQLParser.RR_BRACKET);
			this.state = 604;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_COMMENT) {
				{
				this.state = 603;
				this.commentSpec();
				}
			}

			this.state = 607;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_PARTITIONED) {
				{
				this.state = 606;
				this.partitionDefinition();
				}
			}

			this.state = 609;
			this.withOption();
			this.state = 611;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_LIKE) {
				{
				this.state = 610;
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
		this.enterRule(_localctx, 46, FlinkSQLParser.RULE_createTableAsSelect);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 613;
			this.match(FlinkSQLParser.KW_CREATE);
			this.state = 614;
			this.match(FlinkSQLParser.KW_TABLE);
			this.state = 616;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 615;
				this.ifNotExists();
				}
				break;
			}
			this.state = 618;
			this.tablePathCreate();
			this.state = 619;
			this.withOption();
			this.state = 622;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_AS) {
				{
				this.state = 620;
				this.match(FlinkSQLParser.KW_AS);
				this.state = 621;
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
		this.enterRule(_localctx, 48, FlinkSQLParser.RULE_columnOptionDefinition);
		try {
			this.state = 627;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 624;
				this.physicalColumnDefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 625;
				this.metadataColumnDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 626;
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
		this.enterRule(_localctx, 50, FlinkSQLParser.RULE_physicalColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 629;
			this.columnName();
			this.state = 630;
			this.columnType();
			this.state = 632;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_CONSTRAINT || ((((_la - 301)) & ~0x1F) === 0 && ((1 << (_la - 301)) & ((1 << (FlinkSQLParser.KW_NOT - 301)) | (1 << (FlinkSQLParser.KW_NULL - 301)) | (1 << (FlinkSQLParser.KW_PRIMARY - 301)))) !== 0)) {
				{
				this.state = 631;
				this.columnConstraint();
				}
			}

			this.state = 635;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_COMMENT) {
				{
				this.state = 634;
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
		this.enterRule(_localctx, 52, FlinkSQLParser.RULE_columnName);
		try {
			this.state = 639;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 637;
				this.uid();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 638;
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
		this.enterRule(_localctx, 54, FlinkSQLParser.RULE_columnNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 641;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 642;
			this.columnName();
			this.state = 647;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 643;
				this.match(FlinkSQLParser.COMMA);
				this.state = 644;
				this.columnName();
				}
				}
				this.state = 649;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 650;
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
		this.enterRule(_localctx, 56, FlinkSQLParser.RULE_columnType);
		let _la: number;
		try {
			this.state = 725;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_BOOLEAN:
			case FlinkSQLParser.KW_DATE:
			case FlinkSQLParser.KW_NULL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 652;
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
				this.state = 653;
				_localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSQLParser.KW_BYTES || _la === FlinkSQLParser.KW_STRING || _la === FlinkSQLParser.KW_TIMESTAMP_LTZ || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & ((1 << (FlinkSQLParser.KW_BIGINT - 194)) | (1 << (FlinkSQLParser.KW_BINARY - 194)) | (1 << (FlinkSQLParser.KW_CHAR - 194)))) !== 0) || _la === FlinkSQLParser.KW_DATETIME || _la === FlinkSQLParser.KW_INT || _la === FlinkSQLParser.KW_INTEGER || ((((_la - 338)) & ~0x1F) === 0 && ((1 << (_la - 338)) & ((1 << (FlinkSQLParser.KW_SMALLINT - 338)) | (1 << (FlinkSQLParser.KW_TIME - 338)) | (1 << (FlinkSQLParser.KW_TINYINT - 338)))) !== 0) || _la === FlinkSQLParser.KW_VARBINARY || _la === FlinkSQLParser.KW_VARCHAR)) {
					_localctx._typeName = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 655;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LR_BRACKET) {
					{
					this.state = 654;
					this.lengthOneDimension();
					}
				}

				}
				break;
			case FlinkSQLParser.KW_TIMESTAMP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 657;
				_localctx._typeName = this.match(FlinkSQLParser.KW_TIMESTAMP);
				this.state = 659;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LR_BRACKET) {
					{
					this.state = 658;
					this.lengthOneDimension();
					}
				}

				this.state = 667;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_WITH || _la === FlinkSQLParser.KW_WITHOUT) {
					{
					this.state = 661;
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
					this.state = 663;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSQLParser.KW_LOCAL) {
						{
						this.state = 662;
						this.match(FlinkSQLParser.KW_LOCAL);
						}
					}

					this.state = 665;
					this.match(FlinkSQLParser.KW_TIME);
					this.state = 666;
					this.match(FlinkSQLParser.KW_ZONE);
					}
				}

				}
				break;
			case FlinkSQLParser.KW_TIMESTAMP_3:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 669;
				_localctx._typeName = this.match(FlinkSQLParser.KW_TIMESTAMP_3);
				this.state = 671;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LR_BRACKET) {
					{
					this.state = 670;
					this.lengthOneDimension();
					}
				}

				this.state = 679;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_WITH || _la === FlinkSQLParser.KW_WITHOUT) {
					{
					this.state = 673;
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
					this.state = 675;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSQLParser.KW_LOCAL) {
						{
						this.state = 674;
						this.match(FlinkSQLParser.KW_LOCAL);
						}
					}

					this.state = 677;
					this.match(FlinkSQLParser.KW_TIME);
					this.state = 678;
					this.match(FlinkSQLParser.KW_ZONE);
					}
				}

				}
				break;
			case FlinkSQLParser.KW_TIMESTAMP_6:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 681;
				_localctx._typeName = this.match(FlinkSQLParser.KW_TIMESTAMP_6);
				this.state = 683;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LR_BRACKET) {
					{
					this.state = 682;
					this.lengthOneDimension();
					}
				}

				this.state = 691;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_WITH || _la === FlinkSQLParser.KW_WITHOUT) {
					{
					this.state = 685;
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
					this.state = 687;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSQLParser.KW_LOCAL) {
						{
						this.state = 686;
						this.match(FlinkSQLParser.KW_LOCAL);
						}
					}

					this.state = 689;
					this.match(FlinkSQLParser.KW_TIME);
					this.state = 690;
					this.match(FlinkSQLParser.KW_ZONE);
					}
				}

				}
				break;
			case FlinkSQLParser.KW_TIMESTAMP_9:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 693;
				_localctx._typeName = this.match(FlinkSQLParser.KW_TIMESTAMP_9);
				this.state = 695;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LR_BRACKET) {
					{
					this.state = 694;
					this.lengthOneDimension();
					}
				}

				this.state = 703;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_WITH || _la === FlinkSQLParser.KW_WITHOUT) {
					{
					this.state = 697;
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
					this.state = 699;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSQLParser.KW_LOCAL) {
						{
						this.state = 698;
						this.match(FlinkSQLParser.KW_LOCAL);
						}
					}

					this.state = 701;
					this.match(FlinkSQLParser.KW_TIME);
					this.state = 702;
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
				this.state = 705;
				_localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 231)) & ~0x1F) === 0 && ((1 << (_la - 231)) & ((1 << (FlinkSQLParser.KW_DEC - 231)) | (1 << (FlinkSQLParser.KW_DECIMAL - 231)) | (1 << (FlinkSQLParser.KW_DOUBLE - 231)) | (1 << (FlinkSQLParser.KW_FLOAT - 231)))) !== 0) || _la === FlinkSQLParser.KW_NUMERIC)) {
					_localctx._typeName = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 707;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LR_BRACKET) {
					{
					this.state = 706;
					this.lengthTwoOptionalDimension();
					}
				}

				}
				break;
			case FlinkSQLParser.KW_ARRAY:
			case FlinkSQLParser.KW_MULTISET:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 709;
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
				this.state = 711;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LESS_SYMBOL) {
					{
					this.state = 710;
					this.lengthOneTypeDimension();
					}
				}

				}
				break;
			case FlinkSQLParser.KW_MAP:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 713;
				_localctx._type = this.match(FlinkSQLParser.KW_MAP);
				this.state = 715;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LESS_SYMBOL) {
					{
					this.state = 714;
					this.mapTypeDimension();
					}
				}

				}
				break;
			case FlinkSQLParser.KW_ROW:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 717;
				_localctx._type = this.match(FlinkSQLParser.KW_ROW);
				this.state = 719;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LESS_SYMBOL) {
					{
					this.state = 718;
					this.rowTypeDimension();
					}
				}

				}
				break;
			case FlinkSQLParser.KW_RAW:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 721;
				_localctx._type = this.match(FlinkSQLParser.KW_RAW);
				this.state = 723;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LR_BRACKET) {
					{
					this.state = 722;
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
		this.enterRule(_localctx, 58, FlinkSQLParser.RULE_lengthOneDimension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 727;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 728;
			this.decimalLiteral();
			this.state = 729;
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
		this.enterRule(_localctx, 60, FlinkSQLParser.RULE_lengthTwoOptionalDimension);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 731;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 732;
			this.decimalLiteral();
			this.state = 735;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.COMMA) {
				{
				this.state = 733;
				this.match(FlinkSQLParser.COMMA);
				this.state = 734;
				this.decimalLiteral();
				}
			}

			this.state = 737;
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
		this.enterRule(_localctx, 62, FlinkSQLParser.RULE_lengthTwoStringDimension);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 739;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 740;
			this.stringLiteral();
			this.state = 743;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.COMMA) {
				{
				this.state = 741;
				this.match(FlinkSQLParser.COMMA);
				this.state = 742;
				this.stringLiteral();
				}
			}

			this.state = 745;
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
		this.enterRule(_localctx, 64, FlinkSQLParser.RULE_lengthOneTypeDimension);
		let _la: number;
		try {
			_localctx = new LengthSymbolsTypeDimensionContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 747;
			this.match(FlinkSQLParser.LESS_SYMBOL);
			this.state = 748;
			this.columnType();
			this.state = 753;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 749;
				this.match(FlinkSQLParser.COMMA);
				this.state = 750;
				this.columnType();
				}
				}
				this.state = 755;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 756;
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
		this.enterRule(_localctx, 66, FlinkSQLParser.RULE_mapTypeDimension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 758;
			this.match(FlinkSQLParser.LESS_SYMBOL);
			this.state = 759;
			this.columnType();
			{
			this.state = 760;
			this.match(FlinkSQLParser.COMMA);
			this.state = 761;
			this.columnType();
			}
			this.state = 763;
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
		this.enterRule(_localctx, 68, FlinkSQLParser.RULE_rowTypeDimension);
		let _la: number;
		try {
			_localctx = new RowSymbolsTypeDimensionContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 765;
			this.match(FlinkSQLParser.LESS_SYMBOL);
			this.state = 766;
			this.columnName();
			this.state = 767;
			this.columnType();
			this.state = 774;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 768;
				this.match(FlinkSQLParser.COMMA);
				this.state = 769;
				this.columnName();
				this.state = 770;
				this.columnType();
				}
				}
				this.state = 776;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 777;
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
		this.enterRule(_localctx, 70, FlinkSQLParser.RULE_columnConstraint);
		let _la: number;
		try {
			this.state = 793;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_CONSTRAINT:
			case FlinkSQLParser.KW_PRIMARY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 781;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_CONSTRAINT) {
					{
					this.state = 779;
					this.match(FlinkSQLParser.KW_CONSTRAINT);
					this.state = 780;
					this.constraintName();
					}
				}

				this.state = 783;
				this.match(FlinkSQLParser.KW_PRIMARY);
				this.state = 784;
				this.match(FlinkSQLParser.KW_KEY);
				this.state = 787;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 785;
					this.match(FlinkSQLParser.KW_NOT);
					this.state = 786;
					this.match(FlinkSQLParser.KW_ENFORCED);
					}
				}

				}
				break;
			case FlinkSQLParser.KW_NOT:
			case FlinkSQLParser.KW_NULL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 790;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 789;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 792;
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
		this.enterRule(_localctx, 72, FlinkSQLParser.RULE_commentSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 795;
			this.match(FlinkSQLParser.KW_COMMENT);
			this.state = 796;
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
		this.enterRule(_localctx, 74, FlinkSQLParser.RULE_metadataColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 798;
			this.columnName();
			this.state = 799;
			this.columnType();
			this.state = 800;
			this.match(FlinkSQLParser.KW_METADATA);
			this.state = 803;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_FROM) {
				{
				this.state = 801;
				this.match(FlinkSQLParser.KW_FROM);
				this.state = 802;
				this.metadataKey();
				}
			}

			this.state = 806;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_VIRTUAL) {
				{
				this.state = 805;
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
		this.enterRule(_localctx, 76, FlinkSQLParser.RULE_metadataKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 808;
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
		this.enterRule(_localctx, 78, FlinkSQLParser.RULE_computedColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 810;
			this.columnName();
			this.state = 811;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 812;
			this.computedColumnExpression();
			this.state = 814;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_COMMENT) {
				{
				this.state = 813;
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
		this.enterRule(_localctx, 80, FlinkSQLParser.RULE_computedColumnExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 816;
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
		this.enterRule(_localctx, 82, FlinkSQLParser.RULE_watermarkDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 818;
			this.match(FlinkSQLParser.KW_WATERMARK);
			this.state = 819;
			this.match(FlinkSQLParser.KW_FOR);
			this.state = 820;
			this.expression();
			this.state = 821;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 822;
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
		this.enterRule(_localctx, 84, FlinkSQLParser.RULE_tableConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 826;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_CONSTRAINT) {
				{
				this.state = 824;
				this.match(FlinkSQLParser.KW_CONSTRAINT);
				this.state = 825;
				this.constraintName();
				}
			}

			this.state = 828;
			this.match(FlinkSQLParser.KW_PRIMARY);
			this.state = 829;
			this.match(FlinkSQLParser.KW_KEY);
			this.state = 830;
			this.columnNameList();
			this.state = 831;
			this.match(FlinkSQLParser.KW_NOT);
			this.state = 832;
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
		this.enterRule(_localctx, 86, FlinkSQLParser.RULE_constraintName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 834;
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
		this.enterRule(_localctx, 88, FlinkSQLParser.RULE_selfDefinitionClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 836;
			this.match(FlinkSQLParser.KW_PERIOD);
			this.state = 837;
			this.match(FlinkSQLParser.KW_FOR);
			this.state = 838;
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
		this.enterRule(_localctx, 90, FlinkSQLParser.RULE_partitionDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 840;
			this.match(FlinkSQLParser.KW_PARTITIONED);
			this.state = 841;
			this.match(FlinkSQLParser.KW_BY);
			this.state = 842;
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
		this.enterRule(_localctx, 92, FlinkSQLParser.RULE_transformList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 844;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 845;
			this.transform();
			this.state = 850;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 846;
				this.match(FlinkSQLParser.COMMA);
				this.state = 847;
				this.transform();
				}
				}
				this.state = 852;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 853;
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
		this.enterRule(_localctx, 94, FlinkSQLParser.RULE_transform);
		let _la: number;
		try {
			this.state = 868;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				_localctx = new IdentityTransformContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 855;
				this.qualifiedName();
				}
				break;

			case 2:
				_localctx = new ApplyTransformContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 856;
				(_localctx as ApplyTransformContext)._transformName = this.identifier();
				this.state = 857;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 858;
				this.transformArgument();
				this.state = 863;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 859;
					this.match(FlinkSQLParser.COMMA);
					this.state = 860;
					this.transformArgument();
					}
					}
					this.state = 865;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 866;
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
		this.enterRule(_localctx, 96, FlinkSQLParser.RULE_transformArgument);
		try {
			this.state = 872;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 870;
				this.qualifiedName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 871;
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
		this.enterRule(_localctx, 98, FlinkSQLParser.RULE_likeDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 874;
			this.match(FlinkSQLParser.KW_LIKE);
			this.state = 875;
			this.tablePath();
			this.state = 884;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.LR_BRACKET) {
				{
				this.state = 876;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 880;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.KW_EXCLUDING || _la === FlinkSQLParser.KW_OVERWRITING || _la === FlinkSQLParser.KW_INCLUDING) {
					{
					{
					this.state = 877;
					this.likeOption();
					}
					}
					this.state = 882;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 883;
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
		this.enterRule(_localctx, 100, FlinkSQLParser.RULE_likeOption);
		let _la: number;
		try {
			this.state = 890;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 886;
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
				this.state = 887;
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
				this.state = 888;
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
				this.state = 889;
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
		this.enterRule(_localctx, 102, FlinkSQLParser.RULE_createCatalog);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 892;
			this.match(FlinkSQLParser.KW_CREATE);
			this.state = 893;
			this.match(FlinkSQLParser.KW_CATALOG);
			this.state = 894;
			this.uid();
			this.state = 895;
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
		this.enterRule(_localctx, 104, FlinkSQLParser.RULE_createDatabase);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 897;
			this.match(FlinkSQLParser.KW_CREATE);
			this.state = 898;
			this.match(FlinkSQLParser.KW_DATABASE);
			this.state = 900;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				{
				this.state = 899;
				this.ifNotExists();
				}
				break;
			}
			this.state = 902;
			this.databasePathCreate();
			this.state = 904;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_COMMENT) {
				{
				this.state = 903;
				this.commentSpec();
				}
			}

			this.state = 907;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_WITH) {
				{
				this.state = 906;
				this.withOption();
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
	public createView(): CreateViewContext {
		let _localctx: CreateViewContext = new CreateViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, FlinkSQLParser.RULE_createView);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 909;
			this.match(FlinkSQLParser.KW_CREATE);
			this.state = 911;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_TEMPORARY) {
				{
				this.state = 910;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				}
			}

			this.state = 913;
			this.match(FlinkSQLParser.KW_VIEW);
			this.state = 915;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				{
				this.state = 914;
				this.ifNotExists();
				}
				break;
			}
			this.state = 917;
			this.uid();
			this.state = 919;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.LR_BRACKET) {
				{
				this.state = 918;
				this.columnNameList();
				}
			}

			this.state = 922;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_COMMENT) {
				{
				this.state = 921;
				this.commentSpec();
				}
			}

			this.state = 924;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 925;
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
		this.enterRule(_localctx, 108, FlinkSQLParser.RULE_createFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 927;
			this.match(FlinkSQLParser.KW_CREATE);
			this.state = 931;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				{
				this.state = 928;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				}
				break;

			case 2:
				{
				this.state = 929;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				this.state = 930;
				this.match(FlinkSQLParser.KW_SYSTEM);
				}
				break;
			}
			this.state = 933;
			this.match(FlinkSQLParser.KW_FUNCTION);
			this.state = 935;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				{
				this.state = 934;
				this.ifNotExists();
				}
				break;
			}
			this.state = 937;
			this.functionName();
			this.state = 938;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 939;
			this.identifier();
			this.state = 942;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_LANGUAGE) {
				{
				this.state = 940;
				this.match(FlinkSQLParser.KW_LANGUAGE);
				this.state = 941;
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

			this.state = 945;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_USING) {
				{
				this.state = 944;
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
		this.enterRule(_localctx, 110, FlinkSQLParser.RULE_usingClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 947;
			this.match(FlinkSQLParser.KW_USING);
			this.state = 948;
			this.match(FlinkSQLParser.KW_JAR);
			this.state = 949;
			this.jarFileName();
			this.state = 955;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 950;
				this.match(FlinkSQLParser.COMMA);
				this.state = 951;
				this.match(FlinkSQLParser.KW_JAR);
				this.state = 952;
				this.jarFileName();
				}
				}
				this.state = 957;
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
		this.enterRule(_localctx, 112, FlinkSQLParser.RULE_jarFileName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 958;
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
		this.enterRule(_localctx, 114, FlinkSQLParser.RULE_alterTable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 960;
			this.match(FlinkSQLParser.KW_ALTER);
			this.state = 961;
			this.match(FlinkSQLParser.KW_TABLE);
			this.state = 963;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
			case 1:
				{
				this.state = 962;
				this.ifExists();
				}
				break;
			}
			this.state = 965;
			this.tablePath();
			this.state = 971;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				{
				this.state = 966;
				this.renameDefinition();
				}
				break;

			case 2:
				{
				this.state = 967;
				this.setKeyValueDefinition();
				}
				break;

			case 3:
				{
				this.state = 968;
				this.addConstraint();
				}
				break;

			case 4:
				{
				this.state = 969;
				this.dropConstraint();
				}
				break;

			case 5:
				{
				this.state = 970;
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
		this.enterRule(_localctx, 116, FlinkSQLParser.RULE_renameDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 973;
			this.match(FlinkSQLParser.KW_RENAME);
			this.state = 975;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSQLParser.T__0) | (1 << FlinkSQLParser.KW_ADD) | (1 << FlinkSQLParser.KW_ADMIN) | (1 << FlinkSQLParser.KW_AFTER) | (1 << FlinkSQLParser.KW_ANALYZE) | (1 << FlinkSQLParser.KW_ASC) | (1 << FlinkSQLParser.KW_BEFORE) | (1 << FlinkSQLParser.KW_BYTES) | (1 << FlinkSQLParser.KW_CASCADE) | (1 << FlinkSQLParser.KW_CATALOG) | (1 << FlinkSQLParser.KW_CATALOGS) | (1 << FlinkSQLParser.KW_CENTURY) | (1 << FlinkSQLParser.KW_CHAIN) | (1 << FlinkSQLParser.KW_CHANGELOG_MODE) | (1 << FlinkSQLParser.KW_CHARACTERS) | (1 << FlinkSQLParser.KW_COMMENT) | (1 << FlinkSQLParser.KW_COMPACT) | (1 << FlinkSQLParser.KW_COLUMNS) | (1 << FlinkSQLParser.KW_CONSTRAINTS) | (1 << FlinkSQLParser.KW_CONSTRUCTOR) | (1 << FlinkSQLParser.KW_CUMULATE) | (1 << FlinkSQLParser.KW_DATA) | (1 << FlinkSQLParser.KW_DATABASE) | (1 << FlinkSQLParser.KW_DATABASES) | (1 << FlinkSQLParser.KW_DAYS) | (1 << FlinkSQLParser.KW_DECADE) | (1 << FlinkSQLParser.KW_DEFINED) | (1 << FlinkSQLParser.KW_DESC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSQLParser.KW_DESCRIPTOR - 32)) | (1 << (FlinkSQLParser.KW_DIV - 32)) | (1 << (FlinkSQLParser.KW_ENCODING - 32)) | (1 << (FlinkSQLParser.KW_ENFORCED - 32)) | (1 << (FlinkSQLParser.KW_ENGINE - 32)) | (1 << (FlinkSQLParser.KW_ERROR - 32)) | (1 << (FlinkSQLParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSQLParser.KW_EXCEPTION - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDE - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDING - 32)) | (1 << (FlinkSQLParser.KW_EXTENDED - 32)) | (1 << (FlinkSQLParser.KW_FILE - 32)) | (1 << (FlinkSQLParser.KW_FINAL - 32)) | (1 << (FlinkSQLParser.KW_FIRST - 32)) | (1 << (FlinkSQLParser.KW_FOLLOWING - 32)) | (1 << (FlinkSQLParser.KW_FORMAT - 32)) | (1 << (FlinkSQLParser.KW_FORTRAN - 32)) | (1 << (FlinkSQLParser.KW_FOUND - 32)) | (1 << (FlinkSQLParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSQLParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSQLParser.KW_GENERAL - 32)) | (1 << (FlinkSQLParser.KW_GENERATED - 32)) | (1 << (FlinkSQLParser.KW_GO - 32)) | (1 << (FlinkSQLParser.KW_GOTO - 32)) | (1 << (FlinkSQLParser.KW_GRANTED - 32)) | (1 << (FlinkSQLParser.KW_HOP - 32)) | (1 << (FlinkSQLParser.KW_HOURS - 32)) | (1 << (FlinkSQLParser.KW_IF - 32)) | (1 << (FlinkSQLParser.KW_IGNORE - 32)) | (1 << (FlinkSQLParser.KW_INCREMENT - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSQLParser.KW_INPUT - 64)) | (1 << (FlinkSQLParser.KW_INVOKER - 64)) | (1 << (FlinkSQLParser.KW_JAR - 64)) | (1 << (FlinkSQLParser.KW_JARS - 64)) | (1 << (FlinkSQLParser.KW_JAVA - 64)) | (1 << (FlinkSQLParser.KW_JSON - 64)) | (1 << (FlinkSQLParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSQLParser.KW_KEY - 64)) | (1 << (FlinkSQLParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSQLParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSQLParser.KW_LABEL - 64)) | (1 << (FlinkSQLParser.KW_LAST - 64)) | (1 << (FlinkSQLParser.KW_LENGTH - 64)) | (1 << (FlinkSQLParser.KW_LEVEL - 64)) | (1 << (FlinkSQLParser.KW_LOAD - 64)) | (1 << (FlinkSQLParser.KW_MAP - 64)) | (1 << (FlinkSQLParser.KW_MICROSECOND - 64)) | (1 << (FlinkSQLParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSQLParser.KW_MILLISECOND - 64)) | (1 << (FlinkSQLParser.KW_MINUTES - 64)) | (1 << (FlinkSQLParser.KW_MINVALUE - 64)) | (1 << (FlinkSQLParser.KW_MODIFY - 64)) | (1 << (FlinkSQLParser.KW_MODULES - 64)) | (1 << (FlinkSQLParser.KW_MONTHS - 64)) | (1 << (FlinkSQLParser.KW_NANOSECOND - 64)) | (1 << (FlinkSQLParser.KW_NULLS - 64)) | (1 << (FlinkSQLParser.KW_NUMBER - 64)) | (1 << (FlinkSQLParser.KW_OPTION - 64)) | (1 << (FlinkSQLParser.KW_OPTIONS - 64)) | (1 << (FlinkSQLParser.KW_ORDERING - 64)) | (1 << (FlinkSQLParser.KW_OUTPUT - 64)) | (1 << (FlinkSQLParser.KW_OVERWRITE - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSQLParser.KW_OVERWRITING - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONED - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONS - 96)) | (1 << (FlinkSQLParser.KW_PASSING - 96)) | (1 << (FlinkSQLParser.KW_PAST - 96)) | (1 << (FlinkSQLParser.KW_PATH - 96)) | (1 << (FlinkSQLParser.KW_PLACING - 96)) | (1 << (FlinkSQLParser.KW_PLAN - 96)) | (1 << (FlinkSQLParser.KW_PRECEDING - 96)) | (1 << (FlinkSQLParser.KW_PRESERVE - 96)) | (1 << (FlinkSQLParser.KW_PRIOR - 96)) | (1 << (FlinkSQLParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSQLParser.KW_PUBLIC - 96)) | (1 << (FlinkSQLParser.KW_PYTHON - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSQLParser.KW_QUARTER - 96)) | (1 << (FlinkSQLParser.KW_RAW - 96)) | (1 << (FlinkSQLParser.KW_READ - 96)) | (1 << (FlinkSQLParser.KW_RELATIVE - 96)) | (1 << (FlinkSQLParser.KW_REMOVE - 96)) | (1 << (FlinkSQLParser.KW_RENAME - 96)) | (1 << (FlinkSQLParser.KW_REPLACE - 96)) | (1 << (FlinkSQLParser.KW_RESPECT - 96)) | (1 << (FlinkSQLParser.KW_RESTART - 96)) | (1 << (FlinkSQLParser.KW_RESTRICT - 96)) | (1 << (FlinkSQLParser.KW_ROLE - 96)) | (1 << (FlinkSQLParser.KW_ROW_COUNT - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSQLParser.KW_SCALA - 128)) | (1 << (FlinkSQLParser.KW_SCALAR - 128)) | (1 << (FlinkSQLParser.KW_SCALE - 128)) | (1 << (FlinkSQLParser.KW_SCHEMA - 128)) | (1 << (FlinkSQLParser.KW_SECONDS - 128)) | (1 << (FlinkSQLParser.KW_SECTION - 128)) | (1 << (FlinkSQLParser.KW_SECURITY - 128)) | (1 << (FlinkSQLParser.KW_SELF - 128)) | (1 << (FlinkSQLParser.KW_SERVER - 128)) | (1 << (FlinkSQLParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSQLParser.KW_SESSION - 128)) | (1 << (FlinkSQLParser.KW_SETS - 128)) | (1 << (FlinkSQLParser.KW_SIMPLE - 128)) | (1 << (FlinkSQLParser.KW_SIZE - 128)) | (1 << (FlinkSQLParser.KW_SLIDE - 128)) | (1 << (FlinkSQLParser.KW_SOURCE - 128)) | (1 << (FlinkSQLParser.KW_SPACE - 128)) | (1 << (FlinkSQLParser.KW_STATE - 128)) | (1 << (FlinkSQLParser.KW_STATEMENT - 128)) | (1 << (FlinkSQLParser.KW_STEP - 128)) | (1 << (FlinkSQLParser.KW_STRING - 128)) | (1 << (FlinkSQLParser.KW_STRUCTURE - 128)) | (1 << (FlinkSQLParser.KW_STYLE - 128)) | (1 << (FlinkSQLParser.KW_TABLES - 128)) | (1 << (FlinkSQLParser.KW_TEMPORARY - 128)) | (1 << (FlinkSQLParser.KW_TIMECOL - 128)) | (1 << (FlinkSQLParser.KW_FLOOR - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_LTZ - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPADD - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPDIFF - 128)) | (1 << (FlinkSQLParser.KW_TRANSFORM - 128)) | (1 << (FlinkSQLParser.KW_TUMBLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSQLParser.KW_TYPE - 160)) | (1 << (FlinkSQLParser.KW_UNDER - 160)) | (1 << (FlinkSQLParser.KW_UNLOAD - 160)) | (1 << (FlinkSQLParser.KW_USAGE - 160)) | (1 << (FlinkSQLParser.KW_USE - 160)) | (1 << (FlinkSQLParser.KW_UTF16 - 160)) | (1 << (FlinkSQLParser.KW_UTF32 - 160)) | (1 << (FlinkSQLParser.KW_UTF8 - 160)) | (1 << (FlinkSQLParser.KW_VERSION - 160)) | (1 << (FlinkSQLParser.KW_VIEW - 160)) | (1 << (FlinkSQLParser.KW_VIEWS - 160)) | (1 << (FlinkSQLParser.KW_VIRTUAL - 160)) | (1 << (FlinkSQLParser.KW_WATERMARK - 160)) | (1 << (FlinkSQLParser.KW_WATERMARKS - 160)) | (1 << (FlinkSQLParser.KW_WEEK - 160)) | (1 << (FlinkSQLParser.KW_WORK - 160)) | (1 << (FlinkSQLParser.KW_WRAPPER - 160)) | (1 << (FlinkSQLParser.KW_YEARS - 160)) | (1 << (FlinkSQLParser.KW_ZONE - 160)))) !== 0) || ((((_la - 411)) & ~0x1F) === 0 && ((1 << (_la - 411)) & ((1 << (FlinkSQLParser.STRING_LITERAL - 411)) | (1 << (FlinkSQLParser.DIG_LITERAL - 411)) | (1 << (FlinkSQLParser.ID_LITERAL - 411)))) !== 0)) {
				{
				this.state = 974;
				this.uid();
				}
			}

			this.state = 977;
			this.match(FlinkSQLParser.KW_TO);
			this.state = 978;
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
		this.enterRule(_localctx, 118, FlinkSQLParser.RULE_setKeyValueDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 980;
			this.match(FlinkSQLParser.KW_SET);
			this.state = 981;
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
		this.enterRule(_localctx, 120, FlinkSQLParser.RULE_addConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 983;
			this.match(FlinkSQLParser.KW_ADD);
			this.state = 984;
			this.match(FlinkSQLParser.KW_CONSTRAINT);
			this.state = 985;
			this.constraintName();
			this.state = 986;
			this.match(FlinkSQLParser.KW_PRIMARY);
			this.state = 987;
			this.match(FlinkSQLParser.KW_KEY);
			this.state = 988;
			this.columnNameList();
			this.state = 990;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_NOT) {
				{
				this.state = 989;
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
		this.enterRule(_localctx, 122, FlinkSQLParser.RULE_dropConstraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 992;
			this.match(FlinkSQLParser.KW_DROP);
			this.state = 993;
			this.match(FlinkSQLParser.KW_CONSTRAINT);
			this.state = 994;
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
		this.enterRule(_localctx, 124, FlinkSQLParser.RULE_addUnique);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 996;
			this.match(FlinkSQLParser.KW_ADD);
			this.state = 997;
			this.match(FlinkSQLParser.KW_UNIQUE);
			this.state = 998;
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
		this.enterRule(_localctx, 126, FlinkSQLParser.RULE_notForced);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1000;
			this.match(FlinkSQLParser.KW_NOT);
			this.state = 1001;
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
		this.enterRule(_localctx, 128, FlinkSQLParser.RULE_alertView);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1003;
			this.match(FlinkSQLParser.KW_ALTER);
			this.state = 1004;
			this.match(FlinkSQLParser.KW_VIEW);
			this.state = 1005;
			this.uid();
			this.state = 1009;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_RENAME:
				{
				this.state = 1006;
				this.renameDefinition();
				}
				break;
			case FlinkSQLParser.KW_AS:
				{
				this.state = 1007;
				this.match(FlinkSQLParser.KW_AS);
				this.state = 1008;
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
		this.enterRule(_localctx, 130, FlinkSQLParser.RULE_alterDatabase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1011;
			this.match(FlinkSQLParser.KW_ALTER);
			this.state = 1012;
			this.match(FlinkSQLParser.KW_DATABASE);
			this.state = 1013;
			this.databasePath();
			this.state = 1014;
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
		this.enterRule(_localctx, 132, FlinkSQLParser.RULE_alterFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1016;
			this.match(FlinkSQLParser.KW_ALTER);
			this.state = 1020;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				{
				this.state = 1017;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				}
				break;

			case 2:
				{
				this.state = 1018;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				this.state = 1019;
				this.match(FlinkSQLParser.KW_SYSTEM);
				}
				break;
			}
			this.state = 1022;
			this.match(FlinkSQLParser.KW_FUNCTION);
			this.state = 1024;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				{
				this.state = 1023;
				this.ifExists();
				}
				break;
			}
			this.state = 1026;
			this.uid();
			this.state = 1027;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 1028;
			this.identifier();
			this.state = 1031;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_LANGUAGE) {
				{
				this.state = 1029;
				this.match(FlinkSQLParser.KW_LANGUAGE);
				this.state = 1030;
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
		this.enterRule(_localctx, 134, FlinkSQLParser.RULE_dropCatalog);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1033;
			this.match(FlinkSQLParser.KW_DROP);
			this.state = 1034;
			this.match(FlinkSQLParser.KW_CATALOG);
			this.state = 1036;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				{
				this.state = 1035;
				this.ifExists();
				}
				break;
			}
			this.state = 1038;
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
		this.enterRule(_localctx, 136, FlinkSQLParser.RULE_dropTable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1040;
			this.match(FlinkSQLParser.KW_DROP);
			this.state = 1042;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_TEMPORARY) {
				{
				this.state = 1041;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				}
			}

			this.state = 1044;
			this.match(FlinkSQLParser.KW_TABLE);
			this.state = 1046;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				{
				this.state = 1045;
				this.ifExists();
				}
				break;
			}
			this.state = 1048;
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
		this.enterRule(_localctx, 138, FlinkSQLParser.RULE_dropDatabase);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1050;
			this.match(FlinkSQLParser.KW_DROP);
			this.state = 1051;
			this.match(FlinkSQLParser.KW_DATABASE);
			this.state = 1053;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				{
				this.state = 1052;
				this.ifExists();
				}
				break;
			}
			this.state = 1055;
			this.databasePath();
			this.state = 1057;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_CASCADE || _la === FlinkSQLParser.KW_RESTRICT) {
				{
				this.state = 1056;
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
		this.enterRule(_localctx, 140, FlinkSQLParser.RULE_dropView);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1059;
			this.match(FlinkSQLParser.KW_DROP);
			this.state = 1061;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_TEMPORARY) {
				{
				this.state = 1060;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				}
			}

			this.state = 1063;
			this.match(FlinkSQLParser.KW_VIEW);
			this.state = 1065;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				{
				this.state = 1064;
				this.ifExists();
				}
				break;
			}
			this.state = 1067;
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
		this.enterRule(_localctx, 142, FlinkSQLParser.RULE_dropFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1069;
			this.match(FlinkSQLParser.KW_DROP);
			this.state = 1073;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				{
				this.state = 1070;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				}
				break;

			case 2:
				{
				this.state = 1071;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				this.state = 1072;
				this.match(FlinkSQLParser.KW_SYSTEM);
				}
				break;
			}
			this.state = 1075;
			this.match(FlinkSQLParser.KW_FUNCTION);
			this.state = 1077;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				{
				this.state = 1076;
				this.ifExists();
				}
				break;
			}
			this.state = 1079;
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
		this.enterRule(_localctx, 144, FlinkSQLParser.RULE_insertStatement);
		let _la: number;
		try {
			this.state = 1088;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 1082;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_EXECUTE) {
					{
					this.state = 1081;
					this.match(FlinkSQLParser.KW_EXECUTE);
					}
				}

				this.state = 1084;
				this.insertSimpleStatement();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1085;
				this.insertMulStatementCompatibility();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 1086;
				this.match(FlinkSQLParser.KW_EXECUTE);
				this.state = 1087;
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
		this.enterRule(_localctx, 146, FlinkSQLParser.RULE_insertSimpleStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1090;
			this.match(FlinkSQLParser.KW_INSERT);
			this.state = 1091;
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
			this.state = 1092;
			this.tablePath();
			this.state = 1101;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				{
				this.state = 1094;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_PARTITION) {
					{
					this.state = 1093;
					this.insertPartitionDefinition();
					}
				}

				this.state = 1097;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
				case 1:
					{
					this.state = 1096;
					this.columnNameList();
					}
					break;
				}
				this.state = 1099;
				this.queryStatement(0);
				}
				break;

			case 2:
				{
				this.state = 1100;
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
		this.enterRule(_localctx, 148, FlinkSQLParser.RULE_insertPartitionDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1103;
			this.match(FlinkSQLParser.KW_PARTITION);
			this.state = 1104;
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
		this.enterRule(_localctx, 150, FlinkSQLParser.RULE_valuesDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1106;
			this.match(FlinkSQLParser.KW_VALUES);
			this.state = 1107;
			this.valuesRowDefinition();
			this.state = 1112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1108;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1109;
				this.valuesRowDefinition();
				}
				}
				this.state = 1114;
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
		this.enterRule(_localctx, 152, FlinkSQLParser.RULE_valuesRowDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1115;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1116;
			this.constant();
			this.state = 1121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1117;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1118;
				this.constant();
				}
				}
				this.state = 1123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1124;
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
		this.enterRule(_localctx, 154, FlinkSQLParser.RULE_insertMulStatementCompatibility);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1126;
			this.match(FlinkSQLParser.KW_BEGIN);
			this.state = 1127;
			this.match(FlinkSQLParser.KW_STATEMENT);
			this.state = 1128;
			this.match(FlinkSQLParser.KW_SET);
			this.state = 1129;
			this.match(FlinkSQLParser.SEMICOLON);
			this.state = 1133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1130;
				this.insertSimpleStatement();
				this.state = 1131;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				}
				this.state = 1135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FlinkSQLParser.KW_INSERT);
			this.state = 1137;
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
		this.enterRule(_localctx, 156, FlinkSQLParser.RULE_insertMulStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1139;
			this.match(FlinkSQLParser.KW_STATEMENT);
			this.state = 1140;
			this.match(FlinkSQLParser.KW_SET);
			this.state = 1141;
			this.match(FlinkSQLParser.KW_BEGIN);
			this.state = 1145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1142;
				this.insertSimpleStatement();
				this.state = 1143;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				}
				this.state = 1147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FlinkSQLParser.KW_INSERT);
			this.state = 1149;
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
		let _startState: number = 158;
		this.enterRecursionRule(_localctx, 158, FlinkSQLParser.RULE_queryStatement, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1174;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				{
				this.state = 1152;
				this.valuesCaluse();
				}
				break;

			case 2:
				{
				this.state = 1153;
				this.withClause();
				this.state = 1154;
				this.queryStatement(5);
				}
				break;

			case 3:
				{
				this.state = 1156;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1157;
				this.queryStatement(0);
				this.state = 1158;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 4:
				{
				this.state = 1160;
				this.selectClause();
				this.state = 1162;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
				case 1:
					{
					this.state = 1161;
					this.orderByCaluse();
					}
					break;
				}
				this.state = 1165;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
				case 1:
					{
					this.state = 1164;
					this.limitClause();
					}
					break;
				}
				}
				break;

			case 5:
				{
				this.state = 1167;
				this.selectStatement();
				this.state = 1169;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
				case 1:
					{
					this.state = 1168;
					this.orderByCaluse();
					}
					break;
				}
				this.state = 1172;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
				case 1:
					{
					this.state = 1171;
					this.limitClause();
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1190;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
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
					this.state = 1176;
					if (!(this.precpred(this._ctx, 3))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
					}
					this.state = 1177;
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
					this.state = 1179;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSQLParser.KW_ALL) {
						{
						this.state = 1178;
						this.match(FlinkSQLParser.KW_ALL);
						}
					}

					this.state = 1181;
					_localctx._right = this.queryStatement(0);
					this.state = 1183;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
					case 1:
						{
						this.state = 1182;
						this.orderByCaluse();
						}
						break;
					}
					this.state = 1186;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
					case 1:
						{
						this.state = 1185;
						this.limitClause();
						}
						break;
					}
					}
					}
				}
				this.state = 1192;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
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
		this.enterRule(_localctx, 160, FlinkSQLParser.RULE_valuesCaluse);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1193;
			this.match(FlinkSQLParser.KW_VALUES);
			this.state = 1194;
			this.expression();
			this.state = 1199;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1195;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1196;
					this.expression();
					}
					}
				}
				this.state = 1201;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
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
		this.enterRule(_localctx, 162, FlinkSQLParser.RULE_withClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1202;
			this.match(FlinkSQLParser.KW_WITH);
			this.state = 1203;
			this.withItem();
			this.state = 1208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1204;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1205;
				this.withItem();
				}
				}
				this.state = 1210;
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
		this.enterRule(_localctx, 164, FlinkSQLParser.RULE_withItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1211;
			this.withItemName();
			this.state = 1223;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.LR_BRACKET) {
				{
				this.state = 1212;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1213;
				this.columnName();
				this.state = 1218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1214;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1215;
					this.columnName();
					}
					}
					this.state = 1220;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1221;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
			}

			this.state = 1225;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 1226;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1227;
			this.queryStatement(0);
			this.state = 1228;
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
		this.enterRule(_localctx, 166, FlinkSQLParser.RULE_withItemName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1230;
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
		this.enterRule(_localctx, 168, FlinkSQLParser.RULE_selectStatement);
		try {
			this.state = 1250;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 130, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1232;
				this.selectClause();
				this.state = 1233;
				this.fromClause();
				this.state = 1235;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
				case 1:
					{
					this.state = 1234;
					this.whereClause();
					}
					break;
				}
				this.state = 1238;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
				case 1:
					{
					this.state = 1237;
					this.groupByClause();
					}
					break;
				}
				this.state = 1241;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
				case 1:
					{
					this.state = 1240;
					this.havingClause();
					}
					break;
				}
				this.state = 1244;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
				case 1:
					{
					this.state = 1243;
					this.windowClause();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1246;
				this.selectClause();
				this.state = 1247;
				this.fromClause();
				this.state = 1248;
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
		this.enterRule(_localctx, 170, FlinkSQLParser.RULE_selectClause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1252;
			this.match(FlinkSQLParser.KW_SELECT);
			this.state = 1254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_ALL || _la === FlinkSQLParser.KW_DISTINCT) {
				{
				this.state = 1253;
				this.setQuantifier();
				}
			}

			this.state = 1265;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 133, this._ctx) ) {
			case 1:
				{
				this.state = 1256;
				this.match(FlinkSQLParser.ASTERISK_SIGN);
				}
				break;

			case 2:
				{
				this.state = 1257;
				this.projectItemDefinition();
				this.state = 1262;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1258;
						this.match(FlinkSQLParser.COMMA);
						this.state = 1259;
						this.projectItemDefinition();
						}
						}
					}
					this.state = 1264;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
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
		this.enterRule(_localctx, 172, FlinkSQLParser.RULE_projectItemDefinition);
		let _la: number;
		try {
			this.state = 1275;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1267;
				this.overWindowItem();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1268;
				this.expression();
				this.state = 1273;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
				case 1:
					{
					this.state = 1270;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSQLParser.KW_AS) {
						{
						this.state = 1269;
						this.match(FlinkSQLParser.KW_AS);
						}
					}

					this.state = 1272;
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
		this.enterRule(_localctx, 174, FlinkSQLParser.RULE_overWindowItem);
		try {
			this.state = 1289;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 137, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1277;
				this.primaryExpression(0);
				this.state = 1278;
				this.match(FlinkSQLParser.KW_OVER);
				this.state = 1279;
				this.windowSpec();
				this.state = 1280;
				this.match(FlinkSQLParser.KW_AS);
				this.state = 1281;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1283;
				this.primaryExpression(0);
				this.state = 1284;
				this.match(FlinkSQLParser.KW_OVER);
				this.state = 1285;
				this.errorCapturingIdentifier();
				this.state = 1286;
				this.match(FlinkSQLParser.KW_AS);
				this.state = 1287;
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
		this.enterRule(_localctx, 176, FlinkSQLParser.RULE_fromClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1291;
			this.match(FlinkSQLParser.KW_FROM);
			this.state = 1292;
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
		let _startState: number = 178;
		this.enterRecursionRule(_localctx, 178, FlinkSQLParser.RULE_tableExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1305;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
			case 1:
				{
				this.state = 1295;
				this.tableReference();
				this.state = 1300;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1296;
						this.match(FlinkSQLParser.COMMA);
						this.state = 1297;
						this.tableReference();
						}
						}
					}
					this.state = 1302;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
				}
				}
				break;

			case 2:
				{
				this.state = 1303;
				this.inlineDataValueClause();
				}
				break;

			case 3:
				{
				this.state = 1304;
				this.windoTVFClause();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1350;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1348;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 149, this._ctx) ) {
					case 1:
						{
						_localctx = new TableExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_tableExpression);
						this.state = 1307;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1308;
						this.match(FlinkSQLParser.KW_CROSS);
						this.state = 1309;
						this.match(FlinkSQLParser.KW_JOIN);
						this.state = 1310;
						this.tableExpression(4);
						}
						break;

					case 2:
						{
						_localctx = new TableExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_tableExpression);
						this.state = 1311;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1313;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FlinkSQLParser.KW_NATURAL) {
							{
							this.state = 1312;
							this.match(FlinkSQLParser.KW_NATURAL);
							}
						}

						this.state = 1316;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & ((1 << (FlinkSQLParser.KW_FULL - 256)) | (1 << (FlinkSQLParser.KW_INNER - 256)) | (1 << (FlinkSQLParser.KW_LEFT - 256)))) !== 0) || _la === FlinkSQLParser.KW_RIGHT) {
							{
							this.state = 1315;
							_la = this._input.LA(1);
							if (!(((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & ((1 << (FlinkSQLParser.KW_FULL - 256)) | (1 << (FlinkSQLParser.KW_INNER - 256)) | (1 << (FlinkSQLParser.KW_LEFT - 256)))) !== 0) || _la === FlinkSQLParser.KW_RIGHT)) {
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

						this.state = 1319;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FlinkSQLParser.KW_OUTER) {
							{
							this.state = 1318;
							this.match(FlinkSQLParser.KW_OUTER);
							}
						}

						this.state = 1321;
						this.match(FlinkSQLParser.KW_JOIN);
						this.state = 1322;
						this.tableExpression(0);
						this.state = 1324;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
						case 1:
							{
							this.state = 1323;
							this.joinCondition();
							}
							break;
						}
						}
						break;

					case 3:
						{
						_localctx = new TableExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_tableExpression);
						this.state = 1326;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1328;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FlinkSQLParser.KW_NATURAL) {
							{
							this.state = 1327;
							this.match(FlinkSQLParser.KW_NATURAL);
							}
						}

						this.state = 1331;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & ((1 << (FlinkSQLParser.KW_FULL - 256)) | (1 << (FlinkSQLParser.KW_INNER - 256)) | (1 << (FlinkSQLParser.KW_LEFT - 256)))) !== 0) || _la === FlinkSQLParser.KW_RIGHT) {
							{
							this.state = 1330;
							_la = this._input.LA(1);
							if (!(((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & ((1 << (FlinkSQLParser.KW_FULL - 256)) | (1 << (FlinkSQLParser.KW_INNER - 256)) | (1 << (FlinkSQLParser.KW_LEFT - 256)))) !== 0) || _la === FlinkSQLParser.KW_RIGHT)) {
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

						this.state = 1334;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FlinkSQLParser.KW_OUTER) {
							{
							this.state = 1333;
							this.match(FlinkSQLParser.KW_OUTER);
							}
						}

						this.state = 1336;
						this.match(FlinkSQLParser.KW_JOIN);
						this.state = 1337;
						this.tableExpression(0);
						this.state = 1339;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 147, this._ctx) ) {
						case 1:
							{
							this.state = 1338;
							this.joinCondition();
							}
							break;
						}
						this.state = 1345;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 1341;
								this.match(FlinkSQLParser.COMMA);
								this.state = 1342;
								this.tableReference();
								}
								}
							}
							this.state = 1347;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
						}
						}
						break;
					}
					}
				}
				this.state = 1352;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
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
		this.enterRule(_localctx, 180, FlinkSQLParser.RULE_tableReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1353;
			this.tablePrimary();
			this.state = 1355;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 151, this._ctx) ) {
			case 1:
				{
				this.state = 1354;
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
		this.enterRule(_localctx, 182, FlinkSQLParser.RULE_tablePrimary);
		let _la: number;
		try {
			this.state = 1426;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 160, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1358;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_TABLE) {
					{
					this.state = 1357;
					this.match(FlinkSQLParser.KW_TABLE);
					}
				}

				this.state = 1360;
				this.tablePath();
				this.state = 1362;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 153, this._ctx) ) {
				case 1:
					{
					this.state = 1361;
					this.systemTimePeriod();
					}
					break;
				}
				this.state = 1368;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 155, this._ctx) ) {
				case 1:
					{
					this.state = 1365;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSQLParser.KW_AS) {
						{
						this.state = 1364;
						this.match(FlinkSQLParser.KW_AS);
						}
					}

					this.state = 1367;
					this.correlationName();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1370;
				this.match(FlinkSQLParser.KW_LATERAL);
				this.state = 1371;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 1372;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1373;
				this.functionName();
				this.state = 1374;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1375;
				this.functionParam();
				this.state = 1380;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1376;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1377;
					this.functionParam();
					}
					}
					this.state = 1382;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1383;
				this.match(FlinkSQLParser.RR_BRACKET);
				this.state = 1384;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1387;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_LATERAL) {
					{
					this.state = 1386;
					this.match(FlinkSQLParser.KW_LATERAL);
					}
				}

				this.state = 1389;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1390;
				this.queryStatement(0);
				this.state = 1391;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1393;
				this.match(FlinkSQLParser.KW_LATERAL);
				this.state = 1394;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 1395;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1396;
				this.functionName();
				this.state = 1397;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1398;
				this.functionParam();
				this.state = 1403;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1399;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1400;
					this.functionParam();
					}
					}
					this.state = 1405;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1406;
				this.match(FlinkSQLParser.RR_BRACKET);
				this.state = 1407;
				this.match(FlinkSQLParser.RR_BRACKET);
				this.state = 1408;
				this.match(FlinkSQLParser.KW_AS);
				this.state = 1409;
				this.tableAlias();
				this.state = 1410;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1411;
				this.projectItemDefinition();
				this.state = 1416;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1412;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1413;
					this.projectItemDefinition();
					}
					}
					this.state = 1418;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1419;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1421;
				this.match(FlinkSQLParser.KW_UNNEST);
				this.state = 1422;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1423;
				this.expression();
				this.state = 1424;
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
		this.enterRule(_localctx, 184, FlinkSQLParser.RULE_systemTimePeriod);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1428;
			this.match(FlinkSQLParser.KW_FOR);
			this.state = 1429;
			this.match(FlinkSQLParser.KW_SYSTEM_TIME);
			this.state = 1430;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 1431;
			this.match(FlinkSQLParser.KW_OF);
			this.state = 1432;
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
		this.enterRule(_localctx, 186, FlinkSQLParser.RULE_dateTimeExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1434;
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
		this.enterRule(_localctx, 188, FlinkSQLParser.RULE_inlineDataValueClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1436;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1437;
			this.valuesDefinition();
			this.state = 1438;
			this.match(FlinkSQLParser.RR_BRACKET);
			this.state = 1439;
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
		this.enterRule(_localctx, 190, FlinkSQLParser.RULE_windoTVFClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1441;
			this.match(FlinkSQLParser.KW_TABLE);
			this.state = 1442;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1443;
			this.windowTVFExression();
			this.state = 1444;
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
		this.enterRule(_localctx, 192, FlinkSQLParser.RULE_windowTVFExression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1446;
			this.windoTVFName();
			this.state = 1447;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1448;
			this.windowTVFParam();
			this.state = 1453;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1449;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1450;
				this.windowTVFParam();
				}
				}
				this.state = 1455;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1456;
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
		this.enterRule(_localctx, 194, FlinkSQLParser.RULE_windoTVFName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1458;
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
		this.enterRule(_localctx, 196, FlinkSQLParser.RULE_windowTVFParam);
		try {
			this.state = 1475;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 162, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1460;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 1461;
				this.timeAttrColumn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1462;
				this.columnDescriptor();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1463;
				this.timeIntervalExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1464;
				this.match(FlinkSQLParser.KW_DATA);
				this.state = 1465;
				this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
				this.state = 1466;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 1467;
				this.timeAttrColumn();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1468;
				this.match(FlinkSQLParser.KW_TIMECOL);
				this.state = 1469;
				this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
				this.state = 1470;
				this.columnDescriptor();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1471;
				this.timeIntervalParamName();
				this.state = 1472;
				this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
				this.state = 1473;
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
		this.enterRule(_localctx, 198, FlinkSQLParser.RULE_timeIntervalParamName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1477;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.KW_DATA || ((((_la - 141)) & ~0x1F) === 0 && ((1 << (_la - 141)) & ((1 << (FlinkSQLParser.KW_SIZE - 141)) | (1 << (FlinkSQLParser.KW_SLIDE - 141)) | (1 << (FlinkSQLParser.KW_STEP - 141)) | (1 << (FlinkSQLParser.KW_TIMECOL - 141)))) !== 0) || _la === FlinkSQLParser.KW_OFFSET)) {
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
		this.enterRule(_localctx, 200, FlinkSQLParser.RULE_columnDescriptor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1479;
			this.match(FlinkSQLParser.KW_DESCRIPTOR);
			this.state = 1480;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1481;
			this.uid();
			this.state = 1482;
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
		this.enterRule(_localctx, 202, FlinkSQLParser.RULE_joinCondition);
		let _la: number;
		try {
			this.state = 1498;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_ON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1484;
				this.match(FlinkSQLParser.KW_ON);
				this.state = 1485;
				this.booleanExpression(0);
				}
				break;
			case FlinkSQLParser.KW_USING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1486;
				this.match(FlinkSQLParser.KW_USING);
				this.state = 1487;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1488;
				this.uid();
				this.state = 1493;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1489;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1490;
					this.uid();
					}
					}
					this.state = 1495;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1496;
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
		this.enterRule(_localctx, 204, FlinkSQLParser.RULE_whereClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1500;
			this.match(FlinkSQLParser.KW_WHERE);
			this.state = 1501;
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
		this.enterRule(_localctx, 206, FlinkSQLParser.RULE_groupByClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1503;
			this.match(FlinkSQLParser.KW_GROUP);
			this.state = 1504;
			this.match(FlinkSQLParser.KW_BY);
			this.state = 1505;
			this.groupItemDefinition();
			this.state = 1510;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1506;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1507;
					this.groupItemDefinition();
					}
					}
				}
				this.state = 1512;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
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
		this.enterRule(_localctx, 208, FlinkSQLParser.RULE_groupItemDefinition);
		let _la: number;
		try {
			this.state = 1552;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 169, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1513;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1514;
				this.groupWindowFunction();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1515;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1516;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1517;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1518;
				this.expression();
				this.state = 1523;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1519;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1520;
					this.expression();
					}
					}
					this.state = 1525;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1526;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1528;
				this.groupingSetsNotaionName();
				this.state = 1529;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1530;
				this.expression();
				this.state = 1535;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1531;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1532;
					this.expression();
					}
					}
					this.state = 1537;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1538;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1540;
				this.groupingSets();
				this.state = 1541;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1542;
				this.groupItemDefinition();
				this.state = 1547;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1543;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1544;
					this.groupItemDefinition();
					}
					}
					this.state = 1549;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1550;
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
		this.enterRule(_localctx, 210, FlinkSQLParser.RULE_groupingSets);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1554;
			this.match(FlinkSQLParser.KW_GROUPING);
			this.state = 1555;
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
		this.enterRule(_localctx, 212, FlinkSQLParser.RULE_groupingSetsNotaionName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1557;
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
		this.enterRule(_localctx, 214, FlinkSQLParser.RULE_groupWindowFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1559;
			this.groupWindowFunctionName();
			this.state = 1560;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1561;
			this.timeAttrColumn();
			this.state = 1562;
			this.match(FlinkSQLParser.COMMA);
			this.state = 1563;
			this.timeIntervalExpression();
			this.state = 1564;
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
		this.enterRule(_localctx, 216, FlinkSQLParser.RULE_groupWindowFunctionName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1566;
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
		this.enterRule(_localctx, 218, FlinkSQLParser.RULE_timeAttrColumn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1568;
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
		this.enterRule(_localctx, 220, FlinkSQLParser.RULE_havingClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1570;
			this.match(FlinkSQLParser.KW_HAVING);
			this.state = 1571;
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
		this.enterRule(_localctx, 222, FlinkSQLParser.RULE_windowClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1573;
			this.match(FlinkSQLParser.KW_WINDOW);
			this.state = 1574;
			this.namedWindow();
			this.state = 1579;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1575;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1576;
					this.namedWindow();
					}
					}
				}
				this.state = 1581;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
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
		this.enterRule(_localctx, 224, FlinkSQLParser.RULE_namedWindow);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1582;
			_localctx._name = this.errorCapturingIdentifier();
			this.state = 1583;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 1584;
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
		this.enterRule(_localctx, 226, FlinkSQLParser.RULE_windowSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1587;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSQLParser.T__0) | (1 << FlinkSQLParser.KW_ADD) | (1 << FlinkSQLParser.KW_ADMIN) | (1 << FlinkSQLParser.KW_AFTER) | (1 << FlinkSQLParser.KW_ANALYZE) | (1 << FlinkSQLParser.KW_ASC) | (1 << FlinkSQLParser.KW_BEFORE) | (1 << FlinkSQLParser.KW_BYTES) | (1 << FlinkSQLParser.KW_CASCADE) | (1 << FlinkSQLParser.KW_CATALOG) | (1 << FlinkSQLParser.KW_CATALOGS) | (1 << FlinkSQLParser.KW_CENTURY) | (1 << FlinkSQLParser.KW_CHAIN) | (1 << FlinkSQLParser.KW_CHANGELOG_MODE) | (1 << FlinkSQLParser.KW_CHARACTERS) | (1 << FlinkSQLParser.KW_COMMENT) | (1 << FlinkSQLParser.KW_COMPACT) | (1 << FlinkSQLParser.KW_COLUMNS) | (1 << FlinkSQLParser.KW_CONSTRAINTS) | (1 << FlinkSQLParser.KW_CONSTRUCTOR) | (1 << FlinkSQLParser.KW_CUMULATE) | (1 << FlinkSQLParser.KW_DATA) | (1 << FlinkSQLParser.KW_DATABASE) | (1 << FlinkSQLParser.KW_DATABASES) | (1 << FlinkSQLParser.KW_DAYS) | (1 << FlinkSQLParser.KW_DECADE) | (1 << FlinkSQLParser.KW_DEFINED) | (1 << FlinkSQLParser.KW_DESC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSQLParser.KW_DESCRIPTOR - 32)) | (1 << (FlinkSQLParser.KW_DIV - 32)) | (1 << (FlinkSQLParser.KW_ENCODING - 32)) | (1 << (FlinkSQLParser.KW_ENFORCED - 32)) | (1 << (FlinkSQLParser.KW_ENGINE - 32)) | (1 << (FlinkSQLParser.KW_ERROR - 32)) | (1 << (FlinkSQLParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSQLParser.KW_EXCEPTION - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDE - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDING - 32)) | (1 << (FlinkSQLParser.KW_EXTENDED - 32)) | (1 << (FlinkSQLParser.KW_FILE - 32)) | (1 << (FlinkSQLParser.KW_FINAL - 32)) | (1 << (FlinkSQLParser.KW_FIRST - 32)) | (1 << (FlinkSQLParser.KW_FOLLOWING - 32)) | (1 << (FlinkSQLParser.KW_FORMAT - 32)) | (1 << (FlinkSQLParser.KW_FORTRAN - 32)) | (1 << (FlinkSQLParser.KW_FOUND - 32)) | (1 << (FlinkSQLParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSQLParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSQLParser.KW_GENERAL - 32)) | (1 << (FlinkSQLParser.KW_GENERATED - 32)) | (1 << (FlinkSQLParser.KW_GO - 32)) | (1 << (FlinkSQLParser.KW_GOTO - 32)) | (1 << (FlinkSQLParser.KW_GRANTED - 32)) | (1 << (FlinkSQLParser.KW_HOP - 32)) | (1 << (FlinkSQLParser.KW_HOURS - 32)) | (1 << (FlinkSQLParser.KW_IF - 32)) | (1 << (FlinkSQLParser.KW_IGNORE - 32)) | (1 << (FlinkSQLParser.KW_INCREMENT - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSQLParser.KW_INPUT - 64)) | (1 << (FlinkSQLParser.KW_INVOKER - 64)) | (1 << (FlinkSQLParser.KW_JAR - 64)) | (1 << (FlinkSQLParser.KW_JARS - 64)) | (1 << (FlinkSQLParser.KW_JAVA - 64)) | (1 << (FlinkSQLParser.KW_JSON - 64)) | (1 << (FlinkSQLParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSQLParser.KW_KEY - 64)) | (1 << (FlinkSQLParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSQLParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSQLParser.KW_LABEL - 64)) | (1 << (FlinkSQLParser.KW_LAST - 64)) | (1 << (FlinkSQLParser.KW_LENGTH - 64)) | (1 << (FlinkSQLParser.KW_LEVEL - 64)) | (1 << (FlinkSQLParser.KW_LOAD - 64)) | (1 << (FlinkSQLParser.KW_MAP - 64)) | (1 << (FlinkSQLParser.KW_MICROSECOND - 64)) | (1 << (FlinkSQLParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSQLParser.KW_MILLISECOND - 64)) | (1 << (FlinkSQLParser.KW_MINUTES - 64)) | (1 << (FlinkSQLParser.KW_MINVALUE - 64)) | (1 << (FlinkSQLParser.KW_MODIFY - 64)) | (1 << (FlinkSQLParser.KW_MODULES - 64)) | (1 << (FlinkSQLParser.KW_MONTHS - 64)) | (1 << (FlinkSQLParser.KW_NANOSECOND - 64)) | (1 << (FlinkSQLParser.KW_NULLS - 64)) | (1 << (FlinkSQLParser.KW_NUMBER - 64)) | (1 << (FlinkSQLParser.KW_OPTION - 64)) | (1 << (FlinkSQLParser.KW_OPTIONS - 64)) | (1 << (FlinkSQLParser.KW_ORDERING - 64)) | (1 << (FlinkSQLParser.KW_OUTPUT - 64)) | (1 << (FlinkSQLParser.KW_OVERWRITE - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSQLParser.KW_OVERWRITING - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONED - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONS - 96)) | (1 << (FlinkSQLParser.KW_PASSING - 96)) | (1 << (FlinkSQLParser.KW_PAST - 96)) | (1 << (FlinkSQLParser.KW_PATH - 96)) | (1 << (FlinkSQLParser.KW_PLACING - 96)) | (1 << (FlinkSQLParser.KW_PLAN - 96)) | (1 << (FlinkSQLParser.KW_PRECEDING - 96)) | (1 << (FlinkSQLParser.KW_PRESERVE - 96)) | (1 << (FlinkSQLParser.KW_PRIOR - 96)) | (1 << (FlinkSQLParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSQLParser.KW_PUBLIC - 96)) | (1 << (FlinkSQLParser.KW_PYTHON - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSQLParser.KW_QUARTER - 96)) | (1 << (FlinkSQLParser.KW_RAW - 96)) | (1 << (FlinkSQLParser.KW_READ - 96)) | (1 << (FlinkSQLParser.KW_RELATIVE - 96)) | (1 << (FlinkSQLParser.KW_REMOVE - 96)) | (1 << (FlinkSQLParser.KW_RENAME - 96)) | (1 << (FlinkSQLParser.KW_REPLACE - 96)) | (1 << (FlinkSQLParser.KW_RESPECT - 96)) | (1 << (FlinkSQLParser.KW_RESTART - 96)) | (1 << (FlinkSQLParser.KW_RESTRICT - 96)) | (1 << (FlinkSQLParser.KW_ROLE - 96)) | (1 << (FlinkSQLParser.KW_ROW_COUNT - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSQLParser.KW_SCALA - 128)) | (1 << (FlinkSQLParser.KW_SCALAR - 128)) | (1 << (FlinkSQLParser.KW_SCALE - 128)) | (1 << (FlinkSQLParser.KW_SCHEMA - 128)) | (1 << (FlinkSQLParser.KW_SECONDS - 128)) | (1 << (FlinkSQLParser.KW_SECTION - 128)) | (1 << (FlinkSQLParser.KW_SECURITY - 128)) | (1 << (FlinkSQLParser.KW_SELF - 128)) | (1 << (FlinkSQLParser.KW_SERVER - 128)) | (1 << (FlinkSQLParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSQLParser.KW_SESSION - 128)) | (1 << (FlinkSQLParser.KW_SETS - 128)) | (1 << (FlinkSQLParser.KW_SIMPLE - 128)) | (1 << (FlinkSQLParser.KW_SIZE - 128)) | (1 << (FlinkSQLParser.KW_SLIDE - 128)) | (1 << (FlinkSQLParser.KW_SOURCE - 128)) | (1 << (FlinkSQLParser.KW_SPACE - 128)) | (1 << (FlinkSQLParser.KW_STATE - 128)) | (1 << (FlinkSQLParser.KW_STATEMENT - 128)) | (1 << (FlinkSQLParser.KW_STEP - 128)) | (1 << (FlinkSQLParser.KW_STRING - 128)) | (1 << (FlinkSQLParser.KW_STRUCTURE - 128)) | (1 << (FlinkSQLParser.KW_STYLE - 128)) | (1 << (FlinkSQLParser.KW_TABLES - 128)) | (1 << (FlinkSQLParser.KW_TEMPORARY - 128)) | (1 << (FlinkSQLParser.KW_TIMECOL - 128)) | (1 << (FlinkSQLParser.KW_FLOOR - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_LTZ - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPADD - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPDIFF - 128)) | (1 << (FlinkSQLParser.KW_TRANSFORM - 128)) | (1 << (FlinkSQLParser.KW_TUMBLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSQLParser.KW_TYPE - 160)) | (1 << (FlinkSQLParser.KW_UNDER - 160)) | (1 << (FlinkSQLParser.KW_UNLOAD - 160)) | (1 << (FlinkSQLParser.KW_USAGE - 160)) | (1 << (FlinkSQLParser.KW_USE - 160)) | (1 << (FlinkSQLParser.KW_UTF16 - 160)) | (1 << (FlinkSQLParser.KW_UTF32 - 160)) | (1 << (FlinkSQLParser.KW_UTF8 - 160)) | (1 << (FlinkSQLParser.KW_VERSION - 160)) | (1 << (FlinkSQLParser.KW_VIEW - 160)) | (1 << (FlinkSQLParser.KW_VIEWS - 160)) | (1 << (FlinkSQLParser.KW_VIRTUAL - 160)) | (1 << (FlinkSQLParser.KW_WATERMARK - 160)) | (1 << (FlinkSQLParser.KW_WATERMARKS - 160)) | (1 << (FlinkSQLParser.KW_WEEK - 160)) | (1 << (FlinkSQLParser.KW_WORK - 160)) | (1 << (FlinkSQLParser.KW_WRAPPER - 160)) | (1 << (FlinkSQLParser.KW_YEARS - 160)) | (1 << (FlinkSQLParser.KW_ZONE - 160)))) !== 0) || ((((_la - 411)) & ~0x1F) === 0 && ((1 << (_la - 411)) & ((1 << (FlinkSQLParser.STRING_LITERAL - 411)) | (1 << (FlinkSQLParser.DIG_LITERAL - 411)) | (1 << (FlinkSQLParser.ID_LITERAL - 411)))) !== 0)) {
				{
				this.state = 1586;
				_localctx._name = this.errorCapturingIdentifier();
				}
			}

			this.state = 1589;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1591;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_PARTITION) {
				{
				this.state = 1590;
				this.partitionByClause();
				}
			}

			this.state = 1594;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_ORDER) {
				{
				this.state = 1593;
				this.orderByCaluse();
				}
			}

			this.state = 1597;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_RANGE || _la === FlinkSQLParser.KW_ROWS) {
				{
				this.state = 1596;
				this.windowFrame();
				}
			}

			this.state = 1599;
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
		this.enterRule(_localctx, 228, FlinkSQLParser.RULE_matchRecognizeClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1601;
			this.match(FlinkSQLParser.KW_MATCH_RECOGNIZE);
			this.state = 1602;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1604;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_PARTITION) {
				{
				this.state = 1603;
				this.partitionByClause();
				}
			}

			this.state = 1607;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_ORDER) {
				{
				this.state = 1606;
				this.orderByCaluse();
				}
			}

			this.state = 1610;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_MEASURES) {
				{
				this.state = 1609;
				this.measuresClause();
				}
			}

			this.state = 1613;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_ALL || _la === FlinkSQLParser.KW_ONE) {
				{
				this.state = 1612;
				this.outputMode();
				}
			}

			this.state = 1616;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_AFTER) {
				{
				this.state = 1615;
				this.afterMatchStrategy();
				}
			}

			this.state = 1619;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_PATTERN) {
				{
				this.state = 1618;
				this.patternDefination();
				}
			}

			this.state = 1621;
			this.patternVariablesDefination();
			this.state = 1622;
			this.match(FlinkSQLParser.RR_BRACKET);
			this.state = 1627;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 182, this._ctx) ) {
			case 1:
				{
				this.state = 1624;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_AS) {
					{
					this.state = 1623;
					this.match(FlinkSQLParser.KW_AS);
					}
				}

				this.state = 1626;
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
		this.enterRule(_localctx, 230, FlinkSQLParser.RULE_orderByCaluse);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1629;
			this.match(FlinkSQLParser.KW_ORDER);
			this.state = 1630;
			this.match(FlinkSQLParser.KW_BY);
			this.state = 1631;
			this.orderItemDefition();
			this.state = 1636;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 183, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1632;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1633;
					this.orderItemDefition();
					}
					}
				}
				this.state = 1638;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 183, this._ctx);
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
		this.enterRule(_localctx, 232, FlinkSQLParser.RULE_orderItemDefition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1639;
			this.expression();
			this.state = 1641;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 184, this._ctx) ) {
			case 1:
				{
				this.state = 1640;
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
			this.state = 1645;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 185, this._ctx) ) {
			case 1:
				{
				this.state = 1643;
				this.match(FlinkSQLParser.KW_NULLS);
				this.state = 1644;
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
		this.enterRule(_localctx, 234, FlinkSQLParser.RULE_limitClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1647;
			this.match(FlinkSQLParser.KW_LIMIT);
			this.state = 1650;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_ALL:
				{
				this.state = 1648;
				this.match(FlinkSQLParser.KW_ALL);
				}
				break;
			case FlinkSQLParser.T__0:
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
			case FlinkSQLParser.KW_FLOOR:
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
			case FlinkSQLParser.KW_ROW:
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
				this.state = 1649;
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
		this.enterRule(_localctx, 236, FlinkSQLParser.RULE_partitionByClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1652;
			this.match(FlinkSQLParser.KW_PARTITION);
			this.state = 1653;
			this.match(FlinkSQLParser.KW_BY);
			this.state = 1654;
			this.expression();
			this.state = 1659;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1655;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1656;
				this.expression();
				}
				}
				this.state = 1661;
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
		this.enterRule(_localctx, 238, FlinkSQLParser.RULE_quantifiers);
		try {
			this.state = 1678;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 188, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 1662;
				this.match(FlinkSQLParser.ASTERISK_SIGN);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 1663;
				this.match(FlinkSQLParser.ADD_SIGN);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 1664;
				this.match(FlinkSQLParser.QUESTION_MARK_SIGN);
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				{
				this.state = 1665;
				this.match(FlinkSQLParser.LB_BRACKET);
				this.state = 1666;
				this.match(FlinkSQLParser.DIG_LITERAL);
				this.state = 1667;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1668;
				this.match(FlinkSQLParser.DIG_LITERAL);
				this.state = 1669;
				this.match(FlinkSQLParser.RB_BRACKET);
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				{
				this.state = 1670;
				this.match(FlinkSQLParser.LB_BRACKET);
				this.state = 1671;
				this.match(FlinkSQLParser.DIG_LITERAL);
				this.state = 1672;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1673;
				this.match(FlinkSQLParser.RB_BRACKET);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				{
				this.state = 1674;
				this.match(FlinkSQLParser.LB_BRACKET);
				this.state = 1675;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1676;
				this.match(FlinkSQLParser.DIG_LITERAL);
				this.state = 1677;
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
		this.enterRule(_localctx, 240, FlinkSQLParser.RULE_measuresClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1680;
			this.match(FlinkSQLParser.KW_MEASURES);
			this.state = 1681;
			this.projectItemDefinition();
			this.state = 1686;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1682;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1683;
				this.projectItemDefinition();
				}
				}
				this.state = 1688;
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
		this.enterRule(_localctx, 242, FlinkSQLParser.RULE_patternDefination);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1689;
			this.match(FlinkSQLParser.KW_PATTERN);
			this.state = 1690;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1692;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1691;
				this.patternVariable();
				}
				}
				this.state = 1694;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FlinkSQLParser.DIG_LITERAL || _la === FlinkSQLParser.ID_LITERAL);
			this.state = 1696;
			this.match(FlinkSQLParser.RR_BRACKET);
			this.state = 1698;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_WITHIN) {
				{
				this.state = 1697;
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
		this.enterRule(_localctx, 244, FlinkSQLParser.RULE_patternVariable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1700;
			this.unquotedIdentifier();
			this.state = 1702;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 392)) & ~0x1F) === 0 && ((1 << (_la - 392)) & ((1 << (FlinkSQLParser.LB_BRACKET - 392)) | (1 << (FlinkSQLParser.ASTERISK_SIGN - 392)) | (1 << (FlinkSQLParser.ADD_SIGN - 392)) | (1 << (FlinkSQLParser.QUESTION_MARK_SIGN - 392)))) !== 0)) {
				{
				this.state = 1701;
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
		this.enterRule(_localctx, 246, FlinkSQLParser.RULE_outputMode);
		try {
			this.state = 1712;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_ALL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1704;
				this.match(FlinkSQLParser.KW_ALL);
				this.state = 1705;
				this.match(FlinkSQLParser.KW_ROWS);
				this.state = 1706;
				this.match(FlinkSQLParser.KW_PER);
				this.state = 1707;
				this.match(FlinkSQLParser.KW_MATCH);
				}
				break;
			case FlinkSQLParser.KW_ONE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1708;
				this.match(FlinkSQLParser.KW_ONE);
				this.state = 1709;
				this.match(FlinkSQLParser.KW_ROW);
				this.state = 1710;
				this.match(FlinkSQLParser.KW_PER);
				this.state = 1711;
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
		this.enterRule(_localctx, 248, FlinkSQLParser.RULE_afterMatchStrategy);
		try {
			this.state = 1738;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 194, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1714;
				this.match(FlinkSQLParser.KW_AFTER);
				this.state = 1715;
				this.match(FlinkSQLParser.KW_MATCH);
				this.state = 1716;
				this.match(FlinkSQLParser.KW_SKIP);
				this.state = 1717;
				this.match(FlinkSQLParser.KW_PAST);
				this.state = 1718;
				this.match(FlinkSQLParser.KW_LAST);
				this.state = 1719;
				this.match(FlinkSQLParser.KW_ROW);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1720;
				this.match(FlinkSQLParser.KW_AFTER);
				this.state = 1721;
				this.match(FlinkSQLParser.KW_MATCH);
				this.state = 1722;
				this.match(FlinkSQLParser.KW_SKIP);
				this.state = 1723;
				this.match(FlinkSQLParser.KW_TO);
				this.state = 1724;
				this.match(FlinkSQLParser.KW_NEXT);
				this.state = 1725;
				this.match(FlinkSQLParser.KW_ROW);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1726;
				this.match(FlinkSQLParser.KW_AFTER);
				this.state = 1727;
				this.match(FlinkSQLParser.KW_MATCH);
				this.state = 1728;
				this.match(FlinkSQLParser.KW_SKIP);
				this.state = 1729;
				this.match(FlinkSQLParser.KW_TO);
				this.state = 1730;
				this.match(FlinkSQLParser.KW_LAST);
				this.state = 1731;
				this.unquotedIdentifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1732;
				this.match(FlinkSQLParser.KW_AFTER);
				this.state = 1733;
				this.match(FlinkSQLParser.KW_MATCH);
				this.state = 1734;
				this.match(FlinkSQLParser.KW_SKIP);
				this.state = 1735;
				this.match(FlinkSQLParser.KW_TO);
				this.state = 1736;
				this.match(FlinkSQLParser.KW_FIRST);
				this.state = 1737;
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
		this.enterRule(_localctx, 250, FlinkSQLParser.RULE_patternVariablesDefination);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1740;
			this.match(FlinkSQLParser.KW_DEFINE);
			this.state = 1741;
			this.projectItemDefinition();
			this.state = 1746;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1742;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1743;
				this.projectItemDefinition();
				}
				}
				this.state = 1748;
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
		this.enterRule(_localctx, 252, FlinkSQLParser.RULE_windowFrame);
		try {
			this.state = 1758;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_RANGE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1749;
				this.match(FlinkSQLParser.KW_RANGE);
				this.state = 1750;
				this.match(FlinkSQLParser.KW_BETWEEN);
				this.state = 1751;
				this.timeIntervalExpression();
				this.state = 1752;
				this.frameBound();
				}
				break;
			case FlinkSQLParser.KW_ROWS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1754;
				this.match(FlinkSQLParser.KW_ROWS);
				this.state = 1755;
				this.match(FlinkSQLParser.KW_BETWEEN);
				this.state = 1756;
				this.match(FlinkSQLParser.DIG_LITERAL);
				this.state = 1757;
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
		this.enterRule(_localctx, 254, FlinkSQLParser.RULE_frameBound);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1760;
			this.match(FlinkSQLParser.KW_PRECEDING);
			this.state = 1761;
			this.match(FlinkSQLParser.KW_AND);
			this.state = 1762;
			this.match(FlinkSQLParser.KW_CURRENT);
			this.state = 1763;
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
		this.enterRule(_localctx, 256, FlinkSQLParser.RULE_withinClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1765;
			this.match(FlinkSQLParser.KW_WITHIN);
			this.state = 1766;
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
		this.enterRule(_localctx, 258, FlinkSQLParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1768;
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
		let _startState: number = 260;
		this.enterRecursionRule(_localctx, 260, FlinkSQLParser.RULE_booleanExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1782;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 198, this._ctx) ) {
			case 1:
				{
				_localctx = new LogicalNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1771;
				this.match(FlinkSQLParser.KW_NOT);
				this.state = 1772;
				this.booleanExpression(6);
				}
				break;

			case 2:
				{
				_localctx = new ExistsContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1773;
				this.match(FlinkSQLParser.KW_EXISTS);
				this.state = 1774;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1775;
				this.queryStatement(0);
				this.state = 1776;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 3:
				{
				_localctx = new PredicatedContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1778;
				this.valueExpression(0);
				this.state = 1780;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 197, this._ctx) ) {
				case 1:
					{
					this.state = 1779;
					this.predicate();
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1798;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1796;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 200, this._ctx) ) {
					case 1:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_booleanExpression);
						this.state = 1784;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1785;
						(_localctx as LogicalBinaryContext)._operator = this.match(FlinkSQLParser.KW_AND);
						this.state = 1786;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(4);
						}
						break;

					case 2:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_booleanExpression);
						this.state = 1787;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1788;
						(_localctx as LogicalBinaryContext)._operator = this.match(FlinkSQLParser.KW_OR);
						this.state = 1789;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;

					case 3:
						{
						_localctx = new LogicalNestedContext(new BooleanExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_booleanExpression);
						this.state = 1790;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1791;
						this.match(FlinkSQLParser.KW_IS);
						this.state = 1793;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FlinkSQLParser.KW_NOT) {
							{
							this.state = 1792;
							this.match(FlinkSQLParser.KW_NOT);
							}
						}

						this.state = 1795;
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
				this.state = 1800;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
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
		this.enterRule(_localctx, 262, FlinkSQLParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 1868;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 212, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1802;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 1801;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 1804;
				_localctx._kind = this.match(FlinkSQLParser.KW_BETWEEN);
				this.state = 1806;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_ASYMMETRIC || _la === FlinkSQLParser.KW_SYMMETRIC) {
					{
					this.state = 1805;
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

				this.state = 1808;
				_localctx._lower = this.valueExpression(0);
				this.state = 1809;
				this.match(FlinkSQLParser.KW_AND);
				this.state = 1810;
				_localctx._upper = this.valueExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1813;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 1812;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 1815;
				_localctx._kind = this.match(FlinkSQLParser.KW_IN);
				this.state = 1816;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1817;
				this.expression();
				this.state = 1822;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1818;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1819;
					this.expression();
					}
					}
					this.state = 1824;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1825;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1828;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 1827;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 1830;
				_localctx._kind = this.match(FlinkSQLParser.KW_IN);
				this.state = 1831;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1832;
				this.queryStatement(0);
				this.state = 1833;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1835;
				_localctx._kind = this.match(FlinkSQLParser.KW_EXISTS);
				this.state = 1836;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1837;
				this.queryStatement(0);
				this.state = 1838;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1841;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 1840;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 1843;
				_localctx._kind = this.match(FlinkSQLParser.KW_RLIKE);
				this.state = 1844;
				_localctx._pattern = this.valueExpression(0);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1845;
				this.likePredicate();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1846;
				this.match(FlinkSQLParser.KW_IS);
				this.state = 1848;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 1847;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 1850;
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
				this.state = 1851;
				this.match(FlinkSQLParser.KW_IS);
				this.state = 1853;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 1852;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 1855;
				_localctx._kind = this.match(FlinkSQLParser.KW_DISTINCT);
				this.state = 1856;
				this.match(FlinkSQLParser.KW_FROM);
				this.state = 1857;
				_localctx._right = this.valueExpression(0);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1859;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 1858;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 1861;
				_localctx._kind = this.match(FlinkSQLParser.KW_SIMILAR);
				this.state = 1862;
				this.match(FlinkSQLParser.KW_TO);
				this.state = 1863;
				_localctx._right = this.valueExpression(0);
				this.state = 1866;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 211, this._ctx) ) {
				case 1:
					{
					this.state = 1864;
					this.match(FlinkSQLParser.KW_ESCAPE);
					this.state = 1865;
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
		this.enterRule(_localctx, 264, FlinkSQLParser.RULE_likePredicate);
		let _la: number;
		try {
			this.state = 1899;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 218, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1871;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 1870;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 1873;
				_localctx._kind = this.match(FlinkSQLParser.KW_LIKE);
				this.state = 1874;
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
				this.state = 1888;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 215, this._ctx) ) {
				case 1:
					{
					this.state = 1875;
					this.match(FlinkSQLParser.LR_BRACKET);
					this.state = 1876;
					this.match(FlinkSQLParser.RR_BRACKET);
					}
					break;

				case 2:
					{
					this.state = 1877;
					this.match(FlinkSQLParser.LR_BRACKET);
					this.state = 1878;
					this.expression();
					this.state = 1883;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === FlinkSQLParser.COMMA) {
						{
						{
						this.state = 1879;
						this.match(FlinkSQLParser.COMMA);
						this.state = 1880;
						this.expression();
						}
						}
						this.state = 1885;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1886;
					this.match(FlinkSQLParser.RR_BRACKET);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1891;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 1890;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 1893;
				_localctx._kind = this.match(FlinkSQLParser.KW_LIKE);
				this.state = 1894;
				_localctx._pattern = this.valueExpression(0);
				this.state = 1897;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 217, this._ctx) ) {
				case 1:
					{
					this.state = 1895;
					this.match(FlinkSQLParser.KW_ESCAPE);
					this.state = 1896;
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
		let _startState: number = 266;
		this.enterRecursionRule(_localctx, 266, FlinkSQLParser.RULE_valueExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1905;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 219, this._ctx) ) {
			case 1:
				{
				_localctx = new ValueExpressionDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1902;
				this.primaryExpression(0);
				}
				break;

			case 2:
				{
				_localctx = new ArithmeticUnaryContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1903;
				(_localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 383)) & ~0x1F) === 0 && ((1 << (_la - 383)) & ((1 << (FlinkSQLParser.BIT_NOT_OP - 383)) | (1 << (FlinkSQLParser.HYPNEN_SIGN - 383)) | (1 << (FlinkSQLParser.ADD_SIGN - 383)))) !== 0))) {
					(_localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1904;
				this.valueExpression(8);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1930;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 221, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1928;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 220, this._ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_valueExpression);
						this.state = 1907;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 1908;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === FlinkSQLParser.KW_DIV || ((((_la - 401)) & ~0x1F) === 0 && ((1 << (_la - 401)) & ((1 << (FlinkSQLParser.ASTERISK_SIGN - 401)) | (1 << (FlinkSQLParser.PENCENT_SIGN - 401)) | (1 << (FlinkSQLParser.SLASH_SIGN - 401)))) !== 0))) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1909;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(8);
						}
						break;

					case 2:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_valueExpression);
						this.state = 1910;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1911;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 403)) & ~0x1F) === 0 && ((1 << (_la - 403)) & ((1 << (FlinkSQLParser.HYPNEN_SIGN - 403)) | (1 << (FlinkSQLParser.ADD_SIGN - 403)) | (1 << (FlinkSQLParser.DOUBLE_VERTICAL_SIGN - 403)))) !== 0))) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1912;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(7);
						}
						break;

					case 3:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_valueExpression);
						this.state = 1913;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1914;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSQLParser.BIT_AND_OP);
						this.state = 1915;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(6);
						}
						break;

					case 4:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_valueExpression);
						this.state = 1916;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1917;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSQLParser.BIT_XOR_OP);
						this.state = 1918;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(5);
						}
						break;

					case 5:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_valueExpression);
						this.state = 1919;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1920;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSQLParser.BIT_OR_OP);
						this.state = 1921;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;

					case 6:
						{
						_localctx = new ComparisonContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ComparisonContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_valueExpression);
						this.state = 1922;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1923;
						this.comparisonOperator();
						this.state = 1924;
						(_localctx as ComparisonContext)._right = this.valueExpression(3);
						}
						break;

					case 7:
						{
						_localctx = new ArithmeticBinaryAlternateContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryAlternateContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_valueExpression);
						this.state = 1926;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1927;
						(_localctx as ArithmeticBinaryAlternateContext)._right = this.match(FlinkSQLParser.SLASH_TEXT);
						}
						break;
					}
					}
				}
				this.state = 1932;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 221, this._ctx);
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
		let _startState: number = 268;
		this.enterRecursionRule(_localctx, 268, FlinkSQLParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2042;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 233, this._ctx) ) {
			case 1:
				{
				_localctx = new SearchedCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1934;
				this.match(FlinkSQLParser.KW_CASE);
				this.state = 1936;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1935;
					this.whenClause();
					}
					}
					this.state = 1938;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === FlinkSQLParser.KW_WHEN);
				this.state = 1942;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_ELSE) {
					{
					this.state = 1940;
					this.match(FlinkSQLParser.KW_ELSE);
					this.state = 1941;
					(_localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1944;
				this.match(FlinkSQLParser.KW_END);
				}
				break;

			case 2:
				{
				_localctx = new SimpleCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1946;
				this.match(FlinkSQLParser.KW_CASE);
				this.state = 1947;
				(_localctx as SimpleCaseContext)._value = this.expression();
				this.state = 1949;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1948;
					this.whenClause();
					}
					}
					this.state = 1951;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === FlinkSQLParser.KW_WHEN);
				this.state = 1955;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_ELSE) {
					{
					this.state = 1953;
					this.match(FlinkSQLParser.KW_ELSE);
					this.state = 1954;
					(_localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1957;
				this.match(FlinkSQLParser.KW_END);
				}
				break;

			case 3:
				{
				_localctx = new CastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1959;
				this.match(FlinkSQLParser.KW_CAST);
				this.state = 1960;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1961;
				this.expression();
				this.state = 1962;
				this.match(FlinkSQLParser.KW_AS);
				this.state = 1963;
				this.columnType();
				this.state = 1964;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 4:
				{
				_localctx = new FirstContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1966;
				this.match(FlinkSQLParser.KW_FIRST);
				this.state = 1967;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1968;
				this.expression();
				this.state = 1971;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_IGNORE) {
					{
					this.state = 1969;
					this.match(FlinkSQLParser.KW_IGNORE);
					this.state = 1970;
					this.match(FlinkSQLParser.KW_NULLS);
					}
				}

				this.state = 1973;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 5:
				{
				_localctx = new LastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1975;
				this.match(FlinkSQLParser.KW_LAST);
				this.state = 1976;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1977;
				this.expression();
				this.state = 1980;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_IGNORE) {
					{
					this.state = 1978;
					this.match(FlinkSQLParser.KW_IGNORE);
					this.state = 1979;
					this.match(FlinkSQLParser.KW_NULLS);
					}
				}

				this.state = 1982;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 6:
				{
				_localctx = new PositionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1984;
				this.match(FlinkSQLParser.KW_POSITION);
				this.state = 1985;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1986;
				(_localctx as PositionContext)._substr = this.valueExpression(0);
				this.state = 1987;
				this.match(FlinkSQLParser.KW_IN);
				this.state = 1988;
				(_localctx as PositionContext)._str = this.valueExpression(0);
				this.state = 1989;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 7:
				{
				_localctx = new ConstantDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1991;
				this.constant();
				}
				break;

			case 8:
				{
				_localctx = new StarContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1992;
				this.match(FlinkSQLParser.ASTERISK_SIGN);
				}
				break;

			case 9:
				{
				_localctx = new StarContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1993;
				this.uid();
				this.state = 1994;
				this.match(FlinkSQLParser.DOT);
				this.state = 1995;
				this.match(FlinkSQLParser.ASTERISK_SIGN);
				}
				break;

			case 10:
				{
				_localctx = new SubqueryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1997;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1998;
				this.queryStatement(0);
				this.state = 1999;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 11:
				{
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2001;
				this.functionName();
				this.state = 2002;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 2014;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSQLParser.T__0) | (1 << FlinkSQLParser.KW_ADD) | (1 << FlinkSQLParser.KW_ADMIN) | (1 << FlinkSQLParser.KW_AFTER) | (1 << FlinkSQLParser.KW_ANALYZE) | (1 << FlinkSQLParser.KW_ASC) | (1 << FlinkSQLParser.KW_BEFORE) | (1 << FlinkSQLParser.KW_BYTES) | (1 << FlinkSQLParser.KW_CASCADE) | (1 << FlinkSQLParser.KW_CATALOG) | (1 << FlinkSQLParser.KW_CATALOGS) | (1 << FlinkSQLParser.KW_CENTURY) | (1 << FlinkSQLParser.KW_CHAIN) | (1 << FlinkSQLParser.KW_CHANGELOG_MODE) | (1 << FlinkSQLParser.KW_CHARACTERS) | (1 << FlinkSQLParser.KW_COMMENT) | (1 << FlinkSQLParser.KW_COMPACT) | (1 << FlinkSQLParser.KW_COLUMNS) | (1 << FlinkSQLParser.KW_CONSTRAINTS) | (1 << FlinkSQLParser.KW_CONSTRUCTOR) | (1 << FlinkSQLParser.KW_CUMULATE) | (1 << FlinkSQLParser.KW_DATA) | (1 << FlinkSQLParser.KW_DATABASE) | (1 << FlinkSQLParser.KW_DATABASES) | (1 << FlinkSQLParser.KW_DAYS) | (1 << FlinkSQLParser.KW_DECADE) | (1 << FlinkSQLParser.KW_DEFINED) | (1 << FlinkSQLParser.KW_DESC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSQLParser.KW_DESCRIPTOR - 32)) | (1 << (FlinkSQLParser.KW_DIV - 32)) | (1 << (FlinkSQLParser.KW_ENCODING - 32)) | (1 << (FlinkSQLParser.KW_ENFORCED - 32)) | (1 << (FlinkSQLParser.KW_ENGINE - 32)) | (1 << (FlinkSQLParser.KW_EPOCH - 32)) | (1 << (FlinkSQLParser.KW_ERROR - 32)) | (1 << (FlinkSQLParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSQLParser.KW_EXCEPTION - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDE - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDING - 32)) | (1 << (FlinkSQLParser.KW_EXTENDED - 32)) | (1 << (FlinkSQLParser.KW_FILTER - 32)) | (1 << (FlinkSQLParser.KW_FILE - 32)) | (1 << (FlinkSQLParser.KW_FINAL - 32)) | (1 << (FlinkSQLParser.KW_FIRST - 32)) | (1 << (FlinkSQLParser.KW_FOLLOWING - 32)) | (1 << (FlinkSQLParser.KW_FORMAT - 32)) | (1 << (FlinkSQLParser.KW_FORTRAN - 32)) | (1 << (FlinkSQLParser.KW_FOUND - 32)) | (1 << (FlinkSQLParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSQLParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSQLParser.KW_GENERAL - 32)) | (1 << (FlinkSQLParser.KW_GENERATED - 32)) | (1 << (FlinkSQLParser.KW_GO - 32)) | (1 << (FlinkSQLParser.KW_GOTO - 32)) | (1 << (FlinkSQLParser.KW_GRANTED - 32)) | (1 << (FlinkSQLParser.KW_HOP - 32)) | (1 << (FlinkSQLParser.KW_HOURS - 32)) | (1 << (FlinkSQLParser.KW_IF - 32)) | (1 << (FlinkSQLParser.KW_IGNORE - 32)) | (1 << (FlinkSQLParser.KW_INCREMENT - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSQLParser.KW_INPUT - 64)) | (1 << (FlinkSQLParser.KW_INVOKER - 64)) | (1 << (FlinkSQLParser.KW_JAR - 64)) | (1 << (FlinkSQLParser.KW_JARS - 64)) | (1 << (FlinkSQLParser.KW_JAVA - 64)) | (1 << (FlinkSQLParser.KW_JSON - 64)) | (1 << (FlinkSQLParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSQLParser.KW_KEY - 64)) | (1 << (FlinkSQLParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSQLParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSQLParser.KW_LABEL - 64)) | (1 << (FlinkSQLParser.KW_LAST - 64)) | (1 << (FlinkSQLParser.KW_LENGTH - 64)) | (1 << (FlinkSQLParser.KW_LEVEL - 64)) | (1 << (FlinkSQLParser.KW_LOAD - 64)) | (1 << (FlinkSQLParser.KW_MAP - 64)) | (1 << (FlinkSQLParser.KW_MICROSECOND - 64)) | (1 << (FlinkSQLParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSQLParser.KW_MILLISECOND - 64)) | (1 << (FlinkSQLParser.KW_MINUTES - 64)) | (1 << (FlinkSQLParser.KW_MINVALUE - 64)) | (1 << (FlinkSQLParser.KW_MODIFY - 64)) | (1 << (FlinkSQLParser.KW_MODULES - 64)) | (1 << (FlinkSQLParser.KW_MONTHS - 64)) | (1 << (FlinkSQLParser.KW_NANOSECOND - 64)) | (1 << (FlinkSQLParser.KW_NULLS - 64)) | (1 << (FlinkSQLParser.KW_NUMBER - 64)) | (1 << (FlinkSQLParser.KW_OPTION - 64)) | (1 << (FlinkSQLParser.KW_OPTIONS - 64)) | (1 << (FlinkSQLParser.KW_ORDERING - 64)) | (1 << (FlinkSQLParser.KW_OUTPUT - 64)) | (1 << (FlinkSQLParser.KW_OVERWRITE - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSQLParser.KW_OVERWRITING - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONED - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONS - 96)) | (1 << (FlinkSQLParser.KW_PASSING - 96)) | (1 << (FlinkSQLParser.KW_PAST - 96)) | (1 << (FlinkSQLParser.KW_PATH - 96)) | (1 << (FlinkSQLParser.KW_PLACING - 96)) | (1 << (FlinkSQLParser.KW_PLAN - 96)) | (1 << (FlinkSQLParser.KW_PRECEDING - 96)) | (1 << (FlinkSQLParser.KW_PRESERVE - 96)) | (1 << (FlinkSQLParser.KW_PRIOR - 96)) | (1 << (FlinkSQLParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSQLParser.KW_PUBLIC - 96)) | (1 << (FlinkSQLParser.KW_PYTHON - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSQLParser.KW_QUARTER - 96)) | (1 << (FlinkSQLParser.KW_RAW - 96)) | (1 << (FlinkSQLParser.KW_READ - 96)) | (1 << (FlinkSQLParser.KW_RELATIVE - 96)) | (1 << (FlinkSQLParser.KW_REMOVE - 96)) | (1 << (FlinkSQLParser.KW_RENAME - 96)) | (1 << (FlinkSQLParser.KW_REPLACE - 96)) | (1 << (FlinkSQLParser.KW_RESPECT - 96)) | (1 << (FlinkSQLParser.KW_RESTART - 96)) | (1 << (FlinkSQLParser.KW_RESTRICT - 96)) | (1 << (FlinkSQLParser.KW_ROLE - 96)) | (1 << (FlinkSQLParser.KW_ROW_COUNT - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSQLParser.KW_SCALA - 128)) | (1 << (FlinkSQLParser.KW_SCALAR - 128)) | (1 << (FlinkSQLParser.KW_SCALE - 128)) | (1 << (FlinkSQLParser.KW_SCHEMA - 128)) | (1 << (FlinkSQLParser.KW_SECONDS - 128)) | (1 << (FlinkSQLParser.KW_SECTION - 128)) | (1 << (FlinkSQLParser.KW_SECURITY - 128)) | (1 << (FlinkSQLParser.KW_SELF - 128)) | (1 << (FlinkSQLParser.KW_SERVER - 128)) | (1 << (FlinkSQLParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSQLParser.KW_SESSION - 128)) | (1 << (FlinkSQLParser.KW_SETS - 128)) | (1 << (FlinkSQLParser.KW_SIMPLE - 128)) | (1 << (FlinkSQLParser.KW_SIZE - 128)) | (1 << (FlinkSQLParser.KW_SLIDE - 128)) | (1 << (FlinkSQLParser.KW_SOURCE - 128)) | (1 << (FlinkSQLParser.KW_SPACE - 128)) | (1 << (FlinkSQLParser.KW_STATE - 128)) | (1 << (FlinkSQLParser.KW_STATEMENT - 128)) | (1 << (FlinkSQLParser.KW_STEP - 128)) | (1 << (FlinkSQLParser.KW_STRING - 128)) | (1 << (FlinkSQLParser.KW_STRUCTURE - 128)) | (1 << (FlinkSQLParser.KW_STYLE - 128)) | (1 << (FlinkSQLParser.KW_TABLES - 128)) | (1 << (FlinkSQLParser.KW_TEMPORARY - 128)) | (1 << (FlinkSQLParser.KW_TIMECOL - 128)) | (1 << (FlinkSQLParser.KW_FLOOR - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_LTZ - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPADD - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPDIFF - 128)) | (1 << (FlinkSQLParser.KW_TRANSFORM - 128)) | (1 << (FlinkSQLParser.KW_TUMBLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSQLParser.KW_TYPE - 160)) | (1 << (FlinkSQLParser.KW_UNDER - 160)) | (1 << (FlinkSQLParser.KW_UNLOAD - 160)) | (1 << (FlinkSQLParser.KW_USAGE - 160)) | (1 << (FlinkSQLParser.KW_USE - 160)) | (1 << (FlinkSQLParser.KW_UTF16 - 160)) | (1 << (FlinkSQLParser.KW_UTF32 - 160)) | (1 << (FlinkSQLParser.KW_UTF8 - 160)) | (1 << (FlinkSQLParser.KW_VERSION - 160)) | (1 << (FlinkSQLParser.KW_VIEW - 160)) | (1 << (FlinkSQLParser.KW_VIEWS - 160)) | (1 << (FlinkSQLParser.KW_VIRTUAL - 160)) | (1 << (FlinkSQLParser.KW_WATERMARK - 160)) | (1 << (FlinkSQLParser.KW_WATERMARKS - 160)) | (1 << (FlinkSQLParser.KW_WEEK - 160)) | (1 << (FlinkSQLParser.KW_WEEKS - 160)) | (1 << (FlinkSQLParser.KW_WORK - 160)) | (1 << (FlinkSQLParser.KW_WRAPPER - 160)) | (1 << (FlinkSQLParser.KW_YEARS - 160)) | (1 << (FlinkSQLParser.KW_ZONE - 160)) | (1 << (FlinkSQLParser.KW_ABS - 160)) | (1 << (FlinkSQLParser.KW_ALL - 160)) | (1 << (FlinkSQLParser.KW_ARRAY - 160)) | (1 << (FlinkSQLParser.KW_AVG - 160)))) !== 0) || ((((_la - 199)) & ~0x1F) === 0 && ((1 << (_la - 199)) & ((1 << (FlinkSQLParser.KW_BOTH - 199)) | (1 << (FlinkSQLParser.KW_CASE - 199)) | (1 << (FlinkSQLParser.KW_CAST - 199)) | (1 << (FlinkSQLParser.KW_CEIL - 199)) | (1 << (FlinkSQLParser.KW_COALESCE - 199)) | (1 << (FlinkSQLParser.KW_COLLECT - 199)) | (1 << (FlinkSQLParser.KW_COUNT - 199)) | (1 << (FlinkSQLParser.KW_DATE - 199)) | (1 << (FlinkSQLParser.KW_DAY - 199)))) !== 0) || ((((_la - 238)) & ~0x1F) === 0 && ((1 << (_la - 238)) & ((1 << (FlinkSQLParser.KW_DISTINCT - 238)) | (1 << (FlinkSQLParser.KW_EXISTS - 238)) | (1 << (FlinkSQLParser.KW_FALSE - 238)) | (1 << (FlinkSQLParser.KW_GROUPING - 238)) | (1 << (FlinkSQLParser.KW_HOUR - 238)))) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & ((1 << (FlinkSQLParser.KW_INTERVAL - 274)) | (1 << (FlinkSQLParser.KW_LAG - 274)) | (1 << (FlinkSQLParser.KW_LEADING - 274)) | (1 << (FlinkSQLParser.KW_LEFT - 274)) | (1 << (FlinkSQLParser.KW_MINUTE - 274)) | (1 << (FlinkSQLParser.KW_MONTH - 274)) | (1 << (FlinkSQLParser.KW_NOT - 274)) | (1 << (FlinkSQLParser.KW_NULL - 274)))) !== 0) || ((((_la - 313)) & ~0x1F) === 0 && ((1 << (_la - 313)) & ((1 << (FlinkSQLParser.KW_OVERLAY - 313)) | (1 << (FlinkSQLParser.KW_POSITION - 313)) | (1 << (FlinkSQLParser.KW_POWER - 313)) | (1 << (FlinkSQLParser.KW_RANK - 313)) | (1 << (FlinkSQLParser.KW_RIGHT - 313)) | (1 << (FlinkSQLParser.KW_ROW - 313)) | (1 << (FlinkSQLParser.KW_SECOND - 313)) | (1 << (FlinkSQLParser.KW_SUBSTRING - 313)) | (1 << (FlinkSQLParser.KW_SUM - 313)))) !== 0) || ((((_la - 350)) & ~0x1F) === 0 && ((1 << (_la - 350)) & ((1 << (FlinkSQLParser.KW_TIME - 350)) | (1 << (FlinkSQLParser.KW_TIMESTAMP - 350)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_3 - 350)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_6 - 350)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_9 - 350)) | (1 << (FlinkSQLParser.KW_TRAILING - 350)) | (1 << (FlinkSQLParser.KW_TRUE - 350)) | (1 << (FlinkSQLParser.KW_TRUNCATE - 350)) | (1 << (FlinkSQLParser.KW_UPPER - 350)) | (1 << (FlinkSQLParser.KW_YEAR - 350)))) !== 0) || ((((_la - 383)) & ~0x1F) === 0 && ((1 << (_la - 383)) & ((1 << (FlinkSQLParser.BIT_NOT_OP - 383)) | (1 << (FlinkSQLParser.LR_BRACKET - 383)) | (1 << (FlinkSQLParser.ASTERISK_SIGN - 383)) | (1 << (FlinkSQLParser.HYPNEN_SIGN - 383)) | (1 << (FlinkSQLParser.ADD_SIGN - 383)) | (1 << (FlinkSQLParser.STRING_LITERAL - 383)) | (1 << (FlinkSQLParser.DIG_LITERAL - 383)) | (1 << (FlinkSQLParser.REAL_LITERAL - 383)) | (1 << (FlinkSQLParser.BIT_STRING - 383)))) !== 0) || _la === FlinkSQLParser.ID_LITERAL) {
					{
					this.state = 2004;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 228, this._ctx) ) {
					case 1:
						{
						this.state = 2003;
						this.setQuantifier();
						}
						break;
					}
					this.state = 2006;
					this.functionParam();
					this.state = 2011;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === FlinkSQLParser.COMMA) {
						{
						{
						this.state = 2007;
						this.match(FlinkSQLParser.COMMA);
						this.state = 2008;
						this.functionParam();
						}
						}
						this.state = 2013;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 2016;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 12:
				{
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2018;
				this.functionName();
				this.state = 2019;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 2020;
				this.functionParam();
				this.state = 2021;
				this.match(FlinkSQLParser.KW_TO);
				this.state = 2022;
				this.functionParam();
				this.state = 2023;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 13:
				{
				_localctx = new FunctionCallFilterContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2025;
				this.functionName();
				this.state = 2026;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 2028;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 231, this._ctx) ) {
				case 1:
					{
					this.state = 2027;
					this.setQuantifier();
					}
					break;
				}
				this.state = 2030;
				this.functionParam();
				this.state = 2031;
				this.match(FlinkSQLParser.RR_BRACKET);
				this.state = 2033;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 232, this._ctx) ) {
				case 1:
					{
					this.state = 2032;
					this.filterClause();
					}
					break;
				}
				}
				break;

			case 14:
				{
				_localctx = new ColumnReferenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2035;
				this.identifier();
				}
				break;

			case 15:
				{
				_localctx = new DereferenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2036;
				this.dereferenceDefinition();
				}
				break;

			case 16:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2037;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 2038;
				this.expression();
				this.state = 2039;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 17:
				{
				_localctx = new ComplexDataTypeFieldExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2041;
				this.complexDataTypeExpression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2051;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 234, this._ctx);
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
					this.state = 2044;
					if (!(this.precpred(this._ctx, 5))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
					}
					this.state = 2045;
					this.match(FlinkSQLParser.LS_BRACKET);
					this.state = 2046;
					(_localctx as SubscriptContext)._index = this.valueExpression(0);
					this.state = 2047;
					this.match(FlinkSQLParser.RS_BRACKET);
					}
					}
				}
				this.state = 2053;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 234, this._ctx);
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
	public complexDataTypeExpression(): ComplexDataTypeExpressionContext {
		let _localctx: ComplexDataTypeExpressionContext = new ComplexDataTypeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, FlinkSQLParser.RULE_complexDataTypeExpression);
		try {
			this.state = 2057;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_ARRAY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2054;
				this.arrayExpression();
				}
				break;
			case FlinkSQLParser.KW_ROW:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2055;
				this.rowExpression();
				}
				break;
			case FlinkSQLParser.KW_MAP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2056;
				this.mapExpression();
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
	public arrayExpression(): ArrayExpressionContext {
		let _localctx: ArrayExpressionContext = new ArrayExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, FlinkSQLParser.RULE_arrayExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2059;
			this.match(FlinkSQLParser.KW_ARRAY);
			this.state = 2060;
			this.match(FlinkSQLParser.LS_BRACKET);
			this.state = 2061;
			this.dataTypeExpression();
			this.state = 2062;
			this.match(FlinkSQLParser.RS_BRACKET);
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
	public rowExpression(): RowExpressionContext {
		let _localctx: RowExpressionContext = new RowExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, FlinkSQLParser.RULE_rowExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2064;
			this.match(FlinkSQLParser.KW_ROW);
			this.state = 2065;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 2066;
			this.rowFieldExpression();
			this.state = 2071;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 2067;
				this.match(FlinkSQLParser.COMMA);
				this.state = 2068;
				this.rowFieldExpression();
				}
				}
				this.state = 2073;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2074;
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
	public mapExpression(): MapExpressionContext {
		let _localctx: MapExpressionContext = new MapExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, FlinkSQLParser.RULE_mapExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2076;
			this.match(FlinkSQLParser.KW_MAP);
			this.state = 2077;
			this.match(FlinkSQLParser.LS_BRACKET);
			this.state = 2078;
			this.dataTypeExpression();
			this.state = 2079;
			this.match(FlinkSQLParser.COMMA);
			this.state = 2080;
			this.dataTypeExpression();
			this.state = 2081;
			this.match(FlinkSQLParser.RS_BRACKET);
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
	public rowFieldExpression(): RowFieldExpressionContext {
		let _localctx: RowFieldExpressionContext = new RowFieldExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, FlinkSQLParser.RULE_rowFieldExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2083;
			this.dataTypeExpression();
			this.state = 2084;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 2085;
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
	public dataTypeExpression(): DataTypeExpressionContext {
		let _localctx: DataTypeExpressionContext = new DataTypeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, FlinkSQLParser.RULE_dataTypeExpression);
		try {
			this.state = 2089;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 237, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2087;
				this.columnAlias();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2088;
				this.complexDataTypeExpression();
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
	public functionName(): FunctionNameContext {
		let _localctx: FunctionNameContext = new FunctionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, FlinkSQLParser.RULE_functionName);
		try {
			this.state = 2094;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 238, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2091;
				this.reservedKeywordsUsedAsFuncName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2092;
				this.nonReservedKeywords();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2093;
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
		this.enterRule(_localctx, 284, FlinkSQLParser.RULE_functionParam);
		try {
			this.state = 2101;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 239, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2096;
				this.reservedKeywordsUsedAsFuncParam();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2097;
				this.timeIntervalUnit();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2098;
				this.timePointUnit();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2099;
				this.expression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2100;
				this.filterClause();
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
	public filterClause(): FilterClauseContext {
		let _localctx: FilterClauseContext = new FilterClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, FlinkSQLParser.RULE_filterClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2103;
			this.match(FlinkSQLParser.KW_FILTER);
			this.state = 2104;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 2105;
			this.match(FlinkSQLParser.KW_WHERE);
			this.state = 2106;
			this.booleanExpression(0);
			this.state = 2107;
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
	public dereferenceDefinition(): DereferenceDefinitionContext {
		let _localctx: DereferenceDefinitionContext = new DereferenceDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, FlinkSQLParser.RULE_dereferenceDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2109;
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
		this.enterRule(_localctx, 290, FlinkSQLParser.RULE_correlationName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2111;
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
		this.enterRule(_localctx, 292, FlinkSQLParser.RULE_qualifiedName);
		try {
			this.state = 2115;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 240, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2113;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2114;
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
		this.enterRule(_localctx, 294, FlinkSQLParser.RULE_timeIntervalExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2117;
			this.match(FlinkSQLParser.KW_INTERVAL);
			this.state = 2120;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 241, this._ctx) ) {
			case 1:
				{
				this.state = 2118;
				this.errorCapturingMultiUnitsInterval();
				}
				break;

			case 2:
				{
				this.state = 2119;
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
		this.enterRule(_localctx, 296, FlinkSQLParser.RULE_errorCapturingMultiUnitsInterval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2122;
			this.multiUnitsInterval();
			this.state = 2124;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 242, this._ctx) ) {
			case 1:
				{
				this.state = 2123;
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
		this.enterRule(_localctx, 298, FlinkSQLParser.RULE_multiUnitsInterval);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2129;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2126;
					this.intervalValue();
					this.state = 2127;
					this.timeIntervalUnit();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2131;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 243, this._ctx);
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
		this.enterRule(_localctx, 300, FlinkSQLParser.RULE_errorCapturingUnitToUnitInterval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2133;
			_localctx._body = this.unitToUnitInterval();
			this.state = 2136;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 244, this._ctx) ) {
			case 1:
				{
				this.state = 2134;
				_localctx._error1 = this.multiUnitsInterval();
				}
				break;

			case 2:
				{
				this.state = 2135;
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
		this.enterRule(_localctx, 302, FlinkSQLParser.RULE_unitToUnitInterval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2138;
			_localctx._value = this.intervalValue();
			this.state = 2139;
			_localctx._from = this.timeIntervalUnit();
			this.state = 2140;
			this.match(FlinkSQLParser.KW_TO);
			this.state = 2141;
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
		this.enterRule(_localctx, 304, FlinkSQLParser.RULE_intervalValue);
		let _la: number;
		try {
			this.state = 2148;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.HYPNEN_SIGN:
			case FlinkSQLParser.ADD_SIGN:
			case FlinkSQLParser.DIG_LITERAL:
			case FlinkSQLParser.REAL_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.HYPNEN_SIGN || _la === FlinkSQLParser.ADD_SIGN) {
					{
					this.state = 2143;
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

				this.state = 2146;
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
				this.state = 2147;
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
		this.enterRule(_localctx, 306, FlinkSQLParser.RULE_columnAlias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_AS) {
				{
				this.state = 2150;
				this.match(FlinkSQLParser.KW_AS);
				}
			}

			this.state = 2153;
			this.identifier();
			this.state = 2155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.LR_BRACKET) {
				{
				this.state = 2154;
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
		this.enterRule(_localctx, 308, FlinkSQLParser.RULE_tableAlias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_AS) {
				{
				this.state = 2157;
				this.match(FlinkSQLParser.KW_AS);
				}
			}

			this.state = 2160;
			this.identifier();
			this.state = 2162;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 250, this._ctx) ) {
			case 1:
				{
				this.state = 2161;
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
		this.enterRule(_localctx, 310, FlinkSQLParser.RULE_errorCapturingIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2164;
			this.identifier();
			this.state = 2165;
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
		this.enterRule(_localctx, 312, FlinkSQLParser.RULE_errorCapturingIdentifierExtra);
		let _la: number;
		try {
			this.state = 2174;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_MINUS:
				_localctx = new ErrorIdentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2167;
					this.match(FlinkSQLParser.KW_MINUS);
					this.state = 2168;
					this.identifier();
					}
					}
					this.state = 2171;
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
		this.enterRule(_localctx, 314, FlinkSQLParser.RULE_identifierList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2176;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 2177;
			this.identifierSeq();
			this.state = 2178;
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
		this.enterRule(_localctx, 316, FlinkSQLParser.RULE_identifierSeq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2180;
			this.identifier();
			this.state = 2185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 2181;
				this.match(FlinkSQLParser.COMMA);
				this.state = 2182;
				this.identifier();
				}
				}
				this.state = 2187;
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
		this.enterRule(_localctx, 318, FlinkSQLParser.RULE_identifier);
		try {
			this.state = 2192;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.DIG_LITERAL:
			case FlinkSQLParser.ID_LITERAL:
				_localctx = new UnquotedIdentifierAlternativeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2188;
				this.unquotedIdentifier();
				}
				break;
			case FlinkSQLParser.STRING_LITERAL:
				_localctx = new QuotedIdentifierAlternativeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2189;
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
			case FlinkSQLParser.KW_FLOOR:
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
				this.state = 2190;
				this.nonReservedKeywords();
				}
				break;
			case FlinkSQLParser.T__0:
				_localctx = new UrefVarAlternativeContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2191;
				this.refVar();
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
	public refVar(): RefVarContext {
		let _localctx: RefVarContext = new RefVarContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, FlinkSQLParser.RULE_refVar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2194;
			this.match(FlinkSQLParser.T__0);
			this.state = 2195;
			this.match(FlinkSQLParser.LB_BRACKET);
			this.state = 2196;
			this.unquotedIdentifier();
			this.state = 2197;
			this.match(FlinkSQLParser.RB_BRACKET);
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
		this.enterRule(_localctx, 322, FlinkSQLParser.RULE_unquotedIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2199;
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
		this.enterRule(_localctx, 324, FlinkSQLParser.RULE_quotedIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2201;
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
		this.enterRule(_localctx, 326, FlinkSQLParser.RULE_whenClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2203;
			this.match(FlinkSQLParser.KW_WHEN);
			this.state = 2204;
			_localctx._condition = this.expression();
			this.state = 2205;
			this.match(FlinkSQLParser.KW_THEN);
			this.state = 2206;
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
		this.enterRule(_localctx, 328, FlinkSQLParser.RULE_catalogPath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2208;
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
		this.enterRule(_localctx, 330, FlinkSQLParser.RULE_databasePath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2210;
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
		this.enterRule(_localctx, 332, FlinkSQLParser.RULE_databasePathCreate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2212;
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
		this.enterRule(_localctx, 334, FlinkSQLParser.RULE_tablePathCreate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2214;
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
		this.enterRule(_localctx, 336, FlinkSQLParser.RULE_tablePath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2216;
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
		this.enterRule(_localctx, 338, FlinkSQLParser.RULE_uid);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2218;
			this.identifier();
			this.state = 2223;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 255, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 2219;
					this.match(FlinkSQLParser.DOT);
					this.state = 2220;
					this.identifier();
					}
					}
				}
				this.state = 2225;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 255, this._ctx);
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
		this.enterRule(_localctx, 340, FlinkSQLParser.RULE_withOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2226;
			this.match(FlinkSQLParser.KW_WITH);
			this.state = 2227;
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
		this.enterRule(_localctx, 342, FlinkSQLParser.RULE_ifNotExists);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2229;
			this.match(FlinkSQLParser.KW_IF);
			this.state = 2230;
			this.match(FlinkSQLParser.KW_NOT);
			this.state = 2231;
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
		this.enterRule(_localctx, 344, FlinkSQLParser.RULE_ifExists);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2233;
			this.match(FlinkSQLParser.KW_IF);
			this.state = 2234;
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
		this.enterRule(_localctx, 346, FlinkSQLParser.RULE_tablePropertyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2236;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 2237;
			this.tableProperty();
			this.state = 2242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 2238;
				this.match(FlinkSQLParser.COMMA);
				this.state = 2239;
				this.tableProperty();
				}
				}
				this.state = 2244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2245;
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
		this.enterRule(_localctx, 348, FlinkSQLParser.RULE_tableProperty);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2247;
			_localctx._key = this.tablePropertyKey();
			this.state = 2252;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_FALSE || _la === FlinkSQLParser.KW_TRUE || _la === FlinkSQLParser.EQUAL_SYMBOL || ((((_la - 411)) & ~0x1F) === 0 && ((1 << (_la - 411)) & ((1 << (FlinkSQLParser.STRING_LITERAL - 411)) | (1 << (FlinkSQLParser.DIG_LITERAL - 411)) | (1 << (FlinkSQLParser.REAL_LITERAL - 411)))) !== 0)) {
				{
				this.state = 2249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.EQUAL_SYMBOL) {
					{
					this.state = 2248;
					this.match(FlinkSQLParser.EQUAL_SYMBOL);
					}
				}

				this.state = 2251;
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
		this.enterRule(_localctx, 350, FlinkSQLParser.RULE_tablePropertyKey);
		try {
			this.state = 2257;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 259, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2254;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2255;
				this.dereferenceDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2256;
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
		this.enterRule(_localctx, 352, FlinkSQLParser.RULE_tablePropertyValue);
		try {
			this.state = 2263;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.DIG_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2259;
				this.match(FlinkSQLParser.DIG_LITERAL);
				}
				break;
			case FlinkSQLParser.REAL_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2260;
				this.match(FlinkSQLParser.REAL_LITERAL);
				}
				break;
			case FlinkSQLParser.KW_FALSE:
			case FlinkSQLParser.KW_TRUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2261;
				this.booleanLiteral();
				}
				break;
			case FlinkSQLParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2262;
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
		this.enterRule(_localctx, 354, FlinkSQLParser.RULE_logicalOperator);
		try {
			this.state = 2271;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_AND:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2265;
				this.match(FlinkSQLParser.KW_AND);
				}
				break;
			case FlinkSQLParser.BIT_AND_OP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2266;
				this.match(FlinkSQLParser.BIT_AND_OP);
				this.state = 2267;
				this.match(FlinkSQLParser.BIT_AND_OP);
				}
				break;
			case FlinkSQLParser.KW_OR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2268;
				this.match(FlinkSQLParser.KW_OR);
				}
				break;
			case FlinkSQLParser.BIT_OR_OP:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2269;
				this.match(FlinkSQLParser.BIT_OR_OP);
				this.state = 2270;
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
		this.enterRule(_localctx, 356, FlinkSQLParser.RULE_comparisonOperator);
		try {
			this.state = 2287;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 262, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2273;
				this.match(FlinkSQLParser.EQUAL_SYMBOL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2274;
				this.match(FlinkSQLParser.GREATER_SYMBOL);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2275;
				this.match(FlinkSQLParser.LESS_SYMBOL);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2276;
				this.match(FlinkSQLParser.LESS_SYMBOL);
				this.state = 2277;
				this.match(FlinkSQLParser.EQUAL_SYMBOL);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2278;
				this.match(FlinkSQLParser.GREATER_SYMBOL);
				this.state = 2279;
				this.match(FlinkSQLParser.EQUAL_SYMBOL);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2280;
				this.match(FlinkSQLParser.LESS_SYMBOL);
				this.state = 2281;
				this.match(FlinkSQLParser.GREATER_SYMBOL);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2282;
				this.match(FlinkSQLParser.EXCLAMATION_SYMBOL);
				this.state = 2283;
				this.match(FlinkSQLParser.EQUAL_SYMBOL);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2284;
				this.match(FlinkSQLParser.LESS_SYMBOL);
				this.state = 2285;
				this.match(FlinkSQLParser.EQUAL_SYMBOL);
				this.state = 2286;
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
		this.enterRule(_localctx, 358, FlinkSQLParser.RULE_bitOperator);
		try {
			this.state = 2296;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.LESS_SYMBOL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2289;
				this.match(FlinkSQLParser.LESS_SYMBOL);
				this.state = 2290;
				this.match(FlinkSQLParser.LESS_SYMBOL);
				}
				break;
			case FlinkSQLParser.GREATER_SYMBOL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2291;
				this.match(FlinkSQLParser.GREATER_SYMBOL);
				this.state = 2292;
				this.match(FlinkSQLParser.GREATER_SYMBOL);
				}
				break;
			case FlinkSQLParser.BIT_AND_OP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2293;
				this.match(FlinkSQLParser.BIT_AND_OP);
				}
				break;
			case FlinkSQLParser.BIT_XOR_OP:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2294;
				this.match(FlinkSQLParser.BIT_XOR_OP);
				}
				break;
			case FlinkSQLParser.BIT_OR_OP:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2295;
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
		this.enterRule(_localctx, 360, FlinkSQLParser.RULE_mathOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2298;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.KW_DIV || ((((_la - 401)) & ~0x1F) === 0 && ((1 << (_la - 401)) & ((1 << (FlinkSQLParser.ASTERISK_SIGN - 401)) | (1 << (FlinkSQLParser.HYPNEN_SIGN - 401)) | (1 << (FlinkSQLParser.ADD_SIGN - 401)) | (1 << (FlinkSQLParser.PENCENT_SIGN - 401)) | (1 << (FlinkSQLParser.DOUBLE_HYPNEN_SIGN - 401)) | (1 << (FlinkSQLParser.SLASH_SIGN - 401)))) !== 0))) {
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
		this.enterRule(_localctx, 362, FlinkSQLParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2300;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.KW_NOT || ((((_la - 382)) & ~0x1F) === 0 && ((1 << (_la - 382)) & ((1 << (FlinkSQLParser.EXCLAMATION_SYMBOL - 382)) | (1 << (FlinkSQLParser.BIT_NOT_OP - 382)) | (1 << (FlinkSQLParser.HYPNEN_SIGN - 382)) | (1 << (FlinkSQLParser.ADD_SIGN - 382)))) !== 0))) {
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
		this.enterRule(_localctx, 364, FlinkSQLParser.RULE_constant);
		let _la: number;
		try {
			this.state = 2316;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_INTERVAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2302;
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
				this.state = 2303;
				this.timePointLiteral();
				}
				break;
			case FlinkSQLParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2304;
				this.stringLiteral();
				}
				break;
			case FlinkSQLParser.HYPNEN_SIGN:
			case FlinkSQLParser.DIG_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.HYPNEN_SIGN) {
					{
					this.state = 2305;
					this.match(FlinkSQLParser.HYPNEN_SIGN);
					}
				}

				this.state = 2308;
				this.decimalLiteral();
				}
				break;
			case FlinkSQLParser.KW_FALSE:
			case FlinkSQLParser.KW_TRUE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2309;
				this.booleanLiteral();
				}
				break;
			case FlinkSQLParser.REAL_LITERAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2310;
				this.match(FlinkSQLParser.REAL_LITERAL);
				}
				break;
			case FlinkSQLParser.BIT_STRING:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2311;
				this.match(FlinkSQLParser.BIT_STRING);
				}
				break;
			case FlinkSQLParser.KW_NOT:
			case FlinkSQLParser.KW_NULL:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2313;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 2312;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 2315;
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
		this.enterRule(_localctx, 366, FlinkSQLParser.RULE_timePointLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2318;
			this.timePointUnit();
			this.state = 2319;
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
		this.enterRule(_localctx, 368, FlinkSQLParser.RULE_stringLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2321;
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
		this.enterRule(_localctx, 370, FlinkSQLParser.RULE_decimalLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2323;
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
		this.enterRule(_localctx, 372, FlinkSQLParser.RULE_booleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2325;
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
		this.enterRule(_localctx, 374, FlinkSQLParser.RULE_setQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2327;
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
		this.enterRule(_localctx, 376, FlinkSQLParser.RULE_timePointUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2329;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.KW_MICROSECOND || _la === FlinkSQLParser.KW_MILLISECOND || _la === FlinkSQLParser.KW_QUARTER || _la === FlinkSQLParser.KW_WEEK || _la === FlinkSQLParser.KW_DAY || ((((_la - 264)) & ~0x1F) === 0 && ((1 << (_la - 264)) & ((1 << (FlinkSQLParser.KW_HOUR - 264)) | (1 << (FlinkSQLParser.KW_MINUTE - 264)) | (1 << (FlinkSQLParser.KW_MONTH - 264)))) !== 0) || _la === FlinkSQLParser.KW_SECOND || _la === FlinkSQLParser.KW_YEAR)) {
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
		this.enterRule(_localctx, 378, FlinkSQLParser.RULE_timeIntervalUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2331;
			_la = this._input.LA(1);
			if (!(((((_la - 15)) & ~0x1F) === 0 && ((1 << (_la - 15)) & ((1 << (FlinkSQLParser.KW_CENTURY - 15)) | (1 << (FlinkSQLParser.KW_DAYS - 15)) | (1 << (FlinkSQLParser.KW_DECADE - 15)) | (1 << (FlinkSQLParser.KW_EPOCH - 15)))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (FlinkSQLParser.KW_HOURS - 60)) | (1 << (FlinkSQLParser.KW_MICROSECOND - 60)) | (1 << (FlinkSQLParser.KW_MILLENNIUM - 60)) | (1 << (FlinkSQLParser.KW_MILLISECOND - 60)) | (1 << (FlinkSQLParser.KW_MINUTES - 60)) | (1 << (FlinkSQLParser.KW_MONTHS - 60)) | (1 << (FlinkSQLParser.KW_NANOSECOND - 60)))) !== 0) || _la === FlinkSQLParser.KW_QUARTER || _la === FlinkSQLParser.KW_SECONDS || ((((_la - 174)) & ~0x1F) === 0 && ((1 << (_la - 174)) & ((1 << (FlinkSQLParser.KW_WEEK - 174)) | (1 << (FlinkSQLParser.KW_WEEKS - 174)) | (1 << (FlinkSQLParser.KW_YEARS - 174)))) !== 0) || _la === FlinkSQLParser.KW_DAY || ((((_la - 264)) & ~0x1F) === 0 && ((1 << (_la - 264)) & ((1 << (FlinkSQLParser.KW_HOUR - 264)) | (1 << (FlinkSQLParser.KW_MINUTE - 264)) | (1 << (FlinkSQLParser.KW_MONTH - 264)))) !== 0) || _la === FlinkSQLParser.KW_SECOND || _la === FlinkSQLParser.KW_YEAR)) {
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
		this.enterRule(_localctx, 380, FlinkSQLParser.RULE_reservedKeywordsUsedAsFuncParam);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2333;
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
		this.enterRule(_localctx, 382, FlinkSQLParser.RULE_reservedKeywordsUsedAsFuncName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2335;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.KW_IF || _la === FlinkSQLParser.KW_MAP || _la === FlinkSQLParser.KW_QUARTER || ((((_la - 174)) & ~0x1F) === 0 && ((1 << (_la - 174)) & ((1 << (FlinkSQLParser.KW_WEEK - 174)) | (1 << (FlinkSQLParser.KW_ABS - 174)) | (1 << (FlinkSQLParser.KW_ARRAY - 174)) | (1 << (FlinkSQLParser.KW_AVG - 174)) | (1 << (FlinkSQLParser.KW_CAST - 174)))) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (FlinkSQLParser.KW_CEIL - 206)) | (1 << (FlinkSQLParser.KW_COALESCE - 206)) | (1 << (FlinkSQLParser.KW_COLLECT - 206)) | (1 << (FlinkSQLParser.KW_COUNT - 206)) | (1 << (FlinkSQLParser.KW_DATE - 206)))) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & ((1 << (FlinkSQLParser.KW_GROUPING - 261)) | (1 << (FlinkSQLParser.KW_HOUR - 261)) | (1 << (FlinkSQLParser.KW_LAG - 261)) | (1 << (FlinkSQLParser.KW_LEFT - 261)) | (1 << (FlinkSQLParser.KW_MINUTE - 261)))) !== 0) || ((((_la - 295)) & ~0x1F) === 0 && ((1 << (_la - 295)) & ((1 << (FlinkSQLParser.KW_MONTH - 295)) | (1 << (FlinkSQLParser.KW_OVERLAY - 295)) | (1 << (FlinkSQLParser.KW_POSITION - 295)) | (1 << (FlinkSQLParser.KW_POWER - 295)) | (1 << (FlinkSQLParser.KW_RANK - 295)) | (1 << (FlinkSQLParser.KW_RIGHT - 295)))) !== 0) || ((((_la - 332)) & ~0x1F) === 0 && ((1 << (_la - 332)) & ((1 << (FlinkSQLParser.KW_SECOND - 332)) | (1 << (FlinkSQLParser.KW_SUBSTRING - 332)) | (1 << (FlinkSQLParser.KW_SUM - 332)) | (1 << (FlinkSQLParser.KW_TIME - 332)) | (1 << (FlinkSQLParser.KW_TIMESTAMP - 332)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_3 - 332)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_6 - 332)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_9 - 332)) | (1 << (FlinkSQLParser.KW_TRUNCATE - 332)))) !== 0) || _la === FlinkSQLParser.KW_UPPER || _la === FlinkSQLParser.KW_YEAR)) {
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
		this.enterRule(_localctx, 384, FlinkSQLParser.RULE_reservedKeywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2337;
			_la = this._input.LA(1);
			if (!(((((_la - 180)) & ~0x1F) === 0 && ((1 << (_la - 180)) & ((1 << (FlinkSQLParser.KW_ABS - 180)) | (1 << (FlinkSQLParser.KW_ALL - 180)) | (1 << (FlinkSQLParser.KW_ALLOW - 180)) | (1 << (FlinkSQLParser.KW_ALTER - 180)) | (1 << (FlinkSQLParser.KW_AND - 180)) | (1 << (FlinkSQLParser.KW_ANY - 180)) | (1 << (FlinkSQLParser.KW_ARE - 180)) | (1 << (FlinkSQLParser.KW_ARRAY - 180)) | (1 << (FlinkSQLParser.KW_AS - 180)) | (1 << (FlinkSQLParser.KW_ASYMMETRIC - 180)) | (1 << (FlinkSQLParser.KW_AT - 180)) | (1 << (FlinkSQLParser.KW_AVG - 180)) | (1 << (FlinkSQLParser.KW_BEGIN - 180)) | (1 << (FlinkSQLParser.KW_BETWEEN - 180)) | (1 << (FlinkSQLParser.KW_BIGINT - 180)) | (1 << (FlinkSQLParser.KW_BINARY - 180)) | (1 << (FlinkSQLParser.KW_BIT - 180)) | (1 << (FlinkSQLParser.KW_BLOB - 180)) | (1 << (FlinkSQLParser.KW_BOOLEAN - 180)) | (1 << (FlinkSQLParser.KW_BOTH - 180)) | (1 << (FlinkSQLParser.KW_BY - 180)) | (1 << (FlinkSQLParser.KW_CALL - 180)) | (1 << (FlinkSQLParser.KW_CALLED - 180)) | (1 << (FlinkSQLParser.KW_CASCADED - 180)) | (1 << (FlinkSQLParser.KW_CASE - 180)) | (1 << (FlinkSQLParser.KW_CAST - 180)) | (1 << (FlinkSQLParser.KW_CEIL - 180)) | (1 << (FlinkSQLParser.KW_CHAR - 180)) | (1 << (FlinkSQLParser.KW_CHARACTER - 180)) | (1 << (FlinkSQLParser.KW_CHECK - 180)) | (1 << (FlinkSQLParser.KW_CLOB - 180)) | (1 << (FlinkSQLParser.KW_CLOSE - 180)))) !== 0) || ((((_la - 212)) & ~0x1F) === 0 && ((1 << (_la - 212)) & ((1 << (FlinkSQLParser.KW_COALESCE - 212)) | (1 << (FlinkSQLParser.KW_COLLATE - 212)) | (1 << (FlinkSQLParser.KW_COLLECT - 212)) | (1 << (FlinkSQLParser.KW_COLUMN - 212)) | (1 << (FlinkSQLParser.KW_COMMIT - 212)) | (1 << (FlinkSQLParser.KW_CONNECT - 212)) | (1 << (FlinkSQLParser.KW_CONSTRAINT - 212)) | (1 << (FlinkSQLParser.KW_CONTAINS - 212)) | (1 << (FlinkSQLParser.KW_CONVERT - 212)) | (1 << (FlinkSQLParser.KW_COUNT - 212)) | (1 << (FlinkSQLParser.KW_CREATE - 212)) | (1 << (FlinkSQLParser.KW_CROSS - 212)) | (1 << (FlinkSQLParser.KW_CUBE - 212)) | (1 << (FlinkSQLParser.KW_CURRENT - 212)) | (1 << (FlinkSQLParser.KW_CURSOR - 212)) | (1 << (FlinkSQLParser.KW_CYCLE - 212)) | (1 << (FlinkSQLParser.KW_DATE - 212)) | (1 << (FlinkSQLParser.KW_DATETIME - 212)) | (1 << (FlinkSQLParser.KW_DAY - 212)) | (1 << (FlinkSQLParser.KW_DEC - 212)) | (1 << (FlinkSQLParser.KW_DECIMAL - 212)) | (1 << (FlinkSQLParser.KW_DECLARE - 212)) | (1 << (FlinkSQLParser.KW_DEFAULT - 212)) | (1 << (FlinkSQLParser.KW_DEFINE - 212)) | (1 << (FlinkSQLParser.KW_DELETE - 212)) | (1 << (FlinkSQLParser.KW_DESCRIBE - 212)) | (1 << (FlinkSQLParser.KW_DISTINCT - 212)) | (1 << (FlinkSQLParser.KW_DOUBLE - 212)) | (1 << (FlinkSQLParser.KW_DROP - 212)) | (1 << (FlinkSQLParser.KW_EACH - 212)) | (1 << (FlinkSQLParser.KW_ELSE - 212)) | (1 << (FlinkSQLParser.KW_END - 212)))) !== 0) || ((((_la - 244)) & ~0x1F) === 0 && ((1 << (_la - 244)) & ((1 << (FlinkSQLParser.KW_EQUALS - 244)) | (1 << (FlinkSQLParser.KW_EXCEPT - 244)) | (1 << (FlinkSQLParser.KW_EXECUTE - 244)) | (1 << (FlinkSQLParser.KW_EXISTS - 244)) | (1 << (FlinkSQLParser.KW_EXPLAIN - 244)) | (1 << (FlinkSQLParser.KW_EXTERNAL - 244)) | (1 << (FlinkSQLParser.KW_EXTRACT - 244)) | (1 << (FlinkSQLParser.KW_FALSE - 244)) | (1 << (FlinkSQLParser.KW_FLOAT - 244)) | (1 << (FlinkSQLParser.KW_FOR - 244)) | (1 << (FlinkSQLParser.KW_FROM - 244)) | (1 << (FlinkSQLParser.KW_FULL - 244)) | (1 << (FlinkSQLParser.KW_FUNCTION - 244)) | (1 << (FlinkSQLParser.KW_GLOBAL - 244)) | (1 << (FlinkSQLParser.KW_GRANT - 244)) | (1 << (FlinkSQLParser.KW_GROUP - 244)) | (1 << (FlinkSQLParser.KW_GROUPING - 244)) | (1 << (FlinkSQLParser.KW_GROUPS - 244)) | (1 << (FlinkSQLParser.KW_HAVING - 244)) | (1 << (FlinkSQLParser.KW_HOUR - 244)) | (1 << (FlinkSQLParser.KW_IMPORT - 244)) | (1 << (FlinkSQLParser.KW_IN - 244)) | (1 << (FlinkSQLParser.KW_INCLUDING - 244)) | (1 << (FlinkSQLParser.KW_INNER - 244)) | (1 << (FlinkSQLParser.KW_INOUT - 244)) | (1 << (FlinkSQLParser.KW_INSERT - 244)) | (1 << (FlinkSQLParser.KW_INT - 244)) | (1 << (FlinkSQLParser.KW_INTEGER - 244)) | (1 << (FlinkSQLParser.KW_INTERSECT - 244)) | (1 << (FlinkSQLParser.KW_INTERVAL - 244)) | (1 << (FlinkSQLParser.KW_INTO - 244)))) !== 0) || ((((_la - 276)) & ~0x1F) === 0 && ((1 << (_la - 276)) & ((1 << (FlinkSQLParser.KW_IS - 276)) | (1 << (FlinkSQLParser.KW_JOIN - 276)) | (1 << (FlinkSQLParser.KW_LAG - 276)) | (1 << (FlinkSQLParser.KW_LANGUAGE - 276)) | (1 << (FlinkSQLParser.KW_LATERAL - 276)) | (1 << (FlinkSQLParser.KW_LEADING - 276)) | (1 << (FlinkSQLParser.KW_LEFT - 276)) | (1 << (FlinkSQLParser.KW_LIKE - 276)) | (1 << (FlinkSQLParser.KW_LIMIT - 276)) | (1 << (FlinkSQLParser.KW_LOCAL - 276)) | (1 << (FlinkSQLParser.KW_MATCH - 276)) | (1 << (FlinkSQLParser.KW_MATCH_RECOGNIZE - 276)) | (1 << (FlinkSQLParser.KW_MEASURES - 276)) | (1 << (FlinkSQLParser.KW_MERGE - 276)) | (1 << (FlinkSQLParser.KW_METADATA - 276)) | (1 << (FlinkSQLParser.KW_MINUS - 276)) | (1 << (FlinkSQLParser.KW_MINUTE - 276)) | (1 << (FlinkSQLParser.KW_MODIFIES - 276)) | (1 << (FlinkSQLParser.KW_MODULE - 276)) | (1 << (FlinkSQLParser.KW_MONTH - 276)) | (1 << (FlinkSQLParser.KW_MULTISET - 276)) | (1 << (FlinkSQLParser.KW_NATURAL - 276)) | (1 << (FlinkSQLParser.KW_NEXT - 276)) | (1 << (FlinkSQLParser.KW_NO - 276)) | (1 << (FlinkSQLParser.KW_NONE - 276)) | (1 << (FlinkSQLParser.KW_NOT - 276)) | (1 << (FlinkSQLParser.KW_NULL - 276)) | (1 << (FlinkSQLParser.KW_NUMERIC - 276)) | (1 << (FlinkSQLParser.KW_OF - 276)) | (1 << (FlinkSQLParser.KW_OFFSET - 276)) | (1 << (FlinkSQLParser.KW_ON - 276)) | (1 << (FlinkSQLParser.KW_ONE - 276)))) !== 0) || ((((_la - 308)) & ~0x1F) === 0 && ((1 << (_la - 308)) & ((1 << (FlinkSQLParser.KW_OR - 308)) | (1 << (FlinkSQLParser.KW_ORDER - 308)) | (1 << (FlinkSQLParser.KW_OUT - 308)) | (1 << (FlinkSQLParser.KW_OUTER - 308)) | (1 << (FlinkSQLParser.KW_OVER - 308)) | (1 << (FlinkSQLParser.KW_OVERLAY - 308)) | (1 << (FlinkSQLParser.KW_PARTITION - 308)) | (1 << (FlinkSQLParser.KW_PATTERN - 308)) | (1 << (FlinkSQLParser.KW_PER - 308)) | (1 << (FlinkSQLParser.KW_PERCENT - 308)) | (1 << (FlinkSQLParser.KW_PERIOD - 308)) | (1 << (FlinkSQLParser.KW_POSITION - 308)) | (1 << (FlinkSQLParser.KW_PRIMARY - 308)) | (1 << (FlinkSQLParser.KW_RANGE - 308)) | (1 << (FlinkSQLParser.KW_RANK - 308)) | (1 << (FlinkSQLParser.KW_RESET - 308)) | (1 << (FlinkSQLParser.KW_REVOKE - 308)) | (1 << (FlinkSQLParser.KW_RIGHT - 308)) | (1 << (FlinkSQLParser.KW_RLIKE - 308)) | (1 << (FlinkSQLParser.KW_ROLLBACK - 308)) | (1 << (FlinkSQLParser.KW_ROLLUP - 308)) | (1 << (FlinkSQLParser.KW_ROW - 308)) | (1 << (FlinkSQLParser.KW_ROWS - 308)) | (1 << (FlinkSQLParser.KW_SECOND - 308)) | (1 << (FlinkSQLParser.KW_SELECT - 308)) | (1 << (FlinkSQLParser.KW_SET - 308)) | (1 << (FlinkSQLParser.KW_SHOW - 308)) | (1 << (FlinkSQLParser.KW_SIMILAR - 308)) | (1 << (FlinkSQLParser.KW_SKIP - 308)) | (1 << (FlinkSQLParser.KW_SMALLINT - 308)) | (1 << (FlinkSQLParser.KW_START - 308)))) !== 0) || ((((_la - 340)) & ~0x1F) === 0 && ((1 << (_la - 340)) & ((1 << (FlinkSQLParser.KW_STATIC - 340)) | (1 << (FlinkSQLParser.KW_SUBSTRING - 340)) | (1 << (FlinkSQLParser.KW_SUM - 340)) | (1 << (FlinkSQLParser.KW_SYSTEM - 340)) | (1 << (FlinkSQLParser.KW_SYSTEM_TIME - 340)) | (1 << (FlinkSQLParser.KW_SYSTEM_USER - 340)) | (1 << (FlinkSQLParser.KW_TABLE - 340)) | (1 << (FlinkSQLParser.KW_TABLESAMPLE - 340)) | (1 << (FlinkSQLParser.KW_THEN - 340)) | (1 << (FlinkSQLParser.KW_TIME - 340)) | (1 << (FlinkSQLParser.KW_TIMESTAMP - 340)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_3 - 340)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_6 - 340)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_9 - 340)) | (1 << (FlinkSQLParser.KW_TINYINT - 340)) | (1 << (FlinkSQLParser.KW_TO - 340)) | (1 << (FlinkSQLParser.KW_TRUE - 340)) | (1 << (FlinkSQLParser.KW_TRUNCATE - 340)) | (1 << (FlinkSQLParser.KW_UNION - 340)) | (1 << (FlinkSQLParser.KW_UNIQUE - 340)) | (1 << (FlinkSQLParser.KW_UNKNOWN - 340)) | (1 << (FlinkSQLParser.KW_UNNEST - 340)) | (1 << (FlinkSQLParser.KW_UPPER - 340)) | (1 << (FlinkSQLParser.KW_UPSERT - 340)) | (1 << (FlinkSQLParser.KW_USER - 340)) | (1 << (FlinkSQLParser.KW_USING - 340)) | (1 << (FlinkSQLParser.KW_VALUE - 340)) | (1 << (FlinkSQLParser.KW_VALUES - 340)) | (1 << (FlinkSQLParser.KW_VARBINARY - 340)) | (1 << (FlinkSQLParser.KW_VARCHAR - 340)))) !== 0) || ((((_la - 372)) & ~0x1F) === 0 && ((1 << (_la - 372)) & ((1 << (FlinkSQLParser.KW_WHEN - 372)) | (1 << (FlinkSQLParser.KW_WHERE - 372)) | (1 << (FlinkSQLParser.KW_WINDOW - 372)) | (1 << (FlinkSQLParser.KW_WITH - 372)) | (1 << (FlinkSQLParser.KW_WITHIN - 372)) | (1 << (FlinkSQLParser.KW_WITHOUT - 372)) | (1 << (FlinkSQLParser.KW_YEAR - 372)))) !== 0))) {
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
		this.enterRule(_localctx, 386, FlinkSQLParser.RULE_nonReservedKeywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2339;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSQLParser.KW_ADD) | (1 << FlinkSQLParser.KW_ADMIN) | (1 << FlinkSQLParser.KW_AFTER) | (1 << FlinkSQLParser.KW_ANALYZE) | (1 << FlinkSQLParser.KW_ASC) | (1 << FlinkSQLParser.KW_BEFORE) | (1 << FlinkSQLParser.KW_BYTES) | (1 << FlinkSQLParser.KW_CASCADE) | (1 << FlinkSQLParser.KW_CATALOG) | (1 << FlinkSQLParser.KW_CATALOGS) | (1 << FlinkSQLParser.KW_CENTURY) | (1 << FlinkSQLParser.KW_CHAIN) | (1 << FlinkSQLParser.KW_CHANGELOG_MODE) | (1 << FlinkSQLParser.KW_CHARACTERS) | (1 << FlinkSQLParser.KW_COMMENT) | (1 << FlinkSQLParser.KW_COMPACT) | (1 << FlinkSQLParser.KW_COLUMNS) | (1 << FlinkSQLParser.KW_CONSTRAINTS) | (1 << FlinkSQLParser.KW_CONSTRUCTOR) | (1 << FlinkSQLParser.KW_CUMULATE) | (1 << FlinkSQLParser.KW_DATA) | (1 << FlinkSQLParser.KW_DATABASE) | (1 << FlinkSQLParser.KW_DATABASES) | (1 << FlinkSQLParser.KW_DAYS) | (1 << FlinkSQLParser.KW_DECADE) | (1 << FlinkSQLParser.KW_DEFINED) | (1 << FlinkSQLParser.KW_DESC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSQLParser.KW_DESCRIPTOR - 32)) | (1 << (FlinkSQLParser.KW_DIV - 32)) | (1 << (FlinkSQLParser.KW_ENCODING - 32)) | (1 << (FlinkSQLParser.KW_ENFORCED - 32)) | (1 << (FlinkSQLParser.KW_ENGINE - 32)) | (1 << (FlinkSQLParser.KW_ERROR - 32)) | (1 << (FlinkSQLParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSQLParser.KW_EXCEPTION - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDE - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDING - 32)) | (1 << (FlinkSQLParser.KW_EXTENDED - 32)) | (1 << (FlinkSQLParser.KW_FILE - 32)) | (1 << (FlinkSQLParser.KW_FINAL - 32)) | (1 << (FlinkSQLParser.KW_FIRST - 32)) | (1 << (FlinkSQLParser.KW_FOLLOWING - 32)) | (1 << (FlinkSQLParser.KW_FORMAT - 32)) | (1 << (FlinkSQLParser.KW_FORTRAN - 32)) | (1 << (FlinkSQLParser.KW_FOUND - 32)) | (1 << (FlinkSQLParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSQLParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSQLParser.KW_GENERAL - 32)) | (1 << (FlinkSQLParser.KW_GENERATED - 32)) | (1 << (FlinkSQLParser.KW_GO - 32)) | (1 << (FlinkSQLParser.KW_GOTO - 32)) | (1 << (FlinkSQLParser.KW_GRANTED - 32)) | (1 << (FlinkSQLParser.KW_HOP - 32)) | (1 << (FlinkSQLParser.KW_HOURS - 32)) | (1 << (FlinkSQLParser.KW_IF - 32)) | (1 << (FlinkSQLParser.KW_IGNORE - 32)) | (1 << (FlinkSQLParser.KW_INCREMENT - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSQLParser.KW_INPUT - 64)) | (1 << (FlinkSQLParser.KW_INVOKER - 64)) | (1 << (FlinkSQLParser.KW_JAR - 64)) | (1 << (FlinkSQLParser.KW_JARS - 64)) | (1 << (FlinkSQLParser.KW_JAVA - 64)) | (1 << (FlinkSQLParser.KW_JSON - 64)) | (1 << (FlinkSQLParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSQLParser.KW_KEY - 64)) | (1 << (FlinkSQLParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSQLParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSQLParser.KW_LABEL - 64)) | (1 << (FlinkSQLParser.KW_LAST - 64)) | (1 << (FlinkSQLParser.KW_LENGTH - 64)) | (1 << (FlinkSQLParser.KW_LEVEL - 64)) | (1 << (FlinkSQLParser.KW_LOAD - 64)) | (1 << (FlinkSQLParser.KW_MAP - 64)) | (1 << (FlinkSQLParser.KW_MICROSECOND - 64)) | (1 << (FlinkSQLParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSQLParser.KW_MILLISECOND - 64)) | (1 << (FlinkSQLParser.KW_MINUTES - 64)) | (1 << (FlinkSQLParser.KW_MINVALUE - 64)) | (1 << (FlinkSQLParser.KW_MODIFY - 64)) | (1 << (FlinkSQLParser.KW_MODULES - 64)) | (1 << (FlinkSQLParser.KW_MONTHS - 64)) | (1 << (FlinkSQLParser.KW_NANOSECOND - 64)) | (1 << (FlinkSQLParser.KW_NULLS - 64)) | (1 << (FlinkSQLParser.KW_NUMBER - 64)) | (1 << (FlinkSQLParser.KW_OPTION - 64)) | (1 << (FlinkSQLParser.KW_OPTIONS - 64)) | (1 << (FlinkSQLParser.KW_ORDERING - 64)) | (1 << (FlinkSQLParser.KW_OUTPUT - 64)) | (1 << (FlinkSQLParser.KW_OVERWRITE - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSQLParser.KW_OVERWRITING - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONED - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONS - 96)) | (1 << (FlinkSQLParser.KW_PASSING - 96)) | (1 << (FlinkSQLParser.KW_PAST - 96)) | (1 << (FlinkSQLParser.KW_PATH - 96)) | (1 << (FlinkSQLParser.KW_PLACING - 96)) | (1 << (FlinkSQLParser.KW_PLAN - 96)) | (1 << (FlinkSQLParser.KW_PRECEDING - 96)) | (1 << (FlinkSQLParser.KW_PRESERVE - 96)) | (1 << (FlinkSQLParser.KW_PRIOR - 96)) | (1 << (FlinkSQLParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSQLParser.KW_PUBLIC - 96)) | (1 << (FlinkSQLParser.KW_PYTHON - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSQLParser.KW_QUARTER - 96)) | (1 << (FlinkSQLParser.KW_RAW - 96)) | (1 << (FlinkSQLParser.KW_READ - 96)) | (1 << (FlinkSQLParser.KW_RELATIVE - 96)) | (1 << (FlinkSQLParser.KW_REMOVE - 96)) | (1 << (FlinkSQLParser.KW_RENAME - 96)) | (1 << (FlinkSQLParser.KW_REPLACE - 96)) | (1 << (FlinkSQLParser.KW_RESPECT - 96)) | (1 << (FlinkSQLParser.KW_RESTART - 96)) | (1 << (FlinkSQLParser.KW_RESTRICT - 96)) | (1 << (FlinkSQLParser.KW_ROLE - 96)) | (1 << (FlinkSQLParser.KW_ROW_COUNT - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSQLParser.KW_SCALA - 128)) | (1 << (FlinkSQLParser.KW_SCALAR - 128)) | (1 << (FlinkSQLParser.KW_SCALE - 128)) | (1 << (FlinkSQLParser.KW_SCHEMA - 128)) | (1 << (FlinkSQLParser.KW_SECONDS - 128)) | (1 << (FlinkSQLParser.KW_SECTION - 128)) | (1 << (FlinkSQLParser.KW_SECURITY - 128)) | (1 << (FlinkSQLParser.KW_SELF - 128)) | (1 << (FlinkSQLParser.KW_SERVER - 128)) | (1 << (FlinkSQLParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSQLParser.KW_SESSION - 128)) | (1 << (FlinkSQLParser.KW_SETS - 128)) | (1 << (FlinkSQLParser.KW_SIMPLE - 128)) | (1 << (FlinkSQLParser.KW_SIZE - 128)) | (1 << (FlinkSQLParser.KW_SLIDE - 128)) | (1 << (FlinkSQLParser.KW_SOURCE - 128)) | (1 << (FlinkSQLParser.KW_SPACE - 128)) | (1 << (FlinkSQLParser.KW_STATE - 128)) | (1 << (FlinkSQLParser.KW_STATEMENT - 128)) | (1 << (FlinkSQLParser.KW_STEP - 128)) | (1 << (FlinkSQLParser.KW_STRING - 128)) | (1 << (FlinkSQLParser.KW_STRUCTURE - 128)) | (1 << (FlinkSQLParser.KW_STYLE - 128)) | (1 << (FlinkSQLParser.KW_TABLES - 128)) | (1 << (FlinkSQLParser.KW_TEMPORARY - 128)) | (1 << (FlinkSQLParser.KW_TIMECOL - 128)) | (1 << (FlinkSQLParser.KW_FLOOR - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_LTZ - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPADD - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPDIFF - 128)) | (1 << (FlinkSQLParser.KW_TRANSFORM - 128)) | (1 << (FlinkSQLParser.KW_TUMBLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSQLParser.KW_TYPE - 160)) | (1 << (FlinkSQLParser.KW_UNDER - 160)) | (1 << (FlinkSQLParser.KW_UNLOAD - 160)) | (1 << (FlinkSQLParser.KW_USAGE - 160)) | (1 << (FlinkSQLParser.KW_USE - 160)) | (1 << (FlinkSQLParser.KW_UTF16 - 160)) | (1 << (FlinkSQLParser.KW_UTF32 - 160)) | (1 << (FlinkSQLParser.KW_UTF8 - 160)) | (1 << (FlinkSQLParser.KW_VERSION - 160)) | (1 << (FlinkSQLParser.KW_VIEW - 160)) | (1 << (FlinkSQLParser.KW_VIEWS - 160)) | (1 << (FlinkSQLParser.KW_VIRTUAL - 160)) | (1 << (FlinkSQLParser.KW_WATERMARK - 160)) | (1 << (FlinkSQLParser.KW_WATERMARKS - 160)) | (1 << (FlinkSQLParser.KW_WEEK - 160)) | (1 << (FlinkSQLParser.KW_WORK - 160)) | (1 << (FlinkSQLParser.KW_WRAPPER - 160)) | (1 << (FlinkSQLParser.KW_YEARS - 160)) | (1 << (FlinkSQLParser.KW_ZONE - 160)))) !== 0))) {
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
		case 79:
			return this.queryStatement_sempred(_localctx as QueryStatementContext, predIndex);

		case 89:
			return this.tableExpression_sempred(_localctx as TableExpressionContext, predIndex);

		case 130:
			return this.booleanExpression_sempred(_localctx as BooleanExpressionContext, predIndex);

		case 133:
			return this.valueExpression_sempred(_localctx as ValueExpressionContext, predIndex);

		case 134:
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
			return this.precpred(this._ctx, 5);

		case 3:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}
	private booleanExpression_sempred(_localctx: BooleanExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 3);

		case 5:
			return this.precpred(this._ctx, 2);

		case 6:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private valueExpression_sempred(_localctx: ValueExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.precpred(this._ctx, 7);

		case 8:
			return this.precpred(this._ctx, 6);

		case 9:
			return this.precpred(this._ctx, 5);

		case 10:
			return this.precpred(this._ctx, 4);

		case 11:
			return this.precpred(this._ctx, 3);

		case 12:
			return this.precpred(this._ctx, 2);

		case 13:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private primaryExpression_sempred(_localctx: PrimaryExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 14:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 5;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\u01A2\u0928\x04" +
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
		"\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD" +
		"\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x04\xC1\t\xC1\x04\xC2\t\xC2" +
		"\x04\xC3\t\xC3\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04" +
		"\x03\x04\x03\x04\x07\x04\u0190\n\x04\f\x04\x0E\x04\u0193\v\x04\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u01B8" +
		"\n\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u01CA\n\b\x03\t\x03\t\x05\t" +
		"\u01CE\n\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x05\v\u01D7\n\v\x03" +
		"\v\x03\v\x03\v\x05\v\u01DC\n\v\x03\f\x03\f\x03\f\x07\f\u01E1\n\f\f\f\x0E" +
		"\f\u01E4\v\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x05\x0E\u01EE\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u01F5" +
		"\n\x0F\f\x0F\x0E\x0F\u01F8\v\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0203\n\x10\x03\x10\x05\x10\u0206" +
		"\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u020D\n\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0215\n\x10\x03\x10" +
		"\x03\x10\x03\x10\x05\x10\u021A\n\x10\x03\x10\x05\x10\u021D\n\x10\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0224\n\x11\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x13\x03\x13\x05\x13\u022C\n\x13\x03\x14\x03\x14\x05\x14" +
		"\u0230\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x06\x16\u0237\n\x16" +
		"\r\x16\x0E\x16\u0238\x03\x17\x03\x17\x05\x17\u023D\n\x17\x03\x18\x03\x18" +
		"\x05\x18\u0241\n\x18\x03\x18\x03\x18\x05\x18\u0245\n\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x07\x18\u024C\n\x18\f\x18\x0E\x18\u024F\v\x18" +
		"\x03\x18\x03\x18\x05\x18\u0253\n\x18\x03\x18\x03\x18\x05\x18\u0257\n\x18" +
		"\x03\x18\x03\x18\x05\x18\u025B\n\x18\x03\x18\x03\x18\x05\x18\u025F\n\x18" +
		"\x03\x18\x05\x18\u0262\n\x18\x03\x18\x03\x18\x05\x18\u0266\n\x18\x03\x19" +
		"\x03\x19\x03\x19\x05\x19\u026B\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05" +
		"\x19\u0271\n\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0276\n\x1A\x03\x1B\x03" +
		"\x1B\x03\x1B\x05\x1B\u027B\n\x1B\x03\x1B\x05\x1B\u027E\n\x1B\x03\x1C\x03" +
		"\x1C\x05\x1C\u0282\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u0288" +
		"\n\x1D\f\x1D\x0E\x1D\u028B\v\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E" +
		"\x05\x1E\u0292\n\x1E\x03\x1E\x03\x1E\x05\x1E\u0296\n\x1E\x03\x1E\x03\x1E" +
		"\x05\x1E\u029A\n\x1E\x03\x1E\x03\x1E\x05\x1E\u029E\n\x1E\x03\x1E\x03\x1E" +
		"\x05\x1E\u02A2\n\x1E\x03\x1E\x03\x1E\x05\x1E\u02A6\n\x1E\x03\x1E\x03\x1E" +
		"\x05\x1E\u02AA\n\x1E\x03\x1E\x03\x1E\x05\x1E\u02AE\n\x1E\x03\x1E\x03\x1E" +
		"\x05\x1E\u02B2\n\x1E\x03\x1E\x03\x1E\x05\x1E\u02B6\n\x1E\x03\x1E\x03\x1E" +
		"\x05\x1E\u02BA\n\x1E\x03\x1E\x03\x1E\x05\x1E\u02BE\n\x1E\x03\x1E\x03\x1E" +
		"\x05\x1E\u02C2\n\x1E\x03\x1E\x03\x1E\x05\x1E\u02C6\n\x1E\x03\x1E\x03\x1E" +
		"\x05\x1E\u02CA\n\x1E\x03\x1E\x03\x1E\x05\x1E\u02CE\n\x1E\x03\x1E\x03\x1E" +
		"\x05\x1E\u02D2\n\x1E\x03\x1E\x03\x1E\x05\x1E\u02D6\n\x1E\x05\x1E\u02D8" +
		"\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x05 \u02E2" +
		"\n \x03 \x03 \x03!\x03!\x03!\x03!\x05!\u02EA\n!\x03!\x03!\x03\"\x03\"" +
		"\x03\"\x03\"\x07\"\u02F2\n\"\f\"\x0E\"\u02F5\v\"\x03\"\x03\"\x03#\x03" +
		"#\x03#\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x07$\u0307" +
		"\n$\f$\x0E$\u030A\v$\x03$\x03$\x03%\x03%\x05%\u0310\n%\x03%\x03%\x03%" +
		"\x03%\x05%\u0316\n%\x03%\x05%\u0319\n%\x03%\x05%\u031C\n%\x03&\x03&\x03" +
		"&\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u0326\n\'\x03\'\x05\'\u0329\n\'" +
		"\x03(\x03(\x03)\x03)\x03)\x03)\x05)\u0331\n)\x03*\x03*\x03+\x03+\x03+" +
		"\x03+\x03+\x03+\x03,\x03,\x05,\u033D\n,\x03,\x03,\x03,\x03,\x03,\x03," +
		"\x03-\x03-\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x030\x030\x030\x03" +
		"0\x070\u0353\n0\f0\x0E0\u0356\v0\x030\x030\x031\x031\x031\x031\x031\x03" +
		"1\x071\u0360\n1\f1\x0E1\u0363\v1\x031\x031\x051\u0367\n1\x032\x032\x05" +
		"2\u036B\n2\x033\x033\x033\x033\x073\u0371\n3\f3\x0E3\u0374\v3\x033\x05" +
		"3\u0377\n3\x034\x034\x034\x034\x054\u037D\n4\x035\x035\x035\x035\x035" +
		"\x036\x036\x036\x056\u0387\n6\x036\x036\x056\u038B\n6\x036\x056\u038E" +
		"\n6\x037\x037\x057\u0392\n7\x037\x037\x057\u0396\n7\x037\x037\x057\u039A" +
		"\n7\x037\x057\u039D\n7\x037\x037\x037\x038\x038\x038\x038\x058\u03A6\n" +
		"8\x038\x038\x058\u03AA\n8\x038\x038\x038\x038\x038\x058\u03B1\n8\x038" +
		"\x058\u03B4\n8\x039\x039\x039\x039\x039\x039\x079\u03BC\n9\f9\x0E9\u03BF" +
		"\v9\x03:\x03:\x03;\x03;\x03;\x05;\u03C6\n;\x03;\x03;\x03;\x03;\x03;\x03" +
		";\x05;\u03CE\n;\x03<\x03<\x05<\u03D2\n<\x03<\x03<\x03<\x03=\x03=\x03=" +
		"\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x05>\u03E1\n>\x03?\x03?\x03?\x03?" +
		"\x03@\x03@\x03@\x03@\x03A\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x03B\x05" +
		"B\u03F4\nB\x03C\x03C\x03C\x03C\x03C\x03D\x03D\x03D\x03D\x05D\u03FF\nD" +
		"\x03D\x03D\x05D\u0403\nD\x03D\x03D\x03D\x03D\x03D\x05D\u040A\nD\x03E\x03" +
		"E\x03E\x05E\u040F\nE\x03E\x03E\x03F\x03F\x05F\u0415\nF\x03F\x03F\x05F" +
		"\u0419\nF\x03F\x03F\x03G\x03G\x03G\x05G\u0420\nG\x03G\x03G\x05G\u0424" +
		"\nG\x03H\x03H\x05H\u0428\nH\x03H\x03H\x05H\u042C\nH\x03H\x03H\x03I\x03" +
		"I\x03I\x03I\x05I\u0434\nI\x03I\x03I\x05I\u0438\nI\x03I\x03I\x03J\x05J" +
		"\u043D\nJ\x03J\x03J\x03J\x03J\x05J\u0443\nJ\x03K\x03K\x03K\x03K\x05K\u0449" +
		"\nK\x03K\x05K\u044C\nK\x03K\x03K\x05K\u0450\nK\x03L\x03L\x03L\x03M\x03" +
		"M\x03M\x03M\x07M\u0459\nM\fM\x0EM\u045C\vM\x03N\x03N\x03N\x03N\x07N\u0462" +
		"\nN\fN\x0EN\u0465\vN\x03N\x03N\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x06" +
		"O\u0470\nO\rO\x0EO\u0471\x03O\x03O\x03P\x03P\x03P\x03P\x03P\x03P\x06P" +
		"\u047C\nP\rP\x0EP\u047D\x03P\x03P\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03" +
		"Q\x03Q\x03Q\x03Q\x05Q\u048D\nQ\x03Q\x05Q\u0490\nQ\x03Q\x03Q\x05Q\u0494" +
		"\nQ\x03Q\x05Q\u0497\nQ\x05Q\u0499\nQ\x03Q\x03Q\x03Q\x05Q\u049E\nQ\x03" +
		"Q\x03Q\x05Q\u04A2\nQ\x03Q\x05Q\u04A5\nQ\x07Q\u04A7\nQ\fQ\x0EQ\u04AA\v" +
		"Q\x03R\x03R\x03R\x03R\x07R\u04B0\nR\fR\x0ER\u04B3\vR\x03S\x03S\x03S\x03" +
		"S\x07S\u04B9\nS\fS\x0ES\u04BC\vS\x03T\x03T\x03T\x03T\x03T\x07T\u04C3\n" +
		"T\fT\x0ET\u04C6\vT\x03T\x03T\x05T\u04CA\nT\x03T\x03T\x03T\x03T\x03T\x03" +
		"U\x03U\x03V\x03V\x03V\x05V\u04D6\nV\x03V\x05V\u04D9\nV\x03V\x05V\u04DC" +
		"\nV\x03V\x05V\u04DF\nV\x03V\x03V\x03V\x03V\x05V\u04E5\nV\x03W\x03W\x05" +
		"W\u04E9\nW\x03W\x03W\x03W\x03W\x07W\u04EF\nW\fW\x0EW\u04F2\vW\x05W\u04F4" +
		"\nW\x03X\x03X\x03X\x05X\u04F9\nX\x03X\x05X\u04FC\nX\x05X\u04FE\nX\x03" +
		"Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x05Y\u050C\n" +
		"Y\x03Z\x03Z\x03Z\x03[\x03[\x03[\x03[\x07[\u0515\n[\f[\x0E[\u0518\v[\x03" +
		"[\x03[\x05[\u051C\n[\x03[\x03[\x03[\x03[\x03[\x03[\x05[\u0524\n[\x03[" +
		"\x05[\u0527\n[\x03[\x05[\u052A\n[\x03[\x03[\x03[\x05[\u052F\n[\x03[\x03" +
		"[\x05[\u0533\n[\x03[\x05[\u0536\n[\x03[\x05[\u0539\n[\x03[\x03[\x03[\x05" +
		"[\u053E\n[\x03[\x03[\x07[\u0542\n[\f[\x0E[\u0545\v[\x07[\u0547\n[\f[\x0E" +
		"[\u054A\v[\x03\\\x03\\\x05\\\u054E\n\\\x03]\x05]\u0551\n]\x03]\x03]\x05" +
		"]\u0555\n]\x03]\x05]\u0558\n]\x03]\x05]\u055B\n]\x03]\x03]\x03]\x03]\x03" +
		"]\x03]\x03]\x03]\x07]\u0565\n]\f]\x0E]\u0568\v]\x03]\x03]\x03]\x03]\x05" +
		"]\u056E\n]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03" +
		"]\x07]\u057C\n]\f]\x0E]\u057F\v]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03" +
		"]\x07]\u0589\n]\f]\x0E]\u058C\v]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x05" +
		"]\u0595\n]\x03^\x03^\x03^\x03^\x03^\x03^\x03_\x03_\x03`\x03`\x03`\x03" +
		"`\x03`\x03a\x03a\x03a\x03a\x03a\x03b\x03b\x03b\x03b\x03b\x07b\u05AE\n" +
		"b\fb\x0Eb\u05B1\vb\x03b\x03b\x03c\x03c\x03d\x03d\x03d\x03d\x03d\x03d\x03" +
		"d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x05d\u05C6\nd\x03e\x03e\x03" +
		"f\x03f\x03f\x03f\x03f\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x07g\u05D6\n" +
		"g\fg\x0Eg\u05D9\vg\x03g\x03g\x05g\u05DD\ng\x03h\x03h\x03h\x03i\x03i\x03" +
		"i\x03i\x03i\x07i\u05E7\ni\fi\x0Ei\u05EA\vi\x03j\x03j\x03j\x03j\x03j\x03" +
		"j\x03j\x03j\x07j\u05F4\nj\fj\x0Ej\u05F7\vj\x03j\x03j\x03j\x03j\x03j\x03" +
		"j\x03j\x07j\u0600\nj\fj\x0Ej\u0603\vj\x03j\x03j\x03j\x03j\x03j\x03j\x03" +
		"j\x07j\u060C\nj\fj\x0Ej\u060F\vj\x03j\x03j\x05j\u0613\nj\x03k\x03k\x03" +
		"k\x03l\x03l\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x03n\x03n\x03o\x03o\x03" +
		"p\x03p\x03p\x03q\x03q\x03q\x03q\x07q\u062C\nq\fq\x0Eq\u062F\vq\x03r\x03" +
		"r\x03r\x03r\x03s\x05s\u0636\ns\x03s\x03s\x05s\u063A\ns\x03s\x05s\u063D" +
		"\ns\x03s\x05s\u0640\ns\x03s\x03s\x03t\x03t\x03t\x05t\u0647\nt\x03t\x05" +
		"t\u064A\nt\x03t\x05t\u064D\nt\x03t\x05t\u0650\nt\x03t\x05t\u0653\nt\x03" +
		"t\x05t\u0656\nt\x03t\x03t\x03t\x05t\u065B\nt\x03t\x05t\u065E\nt\x03u\x03" +
		"u\x03u\x03u\x03u\x07u\u0665\nu\fu\x0Eu\u0668\vu\x03v\x03v\x05v\u066C\n" +
		"v\x03v\x03v\x05v\u0670\nv\x03w\x03w\x03w\x05w\u0675\nw\x03x\x03x\x03x" +
		"\x03x\x03x\x07x\u067C\nx\fx\x0Ex\u067F\vx\x03y\x03y\x03y\x03y\x03y\x03" +
		"y\x03y\x03y\x03y\x03y\x03y\x03y\x03y\x03y\x03y\x03y\x05y\u0691\ny\x03" +
		"z\x03z\x03z\x03z\x07z\u0697\nz\fz\x0Ez\u069A\vz\x03{\x03{\x03{\x06{\u069F" +
		"\n{\r{\x0E{\u06A0\x03{\x03{\x05{\u06A5\n{\x03|\x03|\x05|\u06A9\n|\x03" +
		"}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x05}\u06B3\n}\x03~\x03~\x03~\x03" +
		"~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03" +
		"~\x03~\x03~\x03~\x03~\x03~\x03~\x05~\u06CD\n~\x03\x7F\x03\x7F\x03\x7F" +
		"\x03\x7F\x07\x7F\u06D3\n\x7F\f\x7F\x0E\x7F\u06D6\v\x7F\x03\x80\x03\x80" +
		"\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x05\x80\u06E1" +
		"\n\x80\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x82\x03\x82\x03\x82" +
		"\x03\x83\x03\x83\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84" +
		"\x03\x84\x03\x84\x03\x84\x05\x84\u06F7\n\x84\x05\x84\u06F9\n\x84\x03\x84" +
		"\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x05\x84" +
		"\u0704\n\x84\x03\x84\x07\x84\u0707\n\x84\f\x84\x0E\x84\u070A\v\x84\x03" +
		"\x85\x05\x85\u070D\n\x85\x03\x85\x03\x85\x05\x85\u0711\n\x85\x03\x85\x03" +
		"\x85\x03\x85\x03\x85\x03\x85\x05\x85\u0718\n\x85\x03\x85\x03\x85\x03\x85" +
		"\x03\x85\x03\x85\x07\x85\u071F\n\x85\f\x85\x0E\x85\u0722\v\x85\x03\x85" +
		"\x03\x85\x03\x85\x05\x85\u0727\n\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03" +
		"\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x05\x85\u0734\n\x85" +
		"\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x05\x85\u073B\n\x85\x03\x85\x03" +
		"\x85\x03\x85\x05\x85\u0740\n\x85\x03\x85\x03\x85\x03\x85\x03\x85\x05\x85" +
		"\u0746\n\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x05\x85\u074D\n\x85" +
		"\x05\x85\u074F\n\x85\x03\x86\x05\x86\u0752\n\x86\x03\x86\x03\x86\x03\x86" +
		"\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x07\x86\u075C\n\x86\f\x86\x0E" +
		"\x86\u075F\v\x86\x03\x86\x03\x86\x05\x86\u0763\n\x86\x03\x86\x05\x86\u0766" +
		"\n\x86\x03\x86\x03\x86\x03\x86\x03\x86\x05\x86\u076C\n\x86\x05\x86\u076E" +
		"\n\x86\x03\x87\x03\x87\x03\x87\x03\x87\x05\x87\u0774\n\x87\x03\x87\x03" +
		"\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03" +
		"\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03" +
		"\x87\x03\x87\x07\x87\u078B\n\x87\f\x87\x0E\x87\u078E\v\x87\x03\x88\x03" +
		"\x88\x03\x88\x06\x88\u0793\n\x88\r\x88\x0E\x88\u0794\x03\x88\x03\x88\x05" +
		"\x88\u0799\n\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x06\x88\u07A0" +
		"\n\x88\r\x88\x0E\x88\u07A1\x03\x88\x03\x88\x05\x88\u07A6\n\x88\x03\x88" +
		"\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88" +
		"\x03\x88\x03\x88\x03\x88\x03\x88\x05\x88\u07B6\n\x88\x03\x88\x03\x88\x03" +
		"\x88\x03\x88\x03\x88\x03\x88\x03\x88\x05\x88\u07BF\n\x88\x03\x88\x03\x88" +
		"\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88" +
		"\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88" +
		"\x03\x88\x03\x88\x05\x88\u07D7\n\x88\x03\x88\x03\x88\x03\x88\x07\x88\u07DC" +
		"\n\x88\f\x88\x0E\x88\u07DF\v\x88\x05\x88\u07E1\n\x88\x03\x88\x03\x88\x03" +
		"\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03" +
		"\x88\x05\x88\u07EF\n\x88\x03\x88\x03\x88\x03\x88\x05\x88\u07F4\n\x88\x03" +
		"\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x05\x88\u07FD\n\x88" +
		"\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x07\x88\u0804\n\x88\f\x88\x0E" +
		"\x88\u0807\v\x88\x03\x89\x03\x89\x03\x89\x05\x89\u080C\n\x89\x03\x8A\x03" +
		"\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x07" +
		"\x8B\u0818\n\x8B\f\x8B\x0E\x8B\u081B\v\x8B\x03\x8B\x03\x8B\x03\x8C\x03" +
		"\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8D\x03\x8D\x03\x8D\x03" +
		"\x8D\x03\x8E\x03\x8E\x05\x8E\u082C\n\x8E\x03\x8F\x03\x8F\x03\x8F\x05\x8F" +
		"\u0831\n\x8F\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x05\x90\u0838\n\x90" +
		"\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x92\x03\x92\x03\x93" +
		"\x03\x93\x03\x94\x03\x94\x05\x94\u0846\n\x94\x03\x95\x03\x95\x03\x95\x05" +
		"\x95\u084B\n\x95\x03\x96\x03\x96\x05\x96\u084F\n\x96\x03\x97\x03\x97\x03" +
		"\x97\x06\x97\u0854\n\x97\r\x97\x0E\x97\u0855\x03\x98\x03\x98\x03\x98\x05" +
		"\x98\u085B\n\x98\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x9A\x05\x9A" +
		"\u0863\n\x9A\x03\x9A\x03\x9A\x05\x9A\u0867\n\x9A\x03\x9B\x05\x9B\u086A" +
		"\n\x9B\x03\x9B\x03\x9B\x05\x9B\u086E\n\x9B\x03\x9C\x05\x9C\u0871\n\x9C" +
		"\x03\x9C\x03\x9C\x05\x9C\u0875\n\x9C\x03\x9D\x03\x9D\x03\x9D\x03\x9E\x03" +
		"\x9E\x06\x9E\u087C\n\x9E\r\x9E\x0E\x9E\u087D\x03\x9E\x05\x9E\u0881\n\x9E" +
		"\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x03\xA0\x03\xA0\x03\xA0\x07\xA0\u088A" +
		"\n\xA0\f\xA0\x0E\xA0\u088D\v\xA0\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x05\xA1" +
		"\u0893\n\xA1\x03\xA2\x03\xA2\x03\xA2\x03\xA2\x03\xA2\x03\xA3\x03\xA3\x03" +
		"\xA4\x03\xA4\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA6\x03\xA6\x03" +
		"\xA7\x03\xA7\x03\xA8\x03\xA8\x03\xA9\x03\xA9\x03\xAA\x03\xAA\x03\xAB\x03" +
		"\xAB\x03\xAB\x07\xAB\u08B0\n\xAB\f\xAB\x0E\xAB\u08B3\v\xAB\x03\xAC\x03" +
		"\xAC\x03\xAC\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x03\xAE\x03\xAE\x03\xAE\x03" +
		"\xAF\x03\xAF\x03\xAF\x03\xAF\x07\xAF\u08C3\n\xAF\f\xAF\x0E\xAF\u08C6\v" +
		"\xAF\x03\xAF\x03\xAF\x03\xB0\x03\xB0\x05\xB0\u08CC\n\xB0\x03\xB0\x05\xB0" +
		"\u08CF\n\xB0\x03\xB1\x03\xB1\x03\xB1\x05\xB1\u08D4\n\xB1\x03\xB2\x03\xB2" +
		"\x03\xB2\x03\xB2\x05\xB2\u08DA\n\xB2\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x03" +
		"\xB3\x03\xB3\x05\xB3\u08E2\n\xB3\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4" +
		"\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4" +
		"\x05\xB4\u08F2\n\xB4\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x03" +
		"\xB5\x05\xB5\u08FB\n\xB5\x03\xB6\x03\xB6\x03\xB7\x03\xB7\x03\xB8\x03\xB8" +
		"\x03\xB8\x03\xB8\x05\xB8\u0905\n\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03" +
		"\xB8\x05\xB8\u090C\n\xB8\x03\xB8\x05\xB8\u090F\n\xB8\x03\xB9\x03\xB9\x03" +
		"\xB9\x03\xBA\x03\xBA\x03\xBB\x03\xBB\x03\xBC\x03\xBC\x03\xBD\x03\xBD\x03" +
		"\xBE\x03\xBE\x03\xBF\x03\xBF\x03\xC0\x03\xC0\x03\xC1";
	private static readonly _serializedATNSegment1: string =
		"\x03\xC1\x03\xC2\x03\xC2\x03\xC3\x03\xC3\x03\xC3\x03\u08B1\x02\x07\xA0" +
		"\xB4\u0106\u010C\u010E\xC4\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
		"\x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
		"\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
		"\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02" +
		"\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02" +
		"\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02" +
		"\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02" +
		"\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02" +
		"\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02" +
		"\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02" +
		"\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02" +
		"\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02" +
		"\u0130\x02\u0132\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02" +
		"\u013E\x02\u0140\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02" +
		"\u014C\x02\u014E\x02\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02" +
		"\u015A\x02\u015C\x02\u015E\x02\u0160\x02\u0162\x02\u0164\x02\u0166\x02" +
		"\u0168\x02\u016A\x02\u016C\x02\u016E\x02\u0170\x02\u0172\x02\u0174\x02" +
		"\u0176\x02\u0178\x02\u017A\x02\u017C\x02\u017E\x02\u0180\x02\u0182\x02" +
		"\u0184\x02\x021\x03\x02\x05\x06\x04\x02!!\xEF\xEF\x05\x02\x13\x13))HH" +
		"\x06\x02\x10\x10\x1D\x1DEE\xAC\xAC\x04\x02\x0F\x0F\x1C\x1C\x04\x02\u0101" +
		"\u0101\u010C\u010C\x04\x02\xAB\xAB\u015D\u015D\x04\x02\x07\x07zz\x05\x02" +
		"\xC8\xC8\xE6\xE6\u0130\u0130\r\x02\r\r\x96\x96\x9D\x9D\xC4\xC5\xD1\xD1" +
		"\xE7\xE7\u0111\u0112\u0154\u0154\u0160\u0160\u0165\u0165\u0174\u0175\x04" +
		"\x02\u0179\u0179\u017B\u017B\x06\x02\xE9\xEA\xF1\xF1\xFF\xFF\u0131\u0131" +
		"\x04\x02\xBD\xBD\u012A\u012A\x04\x02,,\u010D\u010D\x05\x02\x18\x18dd\xB7" +
		"\xB7\x05\x02,,bb\u010D\u010D\x05\x0299^^\xAF\xAF\x05\x02FFoo\x82\x82\x04" +
		"\x02\x0E\x0E\x7F\x7F\x04\x02aa\u0115\u0115\x05\x02\xF8\xF8\u0113\u0113" +
		"\u016A\u016A\x06\x02\u0102\u0102\u010E\u010E\u011C\u011C\u0148\u0148\x05" +
		"\x02\x1A\x1A==\xA1\xA1\x07\x02\x1B\x1B\x8F\x90\x95\x95\x9B\x9B\u0133\u0133" +
		"\x04\x02\xE2\xE2\u014B\u014B\x05\x02==\x8C\x8C\xA1\xA1\x04\x02\v\v!!\x04" +
		"\x0211MM\x06\x02\xFE\xFE\u0130\u0130\u0168\u0168\u016C\u016C\x04\x02\xBF" +
		"\xBF\u0159\u0159\x04\x02\xB7\xB7\xBB\xBB\x04\x02\u0181\u0181\u0195\u0196" +
		"\x06\x02##\u0193\u0193\u0197\u0197\u019A\u019A\x04\x02\u0195\u0196\u0198" +
		"\u0198\x03\x02\u0195\u0196\x03\x02\u019E\u019F\x04\x02\u019E\u019E\u01A1" +
		"\u01A1\x06\x02##\u0193\u0193\u0195\u0197\u0199\u019A\x05\x02\u012F\u012F" +
		"\u0180\u0181\u0195\u0196\x04\x02\xFE\xFE\u0168\u0168\x04\x02\xB7\xB7\xF0" +
		"\xF0\f\x02RRTTvv\xB0\xB0\xE8\xE8\u010A\u010A\u0126\u0126\u0129\u0129\u014E" +
		"\u014E\u017C\u017C\x12\x02\x11\x11\x1E\x1F\'\'>>RUYZvv\x86\x86\xB0\xB1" +
		"\xB4\xB4\xE8\xE8\u010A\u010A\u0126\u0126\u0129\u0129\u014E\u014E\u017C" +
		"\u017C\b\x02\xB7\xB7\xC9\xC9\xF0\xF0\u011B\u011B\u0167\u0167\u0193\u0193" +
		"\x1E\x02??QQvv\xB0\xB0\xB6\xB6\xBD\xBD\xC1\xC1\xCF\xD0\xD6\xD6\xD8\xD8" +
		"\xDF\xDF\xE6\xE6\u0107\u0107\u010A\u010A\u0118\u0118\u011C\u011C\u0126" +
		"\u0126\u0129\u0129\u013B\u013B\u0141\u0142\u0145\u0145\u0148\u0148\u014E" +
		"\u014E\u0157\u0158\u0160\u0164\u0169\u0169\u016E\u016E\u017C\u017C\x07" +
		"\x02\xB6\xF6\xF8\u0141\u0143\u0158\u015A\u0166\u0168\u017C\x06\x02\x07" +
		"&(-/\xB0\xB2\xB5\x02\u09EF\x02\u0186\x03\x02\x02\x02\x04\u0189\x03\x02" +
		"\x02\x02\x06\u0191\x03\x02\x02\x02\b\u0194\x03\x02\x02\x02\n\u01B7\x03" +
		"\x02\x02\x02\f\u01B9\x03\x02\x02\x02\x0E\u01C9\x03\x02\x02\x02\x10\u01CD" +
		"\x03\x02\x02\x02\x12\u01CF\x03\x02\x02\x02\x14\u01D2\x03\x02\x02\x02\x16" +
		"\u01DD\x03\x02\x02\x02\x18\u01E5\x03\x02\x02\x02\x1A\u01ED\x03\x02\x02" +
		"\x02\x1C\u01EF\x03\x02\x02\x02\x1E\u021C\x03\x02\x02\x02 \u021E\x03\x02" +
		"\x02\x02\"\u0225\x03\x02\x02\x02$\u0229\x03\x02\x02\x02&\u022D\x03\x02" +
		"\x02\x02(\u0231\x03\x02\x02\x02*\u0236\x03\x02\x02\x02,\u023C\x03\x02" +
		"\x02\x02.\u023E\x03\x02\x02\x020\u0267\x03\x02\x02\x022\u0275\x03\x02" +
		"\x02\x024\u0277\x03\x02\x02\x026\u0281\x03\x02\x02\x028\u0283\x03\x02" +
		"\x02\x02:\u02D7\x03\x02\x02\x02<\u02D9\x03\x02\x02\x02>\u02DD\x03\x02" +
		"\x02\x02@\u02E5\x03\x02\x02\x02B\u02ED\x03\x02\x02\x02D\u02F8\x03\x02" +
		"\x02\x02F\u02FF\x03\x02\x02\x02H\u031B\x03\x02\x02\x02J\u031D\x03\x02" +
		"\x02\x02L\u0320\x03\x02\x02\x02N\u032A\x03\x02\x02\x02P\u032C\x03\x02" +
		"\x02\x02R\u0332\x03\x02\x02\x02T\u0334\x03\x02\x02\x02V\u033C\x03\x02" +
		"\x02\x02X\u0344\x03\x02\x02\x02Z\u0346\x03\x02\x02\x02\\\u034A\x03\x02" +
		"\x02\x02^\u034E\x03\x02\x02\x02`\u0366\x03\x02\x02\x02b\u036A\x03\x02" +
		"\x02\x02d\u036C\x03\x02\x02\x02f\u037C\x03\x02\x02\x02h\u037E\x03\x02" +
		"\x02\x02j\u0383\x03\x02\x02\x02l\u038F\x03\x02\x02\x02n\u03A1\x03\x02" +
		"\x02\x02p\u03B5\x03\x02\x02\x02r\u03C0\x03\x02\x02\x02t\u03C2\x03\x02" +
		"\x02\x02v\u03CF\x03\x02\x02\x02x\u03D6\x03\x02\x02\x02z\u03D9\x03\x02" +
		"\x02\x02|\u03E2\x03\x02\x02\x02~\u03E6\x03\x02\x02\x02\x80\u03EA\x03\x02" +
		"\x02\x02\x82\u03ED\x03\x02\x02\x02\x84\u03F5\x03\x02\x02\x02\x86\u03FA" +
		"\x03\x02\x02\x02\x88\u040B\x03\x02\x02\x02\x8A\u0412\x03\x02\x02\x02\x8C" +
		"\u041C\x03\x02\x02\x02\x8E\u0425\x03\x02\x02\x02\x90\u042F\x03\x02\x02" +
		"\x02\x92\u0442\x03\x02\x02\x02\x94\u0444\x03\x02\x02\x02\x96\u0451\x03" +
		"\x02\x02\x02\x98\u0454\x03\x02\x02\x02\x9A\u045D\x03\x02\x02\x02\x9C\u0468" +
		"\x03\x02\x02\x02\x9E\u0475\x03\x02\x02\x02\xA0\u0498\x03\x02\x02\x02\xA2" +
		"\u04AB\x03\x02\x02\x02\xA4\u04B4\x03\x02\x02\x02\xA6\u04BD\x03\x02\x02" +
		"\x02\xA8\u04D0\x03\x02\x02\x02\xAA\u04E4\x03\x02\x02\x02\xAC\u04E6\x03" +
		"\x02\x02\x02\xAE\u04FD\x03\x02\x02\x02\xB0\u050B\x03\x02\x02\x02\xB2\u050D" +
		"\x03\x02\x02\x02\xB4\u051B\x03\x02\x02\x02\xB6\u054B\x03\x02\x02\x02\xB8" +
		"\u0594\x03\x02\x02\x02\xBA\u0596\x03\x02\x02\x02\xBC\u059C\x03\x02\x02" +
		"\x02\xBE\u059E\x03\x02\x02\x02\xC0\u05A3\x03\x02\x02\x02\xC2\u05A8\x03" +
		"\x02\x02\x02\xC4\u05B4\x03\x02\x02\x02\xC6\u05C5\x03\x02\x02\x02\xC8\u05C7" +
		"\x03\x02\x02\x02\xCA\u05C9\x03\x02\x02\x02\xCC\u05DC\x03\x02\x02\x02\xCE" +
		"\u05DE\x03\x02\x02\x02\xD0\u05E1\x03\x02\x02\x02\xD2\u0612\x03\x02\x02" +
		"\x02\xD4\u0614\x03\x02\x02\x02\xD6\u0617\x03\x02\x02\x02\xD8\u0619\x03" +
		"\x02\x02\x02\xDA\u0620\x03\x02\x02\x02\xDC\u0622\x03\x02\x02\x02\xDE\u0624" +
		"\x03\x02\x02\x02\xE0\u0627\x03\x02\x02\x02\xE2\u0630\x03\x02\x02\x02\xE4" +
		"\u0635\x03\x02\x02\x02\xE6\u0643\x03\x02\x02\x02\xE8\u065F\x03\x02\x02" +
		"\x02\xEA\u0669\x03\x02\x02\x02\xEC\u0671\x03\x02\x02\x02\xEE\u0676\x03" +
		"\x02\x02\x02\xF0\u0690\x03\x02\x02\x02\xF2\u0692\x03\x02\x02\x02\xF4\u069B" +
		"\x03\x02\x02\x02\xF6\u06A6\x03\x02\x02\x02\xF8\u06B2\x03\x02\x02\x02\xFA" +
		"\u06CC\x03\x02\x02\x02\xFC\u06CE\x03\x02\x02\x02\xFE\u06E0\x03\x02\x02" +
		"\x02\u0100\u06E2\x03\x02\x02\x02\u0102\u06E7\x03\x02\x02\x02\u0104\u06EA" +
		"\x03\x02\x02\x02\u0106\u06F8\x03\x02\x02\x02\u0108\u074E\x03\x02\x02\x02" +
		"\u010A\u076D\x03\x02\x02\x02\u010C\u0773\x03\x02\x02\x02\u010E\u07FC\x03" +
		"\x02\x02\x02\u0110\u080B\x03\x02\x02\x02\u0112\u080D\x03\x02\x02\x02\u0114" +
		"\u0812\x03\x02\x02\x02\u0116\u081E\x03\x02\x02\x02\u0118\u0825\x03\x02" +
		"\x02\x02\u011A\u082B\x03\x02\x02\x02\u011C\u0830\x03\x02\x02\x02\u011E" +
		"\u0837\x03\x02\x02\x02\u0120\u0839\x03\x02\x02\x02\u0122\u083F\x03\x02" +
		"\x02\x02\u0124\u0841\x03\x02\x02\x02\u0126\u0845\x03\x02\x02\x02\u0128" +
		"\u0847\x03\x02\x02\x02\u012A\u084C\x03\x02\x02\x02\u012C\u0853\x03\x02" +
		"\x02\x02\u012E\u0857\x03\x02\x02\x02\u0130\u085C\x03\x02\x02\x02\u0132" +
		"\u0866\x03\x02\x02\x02\u0134\u0869\x03\x02\x02\x02\u0136\u0870\x03\x02" +
		"\x02\x02\u0138\u0876\x03\x02\x02\x02\u013A\u0880\x03\x02\x02\x02\u013C" +
		"\u0882\x03\x02\x02\x02\u013E\u0886\x03\x02\x02\x02\u0140\u0892\x03\x02" +
		"\x02\x02\u0142\u0894\x03\x02\x02\x02\u0144\u0899\x03\x02\x02\x02\u0146" +
		"\u089B\x03\x02\x02\x02\u0148\u089D\x03\x02\x02\x02\u014A\u08A2\x03\x02" +
		"\x02\x02\u014C\u08A4\x03\x02\x02\x02\u014E\u08A6\x03\x02\x02\x02\u0150" +
		"\u08A8\x03\x02\x02\x02\u0152\u08AA\x03\x02\x02\x02\u0154\u08AC\x03\x02" +
		"\x02\x02\u0156\u08B4\x03\x02\x02\x02\u0158\u08B7\x03\x02\x02\x02\u015A" +
		"\u08BB\x03\x02\x02\x02\u015C\u08BE\x03\x02\x02\x02\u015E\u08C9\x03\x02" +
		"\x02\x02\u0160\u08D3\x03\x02\x02\x02\u0162\u08D9\x03\x02\x02\x02\u0164" +
		"\u08E1\x03\x02\x02\x02\u0166\u08F1\x03\x02\x02\x02\u0168\u08FA\x03\x02" +
		"\x02\x02\u016A\u08FC\x03\x02\x02\x02\u016C\u08FE\x03\x02\x02\x02\u016E" +
		"\u090E\x03\x02\x02\x02\u0170\u0910\x03\x02\x02\x02\u0172\u0913\x03\x02" +
		"\x02\x02\u0174\u0915\x03\x02\x02\x02\u0176\u0917\x03\x02\x02\x02\u0178" +
		"\u0919\x03\x02\x02\x02\u017A\u091B\x03\x02\x02\x02\u017C\u091D\x03\x02" +
		"\x02\x02\u017E\u091F\x03\x02\x02\x02\u0180\u0921\x03\x02\x02\x02\u0182" +
		"\u0923\x03\x02\x02\x02\u0184\u0925\x03\x02\x02\x02\u0186\u0187\x05\x04" +
		"\x03\x02\u0187\u0188\x07\x02\x02\x03\u0188\x03\x03\x02\x02\x02\u0189\u018A" +
		"\x05\x06\x04\x02\u018A\u018B\x07\x02\x02\x03\u018B\x05\x03\x02\x02\x02" +
		"\u018C\u0190\x05\b\x05\x02\u018D\u0190\x05\n\x06\x02\u018E\u0190\x05\f" +
		"\x07\x02\u018F\u018C\x03\x02\x02\x02\u018F\u018D\x03\x02\x02\x02\u018F" +
		"\u018E\x03\x02\x02\x02\u0190\u0193\x03\x02\x02\x02\u0191\u018F\x03\x02" +
		"\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\x07\x03\x02\x02\x02\u0193\u0191" +
		"\x03\x02\x02\x02\u0194\u0195\t\x02\x02\x02\u0195\t\x03\x02\x02\x02\u0196" +
		"\u0197\x05\x0E\b\x02\u0197\u0198\x07\u018D\x02\x02\u0198\u01B8\x03\x02" +
		"\x02\x02\u0199\u019A\x05\x10\t\x02\u019A\u019B\x07\u018D\x02\x02\u019B" +
		"\u01B8\x03\x02\x02\x02\u019C\u019D\x05\x12\n\x02\u019D\u019E\x07\u018D" +
		"\x02\x02\u019E\u01B8\x03\x02\x02\x02\u019F\u01A0\x05\x14\v\x02\u01A0\u01A1" +
		"\x07\u018D\x02\x02\u01A1\u01B8\x03\x02\x02\x02\u01A2\u01A3\x05\x1A\x0E" +
		"\x02\u01A3\u01A4\x07\u018D\x02\x02\u01A4\u01B8\x03\x02\x02\x02\u01A5\u01A6" +
		"\x05\x1E\x10\x02\u01A6\u01A7\x07\u018D\x02\x02\u01A7\u01B8\x03\x02\x02" +
		"\x02\u01A8\u01A9\x05 \x11\x02\u01A9\u01AA\x07\u018D\x02\x02\u01AA\u01B8" +
		"\x03\x02\x02\x02\u01AB\u01AC\x05\"\x12\x02\u01AC\u01AD\x07\u018D\x02\x02" +
		"\u01AD\u01B8\x03\x02\x02\x02\u01AE\u01AF\x05$\x13\x02\u01AF\u01B0\x07" +
		"\u018D\x02\x02\u01B0\u01B8\x03\x02\x02\x02\u01B1\u01B2\x05&\x14\x02\u01B2" +
		"\u01B3\x07\u018D\x02\x02\u01B3\u01B8\x03\x02\x02\x02\u01B4\u01B5\x05(" +
		"\x15\x02\u01B5\u01B6\x07\u018D\x02\x02\u01B6\u01B8\x03\x02\x02\x02\u01B7" +
		"\u0196\x03\x02\x02\x02\u01B7\u0199\x03\x02\x02\x02\u01B7\u019C\x03\x02" +
		"\x02\x02\u01B7\u019F\x03\x02\x02\x02\u01B7\u01A2\x03\x02\x02\x02\u01B7" +
		"\u01A5\x03\x02\x02\x02\u01B7\u01A8\x03\x02\x02\x02\u01B7\u01AB\x03\x02" +
		"\x02\x02\u01B7\u01AE\x03\x02\x02\x02\u01B7\u01B1\x03\x02\x02\x02\u01B7" +
		"\u01B4\x03\x02\x02\x02\u01B8\v\x03\x02\x02\x02\u01B9\u01BA\x07\u018D\x02" +
		"\x02\u01BA\r\x03\x02\x02\x02\u01BB\u01CA\x05,\x17\x02\u01BC\u01CA\x05" +
		"j6\x02\u01BD\u01CA\x05l7\x02\u01BE\u01CA\x05n8\x02\u01BF\u01CA\x05h5\x02" +
		"\u01C0\u01CA\x05t;\x02\u01C1\u01CA\x05\x82B\x02\u01C2\u01CA\x05\x84C\x02" +
		"\u01C3\u01CA\x05\x86D\x02\u01C4\u01CA\x05\x88E\x02\u01C5\u01CA\x05\x8A" +
		"F\x02\u01C6\u01CA\x05\x8CG\x02\u01C7\u01CA\x05\x8EH\x02\u01C8\u01CA\x05" +
		"\x90I\x02\u01C9\u01BB\x03\x02\x02\x02\u01C9\u01BC\x03\x02\x02\x02\u01C9" +
		"\u01BD\x03\x02\x02\x02\u01C9\u01BE\x03\x02\x02\x02\u01C9\u01BF\x03\x02" +
		"\x02\x02\u01C9\u01C0\x03\x02\x02\x02\u01C9\u01C1\x03\x02\x02\x02\u01C9" +
		"\u01C2\x03\x02\x02\x02\u01C9\u01C3\x03\x02\x02\x02\u01C9\u01C4\x03\x02" +
		"\x02\x02\u01C9\u01C5\x03\x02\x02\x02\u01C9\u01C6\x03\x02\x02\x02\u01C9" +
		"\u01C7\x03\x02\x02\x02\u01C9\u01C8\x03\x02\x02\x02\u01CA\x0F\x03\x02\x02" +
		"\x02\u01CB\u01CE\x05\xA0Q\x02\u01CC\u01CE\x05\x92J\x02\u01CD\u01CB\x03" +
		"\x02\x02\x02\u01CD\u01CC\x03\x02\x02\x02\u01CE\x11\x03\x02\x02\x02\u01CF" +
		"\u01D0\t\x03\x02\x02\u01D0\u01D1\x05\u0152\xAA\x02\u01D1\x13\x03\x02\x02" +
		"\x02\u01D2\u01D6\x07\xFB\x02\x02\u01D3\u01D7\x05\x16\f\x02\u01D4\u01D5" +
		"\x07i\x02\x02\u01D5\u01D7\x07\u0100\x02\x02\u01D6\u01D3\x03\x02\x02\x02" +
		"\u01D6\u01D4\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01DB\x03" +
		"\x02\x02\x02\u01D8\u01DC\x05\x10\t\x02\u01D9\u01DC\x05\x94K\x02\u01DA" +
		"\u01DC\x05\x9EP\x02\u01DB\u01D8\x03\x02\x02\x02\u01DB\u01D9\x03\x02\x02" +
		"\x02\u01DB\u01DA\x03\x02\x02\x02\u01DC\x15\x03\x02\x02\x02\u01DD\u01E2" +
		"\x05\x18\r\x02\u01DE\u01DF\x07\u018C\x02\x02\u01DF\u01E1\x05\x18\r\x02" +
		"\u01E0\u01DE\x03\x02\x02\x02\u01E1\u01E4\x03\x02\x02\x02\u01E2\u01E0\x03" +
		"\x02\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\x17\x03\x02\x02\x02\u01E4" +
		"\u01E2\x03\x02\x02\x02\u01E5\u01E6\t\x04\x02\x02\u01E6\x19\x03\x02\x02" +
		"\x02\u01E7\u01E8\x07\xA6\x02\x02\u01E8\u01E9\x07\x0F\x02\x02\u01E9\u01EE" +
		"\x05\u014A\xA6\x02\u01EA\u01EB\x07\xA6\x02\x02\u01EB\u01EE\x05\u014C\xA7" +
		"\x02\u01EC\u01EE\x05\x1C\x0F\x02\u01ED\u01E7\x03\x02\x02\x02\u01ED\u01EA" +
		"\x03\x02\x02\x02\u01ED\u01EC\x03\x02\x02\x02\u01EE\x1B\x03\x02\x02\x02" +
		"\u01EF\u01F0\x07\xA6\x02\x02\u01F0\u01F1\x07X\x02\x02\u01F1\u01F6\x05" +
		"\u0154\xAB\x02\u01F2\u01F3\x07\u018C\x02\x02\u01F3\u01F5\x05\u0154\xAB" +
		"\x02\u01F4\u01F2\x03\x02\x02\x02\u01F5\u01F8\x03\x02\x02\x02\u01F6\u01F4" +
		"\x03\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7\x1D\x03\x02\x02\x02" +
		"\u01F8\u01F6\x03\x02\x02\x02\u01F9\u01FA\x07\u0151\x02\x02\u01FA\u021D" +
		"\t\x05\x02\x02\u01FB\u01FC\x07\u0151\x02\x02\u01FC\u01FD\x07\xE3\x02\x02" +
		"\u01FD\u021D\t\x06\x02\x02\u01FE\u01FF\x07\u0151\x02\x02\u01FF\u0202\x07" +
		"\x99\x02\x02\u0200\u0201\t\x07\x02\x02\u0201\u0203\x05\u0152\xAA\x02\u0202" +
		"\u0200\x03\x02\x02\x02\u0202\u0203\x03\x02\x02\x02\u0203\u0205\x03\x02" +
		"\x02\x02\u0204\u0206\x05\u010A\x86\x02\u0205\u0204\x03\x02\x02\x02\u0205" +
		"\u0206\x03\x02\x02\x02\u0206\u021D\x03\x02\x02\x02\u0207\u0208\x07\u0151" +
		"\x02\x02\u0208\u0209\x07\x17\x02\x02\u0209\u020A\t\x07\x02\x02\u020A\u020C" +
		"\x05\u0154\xAB\x02\u020B\u020D\x05\u010A\x86\x02\u020C\u020B\x03\x02\x02" +
		"\x02\u020C\u020D\x03\x02\x02\x02\u020D\u021D\x03\x02\x02\x02\u020E\u020F" +
		"\x07\u0151\x02\x02\u020F\u0210\x07\xE0\x02\x02\u0210\u0211\t\b\x02\x02" +
		"\u0211\u021D\x05\u0154\xAB\x02\u0212\u0214\x07\u0151\x02\x02\u0213\u0215" +
		"\x07\u0170\x02\x02\u0214\u0213\x03\x02\x02\x02\u0214\u0215\x03\x02\x02" +
		"\x02\u0215\u0216\x03\x02\x02\x02\u0216\u021D\x077\x02\x02\u0217\u0219" +
		"\x07\u0151\x02\x02\u0218\u021A\x07\u0102\x02\x02\u0219\u0218\x03\x02\x02" +
		"\x02\u0219\u021A\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B\u021D" +
		"\x07X\x02\x02\u021C\u01F9\x03\x02\x02\x02\u021C\u01FB\x03\x02\x02\x02" +
		"\u021C\u01FE\x03\x02\x02\x02\u021C\u0207\x03\x02\x02\x02\u021C\u020E\x03" +
		"\x02\x02\x02\u021C\u0212\x03\x02\x02\x02\u021C\u0217\x03\x02\x02\x02\u021D" +
		"\x1F\x03\x02\x02\x02\u021E\u021F\x07P\x02\x02\u021F\u0220\x07\u0128\x02" +
		"\x02\u0220\u0223\x05\u0154\xAB\x02\u0221\u0222\x07\u0179\x02\x02\u0222" +
		"\u0224\x05\u015C\xAF\x02\u0223\u0221\x03\x02\x02\x02\u0223\u0224\x03\x02" +
		"\x02\x02\u0224!\x03\x02\x02\x02\u0225\u0226\x07\xA4\x02\x02\u0226\u0227" +
		"\x07\u0128\x02\x02\u0227\u0228\x05\u0154\xAB\x02\u0228#\x03\x02\x02\x02" +
		"\u0229\u022B\x07\u0150\x02\x02\u022A\u022C\x05\u015E\xB0\x02\u022B\u022A" +
		"\x03\x02\x02\x02\u022B\u022C\x03\x02\x02\x02\u022C%\x03\x02\x02\x02\u022D" +
		"\u022F\x07\u0146\x02\x02\u022E\u0230\x05\u0160\xB1\x02\u022F\u022E\x03" +
		"\x02\x02\x02\u022F\u0230\x03\x02\x02\x02\u0230\'\x03\x02\x02\x02\u0231" +
		"\u0232\t\t\x02\x02\u0232\u0233\x07D\x02\x02\u0233\u0234\x05r:\x02\u0234" +
		")\x03\x02\x02\x02\u0235\u0237\x07\u01A2\x02\x02\u0236\u0235\x03\x02\x02" +
		"\x02\u0237\u0238\x03\x02\x02\x02\u0238\u0236\x03\x02\x02\x02\u0238\u0239" +
		"\x03\x02\x02\x02\u0239+\x03\x02\x02\x02\u023A\u023D\x05.\x18\x02\u023B" +
		"\u023D\x050\x19\x02\u023C\u023A\x03\x02\x02\x02\u023C\u023B\x03\x02\x02" +
		"\x02\u023D-\x03\x02\x02\x02\u023E\u0240\x07\xE0\x02\x02\u023F\u0241\x07" +
		"\x9A\x02\x02\u0240\u023F\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02\u0241" +
		"\u0242\x03\x02\x02\x02\u0242\u0244\x07\u015D\x02\x02\u0243\u0245\x05\u0158" +
		"\xAD\x02\u0244\u0243\x03\x02\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245" +
		"\u0246\x03\x02\x02\x02\u0246\u0247\x05\u0150\xA9\x02\u0247\u0248\x07\u0188" +
		"\x02\x02\u0248\u024D\x052\x1A\x02\u0249\u024A\x07\u018C\x02\x02\u024A" +
		"\u024C\x052\x1A\x02\u024B\u0249\x03\x02\x02\x02\u024C\u024F\x03\x02\x02" +
		"\x02\u024D\u024B\x03\x02\x02\x02\u024D\u024E\x03\x02\x02\x02\u024E\u0252" +
		"\x03\x02\x02\x02\u024F\u024D\x03\x02\x02\x02\u0250\u0251\x07\u018C\x02" +
		"\x02\u0251\u0253\x05T+\x02\u0252\u0250\x03\x02\x02\x02\u0252\u0253\x03" +
		"\x02\x02\x02\u0253\u0256\x03\x02\x02\x02\u0254\u0255\x07\u018C\x02\x02" +
		"\u0255\u0257\x05V,\x02\u0256\u0254\x03\x02\x02\x02\u0256\u0257\x03\x02" +
		"\x02\x02\u0257\u025A\x03\x02\x02\x02\u0258\u0259\x07\u018C\x02\x02\u0259" +
		"\u025B\x05Z.\x02\u025A\u0258\x03\x02\x02\x02\u025A\u025B\x03\x02\x02\x02" +
		"\u025B\u025C\x03\x02\x02\x02\u025C\u025E\x07\u0189\x02\x02\u025D\u025F" +
		"\x05J&\x02\u025E\u025D\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F" +
		"\u0261\x03\x02\x02\x02\u0260\u0262\x05\\/\x02\u0261\u0260\x03\x02\x02" +
		"\x02\u0261\u0262\x03\x02\x02\x02\u0262\u0263\x03\x02\x02\x02\u0263\u0265" +
		"\x05\u0156\xAC\x02\u0264\u0266\x05d3\x02\u0265\u0264\x03\x02\x02\x02\u0265" +
		"\u0266\x03\x02\x02\x02\u0266/\x03\x02\x02\x02\u0267\u0268\x07\xE0\x02" +
		"\x02\u0268\u026A\x07\u015D\x02\x02\u0269\u026B\x05\u0158\xAD\x02\u026A" +
		"\u0269\x03\x02\x02\x02\u026A\u026B\x03\x02\x02\x02\u026B\u026C\x03\x02" +
		"\x02\x02\u026C\u026D\x05\u0150\xA9\x02\u026D\u0270\x05\u0156\xAC\x02\u026E" +
		"\u026F\x07\xBE\x02\x02\u026F\u0271\x05\xA0Q\x02\u0270\u026E\x03\x02\x02" +
		"\x02\u0270\u0271\x03\x02\x02\x02\u02711\x03\x02\x02\x02\u0272\u0276\x05" +
		"4\x1B\x02\u0273\u0276\x05L\'\x02\u0274\u0276\x05P)\x02\u0275\u0272\x03" +
		"\x02\x02\x02\u0275\u0273\x03\x02\x02\x02\u0275\u0274\x03\x02\x02\x02\u0276" +
		"3\x03\x02\x02\x02\u0277\u0278\x056\x1C\x02\u0278\u027A\x05:\x1E\x02\u0279" +
		"\u027B\x05H%\x02\u027A\u0279\x03\x02\x02\x02\u027A\u027B\x03\x02\x02\x02" +
		"\u027B\u027D\x03\x02\x02\x02\u027C\u027E\x05J&\x02\u027D\u027C\x03\x02" +
		"\x02\x02\u027D\u027E\x03\x02\x02\x02\u027E5\x03\x02\x02\x02\u027F\u0282" +
		"\x05\u0154\xAB\x02\u0280\u0282\x05\u0104\x83\x02\u0281\u027F\x03\x02\x02" +
		"\x02\u0281\u0280\x03\x02\x02\x02\u02827\x03\x02\x02\x02\u0283\u0284\x07" +
		"\u0188\x02\x02\u0284\u0289\x056\x1C\x02\u0285\u0286\x07\u018C\x02\x02" +
		"\u0286\u0288\x056\x1C\x02\u0287\u0285\x03\x02\x02\x02\u0288\u028B\x03" +
		"\x02\x02\x02\u0289\u0287\x03\x02\x02\x02\u0289\u028A\x03\x02\x02\x02\u028A" +
		"\u028C\x03\x02\x02\x02\u028B\u0289\x03\x02\x02\x02\u028C\u028D\x07\u0189" +
		"\x02\x02\u028D9\x03\x02\x02\x02\u028E\u02D8\t\n\x02\x02\u028F\u0291\t" +
		"\v\x02\x02\u0290\u0292\x05<\x1F\x02\u0291\u0290\x03\x02\x02\x02\u0291" +
		"\u0292\x03\x02\x02\x02\u0292\u02D8\x03\x02\x02\x02\u0293\u0295\x07\u0161" +
		"\x02\x02\u0294\u0296\x05<\x1F\x02\u0295\u0294\x03\x02\x02\x02\u0295\u0296" +
		"\x03\x02\x02\x02\u0296\u029D\x03\x02\x02\x02\u0297\u0299\t\f\x02\x02\u0298" +
		"\u029A\x07\u011F\x02\x02\u0299\u0298\x03\x02\x02\x02\u0299\u029A\x03\x02" +
		"\x02\x02\u029A\u029B\x03\x02\x02\x02\u029B\u029C\x07\u0160\x02\x02\u029C" +
		"\u029E\x07\xB5\x02\x02\u029D\u0297\x03\x02\x02\x02\u029D\u029E\x03\x02" +
		"\x02\x02\u029E\u02D8\x03\x02\x02\x02\u029F\u02A1\x07\u0162\x02\x02\u02A0" +
		"\u02A2\x05<\x1F\x02\u02A1\u02A0\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02" +
		"\x02\u02A2\u02A9\x03\x02\x02\x02\u02A3\u02A5\t\f\x02\x02\u02A4\u02A6\x07" +
		"\u011F\x02\x02\u02A5\u02A4\x03\x02\x02\x02\u02A5\u02A6\x03\x02\x02\x02" +
		"\u02A6\u02A7\x03\x02\x02\x02\u02A7\u02A8\x07\u0160\x02\x02\u02A8\u02AA" +
		"\x07\xB5\x02\x02\u02A9\u02A3\x03\x02\x02\x02\u02A9\u02AA\x03\x02\x02\x02" +
		"\u02AA\u02D8\x03\x02\x02\x02\u02AB\u02AD\x07\u0163\x02\x02\u02AC\u02AE" +
		"\x05<\x1F\x02\u02AD\u02AC\x03\x02\x02\x02\u02AD\u02AE\x03\x02\x02\x02" +
		"\u02AE\u02B5\x03\x02\x02\x02\u02AF\u02B1\t\f\x02\x02\u02B0\u02B2\x07\u011F" +
		"\x02\x02\u02B1\u02B0\x03\x02\x02\x02\u02B1\u02B2\x03\x02\x02\x02\u02B2" +
		"\u02B3\x03\x02\x02\x02\u02B3\u02B4\x07\u0160\x02\x02\u02B4\u02B6\x07\xB5" +
		"\x02\x02\u02B5\u02AF\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6" +
		"\u02D8\x03\x02\x02\x02\u02B7\u02B9\x07\u0164\x02\x02\u02B8\u02BA\x05<" +
		"\x1F\x02\u02B9\u02B8\x03\x02\x02\x02\u02B9\u02BA\x03\x02\x02\x02\u02BA" +
		"\u02C1\x03\x02\x02\x02\u02BB\u02BD\t\f\x02\x02\u02BC\u02BE\x07\u011F\x02" +
		"\x02\u02BD\u02BC\x03\x02\x02\x02\u02BD\u02BE\x03\x02\x02\x02\u02BE\u02BF" +
		"\x03\x02\x02\x02\u02BF\u02C0\x07\u0160\x02\x02\u02C0\u02C2\x07\xB5\x02" +
		"\x02\u02C1\u02BB\x03\x02\x02\x02\u02C1\u02C2\x03\x02\x02\x02\u02C2\u02D8" +
		"\x03\x02\x02\x02\u02C3\u02C5\t\r\x02\x02\u02C4\u02C6\x05> \x02\u02C5\u02C4" +
		"\x03\x02\x02\x02\u02C5\u02C6\x03\x02\x02\x02\u02C6\u02D8\x03\x02\x02\x02" +
		"\u02C7\u02C9\t\x0E\x02\x02\u02C8\u02CA\x05B\"\x02\u02C9\u02C8\x03\x02" +
		"\x02\x02\u02C9\u02CA\x03\x02\x02\x02\u02CA\u02D8\x03\x02\x02\x02\u02CB" +
		"\u02CD\x07Q\x02\x02\u02CC\u02CE\x05D#\x02\u02CD\u02CC\x03\x02\x02\x02" +
		"\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02D8\x03\x02\x02\x02\u02CF\u02D1\x07" +
		"\u014C\x02\x02\u02D0\u02D2\x05F$\x02\u02D1\u02D0\x03\x02\x02\x02\u02D1" +
		"\u02D2\x03\x02\x02\x02\u02D2\u02D8\x03\x02\x02\x02\u02D3\u02D5\x07w\x02" +
		"\x02\u02D4\u02D6\x05@!\x02\u02D5\u02D4\x03\x02\x02\x02\u02D5\u02D6\x03" +
		"\x02\x02\x02\u02D6\u02D8\x03\x02\x02\x02\u02D7\u028E\x03\x02\x02\x02\u02D7" +
		"\u028F\x03\x02\x02\x02\u02D7\u0293\x03\x02\x02\x02\u02D7\u029F\x03\x02" +
		"\x02\x02\u02D7\u02AB\x03\x02\x02\x02\u02D7\u02B7\x03\x02\x02\x02\u02D7" +
		"\u02C3\x03\x02\x02\x02\u02D7\u02C7\x03\x02\x02\x02\u02D7\u02CB\x03\x02" +
		"\x02\x02\u02D7\u02CF\x03\x02\x02\x02\u02D7\u02D3\x03\x02\x02\x02\u02D8" +
		";\x03\x02\x02\x02\u02D9\u02DA\x07\u0188\x02\x02\u02DA\u02DB\x05\u0174" +
		"\xBB\x02\u02DB\u02DC\x07\u0189\x02\x02\u02DC=\x03\x02\x02\x02\u02DD\u02DE" +
		"\x07\u0188\x02\x02\u02DE\u02E1\x05\u0174\xBB\x02\u02DF\u02E0\x07\u018C" +
		"\x02\x02\u02E0\u02E2\x05\u0174\xBB\x02\u02E1\u02DF\x03\x02\x02\x02\u02E1" +
		"\u02E2\x03\x02\x02\x02\u02E2\u02E3\x03\x02\x02\x02\u02E3\u02E4\x07\u0189" +
		"\x02\x02\u02E4?\x03\x02\x02\x02\u02E5\u02E6\x07\u0188\x02\x02\u02E6\u02E9" +
		"\x05\u0172\xBA\x02\u02E7\u02E8\x07\u018C\x02\x02\u02E8\u02EA\x05\u0172" +
		"\xBA\x02\u02E9\u02E7\x03\x02\x02\x02\u02E9\u02EA\x03\x02\x02\x02\u02EA" +
		"\u02EB\x03\x02\x02\x02\u02EB\u02EC\x07\u0189\x02\x02\u02ECA\x03\x02\x02" +
		"\x02\u02ED\u02EE\x07\u017F\x02\x02\u02EE\u02F3\x05:\x1E\x02\u02EF\u02F0" +
		"\x07\u018C\x02\x02\u02F0\u02F2\x05:\x1E\x02\u02F1\u02EF\x03\x02\x02\x02" +
		"\u02F2\u02F5\x03\x02\x02\x02\u02F3\u02F1\x03\x02\x02\x02\u02F3\u02F4\x03" +
		"\x02\x02\x02\u02F4\u02F6\x03\x02\x02\x02\u02F5\u02F3\x03\x02\x02\x02\u02F6" +
		"\u02F7\x07\u017E\x02\x02\u02F7C\x03\x02\x02\x02\u02F8\u02F9\x07\u017F" +
		"\x02\x02\u02F9\u02FA\x05:\x1E\x02\u02FA\u02FB\x07\u018C\x02\x02\u02FB" +
		"\u02FC\x05:\x1E\x02\u02FC\u02FD\x03\x02\x02\x02\u02FD\u02FE\x07\u017E" +
		"\x02\x02\u02FEE\x03\x02\x02\x02\u02FF\u0300\x07\u017F\x02\x02\u0300\u0301" +
		"\x056\x1C\x02\u0301\u0308\x05:\x1E\x02\u0302\u0303\x07\u018C\x02\x02\u0303" +
		"\u0304\x056\x1C\x02\u0304\u0305\x05:\x1E\x02\u0305\u0307\x03\x02\x02\x02" +
		"\u0306\u0302\x03\x02\x02\x02\u0307\u030A\x03\x02\x02\x02\u0308\u0306\x03" +
		"\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309\u030B\x03\x02\x02\x02\u030A" +
		"\u0308\x03\x02\x02\x02\u030B\u030C\x07\u017E\x02\x02\u030CG\x03\x02\x02" +
		"\x02\u030D\u030E\x07\xDC\x02\x02\u030E\u0310\x05X-\x02\u030F\u030D\x03" +
		"\x02\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\u030F\u0310\x03\x02\x02\x02\u0310\u0311\x03\x02\x02\x02\u0311\u0312\x07" +
		"\u0143\x02\x02\u0312\u0315\x07I\x02\x02\u0313\u0314\x07\u012F\x02\x02" +
		"\u0314\u0316\x07%\x02\x02\u0315\u0313\x03\x02\x02\x02\u0315\u0316\x03" +
		"\x02\x02\x02\u0316\u031C\x03\x02\x02\x02\u0317\u0319\x07\u012F\x02\x02" +
		"\u0318\u0317\x03\x02\x02\x02\u0318\u0319\x03\x02\x02\x02\u0319\u031A\x03" +
		"\x02\x02\x02\u031A\u031C\x07\u0130\x02\x02\u031B\u030F\x03\x02\x02\x02" +
		"\u031B\u0318\x03\x02\x02\x02\u031CI\x03\x02\x02\x02\u031D\u031E\x07\x15" +
		"\x02\x02\u031E\u031F\x07\u019D\x02\x02\u031FK\x03\x02\x02\x02\u0320\u0321" +
		"\x056\x1C\x02\u0321\u0322\x05:\x1E\x02\u0322\u0325\x07\u0124\x02\x02\u0323" +
		"\u0324\x07\u0101\x02\x02\u0324\u0326\x05N(\x02\u0325\u0323\x03\x02\x02" +
		"\x02\u0325\u0326\x03\x02\x02\x02\u0326\u0328\x03\x02\x02\x02\u0327\u0329" +
		"\x07\xAD\x02\x02\u0328\u0327\x03\x02\x02\x02\u0328\u0329\x03\x02\x02\x02" +
		"\u0329M\x03\x02\x02\x02\u032A\u032B\x07\u019D\x02\x02\u032BO\x03\x02\x02" +
		"\x02\u032C\u032D\x056\x1C\x02\u032D\u032E\x07\xBE\x02\x02\u032E\u0330" +
		"\x05R*\x02\u032F\u0331\x05J&\x02\u0330\u032F\x03\x02\x02\x02\u0330\u0331" +
		"\x03\x02\x02\x02\u0331Q\x03\x02\x02\x02\u0332\u0333\x05\u0104\x83\x02" +
		"\u0333S\x03\x02\x02\x02\u0334\u0335\x07\xAE\x02\x02\u0335\u0336\x07\u0100" +
		"\x02\x02\u0336\u0337\x05\u0104\x83\x02\u0337\u0338\x07\xBE\x02\x02\u0338" +
		"\u0339\x05\u0104\x83\x02\u0339U\x03\x02\x02\x02\u033A\u033B\x07\xDC\x02" +
		"\x02\u033B\u033D\x05X-\x02\u033C\u033A\x03\x02\x02\x02\u033C\u033D\x03" +
		"\x02\x02\x02\u033D\u033E\x03\x02\x02\x02\u033E\u033F\x07\u0143\x02\x02" +
		"\u033F\u0340\x07I\x02\x02\u0340\u0341\x058\x1D\x02\u0341\u0342\x07\u012F" +
		"\x02\x02\u0342\u0343\x07%\x02\x02\u0343W\x03\x02\x02\x02\u0344\u0345\x05" +
		"\u0140\xA1\x02\u0345Y\x03\x02\x02\x02\u0346\u0347\x07\u0140\x02\x02\u0347" +
		"\u0348\x07\u0100\x02\x02\u0348\u0349\x07\u015B\x02\x02\u0349[\x03\x02" +
		"\x02\x02\u034A\u034B\x07c\x02\x02\u034B\u034C\x07\xCA\x02\x02\u034C\u034D" +
		"\x05^0\x02\u034D]\x03\x02\x02\x02\u034E\u034F\x07\u0188\x02\x02\u034F" +
		"\u0354\x05`1\x02\u0350\u0351\x07\u018C\x02\x02\u0351\u0353\x05`1\x02\u0352" +
		"\u0350\x03\x02\x02\x02\u0353\u0356\x03\x02\x02\x02\u0354\u0352\x03\x02" +
		"\x02\x02\u0354\u0355\x03\x02\x02\x02\u0355\u0357\x03\x02\x02\x02\u0356" +
		"\u0354\x03\x02\x02\x02\u0357\u0358\x07\u0189\x02\x02\u0358_\x03\x02\x02" +
		"\x02\u0359\u0367\x05\u0126\x94\x02\u035A\u035B\x05\u0140\xA1\x02\u035B" +
		"\u035C\x07\u0188\x02\x02\u035C\u0361\x05b2\x02\u035D\u035E\x07\u018C\x02" +
		"\x02\u035E\u0360\x05b2\x02\u035F\u035D\x03\x02\x02\x02\u0360\u0363\x03" +
		"\x02\x02\x02\u0361\u035F\x03\x02\x02\x02\u0361\u0362\x03\x02\x02\x02\u0362" +
		"\u0364\x03\x02\x02\x02\u0363\u0361\x03\x02\x02\x02\u0364\u0365\x07\u0189" +
		"\x02\x02\u0365\u0367\x03\x02\x02\x02\u0366\u0359\x03\x02\x02\x02\u0366" +
		"\u035A\x03\x02\x02\x02\u0367a\x03\x02\x02\x02\u0368\u036B\x05\u0126\x94" +
		"\x02\u0369\u036B\x05\u016E\xB8\x02\u036A\u0368\x03\x02\x02\x02\u036A\u0369" +
		"\x03\x02\x02\x02\u036Bc\x03\x02\x02\x02\u036C\u036D\x07\u011D\x02\x02" +
		"\u036D\u0376\x05\u0152\xAA\x02\u036E\u0372\x07\u0188\x02\x02\u036F\u0371" +
		"\x05f4\x02\u0370\u036F\x03\x02\x02\x02\u0371\u0374\x03\x02\x02\x02\u0372" +
		"\u0370\x03\x02\x02\x02\u0372\u0373\x03\x02\x02\x02\u0373\u0375\x03\x02" +
		"\x02\x02\u0374\u0372\x03\x02\x02\x02\u0375\u0377\x07\u0189\x02\x02\u0376" +
		"\u036E\x03\x02\x02\x02\u0376\u0377\x03\x02\x02\x02\u0377e\x03\x02\x02" +
		"\x02\u0378\u0379\t\x0F\x02\x02\u0379\u037D\t\x10\x02\x02\u037A\u037B\t" +
		"\x11\x02\x02\u037B\u037D\t\x12\x02\x02\u037C\u0378\x03\x02\x02\x02\u037C" +
		"\u037A\x03\x02\x02\x02\u037Dg\x03\x02\x02\x02\u037E\u037F\x07\xE0\x02" +
		"\x02\u037F\u0380\x07\x0F\x02\x02\u0380\u0381\x05\u0154\xAB\x02\u0381\u0382" +
		"\x05\u0156\xAC\x02\u0382i\x03\x02\x02\x02\u0383\u0384\x07\xE0\x02\x02" +
		"\u0384\u0386\x07\x1C\x02\x02\u0385\u0387\x05\u0158\xAD\x02\u0386\u0385" +
		"\x03\x02\x02\x02\u0386\u0387\x03\x02\x02\x02\u0387\u0388\x03\x02\x02\x02" +
		"\u0388\u038A\x05\u014E\xA8\x02\u0389\u038B\x05J&\x02\u038A\u0389\x03\x02" +
		"\x02\x02\u038A\u038B\x03\x02\x02\x02\u038B\u038D\x03\x02\x02\x02\u038C" +
		"\u038E\x05\u0156\xAC\x02\u038D\u038C\x03\x02\x02\x02\u038D\u038E\x03\x02" +
		"\x02\x02\u038Ek\x03\x02\x02\x02\u038F\u0391\x07\xE0\x02\x02\u0390\u0392" +
		"\x07\x9A\x02\x02\u0391\u0390\x03\x02\x02\x02\u0391\u0392\x03\x02\x02\x02" +
		"\u0392\u0393\x03\x02\x02\x02\u0393\u0395\x07\xAB\x02\x02\u0394\u0396\x05" +
		"\u0158\xAD\x02\u0395\u0394\x03\x02\x02\x02\u0395\u0396\x03\x02\x02\x02" +
		"\u0396\u0397\x03\x02\x02\x02\u0397\u0399\x05\u0154\xAB\x02\u0398\u039A" +
		"\x058\x1D\x02\u0399\u0398\x03\x02\x02\x02\u0399\u039A\x03\x02\x02\x02" +
		"\u039A\u039C\x03\x02\x02\x02\u039B\u039D\x05J&\x02\u039C\u039B\x03\x02" +
		"\x02\x02\u039C\u039D\x03\x02\x02\x02\u039D\u039E\x03\x02\x02\x02\u039E" +
		"\u039F\x07\xBE\x02\x02\u039F\u03A0\x05\xA0Q\x02\u03A0m\x03\x02\x02\x02" +
		"\u03A1\u03A5\x07\xE0\x02\x02\u03A2\u03A6\x07\x9A\x02\x02\u03A3\u03A4\x07" +
		"\x9A\x02\x02\u03A4\u03A6\x07\u015A\x02\x02\u03A5\u03A2\x03\x02\x02\x02" +
		"\u03A5\u03A3\x03\x02\x02\x02\u03A5\u03A6\x03\x02\x02\x02\u03A6\u03A7\x03" +
		"\x02\x02\x02\u03A7\u03A9\x07\u0103\x02\x02\u03A8\u03AA\x05\u0158\xAD\x02" +
		"\u03A9\u03A8\x03\x02\x02\x02\u03A9\u03AA\x03\x02\x02\x02\u03AA\u03AB\x03" +
		"\x02\x02\x02\u03AB\u03AC\x05\u011C\x8F\x02\u03AC\u03AD\x07\xBE\x02\x02" +
		"\u03AD\u03B0\x05\u0140\xA1\x02\u03AE\u03AF\x07\u0119\x02\x02\u03AF\u03B1" +
		"\t\x13\x02\x02\u03B0\u03AE\x03\x02\x02\x02\u03B0\u03B1\x03\x02\x02\x02" +
		"\u03B1\u03B3\x03\x02\x02\x02\u03B2\u03B4\x05p9\x02\u03B3\u03B2\x03\x02" +
		"\x02\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4o\x03\x02\x02\x02\u03B5\u03B6" +
		"\x07\u0171\x02\x02\u03B6\u03B7\x07D\x02\x02\u03B7\u03BD\x05r:\x02\u03B8" +
		"\u03B9\x07\u018C\x02\x02\u03B9\u03BA\x07D\x02\x02\u03BA\u03BC\x05r:\x02" +
		"\u03BB\u03B8\x03\x02\x02\x02\u03BC\u03BF\x03\x02\x02\x02\u03BD\u03BB\x03" +
		"\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BEq\x03\x02\x02\x02\u03BF" +
		"\u03BD\x03\x02\x02\x02\u03C0\u03C1\x07\u019D\x02\x02\u03C1s\x03\x02\x02" +
		"\x02\u03C2\u03C3\x07\xB9\x02\x02\u03C3\u03C5\x07\u015D\x02\x02\u03C4\u03C6" +
		"\x05\u015A\xAE\x02\u03C5\u03C4\x03\x02\x02\x02\u03C5\u03C6\x03\x02\x02" +
		"\x02\u03C6\u03C7\x03\x02\x02\x02\u03C7\u03CD\x05\u0152\xAA\x02\u03C8\u03CE" +
		"\x05v<\x02\u03C9\u03CE\x05x=\x02\u03CA\u03CE\x05z>\x02\u03CB\u03CE\x05" +
		"|?\x02\u03CC\u03CE\x05~@\x02\u03CD\u03C8\x03\x02\x02\x02\u03CD\u03C9\x03" +
		"\x02\x02\x02\u03CD\u03CA\x03\x02\x02\x02\u03CD\u03CB\x03\x02\x02\x02\u03CD" +
		"\u03CC\x03\x02\x02\x02\u03CEu\x03\x02\x02\x02\u03CF\u03D1\x07{\x02\x02" +
		"\u03D0\u03D2\x05\u0154\xAB\x02\u03D1\u03D0\x03\x02\x02\x02\u03D1\u03D2" +
		"\x03\x02\x02\x02\u03D2\u03D3\x03\x02\x02\x02\u03D3\u03D4\x07\u0166\x02" +
		"\x02\u03D4\u03D5\x05\u0154\xAB\x02\u03D5w\x03\x02\x02\x02\u03D6\u03D7" +
		"\x07\u0150\x02\x02\u03D7\u03D8\x05\u015C\xAF\x02\u03D8y\x03\x02\x02\x02" +
		"\u03D9\u03DA\x07\x07\x02\x02\u03DA\u03DB\x07\xDC\x02\x02\u03DB\u03DC\x05" +
		"X-\x02\u03DC\u03DD\x07\u0143\x02\x02\u03DD\u03DE\x07I\x02\x02\u03DE\u03E0" +
		"\x058\x1D\x02\u03DF\u03E1\x05\x80A\x02\u03E0\u03DF\x03\x02\x02\x02\u03E0" +
		"\u03E1\x03\x02\x02\x02\u03E1{\x03\x02\x02\x02\u03E2\u03E3\x07\xF2\x02" +
		"\x02\u03E3\u03E4\x07\xDC\x02\x02\u03E4\u03E5\x05X-\x02\u03E5}\x03\x02" +
		"\x02\x02\u03E6\u03E7\x07\x07\x02\x02\u03E7\u03E8\x07\u016B\x02\x02\u03E8" +
		"\u03E9\x058\x1D\x02\u03E9\x7F\x03\x02\x02\x02\u03EA\u03EB\x07\u012F\x02" +
		"\x02\u03EB\u03EC\x07%\x02\x02\u03EC\x81\x03\x02\x02\x02\u03ED\u03EE\x07" +
		"\xB9\x02\x02\u03EE\u03EF\x07\xAB\x02\x02\u03EF\u03F3\x05\u0154\xAB\x02" +
		"\u03F0\u03F4\x05v<\x02\u03F1\u03F2\x07\xBE\x02\x02\u03F2\u03F4\x05\xA0" +
		"Q\x02\u03F3\u03F0\x03\x02\x02\x02\u03F3\u03F1\x03\x02\x02\x02\u03F4\x83" +
		"\x03\x02\x02\x02\u03F5\u03F6\x07\xB9\x02\x02\u03F6\u03F7\x07\x1C\x02\x02" +
		"\u03F7\u03F8\x05\u014C\xA7\x02\u03F8\u03F9\x05x=\x02\u03F9\x85\x03\x02" +
		"\x02\x02\u03FA\u03FE\x07\xB9\x02\x02\u03FB\u03FF\x07\x9A\x02\x02\u03FC" +
		"\u03FD\x07\x9A\x02\x02\u03FD\u03FF\x07\u015A\x02\x02\u03FE\u03FB\x03\x02" +
		"\x02\x02\u03FE\u03FC\x03\x02\x02\x02\u03FE\u03FF\x03\x02\x02\x02\u03FF" +
		"\u0400\x03\x02\x02\x02\u0400\u0402\x07\u0103\x02\x02\u0401\u0403\x05\u015A" +
		"\xAE\x02\u0402\u0401\x03\x02\x02\x02\u0402\u0403\x03\x02\x02\x02\u0403" +
		"\u0404\x03\x02\x02\x02\u0404\u0405\x05\u0154\xAB\x02\u0405\u0406\x07\xBE" +
		"\x02\x02\u0406\u0409\x05\u0140\xA1\x02\u0407\u0408\x07\u0119\x02\x02\u0408" +
		"\u040A\t\x13\x02\x02\u0409\u0407\x03\x02\x02\x02\u0409\u040A\x03\x02\x02" +
		"\x02\u040A\x87\x03\x02\x02\x02\u040B\u040C\x07\xF2\x02\x02\u040C\u040E" +
		"\x07\x0F\x02\x02\u040D\u040F\x05\u015A\xAE\x02\u040E\u040D\x03\x02\x02" +
		"\x02\u040E\u040F\x03\x02\x02\x02\u040F\u0410\x03\x02\x02\x02\u0410\u0411" +
		"\x05\u014A\xA6\x02\u0411\x89\x03\x02\x02\x02\u0412\u0414\x07\xF2\x02\x02" +
		"\u0413\u0415\x07\x9A\x02\x02\u0414\u0413\x03\x02\x02\x02\u0414\u0415\x03" +
		"\x02\x02\x02\u0415\u0416\x03\x02\x02\x02\u0416\u0418\x07\u015D\x02\x02" +
		"\u0417\u0419\x05\u015A\xAE\x02\u0418\u0417\x03\x02\x02\x02\u0418\u0419" +
		"\x03\x02\x02\x02\u0419\u041A\x03\x02\x02\x02\u041A\u041B\x05\u0152\xAA" +
		"\x02\u041B\x8B\x03\x02\x02\x02\u041C\u041D\x07\xF2\x02\x02\u041D\u041F" +
		"\x07\x1C\x02\x02\u041E\u0420\x05\u015A\xAE\x02\u041F\u041E\x03\x02\x02" +
		"\x02\u041F\u0420\x03\x02\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421\u0423" +
		"\x05\u014C\xA7\x02\u0422\u0424\t\x14\x02\x02\u0423\u0422\x03\x02\x02\x02" +
		"\u0423\u0424\x03\x02\x02\x02\u0424\x8D\x03\x02\x02\x02\u0425\u0427\x07" +
		"\xF2\x02\x02\u0426\u0428\x07\x9A\x02\x02\u0427\u0426\x03\x02\x02\x02\u0427" +
		"\u0428\x03\x02\x02\x02\u0428\u0429\x03\x02\x02\x02\u0429\u042B\x07\xAB" +
		"\x02\x02\u042A\u042C\x05\u015A\xAE\x02\u042B\u042A\x03\x02\x02\x02\u042B" +
		"\u042C\x03\x02\x02\x02\u042C\u042D\x03\x02\x02\x02\u042D\u042E\x05\u0154" +
		"\xAB\x02\u042E\x8F\x03\x02\x02\x02\u042F\u0433\x07\xF2\x02\x02\u0430\u0434" +
		"\x07\x9A\x02\x02\u0431\u0432\x07\x9A\x02\x02\u0432\u0434\x07\u015A\x02" +
		"\x02\u0433\u0430\x03\x02\x02\x02\u0433\u0431\x03\x02\x02\x02\u0433\u0434" +
		"\x03\x02\x02\x02\u0434\u0435\x03\x02\x02\x02\u0435\u0437\x07\u0103\x02" +
		"\x02\u0436\u0438\x05\u015A\xAE\x02\u0437\u0436\x03\x02\x02\x02\u0437\u0438" +
		"\x03\x02\x02\x02\u0438\u0439\x03\x02\x02\x02\u0439\u043A\x05\u011C\x8F" +
		"\x02\u043A\x91\x03\x02\x02\x02\u043B\u043D\x07\xF9\x02\x02\u043C\u043B" +
		"\x03\x02\x02\x02\u043C\u043D\x03\x02\x02\x02\u043D\u043E\x03\x02\x02\x02" +
		"\u043E\u0443\x05\x94K\x02\u043F\u0443\x05\x9CO\x02\u0440\u0441\x07\xF9" +
		"\x02\x02\u0441\u0443\x05\x9EP\x02\u0442\u043C\x03\x02\x02\x02\u0442\u043F" +
		"\x03\x02\x02\x02\u0442\u0440\x03\x02\x02\x02\u0443\x93\x03\x02\x02\x02" +
		"\u0444\u0445\x07\u0110\x02\x02\u0445\u0446\t\x15\x02\x02\u0446\u044F\x05" +
		"\u0152\xAA\x02\u0447\u0449\x05\x96L\x02\u0448\u0447\x03\x02\x02\x02\u0448" +
		"\u0449\x03\x02\x02\x02\u0449\u044B\x03\x02\x02\x02\u044A\u044C\x058\x1D" +
		"\x02\u044B\u044A\x03\x02\x02\x02\u044B\u044C\x03\x02\x02\x02\u044C\u044D" +
		"\x03\x02\x02\x02\u044D\u0450\x05\xA0Q\x02\u044E\u0450\x05\x98M\x02\u044F" +
		"\u0448\x03\x02\x02\x02\u044F\u044E\x03\x02\x02\x02\u0450\x95\x03\x02\x02" +
		"\x02\u0451\u0452\x07\u013C\x02\x02\u0452\u0453\x05\u015C\xAF\x02\u0453" +
		"\x97\x03\x02\x02\x02\u0454\u0455\x07\u0173\x02\x02\u0455\u045A\x05\x9A" +
		"N\x02\u0456\u0457\x07\u018C\x02\x02\u0457\u0459\x05\x9AN\x02\u0458\u0456" +
		"\x03\x02\x02\x02\u0459\u045C\x03\x02\x02\x02\u045A\u0458\x03\x02\x02\x02" +
		"\u045A\u045B\x03\x02\x02\x02\u045B\x99\x03\x02\x02\x02\u045C\u045A\x03" +
		"\x02\x02\x02\u045D\u045E\x07\u0188\x02\x02\u045E\u0463\x05\u016E\xB8\x02" +
		"\u045F\u0460\x07\u018C\x02\x02\u0460\u0462\x05\u016E\xB8\x02\u0461\u045F" +
		"\x03\x02\x02\x02\u0462\u0465\x03\x02\x02\x02\u0463\u0461\x03\x02\x02\x02" +
		"\u0463\u0464\x03\x02\x02\x02\u0464\u0466\x03\x02\x02\x02\u0465\u0463\x03" +
		"\x02\x02\x02\u0466\u0467\x07\u0189\x02\x02\u0467\x9B\x03\x02\x02\x02\u0468" +
		"\u0469\x07\xC2\x02\x02\u0469\u046A\x07\x94\x02\x02\u046A\u046B\x07\u0150" +
		"\x02\x02\u046B\u046F\x07\u018D\x02\x02\u046C\u046D\x05\x94K\x02\u046D" +
		"\u046E\x07\u018D\x02\x02\u046E\u0470\x03\x02\x02\x02\u046F\u046C\x03\x02" +
		"\x02\x02\u0470\u0471\x03\x02\x02\x02\u0471\u046F\x03\x02\x02\x02\u0471" +
		"\u0472\x03\x02\x02\x02\u0472\u0473\x03\x02\x02\x02\u0473\u0474\x07\xF5" +
		"\x02\x02\u0474\x9D\x03\x02\x02\x02\u0475\u0476\x07\x94\x02\x02\u0476\u0477" +
		"\x07\u0150\x02\x02\u0477\u047B\x07\xC2\x02\x02\u0478\u0479\x05\x94K\x02" +
		"\u0479\u047A\x07\u018D\x02\x02\u047A\u047C\x03\x02\x02\x02\u047B\u0478" +
		"\x03\x02\x02\x02\u047C\u047D\x03\x02\x02\x02\u047D\u047B\x03\x02\x02\x02" +
		"\u047D\u047E\x03\x02\x02\x02\u047E\u047F\x03\x02\x02\x02\u047F\u0480\x07" +
		"\xF5\x02\x02\u0480\x9F\x03\x02\x02\x02\u0481\u0482\bQ\x01\x02\u0482\u0499" +
		"\x05\xA2R\x02\u0483\u0484\x05\xA4S\x02\u0484\u0485\x05\xA0Q\x07\u0485" +
		"\u0499\x03\x02\x02\x02\u0486\u0487\x07\u0188\x02\x02\u0487\u0488\x05\xA0" +
		"Q\x02\u0488\u0489\x07\u0189\x02\x02\u0489\u0499\x03\x02\x02\x02\u048A" +
		"\u048C\x05\xACW\x02\u048B\u048D\x05\xE8u\x02\u048C\u048B\x03\x02\x02\x02" +
		"\u048C\u048D\x03\x02\x02\x02\u048D\u048F\x03\x02\x02\x02\u048E\u0490\x05" +
		"\xECw\x02\u048F\u048E\x03\x02\x02\x02\u048F\u0490\x03\x02\x02\x02\u0490" +
		"\u0499\x03\x02\x02\x02\u0491\u0493\x05\xAAV\x02\u0492\u0494\x05\xE8u\x02" +
		"\u0493\u0492\x03\x02\x02\x02\u0493\u0494\x03\x02\x02\x02\u0494\u0496\x03" +
		"\x02\x02\x02\u0495\u0497\x05\xECw\x02\u0496\u0495\x03\x02\x02\x02\u0496" +
		"\u0497\x03\x02\x02\x02\u0497\u0499\x03\x02\x02\x02\u0498\u0481\x03\x02" +
		"\x02\x02\u0498\u0483\x03\x02\x02\x02\u0498\u0486\x03\x02\x02\x02\u0498" +
		"\u048A\x03\x02\x02\x02\u0498\u0491\x03\x02\x02\x02\u0499\u04A8\x03\x02" +
		"\x02\x02\u049A\u049B\f\x05\x02\x02\u049B\u049D\t\x16\x02\x02\u049C\u049E" +
		"\x07\xB7\x02\x02\u049D\u049C\x03\x02\x02\x02\u049D\u049E\x03\x02\x02\x02" +
		"\u049E\u049F\x03\x02\x02\x02\u049F\u04A1\x05\xA0Q\x02\u04A0\u04A2\x05" +
		"\xE8u\x02\u04A1\u04A0\x03\x02\x02\x02\u04A1\u04A2\x03\x02\x02\x02\u04A2" +
		"\u04A4\x03\x02\x02\x02\u04A3\u04A5\x05\xECw\x02\u04A4\u04A3\x03\x02\x02" +
		"\x02\u04A4\u04A5\x03\x02\x02\x02\u04A5\u04A7\x03\x02\x02\x02\u04A6\u049A" +
		"\x03\x02\x02\x02\u04A7\u04AA\x03\x02\x02\x02\u04A8\u04A6\x03\x02\x02\x02" +
		"\u04A8\u04A9\x03\x02\x02\x02\u04A9\xA1\x03\x02\x02\x02\u04AA\u04A8\x03" +
		"\x02\x02\x02\u04AB\u04AC\x07\u0173\x02\x02\u04AC\u04B1\x05\u0104\x83\x02" +
		"\u04AD\u04AE\x07\u018C\x02\x02\u04AE\u04B0\x05\u0104\x83\x02\u04AF\u04AD" +
		"\x03\x02\x02\x02\u04B0\u04B3\x03\x02\x02\x02\u04B1\u04AF\x03\x02\x02\x02" +
		"\u04B1\u04B2\x03\x02\x02\x02\u04B2\xA3\x03\x02\x02\x02\u04B3\u04B1\x03" +
		"\x02\x02\x02\u04B4\u04B5\x07\u0179\x02\x02\u04B5\u04BA\x05\xA6T\x02\u04B6" +
		"\u04B7\x07\u018C\x02\x02\u04B7\u04B9\x05\xA6T\x02\u04B8\u04B6\x03\x02" +
		"\x02\x02\u04B9\u04BC\x03\x02\x02\x02\u04BA\u04B8\x03\x02\x02\x02\u04BA" +
		"\u04BB\x03\x02\x02\x02\u04BB\xA5\x03\x02\x02\x02\u04BC\u04BA\x03\x02\x02" +
		"\x02\u04BD\u04C9\x05\xA8U\x02\u04BE\u04BF\x07\u0188\x02\x02\u04BF\u04C4" +
		"\x056\x1C\x02\u04C0\u04C1\x07\u018C\x02\x02\u04C1\u04C3\x056\x1C\x02\u04C2" +
		"\u04C0\x03\x02\x02\x02\u04C3\u04C6\x03\x02\x02\x02\u04C4\u04C2\x03\x02" +
		"\x02\x02\u04C4\u04C5\x03\x02\x02\x02\u04C5\u04C7\x03\x02\x02\x02\u04C6" +
		"\u04C4\x03\x02\x02\x02\u04C7\u04C8\x07\u0189\x02\x02\u04C8\u04CA\x03\x02" +
		"\x02\x02\u04C9\u04BE\x03\x02\x02\x02\u04C9\u04CA\x03\x02\x02\x02\u04CA" +
		"\u04CB\x03\x02\x02\x02\u04CB\u04CC\x07\xBE\x02\x02\u04CC\u04CD\x07\u0188" +
		"\x02\x02\u04CD\u04CE\x05\xA0Q\x02\u04CE\u04CF\x07\u0189\x02\x02\u04CF" +
		"\xA7\x03\x02\x02\x02\u04D0\u04D1\x05\u0140\xA1\x02\u04D1\xA9\x03\x02\x02" +
		"\x02\u04D2\u04D3\x05\xACW\x02\u04D3\u04D5\x05\xB2Z\x02\u04D4\u04D6\x05" +
		"\xCEh\x02\u04D5\u04D4\x03\x02\x02\x02\u04D5\u04D6\x03\x02\x02\x02\u04D6" +
		"\u04D8\x03\x02\x02\x02\u04D7\u04D9\x05\xD0i\x02\u04D8\u04D7\x03\x02\x02" +
		"\x02\u04D8\u04D9\x03\x02\x02\x02\u04D9\u04DB\x03\x02\x02\x02\u04DA\u04DC" +
		"\x05\xDEp\x02\u04DB\u04DA\x03\x02\x02\x02\u04DB\u04DC\x03\x02\x02\x02" +
		"\u04DC\u04DE\x03\x02\x02\x02\u04DD\u04DF\x05\xE0q\x02\u04DE\u04DD\x03" +
		"\x02\x02\x02\u04DE\u04DF\x03\x02\x02\x02\u04DF\u04E5\x03\x02\x02\x02\u04E0" +
		"\u04E1\x05\xACW\x02\u04E1\u04E2\x05\xB2Z\x02\u04E2\u04E3\x05\xE6t\x02" +
		"\u04E3\u04E5\x03\x02\x02\x02\u04E4\u04D2\x03\x02\x02\x02\u04E4\u04E0\x03" +
		"\x02\x02\x02\u04E5\xAB\x03\x02\x02\x02\u04E6\u04E8\x07\u014F\x02\x02\u04E7" +
		"\u04E9\x05\u0178\xBD\x02\u04E8\u04E7\x03\x02\x02\x02\u04E8\u04E9\x03\x02" +
		"\x02\x02\u04E9\u04F3\x03\x02\x02\x02\u04EA\u04F4\x07\u0193\x02\x02\u04EB" +
		"\u04F0\x05\xAEX\x02\u04EC\u04ED\x07\u018C\x02\x02\u04ED\u04EF\x05\xAE" +
		"X\x02\u04EE\u04EC\x03\x02\x02\x02\u04EF\u04F2\x03\x02\x02\x02\u04F0\u04EE" +
		"\x03\x02\x02\x02\u04F0\u04F1\x03\x02\x02\x02\u04F1\u04F4\x03\x02\x02\x02" +
		"\u04F2\u04F0\x03\x02\x02\x02\u04F3\u04EA\x03\x02\x02\x02\u04F3\u04EB\x03" +
		"\x02\x02\x02\u04F4\xAD\x03\x02\x02\x02\u04F5\u04FE\x05\xB0Y\x02\u04F6" +
		"\u04FB\x05\u0104\x83\x02\u04F7\u04F9\x07\xBE\x02\x02\u04F8\u04F7\x03\x02" +
		"\x02\x02\u04F8\u04F9\x03\x02\x02\x02\u04F9\u04FA\x03\x02\x02\x02\u04FA" +
		"\u04FC\x05\u0104\x83\x02\u04FB\u04F8\x03\x02\x02\x02\u04FB\u04FC\x03\x02" +
		"\x02\x02\u04FC\u04FE\x03\x02\x02\x02\u04FD\u04F5\x03\x02\x02\x02\u04FD" +
		"\u04F6\x03\x02\x02\x02\u04FE\xAF\x03\x02\x02\x02\u04FF\u0500\x05\u010E" +
		"\x88\x02\u0500\u0501\x07\u013A\x02\x02\u0501\u0502\x05\xE4s\x02\u0502" +
		"\u0503\x07\xBE\x02\x02\u0503\u0504\x05\u0140\xA1\x02\u0504\u050C\x03\x02" +
		"\x02\x02\u0505\u0506\x05\u010E\x88\x02\u0506\u0507\x07\u013A\x02\x02\u0507" +
		"\u0508\x05\u0138\x9D\x02\u0508\u0509\x07\xBE\x02\x02\u0509\u050A\x05\u0140" +
		"\xA1\x02\u050A\u050C\x03\x02\x02\x02\u050B\u04FF\x03\x02\x02\x02\u050B" +
		"\u0505\x03\x02\x02\x02\u050C\xB1\x03\x02\x02\x02\u050D\u050E\x07\u0101" +
		"\x02\x02\u050E\u050F\x05\xB4[\x02\u050F\xB3\x03\x02\x02\x02\u0510\u0511" +
		"\b[\x01\x02\u0511\u0516\x05\xB6\\\x02\u0512\u0513\x07\u018C\x02\x02\u0513" +
		"\u0515\x05\xB6\\\x02\u0514\u0512\x03\x02\x02\x02\u0515\u0518\x03\x02\x02" +
		"\x02\u0516\u0514\x03\x02\x02\x02\u0516\u0517\x03\x02\x02\x02\u0517\u051C" +
		"\x03\x02\x02\x02\u0518\u0516\x03\x02\x02\x02\u0519\u051C\x05\xBE`\x02" +
		"\u051A\u051C\x05\xC0a\x02\u051B\u0510\x03\x02\x02\x02\u051B\u0519\x03" +
		"\x02\x02\x02\u051B\u051A\x03\x02\x02\x02\u051C\u0548\x03\x02\x02\x02\u051D" +
		"\u051E\f\x05\x02\x02\u051E\u051F\x07\xE1\x02\x02\u051F\u0520\x07\u0117" +
		"\x02\x02\u0520\u0547\x05\xB4[\x06\u0521\u0523\f\x07\x02\x02\u0522\u0524" +
		"\x07\u012B\x02\x02\u0523\u0522\x03\x02\x02\x02\u0523\u0524\x03\x02\x02" +
		"\x02\u0524\u0526\x03\x02\x02\x02\u0525\u0527\t\x17\x02\x02\u0526\u0525" +
		"\x03\x02\x02\x02\u0526\u0527\x03\x02\x02\x02\u0527\u0529\x03\x02\x02\x02" +
		"\u0528\u052A\x07\u0139\x02\x02\u0529\u0528\x03\x02\x02\x02\u0529\u052A" +
		"\x03\x02\x02\x02\u052A\u052B\x03\x02\x02\x02\u052B\u052C\x07\u0117\x02" +
		"\x02\u052C\u052E\x05\xB4[\x02\u052D\u052F\x05\xCCg\x02\u052E\u052D\x03" +
		"\x02\x02\x02\u052E\u052F\x03\x02\x02\x02\u052F\u0547\x03\x02\x02\x02\u0530" +
		"\u0532\f\x06\x02\x02\u0531\u0533\x07\u012B\x02\x02\u0532\u0531\x03\x02" +
		"\x02\x02\u0532\u0533\x03\x02\x02\x02\u0533\u0535\x03\x02\x02\x02\u0534" +
		"\u0536\t\x17\x02\x02\u0535\u0534\x03\x02\x02\x02\u0535\u0536\x03\x02\x02" +
		"\x02\u0536\u0538\x03\x02\x02\x02\u0537\u0539\x07\u0139\x02\x02\u0538\u0537" +
		"\x03\x02\x02\x02\u0538\u0539\x03\x02\x02\x02\u0539\u053A\x03\x02\x02\x02" +
		"\u053A\u053B\x07\u0117\x02\x02\u053B\u053D\x05\xB4[\x02\u053C\u053E\x05" +
		"\xCCg\x02\u053D\u053C\x03\x02\x02\x02\u053D\u053E\x03\x02\x02\x02\u053E" +
		"\u0543\x03\x02\x02\x02\u053F\u0540\x07\u018C\x02\x02\u0540\u0542\x05\xB6" +
		"\\\x02\u0541\u053F\x03\x02\x02\x02\u0542\u0545\x03\x02\x02\x02\u0543\u0541" +
		"\x03\x02\x02\x02\u0543\u0544\x03\x02\x02\x02\u0544\u0547\x03\x02\x02\x02" +
		"\u0545\u0543\x03\x02\x02\x02\u0546\u051D\x03\x02\x02\x02\u0546\u0521\x03" +
		"\x02\x02\x02\u0546\u0530\x03\x02\x02\x02\u0547\u054A\x03\x02\x02\x02\u0548" +
		"\u0546\x03\x02\x02\x02\u0548\u0549\x03\x02\x02\x02\u0549\xB5\x03\x02\x02" +
		"\x02\u054A\u0548\x03\x02\x02\x02\u054B\u054D\x05\xB8]\x02\u054C\u054E" +
		"\x05\u0136\x9C\x02\u054D\u054C\x03\x02\x02\x02\u054D\u054E\x03\x02\x02" +
		"\x02\u054E\xB7\x03\x02\x02\x02\u054F\u0551\x07\u015D\x02\x02\u0550\u054F" +
		"\x03\x02\x02\x02\u0550\u0551\x03\x02\x02\x02\u0551\u0552\x03\x02\x02\x02" +
		"\u0552\u0554\x05\u0152\xAA\x02\u0553\u0555\x05\xBA^\x02\u0554\u0553\x03" +
		"\x02\x02\x02\u0554\u0555\x03\x02\x02\x02\u0555\u055A\x03\x02\x02\x02\u0556" +
		"\u0558\x07\xBE\x02\x02\u0557\u0556\x03\x02\x02\x02\u0557\u0558\x03\x02" +
		"\x02\x02\u0558\u0559\x03\x02\x02\x02\u0559\u055B\x05\u0124\x93\x02\u055A" +
		"\u0557\x03\x02\x02\x02\u055A\u055B\x03\x02\x02\x02\u055B\u0595\x03\x02" +
		"\x02\x02\u055C\u055D\x07\u011A\x02\x02\u055D\u055E\x07\u015D\x02\x02\u055E" +
		"\u055F\x07\u0188\x02\x02\u055F\u0560\x05\u011C\x8F\x02\u0560\u0561\x07" +
		"\u0188\x02\x02\u0561\u0566\x05\u011E\x90\x02\u0562\u0563\x07\u018C\x02" +
		"\x02\u0563\u0565\x05\u011E\x90\x02\u0564\u0562\x03\x02\x02\x02\u0565\u0568" +
		"\x03\x02\x02\x02\u0566\u0564\x03\x02\x02\x02\u0566\u0567\x03\x02\x02\x02" +
		"\u0567\u0569\x03\x02\x02\x02\u0568\u0566\x03\x02\x02\x02\u0569\u056A\x07" +
		"\u0189\x02\x02\u056A\u056B\x07\u0189\x02\x02\u056B\u0595\x03\x02\x02\x02" +
		"\u056C\u056E\x07\u011A\x02\x02\u056D\u056C\x03\x02\x02\x02\u056D\u056E" +
		"\x03\x02\x02\x02\u056E\u056F\x03\x02\x02\x02\u056F\u0570\x07\u0188\x02" +
		"\x02\u0570\u0571\x05\xA0Q\x02\u0571\u0572\x07\u0189\x02\x02\u0572\u0595" +
		"\x03\x02\x02\x02\u0573\u0574\x07\u011A\x02\x02\u0574\u0575\x07\u015D\x02" +
		"\x02\u0575\u0576\x07\u0188\x02\x02\u0576\u0577\x05\u011C\x8F\x02\u0577" +
		"\u0578\x07\u0188\x02\x02\u0578\u057D\x05\u011E\x90\x02\u0579\u057A\x07" +
		"\u018C\x02\x02\u057A\u057C\x05\u011E\x90\x02\u057B\u0579\x03\x02\x02\x02" +
		"\u057C\u057F\x03\x02\x02\x02\u057D\u057B\x03\x02\x02\x02\u057D\u057E\x03" +
		"\x02\x02\x02\u057E\u0580\x03\x02\x02\x02\u057F\u057D\x03\x02\x02\x02\u0580" +
		"\u0581\x07\u0189\x02\x02\u0581\u0582\x07\u0189\x02\x02\u0582\u0583\x07" +
		"\xBE\x02\x02\u0583\u0584\x05\u0136\x9C\x02\u0584\u0585\x07\u0188\x02\x02" +
		"\u0585\u058A\x05\xAEX\x02\u0586\u0587\x07\u018C\x02\x02\u0587\u0589\x05" +
		"\xAEX\x02\u0588\u0586\x03\x02\x02\x02\u0589\u058C\x03\x02\x02\x02\u058A" +
		"\u0588\x03\x02\x02\x02\u058A\u058B\x03\x02\x02\x02\u058B\u058D\x03\x02" +
		"\x02\x02\u058C\u058A\x03\x02\x02\x02\u058D\u058E\x07\u0189\x02\x02\u058E" +
		"\u0595\x03\x02\x02\x02\u058F\u0590\x07\u016D\x02\x02\u0590\u0591\x07\u0188" +
		"\x02\x02\u0591\u0592\x05\u0104\x83\x02\u0592\u0593\x07\u0189\x02\x02\u0593" +
		"\u0595\x03\x02\x02\x02\u0594\u0550\x03\x02\x02\x02\u0594\u055C\x03\x02" +
		"\x02\x02\u0594\u056D\x03\x02\x02\x02\u0594\u0573\x03\x02\x02\x02\u0594" +
		"\u058F\x03\x02\x02\x02\u0595\xB9\x03\x02\x02\x02\u0596\u0597\x07\u0100" +
		"\x02\x02\u0597\u0598\x07\u015B\x02\x02\u0598\u0599\x07\xBE\x02\x02\u0599" +
		"\u059A\x07\u0132\x02\x02\u059A\u059B\x05\xBC_\x02\u059B\xBB\x03\x02\x02" +
		"\x02\u059C\u059D\x05\u0104\x83\x02\u059D\xBD\x03\x02\x02\x02\u059E\u059F" +
		"\x07\u0188\x02\x02\u059F\u05A0\x05\x98M\x02\u05A0\u05A1\x07\u0189\x02" +
		"\x02\u05A1\u05A2\x05\u0136\x9C\x02\u05A2\xBF\x03\x02\x02\x02\u05A3\u05A4" +
		"\x07\u015D\x02\x02\u05A4\u05A5\x07\u0188\x02\x02\u05A5\u05A6\x05\xC2b" +
		"\x02\u05A6\u05A7\x07\u0189\x02\x02\u05A7\xC1\x03\x02\x02\x02\u05A8\u05A9" +
		"\x05\xC4c\x02\u05A9\u05AA\x07\u0188\x02\x02\u05AA\u05AF\x05\xC6d\x02\u05AB" +
		"\u05AC\x07\u018C\x02\x02\u05AC\u05AE\x05\xC6d\x02\u05AD\u05AB\x03\x02" +
		"\x02\x02\u05AE\u05B1\x03\x02\x02\x02\u05AF\u05AD\x03\x02\x02\x02\u05AF" +
		"\u05B0\x03\x02\x02\x02\u05B0\u05B2\x03\x02\x02\x02\u05B1\u05AF\x03\x02" +
		"\x02\x02\u05B2\u05B3\x07\u0189\x02\x02\u05B3\xC3\x03\x02\x02\x02\u05B4" +
		"\u05B5\t\x18\x02\x02\u05B5\xC5\x03\x02\x02\x02\u05B6\u05B7\x07\u015D\x02" +
		"\x02\u05B7\u05C6\x05\xDCo\x02\u05B8\u05C6\x05\xCAf\x02\u05B9\u05C6\x05" +
		"\u0128\x95\x02\u05BA\u05BB\x07\x1B\x02\x02\u05BB\u05BC\x07\u019C\x02\x02" +
		"\u05BC\u05BD\x07\u015D\x02\x02\u05BD\u05C6\x05\xDCo\x02\u05BE\u05BF\x07" +
		"\x9B\x02\x02\u05BF\u05C0\x07\u019C\x02\x02\u05C0\u05C6\x05\xCAf\x02\u05C1" +
		"\u05C2\x05\xC8e\x02\u05C2\u05C3\x07\u019C\x02\x02\u05C3\u05C4\x05\u0128" +
		"\x95\x02\u05C4\u05C6\x03\x02\x02\x02\u05C5\u05B6\x03\x02\x02\x02\u05C5" +
		"\u05B8\x03\x02\x02\x02\u05C5\u05B9\x03\x02\x02\x02\u05C5\u05BA\x03\x02" +
		"\x02\x02\u05C5\u05BE\x03\x02\x02\x02\u05C5\u05C1\x03\x02\x02\x02\u05C6" +
		"\xC7\x03\x02\x02\x02\u05C7\u05C8\t\x19\x02\x02\u05C8\xC9\x03\x02\x02\x02" +
		"\u05C9\u05CA\x07\"\x02\x02\u05CA\u05CB\x07\u0188\x02\x02\u05CB\u05CC\x05" +
		"\u0154\xAB\x02\u05CC\u05CD\x07\u0189\x02\x02\u05CD\xCB\x03\x02\x02\x02" +
		"\u05CE\u05CF\x07\u0134\x02\x02\u05CF\u05DD\x05\u0106\x84\x02\u05D0\u05D1" +
		"\x07\u0171\x02\x02\u05D1\u05D2\x07\u0188\x02\x02\u05D2\u05D7\x05\u0154" +
		"\xAB\x02\u05D3\u05D4\x07\u018C\x02\x02\u05D4\u05D6\x05\u0154\xAB\x02\u05D5" +
		"\u05D3\x03\x02\x02\x02\u05D6\u05D9\x03\x02\x02\x02\u05D7\u05D5";
	private static readonly _serializedATNSegment3: string =
		"\x03\x02\x02\x02\u05D7\u05D8\x03\x02\x02\x02\u05D8\u05DA\x03\x02\x02\x02" +
		"\u05D9\u05D7\x03\x02\x02\x02\u05DA\u05DB\x07\u0189\x02\x02\u05DB\u05DD" +
		"\x03\x02\x02\x02\u05DC\u05CE\x03\x02\x02\x02\u05DC\u05D0\x03\x02\x02\x02" +
		"\u05DD\xCD\x03\x02\x02\x02\u05DE\u05DF\x07\u0177\x02\x02\u05DF\u05E0\x05" +
		"\u0106\x84\x02\u05E0\xCF\x03\x02\x02\x02\u05E1\u05E2\x07\u0106\x02\x02" +
		"\u05E2\u05E3\x07\xCA\x02\x02\u05E3\u05E8\x05\xD2j\x02\u05E4\u05E5\x07" +
		"\u018C\x02\x02\u05E5\u05E7\x05\xD2j\x02\u05E6\u05E4\x03\x02\x02\x02\u05E7" +
		"\u05EA\x03\x02\x02\x02\u05E8\u05E6\x03\x02\x02\x02\u05E8\u05E9\x03\x02" +
		"\x02\x02\u05E9\xD1\x03\x02\x02\x02\u05EA\u05E8\x03\x02\x02\x02\u05EB\u0613" +
		"\x05\u0104\x83\x02\u05EC\u0613\x05\xD8m\x02\u05ED\u05EE\x07\u0188\x02" +
		"\x02\u05EE\u0613\x07\u0189\x02\x02\u05EF\u05F0\x07\u0188\x02\x02\u05F0" +
		"\u05F5\x05\u0104\x83\x02\u05F1\u05F2\x07\u018C\x02\x02\u05F2\u05F4\x05" +
		"\u0104\x83\x02\u05F3\u05F1\x03\x02\x02\x02\u05F4\u05F7\x03\x02\x02\x02" +
		"\u05F5\u05F3\x03\x02\x02\x02\u05F5\u05F6\x03\x02\x02\x02\u05F6\u05F8\x03" +
		"\x02\x02\x02\u05F7\u05F5\x03\x02\x02\x02\u05F8\u05F9\x07\u0189\x02\x02" +
		"\u05F9\u0613\x03\x02\x02\x02\u05FA\u05FB\x05\xD6l\x02\u05FB\u05FC\x07" +
		"\u0188\x02\x02\u05FC\u0601\x05\u0104\x83\x02\u05FD\u05FE\x07\u018C\x02" +
		"\x02\u05FE\u0600\x05\u0104\x83\x02\u05FF\u05FD\x03\x02\x02\x02\u0600\u0603" +
		"\x03\x02\x02\x02\u0601\u05FF\x03\x02\x02\x02\u0601\u0602\x03\x02\x02\x02" +
		"\u0602\u0604\x03\x02\x02\x02\u0603\u0601\x03\x02\x02\x02\u0604\u0605\x07" +
		"\u0189\x02\x02\u0605\u0613\x03\x02\x02\x02\u0606\u0607\x05\xD4k\x02\u0607" +
		"\u0608\x07\u0188\x02\x02\u0608\u060D\x05\xD2j\x02\u0609\u060A\x07\u018C" +
		"\x02\x02\u060A\u060C\x05\xD2j\x02\u060B\u0609\x03\x02\x02\x02\u060C\u060F" +
		"\x03\x02\x02\x02\u060D\u060B\x03\x02\x02\x02\u060D\u060E\x03\x02\x02\x02" +
		"\u060E\u0610\x03\x02\x02\x02\u060F\u060D\x03\x02\x02\x02\u0610\u0611\x07" +
		"\u0189\x02\x02\u0611\u0613\x03\x02\x02\x02\u0612\u05EB\x03\x02\x02\x02" +
		"\u0612\u05EC\x03\x02\x02\x02\u0612\u05ED\x03\x02\x02\x02\u0612\u05EF\x03" +
		"\x02\x02\x02\u0612\u05FA\x03\x02\x02\x02\u0612\u0606\x03\x02\x02\x02\u0613" +
		"\xD3\x03\x02\x02\x02\u0614\u0615\x07\u0107\x02\x02\u0615\u0616\x07\x8D" +
		"\x02\x02\u0616\xD5\x03\x02\x02\x02\u0617\u0618\t\x1A\x02\x02\u0618\xD7" +
		"\x03\x02\x02\x02\u0619\u061A\x05\xDAn\x02\u061A\u061B\x07\u0188\x02\x02" +
		"\u061B\u061C\x05\xDCo\x02\u061C\u061D\x07\u018C\x02\x02\u061D\u061E\x05" +
		"\u0128\x95\x02\u061E\u061F\x07\u0189\x02\x02\u061F\xD9\x03\x02\x02\x02" +
		"\u0620\u0621\t\x1B\x02\x02\u0621\xDB\x03\x02\x02\x02\u0622\u0623\x05\u0154" +
		"\xAB\x02\u0623\xDD\x03\x02\x02\x02\u0624\u0625\x07\u0109\x02\x02\u0625" +
		"\u0626\x05\u0106\x84\x02\u0626\xDF\x03\x02\x02\x02\u0627\u0628\x07\u0178" +
		"\x02\x02\u0628\u062D\x05\xE2r\x02\u0629\u062A\x07\u018C\x02\x02\u062A" +
		"\u062C\x05\xE2r\x02\u062B\u0629\x03\x02\x02\x02\u062C\u062F\x03\x02\x02" +
		"\x02\u062D\u062B\x03\x02\x02\x02\u062D\u062E\x03\x02\x02\x02\u062E\xE1" +
		"\x03\x02\x02\x02\u062F\u062D\x03\x02\x02\x02\u0630\u0631\x05\u0138\x9D" +
		"\x02\u0631\u0632\x07\xBE\x02\x02\u0632\u0633\x05\xE4s\x02\u0633\xE3\x03" +
		"\x02\x02\x02\u0634\u0636\x05\u0138\x9D\x02\u0635\u0634\x03\x02\x02\x02" +
		"\u0635\u0636\x03\x02\x02\x02\u0636\u0637\x03\x02\x02\x02\u0637\u0639\x07" +
		"\u0188\x02\x02\u0638\u063A\x05\xEEx\x02\u0639\u0638\x03\x02\x02\x02\u0639" +
		"\u063A\x03\x02\x02\x02\u063A\u063C\x03\x02\x02\x02\u063B\u063D\x05\xE8" +
		"u\x02\u063C\u063B\x03\x02\x02\x02\u063C\u063D\x03\x02\x02\x02\u063D\u063F" +
		"\x03\x02\x02\x02\u063E\u0640\x05\xFE\x80\x02\u063F\u063E\x03\x02\x02\x02" +
		"\u063F\u0640\x03\x02\x02\x02\u0640\u0641\x03\x02\x02\x02\u0641\u0642\x07" +
		"\u0189\x02\x02\u0642\xE5\x03\x02\x02\x02\u0643\u0644\x07\u0121\x02\x02" +
		"\u0644\u0646\x07\u0188\x02\x02\u0645\u0647\x05\xEEx\x02\u0646\u0645\x03" +
		"\x02\x02\x02\u0646\u0647\x03\x02\x02\x02\u0647\u0649\x03\x02\x02\x02\u0648" +
		"\u064A\x05\xE8u\x02\u0649\u0648\x03\x02\x02\x02\u0649\u064A\x03\x02\x02" +
		"\x02\u064A\u064C\x03\x02\x02\x02\u064B\u064D\x05\xF2z\x02\u064C\u064B" +
		"\x03\x02\x02\x02\u064C\u064D\x03\x02\x02\x02\u064D\u064F\x03\x02\x02\x02" +
		"\u064E\u0650\x05\xF8}\x02\u064F\u064E\x03\x02\x02\x02\u064F\u0650\x03" +
		"\x02\x02\x02\u0650\u0652\x03\x02\x02\x02\u0651\u0653\x05\xFA~\x02\u0652" +
		"\u0651\x03\x02\x02\x02\u0652\u0653\x03\x02\x02\x02\u0653\u0655\x03\x02" +
		"\x02\x02\u0654\u0656\x05\xF4{\x02\u0655\u0654\x03\x02\x02\x02\u0655\u0656" +
		"\x03\x02\x02\x02\u0656\u0657\x03\x02\x02\x02\u0657\u0658\x05\xFC\x7F\x02" +
		"\u0658\u065D\x07\u0189\x02\x02\u0659\u065B\x07\xBE\x02\x02\u065A\u0659" +
		"\x03\x02\x02\x02\u065A\u065B\x03\x02\x02\x02\u065B\u065C\x03\x02\x02\x02" +
		"\u065C\u065E\x05\u0140\xA1\x02\u065D\u065A\x03\x02\x02\x02\u065D\u065E" +
		"\x03\x02\x02\x02\u065E\xE7\x03\x02\x02\x02\u065F\u0660\x07\u0137\x02\x02" +
		"\u0660\u0661\x07\xCA\x02\x02\u0661\u0666\x05\xEAv\x02\u0662\u0663\x07" +
		"\u018C\x02\x02\u0663\u0665\x05\xEAv\x02\u0664\u0662\x03\x02\x02\x02\u0665" +
		"\u0668\x03\x02\x02\x02\u0666\u0664\x03\x02\x02\x02\u0666\u0667\x03\x02" +
		"\x02\x02\u0667\xE9\x03\x02\x02\x02\u0668\u0666\x03\x02\x02\x02\u0669\u066B" +
		"\x05\u0104\x83\x02\u066A\u066C\t\x1C\x02\x02\u066B\u066A\x03\x02\x02\x02" +
		"\u066B\u066C\x03\x02\x02\x02\u066C\u066F\x03\x02\x02\x02\u066D\u066E\x07" +
		"[\x02\x02\u066E\u0670\t\x1D\x02\x02\u066F\u066D\x03\x02\x02\x02\u066F" +
		"\u0670\x03\x02\x02\x02\u0670\xEB\x03\x02\x02\x02\u0671\u0674\x07\u011E" +
		"\x02\x02\u0672\u0675\x07\xB7\x02\x02\u0673\u0675\x05\u0104\x83\x02\u0674" +
		"\u0672\x03\x02\x02\x02\u0674\u0673\x03\x02\x02\x02\u0675\xED\x03\x02\x02" +
		"\x02\u0676\u0677\x07\u013C\x02\x02\u0677\u0678\x07\xCA\x02\x02\u0678\u067D" +
		"\x05\u0104\x83\x02\u0679\u067A\x07\u018C\x02\x02\u067A\u067C\x05\u0104" +
		"\x83\x02\u067B\u0679\x03\x02\x02\x02\u067C\u067F\x03\x02\x02\x02\u067D" +
		"\u067B\x03\x02\x02\x02\u067D\u067E\x03\x02\x02\x02\u067E\xEF\x03\x02\x02" +
		"\x02\u067F\u067D\x03\x02\x02\x02\u0680\u0691\x07\u0193\x02\x02\u0681\u0691" +
		"\x07\u0196\x02\x02\u0682\u0691\x07\u019B\x02\x02\u0683\u0684\x07\u018A" +
		"\x02\x02\u0684\u0685\x07\u019E\x02\x02\u0685\u0686\x07\u018C\x02\x02\u0686" +
		"\u0687\x07\u019E\x02\x02\u0687\u0691\x07\u018B\x02\x02\u0688\u0689\x07" +
		"\u018A\x02\x02\u0689\u068A\x07\u019E\x02\x02\u068A\u068B\x07\u018C\x02" +
		"\x02\u068B\u0691\x07\u018B\x02\x02\u068C\u068D\x07\u018A\x02\x02\u068D" +
		"\u068E\x07\u018C\x02\x02\u068E\u068F\x07\u019E\x02\x02\u068F\u0691\x07" +
		"\u018B\x02\x02\u0690\u0680\x03\x02\x02\x02\u0690\u0681\x03\x02\x02\x02" +
		"\u0690\u0682\x03\x02\x02\x02\u0690\u0683\x03\x02\x02\x02\u0690\u0688\x03" +
		"\x02\x02\x02\u0690\u068C\x03\x02\x02\x02\u0691\xF1\x03\x02\x02\x02\u0692" +
		"\u0693\x07\u0122\x02\x02\u0693\u0698\x05\xAEX\x02\u0694\u0695\x07\u018C" +
		"\x02\x02\u0695\u0697\x05\xAEX\x02\u0696\u0694\x03\x02\x02\x02\u0697\u069A" +
		"\x03\x02\x02\x02\u0698\u0696\x03\x02\x02\x02\u0698\u0699\x03\x02\x02\x02" +
		"\u0699\xF3\x03\x02\x02\x02\u069A\u0698\x03\x02\x02\x02\u069B\u069C\x07" +
		"\u013D\x02\x02\u069C\u069E\x07\u0188\x02\x02\u069D\u069F\x05\xF6|\x02" +
		"\u069E\u069D\x03\x02\x02\x02\u069F\u06A0\x03\x02\x02\x02\u06A0\u069E\x03" +
		"\x02\x02\x02\u06A0\u06A1\x03\x02\x02\x02\u06A1\u06A2\x03\x02\x02\x02\u06A2" +
		"\u06A4\x07\u0189\x02\x02\u06A3\u06A5\x05\u0102\x82\x02\u06A4\u06A3\x03" +
		"\x02\x02\x02\u06A4\u06A5\x03\x02\x02\x02\u06A5\xF5\x03\x02\x02\x02\u06A6" +
		"\u06A8\x05\u0144\xA3\x02\u06A7\u06A9\x05\xF0y\x02\u06A8\u06A7\x03\x02" +
		"\x02\x02\u06A8\u06A9\x03\x02\x02\x02\u06A9\xF7\x03\x02\x02\x02\u06AA\u06AB" +
		"\x07\xB7\x02\x02\u06AB\u06AC\x07\u014D\x02\x02\u06AC\u06AD\x07\u013E\x02" +
		"\x02\u06AD\u06B3\x07\u0120\x02\x02\u06AE\u06AF\x07\u0135\x02\x02\u06AF" +
		"\u06B0\x07\u014C\x02\x02\u06B0\u06B1\x07\u013E\x02\x02\u06B1\u06B3\x07" +
		"\u0120\x02\x02\u06B2\u06AA\x03\x02\x02\x02\u06B2\u06AE\x03\x02\x02\x02" +
		"\u06B3\xF9\x03\x02\x02\x02\u06B4\u06B5\x07\t\x02\x02\u06B5\u06B6\x07\u0120" +
		"\x02\x02\u06B6\u06B7\x07\u0153\x02\x02\u06B7\u06B8\x07f\x02\x02\u06B8" +
		"\u06B9\x07M\x02\x02\u06B9\u06CD\x07\u014C\x02\x02\u06BA\u06BB\x07\t\x02" +
		"\x02\u06BB\u06BC\x07\u0120\x02\x02\u06BC\u06BD\x07\u0153\x02\x02\u06BD" +
		"\u06BE\x07\u0166\x02\x02\u06BE\u06BF\x07\u012C\x02\x02\u06BF\u06CD\x07" +
		"\u014C\x02\x02\u06C0\u06C1\x07\t\x02\x02\u06C1\u06C2\x07\u0120\x02\x02" +
		"\u06C2\u06C3\x07\u0153\x02\x02\u06C3\u06C4\x07\u0166\x02\x02\u06C4\u06C5" +
		"\x07M\x02\x02\u06C5\u06CD\x05\u0144\xA3\x02\u06C6\u06C7\x07\t\x02\x02" +
		"\u06C7\u06C8\x07\u0120\x02\x02\u06C8\u06C9\x07\u0153\x02\x02\u06C9\u06CA" +
		"\x07\u0166\x02\x02\u06CA\u06CB\x071\x02\x02\u06CB\u06CD\x05\u0144\xA3" +
		"\x02\u06CC\u06B4\x03\x02\x02\x02\u06CC\u06BA\x03\x02\x02\x02\u06CC\u06C0" +
		"\x03\x02\x02\x02\u06CC\u06C6\x03\x02\x02\x02\u06CD\xFB\x03\x02\x02\x02" +
		"\u06CE\u06CF\x07\xED\x02\x02\u06CF\u06D4\x05\xAEX\x02\u06D0\u06D1\x07" +
		"\u018C\x02\x02\u06D1\u06D3\x05\xAEX\x02\u06D2\u06D0\x03\x02\x02\x02\u06D3" +
		"\u06D6\x03\x02\x02\x02\u06D4\u06D2\x03\x02\x02\x02\u06D4\u06D5\x03\x02" +
		"\x02\x02\u06D5\xFD\x03\x02\x02\x02\u06D6\u06D4\x03\x02\x02\x02\u06D7\u06D8" +
		"\x07\u0144\x02\x02\u06D8\u06D9\x07\xC3\x02\x02\u06D9\u06DA\x05\u0128\x95" +
		"\x02\u06DA\u06DB\x05\u0100\x81\x02\u06DB\u06E1\x03\x02\x02\x02\u06DC\u06DD" +
		"\x07\u014D\x02\x02\u06DD\u06DE\x07\xC3\x02\x02\u06DE\u06DF\x07\u019E\x02" +
		"\x02\u06DF\u06E1\x05\u0100\x81\x02\u06E0\u06D7\x03\x02\x02\x02\u06E0\u06DC" +
		"\x03\x02\x02\x02\u06E1\xFF\x03\x02\x02\x02\u06E2\u06E3\x07j\x02\x02\u06E3" +
		"\u06E4\x07\xBA\x02\x02\u06E4\u06E5\x07\xE3\x02\x02\u06E5\u06E6\x07\u014C" +
		"\x02\x02\u06E6\u0101\x03\x02\x02\x02\u06E7\u06E8\x07\u017A\x02\x02\u06E8" +
		"\u06E9\x05\u0128\x95\x02\u06E9\u0103\x03\x02\x02\x02\u06EA\u06EB\x05\u0106" +
		"\x84\x02\u06EB\u0105\x03\x02\x02\x02\u06EC\u06ED\b\x84\x01\x02\u06ED\u06EE" +
		"\x07\u012F\x02\x02\u06EE\u06F9\x05\u0106\x84\b\u06EF\u06F0\x07\xFA\x02" +
		"\x02\u06F0\u06F1\x07\u0188\x02\x02\u06F1\u06F2\x05\xA0Q\x02\u06F2\u06F3" +
		"\x07\u0189\x02\x02\u06F3\u06F9\x03\x02\x02\x02\u06F4\u06F6\x05\u010C\x87" +
		"\x02\u06F5\u06F7\x05\u0108\x85\x02\u06F6\u06F5\x03\x02\x02\x02\u06F6\u06F7" +
		"\x03\x02\x02\x02\u06F7\u06F9\x03\x02\x02\x02\u06F8\u06EC\x03\x02\x02\x02" +
		"\u06F8\u06EF\x03\x02\x02\x02\u06F8\u06F4\x03\x02\x02\x02\u06F9\u0708\x03" +
		"\x02\x02\x02\u06FA\u06FB\f\x05\x02\x02\u06FB\u06FC\x07\xBA\x02\x02\u06FC" +
		"\u0707\x05\u0106\x84\x06\u06FD\u06FE\f\x04\x02\x02\u06FE\u06FF\x07\u0136" +
		"\x02\x02\u06FF\u0707\x05\u0106\x84\x05\u0700\u0701\f\x03\x02\x02\u0701" +
		"\u0703\x07\u0116\x02\x02\u0702\u0704\x07\u012F\x02\x02\u0703\u0702\x03" +
		"\x02\x02\x02\u0703\u0704\x03\x02\x02\x02\u0704\u0705\x03\x02\x02\x02\u0705" +
		"\u0707\t\x1E\x02\x02\u0706\u06FA\x03\x02\x02\x02\u0706\u06FD\x03\x02\x02" +
		"\x02\u0706\u0700\x03\x02\x02\x02\u0707\u070A\x03\x02\x02\x02\u0708\u0706" +
		"\x03\x02\x02\x02\u0708\u0709\x03\x02\x02\x02\u0709\u0107\x03\x02\x02\x02" +
		"\u070A\u0708\x03\x02\x02\x02\u070B\u070D\x07\u012F\x02\x02\u070C\u070B" +
		"\x03\x02\x02\x02\u070C\u070D\x03\x02\x02\x02\u070D\u070E\x03\x02\x02\x02" +
		"\u070E\u0710\x07\xC3\x02\x02\u070F\u0711\t\x1F\x02\x02\u0710\u070F\x03" +
		"\x02\x02\x02\u0710\u0711\x03\x02\x02\x02\u0711\u0712\x03\x02\x02\x02\u0712" +
		"\u0713\x05\u010C\x87\x02\u0713\u0714\x07\xBA\x02\x02\u0714\u0715\x05\u010C" +
		"\x87\x02\u0715\u074F\x03\x02\x02\x02\u0716\u0718\x07\u012F\x02\x02\u0717" +
		"\u0716\x03\x02\x02\x02\u0717\u0718\x03\x02\x02\x02\u0718\u0719\x03\x02" +
		"\x02\x02\u0719\u071A\x07\u010C\x02\x02\u071A\u071B\x07\u0188\x02\x02\u071B" +
		"\u0720\x05\u0104\x83\x02\u071C\u071D\x07\u018C\x02\x02\u071D\u071F\x05" +
		"\u0104\x83\x02\u071E\u071C\x03\x02\x02\x02\u071F\u0722\x03\x02\x02\x02" +
		"\u0720\u071E\x03\x02\x02\x02\u0720\u0721\x03\x02\x02\x02\u0721\u0723\x03" +
		"\x02\x02\x02\u0722\u0720\x03\x02\x02\x02\u0723\u0724\x07\u0189\x02\x02" +
		"\u0724\u074F\x03\x02\x02\x02\u0725\u0727\x07\u012F\x02\x02\u0726\u0725" +
		"\x03\x02\x02\x02\u0726\u0727\x03\x02\x02\x02\u0727\u0728\x03\x02\x02\x02" +
		"\u0728\u0729\x07\u010C\x02\x02\u0729\u072A\x07\u0188\x02\x02\u072A\u072B" +
		"\x05\xA0Q\x02\u072B\u072C\x07\u0189\x02\x02\u072C\u074F\x03\x02\x02\x02" +
		"\u072D\u072E\x07\xFA\x02\x02\u072E\u072F\x07\u0188\x02\x02\u072F\u0730" +
		"\x05\xA0Q\x02\u0730\u0731\x07\u0189\x02\x02\u0731\u074F\x03\x02\x02\x02" +
		"\u0732\u0734\x07\u012F\x02\x02\u0733\u0732\x03\x02\x02\x02\u0733\u0734" +
		"\x03\x02\x02\x02\u0734\u0735\x03\x02\x02\x02\u0735\u0736\x07\u0149\x02" +
		"\x02\u0736\u074F\x05\u010C\x87\x02\u0737\u074F\x05\u010A\x86\x02\u0738" +
		"\u073A\x07\u0116\x02\x02\u0739\u073B\x07\u012F\x02\x02\u073A\u0739\x03" +
		"\x02\x02\x02\u073A\u073B\x03\x02\x02\x02\u073B\u073C\x03\x02\x02\x02\u073C" +
		"\u074F\t\x1E\x02\x02\u073D\u073F\x07\u0116\x02\x02\u073E\u0740\x07\u012F" +
		"\x02\x02\u073F\u073E\x03\x02\x02\x02\u073F\u0740\x03\x02\x02\x02\u0740" +
		"\u0741\x03\x02\x02\x02\u0741\u0742\x07\xF0\x02\x02\u0742\u0743\x07\u0101" +
		"\x02\x02\u0743\u074F\x05\u010C\x87\x02\u0744\u0746\x07\u012F\x02\x02\u0745" +
		"\u0744\x03\x02\x02\x02\u0745\u0746\x03\x02\x02\x02\u0746\u0747\x03\x02" +
		"\x02\x02\u0747\u0748\x07\u0152\x02\x02\u0748\u0749\x07\u0166\x02\x02\u0749" +
		"\u074C\x05\u010C\x87\x02\u074A\u074B\x07\xF7\x02\x02\u074B\u074D\x05\u0172" +
		"\xBA\x02\u074C\u074A\x03\x02\x02\x02\u074C\u074D\x03\x02\x02\x02\u074D" +
		"\u074F\x03\x02\x02\x02\u074E\u070C\x03\x02\x02\x02\u074E\u0717\x03\x02" +
		"\x02\x02\u074E\u0726\x03\x02\x02\x02\u074E\u072D\x03\x02\x02\x02\u074E" +
		"\u0733\x03\x02\x02\x02\u074E\u0737\x03\x02\x02\x02\u074E\u0738\x03\x02" +
		"\x02\x02\u074E\u073D\x03\x02\x02\x02\u074E\u0745\x03\x02\x02\x02\u074F" +
		"\u0109\x03\x02\x02\x02\u0750\u0752\x07\u012F\x02\x02\u0751\u0750\x03\x02" +
		"\x02\x02\u0751\u0752\x03\x02\x02\x02\u0752\u0753\x03\x02\x02\x02\u0753" +
		"\u0754\x07\u011D\x02\x02\u0754\u0762\t \x02\x02\u0755\u0756\x07\u0188" +
		"\x02\x02\u0756\u0763\x07\u0189\x02\x02\u0757\u0758\x07\u0188\x02\x02\u0758" +
		"\u075D\x05\u0104\x83\x02\u0759\u075A\x07\u018C\x02\x02\u075A\u075C\x05" +
		"\u0104\x83\x02\u075B\u0759\x03\x02\x02\x02\u075C\u075F\x03\x02\x02\x02" +
		"\u075D\u075B\x03\x02\x02\x02\u075D\u075E\x03\x02\x02\x02\u075E\u0760\x03" +
		"\x02\x02\x02\u075F\u075D\x03\x02\x02\x02\u0760\u0761\x07\u0189\x02\x02" +
		"\u0761\u0763\x03\x02\x02\x02\u0762\u0755\x03\x02\x02\x02\u0762\u0757\x03" +
		"\x02\x02\x02\u0763\u076E\x03\x02\x02\x02\u0764\u0766\x07\u012F\x02\x02" +
		"\u0765\u0764\x03\x02\x02\x02\u0765\u0766\x03\x02\x02\x02\u0766\u0767\x03" +
		"\x02\x02\x02\u0767\u0768\x07\u011D\x02\x02\u0768\u076B\x05\u010C\x87\x02" +
		"\u0769\u076A\x07\xF7\x02\x02\u076A\u076C\x05\u0172\xBA\x02\u076B\u0769" +
		"\x03\x02\x02\x02\u076B\u076C\x03\x02\x02\x02\u076C\u076E\x03\x02\x02\x02" +
		"\u076D\u0751\x03\x02\x02\x02\u076D\u0765\x03\x02\x02\x02\u076E\u010B\x03" +
		"\x02\x02\x02\u076F\u0770\b\x87\x01\x02\u0770\u0774\x05\u010E\x88\x02\u0771" +
		"\u0772\t!\x02\x02\u0772\u0774\x05\u010C\x87\n\u0773\u076F\x03\x02\x02" +
		"\x02\u0773\u0771\x03\x02\x02\x02\u0774\u078C\x03\x02\x02\x02\u0775\u0776" +
		"\f\t\x02\x02\u0776\u0777\t\"\x02\x02\u0777\u078B\x05\u010C\x87\n\u0778" +
		"\u0779\f\b\x02\x02\u0779\u077A\t#\x02\x02\u077A\u078B\x05\u010C\x87\t" +
		"\u077B\u077C\f\x07\x02\x02\u077C\u077D\x07\u0183\x02\x02\u077D\u078B\x05" +
		"\u010C\x87\b\u077E\u077F\f\x06\x02\x02\u077F\u0780\x07\u0184\x02\x02\u0780" +
		"\u078B\x05\u010C\x87\x07\u0781\u0782\f\x05\x02\x02\u0782\u0783\x07\u0182" +
		"\x02\x02\u0783\u078B\x05\u010C\x87\x06\u0784\u0785\f\x04\x02\x02\u0785" +
		"\u0786\x05\u0166\xB4\x02\u0786\u0787\x05\u010C\x87\x05\u0787\u078B\x03" +
		"\x02\x02\x02\u0788\u0789\f\x03\x02\x02\u0789\u078B\x07\u01A2\x02\x02\u078A" +
		"\u0775\x03\x02\x02\x02\u078A\u0778\x03\x02\x02\x02\u078A\u077B\x03\x02" +
		"\x02\x02\u078A\u077E\x03\x02\x02\x02\u078A\u0781\x03\x02\x02\x02\u078A" +
		"\u0784\x03\x02\x02\x02\u078A\u0788\x03\x02\x02\x02\u078B\u078E\x03\x02" +
		"\x02\x02\u078C\u078A\x03\x02\x02\x02\u078C\u078D\x03\x02\x02\x02\u078D" +
		"\u010D\x03\x02\x02\x02\u078E\u078C\x03\x02\x02\x02\u078F\u0790\b\x88\x01" +
		"\x02\u0790\u0792\x07\xCE\x02\x02\u0791\u0793\x05\u0148\xA5\x02\u0792\u0791" +
		"\x03\x02\x02\x02\u0793\u0794\x03\x02\x02\x02\u0794\u0792\x03\x02\x02\x02" +
		"\u0794\u0795\x03\x02\x02\x02\u0795\u0798\x03\x02\x02\x02\u0796\u0797\x07" +
		"\xF4\x02\x02\u0797\u0799\x05\u0104\x83\x02\u0798\u0796\x03\x02\x02\x02" +
		"\u0798\u0799\x03\x02\x02\x02\u0799\u079A\x03\x02\x02\x02\u079A\u079B\x07" +
		"\xF5\x02\x02\u079B\u07FD\x03\x02\x02\x02\u079C\u079D\x07\xCE\x02\x02\u079D" +
		"\u079F\x05\u0104\x83\x02\u079E\u07A0\x05\u0148\xA5\x02\u079F\u079E\x03" +
		"\x02\x02\x02\u07A0\u07A1\x03\x02\x02\x02\u07A1\u079F\x03\x02\x02\x02\u07A1" +
		"\u07A2\x03\x02\x02\x02\u07A2\u07A5\x03\x02\x02\x02\u07A3\u07A4\x07\xF4" +
		"\x02\x02\u07A4\u07A6\x05\u0104\x83\x02\u07A5\u07A3\x03\x02\x02\x02\u07A5" +
		"\u07A6\x03\x02\x02\x02\u07A6\u07A7\x03\x02\x02\x02\u07A7\u07A8\x07\xF5" +
		"\x02\x02\u07A8\u07FD\x03\x02\x02\x02\u07A9\u07AA\x07\xCF\x02\x02\u07AA" +
		"\u07AB\x07\u0188\x02\x02\u07AB\u07AC\x05\u0104\x83\x02\u07AC\u07AD\x07" +
		"\xBE\x02\x02\u07AD\u07AE\x05:\x1E\x02\u07AE\u07AF\x07\u0189\x02\x02\u07AF" +
		"\u07FD\x03\x02\x02\x02\u07B0\u07B1\x071\x02\x02\u07B1\u07B2\x07\u0188" +
		"\x02\x02\u07B2\u07B5\x05\u0104\x83\x02\u07B3\u07B4\x07@\x02\x02\u07B4" +
		"\u07B6\x07[\x02\x02\u07B5\u07B3\x03\x02\x02\x02\u07B5\u07B6\x03\x02\x02" +
		"\x02\u07B6\u07B7\x03\x02\x02\x02\u07B7\u07B8\x07\u0189\x02\x02\u07B8\u07FD" +
		"\x03\x02\x02\x02\u07B9\u07BA\x07M\x02\x02\u07BA\u07BB\x07\u0188\x02\x02" +
		"\u07BB\u07BE\x05\u0104\x83\x02\u07BC\u07BD\x07@\x02\x02\u07BD\u07BF\x07" +
		"[\x02\x02\u07BE\u07BC\x03\x02\x02\x02\u07BE\u07BF\x03\x02\x02\x02\u07BF" +
		"\u07C0\x03\x02\x02\x02\u07C0\u07C1\x07\u0189\x02\x02\u07C1\u07FD\x03\x02" +
		"\x02\x02\u07C2\u07C3\x07\u0141\x02\x02\u07C3\u07C4\x07\u0188\x02\x02\u07C4" +
		"\u07C5\x05\u010C\x87\x02\u07C5\u07C6\x07\u010C\x02\x02\u07C6\u07C7\x05" +
		"\u010C\x87\x02\u07C7\u07C8\x07\u0189\x02\x02\u07C8\u07FD\x03\x02\x02\x02" +
		"\u07C9\u07FD\x05\u016E\xB8\x02\u07CA\u07FD\x07\u0193\x02\x02\u07CB\u07CC" +
		"\x05\u0154\xAB\x02\u07CC\u07CD\x07\u0185\x02\x02\u07CD\u07CE\x07\u0193" +
		"\x02\x02\u07CE\u07FD\x03\x02\x02\x02\u07CF\u07D0\x07\u0188\x02\x02\u07D0" +
		"\u07D1\x05\xA0Q\x02\u07D1\u07D2\x07\u0189\x02\x02\u07D2\u07FD\x03\x02" +
		"\x02\x02\u07D3\u07D4\x05\u011C\x8F\x02\u07D4\u07E0\x07\u0188\x02\x02\u07D5" +
		"\u07D7\x05\u0178\xBD\x02\u07D6\u07D5\x03\x02\x02\x02\u07D6\u07D7\x03\x02" +
		"\x02\x02\u07D7\u07D8\x03\x02\x02\x02\u07D8\u07DD\x05\u011E\x90\x02\u07D9" +
		"\u07DA\x07\u018C\x02\x02\u07DA\u07DC\x05\u011E\x90\x02\u07DB\u07D9\x03" +
		"\x02\x02\x02\u07DC\u07DF\x03\x02\x02\x02\u07DD\u07DB\x03\x02\x02\x02\u07DD" +
		"\u07DE\x03\x02\x02\x02\u07DE\u07E1\x03\x02\x02\x02\u07DF\u07DD\x03\x02" +
		"\x02\x02\u07E0\u07D6\x03\x02\x02\x02\u07E0\u07E1\x03\x02\x02\x02\u07E1" +
		"\u07E2\x03\x02\x02\x02\u07E2\u07E3\x07\u0189\x02\x02\u07E3\u07FD\x03\x02" +
		"\x02\x02\u07E4\u07E5\x05\u011C\x8F\x02\u07E5\u07E6\x07\u0188\x02\x02\u07E6" +
		"\u07E7\x05\u011E\x90\x02\u07E7\u07E8\x07\u0166\x02\x02\u07E8\u07E9\x05" +
		"\u011E\x90\x02\u07E9\u07EA\x07\u0189\x02\x02\u07EA\u07FD\x03\x02\x02\x02" +
		"\u07EB\u07EC\x05\u011C\x8F\x02\u07EC\u07EE\x07\u0188\x02\x02\u07ED\u07EF" +
		"\x05\u0178\xBD\x02\u07EE\u07ED\x03\x02\x02\x02\u07EE\u07EF\x03\x02\x02" +
		"\x02\u07EF\u07F0\x03\x02\x02\x02\u07F0\u07F1\x05\u011E\x90\x02\u07F1\u07F3" +
		"\x07\u0189\x02\x02\u07F2\u07F4\x05\u0120\x91\x02\u07F3\u07F2\x03\x02\x02" +
		"\x02\u07F3\u07F4\x03\x02\x02\x02\u07F4\u07FD\x03\x02\x02\x02\u07F5\u07FD" +
		"\x05\u0140\xA1\x02\u07F6\u07FD\x05\u0122\x92\x02\u07F7\u07F8\x07\u0188" +
		"\x02\x02\u07F8\u07F9\x05\u0104\x83\x02\u07F9\u07FA\x07\u0189\x02\x02\u07FA" +
		"\u07FD\x03\x02\x02\x02\u07FB\u07FD\x05\u0110\x89\x02\u07FC\u078F\x03\x02" +
		"\x02\x02\u07FC\u079C\x03\x02\x02\x02\u07FC\u07A9\x03\x02\x02\x02\u07FC" +
		"\u07B0\x03\x02\x02\x02\u07FC\u07B9\x03\x02\x02\x02\u07FC\u07C2\x03\x02" +
		"\x02\x02\u07FC\u07C9\x03\x02\x02\x02\u07FC\u07CA\x03\x02\x02\x02\u07FC" +
		"\u07CB\x03\x02\x02\x02\u07FC\u07CF\x03\x02\x02\x02\u07FC\u07D3\x03\x02" +
		"\x02\x02\u07FC\u07E4\x03\x02\x02\x02\u07FC\u07EB\x03\x02\x02\x02\u07FC" +
		"\u07F5\x03\x02\x02\x02\u07FC\u07F6\x03\x02\x02\x02\u07FC\u07F7\x03\x02" +
		"\x02\x02\u07FC\u07FB\x03\x02\x02\x02\u07FD\u0805\x03\x02\x02\x02\u07FE" +
		"\u07FF\f\x07\x02\x02\u07FF\u0800\x07\u0186\x02\x02\u0800\u0801\x05\u010C" +
		"\x87\x02\u0801\u0802\x07\u0187\x02\x02\u0802\u0804\x03\x02\x02\x02\u0803" +
		"\u07FE\x03\x02\x02\x02\u0804\u0807\x03\x02\x02\x02\u0805\u0803\x03\x02" +
		"\x02\x02\u0805\u0806\x03\x02\x02\x02\u0806\u010F\x03\x02\x02\x02\u0807" +
		"\u0805\x03\x02\x02\x02\u0808\u080C\x05\u0112\x8A\x02\u0809\u080C\x05\u0114" +
		"\x8B\x02\u080A\u080C\x05\u0116\x8C\x02\u080B\u0808\x03\x02\x02\x02\u080B" +
		"\u0809\x03\x02\x02\x02\u080B\u080A\x03\x02\x02\x02\u080C\u0111\x03\x02" +
		"\x02\x02\u080D\u080E\x07\xBD\x02\x02\u080E\u080F\x07\u0186\x02\x02\u080F" +
		"\u0810\x05\u011A\x8E\x02\u0810\u0811\x07\u0187\x02\x02\u0811\u0113\x03" +
		"\x02\x02\x02\u0812\u0813\x07\u014C\x02\x02\u0813\u0814\x07\u0188\x02\x02" +
		"\u0814\u0819\x05\u0118\x8D\x02\u0815\u0816\x07\u018C\x02\x02\u0816\u0818" +
		"\x05\u0118\x8D\x02\u0817\u0815\x03\x02\x02\x02\u0818\u081B\x03\x02\x02" +
		"\x02\u0819\u0817\x03\x02\x02\x02\u0819\u081A\x03\x02\x02\x02\u081A\u081C" +
		"\x03\x02\x02\x02\u081B\u0819\x03\x02\x02\x02\u081C\u081D\x07\u0189\x02" +
		"\x02\u081D\u0115\x03\x02\x02\x02\u081E\u081F\x07Q\x02\x02\u081F\u0820" +
		"\x07\u0186\x02\x02\u0820\u0821\x05\u011A\x8E\x02\u0821\u0822\x07\u018C" +
		"\x02\x02\u0822\u0823\x05\u011A\x8E\x02\u0823\u0824\x07\u0187\x02\x02\u0824" +
		"\u0117\x03\x02\x02\x02\u0825\u0826\x05\u011A\x8E\x02\u0826\u0827\x07\xBE" +
		"\x02\x02\u0827\u0828\x05\u0140\xA1\x02\u0828\u0119\x03\x02\x02\x02\u0829" +
		"\u082C\x05\u0134\x9B\x02\u082A\u082C\x05\u0110\x89\x02\u082B\u0829\x03" +
		"\x02\x02\x02\u082B\u082A\x03\x02\x02\x02\u082C\u011B\x03\x02\x02\x02\u082D" +
		"\u0831\x05\u0180\xC1\x02\u082E\u0831\x05\u0184\xC3\x02\u082F\u0831\x05" +
		"\u0154\xAB\x02\u0830\u082D\x03\x02\x02\x02\u0830\u082E\x03\x02\x02\x02" +
		"\u0830\u082F\x03\x02\x02\x02\u0831\u011D\x03\x02\x02\x02\u0832\u0838\x05" +
		"\u017E\xC0\x02\u0833\u0838\x05\u017C\xBF\x02\u0834\u0838\x05\u017A\xBE" +
		"\x02\u0835\u0838\x05\u0104\x83\x02\u0836\u0838\x05\u0120\x91\x02\u0837" +
		"\u0832\x03\x02\x02\x02\u0837\u0833\x03\x02\x02\x02\u0837\u0834\x03\x02" +
		"\x02\x02\u0837\u0835\x03\x02\x02\x02\u0837\u0836\x03\x02\x02\x02\u0838" +
		"\u011F\x03\x02\x02\x02\u0839\u083A\x07.\x02\x02\u083A\u083B\x07\u0188" +
		"\x02\x02\u083B\u083C\x07\u0177\x02\x02\u083C\u083D\x05\u0106\x84\x02\u083D" +
		"\u083E\x07\u0189\x02\x02\u083E\u0121\x03\x02\x02\x02\u083F\u0840\x05\u0154" +
		"\xAB\x02\u0840\u0123\x03\x02\x02\x02\u0841\u0842\x05\u0140\xA1\x02\u0842" +
		"\u0125\x03\x02\x02\x02\u0843\u0846\x05\u0140\xA1\x02\u0844\u0846\x05\u0122" +
		"\x92\x02\u0845\u0843\x03\x02\x02\x02\u0845\u0844\x03\x02\x02\x02\u0846" +
		"\u0127\x03\x02\x02\x02\u0847\u084A\x07\u0114\x02\x02\u0848\u084B\x05\u012A" +
		"\x96\x02\u0849\u084B\x05\u012E\x98\x02\u084A\u0848\x03\x02\x02\x02\u084A" +
		"\u0849\x03\x02\x02\x02\u084A\u084B\x03\x02\x02\x02\u084B\u0129\x03\x02" +
		"\x02\x02\u084C\u084E\x05\u012C\x97\x02\u084D\u084F\x05\u0130\x99\x02\u084E" +
		"\u084D\x03\x02\x02\x02\u084E\u084F\x03\x02\x02\x02\u084F\u012B\x03\x02" +
		"\x02\x02\u0850\u0851\x05\u0132\x9A\x02\u0851\u0852\x05\u017C\xBF\x02\u0852" +
		"\u0854\x03\x02\x02\x02\u0853\u0850\x03\x02\x02\x02\u0854\u0855\x03\x02" +
		"\x02\x02\u0855\u0853\x03\x02\x02\x02\u0855\u0856\x03\x02\x02\x02\u0856" +
		"\u012D\x03\x02\x02\x02\u0857\u085A\x05\u0130\x99\x02\u0858\u085B\x05\u012C" +
		"\x97\x02\u0859\u085B\x05\u0130\x99\x02\u085A\u0858\x03\x02\x02\x02\u085A" +
		"\u0859\x03\x02\x02\x02\u085A\u085B\x03\x02\x02\x02\u085B\u012F\x03\x02" +
		"\x02\x02\u085C\u085D\x05\u0132\x9A\x02\u085D\u085E\x05\u017C\xBF\x02\u085E" +
		"\u085F\x07\u0166\x02\x02\u085F\u0860\x05\u017C\xBF\x02\u0860\u0131\x03" +
		"\x02\x02\x02\u0861\u0863\t$\x02\x02\u0862\u0861\x03\x02\x02\x02\u0862" +
		"\u0863\x03\x02\x02\x02\u0863\u0864\x03\x02\x02\x02\u0864\u0867\t%\x02" +
		"\x02\u0865\u0867\x07\u019D\x02\x02\u0866\u0862\x03\x02\x02\x02\u0866\u0865" +
		"\x03\x02\x02\x02\u0867\u0133\x03\x02\x02\x02\u0868\u086A\x07\xBE\x02\x02" +
		"\u0869\u0868\x03\x02\x02\x02\u0869\u086A\x03\x02\x02\x02\u086A\u086B\x03" +
		"\x02\x02\x02\u086B\u086D\x05\u0140\xA1\x02\u086C\u086E\x05\u013C\x9F\x02" +
		"\u086D\u086C\x03\x02\x02\x02\u086D\u086E\x03\x02\x02\x02\u086E\u0135\x03" +
		"\x02\x02\x02\u086F\u0871\x07\xBE\x02\x02\u0870\u086F\x03\x02\x02\x02\u0870" +
		"\u0871\x03\x02\x02\x02\u0871\u0872\x03\x02\x02\x02\u0872\u0874\x05\u0140" +
		"\xA1\x02\u0873\u0875\x05\u013C\x9F\x02\u0874\u0873\x03\x02\x02\x02\u0874" +
		"\u0875\x03\x02\x02\x02\u0875\u0137\x03\x02\x02\x02\u0876\u0877\x05\u0140" +
		"\xA1\x02\u0877\u0878\x05\u013A\x9E\x02\u0878\u0139\x03\x02\x02\x02\u0879" +
		"\u087A\x07\u0125\x02\x02\u087A\u087C\x05\u0140\xA1\x02\u087B\u0879\x03" +
		"\x02\x02\x02\u087C\u087D\x03\x02\x02\x02\u087D\u087B\x03\x02\x02\x02\u087D" +
		"\u087E\x03\x02\x02\x02\u087E\u0881\x03\x02\x02\x02\u087F\u0881\x03\x02" +
		"\x02\x02\u0880\u087B\x03\x02\x02\x02\u0880\u087F\x03\x02\x02\x02\u0881" +
		"\u013B\x03\x02\x02\x02\u0882\u0883\x07\u0188\x02\x02\u0883\u0884\x05\u013E" +
		"\xA0\x02\u0884\u0885\x07\u0189\x02\x02\u0885\u013D\x03\x02\x02\x02\u0886" +
		"\u088B\x05\u0140\xA1\x02\u0887\u0888\x07\u018C\x02\x02\u0888\u088A\x05" +
		"\u0140\xA1\x02\u0889\u0887\x03\x02\x02\x02\u088A\u088D\x03\x02\x02\x02" +
		"\u088B\u0889\x03\x02\x02\x02\u088B\u088C\x03\x02\x02\x02\u088C\u013F\x03" +
		"\x02\x02\x02\u088D\u088B\x03\x02\x02\x02\u088E\u0893\x05\u0144\xA3\x02" +
		"\u088F\u0893\x05\u0146";
	private static readonly _serializedATNSegment4: string =
		"\xA4\x02\u0890\u0893\x05\u0184\xC3\x02\u0891\u0893\x05\u0142\xA2\x02\u0892" +
		"\u088E\x03\x02\x02\x02\u0892\u088F\x03\x02\x02\x02\u0892\u0890\x03\x02" +
		"\x02\x02\u0892\u0891\x03\x02\x02\x02\u0893\u0141\x03\x02\x02\x02\u0894" +
		"\u0895\x07\x03\x02\x02\u0895\u0896\x07\u018A\x02\x02\u0896\u0897\x05\u0144" +
		"\xA3\x02\u0897\u0898\x07\u018B\x02\x02\u0898\u0143\x03\x02\x02\x02\u0899" +
		"\u089A\t&\x02\x02\u089A\u0145\x03\x02\x02\x02\u089B\u089C\x07\u019D\x02" +
		"\x02\u089C\u0147\x03\x02\x02\x02\u089D\u089E\x07\u0176\x02\x02\u089E\u089F" +
		"\x05\u0104\x83\x02\u089F\u08A0\x07\u015F\x02\x02\u08A0\u08A1\x05\u0104" +
		"\x83\x02\u08A1\u0149\x03\x02\x02\x02\u08A2\u08A3\x05\u0154\xAB\x02\u08A3" +
		"\u014B\x03\x02\x02\x02\u08A4\u08A5\x05\u0154\xAB\x02\u08A5\u014D\x03\x02" +
		"\x02\x02\u08A6\u08A7\x05\u0154\xAB\x02\u08A7\u014F\x03\x02\x02\x02\u08A8" +
		"\u08A9\x05\u0154\xAB\x02\u08A9\u0151\x03\x02\x02\x02\u08AA\u08AB\x05\u0154" +
		"\xAB\x02\u08AB\u0153\x03\x02\x02\x02\u08AC\u08B1\x05\u0140\xA1\x02\u08AD" +
		"\u08AE\x07\u0185\x02\x02\u08AE\u08B0\x05\u0140\xA1\x02\u08AF\u08AD\x03" +
		"\x02\x02\x02\u08B0\u08B3\x03\x02\x02\x02\u08B1\u08B2\x03\x02\x02\x02\u08B1" +
		"\u08AF\x03\x02\x02\x02\u08B2\u0155\x03\x02\x02\x02\u08B3\u08B1\x03\x02" +
		"\x02\x02\u08B4\u08B5\x07\u0179\x02\x02\u08B5\u08B6\x05\u015C\xAF\x02\u08B6" +
		"\u0157\x03\x02\x02\x02\u08B7\u08B8\x07?\x02\x02\u08B8\u08B9\x07\u012F" +
		"\x02\x02\u08B9\u08BA\x07\xFA\x02\x02\u08BA\u0159\x03\x02\x02\x02\u08BB" +
		"\u08BC\x07?\x02\x02\u08BC\u08BD\x07\xFA\x02\x02\u08BD\u015B\x03\x02\x02" +
		"\x02\u08BE\u08BF\x07\u0188\x02\x02\u08BF\u08C4\x05\u015E\xB0\x02\u08C0" +
		"\u08C1\x07\u018C\x02\x02\u08C1\u08C3\x05\u015E\xB0\x02\u08C2\u08C0\x03" +
		"\x02\x02\x02\u08C3\u08C6\x03\x02\x02\x02\u08C4\u08C2\x03\x02\x02\x02\u08C4" +
		"\u08C5\x03\x02\x02\x02\u08C5\u08C7\x03\x02\x02\x02\u08C6\u08C4\x03\x02" +
		"\x02\x02\u08C7\u08C8\x07\u0189\x02\x02\u08C8\u015D\x03\x02\x02\x02\u08C9" +
		"\u08CE\x05\u0160\xB1\x02\u08CA\u08CC\x07\u017D\x02\x02\u08CB\u08CA\x03" +
		"\x02\x02\x02\u08CB\u08CC\x03\x02\x02\x02\u08CC\u08CD\x03\x02\x02\x02\u08CD" +
		"\u08CF\x05\u0162\xB2\x02\u08CE\u08CB\x03\x02\x02\x02\u08CE\u08CF\x03\x02" +
		"\x02\x02\u08CF\u015F\x03\x02\x02\x02\u08D0\u08D4\x05\u0140\xA1\x02\u08D1" +
		"\u08D4\x05\u0122\x92\x02\u08D2\u08D4\x07\u019D\x02\x02\u08D3\u08D0\x03" +
		"\x02\x02\x02\u08D3\u08D1\x03\x02\x02\x02\u08D3\u08D2\x03\x02\x02\x02\u08D4" +
		"\u0161\x03\x02\x02\x02\u08D5\u08DA\x07\u019E\x02\x02\u08D6\u08DA\x07\u019F" +
		"\x02\x02\u08D7\u08DA\x05\u0176\xBC\x02\u08D8\u08DA\x07\u019D\x02\x02\u08D9" +
		"\u08D5\x03\x02\x02\x02\u08D9\u08D6\x03\x02\x02\x02\u08D9\u08D7\x03\x02" +
		"\x02\x02\u08D9\u08D8\x03\x02\x02\x02\u08DA\u0163\x03\x02\x02\x02\u08DB" +
		"\u08E2\x07\xBA\x02\x02\u08DC\u08DD\x07\u0183\x02\x02\u08DD\u08E2\x07\u0183" +
		"\x02\x02\u08DE\u08E2\x07\u0136\x02\x02\u08DF\u08E0\x07\u0182\x02\x02\u08E0" +
		"\u08E2\x07\u0182\x02\x02\u08E1\u08DB\x03\x02\x02\x02\u08E1\u08DC\x03\x02" +
		"\x02\x02\u08E1\u08DE\x03\x02\x02\x02\u08E1\u08DF\x03\x02\x02\x02\u08E2" +
		"\u0165\x03\x02\x02\x02\u08E3\u08F2\x07\u017D\x02\x02\u08E4\u08F2\x07\u017E" +
		"\x02\x02\u08E5\u08F2\x07\u017F\x02\x02\u08E6\u08E7\x07\u017F\x02\x02\u08E7" +
		"\u08F2\x07\u017D\x02\x02\u08E8\u08E9\x07\u017E\x02\x02\u08E9\u08F2\x07" +
		"\u017D\x02\x02\u08EA\u08EB\x07\u017F\x02\x02\u08EB\u08F2\x07\u017E\x02" +
		"\x02\u08EC\u08ED\x07\u0180\x02\x02\u08ED\u08F2\x07\u017D\x02\x02\u08EE" +
		"\u08EF\x07\u017F\x02\x02\u08EF\u08F0\x07\u017D\x02\x02\u08F0\u08F2\x07" +
		"\u017E\x02\x02\u08F1\u08E3\x03\x02\x02\x02\u08F1\u08E4\x03\x02\x02\x02" +
		"\u08F1\u08E5\x03\x02\x02\x02\u08F1\u08E6\x03\x02\x02\x02\u08F1\u08E8\x03" +
		"\x02\x02\x02\u08F1\u08EA\x03\x02\x02\x02\u08F1\u08EC\x03\x02\x02\x02\u08F1" +
		"\u08EE\x03\x02\x02\x02\u08F2\u0167\x03\x02\x02\x02\u08F3\u08F4\x07\u017F" +
		"\x02\x02\u08F4\u08FB\x07\u017F\x02\x02\u08F5\u08F6\x07\u017E\x02\x02\u08F6" +
		"\u08FB\x07\u017E\x02\x02\u08F7\u08FB\x07\u0183\x02\x02\u08F8\u08FB\x07" +
		"\u0184\x02\x02\u08F9\u08FB\x07\u0182\x02\x02\u08FA\u08F3\x03\x02\x02\x02" +
		"\u08FA\u08F5\x03\x02\x02\x02\u08FA\u08F7\x03\x02\x02\x02\u08FA\u08F8\x03" +
		"\x02\x02\x02\u08FA\u08F9\x03\x02\x02\x02\u08FB\u0169\x03\x02\x02\x02\u08FC" +
		"\u08FD\t\'\x02\x02\u08FD\u016B\x03\x02\x02\x02\u08FE\u08FF\t(\x02\x02" +
		"\u08FF\u016D\x03\x02\x02\x02\u0900\u090F\x05\u0128\x95\x02\u0901\u090F" +
		"\x05\u0170\xB9\x02\u0902\u090F\x05\u0172\xBA\x02\u0903\u0905\x07\u0195" +
		"\x02\x02\u0904\u0903\x03\x02\x02\x02\u0904\u0905\x03\x02\x02\x02\u0905" +
		"\u0906\x03\x02\x02\x02\u0906\u090F\x05\u0174\xBB\x02\u0907\u090F\x05\u0176" +
		"\xBC\x02\u0908\u090F\x07\u019F\x02\x02\u0909\u090F\x07\u01A0\x02\x02\u090A" +
		"\u090C\x07\u012F\x02\x02\u090B\u090A\x03\x02\x02\x02\u090B\u090C\x03\x02" +
		"\x02\x02\u090C\u090D\x03\x02\x02\x02\u090D\u090F\x07\u0130\x02\x02\u090E" +
		"\u0900\x03\x02\x02\x02\u090E\u0901\x03\x02\x02\x02\u090E\u0902\x03\x02" +
		"\x02\x02\u090E\u0904\x03\x02\x02\x02\u090E\u0907\x03\x02\x02\x02\u090E" +
		"\u0908\x03\x02\x02\x02\u090E\u0909\x03\x02\x02\x02\u090E\u090B\x03\x02" +
		"\x02\x02\u090F\u016F\x03\x02\x02\x02\u0910\u0911\x05\u017A\xBE\x02\u0911" +
		"\u0912\x05\u0172\xBA\x02\u0912\u0171\x03\x02\x02\x02\u0913\u0914\x07\u019D" +
		"\x02\x02\u0914\u0173\x03\x02\x02\x02\u0915\u0916\x07\u019E\x02\x02\u0916" +
		"\u0175\x03\x02\x02\x02\u0917\u0918\t)\x02\x02\u0918\u0177\x03\x02\x02" +
		"\x02\u0919\u091A\t*\x02\x02\u091A\u0179\x03\x02\x02\x02\u091B\u091C\t" +
		"+\x02\x02\u091C\u017B\x03\x02\x02\x02\u091D\u091E\t,\x02\x02\u091E\u017D" +
		"\x03\x02\x02\x02\u091F\u0920\t-\x02\x02\u0920\u017F\x03\x02\x02\x02\u0921" +
		"\u0922\t.\x02\x02\u0922\u0181\x03\x02\x02\x02\u0923\u0924\t/\x02\x02\u0924" +
		"\u0183\x03\x02\x02\x02\u0925\u0926\t0\x02\x02\u0926\u0185\x03\x02\x02" +
		"\x02\u010D\u018F\u0191\u01B7\u01C9\u01CD\u01D6\u01DB\u01E2\u01ED\u01F6" +
		"\u0202\u0205\u020C\u0214\u0219\u021C\u0223\u022B\u022F\u0238\u023C\u0240" +
		"\u0244\u024D\u0252\u0256\u025A\u025E\u0261\u0265\u026A\u0270\u0275\u027A" +
		"\u027D\u0281\u0289\u0291\u0295\u0299\u029D\u02A1\u02A5\u02A9\u02AD\u02B1" +
		"\u02B5\u02B9\u02BD\u02C1\u02C5\u02C9\u02CD\u02D1\u02D5\u02D7\u02E1\u02E9" +
		"\u02F3\u0308\u030F\u0315\u0318\u031B\u0325\u0328\u0330\u033C\u0354\u0361" +
		"\u0366\u036A\u0372\u0376\u037C\u0386\u038A\u038D\u0391\u0395\u0399\u039C" +
		"\u03A5\u03A9\u03B0\u03B3\u03BD\u03C5\u03CD\u03D1\u03E0\u03F3\u03FE\u0402" +
		"\u0409\u040E\u0414\u0418\u041F\u0423\u0427\u042B\u0433\u0437\u043C\u0442" +
		"\u0448\u044B\u044F\u045A\u0463\u0471\u047D\u048C\u048F\u0493\u0496\u0498" +
		"\u049D\u04A1\u04A4\u04A8\u04B1\u04BA\u04C4\u04C9\u04D5\u04D8\u04DB\u04DE" +
		"\u04E4\u04E8\u04F0\u04F3\u04F8\u04FB\u04FD\u050B\u0516\u051B\u0523\u0526" +
		"\u0529\u052E\u0532\u0535\u0538\u053D\u0543\u0546\u0548\u054D\u0550\u0554" +
		"\u0557\u055A\u0566\u056D\u057D\u058A\u0594\u05AF\u05C5\u05D7\u05DC\u05E8" +
		"\u05F5\u0601\u060D\u0612\u062D\u0635\u0639\u063C\u063F\u0646\u0649\u064C" +
		"\u064F\u0652\u0655\u065A\u065D\u0666\u066B\u066F\u0674\u067D\u0690\u0698" +
		"\u06A0\u06A4\u06A8\u06B2\u06CC\u06D4\u06E0\u06F6\u06F8\u0703\u0706\u0708" +
		"\u070C\u0710\u0717\u0720\u0726\u0733\u073A\u073F\u0745\u074C\u074E\u0751" +
		"\u075D\u0762\u0765\u076B\u076D\u0773\u078A\u078C\u0794\u0798\u07A1\u07A5" +
		"\u07B5\u07BE\u07D6\u07DD\u07E0\u07EE\u07F3\u07FC\u0805\u080B\u0819\u082B" +
		"\u0830\u0837\u0845\u084A\u084E\u0855\u085A\u0862\u0866\u0869\u086D\u0870" +
		"\u0874\u087D\u0880\u088B\u0892\u08B1\u08C4\u08CB\u08CE\u08D3\u08D9\u08E1" +
		"\u08F1\u08FA\u0904\u090B\u090E";
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
	public comment(): CommentContext[];
	public comment(i: number): CommentContext;
	public comment(i?: number): CommentContext | CommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentContext);
		} else {
			return this.getRuleContext(i, CommentContext);
		}
	}
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


export class CommentContext extends ParserRuleContext {
	public LINE_COMMENT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.LINE_COMMENT, 0); }
	public COMMENT_INPUT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.COMMENT_INPUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_comment; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitComment) {
			return visitor.visitComment(this);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_lengthOneTypeDimension; }
	public copyFrom(ctx: LengthOneTypeDimensionContext): void {
		super.copyFrom(ctx);
	}
}
export class LengthSymbolsTypeDimensionContext extends LengthOneTypeDimensionContext {
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
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	constructor(ctx: LengthOneTypeDimensionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterLengthSymbolsTypeDimension) {
			listener.enterLengthSymbolsTypeDimension(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitLengthSymbolsTypeDimension) {
			listener.exitLengthSymbolsTypeDimension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitLengthSymbolsTypeDimension) {
			return visitor.visitLengthSymbolsTypeDimension(this);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_rowTypeDimension; }
	public copyFrom(ctx: RowTypeDimensionContext): void {
		super.copyFrom(ctx);
	}
}
export class RowSymbolsTypeDimensionContext extends RowTypeDimensionContext {
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
	constructor(ctx: RowTypeDimensionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterRowSymbolsTypeDimension) {
			listener.enterRowSymbolsTypeDimension(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitRowSymbolsTypeDimension) {
			listener.exitRowSymbolsTypeDimension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitRowSymbolsTypeDimension) {
			return visitor.visitRowSymbolsTypeDimension(this);
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
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	public commentSpec(): CommentSpecContext | undefined {
		return this.tryGetRuleContext(0, CommentSpecContext);
	}
	public withOption(): WithOptionContext | undefined {
		return this.tryGetRuleContext(0, WithOptionContext);
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
	public tableAlias(): TableAliasContext | undefined {
		return this.tryGetRuleContext(0, TableAliasContext);
	}
	public projectItemDefinition(): ProjectItemDefinitionContext[];
	public projectItemDefinition(i: number): ProjectItemDefinitionContext;
	public projectItemDefinition(i?: number): ProjectItemDefinitionContext | ProjectItemDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProjectItemDefinitionContext);
		} else {
			return this.getRuleContext(i, ProjectItemDefinitionContext);
		}
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
	public KW_TO(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TO, 0); }
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
export class FunctionCallFilterContext extends PrimaryExpressionContext {
	public functionName(): FunctionNameContext {
		return this.getRuleContext(0, FunctionNameContext);
	}
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public functionParam(): FunctionParamContext {
		return this.getRuleContext(0, FunctionParamContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	public filterClause(): FilterClauseContext | undefined {
		return this.tryGetRuleContext(0, FilterClauseContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterFunctionCallFilter) {
			listener.enterFunctionCallFilter(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitFunctionCallFilter) {
			listener.exitFunctionCallFilter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitFunctionCallFilter) {
			return visitor.visitFunctionCallFilter(this);
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
export class ComplexDataTypeFieldExpressionContext extends PrimaryExpressionContext {
	public complexDataTypeExpression(): ComplexDataTypeExpressionContext {
		return this.getRuleContext(0, ComplexDataTypeExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterComplexDataTypeFieldExpression) {
			listener.enterComplexDataTypeFieldExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitComplexDataTypeFieldExpression) {
			listener.exitComplexDataTypeFieldExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitComplexDataTypeFieldExpression) {
			return visitor.visitComplexDataTypeFieldExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComplexDataTypeExpressionContext extends ParserRuleContext {
	public arrayExpression(): ArrayExpressionContext | undefined {
		return this.tryGetRuleContext(0, ArrayExpressionContext);
	}
	public rowExpression(): RowExpressionContext | undefined {
		return this.tryGetRuleContext(0, RowExpressionContext);
	}
	public mapExpression(): MapExpressionContext | undefined {
		return this.tryGetRuleContext(0, MapExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_complexDataTypeExpression; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterComplexDataTypeExpression) {
			listener.enterComplexDataTypeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitComplexDataTypeExpression) {
			listener.exitComplexDataTypeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitComplexDataTypeExpression) {
			return visitor.visitComplexDataTypeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayExpressionContext extends ParserRuleContext {
	public KW_ARRAY(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ARRAY, 0); }
	public LS_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LS_BRACKET, 0); }
	public dataTypeExpression(): DataTypeExpressionContext {
		return this.getRuleContext(0, DataTypeExpressionContext);
	}
	public RS_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RS_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_arrayExpression; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterArrayExpression) {
			listener.enterArrayExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitArrayExpression) {
			listener.exitArrayExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitArrayExpression) {
			return visitor.visitArrayExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RowExpressionContext extends ParserRuleContext {
	public KW_ROW(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ROW, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public rowFieldExpression(): RowFieldExpressionContext[];
	public rowFieldExpression(i: number): RowFieldExpressionContext;
	public rowFieldExpression(i?: number): RowFieldExpressionContext | RowFieldExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RowFieldExpressionContext);
		} else {
			return this.getRuleContext(i, RowFieldExpressionContext);
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
	public get ruleIndex(): number { return FlinkSQLParser.RULE_rowExpression; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterRowExpression) {
			listener.enterRowExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitRowExpression) {
			listener.exitRowExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitRowExpression) {
			return visitor.visitRowExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapExpressionContext extends ParserRuleContext {
	public KW_MAP(): TerminalNode { return this.getToken(FlinkSQLParser.KW_MAP, 0); }
	public LS_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LS_BRACKET, 0); }
	public dataTypeExpression(): DataTypeExpressionContext[];
	public dataTypeExpression(i: number): DataTypeExpressionContext;
	public dataTypeExpression(i?: number): DataTypeExpressionContext | DataTypeExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataTypeExpressionContext);
		} else {
			return this.getRuleContext(i, DataTypeExpressionContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(FlinkSQLParser.COMMA, 0); }
	public RS_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RS_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_mapExpression; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterMapExpression) {
			listener.enterMapExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitMapExpression) {
			listener.exitMapExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitMapExpression) {
			return visitor.visitMapExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RowFieldExpressionContext extends ParserRuleContext {
	public dataTypeExpression(): DataTypeExpressionContext {
		return this.getRuleContext(0, DataTypeExpressionContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(FlinkSQLParser.KW_AS, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_rowFieldExpression; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterRowFieldExpression) {
			listener.enterRowFieldExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitRowFieldExpression) {
			listener.exitRowFieldExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitRowFieldExpression) {
			return visitor.visitRowFieldExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataTypeExpressionContext extends ParserRuleContext {
	public columnAlias(): ColumnAliasContext | undefined {
		return this.tryGetRuleContext(0, ColumnAliasContext);
	}
	public complexDataTypeExpression(): ComplexDataTypeExpressionContext | undefined {
		return this.tryGetRuleContext(0, ComplexDataTypeExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_dataTypeExpression; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterDataTypeExpression) {
			listener.enterDataTypeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitDataTypeExpression) {
			listener.exitDataTypeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitDataTypeExpression) {
			return visitor.visitDataTypeExpression(this);
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
	public filterClause(): FilterClauseContext | undefined {
		return this.tryGetRuleContext(0, FilterClauseContext);
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


export class FilterClauseContext extends ParserRuleContext {
	public KW_FILTER(): TerminalNode { return this.getToken(FlinkSQLParser.KW_FILTER, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public KW_WHERE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_WHERE, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_filterClause; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterFilterClause) {
			listener.enterFilterClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitFilterClause) {
			listener.exitFilterClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitFilterClause) {
			return visitor.visitFilterClause(this);
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
export class UrefVarAlternativeContext extends IdentifierContext {
	public refVar(): RefVarContext {
		return this.getRuleContext(0, RefVarContext);
	}
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterUrefVarAlternative) {
			listener.enterUrefVarAlternative(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitUrefVarAlternative) {
			listener.exitUrefVarAlternative(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitUrefVarAlternative) {
			return visitor.visitUrefVarAlternative(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RefVarContext extends ParserRuleContext {
	public LB_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LB_BRACKET, 0); }
	public unquotedIdentifier(): UnquotedIdentifierContext {
		return this.getRuleContext(0, UnquotedIdentifierContext);
	}
	public RB_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RB_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_refVar; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterRefVar) {
			listener.enterRefVar(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitRefVar) {
			listener.exitRefVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitRefVar) {
			return visitor.visitRefVar(this);
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
	public KW_FLOOR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FLOOR, 0); }
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


