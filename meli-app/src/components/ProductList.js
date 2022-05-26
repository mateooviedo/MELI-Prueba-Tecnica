import React from 'react';
import PropTypes from 'prop-types';

import { Product } from './Product';

export const ProductList = function ({ items }) {
	return (
		<>
			{items.map((item) => (
				<Product key={item.id} {...item} />
			))}
		</>
	);
};

ProductList.propTypes = {
	items: PropTypes.array.isRequired
}
