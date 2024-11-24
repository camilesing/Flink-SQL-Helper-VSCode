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
	public static readonly KW_COMPUTE = 20;
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
	public static readonly KW_GAP = 56;
	public static readonly KW_GO = 57;
	public static readonly KW_GOTO = 58;
	public static readonly KW_GRANTED = 59;
	public static readonly KW_HOP = 60;
	public static readonly KW_HOURS = 61;
	public static readonly KW_IF = 62;
	public static readonly KW_IGNORE = 63;
	public static readonly KW_INCREMENT = 64;
	public static readonly KW_INPUT = 65;
	public static readonly KW_INVOKER = 66;
	public static readonly KW_JAR = 67;
	public static readonly KW_JARS = 68;
	public static readonly KW_JAVA = 69;
	public static readonly KW_JSON = 70;
	public static readonly KW_JOB = 71;
	public static readonly KW_JOBS = 72;
	public static readonly KW_JSON_EXECUTION_PLAN = 73;
	public static readonly KW_KEY = 74;
	public static readonly KW_KEY_MEMBER = 75;
	public static readonly KW_KEY_TYPE = 76;
	public static readonly KW_LABEL = 77;
	public static readonly KW_LAST = 78;
	public static readonly KW_LENGTH = 79;
	public static readonly KW_LEVEL = 80;
	public static readonly KW_LOAD = 81;
	public static readonly KW_MAP = 82;
	public static readonly KW_MICROSECOND = 83;
	public static readonly KW_MILLENNIUM = 84;
	public static readonly KW_MILLISECOND = 85;
	public static readonly KW_MINUTES = 86;
	public static readonly KW_MINVALUE = 87;
	public static readonly KW_MODIFY = 88;
	public static readonly KW_MODULES = 89;
	public static readonly KW_MONTHS = 90;
	public static readonly KW_NANOSECOND = 91;
	public static readonly KW_NULLS = 92;
	public static readonly KW_NUMBER = 93;
	public static readonly KW_OPTION = 94;
	public static readonly KW_OPTIONS = 95;
	public static readonly KW_ORDERING = 96;
	public static readonly KW_OUTPUT = 97;
	public static readonly KW_OVERWRITE = 98;
	public static readonly KW_OVERWRITING = 99;
	public static readonly KW_PARTITIONED = 100;
	public static readonly KW_PARTITIONS = 101;
	public static readonly KW_PASSING = 102;
	public static readonly KW_PAST = 103;
	public static readonly KW_PATH = 104;
	public static readonly KW_PLACING = 105;
	public static readonly KW_PLAN = 106;
	public static readonly KW_PLAN_ADVICE = 107;
	public static readonly KW_PRECEDING = 108;
	public static readonly KW_PRESERVE = 109;
	public static readonly KW_PRIOR = 110;
	public static readonly KW_PROCEDURES = 111;
	public static readonly KW_PRIVILEGES = 112;
	public static readonly KW_PUBLIC = 113;
	public static readonly KW_PYTHON = 114;
	public static readonly KW_PYTHON_FILES = 115;
	public static readonly KW_PYTHON_REQUIREMENTS = 116;
	public static readonly KW_PYTHON_DEPENDENCIES = 117;
	public static readonly KW_PYTHON_JAR = 118;
	public static readonly KW_PYTHON_ARCHIVES = 119;
	public static readonly KW_PYTHON_PARAMETER = 120;
	public static readonly KW_QUARTER = 121;
	public static readonly KW_RAW = 122;
	public static readonly KW_READ = 123;
	public static readonly KW_RELATIVE = 124;
	public static readonly KW_REMOVE = 125;
	public static readonly KW_RENAME = 126;
	public static readonly KW_REPLACE = 127;
	public static readonly KW_RESPECT = 128;
	public static readonly KW_RESTART = 129;
	public static readonly KW_RESTRICT = 130;
	public static readonly KW_ROLE = 131;
	public static readonly KW_ROW_COUNT = 132;
	public static readonly KW_SCALA = 133;
	public static readonly KW_SCALAR = 134;
	public static readonly KW_SCALE = 135;
	public static readonly KW_SCHEMA = 136;
	public static readonly KW_SECONDS = 137;
	public static readonly KW_SECTION = 138;
	public static readonly KW_SECURITY = 139;
	public static readonly KW_SELF = 140;
	public static readonly KW_SEMI = 141;
	public static readonly KW_SERVER = 142;
	public static readonly KW_SERVER_NAME = 143;
	public static readonly KW_SESSION = 144;
	public static readonly KW_SETS = 145;
	public static readonly KW_SIMPLE = 146;
	public static readonly KW_SIZE = 147;
	public static readonly KW_SLIDE = 148;
	public static readonly KW_SOURCE = 149;
	public static readonly KW_SPACE = 150;
	public static readonly KW_STATE = 151;
	public static readonly KW_STATEMENT = 152;
	public static readonly KW_STATISTICS = 153;
	public static readonly KW_STEP = 154;
	public static readonly KW_STOP = 155;
	public static readonly KW_STRING = 156;
	public static readonly KW_STRUCTURE = 157;
	public static readonly KW_STYLE = 158;
	public static readonly KW_TABLES = 159;
	public static readonly KW_TEMPORARY = 160;
	public static readonly KW_TIMECOL = 161;
	public static readonly KW_FLOOR = 162;
	public static readonly KW_TIMESTAMP_LTZ = 163;
	public static readonly KW_TIMESTAMPADD = 164;
	public static readonly KW_TIMESTAMPDIFF = 165;
	public static readonly KW_TO_TIMESTAMP = 166;
	public static readonly KW_TRANSFORM = 167;
	public static readonly KW_TUMBLE = 168;
	public static readonly KW_TYPE = 169;
	public static readonly KW_UNDER = 170;
	public static readonly KW_UNLOAD = 171;
	public static readonly KW_USAGE = 172;
	public static readonly KW_USE = 173;
	public static readonly KW_UTF16 = 174;
	public static readonly KW_UTF32 = 175;
	public static readonly KW_UTF8 = 176;
	public static readonly KW_VERSION = 177;
	public static readonly KW_VIEW = 178;
	public static readonly KW_VIEWS = 179;
	public static readonly KW_VIRTUAL = 180;
	public static readonly KW_WATERMARK = 181;
	public static readonly KW_WATERMARKS = 182;
	public static readonly KW_WEEK = 183;
	public static readonly KW_WEEKS = 184;
	public static readonly KW_WORK = 185;
	public static readonly KW_WRAPPER = 186;
	public static readonly KW_YEARS = 187;
	public static readonly KW_ZONE = 188;
	public static readonly KW_ABS = 189;
	public static readonly KW_ALL = 190;
	public static readonly KW_ALLOW = 191;
	public static readonly KW_ALTER = 192;
	public static readonly KW_AND = 193;
	public static readonly KW_ANY = 194;
	public static readonly KW_ARE = 195;
	public static readonly KW_ARRAY = 196;
	public static readonly KW_AS = 197;
	public static readonly KW_ASYMMETRIC = 198;
	public static readonly KW_AT = 199;
	public static readonly KW_AVG = 200;
	public static readonly KW_BEGIN = 201;
	public static readonly KW_BETWEEN = 202;
	public static readonly KW_BIGINT = 203;
	public static readonly KW_BINARY = 204;
	public static readonly KW_BIT = 205;
	public static readonly KW_BLOB = 206;
	public static readonly KW_BOOLEAN = 207;
	public static readonly KW_BOTH = 208;
	public static readonly KW_BY = 209;
	public static readonly KW_CALL = 210;
	public static readonly KW_CALLED = 211;
	public static readonly KW_CASCADED = 212;
	public static readonly KW_CASE = 213;
	public static readonly KW_CAST = 214;
	public static readonly KW_CEIL = 215;
	public static readonly KW_CHAR = 216;
	public static readonly KW_CHARACTER = 217;
	public static readonly KW_CHECK = 218;
	public static readonly KW_CLOB = 219;
	public static readonly KW_CLOSE = 220;
	public static readonly KW_CLUSTER = 221;
	public static readonly KW_COALESCE = 222;
	public static readonly KW_COLLATE = 223;
	public static readonly KW_COLLECT = 224;
	public static readonly KW_COLUMN = 225;
	public static readonly KW_COMMIT = 226;
	public static readonly KW_CONNECT = 227;
	public static readonly KW_CONSTRAINT = 228;
	public static readonly KW_CONTAINS = 229;
	public static readonly KW_CONVERT = 230;
	public static readonly KW_COUNT = 231;
	public static readonly KW_CREATE = 232;
	public static readonly KW_CROSS = 233;
	public static readonly KW_CUBE = 234;
	public static readonly KW_CUME_DIST = 235;
	public static readonly KW_CURRENT = 236;
	public static readonly KW_CURSOR = 237;
	public static readonly KW_CYCLE = 238;
	public static readonly KW_DATE = 239;
	public static readonly KW_DATETIME = 240;
	public static readonly KW_DAY = 241;
	public static readonly KW_DEC = 242;
	public static readonly KW_DECIMAL = 243;
	public static readonly KW_DECLARE = 244;
	public static readonly KW_DEFAULT = 245;
	public static readonly KW_DEFINE = 246;
	public static readonly KW_DELIMITED = 247;
	public static readonly KW_DELETE = 248;
	public static readonly KW_DESCRIBE = 249;
	public static readonly KW_DENSE_RANK = 250;
	public static readonly KW_DISTINCT = 251;
	public static readonly KW_DISTRIBUTE = 252;
	public static readonly KW_DOUBLE = 253;
	public static readonly KW_DROP = 254;
	public static readonly KW_DRAIN = 255;
	public static readonly KW_EACH = 256;
	public static readonly KW_ELSE = 257;
	public static readonly KW_END = 258;
	public static readonly KW_EQUALS = 259;
	public static readonly KW_ESCAPE = 260;
	public static readonly KW_EXCEPT = 261;
	public static readonly KW_EXECUTE = 262;
	public static readonly KW_EXISTS = 263;
	public static readonly KW_EXPLAIN = 264;
	public static readonly KW_EXTERNAL = 265;
	public static readonly KW_EXTRACT = 266;
	public static readonly KW_FIRST_VALUE = 267;
	public static readonly KW_FALSE = 268;
	public static readonly KW_FIELDS = 269;
	public static readonly KW_FLOAT = 270;
	public static readonly KW_FOR = 271;
	public static readonly KW_FROM = 272;
	public static readonly KW_FROM_UNIXTIME = 273;
	public static readonly KW_FULL = 274;
	public static readonly KW_FUNCTION = 275;
	public static readonly KW_GLOBAL = 276;
	public static readonly KW_GRANT = 277;
	public static readonly KW_GROUP = 278;
	public static readonly KW_GROUPING = 279;
	public static readonly KW_GROUPS = 280;
	public static readonly KW_HAVING = 281;
	public static readonly KW_HOUR = 282;
	public static readonly KW_IMPORT = 283;
	public static readonly KW_IN = 284;
	public static readonly KW_INCLUDING = 285;
	public static readonly KW_INNER = 286;
	public static readonly KW_INOUT = 287;
	public static readonly KW_INSERT = 288;
	public static readonly KW_INT = 289;
	public static readonly KW_INTEGER = 290;
	public static readonly KW_INTERSECT = 291;
	public static readonly KW_INTERVAL = 292;
	public static readonly KW_INTO = 293;
	public static readonly KW_IS = 294;
	public static readonly KW_JOIN = 295;
	public static readonly KW_LAG = 296;
	public static readonly KW_LANGUAGE = 297;
	public static readonly KW_LATERAL = 298;
	public static readonly KW_LAST_VALUE = 299;
	public static readonly KW_LEAD = 300;
	public static readonly KW_LEADING = 301;
	public static readonly KW_LEFT = 302;
	public static readonly KW_LIKE = 303;
	public static readonly KW_LINES = 304;
	public static readonly KW_LIMIT = 305;
	public static readonly KW_LOCAL = 306;
	public static readonly KW_LOCALTIMESTAMP = 307;
	public static readonly KW_MATCH = 308;
	public static readonly KW_MATCH_RECOGNIZE = 309;
	public static readonly KW_MEASURES = 310;
	public static readonly KW_MERGE = 311;
	public static readonly KW_METADATA = 312;
	public static readonly KW_MINUS = 313;
	public static readonly KW_MINUTE = 314;
	public static readonly KW_MODIFIES = 315;
	public static readonly KW_MODULE = 316;
	public static readonly KW_MONTH = 317;
	public static readonly KW_MULTISET = 318;
	public static readonly KW_NATURAL = 319;
	public static readonly KW_NEXT = 320;
	public static readonly KW_NO = 321;
	public static readonly KW_NONE = 322;
	public static readonly KW_NOT = 323;
	public static readonly KW_NTILE = 324;
	public static readonly KW_NULL = 325;
	public static readonly KW_NUMERIC = 326;
	public static readonly KW_OF = 327;
	public static readonly KW_OFFSET = 328;
	public static readonly KW_ON = 329;
	public static readonly KW_ONE = 330;
	public static readonly KW_OR = 331;
	public static readonly KW_ORDER = 332;
	public static readonly KW_OUT = 333;
	public static readonly KW_OUTER = 334;
	public static readonly KW_OVER = 335;
	public static readonly KW_OVERLAY = 336;
	public static readonly KW_PARTITION = 337;
	public static readonly KW_PATTERN = 338;
	public static readonly KW_PER = 339;
	public static readonly KW_PERCENT = 340;
	public static readonly KW_PERCENT_RANK = 341;
	public static readonly KW_PERIOD = 342;
	public static readonly KW_POSITION = 343;
	public static readonly KW_POWER = 344;
	public static readonly KW_PRIMARY = 345;
	public static readonly KW_RANGE = 346;
	public static readonly KW_ROW_NUMBER = 347;
	public static readonly KW_RANK = 348;
	public static readonly KW_RESET = 349;
	public static readonly KW_REVOKE = 350;
	public static readonly KW_RIGHT = 351;
	public static readonly KW_RLIKE = 352;
	public static readonly KW_ROLLBACK = 353;
	public static readonly KW_ROLLUP = 354;
	public static readonly KW_ROW = 355;
	public static readonly KW_ROWS = 356;
	public static readonly KW_SAVEPOINT = 357;
	public static readonly KW_SECOND = 358;
	public static readonly KW_SELECT = 359;
	public static readonly KW_SET = 360;
	public static readonly KW_SHOW = 361;
	public static readonly KW_SIMILAR = 362;
	public static readonly KW_SORT = 363;
	public static readonly KW_SKIP = 364;
	public static readonly KW_SMALLINT = 365;
	public static readonly KW_START = 366;
	public static readonly KW_STATIC = 367;
	public static readonly KW_SUBSTRING = 368;
	public static readonly KW_SUM = 369;
	public static readonly KW_SYMMETRIC = 370;
	public static readonly KW_SYSTEM = 371;
	public static readonly KW_SYSTEM_TIME = 372;
	public static readonly KW_SYSTEM_USER = 373;
	public static readonly KW_TABLE = 374;
	public static readonly KW_TABLESAMPLE = 375;
	public static readonly KW_TERMINATED = 376;
	public static readonly KW_THEN = 377;
	public static readonly KW_TIME = 378;
	public static readonly KW_TIMESTAMP = 379;
	public static readonly KW_TIMESTAMP_3 = 380;
	public static readonly KW_TIMESTAMP_6 = 381;
	public static readonly KW_TIMESTAMP_9 = 382;
	public static readonly KW_TINYINT = 383;
	public static readonly KW_TO = 384;
	public static readonly KW_TRAILING = 385;
	public static readonly KW_TRUE = 386;
	public static readonly KW_TRUNCATE = 387;
	public static readonly KW_UNION = 388;
	public static readonly KW_UNIQUE = 389;
	public static readonly KW_UNKNOWN = 390;
	public static readonly KW_UNNEST = 391;
	public static readonly KW_UPDATE = 392;
	public static readonly KW_UPPER = 393;
	public static readonly KW_UPSERT = 394;
	public static readonly KW_USER = 395;
	public static readonly KW_USING = 396;
	public static readonly KW_VALUE = 397;
	public static readonly KW_VALUES = 398;
	public static readonly KW_VARBINARY = 399;
	public static readonly KW_VARCHAR = 400;
	public static readonly KW_WHEN = 401;
	public static readonly KW_WHERE = 402;
	public static readonly KW_WINDOW = 403;
	public static readonly KW_WITH = 404;
	public static readonly KW_WITHIN = 405;
	public static readonly KW_WITHOUT = 406;
	public static readonly KW_YEAR = 407;
	public static readonly KW_MATERIALIZED = 408;
	public static readonly KW_FRESHNESS = 409;
	public static readonly KW_REFRESH_MODE = 410;
	public static readonly KW_CONTINUOUS = 411;
	public static readonly KW_SERDE = 412;
	public static readonly KW_SERDEPROPERTIES = 413;
	public static readonly KW_SUSPEND = 414;
	public static readonly KW_RESUME = 415;
	public static readonly KW_REFRESH = 416;
	public static readonly KW_DISTRIBUTED = 417;
	public static readonly KW_DISTRIBUTION = 418;
	public static readonly KW_HASH = 419;
	public static readonly KW_BUCKETS = 420;
	public static readonly BIT_NOT_OP = 421;
	public static readonly BIT_OR_OP = 422;
	public static readonly BIT_AND_OP = 423;
	public static readonly BIT_XOR_OP = 424;
	public static readonly EQUAL_SYMBOL = 425;
	public static readonly GREATER_SYMBOL = 426;
	public static readonly LESS_SYMBOL = 427;
	public static readonly EXCLAMATION_SYMBOL = 428;
	public static readonly DOT = 429;
	public static readonly LS_BRACKET = 430;
	public static readonly RS_BRACKET = 431;
	public static readonly LR_BRACKET = 432;
	public static readonly RR_BRACKET = 433;
	public static readonly LB_BRACKET = 434;
	public static readonly RB_BRACKET = 435;
	public static readonly COMMA = 436;
	public static readonly SEMICOLON = 437;
	public static readonly AT_SIGN = 438;
	public static readonly DOLLAR = 439;
	public static readonly SINGLE_QUOTE_SYMB = 440;
	public static readonly DOUBLE_QUOTE_SYMB = 441;
	public static readonly REVERSE_QUOTE_SYMB = 442;
	public static readonly COLON_SYMB = 443;
	public static readonly ASTERISK_SIGN = 444;
	public static readonly UNDERLINE_SIGN = 445;
	public static readonly HYPNEN_SIGN = 446;
	public static readonly ADD_SIGN = 447;
	public static readonly PENCENT_SIGN = 448;
	public static readonly DOUBLE_VERTICAL_SIGN = 449;
	public static readonly DOUBLE_HYPNEN_SIGN = 450;
	public static readonly SLASH_SIGN = 451;
	public static readonly QUESTION_MARK_SIGN = 452;
	public static readonly DOUBLE_RIGHT_ARROW = 453;
	public static readonly STRING_LITERAL = 454;
	public static readonly DIG_LITERAL = 455;
	public static readonly REAL_LITERAL = 456;
	public static readonly ID_LITERAL = 457;
	public static readonly RULE_statement = 0;
	public static readonly RULE_sqlStatements = 1;
	public static readonly RULE_sqlStatement = 2;
	public static readonly RULE_emptyStatement = 3;
	public static readonly RULE_ddlStatement = 4;
	public static readonly RULE_createStatement = 5;
	public static readonly RULE_dmlStatement = 6;
	public static readonly RULE_createTable = 7;
	public static readonly RULE_simpleCreateTable = 8;
	public static readonly RULE_likeCreateTable = 9;
	public static readonly RULE_createTableAsSelect = 10;
	public static readonly RULE_usingClause = 11;
	public static readonly RULE_jarFileName = 12;
	public static readonly RULE_alterTable = 13;
	public static readonly RULE_columnPosition = 14;
	public static readonly RULE_renameDefinition = 15;
	public static readonly RULE_setKeyValueDefinition = 16;
	public static readonly RULE_addConstraint = 17;
	public static readonly RULE_dropConstraint = 18;
	public static readonly RULE_addUnique = 19;
	public static readonly RULE_notForced = 20;
	public static readonly RULE_alertView = 21;
	public static readonly RULE_alterCatalog = 22;
	public static readonly RULE_alterDatabase = 23;
	public static readonly RULE_alterFunction = 24;
	public static readonly RULE_dropCatalog = 25;
	public static readonly RULE_dropTable = 26;
	public static readonly RULE_dropDatabase = 27;
	public static readonly RULE_dropView = 28;
	public static readonly RULE_dropFunction = 29;
	public static readonly RULE_insertStatement = 30;
	public static readonly RULE_insertSimpleStatement = 31;
	public static readonly RULE_insertPartitionDefinition = 32;
	public static readonly RULE_queryStatement = 33;
	public static readonly RULE_valuesCaluse = 34;
	public static readonly RULE_withItem = 35;
	public static readonly RULE_withItemName = 36;
	public static readonly RULE_groupByClause = 37;
	public static readonly RULE_selectClause = 38;
	public static readonly RULE_projectItemDefinition = 39;
	public static readonly RULE_overWindowItem = 40;
	public static readonly RULE_fromClause = 41;
	public static readonly RULE_tableExpression = 42;
	public static readonly RULE_flinkJoinOp = 43;
	public static readonly RULE_tableReference = 44;
	public static readonly RULE_tablePrimary = 45;
	public static readonly RULE_timePeriod = 46;
	public static readonly RULE_dateTimeExpression = 47;
	public static readonly RULE_inlineDataValueClause = 48;
	public static readonly RULE_windowTVFClause = 49;
	public static readonly RULE_windowTVFExpression = 50;
	public static readonly RULE_tumableExpression = 51;
	public static readonly RULE_hopExpression = 52;
	public static readonly RULE_cumulateExpression = 53;
	public static readonly RULE_sessionExpression = 54;
	public static readonly RULE_windowTVFName = 55;
	public static readonly RULE_windowTVFParam = 56;
	public static readonly RULE_timeIntervalParamName = 57;
	public static readonly RULE_columnDescriptor = 58;
	public static readonly RULE_joinCondition = 59;
	public static readonly RULE_whereClause = 60;
	public static readonly RULE_groupItemDefinition = 61;
	public static readonly RULE_groupingSets = 62;
	public static readonly RULE_groupingSetsNotionName = 63;
	public static readonly RULE_groupWindowFunction = 64;
	public static readonly RULE_groupWindowFunctionName = 65;
	public static readonly RULE_timeAttrColumn = 66;
	public static readonly RULE_havingClause = 67;
	public static readonly RULE_windowClause = 68;
	public static readonly RULE_namedWindow = 69;
	public static readonly RULE_windowSpec = 70;
	public static readonly RULE_matchRecognizeClause = 71;
	public static readonly RULE_orderByCaluse = 72;
	public static readonly RULE_orderItemDefinition = 73;
	public static readonly RULE_limitClause = 74;
	public static readonly RULE_partitionByClause = 75;
	public static readonly RULE_quantifiers = 76;
	public static readonly RULE_measuresClause = 77;
	public static readonly RULE_patternDefinition = 78;
	public static readonly RULE_patternVariable = 79;
	public static readonly RULE_outputMode = 80;
	public static readonly RULE_afterMatchStrategy = 81;
	public static readonly RULE_patternVariablesDefinition = 82;
	public static readonly RULE_windowFrame = 83;
	public static readonly RULE_frameBound = 84;
	public static readonly RULE_withinClause = 85;
	public static readonly RULE_analyzePartitionDefinition = 86;
	public static readonly RULE_selfDefinitionClause = 87;
	public static readonly RULE_partitionDefinition = 88;
	public static readonly RULE_transformList = 89;
	public static readonly RULE_transform = 90;
	public static readonly RULE_transformArgument = 91;
	public static readonly RULE_likeDefinition = 92;
	public static readonly RULE_distributed = 93;
	public static readonly RULE_distribution = 94;
	public static readonly RULE_likeOption = 95;
	public static readonly RULE_columnOptionDefinition = 96;
	public static readonly RULE_physicalColumnDefinition = 97;
	public static readonly RULE_computedColumnExpression = 98;
	public static readonly RULE_watermarkDefinition = 99;
	public static readonly RULE_tableConstraint = 100;
	public static readonly RULE_constraintName = 101;
	public static readonly RULE_valuesDefinition = 102;
	public static readonly RULE_valuesRowDefinition = 103;
	public static readonly RULE_lengthOneDimension = 104;
	public static readonly RULE_lengthTwoOptionalDimension = 105;
	public static readonly RULE_lengthTwoStringDimension = 106;
	public static readonly RULE_lengthOneTypeDimension = 107;
	public static readonly RULE_mapTypeDimension = 108;
	public static readonly RULE_rowTypeDimension = 109;
	public static readonly RULE_columnConstraint = 110;
	public static readonly RULE_commentSpec = 111;
	public static readonly RULE_metadataColumnDefinition = 112;
	public static readonly RULE_metadataKey = 113;
	public static readonly RULE_computedColumnDefinition = 114;
	public static readonly RULE_columnName = 115;
	public static readonly RULE_columnNameList = 116;
	public static readonly RULE_columnType = 117;
	public static readonly RULE_expression = 118;
	public static readonly RULE_booleanExpression = 119;
	public static readonly RULE_predicate = 120;
	public static readonly RULE_likePredicate = 121;
	public static readonly RULE_valueExpression = 122;
	public static readonly RULE_primaryExpression = 123;
	public static readonly RULE_complexDataTypeExpression = 124;
	public static readonly RULE_arrayExpression = 125;
	public static readonly RULE_rowExpression = 126;
	public static readonly RULE_mapExpression = 127;
	public static readonly RULE_dataTypeExpression = 128;
	public static readonly RULE_functionName = 129;
	public static readonly RULE_functionParam = 130;
	public static readonly RULE_filterClause = 131;
	public static readonly RULE_dereferenceDefinition = 132;
	public static readonly RULE_correlationName = 133;
	public static readonly RULE_qualifiedName = 134;
	public static readonly RULE_timeIntervalExpression = 135;
	public static readonly RULE_errorCapturingMultiUnitsInterval = 136;
	public static readonly RULE_multiUnitsInterval = 137;
	public static readonly RULE_errorCapturingUnitToUnitInterval = 138;
	public static readonly RULE_unitToUnitInterval = 139;
	public static readonly RULE_intervalValue = 140;
	public static readonly RULE_columnAlias = 141;
	public static readonly RULE_tableAlias = 142;
	public static readonly RULE_errorCapturingIdentifier = 143;
	public static readonly RULE_errorCapturingIdentifierExtra = 144;
	public static readonly RULE_identifierList = 145;
	public static readonly RULE_identifierSeq = 146;
	public static readonly RULE_identifier = 147;
	public static readonly RULE_refVar = 148;
	public static readonly RULE_unquotedIdentifier = 149;
	public static readonly RULE_quotedIdentifier = 150;
	public static readonly RULE_whenClause = 151;
	public static readonly RULE_catalogPath = 152;
	public static readonly RULE_databasePath = 153;
	public static readonly RULE_databasePathCreate = 154;
	public static readonly RULE_tablePathCreate = 155;
	public static readonly RULE_tablePath = 156;
	public static readonly RULE_uid = 157;
	public static readonly RULE_withOption = 158;
	public static readonly RULE_ifNotExists = 159;
	public static readonly RULE_ifExists = 160;
	public static readonly RULE_tableCanHasKeyPropertyList = 161;
	public static readonly RULE_tablePropertyList = 162;
	public static readonly RULE_tableProperty = 163;
	public static readonly RULE_tablePropertyKey = 164;
	public static readonly RULE_tablePropertyValue = 165;
	public static readonly RULE_comparisonOperator = 166;
	public static readonly RULE_constant = 167;
	public static readonly RULE_timePointLiteral = 168;
	public static readonly RULE_stringLiteral = 169;
	public static readonly RULE_decimalLiteral = 170;
	public static readonly RULE_booleanLiteral = 171;
	public static readonly RULE_setQuantifier = 172;
	public static readonly RULE_timePointUnit = 173;
	public static readonly RULE_timeIntervalUnit = 174;
	public static readonly RULE_reservedKeywordsUsedAsFuncParam = 175;
	public static readonly RULE_reservedKeywordsUsedAsFuncName = 176;
	public static readonly RULE_nonReservedKeywords = 177;
	public static readonly RULE_selectStatement = 178;
	public static readonly RULE_joinOp = 179;
	public static readonly RULE_tableExpressionPlus = 180;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"statement", "sqlStatements", "sqlStatement", "emptyStatement", "ddlStatement", 
		"createStatement", "dmlStatement", "createTable", "simpleCreateTable", 
		"likeCreateTable", "createTableAsSelect", "usingClause", "jarFileName", 
		"alterTable", "columnPosition", "renameDefinition", "setKeyValueDefinition", 
		"addConstraint", "dropConstraint", "addUnique", "notForced", "alertView", 
		"alterCatalog", "alterDatabase", "alterFunction", "dropCatalog", "dropTable", 
		"dropDatabase", "dropView", "dropFunction", "insertStatement", "insertSimpleStatement", 
		"insertPartitionDefinition", "queryStatement", "valuesCaluse", "withItem", 
		"withItemName", "groupByClause", "selectClause", "projectItemDefinition", 
		"overWindowItem", "fromClause", "tableExpression", "flinkJoinOp", "tableReference", 
		"tablePrimary", "timePeriod", "dateTimeExpression", "inlineDataValueClause", 
		"windowTVFClause", "windowTVFExpression", "tumableExpression", "hopExpression", 
		"cumulateExpression", "sessionExpression", "windowTVFName", "windowTVFParam", 
		"timeIntervalParamName", "columnDescriptor", "joinCondition", "whereClause", 
		"groupItemDefinition", "groupingSets", "groupingSetsNotionName", "groupWindowFunction", 
		"groupWindowFunctionName", "timeAttrColumn", "havingClause", "windowClause", 
		"namedWindow", "windowSpec", "matchRecognizeClause", "orderByCaluse", 
		"orderItemDefinition", "limitClause", "partitionByClause", "quantifiers", 
		"measuresClause", "patternDefinition", "patternVariable", "outputMode", 
		"afterMatchStrategy", "patternVariablesDefinition", "windowFrame", "frameBound", 
		"withinClause", "analyzePartitionDefinition", "selfDefinitionClause", 
		"partitionDefinition", "transformList", "transform", "transformArgument", 
		"likeDefinition", "distributed", "distribution", "likeOption", "columnOptionDefinition", 
		"physicalColumnDefinition", "computedColumnExpression", "watermarkDefinition", 
		"tableConstraint", "constraintName", "valuesDefinition", "valuesRowDefinition", 
		"lengthOneDimension", "lengthTwoOptionalDimension", "lengthTwoStringDimension", 
		"lengthOneTypeDimension", "mapTypeDimension", "rowTypeDimension", "columnConstraint", 
		"commentSpec", "metadataColumnDefinition", "metadataKey", "computedColumnDefinition", 
		"columnName", "columnNameList", "columnType", "expression", "booleanExpression", 
		"predicate", "likePredicate", "valueExpression", "primaryExpression", 
		"complexDataTypeExpression", "arrayExpression", "rowExpression", "mapExpression", 
		"dataTypeExpression", "functionName", "functionParam", "filterClause", 
		"dereferenceDefinition", "correlationName", "qualifiedName", "timeIntervalExpression", 
		"errorCapturingMultiUnitsInterval", "multiUnitsInterval", "errorCapturingUnitToUnitInterval", 
		"unitToUnitInterval", "intervalValue", "columnAlias", "tableAlias", "errorCapturingIdentifier", 
		"errorCapturingIdentifierExtra", "identifierList", "identifierSeq", "identifier", 
		"refVar", "unquotedIdentifier", "quotedIdentifier", "whenClause", "catalogPath", 
		"databasePath", "databasePathCreate", "tablePathCreate", "tablePath", 
		"uid", "withOption", "ifNotExists", "ifExists", "tableCanHasKeyPropertyList", 
		"tablePropertyList", "tableProperty", "tablePropertyKey", "tablePropertyValue", 
		"comparisonOperator", "constant", "timePointLiteral", "stringLiteral", 
		"decimalLiteral", "booleanLiteral", "setQuantifier", "timePointUnit", 
		"timeIntervalUnit", "reservedKeywordsUsedAsFuncParam", "reservedKeywordsUsedAsFuncName", 
		"nonReservedKeywords", "selectStatement", "joinOp", "tableExpressionPlus",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
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
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'~'", "'|'", "'&'", "'^'", "'='", "'>'", "'<'", "'!'", "'.'", 
		"'['", "']'", "'('", "')'", "'{'", "'}'", "','", "';'", "'@'", "'$'", 
		"'''", "'\"'", "'`'", "':'", "'*'", "'_'", "'-'", "'+'", "'%'", undefined, 
		undefined, "'/'", "'?'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SPACE", "COMMENT_INPUT", "LINE_COMMENT", "KW_ADD", "KW_ADMIN", 
		"KW_AFTER", "KW_ANALYZE", "KW_ASC", "KW_BEFORE", "KW_BYTES", "KW_CASCADE", 
		"KW_CATALOG", "KW_CATALOGS", "KW_CENTURY", "KW_CHAIN", "KW_CHANGELOG_MODE", 
		"KW_CHARACTERS", "KW_COMMENT", "KW_COMPACT", "KW_COMPUTE", "KW_COLUMNS", 
		"KW_CONSTRAINTS", "KW_CONSTRUCTOR", "KW_CUMULATE", "KW_DATA", "KW_DATABASE", 
		"KW_DATABASES", "KW_DAYS", "KW_DECADE", "KW_DEFINED", "KW_DESC", "KW_DESCRIPTOR", 
		"KW_DIV", "KW_ENCODING", "KW_ENFORCED", "KW_ENGINE", "KW_EPOCH", "KW_ERROR", 
		"KW_ESTIMATED_COST", "KW_EXCEPTION", "KW_EXCLUDE", "KW_EXCLUDING", "KW_EXTENDED", 
		"KW_FILTER", "KW_FILE", "KW_FINAL", "KW_FIRST", "KW_FOLLOWING", "KW_FORMAT", 
		"KW_FORTRAN", "KW_FOUND", "KW_FRAC_SECOND", "KW_FUNCTIONS", "KW_GENERAL", 
		"KW_GENERATED", "KW_GAP", "KW_GO", "KW_GOTO", "KW_GRANTED", "KW_HOP", 
		"KW_HOURS", "KW_IF", "KW_IGNORE", "KW_INCREMENT", "KW_INPUT", "KW_INVOKER", 
		"KW_JAR", "KW_JARS", "KW_JAVA", "KW_JSON", "KW_JOB", "KW_JOBS", "KW_JSON_EXECUTION_PLAN", 
		"KW_KEY", "KW_KEY_MEMBER", "KW_KEY_TYPE", "KW_LABEL", "KW_LAST", "KW_LENGTH", 
		"KW_LEVEL", "KW_LOAD", "KW_MAP", "KW_MICROSECOND", "KW_MILLENNIUM", "KW_MILLISECOND", 
		"KW_MINUTES", "KW_MINVALUE", "KW_MODIFY", "KW_MODULES", "KW_MONTHS", "KW_NANOSECOND", 
		"KW_NULLS", "KW_NUMBER", "KW_OPTION", "KW_OPTIONS", "KW_ORDERING", "KW_OUTPUT", 
		"KW_OVERWRITE", "KW_OVERWRITING", "KW_PARTITIONED", "KW_PARTITIONS", "KW_PASSING", 
		"KW_PAST", "KW_PATH", "KW_PLACING", "KW_PLAN", "KW_PLAN_ADVICE", "KW_PRECEDING", 
		"KW_PRESERVE", "KW_PRIOR", "KW_PROCEDURES", "KW_PRIVILEGES", "KW_PUBLIC", 
		"KW_PYTHON", "KW_PYTHON_FILES", "KW_PYTHON_REQUIREMENTS", "KW_PYTHON_DEPENDENCIES", 
		"KW_PYTHON_JAR", "KW_PYTHON_ARCHIVES", "KW_PYTHON_PARAMETER", "KW_QUARTER", 
		"KW_RAW", "KW_READ", "KW_RELATIVE", "KW_REMOVE", "KW_RENAME", "KW_REPLACE", 
		"KW_RESPECT", "KW_RESTART", "KW_RESTRICT", "KW_ROLE", "KW_ROW_COUNT", 
		"KW_SCALA", "KW_SCALAR", "KW_SCALE", "KW_SCHEMA", "KW_SECONDS", "KW_SECTION", 
		"KW_SECURITY", "KW_SELF", "KW_SEMI", "KW_SERVER", "KW_SERVER_NAME", "KW_SESSION", 
		"KW_SETS", "KW_SIMPLE", "KW_SIZE", "KW_SLIDE", "KW_SOURCE", "KW_SPACE", 
		"KW_STATE", "KW_STATEMENT", "KW_STATISTICS", "KW_STEP", "KW_STOP", "KW_STRING", 
		"KW_STRUCTURE", "KW_STYLE", "KW_TABLES", "KW_TEMPORARY", "KW_TIMECOL", 
		"KW_FLOOR", "KW_TIMESTAMP_LTZ", "KW_TIMESTAMPADD", "KW_TIMESTAMPDIFF", 
		"KW_TO_TIMESTAMP", "KW_TRANSFORM", "KW_TUMBLE", "KW_TYPE", "KW_UNDER", 
		"KW_UNLOAD", "KW_USAGE", "KW_USE", "KW_UTF16", "KW_UTF32", "KW_UTF8", 
		"KW_VERSION", "KW_VIEW", "KW_VIEWS", "KW_VIRTUAL", "KW_WATERMARK", "KW_WATERMARKS", 
		"KW_WEEK", "KW_WEEKS", "KW_WORK", "KW_WRAPPER", "KW_YEARS", "KW_ZONE", 
		"KW_ABS", "KW_ALL", "KW_ALLOW", "KW_ALTER", "KW_AND", "KW_ANY", "KW_ARE", 
		"KW_ARRAY", "KW_AS", "KW_ASYMMETRIC", "KW_AT", "KW_AVG", "KW_BEGIN", "KW_BETWEEN", 
		"KW_BIGINT", "KW_BINARY", "KW_BIT", "KW_BLOB", "KW_BOOLEAN", "KW_BOTH", 
		"KW_BY", "KW_CALL", "KW_CALLED", "KW_CASCADED", "KW_CASE", "KW_CAST", 
		"KW_CEIL", "KW_CHAR", "KW_CHARACTER", "KW_CHECK", "KW_CLOB", "KW_CLOSE", 
		"KW_CLUSTER", "KW_COALESCE", "KW_COLLATE", "KW_COLLECT", "KW_COLUMN", 
		"KW_COMMIT", "KW_CONNECT", "KW_CONSTRAINT", "KW_CONTAINS", "KW_CONVERT", 
		"KW_COUNT", "KW_CREATE", "KW_CROSS", "KW_CUBE", "KW_CUME_DIST", "KW_CURRENT", 
		"KW_CURSOR", "KW_CYCLE", "KW_DATE", "KW_DATETIME", "KW_DAY", "KW_DEC", 
		"KW_DECIMAL", "KW_DECLARE", "KW_DEFAULT", "KW_DEFINE", "KW_DELIMITED", 
		"KW_DELETE", "KW_DESCRIBE", "KW_DENSE_RANK", "KW_DISTINCT", "KW_DISTRIBUTE", 
		"KW_DOUBLE", "KW_DROP", "KW_DRAIN", "KW_EACH", "KW_ELSE", "KW_END", "KW_EQUALS", 
		"KW_ESCAPE", "KW_EXCEPT", "KW_EXECUTE", "KW_EXISTS", "KW_EXPLAIN", "KW_EXTERNAL", 
		"KW_EXTRACT", "KW_FIRST_VALUE", "KW_FALSE", "KW_FIELDS", "KW_FLOAT", "KW_FOR", 
		"KW_FROM", "KW_FROM_UNIXTIME", "KW_FULL", "KW_FUNCTION", "KW_GLOBAL", 
		"KW_GRANT", "KW_GROUP", "KW_GROUPING", "KW_GROUPS", "KW_HAVING", "KW_HOUR", 
		"KW_IMPORT", "KW_IN", "KW_INCLUDING", "KW_INNER", "KW_INOUT", "KW_INSERT", 
		"KW_INT", "KW_INTEGER", "KW_INTERSECT", "KW_INTERVAL", "KW_INTO", "KW_IS", 
		"KW_JOIN", "KW_LAG", "KW_LANGUAGE", "KW_LATERAL", "KW_LAST_VALUE", "KW_LEAD", 
		"KW_LEADING", "KW_LEFT", "KW_LIKE", "KW_LINES", "KW_LIMIT", "KW_LOCAL", 
		"KW_LOCALTIMESTAMP", "KW_MATCH", "KW_MATCH_RECOGNIZE", "KW_MEASURES", 
		"KW_MERGE", "KW_METADATA", "KW_MINUS", "KW_MINUTE", "KW_MODIFIES", "KW_MODULE", 
		"KW_MONTH", "KW_MULTISET", "KW_NATURAL", "KW_NEXT", "KW_NO", "KW_NONE", 
		"KW_NOT", "KW_NTILE", "KW_NULL", "KW_NUMERIC", "KW_OF", "KW_OFFSET", "KW_ON", 
		"KW_ONE", "KW_OR", "KW_ORDER", "KW_OUT", "KW_OUTER", "KW_OVER", "KW_OVERLAY", 
		"KW_PARTITION", "KW_PATTERN", "KW_PER", "KW_PERCENT", "KW_PERCENT_RANK", 
		"KW_PERIOD", "KW_POSITION", "KW_POWER", "KW_PRIMARY", "KW_RANGE", "KW_ROW_NUMBER", 
		"KW_RANK", "KW_RESET", "KW_REVOKE", "KW_RIGHT", "KW_RLIKE", "KW_ROLLBACK", 
		"KW_ROLLUP", "KW_ROW", "KW_ROWS", "KW_SAVEPOINT", "KW_SECOND", "KW_SELECT", 
		"KW_SET", "KW_SHOW", "KW_SIMILAR", "KW_SORT", "KW_SKIP", "KW_SMALLINT", 
		"KW_START", "KW_STATIC", "KW_SUBSTRING", "KW_SUM", "KW_SYMMETRIC", "KW_SYSTEM", 
		"KW_SYSTEM_TIME", "KW_SYSTEM_USER", "KW_TABLE", "KW_TABLESAMPLE", "KW_TERMINATED", 
		"KW_THEN", "KW_TIME", "KW_TIMESTAMP", "KW_TIMESTAMP_3", "KW_TIMESTAMP_6", 
		"KW_TIMESTAMP_9", "KW_TINYINT", "KW_TO", "KW_TRAILING", "KW_TRUE", "KW_TRUNCATE", 
		"KW_UNION", "KW_UNIQUE", "KW_UNKNOWN", "KW_UNNEST", "KW_UPDATE", "KW_UPPER", 
		"KW_UPSERT", "KW_USER", "KW_USING", "KW_VALUE", "KW_VALUES", "KW_VARBINARY", 
		"KW_VARCHAR", "KW_WHEN", "KW_WHERE", "KW_WINDOW", "KW_WITH", "KW_WITHIN", 
		"KW_WITHOUT", "KW_YEAR", "KW_MATERIALIZED", "KW_FRESHNESS", "KW_REFRESH_MODE", 
		"KW_CONTINUOUS", "KW_SERDE", "KW_SERDEPROPERTIES", "KW_SUSPEND", "KW_RESUME", 
		"KW_REFRESH", "KW_DISTRIBUTED", "KW_DISTRIBUTION", "KW_HASH", "KW_BUCKETS", 
		"BIT_NOT_OP", "BIT_OR_OP", "BIT_AND_OP", "BIT_XOR_OP", "EQUAL_SYMBOL", 
		"GREATER_SYMBOL", "LESS_SYMBOL", "EXCLAMATION_SYMBOL", "DOT", "LS_BRACKET", 
		"RS_BRACKET", "LR_BRACKET", "RR_BRACKET", "LB_BRACKET", "RB_BRACKET", 
		"COMMA", "SEMICOLON", "AT_SIGN", "DOLLAR", "SINGLE_QUOTE_SYMB", "DOUBLE_QUOTE_SYMB", 
		"REVERSE_QUOTE_SYMB", "COLON_SYMB", "ASTERISK_SIGN", "UNDERLINE_SIGN", 
		"HYPNEN_SIGN", "ADD_SIGN", "PENCENT_SIGN", "DOUBLE_VERTICAL_SIGN", "DOUBLE_HYPNEN_SIGN", 
		"SLASH_SIGN", "QUESTION_MARK_SIGN", "DOUBLE_RIGHT_ARROW", "STRING_LITERAL", 
		"DIG_LITERAL", "REAL_LITERAL", "ID_LITERAL",
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, FlinkSQLParser.RULE_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 362;
			this.sqlStatements();
			this.state = 363;
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
		this.enterRule(_localctx, 2, FlinkSQLParser.RULE_sqlStatements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 369;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.KW_CREATE || _la === FlinkSQLParser.KW_EXECUTE || _la === FlinkSQLParser.KW_INSERT || _la === FlinkSQLParser.KW_SELECT || _la === FlinkSQLParser.KW_VALUES || _la === FlinkSQLParser.LR_BRACKET || _la === FlinkSQLParser.SEMICOLON) {
				{
				this.state = 367;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case FlinkSQLParser.KW_CREATE:
				case FlinkSQLParser.KW_EXECUTE:
				case FlinkSQLParser.KW_INSERT:
				case FlinkSQLParser.KW_SELECT:
				case FlinkSQLParser.KW_VALUES:
				case FlinkSQLParser.LR_BRACKET:
					{
					this.state = 365;
					this.sqlStatement();
					}
					break;
				case FlinkSQLParser.SEMICOLON:
					{
					this.state = 366;
					this.emptyStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 371;
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
		this.enterRule(_localctx, 4, FlinkSQLParser.RULE_sqlStatement);
		try {
			this.state = 378;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_CREATE:
				_localctx = new DdlPartContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 372;
				this.ddlStatement();
				this.state = 373;
				this.match(FlinkSQLParser.SEMICOLON);
				}
				break;
			case FlinkSQLParser.KW_EXECUTE:
			case FlinkSQLParser.KW_INSERT:
			case FlinkSQLParser.KW_SELECT:
			case FlinkSQLParser.KW_VALUES:
			case FlinkSQLParser.LR_BRACKET:
				_localctx = new DmlPartContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 375;
				this.dmlStatement();
				this.state = 376;
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
		this.enterRule(_localctx, 6, FlinkSQLParser.RULE_emptyStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 380;
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
		this.enterRule(_localctx, 8, FlinkSQLParser.RULE_ddlStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 382;
			this.createStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createStatement(): CreateStatementContext {
		let _localctx: CreateStatementContext = new CreateStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FlinkSQLParser.RULE_createStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 384;
			this.createTable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 388;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_SELECT:
			case FlinkSQLParser.KW_VALUES:
			case FlinkSQLParser.LR_BRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 386;
				this.queryStatement(0);
				}
				break;
			case FlinkSQLParser.KW_EXECUTE:
			case FlinkSQLParser.KW_INSERT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 387;
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
	public createTable(): CreateTableContext {
		let _localctx: CreateTableContext = new CreateTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FlinkSQLParser.RULE_createTable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 393;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 390;
				this.simpleCreateTable();
				}
				break;

			case 2:
				{
				this.state = 391;
				this.likeCreateTable();
				}
				break;

			case 3:
				{
				this.state = 392;
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
		this.enterRule(_localctx, 16, FlinkSQLParser.RULE_simpleCreateTable);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 395;
			this.match(FlinkSQLParser.KW_CREATE);
			this.state = 397;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_TEMPORARY) {
				{
				this.state = 396;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				}
			}

			this.state = 399;
			this.match(FlinkSQLParser.KW_TABLE);
			this.state = 401;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 400;
				this.ifNotExists();
				}
				break;
			}
			this.state = 403;
			this.tablePathCreate();
			this.state = 404;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 405;
			this.columnOptionDefinition();
			this.state = 410;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 406;
					this.match(FlinkSQLParser.COMMA);
					this.state = 407;
					this.columnOptionDefinition();
					}
					}
				}
				this.state = 412;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			this.state = 415;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 413;
				this.match(FlinkSQLParser.COMMA);
				this.state = 414;
				this.watermarkDefinition();
				}
				break;
			}
			this.state = 419;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 417;
				this.match(FlinkSQLParser.COMMA);
				this.state = 418;
				this.tableConstraint();
				}
				break;
			}
			this.state = 423;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.COMMA) {
				{
				this.state = 421;
				this.match(FlinkSQLParser.COMMA);
				this.state = 422;
				this.selfDefinitionClause();
				}
			}

			this.state = 425;
			this.match(FlinkSQLParser.RR_BRACKET);
			this.state = 427;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_COMMENT) {
				{
				this.state = 426;
				this.commentSpec();
				}
			}

			this.state = 430;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_PARTITIONED) {
				{
				this.state = 429;
				this.partitionDefinition();
				}
			}

			this.state = 433;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_WITH) {
				{
				this.state = 432;
				this.withOption();
				}
			}

			this.state = 436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_LIKE) {
				{
				this.state = 435;
				this.likeDefinition();
				}
			}

			this.state = 439;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_DISTRIBUTED) {
				{
				this.state = 438;
				this.distributed();
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
	public likeCreateTable(): LikeCreateTableContext {
		let _localctx: LikeCreateTableContext = new LikeCreateTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, FlinkSQLParser.RULE_likeCreateTable);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 441;
			this.match(FlinkSQLParser.KW_CREATE);
			this.state = 443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_TEMPORARY) {
				{
				this.state = 442;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				}
			}

			this.state = 445;
			this.match(FlinkSQLParser.KW_TABLE);
			this.state = 447;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 446;
				this.ifNotExists();
				}
				break;
			}
			this.state = 449;
			this.tablePathCreate();
			this.state = 450;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 459;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSQLParser.KW_ADD) | (1 << FlinkSQLParser.KW_ADMIN) | (1 << FlinkSQLParser.KW_AFTER) | (1 << FlinkSQLParser.KW_ANALYZE) | (1 << FlinkSQLParser.KW_ASC) | (1 << FlinkSQLParser.KW_BEFORE) | (1 << FlinkSQLParser.KW_BYTES) | (1 << FlinkSQLParser.KW_CASCADE) | (1 << FlinkSQLParser.KW_CATALOG) | (1 << FlinkSQLParser.KW_CATALOGS) | (1 << FlinkSQLParser.KW_CENTURY) | (1 << FlinkSQLParser.KW_CHAIN) | (1 << FlinkSQLParser.KW_CHANGELOG_MODE) | (1 << FlinkSQLParser.KW_CHARACTERS) | (1 << FlinkSQLParser.KW_COMMENT) | (1 << FlinkSQLParser.KW_COMPACT) | (1 << FlinkSQLParser.KW_COLUMNS) | (1 << FlinkSQLParser.KW_CONSTRAINTS) | (1 << FlinkSQLParser.KW_CONSTRUCTOR) | (1 << FlinkSQLParser.KW_CUMULATE) | (1 << FlinkSQLParser.KW_DATA) | (1 << FlinkSQLParser.KW_DATABASE) | (1 << FlinkSQLParser.KW_DATABASES) | (1 << FlinkSQLParser.KW_DAYS) | (1 << FlinkSQLParser.KW_DECADE) | (1 << FlinkSQLParser.KW_DEFINED) | (1 << FlinkSQLParser.KW_DESC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSQLParser.KW_DESCRIPTOR - 32)) | (1 << (FlinkSQLParser.KW_DIV - 32)) | (1 << (FlinkSQLParser.KW_ENCODING - 32)) | (1 << (FlinkSQLParser.KW_ENFORCED - 32)) | (1 << (FlinkSQLParser.KW_ENGINE - 32)) | (1 << (FlinkSQLParser.KW_ERROR - 32)) | (1 << (FlinkSQLParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSQLParser.KW_EXCEPTION - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDE - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDING - 32)) | (1 << (FlinkSQLParser.KW_EXTENDED - 32)) | (1 << (FlinkSQLParser.KW_FILE - 32)) | (1 << (FlinkSQLParser.KW_FINAL - 32)) | (1 << (FlinkSQLParser.KW_FIRST - 32)) | (1 << (FlinkSQLParser.KW_FOLLOWING - 32)) | (1 << (FlinkSQLParser.KW_FORMAT - 32)) | (1 << (FlinkSQLParser.KW_FORTRAN - 32)) | (1 << (FlinkSQLParser.KW_FOUND - 32)) | (1 << (FlinkSQLParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSQLParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSQLParser.KW_GENERAL - 32)) | (1 << (FlinkSQLParser.KW_GENERATED - 32)) | (1 << (FlinkSQLParser.KW_GO - 32)) | (1 << (FlinkSQLParser.KW_GOTO - 32)) | (1 << (FlinkSQLParser.KW_GRANTED - 32)) | (1 << (FlinkSQLParser.KW_HOP - 32)) | (1 << (FlinkSQLParser.KW_HOURS - 32)) | (1 << (FlinkSQLParser.KW_IF - 32)) | (1 << (FlinkSQLParser.KW_IGNORE - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSQLParser.KW_INCREMENT - 64)) | (1 << (FlinkSQLParser.KW_INPUT - 64)) | (1 << (FlinkSQLParser.KW_INVOKER - 64)) | (1 << (FlinkSQLParser.KW_JAR - 64)) | (1 << (FlinkSQLParser.KW_JARS - 64)) | (1 << (FlinkSQLParser.KW_JAVA - 64)) | (1 << (FlinkSQLParser.KW_JSON - 64)) | (1 << (FlinkSQLParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSQLParser.KW_KEY - 64)) | (1 << (FlinkSQLParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSQLParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSQLParser.KW_LABEL - 64)) | (1 << (FlinkSQLParser.KW_LAST - 64)) | (1 << (FlinkSQLParser.KW_LENGTH - 64)) | (1 << (FlinkSQLParser.KW_LEVEL - 64)) | (1 << (FlinkSQLParser.KW_LOAD - 64)) | (1 << (FlinkSQLParser.KW_MAP - 64)) | (1 << (FlinkSQLParser.KW_MICROSECOND - 64)) | (1 << (FlinkSQLParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSQLParser.KW_MILLISECOND - 64)) | (1 << (FlinkSQLParser.KW_MINUTES - 64)) | (1 << (FlinkSQLParser.KW_MINVALUE - 64)) | (1 << (FlinkSQLParser.KW_MODIFY - 64)) | (1 << (FlinkSQLParser.KW_MODULES - 64)) | (1 << (FlinkSQLParser.KW_MONTHS - 64)) | (1 << (FlinkSQLParser.KW_NANOSECOND - 64)) | (1 << (FlinkSQLParser.KW_NULLS - 64)) | (1 << (FlinkSQLParser.KW_NUMBER - 64)) | (1 << (FlinkSQLParser.KW_OPTION - 64)) | (1 << (FlinkSQLParser.KW_OPTIONS - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSQLParser.KW_ORDERING - 96)) | (1 << (FlinkSQLParser.KW_OUTPUT - 96)) | (1 << (FlinkSQLParser.KW_OVERWRITE - 96)) | (1 << (FlinkSQLParser.KW_OVERWRITING - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONED - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONS - 96)) | (1 << (FlinkSQLParser.KW_PASSING - 96)) | (1 << (FlinkSQLParser.KW_PAST - 96)) | (1 << (FlinkSQLParser.KW_PATH - 96)) | (1 << (FlinkSQLParser.KW_PLACING - 96)) | (1 << (FlinkSQLParser.KW_PLAN - 96)) | (1 << (FlinkSQLParser.KW_PRECEDING - 96)) | (1 << (FlinkSQLParser.KW_PRESERVE - 96)) | (1 << (FlinkSQLParser.KW_PRIOR - 96)) | (1 << (FlinkSQLParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSQLParser.KW_PUBLIC - 96)) | (1 << (FlinkSQLParser.KW_PYTHON - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSQLParser.KW_QUARTER - 96)) | (1 << (FlinkSQLParser.KW_RAW - 96)) | (1 << (FlinkSQLParser.KW_READ - 96)) | (1 << (FlinkSQLParser.KW_RELATIVE - 96)) | (1 << (FlinkSQLParser.KW_REMOVE - 96)) | (1 << (FlinkSQLParser.KW_RENAME - 96)) | (1 << (FlinkSQLParser.KW_REPLACE - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSQLParser.KW_RESPECT - 128)) | (1 << (FlinkSQLParser.KW_RESTART - 128)) | (1 << (FlinkSQLParser.KW_RESTRICT - 128)) | (1 << (FlinkSQLParser.KW_ROLE - 128)) | (1 << (FlinkSQLParser.KW_ROW_COUNT - 128)) | (1 << (FlinkSQLParser.KW_SCALA - 128)) | (1 << (FlinkSQLParser.KW_SCALAR - 128)) | (1 << (FlinkSQLParser.KW_SCALE - 128)) | (1 << (FlinkSQLParser.KW_SCHEMA - 128)) | (1 << (FlinkSQLParser.KW_SECONDS - 128)) | (1 << (FlinkSQLParser.KW_SECTION - 128)) | (1 << (FlinkSQLParser.KW_SECURITY - 128)) | (1 << (FlinkSQLParser.KW_SELF - 128)) | (1 << (FlinkSQLParser.KW_SERVER - 128)) | (1 << (FlinkSQLParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSQLParser.KW_SESSION - 128)) | (1 << (FlinkSQLParser.KW_SETS - 128)) | (1 << (FlinkSQLParser.KW_SIMPLE - 128)) | (1 << (FlinkSQLParser.KW_SIZE - 128)) | (1 << (FlinkSQLParser.KW_SLIDE - 128)) | (1 << (FlinkSQLParser.KW_SOURCE - 128)) | (1 << (FlinkSQLParser.KW_SPACE - 128)) | (1 << (FlinkSQLParser.KW_STATE - 128)) | (1 << (FlinkSQLParser.KW_STATEMENT - 128)) | (1 << (FlinkSQLParser.KW_STEP - 128)) | (1 << (FlinkSQLParser.KW_STRING - 128)) | (1 << (FlinkSQLParser.KW_STRUCTURE - 128)) | (1 << (FlinkSQLParser.KW_STYLE - 128)) | (1 << (FlinkSQLParser.KW_TABLES - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSQLParser.KW_TEMPORARY - 160)) | (1 << (FlinkSQLParser.KW_TIMECOL - 160)) | (1 << (FlinkSQLParser.KW_FLOOR - 160)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_LTZ - 160)) | (1 << (FlinkSQLParser.KW_TIMESTAMPADD - 160)) | (1 << (FlinkSQLParser.KW_TIMESTAMPDIFF - 160)) | (1 << (FlinkSQLParser.KW_TO_TIMESTAMP - 160)) | (1 << (FlinkSQLParser.KW_TRANSFORM - 160)) | (1 << (FlinkSQLParser.KW_TUMBLE - 160)) | (1 << (FlinkSQLParser.KW_TYPE - 160)) | (1 << (FlinkSQLParser.KW_UNDER - 160)) | (1 << (FlinkSQLParser.KW_UNLOAD - 160)) | (1 << (FlinkSQLParser.KW_USAGE - 160)) | (1 << (FlinkSQLParser.KW_USE - 160)) | (1 << (FlinkSQLParser.KW_UTF16 - 160)) | (1 << (FlinkSQLParser.KW_UTF32 - 160)) | (1 << (FlinkSQLParser.KW_UTF8 - 160)) | (1 << (FlinkSQLParser.KW_VERSION - 160)) | (1 << (FlinkSQLParser.KW_VIEW - 160)) | (1 << (FlinkSQLParser.KW_VIEWS - 160)) | (1 << (FlinkSQLParser.KW_VIRTUAL - 160)) | (1 << (FlinkSQLParser.KW_WATERMARK - 160)) | (1 << (FlinkSQLParser.KW_WATERMARKS - 160)) | (1 << (FlinkSQLParser.KW_WEEK - 160)) | (1 << (FlinkSQLParser.KW_WORK - 160)) | (1 << (FlinkSQLParser.KW_WRAPPER - 160)) | (1 << (FlinkSQLParser.KW_YEARS - 160)) | (1 << (FlinkSQLParser.KW_ZONE - 160)) | (1 << (FlinkSQLParser.KW_ABS - 160)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (FlinkSQLParser.KW_ARRAY - 196)) | (1 << (FlinkSQLParser.KW_AVG - 196)) | (1 << (FlinkSQLParser.KW_CASE - 196)) | (1 << (FlinkSQLParser.KW_CAST - 196)) | (1 << (FlinkSQLParser.KW_CEIL - 196)) | (1 << (FlinkSQLParser.KW_COALESCE - 196)) | (1 << (FlinkSQLParser.KW_COLLECT - 196)))) !== 0) || ((((_la - 231)) & ~0x1F) === 0 && ((1 << (_la - 231)) & ((1 << (FlinkSQLParser.KW_COUNT - 231)) | (1 << (FlinkSQLParser.KW_DATE - 231)) | (1 << (FlinkSQLParser.KW_DAY - 231)))) !== 0) || ((((_la - 263)) & ~0x1F) === 0 && ((1 << (_la - 263)) & ((1 << (FlinkSQLParser.KW_EXISTS - 263)) | (1 << (FlinkSQLParser.KW_FIRST_VALUE - 263)) | (1 << (FlinkSQLParser.KW_FALSE - 263)) | (1 << (FlinkSQLParser.KW_FROM_UNIXTIME - 263)) | (1 << (FlinkSQLParser.KW_GROUPING - 263)) | (1 << (FlinkSQLParser.KW_HOUR - 263)) | (1 << (FlinkSQLParser.KW_INTERVAL - 263)))) !== 0) || ((((_la - 296)) & ~0x1F) === 0 && ((1 << (_la - 296)) & ((1 << (FlinkSQLParser.KW_LAG - 296)) | (1 << (FlinkSQLParser.KW_LAST_VALUE - 296)) | (1 << (FlinkSQLParser.KW_LEAD - 296)) | (1 << (FlinkSQLParser.KW_LEFT - 296)) | (1 << (FlinkSQLParser.KW_LOCALTIMESTAMP - 296)) | (1 << (FlinkSQLParser.KW_MINUTE - 296)) | (1 << (FlinkSQLParser.KW_MONTH - 296)) | (1 << (FlinkSQLParser.KW_NOT - 296)) | (1 << (FlinkSQLParser.KW_NTILE - 296)) | (1 << (FlinkSQLParser.KW_NULL - 296)))) !== 0) || ((((_la - 336)) & ~0x1F) === 0 && ((1 << (_la - 336)) & ((1 << (FlinkSQLParser.KW_OVERLAY - 336)) | (1 << (FlinkSQLParser.KW_PERCENT_RANK - 336)) | (1 << (FlinkSQLParser.KW_POSITION - 336)) | (1 << (FlinkSQLParser.KW_POWER - 336)) | (1 << (FlinkSQLParser.KW_ROW_NUMBER - 336)) | (1 << (FlinkSQLParser.KW_RANK - 336)) | (1 << (FlinkSQLParser.KW_RIGHT - 336)) | (1 << (FlinkSQLParser.KW_ROW - 336)) | (1 << (FlinkSQLParser.KW_SECOND - 336)))) !== 0) || ((((_la - 368)) & ~0x1F) === 0 && ((1 << (_la - 368)) & ((1 << (FlinkSQLParser.KW_SUBSTRING - 368)) | (1 << (FlinkSQLParser.KW_SUM - 368)) | (1 << (FlinkSQLParser.KW_TIME - 368)) | (1 << (FlinkSQLParser.KW_TIMESTAMP - 368)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_3 - 368)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_6 - 368)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_9 - 368)) | (1 << (FlinkSQLParser.KW_TRUE - 368)) | (1 << (FlinkSQLParser.KW_TRUNCATE - 368)) | (1 << (FlinkSQLParser.KW_UPPER - 368)) | (1 << (FlinkSQLParser.KW_USER - 368)))) !== 0) || ((((_la - 407)) & ~0x1F) === 0 && ((1 << (_la - 407)) & ((1 << (FlinkSQLParser.KW_YEAR - 407)) | (1 << (FlinkSQLParser.BIT_NOT_OP - 407)) | (1 << (FlinkSQLParser.LR_BRACKET - 407)))) !== 0) || ((((_la - 439)) & ~0x1F) === 0 && ((1 << (_la - 439)) & ((1 << (FlinkSQLParser.DOLLAR - 439)) | (1 << (FlinkSQLParser.ASTERISK_SIGN - 439)) | (1 << (FlinkSQLParser.HYPNEN_SIGN - 439)) | (1 << (FlinkSQLParser.ADD_SIGN - 439)) | (1 << (FlinkSQLParser.STRING_LITERAL - 439)) | (1 << (FlinkSQLParser.DIG_LITERAL - 439)) | (1 << (FlinkSQLParser.REAL_LITERAL - 439)) | (1 << (FlinkSQLParser.ID_LITERAL - 439)))) !== 0)) {
				{
				this.state = 451;
				this.columnOptionDefinition();
				this.state = 456;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 452;
						this.match(FlinkSQLParser.COMMA);
						this.state = 453;
						this.columnOptionDefinition();
						}
						}
					}
					this.state = 458;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
				}
				}
			}

			this.state = 463;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 461;
				this.match(FlinkSQLParser.COMMA);
				this.state = 462;
				this.watermarkDefinition();
				}
				break;
			}
			this.state = 467;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 465;
				this.match(FlinkSQLParser.COMMA);
				this.state = 466;
				this.tableConstraint();
				}
				break;
			}
			this.state = 471;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.COMMA) {
				{
				this.state = 469;
				this.match(FlinkSQLParser.COMMA);
				this.state = 470;
				this.selfDefinitionClause();
				}
			}

			this.state = 473;
			this.match(FlinkSQLParser.RR_BRACKET);
			this.state = 475;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_COMMENT) {
				{
				this.state = 474;
				this.commentSpec();
				}
			}

			this.state = 478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_PARTITIONED) {
				{
				this.state = 477;
				this.partitionDefinition();
				}
			}

			this.state = 481;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_WITH) {
				{
				this.state = 480;
				this.withOption();
				}
			}

			this.state = 483;
			this.likeDefinition();
			this.state = 485;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_DISTRIBUTED) {
				{
				this.state = 484;
				this.distributed();
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
		this.enterRule(_localctx, 20, FlinkSQLParser.RULE_createTableAsSelect);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 487;
			this.match(FlinkSQLParser.KW_CREATE);
			this.state = 488;
			this.match(FlinkSQLParser.KW_TABLE);
			this.state = 490;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 489;
				this.ifNotExists();
				}
				break;
			}
			this.state = 492;
			this.tablePathCreate();
			this.state = 493;
			this.withOption();
			this.state = 496;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_AS) {
				{
				this.state = 494;
				this.match(FlinkSQLParser.KW_AS);
				this.state = 495;
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
	public usingClause(): UsingClauseContext {
		let _localctx: UsingClauseContext = new UsingClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, FlinkSQLParser.RULE_usingClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 498;
			this.match(FlinkSQLParser.KW_USING);
			this.state = 499;
			this.match(FlinkSQLParser.KW_JAR);
			this.state = 500;
			this.jarFileName();
			this.state = 506;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 501;
				this.match(FlinkSQLParser.COMMA);
				this.state = 502;
				this.match(FlinkSQLParser.KW_JAR);
				this.state = 503;
				this.jarFileName();
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
	public jarFileName(): JarFileNameContext {
		let _localctx: JarFileNameContext = new JarFileNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, FlinkSQLParser.RULE_jarFileName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 509;
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
		this.enterRule(_localctx, 26, FlinkSQLParser.RULE_alterTable);
		let _la: number;
		try {
			let _alt: number;
			this.state = 718;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				_localctx = new AlterContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 511;
				this.match(FlinkSQLParser.KW_ALTER);
				this.state = 512;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 514;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
				case 1:
					{
					this.state = 513;
					this.ifExists();
					}
					break;
				}
				this.state = 516;
				this.tablePath();
				this.state = 522;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
				case 1:
					{
					this.state = 517;
					this.renameDefinition();
					}
					break;

				case 2:
					{
					this.state = 518;
					this.setKeyValueDefinition();
					}
					break;

				case 3:
					{
					this.state = 519;
					this.addConstraint();
					}
					break;

				case 4:
					{
					this.state = 520;
					this.dropConstraint();
					}
					break;

				case 5:
					{
					this.state = 521;
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
				this.state = 524;
				this.match(FlinkSQLParser.KW_ALTER);
				this.state = 525;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 527;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
				case 1:
					{
					this.state = 526;
					this.ifExists();
					}
					break;
				}
				this.state = 529;
				this.tablePath();
				this.state = 530;
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
				this.state = 531;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 532;
				this.columnOptionDefinition();
				this.state = 534;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_AFTER || _la === FlinkSQLParser.KW_BEFORE || _la === FlinkSQLParser.KW_FIRST || _la === FlinkSQLParser.KW_LAST) {
					{
					this.state = 533;
					this.columnPosition();
					}
				}

				this.state = 543;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 536;
						this.match(FlinkSQLParser.COMMA);
						this.state = 537;
						this.columnOptionDefinition();
						this.state = 539;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FlinkSQLParser.KW_AFTER || _la === FlinkSQLParser.KW_BEFORE || _la === FlinkSQLParser.KW_FIRST || _la === FlinkSQLParser.KW_LAST) {
							{
							this.state = 538;
							this.columnPosition();
							}
						}

						}
						}
					}
					this.state = 545;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
				}
				this.state = 548;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
				case 1:
					{
					this.state = 546;
					this.match(FlinkSQLParser.COMMA);
					this.state = 547;
					this.tableConstraint();
					}
					break;
				}
				this.state = 552;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 550;
					this.match(FlinkSQLParser.COMMA);
					this.state = 551;
					this.watermarkDefinition();
					}
					break;
				}
				this.state = 556;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.COMMA) {
					{
					this.state = 554;
					this.match(FlinkSQLParser.COMMA);
					this.state = 555;
					this.selfDefinitionClause();
					}
				}

				this.state = 558;
				this.match(FlinkSQLParser.RR_BRACKET);
				this.state = 560;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_COMMENT) {
					{
					this.state = 559;
					this.commentSpec();
					}
				}

				this.state = 563;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_PARTITIONED) {
					{
					this.state = 562;
					this.partitionDefinition();
					}
				}

				this.state = 566;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_WITH) {
					{
					this.state = 565;
					this.withOption();
					}
				}

				}
				break;

			case 3:
				_localctx = new AddOrModifyNewColumnsContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 568;
				this.match(FlinkSQLParser.KW_ALTER);
				this.state = 569;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 571;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
				case 1:
					{
					this.state = 570;
					this.ifExists();
					}
					break;
				}
				this.state = 573;
				this.tablePath();
				this.state = 574;
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
				this.state = 575;
				this.columnOptionDefinition();
				this.state = 577;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_AFTER || _la === FlinkSQLParser.KW_BEFORE || _la === FlinkSQLParser.KW_FIRST || _la === FlinkSQLParser.KW_LAST) {
					{
					this.state = 576;
					this.columnPosition();
					}
				}

				this.state = 580;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_COMMENT) {
					{
					this.state = 579;
					this.commentSpec();
					}
				}

				}
				break;

			case 4:
				_localctx = new AddNewPartitionsContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 582;
				this.match(FlinkSQLParser.KW_ALTER);
				this.state = 583;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 585;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
				case 1:
					{
					this.state = 584;
					this.ifExists();
					}
					break;
				}
				this.state = 587;
				this.tablePath();
				this.state = 588;
				this.match(FlinkSQLParser.KW_ADD);
				this.state = 596;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.KW_PARTITION) {
					{
					{
					this.state = 589;
					this.match(FlinkSQLParser.KW_PARTITION);
					this.state = 590;
					this.tablePropertyList();
					this.state = 591;
					this.match(FlinkSQLParser.KW_WITH);
					this.state = 592;
					this.tablePropertyList();
					}
					}
					this.state = 598;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 5:
				_localctx = new DropAcolumnContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 599;
				this.match(FlinkSQLParser.KW_ALTER);
				this.state = 600;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 602;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
				case 1:
					{
					this.state = 601;
					this.ifExists();
					}
					break;
				}
				this.state = 604;
				this.tablePath();
				this.state = 605;
				this.match(FlinkSQLParser.KW_DROP);
				this.state = 606;
				this.uid();
				}
				break;

			case 6:
				_localctx = new DropColumnListContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 608;
				this.match(FlinkSQLParser.KW_ALTER);
				this.state = 609;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 611;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
				case 1:
					{
					this.state = 610;
					this.ifExists();
					}
					break;
				}
				this.state = 613;
				this.tablePath();
				this.state = 614;
				this.match(FlinkSQLParser.KW_DROP);
				this.state = 615;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 616;
				this.uid();
				this.state = 621;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 617;
					this.match(FlinkSQLParser.COMMA);
					this.state = 618;
					this.uid();
					}
					}
					this.state = 623;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 624;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 7:
				_localctx = new DropPrimaryKeyContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 626;
				this.match(FlinkSQLParser.KW_ALTER);
				this.state = 627;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 629;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
				case 1:
					{
					this.state = 628;
					this.ifExists();
					}
					break;
				}
				this.state = 631;
				this.tablePath();
				this.state = 632;
				this.match(FlinkSQLParser.KW_DROP);
				this.state = 633;
				this.match(FlinkSQLParser.KW_PRIMARY);
				this.state = 634;
				this.match(FlinkSQLParser.KW_KEY);
				}
				break;

			case 8:
				_localctx = new DropPartitionsContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 636;
				this.match(FlinkSQLParser.KW_ALTER);
				this.state = 637;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 639;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
				case 1:
					{
					this.state = 638;
					this.ifExists();
					}
					break;
				}
				this.state = 641;
				this.tablePath();
				this.state = 642;
				this.match(FlinkSQLParser.KW_DROP);
				this.state = 643;
				this.match(FlinkSQLParser.KW_PARTITION);
				this.state = 644;
				this.tablePropertyList();
				this.state = 650;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 645;
					this.match(FlinkSQLParser.COMMA);
					this.state = 646;
					this.match(FlinkSQLParser.KW_PARTITION);
					this.state = 647;
					this.tablePropertyList();
					}
					}
					this.state = 652;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 9:
				_localctx = new DropWatermarkContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 653;
				this.match(FlinkSQLParser.KW_ALTER);
				this.state = 654;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 656;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
				case 1:
					{
					this.state = 655;
					this.ifExists();
					}
					break;
				}
				this.state = 658;
				this.tablePath();
				this.state = 659;
				this.match(FlinkSQLParser.KW_DROP);
				this.state = 660;
				this.match(FlinkSQLParser.KW_WATERMARK);
				}
				break;

			case 10:
				_localctx = new DropDistributionContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 662;
				this.match(FlinkSQLParser.KW_ALTER);
				this.state = 663;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 665;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
				case 1:
					{
					this.state = 664;
					this.ifExists();
					}
					break;
				}
				this.state = 667;
				this.tablePath();
				this.state = 668;
				this.match(FlinkSQLParser.KW_DROP);
				this.state = 669;
				this.match(FlinkSQLParser.KW_DISTRIBUTION);
				}
				break;

			case 11:
				_localctx = new RenameColumnContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 671;
				this.match(FlinkSQLParser.KW_ALTER);
				this.state = 672;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 674;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
				case 1:
					{
					this.state = 673;
					this.ifExists();
					}
					break;
				}
				this.state = 676;
				this.tablePath();
				this.state = 677;
				this.match(FlinkSQLParser.KW_RENAME);
				this.state = 678;
				this.uid();
				this.state = 679;
				this.match(FlinkSQLParser.KW_TO);
				this.state = 680;
				this.uid();
				}
				break;

			case 12:
				_localctx = new RenameTableContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 682;
				this.match(FlinkSQLParser.KW_ALTER);
				this.state = 683;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 685;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
				case 1:
					{
					this.state = 684;
					this.ifExists();
					}
					break;
				}
				this.state = 687;
				this.tablePath();
				this.state = 688;
				this.match(FlinkSQLParser.KW_RENAME);
				this.state = 689;
				this.tablePath();
				}
				break;

			case 13:
				_localctx = new SetPropertiyContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 691;
				this.match(FlinkSQLParser.KW_ALTER);
				this.state = 692;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 694;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
				case 1:
					{
					this.state = 693;
					this.ifExists();
					}
					break;
				}
				this.state = 696;
				this.tablePath();
				this.state = 697;
				this.match(FlinkSQLParser.KW_SET);
				this.state = 698;
				this.partitionDefinition();
				}
				break;

			case 14:
				_localctx = new ResetPropertiyContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 700;
				this.match(FlinkSQLParser.KW_ALTER);
				this.state = 701;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 703;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
				case 1:
					{
					this.state = 702;
					this.ifExists();
					}
					break;
				}
				this.state = 705;
				this.tablePath();
				this.state = 706;
				this.match(FlinkSQLParser.KW_RESET);
				this.state = 707;
				this.transformList();
				}
				break;

			case 15:
				_localctx = new AddDistributionContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 709;
				this.match(FlinkSQLParser.KW_ALTER);
				this.state = 710;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 712;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
				case 1:
					{
					this.state = 711;
					this.ifExists();
					}
					break;
				}
				this.state = 714;
				this.tablePath();
				this.state = 715;
				this.match(FlinkSQLParser.KW_ADD);
				this.state = 716;
				this.distribution();
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
	public columnPosition(): ColumnPositionContext {
		let _localctx: ColumnPositionContext = new ColumnPositionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, FlinkSQLParser.RULE_columnPosition);
		let _la: number;
		try {
			this.state = 723;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_FIRST:
			case FlinkSQLParser.KW_LAST:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 720;
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
				this.state = 721;
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
				this.state = 722;
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
		this.enterRule(_localctx, 30, FlinkSQLParser.RULE_renameDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 725;
			this.match(FlinkSQLParser.KW_RENAME);
			this.state = 727;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSQLParser.KW_ADD) | (1 << FlinkSQLParser.KW_ADMIN) | (1 << FlinkSQLParser.KW_AFTER) | (1 << FlinkSQLParser.KW_ANALYZE) | (1 << FlinkSQLParser.KW_ASC) | (1 << FlinkSQLParser.KW_BEFORE) | (1 << FlinkSQLParser.KW_BYTES) | (1 << FlinkSQLParser.KW_CASCADE) | (1 << FlinkSQLParser.KW_CATALOG) | (1 << FlinkSQLParser.KW_CATALOGS) | (1 << FlinkSQLParser.KW_CENTURY) | (1 << FlinkSQLParser.KW_CHAIN) | (1 << FlinkSQLParser.KW_CHANGELOG_MODE) | (1 << FlinkSQLParser.KW_CHARACTERS) | (1 << FlinkSQLParser.KW_COMMENT) | (1 << FlinkSQLParser.KW_COMPACT) | (1 << FlinkSQLParser.KW_COLUMNS) | (1 << FlinkSQLParser.KW_CONSTRAINTS) | (1 << FlinkSQLParser.KW_CONSTRUCTOR) | (1 << FlinkSQLParser.KW_CUMULATE) | (1 << FlinkSQLParser.KW_DATA) | (1 << FlinkSQLParser.KW_DATABASE) | (1 << FlinkSQLParser.KW_DATABASES) | (1 << FlinkSQLParser.KW_DAYS) | (1 << FlinkSQLParser.KW_DECADE) | (1 << FlinkSQLParser.KW_DEFINED) | (1 << FlinkSQLParser.KW_DESC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSQLParser.KW_DESCRIPTOR - 32)) | (1 << (FlinkSQLParser.KW_DIV - 32)) | (1 << (FlinkSQLParser.KW_ENCODING - 32)) | (1 << (FlinkSQLParser.KW_ENFORCED - 32)) | (1 << (FlinkSQLParser.KW_ENGINE - 32)) | (1 << (FlinkSQLParser.KW_ERROR - 32)) | (1 << (FlinkSQLParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSQLParser.KW_EXCEPTION - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDE - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDING - 32)) | (1 << (FlinkSQLParser.KW_EXTENDED - 32)) | (1 << (FlinkSQLParser.KW_FILE - 32)) | (1 << (FlinkSQLParser.KW_FINAL - 32)) | (1 << (FlinkSQLParser.KW_FIRST - 32)) | (1 << (FlinkSQLParser.KW_FOLLOWING - 32)) | (1 << (FlinkSQLParser.KW_FORMAT - 32)) | (1 << (FlinkSQLParser.KW_FORTRAN - 32)) | (1 << (FlinkSQLParser.KW_FOUND - 32)) | (1 << (FlinkSQLParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSQLParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSQLParser.KW_GENERAL - 32)) | (1 << (FlinkSQLParser.KW_GENERATED - 32)) | (1 << (FlinkSQLParser.KW_GO - 32)) | (1 << (FlinkSQLParser.KW_GOTO - 32)) | (1 << (FlinkSQLParser.KW_GRANTED - 32)) | (1 << (FlinkSQLParser.KW_HOP - 32)) | (1 << (FlinkSQLParser.KW_HOURS - 32)) | (1 << (FlinkSQLParser.KW_IF - 32)) | (1 << (FlinkSQLParser.KW_IGNORE - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSQLParser.KW_INCREMENT - 64)) | (1 << (FlinkSQLParser.KW_INPUT - 64)) | (1 << (FlinkSQLParser.KW_INVOKER - 64)) | (1 << (FlinkSQLParser.KW_JAR - 64)) | (1 << (FlinkSQLParser.KW_JARS - 64)) | (1 << (FlinkSQLParser.KW_JAVA - 64)) | (1 << (FlinkSQLParser.KW_JSON - 64)) | (1 << (FlinkSQLParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSQLParser.KW_KEY - 64)) | (1 << (FlinkSQLParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSQLParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSQLParser.KW_LABEL - 64)) | (1 << (FlinkSQLParser.KW_LAST - 64)) | (1 << (FlinkSQLParser.KW_LENGTH - 64)) | (1 << (FlinkSQLParser.KW_LEVEL - 64)) | (1 << (FlinkSQLParser.KW_LOAD - 64)) | (1 << (FlinkSQLParser.KW_MAP - 64)) | (1 << (FlinkSQLParser.KW_MICROSECOND - 64)) | (1 << (FlinkSQLParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSQLParser.KW_MILLISECOND - 64)) | (1 << (FlinkSQLParser.KW_MINUTES - 64)) | (1 << (FlinkSQLParser.KW_MINVALUE - 64)) | (1 << (FlinkSQLParser.KW_MODIFY - 64)) | (1 << (FlinkSQLParser.KW_MODULES - 64)) | (1 << (FlinkSQLParser.KW_MONTHS - 64)) | (1 << (FlinkSQLParser.KW_NANOSECOND - 64)) | (1 << (FlinkSQLParser.KW_NULLS - 64)) | (1 << (FlinkSQLParser.KW_NUMBER - 64)) | (1 << (FlinkSQLParser.KW_OPTION - 64)) | (1 << (FlinkSQLParser.KW_OPTIONS - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSQLParser.KW_ORDERING - 96)) | (1 << (FlinkSQLParser.KW_OUTPUT - 96)) | (1 << (FlinkSQLParser.KW_OVERWRITE - 96)) | (1 << (FlinkSQLParser.KW_OVERWRITING - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONED - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONS - 96)) | (1 << (FlinkSQLParser.KW_PASSING - 96)) | (1 << (FlinkSQLParser.KW_PAST - 96)) | (1 << (FlinkSQLParser.KW_PATH - 96)) | (1 << (FlinkSQLParser.KW_PLACING - 96)) | (1 << (FlinkSQLParser.KW_PLAN - 96)) | (1 << (FlinkSQLParser.KW_PRECEDING - 96)) | (1 << (FlinkSQLParser.KW_PRESERVE - 96)) | (1 << (FlinkSQLParser.KW_PRIOR - 96)) | (1 << (FlinkSQLParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSQLParser.KW_PUBLIC - 96)) | (1 << (FlinkSQLParser.KW_PYTHON - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSQLParser.KW_QUARTER - 96)) | (1 << (FlinkSQLParser.KW_RAW - 96)) | (1 << (FlinkSQLParser.KW_READ - 96)) | (1 << (FlinkSQLParser.KW_RELATIVE - 96)) | (1 << (FlinkSQLParser.KW_REMOVE - 96)) | (1 << (FlinkSQLParser.KW_RENAME - 96)) | (1 << (FlinkSQLParser.KW_REPLACE - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSQLParser.KW_RESPECT - 128)) | (1 << (FlinkSQLParser.KW_RESTART - 128)) | (1 << (FlinkSQLParser.KW_RESTRICT - 128)) | (1 << (FlinkSQLParser.KW_ROLE - 128)) | (1 << (FlinkSQLParser.KW_ROW_COUNT - 128)) | (1 << (FlinkSQLParser.KW_SCALA - 128)) | (1 << (FlinkSQLParser.KW_SCALAR - 128)) | (1 << (FlinkSQLParser.KW_SCALE - 128)) | (1 << (FlinkSQLParser.KW_SCHEMA - 128)) | (1 << (FlinkSQLParser.KW_SECONDS - 128)) | (1 << (FlinkSQLParser.KW_SECTION - 128)) | (1 << (FlinkSQLParser.KW_SECURITY - 128)) | (1 << (FlinkSQLParser.KW_SELF - 128)) | (1 << (FlinkSQLParser.KW_SERVER - 128)) | (1 << (FlinkSQLParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSQLParser.KW_SESSION - 128)) | (1 << (FlinkSQLParser.KW_SETS - 128)) | (1 << (FlinkSQLParser.KW_SIMPLE - 128)) | (1 << (FlinkSQLParser.KW_SIZE - 128)) | (1 << (FlinkSQLParser.KW_SLIDE - 128)) | (1 << (FlinkSQLParser.KW_SOURCE - 128)) | (1 << (FlinkSQLParser.KW_SPACE - 128)) | (1 << (FlinkSQLParser.KW_STATE - 128)) | (1 << (FlinkSQLParser.KW_STATEMENT - 128)) | (1 << (FlinkSQLParser.KW_STEP - 128)) | (1 << (FlinkSQLParser.KW_STRING - 128)) | (1 << (FlinkSQLParser.KW_STRUCTURE - 128)) | (1 << (FlinkSQLParser.KW_STYLE - 128)) | (1 << (FlinkSQLParser.KW_TABLES - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSQLParser.KW_TEMPORARY - 160)) | (1 << (FlinkSQLParser.KW_TIMECOL - 160)) | (1 << (FlinkSQLParser.KW_FLOOR - 160)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_LTZ - 160)) | (1 << (FlinkSQLParser.KW_TIMESTAMPADD - 160)) | (1 << (FlinkSQLParser.KW_TIMESTAMPDIFF - 160)) | (1 << (FlinkSQLParser.KW_TO_TIMESTAMP - 160)) | (1 << (FlinkSQLParser.KW_TRANSFORM - 160)) | (1 << (FlinkSQLParser.KW_TUMBLE - 160)) | (1 << (FlinkSQLParser.KW_TYPE - 160)) | (1 << (FlinkSQLParser.KW_UNDER - 160)) | (1 << (FlinkSQLParser.KW_UNLOAD - 160)) | (1 << (FlinkSQLParser.KW_USAGE - 160)) | (1 << (FlinkSQLParser.KW_USE - 160)) | (1 << (FlinkSQLParser.KW_UTF16 - 160)) | (1 << (FlinkSQLParser.KW_UTF32 - 160)) | (1 << (FlinkSQLParser.KW_UTF8 - 160)) | (1 << (FlinkSQLParser.KW_VERSION - 160)) | (1 << (FlinkSQLParser.KW_VIEW - 160)) | (1 << (FlinkSQLParser.KW_VIEWS - 160)) | (1 << (FlinkSQLParser.KW_VIRTUAL - 160)) | (1 << (FlinkSQLParser.KW_WATERMARK - 160)) | (1 << (FlinkSQLParser.KW_WATERMARKS - 160)) | (1 << (FlinkSQLParser.KW_WEEK - 160)) | (1 << (FlinkSQLParser.KW_WORK - 160)) | (1 << (FlinkSQLParser.KW_WRAPPER - 160)) | (1 << (FlinkSQLParser.KW_YEARS - 160)) | (1 << (FlinkSQLParser.KW_ZONE - 160)))) !== 0) || _la === FlinkSQLParser.KW_DATE || _la === FlinkSQLParser.KW_LOCALTIMESTAMP || _la === FlinkSQLParser.KW_USER || ((((_la - 439)) & ~0x1F) === 0 && ((1 << (_la - 439)) & ((1 << (FlinkSQLParser.DOLLAR - 439)) | (1 << (FlinkSQLParser.STRING_LITERAL - 439)) | (1 << (FlinkSQLParser.DIG_LITERAL - 439)) | (1 << (FlinkSQLParser.ID_LITERAL - 439)))) !== 0)) {
				{
				this.state = 726;
				this.uid();
				}
			}

			this.state = 729;
			this.match(FlinkSQLParser.KW_TO);
			this.state = 730;
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
		this.enterRule(_localctx, 32, FlinkSQLParser.RULE_setKeyValueDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 732;
			this.match(FlinkSQLParser.KW_SET);
			this.state = 733;
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
		this.enterRule(_localctx, 34, FlinkSQLParser.RULE_addConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 735;
			this.match(FlinkSQLParser.KW_ADD);
			this.state = 736;
			this.match(FlinkSQLParser.KW_CONSTRAINT);
			this.state = 737;
			this.constraintName();
			this.state = 738;
			this.match(FlinkSQLParser.KW_PRIMARY);
			this.state = 739;
			this.match(FlinkSQLParser.KW_KEY);
			this.state = 740;
			this.columnNameList();
			this.state = 742;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_NOT) {
				{
				this.state = 741;
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
		this.enterRule(_localctx, 36, FlinkSQLParser.RULE_dropConstraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 744;
			this.match(FlinkSQLParser.KW_DROP);
			this.state = 745;
			this.match(FlinkSQLParser.KW_CONSTRAINT);
			this.state = 746;
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
		this.enterRule(_localctx, 38, FlinkSQLParser.RULE_addUnique);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 748;
			this.match(FlinkSQLParser.KW_ADD);
			this.state = 749;
			this.match(FlinkSQLParser.KW_UNIQUE);
			this.state = 750;
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
		this.enterRule(_localctx, 40, FlinkSQLParser.RULE_notForced);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 752;
			this.match(FlinkSQLParser.KW_NOT);
			this.state = 753;
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
		this.enterRule(_localctx, 42, FlinkSQLParser.RULE_alertView);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 755;
			this.match(FlinkSQLParser.KW_ALTER);
			this.state = 756;
			this.match(FlinkSQLParser.KW_VIEW);
			this.state = 757;
			this.uid();
			this.state = 761;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_RENAME:
				{
				this.state = 758;
				this.renameDefinition();
				}
				break;
			case FlinkSQLParser.KW_AS:
				{
				this.state = 759;
				this.match(FlinkSQLParser.KW_AS);
				this.state = 760;
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
	public alterCatalog(): AlterCatalogContext {
		let _localctx: AlterCatalogContext = new AlterCatalogContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, FlinkSQLParser.RULE_alterCatalog);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 763;
			this.match(FlinkSQLParser.KW_ALTER);
			this.state = 764;
			this.match(FlinkSQLParser.KW_CATALOG);
			this.state = 765;
			this.catalogPath();
			this.state = 778;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_SET:
				{
				this.state = 766;
				this.match(FlinkSQLParser.KW_SET);
				this.state = 767;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 768;
				this.tableProperty();
				this.state = 769;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;
			case FlinkSQLParser.KW_RESET:
				{
				this.state = 771;
				this.match(FlinkSQLParser.KW_RESET);
				this.state = 772;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 773;
				this.tablePropertyKey();
				this.state = 774;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;
			case FlinkSQLParser.KW_COMMENT:
				{
				this.state = 776;
				this.match(FlinkSQLParser.KW_COMMENT);
				this.state = 777;
				this.tablePropertyKey();
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
		this.enterRule(_localctx, 46, FlinkSQLParser.RULE_alterDatabase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 780;
			this.match(FlinkSQLParser.KW_ALTER);
			this.state = 781;
			this.match(FlinkSQLParser.KW_DATABASE);
			this.state = 782;
			this.databasePath();
			this.state = 783;
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
		this.enterRule(_localctx, 48, FlinkSQLParser.RULE_alterFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 785;
			this.match(FlinkSQLParser.KW_ALTER);
			this.state = 789;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				{
				this.state = 786;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				}
				break;

			case 2:
				{
				this.state = 787;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				this.state = 788;
				this.match(FlinkSQLParser.KW_SYSTEM);
				}
				break;
			}
			this.state = 791;
			this.match(FlinkSQLParser.KW_FUNCTION);
			this.state = 793;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 792;
				this.ifExists();
				}
				break;
			}
			this.state = 795;
			this.uid();
			this.state = 796;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 797;
			this.identifier();
			this.state = 800;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_LANGUAGE) {
				{
				this.state = 798;
				this.match(FlinkSQLParser.KW_LANGUAGE);
				this.state = 799;
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
		this.enterRule(_localctx, 50, FlinkSQLParser.RULE_dropCatalog);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 802;
			this.match(FlinkSQLParser.KW_DROP);
			this.state = 803;
			this.match(FlinkSQLParser.KW_CATALOG);
			this.state = 805;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				{
				this.state = 804;
				this.ifExists();
				}
				break;
			}
			this.state = 807;
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
		this.enterRule(_localctx, 52, FlinkSQLParser.RULE_dropTable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 809;
			this.match(FlinkSQLParser.KW_DROP);
			this.state = 811;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_TEMPORARY) {
				{
				this.state = 810;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				}
			}

			this.state = 813;
			this.match(FlinkSQLParser.KW_TABLE);
			this.state = 815;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				{
				this.state = 814;
				this.ifExists();
				}
				break;
			}
			this.state = 817;
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
		this.enterRule(_localctx, 54, FlinkSQLParser.RULE_dropDatabase);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 819;
			this.match(FlinkSQLParser.KW_DROP);
			this.state = 820;
			this.match(FlinkSQLParser.KW_DATABASE);
			this.state = 822;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 821;
				this.ifExists();
				}
				break;
			}
			this.state = 824;
			this.databasePath();
			this.state = 826;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_CASCADE || _la === FlinkSQLParser.KW_RESTRICT) {
				{
				this.state = 825;
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
		this.enterRule(_localctx, 56, FlinkSQLParser.RULE_dropView);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 828;
			this.match(FlinkSQLParser.KW_DROP);
			this.state = 830;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_TEMPORARY) {
				{
				this.state = 829;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				}
			}

			this.state = 832;
			this.match(FlinkSQLParser.KW_VIEW);
			this.state = 834;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				{
				this.state = 833;
				this.ifExists();
				}
				break;
			}
			this.state = 836;
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
		this.enterRule(_localctx, 58, FlinkSQLParser.RULE_dropFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 838;
			this.match(FlinkSQLParser.KW_DROP);
			this.state = 842;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				{
				this.state = 839;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				}
				break;

			case 2:
				{
				this.state = 840;
				this.match(FlinkSQLParser.KW_TEMPORARY);
				this.state = 841;
				this.match(FlinkSQLParser.KW_SYSTEM);
				}
				break;
			}
			this.state = 844;
			this.match(FlinkSQLParser.KW_FUNCTION);
			this.state = 846;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				{
				this.state = 845;
				this.ifExists();
				}
				break;
			}
			this.state = 848;
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
		this.enterRule(_localctx, 60, FlinkSQLParser.RULE_insertStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 851;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_EXECUTE) {
				{
				this.state = 850;
				this.match(FlinkSQLParser.KW_EXECUTE);
				}
			}

			this.state = 853;
			this.insertSimpleStatement();
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
	public insertSimpleStatement(): InsertSimpleStatementContext {
		let _localctx: InsertSimpleStatementContext = new InsertSimpleStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, FlinkSQLParser.RULE_insertSimpleStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 855;
			this.match(FlinkSQLParser.KW_INSERT);
			this.state = 861;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_INTO:
				{
				this.state = 856;
				this.match(FlinkSQLParser.KW_INTO);
				}
				break;
			case FlinkSQLParser.KW_OVERWRITE:
				{
				this.state = 857;
				this.match(FlinkSQLParser.KW_OVERWRITE);
				this.state = 859;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_TABLE) {
					{
					this.state = 858;
					this.match(FlinkSQLParser.KW_TABLE);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 863;
			this.tablePath();
			this.state = 872;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				{
				this.state = 865;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_PARTITION) {
					{
					this.state = 864;
					this.insertPartitionDefinition();
					}
				}

				this.state = 868;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
				case 1:
					{
					this.state = 867;
					this.columnNameList();
					}
					break;
				}
				this.state = 870;
				this.queryStatement(0);
				}
				break;

			case 2:
				{
				this.state = 871;
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
		this.enterRule(_localctx, 64, FlinkSQLParser.RULE_insertPartitionDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 874;
			this.match(FlinkSQLParser.KW_PARTITION);
			this.state = 875;
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
		let _startState: number = 66;
		this.enterRecursionRule(_localctx, 66, FlinkSQLParser.RULE_queryStatement, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 893;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_VALUES:
				{
				_localctx = new Values_caluseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 878;
				this.valuesCaluse();
				}
				break;
			case FlinkSQLParser.LR_BRACKET:
				{
				_localctx = new Sub_queryContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 879;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 880;
				this.queryStatement(0);
				this.state = 881;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;
			case FlinkSQLParser.KW_SELECT:
				{
				_localctx = new Common_selectContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 885;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
				case 1:
					{
					this.state = 883;
					this.selectClause();
					}
					break;

				case 2:
					{
					this.state = 884;
					this.selectStatement();
					}
					break;
				}
				this.state = 888;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
				case 1:
					{
					this.state = 887;
					this.orderByCaluse();
					}
					break;
				}
				this.state = 891;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
				case 1:
					{
					this.state = 890;
					this.limitClause();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 909;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Union_queryContext(new QueryStatementContext(_parentctx, _parentState));
					(_localctx as Union_queryContext)._left = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_queryStatement);
					this.state = 895;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 896;
					(_localctx as Union_queryContext)._operator = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === FlinkSQLParser.KW_EXCEPT || _la === FlinkSQLParser.KW_INTERSECT || _la === FlinkSQLParser.KW_UNION)) {
						(_localctx as Union_queryContext)._operator = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 898;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSQLParser.KW_ALL) {
						{
						this.state = 897;
						this.match(FlinkSQLParser.KW_ALL);
						}
					}

					this.state = 900;
					(_localctx as Union_queryContext)._right = this.queryStatement(0);
					this.state = 902;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
					case 1:
						{
						this.state = 901;
						this.orderByCaluse();
						}
						break;
					}
					this.state = 905;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
					case 1:
						{
						this.state = 904;
						this.limitClause();
						}
						break;
					}
					}
					}
				}
				this.state = 911;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
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
		this.enterRule(_localctx, 68, FlinkSQLParser.RULE_valuesCaluse);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 912;
			this.match(FlinkSQLParser.KW_VALUES);
			this.state = 913;
			this.expression();
			this.state = 918;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 914;
					this.match(FlinkSQLParser.COMMA);
					this.state = 915;
					this.expression();
					}
					}
				}
				this.state = 920;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
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
		this.enterRule(_localctx, 70, FlinkSQLParser.RULE_withItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 921;
			this.withItemName();
			this.state = 933;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.LR_BRACKET) {
				{
				this.state = 922;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 923;
				this.columnName();
				this.state = 928;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 924;
					this.match(FlinkSQLParser.COMMA);
					this.state = 925;
					this.columnName();
					}
					}
					this.state = 930;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 931;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
			}

			this.state = 935;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 936;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 937;
			this.queryStatement(0);
			this.state = 938;
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
		this.enterRule(_localctx, 72, FlinkSQLParser.RULE_withItemName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 940;
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
	public groupByClause(): GroupByClauseContext {
		let _localctx: GroupByClauseContext = new GroupByClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, FlinkSQLParser.RULE_groupByClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 942;
			this.match(FlinkSQLParser.KW_GROUP);
			this.state = 943;
			this.match(FlinkSQLParser.KW_BY);
			this.state = 944;
			this.groupItemDefinition();
			this.state = 949;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 945;
					this.match(FlinkSQLParser.COMMA);
					this.state = 946;
					this.groupItemDefinition();
					}
					}
				}
				this.state = 951;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
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
	public selectClause(): SelectClauseContext {
		let _localctx: SelectClauseContext = new SelectClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, FlinkSQLParser.RULE_selectClause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 952;
			this.match(FlinkSQLParser.KW_SELECT);
			this.state = 954;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_ALL || _la === FlinkSQLParser.KW_DISTINCT) {
				{
				this.state = 953;
				this.setQuantifier();
				}
			}

			this.state = 965;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				{
				this.state = 956;
				this.match(FlinkSQLParser.ASTERISK_SIGN);
				}
				break;

			case 2:
				{
				this.state = 957;
				this.projectItemDefinition();
				this.state = 962;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 958;
						this.match(FlinkSQLParser.COMMA);
						this.state = 959;
						this.projectItemDefinition();
						}
						}
					}
					this.state = 964;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
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
		this.enterRule(_localctx, 78, FlinkSQLParser.RULE_projectItemDefinition);
		let _la: number;
		try {
			this.state = 975;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 967;
				this.overWindowItem();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 968;
				this.expression();
				this.state = 973;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
				case 1:
					{
					this.state = 970;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSQLParser.KW_AS) {
						{
						this.state = 969;
						this.match(FlinkSQLParser.KW_AS);
						}
					}

					this.state = 972;
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
		this.enterRule(_localctx, 80, FlinkSQLParser.RULE_overWindowItem);
		let _la: number;
		try {
			this.state = 993;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 977;
				this.primaryExpression(0);
				this.state = 978;
				this.match(FlinkSQLParser.KW_OVER);
				this.state = 979;
				this.windowSpec();
				this.state = 981;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_AS) {
					{
					this.state = 980;
					this.match(FlinkSQLParser.KW_AS);
					}
				}

				this.state = 983;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 985;
				this.primaryExpression(0);
				this.state = 986;
				this.match(FlinkSQLParser.KW_OVER);
				this.state = 987;
				this.errorCapturingIdentifier();
				this.state = 989;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_AS) {
					{
					this.state = 988;
					this.match(FlinkSQLParser.KW_AS);
					}
				}

				this.state = 991;
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
		this.enterRule(_localctx, 82, FlinkSQLParser.RULE_fromClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 995;
			this.match(FlinkSQLParser.KW_FROM);
			this.state = 996;
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
		let _startState: number = 84;
		this.enterRecursionRule(_localctx, 84, FlinkSQLParser.RULE_tableExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1009;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				{
				this.state = 999;
				this.tableReference();
				this.state = 1004;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1000;
						this.match(FlinkSQLParser.COMMA);
						this.state = 1001;
						this.tableReference();
						}
						}
					}
					this.state = 1006;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
				}
				}
				break;

			case 2:
				{
				this.state = 1007;
				this.inlineDataValueClause();
				}
				break;

			case 3:
				{
				this.state = 1008;
				this.windowTVFClause();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1042;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1040;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
					case 1:
						{
						_localctx = new TableExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_tableExpression);
						this.state = 1011;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1012;
						this.match(FlinkSQLParser.KW_CROSS);
						this.state = 1013;
						this.match(FlinkSQLParser.KW_JOIN);
						this.state = 1014;
						this.tableExpression(4);
						}
						break;

					case 2:
						{
						_localctx = new TableExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_tableExpression);
						this.state = 1015;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1017;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FlinkSQLParser.KW_NATURAL) {
							{
							this.state = 1016;
							this.match(FlinkSQLParser.KW_NATURAL);
							}
						}

						this.state = 1020;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & ((1 << (FlinkSQLParser.KW_FULL - 274)) | (1 << (FlinkSQLParser.KW_INNER - 274)) | (1 << (FlinkSQLParser.KW_LEFT - 274)))) !== 0) || _la === FlinkSQLParser.KW_RIGHT) {
							{
							this.state = 1019;
							this.joinOp();
							}
						}

						this.state = 1023;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FlinkSQLParser.KW_OUTER) {
							{
							this.state = 1022;
							this.match(FlinkSQLParser.KW_OUTER);
							}
						}

						this.state = 1026;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FlinkSQLParser.KW_SEMI) {
							{
							this.state = 1025;
							this.match(FlinkSQLParser.KW_SEMI);
							}
						}

						this.state = 1028;
						this.match(FlinkSQLParser.KW_JOIN);
						this.state = 1029;
						this.tableExpression(0);
						this.state = 1031;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
						case 1:
							{
							this.state = 1030;
							this.joinCondition();
							}
							break;
						}
						this.state = 1037;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 1033;
								this.match(FlinkSQLParser.COMMA);
								this.state = 1034;
								this.tableReference();
								}
								}
							}
							this.state = 1039;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
						}
						}
						break;
					}
					}
				}
				this.state = 1044;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
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
	public flinkJoinOp(): FlinkJoinOpContext {
		let _localctx: FlinkJoinOpContext = new FlinkJoinOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, FlinkSQLParser.RULE_flinkJoinOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1045;
			_la = this._input.LA(1);
			if (!(((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & ((1 << (FlinkSQLParser.KW_FULL - 274)) | (1 << (FlinkSQLParser.KW_INNER - 274)) | (1 << (FlinkSQLParser.KW_LEFT - 274)))) !== 0) || _la === FlinkSQLParser.KW_RIGHT)) {
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
	public tableReference(): TableReferenceContext {
		let _localctx: TableReferenceContext = new TableReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, FlinkSQLParser.RULE_tableReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1047;
			this.tablePrimary();
			this.state = 1049;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
			case 1:
				{
				this.state = 1048;
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
		this.enterRule(_localctx, 90, FlinkSQLParser.RULE_tablePrimary);
		let _la: number;
		try {
			this.state = 1118;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1052;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_TABLE) {
					{
					this.state = 1051;
					this.match(FlinkSQLParser.KW_TABLE);
					}
				}

				this.state = 1054;
				this.tablePath();
				this.state = 1056;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
				case 1:
					{
					this.state = 1055;
					this.timePeriod();
					}
					break;
				}
				this.state = 1060;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
				case 1:
					{
					this.state = 1058;
					this.match(FlinkSQLParser.KW_AS);
					this.state = 1059;
					this.correlationName();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1062;
				this.match(FlinkSQLParser.KW_LATERAL);
				this.state = 1063;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 1064;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1065;
				this.functionName();
				this.state = 1066;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1067;
				this.functionParam();
				this.state = 1072;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1068;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1069;
					this.functionParam();
					}
					}
					this.state = 1074;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1075;
				this.match(FlinkSQLParser.RR_BRACKET);
				this.state = 1076;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1079;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_LATERAL) {
					{
					this.state = 1078;
					this.match(FlinkSQLParser.KW_LATERAL);
					}
				}

				this.state = 1081;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1082;
				this.queryStatement(0);
				this.state = 1083;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1085;
				this.match(FlinkSQLParser.KW_LATERAL);
				this.state = 1086;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 1087;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1088;
				this.functionName();
				this.state = 1089;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1090;
				this.functionParam();
				this.state = 1095;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1091;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1092;
					this.functionParam();
					}
					}
					this.state = 1097;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1098;
				this.match(FlinkSQLParser.RR_BRACKET);
				this.state = 1099;
				this.match(FlinkSQLParser.RR_BRACKET);
				this.state = 1100;
				this.match(FlinkSQLParser.KW_AS);
				this.state = 1101;
				this.tableAlias();
				this.state = 1102;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1103;
				this.projectItemDefinition();
				this.state = 1108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1104;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1105;
					this.projectItemDefinition();
					}
					}
					this.state = 1110;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1111;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1113;
				this.match(FlinkSQLParser.KW_UNNEST);
				this.state = 1114;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1115;
				this.expression();
				this.state = 1116;
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
	public timePeriod(): TimePeriodContext {
		let _localctx: TimePeriodContext = new TimePeriodContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, FlinkSQLParser.RULE_timePeriod);
		try {
			this.state = 1128;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_FOR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1120;
				this.match(FlinkSQLParser.KW_FOR);
				this.state = 1121;
				this.match(FlinkSQLParser.KW_SYSTEM_TIME);
				this.state = 1122;
				this.match(FlinkSQLParser.KW_AS);
				this.state = 1123;
				this.match(FlinkSQLParser.KW_OF);
				this.state = 1124;
				this.dateTimeExpression();
				}
				break;
			case FlinkSQLParser.KW_AS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1125;
				this.match(FlinkSQLParser.KW_AS);
				this.state = 1126;
				this.match(FlinkSQLParser.KW_OF);
				this.state = 1127;
				this.dateTimeExpression();
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
	public dateTimeExpression(): DateTimeExpressionContext {
		let _localctx: DateTimeExpressionContext = new DateTimeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, FlinkSQLParser.RULE_dateTimeExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1130;
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
		this.enterRule(_localctx, 96, FlinkSQLParser.RULE_inlineDataValueClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1132;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1133;
			this.valuesDefinition();
			this.state = 1134;
			this.match(FlinkSQLParser.RR_BRACKET);
			this.state = 1135;
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
	public windowTVFClause(): WindowTVFClauseContext {
		let _localctx: WindowTVFClauseContext = new WindowTVFClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, FlinkSQLParser.RULE_windowTVFClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1137;
			this.match(FlinkSQLParser.KW_TABLE);
			this.state = 1138;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1139;
			this.windowTVFExpression();
			this.state = 1140;
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
	public windowTVFExpression(): WindowTVFExpressionContext {
		let _localctx: WindowTVFExpressionContext = new WindowTVFExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, FlinkSQLParser.RULE_windowTVFExpression);
		try {
			this.state = 1146;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_TUMBLE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1142;
				this.tumableExpression();
				}
				break;
			case FlinkSQLParser.KW_HOP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1143;
				this.hopExpression();
				}
				break;
			case FlinkSQLParser.KW_CUMULATE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1144;
				this.cumulateExpression();
				}
				break;
			case FlinkSQLParser.KW_SESSION:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1145;
				this.sessionExpression();
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
	public tumableExpression(): TumableExpressionContext {
		let _localctx: TumableExpressionContext = new TumableExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, FlinkSQLParser.RULE_tumableExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1148;
			this.match(FlinkSQLParser.KW_TUMBLE);
			this.state = 1149;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1154;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_TABLE:
				{
				this.state = 1150;
				this.match(FlinkSQLParser.KW_TABLE);
				}
				break;
			case FlinkSQLParser.KW_DATA:
				{
				this.state = 1151;
				this.match(FlinkSQLParser.KW_DATA);
				this.state = 1152;
				this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
				this.state = 1153;
				this.match(FlinkSQLParser.KW_TABLE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1156;
			this.uid();
			{
			this.state = 1157;
			this.match(FlinkSQLParser.COMMA);
			this.state = 1160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_TIMECOL) {
				{
				this.state = 1158;
				this.match(FlinkSQLParser.KW_TIMECOL);
				this.state = 1159;
				this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
				}
			}

			this.state = 1162;
			this.columnDescriptor();
			}
			{
			this.state = 1164;
			this.match(FlinkSQLParser.COMMA);
			this.state = 1167;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_SIZE) {
				{
				this.state = 1165;
				this.match(FlinkSQLParser.KW_SIZE);
				this.state = 1166;
				this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
				}
			}

			this.state = 1169;
			this.timeIntervalExpression();
			}
			this.state = 1179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.COMMA) {
				{
				this.state = 1171;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.DOUBLE_QUOTE_SYMB) {
					{
					this.state = 1172;
					this.match(FlinkSQLParser.DOUBLE_QUOTE_SYMB);
					this.state = 1173;
					this.match(FlinkSQLParser.KW_OFFSET);
					this.state = 1174;
					this.match(FlinkSQLParser.DOUBLE_QUOTE_SYMB);
					this.state = 1175;
					this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
					}
				}

				this.state = 1178;
				this.timeIntervalExpression();
				}
			}

			this.state = 1181;
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
	public hopExpression(): HopExpressionContext {
		let _localctx: HopExpressionContext = new HopExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, FlinkSQLParser.RULE_hopExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1183;
			this.match(FlinkSQLParser.KW_HOP);
			this.state = 1184;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1189;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_TABLE:
				{
				this.state = 1185;
				this.match(FlinkSQLParser.KW_TABLE);
				}
				break;
			case FlinkSQLParser.KW_DATA:
				{
				this.state = 1186;
				this.match(FlinkSQLParser.KW_DATA);
				this.state = 1187;
				this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
				this.state = 1188;
				this.match(FlinkSQLParser.KW_TABLE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1191;
			this.uid();
			{
			this.state = 1192;
			this.match(FlinkSQLParser.COMMA);
			this.state = 1195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_TIMECOL) {
				{
				this.state = 1193;
				this.match(FlinkSQLParser.KW_TIMECOL);
				this.state = 1194;
				this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
				}
			}

			this.state = 1197;
			this.columnDescriptor();
			}
			this.state = 1205;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
			case 1:
				{
				this.state = 1199;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_SLIDE) {
					{
					this.state = 1200;
					this.match(FlinkSQLParser.KW_SLIDE);
					this.state = 1201;
					this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
					}
				}

				this.state = 1204;
				this.timeIntervalExpression();
				}
				break;
			}
			{
			this.state = 1207;
			this.match(FlinkSQLParser.COMMA);
			this.state = 1210;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_SIZE) {
				{
				this.state = 1208;
				this.match(FlinkSQLParser.KW_SIZE);
				this.state = 1209;
				this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
				}
			}

			this.state = 1212;
			this.timeIntervalExpression();
			}
			this.state = 1222;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.COMMA) {
				{
				this.state = 1214;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.DOUBLE_QUOTE_SYMB) {
					{
					this.state = 1215;
					this.match(FlinkSQLParser.DOUBLE_QUOTE_SYMB);
					this.state = 1216;
					this.match(FlinkSQLParser.KW_OFFSET);
					this.state = 1217;
					this.match(FlinkSQLParser.DOUBLE_QUOTE_SYMB);
					this.state = 1218;
					this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
					}
				}

				this.state = 1221;
				this.timeIntervalExpression();
				}
			}

			this.state = 1224;
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
	public cumulateExpression(): CumulateExpressionContext {
		let _localctx: CumulateExpressionContext = new CumulateExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, FlinkSQLParser.RULE_cumulateExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1226;
			this.match(FlinkSQLParser.KW_CUMULATE);
			this.state = 1227;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1232;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_TABLE:
				{
				this.state = 1228;
				this.match(FlinkSQLParser.KW_TABLE);
				}
				break;
			case FlinkSQLParser.KW_DATA:
				{
				this.state = 1229;
				this.match(FlinkSQLParser.KW_DATA);
				this.state = 1230;
				this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
				this.state = 1231;
				this.match(FlinkSQLParser.KW_TABLE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1234;
			this.uid();
			{
			this.state = 1235;
			this.match(FlinkSQLParser.COMMA);
			this.state = 1238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_TIMECOL) {
				{
				this.state = 1236;
				this.match(FlinkSQLParser.KW_TIMECOL);
				this.state = 1237;
				this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
				}
			}

			this.state = 1240;
			this.columnDescriptor();
			}
			this.state = 1248;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 141, this._ctx) ) {
			case 1:
				{
				this.state = 1242;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1245;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_STEP) {
					{
					this.state = 1243;
					this.match(FlinkSQLParser.KW_STEP);
					this.state = 1244;
					this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
					}
				}

				this.state = 1247;
				this.timeIntervalExpression();
				}
				break;
			}
			{
			this.state = 1250;
			this.match(FlinkSQLParser.COMMA);
			this.state = 1253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_SIZE) {
				{
				this.state = 1251;
				this.match(FlinkSQLParser.KW_SIZE);
				this.state = 1252;
				this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
				}
			}

			this.state = 1255;
			this.timeIntervalExpression();
			}
			this.state = 1257;
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
	public sessionExpression(): SessionExpressionContext {
		let _localctx: SessionExpressionContext = new SessionExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, FlinkSQLParser.RULE_sessionExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1259;
			this.match(FlinkSQLParser.KW_SESSION);
			this.state = 1260;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1265;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_TABLE:
				{
				this.state = 1261;
				this.match(FlinkSQLParser.KW_TABLE);
				}
				break;
			case FlinkSQLParser.KW_DATA:
				{
				this.state = 1262;
				this.match(FlinkSQLParser.KW_DATA);
				this.state = 1263;
				this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
				this.state = 1264;
				this.match(FlinkSQLParser.KW_TABLE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1267;
			this.uid();
			this.state = 1278;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_PARTITION) {
				{
				this.state = 1268;
				this.match(FlinkSQLParser.KW_PARTITION);
				this.state = 1269;
				this.match(FlinkSQLParser.KW_BY);
				this.state = 1270;
				this.uid();
				this.state = 1275;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1271;
						this.match(FlinkSQLParser.COMMA);
						this.state = 1272;
						this.uid();
						}
						}
					}
					this.state = 1277;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
				}
				}
			}

			this.state = 1286;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 147, this._ctx) ) {
			case 1:
				{
				this.state = 1280;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1283;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_TIMECOL) {
					{
					this.state = 1281;
					this.match(FlinkSQLParser.KW_TIMECOL);
					this.state = 1282;
					this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
					}
				}

				this.state = 1285;
				this.columnDescriptor();
				}
				break;
			}
			this.state = 1294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.COMMA) {
				{
				this.state = 1288;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1291;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_GAP) {
					{
					this.state = 1289;
					this.match(FlinkSQLParser.KW_GAP);
					this.state = 1290;
					this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
					}
				}

				this.state = 1293;
				this.timeIntervalExpression();
				}
			}

			this.state = 1296;
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
	public windowTVFName(): WindowTVFNameContext {
		let _localctx: WindowTVFNameContext = new WindowTVFNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, FlinkSQLParser.RULE_windowTVFName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1298;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.KW_CUMULATE || _la === FlinkSQLParser.KW_HOP || _la === FlinkSQLParser.KW_SESSION || _la === FlinkSQLParser.KW_TUMBLE)) {
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
		this.enterRule(_localctx, 112, FlinkSQLParser.RULE_windowTVFParam);
		try {
			this.state = 1315;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 150, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1300;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 1301;
				this.timeAttrColumn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1302;
				this.columnDescriptor();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1303;
				this.timeIntervalExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1304;
				this.match(FlinkSQLParser.KW_DATA);
				this.state = 1305;
				this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
				this.state = 1306;
				this.match(FlinkSQLParser.KW_TABLE);
				this.state = 1307;
				this.timeAttrColumn();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1308;
				this.match(FlinkSQLParser.KW_TIMECOL);
				this.state = 1309;
				this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
				this.state = 1310;
				this.columnDescriptor();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1311;
				this.timeIntervalParamName();
				this.state = 1312;
				this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
				this.state = 1313;
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
		this.enterRule(_localctx, 114, FlinkSQLParser.RULE_timeIntervalParamName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1317;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.KW_DATA || ((((_la - 147)) & ~0x1F) === 0 && ((1 << (_la - 147)) & ((1 << (FlinkSQLParser.KW_SIZE - 147)) | (1 << (FlinkSQLParser.KW_SLIDE - 147)) | (1 << (FlinkSQLParser.KW_STEP - 147)) | (1 << (FlinkSQLParser.KW_TIMECOL - 147)))) !== 0) || _la === FlinkSQLParser.KW_OFFSET)) {
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
		this.enterRule(_localctx, 116, FlinkSQLParser.RULE_columnDescriptor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1319;
			this.match(FlinkSQLParser.KW_DESCRIPTOR);
			this.state = 1320;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1321;
			this.uid();
			this.state = 1322;
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
		this.enterRule(_localctx, 118, FlinkSQLParser.RULE_joinCondition);
		let _la: number;
		try {
			this.state = 1338;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_ON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1324;
				this.match(FlinkSQLParser.KW_ON);
				this.state = 1325;
				this.booleanExpression(0);
				}
				break;
			case FlinkSQLParser.KW_USING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1326;
				this.match(FlinkSQLParser.KW_USING);
				this.state = 1327;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1328;
				this.uid();
				this.state = 1333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1329;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1330;
					this.uid();
					}
					}
					this.state = 1335;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1336;
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
		this.enterRule(_localctx, 120, FlinkSQLParser.RULE_whereClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1340;
			this.match(FlinkSQLParser.KW_WHERE);
			this.state = 1341;
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
	public groupItemDefinition(): GroupItemDefinitionContext {
		let _localctx: GroupItemDefinitionContext = new GroupItemDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, FlinkSQLParser.RULE_groupItemDefinition);
		let _la: number;
		try {
			this.state = 1382;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 156, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1343;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1344;
				this.groupWindowFunction();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1345;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1346;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1347;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1348;
				this.expression();
				this.state = 1353;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1349;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1350;
					this.expression();
					}
					}
					this.state = 1355;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1356;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1358;
				this.groupingSetsNotionName();
				this.state = 1359;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1360;
				this.expression();
				this.state = 1365;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1361;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1362;
					this.expression();
					}
					}
					this.state = 1367;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1368;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1370;
				this.groupingSets();
				this.state = 1371;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1372;
				this.groupItemDefinition();
				this.state = 1377;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1373;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1374;
					this.groupItemDefinition();
					}
					}
					this.state = 1379;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1380;
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
		this.enterRule(_localctx, 124, FlinkSQLParser.RULE_groupingSets);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1384;
			this.match(FlinkSQLParser.KW_GROUPING);
			this.state = 1385;
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
	public groupingSetsNotionName(): GroupingSetsNotionNameContext {
		let _localctx: GroupingSetsNotionNameContext = new GroupingSetsNotionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, FlinkSQLParser.RULE_groupingSetsNotionName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1387;
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
		this.enterRule(_localctx, 128, FlinkSQLParser.RULE_groupWindowFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1389;
			this.groupWindowFunctionName();
			this.state = 1390;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1391;
			this.timeAttrColumn();
			this.state = 1392;
			this.match(FlinkSQLParser.COMMA);
			this.state = 1393;
			this.timeIntervalExpression();
			this.state = 1394;
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
		this.enterRule(_localctx, 130, FlinkSQLParser.RULE_groupWindowFunctionName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1396;
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
		this.enterRule(_localctx, 132, FlinkSQLParser.RULE_timeAttrColumn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1398;
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
		this.enterRule(_localctx, 134, FlinkSQLParser.RULE_havingClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1400;
			this.match(FlinkSQLParser.KW_HAVING);
			this.state = 1401;
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
		this.enterRule(_localctx, 136, FlinkSQLParser.RULE_windowClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1403;
			this.match(FlinkSQLParser.KW_WINDOW);
			this.state = 1404;
			this.namedWindow();
			this.state = 1409;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1405;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1406;
					this.namedWindow();
					}
					}
				}
				this.state = 1411;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
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
		this.enterRule(_localctx, 138, FlinkSQLParser.RULE_namedWindow);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1412;
			_localctx._name = this.errorCapturingIdentifier();
			this.state = 1413;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 1414;
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
		this.enterRule(_localctx, 140, FlinkSQLParser.RULE_windowSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1417;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSQLParser.KW_ADD) | (1 << FlinkSQLParser.KW_ADMIN) | (1 << FlinkSQLParser.KW_AFTER) | (1 << FlinkSQLParser.KW_ANALYZE) | (1 << FlinkSQLParser.KW_ASC) | (1 << FlinkSQLParser.KW_BEFORE) | (1 << FlinkSQLParser.KW_BYTES) | (1 << FlinkSQLParser.KW_CASCADE) | (1 << FlinkSQLParser.KW_CATALOG) | (1 << FlinkSQLParser.KW_CATALOGS) | (1 << FlinkSQLParser.KW_CENTURY) | (1 << FlinkSQLParser.KW_CHAIN) | (1 << FlinkSQLParser.KW_CHANGELOG_MODE) | (1 << FlinkSQLParser.KW_CHARACTERS) | (1 << FlinkSQLParser.KW_COMMENT) | (1 << FlinkSQLParser.KW_COMPACT) | (1 << FlinkSQLParser.KW_COLUMNS) | (1 << FlinkSQLParser.KW_CONSTRAINTS) | (1 << FlinkSQLParser.KW_CONSTRUCTOR) | (1 << FlinkSQLParser.KW_CUMULATE) | (1 << FlinkSQLParser.KW_DATA) | (1 << FlinkSQLParser.KW_DATABASE) | (1 << FlinkSQLParser.KW_DATABASES) | (1 << FlinkSQLParser.KW_DAYS) | (1 << FlinkSQLParser.KW_DECADE) | (1 << FlinkSQLParser.KW_DEFINED) | (1 << FlinkSQLParser.KW_DESC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSQLParser.KW_DESCRIPTOR - 32)) | (1 << (FlinkSQLParser.KW_DIV - 32)) | (1 << (FlinkSQLParser.KW_ENCODING - 32)) | (1 << (FlinkSQLParser.KW_ENFORCED - 32)) | (1 << (FlinkSQLParser.KW_ENGINE - 32)) | (1 << (FlinkSQLParser.KW_ERROR - 32)) | (1 << (FlinkSQLParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSQLParser.KW_EXCEPTION - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDE - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDING - 32)) | (1 << (FlinkSQLParser.KW_EXTENDED - 32)) | (1 << (FlinkSQLParser.KW_FILE - 32)) | (1 << (FlinkSQLParser.KW_FINAL - 32)) | (1 << (FlinkSQLParser.KW_FIRST - 32)) | (1 << (FlinkSQLParser.KW_FOLLOWING - 32)) | (1 << (FlinkSQLParser.KW_FORMAT - 32)) | (1 << (FlinkSQLParser.KW_FORTRAN - 32)) | (1 << (FlinkSQLParser.KW_FOUND - 32)) | (1 << (FlinkSQLParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSQLParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSQLParser.KW_GENERAL - 32)) | (1 << (FlinkSQLParser.KW_GENERATED - 32)) | (1 << (FlinkSQLParser.KW_GO - 32)) | (1 << (FlinkSQLParser.KW_GOTO - 32)) | (1 << (FlinkSQLParser.KW_GRANTED - 32)) | (1 << (FlinkSQLParser.KW_HOP - 32)) | (1 << (FlinkSQLParser.KW_HOURS - 32)) | (1 << (FlinkSQLParser.KW_IF - 32)) | (1 << (FlinkSQLParser.KW_IGNORE - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSQLParser.KW_INCREMENT - 64)) | (1 << (FlinkSQLParser.KW_INPUT - 64)) | (1 << (FlinkSQLParser.KW_INVOKER - 64)) | (1 << (FlinkSQLParser.KW_JAR - 64)) | (1 << (FlinkSQLParser.KW_JARS - 64)) | (1 << (FlinkSQLParser.KW_JAVA - 64)) | (1 << (FlinkSQLParser.KW_JSON - 64)) | (1 << (FlinkSQLParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSQLParser.KW_KEY - 64)) | (1 << (FlinkSQLParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSQLParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSQLParser.KW_LABEL - 64)) | (1 << (FlinkSQLParser.KW_LAST - 64)) | (1 << (FlinkSQLParser.KW_LENGTH - 64)) | (1 << (FlinkSQLParser.KW_LEVEL - 64)) | (1 << (FlinkSQLParser.KW_LOAD - 64)) | (1 << (FlinkSQLParser.KW_MAP - 64)) | (1 << (FlinkSQLParser.KW_MICROSECOND - 64)) | (1 << (FlinkSQLParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSQLParser.KW_MILLISECOND - 64)) | (1 << (FlinkSQLParser.KW_MINUTES - 64)) | (1 << (FlinkSQLParser.KW_MINVALUE - 64)) | (1 << (FlinkSQLParser.KW_MODIFY - 64)) | (1 << (FlinkSQLParser.KW_MODULES - 64)) | (1 << (FlinkSQLParser.KW_MONTHS - 64)) | (1 << (FlinkSQLParser.KW_NANOSECOND - 64)) | (1 << (FlinkSQLParser.KW_NULLS - 64)) | (1 << (FlinkSQLParser.KW_NUMBER - 64)) | (1 << (FlinkSQLParser.KW_OPTION - 64)) | (1 << (FlinkSQLParser.KW_OPTIONS - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSQLParser.KW_ORDERING - 96)) | (1 << (FlinkSQLParser.KW_OUTPUT - 96)) | (1 << (FlinkSQLParser.KW_OVERWRITE - 96)) | (1 << (FlinkSQLParser.KW_OVERWRITING - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONED - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONS - 96)) | (1 << (FlinkSQLParser.KW_PASSING - 96)) | (1 << (FlinkSQLParser.KW_PAST - 96)) | (1 << (FlinkSQLParser.KW_PATH - 96)) | (1 << (FlinkSQLParser.KW_PLACING - 96)) | (1 << (FlinkSQLParser.KW_PLAN - 96)) | (1 << (FlinkSQLParser.KW_PRECEDING - 96)) | (1 << (FlinkSQLParser.KW_PRESERVE - 96)) | (1 << (FlinkSQLParser.KW_PRIOR - 96)) | (1 << (FlinkSQLParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSQLParser.KW_PUBLIC - 96)) | (1 << (FlinkSQLParser.KW_PYTHON - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSQLParser.KW_QUARTER - 96)) | (1 << (FlinkSQLParser.KW_RAW - 96)) | (1 << (FlinkSQLParser.KW_READ - 96)) | (1 << (FlinkSQLParser.KW_RELATIVE - 96)) | (1 << (FlinkSQLParser.KW_REMOVE - 96)) | (1 << (FlinkSQLParser.KW_RENAME - 96)) | (1 << (FlinkSQLParser.KW_REPLACE - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSQLParser.KW_RESPECT - 128)) | (1 << (FlinkSQLParser.KW_RESTART - 128)) | (1 << (FlinkSQLParser.KW_RESTRICT - 128)) | (1 << (FlinkSQLParser.KW_ROLE - 128)) | (1 << (FlinkSQLParser.KW_ROW_COUNT - 128)) | (1 << (FlinkSQLParser.KW_SCALA - 128)) | (1 << (FlinkSQLParser.KW_SCALAR - 128)) | (1 << (FlinkSQLParser.KW_SCALE - 128)) | (1 << (FlinkSQLParser.KW_SCHEMA - 128)) | (1 << (FlinkSQLParser.KW_SECONDS - 128)) | (1 << (FlinkSQLParser.KW_SECTION - 128)) | (1 << (FlinkSQLParser.KW_SECURITY - 128)) | (1 << (FlinkSQLParser.KW_SELF - 128)) | (1 << (FlinkSQLParser.KW_SERVER - 128)) | (1 << (FlinkSQLParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSQLParser.KW_SESSION - 128)) | (1 << (FlinkSQLParser.KW_SETS - 128)) | (1 << (FlinkSQLParser.KW_SIMPLE - 128)) | (1 << (FlinkSQLParser.KW_SIZE - 128)) | (1 << (FlinkSQLParser.KW_SLIDE - 128)) | (1 << (FlinkSQLParser.KW_SOURCE - 128)) | (1 << (FlinkSQLParser.KW_SPACE - 128)) | (1 << (FlinkSQLParser.KW_STATE - 128)) | (1 << (FlinkSQLParser.KW_STATEMENT - 128)) | (1 << (FlinkSQLParser.KW_STEP - 128)) | (1 << (FlinkSQLParser.KW_STRING - 128)) | (1 << (FlinkSQLParser.KW_STRUCTURE - 128)) | (1 << (FlinkSQLParser.KW_STYLE - 128)) | (1 << (FlinkSQLParser.KW_TABLES - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSQLParser.KW_TEMPORARY - 160)) | (1 << (FlinkSQLParser.KW_TIMECOL - 160)) | (1 << (FlinkSQLParser.KW_FLOOR - 160)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_LTZ - 160)) | (1 << (FlinkSQLParser.KW_TIMESTAMPADD - 160)) | (1 << (FlinkSQLParser.KW_TIMESTAMPDIFF - 160)) | (1 << (FlinkSQLParser.KW_TO_TIMESTAMP - 160)) | (1 << (FlinkSQLParser.KW_TRANSFORM - 160)) | (1 << (FlinkSQLParser.KW_TUMBLE - 160)) | (1 << (FlinkSQLParser.KW_TYPE - 160)) | (1 << (FlinkSQLParser.KW_UNDER - 160)) | (1 << (FlinkSQLParser.KW_UNLOAD - 160)) | (1 << (FlinkSQLParser.KW_USAGE - 160)) | (1 << (FlinkSQLParser.KW_USE - 160)) | (1 << (FlinkSQLParser.KW_UTF16 - 160)) | (1 << (FlinkSQLParser.KW_UTF32 - 160)) | (1 << (FlinkSQLParser.KW_UTF8 - 160)) | (1 << (FlinkSQLParser.KW_VERSION - 160)) | (1 << (FlinkSQLParser.KW_VIEW - 160)) | (1 << (FlinkSQLParser.KW_VIEWS - 160)) | (1 << (FlinkSQLParser.KW_VIRTUAL - 160)) | (1 << (FlinkSQLParser.KW_WATERMARK - 160)) | (1 << (FlinkSQLParser.KW_WATERMARKS - 160)) | (1 << (FlinkSQLParser.KW_WEEK - 160)) | (1 << (FlinkSQLParser.KW_WORK - 160)) | (1 << (FlinkSQLParser.KW_WRAPPER - 160)) | (1 << (FlinkSQLParser.KW_YEARS - 160)) | (1 << (FlinkSQLParser.KW_ZONE - 160)))) !== 0) || _la === FlinkSQLParser.KW_DATE || _la === FlinkSQLParser.KW_LOCALTIMESTAMP || _la === FlinkSQLParser.KW_USER || ((((_la - 439)) & ~0x1F) === 0 && ((1 << (_la - 439)) & ((1 << (FlinkSQLParser.DOLLAR - 439)) | (1 << (FlinkSQLParser.STRING_LITERAL - 439)) | (1 << (FlinkSQLParser.DIG_LITERAL - 439)) | (1 << (FlinkSQLParser.ID_LITERAL - 439)))) !== 0)) {
				{
				this.state = 1416;
				_localctx._name = this.errorCapturingIdentifier();
				}
			}

			this.state = 1419;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_PARTITION) {
				{
				this.state = 1420;
				this.partitionByClause();
				}
			}

			this.state = 1424;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_ORDER) {
				{
				this.state = 1423;
				this.orderByCaluse();
				}
			}

			this.state = 1427;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_RANGE || _la === FlinkSQLParser.KW_ROWS) {
				{
				this.state = 1426;
				this.windowFrame();
				}
			}

			this.state = 1429;
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
		this.enterRule(_localctx, 142, FlinkSQLParser.RULE_matchRecognizeClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1431;
			this.match(FlinkSQLParser.KW_MATCH_RECOGNIZE);
			this.state = 1432;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1434;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_PARTITION) {
				{
				this.state = 1433;
				this.partitionByClause();
				}
			}

			this.state = 1437;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_ORDER) {
				{
				this.state = 1436;
				this.orderByCaluse();
				}
			}

			this.state = 1440;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_MEASURES) {
				{
				this.state = 1439;
				this.measuresClause();
				}
			}

			this.state = 1443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_ALL || _la === FlinkSQLParser.KW_ONE) {
				{
				this.state = 1442;
				this.outputMode();
				}
			}

			this.state = 1446;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_AFTER) {
				{
				this.state = 1445;
				this.afterMatchStrategy();
				}
			}

			this.state = 1449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_PATTERN) {
				{
				this.state = 1448;
				this.patternDefinition();
				}
			}

			this.state = 1451;
			this.patternVariablesDefinition();
			this.state = 1452;
			this.match(FlinkSQLParser.RR_BRACKET);
			this.state = 1457;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 169, this._ctx) ) {
			case 1:
				{
				this.state = 1454;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_AS) {
					{
					this.state = 1453;
					this.match(FlinkSQLParser.KW_AS);
					}
				}

				this.state = 1456;
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
		this.enterRule(_localctx, 144, FlinkSQLParser.RULE_orderByCaluse);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1459;
			this.match(FlinkSQLParser.KW_ORDER);
			this.state = 1460;
			this.match(FlinkSQLParser.KW_BY);
			this.state = 1461;
			this.orderItemDefinition();
			this.state = 1466;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1462;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1463;
					this.orderItemDefinition();
					}
					}
				}
				this.state = 1468;
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
	public orderItemDefinition(): OrderItemDefinitionContext {
		let _localctx: OrderItemDefinitionContext = new OrderItemDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, FlinkSQLParser.RULE_orderItemDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1469;
			this.expression();
			this.state = 1471;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 171, this._ctx) ) {
			case 1:
				{
				this.state = 1470;
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
			this.state = 1475;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 172, this._ctx) ) {
			case 1:
				{
				this.state = 1473;
				this.match(FlinkSQLParser.KW_NULLS);
				this.state = 1474;
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
		this.enterRule(_localctx, 148, FlinkSQLParser.RULE_limitClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1477;
			this.match(FlinkSQLParser.KW_LIMIT);
			this.state = 1480;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_ALL:
				{
				this.state = 1478;
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
			case FlinkSQLParser.KW_FLOOR:
			case FlinkSQLParser.KW_TIMESTAMP_LTZ:
			case FlinkSQLParser.KW_TIMESTAMPADD:
			case FlinkSQLParser.KW_TIMESTAMPDIFF:
			case FlinkSQLParser.KW_TO_TIMESTAMP:
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
			case FlinkSQLParser.KW_FROM_UNIXTIME:
			case FlinkSQLParser.KW_GROUPING:
			case FlinkSQLParser.KW_HOUR:
			case FlinkSQLParser.KW_INTERVAL:
			case FlinkSQLParser.KW_LAG:
			case FlinkSQLParser.KW_LAST_VALUE:
			case FlinkSQLParser.KW_LEAD:
			case FlinkSQLParser.KW_LEFT:
			case FlinkSQLParser.KW_LOCALTIMESTAMP:
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
			case FlinkSQLParser.KW_USER:
			case FlinkSQLParser.KW_YEAR:
			case FlinkSQLParser.BIT_NOT_OP:
			case FlinkSQLParser.LR_BRACKET:
			case FlinkSQLParser.DOLLAR:
			case FlinkSQLParser.ASTERISK_SIGN:
			case FlinkSQLParser.HYPNEN_SIGN:
			case FlinkSQLParser.ADD_SIGN:
			case FlinkSQLParser.STRING_LITERAL:
			case FlinkSQLParser.DIG_LITERAL:
			case FlinkSQLParser.REAL_LITERAL:
			case FlinkSQLParser.ID_LITERAL:
				{
				this.state = 1479;
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
		this.enterRule(_localctx, 150, FlinkSQLParser.RULE_partitionByClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1482;
			this.match(FlinkSQLParser.KW_PARTITION);
			this.state = 1483;
			this.match(FlinkSQLParser.KW_BY);
			this.state = 1484;
			this.expression();
			this.state = 1489;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1485;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1486;
				this.expression();
				}
				}
				this.state = 1491;
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
		this.enterRule(_localctx, 152, FlinkSQLParser.RULE_quantifiers);
		try {
			this.state = 1508;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 175, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 1492;
				this.match(FlinkSQLParser.ASTERISK_SIGN);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 1493;
				this.match(FlinkSQLParser.ADD_SIGN);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 1494;
				this.match(FlinkSQLParser.QUESTION_MARK_SIGN);
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				{
				this.state = 1495;
				this.match(FlinkSQLParser.LB_BRACKET);
				this.state = 1496;
				this.match(FlinkSQLParser.DIG_LITERAL);
				this.state = 1497;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1498;
				this.match(FlinkSQLParser.DIG_LITERAL);
				this.state = 1499;
				this.match(FlinkSQLParser.RB_BRACKET);
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				{
				this.state = 1500;
				this.match(FlinkSQLParser.LB_BRACKET);
				this.state = 1501;
				this.match(FlinkSQLParser.DIG_LITERAL);
				this.state = 1502;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1503;
				this.match(FlinkSQLParser.RB_BRACKET);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				{
				this.state = 1504;
				this.match(FlinkSQLParser.LB_BRACKET);
				this.state = 1505;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1506;
				this.match(FlinkSQLParser.DIG_LITERAL);
				this.state = 1507;
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
		this.enterRule(_localctx, 154, FlinkSQLParser.RULE_measuresClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1510;
			this.match(FlinkSQLParser.KW_MEASURES);
			this.state = 1511;
			this.projectItemDefinition();
			this.state = 1516;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1512;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1513;
				this.projectItemDefinition();
				}
				}
				this.state = 1518;
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
	public patternDefinition(): PatternDefinitionContext {
		let _localctx: PatternDefinitionContext = new PatternDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, FlinkSQLParser.RULE_patternDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1519;
			this.match(FlinkSQLParser.KW_PATTERN);
			this.state = 1520;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1522;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1521;
				this.patternVariable();
				}
				}
				this.state = 1524;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FlinkSQLParser.DIG_LITERAL || _la === FlinkSQLParser.ID_LITERAL);
			this.state = 1526;
			this.match(FlinkSQLParser.RR_BRACKET);
			this.state = 1528;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_WITHIN) {
				{
				this.state = 1527;
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
		this.enterRule(_localctx, 158, FlinkSQLParser.RULE_patternVariable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1530;
			this.unquotedIdentifier();
			this.state = 1532;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 434)) & ~0x1F) === 0 && ((1 << (_la - 434)) & ((1 << (FlinkSQLParser.LB_BRACKET - 434)) | (1 << (FlinkSQLParser.ASTERISK_SIGN - 434)) | (1 << (FlinkSQLParser.ADD_SIGN - 434)) | (1 << (FlinkSQLParser.QUESTION_MARK_SIGN - 434)))) !== 0)) {
				{
				this.state = 1531;
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
		this.enterRule(_localctx, 160, FlinkSQLParser.RULE_outputMode);
		try {
			this.state = 1542;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_ALL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1534;
				this.match(FlinkSQLParser.KW_ALL);
				this.state = 1535;
				this.match(FlinkSQLParser.KW_ROWS);
				this.state = 1536;
				this.match(FlinkSQLParser.KW_PER);
				this.state = 1537;
				this.match(FlinkSQLParser.KW_MATCH);
				}
				break;
			case FlinkSQLParser.KW_ONE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1538;
				this.match(FlinkSQLParser.KW_ONE);
				this.state = 1539;
				this.match(FlinkSQLParser.KW_ROW);
				this.state = 1540;
				this.match(FlinkSQLParser.KW_PER);
				this.state = 1541;
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
		this.enterRule(_localctx, 162, FlinkSQLParser.RULE_afterMatchStrategy);
		try {
			this.state = 1568;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 181, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1544;
				this.match(FlinkSQLParser.KW_AFTER);
				this.state = 1545;
				this.match(FlinkSQLParser.KW_MATCH);
				this.state = 1546;
				this.match(FlinkSQLParser.KW_SKIP);
				this.state = 1547;
				this.match(FlinkSQLParser.KW_PAST);
				this.state = 1548;
				this.match(FlinkSQLParser.KW_LAST);
				this.state = 1549;
				this.match(FlinkSQLParser.KW_ROW);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1550;
				this.match(FlinkSQLParser.KW_AFTER);
				this.state = 1551;
				this.match(FlinkSQLParser.KW_MATCH);
				this.state = 1552;
				this.match(FlinkSQLParser.KW_SKIP);
				this.state = 1553;
				this.match(FlinkSQLParser.KW_TO);
				this.state = 1554;
				this.match(FlinkSQLParser.KW_NEXT);
				this.state = 1555;
				this.match(FlinkSQLParser.KW_ROW);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1556;
				this.match(FlinkSQLParser.KW_AFTER);
				this.state = 1557;
				this.match(FlinkSQLParser.KW_MATCH);
				this.state = 1558;
				this.match(FlinkSQLParser.KW_SKIP);
				this.state = 1559;
				this.match(FlinkSQLParser.KW_TO);
				this.state = 1560;
				this.match(FlinkSQLParser.KW_LAST);
				this.state = 1561;
				this.unquotedIdentifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1562;
				this.match(FlinkSQLParser.KW_AFTER);
				this.state = 1563;
				this.match(FlinkSQLParser.KW_MATCH);
				this.state = 1564;
				this.match(FlinkSQLParser.KW_SKIP);
				this.state = 1565;
				this.match(FlinkSQLParser.KW_TO);
				this.state = 1566;
				this.match(FlinkSQLParser.KW_FIRST);
				this.state = 1567;
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
	public patternVariablesDefinition(): PatternVariablesDefinitionContext {
		let _localctx: PatternVariablesDefinitionContext = new PatternVariablesDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, FlinkSQLParser.RULE_patternVariablesDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1570;
			this.match(FlinkSQLParser.KW_DEFINE);
			this.state = 1571;
			this.projectItemDefinition();
			this.state = 1576;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1572;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1573;
				this.projectItemDefinition();
				}
				}
				this.state = 1578;
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
		this.enterRule(_localctx, 166, FlinkSQLParser.RULE_windowFrame);
		try {
			this.state = 1588;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_RANGE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1579;
				this.match(FlinkSQLParser.KW_RANGE);
				this.state = 1580;
				this.match(FlinkSQLParser.KW_BETWEEN);
				this.state = 1581;
				this.timeIntervalExpression();
				this.state = 1582;
				this.frameBound();
				}
				break;
			case FlinkSQLParser.KW_ROWS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1584;
				this.match(FlinkSQLParser.KW_ROWS);
				this.state = 1585;
				this.match(FlinkSQLParser.KW_BETWEEN);
				this.state = 1586;
				this.match(FlinkSQLParser.DIG_LITERAL);
				this.state = 1587;
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
		this.enterRule(_localctx, 168, FlinkSQLParser.RULE_frameBound);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1590;
			this.match(FlinkSQLParser.KW_PRECEDING);
			this.state = 1591;
			this.match(FlinkSQLParser.KW_AND);
			this.state = 1592;
			this.match(FlinkSQLParser.KW_CURRENT);
			this.state = 1593;
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
		this.enterRule(_localctx, 170, FlinkSQLParser.RULE_withinClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1595;
			this.match(FlinkSQLParser.KW_WITHIN);
			this.state = 1596;
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
	public analyzePartitionDefinition(): AnalyzePartitionDefinitionContext {
		let _localctx: AnalyzePartitionDefinitionContext = new AnalyzePartitionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, FlinkSQLParser.RULE_analyzePartitionDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1598;
			this.match(FlinkSQLParser.KW_PARTITION);
			this.state = 1599;
			this.tableCanHasKeyPropertyList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 174, FlinkSQLParser.RULE_selfDefinitionClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1601;
			this.match(FlinkSQLParser.KW_PERIOD);
			this.state = 1602;
			this.match(FlinkSQLParser.KW_FOR);
			this.state = 1603;
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
		this.enterRule(_localctx, 176, FlinkSQLParser.RULE_partitionDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1605;
			this.match(FlinkSQLParser.KW_PARTITIONED);
			this.state = 1606;
			this.match(FlinkSQLParser.KW_BY);
			this.state = 1607;
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
		this.enterRule(_localctx, 178, FlinkSQLParser.RULE_transformList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1609;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1610;
			this.transform();
			this.state = 1615;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1611;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1612;
				this.transform();
				}
				}
				this.state = 1617;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1618;
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
		this.enterRule(_localctx, 180, FlinkSQLParser.RULE_transform);
		let _la: number;
		try {
			this.state = 1633;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 186, this._ctx) ) {
			case 1:
				_localctx = new IdentityTransformContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1620;
				this.qualifiedName();
				}
				break;

			case 2:
				_localctx = new ApplyTransformContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1621;
				(_localctx as ApplyTransformContext)._transformName = this.identifier();
				this.state = 1622;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1623;
				this.transformArgument();
				this.state = 1628;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1624;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1625;
					this.transformArgument();
					}
					}
					this.state = 1630;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1631;
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
		this.enterRule(_localctx, 182, FlinkSQLParser.RULE_transformArgument);
		try {
			this.state = 1637;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 187, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1635;
				this.qualifiedName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1636;
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
		this.enterRule(_localctx, 184, FlinkSQLParser.RULE_likeDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1639;
			this.match(FlinkSQLParser.KW_LIKE);
			this.state = 1640;
			this.tablePath();
			this.state = 1649;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.LR_BRACKET) {
				{
				this.state = 1641;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1645;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.KW_EXCLUDING || _la === FlinkSQLParser.KW_OVERWRITING || _la === FlinkSQLParser.KW_INCLUDING) {
					{
					{
					this.state = 1642;
					this.likeOption();
					}
					}
					this.state = 1647;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1648;
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
	public distributed(): DistributedContext {
		let _localctx: DistributedContext = new DistributedContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, FlinkSQLParser.RULE_distributed);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1651;
			this.match(FlinkSQLParser.KW_DISTRIBUTED);
			this.state = 1660;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_BY) {
				{
				this.state = 1652;
				this.match(FlinkSQLParser.KW_BY);
				this.state = 1654;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_HASH) {
					{
					this.state = 1653;
					this.match(FlinkSQLParser.KW_HASH);
					}
				}

				this.state = 1656;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1657;
				this.identifier();
				this.state = 1658;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
			}

			this.state = 1666;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_INTO) {
				{
				this.state = 1662;
				this.match(FlinkSQLParser.KW_INTO);
				this.state = 1663;
				this.decimalLiteral();
				this.state = 1664;
				this.match(FlinkSQLParser.KW_BUCKETS);
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
	public distribution(): DistributionContext {
		let _localctx: DistributionContext = new DistributionContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, FlinkSQLParser.RULE_distribution);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1668;
			this.match(FlinkSQLParser.KW_DISTRIBUTION);
			this.state = 1677;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_BY) {
				{
				this.state = 1669;
				this.match(FlinkSQLParser.KW_BY);
				this.state = 1671;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_HASH) {
					{
					this.state = 1670;
					this.match(FlinkSQLParser.KW_HASH);
					}
				}

				this.state = 1673;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1674;
				this.identifier();
				this.state = 1675;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
			}

			this.state = 1683;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_INTO) {
				{
				this.state = 1679;
				this.match(FlinkSQLParser.KW_INTO);
				this.state = 1680;
				this.decimalLiteral();
				this.state = 1681;
				this.match(FlinkSQLParser.KW_BUCKETS);
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
		this.enterRule(_localctx, 190, FlinkSQLParser.RULE_likeOption);
		let _la: number;
		try {
			this.state = 1689;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 196, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 1685;
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
				this.state = 1686;
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
				this.state = 1687;
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
				this.state = 1688;
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
	public columnOptionDefinition(): ColumnOptionDefinitionContext {
		let _localctx: ColumnOptionDefinitionContext = new ColumnOptionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, FlinkSQLParser.RULE_columnOptionDefinition);
		try {
			this.state = 1694;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 197, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1691;
				this.physicalColumnDefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1692;
				this.metadataColumnDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1693;
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
		this.enterRule(_localctx, 194, FlinkSQLParser.RULE_physicalColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1696;
			this.columnName();
			this.state = 1697;
			this.columnType();
			this.state = 1699;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_CONSTRAINT || ((((_la - 323)) & ~0x1F) === 0 && ((1 << (_la - 323)) & ((1 << (FlinkSQLParser.KW_NOT - 323)) | (1 << (FlinkSQLParser.KW_NULL - 323)) | (1 << (FlinkSQLParser.KW_PRIMARY - 323)))) !== 0)) {
				{
				this.state = 1698;
				this.columnConstraint();
				}
			}

			this.state = 1702;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 199, this._ctx) ) {
			case 1:
				{
				this.state = 1701;
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
		this.enterRule(_localctx, 196, FlinkSQLParser.RULE_computedColumnExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1704;
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
		this.enterRule(_localctx, 198, FlinkSQLParser.RULE_watermarkDefinition);
		let _la: number;
		try {
			this.state = 1723;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 202, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1706;
				this.match(FlinkSQLParser.KW_WATERMARK);
				this.state = 1707;
				this.match(FlinkSQLParser.KW_FOR);
				this.state = 1708;
				this.expression();
				this.state = 1709;
				this.match(FlinkSQLParser.KW_AS);
				this.state = 1710;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1712;
				this.match(FlinkSQLParser.KW_WATERMARK);
				this.state = 1713;
				this.match(FlinkSQLParser.KW_FOR);
				this.state = 1716;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 200, this._ctx) ) {
				case 1:
					{
					this.state = 1714;
					this.uid();
					}
					break;

				case 2:
					{
					this.state = 1715;
					this.expression();
					}
					break;
				}
				this.state = 1718;
				this.match(FlinkSQLParser.KW_AS);
				this.state = 1719;
				this.uid();
				this.state = 1721;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_INTERVAL) {
					{
					this.state = 1720;
					this.timeIntervalExpression();
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
	public tableConstraint(): TableConstraintContext {
		let _localctx: TableConstraintContext = new TableConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, FlinkSQLParser.RULE_tableConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1727;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_CONSTRAINT) {
				{
				this.state = 1725;
				this.match(FlinkSQLParser.KW_CONSTRAINT);
				this.state = 1726;
				this.constraintName();
				}
			}

			this.state = 1729;
			this.match(FlinkSQLParser.KW_PRIMARY);
			this.state = 1730;
			this.match(FlinkSQLParser.KW_KEY);
			this.state = 1731;
			this.columnNameList();
			this.state = 1732;
			this.match(FlinkSQLParser.KW_NOT);
			this.state = 1733;
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
		this.enterRule(_localctx, 202, FlinkSQLParser.RULE_constraintName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1735;
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
	public valuesDefinition(): ValuesDefinitionContext {
		let _localctx: ValuesDefinitionContext = new ValuesDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, FlinkSQLParser.RULE_valuesDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1737;
			this.match(FlinkSQLParser.KW_VALUES);
			this.state = 1738;
			this.valuesRowDefinition();
			this.state = 1743;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1739;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1740;
				this.valuesRowDefinition();
				}
				}
				this.state = 1745;
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
		this.enterRule(_localctx, 206, FlinkSQLParser.RULE_valuesRowDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1746;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1747;
			this.constant();
			this.state = 1752;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1748;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1749;
				this.constant();
				}
				}
				this.state = 1754;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1755;
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
	public lengthOneDimension(): LengthOneDimensionContext {
		let _localctx: LengthOneDimensionContext = new LengthOneDimensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, FlinkSQLParser.RULE_lengthOneDimension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1757;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1758;
			this.decimalLiteral();
			this.state = 1759;
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
		this.enterRule(_localctx, 210, FlinkSQLParser.RULE_lengthTwoOptionalDimension);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1761;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1762;
			this.decimalLiteral();
			this.state = 1765;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.COMMA) {
				{
				this.state = 1763;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1764;
				this.decimalLiteral();
				}
			}

			this.state = 1767;
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
		this.enterRule(_localctx, 212, FlinkSQLParser.RULE_lengthTwoStringDimension);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1769;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1770;
			this.stringLiteral();
			this.state = 1773;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.COMMA) {
				{
				this.state = 1771;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1772;
				this.stringLiteral();
				}
			}

			this.state = 1775;
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
		this.enterRule(_localctx, 214, FlinkSQLParser.RULE_lengthOneTypeDimension);
		let _la: number;
		try {
			_localctx = new LengthSymbolsTypeDimensionContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1777;
			this.match(FlinkSQLParser.LESS_SYMBOL);
			this.state = 1778;
			this.columnType();
			this.state = 1783;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1779;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1780;
				this.columnType();
				}
				}
				this.state = 1785;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1786;
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
		this.enterRule(_localctx, 216, FlinkSQLParser.RULE_mapTypeDimension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1788;
			this.match(FlinkSQLParser.LESS_SYMBOL);
			this.state = 1789;
			this.columnType();
			{
			this.state = 1790;
			this.match(FlinkSQLParser.COMMA);
			this.state = 1791;
			this.columnType();
			}
			this.state = 1793;
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
		this.enterRule(_localctx, 218, FlinkSQLParser.RULE_rowTypeDimension);
		let _la: number;
		try {
			_localctx = new RowSymbolsTypeDimensionContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1795;
			this.match(FlinkSQLParser.LESS_SYMBOL);
			this.state = 1796;
			this.columnName();
			this.state = 1797;
			this.columnType();
			this.state = 1804;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1798;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1799;
				this.columnName();
				this.state = 1800;
				this.columnType();
				}
				}
				this.state = 1806;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1807;
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
		this.enterRule(_localctx, 220, FlinkSQLParser.RULE_columnConstraint);
		let _la: number;
		try {
			this.state = 1823;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_CONSTRAINT:
			case FlinkSQLParser.KW_PRIMARY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1811;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_CONSTRAINT) {
					{
					this.state = 1809;
					this.match(FlinkSQLParser.KW_CONSTRAINT);
					this.state = 1810;
					this.constraintName();
					}
				}

				this.state = 1813;
				this.match(FlinkSQLParser.KW_PRIMARY);
				this.state = 1814;
				this.match(FlinkSQLParser.KW_KEY);
				this.state = 1817;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 1815;
					this.match(FlinkSQLParser.KW_NOT);
					this.state = 1816;
					this.match(FlinkSQLParser.KW_ENFORCED);
					}
				}

				}
				break;
			case FlinkSQLParser.KW_NOT:
			case FlinkSQLParser.KW_NULL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1820;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 1819;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 1822;
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
		this.enterRule(_localctx, 222, FlinkSQLParser.RULE_commentSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1825;
			this.match(FlinkSQLParser.KW_COMMENT);
			this.state = 1826;
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
		this.enterRule(_localctx, 224, FlinkSQLParser.RULE_metadataColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1828;
			this.columnName();
			this.state = 1829;
			this.columnType();
			this.state = 1830;
			this.match(FlinkSQLParser.KW_METADATA);
			this.state = 1833;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_FROM) {
				{
				this.state = 1831;
				this.match(FlinkSQLParser.KW_FROM);
				this.state = 1832;
				this.metadataKey();
				}
			}

			this.state = 1836;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_VIRTUAL) {
				{
				this.state = 1835;
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
		this.enterRule(_localctx, 226, FlinkSQLParser.RULE_metadataKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1838;
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
		this.enterRule(_localctx, 228, FlinkSQLParser.RULE_computedColumnDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1840;
			this.columnName();
			this.state = 1841;
			this.match(FlinkSQLParser.KW_AS);
			this.state = 1842;
			this.computedColumnExpression();
			this.state = 1844;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 216, this._ctx) ) {
			case 1:
				{
				this.state = 1843;
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
		this.enterRule(_localctx, 230, FlinkSQLParser.RULE_columnName);
		try {
			this.state = 1848;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 217, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1846;
				this.uid();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1847;
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
		this.enterRule(_localctx, 232, FlinkSQLParser.RULE_columnNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1850;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 1851;
			this.columnName();
			this.state = 1856;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 1852;
				this.match(FlinkSQLParser.COMMA);
				this.state = 1853;
				this.columnName();
				}
				}
				this.state = 1858;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1859;
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
		this.enterRule(_localctx, 234, FlinkSQLParser.RULE_columnType);
		let _la: number;
		try {
			this.state = 1934;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_BOOLEAN:
			case FlinkSQLParser.KW_DATE:
			case FlinkSQLParser.KW_NULL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1861;
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
				this.state = 1862;
				_localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSQLParser.KW_BYTES || _la === FlinkSQLParser.KW_STRING || _la === FlinkSQLParser.KW_TIMESTAMP_LTZ || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (FlinkSQLParser.KW_BIGINT - 203)) | (1 << (FlinkSQLParser.KW_BINARY - 203)) | (1 << (FlinkSQLParser.KW_CHAR - 203)))) !== 0) || _la === FlinkSQLParser.KW_DATETIME || _la === FlinkSQLParser.KW_INT || _la === FlinkSQLParser.KW_INTEGER || ((((_la - 365)) & ~0x1F) === 0 && ((1 << (_la - 365)) & ((1 << (FlinkSQLParser.KW_SMALLINT - 365)) | (1 << (FlinkSQLParser.KW_TIME - 365)) | (1 << (FlinkSQLParser.KW_TINYINT - 365)))) !== 0) || _la === FlinkSQLParser.KW_VARBINARY || _la === FlinkSQLParser.KW_VARCHAR)) {
					_localctx._typeName = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1864;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LR_BRACKET) {
					{
					this.state = 1863;
					this.lengthOneDimension();
					}
				}

				}
				break;
			case FlinkSQLParser.KW_TIMESTAMP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1866;
				_localctx._typeName = this.match(FlinkSQLParser.KW_TIMESTAMP);
				this.state = 1868;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LR_BRACKET) {
					{
					this.state = 1867;
					this.lengthOneDimension();
					}
				}

				this.state = 1876;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_WITH || _la === FlinkSQLParser.KW_WITHOUT) {
					{
					this.state = 1870;
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
					this.state = 1872;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSQLParser.KW_LOCAL) {
						{
						this.state = 1871;
						this.match(FlinkSQLParser.KW_LOCAL);
						}
					}

					this.state = 1874;
					this.match(FlinkSQLParser.KW_TIME);
					this.state = 1875;
					this.match(FlinkSQLParser.KW_ZONE);
					}
				}

				}
				break;
			case FlinkSQLParser.KW_TIMESTAMP_3:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1878;
				_localctx._typeName = this.match(FlinkSQLParser.KW_TIMESTAMP_3);
				this.state = 1880;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LR_BRACKET) {
					{
					this.state = 1879;
					this.lengthOneDimension();
					}
				}

				this.state = 1888;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_WITH || _la === FlinkSQLParser.KW_WITHOUT) {
					{
					this.state = 1882;
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
					this.state = 1884;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSQLParser.KW_LOCAL) {
						{
						this.state = 1883;
						this.match(FlinkSQLParser.KW_LOCAL);
						}
					}

					this.state = 1886;
					this.match(FlinkSQLParser.KW_TIME);
					this.state = 1887;
					this.match(FlinkSQLParser.KW_ZONE);
					}
				}

				}
				break;
			case FlinkSQLParser.KW_TIMESTAMP_6:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1890;
				_localctx._typeName = this.match(FlinkSQLParser.KW_TIMESTAMP_6);
				this.state = 1892;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LR_BRACKET) {
					{
					this.state = 1891;
					this.lengthOneDimension();
					}
				}

				this.state = 1900;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_WITH || _la === FlinkSQLParser.KW_WITHOUT) {
					{
					this.state = 1894;
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
					this.state = 1896;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSQLParser.KW_LOCAL) {
						{
						this.state = 1895;
						this.match(FlinkSQLParser.KW_LOCAL);
						}
					}

					this.state = 1898;
					this.match(FlinkSQLParser.KW_TIME);
					this.state = 1899;
					this.match(FlinkSQLParser.KW_ZONE);
					}
				}

				}
				break;
			case FlinkSQLParser.KW_TIMESTAMP_9:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1902;
				_localctx._typeName = this.match(FlinkSQLParser.KW_TIMESTAMP_9);
				this.state = 1904;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LR_BRACKET) {
					{
					this.state = 1903;
					this.lengthOneDimension();
					}
				}

				this.state = 1912;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_WITH || _la === FlinkSQLParser.KW_WITHOUT) {
					{
					this.state = 1906;
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
					this.state = 1908;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSQLParser.KW_LOCAL) {
						{
						this.state = 1907;
						this.match(FlinkSQLParser.KW_LOCAL);
						}
					}

					this.state = 1910;
					this.match(FlinkSQLParser.KW_TIME);
					this.state = 1911;
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
				this.state = 1914;
				_localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 242)) & ~0x1F) === 0 && ((1 << (_la - 242)) & ((1 << (FlinkSQLParser.KW_DEC - 242)) | (1 << (FlinkSQLParser.KW_DECIMAL - 242)) | (1 << (FlinkSQLParser.KW_DOUBLE - 242)) | (1 << (FlinkSQLParser.KW_FLOAT - 242)))) !== 0) || _la === FlinkSQLParser.KW_NUMERIC)) {
					_localctx._typeName = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1916;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LR_BRACKET) {
					{
					this.state = 1915;
					this.lengthTwoOptionalDimension();
					}
				}

				}
				break;
			case FlinkSQLParser.KW_ARRAY:
			case FlinkSQLParser.KW_MULTISET:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1918;
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
				this.state = 1920;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LESS_SYMBOL) {
					{
					this.state = 1919;
					this.lengthOneTypeDimension();
					}
				}

				}
				break;
			case FlinkSQLParser.KW_MAP:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1922;
				_localctx._type = this.match(FlinkSQLParser.KW_MAP);
				this.state = 1924;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LESS_SYMBOL) {
					{
					this.state = 1923;
					this.mapTypeDimension();
					}
				}

				}
				break;
			case FlinkSQLParser.KW_ROW:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1926;
				_localctx._type = this.match(FlinkSQLParser.KW_ROW);
				this.state = 1928;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LESS_SYMBOL) {
					{
					this.state = 1927;
					this.rowTypeDimension();
					}
				}

				}
				break;
			case FlinkSQLParser.KW_RAW:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1930;
				_localctx._type = this.match(FlinkSQLParser.KW_RAW);
				this.state = 1932;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.LR_BRACKET) {
					{
					this.state = 1931;
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, FlinkSQLParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1936;
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
		let _startState: number = 238;
		this.enterRecursionRule(_localctx, 238, FlinkSQLParser.RULE_booleanExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1950;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 239, this._ctx) ) {
			case 1:
				{
				_localctx = new LogicalNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1939;
				this.match(FlinkSQLParser.KW_NOT);
				this.state = 1940;
				this.booleanExpression(6);
				}
				break;

			case 2:
				{
				_localctx = new ExistsContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1941;
				this.match(FlinkSQLParser.KW_EXISTS);
				this.state = 1942;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1943;
				this.queryStatement(0);
				this.state = 1944;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 3:
				{
				_localctx = new PredicatedContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1946;
				this.valueExpression(0);
				this.state = 1948;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 238, this._ctx) ) {
				case 1:
					{
					this.state = 1947;
					this.predicate();
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1966;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 242, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1964;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 241, this._ctx) ) {
					case 1:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_booleanExpression);
						this.state = 1952;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1953;
						(_localctx as LogicalBinaryContext)._operator = this.match(FlinkSQLParser.KW_AND);
						this.state = 1954;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(4);
						}
						break;

					case 2:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_booleanExpression);
						this.state = 1955;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1956;
						(_localctx as LogicalBinaryContext)._operator = this.match(FlinkSQLParser.KW_OR);
						this.state = 1957;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;

					case 3:
						{
						_localctx = new LogicalNestedContext(new BooleanExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_booleanExpression);
						this.state = 1958;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1959;
						this.match(FlinkSQLParser.KW_IS);
						this.state = 1961;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FlinkSQLParser.KW_NOT) {
							{
							this.state = 1960;
							this.match(FlinkSQLParser.KW_NOT);
							}
						}

						this.state = 1963;
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
				this.state = 1968;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 242, this._ctx);
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
		this.enterRule(_localctx, 240, FlinkSQLParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 2036;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 253, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1970;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 1969;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 1972;
				_localctx._kind = this.match(FlinkSQLParser.KW_BETWEEN);
				this.state = 1974;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_ASYMMETRIC || _la === FlinkSQLParser.KW_SYMMETRIC) {
					{
					this.state = 1973;
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

				this.state = 1976;
				_localctx._lower = this.valueExpression(0);
				this.state = 1977;
				this.match(FlinkSQLParser.KW_AND);
				this.state = 1978;
				_localctx._upper = this.valueExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1981;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 1980;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 1983;
				_localctx._kind = this.match(FlinkSQLParser.KW_IN);
				this.state = 1984;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 1985;
				this.expression();
				this.state = 1990;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSQLParser.COMMA) {
					{
					{
					this.state = 1986;
					this.match(FlinkSQLParser.COMMA);
					this.state = 1987;
					this.expression();
					}
					}
					this.state = 1992;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1993;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1996;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 1995;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 1998;
				_localctx._kind = this.match(FlinkSQLParser.KW_IN);
				this.state = 1999;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 2000;
				this.queryStatement(0);
				this.state = 2001;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2003;
				_localctx._kind = this.match(FlinkSQLParser.KW_EXISTS);
				this.state = 2004;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 2005;
				this.queryStatement(0);
				this.state = 2006;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2009;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 2008;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 2011;
				_localctx._kind = this.match(FlinkSQLParser.KW_RLIKE);
				this.state = 2012;
				_localctx._pattern = this.valueExpression(0);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2013;
				this.likePredicate();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2014;
				this.match(FlinkSQLParser.KW_IS);
				this.state = 2016;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 2015;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 2018;
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
				this.state = 2019;
				this.match(FlinkSQLParser.KW_IS);
				this.state = 2021;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 2020;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 2023;
				_localctx._kind = this.match(FlinkSQLParser.KW_DISTINCT);
				this.state = 2024;
				this.match(FlinkSQLParser.KW_FROM);
				this.state = 2025;
				_localctx._right = this.valueExpression(0);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2027;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 2026;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 2029;
				_localctx._kind = this.match(FlinkSQLParser.KW_SIMILAR);
				this.state = 2030;
				this.match(FlinkSQLParser.KW_TO);
				this.state = 2031;
				_localctx._right = this.valueExpression(0);
				this.state = 2034;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 252, this._ctx) ) {
				case 1:
					{
					this.state = 2032;
					this.match(FlinkSQLParser.KW_ESCAPE);
					this.state = 2033;
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
		this.enterRule(_localctx, 242, FlinkSQLParser.RULE_likePredicate);
		let _la: number;
		try {
			this.state = 2067;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 259, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2039;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 2038;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 2041;
				_localctx._kind = this.match(FlinkSQLParser.KW_LIKE);
				this.state = 2042;
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
				this.state = 2056;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 256, this._ctx) ) {
				case 1:
					{
					this.state = 2043;
					this.match(FlinkSQLParser.LR_BRACKET);
					this.state = 2044;
					this.match(FlinkSQLParser.RR_BRACKET);
					}
					break;

				case 2:
					{
					this.state = 2045;
					this.match(FlinkSQLParser.LR_BRACKET);
					this.state = 2046;
					this.expression();
					this.state = 2051;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === FlinkSQLParser.COMMA) {
						{
						{
						this.state = 2047;
						this.match(FlinkSQLParser.COMMA);
						this.state = 2048;
						this.expression();
						}
						}
						this.state = 2053;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2054;
					this.match(FlinkSQLParser.RR_BRACKET);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2059;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 2058;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 2061;
				_localctx._kind = this.match(FlinkSQLParser.KW_LIKE);
				this.state = 2062;
				_localctx._pattern = this.valueExpression(0);
				this.state = 2065;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 258, this._ctx) ) {
				case 1:
					{
					this.state = 2063;
					this.match(FlinkSQLParser.KW_ESCAPE);
					this.state = 2064;
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
		let _startState: number = 244;
		this.enterRecursionRule(_localctx, 244, FlinkSQLParser.RULE_valueExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2073;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 260, this._ctx) ) {
			case 1:
				{
				_localctx = new ValueExpressionDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 2070;
				this.primaryExpression(0);
				}
				break;

			case 2:
				{
				_localctx = new ArithmeticUnaryContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2071;
				(_localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 421)) & ~0x1F) === 0 && ((1 << (_la - 421)) & ((1 << (FlinkSQLParser.BIT_NOT_OP - 421)) | (1 << (FlinkSQLParser.HYPNEN_SIGN - 421)) | (1 << (FlinkSQLParser.ADD_SIGN - 421)))) !== 0))) {
					(_localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2072;
				this.valueExpression(7);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2096;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 262, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2094;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 261, this._ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_valueExpression);
						this.state = 2075;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 2076;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === FlinkSQLParser.KW_DIV || ((((_la - 444)) & ~0x1F) === 0 && ((1 << (_la - 444)) & ((1 << (FlinkSQLParser.ASTERISK_SIGN - 444)) | (1 << (FlinkSQLParser.PENCENT_SIGN - 444)) | (1 << (FlinkSQLParser.SLASH_SIGN - 444)))) !== 0))) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 2077;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(7);
						}
						break;

					case 2:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_valueExpression);
						this.state = 2078;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 2079;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 446)) & ~0x1F) === 0 && ((1 << (_la - 446)) & ((1 << (FlinkSQLParser.HYPNEN_SIGN - 446)) | (1 << (FlinkSQLParser.ADD_SIGN - 446)) | (1 << (FlinkSQLParser.DOUBLE_VERTICAL_SIGN - 446)))) !== 0))) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 2080;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(6);
						}
						break;

					case 3:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_valueExpression);
						this.state = 2081;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 2082;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSQLParser.BIT_AND_OP);
						this.state = 2083;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(5);
						}
						break;

					case 4:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_valueExpression);
						this.state = 2084;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 2085;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSQLParser.BIT_XOR_OP);
						this.state = 2086;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;

					case 5:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_valueExpression);
						this.state = 2087;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2088;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSQLParser.BIT_OR_OP);
						this.state = 2089;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(3);
						}
						break;

					case 6:
						{
						_localctx = new ComparisonContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ComparisonContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_valueExpression);
						this.state = 2090;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2091;
						this.comparisonOperator();
						this.state = 2092;
						(_localctx as ComparisonContext)._right = this.valueExpression(2);
						}
						break;
					}
					}
				}
				this.state = 2098;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 262, this._ctx);
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
		let _startState: number = 246;
		this.enterRecursionRule(_localctx, 246, FlinkSQLParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2208;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 274, this._ctx) ) {
			case 1:
				{
				_localctx = new SearchedCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 2100;
				this.match(FlinkSQLParser.KW_CASE);
				this.state = 2102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2101;
					this.whenClause();
					}
					}
					this.state = 2104;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === FlinkSQLParser.KW_WHEN);
				this.state = 2108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_ELSE) {
					{
					this.state = 2106;
					this.match(FlinkSQLParser.KW_ELSE);
					this.state = 2107;
					(_localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 2110;
				this.match(FlinkSQLParser.KW_END);
				}
				break;

			case 2:
				{
				_localctx = new SimpleCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2112;
				this.match(FlinkSQLParser.KW_CASE);
				this.state = 2113;
				(_localctx as SimpleCaseContext)._value = this.expression();
				this.state = 2115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2114;
					this.whenClause();
					}
					}
					this.state = 2117;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === FlinkSQLParser.KW_WHEN);
				this.state = 2121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_ELSE) {
					{
					this.state = 2119;
					this.match(FlinkSQLParser.KW_ELSE);
					this.state = 2120;
					(_localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 2123;
				this.match(FlinkSQLParser.KW_END);
				}
				break;

			case 3:
				{
				_localctx = new CastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2125;
				this.match(FlinkSQLParser.KW_CAST);
				this.state = 2126;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 2127;
				this.expression();
				this.state = 2128;
				this.match(FlinkSQLParser.KW_AS);
				this.state = 2129;
				this.columnType();
				this.state = 2130;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 4:
				{
				_localctx = new FirstContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2132;
				this.match(FlinkSQLParser.KW_FIRST);
				this.state = 2133;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 2134;
				this.expression();
				this.state = 2137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_IGNORE) {
					{
					this.state = 2135;
					this.match(FlinkSQLParser.KW_IGNORE);
					this.state = 2136;
					this.match(FlinkSQLParser.KW_NULLS);
					}
				}

				this.state = 2139;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 5:
				{
				_localctx = new LastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2141;
				this.match(FlinkSQLParser.KW_LAST);
				this.state = 2142;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 2143;
				this.expression();
				this.state = 2146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_IGNORE) {
					{
					this.state = 2144;
					this.match(FlinkSQLParser.KW_IGNORE);
					this.state = 2145;
					this.match(FlinkSQLParser.KW_NULLS);
					}
				}

				this.state = 2148;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 6:
				{
				_localctx = new PositionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2150;
				this.match(FlinkSQLParser.KW_POSITION);
				this.state = 2151;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 2152;
				(_localctx as PositionContext)._substr = this.valueExpression(0);
				this.state = 2153;
				this.match(FlinkSQLParser.KW_IN);
				this.state = 2154;
				(_localctx as PositionContext)._str = this.valueExpression(0);
				this.state = 2155;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 7:
				{
				_localctx = new ConstantDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2157;
				this.constant();
				}
				break;

			case 8:
				{
				_localctx = new StarContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2158;
				this.match(FlinkSQLParser.ASTERISK_SIGN);
				}
				break;

			case 9:
				{
				_localctx = new StarContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2159;
				this.uid();
				this.state = 2160;
				this.match(FlinkSQLParser.DOT);
				this.state = 2161;
				this.match(FlinkSQLParser.ASTERISK_SIGN);
				}
				break;

			case 10:
				{
				_localctx = new SubqueryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2163;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 2164;
				this.queryStatement(0);
				this.state = 2165;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 11:
				{
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2167;
				this.functionName();
				this.state = 2168;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 2180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSQLParser.KW_ADD) | (1 << FlinkSQLParser.KW_ADMIN) | (1 << FlinkSQLParser.KW_AFTER) | (1 << FlinkSQLParser.KW_ANALYZE) | (1 << FlinkSQLParser.KW_ASC) | (1 << FlinkSQLParser.KW_BEFORE) | (1 << FlinkSQLParser.KW_BYTES) | (1 << FlinkSQLParser.KW_CASCADE) | (1 << FlinkSQLParser.KW_CATALOG) | (1 << FlinkSQLParser.KW_CATALOGS) | (1 << FlinkSQLParser.KW_CENTURY) | (1 << FlinkSQLParser.KW_CHAIN) | (1 << FlinkSQLParser.KW_CHANGELOG_MODE) | (1 << FlinkSQLParser.KW_CHARACTERS) | (1 << FlinkSQLParser.KW_COMMENT) | (1 << FlinkSQLParser.KW_COMPACT) | (1 << FlinkSQLParser.KW_COLUMNS) | (1 << FlinkSQLParser.KW_CONSTRAINTS) | (1 << FlinkSQLParser.KW_CONSTRUCTOR) | (1 << FlinkSQLParser.KW_CUMULATE) | (1 << FlinkSQLParser.KW_DATA) | (1 << FlinkSQLParser.KW_DATABASE) | (1 << FlinkSQLParser.KW_DATABASES) | (1 << FlinkSQLParser.KW_DAYS) | (1 << FlinkSQLParser.KW_DECADE) | (1 << FlinkSQLParser.KW_DEFINED) | (1 << FlinkSQLParser.KW_DESC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSQLParser.KW_DESCRIPTOR - 32)) | (1 << (FlinkSQLParser.KW_DIV - 32)) | (1 << (FlinkSQLParser.KW_ENCODING - 32)) | (1 << (FlinkSQLParser.KW_ENFORCED - 32)) | (1 << (FlinkSQLParser.KW_ENGINE - 32)) | (1 << (FlinkSQLParser.KW_EPOCH - 32)) | (1 << (FlinkSQLParser.KW_ERROR - 32)) | (1 << (FlinkSQLParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSQLParser.KW_EXCEPTION - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDE - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDING - 32)) | (1 << (FlinkSQLParser.KW_EXTENDED - 32)) | (1 << (FlinkSQLParser.KW_FILTER - 32)) | (1 << (FlinkSQLParser.KW_FILE - 32)) | (1 << (FlinkSQLParser.KW_FINAL - 32)) | (1 << (FlinkSQLParser.KW_FIRST - 32)) | (1 << (FlinkSQLParser.KW_FOLLOWING - 32)) | (1 << (FlinkSQLParser.KW_FORMAT - 32)) | (1 << (FlinkSQLParser.KW_FORTRAN - 32)) | (1 << (FlinkSQLParser.KW_FOUND - 32)) | (1 << (FlinkSQLParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSQLParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSQLParser.KW_GENERAL - 32)) | (1 << (FlinkSQLParser.KW_GENERATED - 32)) | (1 << (FlinkSQLParser.KW_GO - 32)) | (1 << (FlinkSQLParser.KW_GOTO - 32)) | (1 << (FlinkSQLParser.KW_GRANTED - 32)) | (1 << (FlinkSQLParser.KW_HOP - 32)) | (1 << (FlinkSQLParser.KW_HOURS - 32)) | (1 << (FlinkSQLParser.KW_IF - 32)) | (1 << (FlinkSQLParser.KW_IGNORE - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSQLParser.KW_INCREMENT - 64)) | (1 << (FlinkSQLParser.KW_INPUT - 64)) | (1 << (FlinkSQLParser.KW_INVOKER - 64)) | (1 << (FlinkSQLParser.KW_JAR - 64)) | (1 << (FlinkSQLParser.KW_JARS - 64)) | (1 << (FlinkSQLParser.KW_JAVA - 64)) | (1 << (FlinkSQLParser.KW_JSON - 64)) | (1 << (FlinkSQLParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSQLParser.KW_KEY - 64)) | (1 << (FlinkSQLParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSQLParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSQLParser.KW_LABEL - 64)) | (1 << (FlinkSQLParser.KW_LAST - 64)) | (1 << (FlinkSQLParser.KW_LENGTH - 64)) | (1 << (FlinkSQLParser.KW_LEVEL - 64)) | (1 << (FlinkSQLParser.KW_LOAD - 64)) | (1 << (FlinkSQLParser.KW_MAP - 64)) | (1 << (FlinkSQLParser.KW_MICROSECOND - 64)) | (1 << (FlinkSQLParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSQLParser.KW_MILLISECOND - 64)) | (1 << (FlinkSQLParser.KW_MINUTES - 64)) | (1 << (FlinkSQLParser.KW_MINVALUE - 64)) | (1 << (FlinkSQLParser.KW_MODIFY - 64)) | (1 << (FlinkSQLParser.KW_MODULES - 64)) | (1 << (FlinkSQLParser.KW_MONTHS - 64)) | (1 << (FlinkSQLParser.KW_NANOSECOND - 64)) | (1 << (FlinkSQLParser.KW_NULLS - 64)) | (1 << (FlinkSQLParser.KW_NUMBER - 64)) | (1 << (FlinkSQLParser.KW_OPTION - 64)) | (1 << (FlinkSQLParser.KW_OPTIONS - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSQLParser.KW_ORDERING - 96)) | (1 << (FlinkSQLParser.KW_OUTPUT - 96)) | (1 << (FlinkSQLParser.KW_OVERWRITE - 96)) | (1 << (FlinkSQLParser.KW_OVERWRITING - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONED - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONS - 96)) | (1 << (FlinkSQLParser.KW_PASSING - 96)) | (1 << (FlinkSQLParser.KW_PAST - 96)) | (1 << (FlinkSQLParser.KW_PATH - 96)) | (1 << (FlinkSQLParser.KW_PLACING - 96)) | (1 << (FlinkSQLParser.KW_PLAN - 96)) | (1 << (FlinkSQLParser.KW_PRECEDING - 96)) | (1 << (FlinkSQLParser.KW_PRESERVE - 96)) | (1 << (FlinkSQLParser.KW_PRIOR - 96)) | (1 << (FlinkSQLParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSQLParser.KW_PUBLIC - 96)) | (1 << (FlinkSQLParser.KW_PYTHON - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSQLParser.KW_QUARTER - 96)) | (1 << (FlinkSQLParser.KW_RAW - 96)) | (1 << (FlinkSQLParser.KW_READ - 96)) | (1 << (FlinkSQLParser.KW_RELATIVE - 96)) | (1 << (FlinkSQLParser.KW_REMOVE - 96)) | (1 << (FlinkSQLParser.KW_RENAME - 96)) | (1 << (FlinkSQLParser.KW_REPLACE - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSQLParser.KW_RESPECT - 128)) | (1 << (FlinkSQLParser.KW_RESTART - 128)) | (1 << (FlinkSQLParser.KW_RESTRICT - 128)) | (1 << (FlinkSQLParser.KW_ROLE - 128)) | (1 << (FlinkSQLParser.KW_ROW_COUNT - 128)) | (1 << (FlinkSQLParser.KW_SCALA - 128)) | (1 << (FlinkSQLParser.KW_SCALAR - 128)) | (1 << (FlinkSQLParser.KW_SCALE - 128)) | (1 << (FlinkSQLParser.KW_SCHEMA - 128)) | (1 << (FlinkSQLParser.KW_SECONDS - 128)) | (1 << (FlinkSQLParser.KW_SECTION - 128)) | (1 << (FlinkSQLParser.KW_SECURITY - 128)) | (1 << (FlinkSQLParser.KW_SELF - 128)) | (1 << (FlinkSQLParser.KW_SERVER - 128)) | (1 << (FlinkSQLParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSQLParser.KW_SESSION - 128)) | (1 << (FlinkSQLParser.KW_SETS - 128)) | (1 << (FlinkSQLParser.KW_SIMPLE - 128)) | (1 << (FlinkSQLParser.KW_SIZE - 128)) | (1 << (FlinkSQLParser.KW_SLIDE - 128)) | (1 << (FlinkSQLParser.KW_SOURCE - 128)) | (1 << (FlinkSQLParser.KW_SPACE - 128)) | (1 << (FlinkSQLParser.KW_STATE - 128)) | (1 << (FlinkSQLParser.KW_STATEMENT - 128)) | (1 << (FlinkSQLParser.KW_STEP - 128)) | (1 << (FlinkSQLParser.KW_STRING - 128)) | (1 << (FlinkSQLParser.KW_STRUCTURE - 128)) | (1 << (FlinkSQLParser.KW_STYLE - 128)) | (1 << (FlinkSQLParser.KW_TABLES - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSQLParser.KW_TEMPORARY - 160)) | (1 << (FlinkSQLParser.KW_TIMECOL - 160)) | (1 << (FlinkSQLParser.KW_FLOOR - 160)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_LTZ - 160)) | (1 << (FlinkSQLParser.KW_TIMESTAMPADD - 160)) | (1 << (FlinkSQLParser.KW_TIMESTAMPDIFF - 160)) | (1 << (FlinkSQLParser.KW_TO_TIMESTAMP - 160)) | (1 << (FlinkSQLParser.KW_TRANSFORM - 160)) | (1 << (FlinkSQLParser.KW_TUMBLE - 160)) | (1 << (FlinkSQLParser.KW_TYPE - 160)) | (1 << (FlinkSQLParser.KW_UNDER - 160)) | (1 << (FlinkSQLParser.KW_UNLOAD - 160)) | (1 << (FlinkSQLParser.KW_USAGE - 160)) | (1 << (FlinkSQLParser.KW_USE - 160)) | (1 << (FlinkSQLParser.KW_UTF16 - 160)) | (1 << (FlinkSQLParser.KW_UTF32 - 160)) | (1 << (FlinkSQLParser.KW_UTF8 - 160)) | (1 << (FlinkSQLParser.KW_VERSION - 160)) | (1 << (FlinkSQLParser.KW_VIEW - 160)) | (1 << (FlinkSQLParser.KW_VIEWS - 160)) | (1 << (FlinkSQLParser.KW_VIRTUAL - 160)) | (1 << (FlinkSQLParser.KW_WATERMARK - 160)) | (1 << (FlinkSQLParser.KW_WATERMARKS - 160)) | (1 << (FlinkSQLParser.KW_WEEK - 160)) | (1 << (FlinkSQLParser.KW_WEEKS - 160)) | (1 << (FlinkSQLParser.KW_WORK - 160)) | (1 << (FlinkSQLParser.KW_WRAPPER - 160)) | (1 << (FlinkSQLParser.KW_YEARS - 160)) | (1 << (FlinkSQLParser.KW_ZONE - 160)) | (1 << (FlinkSQLParser.KW_ABS - 160)) | (1 << (FlinkSQLParser.KW_ALL - 160)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (FlinkSQLParser.KW_ARRAY - 196)) | (1 << (FlinkSQLParser.KW_AVG - 196)) | (1 << (FlinkSQLParser.KW_BOTH - 196)) | (1 << (FlinkSQLParser.KW_CASE - 196)) | (1 << (FlinkSQLParser.KW_CAST - 196)) | (1 << (FlinkSQLParser.KW_CEIL - 196)) | (1 << (FlinkSQLParser.KW_COALESCE - 196)) | (1 << (FlinkSQLParser.KW_COLLECT - 196)))) !== 0) || ((((_la - 231)) & ~0x1F) === 0 && ((1 << (_la - 231)) & ((1 << (FlinkSQLParser.KW_COUNT - 231)) | (1 << (FlinkSQLParser.KW_DATE - 231)) | (1 << (FlinkSQLParser.KW_DAY - 231)) | (1 << (FlinkSQLParser.KW_DISTINCT - 231)))) !== 0) || ((((_la - 263)) & ~0x1F) === 0 && ((1 << (_la - 263)) & ((1 << (FlinkSQLParser.KW_EXISTS - 263)) | (1 << (FlinkSQLParser.KW_FIRST_VALUE - 263)) | (1 << (FlinkSQLParser.KW_FALSE - 263)) | (1 << (FlinkSQLParser.KW_FROM_UNIXTIME - 263)) | (1 << (FlinkSQLParser.KW_GROUPING - 263)) | (1 << (FlinkSQLParser.KW_HOUR - 263)) | (1 << (FlinkSQLParser.KW_INTERVAL - 263)))) !== 0) || ((((_la - 296)) & ~0x1F) === 0 && ((1 << (_la - 296)) & ((1 << (FlinkSQLParser.KW_LAG - 296)) | (1 << (FlinkSQLParser.KW_LAST_VALUE - 296)) | (1 << (FlinkSQLParser.KW_LEAD - 296)) | (1 << (FlinkSQLParser.KW_LEADING - 296)) | (1 << (FlinkSQLParser.KW_LEFT - 296)) | (1 << (FlinkSQLParser.KW_LOCALTIMESTAMP - 296)) | (1 << (FlinkSQLParser.KW_MINUTE - 296)) | (1 << (FlinkSQLParser.KW_MONTH - 296)) | (1 << (FlinkSQLParser.KW_NOT - 296)) | (1 << (FlinkSQLParser.KW_NTILE - 296)) | (1 << (FlinkSQLParser.KW_NULL - 296)))) !== 0) || ((((_la - 336)) & ~0x1F) === 0 && ((1 << (_la - 336)) & ((1 << (FlinkSQLParser.KW_OVERLAY - 336)) | (1 << (FlinkSQLParser.KW_PERCENT_RANK - 336)) | (1 << (FlinkSQLParser.KW_POSITION - 336)) | (1 << (FlinkSQLParser.KW_POWER - 336)) | (1 << (FlinkSQLParser.KW_ROW_NUMBER - 336)) | (1 << (FlinkSQLParser.KW_RANK - 336)) | (1 << (FlinkSQLParser.KW_RIGHT - 336)) | (1 << (FlinkSQLParser.KW_ROW - 336)) | (1 << (FlinkSQLParser.KW_SECOND - 336)))) !== 0) || ((((_la - 368)) & ~0x1F) === 0 && ((1 << (_la - 368)) & ((1 << (FlinkSQLParser.KW_SUBSTRING - 368)) | (1 << (FlinkSQLParser.KW_SUM - 368)) | (1 << (FlinkSQLParser.KW_TIME - 368)) | (1 << (FlinkSQLParser.KW_TIMESTAMP - 368)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_3 - 368)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_6 - 368)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_9 - 368)) | (1 << (FlinkSQLParser.KW_TRAILING - 368)) | (1 << (FlinkSQLParser.KW_TRUE - 368)) | (1 << (FlinkSQLParser.KW_TRUNCATE - 368)) | (1 << (FlinkSQLParser.KW_UPPER - 368)) | (1 << (FlinkSQLParser.KW_USER - 368)))) !== 0) || ((((_la - 407)) & ~0x1F) === 0 && ((1 << (_la - 407)) & ((1 << (FlinkSQLParser.KW_YEAR - 407)) | (1 << (FlinkSQLParser.BIT_NOT_OP - 407)) | (1 << (FlinkSQLParser.LR_BRACKET - 407)))) !== 0) || ((((_la - 439)) & ~0x1F) === 0 && ((1 << (_la - 439)) & ((1 << (FlinkSQLParser.DOLLAR - 439)) | (1 << (FlinkSQLParser.ASTERISK_SIGN - 439)) | (1 << (FlinkSQLParser.HYPNEN_SIGN - 439)) | (1 << (FlinkSQLParser.ADD_SIGN - 439)) | (1 << (FlinkSQLParser.STRING_LITERAL - 439)) | (1 << (FlinkSQLParser.DIG_LITERAL - 439)) | (1 << (FlinkSQLParser.REAL_LITERAL - 439)) | (1 << (FlinkSQLParser.ID_LITERAL - 439)))) !== 0)) {
					{
					this.state = 2170;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 269, this._ctx) ) {
					case 1:
						{
						this.state = 2169;
						this.setQuantifier();
						}
						break;
					}
					this.state = 2172;
					this.functionParam();
					this.state = 2177;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === FlinkSQLParser.COMMA) {
						{
						{
						this.state = 2173;
						this.match(FlinkSQLParser.COMMA);
						this.state = 2174;
						this.functionParam();
						}
						}
						this.state = 2179;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 2182;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 12:
				{
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2184;
				this.functionName();
				this.state = 2185;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 2186;
				this.functionParam();
				this.state = 2187;
				this.match(FlinkSQLParser.KW_TO);
				this.state = 2188;
				this.functionParam();
				this.state = 2189;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 13:
				{
				_localctx = new FunctionCallFilterContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2191;
				this.functionName();
				this.state = 2192;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 2194;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 272, this._ctx) ) {
				case 1:
					{
					this.state = 2193;
					this.setQuantifier();
					}
					break;
				}
				this.state = 2196;
				this.functionParam();
				this.state = 2197;
				this.match(FlinkSQLParser.RR_BRACKET);
				this.state = 2199;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 273, this._ctx) ) {
				case 1:
					{
					this.state = 2198;
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
				this.state = 2201;
				this.identifier();
				}
				break;

			case 15:
				{
				_localctx = new DereferenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2202;
				this.dereferenceDefinition();
				}
				break;

			case 16:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2203;
				this.match(FlinkSQLParser.LR_BRACKET);
				this.state = 2204;
				this.expression();
				this.state = 2205;
				this.match(FlinkSQLParser.RR_BRACKET);
				}
				break;

			case 17:
				{
				_localctx = new ComplexDataTypeFieldExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2207;
				this.complexDataTypeExpression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2217;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 275, this._ctx);
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
					this.state = 2210;
					if (!(this.precpred(this._ctx, 5))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
					}
					this.state = 2211;
					this.match(FlinkSQLParser.LS_BRACKET);
					this.state = 2212;
					(_localctx as SubscriptContext)._index = this.valueExpression(0);
					this.state = 2213;
					this.match(FlinkSQLParser.RS_BRACKET);
					}
					}
				}
				this.state = 2219;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 275, this._ctx);
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
		this.enterRule(_localctx, 248, FlinkSQLParser.RULE_complexDataTypeExpression);
		try {
			this.state = 2223;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_ARRAY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2220;
				this.arrayExpression();
				}
				break;
			case FlinkSQLParser.KW_ROW:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2221;
				this.rowExpression();
				}
				break;
			case FlinkSQLParser.KW_MAP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2222;
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
		this.enterRule(_localctx, 250, FlinkSQLParser.RULE_arrayExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2225;
			this.match(FlinkSQLParser.KW_ARRAY);
			this.state = 2226;
			this.match(FlinkSQLParser.LS_BRACKET);
			this.state = 2227;
			this.dataTypeExpression();
			this.state = 2232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 2228;
				this.match(FlinkSQLParser.COMMA);
				this.state = 2229;
				this.dataTypeExpression();
				}
				}
				this.state = 2234;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2235;
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
		this.enterRule(_localctx, 252, FlinkSQLParser.RULE_rowExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2237;
			this.match(FlinkSQLParser.KW_ROW);
			this.state = 2238;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 2239;
			this.dataTypeExpression();
			this.state = 2244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 2240;
				this.match(FlinkSQLParser.COMMA);
				this.state = 2241;
				this.dataTypeExpression();
				}
				}
				this.state = 2246;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2247;
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
		this.enterRule(_localctx, 254, FlinkSQLParser.RULE_mapExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2249;
			this.match(FlinkSQLParser.KW_MAP);
			this.state = 2250;
			this.match(FlinkSQLParser.LS_BRACKET);
			this.state = 2251;
			this.dataTypeExpression();
			this.state = 2252;
			this.match(FlinkSQLParser.COMMA);
			this.state = 2253;
			this.dataTypeExpression();
			this.state = 2254;
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
		this.enterRule(_localctx, 256, FlinkSQLParser.RULE_dataTypeExpression);
		try {
			this.state = 2258;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 279, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2256;
				this.columnAlias();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2257;
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
		this.enterRule(_localctx, 258, FlinkSQLParser.RULE_functionName);
		try {
			this.state = 2263;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 280, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2260;
				this.reservedKeywordsUsedAsFuncName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2261;
				this.nonReservedKeywords();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2262;
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
		this.enterRule(_localctx, 260, FlinkSQLParser.RULE_functionParam);
		try {
			this.state = 2270;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 281, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2265;
				this.reservedKeywordsUsedAsFuncParam();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2266;
				this.timeIntervalUnit();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2267;
				this.timePointUnit();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2268;
				this.expression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2269;
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
		this.enterRule(_localctx, 262, FlinkSQLParser.RULE_filterClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2272;
			this.match(FlinkSQLParser.KW_FILTER);
			this.state = 2273;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 2274;
			this.match(FlinkSQLParser.KW_WHERE);
			this.state = 2275;
			this.booleanExpression(0);
			this.state = 2276;
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
		this.enterRule(_localctx, 264, FlinkSQLParser.RULE_dereferenceDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2278;
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
		this.enterRule(_localctx, 266, FlinkSQLParser.RULE_correlationName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2280;
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
		this.enterRule(_localctx, 268, FlinkSQLParser.RULE_qualifiedName);
		try {
			this.state = 2284;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 282, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2282;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2283;
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
		this.enterRule(_localctx, 270, FlinkSQLParser.RULE_timeIntervalExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2286;
			this.match(FlinkSQLParser.KW_INTERVAL);
			this.state = 2289;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 283, this._ctx) ) {
			case 1:
				{
				this.state = 2287;
				this.errorCapturingMultiUnitsInterval();
				}
				break;

			case 2:
				{
				this.state = 2288;
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
		this.enterRule(_localctx, 272, FlinkSQLParser.RULE_errorCapturingMultiUnitsInterval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2291;
			this.multiUnitsInterval();
			this.state = 2293;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 284, this._ctx) ) {
			case 1:
				{
				this.state = 2292;
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
		this.enterRule(_localctx, 274, FlinkSQLParser.RULE_multiUnitsInterval);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2298;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2295;
					this.intervalValue();
					this.state = 2296;
					this.timeIntervalUnit();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2300;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 285, this._ctx);
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
		this.enterRule(_localctx, 276, FlinkSQLParser.RULE_errorCapturingUnitToUnitInterval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2302;
			_localctx._body = this.unitToUnitInterval();
			this.state = 2305;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 286, this._ctx) ) {
			case 1:
				{
				this.state = 2303;
				_localctx._error1 = this.multiUnitsInterval();
				}
				break;

			case 2:
				{
				this.state = 2304;
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
		this.enterRule(_localctx, 278, FlinkSQLParser.RULE_unitToUnitInterval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2307;
			_localctx._value = this.intervalValue();
			this.state = 2308;
			_localctx._from = this.timeIntervalUnit();
			this.state = 2309;
			this.match(FlinkSQLParser.KW_TO);
			this.state = 2310;
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
		this.enterRule(_localctx, 280, FlinkSQLParser.RULE_intervalValue);
		let _la: number;
		try {
			this.state = 2317;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.HYPNEN_SIGN:
			case FlinkSQLParser.ADD_SIGN:
			case FlinkSQLParser.DIG_LITERAL:
			case FlinkSQLParser.REAL_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2313;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.HYPNEN_SIGN || _la === FlinkSQLParser.ADD_SIGN) {
					{
					this.state = 2312;
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

				this.state = 2315;
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
				this.state = 2316;
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
		this.enterRule(_localctx, 282, FlinkSQLParser.RULE_columnAlias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2320;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_AS) {
				{
				this.state = 2319;
				this.match(FlinkSQLParser.KW_AS);
				}
			}

			this.state = 2322;
			this.identifier();
			this.state = 2324;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.LR_BRACKET) {
				{
				this.state = 2323;
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
		this.enterRule(_localctx, 284, FlinkSQLParser.RULE_tableAlias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2327;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSQLParser.KW_AS) {
				{
				this.state = 2326;
				this.match(FlinkSQLParser.KW_AS);
				}
			}

			this.state = 2329;
			this.identifier();
			this.state = 2331;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 292, this._ctx) ) {
			case 1:
				{
				this.state = 2330;
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
		this.enterRule(_localctx, 286, FlinkSQLParser.RULE_errorCapturingIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2333;
			this.identifier();
			this.state = 2334;
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
		this.enterRule(_localctx, 288, FlinkSQLParser.RULE_errorCapturingIdentifierExtra);
		let _la: number;
		try {
			this.state = 2343;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_MINUS:
				_localctx = new ErrorIdentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2338;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2336;
					this.match(FlinkSQLParser.KW_MINUS);
					this.state = 2337;
					this.identifier();
					}
					}
					this.state = 2340;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === FlinkSQLParser.KW_MINUS);
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
			case FlinkSQLParser.KW_TO_TIMESTAMP:
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
			case FlinkSQLParser.KW_DATE:
			case FlinkSQLParser.KW_LOCALTIMESTAMP:
			case FlinkSQLParser.KW_USER:
			case FlinkSQLParser.LR_BRACKET:
			case FlinkSQLParser.DOLLAR:
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
		this.enterRule(_localctx, 290, FlinkSQLParser.RULE_identifierList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2345;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 2346;
			this.identifierSeq();
			this.state = 2347;
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
		this.enterRule(_localctx, 292, FlinkSQLParser.RULE_identifierSeq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2349;
			this.identifier();
			this.state = 2354;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 2350;
				this.match(FlinkSQLParser.COMMA);
				this.state = 2351;
				this.identifier();
				}
				}
				this.state = 2356;
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
		this.enterRule(_localctx, 294, FlinkSQLParser.RULE_identifier);
		try {
			this.state = 2361;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.DIG_LITERAL:
			case FlinkSQLParser.ID_LITERAL:
				_localctx = new UnquotedIdentifierAlternativeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2357;
				this.unquotedIdentifier();
				}
				break;
			case FlinkSQLParser.STRING_LITERAL:
				_localctx = new QuotedIdentifierAlternativeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2358;
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
			case FlinkSQLParser.KW_TO_TIMESTAMP:
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
			case FlinkSQLParser.KW_DATE:
			case FlinkSQLParser.KW_LOCALTIMESTAMP:
			case FlinkSQLParser.KW_USER:
				_localctx = new NonReservedKeywordsAlternativeContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2359;
				this.nonReservedKeywords();
				}
				break;
			case FlinkSQLParser.DOLLAR:
				_localctx = new UrefVarAlternativeContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2360;
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
		this.enterRule(_localctx, 296, FlinkSQLParser.RULE_refVar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2363;
			this.match(FlinkSQLParser.DOLLAR);
			this.state = 2364;
			this.match(FlinkSQLParser.LB_BRACKET);
			this.state = 2365;
			this.unquotedIdentifier();
			this.state = 2366;
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
		this.enterRule(_localctx, 298, FlinkSQLParser.RULE_unquotedIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2368;
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
		this.enterRule(_localctx, 300, FlinkSQLParser.RULE_quotedIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2370;
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
		this.enterRule(_localctx, 302, FlinkSQLParser.RULE_whenClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2372;
			this.match(FlinkSQLParser.KW_WHEN);
			this.state = 2373;
			_localctx._condition = this.expression();
			this.state = 2374;
			this.match(FlinkSQLParser.KW_THEN);
			this.state = 2375;
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
		this.enterRule(_localctx, 304, FlinkSQLParser.RULE_catalogPath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2377;
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
		this.enterRule(_localctx, 306, FlinkSQLParser.RULE_databasePath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2379;
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
		this.enterRule(_localctx, 308, FlinkSQLParser.RULE_databasePathCreate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2381;
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
		this.enterRule(_localctx, 310, FlinkSQLParser.RULE_tablePathCreate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2383;
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
		this.enterRule(_localctx, 312, FlinkSQLParser.RULE_tablePath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2385;
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
		this.enterRule(_localctx, 314, FlinkSQLParser.RULE_uid);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2387;
			this.identifier();
			this.state = 2392;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 297, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2388;
					this.match(FlinkSQLParser.DOT);
					this.state = 2389;
					this.identifier();
					}
					}
				}
				this.state = 2394;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 297, this._ctx);
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
		this.enterRule(_localctx, 316, FlinkSQLParser.RULE_withOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2395;
			this.match(FlinkSQLParser.KW_WITH);
			this.state = 2396;
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
		this.enterRule(_localctx, 318, FlinkSQLParser.RULE_ifNotExists);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2398;
			this.match(FlinkSQLParser.KW_IF);
			this.state = 2399;
			this.match(FlinkSQLParser.KW_NOT);
			this.state = 2400;
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
		this.enterRule(_localctx, 320, FlinkSQLParser.RULE_ifExists);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2402;
			this.match(FlinkSQLParser.KW_IF);
			this.state = 2403;
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
	public tableCanHasKeyPropertyList(): TableCanHasKeyPropertyListContext {
		let _localctx: TableCanHasKeyPropertyListContext = new TableCanHasKeyPropertyListContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, FlinkSQLParser.RULE_tableCanHasKeyPropertyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2405;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 2408;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 298, this._ctx) ) {
			case 1:
				{
				this.state = 2406;
				this.tableProperty();
				}
				break;

			case 2:
				{
				this.state = 2407;
				this.tablePropertyKey();
				}
				break;
			}
			this.state = 2417;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 2410;
				this.match(FlinkSQLParser.COMMA);
				this.state = 2413;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 299, this._ctx) ) {
				case 1:
					{
					this.state = 2411;
					this.tableProperty();
					}
					break;

				case 2:
					{
					this.state = 2412;
					this.tablePropertyKey();
					}
					break;
				}
				}
				}
				this.state = 2419;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2420;
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
	public tablePropertyList(): TablePropertyListContext {
		let _localctx: TablePropertyListContext = new TablePropertyListContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, FlinkSQLParser.RULE_tablePropertyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2422;
			this.match(FlinkSQLParser.LR_BRACKET);
			this.state = 2423;
			this.tableProperty();
			this.state = 2428;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSQLParser.COMMA) {
				{
				{
				this.state = 2424;
				this.match(FlinkSQLParser.COMMA);
				this.state = 2425;
				this.tableProperty();
				}
				}
				this.state = 2430;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2431;
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
		this.enterRule(_localctx, 326, FlinkSQLParser.RULE_tableProperty);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2433;
			this.tablePropertyKey();
			this.state = 2434;
			this.match(FlinkSQLParser.EQUAL_SYMBOL);
			this.state = 2435;
			this.tablePropertyValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 328, FlinkSQLParser.RULE_tablePropertyKey);
		try {
			this.state = 2440;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 302, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2437;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2438;
				this.dereferenceDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2439;
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
		this.enterRule(_localctx, 330, FlinkSQLParser.RULE_tablePropertyValue);
		try {
			this.state = 2446;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.DIG_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2442;
				this.match(FlinkSQLParser.DIG_LITERAL);
				}
				break;
			case FlinkSQLParser.REAL_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2443;
				this.match(FlinkSQLParser.REAL_LITERAL);
				}
				break;
			case FlinkSQLParser.KW_FALSE:
			case FlinkSQLParser.KW_TRUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2444;
				this.booleanLiteral();
				}
				break;
			case FlinkSQLParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2445;
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
	public comparisonOperator(): ComparisonOperatorContext {
		let _localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 332, FlinkSQLParser.RULE_comparisonOperator);
		try {
			this.state = 2462;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 304, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2448;
				this.match(FlinkSQLParser.EQUAL_SYMBOL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2449;
				this.match(FlinkSQLParser.GREATER_SYMBOL);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2450;
				this.match(FlinkSQLParser.LESS_SYMBOL);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2451;
				this.match(FlinkSQLParser.LESS_SYMBOL);
				this.state = 2452;
				this.match(FlinkSQLParser.EQUAL_SYMBOL);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2453;
				this.match(FlinkSQLParser.GREATER_SYMBOL);
				this.state = 2454;
				this.match(FlinkSQLParser.EQUAL_SYMBOL);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2455;
				this.match(FlinkSQLParser.LESS_SYMBOL);
				this.state = 2456;
				this.match(FlinkSQLParser.GREATER_SYMBOL);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2457;
				this.match(FlinkSQLParser.EXCLAMATION_SYMBOL);
				this.state = 2458;
				this.match(FlinkSQLParser.EQUAL_SYMBOL);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2459;
				this.match(FlinkSQLParser.LESS_SYMBOL);
				this.state = 2460;
				this.match(FlinkSQLParser.EQUAL_SYMBOL);
				this.state = 2461;
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
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 334, FlinkSQLParser.RULE_constant);
		let _la: number;
		try {
			this.state = 2477;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSQLParser.KW_INTERVAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2464;
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
				this.state = 2465;
				this.timePointLiteral();
				}
				break;
			case FlinkSQLParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2466;
				this.stringLiteral();
				}
				break;
			case FlinkSQLParser.HYPNEN_SIGN:
			case FlinkSQLParser.DIG_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2468;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.HYPNEN_SIGN) {
					{
					this.state = 2467;
					this.match(FlinkSQLParser.HYPNEN_SIGN);
					}
				}

				this.state = 2470;
				this.decimalLiteral();
				}
				break;
			case FlinkSQLParser.KW_FALSE:
			case FlinkSQLParser.KW_TRUE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2471;
				this.booleanLiteral();
				}
				break;
			case FlinkSQLParser.REAL_LITERAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2472;
				this.match(FlinkSQLParser.REAL_LITERAL);
				}
				break;
			case FlinkSQLParser.KW_NOT:
			case FlinkSQLParser.KW_NULL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2474;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSQLParser.KW_NOT) {
					{
					this.state = 2473;
					this.match(FlinkSQLParser.KW_NOT);
					}
				}

				this.state = 2476;
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
		this.enterRule(_localctx, 336, FlinkSQLParser.RULE_timePointLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2479;
			this.timePointUnit();
			this.state = 2480;
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
		this.enterRule(_localctx, 338, FlinkSQLParser.RULE_stringLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2482;
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
		this.enterRule(_localctx, 340, FlinkSQLParser.RULE_decimalLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2484;
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
		this.enterRule(_localctx, 342, FlinkSQLParser.RULE_booleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2486;
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
		this.enterRule(_localctx, 344, FlinkSQLParser.RULE_setQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2488;
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
		this.enterRule(_localctx, 346, FlinkSQLParser.RULE_timePointUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2490;
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
		this.enterRule(_localctx, 348, FlinkSQLParser.RULE_timeIntervalUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2492;
			_la = this._input.LA(1);
			if (!(((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & ((1 << (FlinkSQLParser.KW_CENTURY - 14)) | (1 << (FlinkSQLParser.KW_DAYS - 14)) | (1 << (FlinkSQLParser.KW_DECADE - 14)) | (1 << (FlinkSQLParser.KW_EPOCH - 14)))) !== 0) || ((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (FlinkSQLParser.KW_HOURS - 61)) | (1 << (FlinkSQLParser.KW_MICROSECOND - 61)) | (1 << (FlinkSQLParser.KW_MILLENNIUM - 61)) | (1 << (FlinkSQLParser.KW_MILLISECOND - 61)) | (1 << (FlinkSQLParser.KW_MINUTES - 61)) | (1 << (FlinkSQLParser.KW_MONTHS - 61)) | (1 << (FlinkSQLParser.KW_NANOSECOND - 61)))) !== 0) || _la === FlinkSQLParser.KW_QUARTER || _la === FlinkSQLParser.KW_SECONDS || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & ((1 << (FlinkSQLParser.KW_WEEK - 183)) | (1 << (FlinkSQLParser.KW_WEEKS - 183)) | (1 << (FlinkSQLParser.KW_YEARS - 183)))) !== 0) || _la === FlinkSQLParser.KW_DAY || _la === FlinkSQLParser.KW_HOUR || _la === FlinkSQLParser.KW_MINUTE || _la === FlinkSQLParser.KW_MONTH || _la === FlinkSQLParser.KW_SECOND || _la === FlinkSQLParser.KW_YEAR)) {
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
		this.enterRule(_localctx, 350, FlinkSQLParser.RULE_reservedKeywordsUsedAsFuncParam);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2494;
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
		this.enterRule(_localctx, 352, FlinkSQLParser.RULE_reservedKeywordsUsedAsFuncName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2496;
			_la = this._input.LA(1);
			if (!(_la === FlinkSQLParser.KW_IF || _la === FlinkSQLParser.KW_MAP || _la === FlinkSQLParser.KW_QUARTER || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & ((1 << (FlinkSQLParser.KW_WEEK - 183)) | (1 << (FlinkSQLParser.KW_ABS - 183)) | (1 << (FlinkSQLParser.KW_ARRAY - 183)) | (1 << (FlinkSQLParser.KW_AVG - 183)) | (1 << (FlinkSQLParser.KW_CAST - 183)))) !== 0) || ((((_la - 215)) & ~0x1F) === 0 && ((1 << (_la - 215)) & ((1 << (FlinkSQLParser.KW_CEIL - 215)) | (1 << (FlinkSQLParser.KW_COALESCE - 215)) | (1 << (FlinkSQLParser.KW_COLLECT - 215)) | (1 << (FlinkSQLParser.KW_COUNT - 215)) | (1 << (FlinkSQLParser.KW_DATE - 215)))) !== 0) || ((((_la - 267)) & ~0x1F) === 0 && ((1 << (_la - 267)) & ((1 << (FlinkSQLParser.KW_FIRST_VALUE - 267)) | (1 << (FlinkSQLParser.KW_FROM_UNIXTIME - 267)) | (1 << (FlinkSQLParser.KW_GROUPING - 267)) | (1 << (FlinkSQLParser.KW_HOUR - 267)) | (1 << (FlinkSQLParser.KW_LAG - 267)))) !== 0) || ((((_la - 299)) & ~0x1F) === 0 && ((1 << (_la - 299)) & ((1 << (FlinkSQLParser.KW_LAST_VALUE - 299)) | (1 << (FlinkSQLParser.KW_LEAD - 299)) | (1 << (FlinkSQLParser.KW_LEFT - 299)) | (1 << (FlinkSQLParser.KW_MINUTE - 299)) | (1 << (FlinkSQLParser.KW_MONTH - 299)) | (1 << (FlinkSQLParser.KW_NTILE - 299)))) !== 0) || ((((_la - 336)) & ~0x1F) === 0 && ((1 << (_la - 336)) & ((1 << (FlinkSQLParser.KW_OVERLAY - 336)) | (1 << (FlinkSQLParser.KW_PERCENT_RANK - 336)) | (1 << (FlinkSQLParser.KW_POSITION - 336)) | (1 << (FlinkSQLParser.KW_POWER - 336)) | (1 << (FlinkSQLParser.KW_ROW_NUMBER - 336)) | (1 << (FlinkSQLParser.KW_RANK - 336)) | (1 << (FlinkSQLParser.KW_RIGHT - 336)) | (1 << (FlinkSQLParser.KW_SECOND - 336)))) !== 0) || ((((_la - 368)) & ~0x1F) === 0 && ((1 << (_la - 368)) & ((1 << (FlinkSQLParser.KW_SUBSTRING - 368)) | (1 << (FlinkSQLParser.KW_SUM - 368)) | (1 << (FlinkSQLParser.KW_TIME - 368)) | (1 << (FlinkSQLParser.KW_TIMESTAMP - 368)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_3 - 368)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_6 - 368)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_9 - 368)) | (1 << (FlinkSQLParser.KW_TRUNCATE - 368)) | (1 << (FlinkSQLParser.KW_UPPER - 368)))) !== 0) || _la === FlinkSQLParser.KW_YEAR)) {
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
		this.enterRule(_localctx, 354, FlinkSQLParser.RULE_nonReservedKeywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2498;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSQLParser.KW_ADD) | (1 << FlinkSQLParser.KW_ADMIN) | (1 << FlinkSQLParser.KW_AFTER) | (1 << FlinkSQLParser.KW_ANALYZE) | (1 << FlinkSQLParser.KW_ASC) | (1 << FlinkSQLParser.KW_BEFORE) | (1 << FlinkSQLParser.KW_BYTES) | (1 << FlinkSQLParser.KW_CASCADE) | (1 << FlinkSQLParser.KW_CATALOG) | (1 << FlinkSQLParser.KW_CATALOGS) | (1 << FlinkSQLParser.KW_CENTURY) | (1 << FlinkSQLParser.KW_CHAIN) | (1 << FlinkSQLParser.KW_CHANGELOG_MODE) | (1 << FlinkSQLParser.KW_CHARACTERS) | (1 << FlinkSQLParser.KW_COMMENT) | (1 << FlinkSQLParser.KW_COMPACT) | (1 << FlinkSQLParser.KW_COLUMNS) | (1 << FlinkSQLParser.KW_CONSTRAINTS) | (1 << FlinkSQLParser.KW_CONSTRUCTOR) | (1 << FlinkSQLParser.KW_CUMULATE) | (1 << FlinkSQLParser.KW_DATA) | (1 << FlinkSQLParser.KW_DATABASE) | (1 << FlinkSQLParser.KW_DATABASES) | (1 << FlinkSQLParser.KW_DAYS) | (1 << FlinkSQLParser.KW_DECADE) | (1 << FlinkSQLParser.KW_DEFINED) | (1 << FlinkSQLParser.KW_DESC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSQLParser.KW_DESCRIPTOR - 32)) | (1 << (FlinkSQLParser.KW_DIV - 32)) | (1 << (FlinkSQLParser.KW_ENCODING - 32)) | (1 << (FlinkSQLParser.KW_ENFORCED - 32)) | (1 << (FlinkSQLParser.KW_ENGINE - 32)) | (1 << (FlinkSQLParser.KW_ERROR - 32)) | (1 << (FlinkSQLParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSQLParser.KW_EXCEPTION - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDE - 32)) | (1 << (FlinkSQLParser.KW_EXCLUDING - 32)) | (1 << (FlinkSQLParser.KW_EXTENDED - 32)) | (1 << (FlinkSQLParser.KW_FILE - 32)) | (1 << (FlinkSQLParser.KW_FINAL - 32)) | (1 << (FlinkSQLParser.KW_FIRST - 32)) | (1 << (FlinkSQLParser.KW_FOLLOWING - 32)) | (1 << (FlinkSQLParser.KW_FORMAT - 32)) | (1 << (FlinkSQLParser.KW_FORTRAN - 32)) | (1 << (FlinkSQLParser.KW_FOUND - 32)) | (1 << (FlinkSQLParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSQLParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSQLParser.KW_GENERAL - 32)) | (1 << (FlinkSQLParser.KW_GENERATED - 32)) | (1 << (FlinkSQLParser.KW_GO - 32)) | (1 << (FlinkSQLParser.KW_GOTO - 32)) | (1 << (FlinkSQLParser.KW_GRANTED - 32)) | (1 << (FlinkSQLParser.KW_HOP - 32)) | (1 << (FlinkSQLParser.KW_HOURS - 32)) | (1 << (FlinkSQLParser.KW_IF - 32)) | (1 << (FlinkSQLParser.KW_IGNORE - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSQLParser.KW_INCREMENT - 64)) | (1 << (FlinkSQLParser.KW_INPUT - 64)) | (1 << (FlinkSQLParser.KW_INVOKER - 64)) | (1 << (FlinkSQLParser.KW_JAR - 64)) | (1 << (FlinkSQLParser.KW_JARS - 64)) | (1 << (FlinkSQLParser.KW_JAVA - 64)) | (1 << (FlinkSQLParser.KW_JSON - 64)) | (1 << (FlinkSQLParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSQLParser.KW_KEY - 64)) | (1 << (FlinkSQLParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSQLParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSQLParser.KW_LABEL - 64)) | (1 << (FlinkSQLParser.KW_LAST - 64)) | (1 << (FlinkSQLParser.KW_LENGTH - 64)) | (1 << (FlinkSQLParser.KW_LEVEL - 64)) | (1 << (FlinkSQLParser.KW_LOAD - 64)) | (1 << (FlinkSQLParser.KW_MAP - 64)) | (1 << (FlinkSQLParser.KW_MICROSECOND - 64)) | (1 << (FlinkSQLParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSQLParser.KW_MILLISECOND - 64)) | (1 << (FlinkSQLParser.KW_MINUTES - 64)) | (1 << (FlinkSQLParser.KW_MINVALUE - 64)) | (1 << (FlinkSQLParser.KW_MODIFY - 64)) | (1 << (FlinkSQLParser.KW_MODULES - 64)) | (1 << (FlinkSQLParser.KW_MONTHS - 64)) | (1 << (FlinkSQLParser.KW_NANOSECOND - 64)) | (1 << (FlinkSQLParser.KW_NULLS - 64)) | (1 << (FlinkSQLParser.KW_NUMBER - 64)) | (1 << (FlinkSQLParser.KW_OPTION - 64)) | (1 << (FlinkSQLParser.KW_OPTIONS - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSQLParser.KW_ORDERING - 96)) | (1 << (FlinkSQLParser.KW_OUTPUT - 96)) | (1 << (FlinkSQLParser.KW_OVERWRITE - 96)) | (1 << (FlinkSQLParser.KW_OVERWRITING - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONED - 96)) | (1 << (FlinkSQLParser.KW_PARTITIONS - 96)) | (1 << (FlinkSQLParser.KW_PASSING - 96)) | (1 << (FlinkSQLParser.KW_PAST - 96)) | (1 << (FlinkSQLParser.KW_PATH - 96)) | (1 << (FlinkSQLParser.KW_PLACING - 96)) | (1 << (FlinkSQLParser.KW_PLAN - 96)) | (1 << (FlinkSQLParser.KW_PRECEDING - 96)) | (1 << (FlinkSQLParser.KW_PRESERVE - 96)) | (1 << (FlinkSQLParser.KW_PRIOR - 96)) | (1 << (FlinkSQLParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSQLParser.KW_PUBLIC - 96)) | (1 << (FlinkSQLParser.KW_PYTHON - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSQLParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSQLParser.KW_QUARTER - 96)) | (1 << (FlinkSQLParser.KW_RAW - 96)) | (1 << (FlinkSQLParser.KW_READ - 96)) | (1 << (FlinkSQLParser.KW_RELATIVE - 96)) | (1 << (FlinkSQLParser.KW_REMOVE - 96)) | (1 << (FlinkSQLParser.KW_RENAME - 96)) | (1 << (FlinkSQLParser.KW_REPLACE - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSQLParser.KW_RESPECT - 128)) | (1 << (FlinkSQLParser.KW_RESTART - 128)) | (1 << (FlinkSQLParser.KW_RESTRICT - 128)) | (1 << (FlinkSQLParser.KW_ROLE - 128)) | (1 << (FlinkSQLParser.KW_ROW_COUNT - 128)) | (1 << (FlinkSQLParser.KW_SCALA - 128)) | (1 << (FlinkSQLParser.KW_SCALAR - 128)) | (1 << (FlinkSQLParser.KW_SCALE - 128)) | (1 << (FlinkSQLParser.KW_SCHEMA - 128)) | (1 << (FlinkSQLParser.KW_SECONDS - 128)) | (1 << (FlinkSQLParser.KW_SECTION - 128)) | (1 << (FlinkSQLParser.KW_SECURITY - 128)) | (1 << (FlinkSQLParser.KW_SELF - 128)) | (1 << (FlinkSQLParser.KW_SERVER - 128)) | (1 << (FlinkSQLParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSQLParser.KW_SESSION - 128)) | (1 << (FlinkSQLParser.KW_SETS - 128)) | (1 << (FlinkSQLParser.KW_SIMPLE - 128)) | (1 << (FlinkSQLParser.KW_SIZE - 128)) | (1 << (FlinkSQLParser.KW_SLIDE - 128)) | (1 << (FlinkSQLParser.KW_SOURCE - 128)) | (1 << (FlinkSQLParser.KW_SPACE - 128)) | (1 << (FlinkSQLParser.KW_STATE - 128)) | (1 << (FlinkSQLParser.KW_STATEMENT - 128)) | (1 << (FlinkSQLParser.KW_STEP - 128)) | (1 << (FlinkSQLParser.KW_STRING - 128)) | (1 << (FlinkSQLParser.KW_STRUCTURE - 128)) | (1 << (FlinkSQLParser.KW_STYLE - 128)) | (1 << (FlinkSQLParser.KW_TABLES - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSQLParser.KW_TEMPORARY - 160)) | (1 << (FlinkSQLParser.KW_TIMECOL - 160)) | (1 << (FlinkSQLParser.KW_FLOOR - 160)) | (1 << (FlinkSQLParser.KW_TIMESTAMP_LTZ - 160)) | (1 << (FlinkSQLParser.KW_TIMESTAMPADD - 160)) | (1 << (FlinkSQLParser.KW_TIMESTAMPDIFF - 160)) | (1 << (FlinkSQLParser.KW_TO_TIMESTAMP - 160)) | (1 << (FlinkSQLParser.KW_TRANSFORM - 160)) | (1 << (FlinkSQLParser.KW_TUMBLE - 160)) | (1 << (FlinkSQLParser.KW_TYPE - 160)) | (1 << (FlinkSQLParser.KW_UNDER - 160)) | (1 << (FlinkSQLParser.KW_UNLOAD - 160)) | (1 << (FlinkSQLParser.KW_USAGE - 160)) | (1 << (FlinkSQLParser.KW_USE - 160)) | (1 << (FlinkSQLParser.KW_UTF16 - 160)) | (1 << (FlinkSQLParser.KW_UTF32 - 160)) | (1 << (FlinkSQLParser.KW_UTF8 - 160)) | (1 << (FlinkSQLParser.KW_VERSION - 160)) | (1 << (FlinkSQLParser.KW_VIEW - 160)) | (1 << (FlinkSQLParser.KW_VIEWS - 160)) | (1 << (FlinkSQLParser.KW_VIRTUAL - 160)) | (1 << (FlinkSQLParser.KW_WATERMARK - 160)) | (1 << (FlinkSQLParser.KW_WATERMARKS - 160)) | (1 << (FlinkSQLParser.KW_WEEK - 160)) | (1 << (FlinkSQLParser.KW_WORK - 160)) | (1 << (FlinkSQLParser.KW_WRAPPER - 160)) | (1 << (FlinkSQLParser.KW_YEARS - 160)) | (1 << (FlinkSQLParser.KW_ZONE - 160)))) !== 0) || _la === FlinkSQLParser.KW_DATE || _la === FlinkSQLParser.KW_LOCALTIMESTAMP || _la === FlinkSQLParser.KW_USER)) {
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
	public selectStatement(): SelectStatementContext {
		let _localctx: SelectStatementContext = new SelectStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 356, FlinkSQLParser.RULE_selectStatement);
		try {
			this.state = 2518;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 312, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 2500;
				this.selectClause();
				this.state = 2501;
				this.fromClause();
				this.state = 2503;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 308, this._ctx) ) {
				case 1:
					{
					this.state = 2502;
					this.whereClause();
					}
					break;
				}
				this.state = 2506;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 309, this._ctx) ) {
				case 1:
					{
					this.state = 2505;
					this.groupByClause();
					}
					break;
				}
				this.state = 2509;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 310, this._ctx) ) {
				case 1:
					{
					this.state = 2508;
					this.havingClause();
					}
					break;
				}
				this.state = 2512;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 311, this._ctx) ) {
				case 1:
					{
					this.state = 2511;
					this.windowClause();
					}
					break;
				}
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 2514;
				this.selectClause();
				this.state = 2515;
				this.fromClause();
				this.state = 2516;
				this.matchRecognizeClause();
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
	public joinOp(): JoinOpContext {
		let _localctx: JoinOpContext = new JoinOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 358, FlinkSQLParser.RULE_joinOp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2520;
			this.flinkJoinOp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableExpressionPlus(): TableExpressionPlusContext {
		let _localctx: TableExpressionPlusContext = new TableExpressionPlusContext(this._ctx, this.state);
		this.enterRule(_localctx, 360, FlinkSQLParser.RULE_tableExpressionPlus);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2522;
			this.tableReference();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		case 33:
			return this.queryStatement_sempred(_localctx as QueryStatementContext, predIndex);

		case 42:
			return this.tableExpression_sempred(_localctx as TableExpressionContext, predIndex);

		case 119:
			return this.booleanExpression_sempred(_localctx as BooleanExpressionContext, predIndex);

		case 122:
			return this.valueExpression_sempred(_localctx as ValueExpressionContext, predIndex);

		case 123:
			return this.primaryExpression_sempred(_localctx as PrimaryExpressionContext, predIndex);
		}
		return true;
	}
	private queryStatement_sempred(_localctx: QueryStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
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
			return this.precpred(this._ctx, 6);

		case 7:
			return this.precpred(this._ctx, 5);

		case 8:
			return this.precpred(this._ctx, 4);

		case 9:
			return this.precpred(this._ctx, 3);

		case 10:
			return this.precpred(this._ctx, 2);

		case 11:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private primaryExpression_sempred(_localctx: PrimaryExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 12:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 5;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\u01CB\u09DF\x04" +
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
		"\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x03\x02\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x07\x03\u0172\n\x03\f\x03\x0E\x03\u0175\v\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\u017D\n\x04\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x05\b\u0187\n\b\x03\t\x03" +
		"\t\x03\t\x05\t\u018C\n\t\x03\n\x03\n\x05\n\u0190\n\n\x03\n\x03\n\x05\n" +
		"\u0194\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\u019B\n\n\f\n\x0E\n\u019E" +
		"\v\n\x03\n\x03\n\x05\n\u01A2\n\n\x03\n\x03\n\x05\n\u01A6\n\n\x03\n\x03" +
		"\n\x05\n\u01AA\n\n\x03\n\x03\n\x05\n\u01AE\n\n\x03\n\x05\n\u01B1\n\n\x03" +
		"\n\x05\n\u01B4\n\n\x03\n\x05\n\u01B7\n\n\x03\n\x05\n\u01BA\n\n\x03\v\x03" +
		"\v\x05\v\u01BE\n\v\x03\v\x03\v\x05\v\u01C2\n\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x07\v\u01C9\n\v\f\v\x0E\v\u01CC\v\v\x05\v\u01CE\n\v\x03\v\x03\v" +
		"\x05\v\u01D2\n\v\x03\v\x03\v\x05\v\u01D6\n\v\x03\v\x03\v\x05\v\u01DA\n" +
		"\v\x03\v\x03\v\x05\v\u01DE\n\v\x03\v\x05\v\u01E1\n\v\x03\v\x05\v\u01E4" +
		"\n\v\x03\v\x03\v\x05\v\u01E8\n\v\x03\f\x03\f\x03\f\x05\f\u01ED\n\f\x03" +
		"\f\x03\f\x03\f\x03\f\x05\f\u01F3\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x07\r\u01FB\n\r\f\r\x0E\r\u01FE\v\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x05\x0F\u0205\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x05\x0F\u020D\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0212\n\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0219\n\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x05\x0F\u021E\n\x0F\x07\x0F\u0220\n\x0F\f\x0F\x0E\x0F\u0223\v" +
		"\x0F\x03\x0F\x03\x0F\x05\x0F\u0227\n\x0F\x03\x0F\x03\x0F\x05\x0F\u022B" +
		"\n\x0F\x03\x0F\x03\x0F\x05\x0F\u022F\n\x0F\x03\x0F\x03\x0F\x05\x0F\u0233" +
		"\n\x0F\x03\x0F\x05\x0F\u0236\n\x0F\x03\x0F\x05\x0F\u0239\n\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x05\x0F\u023E\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05" +
		"\x0F\u0244\n\x0F\x03\x0F\x05\x0F\u0247\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05" +
		"\x0F\u024C\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x07\x0F\u0255\n\x0F\f\x0F\x0E\x0F\u0258\v\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x05\x0F\u025D\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x05\x0F\u0266\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x07\x0F\u026E\n\x0F\f\x0F\x0E\x0F\u0271\v\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x05\x0F\u0278\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0282\n\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u028B\n\x0F\f\x0F\x0E\x0F\u028E" +
		"\v\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0293\n\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u029C\n\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u02A5\n\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u02B0" +
		"\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F" +
		"\u02B9\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05" +
		"\x0F\u02C2\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x05\x0F\u02CB\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u02D1\n\x0F" +
		"\x03\x10\x03\x10\x03\x10\x05\x10\u02D6\n\x10\x03\x11\x03\x11\x05\x11\u02DA" +
		"\n\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u02E9\n\x13\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u02FC\n\x17" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u030D\n\x18\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05" +
		"\x1A\u0318\n\x1A\x03\x1A\x03\x1A\x05\x1A\u031C\n\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x05\x1A\u0323\n\x1A\x03\x1B\x03\x1B\x03\x1B\x05\x1B" +
		"\u0328\n\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x05\x1C\u032E\n\x1C\x03\x1C" +
		"\x03\x1C\x05\x1C\u0332\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x05" +
		"\x1D\u0339\n\x1D\x03\x1D\x03\x1D\x05\x1D\u033D\n\x1D\x03\x1E\x03\x1E\x05" +
		"\x1E\u0341\n\x1E\x03\x1E\x03\x1E\x05\x1E\u0345\n\x1E\x03\x1E\x03\x1E\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u034D\n\x1F\x03\x1F\x03\x1F\x05\x1F" +
		"\u0351\n\x1F\x03\x1F\x03\x1F\x03 \x05 \u0356\n \x03 \x03 \x03!\x03!\x03" +
		"!\x03!\x05!\u035E\n!\x05!\u0360\n!\x03!\x03!\x05!\u0364\n!\x03!\x05!\u0367" +
		"\n!\x03!\x03!\x05!\u036B\n!\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03" +
		"#\x03#\x03#\x03#\x05#\u0378\n#\x03#\x05#\u037B\n#\x03#\x05#\u037E\n#\x05" +
		"#\u0380\n#\x03#\x03#\x03#\x05#\u0385\n#\x03#\x03#\x05#\u0389\n#\x03#\x05" +
		"#\u038C\n#\x07#\u038E\n#\f#\x0E#\u0391\v#\x03$\x03$\x03$\x03$\x07$\u0397" +
		"\n$\f$\x0E$\u039A\v$\x03%\x03%\x03%\x03%\x03%\x07%\u03A1\n%\f%\x0E%\u03A4" +
		"\v%\x03%\x03%\x05%\u03A8\n%\x03%\x03%\x03%\x03%\x03%\x03&\x03&\x03\'\x03" +
		"\'\x03\'\x03\'\x03\'\x07\'\u03B6\n\'\f\'\x0E\'\u03B9\v\'\x03(\x03(\x05" +
		"(\u03BD\n(\x03(\x03(\x03(\x03(\x07(\u03C3\n(\f(\x0E(\u03C6\v(\x05(\u03C8" +
		"\n(\x03)\x03)\x03)\x05)\u03CD\n)\x03)\x05)\u03D0\n)\x05)\u03D2\n)\x03" +
		"*\x03*\x03*\x03*\x05*\u03D8\n*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u03E0" +
		"\n*\x03*\x03*\x05*\u03E4\n*\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x07,\u03ED" +
		"\n,\f,\x0E,\u03F0\v,\x03,\x03,\x05,\u03F4\n,\x03,\x03,\x03,\x03,\x03," +
		"\x03,\x05,\u03FC\n,\x03,\x05,\u03FF\n,\x03,\x05,\u0402\n,\x03,\x05,\u0405" +
		"\n,\x03,\x03,\x03,\x05,\u040A\n,\x03,\x03,\x07,\u040E\n,\f,\x0E,\u0411" +
		"\v,\x07,\u0413\n,\f,\x0E,\u0416\v,\x03-\x03-\x03.\x03.\x05.\u041C\n.\x03" +
		"/\x05/\u041F\n/\x03/\x03/\x05/\u0423\n/\x03/\x03/\x05/\u0427\n/\x03/\x03" +
		"/\x03/\x03/\x03/\x03/\x03/\x03/\x07/\u0431\n/\f/\x0E/\u0434\v/\x03/\x03" +
		"/\x03/\x03/\x05/\u043A\n/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x03/\x03/\x07/\u0448\n/\f/\x0E/\u044B\v/\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x03/\x03/\x07/\u0455\n/\f/\x0E/\u0458\v/\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x03/\x05/\u0461\n/\x030\x030\x030\x030\x030\x030\x030\x030\x05" +
		"0\u046B\n0\x031\x031\x032\x032\x032\x032\x032\x033\x033\x033\x033\x03" +
		"3\x034\x034\x034\x034\x054\u047D\n4\x035\x035\x035\x035\x035\x035\x05" +
		"5\u0485\n5\x035\x035\x035\x035\x055\u048B\n5\x035\x035\x035\x035\x035" +
		"\x055\u0492\n5\x035\x035\x035\x035\x035\x035\x035\x055\u049B\n5\x035\x05" +
		"5\u049E\n5\x035\x035\x036\x036\x036\x036\x036\x036\x056\u04A8\n6\x036" +
		"\x036\x036\x036\x056\u04AE\n6\x036\x036\x036\x036\x036\x056\u04B5\n6\x03" +
		"6\x056\u04B8\n6\x036\x036\x036\x056\u04BD\n6\x036\x036\x036\x036\x036" +
		"\x036\x036\x056\u04C6\n6\x036\x056\u04C9\n6\x036\x036\x037\x037\x037\x03" +
		"7\x037\x037\x057\u04D3\n7\x037\x037\x037\x037\x057\u04D9\n7\x037\x037" +
		"\x037\x037\x037\x057\u04E0\n7\x037\x057\u04E3\n7\x037\x037\x037\x057\u04E8" +
		"\n7\x037\x037\x037\x037\x038\x038\x038\x038\x038\x038\x058\u04F4\n8\x03" +
		"8\x038\x038\x038\x038\x038\x078\u04FC\n8\f8\x0E8\u04FF\v8\x058\u0501\n" +
		"8\x038\x038\x038\x058\u0506\n8\x038\x058\u0509\n8\x038\x038\x038\x058" +
		"\u050E\n8\x038\x058\u0511\n8\x038\x038\x039\x039\x03:\x03:\x03:\x03:\x03" +
		":\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x05:\u0526\n:\x03" +
		";\x03;\x03<\x03<\x03<\x03<\x03<\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x07" +
		"=\u0536\n=\f=\x0E=\u0539\v=\x03=\x03=\x05=\u053D\n=\x03>\x03>\x03>\x03" +
		"?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x07?\u054A\n?\f?\x0E?\u054D\v?\x03" +
		"?\x03?\x03?\x03?\x03?\x03?\x03?\x07?\u0556\n?\f?\x0E?\u0559\v?\x03?\x03" +
		"?\x03?\x03?\x03?\x03?\x03?\x07?\u0562\n?\f?\x0E?\u0565\v?\x03?\x03?\x05" +
		"?\u0569\n?\x03@\x03@\x03@\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x03B\x03" +
		"B\x03C\x03C\x03D\x03D\x03E\x03E\x03E\x03F\x03F\x03F\x03F\x07F\u0582\n" +
		"F\fF\x0EF\u0585\vF\x03G\x03G\x03G\x03G\x03H\x05H\u058C\nH\x03H\x03H\x05" +
		"H\u0590\nH\x03H\x05H\u0593\nH\x03H\x05H\u0596\nH\x03H\x03H\x03I\x03I\x03" +
		"I\x05I\u059D\nI\x03I\x05I\u05A0\nI\x03I\x05I\u05A3\nI\x03I\x05I\u05A6" +
		"\nI\x03I\x05I\u05A9\nI\x03I\x05I\u05AC\nI\x03I\x03I\x03I\x05I\u05B1\n" +
		"I\x03I\x05I\u05B4\nI\x03J\x03J\x03J\x03J\x03J\x07J\u05BB\nJ\fJ\x0EJ\u05BE" +
		"\vJ\x03K\x03K\x05K\u05C2\nK\x03K\x03K\x05K\u05C6\nK\x03L\x03L\x03L\x05" +
		"L\u05CB\nL\x03M\x03M\x03M\x03M\x03M\x07M\u05D2\nM\fM\x0EM\u05D5\vM\x03" +
		"N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03" +
		"N\x03N\x05N\u05E7\nN\x03O\x03O\x03O\x03O\x07O\u05ED\nO\fO\x0EO\u05F0\v" +
		"O\x03P\x03P\x03P\x06P\u05F5\nP\rP\x0EP\u05F6\x03P\x03P\x05P\u05FB\nP\x03" +
		"Q\x03Q\x05Q\u05FF\nQ\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x05R\u0609" +
		"\nR\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03" +
		"S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x05S\u0623\nS\x03" +
		"T\x03T\x03T\x03T\x07T\u0629\nT\fT\x0ET\u062C\vT\x03U\x03U\x03U\x03U\x03" +
		"U\x03U\x03U\x03U\x03U\x05U\u0637\nU\x03V\x03V\x03V\x03V\x03V\x03W\x03" +
		"W\x03W\x03X\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z\x03[\x03" +
		"[\x03[\x03[\x07[\u0650\n[\f[\x0E[\u0653\v[\x03[\x03[\x03\\\x03\\\x03\\" +
		"\x03\\\x03\\\x03\\\x07\\\u065D\n\\\f\\\x0E\\\u0660\v\\\x03\\\x03\\\x05" +
		"\\\u0664\n\\\x03]\x03]\x05]\u0668\n]\x03^\x03^\x03^\x03^\x07^\u066E\n" +
		"^\f^\x0E^\u0671\v^\x03^\x05^\u0674\n^\x03_\x03_\x03_\x05_\u0679\n_\x03" +
		"_\x03_\x03_\x03_\x05_\u067F\n_\x03_\x03_\x03_\x03_\x05_\u0685\n_\x03`" +
		"\x03`\x03`\x05`\u068A\n`\x03`\x03`\x03`\x03`\x05`\u0690\n`\x03`\x03`\x03" +
		"`\x03`\x05`\u0696\n`\x03a\x03a\x03a\x03a\x05a\u069C\na\x03b\x03b\x03b" +
		"\x05b\u06A1\nb\x03c\x03c\x03c\x05c\u06A6\nc\x03c\x05c\u06A9\nc\x03d\x03" +
		"d\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x05e\u06B7\ne\x03" +
		"e\x03e\x03e\x05e\u06BC\ne\x05e\u06BE\ne\x03f\x03f\x05f\u06C2\nf\x03f\x03" +
		"f\x03f\x03f\x03f\x03f\x03g\x03g\x03h\x03h\x03h\x03h\x07h\u06D0\nh\fh\x0E" +
		"h\u06D3\vh\x03i\x03i\x03i\x03i\x07i\u06D9\ni\fi\x0Ei\u06DC\vi\x03i\x03" +
		"i\x03j\x03j\x03j\x03j\x03k\x03k\x03k\x03k\x05k\u06E8\nk\x03k\x03k\x03" +
		"l\x03l\x03l\x03l\x05l\u06F0\nl\x03l\x03l\x03m\x03m\x03m\x03m\x07m\u06F8" +
		"\nm\fm\x0Em\u06FB\vm\x03m\x03m\x03n\x03n\x03n\x03n\x03n\x03n\x03n\x03" +
		"o\x03o\x03o\x03o\x03o\x03o\x03o\x07o\u070D\no\fo\x0Eo\u0710\vo\x03o\x03" +
		"o\x03p\x03p\x05p\u0716\np\x03p\x03p\x03p\x03p\x05p\u071C\np\x03p\x05p" +
		"\u071F\np\x03p\x05p\u0722\np\x03q\x03q\x03q\x03r\x03r\x03r\x03r\x03r\x05" +
		"r\u072C\nr\x03r\x05r\u072F\nr\x03s\x03s\x03t\x03t\x03t\x03t\x05t\u0737" +
		"\nt\x03u\x03u\x05u\u073B\nu\x03v\x03v\x03v\x03v\x07v\u0741\nv\fv\x0Ev" +
		"\u0744\vv\x03v\x03v\x03w\x03w\x03w\x05w\u074B\nw\x03w\x03w\x05w\u074F" +
		"\nw\x03w\x03w\x05w\u0753\nw\x03w\x03w\x05w\u0757\nw\x03w\x03w\x05w\u075B" +
		"\nw\x03w\x03w\x05w\u075F\nw\x03w\x03w\x05w\u0763\nw\x03w\x03w\x05w\u0767" +
		"\nw\x03w\x03w\x05w\u076B\nw\x03w\x03w\x05w\u076F\nw\x03w\x03w\x05w\u0773" +
		"\nw\x03w\x03w\x05w\u0777\nw\x03w\x03w\x05w\u077B\nw\x03w\x03w\x05w\u077F" +
		"\nw\x03w\x03w\x05w\u0783\nw\x03w\x03w\x05w\u0787\nw\x03w\x03w\x05w\u078B" +
		"\nw\x03w\x03w\x05w\u078F\nw\x05w\u0791\nw\x03x\x03x\x03y\x03y\x03y\x03" +
		"y\x03y\x03y\x03y\x03y\x03y\x03y\x05y\u079F\ny\x05y\u07A1\ny\x03y\x03y" +
		"\x03y\x03y\x03y\x03y\x03y\x03y\x03y\x05y\u07AC\ny\x03y\x07y\u07AF\ny\f" +
		"y\x0Ey\u07B2\vy\x03z\x05z\u07B5\nz\x03z\x03z\x05z\u07B9\nz\x03z\x03z\x03" +
		"z\x03z\x03z\x05z\u07C0\nz\x03z\x03z\x03z\x03z\x03z\x07z\u07C7\nz\fz\x0E" +
		"z\u07CA\vz\x03z\x03z\x03z\x05z\u07CF\nz\x03z\x03z\x03z\x03z\x03z\x03z" +
		"\x03z\x03z\x03z\x03z\x03z\x05z\u07DC\nz\x03z\x03z\x03z\x03z\x03z\x05z" +
		"\u07E3\nz\x03z\x03z\x03z\x05z\u07E8\nz\x03z\x03z\x03z\x03z\x05z\u07EE" +
		"\nz\x03z\x03z\x03z\x03z\x03z\x05z\u07F5\nz\x05z\u07F7\nz\x03{\x05{\u07FA" +
		"\n{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x07{\u0804\n{\f{\x0E{\u0807" +
		"\v{\x03{\x03{\x05{\u080B\n{\x03{\x05{\u080E\n{\x03{\x03{\x03{\x03{\x05" +
		"{\u0814\n{\x05{\u0816\n{\x03|\x03|\x03|\x03|\x05|\u081C\n|\x03|\x03|\x03" +
		"|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03" +
		"|\x03|\x03|\x07|\u0831\n|\f|\x0E|\u0834\v|\x03}\x03}\x03}\x06}\u0839\n" +
		"}\r}\x0E}\u083A\x03}\x03}\x05}\u083F\n}\x03}\x03}\x03}\x03}\x03}\x06}" +
		"\u0846\n}\r}\x0E}\u0847\x03}\x03}\x05}\u084C\n}\x03}\x03}\x03}\x03}\x03" +
		"}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x05}\u085C\n}\x03}\x03" +
		"}\x03}\x03}\x03}\x03}\x03}\x05}\u0865\n}\x03}\x03}\x03}\x03}\x03}\x03" +
		"}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x03" +
		"}\x03}\x03}\x05}\u087D\n}\x03}\x03}\x03}\x07}\u0882\n}\f}\x0E}\u0885\v" +
		"}\x05}\u0887\n}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x03" +
		"}\x03}\x05}\u0895\n}\x03}\x03}\x03}\x05}\u089A\n}\x03}\x03}\x03}\x03}" +
		"\x03}\x03}\x03}\x05}\u08A3\n}\x03}\x03}\x03}\x03}\x03}\x07}\u08AA\n}\f" +
		"}\x0E}\u08AD\v}\x03~\x03~\x03~\x05~\u08B2\n~\x03\x7F\x03\x7F\x03\x7F\x03" +
		"\x7F\x03\x7F\x07\x7F\u08B9\n\x7F\f\x7F\x0E\x7F\u08BC\v\x7F\x03\x7F\x03" +
		"\x7F\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x07\x80\u08C5\n\x80\f\x80" +
		"\x0E\x80\u08C8\v\x80\x03\x80\x03\x80\x03\x81\x03\x81\x03\x81\x03\x81\x03" +
		"\x81\x03\x81\x03\x81\x03\x82\x03\x82\x05\x82\u08D5\n\x82\x03\x83\x03\x83" +
		"\x03\x83\x05\x83\u08DA\n\x83\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x05" +
		"\x84\u08E1\n\x84\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x86" +
		"\x03\x86\x03\x87\x03\x87\x03\x88\x03\x88\x05\x88\u08EF\n\x88\x03\x89\x03" +
		"\x89\x03\x89\x05\x89\u08F4\n\x89\x03\x8A\x03\x8A\x05\x8A\u08F8\n\x8A\x03" +
		"\x8B\x03\x8B\x03\x8B\x06\x8B\u08FD\n\x8B\r\x8B\x0E\x8B\u08FE\x03\x8C\x03" +
		"\x8C\x03\x8C\x05\x8C\u0904\n\x8C\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8D" +
		"\x03\x8E\x05\x8E\u090C\n\x8E\x03\x8E\x03\x8E\x05\x8E\u0910\n\x8E\x03\x8F" +
		"\x05\x8F\u0913\n\x8F\x03\x8F\x03\x8F\x05\x8F\u0917\n\x8F";
	private static readonly _serializedATNSegment1: string =
		"\x03\x90\x05\x90\u091A\n\x90\x03\x90\x03\x90\x05\x90\u091E\n\x90\x03\x91" +
		"\x03\x91\x03\x91\x03\x92\x03\x92\x06\x92\u0925\n\x92\r\x92\x0E\x92\u0926" +
		"\x03\x92\x05\x92\u092A\n\x92\x03\x93\x03\x93\x03\x93\x03\x93\x03\x94\x03" +
		"\x94\x03\x94\x07\x94\u0933\n\x94\f\x94\x0E\x94\u0936\v\x94\x03\x95\x03" +
		"\x95\x03\x95\x03\x95\x05\x95\u093C\n\x95\x03\x96\x03\x96\x03\x96\x03\x96" +
		"\x03\x96\x03\x97\x03\x97\x03\x98\x03\x98\x03\x99\x03\x99\x03\x99\x03\x99" +
		"\x03\x99\x03\x9A\x03\x9A\x03\x9B\x03\x9B\x03\x9C\x03\x9C\x03\x9D\x03\x9D" +
		"\x03\x9E\x03\x9E\x03\x9F\x03\x9F\x03\x9F\x07\x9F\u0959\n\x9F\f\x9F\x0E" +
		"\x9F\u095C\v\x9F\x03\xA0\x03\xA0\x03\xA0\x03\xA1\x03\xA1\x03\xA1\x03\xA1" +
		"\x03\xA2\x03\xA2\x03\xA2\x03\xA3\x03\xA3\x03\xA3\x05\xA3\u096B\n\xA3\x03" +
		"\xA3\x03\xA3\x03\xA3\x05\xA3\u0970\n\xA3\x07\xA3\u0972\n\xA3\f\xA3\x0E" +
		"\xA3\u0975\v\xA3\x03\xA3\x03\xA3\x03\xA4\x03\xA4\x03\xA4\x03\xA4\x07\xA4" +
		"\u097D\n\xA4\f\xA4\x0E\xA4\u0980\v\xA4\x03\xA4\x03\xA4\x03\xA5\x03\xA5" +
		"\x03\xA5\x03\xA5\x03\xA6\x03\xA6\x03\xA6\x05\xA6\u098B\n\xA6\x03\xA7\x03" +
		"\xA7\x03\xA7\x03\xA7\x05\xA7\u0991\n\xA7\x03\xA8\x03\xA8\x03\xA8\x03\xA8" +
		"\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8" +
		"\x03\xA8\x05\xA8\u09A1\n\xA8\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x05\xA9\u09A7" +
		"\n\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x05\xA9\u09AD\n\xA9\x03\xA9\x05" +
		"\xA9\u09B0\n\xA9\x03\xAA\x03\xAA\x03\xAA\x03\xAB\x03\xAB\x03\xAC\x03\xAC" +
		"\x03\xAD\x03\xAD\x03\xAE\x03\xAE\x03\xAF\x03\xAF\x03\xB0\x03\xB0\x03\xB1" +
		"\x03\xB1\x03\xB2\x03\xB2\x03\xB3\x03\xB3\x03\xB4\x03\xB4\x03\xB4\x05\xB4" +
		"\u09CA\n\xB4\x03\xB4\x05\xB4\u09CD\n\xB4\x03\xB4\x05\xB4\u09D0\n\xB4\x03" +
		"\xB4\x05\xB4\u09D3\n\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x05\xB4\u09D9" +
		"\n\xB4\x03\xB5\x03\xB5\x03\xB6\x03\xB6\x03\xB6\x02\x02\x07DV\xF0\xF6\xF8" +
		"\xB7\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
		"(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02" +
		"D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02" +
		"`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02" +
		"|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E" +
		"\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0" +
		"\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2" +
		"\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4" +
		"\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6" +
		"\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8" +
		"\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA" +
		"\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108\x02" +
		"\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116\x02" +
		"\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124\x02" +
		"\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02\u0130\x02\u0132\x02" +
		"\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02\u013E\x02\u0140\x02" +
		"\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02\u014C\x02\u014E\x02" +
		"\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02\u015A\x02\u015C\x02" +
		"\u015E\x02\u0160\x02\u0162\x02\u0164\x02\u0166\x02\u0168\x02\u016A\x02" +
		"\x02\'\x04\x02\x06\x06ZZ\x04\x0211PP\x04\x02\b\b\v\v\x05\x02GGtt\x87\x87" +
		"\x04\x02\r\r\x84\x84\x05\x02\u0107\u0107\u0125\u0125\u0186\u0186\x06\x02" +
		"\u0114\u0114\u0120\u0120\u0130\u0130\u0161\u0161\x06\x02\x1A\x1A>>\x92" +
		"\x92\xAA\xAA\x07\x02\x1B\x1B\x95\x96\x9C\x9C\xA3\xA3\u014A\u014A\x04\x02" +
		"\xEC\xEC\u0164\u0164\x05\x02>>\x92\x92\xAA\xAA\x04\x02\n\n!!\x04\x02," +
		",\u011F\u011F\x05\x02\x18\x18gg\xC0\xC0\x05\x02,,ee\u011F\u011F\x05\x02" +
		"99aa\xB8\xB8\x05\x02\xD1\xD1\xF1\xF1\u0147\u0147\r\x02\f\f\x9E\x9E\xA5" +
		"\xA5\xCD\xCE\xDA\xDA\xF2\xF2\u0123\u0124\u016F\u016F\u017C\u017C\u0181" +
		"\u0181\u0191\u0192\x04\x02\u0196\u0196\u0198\u0198\x06\x02\xF4\xF5\xFF" +
		"\xFF\u0110\u0110\u0148\u0148\x04\x02\xC6\xC6\u0140\u0140\x06\x02\u010E" +
		"\u010E\u0147\u0147\u0184\u0184\u0188\u0188\x04\x02\xC8\xC8\u0174\u0174" +
		"\x04\x02\xC0\xC0\xC4\xC4\x04\x02\u01A7\u01A7\u01C0\u01C1\x06\x02##\u01BE" +
		"\u01BE\u01C2\u01C2\u01C5\u01C5\x04\x02\u01C0\u01C1\u01C3\u01C3\x03\x02" +
		"\u01C0\u01C1\x03\x02\u01C9\u01CA\x04\x02\u01C9\u01C9\u01CB\u01CB\x04\x02" +
		"\u010E\u010E\u0184\u0184\x04\x02\xC0\xC0\xFD\xFD\f\x02UUWW{{\xB9\xB9\xF3" +
		"\xF3\u011C\u011C\u013C\u013C\u013F\u013F\u0168\u0168\u0199\u0199\x12\x02" +
		"\x10\x10\x1E\x1F\'\'??UX\\]{{\x8B\x8B\xB9\xBA\xBD\xBD\xF3\xF3\u011C\u011C" +
		"\u013C\u013C\u013F\u013F\u0168\u0168\u0199\u0199\b\x02\xC0\xC0\xD2\xD2" +
		"\xFD\xFD\u012F\u012F\u0183\u0183\u01BE\u01BE#\x02@@TT{{\xB9\xB9\xBF\xBF" +
		"\xC6\xC6\xCA\xCA\xD8\xD9\xE0\xE0\xE2\xE2\xE9\xE9\xF1\xF1\u010D\u010D\u0113" +
		"\u0113\u0119\u0119\u011C\u011C\u012A\u012A\u012D\u012E\u0130\u0130\u013C" +
		"\u013C\u013F\u013F\u0146\u0146\u0152\u0152\u0157\u0157\u0159\u015A\u015D" +
		"\u015E\u0161\u0161\u0168\u0168\u0172\u0173\u017C\u0180\u0185\u0185\u018B" +
		"\u018B\u0199\u0199\x11\x02\x06\x15\x17&(-/9;HKlnpr\x8E\x90\x9A\x9C\x9C" +
		"\x9E\xB9\xBB\xBE\xF1\xF1\u0135\u0135\u018D\u018D\x02\u0AC8\x02\u016C\x03" +
		"\x02\x02\x02\x04\u0173\x03\x02\x02\x02\x06\u017C\x03\x02\x02\x02\b\u017E" +
		"\x03\x02\x02\x02\n\u0180\x03\x02\x02\x02\f\u0182\x03\x02\x02\x02\x0E\u0186" +
		"\x03\x02\x02\x02\x10\u018B\x03\x02\x02\x02\x12\u018D\x03\x02\x02\x02\x14" +
		"\u01BB\x03\x02\x02\x02\x16\u01E9\x03\x02\x02\x02\x18\u01F4\x03\x02\x02" +
		"\x02\x1A\u01FF\x03\x02\x02\x02\x1C\u02D0\x03\x02\x02\x02\x1E\u02D5\x03" +
		"\x02\x02\x02 \u02D7\x03\x02\x02\x02\"\u02DE\x03\x02\x02\x02$\u02E1\x03" +
		"\x02\x02\x02&\u02EA\x03\x02\x02\x02(\u02EE\x03\x02\x02\x02*\u02F2\x03" +
		"\x02\x02\x02,\u02F5\x03\x02\x02\x02.\u02FD\x03\x02\x02\x020\u030E\x03" +
		"\x02\x02\x022\u0313\x03\x02\x02\x024\u0324\x03\x02\x02\x026\u032B\x03" +
		"\x02\x02\x028\u0335\x03\x02\x02\x02:\u033E\x03\x02\x02\x02<\u0348\x03" +
		"\x02\x02\x02>\u0355\x03\x02\x02\x02@\u0359\x03\x02\x02\x02B\u036C\x03" +
		"\x02\x02\x02D\u037F\x03\x02\x02\x02F\u0392\x03\x02\x02\x02H\u039B\x03" +
		"\x02\x02\x02J\u03AE\x03\x02\x02\x02L\u03B0\x03\x02\x02\x02N\u03BA\x03" +
		"\x02\x02\x02P\u03D1\x03\x02\x02\x02R\u03E3\x03\x02\x02\x02T\u03E5\x03" +
		"\x02\x02\x02V\u03F3\x03\x02\x02\x02X\u0417\x03\x02\x02\x02Z\u0419\x03" +
		"\x02\x02\x02\\\u0460\x03\x02\x02\x02^\u046A\x03\x02\x02\x02`\u046C\x03" +
		"\x02\x02\x02b\u046E\x03\x02\x02\x02d\u0473\x03\x02\x02\x02f\u047C\x03" +
		"\x02\x02\x02h\u047E\x03\x02\x02\x02j\u04A1\x03\x02\x02\x02l\u04CC\x03" +
		"\x02\x02\x02n\u04ED\x03\x02\x02\x02p\u0514\x03\x02\x02\x02r\u0525\x03" +
		"\x02\x02\x02t\u0527\x03\x02\x02\x02v\u0529\x03\x02\x02\x02x\u053C\x03" +
		"\x02\x02\x02z\u053E\x03\x02\x02\x02|\u0568\x03\x02\x02\x02~\u056A\x03" +
		"\x02\x02\x02\x80\u056D\x03\x02\x02\x02\x82\u056F\x03\x02\x02\x02\x84\u0576" +
		"\x03\x02\x02\x02\x86\u0578\x03\x02\x02\x02\x88\u057A\x03\x02\x02\x02\x8A" +
		"\u057D\x03\x02\x02\x02\x8C\u0586\x03\x02\x02\x02\x8E\u058B\x03\x02\x02" +
		"\x02\x90\u0599\x03\x02\x02\x02\x92\u05B5\x03\x02\x02\x02\x94\u05BF\x03" +
		"\x02\x02\x02\x96\u05C7\x03\x02\x02\x02\x98\u05CC\x03\x02\x02\x02\x9A\u05E6" +
		"\x03\x02\x02\x02\x9C\u05E8\x03\x02\x02\x02\x9E\u05F1\x03\x02\x02\x02\xA0" +
		"\u05FC\x03\x02\x02\x02\xA2\u0608\x03\x02\x02\x02\xA4\u0622\x03\x02\x02" +
		"\x02\xA6\u0624\x03\x02\x02\x02\xA8\u0636\x03\x02\x02\x02\xAA\u0638\x03" +
		"\x02\x02\x02\xAC\u063D\x03\x02\x02\x02\xAE\u0640\x03\x02\x02\x02\xB0\u0643" +
		"\x03\x02\x02\x02\xB2\u0647\x03\x02\x02\x02\xB4\u064B\x03\x02\x02\x02\xB6" +
		"\u0663\x03\x02\x02\x02\xB8\u0667\x03\x02\x02\x02\xBA\u0669\x03\x02\x02" +
		"\x02\xBC\u0675\x03\x02\x02\x02\xBE\u0686\x03\x02\x02\x02\xC0\u069B\x03" +
		"\x02\x02\x02\xC2\u06A0\x03\x02\x02\x02\xC4\u06A2\x03\x02\x02\x02\xC6\u06AA" +
		"\x03\x02\x02\x02\xC8\u06BD\x03\x02\x02\x02\xCA\u06C1\x03\x02\x02\x02\xCC" +
		"\u06C9\x03\x02\x02\x02\xCE\u06CB\x03\x02\x02\x02\xD0\u06D4\x03\x02\x02" +
		"\x02\xD2\u06DF\x03\x02\x02\x02\xD4\u06E3\x03\x02\x02\x02\xD6\u06EB\x03" +
		"\x02\x02\x02\xD8\u06F3\x03\x02\x02\x02\xDA\u06FE\x03\x02\x02\x02\xDC\u0705" +
		"\x03\x02\x02\x02\xDE\u0721\x03\x02\x02\x02\xE0\u0723\x03\x02\x02\x02\xE2" +
		"\u0726\x03\x02\x02\x02\xE4\u0730\x03\x02\x02\x02\xE6\u0732\x03\x02\x02" +
		"\x02\xE8\u073A\x03\x02\x02\x02\xEA\u073C\x03\x02\x02\x02\xEC\u0790\x03" +
		"\x02\x02\x02\xEE\u0792\x03\x02\x02\x02\xF0\u07A0\x03\x02\x02\x02\xF2\u07F6" +
		"\x03\x02\x02\x02\xF4\u0815\x03\x02\x02\x02\xF6\u081B\x03\x02\x02\x02\xF8" +
		"\u08A2\x03\x02\x02\x02\xFA\u08B1\x03\x02\x02\x02\xFC\u08B3\x03\x02\x02" +
		"\x02\xFE\u08BF\x03\x02\x02\x02\u0100\u08CB\x03\x02\x02\x02\u0102\u08D4" +
		"\x03\x02\x02\x02\u0104\u08D9\x03\x02\x02\x02\u0106\u08E0\x03\x02\x02\x02" +
		"\u0108\u08E2\x03\x02\x02\x02\u010A\u08E8\x03\x02\x02\x02\u010C\u08EA\x03" +
		"\x02\x02\x02\u010E\u08EE\x03\x02\x02\x02\u0110\u08F0\x03\x02\x02\x02\u0112" +
		"\u08F5\x03\x02\x02\x02\u0114\u08FC\x03\x02\x02\x02\u0116\u0900\x03\x02" +
		"\x02\x02\u0118\u0905\x03\x02\x02\x02\u011A\u090F\x03\x02\x02\x02\u011C" +
		"\u0912\x03\x02\x02\x02\u011E\u0919\x03\x02\x02\x02\u0120\u091F\x03\x02" +
		"\x02\x02\u0122\u0929\x03\x02\x02\x02\u0124\u092B\x03\x02\x02\x02\u0126" +
		"\u092F\x03\x02\x02\x02\u0128\u093B\x03\x02\x02\x02\u012A\u093D\x03\x02" +
		"\x02\x02\u012C\u0942\x03\x02\x02\x02\u012E\u0944\x03\x02\x02\x02\u0130" +
		"\u0946\x03\x02\x02\x02\u0132\u094B\x03\x02\x02\x02\u0134\u094D\x03\x02" +
		"\x02\x02\u0136\u094F\x03\x02\x02\x02\u0138\u0951\x03\x02\x02\x02\u013A" +
		"\u0953\x03\x02\x02\x02\u013C\u0955\x03\x02\x02\x02\u013E\u095D\x03\x02" +
		"\x02\x02\u0140\u0960\x03\x02\x02\x02\u0142\u0964\x03\x02\x02\x02\u0144" +
		"\u0967\x03\x02\x02\x02\u0146\u0978\x03\x02\x02\x02\u0148\u0983\x03\x02" +
		"\x02\x02\u014A\u098A\x03\x02\x02\x02\u014C\u0990\x03\x02\x02\x02\u014E" +
		"\u09A0\x03\x02\x02\x02\u0150\u09AF\x03\x02\x02\x02\u0152\u09B1\x03\x02" +
		"\x02\x02\u0154\u09B4\x03\x02\x02\x02\u0156\u09B6\x03\x02\x02\x02\u0158" +
		"\u09B8\x03\x02\x02\x02\u015A\u09BA\x03\x02\x02\x02\u015C\u09BC\x03\x02" +
		"\x02\x02\u015E\u09BE\x03\x02\x02\x02\u0160\u09C0\x03\x02\x02\x02\u0162" +
		"\u09C2\x03\x02\x02\x02\u0164\u09C4\x03\x02\x02\x02\u0166\u09D8\x03\x02" +
		"\x02\x02\u0168\u09DA\x03\x02\x02\x02\u016A\u09DC\x03\x02\x02\x02\u016C" +
		"\u016D\x05\x04\x03\x02\u016D\u016E\x07\x02\x02\x03\u016E\x03\x03\x02\x02" +
		"\x02\u016F\u0172\x05\x06\x04\x02\u0170\u0172\x05\b\x05\x02\u0171\u016F" +
		"\x03\x02\x02\x02\u0171\u0170\x03\x02\x02\x02\u0172\u0175\x03\x02\x02\x02" +
		"\u0173\u0171\x03\x02\x02\x02\u0173\u0174\x03\x02\x02\x02\u0174\x05\x03" +
		"\x02\x02\x02\u0175\u0173\x03\x02\x02\x02\u0176\u0177\x05\n\x06\x02\u0177" +
		"\u0178\x07\u01B7\x02\x02\u0178\u017D\x03\x02\x02\x02\u0179\u017A\x05\x0E" +
		"\b\x02\u017A\u017B\x07\u01B7\x02\x02\u017B\u017D\x03\x02\x02\x02\u017C" +
		"\u0176\x03\x02\x02\x02\u017C\u0179\x03\x02\x02\x02\u017D\x07\x03\x02\x02" +
		"\x02\u017E\u017F\x07\u01B7\x02\x02\u017F\t\x03\x02\x02\x02\u0180\u0181" +
		"\x05\f\x07\x02\u0181\v\x03\x02\x02\x02\u0182\u0183\x05\x10\t\x02\u0183" +
		"\r\x03\x02\x02\x02\u0184\u0187\x05D#\x02\u0185\u0187\x05> \x02\u0186\u0184" +
		"\x03\x02\x02\x02\u0186\u0185\x03\x02\x02\x02\u0187\x0F\x03\x02\x02\x02" +
		"\u0188\u018C\x05\x12\n\x02\u0189\u018C\x05\x14\v\x02\u018A\u018C\x05\x16" +
		"\f\x02\u018B\u0188\x03\x02\x02\x02\u018B\u0189\x03\x02\x02\x02\u018B\u018A" +
		"\x03\x02\x02\x02\u018C\x11\x03\x02\x02\x02\u018D\u018F\x07\xEA\x02\x02" +
		"\u018E\u0190\x07\xA2\x02\x02\u018F\u018E\x03\x02\x02\x02\u018F\u0190\x03" +
		"\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191\u0193\x07\u0178\x02\x02" +
		"\u0192\u0194\x05\u0140\xA1\x02\u0193\u0192\x03\x02\x02\x02\u0193\u0194" +
		"\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195\u0196\x05\u0138\x9D" +
		"\x02\u0196\u0197\x07\u01B2\x02\x02\u0197\u019C\x05\xC2b\x02\u0198\u0199" +
		"\x07\u01B6\x02\x02\u0199\u019B\x05\xC2b\x02\u019A\u0198\x03\x02\x02\x02" +
		"\u019B\u019E\x03\x02\x02\x02\u019C\u019A\x03\x02\x02\x02\u019C\u019D\x03" +
		"\x02\x02\x02\u019D\u01A1\x03\x02\x02\x02\u019E\u019C\x03\x02\x02\x02\u019F" +
		"\u01A0\x07\u01B6\x02\x02\u01A0\u01A2\x05\xC8e\x02\u01A1\u019F\x03\x02" +
		"\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A5\x03\x02\x02\x02\u01A3" +
		"\u01A4\x07\u01B6\x02\x02\u01A4\u01A6\x05\xCAf\x02\u01A5\u01A3\x03\x02" +
		"\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A9\x03\x02\x02\x02\u01A7" +
		"\u01A8\x07\u01B6\x02\x02\u01A8\u01AA\x05\xB0Y\x02\u01A9\u01A7\x03\x02" +
		"\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02\u01AB" +
		"\u01AD\x07\u01B3\x02\x02\u01AC\u01AE\x05\xE0q\x02\u01AD\u01AC\x03\x02" +
		"\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01B0\x03\x02\x02\x02\u01AF" +
		"\u01B1\x05\xB2Z\x02\u01B0\u01AF\x03\x02\x02\x02\u01B0\u01B1\x03\x02\x02" +
		"\x02\u01B1\u01B3\x03\x02\x02\x02\u01B2\u01B4\x05\u013E\xA0\x02\u01B3\u01B2" +
		"\x03\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4\u01B6\x03\x02\x02\x02" +
		"\u01B5\u01B7\x05\xBA^\x02\u01B6\u01B5\x03\x02\x02\x02\u01B6\u01B7\x03" +
		"\x02\x02\x02\u01B7\u01B9\x03\x02\x02\x02\u01B8\u01BA\x05\xBC_\x02\u01B9" +
		"\u01B8\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA\x13\x03\x02\x02" +
		"\x02\u01BB\u01BD\x07\xEA\x02\x02\u01BC\u01BE\x07\xA2\x02\x02\u01BD\u01BC" +
		"\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02" +
		"\u01BF\u01C1\x07\u0178\x02\x02\u01C0\u01C2\x05\u0140\xA1\x02\u01C1\u01C0" +
		"\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02" +
		"\u01C3\u01C4\x05\u0138\x9D\x02\u01C4\u01CD\x07\u01B2\x02\x02\u01C5\u01CA" +
		"\x05\xC2b\x02\u01C6\u01C7\x07\u01B6\x02\x02\u01C7\u01C9\x05\xC2b\x02\u01C8" +
		"\u01C6\x03\x02\x02\x02\u01C9\u01CC\x03\x02\x02\x02\u01CA\u01C8\x03\x02" +
		"\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB\u01CE\x03\x02\x02\x02\u01CC" +
		"\u01CA\x03\x02\x02\x02\u01CD\u01C5\x03\x02\x02\x02\u01CD\u01CE\x03\x02" +
		"\x02\x02\u01CE\u01D1\x03\x02\x02\x02\u01CF\u01D0\x07\u01B6\x02\x02\u01D0" +
		"\u01D2\x05\xC8e\x02\u01D1\u01CF\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02" +
		"\x02\u01D2\u01D5\x03\x02\x02\x02\u01D3\u01D4\x07\u01B6\x02\x02\u01D4\u01D6" +
		"\x05\xCAf\x02\u01D5\u01D3\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02\x02" +
		"\u01D6\u01D9\x03\x02\x02\x02\u01D7\u01D8\x07\u01B6\x02\x02\u01D8\u01DA" +
		"\x05\xB0Y\x02\u01D9\u01D7\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02" +
		"\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DD\x07\u01B3\x02\x02\u01DC\u01DE" +
		"\x05\xE0q\x02\u01DD\u01DC\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02" +
		"\u01DE\u01E0\x03\x02\x02\x02\u01DF\u01E1\x05\xB2Z\x02\u01E0\u01DF\x03" +
		"\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1\u01E3\x03\x02\x02\x02\u01E2" +
		"\u01E4\x05\u013E\xA0\x02\u01E3\u01E2\x03\x02\x02\x02\u01E3\u01E4\x03\x02" +
		"\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5\u01E7\x05\xBA^\x02\u01E6\u01E8" +
		"\x05\xBC_\x02\u01E7\u01E6\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02" +
		"\u01E8\x15\x03\x02\x02\x02\u01E9\u01EA\x07\xEA\x02\x02\u01EA\u01EC\x07" +
		"\u0178\x02\x02\u01EB\u01ED\x05\u0140\xA1\x02\u01EC\u01EB\x03\x02\x02\x02" +
		"\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EE\u01EF\x05" +
		"\u0138\x9D\x02\u01EF\u01F2\x05\u013E\xA0\x02\u01F0\u01F1\x07\xC7\x02\x02" +
		"\u01F1\u01F3\x05D#\x02\u01F2\u01F0\x03\x02\x02\x02\u01F2\u01F3\x03\x02" +
		"\x02\x02\u01F3\x17\x03\x02\x02\x02\u01F4\u01F5\x07\u018E\x02\x02\u01F5" +
		"\u01F6\x07E\x02\x02\u01F6\u01FC\x05\x1A\x0E\x02\u01F7\u01F8\x07\u01B6" +
		"\x02\x02\u01F8\u01F9\x07E\x02\x02\u01F9\u01FB\x05\x1A\x0E\x02\u01FA\u01F7" +
		"\x03\x02\x02\x02\u01FB\u01FE\x03\x02\x02\x02\u01FC\u01FA\x03\x02\x02\x02" +
		"\u01FC\u01FD\x03\x02\x02\x02\u01FD\x19\x03\x02\x02\x02\u01FE\u01FC\x03" +
		"\x02\x02\x02\u01FF\u0200\x07\u01C8\x02\x02\u0200\x1B\x03\x02\x02\x02\u0201" +
		"\u0202\x07\xC2\x02\x02\u0202\u0204\x07\u0178\x02\x02\u0203\u0205\x05\u0142" +
		"\xA2\x02\u0204\u0203\x03\x02\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205" +
		"\u0206\x03\x02\x02\x02\u0206\u020C\x05\u013A\x9E\x02\u0207\u020D\x05 " +
		"\x11\x02\u0208\u020D\x05\"\x12\x02\u0209\u020D\x05$\x13\x02\u020A\u020D" +
		"\x05&\x14\x02\u020B\u020D\x05(\x15\x02\u020C\u0207\x03\x02\x02\x02\u020C" +
		"\u0208\x03\x02\x02\x02\u020C\u0209\x03\x02\x02\x02\u020C\u020A\x03\x02" +
		"\x02\x02\u020C\u020B\x03\x02\x02\x02\u020D\u02D1\x03\x02\x02\x02\u020E" +
		"\u020F\x07\xC2\x02\x02\u020F\u0211\x07\u0178\x02\x02\u0210\u0212\x05\u0142" +
		"\xA2\x02\u0211\u0210\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212" +
		"\u0213\x03\x02\x02\x02\u0213\u0214\x05\u013A\x9E\x02\u0214\u0215\t\x02" +
		"\x02\x02\u0215\u0216\x07\u01B2\x02\x02\u0216\u0218\x05\xC2b\x02\u0217" +
		"\u0219\x05\x1E\x10\x02\u0218\u0217\x03\x02\x02\x02\u0218\u0219\x03\x02" +
		"\x02\x02\u0219\u0221\x03\x02\x02\x02\u021A\u021B\x07\u01B6\x02\x02\u021B" +
		"\u021D\x05\xC2b\x02\u021C\u021E\x05\x1E\x10\x02\u021D\u021C\x03\x02\x02" +
		"\x02\u021D\u021E\x03\x02\x02\x02\u021E\u0220\x03\x02\x02\x02\u021F\u021A" +
		"\x03\x02\x02\x02\u0220\u0223\x03\x02\x02\x02\u0221\u021F\x03\x02\x02\x02" +
		"\u0221\u0222\x03\x02\x02\x02\u0222\u0226\x03\x02\x02\x02\u0223\u0221\x03" +
		"\x02\x02\x02\u0224\u0225\x07\u01B6\x02\x02\u0225\u0227\x05\xCAf\x02\u0226" +
		"\u0224\x03\x02\x02\x02\u0226\u0227\x03\x02\x02\x02\u0227\u022A\x03\x02" +
		"\x02\x02\u0228\u0229\x07\u01B6\x02\x02\u0229\u022B\x05\xC8e\x02\u022A" +
		"\u0228\x03\x02\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B\u022E\x03\x02" +
		"\x02\x02\u022C\u022D\x07\u01B6\x02\x02\u022D\u022F\x05\xB0Y\x02\u022E" +
		"\u022C\x03\x02\x02\x02\u022E\u022F\x03\x02\x02\x02\u022F\u0230\x03\x02" +
		"\x02\x02\u0230\u0232\x07\u01B3\x02\x02\u0231\u0233\x05\xE0q\x02\u0232" +
		"\u0231\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233\u0235\x03\x02" +
		"\x02\x02\u0234\u0236\x05\xB2Z\x02\u0235\u0234\x03\x02\x02\x02\u0235\u0236" +
		"\x03\x02\x02\x02\u0236\u0238\x03\x02\x02\x02\u0237\u0239\x05\u013E\xA0" +
		"\x02\u0238\u0237\x03\x02\x02\x02\u0238\u0239\x03\x02\x02\x02\u0239\u02D1" +
		"\x03\x02\x02\x02\u023A\u023B\x07\xC2\x02\x02\u023B\u023D\x07\u0178\x02" +
		"\x02\u023C\u023E\x05\u0142\xA2\x02\u023D\u023C\x03\x02\x02\x02\u023D\u023E" +
		"\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02\u023F\u0240\x05\u013A\x9E" +
		"\x02\u0240\u0241\t\x02\x02\x02\u0241\u0243\x05\xC2b\x02\u0242\u0244\x05" +
		"\x1E\x10\x02\u0243\u0242\x03\x02\x02\x02\u0243\u0244\x03\x02\x02\x02\u0244" +
		"\u0246\x03\x02\x02\x02\u0245\u0247\x05\xE0q\x02\u0246\u0245\x03\x02\x02" +
		"\x02\u0246\u0247\x03\x02\x02\x02\u0247\u02D1\x03\x02\x02\x02\u0248\u0249" +
		"\x07\xC2\x02\x02\u0249\u024B\x07\u0178\x02\x02\u024A\u024C\x05\u0142\xA2" +
		"\x02\u024B\u024A\x03\x02\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C\u024D" +
		"\x03\x02\x02\x02\u024D\u024E\x05\u013A\x9E\x02\u024E\u0256\x07\x06\x02" +
		"\x02\u024F\u0250\x07\u0153\x02\x02\u0250\u0251\x05\u0146\xA4\x02\u0251" +
		"\u0252\x07\u0196\x02\x02\u0252\u0253\x05\u0146\xA4\x02\u0253\u0255\x03" +
		"\x02\x02\x02\u0254\u024F\x03\x02\x02\x02\u0255\u0258\x03\x02\x02\x02\u0256" +
		"\u0254\x03\x02\x02\x02\u0256\u0257\x03\x02\x02\x02\u0257\u02D1\x03\x02" +
		"\x02\x02\u0258\u0256\x03\x02\x02\x02\u0259\u025A\x07\xC2\x02\x02\u025A" +
		"\u025C\x07\u0178\x02\x02\u025B\u025D\x05\u0142\xA2\x02\u025C\u025B\x03" +
		"\x02\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D\u025E\x03\x02\x02\x02\u025E" +
		"\u025F\x05\u013A\x9E\x02\u025F\u0260\x07\u0100\x02\x02\u0260\u0261\x05" +
		"\u013C\x9F\x02\u0261\u02D1\x03\x02\x02\x02\u0262\u0263\x07\xC2\x02\x02" +
		"\u0263\u0265\x07\u0178\x02\x02\u0264\u0266\x05\u0142\xA2\x02\u0265\u0264" +
		"\x03\x02\x02\x02\u0265\u0266\x03\x02\x02\x02\u0266\u0267\x03\x02\x02\x02" +
		"\u0267\u0268\x05\u013A\x9E\x02\u0268\u0269\x07\u0100\x02\x02\u0269\u026A" +
		"\x07\u01B2\x02\x02\u026A\u026F\x05\u013C\x9F\x02\u026B\u026C\x07\u01B6" +
		"\x02\x02\u026C\u026E\x05\u013C\x9F\x02\u026D\u026B\x03\x02\x02\x02\u026E" +
		"\u0271\x03\x02\x02\x02\u026F\u026D\x03\x02\x02\x02\u026F\u0270\x03\x02" +
		"\x02\x02\u0270\u0272\x03\x02\x02\x02\u0271\u026F\x03\x02\x02\x02\u0272" +
		"\u0273\x07\u01B3\x02\x02\u0273\u02D1\x03\x02\x02\x02\u0274\u0275\x07\xC2" +
		"\x02\x02\u0275\u0277\x07\u0178\x02\x02\u0276\u0278\x05\u0142\xA2\x02\u0277" +
		"\u0276\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278\u0279\x03\x02" +
		"\x02\x02\u0279\u027A\x05\u013A\x9E\x02\u027A\u027B\x07\u0100\x02\x02\u027B" +
		"\u027C\x07\u015B\x02\x02\u027C\u027D\x07L\x02\x02\u027D\u02D1\x03\x02" +
		"\x02\x02\u027E\u027F\x07\xC2\x02\x02\u027F\u0281\x07\u0178\x02\x02\u0280" +
		"\u0282\x05\u0142\xA2\x02\u0281\u0280\x03\x02\x02\x02\u0281\u0282\x03\x02" +
		"\x02\x02\u0282\u0283\x03\x02\x02\x02\u0283\u0284\x05\u013A\x9E\x02\u0284" +
		"\u0285\x07\u0100\x02\x02\u0285\u0286\x07\u0153\x02\x02\u0286\u028C\x05" +
		"\u0146\xA4\x02\u0287\u0288\x07\u01B6\x02\x02\u0288\u0289\x07\u0153\x02" +
		"\x02\u0289\u028B\x05\u0146\xA4\x02\u028A\u0287\x03\x02\x02\x02\u028B\u028E" +
		"\x03\x02\x02\x02\u028C\u028A\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02" +
		"\u028D\u02D1\x03\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028F\u0290\x07" +
		"\xC2\x02\x02\u0290\u0292\x07\u0178\x02\x02\u0291\u0293\x05\u0142\xA2\x02" +
		"\u0292\u0291\x03\x02\x02\x02\u0292\u0293\x03\x02\x02\x02\u0293\u0294\x03" +
		"\x02\x02\x02\u0294\u0295\x05\u013A\x9E\x02\u0295\u0296\x07\u0100\x02\x02" +
		"\u0296\u0297\x07\xB7\x02\x02\u0297\u02D1\x03\x02\x02\x02\u0298\u0299\x07" +
		"\xC2\x02\x02\u0299\u029B\x07\u0178\x02\x02\u029A\u029C\x05\u0142\xA2\x02" +
		"\u029B\u029A\x03\x02\x02\x02\u029B\u029C\x03\x02\x02\x02\u029C\u029D\x03" +
		"\x02\x02\x02\u029D\u029E\x05\u013A\x9E\x02\u029E\u029F\x07\u0100\x02\x02" +
		"\u029F\u02A0\x07\u01A4\x02\x02\u02A0\u02D1\x03\x02\x02\x02\u02A1\u02A2" +
		"\x07\xC2\x02\x02\u02A2\u02A4\x07\u0178\x02\x02\u02A3\u02A5\x05\u0142\xA2" +
		"\x02\u02A4\u02A3\x03\x02\x02\x02\u02A4\u02A5\x03\x02\x02\x02\u02A5\u02A6" +
		"\x03\x02\x02\x02\u02A6\u02A7\x05\u013A\x9E\x02\u02A7\u02A8\x07\x80\x02" +
		"\x02\u02A8\u02A9\x05\u013C\x9F\x02\u02A9\u02AA\x07\u0182\x02\x02\u02AA" +
		"\u02AB\x05\u013C\x9F\x02\u02AB\u02D1\x03\x02\x02\x02\u02AC\u02AD\x07\xC2" +
		"\x02\x02\u02AD\u02AF\x07\u0178\x02\x02\u02AE\u02B0\x05\u0142\xA2\x02\u02AF" +
		"\u02AE\x03\x02\x02\x02\u02AF\u02B0\x03\x02\x02\x02\u02B0\u02B1\x03\x02" +
		"\x02\x02\u02B1\u02B2\x05\u013A\x9E\x02\u02B2\u02B3\x07\x80\x02\x02\u02B3" +
		"\u02B4\x05\u013A\x9E\x02\u02B4\u02D1\x03\x02\x02\x02\u02B5\u02B6\x07\xC2" +
		"\x02\x02\u02B6\u02B8\x07\u0178\x02\x02\u02B7\u02B9\x05\u0142\xA2\x02\u02B8" +
		"\u02B7\x03\x02\x02\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02BA\x03\x02" +
		"\x02\x02\u02BA\u02BB\x05\u013A\x9E\x02\u02BB\u02BC\x07\u016A\x02\x02\u02BC" +
		"\u02BD\x05\xB2Z\x02\u02BD\u02D1\x03\x02\x02\x02\u02BE\u02BF\x07\xC2\x02" +
		"\x02\u02BF\u02C1\x07\u0178\x02\x02\u02C0\u02C2\x05\u0142\xA2\x02\u02C1" +
		"\u02C0\x03\x02\x02\x02\u02C1\u02C2\x03\x02\x02\x02\u02C2\u02C3\x03\x02" +
		"\x02\x02\u02C3\u02C4\x05\u013A\x9E\x02\u02C4\u02C5\x07\u015F\x02\x02\u02C5" +
		"\u02C6\x05\xB4[\x02\u02C6\u02D1\x03\x02\x02\x02\u02C7\u02C8\x07\xC2\x02" +
		"\x02\u02C8\u02CA\x07\u0178\x02\x02\u02C9\u02CB\x05\u0142\xA2\x02\u02CA" +
		"\u02C9\x03\x02\x02\x02\u02CA\u02CB\x03\x02\x02\x02\u02CB\u02CC\x03\x02" +
		"\x02\x02\u02CC\u02CD\x05\u013A\x9E\x02\u02CD\u02CE\x07\x06\x02\x02\u02CE" +
		"\u02CF\x05\xBE`\x02\u02CF\u02D1\x03\x02\x02\x02\u02D0\u0201\x03\x02\x02" +
		"\x02\u02D0\u020E\x03\x02\x02\x02\u02D0\u023A\x03\x02\x02\x02\u02D0\u0248" +
		"\x03\x02\x02\x02\u02D0\u0259\x03\x02\x02\x02\u02D0\u0262\x03\x02\x02\x02" +
		"\u02D0\u0274\x03\x02\x02\x02\u02D0\u027E\x03\x02\x02\x02\u02D0\u028F\x03" +
		"\x02\x02\x02\u02D0\u0298\x03\x02\x02\x02\u02D0\u02A1\x03\x02\x02\x02\u02D0" +
		"\u02AC\x03\x02\x02\x02\u02D0\u02B5\x03\x02\x02\x02\u02D0\u02BE\x03\x02" +
		"\x02\x02\u02D0\u02C7\x03\x02\x02\x02\u02D1\x1D\x03\x02\x02\x02\u02D2\u02D6" +
		"\t\x03\x02\x02\u02D3\u02D4\t\x04\x02\x02\u02D4\u02D6\x05\u013C\x9F\x02" +
		"\u02D5\u02D2\x03\x02\x02\x02\u02D5\u02D3\x03\x02\x02\x02\u02D6\x1F\x03" +
		"\x02\x02\x02\u02D7\u02D9\x07\x80\x02\x02\u02D8\u02DA\x05\u013C\x9F\x02" +
		"\u02D9\u02D8\x03\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DA\u02DB\x03" +
		"\x02\x02\x02\u02DB\u02DC\x07\u0182\x02\x02\u02DC\u02DD\x05\u013C\x9F\x02" +
		"\u02DD!\x03\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\x02\u02DE\u02DF\x07\u016A\x02\x02\u02DF\u02E0\x05\u0146\xA4\x02\u02E0" +
		"#\x03\x02\x02\x02\u02E1\u02E2\x07\x06\x02\x02\u02E2\u02E3\x07\xE6\x02" +
		"\x02\u02E3\u02E4\x05\xCCg\x02\u02E4\u02E5\x07\u015B\x02\x02\u02E5\u02E6" +
		"\x07L\x02\x02\u02E6\u02E8\x05\xEAv\x02\u02E7\u02E9\x05*\x16\x02\u02E8" +
		"\u02E7\x03\x02\x02\x02\u02E8\u02E9\x03\x02\x02\x02\u02E9%\x03\x02\x02" +
		"\x02\u02EA\u02EB\x07\u0100\x02\x02\u02EB\u02EC\x07\xE6\x02\x02\u02EC\u02ED" +
		"\x05\xCCg\x02\u02ED\'\x03\x02\x02\x02\u02EE\u02EF\x07\x06\x02\x02\u02EF" +
		"\u02F0\x07\u0187\x02\x02\u02F0\u02F1\x05\xEAv\x02\u02F1)\x03\x02\x02\x02" +
		"\u02F2\u02F3\x07\u0145\x02\x02\u02F3\u02F4\x07%\x02\x02\u02F4+\x03\x02" +
		"\x02\x02\u02F5\u02F6\x07\xC2\x02\x02\u02F6\u02F7\x07\xB4\x02\x02\u02F7" +
		"\u02FB\x05\u013C\x9F\x02\u02F8\u02FC\x05 \x11\x02\u02F9\u02FA\x07\xC7" +
		"\x02\x02\u02FA\u02FC\x05D#\x02\u02FB\u02F8\x03\x02\x02\x02\u02FB\u02F9" +
		"\x03\x02\x02\x02\u02FC-\x03\x02\x02\x02\u02FD\u02FE\x07\xC2\x02\x02\u02FE" +
		"\u02FF\x07\x0E\x02\x02\u02FF\u030C\x05\u0132\x9A\x02\u0300\u0301\x07\u016A" +
		"\x02\x02\u0301\u0302\x07\u01B2\x02\x02\u0302\u0303\x05\u0148\xA5\x02\u0303" +
		"\u0304\x07\u01B3\x02\x02\u0304\u030D\x03\x02\x02\x02\u0305\u0306\x07\u015F" +
		"\x02\x02\u0306\u0307\x07\u01B2\x02\x02\u0307\u0308\x05\u014A\xA6\x02\u0308" +
		"\u0309\x07\u01B3\x02\x02\u0309\u030D\x03\x02\x02\x02\u030A\u030B\x07\x14" +
		"\x02\x02\u030B\u030D\x05\u014A\xA6\x02\u030C\u0300\x03\x02\x02\x02\u030C" +
		"\u0305\x03\x02\x02\x02\u030C\u030A\x03\x02\x02\x02\u030D/\x03\x02\x02" +
		"\x02\u030E\u030F\x07\xC2\x02\x02\u030F\u0310\x07\x1C\x02\x02\u0310\u0311" +
		"\x05\u0134\x9B\x02\u0311\u0312\x05\"\x12\x02\u03121\x03\x02\x02\x02\u0313" +
		"\u0317\x07\xC2\x02\x02\u0314\u0318\x07\xA2\x02\x02\u0315\u0316\x07\xA2" +
		"\x02\x02\u0316\u0318\x07\u0175\x02\x02\u0317\u0314\x03\x02\x02\x02\u0317" +
		"\u0315\x03\x02\x02\x02\u0317\u0318\x03\x02\x02\x02\u0318\u0319\x03\x02" +
		"\x02\x02\u0319\u031B\x07\u0115\x02\x02\u031A\u031C\x05\u0142\xA2\x02\u031B" +
		"\u031A\x03\x02\x02\x02\u031B\u031C\x03\x02\x02\x02\u031C\u031D\x03\x02" +
		"\x02\x02\u031D\u031E\x05\u013C\x9F\x02\u031E\u031F\x07\xC7\x02\x02\u031F" +
		"\u0322\x05\u0128\x95\x02\u0320\u0321\x07\u012B\x02\x02\u0321\u0323\t\x05" +
		"\x02\x02\u0322\u0320\x03\x02\x02\x02\u0322\u0323\x03\x02\x02\x02\u0323" +
		"3\x03\x02\x02\x02\u0324\u0325\x07\u0100\x02\x02\u0325\u0327\x07\x0E\x02" +
		"\x02\u0326\u0328\x05\u0142\xA2\x02\u0327\u0326\x03\x02\x02\x02\u0327\u0328" +
		"\x03\x02\x02\x02\u0328\u0329\x03\x02\x02\x02\u0329\u032A\x05\u0132\x9A" +
		"\x02\u032A5\x03\x02\x02\x02\u032B\u032D\x07\u0100\x02\x02\u032C\u032E" +
		"\x07\xA2\x02\x02\u032D\u032C\x03\x02\x02\x02\u032D\u032E\x03\x02\x02\x02" +
		"\u032E\u032F\x03\x02\x02\x02\u032F\u0331\x07\u0178\x02\x02\u0330\u0332" +
		"\x05\u0142\xA2\x02\u0331\u0330\x03\x02\x02\x02\u0331\u0332\x03\x02\x02" +
		"\x02\u0332\u0333\x03\x02\x02\x02\u0333\u0334\x05\u013A\x9E\x02\u03347" +
		"\x03\x02\x02\x02\u0335\u0336\x07\u0100\x02\x02\u0336\u0338\x07\x1C\x02" +
		"\x02\u0337\u0339\x05\u0142\xA2\x02\u0338\u0337\x03\x02\x02\x02\u0338\u0339" +
		"\x03\x02\x02\x02\u0339\u033A\x03\x02\x02\x02\u033A\u033C\x05\u0134\x9B" +
		"\x02\u033B\u033D\t\x06\x02\x02\u033C\u033B\x03\x02\x02\x02\u033C\u033D" +
		"\x03\x02\x02\x02\u033D9\x03\x02\x02\x02\u033E\u0340\x07\u0100\x02\x02" +
		"\u033F\u0341\x07\xA2\x02\x02\u0340\u033F\x03\x02\x02\x02\u0340\u0341\x03" +
		"\x02\x02\x02\u0341\u0342\x03\x02\x02\x02\u0342\u0344\x07\xB4\x02\x02\u0343" +
		"\u0345\x05\u0142\xA2\x02\u0344\u0343\x03\x02\x02\x02\u0344\u0345\x03\x02" +
		"\x02\x02\u0345\u0346\x03\x02\x02\x02\u0346\u0347\x05\u013C\x9F\x02\u0347" +
		";\x03\x02\x02\x02\u0348\u034C\x07\u0100\x02\x02\u0349\u034D\x07\xA2\x02" +
		"\x02\u034A\u034B\x07\xA2\x02\x02\u034B\u034D\x07\u0175\x02\x02\u034C\u0349" +
		"\x03\x02\x02\x02\u034C\u034A\x03\x02\x02\x02\u034C\u034D\x03\x02\x02\x02" +
		"\u034D\u034E\x03\x02\x02\x02\u034E\u0350\x07\u0115\x02\x02\u034F\u0351" +
		"\x05\u0142\xA2\x02\u0350\u034F\x03\x02\x02\x02\u0350\u0351\x03\x02\x02" +
		"\x02\u0351\u0352\x03\x02\x02\x02\u0352\u0353\x05\u0104\x83\x02\u0353=" +
		"\x03\x02\x02\x02\u0354\u0356\x07\u0108\x02\x02\u0355\u0354\x03\x02\x02" +
		"\x02\u0355\u0356\x03\x02\x02\x02\u0356\u0357\x03\x02\x02\x02\u0357\u0358" +
		"\x05@!\x02\u0358?\x03\x02\x02\x02\u0359\u035F\x07\u0122\x02\x02\u035A" +
		"\u0360\x07\u0127\x02\x02\u035B\u035D\x07d\x02\x02\u035C\u035E\x07\u0178" +
		"\x02\x02\u035D\u035C\x03\x02\x02\x02\u035D\u035E\x03\x02\x02\x02\u035E" +
		"\u0360\x03\x02\x02\x02\u035F\u035A\x03\x02\x02\x02\u035F\u035B\x03\x02" +
		"\x02\x02\u0360\u0361\x03\x02\x02\x02\u0361\u036A\x05\u013A\x9E\x02\u0362" +
		"\u0364\x05B\"\x02\u0363\u0362\x03\x02\x02\x02\u0363\u0364\x03\x02\x02" +
		"\x02\u0364\u0366\x03\x02\x02\x02\u0365\u0367\x05\xEAv\x02\u0366\u0365" +
		"\x03\x02\x02\x02\u0366\u0367\x03\x02\x02\x02\u0367\u0368\x03\x02\x02\x02" +
		"\u0368\u036B\x05D#\x02\u0369\u036B\x05\xCEh\x02\u036A\u0363\x03\x02\x02" +
		"\x02\u036A\u0369\x03\x02\x02\x02\u036BA\x03\x02\x02\x02\u036C\u036D\x07" +
		"\u0153\x02\x02\u036D\u036E\x05\u0146\xA4\x02\u036EC\x03\x02\x02\x02\u036F" +
		"\u0370\b#\x01\x02\u0370\u0380\x05F$\x02\u0371\u0372\x07\u01B2\x02\x02" +
		"\u0372\u0373\x05D#\x02\u0373\u0374\x07\u01B3\x02\x02\u0374\u0380\x03\x02" +
		"\x02\x02\u0375\u0378\x05N(\x02\u0376\u0378\x05\u0166\xB4\x02\u0377\u0375" +
		"\x03\x02\x02\x02\u0377\u0376\x03\x02\x02\x02\u0378\u037A\x03\x02\x02\x02" +
		"\u0379\u037B\x05\x92J\x02\u037A\u0379\x03\x02\x02\x02\u037A\u037B\x03" +
		"\x02\x02\x02\u037B\u037D\x03\x02\x02\x02\u037C\u037E\x05\x96L\x02\u037D" +
		"\u037C\x03\x02\x02\x02\u037D\u037E\x03\x02\x02\x02\u037E\u0380\x03\x02" +
		"\x02\x02\u037F\u036F\x03\x02\x02\x02\u037F\u0371\x03\x02\x02\x02\u037F" +
		"\u0377\x03\x02\x02\x02\u0380\u038F\x03\x02\x02\x02\u0381\u0382\f\x04\x02" +
		"\x02\u0382\u0384\t\x07\x02\x02\u0383\u0385\x07\xC0\x02\x02\u0384\u0383" +
		"\x03\x02\x02\x02\u0384\u0385\x03\x02\x02\x02\u0385\u0386\x03\x02\x02\x02" +
		"\u0386\u0388\x05D#\x02\u0387\u0389\x05\x92J\x02\u0388\u0387\x03\x02\x02" +
		"\x02\u0388\u0389\x03\x02\x02\x02\u0389\u038B\x03\x02\x02\x02\u038A\u038C" +
		"\x05\x96L\x02\u038B\u038A\x03\x02\x02\x02\u038B\u038C\x03\x02\x02\x02" +
		"\u038C\u038E\x03\x02\x02\x02\u038D\u0381\x03\x02\x02\x02\u038E\u0391\x03" +
		"\x02\x02\x02\u038F\u038D\x03\x02\x02\x02\u038F\u0390\x03\x02\x02\x02\u0390" +
		"E\x03\x02\x02\x02\u0391\u038F\x03\x02\x02\x02\u0392\u0393\x07\u0190\x02" +
		"\x02\u0393\u0398\x05\xEEx\x02\u0394\u0395\x07\u01B6\x02\x02\u0395\u0397" +
		"\x05\xEEx\x02\u0396\u0394\x03\x02\x02\x02\u0397\u039A\x03\x02\x02\x02" +
		"\u0398\u0396\x03\x02\x02\x02\u0398\u0399\x03\x02\x02\x02\u0399G\x03\x02" +
		"\x02\x02\u039A\u0398\x03\x02\x02\x02\u039B\u03A7\x05J&\x02\u039C\u039D" +
		"\x07\u01B2\x02\x02\u039D\u03A2\x05\xE8u\x02\u039E\u039F\x07\u01B6\x02" +
		"\x02\u039F\u03A1\x05\xE8u\x02\u03A0\u039E\x03\x02\x02\x02\u03A1\u03A4" +
		"\x03\x02\x02\x02\u03A2\u03A0\x03\x02\x02\x02\u03A2\u03A3\x03\x02\x02\x02" +
		"\u03A3\u03A5\x03\x02\x02\x02\u03A4\u03A2\x03\x02\x02\x02\u03A5\u03A6\x07" +
		"\u01B3\x02\x02\u03A6\u03A8\x03\x02\x02\x02\u03A7\u039C\x03\x02\x02\x02" +
		"\u03A7\u03A8\x03\x02\x02\x02\u03A8\u03A9\x03\x02\x02\x02\u03A9\u03AA\x07" +
		"\xC7\x02\x02\u03AA\u03AB\x07\u01B2\x02\x02\u03AB\u03AC\x05D#\x02\u03AC" +
		"\u03AD\x07\u01B3\x02\x02\u03ADI\x03\x02\x02\x02\u03AE\u03AF\x05\u0128" +
		"\x95\x02\u03AFK\x03\x02\x02\x02\u03B0\u03B1\x07\u0118\x02\x02\u03B1\u03B2" +
		"\x07\xD3\x02\x02\u03B2\u03B7\x05|?\x02\u03B3\u03B4\x07\u01B6\x02\x02\u03B4" +
		"\u03B6\x05|?\x02\u03B5\u03B3\x03\x02\x02\x02\u03B6\u03B9\x03\x02\x02\x02" +
		"\u03B7\u03B5\x03\x02\x02\x02\u03B7\u03B8\x03\x02\x02\x02\u03B8M\x03\x02" +
		"\x02\x02\u03B9\u03B7\x03\x02\x02\x02\u03BA\u03BC\x07\u0169\x02\x02\u03BB" +
		"\u03BD\x05\u015A\xAE\x02\u03BC\u03BB\x03\x02\x02\x02\u03BC\u03BD\x03\x02" +
		"\x02\x02\u03BD\u03C7\x03\x02\x02\x02\u03BE\u03C8\x07\u01BE\x02\x02\u03BF" +
		"\u03C4\x05P)\x02\u03C0\u03C1\x07\u01B6\x02\x02\u03C1\u03C3\x05P)\x02\u03C2" +
		"\u03C0\x03\x02\x02\x02\u03C3\u03C6\x03\x02\x02\x02\u03C4\u03C2\x03\x02" +
		"\x02\x02\u03C4\u03C5\x03\x02\x02\x02\u03C5\u03C8\x03\x02\x02\x02\u03C6" +
		"\u03C4\x03\x02\x02\x02\u03C7\u03BE\x03\x02\x02\x02\u03C7\u03BF\x03\x02" +
		"\x02\x02\u03C8O\x03\x02\x02\x02\u03C9\u03D2\x05R*\x02\u03CA\u03CF\x05" +
		"\xEEx\x02\u03CB\u03CD\x07\xC7\x02\x02\u03CC\u03CB\x03\x02\x02\x02\u03CC" +
		"\u03CD\x03\x02\x02\x02\u03CD\u03CE\x03\x02\x02\x02\u03CE\u03D0\x05\xEE" +
		"x\x02\u03CF\u03CC\x03\x02\x02\x02\u03CF\u03D0\x03\x02\x02\x02\u03D0\u03D2" +
		"\x03\x02\x02\x02\u03D1\u03C9\x03\x02\x02\x02\u03D1\u03CA\x03\x02\x02\x02" +
		"\u03D2Q\x03\x02\x02\x02\u03D3\u03D4\x05\xF8}\x02\u03D4\u03D5\x07\u0151" +
		"\x02\x02\u03D5\u03D7\x05\x8EH\x02\u03D6\u03D8\x07\xC7\x02\x02\u03D7\u03D6" +
		"\x03\x02\x02\x02\u03D7\u03D8\x03\x02\x02\x02\u03D8\u03D9\x03\x02\x02\x02" +
		"\u03D9\u03DA\x05\u0128\x95\x02\u03DA\u03E4\x03\x02\x02\x02\u03DB\u03DC" +
		"\x05\xF8}\x02\u03DC\u03DD\x07\u0151\x02\x02\u03DD\u03DF\x05\u0120\x91" +
		"\x02\u03DE\u03E0\x07\xC7\x02\x02\u03DF\u03DE\x03\x02\x02\x02\u03DF\u03E0" +
		"\x03\x02\x02\x02\u03E0\u03E1\x03\x02\x02\x02\u03E1\u03E2\x05\u0128\x95" +
		"\x02\u03E2\u03E4\x03\x02\x02\x02\u03E3\u03D3\x03\x02\x02\x02\u03E3\u03DB" +
		"\x03\x02\x02\x02\u03E4S\x03\x02\x02\x02\u03E5\u03E6\x07\u0112\x02\x02" +
		"\u03E6\u03E7\x05V,\x02\u03E7U\x03\x02\x02\x02\u03E8\u03E9\b,\x01\x02\u03E9" +
		"\u03EE\x05Z.\x02\u03EA\u03EB\x07\u01B6\x02\x02\u03EB\u03ED\x05Z.\x02\u03EC" +
		"\u03EA\x03\x02\x02\x02\u03ED\u03F0\x03\x02\x02\x02\u03EE\u03EC\x03\x02" +
		"\x02\x02\u03EE\u03EF\x03\x02\x02\x02\u03EF\u03F4\x03\x02\x02\x02\u03F0" +
		"\u03EE\x03\x02\x02\x02\u03F1\u03F4\x05b2\x02\u03F2\u03F4\x05d3\x02\u03F3" +
		"\u03E8\x03\x02\x02\x02\u03F3\u03F1\x03\x02\x02\x02\u03F3\u03F2\x03\x02" +
		"\x02\x02\u03F4\u0414\x03\x02\x02\x02\u03F5\u03F6\f\x05\x02\x02\u03F6\u03F7" +
		"\x07\xEB\x02\x02\u03F7\u03F8\x07\u0129\x02\x02\u03F8\u0413\x05V,\x06\u03F9" +
		"\u03FB\f\x06\x02\x02\u03FA\u03FC\x07\u0141\x02\x02\u03FB\u03FA\x03\x02" +
		"\x02\x02\u03FB\u03FC\x03\x02\x02\x02\u03FC\u03FE\x03\x02\x02\x02\u03FD" +
		"\u03FF\x05\u0168\xB5\x02\u03FE\u03FD\x03\x02\x02\x02\u03FE\u03FF\x03\x02" +
		"\x02\x02\u03FF\u0401\x03\x02\x02\x02\u0400\u0402\x07\u0150\x02\x02\u0401" +
		"\u0400\x03\x02\x02\x02\u0401\u0402\x03\x02\x02\x02\u0402\u0404\x03\x02" +
		"\x02\x02\u0403\u0405\x07\x8F\x02\x02\u0404\u0403\x03\x02\x02\x02\u0404" +
		"\u0405\x03\x02\x02\x02\u0405\u0406\x03\x02\x02\x02\u0406\u0407\x07\u0129" +
		"\x02\x02\u0407\u0409\x05V,\x02\u0408\u040A\x05x=\x02\u0409\u0408\x03\x02" +
		"\x02\x02\u0409\u040A\x03\x02\x02\x02\u040A\u040F\x03\x02\x02\x02\u040B" +
		"\u040C\x07\u01B6\x02\x02\u040C\u040E\x05Z.\x02\u040D\u040B\x03\x02\x02" +
		"\x02\u040E\u0411\x03\x02\x02\x02\u040F\u040D\x03\x02\x02\x02\u040F\u0410" +
		"\x03\x02\x02\x02\u0410\u0413\x03\x02\x02\x02\u0411\u040F\x03\x02\x02\x02" +
		"\u0412\u03F5\x03\x02\x02\x02\u0412\u03F9\x03\x02\x02\x02\u0413\u0416\x03" +
		"\x02\x02\x02\u0414\u0412\x03\x02\x02\x02\u0414\u0415\x03\x02\x02\x02\u0415" +
		"W\x03\x02\x02\x02\u0416\u0414\x03\x02\x02\x02\u0417\u0418\t\b\x02\x02" +
		"\u0418Y\x03\x02\x02\x02\u0419\u041B\x05\\/\x02\u041A\u041C\x05\u011E\x90" +
		"\x02\u041B\u041A\x03\x02\x02\x02\u041B\u041C\x03\x02\x02\x02\u041C[\x03" +
		"\x02\x02\x02\u041D\u041F\x07\u0178\x02\x02\u041E\u041D\x03\x02\x02\x02" +
		"\u041E\u041F\x03\x02\x02\x02\u041F\u0420\x03\x02\x02\x02\u0420\u0422\x05" +
		"\u013A\x9E\x02\u0421\u0423\x05^0\x02\u0422\u0421\x03\x02\x02\x02\u0422" +
		"\u0423\x03\x02\x02\x02\u0423\u0426\x03\x02\x02\x02\u0424\u0425\x07\xC7" +
		"\x02\x02\u0425\u0427\x05\u010C\x87\x02\u0426\u0424\x03\x02\x02\x02\u0426" +
		"\u0427\x03\x02\x02\x02\u0427\u0461\x03\x02\x02\x02\u0428\u0429\x07\u012C" +
		"\x02\x02\u0429\u042A\x07\u0178\x02\x02\u042A\u042B\x07\u01B2\x02\x02\u042B" +
		"\u042C\x05\u0104\x83\x02\u042C\u042D\x07\u01B2\x02\x02\u042D\u0432\x05" +
		"\u0106\x84\x02\u042E\u042F\x07\u01B6\x02\x02\u042F\u0431\x05\u0106\x84" +
		"\x02\u0430\u042E\x03\x02\x02\x02\u0431\u0434\x03\x02\x02\x02\u0432\u0430" +
		"\x03\x02\x02\x02\u0432\u0433\x03\x02\x02\x02\u0433\u0435\x03\x02\x02\x02" +
		"\u0434\u0432\x03\x02\x02\x02\u0435\u0436\x07\u01B3\x02\x02\u0436\u0437" +
		"\x07\u01B3\x02\x02\u0437\u0461\x03\x02\x02\x02\u0438\u043A\x07\u012C\x02" +
		"\x02\u0439\u0438\x03\x02\x02\x02\u0439\u043A\x03\x02\x02\x02\u043A\u043B" +
		"\x03\x02\x02\x02\u043B\u043C\x07\u01B2\x02\x02\u043C\u043D\x05D#\x02\u043D" +
		"\u043E\x07\u01B3\x02\x02\u043E\u0461\x03\x02\x02\x02\u043F\u0440\x07\u012C" +
		"\x02\x02\u0440\u0441\x07\u0178\x02\x02\u0441\u0442\x07\u01B2\x02\x02\u0442" +
		"\u0443\x05\u0104\x83\x02\u0443\u0444\x07\u01B2\x02\x02\u0444\u0449\x05" +
		"\u0106\x84\x02\u0445\u0446\x07\u01B6\x02\x02\u0446\u0448\x05\u0106\x84" +
		"\x02\u0447\u0445\x03\x02\x02\x02\u0448\u044B\x03\x02\x02\x02\u0449\u0447" +
		"\x03\x02\x02\x02\u0449\u044A\x03\x02\x02\x02\u044A\u044C\x03\x02\x02\x02" +
		"\u044B\u0449\x03\x02\x02\x02\u044C\u044D\x07\u01B3\x02\x02\u044D\u044E" +
		"\x07\u01B3\x02\x02\u044E\u044F\x07\xC7\x02\x02\u044F\u0450\x05\u011E\x90" +
		"\x02\u0450\u0451\x07\u01B2\x02\x02\u0451\u0456\x05P)\x02\u0452\u0453\x07" +
		"\u01B6\x02\x02\u0453\u0455\x05P)\x02\u0454\u0452\x03\x02\x02\x02\u0455" +
		"\u0458\x03\x02\x02\x02\u0456\u0454\x03\x02\x02\x02\u0456\u0457\x03\x02" +
		"\x02\x02\u0457\u0459\x03\x02\x02\x02\u0458\u0456\x03\x02\x02\x02\u0459" +
		"\u045A\x07\u01B3\x02\x02\u045A\u0461\x03\x02\x02\x02\u045B\u045C\x07\u0189" +
		"\x02\x02\u045C\u045D\x07\u01B2\x02\x02\u045D\u045E\x05\xEEx\x02\u045E" +
		"\u045F\x07\u01B3\x02\x02\u045F\u0461\x03\x02\x02\x02\u0460\u041E\x03\x02" +
		"\x02\x02\u0460\u0428\x03\x02\x02\x02\u0460\u0439\x03\x02\x02\x02\u0460" +
		"\u043F\x03\x02\x02\x02\u0460\u045B\x03\x02\x02\x02\u0461]\x03\x02\x02" +
		"\x02\u0462\u0463\x07\u0111\x02\x02\u0463\u0464\x07\u0176\x02\x02\u0464" +
		"\u0465\x07\xC7\x02\x02\u0465\u0466\x07\u0149\x02\x02\u0466\u046B\x05`" +
		"1\x02\u0467\u0468\x07\xC7\x02\x02\u0468\u0469\x07\u0149\x02\x02\u0469" +
		"\u046B\x05`1\x02\u046A\u0462\x03\x02\x02\x02\u046A\u0467\x03\x02\x02\x02" +
		"\u046B_\x03\x02\x02\x02\u046C\u046D\x05\xEEx\x02\u046Da\x03\x02\x02\x02" +
		"\u046E\u046F\x07\u01B2\x02\x02\u046F\u0470\x05\xCEh\x02\u0470\u0471\x07" +
		"\u01B3\x02\x02\u0471\u0472\x05\u011E\x90\x02\u0472c\x03\x02\x02\x02\u0473" +
		"\u0474\x07\u0178\x02\x02\u0474\u0475\x07\u01B2\x02\x02\u0475\u0476\x05" +
		"f4\x02\u0476\u0477\x07\u01B3\x02\x02\u0477e\x03\x02\x02\x02\u0478\u047D" +
		"\x05h5\x02\u0479\u047D\x05j6\x02\u047A\u047D\x05l7\x02\u047B\u047D\x05" +
		"n8\x02\u047C\u0478\x03\x02\x02\x02\u047C\u0479\x03\x02\x02\x02\u047C\u047A" +
		"\x03\x02\x02\x02\u047C\u047B\x03\x02\x02\x02\u047Dg\x03\x02\x02\x02\u047E" +
		"\u047F\x07\xAA\x02\x02\u047F\u0484\x07\u01B2\x02\x02\u0480\u0485\x07\u0178" +
		"\x02\x02\u0481\u0482\x07\x1B\x02\x02\u0482\u0483\x07\u01C7\x02\x02\u0483" +
		"\u0485\x07\u0178\x02\x02\u0484\u0480\x03\x02\x02\x02\u0484\u0481\x03\x02" +
		"\x02\x02\u0485\u0486\x03\x02\x02\x02\u0486\u0487\x05\u013C\x9F\x02\u0487" +
		"\u048A\x07\u01B6\x02\x02\u0488\u0489\x07\xA3\x02\x02\u0489\u048B\x07\u01C7" +
		"\x02\x02\u048A\u0488\x03\x02\x02\x02\u048A\u048B\x03\x02\x02\x02\u048B" +
		"\u048C\x03\x02\x02\x02\u048C\u048D\x05v<\x02\u048D\u048E\x03\x02\x02\x02" +
		"\u048E\u0491\x07\u01B6\x02\x02\u048F\u0490\x07\x95\x02\x02\u0490\u0492" +
		"\x07\u01C7\x02\x02\u0491\u048F\x03\x02\x02\x02\u0491\u0492\x03\x02\x02" +
		"\x02\u0492\u0493\x03\x02\x02\x02\u0493\u0494\x05\u0110\x89\x02\u0494\u049D" +
		"\x03\x02\x02\x02\u0495\u049A\x07\u01B6\x02\x02\u0496\u0497\x07\u01BB\x02" +
		"\x02\u0497\u0498\x07\u014A\x02\x02\u0498\u0499\x07\u01BB\x02\x02\u0499" +
		"\u049B\x07\u01C7\x02\x02\u049A\u0496\x03\x02\x02\x02\u049A\u049B\x03\x02" +
		"\x02\x02\u049B\u049C\x03\x02\x02\x02\u049C\u049E\x05\u0110\x89\x02\u049D" +
		"\u0495\x03\x02\x02\x02\u049D\u049E\x03\x02\x02\x02\u049E\u049F\x03\x02" +
		"\x02\x02\u049F\u04A0\x07\u01B3\x02\x02\u04A0i\x03\x02\x02\x02\u04A1\u04A2" +
		"\x07>\x02\x02\u04A2\u04A7\x07\u01B2\x02\x02\u04A3\u04A8\x07\u0178\x02" +
		"\x02\u04A4\u04A5\x07\x1B\x02\x02\u04A5\u04A6\x07\u01C7\x02\x02\u04A6\u04A8" +
		"\x07\u0178\x02\x02\u04A7\u04A3\x03\x02\x02\x02\u04A7\u04A4\x03\x02\x02" +
		"\x02\u04A8\u04A9\x03\x02\x02\x02\u04A9\u04AA\x05\u013C\x9F\x02\u04AA\u04AD" +
		"\x07\u01B6\x02\x02\u04AB\u04AC\x07\xA3\x02\x02\u04AC\u04AE\x07\u01C7\x02" +
		"\x02\u04AD\u04AB\x03\x02\x02\x02\u04AD\u04AE\x03\x02\x02\x02\u04AE\u04AF" +
		"\x03\x02\x02\x02\u04AF\u04B0\x05v<\x02\u04B0\u04B7\x03\x02\x02\x02\u04B1" +
		"\u04B4\x07\u01B6\x02\x02\u04B2\u04B3\x07\x96\x02\x02\u04B3\u04B5\x07\u01C7" +
		"\x02\x02\u04B4\u04B2\x03\x02\x02\x02\u04B4\u04B5\x03\x02\x02\x02\u04B5" +
		"\u04B6\x03\x02\x02\x02\u04B6\u04B8\x05\u0110\x89\x02\u04B7\u04B1\x03\x02" +
		"\x02\x02\u04B7\u04B8\x03\x02\x02\x02\u04B8\u04B9\x03\x02\x02\x02\u04B9" +
		"\u04BC\x07\u01B6\x02\x02\u04BA\u04BB\x07\x95\x02\x02\u04BB\u04BD\x07\u01C7" +
		"\x02\x02\u04BC\u04BA\x03\x02\x02\x02\u04BC\u04BD\x03\x02\x02\x02\u04BD" +
		"\u04BE\x03\x02\x02\x02\u04BE\u04BF\x05\u0110\x89\x02\u04BF\u04C8\x03\x02" +
		"\x02\x02\u04C0\u04C5\x07\u01B6\x02\x02\u04C1\u04C2\x07\u01BB\x02\x02\u04C2" +
		"\u04C3\x07\u014A\x02\x02\u04C3\u04C4\x07\u01BB\x02\x02\u04C4\u04C6\x07" +
		"\u01C7\x02\x02\u04C5\u04C1\x03\x02\x02\x02\u04C5\u04C6\x03\x02\x02\x02" +
		"\u04C6\u04C7\x03\x02\x02\x02\u04C7\u04C9\x05\u0110\x89\x02\u04C8\u04C0" +
		"\x03\x02\x02\x02\u04C8\u04C9\x03\x02\x02\x02\u04C9\u04CA\x03\x02\x02\x02" +
		"\u04CA\u04CB\x07\u01B3\x02\x02\u04CBk\x03\x02\x02\x02\u04CC\u04CD\x07" +
		"\x1A\x02\x02\u04CD\u04D2\x07\u01B2\x02\x02\u04CE\u04D3\x07\u0178\x02\x02" +
		"\u04CF\u04D0\x07\x1B\x02\x02\u04D0\u04D1\x07\u01C7\x02\x02\u04D1\u04D3" +
		"\x07\u0178\x02\x02\u04D2\u04CE\x03\x02\x02\x02\u04D2\u04CF\x03\x02\x02" +
		"\x02\u04D3\u04D4\x03\x02\x02\x02\u04D4\u04D5\x05\u013C\x9F\x02\u04D5\u04D8" +
		"\x07\u01B6\x02\x02\u04D6\u04D7\x07\xA3\x02\x02\u04D7\u04D9\x07\u01C7\x02" +
		"\x02\u04D8\u04D6\x03\x02\x02\x02\u04D8\u04D9\x03\x02\x02\x02\u04D9\u04DA" +
		"\x03\x02\x02\x02\u04DA\u04DB\x05v<\x02\u04DB\u04E2\x03\x02\x02\x02\u04DC" +
		"\u04DF\x07\u01B6\x02\x02\u04DD\u04DE\x07\x9C\x02\x02\u04DE\u04E0\x07\u01C7" +
		"\x02\x02\u04DF\u04DD\x03\x02\x02\x02\u04DF\u04E0\x03\x02\x02\x02\u04E0" +
		"\u04E1\x03\x02\x02\x02\u04E1\u04E3\x05\u0110\x89\x02\u04E2\u04DC\x03\x02" +
		"\x02\x02\u04E2\u04E3\x03\x02\x02\x02\u04E3\u04E4\x03\x02\x02\x02\u04E4" +
		"\u04E7\x07\u01B6\x02\x02\u04E5\u04E6\x07\x95\x02\x02\u04E6\u04E8\x07\u01C7" +
		"\x02\x02\u04E7\u04E5\x03\x02\x02\x02\u04E7\u04E8\x03\x02\x02\x02\u04E8" +
		"\u04E9\x03\x02\x02\x02\u04E9\u04EA\x05\u0110\x89\x02\u04EA\u04EB\x03\x02" +
		"\x02\x02\u04EB\u04EC\x07\u01B3\x02\x02\u04ECm\x03\x02\x02\x02\u04ED\u04EE" +
		"\x07\x92\x02\x02\u04EE\u04F3\x07\u01B2\x02\x02\u04EF\u04F4\x07\u0178\x02" +
		"\x02\u04F0\u04F1\x07\x1B\x02\x02\u04F1\u04F2\x07\u01C7\x02\x02\u04F2\u04F4" +
		"\x07\u0178\x02\x02\u04F3\u04EF\x03\x02\x02\x02\u04F3\u04F0\x03\x02\x02" +
		"\x02\u04F4\u04F5\x03\x02\x02\x02\u04F5\u0500\x05\u013C\x9F\x02\u04F6\u04F7" +
		"\x07\u0153\x02\x02\u04F7\u04F8\x07\xD3\x02\x02\u04F8\u04FD\x05\u013C\x9F" +
		"\x02\u04F9\u04FA\x07\u01B6\x02\x02\u04FA\u04FC\x05\u013C\x9F\x02\u04FB" +
		"\u04F9\x03\x02\x02\x02\u04FC\u04FF\x03\x02\x02\x02\u04FD\u04FB\x03\x02" +
		"\x02\x02\u04FD\u04FE\x03\x02\x02\x02\u04FE\u0501\x03\x02\x02\x02\u04FF" +
		"\u04FD\x03\x02\x02\x02\u0500\u04F6\x03\x02\x02\x02\u0500\u0501\x03\x02" +
		"\x02\x02\u0501\u0508\x03\x02\x02\x02\u0502\u0505\x07\u01B6\x02\x02\u0503" +
		"\u0504\x07\xA3\x02\x02\u0504\u0506\x07\u01C7\x02\x02\u0505\u0503\x03\x02" +
		"\x02\x02\u0505\u0506\x03\x02\x02\x02\u0506\u0507\x03\x02\x02\x02\u0507" +
		"\u0509\x05v<\x02\u0508\u0502\x03\x02\x02\x02\u0508\u0509\x03\x02\x02\x02" +
		"\u0509\u0510\x03\x02\x02\x02\u050A\u050D\x07\u01B6\x02\x02\u050B\u050C" +
		"\x07:\x02\x02\u050C\u050E\x07\u01C7\x02\x02\u050D\u050B\x03\x02\x02\x02" +
		"\u050D\u050E\x03\x02\x02\x02\u050E\u050F\x03\x02\x02\x02\u050F\u0511\x05" +
		"\u0110\x89\x02\u0510\u050A\x03\x02\x02\x02\u0510\u0511\x03\x02\x02\x02" +
		"\u0511\u0512\x03\x02\x02\x02\u0512\u0513\x07\u01B3\x02\x02\u0513o\x03" +
		"\x02\x02\x02\u0514\u0515\t\t\x02\x02\u0515q\x03\x02\x02\x02\u0516\u0517" +
		"\x07\u0178\x02\x02\u0517\u0526\x05\x86D\x02\u0518\u0526\x05v<\x02\u0519" +
		"\u0526\x05\u0110\x89\x02\u051A\u051B\x07\x1B\x02\x02\u051B\u051C\x07\u01C7" +
		"\x02\x02\u051C\u051D\x07\u0178\x02\x02\u051D\u0526\x05\x86D\x02\u051E" +
		"\u051F\x07\xA3\x02\x02\u051F\u0520\x07\u01C7\x02\x02\u0520\u0526\x05v" +
		"<\x02\u0521\u0522\x05t;\x02\u0522\u0523\x07\u01C7\x02\x02\u0523\u0524" +
		"\x05\u0110\x89\x02\u0524\u0526\x03\x02\x02\x02\u0525\u0516\x03\x02\x02" +
		"\x02\u0525\u0518\x03\x02\x02\x02\u0525\u0519\x03\x02\x02\x02\u0525\u051A" +
		"\x03\x02\x02\x02\u0525\u051E\x03\x02\x02\x02\u0525\u0521\x03\x02\x02\x02" +
		"\u0526s\x03\x02\x02\x02\u0527\u0528\t\n\x02\x02\u0528u\x03\x02\x02\x02" +
		"\u0529\u052A\x07\"\x02\x02\u052A\u052B\x07\u01B2\x02\x02\u052B\u052C\x05" +
		"\u013C\x9F\x02\u052C\u052D\x07\u01B3\x02\x02\u052Dw\x03\x02\x02\x02\u052E" +
		"\u052F\x07\u014B\x02\x02\u052F\u053D\x05\xF0y\x02\u0530\u0531\x07\u018E" +
		"\x02\x02\u0531\u0532\x07\u01B2\x02\x02\u0532\u0537\x05\u013C\x9F\x02\u0533" +
		"\u0534\x07\u01B6\x02\x02\u0534\u0536\x05\u013C\x9F\x02\u0535\u0533\x03" +
		"\x02\x02\x02\u0536\u0539\x03\x02\x02\x02\u0537\u0535\x03\x02\x02\x02\u0537" +
		"\u0538\x03\x02\x02\x02\u0538\u053A\x03\x02\x02\x02\u0539\u0537\x03\x02" +
		"\x02\x02\u053A\u053B\x07\u01B3\x02\x02\u053B\u053D\x03\x02\x02\x02\u053C" +
		"\u052E\x03\x02\x02\x02\u053C\u0530\x03\x02\x02\x02\u053Dy\x03\x02\x02" +
		"\x02\u053E\u053F\x07\u0194\x02\x02\u053F\u0540\x05\xF0y\x02\u0540{\x03" +
		"\x02\x02\x02\u0541\u0569\x05\xEEx\x02\u0542\u0569\x05\x82B\x02\u0543\u0544" +
		"\x07\u01B2\x02\x02\u0544\u0569\x07\u01B3\x02\x02\u0545\u0546\x07\u01B2" +
		"\x02\x02\u0546\u054B\x05\xEEx\x02\u0547\u0548\x07\u01B6\x02\x02\u0548" +
		"\u054A\x05\xEEx\x02\u0549\u0547\x03\x02\x02\x02\u054A\u054D\x03\x02\x02" +
		"\x02\u054B\u0549\x03\x02\x02\x02\u054B\u054C\x03\x02\x02\x02\u054C\u054E" +
		"\x03\x02\x02\x02\u054D\u054B\x03\x02\x02\x02\u054E\u054F\x07\u01B3\x02" +
		"\x02\u054F\u0569\x03\x02\x02\x02\u0550\u0551\x05\x80A\x02\u0551\u0552" +
		"\x07\u01B2\x02\x02\u0552\u0557\x05\xEEx\x02\u0553\u0554\x07\u01B6\x02" +
		"\x02\u0554\u0556\x05\xEEx\x02\u0555\u0553\x03\x02\x02\x02\u0556\u0559" +
		"\x03\x02\x02\x02\u0557\u0555\x03\x02\x02\x02\u0557\u0558\x03\x02\x02\x02" +
		"\u0558\u055A\x03\x02\x02\x02\u0559\u0557\x03\x02\x02\x02\u055A\u055B\x07" +
		"\u01B3\x02\x02\u055B\u0569\x03\x02\x02\x02\u055C\u055D\x05~@\x02\u055D" +
		"\u055E\x07\u01B2\x02\x02\u055E\u0563\x05|?\x02\u055F\u0560\x07\u01B6\x02" +
		"\x02\u0560\u0562\x05|?\x02\u0561\u055F\x03\x02\x02\x02\u0562\u0565\x03" +
		"\x02\x02\x02\u0563\u0561\x03\x02\x02\x02\u0563\u0564\x03\x02\x02\x02\u0564" +
		"\u0566\x03\x02\x02\x02\u0565\u0563\x03\x02\x02\x02\u0566\u0567\x07\u01B3" +
		"\x02\x02\u0567\u0569\x03\x02\x02\x02\u0568\u0541\x03\x02\x02\x02\u0568" +
		"\u0542\x03\x02\x02\x02\u0568\u0543\x03\x02\x02\x02\u0568\u0545\x03\x02" +
		"\x02\x02\u0568\u0550\x03\x02\x02\x02\u0568\u055C\x03\x02\x02\x02\u0569" +
		"}\x03\x02\x02\x02\u056A\u056B\x07\u0119\x02\x02\u056B\u056C\x07\x93\x02" +
		"\x02\u056C\x7F\x03\x02\x02\x02\u056D\u056E\t\v\x02\x02\u056E\x81\x03\x02" +
		"\x02\x02\u056F\u0570\x05\x84C\x02\u0570\u0571\x07\u01B2\x02\x02\u0571" +
		"\u0572\x05\x86D\x02\u0572\u0573\x07\u01B6\x02\x02\u0573\u0574\x05\u0110" +
		"\x89\x02\u0574\u0575\x07\u01B3\x02\x02\u0575\x83\x03\x02\x02\x02\u0576" +
		"\u0577\t\f\x02\x02\u0577\x85\x03\x02\x02\x02\u0578\u0579\x05\u013C\x9F" +
		"\x02\u0579\x87\x03\x02\x02\x02\u057A\u057B\x07\u011B\x02\x02\u057B\u057C" +
		"\x05\xF0y\x02\u057C\x89\x03\x02\x02\x02\u057D\u057E\x07\u0195\x02\x02" +
		"\u057E\u0583\x05\x8CG\x02\u057F\u0580\x07\u01B6\x02\x02\u0580\u0582\x05" +
		"\x8CG\x02\u0581\u057F\x03\x02\x02\x02\u0582\u0585\x03\x02\x02\x02\u0583" +
		"\u0581\x03\x02\x02\x02\u0583\u0584\x03\x02\x02\x02\u0584\x8B\x03\x02\x02" +
		"\x02\u0585\u0583\x03\x02\x02\x02\u0586\u0587\x05\u0120\x91\x02\u0587\u0588" +
		"\x07\xC7\x02\x02\u0588\u0589\x05\x8EH\x02\u0589\x8D\x03\x02\x02\x02\u058A" +
		"\u058C\x05\u0120\x91\x02\u058B\u058A\x03\x02\x02\x02\u058B\u058C\x03\x02" +
		"\x02\x02\u058C\u058D\x03\x02\x02\x02\u058D\u058F\x07\u01B2\x02\x02\u058E" +
		"\u0590\x05\x98M\x02\u058F\u058E\x03\x02\x02\x02\u058F\u0590\x03\x02\x02" +
		"\x02\u0590\u0592\x03\x02\x02\x02\u0591\u0593\x05\x92J\x02\u0592\u0591" +
		"\x03\x02\x02\x02\u0592\u0593\x03\x02\x02\x02\u0593\u0595\x03\x02\x02\x02" +
		"\u0594\u0596\x05\xA8U\x02\u0595\u0594\x03\x02\x02\x02\u0595\u0596\x03" +
		"\x02\x02\x02\u0596\u0597\x03\x02\x02\x02\u0597\u0598\x07\u01B3\x02\x02" +
		"\u0598\x8F\x03\x02\x02\x02\u0599\u059A\x07\u0137\x02\x02\u059A\u059C\x07" +
		"\u01B2\x02\x02\u059B\u059D\x05\x98M\x02\u059C\u059B\x03\x02\x02\x02\u059C" +
		"\u059D\x03\x02\x02\x02\u059D\u059F\x03\x02\x02\x02\u059E\u05A0\x05\x92" +
		"J\x02\u059F\u059E\x03\x02\x02\x02\u059F\u05A0\x03\x02\x02\x02\u05A0\u05A2" +
		"\x03\x02\x02\x02\u05A1\u05A3\x05\x9CO\x02\u05A2\u05A1\x03\x02\x02\x02" +
		"\u05A2\u05A3\x03\x02\x02\x02\u05A3\u05A5\x03\x02\x02\x02\u05A4\u05A6\x05" +
		"\xA2R\x02\u05A5\u05A4\x03\x02\x02\x02\u05A5\u05A6\x03\x02\x02\x02";
	private static readonly _serializedATNSegment3: string =
		"\u05A6\u05A8\x03\x02\x02\x02\u05A7\u05A9\x05\xA4S\x02\u05A8\u05A7\x03" +
		"\x02\x02\x02\u05A8\u05A9\x03\x02\x02\x02\u05A9\u05AB\x03\x02\x02\x02\u05AA" +
		"\u05AC\x05\x9EP\x02\u05AB\u05AA\x03\x02\x02\x02\u05AB\u05AC\x03\x02\x02" +
		"\x02\u05AC\u05AD\x03\x02\x02\x02\u05AD\u05AE\x05\xA6T\x02\u05AE\u05B3" +
		"\x07\u01B3\x02\x02\u05AF\u05B1\x07\xC7\x02\x02\u05B0\u05AF\x03\x02\x02" +
		"\x02\u05B0\u05B1\x03\x02\x02\x02\u05B1\u05B2\x03\x02\x02\x02\u05B2\u05B4" +
		"\x05\u0128\x95\x02\u05B3\u05B0\x03\x02\x02\x02\u05B3\u05B4\x03\x02\x02" +
		"\x02\u05B4\x91\x03\x02\x02\x02\u05B5\u05B6\x07\u014E\x02\x02\u05B6\u05B7" +
		"\x07\xD3\x02\x02\u05B7\u05BC\x05\x94K\x02\u05B8\u05B9\x07\u01B6\x02\x02" +
		"\u05B9\u05BB\x05\x94K\x02\u05BA\u05B8\x03\x02\x02\x02\u05BB\u05BE\x03" +
		"\x02\x02\x02\u05BC\u05BA\x03\x02\x02\x02\u05BC\u05BD\x03\x02\x02\x02\u05BD" +
		"\x93\x03\x02\x02\x02\u05BE\u05BC\x03\x02\x02\x02\u05BF\u05C1\x05\xEEx" +
		"\x02\u05C0\u05C2\t\r\x02\x02\u05C1\u05C0\x03\x02\x02\x02\u05C1\u05C2\x03" +
		"\x02\x02\x02\u05C2\u05C5\x03\x02\x02\x02\u05C3\u05C4\x07^\x02\x02\u05C4" +
		"\u05C6\t\x03\x02\x02\u05C5\u05C3\x03\x02\x02\x02\u05C5\u05C6\x03\x02\x02" +
		"\x02\u05C6\x95\x03\x02\x02\x02\u05C7\u05CA\x07\u0133\x02\x02\u05C8\u05CB" +
		"\x07\xC0\x02\x02\u05C9\u05CB\x05\xEEx\x02\u05CA\u05C8\x03\x02\x02\x02" +
		"\u05CA\u05C9\x03\x02\x02\x02\u05CB\x97\x03\x02\x02\x02\u05CC\u05CD\x07" +
		"\u0153\x02\x02\u05CD\u05CE\x07\xD3\x02\x02\u05CE\u05D3\x05\xEEx\x02\u05CF" +
		"\u05D0\x07\u01B6\x02\x02\u05D0\u05D2\x05\xEEx\x02\u05D1\u05CF\x03\x02" +
		"\x02\x02\u05D2\u05D5\x03\x02\x02\x02\u05D3\u05D1\x03\x02\x02\x02\u05D3" +
		"\u05D4\x03\x02\x02\x02\u05D4\x99\x03\x02\x02\x02\u05D5\u05D3\x03\x02\x02" +
		"\x02\u05D6\u05E7\x07\u01BE\x02\x02\u05D7\u05E7\x07\u01C1\x02\x02\u05D8" +
		"\u05E7\x07\u01C6\x02\x02\u05D9\u05DA\x07\u01B4\x02\x02\u05DA\u05DB\x07" +
		"\u01C9\x02\x02\u05DB\u05DC\x07\u01B6\x02\x02\u05DC\u05DD\x07\u01C9\x02" +
		"\x02\u05DD\u05E7\x07\u01B5\x02\x02\u05DE\u05DF\x07\u01B4\x02\x02\u05DF" +
		"\u05E0\x07\u01C9\x02\x02\u05E0\u05E1\x07\u01B6\x02\x02\u05E1\u05E7\x07" +
		"\u01B5\x02\x02\u05E2\u05E3\x07\u01B4\x02\x02\u05E3\u05E4\x07\u01B6\x02" +
		"\x02\u05E4\u05E5\x07\u01C9\x02\x02\u05E5\u05E7\x07\u01B5\x02\x02\u05E6" +
		"\u05D6\x03\x02\x02\x02\u05E6\u05D7\x03\x02\x02\x02\u05E6\u05D8\x03\x02" +
		"\x02\x02\u05E6\u05D9\x03\x02\x02\x02\u05E6\u05DE\x03\x02\x02\x02\u05E6" +
		"\u05E2\x03\x02\x02\x02\u05E7\x9B\x03\x02\x02\x02\u05E8\u05E9\x07\u0138" +
		"\x02\x02\u05E9\u05EE\x05P)\x02\u05EA\u05EB\x07\u01B6\x02\x02\u05EB\u05ED" +
		"\x05P)\x02\u05EC\u05EA\x03\x02\x02\x02\u05ED\u05F0\x03\x02\x02\x02\u05EE" +
		"\u05EC\x03\x02\x02\x02\u05EE\u05EF\x03\x02\x02\x02\u05EF\x9D\x03\x02\x02" +
		"\x02\u05F0\u05EE\x03\x02\x02\x02\u05F1\u05F2\x07\u0154\x02\x02\u05F2\u05F4" +
		"\x07\u01B2\x02\x02\u05F3\u05F5\x05\xA0Q\x02\u05F4\u05F3\x03\x02\x02\x02" +
		"\u05F5\u05F6\x03\x02\x02\x02\u05F6\u05F4\x03\x02\x02\x02\u05F6\u05F7\x03" +
		"\x02\x02\x02\u05F7\u05F8\x03\x02\x02\x02\u05F8\u05FA\x07\u01B3\x02\x02" +
		"\u05F9\u05FB\x05\xACW\x02\u05FA\u05F9\x03\x02\x02\x02\u05FA\u05FB\x03" +
		"\x02\x02\x02\u05FB\x9F\x03\x02\x02\x02\u05FC\u05FE\x05\u012C\x97\x02\u05FD" +
		"\u05FF\x05\x9AN\x02\u05FE\u05FD\x03\x02\x02\x02\u05FE\u05FF\x03\x02\x02" +
		"\x02\u05FF\xA1\x03\x02\x02\x02\u0600\u0601\x07\xC0\x02\x02\u0601\u0602" +
		"\x07\u0166\x02\x02\u0602\u0603\x07\u0155\x02\x02\u0603\u0609\x07\u0136" +
		"\x02\x02\u0604\u0605\x07\u014C\x02\x02\u0605\u0606\x07\u0165\x02\x02\u0606" +
		"\u0607\x07\u0155\x02\x02\u0607\u0609\x07\u0136\x02\x02\u0608\u0600\x03" +
		"\x02\x02\x02\u0608\u0604\x03\x02\x02\x02\u0609\xA3\x03\x02\x02\x02\u060A" +
		"\u060B\x07\b\x02\x02\u060B\u060C\x07\u0136\x02\x02\u060C\u060D\x07\u016E" +
		"\x02\x02\u060D\u060E\x07i\x02\x02\u060E\u060F\x07P\x02\x02\u060F\u0623" +
		"\x07\u0165\x02\x02\u0610\u0611\x07\b\x02\x02\u0611\u0612\x07\u0136\x02" +
		"\x02\u0612\u0613\x07\u016E\x02\x02\u0613\u0614\x07\u0182\x02\x02\u0614" +
		"\u0615\x07\u0142\x02\x02\u0615\u0623\x07\u0165\x02\x02\u0616\u0617\x07" +
		"\b\x02\x02\u0617\u0618\x07\u0136\x02\x02\u0618\u0619\x07\u016E\x02\x02" +
		"\u0619\u061A\x07\u0182\x02\x02\u061A\u061B\x07P\x02\x02\u061B\u0623\x05" +
		"\u012C\x97\x02\u061C\u061D\x07\b\x02\x02\u061D\u061E\x07\u0136\x02\x02" +
		"\u061E\u061F\x07\u016E\x02\x02\u061F\u0620\x07\u0182\x02\x02\u0620\u0621" +
		"\x071\x02\x02\u0621\u0623\x05\u012C\x97\x02\u0622\u060A\x03\x02\x02\x02" +
		"\u0622\u0610\x03\x02\x02\x02\u0622\u0616\x03\x02\x02\x02\u0622\u061C\x03" +
		"\x02\x02\x02\u0623\xA5\x03\x02\x02\x02\u0624\u0625\x07\xF8\x02\x02\u0625" +
		"\u062A\x05P)\x02\u0626\u0627\x07\u01B6\x02\x02\u0627\u0629\x05P)\x02\u0628" +
		"\u0626\x03\x02\x02\x02\u0629\u062C\x03\x02\x02\x02\u062A\u0628\x03\x02" +
		"\x02\x02\u062A\u062B\x03\x02\x02\x02\u062B\xA7\x03\x02\x02\x02\u062C\u062A" +
		"\x03\x02\x02\x02\u062D\u062E\x07\u015C\x02\x02\u062E\u062F\x07\xCC\x02" +
		"\x02\u062F\u0630\x05\u0110\x89\x02\u0630\u0631\x05\xAAV\x02\u0631\u0637" +
		"\x03\x02\x02\x02\u0632\u0633\x07\u0166\x02\x02\u0633\u0634\x07\xCC\x02" +
		"\x02\u0634\u0635\x07\u01C9\x02\x02\u0635\u0637\x05\xAAV\x02\u0636\u062D" +
		"\x03\x02\x02\x02\u0636\u0632\x03\x02\x02\x02\u0637\xA9\x03\x02\x02\x02" +
		"\u0638\u0639\x07n\x02\x02\u0639\u063A\x07\xC3\x02\x02\u063A\u063B\x07" +
		"\xEE\x02\x02\u063B\u063C\x07\u0165\x02\x02\u063C\xAB\x03\x02\x02\x02\u063D" +
		"\u063E\x07\u0197\x02\x02\u063E\u063F\x05\u0110\x89\x02\u063F\xAD\x03\x02" +
		"\x02\x02\u0640\u0641\x07\u0153\x02\x02\u0641\u0642\x05\u0144\xA3\x02\u0642" +
		"\xAF\x03\x02\x02\x02\u0643\u0644\x07\u0158\x02\x02\u0644\u0645\x07\u0111" +
		"\x02\x02\u0645\u0646\x07\u0176\x02\x02\u0646\xB1\x03\x02\x02\x02\u0647" +
		"\u0648\x07f\x02\x02\u0648\u0649\x07\xD3\x02\x02\u0649\u064A\x05\xB4[\x02" +
		"\u064A\xB3\x03\x02\x02\x02\u064B\u064C\x07\u01B2\x02\x02\u064C\u0651\x05" +
		"\xB6\\\x02\u064D\u064E\x07\u01B6\x02\x02\u064E\u0650\x05\xB6\\\x02\u064F" +
		"\u064D\x03\x02\x02\x02\u0650\u0653\x03\x02\x02\x02\u0651\u064F\x03\x02" +
		"\x02\x02\u0651\u0652\x03\x02\x02\x02\u0652\u0654\x03\x02\x02\x02\u0653" +
		"\u0651\x03\x02\x02\x02\u0654\u0655\x07\u01B3\x02\x02\u0655\xB5\x03\x02" +
		"\x02\x02\u0656\u0664\x05\u010E\x88\x02\u0657\u0658\x05\u0128\x95\x02\u0658" +
		"\u0659\x07\u01B2\x02\x02\u0659\u065E\x05\xB8]\x02\u065A\u065B\x07\u01B6" +
		"\x02\x02\u065B\u065D\x05\xB8]\x02\u065C\u065A\x03\x02\x02\x02\u065D\u0660" +
		"\x03\x02\x02\x02\u065E\u065C\x03\x02\x02\x02\u065E\u065F\x03\x02\x02\x02" +
		"\u065F\u0661\x03\x02\x02\x02\u0660\u065E\x03\x02\x02\x02\u0661\u0662\x07" +
		"\u01B3\x02\x02\u0662\u0664\x03\x02\x02\x02\u0663\u0656\x03\x02\x02\x02" +
		"\u0663\u0657\x03\x02\x02\x02\u0664\xB7\x03\x02\x02\x02\u0665\u0668\x05" +
		"\u010E\x88\x02\u0666\u0668\x05\u0150\xA9\x02\u0667\u0665\x03\x02\x02\x02" +
		"\u0667\u0666\x03\x02\x02\x02\u0668\xB9\x03\x02\x02\x02\u0669\u066A\x07" +
		"\u0131\x02\x02\u066A\u0673\x05\u013A\x9E\x02\u066B\u066F\x07\u01B2\x02" +
		"\x02\u066C\u066E\x05\xC0a\x02\u066D\u066C\x03\x02\x02\x02\u066E\u0671" +
		"\x03\x02\x02\x02\u066F\u066D\x03\x02\x02\x02\u066F\u0670\x03\x02\x02\x02" +
		"\u0670\u0672\x03\x02\x02\x02\u0671\u066F\x03\x02\x02\x02\u0672\u0674\x07" +
		"\u01B3\x02\x02\u0673\u066B\x03\x02\x02\x02\u0673\u0674\x03\x02\x02\x02" +
		"\u0674\xBB\x03\x02\x02\x02\u0675\u067E\x07\u01A3\x02\x02\u0676\u0678\x07" +
		"\xD3\x02\x02\u0677\u0679\x07\u01A5\x02\x02\u0678\u0677\x03\x02\x02\x02" +
		"\u0678\u0679\x03\x02\x02\x02\u0679\u067A\x03\x02\x02\x02\u067A\u067B\x07" +
		"\u01B2\x02\x02\u067B\u067C\x05\u0128\x95\x02\u067C\u067D\x07\u01B3\x02" +
		"\x02\u067D\u067F\x03\x02\x02\x02\u067E\u0676\x03\x02\x02\x02\u067E\u067F" +
		"\x03\x02\x02\x02\u067F\u0684\x03\x02\x02\x02\u0680\u0681\x07\u0127\x02" +
		"\x02\u0681\u0682\x05\u0156\xAC\x02\u0682\u0683\x07\u01A6\x02\x02\u0683" +
		"\u0685\x03\x02\x02\x02\u0684\u0680\x03\x02\x02\x02\u0684\u0685\x03\x02" +
		"\x02\x02\u0685\xBD\x03\x02\x02\x02\u0686\u068F\x07\u01A4\x02\x02\u0687" +
		"\u0689\x07\xD3\x02\x02\u0688\u068A\x07\u01A5\x02\x02\u0689\u0688\x03\x02" +
		"\x02\x02\u0689\u068A\x03\x02\x02\x02\u068A\u068B\x03\x02\x02\x02\u068B" +
		"\u068C\x07\u01B2\x02\x02\u068C\u068D\x05\u0128\x95\x02\u068D\u068E\x07" +
		"\u01B3\x02\x02\u068E\u0690\x03\x02\x02\x02\u068F\u0687\x03\x02\x02\x02" +
		"\u068F\u0690\x03\x02\x02\x02\u0690\u0695\x03\x02\x02\x02\u0691\u0692\x07" +
		"\u0127\x02\x02\u0692\u0693\x05\u0156\xAC\x02\u0693\u0694\x07\u01A6\x02" +
		"\x02\u0694\u0696\x03\x02\x02\x02\u0695\u0691\x03\x02\x02\x02\u0695\u0696" +
		"\x03\x02\x02\x02\u0696\xBF\x03\x02\x02\x02\u0697\u0698\t\x0E\x02\x02\u0698" +
		"\u069C\t\x0F\x02\x02\u0699\u069A\t\x10\x02\x02\u069A\u069C\t\x11\x02\x02" +
		"\u069B\u0697\x03\x02\x02\x02\u069B\u0699\x03\x02\x02\x02\u069C\xC1\x03" +
		"\x02\x02\x02\u069D\u06A1\x05\xC4c\x02\u069E\u06A1\x05\xE2r\x02\u069F\u06A1" +
		"\x05\xE6t\x02\u06A0\u069D\x03\x02\x02\x02\u06A0\u069E\x03\x02\x02\x02" +
		"\u06A0\u069F\x03\x02\x02\x02\u06A1\xC3\x03\x02\x02\x02\u06A2\u06A3\x05" +
		"\xE8u\x02\u06A3\u06A5\x05\xECw\x02\u06A4\u06A6\x05\xDEp\x02\u06A5\u06A4" +
		"\x03\x02\x02\x02\u06A5\u06A6\x03\x02\x02\x02\u06A6\u06A8\x03\x02\x02\x02" +
		"\u06A7\u06A9\x05\xE0q\x02\u06A8\u06A7\x03\x02\x02\x02\u06A8\u06A9\x03" +
		"\x02\x02\x02\u06A9\xC5\x03\x02\x02\x02\u06AA\u06AB\x05\xEEx\x02\u06AB" +
		"\xC7\x03\x02\x02\x02\u06AC\u06AD\x07\xB7\x02\x02\u06AD\u06AE\x07\u0111" +
		"\x02\x02\u06AE\u06AF\x05\xEEx\x02\u06AF\u06B0\x07\xC7\x02\x02\u06B0\u06B1" +
		"\x05\xEEx\x02\u06B1\u06BE\x03\x02\x02\x02\u06B2\u06B3\x07\xB7\x02\x02" +
		"\u06B3\u06B6\x07\u0111\x02\x02\u06B4\u06B7\x05\u013C\x9F\x02\u06B5\u06B7" +
		"\x05\xEEx\x02\u06B6\u06B4\x03\x02\x02\x02\u06B6\u06B5\x03\x02\x02\x02" +
		"\u06B7\u06B8\x03\x02\x02\x02\u06B8\u06B9\x07\xC7\x02\x02\u06B9\u06BB\x05" +
		"\u013C\x9F\x02\u06BA\u06BC\x05\u0110\x89\x02\u06BB\u06BA\x03\x02\x02\x02" +
		"\u06BB\u06BC\x03\x02\x02\x02\u06BC\u06BE\x03\x02\x02\x02\u06BD\u06AC\x03" +
		"\x02\x02\x02\u06BD\u06B2\x03\x02\x02\x02\u06BE\xC9\x03\x02\x02\x02\u06BF" +
		"\u06C0\x07\xE6\x02\x02\u06C0\u06C2\x05\xCCg\x02\u06C1\u06BF\x03\x02\x02" +
		"\x02\u06C1\u06C2\x03\x02\x02\x02\u06C2\u06C3\x03\x02\x02\x02\u06C3\u06C4" +
		"\x07\u015B\x02\x02\u06C4\u06C5\x07L\x02\x02\u06C5\u06C6\x05\xEAv\x02\u06C6" +
		"\u06C7\x07\u0145\x02\x02\u06C7\u06C8\x07%\x02\x02\u06C8\xCB\x03\x02\x02" +
		"\x02\u06C9\u06CA\x05\u0128\x95\x02\u06CA\xCD\x03\x02\x02\x02\u06CB\u06CC" +
		"\x07\u0190\x02\x02\u06CC\u06D1\x05\xD0i\x02\u06CD\u06CE\x07\u01B6\x02" +
		"\x02\u06CE\u06D0\x05\xD0i\x02\u06CF\u06CD\x03\x02\x02\x02\u06D0\u06D3" +
		"\x03\x02\x02\x02\u06D1\u06CF\x03\x02\x02\x02\u06D1\u06D2\x03\x02\x02\x02" +
		"\u06D2\xCF\x03\x02\x02\x02\u06D3\u06D1\x03\x02\x02\x02\u06D4\u06D5\x07" +
		"\u01B2\x02\x02\u06D5\u06DA\x05\u0150\xA9\x02\u06D6\u06D7\x07\u01B6\x02" +
		"\x02\u06D7\u06D9\x05\u0150\xA9\x02\u06D8\u06D6\x03\x02\x02\x02\u06D9\u06DC" +
		"\x03\x02\x02\x02\u06DA\u06D8\x03\x02\x02\x02\u06DA\u06DB\x03\x02\x02\x02" +
		"\u06DB\u06DD\x03\x02\x02\x02\u06DC\u06DA\x03\x02\x02\x02\u06DD\u06DE\x07" +
		"\u01B3\x02\x02\u06DE\xD1\x03\x02\x02\x02\u06DF\u06E0\x07\u01B2\x02\x02" +
		"\u06E0\u06E1\x05\u0156\xAC\x02\u06E1\u06E2\x07\u01B3\x02\x02\u06E2\xD3" +
		"\x03\x02\x02\x02\u06E3\u06E4\x07\u01B2\x02\x02\u06E4\u06E7\x05\u0156\xAC" +
		"\x02\u06E5\u06E6\x07\u01B6\x02\x02\u06E6\u06E8\x05\u0156\xAC\x02\u06E7" +
		"\u06E5\x03\x02\x02\x02\u06E7\u06E8\x03\x02\x02\x02\u06E8\u06E9\x03\x02" +
		"\x02\x02\u06E9\u06EA\x07\u01B3\x02\x02\u06EA\xD5\x03\x02\x02\x02\u06EB" +
		"\u06EC\x07\u01B2\x02\x02\u06EC\u06EF\x05\u0154\xAB\x02\u06ED\u06EE\x07" +
		"\u01B6\x02\x02\u06EE\u06F0\x05\u0154\xAB\x02\u06EF\u06ED\x03\x02\x02\x02" +
		"\u06EF\u06F0\x03\x02\x02\x02\u06F0\u06F1\x03\x02\x02\x02\u06F1\u06F2\x07" +
		"\u01B3\x02\x02\u06F2\xD7\x03\x02\x02\x02\u06F3\u06F4\x07\u01AD\x02\x02" +
		"\u06F4\u06F9\x05\xECw\x02\u06F5\u06F6\x07\u01B6\x02\x02\u06F6\u06F8\x05" +
		"\xECw\x02\u06F7\u06F5\x03\x02\x02\x02\u06F8\u06FB\x03\x02\x02\x02\u06F9" +
		"\u06F7\x03\x02\x02\x02\u06F9\u06FA\x03\x02\x02\x02\u06FA\u06FC\x03\x02" +
		"\x02\x02\u06FB\u06F9\x03\x02\x02\x02\u06FC\u06FD\x07\u01AC\x02\x02\u06FD" +
		"\xD9\x03\x02\x02\x02\u06FE\u06FF\x07\u01AD\x02\x02\u06FF\u0700\x05\xEC" +
		"w\x02\u0700\u0701\x07\u01B6\x02\x02\u0701\u0702\x05\xECw\x02\u0702\u0703" +
		"\x03\x02\x02\x02\u0703\u0704\x07\u01AC\x02\x02\u0704\xDB\x03\x02\x02\x02" +
		"\u0705\u0706\x07\u01AD\x02\x02\u0706\u0707\x05\xE8u\x02\u0707\u070E\x05" +
		"\xECw\x02\u0708\u0709\x07\u01B6\x02\x02\u0709\u070A\x05\xE8u\x02\u070A" +
		"\u070B\x05\xECw\x02\u070B\u070D\x03\x02\x02\x02\u070C\u0708\x03\x02\x02" +
		"\x02\u070D\u0710\x03\x02\x02\x02\u070E\u070C\x03\x02\x02\x02\u070E\u070F" +
		"\x03\x02\x02\x02\u070F\u0711\x03\x02\x02\x02\u0710\u070E\x03\x02\x02\x02" +
		"\u0711\u0712\x07\u01AC\x02\x02\u0712\xDD\x03\x02\x02\x02\u0713\u0714\x07" +
		"\xE6\x02\x02\u0714\u0716\x05\xCCg\x02\u0715\u0713\x03\x02\x02\x02\u0715" +
		"\u0716\x03\x02\x02\x02\u0716\u0717\x03\x02\x02\x02\u0717\u0718\x07\u015B" +
		"\x02\x02\u0718\u071B\x07L\x02\x02\u0719\u071A\x07\u0145\x02\x02\u071A" +
		"\u071C\x07%\x02\x02\u071B\u0719\x03\x02\x02\x02\u071B\u071C\x03\x02\x02" +
		"\x02\u071C\u0722\x03\x02\x02\x02\u071D\u071F\x07\u0145\x02\x02\u071E\u071D" +
		"\x03\x02\x02\x02\u071E\u071F\x03\x02\x02\x02\u071F\u0720\x03\x02\x02\x02" +
		"\u0720\u0722\x07\u0147\x02\x02\u0721\u0715\x03\x02\x02\x02\u0721\u071E" +
		"\x03\x02\x02\x02\u0722\xDF\x03\x02\x02\x02\u0723\u0724\x07\x14\x02\x02" +
		"\u0724\u0725\x07\u01C8\x02\x02\u0725\xE1\x03\x02\x02\x02\u0726\u0727\x05" +
		"\xE8u\x02\u0727\u0728\x05\xECw\x02\u0728\u072B\x07\u013A\x02\x02\u0729" +
		"\u072A\x07\u0112\x02\x02\u072A\u072C\x05\xE4s\x02\u072B\u0729\x03\x02" +
		"\x02\x02\u072B\u072C\x03\x02\x02\x02\u072C\u072E\x03\x02\x02\x02\u072D" +
		"\u072F\x07\xB6\x02\x02\u072E\u072D\x03\x02\x02\x02\u072E\u072F\x03\x02" +
		"\x02\x02\u072F\xE3\x03\x02\x02\x02\u0730\u0731\x07\u01C8\x02\x02\u0731" +
		"\xE5\x03\x02\x02\x02\u0732\u0733\x05\xE8u\x02\u0733\u0734\x07\xC7\x02" +
		"\x02\u0734\u0736\x05\xC6d\x02\u0735\u0737\x05\xE0q\x02\u0736\u0735\x03" +
		"\x02\x02\x02\u0736\u0737\x03\x02\x02\x02\u0737\xE7\x03\x02\x02\x02\u0738" +
		"\u073B\x05\u013C\x9F\x02\u0739\u073B\x05\xEEx\x02\u073A\u0738\x03\x02" +
		"\x02\x02\u073A\u0739\x03\x02\x02\x02\u073B\xE9\x03\x02\x02\x02\u073C\u073D" +
		"\x07\u01B2\x02\x02\u073D\u0742\x05\xE8u\x02\u073E\u073F\x07\u01B6\x02" +
		"\x02\u073F\u0741\x05\xE8u\x02\u0740\u073E\x03\x02\x02\x02\u0741\u0744" +
		"\x03\x02\x02\x02\u0742\u0740\x03\x02\x02\x02\u0742\u0743\x03\x02\x02\x02" +
		"\u0743\u0745\x03\x02\x02\x02\u0744\u0742\x03\x02\x02\x02\u0745\u0746\x07" +
		"\u01B3\x02\x02\u0746\xEB\x03\x02\x02\x02\u0747\u0791\t\x12\x02\x02\u0748" +
		"\u074A\t\x13\x02\x02\u0749\u074B\x05\xD2j\x02\u074A\u0749\x03\x02\x02" +
		"\x02\u074A\u074B\x03\x02\x02\x02\u074B\u0791\x03\x02\x02\x02\u074C\u074E" +
		"\x07\u017D\x02\x02\u074D\u074F\x05\xD2j\x02\u074E\u074D\x03\x02\x02\x02" +
		"\u074E\u074F\x03\x02\x02\x02\u074F\u0756\x03\x02\x02\x02\u0750\u0752\t" +
		"\x14\x02\x02\u0751\u0753\x07\u0134\x02\x02\u0752\u0751\x03\x02\x02\x02" +
		"\u0752\u0753\x03\x02\x02\x02\u0753\u0754\x03\x02\x02\x02\u0754\u0755\x07" +
		"\u017C\x02\x02\u0755\u0757\x07\xBE\x02\x02\u0756\u0750\x03\x02\x02\x02" +
		"\u0756\u0757\x03\x02\x02\x02\u0757\u0791\x03\x02\x02\x02\u0758\u075A\x07" +
		"\u017E\x02\x02\u0759\u075B\x05\xD2j\x02\u075A\u0759\x03\x02\x02\x02\u075A" +
		"\u075B\x03\x02\x02\x02\u075B\u0762\x03\x02\x02\x02\u075C\u075E\t\x14\x02" +
		"\x02\u075D\u075F\x07\u0134\x02\x02\u075E\u075D\x03\x02\x02\x02\u075E\u075F" +
		"\x03\x02\x02\x02\u075F\u0760\x03\x02\x02\x02\u0760\u0761\x07\u017C\x02" +
		"\x02\u0761\u0763\x07\xBE\x02\x02\u0762\u075C\x03\x02\x02\x02\u0762\u0763" +
		"\x03\x02\x02\x02\u0763\u0791\x03\x02\x02\x02\u0764\u0766\x07\u017F\x02" +
		"\x02\u0765\u0767\x05\xD2j\x02\u0766\u0765\x03\x02\x02\x02\u0766\u0767" +
		"\x03\x02\x02\x02\u0767\u076E\x03\x02\x02\x02\u0768\u076A\t\x14\x02\x02" +
		"\u0769\u076B\x07\u0134\x02\x02\u076A\u0769\x03\x02\x02\x02\u076A\u076B" +
		"\x03\x02\x02\x02\u076B\u076C\x03\x02\x02\x02\u076C\u076D\x07\u017C\x02" +
		"\x02\u076D\u076F\x07\xBE\x02\x02\u076E\u0768\x03\x02\x02\x02\u076E\u076F" +
		"\x03\x02\x02\x02\u076F\u0791\x03\x02\x02\x02\u0770\u0772\x07\u0180\x02" +
		"\x02\u0771\u0773\x05\xD2j\x02\u0772\u0771\x03\x02\x02\x02\u0772\u0773" +
		"\x03\x02\x02\x02\u0773\u077A\x03\x02\x02\x02\u0774\u0776\t\x14\x02\x02" +
		"\u0775\u0777\x07\u0134\x02\x02\u0776\u0775\x03\x02\x02\x02\u0776\u0777" +
		"\x03\x02\x02\x02\u0777\u0778\x03\x02\x02\x02\u0778\u0779\x07\u017C\x02" +
		"\x02\u0779\u077B\x07\xBE\x02\x02\u077A\u0774\x03\x02\x02\x02\u077A\u077B" +
		"\x03\x02\x02\x02\u077B\u0791\x03\x02\x02\x02\u077C\u077E\t\x15\x02\x02" +
		"\u077D\u077F\x05\xD4k\x02\u077E\u077D\x03\x02\x02\x02\u077E\u077F\x03" +
		"\x02\x02\x02\u077F\u0791\x03\x02\x02\x02\u0780\u0782\t\x16\x02\x02\u0781" +
		"\u0783\x05\xD8m\x02\u0782\u0781\x03\x02\x02\x02\u0782\u0783\x03\x02\x02" +
		"\x02\u0783\u0791\x03\x02\x02\x02\u0784\u0786\x07T\x02\x02\u0785\u0787" +
		"\x05\xDAn\x02\u0786\u0785\x03\x02\x02\x02\u0786\u0787\x03\x02\x02\x02" +
		"\u0787\u0791\x03\x02\x02\x02\u0788\u078A\x07\u0165\x02\x02\u0789\u078B" +
		"\x05\xDCo\x02\u078A\u0789\x03\x02\x02\x02\u078A\u078B\x03\x02\x02\x02" +
		"\u078B\u0791\x03\x02\x02\x02\u078C\u078E\x07|\x02\x02\u078D\u078F\x05" +
		"\xD6l\x02\u078E\u078D\x03\x02\x02\x02\u078E\u078F\x03\x02\x02\x02\u078F" +
		"\u0791\x03\x02\x02\x02\u0790\u0747\x03\x02\x02\x02\u0790\u0748\x03\x02" +
		"\x02\x02\u0790\u074C\x03\x02\x02\x02\u0790\u0758\x03\x02\x02\x02\u0790" +
		"\u0764\x03\x02\x02\x02\u0790\u0770\x03\x02\x02\x02\u0790\u077C\x03\x02" +
		"\x02\x02\u0790\u0780\x03\x02\x02\x02\u0790\u0784\x03\x02\x02\x02\u0790" +
		"\u0788\x03\x02\x02\x02\u0790\u078C\x03\x02\x02\x02\u0791\xED\x03\x02\x02" +
		"\x02\u0792\u0793\x05\xF0y\x02\u0793\xEF\x03\x02\x02\x02\u0794\u0795\b" +
		"y\x01\x02\u0795\u0796\x07\u0145\x02\x02\u0796\u07A1\x05\xF0y\b\u0797\u0798" +
		"\x07\u0109\x02\x02\u0798\u0799\x07\u01B2\x02\x02\u0799\u079A\x05D#\x02" +
		"\u079A\u079B\x07\u01B3\x02\x02\u079B\u07A1\x03\x02\x02\x02\u079C\u079E" +
		"\x05\xF6|\x02\u079D\u079F\x05\xF2z\x02\u079E\u079D\x03\x02\x02\x02\u079E" +
		"\u079F\x03\x02\x02\x02\u079F\u07A1\x03\x02\x02\x02\u07A0\u0794\x03\x02" +
		"\x02\x02\u07A0\u0797\x03\x02\x02\x02\u07A0\u079C\x03\x02\x02\x02\u07A1" +
		"\u07B0\x03\x02\x02\x02\u07A2\u07A3\f\x05\x02\x02\u07A3\u07A4\x07\xC3\x02" +
		"\x02\u07A4\u07AF\x05\xF0y\x06\u07A5\u07A6\f\x04\x02\x02\u07A6\u07A7\x07" +
		"\u014D\x02\x02\u07A7\u07AF\x05\xF0y\x05\u07A8\u07A9\f\x03\x02\x02\u07A9" +
		"\u07AB\x07\u0128\x02\x02\u07AA\u07AC\x07\u0145\x02\x02\u07AB\u07AA\x03" +
		"\x02\x02\x02\u07AB\u07AC\x03\x02\x02\x02\u07AC\u07AD\x03\x02\x02\x02\u07AD" +
		"\u07AF\t\x17\x02\x02\u07AE\u07A2\x03\x02\x02\x02\u07AE\u07A5\x03\x02\x02" +
		"\x02\u07AE\u07A8\x03\x02\x02\x02\u07AF\u07B2\x03\x02\x02\x02\u07B0\u07AE" +
		"\x03\x02\x02\x02\u07B0\u07B1\x03\x02\x02\x02\u07B1\xF1\x03\x02\x02\x02" +
		"\u07B2\u07B0\x03\x02\x02\x02\u07B3\u07B5\x07\u0145\x02\x02\u07B4\u07B3" +
		"\x03\x02\x02\x02\u07B4\u07B5\x03\x02\x02\x02\u07B5\u07B6\x03\x02\x02\x02" +
		"\u07B6\u07B8\x07\xCC\x02\x02\u07B7\u07B9\t\x18\x02\x02\u07B8\u07B7\x03" +
		"\x02\x02\x02\u07B8\u07B9\x03\x02\x02\x02\u07B9\u07BA\x03\x02\x02\x02\u07BA" +
		"\u07BB\x05\xF6|\x02\u07BB\u07BC\x07\xC3\x02\x02\u07BC\u07BD\x05\xF6|\x02" +
		"\u07BD\u07F7\x03\x02\x02\x02\u07BE\u07C0\x07\u0145\x02\x02\u07BF\u07BE" +
		"\x03\x02\x02\x02\u07BF\u07C0\x03\x02\x02\x02\u07C0\u07C1\x03\x02\x02\x02" +
		"\u07C1\u07C2\x07\u011E\x02\x02\u07C2\u07C3\x07\u01B2\x02\x02\u07C3\u07C8" +
		"\x05\xEEx\x02\u07C4\u07C5\x07\u01B6\x02\x02\u07C5\u07C7\x05\xEEx\x02\u07C6" +
		"\u07C4\x03\x02\x02\x02\u07C7\u07CA\x03\x02\x02\x02\u07C8\u07C6\x03\x02" +
		"\x02\x02\u07C8\u07C9\x03\x02\x02\x02\u07C9\u07CB\x03\x02\x02\x02\u07CA" +
		"\u07C8\x03\x02\x02\x02\u07CB\u07CC\x07\u01B3\x02\x02\u07CC\u07F7\x03\x02" +
		"\x02\x02\u07CD\u07CF\x07\u0145\x02\x02\u07CE\u07CD\x03\x02\x02\x02\u07CE" +
		"\u07CF\x03\x02\x02\x02\u07CF\u07D0\x03\x02\x02\x02\u07D0\u07D1\x07\u011E" +
		"\x02\x02\u07D1\u07D2\x07\u01B2\x02\x02\u07D2\u07D3\x05D#\x02\u07D3\u07D4" +
		"\x07\u01B3\x02\x02\u07D4\u07F7\x03\x02\x02\x02\u07D5\u07D6\x07\u0109\x02" +
		"\x02\u07D6\u07D7\x07\u01B2\x02\x02\u07D7\u07D8\x05D#\x02\u07D8\u07D9\x07" +
		"\u01B3\x02\x02\u07D9\u07F7\x03\x02\x02\x02\u07DA\u07DC\x07\u0145\x02\x02" +
		"\u07DB\u07DA\x03\x02\x02\x02\u07DB\u07DC\x03\x02\x02\x02\u07DC\u07DD\x03" +
		"\x02\x02\x02\u07DD\u07DE\x07\u0162\x02\x02\u07DE\u07F7\x05\xF6|\x02\u07DF" +
		"\u07F7\x05\xF4{\x02\u07E0\u07E2\x07\u0128\x02\x02\u07E1\u07E3\x07\u0145" +
		"\x02\x02\u07E2\u07E1\x03\x02\x02\x02\u07E2\u07E3\x03\x02\x02\x02\u07E3" +
		"\u07E4\x03\x02\x02\x02\u07E4\u07F7\t\x17\x02\x02\u07E5\u07E7\x07\u0128" +
		"\x02\x02\u07E6\u07E8\x07\u0145\x02\x02\u07E7\u07E6\x03\x02\x02\x02\u07E7" +
		"\u07E8\x03\x02\x02\x02\u07E8\u07E9\x03\x02\x02\x02\u07E9\u07EA\x07\xFD" +
		"\x02\x02\u07EA\u07EB\x07\u0112\x02\x02\u07EB\u07F7\x05\xF6|\x02\u07EC" +
		"\u07EE\x07\u0145\x02\x02\u07ED\u07EC\x03\x02\x02\x02\u07ED\u07EE\x03\x02" +
		"\x02\x02\u07EE\u07EF\x03\x02\x02\x02\u07EF\u07F0\x07\u016C\x02\x02\u07F0" +
		"\u07F1\x07\u0182\x02\x02\u07F1\u07F4\x05\xF6|\x02\u07F2\u07F3\x07\u0106" +
		"\x02\x02\u07F3\u07F5\x05\u0154\xAB\x02\u07F4\u07F2\x03\x02\x02\x02\u07F4" +
		"\u07F5\x03\x02\x02\x02\u07F5\u07F7\x03\x02\x02\x02\u07F6\u07B4\x03\x02" +
		"\x02\x02\u07F6\u07BF\x03\x02\x02\x02\u07F6\u07CE\x03\x02\x02\x02\u07F6" +
		"\u07D5\x03\x02\x02\x02\u07F6\u07DB\x03\x02\x02\x02\u07F6\u07DF\x03\x02" +
		"\x02\x02\u07F6\u07E0\x03\x02\x02\x02\u07F6\u07E5\x03\x02\x02\x02\u07F6" +
		"\u07ED\x03\x02\x02\x02\u07F7\xF3\x03\x02\x02\x02\u07F8\u07FA\x07\u0145" +
		"\x02\x02\u07F9\u07F8\x03\x02\x02\x02\u07F9\u07FA\x03\x02\x02\x02\u07FA" +
		"\u07FB\x03\x02\x02\x02\u07FB\u07FC\x07\u0131\x02\x02\u07FC\u080A\t\x19" +
		"\x02\x02\u07FD\u07FE\x07\u01B2\x02\x02\u07FE\u080B\x07\u01B3\x02\x02\u07FF" +
		"\u0800\x07\u01B2\x02\x02\u0800\u0805\x05\xEEx\x02\u0801\u0802\x07\u01B6" +
		"\x02\x02\u0802\u0804\x05\xEEx\x02\u0803\u0801\x03\x02\x02\x02\u0804\u0807" +
		"\x03\x02\x02\x02\u0805\u0803\x03\x02\x02\x02\u0805\u0806\x03\x02\x02\x02" +
		"\u0806\u0808\x03\x02\x02\x02\u0807\u0805\x03\x02\x02\x02\u0808\u0809\x07" +
		"\u01B3\x02\x02\u0809\u080B\x03\x02\x02\x02\u080A\u07FD\x03\x02\x02\x02" +
		"\u080A\u07FF\x03\x02\x02\x02\u080B\u0816\x03\x02\x02\x02\u080C\u080E\x07" +
		"\u0145\x02\x02\u080D\u080C\x03\x02\x02\x02\u080D\u080E\x03\x02\x02\x02" +
		"\u080E\u080F\x03\x02\x02\x02\u080F\u0810\x07\u0131\x02\x02\u0810\u0813" +
		"\x05\xF6|\x02\u0811\u0812\x07\u0106\x02\x02\u0812\u0814\x05\u0154\xAB" +
		"\x02\u0813\u0811\x03\x02\x02\x02\u0813\u0814\x03\x02\x02\x02\u0814\u0816" +
		"\x03\x02\x02\x02\u0815\u07F9\x03\x02\x02\x02\u0815\u080D\x03\x02\x02\x02" +
		"\u0816\xF5\x03\x02\x02\x02\u0817\u0818\b|\x01\x02\u0818\u081C\x05\xF8" +
		"}\x02\u0819\u081A\t\x1A\x02\x02\u081A\u081C\x05\xF6|\t\u081B\u0817\x03" +
		"\x02\x02\x02\u081B\u0819\x03\x02\x02\x02\u081C\u0832\x03\x02\x02\x02\u081D" +
		"\u081E\f\b\x02\x02\u081E\u081F\t\x1B\x02\x02\u081F\u0831\x05\xF6|\t\u0820" +
		"\u0821\f\x07\x02\x02\u0821\u0822\t\x1C\x02\x02\u0822\u0831\x05\xF6|\b" +
		"\u0823\u0824\f\x06\x02\x02\u0824\u0825\x07\u01A9\x02\x02\u0825\u0831\x05" +
		"\xF6|\x07\u0826\u0827\f\x05\x02\x02\u0827\u0828\x07\u01AA\x02\x02\u0828" +
		"\u0831\x05\xF6|\x06\u0829\u082A\f\x04\x02\x02\u082A\u082B\x07\u01A8\x02" +
		"\x02\u082B\u0831\x05\xF6|\x05\u082C\u082D\f\x03\x02\x02\u082D\u082E\x05" +
		"\u014E\xA8\x02\u082E\u082F\x05\xF6|\x04\u082F\u0831\x03\x02\x02\x02\u0830" +
		"\u081D\x03\x02\x02\x02\u0830\u0820\x03\x02\x02\x02\u0830\u0823\x03\x02" +
		"\x02\x02\u0830\u0826\x03\x02\x02\x02\u0830\u0829\x03\x02\x02\x02\u0830" +
		"\u082C\x03\x02\x02\x02\u0831\u0834\x03\x02\x02\x02\u0832\u0830\x03\x02" +
		"\x02\x02\u0832\u0833\x03\x02\x02\x02\u0833\xF7\x03\x02\x02\x02\u0834\u0832" +
		"\x03\x02\x02\x02\u0835\u0836\b}\x01\x02\u0836\u0838\x07\xD7\x02\x02\u0837" +
		"\u0839\x05\u0130\x99\x02\u0838\u0837\x03\x02\x02\x02\u0839\u083A\x03\x02" +
		"\x02\x02\u083A\u0838\x03\x02\x02\x02\u083A\u083B\x03\x02\x02\x02\u083B" +
		"\u083E\x03\x02\x02\x02\u083C\u083D\x07\u0103\x02\x02\u083D\u083F\x05\xEE" +
		"x\x02\u083E\u083C\x03\x02\x02\x02\u083E\u083F\x03\x02\x02\x02\u083F\u0840" +
		"\x03\x02\x02\x02\u0840\u0841\x07\u0104\x02\x02\u0841\u08A3\x03\x02\x02" +
		"\x02\u0842\u0843\x07\xD7\x02\x02\u0843\u0845\x05\xEEx\x02\u0844\u0846" +
		"\x05\u0130\x99\x02\u0845\u0844\x03\x02\x02\x02\u0846\u0847\x03\x02\x02" +
		"\x02\u0847\u0845\x03\x02\x02\x02\u0847\u0848\x03\x02\x02\x02\u0848\u084B" +
		"\x03\x02\x02\x02\u0849\u084A\x07\u0103\x02\x02\u084A\u084C\x05\xEEx\x02" +
		"\u084B\u0849\x03\x02\x02\x02\u084B\u084C\x03\x02\x02\x02\u084C\u084D\x03" +
		"\x02\x02\x02\u084D\u084E\x07\u0104\x02\x02\u084E\u08A3\x03\x02\x02\x02" +
		"\u084F\u0850\x07\xD8\x02\x02\u0850\u0851\x07\u01B2\x02\x02\u0851\u0852" +
		"\x05\xEEx\x02\u0852\u0853\x07\xC7\x02\x02\u0853\u0854\x05\xECw\x02\u0854" +
		"\u0855\x07\u01B3\x02\x02\u0855\u08A3\x03\x02\x02\x02\u0856\u0857\x071" +
		"\x02\x02\u0857\u0858\x07\u01B2\x02\x02\u0858\u085B\x05\xEEx\x02\u0859" +
		"\u085A\x07A\x02\x02\u085A\u085C\x07^\x02\x02\u085B\u0859\x03\x02\x02\x02" +
		"\u085B\u085C\x03\x02\x02\x02\u085C\u085D\x03\x02\x02\x02\u085D\u085E\x07" +
		"\u01B3\x02\x02\u085E\u08A3\x03\x02\x02\x02\u085F\u0860\x07P\x02\x02\u0860" +
		"\u0861\x07\u01B2\x02\x02\u0861\u0864\x05\xEEx\x02\u0862\u0863\x07A\x02" +
		"\x02\u0863\u0865\x07^\x02\x02\u0864\u0862";
	private static readonly _serializedATNSegment4: string =
		"\x03\x02\x02\x02\u0864\u0865\x03\x02\x02\x02\u0865\u0866\x03\x02\x02\x02" +
		"\u0866\u0867\x07\u01B3\x02\x02\u0867\u08A3\x03\x02\x02\x02\u0868\u0869" +
		"\x07\u0159\x02\x02\u0869\u086A\x07\u01B2\x02\x02\u086A\u086B\x05\xF6|" +
		"\x02\u086B\u086C\x07\u011E\x02\x02\u086C\u086D\x05\xF6|\x02\u086D\u086E" +
		"\x07\u01B3\x02\x02\u086E\u08A3\x03\x02\x02\x02\u086F\u08A3\x05\u0150\xA9" +
		"\x02\u0870\u08A3\x07\u01BE\x02\x02\u0871\u0872\x05\u013C\x9F\x02\u0872" +
		"\u0873\x07\u01AF\x02\x02\u0873\u0874\x07\u01BE\x02\x02\u0874\u08A3\x03" +
		"\x02\x02\x02\u0875\u0876\x07\u01B2\x02\x02\u0876\u0877\x05D#\x02\u0877" +
		"\u0878\x07\u01B3\x02\x02\u0878\u08A3\x03\x02\x02\x02\u0879\u087A\x05\u0104" +
		"\x83\x02\u087A\u0886\x07\u01B2\x02\x02\u087B\u087D\x05\u015A\xAE\x02\u087C" +
		"\u087B\x03\x02\x02\x02\u087C\u087D\x03\x02\x02\x02\u087D\u087E\x03\x02" +
		"\x02\x02\u087E\u0883\x05\u0106\x84\x02\u087F\u0880\x07\u01B6\x02\x02\u0880" +
		"\u0882\x05\u0106\x84\x02\u0881\u087F\x03\x02\x02\x02\u0882\u0885\x03\x02" +
		"\x02\x02\u0883\u0881\x03\x02\x02\x02\u0883\u0884\x03\x02\x02\x02\u0884" +
		"\u0887\x03\x02\x02\x02\u0885\u0883\x03\x02\x02\x02\u0886\u087C\x03\x02" +
		"\x02\x02\u0886\u0887\x03\x02\x02\x02\u0887\u0888\x03\x02\x02\x02\u0888" +
		"\u0889\x07\u01B3\x02\x02\u0889\u08A3\x03\x02\x02\x02\u088A\u088B\x05\u0104" +
		"\x83\x02\u088B\u088C\x07\u01B2\x02\x02\u088C\u088D\x05\u0106\x84\x02\u088D" +
		"\u088E\x07\u0182\x02\x02\u088E\u088F\x05\u0106\x84\x02\u088F\u0890\x07" +
		"\u01B3\x02\x02\u0890\u08A3\x03\x02\x02\x02\u0891\u0892\x05\u0104\x83\x02" +
		"\u0892\u0894\x07\u01B2\x02\x02\u0893\u0895\x05\u015A\xAE\x02\u0894\u0893" +
		"\x03\x02\x02\x02\u0894\u0895\x03\x02\x02\x02\u0895\u0896\x03\x02\x02\x02" +
		"\u0896\u0897\x05\u0106\x84\x02\u0897\u0899\x07\u01B3\x02\x02\u0898\u089A" +
		"\x05\u0108\x85\x02\u0899\u0898\x03\x02\x02\x02\u0899\u089A\x03\x02\x02" +
		"\x02\u089A\u08A3\x03\x02\x02\x02\u089B\u08A3\x05\u0128\x95\x02\u089C\u08A3" +
		"\x05\u010A\x86\x02\u089D\u089E\x07\u01B2\x02\x02\u089E\u089F\x05\xEEx" +
		"\x02\u089F\u08A0\x07\u01B3\x02\x02\u08A0\u08A3\x03\x02\x02\x02\u08A1\u08A3" +
		"\x05\xFA~\x02\u08A2\u0835\x03\x02\x02\x02\u08A2\u0842\x03\x02\x02\x02" +
		"\u08A2\u084F\x03\x02\x02\x02\u08A2\u0856\x03\x02\x02\x02\u08A2\u085F\x03" +
		"\x02\x02\x02\u08A2\u0868\x03\x02\x02\x02\u08A2\u086F\x03\x02\x02\x02\u08A2" +
		"\u0870\x03\x02\x02\x02\u08A2\u0871\x03\x02\x02\x02\u08A2\u0875\x03\x02" +
		"\x02\x02\u08A2\u0879\x03\x02\x02\x02\u08A2\u088A\x03\x02\x02\x02\u08A2" +
		"\u0891\x03\x02\x02\x02\u08A2\u089B\x03\x02\x02\x02\u08A2\u089C\x03\x02" +
		"\x02\x02\u08A2\u089D\x03\x02\x02\x02\u08A2\u08A1\x03\x02\x02\x02\u08A3" +
		"\u08AB\x03\x02\x02\x02\u08A4\u08A5\f\x07\x02\x02\u08A5\u08A6\x07\u01B0" +
		"\x02\x02\u08A6\u08A7\x05\xF6|\x02\u08A7\u08A8\x07\u01B1\x02\x02\u08A8" +
		"\u08AA\x03\x02\x02\x02\u08A9\u08A4\x03\x02\x02\x02\u08AA\u08AD\x03\x02" +
		"\x02\x02\u08AB\u08A9\x03\x02\x02\x02\u08AB\u08AC\x03\x02\x02\x02\u08AC" +
		"\xF9\x03\x02\x02\x02\u08AD\u08AB\x03\x02\x02\x02\u08AE\u08B2\x05\xFC\x7F" +
		"\x02\u08AF\u08B2\x05\xFE\x80\x02\u08B0\u08B2\x05\u0100\x81\x02\u08B1\u08AE" +
		"\x03\x02\x02\x02\u08B1\u08AF\x03\x02\x02\x02\u08B1\u08B0\x03\x02\x02\x02" +
		"\u08B2\xFB\x03\x02\x02\x02\u08B3\u08B4\x07\xC6\x02\x02\u08B4\u08B5\x07" +
		"\u01B0\x02\x02\u08B5\u08BA\x05\u0102\x82\x02\u08B6\u08B7\x07\u01B6\x02" +
		"\x02\u08B7\u08B9\x05\u0102\x82\x02\u08B8\u08B6\x03\x02\x02\x02\u08B9\u08BC" +
		"\x03\x02\x02\x02\u08BA\u08B8\x03\x02\x02\x02\u08BA\u08BB\x03\x02\x02\x02" +
		"\u08BB\u08BD\x03\x02\x02\x02\u08BC\u08BA\x03\x02\x02\x02\u08BD\u08BE\x07" +
		"\u01B1\x02\x02\u08BE\xFD\x03\x02\x02\x02\u08BF\u08C0\x07\u0165\x02\x02" +
		"\u08C0\u08C1\x07\u01B2\x02\x02\u08C1\u08C6\x05\u0102\x82\x02\u08C2\u08C3" +
		"\x07\u01B6\x02\x02\u08C3\u08C5\x05\u0102\x82\x02\u08C4\u08C2\x03\x02\x02" +
		"\x02\u08C5\u08C8\x03\x02\x02\x02\u08C6\u08C4\x03\x02\x02\x02\u08C6\u08C7" +
		"\x03\x02\x02\x02\u08C7\u08C9\x03\x02\x02\x02\u08C8\u08C6\x03\x02\x02\x02" +
		"\u08C9\u08CA\x07\u01B3\x02\x02\u08CA\xFF\x03\x02\x02\x02\u08CB\u08CC\x07" +
		"T\x02\x02\u08CC\u08CD\x07\u01B0\x02\x02\u08CD\u08CE\x05\u0102\x82\x02" +
		"\u08CE\u08CF\x07\u01B6\x02\x02\u08CF\u08D0\x05\u0102\x82\x02\u08D0\u08D1" +
		"\x07\u01B1\x02\x02\u08D1\u0101\x03\x02\x02\x02\u08D2\u08D5\x05\u011C\x8F" +
		"\x02\u08D3\u08D5\x05\xFA~\x02\u08D4\u08D2\x03\x02\x02\x02\u08D4\u08D3" +
		"\x03\x02\x02\x02\u08D5\u0103\x03\x02\x02\x02\u08D6\u08DA\x05\u0162\xB2" +
		"\x02\u08D7\u08DA\x05\u0164\xB3\x02\u08D8\u08DA\x05\u013C\x9F\x02\u08D9" +
		"\u08D6\x03\x02\x02\x02\u08D9\u08D7\x03\x02\x02\x02\u08D9\u08D8\x03\x02" +
		"\x02\x02\u08DA\u0105\x03\x02\x02\x02\u08DB\u08E1\x05\u0160\xB1\x02\u08DC" +
		"\u08E1\x05\u015E\xB0\x02\u08DD\u08E1\x05\u015C\xAF\x02\u08DE\u08E1\x05" +
		"\xEEx\x02\u08DF\u08E1\x05\u0108\x85\x02\u08E0\u08DB\x03\x02\x02\x02\u08E0" +
		"\u08DC\x03\x02\x02\x02\u08E0\u08DD\x03\x02\x02\x02\u08E0\u08DE\x03\x02" +
		"\x02\x02\u08E0\u08DF\x03\x02\x02\x02\u08E1\u0107\x03\x02\x02\x02\u08E2" +
		"\u08E3\x07.\x02\x02\u08E3\u08E4\x07\u01B2\x02\x02\u08E4\u08E5\x07\u0194" +
		"\x02\x02\u08E5\u08E6\x05\xF0y\x02\u08E6\u08E7\x07\u01B3\x02\x02\u08E7" +
		"\u0109\x03\x02\x02\x02\u08E8\u08E9\x05\u013C\x9F\x02\u08E9\u010B\x03\x02" +
		"\x02\x02\u08EA\u08EB\x05\u0128\x95\x02\u08EB\u010D\x03\x02\x02\x02\u08EC" +
		"\u08EF\x05\u0128\x95\x02\u08ED\u08EF\x05\u010A\x86\x02\u08EE\u08EC\x03" +
		"\x02\x02\x02\u08EE\u08ED\x03\x02\x02\x02\u08EF\u010F\x03\x02\x02\x02\u08F0" +
		"\u08F3\x07\u0126\x02\x02\u08F1\u08F4\x05\u0112\x8A\x02\u08F2\u08F4\x05" +
		"\u0116\x8C\x02\u08F3\u08F1\x03\x02\x02\x02\u08F3\u08F2\x03\x02\x02\x02" +
		"\u08F3\u08F4\x03\x02\x02\x02\u08F4\u0111\x03\x02\x02\x02\u08F5\u08F7\x05" +
		"\u0114\x8B\x02\u08F6\u08F8\x05\u0118\x8D\x02\u08F7\u08F6\x03\x02\x02\x02" +
		"\u08F7\u08F8\x03\x02\x02\x02\u08F8\u0113\x03\x02\x02\x02\u08F9\u08FA\x05" +
		"\u011A\x8E\x02\u08FA\u08FB\x05\u015E\xB0\x02\u08FB\u08FD\x03\x02\x02\x02" +
		"\u08FC\u08F9\x03\x02\x02\x02\u08FD\u08FE\x03\x02\x02\x02\u08FE\u08FC\x03" +
		"\x02\x02\x02\u08FE\u08FF\x03\x02\x02\x02\u08FF\u0115\x03\x02\x02\x02\u0900" +
		"\u0903\x05\u0118\x8D\x02\u0901\u0904\x05\u0114\x8B\x02\u0902\u0904\x05" +
		"\u0118\x8D\x02\u0903\u0901\x03\x02\x02\x02\u0903\u0902\x03\x02\x02\x02" +
		"\u0903\u0904\x03\x02\x02\x02\u0904\u0117\x03\x02\x02\x02\u0905\u0906\x05" +
		"\u011A\x8E\x02\u0906\u0907\x05\u015E\xB0\x02\u0907\u0908\x07\u0182\x02" +
		"\x02\u0908\u0909\x05\u015E\xB0\x02\u0909\u0119\x03\x02\x02\x02\u090A\u090C" +
		"\t\x1D\x02\x02\u090B\u090A\x03\x02\x02\x02\u090B\u090C\x03\x02\x02\x02" +
		"\u090C\u090D\x03\x02\x02\x02\u090D\u0910\t\x1E\x02\x02\u090E\u0910\x07" +
		"\u01C8\x02\x02\u090F\u090B\x03\x02\x02\x02\u090F\u090E\x03\x02\x02\x02" +
		"\u0910\u011B\x03\x02\x02\x02\u0911\u0913\x07\xC7\x02\x02\u0912\u0911\x03" +
		"\x02\x02\x02\u0912\u0913\x03\x02\x02\x02\u0913\u0914\x03\x02\x02\x02\u0914" +
		"\u0916\x05\u0128\x95\x02\u0915\u0917\x05\u0124\x93\x02\u0916\u0915\x03" +
		"\x02\x02\x02\u0916\u0917\x03\x02\x02\x02\u0917\u011D\x03\x02\x02\x02\u0918" +
		"\u091A\x07\xC7\x02\x02\u0919\u0918\x03\x02\x02\x02\u0919\u091A\x03\x02" +
		"\x02\x02\u091A\u091B\x03\x02\x02\x02\u091B\u091D\x05\u0128\x95\x02\u091C" +
		"\u091E\x05\u0124\x93\x02\u091D\u091C\x03\x02\x02\x02\u091D\u091E\x03\x02" +
		"\x02\x02\u091E\u011F\x03\x02\x02\x02\u091F\u0920\x05\u0128\x95\x02\u0920" +
		"\u0921\x05\u0122\x92\x02\u0921\u0121\x03\x02\x02\x02\u0922\u0923\x07\u013B" +
		"\x02\x02\u0923\u0925\x05\u0128\x95\x02\u0924\u0922\x03\x02\x02\x02\u0925" +
		"\u0926\x03\x02\x02\x02\u0926\u0924\x03\x02\x02\x02\u0926\u0927\x03\x02" +
		"\x02\x02\u0927\u092A\x03\x02\x02\x02\u0928\u092A\x03\x02\x02\x02\u0929" +
		"\u0924\x03\x02\x02\x02\u0929\u0928\x03\x02\x02\x02\u092A\u0123\x03\x02" +
		"\x02\x02\u092B\u092C\x07\u01B2\x02\x02\u092C\u092D\x05\u0126\x94\x02\u092D" +
		"\u092E\x07\u01B3\x02\x02\u092E\u0125\x03\x02\x02\x02\u092F\u0934\x05\u0128" +
		"\x95\x02\u0930\u0931\x07\u01B6\x02\x02\u0931\u0933\x05\u0128\x95\x02\u0932" +
		"\u0930\x03\x02\x02\x02\u0933\u0936\x03\x02\x02\x02\u0934\u0932\x03\x02" +
		"\x02\x02\u0934\u0935\x03\x02\x02\x02\u0935\u0127\x03\x02\x02\x02\u0936" +
		"\u0934\x03\x02\x02\x02\u0937\u093C\x05\u012C\x97\x02\u0938\u093C\x05\u012E" +
		"\x98\x02\u0939\u093C\x05\u0164\xB3\x02\u093A\u093C\x05\u012A\x96\x02\u093B" +
		"\u0937\x03\x02\x02\x02\u093B\u0938\x03\x02\x02\x02\u093B\u0939\x03\x02" +
		"\x02\x02\u093B\u093A\x03\x02\x02\x02\u093C\u0129\x03\x02\x02\x02\u093D" +
		"\u093E\x07\u01B9\x02\x02\u093E\u093F\x07\u01B4\x02\x02\u093F\u0940\x05" +
		"\u012C\x97\x02\u0940\u0941\x07\u01B5\x02\x02\u0941\u012B\x03\x02\x02\x02" +
		"\u0942\u0943\t\x1F\x02\x02\u0943\u012D\x03\x02\x02\x02\u0944\u0945\x07" +
		"\u01C8\x02\x02\u0945\u012F\x03\x02\x02\x02\u0946\u0947\x07\u0193\x02\x02" +
		"\u0947\u0948\x05\xEEx\x02\u0948\u0949\x07\u017B\x02\x02\u0949\u094A\x05" +
		"\xEEx\x02\u094A\u0131\x03\x02\x02\x02\u094B\u094C\x05\u013C\x9F\x02\u094C" +
		"\u0133\x03\x02\x02\x02\u094D\u094E\x05\u013C\x9F\x02\u094E\u0135\x03\x02" +
		"\x02\x02\u094F\u0950\x05\u013C\x9F\x02\u0950\u0137\x03\x02\x02\x02\u0951" +
		"\u0952\x05\u013C\x9F\x02\u0952\u0139\x03\x02\x02\x02\u0953\u0954\x05\u013C" +
		"\x9F\x02\u0954\u013B\x03\x02\x02\x02\u0955\u095A\x05\u0128\x95\x02\u0956" +
		"\u0957\x07\u01AF\x02\x02\u0957\u0959\x05\u0128\x95\x02\u0958\u0956\x03" +
		"\x02\x02\x02\u0959\u095C\x03\x02\x02\x02\u095A\u0958\x03\x02\x02\x02\u095A" +
		"\u095B\x03\x02\x02\x02\u095B\u013D\x03\x02\x02\x02\u095C\u095A\x03\x02" +
		"\x02\x02\u095D\u095E\x07\u0196\x02\x02\u095E\u095F\x05\u0146\xA4\x02\u095F" +
		"\u013F\x03\x02\x02\x02\u0960\u0961\x07@\x02\x02\u0961\u0962\x07\u0145" +
		"\x02\x02\u0962\u0963\x07\u0109\x02\x02\u0963\u0141\x03\x02\x02\x02\u0964" +
		"\u0965\x07@\x02\x02\u0965\u0966\x07\u0109\x02\x02\u0966\u0143\x03\x02" +
		"\x02\x02\u0967\u096A\x07\u01B2\x02\x02\u0968\u096B\x05\u0148\xA5\x02\u0969" +
		"\u096B\x05\u014A\xA6\x02\u096A\u0968\x03\x02\x02\x02\u096A\u0969\x03\x02" +
		"\x02\x02\u096B\u0973\x03\x02\x02\x02\u096C\u096F\x07\u01B6\x02\x02\u096D" +
		"\u0970\x05\u0148\xA5\x02\u096E\u0970\x05\u014A\xA6\x02\u096F\u096D\x03" +
		"\x02\x02\x02\u096F\u096E\x03\x02\x02\x02\u0970\u0972\x03\x02\x02\x02\u0971" +
		"\u096C\x03\x02\x02\x02\u0972\u0975\x03\x02\x02\x02\u0973\u0971\x03\x02" +
		"\x02\x02\u0973\u0974\x03\x02\x02\x02\u0974\u0976\x03\x02\x02\x02\u0975" +
		"\u0973\x03\x02\x02\x02\u0976\u0977\x07\u01B3\x02\x02\u0977\u0145\x03\x02" +
		"\x02\x02\u0978\u0979\x07\u01B2\x02\x02\u0979\u097E\x05\u0148\xA5\x02\u097A" +
		"\u097B\x07\u01B6\x02\x02\u097B\u097D\x05\u0148\xA5\x02\u097C\u097A\x03" +
		"\x02\x02\x02\u097D\u0980\x03\x02\x02\x02\u097E\u097C\x03\x02\x02\x02\u097E" +
		"\u097F\x03\x02\x02\x02\u097F\u0981\x03\x02\x02\x02\u0980\u097E\x03\x02" +
		"\x02\x02\u0981\u0982\x07\u01B3\x02\x02\u0982\u0147\x03\x02\x02\x02\u0983" +
		"\u0984\x05\u014A\xA6\x02\u0984\u0985\x07\u01AB\x02\x02\u0985\u0986\x05" +
		"\u014C\xA7\x02\u0986\u0149\x03\x02\x02\x02\u0987\u098B\x05\u0128\x95\x02" +
		"\u0988\u098B\x05\u010A\x86\x02\u0989\u098B\x07\u01C8\x02\x02\u098A\u0987" +
		"\x03\x02\x02\x02\u098A\u0988\x03\x02\x02\x02\u098A\u0989\x03\x02\x02\x02" +
		"\u098B\u014B\x03\x02\x02\x02\u098C\u0991\x07\u01C9\x02\x02\u098D\u0991" +
		"\x07\u01CA\x02\x02\u098E\u0991\x05\u0158\xAD\x02\u098F\u0991\x07\u01C8" +
		"\x02\x02\u0990\u098C\x03\x02\x02\x02\u0990\u098D\x03\x02\x02\x02\u0990" +
		"\u098E\x03\x02\x02\x02\u0990\u098F\x03\x02\x02\x02\u0991\u014D\x03\x02" +
		"\x02\x02\u0992\u09A1\x07\u01AB\x02\x02\u0993\u09A1\x07\u01AC\x02\x02\u0994" +
		"\u09A1\x07\u01AD\x02\x02\u0995\u0996\x07\u01AD\x02\x02\u0996\u09A1\x07" +
		"\u01AB\x02\x02\u0997\u0998\x07\u01AC\x02\x02\u0998\u09A1\x07\u01AB\x02" +
		"\x02\u0999\u099A\x07\u01AD\x02\x02\u099A\u09A1\x07\u01AC\x02\x02\u099B" +
		"\u099C\x07\u01AE\x02\x02\u099C\u09A1\x07\u01AB\x02\x02\u099D\u099E\x07" +
		"\u01AD\x02\x02\u099E\u099F\x07\u01AB\x02\x02\u099F\u09A1\x07\u01AC\x02" +
		"\x02\u09A0\u0992\x03\x02\x02\x02\u09A0\u0993\x03\x02\x02\x02\u09A0\u0994" +
		"\x03\x02\x02\x02\u09A0\u0995\x03\x02\x02\x02\u09A0\u0997\x03\x02\x02\x02" +
		"\u09A0\u0999\x03\x02\x02\x02\u09A0\u099B\x03\x02\x02\x02\u09A0\u099D\x03" +
		"\x02\x02\x02\u09A1\u014F\x03\x02\x02\x02\u09A2\u09B0\x05\u0110\x89\x02" +
		"\u09A3\u09B0\x05\u0152\xAA\x02\u09A4\u09B0\x05\u0154\xAB\x02\u09A5\u09A7" +
		"\x07\u01C0\x02\x02\u09A6\u09A5\x03\x02\x02\x02\u09A6\u09A7\x03\x02\x02" +
		"\x02\u09A7\u09A8\x03\x02\x02\x02\u09A8\u09B0\x05\u0156\xAC\x02\u09A9\u09B0" +
		"\x05\u0158\xAD\x02\u09AA\u09B0\x07\u01CA\x02\x02\u09AB\u09AD\x07\u0145" +
		"\x02\x02\u09AC\u09AB\x03\x02\x02\x02\u09AC\u09AD\x03\x02\x02\x02\u09AD" +
		"\u09AE\x03\x02\x02\x02\u09AE\u09B0\x07\u0147\x02\x02\u09AF\u09A2\x03\x02" +
		"\x02\x02\u09AF\u09A3\x03\x02\x02\x02\u09AF\u09A4\x03\x02\x02\x02\u09AF" +
		"\u09A6\x03\x02\x02\x02\u09AF\u09A9\x03\x02\x02\x02\u09AF\u09AA\x03\x02" +
		"\x02\x02\u09AF\u09AC\x03\x02\x02\x02\u09B0\u0151\x03\x02\x02\x02\u09B1" +
		"\u09B2\x05\u015C\xAF\x02\u09B2\u09B3\x05\u0154\xAB\x02\u09B3\u0153\x03" +
		"\x02\x02\x02\u09B4\u09B5\x07\u01C8\x02\x02\u09B5\u0155\x03\x02\x02\x02" +
		"\u09B6\u09B7\x07\u01C9\x02\x02\u09B7\u0157\x03\x02\x02\x02\u09B8\u09B9" +
		"\t \x02\x02\u09B9\u0159\x03\x02\x02\x02\u09BA\u09BB\t!\x02\x02\u09BB\u015B" +
		"\x03\x02\x02\x02\u09BC\u09BD\t\"\x02\x02\u09BD\u015D\x03\x02\x02\x02\u09BE" +
		"\u09BF\t#\x02\x02\u09BF\u015F\x03\x02\x02\x02\u09C0\u09C1\t$\x02\x02\u09C1" +
		"\u0161\x03\x02\x02\x02\u09C2\u09C3\t%\x02\x02\u09C3\u0163\x03\x02\x02" +
		"\x02\u09C4\u09C5\t&\x02\x02\u09C5\u0165\x03\x02\x02\x02\u09C6\u09C7\x05" +
		"N(\x02\u09C7\u09C9\x05T+\x02\u09C8\u09CA\x05z>\x02\u09C9\u09C8\x03\x02" +
		"\x02\x02\u09C9\u09CA\x03\x02\x02\x02\u09CA\u09CC\x03\x02\x02\x02\u09CB" +
		"\u09CD\x05L\'\x02\u09CC\u09CB\x03\x02\x02\x02\u09CC\u09CD\x03\x02\x02" +
		"\x02\u09CD\u09CF\x03\x02\x02\x02\u09CE\u09D0\x05\x88E\x02\u09CF\u09CE" +
		"\x03\x02\x02\x02\u09CF\u09D0\x03\x02\x02\x02\u09D0\u09D2\x03\x02\x02\x02" +
		"\u09D1\u09D3\x05\x8AF\x02\u09D2\u09D1\x03\x02\x02\x02\u09D2\u09D3\x03" +
		"\x02\x02\x02\u09D3\u09D9\x03\x02\x02\x02\u09D4\u09D5\x05N(\x02\u09D5\u09D6" +
		"\x05T+\x02\u09D6\u09D7\x05\x90I\x02\u09D7\u09D9\x03\x02\x02\x02\u09D8" +
		"\u09C6\x03\x02\x02\x02\u09D8\u09D4\x03\x02\x02\x02\u09D9\u0167\x03\x02" +
		"\x02\x02\u09DA\u09DB\x05X-\x02\u09DB\u0169\x03\x02\x02\x02\u09DC\u09DD" +
		"\x05Z.\x02\u09DD\u016B\x03\x02\x02\x02\u013B\u0171\u0173\u017C\u0186\u018B" +
		"\u018F\u0193\u019C\u01A1\u01A5\u01A9\u01AD\u01B0\u01B3\u01B6\u01B9\u01BD" +
		"\u01C1\u01CA\u01CD\u01D1\u01D5\u01D9\u01DD\u01E0\u01E3\u01E7\u01EC\u01F2" +
		"\u01FC\u0204\u020C\u0211\u0218\u021D\u0221\u0226\u022A\u022E\u0232\u0235" +
		"\u0238\u023D\u0243\u0246\u024B\u0256\u025C\u0265\u026F\u0277\u0281\u028C" +
		"\u0292\u029B\u02A4\u02AF\u02B8\u02C1\u02CA\u02D0\u02D5\u02D9\u02E8\u02FB" +
		"\u030C\u0317\u031B\u0322\u0327\u032D\u0331\u0338\u033C\u0340\u0344\u034C" +
		"\u0350\u0355\u035D\u035F\u0363\u0366\u036A\u0377\u037A\u037D\u037F\u0384" +
		"\u0388\u038B\u038F\u0398\u03A2\u03A7\u03B7\u03BC\u03C4\u03C7\u03CC\u03CF" +
		"\u03D1\u03D7\u03DF\u03E3\u03EE\u03F3\u03FB\u03FE\u0401\u0404\u0409\u040F" +
		"\u0412\u0414\u041B\u041E\u0422\u0426\u0432\u0439\u0449\u0456\u0460\u046A" +
		"\u047C\u0484\u048A\u0491\u049A\u049D\u04A7\u04AD\u04B4\u04B7\u04BC\u04C5" +
		"\u04C8\u04D2\u04D8\u04DF\u04E2\u04E7\u04F3\u04FD\u0500\u0505\u0508\u050D" +
		"\u0510\u0525\u0537\u053C\u054B\u0557\u0563\u0568\u0583\u058B\u058F\u0592" +
		"\u0595\u059C\u059F\u05A2\u05A5\u05A8\u05AB\u05B0\u05B3\u05BC\u05C1\u05C5" +
		"\u05CA\u05D3\u05E6\u05EE\u05F6\u05FA\u05FE\u0608\u0622\u062A\u0636\u0651" +
		"\u065E\u0663\u0667\u066F\u0673\u0678\u067E\u0684\u0689\u068F\u0695\u069B" +
		"\u06A0\u06A5\u06A8\u06B6\u06BB\u06BD\u06C1\u06D1\u06DA\u06E7\u06EF\u06F9" +
		"\u070E\u0715\u071B\u071E\u0721\u072B\u072E\u0736\u073A\u0742\u074A\u074E" +
		"\u0752\u0756\u075A\u075E\u0762\u0766\u076A\u076E\u0772\u0776\u077A\u077E" +
		"\u0782\u0786\u078A\u078E\u0790\u079E\u07A0\u07AB\u07AE\u07B0\u07B4\u07B8" +
		"\u07BF\u07C8\u07CE\u07DB\u07E2\u07E7\u07ED\u07F4\u07F6\u07F9\u0805\u080A" +
		"\u080D\u0813\u0815\u081B\u0830\u0832\u083A\u083E\u0847\u084B\u085B\u0864" +
		"\u087C\u0883\u0886\u0894\u0899\u08A2\u08AB\u08B1\u08BA\u08C6\u08D4\u08D9" +
		"\u08E0\u08EE\u08F3\u08F7\u08FE\u0903\u090B\u090F\u0912\u0916\u0919\u091D" +
		"\u0926\u0929\u0934\u093B\u095A\u096A\u096F\u0973\u097E\u098A\u0990\u09A0" +
		"\u09A6\u09AC\u09AF\u09C9\u09CC\u09CF\u09D2\u09D8";
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_sqlStatement; }
	public copyFrom(ctx: SqlStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class DdlPartContext extends SqlStatementContext {
	public ddlStatement(): DdlStatementContext {
		return this.getRuleContext(0, DdlStatementContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(FlinkSQLParser.SEMICOLON, 0); }
	constructor(ctx: SqlStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterDdlPart) {
			listener.enterDdlPart(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitDdlPart) {
			listener.exitDdlPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitDdlPart) {
			return visitor.visitDdlPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DmlPartContext extends SqlStatementContext {
	public dmlStatement(): DmlStatementContext {
		return this.getRuleContext(0, DmlStatementContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(FlinkSQLParser.SEMICOLON, 0); }
	constructor(ctx: SqlStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterDmlPart) {
			listener.enterDmlPart(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitDmlPart) {
			listener.exitDmlPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitDmlPart) {
			return visitor.visitDmlPart(this);
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
	public createStatement(): CreateStatementContext {
		return this.getRuleContext(0, CreateStatementContext);
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


export class CreateStatementContext extends ParserRuleContext {
	public createTable(): CreateTableContext {
		return this.getRuleContext(0, CreateTableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_createStatement; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterCreateStatement) {
			listener.enterCreateStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitCreateStatement) {
			listener.exitCreateStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitCreateStatement) {
			return visitor.visitCreateStatement(this);
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


export class CreateTableContext extends ParserRuleContext {
	public simpleCreateTable(): SimpleCreateTableContext | undefined {
		return this.tryGetRuleContext(0, SimpleCreateTableContext);
	}
	public likeCreateTable(): LikeCreateTableContext | undefined {
		return this.tryGetRuleContext(0, LikeCreateTableContext);
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
	public withOption(): WithOptionContext | undefined {
		return this.tryGetRuleContext(0, WithOptionContext);
	}
	public likeDefinition(): LikeDefinitionContext | undefined {
		return this.tryGetRuleContext(0, LikeDefinitionContext);
	}
	public distributed(): DistributedContext | undefined {
		return this.tryGetRuleContext(0, DistributedContext);
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


export class LikeCreateTableContext extends ParserRuleContext {
	public KW_CREATE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_CREATE, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_TABLE, 0); }
	public tablePathCreate(): TablePathCreateContext {
		return this.getRuleContext(0, TablePathCreateContext);
	}
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	public likeDefinition(): LikeDefinitionContext {
		return this.getRuleContext(0, LikeDefinitionContext);
	}
	public KW_TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TEMPORARY, 0); }
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	public columnOptionDefinition(): ColumnOptionDefinitionContext[];
	public columnOptionDefinition(i: number): ColumnOptionDefinitionContext;
	public columnOptionDefinition(i?: number): ColumnOptionDefinitionContext | ColumnOptionDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnOptionDefinitionContext);
		} else {
			return this.getRuleContext(i, ColumnOptionDefinitionContext);
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
	public withOption(): WithOptionContext | undefined {
		return this.tryGetRuleContext(0, WithOptionContext);
	}
	public distributed(): DistributedContext | undefined {
		return this.tryGetRuleContext(0, DistributedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_likeCreateTable; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterLikeCreateTable) {
			listener.enterLikeCreateTable(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitLikeCreateTable) {
			listener.exitLikeCreateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitLikeCreateTable) {
			return visitor.visitLikeCreateTable(this);
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
	public KW_MODIFY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_MODIFY, 0); }
	public KW_ADD(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ADD, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	public columnPosition(): ColumnPositionContext[];
	public columnPosition(i: number): ColumnPositionContext;
	public columnPosition(i?: number): ColumnPositionContext | ColumnPositionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnPositionContext);
		} else {
			return this.getRuleContext(i, ColumnPositionContext);
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
	public tableConstraint(): TableConstraintContext | undefined {
		return this.tryGetRuleContext(0, TableConstraintContext);
	}
	public watermarkDefinition(): WatermarkDefinitionContext | undefined {
		return this.tryGetRuleContext(0, WatermarkDefinitionContext);
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
	public withOption(): WithOptionContext | undefined {
		return this.tryGetRuleContext(0, WithOptionContext);
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
	public columnPosition(): ColumnPositionContext | undefined {
		return this.tryGetRuleContext(0, ColumnPositionContext);
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
export class DropDistributionContext extends AlterTableContext {
	public KW_ALTER(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_TABLE, 0); }
	public tablePath(): TablePathContext {
		return this.getRuleContext(0, TablePathContext);
	}
	public KW_DROP(): TerminalNode { return this.getToken(FlinkSQLParser.KW_DROP, 0); }
	public KW_DISTRIBUTION(): TerminalNode { return this.getToken(FlinkSQLParser.KW_DISTRIBUTION, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(ctx: AlterTableContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterDropDistribution) {
			listener.enterDropDistribution(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitDropDistribution) {
			listener.exitDropDistribution(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitDropDistribution) {
			return visitor.visitDropDistribution(this);
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
export class AddDistributionContext extends AlterTableContext {
	public KW_ALTER(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_TABLE, 0); }
	public tablePath(): TablePathContext {
		return this.getRuleContext(0, TablePathContext);
	}
	public KW_ADD(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ADD, 0); }
	public distribution(): DistributionContext {
		return this.getRuleContext(0, DistributionContext);
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
		if (listener.enterAddDistribution) {
			listener.enterAddDistribution(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitAddDistribution) {
			listener.exitAddDistribution(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitAddDistribution) {
			return visitor.visitAddDistribution(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnPositionContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return FlinkSQLParser.RULE_columnPosition; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterColumnPosition) {
			listener.enterColumnPosition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitColumnPosition) {
			listener.exitColumnPosition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitColumnPosition) {
			return visitor.visitColumnPosition(this);
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


export class AlterCatalogContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode { return this.getToken(FlinkSQLParser.KW_ALTER, 0); }
	public KW_CATALOG(): TerminalNode { return this.getToken(FlinkSQLParser.KW_CATALOG, 0); }
	public catalogPath(): CatalogPathContext {
		return this.getRuleContext(0, CatalogPathContext);
	}
	public KW_SET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SET, 0); }
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.LR_BRACKET, 0); }
	public tableProperty(): TablePropertyContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyContext);
	}
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.RR_BRACKET, 0); }
	public KW_RESET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_RESET, 0); }
	public tablePropertyKey(): TablePropertyKeyContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyKeyContext);
	}
	public KW_COMMENT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_alterCatalog; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterAlterCatalog) {
			listener.enterAlterCatalog(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitAlterCatalog) {
			listener.exitAlterCatalog(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitAlterCatalog) {
			return visitor.visitAlterCatalog(this);
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
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TABLE, 0); }
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


export class QueryStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_queryStatement; }
	public copyFrom(ctx: QueryStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class Values_caluseContext extends QueryStatementContext {
	public valuesCaluse(): ValuesCaluseContext {
		return this.getRuleContext(0, ValuesCaluseContext);
	}
	constructor(ctx: QueryStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterValues_caluse) {
			listener.enterValues_caluse(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitValues_caluse) {
			listener.exitValues_caluse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitValues_caluse) {
			return visitor.visitValues_caluse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Sub_queryContext extends QueryStatementContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public queryStatement(): QueryStatementContext {
		return this.getRuleContext(0, QueryStatementContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	constructor(ctx: QueryStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterSub_query) {
			listener.enterSub_query(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitSub_query) {
			listener.exitSub_query(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitSub_query) {
			return visitor.visitSub_query(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Union_queryContext extends QueryStatementContext {
	public _left!: QueryStatementContext;
	public _operator!: Token;
	public _right!: QueryStatementContext;
	public queryStatement(): QueryStatementContext[];
	public queryStatement(i: number): QueryStatementContext;
	public queryStatement(i?: number): QueryStatementContext | QueryStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QueryStatementContext);
		} else {
			return this.getRuleContext(i, QueryStatementContext);
		}
	}
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
	constructor(ctx: QueryStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterUnion_query) {
			listener.enterUnion_query(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitUnion_query) {
			listener.exitUnion_query(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitUnion_query) {
			return visitor.visitUnion_query(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Common_selectContext extends QueryStatementContext {
	public selectClause(): SelectClauseContext | undefined {
		return this.tryGetRuleContext(0, SelectClauseContext);
	}
	public selectStatement(): SelectStatementContext | undefined {
		return this.tryGetRuleContext(0, SelectStatementContext);
	}
	public orderByCaluse(): OrderByCaluseContext | undefined {
		return this.tryGetRuleContext(0, OrderByCaluseContext);
	}
	public limitClause(): LimitClauseContext | undefined {
		return this.tryGetRuleContext(0, LimitClauseContext);
	}
	constructor(ctx: QueryStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterCommon_select) {
			listener.enterCommon_select(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitCommon_select) {
			listener.exitCommon_select(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitCommon_select) {
			return visitor.visitCommon_select(this);
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
	public joinOp(): JoinOpContext | undefined {
		return this.tryGetRuleContext(0, JoinOpContext);
	}
	public KW_OUTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_OUTER, 0); }
	public KW_SEMI(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SEMI, 0); }
	public joinCondition(): JoinConditionContext | undefined {
		return this.tryGetRuleContext(0, JoinConditionContext);
	}
	public KW_CROSS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CROSS, 0); }
	public inlineDataValueClause(): InlineDataValueClauseContext | undefined {
		return this.tryGetRuleContext(0, InlineDataValueClauseContext);
	}
	public windowTVFClause(): WindowTVFClauseContext | undefined {
		return this.tryGetRuleContext(0, WindowTVFClauseContext);
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


export class FlinkJoinOpContext extends ParserRuleContext {
	public KW_LEFT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LEFT, 0); }
	public KW_RIGHT(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_RIGHT, 0); }
	public KW_FULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FULL, 0); }
	public KW_INNER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_INNER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_flinkJoinOp; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterFlinkJoinOp) {
			listener.enterFlinkJoinOp(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitFlinkJoinOp) {
			listener.exitFlinkJoinOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitFlinkJoinOp) {
			return visitor.visitFlinkJoinOp(this);
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
	public timePeriod(): TimePeriodContext | undefined {
		return this.tryGetRuleContext(0, TimePeriodContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_AS, 0); }
	public correlationName(): CorrelationNameContext | undefined {
		return this.tryGetRuleContext(0, CorrelationNameContext);
	}
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


export class TimePeriodContext extends ParserRuleContext {
	public KW_FOR(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FOR, 0); }
	public KW_SYSTEM_TIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SYSTEM_TIME, 0); }
	public KW_AS(): TerminalNode { return this.getToken(FlinkSQLParser.KW_AS, 0); }
	public KW_OF(): TerminalNode { return this.getToken(FlinkSQLParser.KW_OF, 0); }
	public dateTimeExpression(): DateTimeExpressionContext {
		return this.getRuleContext(0, DateTimeExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_timePeriod; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterTimePeriod) {
			listener.enterTimePeriod(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitTimePeriod) {
			listener.exitTimePeriod(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitTimePeriod) {
			return visitor.visitTimePeriod(this);
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


export class WindowTVFClauseContext extends ParserRuleContext {
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_TABLE, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public windowTVFExpression(): WindowTVFExpressionContext {
		return this.getRuleContext(0, WindowTVFExpressionContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_windowTVFClause; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterWindowTVFClause) {
			listener.enterWindowTVFClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitWindowTVFClause) {
			listener.exitWindowTVFClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitWindowTVFClause) {
			return visitor.visitWindowTVFClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowTVFExpressionContext extends ParserRuleContext {
	public tumableExpression(): TumableExpressionContext | undefined {
		return this.tryGetRuleContext(0, TumableExpressionContext);
	}
	public hopExpression(): HopExpressionContext | undefined {
		return this.tryGetRuleContext(0, HopExpressionContext);
	}
	public cumulateExpression(): CumulateExpressionContext | undefined {
		return this.tryGetRuleContext(0, CumulateExpressionContext);
	}
	public sessionExpression(): SessionExpressionContext | undefined {
		return this.tryGetRuleContext(0, SessionExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_windowTVFExpression; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterWindowTVFExpression) {
			listener.enterWindowTVFExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitWindowTVFExpression) {
			listener.exitWindowTVFExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitWindowTVFExpression) {
			return visitor.visitWindowTVFExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TumableExpressionContext extends ParserRuleContext {
	public KW_TUMBLE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_TUMBLE, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TABLE, 0); }
	public KW_DATA(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DATA, 0); }
	public DOUBLE_RIGHT_ARROW(): TerminalNode[];
	public DOUBLE_RIGHT_ARROW(i: number): TerminalNode;
	public DOUBLE_RIGHT_ARROW(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
		} else {
			return this.getToken(FlinkSQLParser.DOUBLE_RIGHT_ARROW, i);
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
	public columnDescriptor(): ColumnDescriptorContext | undefined {
		return this.tryGetRuleContext(0, ColumnDescriptorContext);
	}
	public timeIntervalExpression(): TimeIntervalExpressionContext[];
	public timeIntervalExpression(i: number): TimeIntervalExpressionContext;
	public timeIntervalExpression(i?: number): TimeIntervalExpressionContext | TimeIntervalExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TimeIntervalExpressionContext);
		} else {
			return this.getRuleContext(i, TimeIntervalExpressionContext);
		}
	}
	public KW_TIMECOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TIMECOL, 0); }
	public KW_SIZE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SIZE, 0); }
	public DOUBLE_QUOTE_SYMB(): TerminalNode[];
	public DOUBLE_QUOTE_SYMB(i: number): TerminalNode;
	public DOUBLE_QUOTE_SYMB(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.DOUBLE_QUOTE_SYMB);
		} else {
			return this.getToken(FlinkSQLParser.DOUBLE_QUOTE_SYMB, i);
		}
	}
	public KW_OFFSET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_OFFSET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_tumableExpression; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterTumableExpression) {
			listener.enterTumableExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitTumableExpression) {
			listener.exitTumableExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitTumableExpression) {
			return visitor.visitTumableExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HopExpressionContext extends ParserRuleContext {
	public KW_HOP(): TerminalNode { return this.getToken(FlinkSQLParser.KW_HOP, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TABLE, 0); }
	public KW_DATA(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DATA, 0); }
	public DOUBLE_RIGHT_ARROW(): TerminalNode[];
	public DOUBLE_RIGHT_ARROW(i: number): TerminalNode;
	public DOUBLE_RIGHT_ARROW(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
		} else {
			return this.getToken(FlinkSQLParser.DOUBLE_RIGHT_ARROW, i);
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
	public columnDescriptor(): ColumnDescriptorContext | undefined {
		return this.tryGetRuleContext(0, ColumnDescriptorContext);
	}
	public timeIntervalExpression(): TimeIntervalExpressionContext[];
	public timeIntervalExpression(i: number): TimeIntervalExpressionContext;
	public timeIntervalExpression(i?: number): TimeIntervalExpressionContext | TimeIntervalExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TimeIntervalExpressionContext);
		} else {
			return this.getRuleContext(i, TimeIntervalExpressionContext);
		}
	}
	public KW_TIMECOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TIMECOL, 0); }
	public KW_SIZE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SIZE, 0); }
	public KW_SLIDE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SLIDE, 0); }
	public DOUBLE_QUOTE_SYMB(): TerminalNode[];
	public DOUBLE_QUOTE_SYMB(i: number): TerminalNode;
	public DOUBLE_QUOTE_SYMB(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.DOUBLE_QUOTE_SYMB);
		} else {
			return this.getToken(FlinkSQLParser.DOUBLE_QUOTE_SYMB, i);
		}
	}
	public KW_OFFSET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_OFFSET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_hopExpression; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterHopExpression) {
			listener.enterHopExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitHopExpression) {
			listener.exitHopExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitHopExpression) {
			return visitor.visitHopExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CumulateExpressionContext extends ParserRuleContext {
	public KW_CUMULATE(): TerminalNode { return this.getToken(FlinkSQLParser.KW_CUMULATE, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TABLE, 0); }
	public KW_DATA(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DATA, 0); }
	public DOUBLE_RIGHT_ARROW(): TerminalNode[];
	public DOUBLE_RIGHT_ARROW(i: number): TerminalNode;
	public DOUBLE_RIGHT_ARROW(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
		} else {
			return this.getToken(FlinkSQLParser.DOUBLE_RIGHT_ARROW, i);
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
	public columnDescriptor(): ColumnDescriptorContext | undefined {
		return this.tryGetRuleContext(0, ColumnDescriptorContext);
	}
	public timeIntervalExpression(): TimeIntervalExpressionContext[];
	public timeIntervalExpression(i: number): TimeIntervalExpressionContext;
	public timeIntervalExpression(i?: number): TimeIntervalExpressionContext | TimeIntervalExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TimeIntervalExpressionContext);
		} else {
			return this.getRuleContext(i, TimeIntervalExpressionContext);
		}
	}
	public KW_TIMECOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TIMECOL, 0); }
	public KW_SIZE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SIZE, 0); }
	public KW_STEP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_STEP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_cumulateExpression; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterCumulateExpression) {
			listener.enterCumulateExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitCumulateExpression) {
			listener.exitCumulateExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitCumulateExpression) {
			return visitor.visitCumulateExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SessionExpressionContext extends ParserRuleContext {
	public KW_SESSION(): TerminalNode { return this.getToken(FlinkSQLParser.KW_SESSION, 0); }
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
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TABLE, 0); }
	public KW_DATA(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DATA, 0); }
	public DOUBLE_RIGHT_ARROW(): TerminalNode[];
	public DOUBLE_RIGHT_ARROW(i: number): TerminalNode;
	public DOUBLE_RIGHT_ARROW(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
		} else {
			return this.getToken(FlinkSQLParser.DOUBLE_RIGHT_ARROW, i);
		}
	}
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_PARTITION, 0); }
	public KW_BY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_BY, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSQLParser.COMMA);
		} else {
			return this.getToken(FlinkSQLParser.COMMA, i);
		}
	}
	public columnDescriptor(): ColumnDescriptorContext | undefined {
		return this.tryGetRuleContext(0, ColumnDescriptorContext);
	}
	public timeIntervalExpression(): TimeIntervalExpressionContext | undefined {
		return this.tryGetRuleContext(0, TimeIntervalExpressionContext);
	}
	public KW_TIMECOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TIMECOL, 0); }
	public KW_GAP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_GAP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_sessionExpression; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterSessionExpression) {
			listener.enterSessionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitSessionExpression) {
			listener.exitSessionExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitSessionExpression) {
			return visitor.visitSessionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowTVFNameContext extends ParserRuleContext {
	public KW_TUMBLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TUMBLE, 0); }
	public KW_HOP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_HOP, 0); }
	public KW_CUMULATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CUMULATE, 0); }
	public KW_SESSION(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_SESSION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_windowTVFName; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterWindowTVFName) {
			listener.enterWindowTVFName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitWindowTVFName) {
			listener.exitWindowTVFName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitWindowTVFName) {
			return visitor.visitWindowTVFName(this);
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
	public groupingSetsNotionName(): GroupingSetsNotionNameContext | undefined {
		return this.tryGetRuleContext(0, GroupingSetsNotionNameContext);
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


export class GroupingSetsNotionNameContext extends ParserRuleContext {
	public KW_CUBE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_CUBE, 0); }
	public KW_ROLLUP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_ROLLUP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_groupingSetsNotionName; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterGroupingSetsNotionName) {
			listener.enterGroupingSetsNotionName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitGroupingSetsNotionName) {
			listener.exitGroupingSetsNotionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitGroupingSetsNotionName) {
			return visitor.visitGroupingSetsNotionName(this);
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
	public patternVariablesDefinition(): PatternVariablesDefinitionContext {
		return this.getRuleContext(0, PatternVariablesDefinitionContext);
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
	public patternDefinition(): PatternDefinitionContext | undefined {
		return this.tryGetRuleContext(0, PatternDefinitionContext);
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
	public orderItemDefinition(): OrderItemDefinitionContext[];
	public orderItemDefinition(i: number): OrderItemDefinitionContext;
	public orderItemDefinition(i?: number): OrderItemDefinitionContext | OrderItemDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OrderItemDefinitionContext);
		} else {
			return this.getRuleContext(i, OrderItemDefinitionContext);
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


export class OrderItemDefinitionContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return FlinkSQLParser.RULE_orderItemDefinition; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterOrderItemDefinition) {
			listener.enterOrderItemDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitOrderItemDefinition) {
			listener.exitOrderItemDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitOrderItemDefinition) {
			return visitor.visitOrderItemDefinition(this);
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


export class PatternDefinitionContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return FlinkSQLParser.RULE_patternDefinition; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterPatternDefinition) {
			listener.enterPatternDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitPatternDefinition) {
			listener.exitPatternDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitPatternDefinition) {
			return visitor.visitPatternDefinition(this);
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


export class PatternVariablesDefinitionContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return FlinkSQLParser.RULE_patternVariablesDefinition; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterPatternVariablesDefinition) {
			listener.enterPatternVariablesDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitPatternVariablesDefinition) {
			listener.exitPatternVariablesDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitPatternVariablesDefinition) {
			return visitor.visitPatternVariablesDefinition(this);
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


export class AnalyzePartitionDefinitionContext extends ParserRuleContext {
	public KW_PARTITION(): TerminalNode { return this.getToken(FlinkSQLParser.KW_PARTITION, 0); }
	public tableCanHasKeyPropertyList(): TableCanHasKeyPropertyListContext {
		return this.getRuleContext(0, TableCanHasKeyPropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_analyzePartitionDefinition; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterAnalyzePartitionDefinition) {
			listener.enterAnalyzePartitionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitAnalyzePartitionDefinition) {
			listener.exitAnalyzePartitionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitAnalyzePartitionDefinition) {
			return visitor.visitAnalyzePartitionDefinition(this);
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


export class DistributedContext extends ParserRuleContext {
	public KW_DISTRIBUTED(): TerminalNode { return this.getToken(FlinkSQLParser.KW_DISTRIBUTED, 0); }
	public KW_BY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_BY, 0); }
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.LR_BRACKET, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.RR_BRACKET, 0); }
	public KW_INTO(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_INTO, 0); }
	public decimalLiteral(): DecimalLiteralContext | undefined {
		return this.tryGetRuleContext(0, DecimalLiteralContext);
	}
	public KW_BUCKETS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_BUCKETS, 0); }
	public KW_HASH(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_HASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_distributed; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterDistributed) {
			listener.enterDistributed(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitDistributed) {
			listener.exitDistributed(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitDistributed) {
			return visitor.visitDistributed(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DistributionContext extends ParserRuleContext {
	public KW_DISTRIBUTION(): TerminalNode { return this.getToken(FlinkSQLParser.KW_DISTRIBUTION, 0); }
	public KW_BY(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_BY, 0); }
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.LR_BRACKET, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.RR_BRACKET, 0); }
	public KW_INTO(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_INTO, 0); }
	public decimalLiteral(): DecimalLiteralContext | undefined {
		return this.tryGetRuleContext(0, DecimalLiteralContext);
	}
	public KW_BUCKETS(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_BUCKETS, 0); }
	public KW_HASH(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_HASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_distribution; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterDistribution) {
			listener.enterDistribution(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitDistribution) {
			listener.exitDistribution(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitDistribution) {
			return visitor.visitDistribution(this);
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
	public uid(): UidContext[];
	public uid(i: number): UidContext;
	public uid(i?: number): UidContext | UidContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UidContext);
		} else {
			return this.getRuleContext(i, UidContext);
		}
	}
	public timeIntervalExpression(): TimeIntervalExpressionContext | undefined {
		return this.tryGetRuleContext(0, TimeIntervalExpressionContext);
	}
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
	public DOLLAR(): TerminalNode { return this.getToken(FlinkSQLParser.DOLLAR, 0); }
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


export class TableCanHasKeyPropertyListContext extends ParserRuleContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.LR_BRACKET, 0); }
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSQLParser.RR_BRACKET, 0); }
	public tableProperty(): TablePropertyContext[];
	public tableProperty(i: number): TablePropertyContext;
	public tableProperty(i?: number): TablePropertyContext | TablePropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TablePropertyContext);
		} else {
			return this.getRuleContext(i, TablePropertyContext);
		}
	}
	public tablePropertyKey(): TablePropertyKeyContext[];
	public tablePropertyKey(i: number): TablePropertyKeyContext;
	public tablePropertyKey(i?: number): TablePropertyKeyContext | TablePropertyKeyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TablePropertyKeyContext);
		} else {
			return this.getRuleContext(i, TablePropertyKeyContext);
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
	public get ruleIndex(): number { return FlinkSQLParser.RULE_tableCanHasKeyPropertyList; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterTableCanHasKeyPropertyList) {
			listener.enterTableCanHasKeyPropertyList(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitTableCanHasKeyPropertyList) {
			listener.exitTableCanHasKeyPropertyList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitTableCanHasKeyPropertyList) {
			return visitor.visitTableCanHasKeyPropertyList(this);
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
	public tablePropertyKey(): TablePropertyKeyContext {
		return this.getRuleContext(0, TablePropertyKeyContext);
	}
	public EQUAL_SYMBOL(): TerminalNode { return this.getToken(FlinkSQLParser.EQUAL_SYMBOL, 0); }
	public tablePropertyValue(): TablePropertyValueContext {
		return this.getRuleContext(0, TablePropertyValueContext);
	}
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
	public KW_FROM_UNIXTIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_FROM_UNIXTIME, 0); }
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
	public KW_DATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_DATE, 0); }
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
	public KW_LOCALTIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_LOCALTIMESTAMP, 0); }
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
	public KW_TO_TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TO_TIMESTAMP, 0); }
	public KW_TRANSFORM(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TRANSFORM, 0); }
	public KW_TUMBLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TUMBLE, 0); }
	public KW_TYPE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_TYPE, 0); }
	public KW_UNDER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_UNDER, 0); }
	public KW_UNLOAD(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_UNLOAD, 0); }
	public KW_USAGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_USAGE, 0); }
	public KW_USE(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_USE, 0); }
	public KW_USER(): TerminalNode | undefined { return this.tryGetToken(FlinkSQLParser.KW_USER, 0); }
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


export class SelectStatementContext extends ParserRuleContext {
	public selectClause(): SelectClauseContext | undefined {
		return this.tryGetRuleContext(0, SelectClauseContext);
	}
	public fromClause(): FromClauseContext | undefined {
		return this.tryGetRuleContext(0, FromClauseContext);
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


export class JoinOpContext extends ParserRuleContext {
	public flinkJoinOp(): FlinkJoinOpContext {
		return this.getRuleContext(0, FlinkJoinOpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_joinOp; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterJoinOp) {
			listener.enterJoinOp(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitJoinOp) {
			listener.exitJoinOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitJoinOp) {
			return visitor.visitJoinOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableExpressionPlusContext extends ParserRuleContext {
	public tableReference(): TableReferenceContext {
		return this.getRuleContext(0, TableReferenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSQLParser.RULE_tableExpressionPlus; }
	// @Override
	public enterRule(listener: FlinkSQLListener): void {
		if (listener.enterTableExpressionPlus) {
			listener.enterTableExpressionPlus(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSQLListener): void {
		if (listener.exitTableExpressionPlus) {
			listener.exitTableExpressionPlus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSQLVisitor<Result>): Result {
		if (visitor.visitTableExpressionPlus) {
			return visitor.visitTableExpressionPlus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


