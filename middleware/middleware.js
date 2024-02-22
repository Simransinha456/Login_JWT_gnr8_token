import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser());

function verifyToken(req, res, next) {
    try {
        const token = req.cookies.token;
        if (!token) {
            throw new Error({error: 'No token provided'});
        }
        // You would implement your token verification logic here
        if (token === 'validtoken') {
            next(); 
        } else {
            throw new Error('Unauthorized: Invalid token');
        }
    } catch (error) {
        return res.status(401).send(error.message);
    }
}

export default verifyToken;