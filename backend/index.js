const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const authRouter = require("./routes/authRouter");
const productsRouter = require("./routes/productsRouter");

require("dotenv").config();
require("./models/db");

const PORT = process.env.PORT || 3000;

app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", authRouter);
app.use("/products", productsRouter);

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
