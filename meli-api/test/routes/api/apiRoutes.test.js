const server = require('../../../index.js');
const supertest = require('supertest');
const request = supertest(server);

describe('Routes for API', () => {
	let endpoint;
	afterEach(() => server.close());

	test('Get items route', async () => {
		const query = encodeURI('Iphone xs');
		endpoint = `/api/items?q=${query}`;

		try {
			const res = await request.get(endpoint);
			expect(res.statusCode).toBe(200);
			expect(res.type).toBe('application/json');
			expect(res.body).toHaveProperty('items');
			expect(res.body).toHaveProperty('categories');
		} catch (error) {
			throw error;
		}
	});

	test('Get item route', async () => {
		const id = 'MLA1121276327';
		endpoint = `/api/items/${id}`;

		try {
			const res = await request.get(endpoint);
			expect(res.statusCode).toBe(200);
			expect(res.type).toBe('application/json');
			expect(res.body.id).toBe(id);
		} catch (error) {
			throw error;
		}
	});
});
