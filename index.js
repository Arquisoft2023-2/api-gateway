import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

import { USER } from "./users/index.js";
import routes from "./routes.js";
import {graphqlHTTP} from "express-graphql"
import { NOTIFICATION } from "./notification/index.js";
import { FlIGHT } from "./gps/index.js";
import { MSG } from "./msg/index.js";
import { AUTH } from "./auth/index.js";
//const { default: axios } = require('axios');
import AuthMW from "./middlewares/AuthMW.js";
import { addPlaneToUser } from "./utils/planeResolver.js";
const INVENTORY_SERVICE_URL = "http://localhost:8080"


const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

 
const PORT = process.env.PORT || 1000;

app.put("/test/:id", async (req, res) => {
  console.log("sirve PUT")
  try {
      const { id } = req.params;
      const response = addPlaneToUser(id);
      res.json(response.data);
  } catch (error) {
      res.status(500).json({mesagge: "Hubo un problema al modificar el usuario"});
  }
});
app.use(routes.apiFlight.auth.route, graphqlHTTP(AUTH))
app.use(routes.apiFlight.user.route, graphqlHTTP(USER))

//app.use(AuthMW);

app.use(routes.apiFlight.notification.route, graphqlHTTP(NOTIFICATION))
app.use(routes.apiFlight.gps.route, graphqlHTTP(FlIGHT))
app.use(routes.apiFlight.msg.route, graphqlHTTP(MSG))

//create an put route that used addPlanetoUser




app.listen(PORT, () => console.log(`Now browse to localhost:${PORT}/[endpoint_name]`))

/*
app.get('/', (req, res) => {
  res.send('Node.js API Gateway is up and running! Easy right???');
});

app.listen(PORT, () => {
  console.log(`API Gateway is running on port ${PORT}`);
});

app.get('/user', async (req, res) => {
    
    try {
        //console.log("Trying to get in", `${INVENTORY_SERVICE_URL}/user`)
        const response = await axios.get(`${INVENTORY_SERVICE_URL}/user`);
        res.json(response.data);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error al consultar los usuarios' });
    }
});

app.get('/user/:userId', async (req, res) => {
    try {
      const { userId } = req.params;
      const response = await axios.get(`${INVENTORY_SERVICE_URL}/user/${userId}`);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({mesagge: "Hubo un problema al encontrar el usuario"});
    }
});

app.post('/user', async (req, res) => {
    try {
      const body  = req.body;
      const response = await axios.post(`${INVENTORY_SERVICE_URL}/user`, body);
      res.status(201).json(response.data);
    } catch (error) {
      res.status(500).json({mesagge: "Hubo un problema al crear el usuario"});
    }
});

app.put('/user/:userId', async (req, res) => {
    try {
      const { userId } = req.params;
      const body  = req.body;
      const response = await axios.put(`${INVENTORY_SERVICE_URL}/user/${userId}`, body);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({mesagge: "Hubo un problema al modificar el usuario"});
    }
});


app.delete('/user/:userId', async (req, res) => {
    try {
      const { userId } = req.params;
      const response = await axios.delete(`${INVENTORY_SERVICE_URL}/user/${userId}`);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({mesagge: "Hubo un problema al eliminar el usuario"});
    }
});


*/