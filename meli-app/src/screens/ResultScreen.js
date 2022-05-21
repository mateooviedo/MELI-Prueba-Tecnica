import React from 'react';

import '../styles/result.scss';
import { Search } from '../components/Search';
import { Categories } from '../components/Categories';
import { ProductList } from '../components/ProductList';

const ResultScreen = function () {
	return (
		<>
			<Search />
			<div className="result">
				<Categories />
				<ProductList />
			</div>
		</>
	);
};

export default ResultScreen;
