const {model}=require("mongoose");

const { positionschema } = require("../schema/Positionschema");
const Positionmodel=new model("positon",positionschema);


module.exports={Positionmodel};