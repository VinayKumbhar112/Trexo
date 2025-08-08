const {Schema}=require("mongoose");

const Holdingschema=new Schema({
  name: String,
    qty: Number,
    avg:{
      type:Number,
      default:"375.6"
    },
    price: Number,
    net: {
      type:String,
      default:"+32.5%"
    },
    day:  {
      type:String,
      default:"+19.34%"
    }
});

module.exports={Holdingschema};