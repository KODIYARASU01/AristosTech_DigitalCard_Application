import React, { useRef, useEffect, useState } from "react";
import "./NewCard2.scss";
import banner from "../../../assets/Background/12.jpg";
import avatar from "../../../assets/avatar_2.png";
import logo from "../../../assets/avatar_2.png";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import profile from "../../../assets/User_Auth/profile.png";
import { useParams } from "react-router-dom";
import qr1 from "../../../assets/QRCODE/qr-code-isometric.svg";
import qr2 from "../../../assets/QRCODE/qr-code-monochromatic.svg";
import qr3 from "../../../assets/QRCODE/qr-code-outline.svg";
import { Editor } from "primereact/editor";
import loader from "../../../assets/loader.gif";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Testimonial
import { useContext } from "react";

const NewCard2 = () => {
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
  let [formData, setFormData] = useState({
    clientFullName1: "",
    clientEmail1: "",
    clientMobileNumber1: "",
    clientInquiries1: "",
  });

  let [feedbackForm, setFeedbackForm] = useState({
    userName: "",
    userFeedback: "",
    currentRatting: 0,
  });
  let [feedbackLoader, setFeedbackLoader] = useState(false);
  let [commentOpen, setCommentOpen] = useState(false);
  let [AllFeedBacks, setAllFeedBacks] = useState([]);
  // let[userName,setUserName]=useState('');
  // let[userFeedback,setUserFeedback]=useState('');
  // let[currentRatting,setCurrentRatting]=useState(0)
  //Form Submit loader :
  let [loading, setLoading] = useState(false);

  //Confetti Pieces :
  const [pieces, setPieces] = useState(250);
  //Confetti iniital false:
  let [confetti, setConfetti] = useState(false);
  //Popup show :
  let [popup, setPopup] = useState(false);
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

  let id = useParams();
  let [vCardLoader, setVCardLoader] = useState(false);
  //Confetti function :
  //Confetti function :
  const StopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 7000);
  };

  // Retrieve token from local storage or wherever it's stored
  let localStorageDatas = JSON.parse(localStorage.getItem("datas"));
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

  //AllFeedbackFetching:

  async function fetchAllMessage() {
    setFeedbackLoader(true);
    axios
      .get(
        `https://aristostech-digitalcard-application.onrender.com/feedback/${id.id}`
      )
      .then((res) => {
        setAllFeedBacks(res.data.fetchData);
        setCommentOpen(!commentOpen);
        setFeedbackLoader(false);
      })
      .catch((error) => {
        console.log(error);
        setCommentOpen(false);
        setFeedbackLoader(false);
      });
  }
  useEffect(() => {
    let getAllUserData = async () => {
      setVCardLoader(true);
      await axios
        .get(
          `https://aristostech-digitalcard-application.onrender.com/vcard/getuser?id=${id.id}`
        )
        .then((res) => {
          setAllData(res.data.data);

          setVCardLoader(false);
        })
        .catch((error) => {
          console.log(error);
          setVCardLoader(false);
        });
    };
    getAllUserData();
  }, []);

  const buttonStyle = {
    width: "0px",
    background: "none",
    opacity: 0,
    border: "0px",
    padding: "0px",
  };
  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </button>
    ),
  };
  //Testimonial
  const buttonStyle2 = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "none",
    border: "0px",
  };
  const properties2 = {
    prevArrow: (
      <button style={{ ...buttonStyle2 }}>
        <i
          className="bx bx-chevron-left bx-fade-right"
          style={{ fontSize: "2.3rem", color: "skyblue" }}
        ></i>
        {/* <img width="18" height="18" src="https://img.icons8.com/fluency/48/back.png" alt="back"/> */}
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle2 }}>
        <i
          class="bx bx-chevron-right bx-fade-right"
          style={{ fontSize: "2.3rem", color: "skyblue" }}
        ></i>
      </button>
    ),
  };
  const buttonStyle1 = {
    width: "0px",
    background: "none",
    opacity: 0,
    border: "0px",
    padding: "0px",
  };
  const properties1 = {
    prevArrow: (
      <button style={{ ...buttonStyle1 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </button>
    ),
  };
  // // Function to strip HTML tags from a string
  const stripHtmlTags1 = (html) => {
    if (html === null || typeof html === "undefined") {
      return ""; // Return an empty string if html is null or undefined
    }
    const strippedHtml = html.replace(/(<([^>]+)>)/gi, "");
    return strippedHtml;
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

  async function feedBackSubmit() {
    // e.preventDefault();
    await axios
      .post(
        `https://aristostech-digitalcard-application.onrender.com/feedback/${id.id}`,
        feedbackForm
      )
      .then((res) => {
        try {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
        } catch (error) {
          console.log(error);
          toast.error(res.data.error, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
        }
      })
      .catch((error) => {
        toast.error(error.response.data.error, {
          position: "top-center",
          autoClose: 2000,
          transition: Flip,
        });
      });
  }
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
      {vCardLoader ? (
        <div className="vcard_loader">
          <i className="bx bxl-go-lang bx-flashing"></i>
          <span class="vcard_loaders"></span>
        </div>
      ) : (
        <motion.div className="newCard_container2">
          {AllData.BasicDetail != undefined ? (
            <motion.div className="card_box">
              <ToastContainer
                closeOnClick
                autoClose={2000}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              {AllData.BasicDetail.map((data, index) => {
                return (
                  <motion.div className="box-1" key={index}>
                    <svg
                      className="svg_top"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                    >
                      <path
                        fill="#003253"
                        fillOpacity="1"
                        d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,149.3C1120,149,1280,203,1360,229.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                      ></path>
                    </svg>

                    <div className="Image_details">
                      <div className="banner">
                        <img src={data.banner || background} alt="banner" />
                      </div>
                      <div className="logo">
                        <img src={data.logo || avatar} alt="avatar" />
                      </div>
                    </div>

                    <div className="basic_details">
                      <div className="author_name">
                        <h4>{data.fullName || "Jayakumar "}</h4>
                      </div>
                      <div className="professional">
                        <h6>
                          {data.profession ||
                            "AritosTech India Private Limited "}
                        </h6>
                      </div>
                      <div className="summary">
                        <p>
                          {stripHtmlTags1(data.summary) ||
                            `We're designers, developers, engineers, marketers, and pretty
    much everything else for your business need. However, it is not
    how we choose to introduce ourselves.`}
                        </p>
                      </div>
                    </div>

                    {AllData.SocialMediaDetails != undefined ? (
                      <div className="social_medias">
                        <a
                          href={AllData.SocialMediaDetails[0].Twiter}
                          target="_blank"
                        >
                          <i className="uil uil-globe"></i>
                        </a>
                        <a
                          href={AllData.SocialMediaDetails[0].Facebook}
                          target="_blank"
                        >
                          <i className="uil uil-facebook-f"></i>
                        </a>
                        <a
                          href={AllData.SocialMediaDetails[0].Instagram}
                          target="_blank"
                        >
                          <i className="uil uil-instagram"></i>
                        </a>
                        <a
                          href={AllData.SocialMediaDetails[0].WhatsUp}
                          target="_blank"
                        >
                          <i className="uil uil-whatsapp"></i>
                        </a>
                        <a
                          href={AllData.SocialMediaDetails[0].Twiter}
                          target="_blank"
                        >
                          <i className="uil uil-twitter"></i>
                        </a>
                      </div>
                    ) : (
                      ""
                    )}

                    {/* //Contact */}
                    {AllData.ContactDetails != undefined ? (
                      <motion.div>
                        <motion.div className="contact_container">
                          <div className="contact_title">
                            <h4>Contact</h4>
                          </div>

                          <div className="contact_lists">
                            <div className="list">
                              <div className="image">
                                <i className="uil uil-envelope-edit"></i>
                              </div>
                              <div className="details">
                                <h4>
                                  {AllData.ContactDetails[0].Email ||
                                    "kodiyarasu01@gmail.com"}
                                </h4>
                                <h5>Email</h5>
                              </div>
                            </div>
                            <div className="list">
                              <div className="image">
                                <i className="uil uil-envelope-add"></i>
                              </div>
                              <div className="details">
                                <h4>
                                  {AllData.ContactDetails[0].AlternateEmail ||
                                    "akodi01@gmail.com"}
                                </h4>
                                <h5>Alternate Email</h5>
                              </div>
                            </div>
                            <div className="list">
                              <div className="image">
                                <i className="uil uil-calling"></i>
                              </div>
                              <div className="details">
                                <h4>
                                  {AllData.ContactDetails[0].MobileNumber ||
                                    "+91 8825457794"}
                                </h4>
                                <h5>Mobile Number</h5>
                              </div>
                            </div>
                            <div className="list">
                              <div className="image">
                                <i className="uil uil-phone-alt"></i>
                              </div>
                              <div className="details">
                                <h4>
                                  {AllData.ContactDetails[0]
                                    .AlternateMobileNumber || "+91 63456464646"}
                                </h4>
                                <h5>Alternate MobileNumber</h5>
                              </div>
                            </div>
                            <div className="list">
                              <div className="image">
                                <i className="uil uil-calendar-alt"></i>
                              </div>
                              <div className="details">
                                <h4>
                                  {AllData.ContactDetails[0].DOB ||
                                    "22/01/2021"}
                                </h4>
                                <h5>Year of Estimation</h5>
                              </div>
                            </div>
                            <div className="list">
                              <div className="image">
                                <i className="uil uil-location-point"></i>
                              </div>
                              <div className="details">
                                <h4>
                                  {stripHtmlTags1(
                                    AllData.ContactDetails[0].Address
                                  ) || `Chennai , T-Nagar,Tamilnadu`}
                                </h4>
                                <h5>Address</h5>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                        <svg
                          className="svg"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1440 320"
                        >
                          <path
                            fill="#003253"
                            fillOpacity="1"
                            d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,149.3C1120,149,1280,203,1360,229.3L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                          ></path>
                        </svg>
                      </motion.div>
                    ) : (
                      ""
                    )}
                  </motion.div>
                );
              })}
              {/* Box-1 Basic Detail and Contact */}

              {/* Box-2 Service */}
              {AllData.ServiceDetails.length >= 1 ? (
                <motion.div className="box-2">
                  <div className="our_service">
                    <div className="service_title">
                      <h4>Our Services</h4>
                    </div>

                    <div className="service_lists">
                      {AllData.ServiceDetails != undefined
                        ? AllData.ServiceDetails.map((data, index) => {
                            return (
                              <div className="list" key={index}>
                                <div className="service_image">
                                  <img src={data.serviceImage} alt="frontEnd" />
                                </div>
                                <div className="service1_title">
                                  <h4>
                                    {data.serviceTitle ||
                                      "FrontEnd Development"}
                                  </h4>
                                </div>
                                <div className="service_detail">
                                  <p>
                                    {stripHtmlTags1(data.serviceSummary) ||
                                      `   Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas maxime sapiente dolorum nemo nobis eveniet quaerat
                      provident rem ut enim esse, necessitatibus praesentium
                      voluptatum nam.`}
                                  </p>
                                </div>
                                <div className="service_cost">
                                  <button>Rs 15000</button>
                                </div>
                              </div>
                            );
                          })
                        : ""}
                    </div>
                  </div>
                </motion.div>
              ) : (
                ""
              )}

              {/* Box-3 QRCode */}
              {AllData.QRCodeDetails.length >= 1 ? (
                <div>
                  {AllData.QRCodeDetails.map((data, index) => {
                    return (
                      <motion.div className="box-3" key={index}>
                        <svg
                          className="svg_top"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1440 320"
                        >
                          <path
                            fill="#003253"
                            fillOpacity="1"
                            d="M0,64L34.3,85.3C68.6,107,137,149,206,165.3C274.3,181,343,171,411,160C480,149,549,139,617,160C685.7,181,754,235,823,245.3C891.4,256,960,224,1029,197.3C1097.1,171,1166,149,1234,122.7C1302.9,96,1371,64,1406,48L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                          ></path>
                        </svg>
                        <div className="qrCode_container">
                          <div className="qrcode_title">
                            <h4>
                              QR Code <img src={qr3} alt="img" />
                            </h4>
                          </div>

                          <div className="illustration1">
                            <img src={qr2} alt="qr" />
                          </div>
                          <div className="illustration2">
                            <img src={qr1} alt="qr" />
                          </div>
                          <div className="qrCode_image">
                            <img src={data.QRCodeImage} alt="qrs" />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}

                  <svg
                    className="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                  >
                    <path
                      fill="#003253"
                      fillOpacity="1"
                      d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,149.3C1120,149,1280,203,1360,229.3L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                    ></path>
                  </svg>
                </div>
              ) : (
                ""
              )}

              {/* Box-4 Product */}
              {AllData.ProductDetails.length >= 1 ? (
                <motion.div className="box-4">
                  <div className="product_container">
                    <div className="product_title">
                      <h4>Our Products</h4>
                    </div>
                    <Slide
                      className="product_slide"
                      slidesToScroll={1}
                      slidesToShow={2}
                      indicators={true}
                      autoplay
                      {...properties}
                      autoplayInterval={1000}
                    >
                      {AllData.ProductDetails.map((data, index) => {
                        return (
                          <div className="box" key={index}>
                            <img src={data.productImage} alt="taxi" />

                            <div className="title">
                              <h4>{data.productTitle}</h4>
                              <button>
                                Rs : <span>8000</span>
                              </button>
                            </div>
                            <div className="product_summary">
                              <p>
                                {stripHtmlTags1(data.productSummary) ||
                                  `  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Recusandae expedita illo totam, corrupti est impedit!`}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </Slide>
                  </div>
                </motion.div>
              ) : (
                ""
              )}
              {/* Box-5 Gallery */}
              {AllData.GalleryDetails.length >= 1 ? (
                <motion.div className="box_gallery">
                  {/* Gallery */}
                  <div className="gallery">
                    <div className="gallery_title">
                      <h4>Gallery</h4>
                    </div>
                    <Slide
                      className="slide"
                      slidesToScroll={1}
                      slidesToShow={1}
                      indicators={true}
                      autoplay
                      {...properties1}
                      autoplayInterval={1000}
                    >
                      {AllData.GalleryDetails.map((data, index) => {
                        return (
                          <div key={index} className="gall">
                            <img
                              src={
                                data.galleryImage != undefined
                                  ? data.galleryImage
                                  : background
                              }
                              alt="gallery"
                            />
                          </div>
                        );
                      })}
                    </Slide>
                  </div>
                </motion.div>
              ) : (
                ""
              )}

              {/* Box-6 Testimonial */}

              {AllData.TestimonialDetails.length >= 1 ? (
                <motion.div className="testimonial_con">
                  <div className="box-5">
                    <svg
                      className="testimonial_wave"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                    >
                      <path
                        fill="#003253"
                        fillOpacity="1"
                        d="M0,192L480,64L960,224L1440,64L1440,320L960,320L480,320L0,320Z"
                      ></path>
                    </svg>
                    <div className="testimonial_container">
                      <div className="testimonial_title">
                        <h4>Testimonials</h4>
                      </div>
                      <div className="testimonial_details">
                        <Slide
                          {...properties2}
                          slidesToScroll={1}
                          slidesToShow={1}
                          indicators={true}
                          autoplay
                        >
                          {AllData.TestimonialDetails.map((data, index) => {
                            return (
                              <div className="slide_1" key={index}>
                                <img
                                  className="TestimonialImage"
                                  src={data.clientImage || logo}
                                />

                                <div className="details">
                                  <p className="name">
                                    {data.clientName || "Marry"}
                                  </p>
                                  <small>
                                    {stripHtmlTags1(data.clientFeedback) ||
                                      ` Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Sunt dolores maiores nam quisquam magni
                          provident labore laboriosam asperiores culpa
                          molestiae!`}
                                  </small>
                                </div>
                              </div>
                            );
                          })}
                        </Slide>
                      </div>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                  >
                    <path
                      fill="#003253"
                      fillOpacity="1"
                      d="M0,192L480,64L960,224L1440,64L1440,0L960,0L480,0L0,0Z"
                    ></path>
                  </svg>
                </motion.div>
              ) : (
                ""
              )}
              {AllData.BasicDetail != undefined &&
              AllData.ServiceDetails != undefined &&
              AllData.ContactDetails != undefined &&
              AllData.ProductDetails != undefined &&
              AllData.GalleryDetails.length >= 1 ? (
                <motion.div>
                  {/* //FeedBack */}
                  <div className="box-6">
                    <div className="feedback_container">
                      <div className="feedback_heading">
                        <h5>Give Feedback Something About Us </h5>
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
                              feedbackFormik.errors.currentRatting
                                ? "error"
                                : ""
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
                              <i
                                className="bx bxs-star star"
                                data-rating="1"
                              ></i>
                            </span>
                            <span className="ratting_star">
                              <i
                                className="bx bxs-star star"
                                data-rating="2"
                              ></i>
                            </span>
                            <span className="ratting_star">
                              <i
                                className="bx bxs-star star"
                                data-rating="3"
                              ></i>
                            </span>
                            <span className="ratting_star">
                              <i
                                className="bx bxs-star star"
                                data-rating="4"
                              ></i>
                            </span>
                            <span className="ratting_star">
                              <i
                                className="bx bxs-star star"
                                data-rating="5"
                              ></i>
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
                            <button onClick={fetchAllMessage}>
                              <i className="bx bxs-message-rounded-dots"></i>See
                              All Comments
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
                            {AllFeedBacks.map((data, index) => {
                              return (
                                <div className="message" key={index}>
                                  <div className="user_detail">
                                    <div className="profile">
                                      <img src={profile} alt="profile" />
                                    </div>
                                    <div className="details">
                                      <div className="userName">
                                        <p>
                                          {data.userName}
                                          <i className="bx bxs-user-check"></i>
                                        </p>
                                      </div>
                                      <div className="stars">
                                        <div
                                          className="ratting_container1"
                                          data-rating={data.currentRatting}
                                          name="currentRatting"
                                          // id="currentRatting"
                                          id={
                                            data.currentRatting == 0
                                              ? "noRatting"
                                              : "" || data.currentRatting == 1
                                              ? "singleRatting"
                                              : "" || data.currentRatting == 2
                                              ? "doubleRatting"
                                              : "" || data.currentRatting == 3
                                              ? "ThreeRatting"
                                              : "" || data.currentRatting == 4
                                              ? "fourRatting"
                                              : "" || data.currentRatting == 5
                                              ? "fullRatting"
                                              : ""
                                          }
                                          value={data.currentRatting}
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
                                    <span>{data.userFeedback}</span>
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
                  </div>
                  {/* /Enquire */}
                  <div className="box-7">
                    <div className="enquiry">
                      <div className="inquire_title">
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
                          {confetti ? (
                            <Confetti
                              gravity={0.2}
                              numberOfPieces={pieces}
                              className="confetti"
                            />
                          ) : (
                            ""
                          )}
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="box-8">
                    {/* Copyrights */}
                    <div className="copyright">
                      <p>Copyright Reserved &copy; 2021 DigitalCard.com</p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                ""
              )}
            </motion.div>
          ) : (
            ""
          )}
        </motion.div>
      )}
    </>
  );
};

export default NewCard2;
