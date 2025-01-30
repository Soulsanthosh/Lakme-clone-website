import React, { useContext } from 'react';
import '../Lips/Lipstick & Liners/Lipstick&Liners.css'
import { DataContext } from '../Lips/DataContext';
import { Link } from 'react-router-dom';

const GlowingSkin = () => {
  const { dataList, setDataList } = useContext(DataContext)
  const { wishlistdata, setWishlistdata } = useContext(DataContext)
  const {selectedproduct, setselectedproduct} = useContext(DataContext)

  // Function to add product to the list
  function clicktoadd(contentId) {
    const content = document.getElementById(contentId);

    if (content) {
      // Extract values dynamically based on the specific content block
      const newHeading = content.querySelector(".product-name").innerHTML;
      const newPrice = content.querySelector(".product-price").innerHTML;
      const imgSrc = content.querySelector("img").src;

      // Create a new data object
      const newData = {
        heading: newHeading,
        price: newPrice,
        baseprice:newPrice,
        imgSrc: imgSrc,
        quantity:1,
        categrory:'Eye Liner',
      };

      // Check if the product already exists in the bag
      const isAlreadyInBag = dataList.some((item) => item.heading === newData.heading);

      if (!isAlreadyInBag) {
        setDataList([...dataList, newData]);
      } else {
        alert('Product is already in the bag!');
      }
    }
  }
  

  function doubleclick(contentId) {
    const content = document.getElementById(contentId);

    if (content) {
      // Extract values dynamically based on the specific content block
      const newHeading = content.querySelector(".product-name").innerHTML;
      const newPrice = content.querySelector(".product-price").innerHTML;
      const imgSrc = content.querySelector("img").src;

      // Create a new data object
      const newWishlistdata = {
        heading: newHeading,
        price: newPrice,
        baseprice:newPrice,
        imgSrc: imgSrc,
        quantity:1,
        categrory:'Eye Liner',
      };

      // Check if the product already exists in the wishlist
      const isAlreadyInWishlist = wishlistdata.some((item) => item.heading === newWishlistdata.heading);

      if (!isAlreadyInWishlist) {
          setWishlistdata([...wishlistdata, newWishlistdata]);
      } else {
      alert('Product is already in the wishlist!');
      }
      }
  }

  // Function to change SVG color
  function svgimage601(id,contentId) {
    const svgElement = document.getElementById(id);
    if (svgElement) {
      if (svgElement.style.fill === 'rgb(158, 0, 0)') {
        svgElement.style.fill = ''; // Reset fill color
      } else {
        svgElement.style.fill = 'rgb(158, 0, 0)'; // Set fill color
      }
      doubleclick(contentId);
    }
  }


  function productDetails(contentId){
    const content = document.getElementById(contentId);

    if (content) {
      // Extract values dynamically based on the specific content block
      const newHeading = content.querySelector(".product-name").innerHTML;
      const newPrice = content.querySelector(".product-price").innerHTML;
      const imgSrc = content.querySelector("img").src;
      const rating = content.querySelector(".rating").innerHTML

      // Create a new data object
      const newselectedData = {
        heading: newHeading,
        price: newPrice,
        baseprice:newPrice,
        imgSrc: imgSrc,
        quantity:1,
        rating:rating,
        categrory:'Gloss',
      };
      setselectedproduct([newselectedData])
  }
  
  }

  return (
    <div>
      <div className="product-list">
        {/* Product 1 */}
        <div className="product-card" id="content-60101">
          <Link to='/productdetails'><img src="./Shop By Concern/Glowing/Glowing 01.webp" alt="Matte Lipstick" width="100%" onClick={() => productDetails('content-60101')}/></Link>
          <p className='rating'>&#11088; 4.9</p>
          <p className="product-name">Lakmē Perfect Radiance Night  Cream 50g</p>
          <p className="product-price">449</p>
          <button className="button type1" onClick={() => clicktoadd('content-60101')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage601('svgimg601-1','content-60101')}>
            <svg id="svgimg601-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 2 */}
        <div className="product-card" id="content-60102">
          <Link to='/productdetails'><img src="./Shop By Concern/Glowing/Glowing 02.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-60102')}/></Link>
          <p className='rating'>&#11088; 5</p>
          <p className="product-name">Lakmē 9to5 Vitamin C  Facewash, 100g</p>
          <p className="product-price">224</p>
          <button className="button type1" onClick={() => clicktoadd('content-60102')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage601('svgimg601-2','content-60102')}>
            <svg id="svgimg601-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 3 */}
        <div className="product-card" id="content-60103">
          <Link to='/productdetails'><img src="./Shop By Concern/Glowing/Glowing 03.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-60103')}/></Link>
          <p className='rating'>&#11088; 4.6</p>
          <p className="product-name">Lakmē 9 to 5 Complexion Care  Face Cream</p>
          <p className="product-price">288</p>
          <button className="button type1" onClick={() => clicktoadd('content-60103')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage601('svgimg601-3','content-60103')}>
            <svg id="svgimg601-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 4 */}
        <div className="product-card" id="content-60104">
          <Link to='/productdetails'><img src="./Shop By Concern/Glowing/Glowing 04.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-60104')}/></Link>
          <p className='rating'>&#11088; 4.5</p>
          <p className="product-name">Lakmē Dew Drama Gel Creme,  Pro-Ceramides, Vit E + Vit B3 +  Vit F 50G</p>
          <p className="product-price">349</p>
          <button className="button type1" onClick={() => clicktoadd('content-60104')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage601('svgimg601-4','content-60104')}>
            <svg id="svgimg601-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 5 */}
        <div className="product-card" id="content-60105">
          <Link to='/productdetails'><img src="./Shop By Concern/Glowing/Glowing 05.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-60105')}/></Link>
          <p className='rating'>&#11088; 4.5</p>
          <p className="product-name">Lakmē Absolute Perfect  Radiance Skin Brightening  Light Creme 50g</p>
          <p className="product-price">449</p>
          <button className="button type1" onClick={() => clicktoadd('content2-60105')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage601('svgimg601-5','content-60105')}>
            <svg id="svgimg601-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 6 */}
        <div className="product-card" id="content-60106">
          <Link to='/productdetails'><img src="./Shop By Concern/Glowing/Glowing 06.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-60106')}/></Link>
          <p className='rating'>&#11088; 4.5</p>
          <p className="product-name">Lakmē 9 To 5 Vitamin C+ Night  Cream - 50gm</p>
          <p className="product-price">399</p>
          <button className="button type1" onClick={() => clicktoadd('content-60106')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage601('svgimg601-6','content-60106')}>
            <svg id="svgimg601-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlowingSkin;