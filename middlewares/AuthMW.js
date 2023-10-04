import axios from 'axios';

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; // assuming the token is sent in the Authorization header as "Bearer <token>"
        const response = await axios.post('http://auth-microservice/check-jwt', { token });
        if (response.data.valid) {
            next(); // token is valid, continue to the next middleware/controller
        } else {
            res.status(401).json({ message: 'Invalid token' }); // token is invalid, send 401 Unauthorized response
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' }); // something went wrong, send 500 Internal Server Error response
    }
};

export default authMiddleware;
