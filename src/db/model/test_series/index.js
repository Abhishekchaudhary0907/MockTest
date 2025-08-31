import mongoose from "mongoose";

const answerSchema = mongoose.Schema(
  {
    questionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },
    response: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    timeSpent: {
      type: Number,
    },
  },
  { _id: false }
);

const testSeriesSchema = mongoose.Schema(
  {
    //_id
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    mockTestId: {
      type: mongoose.Schema.Types.ObjectId, // every test series have mocktests but every mocktest does not have test series
      ref: "MockTest",
      required: true,
    },
    startedAt: {
      type: Date,
      required: true,
    },
    completedAt: {
      type: Date,
    },
    answers: [answerSchema],
    totalScores: {
      type: Number,
      default: 0,
      min: 0,
    },
    timeTaken: {
      type: Number, // in ms
      default: 0,
      min: 0,
    },
    status: {
      type: String,
      enum: ["in-progress", "completed", "abandoned"],
      default: "in-progress",
    },
    price: {
      /// store in paise
      type: Number,
      default: 0,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

testSeriesSchema.index({ userId: 1 });
testSeriesSchema.index({ mockTestId: 1 });
testSeriesSchema.index({ userId: 1, mockTestId: 1 });

const TestSeries = mongoose.model("TestSeries", testSeriesSchema);

export { TestSeries };
