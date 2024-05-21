import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center p-4 bg-stone-900">
        <Link to="/">
          <img src="./Croma_logo.png" alt="Croma HeadTag" className="h-10" />
        </Link>
        <Link to="/signin">
          <button className="bg-stone-700 text-white px-4 py-2 rounded">
            Login
          </button>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
