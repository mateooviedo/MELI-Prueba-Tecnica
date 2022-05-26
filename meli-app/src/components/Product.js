import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { convertMoney } from '../utils/convertMoney';

import '../styles/product.scss';
import SHIPPING_IMG from '../resources/assets/ic_shipping.png';

export const Product = function ({ id, title, price, picture, free_shipping }) {
	return (
		<>
			<Link className="product" to={`/items/${id}`}>
				<img src={picture} alt="Producto Src" className="product__image" />
				<div className="product-elements">
					<div className="product-elements-header">
						<div className="elements-header-price">
							<span className="product-elements-header__price">
								{convertMoney(price.amount, price.currency)}{' '}
							</span>
							{free_shipping && <img src={SHIPPING_IMG} alt="shipping" />}
						</div>
					</div>
					<h2 className="product-elements__title">{title}</h2>
				</div>
			</Link>
		</>
	);
};

Product.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	price: PropTypes.object.isRequired,
	picture: PropTypes.string.isRequired,
	free_shipping: PropTypes.bool.isRequired
};
