import React, { useEffect, useState, useContext } from "react";
import { motion as m } from "framer-motion";
import { convertToBase64 } from "../Helper/Convert";
import { useParams, Link, useNavigate } from "react-router-dom";
import updateImage from "../../assets/UserUpdate_Pannel/update1.jpg";
import "./Update_User_Form.scss";
import profile_logo from "../../assets/User_Auth/profile.png";
import formContext from "../Context/FormContext";
import axios from "axios";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Update_User_Form = () => {
  let navigate = useNavigate();
  let id = useParams();

  let {
    loader4,
    setLoader4,
    ServiceId,
    setServiceId,
    user,
    setUser,
    UserDetails,
    setUserDetails,
    profileView,
    setProfileView,
    show,
    setShow,
    profile,
    setProfile,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    location,
    setLocation,
    mobileNumber,
    setMobileNumber,
    email,
    setEmail,
    password,
    setPassword,
    loader,
    setLoader,
    Data,
    setData,
    BasicID,
    setBasicID,
    ProductId,
    setProdictId,
    QRCodeId,
    setQRCodeId,
    GallId,
    setGallId,
    TestimonialID,
    setTestimonialID,
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
    userDetail,
    setUserDetail,
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
    loader2,
    setLoader2,
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

  //Fetching user Data:
  useEffect(() => {
    setLoader(true);
    axios
      .get(
        `http://localhost:3001/auth/register/${id.id}`
      )
      .then((responce) => {
        setProfile(responce.data.data.profile);
        setFirstName(responce.data.data.firstName);
        setLastName(responce.data.data.lastName);
        setEmail(responce.data.data.email);
        setMobileNumber(responce.data.data.mobileNumber);
        setLocation(responce.data.data.location);
        toast.success(responce.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Flip,
        });
        setLoader(false);
      })
      .catch((error) => {
        setLoader(false);
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Flip,
        });
      });
  }, []);

  //Formik does not support file upload so we could create handler :
  const onUpload = async (e) => {
    let base64 = await convertToBase64(e.target.files[0]);

    setProfile(base64);
  };
  //Update UserDetail
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      let data = {
        profile,
        firstName,
        lastName,
        email,
        location,
        mobileNumber,
      };
      axios
        .put(
          `http://localhost:3001/auth/register/${id.id}`,
          data
        )
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Flip,
          });
          setTimeout(() => {
            navigate("/super_admin");
            setProfile(undefined);
            setFirstName("");
            setLastName("");
            setEmail("");
            setMobileNumber("");
            setLocation("");
          }, 1000);
          setLoader(false);
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response.data.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Flip,
          });
          setLoader(false);
        });
    } catch (error) {
      console.log(error.message);
      setLoader(false);
    }
  };
  //LogOut user
  let handleLogOut = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("datas");

      toast.success("LogOut Sucessfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });

      setEmail("");
      setMobileNumber("");
      setLastName("");
      setFirstName("");
      setLocation("");
      setTimeout(() => {
        setUser(null);
        navigate("/");
      }, 2000);
    } catch (err) {
      toast.error("LogOut Failed", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });
    }
  };

  let profileAnime = {
    hide: { opacity: 0, y: -1000, transition: { duration: 1, type: "spring" } },
    show: { opacity: 1, y: 0, transition: { duration: 1, type: "spring" } },
  };
  return (
    <>
      {/* //User Profile */}
      <m.div className="user_profile" variants={profileAnime}>
        <div className="box_container">
          {/* CloseUserDetailPannel */}
          <div className="close">
            <i className="bx bxs-chevrons-right bx-flashing c"></i>

            <Link to='/super_admin'>
              <i className="bx bxs-message-square-x cross"></i>
            </Link>
          </div>
          <div className="right_form">
            <div className="form_title">
              <h4>Your Profile Pannel</h4>
              <p>Update your Account Details</p>
            </div>
            <div className="illustration">
              {/* <img src={illustration} alt="illustration" /> */}
            </div>

            <form action="" onSubmit={handleSubmit}>
              <div className="profile">
                <label htmlFor="profile">
                  <img
                    src={profile || profile_logo}
                    alt="avatar"
                    id="profile_image"
                  />
                  <i className="bx bxs-chevrons-left bx-flashing"></i>
                  <span>Update your profile</span>
                </label>
                <input
                  onChange={onUpload}
                  type="file"
                  id="profile"
                  name="profile"
                />
              </div>
              {/* //First Name */}
              <div className="form_group">
                <label htmlFor="userName">
                  FirstName{" "}
                  <span>
                    <sup>*</sup>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Eg: Jayakumar "
                  name="firstName"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <div className="icon">
                  <i className="bx bxs-user"></i>
                </div>
              </div>
              {/* //Last Name */}
              <div className="form_group">
                <label htmlFor="lastName">LastName </label>
                <input
                  type="text"
                  placeholder="Eg : Kumar or K"
                  name="lastName"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <div className="icon">
                  <i className="bx bxs-user-pin"></i>
                </div>
              </div>
              {/* Email`` */}
              <div className="form_group">
                <label htmlFor="email">
                  Email{" "}
                  <span>
                    <sup>*</sup>
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Eg : abc@gmail.com"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="icon">
                  <i className="bx bxs-envelope"></i>
                </div>
              </div>

              {/* MobileNumber`` */}
              <div className="form_group">
                <label htmlFor="lastName">Mobile Number</label>
                <input
                  type="tel"
                  placeholder="Eg : +91 6576579679"
                  name="mobile"
                  id="mobile"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
                <div className="icon">
                  <i className="bx bx-mobile"></i>
                </div>
              </div>
              {/* Location`` */}
              <div className="form_group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  placeholder="Eg : Chennai,TamilNadu"
                  name="location"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <div className="icon">
                  <i className="bx bx-current-location"></i>
                </div>
              </div>
              <div className="form_submit">
                <button type="submit">
                  Update Profile
                  {loader ? (
                    <span className="loader"></span>
                  ) : (
                    <div className="rocket">
                      <i className="bx bx-log-in bx-flashing"></i>
                    </div>
                  )}
                </button>
              </div>
              <div className="or">
                <p>or Continue</p>
              </div>
            </form>

            <div className="signup_link">
              <p>
                Get Back Soon ?{" "}
                <Link onClick={handleLogOut} style={{ color: "red" }}>
                  Logout
                </Link>
              </p>
            </div>
          </div>
          <div className="right_image">
            <img className="login" src={updateImage} alt="signUp" />
          </div>
        </div>
      </m.div>
    </>
  );
};

export default Update_User_Form;
