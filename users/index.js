import schema from "./schema.js"
import { root } from "./resolver.js"
import routes from "../routes.js"


// Expose the API URL
export const API_URL = routes.apiFlight.user.url

// Expose the schema and the resolver
export const USER = {
    schema: schema,
    rootValue: root,
    graphiql: true,
}