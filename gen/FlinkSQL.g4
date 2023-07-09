grammar FlinkSQL;
 
 
 

program: statement EOF;

statement
    : sqlStatements EOF
    ;

sqlStatements
    : (comment | sqlStatement | emptyStatement)*
    ;

comment: LINE_COMMENT | COMMENT_INPUT;

sqlStatement
    : ddlStatement SEMICOLON | dmlStatement SEMICOLON | describeStatement SEMICOLON 
    | explainStatement SEMICOLON | useStatement SEMICOLON | showStatememt SEMICOLON
    | loadStatement SEMICOLON | unloadStatememt SEMICOLON | setStatememt SEMICOLON
    | resetStatememt SEMICOLON | jarStatememt SEMICOLON 
    ;

emptyStatement
    : SEMICOLON
    ;

ddlStatement
    : createTable | createDatabase | createView | createFunction | createCatalog
    | alterTable | alertView | alterDatabase | alterFunction
    | dropCatalog | dropTable | dropDatabase | dropView | dropFunction
    ;

dmlStatement
    : queryStatement | insertStatement
    ;

// some statemen
describeStatement
    : (KW_DESCRIBE | KW_DESC) tablePath
    ;

explainStatement
    : KW_EXPLAIN (explainDetails | KW_PLAN KW_FOR)? (dmlStatement | insertSimpleStatement | insertMulStatement)
    ;

explainDetails
    : explainDetail (COMMA explainDetail)*
    ;

explainDetail
    : KW_CHANGELOG_MODE | KW_JSON_EXECUTION_PLAN | KW_ESTIMATED_COST
    ;

useStatement
    : KW_USE KW_CATALOG catalogPath 
    | KW_USE databasePath
    | useModuleStatement
    ;

useModuleStatement
    : KW_USE KW_MODULES uid (COMMA uid)*
    ;

showStatememt
    : KW_SHOW (KW_CATALOGS | KW_DATABASES | KW_VIEWS | KW_JARS)
    | KW_SHOW KW_CURRENT (KW_CATALOG | KW_DATABASE)
    | KW_SHOW KW_TABLES (( KW_FROM | KW_IN ) tablePath)? likePredicate?
    | KW_SHOW KW_COLUMNS ( KW_FROM | KW_IN ) uid likePredicate?
    | KW_SHOW KW_CREATE (KW_TABLE | KW_VIEW) uid
    | KW_SHOW KW_USER? KW_FUNCTIONS
    | KW_SHOW KW_FULL? KW_MODULES
    ;

loadStatement
    : KW_LOAD KW_MODULE uid (KW_WITH tablePropertyList)?
    ;
    
unloadStatememt
    : KW_UNLOAD KW_MODULE uid
    ;

setStatememt
    : KW_SET (tableProperty)?
    ;

resetStatememt
    : KW_RESET tablePropertyKey?
    ;
    
jarStatememt
    : (KW_ADD | KW_REMOVE) KW_JAR jarFileName
    ;


dtFilePath
    : SLASH_TEXT+
    ;

// Create statements

createTable
    : (simpleCreateTable | createTableAsSelect)
    ;
    
simpleCreateTable
    : KW_CREATE KW_TEMPORARY? KW_TABLE ifNotExists? tablePathCreate
    LR_BRACKET 
        columnOptionDefinition (COMMA columnOptionDefinition)*
        (COMMA watermarkDefinition)?
        (COMMA tableConstraint)?
        (COMMA selfDefinitionClause)?
    RR_BRACKET
    commentSpec?
    partitionDefinition?
    withOption
    likeDefinition?
    ;

/*
 * 详见 https://nightlies.apache.org/flink/flink-docs-release-1.16/docs/dev/table/sql/create/#as-select_statement
 * CTAS 不支持指定显示指定列，不支持创建分区表，临时表
 */
createTableAsSelect
    : KW_CREATE KW_TABLE ifNotExists? tablePathCreate withOption (KW_AS queryStatement)?
    ;

columnOptionDefinition
    : physicalColumnDefinition
    | metadataColumnDefinition
    | computedColumnDefinition
    ;

physicalColumnDefinition
    : columnName columnType columnConstraint? commentSpec?
    ;

columnName
    : uid | expression
    ;

columnNameList
    : LR_BRACKET columnName (',' columnName)* RR_BRACKET
    ;

columnType
    : typeName=(KW_DATE | KW_BOOLEAN | KW_NULL)
    | typeName=(KW_CHAR | KW_VARCHAR | KW_STRING | KW_BINARY | KW_VARBINARY | KW_BYTES
        | KW_TINYINT | KW_SMALLINT |KW_INT | KW_INTEGER | KW_BIGINT
        | KW_TIME | KW_TIMESTAMP_LTZ | KW_DATETIME
    ) lengthOneDimension?
    | typeName=KW_TIMESTAMP lengthOneDimension? ((KW_WITHOUT | KW_WITH) KW_LOCAL? KW_TIME KW_ZONE)?
    | typeName=KW_TIMESTAMP_3 lengthOneDimension? ((KW_WITHOUT | KW_WITH) KW_LOCAL? KW_TIME KW_ZONE)?
    | typeName=KW_TIMESTAMP_6 lengthOneDimension? ((KW_WITHOUT | KW_WITH) KW_LOCAL? KW_TIME KW_ZONE)?
    | typeName=KW_TIMESTAMP_9 lengthOneDimension? ((KW_WITHOUT | KW_WITH) KW_LOCAL? KW_TIME KW_ZONE)?
    | typeName=(KW_DECIMAL | KW_DEC | KW_NUMERIC | KW_FLOAT | KW_DOUBLE) lengthTwoOptionalDimension?
    | type=(KW_ARRAY | KW_MULTISET) lengthOneTypeDimension?
    | type=KW_MAP mapTypeDimension?
    | type=KW_ROW rowTypeDimension?
    | type=KW_RAW lengthTwoStringDimension?
    ;

lengthOneDimension
    : '(' decimalLiteral ')'
    ;

lengthTwoOptionalDimension
    : '(' decimalLiteral (',' decimalLiteral)? ')'
    ;

lengthTwoStringDimension
    : '(' stringLiteral (',' stringLiteral)? ')'
    ;

lengthOneTypeDimension
    : LESS_SYMBOL columnType (COMMA columnType)* GREATER_SYMBOL  #lengthSymbolsTypeDimension
    | LS_BRACKET columnType (COMMA columnType)* RS_BRACKET #lengthBracketTypeDimension
    ;

mapTypeDimension
    : LESS_SYMBOL columnType (COMMA columnType) GREATER_SYMBOL
    ;

rowTypeDimension
    : LESS_SYMBOL columnName columnType (COMMA columnName columnType)* GREATER_SYMBOL #rowSymbolsTypeDimension
    | LS_BRACKET  columnName columnType (COMMA columnName columnType)* RS_BRACKET #rowBracketTypeDimension
    ;

columnConstraint
    :(KW_CONSTRAINT constraintName)? KW_PRIMARY KW_KEY (KW_NOT KW_ENFORCED)? | KW_NOT? KW_NULL
    ;

commentSpec
    : KW_COMMENT STRING_LITERAL
    ;

metadataColumnDefinition
    : columnName columnType KW_METADATA (KW_FROM metadataKey)? KW_VIRTUAL?
    ;

metadataKey
    : STRING_LITERAL
    ;

computedColumnDefinition
    : columnName KW_AS computedColumnExpression commentSpec?
    ;

// 计算表达式
computedColumnExpression
    : expression
    ;

watermarkDefinition
    : KW_WATERMARK KW_FOR expression KW_AS expression
    ;

tableConstraint
    : (KW_CONSTRAINT constraintName)? KW_PRIMARY KW_KEY columnNameList KW_NOT KW_ENFORCED
    ;

constraintName
    : identifier
    ;

selfDefinitionClause // 数栈自定义语句 ‘PERIOD KW_FOR SYSTEM_TIME’
    : KW_PERIOD KW_FOR KW_SYSTEM_TIME
    ;

partitionDefinition
    : KW_PARTITIONED KW_BY transformList
    ;

transformList
    : '(' transform (',' transform)* ')'
    ;

transform
    : qualifiedName                                                           #identityTransform
    | transformName=identifier
      '(' transformArgument (',' transformArgument)* ')'  #applyTransform
    ;

