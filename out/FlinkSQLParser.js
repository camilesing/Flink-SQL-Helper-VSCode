"use strict";
// Generated from gen/FlinkSQL.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.AliasContext = exports.IdentifierContext = exports.TableNameContext = exports.ColumnNameContext = exports.StringLiteralContext = exports.NumericLiteralContext = exports.ExpressionContext = exports.FormatNameContext = exports.ConnectorNameContext = exports.TableOptionContext = exports.DataTypeContext = exports.ColumnConstraintContext = exports.ColumnDefinitionContext = exports.FromItemContext = exports.SelectItemContext = exports.SelectStatementContext = exports.InsertStatementContext = exports.CreateTableStatementContext = exports.StatementContext = exports.StatementListContext = exports.FlinkSQLParser = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class FlinkSQLParser extends Parser_1.Parser {
    // @Override
    // @NotNull
    get vocabulary() {
        return FlinkSQLParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "FlinkSQL.g4"; }
    // @Override
    get ruleNames() { return FlinkSQLParser.ruleNames; }
    // @Override
    get serializedATN() { return FlinkSQLParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(FlinkSQLParser._ATN, this);
    }
    // @RuleVersion(0)
    statementList() {
        let _localctx = new StatementListContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, FlinkSQLParser.RULE_statementList);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 40;
                this.statement();
                this.state = 45;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 41;
                                this.match(FlinkSQLParser.T__0);
                                this.state = 42;
                                this.statement();
                            }
                        }
                    }
                    this.state = 47;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
                }
                this.state = 49;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FlinkSQLParser.T__0) {
                    {
                        this.state = 48;
                        this.match(FlinkSQLParser.T__0);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    statement() {
        let _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, FlinkSQLParser.RULE_statement);
        try {
            this.state = 54;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case FlinkSQLParser.T__1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 51;
                        this.createTableStatement();
                    }
                    break;
                case FlinkSQLParser.T__5:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 52;
                        this.insertStatement();
                    }
                    break;
                case FlinkSQLParser.T__7:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 53;
                        this.selectStatement();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    createTableStatement() {
        let _localctx = new CreateTableStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, FlinkSQLParser.RULE_createTableStatement);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 56;
                this.match(FlinkSQLParser.T__1);
                this.state = 57;
                this.tableName();
                this.state = 58;
                this.match(FlinkSQLParser.T__2);
                this.state = 59;
                this.columnDefinition();
                this.state = 64;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === FlinkSQLParser.COMMA) {
                    {
                        {
                            this.state = 60;
                            this.match(FlinkSQLParser.COMMA);
                            this.state = 61;
                            this.columnDefinition();
                        }
                    }
                    this.state = 66;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 67;
                this.match(FlinkSQLParser.T__3);
                this.state = 77;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FlinkSQLParser.T__4) {
                    {
                        this.state = 68;
                        this.match(FlinkSQLParser.T__4);
                        this.state = 69;
                        _localctx._tableOption = this.tableOption();
                        _localctx._options.push(_localctx._tableOption);
                        this.state = 74;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === FlinkSQLParser.COMMA) {
                            {
                                {
                                    this.state = 70;
                                    this.match(FlinkSQLParser.COMMA);
                                    this.state = 71;
                                    _localctx._tableOption = this.tableOption();
                                    _localctx._options.push(_localctx._tableOption);
                                }
                            }
                            this.state = 76;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    insertStatement() {
        let _localctx = new InsertStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, FlinkSQLParser.RULE_insertStatement);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 79;
                this.match(FlinkSQLParser.T__5);
                this.state = 80;
                this.tableName();
                this.state = 89;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FlinkSQLParser.IDENTIFIER) {
                    {
                        this.state = 81;
                        this.columnName();
                        this.state = 86;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === FlinkSQLParser.COMMA) {
                            {
                                {
                                    this.state = 82;
                                    this.match(FlinkSQLParser.COMMA);
                                    this.state = 83;
                                    this.columnName();
                                }
                            }
                            this.state = 88;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 91;
                this.match(FlinkSQLParser.T__6);
                this.state = 92;
                this.match(FlinkSQLParser.T__2);
                this.state = 93;
                this.expression(0);
                this.state = 98;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === FlinkSQLParser.COMMA) {
                    {
                        {
                            this.state = 94;
                            this.match(FlinkSQLParser.COMMA);
                            this.state = 95;
                            this.expression(0);
                        }
                    }
                    this.state = 100;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 101;
                this.match(FlinkSQLParser.T__3);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    selectStatement() {
        let _localctx = new SelectStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, FlinkSQLParser.RULE_selectStatement);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 103;
                this.match(FlinkSQLParser.T__7);
                this.state = 104;
                this.selectItem();
                this.state = 109;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === FlinkSQLParser.COMMA) {
                    {
                        {
                            this.state = 105;
                            this.match(FlinkSQLParser.COMMA);
                            this.state = 106;
                            this.selectItem();
                        }
                    }
                    this.state = 111;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 112;
                this.match(FlinkSQLParser.T__8);
                this.state = 113;
                this.fromItem();
                this.state = 118;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === FlinkSQLParser.COMMA) {
                    {
                        {
                            this.state = 114;
                            this.match(FlinkSQLParser.COMMA);
                            this.state = 115;
                            this.fromItem();
                        }
                    }
                    this.state = 120;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 123;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FlinkSQLParser.T__9) {
                    {
                        this.state = 121;
                        this.match(FlinkSQLParser.T__9);
                        this.state = 122;
                        this.expression(0);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    selectItem() {
        let _localctx = new SelectItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, FlinkSQLParser.RULE_selectItem);
        try {
            this.state = 130;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 125;
                        this.expression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 126;
                        this.columnName();
                        this.state = 127;
                        this.match(FlinkSQLParser.T__10);
                        this.state = 128;
                        this.expression(0);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    fromItem() {
        let _localctx = new FromItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, FlinkSQLParser.RULE_fromItem);
        let _la;
        try {
            this.state = 143;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case FlinkSQLParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 132;
                        this.tableName();
                        this.state = 135;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FlinkSQLParser.T__11) {
                            {
                                this.state = 133;
                                this.match(FlinkSQLParser.T__11);
                                this.state = 134;
                                this.alias();
                            }
                        }
                    }
                    break;
                case FlinkSQLParser.T__2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 137;
                        this.match(FlinkSQLParser.T__2);
                        this.state = 138;
                        this.selectStatement();
                        this.state = 139;
                        this.match(FlinkSQLParser.T__3);
                        this.state = 140;
                        this.match(FlinkSQLParser.T__11);
                        this.state = 141;
                        this.alias();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    columnDefinition() {
        let _localctx = new ColumnDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, FlinkSQLParser.RULE_columnDefinition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 145;
                this.columnName();
                this.state = 146;
                this.dataType();
                this.state = 150;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSQLParser.T__12) | (1 << FlinkSQLParser.T__13) | (1 << FlinkSQLParser.T__14) | (1 << FlinkSQLParser.T__15))) !== 0)) {
                    {
                        {
                            this.state = 147;
                            this.columnConstraint();
                        }
                    }
                    this.state = 152;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    columnConstraint() {
        let _localctx = new ColumnConstraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, FlinkSQLParser.RULE_columnConstraint);
        try {
            this.state = 158;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case FlinkSQLParser.T__12:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 153;
                        this.match(FlinkSQLParser.T__12);
                    }
                    break;
                case FlinkSQLParser.T__13:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 154;
                        this.match(FlinkSQLParser.T__13);
                    }
                    break;
                case FlinkSQLParser.T__14:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 155;
                        this.match(FlinkSQLParser.T__14);
                    }
                    break;
                case FlinkSQLParser.T__15:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 156;
                        this.match(FlinkSQLParser.T__15);
                        this.state = 157;
                        this.expression(0);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    dataType() {
        let _localctx = new DataTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, FlinkSQLParser.RULE_dataType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 160;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSQLParser.T__16) | (1 << FlinkSQLParser.T__17) | (1 << FlinkSQLParser.T__18) | (1 << FlinkSQLParser.T__19) | (1 << FlinkSQLParser.T__20))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    tableOption() {
        let _localctx = new TableOptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, FlinkSQLParser.RULE_tableOption);
        try {
            this.state = 168;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case FlinkSQLParser.T__21:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 162;
                        this.match(FlinkSQLParser.T__21);
                        this.state = 163;
                        this.match(FlinkSQLParser.T__10);
                        this.state = 164;
                        this.connectorName();
                    }
                    break;
                case FlinkSQLParser.T__22:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 165;
                        this.match(FlinkSQLParser.T__22);
                        this.state = 166;
                        this.match(FlinkSQLParser.T__10);
                        this.state = 167;
                        this.formatName();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    connectorName() {
        let _localctx = new ConnectorNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, FlinkSQLParser.RULE_connectorName);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 170;
                _la = this._input.LA(1);
                if (!(_la === FlinkSQLParser.T__23 || _la === FlinkSQLParser.T__24)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    formatName() {
        let _localctx = new FormatNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, FlinkSQLParser.RULE_formatName);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 172;
                _la = this._input.LA(1);
                if (!(_la === FlinkSQLParser.T__25 || _la === FlinkSQLParser.T__26)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 26;
        this.enterRecursionRule(_localctx, 26, FlinkSQLParser.RULE_expression, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 182;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case FlinkSQLParser.INT_LITERAL:
                    case FlinkSQLParser.FLOAT_LITERAL:
                    case FlinkSQLParser.DOUBLE_LITERAL:
                        {
                            this.state = 175;
                            this.numericLiteral();
                        }
                        break;
                    case FlinkSQLParser.STRING_LITERAL:
                        {
                            this.state = 176;
                            this.stringLiteral();
                        }
                        break;
                    case FlinkSQLParser.IDENTIFIER:
                        {
                            this.state = 177;
                            this.identifier();
                        }
                        break;
                    case FlinkSQLParser.T__2:
                        {
                            this.state = 178;
                            this.match(FlinkSQLParser.T__2);
                            this.state = 179;
                            this.expression(0);
                            this.state = 180;
                            this.match(FlinkSQLParser.T__3);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 214;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 212;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_expression);
                                        this.state = 184;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 185;
                                        this.match(FlinkSQLParser.T__27);
                                        this.state = 186;
                                        this.expression(0);
                                        {
                                            this.state = 187;
                                            this.match(FlinkSQLParser.T__27);
                                            this.state = 188;
                                            this.expression(0);
                                            this.state = 189;
                                            this.expression(0);
                                        }
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_expression);
                                        this.state = 191;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 192;
                                        this.match(FlinkSQLParser.T__28);
                                        this.state = 193;
                                        this.expression(0);
                                        {
                                            this.state = 194;
                                            this.match(FlinkSQLParser.T__28);
                                            this.state = 195;
                                            this.expression(0);
                                            this.state = 196;
                                            this.expression(0);
                                        }
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_expression);
                                        this.state = 198;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 199;
                                        this.match(FlinkSQLParser.T__29);
                                        this.state = 200;
                                        this.expression(0);
                                        {
                                            this.state = 201;
                                            this.match(FlinkSQLParser.T__29);
                                            this.state = 202;
                                            this.expression(0);
                                            this.state = 203;
                                            this.expression(0);
                                        }
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, FlinkSQLParser.RULE_expression);
                                        this.state = 205;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 206;
                                        this.match(FlinkSQLParser.T__30);
                                        this.state = 207;
                                        this.expression(0);
                                        {
                                            this.state = 208;
                                            this.match(FlinkSQLParser.T__30);
                                            this.state = 209;
                                            this.expression(0);
                                            this.state = 210;
                                            this.expression(0);
                                        }
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 216;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    numericLiteral() {
        let _localctx = new NumericLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, FlinkSQLParser.RULE_numericLiteral);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 217;
                _la = this._input.LA(1);
                if (!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (FlinkSQLParser.INT_LITERAL - 34)) | (1 << (FlinkSQLParser.FLOAT_LITERAL - 34)) | (1 << (FlinkSQLParser.DOUBLE_LITERAL - 34)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    stringLiteral() {
        let _localctx = new StringLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, FlinkSQLParser.RULE_stringLiteral);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 219;
                this.match(FlinkSQLParser.STRING_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    columnName() {
        let _localctx = new ColumnNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, FlinkSQLParser.RULE_columnName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 221;
                this.match(FlinkSQLParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    tableName() {
        let _localctx = new TableNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, FlinkSQLParser.RULE_tableName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 223;
                this.match(FlinkSQLParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    identifier() {
        let _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, FlinkSQLParser.RULE_identifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 225;
                this.match(FlinkSQLParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    alias() {
        let _localctx = new AliasContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, FlinkSQLParser.RULE_alias);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 227;
                this.match(FlinkSQLParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 13:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    }
    expression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 5);
            case 1:
                return this.precpred(this._ctx, 4);
            case 2:
                return this.precpred(this._ctx, 3);
            case 3:
                return this.precpred(this._ctx, 2);
        }
        return true;
    }
    static get _ATN() {
        if (!FlinkSQLParser.__ATN) {
            FlinkSQLParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(FlinkSQLParser._serializedATN));
        }
        return FlinkSQLParser.__ATN;
    }
}
FlinkSQLParser.T__0 = 1;
FlinkSQLParser.T__1 = 2;
FlinkSQLParser.T__2 = 3;
FlinkSQLParser.T__3 = 4;
FlinkSQLParser.T__4 = 5;
FlinkSQLParser.T__5 = 6;
FlinkSQLParser.T__6 = 7;
FlinkSQLParser.T__7 = 8;
FlinkSQLParser.T__8 = 9;
FlinkSQLParser.T__9 = 10;
FlinkSQLParser.T__10 = 11;
FlinkSQLParser.T__11 = 12;
FlinkSQLParser.T__12 = 13;
FlinkSQLParser.T__13 = 14;
FlinkSQLParser.T__14 = 15;
FlinkSQLParser.T__15 = 16;
FlinkSQLParser.T__16 = 17;
FlinkSQLParser.T__17 = 18;
FlinkSQLParser.T__18 = 19;
FlinkSQLParser.T__19 = 20;
FlinkSQLParser.T__20 = 21;
FlinkSQLParser.T__21 = 22;
FlinkSQLParser.T__22 = 23;
FlinkSQLParser.T__23 = 24;
FlinkSQLParser.T__24 = 25;
FlinkSQLParser.T__25 = 26;
FlinkSQLParser.T__26 = 27;
FlinkSQLParser.T__27 = 28;
FlinkSQLParser.T__28 = 29;
FlinkSQLParser.T__29 = 30;
FlinkSQLParser.T__30 = 31;
FlinkSQLParser.SEMICOLON = 32;
FlinkSQLParser.COMMA = 33;
FlinkSQLParser.INT_LITERAL = 34;
FlinkSQLParser.FLOAT_LITERAL = 35;
FlinkSQLParser.DOUBLE_LITERAL = 36;
FlinkSQLParser.STRING_LITERAL = 37;
FlinkSQLParser.IDENTIFIER = 38;
FlinkSQLParser.RULE_statementList = 0;
FlinkSQLParser.RULE_statement = 1;
FlinkSQLParser.RULE_createTableStatement = 2;
FlinkSQLParser.RULE_insertStatement = 3;
FlinkSQLParser.RULE_selectStatement = 4;
FlinkSQLParser.RULE_selectItem = 5;
FlinkSQLParser.RULE_fromItem = 6;
FlinkSQLParser.RULE_columnDefinition = 7;
FlinkSQLParser.RULE_columnConstraint = 8;
FlinkSQLParser.RULE_dataType = 9;
FlinkSQLParser.RULE_tableOption = 10;
FlinkSQLParser.RULE_connectorName = 11;
FlinkSQLParser.RULE_formatName = 12;
FlinkSQLParser.RULE_expression = 13;
FlinkSQLParser.RULE_numericLiteral = 14;
FlinkSQLParser.RULE_stringLiteral = 15;
FlinkSQLParser.RULE_columnName = 16;
FlinkSQLParser.RULE_tableName = 17;
FlinkSQLParser.RULE_identifier = 18;
FlinkSQLParser.RULE_alias = 19;
// tslint:disable:no-trailing-whitespace
FlinkSQLParser.ruleNames = [
    "statementList", "statement", "createTableStatement", "insertStatement",
    "selectStatement", "selectItem", "fromItem", "columnDefinition", "columnConstraint",
    "dataType", "tableOption", "connectorName", "formatName", "expression",
    "numericLiteral", "stringLiteral", "columnName", "tableName", "identifier",
    "alias",
];
FlinkSQLParser._LITERAL_NAMES = [
    undefined, "'SEMICOLON'", "'CREATE TABLE'", "'('", "')'", "'WITH'", "'INSERT INTO'",
    "'VALUES'", "'SELECT'", "'FROM'", "'WHERE'", "'='", "'AS'", "'PRIMARY KEY'",
    "'NOT NULL'", "'UNIQUE'", "'DEFAULT'", "'INT'", "'BIGINT'", "'FLOAT'",
    "'DOUBLE'", "'STRING'", "'connector'", "'format'", "'kafka'", "'jdbc'",
    "'csv'", "'json'", "'+'", "'-'", "'*'", "'/'", "';'", "','",
];
FlinkSQLParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, "SEMICOLON", "COMMA", "INT_LITERAL",
    "FLOAT_LITERAL", "DOUBLE_LITERAL", "STRING_LITERAL", "IDENTIFIER",
];
FlinkSQLParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(FlinkSQLParser._LITERAL_NAMES, FlinkSQLParser._SYMBOLIC_NAMES, []);
FlinkSQLParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03(\xE8\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x03\x02\x07\x02" +
    ".\n\x02\f\x02\x0E\x021\v\x02\x03\x02\x05\x024\n\x02\x03\x03\x03\x03\x03" +
    "\x03\x05\x039\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07" +
    "\x04A\n\x04\f\x04\x0E\x04D\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
    "\x07\x04K\n\x04\f\x04\x0E\x04N\v\x04\x05\x04P\n\x04\x03\x05\x03\x05\x03" +
    "\x05\x03\x05\x03\x05\x07\x05W\n\x05\f\x05\x0E\x05Z\v\x05\x05\x05\\\n\x05" +
    "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05c\n\x05\f\x05\x0E\x05" +
    "f\v\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06n\n\x06" +
    "\f\x06\x0E\x06q\v\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06w\n\x06\f" +
    "\x06\x0E\x06z\v\x06\x03\x06\x03\x06\x05\x06~\n\x06\x03\x07\x03\x07\x03" +
    "\x07\x03\x07\x03\x07\x05\x07\x85\n\x07\x03\b\x03\b\x03\b\x05\b\x8A\n\b" +
    "\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\x92\n\b\x03\t\x03\t\x03\t\x07" +
    "\t\x97\n\t\f\t\x0E\t\x9A\v\t\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xA1\n" +
    "\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xAB\n\f\x03\r" +
    "\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
    "\x03\x0F\x03\x0F\x05\x0F\xB9\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
    "\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
    "\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
    "\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xD7\n\x0F\f\x0F\x0E" +
    "\x0F\xDA\v\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13" +
    "\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x02\x02\x03\x1C\x16\x02" +
    "\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
    "\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02\x02" +
    "\x06\x03\x02\x13\x17\x03\x02\x1A\x1B\x03\x02\x1C\x1D\x03\x02$&\x02\xEF" +
    "\x02*\x03\x02\x02\x02\x048\x03\x02\x02\x02\x06:\x03\x02\x02\x02\bQ\x03" +
    "\x02\x02\x02\ni\x03\x02\x02\x02\f\x84\x03\x02\x02\x02\x0E\x91\x03\x02" +
    "\x02\x02\x10\x93\x03\x02\x02\x02\x12\xA0\x03\x02\x02\x02\x14\xA2\x03\x02" +
    "\x02\x02\x16\xAA\x03\x02\x02\x02\x18\xAC\x03\x02\x02\x02\x1A\xAE\x03\x02" +
    "\x02\x02\x1C\xB8\x03\x02\x02\x02\x1E\xDB\x03\x02\x02\x02 \xDD\x03\x02" +
    "\x02\x02\"\xDF\x03\x02\x02\x02$\xE1\x03\x02\x02\x02&\xE3\x03\x02\x02\x02" +
    "(\xE5\x03\x02\x02\x02*/\x05\x04\x03\x02+,\x07\x03\x02\x02,.\x05\x04\x03" +
    "\x02-+\x03\x02\x02\x02.1\x03\x02\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02" +
    "\x0203\x03\x02\x02\x021/\x03\x02\x02\x0224\x07\x03\x02\x0232\x03\x02\x02" +
    "\x0234\x03\x02\x02\x024\x03\x03\x02\x02\x0259\x05\x06\x04\x0269\x05\b" +
    "\x05\x0279\x05\n\x06\x0285\x03\x02\x02\x0286\x03\x02\x02\x0287\x03\x02" +
    "\x02\x029\x05\x03\x02\x02\x02:;\x07\x04\x02\x02;<\x05$\x13\x02<=\x07\x05" +
    "\x02\x02=B\x05\x10\t\x02>?\x07#\x02\x02?A\x05\x10\t\x02@>\x03\x02\x02" +
    "\x02AD\x03\x02\x02\x02B@\x03\x02\x02\x02BC\x03\x02\x02\x02CE\x03\x02\x02" +
    "\x02DB\x03\x02\x02\x02EO\x07\x06\x02\x02FG\x07\x07\x02\x02GL\x05\x16\f" +
    "\x02HI\x07#\x02\x02IK\x05\x16\f\x02JH\x03\x02\x02\x02KN\x03\x02\x02\x02" +
    "LJ\x03\x02\x02\x02LM\x03\x02\x02\x02MP\x03\x02\x02\x02NL\x03\x02\x02\x02" +
    "OF\x03\x02\x02\x02OP\x03\x02\x02\x02P\x07\x03\x02\x02\x02QR\x07\b\x02" +
    "\x02R[\x05$\x13\x02SX\x05\"\x12\x02TU\x07#\x02\x02UW\x05\"\x12\x02VT\x03" +
    "\x02\x02\x02WZ\x03\x02\x02\x02XV\x03\x02\x02\x02XY\x03\x02\x02\x02Y\\" +
    "\x03\x02\x02\x02ZX\x03\x02\x02\x02[S\x03\x02\x02\x02[\\\x03\x02\x02\x02" +
    "\\]\x03\x02\x02\x02]^\x07\t\x02\x02^_\x07\x05\x02\x02_d\x05\x1C\x0F\x02" +
    "`a\x07#\x02\x02ac\x05\x1C\x0F\x02b`\x03\x02\x02\x02cf\x03\x02\x02\x02" +
    "db\x03\x02\x02\x02de\x03\x02\x02\x02eg\x03\x02\x02\x02fd\x03\x02\x02\x02" +
    "gh\x07\x06\x02\x02h\t\x03\x02\x02\x02ij\x07\n\x02\x02jo\x05\f\x07\x02" +
    "kl\x07#\x02\x02ln\x05\f\x07\x02mk\x03\x02\x02\x02nq\x03\x02\x02\x02om" +
    "\x03\x02\x02\x02op\x03\x02\x02\x02pr\x03\x02\x02\x02qo\x03\x02\x02\x02" +
    "rs\x07\v\x02\x02sx\x05\x0E\b\x02tu\x07#\x02\x02uw\x05\x0E\b\x02vt\x03" +
    "\x02\x02\x02wz\x03\x02\x02\x02xv\x03\x02\x02\x02xy\x03\x02\x02\x02y}\x03" +
    "\x02\x02\x02zx\x03\x02\x02\x02{|\x07\f\x02\x02|~\x05\x1C\x0F\x02}{\x03" +
    "\x02\x02\x02}~\x03\x02\x02\x02~\v\x03\x02\x02\x02\x7F\x85\x05\x1C\x0F" +
    "\x02\x80\x81\x05\"\x12\x02\x81\x82\x07\r\x02\x02\x82\x83\x05\x1C\x0F\x02" +
    "\x83\x85\x03\x02\x02\x02\x84\x7F\x03\x02\x02\x02\x84\x80\x03\x02\x02\x02" +
    "\x85\r\x03\x02\x02\x02\x86\x89\x05$\x13\x02\x87\x88\x07\x0E\x02\x02\x88" +
    "\x8A\x05(\x15\x02\x89\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A" +
    "\x92\x03\x02\x02\x02\x8B\x8C\x07\x05\x02\x02\x8C\x8D\x05\n\x06\x02\x8D" +
    "\x8E\x07\x06\x02\x02\x8E\x8F\x07\x0E\x02\x02\x8F\x90\x05(\x15\x02\x90" +
    "\x92\x03\x02\x02\x02\x91\x86\x03\x02\x02\x02\x91\x8B\x03\x02\x02\x02\x92" +
    "\x0F\x03\x02\x02\x02\x93\x94\x05\"\x12\x02\x94\x98\x05\x14\v\x02\x95\x97" +
    "\x05\x12\n\x02\x96\x95\x03\x02\x02\x02\x97\x9A\x03\x02\x02\x02\x98\x96" +
    "\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x11\x03\x02\x02\x02\x9A\x98" +
    "\x03\x02\x02\x02\x9B\xA1\x07\x0F\x02\x02\x9C\xA1\x07\x10\x02\x02\x9D\xA1" +
    "\x07\x11\x02\x02\x9E\x9F\x07\x12\x02\x02\x9F\xA1\x05\x1C\x0F\x02\xA0\x9B" +
    "\x03\x02\x02\x02\xA0\x9C\x03\x02\x02\x02\xA0\x9D\x03\x02\x02\x02\xA0\x9E" +
    "\x03\x02\x02\x02\xA1\x13\x03\x02\x02\x02\xA2\xA3\t\x02\x02\x02\xA3\x15" +
    "\x03\x02\x02\x02\xA4\xA5\x07\x18\x02\x02\xA5\xA6\x07\r\x02\x02\xA6\xAB" +
    "\x05\x18\r\x02\xA7\xA8\x07\x19\x02\x02\xA8\xA9\x07\r\x02\x02\xA9\xAB\x05" +
    "\x1A\x0E\x02\xAA\xA4\x03\x02\x02\x02\xAA\xA7\x03\x02\x02\x02\xAB\x17\x03" +
    "\x02\x02\x02\xAC\xAD\t\x03\x02\x02\xAD\x19\x03\x02\x02\x02\xAE\xAF\t\x04" +
    "\x02\x02\xAF\x1B\x03\x02\x02\x02\xB0\xB1\b\x0F\x01\x02\xB1\xB9\x05\x1E" +
    "\x10\x02\xB2\xB9\x05 \x11\x02\xB3\xB9\x05&\x14\x02\xB4\xB5\x07\x05\x02" +
    "\x02\xB5\xB6\x05\x1C\x0F\x02\xB6\xB7\x07\x06\x02\x02\xB7\xB9\x03\x02\x02" +
    "\x02\xB8\xB0\x03\x02\x02\x02\xB8\xB2\x03\x02\x02\x02\xB8\xB3\x03\x02\x02" +
    "\x02\xB8\xB4\x03\x02\x02\x02\xB9\xD8\x03\x02\x02\x02\xBA\xBB\f\x07\x02" +
    "\x02\xBB\xBC\x07\x1E\x02\x02\xBC\xBD\x05\x1C\x0F\x02\xBD\xBE\x07\x1E\x02" +
    "\x02\xBE\xBF\x05\x1C\x0F\x02\xBF\xC0\x05\x1C\x0F\x02\xC0\xD7\x03\x02\x02" +
    "\x02\xC1\xC2\f\x06\x02\x02\xC2\xC3\x07\x1F\x02\x02\xC3\xC4\x05\x1C\x0F" +
    "\x02\xC4\xC5\x07\x1F\x02\x02\xC5\xC6\x05\x1C\x0F\x02\xC6\xC7\x05\x1C\x0F" +
    "\x02\xC7\xD7\x03\x02\x02\x02\xC8\xC9\f\x05\x02\x02\xC9\xCA\x07 \x02\x02" +
    "\xCA\xCB\x05\x1C\x0F\x02\xCB\xCC\x07 \x02\x02\xCC\xCD\x05\x1C\x0F\x02" +
    "\xCD\xCE\x05\x1C\x0F\x02\xCE\xD7\x03\x02\x02\x02\xCF\xD0\f\x04\x02\x02" +
    "\xD0\xD1\x07!\x02\x02\xD1\xD2\x05\x1C\x0F\x02\xD2\xD3\x07!\x02\x02\xD3" +
    "\xD4\x05\x1C\x0F\x02\xD4\xD5\x05\x1C\x0F\x02\xD5\xD7\x03\x02\x02\x02\xD6" +
    "\xBA\x03\x02\x02\x02\xD6\xC1\x03\x02\x02\x02\xD6\xC8\x03\x02\x02\x02\xD6" +
    "\xCF\x03\x02\x02\x02\xD7\xDA\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD8" +
    "\xD9\x03\x02\x02\x02\xD9\x1D\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDB" +
    "\xDC\t\x05\x02\x02\xDC\x1F\x03\x02\x02\x02\xDD\xDE\x07\'\x02\x02\xDE!" +
    "\x03\x02\x02\x02\xDF\xE0\x07(\x02\x02\xE0#\x03\x02\x02\x02\xE1\xE2\x07" +
    "(\x02\x02\xE2%\x03\x02\x02\x02\xE3\xE4\x07(\x02\x02\xE4\'\x03\x02\x02" +
    "\x02\xE5\xE6\x07(\x02\x02\xE6)\x03\x02\x02\x02\x17/38BLOX[dox}\x84\x89" +
    "\x91\x98\xA0\xAA\xB8\xD6\xD8";
exports.FlinkSQLParser = FlinkSQLParser;
class StatementListContext extends ParserRuleContext_1.ParserRuleContext {
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FlinkSQLParser.RULE_statementList; }
    // @Override
    enterRule(listener) {
        if (listener.enterStatementList) {
            listener.enterStatementList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStatementList) {
            listener.exitStatementList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStatementList) {
            return visitor.visitStatementList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StatementListContext = StatementListContext;
class StatementContext extends ParserRuleContext_1.ParserRuleContext {
    createTableStatement() {
        return this.tryGetRuleContext(0, CreateTableStatementContext);
    }
    insertStatement() {
        return this.tryGetRuleContext(0, InsertStatementContext);
    }
    selectStatement() {
        return this.tryGetRuleContext(0, SelectStatementContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FlinkSQLParser.RULE_statement; }
    // @Override
    enterRule(listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StatementContext = StatementContext;
class CreateTableStatementContext extends ParserRuleContext_1.ParserRuleContext {
    tableName() {
        return this.getRuleContext(0, TableNameContext);
    }
    columnDefinition(i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnDefinitionContext);
        }
        else {
            return this.getRuleContext(i, ColumnDefinitionContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSQLParser.COMMA);
        }
        else {
            return this.getToken(FlinkSQLParser.COMMA, i);
        }
    }
    tableOption(i) {
        if (i === undefined) {
            return this.getRuleContexts(TableOptionContext);
        }
        else {
            return this.getRuleContext(i, TableOptionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._options = [];
    }
    // @Override
    get ruleIndex() { return FlinkSQLParser.RULE_createTableStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterCreateTableStatement) {
            listener.enterCreateTableStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCreateTableStatement) {
            listener.exitCreateTableStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCreateTableStatement) {
            return visitor.visitCreateTableStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CreateTableStatementContext = CreateTableStatementContext;
class InsertStatementContext extends ParserRuleContext_1.ParserRuleContext {
    tableName() {
        return this.getRuleContext(0, TableNameContext);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    columnName(i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnNameContext);
        }
        else {
            return this.getRuleContext(i, ColumnNameContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSQLParser.COMMA);
        }
        else {
            return this.getToken(FlinkSQLParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FlinkSQLParser.RULE_insertStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterInsertStatement) {
            listener.enterInsertStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInsertStatement) {
            listener.exitInsertStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInsertStatement) {
            return visitor.visitInsertStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InsertStatementContext = InsertStatementContext;
class SelectStatementContext extends ParserRuleContext_1.ParserRuleContext {
    selectItem(i) {
        if (i === undefined) {
            return this.getRuleContexts(SelectItemContext);
        }
        else {
            return this.getRuleContext(i, SelectItemContext);
        }
    }
    fromItem(i) {
        if (i === undefined) {
            return this.getRuleContexts(FromItemContext);
        }
        else {
            return this.getRuleContext(i, FromItemContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSQLParser.COMMA);
        }
        else {
            return this.getToken(FlinkSQLParser.COMMA, i);
        }
    }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FlinkSQLParser.RULE_selectStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterSelectStatement) {
            listener.enterSelectStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSelectStatement) {
            listener.exitSelectStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSelectStatement) {
            return visitor.visitSelectStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SelectStatementContext = SelectStatementContext;
class SelectItemContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    columnName() {
        return this.tryGetRuleContext(0, ColumnNameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FlinkSQLParser.RULE_selectItem; }
    // @Override
    enterRule(listener) {
        if (listener.enterSelectItem) {
            listener.enterSelectItem(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSelectItem) {
            listener.exitSelectItem(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSelectItem) {
            return visitor.visitSelectItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SelectItemContext = SelectItemContext;
class FromItemContext extends ParserRuleContext_1.ParserRuleContext {
    tableName() {
        return this.tryGetRuleContext(0, TableNameContext);
    }
    alias() {
        return this.tryGetRuleContext(0, AliasContext);
    }
    selectStatement() {
        return this.tryGetRuleContext(0, SelectStatementContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FlinkSQLParser.RULE_fromItem; }
    // @Override
    enterRule(listener) {
        if (listener.enterFromItem) {
            listener.enterFromItem(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFromItem) {
            listener.exitFromItem(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFromItem) {
            return visitor.visitFromItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FromItemContext = FromItemContext;
class ColumnDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    columnName() {
        return this.getRuleContext(0, ColumnNameContext);
    }
    dataType() {
        return this.getRuleContext(0, DataTypeContext);
    }
    columnConstraint(i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnConstraintContext);
        }
        else {
            return this.getRuleContext(i, ColumnConstraintContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FlinkSQLParser.RULE_columnDefinition; }
    // @Override
    enterRule(listener) {
        if (listener.enterColumnDefinition) {
            listener.enterColumnDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitColumnDefinition) {
            listener.exitColumnDefinition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitColumnDefinition) {
            return visitor.visitColumnDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ColumnDefinitionContext = ColumnDefinitionContext;
class ColumnConstraintContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FlinkSQLParser.RULE_columnConstraint; }
    // @Override
    enterRule(listener) {
        if (listener.enterColumnConstraint) {
            listener.enterColumnConstraint(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitColumnConstraint) {
            listener.exitColumnConstraint(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitColumnConstraint) {
            return visitor.visitColumnConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ColumnConstraintContext = ColumnConstraintContext;
class DataTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FlinkSQLParser.RULE_dataType; }
    // @Override
    enterRule(listener) {
        if (listener.enterDataType) {
            listener.enterDataType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDataType) {
            listener.exitDataType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDataType) {
            return visitor.visitDataType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DataTypeContext = DataTypeContext;
class TableOptionContext extends ParserRuleContext_1.ParserRuleContext {
    connectorName() {
        return this.tryGetRuleContext(0, ConnectorNameContext);
    }
    formatName() {
        return this.tryGetRuleContext(0, FormatNameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FlinkSQLParser.RULE_tableOption; }
    // @Override
    enterRule(listener) {
        if (listener.enterTableOption) {
            listener.enterTableOption(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTableOption) {
            listener.exitTableOption(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTableOption) {
            return visitor.visitTableOption(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TableOptionContext = TableOptionContext;
class ConnectorNameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FlinkSQLParser.RULE_connectorName; }
    // @Override
    enterRule(listener) {
        if (listener.enterConnectorName) {
            listener.enterConnectorName(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConnectorName) {
            listener.exitConnectorName(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConnectorName) {
            return visitor.visitConnectorName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConnectorNameContext = ConnectorNameContext;
class FormatNameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FlinkSQLParser.RULE_formatName; }
    // @Override
    enterRule(listener) {
        if (listener.enterFormatName) {
            listener.enterFormatName(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFormatName) {
            listener.exitFormatName(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFormatName) {
            return visitor.visitFormatName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FormatNameContext = FormatNameContext;
class ExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    numericLiteral() {
        return this.tryGetRuleContext(0, NumericLiteralContext);
    }
    stringLiteral() {
        return this.tryGetRuleContext(0, StringLiteralContext);
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FlinkSQLParser.RULE_expression; }
    // @Override
    enterRule(listener) {
        if (listener.enterExpression) {
            listener.enterExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpression) {
            listener.exitExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpressionContext = ExpressionContext;
class NumericLiteralContext extends ParserRuleContext_1.ParserRuleContext {
    INT_LITERAL() { return this.tryGetToken(FlinkSQLParser.INT_LITERAL, 0); }
    FLOAT_LITERAL() { return this.tryGetToken(FlinkSQLParser.FLOAT_LITERAL, 0); }
    DOUBLE_LITERAL() { return this.tryGetToken(FlinkSQLParser.DOUBLE_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FlinkSQLParser.RULE_numericLiteral; }
    // @Override
    enterRule(listener) {
        if (listener.enterNumericLiteral) {
            listener.enterNumericLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNumericLiteral) {
            listener.exitNumericLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNumericLiteral) {
            return visitor.visitNumericLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NumericLiteralContext = NumericLiteralContext;
class StringLiteralContext extends ParserRuleContext_1.ParserRuleContext {
    STRING_LITERAL() { return this.getToken(FlinkSQLParser.STRING_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FlinkSQLParser.RULE_stringLiteral; }
    // @Override
    enterRule(listener) {
        if (listener.enterStringLiteral) {
            listener.enterStringLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStringLiteral) {
            listener.exitStringLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStringLiteral) {
            return visitor.visitStringLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StringLiteralContext = StringLiteralContext;
class ColumnNameContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(FlinkSQLParser.IDENTIFIER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FlinkSQLParser.RULE_columnName; }
    // @Override
    enterRule(listener) {
        if (listener.enterColumnName) {
            listener.enterColumnName(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitColumnName) {
            listener.exitColumnName(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitColumnName) {
            return visitor.visitColumnName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ColumnNameContext = ColumnNameContext;
class TableNameContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(FlinkSQLParser.IDENTIFIER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FlinkSQLParser.RULE_tableName; }
    // @Override
    enterRule(listener) {
        if (listener.enterTableName) {
            listener.enterTableName(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTableName) {
            listener.exitTableName(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTableName) {
            return visitor.visitTableName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TableNameContext = TableNameContext;
class IdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(FlinkSQLParser.IDENTIFIER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FlinkSQLParser.RULE_identifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterIdentifier) {
            listener.enterIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdentifier) {
            listener.exitIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentifierContext = IdentifierContext;
class AliasContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(FlinkSQLParser.IDENTIFIER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FlinkSQLParser.RULE_alias; }
    // @Override
    enterRule(listener) {
        if (listener.enterAlias) {
            listener.enterAlias(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAlias) {
            listener.exitAlias(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAlias) {
            return visitor.visitAlias(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AliasContext = AliasContext;
//# sourceMappingURL=FlinkSQLParser.js.map