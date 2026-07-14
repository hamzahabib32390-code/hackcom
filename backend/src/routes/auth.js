import app from "express"
import  {EnterAcount,createAcount}  from "../controllers/authController.js";
const route=app.Router();

route.post("/host/Login",EnterAcount);
route.get("/host/Sign",createAcount);

export default route;