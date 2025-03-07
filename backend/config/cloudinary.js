// cloudinary.js
import cloudinary from 'cloudinary';
const { v2: cloudinaryV2 } = cloudinary;

const connectCloudinary = async () => {
  try {
    cloudinaryV2.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_SECRET_KEY,
    });

    console.log("Cloudinary configured successfully.");
  } catch (error) {
    console.error("Error configuring Cloudinary:", error.message);
    throw error;
  }
};

export default connectCloudinary;