transformArgument
    : qualifiedName
    | constant
    ;

likeDefinition
    : KW_LIKE tablePath (LR_BRACKET likeOption* RR_BRACKET)?
    ;

likeOption
    : ((KW_INCLUDING | KW_EXCLUDING) (KW_ALL | KW_CONSTRAINTS | KW_PARTITIONS))
    | ((KW_INCLUDING | KW_EXCLUDING | KW_OVERWRITING) (KW_GENERATED | KW_OPTIONS | KW_WATERMARKS))
    ;

createCatalog
    : KW_CREATE KW_CATALOG uid withOption
    ;

createDatabase
    : KW_CREATE KW_DATABASE ifNotExists? databasePathCreate commentSpec? withOption?
    ;

createView
    : KW_CREATE KW_TEMPORARY? KW_VIEW ifNotExists? uid columnNameList? commentSpec? KW_AS queryStatement
    ;

createFunction
    : KW_CREATE (KW_TEMPORARY|KW_TEMPORARY KW_SYSTEM)? KW_FUNCTION ifNotExists? functionName KW_AS identifier (KW_LANGUAGE (KW_JAVA|KW_SCALA|KW_PYTHON))? usingClause?
    ;

usingClause
    : KW_USING KW_JAR jarFileName (COMMA KW_JAR jarFileName)* 
    ;

jarFileName
    : STRING_LITERAL
    ;

// Alter statements
// Just for simple alter table statements, 
// it only includes rename, set key, add constraint, drop constraint, add unique

alterTable
    : KW_ALTER KW_TABLE ifExists? tablePath (renameDefinition | setKeyValueDefinition | addConstraint | dropConstraint | addUnique)
    ;

renameDefinition
    : KW_RENAME uid? KW_TO uid
    ;

setKeyValueDefinition
    : KW_SET tablePropertyList
    ;

addConstraint
    : KW_ADD KW_CONSTRAINT constraintName KW_PRIMARY KW_KEY columnNameList notForced?
    ;

dropConstraint
    : KW_DROP KW_CONSTRAINT constraintName
    ;

addUnique
    : KW_ADD KW_UNIQUE columnNameList
    ;

notForced
    : KW_NOT KW_ENFORCED
    ;

alertView
    : KW_ALTER KW_VIEW uid (renameDefinition | KW_AS queryStatement)
    ;

alterDatabase
    : KW_ALTER KW_DATABASE databasePath setKeyValueDefinition
    ;

alterFunction
    : KW_ALTER (KW_TEMPORARY|KW_TEMPORARY KW_SYSTEM)? KW_FUNCTION ifExists? uid KW_AS identifier (KW_LANGUAGE (KW_JAVA|KW_SCALA|KW_PYTHON))? 
    ;


// Drop statements

dropCatalog
    : KW_DROP KW_CATALOG ifExists? catalogPath
    ;

dropTable
    : KW_DROP KW_TEMPORARY? KW_TABLE ifExists? tablePath
    ;

dropDatabase
    : KW_DROP KW_DATABASE ifExists? databasePath dropType=(KW_RESTRICT | KW_CASCADE)?
    ;

dropView
    : KW_DROP KW_TEMPORARY? KW_VIEW ifExists? uid
    ;

dropFunction
    : KW_DROP (KW_TEMPORARY|KW_TEMPORARY KW_SYSTEM)? KW_FUNCTION ifExists? functionName
    ;


// Insert statements

insertStatement
: (KW_EXECUTE? insertSimpleStatement)
	| insertMulStatementCompatibility | (KW_EXECUTE insertMulStatement)
    ;

insertSimpleStatement
    : KW_INSERT (KW_INTO | KW_OVERWRITE) tablePath
    (
        insertPartitionDefinition? columnNameList? queryStatement
        | valuesDefinition
    )
    ;

insertPartitionDefinition
    : KW_PARTITION tablePropertyList
    ;

valuesDefinition
    : KW_VALUES valuesRowDefinition (COMMA valuesRowDefinition)*
    ;

valuesRowDefinition
    : LR_BRACKET
        constant (COMMA constant)*
    RR_BRACKET
    ;

insertMulStatementCompatibility
	: KW_BEGIN KW_STATEMENT KW_SET SEMICOLON (insertSimpleStatement SEMICOLON)+ KW_END
    ;

insertMulStatement
    : KW_STATEMENT KW_SET KW_BEGIN (insertSimpleStatement SEMICOLON)+ KW_END
    ;

// Select statements

queryStatement
    : valuesCaluse
    | withClause queryStatement
    | '(' queryStatement ')'
    | left=queryStatement operator=(KW_INTERSECT | KW_UNION | KW_EXCEPT) KW_ALL? right=queryStatement orderByCaluse? limitClause?
    | selectClause orderByCaluse? limitClause?
    | selectStatement orderByCaluse? limitClause?
    ;

valuesCaluse
    : KW_VALUES expression (COMMA expression )*
    ;

withClause
    : KW_WITH withItem (COMMA withItem)*
    ;

withItem
    : withItemName (LR_BRACKET columnName (COMMA columnName)* RR_BRACKET)? KW_AS LR_BRACKET queryStatement RR_BRACKET
    ;

withItemName
    : identifier
    ;

selectStatement
    : selectClause fromClause whereClause? groupByClause? havingClause? windowClause?
    | selectClause fromClause matchRecognizeClause
    ;

selectClause
    : KW_SELECT setQuantifier? (ASTERISK_SIGN | projectItemDefinition (COMMA projectItemDefinition)*)
    ;

projectItemDefinition
    : overWindowItem
    | expression (KW_AS? expression)?
    ;

overWindowItem
    : primaryExpression KW_OVER windowSpec KW_AS identifier
    | primaryExpression KW_OVER errorCapturingIdentifier KW_AS identifier
    ;

fromClause
    : KW_FROM tableExpression
    ;

tableExpression
    : tableReference (COMMA tableReference)*
    | tableExpression KW_NATURAL? (KW_LEFT | KW_RIGHT | KW_FULL | KW_INNER)? KW_OUTER? KW_JOIN tableExpression joinCondition?
    | tableExpression KW_CROSS KW_JOIN tableExpression
    | inlineDataValueClause
    | windoTVFClause
    ;

tableReference
    : tablePrimary tableAlias?
    ;

tablePrimary
    : KW_TABLE? tablePath systemTimePeriod? (KW_AS? correlationName)?
    | KW_LATERAL KW_TABLE LR_BRACKET functionName LR_BRACKET functionParam (COMMA functionParam)* RR_BRACKET RR_BRACKET
    | KW_LATERAL? LR_BRACKET queryStatement RR_BRACKET
    | KW_UNNEST LR_BRACKET expression RR_BRACKET
    ;



systemTimePeriod
    : KW_FOR KW_SYSTEM_TIME KW_AS KW_OF dateTimeExpression
    ;

dateTimeExpression
    : expression
    ;

inlineDataValueClause
    : LR_BRACKET valuesDefinition RR_BRACKET tableAlias
    ;

windoTVFClause
    : KW_TABLE LR_BRACKET windowTVFExression RR_BRACKET
    ;

windowTVFExression
    : windoTVFName LR_BRACKET windowTVFParam (COMMA windowTVFParam)* RR_BRACKET
    ;

windoTVFName
    : KW_TUMBLE
    | KW_HOP
    | KW_CUMULATE
;

windowTVFParam
    : KW_TABLE timeAttrColumn
    | columnDescriptor
    | timeIntervalExpression
    | KW_DATA DOUBLE_RIGHT_ARROW KW_TABLE timeAttrColumn
    | KW_TIMECOL DOUBLE_RIGHT_ARROW columnDescriptor
    | timeIntervalParamName DOUBLE_RIGHT_ARROW timeIntervalExpression
    ;

timeIntervalParamName
    : KW_DATA
    | KW_TIMECOL
    | KW_SIZE
    | KW_OFFSET
    | KW_STEP
    | KW_SLIDE
    ;

columnDescriptor
    : KW_DESCRIPTOR LR_BRACKET uid RR_BRACKET
    ;

joinCondition
    : KW_ON booleanExpression
    | KW_USING LR_BRACKET uid (COMMA uid)* RR_BRACKET
    ;

whereClause
    : KW_WHERE booleanExpression
    ;

