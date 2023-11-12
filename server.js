require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user.route");
const conversationRoute = require("./routes/conversation.route");
const gigRoute = require("./routes/gig.route");
const orderRoute = require("./routes/order.route");
const messageRoute = require("./routes/message.route");
const reviewRoute = require("./routes/review.route");
const authRoute = require("./routes/auth.route");
const cookieParser = require("cookie-parser");

const app = express();

const connect = async () => {
  try {
    mongoose.connect(process.env.DATABASE_URI);
    console.log("Connected to mongoDB!");
  } catch (error) {
    handleError(error);
  }
};

//middleWare
app.use(express.json());
app.use(cookieParser());
//

app.use("/api/users", userRoute);
app.use("/api/auths", authRoute);
// app.use("/api/gigs", gigRoute);
// app.use("/api/orders", orderRoute);
// app.use("/api/conversations", conversationRoute);
// app.use("/api/messages", messageRoute);
// app.use("/api/reviews", reviewRoute);

app.use((err,req,res,next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!."

  return res.status(errorStatus).send(errorMessage);
})

app.listen(8800, () => {
  connect();
  console.log("Backend Server is running!.");
});
