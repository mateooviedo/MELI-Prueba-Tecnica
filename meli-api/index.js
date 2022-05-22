const express = require('express');
const app = express();

// Set port
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Routes
app.use(require('./routes/index'));

// Init API Rest
app.listen(app.get('port'), () => {
	console.log(`Server listening on port ${app.get('port')}`);
});
