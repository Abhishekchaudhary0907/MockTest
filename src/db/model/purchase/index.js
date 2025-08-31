import mongoose from "mongoose";

const purchaseSchema = mongoose.Schema(
  {
    //_id
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    itemType: {
      type: String,
      required: true,
      index: true,
    },
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      index: true,
    },
    transactionId: {
      type: String, // payment gateway reference
      required: true,
      unique: true,
      index: true,
    },
    amountPaid: {
      type: Number,
      required: true,
      default: 0,
    },
    currency: {
      type: String,
      default: "INR",
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "success", "failed", "cancelled"],
      default: "pending",
      required: true,
      index: true,
    },
    purchaseAt: {
      type: Date,
      default: Date.now(),
      required: true,
    },
    expiresAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

purchaseSchema.index({ userId: 1, paymentStatus: 1 });
purchaseSchema.index({ transactionId: 1 }, { unique: true });
// we will add more indexing if required
const Purchase = mongoose.model("Purchase", purchaseSchema);

export { Purchase };
