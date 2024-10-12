// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register new user
exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({ name, email, password: hashedPassword });
        await user.save();

        res.redirect('/login');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Login user
exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        res.redirect('/dashboard');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
