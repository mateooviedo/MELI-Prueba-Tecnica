export const convertMoney = function (price, currency_id) {
	const format = Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: currency_id
	});

	return format.format(price);
};
