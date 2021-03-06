// Imports
const express = require('express');
const cors = require('cors');
const app = express();

// Enable cors
app.use(cors())

// Set port
app.set('port', process.env.PORT || 3030);
app.set('json spaces', 2);

//Routes
app.use(require('./routes/api/routesApi.js'));

// Init API Rest
const server = app.listen(app.get('port'), () => {
	console.log(`Server listening on port ${app.get('port')}`);
});

module.exports = server;
