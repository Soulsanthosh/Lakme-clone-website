import React from "react";
import './OrderPlaced.css'
import { Link } from 'react-router-dom';
import SubFooter from '../Footer/SubFooter';

export default function OrderPlaced() {
  return (
    <div>
      <div className="home-button">
        <Link to="/Home" style={{ color: 'black', textDecoration: 'none' }}>
          <span>&larr;</span> Home
        </Link>
      </div>
      <div className="overall-placeorder">
        <div className="placeorder-card">
          <div className="checkmark-div">
            <i class="checkmark">✓</i>
          </div>

          <h1>Success<p style={{ color: 'green',fontSize:'15px' }}>(Order Placed)</p></h1>
          
          <p>
            We received your purchase request;
            <br /> we'll be in touch shortly!
          </p>
        </div>
      </div>
      <div style={{margin:'-40px 0px 0px 0px'}}><SubFooter/></div> 
    </div>
  );
}
