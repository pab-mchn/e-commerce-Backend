const mongoose = require('mongoose');

const URI = 'mongodb://localhost/database';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('db is connected')
})