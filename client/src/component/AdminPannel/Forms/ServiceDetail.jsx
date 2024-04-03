import "./Styles/ServiceDetail.scss";
import React, { useContext, useEffect } from "react";
import user from "../../../assets/Social Medias/user1.gif";
import background from "../../../assets/banner.jpg";
import formContext from "../../Context/FormContext.jsx";
import { convertServiceImageToBase64 } from "../../Helper/Convert.js";
import axios from "axios";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Editor } from "primereact/editor";

import "primereact/resources/themes/lara-light-cyan/theme.css";
const ServiceDetail = () => {
  let {
    ServiceId,
    setServiceId,
    loader3,
    setLoader3,
    Data,
    serviceImage,
    setServiceImage,
    serviceTitle,
    setServiceTitle,
    serviceSummary,
    setServiceSummary,
    setServiceData,
    ServiceData,
    ServiceEdit,
    setServiceEdit,
  } = useContext(formContext);

  // Fetching all data:
  useEffect(() => {
    let localStorageDatas = JSON.parse(localStorage.getItem("datas"));
    let fetchService = async () => {
      await axios
        .get(`https://aristostech-digitalcard-application.onrender.com/serviceDetail`, {
          headers: {
            Authorization: `Bearer ${localStorageDatas.token}`,
          },
        })
        .then((res) => {
          setServiceData(res.data.result);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchService();
  }, []);
  //Formik does not support file upload so we could create handler :
  const onUploadServiceImage = async (e) => {
    let localStorageDatas = JSON.parse(localStorage.getItem("datas"));
    let base64 = await convertServiceImageToBase64(e.target.files[0]);
    setServiceImage(base64);
  };

  //Service form submit:
  async function handleServiceFormSubmit(e) {
    e.preventDefault();
    try {
      setLoader3(true);
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("datas"));

      let data = {
        serviceImage,
        serviceTitle,
        serviceSummary,
      };
      // Make authenticated request with bearer token
      await axios
        .post("https://aristostech-digitalcard-application.onrender.com/serviceDetail", data, {
          headers: {
            Authorization: `Bearer ${id.token}`,
          },
        })
        .then((res) => {
          setServiceData(res.data.result);
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
          setServiceSummary("");
          setServiceTitle("");
          setServiceImage();
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
        });
      setLoader3(false);
    } catch (error) {
      // Handle errors
      toast.error(error.responce.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Flip,
      });
      setLoader3(false);
    }
  }
  //Service form Update:
  async function handleServiceFormUpdate(e) {
    e.preventDefault();
console.log(ServiceId)
    try {
      setLoader3(true);
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("datas"));
      let data = {
        serviceImage,
        serviceTitle,
        serviceSummary,
      };
      // Make authenticated request with bearer token
      await axios
        .put(`https://aristostech-digitalcard-application.onrender.com/serviceDetail/update/${ServiceId}`, data, {
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
          setServiceSummary("");
          setServiceTitle("");
          setServiceImage(undefined);
          setServiceEdit(false);
        })
        .catch((err) => {
          toast.success(err.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
          setServiceEdit(false);
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

  //service form edit:

  async function handleServiceEdit(e) {
    setLoader3(true);
    // Retrieve token from local storage or wherever it's stored
    let id = JSON.parse(localStorage.getItem("datas"));
    await axios
      .get(`https://aristostech-digitalcard-application.onrender.com/serviceDetail/specificId/${e.target.id}`, {
        headers: {
          Authorization: `Bearer ${id.token}`,
        },
      })
      .then((res) => {
        setServiceImage(res.data.data.serviceImage);
        setServiceTitle(res.data.data.serviceTitle);
        setServiceSummary(res.data.data.serviceSummary);
        setServiceId(res.data.data._id);
        setServiceEdit(true);
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
        setServiceEdit(false);
      });
  }

  //Service Form Delete:
  async function handleServiceDelete(e) {
    setLoader3(true);
    // Retrieve token from local storage or wherever it's stored
    let id = JSON.parse(localStorage.getItem("datas"));
    await axios
      .delete(`https://aristostech-digitalcard-application.onrender.com/serviceDetail/delete/${e.target.id}`, {
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
        setServiceEdit(true);
        setLoader3(false);
      })
      .catch((err) => {
        toast.error(err, {
          position: "top-center",
          autoClose: 2000,
          transition: Flip,
        });
        setLoader3(false);
        setServiceEdit(false);
      });
  }
  return (
    <div>
      <div
        className="Form3_container"
        // id={slideClose ? "Form1close" : "Form1open"}
      >
        <div className="Form_title">
          <h4>Our Service Detail Session</h4>
          <img src={user} alt="user" />
        </div>

        <form
          action=""
          onSubmit={handleServiceFormSubmit}
          encType="multipart/form-data"
        >
          {/* //service image */}
          <div className="form_group">
            <label htmlFor="serviceImage" className="service_label">
              <p>
                {" "}
                Upload Service Image
                <span>
                  {serviceImage != undefined ? (
                    <i className="bx bx-check" style={{ color: "green" }}></i>
                  ) : (
                    <i className="bx bxs-chevrons-down bx-flashing"></i>
                  )}
                </span>
              </p>
              <img
                className="serviceImage"
                src={serviceImage != undefined ? serviceImage : background}
                alt="serviceImage"
                name="serviceImage"
              />
            </label>

            <input
              onChange={onUploadServiceImage}
              type="file"
              name="serviceImage"
              id="serviceImage"
            />
          </div>

          {/* serviice Title */}
          <div className="form_group">
            <label htmlFor="serviceTitle">Service Title</label>
            <input
              type="text"
              placeholder="Eg : Web Development"
              name="serviceTitle"
              id="serviceTitle"
              value={serviceTitle}
              onChange={(e) => setServiceTitle(e.target.value)}
            />
          </div>
          <div className="form_group">
            <label htmlFor="serviceSummary">Service Summary</label>
            {/* <textarea
                  name="serviceSummary"
                  id=""
                  cols="30"
                  rows="4"
                  placeholder="Write something about this service"
                  value={serviceSummary}
                  onChange={(e) => setServiceSummary(e.target.value)}
                ></textarea> */}
            <Editor
              placeholder="Start Typing..."
              value={serviceSummary}
              onTextChange={(e) => setServiceSummary(e.htmlValue)}
              style={{ height: "100px" }}
              className="textarea"
            />
          </div>

          {ServiceEdit === true ? (
            <div className="form_submit">
              <button onClick={handleServiceFormUpdate}>
                Update{loader3 ? <span className="loader3"></span> : ""}
              </button>
            </div>
          ) : (
            <div className="form_submit">
              <button type="submit">
                Submit{loader3 ? <span className="loader3"></span> : ""}
              </button>
            </div>
          )}
        </form>

        {ServiceData.length > 0 ? (
          <div>
            {ServiceData.map((data, index) => {
              return (
                <div className="service_list" key={index}>
                  <div className="ser_length">
                    <h6>{index + 1}</h6>
                  </div>
                  <div className="ser_image">
                    <img
                      src={data.serviceImage ? data.serviceImage : background}
                      alt="serviceImage"
                    />
                  </div>
                  <div className="service_title">
                    <h3>
                      {data.serviceTitle ? data.serviceTitle : "Title Empty"}
                    </h3>
                  </div>

                  <div className="service_summary">
                    <p>
                      {data.serviceSummary
                        ? data.serviceSummary
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
                      onClick={handleServiceEdit}
                    ></i>
                    <i
                      class="bx bxs-message-square-x delete"
                      id={data._id}
                      onClick={handleServiceDelete}
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

export default ServiceDetail;
