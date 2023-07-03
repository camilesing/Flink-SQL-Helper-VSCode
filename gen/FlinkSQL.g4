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
    : LESS_SYMBOL columnType GREATER_SYMBOL
    ;

mapTypeDimension
    : LESS_SYMBOL columnType (COMMA columnType) GREATER_SYMBOL
    ;

rowTypeDimension
    : LESS_SYMBOL columnName columnType (COMMA columnName columnType)* GREATER_SYMBOL
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
    : KW_CREATE KW_DATABASE ifNotExists? databasePathCreate commentSpec? withOption
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
    ;

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

KW_ADD:                              'ADD';
KW_ADMIN:                            'ADMIN';
KW_AFTER:                            'AFTER';
KW_ANALYZE:                          'ANALYZE';
KW_ASC:                              'ASC';
KW_BEFORE:                           'BEFORE';
KW_BYTES:                            'BYTES';
KW_CASCADE:                          'CASCADE';
KW_CATALOG:                          'CATALOG';
KW_CATALOGS:                         'CATALOGS';
KW_CENTURY:                          'CENTURY';
KW_CHAIN:                            'CHAIN';
KW_CHANGELOG_MODE:                   'CHANGELOG_MODE';
KW_CHARACTERS:                       'CHARACTERS';
KW_COMMENT:                          'COMMENT'|'comment';
KW_COMPACT:                          'COMPACT';
KW_COLUMNS:                          'COLUMNS';
KW_CONSTRAINTS:                      'CONSTRAINTS';
KW_CONSTRUCTOR:                      'CONSTRUCTOR';
KW_CUMULATE:                         'CUMULATE';
KW_DATA:                             'DATA';
KW_DATABASE:                         'DATABASE';
KW_DATABASES:                        'DATABASES';
KW_DAYS:                             'DAYS';
KW_DECADE:                           'DECADE';
KW_DEFINED:                          'DEFINED';
KW_DESC:                             'DESC';
KW_DESCRIPTOR:                       'DESCRIPTOR';
KW_DIV:                              'DIV';
KW_ENCODING:                         'ENCODING';
KW_ENFORCED:                         'ENFORCED';
KW_ENGINE:                           'ENGINE';
KW_EPOCH:                            'EPOCH';
KW_ERROR:                            'ERROR';
KW_ESTIMATED_COST:                   'ESTIMATED_COST';
KW_EXCEPTION:                        'EXCEPTION';
KW_EXCLUDE:                          'EXCLUDE';
KW_EXCLUDING:                        'EXCLUDING';
KW_EXTENDED:                         'EXTENDED';
KW_FILE:                             'FILE';
KW_FINAL:                            'FINAL';
KW_FIRST:                            'FIRST';
KW_FOLLOWING:                        'FOLLOWING';
KW_FORMAT:                           'FORMAT';
KW_FORTRAN:                          'FORTRAN';
KW_FOUND:                            'FOUND';
KW_FRAC_SECOND:                      'FRAC_SECOND';
KW_FUNCTIONS:                        'FUNCTIONS';
KW_GENERAL:                          'GENERAL';
KW_GENERATED:                        'GENERATED';
KW_GO:                               'GO';
KW_GOTO:                             'GOTO';
KW_GRANTED:                          'GRANTED';
KW_HOP:                              'HOP';
KW_HOURS:                            'HOURS';
KW_IF:                               'IF';
KW_IGNORE:                           'IGNORE';
KW_INCREMENT:                        'INCREMENT';
KW_INPUT:                            'INPUT';
KW_INVOKER:                          'INVOKER';
KW_JAR:                              'JAR';
KW_JARS:                             'JARS';
KW_JAVA:                             'JAVA';
KW_JSON:                             'JSON';
KW_JSON_EXECUTION_PLAN:              'JSON_EXECUTION_PLAN';
KW_KEY:                              'KEY';
KW_KEY_MEMBER:                       'KEY_MEMBER';
KW_KEY_TYPE:                         'KEY_TYPE';
KW_LABEL:                            'LABEL';
KW_LAST:                             'LAST';
KW_LENGTH:                           'LENGTH';
KW_LEVEL:                            'LEVEL';
KW_LOAD:                             'LOAD';
KW_MAP:                              'MAP';
KW_MICROSECOND:                      'MICROSECOND';
KW_MILLENNIUM:                       'MILLENNIUM';
KW_MILLISECOND:                      'MILLISECOND';
KW_MINUTES:                          'MINUTES';
KW_MINVALUE:                         'MINVALUE';
KW_MODIFY:                           'MODIFY';
KW_MODULES:                          'MODULES';
KW_MONTHS:                           'MONTHS';
KW_NANOSECOND:                       'NANOSECOND';
KW_NULLS:                            'NULLS';
KW_NUMBER:                           'NUMBER';
KW_OPTION:                           'OPTION';
KW_OPTIONS:                          'OPTIONS';
KW_ORDERING:                         'ORDERING';
KW_OUTPUT:                           'OUTPUT';
KW_OVERWRITE:                        'OVERWRITE';
KW_OVERWRITING:                      'OVERWRITING';
KW_PARTITIONED:                      'PARTITIONED';
KW_PARTITIONS:                       'PARTITIONS';
KW_PASSING:                          'PASSING';
KW_PAST:                             'PAST';
KW_PATH:                             'PATH';
KW_PLACING:                          'PLACING';
KW_PLAN:                             'PLAN';
KW_PRECEDING:                        'PRECEDING';
KW_PRESERVE:                         'PRESERVE';
KW_PRIOR:                            'PRIOR';
KW_PRIVILEGES:                       'PRIVILEGES';
KW_PUBLIC:                           'PUBLIC';
KW_PYTHON:                           'PYTHON';
KW_PYTHON_FILES:                     'PYTHON_FILES';
KW_PYTHON_REQUIREMENTS:              'PYTHON_REQUIREMENTS';
KW_PYTHON_DEPENDENCIES:              'PYTHON_DEPENDENCIES';
KW_PYTHON_JAR:                       'PYTHON_JAR';
KW_PYTHON_ARCHIVES:                  'PYTHON_ARCHIVES';
KW_PYTHON_PARAMETER:                 'PYTHON_PARAMETER';
KW_QUARTER:                          'QUARTER';
KW_RAW:                              'RAW';
KW_READ:                             'READ';
KW_RELATIVE:                         'RELATIVE';
KW_REMOVE:                           'REMOVE';
KW_RENAME:                           'RENAME';
KW_REPLACE:                          'REPLACE';
KW_RESPECT:                          'RESPECT';
KW_RESTART:                          'RESTART';
KW_RESTRICT:                         'RESTRICT';
KW_ROLE:                             'ROLE';
KW_ROW_COUNT:                        'ROW_COUNT';
KW_SCALA:                            'SCALA';
KW_SCALAR:                           'SCALAR';
KW_SCALE:                            'SCALE';
KW_SCHEMA:                           'SCHEMA';
KW_SECONDS:                          'SECONDS';
KW_SECTION:                          'SECTION';
KW_SECURITY:                         'SECURITY';
KW_SELF:                             'SELF';
KW_SERVER:                           'SERVER';
KW_SERVER_NAME:                      'SERVER_NAME';
KW_SESSION:                          'SESSION';
KW_SETS:                             'SETS';
KW_SIMPLE:                           'SIMPLE';
KW_SIZE:                             'SIZE';
KW_SLIDE:                            'SLIDE';
KW_SOURCE:                           'SOURCE';
KW_SPACE:                            'SPACE';
KW_STATE:                            'STATE';
KW_STATEMENT:                        'STATEMENT';
KW_STEP:                             'STEP';
KW_STRING:                           'STRING';
KW_STRUCTURE:                        'STRUCTURE';
KW_STYLE:                            'STYLE';
KW_TABLES:                           'TABLES';
KW_TEMPORARY:                        'TEMPORARY';
KW_TIMECOL:                          'TIMECOL';
KW_TIMESTAMP_LTZ:                    'TIMESTAMP_LTZ';
KW_TIMESTAMPADD:                     'TIMESTAMPADD';
KW_TIMESTAMPDIFF:                    'TIMESTAMPDIFF';
KW_TRANSFORM:                        'TRANSFORM';
KW_TUMBLE:                           'TUMBLE';
KW_TYPE:                             'TYPE';
KW_UNDER:                            'UNDER';
KW_UNLOAD:                           'UNLOAD';
KW_USAGE:                            'USAGE';
KW_USE:                              'USE';
KW_UTF16:                            'UTF16';
KW_UTF32:                            'UTF32';
KW_UTF8:                             'UTF8';
KW_VERSION:                          'VERSION';
KW_VIEW:                             'VIEW';
KW_VIEWS:                            'VIEWS';
KW_VIRTUAL:                          'VIRTUAL';
KW_WATERMARK:                        'WATERMARK';
KW_WATERMARKS:                       'WATERMARKS';
KW_WEEK:                             'WEEK';
KW_WEEKS:                             'WEEKS';
KW_WORK:                             'WORK';
KW_WRAPPER:                          'WRAPPER';
KW_YEARS:                            'YEARS';
KW_ZONE:                             'ZONE';


