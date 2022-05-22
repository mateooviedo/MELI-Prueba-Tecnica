const https = require('https');

// Require Router from express module
const { Router } = require('express');
const router = Router();

const ENDPOINT_MELI_ITEMS = 'https://api.mercadolibre.com/sites/MLA/search?q=';

router.get('/api/items', (req, res) => {
	const query = req.query.q;

	if (!query) {
		res.json({
			message: 'Invalid query param'
		});

		return;
	}

	// Get items
	const url = `${ENDPOINT_MELI_ITEMS}${query}`;
	https
		.get(url, (resGet) => {
			console.log('status code: ', res.statusCode);

			let body;

			resGet.on('data', (data) => {
				body += data;
			});

			resGet.on('end', () => {
				res.json({
					body: JSON.stringify(body)
				});
			});
		})
		.on('error', (err) => {
			console.log(`Error try to get use method ${err}`);
			res.json({
				error: JSON.stringify({
					status: 'error',
					message: 'There was an error, please try later'
				})
			});
		});
});

module.exports = router;
