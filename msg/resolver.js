import { API_URL } from "./index.js"
import axios from "axios"



export const root = {
    getMsgs: (arg) => {
        return axios.get(`${API_URL}`)
            .then(response => {
                return response.data
            })
    },
    getMsg: (arg) => {
        return axios.get(`${API_URL}/${arg.id}`)
            .then(response => {
                return response.data
            })
    },
    createMsg: (arg) => {
        return axios.post(`${API_URL}`, {text: arg.text , date: arg.date, id_trans: 0, id_rec: 0})
            .then(response => {
                return true
            })
            .catch((error) =>{
                return false
            })
    },
    updateMsg: (arg) => {
        return axios.put(`${API_URL}/${arg.id}`, {text: arg.text , date: arg.date, id_trans: 0, id_rec: 0})
            .then(response => {
                return true
            })
            .catch((error) =>{
                return false
            })
    },
    
    /*deleteMsg: (arg) => {
        return axios.delete(`${API_URL}/${arg.id}`)
            .then(response => {
                return true
            })
            .catch((error) =>{
                return false
            })
    },
    */
}