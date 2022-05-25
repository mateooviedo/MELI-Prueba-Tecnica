const fs = require('fs');
const mapping = require('../../utils/mapping.js');

function getDataJsonFile(nameFile) {
	const rawdata = fs.readFileSync(`${__dirname}/${nameFile}`);
	
	return JSON.parse(rawdata);
}

describe('Mapping Utils', () => {
	test('mapping items result', () => {
		const dataItems = getDataJsonFile('items.json');
		const mappingItems = mapping.mappingData(dataItems);

		expect(mappingItems).toHaveProperty('categories');
		expect(mappingItems).toHaveProperty('items');
	});

	test('mapping item result', () => {
		const dataItem = getDataJsonFile('item.json');
		const mappingItem = mapping.mappingDataItem(dataItem);

		expect(mappingItem).toHaveProperty('id', 'MLA931172875');
		expect(mappingItem).toHaveProperty('price',  {
			currency: 'ARS',
			amount: 151772
		},);
	});
});
