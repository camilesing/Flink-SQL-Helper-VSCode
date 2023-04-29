# Flink-SQL-VsCode

This extension provides Flink SQL support for VSCode. It also provides some basic code snippets for operations such as creating a table, altering a table, or renaming columns.


## 1.Features

Enables syntax highlighting, complete keywords, and code format for Flink SQL(v1.16.0), including user-defined functions.

![](images/flink-sql-vscode-snippets.gif)

snippets keywords:
- create
- select
- insert

## 1.1 How use
Enable the extension on your file, either name the file with a extension:
- SQL
- FQL
  
Or press F1, type 'Change Language Mode', and then choose FlinkSQL.

### 1.1.1 Format

Select your FlinkSQL code and press ```Alt+Shift+f```.

### 1.1.2 Error grammer check
> The feature during experiment.

open your `setting.json`, add `"flink-sql-grammar-check.enable": true`。

## 1.2 Color theme recommend
~~~json
{
    "workbench.colorTheme": "Default Dark+",
    "editor.tokenColorCustomizations": {
        "textMateRules": [
            {
                "scope": "keyword.control.flink",
                "settings": {
                    "foreground": "#559DD6"
                }
            },
            {
                "scope": "storage.type.flink",
                "settings": {
                    "foreground": "#C27432"
                }
            },
            {
                "scope": "support.type.flink",
                "settings": {
                    "foreground": "#C27432"
                }
            },
            {
                "scope": "constant.language.flink",
                "settings": {
                    "foreground": "#C27432"
                }
            },
            {
                "scope": "keyword.operator.arithmetic.flink",
                "settings": {
                    "foreground": "#F4BE6B"
                }
            },
            {
                "scope": "keyword.operator.relational.flink",
                "settings": {
                    "foreground": "#F0F400"
                }
            },
            {
                "scope": "keyword.operator.logical.flink",
                "settings": {
                    "foreground": "#C27432"
                }
            },      
            {
                "scope": "support.function.udf.complex.flink",
                "settings": {
                    "foreground": "#F2BC69"
                }
            },
            {
                "scope": "support.function.udf.mathematic.flink",
                "settings": {
                    "foreground": "#F2BC69"
                }
            },
            {
                "scope": "support.function.udf.type-cast.flink",
                "settings": {
                    "foreground": "#F2BC69"
                }
            },
            {
                "scope": "support.function.udf.date.flink",
                "settings": {
                    "foreground": "#F2BC69"
                }
            },
            {
                "scope": "support.function.udf.conditional.flink",
                "settings": {
                    "foreground": "#F2BC69"
                }
            },
            {
                "scope": "support.function.udf.string.flink",
                "settings": {
                    "foreground": "#F2BC69"
                }
            },
            {
                "scope": "support.function.udf.json.flink",
                "settings": {
                    "foreground": "#F2BC69"
                }
            },
            {
                "scope": "support.function.udf.value.construct.flink",
                "settings": {
                    "foreground": "#F2BC69"
                }
            },
            {
                "scope": "support.function.udf.value.access.flink",
                "settings": {
                    "foreground": "#F2BC69"
                }
            },
            {
                "scope": "support.function.udaf.flink",
                "settings": {
                    "foreground": "#F2BC69"
                }
            },
            {
                "scope": "support.function.udf.aggregate.flink",
                "settings": {
                    "foreground": "#F2BC69"
                }
            },
            {
                "scope": "support.function.udf.time.flink",
                "settings": {
                    "foreground": "#F2BC69"
                }
            },
            {
                "scope": "support.function.udf.column.flink",
                "settings": {
                    "foreground": "#F2BC69"
                }
            },
            {
                "scope": "support.function.time.attributes.flink",
                "settings": {
                    "foreground": "#F2BC69"
                }
            },
        ],
    }
}
~~~

## 2. Dev Grammar
- Edit `FlinkSQL.g4`
- Run `npm run antlr4ts` generate for ts code then move to src directory.
- Copy ./gen ts file to src directory

## 3. Build

### 3.1 Prerequisites
- npm
- vsce

### 3.2 Build
- Run ```npm install --dependencies``` to install dependencies.
- Run ```vsce package``` to build extension.

