import React, { useContext } from 'react';
import '../Lips/Lipstick & Liners/Lipstick&Liners.css'
import { DataContext } from '../Lips/DataContext';
import { Link } from 'react-router-dom';

const Mascara = () => {
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
        categrory:'Mascara',
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
        categrory:'Mascara',
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
  function svgimage203(id,contentId) {
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
        <div className="product-card" id="content-20301">
          <Link to='/productdetails'><img src="./Eyes images/Mascara/Mascara 01.webp" alt="Matte Lipstick" width="100%" onClick={() => productDetails('content-20301')}/></Link>
          <p className='rating'>&#11088; 4.8</p>
          <p className="product-name">Lakmē 9 to 5 eyeconic curling mascara</p>
          <p className="product-price">450</p>
          <button className="button type1" onClick={() => clicktoadd('content-20301')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage203('svgimg203-1','content-20301')}>
            <svg id="svgimg203-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 2 */}
        <div className="product-card" id="content-20302">
          <Link to='/productdetails'><img src="./Eyes images/Mascara/Mascara 02.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-20302')}/></Link>
          <p className='rating'>&#11088; 4.8</p>
          <p className="product-name">Lakmē absolute flutter secrets dramatic eyes mascara</p>
          <p className="product-price">680</p>
          <button className="button type1" onClick={() => clicktoadd('content-20302')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage203('svgimg203-2','content-20302')}>
            <svg id="svgimg203-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 3 */}
        <div className="product-card" id="content-20303">
          <Link to='/productdetails'><img src="./Eyes images/Mascara/Mascara 03.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-20303')}/></Link>
          <p className='rating'>&#11088; 5</p>
          <p className="product-name">Lakmē absolute 3d lash volumizer</p>
          <p className="product-price">700</p>
          <button className="button type1" onClick={() => clicktoadd('content-20303')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage203('svgimg203-3','content-20303')}>
            <svg id="svgimg203-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 4 */}
        <div className="product-card" id="content-20304">
          <Link to='/productdetails'><img src="./Eyes images/Mascara/Mascara 04.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-20304')}/></Link>
          <p className='rating'>&#11088; 4.8</p>
          <p className="product-name">Lakmē eyeconic volume  mascara, 8.5 ml</p>
          <p className="product-price">342</p>
          <button className="button type1" onClick={() => clicktoadd('content-20304')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage203('svgimg203-4','content-20304')}>
            <svg id="svgimg203-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 5 */}
        <div className="product-card" id="content-20305">
          <Link to='/productdetails'><img src="./Eyes images/Mascara/Mascara 05.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-20305')}/></Link>
          <p className='rating'>&#11088; 4</p>
          <p className="product-name">Lakmē lash boost extreme mascara 10 ml</p>
          <p className="product-price">764</p>
          <button className="button type1" onClick={() => clicktoadd('content2-20305')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage203('svgimg203-5','content-20305')}>
            <svg id="svgimg203-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mascara;