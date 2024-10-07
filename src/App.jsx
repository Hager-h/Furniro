import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Notfound from "./Components/Notfound/Notfound";
import Shop from "./Components/Shop/Shop";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Cart from "./Components/Cart/Cart";
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";
import ClickcontextProvider from "./Context/Clickcontext";
import Shop2 from "./Components/Shop/Shop2";
import Shop3 from "./Components/Shop/Shop3";
import Shop4 from "./Components/Shop/Shop4";
import Products from "./Components/Products/Products";
import Productdetails from "./Components/Productdetails/Productdetails";
import Checkout from "./Components/Checkout/Checkout";
import Search from "./Components/Search/Search";

import ShoppingCartProvider from "./Context/ShoopingCartContext";
import FavContextProvider from "./Context/Favcontext"
import { useEffect } from "react";
import Fav from "./Components/Fav/Fav";
import Shoppingcart from "./Components/Shoppingcart/Shoppingcart";


let routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <Productdetails /> },
      { path: "shop", element: <Shop /> },
      { path: "shop2", element: <Shop2 /> },
      { path: "shop3", element: <Shop3 /> },
      { path: "shop4", element: <Shop4 /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "signin", element: <Signin /> },
      { path: "signup", element: <Signup /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "search", element: <Search /> },
      { path: "fav", element: <Fav /> },
      { path: "shoppingcart", element: <Shoppingcart /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  
useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  return (
    <div className="App">
        <ShoppingCartProvider>
        <ClickcontextProvider>
<FavContextProvider>

          <RouterProvider router={routes}/> 

          </FavContextProvider>

          </ClickcontextProvider>


        </ShoppingCartProvider>

    </div>
  );
}

export default App;
