"use strict";
// Generated from gen/FlinkSQL.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlinkSQLLexer = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const Lexer_1 = require("antlr4ts/Lexer");
const LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class FlinkSQLLexer extends Lexer_1.Lexer {
    // @Override
    // @NotNull
    get vocabulary() {
        return FlinkSQLLexer.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    constructor(input) {
        super(input);
        this._interp = new LexerATNSimulator_1.LexerATNSimulator(FlinkSQLLexer._ATN, this);
    }
    // @Override
    get grammarFileName() { return "FlinkSQL.g4"; }
    // @Override
    get ruleNames() { return FlinkSQLLexer.ruleNames; }
    // @Override
    get serializedATN() { return FlinkSQLLexer._serializedATN; }
    // @Override
    get channelNames() { return FlinkSQLLexer.channelNames; }
    // @Override
    get modeNames() { return FlinkSQLLexer.modeNames; }
    static get _ATN() {
        if (!FlinkSQLLexer.__ATN) {
            FlinkSQLLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(FlinkSQLLexer._serializedATN));
        }
        return FlinkSQLLexer.__ATN;
    }
}
FlinkSQLLexer.T__0 = 1;
FlinkSQLLexer.T__1 = 2;
FlinkSQLLexer.T__2 = 3;
FlinkSQLLexer.T__3 = 4;
FlinkSQLLexer.T__4 = 5;
FlinkSQLLexer.T__5 = 6;
FlinkSQLLexer.T__6 = 7;
FlinkSQLLexer.T__7 = 8;
FlinkSQLLexer.T__8 = 9;
FlinkSQLLexer.T__9 = 10;
FlinkSQLLexer.T__10 = 11;
FlinkSQLLexer.T__11 = 12;
FlinkSQLLexer.T__12 = 13;
FlinkSQLLexer.T__13 = 14;
FlinkSQLLexer.T__14 = 15;
FlinkSQLLexer.T__15 = 16;
FlinkSQLLexer.T__16 = 17;
FlinkSQLLexer.T__17 = 18;
FlinkSQLLexer.T__18 = 19;
FlinkSQLLexer.T__19 = 20;
FlinkSQLLexer.T__20 = 21;
FlinkSQLLexer.T__21 = 22;
FlinkSQLLexer.T__22 = 23;
FlinkSQLLexer.T__23 = 24;
FlinkSQLLexer.T__24 = 25;
FlinkSQLLexer.T__25 = 26;
FlinkSQLLexer.T__26 = 27;
FlinkSQLLexer.T__27 = 28;
FlinkSQLLexer.T__28 = 29;
FlinkSQLLexer.T__29 = 30;
FlinkSQLLexer.T__30 = 31;
FlinkSQLLexer.SEMICOLON = 32;
FlinkSQLLexer.COMMA = 33;
FlinkSQLLexer.INT_LITERAL = 34;
FlinkSQLLexer.FLOAT_LITERAL = 35;
FlinkSQLLexer.DOUBLE_LITERAL = 36;
FlinkSQLLexer.STRING_LITERAL = 37;
FlinkSQLLexer.IDENTIFIER = 38;
// tslint:disable:no-trailing-whitespace
FlinkSQLLexer.channelNames = [
    "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
];
// tslint:disable:no-trailing-whitespace
FlinkSQLLexer.modeNames = [
    "DEFAULT_MODE",
];
FlinkSQLLexer.ruleNames = [
    "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8",
    "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16",
    "T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24",
    "T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "SEMICOLON", "COMMA",
    "DIGIT", "LETTER", "INT_LITERAL", "FLOAT_LITERAL", "DOUBLE_LITERAL", "STRING_LITERAL",
    "IDENTIFIER",
];
FlinkSQLLexer._LITERAL_NAMES = [
    undefined, "'SEMICOLON'", "'CREATE TABLE'", "'('", "')'", "'WITH'", "'INSERT INTO'",
    "'VALUES'", "'SELECT'", "'FROM'", "'WHERE'", "'='", "'AS'", "'PRIMARY KEY'",
    "'NOT NULL'", "'UNIQUE'", "'DEFAULT'", "'INT'", "'BIGINT'", "'FLOAT'",
    "'DOUBLE'", "'STRING'", "'connector'", "'format'", "'kafka'", "'jdbc'",
    "'csv'", "'json'", "'+'", "'-'", "'*'", "'/'", "';'", "','",
];
FlinkSQLLexer._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, "SEMICOLON", "COMMA", "INT_LITERAL",
    "FLOAT_LITERAL", "DOUBLE_LITERAL", "STRING_LITERAL", "IDENTIFIER",
];
FlinkSQLLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(FlinkSQLLexer._LITERAL_NAMES, FlinkSQLLexer._SYMBOLIC_NAMES, []);
FlinkSQLLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02(\u014C\b\x01" +
    "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
    "\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
    "\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
    "\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
    "\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
    "\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
    "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x03\x02\x03" +
    "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
    "\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b" +
    "\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
    "\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03" +
    "\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
    "\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03" +
    "\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03" +
    "\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
    "\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03" +
    "\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
    "\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
    "\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03" +
    "\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03" +
    "\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03" +
    "\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03" +
    "\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03" +
    "\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03" +
    "#\x03#\x03$\x03$\x03%\x06%\u0117\n%\r%\x0E%\u0118\x03&\x06&\u011C\n&\r" +
    "&\x0E&\u011D\x03&\x03&\x06&\u0122\n&\r&\x0E&\u0123\x03\'\x06\'\u0127\n" +
    "\'\r\'\x0E\'\u0128\x03\'\x03\'\x06\'\u012D\n\'\r\'\x0E\'\u012E\x05\'\u0131" +
    "\n\'\x03\'\x03\'\x05\'\u0135\n\'\x03\'\x06\'\u0138\n\'\r\'\x0E\'\u0139" +
    "\x03(\x03(\x07(\u013E\n(\f(\x0E(\u0141\v(\x03(\x03(\x03)\x03)\x03)\x07" +
    ")\u0148\n)\f)\x0E)\u014B\v)\x02\x02\x02*\x03\x02\x03\x05\x02\x04\x07\x02" +
    "\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02" +
    "\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12" +
    "#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02" +
    "\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C" +
    "\x02#E\x02\x02G\x02\x02I\x02$K\x02%M\x02&O\x02\'Q\x02(\x03\x02\x06\x03" +
    "\x022;\x05\x02C\\aac|\x04\x02--//\x06\x02\f\f\x0E\x0F))^^\x02\u0154\x02" +
    "\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02" +
    "\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F" +
    "\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15" +
    "\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B" +
    "\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!" +
    "\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02" +
    "\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02" +
    "\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03" +
    "\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02" +
    "\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02" +
    "C\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02" +
    "\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x03S\x03\x02\x02\x02" +
    "\x05]\x03\x02\x02\x02\x07j\x03\x02\x02\x02\tl\x03\x02\x02\x02\vn\x03\x02" +
    "\x02\x02\rs\x03\x02\x02\x02\x0F\x7F\x03\x02\x02\x02\x11\x86\x03\x02\x02" +
    "\x02\x13\x8D\x03\x02\x02\x02\x15\x92\x03\x02\x02\x02\x17\x98\x03\x02\x02" +
    "\x02\x19\x9A\x03\x02\x02\x02\x1B\x9D\x03\x02\x02\x02\x1D\xA9\x03\x02\x02" +
    "\x02\x1F\xB2\x03\x02\x02\x02!\xB9\x03\x02\x02\x02#\xC1\x03\x02\x02\x02" +
    "%\xC5\x03\x02\x02\x02\'\xCC\x03\x02\x02\x02)\xD2\x03\x02\x02\x02+\xD9" +
    "\x03\x02\x02\x02-\xE0\x03\x02\x02\x02/\xEA\x03\x02\x02\x021\xF1\x03\x02" +
    "\x02\x023\xF7\x03\x02\x02\x025\xFC\x03\x02\x02\x027\u0100\x03\x02\x02" +
    "\x029\u0105\x03\x02\x02\x02;\u0107\x03\x02\x02\x02=\u0109\x03\x02\x02" +
    "\x02?\u010B\x03\x02\x02\x02A\u010D\x03\x02\x02\x02C\u010F\x03\x02\x02" +
    "\x02E\u0111\x03\x02\x02\x02G\u0113\x03\x02\x02\x02I\u0116\x03\x02\x02" +
    "\x02K\u011B\x03\x02\x02\x02M\u0126\x03\x02\x02\x02O\u013B\x03\x02\x02" +
    "\x02Q\u0144\x03\x02\x02\x02ST\x07U\x02\x02TU\x07G\x02\x02UV\x07O\x02\x02" +
    "VW\x07K\x02\x02WX\x07E\x02\x02XY\x07Q\x02\x02YZ\x07N\x02\x02Z[\x07Q\x02" +
    "\x02[\\\x07P\x02\x02\\\x04\x03\x02\x02\x02]^\x07E\x02\x02^_\x07T\x02\x02" +
    "_`\x07G\x02\x02`a\x07C\x02\x02ab\x07V\x02\x02bc\x07G\x02\x02cd\x07\"\x02" +
    "\x02de\x07V\x02\x02ef\x07C\x02\x02fg\x07D\x02\x02gh\x07N\x02\x02hi\x07" +
    "G\x02\x02i\x06\x03\x02\x02\x02jk\x07*\x02\x02k\b\x03\x02\x02\x02lm\x07" +
    "+\x02\x02m\n\x03\x02\x02\x02no\x07Y\x02\x02op\x07K\x02\x02pq\x07V\x02" +
    "\x02qr\x07J\x02\x02r\f\x03\x02\x02\x02st\x07K\x02\x02tu\x07P\x02\x02u" +
    "v\x07U\x02\x02vw\x07G\x02\x02wx\x07T\x02\x02xy\x07V\x02\x02yz\x07\"\x02" +
    "\x02z{\x07K\x02\x02{|\x07P\x02\x02|}\x07V\x02\x02}~\x07Q\x02\x02~\x0E" +
    "\x03\x02\x02\x02\x7F\x80\x07X\x02\x02\x80\x81\x07C\x02\x02\x81\x82\x07" +
    "N\x02\x02\x82\x83\x07W\x02\x02\x83\x84\x07G\x02\x02\x84\x85\x07U\x02\x02" +
    "\x85\x10\x03\x02\x02\x02\x86\x87\x07U\x02\x02\x87\x88\x07G\x02\x02\x88" +
    "\x89\x07N\x02\x02\x89\x8A\x07G\x02\x02\x8A\x8B\x07E\x02\x02\x8B\x8C\x07" +
    "V\x02\x02\x8C\x12\x03\x02\x02\x02\x8D\x8E\x07H\x02\x02\x8E\x8F\x07T\x02" +
    "\x02\x8F\x90\x07Q\x02\x02\x90\x91\x07O\x02\x02\x91\x14\x03\x02\x02\x02" +
    "\x92\x93\x07Y\x02\x02\x93\x94\x07J\x02\x02\x94\x95\x07G\x02\x02\x95\x96" +
    "\x07T\x02\x02\x96\x97\x07G\x02\x02\x97\x16\x03\x02\x02\x02\x98\x99\x07" +
    "?\x02\x02\x99\x18\x03\x02\x02\x02\x9A\x9B\x07C\x02\x02\x9B\x9C\x07U\x02" +
    "\x02\x9C\x1A\x03\x02\x02\x02\x9D\x9E\x07R\x02\x02\x9E\x9F\x07T\x02\x02" +
    "\x9F\xA0\x07K\x02\x02\xA0\xA1\x07O\x02\x02\xA1\xA2\x07C\x02\x02\xA2\xA3" +
    "\x07T\x02\x02\xA3\xA4\x07[\x02\x02\xA4\xA5\x07\"\x02\x02\xA5\xA6\x07M" +
    "\x02\x02\xA6\xA7\x07G\x02\x02\xA7\xA8\x07[\x02\x02\xA8\x1C\x03\x02\x02" +
    "\x02\xA9\xAA\x07P\x02\x02\xAA\xAB\x07Q\x02\x02\xAB\xAC\x07V\x02\x02\xAC" +
    "\xAD\x07\"\x02\x02\xAD\xAE\x07P\x02\x02\xAE\xAF\x07W\x02\x02\xAF\xB0\x07" +
    "N\x02\x02\xB0\xB1\x07N\x02\x02\xB1\x1E\x03\x02\x02\x02\xB2\xB3\x07W\x02" +
    "\x02\xB3\xB4\x07P\x02\x02\xB4\xB5\x07K\x02\x02\xB5\xB6\x07S\x02\x02\xB6" +
    "\xB7\x07W\x02\x02\xB7\xB8\x07G\x02\x02\xB8 \x03\x02\x02\x02\xB9\xBA\x07" +
    "F\x02\x02\xBA\xBB\x07G\x02\x02\xBB\xBC\x07H\x02\x02\xBC\xBD\x07C\x02\x02" +
    "\xBD\xBE\x07W\x02\x02\xBE\xBF\x07N\x02\x02\xBF\xC0\x07V\x02\x02\xC0\"" +
    "\x03\x02\x02\x02\xC1\xC2\x07K\x02\x02\xC2\xC3\x07P\x02\x02\xC3\xC4\x07" +
    "V\x02\x02\xC4$\x03\x02\x02\x02\xC5\xC6\x07D\x02\x02\xC6\xC7\x07K\x02\x02" +
    "\xC7\xC8\x07I\x02\x02\xC8\xC9\x07K\x02\x02\xC9\xCA\x07P\x02\x02\xCA\xCB" +
    "\x07V\x02\x02\xCB&\x03\x02\x02\x02\xCC\xCD\x07H\x02\x02\xCD\xCE\x07N\x02" +
    "\x02\xCE\xCF\x07Q\x02\x02\xCF\xD0\x07C\x02\x02\xD0\xD1\x07V\x02\x02\xD1" +
    "(\x03\x02\x02\x02\xD2\xD3\x07F\x02\x02\xD3\xD4\x07Q\x02\x02\xD4\xD5\x07" +
    "W\x02\x02\xD5\xD6\x07D\x02\x02\xD6\xD7\x07N\x02\x02\xD7\xD8\x07G\x02\x02" +
    "\xD8*\x03\x02\x02\x02\xD9\xDA\x07U\x02\x02\xDA\xDB\x07V\x02\x02\xDB\xDC" +
    "\x07T\x02\x02\xDC\xDD\x07K\x02\x02\xDD\xDE\x07P\x02\x02\xDE\xDF\x07I\x02" +
    "\x02\xDF,\x03\x02\x02\x02\xE0\xE1\x07e\x02\x02\xE1\xE2\x07q\x02\x02\xE2" +
    "\xE3\x07p\x02\x02\xE3\xE4\x07p\x02\x02\xE4\xE5\x07g\x02\x02\xE5\xE6\x07" +
    "e\x02\x02\xE6\xE7\x07v\x02\x02\xE7\xE8\x07q\x02\x02\xE8\xE9\x07t\x02\x02" +
    "\xE9.\x03\x02\x02\x02\xEA\xEB\x07h\x02\x02\xEB\xEC\x07q\x02\x02\xEC\xED" +
    "\x07t\x02\x02\xED\xEE\x07o\x02\x02\xEE\xEF\x07c\x02\x02\xEF\xF0\x07v\x02" +
    "\x02\xF00\x03\x02\x02\x02\xF1\xF2\x07m\x02\x02\xF2\xF3\x07c\x02\x02\xF3" +
    "\xF4\x07h\x02\x02\xF4\xF5\x07m\x02\x02\xF5\xF6\x07c\x02\x02\xF62\x03\x02" +
    "\x02\x02\xF7\xF8\x07l\x02\x02\xF8\xF9\x07f\x02\x02\xF9\xFA\x07d\x02\x02" +
    "\xFA\xFB\x07e\x02\x02\xFB4\x03\x02\x02\x02\xFC\xFD\x07e\x02\x02\xFD\xFE" +
    "\x07u\x02\x02\xFE\xFF\x07x\x02\x02\xFF6\x03\x02\x02\x02\u0100\u0101\x07" +
    "l\x02\x02\u0101\u0102\x07u\x02\x02\u0102\u0103\x07q\x02\x02\u0103\u0104" +
    "\x07p\x02\x02\u01048\x03\x02\x02\x02\u0105\u0106\x07-\x02\x02\u0106:\x03" +
    "\x02\x02\x02\u0107\u0108\x07/\x02\x02\u0108<\x03\x02\x02\x02\u0109\u010A" +
    "\x07,\x02\x02\u010A>\x03\x02\x02\x02\u010B\u010C\x071\x02\x02\u010C@\x03" +
    "\x02\x02\x02\u010D\u010E\x07=\x02\x02\u010EB\x03\x02\x02\x02\u010F\u0110" +
    "\x07.\x02\x02\u0110D\x03\x02\x02\x02\u0111\u0112\t\x02\x02\x02\u0112F" +
    "\x03\x02\x02\x02\u0113\u0114\t\x03\x02\x02\u0114H\x03\x02\x02\x02\u0115" +
    "\u0117\x05E#\x02\u0116\u0115\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02" +
    "\u0118\u0116\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119J\x03\x02" +
    "\x02\x02\u011A\u011C\x05E#\x02\u011B\u011A\x03\x02\x02\x02\u011C\u011D" +
    "\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02" +
    "\u011E\u011F\x03\x02\x02\x02\u011F\u0121\x070\x02\x02\u0120\u0122\x05" +
    "E#\x02\u0121\u0120\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0121" +
    "\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124L\x03\x02\x02\x02\u0125" +
    "\u0127\x05E#\x02\u0126\u0125\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02" +
    "\u0128\u0126\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129\u0130\x03" +
    "\x02\x02\x02\u012A\u012C\x070\x02\x02\u012B\u012D\x05E#\x02\u012C\u012B" +
    "\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02" +
    "\u012E\u012F\x03\x02\x02\x02\u012F\u0131\x03\x02\x02\x02\u0130\u012A\x03" +
    "\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132" +
    "\u0134\x07G\x02\x02\u0133\u0135\t\x04\x02\x02\u0134\u0133\x03\x02\x02" +
    "\x02\u0134\u0135\x03\x02\x02\x02\u0135\u0137\x03\x02\x02\x02\u0136\u0138" +
    "\x05E#\x02\u0137\u0136\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139" +
    "\u0137\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013AN\x03\x02\x02" +
    "\x02\u013B\u013F\x07)\x02\x02\u013C\u013E\n\x05\x02\x02\u013D\u013C\x03" +
    "\x02\x02\x02\u013E\u0141\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u013F" +
    "\u0140\x03\x02\x02\x02\u0140\u0142\x03\x02\x02\x02\u0141\u013F\x03\x02" +
    "\x02\x02\u0142\u0143\x07)\x02\x02\u0143P\x03\x02\x02\x02\u0144\u0149\x05" +
    "G$\x02\u0145\u0148\x05G$\x02\u0146\u0148\x05E#\x02\u0147\u0145\x03\x02" +
    "\x02\x02\u0147\u0146\x03\x02\x02\x02\u0148\u014B\x03\x02\x02\x02\u0149" +
    "\u0147\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014AR\x03\x02\x02" +
    "\x02\u014B\u0149\x03\x02\x02\x02\x0E\x02\u0118\u011D\u0123\u0128\u012E" +
    "\u0130\u0134\u0139\u013F\u0147\u0149\x02";
exports.FlinkSQLLexer = FlinkSQLLexer;
//# sourceMappingURL=FlinkSQLLexer.js.map