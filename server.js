const express=require("express");
const mongoose=require("mongoose");
const cors= require("cors");

const app=express();
const PORT=5001;

app.use(express.json());
app.use(cors());

mongoose.connect(
   "mongodb+srv://niveditaacharya66:admin@cluster0.zkc66.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {}
)
.then(()=>{
    console.log("Connect to the database");
});

//Routes
const userRoute=require("./routes/user.route");
const todoRoute=require("./routes/todo.route");
app.use("/user",userRoute);
app.use("/todo",todoRoute);


app.get("/",(req,res)=>{
    res.send("Hello world");
    res.end();
});

app.listen(PORT,()=>{
    console.log(`Server is running in port http://localhost:${PORT}`);
});