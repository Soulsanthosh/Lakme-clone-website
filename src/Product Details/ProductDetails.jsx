import React, { useContext, useState } from 'react';
import { DataContext } from '../Lips/DataContext';
import './ProductDetails.css';
import SubFooter from '../Footer/SubFooter';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  const { selectedproduct, wishlistdata, setWishlistdata, dataList, setDataList } = useContext(DataContext);
  const [likes1, setLikes1] = useState(0); // Manage likes for reviews
  const [likes2, setLikes2] = useState(0); // Manage likes for reviews
  const [likes3, setLikes3] = useState(0); // Manage likes for reviews
  const [likes4, setLikes4] = useState(0); // Manage likes for reviews

  // Handle adding/removing from wishlist
  const handleWishlistClick = (product, index) => {
    const isAlreadyInWishlist = wishlistdata.some((item) => item.heading === product.heading);
    if (!isAlreadyInWishlist) {
      setWishlistdata([...wishlistdata, product]);
    } else {
      // Remove from wishlist
      setWishlistdata(wishlistdata.filter((item) => item.heading !== product.heading));
    }
  };

  // Handle adding to bag
  const handleAddToBagClick = (product) => {
    const isAlreadyInBag = dataList.some((item) => item.heading === product.heading);
    if (!isAlreadyInBag) {
      setDataList([...dataList, product]);
    } else {
      alert('Product is already in the bag!');
    }
  };

  // Handle increasing quantity
  const handleIncreaseQuantity = (product) => {
    product.quantity += 1;
    setDataList([...dataList]); // Update the state to trigger a re-render
  };

  // Handle decreasing quantity
  const handleDecreaseQuantity = (product) => {
    if (product.quantity > 1) {
      product.quantity -= 1;
      setDataList([...dataList]); // Update the state to trigger a re-render
    } else {
      alert('Quantity cannot be less than 1!');
    }
  };

  // Handle likes for reviews
  const handleLikeClick1 = () => {
    setLikes1((prevLikes) => prevLikes + 1);
  };
  const handleLikeClick2 = () => {
    setLikes2((prevLikes) => prevLikes + 1);
  };
  const handleLikeClick3 = () => {
    setLikes3((prevLikes) => prevLikes + 1);
  };
  const handleLikeClick4 = () => {
    setLikes4((prevLikes) => prevLikes + 1);
  };

  return (
    <div>
      <div className="home-button">
        <Link to="/Home" style={{ color: 'black', textDecoration: 'none' }}>
          <span>&larr;</span> Home
        </Link>
      </div>
      <h2 style={{ textAlign: 'center', margin: '0px 0px 40px 0px' }}>PRODUCT DETAILS</h2>
      <div>
        {selectedproduct.map((item, index) => (
          <div key={index} className="pd-div">
            <img className="pd-div-image1" src={item.imgSrc} alt={item.heading} />
            <div className="pd-div1">
              <div
                className="pd-div1-svgdiv"
                onClick={() => handleWishlistClick(item, index)}
              >
                <svg
                  id={`svgimg-${index}`}
                  className="pd-div1-svgimage"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="40"
                  height="35"
                  fill={
                    wishlistdata.some((w) => w.heading === item.heading)
                      ? 'rgb(255, 0, 43)'
                      : 'white'
                  }
                  stroke="rgb(255, 0, 43)"
                  strokeWidth="2"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <img className="pd-div1-image" src="./share.png" alt="" />
              </div>
              <p className="pd-div1-p1">
                <strong>{item.heading}</strong>
              </p>
              <p className="pd-div1-p2">
                MRP: <strong>{item.price}</strong> (Inclusive of all taxes)
              </p>
              <p className="pd-div1-p3">{item.rating}</p>
              <div className="pd-div1-div">
                <button
                  id="pd-div1-div-button1"
                  className="pd-div1-div-button1"
                  onClick={() => handleDecreaseQuantity(item)}
                >
                  -
                </button>
                <p id="pd-div1-div-p" className="pd-div1-div-p">
                  {item.quantity}
                </p>
                <button
                  id="pd-div1-div-button2"
                  className="pd-div1-div-button2"
                  onClick={() => handleIncreaseQuantity(item)}
                >
                  +
                </button>
                <button
                  id="pd-div1-div-button3"
                  className="button type1"
                  onClick={() => handleAddToBagClick(item)}
                >
                  ADD TO BAG
                </button>
              </div>
              <h3 className="heading-recomended">Recommended</h3>
              <img className="recomended-image" src="./recomenimage.webp" alt="" />
            </div>
          </div>
        ))}

        <div>
          <h2 style={{ margin: '40px 0px 20px 40px' }}>Reviews</h2>

          <div className="Oar">
            <div className="Rd1">
              <h3 className="Rn">Abitha</h3>

              <p className="Rs">&#11088; &#11088; &#11088; &#11088; &#11088;</p>

              <p className="Rp">
                Love the colour, it's subtle and goes with everything. This is my
                repeat order.
              </p>

              <button className="Rbtn1" onClick={handleLikeClick1}>
                &#10084;
                <p className="Rbp2">{likes1}</p>
              </button>

              <h5 className="Rd">Feb 20, 2022</h5>
            </div>
            <div className="Rd1">
          <h3 className="Rn">Subha</h3>

          <p className="Rs">&#11088; &#11088; &#11088; &#11088; &#11088;</p>

          <p className="Rp">
            Best gloss ,the colour is also nice just that its fades a little
            quick
          </p>

          <button className="Rbtn2" onClick={handleLikeClick2}>
            &#10084;
            <p className="Rbp2">{likes2}</p>
          </button>

          <h5 className="Rd">Jun 15, 2021</h5>
        </div>

        <div className="Rd1">
          <h3 className="Rn">Meena</h3>

          <p className="Rs">&#11088; &#11088; &#11088; &#11088; &#11088;</p>

          <p className="Rp">Very nice product.</p>

          <button className="Rbtn3" onClick={handleLikeClick3}>
            &#10084;
            <p className="Rbp3">{likes3}</p>
          </button>

          <h5 className="Rd">May 7, 2021</h5>
        </div>

        <div className="Rd1">
          <h3 className="Rn">Abinaya</h3>

          <p className="Rs">&#11088; &#11088; &#11088; &#11088; &#11088;</p>

          <p className="Rp">excellent products.</p>

          <button className="Rbtn4" onClick={handleLikeClick4}>
            &#10084;
            <p className="Rbp4">{likes4}</p>
          </button>

          <h5 className="Rd">Mar 31, 2021</h5>
        </div>
          </div>
        </div>
      </div>
      <div style={{margin:'10px 0px 0px 0px'}}><SubFooter/></div> 
    </div>
  );
};

export default ProductDetails;
