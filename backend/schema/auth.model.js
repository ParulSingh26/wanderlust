const mongoose = require("mongoose");

const authSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true
    },
    phone:{
        type:String,
        default:"",
        trim:true,
        maxlength:10
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    terms_condition:{
        type:Boolean,
        default:false
    },
    avatar:{
        type:String,
        default:"https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
    },
    address:{
        type:String,
        default:""
    },
    country:{
        type:String,
        default:""
    }
  },
  { timestamps: true }
);

const authModel = mongoose.model("signup", authSchema);
module.exports = authModel;
