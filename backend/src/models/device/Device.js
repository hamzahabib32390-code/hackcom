import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Device name is mandatory"],
      trim: true,
    },
    UUID: {
      unique: true,
      type: String,
      required: [true, "IP address is mandatory"],
    },
    totalMemory: {
      type: Number,
      default: 0,
    },
    Process: {
      type: [
        {
          pid: {
            type: Number,
            unique: true,
          },
          processName: {
            type: String,
            default: "Unknow",
          },
          windowTitle: {
            type: String,
            default: null,
          },
          useMemory: {
            type: Number,
            default: null,
          },
        },
      ],
      default: null,
    },
  },
  {
    timestamps: true, // Automatically creates 'createdAt' and 'updatedAt' fields
  },
);
const _Acount=mongoose.Schema({
  name:{
    type:String,
    default:""
  },
  phone:{
    type:String,
    default:""
  },
  pass:{
    type:String,
    default:""
  }
})




const cmd = mongoose.Schema({
  Device: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Device",
    default: null,
  },
  cmd: {
    type: String,
    enum: ["Draw","Idle","Restart", "Upgrade", "InterTime", "PClose","PFinsh"],
    defaul: "Idle",
  },
  Args: {
    type: String,
    default: null,
  },
});

// Create and export the Mongoose Model
export const Device = mongoose.model("Device", deviceSchema);
export const CMD = mongoose.model("CMD", cmd);
export const Acount=mongoose.model("Acount",_Acount);