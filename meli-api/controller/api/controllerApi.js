const https = require('https');
const mapping = require('../../utils/mapping.js');

const URL_GET_ITEMS = 'https://api.mercadolibre.com/sites/MLA/search?q=';
const URL_GET_ITEM_BY_ID = 'https://api.mercadolibre.com/items/';

function getResponse(url, cb) {
	https
		.get(url, (resGet) => {
			console.log('status code: ', resGet.statusCode);

			if (!resGet.statusCode === 200) {
				console.log('Something happend when we try using get https method');
				return;
			}

			let body = '';

			resGet.on('data', (data) => {
				body += data;
			});

			resGet.on('end', () => {
				cb(JSON.parse(body));
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
}

function getItems(req, res) {
	const query = req.query.q;

	if (!query) {
		res.json({
			message: 'Invalid query param'
		});

		return;
	}

	// Get items
	const url = `${URL_GET_ITEMS}${query}`;
	getResponse(url, (data) => {
		const dataMapped = mapping.mappingData(data);
		return res.json(dataMapped);
	});
}

function getItemById(req, res) {
	const id = req.params.id;

	// Get item
	const url = `${URL_GET_ITEM_BY_ID}${id}`;
	const urlItemDescription = `${url}/description`;
	getResponse(url, (data) => {
		getResponse(urlItemDescription, (dataDescription) => {
			const dataMapped = mapping.mappingDataItem(data, dataDescription);
			return res.json(dataMapped);
		});
	});
}

exports.getItems = getItems;
exports.getItemById = getItemById;
