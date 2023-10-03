import schema from "./schema.js"
import { root } from "./resolver.js"
import routes from "../routes.js"


// Expose the API URL
export const API_URL = routes.apiFlight.msg.url

// Expose the schema and the resolver
export const MSG = {
    schema: schema,
    rootValue: root,
    graphiql: true,
}