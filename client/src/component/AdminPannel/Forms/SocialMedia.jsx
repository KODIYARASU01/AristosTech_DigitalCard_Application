import React, { useContext, useEffect } from "react";
import "./Styles/SocialMedia.scss";
import user from "../../../assets/Social Medias/user1.gif";
import background from "../../../assets/banner.jpg";
import upload from "../../../assets/Social Medias/addImage.gif";
import f from "../../../assets/Social Medias/f.gif";
import linkedin from "../../../assets/Social Medias/linkedin.gif";
import whatsup from "../../../assets/Social Medias/whatsup.gif";
import twiter from "../../../assets/Social Medias/twiter.gif";
import insta from "../../../assets/Social Medias/insta.gif";
import company from "../../../assets/Social Medias/company.gif";
import direction from "../../../assets/Social Medias/direction.gif";
import utube from "../../../assets/Social Medias/utube.gif";
import git from '../../../assets/Social Medias/git.gif'
import { useParams } from "react-router-dom";
import formContext from "../../Context/FormContext.jsx";
import axios from "axios";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Editor } from "primereact/editor";

import "primereact/resources/themes/lara-light-cyan/theme.css";
const SocialMedia = () => {
  let id = useParams();
  let {
    loader4,
    setLoader4,
    userToken,
    setUserToken,
    loader3,
    setLoader3,

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
    SocialMediaData,
    setSocialMediaData,
  } = useContext(formContext);
  let localStorageDatas = JSON.parse(localStorage.getItem("datas"));
  // Fetching all data:
  useEffect(() => {
    let socialmedia = async () => {
      setLoader4(true);
      await axios
        .get(
          `https://aristostech-digitalcard-application.onrender.com/socialMediaDetail/specific/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorageDatas.token}`,
            },
          }
        )
        .then((res) => {
          setSocialMediaData(res.data.data);
          setFacebook(res.data.data[0].Facebook);
          setInstagram(res.data.data[0].Instagram);
          setTwiter(res.data.data[0].Twiter);
          setWhatsUp(res.data.data[0].WhatsUp);
          setLinkedIn(res.data.data[0].LinkedIn);
          setDirection(res.data.data[0].Direction);
          setWebsite(res.data.data[0].Website);
          setUTube(res.data.data[0].UTube);
          setGithub(res.data.data[0].Github)
          setLoader4(false);
        })
        .catch((err) => {
          console.log(err);
          setLoader4(false);
        });
    };
    socialmedia();
  }, []);
  //SocialMedia form submit:
  async function handleSocialMediaFormSubmit(e) {
    e.preventDefault();

    try {
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("datas"));
      let SocialMediadata = {
        Facebook,
        LinkedIn,
        WhatsUp,
        Instagram,
        Twiter,
        Direction,
        Website,
        UTube,
        Github
      };
      setLoader3(true);
      // Make authenticated request with bearer token
      await axios
        .post(
          "https://aristostech-digitalcard-application.onrender.com/socialMediaDetail",
          SocialMediadata,
          {
            headers: {
              Authorization: `Bearer ${id.token}`,
            },
          }
        )
        .then((res) => {
          setLoader3(false);

          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setFacebook('');
          setDirection('');
          setWebsite("");
          setWhatsUp("");
          setInstagram("");
          setTwiter("");
          setUTube("");
          setLinkedIn("");
          setGithub("");
          setLoader3(false);
        })
        .catch((error) => {
          setLoader3(false);
          toast.error(error.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
        });
      setLoader3(false);
    } catch (error) {
      // Handle errors
      toast.error(error.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Flip,
      });
      setLoader3(false);
    }
  }
  //SocialMedia form Edit:
  async function handleSocialMediaFormEdit(e) {
    e.preventDefault();
    try {
      setLoader3(true);
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("datas"));
      let data = {
        Facebook,
        LinkedIn,
        WhatsUp,
        Instagram,
        Twiter,
        Website,
        Direction,
        UTube,
        Github
      };
      // Make authenticated request with bearer token
      await axios
        .put(
          `https://aristostech-digitalcard-application.onrender.com/socialMediaDetail/update/${SocialMediaData[0]._id}`,
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
        })
        .catch((err) => {
          toast.success(err.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
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
  return (
    <div>
      <div
        className="Form7_container"
        // id={slideClose ? "Form7close" : "Form7open"}
      >
        <div className="Form_title">
          <h4>Social Media Detail Update</h4>
          <img src={user} alt="user" />
        </div>

        <form action="" onSubmit={handleSocialMediaFormSubmit}>
          <div className="form_group">
            <label htmlFor="company">
              <img src={company} alt="company" />
            </label>
            <div className="SocialMedia_input">
              <small>Your Company Website Link</small>
              <input
                type="text"
                placeholder="Eg : http://shorts.mp4"
                name="company"
                id="company"
                value={Website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
          </div>
          <div className="or">(OR)</div>
          <div className="form_group">
            <label htmlFor="direction">
              <img src={direction} alt="direction" />
            </label>
            <div className="SocialMedia_input">
              <small>Add Google Map location Link</small>
              <input
                type="text"
                placeholder="Eg : http://shorts.mp4"
                name="direction"
                id="direction"
                value={Direction}
                onChange={(e) => setDirection(e.target.value)}
              />
            </div>
          </div>
          <div className="or">(OR)</div>
          <div className="form_group">
            <label htmlFor="facebook">
              <img src={f} alt="facebook" />
            </label>
            <div className="SocialMedia_input">
              <small>Add Facebook Link</small>
              <input
                type="text"
                placeholder="Eg : http://shorts.mp4"
                name="facebook"
                id="facebook"
                value={Facebook}
                onChange={(e) => setFacebook(e.target.value)}
              />
            </div>
          </div>
          <div className="or">(OR)</div>
          <div className="form_group">
            <label htmlFor="linkedin">
              <img src={linkedin} alt="LinkedIn" />
            </label>
            <div className="SocialMedia_input">
              <small>Add LinkedIn Link</small>
              <input
                type="text"
                placeholder="Eg : http://shorts.mp4"
                name="linkedin"
                id="linkedin"
                value={LinkedIn}
                onChange={(e) => setLinkedIn(e.target.value)}
              />
            </div>
          </div>
          <div className="or">(OR)</div>
          <div className="form_group">
            <label htmlFor="whatsup">
              <img src={whatsup} alt="WhatsUp" />
            </label>
            <div className="SocialMedia_input">
              <small>Add your Whatsup Number</small>
              <input
                type="tel"
                placeholder="Eg : +912456456446"
                name="whatsup"
                id="whatsup"
                value={WhatsUp}
                onChange={(e) => setWhatsUp(e.target.value)}
              />
            </div>
          </div>
          <div className="or">(OR)</div>
          <div className="form_group">
            <label htmlFor="insta">
              <img src={insta} alt="Insta" />
            </label>
            <div className="SocialMedia_input">
              <small>Add Instagram Link</small>
              <input
                type="text"
                placeholder="Eg : http://shorts.mp4"
                name="insta"
                id="insta"
                value={Instagram}
                onChange={(e) => setInstagram(e.target.value)}
              />
            </div>
          </div>
          <div className="or">(OR)</div>
          <div className="form_group">
            <label htmlFor="twiter">
              <img src={twiter} alt="Twiter" />
            </label>
            <div className="SocialMedia_input">
              <small>Add Twiter Link</small>
              <input
                type="text"
                placeholder="Eg : http://shorts.mp4"
                name="twiter"
                id="twiter"
                value={Twiter}
                onChange={(e) => setTwiter(e.target.value)}
              />
            </div>
          </div>
          <div className="or">(OR)</div>
          <div className="form_group">
            <label htmlFor="utube">
              <img src={utube} alt="utube" />
            </label>
            <div className="SocialMedia_input">
              <small>Add your channel link</small>
              <input
                type="text"
                placeholder="Eg : http://shorts.mp4"
                name="utube"
                id="utube"
                value={UTube}
                onChange={(e) => setUTube(e.target.value)}
              />
            </div>
          </div>
          <div className="or">(OR)</div>
          <div className="form_group">
            <label htmlFor="github">
              <img src={git} alt="github" />
            </label>
            <div className="SocialMedia_input">
              <small>Add your Github link</small>
              <input
                type="text"
                placeholder="Eg : http://shorts.mp4"
                name="github"
                id="github"
                value={Github}
                onChange={(e) => setGithub(e.target.value)}
              />
            </div>
          </div>
          {SocialMediaData.length > 0 ? (
            <div className="form_submit">
              <button onClick={handleSocialMediaFormEdit}>
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

export default SocialMedia;
