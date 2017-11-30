import * as chai from 'chai';

const expect = chai.expect;

import { Client } from 'elasticsearch';

const client = new Client({
	host: '',
	log: ['error', 'trace']
});

describe('Test', () => {
	it('nested', () => {
		expect(client).not.to.be.null;
	});
});

