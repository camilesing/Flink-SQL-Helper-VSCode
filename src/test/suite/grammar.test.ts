import * as assert from 'assert';
import * as fs from 'fs';
import * as path from 'path';
import { FlinkSQLLexer } from '../../FlinkSQLLexer';
import { FlinkSQLParser } from '../../FlinkSQLParser';
import * as antlr from 'antlr4ng';
import { CharStream } from 'antlr4ng';

suite('Flink SQL Grammar Test Suite', () => {
    const projectRoot = path.resolve(__dirname, '../../../../');
    const exampleDir = path.join(projectRoot, 'FlinkSQL-Example');

    function parseSQL(sql: string): { success: boolean; errors: string[] } {
        const errors: string[] = [];
        
        // 创建词法分析器和语法分析器
         const inputStream = CharStream.fromString(sql);
        const lexer = new FlinkSQLLexer(inputStream);
        const tokenStream = new antlr.CommonTokenStream(lexer);
        const parser = new FlinkSQLParser(tokenStream);

        try {
            parser.sqlStatements();
            return { success: true, errors: [] };
        } catch (e) {
            return { success: false, errors: [`Parsing error: ${e}`] };
        }
    }

    // 测试error目录下的所有SQL文件，应该都解析失败
    test('Error SQL files should fail parsing', () => {
        const errorDir = path.join(exampleDir, 'error');
        const files = fs.readdirSync(errorDir).filter(file => file.endsWith('.fql'));

        assert.ok(files.length > 0, 'No error SQL files found');

        files.forEach(file => {
            const filePath = path.join(errorDir, file);
            const sql = fs.readFileSync(filePath, 'utf8');
            const result = parseSQL(sql);

            // 验证error目录下的文件应该解析失败
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