groupByClause
    : KW_GROUP KW_BY groupItemDefinition (COMMA groupItemDefinition)*
    ;

groupItemDefinition
    : expression
    | groupWindowFunction
    | LR_BRACKET RR_BRACKET
    | LR_BRACKET expression (COMMA expression)* RR_BRACKET
    | groupingSetsNotaionName LR_BRACKET expression (COMMA expression)* RR_BRACKET
    | groupingSets LR_BRACKET groupItemDefinition (COMMA groupItemDefinition)* RR_BRACKET
    ;

groupingSets
    : KW_GROUPING KW_SETS
    ;

groupingSetsNotaionName
    : KW_CUBE
    | KW_ROLLUP
    ;

groupWindowFunction
    : groupWindowFunctionName LR_BRACKET timeAttrColumn COMMA timeIntervalExpression RR_BRACKET
    ;

groupWindowFunctionName
    : KW_TUMBLE
    | KW_HOP
    | KW_SESSION
    ;

timeAttrColumn
    : uid
    ;

havingClause
    : KW_HAVING booleanExpression
    ;

windowClause
    : KW_WINDOW namedWindow (',' namedWindow)*
    ;

namedWindow
    : name=errorCapturingIdentifier KW_AS windowSpec
    ;

windowSpec
    : name=errorCapturingIdentifier?
    LR_BRACKET
        partitionByClause?
        orderByCaluse?
        windowFrame?
    RR_BRACKET
    ;

matchRecognizeClause
    : KW_MATCH_RECOGNIZE 
    LR_BRACKET 
        partitionByClause?
        orderByCaluse?
        measuresClause?
        outputMode?
        afterMatchStrategy?
        patternDefination?
        patternVariablesDefination
    RR_BRACKET ( KW_AS? identifier )?
    ;

orderByCaluse
    : KW_ORDER KW_BY orderItemDefition (COMMA orderItemDefition)*
    ;

orderItemDefition
    : expression ordering=(KW_ASC | KW_DESC)? (KW_NULLS nullOrder=(KW_LAST | KW_FIRST))?
    ;

limitClause
    : KW_LIMIT (KW_ALL | limit=expression)
    ;

partitionByClause
    : KW_PARTITION KW_BY expression (COMMA expression)*
    ;

quantifiers
    : (ASTERISK_SIGN)
    | (ADD_SIGN)
    | (QUESTION_MARK_SIGN)
    | (LB_BRACKET DIG_LITERAL COMMA DIG_LITERAL RB_BRACKET)
    | (LB_BRACKET DIG_LITERAL COMMA  RB_BRACKET)
    | (LB_BRACKET COMMA DIG_LITERAL RB_BRACKET)
    ;

measuresClause
    : KW_MEASURES projectItemDefinition (COMMA projectItemDefinition)*
    ;

patternDefination
    : KW_PATTERN 
    LR_BRACKET
        patternVariable+
    RR_BRACKET 
    withinClause?
    ;

patternVariable
    : unquotedIdentifier quantifiers?
    ;

outputMode
    : KW_ALL KW_ROWS KW_PER KW_MATCH
    | KW_ONE KW_ROW KW_PER KW_MATCH
    ;

afterMatchStrategy
    : KW_AFTER KW_MATCH KW_SKIP KW_PAST KW_LAST KW_ROW 
    | KW_AFTER KW_MATCH KW_SKIP KW_TO KW_NEXT KW_ROW
    | KW_AFTER KW_MATCH KW_SKIP KW_TO KW_LAST unquotedIdentifier
    | KW_AFTER KW_MATCH KW_SKIP KW_TO KW_FIRST unquotedIdentifier
    ;

patternVariablesDefination
    : KW_DEFINE projectItemDefinition (COMMA projectItemDefinition)*
    ;

windowFrame
    : KW_RANGE KW_BETWEEN timeIntervalExpression frameBound
    | KW_ROWS KW_BETWEEN DIG_LITERAL frameBound
    ;

frameBound
    : KW_PRECEDING KW_AND KW_CURRENT KW_ROW
    ;

withinClause
    : KW_WITHIN timeIntervalExpression
    ;


// expression

expression
    : booleanExpression
    ;

booleanExpression
    : KW_NOT booleanExpression                                        #logicalNot
    | KW_EXISTS '(' queryStatement ')'                                         #exists
    | valueExpression predicate?                                   #predicated
    | left=booleanExpression operator=KW_AND right=booleanExpression  #logicalBinary
    | left=booleanExpression operator=KW_OR right=booleanExpression   #logicalBinary
    | booleanExpression KW_IS KW_NOT? kind=(KW_TRUE | KW_FALSE | KW_UNKNOWN | KW_NULL) #logicalNested
    ;

predicate
    : KW_NOT? 
        kind=KW_BETWEEN (KW_ASYMMETRIC | KW_SYMMETRIC)? 
        lower=valueExpression KW_AND 
        upper=valueExpression
    | KW_NOT? kind=KW_IN '(' expression (',' expression)* ')'
    | KW_NOT? kind=KW_IN '(' queryStatement ')'
    | kind=KW_EXISTS '(' queryStatement ')'
    | KW_NOT? kind=KW_RLIKE pattern=valueExpression
    | likePredicate
    | KW_IS KW_NOT? kind=(KW_TRUE | KW_FALSE | KW_UNKNOWN | KW_NULL)
    | KW_IS KW_NOT? kind=KW_DISTINCT KW_FROM right=valueExpression
    | KW_NOT? kind=KW_SIMILAR KW_TO right=valueExpression (KW_ESCAPE stringLiteral)?
    ;

likePredicate
    : KW_NOT? kind=KW_LIKE quantifier=(KW_ANY | KW_ALL) ('('')' | '(' expression (',' expression)* ')')
    | KW_NOT? kind=KW_LIKE pattern=valueExpression (KW_ESCAPE stringLiteral)?
    ;

valueExpression
    : primaryExpression                                                                      #valueExpressionDefault
    | operator=('-' | '+' | '~') valueExpression                                        #arithmeticUnary
    | left=valueExpression operator=('*' | '/' | '%' | KW_DIV) right=valueExpression #arithmeticBinary
    | left=valueExpression operator=('+' | '-' | DOUBLE_VERTICAL_SIGN) right=valueExpression       #arithmeticBinary
    | left=valueExpression operator='&' right=valueExpression                          #arithmeticBinary
    | left=valueExpression operator='^' right=valueExpression                                #arithmeticBinary
    | left=valueExpression operator='|' right=valueExpression                               #arithmeticBinary
    | left=valueExpression comparisonOperator right=valueExpression                          #comparison
    | left=valueExpression right=SLASH_TEXT                                                #arithmeticBinaryAlternate
    ;

primaryExpression
    : KW_CASE whenClause+ (KW_ELSE elseExpression=expression)? KW_END                                   #searchedCase
    | KW_CASE value=expression whenClause+ (KW_ELSE elseExpression=expression)? KW_END                  #simpleCase
    | KW_CAST '(' expression KW_AS columnType ')'                                                      #cast
    // | STRUCT '(' (argument+=namedExpression (',' argument+=namedExpression)*)? ')'             #struct
    | KW_FIRST '(' expression (KW_IGNORE KW_NULLS)? ')'                                                 #first
    | KW_LAST '(' expression (KW_IGNORE KW_NULLS)? ')'                                                  #last
    | KW_POSITION '(' substr=valueExpression KW_IN str=valueExpression ')'                           #position
    | constant                                                                                 #constantDefault
    | '*'                                                                                 #star
    | uid '.' '*'                                                                #star
    // | '(' namedExpression (',' namedExpression)+ ')'                                           #rowConstructor
    | '(' queryStatement ')'                                                                            #subqueryExpression
    | functionName '(' (setQuantifier? functionParam (',' functionParam)*)? ')'                      #functionCall
    | functionName '(' functionParam KW_TO functionParam ')'                      #functionCall
    // | identifier '->' expression                                                               #lambda
    // | '(' identifier (',' identifier)+ ')' '->' expression                                     #lambda
    | value=primaryExpression LS_BRACKET index=valueExpression RS_BRACKET                                   #subscript
    | identifier                                                                               #columnReference
    | dereferenceDefinition                                                                                      #dereference
    | '(' expression ')'                                                                       #parenthesizedExpression
    // | EXTRACT '(' field=identifier KW_FROM source=valueExpression ')'                             #extract
    // | (SUBSTR | SUBSTRING) '(' str=valueExpression (KW_FROM | ',') pos=valueExpression
    //   ((KW_FOR | ',') len=valueExpression)? ')'                                                   #substring
    // | TRIM '(' trimOption=(BOTH | LEADING | TRAILING)? (trimStr=valueExpression)?
    //    KW_FROM srcStr=valueExpression ')'                                                         #trim
    // | OVERLAY '(' input=valueExpression PLACING replace=valueExpression
    //   KW_FROM position=valueExpression (KW_FOR length=valueExpression)? ')'                          #overlay
    ;

