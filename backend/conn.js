const mongoose=require("mongoose")

mongoose.connect(process.env.DB,{useNewUrlParser: true,useUnifiedTopology:true}).then(()=>{
    console.log('connection successfull')
}).catch((err)=>{
    console.log(err)
})