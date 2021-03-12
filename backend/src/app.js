const express = require('express');
const app = express();

//settings
app.set('port', 3000);

//middlewares
app.use(express.json());

//routes
app.use('/api/users', require('./routes/users'));
app.use('/api/products', require('./routes/products'));
app.use(require('./controllers/authController'));


module.exports = app;