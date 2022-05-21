import React from 'react';

import PRODUCTS from '../resources/db/products.json';
import { Product } from './Product';

export const ProductList = function () {
	return (
		<>
			{PRODUCTS.results.map((product) => (
				<Product key={product.id} {...product} />
			))}
		</>
	);
};
