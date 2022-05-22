import React from 'react';

import '../styles/detail.scss';
import { Search } from '../components/Search';
import { Categories } from '../components/Categories';

import PRODUCTS from '../resources/db/products.json';
const item = PRODUCTS.results[0];

function textSell(condition, sold_quantity) {
	return `${condition === 'new' ? 'Nuevo' : 'Usado'} - ${sold_quantity} vendidos`;
}

const DetailScreen = function ({ id }) {
	return (
		<>
			<Search />

			<div className="detail">
				<Categories />
				<div className="detail-container">
					<div className="detail-container-product">
						<div className="detail-container-product__image-container">
							<img
								src={item.pictures[0].secure_url}
								alt="product"
								className="detail-container-product__image"
							/>
						</div>
						<div className="detail-container-product__buy">
							<span className="detail-container-product__sell">
								{textSell(item.condition, item.sold_quantity)}
							</span>
							<h3 className="detail-container-product__title">{item.title}</h3>
							<span className="detail-container-product__price">{item.price}</span>
							<input
								type="button"
								className="detail-container-product__buyButton"
								value="Comprar"
							/>
						</div>
					</div>
					<h1 className="detail-container__detailTitle">Detalle del producto</h1>
					<p className="detail-container__description">
						There are many variations of passages of Lorem Ipsum available, but the majority
						have suffered alteration in some form, by injected humour, or randomised words
						which don't look even slightly believable. If you are going to use a passage of
						Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
						middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
						predefined chunks as necessary, making this the first true generator on the
						Internet. It uses a dictionary of over 200 Latin words, combined with a handful
						of model sentence structures, to generate Lorem Ipsum which looks reasonable.
						The generated Lorem Ipsum is therefore always free from repetition, injected
						humour, or non-characteristic words etc.
					</p>
				</div>
			</div>
		</>
	);
};

export default DetailScreen;
