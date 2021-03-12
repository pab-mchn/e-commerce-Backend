const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const verifyUserSchema = new Schema({
    username: String,
    email: String,
    password: String
})

verifyUserSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

verifyUserSchema.methods.validatePassword = function (password) {
    return bcrypt.compare(password, this.password);

}

module.exports = model('verifyusers', verifyUserSchema);