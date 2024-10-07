import { createContext, useContext, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

export let ShoppingCartContext = createContext({});

export default function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const getItemQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const increaseCartQuantity = (id, quantity = 1, isManualChange = false) => {
    setCartItems((currentItems) => {
      const itemInCart = currentItems.find((item) => item.id === id);
  
      if (!itemInCart) {
        toast.success('Item added to cart!');
        return [...currentItems, { id, quantity }];
      } else {
        toast.success('Quantity updated!');
        return currentItems.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: isManualChange
                  ? quantity 
                  : item.quantity + quantity 
              }
            : item
        );
      }
    });
  };
  
  

  const removeFromCart = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
    toast.error('Product removed from cart!'); 

  };

  return (
    <ShoppingCartContext.Provider
      value={{
        // getItemQuantity,
        increaseCartQuantity,
        removeFromCart,
        cartQuantity,
        cartItems,
      }}
    >
      {children}
      <Toaster position="bottom-right" reverseOrder={false}  toastOptions={{
    style: {
      padding: "16px 20px",  
      background: "black",
      color: "white",
    },
  }}
   /> 

    </ShoppingCartContext.Provider>



  );
}


export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
