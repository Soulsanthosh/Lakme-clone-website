import React, { useContext } from 'react';
import { DataContext } from '../Lips/DataContext';
import './Addtobag.css';
import { Link } from 'react-router-dom'
import SubFooter from '../Footer/SubFooter'

const Addtobag = () => {
  const { dataList, setDataList } = useContext(DataContext);

  // Function to remove a product by its index
  const removeProductDetails = (indexToRemove) => {
    setDataList(dataList.filter((_, index) => index !== indexToRemove));
  };

  // Function to increase quantity and update price
  const increaseQuantity = (index) => {
    const updatedList = dataList.map((item, i) => {
      if (i === index) {
        const updatedQuantity = item.quantity + 1;
        const updatedPrice = parseFloat(item.baseprice) * updatedQuantity; // basePrice remains unchanged
        return { ...item, quantity: updatedQuantity, price: `${updatedPrice.toFixed(2)}` };
      }
      return item;
    });
    setDataList(updatedList);
  };

  // Function to decrease quantity and update price
  const decreaseQuantity = (index) => {
    const updatedList = dataList.map((item, i) => {
      if (i === index && item.quantity > 1) {
        const updatedQuantity = item.quantity - 1;
        const updatedPrice = parseFloat(item.baseprice) * updatedQuantity; // basePrice remains unchanged
        return { ...item, quantity: updatedQuantity, price: `${updatedPrice.toFixed(2)}` };
      }
      return item;
    });
    setDataList(updatedList);
  };

  // Calculate the total price of all items in the bag
  const totalPrice = dataList.reduce((acc, item) => acc + parseFloat(item.price), 0);

  return (
    <div>
      <div className='home-button'><Link to='/Home' style={{color:'black',textDecoration:'none'}}><span>&larr;</span> Home</Link> </div>
      <h2 style={{textAlign:'center',margin:'10px 0px 10px 0px'}}>BAG</h2>
      {dataList.length > 0 ? (
        <div>
          <ul style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            {dataList.map((item, index) => (
              <div
                className="bag-ul-div1"
                key={index}
              >
                <div className="bag-ul-div2">
                  <img src={item.imgSrc} alt={item.heading} />
                  <div className="bag-ul-div2-div1">
                    <p className="bag-ul-div2-div1-p1">
                      <strong>{item.heading}</strong>
                    </p>
                    <p className="bag-ul-div2-div1-p2">₹{item.price}</p>
                  </div>
                </div>
                <div className="bag-ul-div3">
                  <button
                    className="bag-ul-div3-button1"
                    onClick={() => decreaseQuantity(index)}
                  >
                    -
                  </button>
                  <p className="bag-ul-div3-p">{item.quantity}</p>
                  <button
                    className="bag-ul-div3-button2"
                    onClick={() => increaseQuantity(index)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="bag-ul-button"
                  onClick={() => removeProductDetails(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </ul>
          <div className='totalprice-in-bag'>
            <p>Total Price: ₹{totalPrice.toFixed(2)}</p>
            <Link to='/Place Order'><button className="buttonforbag type2">PLACE ORDER</button></Link>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '250px' }}>
          <p>Your bag is empty!</p>
          <Link to='/Home'>Continue Shopping</Link>
        </div>
      )}
      <div style={{margin:'200px 0px 0px 0px'}}><SubFooter/></div>
    </div>
  );
};

export default Addtobag;
