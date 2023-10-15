
import {root as rootUser} from "../users/resolver.js";
import {root as rootGps} from "../gps/resolver.js";

export async function addPlaneToUser(id){
    try{
    const responsePlane = rootGps.getAvailablePlane();
    const responsePutPlane = rootGps.putPlane({Plate: responsePlane.Plate , Model: responsePlane.Model , Availability: false  ,Mechanic_state: responsePlane.Mechanic_state});
    const responseUser = rootUser.updateUser({id: id, fk_plane: responsePlane.Plate});
    } catch (e) {
        console.log(e);
    }
}