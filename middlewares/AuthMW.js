import axios from 'axios';
import routes from '../routes.js';
//import addPlaneToUser from '../controllers/PlaneController.js';

const authMiddleware = async (req, res, next) => {
    const BASE_URL = routes.apiFlight.auth.url
    try {
        const tkn = req.headers.tokenapi // assuming the token is sent in the Authorization header as "Bearer <token>"
        //console.log("[RESPONSE]", BASE_URL+"/validate?tokenApi="+tkn)
        const response = await axios.post(BASE_URL+"/validate?tokenApi="+tkn);
        if (response.data) {
            //addPlaneToUser(response.data.id_user)
            next(); // token is valid, continue to the next middleware/controller
        } else {
            res.status(401).json({ message: 'Invalid token' }); // token is invalid, send 401 Unauthorized response
        }
    } catch (error) {
        //console.error(error);
        res.status(500).json({ message: 'Permiso denegado, hace falta el atributo tokenapi en el header' }); // something went wrong, send 500 Internal Server Error response
    }
};

export default authMiddleware;
