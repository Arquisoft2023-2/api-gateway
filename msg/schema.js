import { buildSchema } from "graphql"



const schema = buildSchema(`
    type Query {
        getMsgs: [Msg]
        getMsg(id: String): Msg
        createMsg(text: String, date: String): Boolean
        updateMsg(id: String, text: String, date: String): Boolean
    }
    
    type Msg {
        id: String
        text: String
        date: String
    }
    
`)
export default schema