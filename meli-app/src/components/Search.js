import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// styles
import '../styles/search.scss';

// images
import LOGO from '../resources/assets/Logo_ML.png';
import SEARCH_ICON from '../resources/assets/ic_Search.png';

export const Search = function () {
	const navigate = useNavigate();

	const handleKeyPress = function (event) {
		if (event.code === 'Enter') {
			navigate('result');
		}
	};

	return (
		<div className="search">
			<img src={LOGO} alt="logo" className="search__logo" />
			<input
				type="text"
				placeholder="Nunca dejes de buscar"
				className="search__input"
				onKeyPress={handleKeyPress}
			/>
			<Link className="search-icon" to="/result">
				<img src={SEARCH_ICON} alt="search icon" />
			</Link>
		</div>
	);
};
