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
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		SEMICOLON=32, COMMA=33, INT_LITERAL=34, FLOAT_LITERAL=35, DOUBLE_LITERAL=36, 
		STRING_LITERAL=37, IDENTIFIER=38;
	public static final int
		RULE_statementList = 0, RULE_statement = 1, RULE_createTableStatement = 2, 
		RULE_insertStatement = 3, RULE_selectStatement = 4, RULE_selectItem = 5, 
		RULE_fromItem = 6, RULE_columnDefinition = 7, RULE_columnConstraint = 8, 
		RULE_dataType = 9, RULE_tableOption = 10, RULE_connectorName = 11, RULE_formatName = 12, 
		RULE_expression = 13, RULE_numericLiteral = 14, RULE_stringLiteral = 15, 
		RULE_columnName = 16, RULE_tableName = 17, RULE_identifier = 18, RULE_alias = 19;
	private static String[] makeRuleNames() {
		return new String[] {
			"statementList", "statement", "createTableStatement", "insertStatement", 
			"selectStatement", "selectItem", "fromItem", "columnDefinition", "columnConstraint", 
			"dataType", "tableOption", "connectorName", "formatName", "expression", 
			"numericLiteral", "stringLiteral", "columnName", "tableName", "identifier", 
			"alias"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'SEMICOLON'", "'CREATE TABLE'", "'('", "')'", "'WITH'", "'INSERT INTO'", 
			"'VALUES'", "'SELECT'", "'FROM'", "'WHERE'", "'='", "'AS'", "'PRIMARY KEY'", 
			"'NOT NULL'", "'UNIQUE'", "'DEFAULT'", "'INT'", "'BIGINT'", "'FLOAT'", 
			"'DOUBLE'", "'STRING'", "'connector'", "'format'", "'kafka'", "'jdbc'", 
			"'csv'", "'json'", "'+'", "'-'", "'*'", "'/'", "';'", "','"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, "SEMICOLON", "COMMA", 
			"INT_LITERAL", "FLOAT_LITERAL", "DOUBLE_LITERAL", "STRING_LITERAL", "IDENTIFIER"
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

	public static class StatementListContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public StatementListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statementList; }
	}

	public final StatementListContext statementList() throws RecognitionException {
		StatementListContext _localctx = new StatementListContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_statementList);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(40);
			statement();
			setState(45);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(41);
					match(T__0);
					setState(42);
					statement();
					}
					} 
				}
				setState(47);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			}
			setState(49);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__0) {
				{
				setState(48);
				match(T__0);
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

	public static class StatementContext extends ParserRuleContext {
		public CreateTableStatementContext createTableStatement() {
			return getRuleContext(CreateTableStatementContext.class,0);
		}
		public InsertStatementContext insertStatement() {
			return getRuleContext(InsertStatementContext.class,0);
		}
		public SelectStatementContext selectStatement() {
			return getRuleContext(SelectStatementContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		try {
			setState(54);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
				enterOuterAlt(_localctx, 1);
				{
				setState(51);
				createTableStatement();
				}
				break;
			case T__5:
				enterOuterAlt(_localctx, 2);
				{
				setState(52);
				insertStatement();
				}
				break;
			case T__7:
				enterOuterAlt(_localctx, 3);
				{
				setState(53);
				selectStatement();
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

	public static class CreateTableStatementContext extends ParserRuleContext {
		public TableOptionContext tableOption;
		public List<TableOptionContext> options = new ArrayList<TableOptionContext>();
		public TableNameContext tableName() {
			return getRuleContext(TableNameContext.class,0);
		}
		public List<ColumnDefinitionContext> columnDefinition() {
			return getRuleContexts(ColumnDefinitionContext.class);
		}
		public ColumnDefinitionContext columnDefinition(int i) {
			return getRuleContext(ColumnDefinitionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public List<TableOptionContext> tableOption() {
			return getRuleContexts(TableOptionContext.class);
		}
		public TableOptionContext tableOption(int i) {
			return getRuleContext(TableOptionContext.class,i);
		}
		public CreateTableStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createTableStatement; }
	}

	public final CreateTableStatementContext createTableStatement() throws RecognitionException {
		CreateTableStatementContext _localctx = new CreateTableStatementContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_createTableStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(56);
			match(T__1);
			setState(57);
			tableName();
			setState(58);
			match(T__2);
			setState(59);
			columnDefinition();
			setState(64);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(60);
				match(COMMA);
				setState(61);
				columnDefinition();
				}
				}
				setState(66);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(67);
			match(T__3);
			setState(77);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__4) {
				{
				setState(68);
				match(T__4);
				setState(69);
				((CreateTableStatementContext)_localctx).tableOption = tableOption();
				((CreateTableStatementContext)_localctx).options.add(((CreateTableStatementContext)_localctx).tableOption);
				setState(74);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(70);
					match(COMMA);
					setState(71);
					((CreateTableStatementContext)_localctx).tableOption = tableOption();
					((CreateTableStatementContext)_localctx).options.add(((CreateTableStatementContext)_localctx).tableOption);
					}
					}
					setState(76);
					_errHandler.sync(this);
					_la = _input.LA(1);
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

	public static class InsertStatementContext extends ParserRuleContext {
		public TableNameContext tableName() {
			return getRuleContext(TableNameContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
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
		public InsertStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_insertStatement; }
	}

	public final InsertStatementContext insertStatement() throws RecognitionException {
		InsertStatementContext _localctx = new InsertStatementContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_insertStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(79);
			match(T__5);
			setState(80);
			tableName();
			setState(89);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IDENTIFIER) {
				{
				setState(81);
				columnName();
				setState(86);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(82);
					match(COMMA);
					setState(83);
					columnName();
					}
					}
					setState(88);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(91);
			match(T__6);
			setState(92);
			match(T__2);
			setState(93);
			expression(0);
			setState(98);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(94);
				match(COMMA);
				setState(95);
				expression(0);
				}
				}
				setState(100);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(101);
			match(T__3);
			}
		}
		catch (RecognitionException re) {
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
		public List<SelectItemContext> selectItem() {
			return getRuleContexts(SelectItemContext.class);
		}
		public SelectItemContext selectItem(int i) {
			return getRuleContext(SelectItemContext.class,i);
		}
		public List<FromItemContext> fromItem() {
			return getRuleContexts(FromItemContext.class);
		}
		public FromItemContext fromItem(int i) {
			return getRuleContext(FromItemContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSQLParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSQLParser.COMMA, i);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public SelectStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selectStatement; }
	}

	public final SelectStatementContext selectStatement() throws RecognitionException {
		SelectStatementContext _localctx = new SelectStatementContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_selectStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(103);
			match(T__7);
			setState(104);
			selectItem();
			setState(109);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(105);
				match(COMMA);
				setState(106);
				selectItem();
				}
				}
				setState(111);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(112);
			match(T__8);
			setState(113);
			fromItem();
			setState(118);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(114);
				match(COMMA);
				setState(115);
				fromItem();
				}
				}
				setState(120);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(123);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__9) {
				{
				setState(121);
				match(T__9);
				setState(122);
				expression(0);
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

	public static class SelectItemContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ColumnNameContext columnName() {
			return getRuleContext(ColumnNameContext.class,0);
		}
		public SelectItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selectItem; }
	}

	public final SelectItemContext selectItem() throws RecognitionException {
		SelectItemContext _localctx = new SelectItemContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_selectItem);
		try {
			setState(130);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(125);
				expression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(126);
				columnName();
				setState(127);
				match(T__10);
				setState(128);
				expression(0);
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

	public static class FromItemContext extends ParserRuleContext {
		public TableNameContext tableName() {
			return getRuleContext(TableNameContext.class,0);
		}
		public AliasContext alias() {
			return getRuleContext(AliasContext.class,0);
		}
		public SelectStatementContext selectStatement() {
			return getRuleContext(SelectStatementContext.class,0);
		}
		public FromItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fromItem; }
	}

	public final FromItemContext fromItem() throws RecognitionException {
		FromItemContext _localctx = new FromItemContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_fromItem);
		int _la;
		try {
			setState(143);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(132);
				tableName();
				setState(135);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__11) {
					{
					setState(133);
					match(T__11);
					setState(134);
					alias();
					}
				}

				}
				break;
			case T__2:
				enterOuterAlt(_localctx, 2);
				{
				setState(137);
				match(T__2);
				setState(138);
				selectStatement();
				setState(139);
				match(T__3);
				setState(140);
				match(T__11);
				setState(141);
				alias();
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

	public static class ColumnDefinitionContext extends ParserRuleContext {
		public ColumnNameContext columnName() {
			return getRuleContext(ColumnNameContext.class,0);
		}
		public DataTypeContext dataType() {
			return getRuleContext(DataTypeContext.class,0);
		}
		public List<ColumnConstraintContext> columnConstraint() {
			return getRuleContexts(ColumnConstraintContext.class);
		}
		public ColumnConstraintContext columnConstraint(int i) {
			return getRuleContext(ColumnConstraintContext.class,i);
		}
		public ColumnDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_columnDefinition; }
	}

	public final ColumnDefinitionContext columnDefinition() throws RecognitionException {
		ColumnDefinitionContext _localctx = new ColumnDefinitionContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_columnDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(145);
			columnName();
			setState(146);
			dataType();
			setState(150);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__12) | (1L << T__13) | (1L << T__14) | (1L << T__15))) != 0)) {
				{
				{
				setState(147);
				columnConstraint();
				}
				}
				setState(152);
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

	public static class ColumnConstraintContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ColumnConstraintContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_columnConstraint; }
	}

	public final ColumnConstraintContext columnConstraint() throws RecognitionException {
		ColumnConstraintContext _localctx = new ColumnConstraintContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_columnConstraint);
		try {
			setState(158);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__12:
				enterOuterAlt(_localctx, 1);
				{
				setState(153);
				match(T__12);
				}
				break;
			case T__13:
				enterOuterAlt(_localctx, 2);
				{
				setState(154);
				match(T__13);
				}
				break;
			case T__14:
				enterOuterAlt(_localctx, 3);
				{
				setState(155);
				match(T__14);
				}
				break;
			case T__15:
				enterOuterAlt(_localctx, 4);
				{
				setState(156);
				match(T__15);
				setState(157);
				expression(0);
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

	public static class DataTypeContext extends ParserRuleContext {
		public DataTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataType; }
	}

	public final DataTypeContext dataType() throws RecognitionException {
		DataTypeContext _localctx = new DataTypeContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_dataType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(160);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__16) | (1L << T__17) | (1L << T__18) | (1L << T__19) | (1L << T__20))) != 0)) ) {
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

	public static class TableOptionContext extends ParserRuleContext {
		public ConnectorNameContext connectorName() {
			return getRuleContext(ConnectorNameContext.class,0);
		}
		public FormatNameContext formatName() {
			return getRuleContext(FormatNameContext.class,0);
		}
		public TableOptionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableOption; }
	}

	public final TableOptionContext tableOption() throws RecognitionException {
		TableOptionContext _localctx = new TableOptionContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_tableOption);
		try {
			setState(168);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__21:
				enterOuterAlt(_localctx, 1);
				{
				setState(162);
				match(T__21);
				setState(163);
				match(T__10);
				setState(164);
				connectorName();
				}
				break;
			case T__22:
				enterOuterAlt(_localctx, 2);
				{
				setState(165);
				match(T__22);
				setState(166);
				match(T__10);
				setState(167);
				formatName();
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

	public static class ConnectorNameContext extends ParserRuleContext {
		public ConnectorNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_connectorName; }
	}

	public final ConnectorNameContext connectorName() throws RecognitionException {
		ConnectorNameContext _localctx = new ConnectorNameContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_connectorName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(170);
			_la = _input.LA(1);
			if ( !(_la==T__23 || _la==T__24) ) {
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

	public static class FormatNameContext extends ParserRuleContext {
		public FormatNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formatName; }
	}

	public final FormatNameContext formatName() throws RecognitionException {
		FormatNameContext _localctx = new FormatNameContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_formatName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(172);
			_la = _input.LA(1);
			if ( !(_la==T__25 || _la==T__26) ) {
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

	public static class ExpressionContext extends ParserRuleContext {
		public NumericLiteralContext numericLiteral() {
			return getRuleContext(NumericLiteralContext.class,0);
		}
		public StringLiteralContext stringLiteral() {
			return getRuleContext(StringLiteralContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 26;
		enterRecursionRule(_localctx, 26, RULE_expression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(182);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INT_LITERAL:
			case FLOAT_LITERAL:
			case DOUBLE_LITERAL:
				{
				setState(175);
				numericLiteral();
				}
				break;
			case STRING_LITERAL:
				{
				setState(176);
				stringLiteral();
				}
				break;
			case IDENTIFIER:
				{
				setState(177);
				identifier();
				}
				break;
			case T__2:
				{
				setState(178);
				match(T__2);
				setState(179);
				expression(0);
				setState(180);
				match(T__3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(214);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(212);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(184);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(185);
						match(T__27);
						setState(186);
						expression(0);
						{
						setState(187);
						match(T__27);
						setState(188);
						expression(0);
						setState(189);
						expression(0);
						}
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(191);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(192);
						match(T__28);
						setState(193);
						expression(0);
						{
						setState(194);
						match(T__28);
						setState(195);
						expression(0);
						setState(196);
						expression(0);
						}
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(198);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(199);
						match(T__29);
						setState(200);
						expression(0);
						{
						setState(201);
						match(T__29);
						setState(202);
						expression(0);
						setState(203);
						expression(0);
						}
						}
						break;
					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(205);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(206);
						match(T__30);
						setState(207);
						expression(0);
						{
						setState(208);
						match(T__30);
						setState(209);
						expression(0);
						setState(210);
						expression(0);
						}
						}
						break;
					}
					} 
				}
				setState(216);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
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

	public static class NumericLiteralContext extends ParserRuleContext {
		public TerminalNode INT_LITERAL() { return getToken(FlinkSQLParser.INT_LITERAL, 0); }
		public TerminalNode FLOAT_LITERAL() { return getToken(FlinkSQLParser.FLOAT_LITERAL, 0); }
		public TerminalNode DOUBLE_LITERAL() { return getToken(FlinkSQLParser.DOUBLE_LITERAL, 0); }
		public NumericLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_numericLiteral; }
	}

	public final NumericLiteralContext numericLiteral() throws RecognitionException {
		NumericLiteralContext _localctx = new NumericLiteralContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_numericLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(217);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << INT_LITERAL) | (1L << FLOAT_LITERAL) | (1L << DOUBLE_LITERAL))) != 0)) ) {
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

	public static class StringLiteralContext extends ParserRuleContext {
		public TerminalNode STRING_LITERAL() { return getToken(FlinkSQLParser.STRING_LITERAL, 0); }
		public StringLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stringLiteral; }
	}

	public final StringLiteralContext stringLiteral() throws RecognitionException {
		StringLiteralContext _localctx = new StringLiteralContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_stringLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(219);
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

	public static class ColumnNameContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(FlinkSQLParser.IDENTIFIER, 0); }
		public ColumnNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_columnName; }
	}

	public final ColumnNameContext columnName() throws RecognitionException {
		ColumnNameContext _localctx = new ColumnNameContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_columnName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(221);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TableNameContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(FlinkSQLParser.IDENTIFIER, 0); }
		public TableNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableName; }
	}

	public final TableNameContext tableName() throws RecognitionException {
		TableNameContext _localctx = new TableNameContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_tableName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(223);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
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
		public TerminalNode IDENTIFIER() { return getToken(FlinkSQLParser.IDENTIFIER, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(225);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AliasContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(FlinkSQLParser.IDENTIFIER, 0); }
		public AliasContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alias; }
	}

	public final AliasContext alias() throws RecognitionException {
		AliasContext _localctx = new AliasContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_alias);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(227);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
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
		case 13:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 5);
		case 1:
			return precpred(_ctx, 4);
		case 2:
			return precpred(_ctx, 3);
		case 3:
			return precpred(_ctx, 2);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3(\u00e8\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\3\2\3\2\3\2\7\2.\n\2\f\2\16\2\61\13\2\3"+
		"\2\5\2\64\n\2\3\3\3\3\3\3\5\39\n\3\3\4\3\4\3\4\3\4\3\4\3\4\7\4A\n\4\f"+
		"\4\16\4D\13\4\3\4\3\4\3\4\3\4\3\4\7\4K\n\4\f\4\16\4N\13\4\5\4P\n\4\3\5"+
		"\3\5\3\5\3\5\3\5\7\5W\n\5\f\5\16\5Z\13\5\5\5\\\n\5\3\5\3\5\3\5\3\5\3\5"+
		"\7\5c\n\5\f\5\16\5f\13\5\3\5\3\5\3\6\3\6\3\6\3\6\7\6n\n\6\f\6\16\6q\13"+
		"\6\3\6\3\6\3\6\3\6\7\6w\n\6\f\6\16\6z\13\6\3\6\3\6\5\6~\n\6\3\7\3\7\3"+
		"\7\3\7\3\7\5\7\u0085\n\7\3\b\3\b\3\b\5\b\u008a\n\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\5\b\u0092\n\b\3\t\3\t\3\t\7\t\u0097\n\t\f\t\16\t\u009a\13\t\3\n\3"+
		"\n\3\n\3\n\3\n\5\n\u00a1\n\n\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\5\f\u00ab"+
		"\n\f\3\r\3\r\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\5\17\u00b9"+
		"\n\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17"+
		"\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17"+
		"\3\17\7\17\u00d7\n\17\f\17\16\17\u00da\13\17\3\20\3\20\3\21\3\21\3\22"+
		"\3\22\3\23\3\23\3\24\3\24\3\25\3\25\3\25\2\3\34\26\2\4\6\b\n\f\16\20\22"+
		"\24\26\30\32\34\36 \"$&(\2\6\3\2\23\27\3\2\32\33\3\2\34\35\3\2$&\2\u00ef"+
		"\2*\3\2\2\2\48\3\2\2\2\6:\3\2\2\2\bQ\3\2\2\2\ni\3\2\2\2\f\u0084\3\2\2"+
		"\2\16\u0091\3\2\2\2\20\u0093\3\2\2\2\22\u00a0\3\2\2\2\24\u00a2\3\2\2\2"+
		"\26\u00aa\3\2\2\2\30\u00ac\3\2\2\2\32\u00ae\3\2\2\2\34\u00b8\3\2\2\2\36"+
		"\u00db\3\2\2\2 \u00dd\3\2\2\2\"\u00df\3\2\2\2$\u00e1\3\2\2\2&\u00e3\3"+
		"\2\2\2(\u00e5\3\2\2\2*/\5\4\3\2+,\7\3\2\2,.\5\4\3\2-+\3\2\2\2.\61\3\2"+
		"\2\2/-\3\2\2\2/\60\3\2\2\2\60\63\3\2\2\2\61/\3\2\2\2\62\64\7\3\2\2\63"+
		"\62\3\2\2\2\63\64\3\2\2\2\64\3\3\2\2\2\659\5\6\4\2\669\5\b\5\2\679\5\n"+
		"\6\28\65\3\2\2\28\66\3\2\2\28\67\3\2\2\29\5\3\2\2\2:;\7\4\2\2;<\5$\23"+
		"\2<=\7\5\2\2=B\5\20\t\2>?\7#\2\2?A\5\20\t\2@>\3\2\2\2AD\3\2\2\2B@\3\2"+
		"\2\2BC\3\2\2\2CE\3\2\2\2DB\3\2\2\2EO\7\6\2\2FG\7\7\2\2GL\5\26\f\2HI\7"+
		"#\2\2IK\5\26\f\2JH\3\2\2\2KN\3\2\2\2LJ\3\2\2\2LM\3\2\2\2MP\3\2\2\2NL\3"+
		"\2\2\2OF\3\2\2\2OP\3\2\2\2P\7\3\2\2\2QR\7\b\2\2R[\5$\23\2SX\5\"\22\2T"+
		"U\7#\2\2UW\5\"\22\2VT\3\2\2\2WZ\3\2\2\2XV\3\2\2\2XY\3\2\2\2Y\\\3\2\2\2"+
		"ZX\3\2\2\2[S\3\2\2\2[\\\3\2\2\2\\]\3\2\2\2]^\7\t\2\2^_\7\5\2\2_d\5\34"+
		"\17\2`a\7#\2\2ac\5\34\17\2b`\3\2\2\2cf\3\2\2\2db\3\2\2\2de\3\2\2\2eg\3"+
		"\2\2\2fd\3\2\2\2gh\7\6\2\2h\t\3\2\2\2ij\7\n\2\2jo\5\f\7\2kl\7#\2\2ln\5"+
		"\f\7\2mk\3\2\2\2nq\3\2\2\2om\3\2\2\2op\3\2\2\2pr\3\2\2\2qo\3\2\2\2rs\7"+
		"\13\2\2sx\5\16\b\2tu\7#\2\2uw\5\16\b\2vt\3\2\2\2wz\3\2\2\2xv\3\2\2\2x"+
		"y\3\2\2\2y}\3\2\2\2zx\3\2\2\2{|\7\f\2\2|~\5\34\17\2}{\3\2\2\2}~\3\2\2"+
		"\2~\13\3\2\2\2\177\u0085\5\34\17\2\u0080\u0081\5\"\22\2\u0081\u0082\7"+
		"\r\2\2\u0082\u0083\5\34\17\2\u0083\u0085\3\2\2\2\u0084\177\3\2\2\2\u0084"+
		"\u0080\3\2\2\2\u0085\r\3\2\2\2\u0086\u0089\5$\23\2\u0087\u0088\7\16\2"+
		"\2\u0088\u008a\5(\25\2\u0089\u0087\3\2\2\2\u0089\u008a\3\2\2\2\u008a\u0092"+
		"\3\2\2\2\u008b\u008c\7\5\2\2\u008c\u008d\5\n\6\2\u008d\u008e\7\6\2\2\u008e"+
		"\u008f\7\16\2\2\u008f\u0090\5(\25\2\u0090\u0092\3\2\2\2\u0091\u0086\3"+
		"\2\2\2\u0091\u008b\3\2\2\2\u0092\17\3\2\2\2\u0093\u0094\5\"\22\2\u0094"+
		"\u0098\5\24\13\2\u0095\u0097\5\22\n\2\u0096\u0095\3\2\2\2\u0097\u009a"+
		"\3\2\2\2\u0098\u0096\3\2\2\2\u0098\u0099\3\2\2\2\u0099\21\3\2\2\2\u009a"+
		"\u0098\3\2\2\2\u009b\u00a1\7\17\2\2\u009c\u00a1\7\20\2\2\u009d\u00a1\7"+
		"\21\2\2\u009e\u009f\7\22\2\2\u009f\u00a1\5\34\17\2\u00a0\u009b\3\2\2\2"+
		"\u00a0\u009c\3\2\2\2\u00a0\u009d\3\2\2\2\u00a0\u009e\3\2\2\2\u00a1\23"+
		"\3\2\2\2\u00a2\u00a3\t\2\2\2\u00a3\25\3\2\2\2\u00a4\u00a5\7\30\2\2\u00a5"+
		"\u00a6\7\r\2\2\u00a6\u00ab\5\30\r\2\u00a7\u00a8\7\31\2\2\u00a8\u00a9\7"+
		"\r\2\2\u00a9\u00ab\5\32\16\2\u00aa\u00a4\3\2\2\2\u00aa\u00a7\3\2\2\2\u00ab"+
		"\27\3\2\2\2\u00ac\u00ad\t\3\2\2\u00ad\31\3\2\2\2\u00ae\u00af\t\4\2\2\u00af"+
		"\33\3\2\2\2\u00b0\u00b1\b\17\1\2\u00b1\u00b9\5\36\20\2\u00b2\u00b9\5 "+
		"\21\2\u00b3\u00b9\5&\24\2\u00b4\u00b5\7\5\2\2\u00b5\u00b6\5\34\17\2\u00b6"+
		"\u00b7\7\6\2\2\u00b7\u00b9\3\2\2\2\u00b8\u00b0\3\2\2\2\u00b8\u00b2\3\2"+
		"\2\2\u00b8\u00b3\3\2\2\2\u00b8\u00b4\3\2\2\2\u00b9\u00d8\3\2\2\2\u00ba"+
		"\u00bb\f\7\2\2\u00bb\u00bc\7\36\2\2\u00bc\u00bd\5\34\17\2\u00bd\u00be"+
		"\7\36\2\2\u00be\u00bf\5\34\17\2\u00bf\u00c0\5\34\17\2\u00c0\u00d7\3\2"+
		"\2\2\u00c1\u00c2\f\6\2\2\u00c2\u00c3\7\37\2\2\u00c3\u00c4\5\34\17\2\u00c4"+
		"\u00c5\7\37\2\2\u00c5\u00c6\5\34\17\2\u00c6\u00c7\5\34\17\2\u00c7\u00d7"+
		"\3\2\2\2\u00c8\u00c9\f\5\2\2\u00c9\u00ca\7 \2\2\u00ca\u00cb\5\34\17\2"+
		"\u00cb\u00cc\7 \2\2\u00cc\u00cd\5\34\17\2\u00cd\u00ce\5\34\17\2\u00ce"+
		"\u00d7\3\2\2\2\u00cf\u00d0\f\4\2\2\u00d0\u00d1\7!\2\2\u00d1\u00d2\5\34"+
		"\17\2\u00d2\u00d3\7!\2\2\u00d3\u00d4\5\34\17\2\u00d4\u00d5\5\34\17\2\u00d5"+
		"\u00d7\3\2\2\2\u00d6\u00ba\3\2\2\2\u00d6\u00c1\3\2\2\2\u00d6\u00c8\3\2"+
		"\2\2\u00d6\u00cf\3\2\2\2\u00d7\u00da\3\2\2\2\u00d8\u00d6\3\2\2\2\u00d8"+
		"\u00d9\3\2\2\2\u00d9\35\3\2\2\2\u00da\u00d8\3\2\2\2\u00db\u00dc\t\5\2"+
		"\2\u00dc\37\3\2\2\2\u00dd\u00de\7\'\2\2\u00de!\3\2\2\2\u00df\u00e0\7("+
		"\2\2\u00e0#\3\2\2\2\u00e1\u00e2\7(\2\2\u00e2%\3\2\2\2\u00e3\u00e4\7(\2"+
		"\2\u00e4\'\3\2\2\2\u00e5\u00e6\7(\2\2\u00e6)\3\2\2\2\27/\638BLOX[dox}"+
		"\u0084\u0089\u0091\u0098\u00a0\u00aa\u00b8\u00d6\u00d8";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}