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
	public static readonly KW_CUME_DIST = 225;
	public static readonly KW_CURRENT = 226;
	public static readonly KW_CURSOR = 227;
	public static readonly KW_CYCLE = 228;
	public static readonly KW_DATE = 229;
	public static readonly KW_DATETIME = 230;
	public static readonly KW_DAY = 231;
	public static readonly KW_DEC = 232;
	public static readonly KW_DECIMAL = 233;
	public static readonly KW_DECLARE = 234;
	public static readonly KW_DEFAULT = 235;
	public static readonly KW_DEFINE = 236;
	public static readonly KW_DELETE = 237;
	public static readonly KW_DESCRIBE = 238;
	public static readonly KW_DENSE_RANK = 239;
	public static readonly KW_DISTINCT = 240;
	public static readonly KW_DOUBLE = 241;
	public static readonly KW_DROP = 242;
	public static readonly KW_EACH = 243;
	public static readonly KW_ELSE = 244;
	public static readonly KW_END = 245;
	public static readonly KW_EQUALS = 246;
	public static readonly KW_ESCAPE = 247;
	public static readonly KW_EXCEPT = 248;
	public static readonly KW_EXECUTE = 249;
	public static readonly KW_EXISTS = 250;
	public static readonly KW_EXPLAIN = 251;
	public static readonly KW_EXTERNAL = 252;
	public static readonly KW_EXTRACT = 253;
	public static readonly KW_FIRST_VALUE = 254;
	public static readonly KW_FALSE = 255;
	public static readonly KW_FLOAT = 256;
	public static readonly KW_FOR = 257;
	public static readonly KW_FROM = 258;
	public static readonly KW_FULL = 259;
	public static readonly KW_FUNCTION = 260;
	public static readonly KW_GLOBAL = 261;
	public static readonly KW_GRANT = 262;
	public static readonly KW_GROUP = 263;
	public static readonly KW_GROUPING = 264;
	public static readonly KW_GROUPS = 265;
	public static readonly KW_HAVING = 266;
	public static readonly KW_HOUR = 267;
	public static readonly KW_IMPORT = 268;
	public static readonly KW_IN = 269;
	public static readonly KW_INCLUDING = 270;
	public static readonly KW_INNER = 271;
	public static readonly KW_INOUT = 272;
	public static readonly KW_INSERT = 273;
	public static readonly KW_INT = 274;
	public static readonly KW_INTEGER = 275;
	public static readonly KW_INTERSECT = 276;
	public static readonly KW_INTERVAL = 277;
	public static readonly KW_INTO = 278;
	public static readonly KW_IS = 279;
	public static readonly KW_JOIN = 280;
	public static readonly KW_LAG = 281;
	public static readonly KW_LANGUAGE = 282;
	public static readonly KW_LATERAL = 283;
	public static readonly KW_LAST_VALUE = 284;
	public static readonly KW_LEAD = 285;
	public static readonly KW_LEADING = 286;
	public static readonly KW_LEFT = 287;
	public static readonly KW_LIKE = 288;
	public static readonly KW_LIMIT = 289;
	public static readonly KW_LOCAL = 290;
	public static readonly KW_MATCH = 291;
	public static readonly KW_MATCH_RECOGNIZE = 292;
	public static readonly KW_MEASURES = 293;
	public static readonly KW_MERGE = 294;
	public static readonly KW_METADATA = 295;
	public static readonly KW_MINUS = 296;
	public static readonly KW_MINUTE = 297;
	public static readonly KW_MODIFIES = 298;
	public static readonly KW_MODULE = 299;
	public static readonly KW_MONTH = 300;
	public static readonly KW_MULTISET = 301;
	public static readonly KW_NATURAL = 302;
	public static readonly KW_NEXT = 303;
	public static readonly KW_NO = 304;
	public static readonly KW_NONE = 305;
	public static readonly KW_NOT = 306;
	public static readonly KW_NTILE = 307;
	public static readonly KW_NULL = 308;
	public static readonly KW_NUMERIC = 309;
	public static readonly KW_OF = 310;
	public static readonly KW_OFFSET = 311;
	public static readonly KW_ON = 312;
	public static readonly KW_ONE = 313;
	public static readonly KW_OR = 314;
	public static readonly KW_ORDER = 315;
	public static readonly KW_OUT = 316;
	public static readonly KW_OUTER = 317;
	public static readonly KW_OVER = 318;
	public static readonly KW_OVERLAY = 319;
	public static readonly KW_PARTITION = 320;
	public static readonly KW_PATTERN = 321;
	public static readonly KW_PER = 322;
	public static readonly KW_PERCENT = 323;
	public static readonly KW_PERCENT_RANK = 324;
	public static readonly KW_PERIOD = 325;
	public static readonly KW_POSITION = 326;
	public static readonly KW_POWER = 327;
	public static readonly KW_PRIMARY = 328;
	public static readonly KW_RANGE = 329;
	public static readonly KW_ROW_NUMBER = 330;
	public static readonly KW_RANK = 331;
	public static readonly KW_RESET = 332;
	public static readonly KW_REVOKE = 333;
	public static readonly KW_RIGHT = 334;
	public static readonly KW_RLIKE = 335;
	public static readonly KW_ROLLBACK = 336;
	public static readonly KW_ROLLUP = 337;
	public static readonly KW_ROW = 338;
	public static readonly KW_ROWS = 339;
	public static readonly KW_SECOND = 340;
	public static readonly KW_SELECT = 341;
	public static readonly KW_SET = 342;
	public static readonly KW_SHOW = 343;
	public static readonly KW_SIMILAR = 344;
	public static readonly KW_SKIP = 345;
	public static readonly KW_SMALLINT = 346;
	public static readonly KW_START = 347;
	public static readonly KW_STATIC = 348;
	public static readonly KW_SUBSTRING = 349;
	public static readonly KW_SUM = 350;
	public static readonly KW_SYMMETRIC = 351;
	public static readonly KW_SYSTEM = 352;
	public static readonly KW_SYSTEM_TIME = 353;
	public static readonly KW_SYSTEM_USER = 354;
	public static readonly KW_TABLE = 355;
	public static readonly KW_TABLESAMPLE = 356;
	public static readonly KW_THEN = 357;
	public static readonly KW_TIME = 358;
	public static readonly KW_TIMESTAMP = 359;
	public static readonly KW_TIMESTAMP_3 = 360;
	public static readonly KW_TIMESTAMP_6 = 361;
	public static readonly KW_TIMESTAMP_9 = 362;
	public static readonly KW_TINYINT = 363;
	public static readonly KW_TO = 364;
	public static readonly KW_TRAILING = 365;
	public static readonly KW_TRUE = 366;
	public static readonly KW_TRUNCATE = 367;
	public static readonly KW_UNION = 368;
	public static readonly KW_UNIQUE = 369;
	public static readonly KW_UNKNOWN = 370;
	public static readonly KW_UNNEST = 371;
	public static readonly KW_UPPER = 372;
	public static readonly KW_UPSERT = 373;
	public static readonly KW_USER = 374;
	public static readonly KW_USING = 375;
	public static readonly KW_VALUE = 376;
	public static readonly KW_VALUES = 377;
	public static readonly KW_VARBINARY = 378;
	public static readonly KW_VARCHAR = 379;
	public static readonly KW_WHEN = 380;
	public static readonly KW_WHERE = 381;
	public static readonly KW_WINDOW = 382;
	public static readonly KW_WITH = 383;
	public static readonly KW_WITHIN = 384;
	public static readonly KW_WITHOUT = 385;
	public static readonly KW_YEAR = 386;
	public static readonly BIT_NOT_OP = 387;
	public static readonly BIT_OR_OP = 388;
	public static readonly BIT_AND_OP = 389;
	public static readonly BIT_XOR_OP = 390;
	public static readonly EQUAL_SYMBOL = 391;
	public static readonly GREATER_SYMBOL = 392;
	public static readonly LESS_SYMBOL = 393;
	public static readonly EXCLAMATION_SYMBOL = 394;
	public static readonly DOT = 395;
	public static readonly LS_BRACKET = 396;
	public static readonly RS_BRACKET = 397;
	public static readonly LR_BRACKET = 398;
	public static readonly RR_BRACKET = 399;
	public static readonly LB_BRACKET = 400;
	public static readonly RB_BRACKET = 401;
	public static readonly COMMA = 402;
	public static readonly SEMICOLON = 403;
	public static readonly AT_SIGN = 404;
	public static readonly SINGLE_QUOTE_SYMB = 405;
	public static readonly DOUBLE_QUOTE_SYMB = 406;
	public static readonly REVERSE_QUOTE_SYMB = 407;
	public static readonly COLON_SYMB = 408;
	public static readonly ASTERISK_SIGN = 409;
	public static readonly UNDERLINE_SIGN = 410;
	public static readonly HYPNEN_SIGN = 411;
	public static readonly ADD_SIGN = 412;
	public static readonly PENCENT_SIGN = 413;
	public static readonly DOUBLE_VERTICAL_SIGN = 414;
	public static readonly DOUBLE_HYPNEN_SIGN = 415;
	public static readonly SLASH_SIGN = 416;
	public static readonly QUESTION_MARK_SIGN = 417;
	public static readonly DOUBLE_RIGHT_ARROW = 418;
	public static readonly STRING_LITERAL = 419;
	public static readonly DIG_LITERAL = 420;
	public static readonly REAL_LITERAL = 421;
	public static readonly BIT_STRING = 422;
	public static readonly ID_LITERAL = 423;
	public static readonly SLASH_TEXT = 424;
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
	public static readonly RULE_replaceTable = 21;
	public static readonly RULE_createTable = 22;
	public static readonly RULE_simpleCreateTable = 23;
	public static readonly RULE_createTableAsSelect = 24;
	public static readonly RULE_columnOptionDefinition = 25;
	public static readonly RULE_physicalColumnDefinition = 26;
	public static readonly RULE_columnName = 27;
	public static readonly RULE_columnNameList = 28;
	public static readonly RULE_columnType = 29;
	public static readonly RULE_lengthOneDimension = 30;
	public static readonly RULE_lengthTwoOptionalDimension = 31;
	public static readonly RULE_lengthTwoStringDimension = 32;
	public static readonly RULE_lengthOneTypeDimension = 33;
	public static readonly RULE_mapTypeDimension = 34;
	public static readonly RULE_rowTypeDimension = 35;
	public static readonly RULE_columnConstraint = 36;
	public static readonly RULE_commentSpec = 37;
	public static readonly RULE_metadataColumnDefinition = 38;
	public static readonly RULE_metadataKey = 39;
	public static readonly RULE_computedColumnDefinition = 40;
	public static readonly RULE_computedColumnExpression = 41;
	public static readonly RULE_watermarkDefinition = 42;
	public static readonly RULE_tableConstraint = 43;
	public static readonly RULE_constraintName = 44;
	public static readonly RULE_selfDefinitionClause = 45;
	public static readonly RULE_partitionDefinition = 46;
	public static readonly RULE_transformList = 47;
	public static readonly RULE_transform = 48;
	public static readonly RULE_transformArgument = 49;
	public static readonly RULE_likeDefinition = 50;
	public static readonly RULE_likeOption = 51;
	public static readonly RULE_createCatalog = 52;
	public static readonly RULE_createDatabase = 53;
	public static readonly RULE_createView = 54;
	public static readonly RULE_createFunction = 55;
	public static readonly RULE_usingClause = 56;
	public static readonly RULE_jarFileName = 57;
	public static readonly RULE_alterTable = 58;
	public static readonly RULE_coloumPosition = 59;
	public static readonly RULE_renameDefinition = 60;
	public static readonly RULE_setKeyValueDefinition = 61;
	public static readonly RULE_addConstraint = 62;
	public static readonly RULE_dropConstraint = 63;
	public static readonly RULE_addUnique = 64;
	public static readonly RULE_notForced = 65;
	public static readonly RULE_alertView = 66;
	public static readonly RULE_alterDatabase = 67;
	public static readonly RULE_alterFunction = 68;
	public static readonly RULE_dropCatalog = 69;
	public static readonly RULE_dropTable = 70;
	public static readonly RULE_dropDatabase = 71;
	public static readonly RULE_dropView = 72;
	public static readonly RULE_dropFunction = 73;
	public static readonly RULE_truncateTable = 74;
	public static readonly RULE_insertStatement = 75;
	public static readonly RULE_insertSimpleStatement = 76;
	public static readonly RULE_insertPartitionDefinition = 77;
	public static readonly RULE_valuesDefinition = 78;
	public static readonly RULE_valuesRowDefinition = 79;
	public static readonly RULE_insertMulStatementCompatibility = 80;
	public static readonly RULE_insertMulStatement = 81;
	public static readonly RULE_queryStatement = 82;
	public static readonly RULE_valuesCaluse = 83;
	public static readonly RULE_withClause = 84;
	public static readonly RULE_withItem = 85;
	public static readonly RULE_withItemName = 86;
	public static readonly RULE_selectStatement = 87;
	public static readonly RULE_selectClause = 88;
	public static readonly RULE_projectItemDefinition = 89;
	public static readonly RULE_overWindowItem = 90;
	public static readonly RULE_fromClause = 91;
	public static readonly RULE_tableExpression = 92;
	public static readonly RULE_tableReference = 93;
	public static readonly RULE_tablePrimary = 94;
	public static readonly RULE_systemTimePeriod = 95;
	public static readonly RULE_dateTimeExpression = 96;
	public static readonly RULE_inlineDataValueClause = 97;
	public static readonly RULE_windoTVFClause = 98;
	public static readonly RULE_windowTVFExression = 99;
	public static readonly RULE_windoTVFName = 100;
	public static readonly RULE_windowTVFParam = 101;
	public static readonly RULE_timeIntervalParamName = 102;
	public static readonly RULE_columnDescriptor = 103;
	public static readonly RULE_joinCondition = 104;
	public static readonly RULE_whereClause = 105;
	public static readonly RULE_groupByClause = 106;
	public static readonly RULE_groupItemDefinition = 107;
	public static readonly RULE_groupingSets = 108;
	public static readonly RULE_groupingSetsNotaionName = 109;
	public static readonly RULE_groupWindowFunction = 110;
	public static readonly RULE_groupWindowFunctionName = 111;
	public static readonly RULE_timeAttrColumn = 112;
	public static readonly RULE_havingClause = 113;
	public static readonly RULE_windowClause = 114;
	public static readonly RULE_namedWindow = 115;
	public static readonly RULE_windowSpec = 116;
	public static readonly RULE_matchRecognizeClause = 117;
	public static readonly RULE_orderByCaluse = 118;
	public static readonly RULE_orderItemDefition = 119;
	public static readonly RULE_limitClause = 120;
	public static readonly RULE_partitionByClause = 121;
	public static readonly RULE_quantifiers = 122;
	public static readonly RULE_measuresClause = 123;
	public static readonly RULE_patternDefination = 124;
	public static readonly RULE_patternVariable = 125;
	public static readonly RULE_outputMode = 126;
	public static readonly RULE_afterMatchStrategy = 127;
	public static readonly RULE_patternVariablesDefination = 128;
	public static readonly RULE_windowFrame = 129;
	public static readonly RULE_frameBound = 130;
	public static readonly RULE_withinClause = 131;
	public static readonly RULE_expression = 132;
	public static readonly RULE_booleanExpression = 133;
	public static readonly RULE_predicate = 134;
	public static readonly RULE_likePredicate = 135;
	public static readonly RULE_valueExpression = 136;
	public static readonly RULE_primaryExpression = 137;
	public static readonly RULE_complexDataTypeExpression = 138;
	public static readonly RULE_arrayExpression = 139;
	public static readonly RULE_rowExpression = 140;
	public static readonly RULE_mapExpression = 141;
	public static readonly RULE_dataTypeExpression = 142;
	public static readonly RULE_functionName = 143;
	public static readonly RULE_functionParam = 144;
	public static readonly RULE_filterClause = 145;
	public static readonly RULE_dereferenceDefinition = 146;
	public static readonly RULE_correlationName = 147;
	public static readonly RULE_qualifiedName = 148;
	public static readonly RULE_timeIntervalExpression = 149;
	public static readonly RULE_errorCapturingMultiUnitsInterval = 150;
	public static readonly RULE_multiUnitsInterval = 151;
	public static readonly RULE_errorCapturingUnitToUnitInterval = 152;
	public static readonly RULE_unitToUnitInterval = 153;
	public static readonly RULE_intervalValue = 154;
	public static readonly RULE_columnAlias = 155;
	public static readonly RULE_tableAlias = 156;
	public static readonly RULE_errorCapturingIdentifier = 157;
	public static readonly RULE_errorCapturingIdentifierExtra = 158;
	public static readonly RULE_identifierList = 159;
	public static readonly RULE_identifierSeq = 160;
	public static readonly RULE_identifier = 161;
	public static readonly RULE_refVar = 162;
	public static readonly RULE_unquotedIdentifier = 163;
	public static readonly RULE_quotedIdentifier = 164;
	public static readonly RULE_whenClause = 165;
	public static readonly RULE_catalogPath = 166;
	public static readonly RULE_databasePath = 167;
	public static readonly RULE_databasePathCreate = 168;
	public static readonly RULE_tablePathCreate = 169;
	public static readonly RULE_tablePath = 170;
	public static readonly RULE_uid = 171;
	public static readonly RULE_withOption = 172;
	public static readonly RULE_ifNotExists = 173;
	public static readonly RULE_ifExists = 174;
	public static readonly RULE_tablePropertyList = 175;
	public static readonly RULE_tableProperty = 176;
	public static readonly RULE_tablePropertyKey = 177;
	public static readonly RULE_tablePropertyValue = 178;
	public static readonly RULE_logicalOperator = 179;
	public static readonly RULE_comparisonOperator = 180;
	public static readonly RULE_bitOperator = 181;
	public static readonly RULE_mathOperator = 182;
	public static readonly RULE_unaryOperator = 183;
	public static readonly RULE_constant = 184;
	public static readonly RULE_timePointLiteral = 185;
	public static readonly RULE_stringLiteral = 186;
	public static readonly RULE_decimalLiteral = 187;
	public static readonly RULE_booleanLiteral = 188;
	public static readonly RULE_setQuantifier = 189;
	public static readonly RULE_timePointUnit = 190;
	public static readonly RULE_timeIntervalUnit = 191;
	public static readonly RULE_reservedKeywordsUsedAsFuncParam = 192;
	public static readonly RULE_reservedKeywordsUsedAsFuncName = 193;
	public static readonly RULE_reservedKeywords = 194;
	public static readonly RULE_nonReservedKeywords = 195;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "sqlStatements", "comment", "sqlStatement", "emptyStatement", 
		"ddlStatement", "dmlStatement", "describeStatement", "explainStatement", 
		"explainDetails", "explainDetail", "useStatement", "useModuleStatement", 
		"showStatememt", "loadStatement", "unloadStatememt", "setStatememt", "resetStatememt", 
		"jarStatememt", "dtFilePath", "replaceTable", "createTable", "simpleCreateTable", 
		"createTableAsSelect", "columnOptionDefinition", "physicalColumnDefinition", 
		"columnName", "columnNameList", "columnType", "lengthOneDimension", "lengthTwoOptionalDimension", 
		"lengthTwoStringDimension", "lengthOneTypeDimension", "mapTypeDimension", 
		"rowTypeDimension", "columnConstraint", "commentSpec", "metadataColumnDefinition", 
		"metadataKey", "computedColumnDefinition", "computedColumnExpression", 
		"watermarkDefinition", "tableConstraint", "constraintName", "selfDefinitionClause", 
		"partitionDefinition", "transformList", "transform", "transformArgument", 
		"likeDefinition", "likeOption", "createCatalog", "createDatabase", "createView", 
		"createFunction", "usingClause", "jarFileName", "alterTable", "coloumPosition", 
		"renameDefinition", "setKeyValueDefinition", "addConstraint", "dropConstraint", 
		"addUnique", "notForced", "alertView", "alterDatabase", "alterFunction", 
		"dropCatalog", "dropTable", "dropDatabase", "dropView", "dropFunction", 
		"truncateTable", "insertStatement", "insertSimpleStatement", "insertPartitionDefinition", 
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
		"dataTypeExpression", "functionName", "functionParam", "filterClause", 
		"dereferenceDefinition", "correlationName", "qualifiedName", "timeIntervalExpression", 
		"errorCapturingMultiUnitsInterval", "multiUnitsInterval", "errorCapturingUnitToUnitInterval", 
		"unitToUnitInterval", "intervalValue", "columnAlias", "tableAlias", "errorCapturingIdentifier", 
		"errorCapturingIdentifierExtra", "identifierList", "identifierSeq", "identifier", 
		"refVar", "unquotedIdentifier", "quotedIdentifier", "whenClause", "catalogPath", 
		"databasePath", "databasePathCreate", "tablePathCreate", "tablePath", 
		"uid", "withOption", "ifNotExists", "ifExists", "tablePropertyList", "tableProperty", 
		"tablePropertyKey", "tablePropertyValue", "logicalOperator", "comparisonOperator", 
		"bitOperator", "mathOperator", "unaryOperator", "constant", "timePointLiteral", 
		"stringLiteral", "decimalLiteral", "booleanLiteral", "setQuantifier", 
		"timePointUnit", "timeIntervalUnit", "reservedKeywordsUsedAsFuncParam", 
		"reservedKeywordsUsedAsFuncName", "reservedKeywords", "nonReservedKeywords",
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
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'~'", "'|'", "'&'", "'^'", "'='", "'>'", "'<'", 
		"'!'", "'.'", "'['", "']'", "'('", "')'", "'{'", "'}'", "','", "';'", 
		"'@'", "'''", "'\"'", "'`'", "':'", "'*'", "'_'", "'-'", "'+'", "'%'", 
		"'||'", "'--'", "'/'", "'?'", "'=>'",
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
		"KW_CREATE", "KW_CROSS", "KW_CUBE", "KW_CUME_DIST", "KW_CURRENT", "KW_CURSOR", 
		"KW_CYCLE", "KW_DATE", "KW_DATETIME", "KW_DAY", "KW_DEC", "KW_DECIMAL", 
		"KW_DECLARE", "KW_DEFAULT", "KW_DEFINE", "KW_DELETE", "KW_DESCRIBE", "KW_DENSE_RANK", 
		"KW_DISTINCT", "KW_DOUBLE", "KW_DROP", "KW_EACH", "KW_ELSE", "KW_END", 
		"KW_EQUALS", "KW_ESCAPE", "KW_EXCEPT", "KW_EXECUTE", "KW_EXISTS", "KW_EXPLAIN", 
		"KW_EXTERNAL", "KW_EXTRACT", "KW_FIRST_VALUE", "KW_FALSE", "KW_FLOAT", 
		"KW_FOR", "KW_FROM", "KW_FULL", "KW_FUNCTION", "KW_GLOBAL", "KW_GRANT", 
		"KW_GROUP", "KW_GROUPING", "KW_GROUPS", "KW_HAVING", "KW_HOUR", "KW_IMPORT", 
		"KW_IN", "KW_INCLUDING", "KW_INNER", "KW_INOUT", "KW_INSERT", "KW_INT", 
		"KW_INTEGER", "KW_INTERSECT", "KW_INTERVAL", "KW_INTO", "KW_IS", "KW_JOIN", 
		"KW_LAG", "KW_LANGUAGE", "KW_LATERAL", "KW_LAST_VALUE", "KW_LEAD", "KW_LEADING", 
		"KW_LEFT", "KW_LIKE", "KW_LIMIT", "KW_LOCAL", "KW_MATCH", "KW_MATCH_RECOGNIZE", 
		"KW_MEASURES", "KW_MERGE", "KW_METADATA", "KW_MINUS", "KW_MINUTE", "KW_MODIFIES", 
		"KW_MODULE", "KW_MONTH", "KW_MULTISET", "KW_NATURAL", "KW_NEXT", "KW_NO", 
		"KW_NONE", "KW_NOT", "KW_NTILE", "KW_NULL", "KW_NUMERIC", "KW_OF", "KW_OFFSET", 
		"KW_ON", "KW_ONE", "KW_OR", "KW_ORDER", "KW_OUT", "KW_OUTER", "KW_OVER", 
		"KW_OVERLAY", "KW_PARTITION", "KW_PATTERN", "KW_PER", "KW_PERCENT", "KW_PERCENT_RANK", 
		"KW_PERIOD", "KW_POSITION", "KW_POWER", "KW_PRIMARY", "KW_RANGE", "KW_ROW_NUMBER", 
		"KW_RANK", "KW_RESET", "KW_REVOKE", "KW_RIGHT", "KW_RLIKE", "KW_ROLLBACK", 
		"KW_ROLLUP", "KW_ROW", "KW_ROWS", "KW_SECOND", "KW_SELECT", "KW_SET", 
		"KW_SHOW", "KW_SIMILAR", "KW_SKIP", "KW_SMALLINT", "KW_START", "KW_STATIC", 
		"KW_SUBSTRING", "KW_SUM", "KW_SYMMETRIC", "KW_SYSTEM", "KW_SYSTEM_TIME", 
		"KW_SYSTEM_USER", "KW_TABLE", "KW_TABLESAMPLE", "KW_THEN", "KW_TIME", 
		"KW_TIMESTAMP", "KW_TIMESTAMP_3", "KW_TIMESTAMP_6", "KW_TIMESTAMP_9", 
		"KW_TINYINT", "KW_TO", "KW_TRAILING", "KW_TRUE", "KW_TRUNCATE", "KW_UNION", 
		"KW_UNIQUE", "KW_UNKNOWN", "KW_UNNEST", "KW_UPPER", "KW_UPSERT", "KW_USER", 
		"KW_USING", "KW_VALUE", "KW_VALUES", "KW_VARBINARY", "KW_VARCHAR", "KW_WHEN", 
		"KW_WHERE", "KW_WINDOW", "KW_WITH", "KW_WITHIN", "KW_WITHOUT", "KW_YEAR", 
		"BIT_NOT_OP", "BIT_OR_OP", "BIT_AND_OP", "BIT_XOR_OP", "EQUAL_SYMBOL", 
		"GREATER_SYMBOL", "LESS_SYMBOL", "EXCLAMATION_SYMBOL", "DOT", "LS_BRACKET", 
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
			this.state = 392;
			this.statement();
			this.state = 393;
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
			this.state = 395;
			this.sqlStatements();
			this.state = 396;
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
			this.state = 403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSQLParser.COMMENT_INPUT) | (1 << FlinkSQLParser.LINE_COMMENT) | (1 << FlinkSQLParser.KW_ADD) | (1 << FlinkSQLParser.KW_DESC))) !== 0) || _la === FlinkSQLParser.KW_LOAD || _la === FlinkSQLParser.KW_REMOVE || _la === FlinkSQLParser.KW_REPLACE || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (FlinkSQLParser.KW_UNLOAD - 162)) | (1 << (FlinkSQLParser.KW_USE - 162)) | (1 << (FlinkSQLParser.KW_ALTER - 162)) | (1 << (FlinkSQLParser.KW_BEGIN - 162)))) !== 0) || ((((_la - 222)) & ~0x1F) === 0 && ((1 << (_la - 222)) & ((1 << (FlinkSQLParser.KW_CREATE - 222)) | (1 << (FlinkSQLParser.KW_DESCRIBE - 222)) | (1 << (FlinkSQLParser.KW_DROP - 222)) | (1 << (FlinkSQLParser.KW_EXECUTE - 222)) | (1 << (FlinkSQLParser.KW_EXPLAIN - 222)))) !== 0) || _la === FlinkSQLParser.KW_INSERT || ((((_la - 332)) & ~0x1F) === 0 && ((1 << (_la - 332)) & ((1 << (FlinkSQLParser.KW_RESET - 332)) | (1 << (FlinkSQLParser.KW_SELECT - 332)) | (1 << (FlinkSQLParser.KW_SET - 332)) | (1 << (FlinkSQLParser.KW_SHOW - 332)))) !== 0) || ((((_la - 367)) & ~0x1F) === 0 && ((1 << (_la - 367)) & ((1 << (FlinkSQLParser.KW_TRUNCATE - 367)) | (1 << (FlinkSQLParser.KW_VALUES - 367)) | (1 << (FlinkSQLParser.KW_WITH - 367)) | (1 << (FlinkSQLParser.LR_BRACKET - 367)))) !== 0) || _la === FlinkSQLParser.SEMICOLON) {
				{
				this.state = 401;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case FlinkSQLParser.COMMENT_INPUT:
				case FlinkSQLParser.LINE_COMMENT:
					{
					this.state = 398;
					this.comment();
					}
					break;
				case FlinkSQLParser.KW_ADD:
				case FlinkSQLParser.KW_DESC:
				case FlinkSQLParser.KW_LOAD:
				case FlinkSQLParser.KW_REMOVE:
				case FlinkSQLParser.KW_REPLACE:
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
				case FlinkSQLParser.KW_TRUNCATE:
				case FlinkSQLParser.KW_VALUES:
				case FlinkSQLParser.KW_WITH:
				case FlinkSQLParser.LR_BRACKET:
					{
					this.state = 399;
					this.sqlStatement();
					}
					break;
				case FlinkSQLParser.SEMICOLON:
					{
					this.state = 400;
					this.emptyStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 405;
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
			this.state = 406;
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
			this.state = 441;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_REPLACE:
			case FlinkSQLParser.KW_ALTER:
			case FlinkSQLParser.KW_CREATE:
			case FlinkSQLParser.KW_DROP:
			case FlinkSQLParser.KW_TRUNCATE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 408;
				this.ddlStatement();
				this.state = 409;
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
				this.state = 411;
				this.dmlStatement();
				this.state = 412;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_DESC:
			case FlinkSQLParser.KW_DESCRIBE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 414;
				this.describeStatement();
				this.state = 415;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_EXPLAIN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 417;
				this.explainStatement();
				this.state = 418;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_USE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 420;
				this.useStatement();
				this.state = 421;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_SHOW:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 423;
				this.showStatememt();
				this.state = 424;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_LOAD:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 426;
				this.loadStatement();
				this.state = 427;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_UNLOAD:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 429;
				this.unloadStatememt();
				this.state = 430;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_SET:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 432;
				this.setStatememt();
				this.state = 433;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_RESET:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 435;
				this.resetStatememt();
				this.state = 436;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_ADD:
			case FlinkSQLParser.KW_REMOVE:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 438;
				this.jarStatememt();
				this.state = 439;
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
			this.state = 443;
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
			this.state = 461;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 445;
				this.createTable();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 446;
				this.replaceTable();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 447;
				this.truncateTable();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 448;
				this.alterTable();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 449;
				this.dropTable();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 450;
				this.createDatabase();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 451;
				this.alterDatabase();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 452;
				this.dropDatabase();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 453;
				this.createView();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 454;
				this.alertView();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 455;
				this.dropView();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 456;
				this.createFunction();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 457;
				this.alterFunction();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 458;
				this.dropFunction();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 459;
				this.createCatalog();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 460;
				this.dropCatalog();
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
			this.state = 465;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_SELECT:
			case FlinkSQLParser.KW_VALUES:
			case FlinkSQLParser.KW_WITH:
			case FlinkSQLParser.LR_BRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 463;
				this.queryStatement(0);
				}
				break;
			case FlinkSQLParser.KW_BEGIN:
			case FlinkSQLParser.KW_EXECUTE:
			case FlinkSQLParser.KW_INSERT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 464;
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
			this.state = 467;
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
			this.state = 468;
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
			this.state = 470;
			this.match(FlinkSQLParser.KW_EXPLAIN);
			this.state = 474;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_CHANGELOG_MODE:
			case FlinkSQLParser.KW_ESTIMATED_COST:
			case FlinkSQLParser.KW_JSON_EXECUTION_PLAN:
				{
				this.state = 471;
				this.explainDetails();
				}
				break;
			case FlinkSQLParser.KW_PLAN:
				{
				this.state = 472;
				this.match(FlinkSQLParser.KW_PLAN);
				this.state = 473;
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
			this.state = 479;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 476;
				this.dmlStatement();
				}
				break;

			case 2:
				{
				this.state = 477;
				this.insertSimpleStatement();
				}
				break;

			case 3:
				{
				this.state = 478;
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
			this.state = 481;
			this.explainDetail();
			this.state = 486;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 482;
				this.match(FlinkSQLParser.COMMA);
				this.state = 483;
				this.explainDetail();
				}
				}
				this.state = 488;
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
			this.state = 489;
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
			this.state = 497;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 491;
				this.match(FlinkSQLParser.KW_USE);
				this.state = 492;
				this.match(FlinkSQLParser.KW_CATALOG);
				this.state = 493;
				this.catalogPath();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 494;
				this.match(FlinkSQLParser.KW_USE);
				this.state = 495;
				this.databasePath();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 496;
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
			this.state = 499;
			this.match(FlinkSQLParser.KW_USE);
			this.state = 500;
			this.match(FlinkSQLParser.KW_MODULES);
			this.state = 501;
			this.uid();
			this.state = 506;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 502;
				this.match(FlinkSQLParser.COMMA);
				this.state = 503;
				this.uid();
				}
				}
				this.state = 508;
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
			this.state = 544;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 509;
				this.match(FlinkSQLParser.KW_SHOW);
				this.state = 510;
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
				this.state = 511;
				this.match(FlinkSQLParser.KW_SHOW);
				this.state = 512;
				this.match(FlinkSQLParser.KW_CURRENT);
				this.state = 513;
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
				this.state = 514;
				this.match(FlinkSQLParser.KW_SHOW);
				this.state = 515;
				this.match(FlinkSQLParser.KW_TABLES);
				this.state = 518;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_FROM || _la === FlinkSQLParser.KW_IN) {
					{
					this.state = 516;
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
					this.state = 517;
					this.tablePath();
					}
				}

				this.state = 521;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_LIKE || _la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 520;
					this.likePredicate();
					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 523;
				this.match(FlinkSQLParser.KW_SHOW);
				this.state = 524;
				this.match(FlinkSQLParser.KW_COLUMNS);
				this.state = 525;
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
				this.state = 526;
				this.uid();
				this.state = 528;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_LIKE || _la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 527;
					this.likePredicate();
					}
				}

				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 530;
				this.match(FlinkSQLParser.KW_SHOW);
				this.state = 531;
				this.match(FlinkSQLParser.KW_CREATE);
				this.state = 532;
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
				this.state = 533;
				this.uid();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 534;
				this.match(FlinkSQLParser.KW_SHOW);
				this.state = 536;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_USER) {
					{
					this.state = 535;
					this.match(FlinkSQLParser.KW_USER);
					}
				}

				this.state = 538;
				this.match(FlinkSQLParser.KW_FUNCTIONS);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 539;
				this.match(FlinkSQLParser.KW_SHOW);
				this.state = 541;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_FULL) {
					{
					this.state = 540;
					this.match(FlinkSQLParser.KW_FULL);
					}
				}

				this.state = 543;
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
			this.state = 546;
			this.match(FlinkSQLParser.KW_LOAD);
			this.state = 547;
			this.match(FlinkSQLParser.KW_MODULE);
			this.state = 548;
			this.uid();
			this.state = 551;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_WITH) {
				{
				this.state = 549;
				this.match(FlinkSQLParser.KW_WITH);
				this.state = 550;
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
			this.state = 553;
			this.match(FlinkSQLParser.KW_UNLOAD);
			this.state = 554;
			this.match(FlinkSQLParser.KW_MODULE);
			this.state = 555;
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
			this.state = 557;
			this.match(FlinkSQLParser.KW_SET);
			this.state = 559;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSQLParser.T__0) | (1 << FlinkSQLParser.KW_ADD) | (1 << FlinkSQLParser.KW_ADMIN) | (1 << FlinkSQLParser.KW_AFTER) | (1 << FlinkSQLParser.KW_ANALYZE) | (1 << FlinkSQLParser.KW_ASC) | (1 << FlinkSQLParser.KW_BEFORE) | (1 << FlinkSQLParser.KW_BYTES) | (1 << FlinkSQLParser.KW_CASCADE) | (1 << FlinkSQLParser.KW_CATALOG) | (1 << FlinkSQLParser.KW_CATALOGS) | (1 << FlinkSQLParser.KW_CENTURY) | (1 << FlinkSQLParser.KW_CHAIN) | (1 << FlinkSQLParser.KW_CHANGELOG_MODE) | (1 << FlinkSQLParser.KW_CHARACTERS) | (1 << FlinkSQLParser.KW_COMMENT) | (1 << FlinkSQLParser.KW_COMPACT) | (1 << FlinkSQLParser.KW_COLUMNS) | (1 << FlinkSQLParser.KW_CONSTRAINTS) | (1 << FlinkSQLParser.KW_CONSTRUCTOR) | (1 << FlinkSQLParser.KW_CUMULATE) | (1 << FlinkSQLParser.KW_DATA) | (1 << FlinkSQLParser.KW_DATABASE) | (1 << FlinkSQLParser.KW_DATABASES) | (1 << FlinkSQLParser.KW_DAYS) | (1 << FlinkSQLParser.KW_DECADE) | (1 << FlinkSQLParser.KW_DEFINED) | (1 << FlinkSQLParser.KW_DESC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSQLParser.KW_DESCRIPTOR - 32)) | (1 << (FlinkSQLParser.KW_DIV - 32)) | (1 << (FlinkSQLParser.KW_ENCODING - 32)) | (1 << (FlinkSQLParser.KW_ENFORCED - 32)) | (1 << (FlinkSQLParser.KW_ENGINE - 32)) | (1 << (FlinkSQLParser.KW_ERROR - 32)) | (1 << (FlinkSQLParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSQLParser.KW_EXCEPTION - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDE - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDING - 32)) | (1 << (FlinkSQLParser.KW_EXTENDED - 32)) | (1 << (FlinkSQLParser.KW_FILE - 32)) | (1 << (FlinkSQLParser.KW_FINAL - 32)) | (1 << (FlinkSQLParser.KW_FIRST - 32)) | (1 << (FlinkSQLParser.KW_FOLLOWING - 32)) | (1 << (FlinkSQLParser.KW_FORMAT - 32)) | (1 << (FlinkSQLParser.KW_FORTRAN - 32)) | (1 << (FlinkSQLParser.KW_FOUND - 32)) | (1 << (FlinkSQLParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSQLParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSQLParser.KW_GENERAL - 32)) | (1 << (FlinkSQLParser.KW_GENERATED - 32)) | (1 << (FlinkSQLParser.KW_GO - 32)) | (1 << (FlinkSQLParser.KW_GOTO - 32)) | (1 << (FlinkSQLParser.KW_GRANTED - 32)) | (1 << (FlinkSQLParser.KW_HOP - 32)) | (1 << (FlinkSQLParser.KW_HOURS - 32)) | (1 << (FlinkSQLParser.KW_IF - 32)) | (1 << (FlinkSQLParser.KW_IGNORE - 32)) | (1 << (FlinkSQLParser.KW_INCREMENT - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSQLParser.KW_INPUT - 64)) | (1 << (FlinkSQLParser.KW_INVOKER - 64)) | (1 << (FlinkSQLParser.KW_JAR - 64)) | (1 << (FlinkSQLParser.KW_JARS - 64)) | (1 << (FlinkSQLParser.KW_JAVA - 64)) | (1 << (FlinkSQLParser.KW_JSON - 64)) | (1 << (FlinkSQLParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSQLParser.KW_KEY - 64)) | (1 << (FlinkSQLParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSQLParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSQLParser.KW_LABEL - 64)) | (1 << (FlinkSQLParser.KW_LAST - 64)) | (1 << (FlinkSQLParser.KW_LENGTH - 64)) | (1 << (FlinkSQLParser.KW_LEVEL - 64)) | (1 << (FlinkSQLParser.KW_LOAD - 64)) | (1 << (FlinkSQLParser.KW_MAP - 64)) | (1 << (FlinkSQLParser.KW_MICROSECOND - 64)) | (1 << (FlinkSQLParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSQLParser.KW_MILLISECOND - 64)) | (1 << (FlinkSQLParser.KW_MINUTES - 64)) | (1 << (FlinkSQLParser.KW_MINVALUE - 64)) | (1 << (FlinkSQLParser.KW_MODIFY - 64)) | (1 << (FlinkSQLParser.KW_MODULES - 64)) | (1 << (FlinkSQLParser.KW_MONTHS - 64)) | (1 << (FlinkSQLParser.KW_NANOSECOND - 64)) | (1 << (FlinkSQLParser.KW_NULLS - 64)) | (1 << (FlinkSQLParser.KW_NUMBER - 64)) | (1 << (FlinkSQLParser.KW_OPTION - 64)) | (1 << (FlinkSQLParser.KW_OPTIONS - 64)) | (1 << (FlinkSQLParser.KW_ORDERING - 64)) | (1 << (FlinkSQLParser.KW_OUTPUT - 64)) | (1 << (FlinkSQLParser.KW_OVERWRITE - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSQLParser.KW_OVERWRITING - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONED - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONS - 96)) | (1 << (FlinkSQLParser.KW_PASSING - 96)) | (1 << (FlinkSQLParser.KW_PAST - 96)) | (1 << (FlinkSQLParser.KW_PATH - 96)) | (1 << (FlinkSQLParser.KW_PLACING - 96)) | (1 << (FlinkSQLParser.KW_PLAN - 96)) | (1 << (FlinkSQLParser.KW_PRECEDING - 96)) | (1 << (FlinkSQLParser.KW_PRESERVE - 96)) | (1 << (FlinkSQLParser.KW_PRIOR - 96)) | (1 << (FlinkSQLParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSQLParser.KW_PUBLIC - 96)) | (1 << (FlinkSQLParser.KW_PYTHON - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSQLParser.KW_QUARTER - 96)) | (1 << (FlinkSQLParser.KW_RAW - 96)) | (1 << (FlinkSQLParser.KW_READ - 96)) | (1 << (FlinkSQLParser.KW_RELATIVE - 96)) | (1 << (FlinkSQLParser.KW_REMOVE - 96)) | (1 << (FlinkSQLParser.KW_RENAME - 96)) | (1 << (FlinkSQLParser.KW_REPLACE - 96)) | (1 << (FlinkSQLParser.KW_RESPECT - 96)) | (1 << (FlinkSQLParser.KW_RESTART - 96)) | (1 << (FlinkSQLParser.KW_RESTRICT - 96)) | (1 << (FlinkSQLParser.KW_ROLE - 96)) | (1 << (FlinkSQLParser.KW_ROW_COUNT - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSQLParser.KW_SCALA - 128)) | (1 << (FlinkSQLParser.KW_SCALAR - 128)) | (1 << (FlinkSQLParser.KW_SCALE - 128)) | (1 << (FlinkSQLParser.KW_SCHEMA - 128)) | (1 << (FlinkSQLParser.KW_SECONDS - 128)) | (1 << (FlinkSQLParser.KW_SECTION - 128)) | (1 << (FlinkSQLParser.KW_SECURITY - 128)) | (1 << (FlinkSQLParser.KW_SELF - 128)) | (1 << (FlinkSQLParser.KW_SERVER - 128)) | (1 << (FlinkSQLParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSQLParser.KW_SESSION - 128)) | (1 << (FlinkSQLParser.KW_SETS - 128)) | (1 << (FlinkSQLParser.KW_SIMPLE - 128)) | (1 << (FlinkSQLParser.KW_SIZE - 128)) | (1 << (FlinkSQLParser.KW_SLIDE - 128)) | (1 << (FlinkSQLParser.KW_SOURCE - 128)) | (1 << (FlinkSQLParser.KW_SPACE - 128)) | (1 << (FlinkSQLParser.KW_STATE - 128)) | (1 << (FlinkSQLParser.KW_STATEMENT - 128)) | (1 << (FlinkSQLParser.KW_STEP - 128)) | (1 << (FlinkSQLParser.KW_STRING - 128)) | (1 << (FlinkSQLParser.KW_STRUCTURE - 128)) | (1 << (FlinkSQLParser.KW_STYLE - 128)) | (1 << (FlinkSQLParser.KW_TABLES - 128)) | (1 << (FlinkSQLParser.KW_TEMPORARY - 128)) | (1 << (FlinkSQLParser.KW_TIMECOL - 128)) | (1 << (FlinkSQLParser.KW_FLOOR - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_LTZ - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPADD - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPDIFF - 128)) | (1 << (FlinkSQLParser.KW_TRANSFORM - 128)) | (1 << (FlinkSQLParser.KW_TUMBLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSQLParser.KW_TYPE - 160)) | (1 << (FlinkSQLParser.KW_UNDER - 160)) | (1 << (FlinkSQLParser.KW_UNLOAD - 160)) | (1 << (FlinkSQLParser.KW_USAGE - 160)) | (1 << (FlinkSQLParser.KW_USE - 160)) | (1 << (FlinkSQLParser.KW_UTF16 - 160)) | (1 << (FlinkSQLParser.KW_UTF32 - 160)) | (1 << (FlinkSQLParser.KW_UTF8 - 160)) | (1 << (FlinkSQLParser.KW_VERSION - 160)) | (1 << (FlinkSQLParser.KW_VIEW - 160)) | (1 << (FlinkSQLParser.KW_VIEWS - 160)) | (1 << (FlinkSQLParser.KW_VIRTUAL - 160)) | (1 << (FlinkSQLParser.KW_WATERMARK - 160)) | (1 << (FlinkSQLParser.KW_WATERMARKS - 160)) | (1 << (FlinkSQLParser.KW_WEEK - 160)) | (1 << (FlinkSQLParser.KW_WORK - 160)) | (1 << (FlinkSQLParser.KW_WRAPPER - 160)) | (1 << (FlinkSQLParser.KW_YEARS - 160)) | (1 << (FlinkSQLParser.KW_ZONE - 160)))) !== 0) || ((((_la - 419)) & ~0x1F) === 0 && ((1 << (_la - 419)) & ((1 << (FlinkSQLParser.STRING_LITERAL - 419)) | (1 << (FlinkSQLParser.DIG_LITERAL - 419)) | (1 << (FlinkSQLParser.ID_LITERAL - 419)))) !== 0)) {
				{
				this.state = 558;
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
			this.state = 561;
			this.match(FlinkSQLParser.KW_RESET);
			this.state = 563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSQLParser.T__0) | (1 << FlinkSQLParser.KW_ADD) | (1 << FlinkSQLParser.KW_ADMIN) | (1 << FlinkSQLParser.KW_AFTER) | (1 << FlinkSQLParser.KW_ANALYZE) | (1 << FlinkSQLParser.KW_ASC) | (1 << FlinkSQLParser.KW_BEFORE) | (1 << FlinkSQLParser.KW_BYTES) | (1 << FlinkSQLParser.KW_CASCADE) | (1 << FlinkSQLParser.KW_CATALOG) | (1 << FlinkSQLParser.KW_CATALOGS) | (1 << FlinkSQLParser.KW_CENTURY) | (1 << FlinkSQLParser.KW_CHAIN) | (1 << FlinkSQLParser.KW_CHANGELOG_MODE) | (1 << FlinkSQLParser.KW_CHARACTERS) | (1 << FlinkSQLParser.KW_COMMENT) | (1 << FlinkSQLParser.KW_COMPACT) | (1 << FlinkSQLParser.KW_COLUMNS) | (1 << FlinkSQLParser.KW_CONSTRAINTS) | (1 << FlinkSQLParser.KW_CONSTRUCTOR) | (1 << FlinkSQLParser.KW_CUMULATE) | (1 << FlinkSQLParser.KW_DATA) | (1 << FlinkSQLParser.KW_DATABASE) | (1 << FlinkSQLParser.KW_DATABASES) | (1 << FlinkSQLParser.KW_DAYS) | (1 << FlinkSQLParser.KW_DECADE) | (1 << FlinkSQLParser.KW_DEFINED) | (1 << FlinkSQLParser.KW_DESC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSQLParser.KW_DESCRIPTOR - 32)) | (1 << (FlinkSQLParser.KW_DIV - 32)) | (1 << (FlinkSQLParser.KW_ENCODING - 32)) | (1 << (FlinkSQLParser.KW_ENFORCED - 32)) | (1 << (FlinkSQLParser.KW_ENGINE - 32)) | (1 << (FlinkSQLParser.KW_ERROR - 32)) | (1 << (FlinkSQLParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSQLParser.KW_EXCEPTION - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDE - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDING - 32)) | (1 << (FlinkSQLParser.KW_EXTENDED - 32)) | (1 << (FlinkSQLParser.KW_FILE - 32)) | (1 << (FlinkSQLParser.KW_FINAL - 32)) | (1 << (FlinkSQLParser.KW_FIRST - 32)) | (1 << (FlinkSQLParser.KW_FOLLOWING - 32)) | (1 << (FlinkSQLParser.KW_FORMAT - 32)) | (1 << (FlinkSQLParser.KW_FORTRAN - 32)) | (1 << (FlinkSQLParser.KW_FOUND - 32)) | (1 << (FlinkSQLParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSQLParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSQLParser.KW_GENERAL - 32)) | (1 << (FlinkSQLParser.KW_GENERATED - 32)) | (1 << (FlinkSQLParser.KW_GO - 32)) | (1 << (FlinkSQLParser.KW_GOTO - 32)) | (1 << (FlinkSQLParser.KW_GRANTED - 32)) | (1 << (FlinkSQLParser.KW_HOP - 32)) | (1 << (FlinkSQLParser.KW_HOURS - 32)) | (1 << (FlinkSQLParser.KW_IF - 32)) | (1 << (FlinkSQLParser.KW_IGNORE - 32)) | (1 << (FlinkSQLParser.KW_INCREMENT - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSQLParser.KW_INPUT - 64)) | (1 << (FlinkSQLParser.KW_INVOKER - 64)) | (1 << (FlinkSQLParser.KW_JAR - 64)) | (1 << (FlinkSQLParser.KW_JARS - 64)) | (1 << (FlinkSQLParser.KW_JAVA - 64)) | (1 << (FlinkSQLParser.KW_JSON - 64)) | (1 << (FlinkSQLParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSQLParser.KW_KEY - 64)) | (1 << (FlinkSQLParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSQLParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSQLParser.KW_LABEL - 64)) | (1 << (FlinkSQLParser.KW_LAST - 64)) | (1 << (FlinkSQLParser.KW_LENGTH - 64)) | (1 << (FlinkSQLParser.KW_LEVEL - 64)) | (1 << (FlinkSQLParser.KW_LOAD - 64)) | (1 << (FlinkSQLParser.KW_MAP - 64)) | (1 << (FlinkSQLParser.KW_MICROSECOND - 64)) | (1 << (FlinkSQLParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSQLParser.KW_MILLISECOND - 64)) | (1 << (FlinkSQLParser.KW_MINUTES - 64)) | (1 << (FlinkSQLParser.KW_MINVALUE - 64)) | (1 << (FlinkSQLParser.KW_MODIFY - 64)) | (1 << (FlinkSQLParser.KW_MODULES - 64)) | (1 << (FlinkSQLParser.KW_MONTHS - 64)) | (1 << (FlinkSQLParser.KW_NANOSECOND - 64)) | (1 << (FlinkSQLParser.KW_NULLS - 64)) | (1 << (FlinkSQLParser.KW_NUMBER - 64)) | (1 << (FlinkSQLParser.KW_OPTION - 64)) | (1 << (FlinkSQLParser.KW_OPTIONS - 64)) | (1 << (FlinkSQLParser.KW_ORDERING - 64)) | (1 << (FlinkSQLParser.KW_OUTPUT - 64)) | (1 << (FlinkSQLParser.KW_OVERWRITE - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSQLParser.KW_OVERWRITING - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONED - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONS - 96)) | (1 << (FlinkSQLParser.KW_PASSING - 96)) | (1 << (FlinkSQLParser.KW_PAST - 96)) | (1 << (FlinkSQLParser.KW_PATH - 96)) | (1 << (FlinkSQLParser.KW_PLACING - 96)) | (1 << (FlinkSQLParser.KW_PLAN - 96)) | (1 << (FlinkSQLParser.KW_PRECEDING - 96)) | (1 << (FlinkSQLParser.KW_PRESERVE - 96)) | (1 << (FlinkSQLParser.KW_PRIOR - 96)) | (1 << (FlinkSQLParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSQLParser.KW_PUBLIC - 96)) | (1 << (FlinkSQLParser.KW_PYTHON - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSQLParser.KW_QUARTER - 96)) | (1 << (FlinkSQLParser.KW_RAW - 96)) | (1 << (FlinkSQLParser.KW_READ - 96)) | (1 << (FlinkSQLParser.KW_RELATIVE - 96)) | (1 << (FlinkSQLParser.KW_REMOVE - 96)) | (1 << (FlinkSQLParser.KW_RENAME - 96)) | (1 << (FlinkSQLParser.KW_REPLACE - 96)) | (1 << (FlinkSQLParser.KW_RESPECT - 96)) | (1 << (FlinkSQLParser.KW_RESTART - 96)) | (1 << (FlinkSQLParser.KW_RESTRICT - 96)) | (1 << (FlinkSQLParser.KW_ROLE - 96)) | (1 << (FlinkSQLParser.KW_ROW_COUNT - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSQLParser.KW_SCALA - 128)) | (1 << (FlinkSQLParser.KW_SCALAR - 128)) | (1 << (FlinkSQLParser.KW_SCALE - 128)) | (1 << (FlinkSQLParser.KW_SCHEMA - 128)) | (1 << (FlinkSQLParser.KW_SECONDS - 128)) | (1 << (FlinkSQLParser.KW_SECTION - 128)) | (1 << (FlinkSQLParser.KW_SECURITY - 128)) | (1 << (FlinkSQLParser.KW_SELF - 128)) | (1 << (FlinkSQLParser.KW_SERVER - 128)) | (1 << (FlinkSQLParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSQLParser.KW_SESSION - 128)) | (1 << (FlinkSQLParser.KW_SETS - 128)) | (1 << (FlinkSQLParser.KW_SIMPLE - 128)) | (1 << (FlinkSQLParser.KW_SIZE - 128)) | (1 << (FlinkSQLParser.KW_SLIDE - 128)) | (1 << (FlinkSQLParser.KW_SOURCE - 128)) | (1 << (FlinkSQLParser.KW_SPACE - 128)) | (1 << (FlinkSQLParser.KW_STATE - 128)) | (1 << (FlinkSQLParser.KW_STATEMENT - 128)) | (1 << (FlinkSQLParser.KW_STEP - 128)) | (1 << (FlinkSQLParser.KW_STRING - 128)) | (1 << (FlinkSQLParser.KW_STRUCTURE - 128)) | (1 << (FlinkSQLParser.KW_STYLE - 128)) | (1 << (FlinkSQLParser.KW_TABLES - 128)) | (1 << (FlinkSQLParser.KW_TEMPORARY - 128)) | (1 << (FlinkSQLParser.KW_TIMECOL - 128)) | (1 << (FlinkSQLParser.KW_FLOOR - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_LTZ - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPADD - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPDIFF - 128)) | (1 << (FlinkSQLParser.KW_TRANSFORM - 128)) | (1 << (FlinkSQLParser.KW_TUMBLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSQLParser.KW_TYPE - 160)) | (1 << (FlinkSQLParser.KW_UNDER - 160)) | (1 << (FlinkSQLParser.KW_UNLOAD - 160)) | (1 << (FlinkSQLParser.KW_USAGE - 160)) | (1 << (FlinkSQLParser.KW_USE - 160)) | (1 << (FlinkSQLParser.KW_UTF16 - 160)) | (1 << (FlinkSQLParser.KW_UTF32 - 160)) | (1 << (FlinkSQLParser.KW_UTF8 - 160)) | (1 << (FlinkSQLParser.KW_VERSION - 160)) | (1 << (FlinkSQLParser.KW_VIEW - 160)) | (1 << (FlinkSQLParser.KW_VIEWS - 160)) | (1 << (FlinkSQLParser.KW_VIRTUAL - 160)) | (1 << (FlinkSQLParser.KW_WATERMARK - 160)) | (1 << (FlinkSQLParser.KW_WATERMARKS - 160)) | (1 << (FlinkSQLParser.KW_WEEK - 160)) | (1 << (FlinkSQLParser.KW_WORK - 160)) | (1 << (FlinkSQLParser.KW_WRAPPER - 160)) | (1 << (FlinkSQLParser.KW_YEARS - 160)) | (1 << (FlinkSQLParser.KW_ZONE - 160)))) !== 0) || ((((_la - 419)) & ~0x1F) === 0 && ((1 << (_la - 419)) & ((1 << (FlinkSQLParser.STRING_LITERAL - 419)) | (1 << (FlinkSQLParser.DIG_LITERAL - 419)) | (1 << (FlinkSQLParser.ID_LITERAL - 419)))) !== 0)) {
				{
				this.state = 562;
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
			this.state = 565;
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
			this.state = 566;
			this.match(FlinkSQLParser.KW_JAR);
			this.state = 567;
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
			this.state = 570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 569;
				this.match(FlinkSQLParser.SLASH_TEXT);
				}
				}
				this.state = 572;
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
	public replaceTable(): ReplaceTableContext {
		let _localctx: ReplaceTableContext = new ReplaceTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, FlinkSQLParser.RULE_replaceTable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 574;
			this.match(FlinkSQLParser.KW_REPLACE);
			this.state = 575;
			this.match(FlinkSQLParser.KW_TABLE);
			this.state = 576;
			this.tablePathCreate();
			this.state = 577;
			this.withOption();
			this.state = 580;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_AS) {
				{
				this.state = 578;
				this.match(FlinkSQLParser.KW_AS);
				this.state = 579;
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
	public createTable(): CreateTableContext {
		let _localctx: CreateTableContext = new CreateTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, FlinkSQLParser.RULE_createTable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 584;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 582;
				this.simpleCreateTable();
				}
				break;

			case 2:
				{
				this.state = 583;
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
		this.enterRule(_localctx, 46, FlinkSQLParser.RULE_simpleCreateTable);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 586;
			this.match(FlinkSQLParser.KW_CREATE);
			this.state = 588;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_TEMPORARY) {
				{
				this.state = 587;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				}
			}

			this.state = 590;
			this.match(FlinkSQLParser.KW_TABLE);
			this.state = 592;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				this.state = 591;
				this.ifNotExists();
				}
				break;
			}
			this.state = 594;
			this.tablePathCreate();
			this.state = 595;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 596;
			this.columnOptionDefinition();
			this.state = 601;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 597;
					this.match(FlinkSQLParser.COMMA);
					this.state = 598;
					this.columnOptionDefinition();
					}
					}
				}
				this.state = 603;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			}
			this.state = 606;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 604;
				this.match(FlinkSQLParser.COMMA);
				this.state = 605;
				this.watermarkDefinition();
				}
				break;
			}
			this.state = 610;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 608;
				this.match(FlinkSQLParser.COMMA);
				this.state = 609;
				this.tableConstraint();
				}
				break;
			}
			this.state = 614;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.COMMA) {
				{
				this.state = 612;
				this.match(FlinkSQLParser.COMMA);
				this.state = 613;
				this.selfDefinitionClause();
				}
			}

			this.state = 616;
			this.match(FlinkSQLParser.RR_BRACKET);
			this.state = 618;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_COMMENT) {
				{
				this.state = 617;
				this.commentSpec();
				}
			}

			this.state = 621;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_PARTITIONED) {
				{
				this.state = 620;
				this.partitionDefinition();
				}
			}

			this.state = 623;
			this.withOption();
			this.state = 625;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_LIKE) {
				{
				this.state = 624;
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
		this.enterRule(_localctx, 48, FlinkSQLParser.RULE_createTableAsSelect);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 627;
			this.match(FlinkSQLParser.KW_CREATE);
			this.state = 628;
			this.match(FlinkSQLParser.KW_TABLE);
			this.state = 630;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 629;
				this.ifNotExists();
				}
				break;
			}
			this.state = 632;
			this.tablePathCreate();
			this.state = 633;
			this.withOption();
			this.state = 636;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_AS) {
				{
				this.state = 634;
				this.match(FlinkSQLParser.KW_AS);
				this.state = 635;
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
		this.enterRule(_localctx, 50, FlinkSQLParser.RULE_columnOptionDefinition);
		try {
			this.state = 641;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 638;
				this.physicalColumnDefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 639;
				this.metadataColumnDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 640;
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
		this.enterRule(_localctx, 52, FlinkSQLParser.RULE_physicalColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 643;
			this.columnName();
			this.state = 644;
			this.columnType();
			this.state = 646;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_CONSTRAINT || ((((_la - 306)) & ~0x1F) === 0 && ((1 << (_la - 306)) & ((1 << (FlinkSQLParser.KW_NOT - 306)) | (1 << (FlinkSQLParser.KW_NULL - 306)) | (1 << (FlinkSQLParser.KW_PRIMARY - 306)))) !== 0)) {
				{
				this.state = 645;
				this.columnConstraint();
				}
			}

			this.state = 649;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 648;
				this.commentSpec();
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
	public columnName(): ColumnNameContext {
		let _localctx: ColumnNameContext = new ColumnNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, FlinkSQLParser.RULE_columnName);
		try {
			this.state = 653;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 651;
				this.uid();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 652;
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
		this.enterRule(_localctx, 56, FlinkSQLParser.RULE_columnNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 655;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 656;
			this.columnName();
			this.state = 661;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 657;
				this.match(FlinkSQLParser.COMMA);
				this.state = 658;
				this.columnName();
				}
				}
				this.state = 663;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 664;
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
		this.enterRule(_localctx, 58, FlinkSQLParser.RULE_columnType);
		let _la: number;
		try {
			this.state = 739;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_BOOLEAN:
			case FlinkSQLParser.KW_DATE:
			case FlinkSQLParser.KW_NULL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 666;
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
				this.state = 667;
				_localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSQLParser.KW_BYTES || _la === FlinkSQLParser.KW_STRING || _la === FlinkSQLParser.KW_TIMESTAMP_LTZ || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & ((1 << (FlinkSQLParser.KW_BIGINT - 194)) | (1 << (FlinkSQLParser.KW_BINARY - 194)) | (1 << (FlinkSQLParser.KW_CHAR - 194)))) !== 0) || _la === FlinkSQLParser.KW_DATETIME || _la === FlinkSQLParser.KW_INT || _la === FlinkSQLParser.KW_INTEGER || ((((_la - 346)) & ~0x1F) === 0 && ((1 << (_la - 346)) & ((1 << (FlinkSQLParser.KW_SMALLINT - 346)) | (1 << (FlinkSQLParser.KW_TIME - 346)) | (1 << (FlinkSQLParser.KW_TINYINT - 346)))) !== 0) || _la === FlinkSQLParser.KW_VARBINARY || _la === FlinkSQLParser.KW_VARCHAR)) {
					_localctx._typeName = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 669;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LR_BRACKET) {
					{
					this.state = 668;
					this.lengthOneDimension();
					}
				}

				}
				break;
			case FlinkSQLParser.KW_TIMESTAMP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 671;
				_localctx._typeName = this.match(FlinkSQLParser.KW_TIMESTAMP);
				this.state = 673;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LR_BRACKET) {
					{
					this.state = 672;
					this.lengthOneDimension();
					}
				}

				this.state = 681;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_WITH || _la === FlinkSQLParser.KW_WITHOUT) {
					{
					this.state = 675;
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
					this.state = 677;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSQLParser.KW_LOCAL) {
						{
						this.state = 676;
						this.match(FlinkSQLParser.KW_LOCAL);
						}
					}

					this.state = 679;
					this.match(FlinkSQLParser.KW_TIME);
					this.state = 680;
					this.match(FlinkSQLParser.KW_ZONE);
					}
				}

				}
				break;
			case FlinkSQLParser.KW_TIMESTAMP_3:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 683;
				_localctx._typeName = this.match(FlinkSQLParser.KW_TIMESTAMP_3);
				this.state = 685;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LR_BRACKET) {
					{
					this.state = 684;
					this.lengthOneDimension();
					}
				}

				this.state = 693;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_WITH || _la === FlinkSQLParser.KW_WITHOUT) {
					{
					this.state = 687;
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
					this.state = 689;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSQLParser.KW_LOCAL) {
						{
						this.state = 688;
						this.match(FlinkSQLParser.KW_LOCAL);
						}
					}

					this.state = 691;
					this.match(FlinkSQLParser.KW_TIME);
					this.state = 692;
					this.match(FlinkSQLParser.KW_ZONE);
					}
				}

				}
				break;
			case FlinkSQLParser.KW_TIMESTAMP_6:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 695;
				_localctx._typeName = this.match(FlinkSQLParser.KW_TIMESTAMP_6);
				this.state = 697;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LR_BRACKET) {
					{
					this.state = 696;
					this.lengthOneDimension();
					}
				}

				this.state = 705;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_WITH || _la === FlinkSQLParser.KW_WITHOUT) {
					{
					this.state = 699;
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
					this.state = 701;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSQLParser.KW_LOCAL) {
						{
						this.state = 700;
						this.match(FlinkSQLParser.KW_LOCAL);
						}
					}

					this.state = 703;
					this.match(FlinkSQLParser.KW_TIME);
					this.state = 704;
					this.match(FlinkSQLParser.KW_ZONE);
					}
				}

				}
				break;
			case FlinkSQLParser.KW_TIMESTAMP_9:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 707;
				_localctx._typeName = this.match(FlinkSQLParser.KW_TIMESTAMP_9);
				this.state = 709;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LR_BRACKET) {
					{
					this.state = 708;
					this.lengthOneDimension();
					}
				}

				this.state = 717;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_WITH || _la === FlinkSQLParser.KW_WITHOUT) {
					{
					this.state = 711;
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
					this.state = 713;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSQLParser.KW_LOCAL) {
						{
						this.state = 712;
						this.match(FlinkSQLParser.KW_LOCAL);
						}
					}

					this.state = 715;
					this.match(FlinkSQLParser.KW_TIME);
					this.state = 716;
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
				this.state = 719;
				_localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (FlinkSQLParser.KW_DEC - 232)) | (1 << (FlinkSQLParser.KW_DECIMAL - 232)) | (1 << (FlinkSQLParser.KW_DOUBLE - 232)) | (1 << (FlinkSQLParser.KW_FLOAT - 232)))) !== 0) || _la === FlinkSQLParser.KW_NUMERIC)) {
					_localctx._typeName = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 721;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LR_BRACKET) {
					{
					this.state = 720;
					this.lengthTwoOptionalDimension();
					}
				}

				}
				break;
			case FlinkSQLParser.KW_ARRAY:
			case FlinkSQLParser.KW_MULTISET:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 723;
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
				this.state = 725;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LESS_SYMBOL) {
					{
					this.state = 724;
					this.lengthOneTypeDimension();
					}
				}

				}
				break;
			case FlinkSQLParser.KW_MAP:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 727;
				_localctx._type = this.match(FlinkSQLParser.KW_MAP);
				this.state = 729;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LESS_SYMBOL) {
					{
					this.state = 728;
					this.mapTypeDimension();
					}
				}

				}
				break;
			case FlinkSQLParser.KW_ROW:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 731;
				_localctx._type = this.match(FlinkSQLParser.KW_ROW);
				this.state = 733;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LESS_SYMBOL) {
					{
					this.state = 732;
					this.rowTypeDimension();
					}
				}

				}
				break;
			case FlinkSQLParser.KW_RAW:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 735;
				_localctx._type = this.match(FlinkSQLParser.KW_RAW);
				this.state = 737;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LR_BRACKET) {
					{
					this.state = 736;
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
		this.enterRule(_localctx, 60, FlinkSQLParser.RULE_lengthOneDimension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 741;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 742;
			this.decimalLiteral();
			this.state = 743;
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
		this.enterRule(_localctx, 62, FlinkSQLParser.RULE_lengthTwoOptionalDimension);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 745;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 746;
			this.decimalLiteral();
			this.state = 749;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.COMMA) {
				{
				this.state = 747;
				this.match(FlinkSQLParser.COMMA);
				this.state = 748;
				this.decimalLiteral();
				}
			}

			this.state = 751;
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
		this.enterRule(_localctx, 64, FlinkSQLParser.RULE_lengthTwoStringDimension);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 753;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 754;
			this.stringLiteral();
			this.state = 757;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.COMMA) {
				{
				this.state = 755;
				this.match(FlinkSQLParser.COMMA);
				this.state = 756;
				this.stringLiteral();
				}
			}

			this.state = 759;
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
		this.enterRule(_localctx, 66, FlinkSQLParser.RULE_lengthOneTypeDimension);
		let _la: number;
		try {
			_localctx = new LengthSymbolsTypeDimensionContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 761;
			this.match(FlinkSQLParser.LESS_SYMBOL);
			this.state = 762;
			this.columnType();
			this.state = 767;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 763;
				this.match(FlinkSQLParser.COMMA);
				this.state = 764;
				this.columnType();
				}
				}
				this.state = 769;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 770;
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
		this.enterRule(_localctx, 68, FlinkSQLParser.RULE_mapTypeDimension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 772;
			this.match(FlinkSQLParser.LESS_SYMBOL);
			this.state = 773;
			this.columnType();
			{
			this.state = 774;
			this.match(FlinkSQLParser.COMMA);
			this.state = 775;
			this.columnType();
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
	public rowTypeDimension(): RowTypeDimensionContext {
		let _localctx: RowTypeDimensionContext = new RowTypeDimensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, FlinkSQLParser.RULE_rowTypeDimension);
		let _la: number;
		try {
			_localctx = new RowSymbolsTypeDimensionContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 779;
			this.match(FlinkSQLParser.LESS_SYMBOL);
			this.state = 780;
			this.columnName();
			this.state = 781;
			this.columnType();
			this.state = 788;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 782;
				this.match(FlinkSQLParser.COMMA);
				this.state = 783;
				this.columnName();
				this.state = 784;
				this.columnType();
				}
				}
				this.state = 790;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 791;
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
		this.enterRule(_localctx, 72, FlinkSQLParser.RULE_columnConstraint);
		let _la: number;
		try {
			this.state = 807;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_CONSTRAINT:
			case FlinkSQLParser.KW_PRIMARY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 795;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_CONSTRAINT) {
					{
					this.state = 793;
					this.match(FlinkSQLParser.KW_CONSTRAINT);
					this.state = 794;
					this.constraintName();
					}
				}

				this.state = 797;
				this.match(FlinkSQLParser.KW_PRIMARY);
				this.state = 798;
				this.match(FlinkSQLParser.KW_KEY);
				this.state = 801;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 799;
					this.match(FlinkSQLParser.KW_NOT);
					this.state = 800;
					this.match(FlinkSQLParser.KW_ENFORCED);
					}
				}

				}
				break;
			case FlinkSQLParser.KW_NOT:
			case FlinkSQLParser.KW_NULL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 804;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 803;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 806;
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
		this.enterRule(_localctx, 74, FlinkSQLParser.RULE_commentSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 809;
			this.match(FlinkSQLParser.KW_COMMENT);
			this.state = 810;
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
		this.enterRule(_localctx, 76, FlinkSQLParser.RULE_metadataColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 812;
			this.columnName();
			this.state = 813;
			this.columnType();
			this.state = 814;
			this.match(FlinkSQLParser.KW_METADATA);
			this.state = 817;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_FROM) {
				{
				this.state = 815;
				this.match(FlinkSQLParser.KW_FROM);
				this.state = 816;
				this.metadataKey();
				}
			}

			this.state = 820;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_VIRTUAL) {
				{
				this.state = 819;
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
		this.enterRule(_localctx, 78, FlinkSQLParser.RULE_metadataKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 822;
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
		this.enterRule(_localctx, 80, FlinkSQLParser.RULE_computedColumnDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 824;
			this.columnName();
			this.state = 825;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 826;
			this.computedColumnExpression();
			this.state = 828;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 827;
				this.commentSpec();
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
	public computedColumnExpression(): ComputedColumnExpressionContext {
		let _localctx: ComputedColumnExpressionContext = new ComputedColumnExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, FlinkSQLParser.RULE_computedColumnExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 830;
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
		this.enterRule(_localctx, 84, FlinkSQLParser.RULE_watermarkDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 832;
			this.match(FlinkSQLParser.KW_WATERMARK);
			this.state = 833;
			this.match(FlinkSQLParser.KW_FOR);
			this.state = 834;
			this.expression();
			this.state = 835;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 836;
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
		this.enterRule(_localctx, 86, FlinkSQLParser.RULE_tableConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 840;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_CONSTRAINT) {
				{
				this.state = 838;
				this.match(FlinkSQLParser.KW_CONSTRAINT);
				this.state = 839;
				this.constraintName();
				}
			}

			this.state = 842;
			this.match(FlinkSQLParser.KW_PRIMARY);
			this.state = 843;
			this.match(FlinkSQLParser.KW_KEY);
			this.state = 844;
			this.columnNameList();
			this.state = 845;
			this.match(FlinkSQLParser.KW_NOT);
			this.state = 846;
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
		this.enterRule(_localctx, 88, FlinkSQLParser.RULE_constraintName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 848;
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
		this.enterRule(_localctx, 90, FlinkSQLParser.RULE_selfDefinitionClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 850;
			this.match(FlinkSQLParser.KW_PERIOD);
			this.state = 851;
			this.match(FlinkSQLParser.KW_FOR);
			this.state = 852;
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
		this.enterRule(_localctx, 92, FlinkSQLParser.RULE_partitionDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 854;
			this.match(FlinkSQLParser.KW_PARTITIONED);
			this.state = 855;
			this.match(FlinkSQLParser.KW_BY);
			this.state = 856;
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
		this.enterRule(_localctx, 94, FlinkSQLParser.RULE_transformList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 858;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 859;
			this.transform();
			this.state = 864;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 860;
				this.match(FlinkSQLParser.COMMA);
				this.state = 861;
				this.transform();
				}
				}
				this.state = 866;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 867;
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
		this.enterRule(_localctx, 96, FlinkSQLParser.RULE_transform);
		let _la: number;
		try {
			this.state = 882;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				_localctx = new IdentityTransformContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 869;
				this.qualifiedName();
				}
				break;

			case 2:
				_localctx = new ApplyTransformContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 870;
				(_localctx as ApplyTransformContext)._transformName = this.identifier();
				this.state = 871;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 872;
				this.transformArgument();
				this.state = 877;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 873;
					this.match(FlinkSQLParser.COMMA);
					this.state = 874;
					this.transformArgument();
					}
					}
					this.state = 879;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 880;
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
		this.enterRule(_localctx, 98, FlinkSQLParser.RULE_transformArgument);
		try {
			this.state = 886;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 884;
				this.qualifiedName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 885;
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
		this.enterRule(_localctx, 100, FlinkSQLParser.RULE_likeDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 888;
			this.match(FlinkSQLParser.KW_LIKE);
			this.state = 889;
			this.tablePath();
			this.state = 898;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.LR_BRACKET) {
				{
				this.state = 890;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 894;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.KW_EXCLUDING || _la === FlinkSQLParser.KW_OVERWRITING || _la === FlinkSQLParser.KW_INCLUDING) {
					{
					{
					this.state = 891;
					this.likeOption();
					}
					}
					this.state = 896;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 897;
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
		this.enterRule(_localctx, 102, FlinkSQLParser.RULE_likeOption);
		let _la: number;
		try {
			this.state = 904;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 900;
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
				this.state = 901;
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
				this.state = 902;
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
				this.state = 903;
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
		this.enterRule(_localctx, 104, FlinkSQLParser.RULE_createCatalog);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 906;
			this.match(FlinkSQLParser.KW_CREATE);
			this.state = 907;
			this.match(FlinkSQLParser.KW_CATALOG);
			this.state = 908;
			this.uid();
			this.state = 909;
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
		this.enterRule(_localctx, 106, FlinkSQLParser.RULE_createDatabase);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 911;
			this.match(FlinkSQLParser.KW_CREATE);
			this.state = 912;
			this.match(FlinkSQLParser.KW_DATABASE);
			this.state = 914;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				{
				this.state = 913;
				this.ifNotExists();
				}
				break;
			}
			this.state = 916;
			this.databasePathCreate();
			this.state = 918;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_COMMENT) {
				{
				this.state = 917;
				this.commentSpec();
				}
			}

			this.state = 921;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_WITH) {
				{
				this.state = 920;
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
		this.enterRule(_localctx, 108, FlinkSQLParser.RULE_createView);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 923;
			this.match(FlinkSQLParser.KW_CREATE);
			this.state = 925;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_TEMPORARY) {
				{
				this.state = 924;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				}
			}

			this.state = 927;
			this.match(FlinkSQLParser.KW_VIEW);
			this.state = 929;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				{
				this.state = 928;
				this.ifNotExists();
				}
				break;
			}
			this.state = 931;
			this.uid();
			this.state = 933;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.LR_BRACKET) {
				{
				this.state = 932;
				this.columnNameList();
				}
			}

			this.state = 936;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_COMMENT) {
				{
				this.state = 935;
				this.commentSpec();
				}
			}

			this.state = 938;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 939;
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
		this.enterRule(_localctx, 110, FlinkSQLParser.RULE_createFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 941;
			this.match(FlinkSQLParser.KW_CREATE);
			this.state = 945;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				{
				this.state = 942;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				}
				break;

			case 2:
				{
				this.state = 943;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				this.state = 944;
				this.match(FlinkSQLParser.KW_SYSTEM);
				}
				break;
			}
			this.state = 947;
			this.match(FlinkSQLParser.KW_FUNCTION);
			this.state = 949;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				{
				this.state = 948;
				this.ifNotExists();
				}
				break;
			}
			this.state = 951;
			this.functionName();
			this.state = 952;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 953;
			this.identifier();
			this.state = 956;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_LANGUAGE) {
				{
				this.state = 954;
				this.match(FlinkSQLParser.KW_LANGUAGE);
				this.state = 955;
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

			this.state = 959;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_USING) {
				{
				this.state = 958;
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
		this.enterRule(_localctx, 112, FlinkSQLParser.RULE_usingClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 961;
			this.match(FlinkSQLParser.KW_USING);
			this.state = 962;
			this.match(FlinkSQLParser.KW_JAR);
			this.state = 963;
			this.jarFileName();
			this.state = 969;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 964;
				this.match(FlinkSQLParser.COMMA);
				this.state = 965;
				this.match(FlinkSQLParser.KW_JAR);
				this.state = 966;
				this.jarFileName();
				}
				}
				this.state = 971;
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
		this.enterRule(_localctx, 114, FlinkSQLParser.RULE_jarFileName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 972;
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
		this.enterRule(_localctx, 116, FlinkSQLParser.RULE_alterTable);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1162;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
			case 1:
				_localctx = new AlterContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 974;
				this.match(FlinkSQLParser.KW_ALTER);
				this.state = 975;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 977;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
				case 1:
					{
					this.state = 976;
					this.ifExists();
					}
					break;
				}
				this.state = 979;
				this.tablePath();
				this.state = 985;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
				case 1:
					{
					this.state = 980;
					this.renameDefinition();
					}
					break;

				case 2:
					{
					this.state = 981;
					this.setKeyValueDefinition();
					}
					break;

				case 3:
					{
					this.state = 982;
					this.addConstraint();
					}
					break;

				case 4:
					{
					this.state = 983;
					this.dropConstraint();
					}
					break;

				case 5:
					{
					this.state = 984;
					this.addUnique();
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new AddOrModifyNewColumnContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 987;
				this.match(FlinkSQLParser.KW_ALTER);
				this.state = 988;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 990;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
				case 1:
					{
					this.state = 989;
					this.ifExists();
					}
					break;
				}
				this.state = 992;
				this.tablePath();
				this.state = 993;
				_la = this._input.LA(1);
				if (!(_la === FlinkSQLParser.KW_ADD || _la === FlinkSQLParser.KW_MODIFY)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 994;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 995;
				this.columnOptionDefinition();
				this.state = 997;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_AFTER || _la === FlinkSQLParser.KW_BEFORE || _la === FlinkSQLParser.KW_FIRST || _la === FlinkSQLParser.KW_LAST) {
					{
					this.state = 996;
					this.coloumPosition();
					}
				}

				this.state = 1006;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 999;
						this.match(FlinkSQLParser.COMMA);
						this.state = 1000;
						this.columnOptionDefinition();
						this.state = 1002;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FlinkSQLParser.KW_AFTER || _la === FlinkSQLParser.KW_BEFORE || _la === FlinkSQLParser.KW_FIRST || _la === FlinkSQLParser.KW_LAST) {
							{
							this.state = 1001;
							this.coloumPosition();
							}
						}

						}
						}
					}
					this.state = 1008;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
				}
				this.state = 1011;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
				case 1:
					{
					this.state = 1009;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1010;
					this.watermarkDefinition();
					}
					break;
				}
				this.state = 1015;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
				case 1:
					{
					this.state = 1013;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1014;
					this.tableConstraint();
					}
					break;
				}
				this.state = 1019;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.COMMA) {
					{
					this.state = 1017;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1018;
					this.selfDefinitionClause();
					}
				}

				this.state = 1021;
				this.match(FlinkSQLParser.RR_BRACKET);
				this.state = 1023;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_COMMENT) {
					{
					this.state = 1022;
					this.commentSpec();
					}
				}

				this.state = 1026;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_PARTITIONED) {
					{
					this.state = 1025;
					this.partitionDefinition();
					}
				}

				this.state = 1028;
				this.withOption();
				}
				break;

			case 3:
				_localctx = new AddOrModifyNewColumnsContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1030;
				this.match(FlinkSQLParser.KW_ALTER);
				this.state = 1031;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 1033;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
				case 1:
					{
					this.state = 1032;
					this.ifExists();
					}
					break;
				}
				this.state = 1035;
				this.tablePath();
				this.state = 1036;
				_la = this._input.LA(1);
				if (!(_la === FlinkSQLParser.KW_ADD || _la === FlinkSQLParser.KW_MODIFY)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1037;
				this.columnOptionDefinition();
				this.state = 1039;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_AFTER || _la === FlinkSQLParser.KW_BEFORE || _la === FlinkSQLParser.KW_FIRST || _la === FlinkSQLParser.KW_LAST) {
					{
					this.state = 1038;
					this.coloumPosition();
					}
				}

				this.state = 1042;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_COMMENT) {
					{
					this.state = 1041;
					this.commentSpec();
					}
				}

				}
				break;

			case 4:
				_localctx = new AddNewPartitionsContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1044;
				this.match(FlinkSQLParser.KW_ALTER);
				this.state = 1045;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 1047;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
				case 1:
					{
					this.state = 1046;
					this.ifExists();
					}
					break;
				}
				this.state = 1049;
				this.tablePath();
				this.state = 1050;
				this.match(FlinkSQLParser.KW_ADD);
				this.state = 1058;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.KW_PARTITION) {
					{
					{
					this.state = 1051;
					this.match(FlinkSQLParser.KW_PARTITION);
					this.state = 1052;
					this.tablePropertyList();
					this.state = 1053;
					this.match(FlinkSQLParser.KW_WITH);
					this.state = 1054;
					this.tablePropertyList();
					}
					}
					this.state = 1060;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 5:
				_localctx = new DropAcolumnContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1061;
				this.match(FlinkSQLParser.KW_ALTER);
				this.state = 1062;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 1064;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
				case 1:
					{
					this.state = 1063;
					this.ifExists();
					}
					break;
				}
				this.state = 1066;
				this.tablePath();
				this.state = 1067;
				this.match(FlinkSQLParser.KW_DROP);
				this.state = 1068;
				this.uid();
				}
				break;

			case 6:
				_localctx = new DropColumnListContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1070;
				this.match(FlinkSQLParser.KW_ALTER);
				this.state = 1071;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 1073;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
				case 1:
					{
					this.state = 1072;
					this.ifExists();
					}
					break;
				}
				this.state = 1075;
				this.tablePath();
				this.state = 1076;
				this.match(FlinkSQLParser.KW_DROP);
				this.state = 1077;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1078;
				this.uid();
				this.state = 1083;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1079;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1080;
					this.uid();
					}
					}
					this.state = 1085;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1086;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 7:
				_localctx = new DropPrimaryKeyContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1088;
				this.match(FlinkSQLParser.KW_ALTER);
				this.state = 1089;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 1091;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
				case 1:
					{
					this.state = 1090;
					this.ifExists();
					}
					break;
				}
				this.state = 1093;
				this.tablePath();
				this.state = 1094;
				this.match(FlinkSQLParser.KW_DROP);
				this.state = 1095;
				this.match(FlinkSQLParser.KW_PRIMARY);
				this.state = 1096;
				this.match(FlinkSQLParser.KW_KEY);
				}
				break;

			case 8:
				_localctx = new DropPartitionsContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1098;
				this.match(FlinkSQLParser.KW_ALTER);
				this.state = 1099;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 1101;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
				case 1:
					{
					this.state = 1100;
					this.ifExists();
					}
					break;
				}
				this.state = 1103;
				this.tablePath();
				this.state = 1104;
				this.match(FlinkSQLParser.KW_DROP);
				this.state = 1105;
				this.match(FlinkSQLParser.KW_PARTITION);
				this.state = 1106;
				this.tablePropertyList();
				this.state = 1112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1107;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1108;
					this.match(FlinkSQLParser.KW_PARTITION);
					this.state = 1109;
					this.tablePropertyList();
					}
					}
					this.state = 1114;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 9:
				_localctx = new DropWatermarkContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1115;
				this.match(FlinkSQLParser.KW_ALTER);
				this.state = 1116;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 1118;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
				case 1:
					{
					this.state = 1117;
					this.ifExists();
					}
					break;
				}
				this.state = 1120;
				this.tablePath();
				this.state = 1121;
				this.match(FlinkSQLParser.KW_DROP);
				this.state = 1122;
				this.match(FlinkSQLParser.KW_WATERMARK);
				}
				break;

			case 10:
				_localctx = new RenameColumnContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1124;
				this.match(FlinkSQLParser.KW_ALTER);
				this.state = 1125;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 1127;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
				case 1:
					{
					this.state = 1126;
					this.ifExists();
					}
					break;
				}
				this.state = 1129;
				this.tablePath();
				this.state = 1130;
				this.match(FlinkSQLParser.KW_RENAME);
				this.state = 1131;
				this.uid();
				this.state = 1132;
				this.match(FlinkSQLParser.KW_TO);
				this.state = 1133;
				this.uid();
				}
				break;

			case 11:
				_localctx = new RenameTableContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1135;
				this.match(FlinkSQLParser.KW_ALTER);
				this.state = 1136;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 1138;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
				case 1:
					{
					this.state = 1137;
					this.ifExists();
					}
					break;
				}
				this.state = 1140;
				this.tablePath();
				this.state = 1141;
				this.match(FlinkSQLParser.KW_RENAME);
				this.state = 1142;
				this.tablePath();
				}
				break;

			case 12:
				_localctx = new SetPropertiyContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1144;
				this.match(FlinkSQLParser.KW_ALTER);
				this.state = 1145;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 1147;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
				case 1:
					{
					this.state = 1146;
					this.ifExists();
					}
					break;
				}
				this.state = 1149;
				this.tablePath();
				this.state = 1150;
				this.match(FlinkSQLParser.KW_SET);
				this.state = 1151;
				this.partitionDefinition();
				}
				break;

			case 13:
				_localctx = new ResetPropertiyContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1153;
				this.match(FlinkSQLParser.KW_ALTER);
				this.state = 1154;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 1156;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
				case 1:
					{
					this.state = 1155;
					this.ifExists();
					}
					break;
				}
				this.state = 1158;
				this.tablePath();
				this.state = 1159;
				this.match(FlinkSQLParser.KW_RESET);
				this.state = 1160;
				this.transformList();
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
	public coloumPosition(): ColoumPositionContext {
		let _localctx: ColoumPositionContext = new ColoumPositionContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, FlinkSQLParser.RULE_coloumPosition);
		let _la: number;
		try {
			this.state = 1167;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_FIRST:
			case FlinkSQLParser.KW_LAST:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1164;
				_la = this._input.LA(1);
				if (!(_la === FlinkSQLParser.KW_FIRST || _la === FlinkSQLParser.KW_LAST)) {
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
			case FlinkSQLParser.KW_AFTER:
			case FlinkSQLParser.KW_BEFORE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1165;
				_la = this._input.LA(1);
				if (!(_la === FlinkSQLParser.KW_AFTER || _la === FlinkSQLParser.KW_BEFORE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1166;
				this.uid();
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
	public renameDefinition(): RenameDefinitionContext {
		let _localctx: RenameDefinitionContext = new RenameDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, FlinkSQLParser.RULE_renameDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1169;
			this.match(FlinkSQLParser.KW_RENAME);
			this.state = 1171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSQLParser.T__0) | (1 << FlinkSQLParser.KW_ADD) | (1 << FlinkSQLParser.KW_ADMIN) | (1 << FlinkSQLParser.KW_AFTER) | (1 << FlinkSQLParser.KW_ANALYZE) | (1 << FlinkSQLParser.KW_ASC) | (1 << FlinkSQLParser.KW_BEFORE) | (1 << FlinkSQLParser.KW_BYTES) | (1 << FlinkSQLParser.KW_CASCADE) | (1 << FlinkSQLParser.KW_CATALOG) | (1 << FlinkSQLParser.KW_CATALOGS) | (1 << FlinkSQLParser.KW_CENTURY) | (1 << FlinkSQLParser.KW_CHAIN) | (1 << FlinkSQLParser.KW_CHANGELOG_MODE) | (1 << FlinkSQLParser.KW_CHARACTERS) | (1 << FlinkSQLParser.KW_COMMENT) | (1 << FlinkSQLParser.KW_COMPACT) | (1 << FlinkSQLParser.KW_COLUMNS) | (1 << FlinkSQLParser.KW_CONSTRAINTS) | (1 << FlinkSQLParser.KW_CONSTRUCTOR) | (1 << FlinkSQLParser.KW_CUMULATE) | (1 << FlinkSQLParser.KW_DATA) | (1 << FlinkSQLParser.KW_DATABASE) | (1 << FlinkSQLParser.KW_DATABASES) | (1 << FlinkSQLParser.KW_DAYS) | (1 << FlinkSQLParser.KW_DECADE) | (1 << FlinkSQLParser.KW_DEFINED) | (1 << FlinkSQLParser.KW_DESC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSQLParser.KW_DESCRIPTOR - 32)) | (1 << (FlinkSQLParser.KW_DIV - 32)) | (1 << (FlinkSQLParser.KW_ENCODING - 32)) | (1 << (FlinkSQLParser.KW_ENFORCED - 32)) | (1 << (FlinkSQLParser.KW_ENGINE - 32)) | (1 << (FlinkSQLParser.KW_ERROR - 32)) | (1 << (FlinkSQLParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSQLParser.KW_EXCEPTION - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDE - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDING - 32)) | (1 << (FlinkSQLParser.KW_EXTENDED - 32)) | (1 << (FlinkSQLParser.KW_FILE - 32)) | (1 << (FlinkSQLParser.KW_FINAL - 32)) | (1 << (FlinkSQLParser.KW_FIRST - 32)) | (1 << (FlinkSQLParser.KW_FOLLOWING - 32)) | (1 << (FlinkSQLParser.KW_FORMAT - 32)) | (1 << (FlinkSQLParser.KW_FORTRAN - 32)) | (1 << (FlinkSQLParser.KW_FOUND - 32)) | (1 << (FlinkSQLParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSQLParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSQLParser.KW_GENERAL - 32)) | (1 << (FlinkSQLParser.KW_GENERATED - 32)) | (1 << (FlinkSQLParser.KW_GO - 32)) | (1 << (FlinkSQLParser.KW_GOTO - 32)) | (1 << (FlinkSQLParser.KW_GRANTED - 32)) | (1 << (FlinkSQLParser.KW_HOP - 32)) | (1 << (FlinkSQLParser.KW_HOURS - 32)) | (1 << (FlinkSQLParser.KW_IF - 32)) | (1 << (FlinkSQLParser.KW_IGNORE - 32)) | (1 << (FlinkSQLParser.KW_INCREMENT - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSQLParser.KW_INPUT - 64)) | (1 << (FlinkSQLParser.KW_INVOKER - 64)) | (1 << (FlinkSQLParser.KW_JAR - 64)) | (1 << (FlinkSQLParser.KW_JARS - 64)) | (1 << (FlinkSQLParser.KW_JAVA - 64)) | (1 << (FlinkSQLParser.KW_JSON - 64)) | (1 << (FlinkSQLParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSQLParser.KW_KEY - 64)) | (1 << (FlinkSQLParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSQLParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSQLParser.KW_LABEL - 64)) | (1 << (FlinkSQLParser.KW_LAST - 64)) | (1 << (FlinkSQLParser.KW_LENGTH - 64)) | (1 << (FlinkSQLParser.KW_LEVEL - 64)) | (1 << (FlinkSQLParser.KW_LOAD - 64)) | (1 << (FlinkSQLParser.KW_MAP - 64)) | (1 << (FlinkSQLParser.KW_MICROSECOND - 64)) | (1 << (FlinkSQLParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSQLParser.KW_MILLISECOND - 64)) | (1 << (FlinkSQLParser.KW_MINUTES - 64)) | (1 << (FlinkSQLParser.KW_MINVALUE - 64)) | (1 << (FlinkSQLParser.KW_MODIFY - 64)) | (1 << (FlinkSQLParser.KW_MODULES - 64)) | (1 << (FlinkSQLParser.KW_MONTHS - 64)) | (1 << (FlinkSQLParser.KW_NANOSECOND - 64)) | (1 << (FlinkSQLParser.KW_NULLS - 64)) | (1 << (FlinkSQLParser.KW_NUMBER - 64)) | (1 << (FlinkSQLParser.KW_OPTION - 64)) | (1 << (FlinkSQLParser.KW_OPTIONS - 64)) | (1 << (FlinkSQLParser.KW_ORDERING - 64)) | (1 << (FlinkSQLParser.KW_OUTPUT - 64)) | (1 << (FlinkSQLParser.KW_OVERWRITE - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSQLParser.KW_OVERWRITING - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONED - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONS - 96)) | (1 << (FlinkSQLParser.KW_PASSING - 96)) | (1 << (FlinkSQLParser.KW_PAST - 96)) | (1 << (FlinkSQLParser.KW_PATH - 96)) | (1 << (FlinkSQLParser.KW_PLACING - 96)) | (1 << (FlinkSQLParser.KW_PLAN - 96)) | (1 << (FlinkSQLParser.KW_PRECEDING - 96)) | (1 << (FlinkSQLParser.KW_PRESERVE - 96)) | (1 << (FlinkSQLParser.KW_PRIOR - 96)) | (1 << (FlinkSQLParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSQLParser.KW_PUBLIC - 96)) | (1 << (FlinkSQLParser.KW_PYTHON - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSQLParser.KW_QUARTER - 96)) | (1 << (FlinkSQLParser.KW_RAW - 96)) | (1 << (FlinkSQLParser.KW_READ - 96)) | (1 << (FlinkSQLParser.KW_RELATIVE - 96)) | (1 << (FlinkSQLParser.KW_REMOVE - 96)) | (1 << (FlinkSQLParser.KW_RENAME - 96)) | (1 << (FlinkSQLParser.KW_REPLACE - 96)) | (1 << (FlinkSQLParser.KW_RESPECT - 96)) | (1 << (FlinkSQLParser.KW_RESTART - 96)) | (1 << (FlinkSQLParser.KW_RESTRICT - 96)) | (1 << (FlinkSQLParser.KW_ROLE - 96)) | (1 << (FlinkSQLParser.KW_ROW_COUNT - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSQLParser.KW_SCALA - 128)) | (1 << (FlinkSQLParser.KW_SCALAR - 128)) | (1 << (FlinkSQLParser.KW_SCALE - 128)) | (1 << (FlinkSQLParser.KW_SCHEMA - 128)) | (1 << (FlinkSQLParser.KW_SECONDS - 128)) | (1 << (FlinkSQLParser.KW_SECTION - 128)) | (1 << (FlinkSQLParser.KW_SECURITY - 128)) | (1 << (FlinkSQLParser.KW_SELF - 128)) | (1 << (FlinkSQLParser.KW_SERVER - 128)) | (1 << (FlinkSQLParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSQLParser.KW_SESSION - 128)) | (1 << (FlinkSQLParser.KW_SETS - 128)) | (1 << (FlinkSQLParser.KW_SIMPLE - 128)) | (1 << (FlinkSQLParser.KW_SIZE - 128)) | (1 << (FlinkSQLParser.KW_SLIDE - 128)) | (1 << (FlinkSQLParser.KW_SOURCE - 128)) | (1 << (FlinkSQLParser.KW_SPACE - 128)) | (1 << (FlinkSQLParser.KW_STATE - 128)) | (1 << (FlinkSQLParser.KW_STATEMENT - 128)) | (1 << (FlinkSQLParser.KW_STEP - 128)) | (1 << (FlinkSQLParser.KW_STRING - 128)) | (1 << (FlinkSQLParser.KW_STRUCTURE - 128)) | (1 << (FlinkSQLParser.KW_STYLE - 128)) | (1 << (FlinkSQLParser.KW_TABLES - 128)) | (1 << (FlinkSQLParser.KW_TEMPORARY - 128)) | (1 << (FlinkSQLParser.KW_TIMECOL - 128)) | (1 << (FlinkSQLParser.KW_FLOOR - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_LTZ - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPADD - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPDIFF - 128)) | (1 << (FlinkSQLParser.KW_TRANSFORM - 128)) | (1 << (FlinkSQLParser.KW_TUMBLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSQLParser.KW_TYPE - 160)) | (1 << (FlinkSQLParser.KW_UNDER - 160)) | (1 << (FlinkSQLParser.KW_UNLOAD - 160)) | (1 << (FlinkSQLParser.KW_USAGE - 160)) | (1 << (FlinkSQLParser.KW_USE - 160)) | (1 << (FlinkSQLParser.KW_UTF16 - 160)) | (1 << (FlinkSQLParser.KW_UTF32 - 160)) | (1 << (FlinkSQLParser.KW_UTF8 - 160)) | (1 << (FlinkSQLParser.KW_VERSION - 160)) | (1 << (FlinkSQLParser.KW_VIEW - 160)) | (1 << (FlinkSQLParser.KW_VIEWS - 160)) | (1 << (FlinkSQLParser.KW_VIRTUAL - 160)) | (1 << (FlinkSQLParser.KW_WATERMARK - 160)) | (1 << (FlinkSQLParser.KW_WATERMARKS - 160)) | (1 << (FlinkSQLParser.KW_WEEK - 160)) | (1 << (FlinkSQLParser.KW_WORK - 160)) | (1 << (FlinkSQLParser.KW_WRAPPER - 160)) | (1 << (FlinkSQLParser.KW_YEARS - 160)) | (1 << (FlinkSQLParser.KW_ZONE - 160)))) !== 0) || ((((_la - 419)) & ~0x1F) === 0 && ((1 << (_la - 419)) & ((1 << (FlinkSQLParser.STRING_LITERAL - 419)) | (1 << (FlinkSQLParser.DIG_LITERAL - 419)) | (1 << (FlinkSQLParser.ID_LITERAL - 419)))) !== 0)) {
				{
				this.state = 1170;
				this.uid();
				}
			}

			this.state = 1173;
			this.match(FlinkSQLParser.KW_TO);
			this.state = 1174;
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
		this.enterRule(_localctx, 122, FlinkSQLParser.RULE_setKeyValueDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1176;
			this.match(FlinkSQLParser.KW_SET);
			this.state = 1177;
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
		this.enterRule(_localctx, 124, FlinkSQLParser.RULE_addConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1179;
			this.match(FlinkSQLParser.KW_ADD);
			this.state = 1180;
			this.match(FlinkSQLParser.KW_CONSTRAINT);
			this.state = 1181;
			this.constraintName();
			this.state = 1182;
			this.match(FlinkSQLParser.KW_PRIMARY);
			this.state = 1183;
			this.match(FlinkSQLParser.KW_KEY);
			this.state = 1184;
			this.columnNameList();
			this.state = 1186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_NOT) {
				{
				this.state = 1185;
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
		this.enterRule(_localctx, 126, FlinkSQLParser.RULE_dropConstraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1188;
			this.match(FlinkSQLParser.KW_DROP);
			this.state = 1189;
			this.match(FlinkSQLParser.KW_CONSTRAINT);
			this.state = 1190;
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
		this.enterRule(_localctx, 128, FlinkSQLParser.RULE_addUnique);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1192;
			this.match(FlinkSQLParser.KW_ADD);
			this.state = 1193;
			this.match(FlinkSQLParser.KW_UNIQUE);
			this.state = 1194;
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
		this.enterRule(_localctx, 130, FlinkSQLParser.RULE_notForced);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1196;
			this.match(FlinkSQLParser.KW_NOT);
			this.state = 1197;
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
		this.enterRule(_localctx, 132, FlinkSQLParser.RULE_alertView);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1199;
			this.match(FlinkSQLParser.KW_ALTER);
			this.state = 1200;
			this.match(FlinkSQLParser.KW_VIEW);
			this.state = 1201;
			this.uid();
			this.state = 1205;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_RENAME:
				{
				this.state = 1202;
				this.renameDefinition();
				}
				break;
			case FlinkSQLParser.KW_AS:
				{
				this.state = 1203;
				this.match(FlinkSQLParser.KW_AS);
				this.state = 1204;
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
		this.enterRule(_localctx, 134, FlinkSQLParser.RULE_alterDatabase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1207;
			this.match(FlinkSQLParser.KW_ALTER);
			this.state = 1208;
			this.match(FlinkSQLParser.KW_DATABASE);
			this.state = 1209;
			this.databasePath();
			this.state = 1210;
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
		this.enterRule(_localctx, 136, FlinkSQLParser.RULE_alterFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1212;
			this.match(FlinkSQLParser.KW_ALTER);
			this.state = 1216;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
			case 1:
				{
				this.state = 1213;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				}
				break;

			case 2:
				{
				this.state = 1214;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				this.state = 1215;
				this.match(FlinkSQLParser.KW_SYSTEM);
				}
				break;
			}
			this.state = 1218;
			this.match(FlinkSQLParser.KW_FUNCTION);
			this.state = 1220;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				{
				this.state = 1219;
				this.ifExists();
				}
				break;
			}
			this.state = 1222;
			this.uid();
			this.state = 1223;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 1224;
			this.identifier();
			this.state = 1227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_LANGUAGE) {
				{
				this.state = 1225;
				this.match(FlinkSQLParser.KW_LANGUAGE);
				this.state = 1226;
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
		this.enterRule(_localctx, 138, FlinkSQLParser.RULE_dropCatalog);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1229;
			this.match(FlinkSQLParser.KW_DROP);
			this.state = 1230;
			this.match(FlinkSQLParser.KW_CATALOG);
			this.state = 1232;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				{
				this.state = 1231;
				this.ifExists();
				}
				break;
			}
			this.state = 1234;
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
		this.enterRule(_localctx, 140, FlinkSQLParser.RULE_dropTable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1236;
			this.match(FlinkSQLParser.KW_DROP);
			this.state = 1238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_TEMPORARY) {
				{
				this.state = 1237;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				}
			}

			this.state = 1240;
			this.match(FlinkSQLParser.KW_TABLE);
			this.state = 1242;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				{
				this.state = 1241;
				this.ifExists();
				}
				break;
			}
			this.state = 1244;
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
		this.enterRule(_localctx, 142, FlinkSQLParser.RULE_dropDatabase);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1246;
			this.match(FlinkSQLParser.KW_DROP);
			this.state = 1247;
			this.match(FlinkSQLParser.KW_DATABASE);
			this.state = 1249;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				{
				this.state = 1248;
				this.ifExists();
				}
				break;
			}
			this.state = 1251;
			this.databasePath();
			this.state = 1253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_CASCADE || _la === FlinkSQLParser.KW_RESTRICT) {
				{
				this.state = 1252;
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
		this.enterRule(_localctx, 144, FlinkSQLParser.RULE_dropView);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1255;
			this.match(FlinkSQLParser.KW_DROP);
			this.state = 1257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_TEMPORARY) {
				{
				this.state = 1256;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				}
			}

			this.state = 1259;
			this.match(FlinkSQLParser.KW_VIEW);
			this.state = 1261;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				{
				this.state = 1260;
				this.ifExists();
				}
				break;
			}
			this.state = 1263;
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
		this.enterRule(_localctx, 146, FlinkSQLParser.RULE_dropFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1265;
			this.match(FlinkSQLParser.KW_DROP);
			this.state = 1269;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 130, this._ctx) ) {
			case 1:
				{
				this.state = 1266;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				}
				break;

			case 2:
				{
				this.state = 1267;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				this.state = 1268;
				this.match(FlinkSQLParser.KW_SYSTEM);
				}
				break;
			}
			this.state = 1271;
			this.match(FlinkSQLParser.KW_FUNCTION);
			this.state = 1273;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				{
				this.state = 1272;
				this.ifExists();
				}
				break;
			}
			this.state = 1275;
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
	public truncateTable(): TruncateTableContext {
		let _localctx: TruncateTableContext = new TruncateTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, FlinkSQLParser.RULE_truncateTable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1277;
			this.match(FlinkSQLParser.KW_TRUNCATE);
			this.state = 1278;
			this.match(FlinkSQLParser.KW_TABLE);
			this.state = 1279;
			this.tablePathCreate();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 150, FlinkSQLParser.RULE_insertStatement);
		let _la: number;
		try {
			this.state = 1288;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 133, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 1282;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_EXECUTE) {
					{
					this.state = 1281;
					this.match(FlinkSQLParser.KW_EXECUTE);
					}
				}

				this.state = 1284;
				this.insertSimpleStatement();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1285;
				this.insertMulStatementCompatibility();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 1286;
				this.match(FlinkSQLParser.KW_EXECUTE);
				this.state = 1287;
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
		this.enterRule(_localctx, 152, FlinkSQLParser.RULE_insertSimpleStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1290;
			this.match(FlinkSQLParser.KW_INSERT);
			this.state = 1291;
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
			this.state = 1292;
			this.tablePath();
			this.state = 1301;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
			case 1:
				{
				this.state = 1294;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_PARTITION) {
					{
					this.state = 1293;
					this.insertPartitionDefinition();
					}
				}

				this.state = 1297;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
				case 1:
					{
					this.state = 1296;
					this.columnNameList();
					}
					break;
				}
				this.state = 1299;
				this.queryStatement(0);
				}
				break;

			case 2:
				{
				this.state = 1300;
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
		this.enterRule(_localctx, 154, FlinkSQLParser.RULE_insertPartitionDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1303;
			this.match(FlinkSQLParser.KW_PARTITION);
			this.state = 1304;
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
		this.enterRule(_localctx, 156, FlinkSQLParser.RULE_valuesDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1306;
			this.match(FlinkSQLParser.KW_VALUES);
			this.state = 1307;
			this.valuesRowDefinition();
			this.state = 1312;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1308;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1309;
				this.valuesRowDefinition();
				}
				}
				this.state = 1314;
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
		this.enterRule(_localctx, 158, FlinkSQLParser.RULE_valuesRowDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1315;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1316;
			this.constant();
			this.state = 1321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1317;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1318;
				this.constant();
				}
				}
				this.state = 1323;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1324;
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
		this.enterRule(_localctx, 160, FlinkSQLParser.RULE_insertMulStatementCompatibility);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1326;
			this.match(FlinkSQLParser.KW_BEGIN);
			this.state = 1327;
			this.match(FlinkSQLParser.KW_STATEMENT);
			this.state = 1328;
			this.match(FlinkSQLParser.KW_SET);
			this.state = 1329;
			this.match(FlinkSQLParser.SEMICOLON);
			this.state = 1333;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1330;
				this.insertSimpleStatement();
				this.state = 1331;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				}
				this.state = 1335;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FlinkSQLParser.KW_INSERT);
			this.state = 1337;
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
		this.enterRule(_localctx, 162, FlinkSQLParser.RULE_insertMulStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1339;
			this.match(FlinkSQLParser.KW_STATEMENT);
			this.state = 1340;
			this.match(FlinkSQLParser.KW_SET);
			this.state = 1341;
			this.match(FlinkSQLParser.KW_BEGIN);
			this.state = 1345;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1342;
				this.insertSimpleStatement();
				this.state = 1343;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				}
				this.state = 1347;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FlinkSQLParser.KW_INSERT);
			this.state = 1349;
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
		let _startState: number = 164;
		this.enterRecursionRule(_localctx, 164, FlinkSQLParser.RULE_queryStatement, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1374;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				{
				this.state = 1352;
				this.valuesCaluse();
				}
				break;

			case 2:
				{
				this.state = 1353;
				this.withClause();
				this.state = 1354;
				this.queryStatement(5);
				}
				break;

			case 3:
				{
				this.state = 1356;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1357;
				this.queryStatement(0);
				this.state = 1358;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 4:
				{
				this.state = 1360;
				this.selectClause();
				this.state = 1362;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 141, this._ctx) ) {
				case 1:
					{
					this.state = 1361;
					this.orderByCaluse();
					}
					break;
				}
				this.state = 1365;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
				case 1:
					{
					this.state = 1364;
					this.limitClause();
					}
					break;
				}
				}
				break;

			case 5:
				{
				this.state = 1367;
				this.selectStatement();
				this.state = 1369;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
				case 1:
					{
					this.state = 1368;
					this.orderByCaluse();
					}
					break;
				}
				this.state = 1372;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 144, this._ctx) ) {
				case 1:
					{
					this.state = 1371;
					this.limitClause();
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1390;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 149, this._ctx);
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
					this.state = 1376;
					if (!(this.precpred(this._ctx, 3))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
					}
					this.state = 1377;
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
					this.state = 1379;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSQLParser.KW_ALL) {
						{
						this.state = 1378;
						this.match(FlinkSQLParser.KW_ALL);
						}
					}

					this.state = 1381;
					_localctx._right = this.queryStatement(0);
					this.state = 1383;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 147, this._ctx) ) {
					case 1:
						{
						this.state = 1382;
						this.orderByCaluse();
						}
						break;
					}
					this.state = 1386;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 148, this._ctx) ) {
					case 1:
						{
						this.state = 1385;
						this.limitClause();
						}
						break;
					}
					}
					}
				}
				this.state = 1392;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 149, this._ctx);
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
		this.enterRule(_localctx, 166, FlinkSQLParser.RULE_valuesCaluse);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1393;
			this.match(FlinkSQLParser.KW_VALUES);
			this.state = 1394;
			this.expression();
			this.state = 1399;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1395;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1396;
					this.expression();
					}
					}
				}
				this.state = 1401;
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
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public withClause(): WithClauseContext {
		let _localctx: WithClauseContext = new WithClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, FlinkSQLParser.RULE_withClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1402;
			this.match(FlinkSQLParser.KW_WITH);
			this.state = 1403;
			this.withItem();
			this.state = 1408;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1404;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1405;
				this.withItem();
				}
				}
				this.state = 1410;
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
		this.enterRule(_localctx, 170, FlinkSQLParser.RULE_withItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1411;
			this.withItemName();
			this.state = 1423;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.LR_BRACKET) {
				{
				this.state = 1412;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1413;
				this.columnName();
				this.state = 1418;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1414;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1415;
					this.columnName();
					}
					}
					this.state = 1420;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1421;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
			}

			this.state = 1425;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 1426;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1427;
			this.queryStatement(0);
			this.state = 1428;
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
		this.enterRule(_localctx, 172, FlinkSQLParser.RULE_withItemName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1430;
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
		this.enterRule(_localctx, 174, FlinkSQLParser.RULE_selectStatement);
		try {
			this.state = 1450;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 158, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1432;
				this.selectClause();
				this.state = 1433;
				this.fromClause();
				this.state = 1435;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 154, this._ctx) ) {
				case 1:
					{
					this.state = 1434;
					this.whereClause();
					}
					break;
				}
				this.state = 1438;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 155, this._ctx) ) {
				case 1:
					{
					this.state = 1437;
					this.groupByClause();
					}
					break;
				}
				this.state = 1441;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 156, this._ctx) ) {
				case 1:
					{
					this.state = 1440;
					this.havingClause();
					}
					break;
				}
				this.state = 1444;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 157, this._ctx) ) {
				case 1:
					{
					this.state = 1443;
					this.windowClause();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1446;
				this.selectClause();
				this.state = 1447;
				this.fromClause();
				this.state = 1448;
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
		this.enterRule(_localctx, 176, FlinkSQLParser.RULE_selectClause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1452;
			this.match(FlinkSQLParser.KW_SELECT);
			this.state = 1454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_ALL || _la === FlinkSQLParser.KW_DISTINCT) {
				{
				this.state = 1453;
				this.setQuantifier();
				}
			}

			this.state = 1465;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 161, this._ctx) ) {
			case 1:
				{
				this.state = 1456;
				this.match(FlinkSQLParser.ASTERISK_SIGN);
				}
				break;

			case 2:
				{
				this.state = 1457;
				this.projectItemDefinition();
				this.state = 1462;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1458;
						this.match(FlinkSQLParser.COMMA);
						this.state = 1459;
						this.projectItemDefinition();
						}
						}
					}
					this.state = 1464;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
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
		this.enterRule(_localctx, 178, FlinkSQLParser.RULE_projectItemDefinition);
		let _la: number;
		try {
			this.state = 1475;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 164, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1467;
				this.overWindowItem();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1468;
				this.expression();
				this.state = 1473;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 163, this._ctx) ) {
				case 1:
					{
					this.state = 1470;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSQLParser.KW_AS) {
						{
						this.state = 1469;
						this.match(FlinkSQLParser.KW_AS);
						}
					}

					this.state = 1472;
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
		this.enterRule(_localctx, 180, FlinkSQLParser.RULE_overWindowItem);
		let _la: number;
		try {
			this.state = 1493;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 167, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1477;
				this.primaryExpression(0);
				this.state = 1478;
				this.match(FlinkSQLParser.KW_OVER);
				this.state = 1479;
				this.windowSpec();
				this.state = 1481;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_AS) {
					{
					this.state = 1480;
					this.match(FlinkSQLParser.KW_AS);
					}
				}

				this.state = 1483;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1485;
				this.primaryExpression(0);
				this.state = 1486;
				this.match(FlinkSQLParser.KW_OVER);
				this.state = 1487;
				this.errorCapturingIdentifier();
				this.state = 1489;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_AS) {
					{
					this.state = 1488;
					this.match(FlinkSQLParser.KW_AS);
					}
				}

				this.state = 1491;
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
		this.enterRule(_localctx, 182, FlinkSQLParser.RULE_fromClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1495;
			this.match(FlinkSQLParser.KW_FROM);
			this.state = 1496;
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
		let _startState: number = 184;
		this.enterRecursionRule(_localctx, 184, FlinkSQLParser.RULE_tableExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1509;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 169, this._ctx) ) {
			case 1:
				{
				this.state = 1499;
				this.tableReference();
				this.state = 1504;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1500;
						this.match(FlinkSQLParser.COMMA);
						this.state = 1501;
						this.tableReference();
						}
						}
					}
					this.state = 1506;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
				}
				}
				break;

			case 2:
				{
				this.state = 1507;
				this.inlineDataValueClause();
				}
				break;

			case 3:
				{
				this.state = 1508;
				this.windoTVFClause();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1554;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1552;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 179, this._ctx) ) {
					case 1:
						{
						_localctx = new TableExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_tableExpression);
						this.state = 1511;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1512;
						this.match(FlinkSQLParser.KW_CROSS);
						this.state = 1513;
						this.match(FlinkSQLParser.KW_JOIN);
						this.state = 1514;
						this.tableExpression(4);
						}
						break;

					case 2:
						{
						_localctx = new TableExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_tableExpression);
						this.state = 1515;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1517;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FlinkSQLParser.KW_NATURAL) {
							{
							this.state = 1516;
							this.match(FlinkSQLParser.KW_NATURAL);
							}
						}

						this.state = 1520;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 259)) & ~0x1F) === 0 && ((1 << (_la - 259)) & ((1 << (FlinkSQLParser.KW_FULL - 259)) | (1 << (FlinkSQLParser.KW_INNER - 259)) | (1 << (FlinkSQLParser.KW_LEFT - 259)))) !== 0) || _la === FlinkSQLParser.KW_RIGHT) {
							{
							this.state = 1519;
							_la = this._input.LA(1);
							if (!(((((_la - 259)) & ~0x1F) === 0 && ((1 << (_la - 259)) & ((1 << (FlinkSQLParser.KW_FULL - 259)) | (1 << (FlinkSQLParser.KW_INNER - 259)) | (1 << (FlinkSQLParser.KW_LEFT - 259)))) !== 0) || _la === FlinkSQLParser.KW_RIGHT)) {
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

						this.state = 1523;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FlinkSQLParser.KW_OUTER) {
							{
							this.state = 1522;
							this.match(FlinkSQLParser.KW_OUTER);
							}
						}

						this.state = 1525;
						this.match(FlinkSQLParser.KW_JOIN);
						this.state = 1526;
						this.tableExpression(0);
						this.state = 1528;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 173, this._ctx) ) {
						case 1:
							{
							this.state = 1527;
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
						this.state = 1530;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1532;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FlinkSQLParser.KW_NATURAL) {
							{
							this.state = 1531;
							this.match(FlinkSQLParser.KW_NATURAL);
							}
						}

						this.state = 1535;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 259)) & ~0x1F) === 0 && ((1 << (_la - 259)) & ((1 << (FlinkSQLParser.KW_FULL - 259)) | (1 << (FlinkSQLParser.KW_INNER - 259)) | (1 << (FlinkSQLParser.KW_LEFT - 259)))) !== 0) || _la === FlinkSQLParser.KW_RIGHT) {
							{
							this.state = 1534;
							_la = this._input.LA(1);
							if (!(((((_la - 259)) & ~0x1F) === 0 && ((1 << (_la - 259)) & ((1 << (FlinkSQLParser.KW_FULL - 259)) | (1 << (FlinkSQLParser.KW_INNER - 259)) | (1 << (FlinkSQLParser.KW_LEFT - 259)))) !== 0) || _la === FlinkSQLParser.KW_RIGHT)) {
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

						this.state = 1538;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FlinkSQLParser.KW_OUTER) {
							{
							this.state = 1537;
							this.match(FlinkSQLParser.KW_OUTER);
							}
						}

						this.state = 1540;
						this.match(FlinkSQLParser.KW_JOIN);
						this.state = 1541;
						this.tableExpression(0);
						this.state = 1543;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 177, this._ctx) ) {
						case 1:
							{
							this.state = 1542;
							this.joinCondition();
							}
							break;
						}
						this.state = 1549;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 178, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 1545;
								this.match(FlinkSQLParser.COMMA);
								this.state = 1546;
								this.tableReference();
								}
								}
							}
							this.state = 1551;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 178, this._ctx);
						}
						}
						break;
					}
					}
				}
				this.state = 1556;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
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
		this.enterRule(_localctx, 186, FlinkSQLParser.RULE_tableReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1557;
			this.tablePrimary();
			this.state = 1559;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 181, this._ctx) ) {
			case 1:
				{
				this.state = 1558;
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
		this.enterRule(_localctx, 188, FlinkSQLParser.RULE_tablePrimary);
		let _la: number;
		try {
			this.state = 1630;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 190, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1562;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_TABLE) {
					{
					this.state = 1561;
					this.match(FlinkSQLParser.KW_TABLE);
					}
				}

				this.state = 1564;
				this.tablePath();
				this.state = 1566;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 183, this._ctx) ) {
				case 1:
					{
					this.state = 1565;
					this.systemTimePeriod();
					}
					break;
				}
				this.state = 1572;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 185, this._ctx) ) {
				case 1:
					{
					this.state = 1569;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSQLParser.KW_AS) {
						{
						this.state = 1568;
						this.match(FlinkSQLParser.KW_AS);
						}
					}

					this.state = 1571;
					this.correlationName();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1574;
				this.match(FlinkSQLParser.KW_LATERAL);
				this.state = 1575;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 1576;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1577;
				this.functionName();
				this.state = 1578;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1579;
				this.functionParam();
				this.state = 1584;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1580;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1581;
					this.functionParam();
					}
					}
					this.state = 1586;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1587;
				this.match(FlinkSQLParser.RR_BRACKET);
				this.state = 1588;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1591;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_LATERAL) {
					{
					this.state = 1590;
					this.match(FlinkSQLParser.KW_LATERAL);
					}
				}

				this.state = 1593;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1594;
				this.queryStatement(0);
				this.state = 1595;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1597;
				this.match(FlinkSQLParser.KW_LATERAL);
				this.state = 1598;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 1599;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1600;
				this.functionName();
				this.state = 1601;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1602;
				this.functionParam();
				this.state = 1607;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1603;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1604;
					this.functionParam();
					}
					}
					this.state = 1609;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1610;
				this.match(FlinkSQLParser.RR_BRACKET);
				this.state = 1611;
				this.match(FlinkSQLParser.RR_BRACKET);
				this.state = 1612;
				this.match(FlinkSQLParser.KW_AS);
				this.state = 1613;
				this.tableAlias();
				this.state = 1614;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1615;
				this.projectItemDefinition();
				this.state = 1620;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1616;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1617;
					this.projectItemDefinition();
					}
					}
					this.state = 1622;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1623;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1625;
				this.match(FlinkSQLParser.KW_UNNEST);
				this.state = 1626;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1627;
				this.expression();
				this.state = 1628;
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
		this.enterRule(_localctx, 190, FlinkSQLParser.RULE_systemTimePeriod);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1632;
			this.match(FlinkSQLParser.KW_FOR);
			this.state = 1633;
			this.match(FlinkSQLParser.KW_SYSTEM_TIME);
			this.state = 1634;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 1635;
			this.match(FlinkSQLParser.KW_OF);
			this.state = 1636;
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
		this.enterRule(_localctx, 192, FlinkSQLParser.RULE_dateTimeExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1638;
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
		this.enterRule(_localctx, 194, FlinkSQLParser.RULE_inlineDataValueClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1640;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1641;
			this.valuesDefinition();
			this.state = 1642;
			this.match(FlinkSQLParser.RR_BRACKET);
			this.state = 1643;
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
		this.enterRule(_localctx, 196, FlinkSQLParser.RULE_windoTVFClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1645;
			this.match(FlinkSQLParser.KW_TABLE);
			this.state = 1646;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1647;
			this.windowTVFExression();
			this.state = 1648;
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
		this.enterRule(_localctx, 198, FlinkSQLParser.RULE_windowTVFExression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1650;
			this.windoTVFName();
			this.state = 1651;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1652;
			this.windowTVFParam();
			this.state = 1657;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1653;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1654;
				this.windowTVFParam();
				}
				}
				this.state = 1659;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1660;
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
		this.enterRule(_localctx, 200, FlinkSQLParser.RULE_windoTVFName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1662;
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
		this.enterRule(_localctx, 202, FlinkSQLParser.RULE_windowTVFParam);
		try {
			this.state = 1679;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 192, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1664;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 1665;
				this.timeAttrColumn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1666;
				this.columnDescriptor();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1667;
				this.timeIntervalExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1668;
				this.match(FlinkSQLParser.KW_DATA);
				this.state = 1669;
				this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
				this.state = 1670;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 1671;
				this.timeAttrColumn();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1672;
				this.match(FlinkSQLParser.KW_TIMECOL);
				this.state = 1673;
				this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
				this.state = 1674;
				this.columnDescriptor();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1675;
				this.timeIntervalParamName();
				this.state = 1676;
				this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
				this.state = 1677;
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
		this.enterRule(_localctx, 204, FlinkSQLParser.RULE_timeIntervalParamName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1681;
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
		this.enterRule(_localctx, 206, FlinkSQLParser.RULE_columnDescriptor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1683;
			this.match(FlinkSQLParser.KW_DESCRIPTOR);
			this.state = 1684;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1685;
			this.uid();
			this.state = 1686;
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
		this.enterRule(_localctx, 208, FlinkSQLParser.RULE_joinCondition);
		let _la: number;
		try {
			this.state = 1702;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_ON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1688;
				this.match(FlinkSQLParser.KW_ON);
				this.state = 1689;
				this.booleanExpression(0);
				}
				break;
			case FlinkSQLParser.KW_USING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1690;
				this.match(FlinkSQLParser.KW_USING);
				this.state = 1691;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1692;
				this.uid();
				this.state = 1697;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1693;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1694;
					this.uid();
					}
					}
					this.state = 1699;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1700;
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
		this.enterRule(_localctx, 210, FlinkSQLParser.RULE_whereClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1704;
			this.match(FlinkSQLParser.KW_WHERE);
			this.state = 1705;
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
		this.enterRule(_localctx, 212, FlinkSQLParser.RULE_groupByClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1707;
			this.match(FlinkSQLParser.KW_GROUP);
			this.state = 1708;
			this.match(FlinkSQLParser.KW_BY);
			this.state = 1709;
			this.groupItemDefinition();
			this.state = 1714;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1710;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1711;
					this.groupItemDefinition();
					}
					}
				}
				this.state = 1716;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
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
		this.enterRule(_localctx, 214, FlinkSQLParser.RULE_groupItemDefinition);
		let _la: number;
		try {
			this.state = 1756;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 199, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1717;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1718;
				this.groupWindowFunction();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1719;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1720;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1721;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1722;
				this.expression();
				this.state = 1727;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1723;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1724;
					this.expression();
					}
					}
					this.state = 1729;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1730;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1732;
				this.groupingSetsNotaionName();
				this.state = 1733;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1734;
				this.expression();
				this.state = 1739;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1735;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1736;
					this.expression();
					}
					}
					this.state = 1741;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1742;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1744;
				this.groupingSets();
				this.state = 1745;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1746;
				this.groupItemDefinition();
				this.state = 1751;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1747;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1748;
					this.groupItemDefinition();
					}
					}
					this.state = 1753;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1754;
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
		this.enterRule(_localctx, 216, FlinkSQLParser.RULE_groupingSets);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1758;
			this.match(FlinkSQLParser.KW_GROUPING);
			this.state = 1759;
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
		this.enterRule(_localctx, 218, FlinkSQLParser.RULE_groupingSetsNotaionName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1761;
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
		this.enterRule(_localctx, 220, FlinkSQLParser.RULE_groupWindowFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1763;
			this.groupWindowFunctionName();
			this.state = 1764;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1765;
			this.timeAttrColumn();
			this.state = 1766;
			this.match(FlinkSQLParser.COMMA);
			this.state = 1767;
			this.timeIntervalExpression();
			this.state = 1768;
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
		this.enterRule(_localctx, 222, FlinkSQLParser.RULE_groupWindowFunctionName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1770;
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
		this.enterRule(_localctx, 224, FlinkSQLParser.RULE_timeAttrColumn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1772;
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
		this.enterRule(_localctx, 226, FlinkSQLParser.RULE_havingClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1774;
			this.match(FlinkSQLParser.KW_HAVING);
			this.state = 1775;
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
		this.enterRule(_localctx, 228, FlinkSQLParser.RULE_windowClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1777;
			this.match(FlinkSQLParser.KW_WINDOW);
			this.state = 1778;
			this.namedWindow();
			this.state = 1783;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 200, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1779;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1780;
					this.namedWindow();
					}
					}
				}
				this.state = 1785;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 200, this._ctx);
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
		this.enterRule(_localctx, 230, FlinkSQLParser.RULE_namedWindow);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1786;
			_localctx._name = this.errorCapturingIdentifier();
			this.state = 1787;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 1788;
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
		this.enterRule(_localctx, 232, FlinkSQLParser.RULE_windowSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1791;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSQLParser.T__0) | (1 << FlinkSQLParser.KW_ADD) | (1 << FlinkSQLParser.KW_ADMIN) | (1 << FlinkSQLParser.KW_AFTER) | (1 << FlinkSQLParser.KW_ANALYZE) | (1 << FlinkSQLParser.KW_ASC) | (1 << FlinkSQLParser.KW_BEFORE) | (1 << FlinkSQLParser.KW_BYTES) | (1 << FlinkSQLParser.KW_CASCADE) | (1 << FlinkSQLParser.KW_CATALOG) | (1 << FlinkSQLParser.KW_CATALOGS) | (1 << FlinkSQLParser.KW_CENTURY) | (1 << FlinkSQLParser.KW_CHAIN) | (1 << FlinkSQLParser.KW_CHANGELOG_MODE) | (1 << FlinkSQLParser.KW_CHARACTERS) | (1 << FlinkSQLParser.KW_COMMENT) | (1 << FlinkSQLParser.KW_COMPACT) | (1 << FlinkSQLParser.KW_COLUMNS) | (1 << FlinkSQLParser.KW_CONSTRAINTS) | (1 << FlinkSQLParser.KW_CONSTRUCTOR) | (1 << FlinkSQLParser.KW_CUMULATE) | (1 << FlinkSQLParser.KW_DATA) | (1 << FlinkSQLParser.KW_DATABASE) | (1 << FlinkSQLParser.KW_DATABASES) | (1 << FlinkSQLParser.KW_DAYS) | (1 << FlinkSQLParser.KW_DECADE) | (1 << FlinkSQLParser.KW_DEFINED) | (1 << FlinkSQLParser.KW_DESC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSQLParser.KW_DESCRIPTOR - 32)) | (1 << (FlinkSQLParser.KW_DIV - 32)) | (1 << (FlinkSQLParser.KW_ENCODING - 32)) | (1 << (FlinkSQLParser.KW_ENFORCED - 32)) | (1 << (FlinkSQLParser.KW_ENGINE - 32)) | (1 << (FlinkSQLParser.KW_ERROR - 32)) | (1 << (FlinkSQLParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSQLParser.KW_EXCEPTION - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDE - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDING - 32)) | (1 << (FlinkSQLParser.KW_EXTENDED - 32)) | (1 << (FlinkSQLParser.KW_FILE - 32)) | (1 << (FlinkSQLParser.KW_FINAL - 32)) | (1 << (FlinkSQLParser.KW_FIRST - 32)) | (1 << (FlinkSQLParser.KW_FOLLOWING - 32)) | (1 << (FlinkSQLParser.KW_FORMAT - 32)) | (1 << (FlinkSQLParser.KW_FORTRAN - 32)) | (1 << (FlinkSQLParser.KW_FOUND - 32)) | (1 << (FlinkSQLParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSQLParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSQLParser.KW_GENERAL - 32)) | (1 << (FlinkSQLParser.KW_GENERATED - 32)) | (1 << (FlinkSQLParser.KW_GO - 32)) | (1 << (FlinkSQLParser.KW_GOTO - 32)) | (1 << (FlinkSQLParser.KW_GRANTED - 32)) | (1 << (FlinkSQLParser.KW_HOP - 32)) | (1 << (FlinkSQLParser.KW_HOURS - 32)) | (1 << (FlinkSQLParser.KW_IF - 32)) | (1 << (FlinkSQLParser.KW_IGNORE - 32)) | (1 << (FlinkSQLParser.KW_INCREMENT - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSQLParser.KW_INPUT - 64)) | (1 << (FlinkSQLParser.KW_INVOKER - 64)) | (1 << (FlinkSQLParser.KW_JAR - 64)) | (1 << (FlinkSQLParser.KW_JARS - 64)) | (1 << (FlinkSQLParser.KW_JAVA - 64)) | (1 << (FlinkSQLParser.KW_JSON - 64)) | (1 << (FlinkSQLParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSQLParser.KW_KEY - 64)) | (1 << (FlinkSQLParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSQLParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSQLParser.KW_LABEL - 64)) | (1 << (FlinkSQLParser.KW_LAST - 64)) | (1 << (FlinkSQLParser.KW_LENGTH - 64)) | (1 << (FlinkSQLParser.KW_LEVEL - 64)) | (1 << (FlinkSQLParser.KW_LOAD - 64)) | (1 << (FlinkSQLParser.KW_MAP - 64)) | (1 << (FlinkSQLParser.KW_MICROSECOND - 64)) | (1 << (FlinkSQLParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSQLParser.KW_MILLISECOND - 64)) | (1 << (FlinkSQLParser.KW_MINUTES - 64)) | (1 << (FlinkSQLParser.KW_MINVALUE - 64)) | (1 << (FlinkSQLParser.KW_MODIFY - 64)) | (1 << (FlinkSQLParser.KW_MODULES - 64)) | (1 << (FlinkSQLParser.KW_MONTHS - 64)) | (1 << (FlinkSQLParser.KW_NANOSECOND - 64)) | (1 << (FlinkSQLParser.KW_NULLS - 64)) | (1 << (FlinkSQLParser.KW_NUMBER - 64)) | (1 << (FlinkSQLParser.KW_OPTION - 64)) | (1 << (FlinkSQLParser.KW_OPTIONS - 64)) | (1 << (FlinkSQLParser.KW_ORDERING - 64)) | (1 << (FlinkSQLParser.KW_OUTPUT - 64)) | (1 << (FlinkSQLParser.KW_OVERWRITE - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSQLParser.KW_OVERWRITING - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONED - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONS - 96)) | (1 << (FlinkSQLParser.KW_PASSING - 96)) | (1 << (FlinkSQLParser.KW_PAST - 96)) | (1 << (FlinkSQLParser.KW_PATH - 96)) | (1 << (FlinkSQLParser.KW_PLACING - 96)) | (1 << (FlinkSQLParser.KW_PLAN - 96)) | (1 << (FlinkSQLParser.KW_PRECEDING - 96)) | (1 << (FlinkSQLParser.KW_PRESERVE - 96)) | (1 << (FlinkSQLParser.KW_PRIOR - 96)) | (1 << (FlinkSQLParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSQLParser.KW_PUBLIC - 96)) | (1 << (FlinkSQLParser.KW_PYTHON - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSQLParser.KW_QUARTER - 96)) | (1 << (FlinkSQLParser.KW_RAW - 96)) | (1 << (FlinkSQLParser.KW_READ - 96)) | (1 << (FlinkSQLParser.KW_RELATIVE - 96)) | (1 << (FlinkSQLParser.KW_REMOVE - 96)) | (1 << (FlinkSQLParser.KW_RENAME - 96)) | (1 << (FlinkSQLParser.KW_REPLACE - 96)) | (1 << (FlinkSQLParser.KW_RESPECT - 96)) | (1 << (FlinkSQLParser.KW_RESTART - 96)) | (1 << (FlinkSQLParser.KW_RESTRICT - 96)) | (1 << (FlinkSQLParser.KW_ROLE - 96)) | (1 << (FlinkSQLParser.KW_ROW_COUNT - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSQLParser.KW_SCALA - 128)) | (1 << (FlinkSQLParser.KW_SCALAR - 128)) | (1 << (FlinkSQLParser.KW_SCALE - 128)) | (1 << (FlinkSQLParser.KW_SCHEMA - 128)) | (1 << (FlinkSQLParser.KW_SECONDS - 128)) | (1 << (FlinkSQLParser.KW_SECTION - 128)) | (1 << (FlinkSQLParser.KW_SECURITY - 128)) | (1 << (FlinkSQLParser.KW_SELF - 128)) | (1 << (FlinkSQLParser.KW_SERVER - 128)) | (1 << (FlinkSQLParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSQLParser.KW_SESSION - 128)) | (1 << (FlinkSQLParser.KW_SETS - 128)) | (1 << (FlinkSQLParser.KW_SIMPLE - 128)) | (1 << (FlinkSQLParser.KW_SIZE - 128)) | (1 << (FlinkSQLParser.KW_SLIDE - 128)) | (1 << (FlinkSQLParser.KW_SOURCE - 128)) | (1 << (FlinkSQLParser.KW_SPACE - 128)) | (1 << (FlinkSQLParser.KW_STATE - 128)) | (1 << (FlinkSQLParser.KW_STATEMENT - 128)) | (1 << (FlinkSQLParser.KW_STEP - 128)) | (1 << (FlinkSQLParser.KW_STRING - 128)) | (1 << (FlinkSQLParser.KW_STRUCTURE - 128)) | (1 << (FlinkSQLParser.KW_STYLE - 128)) | (1 << (FlinkSQLParser.KW_TABLES - 128)) | (1 << (FlinkSQLParser.KW_TEMPORARY - 128)) | (1 << (FlinkSQLParser.KW_TIMECOL - 128)) | (1 << (FlinkSQLParser.KW_FLOOR - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_LTZ - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPADD - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPDIFF - 128)) | (1 << (FlinkSQLParser.KW_TRANSFORM - 128)) | (1 << (FlinkSQLParser.KW_TUMBLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSQLParser.KW_TYPE - 160)) | (1 << (FlinkSQLParser.KW_UNDER - 160)) | (1 << (FlinkSQLParser.KW_UNLOAD - 160)) | (1 << (FlinkSQLParser.KW_USAGE - 160)) | (1 << (FlinkSQLParser.KW_USE - 160)) | (1 << (FlinkSQLParser.KW_UTF16 - 160)) | (1 << (FlinkSQLParser.KW_UTF32 - 160)) | (1 << (FlinkSQLParser.KW_UTF8 - 160)) | (1 << (FlinkSQLParser.KW_VERSION - 160)) | (1 << (FlinkSQLParser.KW_VIEW - 160)) | (1 << (FlinkSQLParser.KW_VIEWS - 160)) | (1 << (FlinkSQLParser.KW_VIRTUAL - 160)) | (1 << (FlinkSQLParser.KW_WATERMARK - 160)) | (1 << (FlinkSQLParser.KW_WATERMARKS - 160)) | (1 << (FlinkSQLParser.KW_WEEK - 160)) | (1 << (FlinkSQLParser.KW_WORK - 160)) | (1 << (FlinkSQLParser.KW_WRAPPER - 160)) | (1 << (FlinkSQLParser.KW_YEARS - 160)) | (1 << (FlinkSQLParser.KW_ZONE - 160)))) !== 0) || ((((_la - 419)) & ~0x1F) === 0 && ((1 << (_la - 419)) & ((1 << (FlinkSQLParser.STRING_LITERAL - 419)) | (1 << (FlinkSQLParser.DIG_LITERAL - 419)) | (1 << (FlinkSQLParser.ID_LITERAL - 419)))) !== 0)) {
				{
				this.state = 1790;
				_localctx._name = this.errorCapturingIdentifier();
				}
			}

			this.state = 1793;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1795;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_PARTITION) {
				{
				this.state = 1794;
				this.partitionByClause();
				}
			}

			this.state = 1798;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_ORDER) {
				{
				this.state = 1797;
				this.orderByCaluse();
				}
			}

			this.state = 1801;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_RANGE || _la === FlinkSQLParser.KW_ROWS) {
				{
				this.state = 1800;
				this.windowFrame();
				}
			}

			this.state = 1803;
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
		this.enterRule(_localctx, 234, FlinkSQLParser.RULE_matchRecognizeClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1805;
			this.match(FlinkSQLParser.KW_MATCH_RECOGNIZE);
			this.state = 1806;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1808;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_PARTITION) {
				{
				this.state = 1807;
				this.partitionByClause();
				}
			}

			this.state = 1811;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_ORDER) {
				{
				this.state = 1810;
				this.orderByCaluse();
				}
			}

			this.state = 1814;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_MEASURES) {
				{
				this.state = 1813;
				this.measuresClause();
				}
			}

			this.state = 1817;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_ALL || _la === FlinkSQLParser.KW_ONE) {
				{
				this.state = 1816;
				this.outputMode();
				}
			}

			this.state = 1820;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_AFTER) {
				{
				this.state = 1819;
				this.afterMatchStrategy();
				}
			}

			this.state = 1823;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_PATTERN) {
				{
				this.state = 1822;
				this.patternDefination();
				}
			}

			this.state = 1825;
			this.patternVariablesDefination();
			this.state = 1826;
			this.match(FlinkSQLParser.RR_BRACKET);
			this.state = 1831;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 212, this._ctx) ) {
			case 1:
				{
				this.state = 1828;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_AS) {
					{
					this.state = 1827;
					this.match(FlinkSQLParser.KW_AS);
					}
				}

				this.state = 1830;
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
		this.enterRule(_localctx, 236, FlinkSQLParser.RULE_orderByCaluse);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1833;
			this.match(FlinkSQLParser.KW_ORDER);
			this.state = 1834;
			this.match(FlinkSQLParser.KW_BY);
			this.state = 1835;
			this.orderItemDefition();
			this.state = 1840;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1836;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1837;
					this.orderItemDefition();
					}
					}
				}
				this.state = 1842;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
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
		this.enterRule(_localctx, 238, FlinkSQLParser.RULE_orderItemDefition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1843;
			this.expression();
			this.state = 1845;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 214, this._ctx) ) {
			case 1:
				{
				this.state = 1844;
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
			this.state = 1849;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 215, this._ctx) ) {
			case 1:
				{
				this.state = 1847;
				this.match(FlinkSQLParser.KW_NULLS);
				this.state = 1848;
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
		this.enterRule(_localctx, 240, FlinkSQLParser.RULE_limitClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1851;
			this.match(FlinkSQLParser.KW_LIMIT);
			this.state = 1854;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_ALL:
				{
				this.state = 1852;
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
			case FlinkSQLParser.KW_FIRST_VALUE:
			case FlinkSQLParser.KW_FALSE:
			case FlinkSQLParser.KW_GROUPING:
			case FlinkSQLParser.KW_HOUR:
			case FlinkSQLParser.KW_INTERVAL:
			case FlinkSQLParser.KW_LAG:
			case FlinkSQLParser.KW_LAST_VALUE:
			case FlinkSQLParser.KW_LEAD:
			case FlinkSQLParser.KW_LEFT:
			case FlinkSQLParser.KW_MINUTE:
			case FlinkSQLParser.KW_MONTH:
			case FlinkSQLParser.KW_NOT:
			case FlinkSQLParser.KW_NTILE:
			case FlinkSQLParser.KW_NULL:
			case FlinkSQLParser.KW_OVERLAY:
			case FlinkSQLParser.KW_PERCENT_RANK:
			case FlinkSQLParser.KW_POSITION:
			case FlinkSQLParser.KW_POWER:
			case FlinkSQLParser.KW_ROW_NUMBER:
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
				this.state = 1853;
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
		this.enterRule(_localctx, 242, FlinkSQLParser.RULE_partitionByClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1856;
			this.match(FlinkSQLParser.KW_PARTITION);
			this.state = 1857;
			this.match(FlinkSQLParser.KW_BY);
			this.state = 1858;
			this.expression();
			this.state = 1863;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1859;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1860;
				this.expression();
				}
				}
				this.state = 1865;
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
		this.enterRule(_localctx, 244, FlinkSQLParser.RULE_quantifiers);
		try {
			this.state = 1882;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 218, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 1866;
				this.match(FlinkSQLParser.ASTERISK_SIGN);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 1867;
				this.match(FlinkSQLParser.ADD_SIGN);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 1868;
				this.match(FlinkSQLParser.QUESTION_MARK_SIGN);
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				{
				this.state = 1869;
				this.match(FlinkSQLParser.LB_BRACKET);
				this.state = 1870;
				this.match(FlinkSQLParser.DIG_LITERAL);
				this.state = 1871;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1872;
				this.match(FlinkSQLParser.DIG_LITERAL);
				this.state = 1873;
				this.match(FlinkSQLParser.RB_BRACKET);
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				{
				this.state = 1874;
				this.match(FlinkSQLParser.LB_BRACKET);
				this.state = 1875;
				this.match(FlinkSQLParser.DIG_LITERAL);
				this.state = 1876;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1877;
				this.match(FlinkSQLParser.RB_BRACKET);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				{
				this.state = 1878;
				this.match(FlinkSQLParser.LB_BRACKET);
				this.state = 1879;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1880;
				this.match(FlinkSQLParser.DIG_LITERAL);
				this.state = 1881;
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
		this.enterRule(_localctx, 246, FlinkSQLParser.RULE_measuresClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1884;
			this.match(FlinkSQLParser.KW_MEASURES);
			this.state = 1885;
			this.projectItemDefinition();
			this.state = 1890;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1886;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1887;
				this.projectItemDefinition();
				}
				}
				this.state = 1892;
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
		this.enterRule(_localctx, 248, FlinkSQLParser.RULE_patternDefination);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1893;
			this.match(FlinkSQLParser.KW_PATTERN);
			this.state = 1894;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1896;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1895;
				this.patternVariable();
				}
				}
				this.state = 1898;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FlinkSQLParser.DIG_LITERAL || _la === FlinkSQLParser.ID_LITERAL);
			this.state = 1900;
			this.match(FlinkSQLParser.RR_BRACKET);
			this.state = 1902;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_WITHIN) {
				{
				this.state = 1901;
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
		this.enterRule(_localctx, 250, FlinkSQLParser.RULE_patternVariable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1904;
			this.unquotedIdentifier();
			this.state = 1906;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 400)) & ~0x1F) === 0 && ((1 << (_la - 400)) & ((1 << (FlinkSQLParser.LB_BRACKET - 400)) | (1 << (FlinkSQLParser.ASTERISK_SIGN - 400)) | (1 << (FlinkSQLParser.ADD_SIGN - 400)) | (1 << (FlinkSQLParser.QUESTION_MARK_SIGN - 400)))) !== 0)) {
				{
				this.state = 1905;
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
		this.enterRule(_localctx, 252, FlinkSQLParser.RULE_outputMode);
		try {
			this.state = 1916;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_ALL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1908;
				this.match(FlinkSQLParser.KW_ALL);
				this.state = 1909;
				this.match(FlinkSQLParser.KW_ROWS);
				this.state = 1910;
				this.match(FlinkSQLParser.KW_PER);
				this.state = 1911;
				this.match(FlinkSQLParser.KW_MATCH);
				}
				break;
			case FlinkSQLParser.KW_ONE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1912;
				this.match(FlinkSQLParser.KW_ONE);
				this.state = 1913;
				this.match(FlinkSQLParser.KW_ROW);
				this.state = 1914;
				this.match(FlinkSQLParser.KW_PER);
				this.state = 1915;
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
		this.enterRule(_localctx, 254, FlinkSQLParser.RULE_afterMatchStrategy);
		try {
			this.state = 1942;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 224, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1918;
				this.match(FlinkSQLParser.KW_AFTER);
				this.state = 1919;
				this.match(FlinkSQLParser.KW_MATCH);
				this.state = 1920;
				this.match(FlinkSQLParser.KW_SKIP);
				this.state = 1921;
				this.match(FlinkSQLParser.KW_PAST);
				this.state = 1922;
				this.match(FlinkSQLParser.KW_LAST);
				this.state = 1923;
				this.match(FlinkSQLParser.KW_ROW);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1924;
				this.match(FlinkSQLParser.KW_AFTER);
				this.state = 1925;
				this.match(FlinkSQLParser.KW_MATCH);
				this.state = 1926;
				this.match(FlinkSQLParser.KW_SKIP);
				this.state = 1927;
				this.match(FlinkSQLParser.KW_TO);
				this.state = 1928;
				this.match(FlinkSQLParser.KW_NEXT);
				this.state = 1929;
				this.match(FlinkSQLParser.KW_ROW);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1930;
				this.match(FlinkSQLParser.KW_AFTER);
				this.state = 1931;
				this.match(FlinkSQLParser.KW_MATCH);
				this.state = 1932;
				this.match(FlinkSQLParser.KW_SKIP);
				this.state = 1933;
				this.match(FlinkSQLParser.KW_TO);
				this.state = 1934;
				this.match(FlinkSQLParser.KW_LAST);
				this.state = 1935;
				this.unquotedIdentifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1936;
				this.match(FlinkSQLParser.KW_AFTER);
				this.state = 1937;
				this.match(FlinkSQLParser.KW_MATCH);
				this.state = 1938;
				this.match(FlinkSQLParser.KW_SKIP);
				this.state = 1939;
				this.match(FlinkSQLParser.KW_TO);
				this.state = 1940;
				this.match(FlinkSQLParser.KW_FIRST);
				this.state = 1941;
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
		this.enterRule(_localctx, 256, FlinkSQLParser.RULE_patternVariablesDefination);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1944;
			this.match(FlinkSQLParser.KW_DEFINE);
			this.state = 1945;
			this.projectItemDefinition();
			this.state = 1950;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1946;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1947;
				this.projectItemDefinition();
				}
				}
				this.state = 1952;
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
		this.enterRule(_localctx, 258, FlinkSQLParser.RULE_windowFrame);
		try {
			this.state = 1962;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_RANGE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1953;
				this.match(FlinkSQLParser.KW_RANGE);
				this.state = 1954;
				this.match(FlinkSQLParser.KW_BETWEEN);
				this.state = 1955;
				this.timeIntervalExpression();
				this.state = 1956;
				this.frameBound();
				}
				break;
			case FlinkSQLParser.KW_ROWS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1958;
				this.match(FlinkSQLParser.KW_ROWS);
				this.state = 1959;
				this.match(FlinkSQLParser.KW_BETWEEN);
				this.state = 1960;
				this.match(FlinkSQLParser.DIG_LITERAL);
				this.state = 1961;
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
		this.enterRule(_localctx, 260, FlinkSQLParser.RULE_frameBound);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1964;
			this.match(FlinkSQLParser.KW_PRECEDING);
			this.state = 1965;
			this.match(FlinkSQLParser.KW_AND);
			this.state = 1966;
			this.match(FlinkSQLParser.KW_CURRENT);
			this.state = 1967;
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
		this.enterRule(_localctx, 262, FlinkSQLParser.RULE_withinClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1969;
			this.match(FlinkSQLParser.KW_WITHIN);
			this.state = 1970;
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
		this.enterRule(_localctx, 264, FlinkSQLParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1972;
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
		let _startState: number = 266;
		this.enterRecursionRule(_localctx, 266, FlinkSQLParser.RULE_booleanExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1986;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 228, this._ctx) ) {
			case 1:
				{
				_localctx = new LogicalNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1975;
				this.match(FlinkSQLParser.KW_NOT);
				this.state = 1976;
				this.booleanExpression(6);
				}
				break;

			case 2:
				{
				_localctx = new ExistsContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1977;
				this.match(FlinkSQLParser.KW_EXISTS);
				this.state = 1978;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1979;
				this.queryStatement(0);
				this.state = 1980;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 3:
				{
				_localctx = new PredicatedContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1982;
				this.valueExpression(0);
				this.state = 1984;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 227, this._ctx) ) {
				case 1:
					{
					this.state = 1983;
					this.predicate();
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2002;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 231, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2000;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 230, this._ctx) ) {
					case 1:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_booleanExpression);
						this.state = 1988;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1989;
						(_localctx as LogicalBinaryContext)._operator = this.match(FlinkSQLParser.KW_AND);
						this.state = 1990;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(4);
						}
						break;

					case 2:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_booleanExpression);
						this.state = 1991;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1992;
						(_localctx as LogicalBinaryContext)._operator = this.match(FlinkSQLParser.KW_OR);
						this.state = 1993;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;

					case 3:
						{
						_localctx = new LogicalNestedContext(new BooleanExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_booleanExpression);
						this.state = 1994;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1995;
						this.match(FlinkSQLParser.KW_IS);
						this.state = 1997;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FlinkSQLParser.KW_NOT) {
							{
							this.state = 1996;
							this.match(FlinkSQLParser.KW_NOT);
							}
						}

						this.state = 1999;
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
				this.state = 2004;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 231, this._ctx);
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
		this.enterRule(_localctx, 268, FlinkSQLParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 2072;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 242, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2006;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 2005;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 2008;
				_localctx._kind = this.match(FlinkSQLParser.KW_BETWEEN);
				this.state = 2010;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_ASYMMETRIC || _la === FlinkSQLParser.KW_SYMMETRIC) {
					{
					this.state = 2009;
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

				this.state = 2012;
				_localctx._lower = this.valueExpression(0);
				this.state = 2013;
				this.match(FlinkSQLParser.KW_AND);
				this.state = 2014;
				_localctx._upper = this.valueExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2017;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 2016;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 2019;
				_localctx._kind = this.match(FlinkSQLParser.KW_IN);
				this.state = 2020;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 2021;
				this.expression();
				this.state = 2026;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 2022;
					this.match(FlinkSQLParser.COMMA);
					this.state = 2023;
					this.expression();
					}
					}
					this.state = 2028;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2029;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2032;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 2031;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 2034;
				_localctx._kind = this.match(FlinkSQLParser.KW_IN);
				this.state = 2035;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 2036;
				this.queryStatement(0);
				this.state = 2037;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2039;
				_localctx._kind = this.match(FlinkSQLParser.KW_EXISTS);
				this.state = 2040;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 2041;
				this.queryStatement(0);
				this.state = 2042;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2045;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 2044;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 2047;
				_localctx._kind = this.match(FlinkSQLParser.KW_RLIKE);
				this.state = 2048;
				_localctx._pattern = this.valueExpression(0);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2049;
				this.likePredicate();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2050;
				this.match(FlinkSQLParser.KW_IS);
				this.state = 2052;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 2051;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 2054;
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
				this.state = 2055;
				this.match(FlinkSQLParser.KW_IS);
				this.state = 2057;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 2056;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 2059;
				_localctx._kind = this.match(FlinkSQLParser.KW_DISTINCT);
				this.state = 2060;
				this.match(FlinkSQLParser.KW_FROM);
				this.state = 2061;
				_localctx._right = this.valueExpression(0);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2063;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 2062;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 2065;
				_localctx._kind = this.match(FlinkSQLParser.KW_SIMILAR);
				this.state = 2066;
				this.match(FlinkSQLParser.KW_TO);
				this.state = 2067;
				_localctx._right = this.valueExpression(0);
				this.state = 2070;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 241, this._ctx) ) {
				case 1:
					{
					this.state = 2068;
					this.match(FlinkSQLParser.KW_ESCAPE);
					this.state = 2069;
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
		this.enterRule(_localctx, 270, FlinkSQLParser.RULE_likePredicate);
		let _la: number;
		try {
			this.state = 2103;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 248, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2075;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 2074;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 2077;
				_localctx._kind = this.match(FlinkSQLParser.KW_LIKE);
				this.state = 2078;
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
				this.state = 2092;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 245, this._ctx) ) {
				case 1:
					{
					this.state = 2079;
					this.match(FlinkSQLParser.LR_BRACKET);
					this.state = 2080;
					this.match(FlinkSQLParser.RR_BRACKET);
					}
					break;

				case 2:
					{
					this.state = 2081;
					this.match(FlinkSQLParser.LR_BRACKET);
					this.state = 2082;
					this.expression();
					this.state = 2087;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === FlinkSQLParser.COMMA) {
						{
						{
						this.state = 2083;
						this.match(FlinkSQLParser.COMMA);
						this.state = 2084;
						this.expression();
						}
						}
						this.state = 2089;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2090;
					this.match(FlinkSQLParser.RR_BRACKET);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2095;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 2094;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 2097;
				_localctx._kind = this.match(FlinkSQLParser.KW_LIKE);
				this.state = 2098;
				_localctx._pattern = this.valueExpression(0);
				this.state = 2101;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 247, this._ctx) ) {
				case 1:
					{
					this.state = 2099;
					this.match(FlinkSQLParser.KW_ESCAPE);
					this.state = 2100;
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
		let _startState: number = 272;
		this.enterRecursionRule(_localctx, 272, FlinkSQLParser.RULE_valueExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2109;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 249, this._ctx) ) {
			case 1:
				{
				_localctx = new ValueExpressionDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 2106;
				this.primaryExpression(0);
				}
				break;

			case 2:
				{
				_localctx = new ArithmeticUnaryContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2107;
				(_localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 387)) & ~0x1F) === 0 && ((1 << (_la - 387)) & ((1 << (FlinkSQLParser.BIT_NOT_OP - 387)) | (1 << (FlinkSQLParser.HYPNEN_SIGN - 387)) | (1 << (FlinkSQLParser.ADD_SIGN - 387)))) !== 0))) {
					(_localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2108;
				this.valueExpression(8);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2134;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 251, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2132;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 250, this._ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_valueExpression);
						this.state = 2111;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 2112;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === FlinkSQLParser.KW_DIV || ((((_la - 409)) & ~0x1F) === 0 && ((1 << (_la - 409)) & ((1 << (FlinkSQLParser.ASTERISK_SIGN - 409)) | (1 << (FlinkSQLParser.PENCENT_SIGN - 409)) | (1 << (FlinkSQLParser.SLASH_SIGN - 409)))) !== 0))) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 2113;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(8);
						}
						break;

					case 2:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_valueExpression);
						this.state = 2114;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 2115;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 411)) & ~0x1F) === 0 && ((1 << (_la - 411)) & ((1 << (FlinkSQLParser.HYPNEN_SIGN - 411)) | (1 << (FlinkSQLParser.ADD_SIGN - 411)) | (1 << (FlinkSQLParser.DOUBLE_VERTICAL_SIGN - 411)))) !== 0))) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 2116;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(7);
						}
						break;

					case 3:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_valueExpression);
						this.state = 2117;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 2118;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSQLParser.BIT_AND_OP);
						this.state = 2119;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(6);
						}
						break;

					case 4:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_valueExpression);
						this.state = 2120;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 2121;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSQLParser.BIT_XOR_OP);
						this.state = 2122;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(5);
						}
						break;

					case 5:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_valueExpression);
						this.state = 2123;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 2124;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSQLParser.BIT_OR_OP);
						this.state = 2125;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;

					case 6:
						{
						_localctx = new ComparisonContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ComparisonContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_valueExpression);
						this.state = 2126;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2127;
						this.comparisonOperator();
						this.state = 2128;
						(_localctx as ComparisonContext)._right = this.valueExpression(3);
						}
						break;

					case 7:
						{
						_localctx = new ArithmeticBinaryAlternateContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryAlternateContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_valueExpression);
						this.state = 2130;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2131;
						(_localctx as ArithmeticBinaryAlternateContext)._right = this.match(FlinkSQLParser.SLASH_TEXT);
						}
						break;
					}
					}
				}
				this.state = 2136;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 251, this._ctx);
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
		let _startState: number = 274;
		this.enterRecursionRule(_localctx, 274, FlinkSQLParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2246;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 263, this._ctx) ) {
			case 1:
				{
				_localctx = new SearchedCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 2138;
				this.match(FlinkSQLParser.KW_CASE);
				this.state = 2140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2139;
					this.whenClause();
					}
					}
					this.state = 2142;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === FlinkSQLParser.KW_WHEN);
				this.state = 2146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_ELSE) {
					{
					this.state = 2144;
					this.match(FlinkSQLParser.KW_ELSE);
					this.state = 2145;
					(_localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 2148;
				this.match(FlinkSQLParser.KW_END);
				}
				break;

			case 2:
				{
				_localctx = new SimpleCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2150;
				this.match(FlinkSQLParser.KW_CASE);
				this.state = 2151;
				(_localctx as SimpleCaseContext)._value = this.expression();
				this.state = 2153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2152;
					this.whenClause();
					}
					}
					this.state = 2155;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === FlinkSQLParser.KW_WHEN);
				this.state = 2159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_ELSE) {
					{
					this.state = 2157;
					this.match(FlinkSQLParser.KW_ELSE);
					this.state = 2158;
					(_localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 2161;
				this.match(FlinkSQLParser.KW_END);
				}
				break;

			case 3:
				{
				_localctx = new CastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2163;
				this.match(FlinkSQLParser.KW_CAST);
				this.state = 2164;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 2165;
				this.expression();
				this.state = 2166;
				this.match(FlinkSQLParser.KW_AS);
				this.state = 2167;
				this.columnType();
				this.state = 2168;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 4:
				{
				_localctx = new FirstContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2170;
				this.match(FlinkSQLParser.KW_FIRST);
				this.state = 2171;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 2172;
				this.expression();
				this.state = 2175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_IGNORE) {
					{
					this.state = 2173;
					this.match(FlinkSQLParser.KW_IGNORE);
					this.state = 2174;
					this.match(FlinkSQLParser.KW_NULLS);
					}
				}

				this.state = 2177;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 5:
				{
				_localctx = new LastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2179;
				this.match(FlinkSQLParser.KW_LAST);
				this.state = 2180;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 2181;
				this.expression();
				this.state = 2184;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_IGNORE) {
					{
					this.state = 2182;
					this.match(FlinkSQLParser.KW_IGNORE);
					this.state = 2183;
					this.match(FlinkSQLParser.KW_NULLS);
					}
				}

				this.state = 2186;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 6:
				{
				_localctx = new PositionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2188;
				this.match(FlinkSQLParser.KW_POSITION);
				this.state = 2189;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 2190;
				(_localctx as PositionContext)._substr = this.valueExpression(0);
				this.state = 2191;
				this.match(FlinkSQLParser.KW_IN);
				this.state = 2192;
				(_localctx as PositionContext)._str = this.valueExpression(0);
				this.state = 2193;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 7:
				{
				_localctx = new ConstantDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2195;
				this.constant();
				}
				break;

			case 8:
				{
				_localctx = new StarContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2196;
				this.match(FlinkSQLParser.ASTERISK_SIGN);
				}
				break;

			case 9:
				{
				_localctx = new StarContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2197;
				this.uid();
				this.state = 2198;
				this.match(FlinkSQLParser.DOT);
				this.state = 2199;
				this.match(FlinkSQLParser.ASTERISK_SIGN);
				}
				break;

			case 10:
				{
				_localctx = new SubqueryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2201;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 2202;
				this.queryStatement(0);
				this.state = 2203;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 11:
				{
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2205;
				this.functionName();
				this.state = 2206;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 2218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSQLParser.T__0) | (1 << FlinkSQLParser.KW_ADD) | (1 << FlinkSQLParser.KW_ADMIN) | (1 << FlinkSQLParser.KW_AFTER) | (1 << FlinkSQLParser.KW_ANALYZE) | (1 << FlinkSQLParser.KW_ASC) | (1 << FlinkSQLParser.KW_BEFORE) | (1 << FlinkSQLParser.KW_BYTES) | (1 << FlinkSQLParser.KW_CASCADE) | (1 << FlinkSQLParser.KW_CATALOG) | (1 << FlinkSQLParser.KW_CATALOGS) | (1 << FlinkSQLParser.KW_CENTURY) | (1 << FlinkSQLParser.KW_CHAIN) | (1 << FlinkSQLParser.KW_CHANGELOG_MODE) | (1 << FlinkSQLParser.KW_CHARACTERS) | (1 << FlinkSQLParser.KW_COMMENT) | (1 << FlinkSQLParser.KW_COMPACT) | (1 << FlinkSQLParser.KW_COLUMNS) | (1 << FlinkSQLParser.KW_CONSTRAINTS) | (1 << FlinkSQLParser.KW_CONSTRUCTOR) | (1 << FlinkSQLParser.KW_CUMULATE) | (1 << FlinkSQLParser.KW_DATA) | (1 << FlinkSQLParser.KW_DATABASE) | (1 << FlinkSQLParser.KW_DATABASES) | (1 << FlinkSQLParser.KW_DAYS) | (1 << FlinkSQLParser.KW_DECADE) | (1 << FlinkSQLParser.KW_DEFINED) | (1 << FlinkSQLParser.KW_DESC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSQLParser.KW_DESCRIPTOR - 32)) | (1 << (FlinkSQLParser.KW_DIV - 32)) | (1 << (FlinkSQLParser.KW_ENCODING - 32)) | (1 << (FlinkSQLParser.KW_ENFORCED - 32)) | (1 << (FlinkSQLParser.KW_ENGINE - 32)) | (1 << (FlinkSQLParser.KW_EPOCH - 32)) | (1 << (FlinkSQLParser.KW_ERROR - 32)) | (1 << (FlinkSQLParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSQLParser.KW_EXCEPTION - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDE - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDING - 32)) | (1 << (FlinkSQLParser.KW_EXTENDED - 32)) | (1 << (FlinkSQLParser.KW_FILTER - 32)) | (1 << (FlinkSQLParser.KW_FILE - 32)) | (1 << (FlinkSQLParser.KW_FINAL - 32)) | (1 << (FlinkSQLParser.KW_FIRST - 32)) | (1 << (FlinkSQLParser.KW_FOLLOWING - 32)) | (1 << (FlinkSQLParser.KW_FORMAT - 32)) | (1 << (FlinkSQLParser.KW_FORTRAN - 32)) | (1 << (FlinkSQLParser.KW_FOUND - 32)) | (1 << (FlinkSQLParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSQLParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSQLParser.KW_GENERAL - 32)) | (1 << (FlinkSQLParser.KW_GENERATED - 32)) | (1 << (FlinkSQLParser.KW_GO - 32)) | (1 << (FlinkSQLParser.KW_GOTO - 32)) | (1 << (FlinkSQLParser.KW_GRANTED - 32)) | (1 << (FlinkSQLParser.KW_HOP - 32)) | (1 << (FlinkSQLParser.KW_HOURS - 32)) | (1 << (FlinkSQLParser.KW_IF - 32)) | (1 << (FlinkSQLParser.KW_IGNORE - 32)) | (1 << (FlinkSQLParser.KW_INCREMENT - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSQLParser.KW_INPUT - 64)) | (1 << (FlinkSQLParser.KW_INVOKER - 64)) | (1 << (FlinkSQLParser.KW_JAR - 64)) | (1 << (FlinkSQLParser.KW_JARS - 64)) | (1 << (FlinkSQLParser.KW_JAVA - 64)) | (1 << (FlinkSQLParser.KW_JSON - 64)) | (1 << (FlinkSQLParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSQLParser.KW_KEY - 64)) | (1 << (FlinkSQLParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSQLParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSQLParser.KW_LABEL - 64)) | (1 << (FlinkSQLParser.KW_LAST - 64)) | (1 << (FlinkSQLParser.KW_LENGTH - 64)) | (1 << (FlinkSQLParser.KW_LEVEL - 64)) | (1 << (FlinkSQLParser.KW_LOAD - 64)) | (1 << (FlinkSQLParser.KW_MAP - 64)) | (1 << (FlinkSQLParser.KW_MICROSECOND - 64)) | (1 << (FlinkSQLParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSQLParser.KW_MILLISECOND - 64)) | (1 << (FlinkSQLParser.KW_MINUTES - 64)) | (1 << (FlinkSQLParser.KW_MINVALUE - 64)) | (1 << (FlinkSQLParser.KW_MODIFY - 64)) | (1 << (FlinkSQLParser.KW_MODULES - 64)) | (1 << (FlinkSQLParser.KW_MONTHS - 64)) | (1 << (FlinkSQLParser.KW_NANOSECOND - 64)) | (1 << (FlinkSQLParser.KW_NULLS - 64)) | (1 << (FlinkSQLParser.KW_NUMBER - 64)) | (1 << (FlinkSQLParser.KW_OPTION - 64)) | (1 << (FlinkSQLParser.KW_OPTIONS - 64)) | (1 << (FlinkSQLParser.KW_ORDERING - 64)) | (1 << (FlinkSQLParser.KW_OUTPUT - 64)) | (1 << (FlinkSQLParser.KW_OVERWRITE - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSQLParser.KW_OVERWRITING - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONED - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONS - 96)) | (1 << (FlinkSQLParser.KW_PASSING - 96)) | (1 << (FlinkSQLParser.KW_PAST - 96)) | (1 << (FlinkSQLParser.KW_PATH - 96)) | (1 << (FlinkSQLParser.KW_PLACING - 96)) | (1 << (FlinkSQLParser.KW_PLAN - 96)) | (1 << (FlinkSQLParser.KW_PRECEDING - 96)) | (1 << (FlinkSQLParser.KW_PRESERVE - 96)) | (1 << (FlinkSQLParser.KW_PRIOR - 96)) | (1 << (FlinkSQLParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSQLParser.KW_PUBLIC - 96)) | (1 << (FlinkSQLParser.KW_PYTHON - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSQLParser.KW_QUARTER - 96)) | (1 << (FlinkSQLParser.KW_RAW - 96)) | (1 << (FlinkSQLParser.KW_READ - 96)) | (1 << (FlinkSQLParser.KW_RELATIVE - 96)) | (1 << (FlinkSQLParser.KW_REMOVE - 96)) | (1 << (FlinkSQLParser.KW_RENAME - 96)) | (1 << (FlinkSQLParser.KW_REPLACE - 96)) | (1 << (FlinkSQLParser.KW_RESPECT - 96)) | (1 << (FlinkSQLParser.KW_RESTART - 96)) | (1 << (FlinkSQLParser.KW_RESTRICT - 96)) | (1 << (FlinkSQLParser.KW_ROLE - 96)) | (1 << (FlinkSQLParser.KW_ROW_COUNT - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSQLParser.KW_SCALA - 128)) | (1 << (FlinkSQLParser.KW_SCALAR - 128)) | (1 << (FlinkSQLParser.KW_SCALE - 128)) | (1 << (FlinkSQLParser.KW_SCHEMA - 128)) | (1 << (FlinkSQLParser.KW_SECONDS - 128)) | (1 << (FlinkSQLParser.KW_SECTION - 128)) | (1 << (FlinkSQLParser.KW_SECURITY - 128)) | (1 << (FlinkSQLParser.KW_SELF - 128)) | (1 << (FlinkSQLParser.KW_SERVER - 128)) | (1 << (FlinkSQLParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSQLParser.KW_SESSION - 128)) | (1 << (FlinkSQLParser.KW_SETS - 128)) | (1 << (FlinkSQLParser.KW_SIMPLE - 128)) | (1 << (FlinkSQLParser.KW_SIZE - 128)) | (1 << (FlinkSQLParser.KW_SLIDE - 128)) | (1 << (FlinkSQLParser.KW_SOURCE - 128)) | (1 << (FlinkSQLParser.KW_SPACE - 128)) | (1 << (FlinkSQLParser.KW_STATE - 128)) | (1 << (FlinkSQLParser.KW_STATEMENT - 128)) | (1 << (FlinkSQLParser.KW_STEP - 128)) | (1 << (FlinkSQLParser.KW_STRING - 128)) | (1 << (FlinkSQLParser.KW_STRUCTURE - 128)) | (1 << (FlinkSQLParser.KW_STYLE - 128)) | (1 << (FlinkSQLParser.KW_TABLES - 128)) | (1 << (FlinkSQLParser.KW_TEMPORARY - 128)) | (1 << (FlinkSQLParser.KW_TIMECOL - 128)) | (1 << (FlinkSQLParser.KW_FLOOR - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_LTZ - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPADD - 128)) | (1 << (FlinkSQLParser.KW_TIMESTAMPDIFF - 128)) | (1 << (FlinkSQLParser.KW_TRANSFORM - 128)) | (1 << (FlinkSQLParser.KW_TUMBLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSQLParser.KW_TYPE - 160)) | (1 << (FlinkSQLParser.KW_UNDER - 160)) | (1 << (FlinkSQLParser.KW_UNLOAD - 160)) | (1 << (FlinkSQLParser.KW_USAGE - 160)) | (1 << (FlinkSQLParser.KW_USE - 160)) | (1 << (FlinkSQLParser.KW_UTF16 - 160)) | (1 << (FlinkSQLParser.KW_UTF32 - 160)) | (1 << (FlinkSQLParser.KW_UTF8 - 160)) | (1 << (FlinkSQLParser.KW_VERSION - 160)) | (1 << (FlinkSQLParser.KW_VIEW - 160)) | (1 << (FlinkSQLParser.KW_VIEWS - 160)) | (1 << (FlinkSQLParser.KW_VIRTUAL - 160)) | (1 << (FlinkSQLParser.KW_WATERMARK - 160)) | (1 << (FlinkSQLParser.KW_WATERMARKS - 160)) | (1 << (FlinkSQLParser.KW_WEEK - 160)) | (1 << (FlinkSQLParser.KW_WEEKS - 160)) | (1 << (FlinkSQLParser.KW_WORK - 160)) | (1 << (FlinkSQLParser.KW_WRAPPER - 160)) | (1 << (FlinkSQLParser.KW_YEARS - 160)) | (1 << (FlinkSQLParser.KW_ZONE - 160)) | (1 << (FlinkSQLParser.KW_ABS - 160)) | (1 << (FlinkSQLParser.KW_ALL - 160)) | (1 << (FlinkSQLParser.KW_ARRAY - 160)) | (1 << (FlinkSQLParser.KW_AVG - 160)))) !== 0) || ((((_la - 199)) & ~0x1F) === 0 && ((1 << (_la - 199)) & ((1 << (FlinkSQLParser.KW_BOTH - 199)) | (1 << (FlinkSQLParser.KW_CASE - 199)) | (1 << (FlinkSQLParser.KW_CAST - 199)) | (1 << (FlinkSQLParser.KW_CEIL - 199)) | (1 << (FlinkSQLParser.KW_COALESCE - 199)) | (1 << (FlinkSQLParser.KW_COLLECT - 199)) | (1 << (FlinkSQLParser.KW_COUNT - 199)) | (1 << (FlinkSQLParser.KW_DATE - 199)))) !== 0) || ((((_la - 231)) & ~0x1F) === 0 && ((1 << (_la - 231)) & ((1 << (FlinkSQLParser.KW_DAY - 231)) | (1 << (FlinkSQLParser.KW_DISTINCT - 231)) | (1 << (FlinkSQLParser.KW_EXISTS - 231)) | (1 << (FlinkSQLParser.KW_FIRST_VALUE - 231)) | (1 << (FlinkSQLParser.KW_FALSE - 231)))) !== 0) || ((((_la - 264)) & ~0x1F) === 0 && ((1 << (_la - 264)) & ((1 << (FlinkSQLParser.KW_GROUPING - 264)) | (1 << (FlinkSQLParser.KW_HOUR - 264)) | (1 << (FlinkSQLParser.KW_INTERVAL - 264)) | (1 << (FlinkSQLParser.KW_LAG - 264)) | (1 << (FlinkSQLParser.KW_LAST_VALUE - 264)) | (1 << (FlinkSQLParser.KW_LEAD - 264)) | (1 << (FlinkSQLParser.KW_LEADING - 264)) | (1 << (FlinkSQLParser.KW_LEFT - 264)))) !== 0) || ((((_la - 297)) & ~0x1F) === 0 && ((1 << (_la - 297)) & ((1 << (FlinkSQLParser.KW_MINUTE - 297)) | (1 << (FlinkSQLParser.KW_MONTH - 297)) | (1 << (FlinkSQLParser.KW_NOT - 297)) | (1 << (FlinkSQLParser.KW_NTILE - 297)) | (1 << (FlinkSQLParser.KW_NULL - 297)) | (1 << (FlinkSQLParser.KW_OVERLAY - 297)) | (1 << (FlinkSQLParser.KW_PERCENT_RANK - 297)) | (1 << (FlinkSQLParser.KW_POSITION - 297)) | (1 << (FlinkSQLParser.KW_POWER - 297)))) !== 0) || ((((_la - 330)) & ~0x1F) === 0 && ((1 << (_la - 330)) & ((1 << (FlinkSQLParser.KW_ROW_NUMBER - 330)) | (1 << (FlinkSQLParser.KW_RANK - 330)) | (1 << (FlinkSQLParser.KW_RIGHT - 330)) | (1 << (FlinkSQLParser.KW_ROW - 330)) | (1 << (FlinkSQLParser.KW_SECOND - 330)) | (1 << (FlinkSQLParser.KW_SUBSTRING - 330)) | (1 << (FlinkSQLParser.KW_SUM - 330)) | (1 << (FlinkSQLParser.KW_TIME - 330)) | (1 << (FlinkSQLParser.KW_TIMESTAMP - 330)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_3 - 330)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_6 - 330)))) !== 0) || ((((_la - 362)) & ~0x1F) === 0 && ((1 << (_la - 362)) & ((1 << (FlinkSQLParser.KW_TIMESTAMP_9 - 362)) | (1 << (FlinkSQLParser.KW_TRAILING - 362)) | (1 << (FlinkSQLParser.KW_TRUE - 362)) | (1 << (FlinkSQLParser.KW_TRUNCATE - 362)) | (1 << (FlinkSQLParser.KW_UPPER - 362)) | (1 << (FlinkSQLParser.KW_YEAR - 362)) | (1 << (FlinkSQLParser.BIT_NOT_OP - 362)))) !== 0) || ((((_la - 398)) & ~0x1F) === 0 && ((1 << (_la - 398)) & ((1 << (FlinkSQLParser.LR_BRACKET - 398)) | (1 << (FlinkSQLParser.ASTERISK_SIGN - 398)) | (1 << (FlinkSQLParser.HYPNEN_SIGN - 398)) | (1 << (FlinkSQLParser.ADD_SIGN - 398)) | (1 << (FlinkSQLParser.STRING_LITERAL - 398)) | (1 << (FlinkSQLParser.DIG_LITERAL - 398)) | (1 << (FlinkSQLParser.REAL_LITERAL - 398)) | (1 << (FlinkSQLParser.BIT_STRING - 398)) | (1 << (FlinkSQLParser.ID_LITERAL - 398)))) !== 0)) {
					{
					this.state = 2208;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 258, this._ctx) ) {
					case 1:
						{
						this.state = 2207;
						this.setQuantifier();
						}
						break;
					}
					this.state = 2210;
					this.functionParam();
					this.state = 2215;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === FlinkSQLParser.COMMA) {
						{
						{
						this.state = 2211;
						this.match(FlinkSQLParser.COMMA);
						this.state = 2212;
						this.functionParam();
						}
						}
						this.state = 2217;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 2220;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 12:
				{
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2222;
				this.functionName();
				this.state = 2223;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 2224;
				this.functionParam();
				this.state = 2225;
				this.match(FlinkSQLParser.KW_TO);
				this.state = 2226;
				this.functionParam();
				this.state = 2227;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 13:
				{
				_localctx = new FunctionCallFilterContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2229;
				this.functionName();
				this.state = 2230;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 2232;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 261, this._ctx) ) {
				case 1:
					{
					this.state = 2231;
					this.setQuantifier();
					}
					break;
				}
				this.state = 2234;
				this.functionParam();
				this.state = 2235;
				this.match(FlinkSQLParser.RR_BRACKET);
				this.state = 2237;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 262, this._ctx) ) {
				case 1:
					{
					this.state = 2236;
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
				this.state = 2239;
				this.identifier();
				}
				break;

			case 15:
				{
				_localctx = new DereferenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2240;
				this.dereferenceDefinition();
				}
				break;

			case 16:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2241;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 2242;
				this.expression();
				this.state = 2243;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 17:
				{
				_localctx = new ComplexDataTypeFieldExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2245;
				this.complexDataTypeExpression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2255;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 264, this._ctx);
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
					this.state = 2248;
					if (!(this.precpred(this._ctx, 5))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
					}
					this.state = 2249;
					this.match(FlinkSQLParser.LS_BRACKET);
					this.state = 2250;
					(_localctx as SubscriptContext)._index = this.valueExpression(0);
					this.state = 2251;
					this.match(FlinkSQLParser.RS_BRACKET);
					}
					}
				}
				this.state = 2257;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 264, this._ctx);
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
		this.enterRule(_localctx, 276, FlinkSQLParser.RULE_complexDataTypeExpression);
		try {
			this.state = 2261;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_ARRAY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2258;
				this.arrayExpression();
				}
				break;
			case FlinkSQLParser.KW_ROW:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2259;
				this.rowExpression();
				}
				break;
			case FlinkSQLParser.KW_MAP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2260;
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
		this.enterRule(_localctx, 278, FlinkSQLParser.RULE_arrayExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2263;
			this.match(FlinkSQLParser.KW_ARRAY);
			this.state = 2264;
			this.match(FlinkSQLParser.LS_BRACKET);
			this.state = 2265;
			this.dataTypeExpression();
			this.state = 2270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 2266;
				this.match(FlinkSQLParser.COMMA);
				this.state = 2267;
				this.dataTypeExpression();
				}
				}
				this.state = 2272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2273;
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
		this.enterRule(_localctx, 280, FlinkSQLParser.RULE_rowExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2275;
			this.match(FlinkSQLParser.KW_ROW);
			this.state = 2276;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 2277;
			this.dataTypeExpression();
			this.state = 2282;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 2278;
				this.match(FlinkSQLParser.COMMA);
				this.state = 2279;
				this.dataTypeExpression();
				}
				}
				this.state = 2284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2285;
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
		this.enterRule(_localctx, 282, FlinkSQLParser.RULE_mapExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2287;
			this.match(FlinkSQLParser.KW_MAP);
			this.state = 2288;
			this.match(FlinkSQLParser.LS_BRACKET);
			this.state = 2289;
			this.dataTypeExpression();
			this.state = 2290;
			this.match(FlinkSQLParser.COMMA);
			this.state = 2291;
			this.dataTypeExpression();
			this.state = 2292;
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
	public dataTypeExpression(): DataTypeExpressionContext {
		let _localctx: DataTypeExpressionContext = new DataTypeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, FlinkSQLParser.RULE_dataTypeExpression);
		try {
			this.state = 2296;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 268, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2294;
				this.columnAlias();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2295;
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
		this.enterRule(_localctx, 286, FlinkSQLParser.RULE_functionName);
		try {
			this.state = 2301;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 269, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2298;
				this.reservedKeywordsUsedAsFuncName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2299;
				this.nonReservedKeywords();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2300;
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
		this.enterRule(_localctx, 288, FlinkSQLParser.RULE_functionParam);
		try {
			this.state = 2308;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 270, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2303;
				this.reservedKeywordsUsedAsFuncParam();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2304;
				this.timeIntervalUnit();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2305;
				this.timePointUnit();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2306;
				this.expression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2307;
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
		this.enterRule(_localctx, 290, FlinkSQLParser.RULE_filterClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2310;
			this.match(FlinkSQLParser.KW_FILTER);
			this.state = 2311;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 2312;
			this.match(FlinkSQLParser.KW_WHERE);
			this.state = 2313;
			this.booleanExpression(0);
			this.state = 2314;
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
		this.enterRule(_localctx, 292, FlinkSQLParser.RULE_dereferenceDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2316;
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
		this.enterRule(_localctx, 294, FlinkSQLParser.RULE_correlationName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2318;
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
		this.enterRule(_localctx, 296, FlinkSQLParser.RULE_qualifiedName);
		try {
			this.state = 2322;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 271, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2320;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2321;
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
		this.enterRule(_localctx, 298, FlinkSQLParser.RULE_timeIntervalExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2324;
			this.match(FlinkSQLParser.KW_INTERVAL);
			this.state = 2327;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 272, this._ctx) ) {
			case 1:
				{
				this.state = 2325;
				this.errorCapturingMultiUnitsInterval();
				}
				break;

			case 2:
				{
				this.state = 2326;
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
		this.enterRule(_localctx, 300, FlinkSQLParser.RULE_errorCapturingMultiUnitsInterval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2329;
			this.multiUnitsInterval();
			this.state = 2331;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 273, this._ctx) ) {
			case 1:
				{
				this.state = 2330;
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
		this.enterRule(_localctx, 302, FlinkSQLParser.RULE_multiUnitsInterval);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2336;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2333;
					this.intervalValue();
					this.state = 2334;
					this.timeIntervalUnit();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2338;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 274, this._ctx);
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
		this.enterRule(_localctx, 304, FlinkSQLParser.RULE_errorCapturingUnitToUnitInterval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2340;
			_localctx._body = this.unitToUnitInterval();
			this.state = 2343;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 275, this._ctx) ) {
			case 1:
				{
				this.state = 2341;
				_localctx._error1 = this.multiUnitsInterval();
				}
				break;

			case 2:
				{
				this.state = 2342;
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
		this.enterRule(_localctx, 306, FlinkSQLParser.RULE_unitToUnitInterval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2345;
			_localctx._value = this.intervalValue();
			this.state = 2346;
			_localctx._from = this.timeIntervalUnit();
			this.state = 2347;
			this.match(FlinkSQLParser.KW_TO);
			this.state = 2348;
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
		this.enterRule(_localctx, 308, FlinkSQLParser.RULE_intervalValue);
		let _la: number;
		try {
			this.state = 2355;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.HYPNEN_SIGN:
			case FlinkSQLParser.ADD_SIGN:
			case FlinkSQLParser.DIG_LITERAL:
			case FlinkSQLParser.REAL_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2351;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.HYPNEN_SIGN || _la === FlinkSQLParser.ADD_SIGN) {
					{
					this.state = 2350;
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

				this.state = 2353;
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
				this.state = 2354;
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
		this.enterRule(_localctx, 310, FlinkSQLParser.RULE_columnAlias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2358;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_AS) {
				{
				this.state = 2357;
				this.match(FlinkSQLParser.KW_AS);
				}
			}

			this.state = 2360;
			this.identifier();
			this.state = 2362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.LR_BRACKET) {
				{
				this.state = 2361;
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
		this.enterRule(_localctx, 312, FlinkSQLParser.RULE_tableAlias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_AS) {
				{
				this.state = 2364;
				this.match(FlinkSQLParser.KW_AS);
				}
			}

			this.state = 2367;
			this.identifier();
			this.state = 2369;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 281, this._ctx) ) {
			case 1:
				{
				this.state = 2368;
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
		this.enterRule(_localctx, 314, FlinkSQLParser.RULE_errorCapturingIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2371;
			this.identifier();
			this.state = 2372;
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
		this.enterRule(_localctx, 316, FlinkSQLParser.RULE_errorCapturingIdentifierExtra);
		let _la: number;
		try {
			this.state = 2381;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_MINUS:
				_localctx = new ErrorIdentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2376;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2374;
					this.match(FlinkSQLParser.KW_MINUS);
					this.state = 2375;
					this.identifier();
					}
					}
					this.state = 2378;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === FlinkSQLParser.KW_MINUS);
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
			case FlinkSQLParser.KW_AS:
			case FlinkSQLParser.LR_BRACKET:
			case FlinkSQLParser.STRING_LITERAL:
			case FlinkSQLParser.DIG_LITERAL:
			case FlinkSQLParser.ID_LITERAL:
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
		this.enterRule(_localctx, 318, FlinkSQLParser.RULE_identifierList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2383;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 2384;
			this.identifierSeq();
			this.state = 2385;
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
		this.enterRule(_localctx, 320, FlinkSQLParser.RULE_identifierSeq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2387;
			this.identifier();
			this.state = 2392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 2388;
				this.match(FlinkSQLParser.COMMA);
				this.state = 2389;
				this.identifier();
				}
				}
				this.state = 2394;
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
		this.enterRule(_localctx, 322, FlinkSQLParser.RULE_identifier);
		try {
			this.state = 2399;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.DIG_LITERAL:
			case FlinkSQLParser.ID_LITERAL:
				_localctx = new UnquotedIdentifierAlternativeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2395;
				this.unquotedIdentifier();
				}
				break;
			case FlinkSQLParser.STRING_LITERAL:
				_localctx = new QuotedIdentifierAlternativeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2396;
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
				this.state = 2397;
				this.nonReservedKeywords();
				}
				break;
			case FlinkSQLParser.T__0:
				_localctx = new UrefVarAlternativeContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2398;
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
		this.enterRule(_localctx, 324, FlinkSQLParser.RULE_refVar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2401;
			this.match(FlinkSQLParser.T__0);
			this.state = 2402;
			this.match(FlinkSQLParser.LB_BRACKET);
			this.state = 2403;
			this.unquotedIdentifier();
			this.state = 2404;
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
		this.enterRule(_localctx, 326, FlinkSQLParser.RULE_unquotedIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2406;
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
		this.enterRule(_localctx, 328, FlinkSQLParser.RULE_quotedIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2408;
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
		this.enterRule(_localctx, 330, FlinkSQLParser.RULE_whenClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2410;
			this.match(FlinkSQLParser.KW_WHEN);
			this.state = 2411;
			_localctx._condition = this.expression();
			this.state = 2412;
			this.match(FlinkSQLParser.KW_THEN);
			this.state = 2413;
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
		this.enterRule(_localctx, 332, FlinkSQLParser.RULE_catalogPath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2415;
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
		this.enterRule(_localctx, 334, FlinkSQLParser.RULE_databasePath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2417;
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
		this.enterRule(_localctx, 336, FlinkSQLParser.RULE_databasePathCreate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2419;
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
		this.enterRule(_localctx, 338, FlinkSQLParser.RULE_tablePathCreate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2421;
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
		this.enterRule(_localctx, 340, FlinkSQLParser.RULE_tablePath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2423;
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
		this.enterRule(_localctx, 342, FlinkSQLParser.RULE_uid);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2425;
			this.identifier();
			this.state = 2430;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 286, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 2426;
					this.match(FlinkSQLParser.DOT);
					this.state = 2427;
					this.identifier();
					}
					}
				}
				this.state = 2432;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 286, this._ctx);
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
		this.enterRule(_localctx, 344, FlinkSQLParser.RULE_withOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2433;
			this.match(FlinkSQLParser.KW_WITH);
			this.state = 2434;
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
		this.enterRule(_localctx, 346, FlinkSQLParser.RULE_ifNotExists);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2436;
			this.match(FlinkSQLParser.KW_IF);
			this.state = 2437;
			this.match(FlinkSQLParser.KW_NOT);
			this.state = 2438;
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
		this.enterRule(_localctx, 348, FlinkSQLParser.RULE_ifExists);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2440;
			this.match(FlinkSQLParser.KW_IF);
			this.state = 2441;
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
		this.enterRule(_localctx, 350, FlinkSQLParser.RULE_tablePropertyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2443;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 2444;
			this.tableProperty();
			this.state = 2449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 2445;
				this.match(FlinkSQLParser.COMMA);
				this.state = 2446;
				this.tableProperty();
				}
				}
				this.state = 2451;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2452;
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
		this.enterRule(_localctx, 352, FlinkSQLParser.RULE_tableProperty);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2454;
			_localctx._key = this.tablePropertyKey();
			this.state = 2459;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_FALSE || _la === FlinkSQLParser.KW_TRUE || _la === FlinkSQLParser.EQUAL_SYMBOL || ((((_la - 419)) & ~0x1F) === 0 && ((1 << (_la - 419)) & ((1 << (FlinkSQLParser.STRING_LITERAL - 419)) | (1 << (FlinkSQLParser.DIG_LITERAL - 419)) | (1 << (FlinkSQLParser.REAL_LITERAL - 419)))) !== 0)) {
				{
				this.state = 2456;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.EQUAL_SYMBOL) {
					{
					this.state = 2455;
					this.match(FlinkSQLParser.EQUAL_SYMBOL);
					}
				}

				this.state = 2458;
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
		this.enterRule(_localctx, 354, FlinkSQLParser.RULE_tablePropertyKey);
		try {
			this.state = 2464;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 290, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2461;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2462;
				this.dereferenceDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2463;
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
		this.enterRule(_localctx, 356, FlinkSQLParser.RULE_tablePropertyValue);
		try {
			this.state = 2470;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.DIG_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2466;
				this.match(FlinkSQLParser.DIG_LITERAL);
				}
				break;
			case FlinkSQLParser.REAL_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2467;
				this.match(FlinkSQLParser.REAL_LITERAL);
				}
				break;
			case FlinkSQLParser.KW_FALSE:
			case FlinkSQLParser.KW_TRUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2468;
				this.booleanLiteral();
				}
				break;
			case FlinkSQLParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2469;
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
		this.enterRule(_localctx, 358, FlinkSQLParser.RULE_logicalOperator);
		try {
			this.state = 2478;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_AND:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2472;
				this.match(FlinkSQLParser.KW_AND);
				}
				break;
			case FlinkSQLParser.BIT_AND_OP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2473;
				this.match(FlinkSQLParser.BIT_AND_OP);
				this.state = 2474;
				this.match(FlinkSQLParser.BIT_AND_OP);
				}
				break;
			case FlinkSQLParser.KW_OR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2475;
				this.match(FlinkSQLParser.KW_OR);
				}
				break;
			case FlinkSQLParser.BIT_OR_OP:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2476;
				this.match(FlinkSQLParser.BIT_OR_OP);
				this.state = 2477;
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
		this.enterRule(_localctx, 360, FlinkSQLParser.RULE_comparisonOperator);
		try {
			this.state = 2494;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 293, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2480;
				this.match(FlinkSQLParser.EQUAL_SYMBOL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2481;
				this.match(FlinkSQLParser.GREATER_SYMBOL);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2482;
				this.match(FlinkSQLParser.LESS_SYMBOL);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2483;
				this.match(FlinkSQLParser.LESS_SYMBOL);
				this.state = 2484;
				this.match(FlinkSQLParser.EQUAL_SYMBOL);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2485;
				this.match(FlinkSQLParser.GREATER_SYMBOL);
				this.state = 2486;
				this.match(FlinkSQLParser.EQUAL_SYMBOL);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2487;
				this.match(FlinkSQLParser.LESS_SYMBOL);
				this.state = 2488;
				this.match(FlinkSQLParser.GREATER_SYMBOL);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2489;
				this.match(FlinkSQLParser.EXCLAMATION_SYMBOL);
				this.state = 2490;
				this.match(FlinkSQLParser.EQUAL_SYMBOL);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2491;
				this.match(FlinkSQLParser.LESS_SYMBOL);
				this.state = 2492;
				this.match(FlinkSQLParser.EQUAL_SYMBOL);
				this.state = 2493;
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
		this.enterRule(_localctx, 362, FlinkSQLParser.RULE_bitOperator);
		try {
			this.state = 2503;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.LESS_SYMBOL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2496;
				this.match(FlinkSQLParser.LESS_SYMBOL);
				this.state = 2497;
				this.match(FlinkSQLParser.LESS_SYMBOL);
				}
				break;
			case FlinkSQLParser.GREATER_SYMBOL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2498;
				this.match(FlinkSQLParser.GREATER_SYMBOL);
				this.state = 2499;
				this.match(FlinkSQLParser.GREATER_SYMBOL);
				}
				break;
			case FlinkSQLParser.BIT_AND_OP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2500;
				this.match(FlinkSQLParser.BIT_AND_OP);
				}
				break;
			case FlinkSQLParser.BIT_XOR_OP:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2501;
				this.match(FlinkSQLParser.BIT_XOR_OP);
				}
				break;
			case FlinkSQLParser.BIT_OR_OP:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2502;
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
		this.enterRule(_localctx, 364, FlinkSQLParser.RULE_mathOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2505;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.KW_DIV || ((((_la - 409)) & ~0x1F) === 0 && ((1 << (_la - 409)) & ((1 << (FlinkSQLParser.ASTERISK_SIGN - 409)) | (1 << (FlinkSQLParser.HYPNEN_SIGN - 409)) | (1 << (FlinkSQLParser.ADD_SIGN - 409)) | (1 << (FlinkSQLParser.PENCENT_SIGN - 409)) | (1 << (FlinkSQLParser.DOUBLE_HYPNEN_SIGN - 409)) | (1 << (FlinkSQLParser.SLASH_SIGN - 409)))) !== 0))) {
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
		this.enterRule(_localctx, 366, FlinkSQLParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2507;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.KW_NOT || ((((_la - 387)) & ~0x1F) === 0 && ((1 << (_la - 387)) & ((1 << (FlinkSQLParser.BIT_NOT_OP - 387)) | (1 << (FlinkSQLParser.EXCLAMATION_SYMBOL - 387)) | (1 << (FlinkSQLParser.HYPNEN_SIGN - 387)) | (1 << (FlinkSQLParser.ADD_SIGN - 387)))) !== 0))) {
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
		this.enterRule(_localctx, 368, FlinkSQLParser.RULE_constant);
		let _la: number;
		try {
			this.state = 2523;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_INTERVAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2509;
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
				this.state = 2510;
				this.timePointLiteral();
				}
				break;
			case FlinkSQLParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2511;
				this.stringLiteral();
				}
				break;
			case FlinkSQLParser.HYPNEN_SIGN:
			case FlinkSQLParser.DIG_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2513;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.HYPNEN_SIGN) {
					{
					this.state = 2512;
					this.match(FlinkSQLParser.HYPNEN_SIGN);
					}
				}

				this.state = 2515;
				this.decimalLiteral();
				}
				break;
			case FlinkSQLParser.KW_FALSE:
			case FlinkSQLParser.KW_TRUE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2516;
				this.booleanLiteral();
				}
				break;
			case FlinkSQLParser.REAL_LITERAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2517;
				this.match(FlinkSQLParser.REAL_LITERAL);
				}
				break;
			case FlinkSQLParser.BIT_STRING:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2518;
				this.match(FlinkSQLParser.BIT_STRING);
				}
				break;
			case FlinkSQLParser.KW_NOT:
			case FlinkSQLParser.KW_NULL:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2520;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 2519;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 2522;
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
		this.enterRule(_localctx, 370, FlinkSQLParser.RULE_timePointLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2525;
			this.timePointUnit();
			this.state = 2526;
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
		this.enterRule(_localctx, 372, FlinkSQLParser.RULE_stringLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2528;
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
		this.enterRule(_localctx, 374, FlinkSQLParser.RULE_decimalLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2530;
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
		this.enterRule(_localctx, 376, FlinkSQLParser.RULE_booleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2532;
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
		this.enterRule(_localctx, 378, FlinkSQLParser.RULE_setQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2534;
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
		this.enterRule(_localctx, 380, FlinkSQLParser.RULE_timePointUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2536;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.KW_MICROSECOND || _la === FlinkSQLParser.KW_MILLISECOND || _la === FlinkSQLParser.KW_QUARTER || _la === FlinkSQLParser.KW_WEEK || _la === FlinkSQLParser.KW_DAY || _la === FlinkSQLParser.KW_HOUR || _la === FlinkSQLParser.KW_MINUTE || _la === FlinkSQLParser.KW_MONTH || _la === FlinkSQLParser.KW_SECOND || _la === FlinkSQLParser.KW_YEAR)) {
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
		this.enterRule(_localctx, 382, FlinkSQLParser.RULE_timeIntervalUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2538;
			_la = this._input.LA(1);
			if (!(((((_la - 15)) & ~0x1F) === 0 && ((1 << (_la - 15)) & ((1 << (FlinkSQLParser.KW_CENTURY - 15)) | (1 << (FlinkSQLParser.KW_DAYS - 15)) | (1 << (FlinkSQLParser.KW_DECADE - 15)) | (1 << (FlinkSQLParser.KW_EPOCH - 15)))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (FlinkSQLParser.KW_HOURS - 60)) | (1 << (FlinkSQLParser.KW_MICROSECOND - 60)) | (1 << (FlinkSQLParser.KW_MILLENNIUM - 60)) | (1 << (FlinkSQLParser.KW_MILLISECOND - 60)) | (1 << (FlinkSQLParser.KW_MINUTES - 60)) | (1 << (FlinkSQLParser.KW_MONTHS - 60)) | (1 << (FlinkSQLParser.KW_NANOSECOND - 60)))) !== 0) || _la === FlinkSQLParser.KW_QUARTER || _la === FlinkSQLParser.KW_SECONDS || ((((_la - 174)) & ~0x1F) === 0 && ((1 << (_la - 174)) & ((1 << (FlinkSQLParser.KW_WEEK - 174)) | (1 << (FlinkSQLParser.KW_WEEKS - 174)) | (1 << (FlinkSQLParser.KW_YEARS - 174)))) !== 0) || _la === FlinkSQLParser.KW_DAY || _la === FlinkSQLParser.KW_HOUR || _la === FlinkSQLParser.KW_MINUTE || _la === FlinkSQLParser.KW_MONTH || _la === FlinkSQLParser.KW_SECOND || _la === FlinkSQLParser.KW_YEAR)) {
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
		this.enterRule(_localctx, 384, FlinkSQLParser.RULE_reservedKeywordsUsedAsFuncParam);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2540;
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
		this.enterRule(_localctx, 386, FlinkSQLParser.RULE_reservedKeywordsUsedAsFuncName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2542;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.KW_IF || _la === FlinkSQLParser.KW_MAP || _la === FlinkSQLParser.KW_QUARTER || ((((_la - 174)) & ~0x1F) === 0 && ((1 << (_la - 174)) & ((1 << (FlinkSQLParser.KW_WEEK - 174)) | (1 << (FlinkSQLParser.KW_ABS - 174)) | (1 << (FlinkSQLParser.KW_ARRAY - 174)) | (1 << (FlinkSQLParser.KW_AVG - 174)) | (1 << (FlinkSQLParser.KW_CAST - 174)))) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (FlinkSQLParser.KW_CEIL - 206)) | (1 << (FlinkSQLParser.KW_COALESCE - 206)) | (1 << (FlinkSQLParser.KW_COLLECT - 206)) | (1 << (FlinkSQLParser.KW_COUNT - 206)) | (1 << (FlinkSQLParser.KW_DATE - 206)))) !== 0) || ((((_la - 254)) & ~0x1F) === 0 && ((1 << (_la - 254)) & ((1 << (FlinkSQLParser.KW_FIRST_VALUE - 254)) | (1 << (FlinkSQLParser.KW_GROUPING - 254)) | (1 << (FlinkSQLParser.KW_HOUR - 254)) | (1 << (FlinkSQLParser.KW_LAG - 254)) | (1 << (FlinkSQLParser.KW_LAST_VALUE - 254)) | (1 << (FlinkSQLParser.KW_LEAD - 254)))) !== 0) || ((((_la - 287)) & ~0x1F) === 0 && ((1 << (_la - 287)) & ((1 << (FlinkSQLParser.KW_LEFT - 287)) | (1 << (FlinkSQLParser.KW_MINUTE - 287)) | (1 << (FlinkSQLParser.KW_MONTH - 287)) | (1 << (FlinkSQLParser.KW_NTILE - 287)))) !== 0) || ((((_la - 319)) & ~0x1F) === 0 && ((1 << (_la - 319)) & ((1 << (FlinkSQLParser.KW_OVERLAY - 319)) | (1 << (FlinkSQLParser.KW_PERCENT_RANK - 319)) | (1 << (FlinkSQLParser.KW_POSITION - 319)) | (1 << (FlinkSQLParser.KW_POWER - 319)) | (1 << (FlinkSQLParser.KW_ROW_NUMBER - 319)) | (1 << (FlinkSQLParser.KW_RANK - 319)) | (1 << (FlinkSQLParser.KW_RIGHT - 319)) | (1 << (FlinkSQLParser.KW_SECOND - 319)) | (1 << (FlinkSQLParser.KW_SUBSTRING - 319)) | (1 << (FlinkSQLParser.KW_SUM - 319)))) !== 0) || ((((_la - 358)) & ~0x1F) === 0 && ((1 << (_la - 358)) & ((1 << (FlinkSQLParser.KW_TIME - 358)) | (1 << (FlinkSQLParser.KW_TIMESTAMP - 358)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_3 - 358)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_6 - 358)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_9 - 358)) | (1 << (FlinkSQLParser.KW_TRUNCATE - 358)) | (1 << (FlinkSQLParser.KW_UPPER - 358)) | (1 << (FlinkSQLParser.KW_YEAR - 358)))) !== 0))) {
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
		this.enterRule(_localctx, 388, FlinkSQLParser.RULE_reservedKeywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2544;
			_la = this._input.LA(1);
			if (!(((((_la - 180)) & ~0x1F) === 0 && ((1 << (_la - 180)) & ((1 << (FlinkSQLParser.KW_ABS - 180)) | (1 << (FlinkSQLParser.KW_ALL - 180)) | (1 << (FlinkSQLParser.KW_ALLOW - 180)) | (1 << (FlinkSQLParser.KW_ALTER - 180)) | (1 << (FlinkSQLParser.KW_AND - 180)) | (1 << (FlinkSQLParser.KW_ANY - 180)) | (1 << (FlinkSQLParser.KW_ARE - 180)) | (1 << (FlinkSQLParser.KW_ARRAY - 180)) | (1 << (FlinkSQLParser.KW_AS - 180)) | (1 << (FlinkSQLParser.KW_ASYMMETRIC - 180)) | (1 << (FlinkSQLParser.KW_AT - 180)) | (1 << (FlinkSQLParser.KW_AVG - 180)) | (1 << (FlinkSQLParser.KW_BEGIN - 180)) | (1 << (FlinkSQLParser.KW_BETWEEN - 180)) | (1 << (FlinkSQLParser.KW_BIGINT - 180)) | (1 << (FlinkSQLParser.KW_BINARY - 180)) | (1 << (FlinkSQLParser.KW_BIT - 180)) | (1 << (FlinkSQLParser.KW_BLOB - 180)) | (1 << (FlinkSQLParser.KW_BOOLEAN - 180)) | (1 << (FlinkSQLParser.KW_BOTH - 180)) | (1 << (FlinkSQLParser.KW_BY - 180)) | (1 << (FlinkSQLParser.KW_CALL - 180)) | (1 << (FlinkSQLParser.KW_CALLED - 180)) | (1 << (FlinkSQLParser.KW_CASCADED - 180)) | (1 << (FlinkSQLParser.KW_CASE - 180)) | (1 << (FlinkSQLParser.KW_CAST - 180)) | (1 << (FlinkSQLParser.KW_CEIL - 180)) | (1 << (FlinkSQLParser.KW_CHAR - 180)) | (1 << (FlinkSQLParser.KW_CHARACTER - 180)) | (1 << (FlinkSQLParser.KW_CHECK - 180)) | (1 << (FlinkSQLParser.KW_CLOB - 180)) | (1 << (FlinkSQLParser.KW_CLOSE - 180)))) !== 0) || ((((_la - 212)) & ~0x1F) === 0 && ((1 << (_la - 212)) & ((1 << (FlinkSQLParser.KW_COALESCE - 212)) | (1 << (FlinkSQLParser.KW_COLLATE - 212)) | (1 << (FlinkSQLParser.KW_COLLECT - 212)) | (1 << (FlinkSQLParser.KW_COLUMN - 212)) | (1 << (FlinkSQLParser.KW_COMMIT - 212)) | (1 << (FlinkSQLParser.KW_CONNECT - 212)) | (1 << (FlinkSQLParser.KW_CONSTRAINT - 212)) | (1 << (FlinkSQLParser.KW_CONTAINS - 212)) | (1 << (FlinkSQLParser.KW_CONVERT - 212)) | (1 << (FlinkSQLParser.KW_COUNT - 212)) | (1 << (FlinkSQLParser.KW_CREATE - 212)) | (1 << (FlinkSQLParser.KW_CROSS - 212)) | (1 << (FlinkSQLParser.KW_CUBE - 212)) | (1 << (FlinkSQLParser.KW_CUME_DIST - 212)) | (1 << (FlinkSQLParser.KW_CURRENT - 212)) | (1 << (FlinkSQLParser.KW_CURSOR - 212)) | (1 << (FlinkSQLParser.KW_CYCLE - 212)) | (1 << (FlinkSQLParser.KW_DATE - 212)) | (1 << (FlinkSQLParser.KW_DATETIME - 212)) | (1 << (FlinkSQLParser.KW_DAY - 212)) | (1 << (FlinkSQLParser.KW_DEC - 212)) | (1 << (FlinkSQLParser.KW_DECIMAL - 212)) | (1 << (FlinkSQLParser.KW_DECLARE - 212)) | (1 << (FlinkSQLParser.KW_DEFAULT - 212)) | (1 << (FlinkSQLParser.KW_DEFINE - 212)) | (1 << (FlinkSQLParser.KW_DELETE - 212)) | (1 << (FlinkSQLParser.KW_DESCRIBE - 212)) | (1 << (FlinkSQLParser.KW_DENSE_RANK - 212)) | (1 << (FlinkSQLParser.KW_DISTINCT - 212)) | (1 << (FlinkSQLParser.KW_DOUBLE - 212)) | (1 << (FlinkSQLParser.KW_DROP - 212)) | (1 << (FlinkSQLParser.KW_EACH - 212)))) !== 0) || ((((_la - 244)) & ~0x1F) === 0 && ((1 << (_la - 244)) & ((1 << (FlinkSQLParser.KW_ELSE - 244)) | (1 << (FlinkSQLParser.KW_END - 244)) | (1 << (FlinkSQLParser.KW_EQUALS - 244)) | (1 << (FlinkSQLParser.KW_EXCEPT - 244)) | (1 << (FlinkSQLParser.KW_EXECUTE - 244)) | (1 << (FlinkSQLParser.KW_EXISTS - 244)) | (1 << (FlinkSQLParser.KW_EXPLAIN - 244)) | (1 << (FlinkSQLParser.KW_EXTERNAL - 244)) | (1 << (FlinkSQLParser.KW_EXTRACT - 244)) | (1 << (FlinkSQLParser.KW_FIRST_VALUE - 244)) | (1 << (FlinkSQLParser.KW_FALSE - 244)) | (1 << (FlinkSQLParser.KW_FLOAT - 244)) | (1 << (FlinkSQLParser.KW_FOR - 244)) | (1 << (FlinkSQLParser.KW_FROM - 244)) | (1 << (FlinkSQLParser.KW_FULL - 244)) | (1 << (FlinkSQLParser.KW_FUNCTION - 244)) | (1 << (FlinkSQLParser.KW_GLOBAL - 244)) | (1 << (FlinkSQLParser.KW_GRANT - 244)) | (1 << (FlinkSQLParser.KW_GROUP - 244)) | (1 << (FlinkSQLParser.KW_GROUPING - 244)) | (1 << (FlinkSQLParser.KW_GROUPS - 244)) | (1 << (FlinkSQLParser.KW_HAVING - 244)) | (1 << (FlinkSQLParser.KW_HOUR - 244)) | (1 << (FlinkSQLParser.KW_IMPORT - 244)) | (1 << (FlinkSQLParser.KW_IN - 244)) | (1 << (FlinkSQLParser.KW_INCLUDING - 244)) | (1 << (FlinkSQLParser.KW_INNER - 244)) | (1 << (FlinkSQLParser.KW_INOUT - 244)) | (1 << (FlinkSQLParser.KW_INSERT - 244)) | (1 << (FlinkSQLParser.KW_INT - 244)) | (1 << (FlinkSQLParser.KW_INTEGER - 244)))) !== 0) || ((((_la - 276)) & ~0x1F) === 0 && ((1 << (_la - 276)) & ((1 << (FlinkSQLParser.KW_INTERSECT - 276)) | (1 << (FlinkSQLParser.KW_INTERVAL - 276)) | (1 << (FlinkSQLParser.KW_INTO - 276)) | (1 << (FlinkSQLParser.KW_IS - 276)) | (1 << (FlinkSQLParser.KW_JOIN - 276)) | (1 << (FlinkSQLParser.KW_LAG - 276)) | (1 << (FlinkSQLParser.KW_LANGUAGE - 276)) | (1 << (FlinkSQLParser.KW_LATERAL - 276)) | (1 << (FlinkSQLParser.KW_LAST_VALUE - 276)) | (1 << (FlinkSQLParser.KW_LEAD - 276)) | (1 << (FlinkSQLParser.KW_LEADING - 276)) | (1 << (FlinkSQLParser.KW_LEFT - 276)) | (1 << (FlinkSQLParser.KW_LIKE - 276)) | (1 << (FlinkSQLParser.KW_LIMIT - 276)) | (1 << (FlinkSQLParser.KW_LOCAL - 276)) | (1 << (FlinkSQLParser.KW_MATCH - 276)) | (1 << (FlinkSQLParser.KW_MATCH_RECOGNIZE - 276)) | (1 << (FlinkSQLParser.KW_MEASURES - 276)) | (1 << (FlinkSQLParser.KW_MERGE - 276)) | (1 << (FlinkSQLParser.KW_METADATA - 276)) | (1 << (FlinkSQLParser.KW_MINUS - 276)) | (1 << (FlinkSQLParser.KW_MINUTE - 276)) | (1 << (FlinkSQLParser.KW_MODIFIES - 276)) | (1 << (FlinkSQLParser.KW_MODULE - 276)) | (1 << (FlinkSQLParser.KW_MONTH - 276)) | (1 << (FlinkSQLParser.KW_MULTISET - 276)) | (1 << (FlinkSQLParser.KW_NATURAL - 276)) | (1 << (FlinkSQLParser.KW_NEXT - 276)) | (1 << (FlinkSQLParser.KW_NO - 276)) | (1 << (FlinkSQLParser.KW_NONE - 276)) | (1 << (FlinkSQLParser.KW_NOT - 276)) | (1 << (FlinkSQLParser.KW_NTILE - 276)))) !== 0) || ((((_la - 308)) & ~0x1F) === 0 && ((1 << (_la - 308)) & ((1 << (FlinkSQLParser.KW_NULL - 308)) | (1 << (FlinkSQLParser.KW_NUMERIC - 308)) | (1 << (FlinkSQLParser.KW_OF - 308)) | (1 << (FlinkSQLParser.KW_OFFSET - 308)) | (1 << (FlinkSQLParser.KW_ON - 308)) | (1 << (FlinkSQLParser.KW_ONE - 308)) | (1 << (FlinkSQLParser.KW_OR - 308)) | (1 << (FlinkSQLParser.KW_ORDER - 308)) | (1 << (FlinkSQLParser.KW_OUT - 308)) | (1 << (FlinkSQLParser.KW_OUTER - 308)) | (1 << (FlinkSQLParser.KW_OVER - 308)) | (1 << (FlinkSQLParser.KW_OVERLAY - 308)) | (1 << (FlinkSQLParser.KW_PARTITION - 308)) | (1 << (FlinkSQLParser.KW_PATTERN - 308)) | (1 << (FlinkSQLParser.KW_PER - 308)) | (1 << (FlinkSQLParser.KW_PERCENT - 308)) | (1 << (FlinkSQLParser.KW_PERCENT_RANK - 308)) | (1 << (FlinkSQLParser.KW_PERIOD - 308)) | (1 << (FlinkSQLParser.KW_POSITION - 308)) | (1 << (FlinkSQLParser.KW_PRIMARY - 308)) | (1 << (FlinkSQLParser.KW_RANGE - 308)) | (1 << (FlinkSQLParser.KW_ROW_NUMBER - 308)) | (1 << (FlinkSQLParser.KW_RANK - 308)) | (1 << (FlinkSQLParser.KW_RESET - 308)) | (1 << (FlinkSQLParser.KW_REVOKE - 308)) | (1 << (FlinkSQLParser.KW_RIGHT - 308)) | (1 << (FlinkSQLParser.KW_RLIKE - 308)) | (1 << (FlinkSQLParser.KW_ROLLBACK - 308)) | (1 << (FlinkSQLParser.KW_ROLLUP - 308)) | (1 << (FlinkSQLParser.KW_ROW - 308)) | (1 << (FlinkSQLParser.KW_ROWS - 308)))) !== 0) || ((((_la - 340)) & ~0x1F) === 0 && ((1 << (_la - 340)) & ((1 << (FlinkSQLParser.KW_SECOND - 340)) | (1 << (FlinkSQLParser.KW_SELECT - 340)) | (1 << (FlinkSQLParser.KW_SET - 340)) | (1 << (FlinkSQLParser.KW_SHOW - 340)) | (1 << (FlinkSQLParser.KW_SIMILAR - 340)) | (1 << (FlinkSQLParser.KW_SKIP - 340)) | (1 << (FlinkSQLParser.KW_SMALLINT - 340)) | (1 << (FlinkSQLParser.KW_START - 340)) | (1 << (FlinkSQLParser.KW_STATIC - 340)) | (1 << (FlinkSQLParser.KW_SUBSTRING - 340)) | (1 << (FlinkSQLParser.KW_SUM - 340)) | (1 << (FlinkSQLParser.KW_SYSTEM - 340)) | (1 << (FlinkSQLParser.KW_SYSTEM_TIME - 340)) | (1 << (FlinkSQLParser.KW_SYSTEM_USER - 340)) | (1 << (FlinkSQLParser.KW_TABLE - 340)) | (1 << (FlinkSQLParser.KW_TABLESAMPLE - 340)) | (1 << (FlinkSQLParser.KW_THEN - 340)) | (1 << (FlinkSQLParser.KW_TIME - 340)) | (1 << (FlinkSQLParser.KW_TIMESTAMP - 340)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_3 - 340)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_6 - 340)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_9 - 340)) | (1 << (FlinkSQLParser.KW_TINYINT - 340)) | (1 << (FlinkSQLParser.KW_TO - 340)) | (1 << (FlinkSQLParser.KW_TRUE - 340)) | (1 << (FlinkSQLParser.KW_TRUNCATE - 340)) | (1 << (FlinkSQLParser.KW_UNION - 340)) | (1 << (FlinkSQLParser.KW_UNIQUE - 340)) | (1 << (FlinkSQLParser.KW_UNKNOWN - 340)) | (1 << (FlinkSQLParser.KW_UNNEST - 340)))) !== 0) || ((((_la - 372)) & ~0x1F) === 0 && ((1 << (_la - 372)) & ((1 << (FlinkSQLParser.KW_UPPER - 372)) | (1 << (FlinkSQLParser.KW_UPSERT - 372)) | (1 << (FlinkSQLParser.KW_USER - 372)) | (1 << (FlinkSQLParser.KW_USING - 372)) | (1 << (FlinkSQLParser.KW_VALUE - 372)) | (1 << (FlinkSQLParser.KW_VALUES - 372)) | (1 << (FlinkSQLParser.KW_VARBINARY - 372)) | (1 << (FlinkSQLParser.KW_VARCHAR - 372)) | (1 << (FlinkSQLParser.KW_WHEN - 372)) | (1 << (FlinkSQLParser.KW_WHERE - 372)) | (1 << (FlinkSQLParser.KW_WINDOW - 372)) | (1 << (FlinkSQLParser.KW_WITH - 372)) | (1 << (FlinkSQLParser.KW_WITHIN - 372)) | (1 << (FlinkSQLParser.KW_WITHOUT - 372)) | (1 << (FlinkSQLParser.KW_YEAR - 372)))) !== 0))) {
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
		this.enterRule(_localctx, 390, FlinkSQLParser.RULE_nonReservedKeywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2546;
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
		case 82:
			return this.queryStatement_sempred(_localctx as QueryStatementContext, predIndex);

		case 92:
			return this.tableExpression_sempred(_localctx as TableExpressionContext, predIndex);

		case 133:
			return this.booleanExpression_sempred(_localctx as BooleanExpressionContext, predIndex);

		case 136:
			return this.valueExpression_sempred(_localctx as ValueExpressionContext, predIndex);

		case 137:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\u01AA\u09F7\x04" +
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
		"\x04\xC3\t\xC3\x04\xC4\t\xC4\x04\xC5\t\xC5\x03\x02\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x07\x04\u0194\n\x04\f\x04" +
		"\x0E\x04\u0197\v\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x05\x06\u01BC\n\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x05\b\u01D0\n\b\x03\t\x03\t\x05\t\u01D4\n\t\x03\n\x03\n\x03\n\x03\v" +
		"\x03\v\x03\v\x03\v\x05\v\u01DD\n\v\x03\v\x03\v\x03\v\x05\v\u01E2\n\v\x03" +
		"\f\x03\f\x03\f\x07\f\u01E7\n\f\f\f\x0E\f\u01EA\v\f\x03\r\x03\r\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u01F4\n\x0E\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u01FB\n\x0F\f\x0F\x0E\x0F\u01FE\v" +
		"\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x05\x10\u0209\n\x10\x03\x10\x05\x10\u020C\n\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x05\x10\u0213\n\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x05\x10\u021B\n\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0220" +
		"\n\x10\x03\x10\x05\x10\u0223\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x05\x11\u022A\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13" +
		"\x05\x13\u0232\n\x13\x03\x14\x03\x14\x05\x14\u0236\n\x14\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x16\x06\x16\u023D\n\x16\r\x16\x0E\x16\u023E\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0247\n\x17\x03\x18\x03" +
		"\x18\x05\x18\u024B\n\x18\x03\x19\x03\x19\x05\x19\u024F\n\x19\x03\x19\x03" +
		"\x19\x05\x19\u0253\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19" +
		"\u025A\n\x19\f\x19\x0E\x19\u025D\v\x19\x03\x19\x03\x19\x05\x19\u0261\n" +
		"\x19\x03\x19\x03\x19\x05\x19\u0265\n\x19\x03\x19\x03\x19\x05\x19\u0269" +
		"\n\x19\x03\x19\x03\x19\x05\x19\u026D\n\x19\x03\x19\x05\x19\u0270\n\x19" +
		"\x03\x19\x03\x19\x05\x19\u0274\n\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0279" +
		"\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u027F\n\x1A\x03\x1B\x03" +
		"\x1B\x03\x1B\x05\x1B\u0284\n\x1B\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0289" +
		"\n\x1C\x03\x1C\x05\x1C\u028C\n\x1C\x03\x1D\x03\x1D\x05\x1D\u0290\n\x1D" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u0296\n\x1E\f\x1E\x0E\x1E\u0299" +
		"\v\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u02A0\n\x1F\x03" +
		"\x1F\x03\x1F\x05\x1F\u02A4\n\x1F\x03\x1F\x03\x1F\x05\x1F\u02A8\n\x1F\x03" +
		"\x1F\x03\x1F\x05\x1F\u02AC\n\x1F\x03\x1F\x03\x1F\x05\x1F\u02B0\n\x1F\x03" +
		"\x1F\x03\x1F\x05\x1F\u02B4\n\x1F\x03\x1F\x03\x1F\x05\x1F\u02B8\n\x1F\x03" +
		"\x1F\x03\x1F\x05\x1F\u02BC\n\x1F\x03\x1F\x03\x1F\x05\x1F\u02C0\n\x1F\x03" +
		"\x1F\x03\x1F\x05\x1F\u02C4\n\x1F\x03\x1F\x03\x1F\x05\x1F\u02C8\n\x1F\x03" +
		"\x1F\x03\x1F\x05\x1F\u02CC\n\x1F\x03\x1F\x03\x1F\x05\x1F\u02D0\n\x1F\x03" +
		"\x1F\x03\x1F\x05\x1F\u02D4\n\x1F\x03\x1F\x03\x1F\x05\x1F\u02D8\n\x1F\x03" +
		"\x1F\x03\x1F\x05\x1F\u02DC\n\x1F\x03\x1F\x03\x1F\x05\x1F\u02E0\n\x1F\x03" +
		"\x1F\x03\x1F\x05\x1F\u02E4\n\x1F\x05\x1F\u02E6\n\x1F\x03 \x03 \x03 \x03" +
		" \x03!\x03!\x03!\x03!\x05!\u02F0\n!\x03!\x03!\x03\"\x03\"\x03\"\x03\"" +
		"\x05\"\u02F8\n\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x07#\u0300\n#\f#\x0E" +
		"#\u0303\v#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03%\x03%\x03" +
		"%\x03%\x03%\x03%\x03%\x07%\u0315\n%\f%\x0E%\u0318\v%\x03%\x03%\x03&\x03" +
		"&\x05&\u031E\n&\x03&\x03&\x03&\x03&\x05&\u0324\n&\x03&\x05&\u0327\n&\x03" +
		"&\x05&\u032A\n&\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x05(\u0334" +
		"\n(\x03(\x05(\u0337\n(\x03)\x03)\x03*\x03*\x03*\x03*\x05*\u033F\n*\x03" +
		"+\x03+\x03,\x03,\x03,\x03,\x03,\x03,\x03-\x03-\x05-\u034B\n-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03.\x03.\x03/\x03/\x03/\x03/\x030\x030\x030\x03" +
		"0\x031\x031\x031\x031\x071\u0361\n1\f1\x0E1\u0364\v1\x031\x031\x032\x03" +
		"2\x032\x032\x032\x032\x072\u036E\n2\f2\x0E2\u0371\v2\x032\x032\x052\u0375" +
		"\n2\x033\x033\x053\u0379\n3\x034\x034\x034\x034\x074\u037F\n4\f4\x0E4" +
		"\u0382\v4\x034\x054\u0385\n4\x035\x035\x035\x035\x055\u038B\n5\x036\x03" +
		"6\x036\x036\x036\x037\x037\x037\x057\u0395\n7\x037\x037\x057\u0399\n7" +
		"\x037\x057\u039C\n7\x038\x038\x058\u03A0\n8\x038\x038\x058\u03A4\n8\x03" +
		"8\x038\x058\u03A8\n8\x038\x058\u03AB\n8\x038\x038\x038\x039\x039\x039" +
		"\x039\x059\u03B4\n9\x039\x039\x059\u03B8\n9\x039\x039\x039\x039\x039\x05" +
		"9\u03BF\n9\x039\x059\u03C2\n9\x03:\x03:\x03:\x03:\x03:\x03:\x07:\u03CA" +
		"\n:\f:\x0E:\u03CD\v:\x03;\x03;\x03<\x03<\x03<\x05<\u03D4\n<\x03<\x03<" +
		"\x03<\x03<\x03<\x03<\x05<\u03DC\n<\x03<\x03<\x03<\x05<\u03E1\n<\x03<\x03" +
		"<\x03<\x03<\x03<\x05<\u03E8\n<\x03<\x03<\x03<\x05<\u03ED\n<\x07<\u03EF" +
		"\n<\f<\x0E<\u03F2\v<\x03<\x03<\x05<\u03F6\n<\x03<\x03<\x05<\u03FA\n<\x03" +
		"<\x03<\x05<\u03FE\n<\x03<\x03<\x05<\u0402\n<\x03<\x05<\u0405\n<\x03<\x03" +
		"<\x03<\x03<\x03<\x05<\u040C\n<\x03<\x03<\x03<\x03<\x05<\u0412\n<\x03<" +
		"\x05<\u0415\n<\x03<\x03<\x03<\x05<\u041A\n<\x03<\x03<\x03<\x03<\x03<\x03" +
		"<\x03<\x07<\u0423\n<\f<\x0E<\u0426\v<\x03<\x03<\x03<\x05<\u042B\n<\x03" +
		"<\x03<\x03<\x03<\x03<\x03<\x03<\x05<\u0434\n<\x03<\x03<\x03<\x03<\x03" +
		"<\x03<\x07<\u043C\n<\f<\x0E<\u043F\v<\x03<\x03<\x03<\x03<\x03<\x05<\u0446" +
		"\n<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x05<\u0450\n<\x03<\x03<\x03" +
		"<\x03<\x03<\x03<\x03<\x07<\u0459\n<\f<\x0E<\u045C\v<\x03<\x03<\x03<\x05" +
		"<\u0461\n<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x05<\u046A\n<\x03<\x03<" +
		"\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x05<\u0475\n<\x03<\x03<\x03<\x03<" +
		"\x03<\x03<\x03<\x05<\u047E\n<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x05<" +
		"\u0487\n<\x03<\x03<\x03<\x03<\x05<\u048D\n<\x03=\x03=\x03=\x05=\u0492" +
		"\n=\x03>\x03>\x05>\u0496\n>\x03>\x03>\x03>\x03?\x03?\x03?\x03@\x03@\x03" +
		"@\x03@\x03@\x03@\x03@\x05@\u04A5\n@\x03A\x03A\x03A\x03A\x03B\x03B\x03" +
		"B\x03B\x03C\x03C\x03C\x03D\x03D\x03D\x03D\x03D\x03D\x05D\u04B8\nD\x03" +
		"E\x03E\x03E\x03E\x03E\x03F\x03F\x03F\x03F\x05F\u04C3\nF\x03F\x03F\x05" +
		"F\u04C7\nF\x03F\x03F\x03F\x03F\x03F\x05F\u04CE\nF\x03G\x03G\x03G\x05G" +
		"\u04D3\nG\x03G\x03G\x03H\x03H\x05H\u04D9\nH\x03H\x03H\x05H\u04DD\nH\x03" +
		"H\x03H\x03I\x03I\x03I\x05I\u04E4\nI\x03I\x03I\x05I\u04E8\nI\x03J\x03J" +
		"\x05J\u04EC\nJ\x03J\x03J\x05J\u04F0\nJ\x03J\x03J\x03K\x03K\x03K\x03K\x05" +
		"K\u04F8\nK\x03K\x03K\x05K\u04FC\nK\x03K\x03K\x03L\x03L\x03L\x03L\x03M" +
		"\x05M\u0505\nM\x03M\x03M\x03M\x03M\x05M\u050B\nM\x03N\x03N\x03N\x03N\x05" +
		"N\u0511\nN\x03N\x05N\u0514\nN\x03N\x03N\x05N\u0518\nN\x03O\x03O\x03O\x03" +
		"P\x03P\x03P\x03P\x07P\u0521\nP\fP\x0EP\u0524\vP\x03Q\x03Q\x03Q\x03Q\x07" +
		"Q\u052A\nQ\fQ\x0EQ\u052D\vQ\x03Q\x03Q\x03R\x03R\x03R\x03R\x03R\x03R\x03" +
		"R\x06R\u0538\nR\rR\x0ER\u0539\x03R\x03R\x03S\x03S\x03S\x03S\x03S\x03S" +
		"\x06S\u0544\nS\rS\x0ES\u0545\x03S\x03S\x03T\x03T\x03T\x03T\x03T\x03T\x03" +
		"T\x03T\x03T\x03T\x03T\x05T\u0555\nT\x03T\x05T\u0558\nT\x03T\x03T\x05T" +
		"\u055C\nT\x03T\x05T\u055F\nT\x05T\u0561\nT\x03T\x03T\x03T\x05T\u0566\n" +
		"T\x03T\x03T\x05T\u056A\nT\x03T\x05T\u056D\nT\x07T\u056F\nT\fT\x0ET\u0572" +
		"\vT\x03U\x03U\x03U\x03U\x07U\u0578\nU\fU\x0EU\u057B\vU\x03V\x03V\x03V" +
		"\x03V\x07V\u0581\nV\fV\x0EV\u0584\vV\x03W\x03W\x03W\x03W\x03W\x07W\u058B" +
		"\nW\fW\x0EW\u058E\vW\x03W\x03W\x05W\u0592\nW\x03W\x03W\x03W\x03W\x03W" +
		"\x03X\x03X\x03Y\x03Y\x03Y\x05Y\u059E\nY\x03Y\x05Y\u05A1\nY\x03Y\x05Y\u05A4" +
		"\nY\x03Y\x05Y\u05A7\nY\x03Y\x03Y\x03Y\x03Y\x05Y\u05AD\nY\x03Z\x03Z\x05" +
		"Z\u05B1\nZ\x03Z\x03Z\x03Z\x03Z\x07Z\u05B7\nZ\fZ\x0EZ\u05BA\vZ\x05Z\u05BC" +
		"\nZ\x03[\x03[\x03[\x05[\u05C1\n[\x03[\x05[\u05C4\n[\x05[\u05C6\n[\x03" +
		"\\\x03\\\x03\\\x03\\\x05\\\u05CC\n\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03" +
		"\\\x05\\\u05D4\n\\\x03\\\x03\\\x05\\\u05D8\n\\\x03]\x03]\x03]\x03^\x03" +
		"^\x03^\x03^\x07^\u05E1\n^\f^\x0E^\u05E4\v^\x03^\x03^\x05^\u05E8\n^\x03" +
		"^\x03^\x03^\x03^\x03^\x03^\x05^\u05F0\n^\x03^\x05^\u05F3\n^\x03^\x05^" +
		"\u05F6\n^\x03^\x03^\x03^\x05^\u05FB\n^\x03^\x03^\x05^\u05FF\n^\x03^\x05" +
		"^\u0602\n^\x03^\x05^\u0605\n^\x03^\x03^\x03^\x05^\u060A\n^\x03^\x03^\x07" +
		"^\u060E\n^\f^\x0E^\u0611\v^\x07^\u0613\n^\f^\x0E^\u0616\v^\x03_\x03_\x05" +
		"_\u061A\n_\x03`\x05`\u061D\n`\x03`\x03`\x05`\u0621\n`\x03`\x05`\u0624" +
		"\n`\x03`\x05`\u0627\n`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x07`\u0631" +
		"\n`\f`\x0E`\u0634\v`\x03`\x03`\x03`\x03`\x05`\u063A\n`\x03`\x03`\x03`" +
		"\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x07`\u0648\n`\f`\x0E`\u064B" +
		"\v`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x07`\u0655\n`\f`\x0E`\u0658" +
		"\v`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x05`\u0661\n`\x03a\x03a\x03a\x03" +
		"a\x03a\x03a\x03b\x03b\x03c\x03c\x03c\x03c\x03c\x03d\x03d\x03d\x03d\x03" +
		"d\x03e\x03e\x03e\x03e\x03e\x07e\u067A\ne\fe\x0Ee\u067D\ve\x03e\x03e\x03" +
		"f\x03f\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03" +
		"g\x03g\x03g\x05g\u0692\ng\x03h\x03h\x03i\x03i\x03i\x03i\x03i\x03j\x03" +
		"j\x03j\x03j\x03j\x03j\x03j\x07j\u06A2\nj\fj\x0Ej\u06A5\vj\x03j\x03j\x05" +
		"j\u06A9\nj\x03k\x03k\x03k\x03l\x03l\x03l\x03l\x03l\x07l\u06B3\nl\fl\x0E" +
		"l\u06B6\vl\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x07m\u06C0\nm\fm\x0E" +
		"m\u06C3\vm\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x07m\u06CC\nm\fm\x0Em\u06CF" +
		"\vm\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x07m\u06D8\nm\fm\x0Em\u06DB\vm" +
		"\x03m\x03m\x05m\u06DF\nm\x03n\x03n\x03n\x03o\x03o\x03p\x03p\x03p\x03p" +
		"\x03p\x03p\x03p\x03q\x03q\x03r\x03r\x03s\x03s\x03s\x03t\x03t\x03t\x03" +
		"t\x07t\u06F8\nt\ft\x0Et\u06FB\vt\x03u\x03u\x03u\x03u\x03v\x05v\u0702\n" +
		"v\x03v\x03v\x05v\u0706\nv\x03v\x05v\u0709\nv\x03v\x05v\u070C\nv\x03v\x03" +
		"v\x03w\x03w\x03w\x05w\u0713\nw\x03w\x05w\u0716\nw\x03w\x05w\u0719\nw\x03" +
		"w\x05w\u071C\nw\x03w\x05w\u071F\nw\x03w\x05w\u0722\nw\x03w\x03w\x03w\x05" +
		"w\u0727\nw\x03w\x05w\u072A\nw\x03x\x03x\x03x\x03x\x03x\x07x\u0731\nx\f" +
		"x\x0Ex\u0734\vx\x03y\x03y\x05y\u0738\ny\x03y\x03y\x05y\u073C\ny\x03z\x03" +
		"z\x03z\x05z\u0741\nz\x03{\x03{\x03{\x03{\x03{\x07{\u0748\n{\f{\x0E{\u074B" +
		"\v{\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03" +
		"|\x03|\x03|\x05|\u075D\n|\x03}\x03}\x03}\x03}\x07}\u0763\n}\f}\x0E}\u0766" +
		"\v}\x03~\x03~\x03~\x06~\u076B\n~\r~\x0E~\u076C\x03~\x03~\x05~\u0771\n" +
		"~\x03\x7F\x03\x7F\x05\x7F\u0775\n\x7F\x03\x80\x03\x80\x03\x80\x03\x80" +
		"\x03\x80\x03\x80\x03\x80\x03\x80\x05\x80\u077F\n\x80\x03\x81\x03\x81\x03" +
		"\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03" +
		"\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03" +
		"\x81\x03\x81\x03\x81\x03\x81\x05\x81\u0799\n\x81\x03\x82\x03\x82\x03\x82" +
		"\x03\x82\x07\x82\u079F\n\x82\f\x82\x0E\x82\u07A2\v\x82\x03\x83\x03\x83" +
		"\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x05\x83\u07AD" +
		"\n\x83\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x85\x03\x85\x03\x85" +
		"\x03\x86\x03\x86\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87" +
		"\x03\x87\x03\x87\x03\x87\x05\x87\u07C3\n\x87\x05\x87\u07C5\n\x87\x03\x87" +
		"\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x05\x87" +
		"\u07D0\n\x87\x03\x87\x07\x87\u07D3\n\x87\f\x87\x0E\x87\u07D6\v\x87\x03" +
		"\x88\x05\x88\u07D9\n\x88\x03\x88\x03\x88\x05\x88\u07DD\n\x88\x03\x88\x03" +
		"\x88\x03\x88\x03\x88\x03\x88\x05\x88\u07E4\n\x88\x03\x88\x03\x88\x03\x88" +
		"\x03\x88\x03\x88\x07\x88\u07EB\n\x88\f\x88\x0E\x88\u07EE\v\x88\x03\x88" +
		"\x03\x88\x03\x88\x05\x88\u07F3\n\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03" +
		"\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x05\x88\u0800\n\x88" +
		"\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x05\x88\u0807\n\x88\x03\x88\x03" +
		"\x88\x03\x88\x05\x88\u080C\n\x88\x03\x88\x03\x88\x03\x88\x03\x88\x05\x88" +
		"\u0812\n\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x05\x88\u0819\n\x88" +
		"\x05\x88\u081B\n\x88\x03\x89\x05\x89\u081E\n\x89\x03\x89\x03\x89\x03\x89" +
		"\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x07\x89\u0828\n\x89\f\x89\x0E" +
		"\x89\u082B\v\x89\x03\x89\x03\x89\x05\x89\u082F\n\x89\x03\x89\x05\x89\u0832" +
		"\n\x89\x03\x89\x03\x89\x03\x89\x03\x89\x05\x89\u0838\n\x89\x05\x89\u083A" +
		"\n\x89\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x05\x8A\u0840\n\x8A\x03\x8A\x03" +
		"\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03" +
		"\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03" +
		"\x8A\x03\x8A\x07\x8A\u0857\n\x8A\f\x8A\x0E\x8A\u085A\v\x8A\x03\x8B\x03" +
		"\x8B\x03\x8B\x06\x8B\u085F\n\x8B\r\x8B\x0E\x8B\u0860\x03\x8B\x03\x8B\x05" +
		"\x8B\u0865\n\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x06\x8B\u086C" +
		"\n\x8B\r\x8B\x0E\x8B\u086D\x03\x8B\x03\x8B\x05\x8B\u0872\n\x8B\x03\x8B" +
		"\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B" +
		"\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x05\x8B\u0882\n\x8B\x03\x8B\x03\x8B\x03" +
		"\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x05\x8B\u088B\n\x8B\x03\x8B\x03\x8B" +
		"\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B" +
		"\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B" +
		"\x03\x8B\x03\x8B\x05\x8B\u08A3\n\x8B\x03\x8B\x03\x8B\x03\x8B\x07\x8B\u08A8" +
		"\n\x8B\f\x8B\x0E\x8B\u08AB\v\x8B\x05\x8B\u08AD\n\x8B\x03\x8B\x03\x8B\x03" +
		"\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03" +
		"\x8B\x05\x8B\u08BB\n\x8B\x03\x8B\x03\x8B\x03\x8B\x05\x8B\u08C0\n\x8B\x03" +
		"\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x05\x8B\u08C9\n\x8B" +
		"\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x07\x8B\u08D0\n\x8B\f\x8B\x0E" +
		"\x8B\u08D3\v\x8B\x03\x8C\x03\x8C\x03\x8C\x05\x8C\u08D8\n\x8C\x03\x8D\x03" +
		"\x8D\x03\x8D\x03\x8D\x03\x8D\x07\x8D\u08DF\n\x8D\f\x8D\x0E\x8D\u08E2\v" +
		"\x8D\x03\x8D\x03\x8D\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x07\x8E\u08EB" +
		"\n\x8E\f\x8E\x0E\x8E\u08EE\v\x8E\x03\x8E\x03\x8E\x03\x8F\x03\x8F\x03\x8F" +
		"\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x90\x03\x90\x05\x90\u08FB\n\x90\x03" +
		"\x91\x03\x91\x03\x91\x05\x91\u0900\n\x91\x03\x92\x03\x92\x03\x92\x03\x92" +
		"\x03\x92\x05\x92\u0907\n\x92\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03" +
		"\x93\x03\x94\x03\x94\x03\x95\x03\x95\x03\x96\x03\x96\x05\x96\u0915\n\x96" +
		"\x03\x97\x03\x97\x03\x97\x05\x97\u091A\n\x97\x03\x98\x03\x98\x05\x98\u091E" +
		"\n";
	private static readonly _serializedATNSegment1: string =
		"\x98\x03\x99\x03\x99\x03\x99\x06\x99\u0923\n\x99\r\x99\x0E\x99\u0924\x03" +
		"\x9A\x03\x9A\x03\x9A\x05\x9A\u092A\n\x9A\x03\x9B\x03\x9B\x03\x9B\x03\x9B" +
		"\x03\x9B\x03\x9C\x05\x9C\u0932\n\x9C\x03\x9C\x03\x9C\x05\x9C\u0936\n\x9C" +
		"\x03\x9D\x05\x9D\u0939\n\x9D\x03\x9D\x03\x9D\x05\x9D\u093D\n\x9D\x03\x9E" +
		"\x05\x9E\u0940\n\x9E\x03\x9E\x03\x9E\x05\x9E\u0944\n\x9E\x03\x9F\x03\x9F" +
		"\x03\x9F\x03\xA0\x03\xA0\x06\xA0\u094B\n\xA0\r\xA0\x0E\xA0\u094C\x03\xA0" +
		"\x05\xA0\u0950\n\xA0\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA2\x03\xA2\x03" +
		"\xA2\x07\xA2\u0959\n\xA2\f\xA2\x0E\xA2\u095C\v\xA2\x03\xA3\x03\xA3\x03" +
		"\xA3\x03\xA3\x05\xA3\u0962\n\xA3\x03\xA4\x03\xA4\x03\xA4\x03\xA4\x03\xA4" +
		"\x03\xA5\x03\xA5\x03\xA6\x03\xA6\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7" +
		"\x03\xA8\x03\xA8\x03\xA9\x03\xA9\x03\xAA\x03\xAA\x03\xAB\x03\xAB\x03\xAC" +
		"\x03\xAC\x03\xAD\x03\xAD\x03\xAD\x07\xAD\u097F\n\xAD\f\xAD\x0E\xAD\u0982" +
		"\v\xAD\x03\xAE\x03\xAE\x03\xAE\x03\xAF\x03\xAF\x03\xAF\x03\xAF\x03\xB0" +
		"\x03\xB0\x03\xB0\x03\xB1\x03\xB1\x03\xB1\x03\xB1\x07\xB1\u0992\n\xB1\f" +
		"\xB1\x0E\xB1\u0995\v\xB1\x03\xB1\x03\xB1\x03\xB2\x03\xB2\x05\xB2\u099B" +
		"\n\xB2\x03\xB2\x05\xB2\u099E\n\xB2\x03\xB3\x03\xB3\x03\xB3\x05\xB3\u09A3" +
		"\n\xB3\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x05\xB4\u09A9\n\xB4\x03\xB5\x03" +
		"\xB5\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x05\xB5\u09B1\n\xB5\x03\xB6\x03\xB6" +
		"\x03\xB6\x03\xB6\x03\xB6\x03\xB6\x03\xB6\x03\xB6\x03\xB6\x03\xB6\x03\xB6" +
		"\x03\xB6\x03\xB6\x03\xB6\x05\xB6\u09C1\n\xB6\x03\xB7\x03\xB7\x03\xB7\x03" +
		"\xB7\x03\xB7\x03\xB7\x03\xB7\x05\xB7\u09CA\n\xB7\x03\xB8\x03\xB8\x03\xB9" +
		"\x03\xB9\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x05\xBA\u09D4\n\xBA\x03\xBA\x03" +
		"\xBA\x03\xBA\x03\xBA\x03\xBA\x05\xBA\u09DB\n\xBA\x03\xBA\x05\xBA\u09DE" +
		"\n\xBA\x03\xBB\x03\xBB\x03\xBB\x03\xBC\x03\xBC\x03\xBD\x03\xBD\x03\xBE" +
		"\x03\xBE\x03\xBF\x03\xBF\x03\xC0\x03\xC0\x03\xC1\x03\xC1\x03\xC2\x03\xC2" +
		"\x03\xC3\x03\xC3\x03\xC4\x03\xC4\x03\xC5\x03\xC5\x03\xC5\x03\u0980\x02" +
		"\x07\xA6\xBA\u010C\u0112\u0114\xC6\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
		"T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02" +
		"p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02" +
		"\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02" +
		"\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02" +
		"\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02" +
		"\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02" +
		"\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02" +
		"\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02" +
		"\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104" +
		"\x02\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112" +
		"\x02\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120" +
		"\x02\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E" +
		"\x02\u0130\x02\u0132\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C" +
		"\x02\u013E\x02\u0140\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A" +
		"\x02\u014C\x02\u014E\x02\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158" +
		"\x02\u015A\x02\u015C\x02\u015E\x02\u0160\x02\u0162\x02\u0164\x02\u0166" +
		"\x02\u0168\x02\u016A\x02\u016C\x02\u016E\x02\u0170\x02\u0172\x02\u0174" +
		"\x02\u0176\x02\u0178\x02\u017A\x02\u017C\x02\u017E\x02\u0180\x02\u0182" +
		"\x02\u0184\x02\u0186\x02\u0188\x02\x023\x03\x02\x05\x06\x04\x02!!\xF0" +
		"\xF0\x05\x02\x13\x13))HH\x06\x02\x10\x10\x1D\x1DEE\xAC\xAC\x04\x02\x0F" +
		"\x0F\x1C\x1C\x04\x02\u0104\u0104\u010F\u010F\x04\x02\xAB\xAB\u0165\u0165" +
		"\x04\x02\x07\x07zz\x05\x02\xC8\xC8\xE7\xE7\u0136\u0136\r\x02\r\r\x96\x96" +
		"\x9D\x9D\xC4\xC5\xD1\xD1\xE8\xE8\u0114\u0115\u015C\u015C\u0168\u0168\u016D" +
		"\u016D\u017C\u017D\x04\x02\u0181\u0181\u0183\u0183\x06\x02\xEA\xEB\xF3" +
		"\xF3\u0102\u0102\u0137\u0137\x04\x02\xBD\xBD\u012F\u012F\x04\x02,,\u0110" +
		"\u0110\x05\x02\x18\x18dd\xB7\xB7\x05\x02,,bb\u0110\u0110\x05\x0299^^\xAF" +
		"\xAF\x05\x02FFoo\x82\x82\x04\x02\x07\x07WW\x04\x0211MM\x04\x02\t\t\f\f" +
		"\x04\x02\x0E\x0E\x7F\x7F\x04\x02aa\u0118\u0118\x05\x02\xFA\xFA\u0116\u0116" +
		"\u0172\u0172\x06\x02\u0105\u0105\u0111\u0111\u0121\u0121\u0150\u0150\x05" +
		"\x02\x1A\x1A==\xA1\xA1\x07\x02\x1B\x1B\x8F\x90\x95\x95\x9B\x9B\u0139\u0139" +
		"\x04\x02\xE2\xE2\u0153\u0153\x05\x02==\x8C\x8C\xA1\xA1\x04\x02\v\v!!\x06" +
		"\x02\u0101\u0101\u0136\u0136\u0170\u0170\u0174\u0174\x04\x02\xBF\xBF\u0161" +
		"\u0161\x04\x02\xB7\xB7\xBB\xBB\x04\x02\u0185\u0185\u019D\u019E\x06\x02" +
		"##\u019B\u019B\u019F\u019F\u01A2\u01A2\x04\x02\u019D\u019E\u01A0\u01A0" +
		"\x03\x02\u019D\u019E\x03\x02\u01A6\u01A7\x04\x02\u01A6\u01A6\u01A9\u01A9" +
		"\x06\x02##\u019B\u019B\u019D\u019F\u01A1\u01A2\x06\x02\u0134\u0134\u0185" +
		"\u0185\u018C\u018C\u019D\u019E\x04\x02\u0101\u0101\u0170\u0170\x04\x02" +
		"\xB7\xB7\xF2\xF2\f\x02RRTTvv\xB0\xB0\xE9\xE9\u010D\u010D\u012B\u012B\u012E" +
		"\u012E\u0156\u0156\u0184\u0184\x12\x02\x11\x11\x1E\x1F\'\'>>RUYZvv\x86" +
		"\x86\xB0\xB1\xB4\xB4\xE9\xE9\u010D\u010D\u012B\u012B\u012E\u012E\u0156" +
		"\u0156\u0184\u0184\b\x02\xB7\xB7\xC9\xC9\xF2\xF2\u0120\u0120\u016F\u016F" +
		"\u019B\u019B\"\x02??QQvv\xB0\xB0\xB6\xB6\xBD\xBD\xC1\xC1\xCF\xD0\xD6\xD6" +
		"\xD8\xD8\xDF\xDF\xE7\xE7\u0100\u0100\u010A\u010A\u010D\u010D\u011B\u011B" +
		"\u011E\u011F\u0121\u0121\u012B\u012B\u012E\u012E\u0135\u0135\u0141\u0141" +
		"\u0146\u0146\u0148\u0149\u014C\u014D\u0150\u0150\u0156\u0156\u015F\u0160" +
		"\u0168\u016C\u0171\u0171\u0176\u0176\u0184\u0184\x07\x02\xB6\xF8\xFA\u0148" +
		"\u014A\u0160\u0162\u016E\u0170\u0184\x06\x02\x07&(-/\xB0\xB2\xB5\x02\u0AE8" +
		"\x02\u018A\x03\x02\x02\x02\x04\u018D\x03\x02\x02\x02\x06\u0195\x03\x02" +
		"\x02\x02\b\u0198\x03\x02\x02\x02\n\u01BB\x03\x02\x02\x02\f\u01BD\x03\x02" +
		"\x02\x02\x0E\u01CF\x03\x02\x02\x02\x10\u01D3\x03\x02\x02\x02\x12\u01D5" +
		"\x03\x02\x02\x02\x14\u01D8\x03\x02\x02\x02\x16\u01E3\x03\x02\x02\x02\x18" +
		"\u01EB\x03\x02\x02\x02\x1A\u01F3\x03\x02\x02\x02\x1C\u01F5\x03\x02\x02" +
		"\x02\x1E\u0222\x03\x02\x02\x02 \u0224\x03\x02\x02\x02\"\u022B\x03\x02" +
		"\x02\x02$\u022F\x03\x02\x02\x02&\u0233\x03\x02\x02\x02(\u0237\x03\x02" +
		"\x02\x02*\u023C\x03\x02\x02\x02,\u0240\x03\x02\x02\x02.\u024A\x03\x02" +
		"\x02\x020\u024C\x03\x02\x02\x022\u0275\x03\x02\x02\x024\u0283\x03\x02" +
		"\x02\x026\u0285\x03\x02\x02\x028\u028F\x03\x02\x02\x02:\u0291\x03\x02" +
		"\x02\x02<\u02E5\x03\x02\x02\x02>\u02E7\x03\x02\x02\x02@\u02EB\x03\x02" +
		"\x02\x02B\u02F3\x03\x02\x02\x02D\u02FB\x03\x02\x02\x02F\u0306\x03\x02" +
		"\x02\x02H\u030D\x03\x02\x02\x02J\u0329\x03\x02\x02\x02L\u032B\x03\x02" +
		"\x02\x02N\u032E\x03\x02\x02\x02P\u0338\x03\x02\x02\x02R\u033A\x03\x02" +
		"\x02\x02T\u0340\x03\x02\x02\x02V\u0342\x03\x02\x02\x02X\u034A\x03\x02" +
		"\x02\x02Z\u0352\x03\x02\x02\x02\\\u0354\x03\x02\x02\x02^\u0358\x03\x02" +
		"\x02\x02`\u035C\x03\x02\x02\x02b\u0374\x03\x02\x02\x02d\u0378\x03\x02" +
		"\x02\x02f\u037A\x03\x02\x02\x02h\u038A\x03\x02\x02\x02j\u038C\x03\x02" +
		"\x02\x02l\u0391\x03\x02\x02\x02n\u039D\x03\x02\x02\x02p\u03AF\x03\x02" +
		"\x02\x02r\u03C3\x03\x02\x02\x02t\u03CE\x03\x02\x02\x02v\u048C\x03\x02" +
		"\x02\x02x\u0491\x03\x02\x02\x02z\u0493\x03\x02\x02\x02|\u049A\x03\x02" +
		"\x02\x02~\u049D\x03\x02\x02\x02\x80\u04A6\x03\x02\x02\x02\x82\u04AA\x03" +
		"\x02\x02\x02\x84\u04AE\x03\x02\x02\x02\x86\u04B1\x03\x02\x02\x02\x88\u04B9" +
		"\x03\x02\x02\x02\x8A\u04BE\x03\x02\x02\x02\x8C\u04CF\x03\x02\x02\x02\x8E" +
		"\u04D6\x03\x02\x02\x02\x90\u04E0\x03\x02\x02\x02\x92\u04E9\x03\x02\x02" +
		"\x02\x94\u04F3\x03\x02\x02\x02\x96\u04FF\x03\x02\x02\x02\x98\u050A\x03" +
		"\x02\x02\x02\x9A\u050C\x03\x02\x02\x02\x9C\u0519\x03\x02\x02\x02\x9E\u051C" +
		"\x03\x02\x02\x02\xA0\u0525\x03\x02\x02\x02\xA2\u0530\x03\x02\x02\x02\xA4" +
		"\u053D\x03\x02\x02\x02\xA6\u0560\x03\x02\x02\x02\xA8\u0573\x03\x02\x02" +
		"\x02\xAA\u057C\x03\x02\x02\x02\xAC\u0585\x03\x02\x02\x02\xAE\u0598\x03" +
		"\x02\x02\x02\xB0\u05AC\x03\x02\x02\x02\xB2\u05AE\x03\x02\x02\x02\xB4\u05C5" +
		"\x03\x02\x02\x02\xB6\u05D7\x03\x02\x02\x02\xB8\u05D9\x03\x02\x02\x02\xBA" +
		"\u05E7\x03\x02\x02\x02\xBC\u0617\x03\x02\x02\x02\xBE\u0660\x03\x02\x02" +
		"\x02\xC0\u0662\x03\x02\x02\x02\xC2\u0668\x03\x02\x02\x02\xC4\u066A\x03" +
		"\x02\x02\x02\xC6\u066F\x03\x02\x02\x02\xC8\u0674\x03\x02\x02\x02\xCA\u0680" +
		"\x03\x02\x02\x02\xCC\u0691\x03\x02\x02\x02\xCE\u0693\x03\x02\x02\x02\xD0" +
		"\u0695\x03\x02\x02\x02\xD2\u06A8\x03\x02\x02\x02\xD4\u06AA\x03\x02\x02" +
		"\x02\xD6\u06AD\x03\x02\x02\x02\xD8\u06DE\x03\x02\x02\x02\xDA\u06E0\x03" +
		"\x02\x02\x02\xDC\u06E3\x03\x02\x02\x02\xDE\u06E5\x03\x02\x02\x02\xE0\u06EC" +
		"\x03\x02\x02\x02\xE2\u06EE\x03\x02\x02\x02\xE4\u06F0\x03\x02\x02\x02\xE6" +
		"\u06F3\x03\x02\x02\x02\xE8\u06FC\x03\x02\x02\x02\xEA\u0701\x03\x02\x02" +
		"\x02\xEC\u070F\x03\x02\x02\x02\xEE\u072B\x03\x02\x02\x02\xF0\u0735\x03" +
		"\x02\x02\x02\xF2\u073D\x03\x02\x02\x02\xF4\u0742\x03\x02\x02\x02\xF6\u075C" +
		"\x03\x02\x02\x02\xF8\u075E\x03\x02\x02\x02\xFA\u0767\x03\x02\x02\x02\xFC" +
		"\u0772\x03\x02\x02\x02\xFE\u077E\x03\x02\x02\x02\u0100\u0798\x03\x02\x02" +
		"\x02\u0102\u079A\x03\x02\x02\x02\u0104\u07AC\x03\x02\x02\x02\u0106\u07AE" +
		"\x03\x02\x02\x02\u0108\u07B3\x03\x02\x02\x02\u010A\u07B6\x03\x02\x02\x02" +
		"\u010C\u07C4\x03\x02\x02\x02\u010E\u081A\x03\x02\x02\x02\u0110\u0839\x03" +
		"\x02\x02\x02\u0112\u083F\x03\x02\x02\x02\u0114\u08C8\x03\x02\x02\x02\u0116" +
		"\u08D7\x03\x02\x02\x02\u0118\u08D9\x03\x02\x02\x02\u011A\u08E5\x03\x02" +
		"\x02\x02\u011C\u08F1\x03\x02\x02\x02\u011E\u08FA\x03\x02\x02\x02\u0120" +
		"\u08FF\x03\x02\x02\x02\u0122\u0906\x03\x02\x02\x02\u0124\u0908\x03\x02" +
		"\x02\x02\u0126\u090E\x03\x02\x02\x02\u0128\u0910\x03\x02\x02\x02\u012A" +
		"\u0914\x03\x02\x02\x02\u012C\u0916\x03\x02\x02\x02\u012E\u091B\x03\x02" +
		"\x02\x02\u0130\u0922\x03\x02\x02\x02\u0132\u0926\x03\x02\x02\x02\u0134" +
		"\u092B\x03\x02\x02\x02\u0136\u0935\x03\x02\x02\x02\u0138\u0938\x03\x02" +
		"\x02\x02\u013A\u093F\x03\x02\x02\x02\u013C\u0945\x03\x02\x02\x02\u013E" +
		"\u094F\x03\x02\x02\x02\u0140\u0951\x03\x02\x02\x02\u0142\u0955\x03\x02" +
		"\x02\x02\u0144\u0961\x03\x02\x02\x02\u0146\u0963\x03\x02\x02\x02\u0148" +
		"\u0968\x03\x02\x02\x02\u014A\u096A\x03\x02\x02\x02\u014C\u096C\x03\x02" +
		"\x02\x02\u014E\u0971\x03\x02\x02\x02\u0150\u0973\x03\x02\x02\x02\u0152" +
		"\u0975\x03\x02\x02\x02\u0154\u0977\x03\x02\x02\x02\u0156\u0979\x03\x02" +
		"\x02\x02\u0158\u097B\x03\x02\x02\x02\u015A\u0983\x03\x02\x02\x02\u015C" +
		"\u0986\x03\x02\x02\x02\u015E\u098A\x03\x02\x02\x02\u0160\u098D\x03\x02" +
		"\x02\x02\u0162\u0998\x03\x02\x02\x02\u0164\u09A2\x03\x02\x02\x02\u0166" +
		"\u09A8\x03\x02\x02\x02\u0168\u09B0\x03\x02\x02\x02\u016A\u09C0\x03\x02" +
		"\x02\x02\u016C\u09C9\x03\x02\x02\x02\u016E\u09CB\x03\x02\x02\x02\u0170" +
		"\u09CD\x03\x02\x02\x02\u0172\u09DD\x03\x02\x02\x02\u0174\u09DF\x03\x02" +
		"\x02\x02\u0176\u09E2\x03\x02\x02\x02\u0178\u09E4\x03\x02\x02\x02\u017A" +
		"\u09E6\x03\x02\x02\x02\u017C\u09E8\x03\x02\x02\x02\u017E\u09EA\x03\x02" +
		"\x02\x02\u0180\u09EC\x03\x02\x02\x02\u0182\u09EE\x03\x02\x02\x02\u0184" +
		"\u09F0\x03\x02\x02\x02\u0186\u09F2\x03\x02\x02\x02\u0188\u09F4\x03\x02" +
		"\x02\x02\u018A\u018B\x05\x04\x03\x02\u018B\u018C\x07\x02\x02\x03\u018C" +
		"\x03\x03\x02\x02\x02\u018D\u018E\x05\x06\x04\x02\u018E\u018F\x07\x02\x02" +
		"\x03\u018F\x05\x03\x02\x02\x02\u0190\u0194\x05\b\x05\x02\u0191\u0194\x05" +
		"\n\x06\x02\u0192\u0194\x05\f\x07\x02\u0193\u0190\x03\x02\x02\x02\u0193" +
		"\u0191\x03\x02\x02\x02\u0193\u0192\x03\x02\x02\x02\u0194\u0197\x03\x02" +
		"\x02\x02\u0195\u0193\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196" +
		"\x07\x03\x02\x02\x02\u0197\u0195\x03\x02\x02\x02\u0198\u0199\t\x02\x02" +
		"\x02\u0199\t\x03\x02\x02\x02\u019A\u019B\x05\x0E\b\x02\u019B\u019C\x07" +
		"\u0195\x02\x02\u019C\u01BC\x03\x02\x02\x02\u019D\u019E\x05\x10\t\x02\u019E" +
		"\u019F\x07\u0195\x02\x02\u019F\u01BC\x03\x02\x02\x02\u01A0\u01A1\x05\x12" +
		"\n\x02\u01A1\u01A2\x07\u0195\x02\x02\u01A2\u01BC\x03\x02\x02\x02\u01A3" +
		"\u01A4\x05\x14\v\x02\u01A4\u01A5\x07\u0195\x02\x02\u01A5\u01BC\x03\x02" +
		"\x02\x02\u01A6\u01A7\x05\x1A\x0E\x02\u01A7\u01A8\x07\u0195\x02\x02\u01A8" +
		"\u01BC\x03\x02\x02\x02\u01A9\u01AA\x05\x1E\x10\x02\u01AA\u01AB\x07\u0195" +
		"\x02\x02\u01AB\u01BC\x03\x02\x02\x02\u01AC\u01AD\x05 \x11\x02\u01AD\u01AE" +
		"\x07\u0195\x02\x02\u01AE\u01BC\x03\x02\x02\x02\u01AF\u01B0\x05\"\x12\x02" +
		"\u01B0\u01B1\x07\u0195\x02\x02\u01B1\u01BC\x03\x02\x02\x02\u01B2\u01B3" +
		"\x05$\x13\x02\u01B3\u01B4\x07\u0195\x02\x02\u01B4\u01BC\x03\x02\x02\x02" +
		"\u01B5\u01B6\x05&\x14\x02\u01B6\u01B7\x07\u0195\x02\x02\u01B7\u01BC\x03" +
		"\x02\x02\x02\u01B8\u01B9\x05(\x15\x02\u01B9\u01BA\x07\u0195\x02\x02\u01BA" +
		"\u01BC\x03\x02\x02\x02\u01BB\u019A\x03\x02\x02\x02\u01BB\u019D\x03\x02" +
		"\x02\x02\u01BB\u01A0\x03\x02\x02\x02\u01BB\u01A3\x03\x02\x02\x02\u01BB" +
		"\u01A6\x03\x02\x02\x02\u01BB\u01A9\x03\x02\x02\x02\u01BB\u01AC\x03\x02" +
		"\x02\x02\u01BB\u01AF\x03\x02\x02\x02\u01BB\u01B2\x03\x02\x02\x02\u01BB" +
		"\u01B5\x03\x02\x02\x02\u01BB\u01B8\x03\x02\x02\x02\u01BC\v\x03\x02\x02" +
		"\x02\u01BD\u01BE\x07\u0195\x02\x02\u01BE\r\x03\x02\x02\x02\u01BF\u01D0" +
		"\x05.\x18\x02\u01C0\u01D0\x05,\x17\x02\u01C1\u01D0\x05\x96L\x02\u01C2" +
		"\u01D0\x05v<\x02\u01C3\u01D0\x05\x8EH\x02\u01C4\u01D0\x05l7\x02\u01C5" +
		"\u01D0\x05\x88E\x02\u01C6\u01D0\x05\x90I\x02\u01C7\u01D0\x05n8\x02\u01C8" +
		"\u01D0\x05\x86D\x02\u01C9\u01D0\x05\x92J\x02\u01CA\u01D0\x05p9\x02\u01CB" +
		"\u01D0\x05\x8AF\x02\u01CC\u01D0\x05\x94K\x02\u01CD\u01D0\x05j6\x02\u01CE" +
		"\u01D0\x05\x8CG\x02\u01CF\u01BF\x03\x02\x02\x02\u01CF\u01C0\x03\x02\x02" +
		"\x02\u01CF\u01C1\x03\x02\x02\x02\u01CF\u01C2\x03\x02\x02\x02\u01CF\u01C3" +
		"\x03\x02\x02\x02\u01CF\u01C4\x03\x02\x02\x02\u01CF\u01C5\x03\x02\x02\x02" +
		"\u01CF\u01C6\x03\x02\x02\x02\u01CF\u01C7\x03\x02\x02\x02\u01CF\u01C8\x03" +
		"\x02\x02\x02\u01CF\u01C9\x03\x02\x02\x02\u01CF\u01CA\x03\x02\x02\x02\u01CF" +
		"\u01CB\x03\x02\x02\x02\u01CF\u01CC\x03\x02\x02\x02\u01CF\u01CD\x03\x02" +
		"\x02\x02\u01CF\u01CE\x03\x02\x02\x02\u01D0\x0F\x03\x02\x02\x02\u01D1\u01D4" +
		"\x05\xA6T\x02\u01D2\u01D4\x05\x98M\x02\u01D3\u01D1\x03\x02\x02\x02\u01D3" +
		"\u01D2\x03\x02\x02\x02\u01D4\x11\x03\x02\x02\x02\u01D5\u01D6\t\x03\x02" +
		"\x02\u01D6\u01D7\x05\u0156\xAC\x02\u01D7\x13\x03\x02\x02\x02\u01D8\u01DC" +
		"\x07\xFD\x02\x02\u01D9\u01DD\x05\x16\f\x02\u01DA\u01DB\x07i\x02\x02\u01DB" +
		"\u01DD\x07\u0103\x02\x02\u01DC\u01D9\x03\x02\x02\x02\u01DC\u01DA\x03\x02" +
		"\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD\u01E1\x03\x02\x02\x02\u01DE" +
		"\u01E2\x05\x10\t\x02\u01DF\u01E2\x05\x9AN\x02\u01E0\u01E2\x05\xA4S\x02" +
		"\u01E1\u01DE\x03\x02\x02\x02\u01E1\u01DF\x03\x02\x02\x02\u01E1\u01E0\x03" +
		"\x02\x02\x02\u01E2\x15\x03\x02\x02\x02\u01E3\u01E8\x05\x18\r\x02\u01E4" +
		"\u01E5\x07\u0194\x02\x02\u01E5\u01E7\x05\x18\r\x02\u01E6\u01E4\x03\x02" +
		"\x02\x02\u01E7\u01EA\x03\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E8" +
		"\u01E9\x03\x02\x02\x02\u01E9\x17\x03\x02\x02\x02\u01EA\u01E8\x03\x02\x02" +
		"\x02\u01EB\u01EC\t\x04\x02\x02\u01EC\x19\x03\x02\x02\x02\u01ED\u01EE\x07" +
		"\xA6\x02\x02\u01EE\u01EF\x07\x0F\x02\x02\u01EF\u01F4\x05\u014E\xA8\x02" +
		"\u01F0\u01F1\x07\xA6\x02\x02\u01F1\u01F4\x05\u0150\xA9\x02\u01F2\u01F4" +
		"\x05\x1C\x0F\x02\u01F3\u01ED\x03\x02\x02\x02\u01F3\u01F0\x03\x02\x02\x02" +
		"\u01F3\u01F2\x03\x02\x02\x02\u01F4\x1B\x03\x02\x02\x02\u01F5\u01F6\x07" +
		"\xA6\x02\x02\u01F6\u01F7\x07X\x02\x02\u01F7\u01FC\x05\u0158\xAD\x02\u01F8" +
		"\u01F9\x07\u0194\x02\x02\u01F9\u01FB\x05\u0158\xAD\x02\u01FA\u01F8\x03" +
		"\x02\x02\x02\u01FB\u01FE\x03\x02\x02\x02\u01FC\u01FA\x03\x02\x02\x02\u01FC" +
		"\u01FD\x03\x02\x02\x02\u01FD\x1D\x03\x02\x02\x02\u01FE\u01FC\x03\x02\x02" +
		"\x02\u01FF\u0200\x07\u0159\x02\x02\u0200\u0223\t\x05\x02\x02\u0201\u0202" +
		"\x07\u0159\x02\x02\u0202\u0203\x07\xE4\x02\x02\u0203\u0223\t\x06\x02\x02" +
		"\u0204\u0205\x07\u0159\x02\x02\u0205\u0208\x07\x99\x02\x02\u0206\u0207" +
		"\t\x07\x02\x02\u0207\u0209\x05\u0156\xAC\x02\u0208\u0206\x03\x02\x02\x02" +
		"\u0208\u0209\x03\x02\x02\x02\u0209\u020B\x03\x02\x02\x02\u020A\u020C\x05" +
		"\u0110\x89\x02\u020B\u020A\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02" +
		"\u020C\u0223\x03\x02\x02\x02\u020D\u020E\x07\u0159\x02\x02\u020E\u020F" +
		"\x07\x17\x02\x02\u020F\u0210\t\x07\x02\x02\u0210\u0212\x05\u0158\xAD\x02" +
		"\u0211\u0213\x05\u0110\x89\x02\u0212\u0211\x03\x02\x02\x02\u0212\u0213" +
		"\x03\x02\x02\x02\u0213\u0223\x03\x02\x02\x02\u0214\u0215\x07\u0159\x02" +
		"\x02\u0215\u0216\x07\xE0\x02\x02\u0216\u0217\t\b\x02\x02\u0217\u0223\x05" +
		"\u0158\xAD\x02\u0218\u021A\x07\u0159\x02\x02\u0219\u021B\x07\u0178\x02" +
		"\x02\u021A\u0219\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B\u021C" +
		"\x03\x02\x02\x02\u021C\u0223\x077\x02\x02\u021D\u021F\x07\u0159\x02\x02" +
		"\u021E\u0220\x07\u0105\x02\x02\u021F\u021E\x03\x02\x02\x02\u021F\u0220" +
		"\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221\u0223\x07X\x02\x02" +
		"\u0222\u01FF\x03\x02\x02\x02\u0222\u0201\x03\x02\x02\x02\u0222\u0204\x03" +
		"\x02\x02\x02\u0222\u020D\x03\x02\x02\x02\u0222\u0214\x03\x02\x02\x02\u0222" +
		"\u0218\x03\x02\x02\x02\u0222\u021D\x03\x02\x02\x02\u0223\x1F\x03\x02\x02" +
		"\x02\u0224\u0225\x07P\x02\x02\u0225\u0226\x07\u012D\x02\x02\u0226\u0229" +
		"\x05\u0158\xAD\x02\u0227\u0228\x07\u0181\x02\x02\u0228\u022A\x05\u0160" +
		"\xB1\x02\u0229\u0227\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A" +
		"!\x03\x02\x02\x02\u022B\u022C\x07\xA4\x02\x02\u022C\u022D\x07\u012D\x02" +
		"\x02\u022D\u022E\x05\u0158\xAD\x02\u022E#\x03\x02\x02\x02\u022F\u0231" +
		"\x07\u0158\x02\x02\u0230\u0232\x05\u0162\xB2\x02\u0231\u0230\x03\x02\x02" +
		"\x02\u0231\u0232\x03\x02\x02\x02\u0232%\x03\x02\x02\x02\u0233\u0235\x07" +
		"\u014E\x02\x02\u0234\u0236\x05\u0164\xB3\x02\u0235\u0234\x03\x02\x02\x02" +
		"\u0235\u0236\x03\x02\x02\x02\u0236\'\x03\x02\x02\x02\u0237\u0238\t\t\x02" +
		"\x02\u0238\u0239\x07D\x02\x02\u0239\u023A\x05t;\x02\u023A)\x03\x02\x02" +
		"\x02\u023B\u023D\x07\u01AA\x02\x02\u023C\u023B\x03\x02\x02\x02\u023D\u023E" +
		"\x03\x02\x02\x02\u023E\u023C\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02" +
		"\u023F+\x03\x02\x02\x02\u0240\u0241\x07|\x02\x02\u0241\u0242\x07\u0165" +
		"\x02\x02\u0242\u0243\x05\u0154\xAB\x02\u0243\u0246\x05\u015A\xAE\x02\u0244" +
		"\u0245\x07\xBE\x02\x02\u0245\u0247\x05\xA6T\x02\u0246\u0244\x03\x02\x02" +
		"\x02\u0246\u0247\x03\x02\x02\x02\u0247-\x03\x02\x02\x02\u0248\u024B\x05" +
		"0\x19\x02\u0249\u024B\x052\x1A\x02\u024A\u0248\x03\x02\x02\x02\u024A\u0249" +
		"\x03\x02\x02\x02\u024B/\x03\x02\x02\x02\u024C\u024E\x07\xE0\x02\x02\u024D" +
		"\u024F\x07\x9A\x02\x02\u024E\u024D\x03\x02\x02\x02\u024E\u024F\x03\x02" +
		"\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250\u0252\x07\u0165\x02\x02\u0251" +
		"\u0253\x05\u015C\xAF\x02\u0252\u0251\x03\x02\x02\x02\u0252\u0253\x03\x02" +
		"\x02\x02\u0253\u0254\x03\x02\x02\x02\u0254\u0255\x05\u0154\xAB\x02\u0255" +
		"\u0256\x07\u0190\x02\x02\u0256\u025B\x054\x1B\x02\u0257\u0258\x07\u0194" +
		"\x02\x02\u0258\u025A\x054\x1B\x02\u0259\u0257\x03\x02\x02\x02\u025A\u025D" +
		"\x03\x02\x02\x02\u025B\u0259\x03\x02\x02\x02\u025B\u025C\x03\x02\x02\x02" +
		"\u025C\u0260\x03\x02\x02\x02\u025D\u025B\x03\x02\x02\x02\u025E\u025F\x07" +
		"\u0194\x02\x02\u025F\u0261\x05V,\x02\u0260\u025E\x03\x02\x02\x02\u0260" +
		"\u0261\x03\x02\x02\x02\u0261\u0264\x03\x02\x02\x02\u0262\u0263\x07\u0194" +
		"\x02\x02\u0263\u0265\x05X-\x02\u0264\u0262\x03\x02\x02\x02\u0264\u0265" +
		"\x03\x02\x02\x02\u0265\u0268\x03\x02\x02\x02\u0266\u0267\x07\u0194\x02" +
		"\x02\u0267\u0269\x05\\/\x02\u0268\u0266\x03\x02\x02\x02\u0268\u0269\x03" +
		"\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A\u026C\x07\u0191\x02\x02" +
		"\u026B\u026D\x05L\'\x02\u026C\u026B\x03\x02\x02\x02\u026C\u026D\x03\x02" +
		"\x02\x02\u026D\u026F\x03\x02\x02\x02\u026E\u0270\x05^0\x02\u026F\u026E" +
		"\x03\x02\x02\x02\u026F\u0270\x03\x02\x02\x02\u0270\u0271\x03\x02\x02\x02" +
		"\u0271\u0273\x05\u015A\xAE\x02\u0272\u0274\x05f4\x02\u0273\u0272\x03\x02" +
		"\x02\x02\u0273\u0274\x03\x02\x02\x02\u02741\x03\x02\x02\x02\u0275\u0276" +
		"\x07\xE0\x02\x02\u0276\u0278\x07\u0165\x02\x02\u0277\u0279\x05\u015C\xAF" +
		"\x02\u0278\u0277\x03\x02\x02\x02\u0278\u0279\x03\x02\x02\x02\u0279\u027A" +
		"\x03\x02\x02\x02\u027A\u027B\x05\u0154\xAB\x02\u027B\u027E\x05\u015A\xAE" +
		"\x02\u027C\u027D\x07\xBE\x02\x02\u027D\u027F\x05\xA6T\x02\u027E\u027C" +
		"\x03\x02\x02\x02\u027E\u027F\x03\x02\x02\x02\u027F3\x03\x02\x02\x02\u0280" +
		"\u0284\x056\x1C\x02\u0281\u0284\x05N(\x02\u0282\u0284\x05R*\x02\u0283" +
		"\u0280\x03\x02\x02\x02\u0283\u0281\x03\x02\x02\x02\u0283\u0282\x03\x02" +
		"\x02\x02\u02845\x03\x02\x02\x02\u0285\u0286\x058\x1D\x02\u0286\u0288\x05" +
		"<\x1F\x02\u0287\u0289\x05J&\x02\u0288\u0287\x03\x02\x02\x02\u0288\u0289" +
		"\x03\x02\x02\x02\u0289\u028B\x03\x02\x02\x02\u028A\u028C\x05L\'\x02\u028B" +
		"\u028A\x03\x02\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C7\x03\x02\x02" +
		"\x02\u028D\u0290\x05\u0158\xAD\x02\u028E\u0290\x05\u010A\x86\x02\u028F" +
		"\u028D\x03\x02\x02\x02\u028F\u028E\x03\x02\x02\x02\u02909\x03\x02\x02" +
		"\x02\u0291\u0292\x07\u0190\x02\x02\u0292\u0297\x058\x1D\x02\u0293\u0294" +
		"\x07\u0194\x02\x02\u0294\u0296\x058\x1D\x02\u0295\u0293\x03\x02\x02\x02" +
		"\u0296\u0299\x03\x02\x02\x02\u0297\u0295\x03\x02\x02\x02\u0297\u0298\x03" +
		"\x02\x02\x02\u0298\u029A\x03\x02\x02\x02\u0299\u0297\x03\x02\x02\x02\u029A" +
		"\u029B\x07\u0191\x02\x02\u029B;\x03\x02\x02\x02\u029C\u02E6\t\n\x02\x02" +
		"\u029D\u029F\t\v\x02\x02\u029E\u02A0\x05> \x02\u029F\u029E\x03\x02\x02" +
		"\x02\u029F\u02A0\x03\x02\x02\x02\u02A0\u02E6\x03\x02\x02\x02\u02A1\u02A3" +
		"\x07\u0169\x02\x02\u02A2\u02A4\x05> \x02\u02A3\u02A2\x03\x02\x02\x02\u02A3" +
		"\u02A4\x03\x02\x02\x02\u02A4\u02AB\x03\x02\x02\x02\u02A5\u02A7\t\f\x02" +
		"\x02\u02A6\u02A8\x07\u0124\x02\x02\u02A7\u02A6\x03\x02\x02\x02\u02A7\u02A8" +
		"\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9\u02AA\x07\u0168\x02" +
		"\x02\u02AA\u02AC\x07\xB5\x02\x02\u02AB\u02A5\x03\x02\x02\x02\u02AB\u02AC" +
		"\x03\x02\x02\x02\u02AC\u02E6\x03\x02\x02\x02\u02AD\u02AF\x07\u016A\x02" +
		"\x02\u02AE\u02B0\x05> \x02\u02AF\u02AE\x03\x02\x02\x02\u02AF\u02B0\x03" +
		"\x02\x02\x02\u02B0\u02B7\x03\x02\x02\x02\u02B1\u02B3\t\f\x02\x02\u02B2" +
		"\u02B4\x07\u0124\x02\x02\u02B3\u02B2\x03\x02\x02\x02\u02B3\u02B4\x03\x02" +
		"\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02B6\x07\u0168\x02\x02\u02B6" +
		"\u02B8\x07\xB5\x02\x02\u02B7\u02B1\x03\x02\x02\x02\u02B7\u02B8\x03\x02" +
		"\x02\x02\u02B8\u02E6\x03\x02\x02\x02\u02B9\u02BB\x07\u016B\x02\x02\u02BA" +
		"\u02BC\x05> \x02\u02BB\u02BA\x03\x02\x02\x02\u02BB\u02BC\x03\x02\x02\x02" +
		"\u02BC\u02C3\x03\x02\x02\x02\u02BD\u02BF\t\f\x02\x02\u02BE\u02C0\x07\u0124" +
		"\x02\x02\u02BF\u02BE\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0" +
		"\u02C1\x03\x02\x02\x02\u02C1\u02C2\x07\u0168\x02\x02\u02C2\u02C4\x07\xB5" +
		"\x02\x02\u02C3\u02BD\x03\x02\x02\x02\u02C3\u02C4\x03\x02\x02\x02\u02C4" +
		"\u02E6\x03\x02\x02\x02\u02C5\u02C7\x07\u016C\x02\x02\u02C6\u02C8\x05>" +
		" \x02\u02C7\u02C6\x03\x02\x02\x02\u02C7\u02C8\x03\x02\x02\x02\u02C8\u02CF" +
		"\x03\x02\x02\x02\u02C9\u02CB\t\f\x02\x02\u02CA\u02CC\x07\u0124\x02\x02" +
		"\u02CB\u02CA\x03\x02\x02\x02\u02CB\u02CC\x03\x02\x02\x02\u02CC\u02CD\x03" +
		"\x02\x02\x02\u02CD\u02CE\x07\u0168\x02\x02\u02CE\u02D0\x07\xB5\x02\x02" +
		"\u02CF\u02C9\x03\x02\x02\x02\u02CF\u02D0\x03\x02\x02\x02\u02D0\u02E6\x03" +
		"\x02\x02\x02\u02D1\u02D3\t\r\x02\x02\u02D2\u02D4\x05@";
	private static readonly _serializedATNSegment2: string =
		"!\x02\u02D3\u02D2\x03\x02\x02\x02\u02D3\u02D4\x03\x02\x02\x02\u02D4\u02E6" +
		"\x03\x02\x02\x02\u02D5\u02D7\t\x0E\x02\x02\u02D6\u02D8\x05D#\x02\u02D7" +
		"\u02D6\x03\x02\x02\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02E6\x03\x02" +
		"\x02\x02\u02D9\u02DB\x07Q\x02\x02\u02DA\u02DC\x05F$\x02\u02DB\u02DA\x03" +
		"\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02E6\x03\x02\x02\x02\u02DD" +
		"\u02DF\x07\u0154\x02\x02\u02DE\u02E0\x05H%\x02\u02DF\u02DE\x03\x02\x02" +
		"\x02\u02DF\u02E0\x03\x02\x02\x02\u02E0\u02E6\x03\x02\x02\x02\u02E1\u02E3" +
		"\x07w\x02\x02\u02E2\u02E4\x05B\"\x02\u02E3\u02E2\x03\x02\x02\x02\u02E3" +
		"\u02E4\x03\x02\x02\x02\u02E4\u02E6\x03\x02\x02\x02\u02E5\u029C\x03\x02" +
		"\x02\x02\u02E5\u029D\x03\x02\x02\x02\u02E5\u02A1\x03\x02\x02\x02\u02E5" +
		"\u02AD\x03\x02\x02\x02\u02E5\u02B9\x03\x02\x02\x02\u02E5\u02C5\x03\x02" +
		"\x02\x02\u02E5\u02D1\x03\x02\x02\x02\u02E5\u02D5\x03\x02\x02\x02\u02E5" +
		"\u02D9\x03\x02\x02\x02\u02E5\u02DD\x03\x02\x02\x02\u02E5\u02E1\x03\x02" +
		"\x02\x02\u02E6=\x03\x02\x02\x02\u02E7\u02E8\x07\u0190\x02\x02\u02E8\u02E9" +
		"\x05\u0178\xBD\x02\u02E9\u02EA\x07\u0191\x02\x02\u02EA?\x03\x02\x02\x02" +
		"\u02EB\u02EC\x07\u0190\x02\x02\u02EC\u02EF\x05\u0178\xBD\x02\u02ED\u02EE" +
		"\x07\u0194\x02\x02\u02EE\u02F0\x05\u0178\xBD\x02\u02EF\u02ED\x03\x02\x02" +
		"\x02\u02EF\u02F0\x03\x02\x02\x02\u02F0\u02F1\x03\x02\x02\x02\u02F1\u02F2" +
		"\x07\u0191\x02\x02\u02F2A\x03\x02\x02\x02\u02F3\u02F4\x07\u0190\x02\x02" +
		"\u02F4\u02F7\x05\u0176\xBC\x02\u02F5\u02F6\x07\u0194\x02\x02\u02F6\u02F8" +
		"\x05\u0176\xBC\x02\u02F7\u02F5\x03\x02\x02\x02\u02F7\u02F8\x03\x02\x02" +
		"\x02\u02F8\u02F9\x03\x02\x02\x02\u02F9\u02FA\x07\u0191\x02\x02\u02FAC" +
		"\x03\x02\x02\x02\u02FB\u02FC\x07\u018B\x02\x02\u02FC\u0301\x05<\x1F\x02" +
		"\u02FD\u02FE\x07\u0194\x02\x02\u02FE\u0300\x05<\x1F\x02\u02FF\u02FD\x03" +
		"\x02\x02\x02\u0300\u0303\x03\x02\x02\x02\u0301\u02FF\x03\x02\x02\x02\u0301" +
		"\u0302\x03\x02\x02\x02\u0302\u0304\x03\x02\x02\x02\u0303\u0301\x03\x02" +
		"\x02\x02\u0304\u0305\x07\u018A\x02\x02\u0305E\x03\x02\x02\x02\u0306\u0307" +
		"\x07\u018B\x02\x02\u0307\u0308\x05<\x1F\x02\u0308\u0309\x07\u0194\x02" +
		"\x02\u0309\u030A\x05<\x1F\x02\u030A\u030B\x03\x02\x02\x02\u030B\u030C" +
		"\x07\u018A\x02\x02\u030CG\x03\x02\x02\x02\u030D\u030E\x07\u018B\x02\x02" +
		"\u030E\u030F\x058\x1D\x02\u030F\u0316\x05<\x1F\x02\u0310\u0311\x07\u0194" +
		"\x02\x02\u0311\u0312\x058\x1D\x02\u0312\u0313\x05<\x1F\x02\u0313\u0315" +
		"\x03\x02\x02\x02\u0314\u0310\x03\x02\x02\x02\u0315\u0318\x03\x02\x02\x02" +
		"\u0316\u0314\x03\x02\x02\x02\u0316\u0317\x03\x02\x02\x02\u0317\u0319\x03" +
		"\x02\x02\x02\u0318\u0316\x03\x02\x02\x02\u0319\u031A\x07\u018A\x02\x02" +
		"\u031AI\x03\x02\x02\x02\u031B\u031C\x07\xDC\x02\x02\u031C\u031E\x05Z." +
		"\x02\u031D\u031B\x03\x02\x02\x02\u031D\u031E\x03\x02\x02\x02\u031E\u031F" +
		"\x03\x02\x02\x02\u031F\u0320\x07\u014A\x02\x02\u0320\u0323\x07I\x02\x02" +
		"\u0321\u0322\x07\u0134\x02\x02\u0322\u0324\x07%\x02\x02\u0323\u0321\x03" +
		"\x02\x02\x02\u0323\u0324\x03\x02\x02\x02\u0324\u032A\x03\x02\x02\x02\u0325" +
		"\u0327\x07\u0134\x02\x02\u0326\u0325\x03\x02\x02\x02\u0326\u0327\x03\x02" +
		"\x02\x02\u0327\u0328\x03\x02\x02\x02\u0328\u032A\x07\u0136\x02\x02\u0329" +
		"\u031D\x03\x02\x02\x02\u0329\u0326\x03\x02\x02\x02\u032AK\x03\x02\x02" +
		"\x02\u032B\u032C\x07\x15\x02\x02\u032C\u032D\x07\u01A5\x02\x02\u032DM" +
		"\x03\x02\x02\x02\u032E\u032F\x058\x1D\x02\u032F\u0330\x05<\x1F\x02\u0330" +
		"\u0333\x07\u0129\x02\x02\u0331\u0332\x07\u0104\x02\x02\u0332\u0334\x05" +
		"P)\x02\u0333\u0331\x03\x02\x02\x02\u0333\u0334\x03\x02\x02\x02\u0334\u0336" +
		"\x03\x02\x02\x02\u0335\u0337\x07\xAD\x02\x02\u0336\u0335\x03\x02\x02\x02" +
		"\u0336\u0337\x03\x02\x02\x02\u0337O\x03\x02\x02\x02\u0338\u0339\x07\u01A5" +
		"\x02\x02\u0339Q\x03\x02\x02\x02\u033A\u033B\x058\x1D\x02\u033B\u033C\x07" +
		"\xBE\x02\x02\u033C\u033E\x05T+\x02\u033D\u033F\x05L\'\x02\u033E\u033D" +
		"\x03\x02\x02\x02\u033E\u033F\x03\x02\x02\x02\u033FS\x03\x02\x02\x02\u0340" +
		"\u0341\x05\u010A\x86\x02\u0341U\x03\x02\x02\x02\u0342\u0343\x07\xAE\x02" +
		"\x02\u0343\u0344\x07\u0103\x02\x02\u0344\u0345\x05\u010A\x86\x02\u0345" +
		"\u0346\x07\xBE\x02\x02\u0346\u0347\x05\u010A\x86\x02\u0347W\x03\x02\x02" +
		"\x02\u0348\u0349\x07\xDC\x02\x02\u0349\u034B\x05Z.\x02\u034A\u0348\x03" +
		"\x02\x02\x02\u034A\u034B\x03\x02\x02\x02\u034B\u034C\x03\x02\x02\x02\u034C" +
		"\u034D\x07\u014A\x02\x02\u034D\u034E\x07I\x02\x02\u034E\u034F\x05:\x1E" +
		"\x02\u034F\u0350\x07\u0134\x02\x02\u0350\u0351\x07%\x02\x02\u0351Y\x03" +
		"\x02\x02\x02\u0352\u0353\x05\u0144\xA3\x02\u0353[\x03\x02\x02\x02\u0354" +
		"\u0355\x07\u0147\x02\x02\u0355\u0356\x07\u0103\x02\x02\u0356\u0357\x07" +
		"\u0163\x02\x02\u0357]\x03\x02\x02\x02\u0358\u0359\x07c\x02\x02\u0359\u035A" +
		"\x07\xCA\x02\x02\u035A\u035B\x05`1\x02\u035B_\x03\x02\x02\x02\u035C\u035D" +
		"\x07\u0190\x02\x02\u035D\u0362\x05b2\x02\u035E\u035F\x07\u0194\x02\x02" +
		"\u035F\u0361\x05b2\x02\u0360\u035E\x03\x02\x02\x02\u0361\u0364\x03\x02" +
		"\x02\x02\u0362\u0360\x03\x02\x02\x02\u0362\u0363\x03\x02\x02\x02\u0363" +
		"\u0365\x03\x02\x02\x02\u0364\u0362\x03\x02\x02\x02\u0365\u0366\x07\u0191" +
		"\x02\x02\u0366a\x03\x02\x02\x02\u0367\u0375\x05\u012A\x96\x02\u0368\u0369" +
		"\x05\u0144\xA3\x02\u0369\u036A\x07\u0190\x02\x02\u036A\u036F\x05d3\x02" +
		"\u036B\u036C\x07\u0194\x02\x02\u036C\u036E\x05d3\x02\u036D\u036B\x03\x02" +
		"\x02\x02\u036E\u0371\x03\x02\x02\x02\u036F\u036D\x03\x02\x02\x02\u036F" +
		"\u0370\x03\x02\x02\x02\u0370\u0372\x03\x02\x02\x02\u0371\u036F\x03\x02" +
		"\x02\x02\u0372\u0373\x07\u0191\x02\x02\u0373\u0375\x03\x02\x02\x02\u0374" +
		"\u0367\x03\x02\x02\x02\u0374\u0368\x03\x02\x02\x02\u0375c\x03\x02\x02" +
		"\x02\u0376\u0379\x05\u012A\x96\x02\u0377\u0379\x05\u0172\xBA\x02\u0378" +
		"\u0376\x03\x02\x02\x02\u0378\u0377\x03\x02\x02\x02\u0379e\x03\x02\x02" +
		"\x02\u037A\u037B\x07\u0122\x02\x02\u037B\u0384\x05\u0156\xAC\x02\u037C" +
		"\u0380\x07\u0190\x02\x02\u037D\u037F\x05h5\x02\u037E\u037D\x03\x02\x02" +
		"\x02\u037F\u0382\x03\x02\x02\x02\u0380\u037E\x03\x02\x02\x02\u0380\u0381" +
		"\x03\x02\x02\x02\u0381\u0383\x03\x02\x02\x02\u0382\u0380\x03\x02\x02\x02" +
		"\u0383\u0385\x07\u0191\x02\x02\u0384\u037C\x03\x02\x02\x02\u0384\u0385" +
		"\x03\x02\x02\x02\u0385g\x03\x02\x02\x02\u0386\u0387\t\x0F\x02\x02\u0387" +
		"\u038B\t\x10\x02\x02\u0388\u0389\t\x11\x02\x02\u0389\u038B\t\x12\x02\x02" +
		"\u038A\u0386\x03\x02\x02\x02\u038A\u0388\x03\x02\x02\x02\u038Bi\x03\x02" +
		"\x02\x02\u038C\u038D\x07\xE0\x02\x02\u038D\u038E\x07\x0F\x02\x02\u038E" +
		"\u038F\x05\u0158\xAD\x02\u038F\u0390\x05\u015A\xAE\x02\u0390k\x03\x02" +
		"\x02\x02\u0391\u0392\x07\xE0\x02\x02\u0392\u0394\x07\x1C\x02\x02\u0393" +
		"\u0395\x05\u015C\xAF\x02\u0394\u0393\x03\x02\x02\x02\u0394\u0395\x03\x02" +
		"\x02\x02\u0395\u0396\x03\x02\x02\x02\u0396\u0398\x05\u0152\xAA\x02\u0397" +
		"\u0399\x05L\'\x02\u0398\u0397\x03\x02\x02\x02\u0398\u0399\x03\x02\x02" +
		"\x02\u0399\u039B\x03\x02\x02\x02\u039A\u039C\x05\u015A\xAE\x02\u039B\u039A" +
		"\x03\x02\x02\x02\u039B\u039C\x03\x02\x02\x02\u039Cm\x03\x02\x02\x02\u039D" +
		"\u039F\x07\xE0\x02\x02\u039E\u03A0\x07\x9A\x02\x02\u039F\u039E\x03\x02" +
		"\x02\x02\u039F\u03A0\x03\x02\x02\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1" +
		"\u03A3\x07\xAB\x02\x02\u03A2\u03A4\x05\u015C\xAF\x02\u03A3\u03A2\x03\x02" +
		"\x02\x02\u03A3\u03A4\x03\x02\x02\x02\u03A4\u03A5\x03\x02\x02\x02\u03A5" +
		"\u03A7\x05\u0158\xAD\x02\u03A6\u03A8\x05:\x1E\x02\u03A7\u03A6\x03\x02" +
		"\x02\x02\u03A7\u03A8\x03\x02\x02\x02\u03A8\u03AA\x03\x02\x02\x02\u03A9" +
		"\u03AB\x05L\'\x02\u03AA\u03A9\x03\x02\x02\x02\u03AA\u03AB\x03\x02\x02" +
		"\x02\u03AB\u03AC\x03\x02\x02\x02\u03AC\u03AD\x07\xBE\x02\x02\u03AD\u03AE" +
		"\x05\xA6T\x02\u03AEo\x03\x02\x02\x02\u03AF\u03B3\x07\xE0\x02\x02\u03B0" +
		"\u03B4\x07\x9A\x02\x02\u03B1\u03B2\x07\x9A\x02\x02\u03B2\u03B4\x07\u0162" +
		"\x02\x02\u03B3\u03B0\x03\x02\x02\x02\u03B3\u03B1\x03\x02\x02\x02\u03B3" +
		"\u03B4\x03\x02\x02\x02\u03B4\u03B5\x03\x02\x02\x02\u03B5\u03B7\x07\u0106" +
		"\x02\x02\u03B6\u03B8\x05\u015C\xAF\x02\u03B7\u03B6\x03\x02\x02\x02\u03B7" +
		"\u03B8\x03\x02\x02\x02\u03B8\u03B9\x03\x02\x02\x02\u03B9\u03BA\x05\u0120" +
		"\x91\x02\u03BA\u03BB\x07\xBE\x02\x02\u03BB\u03BE\x05\u0144\xA3\x02\u03BC" +
		"\u03BD\x07\u011C\x02\x02\u03BD\u03BF\t\x13\x02\x02\u03BE\u03BC\x03\x02" +
		"\x02\x02\u03BE\u03BF\x03\x02\x02\x02\u03BF\u03C1\x03\x02\x02\x02\u03C0" +
		"\u03C2\x05r:\x02\u03C1\u03C0\x03\x02\x02\x02\u03C1\u03C2\x03\x02\x02\x02" +
		"\u03C2q\x03\x02\x02\x02\u03C3\u03C4\x07\u0179\x02\x02\u03C4\u03C5\x07" +
		"D\x02\x02\u03C5\u03CB\x05t;\x02\u03C6\u03C7\x07\u0194\x02\x02\u03C7\u03C8" +
		"\x07D\x02\x02\u03C8\u03CA\x05t;\x02\u03C9\u03C6\x03\x02\x02\x02\u03CA" +
		"\u03CD\x03\x02\x02\x02\u03CB\u03C9\x03\x02\x02\x02\u03CB\u03CC\x03\x02" +
		"\x02\x02\u03CCs\x03\x02\x02\x02\u03CD\u03CB\x03\x02\x02\x02\u03CE\u03CF" +
		"\x07\u01A5\x02\x02\u03CFu\x03\x02\x02\x02\u03D0\u03D1\x07\xB9\x02\x02" +
		"\u03D1\u03D3\x07\u0165\x02\x02\u03D2\u03D4\x05\u015E\xB0\x02\u03D3\u03D2" +
		"\x03\x02\x02\x02\u03D3\u03D4\x03\x02\x02\x02\u03D4\u03D5\x03\x02\x02\x02" +
		"\u03D5\u03DB\x05\u0156\xAC\x02\u03D6\u03DC\x05z>\x02\u03D7\u03DC\x05|" +
		"?\x02\u03D8\u03DC\x05~@\x02\u03D9\u03DC\x05\x80A\x02\u03DA\u03DC\x05\x82" +
		"B\x02\u03DB\u03D6\x03\x02\x02\x02\u03DB\u03D7\x03\x02\x02\x02\u03DB\u03D8" +
		"\x03\x02\x02\x02\u03DB\u03D9\x03\x02\x02\x02\u03DB\u03DA\x03\x02\x02\x02" +
		"\u03DC\u048D\x03\x02\x02\x02\u03DD\u03DE\x07\xB9\x02\x02\u03DE\u03E0\x07" +
		"\u0165\x02\x02\u03DF\u03E1\x05\u015E\xB0\x02\u03E0\u03DF\x03\x02\x02\x02" +
		"\u03E0\u03E1\x03\x02\x02\x02\u03E1\u03E2\x03\x02\x02\x02\u03E2\u03E3\x05" +
		"\u0156\xAC\x02\u03E3\u03E4\t\x14\x02\x02\u03E4\u03E5\x07\u0190\x02\x02" +
		"\u03E5\u03E7\x054\x1B\x02\u03E6\u03E8\x05x=\x02\u03E7\u03E6\x03\x02\x02" +
		"\x02\u03E7\u03E8\x03\x02\x02\x02\u03E8\u03F0\x03\x02\x02\x02\u03E9\u03EA" +
		"\x07\u0194\x02\x02\u03EA\u03EC\x054\x1B\x02\u03EB\u03ED\x05x=\x02\u03EC" +
		"\u03EB\x03\x02\x02\x02\u03EC\u03ED\x03\x02\x02\x02\u03ED\u03EF\x03\x02" +
		"\x02\x02\u03EE\u03E9\x03\x02\x02\x02\u03EF\u03F2\x03\x02\x02\x02\u03F0" +
		"\u03EE\x03\x02\x02\x02\u03F0\u03F1\x03\x02\x02\x02\u03F1\u03F5\x03\x02" +
		"\x02\x02\u03F2\u03F0\x03\x02\x02\x02\u03F3\u03F4\x07\u0194\x02\x02\u03F4" +
		"\u03F6\x05V,\x02\u03F5\u03F3\x03\x02\x02\x02\u03F5\u03F6\x03\x02\x02\x02" +
		"\u03F6\u03F9\x03\x02\x02\x02\u03F7\u03F8\x07\u0194\x02\x02\u03F8\u03FA" +
		"\x05X-\x02\u03F9\u03F7\x03\x02\x02\x02\u03F9\u03FA\x03\x02\x02\x02\u03FA" +
		"\u03FD\x03\x02\x02\x02\u03FB\u03FC\x07\u0194\x02\x02\u03FC\u03FE\x05\\" +
		"/\x02\u03FD\u03FB\x03\x02\x02\x02\u03FD\u03FE\x03\x02\x02\x02\u03FE\u03FF" +
		"\x03\x02\x02\x02\u03FF\u0401\x07\u0191\x02\x02\u0400\u0402\x05L\'\x02" +
		"\u0401\u0400\x03\x02\x02\x02\u0401\u0402\x03\x02\x02\x02\u0402\u0404\x03" +
		"\x02\x02\x02\u0403\u0405\x05^0\x02\u0404\u0403\x03\x02\x02\x02\u0404\u0405" +
		"\x03\x02\x02\x02\u0405\u0406\x03\x02\x02\x02\u0406\u0407\x05\u015A\xAE" +
		"\x02\u0407\u048D\x03\x02\x02\x02\u0408\u0409\x07\xB9\x02\x02\u0409\u040B" +
		"\x07\u0165\x02\x02\u040A\u040C\x05\u015E\xB0\x02\u040B\u040A\x03\x02\x02" +
		"\x02\u040B\u040C\x03\x02\x02\x02\u040C\u040D\x03\x02\x02\x02\u040D\u040E" +
		"\x05\u0156\xAC\x02\u040E\u040F\t\x14\x02\x02\u040F\u0411\x054\x1B\x02" +
		"\u0410\u0412\x05x=\x02\u0411\u0410\x03\x02\x02\x02\u0411\u0412\x03\x02" +
		"\x02\x02\u0412\u0414\x03\x02\x02\x02\u0413\u0415\x05L\'\x02\u0414\u0413" +
		"\x03\x02\x02\x02\u0414\u0415\x03\x02\x02\x02\u0415\u048D\x03\x02\x02\x02" +
		"\u0416\u0417\x07\xB9\x02\x02\u0417\u0419\x07\u0165\x02\x02\u0418\u041A" +
		"\x05\u015E\xB0\x02\u0419\u0418\x03\x02\x02\x02\u0419\u041A\x03\x02\x02" +
		"\x02\u041A\u041B\x03\x02\x02\x02\u041B\u041C\x05\u0156\xAC\x02\u041C\u0424" +
		"\x07\x07\x02\x02\u041D\u041E\x07\u0142\x02\x02\u041E\u041F\x05\u0160\xB1" +
		"\x02\u041F\u0420\x07\u0181\x02\x02\u0420\u0421\x05\u0160\xB1\x02\u0421" +
		"\u0423\x03\x02\x02\x02\u0422\u041D\x03\x02\x02\x02\u0423\u0426\x03\x02" +
		"\x02\x02\u0424\u0422\x03\x02\x02\x02\u0424\u0425\x03\x02\x02\x02\u0425" +
		"\u048D\x03\x02\x02\x02\u0426\u0424\x03\x02\x02\x02\u0427\u0428\x07\xB9" +
		"\x02\x02\u0428\u042A\x07\u0165\x02\x02\u0429\u042B\x05\u015E\xB0\x02\u042A" +
		"\u0429\x03\x02\x02\x02\u042A\u042B\x03\x02\x02\x02\u042B\u042C\x03\x02" +
		"\x02\x02\u042C\u042D\x05\u0156\xAC\x02\u042D\u042E\x07\xF4\x02\x02\u042E" +
		"\u042F\x05\u0158\xAD\x02\u042F\u048D\x03\x02\x02\x02\u0430\u0431\x07\xB9" +
		"\x02\x02\u0431\u0433\x07\u0165\x02\x02\u0432\u0434\x05\u015E\xB0\x02\u0433" +
		"\u0432\x03\x02\x02\x02\u0433\u0434\x03\x02\x02\x02\u0434\u0435\x03\x02" +
		"\x02\x02\u0435\u0436\x05\u0156\xAC\x02\u0436\u0437\x07\xF4\x02\x02\u0437" +
		"\u0438\x07\u0190\x02\x02\u0438\u043D\x05\u0158\xAD\x02\u0439\u043A\x07" +
		"\u0194\x02\x02\u043A\u043C\x05\u0158\xAD\x02\u043B\u0439\x03\x02\x02\x02" +
		"\u043C\u043F\x03\x02\x02\x02\u043D\u043B\x03\x02\x02\x02\u043D\u043E\x03" +
		"\x02\x02\x02\u043E\u0440\x03\x02\x02\x02\u043F\u043D\x03\x02\x02\x02\u0440" +
		"\u0441\x07\u0191\x02\x02\u0441\u048D\x03\x02\x02\x02\u0442\u0443\x07\xB9" +
		"\x02\x02\u0443\u0445\x07\u0165\x02\x02\u0444\u0446\x05\u015E\xB0\x02\u0445" +
		"\u0444\x03\x02\x02\x02\u0445\u0446\x03\x02\x02\x02\u0446\u0447\x03\x02" +
		"\x02\x02\u0447\u0448\x05\u0156\xAC\x02\u0448\u0449\x07\xF4\x02\x02\u0449" +
		"\u044A\x07\u014A\x02\x02\u044A\u044B\x07I\x02\x02\u044B\u048D\x03\x02" +
		"\x02\x02\u044C\u044D\x07\xB9\x02\x02\u044D\u044F\x07\u0165\x02\x02\u044E" +
		"\u0450\x05\u015E\xB0\x02\u044F\u044E\x03\x02\x02\x02\u044F\u0450\x03\x02" +
		"\x02\x02\u0450\u0451\x03\x02\x02\x02\u0451\u0452\x05\u0156\xAC\x02\u0452" +
		"\u0453\x07\xF4\x02\x02\u0453\u0454\x07\u0142\x02\x02\u0454\u045A\x05\u0160" +
		"\xB1\x02\u0455\u0456\x07\u0194\x02\x02\u0456\u0457\x07\u0142\x02\x02\u0457" +
		"\u0459\x05\u0160\xB1\x02\u0458\u0455\x03\x02\x02\x02\u0459\u045C\x03\x02" +
		"\x02\x02\u045A\u0458\x03\x02\x02\x02\u045A\u045B\x03\x02\x02\x02\u045B" +
		"\u048D\x03\x02\x02\x02\u045C\u045A\x03\x02\x02\x02\u045D\u045E\x07\xB9" +
		"\x02\x02\u045E\u0460\x07\u0165\x02\x02\u045F\u0461\x05\u015E\xB0\x02\u0460" +
		"\u045F\x03\x02\x02\x02\u0460\u0461\x03\x02\x02\x02\u0461\u0462\x03\x02" +
		"\x02\x02\u0462\u0463\x05\u0156\xAC\x02\u0463\u0464\x07\xF4\x02\x02\u0464" +
		"\u0465\x07\xAE\x02\x02\u0465\u048D\x03\x02\x02\x02\u0466\u0467\x07\xB9" +
		"\x02\x02\u0467\u0469\x07\u0165\x02\x02\u0468\u046A\x05\u015E\xB0\x02\u0469" +
		"\u0468\x03\x02\x02\x02\u0469\u046A\x03\x02\x02\x02\u046A\u046B\x03\x02" +
		"\x02\x02\u046B\u046C\x05\u0156\xAC\x02\u046C\u046D\x07{\x02\x02\u046D" +
		"\u046E\x05\u0158\xAD\x02\u046E\u046F\x07\u016E\x02\x02\u046F\u0470\x05" +
		"\u0158\xAD\x02\u0470\u048D\x03\x02\x02\x02\u0471\u0472\x07\xB9\x02\x02" +
		"\u0472\u0474\x07\u0165\x02\x02\u0473\u0475\x05\u015E\xB0\x02\u0474\u0473" +
		"\x03\x02\x02\x02\u0474\u0475\x03\x02\x02\x02\u0475\u0476\x03\x02\x02\x02" +
		"\u0476\u0477\x05\u0156\xAC\x02\u0477\u0478\x07{\x02\x02\u0478\u0479\x05" +
		"\u0156\xAC\x02\u0479\u048D\x03\x02\x02\x02\u047A\u047B\x07\xB9\x02\x02" +
		"\u047B\u047D\x07\u0165\x02\x02\u047C\u047E\x05\u015E\xB0\x02\u047D\u047C" +
		"\x03\x02\x02\x02\u047D\u047E\x03\x02\x02\x02\u047E\u047F\x03\x02\x02\x02" +
		"\u047F\u0480\x05\u0156\xAC\x02\u0480\u0481\x07\u0158\x02\x02\u0481\u0482" +
		"\x05^0\x02\u0482\u048D\x03\x02\x02\x02\u0483\u0484\x07\xB9\x02\x02\u0484" +
		"\u0486\x07\u0165\x02\x02\u0485\u0487\x05\u015E\xB0\x02\u0486\u0485\x03" +
		"\x02\x02\x02\u0486\u0487\x03\x02\x02\x02\u0487\u0488\x03\x02\x02\x02\u0488" +
		"\u0489\x05\u0156\xAC\x02\u0489\u048A\x07\u014E\x02\x02\u048A\u048B\x05" +
		"`1\x02\u048B\u048D\x03\x02\x02\x02\u048C\u03D0\x03\x02\x02\x02\u048C\u03DD" +
		"\x03\x02\x02\x02\u048C\u0408\x03\x02\x02\x02\u048C\u0416\x03\x02\x02\x02" +
		"\u048C\u0427\x03\x02\x02\x02\u048C\u0430\x03\x02\x02\x02\u048C\u0442\x03" +
		"\x02\x02\x02\u048C\u044C\x03\x02\x02\x02\u048C\u045D\x03\x02\x02\x02\u048C" +
		"\u0466\x03\x02\x02\x02\u048C\u0471\x03\x02\x02\x02\u048C\u047A\x03\x02" +
		"\x02\x02\u048C\u0483\x03\x02\x02\x02\u048Dw\x03\x02\x02\x02\u048E\u0492" +
		"\t\x15\x02\x02\u048F\u0490\t\x16\x02\x02\u0490\u0492\x05\u0158\xAD\x02" +
		"\u0491\u048E\x03\x02\x02\x02\u0491\u048F\x03\x02\x02\x02\u0492y\x03\x02" +
		"\x02\x02\u0493\u0495\x07{\x02\x02\u0494\u0496\x05\u0158\xAD\x02\u0495" +
		"\u0494\x03\x02\x02\x02\u0495\u0496\x03\x02\x02\x02\u0496\u0497\x03\x02" +
		"\x02\x02\u0497\u0498\x07\u016E\x02\x02\u0498\u0499\x05\u0158\xAD\x02\u0499" +
		"{\x03\x02\x02\x02\u049A\u049B\x07\u0158\x02\x02\u049B\u049C\x05\u0160" +
		"\xB1\x02\u049C}\x03\x02\x02\x02\u049D\u049E\x07\x07\x02\x02\u049E\u049F" +
		"\x07\xDC\x02\x02\u049F\u04A0\x05Z.\x02\u04A0\u04A1\x07\u014A\x02\x02\u04A1" +
		"\u04A2\x07I\x02\x02\u04A2\u04A4\x05:\x1E\x02\u04A3\u04A5\x05\x84C\x02" +
		"\u04A4\u04A3\x03\x02\x02\x02\u04A4\u04A5\x03\x02\x02\x02\u04A5\x7F\x03" +
		"\x02\x02\x02\u04A6\u04A7\x07\xF4\x02\x02\u04A7\u04A8\x07\xDC\x02\x02\u04A8" +
		"\u04A9\x05Z.\x02\u04A9\x81\x03\x02\x02\x02\u04AA\u04AB\x07\x07\x02\x02" +
		"\u04AB\u04AC\x07\u0173\x02\x02\u04AC\u04AD\x05:\x1E\x02\u04AD\x83\x03" +
		"\x02\x02\x02\u04AE\u04AF\x07\u0134\x02\x02\u04AF\u04B0\x07%\x02\x02\u04B0" +
		"\x85\x03\x02\x02\x02\u04B1\u04B2\x07\xB9\x02\x02\u04B2\u04B3\x07\xAB\x02" +
		"\x02\u04B3\u04B7\x05\u0158\xAD\x02\u04B4\u04B8\x05z>\x02\u04B5\u04B6\x07" +
		"\xBE\x02\x02\u04B6\u04B8\x05\xA6T\x02\u04B7\u04B4\x03\x02\x02\x02\u04B7" +
		"\u04B5\x03\x02\x02\x02\u04B8\x87\x03\x02\x02\x02\u04B9\u04BA\x07\xB9\x02" +
		"\x02\u04BA\u04BB\x07\x1C\x02\x02\u04BB\u04BC\x05\u0150\xA9\x02\u04BC\u04BD" +
		"\x05|?\x02\u04BD\x89\x03\x02\x02\x02\u04BE\u04C2\x07\xB9\x02\x02\u04BF" +
		"\u04C3\x07\x9A\x02\x02\u04C0\u04C1\x07\x9A\x02\x02\u04C1\u04C3\x07\u0162" +
		"\x02\x02\u04C2\u04BF\x03\x02\x02\x02\u04C2\u04C0\x03\x02\x02\x02\u04C2" +
		"\u04C3\x03\x02\x02\x02\u04C3\u04C4\x03\x02\x02\x02\u04C4\u04C6\x07\u0106" +
		"\x02\x02\u04C5\u04C7\x05\u015E\xB0\x02\u04C6\u04C5\x03\x02\x02\x02\u04C6" +
		"\u04C7\x03\x02\x02\x02\u04C7\u04C8\x03\x02\x02\x02\u04C8\u04C9\x05\u0158" +
		"\xAD\x02\u04C9\u04CA\x07\xBE\x02\x02\u04CA\u04CD\x05\u0144\xA3\x02\u04CB" +
		"\u04CC\x07\u011C\x02\x02\u04CC\u04CE\t\x13\x02\x02\u04CD\u04CB\x03\x02" +
		"\x02\x02\u04CD\u04CE\x03\x02\x02\x02\u04CE\x8B\x03\x02\x02\x02\u04CF\u04D0" +
		"\x07\xF4\x02\x02\u04D0\u04D2\x07\x0F\x02\x02\u04D1\u04D3\x05\u015E\xB0" +
		"\x02\u04D2\u04D1\x03\x02\x02\x02\u04D2\u04D3\x03\x02\x02\x02\u04D3\u04D4" +
		"\x03\x02\x02\x02\u04D4\u04D5\x05\u014E\xA8\x02\u04D5\x8D\x03\x02\x02\x02" +
		"\u04D6\u04D8\x07\xF4\x02\x02\u04D7\u04D9\x07\x9A\x02\x02\u04D8\u04D7\x03" +
		"\x02\x02\x02\u04D8\u04D9\x03\x02\x02\x02\u04D9\u04DA\x03\x02\x02\x02\u04DA" +
		"\u04DC\x07\u0165\x02\x02\u04DB\u04DD\x05\u015E\xB0\x02\u04DC\u04DB\x03" +
		"\x02\x02\x02\u04DC\u04DD\x03\x02\x02\x02\u04DD\u04DE\x03\x02\x02\x02\u04DE" +
		"\u04DF\x05\u0156\xAC\x02\u04DF\x8F\x03\x02\x02\x02\u04E0\u04E1\x07\xF4" +
		"\x02\x02\u04E1\u04E3\x07\x1C\x02\x02\u04E2\u04E4\x05\u015E\xB0\x02\u04E3" +
		"\u04E2\x03\x02\x02\x02\u04E3\u04E4\x03\x02\x02\x02\u04E4\u04E5\x03\x02" +
		"\x02\x02\u04E5\u04E7\x05\u0150\xA9\x02\u04E6\u04E8\t\x17\x02\x02\u04E7" +
		"\u04E6\x03\x02\x02\x02\u04E7\u04E8\x03\x02\x02\x02\u04E8\x91\x03\x02\x02" +
		"\x02\u04E9\u04EB\x07\xF4\x02\x02\u04EA\u04EC\x07\x9A\x02\x02\u04EB\u04EA" +
		"\x03\x02\x02\x02\u04EB\u04EC\x03\x02\x02\x02\u04EC\u04ED\x03\x02\x02\x02" +
		"\u04ED\u04EF\x07\xAB\x02\x02\u04EE\u04F0\x05\u015E\xB0\x02\u04EF\u04EE" +
		"\x03\x02\x02\x02\u04EF\u04F0\x03\x02\x02\x02\u04F0\u04F1\x03\x02\x02\x02" +
		"\u04F1\u04F2\x05\u0158\xAD\x02\u04F2\x93\x03\x02\x02\x02\u04F3\u04F7\x07" +
		"\xF4\x02\x02\u04F4\u04F8\x07\x9A\x02\x02\u04F5\u04F6\x07\x9A\x02\x02\u04F6" +
		"\u04F8\x07\u0162\x02\x02\u04F7\u04F4\x03\x02\x02\x02\u04F7\u04F5\x03\x02" +
		"\x02\x02\u04F7\u04F8\x03\x02\x02\x02\u04F8\u04F9\x03\x02\x02\x02\u04F9" +
		"\u04FB\x07\u0106\x02\x02\u04FA\u04FC\x05\u015E\xB0\x02\u04FB\u04FA\x03" +
		"\x02\x02\x02\u04FB\u04FC\x03\x02\x02\x02\u04FC\u04FD\x03\x02\x02\x02\u04FD" +
		"\u04FE\x05\u0120\x91\x02\u04FE\x95\x03\x02\x02\x02\u04FF\u0500\x07\u0171" +
		"\x02\x02\u0500\u0501\x07\u0165\x02\x02\u0501\u0502\x05\u0154\xAB\x02\u0502" +
		"\x97\x03\x02\x02\x02\u0503\u0505\x07\xFB\x02\x02\u0504\u0503\x03\x02\x02" +
		"\x02\u0504\u0505\x03\x02\x02\x02\u0505\u0506\x03\x02\x02\x02\u0506\u050B" +
		"\x05\x9AN\x02\u0507\u050B\x05\xA2R\x02\u0508\u0509\x07\xFB\x02\x02\u0509" +
		"\u050B\x05\xA4S\x02\u050A\u0504\x03\x02\x02\x02\u050A\u0507\x03\x02\x02" +
		"\x02\u050A\u0508\x03\x02\x02\x02\u050B\x99\x03\x02\x02\x02\u050C\u050D" +
		"\x07\u0113\x02\x02\u050D\u050E\t\x18\x02\x02\u050E\u0517\x05\u0156\xAC" +
		"\x02\u050F\u0511\x05\x9CO\x02\u0510\u050F\x03\x02\x02\x02\u0510\u0511" +
		"\x03\x02\x02\x02\u0511\u0513\x03\x02\x02\x02\u0512\u0514\x05:\x1E\x02" +
		"\u0513\u0512\x03\x02\x02\x02\u0513\u0514\x03\x02\x02\x02\u0514\u0515\x03" +
		"\x02\x02\x02\u0515\u0518\x05\xA6T\x02\u0516\u0518\x05\x9EP\x02\u0517\u0510" +
		"\x03\x02\x02\x02\u0517\u0516\x03\x02\x02\x02\u0518\x9B\x03\x02\x02\x02" +
		"\u0519\u051A\x07\u0142\x02\x02\u051A\u051B\x05\u0160\xB1\x02\u051B\x9D" +
		"\x03\x02\x02\x02\u051C\u051D\x07\u017B\x02\x02\u051D\u0522\x05\xA0Q\x02" +
		"\u051E\u051F\x07\u0194\x02\x02\u051F\u0521\x05\xA0Q\x02\u0520\u051E\x03" +
		"\x02\x02\x02\u0521\u0524\x03\x02\x02\x02\u0522\u0520\x03\x02\x02\x02\u0522" +
		"\u0523\x03\x02\x02\x02\u0523\x9F\x03\x02\x02\x02\u0524\u0522\x03\x02\x02" +
		"\x02\u0525\u0526\x07\u0190\x02\x02\u0526\u052B\x05\u0172\xBA\x02\u0527" +
		"\u0528\x07\u0194\x02\x02\u0528\u052A\x05\u0172\xBA\x02\u0529\u0527\x03" +
		"\x02\x02\x02\u052A\u052D\x03\x02\x02\x02\u052B\u0529\x03\x02\x02\x02\u052B" +
		"\u052C\x03\x02\x02\x02\u052C\u052E\x03\x02\x02\x02\u052D\u052B\x03\x02" +
		"\x02\x02\u052E\u052F\x07\u0191\x02\x02\u052F\xA1\x03\x02\x02\x02\u0530" +
		"\u0531\x07\xC2\x02\x02\u0531\u0532\x07\x94\x02\x02\u0532\u0533\x07\u0158" +
		"\x02\x02\u0533\u0537\x07\u0195\x02\x02\u0534\u0535\x05\x9AN\x02\u0535" +
		"\u0536\x07\u0195\x02\x02\u0536\u0538\x03\x02\x02\x02\u0537\u0534\x03\x02" +
		"\x02\x02\u0538\u0539\x03\x02\x02\x02\u0539\u0537\x03\x02\x02\x02\u0539" +
		"\u053A\x03\x02\x02\x02\u053A\u053B\x03\x02\x02\x02\u053B\u053C\x07\xF7" +
		"\x02\x02\u053C\xA3\x03\x02\x02\x02\u053D\u053E\x07\x94\x02\x02\u053E\u053F" +
		"\x07\u0158\x02\x02\u053F\u0543\x07\xC2\x02\x02\u0540\u0541\x05\x9AN\x02" +
		"\u0541\u0542\x07\u0195\x02\x02\u0542\u0544\x03\x02\x02\x02\u0543\u0540" +
		"\x03\x02\x02\x02\u0544\u0545\x03\x02\x02\x02\u0545\u0543\x03\x02\x02\x02" +
		"\u0545\u0546\x03\x02\x02\x02\u0546\u0547\x03\x02\x02\x02\u0547\u0548\x07" +
		"\xF7\x02\x02\u0548\xA5\x03\x02\x02\x02\u0549\u054A\bT\x01\x02\u054A\u0561" +
		"\x05\xA8U\x02\u054B\u054C\x05\xAAV\x02\u054C\u054D\x05\xA6T\x07\u054D" +
		"\u0561\x03\x02\x02\x02\u054E\u054F\x07\u0190\x02\x02\u054F\u0550\x05\xA6" +
		"T\x02\u0550\u0551\x07\u0191\x02\x02\u0551\u0561\x03\x02\x02\x02\u0552" +
		"\u0554\x05\xB2Z\x02\u0553\u0555\x05\xEEx\x02\u0554\u0553\x03\x02\x02\x02" +
		"\u0554\u0555\x03\x02\x02\x02\u0555\u0557\x03\x02\x02\x02\u0556\u0558\x05" +
		"\xF2z\x02\u0557\u0556\x03\x02\x02\x02\u0557\u0558\x03\x02\x02\x02\u0558" +
		"\u0561\x03\x02\x02\x02\u0559\u055B\x05\xB0Y\x02\u055A\u055C\x05\xEEx\x02" +
		"\u055B\u055A\x03\x02\x02\x02\u055B\u055C\x03\x02\x02\x02\u055C\u055E\x03" +
		"\x02\x02\x02\u055D\u055F\x05\xF2z\x02\u055E\u055D\x03\x02\x02\x02\u055E" +
		"\u055F\x03\x02\x02\x02\u055F\u0561\x03\x02\x02\x02\u0560\u0549\x03\x02" +
		"\x02\x02\u0560\u054B\x03\x02\x02\x02\u0560\u054E\x03\x02\x02\x02\u0560" +
		"\u0552\x03\x02\x02\x02\u0560\u0559\x03\x02\x02\x02\u0561\u0570\x03\x02" +
		"\x02\x02\u0562\u0563\f\x05\x02\x02\u0563\u0565\t\x19\x02\x02\u0564\u0566" +
		"\x07\xB7\x02\x02\u0565\u0564\x03\x02\x02\x02\u0565\u0566\x03\x02\x02\x02" +
		"\u0566\u0567\x03\x02\x02\x02\u0567\u0569\x05\xA6T\x02\u0568\u056A\x05" +
		"\xEEx\x02\u0569\u0568\x03\x02\x02\x02\u0569\u056A\x03\x02\x02\x02\u056A" +
		"\u056C\x03\x02\x02\x02\u056B\u056D\x05\xF2z\x02\u056C\u056B\x03\x02\x02" +
		"\x02\u056C\u056D\x03\x02\x02\x02\u056D\u056F\x03\x02\x02\x02\u056E\u0562" +
		"\x03\x02\x02\x02\u056F\u0572\x03\x02\x02\x02\u0570\u056E\x03\x02\x02\x02" +
		"\u0570\u0571\x03\x02\x02\x02\u0571\xA7\x03\x02\x02\x02\u0572\u0570\x03" +
		"\x02\x02\x02\u0573\u0574\x07\u017B\x02\x02\u0574\u0579\x05\u010A\x86\x02" +
		"\u0575\u0576\x07\u0194\x02\x02\u0576\u0578\x05\u010A\x86\x02\u0577\u0575" +
		"\x03\x02\x02\x02\u0578\u057B\x03\x02\x02\x02\u0579\u0577\x03\x02\x02\x02" +
		"\u0579\u057A\x03\x02\x02\x02\u057A\xA9\x03\x02\x02\x02\u057B\u0579\x03" +
		"\x02\x02\x02\u057C\u057D\x07\u0181\x02\x02\u057D\u0582\x05\xACW\x02\u057E" +
		"\u057F\x07\u0194\x02\x02\u057F\u0581\x05\xACW\x02\u0580\u057E\x03\x02" +
		"\x02\x02\u0581\u0584\x03\x02\x02\x02\u0582\u0580\x03\x02\x02\x02\u0582" +
		"\u0583\x03\x02\x02\x02\u0583\xAB\x03\x02\x02\x02\u0584\u0582\x03\x02\x02" +
		"\x02\u0585\u0591\x05\xAEX\x02\u0586\u0587\x07\u0190\x02\x02\u0587\u058C" +
		"\x058\x1D\x02\u0588\u0589\x07\u0194\x02\x02\u0589\u058B\x058\x1D\x02\u058A" +
		"\u0588\x03\x02\x02\x02\u058B\u058E\x03\x02\x02\x02\u058C\u058A\x03\x02" +
		"\x02\x02\u058C\u058D\x03\x02\x02\x02\u058D\u058F\x03\x02\x02\x02\u058E" +
		"\u058C\x03\x02\x02\x02\u058F\u0590\x07\u0191\x02\x02";
	private static readonly _serializedATNSegment3: string =
		"\u0590\u0592\x03\x02\x02\x02\u0591\u0586\x03\x02\x02\x02\u0591\u0592\x03" +
		"\x02\x02\x02\u0592\u0593\x03\x02\x02\x02\u0593\u0594\x07\xBE\x02\x02\u0594" +
		"\u0595\x07\u0190\x02\x02\u0595\u0596\x05\xA6T\x02\u0596\u0597\x07\u0191" +
		"\x02\x02\u0597\xAD\x03\x02\x02\x02\u0598\u0599\x05\u0144\xA3\x02\u0599" +
		"\xAF\x03\x02\x02\x02\u059A\u059B\x05\xB2Z\x02\u059B\u059D\x05\xB8]\x02" +
		"\u059C\u059E\x05\xD4k\x02\u059D\u059C\x03\x02\x02\x02\u059D\u059E\x03" +
		"\x02\x02\x02\u059E\u05A0\x03\x02\x02\x02\u059F\u05A1\x05\xD6l\x02\u05A0" +
		"\u059F\x03\x02\x02\x02\u05A0\u05A1\x03\x02\x02\x02\u05A1\u05A3\x03\x02" +
		"\x02\x02\u05A2\u05A4\x05\xE4s\x02\u05A3\u05A2\x03\x02\x02\x02\u05A3\u05A4" +
		"\x03\x02\x02\x02\u05A4\u05A6\x03\x02\x02\x02\u05A5\u05A7\x05\xE6t\x02" +
		"\u05A6\u05A5\x03\x02\x02\x02\u05A6\u05A7\x03\x02\x02\x02\u05A7\u05AD\x03" +
		"\x02\x02\x02\u05A8\u05A9\x05\xB2Z\x02\u05A9\u05AA\x05\xB8]\x02\u05AA\u05AB" +
		"\x05\xECw\x02\u05AB\u05AD\x03\x02\x02\x02\u05AC\u059A\x03\x02\x02\x02" +
		"\u05AC\u05A8\x03\x02\x02\x02\u05AD\xB1\x03\x02\x02\x02\u05AE\u05B0\x07" +
		"\u0157\x02\x02\u05AF\u05B1\x05\u017C\xBF\x02\u05B0\u05AF\x03\x02\x02\x02" +
		"\u05B0\u05B1\x03\x02\x02\x02\u05B1\u05BB\x03\x02\x02\x02\u05B2\u05BC\x07" +
		"\u019B\x02\x02\u05B3\u05B8\x05\xB4[\x02\u05B4\u05B5\x07\u0194\x02\x02" +
		"\u05B5\u05B7\x05\xB4[\x02\u05B6\u05B4\x03\x02\x02\x02\u05B7\u05BA\x03" +
		"\x02\x02\x02\u05B8\u05B6\x03\x02\x02\x02\u05B8\u05B9\x03\x02\x02\x02\u05B9" +
		"\u05BC\x03\x02\x02\x02\u05BA\u05B8\x03\x02\x02\x02\u05BB\u05B2\x03\x02" +
		"\x02\x02\u05BB\u05B3\x03\x02\x02\x02\u05BC\xB3\x03\x02\x02\x02\u05BD\u05C6" +
		"\x05\xB6\\\x02\u05BE\u05C3\x05\u010A\x86\x02\u05BF\u05C1\x07\xBE\x02\x02" +
		"\u05C0\u05BF\x03\x02\x02\x02\u05C0\u05C1\x03\x02\x02\x02\u05C1\u05C2\x03" +
		"\x02\x02\x02\u05C2\u05C4\x05\u010A\x86\x02\u05C3\u05C0\x03\x02\x02\x02" +
		"\u05C3\u05C4\x03\x02\x02\x02\u05C4\u05C6\x03\x02\x02\x02\u05C5\u05BD\x03" +
		"\x02\x02\x02\u05C5\u05BE\x03\x02\x02\x02\u05C6\xB5\x03\x02\x02\x02\u05C7" +
		"\u05C8\x05\u0114\x8B\x02\u05C8\u05C9\x07\u0140\x02\x02\u05C9\u05CB\x05" +
		"\xEAv\x02\u05CA\u05CC\x07\xBE\x02\x02\u05CB\u05CA\x03\x02\x02\x02\u05CB" +
		"\u05CC\x03\x02\x02\x02\u05CC\u05CD\x03\x02\x02\x02\u05CD\u05CE\x05\u0144" +
		"\xA3\x02\u05CE\u05D8\x03\x02\x02\x02\u05CF\u05D0\x05\u0114\x8B\x02\u05D0" +
		"\u05D1\x07\u0140\x02\x02\u05D1\u05D3\x05\u013C\x9F\x02\u05D2\u05D4\x07" +
		"\xBE\x02\x02\u05D3\u05D2\x03\x02\x02\x02\u05D3\u05D4\x03\x02\x02\x02\u05D4" +
		"\u05D5\x03\x02\x02\x02\u05D5\u05D6\x05\u0144\xA3\x02\u05D6\u05D8\x03\x02" +
		"\x02\x02\u05D7\u05C7\x03\x02\x02\x02\u05D7\u05CF\x03\x02\x02\x02\u05D8" +
		"\xB7\x03\x02\x02\x02\u05D9\u05DA\x07\u0104\x02\x02\u05DA\u05DB\x05\xBA" +
		"^\x02\u05DB\xB9\x03\x02\x02\x02\u05DC\u05DD\b^\x01\x02\u05DD\u05E2\x05" +
		"\xBC_\x02\u05DE\u05DF\x07\u0194\x02\x02\u05DF\u05E1\x05\xBC_\x02\u05E0" +
		"\u05DE\x03\x02\x02\x02\u05E1\u05E4\x03\x02\x02\x02\u05E2\u05E0\x03\x02" +
		"\x02\x02\u05E2\u05E3\x03\x02\x02\x02\u05E3\u05E8\x03\x02\x02\x02\u05E4" +
		"\u05E2\x03\x02\x02\x02\u05E5\u05E8\x05\xC4c\x02\u05E6\u05E8\x05\xC6d\x02" +
		"\u05E7\u05DC\x03\x02\x02\x02\u05E7\u05E5\x03\x02\x02\x02\u05E7\u05E6\x03" +
		"\x02\x02\x02\u05E8\u0614\x03\x02\x02\x02\u05E9\u05EA\f\x05\x02\x02\u05EA" +
		"\u05EB\x07\xE1\x02\x02\u05EB\u05EC\x07\u011A\x02\x02\u05EC\u0613\x05\xBA" +
		"^\x06\u05ED\u05EF\f\x07\x02\x02\u05EE\u05F0\x07\u0130\x02\x02\u05EF\u05EE" +
		"\x03\x02\x02\x02\u05EF\u05F0\x03\x02\x02\x02\u05F0\u05F2\x03\x02\x02\x02" +
		"\u05F1\u05F3\t\x1A\x02\x02\u05F2\u05F1\x03\x02\x02\x02\u05F2\u05F3\x03" +
		"\x02\x02\x02\u05F3\u05F5\x03\x02\x02\x02\u05F4\u05F6\x07\u013F\x02\x02" +
		"\u05F5\u05F4\x03\x02\x02\x02\u05F5\u05F6\x03\x02\x02\x02\u05F6\u05F7\x03" +
		"\x02\x02\x02\u05F7\u05F8\x07\u011A\x02\x02\u05F8\u05FA\x05\xBA^\x02\u05F9" +
		"\u05FB\x05\xD2j\x02\u05FA\u05F9\x03\x02\x02\x02\u05FA\u05FB\x03\x02\x02" +
		"\x02\u05FB\u0613\x03\x02\x02\x02\u05FC\u05FE\f\x06\x02\x02\u05FD\u05FF" +
		"\x07\u0130\x02\x02\u05FE\u05FD\x03\x02\x02\x02\u05FE\u05FF\x03\x02\x02" +
		"\x02\u05FF\u0601\x03\x02\x02\x02\u0600\u0602\t\x1A\x02\x02\u0601\u0600" +
		"\x03\x02\x02\x02\u0601\u0602\x03\x02\x02\x02\u0602\u0604\x03\x02\x02\x02" +
		"\u0603\u0605\x07\u013F\x02\x02\u0604\u0603\x03\x02\x02\x02\u0604\u0605" +
		"\x03\x02\x02\x02\u0605\u0606\x03\x02\x02\x02\u0606\u0607\x07\u011A\x02" +
		"\x02\u0607\u0609\x05\xBA^\x02\u0608\u060A\x05\xD2j\x02\u0609\u0608\x03" +
		"\x02\x02\x02\u0609\u060A\x03\x02\x02\x02\u060A\u060F\x03\x02\x02\x02\u060B" +
		"\u060C\x07\u0194\x02\x02\u060C\u060E\x05\xBC_\x02\u060D\u060B\x03\x02" +
		"\x02\x02\u060E\u0611\x03\x02\x02\x02\u060F\u060D\x03\x02\x02\x02\u060F" +
		"\u0610\x03\x02\x02\x02\u0610\u0613\x03\x02\x02\x02\u0611\u060F\x03\x02" +
		"\x02\x02\u0612\u05E9\x03\x02\x02\x02\u0612\u05ED\x03\x02\x02\x02\u0612" +
		"\u05FC\x03\x02\x02\x02\u0613\u0616\x03\x02\x02\x02\u0614\u0612\x03\x02" +
		"\x02\x02\u0614\u0615\x03\x02\x02\x02\u0615\xBB\x03\x02\x02\x02\u0616\u0614" +
		"\x03\x02\x02\x02\u0617\u0619\x05\xBE`\x02\u0618\u061A\x05\u013A\x9E\x02" +
		"\u0619\u0618\x03\x02\x02\x02\u0619\u061A\x03\x02\x02\x02\u061A\xBD\x03" +
		"\x02\x02\x02\u061B\u061D\x07\u0165\x02\x02\u061C\u061B\x03\x02\x02\x02" +
		"\u061C\u061D\x03\x02\x02\x02\u061D\u061E\x03\x02\x02\x02\u061E\u0620\x05" +
		"\u0156\xAC\x02\u061F\u0621\x05\xC0a\x02\u0620\u061F\x03\x02\x02\x02\u0620" +
		"\u0621\x03\x02\x02\x02\u0621\u0626\x03\x02\x02\x02\u0622\u0624\x07\xBE" +
		"\x02\x02\u0623\u0622\x03\x02\x02\x02\u0623\u0624\x03\x02\x02\x02\u0624" +
		"\u0625\x03\x02\x02\x02\u0625\u0627\x05\u0128\x95\x02\u0626\u0623\x03\x02" +
		"\x02\x02\u0626\u0627\x03\x02\x02\x02\u0627\u0661\x03\x02\x02\x02\u0628" +
		"\u0629\x07\u011D\x02\x02\u0629\u062A\x07\u0165\x02\x02\u062A\u062B\x07" +
		"\u0190\x02\x02\u062B\u062C\x05\u0120\x91\x02\u062C\u062D\x07\u0190\x02" +
		"\x02\u062D\u0632\x05\u0122\x92\x02\u062E\u062F\x07\u0194\x02\x02\u062F" +
		"\u0631\x05\u0122\x92\x02\u0630\u062E\x03\x02\x02\x02\u0631\u0634\x03\x02" +
		"\x02\x02\u0632\u0630\x03\x02\x02\x02\u0632\u0633\x03\x02\x02\x02\u0633" +
		"\u0635\x03\x02\x02\x02\u0634\u0632\x03\x02\x02\x02\u0635\u0636\x07\u0191" +
		"\x02\x02\u0636\u0637\x07\u0191\x02\x02\u0637\u0661\x03\x02\x02\x02\u0638" +
		"\u063A\x07\u011D\x02\x02\u0639\u0638\x03\x02\x02\x02\u0639\u063A\x03\x02" +
		"\x02\x02\u063A\u063B\x03\x02\x02\x02\u063B\u063C\x07\u0190\x02\x02\u063C" +
		"\u063D\x05\xA6T\x02\u063D\u063E\x07\u0191\x02\x02\u063E\u0661\x03\x02" +
		"\x02\x02\u063F\u0640\x07\u011D\x02\x02\u0640\u0641\x07\u0165\x02\x02\u0641" +
		"\u0642\x07\u0190\x02\x02\u0642\u0643\x05\u0120\x91\x02\u0643\u0644\x07" +
		"\u0190\x02\x02\u0644\u0649\x05\u0122\x92\x02\u0645\u0646\x07\u0194\x02" +
		"\x02\u0646\u0648\x05\u0122\x92\x02\u0647\u0645\x03\x02\x02\x02\u0648\u064B" +
		"\x03\x02\x02\x02\u0649\u0647\x03\x02\x02\x02\u0649\u064A\x03\x02\x02\x02" +
		"\u064A\u064C\x03\x02\x02\x02\u064B\u0649\x03\x02\x02\x02\u064C\u064D\x07" +
		"\u0191\x02\x02\u064D\u064E\x07\u0191\x02\x02\u064E\u064F\x07\xBE\x02\x02" +
		"\u064F\u0650\x05\u013A\x9E\x02\u0650\u0651\x07\u0190\x02\x02\u0651\u0656" +
		"\x05\xB4[\x02\u0652\u0653\x07\u0194\x02\x02\u0653\u0655\x05\xB4[\x02\u0654" +
		"\u0652\x03\x02\x02\x02\u0655\u0658\x03\x02\x02\x02\u0656\u0654\x03\x02" +
		"\x02\x02\u0656\u0657\x03\x02\x02\x02\u0657\u0659\x03\x02\x02\x02\u0658" +
		"\u0656\x03\x02\x02\x02\u0659\u065A\x07\u0191\x02\x02\u065A\u0661\x03\x02" +
		"\x02\x02\u065B\u065C\x07\u0175\x02\x02\u065C\u065D\x07\u0190\x02\x02\u065D" +
		"\u065E\x05\u010A\x86\x02\u065E\u065F\x07\u0191\x02\x02\u065F\u0661\x03" +
		"\x02\x02\x02\u0660\u061C\x03\x02\x02\x02\u0660\u0628\x03\x02\x02\x02\u0660" +
		"\u0639\x03\x02\x02\x02\u0660\u063F\x03\x02\x02\x02\u0660\u065B\x03\x02" +
		"\x02\x02\u0661\xBF\x03\x02\x02\x02\u0662\u0663\x07\u0103\x02\x02\u0663" +
		"\u0664\x07\u0163\x02\x02\u0664\u0665\x07\xBE\x02\x02\u0665\u0666\x07\u0138" +
		"\x02\x02\u0666\u0667\x05\xC2b\x02\u0667\xC1\x03\x02\x02\x02\u0668\u0669" +
		"\x05\u010A\x86\x02\u0669\xC3\x03\x02\x02\x02\u066A\u066B\x07\u0190\x02" +
		"\x02\u066B\u066C\x05\x9EP\x02\u066C\u066D\x07\u0191\x02\x02\u066D\u066E" +
		"\x05\u013A\x9E\x02\u066E\xC5\x03\x02\x02\x02\u066F\u0670\x07\u0165\x02" +
		"\x02\u0670\u0671\x07\u0190\x02\x02\u0671\u0672\x05\xC8e\x02\u0672\u0673" +
		"\x07\u0191\x02\x02\u0673\xC7\x03\x02\x02\x02\u0674\u0675\x05\xCAf\x02" +
		"\u0675\u0676\x07\u0190\x02\x02\u0676\u067B\x05\xCCg\x02\u0677\u0678\x07" +
		"\u0194\x02\x02\u0678\u067A\x05\xCCg\x02\u0679\u0677\x03\x02\x02\x02\u067A" +
		"\u067D\x03\x02\x02\x02\u067B\u0679\x03\x02\x02\x02\u067B\u067C\x03\x02" +
		"\x02\x02\u067C\u067E\x03\x02\x02\x02\u067D\u067B\x03\x02\x02\x02\u067E" +
		"\u067F\x07\u0191\x02\x02\u067F\xC9\x03\x02\x02\x02\u0680\u0681\t\x1B\x02" +
		"\x02\u0681\xCB\x03\x02\x02\x02\u0682\u0683\x07\u0165\x02\x02\u0683\u0692" +
		"\x05\xE2r\x02\u0684\u0692\x05\xD0i\x02\u0685\u0692\x05\u012C\x97\x02\u0686" +
		"\u0687\x07\x1B\x02\x02\u0687\u0688\x07\u01A4\x02\x02\u0688\u0689\x07\u0165" +
		"\x02\x02\u0689\u0692\x05\xE2r\x02\u068A\u068B\x07\x9B\x02\x02\u068B\u068C" +
		"\x07\u01A4\x02\x02\u068C\u0692\x05\xD0i\x02\u068D\u068E\x05\xCEh\x02\u068E" +
		"\u068F\x07\u01A4\x02\x02\u068F\u0690\x05\u012C\x97\x02\u0690\u0692\x03" +
		"\x02\x02\x02\u0691\u0682\x03\x02\x02\x02\u0691\u0684\x03\x02\x02\x02\u0691" +
		"\u0685\x03\x02\x02\x02\u0691\u0686\x03\x02\x02\x02\u0691\u068A\x03\x02" +
		"\x02\x02\u0691\u068D\x03\x02\x02\x02\u0692\xCD\x03\x02\x02\x02\u0693\u0694" +
		"\t\x1C\x02\x02\u0694\xCF\x03\x02\x02\x02\u0695\u0696\x07\"\x02\x02\u0696" +
		"\u0697\x07\u0190\x02\x02\u0697\u0698\x05\u0158\xAD\x02\u0698\u0699\x07" +
		"\u0191\x02\x02\u0699\xD1\x03\x02\x02\x02\u069A\u069B\x07\u013A\x02\x02" +
		"\u069B\u06A9\x05\u010C\x87\x02\u069C\u069D\x07\u0179\x02\x02\u069D\u069E" +
		"\x07\u0190\x02\x02\u069E\u06A3\x05\u0158\xAD\x02\u069F\u06A0\x07\u0194" +
		"\x02\x02\u06A0\u06A2\x05\u0158\xAD\x02\u06A1\u069F\x03\x02\x02\x02\u06A2" +
		"\u06A5\x03\x02\x02\x02\u06A3\u06A1\x03\x02\x02\x02\u06A3\u06A4\x03\x02" +
		"\x02\x02\u06A4\u06A6\x03\x02\x02\x02\u06A5\u06A3\x03\x02\x02\x02\u06A6" +
		"\u06A7\x07\u0191\x02\x02\u06A7\u06A9\x03\x02\x02\x02\u06A8\u069A\x03\x02" +
		"\x02\x02\u06A8\u069C\x03\x02\x02\x02\u06A9\xD3\x03\x02\x02\x02\u06AA\u06AB" +
		"\x07\u017F\x02\x02\u06AB\u06AC\x05\u010C\x87\x02\u06AC\xD5\x03\x02\x02" +
		"\x02\u06AD\u06AE\x07\u0109\x02\x02\u06AE\u06AF\x07\xCA\x02\x02\u06AF\u06B4" +
		"\x05\xD8m\x02\u06B0\u06B1\x07\u0194\x02\x02\u06B1\u06B3\x05\xD8m\x02\u06B2" +
		"\u06B0\x03\x02\x02\x02\u06B3\u06B6\x03\x02\x02\x02\u06B4\u06B2\x03\x02" +
		"\x02\x02\u06B4\u06B5\x03\x02\x02\x02\u06B5\xD7\x03\x02\x02\x02\u06B6\u06B4" +
		"\x03\x02\x02\x02\u06B7\u06DF\x05\u010A\x86\x02\u06B8\u06DF\x05\xDEp\x02" +
		"\u06B9\u06BA\x07\u0190\x02\x02\u06BA\u06DF\x07\u0191\x02\x02\u06BB\u06BC" +
		"\x07\u0190\x02\x02\u06BC\u06C1\x05\u010A\x86\x02\u06BD\u06BE\x07\u0194" +
		"\x02\x02\u06BE\u06C0\x05\u010A\x86\x02\u06BF\u06BD\x03\x02\x02\x02\u06C0" +
		"\u06C3\x03\x02\x02\x02\u06C1\u06BF\x03\x02\x02\x02\u06C1\u06C2\x03\x02" +
		"\x02\x02\u06C2\u06C4\x03\x02\x02\x02\u06C3\u06C1\x03\x02\x02\x02\u06C4" +
		"\u06C5\x07\u0191\x02\x02\u06C5\u06DF\x03\x02\x02\x02\u06C6\u06C7\x05\xDC" +
		"o\x02\u06C7\u06C8\x07\u0190\x02\x02\u06C8\u06CD\x05\u010A\x86\x02\u06C9" +
		"\u06CA\x07\u0194\x02\x02\u06CA\u06CC\x05\u010A\x86\x02\u06CB\u06C9\x03" +
		"\x02\x02\x02\u06CC\u06CF\x03\x02\x02\x02\u06CD\u06CB\x03\x02\x02\x02\u06CD" +
		"\u06CE\x03\x02\x02\x02\u06CE\u06D0\x03\x02\x02\x02\u06CF\u06CD\x03\x02" +
		"\x02\x02\u06D0\u06D1\x07\u0191\x02\x02\u06D1\u06DF\x03\x02\x02\x02\u06D2" +
		"\u06D3\x05\xDAn\x02\u06D3\u06D4\x07\u0190\x02\x02\u06D4\u06D9\x05\xD8" +
		"m\x02\u06D5\u06D6\x07\u0194\x02\x02\u06D6\u06D8\x05\xD8m\x02\u06D7\u06D5" +
		"\x03\x02\x02\x02\u06D8\u06DB\x03\x02\x02\x02\u06D9\u06D7\x03\x02\x02\x02" +
		"\u06D9\u06DA\x03\x02\x02\x02\u06DA\u06DC\x03\x02\x02\x02\u06DB\u06D9\x03" +
		"\x02\x02\x02\u06DC\u06DD\x07\u0191\x02\x02\u06DD\u06DF\x03\x02\x02\x02" +
		"\u06DE\u06B7\x03\x02\x02\x02\u06DE\u06B8\x03\x02\x02\x02\u06DE\u06B9\x03" +
		"\x02\x02\x02\u06DE\u06BB\x03\x02\x02\x02\u06DE\u06C6\x03\x02\x02\x02\u06DE" +
		"\u06D2\x03\x02\x02\x02\u06DF\xD9\x03\x02\x02\x02\u06E0\u06E1\x07\u010A" +
		"\x02\x02\u06E1\u06E2\x07\x8D\x02\x02\u06E2\xDB\x03\x02\x02\x02\u06E3\u06E4" +
		"\t\x1D\x02\x02\u06E4\xDD\x03\x02\x02\x02\u06E5\u06E6\x05\xE0q\x02\u06E6" +
		"\u06E7\x07\u0190\x02\x02\u06E7\u06E8\x05\xE2r\x02\u06E8\u06E9\x07\u0194" +
		"\x02\x02\u06E9\u06EA\x05\u012C\x97\x02\u06EA\u06EB\x07\u0191\x02\x02\u06EB" +
		"\xDF\x03\x02\x02\x02\u06EC\u06ED\t\x1E\x02\x02\u06ED\xE1\x03\x02\x02\x02" +
		"\u06EE\u06EF\x05\u0158\xAD\x02\u06EF\xE3\x03\x02\x02\x02\u06F0\u06F1\x07" +
		"\u010C\x02\x02\u06F1\u06F2\x05\u010C\x87\x02\u06F2\xE5\x03\x02\x02\x02" +
		"\u06F3\u06F4\x07\u0180\x02\x02\u06F4\u06F9\x05\xE8u\x02\u06F5\u06F6\x07" +
		"\u0194\x02\x02\u06F6\u06F8\x05\xE8u\x02\u06F7\u06F5\x03\x02\x02\x02\u06F8" +
		"\u06FB\x03\x02\x02\x02\u06F9\u06F7\x03\x02\x02\x02\u06F9\u06FA\x03\x02" +
		"\x02\x02\u06FA\xE7\x03\x02\x02\x02\u06FB\u06F9\x03\x02\x02\x02\u06FC\u06FD" +
		"\x05\u013C\x9F\x02\u06FD\u06FE\x07\xBE\x02\x02\u06FE\u06FF\x05\xEAv\x02" +
		"\u06FF\xE9\x03\x02\x02\x02\u0700\u0702\x05\u013C\x9F\x02\u0701\u0700\x03" +
		"\x02\x02\x02\u0701\u0702\x03\x02\x02\x02\u0702\u0703\x03\x02\x02\x02\u0703" +
		"\u0705\x07\u0190\x02\x02\u0704\u0706\x05\xF4{\x02\u0705\u0704\x03\x02" +
		"\x02\x02\u0705\u0706\x03\x02\x02\x02\u0706\u0708\x03\x02\x02\x02\u0707" +
		"\u0709\x05\xEEx\x02\u0708\u0707\x03\x02\x02\x02\u0708\u0709\x03\x02\x02" +
		"\x02\u0709\u070B\x03\x02\x02\x02\u070A\u070C\x05\u0104\x83\x02\u070B\u070A" +
		"\x03\x02\x02\x02\u070B\u070C\x03\x02\x02\x02\u070C\u070D\x03\x02\x02\x02" +
		"\u070D\u070E\x07\u0191\x02\x02\u070E\xEB\x03\x02\x02\x02\u070F\u0710\x07" +
		"\u0126\x02\x02\u0710\u0712\x07\u0190\x02\x02\u0711\u0713\x05\xF4{\x02" +
		"\u0712\u0711\x03\x02\x02\x02\u0712\u0713\x03\x02\x02\x02\u0713\u0715\x03" +
		"\x02\x02\x02\u0714\u0716\x05\xEEx\x02\u0715\u0714\x03\x02\x02\x02\u0715" +
		"\u0716\x03\x02\x02\x02\u0716\u0718\x03\x02\x02\x02\u0717\u0719\x05\xF8" +
		"}\x02\u0718\u0717\x03\x02\x02\x02\u0718\u0719\x03\x02\x02\x02\u0719\u071B" +
		"\x03\x02\x02\x02\u071A\u071C\x05\xFE\x80\x02\u071B\u071A\x03\x02\x02\x02" +
		"\u071B\u071C\x03\x02\x02\x02\u071C\u071E\x03\x02\x02\x02\u071D\u071F\x05" +
		"\u0100\x81\x02\u071E\u071D\x03\x02\x02\x02\u071E\u071F\x03\x02\x02\x02" +
		"\u071F\u0721\x03\x02\x02\x02\u0720\u0722\x05\xFA~\x02\u0721\u0720\x03" +
		"\x02\x02\x02\u0721\u0722\x03\x02\x02\x02\u0722\u0723\x03\x02\x02\x02\u0723" +
		"\u0724\x05\u0102\x82\x02\u0724\u0729\x07\u0191\x02\x02\u0725\u0727\x07" +
		"\xBE\x02\x02\u0726\u0725\x03\x02\x02\x02\u0726\u0727\x03\x02\x02\x02\u0727" +
		"\u0728\x03\x02\x02\x02\u0728\u072A\x05\u0144\xA3\x02\u0729\u0726\x03\x02" +
		"\x02\x02\u0729\u072A\x03\x02\x02\x02\u072A\xED\x03\x02\x02\x02\u072B\u072C" +
		"\x07\u013D\x02\x02\u072C\u072D\x07\xCA\x02\x02\u072D\u0732\x05\xF0y\x02" +
		"\u072E\u072F\x07\u0194\x02\x02\u072F\u0731\x05\xF0y\x02\u0730\u072E\x03" +
		"\x02\x02\x02\u0731\u0734\x03\x02\x02\x02\u0732\u0730\x03\x02\x02\x02\u0732" +
		"\u0733\x03\x02\x02\x02\u0733\xEF\x03\x02\x02\x02\u0734\u0732\x03\x02\x02" +
		"\x02\u0735\u0737\x05\u010A\x86\x02\u0736\u0738\t\x1F\x02\x02\u0737\u0736" +
		"\x03\x02\x02\x02\u0737\u0738\x03\x02\x02\x02\u0738\u073B\x03\x02\x02\x02" +
		"\u0739\u073A\x07[\x02\x02\u073A\u073C\t\x15\x02\x02\u073B\u0739\x03\x02" +
		"\x02\x02\u073B\u073C\x03\x02\x02\x02\u073C\xF1\x03\x02\x02\x02\u073D\u0740" +
		"\x07\u0123\x02\x02\u073E\u0741\x07\xB7\x02\x02\u073F\u0741\x05\u010A\x86" +
		"\x02\u0740\u073E\x03\x02\x02\x02\u0740\u073F\x03\x02\x02\x02\u0741\xF3" +
		"\x03\x02\x02\x02\u0742\u0743\x07\u0142\x02\x02\u0743\u0744\x07\xCA\x02" +
		"\x02\u0744\u0749\x05\u010A\x86\x02\u0745\u0746\x07\u0194\x02\x02\u0746" +
		"\u0748\x05\u010A\x86\x02\u0747\u0745\x03\x02\x02\x02\u0748\u074B\x03\x02" +
		"\x02\x02\u0749\u0747\x03\x02\x02\x02\u0749\u074A\x03\x02\x02\x02\u074A" +
		"\xF5\x03\x02\x02\x02\u074B\u0749\x03\x02\x02\x02\u074C\u075D\x07\u019B" +
		"\x02\x02\u074D\u075D\x07\u019E\x02\x02\u074E\u075D\x07\u01A3\x02\x02\u074F" +
		"\u0750\x07\u0192\x02\x02\u0750\u0751\x07\u01A6\x02\x02\u0751\u0752\x07" +
		"\u0194\x02\x02\u0752\u0753\x07\u01A6\x02\x02\u0753\u075D\x07\u0193\x02" +
		"\x02\u0754\u0755\x07\u0192\x02\x02\u0755\u0756\x07\u01A6\x02\x02\u0756" +
		"\u0757\x07\u0194\x02\x02\u0757\u075D\x07\u0193\x02\x02\u0758\u0759\x07" +
		"\u0192\x02\x02\u0759\u075A\x07\u0194\x02\x02\u075A\u075B\x07\u01A6\x02" +
		"\x02\u075B\u075D\x07\u0193\x02\x02\u075C\u074C\x03\x02\x02\x02\u075C\u074D" +
		"\x03\x02\x02\x02\u075C\u074E\x03\x02\x02\x02\u075C\u074F\x03\x02\x02\x02" +
		"\u075C\u0754\x03\x02\x02\x02\u075C\u0758\x03\x02\x02\x02\u075D\xF7\x03" +
		"\x02\x02\x02\u075E\u075F\x07\u0127\x02\x02\u075F\u0764\x05\xB4[\x02\u0760" +
		"\u0761\x07\u0194\x02\x02\u0761\u0763\x05\xB4[\x02\u0762\u0760\x03\x02" +
		"\x02\x02\u0763\u0766\x03\x02\x02\x02\u0764\u0762\x03\x02\x02\x02\u0764" +
		"\u0765\x03\x02\x02\x02\u0765\xF9\x03\x02\x02\x02\u0766\u0764\x03\x02\x02" +
		"\x02\u0767\u0768\x07\u0143\x02\x02\u0768\u076A\x07\u0190\x02\x02\u0769" +
		"\u076B\x05\xFC\x7F\x02\u076A\u0769\x03\x02\x02\x02\u076B\u076C\x03\x02" +
		"\x02\x02\u076C\u076A\x03\x02\x02\x02\u076C\u076D\x03\x02\x02\x02\u076D" +
		"\u076E\x03\x02\x02\x02\u076E\u0770\x07\u0191\x02\x02\u076F\u0771\x05\u0108" +
		"\x85\x02\u0770\u076F\x03\x02\x02\x02\u0770\u0771\x03\x02\x02\x02\u0771" +
		"\xFB\x03\x02\x02\x02\u0772\u0774\x05\u0148\xA5\x02\u0773\u0775\x05\xF6" +
		"|\x02\u0774\u0773\x03\x02\x02\x02\u0774\u0775\x03\x02\x02\x02\u0775\xFD" +
		"\x03\x02\x02\x02\u0776\u0777\x07\xB7\x02\x02\u0777\u0778\x07\u0155\x02" +
		"\x02\u0778\u0779\x07\u0144\x02\x02\u0779\u077F\x07\u0125\x02\x02\u077A" +
		"\u077B\x07\u013B\x02\x02\u077B\u077C\x07\u0154\x02\x02\u077C\u077D\x07" +
		"\u0144\x02\x02\u077D\u077F\x07\u0125\x02\x02\u077E\u0776\x03\x02\x02\x02" +
		"\u077E\u077A\x03\x02\x02\x02\u077F\xFF\x03\x02\x02\x02\u0780\u0781\x07" +
		"\t\x02\x02\u0781\u0782\x07\u0125\x02\x02\u0782\u0783\x07\u015B\x02\x02" +
		"\u0783\u0784\x07f\x02\x02\u0784\u0785\x07M\x02\x02\u0785\u0799\x07\u0154" +
		"\x02\x02\u0786\u0787\x07\t\x02\x02\u0787\u0788\x07\u0125\x02\x02\u0788" +
		"\u0789\x07\u015B\x02\x02\u0789\u078A\x07\u016E\x02\x02\u078A\u078B\x07" +
		"\u0131\x02\x02\u078B\u0799\x07\u0154\x02\x02\u078C\u078D\x07\t\x02\x02" +
		"\u078D\u078E\x07\u0125\x02\x02\u078E\u078F\x07\u015B\x02\x02\u078F\u0790" +
		"\x07\u016E\x02\x02\u0790\u0791\x07M\x02\x02\u0791\u0799\x05\u0148\xA5" +
		"\x02\u0792\u0793\x07\t\x02\x02\u0793\u0794\x07\u0125\x02\x02\u0794\u0795" +
		"\x07\u015B\x02\x02\u0795\u0796\x07\u016E\x02\x02\u0796\u0797\x071\x02" +
		"\x02\u0797\u0799\x05\u0148\xA5\x02\u0798\u0780\x03\x02\x02\x02\u0798\u0786" +
		"\x03\x02\x02\x02\u0798\u078C\x03\x02\x02\x02\u0798\u0792\x03\x02\x02\x02" +
		"\u0799\u0101\x03\x02\x02\x02\u079A\u079B\x07\xEE\x02\x02\u079B\u07A0\x05" +
		"\xB4[\x02\u079C\u079D\x07\u0194\x02\x02\u079D\u079F\x05\xB4[\x02\u079E" +
		"\u079C\x03\x02\x02\x02\u079F\u07A2\x03\x02\x02\x02\u07A0\u079E\x03\x02" +
		"\x02\x02\u07A0\u07A1\x03\x02\x02\x02\u07A1\u0103\x03\x02\x02\x02\u07A2" +
		"\u07A0\x03\x02\x02\x02\u07A3\u07A4\x07\u014B\x02\x02\u07A4\u07A5\x07\xC3" +
		"\x02\x02\u07A5\u07A6\x05\u012C\x97\x02\u07A6\u07A7\x05\u0106\x84\x02\u07A7" +
		"\u07AD\x03\x02\x02\x02\u07A8\u07A9\x07\u0155\x02\x02\u07A9\u07AA\x07\xC3" +
		"\x02\x02\u07AA\u07AB\x07\u01A6\x02\x02\u07AB\u07AD\x05\u0106\x84\x02\u07AC" +
		"\u07A3\x03\x02\x02\x02\u07AC\u07A8\x03\x02\x02\x02\u07AD\u0105\x03\x02" +
		"\x02\x02\u07AE\u07AF\x07j\x02\x02\u07AF\u07B0\x07\xBA\x02\x02\u07B0\u07B1" +
		"\x07\xE4\x02\x02\u07B1\u07B2\x07\u0154\x02\x02\u07B2\u0107\x03\x02\x02" +
		"\x02\u07B3\u07B4\x07\u0182\x02\x02\u07B4\u07B5\x05\u012C\x97\x02\u07B5" +
		"\u0109\x03\x02\x02\x02\u07B6\u07B7\x05\u010C\x87\x02\u07B7\u010B\x03\x02" +
		"\x02\x02\u07B8\u07B9\b\x87\x01\x02\u07B9\u07BA\x07\u0134\x02\x02\u07BA" +
		"\u07C5\x05\u010C\x87\b\u07BB\u07BC\x07\xFC\x02\x02\u07BC\u07BD\x07\u0190" +
		"\x02\x02\u07BD\u07BE\x05\xA6T\x02\u07BE\u07BF\x07\u0191\x02\x02\u07BF" +
		"\u07C5\x03\x02\x02\x02\u07C0\u07C2\x05\u0112\x8A\x02\u07C1\u07C3\x05\u010E" +
		"\x88\x02\u07C2\u07C1\x03\x02\x02\x02\u07C2\u07C3\x03\x02\x02\x02\u07C3" +
		"\u07C5\x03\x02\x02\x02\u07C4\u07B8\x03\x02\x02\x02\u07C4\u07BB\x03\x02" +
		"\x02\x02\u07C4\u07C0\x03\x02\x02\x02\u07C5\u07D4\x03\x02\x02\x02\u07C6" +
		"\u07C7\f\x05\x02\x02\u07C7\u07C8\x07\xBA\x02\x02\u07C8\u07D3\x05\u010C" +
		"\x87\x06\u07C9\u07CA\f\x04\x02\x02\u07CA\u07CB\x07\u013C\x02\x02\u07CB" +
		"\u07D3\x05\u010C\x87\x05\u07CC\u07CD\f\x03\x02\x02\u07CD\u07CF\x07\u0119" +
		"\x02\x02\u07CE\u07D0\x07\u0134\x02\x02\u07CF\u07CE\x03\x02\x02\x02\u07CF" +
		"\u07D0\x03\x02\x02\x02\u07D0\u07D1\x03\x02\x02\x02\u07D1\u07D3\t \x02" +
		"\x02\u07D2\u07C6\x03\x02\x02\x02\u07D2\u07C9\x03\x02\x02\x02\u07D2\u07CC" +
		"\x03\x02\x02\x02\u07D3\u07D6\x03\x02\x02\x02\u07D4\u07D2\x03\x02\x02\x02" +
		"\u07D4\u07D5\x03\x02\x02\x02\u07D5\u010D\x03\x02\x02\x02\u07D6\u07D4\x03" +
		"\x02\x02\x02\u07D7\u07D9\x07\u0134\x02\x02\u07D8\u07D7\x03\x02\x02\x02" +
		"\u07D8\u07D9\x03\x02\x02\x02\u07D9\u07DA\x03\x02\x02\x02\u07DA\u07DC\x07" +
		"\xC3\x02\x02\u07DB\u07DD\t!\x02\x02\u07DC\u07DB\x03\x02\x02\x02\u07DC" +
		"\u07DD\x03\x02\x02\x02\u07DD\u07DE\x03\x02\x02\x02\u07DE\u07DF\x05\u0112" +
		"\x8A\x02\u07DF\u07E0\x07\xBA\x02\x02\u07E0\u07E1\x05\u0112\x8A\x02\u07E1" +
		"\u081B\x03\x02\x02\x02\u07E2\u07E4\x07\u0134\x02\x02\u07E3\u07E2\x03\x02" +
		"\x02\x02\u07E3\u07E4\x03\x02\x02\x02\u07E4\u07E5\x03\x02\x02\x02\u07E5" +
		"\u07E6\x07\u010F\x02\x02\u07E6\u07E7\x07\u0190\x02\x02\u07E7\u07EC\x05" +
		"\u010A\x86\x02\u07E8\u07E9\x07\u0194\x02\x02\u07E9\u07EB\x05\u010A\x86" +
		"\x02\u07EA\u07E8\x03\x02\x02\x02\u07EB\u07EE\x03\x02\x02\x02\u07EC\u07EA" +
		"\x03\x02\x02\x02\u07EC\u07ED\x03\x02\x02\x02\u07ED\u07EF\x03\x02\x02\x02" +
		"\u07EE\u07EC\x03\x02\x02\x02\u07EF\u07F0\x07\u0191\x02\x02\u07F0\u081B" +
		"\x03\x02\x02\x02\u07F1\u07F3\x07\u0134\x02\x02\u07F2\u07F1\x03\x02\x02" +
		"\x02\u07F2\u07F3\x03\x02\x02\x02\u07F3\u07F4\x03\x02\x02\x02\u07F4\u07F5" +
		"\x07\u010F\x02\x02\u07F5\u07F6\x07\u0190\x02\x02\u07F6\u07F7\x05\xA6T" +
		"\x02\u07F7\u07F8\x07\u0191\x02\x02\u07F8\u081B\x03\x02\x02\x02\u07F9\u07FA" +
		"\x07\xFC\x02\x02\u07FA\u07FB\x07\u0190\x02\x02\u07FB\u07FC\x05\xA6T\x02" +
		"\u07FC\u07FD\x07\u0191\x02\x02\u07FD\u081B\x03\x02\x02\x02\u07FE\u0800" +
		"\x07\u0134\x02\x02\u07FF\u07FE\x03\x02\x02\x02\u07FF\u0800\x03\x02\x02" +
		"\x02\u0800\u0801\x03\x02\x02\x02\u0801\u0802\x07\u0151\x02\x02\u0802\u081B" +
		"\x05\u0112\x8A\x02\u0803\u081B\x05\u0110\x89\x02\u0804\u0806\x07\u0119" +
		"\x02\x02\u0805\u0807\x07\u0134\x02\x02\u0806\u0805\x03\x02\x02\x02\u0806" +
		"\u0807\x03\x02\x02\x02\u0807\u0808\x03\x02\x02\x02\u0808\u081B\t \x02" +
		"\x02\u0809\u080B\x07\u0119\x02\x02\u080A\u080C\x07\u0134\x02\x02\u080B" +
		"\u080A\x03\x02\x02\x02\u080B\u080C\x03\x02\x02\x02\u080C\u080D\x03\x02" +
		"\x02\x02\u080D\u080E\x07\xF2\x02\x02\u080E\u080F\x07\u0104\x02\x02\u080F" +
		"\u081B\x05\u0112\x8A\x02\u0810\u0812\x07\u0134\x02\x02\u0811\u0810\x03" +
		"\x02\x02\x02\u0811\u0812\x03\x02\x02\x02\u0812\u0813\x03\x02\x02\x02\u0813" +
		"\u0814\x07\u015A\x02\x02\u0814\u0815\x07\u016E\x02\x02\u0815\u0818\x05" +
		"\u0112\x8A\x02\u0816\u0817\x07\xF9\x02\x02\u0817\u0819\x05\u0176\xBC\x02" +
		"\u0818\u0816\x03\x02\x02\x02\u0818\u0819\x03\x02\x02\x02\u0819\u081B\x03" +
		"\x02\x02\x02\u081A\u07D8\x03\x02\x02\x02\u081A\u07E3\x03\x02\x02\x02\u081A" +
		"\u07F2\x03\x02\x02\x02\u081A\u07F9\x03\x02\x02\x02\u081A\u07FF\x03\x02" +
		"\x02\x02\u081A\u0803\x03\x02\x02\x02\u081A\u0804\x03\x02\x02\x02\u081A" +
		"\u0809\x03\x02\x02\x02\u081A\u0811\x03\x02\x02\x02\u081B\u010F\x03\x02" +
		"\x02\x02\u081C\u081E\x07\u0134\x02\x02\u081D\u081C\x03\x02\x02\x02\u081D" +
		"\u081E\x03\x02\x02\x02\u081E\u081F\x03\x02\x02\x02\u081F\u0820\x07\u0122" +
		"\x02\x02\u0820\u082E\t\"\x02\x02\u0821\u0822\x07\u0190\x02\x02\u0822\u082F" +
		"\x07\u0191\x02\x02\u0823\u0824\x07\u0190\x02\x02\u0824\u0829\x05\u010A" +
		"\x86\x02\u0825\u0826\x07\u0194\x02\x02\u0826\u0828\x05\u010A\x86\x02\u0827" +
		"\u0825\x03\x02\x02\x02\u0828\u082B\x03\x02\x02\x02\u0829\u0827\x03\x02" +
		"\x02\x02\u0829\u082A\x03\x02\x02\x02\u082A\u082C\x03\x02\x02\x02\u082B" +
		"\u0829\x03\x02\x02\x02\u082C\u082D\x07\u0191\x02\x02\u082D\u082F\x03\x02" +
		"\x02\x02\u082E\u0821\x03\x02\x02\x02\u082E\u0823\x03\x02\x02\x02\u082F" +
		"\u083A\x03\x02\x02\x02\u0830\u0832\x07\u0134\x02\x02\u0831\u0830\x03\x02" +
		"\x02\x02\u0831\u0832\x03\x02\x02\x02\u0832\u0833\x03\x02\x02\x02\u0833" +
		"\u0834\x07\u0122\x02\x02\u0834\u0837\x05\u0112\x8A\x02\u0835\u0836\x07" +
		"\xF9\x02\x02\u0836\u0838\x05\u0176\xBC\x02\u0837\u0835\x03\x02\x02\x02" +
		"\u0837\u0838\x03\x02\x02\x02\u0838\u083A\x03\x02\x02\x02\u0839\u081D\x03" +
		"\x02\x02\x02\u0839\u0831\x03\x02\x02\x02\u083A\u0111\x03\x02\x02\x02\u083B" +
		"\u083C\b\x8A\x01\x02\u083C\u0840\x05\u0114\x8B\x02\u083D\u083E\t#\x02" +
		"\x02\u083E\u0840\x05\u0112\x8A\n\u083F\u083B\x03\x02\x02\x02\u083F\u083D" +
		"\x03\x02\x02\x02\u0840\u0858\x03\x02\x02\x02\u0841\u0842\f\t\x02\x02\u0842" +
		"\u0843\t$\x02\x02\u0843\u0857\x05\u0112\x8A\n\u0844\u0845\f\b\x02\x02" +
		"\u0845\u0846\t%\x02\x02\u0846\u0857\x05\u0112\x8A\t\u0847\u0848\f\x07" +
		"\x02\x02\u0848\u0849\x07\u0187\x02\x02\u0849\u0857\x05\u0112\x8A\b\u084A" +
		"\u084B\f\x06\x02\x02\u084B\u084C\x07\u0188\x02\x02\u084C\u0857\x05\u0112" +
		"\x8A\x07\u084D\u084E\f\x05\x02\x02\u084E\u084F\x07\u0186\x02\x02\u084F" +
		"\u0857\x05\u0112\x8A\x06\u0850\u0851\f\x04\x02\x02\u0851\u0852\x05\u016A" +
		"\xB6\x02\u0852\u0853\x05\u0112\x8A\x05\u0853\u0857\x03\x02\x02\x02\u0854" +
		"\u0855";
	private static readonly _serializedATNSegment4: string =
		"\f\x03\x02\x02\u0855\u0857\x07\u01AA\x02\x02\u0856\u0841\x03\x02\x02\x02" +
		"\u0856\u0844\x03\x02\x02\x02\u0856\u0847\x03\x02\x02\x02\u0856\u084A\x03" +
		"\x02\x02\x02\u0856\u084D\x03\x02\x02\x02\u0856\u0850\x03\x02\x02\x02\u0856" +
		"\u0854\x03\x02\x02\x02\u0857\u085A\x03\x02\x02\x02\u0858\u0856\x03\x02" +
		"\x02\x02\u0858\u0859\x03\x02\x02\x02\u0859\u0113\x03\x02\x02\x02\u085A" +
		"\u0858\x03\x02\x02\x02\u085B\u085C\b\x8B\x01\x02\u085C\u085E\x07\xCE\x02" +
		"\x02\u085D\u085F\x05\u014C\xA7\x02\u085E\u085D\x03\x02\x02\x02\u085F\u0860" +
		"\x03\x02\x02\x02\u0860\u085E\x03\x02\x02\x02\u0860\u0861\x03\x02\x02\x02" +
		"\u0861\u0864\x03\x02\x02\x02\u0862\u0863\x07\xF6\x02\x02\u0863\u0865\x05" +
		"\u010A\x86\x02\u0864\u0862\x03\x02\x02\x02\u0864\u0865\x03\x02\x02\x02" +
		"\u0865\u0866\x03\x02\x02\x02\u0866\u0867\x07\xF7\x02\x02\u0867\u08C9\x03" +
		"\x02\x02\x02\u0868\u0869\x07\xCE\x02\x02\u0869\u086B\x05\u010A\x86\x02" +
		"\u086A\u086C\x05\u014C\xA7\x02\u086B\u086A\x03\x02\x02\x02\u086C\u086D" +
		"\x03\x02\x02\x02\u086D\u086B\x03\x02\x02\x02\u086D\u086E\x03\x02\x02\x02" +
		"\u086E\u0871\x03\x02\x02\x02\u086F\u0870\x07\xF6\x02\x02\u0870\u0872\x05" +
		"\u010A\x86\x02\u0871\u086F\x03\x02\x02\x02\u0871\u0872\x03\x02\x02\x02" +
		"\u0872\u0873\x03\x02\x02\x02\u0873\u0874\x07\xF7\x02\x02\u0874\u08C9\x03" +
		"\x02\x02\x02\u0875\u0876\x07\xCF\x02\x02\u0876\u0877\x07\u0190\x02\x02" +
		"\u0877\u0878\x05\u010A\x86\x02\u0878\u0879\x07\xBE\x02\x02\u0879\u087A" +
		"\x05<\x1F\x02\u087A\u087B\x07\u0191\x02\x02\u087B\u08C9\x03\x02\x02\x02" +
		"\u087C\u087D\x071\x02\x02\u087D\u087E\x07\u0190\x02\x02\u087E\u0881\x05" +
		"\u010A\x86\x02\u087F\u0880\x07@\x02\x02\u0880\u0882\x07[\x02\x02\u0881" +
		"\u087F\x03\x02\x02\x02\u0881\u0882\x03\x02\x02\x02\u0882\u0883\x03\x02" +
		"\x02\x02\u0883\u0884\x07\u0191\x02\x02\u0884\u08C9\x03\x02\x02\x02\u0885" +
		"\u0886\x07M\x02\x02\u0886\u0887\x07\u0190\x02\x02\u0887\u088A\x05\u010A" +
		"\x86\x02\u0888\u0889\x07@\x02\x02\u0889\u088B\x07[\x02\x02\u088A\u0888" +
		"\x03\x02\x02\x02\u088A\u088B\x03\x02\x02\x02\u088B\u088C\x03\x02\x02\x02" +
		"\u088C\u088D\x07\u0191\x02\x02\u088D\u08C9\x03\x02\x02\x02\u088E\u088F" +
		"\x07\u0148\x02\x02\u088F\u0890\x07\u0190\x02\x02\u0890\u0891\x05\u0112" +
		"\x8A\x02\u0891\u0892\x07\u010F\x02\x02\u0892\u0893\x05\u0112\x8A\x02\u0893" +
		"\u0894\x07\u0191\x02\x02\u0894\u08C9\x03\x02\x02\x02\u0895\u08C9\x05\u0172" +
		"\xBA\x02\u0896\u08C9\x07\u019B\x02\x02\u0897\u0898\x05\u0158\xAD\x02\u0898" +
		"\u0899\x07\u018D\x02\x02\u0899\u089A\x07\u019B\x02\x02\u089A\u08C9\x03" +
		"\x02\x02\x02\u089B\u089C\x07\u0190\x02\x02\u089C\u089D\x05\xA6T\x02\u089D" +
		"\u089E\x07\u0191\x02\x02\u089E\u08C9\x03\x02\x02\x02\u089F\u08A0\x05\u0120" +
		"\x91\x02\u08A0\u08AC\x07\u0190\x02\x02\u08A1\u08A3\x05\u017C\xBF\x02\u08A2" +
		"\u08A1\x03\x02\x02\x02\u08A2\u08A3\x03\x02\x02\x02\u08A3\u08A4\x03\x02" +
		"\x02\x02\u08A4\u08A9\x05\u0122\x92\x02\u08A5\u08A6\x07\u0194\x02\x02\u08A6" +
		"\u08A8\x05\u0122\x92\x02\u08A7\u08A5\x03\x02\x02\x02\u08A8\u08AB\x03\x02" +
		"\x02\x02\u08A9\u08A7\x03\x02\x02\x02\u08A9\u08AA\x03\x02\x02\x02\u08AA" +
		"\u08AD\x03\x02\x02\x02\u08AB\u08A9\x03\x02\x02\x02\u08AC\u08A2\x03\x02" +
		"\x02\x02\u08AC\u08AD\x03\x02\x02\x02\u08AD\u08AE\x03\x02\x02\x02\u08AE" +
		"\u08AF\x07\u0191\x02\x02\u08AF\u08C9\x03\x02\x02\x02\u08B0\u08B1\x05\u0120" +
		"\x91\x02\u08B1\u08B2\x07\u0190\x02\x02\u08B2\u08B3\x05\u0122\x92\x02\u08B3" +
		"\u08B4\x07\u016E\x02\x02\u08B4\u08B5\x05\u0122\x92\x02\u08B5\u08B6\x07" +
		"\u0191\x02\x02\u08B6\u08C9\x03\x02\x02\x02\u08B7\u08B8\x05\u0120\x91\x02" +
		"\u08B8\u08BA\x07\u0190\x02\x02\u08B9\u08BB\x05\u017C\xBF\x02\u08BA\u08B9" +
		"\x03\x02\x02\x02\u08BA\u08BB\x03\x02\x02\x02\u08BB\u08BC\x03\x02\x02\x02" +
		"\u08BC\u08BD\x05\u0122\x92\x02\u08BD\u08BF\x07\u0191\x02\x02\u08BE\u08C0" +
		"\x05\u0124\x93\x02\u08BF\u08BE\x03\x02\x02\x02\u08BF\u08C0\x03\x02\x02" +
		"\x02\u08C0\u08C9\x03\x02\x02\x02\u08C1\u08C9\x05\u0144\xA3\x02\u08C2\u08C9" +
		"\x05\u0126\x94\x02\u08C3\u08C4\x07\u0190\x02\x02\u08C4\u08C5\x05\u010A" +
		"\x86\x02\u08C5\u08C6\x07\u0191\x02\x02\u08C6\u08C9\x03\x02\x02\x02\u08C7" +
		"\u08C9\x05\u0116\x8C\x02\u08C8\u085B\x03\x02\x02\x02\u08C8\u0868\x03\x02" +
		"\x02\x02\u08C8\u0875\x03\x02\x02\x02\u08C8\u087C\x03\x02\x02\x02\u08C8" +
		"\u0885\x03\x02\x02\x02\u08C8\u088E\x03\x02\x02\x02\u08C8\u0895\x03\x02" +
		"\x02\x02\u08C8\u0896\x03\x02\x02\x02\u08C8\u0897\x03\x02\x02\x02\u08C8" +
		"\u089B\x03\x02\x02\x02\u08C8\u089F\x03\x02\x02\x02\u08C8\u08B0\x03\x02" +
		"\x02\x02\u08C8\u08B7\x03\x02\x02\x02\u08C8\u08C1\x03\x02\x02\x02\u08C8" +
		"\u08C2\x03\x02\x02\x02\u08C8\u08C3\x03\x02\x02\x02\u08C8\u08C7\x03\x02" +
		"\x02\x02\u08C9\u08D1\x03\x02\x02\x02\u08CA\u08CB\f\x07\x02\x02\u08CB\u08CC" +
		"\x07\u018E\x02\x02\u08CC\u08CD\x05\u0112\x8A\x02\u08CD\u08CE\x07\u018F" +
		"\x02\x02\u08CE\u08D0\x03\x02\x02\x02\u08CF\u08CA\x03\x02\x02\x02\u08D0" +
		"\u08D3\x03\x02\x02\x02\u08D1\u08CF\x03\x02\x02\x02\u08D1\u08D2\x03\x02" +
		"\x02\x02\u08D2\u0115\x03\x02\x02\x02\u08D3\u08D1\x03\x02\x02\x02\u08D4" +
		"\u08D8\x05\u0118\x8D\x02\u08D5\u08D8\x05\u011A\x8E\x02\u08D6\u08D8\x05" +
		"\u011C\x8F\x02\u08D7\u08D4\x03\x02\x02\x02\u08D7\u08D5\x03\x02\x02\x02" +
		"\u08D7\u08D6\x03\x02\x02\x02\u08D8\u0117\x03\x02\x02\x02\u08D9\u08DA\x07" +
		"\xBD\x02\x02\u08DA\u08DB\x07\u018E\x02\x02\u08DB\u08E0\x05\u011E\x90\x02" +
		"\u08DC\u08DD\x07\u0194\x02\x02\u08DD\u08DF\x05\u011E\x90\x02\u08DE\u08DC" +
		"\x03\x02\x02\x02\u08DF\u08E2\x03\x02\x02\x02\u08E0\u08DE\x03\x02\x02\x02" +
		"\u08E0\u08E1\x03\x02\x02\x02\u08E1\u08E3\x03\x02\x02\x02\u08E2\u08E0\x03" +
		"\x02\x02\x02\u08E3\u08E4\x07\u018F\x02\x02\u08E4\u0119\x03\x02\x02\x02" +
		"\u08E5\u08E6\x07\u0154\x02\x02\u08E6\u08E7\x07\u0190\x02\x02\u08E7\u08EC" +
		"\x05\u011E\x90\x02\u08E8\u08E9\x07\u0194\x02\x02\u08E9\u08EB\x05\u011E" +
		"\x90\x02\u08EA\u08E8\x03\x02\x02\x02\u08EB\u08EE\x03\x02\x02\x02\u08EC" +
		"\u08EA\x03\x02\x02\x02\u08EC\u08ED\x03\x02\x02\x02\u08ED\u08EF\x03\x02" +
		"\x02\x02\u08EE\u08EC\x03\x02\x02\x02\u08EF\u08F0\x07\u0191\x02\x02\u08F0" +
		"\u011B\x03\x02\x02\x02\u08F1\u08F2\x07Q\x02\x02\u08F2\u08F3\x07\u018E" +
		"\x02\x02\u08F3\u08F4\x05\u011E\x90\x02\u08F4\u08F5\x07\u0194\x02\x02\u08F5" +
		"\u08F6\x05\u011E\x90\x02\u08F6\u08F7\x07\u018F\x02\x02\u08F7\u011D\x03" +
		"\x02\x02\x02\u08F8\u08FB\x05\u0138\x9D\x02\u08F9\u08FB\x05\u0116\x8C\x02" +
		"\u08FA\u08F8\x03\x02\x02\x02\u08FA\u08F9\x03\x02\x02\x02\u08FB\u011F\x03" +
		"\x02\x02\x02\u08FC\u0900\x05\u0184\xC3\x02\u08FD\u0900\x05\u0188\xC5\x02" +
		"\u08FE\u0900\x05\u0158\xAD\x02\u08FF\u08FC\x03\x02\x02\x02\u08FF\u08FD" +
		"\x03\x02\x02\x02\u08FF\u08FE\x03\x02\x02\x02\u0900\u0121\x03\x02\x02\x02" +
		"\u0901\u0907\x05\u0182\xC2\x02\u0902\u0907\x05\u0180\xC1\x02\u0903\u0907" +
		"\x05\u017E\xC0\x02\u0904\u0907\x05\u010A\x86\x02\u0905\u0907\x05\u0124" +
		"\x93\x02\u0906\u0901\x03\x02\x02\x02\u0906\u0902\x03\x02\x02\x02\u0906" +
		"\u0903\x03\x02\x02\x02\u0906\u0904\x03\x02\x02\x02\u0906\u0905\x03\x02" +
		"\x02\x02\u0907\u0123\x03\x02\x02\x02\u0908\u0909\x07.\x02\x02\u0909\u090A" +
		"\x07\u0190\x02\x02\u090A\u090B\x07\u017F\x02\x02\u090B\u090C\x05\u010C" +
		"\x87\x02\u090C\u090D\x07\u0191\x02\x02\u090D\u0125\x03\x02\x02\x02\u090E" +
		"\u090F\x05\u0158\xAD\x02\u090F\u0127\x03\x02\x02\x02\u0910\u0911\x05\u0144" +
		"\xA3\x02\u0911\u0129\x03\x02\x02\x02\u0912\u0915\x05\u0144\xA3\x02\u0913" +
		"\u0915\x05\u0126\x94\x02\u0914\u0912\x03\x02\x02\x02\u0914\u0913\x03\x02" +
		"\x02\x02\u0915\u012B\x03\x02\x02\x02\u0916\u0919\x07\u0117\x02\x02\u0917" +
		"\u091A\x05\u012E\x98\x02\u0918\u091A\x05\u0132\x9A\x02\u0919\u0917\x03" +
		"\x02\x02\x02\u0919\u0918\x03\x02\x02\x02\u0919\u091A\x03\x02\x02\x02\u091A" +
		"\u012D\x03\x02\x02\x02\u091B\u091D\x05\u0130\x99\x02\u091C\u091E\x05\u0134" +
		"\x9B\x02\u091D\u091C\x03\x02\x02\x02\u091D\u091E\x03\x02\x02\x02\u091E" +
		"\u012F\x03\x02\x02\x02\u091F\u0920\x05\u0136\x9C\x02\u0920\u0921\x05\u0180" +
		"\xC1\x02\u0921\u0923\x03\x02\x02\x02\u0922\u091F\x03\x02\x02\x02\u0923" +
		"\u0924\x03\x02\x02\x02\u0924\u0922\x03\x02\x02\x02\u0924\u0925\x03\x02" +
		"\x02\x02\u0925\u0131\x03\x02\x02\x02\u0926\u0929\x05\u0134\x9B\x02\u0927" +
		"\u092A\x05\u0130\x99\x02\u0928\u092A\x05\u0134\x9B\x02\u0929\u0927\x03" +
		"\x02\x02\x02\u0929\u0928\x03\x02\x02\x02\u0929\u092A\x03\x02\x02\x02\u092A" +
		"\u0133\x03\x02\x02\x02\u092B\u092C\x05\u0136\x9C\x02\u092C\u092D\x05\u0180" +
		"\xC1\x02\u092D\u092E\x07\u016E\x02\x02\u092E\u092F\x05\u0180\xC1\x02\u092F" +
		"\u0135\x03\x02\x02\x02\u0930\u0932\t&\x02\x02\u0931\u0930\x03\x02\x02" +
		"\x02\u0931\u0932\x03\x02\x02\x02\u0932\u0933\x03\x02\x02\x02\u0933\u0936" +
		"\t\'\x02\x02\u0934\u0936\x07\u01A5\x02\x02\u0935\u0931\x03\x02\x02\x02" +
		"\u0935\u0934\x03\x02\x02\x02\u0936\u0137\x03\x02\x02\x02\u0937\u0939\x07" +
		"\xBE\x02\x02\u0938\u0937\x03\x02\x02\x02\u0938\u0939\x03\x02\x02\x02\u0939" +
		"\u093A\x03\x02\x02\x02\u093A\u093C\x05\u0144\xA3\x02\u093B\u093D\x05\u0140" +
		"\xA1\x02\u093C\u093B\x03\x02\x02\x02\u093C\u093D\x03\x02\x02\x02\u093D" +
		"\u0139\x03\x02\x02\x02\u093E\u0940\x07\xBE\x02\x02\u093F\u093E\x03\x02" +
		"\x02\x02\u093F\u0940\x03\x02\x02\x02\u0940\u0941\x03\x02\x02\x02\u0941" +
		"\u0943\x05\u0144\xA3\x02\u0942\u0944\x05\u0140\xA1\x02\u0943\u0942\x03" +
		"\x02\x02\x02\u0943\u0944\x03\x02\x02\x02\u0944\u013B\x03\x02\x02\x02\u0945" +
		"\u0946\x05\u0144\xA3\x02\u0946\u0947\x05\u013E\xA0\x02\u0947\u013D\x03" +
		"\x02\x02\x02\u0948\u0949\x07\u012A\x02\x02\u0949\u094B\x05\u0144\xA3\x02" +
		"\u094A\u0948\x03\x02\x02\x02\u094B\u094C\x03\x02\x02\x02\u094C\u094A\x03" +
		"\x02\x02\x02\u094C\u094D\x03\x02\x02\x02\u094D\u0950\x03\x02\x02\x02\u094E" +
		"\u0950\x03\x02\x02\x02\u094F\u094A\x03\x02\x02\x02\u094F\u094E\x03\x02" +
		"\x02\x02\u0950\u013F\x03\x02\x02\x02\u0951\u0952\x07\u0190\x02\x02\u0952" +
		"\u0953\x05\u0142\xA2\x02\u0953\u0954\x07\u0191\x02\x02\u0954\u0141\x03" +
		"\x02\x02\x02\u0955\u095A\x05\u0144\xA3\x02\u0956\u0957\x07\u0194\x02\x02" +
		"\u0957\u0959\x05\u0144\xA3\x02\u0958\u0956\x03\x02\x02\x02\u0959\u095C" +
		"\x03\x02\x02\x02\u095A\u0958\x03\x02\x02\x02\u095A\u095B\x03\x02\x02\x02" +
		"\u095B\u0143\x03\x02\x02\x02\u095C\u095A\x03\x02\x02\x02\u095D\u0962\x05" +
		"\u0148\xA5\x02\u095E\u0962\x05\u014A\xA6\x02\u095F\u0962\x05\u0188\xC5" +
		"\x02\u0960\u0962\x05\u0146\xA4\x02\u0961\u095D\x03\x02\x02\x02\u0961\u095E" +
		"\x03\x02\x02\x02\u0961\u095F\x03\x02\x02\x02\u0961\u0960\x03\x02\x02\x02" +
		"\u0962\u0145\x03\x02\x02\x02\u0963\u0964\x07\x03\x02\x02\u0964\u0965\x07" +
		"\u0192\x02\x02\u0965\u0966\x05\u0148\xA5\x02\u0966\u0967\x07\u0193\x02" +
		"\x02\u0967\u0147\x03\x02\x02\x02\u0968\u0969\t(\x02\x02\u0969\u0149\x03" +
		"\x02\x02\x02\u096A\u096B\x07\u01A5\x02\x02\u096B\u014B\x03\x02\x02\x02" +
		"\u096C\u096D\x07\u017E\x02\x02\u096D\u096E\x05\u010A\x86\x02\u096E\u096F" +
		"\x07\u0167\x02\x02\u096F\u0970\x05\u010A\x86\x02\u0970\u014D\x03\x02\x02" +
		"\x02\u0971\u0972\x05\u0158\xAD\x02\u0972\u014F\x03\x02\x02\x02\u0973\u0974" +
		"\x05\u0158\xAD\x02\u0974\u0151\x03\x02\x02\x02\u0975\u0976\x05\u0158\xAD" +
		"\x02\u0976\u0153\x03\x02\x02\x02\u0977\u0978\x05\u0158\xAD\x02\u0978\u0155" +
		"\x03\x02\x02\x02\u0979\u097A\x05\u0158\xAD\x02\u097A\u0157\x03\x02\x02" +
		"\x02\u097B\u0980\x05\u0144\xA3\x02\u097C\u097D\x07\u018D\x02\x02\u097D" +
		"\u097F\x05\u0144\xA3\x02\u097E\u097C\x03\x02\x02\x02\u097F\u0982\x03\x02" +
		"\x02\x02\u0980\u0981\x03\x02\x02\x02\u0980\u097E\x03\x02\x02\x02\u0981" +
		"\u0159\x03\x02\x02\x02\u0982\u0980\x03\x02\x02\x02\u0983\u0984\x07\u0181" +
		"\x02\x02\u0984\u0985\x05\u0160\xB1\x02\u0985\u015B\x03\x02\x02\x02\u0986" +
		"\u0987\x07?\x02\x02\u0987\u0988\x07\u0134\x02\x02\u0988\u0989\x07\xFC" +
		"\x02\x02\u0989\u015D\x03\x02\x02\x02\u098A\u098B\x07?\x02\x02\u098B\u098C" +
		"\x07\xFC\x02\x02\u098C\u015F\x03\x02\x02\x02\u098D\u098E\x07\u0190\x02" +
		"\x02\u098E\u0993\x05\u0162\xB2\x02\u098F\u0990\x07\u0194\x02\x02\u0990" +
		"\u0992\x05\u0162\xB2\x02\u0991\u098F\x03\x02\x02\x02\u0992\u0995\x03\x02" +
		"\x02\x02\u0993\u0991\x03\x02\x02\x02\u0993\u0994\x03\x02\x02\x02\u0994" +
		"\u0996\x03\x02\x02\x02\u0995\u0993\x03\x02\x02\x02\u0996\u0997\x07\u0191" +
		"\x02\x02\u0997\u0161\x03\x02\x02\x02\u0998\u099D\x05\u0164\xB3\x02\u0999" +
		"\u099B\x07\u0189\x02\x02\u099A\u0999\x03\x02\x02\x02\u099A\u099B\x03\x02" +
		"\x02\x02\u099B\u099C\x03\x02\x02\x02\u099C\u099E\x05\u0166\xB4\x02\u099D" +
		"\u099A\x03\x02\x02\x02\u099D\u099E\x03\x02\x02\x02\u099E\u0163\x03\x02" +
		"\x02\x02\u099F\u09A3\x05\u0144\xA3\x02\u09A0\u09A3\x05\u0126\x94\x02\u09A1" +
		"\u09A3\x07\u01A5\x02\x02\u09A2\u099F\x03\x02\x02\x02\u09A2\u09A0\x03\x02" +
		"\x02\x02\u09A2\u09A1\x03\x02\x02\x02\u09A3\u0165\x03\x02\x02\x02\u09A4" +
		"\u09A9\x07\u01A6\x02\x02\u09A5\u09A9\x07\u01A7\x02\x02\u09A6\u09A9\x05" +
		"\u017A\xBE\x02\u09A7\u09A9\x07\u01A5\x02\x02\u09A8\u09A4\x03\x02\x02\x02" +
		"\u09A8\u09A5\x03\x02\x02\x02\u09A8\u09A6\x03\x02\x02\x02\u09A8\u09A7\x03" +
		"\x02\x02\x02\u09A9\u0167\x03\x02\x02\x02\u09AA\u09B1\x07\xBA\x02\x02\u09AB" +
		"\u09AC\x07\u0187\x02\x02\u09AC\u09B1\x07\u0187\x02\x02\u09AD\u09B1\x07" +
		"\u013C\x02\x02\u09AE\u09AF\x07\u0186\x02\x02\u09AF\u09B1\x07\u0186\x02" +
		"\x02\u09B0\u09AA\x03\x02\x02\x02\u09B0\u09AB\x03\x02\x02\x02\u09B0\u09AD" +
		"\x03\x02\x02\x02\u09B0\u09AE\x03\x02\x02\x02\u09B1\u0169\x03\x02\x02\x02" +
		"\u09B2\u09C1\x07\u0189\x02\x02\u09B3\u09C1\x07\u018A\x02\x02\u09B4\u09C1" +
		"\x07\u018B\x02\x02\u09B5\u09B6\x07\u018B\x02\x02\u09B6\u09C1\x07\u0189" +
		"\x02\x02\u09B7\u09B8\x07\u018A\x02\x02\u09B8\u09C1\x07\u0189\x02\x02\u09B9" +
		"\u09BA\x07\u018B\x02\x02\u09BA\u09C1\x07\u018A\x02\x02\u09BB\u09BC\x07" +
		"\u018C\x02\x02\u09BC\u09C1\x07\u0189\x02\x02\u09BD\u09BE\x07\u018B\x02" +
		"\x02\u09BE\u09BF\x07\u0189\x02\x02\u09BF\u09C1\x07\u018A\x02\x02\u09C0" +
		"\u09B2\x03\x02\x02\x02\u09C0\u09B3\x03\x02\x02\x02\u09C0\u09B4\x03\x02" +
		"\x02\x02\u09C0\u09B5\x03\x02\x02\x02\u09C0\u09B7\x03\x02\x02\x02\u09C0" +
		"\u09B9\x03\x02\x02\x02\u09C0\u09BB\x03\x02\x02\x02\u09C0\u09BD\x03\x02" +
		"\x02\x02\u09C1\u016B\x03\x02\x02\x02\u09C2\u09C3\x07\u018B\x02\x02\u09C3" +
		"\u09CA\x07\u018B\x02\x02\u09C4\u09C5\x07\u018A\x02\x02\u09C5\u09CA\x07" +
		"\u018A\x02\x02\u09C6\u09CA\x07\u0187\x02\x02\u09C7\u09CA\x07\u0188\x02" +
		"\x02\u09C8\u09CA\x07\u0186\x02\x02\u09C9\u09C2\x03\x02\x02\x02\u09C9\u09C4" +
		"\x03\x02\x02\x02\u09C9\u09C6\x03\x02\x02\x02\u09C9\u09C7\x03\x02\x02\x02" +
		"\u09C9\u09C8\x03\x02\x02\x02\u09CA\u016D\x03\x02\x02\x02\u09CB\u09CC\t" +
		")\x02\x02\u09CC\u016F\x03\x02\x02\x02\u09CD\u09CE\t*\x02\x02\u09CE\u0171" +
		"\x03\x02\x02\x02\u09CF\u09DE\x05\u012C\x97\x02\u09D0\u09DE\x05\u0174\xBB" +
		"\x02\u09D1\u09DE\x05\u0176\xBC\x02\u09D2\u09D4\x07\u019D\x02\x02\u09D3" +
		"\u09D2\x03\x02\x02\x02\u09D3\u09D4\x03\x02\x02\x02\u09D4\u09D5\x03\x02" +
		"\x02\x02\u09D5\u09DE\x05\u0178\xBD\x02\u09D6\u09DE\x05\u017A\xBE\x02\u09D7" +
		"\u09DE\x07\u01A7\x02\x02\u09D8\u09DE\x07\u01A8\x02\x02\u09D9\u09DB\x07" +
		"\u0134\x02\x02\u09DA\u09D9\x03\x02\x02\x02\u09DA\u09DB\x03\x02\x02\x02" +
		"\u09DB\u09DC\x03\x02\x02\x02\u09DC\u09DE\x07\u0136\x02\x02\u09DD\u09CF" +
		"\x03\x02\x02\x02\u09DD\u09D0\x03\x02\x02\x02\u09DD\u09D1\x03\x02\x02\x02" +
		"\u09DD\u09D3\x03\x02\x02\x02\u09DD\u09D6\x03\x02\x02\x02\u09DD\u09D7\x03" +
		"\x02\x02\x02\u09DD\u09D8\x03\x02\x02\x02\u09DD\u09DA\x03\x02\x02\x02\u09DE" +
		"\u0173\x03\x02\x02\x02\u09DF\u09E0\x05\u017E\xC0\x02\u09E0\u09E1\x05\u0176" +
		"\xBC\x02\u09E1\u0175\x03\x02\x02\x02\u09E2\u09E3\x07\u01A5\x02\x02\u09E3" +
		"\u0177\x03\x02\x02\x02\u09E4\u09E5\x07\u01A6\x02\x02\u09E5\u0179\x03\x02" +
		"\x02\x02\u09E6\u09E7\t+\x02\x02\u09E7\u017B\x03\x02\x02\x02\u09E8\u09E9" +
		"\t,\x02\x02\u09E9\u017D\x03\x02\x02\x02\u09EA\u09EB\t-\x02\x02\u09EB\u017F" +
		"\x03\x02\x02\x02\u09EC\u09ED\t.\x02\x02\u09ED\u0181\x03\x02\x02\x02\u09EE" +
		"\u09EF\t/\x02\x02\u09EF\u0183\x03\x02\x02\x02\u09F0\u09F1\t0\x02\x02\u09F1" +
		"\u0185\x03\x02\x02\x02\u09F2\u09F3\t1\x02\x02\u09F3\u0187\x03\x02\x02" +
		"\x02\u09F4\u09F5\t2\x02\x02\u09F5\u0189\x03\x02\x02\x02\u012C\u0193\u0195" +
		"\u01BB\u01CF\u01D3\u01DC\u01E1\u01E8\u01F3\u01FC\u0208\u020B\u0212\u021A" +
		"\u021F\u0222\u0229\u0231\u0235\u023E\u0246\u024A\u024E\u0252\u025B\u0260" +
		"\u0264\u0268\u026C\u026F\u0273\u0278\u027E\u0283\u0288\u028B\u028F\u0297" +
		"\u029F\u02A3\u02A7\u02AB\u02AF\u02B3\u02B7\u02BB\u02BF\u02C3\u02C7\u02CB" +
		"\u02CF\u02D3\u02D7\u02DB\u02DF\u02E3\u02E5\u02EF\u02F7\u0301\u0316\u031D" +
		"\u0323\u0326\u0329\u0333\u0336\u033E\u034A\u0362\u036F\u0374\u0378\u0380" +
		"\u0384\u038A\u0394\u0398\u039B\u039F\u03A3\u03A7\u03AA\u03B3\u03B7\u03BE" +
		"\u03C1\u03CB\u03D3\u03DB\u03E0\u03E7\u03EC\u03F0\u03F5\u03F9\u03FD\u0401" +
		"\u0404\u040B\u0411\u0414\u0419\u0424\u042A\u0433\u043D\u0445\u044F\u045A" +
		"\u0460\u0469\u0474\u047D\u0486\u048C\u0491\u0495\u04A4\u04B7\u04C2\u04C6" +
		"\u04CD\u04D2\u04D8\u04DC\u04E3\u04E7\u04EB\u04EF\u04F7\u04FB\u0504\u050A" +
		"\u0510\u0513\u0517\u0522\u052B\u0539\u0545\u0554\u0557\u055B\u055E\u0560" +
		"\u0565\u0569\u056C\u0570\u0579\u0582\u058C\u0591\u059D\u05A0\u05A3\u05A6" +
		"\u05AC\u05B0\u05B8\u05BB\u05C0\u05C3\u05C5\u05CB\u05D3\u05D7\u05E2\u05E7" +
		"\u05EF\u05F2\u05F5\u05FA\u05FE\u0601\u0604\u0609\u060F\u0612\u0614\u0619" +
		"\u061C\u0620\u0623\u0626\u0632\u0639\u0649\u0656\u0660\u067B\u0691\u06A3" +
		"\u06A8\u06B4\u06C1\u06CD\u06D9\u06DE\u06F9\u0701\u0705\u0708\u070B\u0712" +
		"\u0715\u0718\u071B\u071E\u0721\u0726\u0729\u0732\u0737\u073B\u0740\u0749" +
		"\u075C\u0764\u076C\u0770\u0774\u077E\u0798\u07A0\u07AC\u07C2\u07C4\u07CF" +
		"\u07D2\u07D4\u07D8\u07DC\u07E3\u07EC\u07F2\u07FF\u0806\u080B\u0811\u0818" +
		"\u081A\u081D\u0829\u082E\u0831\u0837\u0839\u083F\u0856\u0858\u0860\u0864" +
		"\u086D\u0871\u0881\u088A\u08A2\u08A9\u08AC\u08BA\u08BF\u08C8\u08D1\u08D7" +
		"\u08E0\u08EC\u08FA\u08FF\u0906\u0914\u0919\u091D\u0924\u0929\u0931\u0935" +
		"\u0938\u093C\u093F\u0943\u094C\u094F\u095A\u0961\u0980\u0993\u099A\u099D" +
		"\u09A2\u09A8\u09B0\u09C0\u09C9\u09D3\u09DA\u09DD";
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
	public replaceTable(): ReplaceTableContext | undefined {
		return this.tryGetRuleContext(0, ReplaceTableContext);
	}
	public truncateTable(): TruncateTableContext | undefined {
		return this.tryGetRuleContext(0, TruncateTableContext);
	}
	public alterTable(): AlterTableContext | undefined {
		return this.tryGetRuleContext(0, AlterTableContext);
	}
	public dropTable(): DropTableContext | undefined {
		return this.tryGetRuleContext(0, DropTableContext);
	}
	public createDatabase(): CreateDatabaseContext | undefined {
		return this.tryGetRuleContext(0, CreateDatabaseContext);
	}
	public alterDatabase(): AlterDatabaseContext | undefined {
		return this.tryGetRuleContext(0, AlterDatabaseContext);
	}
	public dropDatabase(): DropDatabaseContext | undefined {
		return this.tryGetRuleContext(0, DropDatabaseContext);
	}
	public createView(): CreateViewContext | undefined {
		return this.tryGetRuleContext(0, CreateViewContext);
	}
	public alertView(): AlertViewContext | undefined {
		return this.tryGetRuleContext(0, AlertViewContext);
	}
	public dropView(): DropViewContext | undefined {
		return this.tryGetRuleContext(0, DropViewContext);
	}
	public createFunction(): CreateFunctionContext | undefined {
		return this.tryGetRuleContext(0, CreateFunctionContext);
	}
	public alterFunction(): AlterFunctionContext | undefined {
		return this.tryGetRuleContext(0, AlterFunctionContext);
	}
	public dropFunction(): DropFunctionContext | undefined {
		return this.tryGetRuleContext(0, DropFunctionContext);
	}
	public createCatalog(): CreateCatalogContext | undefined {
		return this.tryGetRuleContext(0, CreateCatalogContext);
	}
	public dropCatalog(): DropCatalogContext | undefined {
		return this.tryGetRuleContext(0, DropCatalogContext);
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


export class ReplaceTableContext extends ParserRuleContext {
	public KW_REPLACE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_REPLACE, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_TABLE, 0); }
	public tablePathCreate(): TablePathCreateContext {
		return this.getRuleContext(0, TablePathCreateContext);
	}
	public withOption(): WithOptionContext {
		return this.getRuleContext(0, WithOptionContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_AS, 0); }
	public queryStatement(): QueryStatementContext | undefined {
		return this.tryGetRuleContext(0, QueryStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_replaceTable; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterReplaceTable) {
			listener.enterReplaceTable(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitReplaceTable) {
			listener.exitReplaceTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitReplaceTable) {
			return visitor.visitReplaceTable(this);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_alterTable; }
	public copyFrom(ctx: AlterTableContext): void {
		super.copyFrom(ctx);
	}
}
export class AlterContext extends AlterTableContext {
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
	constructor(ctx: AlterTableContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterAlter) {
			listener.enterAlter(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitAlter) {
			listener.exitAlter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitAlter) {
			return visitor.visitAlter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddOrModifyNewColumnContext extends AlterTableContext {
	public KW_ALTER(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_TABLE, 0); }
	public tablePath(): TablePathContext {
		return this.getRuleContext(0, TablePathContext);
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
	public KW_MODIFY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MODIFY, 0); }
	public KW_ADD(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ADD, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	public coloumPosition(): ColoumPositionContext[];
	public coloumPosition(i: number): ColoumPositionContext;
	public coloumPosition(i?: number): ColoumPositionContext | ColoumPositionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColoumPositionContext);
		} else {
			return this.getRuleContext(i, ColoumPositionContext);
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
	constructor(ctx: AlterTableContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterAddOrModifyNewColumn) {
			listener.enterAddOrModifyNewColumn(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitAddOrModifyNewColumn) {
			listener.exitAddOrModifyNewColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitAddOrModifyNewColumn) {
			return visitor.visitAddOrModifyNewColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddOrModifyNewColumnsContext extends AlterTableContext {
	public KW_ALTER(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_TABLE, 0); }
	public tablePath(): TablePathContext {
		return this.getRuleContext(0, TablePathContext);
	}
	public columnOptionDefinition(): ColumnOptionDefinitionContext {
		return this.getRuleContext(0, ColumnOptionDefinitionContext);
	}
	public KW_MODIFY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MODIFY, 0); }
	public KW_ADD(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ADD, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	public coloumPosition(): ColoumPositionContext | undefined {
		return this.tryGetRuleContext(0, ColoumPositionContext);
	}
	public commentSpec(): CommentSpecContext | undefined {
		return this.tryGetRuleContext(0, CommentSpecContext);
	}
	constructor(ctx: AlterTableContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterAddOrModifyNewColumns) {
			listener.enterAddOrModifyNewColumns(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitAddOrModifyNewColumns) {
			listener.exitAddOrModifyNewColumns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitAddOrModifyNewColumns) {
			return visitor.visitAddOrModifyNewColumns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddNewPartitionsContext extends AlterTableContext {
	public KW_ALTER(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_TABLE, 0); }
	public tablePath(): TablePathContext {
		return this.getRuleContext(0, TablePathContext);
	}
	public KW_ADD(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ADD, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	public KW_PARTITION(): TerminalNode[];
	public KW_PARTITION(i: number): TerminalNode;
	public KW_PARTITION(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.KW_PARTITION);
		} else {
			return this.getToken(FlinkSQLParser.KW_PARTITION, i);
		}
	}
	public tablePropertyList(): TablePropertyListContext[];
	public tablePropertyList(i: number): TablePropertyListContext;
	public tablePropertyList(i?: number): TablePropertyListContext | TablePropertyListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TablePropertyListContext);
		} else {
			return this.getRuleContext(i, TablePropertyListContext);
		}
	}
	public KW_WITH(): TerminalNode[];
	public KW_WITH(i: number): TerminalNode;
	public KW_WITH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.KW_WITH);
		} else {
			return this.getToken(FlinkSQLParser.KW_WITH, i);
		}
	}
	constructor(ctx: AlterTableContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterAddNewPartitions) {
			listener.enterAddNewPartitions(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitAddNewPartitions) {
			listener.exitAddNewPartitions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitAddNewPartitions) {
			return visitor.visitAddNewPartitions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropAcolumnContext extends AlterTableContext {
	public KW_ALTER(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_TABLE, 0); }
	public tablePath(): TablePathContext {
		return this.getRuleContext(0, TablePathContext);
	}
	public KW_DROP(): TerminalNode { return this.getToken(FlinkSQLParser.KW_DROP, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(ctx: AlterTableContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterDropAcolumn) {
			listener.enterDropAcolumn(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitDropAcolumn) {
			listener.exitDropAcolumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitDropAcolumn) {
			return visitor.visitDropAcolumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropColumnListContext extends AlterTableContext {
	public KW_ALTER(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_TABLE, 0); }
	public tablePath(): TablePathContext {
		return this.getRuleContext(0, TablePathContext);
	}
	public KW_DROP(): TerminalNode { return this.getToken(FlinkSQLParser.KW_DROP, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public uid(): UidContext[];
	public uid(i: number): UidContext;
	public uid(i?: number): UidContext | UidContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UidContext);
		} else {
			return this.getRuleContext(i, UidContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
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
	constructor(ctx: AlterTableContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterDropColumnList) {
			listener.enterDropColumnList(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitDropColumnList) {
			listener.exitDropColumnList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitDropColumnList) {
			return visitor.visitDropColumnList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropPrimaryKeyContext extends AlterTableContext {
	public KW_ALTER(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_TABLE, 0); }
	public tablePath(): TablePathContext {
		return this.getRuleContext(0, TablePathContext);
	}
	public KW_DROP(): TerminalNode { return this.getToken(FlinkSQLParser.KW_DROP, 0); }
	public KW_PRIMARY(): TerminalNode { return this.getToken(FlinkSQLParser.KW_PRIMARY, 0); }
	public KW_KEY(): TerminalNode { return this.getToken(FlinkSQLParser.KW_KEY, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(ctx: AlterTableContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterDropPrimaryKey) {
			listener.enterDropPrimaryKey(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitDropPrimaryKey) {
			listener.exitDropPrimaryKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitDropPrimaryKey) {
			return visitor.visitDropPrimaryKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropPartitionsContext extends AlterTableContext {
	public KW_ALTER(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_TABLE, 0); }
	public tablePath(): TablePathContext {
		return this.getRuleContext(0, TablePathContext);
	}
	public KW_DROP(): TerminalNode { return this.getToken(FlinkSQLParser.KW_DROP, 0); }
	public KW_PARTITION(): TerminalNode[];
	public KW_PARTITION(i: number): TerminalNode;
	public KW_PARTITION(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.KW_PARTITION);
		} else {
			return this.getToken(FlinkSQLParser.KW_PARTITION, i);
		}
	}
	public tablePropertyList(): TablePropertyListContext[];
	public tablePropertyList(i: number): TablePropertyListContext;
	public tablePropertyList(i?: number): TablePropertyListContext | TablePropertyListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TablePropertyListContext);
		} else {
			return this.getRuleContext(i, TablePropertyListContext);
		}
	}
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
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
	constructor(ctx: AlterTableContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterDropPartitions) {
			listener.enterDropPartitions(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitDropPartitions) {
			listener.exitDropPartitions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitDropPartitions) {
			return visitor.visitDropPartitions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropWatermarkContext extends AlterTableContext {
	public KW_ALTER(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_TABLE, 0); }
	public tablePath(): TablePathContext {
		return this.getRuleContext(0, TablePathContext);
	}
	public KW_DROP(): TerminalNode { return this.getToken(FlinkSQLParser.KW_DROP, 0); }
	public KW_WATERMARK(): TerminalNode { return this.getToken(FlinkSQLParser.KW_WATERMARK, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(ctx: AlterTableContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterDropWatermark) {
			listener.enterDropWatermark(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitDropWatermark) {
			listener.exitDropWatermark(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitDropWatermark) {
			return visitor.visitDropWatermark(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RenameColumnContext extends AlterTableContext {
	public KW_ALTER(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_TABLE, 0); }
	public tablePath(): TablePathContext {
		return this.getRuleContext(0, TablePathContext);
	}
	public KW_RENAME(): TerminalNode { return this.getToken(FlinkSQLParser.KW_RENAME, 0); }
	public uid(): UidContext[];
	public uid(i: number): UidContext;
	public uid(i?: number): UidContext | UidContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UidContext);
		} else {
			return this.getRuleContext(i, UidContext);
		}
	}
	public KW_TO(): TerminalNode { return this.getToken(FlinkSQLParser.KW_TO, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(ctx: AlterTableContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterRenameColumn) {
			listener.enterRenameColumn(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitRenameColumn) {
			listener.exitRenameColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitRenameColumn) {
			return visitor.visitRenameColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RenameTableContext extends AlterTableContext {
	public KW_ALTER(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_TABLE, 0); }
	public tablePath(): TablePathContext[];
	public tablePath(i: number): TablePathContext;
	public tablePath(i?: number): TablePathContext | TablePathContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TablePathContext);
		} else {
			return this.getRuleContext(i, TablePathContext);
		}
	}
	public KW_RENAME(): TerminalNode { return this.getToken(FlinkSQLParser.KW_RENAME, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(ctx: AlterTableContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterRenameTable) {
			listener.enterRenameTable(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitRenameTable) {
			listener.exitRenameTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitRenameTable) {
			return visitor.visitRenameTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetPropertiyContext extends AlterTableContext {
	public KW_ALTER(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_TABLE, 0); }
	public tablePath(): TablePathContext {
		return this.getRuleContext(0, TablePathContext);
	}
	public KW_SET(): TerminalNode { return this.getToken(FlinkSQLParser.KW_SET, 0); }
	public partitionDefinition(): PartitionDefinitionContext {
		return this.getRuleContext(0, PartitionDefinitionContext);
	}
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(ctx: AlterTableContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterSetPropertiy) {
			listener.enterSetPropertiy(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitSetPropertiy) {
			listener.exitSetPropertiy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitSetPropertiy) {
			return visitor.visitSetPropertiy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ResetPropertiyContext extends AlterTableContext {
	public KW_ALTER(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_TABLE, 0); }
	public tablePath(): TablePathContext {
		return this.getRuleContext(0, TablePathContext);
	}
	public KW_RESET(): TerminalNode { return this.getToken(FlinkSQLParser.KW_RESET, 0); }
	public transformList(): TransformListContext {
		return this.getRuleContext(0, TransformListContext);
	}
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(ctx: AlterTableContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterResetPropertiy) {
			listener.enterResetPropertiy(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitResetPropertiy) {
			listener.exitResetPropertiy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitResetPropertiy) {
			return visitor.visitResetPropertiy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColoumPositionContext extends ParserRuleContext {
	public KW_FIRST(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FIRST, 0); }
	public KW_LAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LAST, 0); }
	public uid(): UidContext | undefined {
		return this.tryGetRuleContext(0, UidContext);
	}
	public KW_BEFORE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_BEFORE, 0); }
	public KW_AFTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_AFTER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_coloumPosition; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterColoumPosition) {
			listener.enterColoumPosition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitColoumPosition) {
			listener.exitColoumPosition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitColoumPosition) {
			return visitor.visitColoumPosition(this);
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


export class TruncateTableContext extends ParserRuleContext {
	public KW_TRUNCATE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_TRUNCATE, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_TABLE, 0); }
	public tablePathCreate(): TablePathCreateContext {
		return this.getRuleContext(0, TablePathCreateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_truncateTable; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterTruncateTable) {
			listener.enterTruncateTable(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitTruncateTable) {
			listener.exitTruncateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitTruncateTable) {
			return visitor.visitTruncateTable(this);
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_AS, 0); }
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
	public dataTypeExpression(): DataTypeExpressionContext[];
	public dataTypeExpression(i: number): DataTypeExpressionContext;
	public dataTypeExpression(i?: number): DataTypeExpressionContext | DataTypeExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataTypeExpressionContext);
		} else {
			return this.getRuleContext(i, DataTypeExpressionContext);
		}
	}
	public RS_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RS_BRACKET, 0); }
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
	public dataTypeExpression(): DataTypeExpressionContext[];
	public dataTypeExpression(i: number): DataTypeExpressionContext;
	public dataTypeExpression(i?: number): DataTypeExpressionContext | DataTypeExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataTypeExpressionContext);
		} else {
			return this.getRuleContext(i, DataTypeExpressionContext);
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
	public KW_FIRST_VALUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FIRST_VALUE, 0); }
	public KW_GROUPING(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_GROUPING, 0); }
	public KW_HOUR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_HOUR, 0); }
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_IF, 0); }
	public KW_LEAD(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LEAD, 0); }
	public KW_LAG(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LAG, 0); }
	public KW_LAST_VALUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LAST_VALUE, 0); }
	public KW_LEFT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LEFT, 0); }
	public KW_NTILE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NTILE, 0); }
	public KW_MAP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MAP, 0); }
	public KW_MINUTE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MINUTE, 0); }
	public KW_MONTH(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MONTH, 0); }
	public KW_OVERLAY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_OVERLAY, 0); }
	public KW_POSITION(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_POSITION, 0); }
	public KW_PERCENT_RANK(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PERCENT_RANK, 0); }
	public KW_POWER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_POWER, 0); }
	public KW_QUARTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_QUARTER, 0); }
	public KW_RANK(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_RANK, 0); }
	public KW_ROW_NUMBER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ROW_NUMBER, 0); }
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
	public KW_CUME_DIST(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CUME_DIST, 0); }
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
	public KW_DENSE_RANK(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DENSE_RANK, 0); }
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
	public KW_FIRST_VALUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FIRST_VALUE, 0); }
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
	public KW_LAST_VALUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LAST_VALUE, 0); }
	public KW_LANGUAGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LANGUAGE, 0); }
	public KW_LATERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LATERAL, 0); }
	public KW_LEADING(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LEADING, 0); }
	public KW_LEAD(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LEAD, 0); }
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
	public KW_NTILE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_NTILE, 0); }
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
	public KW_PERCENT_RANK(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PERCENT_RANK, 0); }
	public KW_PERIOD(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PERIOD, 0); }
	public KW_POSITION(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_POSITION, 0); }
	public KW_PRIMARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PRIMARY, 0); }
	public KW_RANGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_RANGE, 0); }
	public KW_RANK(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_RANK, 0); }
	public KW_ROW_NUMBER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ROW_NUMBER, 0); }
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


