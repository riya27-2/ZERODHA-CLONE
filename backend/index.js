require('dotenv').config();

const express=require('express');
const mongoose=require('mongoose');

const PORT=process.env.PORT || 3002 || 3001;
const URL=process.env.MONGO_URL;
const bodyParser=require('body-parser');
const cors=require('cors');

const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const {HoldingsModel}=require("./model/HoldingsModel");
const {PositionsModel}=require("./model/PositionsModel");
const {OrdersModel}=require("./model/OrdersModel");
const app=express();

// app.use(cors());

app.use(
  cors({
     origin: [
      "https://zerodha-clone-ty69.vercel.app",
      "https://zerodha-clone-ty69-p5bct5gsg-riyapatel7228-3807s-projects.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);

app.use(bodyParser.json());

app.get("/allholdings",async(req,res)=>{
    let allHoldings=await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get("/allpositions",async(req,res)=>{
    let allPositions=await PositionsModel.find({});
    res.json(allPositions);
})

app.post("/newOrder",async(req,res)=>{
let newOrder=new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price:req.body.price,
    mode:req.body.mode
});
    
app.get("/allOrder",async(req,res)=>{
    let allOrder=await OrdersModel.find({});
    res.json(allOrder);
})

newOrder.save();
res.send("order saved");

});

app.listen(PORT,()=>{
    console.log(`app is live on ${PORT}`);
    mongoose.connect(URL);
    console.log("DB IS CONNECT");
})


