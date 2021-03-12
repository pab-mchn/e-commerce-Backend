const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true, // para limpiar en caso de que en el string se pongan muchos espacios
        unique: true //para que no se repitan usuarios 

    }
}, {
    timestamps: true
})

module.exports = model('User', userSchema);