import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
//Configire DotEnv Configuration :
dotenv.config();

//App initialized :
let app = express();

//All Forms Routes Importing:
import AuthRoutes from "./Routes/Register.route.js";
import BasicDetailRoute from "./Routes/BasicDetail.route.js";
import ContactDetailRoute from "./Routes/ContactDetail.route.js";
import ServiceDetailRoute from "./Routes/ServiceDetail.route.js";
import ProductDetailRoute from "./Routes/ProductDetail.route.js";
import GalleryDetailRoute from "./Routes/GalleryDetail.route.js";
import QRCodeDetailRoute from "./Routes/QRCodeDetail.route.js";
import SocialMediaDetailRoute from "./Routes/SocialMediaDetail.route.js";
import TestimonialDetailRoute from "./Routes/TestimonialDetail.route.js";
import UserAllDataRoute from "./Routes/AllDetails.js";
//Accept json type data send to server:
app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//Initialize DotEnv Datas :
let PORT = process.env.PORT || 3000;
let mongodb_uri = process.env.MONGODB_CONNECTION_STRING;

//App use All below Routes:
app.use("/auth", AuthRoutes);
app.use("/basicDetail", BasicDetailRoute);
app.use("/contactDetail", ContactDetailRoute);
app.use("/serviceDetail", ServiceDetailRoute);
app.use("/productDetail", ProductDetailRoute);
app.use("/galleryDetail", GalleryDetailRoute);
app.use("/QRCodeDetail", QRCodeDetailRoute);
app.use("/socialMediaDetail", SocialMediaDetailRoute);
app.use("/testimonialDetail", TestimonialDetailRoute);
app.use("/vcard", UserAllDataRoute);

//Home route for server side only for demo purpose:
app.get("/", (req, res) => {
  res.send("server is running Sucessfully");
});

//MongoDB Conncetion established:
mongoose
  .connect(mongodb_uri)
  .then(() => {
    console.log("MongoDb Connected Succesfully");
    //Application listening PORT Number
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDb Connection Failure");
  });