functionName
    : reservedKeywordsUsedAsFuncName
    | nonReservedKeywords
    | uid
    ;

functionParam
    : reservedKeywordsUsedAsFuncParam
    | timeIntervalUnit
    | timePointUnit
    | expression
    ;

dereferenceDefinition
    : uid
    ;

// base common

correlationName
    : identifier
    ;

qualifiedName
    : identifier | dereferenceDefinition
    ;

timeIntervalExpression
    : KW_INTERVAL (errorCapturingMultiUnitsInterval | errorCapturingUnitToUnitInterval)?
    ;

errorCapturingMultiUnitsInterval
    : multiUnitsInterval unitToUnitInterval?
    ;

multiUnitsInterval
    : (intervalValue timeIntervalUnit)+
    ;

errorCapturingUnitToUnitInterval
    : body=unitToUnitInterval (error1=multiUnitsInterval | error2=unitToUnitInterval)?
    ;

unitToUnitInterval
    : value=intervalValue from=timeIntervalUnit KW_TO to=timeIntervalUnit
    ;

intervalValue
    : ('+' | '-')? (DIG_LITERAL | REAL_LITERAL)
    | STRING_LITERAL
    ;

columnAlias
    : KW_AS? identifier identifierList?
    ;

tableAlias
    : KW_AS? identifier identifierList?
    ;

errorCapturingIdentifier
    : identifier errorCapturingIdentifierExtra
    ;

errorCapturingIdentifierExtra
    : (KW_MINUS identifier)+    #errorIdent
    |                        #realIdent
    ;

identifierList
    : '(' identifierSeq ')'
    ;

identifierSeq
    : identifier (COMMA identifier)*
    ;

identifier
    : unquotedIdentifier         #unquotedIdentifierAlternative
    | quotedIdentifier           #quotedIdentifierAlternative
    | nonReservedKeywords        #nonReservedKeywordsAlternative
    | refVar                     #urefVarAlternative
    ;

refVar
    :  '$' LB_BRACKET unquotedIdentifier RB_BRACKET;

unquotedIdentifier
    : DIG_LITERAL | ID_LITERAL
    ;

quotedIdentifier
    : STRING_LITERAL
    ;

whenClause
    : KW_WHEN condition=expression KW_THEN result=expression
    ;

catalogPath
    : uid
    ;

databasePath
    : uid
    ;

databasePathCreate
    : uid
    ;

tablePathCreate
    : uid
    ;

tablePath
    : uid
    ;

uid
    : identifier (DOT identifier)*?
    ;

withOption
    : KW_WITH tablePropertyList
    ;

ifNotExists
    : KW_IF KW_NOT KW_EXISTS;

ifExists
    : KW_IF KW_EXISTS;

tablePropertyList
    : '(' tableProperty (',' tableProperty)* ')'
    ;

tableProperty
    : key=tablePropertyKey (EQUAL_SYMBOL? value=tablePropertyValue)?
    ;

tablePropertyKey
    : identifier | dereferenceDefinition
    | STRING_LITERAL
    ;

tablePropertyValue
    : DIG_LITERAL
    | REAL_LITERAL
    | booleanLiteral
    | STRING_LITERAL
    ;

logicalOperator
    : KW_AND
    | '&' '&'
    | KW_OR 
    | '|' '|'
    ;

comparisonOperator
    : '=' 
    | '>' 
    | '<' 
    | '<' '=' 
    | '>' '='
    | '<' '>' 
    | '!' '=' 
    | '<' '=' '>'
    ;

bitOperator
    : '<' '<' 
    | '>' '>' 
    | '&' 
    | '^' 
    | '|'
    ;

mathOperator
    : '*' 
    | SLASH_SIGN 
    | PENCENT_SIGN 
    | KW_DIV 
    | '+' 
    | '-' 
    | DOUBLE_HYPNEN_SIGN
    ;

unaryOperator
    : '!' 
    | '~' 
    | ADD_SIGN 
    | '-' 
    | KW_NOT
    ;

constant
    : timeIntervalExpression
    | timePointLiteral
    | stringLiteral                                             // 引号包含的字符串
    | HYPNEN_SIGN? decimalLiteral                                // 正/负整数
    | booleanLiteral                                            // 布尔值
    | REAL_LITERAL                                              // 小数
    | BIT_STRING
    | KW_NOT? KW_NULL                                           // 空 | 非空
    ;

timePointLiteral
    : timePointUnit stringLiteral
    ;

stringLiteral
    : STRING_LITERAL
    ;

decimalLiteral
    : DIG_LITERAL
    ;

booleanLiteral
    : KW_TRUE | KW_FALSE;

setQuantifier
    : KW_DISTINCT
    | KW_ALL
    ;

timePointUnit
    : KW_YEAR
    | KW_QUARTER
    | KW_MONTH
    | KW_WEEK
    | KW_DAY
    | KW_HOUR
    | KW_MINUTE
    | KW_SECOND
    | KW_MILLISECOND
    | KW_MICROSECOND
    ;

timeIntervalUnit
    : KW_MILLENNIUM
    | KW_CENTURY
    | KW_DECADE
    | KW_YEAR
    | KW_YEARS
    | KW_QUARTER
    | KW_MONTH
    | KW_MONTHS
    | KW_WEEK
    | KW_WEEKS
    | KW_DAY
    | KW_DAYS
    | KW_HOUR
    | KW_HOURS
    | KW_MINUTE
    | KW_MINUTES
    | KW_SECOND
    | KW_SECONDS
    | KW_MILLISECOND
    | KW_MICROSECOND
    | KW_NANOSECOND
    | KW_EPOCH
    ;

reservedKeywordsUsedAsFuncParam
    : KW_LEADING
    | KW_TRAILING
    | KW_BOTH
    | KW_ALL
    | KW_DISTINCT
    | ASTERISK_SIGN
    ;

reservedKeywordsUsedAsFuncName
    : KW_ABS
    | KW_ARRAY
    | KW_AVG
    | KW_CAST
    | KW_CEIL
    | KW_COALESCE
    | KW_COLLECT
    | KW_COUNT
    | KW_DATE
    | KW_GROUPING
    | KW_HOUR
    | KW_IF
    | KW_LAG
    | KW_LEFT
    | KW_MAP
    | KW_MINUTE
    | KW_MONTH
    | KW_OVERLAY
    | KW_POSITION
    | KW_POWER
    | KW_QUARTER
    | KW_RANK
    | KW_RIGHT
    | KW_SECOND
    | KW_SUBSTRING
    | KW_SUM
    | KW_TIME
    | KW_TIMESTAMP
    | KW_TIMESTAMP_3
    | KW_TIMESTAMP_6
    | KW_TIMESTAMP_9
    | KW_TRUNCATE
    | KW_UPPER
    | KW_WEEK
    | KW_YEAR
    ;

