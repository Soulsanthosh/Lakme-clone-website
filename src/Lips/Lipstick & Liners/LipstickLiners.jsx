import React, { useContext } from 'react';
import './Lipstick&Liners.css'
import { DataContext } from '../DataContext';
import { Link } from 'react-router-dom';

const LipstickLiners = () => {
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
        categrory:'Lip Balm',
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
        categrory:'Lip Balm',
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
  function svgimage101(id,contentId) {
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
        <div className="product-card" id="content-10101">
          <Link to='/productdetails'><img src="./Lips images/Lipstick & Liners/Lipstick & Liners 01.webp" alt="Matte Lipstick" width="100%" onClick={() => productDetails('content-10101')}/></Link>
          <p className='rating'>&#11088; 4.7</p>
          <p className="product-name">Lakmē 9to5 Powerplay Priming Matte Lipstick</p>
          <p className="product-price">499</p>
          <button className="button type1" onClick={() => clicktoadd('content-10101')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage101('svgimg101-1','content-10101')}>
            <svg id="svgimg101-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 2 */}
        <div className="product-card" id="content-10102">
          <Link to='/productdetails'><img src="./Lips images/Lipstick & Liners/Lipstick & Liners 02.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-10102')}/></Link>
          <p className='rating'>&#11088; 4.8</p>
          <p className="product-name">Lakmē Absolute Matte Revolution Lip Color</p>
          <p className="product-price">800</p>
          <button className="button type1" onClick={() => clicktoadd('content-10102')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage101('svgimg101-2','content-10102')}>
            <svg id="svgimg101-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 3 */}
        <div className="product-card" id="content-10103">
          <Link to='/productdetails'><img src="./Lips images/Lipstick & Liners/Lipstick & Liners 03.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-10103')}/></Link>
          <p className='rating'>&#11088; 4.5</p>
          <p className="product-name">Lakmē Perfect Definition Lip Liner</p>
          <p className="product-price">255</p>
          <button className="button type1" onClick={() => clicktoadd('content-10103')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage101('svgimg101-3','content-10103')}>
            <svg id="svgimg101-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 4 */}
        <div className="product-card" id="content-10104">
          <Link to='/productdetails'><img src="./Lips images/Lipstick & Liners/Lipstick & Liners 04.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-10104')}/></Link>
          <p className='rating'>&#11088; 4.3</p>
          <p className="product-name">Lakmē Absolute Lip pout creme lip color</p>
          <p className="product-price">650</p>
          <button className="button type1" onClick={() => clicktoadd('content-10104')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage101('svgimg101-4','content-10104')}>
            <svg id="svgimg101-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 5 */}
        <div className="product-card" id="content-10105">
          <Link to='/productdetails'><img src="./Lips images/Lipstick & Liners/Lipstick & Liners 05.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-10105')}/></Link>
          <p className='rating'>&#11088; 4.8</p>
          <p className="product-name">Lakmē Xtraordin-airy one- and-done tint</p>
          <p className="product-price">629</p>
          <button className="button type1" onClick={() => clicktoadd('content-10105')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage101('svgimg101-5','content-10105')}>
            <svg id="svgimg101-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 6 */}
        <div className="product-card" id="content-10106">
          <Link to='/productdetails'><img src="./Lips images/Lipstick & Liners/Lipstick & Liners 06.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-10106')}/></Link>
          <p className='rating'>&#11088; 4.8</p>
          <p className="product-name">Lakmē Absolute Matte ultimate lip color with argan oil</p>
          <p className="product-price">700</p>
          <button className="button type1" onClick={() => clicktoadd('content-10106')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage101('svgimg101-6','content-10106')}>
            <svg id="svgimg101-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 7 */}
        <div className="product-card" id="content-10107">
          <Link to='/productdetails'><img src="./Lips images/Lipstick & Liners/Lipstick & Liners 07.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-10107')}/></Link>
          <p className='rating'>&#11088; 4.8</p>
          <p className="product-name">Lakmē cushion matte</p>
          <p className="product-price">269</p>
          <button className="button type1" onClick={() => clicktoadd('content-10107')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage101('svgimg101-7','content-10107')}>
            <svg id="svgimg101-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 8 */}
        <div className="product-card" id="content-10108">
          <Link to='/productdetails'><img src="./Lips images/Lipstick & Liners/Lipstick & Liners 08.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-10108')}/></Link>
          <p className='rating'>&#11088; 4.5</p>
          <p className="product-name">Lakmē Absolute 3d lip definer</p>
          <p className="product-price">640</p>
          <button className="button type1" onClick={() => clicktoadd('content-10108')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage101('svgimg101-8','content-10108')}>
            <svg id="svgimg101-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 9 */}
        <div className="product-card" id="content-10109">
          <Link to='/productdetails'><img src="./Lips images/Lipstick & Liners/Lipstick & Liners 09.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-10109')}/></Link>
          <p className='rating'>&#11088; 3</p>
          <p className="product-name">Lakmē Absolute lip pout matte lip color</p>
          <p className="product-price">650</p>
          <button className="button type1" onClick={() => clicktoadd('content-10109')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage101('svgimg101-9','content-10109')}>
            <svg id="svgimg101-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 10 */}
        <div className="product-card" id="content-10110">
          <Link to='/productdetails'><img src="./Lips images/Lipstick & Liners/Lipstick & Liners 10.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-10110')}/></Link>
          <p className='rating'>&#11088; 4.5</p>
          <p className="product-name">Lakmē Absolute lip pouts matte masaba lip color</p>
          <p className="product-price">750</p>
          <button className="button type1" onClick={() => clicktoadd('content-10110')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage101('svgimg101-10','content-10110')}>
            <svg id="svgimg101-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 11 */}
        <div className="product-card" id="content-10111">
          <Link to='/productdetails'><img src="./Lips images/Lipstick & Liners/Lipstick & Liners 11.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-10111')}/></Link>
          <p className='rating'>&#11088; 5</p>
          <p className="product-name">Lakmē unreal 3d slim bullet</p>
          <p className="product-price">825</p>
          <button className="button type1" onClick={() => clicktoadd('content-10111')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage101('svgimg101-11','content-10111')}>
            <svg id="svgimg101-11" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>       
      </div>
    </div>
  );
};

export default LipstickLiners;

