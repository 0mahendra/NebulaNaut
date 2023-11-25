const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./Routes/userRoutes");
dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Api is Running");
});

app.use("/api/user",userRoutes);

const  PORT  = process.env.PORT || 5000;
app.listen(PORT,console.log(`Server-Started on port  ${PORT}`));
