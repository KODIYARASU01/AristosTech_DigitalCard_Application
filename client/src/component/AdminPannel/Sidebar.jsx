import React, { useState, useContext } from "react";
import "./Sidebar.scss";
import RightArrow from "../../assets/Social Medias/arrowAnime.gif";
import formContext from "../Context/FormContext";
const Sidebar = () => {
  let {
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
  } = useContext(formContext);

  return (
    <>
      <div className="sidebar_container" id={!slideClose === false ? "close" : "open"}>
        <div className="sidebar_header">
          <h3>Digital Card Creator</h3>
        </div>
        <div className="sidebar_lists">
          <div
            className="list"
            id={
              basicForm === true
                ? "selected"
                : "unSelected"
            }
            onClick={() => {
              setBasicForm(true),
                setContactForm(false),
                setGalleryForm(false),
                setProductForm(false),
                setServiceForm(false),
                setSocialMediaForm(false),
                setTestimonialForm(false);
              setQRCodeForm(false);
            }}
          >
            <div className="icon">
              <i className="bx bx-home"></i>
            </div>
            <div className="list_title">
              <p> Basic Detail's</p>
            </div>
          </div>
          <div
            className="list"
            id={
              socialMediaForm === true
                ? "selected"
                : "unSelected"
            }
            onClick={() => {
              setBasicForm(false),
                setContactForm(false),
                setGalleryForm(false),
                setProductForm(false),
                setServiceForm(false),
                setSocialMediaForm(true),
                setTestimonialForm(false);
              setQRCodeForm(false);
            }}
          >
            <div className="icon">
              <i className="uil uil-share"></i>
            </div>
            <div
              className="list_title"
              id={slideClose ? "title_close" : "title_open"}
            >
              <p>Social Media Links</p>
            </div>
          </div>
          <div
            className="list"
            id={
              contactForm === true
                ? "selected"
                : "unSelected"
            }
            onClick={() => {
              setBasicForm(false),
                setContactForm(true),
                setGalleryForm(false),
                setProductForm(false),
                setServiceForm(false),
                setSocialMediaForm(false),
                setTestimonialForm(false);
              setQRCodeForm(false);
            }}
          >
            <div className="icon">
              <i className="bx bxs-contact"></i>
            </div>
            <div
              className="list_title"
              id={slideClose ? "title_close" : "title_open"}
            >
              <p>Contact Detail's</p>
            </div>
          </div>
          <div
            className="list"
            id={
              serviceForm === true 
                ? "selected"
                : "unSelected"
            }
            onClick={() => {
              setBasicForm(false),
                setContactForm(false),
                setGalleryForm(false),
                setProductForm(false),
                setServiceForm(true),
                setSocialMediaForm(false),
                setTestimonialForm(false);
              setQRCodeForm(false);
            }}
          >
            <div className="icon">
              <i className="uil uil-shopping-cart-alt"></i>
            </div>
            <div
              className="list_title"
              id={slideClose ? "title_close" : "title_open"}
            >
              <p> Our Services</p>
            </div>
          </div>
          <div
            className="list"
            id={
              QRCodeForm === true 
                ? "selected"
                : "unSelected"
            }
            onClick={() => {
              setBasicForm(false),
                setContactForm(false),
                setGalleryForm(false),
                setProductForm(false),
                setServiceForm(false),
                setSocialMediaForm(false),
                setTestimonialForm(false);
              setQRCodeForm(true);
            }}
          >
            <div className="icon">
              <i className="uil uil-video"></i>
            </div>
            <div
              className="list_title"
              id={slideClose ? "title_close" : "title_open"}
            >
              <p>QRCode Session</p>
            </div>
          </div>
          <div
            className="list"
            id={
              productForm === true 
                ? "selected"
                : "unSelected"
            }
            onClick={() => {
              setBasicForm(false),
                setContactForm(false),
                setGalleryForm(false),
                setProductForm(true),
                setServiceForm(false),
                setSocialMediaForm(false),
                setTestimonialForm(false);
              setQRCodeForm(false);
            }}
          >
            <div className="icon">
              <i className="bx bxl-product-hunt"></i>
            </div>
            <div
              className="list_title"
              id={slideClose ? "title_close" : "title_open"}
            >
              <p> Our Products</p>
            </div>
          </div>

          <div
            className="list"
            id={
              galleryForm === true
                ? "selected"
                : "unSelected"
            }
            onClick={() => {
              setBasicForm(false),
                setContactForm(false),
                setGalleryForm(true),
                setProductForm(false),
                setServiceForm(false),
                setSocialMediaForm(false),
                setTestimonialForm(false);
              setQRCodeForm(false);
            }}
          >
            <div className="icon">
              <i className="uil uil-scenery"></i>
            </div>
            <div
              className="list_title"
              id={slideClose ? "title_close" : "title_open"}
            >
              <p> Gallery Session</p>
            </div>
          </div>

          <div
            className="list"
            id={
              testimonialForm === true
                ? "selected"
                : "unSelected"
            }
            onClick={() => {
              setBasicForm(false),
                setContactForm(false),
                setGalleryForm(false),
                setProductForm(false),
                setServiceForm(false),
                setSocialMediaForm(false),
                setQRCodeForm(false);
              setTestimonialForm(true);
            }}
          >
            <div className="icon">
              <i className="uil uil-users-alt"></i>
            </div>
            <div
              className="list_title"
              id={slideClose ? "title_close" : "title_open"}
            >
              <p>Testimonial</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
