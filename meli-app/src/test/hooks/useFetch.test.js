import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import { useFetch } from '../../hooks/useFetch';

const URL_TEST = 'http://localhost:3030/api/items?q=iphone';
global.fetch = require('jest-fetch-mock');

function TestComponent() {
	const { data, loading } = useFetch(URL_TEST);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	return <>{data && data.site_id}</>;
}

describe('useFecth custom hook', () => {
	beforeEach(() => fetch.resetMocks());

	test('Get data', async () => {
		fetch.mockResponse(JSON.stringify({ site_id: 'MLA' }));
		await act(() => {
			render(<TestComponent />);
		});

		expect(screen.getByText(/MLA/i)).toBeInTheDocument();
	});
});
