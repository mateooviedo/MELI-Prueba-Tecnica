import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import '../styles/detail.scss';
import { Search } from '../components/Search';
import { convertMoney } from '../utils/convertMoney';
import { useFetch } from '../hooks/useFetch';

function textSell(condition, sold_quantity) {
	return `${condition === 'new' ? 'Nuevo' : 'Usado'} - ${sold_quantity} vendidos`;
}

const DetailScreen = function () {
	const { id } = useParams();
	const url = `http://localhost:3030/api/items/${id}`;
	const { data, error, loading } = useFetch(url);

	if (error) {
		console.log(error);
	}

	return (
		<>
			<Search />
			{loading && <h1>Loading...</h1>}
			{data && (
				<>
					<div className="detail">
						<div className="detail-container">
							<div className="detail-container-product">
								<div className="detail-container-product__image-container">
									<img
										src={data.picture}
										alt="product"
										className="detail-container-product__image"
									/>
								</div>
								<div className="detail-container-product__buy">
									<span className="detail-container-product__sell">
										{textSell(data.condition, data.sold_quantity)}
									</span>
									<h3 className="detail-container-product__title">{data.title}</h3>
									<span className="detail-container-product__price">
										{convertMoney(data.price.amount, data.price.currency)}
									</span>
									<input
										type="button"
										className="detail-container-product__buyButton"
										value="Comprar"
									/>
								</div>
							</div>
							<h1 className="detail-container__detailTitle">Detalle del producto</h1>
							<p className="detail-container__description">{data.description}</p>
						</div>
					</div>
					<Helmet>
						<title>{data.title} | MELI</title>
						<meta
							name="description"
							content="Prueba tecnica de MELI pagina de producto seleccionado"
						/>
					</Helmet>
				</>
			)}
		</>
	);
};

export default DetailScreen;
