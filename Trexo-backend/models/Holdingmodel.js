
const { model } = require("mongoose");
const { Holdingschema } = require("../schema/Holdingschema");

module.exports = model("holding", Holdingschema); 
