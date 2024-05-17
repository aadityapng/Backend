const express = require("express");
const app = express();
var cors = require("cors");

const bodyParser = require("body-parser"),
  swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");

const path = require("path");
const { errHandler } = require("./services/errorHandler.js");

// swagger options
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Platinum API Documentation",
      version: "0.1.0",
      description: "Platinum API Documentation",
    },
  },
  apis: [path.join(__dirname, "./routes/**/*.js")],
};

app.use(cors());

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 8000;

const sequelize = require("./config/db.js");

app.use(errHandler);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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
