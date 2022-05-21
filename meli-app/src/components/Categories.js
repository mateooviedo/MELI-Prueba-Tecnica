import React from 'react';

import '../styles/categories.scss';

export const Categories = function () {
	return (
		<ul className="categories">
			<li className="categories__item">
				<span>Electronica, Audio y video</span>
			</li>
			<li className="categories__item">
				<span>iPod</span>
			</li>
			<li className="categories__item">
				<span>Reproductores</span>
			</li>
			<li className="categories__item">
				<span>iPod touch</span>
			</li>
			<li className="categories__item">
				<span>32 GB</span>
			</li>
		</ul>
	);
};
