// upload controller
import cloudinary from "./cloudinary.js";
import { uploadImageIndb } from "./function.js";
import { Image } from "./model/AllSchema.js";

export const uploadImage = async (req, res) => {
  try {
    console.log(req.body.name)
    const result = await cloudinary.uploader.upload(req.file.path);

    res.json({
      message: "Uploaded successfully",
      url: result.secure_url,   
    });
    console.log(result.secure_url)
    const savedImage=await Image.create({name:req.body.name,url:result.secure_url})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
