# 1 Prerequisites

- npm
- vsce

# 2 Build

- Run ```npm install --dependencies``` to install dependencies.
- Run ```vsce package``` to build extension.

# 3 If you want add or update grammar rule

- Edit `FlinkSQL.g4`
- Run `npm run antlr4ts` generate for ts code then move to src directory.
- Copy ./gen ts file to src directory
- If you have some test data, you can use `npm run unit-test` to run tests.

# 4. If you want to add keywod and highlight
- Add to `flink.tmLanguage.json`.