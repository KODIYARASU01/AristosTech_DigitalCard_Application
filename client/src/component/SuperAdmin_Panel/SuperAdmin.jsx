import React, { useEffect, useState, useContext } from "react";
import "./SuperAdmin.scss";
import profile from "../../assets/User_Auth/profile.png";
import axios from "axios";
import formContext from "../Context/FormContext";
import { Link } from "react-router-dom";
import Super_Admin_Register from "../User_Auth/Super_Admin_Register";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SuperAdmin = () => {
  let {
    loader4,
    EditUser,
    setEditUser,
    setLoader4,
    AddUser,
    setAddUser,
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
  let [AllUsers, setAllUsers] = useState([]);

  useEffect(() => {
    setLoader4(true);
    axios
      .get(
        "https://aristostech-digitalcard-application.onrender.com/auth/register"
      )
      .then((res) => {
        setAllUsers(res.data.data);
        setLoader4(false);
      })
      .catch((error) => {
        console.log(error);
        setLoader4(false);
      });
  }, []);
  //Update UserDetail
  let handleDeleteUser = async (e) => {
    let id_val=e.target.id;
    e.preventDefault();
    setLoader4(true);
    try {
      axios.delete(`https://aristostech-digitalcard-application.onrender.com/auth/register/${id_val}`)
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
          setLoader4(false);
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
          setLoader4(false);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {loader4 ? (
        <div className="loader">
          <span class="loader6"></span>
        </div>
      ) : (
        <div>
          {AddUser ? (
            <Super_Admin_Register />
          ) : (
            <div className="super_admin_container">
              <div className="admin_title">
                <h4>All User Datas</h4>
              </div>
              <div className="New_Admin_user_Add">
                <Link to="/super_admin_register">
                  <button>
                    Add New User{" "}
                    <i className="bx bx-add-to-queue bx-flashing"></i>
                  </button>
                </Link>
              </div>
              <div className="admin_container">
                <div className="admin_header">
                  <div className="user_count_title">
                    <p>S.No</p>
                  </div>
                  <div className="user_profile_title">
                    <p>Profile</p>
                  </div>
                  <div className="user_name_title">
                    <p>FullName</p>
                  </div>
                  <div className="user_email_title">
                    <p>Email</p>
                  </div>
                  <div className="user_place_title">
                    <p>Place</p>
                  </div>
                  <div className="user_mobile_title">
                    <p>Mobile Number</p>
                  </div>
                  <div className="user_created_title">
                    <p>Login Date</p>
                  </div>
                  <div className="user_action_title">
                    <p>Actions</p>
                  </div>
                </div>
                {AllUsers.length > 0 ? (
                  <div>
                    {AllUsers.map((data, index) => {
                      return (
                        <div className="admin_list" key={index}>
                          <div className="count">
                            <h6>{index + 1}</h6>
                          </div>
                          <div className="userProfile">
                            <img
                              src={data.profile ? data.profile : profile}
                              alt="profile"
                            />
                          </div>
                          <div className="UserName">
                            <p>
                              {data.firstName} &nbsp; {data.lastName}
                            </p>
                          </div>
                          <div className="userEmail">
                            <p>{data.email}</p>
                          </div>
                          <div className="userPlace">
                            <p>{data.place ? data.place : "Empty"}</p>
                          </div>
                          <div className="userMobile">
                            <p>
                              {data.mobileNumber
                                ? data.mobileNumber
                                : "MobileNumber Empty"}
                            </p>
                          </div>
                          <div className="createdAt">
                            <p>{data.createdAt.slice(0, 10)}</p>
                          </div>
                          <div className="actions">
                            <i className="bx bx-show-alt show"></i>
                            <Link to={`/update_user/${data._id}`}>
                              <i className="bx bxs-edit edit"></i>
                            </Link>

                            <i
                              className="bx bx-message-square-x delete"
                            onClick={handleDeleteUser}

                            id={data._id}
                            ></i>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p
                    style={{
                      color: "black",
                      padding: "1rem",
                      width: "100%",
                      margin: "10px auto",
                      fontWeight:'550'
                    }}
                  >
                    No User Found
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SuperAdmin;
