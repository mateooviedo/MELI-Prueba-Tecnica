const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = ["http://localhost:3000"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}

// Enable cors
app.use(cors(corsOptions))

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
