require('dotenv').config();

const express=require('express');
const mongoose=require('mongoose');

const PORT=process.env.PORT || 3002;
const URL=process.env.MONGO_URL;
const bodyParser=require('body-parser');
const cors=require('cors');
const {HoldingsModel}=require("./model/HoldingsModel");
const {PositionsModel}=require("./model/PositionsModel");
const {OrdersModel}=require("./model/OrdersModel");
const app=express();

app.use(cors());
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
    console.log("app is live");
    mongoose.connect(URL);
    console.log("DB IS CONNECT");
})
