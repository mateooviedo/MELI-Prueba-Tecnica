import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

// styles
import '../styles/search.scss';

// images
import LOGO from '../resources/assets/Logo_ML.png';
import SEARCH_ICON from '../resources/assets/ic_Search.png';

export const Search = function () {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const [valueInput, valueInputState] = useState('');
	const paramValue = searchParams.get('search')
		? decodeURI(searchParams.get('search'))
		: '';

	const handleOnChangeInput = function (event) {
		valueInputState(event.target.value);
	};

	const handleKeyPress = function (event) {
		if (event.code === 'Enter') {
			navigate(`/items?search=${encodeURI(valueInput)}`);
		}
	};

	useEffect(() => {
		valueInputState(paramValue);
	}, [paramValue]);

	return (
		<div className="search">
			<img src={LOGO} alt="logo" className="search__logo" />
			<input
				type="text"
				placeholder="Nunca dejes de buscar"
				className="search__input"
				onKeyPress={handleKeyPress}
				onChange={handleOnChangeInput}
				defaultValue={paramValue}
			/>
			<Link className="search-icon" to={`/items?search=${encodeURI(valueInput)}`}>
				<img src={SEARCH_ICON} alt="search icon" />
			</Link>
		</div>
	);
};
