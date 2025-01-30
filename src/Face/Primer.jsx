import React, { useContext } from 'react';
import '../Lips/Lipstick & Liners/Lipstick&Liners.css'
import { DataContext } from '../Lips/DataContext';
import { Link } from 'react-router-dom';

const Primer = () => {
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
  function svgimage302(id,contentId) {
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
        <div className="product-card" id="content-30201">
          <Link to='/productdetails'><img src="./Face/Primer/Primer 01.webp" alt="Matte Lipstick" width="100%"  onClick={() => productDetails('content-30201')}/></Link>
          <p className='rating'>&#11088; 3.7</p>
          <p className="product-name">Lakmē vitc superglow skin perfecting primer</p>
          <p className="product-price">359</p>
          <button className="button type1" onClick={() => clicktoadd('content-30201')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage302('svgimg302-1','content-30201')}>
            <svg id="svgimg302-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 2 */}
        <div className="product-card" id="content-30202">
          <Link to='/productdetails'><img src="./Face/Primer/Primer 02.webp" alt="Lipstick" width="100%"  onClick={() => productDetails('content-30202')}/></Link>
          <p className='rating'>&#11088; 4.9</p>
          <p className="product-name">Lakmē unreal blur perfect primer</p>
          <p className="product-price">656</p>
          <button className="button type1" onClick={() => clicktoadd('content-30202')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage302('svgimg302-2','content-30202')}>
            <svg id="svgimg302-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 3 */}
        <div className="product-card" id="content-30203">
          <Link to='/productdetails'><img src="./Face/Primer/Primer 03.webp" alt="Lipstick" width="100%"  onClick={() => productDetails('content-30203')}/></Link>
          <p className='rating'>&#11088; 4.9</p>
          <p className="product-name">Lakmē absolute undercover gel primer</p>
          <p className="product-price">725</p>
          <button className="button type1" onClick={() => clicktoadd('content-30203')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage302('svgimg302-3','content-30203')}>
            <svg id="svgimg302-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 4 */}
        <div className="product-card" id="content-30204">
          <Link to='/productdetails'><img src="./Face/Primer/Primer 04.webp" alt="Lipstick" width="100%"  onClick={() => productDetails('content-30204')}/></Link>
          <p className='rating'>&#11088; 3</p>
          <p className="product-name">Lakmē unreal blur perfect primer</p>
          <p className="product-price">285</p>
          <button className="button type1" onClick={() => clicktoadd('content-30204')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage302('svgimg302-4','content-30204')}>
            <svg id="svgimg302-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 5 */}
        <div className="product-card" id="content-30205">
          <Link to='/productdetails'><img src="./Face/Primer/Primer 05.webp" alt="Lipstick" width="100%"  onClick={() => productDetails('content-30205')}/></Link>
          <p className='rating'>&#11088; 3</p>
          <p className="product-name">Lakmē unreal glow primer</p>
          <p className="product-price">640</p>
          <button className="button type1" onClick={() => clicktoadd('content2-30205')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage302('svgimg302-5','content-30205')}>
            <svg id="svgimg302-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 6 */}
        <div className="product-card" id="content-30206">
          <Link to='/productdetails'><img src="./Face/Primer/Primer 06.webp" alt="Lipstick" width="100%"  onClick={() => productDetails('content-30206')}/></Link>
          <p className='rating'>&#11088; 3.5</p>
          <p className="product-name">Lakmē absolute skin dew primer 28gm</p>
          <p className="product-price">750</p>
          <button className="button type1" onClick={() => clicktoadd('content-30206')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage302('svgimg302-6','content-30206')}>
            <svg id="svgimg302-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Primer;