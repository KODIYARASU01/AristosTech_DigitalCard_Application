import React, { useEffect, useState } from "react";
import "./SuperAdmin.scss";
import profile from "../../assets/User_Auth/profile.png";
import axios from "axios";
const SuperAdmin = () => {
    let[AllUsers,setAllUsers]=useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/auth/register")
      .then((res) => {
        console.log(res.data.data);
        setAllUsers(res.data.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="super_admin_container">
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

{AllUsers.map((data,index)=>{
    return(
        <div className="admin_list" key={index}>
        <div className="count">
          <h6>{index+1}</h6>
        </div>
        <div className="userProfile">
          <img src={data.profile ? data.profile : profile} alt="profile" />
        </div>
        <div className="UserName">
          <p>{data.firstName} &nbsp; {data.lastName}</p>
        </div>
        <div className="userEmail">
          <p>{data.email}</p>
        </div>
        <div className="userMobile">
            <p>{data.mobileNumber ? data.mobileNumber : "MobileNumber Empty"}</p>
        </div>
        <div className="createdAt">
          <p>{data.createdAt}</p>
        </div>
        <div className="actions">
          <i className="bx bx-show-alt show"></i>
          <i className="bx bxs-edit edit"></i>
          <i className="bx bx-message-square-x delete"></i>
        </div>
      </div>
    )
})}
      
        </div>
      </div>
    </>
  );
};

export default SuperAdmin;