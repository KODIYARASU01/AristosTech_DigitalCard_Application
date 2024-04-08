import express from 'express';
let router=express.Router();
import BasicDetail from "../Models/BasicDetail.model.js";
import ContactDetails from "../Models/ContactDetail.model.js";
import ServiceDetails from "../Models/ServiceDetail.model.js";
import ProductDetails from "../Models/ProductDetail.model.js";
import GalleryDetails from "../Models/GalleryDetail.model.js";
import SocialMediaDetails from "../Models/SocialMediaDetail.model.js";
import QRCodeDetails from "../Models/QRCodeDetail.model.js";
import TestimonialDetails from "../Models/TestimonialDetail.model.js";
router.get("/getuser", async (req, res) => {
  try {
   
    let userid = req.query.id;
    let result = {};

    let getSpecificData = await BasicDetail.find({ user: userid });

    if (!getSpecificData) {
      res.status(400).json({ message: "Specific Data Not Found" });
    } else {
      result["BasicDetail"] = getSpecificData;
    }

    let ContactDetails_data = await ContactDetails.find({ user: userid });

    if (!ContactDetails_data) {
      res.status(400).json({ message: "Specific Data Not Found" });
    } else {
      result["ContactDetails"] = ContactDetails_data;
    }

    let ServiceDetails_data = await ServiceDetails.find({ user: userid });

    if (!ServiceDetails_data) {
      res.status(400).json({ message: "Specific Data Not Found" });
    } else {
      result["ServiceDetails"] = ServiceDetails_data;
    }

    let ProductDetails_data = await ProductDetails.find({ user: userid });

    if (!ProductDetails_data) {
      res.status(400).json({ message: "Product Data Not Found" });
    } else {
      result["ProductDetails"] = ProductDetails_data;
    }

    let GalleryDetails_data = await GalleryDetails.find({ user: userid });

    if (!GalleryDetails_data) {
      res.status(400).json({ message: "Gallery Data Not Found" });
    } else {
      result["GalleryDetails"] = GalleryDetails_data;
    }

    let QRCodeDetails_data = await QRCodeDetails.find({ user: userid });

    if (!QRCodeDetails_data) {
      res.status(400).json({ message: "Product Data Not Found" });
    } else {
      result["QRCodeDetails"] = QRCodeDetails_data;
    }

    let SocialMediaDetails_data = await SocialMediaDetails.find({ user: userid });

    if (!SocialMediaDetails_data) {
      res.status(400).json({ message: "Specific Data Not Found" });
    } else {
      result["SocialMediaDetails"] = SocialMediaDetails_data;
    }

    let TestimonialDetails_data = await TestimonialDetails.find({
      user: userid,
    });

    if (!TestimonialDetails_data) {
      res.status(400).json({ message: "Testimonial Data Not Found" });
    } else {
      result["TestimonialDetails"] = TestimonialDetails_data;
    }


    res.status(200).json({ data:result });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;