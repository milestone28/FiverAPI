import mongoose from "mongoose";
const { Schema } = mongoose;

const gigSchema = new Schema({
  userId: {
    type: Number,
    required: true,
  },   
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  totalStar: {
    type: Number,
    default: 0,
  },
  starNumber: {
    type: Number,
    default: 0,
  },
  cat: { 
    type: String,
    required: true,
  },
  cover: {
    type: String ,
    required: true  ,
  },
  images: {
    type: [String],
    default: false  
  },
  shortTitle: {
    type: String ,
    required: true  ,
  },
  shortDesc: {
    type: String ,
    required: true  ,
  },
  deliveryTime: {
    type: Number ,
    required: true  , 
  },
  revisionNumber: {
    type: Number ,
    required: true  ,
  },
  features: {
    type: [String] ,
    required: false  ,
  },
  sales: {
    type: Number ,
    default: 0,
  },
},
{
    timestamps: true
}); 

export default mongoose.model("Gig", gigSchema); 