import mongoose from "mongoose";
const { Schema } = mongoose;

const conversationSchema = new Schema({
  Id: {
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
  readByBuyer: {
    type: Boolean,
    default: false
  },  
  readBySeller: {
    type: Boolean,
    default: false
  },  
  lastMessage: {
    type: String,
    required: false
  },  
},
{
    timestamps: true
}); 

export default mongoose.model("C onversation", conversationSchema); 