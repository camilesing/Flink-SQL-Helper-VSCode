import * as path from 'path';
import Mocha from 'mocha';
import glob from 'glob';

// Create the mocha test instance
const mocha = new Mocha({
    ui: 'tdd',
    color: true,
    timeout: 10000 // Increased timeout to 10 seconds for parsing tests
});

const testsRoot = path.resolve(__dirname, '../test/suite');

// Find all test files - we'll only run grammar.test.ts for now
glob('grammar.test.js', { cwd: testsRoot }, (err: Error | null, files: string[]) => {
    if (err) {
        console.error('Error finding test files:', err);
        process.exit(1);
    }

    if (files.length === 0) {
        console.error('No test files found');
        process.exit(1);
    }

    // Add files to the test suite
    files.forEach((f: string) => {
        console.log(`Adding test file: ${f}`);
        mocha.addFile(path.resolve(testsRoot, f));
    });

    try {
        // Run the mocha test
        mocha.run((failures: number) => {
            if (failures > 0) {
                console.error(`${failures} tests failed.`);
                process.exit(1);
            } else {
                console.log('All tests passed!');
                process.exit(0);
            }
        });
    } catch (err: any) {
        console.error('Error running tests:', err);
        process.exit(1);
    }
});