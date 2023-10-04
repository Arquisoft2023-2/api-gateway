import { buildSchema } from "graphql"



const schema = buildSchema(`
    type Query {
        getUsers: [User]
        getUser(id: Int): User
        createUser(fk_plane : Int, age: Int, license: String, name: String): Boolean
        updateUser(id: Int, fk_plane : Int, age: Int, license: String, name: String): Boolean
        deleteUser(id: Int): Boolean

        

    }
    
    type User {
        id: Int
        fk_plane: Int
        age: Int
        license: String
        name: String 
    }
`)


export default schema