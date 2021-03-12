const userCtrl = {}

const User = require('../models/user');

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users)

}
userCtrl.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new User({ username: username })
    await newUser.save();
    res.json('User created')
}

userCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.send('user deleted')
}

module.exports = userCtrl;