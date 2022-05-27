import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { MemoryRouter, Router } from 'react-router-dom';

import { AppRouter } from '../../routers/AppRouter';

describe('Routers', () => {
	let history;

	beforeEach(() => {
		history = createMemoryHistory();
	});

	test('Full app rendering/navigating', () => {
		render(<AppRouter />, { wrapper: MemoryRouter });

		expect(
			screen.getByPlaceholderText(/Nunca dejes de buscar/i)
		).toBeInTheDocument();
	});

	test('Loading a not found screen', () => {
		history.push('/Not/Found/Page');
		render(
			<Router location={history.location} navigator={history}>
				<AppRouter />
			</Router>
		);

		expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
	});

	test('Loading result screen', async () => {
		history.push('/items?q=iphone');
		render(
			<Router location={history.location} navigator={history}>
				<AppRouter />
			</Router>
		);

		expect(screen.getByTestId('result')).toBeInTheDocument();
	});

	test('Loading detail screen', async () => {
		history.push('/items/MLA931455240');
		render(
			<Router location={history.location} navigator={history}>
				<AppRouter />
			</Router>
		);

		expect(screen.getByTestId('detail')).toBeInTheDocument();
	});
});
