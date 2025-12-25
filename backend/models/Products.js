import mongoose from "mongoose";
import { type } from "os";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  discountprice: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0,
  },
  sku: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  sizes: {
    type: [String],
    required: true,
  },
  colors: {
    type: [String],
    required: true,
  },
  collection: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    default: "Male",
  },
  images: [
    {
      utl: {
        type: String,
        required: true,
      },
      altText: {
        type: String,
      },
    },
  ],
  isFeatured: {
    type: Boolean,
    default: false,
  },
  isPublished: {
    type: Boolean,
    required: false,
  },
  rating: {
    type: Number,
    default: 0,
  },
   numReviews:{
    type:Number,
    default:0
   },
    tags:{
    type:[String],
    required:true
   },
   user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
   },
    metaTitle:{
    type:String,
   },
    metaDescription:{
    type:String,
   },
    metaKeyword:{
    type:String,
   },
   dimensions:{
    length:Number,
    width:Number,
    height:Number,
   },
   weight:{
    type:Number
   }
},{timestamps:true});

export default mongoose.model("Product", productSchema);
