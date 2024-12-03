const express=require("express");
const router = express.Router();
const User = require("../models/user.model");

router.post("/register", async(req,res)=>{
    try{

    const newUser= new User({
        userName: req.body.name,
        email: req.body.email, 
        password: req.body.password,
    });
    if (await User.findOne({email:req.body.email})){
        return res.status(602).send("Same email alreay exists");
    }
    const user= await newUser.save();
    console.log(newUser);
    res.status(201).json(user);
    }catch(err){
    res.status(400).send("Error:"+err);
    }
    res.end();
});

router.get("/login",async(req,res)=>{
try{
    const user=await User.findOne({
        email:req.body.email,
        password:req.body.password,
    });
    res.status(200).json(user);
} catch(err){
  res.status(400).send("Error:"+err)  ;
}
});

module.exports = router;

