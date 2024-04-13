import React, { useRef, useEffect, useState } from "react";
import "./NewCardDesign1.scss";
import banner_img from "../../../assets/Background/12.jpg";
import avatar from "../../../assets/avatar_2.png";
import logo from "../../../assets/avatar_2.png";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { useParams } from "react-router-dom";
import qr1 from "../../../assets/QRCODE/qr-code-isometric.svg";
import qr2 from "../../../assets/QRCODE/qr-code-monochromatic.svg";
import qr3 from "../../../assets/QRCODE/qr-code-outline.svg";
import { Editor } from "primereact/editor";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
//Testimonial
import { useContext } from "react";
import formContext from "../../Context/FormContext";
import axios from "axios";
const NewCardDesign1 = () => {
  let id = useParams();


  let {
    AllData,
    setAllData,
    userToken,
    setUserToken,
    user,
    setUser,
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


  return (
    <>
      <div className="newCard_design_container">
    <div className="card_design_box">
        <div className="banner">
            <img src={banner_img} alt="banner" />

            <svg className="path-0" width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#F78DA7"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,700 L 0,0 C 119.77033492822966,88.42105263157896 239.54066985645932,176.84210526315792 341,179 C 442.4593301435407,181.15789473684208 525.6076555023925,97.05263157894734 604,145 C 682.3923444976075,192.94736842105266 756.0287081339713,372.94736842105266 847,383 C 937.9712918660287,393.05263157894734 1046.2775119617224,233.1578947368421 1148,141 C 1249.7224880382776,48.8421052631579 1344.8612440191387,24.42105263157895 1440,0 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-0 720 350)"></path></svg>
        </div>
    </div>
      </div>
    </>
  );
};

export default NewCardDesign1;
