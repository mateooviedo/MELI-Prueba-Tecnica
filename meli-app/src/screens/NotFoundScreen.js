import React from 'react';
import { Helmet } from 'react-helmet';

const NotFoundScreen = function () {
	return (
		<>
			<h1>404 Not Found</h1>
			<Helmet>
				<title>Not Found - MELI</title>
				<meta name="description" content="Pagina no encontrada en MELI" />
			</Helmet>
		</>
	);
};

export default NotFoundScreen;
