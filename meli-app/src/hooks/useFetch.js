import { useEffect, useState } from 'react';

export const useFetch = (url) => {
	const [data, setData] = useState();
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch(url, {
			method: 'GET',
			headers: {
				'access-control-allow-origin': '*',
				'Content-type': 'application/json; charset=UTF-8'
			}
		})
			.then((response) => response.json())
			.then(setData)
			.catch(setError)
			.finally(() => setLoading(false));
	}, [url]);

	return { data, error, loading };
};
