const { User } = require('../models');
const { createToken } = require('../auth/auth');

const login = async (req, res) => {
    const { email, password } = req.body;
    const userExist = await User.findOne({ where: { email } });

    if (!userExist) {
        return res.status(400).json({ message: 'Invalid fields' });
    }

    if (userExist.dataValues.password !== password) {
        return res.status(400).json({ message: 'Invalid fields' });
    }

    const token = createToken(email);

    res.status(200).json({ token });
};

module.exports = {
    login,
};