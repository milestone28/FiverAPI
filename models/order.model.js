import mongoose from "mongoose";
const { Schema } = mongoose;

const orderSchema = new Schema({
  gigId: {
    type: Number,
    required: true,
  },   
  img: {
    type: String, 
    required: false,
  },    
  title: {
    type: String,
    required: true,
  },   
  price : {
    type: Number,
    required: true,
  },   
  sellerId: {
    type: Number,
    required: true,
  },  
  buyerId: {
    type: Number,
    required: true,
  }, 
  isCompleted: {
    type: boolean,
    default: false,
  }, 
  payment_intent: {
    type: String,
    required: true,
  }, 
},
{
    timestamps: true
}); 

export default mongoose.model("Order", orderSchema); 