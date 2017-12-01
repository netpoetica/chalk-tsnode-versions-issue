import * as chai from 'chai';

const expect = chai.expect;

import { client } from '../src/app';

describe('Test', () => {
	it('nested', () => {
		expect(client).not.to.be.null;
	});
});

