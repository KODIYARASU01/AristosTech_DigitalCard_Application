import "./Styles/TestimonialDetail.scss";
import React, { useContext,useEffect } from "react";
import user from "../../../assets/Social Medias/user1.gif";

import clientProfile from "../../../assets/logo2.jpg";
import { useParams } from "react-router-dom";
import formContext from "../../Context/FormContext.jsx";
import { convertTestimonialImageToBase64 } from "../../Helper/Convert.js";
import axios from "axios";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Editor } from "primereact/editor";

import "primereact/resources/themes/lara-light-cyan/theme.css";
const TestimonialDetail = () => {
  let id=useParams();
  let {
    loader4,
    setLoader4,
    loader3,
    setLoader3,

    TestimonialID,
    setTestimonialID,

    clientImage,
    setClientImage,
    clientName,
    setClientName,
    clientFeedbackDate,
    setClientFeedbackDate,
    clientFeedback,
    setClientFeedback,
    TestimonialData,
    setTestimonialData,
    TestimonialEdit,
    setTestimonialEdit,
  } = useContext(formContext);

  console.log(TestimonialData)
  let localStorageDatas = JSON.parse(localStorage.getItem("datas"));
  // Fetching all data:
  useEffect(() => {
    let fetchTestimonial = async () => {
      setLoader4(true)
      await axios
        .get(`http://localhost:3001/testimonialDetail/specific/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorageDatas.token}`,
          },
        })
        .then((res) => {
  
          setTestimonialData(res.data.data);
          setLoader4(false)

        })
        .catch((err) => {
          console.log(err);
          setLoader4(false)
        });
    };

    fetchTestimonial();
  }, []);
    // // Function to strip HTML tags from a string
    const stripHtmlTags = (html) => {
      if (html === null || typeof html === "undefined") {
        return ""; // Return an empty string if html is null or undefined
      }
      const strippedHtml = html.replace(/(<([^>]+)>)/gi, "");
      return strippedHtml;
    };
  //Formik does not support file upload so we could create handler :
  const onUploadTestimonialImage = async (e) => {
    let base64 = await convertTestimonialImageToBase64(e.target.files[0]);
    setClientImage(base64);
  };

  //Testimonial form submit:
  async function handleTestimonialFormSubmit(e) {
    e.preventDefault();
    try {
      setLoader3(true);
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("datas"));
      let SocialMediadata = {
        clientName,
        clientImage,
        clientFeedbackDate,
        clientFeedback,
      };
      // Make authenticated request with bearer token
      await axios
        .post(`http://localhost:3001/testimonialDetail`, SocialMediadata, {
          headers: {
            Authorization: `Bearer ${id.token}`,
          },
        })
        .then((res) => {
          setTestimonialData(res.data.result)
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
          setClientImage(undefined);
          setClientName("");
          setClientFeedbackDate("");
          setClientFeedback("");
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
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Flip,
      });
      setLoader3(false);
    }
  }
  //Testimonial form Edit:
  async function handleTestimonialUpdate(e) {
    e.preventDefault();
    try {
      setLoader3(true);
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("datas"));
      let data = {
        clientImage,
        clientName,
        clientFeedbackDate,
        clientFeedback,
      };
      // Make authenticated request with bearer token
      await axios
        .put(
          `http://localhost:3001/testimonialDetail/update/${TestimonialID}`,
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
          setClientImage(undefined);
          setClientName("");
          setClientFeedbackDate("");
          setClientFeedback("");
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
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Flip,
      });
      setLoader3(false);
    }
  }
  //service form edit:

  async function handleTestimonialEdit(e) {
    setLoader3(true);
    // Retrieve token from local storage or wherever it's stored
    let id = JSON.parse(localStorage.getItem("datas"));
    await axios
      .get(`http://localhost:3001/testimonialDetail/specificId/${e.target.id}`, {
        headers: {
          Authorization: `Bearer ${id.token}`,
        },
      })
      .then((res) => {
        setClientImage(res.data.data.clientImage);
        setClientName(res.data.data.clientName);
        setClientFeedback(res.data.data.clientFeedback);
        setClientFeedbackDate(res.data.data.clientFeedbackDate)
        setTestimonialID(res.data.data._id)
         setTestimonialEdit(true);
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
        setTestimonialEdit(false);
      });
  }

  //Service Form Delete:
  async function handleTestimonialDelete(e) {
    setLoader3(true);
    // Retrieve token from local storage or wherever it's stored
    let id = JSON.parse(localStorage.getItem("datas"));
    await axios
      .delete(`http://localhost:3001/testimonialDetail/delete/${e.target.id}`, {
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
         setTestimonialEdit(false);
        setLoader3(false);
      })
      .catch((err) => {
        toast.error(err, {
          position: "top-center",
          autoClose: 2000,
          transition: Flip,
        });
        setLoader3(false);
         setTestimonialEdit(false);
      });
  }
  return (
    <div>
      <div
        className="Form8_container"
        // id={slideClose ? "Form1close" : "Form1open"}
      >
        <div className="Form_title">
          <h4>Testimonial Session</h4>
          <img src={user} alt="user" />
        </div>

        <form action="" onSubmit={handleTestimonialFormSubmit}>
          {/* //service image */}
          <div className="form_group">
            <label htmlFor="testimonialImage">
              <img
                onChange={onUploadTestimonialImage}
                className="testimonialImage"
                src={clientImage !== undefined ? clientImage : clientProfile}
                alt=""
                name="testimonialImage"
              />
              <i className="bx bxs-chevrons-left bx-flashing"></i>
              <span>Upload your Picture</span>
            </label>

            <input
              onChange={onUploadTestimonialImage}
              type="file"
              name="testimonialImage"
              id="testimonialImage"
            />
          </div>

          {/* serviice Title */}
          <div className="form_group">
            <label htmlFor="clientName">Client FullName</label>
            <input
              type="text"
              placeholder="Eg : John K"
              name="clientName"
              id="clientName"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
            <label htmlFor="feedbackDate">Feedback Date</label>
            <input
              type="date"
              // placeholder="Eg : John K"
              name="feedbackDate"
              id="feedbackDate"
              value={clientFeedbackDate}
              onChange={(e) => setClientFeedbackDate(e.target.value)}
            />
          </div>
          <div className="form_group">
            <label htmlFor="clientSummary">Client Feed Back</label>
            {/* <textarea
                  name="clientSummary"
                  id=""
                  cols="30"
                  rows="3"
                  placeholder="Paste out client feedback details"
                  value={clientFeedback}
                  onChange={(e) => setClientFeedback(e.target.value)}
                ></textarea> */}
            <Editor
              placeholder="Start Typing..."
              value={clientFeedback}
              onTextChange={(e) => setClientFeedback(e.htmlValue)}
              style={{ height: "100px" }}
              className="textarea"
            />
          </div>

          {TestimonialEdit === true ? (
            <div className="form_submit">
              <button onClick={handleTestimonialUpdate}>
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
        {TestimonialData.length > 0 ? (
          <div>
            {TestimonialData.map((data, index) => {
              return (
                <div className="testimonial_list" key={index}>
                  <div className="ser_length">
                    <h6>{index + 1}</h6>
                  </div>
                  <div className="ser_image">
                    <img
                      src={data.clientImage ? data.clientImage : background}
                      alt="clientImage"
                    />
                  </div>
                  <div className="service_title">
                    <h3>
                      {data.clientName ? data.clientName : "Client Name Empty"}
                    </h3>
                  </div>

                  <div className="service_summary">
                    <p>
                      {data.clientFeedback
                        ? stripHtmlTags(data.clientFeedback)
                        : "Feedback Empty"}
                    </p>
                  </div>
                  <div className="service_price">
                    <small>{data.clientFeedbackDate ? data.clientFeedbackDate : 'Date Empty'}</small>
                  </div>
                  <div className="actions">
                    <i
                      class="bx bxs-edit edit"
                      id={data._id}
                      onClick={handleTestimonialEdit}
                    ></i>
                    <i
                      class="bx bxs-message-square-x delete"
                      id={data._id}
                      onClick={handleTestimonialDelete}
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

export default TestimonialDetail;
