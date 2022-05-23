// Require Router from express module
const { Router } = require('express');
const router = Router();

const api = require('../views/api/index.js');

router.get('/api/items', api.getItems);
router.get('/api/items/:id', api.getItemById)

module.exports = router;
