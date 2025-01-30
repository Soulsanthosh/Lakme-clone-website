import React, { createContext, useState } from 'react';

// Create the context
export const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const [dataList, setDataList] = useState([]);
  const [wishlistdata, setWishlistdata] = useState([]);
  const [selectedproduct, setselectedproduct]=useState([])

  return (
    <DataContext.Provider value={{ dataList, setDataList,wishlistdata, setWishlistdata,selectedproduct,setselectedproduct }}>
      {children}
    </DataContext.Provider>
  );
};