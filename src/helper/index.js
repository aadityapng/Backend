require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const uploadCloudinary = async (filePath) => {
  const fileLocation = path.join(__dirname, "../../" + filePath);
  let result;
  try {
    result = await cloudinary.uploader.upload(filePath, {
      use_filename: true,
    });
    if (fs.existsSync(fileLocation)) {
      // Remove the file
      fs.unlinkSync(fileLocation);
    }
    return result.url;
  } catch (error) {
    if (fs.existsSync(fileLocation)) {
      // Remove the file
      fs.unlinkSync(fileLocation);
    }
    return null;
  }
};

module.exports = { uploadCloudinary };
