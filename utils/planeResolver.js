
import routes from "../routes.js";
import axios from "axios"


const baseURL = routes.apiFlight.gps.url
export function addPlaneToUser(idUser){

}

export function getAvailablePlane(){
    axios.get(baseURL+"/Plane/Available").then(
        
    )
}