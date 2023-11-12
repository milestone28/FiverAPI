import mongoose from "mongoose";
const { Schema } = mongoose;

const messageSchema = new Schema({
  conversationId: {
    type: Number,
    required: true,
  },   
  userId: {
    type: Number,
    required: true,
  },  
  desc: {
    type: String,
    required: true,
  }, 
   
},
{
    timestamps: true
}); 

export default mongoose.model("Message", messageSchema); 