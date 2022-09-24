const mongoose=require('mongoose')

const deliveryAdressSchema=new mongoose.Schema({
    locality:{
        type: String,
        required:true
    },
    houseno:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required:true
    }

})

module.exports = mongoose.model("DeliveryAdress",deliveryAdressSchema);