reservedKeywords
    : KW_ABS
    | KW_ALL
    | KW_ALLOW
    | KW_ALTER 
    | KW_AND
    | KW_ANY
    | KW_ARE
    | KW_ARRAY
    | KW_AS
    | KW_ASYMMETRIC
    | KW_AT
    | KW_AVG
    | KW_BEGIN
    | KW_BETWEEN
    | KW_BIGINT
    | KW_BINARY
    | KW_BIT
    | KW_BLOB
    | KW_BOOLEAN
    | KW_BOTH
    | KW_BY
    | KW_CALL
    | KW_CALLED
    | KW_CASCADED
    | KW_CASE
    | KW_CAST
    | KW_CEIL
    | KW_CHAR
    | KW_CHARACTER
    | KW_CHECK
    | KW_CLOB
    | KW_CLOSE
    | KW_COALESCE
    | KW_COLLATE
    | KW_COLLECT
    | KW_COLUMN
    | KW_COMMIT
    | KW_CONNECT
    | KW_CONSTRAINT
    | KW_CONTAINS
    | KW_CONVERT
    | KW_COUNT
    | KW_CREATE
    | KW_CROSS
    | KW_CUBE
    | KW_CURRENT
    | KW_CURSOR
    | KW_CYCLE
    | KW_DATE
    | KW_DATETIME
    | KW_DAY
    | KW_DEC
    | KW_DECIMAL
    | KW_DECLARE
    | KW_DEFAULT
    | KW_DEFINE
    | KW_DELETE
    | KW_DESCRIBE
    | KW_DISTINCT
    | KW_DOUBLE
    | KW_DROP
    | KW_EACH
    | KW_ELSE
    | KW_END
    | KW_EQUALS
    | KW_EXCEPT
    | KW_EXECUTE
    | KW_EXISTS
    | KW_EXPLAIN
    | KW_EXTERNAL
    | KW_EXTRACT
    | KW_FALSE
    | KW_FLOAT
    | KW_FOR
    | KW_FROM
    | KW_FULL
    | KW_FUNCTION
    | KW_GLOBAL
    | KW_GRANT
    | KW_GROUP
    | KW_GROUPING
    | KW_GROUPS
    | KW_HAVING
    | KW_HOUR
    | KW_IMPORT
    | KW_IN
    | KW_INCLUDING
    | KW_INNER
    | KW_INOUT
    | KW_INSERT
    | KW_INT
    | KW_INTEGER
    | KW_INTERSECT
    | KW_INTERVAL
    | KW_INTO
    | KW_IS
    | KW_JOIN
    | KW_LAG
    | KW_LANGUAGE
    | KW_LATERAL
    | KW_LEADING
    | KW_LEFT
    | KW_LIKE
    | KW_LIMIT
    | KW_LOCAL
    | KW_MATCH
    | KW_MATCH_RECOGNIZE
    | KW_MEASURES
    | KW_MERGE
    | KW_METADATA
    | KW_MINUS
    | KW_MINUTE
    | KW_MODIFIES
    | KW_MODULE
    | KW_MONTH
    | KW_MULTISET
    | KW_NATURAL
    | KW_NEXT
    | KW_NO
    | KW_NONE
    | KW_NOT
    | KW_NULL
    | KW_NUMERIC
    | KW_OF
    | KW_OFFSET
    | KW_ON
    | KW_ONE
    | KW_OR
    | KW_ORDER
    | KW_OUT
    | KW_OUTER
    | KW_OVER
    | KW_OVERLAY
    | KW_PARTITION
    | KW_PATTERN
    | KW_PER
    | KW_PERCENT
    | KW_PERIOD
    | KW_POSITION
    | KW_PRIMARY
    | KW_RANGE
    | KW_RANK
    | KW_RESET
    | KW_REVOKE
    | KW_RIGHT
    | KW_RLIKE
    | KW_ROLLBACK
    | KW_ROLLUP
    | KW_ROW
    | KW_ROWS
    | KW_SECOND
    | KW_SELECT
    | KW_SET
    | KW_SHOW
    | KW_SIMILAR
    | KW_SKIP
    | KW_SMALLINT
    | KW_START
    | KW_STATIC
    | KW_SUBSTRING
    | KW_SUM
    | KW_SYSTEM_TIME
    | KW_SYSTEM
    | KW_SYSTEM_TIME
    | KW_SYSTEM_USER
    | KW_TABLE
    | KW_TABLESAMPLE
    | KW_THEN
    | KW_TIME
    | KW_TIMESTAMP
    | KW_TIMESTAMP_3
    | KW_TIMESTAMP_6
    | KW_TIMESTAMP_9
    | KW_TINYINT
    | KW_TO
    | KW_TRUE
    | KW_TRUNCATE
    | KW_UNION
    | KW_UNIQUE
    | KW_UNKNOWN
    | KW_UNNEST
    | KW_UPPER
    | KW_UPSERT
    | KW_USER
    | KW_USING
    | KW_VALUE
    | KW_VALUES
    | KW_VARBINARY
    | KW_VARCHAR
    | KW_WHEN
    | KW_WHERE
    | KW_WINDOW
    | KW_WITH
    | KW_WITHIN
    | KW_WITHOUT
    | KW_YEAR
    ;

nonReservedKeywords
    :KW_ADD                           
    |KW_ADMIN                         
    |KW_AFTER                         
    |KW_ANALYZE                       
    |KW_ASC                           
    |KW_BEFORE                        
    |KW_BYTES                         
    |KW_CASCADE                       
    |KW_CATALOG                       
    |KW_CATALOGS                      
    |KW_CENTURY                       
    |KW_CHAIN                         
    |KW_CHANGELOG_MODE                
    |KW_CHARACTERS                    
    |KW_COMMENT                       
    |KW_COMPACT                       
    |KW_COLUMNS                       
    |KW_CONSTRAINTS                   
    |KW_CONSTRUCTOR                   
    |KW_CUMULATE                      
    |KW_DATA                          
    |KW_DATABASE                      
    |KW_DATABASES                     
    |KW_DAYS                          
    |KW_DECADE                        
    |KW_DEFINED                       
    |KW_DESC                          
    |KW_DESCRIPTOR                    
    |KW_DIV                           
    |KW_ENCODING                      
    |KW_ENFORCED                      
    |KW_ENGINE                        
    |KW_ERROR                         
    |KW_ESTIMATED_COST                
    |KW_EXCEPTION                     
    |KW_EXCLUDE                       
    |KW_EXCLUDING                     
    |KW_EXTENDED                      
    |KW_FILE                          
    |KW_FINAL                         
    |KW_FIRST                         
    |KW_FOLLOWING                     
    |KW_FORMAT                        
    |KW_FORTRAN                       
    |KW_FOUND                         
    |KW_FRAC_SECOND                   
    |KW_FUNCTIONS                     
    |KW_GENERAL                       
    |KW_GENERATED                     
    |KW_GO                            
    |KW_GOTO                          
    |KW_GRANTED                       
    |KW_HOP                           
    |KW_HOURS                         
    |KW_IF                            
    |KW_IGNORE                        
    |KW_INCREMENT                     
    |KW_INPUT                         
    |KW_INVOKER                       
    |KW_JAR                           
    |KW_JARS                          
    |KW_JAVA                          
    |KW_JSON                          
    |KW_JSON_EXECUTION_PLAN           
    |KW_KEY                           
    |KW_KEY_MEMBER                    
    |KW_KEY_TYPE                      
    |KW_LABEL                         
    |KW_LAST                          
    |KW_LENGTH                        
    |KW_LEVEL                         
    |KW_LOAD                          
    |KW_MAP                           
    |KW_MICROSECOND                   
    |KW_MILLENNIUM                    
    |KW_MILLISECOND                   
    |KW_MINUTES                       
    |KW_MINVALUE                      
    |KW_MODIFY                        
    |KW_MODULES                       
    |KW_MONTHS                        
    |KW_NANOSECOND                    
    |KW_NULLS                         
    |KW_NUMBER                        
    |KW_OPTION                        
    |KW_OPTIONS                       
    |KW_ORDERING                      
    |KW_OUTPUT                        
    |KW_OVERWRITE                     
    |KW_OVERWRITING                   
    |KW_PARTITIONED                   
    |KW_PARTITIONS                    
    |KW_PASSING                       
    |KW_PAST                          
    |KW_PATH                          
    |KW_PLACING                       
    |KW_PLAN                          
    |KW_PRECEDING                     
    |KW_PRESERVE                      
    |KW_PRIOR                         
    |KW_PRIVILEGES                    
    |KW_PUBLIC                        
    |KW_PYTHON                        
    |KW_PYTHON_FILES                  
    |KW_PYTHON_REQUIREMENTS           
    |KW_PYTHON_DEPENDENCIES           
    |KW_PYTHON_JAR                    
    |KW_PYTHON_ARCHIVES               
    |KW_PYTHON_PARAMETER              
    |KW_QUARTER                       
    |KW_RAW                           
    |KW_READ                          
    |KW_RELATIVE                      
    |KW_REMOVE                        
    |KW_RENAME                        
    |KW_REPLACE                       
    |KW_RESPECT                       
    |KW_RESTART                       
    |KW_RESTRICT                      
    |KW_ROLE                          
    |KW_ROW_COUNT                     
    |KW_SCALA                         
    |KW_SCALAR                        
    |KW_SCALE                         
    |KW_SCHEMA                        
    |KW_SECONDS                       
    |KW_SECTION                       
    |KW_SECURITY                      
    |KW_SELF                          
    |KW_SERVER                        
    |KW_SERVER_NAME                   
    |KW_SESSION                       
    |KW_SETS                          
    |KW_SIMPLE                        
    |KW_SIZE                          
    |KW_SLIDE                         
    |KW_SOURCE                        
    |KW_SPACE                         
    |KW_STATE                         
    |KW_STATEMENT                     
    |KW_STEP                          
    |KW_STRING                        
    |KW_STRUCTURE                     
    |KW_STYLE                         
    |KW_TABLES                        
    |KW_TEMPORARY                     
    |KW_TIMECOL        
    |KW_FLOOR               
    |KW_TIMESTAMP_LTZ                 
    |KW_TIMESTAMPADD                  
    |KW_TIMESTAMPDIFF                 
    |KW_TRANSFORM                     
    |KW_TUMBLE                        
    |KW_TYPE                          
    |KW_UNDER                         
    |KW_UNLOAD                        
    |KW_USAGE                         
    |KW_USE                           
    |KW_UTF16                         
    |KW_UTF32                         
    |KW_UTF8                          
    |KW_VERSION                       
    |KW_VIEW                          
    |KW_VIEWS                         
    |KW_VIRTUAL                       
    |KW_WATERMARK                     
    |KW_WATERMARKS                    
    |KW_WEEK                          
    |KW_WORK                          
    |KW_WRAPPER                       
    |KW_YEARS                         
    |KW_ZONE                          
    ;


