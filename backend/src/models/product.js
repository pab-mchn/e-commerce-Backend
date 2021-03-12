const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    Name: String,
    Price: Number,
    Code: Number,
    Description: String,
    Category: String

}, {
    timestamps: true //para que mongoose al crear un producto ponga la fecha de creacion y de actualizción 
})

module.exports = model('Product', productSchema);

