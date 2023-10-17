import { addPlaneToUser } from "../utils/planeResolver.js"
import { API_URL } from "./index.js"
import axios from "axios"
import { root as rootUser } from "../users/resolver.js"


export const root = {

    login: (arg) => {
        return axios.post(`${API_URL}/login`, {userId: arg.id, password: arg.password})
            .then((response) => {
                console.log(response.data)
                addPlaneToUser(response.data.Item2)
                return response.data.Item1
            })
            .catch((error) =>{
                return null
            })
    },
    
    register: (arg) => {
        return rootUser.createUser({age: arg.age, license: arg.license, name: arg.name}).then(({id, message}) =>
            {
            return axios.post(`${API_URL}/register`, {userId: id, password: arg.password})
                .then(response => {
                    return {message: "Bienvenido", id: id}
                }) 
                .catch((error) =>{
                    return {message: "Error al intentar registrarse", id: id}
                })
            
            }
        ).catch((error) =>{
            return {message: "Error", id: null}
        })
        /*
        
        */
    },
    
}