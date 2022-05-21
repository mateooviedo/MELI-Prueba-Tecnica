import React from 'react';

import '../styles/result.scss';
import { Search } from '../components/Search';
import { ProductList } from '../components/ProductList';

const ResultScreen = function () {
	return (
		<>
			<Search />
			<div className="result">
				<ul className="result-categories">
					<li className="result-categories__item">
						<span>Electronica, Audio y video</span>
					</li>
					<li className="result-categories__item">
						<span>iPod</span>
					</li>
					<li className="result-categories__item">
						<span>Reproductores</span>
					</li>
					<li className="result-categories__item">
						<span>iPod touch</span>
					</li>
					<li className="result-categories__item">
						<span>32 GB</span>
					</li>
				</ul>
				<ProductList />
			</div>
		</>
	);
};

export default ResultScreen;
