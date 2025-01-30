import React, { useContext } from 'react';
import '../Lipstick & Liners/Lipstick&Liners.css'
import { DataContext } from '../DataContext';
import { Link } from 'react-router-dom';

const LiquidLipsticks = () => {
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
  function svgimage102(id,contentId) {
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
        <div className="product-card" id="content-10201">
          <Link to='/productdetails'><img src="./Lips images/Liquid Lipsticks/Liquid Lipsticks 01.webp" alt="Matte Lipstick" width="100%" onClick={() => productDetails('content-10201')}/></Link>
          <p className='rating'>&#11088; 3.5</p>
          <p className="product-name">Lakmē Xtraordin-airy Lip  Mousse</p>
          <p className="product-price">630</p>
          <button className="button type1" onClick={() => clicktoadd('content-10201')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage102('svgimg102-1','content-10201')}>
            <svg id="svgimg102-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 2 */}
        <div className="product-card" id="content-10202">
          <Link to='/productdetails'><img src="./Lips images/Liquid Lipsticks/Liquid Lipsticks 02.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-10202')}/></Link>
          <p className='rating'>&#11088; 4.5</p>
          <p className="product-name">Lakmē forever matte liquid  lip</p>
          <p className="product-price">349</p>
          <button className="button type1" onClick={() => clicktoadd('content-10202')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage102('svgimg102-2','content-10202')}>
            <svg id="svgimg102-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 3 */}
        <div className="product-card" id="content-10203">
          <Link to='/productdetails'><img src="./Lips images/Liquid Lipsticks/Liquid Lipsticks 03.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-10203')}/></Link>
          <p className='rating'>&#11088; 4</p>
          <p className="product-name">Lakmē aabsolute matte melt liquid lip color</p>
          <p className="product-price">750</p>
          <button className="button type1" onClick={() => clicktoadd('content-10203')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage102('svgimg102-3','content-10203')}>
            <svg id="svgimg102-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 4 */}
        <div className="product-card" id="content-10204">
          <Link to='/productdetails'><img src="./Lips images/Liquid Lipsticks/Liquid Lipsticks 04.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-10204')}/></Link>
          <p className='rating'>&#11088; 3.5</p>
          <p className="product-name">Lakmē absolute plump & shine lip gloss</p>
          <p className="product-price">680</p>
          <button className="button type1" onClick={() => clicktoadd('content-10204')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage102('svgimg102-4','content-10204')}>
            <svg id="svgimg102-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 5 */}
        <div className="product-card" id="content-10205">
          <Link to='/productdetails'><img src="./Lips images/Liquid Lipsticks/Liquid Lipsticks 05.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-10205')}/></Link>
          <p className='rating'>&#11088; 3.5</p>
          <p className="product-name">Lakmē Xtraordin-airy lip mousse</p>
          <p className="product-price">650</p>
          <button className="button type1" onClick={() => clicktoadd('content2-10205')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage102('svgimg102-5','content-10205')}>
            <svg id="svgimg102-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 6 */}
        <div className="product-card" id="content-10206">
          <Link to='/productdetails'><img src="./Lips images/Liquid Lipsticks/Liquid Lipsticks 06.jpg" alt="Lipstick" width="100%" onClick={() => productDetails('content-10206')}/></Link>
          <p className='rating'>&#11088; 3.5</p>
          <p className="product-name">Lakmē ultimate glam 4 in 1 lip stack</p>
          <p className="product-price">499</p>
          <button className="button type1" onClick={() => clicktoadd('content-10206')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage102('svgimg102-6','content-10206')}>
            <svg id="svgimg102-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 7 */}
        <div className="product-card" id="content-10207">
          <Link to='/productdetails'><img src="./Lips images/Liquid Lipsticks/Liquid Lipsticks 07.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-10207')}/></Link>
          <p className='rating'>&#11088; 3</p>
          <p className="product-name">Lakmē beyond matte lip liquid</p>
          <p className="product-price">315</p>
          <button className="button type1" onClick={() => clicktoadd('content-10207')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage102('svgimg102-7','content-10207')}>
            <svg id="svgimg102-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Product 8 */}
        <div className="product-card" id="content-10208">
          <Link to='/productdetails'><img src="./Lips images/Liquid Lipsticks/Liquid Lipsticks 08.webp" alt="Lipstick" width="100%" onClick={() => productDetails('content-10208')}/></Link>
          <p className='rating'>&#11088; 3</p>
          <p className="product-name">Lakmē 9t05 priemer + matte liquid lip color</p>
          <p className="product-price">300</p>
          <button className="button type1" onClick={() => clicktoadd('content-10208')}>ADD TO BAG</button>
          <div className="svg-container" onClick={() => svgimage102('svgimg102-8','content-10208')}>
            <svg id="svgimg102-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="35" fill="grey" stroke="white" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquidLipsticks;