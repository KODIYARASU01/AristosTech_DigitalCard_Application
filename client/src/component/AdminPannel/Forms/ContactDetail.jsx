import React, { useEffect, useRef, useState, useContext } from "react";
import "./Styles/ContactDetail.scss";
import user from "../../../assets/Social Medias/user1.gif";
import { useParams } from "react-router-dom";

import formContext from "../../Context/FormContext.jsx";

import axios from "axios";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Editor } from "primereact/editor";

import "primereact/resources/themes/lara-light-cyan/theme.css";

const ContactDetail = () => {
  let id = useParams();
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
  // Fetching all data:
  useEffect(() => {
 
    // Retrieve token from local storage or wherever it's stored
    let localStorageDatas = JSON.parse(localStorage.getItem("datas"));
    let contactDetail = async () => {
      setLoader4(true);
      await axios
        .get(
          `http://localhost:3001/contactDetail/specific/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorageDatas.token}`,
            },
          }
        )
        .then((res) => {
          setContactData(res.data.data);
          setEmail1(res.data.data[0].Email1);
          setAlternateEmail(res.data.data[0].AlternateEmail);
          setMobileNumber1(res.data.data[0].MobileNumber1);
          setAlternateMobileNumber(res.data.data[0].AlternateMobileNumber);
          setDOB(res.data.data[0].DOB);
          setAddress(res.data.data[0].Address);

          setLoader4(false);
        })
        .catch((err) => {
          console.log(err);
          setLoader4(false);
        });
    };
    contactDetail();
  }, []);

  //Contact form submit:
  async function handleContactFormSubmit(e) {
    e.preventDefault();
    try {
      setLoader3(true);
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("datas"));
      let Contactdata = {
        Email1,
        AlternateEmail,
        MobileNumber1,
        AlternateMobileNumber,
        DOB,
        Address,
      };
      // Make authenticated request with bearer token
      await axios
        .post(
          "http://localhost:3001/contactDetail",
          Contactdata,
          {
            headers: {
              Authorization: `Bearer ${id.token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
        });
    } catch (error) {
      // Handle errors
      alert("Something Error" + error.message);
      setLoader3(false);
    }
  }
  //Contact form Edit:
  async function handleContactFormEdit(e) {
    e.preventDefault();
    try {
      setLoader3(true);
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("datas"));
      let data = {
        Email1,
        AlternateEmail,
        MobileNumber1,
        AlternateMobileNumber,
        DOB,
        Address,
      };
      // Make authenticated request with bearer token
      await axios
        .put(
          `http://localhost:3001/contactDetail/update/${ContactData[0]._id}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${id.token}`,
            },
          }
        )
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
          setMobileNumber1("");
          setAlternateMobileNumber("");
          setEmail1("");
          setAlternateEmail("");
          setDOB("");
          setAddress("");
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
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
        className="Form2_container"
        // id={slideClose ? "Form1close" : "Form1open"}
      >
        <div className="Form_title">
          <h4>Contact Detail's Session</h4>
          <img src={user} alt="user" />
        </div>

        <form action="" onSubmit={handleContactFormSubmit}>
          {/* Email */}
          <div className="form_group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Eg : abc@gmail.com"
              name="email"
              id="email"
              value={Email1}
              onChange={(e) => setEmail1(e.target.value)}
            />
          </div>
          {/* Alternate Email */}
          <div className="form_group">
            <label htmlFor="AlternateEmail">Alternate Email</label>
            <input
              type="email"
              placeholder="Eg : abc@gmail.com"
              name="AlternateEmail"
              id="AlternateEmail"
              value={AlternateEmail}
              onChange={(e) => setAlternateEmail(e.target.value)}
            />
          </div>
          {/* Mobile Number  */}
          <div className="form_group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="tel"
              placeholder="Eg : +91 6547987845"
              name="mobile"
              id="mobile"
              value={MobileNumber1}
              onChange={(e) => setMobileNumber1(e.target.value)}
            />
          </div>
          {/* Mobile Number  */}
          <div className="form_group">
            <label htmlFor="AlternateMobile">Alternate Mobile Number</label>
            <input
              type="tel"
              placeholder="Eg : +91 6547987845"
              name="AlternateMobile"
              id="AlternateMobile"
              value={AlternateMobileNumber}
              onChange={(e) => setAlternateMobileNumber(e.target.value)}
            />
          </div>
          {/* Date of Birth  */}
          <div className="form_group">
            <label htmlFor="dob">Date Of Birth</label>
            <input
              type="date"
              placeholder="Eg : 26/01/2000"
              name="dob"
              id="dob"
              value={DOB}
              onChange={(e) => setDOB(e.target.value)}
            />
          </div>
          <div className="form_group">
            <label htmlFor="address">Address</label>
            {/* <textarea
                  name="address"
                  id=""
                  cols="30"
                  rows="4"
                  placeholder="Write your location Address"
                  value={Address}
                  onChange={(e) => setAddress(e.target.value)}
                ></textarea> */}
            <Editor
              placeholder="Start Typing..."
              value={Address}
              onTextChange={(e) => setAddress(e.htmlValue)}
              style={{ height: "100px" }}
              className="textarea"
            />
          </div>

          {ContactData && ContactData.length > 0 ? (
            <div className="form_submit">
              <button onClick={handleContactFormEdit}>
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
  );
};

export default ContactDetail;
