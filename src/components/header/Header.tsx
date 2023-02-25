import React from "react";
import { Link } from "react-router-dom";

const logo = (
  <div className="">
    <Link to="./">
      <h2 className="w-1/4 text-teal cursor-ponter">
        e<span className="text-tomato">Commerce</span>.
      </h2>
    </Link>
  </div>
);

const Header = () => {
  return (
    <header className="w-full bg-primary text-white">
      <div className="w-full h-32 max-w-5xl mx-auto p-4 flex justify-between items-center relative">
        {logo}
      </div>
    </header>
  );
};

export default Header;
