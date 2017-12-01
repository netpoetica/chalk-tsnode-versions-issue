import * as fs from 'fs';
/**
 * Allows node to require .sql files.
 */
(function registerSQLExtension() {
	require.extensions['.sql'] = function registerExtension(module: any, filename: string) {
		// eslint-disable-next-line no-sync
		// eslint-disable-next-line no-param-reassign
		module.exports = fs.readFileSync(filename, 'utf8');
	};
}());
