import React, { useEffect, useRef, useState, useContext } from "react";
import "./Form.scss";
import user from "../../assets/Social Medias/user1.gif";
import background from "../../assets/banner.jpg";
import upload from "../../assets/Social Medias/addImage.gif";
import f from "../../assets/Social Medias/f.gif";
import linkedin from "../../assets/Social Medias/linkedin.gif";
import whatsup from "../../assets/Social Medias/whatsup.gif";
import twiter from "../../assets/Social Medias/twiter.gif";
import insta from "../../assets/Social Medias/insta.gif";
import clientProfile from "../../assets/logo2.jpg";
import { Link, UNSAFE_DataRouterContext } from "react-router-dom";

import formContext from "../Context/FormContext.jsx";
import {
  convertToBase64Basic,
  convertTestimonialImageToBase64,
  convertServiceImageToBase64,
  convertProductImageToBase64,
  convertGalleryImageToBase64,
  convertBannerImageToBase64,
  convertQRCodeImageToBase64,
} from "../Helper/Convert.js";
import axios from "axios";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Editor } from "primereact/editor";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import ContactDetail from "./Forms/ContactDetail.jsx";
import ServiceDetail from "./Forms/ServiceDetail.jsx";
import BasicDetail from "./Forms/BasicDetail.jsx";
import SocialMedia from "./Forms/SocialMedia.jsx";
import ProductDetail from "./Forms/ProductDetail.jsx";
import GalleryDetail from "./Forms/GalleryDetail.jsx";
import QRCodeDetail from "./Forms/QRCodeDetail.jsx";
import TestimonialDetail from "./Forms/TestimonialDetail.jsx";

