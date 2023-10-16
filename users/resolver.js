import { API_URL } from "./index.js"
import axios from "axios"



export const root = {
    getUsers: (arg) => {
        return axios.get(`${API_URL}`)
            .then(response => {
                return response.data
            })
    },
    getUser: (arg) => {
        return axios.get(`${API_URL}/${arg.id}`)
                .then(response => {
                    return response.data
                })
                .catch((error) =>{
                    
                })
    },
    createUser: (arg) => {
        return axios.post(`${API_URL}`, {age: arg.age, license: arg.license, name: arg.name})
                .then(response => {
                    return response.data
                })
                .catch((error) =>{
                    return error.response.data
                })
    },
    assignPlane: (arg) => {
        console.log(arg)
        return axios.put(`${API_URL}/${arg.id}`, {fk_plate: arg.fk_plate})
                .then(response => {
                    return {message: "Realizado con éxito la asignación de avión"}
                })
                .catch((error) =>{
                    return {message: "Ocurrió un error", error: error}
                })
    },
    deleteUser: (arg) => {
        return axios.delete(`${API_URL}/${arg.id}`)
                .then(response => {
                    return true
                })
                .catch((error) =>{
                    return false
                })
    },
    
}