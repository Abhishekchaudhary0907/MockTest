import mongoose from 'mongoose';

const paymentSchema = mongoose.Schema({
    //_id
    userId:{
        type:mongoose.Schema.Types.ObjectId,

    },
    purchaseId:{
        type:mongoose.Schema.Types.ObjectId,
    },
    provider:{
        type:String
    },
    amount:{
        type:Number
    }
})