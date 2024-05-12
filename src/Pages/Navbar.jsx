import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav
        className={` nav-main flex gap-4 p-8 justify-between items-center bg-${
          props.mode
        } text-${props.mode === "gray-900" ? "white" : "black"} w-full`}
      >
        <div className="left flex gap-4 items-center">
          <div className="logo ">
            <Link to="/">LOGO</Link>{" "}
          </div>

          <div className="nav-items flex items-center gap-4">
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/about">
              <button>About us</button>
            </Link>
            <Link to="">
              <button>DropDown</button>
            </Link>
            <Link to="">
              <button>Anything</button>
            </Link>
          </div>
        </div>

        <div className="right flex gap-3">
          <label className="inline-flex items-center  cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onClick={props.toggleMode}
            />
            <div className="relative w-9 h-5 bg-gray-200  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white   after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 "></div>
          </label>
          <span>{props.mtext}</span>
          <input type="text" className="bg-gray-700 border-2 border-gray-400" />
          <button className="">Search</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