SPACE:                               [ \t\r\n]+    -> channel(HIDDEN);
COMMENT_INPUT:                       '/*' .*? '*/' -> channel(HIDDEN);
LINE_COMMENT:                        (
                                       ('--' | '#') ~[\r\n]* ('\r'? '\n' | EOF)
                                       | '--' ('\r'? '\n' | EOF)
                                     ) -> channel(HIDDEN);

// List of keywords that are not reserved.
// Please keep the keyword in alphabetical order if new keyword is added.
// Please add it to the nonReservedKeywords rule if new keyword is added.
// Reference link https://github.com/apache/flink/blob/release-1.16/flink-table/flink-sql-parser/src/main/codegen/data/Parser.tdd

KW_ADD:                              A D D;
KW_ADMIN:                            A D M I N;
KW_AFTER:                            A F T E R;
KW_ANALYZE:                          A N A L Y Z E;
KW_ASC:                              A S C;
KW_BEFORE:                           B E F O R E;
KW_BYTES:                            B Y T E S;
KW_CASCADE:                          C A S C A D E;
KW_CATALOG:                          C A T A L O G;
KW_CATALOGS:                         C A T A L O G;
KW_CENTURY:                          C E N T U R Y;
KW_CHAIN:                            C H A I N;
KW_CHANGELOG_MODE:                   C H A N G E L O G'_'M O D E;
KW_CHARACTERS:                       C H A R A C T E R S;
KW_COMMENT:                          C O M M E N T;
KW_COMPACT:                          C O M P A C T;
KW_COLUMNS:                          C O L U M N S;
KW_CONSTRAINTS:                      C O N S T R A I N T S;
KW_CONSTRUCTOR:                      C O N S T R U C T O R;
KW_CUMULATE:                         C U M U L A T E;
KW_DATA:                             D A T A ;
KW_DATABASE:                         D A T A B A S E;
KW_DATABASES:                        D A T A B A S E S;
KW_DAYS:                             D A Y S;
KW_DECADE:                           D E C A D E;
KW_DEFINED:                          D E F I N E D;
KW_DESC:                             D E S C;
KW_DESCRIPTOR:                       D E S C R I P T O R;
KW_DIV:                              D I V;
KW_ENCODING:                         E N C O D I N G;
KW_ENFORCED:                         E N F O R C E D;
KW_ENGINE:                           E N G I N E;
KW_EPOCH:                            E P O C H;
KW_ERROR:                            E R R O R;
KW_ESTIMATED_COST:                   E S T I M A T E D'_'C O S T;
KW_EXCEPTION:                        E X C E P T I O N;
KW_EXCLUDE:                          E X C L U D E;
KW_EXCLUDING:                        E X C L U D I N G;
KW_EXTENDED:                         E X T E N D E D;
KW_FILE:                             F I L E;
KW_FINAL:                            F I N A L;
KW_FIRST:                            F I R S T;
KW_FOLLOWING:                        F O L L O W I N G;
KW_FORMAT:                           F O R M A T;
KW_FORTRAN:                          F O R T R A N;
KW_FOUND:                            F O U N D;
KW_FRAC_SECOND:                      F R A C'_'S E C O N D;
KW_FUNCTIONS:                        F U N C T I O N S;
KW_GENERAL:                          G E N E R A L;
KW_GENERATED:                        G E N E R A T E D;
KW_GO:                               G O;
KW_GOTO:                             G O T O;
KW_GRANTED:                          G R A N T E D;
KW_HOP:                              H O P;
KW_HOURS:                            H O U R S;
KW_IF:                               I F;
KW_IGNORE:                           I G N O R E;
KW_INCREMENT:                        I N C R E M E N T;
KW_INPUT:                            I N P U T;
KW_INVOKER:                          I N V O K E R;
KW_JAR:                              J A R;
KW_JARS:                             J A R S;
KW_JAVA:                             J A V A;
KW_JSON:                             J S O N;
KW_JSON_EXECUTION_PLAN:              J S O N'_'E X E C U T I O N'_'P L A N;
KW_KEY:                              K E Y;
KW_KEY_MEMBER:                       K E Y'_'M E M B E R;
KW_KEY_TYPE:                         K E Y'_'T Y P E;
KW_LABEL:                            L A B E L;
KW_LAST:                             L A S T;
KW_LENGTH:                           L E N G T H;
KW_LEVEL:                            L E V E L;
KW_LOAD:                             L O A D;
KW_MAP:                              M A P;
KW_MICROSECOND:                      M I C R O S E C O N D;
KW_MILLENNIUM:                       M I L L E N N I U M;
KW_MILLISECOND:                      M I L L I S E C O N D;
KW_MINUTES:                          M I N U T E S;
KW_MINVALUE:                         M I N V A L U E;
KW_MODIFY:                           M O D I F Y;
KW_MODULES:                          M O D U L E S;
KW_MONTHS:                           M O N T H S;
KW_NANOSECOND:                       N A N O S E C O N D;
KW_NULLS:                            N U L L S;
KW_NUMBER:                           N U M B E R;
KW_OPTION:                           O P T I O N;
KW_OPTIONS:                          O P T I O N S;
KW_ORDERING:                         O R D E R I N G;
KW_OUTPUT:                           O U T P U T;
KW_OVERWRITE:                        O V E R W R I T E;
KW_OVERWRITING:                      O V E R W R I T I N G;
KW_PARTITIONED:                      P A R T I T I O N E D;
KW_PARTITIONS:                       P A R T I T I O N S;
KW_PASSING:                          P A S S I N G;
KW_PAST:                             P A S T;
KW_PATH:                             P A T H;
KW_PLACING:                          P L A C I N G;
KW_PLAN:                             P L A N;
KW_PRECEDING:                        P R E C E D I N G;
KW_PRESERVE:                         P R E S E R V E;
KW_PRIOR:                            P R I O R;
KW_PRIVILEGES:                       P R I V I L E G E S;
KW_PUBLIC:                           P U B L I C;
KW_PYTHON:                           P Y T H O N;
KW_PYTHON_FILES:                     P Y T H O N'_'F I L E S;
KW_PYTHON_REQUIREMENTS:              P Y T H O N'_'R E Q U I R E M E N T S;
KW_PYTHON_DEPENDENCIES:              P Y T H O N'_'D E P E N D E N C I E S;
KW_PYTHON_JAR:                       P Y T H O N'_'J A R;
KW_PYTHON_ARCHIVES:                  P Y T H O N'_'A R C H I V E S;
KW_PYTHON_PARAMETER:                 P Y T H O N'_'P A R A M E T E R;
KW_QUARTER:                          Q U A R T E R;
KW_RAW:                              R A W;
KW_READ:                             R E A D;
KW_RELATIVE:                         R E L A T I V E;
KW_REMOVE:                           R E M O V E;
KW_RENAME:                           R E N A M E;
KW_REPLACE:                          R E P L A C E;
KW_RESPECT:                          R E S P E C T;
KW_RESTART:                          R E S T A R T;
KW_RESTRICT:                         R E S T R I C T;
KW_ROLE:                             R O L E;
KW_ROW_COUNT:                        R O W'_'C O U N T;
KW_SCALA:                            S C A L A;
KW_SCALAR:                           S C A L A R;
KW_SCALE:                            S C A L E;
KW_SCHEMA:                           S C H E M A;
KW_SECONDS:                          S E C O N D S;
KW_SECTION:                          S E C T I O N;
KW_SECURITY:                         S E C U R I T Y;
KW_SELF:                             S E L F;
KW_SERVER:                           S E R V E R;
KW_SERVER_NAME:                      S E R V E R'_'N A M E;
KW_SESSION:                          S E S S I O N;
KW_SETS:                             S E T S;
KW_SIMPLE:                           S I M P L E;
KW_SIZE:                             S I Z E;
KW_SLIDE:                            S L I D E;
KW_SOURCE:                           S O U R C E;
KW_SPACE:                            S P A C E;
KW_STATE:                            S T A T E;
KW_STATEMENT:                        S T A T E M E N T;
KW_STEP:                             S T E P;
KW_STRING:                           S T R I N G;
KW_STRUCTURE:                        S T R U C T U R E;
KW_STYLE:                            S T Y L E;
KW_TABLES:                           T A B L E S;
KW_TEMPORARY:                        T E M P O R A R Y;
KW_TIMECOL:                          T I M E C O L;
KW_FLOOR:                            F L O O R;
KW_TIMESTAMP_LTZ:                    T I M E S T A M P'_'L T Z;
KW_TIMESTAMPADD:                     T I M E S T A M P A D D;
KW_TIMESTAMPDIFF:                    T I M E S T A M P D I F F;
KW_TRANSFORM:                        T R A N S F O R M;
KW_TUMBLE:                           T U M B L E;
KW_TYPE:                             T Y P E;
KW_UNDER:                            U N D E R;
KW_UNLOAD:                           U N L O A D;
KW_USAGE:                            U S A G E;
KW_USE:                              U S E;
KW_UTF16:                            U T F'16';
KW_UTF32:                            U T F '32';
KW_UTF8:                             U T F'8';
KW_VERSION:                          V E R S I O N;
KW_VIEW:                             V I E W;
KW_VIEWS:                            V I E W S;
KW_VIRTUAL:                          V I R T U A L;
KW_WATERMARK:                        W A T E R M A R K;
KW_WATERMARKS:                       W A T E R M A R K S;
KW_WEEK:                             W E E K;
KW_WEEKS:                            W E E K S;
KW_WORK:                             W O R K;
KW_WRAPPER:                          W R A P P E R;
KW_YEARS:                            Y E A R S;
KW_ZONE:                             Z O N E;


