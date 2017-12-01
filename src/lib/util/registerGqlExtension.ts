import * as fs from 'fs';
import * as graphql from 'graphql';

/**
 * Allows node to require .gql files.
 */
(function registerSQLExtension() {
	require.extensions['.gql'] = function registerExtension(module: any, filename: string) {
		const body = fs.readFileSync(filename, 'utf8');
		module.exports = graphql.parse(new graphql.Source(body, filename));
	};
}());