// Reserved Keywords
// Please keep the keyword in alphabetical order if new keyword is added.
// Please add it to the reservedKeywords rule if new keyword is added.
// Reference link https://calcite.apache.org/docs/reference.html

KW_ABS:                              'ABS';
KW_ALL:                              'ALL';
KW_ALLOW:                            'ALLOW';
KW_ALTER :                           'ALTER';
KW_AND:                              'AND';
KW_ANY:                              'ANY';
KW_ARE:                              'ARE';
KW_ARRAY:                            'ARRAY';
KW_AS:                               'AS';
KW_ASYMMETRIC:                       'ASYMMETRIC';
KW_AT:                               'AT';
KW_AVG:                              'AVG';
KW_BEGIN:                            'BEGIN';
KW_BETWEEN:                          'BETWEEN';
KW_BIGINT:                           'BIGINT';
KW_BINARY:                           'BINARY';
KW_BIT:                              'BIT';
KW_BLOB:                             'BLOB';
KW_BOOLEAN:                          'BOOLEAN';
KW_BOTH:                             'BOTH';
KW_BY:                               'BY';
KW_CALL:                             'CALL';
KW_CALLED:                           'CALLED';
KW_CASCADED:                         'CASCADED';
KW_CASE:                             'CASE';
KW_CAST:                             'CAST';
KW_CEIL:                             'CEIL';
KW_CHAR:                             'CHAR';
KW_CHARACTER:                        'CHARACTER';
KW_CHECK:                            'CHECK';
KW_CLOB:                             'CLOB';
KW_CLOSE:                            'CLOSE';
KW_COALESCE:                         'COALESCE';
KW_COLLATE:                          'COLLATE';
KW_COLLECT:                          'COLLECT';
KW_COLUMN:                           'COLUMN';
KW_COMMIT:                           'COMMIT';
KW_CONNECT:                          'CONNECT';
KW_CONSTRAINT:                       'CONSTRAINT';
KW_CONTAINS:                         'CONTAINS';
KW_CONVERT:                          'CONVERT';
KW_COUNT:                            'COUNT';
KW_CREATE:                           'CREATE';
KW_CROSS:                            'CROSS';
KW_CUBE:                             'CUBE';
KW_CURRENT:                          'CURRENT';
KW_CURSOR:                           'CURSOR';
KW_CYCLE:                            'CYCLE';
KW_DATE:                             'DATE';
KW_DATETIME:                         'DATETIME';
KW_DAY:                              'DAY';
KW_DEC:                              'DEC';
KW_DECIMAL:                          'DECIMAL';
KW_DECLARE:                          'DECLARE';
KW_DEFAULT:                          'DEFAULT';
KW_DEFINE:                           'DEFINE';
KW_DELETE:                           'DELETE';
KW_DESCRIBE:                         'DESCRIBE';
KW_DISTINCT:                         'DISTINCT';
KW_DOUBLE:                           'DOUBLE';
KW_DROP:                             'DROP';
KW_EACH:                             'EACH';
KW_ELSE:                             'ELSE';
KW_END:                              'END';
KW_EQUALS:                           'EQUALS';
KW_ESCAPE:                           'ESCAPE';
KW_EXCEPT:                           'EXCEPT';
KW_EXECUTE:                          'EXECUTE';
KW_EXISTS:                           'EXISTS';
KW_EXPLAIN:                          'EXPLAIN';
KW_EXTERNAL:                         'EXTERNAL';
KW_EXTRACT:                          'EXTRACT';
KW_FALSE:                            'FALSE';
KW_FLOAT:                            'FLOAT';
KW_FOR:                              'FOR';
KW_FROM:                             'FROM';
KW_FULL:                             'FULL';
KW_FUNCTION:                         'FUNCTION';
KW_GLOBAL:                           'GLOBAL';
KW_GRANT:                            'GRANT';
KW_GROUP:                            'GROUP';
KW_GROUPING:                         'GROUPING';
KW_GROUPS:                           'GROUPS';
KW_HAVING:                           'HAVING';
KW_HOUR:                             'HOUR';
KW_IMPORT:                           'IMPORT';
KW_IN:                               'IN';
KW_INCLUDING:                        'INCLUDING';
KW_INNER:                            'INNER';
KW_INOUT:                            'INOUT';
KW_INSERT:                           'INSERT';
KW_INT:                              'INT';
KW_INTEGER:                          'INTEGER';
KW_INTERSECT:                        'INTERSECT';
KW_INTERVAL:                         'INTERVAL';
KW_INTO:                             'INTO';
KW_IS:                               'IS';
KW_JOIN:                             'JOIN';
KW_LAG:                              'LAG';
KW_LANGUAGE:                         'LANGUAGE';
KW_LATERAL:                          'LATERAL';
KW_LEADING:                          'LEADING';
KW_LEFT:                             'LEFT';
KW_LIKE:                             'LIKE';
KW_LIMIT:                            'LIMIT';
KW_LOCAL:                            'LOCAL';
KW_MATCH:                            'MATCH';
KW_MATCH_RECOGNIZE:                  'MATCH_RECOGNIZE';
KW_MEASURES:                         'MEASURES';
KW_MERGE:                            'MERGE';
KW_METADATA:                         'METADATA';
KW_MINUS:                            'MINUS';
KW_MINUTE:                           'MINUTE';
KW_MODIFIES:                         'MODIFIES';
KW_MODULE:                           'MODULE';
KW_MONTH:                            'MONTH';
KW_MULTISET:                         'MULTISET';
KW_NATURAL:                          'NATURAL';
KW_NEXT:                             'NEXT';
KW_NO:                               'NO';
KW_NONE:                             'NONE';
KW_NOT:                              'NOT';
KW_NULL:                             'NULL';
KW_NUMERIC:                          'NUMERIC';
KW_OF:                               'OF';
KW_OFFSET:                           'OFFSET';
KW_ON:                               'ON';
KW_ONE:                              'ONE';
KW_OR:                               'OR';
KW_ORDER:                            'ORDER';
KW_OUT:                              'OUT';
KW_OUTER:                            'OUTER';
KW_OVER:                             'OVER';
KW_OVERLAY:                          'OVERLAY';
KW_PARTITION:                        'PARTITION';
KW_PATTERN:                          'PATTERN';
KW_PER:                              'PER';
KW_PERCENT:                          'PERCENT';
KW_PERIOD:                           'PERIOD';
KW_POSITION:                         'POSITION';
KW_POWER:                            'POWER';
KW_PRIMARY:                          'PRIMARY';
KW_RANGE:                            'RANGE';
KW_RANK:                             'RANK';
KW_RESET:                            'RESET';
KW_REVOKE:                           'REVOKE';
KW_RIGHT:                            'RIGHT';
KW_RLIKE:                            'RLIKE';
KW_ROLLBACK:                         'ROLLBACK';
KW_ROLLUP:                           'ROLLUP';
KW_ROW:                              'ROW';
KW_ROWS:                             'ROWS';
KW_SECOND:                           'SECOND';
KW_SELECT:                           'SELECT';
KW_SET:                              'SET';
KW_SHOW:                             'SHOW';
KW_SIMILAR:                          'SIMILAR';
KW_SKIP:                             'SKIP';
KW_SMALLINT:                         'SMALLINT';
KW_START:                            'START';
KW_STATIC:                           'STATIC';
KW_SUBSTRING:                        'SUBSTRING';
KW_SUM:                              'SUM';
KW_SYMMETRIC:                        'SYMMETRIC';
KW_SYSTEM:                           'SYSTEM';
KW_SYSTEM_TIME:                      'SYSTEM_TIME';
KW_SYSTEM_USER:                      'SYSTEM_USER';
KW_TABLE:                            'TABLE';
KW_TABLESAMPLE:                      'TABLESAMPLE';
KW_THEN:                             'THEN';
KW_TIME:                             'TIME';
KW_TIMESTAMP:                        'TIMESTAMP';
KW_TIMESTAMP_3:                      'TIMESTAMP(3)';
KW_TIMESTAMP_6:                      'TIMESTAMP(6)';
KW_TIMESTAMP_9:                      'TIMESTAMP(9)';
KW_TINYINT:                          'TINYINT';
KW_TO:                               'TO';
KW_TRAILING:                         'TRAILING';
KW_TRUE:                             'TRUE';
KW_TRUNCATE:                         'TRUNCATE';
KW_UNION:                            'UNION';
KW_UNIQUE:                           'UNIQUE';
KW_UNKNOWN:                          'UNKNOWN';
KW_UNNEST:                           'UNNEST';
KW_UPPER:                            'UPPER';
KW_UPSERT:                           'UPSERT';
KW_USER:                             'USER';
KW_USING:                            'USING';
KW_VALUE:                            'VALUE';
KW_VALUES:                           'VALUES';
KW_VARBINARY:                        'VARBINARY';
KW_VARCHAR:                          'VARCHAR';
KW_WHEN:                             'WHEN';
KW_WHERE:                            'WHERE';
KW_WINDOW:                           'WINDOW';
KW_WITH:                             'WITH';
KW_WITHIN:                           'WITHIN';
KW_WITHOUT:                          'WITHOUT';
KW_YEAR:                             'YEAR';


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