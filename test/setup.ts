// import '../src/lib/util/registerSqlExtension';
// import '../src/lib/util/registerGqlExtension';
// import '../src/initLocalize';
require('jsdom-global')();

console.log(`Testing Environment \nNODE_ENV: ${process.env.NODE_ENV}`);

function noop() {
	return null;
}

// Prevent mocha from interpreting CSS @import files
// http://stackoverflow.com/a/37184425
require.extensions['.css'] = noop;
require.extensions['.scss'] = noop;
require.extensions['.sass'] = noop;
require.extensions['.gif'] = noop;

const jsdom = require('jsdom').jsdom;
// const exposedProperties = ['window', 'document'];

// Dummy interfaces to fix dummy TypeScript
interface Global {
	[key: string]: any;
}

interface Window {
	[key: string]: any;
}

document = jsdom('');
window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
	if (typeof (global as Global)[property] === 'undefined') {
		// exposedProperties.push(property);
		(global as Global)[property] = (document.defaultView as Window)[property];
	}
});
