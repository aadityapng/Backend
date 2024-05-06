const express = require("express");
const app = express();
var cors = require("cors");

const bodyParser = require("body-parser");

app.use(cors());

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 8000;

const sequelize = require("./config/db.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/assets", express.static("public/images")); //Middleware ini digunakan untuk menyajikan file statis, seperti gambar, stylesheet, atau script JavaScript, kepada klien

// meddleware untuk menghandle error upload dll (error handling)
app.use((err, req, res, next) => {
  res.json({
    message: err.message,
  });
});

const router = require("./routes");
app.use(router);

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    console.log(`Server berjalan di http://localhost:${PORT}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
