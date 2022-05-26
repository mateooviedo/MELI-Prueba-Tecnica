import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { convertMoney } from '../utils/convertMoney';

import '../styles/product.scss';
import SHIPPING_IMG from '../resources/assets/ic_shipping.png';

export const Product = function ({
	id,
	title,
	price,
	shipping,
	currency_id,
	seller_address,
	secure_thumbnail: pictureSrc
}) {
	return (
		<>
			<Link className="product" to="/detail">
				<img src={pictureSrc} alt="Producto Src" className="product__image" />
				<div className="product-elements">
					<div className="product-elements-header">
						<div className="elements-header-price">
							<span className="product-elements-header__price">{convertMoney(price, currency_id)} </span>

							{shipping && <img src={SHIPPING_IMG} alt="shipping" />}
						</div>
						<span className="product-elements-header__state">
							{seller_address.state.name}
						</span>
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
	price: PropTypes.number.isRequired,
	shipping: PropTypes.object,
	currency_id: PropTypes.string.isRequired,
	seller_address: PropTypes.object.isRequired,
	secure_thumbnail: PropTypes.string.isRequired
};
