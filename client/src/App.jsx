import React, { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import formContext from "./component/Context/FormContext";
import NewCard2 from "./component/AdminPannel/Cards/NewCard2";
import NewCardDesign1 from "./component/AdminPannel/Cards/NewCardDesign1";
import CryptoJS from "crypto-js";
import AllProducts from "./component/AdminPannel/Cards/AllProducts";
import AllServices from "./component/AdminPannel/Cards/AllServices";
import DemoCard from "./component/AdminPannel/VCards/DemoCard";
import NewCardDesign2 from "./component/AdminPannel/Cards/NewCardDesign2";
import AllServices2 from "./component/AdminPannel/Cards/AllService2";
import AllProducts2 from "./component/AdminPannel/Cards/AllProduct2";

let SignIn = lazy(() => import("./component/User_Auth/SignIn"));
let SignUp = lazy(() => import("./component/User_Auth/SignUp"));
// let UserDetail = lazy(() => import("./component/UserDetail/UserDetail"));
let AdminPannel = lazy(() => import("./component/AdminPannel/AdminPannel"));

let Update_User_Form = lazy(() =>
  import("./component/SuperAdmin_Panel/Update_User_Form")
);

let SuperAdminPanel = lazy(() =>
  import("./component/SuperAdmin_Panel/SuperAdmin")
);
let Super_Admin_Register = lazy(() =>
  import("./component/User_Auth/Super_Admin_Register")
);

let NewCardDesign3=lazy(()=>import('./component/AdminPannel/Cards/NewCardDesign3'));
let NewCardDesign4=lazy(()=>import('./component/AdminPannel/Cards/NewCardDesign4'))
const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  let [userToken, setUserToken] = useState("");
  let [loader3, setLoader3] = useState(false);
  let [loader4, setLoader4] = useState(false);
  let [loader5, setLoader5] = useState(false);
  let [SuperAdminLoader, setSuperAdmin_Loader] = useState(false);
  //AllUser Data:

  let [AllData, setAllData] = useState([]);
  // State to store user authentication
  let [UserDetails, setUserDetails] = useState([]);
  let [show, setShow] = useState(false);
  let [profile, setProfile] = useState();
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [location, setLocation] = useState("");
  let [mobileNumber, setMobileNumber] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loader, setLoader] = useState(false);
  //Profile view toggle state:
  const [profileView, setProfileView] = useState(false);
  //New
  let [userDetail, setUserDetail] = useState();
  let [Data, setData] = useState("");
  let [BasicID, setBasicID] = useState("");
  let [ServiceId, setServiceId] = useState("");
  let [ProductId, setProdictId] = useState("");
  let [QRCodeId, setQRCodeId] = useState("");
  let [GallId, setGallId] = useState("");
  let [TestimonialID, setTestimonialID] = useState("");
  //States all
  let [slideClose, setSlideShow] = useState(false);
  let [basicForm, setBasicForm] = useState(true);
  let [contactForm, setContactForm] = useState(false);
  let [serviceForm, setServiceForm] = useState(false);
  let [productForm, setProductForm] = useState(false);
  let [galleryForm, setGalleryForm] = useState(false);
  let [socialMediaForm, setSocialMediaForm] = useState(false);
  let [testimonialForm, setTestimonialForm] = useState(false);
  let [QRCodeForm, setQRCodeForm] = useState(false);

  //Basic Detail form states:
  let [banner, setBanner] = useState();
  let [logo, setLogo] = useState();
  let [fullName, setFullName] = useState();
  let [profession, setProfession] = useState();
  let [summary, setSummary] = useState();

  //Contact Detail form States:

  let [Email1, setEmail1] = useState();
  let [AlternateEmail, setAlternateEmail] = useState();
  let [MobileNumber1, setMobileNumber1] = useState();
  let [AlternateMobileNumber, setAlternateMobileNumber] = useState();
  let [DOB, setDOB] = useState();
  let [Address, setAddress] = useState();

  //Service etail form states:

  let [serviceImage, setServiceImage] = useState();

  let [serviceTitle, setServiceTitle] = useState();
  let [serviceSummary, setServiceSummary] = useState();

  //Product detail form states:
  let [productImage, setProductImage] = useState();
  let [productTitle, setProductTitle] = useState();
  let [productReleaseDate, setProductReleaseDate] = useState();
  let [productSummary, setProductSummary] = useState();

  //Gallery:
  let [galleryImage, setGalleryImage] = useState();
  let [videoURL, setVideoURL] = useState();

  //SOcialMedia :

  let [Facebook, setFacebook] = useState();
  let [LinkedIn, setLinkedIn] = useState();
  let [WhatsUp, setWhatsUp] = useState();
  let [Instagram, setInstagram] = useState();
  let [Twiter, setTwiter] = useState();
  let [Website, setWebsite] = useState();
  let [Direction, setDirection] = useState();
  let [UTube, setUTube] = useState();
  let [Github, setGithub] = useState();

  //Testimonial:
  let [clientImage, setClientImage] = useState();
  let [clientName, setClientName] = useState();
  let [clientFeedbackDate, setClientFeedbackDate] = useState();
  let [clientFeedback, setClientFeedback] = useState();

  //QRCODE:

  let [QRCodeImage, setQRCodeImage] = useState();
  //Fetch data from mongoDb:

  let [ID, setID] = useState([]);
  let [loader2, setLoader2] = useState(false);

  let [BasicData, setBasicData] = useState([]);

  let [ContactData, setContactData] = useState([]);

  let [ServiceData, setServiceData] = useState([]);

  let [ProductData, setProductData] = useState([]);

  let [GalleryData, setGalleryData] = useState([]);

  let [SocialMediaData, setSocialMediaData] = useState([]);

  let [TestimonialData, setTestimonialData] = useState([]);

  let [QRCodeData, setQRCodeData] = useState([]);

  //Edit Data:
  let [BasicEdit, setBasicEdit] = useState(false);

  let [ContactEdit, setContactEdit] = useState(false);

  let [ServiceEdit, setServiceEdit] = useState(false);

  let [ProductEdit, setProductEdit] = useState(false);

  let [GalleryEdit, setGalleryEdit] = useState(false);

  let [SocialMediaEdit, setSocialMediaEdit] = useState(false);

  let [TestimonialEdit, setTestimonialEdit] = useState(false);
  let [QRCodeEdit, setQRCodeEdit] = useState(false);

  //Super Admin pannel Register form
  let [AddUser, setAddUser] = useState(false);
  let [EditUser, setEditUser] = useState(false);
  const Token = JSON.parse(localStorage.getItem("datas"));
  useEffect(() => {
    const Token = JSON.parse(localStorage.getItem("datas"));
    if (Token) {
      setUser(Token);
    }

    // const urlString = window.location.href;
    // const url = new URL(urlString);

    // const pathnameParts = url.pathname.split("/");
    // const filteredPathname = pathnameParts.slice(2).join("/");

    // const decryptData = (encryptedText) => {
    //   const bytes = CryptoJS.AES.decrypt(filteredPathname, "mani");
    //   return bytes.toString(CryptoJS.enc.Utf8);
    // };

    // let id = decryptData();
    // if (id !== "") navigate(`/Digital_Card/${id}`);
  }, [navigate]); // Load user from localStorage on component mount

  return (
    <>
      <formContext.Provider
        value={{
          SuperAdminLoader,
          setSuperAdmin_Loader,
          EditUser,
          setEditUser,
          AddUser,
          setAddUser,
          AllData,
          setAllData,
          loader4,
          setLoader4,
          loader5,
          setLoader5,
          ServiceId,
          setServiceId,
          userToken,
          setUserToken,
          UserDetails,
          setUserDetails,
          user,
          setUser,
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
          userToken,
          setUserToken,
          UserDetails,
          setUserDetails,
          user,
          setUser,
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
          Website,
          setWebsite,
          Direction,
          setDirection,
          UTube,
          setUTube,
          Github,
          setGithub,
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
          loader3,
          setLoader3,
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
        }}
      >
        <Suspense fallback={<h4>Loading.....</h4>}>
          <Routes>
            {/* <Route
              path="/"
              element={
                user ? <Navigate to={`/admin/${user.id}`} /> : <SignIn />
              }
            /> */}
            {/* <Route
              path="/register"
              element={
                user ? <Navigate to={`/admin/${user.id}`} /> : <SignUp />
              }
            /> */}
            {/* <Route
              path="/admin/:id"
              element={user ? <AdminPannel /> : <SignIn />}
            /> */}
            {/* You can use your authRoutes with useAuthRoutes hook here if needed */}

            {/* <Route path={`/Digital_Card/:id`} element={<NewCard2 />} /> */}

            {/* <Route path="/super_admin" element={<SuperAdminPanel />} /> */}

            {/* <Route path="/update_user/:id" element={<Update_User_Form />} /> */}
            {/* <Route
              path="/super_admin_register"
              element={<Super_Admin_Register />}
            /> */}
            <Route path="/new_card/:id" element={<NewCardDesign1 />} />
            <Route path="/new_card1/:id" element={<NewCardDesign2 />} />
            <Route path="/new_card3" element={<NewCardDesign3/>}/>
            <Route path="/" element={<NewCardDesign4/>}/>
            <Route path="/all_products" element={<AllProducts />} />
            <Route path="/all_services" element={<AllServices />} />
            <Route path="/New_products/:id" element={<AllProducts2 />} />
            <Route path="/New_services/:id" element={<AllServices2 />} />
            <Route path="/demo_card" element={<DemoCard />} />
          </Routes>
        </Suspense>
      </formContext.Provider>
    </>
  );
};

export default App;