let Forms = () => {
  let [id, setId] = useState();
  useEffect(() => {
    let id = JSON.parse(localStorage.getItem("datas"));
    setId(id);
  }, []);

  let {
    userToken,
    setUserToken,
    loader3,
    setLoader3,
    Data,
    setData,
    BasicID,
    setBasicID,
    QRCodeId,
    setQRCodeId,
    ProductId,
    setProdictId,
    GallId,
    setGallId,
    TestimonialID,
    setTestimonialID,
    show,
    setShow,
    slideClose,
    setSlideShow,
    basicForm,
    setBasicForm,
    contactForm,
    setContactForm,
    serviceForm,
    setServiceForm,
    productForm,
    setProductForm,
    galleryForm,
    setGalleryForm,
    socialMediaForm,
    setSocialMediaForm,
    testimonialForm,
    setTestimonialForm,
    QRCodeForm,
    setQRCodeForm,
    banner,
    setBanner,
    logo,
    setLogo,
    fullName,
    setFullName,
    profession,
    setProfession,
    summary,
    setSummary,
    Email1,
    setEmail1,
    AlternateEmail,
    setAlternateEmail,
    MobileNumber1,
    setMobileNumber1,
    AlternateMobileNumber,
    setAlternateMobileNumber,
    DOB,
    setDOB,
    Address,
    setAddress,
    serviceImage,
    setServiceImage,
    serviceTitle,
    setServiceTitle,
    serviceSummary,
    setServiceSummary,
    productImage,
    setProductImage,
    productTitle,
    setProductTitle,
    productReleaseDate,
    setProductReleaseDate,
    productSummary,
    setProductSummary,
    galleryImage,
    setGalleryImage,
    videoURL,
    setVideoURL,
    Facebook,
    setFacebook,
    LinkedIn,
    setLinkedIn,
    WhatsUp,
    setWhatsUp,
    Instagram,
    setInstagram,
    Twiter,
    setTwiter,
    clientImage,
    setClientImage,
    clientName,
    setClientName,
    clientFeedbackDate,
    setClientFeedbackDate,
    clientFeedback,
    setClientFeedback,
    QRCodeImage,
    setQRCodeImage,
    ID,
    setID,
    BasicData,
    setBasicData,
    ContactData,
    setContactData,
    ServiceData,
    setServiceData,
    ProductData,
    setProductData,
    GalleryData,
    setGalleryData,
    SocialMediaData,
    setSocialMediaData,
    TestimonialData,
    setTestimonialData,
    QRCodeData,
    setQRCodeData,
    BasicEdit,
    setBasicEdit,
    ContactEdit,
    setContactEdit,
    ServiceEdit,
    setServiceEdit,
    ProductEdit,
    setProductEdit,
    GalleryEdit,
    setGalleryEdit,
    SocialMediaEdit,
    setSocialMediaEdit,
    TestimonialEdit,
    setTestimonialEdit,
    QRCodeEdit,
    setQRCodeEdit,
  } = useContext(formContext);
  let localStorageDatas = JSON.parse(localStorage.getItem("datas"));
  // Fetching all data:
  useEffect(() => {
    let fetch = async () => {
      setLoader3(true);
      await axios
        .get(`http://localhost:3001/basicDetail/`, {
          headers: {
            Authorization: `Bearer ${localStorageDatas.token}`,
          },
        })
        .then((res) => {
          setBanner(res.data.result[0].banner);
          setLogo(res.data.result[0].logo);
          setFullName(res.data.result[0].fullName);
          setProfession(res.data.result[0].profession);
          setSummary(res.data.result[0].summary);
          setBasicID(res.data.result[0]._id);
          setLoader3(false);
        })
        .catch((err) => {
          console.log(err);
          setLoader3(false);
        });
    };
    let socialmedia = async () => {
      await axios
        .get("http://localhost:3001/socialMediaDetail", {
          headers: {
            Authorization: `Bearer ${localStorageDatas.token}`,
          },
        })
        .then((res) => {
          setSocialMediaData(res.data.result);
          setFacebook(res.data.result[0].Facebook);
          setInstagram(res.data.result[0].Instagram);
          setTwiter(res.data.result[0].Twiter);
          setWhatsUp(res.data.result[0].WhatsUp);
          setLinkedIn(res.data.result[0].LinkedIn);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    let fetchService = async () => {
      await axios
        .get(`http://localhost:3001/serviceDetail`, {
          headers: {
            Authorization: `Bearer ${localStorageDatas.token}`,
          },
        })
        .then((res) => {
          console.log(res);
          setServiceData(res.data.result);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    let fetchQRCode = async () => {
      await axios
        .get(`http://localhost:3001/qrcode_detail`, {
          headers: {
            Authorization: `Bearer ${id.token}`,
          },
        })
        .then((res) => {
          setQRCodeData(res.data.getQRCodeDetails);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    let fetchProduct = async () => {
      await axios
        .get(`http://localhost:3001/product_detail`, {
          headers: {
            Authorization: `Bearer ${id.token}`,
          },
        })
        .then((res) => {
          setProductData(res.data.getProductDetail);
          // setServiceData(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    let fetchGallery = async () => {
      await axios
        .get(`http://localhost:3001/gallery_detail`, {
          headers: {
            Authorization: `Bearer ${id.token}`,
          },
        })
        .then((res) => {
          setGalleryData(res.data.getGalleryDetail);
          // setServiceData(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    let fetchSocialMedia = async () => {
      await axios
        .get(`http://localhost:3001/socialMedia_detail`, {
          headers: {
            Authorization: `Bearer ${id.token}`,
          },
        })
        .then((res) => {
          setSocialMediaData(res.data.getSocialMediaDetail);
          // setServiceData(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    let fetchTestimonial = async () => {
      await axios
        .get(`http://localhost:3001/testimonial_detail`, {
          headers: {
            Authorization: `Bearer ${id.token}`,
          },
        })
        .then((res) => {
          setTestimonialData(res.data.getTestimonialDetail);
          // setServiceData(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetch();
    socialmedia();

    fetchService();
    // fetchQRCode();
    // fetchProduct();
    // fetchGallery();
    // fetchSocialMedia();
    // fetchTestimonial();
  }, []);


  return (
    <>
      <div
        className="forms_container"
        id={slideClose ? "Formclose" : "Formopen"}
      >
        {/* <ToastContainer
          closeOnClick
          autoClose={2000}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        /> */}
        {basicForm === true ? <BasicDetail /> : ""}
        {/* //Form 2 contact Details */}
        {contactForm === true ? <ContactDetail /> : ""}
        {/* //Form 3 service Details */}
        {serviceForm === true ? <ServiceDetail /> : ""}
        {/* //Form 4 product Details */}
        {productForm === true ? <ProductDetail /> : ""}
        {/* //Form5 Gallery upload */}
        {galleryForm === true ? <GalleryDetail /> : ""}

        {/* //Form7 social media link upload */}
        {socialMediaForm === true ? <SocialMedia /> : ""}
        {/* //Form 8 Testimonial Details */}
        {testimonialForm === true ? (
      <TestimonialDetail/>
        ) : (
          ""
        )}
        {/* //QRCode Image upload */}
        {QRCodeForm === true ? <QRCodeDetail /> : ""}

        {BasicData != undefined &&
        ContactData != undefined &&
        SocialMediaData != undefined &&
        ServiceData.length >= 1 &&
        ProductData.length >= 1 &&
        GalleryData.length >= 1 &&
        TestimonialData.length >= 1 ? (
          <div className="final_digiCard">
            <Link to={`/${fullName}`} target="_blank">
              <i className="bx bxs-hand-right bx-flashing"></i>Get Your Digital
              Card
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Forms;
