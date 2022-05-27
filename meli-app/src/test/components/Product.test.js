import React from 'react';
import { act } from 'react-dom/test-utils';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { AppRouter } from '../../routers/AppRouter';
import resultApi from '../resources/results.json';

global.fetch = require('jest-fetch-mock');

describe('Product Component', () => {
	beforeEach(() => fetch.resetMocks());
	test('Should render Product component on items route', async () => {
		fetch.mockResponse(JSON.stringify(resultApi));

		const history = createMemoryHistory();
		history.push('/items?q=iphone');
		await act(() => {
			render(
				<Router location={history.location} navigator={history}>
					<AppRouter />
				</Router>
			);
		});

		const products = screen.getAllByRole('heading', { name: /Apple iPhone/i });
		expect(products.length).toBe(4);
	});
});
