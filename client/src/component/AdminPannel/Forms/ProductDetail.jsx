import React,{useContext,useEffect} from "react";
import "./Styles/ProductDetail.scss";
import user from "../../../assets/Social Medias/user1.gif";
import background from "../../../assets/banner.jpg";
import formContext from "../../Context/FormContext.jsx";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Editor } from "primereact/editor";
import { convertProductImageToBase64 } from "../../Helper/Convert.js";
import "primereact/resources/themes/lara-light-cyan/theme.css";
const ProductDetail = () => {
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
    let fetchProduct = async () => {
      setLoader4(true)
      await axios
        .get(`https://aristostech-digitalcard-application.onrender.com/productDetail/specific/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorageDatas.token}`,
          },
        })
        .then((res) => {

          setProductData(res.data.data);
          setLoader4(false)

        })
        .catch((err) => {
          console.log(err);
          setLoader4(false)
        });
    };


    fetchProduct();

  }, []);
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

          await axios
            .post("https://aristostech-digitalcard-application.onrender.com/productDetail", Productdata, {
              headers: {
                Authorization: `Bearer ${id.token}`,
              },
            })
            .then((res) => {
              setProductData(res.data)
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
      async function handleProductUpdate(e) {
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
              `https://aristostech-digitalcard-application.onrender.com/productDetail/update/${ProductId}`,
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
              setProductImage(undefined);
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

      
      
  //service form edit:

  async function handleProductEdit(e) {
    setLoader3(true);
    // Retrieve token from local storage or wherever it's stored
    let id = JSON.parse(localStorage.getItem("datas"));
    await axios
      .get(`https://aristostech-digitalcard-application.onrender.com/productDetail/specificId/${e.target.id}`, {
        headers: {
          Authorization: `Bearer ${id.token}`,
        },
      })
      .then((res) => {
        setProductImage(res.data.data.productImage);
        setProductTitle(res.data.data.productTitle);
        setProductSummary(res.data.data.productSummary);
        setProdictId(res.data.data._id)
        setProductEdit(true);
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
        setProductEdit(false);
      });
  }

  //Service Form Delete:
  async function handleProductDelete(e) {
    setLoader3(true);
    // Retrieve token from local storage or wherever it's stored
    let id = JSON.parse(localStorage.getItem("datas"));
    await axios
      .delete(`https://aristostech-digitalcard-application.onrender.com/productDetail/delete/${e.target.id}`, {
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
        setProductEdit(false);
        setLoader3(false);
      })
      .catch((err) => {
        toast.error(err, {
          position: "top-center",
          autoClose: 2000,
          transition: Flip,
        });
        setLoader3(false);
        setProductEdit(false);
      });
  }
    // // Function to strip HTML tags from a string
    const stripHtmlTags = (html) => {
      if (html === null || typeof html === 'undefined') {
        return ''; // Return an empty string if html is null or undefined
      }
      const strippedHtml = html.replace(/(<([^>]+)>)/gi, '');
      return strippedHtml;
    };
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
            <p> Upload Product Image<span>{productImage !=undefined ? <i className='bx bx-check' style={{color:'green'}}></i> :<i className='bx bxs-chevrons-down bx-flashing' ></i>}</span></p>
              <img
                className="productImage"
                src={productImage != undefined ? productImage : background}
                alt="productImage"
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

          {ProductEdit ===  true? (
            <div className="form_submit">
              <button onClick={handleProductUpdate}>
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
        {ProductData.length > 0 ? (
          <div>
            {ProductData.map((data, index) => {
              return (
                <div className="product_list" key={index}>
                  <div className="ser_length">
                    <h6>{index + 1}</h6>
                  </div>
                  <div className="ser_image">
                    <img
                      src={data.productImage ? data.productImage : background}
                      alt="productImage"
                    />
                  </div>
                  <div className="service_title">
                    <h3>
                      {data.productTitle ? data.productTitle : "Title Empty"}
                    </h3>
                  </div>

                  <div className="service_summary">
                    <p>
                      {data.productSummary
                        ? stripHtmlTags(data.productSummary)
                        : "Summary Empty"}
                    </p>
                  </div>
                  <div className="service_price">
                    <small>Rs : 5000</small>
                  </div>
                  <div className="actions">
                    <i
                      class="bx bxs-edit edit"
                      id={data._id}
                      onClick={handleProductEdit}
                    ></i>
                    <i
                      class="bx bxs-message-square-x delete"
                      id={data._id}
                      onClick={handleProductDelete}
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

export default ProductDetail;