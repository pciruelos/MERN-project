const userCtrl = {};

const Usersmodels = require('../models/users');

userCtrl.getUser = async (req,res) => {
    const users = await Usersmodels.find();
    res.json(users);
};

userCtrl.createUser = async (req,res) =>{
    const { username } = req.body;
    const newUser = new Usersmodels({username: username});
    await newUser.save();
    console.log(newUser);
    res.send('yep');


};

userCtrl.deleteUser =  async (req,res) => {
    await Usersmodels.findByIdAndDelete(req.params.id);
    res.send('delete users');
};


module.exports = userCtrl;
