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

function App() {
  const projectId = "7ra5rfapg5fl";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "",
          element: (
            <>
              <Trending />
              <NewArrivals />
              <TopRated />
            </>
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
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

// import React,{useState} from "react";
// import Routes from "./Components/routes";

// function App() {
//   const [register, changeRegister] = useState(true)
//   const [loginStatus, setLoginStatus] = useState(false)
//   function changeSign(){
//     register === true ? changeRegister(false) : changeRegister(true)
//   }
//   return (
//     <div className="App text-3xl">
//       <Routes loginStatus = {loginStatus} setLoginStatus = {setLoginStatus}/>
//     </div>
//   );
// }

// export default App;
