function mappigDataItem(item) {
	const { id, title, price, currency_id, thumbnail, condition, shipping, sold_quantity, pictures } = item;

	// Description not found
	return {
		id,
		title,
		price: {
			currency: currency_id,
			amount: price
		},
		picture: (pictures && pictures[0].secure_url) || thumbnail,
		condition,
		free_shipping: shipping.free_shipping,
		sold_quantity
	}
}

function mappingData(data) {
	const { results, available_filters } = data;

	const categories = available_filters.map(filter => {
		if (filter.name === 'categories') {
			return filter.values.map((value) => value.name);
		}
	});

	const items = results.map(item => mappigDataItem(item));

	return {
		categories,
		items
	}
}

exports.mappingData = mappingData;
exports.mappingDataItem = mappigDataItem;
