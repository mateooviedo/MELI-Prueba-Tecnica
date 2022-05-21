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
					<img src={item.pictures[0].secure_url} alt="product" />
					<h1>Descripcion del producto</h1>
					<p>
						Graba videos 4K y captura retratos espectaculares y paisajes increíbles con el
						sistema de dos cámaras. Toma grandes fotos con poca luz gracias al modo Noche.
						Disfruta colores reales en las fotos, videos y juegos con la pantalla Liquid
						Retina de 6.1 pulgadas (3). Aprovecha un rendimiento sin precedentes en los
						juegos, la realidad aumentada y la fotografía con el chip A13 Bionic. Haz mucho
						más sin necesidad de volver a cargar el teléfono gracias a su batería de larga
						duración (2). Y no te preocupes si se moja, el iPhone 11 tiene una resistencia
						al agua de hasta 30 minutos a una profundidad máxima de 2 metros (1). Avisos
						Legales (1) El iPhone 11 es resistente a las salpicaduras, al agua y al polvo, y
						fue probado en condiciones de laboratorio controladas, con una clasificación
						IP68 según la norma IEC 60529 (hasta 30 minutos a una profundidad máxima de 2
						metros). La resistencia a las salpicaduras, al agua y al polvo no es una
						condición permanente, y podría disminuir como consecuencia del uso normal. No
						intentes cargar un iPhone mojado; consulta el manual del usuario para ver las
						instrucciones de limpieza y secado. La garantía no cubre daños producidos por
						líquidos. (2) La duración de la batería varía según el uso y la configuración.
						(3) La pantalla tiene las esquinas redondeadas. Si se mide en forma de
						rectángulo, la pantalla del iPhone 11 tiene 6.06 pulgadas en diagonal. El área
						real de visualización es menor. (4) Los cargadores inalámbricos Qi se venden por
						separado.
					</p>
					<span>{textSell(item.condition, item.sold_quantity)}</span>
					<h3>{item.title}</h3>
					<span>{item.price}</span>
					<button>Comprar</button>
				</div>
			</div>
		</>
	);
};

export default DetailScreen;
