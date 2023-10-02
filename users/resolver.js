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
        return axios.post(`${API_URL}`, {fk_plane: arg.fk_plate, age: arg.age, license: arg.license, name: arg.name})
                .then(response => {
                    return true
                })
                .catch((error) =>{
                    return false
                })
    },
    updateUser: (arg) => {
        return axios.put(`${API_URL}/${arg.id}`, {fk_plane: arg.fk_plate, age: arg.age, license: arg.license, name: arg.name})
                .then(response => {
                    return true
                })
                .catch((error) =>{
                    return false
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