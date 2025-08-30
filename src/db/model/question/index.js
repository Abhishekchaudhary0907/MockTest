import mongoose from "mongoose";

const optionSchema = mongoose.Schema({
  text:{
    type:String,
    required:true,
    trim:true
  }
}); 
const questionSchema = mongoose.Schema(
  {
    //_id
    subjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    subTopic: {
      type: String,
    },
    type: {
      type: String,
      enum: ["mcq", "true-false", "fill-blank", "subjective"],
      default: "mcq",
      required: true,
    },
    questionText: {
      type: String,
      required: true,
      trim: true
    },
    options: {
      // 4 otions , all will be string
      type:[optionSchema],
      validate:{
         validator: function(v){
          if(this.type==='mcq'){
            return Array.isArray(v) && v.length === 4;
          }
          return true;
         },
         message:"MCQ questions must have excatly 4 options"
      },
    },
    correctOptions: {
      type:[Number],
      validate:{
        validator: function(v){
          if(this.type === 'mcq' || this.type === 'true-false'){
            return Array.isArray(v) && v.length > 0;
          }
          return true;
        },
        message:"atleast one correct options should be"
      }
    },
    explanation: {
      type: String,
    },
    marks: {
      type: Number,
      required: true,
    },
    tags: {
      // esay medium hard
      type:String,
      required:true,
      enum:['easy','medium','hard']
    },
    answer: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);


const Question = mongoose.model("Question", questionSchema);

export { Question };
