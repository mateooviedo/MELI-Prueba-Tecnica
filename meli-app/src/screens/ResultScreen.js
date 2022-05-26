import React from 'react';
import { useSearchParams } from 'react-router-dom';

import '../styles/result.scss';
import { Search } from '../components/Search';
import { Categories } from '../components/Categories';
import { ProductList } from '../components/ProductList';
import { useFetch } from '../hooks/useFetch';

const ResultScreen = function () {
	const [searchParams] = useSearchParams();
	const query = searchParams.get('search');
	const url = `http://localhost:3030/api/items?q=${query}`;
	const { data, error, loading } = useFetch(url);

	if (error) {
		console.log(error);
	}

	return (
		<>
			<Search />
			<div className="result">
				{query && loading && <h1>Loading...</h1>}
				{data && (
					<>
						<Categories listCategories={data.categories}/>
						<ProductList items={data.items.slice(0, 4)}/>
					</>
				)}
			</div>
		</>
	);
};

export default ResultScreen;
