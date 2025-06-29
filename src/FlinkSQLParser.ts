// Generated from gen/FlinkSQL.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { FlinkSQLListener } from "./FlinkSQLListener.js";
import { FlinkSQLVisitor } from "./FlinkSQLVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class FlinkSQLParser extends antlr.Parser {
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
    public static readonly KW_RECORDWRITER = 123;
    public static readonly KW_RECORDREADER = 124;
    public static readonly KW_READ = 125;
    public static readonly KW_RELATIVE = 126;
    public static readonly KW_REMOVE = 127;
    public static readonly KW_RENAME = 128;
    public static readonly KW_REPLACE = 129;
    public static readonly KW_RESPECT = 130;
    public static readonly KW_RESTART = 131;
    public static readonly KW_RESTRICT = 132;
    public static readonly KW_ROLE = 133;
    public static readonly KW_ROW_COUNT = 134;
    public static readonly KW_SCALA = 135;
    public static readonly KW_SCALAR = 136;
    public static readonly KW_SCALE = 137;
    public static readonly KW_SCHEMA = 138;
    public static readonly KW_SECONDS = 139;
    public static readonly KW_SECTION = 140;
    public static readonly KW_SECURITY = 141;
    public static readonly KW_SELF = 142;
    public static readonly KW_SEMI = 143;
    public static readonly KW_SERVER = 144;
    public static readonly KW_SERVER_NAME = 145;
    public static readonly KW_SESSION = 146;
    public static readonly KW_SETS = 147;
    public static readonly KW_SIMPLE = 148;
    public static readonly KW_SIZE = 149;
    public static readonly KW_SLIDE = 150;
    public static readonly KW_SOURCE = 151;
    public static readonly KW_SPACE = 152;
    public static readonly KW_STATE = 153;
    public static readonly KW_STATEMENT = 154;
    public static readonly KW_STATISTICS = 155;
    public static readonly KW_STEP = 156;
    public static readonly KW_STOP = 157;
    public static readonly KW_STRING = 158;
    public static readonly KW_STRUCTURE = 159;
    public static readonly KW_STYLE = 160;
    public static readonly KW_TABLES = 161;
    public static readonly KW_TEMPORARY = 162;
    public static readonly KW_TIMECOL = 163;
    public static readonly KW_FLOOR = 164;
    public static readonly KW_TIMESTAMP_LTZ = 165;
    public static readonly KW_TIMESTAMPADD = 166;
    public static readonly KW_TIMESTAMPDIFF = 167;
    public static readonly KW_TO_TIMESTAMP = 168;
    public static readonly KW_TRANSFORM = 169;
    public static readonly KW_TUMBLE = 170;
    public static readonly KW_TYPE = 171;
    public static readonly KW_UNBOUNDED = 172;
    public static readonly KW_UNDER = 173;
    public static readonly KW_UNLOAD = 174;
    public static readonly KW_USAGE = 175;
    public static readonly KW_USE = 176;
    public static readonly KW_UTF16 = 177;
    public static readonly KW_UTF32 = 178;
    public static readonly KW_UTF8 = 179;
    public static readonly KW_VERSION = 180;
    public static readonly KW_VIEW = 181;
    public static readonly KW_VIEWS = 182;
    public static readonly KW_VIRTUAL = 183;
    public static readonly KW_WATERMARK = 184;
    public static readonly KW_WATERMARKS = 185;
    public static readonly KW_WEEK = 186;
    public static readonly KW_WEEKS = 187;
    public static readonly KW_WORK = 188;
    public static readonly KW_WRAPPER = 189;
    public static readonly KW_YEARS = 190;
    public static readonly KW_ZONE = 191;
    public static readonly KW_ABS = 192;
    public static readonly KW_ALL = 193;
    public static readonly KW_ALLOW = 194;
    public static readonly KW_ALTER = 195;
    public static readonly KW_AND = 196;
    public static readonly KW_ANY = 197;
    public static readonly KW_ARE = 198;
    public static readonly KW_ARRAY = 199;
    public static readonly KW_AS = 200;
    public static readonly KW_ASYMMETRIC = 201;
    public static readonly KW_AT = 202;
    public static readonly KW_AVG = 203;
    public static readonly KW_BEGIN = 204;
    public static readonly KW_BETWEEN = 205;
    public static readonly KW_BIGINT = 206;
    public static readonly KW_BINARY = 207;
    public static readonly KW_BIT = 208;
    public static readonly KW_BLOB = 209;
    public static readonly KW_BOOLEAN = 210;
    public static readonly KW_BOTH = 211;
    public static readonly KW_BY = 212;
    public static readonly KW_CALL = 213;
    public static readonly KW_CALLED = 214;
    public static readonly KW_CASCADED = 215;
    public static readonly KW_CASE = 216;
    public static readonly KW_CAST = 217;
    public static readonly KW_CEIL = 218;
    public static readonly KW_CHAR = 219;
    public static readonly KW_CHARACTER = 220;
    public static readonly KW_CHECK = 221;
    public static readonly KW_CLOB = 222;
    public static readonly KW_CLOSE = 223;
    public static readonly KW_CLUSTER = 224;
    public static readonly KW_COALESCE = 225;
    public static readonly KW_COLLATE = 226;
    public static readonly KW_COLLECT = 227;
    public static readonly KW_COLUMN = 228;
    public static readonly KW_COMMIT = 229;
    public static readonly KW_CONNECT = 230;
    public static readonly KW_CONSTRAINT = 231;
    public static readonly KW_CONTAINS = 232;
    public static readonly KW_CONVERT = 233;
    public static readonly KW_COUNT = 234;
    public static readonly KW_CREATE = 235;
    public static readonly KW_CROSS = 236;
    public static readonly KW_CUBE = 237;
    public static readonly KW_CUME_DIST = 238;
    public static readonly KW_CURRENT = 239;
    public static readonly KW_CURSOR = 240;
    public static readonly KW_CYCLE = 241;
    public static readonly KW_DATE = 242;
    public static readonly KW_DATETIME = 243;
    public static readonly KW_DAY = 244;
    public static readonly KW_DEC = 245;
    public static readonly KW_DECIMAL = 246;
    public static readonly KW_DECLARE = 247;
    public static readonly KW_DEFAULT = 248;
    public static readonly KW_DEFINE = 249;
    public static readonly KW_DELIMITED = 250;
    public static readonly KW_DELETE = 251;
    public static readonly KW_DESCRIBE = 252;
    public static readonly KW_DENSE_RANK = 253;
    public static readonly KW_DISTINCT = 254;
    public static readonly KW_DISTRIBUTE = 255;
    public static readonly KW_DOUBLE = 256;
    public static readonly KW_DROP = 257;
    public static readonly KW_DRAIN = 258;
    public static readonly KW_EACH = 259;
    public static readonly KW_ELSE = 260;
    public static readonly KW_END = 261;
    public static readonly KW_EQUALS = 262;
    public static readonly KW_ESCAPE = 263;
    public static readonly KW_EXCEPT = 264;
    public static readonly KW_EXECUTE = 265;
    public static readonly KW_EXISTS = 266;
    public static readonly KW_EXPLAIN = 267;
    public static readonly KW_EXTERNAL = 268;
    public static readonly KW_EXTRACT = 269;
    public static readonly KW_FIRST_VALUE = 270;
    public static readonly KW_FALSE = 271;
    public static readonly KW_FIELDS = 272;
    public static readonly KW_FLOAT = 273;
    public static readonly KW_FOR = 274;
    public static readonly KW_FROM = 275;
    public static readonly KW_FROM_UNIXTIME = 276;
    public static readonly KW_FULL = 277;
    public static readonly KW_FUNCTION = 278;
    public static readonly KW_GLOBAL = 279;
    public static readonly KW_GRANT = 280;
    public static readonly KW_GROUP = 281;
    public static readonly KW_GROUPING = 282;
    public static readonly KW_GROUPS = 283;
    public static readonly KW_HAVING = 284;
    public static readonly KW_HOUR = 285;
    public static readonly KW_IMPORT = 286;
    public static readonly KW_IN = 287;
    public static readonly KW_INCLUDING = 288;
    public static readonly KW_INNER = 289;
    public static readonly KW_INOUT = 290;
    public static readonly KW_INSERT = 291;
    public static readonly KW_INT = 292;
    public static readonly KW_INTEGER = 293;
    public static readonly KW_INTERSECT = 294;
    public static readonly KW_INTERVAL = 295;
    public static readonly KW_INTO = 296;
    public static readonly KW_IS = 297;
    public static readonly KW_JOIN = 298;
    public static readonly KW_LAG = 299;
    public static readonly KW_LANGUAGE = 300;
    public static readonly KW_LATERAL = 301;
    public static readonly KW_LAST_VALUE = 302;
    public static readonly KW_LEAD = 303;
    public static readonly KW_LEADING = 304;
    public static readonly KW_LEFT = 305;
    public static readonly KW_LIKE = 306;
    public static readonly KW_LINES = 307;
    public static readonly KW_LIMIT = 308;
    public static readonly KW_LOCAL = 309;
    public static readonly KW_LOCALTIMESTAMP = 310;
    public static readonly KW_MATCH = 311;
    public static readonly KW_MATCH_RECOGNIZE = 312;
    public static readonly KW_MEASURES = 313;
    public static readonly KW_MERGE = 314;
    public static readonly KW_METADATA = 315;
    public static readonly KW_MINUS = 316;
    public static readonly KW_MINUTE = 317;
    public static readonly KW_MODIFIES = 318;
    public static readonly KW_MODULE = 319;
    public static readonly KW_MONTH = 320;
    public static readonly KW_MULTISET = 321;
    public static readonly KW_NATURAL = 322;
    public static readonly KW_NEXT = 323;
    public static readonly KW_NO = 324;
    public static readonly KW_NONE = 325;
    public static readonly KW_NOT = 326;
    public static readonly KW_NTH_VALUE = 327;
    public static readonly KW_NTILE = 328;
    public static readonly KW_NULL = 329;
    public static readonly KW_NUMERIC = 330;
    public static readonly KW_OF = 331;
    public static readonly KW_OFFSET = 332;
    public static readonly KW_ON = 333;
    public static readonly KW_ONE = 334;
    public static readonly KW_OR = 335;
    public static readonly KW_ORDER = 336;
    public static readonly KW_OUT = 337;
    public static readonly KW_OUTER = 338;
    public static readonly KW_OVER = 339;
    public static readonly KW_OVERLAY = 340;
    public static readonly KW_PARTITION = 341;
    public static readonly KW_PATTERN = 342;
    public static readonly KW_PER = 343;
    public static readonly KW_PERCENT = 344;
    public static readonly KW_PERCENT_RANK = 345;
    public static readonly KW_PERIOD = 346;
    public static readonly KW_POSITION = 347;
    public static readonly KW_POWER = 348;
    public static readonly KW_PRIMARY = 349;
    public static readonly KW_RANGE = 350;
    public static readonly KW_ROW_NUMBER = 351;
    public static readonly KW_RANK = 352;
    public static readonly KW_RESET = 353;
    public static readonly KW_REVOKE = 354;
    public static readonly KW_RIGHT = 355;
    public static readonly KW_RLIKE = 356;
    public static readonly KW_ROLLBACK = 357;
    public static readonly KW_ROLLUP = 358;
    public static readonly KW_ROW = 359;
    public static readonly KW_ROWS = 360;
    public static readonly KW_SAVEPOINT = 361;
    public static readonly KW_SECOND = 362;
    public static readonly KW_SELECT = 363;
    public static readonly KW_SET = 364;
    public static readonly KW_SHOW = 365;
    public static readonly KW_SIMILAR = 366;
    public static readonly KW_SORT = 367;
    public static readonly KW_SKIP = 368;
    public static readonly KW_SMALLINT = 369;
    public static readonly KW_START = 370;
    public static readonly KW_STATIC = 371;
    public static readonly KW_SUBSTRING = 372;
    public static readonly KW_SUM = 373;
    public static readonly KW_SYMMETRIC = 374;
    public static readonly KW_SYSTEM = 375;
    public static readonly KW_SYSTEM_TIME = 376;
    public static readonly KW_SYSTEM_USER = 377;
    public static readonly KW_TABLE = 378;
    public static readonly KW_TABLESAMPLE = 379;
    public static readonly KW_TERMINATED = 380;
    public static readonly KW_THEN = 381;
    public static readonly KW_TIME = 382;
    public static readonly KW_TIMESTAMP = 383;
    public static readonly KW_TIMESTAMP_3 = 384;
    public static readonly KW_TIMESTAMP_6 = 385;
    public static readonly KW_TIMESTAMP_9 = 386;
    public static readonly KW_TINYINT = 387;
    public static readonly KW_TO = 388;
    public static readonly KW_TRAILING = 389;
    public static readonly KW_TRUE = 390;
    public static readonly KW_TRUNCATE = 391;
    public static readonly KW_UNION = 392;
    public static readonly KW_UNIQUE = 393;
    public static readonly KW_UNKNOWN = 394;
    public static readonly KW_UNNEST = 395;
    public static readonly KW_UPDATE = 396;
    public static readonly KW_UPPER = 397;
    public static readonly KW_UPSERT = 398;
    public static readonly KW_USER = 399;
    public static readonly KW_USING = 400;
    public static readonly KW_VALUE = 401;
    public static readonly KW_VALUES = 402;
    public static readonly KW_VARBINARY = 403;
    public static readonly KW_VARCHAR = 404;
    public static readonly KW_WHEN = 405;
    public static readonly KW_WHERE = 406;
    public static readonly KW_WINDOW = 407;
    public static readonly KW_WITH = 408;
    public static readonly KW_WITHIN = 409;
    public static readonly KW_WITHOUT = 410;
    public static readonly KW_YEAR = 411;
    public static readonly KW_MATERIALIZED = 412;
    public static readonly KW_FRESHNESS = 413;
    public static readonly KW_REFRESH_MODE = 414;
    public static readonly KW_CONTINUOUS = 415;
    public static readonly KW_SERDE = 416;
    public static readonly KW_SERDEPROPERTIES = 417;
    public static readonly KW_SUSPEND = 418;
    public static readonly KW_RESUME = 419;
    public static readonly KW_REFRESH = 420;
    public static readonly KW_DISTRIBUTED = 421;
    public static readonly KW_DISTRIBUTION = 422;
    public static readonly KW_HASH = 423;
    public static readonly KW_BUCKETS = 424;
    public static readonly BIT_NOT_OP = 425;
    public static readonly BIT_OR_OP = 426;
    public static readonly BIT_AND_OP = 427;
    public static readonly BIT_XOR_OP = 428;
    public static readonly EQUAL_SYMBOL = 429;
    public static readonly GREATER_SYMBOL = 430;
    public static readonly LESS_SYMBOL = 431;
    public static readonly EXCLAMATION_SYMBOL = 432;
    public static readonly DOT = 433;
    public static readonly LS_BRACKET = 434;
    public static readonly RS_BRACKET = 435;
    public static readonly LR_BRACKET = 436;
    public static readonly RR_BRACKET = 437;
    public static readonly LB_BRACKET = 438;
    public static readonly RB_BRACKET = 439;
    public static readonly COMMA = 440;
    public static readonly SEMICOLON = 441;
    public static readonly AT_SIGN = 442;
    public static readonly DOLLAR = 443;
    public static readonly SINGLE_QUOTE_SYMB = 444;
    public static readonly DOUBLE_QUOTE_SYMB = 445;
    public static readonly REVERSE_QUOTE_SYMB = 446;
    public static readonly COLON_SYMB = 447;
    public static readonly ASTERISK_SIGN = 448;
    public static readonly UNDERLINE_SIGN = 449;
    public static readonly HYPNEN_SIGN = 450;
    public static readonly ADD_SIGN = 451;
    public static readonly PENCENT_SIGN = 452;
    public static readonly DOUBLE_VERTICAL_SIGN = 453;
    public static readonly DOUBLE_HYPNEN_SIGN = 454;
    public static readonly SLASH_SIGN = 455;
    public static readonly QUESTION_MARK_SIGN = 456;
    public static readonly DOUBLE_RIGHT_ARROW = 457;
    public static readonly STRING_LITERAL = 458;
    public static readonly DIG_LITERAL = 459;
    public static readonly REAL_LITERAL = 460;
    public static readonly ID_LITERAL = 461;
    public static readonly RULE_statement = 0;
    public static readonly RULE_sqlStatements = 1;
    public static readonly RULE_sqlStatement = 2;
    public static readonly RULE_emptyStatement = 3;
    public static readonly RULE_ddlStatement = 4;
    public static readonly RULE_createStatement = 5;
    public static readonly RULE_dmlStatement = 6;
    public static readonly RULE_simpleCreateTable = 7;
    public static readonly RULE_likeCreateTable = 8;
    public static readonly RULE_createTableAsSelect = 9;
    public static readonly RULE_usingClause = 10;
    public static readonly RULE_jarFileName = 11;
    public static readonly RULE_alterTable = 12;
    public static readonly RULE_columnPosition = 13;
    public static readonly RULE_renameDefinition = 14;
    public static readonly RULE_setKeyValueDefinition = 15;
    public static readonly RULE_addConstraint = 16;
    public static readonly RULE_dropConstraint = 17;
    public static readonly RULE_addUnique = 18;
    public static readonly RULE_notForced = 19;
    public static readonly RULE_alertView = 20;
    public static readonly RULE_alterCatalog = 21;
    public static readonly RULE_alterDatabase = 22;
    public static readonly RULE_alterFunction = 23;
    public static readonly RULE_dropCatalog = 24;
    public static readonly RULE_dropTable = 25;
    public static readonly RULE_dropDatabase = 26;
    public static readonly RULE_dropView = 27;
    public static readonly RULE_dropFunction = 28;
    public static readonly RULE_insertSimpleStatement = 29;
    public static readonly RULE_insertPartitionDefinition = 30;
    public static readonly RULE_queryStatement = 31;
    public static readonly RULE_valuesCaluse = 32;
    public static readonly RULE_withItem = 33;
    public static readonly RULE_withItemName = 34;
    public static readonly RULE_groupByClause = 35;
    public static readonly RULE_fromClause = 36;
    public static readonly RULE_tableReference = 37;
    public static readonly RULE_flinkJoinOp = 38;
    public static readonly RULE_tablePrimary = 39;
    public static readonly RULE_timePeriod = 40;
    public static readonly RULE_dateTimeExpression = 41;
    public static readonly RULE_inlineDataValueClause = 42;
    public static readonly RULE_windowTVFClause = 43;
    public static readonly RULE_windowTVFExpression = 44;
    public static readonly RULE_tumableExpression = 45;
    public static readonly RULE_hopExpression = 46;
    public static readonly RULE_cumulateExpression = 47;
    public static readonly RULE_sessionExpression = 48;
    public static readonly RULE_windowTVFName = 49;
    public static readonly RULE_windowTVFParam = 50;
    public static readonly RULE_timeIntervalParamName = 51;
    public static readonly RULE_columnDescriptor = 52;
    public static readonly RULE_joinCondition = 53;
    public static readonly RULE_whereClause = 54;
    public static readonly RULE_groupItemDefinition = 55;
    public static readonly RULE_groupingSet = 56;
    public static readonly RULE_groupingSets = 57;
    public static readonly RULE_groupingSetsNotionName = 58;
    public static readonly RULE_groupWindowFunction = 59;
    public static readonly RULE_groupWindowFunctionName = 60;
    public static readonly RULE_timeAttrColumn = 61;
    public static readonly RULE_havingClause = 62;
    public static readonly RULE_windowClause = 63;
    public static readonly RULE_namedWindow = 64;
    public static readonly RULE_windowSpec = 65;
    public static readonly RULE_matchRecognizeClause = 66;
    public static readonly RULE_orderByCaluse = 67;
    public static readonly RULE_orderItemDefinition = 68;
    public static readonly RULE_limitClause = 69;
    public static readonly RULE_partitionByClause = 70;
    public static readonly RULE_quantifiers = 71;
    public static readonly RULE_measuresClause = 72;
    public static readonly RULE_patternDefinition = 73;
    public static readonly RULE_patternVariable = 74;
    public static readonly RULE_outputMode = 75;
    public static readonly RULE_afterMatchStrategy = 76;
    public static readonly RULE_patternVariablesDefinition = 77;
    public static readonly RULE_windowFrame = 78;
    public static readonly RULE_frameBound = 79;
    public static readonly RULE_withinClause = 80;
    public static readonly RULE_analyzePartitionDefinition = 81;
    public static readonly RULE_selfDefinitionClause = 82;
    public static readonly RULE_partitionDefinition = 83;
    public static readonly RULE_transformList = 84;
    public static readonly RULE_transform = 85;
    public static readonly RULE_transformArgument = 86;
    public static readonly RULE_likeDefinition = 87;
    public static readonly RULE_distributed = 88;
    public static readonly RULE_distribution = 89;
    public static readonly RULE_likeOption = 90;
    public static readonly RULE_columnOptionDefinition = 91;
    public static readonly RULE_physicalColumnDefinition = 92;
    public static readonly RULE_computedColumnExpression = 93;
    public static readonly RULE_watermarkDefinition = 94;
    public static readonly RULE_tableConstraint = 95;
    public static readonly RULE_constraintName = 96;
    public static readonly RULE_valuesDefinition = 97;
    public static readonly RULE_valuesRowDefinition = 98;
    public static readonly RULE_lengthOneDimension = 99;
    public static readonly RULE_lengthTwoOptionalDimension = 100;
    public static readonly RULE_lengthTwoStringDimension = 101;
    public static readonly RULE_lengthOneTypeDimension = 102;
    public static readonly RULE_mapTypeDimension = 103;
    public static readonly RULE_rowTypeDimension = 104;
    public static readonly RULE_columnConstraint = 105;
    public static readonly RULE_commentSpec = 106;
    public static readonly RULE_metadataColumnDefinition = 107;
    public static readonly RULE_metadataKey = 108;
    public static readonly RULE_computedColumnDefinition = 109;
    public static readonly RULE_columnName = 110;
    public static readonly RULE_columnNameList = 111;
    public static readonly RULE_columnType = 112;
    public static readonly RULE_expression = 113;
    public static readonly RULE_booleanExpression = 114;
    public static readonly RULE_predicate = 115;
    public static readonly RULE_likePredicate = 116;
    public static readonly RULE_valueExpression = 117;
    public static readonly RULE_primaryExpression = 118;
    public static readonly RULE_complexDataTypeExpression = 119;
    public static readonly RULE_arrayExpression = 120;
    public static readonly RULE_rowExpression = 121;
    public static readonly RULE_mapExpression = 122;
    public static readonly RULE_dataTypeExpression = 123;
    public static readonly RULE_functionName = 124;
    public static readonly RULE_functionParam = 125;
    public static readonly RULE_filterClause = 126;
    public static readonly RULE_dereferenceDefinition = 127;
    public static readonly RULE_correlationName = 128;
    public static readonly RULE_qualifiedName = 129;
    public static readonly RULE_timeIntervalExpression = 130;
    public static readonly RULE_errorCapturingMultiUnitsInterval = 131;
    public static readonly RULE_multiUnitsInterval = 132;
    public static readonly RULE_errorCapturingUnitToUnitInterval = 133;
    public static readonly RULE_unitToUnitInterval = 134;
    public static readonly RULE_intervalValue = 135;
    public static readonly RULE_columnAlias = 136;
    public static readonly RULE_tableAlias = 137;
    public static readonly RULE_errorCapturingIdentifier = 138;
    public static readonly RULE_errorCapturingIdentifierExtra = 139;
    public static readonly RULE_identifierList = 140;
    public static readonly RULE_identifierSeq = 141;
    public static readonly RULE_identifier = 142;
    public static readonly RULE_refVar = 143;
    public static readonly RULE_unquotedIdentifier = 144;
    public static readonly RULE_quotedIdentifier = 145;
    public static readonly RULE_whenClause = 146;
    public static readonly RULE_catalogPath = 147;
    public static readonly RULE_databasePath = 148;
    public static readonly RULE_databasePathCreate = 149;
    public static readonly RULE_tablePathCreate = 150;
    public static readonly RULE_tablePath = 151;
    public static readonly RULE_uid = 152;
    public static readonly RULE_withOption = 153;
    public static readonly RULE_ifNotExists = 154;
    public static readonly RULE_ifExists = 155;
    public static readonly RULE_tableCanHasKeyPropertyList = 156;
    public static readonly RULE_tablePropertyList = 157;
    public static readonly RULE_tableProperty = 158;
    public static readonly RULE_tablePropertyKey = 159;
    public static readonly RULE_tablePropertyValue = 160;
    public static readonly RULE_comparisonOperator = 161;
    public static readonly RULE_constant = 162;
    public static readonly RULE_timePointLiteral = 163;
    public static readonly RULE_stringLiteral = 164;
    public static readonly RULE_decimalLiteral = 165;
    public static readonly RULE_booleanLiteral = 166;
    public static readonly RULE_setQuantifier = 167;
    public static readonly RULE_timePointUnit = 168;
    public static readonly RULE_timeIntervalUnit = 169;
    public static readonly RULE_reservedKeywordsUsedAsFuncParam = 170;
    public static readonly RULE_reservedKeywordsUsedAsFuncName = 171;
    public static readonly RULE_nonReservedKeywords = 172;
    public static readonly RULE_projectItemDefinition = 173;
    public static readonly RULE_selectStatement = 174;
    public static readonly RULE_selectClause = 175;
    public static readonly RULE_insertStatement = 176;
    public static readonly RULE_joinOp = 177;
    public static readonly RULE_tableExpression = 178;
    public static readonly RULE_createTable = 179;
    public static readonly RULE_overWindowItem = 180;

    public static readonly literalNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, "'~'", "'|'", "'&'", "'^'", 
        "'='", "'>'", "'<'", "'!'", "'.'", "'['", "']'", "'('", "')'", "'{'", 
        "'}'", "','", "';'", "'@'", "'$'", "'''", "'\"'", "'`'", "':'", 
        "'*'", "'_'", "'-'", "'+'", "'%'", null, null, "'/'", "'?'"
    ];

    public static readonly symbolicNames = [
        null, "SPACE", "COMMENT_INPUT", "LINE_COMMENT", "KW_ADD", "KW_ADMIN", 
        "KW_AFTER", "KW_ANALYZE", "KW_ASC", "KW_BEFORE", "KW_BYTES", "KW_CASCADE", 
        "KW_CATALOG", "KW_CATALOGS", "KW_CENTURY", "KW_CHAIN", "KW_CHANGELOG_MODE", 
        "KW_CHARACTERS", "KW_COMMENT", "KW_COMPACT", "KW_COMPUTE", "KW_COLUMNS", 
        "KW_CONSTRAINTS", "KW_CONSTRUCTOR", "KW_CUMULATE", "KW_DATA", "KW_DATABASE", 
        "KW_DATABASES", "KW_DAYS", "KW_DECADE", "KW_DEFINED", "KW_DESC", 
        "KW_DESCRIPTOR", "KW_DIV", "KW_ENCODING", "KW_ENFORCED", "KW_ENGINE", 
        "KW_EPOCH", "KW_ERROR", "KW_ESTIMATED_COST", "KW_EXCEPTION", "KW_EXCLUDE", 
        "KW_EXCLUDING", "KW_EXTENDED", "KW_FILTER", "KW_FILE", "KW_FINAL", 
        "KW_FIRST", "KW_FOLLOWING", "KW_FORMAT", "KW_FORTRAN", "KW_FOUND", 
        "KW_FRAC_SECOND", "KW_FUNCTIONS", "KW_GENERAL", "KW_GENERATED", 
        "KW_GAP", "KW_GO", "KW_GOTO", "KW_GRANTED", "KW_HOP", "KW_HOURS", 
        "KW_IF", "KW_IGNORE", "KW_INCREMENT", "KW_INPUT", "KW_INVOKER", 
        "KW_JAR", "KW_JARS", "KW_JAVA", "KW_JSON", "KW_JOB", "KW_JOBS", 
        "KW_JSON_EXECUTION_PLAN", "KW_KEY", "KW_KEY_MEMBER", "KW_KEY_TYPE", 
        "KW_LABEL", "KW_LAST", "KW_LENGTH", "KW_LEVEL", "KW_LOAD", "KW_MAP", 
        "KW_MICROSECOND", "KW_MILLENNIUM", "KW_MILLISECOND", "KW_MINUTES", 
        "KW_MINVALUE", "KW_MODIFY", "KW_MODULES", "KW_MONTHS", "KW_NANOSECOND", 
        "KW_NULLS", "KW_NUMBER", "KW_OPTION", "KW_OPTIONS", "KW_ORDERING", 
        "KW_OUTPUT", "KW_OVERWRITE", "KW_OVERWRITING", "KW_PARTITIONED", 
        "KW_PARTITIONS", "KW_PASSING", "KW_PAST", "KW_PATH", "KW_PLACING", 
        "KW_PLAN", "KW_PLAN_ADVICE", "KW_PRECEDING", "KW_PRESERVE", "KW_PRIOR", 
        "KW_PROCEDURES", "KW_PRIVILEGES", "KW_PUBLIC", "KW_PYTHON", "KW_PYTHON_FILES", 
        "KW_PYTHON_REQUIREMENTS", "KW_PYTHON_DEPENDENCIES", "KW_PYTHON_JAR", 
        "KW_PYTHON_ARCHIVES", "KW_PYTHON_PARAMETER", "KW_QUARTER", "KW_RAW", 
        "KW_RECORDWRITER", "KW_RECORDREADER", "KW_READ", "KW_RELATIVE", 
        "KW_REMOVE", "KW_RENAME", "KW_REPLACE", "KW_RESPECT", "KW_RESTART", 
        "KW_RESTRICT", "KW_ROLE", "KW_ROW_COUNT", "KW_SCALA", "KW_SCALAR", 
        "KW_SCALE", "KW_SCHEMA", "KW_SECONDS", "KW_SECTION", "KW_SECURITY", 
        "KW_SELF", "KW_SEMI", "KW_SERVER", "KW_SERVER_NAME", "KW_SESSION", 
        "KW_SETS", "KW_SIMPLE", "KW_SIZE", "KW_SLIDE", "KW_SOURCE", "KW_SPACE", 
        "KW_STATE", "KW_STATEMENT", "KW_STATISTICS", "KW_STEP", "KW_STOP", 
        "KW_STRING", "KW_STRUCTURE", "KW_STYLE", "KW_TABLES", "KW_TEMPORARY", 
        "KW_TIMECOL", "KW_FLOOR", "KW_TIMESTAMP_LTZ", "KW_TIMESTAMPADD", 
        "KW_TIMESTAMPDIFF", "KW_TO_TIMESTAMP", "KW_TRANSFORM", "KW_TUMBLE", 
        "KW_TYPE", "KW_UNBOUNDED", "KW_UNDER", "KW_UNLOAD", "KW_USAGE", 
        "KW_USE", "KW_UTF16", "KW_UTF32", "KW_UTF8", "KW_VERSION", "KW_VIEW", 
        "KW_VIEWS", "KW_VIRTUAL", "KW_WATERMARK", "KW_WATERMARKS", "KW_WEEK", 
        "KW_WEEKS", "KW_WORK", "KW_WRAPPER", "KW_YEARS", "KW_ZONE", "KW_ABS", 
        "KW_ALL", "KW_ALLOW", "KW_ALTER", "KW_AND", "KW_ANY", "KW_ARE", 
        "KW_ARRAY", "KW_AS", "KW_ASYMMETRIC", "KW_AT", "KW_AVG", "KW_BEGIN", 
        "KW_BETWEEN", "KW_BIGINT", "KW_BINARY", "KW_BIT", "KW_BLOB", "KW_BOOLEAN", 
        "KW_BOTH", "KW_BY", "KW_CALL", "KW_CALLED", "KW_CASCADED", "KW_CASE", 
        "KW_CAST", "KW_CEIL", "KW_CHAR", "KW_CHARACTER", "KW_CHECK", "KW_CLOB", 
        "KW_CLOSE", "KW_CLUSTER", "KW_COALESCE", "KW_COLLATE", "KW_COLLECT", 
        "KW_COLUMN", "KW_COMMIT", "KW_CONNECT", "KW_CONSTRAINT", "KW_CONTAINS", 
        "KW_CONVERT", "KW_COUNT", "KW_CREATE", "KW_CROSS", "KW_CUBE", "KW_CUME_DIST", 
        "KW_CURRENT", "KW_CURSOR", "KW_CYCLE", "KW_DATE", "KW_DATETIME", 
        "KW_DAY", "KW_DEC", "KW_DECIMAL", "KW_DECLARE", "KW_DEFAULT", "KW_DEFINE", 
        "KW_DELIMITED", "KW_DELETE", "KW_DESCRIBE", "KW_DENSE_RANK", "KW_DISTINCT", 
        "KW_DISTRIBUTE", "KW_DOUBLE", "KW_DROP", "KW_DRAIN", "KW_EACH", 
        "KW_ELSE", "KW_END", "KW_EQUALS", "KW_ESCAPE", "KW_EXCEPT", "KW_EXECUTE", 
        "KW_EXISTS", "KW_EXPLAIN", "KW_EXTERNAL", "KW_EXTRACT", "KW_FIRST_VALUE", 
        "KW_FALSE", "KW_FIELDS", "KW_FLOAT", "KW_FOR", "KW_FROM", "KW_FROM_UNIXTIME", 
        "KW_FULL", "KW_FUNCTION", "KW_GLOBAL", "KW_GRANT", "KW_GROUP", "KW_GROUPING", 
        "KW_GROUPS", "KW_HAVING", "KW_HOUR", "KW_IMPORT", "KW_IN", "KW_INCLUDING", 
        "KW_INNER", "KW_INOUT", "KW_INSERT", "KW_INT", "KW_INTEGER", "KW_INTERSECT", 
        "KW_INTERVAL", "KW_INTO", "KW_IS", "KW_JOIN", "KW_LAG", "KW_LANGUAGE", 
        "KW_LATERAL", "KW_LAST_VALUE", "KW_LEAD", "KW_LEADING", "KW_LEFT", 
        "KW_LIKE", "KW_LINES", "KW_LIMIT", "KW_LOCAL", "KW_LOCALTIMESTAMP", 
        "KW_MATCH", "KW_MATCH_RECOGNIZE", "KW_MEASURES", "KW_MERGE", "KW_METADATA", 
        "KW_MINUS", "KW_MINUTE", "KW_MODIFIES", "KW_MODULE", "KW_MONTH", 
        "KW_MULTISET", "KW_NATURAL", "KW_NEXT", "KW_NO", "KW_NONE", "KW_NOT", 
        "KW_NTH_VALUE", "KW_NTILE", "KW_NULL", "KW_NUMERIC", "KW_OF", "KW_OFFSET", 
        "KW_ON", "KW_ONE", "KW_OR", "KW_ORDER", "KW_OUT", "KW_OUTER", "KW_OVER", 
        "KW_OVERLAY", "KW_PARTITION", "KW_PATTERN", "KW_PER", "KW_PERCENT", 
        "KW_PERCENT_RANK", "KW_PERIOD", "KW_POSITION", "KW_POWER", "KW_PRIMARY", 
        "KW_RANGE", "KW_ROW_NUMBER", "KW_RANK", "KW_RESET", "KW_REVOKE", 
        "KW_RIGHT", "KW_RLIKE", "KW_ROLLBACK", "KW_ROLLUP", "KW_ROW", "KW_ROWS", 
        "KW_SAVEPOINT", "KW_SECOND", "KW_SELECT", "KW_SET", "KW_SHOW", "KW_SIMILAR", 
        "KW_SORT", "KW_SKIP", "KW_SMALLINT", "KW_START", "KW_STATIC", "KW_SUBSTRING", 
        "KW_SUM", "KW_SYMMETRIC", "KW_SYSTEM", "KW_SYSTEM_TIME", "KW_SYSTEM_USER", 
        "KW_TABLE", "KW_TABLESAMPLE", "KW_TERMINATED", "KW_THEN", "KW_TIME", 
        "KW_TIMESTAMP", "KW_TIMESTAMP_3", "KW_TIMESTAMP_6", "KW_TIMESTAMP_9", 
        "KW_TINYINT", "KW_TO", "KW_TRAILING", "KW_TRUE", "KW_TRUNCATE", 
        "KW_UNION", "KW_UNIQUE", "KW_UNKNOWN", "KW_UNNEST", "KW_UPDATE", 
        "KW_UPPER", "KW_UPSERT", "KW_USER", "KW_USING", "KW_VALUE", "KW_VALUES", 
        "KW_VARBINARY", "KW_VARCHAR", "KW_WHEN", "KW_WHERE", "KW_WINDOW", 
        "KW_WITH", "KW_WITHIN", "KW_WITHOUT", "KW_YEAR", "KW_MATERIALIZED", 
        "KW_FRESHNESS", "KW_REFRESH_MODE", "KW_CONTINUOUS", "KW_SERDE", 
        "KW_SERDEPROPERTIES", "KW_SUSPEND", "KW_RESUME", "KW_REFRESH", "KW_DISTRIBUTED", 
        "KW_DISTRIBUTION", "KW_HASH", "KW_BUCKETS", "BIT_NOT_OP", "BIT_OR_OP", 
        "BIT_AND_OP", "BIT_XOR_OP", "EQUAL_SYMBOL", "GREATER_SYMBOL", "LESS_SYMBOL", 
        "EXCLAMATION_SYMBOL", "DOT", "LS_BRACKET", "RS_BRACKET", "LR_BRACKET", 
        "RR_BRACKET", "LB_BRACKET", "RB_BRACKET", "COMMA", "SEMICOLON", 
        "AT_SIGN", "DOLLAR", "SINGLE_QUOTE_SYMB", "DOUBLE_QUOTE_SYMB", "REVERSE_QUOTE_SYMB", 
        "COLON_SYMB", "ASTERISK_SIGN", "UNDERLINE_SIGN", "HYPNEN_SIGN", 
        "ADD_SIGN", "PENCENT_SIGN", "DOUBLE_VERTICAL_SIGN", "DOUBLE_HYPNEN_SIGN", 
        "SLASH_SIGN", "QUESTION_MARK_SIGN", "DOUBLE_RIGHT_ARROW", "STRING_LITERAL", 
        "DIG_LITERAL", "REAL_LITERAL", "ID_LITERAL"
    ];
    public static readonly ruleNames = [
        "statement", "sqlStatements", "sqlStatement", "emptyStatement", 
        "ddlStatement", "createStatement", "dmlStatement", "simpleCreateTable", 
        "likeCreateTable", "createTableAsSelect", "usingClause", "jarFileName", 
        "alterTable", "columnPosition", "renameDefinition", "setKeyValueDefinition", 
        "addConstraint", "dropConstraint", "addUnique", "notForced", "alertView", 
        "alterCatalog", "alterDatabase", "alterFunction", "dropCatalog", 
        "dropTable", "dropDatabase", "dropView", "dropFunction", "insertSimpleStatement", 
        "insertPartitionDefinition", "queryStatement", "valuesCaluse", "withItem", 
        "withItemName", "groupByClause", "fromClause", "tableReference", 
        "flinkJoinOp", "tablePrimary", "timePeriod", "dateTimeExpression", 
        "inlineDataValueClause", "windowTVFClause", "windowTVFExpression", 
        "tumableExpression", "hopExpression", "cumulateExpression", "sessionExpression", 
        "windowTVFName", "windowTVFParam", "timeIntervalParamName", "columnDescriptor", 
        "joinCondition", "whereClause", "groupItemDefinition", "groupingSet", 
        "groupingSets", "groupingSetsNotionName", "groupWindowFunction", 
        "groupWindowFunctionName", "timeAttrColumn", "havingClause", "windowClause", 
        "namedWindow", "windowSpec", "matchRecognizeClause", "orderByCaluse", 
        "orderItemDefinition", "limitClause", "partitionByClause", "quantifiers", 
        "measuresClause", "patternDefinition", "patternVariable", "outputMode", 
        "afterMatchStrategy", "patternVariablesDefinition", "windowFrame", 
        "frameBound", "withinClause", "analyzePartitionDefinition", "selfDefinitionClause", 
        "partitionDefinition", "transformList", "transform", "transformArgument", 
        "likeDefinition", "distributed", "distribution", "likeOption", "columnOptionDefinition", 
        "physicalColumnDefinition", "computedColumnExpression", "watermarkDefinition", 
        "tableConstraint", "constraintName", "valuesDefinition", "valuesRowDefinition", 
        "lengthOneDimension", "lengthTwoOptionalDimension", "lengthTwoStringDimension", 
        "lengthOneTypeDimension", "mapTypeDimension", "rowTypeDimension", 
        "columnConstraint", "commentSpec", "metadataColumnDefinition", "metadataKey", 
        "computedColumnDefinition", "columnName", "columnNameList", "columnType", 
        "expression", "booleanExpression", "predicate", "likePredicate", 
        "valueExpression", "primaryExpression", "complexDataTypeExpression", 
        "arrayExpression", "rowExpression", "mapExpression", "dataTypeExpression", 
        "functionName", "functionParam", "filterClause", "dereferenceDefinition", 
        "correlationName", "qualifiedName", "timeIntervalExpression", "errorCapturingMultiUnitsInterval", 
        "multiUnitsInterval", "errorCapturingUnitToUnitInterval", "unitToUnitInterval", 
        "intervalValue", "columnAlias", "tableAlias", "errorCapturingIdentifier", 
        "errorCapturingIdentifierExtra", "identifierList", "identifierSeq", 
        "identifier", "refVar", "unquotedIdentifier", "quotedIdentifier", 
        "whenClause", "catalogPath", "databasePath", "databasePathCreate", 
        "tablePathCreate", "tablePath", "uid", "withOption", "ifNotExists", 
        "ifExists", "tableCanHasKeyPropertyList", "tablePropertyList", "tableProperty", 
        "tablePropertyKey", "tablePropertyValue", "comparisonOperator", 
        "constant", "timePointLiteral", "stringLiteral", "decimalLiteral", 
        "booleanLiteral", "setQuantifier", "timePointUnit", "timeIntervalUnit", 
        "reservedKeywordsUsedAsFuncParam", "reservedKeywordsUsedAsFuncName", 
        "nonReservedKeywords", "projectItemDefinition", "selectStatement", 
        "selectClause", "insertStatement", "joinOp", "tableExpression", 
        "createTable", "overWindowItem",
    ];

    public get grammarFileName(): string { return "FlinkSQL.g4"; }
    public get literalNames(): (string | null)[] { return FlinkSQLParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return FlinkSQLParser.symbolicNames; }
    public get ruleNames(): string[] { return FlinkSQLParser.ruleNames; }
    public get serializedATN(): number[] { return FlinkSQLParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, FlinkSQLParser._ATN, FlinkSQLParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 0, FlinkSQLParser.RULE_statement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 362;
            this.sqlStatements();
            this.state = 363;
            this.match(FlinkSQLParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sqlStatements(): SqlStatementsContext {
        let localContext = new SqlStatementsContext(this.context, this.state);
        this.enterRule(localContext, 2, FlinkSQLParser.RULE_sqlStatements);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 369;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 235 || _la === 265 || _la === 291 || _la === 363 || _la === 402 || _la === 436 || _la === 441) {
                {
                this.state = 367;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
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
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 371;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sqlStatement(): SqlStatementContext {
        let localContext = new SqlStatementContext(this.context, this.state);
        this.enterRule(localContext, 4, FlinkSQLParser.RULE_sqlStatement);
        try {
            this.state = 378;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSQLParser.KW_CREATE:
                localContext = new DdlPartContext(localContext);
                this.enterOuterAlt(localContext, 1);
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
                localContext = new DmlPartContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 375;
                this.dmlStatement();
                this.state = 376;
                this.match(FlinkSQLParser.SEMICOLON);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public emptyStatement(): EmptyStatementContext {
        let localContext = new EmptyStatementContext(this.context, this.state);
        this.enterRule(localContext, 6, FlinkSQLParser.RULE_emptyStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 380;
            this.match(FlinkSQLParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ddlStatement(): DdlStatementContext {
        let localContext = new DdlStatementContext(this.context, this.state);
        this.enterRule(localContext, 8, FlinkSQLParser.RULE_ddlStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 382;
            this.createStatement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public createStatement(): CreateStatementContext {
        let localContext = new CreateStatementContext(this.context, this.state);
        this.enterRule(localContext, 10, FlinkSQLParser.RULE_createStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 384;
            this.createTable();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dmlStatement(): DmlStatementContext {
        let localContext = new DmlStatementContext(this.context, this.state);
        this.enterRule(localContext, 12, FlinkSQLParser.RULE_dmlStatement);
        try {
            this.state = 388;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSQLParser.KW_SELECT:
            case FlinkSQLParser.KW_VALUES:
            case FlinkSQLParser.LR_BRACKET:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 386;
                this.queryStatement(0);
                }
                break;
            case FlinkSQLParser.KW_EXECUTE:
            case FlinkSQLParser.KW_INSERT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 387;
                this.insertStatement();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public simpleCreateTable(): SimpleCreateTableContext {
        let localContext = new SimpleCreateTableContext(this.context, this.state);
        this.enterRule(localContext, 14, FlinkSQLParser.RULE_simpleCreateTable);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 390;
            this.match(FlinkSQLParser.KW_CREATE);
            this.state = 392;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 162) {
                {
                this.state = 391;
                this.match(FlinkSQLParser.KW_TEMPORARY);
                }
            }

            this.state = 394;
            this.match(FlinkSQLParser.KW_TABLE);
            this.state = 396;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
            case 1:
                {
                this.state = 395;
                this.ifNotExists();
                }
                break;
            }
            this.state = 398;
            this.tablePathCreate();
            this.state = 399;
            this.match(FlinkSQLParser.LR_BRACKET);
            this.state = 400;
            this.columnOptionDefinition();
            this.state = 405;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 401;
                    this.match(FlinkSQLParser.COMMA);
                    this.state = 402;
                    this.columnOptionDefinition();
                    }
                    }
                }
                this.state = 407;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
            }
            this.state = 410;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
            case 1:
                {
                this.state = 408;
                this.match(FlinkSQLParser.COMMA);
                this.state = 409;
                this.watermarkDefinition();
                }
                break;
            }
            this.state = 414;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 8, this.context) ) {
            case 1:
                {
                this.state = 412;
                this.match(FlinkSQLParser.COMMA);
                this.state = 413;
                this.tableConstraint();
                }
                break;
            }
            this.state = 418;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 440) {
                {
                this.state = 416;
                this.match(FlinkSQLParser.COMMA);
                this.state = 417;
                this.selfDefinitionClause();
                }
            }

            this.state = 420;
            this.match(FlinkSQLParser.RR_BRACKET);
            this.state = 422;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 18) {
                {
                this.state = 421;
                this.commentSpec();
                }
            }

            this.state = 425;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 100) {
                {
                this.state = 424;
                this.partitionDefinition();
                }
            }

            this.state = 428;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 408) {
                {
                this.state = 427;
                this.withOption();
                }
            }

            this.state = 431;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 306) {
                {
                this.state = 430;
                this.likeDefinition();
                }
            }

            this.state = 434;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 421) {
                {
                this.state = 433;
                this.distributed();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public likeCreateTable(): LikeCreateTableContext {
        let localContext = new LikeCreateTableContext(this.context, this.state);
        this.enterRule(localContext, 16, FlinkSQLParser.RULE_likeCreateTable);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 436;
            this.match(FlinkSQLParser.KW_CREATE);
            this.state = 438;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 162) {
                {
                this.state = 437;
                this.match(FlinkSQLParser.KW_TEMPORARY);
                }
            }

            this.state = 440;
            this.match(FlinkSQLParser.KW_TABLE);
            this.state = 442;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 16, this.context) ) {
            case 1:
                {
                this.state = 441;
                this.ifNotExists();
                }
                break;
            }
            this.state = 444;
            this.tablePathCreate();
            this.state = 445;
            this.match(FlinkSQLParser.LR_BRACKET);
            this.state = 454;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4293918704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4278185951) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294966911) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 3892279295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 3623845887) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 4160745471) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & 117442689) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & 655877) !== 0) || ((((_la - 266)) & ~0x1F) === 0 && ((1 << (_la - 266)) & 537461809) !== 0) || ((((_la - 299)) & ~0x1F) === 0 && ((1 << (_la - 299)) & 1747191897) !== 0) || ((((_la - 340)) & ~0x1F) === 0 && ((1 << (_la - 340)) & 4757921) !== 0) || ((((_la - 372)) & ~0x1F) === 0 && ((1 << (_la - 372)) & 168590339) !== 0) || ((((_la - 411)) & ~0x1F) === 0 && ((1 << (_la - 411)) & 33570817) !== 0) || ((((_la - 443)) & ~0x1F) === 0 && ((1 << (_la - 443)) & 491937) !== 0)) {
                {
                this.state = 446;
                this.columnOptionDefinition();
                this.state = 451;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 17, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 447;
                        this.match(FlinkSQLParser.COMMA);
                        this.state = 448;
                        this.columnOptionDefinition();
                        }
                        }
                    }
                    this.state = 453;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 17, this.context);
                }
                }
            }

            this.state = 458;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 19, this.context) ) {
            case 1:
                {
                this.state = 456;
                this.match(FlinkSQLParser.COMMA);
                this.state = 457;
                this.watermarkDefinition();
                }
                break;
            }
            this.state = 462;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context) ) {
            case 1:
                {
                this.state = 460;
                this.match(FlinkSQLParser.COMMA);
                this.state = 461;
                this.tableConstraint();
                }
                break;
            }
            this.state = 466;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 440) {
                {
                this.state = 464;
                this.match(FlinkSQLParser.COMMA);
                this.state = 465;
                this.selfDefinitionClause();
                }
            }

            this.state = 468;
            this.match(FlinkSQLParser.RR_BRACKET);
            this.state = 470;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 18) {
                {
                this.state = 469;
                this.commentSpec();
                }
            }

            this.state = 473;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 100) {
                {
                this.state = 472;
                this.partitionDefinition();
                }
            }

            this.state = 476;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 408) {
                {
                this.state = 475;
                this.withOption();
                }
            }

            this.state = 478;
            this.likeDefinition();
            this.state = 480;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 421) {
                {
                this.state = 479;
                this.distributed();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public createTableAsSelect(): CreateTableAsSelectContext {
        let localContext = new CreateTableAsSelectContext(this.context, this.state);
        this.enterRule(localContext, 18, FlinkSQLParser.RULE_createTableAsSelect);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 482;
            this.match(FlinkSQLParser.KW_CREATE);
            this.state = 483;
            this.match(FlinkSQLParser.KW_TABLE);
            this.state = 485;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context) ) {
            case 1:
                {
                this.state = 484;
                this.ifNotExists();
                }
                break;
            }
            this.state = 487;
            this.tablePathCreate();
            this.state = 488;
            this.withOption();
            this.state = 491;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 200) {
                {
                this.state = 489;
                this.match(FlinkSQLParser.KW_AS);
                this.state = 490;
                this.queryStatement(0);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public usingClause(): UsingClauseContext {
        let localContext = new UsingClauseContext(this.context, this.state);
        this.enterRule(localContext, 20, FlinkSQLParser.RULE_usingClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 493;
            this.match(FlinkSQLParser.KW_USING);
            this.state = 494;
            this.match(FlinkSQLParser.KW_JAR);
            this.state = 495;
            this.jarFileName();
            this.state = 501;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 440) {
                {
                {
                this.state = 496;
                this.match(FlinkSQLParser.COMMA);
                this.state = 497;
                this.match(FlinkSQLParser.KW_JAR);
                this.state = 498;
                this.jarFileName();
                }
                }
                this.state = 503;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public jarFileName(): JarFileNameContext {
        let localContext = new JarFileNameContext(this.context, this.state);
        this.enterRule(localContext, 22, FlinkSQLParser.RULE_jarFileName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 504;
            this.match(FlinkSQLParser.STRING_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alterTable(): AlterTableContext {
        let localContext = new AlterTableContext(this.context, this.state);
        this.enterRule(localContext, 24, FlinkSQLParser.RULE_alterTable);
        let _la: number;
        try {
            let alternative: number;
            this.state = 713;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 59, this.context) ) {
            case 1:
                localContext = new AlterContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 506;
                this.match(FlinkSQLParser.KW_ALTER);
                this.state = 507;
                this.match(FlinkSQLParser.KW_TABLE);
                this.state = 509;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 29, this.context) ) {
                case 1:
                    {
                    this.state = 508;
                    this.ifExists();
                    }
                    break;
                }
                this.state = 511;
                this.tablePath();
                this.state = 517;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 30, this.context) ) {
                case 1:
                    {
                    this.state = 512;
                    this.renameDefinition();
                    }
                    break;
                case 2:
                    {
                    this.state = 513;
                    this.setKeyValueDefinition();
                    }
                    break;
                case 3:
                    {
                    this.state = 514;
                    this.addConstraint();
                    }
                    break;
                case 4:
                    {
                    this.state = 515;
                    this.dropConstraint();
                    }
                    break;
                case 5:
                    {
                    this.state = 516;
                    this.addUnique();
                    }
                    break;
                }
                }
                break;
            case 2:
                localContext = new AddOrModifyNewColumnContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 519;
                this.match(FlinkSQLParser.KW_ALTER);
                this.state = 520;
                this.match(FlinkSQLParser.KW_TABLE);
                this.state = 522;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 31, this.context) ) {
                case 1:
                    {
                    this.state = 521;
                    this.ifExists();
                    }
                    break;
                }
                this.state = 524;
                this.tablePath();
                this.state = 525;
                _la = this.tokenStream.LA(1);
                if(!(_la === 4 || _la === 88)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 526;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 527;
                this.columnOptionDefinition();
                this.state = 529;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 6 || _la === 9 || _la === 47 || _la === 78) {
                    {
                    this.state = 528;
                    this.columnPosition();
                    }
                }

                this.state = 538;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 34, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 531;
                        this.match(FlinkSQLParser.COMMA);
                        this.state = 532;
                        this.columnOptionDefinition();
                        this.state = 534;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 6 || _la === 9 || _la === 47 || _la === 78) {
                            {
                            this.state = 533;
                            this.columnPosition();
                            }
                        }

                        }
                        }
                    }
                    this.state = 540;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 34, this.context);
                }
                this.state = 543;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 35, this.context) ) {
                case 1:
                    {
                    this.state = 541;
                    this.match(FlinkSQLParser.COMMA);
                    this.state = 542;
                    this.tableConstraint();
                    }
                    break;
                }
                this.state = 547;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 36, this.context) ) {
                case 1:
                    {
                    this.state = 545;
                    this.match(FlinkSQLParser.COMMA);
                    this.state = 546;
                    this.watermarkDefinition();
                    }
                    break;
                }
                this.state = 551;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 440) {
                    {
                    this.state = 549;
                    this.match(FlinkSQLParser.COMMA);
                    this.state = 550;
                    this.selfDefinitionClause();
                    }
                }

                this.state = 553;
                this.match(FlinkSQLParser.RR_BRACKET);
                this.state = 555;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 18) {
                    {
                    this.state = 554;
                    this.commentSpec();
                    }
                }

                this.state = 558;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 100) {
                    {
                    this.state = 557;
                    this.partitionDefinition();
                    }
                }

                this.state = 561;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 408) {
                    {
                    this.state = 560;
                    this.withOption();
                    }
                }

                }
                break;
            case 3:
                localContext = new AddOrModifyNewColumnsContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 563;
                this.match(FlinkSQLParser.KW_ALTER);
                this.state = 564;
                this.match(FlinkSQLParser.KW_TABLE);
                this.state = 566;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 41, this.context) ) {
                case 1:
                    {
                    this.state = 565;
                    this.ifExists();
                    }
                    break;
                }
                this.state = 568;
                this.tablePath();
                this.state = 569;
                _la = this.tokenStream.LA(1);
                if(!(_la === 4 || _la === 88)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 570;
                this.columnOptionDefinition();
                this.state = 572;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 6 || _la === 9 || _la === 47 || _la === 78) {
                    {
                    this.state = 571;
                    this.columnPosition();
                    }
                }

                this.state = 575;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 18) {
                    {
                    this.state = 574;
                    this.commentSpec();
                    }
                }

                }
                break;
            case 4:
                localContext = new AddNewPartitionsContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 577;
                this.match(FlinkSQLParser.KW_ALTER);
                this.state = 578;
                this.match(FlinkSQLParser.KW_TABLE);
                this.state = 580;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 44, this.context) ) {
                case 1:
                    {
                    this.state = 579;
                    this.ifExists();
                    }
                    break;
                }
                this.state = 582;
                this.tablePath();
                this.state = 583;
                this.match(FlinkSQLParser.KW_ADD);
                this.state = 591;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 341) {
                    {
                    {
                    this.state = 584;
                    this.match(FlinkSQLParser.KW_PARTITION);
                    this.state = 585;
                    this.tablePropertyList();
                    this.state = 586;
                    this.match(FlinkSQLParser.KW_WITH);
                    this.state = 587;
                    this.tablePropertyList();
                    }
                    }
                    this.state = 593;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            case 5:
                localContext = new DropAcolumnContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 594;
                this.match(FlinkSQLParser.KW_ALTER);
                this.state = 595;
                this.match(FlinkSQLParser.KW_TABLE);
                this.state = 597;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 46, this.context) ) {
                case 1:
                    {
                    this.state = 596;
                    this.ifExists();
                    }
                    break;
                }
                this.state = 599;
                this.tablePath();
                this.state = 600;
                this.match(FlinkSQLParser.KW_DROP);
                this.state = 601;
                this.uid();
                }
                break;
            case 6:
                localContext = new DropColumnListContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 603;
                this.match(FlinkSQLParser.KW_ALTER);
                this.state = 604;
                this.match(FlinkSQLParser.KW_TABLE);
                this.state = 606;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 47, this.context) ) {
                case 1:
                    {
                    this.state = 605;
                    this.ifExists();
                    }
                    break;
                }
                this.state = 608;
                this.tablePath();
                this.state = 609;
                this.match(FlinkSQLParser.KW_DROP);
                this.state = 610;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 611;
                this.uid();
                this.state = 616;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 440) {
                    {
                    {
                    this.state = 612;
                    this.match(FlinkSQLParser.COMMA);
                    this.state = 613;
                    this.uid();
                    }
                    }
                    this.state = 618;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 619;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
                break;
            case 7:
                localContext = new DropPrimaryKeyContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 621;
                this.match(FlinkSQLParser.KW_ALTER);
                this.state = 622;
                this.match(FlinkSQLParser.KW_TABLE);
                this.state = 624;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 49, this.context) ) {
                case 1:
                    {
                    this.state = 623;
                    this.ifExists();
                    }
                    break;
                }
                this.state = 626;
                this.tablePath();
                this.state = 627;
                this.match(FlinkSQLParser.KW_DROP);
                this.state = 628;
                this.match(FlinkSQLParser.KW_PRIMARY);
                this.state = 629;
                this.match(FlinkSQLParser.KW_KEY);
                }
                break;
            case 8:
                localContext = new DropPartitionsContext(localContext);
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 631;
                this.match(FlinkSQLParser.KW_ALTER);
                this.state = 632;
                this.match(FlinkSQLParser.KW_TABLE);
                this.state = 634;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 50, this.context) ) {
                case 1:
                    {
                    this.state = 633;
                    this.ifExists();
                    }
                    break;
                }
                this.state = 636;
                this.tablePath();
                this.state = 637;
                this.match(FlinkSQLParser.KW_DROP);
                this.state = 638;
                this.match(FlinkSQLParser.KW_PARTITION);
                this.state = 639;
                this.tablePropertyList();
                this.state = 645;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 440) {
                    {
                    {
                    this.state = 640;
                    this.match(FlinkSQLParser.COMMA);
                    this.state = 641;
                    this.match(FlinkSQLParser.KW_PARTITION);
                    this.state = 642;
                    this.tablePropertyList();
                    }
                    }
                    this.state = 647;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            case 9:
                localContext = new DropWatermarkContext(localContext);
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 648;
                this.match(FlinkSQLParser.KW_ALTER);
                this.state = 649;
                this.match(FlinkSQLParser.KW_TABLE);
                this.state = 651;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 52, this.context) ) {
                case 1:
                    {
                    this.state = 650;
                    this.ifExists();
                    }
                    break;
                }
                this.state = 653;
                this.tablePath();
                this.state = 654;
                this.match(FlinkSQLParser.KW_DROP);
                this.state = 655;
                this.match(FlinkSQLParser.KW_WATERMARK);
                }
                break;
            case 10:
                localContext = new DropDistributionContext(localContext);
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 657;
                this.match(FlinkSQLParser.KW_ALTER);
                this.state = 658;
                this.match(FlinkSQLParser.KW_TABLE);
                this.state = 660;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 53, this.context) ) {
                case 1:
                    {
                    this.state = 659;
                    this.ifExists();
                    }
                    break;
                }
                this.state = 662;
                this.tablePath();
                this.state = 663;
                this.match(FlinkSQLParser.KW_DROP);
                this.state = 664;
                this.match(FlinkSQLParser.KW_DISTRIBUTION);
                }
                break;
            case 11:
                localContext = new RenameColumnContext(localContext);
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 666;
                this.match(FlinkSQLParser.KW_ALTER);
                this.state = 667;
                this.match(FlinkSQLParser.KW_TABLE);
                this.state = 669;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 54, this.context) ) {
                case 1:
                    {
                    this.state = 668;
                    this.ifExists();
                    }
                    break;
                }
                this.state = 671;
                this.tablePath();
                this.state = 672;
                this.match(FlinkSQLParser.KW_RENAME);
                this.state = 673;
                this.uid();
                this.state = 674;
                this.match(FlinkSQLParser.KW_TO);
                this.state = 675;
                this.uid();
                }
                break;
            case 12:
                localContext = new RenameTableContext(localContext);
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 677;
                this.match(FlinkSQLParser.KW_ALTER);
                this.state = 678;
                this.match(FlinkSQLParser.KW_TABLE);
                this.state = 680;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 55, this.context) ) {
                case 1:
                    {
                    this.state = 679;
                    this.ifExists();
                    }
                    break;
                }
                this.state = 682;
                this.tablePath();
                this.state = 683;
                this.match(FlinkSQLParser.KW_RENAME);
                this.state = 684;
                this.tablePath();
                }
                break;
            case 13:
                localContext = new SetPropertiyContext(localContext);
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 686;
                this.match(FlinkSQLParser.KW_ALTER);
                this.state = 687;
                this.match(FlinkSQLParser.KW_TABLE);
                this.state = 689;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 56, this.context) ) {
                case 1:
                    {
                    this.state = 688;
                    this.ifExists();
                    }
                    break;
                }
                this.state = 691;
                this.tablePath();
                this.state = 692;
                this.match(FlinkSQLParser.KW_SET);
                this.state = 693;
                this.partitionDefinition();
                }
                break;
            case 14:
                localContext = new ResetPropertiyContext(localContext);
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 695;
                this.match(FlinkSQLParser.KW_ALTER);
                this.state = 696;
                this.match(FlinkSQLParser.KW_TABLE);
                this.state = 698;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 57, this.context) ) {
                case 1:
                    {
                    this.state = 697;
                    this.ifExists();
                    }
                    break;
                }
                this.state = 700;
                this.tablePath();
                this.state = 701;
                this.match(FlinkSQLParser.KW_RESET);
                this.state = 702;
                this.transformList();
                }
                break;
            case 15:
                localContext = new AddDistributionContext(localContext);
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 704;
                this.match(FlinkSQLParser.KW_ALTER);
                this.state = 705;
                this.match(FlinkSQLParser.KW_TABLE);
                this.state = 707;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 58, this.context) ) {
                case 1:
                    {
                    this.state = 706;
                    this.ifExists();
                    }
                    break;
                }
                this.state = 709;
                this.tablePath();
                this.state = 710;
                this.match(FlinkSQLParser.KW_ADD);
                this.state = 711;
                this.distribution();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnPosition(): ColumnPositionContext {
        let localContext = new ColumnPositionContext(this.context, this.state);
        this.enterRule(localContext, 26, FlinkSQLParser.RULE_columnPosition);
        let _la: number;
        try {
            this.state = 718;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSQLParser.KW_FIRST:
            case FlinkSQLParser.KW_LAST:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 715;
                _la = this.tokenStream.LA(1);
                if(!(_la === 47 || _la === 78)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case FlinkSQLParser.KW_AFTER:
            case FlinkSQLParser.KW_BEFORE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 716;
                _la = this.tokenStream.LA(1);
                if(!(_la === 6 || _la === 9)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 717;
                this.uid();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public renameDefinition(): RenameDefinitionContext {
        let localContext = new RenameDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 28, FlinkSQLParser.RULE_renameDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 720;
            this.match(FlinkSQLParser.KW_RENAME);
            this.state = 722;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4293918704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4278185951) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294966911) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 3892279295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 3623845887) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 4160745471) !== 0) || _la === 242 || _la === 310 || _la === 399 || ((((_la - 443)) & ~0x1F) === 0 && ((1 << (_la - 443)) & 360449) !== 0)) {
                {
                this.state = 721;
                this.uid();
                }
            }

            this.state = 724;
            this.match(FlinkSQLParser.KW_TO);
            this.state = 725;
            this.uid();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public setKeyValueDefinition(): SetKeyValueDefinitionContext {
        let localContext = new SetKeyValueDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 30, FlinkSQLParser.RULE_setKeyValueDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 727;
            this.match(FlinkSQLParser.KW_SET);
            this.state = 728;
            this.tablePropertyList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public addConstraint(): AddConstraintContext {
        let localContext = new AddConstraintContext(this.context, this.state);
        this.enterRule(localContext, 32, FlinkSQLParser.RULE_addConstraint);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 730;
            this.match(FlinkSQLParser.KW_ADD);
            this.state = 731;
            this.match(FlinkSQLParser.KW_CONSTRAINT);
            this.state = 732;
            this.constraintName();
            this.state = 733;
            this.match(FlinkSQLParser.KW_PRIMARY);
            this.state = 734;
            this.match(FlinkSQLParser.KW_KEY);
            this.state = 735;
            this.columnNameList();
            this.state = 737;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 326) {
                {
                this.state = 736;
                this.notForced();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dropConstraint(): DropConstraintContext {
        let localContext = new DropConstraintContext(this.context, this.state);
        this.enterRule(localContext, 34, FlinkSQLParser.RULE_dropConstraint);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 739;
            this.match(FlinkSQLParser.KW_DROP);
            this.state = 740;
            this.match(FlinkSQLParser.KW_CONSTRAINT);
            this.state = 741;
            this.constraintName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public addUnique(): AddUniqueContext {
        let localContext = new AddUniqueContext(this.context, this.state);
        this.enterRule(localContext, 36, FlinkSQLParser.RULE_addUnique);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 743;
            this.match(FlinkSQLParser.KW_ADD);
            this.state = 744;
            this.match(FlinkSQLParser.KW_UNIQUE);
            this.state = 745;
            this.columnNameList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public notForced(): NotForcedContext {
        let localContext = new NotForcedContext(this.context, this.state);
        this.enterRule(localContext, 38, FlinkSQLParser.RULE_notForced);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 747;
            this.match(FlinkSQLParser.KW_NOT);
            this.state = 748;
            this.match(FlinkSQLParser.KW_ENFORCED);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alertView(): AlertViewContext {
        let localContext = new AlertViewContext(this.context, this.state);
        this.enterRule(localContext, 40, FlinkSQLParser.RULE_alertView);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 750;
            this.match(FlinkSQLParser.KW_ALTER);
            this.state = 751;
            this.match(FlinkSQLParser.KW_VIEW);
            this.state = 752;
            this.uid();
            this.state = 756;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSQLParser.KW_RENAME:
                {
                this.state = 753;
                this.renameDefinition();
                }
                break;
            case FlinkSQLParser.KW_AS:
                {
                this.state = 754;
                this.match(FlinkSQLParser.KW_AS);
                this.state = 755;
                this.queryStatement(0);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alterCatalog(): AlterCatalogContext {
        let localContext = new AlterCatalogContext(this.context, this.state);
        this.enterRule(localContext, 42, FlinkSQLParser.RULE_alterCatalog);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 758;
            this.match(FlinkSQLParser.KW_ALTER);
            this.state = 759;
            this.match(FlinkSQLParser.KW_CATALOG);
            this.state = 760;
            this.catalogPath();
            this.state = 773;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSQLParser.KW_SET:
                {
                this.state = 761;
                this.match(FlinkSQLParser.KW_SET);
                this.state = 762;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 763;
                this.tableProperty();
                this.state = 764;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
                break;
            case FlinkSQLParser.KW_RESET:
                {
                this.state = 766;
                this.match(FlinkSQLParser.KW_RESET);
                this.state = 767;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 768;
                this.tablePropertyKey();
                this.state = 769;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
                break;
            case FlinkSQLParser.KW_COMMENT:
                {
                this.state = 771;
                this.match(FlinkSQLParser.KW_COMMENT);
                this.state = 772;
                this.tablePropertyKey();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alterDatabase(): AlterDatabaseContext {
        let localContext = new AlterDatabaseContext(this.context, this.state);
        this.enterRule(localContext, 44, FlinkSQLParser.RULE_alterDatabase);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 775;
            this.match(FlinkSQLParser.KW_ALTER);
            this.state = 776;
            this.match(FlinkSQLParser.KW_DATABASE);
            this.state = 777;
            this.databasePath();
            this.state = 778;
            this.setKeyValueDefinition();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alterFunction(): AlterFunctionContext {
        let localContext = new AlterFunctionContext(this.context, this.state);
        this.enterRule(localContext, 46, FlinkSQLParser.RULE_alterFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 780;
            this.match(FlinkSQLParser.KW_ALTER);
            this.state = 784;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 65, this.context) ) {
            case 1:
                {
                this.state = 781;
                this.match(FlinkSQLParser.KW_TEMPORARY);
                }
                break;
            case 2:
                {
                this.state = 782;
                this.match(FlinkSQLParser.KW_TEMPORARY);
                this.state = 783;
                this.match(FlinkSQLParser.KW_SYSTEM);
                }
                break;
            }
            this.state = 786;
            this.match(FlinkSQLParser.KW_FUNCTION);
            this.state = 788;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 66, this.context) ) {
            case 1:
                {
                this.state = 787;
                this.ifExists();
                }
                break;
            }
            this.state = 790;
            this.uid();
            this.state = 791;
            this.match(FlinkSQLParser.KW_AS);
            this.state = 792;
            this.identifier();
            this.state = 795;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 300) {
                {
                this.state = 793;
                this.match(FlinkSQLParser.KW_LANGUAGE);
                this.state = 794;
                _la = this.tokenStream.LA(1);
                if(!(_la === 69 || _la === 114 || _la === 135)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dropCatalog(): DropCatalogContext {
        let localContext = new DropCatalogContext(this.context, this.state);
        this.enterRule(localContext, 48, FlinkSQLParser.RULE_dropCatalog);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 797;
            this.match(FlinkSQLParser.KW_DROP);
            this.state = 798;
            this.match(FlinkSQLParser.KW_CATALOG);
            this.state = 800;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 68, this.context) ) {
            case 1:
                {
                this.state = 799;
                this.ifExists();
                }
                break;
            }
            this.state = 802;
            this.catalogPath();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dropTable(): DropTableContext {
        let localContext = new DropTableContext(this.context, this.state);
        this.enterRule(localContext, 50, FlinkSQLParser.RULE_dropTable);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 804;
            this.match(FlinkSQLParser.KW_DROP);
            this.state = 806;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 162) {
                {
                this.state = 805;
                this.match(FlinkSQLParser.KW_TEMPORARY);
                }
            }

            this.state = 808;
            this.match(FlinkSQLParser.KW_TABLE);
            this.state = 810;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 70, this.context) ) {
            case 1:
                {
                this.state = 809;
                this.ifExists();
                }
                break;
            }
            this.state = 812;
            this.tablePath();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dropDatabase(): DropDatabaseContext {
        let localContext = new DropDatabaseContext(this.context, this.state);
        this.enterRule(localContext, 52, FlinkSQLParser.RULE_dropDatabase);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 814;
            this.match(FlinkSQLParser.KW_DROP);
            this.state = 815;
            this.match(FlinkSQLParser.KW_DATABASE);
            this.state = 817;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 71, this.context) ) {
            case 1:
                {
                this.state = 816;
                this.ifExists();
                }
                break;
            }
            this.state = 819;
            this.databasePath();
            this.state = 821;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11 || _la === 132) {
                {
                this.state = 820;
                localContext._dropType = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 11 || _la === 132)) {
                    localContext._dropType = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dropView(): DropViewContext {
        let localContext = new DropViewContext(this.context, this.state);
        this.enterRule(localContext, 54, FlinkSQLParser.RULE_dropView);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 823;
            this.match(FlinkSQLParser.KW_DROP);
            this.state = 825;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 162) {
                {
                this.state = 824;
                this.match(FlinkSQLParser.KW_TEMPORARY);
                }
            }

            this.state = 827;
            this.match(FlinkSQLParser.KW_VIEW);
            this.state = 829;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 74, this.context) ) {
            case 1:
                {
                this.state = 828;
                this.ifExists();
                }
                break;
            }
            this.state = 831;
            this.uid();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dropFunction(): DropFunctionContext {
        let localContext = new DropFunctionContext(this.context, this.state);
        this.enterRule(localContext, 56, FlinkSQLParser.RULE_dropFunction);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 833;
            this.match(FlinkSQLParser.KW_DROP);
            this.state = 837;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 75, this.context) ) {
            case 1:
                {
                this.state = 834;
                this.match(FlinkSQLParser.KW_TEMPORARY);
                }
                break;
            case 2:
                {
                this.state = 835;
                this.match(FlinkSQLParser.KW_TEMPORARY);
                this.state = 836;
                this.match(FlinkSQLParser.KW_SYSTEM);
                }
                break;
            }
            this.state = 839;
            this.match(FlinkSQLParser.KW_FUNCTION);
            this.state = 841;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 76, this.context) ) {
            case 1:
                {
                this.state = 840;
                this.ifExists();
                }
                break;
            }
            this.state = 843;
            this.functionName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public insertSimpleStatement(): InsertSimpleStatementContext {
        let localContext = new InsertSimpleStatementContext(this.context, this.state);
        this.enterRule(localContext, 58, FlinkSQLParser.RULE_insertSimpleStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 845;
            this.match(FlinkSQLParser.KW_INSERT);
            this.state = 851;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSQLParser.KW_INTO:
                {
                this.state = 846;
                this.match(FlinkSQLParser.KW_INTO);
                }
                break;
            case FlinkSQLParser.KW_OVERWRITE:
                {
                this.state = 847;
                this.match(FlinkSQLParser.KW_OVERWRITE);
                this.state = 849;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 378) {
                    {
                    this.state = 848;
                    this.match(FlinkSQLParser.KW_TABLE);
                    }
                }

                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 853;
            this.tablePath();
            this.state = 862;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 81, this.context) ) {
            case 1:
                {
                this.state = 855;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 341) {
                    {
                    this.state = 854;
                    this.insertPartitionDefinition();
                    }
                }

                this.state = 858;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 80, this.context) ) {
                case 1:
                    {
                    this.state = 857;
                    this.columnNameList();
                    }
                    break;
                }
                this.state = 860;
                this.queryStatement(0);
                }
                break;
            case 2:
                {
                this.state = 861;
                this.valuesDefinition();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public insertPartitionDefinition(): InsertPartitionDefinitionContext {
        let localContext = new InsertPartitionDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 60, FlinkSQLParser.RULE_insertPartitionDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 864;
            this.match(FlinkSQLParser.KW_PARTITION);
            this.state = 865;
            this.tablePropertyList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public queryStatement(): QueryStatementContext;
    public queryStatement(_p: number): QueryStatementContext;
    public queryStatement(_p?: number): QueryStatementContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new QueryStatementContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 62;
        this.enterRecursionRule(localContext, 62, FlinkSQLParser.RULE_queryStatement, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 883;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSQLParser.KW_VALUES:
                {
                localContext = new Values_caluseContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 868;
                this.valuesCaluse();
                }
                break;
            case FlinkSQLParser.LR_BRACKET:
                {
                localContext = new Sub_queryContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 869;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 870;
                this.queryStatement(0);
                this.state = 871;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
                break;
            case FlinkSQLParser.KW_SELECT:
                {
                localContext = new Common_selectContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 875;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 82, this.context) ) {
                case 1:
                    {
                    this.state = 873;
                    this.selectClause();
                    }
                    break;
                case 2:
                    {
                    this.state = 874;
                    this.selectStatement();
                    }
                    break;
                }
                this.state = 878;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 83, this.context) ) {
                case 1:
                    {
                    this.state = 877;
                    this.orderByCaluse();
                    }
                    break;
                }
                this.state = 881;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 84, this.context) ) {
                case 1:
                    {
                    this.state = 880;
                    this.limitClause();
                    }
                    break;
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 899;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 89, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new Union_queryContext(new QueryStatementContext(parentContext, parentState));
                    (localContext as Union_queryContext)._left = previousContext;
                    this.pushNewRecursionContext(localContext, _startState, FlinkSQLParser.RULE_queryStatement);
                    this.state = 885;
                    if (!(this.precpred(this.context, 2))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                    }
                    this.state = 886;
                    (localContext as Union_queryContext)._operator = this.tokenStream.LT(1);
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 264 || _la === 294 || _la === 392)) {
                        (localContext as Union_queryContext)._operator = this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 888;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 193) {
                        {
                        this.state = 887;
                        this.match(FlinkSQLParser.KW_ALL);
                        }
                    }

                    this.state = 890;
                    (localContext as Union_queryContext)._right = this.queryStatement(0);
                    this.state = 892;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 87, this.context) ) {
                    case 1:
                        {
                        this.state = 891;
                        this.orderByCaluse();
                        }
                        break;
                    }
                    this.state = 895;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 88, this.context) ) {
                    case 1:
                        {
                        this.state = 894;
                        this.limitClause();
                        }
                        break;
                    }
                    }
                    }
                }
                this.state = 901;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 89, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public valuesCaluse(): ValuesCaluseContext {
        let localContext = new ValuesCaluseContext(this.context, this.state);
        this.enterRule(localContext, 64, FlinkSQLParser.RULE_valuesCaluse);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 902;
            this.match(FlinkSQLParser.KW_VALUES);
            this.state = 903;
            this.expression();
            this.state = 908;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 90, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 904;
                    this.match(FlinkSQLParser.COMMA);
                    this.state = 905;
                    this.expression();
                    }
                    }
                }
                this.state = 910;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 90, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public withItem(): WithItemContext {
        let localContext = new WithItemContext(this.context, this.state);
        this.enterRule(localContext, 66, FlinkSQLParser.RULE_withItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 911;
            this.withItemName();
            this.state = 923;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 436) {
                {
                this.state = 912;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 913;
                this.columnName();
                this.state = 918;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 440) {
                    {
                    {
                    this.state = 914;
                    this.match(FlinkSQLParser.COMMA);
                    this.state = 915;
                    this.columnName();
                    }
                    }
                    this.state = 920;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 921;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
            }

            this.state = 925;
            this.match(FlinkSQLParser.KW_AS);
            this.state = 926;
            this.match(FlinkSQLParser.LR_BRACKET);
            this.state = 927;
            this.queryStatement(0);
            this.state = 928;
            this.match(FlinkSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public withItemName(): WithItemNameContext {
        let localContext = new WithItemNameContext(this.context, this.state);
        this.enterRule(localContext, 68, FlinkSQLParser.RULE_withItemName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 930;
            this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupByClause(): GroupByClauseContext {
        let localContext = new GroupByClauseContext(this.context, this.state);
        this.enterRule(localContext, 70, FlinkSQLParser.RULE_groupByClause);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 932;
            this.match(FlinkSQLParser.KW_GROUP);
            this.state = 933;
            this.match(FlinkSQLParser.KW_BY);
            this.state = 934;
            this.groupItemDefinition();
            this.state = 939;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 93, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 935;
                    this.match(FlinkSQLParser.COMMA);
                    this.state = 936;
                    this.groupItemDefinition();
                    }
                    }
                }
                this.state = 941;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 93, this.context);
            }
            this.state = 943;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 94, this.context) ) {
            case 1:
                {
                this.state = 942;
                this.groupingSet();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fromClause(): FromClauseContext {
        let localContext = new FromClauseContext(this.context, this.state);
        this.enterRule(localContext, 72, FlinkSQLParser.RULE_fromClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 945;
            this.match(FlinkSQLParser.KW_FROM);
            this.state = 946;
            this.tableExpression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableReference(): TableReferenceContext {
        let localContext = new TableReferenceContext(this.context, this.state);
        this.enterRule(localContext, 74, FlinkSQLParser.RULE_tableReference);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 948;
            this.tablePrimary();
            this.state = 950;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 95, this.context) ) {
            case 1:
                {
                this.state = 949;
                this.tableAlias();
                }
                break;
            }
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public flinkJoinOp(): FlinkJoinOpContext {
        let localContext = new FlinkJoinOpContext(this.context, this.state);
        this.enterRule(localContext, 76, FlinkSQLParser.RULE_flinkJoinOp);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 952;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 277)) & ~0x1F) === 0 && ((1 << (_la - 277)) & 268439553) !== 0) || _la === 355)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tablePrimary(): TablePrimaryContext {
        let localContext = new TablePrimaryContext(this.context, this.state);
        this.enterRule(localContext, 78, FlinkSQLParser.RULE_tablePrimary);
        let _la: number;
        try {
            this.state = 1021;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 103, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 955;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 378) {
                    {
                    this.state = 954;
                    this.match(FlinkSQLParser.KW_TABLE);
                    }
                }

                this.state = 957;
                this.tablePath();
                this.state = 959;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 97, this.context) ) {
                case 1:
                    {
                    this.state = 958;
                    this.timePeriod();
                    }
                    break;
                }
                this.state = 963;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 98, this.context) ) {
                case 1:
                    {
                    this.state = 961;
                    this.match(FlinkSQLParser.KW_AS);
                    this.state = 962;
                    this.correlationName();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 965;
                this.match(FlinkSQLParser.KW_LATERAL);
                this.state = 966;
                this.match(FlinkSQLParser.KW_TABLE);
                this.state = 967;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 968;
                this.functionName();
                this.state = 969;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 970;
                this.functionParam();
                this.state = 975;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 440) {
                    {
                    {
                    this.state = 971;
                    this.match(FlinkSQLParser.COMMA);
                    this.state = 972;
                    this.functionParam();
                    }
                    }
                    this.state = 977;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 978;
                this.match(FlinkSQLParser.RR_BRACKET);
                this.state = 979;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 982;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 301) {
                    {
                    this.state = 981;
                    this.match(FlinkSQLParser.KW_LATERAL);
                    }
                }

                this.state = 984;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 985;
                this.queryStatement(0);
                this.state = 986;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 988;
                this.match(FlinkSQLParser.KW_LATERAL);
                this.state = 989;
                this.match(FlinkSQLParser.KW_TABLE);
                this.state = 990;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 991;
                this.functionName();
                this.state = 992;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 993;
                this.functionParam();
                this.state = 998;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 440) {
                    {
                    {
                    this.state = 994;
                    this.match(FlinkSQLParser.COMMA);
                    this.state = 995;
                    this.functionParam();
                    }
                    }
                    this.state = 1000;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1001;
                this.match(FlinkSQLParser.RR_BRACKET);
                this.state = 1002;
                this.match(FlinkSQLParser.RR_BRACKET);
                this.state = 1003;
                this.match(FlinkSQLParser.KW_AS);
                this.state = 1004;
                this.tableAlias();
                this.state = 1005;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 1006;
                this.projectItemDefinition();
                this.state = 1011;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 440) {
                    {
                    {
                    this.state = 1007;
                    this.match(FlinkSQLParser.COMMA);
                    this.state = 1008;
                    this.projectItemDefinition();
                    }
                    }
                    this.state = 1013;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1014;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1016;
                this.match(FlinkSQLParser.KW_UNNEST);
                this.state = 1017;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 1018;
                this.expression();
                this.state = 1019;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public timePeriod(): TimePeriodContext {
        let localContext = new TimePeriodContext(this.context, this.state);
        this.enterRule(localContext, 80, FlinkSQLParser.RULE_timePeriod);
        try {
            this.state = 1031;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSQLParser.KW_FOR:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1023;
                this.match(FlinkSQLParser.KW_FOR);
                this.state = 1024;
                this.match(FlinkSQLParser.KW_SYSTEM_TIME);
                this.state = 1025;
                this.match(FlinkSQLParser.KW_AS);
                this.state = 1026;
                this.match(FlinkSQLParser.KW_OF);
                this.state = 1027;
                this.dateTimeExpression();
                }
                break;
            case FlinkSQLParser.KW_AS:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1028;
                this.match(FlinkSQLParser.KW_AS);
                this.state = 1029;
                this.match(FlinkSQLParser.KW_OF);
                this.state = 1030;
                this.dateTimeExpression();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dateTimeExpression(): DateTimeExpressionContext {
        let localContext = new DateTimeExpressionContext(this.context, this.state);
        this.enterRule(localContext, 82, FlinkSQLParser.RULE_dateTimeExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1033;
            this.expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public inlineDataValueClause(): InlineDataValueClauseContext {
        let localContext = new InlineDataValueClauseContext(this.context, this.state);
        this.enterRule(localContext, 84, FlinkSQLParser.RULE_inlineDataValueClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1035;
            this.match(FlinkSQLParser.LR_BRACKET);
            this.state = 1036;
            this.valuesDefinition();
            this.state = 1037;
            this.match(FlinkSQLParser.RR_BRACKET);
            this.state = 1038;
            this.tableAlias();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public windowTVFClause(): WindowTVFClauseContext {
        let localContext = new WindowTVFClauseContext(this.context, this.state);
        this.enterRule(localContext, 86, FlinkSQLParser.RULE_windowTVFClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1040;
            this.match(FlinkSQLParser.KW_TABLE);
            this.state = 1041;
            this.match(FlinkSQLParser.LR_BRACKET);
            this.state = 1042;
            this.windowTVFExpression();
            this.state = 1043;
            this.match(FlinkSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public windowTVFExpression(): WindowTVFExpressionContext {
        let localContext = new WindowTVFExpressionContext(this.context, this.state);
        this.enterRule(localContext, 88, FlinkSQLParser.RULE_windowTVFExpression);
        try {
            this.state = 1049;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSQLParser.KW_TUMBLE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1045;
                this.tumableExpression();
                }
                break;
            case FlinkSQLParser.KW_HOP:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1046;
                this.hopExpression();
                }
                break;
            case FlinkSQLParser.KW_CUMULATE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1047;
                this.cumulateExpression();
                }
                break;
            case FlinkSQLParser.KW_SESSION:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1048;
                this.sessionExpression();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tumableExpression(): TumableExpressionContext {
        let localContext = new TumableExpressionContext(this.context, this.state);
        this.enterRule(localContext, 90, FlinkSQLParser.RULE_tumableExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1051;
            this.match(FlinkSQLParser.KW_TUMBLE);
            this.state = 1052;
            this.match(FlinkSQLParser.LR_BRACKET);
            this.state = 1057;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSQLParser.KW_TABLE:
                {
                this.state = 1053;
                this.match(FlinkSQLParser.KW_TABLE);
                }
                break;
            case FlinkSQLParser.KW_DATA:
                {
                this.state = 1054;
                this.match(FlinkSQLParser.KW_DATA);
                this.state = 1055;
                this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
                this.state = 1056;
                this.match(FlinkSQLParser.KW_TABLE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 1059;
            this.uid();
            {
            this.state = 1060;
            this.match(FlinkSQLParser.COMMA);
            this.state = 1063;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 163) {
                {
                this.state = 1061;
                this.match(FlinkSQLParser.KW_TIMECOL);
                this.state = 1062;
                this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
                }
            }

            this.state = 1065;
            this.columnDescriptor();
            }
            {
            this.state = 1067;
            this.match(FlinkSQLParser.COMMA);
            this.state = 1070;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 149) {
                {
                this.state = 1068;
                this.match(FlinkSQLParser.KW_SIZE);
                this.state = 1069;
                this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
                }
            }

            this.state = 1072;
            this.timeIntervalExpression();
            }
            this.state = 1082;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 440) {
                {
                this.state = 1074;
                this.match(FlinkSQLParser.COMMA);
                this.state = 1079;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 445) {
                    {
                    this.state = 1075;
                    this.match(FlinkSQLParser.DOUBLE_QUOTE_SYMB);
                    this.state = 1076;
                    this.match(FlinkSQLParser.KW_OFFSET);
                    this.state = 1077;
                    this.match(FlinkSQLParser.DOUBLE_QUOTE_SYMB);
                    this.state = 1078;
                    this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
                    }
                }

                this.state = 1081;
                this.timeIntervalExpression();
                }
            }

            this.state = 1084;
            this.match(FlinkSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public hopExpression(): HopExpressionContext {
        let localContext = new HopExpressionContext(this.context, this.state);
        this.enterRule(localContext, 92, FlinkSQLParser.RULE_hopExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1086;
            this.match(FlinkSQLParser.KW_HOP);
            this.state = 1087;
            this.match(FlinkSQLParser.LR_BRACKET);
            this.state = 1092;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSQLParser.KW_TABLE:
                {
                this.state = 1088;
                this.match(FlinkSQLParser.KW_TABLE);
                }
                break;
            case FlinkSQLParser.KW_DATA:
                {
                this.state = 1089;
                this.match(FlinkSQLParser.KW_DATA);
                this.state = 1090;
                this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
                this.state = 1091;
                this.match(FlinkSQLParser.KW_TABLE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 1094;
            this.uid();
            {
            this.state = 1095;
            this.match(FlinkSQLParser.COMMA);
            this.state = 1098;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 163) {
                {
                this.state = 1096;
                this.match(FlinkSQLParser.KW_TIMECOL);
                this.state = 1097;
                this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
                }
            }

            this.state = 1100;
            this.columnDescriptor();
            }
            this.state = 1108;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 114, this.context) ) {
            case 1:
                {
                this.state = 1102;
                this.match(FlinkSQLParser.COMMA);
                this.state = 1105;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 150) {
                    {
                    this.state = 1103;
                    this.match(FlinkSQLParser.KW_SLIDE);
                    this.state = 1104;
                    this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
                    }
                }

                this.state = 1107;
                this.timeIntervalExpression();
                }
                break;
            }
            {
            this.state = 1110;
            this.match(FlinkSQLParser.COMMA);
            this.state = 1113;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 149) {
                {
                this.state = 1111;
                this.match(FlinkSQLParser.KW_SIZE);
                this.state = 1112;
                this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
                }
            }

            this.state = 1115;
            this.timeIntervalExpression();
            }
            this.state = 1125;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 440) {
                {
                this.state = 1117;
                this.match(FlinkSQLParser.COMMA);
                this.state = 1122;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 445) {
                    {
                    this.state = 1118;
                    this.match(FlinkSQLParser.DOUBLE_QUOTE_SYMB);
                    this.state = 1119;
                    this.match(FlinkSQLParser.KW_OFFSET);
                    this.state = 1120;
                    this.match(FlinkSQLParser.DOUBLE_QUOTE_SYMB);
                    this.state = 1121;
                    this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
                    }
                }

                this.state = 1124;
                this.timeIntervalExpression();
                }
            }

            this.state = 1127;
            this.match(FlinkSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public cumulateExpression(): CumulateExpressionContext {
        let localContext = new CumulateExpressionContext(this.context, this.state);
        this.enterRule(localContext, 94, FlinkSQLParser.RULE_cumulateExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1129;
            this.match(FlinkSQLParser.KW_CUMULATE);
            this.state = 1130;
            this.match(FlinkSQLParser.LR_BRACKET);
            this.state = 1135;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSQLParser.KW_TABLE:
                {
                this.state = 1131;
                this.match(FlinkSQLParser.KW_TABLE);
                }
                break;
            case FlinkSQLParser.KW_DATA:
                {
                this.state = 1132;
                this.match(FlinkSQLParser.KW_DATA);
                this.state = 1133;
                this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
                this.state = 1134;
                this.match(FlinkSQLParser.KW_TABLE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 1137;
            this.uid();
            {
            this.state = 1138;
            this.match(FlinkSQLParser.COMMA);
            this.state = 1141;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 163) {
                {
                this.state = 1139;
                this.match(FlinkSQLParser.KW_TIMECOL);
                this.state = 1140;
                this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
                }
            }

            this.state = 1143;
            this.columnDescriptor();
            }
            this.state = 1151;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 121, this.context) ) {
            case 1:
                {
                this.state = 1145;
                this.match(FlinkSQLParser.COMMA);
                this.state = 1148;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 156) {
                    {
                    this.state = 1146;
                    this.match(FlinkSQLParser.KW_STEP);
                    this.state = 1147;
                    this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
                    }
                }

                this.state = 1150;
                this.timeIntervalExpression();
                }
                break;
            }
            {
            this.state = 1153;
            this.match(FlinkSQLParser.COMMA);
            this.state = 1156;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 149) {
                {
                this.state = 1154;
                this.match(FlinkSQLParser.KW_SIZE);
                this.state = 1155;
                this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
                }
            }

            this.state = 1158;
            this.timeIntervalExpression();
            }
            this.state = 1160;
            this.match(FlinkSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sessionExpression(): SessionExpressionContext {
        let localContext = new SessionExpressionContext(this.context, this.state);
        this.enterRule(localContext, 96, FlinkSQLParser.RULE_sessionExpression);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1162;
            this.match(FlinkSQLParser.KW_SESSION);
            this.state = 1163;
            this.match(FlinkSQLParser.LR_BRACKET);
            this.state = 1168;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSQLParser.KW_TABLE:
                {
                this.state = 1164;
                this.match(FlinkSQLParser.KW_TABLE);
                }
                break;
            case FlinkSQLParser.KW_DATA:
                {
                this.state = 1165;
                this.match(FlinkSQLParser.KW_DATA);
                this.state = 1166;
                this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
                this.state = 1167;
                this.match(FlinkSQLParser.KW_TABLE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 1170;
            this.uid();
            this.state = 1181;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 341) {
                {
                this.state = 1171;
                this.match(FlinkSQLParser.KW_PARTITION);
                this.state = 1172;
                this.match(FlinkSQLParser.KW_BY);
                this.state = 1173;
                this.uid();
                this.state = 1178;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 124, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1174;
                        this.match(FlinkSQLParser.COMMA);
                        this.state = 1175;
                        this.uid();
                        }
                        }
                    }
                    this.state = 1180;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 124, this.context);
                }
                }
            }

            this.state = 1189;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 127, this.context) ) {
            case 1:
                {
                this.state = 1183;
                this.match(FlinkSQLParser.COMMA);
                this.state = 1186;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 163) {
                    {
                    this.state = 1184;
                    this.match(FlinkSQLParser.KW_TIMECOL);
                    this.state = 1185;
                    this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
                    }
                }

                this.state = 1188;
                this.columnDescriptor();
                }
                break;
            }
            this.state = 1197;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 440) {
                {
                this.state = 1191;
                this.match(FlinkSQLParser.COMMA);
                this.state = 1194;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 56) {
                    {
                    this.state = 1192;
                    this.match(FlinkSQLParser.KW_GAP);
                    this.state = 1193;
                    this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
                    }
                }

                this.state = 1196;
                this.timeIntervalExpression();
                }
            }

            this.state = 1199;
            this.match(FlinkSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public windowTVFName(): WindowTVFNameContext {
        let localContext = new WindowTVFNameContext(this.context, this.state);
        this.enterRule(localContext, 98, FlinkSQLParser.RULE_windowTVFName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1201;
            _la = this.tokenStream.LA(1);
            if(!(_la === 24 || _la === 60 || _la === 146 || _la === 170)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public windowTVFParam(): WindowTVFParamContext {
        let localContext = new WindowTVFParamContext(this.context, this.state);
        this.enterRule(localContext, 100, FlinkSQLParser.RULE_windowTVFParam);
        try {
            this.state = 1218;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 130, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1203;
                this.match(FlinkSQLParser.KW_TABLE);
                this.state = 1204;
                this.timeAttrColumn();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1205;
                this.columnDescriptor();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1206;
                this.timeIntervalExpression();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1207;
                this.match(FlinkSQLParser.KW_DATA);
                this.state = 1208;
                this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
                this.state = 1209;
                this.match(FlinkSQLParser.KW_TABLE);
                this.state = 1210;
                this.timeAttrColumn();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1211;
                this.match(FlinkSQLParser.KW_TIMECOL);
                this.state = 1212;
                this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
                this.state = 1213;
                this.columnDescriptor();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1214;
                this.timeIntervalParamName();
                this.state = 1215;
                this.match(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
                this.state = 1216;
                this.timeIntervalExpression();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public timeIntervalParamName(): TimeIntervalParamNameContext {
        let localContext = new TimeIntervalParamNameContext(this.context, this.state);
        this.enterRule(localContext, 102, FlinkSQLParser.RULE_timeIntervalParamName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1220;
            _la = this.tokenStream.LA(1);
            if(!(_la === 25 || ((((_la - 149)) & ~0x1F) === 0 && ((1 << (_la - 149)) & 16515) !== 0) || _la === 332)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnDescriptor(): ColumnDescriptorContext {
        let localContext = new ColumnDescriptorContext(this.context, this.state);
        this.enterRule(localContext, 104, FlinkSQLParser.RULE_columnDescriptor);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1222;
            this.match(FlinkSQLParser.KW_DESCRIPTOR);
            this.state = 1223;
            this.match(FlinkSQLParser.LR_BRACKET);
            this.state = 1224;
            this.uid();
            this.state = 1225;
            this.match(FlinkSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public joinCondition(): JoinConditionContext {
        let localContext = new JoinConditionContext(this.context, this.state);
        this.enterRule(localContext, 106, FlinkSQLParser.RULE_joinCondition);
        let _la: number;
        try {
            this.state = 1241;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSQLParser.KW_ON:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1227;
                this.match(FlinkSQLParser.KW_ON);
                this.state = 1228;
                this.booleanExpression(0);
                }
                break;
            case FlinkSQLParser.KW_USING:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1229;
                this.match(FlinkSQLParser.KW_USING);
                this.state = 1230;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 1231;
                this.uid();
                this.state = 1236;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 440) {
                    {
                    {
                    this.state = 1232;
                    this.match(FlinkSQLParser.COMMA);
                    this.state = 1233;
                    this.uid();
                    }
                    }
                    this.state = 1238;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1239;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whereClause(): WhereClauseContext {
        let localContext = new WhereClauseContext(this.context, this.state);
        this.enterRule(localContext, 108, FlinkSQLParser.RULE_whereClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1243;
            this.match(FlinkSQLParser.KW_WHERE);
            this.state = 1244;
            this.booleanExpression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupItemDefinition(): GroupItemDefinitionContext {
        let localContext = new GroupItemDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 110, FlinkSQLParser.RULE_groupItemDefinition);
        let _la: number;
        try {
            this.state = 1273;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 135, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1246;
                this.expression();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1247;
                this.groupWindowFunction();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1248;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 1249;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1250;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 1251;
                this.expression();
                this.state = 1256;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 440) {
                    {
                    {
                    this.state = 1252;
                    this.match(FlinkSQLParser.COMMA);
                    this.state = 1253;
                    this.expression();
                    }
                    }
                    this.state = 1258;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1259;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1261;
                this.groupingSetsNotionName();
                this.state = 1262;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 1263;
                this.expression();
                this.state = 1268;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 440) {
                    {
                    {
                    this.state = 1264;
                    this.match(FlinkSQLParser.COMMA);
                    this.state = 1265;
                    this.expression();
                    }
                    }
                    this.state = 1270;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1271;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupingSet(): GroupingSetContext {
        let localContext = new GroupingSetContext(this.context, this.state);
        this.enterRule(localContext, 112, FlinkSQLParser.RULE_groupingSet);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1275;
            this.groupingSets();
            this.state = 1276;
            this.match(FlinkSQLParser.LR_BRACKET);
            this.state = 1277;
            this.groupItemDefinition();
            this.state = 1282;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 440) {
                {
                {
                this.state = 1278;
                this.match(FlinkSQLParser.COMMA);
                this.state = 1279;
                this.groupItemDefinition();
                }
                }
                this.state = 1284;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1285;
            this.match(FlinkSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupingSets(): GroupingSetsContext {
        let localContext = new GroupingSetsContext(this.context, this.state);
        this.enterRule(localContext, 114, FlinkSQLParser.RULE_groupingSets);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1287;
            this.match(FlinkSQLParser.KW_GROUPING);
            this.state = 1288;
            this.match(FlinkSQLParser.KW_SETS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupingSetsNotionName(): GroupingSetsNotionNameContext {
        let localContext = new GroupingSetsNotionNameContext(this.context, this.state);
        this.enterRule(localContext, 116, FlinkSQLParser.RULE_groupingSetsNotionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1290;
            _la = this.tokenStream.LA(1);
            if(!(_la === 237 || _la === 358)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupWindowFunction(): GroupWindowFunctionContext {
        let localContext = new GroupWindowFunctionContext(this.context, this.state);
        this.enterRule(localContext, 118, FlinkSQLParser.RULE_groupWindowFunction);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1292;
            this.groupWindowFunctionName();
            this.state = 1293;
            this.match(FlinkSQLParser.LR_BRACKET);
            this.state = 1294;
            this.timeAttrColumn();
            this.state = 1295;
            this.match(FlinkSQLParser.COMMA);
            this.state = 1296;
            this.timeIntervalExpression();
            this.state = 1297;
            this.match(FlinkSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupWindowFunctionName(): GroupWindowFunctionNameContext {
        let localContext = new GroupWindowFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 120, FlinkSQLParser.RULE_groupWindowFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1299;
            _la = this.tokenStream.LA(1);
            if(!(_la === 60 || _la === 146 || _la === 170)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public timeAttrColumn(): TimeAttrColumnContext {
        let localContext = new TimeAttrColumnContext(this.context, this.state);
        this.enterRule(localContext, 122, FlinkSQLParser.RULE_timeAttrColumn);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1301;
            this.uid();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public havingClause(): HavingClauseContext {
        let localContext = new HavingClauseContext(this.context, this.state);
        this.enterRule(localContext, 124, FlinkSQLParser.RULE_havingClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1303;
            this.match(FlinkSQLParser.KW_HAVING);
            this.state = 1304;
            this.booleanExpression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public windowClause(): WindowClauseContext {
        let localContext = new WindowClauseContext(this.context, this.state);
        this.enterRule(localContext, 126, FlinkSQLParser.RULE_windowClause);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1306;
            this.match(FlinkSQLParser.KW_WINDOW);
            this.state = 1307;
            this.namedWindow();
            this.state = 1312;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 137, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1308;
                    this.match(FlinkSQLParser.COMMA);
                    this.state = 1309;
                    this.namedWindow();
                    }
                    }
                }
                this.state = 1314;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 137, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public namedWindow(): NamedWindowContext {
        let localContext = new NamedWindowContext(this.context, this.state);
        this.enterRule(localContext, 128, FlinkSQLParser.RULE_namedWindow);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1315;
            localContext._name = this.errorCapturingIdentifier();
            this.state = 1316;
            this.match(FlinkSQLParser.KW_AS);
            this.state = 1317;
            this.windowSpec();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public windowSpec(): WindowSpecContext {
        let localContext = new WindowSpecContext(this.context, this.state);
        this.enterRule(localContext, 130, FlinkSQLParser.RULE_windowSpec);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1320;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4293918704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4278185951) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294966911) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 3892279295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 3623845887) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 4160745471) !== 0) || _la === 242 || _la === 310 || _la === 399 || ((((_la - 443)) & ~0x1F) === 0 && ((1 << (_la - 443)) & 360449) !== 0)) {
                {
                this.state = 1319;
                localContext._name = this.errorCapturingIdentifier();
                }
            }

            this.state = 1322;
            this.match(FlinkSQLParser.LR_BRACKET);
            this.state = 1324;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 341) {
                {
                this.state = 1323;
                this.partitionByClause();
                }
            }

            this.state = 1327;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 336) {
                {
                this.state = 1326;
                this.orderByCaluse();
                }
            }

            this.state = 1330;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 350 || _la === 360) {
                {
                this.state = 1329;
                this.windowFrame();
                }
            }

            this.state = 1332;
            this.match(FlinkSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public matchRecognizeClause(): MatchRecognizeClauseContext {
        let localContext = new MatchRecognizeClauseContext(this.context, this.state);
        this.enterRule(localContext, 132, FlinkSQLParser.RULE_matchRecognizeClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1334;
            this.match(FlinkSQLParser.KW_MATCH_RECOGNIZE);
            this.state = 1335;
            this.match(FlinkSQLParser.LR_BRACKET);
            this.state = 1337;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 341) {
                {
                this.state = 1336;
                this.partitionByClause();
                }
            }

            this.state = 1340;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 336) {
                {
                this.state = 1339;
                this.orderByCaluse();
                }
            }

            this.state = 1343;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 313) {
                {
                this.state = 1342;
                this.measuresClause();
                }
            }

            this.state = 1346;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 193 || _la === 334) {
                {
                this.state = 1345;
                this.outputMode();
                }
            }

            this.state = 1349;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 1348;
                this.afterMatchStrategy();
                }
            }

            this.state = 1352;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 342) {
                {
                this.state = 1351;
                this.patternDefinition();
                }
            }

            this.state = 1354;
            this.patternVariablesDefinition();
            this.state = 1355;
            this.match(FlinkSQLParser.RR_BRACKET);
            this.state = 1360;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 149, this.context) ) {
            case 1:
                {
                this.state = 1357;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 200) {
                    {
                    this.state = 1356;
                    this.match(FlinkSQLParser.KW_AS);
                    }
                }

                this.state = 1359;
                this.identifier();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public orderByCaluse(): OrderByCaluseContext {
        let localContext = new OrderByCaluseContext(this.context, this.state);
        this.enterRule(localContext, 134, FlinkSQLParser.RULE_orderByCaluse);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1362;
            this.match(FlinkSQLParser.KW_ORDER);
            this.state = 1363;
            this.match(FlinkSQLParser.KW_BY);
            this.state = 1364;
            this.orderItemDefinition();
            this.state = 1369;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 150, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1365;
                    this.match(FlinkSQLParser.COMMA);
                    this.state = 1366;
                    this.orderItemDefinition();
                    }
                    }
                }
                this.state = 1371;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 150, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public orderItemDefinition(): OrderItemDefinitionContext {
        let localContext = new OrderItemDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 136, FlinkSQLParser.RULE_orderItemDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1372;
            this.expression();
            this.state = 1374;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 151, this.context) ) {
            case 1:
                {
                this.state = 1373;
                localContext._ordering = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 8 || _la === 31)) {
                    localContext._ordering = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            }
            this.state = 1378;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 152, this.context) ) {
            case 1:
                {
                this.state = 1376;
                this.match(FlinkSQLParser.KW_NULLS);
                this.state = 1377;
                localContext._nullOrder = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 47 || _la === 78)) {
                    localContext._nullOrder = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public limitClause(): LimitClauseContext {
        let localContext = new LimitClauseContext(this.context, this.state);
        this.enterRule(localContext, 138, FlinkSQLParser.RULE_limitClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1380;
            this.match(FlinkSQLParser.KW_LIMIT);
            this.state = 1383;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSQLParser.KW_ALL:
                {
                this.state = 1381;
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
                this.state = 1382;
                localContext._limit = this.expression();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public partitionByClause(): PartitionByClauseContext {
        let localContext = new PartitionByClauseContext(this.context, this.state);
        this.enterRule(localContext, 140, FlinkSQLParser.RULE_partitionByClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1385;
            this.match(FlinkSQLParser.KW_PARTITION);
            this.state = 1386;
            this.match(FlinkSQLParser.KW_BY);
            this.state = 1387;
            this.expression();
            this.state = 1392;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 440) {
                {
                {
                this.state = 1388;
                this.match(FlinkSQLParser.COMMA);
                this.state = 1389;
                this.expression();
                }
                }
                this.state = 1394;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public quantifiers(): QuantifiersContext {
        let localContext = new QuantifiersContext(this.context, this.state);
        this.enterRule(localContext, 142, FlinkSQLParser.RULE_quantifiers);
        try {
            this.state = 1411;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 155, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 1395;
                this.match(FlinkSQLParser.ASTERISK_SIGN);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                {
                this.state = 1396;
                this.match(FlinkSQLParser.ADD_SIGN);
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                {
                this.state = 1397;
                this.match(FlinkSQLParser.QUESTION_MARK_SIGN);
                }
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                {
                this.state = 1398;
                this.match(FlinkSQLParser.LB_BRACKET);
                this.state = 1399;
                this.match(FlinkSQLParser.DIG_LITERAL);
                this.state = 1400;
                this.match(FlinkSQLParser.COMMA);
                this.state = 1401;
                this.match(FlinkSQLParser.DIG_LITERAL);
                this.state = 1402;
                this.match(FlinkSQLParser.RB_BRACKET);
                }
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                {
                this.state = 1403;
                this.match(FlinkSQLParser.LB_BRACKET);
                this.state = 1404;
                this.match(FlinkSQLParser.DIG_LITERAL);
                this.state = 1405;
                this.match(FlinkSQLParser.COMMA);
                this.state = 1406;
                this.match(FlinkSQLParser.RB_BRACKET);
                }
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                {
                this.state = 1407;
                this.match(FlinkSQLParser.LB_BRACKET);
                this.state = 1408;
                this.match(FlinkSQLParser.COMMA);
                this.state = 1409;
                this.match(FlinkSQLParser.DIG_LITERAL);
                this.state = 1410;
                this.match(FlinkSQLParser.RB_BRACKET);
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public measuresClause(): MeasuresClauseContext {
        let localContext = new MeasuresClauseContext(this.context, this.state);
        this.enterRule(localContext, 144, FlinkSQLParser.RULE_measuresClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1413;
            this.match(FlinkSQLParser.KW_MEASURES);
            this.state = 1414;
            this.projectItemDefinition();
            this.state = 1419;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 440) {
                {
                {
                this.state = 1415;
                this.match(FlinkSQLParser.COMMA);
                this.state = 1416;
                this.projectItemDefinition();
                }
                }
                this.state = 1421;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public patternDefinition(): PatternDefinitionContext {
        let localContext = new PatternDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 146, FlinkSQLParser.RULE_patternDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1422;
            this.match(FlinkSQLParser.KW_PATTERN);
            this.state = 1423;
            this.match(FlinkSQLParser.LR_BRACKET);
            this.state = 1425;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 1424;
                this.patternVariable();
                }
                }
                this.state = 1427;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 459 || _la === 461);
            this.state = 1429;
            this.match(FlinkSQLParser.RR_BRACKET);
            this.state = 1431;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 409) {
                {
                this.state = 1430;
                this.withinClause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public patternVariable(): PatternVariableContext {
        let localContext = new PatternVariableContext(this.context, this.state);
        this.enterRule(localContext, 148, FlinkSQLParser.RULE_patternVariable);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1433;
            this.unquotedIdentifier();
            this.state = 1435;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 438)) & ~0x1F) === 0 && ((1 << (_la - 438)) & 271361) !== 0)) {
                {
                this.state = 1434;
                this.quantifiers();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public outputMode(): OutputModeContext {
        let localContext = new OutputModeContext(this.context, this.state);
        this.enterRule(localContext, 150, FlinkSQLParser.RULE_outputMode);
        try {
            this.state = 1445;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSQLParser.KW_ALL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1437;
                this.match(FlinkSQLParser.KW_ALL);
                this.state = 1438;
                this.match(FlinkSQLParser.KW_ROWS);
                this.state = 1439;
                this.match(FlinkSQLParser.KW_PER);
                this.state = 1440;
                this.match(FlinkSQLParser.KW_MATCH);
                }
                break;
            case FlinkSQLParser.KW_ONE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1441;
                this.match(FlinkSQLParser.KW_ONE);
                this.state = 1442;
                this.match(FlinkSQLParser.KW_ROW);
                this.state = 1443;
                this.match(FlinkSQLParser.KW_PER);
                this.state = 1444;
                this.match(FlinkSQLParser.KW_MATCH);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public afterMatchStrategy(): AfterMatchStrategyContext {
        let localContext = new AfterMatchStrategyContext(this.context, this.state);
        this.enterRule(localContext, 152, FlinkSQLParser.RULE_afterMatchStrategy);
        try {
            this.state = 1471;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 161, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1447;
                this.match(FlinkSQLParser.KW_AFTER);
                this.state = 1448;
                this.match(FlinkSQLParser.KW_MATCH);
                this.state = 1449;
                this.match(FlinkSQLParser.KW_SKIP);
                this.state = 1450;
                this.match(FlinkSQLParser.KW_PAST);
                this.state = 1451;
                this.match(FlinkSQLParser.KW_LAST);
                this.state = 1452;
                this.match(FlinkSQLParser.KW_ROW);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1453;
                this.match(FlinkSQLParser.KW_AFTER);
                this.state = 1454;
                this.match(FlinkSQLParser.KW_MATCH);
                this.state = 1455;
                this.match(FlinkSQLParser.KW_SKIP);
                this.state = 1456;
                this.match(FlinkSQLParser.KW_TO);
                this.state = 1457;
                this.match(FlinkSQLParser.KW_NEXT);
                this.state = 1458;
                this.match(FlinkSQLParser.KW_ROW);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1459;
                this.match(FlinkSQLParser.KW_AFTER);
                this.state = 1460;
                this.match(FlinkSQLParser.KW_MATCH);
                this.state = 1461;
                this.match(FlinkSQLParser.KW_SKIP);
                this.state = 1462;
                this.match(FlinkSQLParser.KW_TO);
                this.state = 1463;
                this.match(FlinkSQLParser.KW_LAST);
                this.state = 1464;
                this.unquotedIdentifier();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1465;
                this.match(FlinkSQLParser.KW_AFTER);
                this.state = 1466;
                this.match(FlinkSQLParser.KW_MATCH);
                this.state = 1467;
                this.match(FlinkSQLParser.KW_SKIP);
                this.state = 1468;
                this.match(FlinkSQLParser.KW_TO);
                this.state = 1469;
                this.match(FlinkSQLParser.KW_FIRST);
                this.state = 1470;
                this.unquotedIdentifier();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public patternVariablesDefinition(): PatternVariablesDefinitionContext {
        let localContext = new PatternVariablesDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 154, FlinkSQLParser.RULE_patternVariablesDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1473;
            this.match(FlinkSQLParser.KW_DEFINE);
            this.state = 1474;
            this.projectItemDefinition();
            this.state = 1479;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 440) {
                {
                {
                this.state = 1475;
                this.match(FlinkSQLParser.COMMA);
                this.state = 1476;
                this.projectItemDefinition();
                }
                }
                this.state = 1481;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public windowFrame(): WindowFrameContext {
        let localContext = new WindowFrameContext(this.context, this.state);
        this.enterRule(localContext, 156, FlinkSQLParser.RULE_windowFrame);
        try {
            this.state = 1491;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSQLParser.KW_RANGE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1482;
                this.match(FlinkSQLParser.KW_RANGE);
                this.state = 1483;
                this.match(FlinkSQLParser.KW_BETWEEN);
                this.state = 1484;
                this.timeIntervalExpression();
                this.state = 1485;
                this.frameBound();
                }
                break;
            case FlinkSQLParser.KW_ROWS:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1487;
                this.match(FlinkSQLParser.KW_ROWS);
                this.state = 1488;
                this.match(FlinkSQLParser.KW_BETWEEN);
                this.state = 1489;
                this.match(FlinkSQLParser.DIG_LITERAL);
                this.state = 1490;
                this.frameBound();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public frameBound(): FrameBoundContext {
        let localContext = new FrameBoundContext(this.context, this.state);
        this.enterRule(localContext, 158, FlinkSQLParser.RULE_frameBound);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1493;
            this.match(FlinkSQLParser.KW_PRECEDING);
            this.state = 1494;
            this.match(FlinkSQLParser.KW_AND);
            this.state = 1495;
            this.match(FlinkSQLParser.KW_CURRENT);
            this.state = 1496;
            this.match(FlinkSQLParser.KW_ROW);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public withinClause(): WithinClauseContext {
        let localContext = new WithinClauseContext(this.context, this.state);
        this.enterRule(localContext, 160, FlinkSQLParser.RULE_withinClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1498;
            this.match(FlinkSQLParser.KW_WITHIN);
            this.state = 1499;
            this.timeIntervalExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public analyzePartitionDefinition(): AnalyzePartitionDefinitionContext {
        let localContext = new AnalyzePartitionDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 162, FlinkSQLParser.RULE_analyzePartitionDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1501;
            this.match(FlinkSQLParser.KW_PARTITION);
            this.state = 1502;
            this.tableCanHasKeyPropertyList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public selfDefinitionClause(): SelfDefinitionClauseContext {
        let localContext = new SelfDefinitionClauseContext(this.context, this.state);
        this.enterRule(localContext, 164, FlinkSQLParser.RULE_selfDefinitionClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1504;
            this.match(FlinkSQLParser.KW_PERIOD);
            this.state = 1505;
            this.match(FlinkSQLParser.KW_FOR);
            this.state = 1506;
            this.match(FlinkSQLParser.KW_SYSTEM_TIME);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public partitionDefinition(): PartitionDefinitionContext {
        let localContext = new PartitionDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 166, FlinkSQLParser.RULE_partitionDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1508;
            this.match(FlinkSQLParser.KW_PARTITIONED);
            this.state = 1509;
            this.match(FlinkSQLParser.KW_BY);
            this.state = 1510;
            this.transformList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public transformList(): TransformListContext {
        let localContext = new TransformListContext(this.context, this.state);
        this.enterRule(localContext, 168, FlinkSQLParser.RULE_transformList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1512;
            this.match(FlinkSQLParser.LR_BRACKET);
            this.state = 1513;
            this.transform();
            this.state = 1518;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 440) {
                {
                {
                this.state = 1514;
                this.match(FlinkSQLParser.COMMA);
                this.state = 1515;
                this.transform();
                }
                }
                this.state = 1520;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1521;
            this.match(FlinkSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public transform(): TransformContext {
        let localContext = new TransformContext(this.context, this.state);
        this.enterRule(localContext, 170, FlinkSQLParser.RULE_transform);
        let _la: number;
        try {
            this.state = 1536;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 166, this.context) ) {
            case 1:
                localContext = new IdentityTransformContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1523;
                this.qualifiedName();
                }
                break;
            case 2:
                localContext = new ApplyTransformContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1524;
                (localContext as ApplyTransformContext)._transformName = this.identifier();
                this.state = 1525;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 1526;
                this.transformArgument();
                this.state = 1531;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 440) {
                    {
                    {
                    this.state = 1527;
                    this.match(FlinkSQLParser.COMMA);
                    this.state = 1528;
                    this.transformArgument();
                    }
                    }
                    this.state = 1533;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1534;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public transformArgument(): TransformArgumentContext {
        let localContext = new TransformArgumentContext(this.context, this.state);
        this.enterRule(localContext, 172, FlinkSQLParser.RULE_transformArgument);
        try {
            this.state = 1540;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 167, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1538;
                this.qualifiedName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1539;
                this.constant();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public likeDefinition(): LikeDefinitionContext {
        let localContext = new LikeDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 174, FlinkSQLParser.RULE_likeDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1542;
            this.match(FlinkSQLParser.KW_LIKE);
            this.state = 1543;
            this.tablePath();
            this.state = 1552;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 436) {
                {
                this.state = 1544;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 1548;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 42 || _la === 99 || _la === 288) {
                    {
                    {
                    this.state = 1545;
                    this.likeOption();
                    }
                    }
                    this.state = 1550;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1551;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public distributed(): DistributedContext {
        let localContext = new DistributedContext(this.context, this.state);
        this.enterRule(localContext, 176, FlinkSQLParser.RULE_distributed);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1554;
            this.match(FlinkSQLParser.KW_DISTRIBUTED);
            this.state = 1563;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 212) {
                {
                this.state = 1555;
                this.match(FlinkSQLParser.KW_BY);
                this.state = 1557;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 423) {
                    {
                    this.state = 1556;
                    this.match(FlinkSQLParser.KW_HASH);
                    }
                }

                this.state = 1559;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 1560;
                this.identifier();
                this.state = 1561;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
            }

            this.state = 1569;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 296) {
                {
                this.state = 1565;
                this.match(FlinkSQLParser.KW_INTO);
                this.state = 1566;
                this.decimalLiteral();
                this.state = 1567;
                this.match(FlinkSQLParser.KW_BUCKETS);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public distribution(): DistributionContext {
        let localContext = new DistributionContext(this.context, this.state);
        this.enterRule(localContext, 178, FlinkSQLParser.RULE_distribution);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1571;
            this.match(FlinkSQLParser.KW_DISTRIBUTION);
            this.state = 1580;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 212) {
                {
                this.state = 1572;
                this.match(FlinkSQLParser.KW_BY);
                this.state = 1574;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 423) {
                    {
                    this.state = 1573;
                    this.match(FlinkSQLParser.KW_HASH);
                    }
                }

                this.state = 1576;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 1577;
                this.identifier();
                this.state = 1578;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
            }

            this.state = 1586;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 296) {
                {
                this.state = 1582;
                this.match(FlinkSQLParser.KW_INTO);
                this.state = 1583;
                this.decimalLiteral();
                this.state = 1584;
                this.match(FlinkSQLParser.KW_BUCKETS);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public likeOption(): LikeOptionContext {
        let localContext = new LikeOptionContext(this.context, this.state);
        this.enterRule(localContext, 180, FlinkSQLParser.RULE_likeOption);
        let _la: number;
        try {
            this.state = 1592;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 176, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 1588;
                _la = this.tokenStream.LA(1);
                if(!(_la === 42 || _la === 288)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1589;
                _la = this.tokenStream.LA(1);
                if(!(_la === 22 || _la === 101 || _la === 193)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                {
                this.state = 1590;
                _la = this.tokenStream.LA(1);
                if(!(_la === 42 || _la === 99 || _la === 288)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1591;
                _la = this.tokenStream.LA(1);
                if(!(_la === 55 || _la === 95 || _la === 185)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnOptionDefinition(): ColumnOptionDefinitionContext {
        let localContext = new ColumnOptionDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 182, FlinkSQLParser.RULE_columnOptionDefinition);
        try {
            this.state = 1597;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 177, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1594;
                this.physicalColumnDefinition();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1595;
                this.metadataColumnDefinition();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1596;
                this.computedColumnDefinition();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public physicalColumnDefinition(): PhysicalColumnDefinitionContext {
        let localContext = new PhysicalColumnDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 184, FlinkSQLParser.RULE_physicalColumnDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1599;
            this.columnName();
            this.state = 1600;
            this.columnType();
            this.state = 1602;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 231 || ((((_la - 326)) & ~0x1F) === 0 && ((1 << (_la - 326)) & 8388617) !== 0)) {
                {
                this.state = 1601;
                this.columnConstraint();
                }
            }

            this.state = 1605;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 179, this.context) ) {
            case 1:
                {
                this.state = 1604;
                this.commentSpec();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public computedColumnExpression(): ComputedColumnExpressionContext {
        let localContext = new ComputedColumnExpressionContext(this.context, this.state);
        this.enterRule(localContext, 186, FlinkSQLParser.RULE_computedColumnExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1607;
            this.expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public watermarkDefinition(): WatermarkDefinitionContext {
        let localContext = new WatermarkDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 188, FlinkSQLParser.RULE_watermarkDefinition);
        let _la: number;
        try {
            this.state = 1626;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 182, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1609;
                this.match(FlinkSQLParser.KW_WATERMARK);
                this.state = 1610;
                this.match(FlinkSQLParser.KW_FOR);
                this.state = 1611;
                this.expression();
                this.state = 1612;
                this.match(FlinkSQLParser.KW_AS);
                this.state = 1613;
                this.expression();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1615;
                this.match(FlinkSQLParser.KW_WATERMARK);
                this.state = 1616;
                this.match(FlinkSQLParser.KW_FOR);
                this.state = 1619;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 180, this.context) ) {
                case 1:
                    {
                    this.state = 1617;
                    this.uid();
                    }
                    break;
                case 2:
                    {
                    this.state = 1618;
                    this.expression();
                    }
                    break;
                }
                this.state = 1621;
                this.match(FlinkSQLParser.KW_AS);
                this.state = 1622;
                this.uid();
                this.state = 1624;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 295) {
                    {
                    this.state = 1623;
                    this.timeIntervalExpression();
                    }
                }

                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableConstraint(): TableConstraintContext {
        let localContext = new TableConstraintContext(this.context, this.state);
        this.enterRule(localContext, 190, FlinkSQLParser.RULE_tableConstraint);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1630;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 231) {
                {
                this.state = 1628;
                this.match(FlinkSQLParser.KW_CONSTRAINT);
                this.state = 1629;
                this.constraintName();
                }
            }

            this.state = 1632;
            this.match(FlinkSQLParser.KW_PRIMARY);
            this.state = 1633;
            this.match(FlinkSQLParser.KW_KEY);
            this.state = 1634;
            this.columnNameList();
            this.state = 1635;
            this.match(FlinkSQLParser.KW_NOT);
            this.state = 1636;
            this.match(FlinkSQLParser.KW_ENFORCED);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constraintName(): ConstraintNameContext {
        let localContext = new ConstraintNameContext(this.context, this.state);
        this.enterRule(localContext, 192, FlinkSQLParser.RULE_constraintName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1638;
            this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public valuesDefinition(): ValuesDefinitionContext {
        let localContext = new ValuesDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 194, FlinkSQLParser.RULE_valuesDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1640;
            this.match(FlinkSQLParser.KW_VALUES);
            this.state = 1641;
            this.valuesRowDefinition();
            this.state = 1646;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 440) {
                {
                {
                this.state = 1642;
                this.match(FlinkSQLParser.COMMA);
                this.state = 1643;
                this.valuesRowDefinition();
                }
                }
                this.state = 1648;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public valuesRowDefinition(): ValuesRowDefinitionContext {
        let localContext = new ValuesRowDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 196, FlinkSQLParser.RULE_valuesRowDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1649;
            this.match(FlinkSQLParser.LR_BRACKET);
            this.state = 1650;
            this.constant();
            this.state = 1655;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 440) {
                {
                {
                this.state = 1651;
                this.match(FlinkSQLParser.COMMA);
                this.state = 1652;
                this.constant();
                }
                }
                this.state = 1657;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1658;
            this.match(FlinkSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lengthOneDimension(): LengthOneDimensionContext {
        let localContext = new LengthOneDimensionContext(this.context, this.state);
        this.enterRule(localContext, 198, FlinkSQLParser.RULE_lengthOneDimension);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1660;
            this.match(FlinkSQLParser.LR_BRACKET);
            this.state = 1661;
            this.decimalLiteral();
            this.state = 1662;
            this.match(FlinkSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext {
        let localContext = new LengthTwoOptionalDimensionContext(this.context, this.state);
        this.enterRule(localContext, 200, FlinkSQLParser.RULE_lengthTwoOptionalDimension);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1664;
            this.match(FlinkSQLParser.LR_BRACKET);
            this.state = 1665;
            this.decimalLiteral();
            this.state = 1668;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 440) {
                {
                this.state = 1666;
                this.match(FlinkSQLParser.COMMA);
                this.state = 1667;
                this.decimalLiteral();
                }
            }

            this.state = 1670;
            this.match(FlinkSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lengthTwoStringDimension(): LengthTwoStringDimensionContext {
        let localContext = new LengthTwoStringDimensionContext(this.context, this.state);
        this.enterRule(localContext, 202, FlinkSQLParser.RULE_lengthTwoStringDimension);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1672;
            this.match(FlinkSQLParser.LR_BRACKET);
            this.state = 1673;
            this.stringLiteral();
            this.state = 1676;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 440) {
                {
                this.state = 1674;
                this.match(FlinkSQLParser.COMMA);
                this.state = 1675;
                this.stringLiteral();
                }
            }

            this.state = 1678;
            this.match(FlinkSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lengthOneTypeDimension(): LengthOneTypeDimensionContext {
        let localContext = new LengthOneTypeDimensionContext(this.context, this.state);
        this.enterRule(localContext, 204, FlinkSQLParser.RULE_lengthOneTypeDimension);
        let _la: number;
        try {
            localContext = new LengthSymbolsTypeDimensionContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1680;
            this.match(FlinkSQLParser.LESS_SYMBOL);
            this.state = 1681;
            this.columnType();
            this.state = 1686;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 440) {
                {
                {
                this.state = 1682;
                this.match(FlinkSQLParser.COMMA);
                this.state = 1683;
                this.columnType();
                }
                }
                this.state = 1688;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1689;
            this.match(FlinkSQLParser.GREATER_SYMBOL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mapTypeDimension(): MapTypeDimensionContext {
        let localContext = new MapTypeDimensionContext(this.context, this.state);
        this.enterRule(localContext, 206, FlinkSQLParser.RULE_mapTypeDimension);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1691;
            this.match(FlinkSQLParser.LESS_SYMBOL);
            this.state = 1692;
            this.columnType();
            {
            this.state = 1693;
            this.match(FlinkSQLParser.COMMA);
            this.state = 1694;
            this.columnType();
            }
            this.state = 1696;
            this.match(FlinkSQLParser.GREATER_SYMBOL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rowTypeDimension(): RowTypeDimensionContext {
        let localContext = new RowTypeDimensionContext(this.context, this.state);
        this.enterRule(localContext, 208, FlinkSQLParser.RULE_rowTypeDimension);
        let _la: number;
        try {
            localContext = new RowSymbolsTypeDimensionContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1698;
            this.match(FlinkSQLParser.LESS_SYMBOL);
            this.state = 1699;
            this.columnName();
            this.state = 1700;
            this.columnType();
            this.state = 1707;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 440) {
                {
                {
                this.state = 1701;
                this.match(FlinkSQLParser.COMMA);
                this.state = 1702;
                this.columnName();
                this.state = 1703;
                this.columnType();
                }
                }
                this.state = 1709;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1710;
            this.match(FlinkSQLParser.GREATER_SYMBOL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnConstraint(): ColumnConstraintContext {
        let localContext = new ColumnConstraintContext(this.context, this.state);
        this.enterRule(localContext, 210, FlinkSQLParser.RULE_columnConstraint);
        let _la: number;
        try {
            this.state = 1726;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSQLParser.KW_CONSTRAINT:
            case FlinkSQLParser.KW_PRIMARY:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1714;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 231) {
                    {
                    this.state = 1712;
                    this.match(FlinkSQLParser.KW_CONSTRAINT);
                    this.state = 1713;
                    this.constraintName();
                    }
                }

                this.state = 1716;
                this.match(FlinkSQLParser.KW_PRIMARY);
                this.state = 1717;
                this.match(FlinkSQLParser.KW_KEY);
                this.state = 1720;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 326) {
                    {
                    this.state = 1718;
                    this.match(FlinkSQLParser.KW_NOT);
                    this.state = 1719;
                    this.match(FlinkSQLParser.KW_ENFORCED);
                    }
                }

                }
                break;
            case FlinkSQLParser.KW_NOT:
            case FlinkSQLParser.KW_NULL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1723;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 326) {
                    {
                    this.state = 1722;
                    this.match(FlinkSQLParser.KW_NOT);
                    }
                }

                this.state = 1725;
                this.match(FlinkSQLParser.KW_NULL);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public commentSpec(): CommentSpecContext {
        let localContext = new CommentSpecContext(this.context, this.state);
        this.enterRule(localContext, 212, FlinkSQLParser.RULE_commentSpec);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1728;
            this.match(FlinkSQLParser.KW_COMMENT);
            this.state = 1729;
            this.match(FlinkSQLParser.STRING_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public metadataColumnDefinition(): MetadataColumnDefinitionContext {
        let localContext = new MetadataColumnDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 214, FlinkSQLParser.RULE_metadataColumnDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1731;
            this.columnName();
            this.state = 1732;
            this.columnType();
            this.state = 1733;
            this.match(FlinkSQLParser.KW_METADATA);
            this.state = 1736;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 275) {
                {
                this.state = 1734;
                this.match(FlinkSQLParser.KW_FROM);
                this.state = 1735;
                this.metadataKey();
                }
            }

            this.state = 1739;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 183) {
                {
                this.state = 1738;
                this.match(FlinkSQLParser.KW_VIRTUAL);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public metadataKey(): MetadataKeyContext {
        let localContext = new MetadataKeyContext(this.context, this.state);
        this.enterRule(localContext, 216, FlinkSQLParser.RULE_metadataKey);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1741;
            this.match(FlinkSQLParser.STRING_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public computedColumnDefinition(): ComputedColumnDefinitionContext {
        let localContext = new ComputedColumnDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 218, FlinkSQLParser.RULE_computedColumnDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1743;
            this.columnName();
            this.state = 1744;
            this.match(FlinkSQLParser.KW_AS);
            this.state = 1745;
            this.computedColumnExpression();
            this.state = 1747;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 196, this.context) ) {
            case 1:
                {
                this.state = 1746;
                this.commentSpec();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnName(): ColumnNameContext {
        let localContext = new ColumnNameContext(this.context, this.state);
        this.enterRule(localContext, 220, FlinkSQLParser.RULE_columnName);
        try {
            this.state = 1751;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 197, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1749;
                this.uid();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1750;
                this.expression();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnNameList(): ColumnNameListContext {
        let localContext = new ColumnNameListContext(this.context, this.state);
        this.enterRule(localContext, 222, FlinkSQLParser.RULE_columnNameList);
        let _la: number;
        try {
            this.state = 1772;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 200, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 1753;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 1754;
                this.columnName();
                this.state = 1759;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 440) {
                    {
                    {
                    this.state = 1755;
                    this.match(FlinkSQLParser.COMMA);
                    this.state = 1756;
                    this.columnName();
                    }
                    }
                    this.state = 1761;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1762;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                {
                this.state = 1764;
                this.columnName();
                this.state = 1769;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 440) {
                    {
                    {
                    this.state = 1765;
                    this.match(FlinkSQLParser.COMMA);
                    this.state = 1766;
                    this.columnName();
                    }
                    }
                    this.state = 1771;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnType(): ColumnTypeContext {
        let localContext = new ColumnTypeContext(this.context, this.state);
        this.enterRule(localContext, 224, FlinkSQLParser.RULE_columnType);
        let _la: number;
        try {
            this.state = 1847;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSQLParser.KW_BOOLEAN:
            case FlinkSQLParser.KW_DATE:
            case FlinkSQLParser.KW_NULL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1774;
                localContext._typeName = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 210 || _la === 242 || _la === 329)) {
                    localContext._typeName = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
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
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1775;
                localContext._typeName = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 10 || _la === 158 || _la === 165 || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & 8195) !== 0) || _la === 243 || _la === 292 || _la === 293 || ((((_la - 369)) & ~0x1F) === 0 && ((1 << (_la - 369)) & 270337) !== 0) || _la === 403 || _la === 404)) {
                    localContext._typeName = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1777;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 436) {
                    {
                    this.state = 1776;
                    this.lengthOneDimension();
                    }
                }

                }
                break;
            case FlinkSQLParser.KW_TIMESTAMP:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1779;
                localContext._typeName = this.match(FlinkSQLParser.KW_TIMESTAMP);
                this.state = 1781;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 436) {
                    {
                    this.state = 1780;
                    this.lengthOneDimension();
                    }
                }

                this.state = 1789;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 408 || _la === 410) {
                    {
                    this.state = 1783;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 408 || _la === 410)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 1785;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 309) {
                        {
                        this.state = 1784;
                        this.match(FlinkSQLParser.KW_LOCAL);
                        }
                    }

                    this.state = 1787;
                    this.match(FlinkSQLParser.KW_TIME);
                    this.state = 1788;
                    this.match(FlinkSQLParser.KW_ZONE);
                    }
                }

                }
                break;
            case FlinkSQLParser.KW_TIMESTAMP_3:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1791;
                localContext._typeName = this.match(FlinkSQLParser.KW_TIMESTAMP_3);
                this.state = 1793;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 436) {
                    {
                    this.state = 1792;
                    this.lengthOneDimension();
                    }
                }

                this.state = 1801;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 408 || _la === 410) {
                    {
                    this.state = 1795;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 408 || _la === 410)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 1797;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 309) {
                        {
                        this.state = 1796;
                        this.match(FlinkSQLParser.KW_LOCAL);
                        }
                    }

                    this.state = 1799;
                    this.match(FlinkSQLParser.KW_TIME);
                    this.state = 1800;
                    this.match(FlinkSQLParser.KW_ZONE);
                    }
                }

                }
                break;
            case FlinkSQLParser.KW_TIMESTAMP_6:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1803;
                localContext._typeName = this.match(FlinkSQLParser.KW_TIMESTAMP_6);
                this.state = 1805;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 436) {
                    {
                    this.state = 1804;
                    this.lengthOneDimension();
                    }
                }

                this.state = 1813;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 408 || _la === 410) {
                    {
                    this.state = 1807;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 408 || _la === 410)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 1809;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 309) {
                        {
                        this.state = 1808;
                        this.match(FlinkSQLParser.KW_LOCAL);
                        }
                    }

                    this.state = 1811;
                    this.match(FlinkSQLParser.KW_TIME);
                    this.state = 1812;
                    this.match(FlinkSQLParser.KW_ZONE);
                    }
                }

                }
                break;
            case FlinkSQLParser.KW_TIMESTAMP_9:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1815;
                localContext._typeName = this.match(FlinkSQLParser.KW_TIMESTAMP_9);
                this.state = 1817;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 436) {
                    {
                    this.state = 1816;
                    this.lengthOneDimension();
                    }
                }

                this.state = 1825;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 408 || _la === 410) {
                    {
                    this.state = 1819;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 408 || _la === 410)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 1821;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 309) {
                        {
                        this.state = 1820;
                        this.match(FlinkSQLParser.KW_LOCAL);
                        }
                    }

                    this.state = 1823;
                    this.match(FlinkSQLParser.KW_TIME);
                    this.state = 1824;
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
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1827;
                localContext._typeName = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 245)) & ~0x1F) === 0 && ((1 << (_la - 245)) & 268437507) !== 0) || _la === 330)) {
                    localContext._typeName = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1829;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 436) {
                    {
                    this.state = 1828;
                    this.lengthTwoOptionalDimension();
                    }
                }

                }
                break;
            case FlinkSQLParser.KW_ARRAY:
            case FlinkSQLParser.KW_MULTISET:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1831;
                localContext._type_ = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 199 || _la === 321)) {
                    localContext._type_ = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1833;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 431) {
                    {
                    this.state = 1832;
                    this.lengthOneTypeDimension();
                    }
                }

                }
                break;
            case FlinkSQLParser.KW_MAP:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1835;
                localContext._type_ = this.match(FlinkSQLParser.KW_MAP);
                this.state = 1837;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 431) {
                    {
                    this.state = 1836;
                    this.mapTypeDimension();
                    }
                }

                }
                break;
            case FlinkSQLParser.KW_ROW:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1839;
                localContext._type_ = this.match(FlinkSQLParser.KW_ROW);
                this.state = 1841;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 431) {
                    {
                    this.state = 1840;
                    this.rowTypeDimension();
                    }
                }

                }
                break;
            case FlinkSQLParser.KW_RAW:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1843;
                localContext._type_ = this.match(FlinkSQLParser.KW_RAW);
                this.state = 1845;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 436) {
                    {
                    this.state = 1844;
                    this.lengthTwoStringDimension();
                    }
                }

                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expression(): ExpressionContext {
        let localContext = new ExpressionContext(this.context, this.state);
        this.enterRule(localContext, 226, FlinkSQLParser.RULE_expression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1849;
            this.booleanExpression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public booleanExpression(): BooleanExpressionContext;
    public booleanExpression(_p: number): BooleanExpressionContext;
    public booleanExpression(_p?: number): BooleanExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new BooleanExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 228;
        this.enterRecursionRule(localContext, 228, FlinkSQLParser.RULE_booleanExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1863;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 221, this.context) ) {
            case 1:
                {
                localContext = new LogicalNotContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1852;
                this.match(FlinkSQLParser.KW_NOT);
                this.state = 1853;
                this.booleanExpression(6);
                }
                break;
            case 2:
                {
                localContext = new ExistsContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1854;
                this.match(FlinkSQLParser.KW_EXISTS);
                this.state = 1855;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 1856;
                this.queryStatement(0);
                this.state = 1857;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
                break;
            case 3:
                {
                localContext = new PredicatedContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1859;
                this.valueExpression(0);
                this.state = 1861;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 220, this.context) ) {
                case 1:
                    {
                    this.state = 1860;
                    this.predicate();
                    }
                    break;
                }
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1879;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 224, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1877;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 223, this.context) ) {
                    case 1:
                        {
                        localContext = new LogicalBinaryContext(new BooleanExpressionContext(parentContext, parentState));
                        (localContext as LogicalBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSQLParser.RULE_booleanExpression);
                        this.state = 1865;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 1866;
                        (localContext as LogicalBinaryContext)._operator = this.match(FlinkSQLParser.KW_AND);
                        this.state = 1867;
                        (localContext as LogicalBinaryContext)._right = this.booleanExpression(4);
                        }
                        break;
                    case 2:
                        {
                        localContext = new LogicalBinaryContext(new BooleanExpressionContext(parentContext, parentState));
                        (localContext as LogicalBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSQLParser.RULE_booleanExpression);
                        this.state = 1868;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 1869;
                        (localContext as LogicalBinaryContext)._operator = this.match(FlinkSQLParser.KW_OR);
                        this.state = 1870;
                        (localContext as LogicalBinaryContext)._right = this.booleanExpression(3);
                        }
                        break;
                    case 3:
                        {
                        localContext = new LogicalNestedContext(new BooleanExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, FlinkSQLParser.RULE_booleanExpression);
                        this.state = 1871;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 1872;
                        this.match(FlinkSQLParser.KW_IS);
                        this.state = 1874;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 326) {
                            {
                            this.state = 1873;
                            this.match(FlinkSQLParser.KW_NOT);
                            }
                        }

                        this.state = 1876;
                        (localContext as LogicalNestedContext)._kind = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 271 || _la === 329 || _la === 390 || _la === 394)) {
                            (localContext as LogicalNestedContext)._kind = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        }
                        break;
                    }
                    }
                }
                this.state = 1881;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 224, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public predicate(): PredicateContext {
        let localContext = new PredicateContext(this.context, this.state);
        this.enterRule(localContext, 230, FlinkSQLParser.RULE_predicate);
        let _la: number;
        try {
            this.state = 1949;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 235, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1883;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 326) {
                    {
                    this.state = 1882;
                    this.match(FlinkSQLParser.KW_NOT);
                    }
                }

                this.state = 1885;
                localContext._kind = this.match(FlinkSQLParser.KW_BETWEEN);
                this.state = 1887;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 201 || _la === 374) {
                    {
                    this.state = 1886;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 201 || _la === 374)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                }

                this.state = 1889;
                localContext._lower = this.valueExpression(0);
                this.state = 1890;
                this.match(FlinkSQLParser.KW_AND);
                this.state = 1891;
                localContext._upper = this.valueExpression(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1894;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 326) {
                    {
                    this.state = 1893;
                    this.match(FlinkSQLParser.KW_NOT);
                    }
                }

                this.state = 1896;
                localContext._kind = this.match(FlinkSQLParser.KW_IN);
                this.state = 1897;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 1898;
                this.expression();
                this.state = 1903;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 440) {
                    {
                    {
                    this.state = 1899;
                    this.match(FlinkSQLParser.COMMA);
                    this.state = 1900;
                    this.expression();
                    }
                    }
                    this.state = 1905;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1906;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1909;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 326) {
                    {
                    this.state = 1908;
                    this.match(FlinkSQLParser.KW_NOT);
                    }
                }

                this.state = 1911;
                localContext._kind = this.match(FlinkSQLParser.KW_IN);
                this.state = 1912;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 1913;
                this.queryStatement(0);
                this.state = 1914;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1916;
                localContext._kind = this.match(FlinkSQLParser.KW_EXISTS);
                this.state = 1917;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 1918;
                this.queryStatement(0);
                this.state = 1919;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1922;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 326) {
                    {
                    this.state = 1921;
                    this.match(FlinkSQLParser.KW_NOT);
                    }
                }

                this.state = 1924;
                localContext._kind = this.match(FlinkSQLParser.KW_RLIKE);
                this.state = 1925;
                localContext._pattern = this.valueExpression(0);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1926;
                this.likePredicate();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1927;
                this.match(FlinkSQLParser.KW_IS);
                this.state = 1929;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 326) {
                    {
                    this.state = 1928;
                    this.match(FlinkSQLParser.KW_NOT);
                    }
                }

                this.state = 1931;
                localContext._kind = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 271 || _la === 329 || _la === 390 || _la === 394)) {
                    localContext._kind = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1932;
                this.match(FlinkSQLParser.KW_IS);
                this.state = 1934;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 326) {
                    {
                    this.state = 1933;
                    this.match(FlinkSQLParser.KW_NOT);
                    }
                }

                this.state = 1936;
                localContext._kind = this.match(FlinkSQLParser.KW_DISTINCT);
                this.state = 1937;
                this.match(FlinkSQLParser.KW_FROM);
                this.state = 1938;
                localContext._right = this.valueExpression(0);
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1940;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 326) {
                    {
                    this.state = 1939;
                    this.match(FlinkSQLParser.KW_NOT);
                    }
                }

                this.state = 1942;
                localContext._kind = this.match(FlinkSQLParser.KW_SIMILAR);
                this.state = 1943;
                this.match(FlinkSQLParser.KW_TO);
                this.state = 1944;
                localContext._right = this.valueExpression(0);
                this.state = 1947;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 234, this.context) ) {
                case 1:
                    {
                    this.state = 1945;
                    this.match(FlinkSQLParser.KW_ESCAPE);
                    this.state = 1946;
                    this.stringLiteral();
                    }
                    break;
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public likePredicate(): LikePredicateContext {
        let localContext = new LikePredicateContext(this.context, this.state);
        this.enterRule(localContext, 232, FlinkSQLParser.RULE_likePredicate);
        let _la: number;
        try {
            this.state = 1980;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 241, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1952;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 326) {
                    {
                    this.state = 1951;
                    this.match(FlinkSQLParser.KW_NOT);
                    }
                }

                this.state = 1954;
                localContext._kind = this.match(FlinkSQLParser.KW_LIKE);
                this.state = 1955;
                localContext._quantifier = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 193 || _la === 197)) {
                    localContext._quantifier = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1969;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 238, this.context) ) {
                case 1:
                    {
                    this.state = 1956;
                    this.match(FlinkSQLParser.LR_BRACKET);
                    this.state = 1957;
                    this.match(FlinkSQLParser.RR_BRACKET);
                    }
                    break;
                case 2:
                    {
                    this.state = 1958;
                    this.match(FlinkSQLParser.LR_BRACKET);
                    this.state = 1959;
                    this.expression();
                    this.state = 1964;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 440) {
                        {
                        {
                        this.state = 1960;
                        this.match(FlinkSQLParser.COMMA);
                        this.state = 1961;
                        this.expression();
                        }
                        }
                        this.state = 1966;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 1967;
                    this.match(FlinkSQLParser.RR_BRACKET);
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1972;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 326) {
                    {
                    this.state = 1971;
                    this.match(FlinkSQLParser.KW_NOT);
                    }
                }

                this.state = 1974;
                localContext._kind = this.match(FlinkSQLParser.KW_LIKE);
                this.state = 1975;
                localContext._pattern = this.valueExpression(0);
                this.state = 1978;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 240, this.context) ) {
                case 1:
                    {
                    this.state = 1976;
                    this.match(FlinkSQLParser.KW_ESCAPE);
                    this.state = 1977;
                    this.stringLiteral();
                    }
                    break;
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public valueExpression(): ValueExpressionContext;
    public valueExpression(_p: number): ValueExpressionContext;
    public valueExpression(_p?: number): ValueExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ValueExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 234;
        this.enterRecursionRule(localContext, 234, FlinkSQLParser.RULE_valueExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1986;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 242, this.context) ) {
            case 1:
                {
                localContext = new ValueExpressionDefaultContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1983;
                this.primaryExpression(0);
                }
                break;
            case 2:
                {
                localContext = new ArithmeticUnaryContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1984;
                (localContext as ArithmeticUnaryContext)._operator = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 425)) & ~0x1F) === 0 && ((1 << (_la - 425)) & 100663297) !== 0))) {
                    (localContext as ArithmeticUnaryContext)._operator = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1985;
                this.valueExpression(7);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2009;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 244, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 2007;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 243, this.context) ) {
                    case 1:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSQLParser.RULE_valueExpression);
                        this.state = 1988;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 1989;
                        (localContext as ArithmeticBinaryContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 33 || ((((_la - 448)) & ~0x1F) === 0 && ((1 << (_la - 448)) & 145) !== 0))) {
                            (localContext as ArithmeticBinaryContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1990;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(7);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSQLParser.RULE_valueExpression);
                        this.state = 1991;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 1992;
                        (localContext as ArithmeticBinaryContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 450)) & ~0x1F) === 0 && ((1 << (_la - 450)) & 11) !== 0))) {
                            (localContext as ArithmeticBinaryContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1993;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(6);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSQLParser.RULE_valueExpression);
                        this.state = 1994;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 1995;
                        (localContext as ArithmeticBinaryContext)._operator = this.match(FlinkSQLParser.BIT_AND_OP);
                        this.state = 1996;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(5);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSQLParser.RULE_valueExpression);
                        this.state = 1997;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 1998;
                        (localContext as ArithmeticBinaryContext)._operator = this.match(FlinkSQLParser.BIT_XOR_OP);
                        this.state = 1999;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(4);
                        }
                        break;
                    case 5:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSQLParser.RULE_valueExpression);
                        this.state = 2000;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 2001;
                        (localContext as ArithmeticBinaryContext)._operator = this.match(FlinkSQLParser.BIT_OR_OP);
                        this.state = 2002;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(3);
                        }
                        break;
                    case 6:
                        {
                        localContext = new ComparisonContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ComparisonContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSQLParser.RULE_valueExpression);
                        this.state = 2003;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 2004;
                        this.comparisonOperator();
                        this.state = 2005;
                        (localContext as ComparisonContext)._right = this.valueExpression(2);
                        }
                        break;
                    }
                    }
                }
                this.state = 2011;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 244, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }

    public primaryExpression(): PrimaryExpressionContext;
    public primaryExpression(_p: number): PrimaryExpressionContext;
    public primaryExpression(_p?: number): PrimaryExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new PrimaryExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 236;
        this.enterRecursionRule(localContext, 236, FlinkSQLParser.RULE_primaryExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2123;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 256, this.context) ) {
            case 1:
                {
                localContext = new SearchedCaseContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 2013;
                this.match(FlinkSQLParser.KW_CASE);
                this.state = 2015;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 2014;
                    this.whenClause();
                    }
                    }
                    this.state = 2017;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 405);
                this.state = 2021;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 260) {
                    {
                    this.state = 2019;
                    this.match(FlinkSQLParser.KW_ELSE);
                    this.state = 2020;
                    (localContext as SearchedCaseContext)._elseExpression = this.expression();
                    }
                }

                this.state = 2023;
                this.match(FlinkSQLParser.KW_END);
                }
                break;
            case 2:
                {
                localContext = new SimpleCaseContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2025;
                this.match(FlinkSQLParser.KW_CASE);
                this.state = 2026;
                (localContext as SimpleCaseContext)._value = this.expression();
                this.state = 2028;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 2027;
                    this.whenClause();
                    }
                    }
                    this.state = 2030;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 405);
                this.state = 2034;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 260) {
                    {
                    this.state = 2032;
                    this.match(FlinkSQLParser.KW_ELSE);
                    this.state = 2033;
                    (localContext as SimpleCaseContext)._elseExpression = this.expression();
                    }
                }

                this.state = 2036;
                this.match(FlinkSQLParser.KW_END);
                }
                break;
            case 3:
                {
                localContext = new CastContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2038;
                this.match(FlinkSQLParser.KW_CAST);
                this.state = 2039;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 2040;
                this.expression();
                this.state = 2041;
                this.match(FlinkSQLParser.KW_AS);
                this.state = 2042;
                this.columnType();
                this.state = 2043;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
                break;
            case 4:
                {
                localContext = new FirstContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2045;
                this.match(FlinkSQLParser.KW_FIRST);
                this.state = 2046;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 2047;
                this.expression();
                this.state = 2050;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 63) {
                    {
                    this.state = 2048;
                    this.match(FlinkSQLParser.KW_IGNORE);
                    this.state = 2049;
                    this.match(FlinkSQLParser.KW_NULLS);
                    }
                }

                this.state = 2052;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
                break;
            case 5:
                {
                localContext = new LastContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2054;
                this.match(FlinkSQLParser.KW_LAST);
                this.state = 2055;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 2056;
                this.expression();
                this.state = 2059;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 63) {
                    {
                    this.state = 2057;
                    this.match(FlinkSQLParser.KW_IGNORE);
                    this.state = 2058;
                    this.match(FlinkSQLParser.KW_NULLS);
                    }
                }

                this.state = 2061;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
                break;
            case 6:
                {
                localContext = new PositionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2063;
                this.match(FlinkSQLParser.KW_POSITION);
                this.state = 2064;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 2065;
                (localContext as PositionContext)._substr = this.valueExpression(0);
                this.state = 2066;
                this.match(FlinkSQLParser.KW_IN);
                this.state = 2067;
                (localContext as PositionContext)._str = this.valueExpression(0);
                this.state = 2068;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
                break;
            case 7:
                {
                localContext = new ConstantDefaultContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2070;
                this.constant();
                }
                break;
            case 8:
                {
                localContext = new StarContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2071;
                this.match(FlinkSQLParser.ASTERISK_SIGN);
                }
                break;
            case 9:
                {
                localContext = new StarContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2072;
                this.uid();
                this.state = 2073;
                this.match(FlinkSQLParser.DOT);
                this.state = 2074;
                this.match(FlinkSQLParser.ASTERISK_SIGN);
                }
                break;
            case 10:
                {
                localContext = new SubqueryExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2076;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 2077;
                this.queryStatement(0);
                this.state = 2078;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
                break;
            case 11:
                {
                localContext = new FunctionCallContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2080;
                this.functionName();
                this.state = 2081;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 2093;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4293918704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4278190079) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294966911) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 3892279295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 3623845887) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 4294963199) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & 117966979) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & 537526789) !== 0) || ((((_la - 266)) & ~0x1F) === 0 && ((1 << (_la - 266)) & 537461809) !== 0) || ((((_la - 299)) & ~0x1F) === 0 && ((1 << (_la - 299)) & 1747191929) !== 0) || ((((_la - 340)) & ~0x1F) === 0 && ((1 << (_la - 340)) & 4757921) !== 0) || ((((_la - 372)) & ~0x1F) === 0 && ((1 << (_la - 372)) & 168721411) !== 0) || ((((_la - 411)) & ~0x1F) === 0 && ((1 << (_la - 411)) & 33570817) !== 0) || ((((_la - 443)) & ~0x1F) === 0 && ((1 << (_la - 443)) & 491937) !== 0)) {
                    {
                    this.state = 2083;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 251, this.context) ) {
                    case 1:
                        {
                        this.state = 2082;
                        this.setQuantifier();
                        }
                        break;
                    }
                    this.state = 2085;
                    this.functionParam();
                    this.state = 2090;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 440) {
                        {
                        {
                        this.state = 2086;
                        this.match(FlinkSQLParser.COMMA);
                        this.state = 2087;
                        this.functionParam();
                        }
                        }
                        this.state = 2092;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 2095;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
                break;
            case 12:
                {
                localContext = new FunctionCallContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2097;
                this.functionName();
                this.state = 2098;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 2099;
                this.functionParam();
                this.state = 2100;
                this.match(FlinkSQLParser.KW_TO);
                this.state = 2101;
                this.functionParam();
                this.state = 2102;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
                break;
            case 13:
                {
                localContext = new FunctionCallFilterContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2104;
                this.functionName();
                this.state = 2105;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 2107;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 254, this.context) ) {
                case 1:
                    {
                    this.state = 2106;
                    this.setQuantifier();
                    }
                    break;
                }
                this.state = 2109;
                this.functionParam();
                this.state = 2110;
                this.match(FlinkSQLParser.RR_BRACKET);
                this.state = 2112;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 255, this.context) ) {
                case 1:
                    {
                    this.state = 2111;
                    this.filterClause();
                    }
                    break;
                }
                }
                break;
            case 14:
                {
                localContext = new ColumnReferenceContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2114;
                this.identifier();
                }
                break;
            case 15:
                {
                localContext = new DereferenceContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2115;
                this.dereferenceDefinition();
                }
                break;
            case 16:
                {
                localContext = new ParenthesizedExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2116;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 2117;
                this.expression();
                this.state = 2118;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
                break;
            case 17:
                {
                localContext = new EmptyExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2120;
                this.match(FlinkSQLParser.LR_BRACKET);
                this.state = 2121;
                this.match(FlinkSQLParser.RR_BRACKET);
                }
                break;
            case 18:
                {
                localContext = new ComplexDataTypeFieldExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2122;
                this.complexDataTypeExpression();
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2132;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 257, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new SubscriptContext(new PrimaryExpressionContext(parentContext, parentState));
                    (localContext as SubscriptContext)._value = previousContext;
                    this.pushNewRecursionContext(localContext, _startState, FlinkSQLParser.RULE_primaryExpression);
                    this.state = 2125;
                    if (!(this.precpred(this.context, 6))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                    }
                    this.state = 2126;
                    this.match(FlinkSQLParser.LS_BRACKET);
                    this.state = 2127;
                    (localContext as SubscriptContext)._index = this.valueExpression(0);
                    this.state = 2128;
                    this.match(FlinkSQLParser.RS_BRACKET);
                    }
                    }
                }
                this.state = 2134;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 257, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public complexDataTypeExpression(): ComplexDataTypeExpressionContext {
        let localContext = new ComplexDataTypeExpressionContext(this.context, this.state);
        this.enterRule(localContext, 238, FlinkSQLParser.RULE_complexDataTypeExpression);
        try {
            this.state = 2138;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSQLParser.KW_ARRAY:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2135;
                this.arrayExpression();
                }
                break;
            case FlinkSQLParser.KW_ROW:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2136;
                this.rowExpression();
                }
                break;
            case FlinkSQLParser.KW_MAP:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2137;
                this.mapExpression();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arrayExpression(): ArrayExpressionContext {
        let localContext = new ArrayExpressionContext(this.context, this.state);
        this.enterRule(localContext, 240, FlinkSQLParser.RULE_arrayExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2140;
            this.match(FlinkSQLParser.KW_ARRAY);
            this.state = 2141;
            this.match(FlinkSQLParser.LS_BRACKET);
            this.state = 2142;
            this.dataTypeExpression();
            this.state = 2147;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 440) {
                {
                {
                this.state = 2143;
                this.match(FlinkSQLParser.COMMA);
                this.state = 2144;
                this.dataTypeExpression();
                }
                }
                this.state = 2149;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 2150;
            this.match(FlinkSQLParser.RS_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rowExpression(): RowExpressionContext {
        let localContext = new RowExpressionContext(this.context, this.state);
        this.enterRule(localContext, 242, FlinkSQLParser.RULE_rowExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2152;
            this.match(FlinkSQLParser.KW_ROW);
            this.state = 2153;
            this.match(FlinkSQLParser.LR_BRACKET);
            this.state = 2154;
            this.dataTypeExpression();
            this.state = 2159;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 440) {
                {
                {
                this.state = 2155;
                this.match(FlinkSQLParser.COMMA);
                this.state = 2156;
                this.dataTypeExpression();
                }
                }
                this.state = 2161;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 2162;
            this.match(FlinkSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mapExpression(): MapExpressionContext {
        let localContext = new MapExpressionContext(this.context, this.state);
        this.enterRule(localContext, 244, FlinkSQLParser.RULE_mapExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2164;
            this.match(FlinkSQLParser.KW_MAP);
            this.state = 2165;
            this.match(FlinkSQLParser.LS_BRACKET);
            this.state = 2166;
            this.dataTypeExpression();
            this.state = 2167;
            this.match(FlinkSQLParser.COMMA);
            this.state = 2168;
            this.dataTypeExpression();
            this.state = 2169;
            this.match(FlinkSQLParser.RS_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dataTypeExpression(): DataTypeExpressionContext {
        let localContext = new DataTypeExpressionContext(this.context, this.state);
        this.enterRule(localContext, 246, FlinkSQLParser.RULE_dataTypeExpression);
        try {
            this.state = 2173;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 261, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2171;
                this.columnAlias();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2172;
                this.complexDataTypeExpression();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionName(): FunctionNameContext {
        let localContext = new FunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 248, FlinkSQLParser.RULE_functionName);
        try {
            this.state = 2178;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 262, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2175;
                this.reservedKeywordsUsedAsFuncName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2176;
                this.nonReservedKeywords();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2177;
                this.uid();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionParam(): FunctionParamContext {
        let localContext = new FunctionParamContext(this.context, this.state);
        this.enterRule(localContext, 250, FlinkSQLParser.RULE_functionParam);
        try {
            this.state = 2185;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 263, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2180;
                this.reservedKeywordsUsedAsFuncParam();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2181;
                this.timeIntervalUnit();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2182;
                this.timePointUnit();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2183;
                this.expression();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2184;
                this.filterClause();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public filterClause(): FilterClauseContext {
        let localContext = new FilterClauseContext(this.context, this.state);
        this.enterRule(localContext, 252, FlinkSQLParser.RULE_filterClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2187;
            this.match(FlinkSQLParser.KW_FILTER);
            this.state = 2188;
            this.match(FlinkSQLParser.LR_BRACKET);
            this.state = 2189;
            this.match(FlinkSQLParser.KW_WHERE);
            this.state = 2190;
            this.booleanExpression(0);
            this.state = 2191;
            this.match(FlinkSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dereferenceDefinition(): DereferenceDefinitionContext {
        let localContext = new DereferenceDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 254, FlinkSQLParser.RULE_dereferenceDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2193;
            this.uid();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public correlationName(): CorrelationNameContext {
        let localContext = new CorrelationNameContext(this.context, this.state);
        this.enterRule(localContext, 256, FlinkSQLParser.RULE_correlationName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2195;
            this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qualifiedName(): QualifiedNameContext {
        let localContext = new QualifiedNameContext(this.context, this.state);
        this.enterRule(localContext, 258, FlinkSQLParser.RULE_qualifiedName);
        try {
            this.state = 2199;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 264, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2197;
                this.identifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2198;
                this.dereferenceDefinition();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public timeIntervalExpression(): TimeIntervalExpressionContext {
        let localContext = new TimeIntervalExpressionContext(this.context, this.state);
        this.enterRule(localContext, 260, FlinkSQLParser.RULE_timeIntervalExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2201;
            this.match(FlinkSQLParser.KW_INTERVAL);
            this.state = 2204;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 265, this.context) ) {
            case 1:
                {
                this.state = 2202;
                this.errorCapturingMultiUnitsInterval();
                }
                break;
            case 2:
                {
                this.state = 2203;
                this.errorCapturingUnitToUnitInterval();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public errorCapturingMultiUnitsInterval(): ErrorCapturingMultiUnitsIntervalContext {
        let localContext = new ErrorCapturingMultiUnitsIntervalContext(this.context, this.state);
        this.enterRule(localContext, 262, FlinkSQLParser.RULE_errorCapturingMultiUnitsInterval);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2206;
            this.multiUnitsInterval();
            this.state = 2208;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 266, this.context) ) {
            case 1:
                {
                this.state = 2207;
                this.unitToUnitInterval();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public multiUnitsInterval(): MultiUnitsIntervalContext {
        let localContext = new MultiUnitsIntervalContext(this.context, this.state);
        this.enterRule(localContext, 264, FlinkSQLParser.RULE_multiUnitsInterval);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2213;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 2210;
                    this.intervalValue();
                    this.state = 2211;
                    this.timeIntervalUnit();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2215;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 267, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public errorCapturingUnitToUnitInterval(): ErrorCapturingUnitToUnitIntervalContext {
        let localContext = new ErrorCapturingUnitToUnitIntervalContext(this.context, this.state);
        this.enterRule(localContext, 266, FlinkSQLParser.RULE_errorCapturingUnitToUnitInterval);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2217;
            localContext._body = this.unitToUnitInterval();
            this.state = 2220;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 268, this.context) ) {
            case 1:
                {
                this.state = 2218;
                localContext._error1 = this.multiUnitsInterval();
                }
                break;
            case 2:
                {
                this.state = 2219;
                localContext._error2 = this.unitToUnitInterval();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unitToUnitInterval(): UnitToUnitIntervalContext {
        let localContext = new UnitToUnitIntervalContext(this.context, this.state);
        this.enterRule(localContext, 268, FlinkSQLParser.RULE_unitToUnitInterval);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2222;
            localContext._value = this.intervalValue();
            this.state = 2223;
            localContext._from_ = this.timeIntervalUnit();
            this.state = 2224;
            this.match(FlinkSQLParser.KW_TO);
            this.state = 2225;
            localContext._to = this.timeIntervalUnit();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public intervalValue(): IntervalValueContext {
        let localContext = new IntervalValueContext(this.context, this.state);
        this.enterRule(localContext, 270, FlinkSQLParser.RULE_intervalValue);
        let _la: number;
        try {
            this.state = 2232;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSQLParser.HYPNEN_SIGN:
            case FlinkSQLParser.ADD_SIGN:
            case FlinkSQLParser.DIG_LITERAL:
            case FlinkSQLParser.REAL_LITERAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2228;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 450 || _la === 451) {
                    {
                    this.state = 2227;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 450 || _la === 451)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                }

                this.state = 2230;
                _la = this.tokenStream.LA(1);
                if(!(_la === 459 || _la === 460)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case FlinkSQLParser.STRING_LITERAL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2231;
                this.match(FlinkSQLParser.STRING_LITERAL);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnAlias(): ColumnAliasContext {
        let localContext = new ColumnAliasContext(this.context, this.state);
        this.enterRule(localContext, 272, FlinkSQLParser.RULE_columnAlias);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2235;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 200) {
                {
                this.state = 2234;
                this.match(FlinkSQLParser.KW_AS);
                }
            }

            this.state = 2237;
            this.identifier();
            this.state = 2239;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 436) {
                {
                this.state = 2238;
                this.identifierList();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableAlias(): TableAliasContext {
        let localContext = new TableAliasContext(this.context, this.state);
        this.enterRule(localContext, 274, FlinkSQLParser.RULE_tableAlias);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2242;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 200) {
                {
                this.state = 2241;
                this.match(FlinkSQLParser.KW_AS);
                }
            }

            this.state = 2244;
            this.identifier();
            this.state = 2246;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 274, this.context) ) {
            case 1:
                {
                this.state = 2245;
                this.identifierList();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
        let localContext = new ErrorCapturingIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 276, FlinkSQLParser.RULE_errorCapturingIdentifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2248;
            this.identifier();
            this.state = 2249;
            this.errorCapturingIdentifierExtra();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public errorCapturingIdentifierExtra(): ErrorCapturingIdentifierExtraContext {
        let localContext = new ErrorCapturingIdentifierExtraContext(this.context, this.state);
        this.enterRule(localContext, 278, FlinkSQLParser.RULE_errorCapturingIdentifierExtra);
        let _la: number;
        try {
            this.state = 2258;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSQLParser.KW_MINUS:
                localContext = new ErrorIdentContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2253;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 2251;
                    this.match(FlinkSQLParser.KW_MINUS);
                    this.state = 2252;
                    this.identifier();
                    }
                    }
                    this.state = 2255;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 316);
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
                localContext = new RealIdentContext(localContext);
                this.enterOuterAlt(localContext, 2);
                // tslint:disable-next-line:no-empty
                {
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifierList(): IdentifierListContext {
        let localContext = new IdentifierListContext(this.context, this.state);
        this.enterRule(localContext, 280, FlinkSQLParser.RULE_identifierList);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2260;
            this.match(FlinkSQLParser.LR_BRACKET);
            this.state = 2261;
            this.identifierSeq();
            this.state = 2262;
            this.match(FlinkSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifierSeq(): IdentifierSeqContext {
        let localContext = new IdentifierSeqContext(this.context, this.state);
        this.enterRule(localContext, 282, FlinkSQLParser.RULE_identifierSeq);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2264;
            this.identifier();
            this.state = 2269;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 440) {
                {
                {
                this.state = 2265;
                this.match(FlinkSQLParser.COMMA);
                this.state = 2266;
                this.identifier();
                }
                }
                this.state = 2271;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifier(): IdentifierContext {
        let localContext = new IdentifierContext(this.context, this.state);
        this.enterRule(localContext, 284, FlinkSQLParser.RULE_identifier);
        try {
            this.state = 2276;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSQLParser.DIG_LITERAL:
            case FlinkSQLParser.ID_LITERAL:
                localContext = new UnquotedIdentifierAlternativeContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2272;
                this.unquotedIdentifier();
                }
                break;
            case FlinkSQLParser.STRING_LITERAL:
                localContext = new QuotedIdentifierAlternativeContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2273;
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
                localContext = new NonReservedKeywordsAlternativeContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2274;
                this.nonReservedKeywords();
                }
                break;
            case FlinkSQLParser.DOLLAR:
                localContext = new UrefVarAlternativeContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2275;
                this.refVar();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public refVar(): RefVarContext {
        let localContext = new RefVarContext(this.context, this.state);
        this.enterRule(localContext, 286, FlinkSQLParser.RULE_refVar);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2278;
            this.match(FlinkSQLParser.DOLLAR);
            this.state = 2279;
            this.match(FlinkSQLParser.LB_BRACKET);
            this.state = 2280;
            this.unquotedIdentifier();
            this.state = 2281;
            this.match(FlinkSQLParser.RB_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unquotedIdentifier(): UnquotedIdentifierContext {
        let localContext = new UnquotedIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 288, FlinkSQLParser.RULE_unquotedIdentifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2283;
            _la = this.tokenStream.LA(1);
            if(!(_la === 459 || _la === 461)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public quotedIdentifier(): QuotedIdentifierContext {
        let localContext = new QuotedIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 290, FlinkSQLParser.RULE_quotedIdentifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2285;
            this.match(FlinkSQLParser.STRING_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whenClause(): WhenClauseContext {
        let localContext = new WhenClauseContext(this.context, this.state);
        this.enterRule(localContext, 292, FlinkSQLParser.RULE_whenClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2287;
            this.match(FlinkSQLParser.KW_WHEN);
            this.state = 2288;
            localContext._condition = this.expression();
            this.state = 2289;
            this.match(FlinkSQLParser.KW_THEN);
            this.state = 2290;
            localContext._result = this.expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public catalogPath(): CatalogPathContext {
        let localContext = new CatalogPathContext(this.context, this.state);
        this.enterRule(localContext, 294, FlinkSQLParser.RULE_catalogPath);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2292;
            this.uid();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public databasePath(): DatabasePathContext {
        let localContext = new DatabasePathContext(this.context, this.state);
        this.enterRule(localContext, 296, FlinkSQLParser.RULE_databasePath);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2294;
            this.uid();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public databasePathCreate(): DatabasePathCreateContext {
        let localContext = new DatabasePathCreateContext(this.context, this.state);
        this.enterRule(localContext, 298, FlinkSQLParser.RULE_databasePathCreate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2296;
            this.uid();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tablePathCreate(): TablePathCreateContext {
        let localContext = new TablePathCreateContext(this.context, this.state);
        this.enterRule(localContext, 300, FlinkSQLParser.RULE_tablePathCreate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2298;
            this.uid();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tablePath(): TablePathContext {
        let localContext = new TablePathContext(this.context, this.state);
        this.enterRule(localContext, 302, FlinkSQLParser.RULE_tablePath);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2300;
            this.uid();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public uid(): UidContext {
        let localContext = new UidContext(this.context, this.state);
        this.enterRule(localContext, 304, FlinkSQLParser.RULE_uid);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2302;
            this.identifier();
            this.state = 2307;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 279, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2303;
                    this.match(FlinkSQLParser.DOT);
                    this.state = 2304;
                    this.identifier();
                    }
                    }
                }
                this.state = 2309;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 279, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public withOption(): WithOptionContext {
        let localContext = new WithOptionContext(this.context, this.state);
        this.enterRule(localContext, 306, FlinkSQLParser.RULE_withOption);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2310;
            this.match(FlinkSQLParser.KW_WITH);
            this.state = 2311;
            this.tablePropertyList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ifNotExists(): IfNotExistsContext {
        let localContext = new IfNotExistsContext(this.context, this.state);
        this.enterRule(localContext, 308, FlinkSQLParser.RULE_ifNotExists);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2313;
            this.match(FlinkSQLParser.KW_IF);
            this.state = 2314;
            this.match(FlinkSQLParser.KW_NOT);
            this.state = 2315;
            this.match(FlinkSQLParser.KW_EXISTS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ifExists(): IfExistsContext {
        let localContext = new IfExistsContext(this.context, this.state);
        this.enterRule(localContext, 310, FlinkSQLParser.RULE_ifExists);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2317;
            this.match(FlinkSQLParser.KW_IF);
            this.state = 2318;
            this.match(FlinkSQLParser.KW_EXISTS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableCanHasKeyPropertyList(): TableCanHasKeyPropertyListContext {
        let localContext = new TableCanHasKeyPropertyListContext(this.context, this.state);
        this.enterRule(localContext, 312, FlinkSQLParser.RULE_tableCanHasKeyPropertyList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2320;
            this.match(FlinkSQLParser.LR_BRACKET);
            this.state = 2323;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 280, this.context) ) {
            case 1:
                {
                this.state = 2321;
                this.tableProperty();
                }
                break;
            case 2:
                {
                this.state = 2322;
                this.tablePropertyKey();
                }
                break;
            }
            this.state = 2332;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 440) {
                {
                {
                this.state = 2325;
                this.match(FlinkSQLParser.COMMA);
                this.state = 2328;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 281, this.context) ) {
                case 1:
                    {
                    this.state = 2326;
                    this.tableProperty();
                    }
                    break;
                case 2:
                    {
                    this.state = 2327;
                    this.tablePropertyKey();
                    }
                    break;
                }
                }
                }
                this.state = 2334;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 2335;
            this.match(FlinkSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tablePropertyList(): TablePropertyListContext {
        let localContext = new TablePropertyListContext(this.context, this.state);
        this.enterRule(localContext, 314, FlinkSQLParser.RULE_tablePropertyList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2337;
            this.match(FlinkSQLParser.LR_BRACKET);
            this.state = 2338;
            this.tableProperty();
            this.state = 2343;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 440) {
                {
                {
                this.state = 2339;
                this.match(FlinkSQLParser.COMMA);
                this.state = 2340;
                this.tableProperty();
                }
                }
                this.state = 2345;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 2346;
            this.match(FlinkSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableProperty(): TablePropertyContext {
        let localContext = new TablePropertyContext(this.context, this.state);
        this.enterRule(localContext, 316, FlinkSQLParser.RULE_tableProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2348;
            this.tablePropertyKey();
            this.state = 2349;
            this.match(FlinkSQLParser.EQUAL_SYMBOL);
            this.state = 2350;
            this.tablePropertyValue();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tablePropertyKey(): TablePropertyKeyContext {
        let localContext = new TablePropertyKeyContext(this.context, this.state);
        this.enterRule(localContext, 318, FlinkSQLParser.RULE_tablePropertyKey);
        let _la: number;
        try {
            this.state = 2362;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 285, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 2352;
                this.identifier();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                {
                this.state = 2353;
                this.dereferenceDefinition();
                this.state = 2358;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 450) {
                    {
                    {
                    this.state = 2354;
                    this.match(FlinkSQLParser.HYPNEN_SIGN);
                    this.state = 2355;
                    this.dereferenceDefinition();
                    }
                    }
                    this.state = 2360;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                {
                this.state = 2361;
                this.match(FlinkSQLParser.STRING_LITERAL);
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tablePropertyValue(): TablePropertyValueContext {
        let localContext = new TablePropertyValueContext(this.context, this.state);
        this.enterRule(localContext, 320, FlinkSQLParser.RULE_tablePropertyValue);
        try {
            this.state = 2369;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 286, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2364;
                this.match(FlinkSQLParser.DIG_LITERAL);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2365;
                this.match(FlinkSQLParser.REAL_LITERAL);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2366;
                this.booleanLiteral();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2367;
                this.match(FlinkSQLParser.STRING_LITERAL);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2368;
                this.unquotedIdentifier();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public comparisonOperator(): ComparisonOperatorContext {
        let localContext = new ComparisonOperatorContext(this.context, this.state);
        this.enterRule(localContext, 322, FlinkSQLParser.RULE_comparisonOperator);
        try {
            this.state = 2385;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 287, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2371;
                this.match(FlinkSQLParser.EQUAL_SYMBOL);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2372;
                this.match(FlinkSQLParser.GREATER_SYMBOL);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2373;
                this.match(FlinkSQLParser.LESS_SYMBOL);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2374;
                this.match(FlinkSQLParser.LESS_SYMBOL);
                this.state = 2375;
                this.match(FlinkSQLParser.EQUAL_SYMBOL);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2376;
                this.match(FlinkSQLParser.GREATER_SYMBOL);
                this.state = 2377;
                this.match(FlinkSQLParser.EQUAL_SYMBOL);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2378;
                this.match(FlinkSQLParser.LESS_SYMBOL);
                this.state = 2379;
                this.match(FlinkSQLParser.GREATER_SYMBOL);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 2380;
                this.match(FlinkSQLParser.EXCLAMATION_SYMBOL);
                this.state = 2381;
                this.match(FlinkSQLParser.EQUAL_SYMBOL);
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 2382;
                this.match(FlinkSQLParser.LESS_SYMBOL);
                this.state = 2383;
                this.match(FlinkSQLParser.EQUAL_SYMBOL);
                this.state = 2384;
                this.match(FlinkSQLParser.GREATER_SYMBOL);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constant(): ConstantContext {
        let localContext = new ConstantContext(this.context, this.state);
        this.enterRule(localContext, 324, FlinkSQLParser.RULE_constant);
        let _la: number;
        try {
            this.state = 2400;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSQLParser.KW_INTERVAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2387;
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
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2388;
                this.timePointLiteral();
                }
                break;
            case FlinkSQLParser.STRING_LITERAL:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2389;
                this.stringLiteral();
                }
                break;
            case FlinkSQLParser.HYPNEN_SIGN:
            case FlinkSQLParser.DIG_LITERAL:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2391;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 450) {
                    {
                    this.state = 2390;
                    this.match(FlinkSQLParser.HYPNEN_SIGN);
                    }
                }

                this.state = 2393;
                this.decimalLiteral();
                }
                break;
            case FlinkSQLParser.KW_FALSE:
            case FlinkSQLParser.KW_TRUE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2394;
                this.booleanLiteral();
                }
                break;
            case FlinkSQLParser.REAL_LITERAL:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2395;
                this.match(FlinkSQLParser.REAL_LITERAL);
                }
                break;
            case FlinkSQLParser.KW_NOT:
            case FlinkSQLParser.KW_NULL:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 2397;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 326) {
                    {
                    this.state = 2396;
                    this.match(FlinkSQLParser.KW_NOT);
                    }
                }

                this.state = 2399;
                this.match(FlinkSQLParser.KW_NULL);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public timePointLiteral(): TimePointLiteralContext {
        let localContext = new TimePointLiteralContext(this.context, this.state);
        this.enterRule(localContext, 326, FlinkSQLParser.RULE_timePointLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2402;
            this.timePointUnit();
            this.state = 2403;
            this.stringLiteral();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stringLiteral(): StringLiteralContext {
        let localContext = new StringLiteralContext(this.context, this.state);
        this.enterRule(localContext, 328, FlinkSQLParser.RULE_stringLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2405;
            this.match(FlinkSQLParser.STRING_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public decimalLiteral(): DecimalLiteralContext {
        let localContext = new DecimalLiteralContext(this.context, this.state);
        this.enterRule(localContext, 330, FlinkSQLParser.RULE_decimalLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2407;
            this.match(FlinkSQLParser.DIG_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public booleanLiteral(): BooleanLiteralContext {
        let localContext = new BooleanLiteralContext(this.context, this.state);
        this.enterRule(localContext, 332, FlinkSQLParser.RULE_booleanLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2409;
            _la = this.tokenStream.LA(1);
            if(!(_la === 271 || _la === 390)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public setQuantifier(): SetQuantifierContext {
        let localContext = new SetQuantifierContext(this.context, this.state);
        this.enterRule(localContext, 334, FlinkSQLParser.RULE_setQuantifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2411;
            _la = this.tokenStream.LA(1);
            if(!(_la === 193 || _la === 254)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public timePointUnit(): TimePointUnitContext {
        let localContext = new TimePointUnitContext(this.context, this.state);
        this.enterRule(localContext, 336, FlinkSQLParser.RULE_timePointUnit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2413;
            _la = this.tokenStream.LA(1);
            if(!(_la === 83 || _la === 85 || _la === 121 || _la === 186 || _la === 244 || _la === 285 || _la === 317 || _la === 320 || _la === 362 || _la === 411)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public timeIntervalUnit(): TimeIntervalUnitContext {
        let localContext = new TimeIntervalUnitContext(this.context, this.state);
        this.enterRule(localContext, 338, FlinkSQLParser.RULE_timeIntervalUnit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2415;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & 8437761) !== 0) || ((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & 1673527297) !== 0) || _la === 121 || _la === 139 || ((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & 19) !== 0) || _la === 244 || _la === 285 || _la === 317 || _la === 320 || _la === 362 || _la === 411)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public reservedKeywordsUsedAsFuncParam(): ReservedKeywordsUsedAsFuncParamContext {
        let localContext = new ReservedKeywordsUsedAsFuncParamContext(this.context, this.state);
        this.enterRule(localContext, 340, FlinkSQLParser.RULE_reservedKeywordsUsedAsFuncParam);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2417;
            _la = this.tokenStream.LA(1);
            if(!(_la === 193 || _la === 211 || _la === 254 || _la === 304 || _la === 389 || _la === 448)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public reservedKeywordsUsedAsFuncName(): ReservedKeywordsUsedAsFuncNameContext {
        let localContext = new ReservedKeywordsUsedAsFuncNameContext(this.context, this.state);
        this.enterRule(localContext, 342, FlinkSQLParser.RULE_reservedKeywordsUsedAsFuncName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2419;
            _la = this.tokenStream.LA(1);
            if(!(_la === 62 || _la === 82 || _la === 121 || ((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & 2147622977) !== 0) || ((((_la - 218)) & ~0x1F) === 0 && ((1 << (_la - 218)) & 16843393) !== 0) || ((((_la - 270)) & ~0x1F) === 0 && ((1 << (_la - 270)) & 536907841) !== 0) || ((((_la - 302)) & ~0x1F) === 0 && ((1 << (_la - 302)) & 67403787) !== 0) || ((((_la - 340)) & ~0x1F) === 0 && ((1 << (_la - 340)) & 4233633) !== 0) || ((((_la - 372)) & ~0x1F) === 0 && ((1 << (_la - 372)) & 34110467) !== 0) || _la === 411)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public nonReservedKeywords(): NonReservedKeywordsContext {
        let localContext = new NonReservedKeywordsContext(this.context, this.state);
        this.enterRule(localContext, 344, FlinkSQLParser.RULE_nonReservedKeywords);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2421;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4293918704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4278185951) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294966911) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 3892279295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 3623845887) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 4160745471) !== 0) || _la === 242 || _la === 310 || _la === 399)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public projectItemDefinition(): ProjectItemDefinitionContext {
        let localContext = new ProjectItemDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 346, FlinkSQLParser.RULE_projectItemDefinition);
        let _la: number;
        try {
            this.state = 2431;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 293, this.context) ) {
            case 1:
                localContext = new FlinkStyleProjectItemContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 2423;
                this.overWindowItem();
                }
                }
                break;
            case 2:
                localContext = new CommonContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                {
                this.state = 2424;
                this.expression();
                this.state = 2429;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 292, this.context) ) {
                case 1:
                    {
                    this.state = 2426;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 200) {
                        {
                        this.state = 2425;
                        this.match(FlinkSQLParser.KW_AS);
                        }
                    }

                    this.state = 2428;
                    this.expression();
                    }
                    break;
                }
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public selectStatement(): SelectStatementContext {
        let localContext = new SelectStatementContext(this.context, this.state);
        this.enterRule(localContext, 348, FlinkSQLParser.RULE_selectStatement);
        try {
            this.state = 2451;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 298, this.context) ) {
            case 1:
                localContext = new CommonSQLContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 2433;
                this.selectClause();
                this.state = 2434;
                this.fromClause();
                this.state = 2436;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 294, this.context) ) {
                case 1:
                    {
                    this.state = 2435;
                    this.whereClause();
                    }
                    break;
                }
                this.state = 2439;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 295, this.context) ) {
                case 1:
                    {
                    this.state = 2438;
                    this.groupByClause();
                    }
                    break;
                }
                this.state = 2442;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 296, this.context) ) {
                case 1:
                    {
                    this.state = 2441;
                    this.havingClause();
                    }
                    break;
                }
                this.state = 2445;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 297, this.context) ) {
                case 1:
                    {
                    this.state = 2444;
                    this.windowClause();
                    }
                    break;
                }
                }
                }
                break;
            case 2:
                localContext = new MatchRecognizeContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                {
                this.state = 2447;
                this.selectClause();
                this.state = 2448;
                this.fromClause();
                this.state = 2449;
                this.matchRecognizeClause();
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public selectClause(): SelectClauseContext {
        let localContext = new SelectClauseContext(this.context, this.state);
        this.enterRule(localContext, 350, FlinkSQLParser.RULE_selectClause);
        try {
            let alternative: number;
            localContext = new FlinkStyleContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2453;
            this.match(FlinkSQLParser.KW_SELECT);
            this.state = 2463;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 300, this.context) ) {
            case 1:
                {
                this.state = 2454;
                this.match(FlinkSQLParser.ASTERISK_SIGN);
                }
                break;
            case 2:
                {
                this.state = 2455;
                this.projectItemDefinition();
                this.state = 2460;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 299, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 2456;
                        this.match(FlinkSQLParser.COMMA);
                        this.state = 2457;
                        this.projectItemDefinition();
                        }
                        }
                    }
                    this.state = 2462;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 299, this.context);
                }
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public insertStatement(): InsertStatementContext {
        let localContext = new InsertStatementContext(this.context, this.state);
        this.enterRule(localContext, 352, FlinkSQLParser.RULE_insertStatement);
        let _la: number;
        try {
            localContext = new CommonInsertContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 2466;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 265) {
                {
                this.state = 2465;
                this.match(FlinkSQLParser.KW_EXECUTE);
                }
            }

            this.state = 2468;
            this.insertSimpleStatement();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public joinOp(): JoinOpContext {
        let localContext = new JoinOpContext(this.context, this.state);
        this.enterRule(localContext, 354, FlinkSQLParser.RULE_joinOp);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2470;
            this.flinkJoinOp();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public tableExpression(): TableExpressionContext;
    public tableExpression(_p: number): TableExpressionContext;
    public tableExpression(_p?: number): TableExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new TableExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 356;
        this.enterRecursionRule(localContext, 356, FlinkSQLParser.RULE_tableExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2483;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 303, this.context) ) {
            case 1:
                {
                this.state = 2473;
                this.tableReference();
                this.state = 2478;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 302, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 2474;
                        this.match(FlinkSQLParser.COMMA);
                        this.state = 2475;
                        this.tableReference();
                        }
                        }
                    }
                    this.state = 2480;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 302, this.context);
                }
                }
                break;
            case 2:
                {
                this.state = 2481;
                this.inlineDataValueClause();
                }
                break;
            case 3:
                {
                this.state = 2482;
                this.windowTVFClause();
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2516;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 311, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 2514;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 310, this.context) ) {
                    case 1:
                        {
                        localContext = new TableExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, FlinkSQLParser.RULE_tableExpression);
                        this.state = 2485;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 2486;
                        this.match(FlinkSQLParser.KW_CROSS);
                        this.state = 2487;
                        this.match(FlinkSQLParser.KW_JOIN);
                        this.state = 2488;
                        this.tableExpression(4);
                        }
                        break;
                    case 2:
                        {
                        localContext = new TableExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, FlinkSQLParser.RULE_tableExpression);
                        this.state = 2489;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 2491;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 322) {
                            {
                            this.state = 2490;
                            this.match(FlinkSQLParser.KW_NATURAL);
                            }
                        }

                        this.state = 2494;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (((((_la - 277)) & ~0x1F) === 0 && ((1 << (_la - 277)) & 268439553) !== 0) || _la === 355) {
                            {
                            this.state = 2493;
                            this.joinOp();
                            }
                        }

                        this.state = 2497;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 338) {
                            {
                            this.state = 2496;
                            this.match(FlinkSQLParser.KW_OUTER);
                            }
                        }

                        this.state = 2500;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 143) {
                            {
                            this.state = 2499;
                            this.match(FlinkSQLParser.KW_SEMI);
                            }
                        }

                        this.state = 2502;
                        this.match(FlinkSQLParser.KW_JOIN);
                        this.state = 2503;
                        this.tableExpression(0);
                        this.state = 2505;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 308, this.context) ) {
                        case 1:
                            {
                            this.state = 2504;
                            this.joinCondition();
                            }
                            break;
                        }
                        this.state = 2511;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 309, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                {
                                this.state = 2507;
                                this.match(FlinkSQLParser.COMMA);
                                this.state = 2508;
                                this.tableReference();
                                }
                                }
                            }
                            this.state = 2513;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 309, this.context);
                        }
                        }
                        break;
                    }
                    }
                }
                this.state = 2518;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 311, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public createTable(): CreateTableContext {
        let localContext = new CreateTableContext(this.context, this.state);
        this.enterRule(localContext, 358, FlinkSQLParser.RULE_createTable);
        try {
            this.state = 2522;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 312, this.context) ) {
            case 1:
                localContext = new SimpleContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2519;
                this.simpleCreateTable();
                }
                break;
            case 2:
                localContext = new LikeContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2520;
                this.likeCreateTable();
                }
                break;
            case 3:
                localContext = new AsSelectContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2521;
                this.createTableAsSelect();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public overWindowItem(): OverWindowItemContext {
        let localContext = new OverWindowItemContext(this.context, this.state);
        this.enterRule(localContext, 360, FlinkSQLParser.RULE_overWindowItem);
        let _la: number;
        try {
            this.state = 2540;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 315, this.context) ) {
            case 1:
                localContext = new Flink_commnContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2524;
                this.primaryExpression(0);
                this.state = 2525;
                this.match(FlinkSQLParser.KW_OVER);
                this.state = 2526;
                this.windowSpec();
                this.state = 2528;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 200) {
                    {
                    this.state = 2527;
                    this.match(FlinkSQLParser.KW_AS);
                    }
                }

                this.state = 2530;
                this.identifier();
                }
                break;
            case 2:
                localContext = new Flink_common2Context(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2532;
                this.primaryExpression(0);
                this.state = 2533;
                this.match(FlinkSQLParser.KW_OVER);
                this.state = 2534;
                this.errorCapturingIdentifier();
                this.state = 2536;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 200) {
                    {
                    this.state = 2535;
                    this.match(FlinkSQLParser.KW_AS);
                    }
                }

                this.state = 2538;
                this.identifier();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 31:
            return this.queryStatement_sempred(localContext as QueryStatementContext, predIndex);
        case 114:
            return this.booleanExpression_sempred(localContext as BooleanExpressionContext, predIndex);
        case 117:
            return this.valueExpression_sempred(localContext as ValueExpressionContext, predIndex);
        case 118:
            return this.primaryExpression_sempred(localContext as PrimaryExpressionContext, predIndex);
        case 178:
            return this.tableExpression_sempred(localContext as TableExpressionContext, predIndex);
        }
        return true;
    }
    private queryStatement_sempred(localContext: QueryStatementContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private booleanExpression_sempred(localContext: BooleanExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 1:
            return this.precpred(this.context, 3);
        case 2:
            return this.precpred(this.context, 2);
        case 3:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private valueExpression_sempred(localContext: ValueExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 4:
            return this.precpred(this.context, 6);
        case 5:
            return this.precpred(this.context, 5);
        case 6:
            return this.precpred(this.context, 4);
        case 7:
            return this.precpred(this.context, 3);
        case 8:
            return this.precpred(this.context, 2);
        case 9:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private primaryExpression_sempred(localContext: PrimaryExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 10:
            return this.precpred(this.context, 6);
        }
        return true;
    }
    private tableExpression_sempred(localContext: TableExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 11:
            return this.precpred(this.context, 3);
        case 12:
            return this.precpred(this.context, 4);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,461,2543,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,
        65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,
        72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,
        78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,
        85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,
        91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,7,97,2,
        98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,7,103,
        2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
        7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,
        2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,
        7,120,2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,
        2,126,7,126,2,127,7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,
        7,131,2,132,7,132,2,133,7,133,2,134,7,134,2,135,7,135,2,136,7,136,
        2,137,7,137,2,138,7,138,2,139,7,139,2,140,7,140,2,141,7,141,2,142,
        7,142,2,143,7,143,2,144,7,144,2,145,7,145,2,146,7,146,2,147,7,147,
        2,148,7,148,2,149,7,149,2,150,7,150,2,151,7,151,2,152,7,152,2,153,
        7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,7,157,2,158,7,158,
        2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,7,163,2,164,
        7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,7,169,
        2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,2,175,
        7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,7,180,
        1,0,1,0,1,0,1,1,1,1,5,1,368,8,1,10,1,12,1,371,9,1,1,2,1,2,1,2,1,
        2,1,2,1,2,3,2,379,8,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,3,6,389,8,
        6,1,7,1,7,3,7,393,8,7,1,7,1,7,3,7,397,8,7,1,7,1,7,1,7,1,7,1,7,5,
        7,404,8,7,10,7,12,7,407,9,7,1,7,1,7,3,7,411,8,7,1,7,1,7,3,7,415,
        8,7,1,7,1,7,3,7,419,8,7,1,7,1,7,3,7,423,8,7,1,7,3,7,426,8,7,1,7,
        3,7,429,8,7,1,7,3,7,432,8,7,1,7,3,7,435,8,7,1,8,1,8,3,8,439,8,8,
        1,8,1,8,3,8,443,8,8,1,8,1,8,1,8,1,8,1,8,5,8,450,8,8,10,8,12,8,453,
        9,8,3,8,455,8,8,1,8,1,8,3,8,459,8,8,1,8,1,8,3,8,463,8,8,1,8,1,8,
        3,8,467,8,8,1,8,1,8,3,8,471,8,8,1,8,3,8,474,8,8,1,8,3,8,477,8,8,
        1,8,1,8,3,8,481,8,8,1,9,1,9,1,9,3,9,486,8,9,1,9,1,9,1,9,1,9,3,9,
        492,8,9,1,10,1,10,1,10,1,10,1,10,1,10,5,10,500,8,10,10,10,12,10,
        503,9,10,1,11,1,11,1,12,1,12,1,12,3,12,510,8,12,1,12,1,12,1,12,1,
        12,1,12,1,12,3,12,518,8,12,1,12,1,12,1,12,3,12,523,8,12,1,12,1,12,
        1,12,1,12,1,12,3,12,530,8,12,1,12,1,12,1,12,3,12,535,8,12,5,12,537,
        8,12,10,12,12,12,540,9,12,1,12,1,12,3,12,544,8,12,1,12,1,12,3,12,
        548,8,12,1,12,1,12,3,12,552,8,12,1,12,1,12,3,12,556,8,12,1,12,3,
        12,559,8,12,1,12,3,12,562,8,12,1,12,1,12,1,12,3,12,567,8,12,1,12,
        1,12,1,12,1,12,3,12,573,8,12,1,12,3,12,576,8,12,1,12,1,12,1,12,3,
        12,581,8,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,590,8,12,10,
        12,12,12,593,9,12,1,12,1,12,1,12,3,12,598,8,12,1,12,1,12,1,12,1,
        12,1,12,1,12,1,12,3,12,607,8,12,1,12,1,12,1,12,1,12,1,12,1,12,5,
        12,615,8,12,10,12,12,12,618,9,12,1,12,1,12,1,12,1,12,1,12,3,12,625,
        8,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,635,8,12,1,12,
        1,12,1,12,1,12,1,12,1,12,1,12,5,12,644,8,12,10,12,12,12,647,9,12,
        1,12,1,12,1,12,3,12,652,8,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
        3,12,661,8,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,670,8,12,1,
        12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,681,8,12,1,12,1,
        12,1,12,1,12,1,12,1,12,1,12,3,12,690,8,12,1,12,1,12,1,12,1,12,1,
        12,1,12,1,12,3,12,699,8,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,
        12,708,8,12,1,12,1,12,1,12,1,12,3,12,714,8,12,1,13,1,13,1,13,3,13,
        719,8,13,1,14,1,14,3,14,723,8,14,1,14,1,14,1,14,1,15,1,15,1,15,1,
        16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,738,8,16,1,17,1,17,1,17,1,
        17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,
        20,3,20,757,8,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,
        21,1,21,1,21,1,21,1,21,1,21,3,21,774,8,21,1,22,1,22,1,22,1,22,1,
        22,1,23,1,23,1,23,1,23,3,23,785,8,23,1,23,1,23,3,23,789,8,23,1,23,
        1,23,1,23,1,23,1,23,3,23,796,8,23,1,24,1,24,1,24,3,24,801,8,24,1,
        24,1,24,1,25,1,25,3,25,807,8,25,1,25,1,25,3,25,811,8,25,1,25,1,25,
        1,26,1,26,1,26,3,26,818,8,26,1,26,1,26,3,26,822,8,26,1,27,1,27,3,
        27,826,8,27,1,27,1,27,3,27,830,8,27,1,27,1,27,1,28,1,28,1,28,1,28,
        3,28,838,8,28,1,28,1,28,3,28,842,8,28,1,28,1,28,1,29,1,29,1,29,1,
        29,3,29,850,8,29,3,29,852,8,29,1,29,1,29,3,29,856,8,29,1,29,3,29,
        859,8,29,1,29,1,29,3,29,863,8,29,1,30,1,30,1,30,1,31,1,31,1,31,1,
        31,1,31,1,31,1,31,1,31,3,31,876,8,31,1,31,3,31,879,8,31,1,31,3,31,
        882,8,31,3,31,884,8,31,1,31,1,31,1,31,3,31,889,8,31,1,31,1,31,3,
        31,893,8,31,1,31,3,31,896,8,31,5,31,898,8,31,10,31,12,31,901,9,31,
        1,32,1,32,1,32,1,32,5,32,907,8,32,10,32,12,32,910,9,32,1,33,1,33,
        1,33,1,33,1,33,5,33,917,8,33,10,33,12,33,920,9,33,1,33,1,33,3,33,
        924,8,33,1,33,1,33,1,33,1,33,1,33,1,34,1,34,1,35,1,35,1,35,1,35,
        1,35,5,35,938,8,35,10,35,12,35,941,9,35,1,35,3,35,944,8,35,1,36,
        1,36,1,36,1,37,1,37,3,37,951,8,37,1,38,1,38,1,39,3,39,956,8,39,1,
        39,1,39,3,39,960,8,39,1,39,1,39,3,39,964,8,39,1,39,1,39,1,39,1,39,
        1,39,1,39,1,39,1,39,5,39,974,8,39,10,39,12,39,977,9,39,1,39,1,39,
        1,39,1,39,3,39,983,8,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,
        1,39,1,39,1,39,1,39,5,39,997,8,39,10,39,12,39,1000,9,39,1,39,1,39,
        1,39,1,39,1,39,1,39,1,39,1,39,5,39,1010,8,39,10,39,12,39,1013,9,
        39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,3,39,1022,8,39,1,40,1,40,1,
        40,1,40,1,40,1,40,1,40,1,40,3,40,1032,8,40,1,41,1,41,1,42,1,42,1,
        42,1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,44,1,44,1,44,1,44,3,44,1050,
        8,44,1,45,1,45,1,45,1,45,1,45,1,45,3,45,1058,8,45,1,45,1,45,1,45,
        1,45,3,45,1064,8,45,1,45,1,45,1,45,1,45,1,45,3,45,1071,8,45,1,45,
        1,45,1,45,1,45,1,45,1,45,1,45,3,45,1080,8,45,1,45,3,45,1083,8,45,
        1,45,1,45,1,46,1,46,1,46,1,46,1,46,1,46,3,46,1093,8,46,1,46,1,46,
        1,46,1,46,3,46,1099,8,46,1,46,1,46,1,46,1,46,1,46,3,46,1106,8,46,
        1,46,3,46,1109,8,46,1,46,1,46,1,46,3,46,1114,8,46,1,46,1,46,1,46,
        1,46,1,46,1,46,1,46,3,46,1123,8,46,1,46,3,46,1126,8,46,1,46,1,46,
        1,47,1,47,1,47,1,47,1,47,1,47,3,47,1136,8,47,1,47,1,47,1,47,1,47,
        3,47,1142,8,47,1,47,1,47,1,47,1,47,1,47,3,47,1149,8,47,1,47,3,47,
        1152,8,47,1,47,1,47,1,47,3,47,1157,8,47,1,47,1,47,1,47,1,47,1,48,
        1,48,1,48,1,48,1,48,1,48,3,48,1169,8,48,1,48,1,48,1,48,1,48,1,48,
        1,48,5,48,1177,8,48,10,48,12,48,1180,9,48,3,48,1182,8,48,1,48,1,
        48,1,48,3,48,1187,8,48,1,48,3,48,1190,8,48,1,48,1,48,1,48,3,48,1195,
        8,48,1,48,3,48,1198,8,48,1,48,1,48,1,49,1,49,1,50,1,50,1,50,1,50,
        1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,3,50,1219,
        8,50,1,51,1,51,1,52,1,52,1,52,1,52,1,52,1,53,1,53,1,53,1,53,1,53,
        1,53,1,53,5,53,1235,8,53,10,53,12,53,1238,9,53,1,53,1,53,3,53,1242,
        8,53,1,54,1,54,1,54,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,5,55,
        1255,8,55,10,55,12,55,1258,9,55,1,55,1,55,1,55,1,55,1,55,1,55,1,
        55,5,55,1267,8,55,10,55,12,55,1270,9,55,1,55,1,55,3,55,1274,8,55,
        1,56,1,56,1,56,1,56,1,56,5,56,1281,8,56,10,56,12,56,1284,9,56,1,
        56,1,56,1,57,1,57,1,57,1,58,1,58,1,59,1,59,1,59,1,59,1,59,1,59,1,
        59,1,60,1,60,1,61,1,61,1,62,1,62,1,62,1,63,1,63,1,63,1,63,5,63,1311,
        8,63,10,63,12,63,1314,9,63,1,64,1,64,1,64,1,64,1,65,3,65,1321,8,
        65,1,65,1,65,3,65,1325,8,65,1,65,3,65,1328,8,65,1,65,3,65,1331,8,
        65,1,65,1,65,1,66,1,66,1,66,3,66,1338,8,66,1,66,3,66,1341,8,66,1,
        66,3,66,1344,8,66,1,66,3,66,1347,8,66,1,66,3,66,1350,8,66,1,66,3,
        66,1353,8,66,1,66,1,66,1,66,3,66,1358,8,66,1,66,3,66,1361,8,66,1,
        67,1,67,1,67,1,67,1,67,5,67,1368,8,67,10,67,12,67,1371,9,67,1,68,
        1,68,3,68,1375,8,68,1,68,1,68,3,68,1379,8,68,1,69,1,69,1,69,3,69,
        1384,8,69,1,70,1,70,1,70,1,70,1,70,5,70,1391,8,70,10,70,12,70,1394,
        9,70,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,
        1,71,1,71,1,71,1,71,3,71,1412,8,71,1,72,1,72,1,72,1,72,5,72,1418,
        8,72,10,72,12,72,1421,9,72,1,73,1,73,1,73,4,73,1426,8,73,11,73,12,
        73,1427,1,73,1,73,3,73,1432,8,73,1,74,1,74,3,74,1436,8,74,1,75,1,
        75,1,75,1,75,1,75,1,75,1,75,1,75,3,75,1446,8,75,1,76,1,76,1,76,1,
        76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,
        76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,3,76,1472,8,76,1,77,1,77,1,
        77,1,77,5,77,1478,8,77,10,77,12,77,1481,9,77,1,78,1,78,1,78,1,78,
        1,78,1,78,1,78,1,78,1,78,3,78,1492,8,78,1,79,1,79,1,79,1,79,1,79,
        1,80,1,80,1,80,1,81,1,81,1,81,1,82,1,82,1,82,1,82,1,83,1,83,1,83,
        1,83,1,84,1,84,1,84,1,84,5,84,1517,8,84,10,84,12,84,1520,9,84,1,
        84,1,84,1,85,1,85,1,85,1,85,1,85,1,85,5,85,1530,8,85,10,85,12,85,
        1533,9,85,1,85,1,85,3,85,1537,8,85,1,86,1,86,3,86,1541,8,86,1,87,
        1,87,1,87,1,87,5,87,1547,8,87,10,87,12,87,1550,9,87,1,87,3,87,1553,
        8,87,1,88,1,88,1,88,3,88,1558,8,88,1,88,1,88,1,88,1,88,3,88,1564,
        8,88,1,88,1,88,1,88,1,88,3,88,1570,8,88,1,89,1,89,1,89,3,89,1575,
        8,89,1,89,1,89,1,89,1,89,3,89,1581,8,89,1,89,1,89,1,89,1,89,3,89,
        1587,8,89,1,90,1,90,1,90,1,90,3,90,1593,8,90,1,91,1,91,1,91,3,91,
        1598,8,91,1,92,1,92,1,92,3,92,1603,8,92,1,92,3,92,1606,8,92,1,93,
        1,93,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,3,94,1620,
        8,94,1,94,1,94,1,94,3,94,1625,8,94,3,94,1627,8,94,1,95,1,95,3,95,
        1631,8,95,1,95,1,95,1,95,1,95,1,95,1,95,1,96,1,96,1,97,1,97,1,97,
        1,97,5,97,1645,8,97,10,97,12,97,1648,9,97,1,98,1,98,1,98,1,98,5,
        98,1654,8,98,10,98,12,98,1657,9,98,1,98,1,98,1,99,1,99,1,99,1,99,
        1,100,1,100,1,100,1,100,3,100,1669,8,100,1,100,1,100,1,101,1,101,
        1,101,1,101,3,101,1677,8,101,1,101,1,101,1,102,1,102,1,102,1,102,
        5,102,1685,8,102,10,102,12,102,1688,9,102,1,102,1,102,1,103,1,103,
        1,103,1,103,1,103,1,103,1,103,1,104,1,104,1,104,1,104,1,104,1,104,
        1,104,5,104,1706,8,104,10,104,12,104,1709,9,104,1,104,1,104,1,105,
        1,105,3,105,1715,8,105,1,105,1,105,1,105,1,105,3,105,1721,8,105,
        1,105,3,105,1724,8,105,1,105,3,105,1727,8,105,1,106,1,106,1,106,
        1,107,1,107,1,107,1,107,1,107,3,107,1737,8,107,1,107,3,107,1740,
        8,107,1,108,1,108,1,109,1,109,1,109,1,109,3,109,1748,8,109,1,110,
        1,110,3,110,1752,8,110,1,111,1,111,1,111,1,111,5,111,1758,8,111,
        10,111,12,111,1761,9,111,1,111,1,111,1,111,1,111,1,111,5,111,1768,
        8,111,10,111,12,111,1771,9,111,3,111,1773,8,111,1,112,1,112,1,112,
        3,112,1778,8,112,1,112,1,112,3,112,1782,8,112,1,112,1,112,3,112,
        1786,8,112,1,112,1,112,3,112,1790,8,112,1,112,1,112,3,112,1794,8,
        112,1,112,1,112,3,112,1798,8,112,1,112,1,112,3,112,1802,8,112,1,
        112,1,112,3,112,1806,8,112,1,112,1,112,3,112,1810,8,112,1,112,1,
        112,3,112,1814,8,112,1,112,1,112,3,112,1818,8,112,1,112,1,112,3,
        112,1822,8,112,1,112,1,112,3,112,1826,8,112,1,112,1,112,3,112,1830,
        8,112,1,112,1,112,3,112,1834,8,112,1,112,1,112,3,112,1838,8,112,
        1,112,1,112,3,112,1842,8,112,1,112,1,112,3,112,1846,8,112,3,112,
        1848,8,112,1,113,1,113,1,114,1,114,1,114,1,114,1,114,1,114,1,114,
        1,114,1,114,1,114,3,114,1862,8,114,3,114,1864,8,114,1,114,1,114,
        1,114,1,114,1,114,1,114,1,114,1,114,1,114,3,114,1875,8,114,1,114,
        5,114,1878,8,114,10,114,12,114,1881,9,114,1,115,3,115,1884,8,115,
        1,115,1,115,3,115,1888,8,115,1,115,1,115,1,115,1,115,1,115,3,115,
        1895,8,115,1,115,1,115,1,115,1,115,1,115,5,115,1902,8,115,10,115,
        12,115,1905,9,115,1,115,1,115,1,115,3,115,1910,8,115,1,115,1,115,
        1,115,1,115,1,115,1,115,1,115,1,115,1,115,1,115,1,115,3,115,1923,
        8,115,1,115,1,115,1,115,1,115,1,115,3,115,1930,8,115,1,115,1,115,
        1,115,3,115,1935,8,115,1,115,1,115,1,115,1,115,3,115,1941,8,115,
        1,115,1,115,1,115,1,115,1,115,3,115,1948,8,115,3,115,1950,8,115,
        1,116,3,116,1953,8,116,1,116,1,116,1,116,1,116,1,116,1,116,1,116,
        1,116,5,116,1963,8,116,10,116,12,116,1966,9,116,1,116,1,116,3,116,
        1970,8,116,1,116,3,116,1973,8,116,1,116,1,116,1,116,1,116,3,116,
        1979,8,116,3,116,1981,8,116,1,117,1,117,1,117,1,117,3,117,1987,8,
        117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,
        1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,5,117,2008,
        8,117,10,117,12,117,2011,9,117,1,118,1,118,1,118,4,118,2016,8,118,
        11,118,12,118,2017,1,118,1,118,3,118,2022,8,118,1,118,1,118,1,118,
        1,118,1,118,4,118,2029,8,118,11,118,12,118,2030,1,118,1,118,3,118,
        2035,8,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,
        1,118,1,118,1,118,1,118,1,118,3,118,2051,8,118,1,118,1,118,1,118,
        1,118,1,118,1,118,1,118,3,118,2060,8,118,1,118,1,118,1,118,1,118,
        1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,
        1,118,1,118,1,118,1,118,1,118,1,118,1,118,3,118,2084,8,118,1,118,
        1,118,1,118,5,118,2089,8,118,10,118,12,118,2092,9,118,3,118,2094,
        8,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,
        1,118,1,118,3,118,2108,8,118,1,118,1,118,1,118,3,118,2113,8,118,
        1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,3,118,2124,
        8,118,1,118,1,118,1,118,1,118,1,118,5,118,2131,8,118,10,118,12,118,
        2134,9,118,1,119,1,119,1,119,3,119,2139,8,119,1,120,1,120,1,120,
        1,120,1,120,5,120,2146,8,120,10,120,12,120,2149,9,120,1,120,1,120,
        1,121,1,121,1,121,1,121,1,121,5,121,2158,8,121,10,121,12,121,2161,
        9,121,1,121,1,121,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,123,
        1,123,3,123,2174,8,123,1,124,1,124,1,124,3,124,2179,8,124,1,125,
        1,125,1,125,1,125,1,125,3,125,2186,8,125,1,126,1,126,1,126,1,126,
        1,126,1,126,1,127,1,127,1,128,1,128,1,129,1,129,3,129,2200,8,129,
        1,130,1,130,1,130,3,130,2205,8,130,1,131,1,131,3,131,2209,8,131,
        1,132,1,132,1,132,4,132,2214,8,132,11,132,12,132,2215,1,133,1,133,
        1,133,3,133,2221,8,133,1,134,1,134,1,134,1,134,1,134,1,135,3,135,
        2229,8,135,1,135,1,135,3,135,2233,8,135,1,136,3,136,2236,8,136,1,
        136,1,136,3,136,2240,8,136,1,137,3,137,2243,8,137,1,137,1,137,3,
        137,2247,8,137,1,138,1,138,1,138,1,139,1,139,4,139,2254,8,139,11,
        139,12,139,2255,1,139,3,139,2259,8,139,1,140,1,140,1,140,1,140,1,
        141,1,141,1,141,5,141,2268,8,141,10,141,12,141,2271,9,141,1,142,
        1,142,1,142,1,142,3,142,2277,8,142,1,143,1,143,1,143,1,143,1,143,
        1,144,1,144,1,145,1,145,1,146,1,146,1,146,1,146,1,146,1,147,1,147,
        1,148,1,148,1,149,1,149,1,150,1,150,1,151,1,151,1,152,1,152,1,152,
        5,152,2306,8,152,10,152,12,152,2309,9,152,1,153,1,153,1,153,1,154,
        1,154,1,154,1,154,1,155,1,155,1,155,1,156,1,156,1,156,3,156,2324,
        8,156,1,156,1,156,1,156,3,156,2329,8,156,5,156,2331,8,156,10,156,
        12,156,2334,9,156,1,156,1,156,1,157,1,157,1,157,1,157,5,157,2342,
        8,157,10,157,12,157,2345,9,157,1,157,1,157,1,158,1,158,1,158,1,158,
        1,159,1,159,1,159,1,159,5,159,2357,8,159,10,159,12,159,2360,9,159,
        1,159,3,159,2363,8,159,1,160,1,160,1,160,1,160,1,160,3,160,2370,
        8,160,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,
        1,161,1,161,1,161,1,161,3,161,2386,8,161,1,162,1,162,1,162,1,162,
        3,162,2392,8,162,1,162,1,162,1,162,1,162,3,162,2398,8,162,1,162,
        3,162,2401,8,162,1,163,1,163,1,163,1,164,1,164,1,165,1,165,1,166,
        1,166,1,167,1,167,1,168,1,168,1,169,1,169,1,170,1,170,1,171,1,171,
        1,172,1,172,1,173,1,173,1,173,3,173,2427,8,173,1,173,3,173,2430,
        8,173,3,173,2432,8,173,1,174,1,174,1,174,3,174,2437,8,174,1,174,
        3,174,2440,8,174,1,174,3,174,2443,8,174,1,174,3,174,2446,8,174,1,
        174,1,174,1,174,1,174,3,174,2452,8,174,1,175,1,175,1,175,1,175,1,
        175,5,175,2459,8,175,10,175,12,175,2462,9,175,3,175,2464,8,175,1,
        176,3,176,2467,8,176,1,176,1,176,1,177,1,177,1,178,1,178,1,178,1,
        178,5,178,2477,8,178,10,178,12,178,2480,9,178,1,178,1,178,3,178,
        2484,8,178,1,178,1,178,1,178,1,178,1,178,1,178,3,178,2492,8,178,
        1,178,3,178,2495,8,178,1,178,3,178,2498,8,178,1,178,3,178,2501,8,
        178,1,178,1,178,1,178,3,178,2506,8,178,1,178,1,178,5,178,2510,8,
        178,10,178,12,178,2513,9,178,5,178,2515,8,178,10,178,12,178,2518,
        9,178,1,179,1,179,1,179,3,179,2523,8,179,1,180,1,180,1,180,1,180,
        3,180,2529,8,180,1,180,1,180,1,180,1,180,1,180,1,180,3,180,2537,
        8,180,1,180,1,180,3,180,2541,8,180,1,180,0,5,62,228,234,236,356,
        181,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,
        44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,
        88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,
        124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,
        156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,
        188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,
        220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,
        252,254,256,258,260,262,264,266,268,270,272,274,276,278,280,282,
        284,286,288,290,292,294,296,298,300,302,304,306,308,310,312,314,
        316,318,320,322,324,326,328,330,332,334,336,338,340,342,344,346,
        348,350,352,354,356,358,360,0,37,2,0,4,4,88,88,2,0,47,47,78,78,2,
        0,6,6,9,9,3,0,69,69,114,114,135,135,2,0,11,11,132,132,3,0,264,264,
        294,294,392,392,4,0,277,277,289,289,305,305,355,355,4,0,24,24,60,
        60,146,146,170,170,5,0,25,25,149,150,156,156,163,163,332,332,2,0,
        237,237,358,358,3,0,60,60,146,146,170,170,2,0,8,8,31,31,2,0,42,42,
        288,288,3,0,22,22,101,101,193,193,3,0,42,42,99,99,288,288,3,0,55,
        55,95,95,185,185,3,0,210,210,242,242,329,329,11,0,10,10,158,158,
        165,165,206,207,219,219,243,243,292,293,369,369,382,382,387,387,
        403,404,2,0,408,408,410,410,4,0,245,246,256,256,273,273,330,330,
        2,0,199,199,321,321,4,0,271,271,329,329,390,390,394,394,2,0,201,
        201,374,374,2,0,193,193,197,197,2,0,425,425,450,451,4,0,33,33,448,
        448,452,452,455,455,2,0,450,451,453,453,1,0,450,451,1,0,459,460,
        2,0,459,459,461,461,2,0,271,271,390,390,2,0,193,193,254,254,10,0,
        83,83,85,85,121,121,186,186,244,244,285,285,317,317,320,320,362,
        362,411,411,16,0,14,14,28,29,37,37,61,61,83,86,90,91,121,121,139,
        139,186,187,190,190,244,244,285,285,317,317,320,320,362,362,411,
        411,6,0,193,193,211,211,254,254,304,304,389,389,448,448,33,0,62,
        62,82,82,121,121,186,186,192,192,199,199,203,203,217,218,225,225,
        227,227,234,234,242,242,270,270,276,276,282,282,285,285,299,299,
        302,303,305,305,317,317,320,320,328,328,340,340,345,345,347,348,
        351,352,355,355,362,362,372,373,382,386,391,391,397,397,411,411,
        17,0,4,19,21,36,38,43,45,55,57,70,73,106,108,110,112,122,125,142,
        144,154,156,156,158,171,173,186,188,191,242,242,310,310,399,399,
        2780,0,362,1,0,0,0,2,369,1,0,0,0,4,378,1,0,0,0,6,380,1,0,0,0,8,382,
        1,0,0,0,10,384,1,0,0,0,12,388,1,0,0,0,14,390,1,0,0,0,16,436,1,0,
        0,0,18,482,1,0,0,0,20,493,1,0,0,0,22,504,1,0,0,0,24,713,1,0,0,0,
        26,718,1,0,0,0,28,720,1,0,0,0,30,727,1,0,0,0,32,730,1,0,0,0,34,739,
        1,0,0,0,36,743,1,0,0,0,38,747,1,0,0,0,40,750,1,0,0,0,42,758,1,0,
        0,0,44,775,1,0,0,0,46,780,1,0,0,0,48,797,1,0,0,0,50,804,1,0,0,0,
        52,814,1,0,0,0,54,823,1,0,0,0,56,833,1,0,0,0,58,845,1,0,0,0,60,864,
        1,0,0,0,62,883,1,0,0,0,64,902,1,0,0,0,66,911,1,0,0,0,68,930,1,0,
        0,0,70,932,1,0,0,0,72,945,1,0,0,0,74,948,1,0,0,0,76,952,1,0,0,0,
        78,1021,1,0,0,0,80,1031,1,0,0,0,82,1033,1,0,0,0,84,1035,1,0,0,0,
        86,1040,1,0,0,0,88,1049,1,0,0,0,90,1051,1,0,0,0,92,1086,1,0,0,0,
        94,1129,1,0,0,0,96,1162,1,0,0,0,98,1201,1,0,0,0,100,1218,1,0,0,0,
        102,1220,1,0,0,0,104,1222,1,0,0,0,106,1241,1,0,0,0,108,1243,1,0,
        0,0,110,1273,1,0,0,0,112,1275,1,0,0,0,114,1287,1,0,0,0,116,1290,
        1,0,0,0,118,1292,1,0,0,0,120,1299,1,0,0,0,122,1301,1,0,0,0,124,1303,
        1,0,0,0,126,1306,1,0,0,0,128,1315,1,0,0,0,130,1320,1,0,0,0,132,1334,
        1,0,0,0,134,1362,1,0,0,0,136,1372,1,0,0,0,138,1380,1,0,0,0,140,1385,
        1,0,0,0,142,1411,1,0,0,0,144,1413,1,0,0,0,146,1422,1,0,0,0,148,1433,
        1,0,0,0,150,1445,1,0,0,0,152,1471,1,0,0,0,154,1473,1,0,0,0,156,1491,
        1,0,0,0,158,1493,1,0,0,0,160,1498,1,0,0,0,162,1501,1,0,0,0,164,1504,
        1,0,0,0,166,1508,1,0,0,0,168,1512,1,0,0,0,170,1536,1,0,0,0,172,1540,
        1,0,0,0,174,1542,1,0,0,0,176,1554,1,0,0,0,178,1571,1,0,0,0,180,1592,
        1,0,0,0,182,1597,1,0,0,0,184,1599,1,0,0,0,186,1607,1,0,0,0,188,1626,
        1,0,0,0,190,1630,1,0,0,0,192,1638,1,0,0,0,194,1640,1,0,0,0,196,1649,
        1,0,0,0,198,1660,1,0,0,0,200,1664,1,0,0,0,202,1672,1,0,0,0,204,1680,
        1,0,0,0,206,1691,1,0,0,0,208,1698,1,0,0,0,210,1726,1,0,0,0,212,1728,
        1,0,0,0,214,1731,1,0,0,0,216,1741,1,0,0,0,218,1743,1,0,0,0,220,1751,
        1,0,0,0,222,1772,1,0,0,0,224,1847,1,0,0,0,226,1849,1,0,0,0,228,1863,
        1,0,0,0,230,1949,1,0,0,0,232,1980,1,0,0,0,234,1986,1,0,0,0,236,2123,
        1,0,0,0,238,2138,1,0,0,0,240,2140,1,0,0,0,242,2152,1,0,0,0,244,2164,
        1,0,0,0,246,2173,1,0,0,0,248,2178,1,0,0,0,250,2185,1,0,0,0,252,2187,
        1,0,0,0,254,2193,1,0,0,0,256,2195,1,0,0,0,258,2199,1,0,0,0,260,2201,
        1,0,0,0,262,2206,1,0,0,0,264,2213,1,0,0,0,266,2217,1,0,0,0,268,2222,
        1,0,0,0,270,2232,1,0,0,0,272,2235,1,0,0,0,274,2242,1,0,0,0,276,2248,
        1,0,0,0,278,2258,1,0,0,0,280,2260,1,0,0,0,282,2264,1,0,0,0,284,2276,
        1,0,0,0,286,2278,1,0,0,0,288,2283,1,0,0,0,290,2285,1,0,0,0,292,2287,
        1,0,0,0,294,2292,1,0,0,0,296,2294,1,0,0,0,298,2296,1,0,0,0,300,2298,
        1,0,0,0,302,2300,1,0,0,0,304,2302,1,0,0,0,306,2310,1,0,0,0,308,2313,
        1,0,0,0,310,2317,1,0,0,0,312,2320,1,0,0,0,314,2337,1,0,0,0,316,2348,
        1,0,0,0,318,2362,1,0,0,0,320,2369,1,0,0,0,322,2385,1,0,0,0,324,2400,
        1,0,0,0,326,2402,1,0,0,0,328,2405,1,0,0,0,330,2407,1,0,0,0,332,2409,
        1,0,0,0,334,2411,1,0,0,0,336,2413,1,0,0,0,338,2415,1,0,0,0,340,2417,
        1,0,0,0,342,2419,1,0,0,0,344,2421,1,0,0,0,346,2431,1,0,0,0,348,2451,
        1,0,0,0,350,2453,1,0,0,0,352,2466,1,0,0,0,354,2470,1,0,0,0,356,2483,
        1,0,0,0,358,2522,1,0,0,0,360,2540,1,0,0,0,362,363,3,2,1,0,363,364,
        5,0,0,1,364,1,1,0,0,0,365,368,3,4,2,0,366,368,3,6,3,0,367,365,1,
        0,0,0,367,366,1,0,0,0,368,371,1,0,0,0,369,367,1,0,0,0,369,370,1,
        0,0,0,370,3,1,0,0,0,371,369,1,0,0,0,372,373,3,8,4,0,373,374,5,441,
        0,0,374,379,1,0,0,0,375,376,3,12,6,0,376,377,5,441,0,0,377,379,1,
        0,0,0,378,372,1,0,0,0,378,375,1,0,0,0,379,5,1,0,0,0,380,381,5,441,
        0,0,381,7,1,0,0,0,382,383,3,10,5,0,383,9,1,0,0,0,384,385,3,358,179,
        0,385,11,1,0,0,0,386,389,3,62,31,0,387,389,3,352,176,0,388,386,1,
        0,0,0,388,387,1,0,0,0,389,13,1,0,0,0,390,392,5,235,0,0,391,393,5,
        162,0,0,392,391,1,0,0,0,392,393,1,0,0,0,393,394,1,0,0,0,394,396,
        5,378,0,0,395,397,3,308,154,0,396,395,1,0,0,0,396,397,1,0,0,0,397,
        398,1,0,0,0,398,399,3,300,150,0,399,400,5,436,0,0,400,405,3,182,
        91,0,401,402,5,440,0,0,402,404,3,182,91,0,403,401,1,0,0,0,404,407,
        1,0,0,0,405,403,1,0,0,0,405,406,1,0,0,0,406,410,1,0,0,0,407,405,
        1,0,0,0,408,409,5,440,0,0,409,411,3,188,94,0,410,408,1,0,0,0,410,
        411,1,0,0,0,411,414,1,0,0,0,412,413,5,440,0,0,413,415,3,190,95,0,
        414,412,1,0,0,0,414,415,1,0,0,0,415,418,1,0,0,0,416,417,5,440,0,
        0,417,419,3,164,82,0,418,416,1,0,0,0,418,419,1,0,0,0,419,420,1,0,
        0,0,420,422,5,437,0,0,421,423,3,212,106,0,422,421,1,0,0,0,422,423,
        1,0,0,0,423,425,1,0,0,0,424,426,3,166,83,0,425,424,1,0,0,0,425,426,
        1,0,0,0,426,428,1,0,0,0,427,429,3,306,153,0,428,427,1,0,0,0,428,
        429,1,0,0,0,429,431,1,0,0,0,430,432,3,174,87,0,431,430,1,0,0,0,431,
        432,1,0,0,0,432,434,1,0,0,0,433,435,3,176,88,0,434,433,1,0,0,0,434,
        435,1,0,0,0,435,15,1,0,0,0,436,438,5,235,0,0,437,439,5,162,0,0,438,
        437,1,0,0,0,438,439,1,0,0,0,439,440,1,0,0,0,440,442,5,378,0,0,441,
        443,3,308,154,0,442,441,1,0,0,0,442,443,1,0,0,0,443,444,1,0,0,0,
        444,445,3,300,150,0,445,454,5,436,0,0,446,451,3,182,91,0,447,448,
        5,440,0,0,448,450,3,182,91,0,449,447,1,0,0,0,450,453,1,0,0,0,451,
        449,1,0,0,0,451,452,1,0,0,0,452,455,1,0,0,0,453,451,1,0,0,0,454,
        446,1,0,0,0,454,455,1,0,0,0,455,458,1,0,0,0,456,457,5,440,0,0,457,
        459,3,188,94,0,458,456,1,0,0,0,458,459,1,0,0,0,459,462,1,0,0,0,460,
        461,5,440,0,0,461,463,3,190,95,0,462,460,1,0,0,0,462,463,1,0,0,0,
        463,466,1,0,0,0,464,465,5,440,0,0,465,467,3,164,82,0,466,464,1,0,
        0,0,466,467,1,0,0,0,467,468,1,0,0,0,468,470,5,437,0,0,469,471,3,
        212,106,0,470,469,1,0,0,0,470,471,1,0,0,0,471,473,1,0,0,0,472,474,
        3,166,83,0,473,472,1,0,0,0,473,474,1,0,0,0,474,476,1,0,0,0,475,477,
        3,306,153,0,476,475,1,0,0,0,476,477,1,0,0,0,477,478,1,0,0,0,478,
        480,3,174,87,0,479,481,3,176,88,0,480,479,1,0,0,0,480,481,1,0,0,
        0,481,17,1,0,0,0,482,483,5,235,0,0,483,485,5,378,0,0,484,486,3,308,
        154,0,485,484,1,0,0,0,485,486,1,0,0,0,486,487,1,0,0,0,487,488,3,
        300,150,0,488,491,3,306,153,0,489,490,5,200,0,0,490,492,3,62,31,
        0,491,489,1,0,0,0,491,492,1,0,0,0,492,19,1,0,0,0,493,494,5,400,0,
        0,494,495,5,67,0,0,495,501,3,22,11,0,496,497,5,440,0,0,497,498,5,
        67,0,0,498,500,3,22,11,0,499,496,1,0,0,0,500,503,1,0,0,0,501,499,
        1,0,0,0,501,502,1,0,0,0,502,21,1,0,0,0,503,501,1,0,0,0,504,505,5,
        458,0,0,505,23,1,0,0,0,506,507,5,195,0,0,507,509,5,378,0,0,508,510,
        3,310,155,0,509,508,1,0,0,0,509,510,1,0,0,0,510,511,1,0,0,0,511,
        517,3,302,151,0,512,518,3,28,14,0,513,518,3,30,15,0,514,518,3,32,
        16,0,515,518,3,34,17,0,516,518,3,36,18,0,517,512,1,0,0,0,517,513,
        1,0,0,0,517,514,1,0,0,0,517,515,1,0,0,0,517,516,1,0,0,0,518,714,
        1,0,0,0,519,520,5,195,0,0,520,522,5,378,0,0,521,523,3,310,155,0,
        522,521,1,0,0,0,522,523,1,0,0,0,523,524,1,0,0,0,524,525,3,302,151,
        0,525,526,7,0,0,0,526,527,5,436,0,0,527,529,3,182,91,0,528,530,3,
        26,13,0,529,528,1,0,0,0,529,530,1,0,0,0,530,538,1,0,0,0,531,532,
        5,440,0,0,532,534,3,182,91,0,533,535,3,26,13,0,534,533,1,0,0,0,534,
        535,1,0,0,0,535,537,1,0,0,0,536,531,1,0,0,0,537,540,1,0,0,0,538,
        536,1,0,0,0,538,539,1,0,0,0,539,543,1,0,0,0,540,538,1,0,0,0,541,
        542,5,440,0,0,542,544,3,190,95,0,543,541,1,0,0,0,543,544,1,0,0,0,
        544,547,1,0,0,0,545,546,5,440,0,0,546,548,3,188,94,0,547,545,1,0,
        0,0,547,548,1,0,0,0,548,551,1,0,0,0,549,550,5,440,0,0,550,552,3,
        164,82,0,551,549,1,0,0,0,551,552,1,0,0,0,552,553,1,0,0,0,553,555,
        5,437,0,0,554,556,3,212,106,0,555,554,1,0,0,0,555,556,1,0,0,0,556,
        558,1,0,0,0,557,559,3,166,83,0,558,557,1,0,0,0,558,559,1,0,0,0,559,
        561,1,0,0,0,560,562,3,306,153,0,561,560,1,0,0,0,561,562,1,0,0,0,
        562,714,1,0,0,0,563,564,5,195,0,0,564,566,5,378,0,0,565,567,3,310,
        155,0,566,565,1,0,0,0,566,567,1,0,0,0,567,568,1,0,0,0,568,569,3,
        302,151,0,569,570,7,0,0,0,570,572,3,182,91,0,571,573,3,26,13,0,572,
        571,1,0,0,0,572,573,1,0,0,0,573,575,1,0,0,0,574,576,3,212,106,0,
        575,574,1,0,0,0,575,576,1,0,0,0,576,714,1,0,0,0,577,578,5,195,0,
        0,578,580,5,378,0,0,579,581,3,310,155,0,580,579,1,0,0,0,580,581,
        1,0,0,0,581,582,1,0,0,0,582,583,3,302,151,0,583,591,5,4,0,0,584,
        585,5,341,0,0,585,586,3,314,157,0,586,587,5,408,0,0,587,588,3,314,
        157,0,588,590,1,0,0,0,589,584,1,0,0,0,590,593,1,0,0,0,591,589,1,
        0,0,0,591,592,1,0,0,0,592,714,1,0,0,0,593,591,1,0,0,0,594,595,5,
        195,0,0,595,597,5,378,0,0,596,598,3,310,155,0,597,596,1,0,0,0,597,
        598,1,0,0,0,598,599,1,0,0,0,599,600,3,302,151,0,600,601,5,257,0,
        0,601,602,3,304,152,0,602,714,1,0,0,0,603,604,5,195,0,0,604,606,
        5,378,0,0,605,607,3,310,155,0,606,605,1,0,0,0,606,607,1,0,0,0,607,
        608,1,0,0,0,608,609,3,302,151,0,609,610,5,257,0,0,610,611,5,436,
        0,0,611,616,3,304,152,0,612,613,5,440,0,0,613,615,3,304,152,0,614,
        612,1,0,0,0,615,618,1,0,0,0,616,614,1,0,0,0,616,617,1,0,0,0,617,
        619,1,0,0,0,618,616,1,0,0,0,619,620,5,437,0,0,620,714,1,0,0,0,621,
        622,5,195,0,0,622,624,5,378,0,0,623,625,3,310,155,0,624,623,1,0,
        0,0,624,625,1,0,0,0,625,626,1,0,0,0,626,627,3,302,151,0,627,628,
        5,257,0,0,628,629,5,349,0,0,629,630,5,74,0,0,630,714,1,0,0,0,631,
        632,5,195,0,0,632,634,5,378,0,0,633,635,3,310,155,0,634,633,1,0,
        0,0,634,635,1,0,0,0,635,636,1,0,0,0,636,637,3,302,151,0,637,638,
        5,257,0,0,638,639,5,341,0,0,639,645,3,314,157,0,640,641,5,440,0,
        0,641,642,5,341,0,0,642,644,3,314,157,0,643,640,1,0,0,0,644,647,
        1,0,0,0,645,643,1,0,0,0,645,646,1,0,0,0,646,714,1,0,0,0,647,645,
        1,0,0,0,648,649,5,195,0,0,649,651,5,378,0,0,650,652,3,310,155,0,
        651,650,1,0,0,0,651,652,1,0,0,0,652,653,1,0,0,0,653,654,3,302,151,
        0,654,655,5,257,0,0,655,656,5,184,0,0,656,714,1,0,0,0,657,658,5,
        195,0,0,658,660,5,378,0,0,659,661,3,310,155,0,660,659,1,0,0,0,660,
        661,1,0,0,0,661,662,1,0,0,0,662,663,3,302,151,0,663,664,5,257,0,
        0,664,665,5,422,0,0,665,714,1,0,0,0,666,667,5,195,0,0,667,669,5,
        378,0,0,668,670,3,310,155,0,669,668,1,0,0,0,669,670,1,0,0,0,670,
        671,1,0,0,0,671,672,3,302,151,0,672,673,5,128,0,0,673,674,3,304,
        152,0,674,675,5,388,0,0,675,676,3,304,152,0,676,714,1,0,0,0,677,
        678,5,195,0,0,678,680,5,378,0,0,679,681,3,310,155,0,680,679,1,0,
        0,0,680,681,1,0,0,0,681,682,1,0,0,0,682,683,3,302,151,0,683,684,
        5,128,0,0,684,685,3,302,151,0,685,714,1,0,0,0,686,687,5,195,0,0,
        687,689,5,378,0,0,688,690,3,310,155,0,689,688,1,0,0,0,689,690,1,
        0,0,0,690,691,1,0,0,0,691,692,3,302,151,0,692,693,5,364,0,0,693,
        694,3,166,83,0,694,714,1,0,0,0,695,696,5,195,0,0,696,698,5,378,0,
        0,697,699,3,310,155,0,698,697,1,0,0,0,698,699,1,0,0,0,699,700,1,
        0,0,0,700,701,3,302,151,0,701,702,5,353,0,0,702,703,3,168,84,0,703,
        714,1,0,0,0,704,705,5,195,0,0,705,707,5,378,0,0,706,708,3,310,155,
        0,707,706,1,0,0,0,707,708,1,0,0,0,708,709,1,0,0,0,709,710,3,302,
        151,0,710,711,5,4,0,0,711,712,3,178,89,0,712,714,1,0,0,0,713,506,
        1,0,0,0,713,519,1,0,0,0,713,563,1,0,0,0,713,577,1,0,0,0,713,594,
        1,0,0,0,713,603,1,0,0,0,713,621,1,0,0,0,713,631,1,0,0,0,713,648,
        1,0,0,0,713,657,1,0,0,0,713,666,1,0,0,0,713,677,1,0,0,0,713,686,
        1,0,0,0,713,695,1,0,0,0,713,704,1,0,0,0,714,25,1,0,0,0,715,719,7,
        1,0,0,716,717,7,2,0,0,717,719,3,304,152,0,718,715,1,0,0,0,718,716,
        1,0,0,0,719,27,1,0,0,0,720,722,5,128,0,0,721,723,3,304,152,0,722,
        721,1,0,0,0,722,723,1,0,0,0,723,724,1,0,0,0,724,725,5,388,0,0,725,
        726,3,304,152,0,726,29,1,0,0,0,727,728,5,364,0,0,728,729,3,314,157,
        0,729,31,1,0,0,0,730,731,5,4,0,0,731,732,5,231,0,0,732,733,3,192,
        96,0,733,734,5,349,0,0,734,735,5,74,0,0,735,737,3,222,111,0,736,
        738,3,38,19,0,737,736,1,0,0,0,737,738,1,0,0,0,738,33,1,0,0,0,739,
        740,5,257,0,0,740,741,5,231,0,0,741,742,3,192,96,0,742,35,1,0,0,
        0,743,744,5,4,0,0,744,745,5,393,0,0,745,746,3,222,111,0,746,37,1,
        0,0,0,747,748,5,326,0,0,748,749,5,35,0,0,749,39,1,0,0,0,750,751,
        5,195,0,0,751,752,5,181,0,0,752,756,3,304,152,0,753,757,3,28,14,
        0,754,755,5,200,0,0,755,757,3,62,31,0,756,753,1,0,0,0,756,754,1,
        0,0,0,757,41,1,0,0,0,758,759,5,195,0,0,759,760,5,12,0,0,760,773,
        3,294,147,0,761,762,5,364,0,0,762,763,5,436,0,0,763,764,3,316,158,
        0,764,765,5,437,0,0,765,774,1,0,0,0,766,767,5,353,0,0,767,768,5,
        436,0,0,768,769,3,318,159,0,769,770,5,437,0,0,770,774,1,0,0,0,771,
        772,5,18,0,0,772,774,3,318,159,0,773,761,1,0,0,0,773,766,1,0,0,0,
        773,771,1,0,0,0,774,43,1,0,0,0,775,776,5,195,0,0,776,777,5,26,0,
        0,777,778,3,296,148,0,778,779,3,30,15,0,779,45,1,0,0,0,780,784,5,
        195,0,0,781,785,5,162,0,0,782,783,5,162,0,0,783,785,5,375,0,0,784,
        781,1,0,0,0,784,782,1,0,0,0,784,785,1,0,0,0,785,786,1,0,0,0,786,
        788,5,278,0,0,787,789,3,310,155,0,788,787,1,0,0,0,788,789,1,0,0,
        0,789,790,1,0,0,0,790,791,3,304,152,0,791,792,5,200,0,0,792,795,
        3,284,142,0,793,794,5,300,0,0,794,796,7,3,0,0,795,793,1,0,0,0,795,
        796,1,0,0,0,796,47,1,0,0,0,797,798,5,257,0,0,798,800,5,12,0,0,799,
        801,3,310,155,0,800,799,1,0,0,0,800,801,1,0,0,0,801,802,1,0,0,0,
        802,803,3,294,147,0,803,49,1,0,0,0,804,806,5,257,0,0,805,807,5,162,
        0,0,806,805,1,0,0,0,806,807,1,0,0,0,807,808,1,0,0,0,808,810,5,378,
        0,0,809,811,3,310,155,0,810,809,1,0,0,0,810,811,1,0,0,0,811,812,
        1,0,0,0,812,813,3,302,151,0,813,51,1,0,0,0,814,815,5,257,0,0,815,
        817,5,26,0,0,816,818,3,310,155,0,817,816,1,0,0,0,817,818,1,0,0,0,
        818,819,1,0,0,0,819,821,3,296,148,0,820,822,7,4,0,0,821,820,1,0,
        0,0,821,822,1,0,0,0,822,53,1,0,0,0,823,825,5,257,0,0,824,826,5,162,
        0,0,825,824,1,0,0,0,825,826,1,0,0,0,826,827,1,0,0,0,827,829,5,181,
        0,0,828,830,3,310,155,0,829,828,1,0,0,0,829,830,1,0,0,0,830,831,
        1,0,0,0,831,832,3,304,152,0,832,55,1,0,0,0,833,837,5,257,0,0,834,
        838,5,162,0,0,835,836,5,162,0,0,836,838,5,375,0,0,837,834,1,0,0,
        0,837,835,1,0,0,0,837,838,1,0,0,0,838,839,1,0,0,0,839,841,5,278,
        0,0,840,842,3,310,155,0,841,840,1,0,0,0,841,842,1,0,0,0,842,843,
        1,0,0,0,843,844,3,248,124,0,844,57,1,0,0,0,845,851,5,291,0,0,846,
        852,5,296,0,0,847,849,5,98,0,0,848,850,5,378,0,0,849,848,1,0,0,0,
        849,850,1,0,0,0,850,852,1,0,0,0,851,846,1,0,0,0,851,847,1,0,0,0,
        852,853,1,0,0,0,853,862,3,302,151,0,854,856,3,60,30,0,855,854,1,
        0,0,0,855,856,1,0,0,0,856,858,1,0,0,0,857,859,3,222,111,0,858,857,
        1,0,0,0,858,859,1,0,0,0,859,860,1,0,0,0,860,863,3,62,31,0,861,863,
        3,194,97,0,862,855,1,0,0,0,862,861,1,0,0,0,863,59,1,0,0,0,864,865,
        5,341,0,0,865,866,3,314,157,0,866,61,1,0,0,0,867,868,6,31,-1,0,868,
        884,3,64,32,0,869,870,5,436,0,0,870,871,3,62,31,0,871,872,5,437,
        0,0,872,884,1,0,0,0,873,876,3,350,175,0,874,876,3,348,174,0,875,
        873,1,0,0,0,875,874,1,0,0,0,876,878,1,0,0,0,877,879,3,134,67,0,878,
        877,1,0,0,0,878,879,1,0,0,0,879,881,1,0,0,0,880,882,3,138,69,0,881,
        880,1,0,0,0,881,882,1,0,0,0,882,884,1,0,0,0,883,867,1,0,0,0,883,
        869,1,0,0,0,883,875,1,0,0,0,884,899,1,0,0,0,885,886,10,2,0,0,886,
        888,7,5,0,0,887,889,5,193,0,0,888,887,1,0,0,0,888,889,1,0,0,0,889,
        890,1,0,0,0,890,892,3,62,31,0,891,893,3,134,67,0,892,891,1,0,0,0,
        892,893,1,0,0,0,893,895,1,0,0,0,894,896,3,138,69,0,895,894,1,0,0,
        0,895,896,1,0,0,0,896,898,1,0,0,0,897,885,1,0,0,0,898,901,1,0,0,
        0,899,897,1,0,0,0,899,900,1,0,0,0,900,63,1,0,0,0,901,899,1,0,0,0,
        902,903,5,402,0,0,903,908,3,226,113,0,904,905,5,440,0,0,905,907,
        3,226,113,0,906,904,1,0,0,0,907,910,1,0,0,0,908,906,1,0,0,0,908,
        909,1,0,0,0,909,65,1,0,0,0,910,908,1,0,0,0,911,923,3,68,34,0,912,
        913,5,436,0,0,913,918,3,220,110,0,914,915,5,440,0,0,915,917,3,220,
        110,0,916,914,1,0,0,0,917,920,1,0,0,0,918,916,1,0,0,0,918,919,1,
        0,0,0,919,921,1,0,0,0,920,918,1,0,0,0,921,922,5,437,0,0,922,924,
        1,0,0,0,923,912,1,0,0,0,923,924,1,0,0,0,924,925,1,0,0,0,925,926,
        5,200,0,0,926,927,5,436,0,0,927,928,3,62,31,0,928,929,5,437,0,0,
        929,67,1,0,0,0,930,931,3,284,142,0,931,69,1,0,0,0,932,933,5,281,
        0,0,933,934,5,212,0,0,934,939,3,110,55,0,935,936,5,440,0,0,936,938,
        3,110,55,0,937,935,1,0,0,0,938,941,1,0,0,0,939,937,1,0,0,0,939,940,
        1,0,0,0,940,943,1,0,0,0,941,939,1,0,0,0,942,944,3,112,56,0,943,942,
        1,0,0,0,943,944,1,0,0,0,944,71,1,0,0,0,945,946,5,275,0,0,946,947,
        3,356,178,0,947,73,1,0,0,0,948,950,3,78,39,0,949,951,3,274,137,0,
        950,949,1,0,0,0,950,951,1,0,0,0,951,75,1,0,0,0,952,953,7,6,0,0,953,
        77,1,0,0,0,954,956,5,378,0,0,955,954,1,0,0,0,955,956,1,0,0,0,956,
        957,1,0,0,0,957,959,3,302,151,0,958,960,3,80,40,0,959,958,1,0,0,
        0,959,960,1,0,0,0,960,963,1,0,0,0,961,962,5,200,0,0,962,964,3,256,
        128,0,963,961,1,0,0,0,963,964,1,0,0,0,964,1022,1,0,0,0,965,966,5,
        301,0,0,966,967,5,378,0,0,967,968,5,436,0,0,968,969,3,248,124,0,
        969,970,5,436,0,0,970,975,3,250,125,0,971,972,5,440,0,0,972,974,
        3,250,125,0,973,971,1,0,0,0,974,977,1,0,0,0,975,973,1,0,0,0,975,
        976,1,0,0,0,976,978,1,0,0,0,977,975,1,0,0,0,978,979,5,437,0,0,979,
        980,5,437,0,0,980,1022,1,0,0,0,981,983,5,301,0,0,982,981,1,0,0,0,
        982,983,1,0,0,0,983,984,1,0,0,0,984,985,5,436,0,0,985,986,3,62,31,
        0,986,987,5,437,0,0,987,1022,1,0,0,0,988,989,5,301,0,0,989,990,5,
        378,0,0,990,991,5,436,0,0,991,992,3,248,124,0,992,993,5,436,0,0,
        993,998,3,250,125,0,994,995,5,440,0,0,995,997,3,250,125,0,996,994,
        1,0,0,0,997,1000,1,0,0,0,998,996,1,0,0,0,998,999,1,0,0,0,999,1001,
        1,0,0,0,1000,998,1,0,0,0,1001,1002,5,437,0,0,1002,1003,5,437,0,0,
        1003,1004,5,200,0,0,1004,1005,3,274,137,0,1005,1006,5,436,0,0,1006,
        1011,3,346,173,0,1007,1008,5,440,0,0,1008,1010,3,346,173,0,1009,
        1007,1,0,0,0,1010,1013,1,0,0,0,1011,1009,1,0,0,0,1011,1012,1,0,0,
        0,1012,1014,1,0,0,0,1013,1011,1,0,0,0,1014,1015,5,437,0,0,1015,1022,
        1,0,0,0,1016,1017,5,395,0,0,1017,1018,5,436,0,0,1018,1019,3,226,
        113,0,1019,1020,5,437,0,0,1020,1022,1,0,0,0,1021,955,1,0,0,0,1021,
        965,1,0,0,0,1021,982,1,0,0,0,1021,988,1,0,0,0,1021,1016,1,0,0,0,
        1022,79,1,0,0,0,1023,1024,5,274,0,0,1024,1025,5,376,0,0,1025,1026,
        5,200,0,0,1026,1027,5,331,0,0,1027,1032,3,82,41,0,1028,1029,5,200,
        0,0,1029,1030,5,331,0,0,1030,1032,3,82,41,0,1031,1023,1,0,0,0,1031,
        1028,1,0,0,0,1032,81,1,0,0,0,1033,1034,3,226,113,0,1034,83,1,0,0,
        0,1035,1036,5,436,0,0,1036,1037,3,194,97,0,1037,1038,5,437,0,0,1038,
        1039,3,274,137,0,1039,85,1,0,0,0,1040,1041,5,378,0,0,1041,1042,5,
        436,0,0,1042,1043,3,88,44,0,1043,1044,5,437,0,0,1044,87,1,0,0,0,
        1045,1050,3,90,45,0,1046,1050,3,92,46,0,1047,1050,3,94,47,0,1048,
        1050,3,96,48,0,1049,1045,1,0,0,0,1049,1046,1,0,0,0,1049,1047,1,0,
        0,0,1049,1048,1,0,0,0,1050,89,1,0,0,0,1051,1052,5,170,0,0,1052,1057,
        5,436,0,0,1053,1058,5,378,0,0,1054,1055,5,25,0,0,1055,1056,5,457,
        0,0,1056,1058,5,378,0,0,1057,1053,1,0,0,0,1057,1054,1,0,0,0,1058,
        1059,1,0,0,0,1059,1060,3,304,152,0,1060,1063,5,440,0,0,1061,1062,
        5,163,0,0,1062,1064,5,457,0,0,1063,1061,1,0,0,0,1063,1064,1,0,0,
        0,1064,1065,1,0,0,0,1065,1066,3,104,52,0,1066,1067,1,0,0,0,1067,
        1070,5,440,0,0,1068,1069,5,149,0,0,1069,1071,5,457,0,0,1070,1068,
        1,0,0,0,1070,1071,1,0,0,0,1071,1072,1,0,0,0,1072,1073,3,260,130,
        0,1073,1082,1,0,0,0,1074,1079,5,440,0,0,1075,1076,5,445,0,0,1076,
        1077,5,332,0,0,1077,1078,5,445,0,0,1078,1080,5,457,0,0,1079,1075,
        1,0,0,0,1079,1080,1,0,0,0,1080,1081,1,0,0,0,1081,1083,3,260,130,
        0,1082,1074,1,0,0,0,1082,1083,1,0,0,0,1083,1084,1,0,0,0,1084,1085,
        5,437,0,0,1085,91,1,0,0,0,1086,1087,5,60,0,0,1087,1092,5,436,0,0,
        1088,1093,5,378,0,0,1089,1090,5,25,0,0,1090,1091,5,457,0,0,1091,
        1093,5,378,0,0,1092,1088,1,0,0,0,1092,1089,1,0,0,0,1093,1094,1,0,
        0,0,1094,1095,3,304,152,0,1095,1098,5,440,0,0,1096,1097,5,163,0,
        0,1097,1099,5,457,0,0,1098,1096,1,0,0,0,1098,1099,1,0,0,0,1099,1100,
        1,0,0,0,1100,1101,3,104,52,0,1101,1108,1,0,0,0,1102,1105,5,440,0,
        0,1103,1104,5,150,0,0,1104,1106,5,457,0,0,1105,1103,1,0,0,0,1105,
        1106,1,0,0,0,1106,1107,1,0,0,0,1107,1109,3,260,130,0,1108,1102,1,
        0,0,0,1108,1109,1,0,0,0,1109,1110,1,0,0,0,1110,1113,5,440,0,0,1111,
        1112,5,149,0,0,1112,1114,5,457,0,0,1113,1111,1,0,0,0,1113,1114,1,
        0,0,0,1114,1115,1,0,0,0,1115,1116,3,260,130,0,1116,1125,1,0,0,0,
        1117,1122,5,440,0,0,1118,1119,5,445,0,0,1119,1120,5,332,0,0,1120,
        1121,5,445,0,0,1121,1123,5,457,0,0,1122,1118,1,0,0,0,1122,1123,1,
        0,0,0,1123,1124,1,0,0,0,1124,1126,3,260,130,0,1125,1117,1,0,0,0,
        1125,1126,1,0,0,0,1126,1127,1,0,0,0,1127,1128,5,437,0,0,1128,93,
        1,0,0,0,1129,1130,5,24,0,0,1130,1135,5,436,0,0,1131,1136,5,378,0,
        0,1132,1133,5,25,0,0,1133,1134,5,457,0,0,1134,1136,5,378,0,0,1135,
        1131,1,0,0,0,1135,1132,1,0,0,0,1136,1137,1,0,0,0,1137,1138,3,304,
        152,0,1138,1141,5,440,0,0,1139,1140,5,163,0,0,1140,1142,5,457,0,
        0,1141,1139,1,0,0,0,1141,1142,1,0,0,0,1142,1143,1,0,0,0,1143,1144,
        3,104,52,0,1144,1151,1,0,0,0,1145,1148,5,440,0,0,1146,1147,5,156,
        0,0,1147,1149,5,457,0,0,1148,1146,1,0,0,0,1148,1149,1,0,0,0,1149,
        1150,1,0,0,0,1150,1152,3,260,130,0,1151,1145,1,0,0,0,1151,1152,1,
        0,0,0,1152,1153,1,0,0,0,1153,1156,5,440,0,0,1154,1155,5,149,0,0,
        1155,1157,5,457,0,0,1156,1154,1,0,0,0,1156,1157,1,0,0,0,1157,1158,
        1,0,0,0,1158,1159,3,260,130,0,1159,1160,1,0,0,0,1160,1161,5,437,
        0,0,1161,95,1,0,0,0,1162,1163,5,146,0,0,1163,1168,5,436,0,0,1164,
        1169,5,378,0,0,1165,1166,5,25,0,0,1166,1167,5,457,0,0,1167,1169,
        5,378,0,0,1168,1164,1,0,0,0,1168,1165,1,0,0,0,1169,1170,1,0,0,0,
        1170,1181,3,304,152,0,1171,1172,5,341,0,0,1172,1173,5,212,0,0,1173,
        1178,3,304,152,0,1174,1175,5,440,0,0,1175,1177,3,304,152,0,1176,
        1174,1,0,0,0,1177,1180,1,0,0,0,1178,1176,1,0,0,0,1178,1179,1,0,0,
        0,1179,1182,1,0,0,0,1180,1178,1,0,0,0,1181,1171,1,0,0,0,1181,1182,
        1,0,0,0,1182,1189,1,0,0,0,1183,1186,5,440,0,0,1184,1185,5,163,0,
        0,1185,1187,5,457,0,0,1186,1184,1,0,0,0,1186,1187,1,0,0,0,1187,1188,
        1,0,0,0,1188,1190,3,104,52,0,1189,1183,1,0,0,0,1189,1190,1,0,0,0,
        1190,1197,1,0,0,0,1191,1194,5,440,0,0,1192,1193,5,56,0,0,1193,1195,
        5,457,0,0,1194,1192,1,0,0,0,1194,1195,1,0,0,0,1195,1196,1,0,0,0,
        1196,1198,3,260,130,0,1197,1191,1,0,0,0,1197,1198,1,0,0,0,1198,1199,
        1,0,0,0,1199,1200,5,437,0,0,1200,97,1,0,0,0,1201,1202,7,7,0,0,1202,
        99,1,0,0,0,1203,1204,5,378,0,0,1204,1219,3,122,61,0,1205,1219,3,
        104,52,0,1206,1219,3,260,130,0,1207,1208,5,25,0,0,1208,1209,5,457,
        0,0,1209,1210,5,378,0,0,1210,1219,3,122,61,0,1211,1212,5,163,0,0,
        1212,1213,5,457,0,0,1213,1219,3,104,52,0,1214,1215,3,102,51,0,1215,
        1216,5,457,0,0,1216,1217,3,260,130,0,1217,1219,1,0,0,0,1218,1203,
        1,0,0,0,1218,1205,1,0,0,0,1218,1206,1,0,0,0,1218,1207,1,0,0,0,1218,
        1211,1,0,0,0,1218,1214,1,0,0,0,1219,101,1,0,0,0,1220,1221,7,8,0,
        0,1221,103,1,0,0,0,1222,1223,5,32,0,0,1223,1224,5,436,0,0,1224,1225,
        3,304,152,0,1225,1226,5,437,0,0,1226,105,1,0,0,0,1227,1228,5,333,
        0,0,1228,1242,3,228,114,0,1229,1230,5,400,0,0,1230,1231,5,436,0,
        0,1231,1236,3,304,152,0,1232,1233,5,440,0,0,1233,1235,3,304,152,
        0,1234,1232,1,0,0,0,1235,1238,1,0,0,0,1236,1234,1,0,0,0,1236,1237,
        1,0,0,0,1237,1239,1,0,0,0,1238,1236,1,0,0,0,1239,1240,5,437,0,0,
        1240,1242,1,0,0,0,1241,1227,1,0,0,0,1241,1229,1,0,0,0,1242,107,1,
        0,0,0,1243,1244,5,406,0,0,1244,1245,3,228,114,0,1245,109,1,0,0,0,
        1246,1274,3,226,113,0,1247,1274,3,118,59,0,1248,1249,5,436,0,0,1249,
        1274,5,437,0,0,1250,1251,5,436,0,0,1251,1256,3,226,113,0,1252,1253,
        5,440,0,0,1253,1255,3,226,113,0,1254,1252,1,0,0,0,1255,1258,1,0,
        0,0,1256,1254,1,0,0,0,1256,1257,1,0,0,0,1257,1259,1,0,0,0,1258,1256,
        1,0,0,0,1259,1260,5,437,0,0,1260,1274,1,0,0,0,1261,1262,3,116,58,
        0,1262,1263,5,436,0,0,1263,1268,3,226,113,0,1264,1265,5,440,0,0,
        1265,1267,3,226,113,0,1266,1264,1,0,0,0,1267,1270,1,0,0,0,1268,1266,
        1,0,0,0,1268,1269,1,0,0,0,1269,1271,1,0,0,0,1270,1268,1,0,0,0,1271,
        1272,5,437,0,0,1272,1274,1,0,0,0,1273,1246,1,0,0,0,1273,1247,1,0,
        0,0,1273,1248,1,0,0,0,1273,1250,1,0,0,0,1273,1261,1,0,0,0,1274,111,
        1,0,0,0,1275,1276,3,114,57,0,1276,1277,5,436,0,0,1277,1282,3,110,
        55,0,1278,1279,5,440,0,0,1279,1281,3,110,55,0,1280,1278,1,0,0,0,
        1281,1284,1,0,0,0,1282,1280,1,0,0,0,1282,1283,1,0,0,0,1283,1285,
        1,0,0,0,1284,1282,1,0,0,0,1285,1286,5,437,0,0,1286,113,1,0,0,0,1287,
        1288,5,282,0,0,1288,1289,5,147,0,0,1289,115,1,0,0,0,1290,1291,7,
        9,0,0,1291,117,1,0,0,0,1292,1293,3,120,60,0,1293,1294,5,436,0,0,
        1294,1295,3,122,61,0,1295,1296,5,440,0,0,1296,1297,3,260,130,0,1297,
        1298,5,437,0,0,1298,119,1,0,0,0,1299,1300,7,10,0,0,1300,121,1,0,
        0,0,1301,1302,3,304,152,0,1302,123,1,0,0,0,1303,1304,5,284,0,0,1304,
        1305,3,228,114,0,1305,125,1,0,0,0,1306,1307,5,407,0,0,1307,1312,
        3,128,64,0,1308,1309,5,440,0,0,1309,1311,3,128,64,0,1310,1308,1,
        0,0,0,1311,1314,1,0,0,0,1312,1310,1,0,0,0,1312,1313,1,0,0,0,1313,
        127,1,0,0,0,1314,1312,1,0,0,0,1315,1316,3,276,138,0,1316,1317,5,
        200,0,0,1317,1318,3,130,65,0,1318,129,1,0,0,0,1319,1321,3,276,138,
        0,1320,1319,1,0,0,0,1320,1321,1,0,0,0,1321,1322,1,0,0,0,1322,1324,
        5,436,0,0,1323,1325,3,140,70,0,1324,1323,1,0,0,0,1324,1325,1,0,0,
        0,1325,1327,1,0,0,0,1326,1328,3,134,67,0,1327,1326,1,0,0,0,1327,
        1328,1,0,0,0,1328,1330,1,0,0,0,1329,1331,3,156,78,0,1330,1329,1,
        0,0,0,1330,1331,1,0,0,0,1331,1332,1,0,0,0,1332,1333,5,437,0,0,1333,
        131,1,0,0,0,1334,1335,5,312,0,0,1335,1337,5,436,0,0,1336,1338,3,
        140,70,0,1337,1336,1,0,0,0,1337,1338,1,0,0,0,1338,1340,1,0,0,0,1339,
        1341,3,134,67,0,1340,1339,1,0,0,0,1340,1341,1,0,0,0,1341,1343,1,
        0,0,0,1342,1344,3,144,72,0,1343,1342,1,0,0,0,1343,1344,1,0,0,0,1344,
        1346,1,0,0,0,1345,1347,3,150,75,0,1346,1345,1,0,0,0,1346,1347,1,
        0,0,0,1347,1349,1,0,0,0,1348,1350,3,152,76,0,1349,1348,1,0,0,0,1349,
        1350,1,0,0,0,1350,1352,1,0,0,0,1351,1353,3,146,73,0,1352,1351,1,
        0,0,0,1352,1353,1,0,0,0,1353,1354,1,0,0,0,1354,1355,3,154,77,0,1355,
        1360,5,437,0,0,1356,1358,5,200,0,0,1357,1356,1,0,0,0,1357,1358,1,
        0,0,0,1358,1359,1,0,0,0,1359,1361,3,284,142,0,1360,1357,1,0,0,0,
        1360,1361,1,0,0,0,1361,133,1,0,0,0,1362,1363,5,336,0,0,1363,1364,
        5,212,0,0,1364,1369,3,136,68,0,1365,1366,5,440,0,0,1366,1368,3,136,
        68,0,1367,1365,1,0,0,0,1368,1371,1,0,0,0,1369,1367,1,0,0,0,1369,
        1370,1,0,0,0,1370,135,1,0,0,0,1371,1369,1,0,0,0,1372,1374,3,226,
        113,0,1373,1375,7,11,0,0,1374,1373,1,0,0,0,1374,1375,1,0,0,0,1375,
        1378,1,0,0,0,1376,1377,5,92,0,0,1377,1379,7,1,0,0,1378,1376,1,0,
        0,0,1378,1379,1,0,0,0,1379,137,1,0,0,0,1380,1383,5,308,0,0,1381,
        1384,5,193,0,0,1382,1384,3,226,113,0,1383,1381,1,0,0,0,1383,1382,
        1,0,0,0,1384,139,1,0,0,0,1385,1386,5,341,0,0,1386,1387,5,212,0,0,
        1387,1392,3,226,113,0,1388,1389,5,440,0,0,1389,1391,3,226,113,0,
        1390,1388,1,0,0,0,1391,1394,1,0,0,0,1392,1390,1,0,0,0,1392,1393,
        1,0,0,0,1393,141,1,0,0,0,1394,1392,1,0,0,0,1395,1412,5,448,0,0,1396,
        1412,5,451,0,0,1397,1412,5,456,0,0,1398,1399,5,438,0,0,1399,1400,
        5,459,0,0,1400,1401,5,440,0,0,1401,1402,5,459,0,0,1402,1412,5,439,
        0,0,1403,1404,5,438,0,0,1404,1405,5,459,0,0,1405,1406,5,440,0,0,
        1406,1412,5,439,0,0,1407,1408,5,438,0,0,1408,1409,5,440,0,0,1409,
        1410,5,459,0,0,1410,1412,5,439,0,0,1411,1395,1,0,0,0,1411,1396,1,
        0,0,0,1411,1397,1,0,0,0,1411,1398,1,0,0,0,1411,1403,1,0,0,0,1411,
        1407,1,0,0,0,1412,143,1,0,0,0,1413,1414,5,313,0,0,1414,1419,3,346,
        173,0,1415,1416,5,440,0,0,1416,1418,3,346,173,0,1417,1415,1,0,0,
        0,1418,1421,1,0,0,0,1419,1417,1,0,0,0,1419,1420,1,0,0,0,1420,145,
        1,0,0,0,1421,1419,1,0,0,0,1422,1423,5,342,0,0,1423,1425,5,436,0,
        0,1424,1426,3,148,74,0,1425,1424,1,0,0,0,1426,1427,1,0,0,0,1427,
        1425,1,0,0,0,1427,1428,1,0,0,0,1428,1429,1,0,0,0,1429,1431,5,437,
        0,0,1430,1432,3,160,80,0,1431,1430,1,0,0,0,1431,1432,1,0,0,0,1432,
        147,1,0,0,0,1433,1435,3,288,144,0,1434,1436,3,142,71,0,1435,1434,
        1,0,0,0,1435,1436,1,0,0,0,1436,149,1,0,0,0,1437,1438,5,193,0,0,1438,
        1439,5,360,0,0,1439,1440,5,343,0,0,1440,1446,5,311,0,0,1441,1442,
        5,334,0,0,1442,1443,5,359,0,0,1443,1444,5,343,0,0,1444,1446,5,311,
        0,0,1445,1437,1,0,0,0,1445,1441,1,0,0,0,1446,151,1,0,0,0,1447,1448,
        5,6,0,0,1448,1449,5,311,0,0,1449,1450,5,368,0,0,1450,1451,5,103,
        0,0,1451,1452,5,78,0,0,1452,1472,5,359,0,0,1453,1454,5,6,0,0,1454,
        1455,5,311,0,0,1455,1456,5,368,0,0,1456,1457,5,388,0,0,1457,1458,
        5,323,0,0,1458,1472,5,359,0,0,1459,1460,5,6,0,0,1460,1461,5,311,
        0,0,1461,1462,5,368,0,0,1462,1463,5,388,0,0,1463,1464,5,78,0,0,1464,
        1472,3,288,144,0,1465,1466,5,6,0,0,1466,1467,5,311,0,0,1467,1468,
        5,368,0,0,1468,1469,5,388,0,0,1469,1470,5,47,0,0,1470,1472,3,288,
        144,0,1471,1447,1,0,0,0,1471,1453,1,0,0,0,1471,1459,1,0,0,0,1471,
        1465,1,0,0,0,1472,153,1,0,0,0,1473,1474,5,249,0,0,1474,1479,3,346,
        173,0,1475,1476,5,440,0,0,1476,1478,3,346,173,0,1477,1475,1,0,0,
        0,1478,1481,1,0,0,0,1479,1477,1,0,0,0,1479,1480,1,0,0,0,1480,155,
        1,0,0,0,1481,1479,1,0,0,0,1482,1483,5,350,0,0,1483,1484,5,205,0,
        0,1484,1485,3,260,130,0,1485,1486,3,158,79,0,1486,1492,1,0,0,0,1487,
        1488,5,360,0,0,1488,1489,5,205,0,0,1489,1490,5,459,0,0,1490,1492,
        3,158,79,0,1491,1482,1,0,0,0,1491,1487,1,0,0,0,1492,157,1,0,0,0,
        1493,1494,5,108,0,0,1494,1495,5,196,0,0,1495,1496,5,239,0,0,1496,
        1497,5,359,0,0,1497,159,1,0,0,0,1498,1499,5,409,0,0,1499,1500,3,
        260,130,0,1500,161,1,0,0,0,1501,1502,5,341,0,0,1502,1503,3,312,156,
        0,1503,163,1,0,0,0,1504,1505,5,346,0,0,1505,1506,5,274,0,0,1506,
        1507,5,376,0,0,1507,165,1,0,0,0,1508,1509,5,100,0,0,1509,1510,5,
        212,0,0,1510,1511,3,168,84,0,1511,167,1,0,0,0,1512,1513,5,436,0,
        0,1513,1518,3,170,85,0,1514,1515,5,440,0,0,1515,1517,3,170,85,0,
        1516,1514,1,0,0,0,1517,1520,1,0,0,0,1518,1516,1,0,0,0,1518,1519,
        1,0,0,0,1519,1521,1,0,0,0,1520,1518,1,0,0,0,1521,1522,5,437,0,0,
        1522,169,1,0,0,0,1523,1537,3,258,129,0,1524,1525,3,284,142,0,1525,
        1526,5,436,0,0,1526,1531,3,172,86,0,1527,1528,5,440,0,0,1528,1530,
        3,172,86,0,1529,1527,1,0,0,0,1530,1533,1,0,0,0,1531,1529,1,0,0,0,
        1531,1532,1,0,0,0,1532,1534,1,0,0,0,1533,1531,1,0,0,0,1534,1535,
        5,437,0,0,1535,1537,1,0,0,0,1536,1523,1,0,0,0,1536,1524,1,0,0,0,
        1537,171,1,0,0,0,1538,1541,3,258,129,0,1539,1541,3,324,162,0,1540,
        1538,1,0,0,0,1540,1539,1,0,0,0,1541,173,1,0,0,0,1542,1543,5,306,
        0,0,1543,1552,3,302,151,0,1544,1548,5,436,0,0,1545,1547,3,180,90,
        0,1546,1545,1,0,0,0,1547,1550,1,0,0,0,1548,1546,1,0,0,0,1548,1549,
        1,0,0,0,1549,1551,1,0,0,0,1550,1548,1,0,0,0,1551,1553,5,437,0,0,
        1552,1544,1,0,0,0,1552,1553,1,0,0,0,1553,175,1,0,0,0,1554,1563,5,
        421,0,0,1555,1557,5,212,0,0,1556,1558,5,423,0,0,1557,1556,1,0,0,
        0,1557,1558,1,0,0,0,1558,1559,1,0,0,0,1559,1560,5,436,0,0,1560,1561,
        3,284,142,0,1561,1562,5,437,0,0,1562,1564,1,0,0,0,1563,1555,1,0,
        0,0,1563,1564,1,0,0,0,1564,1569,1,0,0,0,1565,1566,5,296,0,0,1566,
        1567,3,330,165,0,1567,1568,5,424,0,0,1568,1570,1,0,0,0,1569,1565,
        1,0,0,0,1569,1570,1,0,0,0,1570,177,1,0,0,0,1571,1580,5,422,0,0,1572,
        1574,5,212,0,0,1573,1575,5,423,0,0,1574,1573,1,0,0,0,1574,1575,1,
        0,0,0,1575,1576,1,0,0,0,1576,1577,5,436,0,0,1577,1578,3,284,142,
        0,1578,1579,5,437,0,0,1579,1581,1,0,0,0,1580,1572,1,0,0,0,1580,1581,
        1,0,0,0,1581,1586,1,0,0,0,1582,1583,5,296,0,0,1583,1584,3,330,165,
        0,1584,1585,5,424,0,0,1585,1587,1,0,0,0,1586,1582,1,0,0,0,1586,1587,
        1,0,0,0,1587,179,1,0,0,0,1588,1589,7,12,0,0,1589,1593,7,13,0,0,1590,
        1591,7,14,0,0,1591,1593,7,15,0,0,1592,1588,1,0,0,0,1592,1590,1,0,
        0,0,1593,181,1,0,0,0,1594,1598,3,184,92,0,1595,1598,3,214,107,0,
        1596,1598,3,218,109,0,1597,1594,1,0,0,0,1597,1595,1,0,0,0,1597,1596,
        1,0,0,0,1598,183,1,0,0,0,1599,1600,3,220,110,0,1600,1602,3,224,112,
        0,1601,1603,3,210,105,0,1602,1601,1,0,0,0,1602,1603,1,0,0,0,1603,
        1605,1,0,0,0,1604,1606,3,212,106,0,1605,1604,1,0,0,0,1605,1606,1,
        0,0,0,1606,185,1,0,0,0,1607,1608,3,226,113,0,1608,187,1,0,0,0,1609,
        1610,5,184,0,0,1610,1611,5,274,0,0,1611,1612,3,226,113,0,1612,1613,
        5,200,0,0,1613,1614,3,226,113,0,1614,1627,1,0,0,0,1615,1616,5,184,
        0,0,1616,1619,5,274,0,0,1617,1620,3,304,152,0,1618,1620,3,226,113,
        0,1619,1617,1,0,0,0,1619,1618,1,0,0,0,1620,1621,1,0,0,0,1621,1622,
        5,200,0,0,1622,1624,3,304,152,0,1623,1625,3,260,130,0,1624,1623,
        1,0,0,0,1624,1625,1,0,0,0,1625,1627,1,0,0,0,1626,1609,1,0,0,0,1626,
        1615,1,0,0,0,1627,189,1,0,0,0,1628,1629,5,231,0,0,1629,1631,3,192,
        96,0,1630,1628,1,0,0,0,1630,1631,1,0,0,0,1631,1632,1,0,0,0,1632,
        1633,5,349,0,0,1633,1634,5,74,0,0,1634,1635,3,222,111,0,1635,1636,
        5,326,0,0,1636,1637,5,35,0,0,1637,191,1,0,0,0,1638,1639,3,284,142,
        0,1639,193,1,0,0,0,1640,1641,5,402,0,0,1641,1646,3,196,98,0,1642,
        1643,5,440,0,0,1643,1645,3,196,98,0,1644,1642,1,0,0,0,1645,1648,
        1,0,0,0,1646,1644,1,0,0,0,1646,1647,1,0,0,0,1647,195,1,0,0,0,1648,
        1646,1,0,0,0,1649,1650,5,436,0,0,1650,1655,3,324,162,0,1651,1652,
        5,440,0,0,1652,1654,3,324,162,0,1653,1651,1,0,0,0,1654,1657,1,0,
        0,0,1655,1653,1,0,0,0,1655,1656,1,0,0,0,1656,1658,1,0,0,0,1657,1655,
        1,0,0,0,1658,1659,5,437,0,0,1659,197,1,0,0,0,1660,1661,5,436,0,0,
        1661,1662,3,330,165,0,1662,1663,5,437,0,0,1663,199,1,0,0,0,1664,
        1665,5,436,0,0,1665,1668,3,330,165,0,1666,1667,5,440,0,0,1667,1669,
        3,330,165,0,1668,1666,1,0,0,0,1668,1669,1,0,0,0,1669,1670,1,0,0,
        0,1670,1671,5,437,0,0,1671,201,1,0,0,0,1672,1673,5,436,0,0,1673,
        1676,3,328,164,0,1674,1675,5,440,0,0,1675,1677,3,328,164,0,1676,
        1674,1,0,0,0,1676,1677,1,0,0,0,1677,1678,1,0,0,0,1678,1679,5,437,
        0,0,1679,203,1,0,0,0,1680,1681,5,431,0,0,1681,1686,3,224,112,0,1682,
        1683,5,440,0,0,1683,1685,3,224,112,0,1684,1682,1,0,0,0,1685,1688,
        1,0,0,0,1686,1684,1,0,0,0,1686,1687,1,0,0,0,1687,1689,1,0,0,0,1688,
        1686,1,0,0,0,1689,1690,5,430,0,0,1690,205,1,0,0,0,1691,1692,5,431,
        0,0,1692,1693,3,224,112,0,1693,1694,5,440,0,0,1694,1695,3,224,112,
        0,1695,1696,1,0,0,0,1696,1697,5,430,0,0,1697,207,1,0,0,0,1698,1699,
        5,431,0,0,1699,1700,3,220,110,0,1700,1707,3,224,112,0,1701,1702,
        5,440,0,0,1702,1703,3,220,110,0,1703,1704,3,224,112,0,1704,1706,
        1,0,0,0,1705,1701,1,0,0,0,1706,1709,1,0,0,0,1707,1705,1,0,0,0,1707,
        1708,1,0,0,0,1708,1710,1,0,0,0,1709,1707,1,0,0,0,1710,1711,5,430,
        0,0,1711,209,1,0,0,0,1712,1713,5,231,0,0,1713,1715,3,192,96,0,1714,
        1712,1,0,0,0,1714,1715,1,0,0,0,1715,1716,1,0,0,0,1716,1717,5,349,
        0,0,1717,1720,5,74,0,0,1718,1719,5,326,0,0,1719,1721,5,35,0,0,1720,
        1718,1,0,0,0,1720,1721,1,0,0,0,1721,1727,1,0,0,0,1722,1724,5,326,
        0,0,1723,1722,1,0,0,0,1723,1724,1,0,0,0,1724,1725,1,0,0,0,1725,1727,
        5,329,0,0,1726,1714,1,0,0,0,1726,1723,1,0,0,0,1727,211,1,0,0,0,1728,
        1729,5,18,0,0,1729,1730,5,458,0,0,1730,213,1,0,0,0,1731,1732,3,220,
        110,0,1732,1733,3,224,112,0,1733,1736,5,315,0,0,1734,1735,5,275,
        0,0,1735,1737,3,216,108,0,1736,1734,1,0,0,0,1736,1737,1,0,0,0,1737,
        1739,1,0,0,0,1738,1740,5,183,0,0,1739,1738,1,0,0,0,1739,1740,1,0,
        0,0,1740,215,1,0,0,0,1741,1742,5,458,0,0,1742,217,1,0,0,0,1743,1744,
        3,220,110,0,1744,1745,5,200,0,0,1745,1747,3,186,93,0,1746,1748,3,
        212,106,0,1747,1746,1,0,0,0,1747,1748,1,0,0,0,1748,219,1,0,0,0,1749,
        1752,3,304,152,0,1750,1752,3,226,113,0,1751,1749,1,0,0,0,1751,1750,
        1,0,0,0,1752,221,1,0,0,0,1753,1754,5,436,0,0,1754,1759,3,220,110,
        0,1755,1756,5,440,0,0,1756,1758,3,220,110,0,1757,1755,1,0,0,0,1758,
        1761,1,0,0,0,1759,1757,1,0,0,0,1759,1760,1,0,0,0,1760,1762,1,0,0,
        0,1761,1759,1,0,0,0,1762,1763,5,437,0,0,1763,1773,1,0,0,0,1764,1769,
        3,220,110,0,1765,1766,5,440,0,0,1766,1768,3,220,110,0,1767,1765,
        1,0,0,0,1768,1771,1,0,0,0,1769,1767,1,0,0,0,1769,1770,1,0,0,0,1770,
        1773,1,0,0,0,1771,1769,1,0,0,0,1772,1753,1,0,0,0,1772,1764,1,0,0,
        0,1773,223,1,0,0,0,1774,1848,7,16,0,0,1775,1777,7,17,0,0,1776,1778,
        3,198,99,0,1777,1776,1,0,0,0,1777,1778,1,0,0,0,1778,1848,1,0,0,0,
        1779,1781,5,383,0,0,1780,1782,3,198,99,0,1781,1780,1,0,0,0,1781,
        1782,1,0,0,0,1782,1789,1,0,0,0,1783,1785,7,18,0,0,1784,1786,5,309,
        0,0,1785,1784,1,0,0,0,1785,1786,1,0,0,0,1786,1787,1,0,0,0,1787,1788,
        5,382,0,0,1788,1790,5,191,0,0,1789,1783,1,0,0,0,1789,1790,1,0,0,
        0,1790,1848,1,0,0,0,1791,1793,5,384,0,0,1792,1794,3,198,99,0,1793,
        1792,1,0,0,0,1793,1794,1,0,0,0,1794,1801,1,0,0,0,1795,1797,7,18,
        0,0,1796,1798,5,309,0,0,1797,1796,1,0,0,0,1797,1798,1,0,0,0,1798,
        1799,1,0,0,0,1799,1800,5,382,0,0,1800,1802,5,191,0,0,1801,1795,1,
        0,0,0,1801,1802,1,0,0,0,1802,1848,1,0,0,0,1803,1805,5,385,0,0,1804,
        1806,3,198,99,0,1805,1804,1,0,0,0,1805,1806,1,0,0,0,1806,1813,1,
        0,0,0,1807,1809,7,18,0,0,1808,1810,5,309,0,0,1809,1808,1,0,0,0,1809,
        1810,1,0,0,0,1810,1811,1,0,0,0,1811,1812,5,382,0,0,1812,1814,5,191,
        0,0,1813,1807,1,0,0,0,1813,1814,1,0,0,0,1814,1848,1,0,0,0,1815,1817,
        5,386,0,0,1816,1818,3,198,99,0,1817,1816,1,0,0,0,1817,1818,1,0,0,
        0,1818,1825,1,0,0,0,1819,1821,7,18,0,0,1820,1822,5,309,0,0,1821,
        1820,1,0,0,0,1821,1822,1,0,0,0,1822,1823,1,0,0,0,1823,1824,5,382,
        0,0,1824,1826,5,191,0,0,1825,1819,1,0,0,0,1825,1826,1,0,0,0,1826,
        1848,1,0,0,0,1827,1829,7,19,0,0,1828,1830,3,200,100,0,1829,1828,
        1,0,0,0,1829,1830,1,0,0,0,1830,1848,1,0,0,0,1831,1833,7,20,0,0,1832,
        1834,3,204,102,0,1833,1832,1,0,0,0,1833,1834,1,0,0,0,1834,1848,1,
        0,0,0,1835,1837,5,82,0,0,1836,1838,3,206,103,0,1837,1836,1,0,0,0,
        1837,1838,1,0,0,0,1838,1848,1,0,0,0,1839,1841,5,359,0,0,1840,1842,
        3,208,104,0,1841,1840,1,0,0,0,1841,1842,1,0,0,0,1842,1848,1,0,0,
        0,1843,1845,5,122,0,0,1844,1846,3,202,101,0,1845,1844,1,0,0,0,1845,
        1846,1,0,0,0,1846,1848,1,0,0,0,1847,1774,1,0,0,0,1847,1775,1,0,0,
        0,1847,1779,1,0,0,0,1847,1791,1,0,0,0,1847,1803,1,0,0,0,1847,1815,
        1,0,0,0,1847,1827,1,0,0,0,1847,1831,1,0,0,0,1847,1835,1,0,0,0,1847,
        1839,1,0,0,0,1847,1843,1,0,0,0,1848,225,1,0,0,0,1849,1850,3,228,
        114,0,1850,227,1,0,0,0,1851,1852,6,114,-1,0,1852,1853,5,326,0,0,
        1853,1864,3,228,114,6,1854,1855,5,266,0,0,1855,1856,5,436,0,0,1856,
        1857,3,62,31,0,1857,1858,5,437,0,0,1858,1864,1,0,0,0,1859,1861,3,
        234,117,0,1860,1862,3,230,115,0,1861,1860,1,0,0,0,1861,1862,1,0,
        0,0,1862,1864,1,0,0,0,1863,1851,1,0,0,0,1863,1854,1,0,0,0,1863,1859,
        1,0,0,0,1864,1879,1,0,0,0,1865,1866,10,3,0,0,1866,1867,5,196,0,0,
        1867,1878,3,228,114,4,1868,1869,10,2,0,0,1869,1870,5,335,0,0,1870,
        1878,3,228,114,3,1871,1872,10,1,0,0,1872,1874,5,297,0,0,1873,1875,
        5,326,0,0,1874,1873,1,0,0,0,1874,1875,1,0,0,0,1875,1876,1,0,0,0,
        1876,1878,7,21,0,0,1877,1865,1,0,0,0,1877,1868,1,0,0,0,1877,1871,
        1,0,0,0,1878,1881,1,0,0,0,1879,1877,1,0,0,0,1879,1880,1,0,0,0,1880,
        229,1,0,0,0,1881,1879,1,0,0,0,1882,1884,5,326,0,0,1883,1882,1,0,
        0,0,1883,1884,1,0,0,0,1884,1885,1,0,0,0,1885,1887,5,205,0,0,1886,
        1888,7,22,0,0,1887,1886,1,0,0,0,1887,1888,1,0,0,0,1888,1889,1,0,
        0,0,1889,1890,3,234,117,0,1890,1891,5,196,0,0,1891,1892,3,234,117,
        0,1892,1950,1,0,0,0,1893,1895,5,326,0,0,1894,1893,1,0,0,0,1894,1895,
        1,0,0,0,1895,1896,1,0,0,0,1896,1897,5,287,0,0,1897,1898,5,436,0,
        0,1898,1903,3,226,113,0,1899,1900,5,440,0,0,1900,1902,3,226,113,
        0,1901,1899,1,0,0,0,1902,1905,1,0,0,0,1903,1901,1,0,0,0,1903,1904,
        1,0,0,0,1904,1906,1,0,0,0,1905,1903,1,0,0,0,1906,1907,5,437,0,0,
        1907,1950,1,0,0,0,1908,1910,5,326,0,0,1909,1908,1,0,0,0,1909,1910,
        1,0,0,0,1910,1911,1,0,0,0,1911,1912,5,287,0,0,1912,1913,5,436,0,
        0,1913,1914,3,62,31,0,1914,1915,5,437,0,0,1915,1950,1,0,0,0,1916,
        1917,5,266,0,0,1917,1918,5,436,0,0,1918,1919,3,62,31,0,1919,1920,
        5,437,0,0,1920,1950,1,0,0,0,1921,1923,5,326,0,0,1922,1921,1,0,0,
        0,1922,1923,1,0,0,0,1923,1924,1,0,0,0,1924,1925,5,356,0,0,1925,1950,
        3,234,117,0,1926,1950,3,232,116,0,1927,1929,5,297,0,0,1928,1930,
        5,326,0,0,1929,1928,1,0,0,0,1929,1930,1,0,0,0,1930,1931,1,0,0,0,
        1931,1950,7,21,0,0,1932,1934,5,297,0,0,1933,1935,5,326,0,0,1934,
        1933,1,0,0,0,1934,1935,1,0,0,0,1935,1936,1,0,0,0,1936,1937,5,254,
        0,0,1937,1938,5,275,0,0,1938,1950,3,234,117,0,1939,1941,5,326,0,
        0,1940,1939,1,0,0,0,1940,1941,1,0,0,0,1941,1942,1,0,0,0,1942,1943,
        5,366,0,0,1943,1944,5,388,0,0,1944,1947,3,234,117,0,1945,1946,5,
        263,0,0,1946,1948,3,328,164,0,1947,1945,1,0,0,0,1947,1948,1,0,0,
        0,1948,1950,1,0,0,0,1949,1883,1,0,0,0,1949,1894,1,0,0,0,1949,1909,
        1,0,0,0,1949,1916,1,0,0,0,1949,1922,1,0,0,0,1949,1926,1,0,0,0,1949,
        1927,1,0,0,0,1949,1932,1,0,0,0,1949,1940,1,0,0,0,1950,231,1,0,0,
        0,1951,1953,5,326,0,0,1952,1951,1,0,0,0,1952,1953,1,0,0,0,1953,1954,
        1,0,0,0,1954,1955,5,306,0,0,1955,1969,7,23,0,0,1956,1957,5,436,0,
        0,1957,1970,5,437,0,0,1958,1959,5,436,0,0,1959,1964,3,226,113,0,
        1960,1961,5,440,0,0,1961,1963,3,226,113,0,1962,1960,1,0,0,0,1963,
        1966,1,0,0,0,1964,1962,1,0,0,0,1964,1965,1,0,0,0,1965,1967,1,0,0,
        0,1966,1964,1,0,0,0,1967,1968,5,437,0,0,1968,1970,1,0,0,0,1969,1956,
        1,0,0,0,1969,1958,1,0,0,0,1970,1981,1,0,0,0,1971,1973,5,326,0,0,
        1972,1971,1,0,0,0,1972,1973,1,0,0,0,1973,1974,1,0,0,0,1974,1975,
        5,306,0,0,1975,1978,3,234,117,0,1976,1977,5,263,0,0,1977,1979,3,
        328,164,0,1978,1976,1,0,0,0,1978,1979,1,0,0,0,1979,1981,1,0,0,0,
        1980,1952,1,0,0,0,1980,1972,1,0,0,0,1981,233,1,0,0,0,1982,1983,6,
        117,-1,0,1983,1987,3,236,118,0,1984,1985,7,24,0,0,1985,1987,3,234,
        117,7,1986,1982,1,0,0,0,1986,1984,1,0,0,0,1987,2009,1,0,0,0,1988,
        1989,10,6,0,0,1989,1990,7,25,0,0,1990,2008,3,234,117,7,1991,1992,
        10,5,0,0,1992,1993,7,26,0,0,1993,2008,3,234,117,6,1994,1995,10,4,
        0,0,1995,1996,5,427,0,0,1996,2008,3,234,117,5,1997,1998,10,3,0,0,
        1998,1999,5,428,0,0,1999,2008,3,234,117,4,2000,2001,10,2,0,0,2001,
        2002,5,426,0,0,2002,2008,3,234,117,3,2003,2004,10,1,0,0,2004,2005,
        3,322,161,0,2005,2006,3,234,117,2,2006,2008,1,0,0,0,2007,1988,1,
        0,0,0,2007,1991,1,0,0,0,2007,1994,1,0,0,0,2007,1997,1,0,0,0,2007,
        2000,1,0,0,0,2007,2003,1,0,0,0,2008,2011,1,0,0,0,2009,2007,1,0,0,
        0,2009,2010,1,0,0,0,2010,235,1,0,0,0,2011,2009,1,0,0,0,2012,2013,
        6,118,-1,0,2013,2015,5,216,0,0,2014,2016,3,292,146,0,2015,2014,1,
        0,0,0,2016,2017,1,0,0,0,2017,2015,1,0,0,0,2017,2018,1,0,0,0,2018,
        2021,1,0,0,0,2019,2020,5,260,0,0,2020,2022,3,226,113,0,2021,2019,
        1,0,0,0,2021,2022,1,0,0,0,2022,2023,1,0,0,0,2023,2024,5,261,0,0,
        2024,2124,1,0,0,0,2025,2026,5,216,0,0,2026,2028,3,226,113,0,2027,
        2029,3,292,146,0,2028,2027,1,0,0,0,2029,2030,1,0,0,0,2030,2028,1,
        0,0,0,2030,2031,1,0,0,0,2031,2034,1,0,0,0,2032,2033,5,260,0,0,2033,
        2035,3,226,113,0,2034,2032,1,0,0,0,2034,2035,1,0,0,0,2035,2036,1,
        0,0,0,2036,2037,5,261,0,0,2037,2124,1,0,0,0,2038,2039,5,217,0,0,
        2039,2040,5,436,0,0,2040,2041,3,226,113,0,2041,2042,5,200,0,0,2042,
        2043,3,224,112,0,2043,2044,5,437,0,0,2044,2124,1,0,0,0,2045,2046,
        5,47,0,0,2046,2047,5,436,0,0,2047,2050,3,226,113,0,2048,2049,5,63,
        0,0,2049,2051,5,92,0,0,2050,2048,1,0,0,0,2050,2051,1,0,0,0,2051,
        2052,1,0,0,0,2052,2053,5,437,0,0,2053,2124,1,0,0,0,2054,2055,5,78,
        0,0,2055,2056,5,436,0,0,2056,2059,3,226,113,0,2057,2058,5,63,0,0,
        2058,2060,5,92,0,0,2059,2057,1,0,0,0,2059,2060,1,0,0,0,2060,2061,
        1,0,0,0,2061,2062,5,437,0,0,2062,2124,1,0,0,0,2063,2064,5,347,0,
        0,2064,2065,5,436,0,0,2065,2066,3,234,117,0,2066,2067,5,287,0,0,
        2067,2068,3,234,117,0,2068,2069,5,437,0,0,2069,2124,1,0,0,0,2070,
        2124,3,324,162,0,2071,2124,5,448,0,0,2072,2073,3,304,152,0,2073,
        2074,5,433,0,0,2074,2075,5,448,0,0,2075,2124,1,0,0,0,2076,2077,5,
        436,0,0,2077,2078,3,62,31,0,2078,2079,5,437,0,0,2079,2124,1,0,0,
        0,2080,2081,3,248,124,0,2081,2093,5,436,0,0,2082,2084,3,334,167,
        0,2083,2082,1,0,0,0,2083,2084,1,0,0,0,2084,2085,1,0,0,0,2085,2090,
        3,250,125,0,2086,2087,5,440,0,0,2087,2089,3,250,125,0,2088,2086,
        1,0,0,0,2089,2092,1,0,0,0,2090,2088,1,0,0,0,2090,2091,1,0,0,0,2091,
        2094,1,0,0,0,2092,2090,1,0,0,0,2093,2083,1,0,0,0,2093,2094,1,0,0,
        0,2094,2095,1,0,0,0,2095,2096,5,437,0,0,2096,2124,1,0,0,0,2097,2098,
        3,248,124,0,2098,2099,5,436,0,0,2099,2100,3,250,125,0,2100,2101,
        5,388,0,0,2101,2102,3,250,125,0,2102,2103,5,437,0,0,2103,2124,1,
        0,0,0,2104,2105,3,248,124,0,2105,2107,5,436,0,0,2106,2108,3,334,
        167,0,2107,2106,1,0,0,0,2107,2108,1,0,0,0,2108,2109,1,0,0,0,2109,
        2110,3,250,125,0,2110,2112,5,437,0,0,2111,2113,3,252,126,0,2112,
        2111,1,0,0,0,2112,2113,1,0,0,0,2113,2124,1,0,0,0,2114,2124,3,284,
        142,0,2115,2124,3,254,127,0,2116,2117,5,436,0,0,2117,2118,3,226,
        113,0,2118,2119,5,437,0,0,2119,2124,1,0,0,0,2120,2121,5,436,0,0,
        2121,2124,5,437,0,0,2122,2124,3,238,119,0,2123,2012,1,0,0,0,2123,
        2025,1,0,0,0,2123,2038,1,0,0,0,2123,2045,1,0,0,0,2123,2054,1,0,0,
        0,2123,2063,1,0,0,0,2123,2070,1,0,0,0,2123,2071,1,0,0,0,2123,2072,
        1,0,0,0,2123,2076,1,0,0,0,2123,2080,1,0,0,0,2123,2097,1,0,0,0,2123,
        2104,1,0,0,0,2123,2114,1,0,0,0,2123,2115,1,0,0,0,2123,2116,1,0,0,
        0,2123,2120,1,0,0,0,2123,2122,1,0,0,0,2124,2132,1,0,0,0,2125,2126,
        10,6,0,0,2126,2127,5,434,0,0,2127,2128,3,234,117,0,2128,2129,5,435,
        0,0,2129,2131,1,0,0,0,2130,2125,1,0,0,0,2131,2134,1,0,0,0,2132,2130,
        1,0,0,0,2132,2133,1,0,0,0,2133,237,1,0,0,0,2134,2132,1,0,0,0,2135,
        2139,3,240,120,0,2136,2139,3,242,121,0,2137,2139,3,244,122,0,2138,
        2135,1,0,0,0,2138,2136,1,0,0,0,2138,2137,1,0,0,0,2139,239,1,0,0,
        0,2140,2141,5,199,0,0,2141,2142,5,434,0,0,2142,2147,3,246,123,0,
        2143,2144,5,440,0,0,2144,2146,3,246,123,0,2145,2143,1,0,0,0,2146,
        2149,1,0,0,0,2147,2145,1,0,0,0,2147,2148,1,0,0,0,2148,2150,1,0,0,
        0,2149,2147,1,0,0,0,2150,2151,5,435,0,0,2151,241,1,0,0,0,2152,2153,
        5,359,0,0,2153,2154,5,436,0,0,2154,2159,3,246,123,0,2155,2156,5,
        440,0,0,2156,2158,3,246,123,0,2157,2155,1,0,0,0,2158,2161,1,0,0,
        0,2159,2157,1,0,0,0,2159,2160,1,0,0,0,2160,2162,1,0,0,0,2161,2159,
        1,0,0,0,2162,2163,5,437,0,0,2163,243,1,0,0,0,2164,2165,5,82,0,0,
        2165,2166,5,434,0,0,2166,2167,3,246,123,0,2167,2168,5,440,0,0,2168,
        2169,3,246,123,0,2169,2170,5,435,0,0,2170,245,1,0,0,0,2171,2174,
        3,272,136,0,2172,2174,3,238,119,0,2173,2171,1,0,0,0,2173,2172,1,
        0,0,0,2174,247,1,0,0,0,2175,2179,3,342,171,0,2176,2179,3,344,172,
        0,2177,2179,3,304,152,0,2178,2175,1,0,0,0,2178,2176,1,0,0,0,2178,
        2177,1,0,0,0,2179,249,1,0,0,0,2180,2186,3,340,170,0,2181,2186,3,
        338,169,0,2182,2186,3,336,168,0,2183,2186,3,226,113,0,2184,2186,
        3,252,126,0,2185,2180,1,0,0,0,2185,2181,1,0,0,0,2185,2182,1,0,0,
        0,2185,2183,1,0,0,0,2185,2184,1,0,0,0,2186,251,1,0,0,0,2187,2188,
        5,44,0,0,2188,2189,5,436,0,0,2189,2190,5,406,0,0,2190,2191,3,228,
        114,0,2191,2192,5,437,0,0,2192,253,1,0,0,0,2193,2194,3,304,152,0,
        2194,255,1,0,0,0,2195,2196,3,284,142,0,2196,257,1,0,0,0,2197,2200,
        3,284,142,0,2198,2200,3,254,127,0,2199,2197,1,0,0,0,2199,2198,1,
        0,0,0,2200,259,1,0,0,0,2201,2204,5,295,0,0,2202,2205,3,262,131,0,
        2203,2205,3,266,133,0,2204,2202,1,0,0,0,2204,2203,1,0,0,0,2204,2205,
        1,0,0,0,2205,261,1,0,0,0,2206,2208,3,264,132,0,2207,2209,3,268,134,
        0,2208,2207,1,0,0,0,2208,2209,1,0,0,0,2209,263,1,0,0,0,2210,2211,
        3,270,135,0,2211,2212,3,338,169,0,2212,2214,1,0,0,0,2213,2210,1,
        0,0,0,2214,2215,1,0,0,0,2215,2213,1,0,0,0,2215,2216,1,0,0,0,2216,
        265,1,0,0,0,2217,2220,3,268,134,0,2218,2221,3,264,132,0,2219,2221,
        3,268,134,0,2220,2218,1,0,0,0,2220,2219,1,0,0,0,2220,2221,1,0,0,
        0,2221,267,1,0,0,0,2222,2223,3,270,135,0,2223,2224,3,338,169,0,2224,
        2225,5,388,0,0,2225,2226,3,338,169,0,2226,269,1,0,0,0,2227,2229,
        7,27,0,0,2228,2227,1,0,0,0,2228,2229,1,0,0,0,2229,2230,1,0,0,0,2230,
        2233,7,28,0,0,2231,2233,5,458,0,0,2232,2228,1,0,0,0,2232,2231,1,
        0,0,0,2233,271,1,0,0,0,2234,2236,5,200,0,0,2235,2234,1,0,0,0,2235,
        2236,1,0,0,0,2236,2237,1,0,0,0,2237,2239,3,284,142,0,2238,2240,3,
        280,140,0,2239,2238,1,0,0,0,2239,2240,1,0,0,0,2240,273,1,0,0,0,2241,
        2243,5,200,0,0,2242,2241,1,0,0,0,2242,2243,1,0,0,0,2243,2244,1,0,
        0,0,2244,2246,3,284,142,0,2245,2247,3,280,140,0,2246,2245,1,0,0,
        0,2246,2247,1,0,0,0,2247,275,1,0,0,0,2248,2249,3,284,142,0,2249,
        2250,3,278,139,0,2250,277,1,0,0,0,2251,2252,5,316,0,0,2252,2254,
        3,284,142,0,2253,2251,1,0,0,0,2254,2255,1,0,0,0,2255,2253,1,0,0,
        0,2255,2256,1,0,0,0,2256,2259,1,0,0,0,2257,2259,1,0,0,0,2258,2253,
        1,0,0,0,2258,2257,1,0,0,0,2259,279,1,0,0,0,2260,2261,5,436,0,0,2261,
        2262,3,282,141,0,2262,2263,5,437,0,0,2263,281,1,0,0,0,2264,2269,
        3,284,142,0,2265,2266,5,440,0,0,2266,2268,3,284,142,0,2267,2265,
        1,0,0,0,2268,2271,1,0,0,0,2269,2267,1,0,0,0,2269,2270,1,0,0,0,2270,
        283,1,0,0,0,2271,2269,1,0,0,0,2272,2277,3,288,144,0,2273,2277,3,
        290,145,0,2274,2277,3,344,172,0,2275,2277,3,286,143,0,2276,2272,
        1,0,0,0,2276,2273,1,0,0,0,2276,2274,1,0,0,0,2276,2275,1,0,0,0,2277,
        285,1,0,0,0,2278,2279,5,443,0,0,2279,2280,5,438,0,0,2280,2281,3,
        288,144,0,2281,2282,5,439,0,0,2282,287,1,0,0,0,2283,2284,7,29,0,
        0,2284,289,1,0,0,0,2285,2286,5,458,0,0,2286,291,1,0,0,0,2287,2288,
        5,405,0,0,2288,2289,3,226,113,0,2289,2290,5,381,0,0,2290,2291,3,
        226,113,0,2291,293,1,0,0,0,2292,2293,3,304,152,0,2293,295,1,0,0,
        0,2294,2295,3,304,152,0,2295,297,1,0,0,0,2296,2297,3,304,152,0,2297,
        299,1,0,0,0,2298,2299,3,304,152,0,2299,301,1,0,0,0,2300,2301,3,304,
        152,0,2301,303,1,0,0,0,2302,2307,3,284,142,0,2303,2304,5,433,0,0,
        2304,2306,3,284,142,0,2305,2303,1,0,0,0,2306,2309,1,0,0,0,2307,2305,
        1,0,0,0,2307,2308,1,0,0,0,2308,305,1,0,0,0,2309,2307,1,0,0,0,2310,
        2311,5,408,0,0,2311,2312,3,314,157,0,2312,307,1,0,0,0,2313,2314,
        5,62,0,0,2314,2315,5,326,0,0,2315,2316,5,266,0,0,2316,309,1,0,0,
        0,2317,2318,5,62,0,0,2318,2319,5,266,0,0,2319,311,1,0,0,0,2320,2323,
        5,436,0,0,2321,2324,3,316,158,0,2322,2324,3,318,159,0,2323,2321,
        1,0,0,0,2323,2322,1,0,0,0,2324,2332,1,0,0,0,2325,2328,5,440,0,0,
        2326,2329,3,316,158,0,2327,2329,3,318,159,0,2328,2326,1,0,0,0,2328,
        2327,1,0,0,0,2329,2331,1,0,0,0,2330,2325,1,0,0,0,2331,2334,1,0,0,
        0,2332,2330,1,0,0,0,2332,2333,1,0,0,0,2333,2335,1,0,0,0,2334,2332,
        1,0,0,0,2335,2336,5,437,0,0,2336,313,1,0,0,0,2337,2338,5,436,0,0,
        2338,2343,3,316,158,0,2339,2340,5,440,0,0,2340,2342,3,316,158,0,
        2341,2339,1,0,0,0,2342,2345,1,0,0,0,2343,2341,1,0,0,0,2343,2344,
        1,0,0,0,2344,2346,1,0,0,0,2345,2343,1,0,0,0,2346,2347,5,437,0,0,
        2347,315,1,0,0,0,2348,2349,3,318,159,0,2349,2350,5,429,0,0,2350,
        2351,3,320,160,0,2351,317,1,0,0,0,2352,2363,3,284,142,0,2353,2358,
        3,254,127,0,2354,2355,5,450,0,0,2355,2357,3,254,127,0,2356,2354,
        1,0,0,0,2357,2360,1,0,0,0,2358,2356,1,0,0,0,2358,2359,1,0,0,0,2359,
        2363,1,0,0,0,2360,2358,1,0,0,0,2361,2363,5,458,0,0,2362,2352,1,0,
        0,0,2362,2353,1,0,0,0,2362,2361,1,0,0,0,2363,319,1,0,0,0,2364,2370,
        5,459,0,0,2365,2370,5,460,0,0,2366,2370,3,332,166,0,2367,2370,5,
        458,0,0,2368,2370,3,288,144,0,2369,2364,1,0,0,0,2369,2365,1,0,0,
        0,2369,2366,1,0,0,0,2369,2367,1,0,0,0,2369,2368,1,0,0,0,2370,321,
        1,0,0,0,2371,2386,5,429,0,0,2372,2386,5,430,0,0,2373,2386,5,431,
        0,0,2374,2375,5,431,0,0,2375,2386,5,429,0,0,2376,2377,5,430,0,0,
        2377,2386,5,429,0,0,2378,2379,5,431,0,0,2379,2386,5,430,0,0,2380,
        2381,5,432,0,0,2381,2386,5,429,0,0,2382,2383,5,431,0,0,2383,2384,
        5,429,0,0,2384,2386,5,430,0,0,2385,2371,1,0,0,0,2385,2372,1,0,0,
        0,2385,2373,1,0,0,0,2385,2374,1,0,0,0,2385,2376,1,0,0,0,2385,2378,
        1,0,0,0,2385,2380,1,0,0,0,2385,2382,1,0,0,0,2386,323,1,0,0,0,2387,
        2401,3,260,130,0,2388,2401,3,326,163,0,2389,2401,3,328,164,0,2390,
        2392,5,450,0,0,2391,2390,1,0,0,0,2391,2392,1,0,0,0,2392,2393,1,0,
        0,0,2393,2401,3,330,165,0,2394,2401,3,332,166,0,2395,2401,5,460,
        0,0,2396,2398,5,326,0,0,2397,2396,1,0,0,0,2397,2398,1,0,0,0,2398,
        2399,1,0,0,0,2399,2401,5,329,0,0,2400,2387,1,0,0,0,2400,2388,1,0,
        0,0,2400,2389,1,0,0,0,2400,2391,1,0,0,0,2400,2394,1,0,0,0,2400,2395,
        1,0,0,0,2400,2397,1,0,0,0,2401,325,1,0,0,0,2402,2403,3,336,168,0,
        2403,2404,3,328,164,0,2404,327,1,0,0,0,2405,2406,5,458,0,0,2406,
        329,1,0,0,0,2407,2408,5,459,0,0,2408,331,1,0,0,0,2409,2410,7,30,
        0,0,2410,333,1,0,0,0,2411,2412,7,31,0,0,2412,335,1,0,0,0,2413,2414,
        7,32,0,0,2414,337,1,0,0,0,2415,2416,7,33,0,0,2416,339,1,0,0,0,2417,
        2418,7,34,0,0,2418,341,1,0,0,0,2419,2420,7,35,0,0,2420,343,1,0,0,
        0,2421,2422,7,36,0,0,2422,345,1,0,0,0,2423,2432,3,360,180,0,2424,
        2429,3,226,113,0,2425,2427,5,200,0,0,2426,2425,1,0,0,0,2426,2427,
        1,0,0,0,2427,2428,1,0,0,0,2428,2430,3,226,113,0,2429,2426,1,0,0,
        0,2429,2430,1,0,0,0,2430,2432,1,0,0,0,2431,2423,1,0,0,0,2431,2424,
        1,0,0,0,2432,347,1,0,0,0,2433,2434,3,350,175,0,2434,2436,3,72,36,
        0,2435,2437,3,108,54,0,2436,2435,1,0,0,0,2436,2437,1,0,0,0,2437,
        2439,1,0,0,0,2438,2440,3,70,35,0,2439,2438,1,0,0,0,2439,2440,1,0,
        0,0,2440,2442,1,0,0,0,2441,2443,3,124,62,0,2442,2441,1,0,0,0,2442,
        2443,1,0,0,0,2443,2445,1,0,0,0,2444,2446,3,126,63,0,2445,2444,1,
        0,0,0,2445,2446,1,0,0,0,2446,2452,1,0,0,0,2447,2448,3,350,175,0,
        2448,2449,3,72,36,0,2449,2450,3,132,66,0,2450,2452,1,0,0,0,2451,
        2433,1,0,0,0,2451,2447,1,0,0,0,2452,349,1,0,0,0,2453,2463,5,363,
        0,0,2454,2464,5,448,0,0,2455,2460,3,346,173,0,2456,2457,5,440,0,
        0,2457,2459,3,346,173,0,2458,2456,1,0,0,0,2459,2462,1,0,0,0,2460,
        2458,1,0,0,0,2460,2461,1,0,0,0,2461,2464,1,0,0,0,2462,2460,1,0,0,
        0,2463,2454,1,0,0,0,2463,2455,1,0,0,0,2464,351,1,0,0,0,2465,2467,
        5,265,0,0,2466,2465,1,0,0,0,2466,2467,1,0,0,0,2467,2468,1,0,0,0,
        2468,2469,3,58,29,0,2469,353,1,0,0,0,2470,2471,3,76,38,0,2471,355,
        1,0,0,0,2472,2473,6,178,-1,0,2473,2478,3,74,37,0,2474,2475,5,440,
        0,0,2475,2477,3,74,37,0,2476,2474,1,0,0,0,2477,2480,1,0,0,0,2478,
        2476,1,0,0,0,2478,2479,1,0,0,0,2479,2484,1,0,0,0,2480,2478,1,0,0,
        0,2481,2484,3,84,42,0,2482,2484,3,86,43,0,2483,2472,1,0,0,0,2483,
        2481,1,0,0,0,2483,2482,1,0,0,0,2484,2516,1,0,0,0,2485,2486,10,3,
        0,0,2486,2487,5,236,0,0,2487,2488,5,298,0,0,2488,2515,3,356,178,
        4,2489,2491,10,4,0,0,2490,2492,5,322,0,0,2491,2490,1,0,0,0,2491,
        2492,1,0,0,0,2492,2494,1,0,0,0,2493,2495,3,354,177,0,2494,2493,1,
        0,0,0,2494,2495,1,0,0,0,2495,2497,1,0,0,0,2496,2498,5,338,0,0,2497,
        2496,1,0,0,0,2497,2498,1,0,0,0,2498,2500,1,0,0,0,2499,2501,5,143,
        0,0,2500,2499,1,0,0,0,2500,2501,1,0,0,0,2501,2502,1,0,0,0,2502,2503,
        5,298,0,0,2503,2505,3,356,178,0,2504,2506,3,106,53,0,2505,2504,1,
        0,0,0,2505,2506,1,0,0,0,2506,2511,1,0,0,0,2507,2508,5,440,0,0,2508,
        2510,3,74,37,0,2509,2507,1,0,0,0,2510,2513,1,0,0,0,2511,2509,1,0,
        0,0,2511,2512,1,0,0,0,2512,2515,1,0,0,0,2513,2511,1,0,0,0,2514,2485,
        1,0,0,0,2514,2489,1,0,0,0,2515,2518,1,0,0,0,2516,2514,1,0,0,0,2516,
        2517,1,0,0,0,2517,357,1,0,0,0,2518,2516,1,0,0,0,2519,2523,3,14,7,
        0,2520,2523,3,16,8,0,2521,2523,3,18,9,0,2522,2519,1,0,0,0,2522,2520,
        1,0,0,0,2522,2521,1,0,0,0,2523,359,1,0,0,0,2524,2525,3,236,118,0,
        2525,2526,5,339,0,0,2526,2528,3,130,65,0,2527,2529,5,200,0,0,2528,
        2527,1,0,0,0,2528,2529,1,0,0,0,2529,2530,1,0,0,0,2530,2531,3,284,
        142,0,2531,2541,1,0,0,0,2532,2533,3,236,118,0,2533,2534,5,339,0,
        0,2534,2536,3,276,138,0,2535,2537,5,200,0,0,2536,2535,1,0,0,0,2536,
        2537,1,0,0,0,2537,2538,1,0,0,0,2538,2539,3,284,142,0,2539,2541,1,
        0,0,0,2540,2524,1,0,0,0,2540,2532,1,0,0,0,2541,361,1,0,0,0,316,367,
        369,378,388,392,396,405,410,414,418,422,425,428,431,434,438,442,
        451,454,458,462,466,470,473,476,480,485,491,501,509,517,522,529,
        534,538,543,547,551,555,558,561,566,572,575,580,591,597,606,616,
        624,634,645,651,660,669,680,689,698,707,713,718,722,737,756,773,
        784,788,795,800,806,810,817,821,825,829,837,841,849,851,855,858,
        862,875,878,881,883,888,892,895,899,908,918,923,939,943,950,955,
        959,963,975,982,998,1011,1021,1031,1049,1057,1063,1070,1079,1082,
        1092,1098,1105,1108,1113,1122,1125,1135,1141,1148,1151,1156,1168,
        1178,1181,1186,1189,1194,1197,1218,1236,1241,1256,1268,1273,1282,
        1312,1320,1324,1327,1330,1337,1340,1343,1346,1349,1352,1357,1360,
        1369,1374,1378,1383,1392,1411,1419,1427,1431,1435,1445,1471,1479,
        1491,1518,1531,1536,1540,1548,1552,1557,1563,1569,1574,1580,1586,
        1592,1597,1602,1605,1619,1624,1626,1630,1646,1655,1668,1676,1686,
        1707,1714,1720,1723,1726,1736,1739,1747,1751,1759,1769,1772,1777,
        1781,1785,1789,1793,1797,1801,1805,1809,1813,1817,1821,1825,1829,
        1833,1837,1841,1845,1847,1861,1863,1874,1877,1879,1883,1887,1894,
        1903,1909,1922,1929,1934,1940,1947,1949,1952,1964,1969,1972,1978,
        1980,1986,2007,2009,2017,2021,2030,2034,2050,2059,2083,2090,2093,
        2107,2112,2123,2132,2138,2147,2159,2173,2178,2185,2199,2204,2208,
        2215,2220,2228,2232,2235,2239,2242,2246,2255,2258,2269,2276,2307,
        2323,2328,2332,2343,2358,2362,2369,2385,2391,2397,2400,2426,2429,
        2431,2436,2439,2442,2445,2451,2460,2463,2466,2478,2483,2491,2494,
        2497,2500,2505,2511,2514,2516,2522,2528,2536,2540
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!FlinkSQLParser.__ATN) {
            FlinkSQLParser.__ATN = new antlr.ATNDeserializer().deserialize(FlinkSQLParser._serializedATN);
        }

        return FlinkSQLParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(FlinkSQLParser.literalNames, FlinkSQLParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return FlinkSQLParser.vocabulary;
    }

    private static readonly decisionsToDFA = FlinkSQLParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public sqlStatements(): SqlStatementsContext {
        return this.getRuleContext(0, SqlStatementsContext)!;
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.EOF, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_statement;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterStatement) {
             listener.enterStatement(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitStatement) {
             listener.exitStatement(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SqlStatementsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public sqlStatement(): SqlStatementContext[];
    public sqlStatement(i: number): SqlStatementContext | null;
    public sqlStatement(i?: number): SqlStatementContext[] | SqlStatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SqlStatementContext);
        }

        return this.getRuleContext(i, SqlStatementContext);
    }
    public emptyStatement(): EmptyStatementContext[];
    public emptyStatement(i: number): EmptyStatementContext | null;
    public emptyStatement(i?: number): EmptyStatementContext[] | EmptyStatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EmptyStatementContext);
        }

        return this.getRuleContext(i, EmptyStatementContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_sqlStatements;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterSqlStatements) {
             listener.enterSqlStatements(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitSqlStatements) {
             listener.exitSqlStatements(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitSqlStatements) {
            return visitor.visitSqlStatements(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SqlStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_sqlStatement;
    }
    public override copyFrom(ctx: SqlStatementContext): void {
        super.copyFrom(ctx);
    }
}
export class DmlPartContext extends SqlStatementContext {
    public constructor(ctx: SqlStatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public dmlStatement(): DmlStatementContext {
        return this.getRuleContext(0, DmlStatementContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.SEMICOLON, 0)!;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterDmlPart) {
             listener.enterDmlPart(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitDmlPart) {
             listener.exitDmlPart(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitDmlPart) {
            return visitor.visitDmlPart(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DdlPartContext extends SqlStatementContext {
    public constructor(ctx: SqlStatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ddlStatement(): DdlStatementContext {
        return this.getRuleContext(0, DdlStatementContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.SEMICOLON, 0)!;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterDdlPart) {
             listener.enterDdlPart(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitDdlPart) {
             listener.exitDdlPart(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitDdlPart) {
            return visitor.visitDdlPart(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EmptyStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.SEMICOLON, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_emptyStatement;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterEmptyStatement) {
             listener.enterEmptyStatement(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitEmptyStatement) {
             listener.exitEmptyStatement(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitEmptyStatement) {
            return visitor.visitEmptyStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DdlStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public createStatement(): CreateStatementContext {
        return this.getRuleContext(0, CreateStatementContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_ddlStatement;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterDdlStatement) {
             listener.enterDdlStatement(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitDdlStatement) {
             listener.exitDdlStatement(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitDdlStatement) {
            return visitor.visitDdlStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreateStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public createTable(): CreateTableContext {
        return this.getRuleContext(0, CreateTableContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_createStatement;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterCreateStatement) {
             listener.enterCreateStatement(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitCreateStatement) {
             listener.exitCreateStatement(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitCreateStatement) {
            return visitor.visitCreateStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DmlStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public queryStatement(): QueryStatementContext | null {
        return this.getRuleContext(0, QueryStatementContext);
    }
    public insertStatement(): InsertStatementContext | null {
        return this.getRuleContext(0, InsertStatementContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_dmlStatement;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterDmlStatement) {
             listener.enterDmlStatement(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitDmlStatement) {
             listener.exitDmlStatement(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitDmlStatement) {
            return visitor.visitDmlStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SimpleCreateTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_CREATE, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_TABLE, 0)!;
    }
    public tablePathCreate(): TablePathCreateContext {
        return this.getRuleContext(0, TablePathCreateContext)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public columnOptionDefinition(): ColumnOptionDefinitionContext[];
    public columnOptionDefinition(i: number): ColumnOptionDefinitionContext | null;
    public columnOptionDefinition(i?: number): ColumnOptionDefinitionContext[] | ColumnOptionDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnOptionDefinitionContext);
        }

        return this.getRuleContext(i, ColumnOptionDefinitionContext);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public KW_TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TEMPORARY, 0);
    }
    public ifNotExists(): IfNotExistsContext | null {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public watermarkDefinition(): WatermarkDefinitionContext | null {
        return this.getRuleContext(0, WatermarkDefinitionContext);
    }
    public tableConstraint(): TableConstraintContext | null {
        return this.getRuleContext(0, TableConstraintContext);
    }
    public selfDefinitionClause(): SelfDefinitionClauseContext | null {
        return this.getRuleContext(0, SelfDefinitionClauseContext);
    }
    public commentSpec(): CommentSpecContext | null {
        return this.getRuleContext(0, CommentSpecContext);
    }
    public partitionDefinition(): PartitionDefinitionContext | null {
        return this.getRuleContext(0, PartitionDefinitionContext);
    }
    public withOption(): WithOptionContext | null {
        return this.getRuleContext(0, WithOptionContext);
    }
    public likeDefinition(): LikeDefinitionContext | null {
        return this.getRuleContext(0, LikeDefinitionContext);
    }
    public distributed(): DistributedContext | null {
        return this.getRuleContext(0, DistributedContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_simpleCreateTable;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterSimpleCreateTable) {
             listener.enterSimpleCreateTable(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitSimpleCreateTable) {
             listener.exitSimpleCreateTable(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitSimpleCreateTable) {
            return visitor.visitSimpleCreateTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LikeCreateTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_CREATE, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_TABLE, 0)!;
    }
    public tablePathCreate(): TablePathCreateContext {
        return this.getRuleContext(0, TablePathCreateContext)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public likeDefinition(): LikeDefinitionContext {
        return this.getRuleContext(0, LikeDefinitionContext)!;
    }
    public KW_TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TEMPORARY, 0);
    }
    public ifNotExists(): IfNotExistsContext | null {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    public columnOptionDefinition(): ColumnOptionDefinitionContext[];
    public columnOptionDefinition(i: number): ColumnOptionDefinitionContext | null;
    public columnOptionDefinition(i?: number): ColumnOptionDefinitionContext[] | ColumnOptionDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnOptionDefinitionContext);
        }

        return this.getRuleContext(i, ColumnOptionDefinitionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public watermarkDefinition(): WatermarkDefinitionContext | null {
        return this.getRuleContext(0, WatermarkDefinitionContext);
    }
    public tableConstraint(): TableConstraintContext | null {
        return this.getRuleContext(0, TableConstraintContext);
    }
    public selfDefinitionClause(): SelfDefinitionClauseContext | null {
        return this.getRuleContext(0, SelfDefinitionClauseContext);
    }
    public commentSpec(): CommentSpecContext | null {
        return this.getRuleContext(0, CommentSpecContext);
    }
    public partitionDefinition(): PartitionDefinitionContext | null {
        return this.getRuleContext(0, PartitionDefinitionContext);
    }
    public withOption(): WithOptionContext | null {
        return this.getRuleContext(0, WithOptionContext);
    }
    public distributed(): DistributedContext | null {
        return this.getRuleContext(0, DistributedContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_likeCreateTable;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterLikeCreateTable) {
             listener.enterLikeCreateTable(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitLikeCreateTable) {
             listener.exitLikeCreateTable(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitLikeCreateTable) {
            return visitor.visitLikeCreateTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreateTableAsSelectContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_CREATE, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_TABLE, 0)!;
    }
    public tablePathCreate(): TablePathCreateContext {
        return this.getRuleContext(0, TablePathCreateContext)!;
    }
    public withOption(): WithOptionContext {
        return this.getRuleContext(0, WithOptionContext)!;
    }
    public ifNotExists(): IfNotExistsContext | null {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_AS, 0);
    }
    public queryStatement(): QueryStatementContext | null {
        return this.getRuleContext(0, QueryStatementContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_createTableAsSelect;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterCreateTableAsSelect) {
             listener.enterCreateTableAsSelect(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitCreateTableAsSelect) {
             listener.exitCreateTableAsSelect(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitCreateTableAsSelect) {
            return visitor.visitCreateTableAsSelect(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UsingClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_USING(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_USING, 0)!;
    }
    public KW_JAR(): antlr.TerminalNode[];
    public KW_JAR(i: number): antlr.TerminalNode | null;
    public KW_JAR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.KW_JAR);
    	} else {
    		return this.getToken(FlinkSQLParser.KW_JAR, i);
    	}
    }
    public jarFileName(): JarFileNameContext[];
    public jarFileName(i: number): JarFileNameContext | null;
    public jarFileName(i?: number): JarFileNameContext[] | JarFileNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(JarFileNameContext);
        }

        return this.getRuleContext(i, JarFileNameContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_usingClause;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterUsingClause) {
             listener.enterUsingClause(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitUsingClause) {
             listener.exitUsingClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitUsingClause) {
            return visitor.visitUsingClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class JarFileNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.STRING_LITERAL, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_jarFileName;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterJarFileName) {
             listener.enterJarFileName(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitJarFileName) {
             listener.exitJarFileName(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitJarFileName) {
            return visitor.visitJarFileName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AlterTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_alterTable;
    }
    public override copyFrom(ctx: AlterTableContext): void {
        super.copyFrom(ctx);
    }
}
export class AddNewPartitionsContext extends AlterTableContext {
    public constructor(ctx: AlterTableContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_TABLE, 0)!;
    }
    public tablePath(): TablePathContext {
        return this.getRuleContext(0, TablePathContext)!;
    }
    public KW_ADD(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ADD, 0)!;
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public KW_PARTITION(): antlr.TerminalNode[];
    public KW_PARTITION(i: number): antlr.TerminalNode | null;
    public KW_PARTITION(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.KW_PARTITION);
    	} else {
    		return this.getToken(FlinkSQLParser.KW_PARTITION, i);
    	}
    }
    public tablePropertyList(): TablePropertyListContext[];
    public tablePropertyList(i: number): TablePropertyListContext | null;
    public tablePropertyList(i?: number): TablePropertyListContext[] | TablePropertyListContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TablePropertyListContext);
        }

        return this.getRuleContext(i, TablePropertyListContext);
    }
    public KW_WITH(): antlr.TerminalNode[];
    public KW_WITH(i: number): antlr.TerminalNode | null;
    public KW_WITH(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.KW_WITH);
    	} else {
    		return this.getToken(FlinkSQLParser.KW_WITH, i);
    	}
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterAddNewPartitions) {
             listener.enterAddNewPartitions(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitAddNewPartitions) {
             listener.exitAddNewPartitions(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitAddNewPartitions) {
            return visitor.visitAddNewPartitions(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ResetPropertiyContext extends AlterTableContext {
    public constructor(ctx: AlterTableContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_TABLE, 0)!;
    }
    public tablePath(): TablePathContext {
        return this.getRuleContext(0, TablePathContext)!;
    }
    public KW_RESET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_RESET, 0)!;
    }
    public transformList(): TransformListContext {
        return this.getRuleContext(0, TransformListContext)!;
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterResetPropertiy) {
             listener.enterResetPropertiy(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitResetPropertiy) {
             listener.exitResetPropertiy(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitResetPropertiy) {
            return visitor.visitResetPropertiy(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropAcolumnContext extends AlterTableContext {
    public constructor(ctx: AlterTableContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_TABLE, 0)!;
    }
    public tablePath(): TablePathContext {
        return this.getRuleContext(0, TablePathContext)!;
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_DROP, 0)!;
    }
    public uid(): UidContext {
        return this.getRuleContext(0, UidContext)!;
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterDropAcolumn) {
             listener.enterDropAcolumn(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitDropAcolumn) {
             listener.exitDropAcolumn(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitDropAcolumn) {
            return visitor.visitDropAcolumn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropPrimaryKeyContext extends AlterTableContext {
    public constructor(ctx: AlterTableContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_TABLE, 0)!;
    }
    public tablePath(): TablePathContext {
        return this.getRuleContext(0, TablePathContext)!;
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_DROP, 0)!;
    }
    public KW_PRIMARY(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_PRIMARY, 0)!;
    }
    public KW_KEY(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_KEY, 0)!;
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterDropPrimaryKey) {
             listener.enterDropPrimaryKey(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitDropPrimaryKey) {
             listener.exitDropPrimaryKey(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitDropPrimaryKey) {
            return visitor.visitDropPrimaryKey(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RenameTableContext extends AlterTableContext {
    public constructor(ctx: AlterTableContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_TABLE, 0)!;
    }
    public tablePath(): TablePathContext[];
    public tablePath(i: number): TablePathContext | null;
    public tablePath(i?: number): TablePathContext[] | TablePathContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TablePathContext);
        }

        return this.getRuleContext(i, TablePathContext);
    }
    public KW_RENAME(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_RENAME, 0)!;
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterRenameTable) {
             listener.enterRenameTable(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitRenameTable) {
             listener.exitRenameTable(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitRenameTable) {
            return visitor.visitRenameTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AddDistributionContext extends AlterTableContext {
    public constructor(ctx: AlterTableContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_TABLE, 0)!;
    }
    public tablePath(): TablePathContext {
        return this.getRuleContext(0, TablePathContext)!;
    }
    public KW_ADD(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ADD, 0)!;
    }
    public distribution(): DistributionContext {
        return this.getRuleContext(0, DistributionContext)!;
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterAddDistribution) {
             listener.enterAddDistribution(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitAddDistribution) {
             listener.exitAddDistribution(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitAddDistribution) {
            return visitor.visitAddDistribution(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AddOrModifyNewColumnsContext extends AlterTableContext {
    public constructor(ctx: AlterTableContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_TABLE, 0)!;
    }
    public tablePath(): TablePathContext {
        return this.getRuleContext(0, TablePathContext)!;
    }
    public columnOptionDefinition(): ColumnOptionDefinitionContext {
        return this.getRuleContext(0, ColumnOptionDefinitionContext)!;
    }
    public KW_MODIFY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_MODIFY, 0);
    }
    public KW_ADD(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ADD, 0);
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public columnPosition(): ColumnPositionContext | null {
        return this.getRuleContext(0, ColumnPositionContext);
    }
    public commentSpec(): CommentSpecContext | null {
        return this.getRuleContext(0, CommentSpecContext);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterAddOrModifyNewColumns) {
             listener.enterAddOrModifyNewColumns(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitAddOrModifyNewColumns) {
             listener.exitAddOrModifyNewColumns(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitAddOrModifyNewColumns) {
            return visitor.visitAddOrModifyNewColumns(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropPartitionsContext extends AlterTableContext {
    public constructor(ctx: AlterTableContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_TABLE, 0)!;
    }
    public tablePath(): TablePathContext {
        return this.getRuleContext(0, TablePathContext)!;
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_DROP, 0)!;
    }
    public KW_PARTITION(): antlr.TerminalNode[];
    public KW_PARTITION(i: number): antlr.TerminalNode | null;
    public KW_PARTITION(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.KW_PARTITION);
    	} else {
    		return this.getToken(FlinkSQLParser.KW_PARTITION, i);
    	}
    }
    public tablePropertyList(): TablePropertyListContext[];
    public tablePropertyList(i: number): TablePropertyListContext | null;
    public tablePropertyList(i?: number): TablePropertyListContext[] | TablePropertyListContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TablePropertyListContext);
        }

        return this.getRuleContext(i, TablePropertyListContext);
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterDropPartitions) {
             listener.enterDropPartitions(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitDropPartitions) {
             listener.exitDropPartitions(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitDropPartitions) {
            return visitor.visitDropPartitions(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropDistributionContext extends AlterTableContext {
    public constructor(ctx: AlterTableContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_TABLE, 0)!;
    }
    public tablePath(): TablePathContext {
        return this.getRuleContext(0, TablePathContext)!;
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_DROP, 0)!;
    }
    public KW_DISTRIBUTION(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_DISTRIBUTION, 0)!;
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterDropDistribution) {
             listener.enterDropDistribution(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitDropDistribution) {
             listener.exitDropDistribution(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitDropDistribution) {
            return visitor.visitDropDistribution(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RenameColumnContext extends AlterTableContext {
    public constructor(ctx: AlterTableContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_TABLE, 0)!;
    }
    public tablePath(): TablePathContext {
        return this.getRuleContext(0, TablePathContext)!;
    }
    public KW_RENAME(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_RENAME, 0)!;
    }
    public uid(): UidContext[];
    public uid(i: number): UidContext | null;
    public uid(i?: number): UidContext[] | UidContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UidContext);
        }

        return this.getRuleContext(i, UidContext);
    }
    public KW_TO(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_TO, 0)!;
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterRenameColumn) {
             listener.enterRenameColumn(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitRenameColumn) {
             listener.exitRenameColumn(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitRenameColumn) {
            return visitor.visitRenameColumn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AddOrModifyNewColumnContext extends AlterTableContext {
    public constructor(ctx: AlterTableContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_TABLE, 0)!;
    }
    public tablePath(): TablePathContext {
        return this.getRuleContext(0, TablePathContext)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public columnOptionDefinition(): ColumnOptionDefinitionContext[];
    public columnOptionDefinition(i: number): ColumnOptionDefinitionContext | null;
    public columnOptionDefinition(i?: number): ColumnOptionDefinitionContext[] | ColumnOptionDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnOptionDefinitionContext);
        }

        return this.getRuleContext(i, ColumnOptionDefinitionContext);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public KW_MODIFY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_MODIFY, 0);
    }
    public KW_ADD(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ADD, 0);
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public columnPosition(): ColumnPositionContext[];
    public columnPosition(i: number): ColumnPositionContext | null;
    public columnPosition(i?: number): ColumnPositionContext[] | ColumnPositionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnPositionContext);
        }

        return this.getRuleContext(i, ColumnPositionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public tableConstraint(): TableConstraintContext | null {
        return this.getRuleContext(0, TableConstraintContext);
    }
    public watermarkDefinition(): WatermarkDefinitionContext | null {
        return this.getRuleContext(0, WatermarkDefinitionContext);
    }
    public selfDefinitionClause(): SelfDefinitionClauseContext | null {
        return this.getRuleContext(0, SelfDefinitionClauseContext);
    }
    public commentSpec(): CommentSpecContext | null {
        return this.getRuleContext(0, CommentSpecContext);
    }
    public partitionDefinition(): PartitionDefinitionContext | null {
        return this.getRuleContext(0, PartitionDefinitionContext);
    }
    public withOption(): WithOptionContext | null {
        return this.getRuleContext(0, WithOptionContext);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterAddOrModifyNewColumn) {
             listener.enterAddOrModifyNewColumn(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitAddOrModifyNewColumn) {
             listener.exitAddOrModifyNewColumn(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitAddOrModifyNewColumn) {
            return visitor.visitAddOrModifyNewColumn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropWatermarkContext extends AlterTableContext {
    public constructor(ctx: AlterTableContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_TABLE, 0)!;
    }
    public tablePath(): TablePathContext {
        return this.getRuleContext(0, TablePathContext)!;
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_DROP, 0)!;
    }
    public KW_WATERMARK(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_WATERMARK, 0)!;
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterDropWatermark) {
             listener.enterDropWatermark(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitDropWatermark) {
             listener.exitDropWatermark(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitDropWatermark) {
            return visitor.visitDropWatermark(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropColumnListContext extends AlterTableContext {
    public constructor(ctx: AlterTableContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_TABLE, 0)!;
    }
    public tablePath(): TablePathContext {
        return this.getRuleContext(0, TablePathContext)!;
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_DROP, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public uid(): UidContext[];
    public uid(i: number): UidContext | null;
    public uid(i?: number): UidContext[] | UidContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UidContext);
        }

        return this.getRuleContext(i, UidContext);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterDropColumnList) {
             listener.enterDropColumnList(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitDropColumnList) {
             listener.exitDropColumnList(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitDropColumnList) {
            return visitor.visitDropColumnList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SetPropertiyContext extends AlterTableContext {
    public constructor(ctx: AlterTableContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_TABLE, 0)!;
    }
    public tablePath(): TablePathContext {
        return this.getRuleContext(0, TablePathContext)!;
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_SET, 0)!;
    }
    public partitionDefinition(): PartitionDefinitionContext {
        return this.getRuleContext(0, PartitionDefinitionContext)!;
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterSetPropertiy) {
             listener.enterSetPropertiy(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitSetPropertiy) {
             listener.exitSetPropertiy(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitSetPropertiy) {
            return visitor.visitSetPropertiy(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterContext extends AlterTableContext {
    public constructor(ctx: AlterTableContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_TABLE, 0)!;
    }
    public tablePath(): TablePathContext {
        return this.getRuleContext(0, TablePathContext)!;
    }
    public renameDefinition(): RenameDefinitionContext | null {
        return this.getRuleContext(0, RenameDefinitionContext);
    }
    public setKeyValueDefinition(): SetKeyValueDefinitionContext | null {
        return this.getRuleContext(0, SetKeyValueDefinitionContext);
    }
    public addConstraint(): AddConstraintContext | null {
        return this.getRuleContext(0, AddConstraintContext);
    }
    public dropConstraint(): DropConstraintContext | null {
        return this.getRuleContext(0, DropConstraintContext);
    }
    public addUnique(): AddUniqueContext | null {
        return this.getRuleContext(0, AddUniqueContext);
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterAlter) {
             listener.enterAlter(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitAlter) {
             listener.exitAlter(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitAlter) {
            return visitor.visitAlter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnPositionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_FIRST(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_FIRST, 0);
    }
    public KW_LAST(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_LAST, 0);
    }
    public uid(): UidContext | null {
        return this.getRuleContext(0, UidContext);
    }
    public KW_BEFORE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_BEFORE, 0);
    }
    public KW_AFTER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_AFTER, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_columnPosition;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterColumnPosition) {
             listener.enterColumnPosition(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitColumnPosition) {
             listener.exitColumnPosition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitColumnPosition) {
            return visitor.visitColumnPosition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RenameDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_RENAME(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_RENAME, 0)!;
    }
    public KW_TO(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_TO, 0)!;
    }
    public uid(): UidContext[];
    public uid(i: number): UidContext | null;
    public uid(i?: number): UidContext[] | UidContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UidContext);
        }

        return this.getRuleContext(i, UidContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_renameDefinition;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterRenameDefinition) {
             listener.enterRenameDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitRenameDefinition) {
             listener.exitRenameDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitRenameDefinition) {
            return visitor.visitRenameDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SetKeyValueDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_SET, 0)!;
    }
    public tablePropertyList(): TablePropertyListContext {
        return this.getRuleContext(0, TablePropertyListContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_setKeyValueDefinition;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterSetKeyValueDefinition) {
             listener.enterSetKeyValueDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitSetKeyValueDefinition) {
             listener.exitSetKeyValueDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitSetKeyValueDefinition) {
            return visitor.visitSetKeyValueDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AddConstraintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ADD(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ADD, 0)!;
    }
    public KW_CONSTRAINT(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_CONSTRAINT, 0)!;
    }
    public constraintName(): ConstraintNameContext {
        return this.getRuleContext(0, ConstraintNameContext)!;
    }
    public KW_PRIMARY(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_PRIMARY, 0)!;
    }
    public KW_KEY(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_KEY, 0)!;
    }
    public columnNameList(): ColumnNameListContext {
        return this.getRuleContext(0, ColumnNameListContext)!;
    }
    public notForced(): NotForcedContext | null {
        return this.getRuleContext(0, NotForcedContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_addConstraint;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterAddConstraint) {
             listener.enterAddConstraint(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitAddConstraint) {
             listener.exitAddConstraint(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitAddConstraint) {
            return visitor.visitAddConstraint(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DropConstraintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_DROP, 0)!;
    }
    public KW_CONSTRAINT(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_CONSTRAINT, 0)!;
    }
    public constraintName(): ConstraintNameContext {
        return this.getRuleContext(0, ConstraintNameContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_dropConstraint;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterDropConstraint) {
             listener.enterDropConstraint(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitDropConstraint) {
             listener.exitDropConstraint(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitDropConstraint) {
            return visitor.visitDropConstraint(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AddUniqueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ADD(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ADD, 0)!;
    }
    public KW_UNIQUE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_UNIQUE, 0)!;
    }
    public columnNameList(): ColumnNameListContext {
        return this.getRuleContext(0, ColumnNameListContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_addUnique;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterAddUnique) {
             listener.enterAddUnique(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitAddUnique) {
             listener.exitAddUnique(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitAddUnique) {
            return visitor.visitAddUnique(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NotForcedContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_NOT(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_NOT, 0)!;
    }
    public KW_ENFORCED(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ENFORCED, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_notForced;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterNotForced) {
             listener.enterNotForced(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitNotForced) {
             listener.exitNotForced(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitNotForced) {
            return visitor.visitNotForced(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AlertViewContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ALTER, 0)!;
    }
    public KW_VIEW(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_VIEW, 0)!;
    }
    public uid(): UidContext {
        return this.getRuleContext(0, UidContext)!;
    }
    public renameDefinition(): RenameDefinitionContext | null {
        return this.getRuleContext(0, RenameDefinitionContext);
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_AS, 0);
    }
    public queryStatement(): QueryStatementContext | null {
        return this.getRuleContext(0, QueryStatementContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_alertView;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterAlertView) {
             listener.enterAlertView(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitAlertView) {
             listener.exitAlertView(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitAlertView) {
            return visitor.visitAlertView(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AlterCatalogContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ALTER, 0)!;
    }
    public KW_CATALOG(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_CATALOG, 0)!;
    }
    public catalogPath(): CatalogPathContext {
        return this.getRuleContext(0, CatalogPathContext)!;
    }
    public KW_SET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SET, 0);
    }
    public LR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0);
    }
    public tableProperty(): TablePropertyContext | null {
        return this.getRuleContext(0, TablePropertyContext);
    }
    public RR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0);
    }
    public KW_RESET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_RESET, 0);
    }
    public tablePropertyKey(): TablePropertyKeyContext | null {
        return this.getRuleContext(0, TablePropertyKeyContext);
    }
    public KW_COMMENT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_COMMENT, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_alterCatalog;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterAlterCatalog) {
             listener.enterAlterCatalog(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitAlterCatalog) {
             listener.exitAlterCatalog(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitAlterCatalog) {
            return visitor.visitAlterCatalog(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AlterDatabaseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ALTER, 0)!;
    }
    public KW_DATABASE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_DATABASE, 0)!;
    }
    public databasePath(): DatabasePathContext {
        return this.getRuleContext(0, DatabasePathContext)!;
    }
    public setKeyValueDefinition(): SetKeyValueDefinitionContext {
        return this.getRuleContext(0, SetKeyValueDefinitionContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_alterDatabase;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterAlterDatabase) {
             listener.enterAlterDatabase(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitAlterDatabase) {
             listener.exitAlterDatabase(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitAlterDatabase) {
            return visitor.visitAlterDatabase(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AlterFunctionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ALTER, 0)!;
    }
    public KW_FUNCTION(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_FUNCTION, 0)!;
    }
    public uid(): UidContext {
        return this.getRuleContext(0, UidContext)!;
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_AS, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public KW_TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TEMPORARY, 0);
    }
    public KW_SYSTEM(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SYSTEM, 0);
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public KW_LANGUAGE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_LANGUAGE, 0);
    }
    public KW_JAVA(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_JAVA, 0);
    }
    public KW_SCALA(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SCALA, 0);
    }
    public KW_PYTHON(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_PYTHON, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_alterFunction;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterAlterFunction) {
             listener.enterAlterFunction(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitAlterFunction) {
             listener.exitAlterFunction(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitAlterFunction) {
            return visitor.visitAlterFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DropCatalogContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_DROP, 0)!;
    }
    public KW_CATALOG(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_CATALOG, 0)!;
    }
    public catalogPath(): CatalogPathContext {
        return this.getRuleContext(0, CatalogPathContext)!;
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_dropCatalog;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterDropCatalog) {
             listener.enterDropCatalog(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitDropCatalog) {
             listener.exitDropCatalog(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitDropCatalog) {
            return visitor.visitDropCatalog(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DropTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_DROP, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_TABLE, 0)!;
    }
    public tablePath(): TablePathContext {
        return this.getRuleContext(0, TablePathContext)!;
    }
    public KW_TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TEMPORARY, 0);
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_dropTable;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterDropTable) {
             listener.enterDropTable(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitDropTable) {
             listener.exitDropTable(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitDropTable) {
            return visitor.visitDropTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DropDatabaseContext extends antlr.ParserRuleContext {
    public _dropType?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_DROP, 0)!;
    }
    public KW_DATABASE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_DATABASE, 0)!;
    }
    public databasePath(): DatabasePathContext {
        return this.getRuleContext(0, DatabasePathContext)!;
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public KW_RESTRICT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_RESTRICT, 0);
    }
    public KW_CASCADE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_CASCADE, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_dropDatabase;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterDropDatabase) {
             listener.enterDropDatabase(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitDropDatabase) {
             listener.exitDropDatabase(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitDropDatabase) {
            return visitor.visitDropDatabase(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DropViewContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_DROP, 0)!;
    }
    public KW_VIEW(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_VIEW, 0)!;
    }
    public uid(): UidContext {
        return this.getRuleContext(0, UidContext)!;
    }
    public KW_TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TEMPORARY, 0);
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_dropView;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterDropView) {
             listener.enterDropView(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitDropView) {
             listener.exitDropView(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitDropView) {
            return visitor.visitDropView(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DropFunctionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_DROP, 0)!;
    }
    public KW_FUNCTION(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_FUNCTION, 0)!;
    }
    public functionName(): FunctionNameContext {
        return this.getRuleContext(0, FunctionNameContext)!;
    }
    public KW_TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TEMPORARY, 0);
    }
    public KW_SYSTEM(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SYSTEM, 0);
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_dropFunction;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterDropFunction) {
             listener.enterDropFunction(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitDropFunction) {
             listener.exitDropFunction(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitDropFunction) {
            return visitor.visitDropFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InsertSimpleStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_INSERT(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_INSERT, 0)!;
    }
    public tablePath(): TablePathContext {
        return this.getRuleContext(0, TablePathContext)!;
    }
    public KW_INTO(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_INTO, 0);
    }
    public KW_OVERWRITE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_OVERWRITE, 0);
    }
    public queryStatement(): QueryStatementContext | null {
        return this.getRuleContext(0, QueryStatementContext);
    }
    public valuesDefinition(): ValuesDefinitionContext | null {
        return this.getRuleContext(0, ValuesDefinitionContext);
    }
    public KW_TABLE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TABLE, 0);
    }
    public insertPartitionDefinition(): InsertPartitionDefinitionContext | null {
        return this.getRuleContext(0, InsertPartitionDefinitionContext);
    }
    public columnNameList(): ColumnNameListContext | null {
        return this.getRuleContext(0, ColumnNameListContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_insertSimpleStatement;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterInsertSimpleStatement) {
             listener.enterInsertSimpleStatement(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitInsertSimpleStatement) {
             listener.exitInsertSimpleStatement(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitInsertSimpleStatement) {
            return visitor.visitInsertSimpleStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InsertPartitionDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PARTITION(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_PARTITION, 0)!;
    }
    public tablePropertyList(): TablePropertyListContext {
        return this.getRuleContext(0, TablePropertyListContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_insertPartitionDefinition;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterInsertPartitionDefinition) {
             listener.enterInsertPartitionDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitInsertPartitionDefinition) {
             listener.exitInsertPartitionDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitInsertPartitionDefinition) {
            return visitor.visitInsertPartitionDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QueryStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_queryStatement;
    }
    public override copyFrom(ctx: QueryStatementContext): void {
        super.copyFrom(ctx);
    }
}
export class Common_selectContext extends QueryStatementContext {
    public constructor(ctx: QueryStatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public selectClause(): SelectClauseContext | null {
        return this.getRuleContext(0, SelectClauseContext);
    }
    public selectStatement(): SelectStatementContext | null {
        return this.getRuleContext(0, SelectStatementContext);
    }
    public orderByCaluse(): OrderByCaluseContext | null {
        return this.getRuleContext(0, OrderByCaluseContext);
    }
    public limitClause(): LimitClauseContext | null {
        return this.getRuleContext(0, LimitClauseContext);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterCommon_select) {
             listener.enterCommon_select(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitCommon_select) {
             listener.exitCommon_select(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitCommon_select) {
            return visitor.visitCommon_select(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class Values_caluseContext extends QueryStatementContext {
    public constructor(ctx: QueryStatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public valuesCaluse(): ValuesCaluseContext {
        return this.getRuleContext(0, ValuesCaluseContext)!;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterValues_caluse) {
             listener.enterValues_caluse(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitValues_caluse) {
             listener.exitValues_caluse(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitValues_caluse) {
            return visitor.visitValues_caluse(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class Union_queryContext extends QueryStatementContext {
    public _left?: QueryStatementContext;
    public _operator?: Token | null;
    public _right?: QueryStatementContext;
    public constructor(ctx: QueryStatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public queryStatement(): QueryStatementContext[];
    public queryStatement(i: number): QueryStatementContext | null;
    public queryStatement(i?: number): QueryStatementContext[] | QueryStatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QueryStatementContext);
        }

        return this.getRuleContext(i, QueryStatementContext);
    }
    public KW_INTERSECT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_INTERSECT, 0);
    }
    public KW_UNION(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_UNION, 0);
    }
    public KW_EXCEPT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_EXCEPT, 0);
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ALL, 0);
    }
    public orderByCaluse(): OrderByCaluseContext | null {
        return this.getRuleContext(0, OrderByCaluseContext);
    }
    public limitClause(): LimitClauseContext | null {
        return this.getRuleContext(0, LimitClauseContext);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterUnion_query) {
             listener.enterUnion_query(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitUnion_query) {
             listener.exitUnion_query(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitUnion_query) {
            return visitor.visitUnion_query(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class Sub_queryContext extends QueryStatementContext {
    public constructor(ctx: QueryStatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public queryStatement(): QueryStatementContext {
        return this.getRuleContext(0, QueryStatementContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterSub_query) {
             listener.enterSub_query(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitSub_query) {
             listener.exitSub_query(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitSub_query) {
            return visitor.visitSub_query(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ValuesCaluseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_VALUES(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_VALUES, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_valuesCaluse;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterValuesCaluse) {
             listener.enterValuesCaluse(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitValuesCaluse) {
             listener.exitValuesCaluse(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitValuesCaluse) {
            return visitor.visitValuesCaluse(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WithItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public withItemName(): WithItemNameContext {
        return this.getRuleContext(0, WithItemNameContext)!;
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_AS, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode[];
    public LR_BRACKET(i: number): antlr.TerminalNode | null;
    public LR_BRACKET(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.LR_BRACKET);
    	} else {
    		return this.getToken(FlinkSQLParser.LR_BRACKET, i);
    	}
    }
    public queryStatement(): QueryStatementContext {
        return this.getRuleContext(0, QueryStatementContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode[];
    public RR_BRACKET(i: number): antlr.TerminalNode | null;
    public RR_BRACKET(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.RR_BRACKET);
    	} else {
    		return this.getToken(FlinkSQLParser.RR_BRACKET, i);
    	}
    }
    public columnName(): ColumnNameContext[];
    public columnName(i: number): ColumnNameContext | null;
    public columnName(i?: number): ColumnNameContext[] | ColumnNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnNameContext);
        }

        return this.getRuleContext(i, ColumnNameContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_withItem;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterWithItem) {
             listener.enterWithItem(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitWithItem) {
             listener.exitWithItem(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitWithItem) {
            return visitor.visitWithItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WithItemNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_withItemName;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterWithItemName) {
             listener.enterWithItemName(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitWithItemName) {
             listener.exitWithItemName(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitWithItemName) {
            return visitor.visitWithItemName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_GROUP(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_GROUP, 0)!;
    }
    public KW_BY(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_BY, 0)!;
    }
    public groupItemDefinition(): GroupItemDefinitionContext[];
    public groupItemDefinition(i: number): GroupItemDefinitionContext | null;
    public groupItemDefinition(i?: number): GroupItemDefinitionContext[] | GroupItemDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(GroupItemDefinitionContext);
        }

        return this.getRuleContext(i, GroupItemDefinitionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public groupingSet(): GroupingSetContext | null {
        return this.getRuleContext(0, GroupingSetContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_groupByClause;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterGroupByClause) {
             listener.enterGroupByClause(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitGroupByClause) {
             listener.exitGroupByClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitGroupByClause) {
            return visitor.visitGroupByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FromClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_FROM(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_FROM, 0)!;
    }
    public tableExpression(): TableExpressionContext {
        return this.getRuleContext(0, TableExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_fromClause;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterFromClause) {
             listener.enterFromClause(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitFromClause) {
             listener.exitFromClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitFromClause) {
            return visitor.visitFromClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableReferenceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tablePrimary(): TablePrimaryContext | null {
        return this.getRuleContext(0, TablePrimaryContext);
    }
    public tableAlias(): TableAliasContext | null {
        return this.getRuleContext(0, TableAliasContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_tableReference;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterTableReference) {
             listener.enterTableReference(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitTableReference) {
             listener.exitTableReference(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitTableReference) {
            return visitor.visitTableReference(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FlinkJoinOpContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_LEFT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_LEFT, 0);
    }
    public KW_RIGHT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_RIGHT, 0);
    }
    public KW_FULL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_FULL, 0);
    }
    public KW_INNER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_INNER, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_flinkJoinOp;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterFlinkJoinOp) {
             listener.enterFlinkJoinOp(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitFlinkJoinOp) {
             listener.exitFlinkJoinOp(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitFlinkJoinOp) {
            return visitor.visitFlinkJoinOp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TablePrimaryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tablePath(): TablePathContext | null {
        return this.getRuleContext(0, TablePathContext);
    }
    public KW_TABLE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TABLE, 0);
    }
    public timePeriod(): TimePeriodContext | null {
        return this.getRuleContext(0, TimePeriodContext);
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_AS, 0);
    }
    public correlationName(): CorrelationNameContext | null {
        return this.getRuleContext(0, CorrelationNameContext);
    }
    public KW_LATERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_LATERAL, 0);
    }
    public LR_BRACKET(): antlr.TerminalNode[];
    public LR_BRACKET(i: number): antlr.TerminalNode | null;
    public LR_BRACKET(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.LR_BRACKET);
    	} else {
    		return this.getToken(FlinkSQLParser.LR_BRACKET, i);
    	}
    }
    public functionName(): FunctionNameContext | null {
        return this.getRuleContext(0, FunctionNameContext);
    }
    public functionParam(): FunctionParamContext[];
    public functionParam(i: number): FunctionParamContext | null;
    public functionParam(i?: number): FunctionParamContext[] | FunctionParamContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FunctionParamContext);
        }

        return this.getRuleContext(i, FunctionParamContext);
    }
    public RR_BRACKET(): antlr.TerminalNode[];
    public RR_BRACKET(i: number): antlr.TerminalNode | null;
    public RR_BRACKET(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.RR_BRACKET);
    	} else {
    		return this.getToken(FlinkSQLParser.RR_BRACKET, i);
    	}
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public queryStatement(): QueryStatementContext | null {
        return this.getRuleContext(0, QueryStatementContext);
    }
    public tableAlias(): TableAliasContext | null {
        return this.getRuleContext(0, TableAliasContext);
    }
    public projectItemDefinition(): ProjectItemDefinitionContext[];
    public projectItemDefinition(i: number): ProjectItemDefinitionContext | null;
    public projectItemDefinition(i?: number): ProjectItemDefinitionContext[] | ProjectItemDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ProjectItemDefinitionContext);
        }

        return this.getRuleContext(i, ProjectItemDefinitionContext);
    }
    public KW_UNNEST(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_UNNEST, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_tablePrimary;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterTablePrimary) {
             listener.enterTablePrimary(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitTablePrimary) {
             listener.exitTablePrimary(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitTablePrimary) {
            return visitor.visitTablePrimary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TimePeriodContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_FOR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_FOR, 0);
    }
    public KW_SYSTEM_TIME(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SYSTEM_TIME, 0);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_AS, 0)!;
    }
    public KW_OF(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_OF, 0)!;
    }
    public dateTimeExpression(): DateTimeExpressionContext {
        return this.getRuleContext(0, DateTimeExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_timePeriod;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterTimePeriod) {
             listener.enterTimePeriod(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitTimePeriod) {
             listener.exitTimePeriod(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitTimePeriod) {
            return visitor.visitTimePeriod(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DateTimeExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_dateTimeExpression;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterDateTimeExpression) {
             listener.enterDateTimeExpression(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitDateTimeExpression) {
             listener.exitDateTimeExpression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitDateTimeExpression) {
            return visitor.visitDateTimeExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InlineDataValueClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public valuesDefinition(): ValuesDefinitionContext {
        return this.getRuleContext(0, ValuesDefinitionContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public tableAlias(): TableAliasContext {
        return this.getRuleContext(0, TableAliasContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_inlineDataValueClause;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterInlineDataValueClause) {
             listener.enterInlineDataValueClause(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitInlineDataValueClause) {
             listener.exitInlineDataValueClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitInlineDataValueClause) {
            return visitor.visitInlineDataValueClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WindowTVFClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_TABLE, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public windowTVFExpression(): WindowTVFExpressionContext {
        return this.getRuleContext(0, WindowTVFExpressionContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_windowTVFClause;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterWindowTVFClause) {
             listener.enterWindowTVFClause(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitWindowTVFClause) {
             listener.exitWindowTVFClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitWindowTVFClause) {
            return visitor.visitWindowTVFClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WindowTVFExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tumableExpression(): TumableExpressionContext | null {
        return this.getRuleContext(0, TumableExpressionContext);
    }
    public hopExpression(): HopExpressionContext | null {
        return this.getRuleContext(0, HopExpressionContext);
    }
    public cumulateExpression(): CumulateExpressionContext | null {
        return this.getRuleContext(0, CumulateExpressionContext);
    }
    public sessionExpression(): SessionExpressionContext | null {
        return this.getRuleContext(0, SessionExpressionContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_windowTVFExpression;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterWindowTVFExpression) {
             listener.enterWindowTVFExpression(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitWindowTVFExpression) {
             listener.exitWindowTVFExpression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitWindowTVFExpression) {
            return visitor.visitWindowTVFExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TumableExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TUMBLE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_TUMBLE, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public uid(): UidContext {
        return this.getRuleContext(0, UidContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TABLE, 0);
    }
    public KW_DATA(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DATA, 0);
    }
    public DOUBLE_RIGHT_ARROW(): antlr.TerminalNode[];
    public DOUBLE_RIGHT_ARROW(i: number): antlr.TerminalNode | null;
    public DOUBLE_RIGHT_ARROW(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
    	} else {
    		return this.getToken(FlinkSQLParser.DOUBLE_RIGHT_ARROW, i);
    	}
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public columnDescriptor(): ColumnDescriptorContext | null {
        return this.getRuleContext(0, ColumnDescriptorContext);
    }
    public timeIntervalExpression(): TimeIntervalExpressionContext[];
    public timeIntervalExpression(i: number): TimeIntervalExpressionContext | null;
    public timeIntervalExpression(i?: number): TimeIntervalExpressionContext[] | TimeIntervalExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TimeIntervalExpressionContext);
        }

        return this.getRuleContext(i, TimeIntervalExpressionContext);
    }
    public KW_TIMECOL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TIMECOL, 0);
    }
    public KW_SIZE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SIZE, 0);
    }
    public DOUBLE_QUOTE_SYMB(): antlr.TerminalNode[];
    public DOUBLE_QUOTE_SYMB(i: number): antlr.TerminalNode | null;
    public DOUBLE_QUOTE_SYMB(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.DOUBLE_QUOTE_SYMB);
    	} else {
    		return this.getToken(FlinkSQLParser.DOUBLE_QUOTE_SYMB, i);
    	}
    }
    public KW_OFFSET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_OFFSET, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_tumableExpression;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterTumableExpression) {
             listener.enterTumableExpression(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitTumableExpression) {
             listener.exitTumableExpression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitTumableExpression) {
            return visitor.visitTumableExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class HopExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_HOP(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_HOP, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public uid(): UidContext {
        return this.getRuleContext(0, UidContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TABLE, 0);
    }
    public KW_DATA(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DATA, 0);
    }
    public DOUBLE_RIGHT_ARROW(): antlr.TerminalNode[];
    public DOUBLE_RIGHT_ARROW(i: number): antlr.TerminalNode | null;
    public DOUBLE_RIGHT_ARROW(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
    	} else {
    		return this.getToken(FlinkSQLParser.DOUBLE_RIGHT_ARROW, i);
    	}
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public columnDescriptor(): ColumnDescriptorContext | null {
        return this.getRuleContext(0, ColumnDescriptorContext);
    }
    public timeIntervalExpression(): TimeIntervalExpressionContext[];
    public timeIntervalExpression(i: number): TimeIntervalExpressionContext | null;
    public timeIntervalExpression(i?: number): TimeIntervalExpressionContext[] | TimeIntervalExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TimeIntervalExpressionContext);
        }

        return this.getRuleContext(i, TimeIntervalExpressionContext);
    }
    public KW_TIMECOL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TIMECOL, 0);
    }
    public KW_SIZE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SIZE, 0);
    }
    public KW_SLIDE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SLIDE, 0);
    }
    public DOUBLE_QUOTE_SYMB(): antlr.TerminalNode[];
    public DOUBLE_QUOTE_SYMB(i: number): antlr.TerminalNode | null;
    public DOUBLE_QUOTE_SYMB(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.DOUBLE_QUOTE_SYMB);
    	} else {
    		return this.getToken(FlinkSQLParser.DOUBLE_QUOTE_SYMB, i);
    	}
    }
    public KW_OFFSET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_OFFSET, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_hopExpression;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterHopExpression) {
             listener.enterHopExpression(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitHopExpression) {
             listener.exitHopExpression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitHopExpression) {
            return visitor.visitHopExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CumulateExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CUMULATE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_CUMULATE, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public uid(): UidContext {
        return this.getRuleContext(0, UidContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TABLE, 0);
    }
    public KW_DATA(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DATA, 0);
    }
    public DOUBLE_RIGHT_ARROW(): antlr.TerminalNode[];
    public DOUBLE_RIGHT_ARROW(i: number): antlr.TerminalNode | null;
    public DOUBLE_RIGHT_ARROW(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
    	} else {
    		return this.getToken(FlinkSQLParser.DOUBLE_RIGHT_ARROW, i);
    	}
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public columnDescriptor(): ColumnDescriptorContext | null {
        return this.getRuleContext(0, ColumnDescriptorContext);
    }
    public timeIntervalExpression(): TimeIntervalExpressionContext[];
    public timeIntervalExpression(i: number): TimeIntervalExpressionContext | null;
    public timeIntervalExpression(i?: number): TimeIntervalExpressionContext[] | TimeIntervalExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TimeIntervalExpressionContext);
        }

        return this.getRuleContext(i, TimeIntervalExpressionContext);
    }
    public KW_TIMECOL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TIMECOL, 0);
    }
    public KW_SIZE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SIZE, 0);
    }
    public KW_STEP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_STEP, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_cumulateExpression;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterCumulateExpression) {
             listener.enterCumulateExpression(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitCumulateExpression) {
             listener.exitCumulateExpression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitCumulateExpression) {
            return visitor.visitCumulateExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SessionExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SESSION(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_SESSION, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public uid(): UidContext[];
    public uid(i: number): UidContext | null;
    public uid(i?: number): UidContext[] | UidContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UidContext);
        }

        return this.getRuleContext(i, UidContext);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TABLE, 0);
    }
    public KW_DATA(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DATA, 0);
    }
    public DOUBLE_RIGHT_ARROW(): antlr.TerminalNode[];
    public DOUBLE_RIGHT_ARROW(i: number): antlr.TerminalNode | null;
    public DOUBLE_RIGHT_ARROW(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.DOUBLE_RIGHT_ARROW);
    	} else {
    		return this.getToken(FlinkSQLParser.DOUBLE_RIGHT_ARROW, i);
    	}
    }
    public KW_PARTITION(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_PARTITION, 0);
    }
    public KW_BY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_BY, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public columnDescriptor(): ColumnDescriptorContext | null {
        return this.getRuleContext(0, ColumnDescriptorContext);
    }
    public timeIntervalExpression(): TimeIntervalExpressionContext | null {
        return this.getRuleContext(0, TimeIntervalExpressionContext);
    }
    public KW_TIMECOL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TIMECOL, 0);
    }
    public KW_GAP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_GAP, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_sessionExpression;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterSessionExpression) {
             listener.enterSessionExpression(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitSessionExpression) {
             listener.exitSessionExpression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitSessionExpression) {
            return visitor.visitSessionExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WindowTVFNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TUMBLE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TUMBLE, 0);
    }
    public KW_HOP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_HOP, 0);
    }
    public KW_CUMULATE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_CUMULATE, 0);
    }
    public KW_SESSION(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SESSION, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_windowTVFName;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterWindowTVFName) {
             listener.enterWindowTVFName(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitWindowTVFName) {
             listener.exitWindowTVFName(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitWindowTVFName) {
            return visitor.visitWindowTVFName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WindowTVFParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TABLE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TABLE, 0);
    }
    public timeAttrColumn(): TimeAttrColumnContext | null {
        return this.getRuleContext(0, TimeAttrColumnContext);
    }
    public columnDescriptor(): ColumnDescriptorContext | null {
        return this.getRuleContext(0, ColumnDescriptorContext);
    }
    public timeIntervalExpression(): TimeIntervalExpressionContext | null {
        return this.getRuleContext(0, TimeIntervalExpressionContext);
    }
    public KW_DATA(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DATA, 0);
    }
    public DOUBLE_RIGHT_ARROW(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.DOUBLE_RIGHT_ARROW, 0);
    }
    public KW_TIMECOL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TIMECOL, 0);
    }
    public timeIntervalParamName(): TimeIntervalParamNameContext | null {
        return this.getRuleContext(0, TimeIntervalParamNameContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_windowTVFParam;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterWindowTVFParam) {
             listener.enterWindowTVFParam(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitWindowTVFParam) {
             listener.exitWindowTVFParam(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitWindowTVFParam) {
            return visitor.visitWindowTVFParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TimeIntervalParamNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DATA(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DATA, 0);
    }
    public KW_TIMECOL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TIMECOL, 0);
    }
    public KW_SIZE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SIZE, 0);
    }
    public KW_OFFSET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_OFFSET, 0);
    }
    public KW_STEP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_STEP, 0);
    }
    public KW_SLIDE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SLIDE, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_timeIntervalParamName;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterTimeIntervalParamName) {
             listener.enterTimeIntervalParamName(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitTimeIntervalParamName) {
             listener.exitTimeIntervalParamName(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitTimeIntervalParamName) {
            return visitor.visitTimeIntervalParamName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnDescriptorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DESCRIPTOR(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_DESCRIPTOR, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public uid(): UidContext {
        return this.getRuleContext(0, UidContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_columnDescriptor;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterColumnDescriptor) {
             listener.enterColumnDescriptor(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitColumnDescriptor) {
             listener.exitColumnDescriptor(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitColumnDescriptor) {
            return visitor.visitColumnDescriptor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class JoinConditionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ON(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ON, 0);
    }
    public booleanExpression(): BooleanExpressionContext | null {
        return this.getRuleContext(0, BooleanExpressionContext);
    }
    public KW_USING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_USING, 0);
    }
    public LR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0);
    }
    public uid(): UidContext[];
    public uid(i: number): UidContext | null;
    public uid(i?: number): UidContext[] | UidContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UidContext);
        }

        return this.getRuleContext(i, UidContext);
    }
    public RR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_joinCondition;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterJoinCondition) {
             listener.enterJoinCondition(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitJoinCondition) {
             listener.exitJoinCondition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitJoinCondition) {
            return visitor.visitJoinCondition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhereClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WHERE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_WHERE, 0)!;
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getRuleContext(0, BooleanExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_whereClause;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterWhereClause) {
             listener.enterWhereClause(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitWhereClause) {
             listener.exitWhereClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitWhereClause) {
            return visitor.visitWhereClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupItemDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public groupWindowFunction(): GroupWindowFunctionContext | null {
        return this.getRuleContext(0, GroupWindowFunctionContext);
    }
    public LR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public groupingSetsNotionName(): GroupingSetsNotionNameContext | null {
        return this.getRuleContext(0, GroupingSetsNotionNameContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_groupItemDefinition;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterGroupItemDefinition) {
             listener.enterGroupItemDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitGroupItemDefinition) {
             listener.exitGroupItemDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitGroupItemDefinition) {
            return visitor.visitGroupItemDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupingSetContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public groupingSets(): GroupingSetsContext {
        return this.getRuleContext(0, GroupingSetsContext)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public groupItemDefinition(): GroupItemDefinitionContext[];
    public groupItemDefinition(i: number): GroupItemDefinitionContext | null;
    public groupItemDefinition(i?: number): GroupItemDefinitionContext[] | GroupItemDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(GroupItemDefinitionContext);
        }

        return this.getRuleContext(i, GroupItemDefinitionContext);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_groupingSet;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterGroupingSet) {
             listener.enterGroupingSet(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitGroupingSet) {
             listener.exitGroupingSet(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitGroupingSet) {
            return visitor.visitGroupingSet(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupingSetsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_GROUPING(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_GROUPING, 0)!;
    }
    public KW_SETS(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_SETS, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_groupingSets;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterGroupingSets) {
             listener.enterGroupingSets(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitGroupingSets) {
             listener.exitGroupingSets(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitGroupingSets) {
            return visitor.visitGroupingSets(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupingSetsNotionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CUBE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_CUBE, 0);
    }
    public KW_ROLLUP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ROLLUP, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_groupingSetsNotionName;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterGroupingSetsNotionName) {
             listener.enterGroupingSetsNotionName(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitGroupingSetsNotionName) {
             listener.exitGroupingSetsNotionName(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitGroupingSetsNotionName) {
            return visitor.visitGroupingSetsNotionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupWindowFunctionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public groupWindowFunctionName(): GroupWindowFunctionNameContext {
        return this.getRuleContext(0, GroupWindowFunctionNameContext)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public timeAttrColumn(): TimeAttrColumnContext {
        return this.getRuleContext(0, TimeAttrColumnContext)!;
    }
    public COMMA(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.COMMA, 0)!;
    }
    public timeIntervalExpression(): TimeIntervalExpressionContext {
        return this.getRuleContext(0, TimeIntervalExpressionContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_groupWindowFunction;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterGroupWindowFunction) {
             listener.enterGroupWindowFunction(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitGroupWindowFunction) {
             listener.exitGroupWindowFunction(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitGroupWindowFunction) {
            return visitor.visitGroupWindowFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupWindowFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TUMBLE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TUMBLE, 0);
    }
    public KW_HOP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_HOP, 0);
    }
    public KW_SESSION(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SESSION, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_groupWindowFunctionName;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterGroupWindowFunctionName) {
             listener.enterGroupWindowFunctionName(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitGroupWindowFunctionName) {
             listener.exitGroupWindowFunctionName(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitGroupWindowFunctionName) {
            return visitor.visitGroupWindowFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TimeAttrColumnContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public uid(): UidContext {
        return this.getRuleContext(0, UidContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_timeAttrColumn;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterTimeAttrColumn) {
             listener.enterTimeAttrColumn(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitTimeAttrColumn) {
             listener.exitTimeAttrColumn(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitTimeAttrColumn) {
            return visitor.visitTimeAttrColumn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class HavingClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_HAVING(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_HAVING, 0)!;
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getRuleContext(0, BooleanExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_havingClause;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterHavingClause) {
             listener.enterHavingClause(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitHavingClause) {
             listener.exitHavingClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitHavingClause) {
            return visitor.visitHavingClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WindowClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WINDOW(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_WINDOW, 0)!;
    }
    public namedWindow(): NamedWindowContext[];
    public namedWindow(i: number): NamedWindowContext | null;
    public namedWindow(i?: number): NamedWindowContext[] | NamedWindowContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NamedWindowContext);
        }

        return this.getRuleContext(i, NamedWindowContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_windowClause;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterWindowClause) {
             listener.enterWindowClause(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitWindowClause) {
             listener.exitWindowClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitWindowClause) {
            return visitor.visitWindowClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NamedWindowContext extends antlr.ParserRuleContext {
    public _name?: ErrorCapturingIdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_AS, 0)!;
    }
    public windowSpec(): WindowSpecContext {
        return this.getRuleContext(0, WindowSpecContext)!;
    }
    public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
        return this.getRuleContext(0, ErrorCapturingIdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_namedWindow;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterNamedWindow) {
             listener.enterNamedWindow(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitNamedWindow) {
             listener.exitNamedWindow(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitNamedWindow) {
            return visitor.visitNamedWindow(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WindowSpecContext extends antlr.ParserRuleContext {
    public _name?: ErrorCapturingIdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public partitionByClause(): PartitionByClauseContext | null {
        return this.getRuleContext(0, PartitionByClauseContext);
    }
    public orderByCaluse(): OrderByCaluseContext | null {
        return this.getRuleContext(0, OrderByCaluseContext);
    }
    public windowFrame(): WindowFrameContext | null {
        return this.getRuleContext(0, WindowFrameContext);
    }
    public errorCapturingIdentifier(): ErrorCapturingIdentifierContext | null {
        return this.getRuleContext(0, ErrorCapturingIdentifierContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_windowSpec;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterWindowSpec) {
             listener.enterWindowSpec(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitWindowSpec) {
             listener.exitWindowSpec(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitWindowSpec) {
            return visitor.visitWindowSpec(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MatchRecognizeClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_MATCH_RECOGNIZE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_MATCH_RECOGNIZE, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public patternVariablesDefinition(): PatternVariablesDefinitionContext {
        return this.getRuleContext(0, PatternVariablesDefinitionContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public partitionByClause(): PartitionByClauseContext | null {
        return this.getRuleContext(0, PartitionByClauseContext);
    }
    public orderByCaluse(): OrderByCaluseContext | null {
        return this.getRuleContext(0, OrderByCaluseContext);
    }
    public measuresClause(): MeasuresClauseContext | null {
        return this.getRuleContext(0, MeasuresClauseContext);
    }
    public outputMode(): OutputModeContext | null {
        return this.getRuleContext(0, OutputModeContext);
    }
    public afterMatchStrategy(): AfterMatchStrategyContext | null {
        return this.getRuleContext(0, AfterMatchStrategyContext);
    }
    public patternDefinition(): PatternDefinitionContext | null {
        return this.getRuleContext(0, PatternDefinitionContext);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_AS, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_matchRecognizeClause;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterMatchRecognizeClause) {
             listener.enterMatchRecognizeClause(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitMatchRecognizeClause) {
             listener.exitMatchRecognizeClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitMatchRecognizeClause) {
            return visitor.visitMatchRecognizeClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OrderByCaluseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ORDER(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ORDER, 0)!;
    }
    public KW_BY(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_BY, 0)!;
    }
    public orderItemDefinition(): OrderItemDefinitionContext[];
    public orderItemDefinition(i: number): OrderItemDefinitionContext | null;
    public orderItemDefinition(i?: number): OrderItemDefinitionContext[] | OrderItemDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OrderItemDefinitionContext);
        }

        return this.getRuleContext(i, OrderItemDefinitionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_orderByCaluse;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterOrderByCaluse) {
             listener.enterOrderByCaluse(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitOrderByCaluse) {
             listener.exitOrderByCaluse(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitOrderByCaluse) {
            return visitor.visitOrderByCaluse(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OrderItemDefinitionContext extends antlr.ParserRuleContext {
    public _ordering?: Token | null;
    public _nullOrder?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public KW_NULLS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_NULLS, 0);
    }
    public KW_ASC(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ASC, 0);
    }
    public KW_DESC(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DESC, 0);
    }
    public KW_LAST(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_LAST, 0);
    }
    public KW_FIRST(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_FIRST, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_orderItemDefinition;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterOrderItemDefinition) {
             listener.enterOrderItemDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitOrderItemDefinition) {
             listener.exitOrderItemDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitOrderItemDefinition) {
            return visitor.visitOrderItemDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LimitClauseContext extends antlr.ParserRuleContext {
    public _limit?: ExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_LIMIT(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_LIMIT, 0)!;
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ALL, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_limitClause;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterLimitClause) {
             listener.enterLimitClause(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitLimitClause) {
             listener.exitLimitClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitLimitClause) {
            return visitor.visitLimitClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PartitionByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PARTITION(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_PARTITION, 0)!;
    }
    public KW_BY(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_BY, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_partitionByClause;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterPartitionByClause) {
             listener.enterPartitionByClause(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitPartitionByClause) {
             listener.exitPartitionByClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitPartitionByClause) {
            return visitor.visitPartitionByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QuantifiersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ASTERISK_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.ASTERISK_SIGN, 0);
    }
    public ADD_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.ADD_SIGN, 0);
    }
    public QUESTION_MARK_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.QUESTION_MARK_SIGN, 0);
    }
    public LB_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.LB_BRACKET, 0);
    }
    public DIG_LITERAL(): antlr.TerminalNode[];
    public DIG_LITERAL(i: number): antlr.TerminalNode | null;
    public DIG_LITERAL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.DIG_LITERAL);
    	} else {
    		return this.getToken(FlinkSQLParser.DIG_LITERAL, i);
    	}
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.COMMA, 0);
    }
    public RB_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.RB_BRACKET, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_quantifiers;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterQuantifiers) {
             listener.enterQuantifiers(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitQuantifiers) {
             listener.exitQuantifiers(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitQuantifiers) {
            return visitor.visitQuantifiers(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MeasuresClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_MEASURES(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_MEASURES, 0)!;
    }
    public projectItemDefinition(): ProjectItemDefinitionContext[];
    public projectItemDefinition(i: number): ProjectItemDefinitionContext | null;
    public projectItemDefinition(i?: number): ProjectItemDefinitionContext[] | ProjectItemDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ProjectItemDefinitionContext);
        }

        return this.getRuleContext(i, ProjectItemDefinitionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_measuresClause;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterMeasuresClause) {
             listener.enterMeasuresClause(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitMeasuresClause) {
             listener.exitMeasuresClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitMeasuresClause) {
            return visitor.visitMeasuresClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PatternDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PATTERN(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_PATTERN, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public patternVariable(): PatternVariableContext[];
    public patternVariable(i: number): PatternVariableContext | null;
    public patternVariable(i?: number): PatternVariableContext[] | PatternVariableContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PatternVariableContext);
        }

        return this.getRuleContext(i, PatternVariableContext);
    }
    public withinClause(): WithinClauseContext | null {
        return this.getRuleContext(0, WithinClauseContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_patternDefinition;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterPatternDefinition) {
             listener.enterPatternDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitPatternDefinition) {
             listener.exitPatternDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitPatternDefinition) {
            return visitor.visitPatternDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PatternVariableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public unquotedIdentifier(): UnquotedIdentifierContext {
        return this.getRuleContext(0, UnquotedIdentifierContext)!;
    }
    public quantifiers(): QuantifiersContext | null {
        return this.getRuleContext(0, QuantifiersContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_patternVariable;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterPatternVariable) {
             listener.enterPatternVariable(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitPatternVariable) {
             listener.exitPatternVariable(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitPatternVariable) {
            return visitor.visitPatternVariable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OutputModeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ALL, 0);
    }
    public KW_ROWS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ROWS, 0);
    }
    public KW_PER(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_PER, 0)!;
    }
    public KW_MATCH(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_MATCH, 0)!;
    }
    public KW_ONE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ONE, 0);
    }
    public KW_ROW(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ROW, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_outputMode;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterOutputMode) {
             listener.enterOutputMode(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitOutputMode) {
             listener.exitOutputMode(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitOutputMode) {
            return visitor.visitOutputMode(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AfterMatchStrategyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_AFTER(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_AFTER, 0)!;
    }
    public KW_MATCH(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_MATCH, 0)!;
    }
    public KW_SKIP(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_SKIP, 0)!;
    }
    public KW_PAST(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_PAST, 0);
    }
    public KW_LAST(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_LAST, 0);
    }
    public KW_ROW(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ROW, 0);
    }
    public KW_TO(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TO, 0);
    }
    public KW_NEXT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_NEXT, 0);
    }
    public unquotedIdentifier(): UnquotedIdentifierContext | null {
        return this.getRuleContext(0, UnquotedIdentifierContext);
    }
    public KW_FIRST(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_FIRST, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_afterMatchStrategy;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterAfterMatchStrategy) {
             listener.enterAfterMatchStrategy(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitAfterMatchStrategy) {
             listener.exitAfterMatchStrategy(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitAfterMatchStrategy) {
            return visitor.visitAfterMatchStrategy(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PatternVariablesDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DEFINE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_DEFINE, 0)!;
    }
    public projectItemDefinition(): ProjectItemDefinitionContext[];
    public projectItemDefinition(i: number): ProjectItemDefinitionContext | null;
    public projectItemDefinition(i?: number): ProjectItemDefinitionContext[] | ProjectItemDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ProjectItemDefinitionContext);
        }

        return this.getRuleContext(i, ProjectItemDefinitionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_patternVariablesDefinition;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterPatternVariablesDefinition) {
             listener.enterPatternVariablesDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitPatternVariablesDefinition) {
             listener.exitPatternVariablesDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitPatternVariablesDefinition) {
            return visitor.visitPatternVariablesDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WindowFrameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_RANGE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_RANGE, 0);
    }
    public KW_BETWEEN(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_BETWEEN, 0)!;
    }
    public timeIntervalExpression(): TimeIntervalExpressionContext | null {
        return this.getRuleContext(0, TimeIntervalExpressionContext);
    }
    public frameBound(): FrameBoundContext {
        return this.getRuleContext(0, FrameBoundContext)!;
    }
    public KW_ROWS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ROWS, 0);
    }
    public DIG_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.DIG_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_windowFrame;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterWindowFrame) {
             listener.enterWindowFrame(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitWindowFrame) {
             listener.exitWindowFrame(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitWindowFrame) {
            return visitor.visitWindowFrame(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FrameBoundContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PRECEDING(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_PRECEDING, 0)!;
    }
    public KW_AND(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_AND, 0)!;
    }
    public KW_CURRENT(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_CURRENT, 0)!;
    }
    public KW_ROW(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ROW, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_frameBound;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterFrameBound) {
             listener.enterFrameBound(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitFrameBound) {
             listener.exitFrameBound(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitFrameBound) {
            return visitor.visitFrameBound(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WithinClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WITHIN(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_WITHIN, 0)!;
    }
    public timeIntervalExpression(): TimeIntervalExpressionContext {
        return this.getRuleContext(0, TimeIntervalExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_withinClause;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterWithinClause) {
             listener.enterWithinClause(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitWithinClause) {
             listener.exitWithinClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitWithinClause) {
            return visitor.visitWithinClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AnalyzePartitionDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PARTITION(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_PARTITION, 0)!;
    }
    public tableCanHasKeyPropertyList(): TableCanHasKeyPropertyListContext {
        return this.getRuleContext(0, TableCanHasKeyPropertyListContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_analyzePartitionDefinition;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterAnalyzePartitionDefinition) {
             listener.enterAnalyzePartitionDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitAnalyzePartitionDefinition) {
             listener.exitAnalyzePartitionDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitAnalyzePartitionDefinition) {
            return visitor.visitAnalyzePartitionDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SelfDefinitionClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PERIOD(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_PERIOD, 0)!;
    }
    public KW_FOR(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_FOR, 0)!;
    }
    public KW_SYSTEM_TIME(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_SYSTEM_TIME, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_selfDefinitionClause;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterSelfDefinitionClause) {
             listener.enterSelfDefinitionClause(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitSelfDefinitionClause) {
             listener.exitSelfDefinitionClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitSelfDefinitionClause) {
            return visitor.visitSelfDefinitionClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PartitionDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PARTITIONED(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_PARTITIONED, 0)!;
    }
    public KW_BY(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_BY, 0)!;
    }
    public transformList(): TransformListContext {
        return this.getRuleContext(0, TransformListContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_partitionDefinition;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterPartitionDefinition) {
             listener.enterPartitionDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitPartitionDefinition) {
             listener.exitPartitionDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitPartitionDefinition) {
            return visitor.visitPartitionDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TransformListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public transform(): TransformContext[];
    public transform(i: number): TransformContext | null;
    public transform(i?: number): TransformContext[] | TransformContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TransformContext);
        }

        return this.getRuleContext(i, TransformContext);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_transformList;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterTransformList) {
             listener.enterTransformList(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitTransformList) {
             listener.exitTransformList(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitTransformList) {
            return visitor.visitTransformList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TransformContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_transform;
    }
    public override copyFrom(ctx: TransformContext): void {
        super.copyFrom(ctx);
    }
}
export class IdentityTransformContext extends TransformContext {
    public constructor(ctx: TransformContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterIdentityTransform) {
             listener.enterIdentityTransform(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitIdentityTransform) {
             listener.exitIdentityTransform(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitIdentityTransform) {
            return visitor.visitIdentityTransform(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ApplyTransformContext extends TransformContext {
    public _transformName?: IdentifierContext;
    public constructor(ctx: TransformContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public transformArgument(): TransformArgumentContext[];
    public transformArgument(i: number): TransformArgumentContext | null;
    public transformArgument(i?: number): TransformArgumentContext[] | TransformArgumentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TransformArgumentContext);
        }

        return this.getRuleContext(i, TransformArgumentContext);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterApplyTransform) {
             listener.enterApplyTransform(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitApplyTransform) {
             listener.exitApplyTransform(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitApplyTransform) {
            return visitor.visitApplyTransform(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TransformArgumentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public constant(): ConstantContext | null {
        return this.getRuleContext(0, ConstantContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_transformArgument;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterTransformArgument) {
             listener.enterTransformArgument(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitTransformArgument) {
             listener.exitTransformArgument(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitTransformArgument) {
            return visitor.visitTransformArgument(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LikeDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_LIKE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_LIKE, 0)!;
    }
    public tablePath(): TablePathContext {
        return this.getRuleContext(0, TablePathContext)!;
    }
    public LR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0);
    }
    public likeOption(): LikeOptionContext[];
    public likeOption(i: number): LikeOptionContext | null;
    public likeOption(i?: number): LikeOptionContext[] | LikeOptionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LikeOptionContext);
        }

        return this.getRuleContext(i, LikeOptionContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_likeDefinition;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterLikeDefinition) {
             listener.enterLikeDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitLikeDefinition) {
             listener.exitLikeDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitLikeDefinition) {
            return visitor.visitLikeDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DistributedContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DISTRIBUTED(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_DISTRIBUTED, 0)!;
    }
    public KW_BY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_BY, 0);
    }
    public LR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public RR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0);
    }
    public KW_INTO(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_INTO, 0);
    }
    public decimalLiteral(): DecimalLiteralContext | null {
        return this.getRuleContext(0, DecimalLiteralContext);
    }
    public KW_BUCKETS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_BUCKETS, 0);
    }
    public KW_HASH(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_HASH, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_distributed;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterDistributed) {
             listener.enterDistributed(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitDistributed) {
             listener.exitDistributed(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitDistributed) {
            return visitor.visitDistributed(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DistributionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DISTRIBUTION(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_DISTRIBUTION, 0)!;
    }
    public KW_BY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_BY, 0);
    }
    public LR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public RR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0);
    }
    public KW_INTO(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_INTO, 0);
    }
    public decimalLiteral(): DecimalLiteralContext | null {
        return this.getRuleContext(0, DecimalLiteralContext);
    }
    public KW_BUCKETS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_BUCKETS, 0);
    }
    public KW_HASH(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_HASH, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_distribution;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterDistribution) {
             listener.enterDistribution(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitDistribution) {
             listener.exitDistribution(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitDistribution) {
            return visitor.visitDistribution(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LikeOptionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_INCLUDING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_INCLUDING, 0);
    }
    public KW_EXCLUDING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_EXCLUDING, 0);
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ALL, 0);
    }
    public KW_CONSTRAINTS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_CONSTRAINTS, 0);
    }
    public KW_PARTITIONS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_PARTITIONS, 0);
    }
    public KW_OVERWRITING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_OVERWRITING, 0);
    }
    public KW_GENERATED(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_GENERATED, 0);
    }
    public KW_OPTIONS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_OPTIONS, 0);
    }
    public KW_WATERMARKS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_WATERMARKS, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_likeOption;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterLikeOption) {
             listener.enterLikeOption(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitLikeOption) {
             listener.exitLikeOption(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitLikeOption) {
            return visitor.visitLikeOption(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnOptionDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public physicalColumnDefinition(): PhysicalColumnDefinitionContext | null {
        return this.getRuleContext(0, PhysicalColumnDefinitionContext);
    }
    public metadataColumnDefinition(): MetadataColumnDefinitionContext | null {
        return this.getRuleContext(0, MetadataColumnDefinitionContext);
    }
    public computedColumnDefinition(): ComputedColumnDefinitionContext | null {
        return this.getRuleContext(0, ComputedColumnDefinitionContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_columnOptionDefinition;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterColumnOptionDefinition) {
             listener.enterColumnOptionDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitColumnOptionDefinition) {
             listener.exitColumnOptionDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitColumnOptionDefinition) {
            return visitor.visitColumnOptionDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PhysicalColumnDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnName(): ColumnNameContext {
        return this.getRuleContext(0, ColumnNameContext)!;
    }
    public columnType(): ColumnTypeContext {
        return this.getRuleContext(0, ColumnTypeContext)!;
    }
    public columnConstraint(): ColumnConstraintContext | null {
        return this.getRuleContext(0, ColumnConstraintContext);
    }
    public commentSpec(): CommentSpecContext | null {
        return this.getRuleContext(0, CommentSpecContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_physicalColumnDefinition;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterPhysicalColumnDefinition) {
             listener.enterPhysicalColumnDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitPhysicalColumnDefinition) {
             listener.exitPhysicalColumnDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitPhysicalColumnDefinition) {
            return visitor.visitPhysicalColumnDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComputedColumnExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_computedColumnExpression;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterComputedColumnExpression) {
             listener.enterComputedColumnExpression(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitComputedColumnExpression) {
             listener.exitComputedColumnExpression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitComputedColumnExpression) {
            return visitor.visitComputedColumnExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WatermarkDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WATERMARK(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_WATERMARK, 0)!;
    }
    public KW_FOR(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_FOR, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_AS, 0)!;
    }
    public uid(): UidContext[];
    public uid(i: number): UidContext | null;
    public uid(i?: number): UidContext[] | UidContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UidContext);
        }

        return this.getRuleContext(i, UidContext);
    }
    public timeIntervalExpression(): TimeIntervalExpressionContext | null {
        return this.getRuleContext(0, TimeIntervalExpressionContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_watermarkDefinition;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterWatermarkDefinition) {
             listener.enterWatermarkDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitWatermarkDefinition) {
             listener.exitWatermarkDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitWatermarkDefinition) {
            return visitor.visitWatermarkDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableConstraintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PRIMARY(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_PRIMARY, 0)!;
    }
    public KW_KEY(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_KEY, 0)!;
    }
    public columnNameList(): ColumnNameListContext {
        return this.getRuleContext(0, ColumnNameListContext)!;
    }
    public KW_NOT(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_NOT, 0)!;
    }
    public KW_ENFORCED(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ENFORCED, 0)!;
    }
    public KW_CONSTRAINT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_CONSTRAINT, 0);
    }
    public constraintName(): ConstraintNameContext | null {
        return this.getRuleContext(0, ConstraintNameContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_tableConstraint;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterTableConstraint) {
             listener.enterTableConstraint(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitTableConstraint) {
             listener.exitTableConstraint(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitTableConstraint) {
            return visitor.visitTableConstraint(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConstraintNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_constraintName;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterConstraintName) {
             listener.enterConstraintName(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitConstraintName) {
             listener.exitConstraintName(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitConstraintName) {
            return visitor.visitConstraintName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ValuesDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_VALUES(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_VALUES, 0)!;
    }
    public valuesRowDefinition(): ValuesRowDefinitionContext[];
    public valuesRowDefinition(i: number): ValuesRowDefinitionContext | null;
    public valuesRowDefinition(i?: number): ValuesRowDefinitionContext[] | ValuesRowDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValuesRowDefinitionContext);
        }

        return this.getRuleContext(i, ValuesRowDefinitionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_valuesDefinition;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterValuesDefinition) {
             listener.enterValuesDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitValuesDefinition) {
             listener.exitValuesDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitValuesDefinition) {
            return visitor.visitValuesDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ValuesRowDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public constant(): ConstantContext[];
    public constant(i: number): ConstantContext | null;
    public constant(i?: number): ConstantContext[] | ConstantContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ConstantContext);
        }

        return this.getRuleContext(i, ConstantContext);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_valuesRowDefinition;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterValuesRowDefinition) {
             listener.enterValuesRowDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitValuesRowDefinition) {
             listener.exitValuesRowDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitValuesRowDefinition) {
            return visitor.visitValuesRowDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LengthOneDimensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public decimalLiteral(): DecimalLiteralContext {
        return this.getRuleContext(0, DecimalLiteralContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_lengthOneDimension;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterLengthOneDimension) {
             listener.enterLengthOneDimension(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitLengthOneDimension) {
             listener.exitLengthOneDimension(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitLengthOneDimension) {
            return visitor.visitLengthOneDimension(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LengthTwoOptionalDimensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public decimalLiteral(): DecimalLiteralContext[];
    public decimalLiteral(i: number): DecimalLiteralContext | null;
    public decimalLiteral(i?: number): DecimalLiteralContext[] | DecimalLiteralContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DecimalLiteralContext);
        }

        return this.getRuleContext(i, DecimalLiteralContext);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_lengthTwoOptionalDimension;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterLengthTwoOptionalDimension) {
             listener.enterLengthTwoOptionalDimension(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitLengthTwoOptionalDimension) {
             listener.exitLengthTwoOptionalDimension(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitLengthTwoOptionalDimension) {
            return visitor.visitLengthTwoOptionalDimension(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LengthTwoStringDimensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public stringLiteral(): StringLiteralContext[];
    public stringLiteral(i: number): StringLiteralContext | null;
    public stringLiteral(i?: number): StringLiteralContext[] | StringLiteralContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StringLiteralContext);
        }

        return this.getRuleContext(i, StringLiteralContext);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_lengthTwoStringDimension;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterLengthTwoStringDimension) {
             listener.enterLengthTwoStringDimension(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitLengthTwoStringDimension) {
             listener.exitLengthTwoStringDimension(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitLengthTwoStringDimension) {
            return visitor.visitLengthTwoStringDimension(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LengthOneTypeDimensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_lengthOneTypeDimension;
    }
    public override copyFrom(ctx: LengthOneTypeDimensionContext): void {
        super.copyFrom(ctx);
    }
}
export class LengthSymbolsTypeDimensionContext extends LengthOneTypeDimensionContext {
    public constructor(ctx: LengthOneTypeDimensionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LESS_SYMBOL(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LESS_SYMBOL, 0)!;
    }
    public columnType(): ColumnTypeContext[];
    public columnType(i: number): ColumnTypeContext | null;
    public columnType(i?: number): ColumnTypeContext[] | ColumnTypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnTypeContext);
        }

        return this.getRuleContext(i, ColumnTypeContext);
    }
    public GREATER_SYMBOL(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.GREATER_SYMBOL, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterLengthSymbolsTypeDimension) {
             listener.enterLengthSymbolsTypeDimension(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitLengthSymbolsTypeDimension) {
             listener.exitLengthSymbolsTypeDimension(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitLengthSymbolsTypeDimension) {
            return visitor.visitLengthSymbolsTypeDimension(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MapTypeDimensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LESS_SYMBOL(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LESS_SYMBOL, 0)!;
    }
    public columnType(): ColumnTypeContext[];
    public columnType(i: number): ColumnTypeContext | null;
    public columnType(i?: number): ColumnTypeContext[] | ColumnTypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnTypeContext);
        }

        return this.getRuleContext(i, ColumnTypeContext);
    }
    public GREATER_SYMBOL(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.GREATER_SYMBOL, 0)!;
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_mapTypeDimension;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterMapTypeDimension) {
             listener.enterMapTypeDimension(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitMapTypeDimension) {
             listener.exitMapTypeDimension(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitMapTypeDimension) {
            return visitor.visitMapTypeDimension(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RowTypeDimensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_rowTypeDimension;
    }
    public override copyFrom(ctx: RowTypeDimensionContext): void {
        super.copyFrom(ctx);
    }
}
export class RowSymbolsTypeDimensionContext extends RowTypeDimensionContext {
    public constructor(ctx: RowTypeDimensionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LESS_SYMBOL(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LESS_SYMBOL, 0)!;
    }
    public columnName(): ColumnNameContext[];
    public columnName(i: number): ColumnNameContext | null;
    public columnName(i?: number): ColumnNameContext[] | ColumnNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnNameContext);
        }

        return this.getRuleContext(i, ColumnNameContext);
    }
    public columnType(): ColumnTypeContext[];
    public columnType(i: number): ColumnTypeContext | null;
    public columnType(i?: number): ColumnTypeContext[] | ColumnTypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnTypeContext);
        }

        return this.getRuleContext(i, ColumnTypeContext);
    }
    public GREATER_SYMBOL(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.GREATER_SYMBOL, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterRowSymbolsTypeDimension) {
             listener.enterRowSymbolsTypeDimension(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitRowSymbolsTypeDimension) {
             listener.exitRowSymbolsTypeDimension(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitRowSymbolsTypeDimension) {
            return visitor.visitRowSymbolsTypeDimension(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnConstraintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PRIMARY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_PRIMARY, 0);
    }
    public KW_KEY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_KEY, 0);
    }
    public KW_CONSTRAINT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_CONSTRAINT, 0);
    }
    public constraintName(): ConstraintNameContext | null {
        return this.getRuleContext(0, ConstraintNameContext);
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_NOT, 0);
    }
    public KW_ENFORCED(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ENFORCED, 0);
    }
    public KW_NULL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_NULL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_columnConstraint;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterColumnConstraint) {
             listener.enterColumnConstraint(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitColumnConstraint) {
             listener.exitColumnConstraint(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitColumnConstraint) {
            return visitor.visitColumnConstraint(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CommentSpecContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_COMMENT(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_COMMENT, 0)!;
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.STRING_LITERAL, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_commentSpec;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterCommentSpec) {
             listener.enterCommentSpec(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitCommentSpec) {
             listener.exitCommentSpec(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitCommentSpec) {
            return visitor.visitCommentSpec(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MetadataColumnDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnName(): ColumnNameContext {
        return this.getRuleContext(0, ColumnNameContext)!;
    }
    public columnType(): ColumnTypeContext {
        return this.getRuleContext(0, ColumnTypeContext)!;
    }
    public KW_METADATA(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_METADATA, 0)!;
    }
    public KW_FROM(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_FROM, 0);
    }
    public metadataKey(): MetadataKeyContext | null {
        return this.getRuleContext(0, MetadataKeyContext);
    }
    public KW_VIRTUAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_VIRTUAL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_metadataColumnDefinition;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterMetadataColumnDefinition) {
             listener.enterMetadataColumnDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitMetadataColumnDefinition) {
             listener.exitMetadataColumnDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitMetadataColumnDefinition) {
            return visitor.visitMetadataColumnDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MetadataKeyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.STRING_LITERAL, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_metadataKey;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterMetadataKey) {
             listener.enterMetadataKey(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitMetadataKey) {
             listener.exitMetadataKey(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitMetadataKey) {
            return visitor.visitMetadataKey(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComputedColumnDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnName(): ColumnNameContext {
        return this.getRuleContext(0, ColumnNameContext)!;
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_AS, 0)!;
    }
    public computedColumnExpression(): ComputedColumnExpressionContext {
        return this.getRuleContext(0, ComputedColumnExpressionContext)!;
    }
    public commentSpec(): CommentSpecContext | null {
        return this.getRuleContext(0, CommentSpecContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_computedColumnDefinition;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterComputedColumnDefinition) {
             listener.enterComputedColumnDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitComputedColumnDefinition) {
             listener.exitComputedColumnDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitComputedColumnDefinition) {
            return visitor.visitComputedColumnDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public uid(): UidContext | null {
        return this.getRuleContext(0, UidContext);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_columnName;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterColumnName) {
             listener.enterColumnName(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitColumnName) {
             listener.exitColumnName(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitColumnName) {
            return visitor.visitColumnName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnNameListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0);
    }
    public columnName(): ColumnNameContext[];
    public columnName(i: number): ColumnNameContext | null;
    public columnName(i?: number): ColumnNameContext[] | ColumnNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnNameContext);
        }

        return this.getRuleContext(i, ColumnNameContext);
    }
    public RR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_columnNameList;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterColumnNameList) {
             listener.enterColumnNameList(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitColumnNameList) {
             listener.exitColumnNameList(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitColumnNameList) {
            return visitor.visitColumnNameList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnTypeContext extends antlr.ParserRuleContext {
    public _typeName?: Token | null;
    public _type_?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DATE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DATE, 0);
    }
    public KW_BOOLEAN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_BOOLEAN, 0);
    }
    public KW_NULL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_NULL, 0);
    }
    public KW_CHAR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_CHAR, 0);
    }
    public KW_VARCHAR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_VARCHAR, 0);
    }
    public KW_STRING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_STRING, 0);
    }
    public KW_BINARY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_BINARY, 0);
    }
    public KW_VARBINARY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_VARBINARY, 0);
    }
    public KW_BYTES(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_BYTES, 0);
    }
    public KW_TINYINT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TINYINT, 0);
    }
    public KW_SMALLINT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SMALLINT, 0);
    }
    public KW_INT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_INT, 0);
    }
    public KW_INTEGER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_INTEGER, 0);
    }
    public KW_BIGINT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_BIGINT, 0);
    }
    public KW_TIME(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TIME, 0);
    }
    public KW_TIMESTAMP_LTZ(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TIMESTAMP_LTZ, 0);
    }
    public KW_DATETIME(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DATETIME, 0);
    }
    public lengthOneDimension(): LengthOneDimensionContext | null {
        return this.getRuleContext(0, LengthOneDimensionContext);
    }
    public KW_TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TIMESTAMP, 0);
    }
    public KW_ZONE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ZONE, 0);
    }
    public KW_WITHOUT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_WITHOUT, 0);
    }
    public KW_WITH(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_WITH, 0);
    }
    public KW_LOCAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_LOCAL, 0);
    }
    public KW_TIMESTAMP_3(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TIMESTAMP_3, 0);
    }
    public KW_TIMESTAMP_6(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TIMESTAMP_6, 0);
    }
    public KW_TIMESTAMP_9(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TIMESTAMP_9, 0);
    }
    public KW_DECIMAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DECIMAL, 0);
    }
    public KW_DEC(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DEC, 0);
    }
    public KW_NUMERIC(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_NUMERIC, 0);
    }
    public KW_FLOAT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_FLOAT, 0);
    }
    public KW_DOUBLE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DOUBLE, 0);
    }
    public lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext | null {
        return this.getRuleContext(0, LengthTwoOptionalDimensionContext);
    }
    public KW_ARRAY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ARRAY, 0);
    }
    public KW_MULTISET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_MULTISET, 0);
    }
    public lengthOneTypeDimension(): LengthOneTypeDimensionContext | null {
        return this.getRuleContext(0, LengthOneTypeDimensionContext);
    }
    public KW_MAP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_MAP, 0);
    }
    public mapTypeDimension(): MapTypeDimensionContext | null {
        return this.getRuleContext(0, MapTypeDimensionContext);
    }
    public KW_ROW(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ROW, 0);
    }
    public rowTypeDimension(): RowTypeDimensionContext | null {
        return this.getRuleContext(0, RowTypeDimensionContext);
    }
    public KW_RAW(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_RAW, 0);
    }
    public lengthTwoStringDimension(): LengthTwoStringDimensionContext | null {
        return this.getRuleContext(0, LengthTwoStringDimensionContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_columnType;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterColumnType) {
             listener.enterColumnType(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitColumnType) {
             listener.exitColumnType(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitColumnType) {
            return visitor.visitColumnType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getRuleContext(0, BooleanExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_expression;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterExpression) {
             listener.enterExpression(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitExpression) {
             listener.exitExpression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BooleanExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_booleanExpression;
    }
    public override copyFrom(ctx: BooleanExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class LogicalNotContext extends BooleanExpressionContext {
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_NOT(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_NOT, 0)!;
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getRuleContext(0, BooleanExpressionContext)!;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterLogicalNot) {
             listener.enterLogicalNot(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitLogicalNot) {
             listener.exitLogicalNot(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitLogicalNot) {
            return visitor.visitLogicalNot(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PredicatedContext extends BooleanExpressionContext {
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public predicate(): PredicateContext | null {
        return this.getRuleContext(0, PredicateContext);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterPredicated) {
             listener.enterPredicated(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitPredicated) {
             listener.exitPredicated(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitPredicated) {
            return visitor.visitPredicated(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExistsContext extends BooleanExpressionContext {
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_EXISTS(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_EXISTS, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public queryStatement(): QueryStatementContext {
        return this.getRuleContext(0, QueryStatementContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterExists) {
             listener.enterExists(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitExists) {
             listener.exitExists(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitExists) {
            return visitor.visitExists(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogicalNestedContext extends BooleanExpressionContext {
    public _kind?: Token | null;
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getRuleContext(0, BooleanExpressionContext)!;
    }
    public KW_IS(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_IS, 0)!;
    }
    public KW_TRUE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TRUE, 0);
    }
    public KW_FALSE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_FALSE, 0);
    }
    public KW_UNKNOWN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_UNKNOWN, 0);
    }
    public KW_NULL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_NULL, 0);
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_NOT, 0);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterLogicalNested) {
             listener.enterLogicalNested(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitLogicalNested) {
             listener.exitLogicalNested(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitLogicalNested) {
            return visitor.visitLogicalNested(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogicalBinaryContext extends BooleanExpressionContext {
    public _left?: BooleanExpressionContext;
    public _operator?: Token | null;
    public _right?: BooleanExpressionContext;
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public booleanExpression(): BooleanExpressionContext[];
    public booleanExpression(i: number): BooleanExpressionContext | null;
    public booleanExpression(i?: number): BooleanExpressionContext[] | BooleanExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BooleanExpressionContext);
        }

        return this.getRuleContext(i, BooleanExpressionContext);
    }
    public KW_AND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_AND, 0);
    }
    public KW_OR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_OR, 0);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterLogicalBinary) {
             listener.enterLogicalBinary(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitLogicalBinary) {
             listener.exitLogicalBinary(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitLogicalBinary) {
            return visitor.visitLogicalBinary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PredicateContext extends antlr.ParserRuleContext {
    public _kind?: Token | null;
    public _lower?: ValueExpressionContext;
    public _upper?: ValueExpressionContext;
    public _pattern?: ValueExpressionContext;
    public _right?: ValueExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_AND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_AND, 0);
    }
    public KW_BETWEEN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_BETWEEN, 0);
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_NOT, 0);
    }
    public KW_ASYMMETRIC(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ASYMMETRIC, 0);
    }
    public KW_SYMMETRIC(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SYMMETRIC, 0);
    }
    public LR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public RR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0);
    }
    public KW_IN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_IN, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public queryStatement(): QueryStatementContext | null {
        return this.getRuleContext(0, QueryStatementContext);
    }
    public KW_EXISTS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_EXISTS, 0);
    }
    public KW_RLIKE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_RLIKE, 0);
    }
    public likePredicate(): LikePredicateContext | null {
        return this.getRuleContext(0, LikePredicateContext);
    }
    public KW_IS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_IS, 0);
    }
    public KW_TRUE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TRUE, 0);
    }
    public KW_FALSE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_FALSE, 0);
    }
    public KW_UNKNOWN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_UNKNOWN, 0);
    }
    public KW_NULL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_NULL, 0);
    }
    public KW_FROM(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_FROM, 0);
    }
    public KW_DISTINCT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DISTINCT, 0);
    }
    public KW_TO(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TO, 0);
    }
    public KW_SIMILAR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SIMILAR, 0);
    }
    public KW_ESCAPE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ESCAPE, 0);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_predicate;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterPredicate) {
             listener.enterPredicate(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitPredicate) {
             listener.exitPredicate(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitPredicate) {
            return visitor.visitPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LikePredicateContext extends antlr.ParserRuleContext {
    public _kind?: Token | null;
    public _quantifier?: Token | null;
    public _pattern?: ValueExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_LIKE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_LIKE, 0)!;
    }
    public KW_ANY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ANY, 0);
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ALL, 0);
    }
    public LR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_NOT, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public valueExpression(): ValueExpressionContext | null {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    public KW_ESCAPE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ESCAPE, 0);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_likePredicate;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterLikePredicate) {
             listener.enterLikePredicate(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitLikePredicate) {
             listener.exitLikePredicate(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitLikePredicate) {
            return visitor.visitLikePredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ValueExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_valueExpression;
    }
    public override copyFrom(ctx: ValueExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class ValueExpressionDefaultContext extends ValueExpressionContext {
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public primaryExpression(): PrimaryExpressionContext {
        return this.getRuleContext(0, PrimaryExpressionContext)!;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterValueExpressionDefault) {
             listener.enterValueExpressionDefault(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitValueExpressionDefault) {
             listener.exitValueExpressionDefault(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitValueExpressionDefault) {
            return visitor.visitValueExpressionDefault(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ComparisonContext extends ValueExpressionContext {
    public _left?: ValueExpressionContext;
    public _right?: ValueExpressionContext;
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public comparisonOperator(): ComparisonOperatorContext {
        return this.getRuleContext(0, ComparisonOperatorContext)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterComparison) {
             listener.enterComparison(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitComparison) {
             listener.exitComparison(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitComparison) {
            return visitor.visitComparison(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArithmeticBinaryContext extends ValueExpressionContext {
    public _left?: ValueExpressionContext;
    public _operator?: Token | null;
    public _right?: ValueExpressionContext;
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public ASTERISK_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.ASTERISK_SIGN, 0);
    }
    public SLASH_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.SLASH_SIGN, 0);
    }
    public PENCENT_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.PENCENT_SIGN, 0);
    }
    public KW_DIV(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DIV, 0);
    }
    public ADD_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.ADD_SIGN, 0);
    }
    public HYPNEN_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.HYPNEN_SIGN, 0);
    }
    public DOUBLE_VERTICAL_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.DOUBLE_VERTICAL_SIGN, 0);
    }
    public BIT_AND_OP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.BIT_AND_OP, 0);
    }
    public BIT_XOR_OP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.BIT_XOR_OP, 0);
    }
    public BIT_OR_OP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.BIT_OR_OP, 0);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterArithmeticBinary) {
             listener.enterArithmeticBinary(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitArithmeticBinary) {
             listener.exitArithmeticBinary(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitArithmeticBinary) {
            return visitor.visitArithmeticBinary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArithmeticUnaryContext extends ValueExpressionContext {
    public _operator?: Token | null;
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public HYPNEN_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.HYPNEN_SIGN, 0);
    }
    public ADD_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.ADD_SIGN, 0);
    }
    public BIT_NOT_OP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.BIT_NOT_OP, 0);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterArithmeticUnary) {
             listener.enterArithmeticUnary(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitArithmeticUnary) {
             listener.exitArithmeticUnary(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitArithmeticUnary) {
            return visitor.visitArithmeticUnary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrimaryExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_primaryExpression;
    }
    public override copyFrom(ctx: PrimaryExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class DereferenceContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public dereferenceDefinition(): DereferenceDefinitionContext {
        return this.getRuleContext(0, DereferenceDefinitionContext)!;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterDereference) {
             listener.enterDereference(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitDereference) {
             listener.exitDereference(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitDereference) {
            return visitor.visitDereference(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SimpleCaseContext extends PrimaryExpressionContext {
    public _value?: ExpressionContext;
    public _elseExpression?: ExpressionContext;
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CASE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_CASE, 0)!;
    }
    public KW_END(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_END, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public whenClause(): WhenClauseContext[];
    public whenClause(i: number): WhenClauseContext | null;
    public whenClause(i?: number): WhenClauseContext[] | WhenClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(WhenClauseContext);
        }

        return this.getRuleContext(i, WhenClauseContext);
    }
    public KW_ELSE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ELSE, 0);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterSimpleCase) {
             listener.enterSimpleCase(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitSimpleCase) {
             listener.exitSimpleCase(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitSimpleCase) {
            return visitor.visitSimpleCase(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnReferenceContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterColumnReference) {
             listener.enterColumnReference(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitColumnReference) {
             listener.exitColumnReference(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitColumnReference) {
            return visitor.visitColumnReference(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LastContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_LAST(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_LAST, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public KW_IGNORE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_IGNORE, 0);
    }
    public KW_NULLS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_NULLS, 0);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterLast) {
             listener.enterLast(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitLast) {
             listener.exitLast(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitLast) {
            return visitor.visitLast(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StarContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ASTERISK_SIGN(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.ASTERISK_SIGN, 0)!;
    }
    public uid(): UidContext | null {
        return this.getRuleContext(0, UidContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.DOT, 0);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterStar) {
             listener.enterStar(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitStar) {
             listener.exitStar(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitStar) {
            return visitor.visitStar(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SubscriptContext extends PrimaryExpressionContext {
    public _value?: PrimaryExpressionContext;
    public _index?: ValueExpressionContext;
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LS_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LS_BRACKET, 0)!;
    }
    public RS_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RS_BRACKET, 0)!;
    }
    public primaryExpression(): PrimaryExpressionContext {
        return this.getRuleContext(0, PrimaryExpressionContext)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterSubscript) {
             listener.enterSubscript(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitSubscript) {
             listener.exitSubscript(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitSubscript) {
            return visitor.visitSubscript(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionCallFilterContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public functionName(): FunctionNameContext {
        return this.getRuleContext(0, FunctionNameContext)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public functionParam(): FunctionParamContext {
        return this.getRuleContext(0, FunctionParamContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public setQuantifier(): SetQuantifierContext | null {
        return this.getRuleContext(0, SetQuantifierContext);
    }
    public filterClause(): FilterClauseContext | null {
        return this.getRuleContext(0, FilterClauseContext);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterFunctionCallFilter) {
             listener.enterFunctionCallFilter(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitFunctionCallFilter) {
             listener.exitFunctionCallFilter(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitFunctionCallFilter) {
            return visitor.visitFunctionCallFilter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SubqueryExpressionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public queryStatement(): QueryStatementContext {
        return this.getRuleContext(0, QueryStatementContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterSubqueryExpression) {
             listener.enterSubqueryExpression(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitSubqueryExpression) {
             listener.exitSubqueryExpression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitSubqueryExpression) {
            return visitor.visitSubqueryExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CastContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CAST(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_CAST, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_AS, 0)!;
    }
    public columnType(): ColumnTypeContext {
        return this.getRuleContext(0, ColumnTypeContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterCast) {
             listener.enterCast(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitCast) {
             listener.exitCast(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitCast) {
            return visitor.visitCast(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ConstantDefaultContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public constant(): ConstantContext {
        return this.getRuleContext(0, ConstantContext)!;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterConstantDefault) {
             listener.enterConstantDefault(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitConstantDefault) {
             listener.exitConstantDefault(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitConstantDefault) {
            return visitor.visitConstantDefault(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class EmptyExpressionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterEmptyExpression) {
             listener.enterEmptyExpression(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitEmptyExpression) {
             listener.exitEmptyExpression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitEmptyExpression) {
            return visitor.visitEmptyExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParenthesizedExpressionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterParenthesizedExpression) {
             listener.enterParenthesizedExpression(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitParenthesizedExpression) {
             listener.exitParenthesizedExpression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitParenthesizedExpression) {
            return visitor.visitParenthesizedExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ComplexDataTypeFieldExpressionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public complexDataTypeExpression(): ComplexDataTypeExpressionContext {
        return this.getRuleContext(0, ComplexDataTypeExpressionContext)!;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterComplexDataTypeFieldExpression) {
             listener.enterComplexDataTypeFieldExpression(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitComplexDataTypeFieldExpression) {
             listener.exitComplexDataTypeFieldExpression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitComplexDataTypeFieldExpression) {
            return visitor.visitComplexDataTypeFieldExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionCallContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public functionName(): FunctionNameContext {
        return this.getRuleContext(0, FunctionNameContext)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public functionParam(): FunctionParamContext[];
    public functionParam(i: number): FunctionParamContext | null;
    public functionParam(i?: number): FunctionParamContext[] | FunctionParamContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FunctionParamContext);
        }

        return this.getRuleContext(i, FunctionParamContext);
    }
    public setQuantifier(): SetQuantifierContext | null {
        return this.getRuleContext(0, SetQuantifierContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public KW_TO(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TO, 0);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterFunctionCall) {
             listener.enterFunctionCall(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitFunctionCall) {
             listener.exitFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitFunctionCall) {
            return visitor.visitFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SearchedCaseContext extends PrimaryExpressionContext {
    public _elseExpression?: ExpressionContext;
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CASE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_CASE, 0)!;
    }
    public KW_END(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_END, 0)!;
    }
    public whenClause(): WhenClauseContext[];
    public whenClause(i: number): WhenClauseContext | null;
    public whenClause(i?: number): WhenClauseContext[] | WhenClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(WhenClauseContext);
        }

        return this.getRuleContext(i, WhenClauseContext);
    }
    public KW_ELSE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ELSE, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterSearchedCase) {
             listener.enterSearchedCase(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitSearchedCase) {
             listener.exitSearchedCase(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitSearchedCase) {
            return visitor.visitSearchedCase(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PositionContext extends PrimaryExpressionContext {
    public _substr?: ValueExpressionContext;
    public _str?: ValueExpressionContext;
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_POSITION(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_POSITION, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public KW_IN(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_IN, 0)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterPosition) {
             listener.enterPosition(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitPosition) {
             listener.exitPosition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitPosition) {
            return visitor.visitPosition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FirstContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_FIRST(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_FIRST, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public KW_IGNORE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_IGNORE, 0);
    }
    public KW_NULLS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_NULLS, 0);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterFirst) {
             listener.enterFirst(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitFirst) {
             listener.exitFirst(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitFirst) {
            return visitor.visitFirst(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComplexDataTypeExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public arrayExpression(): ArrayExpressionContext | null {
        return this.getRuleContext(0, ArrayExpressionContext);
    }
    public rowExpression(): RowExpressionContext | null {
        return this.getRuleContext(0, RowExpressionContext);
    }
    public mapExpression(): MapExpressionContext | null {
        return this.getRuleContext(0, MapExpressionContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_complexDataTypeExpression;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterComplexDataTypeExpression) {
             listener.enterComplexDataTypeExpression(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitComplexDataTypeExpression) {
             listener.exitComplexDataTypeExpression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitComplexDataTypeExpression) {
            return visitor.visitComplexDataTypeExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArrayExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ARRAY(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ARRAY, 0)!;
    }
    public LS_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LS_BRACKET, 0)!;
    }
    public dataTypeExpression(): DataTypeExpressionContext[];
    public dataTypeExpression(i: number): DataTypeExpressionContext | null;
    public dataTypeExpression(i?: number): DataTypeExpressionContext[] | DataTypeExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DataTypeExpressionContext);
        }

        return this.getRuleContext(i, DataTypeExpressionContext);
    }
    public RS_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RS_BRACKET, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_arrayExpression;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterArrayExpression) {
             listener.enterArrayExpression(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitArrayExpression) {
             listener.exitArrayExpression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitArrayExpression) {
            return visitor.visitArrayExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RowExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ROW(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_ROW, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public dataTypeExpression(): DataTypeExpressionContext[];
    public dataTypeExpression(i: number): DataTypeExpressionContext | null;
    public dataTypeExpression(i?: number): DataTypeExpressionContext[] | DataTypeExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DataTypeExpressionContext);
        }

        return this.getRuleContext(i, DataTypeExpressionContext);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_rowExpression;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterRowExpression) {
             listener.enterRowExpression(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitRowExpression) {
             listener.exitRowExpression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitRowExpression) {
            return visitor.visitRowExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MapExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_MAP(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_MAP, 0)!;
    }
    public LS_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LS_BRACKET, 0)!;
    }
    public dataTypeExpression(): DataTypeExpressionContext[];
    public dataTypeExpression(i: number): DataTypeExpressionContext | null;
    public dataTypeExpression(i?: number): DataTypeExpressionContext[] | DataTypeExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DataTypeExpressionContext);
        }

        return this.getRuleContext(i, DataTypeExpressionContext);
    }
    public COMMA(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.COMMA, 0)!;
    }
    public RS_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RS_BRACKET, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_mapExpression;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterMapExpression) {
             listener.enterMapExpression(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitMapExpression) {
             listener.exitMapExpression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitMapExpression) {
            return visitor.visitMapExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DataTypeExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnAlias(): ColumnAliasContext | null {
        return this.getRuleContext(0, ColumnAliasContext);
    }
    public complexDataTypeExpression(): ComplexDataTypeExpressionContext | null {
        return this.getRuleContext(0, ComplexDataTypeExpressionContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_dataTypeExpression;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterDataTypeExpression) {
             listener.enterDataTypeExpression(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitDataTypeExpression) {
             listener.exitDataTypeExpression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitDataTypeExpression) {
            return visitor.visitDataTypeExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public reservedKeywordsUsedAsFuncName(): ReservedKeywordsUsedAsFuncNameContext | null {
        return this.getRuleContext(0, ReservedKeywordsUsedAsFuncNameContext);
    }
    public nonReservedKeywords(): NonReservedKeywordsContext | null {
        return this.getRuleContext(0, NonReservedKeywordsContext);
    }
    public uid(): UidContext | null {
        return this.getRuleContext(0, UidContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_functionName;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterFunctionName) {
             listener.enterFunctionName(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitFunctionName) {
             listener.exitFunctionName(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitFunctionName) {
            return visitor.visitFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public reservedKeywordsUsedAsFuncParam(): ReservedKeywordsUsedAsFuncParamContext | null {
        return this.getRuleContext(0, ReservedKeywordsUsedAsFuncParamContext);
    }
    public timeIntervalUnit(): TimeIntervalUnitContext | null {
        return this.getRuleContext(0, TimeIntervalUnitContext);
    }
    public timePointUnit(): TimePointUnitContext | null {
        return this.getRuleContext(0, TimePointUnitContext);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public filterClause(): FilterClauseContext | null {
        return this.getRuleContext(0, FilterClauseContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_functionParam;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterFunctionParam) {
             listener.enterFunctionParam(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitFunctionParam) {
             listener.exitFunctionParam(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitFunctionParam) {
            return visitor.visitFunctionParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FilterClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_FILTER(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_FILTER, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public KW_WHERE(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_WHERE, 0)!;
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getRuleContext(0, BooleanExpressionContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_filterClause;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterFilterClause) {
             listener.enterFilterClause(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitFilterClause) {
             listener.exitFilterClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitFilterClause) {
            return visitor.visitFilterClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DereferenceDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public uid(): UidContext {
        return this.getRuleContext(0, UidContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_dereferenceDefinition;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterDereferenceDefinition) {
             listener.enterDereferenceDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitDereferenceDefinition) {
             listener.exitDereferenceDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitDereferenceDefinition) {
            return visitor.visitDereferenceDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CorrelationNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_correlationName;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterCorrelationName) {
             listener.enterCorrelationName(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitCorrelationName) {
             listener.exitCorrelationName(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitCorrelationName) {
            return visitor.visitCorrelationName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QualifiedNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public dereferenceDefinition(): DereferenceDefinitionContext | null {
        return this.getRuleContext(0, DereferenceDefinitionContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_qualifiedName;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterQualifiedName) {
             listener.enterQualifiedName(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitQualifiedName) {
             listener.exitQualifiedName(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitQualifiedName) {
            return visitor.visitQualifiedName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TimeIntervalExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_INTERVAL(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_INTERVAL, 0)!;
    }
    public errorCapturingMultiUnitsInterval(): ErrorCapturingMultiUnitsIntervalContext | null {
        return this.getRuleContext(0, ErrorCapturingMultiUnitsIntervalContext);
    }
    public errorCapturingUnitToUnitInterval(): ErrorCapturingUnitToUnitIntervalContext | null {
        return this.getRuleContext(0, ErrorCapturingUnitToUnitIntervalContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_timeIntervalExpression;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterTimeIntervalExpression) {
             listener.enterTimeIntervalExpression(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitTimeIntervalExpression) {
             listener.exitTimeIntervalExpression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitTimeIntervalExpression) {
            return visitor.visitTimeIntervalExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ErrorCapturingMultiUnitsIntervalContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public multiUnitsInterval(): MultiUnitsIntervalContext {
        return this.getRuleContext(0, MultiUnitsIntervalContext)!;
    }
    public unitToUnitInterval(): UnitToUnitIntervalContext | null {
        return this.getRuleContext(0, UnitToUnitIntervalContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_errorCapturingMultiUnitsInterval;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterErrorCapturingMultiUnitsInterval) {
             listener.enterErrorCapturingMultiUnitsInterval(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitErrorCapturingMultiUnitsInterval) {
             listener.exitErrorCapturingMultiUnitsInterval(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitErrorCapturingMultiUnitsInterval) {
            return visitor.visitErrorCapturingMultiUnitsInterval(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MultiUnitsIntervalContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public intervalValue(): IntervalValueContext[];
    public intervalValue(i: number): IntervalValueContext | null;
    public intervalValue(i?: number): IntervalValueContext[] | IntervalValueContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IntervalValueContext);
        }

        return this.getRuleContext(i, IntervalValueContext);
    }
    public timeIntervalUnit(): TimeIntervalUnitContext[];
    public timeIntervalUnit(i: number): TimeIntervalUnitContext | null;
    public timeIntervalUnit(i?: number): TimeIntervalUnitContext[] | TimeIntervalUnitContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TimeIntervalUnitContext);
        }

        return this.getRuleContext(i, TimeIntervalUnitContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_multiUnitsInterval;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterMultiUnitsInterval) {
             listener.enterMultiUnitsInterval(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitMultiUnitsInterval) {
             listener.exitMultiUnitsInterval(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitMultiUnitsInterval) {
            return visitor.visitMultiUnitsInterval(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ErrorCapturingUnitToUnitIntervalContext extends antlr.ParserRuleContext {
    public _body?: UnitToUnitIntervalContext;
    public _error1?: MultiUnitsIntervalContext;
    public _error2?: UnitToUnitIntervalContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public unitToUnitInterval(): UnitToUnitIntervalContext[];
    public unitToUnitInterval(i: number): UnitToUnitIntervalContext | null;
    public unitToUnitInterval(i?: number): UnitToUnitIntervalContext[] | UnitToUnitIntervalContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UnitToUnitIntervalContext);
        }

        return this.getRuleContext(i, UnitToUnitIntervalContext);
    }
    public multiUnitsInterval(): MultiUnitsIntervalContext | null {
        return this.getRuleContext(0, MultiUnitsIntervalContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_errorCapturingUnitToUnitInterval;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterErrorCapturingUnitToUnitInterval) {
             listener.enterErrorCapturingUnitToUnitInterval(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitErrorCapturingUnitToUnitInterval) {
             listener.exitErrorCapturingUnitToUnitInterval(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitErrorCapturingUnitToUnitInterval) {
            return visitor.visitErrorCapturingUnitToUnitInterval(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnitToUnitIntervalContext extends antlr.ParserRuleContext {
    public _value?: IntervalValueContext;
    public _from_?: TimeIntervalUnitContext;
    public _to?: TimeIntervalUnitContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TO(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_TO, 0)!;
    }
    public intervalValue(): IntervalValueContext {
        return this.getRuleContext(0, IntervalValueContext)!;
    }
    public timeIntervalUnit(): TimeIntervalUnitContext[];
    public timeIntervalUnit(i: number): TimeIntervalUnitContext | null;
    public timeIntervalUnit(i?: number): TimeIntervalUnitContext[] | TimeIntervalUnitContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TimeIntervalUnitContext);
        }

        return this.getRuleContext(i, TimeIntervalUnitContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_unitToUnitInterval;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterUnitToUnitInterval) {
             listener.enterUnitToUnitInterval(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitUnitToUnitInterval) {
             listener.exitUnitToUnitInterval(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitUnitToUnitInterval) {
            return visitor.visitUnitToUnitInterval(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IntervalValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DIG_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.DIG_LITERAL, 0);
    }
    public REAL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.REAL_LITERAL, 0);
    }
    public ADD_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.ADD_SIGN, 0);
    }
    public HYPNEN_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.HYPNEN_SIGN, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_intervalValue;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterIntervalValue) {
             listener.enterIntervalValue(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitIntervalValue) {
             listener.exitIntervalValue(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitIntervalValue) {
            return visitor.visitIntervalValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnAliasContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_AS, 0);
    }
    public identifierList(): IdentifierListContext | null {
        return this.getRuleContext(0, IdentifierListContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_columnAlias;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterColumnAlias) {
             listener.enterColumnAlias(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitColumnAlias) {
             listener.exitColumnAlias(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitColumnAlias) {
            return visitor.visitColumnAlias(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableAliasContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_AS, 0);
    }
    public identifierList(): IdentifierListContext | null {
        return this.getRuleContext(0, IdentifierListContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_tableAlias;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterTableAlias) {
             listener.enterTableAlias(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitTableAlias) {
             listener.exitTableAlias(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitTableAlias) {
            return visitor.visitTableAlias(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ErrorCapturingIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public errorCapturingIdentifierExtra(): ErrorCapturingIdentifierExtraContext {
        return this.getRuleContext(0, ErrorCapturingIdentifierExtraContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_errorCapturingIdentifier;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterErrorCapturingIdentifier) {
             listener.enterErrorCapturingIdentifier(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitErrorCapturingIdentifier) {
             listener.exitErrorCapturingIdentifier(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitErrorCapturingIdentifier) {
            return visitor.visitErrorCapturingIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ErrorCapturingIdentifierExtraContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_errorCapturingIdentifierExtra;
    }
    public override copyFrom(ctx: ErrorCapturingIdentifierExtraContext): void {
        super.copyFrom(ctx);
    }
}
export class ErrorIdentContext extends ErrorCapturingIdentifierExtraContext {
    public constructor(ctx: ErrorCapturingIdentifierExtraContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_MINUS(): antlr.TerminalNode[];
    public KW_MINUS(i: number): antlr.TerminalNode | null;
    public KW_MINUS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.KW_MINUS);
    	} else {
    		return this.getToken(FlinkSQLParser.KW_MINUS, i);
    	}
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterErrorIdent) {
             listener.enterErrorIdent(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitErrorIdent) {
             listener.exitErrorIdent(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitErrorIdent) {
            return visitor.visitErrorIdent(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RealIdentContext extends ErrorCapturingIdentifierExtraContext {
    public constructor(ctx: ErrorCapturingIdentifierExtraContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterRealIdent) {
             listener.enterRealIdent(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitRealIdent) {
             listener.exitRealIdent(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitRealIdent) {
            return visitor.visitRealIdent(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentifierListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public identifierSeq(): IdentifierSeqContext {
        return this.getRuleContext(0, IdentifierSeqContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_identifierList;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterIdentifierList) {
             listener.enterIdentifierList(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitIdentifierList) {
             listener.exitIdentifierList(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitIdentifierList) {
            return visitor.visitIdentifierList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentifierSeqContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_identifierSeq;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterIdentifierSeq) {
             listener.enterIdentifierSeq(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitIdentifierSeq) {
             listener.exitIdentifierSeq(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitIdentifierSeq) {
            return visitor.visitIdentifierSeq(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_identifier;
    }
    public override copyFrom(ctx: IdentifierContext): void {
        super.copyFrom(ctx);
    }
}
export class QuotedIdentifierAlternativeContext extends IdentifierContext {
    public constructor(ctx: IdentifierContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public quotedIdentifier(): QuotedIdentifierContext {
        return this.getRuleContext(0, QuotedIdentifierContext)!;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterQuotedIdentifierAlternative) {
             listener.enterQuotedIdentifierAlternative(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitQuotedIdentifierAlternative) {
             listener.exitQuotedIdentifierAlternative(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitQuotedIdentifierAlternative) {
            return visitor.visitQuotedIdentifierAlternative(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NonReservedKeywordsAlternativeContext extends IdentifierContext {
    public constructor(ctx: IdentifierContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public nonReservedKeywords(): NonReservedKeywordsContext {
        return this.getRuleContext(0, NonReservedKeywordsContext)!;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterNonReservedKeywordsAlternative) {
             listener.enterNonReservedKeywordsAlternative(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitNonReservedKeywordsAlternative) {
             listener.exitNonReservedKeywordsAlternative(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitNonReservedKeywordsAlternative) {
            return visitor.visitNonReservedKeywordsAlternative(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnquotedIdentifierAlternativeContext extends IdentifierContext {
    public constructor(ctx: IdentifierContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public unquotedIdentifier(): UnquotedIdentifierContext {
        return this.getRuleContext(0, UnquotedIdentifierContext)!;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterUnquotedIdentifierAlternative) {
             listener.enterUnquotedIdentifierAlternative(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitUnquotedIdentifierAlternative) {
             listener.exitUnquotedIdentifierAlternative(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitUnquotedIdentifierAlternative) {
            return visitor.visitUnquotedIdentifierAlternative(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UrefVarAlternativeContext extends IdentifierContext {
    public constructor(ctx: IdentifierContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public refVar(): RefVarContext {
        return this.getRuleContext(0, RefVarContext)!;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterUrefVarAlternative) {
             listener.enterUrefVarAlternative(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitUrefVarAlternative) {
             listener.exitUrefVarAlternative(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitUrefVarAlternative) {
            return visitor.visitUrefVarAlternative(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RefVarContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DOLLAR(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.DOLLAR, 0)!;
    }
    public LB_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LB_BRACKET, 0)!;
    }
    public unquotedIdentifier(): UnquotedIdentifierContext {
        return this.getRuleContext(0, UnquotedIdentifierContext)!;
    }
    public RB_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RB_BRACKET, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_refVar;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterRefVar) {
             listener.enterRefVar(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitRefVar) {
             listener.exitRefVar(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitRefVar) {
            return visitor.visitRefVar(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnquotedIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DIG_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.DIG_LITERAL, 0);
    }
    public ID_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.ID_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_unquotedIdentifier;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterUnquotedIdentifier) {
             listener.enterUnquotedIdentifier(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitUnquotedIdentifier) {
             listener.exitUnquotedIdentifier(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitUnquotedIdentifier) {
            return visitor.visitUnquotedIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QuotedIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.STRING_LITERAL, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_quotedIdentifier;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterQuotedIdentifier) {
             listener.enterQuotedIdentifier(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitQuotedIdentifier) {
             listener.exitQuotedIdentifier(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitQuotedIdentifier) {
            return visitor.visitQuotedIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhenClauseContext extends antlr.ParserRuleContext {
    public _condition?: ExpressionContext;
    public _result?: ExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WHEN(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_WHEN, 0)!;
    }
    public KW_THEN(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_THEN, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_whenClause;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterWhenClause) {
             listener.enterWhenClause(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitWhenClause) {
             listener.exitWhenClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitWhenClause) {
            return visitor.visitWhenClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CatalogPathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public uid(): UidContext {
        return this.getRuleContext(0, UidContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_catalogPath;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterCatalogPath) {
             listener.enterCatalogPath(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitCatalogPath) {
             listener.exitCatalogPath(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitCatalogPath) {
            return visitor.visitCatalogPath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DatabasePathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public uid(): UidContext {
        return this.getRuleContext(0, UidContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_databasePath;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterDatabasePath) {
             listener.enterDatabasePath(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitDatabasePath) {
             listener.exitDatabasePath(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitDatabasePath) {
            return visitor.visitDatabasePath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DatabasePathCreateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public uid(): UidContext {
        return this.getRuleContext(0, UidContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_databasePathCreate;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterDatabasePathCreate) {
             listener.enterDatabasePathCreate(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitDatabasePathCreate) {
             listener.exitDatabasePathCreate(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitDatabasePathCreate) {
            return visitor.visitDatabasePathCreate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TablePathCreateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public uid(): UidContext {
        return this.getRuleContext(0, UidContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_tablePathCreate;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterTablePathCreate) {
             listener.enterTablePathCreate(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitTablePathCreate) {
             listener.exitTablePathCreate(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitTablePathCreate) {
            return visitor.visitTablePathCreate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TablePathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public uid(): UidContext {
        return this.getRuleContext(0, UidContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_tablePath;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterTablePath) {
             listener.enterTablePath(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitTablePath) {
             listener.exitTablePath(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitTablePath) {
            return visitor.visitTablePath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UidContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.DOT);
    	} else {
    		return this.getToken(FlinkSQLParser.DOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_uid;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterUid) {
             listener.enterUid(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitUid) {
             listener.exitUid(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitUid) {
            return visitor.visitUid(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WithOptionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WITH(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_WITH, 0)!;
    }
    public tablePropertyList(): TablePropertyListContext {
        return this.getRuleContext(0, TablePropertyListContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_withOption;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterWithOption) {
             listener.enterWithOption(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitWithOption) {
             listener.exitWithOption(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitWithOption) {
            return visitor.visitWithOption(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IfNotExistsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_IF(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_IF, 0)!;
    }
    public KW_NOT(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_NOT, 0)!;
    }
    public KW_EXISTS(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_EXISTS, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_ifNotExists;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterIfNotExists) {
             listener.enterIfNotExists(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitIfNotExists) {
             listener.exitIfNotExists(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitIfNotExists) {
            return visitor.visitIfNotExists(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IfExistsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_IF(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_IF, 0)!;
    }
    public KW_EXISTS(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_EXISTS, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_ifExists;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterIfExists) {
             listener.enterIfExists(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitIfExists) {
             listener.exitIfExists(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitIfExists) {
            return visitor.visitIfExists(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableCanHasKeyPropertyListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public tableProperty(): TablePropertyContext[];
    public tableProperty(i: number): TablePropertyContext | null;
    public tableProperty(i?: number): TablePropertyContext[] | TablePropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TablePropertyContext);
        }

        return this.getRuleContext(i, TablePropertyContext);
    }
    public tablePropertyKey(): TablePropertyKeyContext[];
    public tablePropertyKey(i: number): TablePropertyKeyContext | null;
    public tablePropertyKey(i?: number): TablePropertyKeyContext[] | TablePropertyKeyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TablePropertyKeyContext);
        }

        return this.getRuleContext(i, TablePropertyKeyContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_tableCanHasKeyPropertyList;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterTableCanHasKeyPropertyList) {
             listener.enterTableCanHasKeyPropertyList(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitTableCanHasKeyPropertyList) {
             listener.exitTableCanHasKeyPropertyList(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitTableCanHasKeyPropertyList) {
            return visitor.visitTableCanHasKeyPropertyList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TablePropertyListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.LR_BRACKET, 0)!;
    }
    public tableProperty(): TablePropertyContext[];
    public tableProperty(i: number): TablePropertyContext | null;
    public tableProperty(i?: number): TablePropertyContext[] | TablePropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TablePropertyContext);
        }

        return this.getRuleContext(i, TablePropertyContext);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.RR_BRACKET, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_tablePropertyList;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterTablePropertyList) {
             listener.enterTablePropertyList(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitTablePropertyList) {
             listener.exitTablePropertyList(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitTablePropertyList) {
            return visitor.visitTablePropertyList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TablePropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tablePropertyKey(): TablePropertyKeyContext {
        return this.getRuleContext(0, TablePropertyKeyContext)!;
    }
    public EQUAL_SYMBOL(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.EQUAL_SYMBOL, 0)!;
    }
    public tablePropertyValue(): TablePropertyValueContext {
        return this.getRuleContext(0, TablePropertyValueContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_tableProperty;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterTableProperty) {
             listener.enterTableProperty(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitTableProperty) {
             listener.exitTableProperty(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitTableProperty) {
            return visitor.visitTableProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TablePropertyKeyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public dereferenceDefinition(): DereferenceDefinitionContext[];
    public dereferenceDefinition(i: number): DereferenceDefinitionContext | null;
    public dereferenceDefinition(i?: number): DereferenceDefinitionContext[] | DereferenceDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DereferenceDefinitionContext);
        }

        return this.getRuleContext(i, DereferenceDefinitionContext);
    }
    public HYPNEN_SIGN(): antlr.TerminalNode[];
    public HYPNEN_SIGN(i: number): antlr.TerminalNode | null;
    public HYPNEN_SIGN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.HYPNEN_SIGN);
    	} else {
    		return this.getToken(FlinkSQLParser.HYPNEN_SIGN, i);
    	}
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_tablePropertyKey;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterTablePropertyKey) {
             listener.enterTablePropertyKey(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitTablePropertyKey) {
             listener.exitTablePropertyKey(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitTablePropertyKey) {
            return visitor.visitTablePropertyKey(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TablePropertyValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DIG_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.DIG_LITERAL, 0);
    }
    public REAL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.REAL_LITERAL, 0);
    }
    public booleanLiteral(): BooleanLiteralContext | null {
        return this.getRuleContext(0, BooleanLiteralContext);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.STRING_LITERAL, 0);
    }
    public unquotedIdentifier(): UnquotedIdentifierContext | null {
        return this.getRuleContext(0, UnquotedIdentifierContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_tablePropertyValue;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterTablePropertyValue) {
             listener.enterTablePropertyValue(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitTablePropertyValue) {
             listener.exitTablePropertyValue(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitTablePropertyValue) {
            return visitor.visitTablePropertyValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComparisonOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQUAL_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.EQUAL_SYMBOL, 0);
    }
    public GREATER_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.GREATER_SYMBOL, 0);
    }
    public LESS_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.LESS_SYMBOL, 0);
    }
    public EXCLAMATION_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.EXCLAMATION_SYMBOL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_comparisonOperator;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterComparisonOperator) {
             listener.enterComparisonOperator(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitComparisonOperator) {
             listener.exitComparisonOperator(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitComparisonOperator) {
            return visitor.visitComparisonOperator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConstantContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public timeIntervalExpression(): TimeIntervalExpressionContext | null {
        return this.getRuleContext(0, TimeIntervalExpressionContext);
    }
    public timePointLiteral(): TimePointLiteralContext | null {
        return this.getRuleContext(0, TimePointLiteralContext);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public decimalLiteral(): DecimalLiteralContext | null {
        return this.getRuleContext(0, DecimalLiteralContext);
    }
    public HYPNEN_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.HYPNEN_SIGN, 0);
    }
    public booleanLiteral(): BooleanLiteralContext | null {
        return this.getRuleContext(0, BooleanLiteralContext);
    }
    public REAL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.REAL_LITERAL, 0);
    }
    public KW_NULL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_NULL, 0);
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_NOT, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_constant;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterConstant) {
             listener.enterConstant(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitConstant) {
             listener.exitConstant(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitConstant) {
            return visitor.visitConstant(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TimePointLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public timePointUnit(): TimePointUnitContext {
        return this.getRuleContext(0, TimePointUnitContext)!;
    }
    public stringLiteral(): StringLiteralContext {
        return this.getRuleContext(0, StringLiteralContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_timePointLiteral;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterTimePointLiteral) {
             listener.enterTimePointLiteral(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitTimePointLiteral) {
             listener.exitTimePointLiteral(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitTimePointLiteral) {
            return visitor.visitTimePointLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StringLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.STRING_LITERAL, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_stringLiteral;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterStringLiteral) {
             listener.enterStringLiteral(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitStringLiteral) {
             listener.exitStringLiteral(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitStringLiteral) {
            return visitor.visitStringLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DecimalLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DIG_LITERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.DIG_LITERAL, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_decimalLiteral;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterDecimalLiteral) {
             listener.enterDecimalLiteral(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitDecimalLiteral) {
             listener.exitDecimalLiteral(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitDecimalLiteral) {
            return visitor.visitDecimalLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BooleanLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TRUE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TRUE, 0);
    }
    public KW_FALSE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_FALSE, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_booleanLiteral;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterBooleanLiteral) {
             listener.enterBooleanLiteral(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitBooleanLiteral) {
             listener.exitBooleanLiteral(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitBooleanLiteral) {
            return visitor.visitBooleanLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SetQuantifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DISTINCT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DISTINCT, 0);
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ALL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_setQuantifier;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterSetQuantifier) {
             listener.enterSetQuantifier(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitSetQuantifier) {
             listener.exitSetQuantifier(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitSetQuantifier) {
            return visitor.visitSetQuantifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TimePointUnitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_YEAR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_YEAR, 0);
    }
    public KW_QUARTER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_QUARTER, 0);
    }
    public KW_MONTH(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_MONTH, 0);
    }
    public KW_WEEK(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_WEEK, 0);
    }
    public KW_DAY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DAY, 0);
    }
    public KW_HOUR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_HOUR, 0);
    }
    public KW_MINUTE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_MINUTE, 0);
    }
    public KW_SECOND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SECOND, 0);
    }
    public KW_MILLISECOND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_MILLISECOND, 0);
    }
    public KW_MICROSECOND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_MICROSECOND, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_timePointUnit;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterTimePointUnit) {
             listener.enterTimePointUnit(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitTimePointUnit) {
             listener.exitTimePointUnit(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitTimePointUnit) {
            return visitor.visitTimePointUnit(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TimeIntervalUnitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_MILLENNIUM(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_MILLENNIUM, 0);
    }
    public KW_CENTURY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_CENTURY, 0);
    }
    public KW_DECADE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DECADE, 0);
    }
    public KW_YEAR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_YEAR, 0);
    }
    public KW_YEARS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_YEARS, 0);
    }
    public KW_QUARTER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_QUARTER, 0);
    }
    public KW_MONTH(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_MONTH, 0);
    }
    public KW_MONTHS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_MONTHS, 0);
    }
    public KW_WEEK(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_WEEK, 0);
    }
    public KW_WEEKS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_WEEKS, 0);
    }
    public KW_DAY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DAY, 0);
    }
    public KW_DAYS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DAYS, 0);
    }
    public KW_HOUR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_HOUR, 0);
    }
    public KW_HOURS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_HOURS, 0);
    }
    public KW_MINUTE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_MINUTE, 0);
    }
    public KW_MINUTES(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_MINUTES, 0);
    }
    public KW_SECOND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SECOND, 0);
    }
    public KW_SECONDS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SECONDS, 0);
    }
    public KW_MILLISECOND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_MILLISECOND, 0);
    }
    public KW_MICROSECOND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_MICROSECOND, 0);
    }
    public KW_NANOSECOND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_NANOSECOND, 0);
    }
    public KW_EPOCH(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_EPOCH, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_timeIntervalUnit;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterTimeIntervalUnit) {
             listener.enterTimeIntervalUnit(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitTimeIntervalUnit) {
             listener.exitTimeIntervalUnit(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitTimeIntervalUnit) {
            return visitor.visitTimeIntervalUnit(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReservedKeywordsUsedAsFuncParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_LEADING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_LEADING, 0);
    }
    public KW_TRAILING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TRAILING, 0);
    }
    public KW_BOTH(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_BOTH, 0);
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ALL, 0);
    }
    public KW_DISTINCT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DISTINCT, 0);
    }
    public ASTERISK_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.ASTERISK_SIGN, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_reservedKeywordsUsedAsFuncParam;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterReservedKeywordsUsedAsFuncParam) {
             listener.enterReservedKeywordsUsedAsFuncParam(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitReservedKeywordsUsedAsFuncParam) {
             listener.exitReservedKeywordsUsedAsFuncParam(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitReservedKeywordsUsedAsFuncParam) {
            return visitor.visitReservedKeywordsUsedAsFuncParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReservedKeywordsUsedAsFuncNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ABS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ABS, 0);
    }
    public KW_ARRAY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ARRAY, 0);
    }
    public KW_AVG(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_AVG, 0);
    }
    public KW_CAST(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_CAST, 0);
    }
    public KW_CEIL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_CEIL, 0);
    }
    public KW_COALESCE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_COALESCE, 0);
    }
    public KW_COLLECT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_COLLECT, 0);
    }
    public KW_COUNT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_COUNT, 0);
    }
    public KW_DATE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DATE, 0);
    }
    public KW_FIRST_VALUE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_FIRST_VALUE, 0);
    }
    public KW_FROM_UNIXTIME(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_FROM_UNIXTIME, 0);
    }
    public KW_GROUPING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_GROUPING, 0);
    }
    public KW_HOUR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_HOUR, 0);
    }
    public KW_IF(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_IF, 0);
    }
    public KW_LEAD(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_LEAD, 0);
    }
    public KW_LAG(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_LAG, 0);
    }
    public KW_LAST_VALUE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_LAST_VALUE, 0);
    }
    public KW_LEFT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_LEFT, 0);
    }
    public KW_NTILE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_NTILE, 0);
    }
    public KW_MAP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_MAP, 0);
    }
    public KW_MINUTE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_MINUTE, 0);
    }
    public KW_MONTH(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_MONTH, 0);
    }
    public KW_OVERLAY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_OVERLAY, 0);
    }
    public KW_POSITION(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_POSITION, 0);
    }
    public KW_PERCENT_RANK(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_PERCENT_RANK, 0);
    }
    public KW_POWER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_POWER, 0);
    }
    public KW_QUARTER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_QUARTER, 0);
    }
    public KW_RANK(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_RANK, 0);
    }
    public KW_ROW_NUMBER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ROW_NUMBER, 0);
    }
    public KW_RIGHT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_RIGHT, 0);
    }
    public KW_SECOND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SECOND, 0);
    }
    public KW_SUBSTRING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SUBSTRING, 0);
    }
    public KW_SUM(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SUM, 0);
    }
    public KW_TIME(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TIME, 0);
    }
    public KW_TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TIMESTAMP, 0);
    }
    public KW_TIMESTAMP_3(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TIMESTAMP_3, 0);
    }
    public KW_TIMESTAMP_6(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TIMESTAMP_6, 0);
    }
    public KW_TIMESTAMP_9(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TIMESTAMP_9, 0);
    }
    public KW_TRUNCATE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TRUNCATE, 0);
    }
    public KW_UPPER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_UPPER, 0);
    }
    public KW_WEEK(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_WEEK, 0);
    }
    public KW_YEAR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_YEAR, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_reservedKeywordsUsedAsFuncName;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterReservedKeywordsUsedAsFuncName) {
             listener.enterReservedKeywordsUsedAsFuncName(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitReservedKeywordsUsedAsFuncName) {
             listener.exitReservedKeywordsUsedAsFuncName(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitReservedKeywordsUsedAsFuncName) {
            return visitor.visitReservedKeywordsUsedAsFuncName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NonReservedKeywordsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ADD(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ADD, 0);
    }
    public KW_ADMIN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ADMIN, 0);
    }
    public KW_AFTER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_AFTER, 0);
    }
    public KW_ANALYZE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ANALYZE, 0);
    }
    public KW_ASC(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ASC, 0);
    }
    public KW_BEFORE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_BEFORE, 0);
    }
    public KW_BYTES(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_BYTES, 0);
    }
    public KW_CASCADE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_CASCADE, 0);
    }
    public KW_CATALOG(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_CATALOG, 0);
    }
    public KW_CATALOGS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_CATALOGS, 0);
    }
    public KW_CENTURY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_CENTURY, 0);
    }
    public KW_CHAIN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_CHAIN, 0);
    }
    public KW_CHANGELOG_MODE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_CHANGELOG_MODE, 0);
    }
    public KW_CHARACTERS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_CHARACTERS, 0);
    }
    public KW_COMMENT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_COMMENT, 0);
    }
    public KW_COMPACT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_COMPACT, 0);
    }
    public KW_COLUMNS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_COLUMNS, 0);
    }
    public KW_CONSTRAINTS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_CONSTRAINTS, 0);
    }
    public KW_CONSTRUCTOR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_CONSTRUCTOR, 0);
    }
    public KW_CUMULATE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_CUMULATE, 0);
    }
    public KW_DATA(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DATA, 0);
    }
    public KW_DATE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DATE, 0);
    }
    public KW_DATABASE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DATABASE, 0);
    }
    public KW_DATABASES(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DATABASES, 0);
    }
    public KW_DAYS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DAYS, 0);
    }
    public KW_DECADE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DECADE, 0);
    }
    public KW_DEFINED(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DEFINED, 0);
    }
    public KW_DESC(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DESC, 0);
    }
    public KW_DESCRIPTOR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DESCRIPTOR, 0);
    }
    public KW_DIV(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_DIV, 0);
    }
    public KW_ENCODING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ENCODING, 0);
    }
    public KW_ENFORCED(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ENFORCED, 0);
    }
    public KW_ENGINE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ENGINE, 0);
    }
    public KW_ERROR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ERROR, 0);
    }
    public KW_ESTIMATED_COST(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ESTIMATED_COST, 0);
    }
    public KW_EXCEPTION(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_EXCEPTION, 0);
    }
    public KW_EXCLUDE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_EXCLUDE, 0);
    }
    public KW_EXCLUDING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_EXCLUDING, 0);
    }
    public KW_EXTENDED(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_EXTENDED, 0);
    }
    public KW_FILE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_FILE, 0);
    }
    public KW_FINAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_FINAL, 0);
    }
    public KW_FIRST(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_FIRST, 0);
    }
    public KW_FOLLOWING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_FOLLOWING, 0);
    }
    public KW_FORMAT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_FORMAT, 0);
    }
    public KW_FORTRAN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_FORTRAN, 0);
    }
    public KW_FOUND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_FOUND, 0);
    }
    public KW_FRAC_SECOND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_FRAC_SECOND, 0);
    }
    public KW_FUNCTIONS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_FUNCTIONS, 0);
    }
    public KW_GENERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_GENERAL, 0);
    }
    public KW_GENERATED(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_GENERATED, 0);
    }
    public KW_GO(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_GO, 0);
    }
    public KW_GOTO(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_GOTO, 0);
    }
    public KW_GRANTED(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_GRANTED, 0);
    }
    public KW_HOP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_HOP, 0);
    }
    public KW_HOURS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_HOURS, 0);
    }
    public KW_IF(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_IF, 0);
    }
    public KW_IGNORE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_IGNORE, 0);
    }
    public KW_INCREMENT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_INCREMENT, 0);
    }
    public KW_INPUT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_INPUT, 0);
    }
    public KW_INVOKER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_INVOKER, 0);
    }
    public KW_JAR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_JAR, 0);
    }
    public KW_JARS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_JARS, 0);
    }
    public KW_JAVA(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_JAVA, 0);
    }
    public KW_JSON(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_JSON, 0);
    }
    public KW_JSON_EXECUTION_PLAN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_JSON_EXECUTION_PLAN, 0);
    }
    public KW_KEY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_KEY, 0);
    }
    public KW_KEY_MEMBER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_KEY_MEMBER, 0);
    }
    public KW_KEY_TYPE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_KEY_TYPE, 0);
    }
    public KW_LABEL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_LABEL, 0);
    }
    public KW_LAST(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_LAST, 0);
    }
    public KW_LENGTH(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_LENGTH, 0);
    }
    public KW_LEVEL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_LEVEL, 0);
    }
    public KW_LOAD(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_LOAD, 0);
    }
    public KW_LOCALTIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_LOCALTIMESTAMP, 0);
    }
    public KW_MAP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_MAP, 0);
    }
    public KW_MICROSECOND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_MICROSECOND, 0);
    }
    public KW_MILLENNIUM(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_MILLENNIUM, 0);
    }
    public KW_MILLISECOND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_MILLISECOND, 0);
    }
    public KW_MINUTES(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_MINUTES, 0);
    }
    public KW_MINVALUE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_MINVALUE, 0);
    }
    public KW_MODIFY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_MODIFY, 0);
    }
    public KW_MODULES(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_MODULES, 0);
    }
    public KW_MONTHS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_MONTHS, 0);
    }
    public KW_NANOSECOND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_NANOSECOND, 0);
    }
    public KW_NULLS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_NULLS, 0);
    }
    public KW_NUMBER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_NUMBER, 0);
    }
    public KW_OPTION(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_OPTION, 0);
    }
    public KW_OPTIONS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_OPTIONS, 0);
    }
    public KW_ORDERING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ORDERING, 0);
    }
    public KW_OUTPUT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_OUTPUT, 0);
    }
    public KW_OVERWRITE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_OVERWRITE, 0);
    }
    public KW_OVERWRITING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_OVERWRITING, 0);
    }
    public KW_PARTITIONED(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_PARTITIONED, 0);
    }
    public KW_PARTITIONS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_PARTITIONS, 0);
    }
    public KW_PASSING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_PASSING, 0);
    }
    public KW_PAST(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_PAST, 0);
    }
    public KW_PATH(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_PATH, 0);
    }
    public KW_PLACING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_PLACING, 0);
    }
    public KW_PLAN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_PLAN, 0);
    }
    public KW_PRECEDING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_PRECEDING, 0);
    }
    public KW_PRESERVE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_PRESERVE, 0);
    }
    public KW_PRIOR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_PRIOR, 0);
    }
    public KW_PRIVILEGES(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_PRIVILEGES, 0);
    }
    public KW_PUBLIC(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_PUBLIC, 0);
    }
    public KW_PYTHON(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_PYTHON, 0);
    }
    public KW_PYTHON_FILES(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_PYTHON_FILES, 0);
    }
    public KW_PYTHON_REQUIREMENTS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_PYTHON_REQUIREMENTS, 0);
    }
    public KW_PYTHON_DEPENDENCIES(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_PYTHON_DEPENDENCIES, 0);
    }
    public KW_PYTHON_JAR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_PYTHON_JAR, 0);
    }
    public KW_PYTHON_ARCHIVES(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_PYTHON_ARCHIVES, 0);
    }
    public KW_PYTHON_PARAMETER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_PYTHON_PARAMETER, 0);
    }
    public KW_QUARTER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_QUARTER, 0);
    }
    public KW_RAW(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_RAW, 0);
    }
    public KW_READ(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_READ, 0);
    }
    public KW_RELATIVE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_RELATIVE, 0);
    }
    public KW_REMOVE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_REMOVE, 0);
    }
    public KW_RENAME(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_RENAME, 0);
    }
    public KW_REPLACE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_REPLACE, 0);
    }
    public KW_RESPECT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_RESPECT, 0);
    }
    public KW_RESTART(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_RESTART, 0);
    }
    public KW_RESTRICT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_RESTRICT, 0);
    }
    public KW_ROLE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ROLE, 0);
    }
    public KW_ROW_COUNT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ROW_COUNT, 0);
    }
    public KW_SCALA(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SCALA, 0);
    }
    public KW_SCALAR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SCALAR, 0);
    }
    public KW_SCALE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SCALE, 0);
    }
    public KW_SCHEMA(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SCHEMA, 0);
    }
    public KW_SECONDS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SECONDS, 0);
    }
    public KW_SECTION(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SECTION, 0);
    }
    public KW_SECURITY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SECURITY, 0);
    }
    public KW_SELF(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SELF, 0);
    }
    public KW_SERVER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SERVER, 0);
    }
    public KW_SERVER_NAME(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SERVER_NAME, 0);
    }
    public KW_SESSION(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SESSION, 0);
    }
    public KW_SETS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SETS, 0);
    }
    public KW_SIMPLE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SIMPLE, 0);
    }
    public KW_SIZE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SIZE, 0);
    }
    public KW_SLIDE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SLIDE, 0);
    }
    public KW_SOURCE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SOURCE, 0);
    }
    public KW_SPACE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SPACE, 0);
    }
    public KW_STATE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_STATE, 0);
    }
    public KW_STATEMENT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_STATEMENT, 0);
    }
    public KW_STEP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_STEP, 0);
    }
    public KW_STRING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_STRING, 0);
    }
    public KW_STRUCTURE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_STRUCTURE, 0);
    }
    public KW_STYLE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_STYLE, 0);
    }
    public KW_TABLES(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TABLES, 0);
    }
    public KW_TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TEMPORARY, 0);
    }
    public KW_TIMECOL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TIMECOL, 0);
    }
    public KW_FLOOR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_FLOOR, 0);
    }
    public KW_TIMESTAMP_LTZ(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TIMESTAMP_LTZ, 0);
    }
    public KW_TIMESTAMPADD(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TIMESTAMPADD, 0);
    }
    public KW_TIMESTAMPDIFF(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TIMESTAMPDIFF, 0);
    }
    public KW_TO_TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TO_TIMESTAMP, 0);
    }
    public KW_TRANSFORM(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TRANSFORM, 0);
    }
    public KW_TUMBLE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TUMBLE, 0);
    }
    public KW_TYPE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_TYPE, 0);
    }
    public KW_UNDER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_UNDER, 0);
    }
    public KW_UNLOAD(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_UNLOAD, 0);
    }
    public KW_USAGE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_USAGE, 0);
    }
    public KW_USE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_USE, 0);
    }
    public KW_USER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_USER, 0);
    }
    public KW_UTF16(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_UTF16, 0);
    }
    public KW_UTF32(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_UTF32, 0);
    }
    public KW_UTF8(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_UTF8, 0);
    }
    public KW_VERSION(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_VERSION, 0);
    }
    public KW_VIEW(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_VIEW, 0);
    }
    public KW_VIEWS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_VIEWS, 0);
    }
    public KW_VIRTUAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_VIRTUAL, 0);
    }
    public KW_WATERMARK(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_WATERMARK, 0);
    }
    public KW_WATERMARKS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_WATERMARKS, 0);
    }
    public KW_WEEK(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_WEEK, 0);
    }
    public KW_WORK(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_WORK, 0);
    }
    public KW_WRAPPER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_WRAPPER, 0);
    }
    public KW_YEARS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_YEARS, 0);
    }
    public KW_ZONE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_ZONE, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_nonReservedKeywords;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterNonReservedKeywords) {
             listener.enterNonReservedKeywords(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitNonReservedKeywords) {
             listener.exitNonReservedKeywords(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitNonReservedKeywords) {
            return visitor.visitNonReservedKeywords(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ProjectItemDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_projectItemDefinition;
    }
    public override copyFrom(ctx: ProjectItemDefinitionContext): void {
        super.copyFrom(ctx);
    }
}
export class CommonContext extends ProjectItemDefinitionContext {
    public constructor(ctx: ProjectItemDefinitionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_AS, 0);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterCommon) {
             listener.enterCommon(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitCommon) {
             listener.exitCommon(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitCommon) {
            return visitor.visitCommon(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FlinkStyleProjectItemContext extends ProjectItemDefinitionContext {
    public constructor(ctx: ProjectItemDefinitionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public overWindowItem(): OverWindowItemContext | null {
        return this.getRuleContext(0, OverWindowItemContext);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterFlinkStyleProjectItem) {
             listener.enterFlinkStyleProjectItem(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitFlinkStyleProjectItem) {
             listener.exitFlinkStyleProjectItem(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitFlinkStyleProjectItem) {
            return visitor.visitFlinkStyleProjectItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SelectStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_selectStatement;
    }
    public override copyFrom(ctx: SelectStatementContext): void {
        super.copyFrom(ctx);
    }
}
export class CommonSQLContext extends SelectStatementContext {
    public constructor(ctx: SelectStatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public selectClause(): SelectClauseContext | null {
        return this.getRuleContext(0, SelectClauseContext);
    }
    public fromClause(): FromClauseContext | null {
        return this.getRuleContext(0, FromClauseContext);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public groupByClause(): GroupByClauseContext | null {
        return this.getRuleContext(0, GroupByClauseContext);
    }
    public havingClause(): HavingClauseContext | null {
        return this.getRuleContext(0, HavingClauseContext);
    }
    public windowClause(): WindowClauseContext | null {
        return this.getRuleContext(0, WindowClauseContext);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterCommonSQL) {
             listener.enterCommonSQL(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitCommonSQL) {
             listener.exitCommonSQL(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitCommonSQL) {
            return visitor.visitCommonSQL(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MatchRecognizeContext extends SelectStatementContext {
    public constructor(ctx: SelectStatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public selectClause(): SelectClauseContext | null {
        return this.getRuleContext(0, SelectClauseContext);
    }
    public fromClause(): FromClauseContext | null {
        return this.getRuleContext(0, FromClauseContext);
    }
    public matchRecognizeClause(): MatchRecognizeClauseContext | null {
        return this.getRuleContext(0, MatchRecognizeClauseContext);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterMatchRecognize) {
             listener.enterMatchRecognize(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitMatchRecognize) {
             listener.exitMatchRecognize(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitMatchRecognize) {
            return visitor.visitMatchRecognize(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SelectClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_selectClause;
    }
    public override copyFrom(ctx: SelectClauseContext): void {
        super.copyFrom(ctx);
    }
}
export class FlinkStyleContext extends SelectClauseContext {
    public constructor(ctx: SelectClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_SELECT(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_SELECT, 0)!;
    }
    public ASTERISK_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.ASTERISK_SIGN, 0);
    }
    public projectItemDefinition(): ProjectItemDefinitionContext[];
    public projectItemDefinition(i: number): ProjectItemDefinitionContext | null;
    public projectItemDefinition(i?: number): ProjectItemDefinitionContext[] | ProjectItemDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ProjectItemDefinitionContext);
        }

        return this.getRuleContext(i, ProjectItemDefinitionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterFlinkStyle) {
             listener.enterFlinkStyle(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitFlinkStyle) {
             listener.exitFlinkStyle(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitFlinkStyle) {
            return visitor.visitFlinkStyle(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InsertStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_insertStatement;
    }
    public override copyFrom(ctx: InsertStatementContext): void {
        super.copyFrom(ctx);
    }
}
export class CommonInsertContext extends InsertStatementContext {
    public constructor(ctx: InsertStatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public insertSimpleStatement(): InsertSimpleStatementContext | null {
        return this.getRuleContext(0, InsertSimpleStatementContext);
    }
    public KW_EXECUTE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_EXECUTE, 0);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterCommonInsert) {
             listener.enterCommonInsert(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitCommonInsert) {
             listener.exitCommonInsert(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitCommonInsert) {
            return visitor.visitCommonInsert(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class JoinOpContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public flinkJoinOp(): FlinkJoinOpContext {
        return this.getRuleContext(0, FlinkJoinOpContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_joinOp;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterJoinOp) {
             listener.enterJoinOp(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitJoinOp) {
             listener.exitJoinOp(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitJoinOp) {
            return visitor.visitJoinOp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tableReference(): TableReferenceContext[];
    public tableReference(i: number): TableReferenceContext | null;
    public tableReference(i?: number): TableReferenceContext[] | TableReferenceContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TableReferenceContext);
        }

        return this.getRuleContext(i, TableReferenceContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSQLParser.COMMA);
    	} else {
    		return this.getToken(FlinkSQLParser.COMMA, i);
    	}
    }
    public inlineDataValueClause(): InlineDataValueClauseContext | null {
        return this.getRuleContext(0, InlineDataValueClauseContext);
    }
    public windowTVFClause(): WindowTVFClauseContext | null {
        return this.getRuleContext(0, WindowTVFClauseContext);
    }
    public tableExpression(): TableExpressionContext[];
    public tableExpression(i: number): TableExpressionContext | null;
    public tableExpression(i?: number): TableExpressionContext[] | TableExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TableExpressionContext);
        }

        return this.getRuleContext(i, TableExpressionContext);
    }
    public KW_CROSS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_CROSS, 0);
    }
    public KW_JOIN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_JOIN, 0);
    }
    public KW_NATURAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_NATURAL, 0);
    }
    public joinOp(): JoinOpContext | null {
        return this.getRuleContext(0, JoinOpContext);
    }
    public KW_OUTER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_OUTER, 0);
    }
    public KW_SEMI(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_SEMI, 0);
    }
    public joinCondition(): JoinConditionContext | null {
        return this.getRuleContext(0, JoinConditionContext);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_tableExpression;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterTableExpression) {
             listener.enterTableExpression(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitTableExpression) {
             listener.exitTableExpression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitTableExpression) {
            return visitor.visitTableExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreateTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_createTable;
    }
    public override copyFrom(ctx: CreateTableContext): void {
        super.copyFrom(ctx);
    }
}
export class LikeContext extends CreateTableContext {
    public constructor(ctx: CreateTableContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public likeCreateTable(): LikeCreateTableContext {
        return this.getRuleContext(0, LikeCreateTableContext)!;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterLike) {
             listener.enterLike(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitLike) {
             listener.exitLike(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitLike) {
            return visitor.visitLike(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SimpleContext extends CreateTableContext {
    public constructor(ctx: CreateTableContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public simpleCreateTable(): SimpleCreateTableContext {
        return this.getRuleContext(0, SimpleCreateTableContext)!;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterSimple) {
             listener.enterSimple(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitSimple) {
             listener.exitSimple(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitSimple) {
            return visitor.visitSimple(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AsSelectContext extends CreateTableContext {
    public constructor(ctx: CreateTableContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public createTableAsSelect(): CreateTableAsSelectContext {
        return this.getRuleContext(0, CreateTableAsSelectContext)!;
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterAsSelect) {
             listener.enterAsSelect(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitAsSelect) {
             listener.exitAsSelect(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitAsSelect) {
            return visitor.visitAsSelect(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OverWindowItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FlinkSQLParser.RULE_overWindowItem;
    }
    public override copyFrom(ctx: OverWindowItemContext): void {
        super.copyFrom(ctx);
    }
}
export class Flink_common2Context extends OverWindowItemContext {
    public constructor(ctx: OverWindowItemContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public primaryExpression(): PrimaryExpressionContext {
        return this.getRuleContext(0, PrimaryExpressionContext)!;
    }
    public KW_OVER(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_OVER, 0)!;
    }
    public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
        return this.getRuleContext(0, ErrorCapturingIdentifierContext)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_AS, 0);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterFlink_common2) {
             listener.enterFlink_common2(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitFlink_common2) {
             listener.exitFlink_common2(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitFlink_common2) {
            return visitor.visitFlink_common2(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class Flink_commnContext extends OverWindowItemContext {
    public constructor(ctx: OverWindowItemContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public primaryExpression(): PrimaryExpressionContext {
        return this.getRuleContext(0, PrimaryExpressionContext)!;
    }
    public KW_OVER(): antlr.TerminalNode {
        return this.getToken(FlinkSQLParser.KW_OVER, 0)!;
    }
    public windowSpec(): WindowSpecContext {
        return this.getRuleContext(0, WindowSpecContext)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSQLParser.KW_AS, 0);
    }
    public override enterRule(listener: FlinkSQLListener): void {
        if(listener.enterFlink_commn) {
             listener.enterFlink_commn(this);
        }
    }
    public override exitRule(listener: FlinkSQLListener): void {
        if(listener.exitFlink_commn) {
             listener.exitFlink_commn(this);
        }
    }
    public override accept<Result>(visitor: FlinkSQLVisitor<Result>): Result | null {
        if (visitor.visitFlink_commn) {
            return visitor.visitFlink_commn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
