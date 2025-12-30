import * as assert from 'assert';
import * as fs from 'fs';
import * as path from 'path';
import { FlinkSQLLexer } from '../../FlinkSQLLexer';
import { FlinkSQLParser } from '../../FlinkSQLParser';
import * as antlr from 'antlr4ng';
import {
    CharStream,
    CommonTokenStream,
    Parser,
    Token,
    ANTLRErrorListener,
    RecognitionException,
    Recognizer,
    ATNSimulator,
    ATNConfigSet,
    BitSet,
    DFA,
    ParseTreeWalker
} from 'antlr4ng';

suite('Flink SQL Grammar Test Suite', () => {
    const projectRoot = path.resolve(__dirname, '../../../../');
    const exampleDir = path.join(projectRoot, 'FlinkSQL-Example');

    function parseSQL(sql: string): { success: boolean; errors: string[] } {
        const errors: string[] = [];

        const inputStream = CharStream.fromString(sql);
        const lexer = new FlinkSQLLexer(inputStream);
        const tokenStream = new antlr.CommonTokenStream(lexer);
        const parser = new FlinkSQLParser(tokenStream);

        var parseSuccess = true;
        parser.removeErrorListeners();
        parser.addErrorListener({
            syntaxError: (recognizer: Recognizer<ATNSimulator>, offendingSymbol: Token | null, line: number, startPosition: number, msg: string, e: RecognitionException | null): void => {
                parseSuccess = false;
            },
            reportAmbiguity: function (recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, exact: boolean, ambigAlts: BitSet | undefined, configs: ATNConfigSet): void {
                // throw new Error('Function not implemented.');
            },
            reportAttemptingFullContext: function (recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, conflictingAlts: BitSet | undefined, configs: ATNConfigSet): void {
                //  throw new Error('Function not implemented.');
            },
            reportContextSensitivity: function (recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, prediction: number, configs: ATNConfigSet): void {
                // throw new Error('Function not implemented.');
            }
        })

        parser.compileParseTreePattern
        parser.sqlStatements();
        return { success: parseSuccess, errors: [] };
    }


    test('Error SQL files should fail parsing', () => {
        const errorDir = path.join(exampleDir, 'error');
        const files = fs.readdirSync(errorDir).filter(file => file.endsWith('.fql'));

        assert.ok(files.length > 0, 'No error SQL files found');

        files.forEach(file => {
            const filePath = path.join(errorDir, file);
            const sql = fs.readFileSync(filePath, 'utf8');
            const result = parseSQL(sql);

            assert.strictEqual(
                result.success,
                false,
                `Error file ${file} should fail parsing, but succeeded`
            );
        });
    });

    test('Correct SQL files should pass parsing', () => {
        const correctDirs = ['correct_common', 'correct_hive', 'correct_plus'];

        correctDirs.forEach(dir => {
            const correctDir = path.join(exampleDir, dir);
            if (!fs.existsSync(correctDir)) {
                return;
            }

            const files = fs.readdirSync(correctDir).filter(file => file.endsWith('.fql'));
            assert.ok(files.length > 0, `No correct SQL files found in ${dir}`);

            files.forEach(file => {
                const filePath = path.join(correctDir, file);
                const sql = fs.readFileSync(filePath, 'utf8');
                const result = parseSQL(sql);

                assert.strictEqual(
                    result.success,
                    true,
                    `Correct file ${file} should pass parsing, but failed with errors: ${result.errors.join('; ')}`
                );
            });
        });
    });
});
