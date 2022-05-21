import React from 'react';

// styles
import '../styles/search.scss';

// images
import LOGO from '../resources/assets/Logo_ML.png';
import SEARCH_ICON from '../resources/assets/ic_Search.png';

export const Search = function () {
	return (
		<div className="search">
			<img src={LOGO} alt="logo" className="search__logo" />
			<input
				type="text"
				placeholder="Nunca dejes de buscar"
				className="search__input"
			/>
			<div className="search-icon">
				<img src={SEARCH_ICON} alt="search icon" />
			</div>
		</div>
	);
};
