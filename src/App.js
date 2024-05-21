import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./css/main.css";
import Navbar from "./components/Navbar";
import Trending from "./components/Trending";
import NewArrivals from "./components/NewArrivals";
import TopRated from "./components/TopRated";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Error from "./components/Error";
import ProductDetail from "./components/ProductDetail";
import Bestseller from "./components/Bestseller";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "",
          element: (
            <div className="bg-[#171717] min-h-screen">
              <Trending />
              <NewArrivals />
              <TopRated />
              <Bestseller />
            </div>
          ),
        },
        {
          path: "signin",
          element: <Signin />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "/products/:productId",
          element: <ProductDetail />,
        },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return (
    <div className="bg-[#171717] min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
