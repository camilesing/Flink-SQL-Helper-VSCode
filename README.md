# flink-sql

This extension provides Flink SQL support for VSCode. It also provides some basic code snippets for operations such as creating a table, altering a table, or renaming columns.


## Features

Enables syntax highlighting and formatting for Flink SQL, including user-defined functions.


## How use
Enable the extension on your file, either name the file with a extension:
- SQL
- FQL

Or press F1, type 'Change Language Mode', and then choose FlinkSQL.

# TODO List
## UDF 
- Support `Conditional Functions`：`CASE value WHEN value1_1 [, value1_2]* THEN RESULT1 (WHEN value2_1 [, value2_2 ]* THEN result_2)* (ELSE result_z) END`
- Support `Aggregate Function`
- Support `Time Interval and Point Unit Specifiers`
- Support `Column Functions`