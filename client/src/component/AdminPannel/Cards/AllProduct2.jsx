import React from 'react'
import product1 from "../../../assets/New_Design/1.jpg";
import product2 from "../../../assets/New_Design/2.jpg";
import product3 from "../../../assets/New_Design/3.jpg";
import product4 from "../../../assets/New_Design/4.jpg";
import product5 from "../../../assets/New_Design/5.jpg";

import './AllProduct2.scss'
import { Link } from 'react-router-dom';
const AllProducts2 = () => {
  return (
    <div>
        <div className="box-6_AllProducts2">
           
          <div className="product_card">
          <div className="back_button">
                <Link to='/'><i className='bx bx-chevrons-left bx-flashing' ></i>Back</Link>
            </div>
            <div className="Product_card_title">
              <p>All Products</p>
            </div>
            <div className="products">
              <div className="product_item">
                <img src={product1} alt="product" />
                <p>FrontEnd Development</p>

                <small>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </small>
                <button>
                  <span> ₹</span> <p>5000</p>
                </button>
              </div>
              <div className="product_item">
                <img src={product2} alt="product" />
                <p>Backend Development</p>

                <small>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </small>

                <button>
                  <span> ₹</span> <p>5000</p>
                </button>
              </div>
              <div className="product_item">
                <img src={product3} alt="product" />
                <p>FullStack Development</p>

                <small>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </small>

                <button>
                  <span> ₹</span> <p>5000</p>
                </button>
              </div>
              <div className="product_item">
                <img src={product5} alt="product" />
                <p>FullStack12 Development</p>

                <small>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </small>

                <button>
                  <span> ₹</span> <p>5000</p>
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AllProducts2;
