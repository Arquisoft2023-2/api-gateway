import { API_URL } from "./index.js"
import axios from "axios"



export const root = {
    getFlights: (arg) => {
        return axios.get(`${API_URL}/Flight`)
            .then(response => {
                return response.data
            })
    },
    createFlight: (arg) => {
        return axios.post(`${API_URL}/Flight`, {FK_plate: arg.FK_plate ,latitude: arg.latitude , longitude: arg.longitude  ,altitude: arg.altitude ,Fuel_percentage: arg.Fuel_percentage})
            .then(response => {
                return true
            })
            .catch((error) =>{
                return false
            })
    },
    getAvailablePlane: (arg) => {
        console.log("getAvailable")
        return axios.get(`${API_URL}/Plane/Available`)
            .then(response => {
                console.log("getAvailable", response.data)
                return response.data
            })
    },
    putPlane:(arg) => {
        return axios.put(`${API_URL}/Plane/${arg.Plate}`, {Plate: arg.Plate , Model: arg.Model , Availability: arg.Availability  ,Mechanic_state: arg.Mechanic_state})
            .then(response => {
                return true
            })
            .catch((error) =>{
                return false
            })
    },
    getPlane: (arg) => {
        return axios.get(`${API_URL}/Plane`)
            .then(response => {
                return response.data
            })
    },
    createPlane: (arg) => {
        return axios.post(`${API_URL}/Plane`, {Plate: arg.Plate , Model: arg.Model , Availability: arg.Availability  ,Mechanic_state: arg.Mechanic_state})
            .then(response => {
                return true
            })
            .catch((error) =>{
                return false
            })
    },
    
}