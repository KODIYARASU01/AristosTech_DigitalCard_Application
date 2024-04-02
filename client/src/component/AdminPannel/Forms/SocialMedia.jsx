import React,{useContext} from 'react';
import './Styles/SocialMedia.scss'
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
import axios from "axios";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Editor } from "primereact/editor";

import "primereact/resources/themes/lara-light-cyan/theme.css";
const SocialMedia = () => {
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
      //SocialMedia form submit:
  async function handleSocialMediaFormSubmit(e) {
    e.preventDefault();

    try {
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("datas"));
      let SocialMediadata = {
        Facebook,
        LinkedIn,
        WhatsUp,
        Instagram,
        Twiter,
      };
      setLoader3(true);
      // Make authenticated request with bearer token
      await axios
        .post("https://aristostech-digitalcard-application.onrender.com/socialMediaDetail", SocialMediadata, {
          headers: {
            Authorization: `Bearer ${id.token}`,
          },
        })
        .then((res) => {
          setLoader3(false);
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
        })
        .catch((error) => {
          console.log(error.message);
          setLoader3(false);
          toast.error(error.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
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
  //SocialMedia form Edit:
  async function handleSocialMediaFormEdit(e) {
    e.preventDefault();
    try {
      setLoader3(true);
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("datas"));
      let data = {
        Facebook,
        LinkedIn,
        WhatsUp,
        Instagram,
        Twiter,
      };
      // Make authenticated request with bearer token
      await axios
        .put(
          `https://aristostech-digitalcard-application.onrender.com/socialMediaDetail/update/${SocialMediaData[0]._id}`,
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
          setFacebook("");
          setLinkedIn("");
          setWhatsUp("");
          setInstagram("");
          setTwiter("");
        })
        .catch((err) => {
          toast.success(err.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
        });
      setLoader3(false);
    } catch (error) {
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
            className="Form7_container"
            // id={slideClose ? "Form7close" : "Form7open"}
          >
            <div className="Form_title">
              <h4>Social Media Detail Update</h4>
              <img src={user} alt="user" />
            </div>

            <form action="" onSubmit={handleSocialMediaFormSubmit}>
              {/* Vieo upload link */}
              <div className="form_group">
                <label htmlFor="facebook">
                  <img src={f} alt="facebook" />
                </label>
                <input
                  type="text"
                  placeholder="Eg : http://shorts.mp4"
                  name="facebook"
                  id="facebook"
                  value={Facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                />
              </div>
              <div className="form_group">
                <label htmlFor="linkedin">
                  <img src={linkedin} alt="LinkedIn" />
                </label>
                <input
                  type="text"
                  placeholder="Eg : http://shorts.mp4"
                  name="linkedin"
                  id="linkedin"
                  value={LinkedIn}
                  onChange={(e) => setLinkedIn(e.target.value)}
                />
              </div>
              <div className="form_group">
                <label htmlFor="whatsup">
                  <img src={whatsup} alt="WhatsUp" />
                </label>
                <input
                  type="tel"
                  placeholder="Eg : +91 2456456446"
                  name="whatsup"
                  id="whatsup"
                  value={WhatsUp}
                  onChange={(e) => setWhatsUp(e.target.value)}
                />
              </div>
              <div className="form_group">
                <label htmlFor="insta">
                  <img src={insta} alt="Insta" />
                </label>
                <input
                  type="text"
                  placeholder="Eg : http://shorts.mp4"
                  name="insta"
                  id="insta"
                  value={Instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                />
              </div>
              <div className="form_group">
                <label htmlFor="twiter">
                  <img src={twiter} alt="Twiter" />
                </label>
                <input
                  type="text"
                  placeholder="Eg : http://shorts.mp4"
                  name="twiter"
                  id="twiter"
                  value={Twiter}
                  onChange={(e) => setTwiter(e.target.value)}
                />
              </div>
              {SocialMediaData != undefined ? (
                <div className="form_submit">
                  <button onClick={handleSocialMediaFormEdit}>
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

export default SocialMedia;
