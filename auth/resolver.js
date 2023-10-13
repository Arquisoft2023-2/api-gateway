import { API_URL } from "./index.js"
import axios from "axios"



export const root = {

    login: (arg) => {
        return axios.post(`${API_URL}/login`, {userId: arg.id, password: arg.password})
            .then(response => {
                return response.data
            })
            .catch((error) =>{
                return false
            })
    },
    
    register: (arg) => {
        console.log(`${API_URL}/register`)
        return axios.post(`${API_URL}/register`, {userId: arg.id, password: arg.password})
            .then(response => {
                return "Bienvenido"
            }) 
            .catch((error) =>{
                return "Hubo un problema al intentar registrarse"
            })
    },
    
}