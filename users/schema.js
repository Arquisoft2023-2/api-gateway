import { buildSchema } from "graphql"



const schema = buildSchema(`
    type Query {
        getUsers: [User]
        getUser(id: Int): User
        createUser(age: Int, license: String, name: String): Response
        assignPlane(id: Int, fk_plate : String): Boolean
        deleteUser(id: Int): Boolean 

    }
    
    type User {
        id: Int
        fk_plate: String
        age: Int
        license: String
        name: String 
    }
    type Response {
        id: Int
        message: String
    }
`)


export default schema