// Reserved Keywords
// Please keep the keyword in alphabetical order if new keyword is added.
// Please add it to the reservedKeywords rule if new keyword is added.
// Reference link https://calcite.apache.org/docs/reference.html

KW_ABS:                              A B S;
KW_ALL:                              A L L;
KW_ALLOW:                            A L L O W;
KW_ALTER :                           A L T E R ;
KW_AND:                              A N D;
KW_ANY:                              A N Y;
KW_ARE:                              A R E;
KW_ARRAY:                            A R R A Y;
KW_AS:                               A S;
KW_ASYMMETRIC:                       A S Y M M E T R I C;
KW_AT:                               A T;
KW_AVG:                              A V G;
KW_BEGIN:                            B E G I N;
KW_BETWEEN:                          B E T W E E N;
KW_BIGINT:                           B I G I N T;
KW_BINARY:                           B I N A R Y;
KW_BIT:                              B I T;
KW_BLOB:                             B L O B;
KW_BOOLEAN:                          B O O L E A N;
KW_BOTH:                             B O T H;
KW_BY:                               B Y;
KW_CALL:                             C A L L;
KW_CALLED:                           C A L L E D;
KW_CASCADED:                         C A S C A D E D;
KW_CASE:                             C A S E;
KW_CAST:                             C A S T;
KW_CEIL:                             C E I L;
KW_CHAR:                             C H A R;
KW_CHARACTER:                        C H A R A C T E R;
KW_CHECK:                            C H E C K;
KW_CLOB:                             C L O B;
KW_CLOSE:                            C L O S E;
KW_COALESCE:                         C O A L E S C E;
KW_COLLATE:                          C O L L A T E;
KW_COLLECT:                          C O L L E C T;
KW_COLUMN:                           C O L U M N;
KW_COMMIT:                           C O M M I T;
KW_CONNECT:                          C O N N E C T;
KW_CONSTRAINT:                       C O N S T R A I N T;
KW_CONTAINS:                         C O N T A I N S;
KW_CONVERT:                          C O N V E R T;
KW_COUNT:                            C O U N T;
KW_CREATE:                           C R E A T E;
KW_CROSS:                            C R O S S;
KW_CUBE:                             C U B E;
KW_CURRENT:                          C U R R E N T;
KW_CURSOR:                           C U R S O R;
KW_CYCLE:                            C Y C L E;
KW_DATE:                             D A T E;
KW_DATETIME:                         D A T E T I M E;
KW_DAY:                              D A Y;
KW_DEC:                              D E C;
KW_DECIMAL:                          D E C I M A L;
KW_DECLARE:                          D E C L A R E;
KW_DEFAULT:                          D E F A U L T;
KW_DEFINE:                           D E F I N E;
KW_DELETE:                           D E L E T E;
KW_DESCRIBE:                         D E S C R I B E;
KW_DISTINCT:                         D I S T I N C T;
KW_DOUBLE:                           D O U B L E;
KW_DROP:                             D R O P;
KW_EACH:                             E A C H;
KW_ELSE:                             E L S E;
KW_END:                              E N D;
KW_EQUALS:                           E Q U A L S;
KW_ESCAPE:                           E S C A P E;
KW_EXCEPT:                           E X C E P T;
KW_EXECUTE:                          E X E C U T E;
KW_EXISTS:                           E X I S T S;
KW_EXPLAIN:                          E X P L A I N;
KW_EXTERNAL:                         E X T E R N A L;
KW_EXTRACT:                          E X T R A C T;
KW_FALSE:                            F A L S E ;
KW_FLOAT:                            F L O A T;
KW_FOR:                              F O R;
KW_FROM:                             F R O M;
KW_FULL:                             F U L L;
KW_FUNCTION:                         F U N C T I O N;
KW_GLOBAL:                           G L O B A L;
KW_GRANT:                            G R A N T;
KW_GROUP:                            G R O U P;
KW_GROUPING:                         G R O U P I N G;
KW_GROUPS:                           G R O U P S;
KW_HAVING:                           H A V I N G ;
KW_HOUR:                             H O U R;
KW_IMPORT:                           I M P O R T;
KW_IN:                               I N;
KW_INCLUDING:                        I N C L U D I N G;
KW_INNER:                            I N N E R;
KW_INOUT:                            I N O U T;
KW_INSERT:                           I N S E R T;
KW_INT:                              I N T;
KW_INTEGER:                          I N T E G E R;
KW_INTERSECT:                        I  N T E R S E C T;
KW_INTERVAL:                         I N T E R V A L;
KW_INTO:                             I N T O;
KW_IS:                               I S;
KW_JOIN:                             J O I N;
KW_LAG:                              L A G;
KW_LANGUAGE:                         L A N G U A G E;
KW_LATERAL:                          L A T E R A L;
KW_LEADING:                          L E A D I N G;
KW_LEFT:                             L E F T;
KW_LIKE:                             L I K E;
KW_LIMIT:                            L I M I T;
KW_LOCAL:                            L O C A L;
KW_MATCH:                            M A T C H;
KW_MATCH_RECOGNIZE:                  M A T C H'_'R E C O G N I Z E;
KW_MEASURES:                         M E A S U R E S;
KW_MERGE:                            M E R G E;
KW_METADATA:                         M E T A D A T A;
KW_MINUS:                            M I N U S;
KW_MINUTE:                           M I N U T E;
KW_MODIFIES:                         M O D I F I E S ;
KW_MODULE:                           M O D U L E;
KW_MONTH:                            M O N T H;
KW_MULTISET:                         M U L T I S E T;
KW_NATURAL:                          N A T U R A L;
KW_NEXT:                             N E X T ;
KW_NO:                               N O;
KW_NONE:                             N O N E;
KW_NOT:                              N O T;
KW_NULL:                             N U L L;
KW_NUMERIC:                          N U M E R I C;
KW_OF:                               O F;
KW_OFFSET:                           O F F S E T;
KW_ON:                               O N;
KW_ONE:                              O N E;
KW_OR:                               O R;
KW_ORDER:                            O R D E R;
KW_OUT:                              O U T;
KW_OUTER:                            O U T E R;
KW_OVER:                             O V E R;
KW_OVERLAY:                          O V E R L A Y;
KW_PARTITION:                        P A R T I T I O N;
KW_PATTERN:                          P A T T E R N;
KW_PER:                              P E R;
KW_PERCENT:                          P E R C E N T;
KW_PERIOD:                           P E R I O D;
KW_POSITION:                         P O S I T I O N;
KW_POWER:                            P O W E R;
KW_PRIMARY:                          P R I M A R Y;
KW_RANGE:                            R A N G E;
KW_RANK:                             R A N K;
KW_RESET:                            R E S E T;
KW_REVOKE:                           R E V O K E;
KW_RIGHT:                            R I G H T;
KW_RLIKE:                            R L I K E;
KW_ROLLBACK:                         R O L L B A C K;
KW_ROLLUP:                           R O L L U P ;
KW_ROW:                              R O W;
KW_ROWS:                             R O W S;
KW_SECOND:                           S E C O N D;
KW_SELECT:                           S E L E C T;
KW_SET:                              S E T;
KW_SHOW:                             S H O W;
KW_SIMILAR:                          S I M I L A R ;
KW_SKIP:                             S K I P;
KW_SMALLINT:                         S M A L L I N T;
KW_START:                            S T A R T;
KW_STATIC:                           S T A T I C;
KW_SUBSTRING:                        S U B S T R I N G ;
KW_SUM:                              S U M;
KW_SYMMETRIC:                        S Y M M E T R I C;
KW_SYSTEM:                           S Y S T E M;
KW_SYSTEM_TIME:                      S Y S T E M '_' T I M E;
KW_SYSTEM_USER:                      S Y S T E M'_' U S E R;
KW_TABLE:                            T A B L E;
KW_TABLESAMPLE:                      T A B L E S A M P L E;
KW_THEN:                             T H E N;
KW_TIME:                             T I M E;
KW_TIMESTAMP:                        T I M E S T A M P;
KW_TIMESTAMP_3:                      T I M E S T A M P'(3)';
KW_TIMESTAMP_6:                      T I M E S T A M P'(6)';
KW_TIMESTAMP_9:                      T I M E S T A M P'(9)';
KW_TINYINT:                          T I N Y I N T ;
KW_TO:                               T O;
KW_TRAILING:                         T R A I L I N G;
KW_TRUE:                             T R U E;
KW_TRUNCATE:                         T R U N C A T E;
KW_UNION:                            U N I O N;
KW_UNIQUE:                           U N I Q U E;
KW_UNKNOWN:                          U N K N O W N;
KW_UNNEST:                           U N N E S T;
KW_UPPER:                            U P P E R;
KW_UPSERT:                           U P S E R T;
KW_USER:                             U S E R;
KW_USING:                            U S I N G;
KW_VALUE:                            V A L U E;
KW_VALUES:                           V A L U E S;
KW_VARBINARY:                        V A R B I N A R Y;
KW_VARCHAR:                          V A R C  H A R;
KW_WHEN:                             W H E N;
KW_WHERE:                            W H E R E;
KW_WINDOW:                           W I N D O W;
KW_WITH:                             W I T H;
KW_WITHIN:                           W I T H I N;
KW_WITHOUT:                          W I T H O U T;
KW_YEAR:                             Y E A R;

