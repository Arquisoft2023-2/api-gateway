import { buildSchema } from "graphql"



const schema = buildSchema(`
    type Query {
        login(id: Int, password: String): String   
        register(age: Int, license: String, name: String, password: String): Response
    }
    type Response {
        message: String   
        id: Int
    }
    
`)
export default schema