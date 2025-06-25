import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItem, setcartItem] = useState({});
  
  const addToCart = (itemId) => {
    if (!cartItem[itemId]) {
      setcartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeItem = (itemId) => {
    setcartItem((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId] = newCart[itemId] - 1;
      } else {
        // Remove item completely when quantity reaches 0
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  useEffect(() => {
    console.log("cartItem", cartItem);
  }, [cartItem]);

  const contextValue = {
    food_list,
    cartItem,
    setcartItem,
    addToCart,
    removeItem,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;