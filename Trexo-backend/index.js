require("dotenv").config();
const express=require("express");
const Holdingmodel=require("./models/Holdingmodel");
const { default: mongoose } = require('mongoose');
const { Positionmodel } = require("./models/Positionmodel");
const app=express();
const PORT=process.env.PORT || 8080;
const uri=process.env.MONGO_URL;
const cors=require("cors");
const bodyparser=require("body-parser");
const { Ordermodel } = require("./models/Ordermodel");
const cookieParser=require("cookie-parser");
const authRoute=require("./Routes/AuthRoute");
app.use(cors());
app.use(bodyparser.json());

app.use(express.json());
app.use(cookieParser());

app.use("/", authRoute);

 
app.post("/neworder", async (req, res) => {
  try {
    const newOrder = new Ordermodel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.json(newOrder);
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ error: "Failed to save order." }); // ✅ Send error response
  }
})
app.post("/newholdings", async (req, res) => {
  try {      console.log("POST /newholdings body:", req.body);
    const newholding = new Holdingmodel({

      name: req.body.name,
      qty: req.body.qty,
      avg: req.body.avg,
      price: req.body.price,
      net: req.body.net,
      day: req.body.day
    });

    await newholding.save();
    res.json(newholding);  // ✅ send the saved document back

  } catch (err) {
    console.error("Error saving to DB:", err);  // Log the actual error
    res.status(500).json({ error: err.message });
  }
});

app.get("/allholdings", async (req, res) => {
  try {
    const allholding = await Holdingmodel.find({});
    res.json(allholding);                           
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/allpositions", async (req, res) => {
  try {
    const allposition = await Positionmodel.find({});
    res.json(allposition);                           
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// app.get("/addholding",async(req,res)=>{
// const tempdata=[
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
// ];

// tempdata.forEach((item)=>{
// let newmodel=new Holdingmodel({
//   name: item.name,
//     qty: item.qty,
//     avg:item.avg,
//     price: item.price,
//     net: item.net,
//     day:  item.day
// });
// newmodel.save()
// });
// res.send("Done")
// });

// app.get("/addpositions",async(req,res)=>{

//   const tempposition=[
//      {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
//   ]

//   tempposition.forEach((item)=>{
// let newmodel=new Positionmodel({
//  product: item.product,
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     isLoss: item.isloss,
// });
// newmodel.save();
//   });
//   res.send("done");

// });




app.listen(PORT,async()=>{
  try {
    await mongoose.connect(uri);
    console.log("DB connected");
    console.log(`Server started on port ${PORT}`);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
  }
});

