import React, { useContext } from 'react';
import { DataContext } from '../Lips/DataContext';
import './Wishlist.css';
import { Link } from 'react-router-dom'
import SubFooter from '../Footer/SubFooter'

const Wishlistproducts = () => {
  const { wishlistdata, setWishlistdata, dataList, setDataList } = useContext(DataContext);

  // Function to remove a product by its index
  const removeProductDetails = (indexToRemove) => {
    setWishlistdata(wishlistdata.filter((_, index) => index !== indexToRemove));
  };

  // Function to add product to the bag
  const addToBag = (product, indexToRemove) => {
    // Check if the product is already in the bag
    const isAlreadyInBag = dataList.some((item) => item.heading === product.heading);

    if (!isAlreadyInBag) {
      // Add the product to the bag
      setDataList([...dataList, product]);

      // Optionally, remove the product from the wishlist
    //   removeProductDetails(indexToRemove);
    } else {
      alert("Product is already in the bag!");
    }
  };

  return (
    <div>
      <div className='home-button'><Link to='/Home' style={{color:'black',textDecoration:'none'}}><span>&larr;</span> Home</Link> </div>
      <h2 style={{textAlign:'center',margin:'10px 0px 10px 0px'}}>WISHLIST</h2>
      {wishlistdata.length > 0 ? (
        <ul style={{ width: 'fit-content',display:'flex',flexWrap:'wrap',gap:'10px' }}>
          {wishlistdata.map((item, index) => (
            <div className='wish-ul-div' key={index}>
              <div className='wish-ul-div1'>
                <img src={item.imgSrc} alt={item.heading} />
                <button className='wish-ul-div1-button' onClick={() => removeProductDetails(index)}>X</button>
              </div>

              <div className='wish-ul-div2'>
                <p className='wish-ul-div2-p1'>
                  <strong>{item.heading}</strong>
                </p>
                <p className='wish-ul-div2-p2'>₹{item.price}</p>
              </div>

              <p className='wish-ul-rating'>{item.rating}</p>

              <Link to='/Bag'><button
                className='wish-ul-button type2'
                onClick={() => addToBag(item, index)}
              >
                Show in Bag
              </button></Link>
            </div>
          ))}
        </ul>
      ) : (
        <div style={{textAlign:'center',marginTop:'250px'}}>
            <p>Your Wishlist is empty!</p> 
            <Link to='/Home'>Continue Shopping</Link>
        </div>
        
        
      )}
       <div style={{margin:'100px 0px 0px 0px'}}><SubFooter/></div>
    </div>
    
  );
};

export default Wishlistproducts;
