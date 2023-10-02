import { buildSchema } from "graphql"



const schema = buildSchema(`
    type Query {
        getNotifications: [Notification]
        createNotification(plate : String, message: String): Boolean
        updateNotification(id: String, plate : String, message: String): Boolean
        deleteNotification(id: String): Boolean
    }
    
    type Notification {
        _id: String
        plate: String
        message: String
    }
    
`)

export default schema