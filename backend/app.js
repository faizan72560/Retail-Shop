const express=require("express")
const bodyparser=require("body-parser")
const BodyParser = require("body-parser")
const address=require('./Model')
const app=express()
require("dotenv").config({ path: "./config.env" });
const port=process.env.PORT



app.use(BodyParser.urlencoded({ extended: true }));
app.use(express.json())
require("./conn")

app.listen(port,()=>{
    console.log(`server started on ${port} successfully`)

})

app.post('/addaddress',async(req,res)=>{
    try{

        const {locality,houseno,city,state,phone}=req.body
        console.log(req.body)
        
        const Adress=await address.create({
            locality,
            houseno,
            city,
            state,
            phone
        })
        
        res.json({
            Success:"true",
            Adress
            
        })
    }catch(err){
        res.json({
            Success:"false",
            err
        })
    }

})
