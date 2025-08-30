import mongoose from 'mongoose';

const testAttemptedSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    //need to add
})

const TestAttempt = mongoose.model("TestAttempt",testAttemptedSchema);

export {TestAttempt};