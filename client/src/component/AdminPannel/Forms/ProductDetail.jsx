import React,{useContext} from "react";
import "./Styles/ProductDetail.scss";
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
const ProductDetail = () => {
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

        // //Formik does not support file upload so we could create handler :
  const onUploadProductImage = async (e) => {
    let base64 = await convertProductImageToBase64(e.target.files[0]);

    setProductImage(base64);
  };
    //Product form submit:
    async function handleProductFormSubmit(e) {
        e.preventDefault();
        try {
          setLoader3(true);
          // Retrieve token from local storage or wherever it's stored
          let id = JSON.parse(localStorage.getItem("datas"));
          let Productdata = {
            productImage,
            productTitle,
            productReleaseDate,
            productSummary,
          };
          // const formData2 = new FormData();
          // formData2.append("productImage", productImage);
          // formData2.append("productTitle", productTitle);
          // formData2.append("productReleaseDate", productReleaseDate);
          // formData2.append("productSummary", productSummary);
          // Make authenticated request with bearer token
          await axios
            .post("http://localhost:3001/productDetail", Productdata, {
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
              setProductTitle("");
              setProductImage(undefined);
              setProductSummary("");
              setProductReleaseDate("");
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
          toast.error(error.response, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
        }
      }
      //Product form Edit:
      async function handleProductEdit(e) {
        e.preventDefault();
        try {
          setLoader3(true);
          // Retrieve token from local storage or wherever it's stored
          let id = JSON.parse(localStorage.getItem("datas"));
          let data = {
            productImage,
            productTitle,
            productReleaseDate,
            productSummary,
          };
          // Make authenticated request with bearer token
          await axios
            .put(
              `http://localhost:3001/productDetail/specific/${ProductId}`,
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
    
              setProductTitle("");
              setProductImage("");
              setProductSummary("");
              setProductReleaseDate("");
              setProductEdit(false);
            })
            .catch((err) => {
              toast.error(err.response.data.message, {
                position: "top-center",
                autoClose: 2000,
                transition: Flip,
              });
              setLoader3(false);
              setProductEdit(false);
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
        className="Form4_container"
        // id={slideClose ? "Form1close" : "Form1open"}
      >
        <div className="Form_title">
          <h4>Our Product Detail Session</h4>
          <img src={user} alt="user" />
        </div>

        <form action="" onSubmit={handleProductFormSubmit}>
          {/* //product image */}
          <div className="form_group">
            <label htmlFor="productImage">
            <p> Upload Product Image<span>{serviceImage !=undefined ? <i className='bx bx-check' style={{color:'green'}}></i> :<i className='bx bxs-chevrons-down bx-flashing' ></i>}</span></p>
              <img
                className="productImage"
                src={productImage !== undefined ? productImage : background}
                alt=""
                name="productImage"
              />
      
            </label>

            <input
              onChange={onUploadProductImage}
              type="file"
              name="productImage"
              id="productImage"
            />
          </div>

          {/* product Title */}
          <div className="form_group">
            <label htmlFor="productTitle">Product Title</label>
            <input
              type="text"
              placeholder="Eg : Ecommerse Portal"
              name="productTitle"
              id="productTitle"
              value={productTitle}
              onChange={(e) => setProductTitle(e.target.value)}
            />
            {/* Release data */}

            <label htmlFor="releaseDate">Relesed Date</label>
            <input
              type="date"
              name="releaseDate"
              id="releaseDate"
              value={productReleaseDate}
              onChange={(e) => setProductReleaseDate(e.target.value)}
            />
          </div>

          <div className="form_group">
            <label htmlFor="productSummary">Product UseCase Summary</label>
            {/* <textarea
                  name="productSummary"
                  id=""
                  cols="30"
                  rows="3"
                  placeholder="Write something about this Product"
                  value={productSummary}
                  onChange={(e) => setProductSummary(e.target.value)}
                ></textarea> */}
            <Editor
              placeholder="Start Typing..."
              value={productSummary}
              onTextChange={(e) => setProductSummary(e.htmlValue)}
              style={{ height: "100px" }}
              className="textarea"
            />
          </div>

          {ProductEdit === true ? (
            <div className="form_submit">
              <button onClick={handleProductEdit}>
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

export default ProductDetail;
