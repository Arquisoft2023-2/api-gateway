import { buildSchema } from "graphql"



const schema = buildSchema(`
    type Query {
        getFlights: [Flight]
        createFlight(FK_Plate: String ,latitude: Float , longitude: Float  ,altitude: Float , Fuel_percentage: Float): Boolean
        getPlane: [Plane]
        createPlane(Plate: String, Model: String, Availability: Boolean , Mechanic_state: Boolean): Boolean
    }
    
    type Flight {
        _id: String
        FK_Plate: String
        latitude: Float
        longitude: Float 
        altitude: Float
        Fuel_percentage: Float
    }
    type Plane {
        _id: String
        Plate: String
        Model: String
        Availability: Boolean 
        Mechanic_state: Boolean
    }
    
`)
export default schema