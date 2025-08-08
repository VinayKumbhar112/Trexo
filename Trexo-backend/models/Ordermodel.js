const {model}=require("mongoose");

const { Orderschema } = require("../schema/Orderschema");

const Ordermodel=new model("order", Orderschema);


module.exports={Ordermodel};