// fragment a-z
fragment A: ('A'|'a');
fragment B: ('B'|'b');
fragment C: ('C'|'c');
fragment D: ('D'|'d');
fragment E: ('E'|'e');
fragment F: ('F'|'f');
fragment G: ('G'|'g');
fragment H: ('H'|'h');
fragment I: ('I'|'i');
fragment J: ('J'|'j');
fragment K: ('K'|'k');
fragment L: ('L'|'l');
fragment M: ('M'|'m');
fragment N: ('N'|'n');
fragment O: ('O'|'o');
fragment P: ('P'|'p');
fragment Q: ('Q'|'q');
fragment R: ('R'|'r');
fragment S: ('S'|'s');
fragment T: ('T'|'t');
fragment U: ('U'|'u');
fragment V: ('V'|'v');
fragment W: ('W'|'w');
fragment X: ('X'|'x');
fragment Y: ('Y'|'y');
fragment Z: ('Z'|'z');


// Operators. Comparation

EQUAL_SYMBOL:                        '=';
GREATER_SYMBOL:                      '>';
LESS_SYMBOL:                         '<';
EXCLAMATION_SYMBOL:                  '!';


// Operators. Bit

BIT_NOT_OP:                          '~';
BIT_OR_OP:                           '|';
BIT_AND_OP:                          '&';
BIT_XOR_OP:                          '^';


// Constructors symbols

DOT:                                 '.';
LS_BRACKET:                          '[';
RS_BRACKET:                          ']';
LR_BRACKET:                          '(';
RR_BRACKET:                          ')';
LB_BRACKET:                          '{';
RB_BRACKET:                          '}';
COMMA:                               ',';
SEMICOLON:                           ';';
AT_SIGN:                             '@';
SINGLE_QUOTE_SYMB:                   '\'';
DOUBLE_QUOTE_SYMB:                   '"';
REVERSE_QUOTE_SYMB:                  '`';
COLON_SYMB:                          ':';
ASTERISK_SIGN:                       '*';
UNDERLINE_SIGN:                      '_';
HYPNEN_SIGN:                         '-';
ADD_SIGN:                            '+';
PENCENT_SIGN:                        '%';
DOUBLE_VERTICAL_SIGN:                '||';
DOUBLE_HYPNEN_SIGN:                  '--';
SLASH_SIGN:                          '/';
QUESTION_MARK_SIGN:                  '?'; 
DOUBLE_RIGHT_ARROW:                  '=>';                
STRING_LITERAL:                      DQUOTA_STRING | SQUOTA_STRING | BQUOTA_STRING;
DIG_LITERAL:                         DEC_DIGIT+;
REAL_LITERAL:                        (DEC_DIGIT+)? '.' DEC_DIGIT+
                                     | DEC_DIGIT+ '.' EXPONENT_NUM_PART
                                     | (DEC_DIGIT+)? '.' (DEC_DIGIT+ EXPONENT_NUM_PART)
                                     | DEC_DIGIT+ EXPONENT_NUM_PART;
BIT_STRING:                          BIT_STRING_L;
ID_LITERAL:                          ID_LITERAL_FRAG;
SLASH_TEXT:                          SLASH_TEXT_FRAG;

fragment SLASH_TEXT_FRAG:            [/\\] (~([/\\ ] | '(' | ')' | ';'))*;
fragment JAR_FILE_PARTTARN:          '`' ( '\\'. | '``' | ~('`'|'\\'))* '`';
fragment EXPONENT_NUM_PART:          'E' [-+]? DEC_DIGIT+;
fragment ID_LITERAL_FRAG:            [A-Z_0-9a-z]*?[A-Z_a-z]+?[A-Z_0-9a-z]*;
fragment DEC_DIGIT:                  [0-9];
fragment DEC_LETTER:                 [A-Za-z];
fragment DQUOTA_STRING:              '"' ( '\\'. | '""' | ~('"'| '\\') )* '"';
fragment SQUOTA_STRING:              '\'' ('\\'. | '\'\'' | ~('\'' | '\\'))* '\'';
fragment BIT_STRING_L:               'B' '\'' [01]+ '\'';
fragment BQUOTA_STRING:              '`' ( '\\'. | '``' | ~('`'|'\\'))* '`';