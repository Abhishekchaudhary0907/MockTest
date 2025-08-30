import mongoose from "mongoose";

const mockTestSchema = mongoose.Schema(
  {
    // _id
    title: {
      type: String,
    },
    totalQuestions: {
      type: String,
      required: true,
    },

    questionIds: {
      type: [mongoose.Schema.Types.ObjectId],
    },
    price: {
      type: String, // in paise
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
      type: String, // it should be in minute
      required: true,
    },
    marks: {
      type: Number,
      required: true,
    },
    maxMarks: {
      type: Number, // calculate it on server side
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    isPublished: {
      type: Boolean,
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
    },
  },
  {
    timestamps: true,
  }
);

const MockTest = mongoose.Model(mockTestSchema, "MockTest");

export { MockTest };
