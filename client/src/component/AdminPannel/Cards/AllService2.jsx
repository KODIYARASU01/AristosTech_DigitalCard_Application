import React from 'react'
import './AllService2.scss'
import { Link } from 'react-router-dom';
const AllServices2 = () => {
  return (
    <div>
        <div className="box-6_AllService2">
           
          <div className="product_card">
          <div className="back_button">
                <Link to='/'><i className='bx bx-chevrons-left bx-flashing' ></i>Back</Link>
            </div>
            <div className="Product_card_title">
              <p>All Services</p>
            </div>
            <div className="services">
        <div className="box">
        <i className='bx bxl-deezer'></i>
          <p>Digital Marketting</p>

          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae inventore blanditiis eveniet esse sapiente!</small>
        </div>
        <div className="box">
        <i className='bx bxl-react'></i>
          <p>Website Development</p>

          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae inventore blanditiis eveniet esse sapiente!</small>
        </div>
        <div className="box">
        <i className='bx bxl-wordpress' ></i>
          <p>WordPress Website's</p>

          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae inventore blanditiis eveniet esse sapiente!</small>
        </div>
        <div className="box">
        <i className='bx bxl-instagram-alt'></i>
          <p>Social Media Management</p>

          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae inventore blanditiis eveniet esse sapiente!</small>
        </div>
       </div>
          </div>
        </div>
    </div>
  )
}

export default AllServices2;
