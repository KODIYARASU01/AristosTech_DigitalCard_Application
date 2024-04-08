import "./Styles/GalleryDetail.scss";
import React, { useEffect, useRef, useState, useContext } from "react";
import user from "../../../assets/Social Medias/user1.gif";
import background from "../../../assets/banner.jpg";
import upload from "../../../assets/Social Medias/addImage.gif";
import { useParams } from "react-router-dom";

import formContext from "../../Context/FormContext.jsx";
import {

  convertGalleryImageToBase64,

} from "../../Helper/Convert.js";
import axios from "axios";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Editor } from "primereact/editor";

import "primereact/resources/themes/lara-light-cyan/theme.css";
const GalleryDetail = () => {
  let id=useParams();
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
  // Fetching all data:
  useEffect(() => {
    let fetchGallery = async () => {
      setLoader4(true)
      await axios
        .get(`https://aristostech-digitalcard-application.onrender.com/galleryDetail/specific/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorageDatas.token}`,
          },
        })
        .then((res) => {
          setGalleryData(res.data.data);
          setLoader4(false)
        })
        .catch((err) => {
          console.log(err);
          setLoader4(false)
        });
    };

    fetchGallery();
  }, []);
  //Formik does not support file upload so we could create handler :
  const onUploadGalleryImage = async (e) => {
    let base64 = await convertGalleryImageToBase64(e.target.files[0]);
    setGalleryImage(base64);
  };
  //Gallery form submit:
  async function handleGalleryFormSubmit(e) {
    e.preventDefault();
    try {
      setLoader3(true);
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("datas"));
      let Gallerydata = {
        galleryImage,
        videoURL,
      };

      // Make authenticated request with bearer token
      await axios
        .post("https://aristostech-digitalcard-application.onrender.com/galleryDetail", Gallerydata, {
          headers: {
            Authorization: `Bearer ${id.token}`,
          },
        })
        .then((res) => {
          setGalleryData(res.data.result);
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });

          setLoader3(false);
          setGalleryImage("");
          setVideoURL("");
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
  //Gallery form Edit:
  async function handleGalleryUpdate(e) {
    e.preventDefault();
    try {
      setLoader3(true);
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("datas"));
      let data = {
        galleryImage,
        videoURL,
      };
      // Make authenticated request with bearer token
      await axios
        .put(`https://aristostech-digitalcard-application.onrender.com/galleryDetail/update/${GallId}`, data, {
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
          setGalleryImage(undefined);
          setVideoURL("");
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

  //gallery form edit:

  async function handleGalleryEdit(e) {
    setLoader3(true);
    // Retrieve token from local storage or wherever it's stored
    let id = JSON.parse(localStorage.getItem("datas"));
    await axios
      .get(`https://aristostech-digitalcard-application.onrender.com/galleryDetail/specificId/${e.target.id}`, {
        headers: {
          Authorization: `Bearer ${id.token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setGalleryImage(res.data.data.galleryImage);
        setGallId(res.data.data._id);
        setGalleryEdit(true);
        setLoader3(false);
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 2000,
          transition: Flip,
        });
      })
      .catch((err) => {
        toast.error(err, {
          position: "top-center",
          autoClose: 2000,
          transition: Flip,
        });
        setLoader3(false);
        setGalleryEdit(false);
      });
  }

  //Service Form Delete:
  async function handleGalleryDelete(e) {
    setLoader3(true);
    // Retrieve token from local storage or wherever it's stored
    let id = JSON.parse(localStorage.getItem("datas"));
    await axios
      .delete(`https://aristostech-digitalcard-application.onrender.com/galleryDetail/delete/${e.target.id}`, {
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
        setGalleryEdit(false);
        setLoader3(false);
      })
      .catch((err) => {
        toast.error(err, {
          position: "top-center",
          autoClose: 2000,
          transition: Flip,
        });
        setLoader3(false);
        setGalleryEdit(false);
      });
  }
  return (
    <div>
      <div
        className="Form5_container"
        // id={slideClose ? "Form1close" : "Form1open"}
      >
        <div className="Form_title">
          <h4>Gallery Detail Update</h4>
          <img src={user} alt="user" />
        </div>

        <form action="" onSubmit={handleGalleryFormSubmit}>
          {/* //product image */}
          <div className="form_group">
            <label htmlFor="galleryImage">
              Upload Gallery Image
              <img
                className="galleryImage"
                src={GalleryData.galleryImage != undefined ? galleryImage : background}
                alt=""
                name="galleryImage"
              />
              <img
                src={upload}
                alt="galleryImage"
                className="upload"
                name="galleryImage"
              />
            </label>

            <input
              type="file"
              onChange={onUploadGalleryImage}
              name="galleryImage"
              id="galleryImage"
            />
          </div>
          {/* Vieo upload link */}
          <div className="form_group">
            <label htmlFor="videoLink">Paste video Embeded Link</label>
            <input
              type="text"
              placeholder="Eg : http://shorts.mp4"
              name="videoLink"
              id="videoLink"
              value={videoURL}
              onChange={(e) => setVideoURL(e.target.value)}
            />
          </div>

          {GalleryEdit === true ? (
            <div className="form_submit">
              <button onClick={handleGalleryUpdate}>
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
        {GalleryData && GalleryData.length > 0 ? (
          <div>
            {GalleryData.map((data, index) => {
              return (
                <div className="gallery_list" key={index}>
                  <div className="ser_length">
                    <h6>{index + 1}</h6>
                  </div>
                  <div className="ser_image">
                    <img
                      src={data.galleryImage ? data.galleryImage : background}
                      alt="galleryImage"
                    />
                  </div>

                  <div className="actions">
                    <i
                      class="bx bxs-edit edit"
                      id={data._id}
                      onClick={handleGalleryEdit}
                    ></i>
                    <i
                      class="bx bxs-message-square-x delete"
                      id={data._id}
                      onClick={handleGalleryDelete}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default GalleryDetail;
