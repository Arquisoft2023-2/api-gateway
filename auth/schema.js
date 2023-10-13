import { buildSchema } from "graphql"



const schema = buildSchema(`
    type Query {
        login(id: Int, password: String): String   
        register(id: Int, password: String): String   
    }
    
`)
export default schema