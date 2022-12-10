const user = require('../services/user.service');
const { User } = require('../models');
const { createToken } = require('../auth/auth');

const insertUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;

    const userExist = await User.findOne({ where: { email } });

    if (userExist) {
        return res.status(409).json({ message: 'User already registered' });
    }

   await user.insertUser(displayName, email, password, image);

   const token = createToken(email);

   res.status(201).json({ token });
};

module.exports = {
     insertUser, 
    };
