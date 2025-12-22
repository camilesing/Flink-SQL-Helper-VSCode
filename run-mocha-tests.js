const Mocha = require('mocha');
const path = require('path');

// Create a Mocha instance
const mocha = new Mocha({
  ui: 'tdd',
  color: true
});

// Define the test directory
const testDir = path.resolve(__dirname, 'out/test/suite');

// Add the test files
mocha.addFile(path.join(testDir, 'grammar.test.js'));

// Run the tests
mocha.run((failures) => {
  process.exitCode = failures ? 1 : 0;
});
