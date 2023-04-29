grammar FlinkSQL;

statementList: statement ('SEMICOLON' statement)* 'SEMICOLON'?;
statement: createTableStatement | insertStatement | selectStatement;

createTableStatement: 'CREATE TABLE' tableName '(' columnDefinition (',' columnDefinition)* ')' ('WITH' options+=tableOption (',' options+=tableOption)*)?;

insertStatement: 'INSERT INTO' tableName (columnName (',' columnName)*)? 'VALUES' '(' expression (',' expression)* ')';

selectStatement: 'SELECT' selectItem (',' selectItem)* 'FROM' fromItem (',' fromItem)* ('WHERE' expression)?;
selectItem: expression | columnName '=' expression   ;

fromItem: tableName ('AS' alias)? | '(' selectStatement ')' 'AS' alias;

columnDefinition: columnName dataType (columnConstraint)*;
columnConstraint: 'PRIMARY KEY' | 'NOT NULL' | 'UNIQUE' | 'DEFAULT' expression;

dataType: 'INT' | 'BIGINT' | 'FLOAT' | 'DOUBLE' | 'STRING';

tableOption: 'connector' '=' connectorName | 'format' '=' formatName;
connectorName: 'kafka' | 'jdbc';
formatName: 'csv' | 'json';

expression: numericLiteral | stringLiteral | identifier | expression '+' expression ('+' expression expression) | expression '-' expression ('-' expression expression) | expression '*' expression ('*' expression expression) | expression '/' expression ('/' expression expression) | '(' expression ')';
numericLiteral: INT_LITERAL | FLOAT_LITERAL | DOUBLE_LITERAL;
stringLiteral: STRING_LITERAL;
columnName: IDENTIFIER;
tableName: IDENTIFIER;
identifier: IDENTIFIER;
alias: IDENTIFIER;

SEMICOLON: ';';
COMMA: ',';

fragment DIGIT: [0-9];
fragment LETTER: [a-zA-Z_];
 
INT_LITERAL: DIGIT+;
FLOAT_LITERAL: DIGIT+ '.' DIGIT+;
DOUBLE_LITERAL: DIGIT+ ('.' DIGIT+)? 'E' [+\-]? DIGIT+;
STRING_LITERAL: '\'' ( ~[\\\n\r\f'])* '\'';
IDENTIFIER: LETTER (LETTER | DIGIT)*;
