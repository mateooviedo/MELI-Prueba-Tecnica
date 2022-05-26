import React from 'react';
import PropTypes from 'prop-types';

import '../styles/categories.scss';

export const Categories = function ({ listCategories }) {
	return (
		<ul className="categories">
			{listCategories && listCategories.slice(0, 5).map((cateogory) => (
				<li key={cateogory} className="categories__item">
					<span>{cateogory}</span>
				</li>
			))}
		</ul>
	);
};

Categories.propTypes = {
	listCategories: PropTypes.array
};
