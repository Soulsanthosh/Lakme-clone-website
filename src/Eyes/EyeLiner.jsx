import React, { useContext } from 'react';
import '../Lips/Lipstick & Liners/Lipstick&Liners.css'
import { DataContext } from '../Lips/DataContext';
import { Link } from 'react-router-dom';

const EyeLiner = () => {
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
  function svgimage201(id,contentId) {
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
        <div className="product-card" id="content-20101">
          <Link to='/productdetails'><img src="./Eyes images/Eye Liner/Eye Liner 01.webp" alt="Matte Lipstick" width="100%" onClick={() => productDetails('content-20101')}/></Link>
          <p className='rating'>&#11088; 4.9</p>
          <p className="product-name">Lakmē 9 to 5 black impact liner</p>
          <p className="product-price">355</p>
          <button className="button type1" onClick={() => clicktoadd('content-20101')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage201('svgimg201-1','content-20101')}>
            <svg id="svgimg201-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 2 */}
        <div className="product-card" id="content-20102">
          <Link to='/productdetails'><img src="./Eyes images/Eye Liner/Eye Liner 02.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-20102')}/></Link>
          <p className='rating'>&#11088; 4.8</p>
          <p className="product-name">Lakmē 9 to 5 eyeconic liquid eyeliner</p>
          <p className="product-price">220</p>
          <button className="button type1" onClick={() => clicktoadd('content-20102')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage201('svgimg201-2','content-20102')}>
            <svg id="svgimg201-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 3 */}
        <div className="product-card" id="content-20103">
          <Link to='/productdetails'><img src="./Eyes images/Eye Liner/Eye Liner 03.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-20103')}/></Link>
          <p className='rating'>&#11088; 4.8</p>
          <p className="product-name">Lakmē absolute explore eye pencil</p>
          <p className="product-price">422</p>
          <button className="button type1" onClick={() => clicktoadd('content-20103')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage201('svgimg201-3','content-20103')}>
            <svg id="svgimg201-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 4 */}
        <div className="product-card" id="content-20104">
          <Link to='/productdetails'><img src="./Eyes images/Eye Liner/Eye Liner 04.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-20104')}/></Link>
          <p className='rating'>&#11088; 5</p>
          <p className="product-name">Lakmē eyeconic liner pen fine tip, 1 ml</p>
          <p className="product-price">495</p>
          <button className="button type1" onClick={() => clicktoadd('content-20104')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage201('svgimg201-4','content-20104')}>
            <svg id="svgimg201-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 5 */}
        <div className="product-card" id="content-20105">
          <Link to='/productdetails'><img src="./Eyes images/Eye Liner/Eye Liner 05.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-20105')}/></Link>
          <p className='rating'>&#11088; 5</p>
          <p className="product-name">Lakmē eyeconic liner pen, 1 ml</p>
          <p className="product-price">495</p>
          <button className="button type1" onClick={() => clicktoadd('content2-20105')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage201('svgimg201-5','content-20105')}>
            <svg id="svgimg201-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 6 */}
        <div className="product-card" id="content-20106">
          <Link to='/productdetails'><img src="./Eyes images/Eye Liner/Eye Liner 06.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-20106')}/></Link>
          <p className='rating'>&#11088; 5</p>
          <p className="product-name">Lakmē eyeconic pro brush liner</p>
          <p className="product-price">479</p>
          <button className="button type1" onClick={() => clicktoadd('content-20106')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage201('svgimg201-6','content-20106')}>
            <svg id="svgimg201-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 7 */}
        <div className="product-card" id="content-20107">
          <Link to='/productdetails'><img src="./Eyes images/Eye Liner/Eye Liner 07.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-20107')}/></Link>
          <p className='rating'>&#11088; 4.9</p>
          <p className="product-name">Lakmē unreal precision liquid eye liner</p>
          <p className="product-price">315</p>
          <button className="button type1" onClick={() => clicktoadd('content-20107')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage201('svgimg201-7','content-20107')}>
            <svg id="svgimg201-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 8 */}
        <div className="product-card" id="content-20108">
          <Link to='/productdetails'><img src="./Eyes images/Eye Liner/Eye Liner 08.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-20108')}/></Link>
          <p className='rating'>&#11088; 4.9</p>
          <p className="product-name">Lakmē ultimate glam eye liner</p>
          <p className="product-price">150</p>
          <button className="button type1" onClick={() => clicktoadd('content-20108')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage201('svgimg201-8','content-20108')}>
            <svg id="svgimg201-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyeLiner;