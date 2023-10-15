
import routes from "../routes.js";
import axios from "axios"
import {putPlane, getAvailablePlane} from "../gps/resolver.js"


const baseURL = routes.apiFlight.gps.url
export async function addPlaneToUser(idUser) {
    availablePlane = getAvailablePlane();
    //call putPlane and send available plane with false availability
    const response = await putPlane(Plate = availablePlane.plate, Model = availablePlane.model,Availability = false,Mechanic_state = availablePlane.mechanic_state)
    
}

