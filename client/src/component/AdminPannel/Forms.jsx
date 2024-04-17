import React, { useEffect, useRef, useState, useContext } from "react";
import "./Form.scss";

import { Link, useParams } from "react-router-dom";
import CryptoJS from 'crypto-js'
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
  let id=useParams();
  // let [id, setId] = useState();


  let {
    loader4,
    setLoader4,
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
  // const encryptData = (data) => {

    
  //   return   `/Digital_Card/${CryptoJS.AES.encrypt(data,"mani").toString()}`;
  // };
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

        {BasicData && BasicData.length > 0 &&
        ContactData && ContactData.length > 0 &&
        SocialMediaData && SocialMediaData.length > 0 &&
        ServiceData && ServiceData.length > 0 &&
        ProductData&&ProductData.length > 0 &&
        GalleryData && GalleryData.length > 0 &&
        TestimonialData && TestimonialData.length > 0 ? (
          <div className="final_digiCard">
            <Link to={`/new_card1/${BasicData[0].user}`} target="_blank">
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
