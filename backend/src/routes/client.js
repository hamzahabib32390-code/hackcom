import app from "express"
import  {InComingDeviceData,incomingCmdToHost,CmdTargetDevice,
    getAllDevice
}  from "../controllers/deviceController.js";
const route=app.Router();

route.post("/device/postData",InComingDeviceData);
route.get("/device/targetCMD",CmdTargetDevice);
route.post("/host/getCMD",incomingCmdToHost);
route.get("/host/getDevice",getAllDevice);


export default route;