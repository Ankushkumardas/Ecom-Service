import mongoose from "mongoose";

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
    type: Number,
    required: true,
  },
  discountPrice: {
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
  collections: {
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
      url: {
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
  numReviews: {
    type: Number,
    default: 0,
  },
  tags: {
    type: [String],
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  metaTitle: {
    type: String,
  },
  metaDescription: {
    type: String,
  },
  metaKeyword: {
    type: String,
  },
  dimensions: {
    length: Number,
    width: Number,
    height: Number,
  },
  weight: {
    type: Number,
  },
}, { timestamps: true });

export default mongoose.model("Product", productSchema);

// const dummyProduct = {
//   "name": "Classic White T-Shirt",
//   "description": "A comfortable and stylish classic white t-shirt made from 100% cotton.",
//   "price": 29.99,
//   "discountPrice": 19.99,
//   "countInStock": 100,
//   "sku": "TSHIRT-WHITE-001",
//   "category": "Apparel",
//   "brand": "FashionCo",
//   "sizes": ["S", "M", "L", "XL"],
//   "colors": ["White", "Black"],
//   "collection": "Summer 2024",
//   "material": "Cotton",
//   "gender": "Male",
//   "images": [
//     {
//       "url": "https://example.com/images/tshirt-white-front.jpg",
//       "altText": "Front view of classic white t-shirt"
//     },
//     {
//       "url": "https://example.com/images/tshirt-white-back.jpg",
//       "altText": "Back view of classic white t-shirt"
//     }
//   ],
//   "isFeatured": true,
//   "isPublished": true,
//   "rating": 4.5,
//   "numReviews": 12,
//   "tags": ["tshirt", "white", "summer", "cotton"],
//   "user": "60d21b4667d0d8992e610c85",
//   "metaTitle": "Classic White T-Shirt - FashionCo",
//   "metaDescription": "Shop the classic white t-shirt from FashionCo. Perfect for any occasion.",
//   "metaKeyword": "tshirt, white, fashion, summer",
//   "dimensions": {
//     "length": 30,
//     "width": 25,
//     "height": 2
//   },
//   "weight": 0.3
// };
