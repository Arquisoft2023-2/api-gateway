import { API_URL } from "./index.js"
import axios from "axios"



export const root = {
    getNotifications: (arg) => {
        return axios.get(`${API_URL}`)
            .then(response => {
                return response.data
            })
    },
    createNotification: (arg) => {
        return axios.post(`${API_URL}`, {plate: arg.plate, message: arg.message})
                .then(response => {
                    return true
                })
                .catch((error) =>{
                    return false
                })
    },
    updateNotification: (arg) => {
        return axios.put(`${API_URL}/${arg.id}`, {plate: arg.plate, message: arg.message})
                .then(response => {
                    return true
                })
                .catch((error) =>{
                    return false
                })
    },
    deleteNotification: (arg) => {
        return axios.delete(`${API_URL}/${arg.id}`)
                .then(response => {
                    return true
                })
                .catch((error) =>{
                    return false
                })
    },
    
}