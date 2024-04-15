import React, { useRef, useEffect, useState } from "react";
import "./NewCardDesign1.scss";
import banner_img from "../../../assets/Background/download.svg";
import avatar from "../../../assets/User_Auth/profile.png";
import "react-slideshow-image/dist/styles.css";
import { Link, useParams } from "react-router-dom";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "react-quill/dist/quill.snow.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import axios from "axios";
import emailjs from "@emailjs/browser";
//Service
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

//QRCODE:

import qrcode from "../../../assets/QRCODE/qr.svg";
//Testimonial
import { useContext } from "react";
import formContext from "../../Context/FormContext";

// ProductSlider
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";

import product1 from "../../../assets/New_Design/1.jpg";
import product2 from "../../../assets/New_Design/2.jpg";
import product3 from "../../../assets/New_Design/3.jpg";
import product4 from "../../../assets/New_Design/4.jpg";
import product5 from "../../../assets/New_Design/5.jpg";
const NewCardDesign1 = () => {
  let id = useParams();
  let [formData, setFormData] = useState({
    clientFullName1: "",
    clientEmail1: "",
    clientMobileNumber1: "",
    clientInquiries1: "",
  });
   //Popup show :
   let [popup, setPopup] = useState(false);
     //Form Submit loader :
  let [loading, setLoading] = useState(false);
   //Collect form data by using useRef:
   let form = useRef();
    let popUp_open = {
      hide: { opacity: 0, scale: 0.2 },
      show: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring" },
      },
    };
    //recieve email and send email to user by  emailJS:
    const sendEmail = (e) => {
      // e.preventDefault();
  
      emailjs
        .sendForm(
          "service_8jjtsu7",
          "template_5ro61jb",
          form.current,
          "6JJQhAKoQ9fGApzig"
        )
        .then(
          (result) => {
            // console.log(result.text);
            // console.log('message sent success')
          },
          (error) => {
            // console.log(error.text);
          }
        );
    };
    //Form Logic :
    let formik = useFormik({
      initialValues: {
        clientFullName1: "",
        clientEmail1: "",
        clientMobileNumber1: "",
        clientInquiries1: "",
      },
  
      //Validation :
      validationSchema: Yup.object({
        clientFullName1: Yup.string()
          .min(3, "Min 3 char required")
          .max(20, "Name must be 20 character or less")
          .required("Name is required"),
        clientEmail1: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        clientMobileNumber1: Yup.string()
          .min(10, "Invalid Mobile number")
          .max(10, "Invalid Mobile number")
          .required("MobileNumber is required"),
        clientInquiries1: Yup.string()
          .min(10, "Minimum 10 character required")
          .max(100, "Inquiries must be 100 character or less")
          .required("Inquiries is required"),
      }),
      //Form Submit :
      onSubmit: (values) => {
        setFormData({
          clientFullName1: values.clientFullName1,
          clientEmail1: values.clientEmail1,
          clientMobileNumber1: values.clientMobileNumber1,
          clientInquiries1: values.clientInquiries1,
        });
  
        sendEmail();
        setLoading(!loading);
        setConfetti(true);
        setTimeout(() => {
          setPopup(!popup);
          setLoading(false);
          setConfetti(!confetti);
          formik.values.clientFullName1 = "";
          formik.values.clientEmail1 = "";
          formik.values.clientMobileNumber1 = "";
          formik.values.clientInquiries1 = "";
        }, 4000);
  
        setTimeout(() => {
          setPopup(false);
        }, 7000);
        StopConfetti();
      },
    });
  let [feedbackForm, setFeedbackForm] = useState({
    userName: "",
    userFeedback: "",
    currentRatting: 0,
  });
  let [feedbackLoader, setFeedbackLoader] = useState(false);
  let [commentOpen, setCommentOpen] = useState(false);
  let [AllFeedBacks, setAllFeedBacks] = useState([]);
  const AutoplaySlider = withAutoplay(AwesomeSlider);
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
  //Form Logic :
  let feedbackFormik = useFormik({
    initialValues: {
      userName: "",
      userFeedback: "",
      currentRatting: 0,
    },

    //Validation :
    validationSchema: Yup.object({
      userName: Yup.string()
        .min(3, "Min 3 char required")
        .max(50, "Name must be 20 character or less")
        .required("Name is required"),
      userFeedback: Yup.string()
        .min(10, "Minimum 10 character required")
        .max(400, "Feedback must be 100 character or less")
        .required("Feedback is required"),
    }),
    //Form Submit :
    onSubmit: async (values) => {
      setFeedbackForm({
        userName: values.userName,
        userFeedback: values.userFeedback,
        currentRatting: values.currentRatting,
      });
      feedBackSubmit();
      setTimeout(() => {
        feedbackFormik.values.userName = "";
        feedbackFormik.values.userFeedback = "";
        feedbackFormik.values.currentRatting = 0;
      }, 4000);
    },
  });
  //Start Ratting:
  // let currentRatting=0;
  function handleRatting(e) {
    let star = e.target;
    // console.log(star,star.classList);
    if (star.classList.contains("star")) {
      let ratting = parseInt(star.dataset.rating, 10);
      highlightStar(ratting);
    }
  }
  //Remove Ratting:
  function removeRatting() {
    highlightStar(feedbackForm.currentRatting);
  }
  //Staring Setted
  function RattingSetted(e) {
    let starRating = document.querySelector(".ratting_container");
    let star = e.target;
    // console.log(star,star.classList);
    if (star.classList.contains("star")) {
      feedbackForm.currentRatting = parseInt(star.dataset.rating, 10);
      starRating.setAttribute("data-rating", feedbackForm.currentRatting);
      highlightStar(feedbackForm.currentRatting);
    }
  }

  //Highlight star color:
  function highlightStar(ratting) {
    let stars = document.querySelectorAll(".star");

    stars.forEach((star, index) => {
      if (index < ratting) {
        star.classList.add("highlight");
      } else {
        star.classList.remove("highlight");
      }
    });
  }
  return (
    <>
      <div className="newCard_design_container">
        <div className="card_design_box">
          {/* Banner,logo,userName */}
          <div className="box-1">
            <div className="banner">
              <div className="banner_image">
                <img src={banner_img} alt="banner" />
              </div>

              <div className="user_basic">
                <div className="logo">
                  <img src={avatar} alt="logo" />
                </div>
                <div className="user_Name">
                  <p>Siva Kathikeyan</p>
                  <small>Tamil Bollywood Actor</small>
                </div>
              </div>

              <div className="svg_bottom">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#e0f0e8"
                    fill-opacity="1"
                    d="M0,32L34.3,48C68.6,64,137,96,206,106.7C274.3,117,343,107,411,117.3C480,128,549,160,617,176C685.7,192,754,192,823,208C891.4,224,960,256,1029,256C1097.1,256,1166,224,1234,197.3C1302.9,171,1371,149,1406,138.7L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          {/* //Summary */}
          <div className="box-2">
            <div className="user_Personal_Detail">
              <div className="summary">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, incidunt corrupti dignissimos amet asperiores quo
                  illum, molestiae quas maiores ipsa harum laudantium temporibus
                  excepturi blanditiis!
                </p>
              </div>
            </div>
          </div>
          {/* ContactDetails */}
          <div className="box-3">
            <div className="contact_details">
              <div className="box">
                <i className="bx bxl-gmail"></i>
                <div className="data">
                  <p>kodiyarasu01@gmail.com</p>
                  <small>Email</small>
                </div>
              </div>
              <div className="box">
                <i className="bx bx-mail-send"></i>
                <div className="data">
                  <p>akodi92@gmail.com</p>
                  <small>Alternate Email</small>
                </div>
              </div>
              <div className="box">
                <i className="bx bxs-phone-call"></i>
                <div className="data">
                  <p>+91 8825457794</p>
                  <small>Mobile Number</small>
                </div>
              </div>
              <div className="box">
                <i className="bx bx-phone-call"></i>
                <div className="data">
                  <p>+91 1654967987</p>
                  <small>Alternate Mobile Number</small>
                </div>
              </div>
              <div className="box">
                <i className="bx bxs-happy-heart-eyes"></i>
                <div className="data">
                  <p>26/01/2000</p>
                  <small>Date Of Birth</small>
                </div>
              </div>
              <div className="box">
                <i className="bx bx-map"></i>
                <div className="data">
                  <p>Ariyalur,TamilNadu-621714</p>
                  <small>Address</small>
                </div>
              </div>
            </div>
          </div>

          {/* SocialMedias */}
          <div className="box-4">
            <div className="social_medias">
              <a href="" target="_blank" title="website">
                <i className="bx bx-globe"></i>
              </a>
              <a href="" target="_blank" title="location">
                <i className="bx bxs-map-alt"></i>
              </a>
              <a href="" target="_blank" title="facebook">
                <i className="bx bxl-facebook-circle"></i>
              </a>
              <a href="" target="_blank" title="instagram">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="" target="_blank" title="youtube">
                <i className="bx bxl-youtube"></i>
              </a>
              <a href="" target="_blank" title="linkedin">
                <i className="bx bxl-linkedin-square"></i>
              </a>
            </div>
          </div>

          {/* products */}
          <div className="box-5">
            <div className="product_title">
              <h4>Products</h4>
            </div>

            <div className="products">
              <AutoplaySlider
                infinite="true"
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={2000}
              >
                <div className="product_item">
                  <img src={product1} alt="product" />
                  <p>FrontEnd Development</p>

                  <small>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </small>
                  <button>
                    <span> ₹</span> <p>5000</p>
                  </button>
                </div>
                <div className="product_item">
                  <img src={product2} alt="product" />
                  <p>Backend Development</p>

                  <small>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </small>

                  <button>
                    <span> ₹</span> <p>5000</p>
                  </button>
                </div>
                <div className="product_item">
                  <img src={product3} alt="product" />
                  <p>FullStack Development</p>

                  <small>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </small>

                  <button>
                    <span> ₹</span> <p>5000</p>
                  </button>
                </div>
                <div className="product_item">
                  <img src={product5} alt="product" />
                  <p>FullStack12 Development</p>

                  <small>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </small>

                  <button>
                    <span> ₹</span> <p>5000</p>
                  </button>
                </div>
              </AutoplaySlider>
            </div>
            <div className="all_products">
              <Link to="/all_products">
                <i className="bx bx-chevrons-right bx-flashing"></i> See All
                Products
              </Link>
            </div>
          </div>
          {/* Service */}

          <div className="box-6">
            <div className="service_title">
              <h4>Our Services</h4>
            </div>

            <div className="services">
              <div className="box">
                <i className="bx bxl-deezer"></i>
                <p>Digital Marketting</p>

                <small>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  recusandae inventore blanditiis eveniet esse sapiente!
                </small>
              </div>
              <div className="box">
                <i className="bx bxl-react"></i>
                <p>Website Development</p>

                <small>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  recusandae inventore blanditiis eveniet esse sapiente!
                </small>
              </div>
              <div className="box">
                <i className="bx bxl-wordpress"></i>
                <p>WordPress Website's</p>

                <small>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  recusandae inventore blanditiis eveniet esse sapiente!
                </small>
              </div>
              <div className="box">
                <i className="bx bxl-instagram-alt"></i>
                <p>Social Media Management</p>

                <small>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  recusandae inventore blanditiis eveniet esse sapiente!
                </small>
              </div>
            </div>
            <div className="all_services">
              <Link to="/all_services">
                <i className="bx bx-chevrons-right bx-flashing"></i> See All
                Services
              </Link>
            </div>
          </div>

          {/* gallery */}

          <div className="box-7">
            <div className="gallery_title">
              <h4>Gallery</h4>
            </div>
            <div className="gallery">
              <img src={product4} alt="gallery" />
            </div>
          </div>

          {/* QRCode */}

          <div className="box-8">
            <div className="qrcode_title">
              <h4>QRCode Scan</h4>
            </div>

            <div className="qrcode">
              <div className="qrcode_images">
                <img src={avatar} alt="logo" />
                <i className="bx bx-chevrons-right bx-fade-left"></i>
                <img src={qrcode} alt="qrcode" />
              </div>

              <svg
                className="qrsvg_top"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#753422"
                  fill-opacity="1"
                  d="M0,0L40,16C80,32,160,64,240,69.3C320,75,400,53,480,42.7C560,32,640,32,720,58.7C800,85,880,139,960,176C1040,213,1120,235,1200,229.3C1280,224,1360,192,1400,176L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                ></path>
              </svg>
              <svg
                className="qrsvg_bottom"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#753422"
                  fill-opacity="1"
                  d="M0,224L80,213.3C160,203,320,181,480,149.3C640,117,800,75,960,85.3C1120,96,1280,160,1360,192L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                ></path>
              </svg>
            </div>
          </div>
          {/* Feedback */}

          <div className="box-9">
            <div className="feedback_title">
              <h4>Give Feedback</h4>
            </div>
            <form action="" onSubmit={feedbackFormik.handleSubmit}>
              <div className="form_group">
                <label
                  htmlFor="clientName_Input"
                  className={`${
                    feedbackFormik.errors.userName ? "error" : ""
                  } `}
                >
                  {feedbackFormik.touched.userName &&
                  feedbackFormik.errors.userName
                    ? feedbackFormik.errors.userName
                    : "Your Name"}
                  <span>
                    <sup>*</sup>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="userName"
                  id="userName"
                  // value={userName}
                  // onChange={(e)=>setUserName(e.target.value)}
                  value={feedbackFormik.values.userName}
                  onChange={feedbackFormik.handleChange}
                  onBlur={feedbackFormik.handleBlur}
                />
                <div className="icon">
                  <i className="bx bx-mobile"></i>
                </div>
              </div>
              <div className="form_group">
                <label
                  htmlFor="clientFeedBack_Input"
                  className={`${
                    feedbackFormik.errors.userFeedback ? "error" : ""
                  } `}
                >
                  {feedbackFormik.touched.userFeedback &&
                  feedbackFormik.errors.userFeedback
                    ? feedbackFormik.errors.userFeedback
                    : "Your FeedBack"}
                  <span>
                    <sup>*</sup>
                  </span>
                </label>
                <textarea
                  id="userFeedback"
                  name="userFeedback"
                  cols="30"
                  rows="7"
                  placeholder="Enter your Feedback"
                  // value={userFeedback}
                  // onChange={(e)=>setUserFeedback(e.target.value)}
                  value={feedbackFormik.values.userFeedback}
                  onChange={feedbackFormik.handleChange}
                  onBlur={feedbackFormik.handleBlur}
                ></textarea>
                <div className="icon">
                  <i className="bx bxs-comment-detail"></i>
                </div>
              </div>
              <div className="form_group">
                <label
                  htmlFor="clientName_Input"
                  className={`${
                    feedbackFormik.errors.currentRatting ? "error" : ""
                  } `}
                >
                  {feedbackFormik.touched.currentRatting &&
                  feedbackFormik.errors.currentRatting
                    ? feedbackFormik.errors.currentRatting
                    : "Ratting"}
                  <span>
                    <sup>*</sup>
                  </span>
                </label>
                <div
                  className="ratting_container"
                  data-rating="0"
                  name="currentRatting"
                  id="currentRatting"
                  onMouseOver={handleRatting}
                  onMouseLeave={removeRatting}
                  onClick={RattingSetted}
                  // value={currentRatting}
                  // onChange={(e)=>setCurrentRatting(e.target.value)}
                  value={feedbackFormik.values.currentRatting}
                  onChange={feedbackFormik.handleChange}
                  onBlur={feedbackFormik.handleBlur}
                >
                  <span className="ratting_star">
                    <i className="bx bxs-star star" data-rating="1"></i>
                  </span>
                  <span className="ratting_star">
                    <i className="bx bxs-star star" data-rating="2"></i>
                  </span>
                  <span className="ratting_star">
                    <i className="bx bxs-star star" data-rating="3"></i>
                  </span>
                  <span className="ratting_star">
                    <i className="bx bxs-star star" data-rating="4"></i>
                  </span>
                  <span className="ratting_star">
                    <i className="bx bxs-star star" data-rating="5"></i>
                  </span>
                </div>
                <div className="icon">
                  <i className="bx bxs-award bx-tada"></i>
                </div>
              </div>
              <div className="form_actions">
                <button type="submit">Send Feedback</button>
              </div>
            </form>

            {/* //Feedback messages */}
            <div className="Feedback_container">
              <div className="feeback_title">
                {commentOpen ? (
                  <button onClick={() => setCommentOpen(false)}>
                    <i className="bx bxs-message-rounded-dots"></i>
                    Hide All Comments
                  </button>
                ) : (
                  <button onClick={() => setCommentOpen(true)}>
                    <i className="bx bxs-message-rounded-dots"></i>See All
                    Comments
                  </button>
                )}

                {feedbackLoader ? (
                  <span className="feedBack_loader"></span>
                ) : (
                  ""
                )}
              </div>

              {commentOpen ? (
                <div className="comment_box">
                  <div className="message">
                    <div className="user_detail">
                      <div className="profile">
                        <img src={avatar} alt="profile" />
                      </div>
                      <div className="details">
                        <div className="userName">
                          <p>
                            kodiyarasu
                            <i className="bx bxs-user-check"></i>
                          </p>
                        </div>
                        <div className="stars">
                          <div
                            className="ratting_container1"
                            // data-rating={data.currentRatting}
                            name="currentRatting"
                            // id="currentRatting"
                            // id={
                            //   data.currentRatting == 0
                            //     ? "noRatting"
                            //     : "" || data.currentRatting == 1
                            //     ? "singleRatting"
                            //     : "" || data.currentRatting == 2
                            //     ? "doubleRatting"
                            //     : "" || data.currentRatting == 3
                            //     ? "ThreeRatting"
                            //     : "" || data.currentRatting == 4
                            //     ? "fourRatting"
                            //     : "" || data.currentRatting == 5
                            //     ? "fullRatting"
                            //     : ""
                            // }
                            // value={data.currentRatting}
                          >
                            <span className="ratting_star">
                              <i
                                className="bx bxs-star star1"
                                data-rating="1"
                              ></i>
                            </span>
                            <span className="ratting_star">
                              <i
                                className="bx bxs-star star1"
                                data-rating="2"
                              ></i>
                            </span>
                            <span className="ratting_star">
                              <i
                                className="bx bxs-star star1"
                                data-rating="3"
                              ></i>
                            </span>
                            <span className="ratting_star">
                              <i
                                className="bx bxs-star star1"
                                data-rating="4"
                              ></i>
                            </span>
                            <span className="ratting_star">
                              <i
                                className="bx bxs-star star1"
                                data-rating="5"
                              ></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="comments">
                      <i className="bx bx-chat"></i>
                      <span>Hi Makkale</span>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          {/* EnquireyForm */}

          <div className="box-10">
            <div className="enquiry_title">
              <h4>Make Inquiries</h4>
            </div>
            <div className="equiry_container">
                        <div className="enquiry_heading">
                          <h5> Be in Touch </h5>
                          <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/fluency/48/group-background-selected.png"
                            alt="group-background-selected"
                          />
                        </div>
                        <form
                          action=""
                          ref={form}
                          onSubmit={formik.handleSubmit}
                        >
                          {/* //First Name */}
                          <div className="form_group">
                            <label
                              htmlFor="clientFullName1"
                              className={`${
                                formik.errors.clientFullName1 ? "error" : ""
                              } `}
                            >
                              {formik.touched.clientFullName1 &&
                              formik.errors.clientFullName1
                                ? formik.errors.clientFullName1
                                : "FullName"}
                              <span>
                                <sup>*</sup>
                              </span>
                            </label>
                            <input
                              type="text"
                              placeholder="Enter your Fullname "
                              name="clientFullName1"
                              id="clientFullName1"
                              value={formik.values.clientFullName1}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            <div className="icon">
                              <i className="bx bxs-user"></i>
                            </div>
                          </div>
                          {/* //Last Name */}
                          <div className="form_group">
                            <label
                              htmlFor="clientEmail1"
                              className={`${
                                formik.errors.clientEmail1 ? "error" : ""
                              } `}
                            >
                              {formik.touched.clientEmail1 &&
                              formik.errors.clientEmail1
                                ? formik.errors.clientEmail1
                                : "Email"}

                              <span>
                                <sup>*</sup>
                              </span>
                            </label>
                            <input
                              type="email"
                              placeholder="Eg : abc@gmail.com"
                              name="clientEmail1"
                              id="clientEmail1"
                              value={formik.values.clientEmail1}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            <div className="icon">
                              <i className="bx bx-envelope"></i>
                            </div>
                          </div>
                          <div className="form_group">
                            <label
                              htmlFor="clientMobileNumber1"
                              className={`${
                                formik.errors.clientMobileNumber1 ? "error" : ""
                              } `}
                            >
                              {formik.touched.clientMobileNumber1 &&
                              formik.errors.clientMobileNumber1
                                ? formik.errors.clientMobileNumber1
                                : "Mobile Number"}
                              <span>
                                <sup>*</sup>
                              </span>
                            </label>
                            <input
                              type="tel"
                              placeholder="Eg : +91 456789714"
                              name="clientMobileNumber1"
                              id="clientMobileNumber1"
                              value={formik.values.clientMobileNumber1}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            <div className="icon">
                              <i className="bx bx-mobile"></i>
                            </div>
                          </div>
                          <div className="form_group">
                            <label
                              htmlFor="clientInquiries1"
                              className={`${
                                formik.errors.clientInquiries1 ? "error" : ""
                              } `}
                            >
                              {formik.touched.clientInquiries1 &&
                              formik.errors.clientInquiries1
                                ? formik.errors.clientInquiries1
                                : "Fill your Quiries"}
                              <span>
                                <sup>*</sup>
                              </span>
                            </label>
                            <textarea
                              id="clientInquiries1"
                              name="clientInquiries1"
                              cols="30"
                              rows="7"
                              placeholder="Enter your Quiries"
                              value={formik.values.clientInquiries1}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            ></textarea>
                            <div className="icon">
                              <i className="bx bxs-comment-detail"></i>
                            </div>
                          </div>

                          <div className="form_actions">
                            <button type="submit">
                              Send Message{" "}
                              {loading ? (
                                <span className="form_loader"></span>
                              ) : (
                                ""
                              )}
                            </button>
                          </div>

                          <motion.div className="popup_container">
                            {popup ? (
                              <motion.div
                                className="popup"
                                variants={popUp_open}
                                initial="hide"
                                animate="show"
                              >
                                <motion.i
                                  onClick={() => setPopup(false)}
                                  className="uil uil-times"
                                ></motion.i>
                                <h4>Thanks for your responce!</h4>
                                <small>{formData.name}</small>
                                <p>Your email successfully received </p>
                                <small>{formData.email}</small>
                                <small>Will let you know shortly...</small>
                              </motion.div>
                            ) : (
                              ""
                            )}
                          </motion.div>
                      
                        </form>
                      </div>
          </div>

          {/* Footer */}

          <div className="box-11">
                {/* Copyrights */}
                <div className="copyright">
                      <p>All Copyright Reserved &copy; 2024 myvirtualcard.in</p>
                    </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCardDesign1;

{
  /* <Slide
className="product_slide"
slidesToScroll={1}
slidesToShow={2}
indicators={true}
autoplay
{...properties}
autoplayInterval={1000}
>
<div className="box" >
  <img src={product1} alt="taxi" />

  <div className="title">
    <h4>FrontEnd Development</h4>
    <button>
      Rs : <span>8000</span>
    </button>
  </div>
  <div className="product_summary">
    <p>
      
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Recusandae expedita illo totam, corrupti est impedit!
    </p>
  </div>
</div>
<div className="box" >
  <img src={product2} alt="taxi" />

  <div className="title">
    <h4>FrontEnd Development</h4>
    <button>
      Rs : <span>8000</span>
    </button>
  </div>
  <div className="product_summary">
    <p>
      
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Recusandae expedita illo totam, corrupti est impedit!
    </p>
  </div>
</div>
<div className="box" >
  <img src={product4} alt="taxi" />

  <div className="title">
    <h4>FrontEnd Development</h4>
    <button>
      Rs : <span>8000</span>
    </button>
  </div>
  <div className="product_summary">
    <p>
      
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Recusandae expedita illo totam, corrupti est impedit!
    </p>
  </div>
</div>
<div className="box" >
  <img src={product5} alt="taxi" />

  <div className="title">
    <h4>FrontEnd Development</h4>
    <button>
      Rs : <span>8000</span>
    </button>
  </div>
  <div className="product_summary">
    <p>
      
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Recusandae expedita illo totam, corrupti est impedit!
    </p>
  </div>
</div>
</Slide> */
}
