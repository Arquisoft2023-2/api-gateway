
import {root as rootUser} from "../users/resolver.js";
import {root as rootGps} from "../gps/resolver.js";

export async function addPlaneToUser(id){
    try{
    const responsePlane = await rootGps.getAvailablePlane()
    console.log("[responsePlane]: ", responsePlane)
    const responsePutPlane = await rootGps.putPlane({Plate: responsePlane.Plate , Model: responsePlane.Model , Availability: false  ,Mechanic_state: responsePlane.Mechanic_state});
    console.log("[responsePutPlane]: ", responsePutPlane, responsePlane)
    const responseUser = await rootUser.assignPlane({id: id, fk_plate: responsePlane.Plate});
    console.log("[responseUser]: ", responseUser)
    } catch (e) {
        console.log(e.data);
    }
}