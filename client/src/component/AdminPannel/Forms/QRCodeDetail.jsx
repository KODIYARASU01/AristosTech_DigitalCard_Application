import './Styles/QRCodeDetail.scss';
import React, { useEffect, useRef, useState, useContext } from "react";
import user from "../../../assets/Social Medias/user1.gif";
import background from "../../../assets/banner.jpg";
import upload from "../../../assets/Social Medias/addImage.gif";
import f from "../../../assets/Social Medias/f.gif";
import linkedin from "../../../assets/Social Medias/linkedin.gif";
import whatsup from "../../../assets/Social Medias/whatsup.gif";
import twiter from "../../../assets/Social Medias/twiter.gif";
import insta from "../../../assets/Social Medias/insta.gif";
import clientProfile from "../../../assets/logo2.jpg";
import { Link, UNSAFE_DataRouterContext } from "react-router-dom";

import formContext from "../../Context/FormContext.jsx";
import {
  convertToBase64Basic,
  convertTestimonialImageToBase64,
  convertServiceImageToBase64,
  convertProductImageToBase64,
  convertGalleryImageToBase64,
  convertBannerImageToBase64,
  convertQRCodeImageToBase64,
} from "../../Helper/Convert.js";
import axios from "axios";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Editor } from "primereact/editor";

import "primereact/resources/themes/lara-light-cyan/theme.css";

const QRCodeDetail = () => {
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
        let fetchQRCode = async () => {
          await axios
            .get(`https://aristostech-digitalcard-application.onrender.com/QRCodeDetail`, {
              headers: {
                Authorization: `Bearer ${localStorageDatas.token}`,
              },
            })
            .then((res) => {
              setQRCodeData(res.data.getQRCodeDetails);
            })
            .catch((err) => {
              console.log(err);
            });
        };

 
        fetchQRCode();

      }, []);
      //Formik does not support file upload so we could create handler :
  const onUploadQRCodeImage = async (e) => {
    let base64 = await convertQRCodeImageToBase64(e.target.files[0]);
    setQRCodeImage(base64);
  };

      //QRCODE submit:

  async function handleQRCodeFormSubmit(e) {
    e.preventDefault();
    try {
      setLoader3(true);
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("datas"));

      let data = {
        QRCodeImage,
      };
      // Make authenticated request with bearer token
      await axios
        .post("https://aristostech-digitalcard-application.onrender.com/QRCodeDetail", data, {
          headers: {
            Authorization: `Bearer ${id.token}`,
          },
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });

          setLoader3(false);
          setQRCodeImage(undefined);
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
        });
      setLoader3(false);
    } catch (error) {
      // Handle errors
      toast.error(error.respose.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Flip,
      });

      setLoader3(false);
    }
  }
  //QRCODE form Edit:
  async function handleQRCodeEdit(e) {
    e.preventDefault();
    try {
      setLoader3(true);
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("datas"));
      let data = {
        QRCodeImage,
      };
      // Make authenticated request with bearer token
      await axios
        .put(`https://aristostech-digitalcard-application.onrender.com/QRCodeDetail/specific/${QRCodeId}`, data, {
          headers: {
            Authorization: `Bearer ${id.token}`,
          },
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });

          setLoader3(false);
          setGalleryEdit(false);
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
          setGalleryEdit(false);
        });
      setLoader3(false);
    } catch (error) {
      // Handle errors
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Flip,
      });
      setLoader3(false);
    }
  }

  return (
    <div>
            <div
            className="Form9_container"
            // id={slideClose ? "Form1close" : "Form1open"}
          >
            <div className="Form_title">
              <h4>QRCode Image Upload</h4>
              <img src={user} alt="user" />
            </div>

            <form action="" onSubmit={handleQRCodeFormSubmit}>
              {/* //product image */}
              <div className="form_group">
                <label htmlFor="QRCodeImage">
                <p> Upload QRCode Image<span>{serviceImage !=undefined ? <i className='bx bx-check' style={{color:'green'}}></i> :<i className='bx bxs-chevrons-down bx-flashing' ></i>}</span></p>
                  <img
                    className="QRCodeImage"
                    src={QRCodeImage !== undefined ? QRCodeImage : background}
                    alt="QRCodeImage"
                    name="QRCodeImage"
                  />
                </label>
                <input
                  type="file"
                  onChange={onUploadQRCodeImage}
                  name="QRCodeImage"
                  id="QRCodeImage"
                />
              </div>
              {QRCodeData && QRCodeData.length === 1 ? (
                <div className="form_submit">
                  <button onClick={handleQRCodeEdit}>
                    Update{loader3 ? <span className="loader3"></span> : ""}
                  </button>
                </div>
              ) : (
                <div className="form_submit">
                  <button type="submit">
                    Upload{loader3 ? <span className="loader3"></span> : ""}
                  </button>
                </div>
              )}
            </form>
          </div>
    </div>
  )
}

export default QRCodeDetail;
