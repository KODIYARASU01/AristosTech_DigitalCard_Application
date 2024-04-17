import React, { useContext ,useEffect} from "react";
import formContext from "../../Context/FormContext";
import user from "../../../assets/Social Medias/user1.gif";
import {useParams} from 'react-router-dom'
import "./Styles/BasiDetails.scss";
import background from "../../../assets/banner.jpg";
import clientProfile from "../../../assets/logo2.jpg";
import {
  convertToBase64Basic,
  convertBannerImageToBase64,
} from "../../Helper/Convert.js";
import { Editor } from "primereact/editor";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import axios from "axios";
const BasicDetail = () => {
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
    BasicData,
    setBasicData

  } = useContext(formContext);
console.log(BasicData)
  let localStorageDatas = JSON.parse(localStorage.getItem("datas"));
  // Fetching all data:
  useEffect(() => {
    let fetch = async () => {
      setLoader4(true);
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
          setLoader4(false);
        })
        .catch((err) => {
          console.log(err);
          setLoader4(false);
        });
    };
  
    fetch();

  }, []);
  //Formik does not support file upload so we could create handler :
  const onUpload = async (e) => {
    let base64 = await convertToBase64Basic(e.target.files[0]);

    setLogo(base64);
  };
  //Formik does not support file upload so we could create handler :
  const onUploadBannerImage = async (e) => {
    let base64 = await convertBannerImageToBase64(e.target.files[0]);

    setBanner(base64);
  };
  //Home post form submit:

  async function handleBasicFormSubmit(e) {
    e.preventDefault();
    try {
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("datas"));

      let data = {
        logo,
        banner,
        fullName,
        profession,
        summary,
        userToken,
      };
      setLoader3(true);
      // Make authenticated request with bearer token
      await axios
        .post("https://aristostech-digitalcard-application.onrender.com/basicDetail", data, {
          headers: {
            Authorization: `Bearer ${id.token}`,
          },
        })
        .then((responce) => {
          
          toast.success(responce.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            // transition: Bounce,
          });
          setLoader3(false);
        });

      setLoader3(false);
    } catch (error) {
      // Handle errors
      toast.error(error.responce.data.message, {
        position: "top-center",
        autoClose: 2000,
        // transition: Bounce,
      });
      setLoader3(false);
    }
  }
  //Home form Edit:
  async function handleBasicFormEdit(e) {
    e.preventDefault();
    try {
      setLoader3(true);
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("datas"));

      let data = {
        banner,
        logo,
        fullName,
        profession,
        summary,
      };
      // Make authenticated request with bearer token
      await axios
        .put(`https://aristostech-digitalcard-application.onrender.com/basicDetail/update/${BasicID}`, data, {
          headers: {
            Authorization: `Bearer ${id.token}`,
          },
        })
        .then((res) => {
          console.log(res);
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
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
      toast.error(error.response, {
        position: "top-center",
        autoClose: 2000,
        transition: Flip,
      });
      setLoader3(false);
    }
  }
  return (
    <>

        {/* //Form 1 Basic Details */}

        <div
          className="Form1_container"
          // id={slideClose ? "Form1close" : "Form1open"}
        >
          <div className="Form_title">
            <h4>Basic Detail Session</h4>
            <img src={user} alt="user" />
          </div>
          <form
            action=""
            onSubmit={handleBasicFormSubmit}
            encType="multipart/form-data"
          >
            {/* //Banner */}
            <div className="form_group">
              <label htmlFor="banner" className="banner_label">
                <p>Upload Banner Image <span>{banner !=undefined ? <i className='bx bx-check' style={{color:'green'}}></i> :<i className='bx bxs-chevrons-down bx-flashing' ></i>}</span></p>
                <img
                  className="banner"
                  src={banner !== undefined ? banner : background}
                  alt=""
                  name="banner"
                />
        
              </label>

              <input
                multiple
                type="file"
                name="banner"
                id="banner"
                onChange={onUploadBannerImage}
              />
            </div>
            {/* Logo */}
            <div className="form_group">
              <label htmlFor="logo" className="logo_label">

                <img
                  src={logo !== undefined ? logo : clientProfile}
                  alt=""
                  name="logo"
                  className="logo"
                />
                 {logo!=undefined?  <i className='bx bx-check' style={{color:'green'}}></i> : <i className="bx bxs-chevrons-left bx-flashing"></i> }
                  <span>Upload your Picture</span>
              </label>

              <input onChange={onUpload} type="file" name="logo" id="logo" />
            </div>
            {/* Author */}
            <div className="form_group">
              <label htmlFor="name">Enter FullName</label>
              <input
                type="text"
                placeholder="Eg : John S"
                name="name"
                id="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            {/* Profession  */}
            <div className="form_group">
              <label htmlFor="name">Enter Your Profession</label>
              <input
                type="text"
                placeholder="Eg : Web Developer"
                name="profession"
                id="profession"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
              />
            </div>
            <div className="form_group">
              <label htmlFor="summary">Summary</label>
              {/* <textarea
                  name="summary"
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="Write something about your profession"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                ></textarea> */}
              <Editor
                placeholder="Start Typing..."
                value={summary}
                onTextChange={(e) => setSummary(e.htmlValue)}
                style={{ height: "150px" }}
                className="textarea"
              />
            </div>

            {BasicData && BasicData.length > 0? (
              <div className="form_submit">
                <button onClick={handleBasicFormEdit}>
                  Update{loader3 ? <span className="loader3"></span> : ""}
                </button>
              </div>
            ) : (
              <div className="form_submit">
                <button type="submit">
                  Submit {loader3 ? <span className="loader3"></span> : ""}
                </button>
              </div>
            )}
          </form>
        </div>
 
    </>
  );
};

export default BasicDetail;
