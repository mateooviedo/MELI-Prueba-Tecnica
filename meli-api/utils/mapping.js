/*
 * @param: { item: object }
 * @param: { dataDescription: object }
 */
function mappingDataItem(item, dataDescription = {}) {
	const {
		id,
		title,
		price,
		currency_id,
		thumbnail,
		condition,
		shipping,
		sold_quantity,
		pictures
	} = item;

	return {
		id,
		title,
		price: {
			currency: currency_id,
			amount: price
		},
		picture: pictures && pictures[0] ? pictures[0].secure_url : thumbnail,
		condition,
		free_shipping: shipping.free_shipping,
		sold_quantity,
		description: dataDescription ? dataDescription.plain_text : ''
	};
}

/*
 * @param: { data: object }
 */
function mappingData(data) {
	const { results, filters } = data;

	const categories = filters
		.find((filter) => filter.id === 'category')
		?.values.map((value) => value.name);

	const items = results.map((item) => mappingDataItem(item));

	return {
		categories,
		items
	};
}

exports.mappingData = mappingData;
exports.mappingDataItem = mappingDataItem;
