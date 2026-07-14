import { Acount } from '../models/device/Device.js';


// 1. GET: Fetch all devices registered in MongoDB
export const createAcount = async (req, res) => {
    try {
         const body =req.body;
         console.log(body);
         if(body.devKey == "devKey")
         {
            return res.status(400).json({success: false,error:"Incorrect Developer Key"});
         }
        const exist=await Acount.create({
            name:body.name,
            phone:body.phone,
            pass:body.pass
        })
    
        if(exist)
        {
            return res.status(200).json({ClientKey:exist._id});
        }
       
       
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};
export const EnterAcount = async (req, res) => {
    try {
    console.log(body);
        const exist=await Acount.findOne({
            pass:req.query.pass
        })
        if(exist)
        {
            return res.status(400).json({ success: false, error: "Please Create Acount :" });
           
        }
       
        return res.status(200).json({ClientKey:exist._id});
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};