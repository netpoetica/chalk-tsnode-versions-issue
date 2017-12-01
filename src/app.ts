import * as http from 'http';
import { Client } from 'elasticsearch';

const client = new Client({
	host: '',
	log: ['error', 'trace']
});

const server = http.createServer();

export default client;

