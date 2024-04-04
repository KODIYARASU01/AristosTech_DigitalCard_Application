import React, { useRef, useEffect } from "react";
import "./NewCard2.scss";
import banner from "../../../assets/Background/12.jpg";
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
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
//Testimonial
import { useContext } from "react";
import formContext from "../../Context/FormContext";
import axios from "axios";
const NewCard2 = () => {

  let id=useParams();
  let {
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
  let serviceRef = useRef(null);

  // Retrieve token from local storage or wherever it's stored
  let localStorageDatas = JSON.parse(localStorage.getItem("datas"));
  useEffect(() => {
    let fetch = async () => {
      setLoader3(true);
      await axios
        .get(`https://aristostech-digitalcard-application.onrender.com/basicDetail/specific/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorageDatas.token}`,
          },
        })
        .then((res) => {
          setBasicData(res.data.data)
          setBanner(res.data.data[0].banner);
          setLogo(res.data.data[0].logo);
          setFullName(res.data.data[0].fullName);
          setProfession(res.data.data[0].profession);
          setSummary(res.data.data[0].summary);
          setBasicID(res.data.data[0]._id);
          setLoader3(false);
        })
        .catch((err) => {
          console.log(err);
          setLoader3(false);
        });
    };
    let socialmedia = async () => {
      await axios
        .get(`https://aristostech-digitalcard-application.onrender.com/socialMediaDetail/specific/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorageDatas.token}`,
          },
        })
        .then((res) => {

          setSocialMediaData(res.data.data);
          setFacebook(res.data.data[0].Facebook);
          setInstagram(res.data.data[0].Instagram);
          setTwiter(res.data.data[0].Twiter);
          setWhatsUp(res.data.data[0].WhatsUp);
          setLinkedIn(res.data.data[0].LinkedIn);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    let contactDetail = async () => {
      await axios
        .get(`https://aristostech-digitalcard-application.onrender.com/contactDetail/specific/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorageDatas.token}`,
          },
        })
        .then((res) => {

          setContactData(res.data.data);
          setEmail1(res.data.data[0].Email1);
          setAlternateEmail(res.data.data[0].AlternateEmail);
          setMobileNumber1(res.data.data[0].MobileNumber1);
          setAlternateMobileNumber(res.data.data[0].AlternateMobileNumber);
          setDOB(res.data.data[0].DOB);
          setAddress(res.data.data[0].Address);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    let fetchService = async () => {
      await axios
        .get(`https://aristostech-digitalcard-application.onrender.com/serviceDetail/specific/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorageDatas.token}`,
          },
        })
        .then((res) => {
          console.log(res.data.data)
          setServiceData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    let fetchQRCode = async () => {
      await axios
        .get(`https://aristostech-digitalcard-application.onrender.com/QRCodeDetail/specific/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorageDatas.token}`,
          },
        })
        .then((res) => {
          setQRCodeData(res.data.data);
          // setQRCodeImage(res.data.result[0].QRCodeImage)
        })
        .catch((err) => {
          console.log(err);
        });
    };
    let fetchProduct = async () => {
      await axios
        .get(`https://aristostech-digitalcard-application.onrender.com/productDetail/specific/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorageDatas.token}`,
          },
        })
        .then((res) => {

          setProductData(res.data.data);

        })
        .catch((err) => {
          console.log(err);
        });
    };
    let fetchGallery = async () => {
      await axios
        .get(`https://aristostech-digitalcard-application.onrender.com/galleryDetail/specific/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorageDatas.token}`,
          },
        })
        .then((res) => {
          setGalleryData(res.data.data)
        })
        .catch((err) => {
          console.log(err);
        });
    };
    let fetchSocialMedia = async () => {
      await axios
        .get(`https://aristostech-digitalcard-application.onrender.com/socialMediaDetail/specific/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorageDatas.token}`,
          },
        })
        .then((res) => {

          setSocialMediaData(res.data.data);
          setFacebook(res.data.data[0].Facebook);
          setInstagram(res.data.data[0].Instagram);
          setTwiter(res.data.data[0].Twiter);
          setWhatsUp(res.data.data[0].WhatsUp);
          setLinkedIn(res.data.data[0].LinkedIn);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    let fetchTestimonial = async () => {
      await axios
        .get(`https://aristostech-digitalcard-application.onrender.com/testimonialDetail/specific/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorageDatas.token}`,
          },
        })
        .then((res) => {
          console.log(res.data.data)
          setTestimonialData(res.data.data);

        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetch();
    socialmedia();
    contactDetail();
    fetchService();
    fetchQRCode();
    fetchProduct();
    fetchGallery();
    fetchSocialMedia();
    fetchTestimonial();
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
      if (html === null || typeof html === 'undefined') {
        return ''; // Return an empty string if html is null or undefined
      }
      const strippedHtml = html.replace(/(<([^>]+)>)/gi, '');
      return strippedHtml;
    };
  return (
    <div className="newCard_container2">
      {BasicData != undefined ? (
        <div className="card_box">
          {BasicData.map((data, index) => {
            return (
              <div className="box-1" key={index}>
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
                      {data.profession || "AritosTech India Private Limited "}
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

                {SocialMediaData != undefined ? (
                  <div className="social_medias">
                    <a href={SocialMediaData.Twiter} target="_blank">
                      <i className="uil uil-globe"></i>
                    </a>
                    <a href={SocialMediaData.Facebook} target="_blank">
                      <i className="uil uil-facebook-f"></i>
                    </a>
                    <a href={SocialMediaData.Instagram} target="_blank">
                      <i className="uil uil-instagram"></i>
                    </a>
                    <a href={SocialMediaData.WhatsUp} target="_blank">
                      <i className="uil uil-whatsapp"></i>
                    </a>
                    <a href={SocialMediaData.Twiter} target="_blank">
                      <i className="uil uil-twitter"></i>
                    </a>
                  </div>
                ) : (
                  ""
                )}

                {/* //Contact */}
                {ContactData != undefined ? (
                  <div>
                    <div className="contact_container">
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
                              {ContactData.Email || "kodiyarasu01@gmail.com"}
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
                              {ContactData.AlternateEmail ||
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
                              {ContactData.MobileNumber || "+91 8825457794"}
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
                              {ContactData.AlternateMobileNumber ||
                                "+91 63456464646"}
                            </h4>
                            <h5>Alternate MobileNumber</h5>
                          </div>
                        </div>
                        <div className="list">
                          <div className="image">
                            <i className="uil uil-calendar-alt"></i>
                          </div>
                          <div className="details">
                            <h4>{ContactData.DOB || "22/01/2021"}</h4>
                            <h5>Year of Estimation</h5>
                          </div>
                        </div>
                        <div className="list">
                          <div className="image">
                            <i className="uil uil-location-point"></i>
                          </div>
                          <div className="details">
                            <h4>
                              {stripHtmlTags1(ContactData.Address) ||
                                `Chennai , T-Nagar,Tamilnadu`}
                            </h4>
                            <h5>Address</h5>
                          </div>
                        </div>
                      </div>
                    </div>
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
              </div>
            );
          })}
          {/* Box-1 Basic Detail and Contact */}

          {/* Box-2 Service */}
          {ServiceData.length >= 1 ? (
            <div className="box-2">
              <div className="our_service">
                <div className="service_title">
                  <h4>Our Services</h4>
                </div>

                <div className="service_lists">
                  {ServiceData != undefined
                    ? ServiceData.map((data, index) => {
                        return (
                          <div className="list" key={index}>
                            <div className="service_image">
                              <img src={data.serviceImage} alt="frontEnd" />
                            </div>
                            <div className="service1_title">
                              <h4>
                                {data.serviceTitle || "FrontEnd Development"}
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
            </div>
          ) : (
            ""
          )}

          {/* Box-3 QRCode */}
          {QRCodeData.length >= 1 ? (
            <div>
              {QRCodeData.map((data, index) => {
                return (
                  <div className="box-3" key={index}>
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
                  </div>
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
          {ProductData.length >= 1 ? (
            <div className="box-4">
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
                  {ProductData.map((data, index) => {
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
            </div>
          ) : (
            ""
          )}
          {/* Box-5 Gallery */}
          {GalleryData.length >= 1 ? (
            <div className="box_gallery">
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
                  {GalleryData.map((data, index) => {
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
            </div>
          ) : (
            ""
          )}

          {/* Box-6 Testimonial */}

          {TestimonialData.length >= 1 ? (
            <div className="testimonial_con">
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
                      {TestimonialData.map((data, index) => {
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#003253"
                  fillOpacity="1"
                  d="M0,192L480,64L960,224L1440,64L1440,0L960,0L480,0L0,0Z"
                ></path>
              </svg>
            </div>
          ) : (
            ""
          )}
          {BasicData != undefined &&
          ServiceData != undefined &&
          ContactData != undefined &&
          ProductData != undefined &&
          GalleryData.length >= 1 ? (
            <div>
              {/* //FeedBack */}
              <div className="box-6">
                <div className="feedback_container">
                  <div className="feedback_heading">
                    <h5>Give Feedback Something About Us </h5>
                  </div>
                  <form action="">
                    <div className="form_group">
                      <input
                        type="text"
                        placeholder="Enter Full Name"
                        name="name"
                        id="name"
                      />
                      <img
                        width="64"
                        height="64"
                        src="https://img.icons8.com/nolan/64/user.png"
                        alt="user"
                      />
                    </div>
                    <div className="form_group">
                      <textarea
                        name="msg"
                        id="msg"
                        cols="30"
                        rows="4"
                        placeholder="Tell something about us !"
                      ></textarea>
                      <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/fluency/48/edit-text-file.png"
                        alt="edit-text-file"
                      />
                    </div>
                    <div className="form_actions">
                      <button type="submit">Send Feedback</button>
                    </div>
                  </form>
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
                    <form action="">
                      <div className="form_group">
                        <input
                          type="text"
                          placeholder="Enter Full Name"
                          name="name"
                          id="name"
                        />
                        <img
                          width="64"
                          height="64"
                          src="https://img.icons8.com/nolan/64/user.png"
                          alt="user"
                        />
                      </div>
                      <div className="form_group">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          name="email"
                          id="email"
                        />
                        <img
                          width="64"
                          height="64"
                          src="https://img.icons8.com/nolan/64/new-post.png"
                          alt="new-post"
                        />
                      </div>
                      <div className="form_group">
                        <input
                          type="tel"
                          placeholder="Enter your mobile Number"
                          name="tel"
                          id="tel"
                        />
                        <img
                          width="64"
                          height="64"
                          src="https://img.icons8.com/nolan/64/phone-disconnected.png"
                          alt="phone-disconnected"
                        />
                      </div>
                      <div className="form_group">
                        <textarea
                          name="msg"
                          id="msg"
                          cols="30"
                          rows="4"
                          placeholder="Tell something about us !"
                        ></textarea>
                        <img
                          width="48"
                          height="48"
                          src="https://img.icons8.com/fluency/48/edit-text-file.png"
                          alt="edit-text-file"
                        />
                      </div>
                      <div className="form_actions">
                        <button type="submit">Send Message</button>
                      </div>
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
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NewCard2;
