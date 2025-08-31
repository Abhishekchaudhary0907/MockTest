import mongoose from "mongoose";

const mockTestSchema = mongoose.Schema(
  {
    // _id
    title: {
      type: String,
      required:true,
      trim:true
    },
    totalQuestions: {
      type: Number,
      required: true,
      min:1
    },

    questionIds: {
      type: [mongoose.Schema.Types.ObjectId],
      ref:'Question',
      required:true
    },
    price: {
      type: Number, // in paise
      default:0
    },

    targetExam: {
      type: [String],
      validate: {
        validator: function (v) {
          return Array.isArray(v) && v.length > 0;
        },
        message: "At least one type is selected",
      },
      required: true,
    },
    duration: {
      type: Number, // in ms
      required: true,
      min:1
    },
    marks: {
      type: Number,
      required: true,
      min:0
    },
    maxMarks: {
      type: Number, // calculate it on server side
      required: true,
      min:1
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required:true
    },
    isPublished: {
      type: Boolean,
      default:false
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    randomizeQuestions: {
      type: Boolean,
      default:false
    },
  },
  {
    timestamps: true,
  }
);

mockTestSchema.index({ startTime: 1 });
mockTestSchema.index({ createdBy: 1 });
mockTestSchema.index({ endTime: 1 });
mockTestSchema.index({ isPublished: 1 });
const MockTest = mongoose.Model("MockTest", mockTestSchema);

export { MockTest };
