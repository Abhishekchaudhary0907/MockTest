import mongoose from 'mongoose';

const testBundleSchema = mongoose.Schema({
    //_id
    title:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        trim:true,
    },
    testId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'MockTest',
        required:true
    },
    price:{
        type:Number,// in paise
        default:0,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',

    },
    isActive:{
        type:Boolean,
        default:false
    },

},{
    timestamps:true
});

testBundleSchema.index({createdBy:1});

const TestBundle = mongoose.model('TestBundle',testBundleSchema);

export {TestBundle};