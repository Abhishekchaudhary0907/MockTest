import mongoose from "mongoose";

const bookmarkQuestionSchema = mongoose.Schema(
  {
    //_id
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    questionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
      required: true,
      index: true,
    },
    note: {
      type: String,
      trim: true,
      default: null,
    },
    bookmarkedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

bookmarkQuestionSchema.index({ userId: 1, questionId: 1 }, { unique: true });
const BookmarkQuestion = mongoose.model(
  "BookmarkQuestion",
  bookmarkQuestionSchema
);

export { BookmarkQuestion };
