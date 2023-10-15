import { buildSchema } from "graphql"



const schema = buildSchema(`
    type Query {
        getUsers: [User]
        getUser(id: Int): User
        createUser(fk_plate: String, age: Int, license: String, name: String): Boolean
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
`)


export default schema