//src/middlewares/auth.js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.models.js';

export const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        console.log(token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        const user = await User.findOne({ _id: decoded._id});
        if (!user) {
            throw new Error();
        }
        req.token = token;
        req.user = user;

        next();
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' });
        console.log(e);
    }
}