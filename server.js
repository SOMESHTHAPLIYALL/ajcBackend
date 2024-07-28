const express = require("express");
const connectDB = require("./config/db");
const blogRoutes = require("./routes/BlogRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
connectDB();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/blog", blogRoutes);
app.listen(8080, () => {
  console.log("Server running");
});
