import { Schema, model } from "mongoose";

// Product Schema
const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: [true, "Product name is required"],
      trim: true
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
      min: 0
    },

    brand: {
      type: String,
      required: [true, "Brand is required"],
      trim: true
    }
  },
  {
    timestamps: true,
    strict:'throw'
  }
);

// Export Model
export const ProductModel = model("product", productSchema);
