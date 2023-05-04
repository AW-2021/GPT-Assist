const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require('cors')
const checkoutRoute=require("./routes/checkout")
const chatRoute=require("./routes/chat")

require("dotenv").config();

const app = express();
const port = 5000;

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors())

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB database connection established successfully!");
  });

app.use("/checkout",checkoutRoute)
app.use("/chat",chatRoute)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
