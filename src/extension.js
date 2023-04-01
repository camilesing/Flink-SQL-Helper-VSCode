'use strict';

const vscode = require('vscode');
const sqlFormatter = require('sql-formatter-plus');

const config = {
	indent: ' '.repeat(2),
	language: 'fql',
	uppercase: true,
	linesBetweenQueries: 2
}

const format = (text) => {
	return sqlFormatter.format(text, config);
}

module.exports.activate = () => {
	vscode.languages.registerDocumentRangeFormattingEditProvider('flink-sql', {
		provideDocumentRangeFormattingEdits: (document, range, options) => [
			vscode.TextEdit.replace(range, format(document.getText(range)))
		]
	});
	vscode.languages.registerDocumentRangeFormattingEditProvider('fql', {
		provideDocumentRangeFormattingEdits: (document, range, options) => [
			vscode.TextEdit.replace(range, format(document.getText(range)))
		]
	});
}