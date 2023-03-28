import React from "react";

import Logo from '../../images/icon.png';
import { useState } from "react";
import MainNavigation from "./MainNavigation";
import DropDownSmall from "./DropDownSmall";
import { Link } from "react-router-dom";
// import styless from "./styless";
import SideDrawer from "./SideDrawer/SideDrawer";


export default function Navigation() {
  const [toggle, setToggle] = useState(false);
  const closeToggle = () => setToggle(false);
  // const openToggle = () => setToggle(true)

  return (
    <nav className="fixed z-20 py-4 w-full bg-transparent flex  item-center navbar">
      <Link className="w-[40px] h-[30px] mx-5 " to="/">
          <div className="my-2">
        <img src={Logo} alt="logo" width='100px' height='100px' />
        </div>
      </Link>

       {/* Line */}
       <div className=" sm:hidden md:w-[30%] md:block opacity-50 h-[1px] my-auto lg:bg-white  lg:w-[40%] lg:relative left-[13px]" />

    

      {/* SMALL SCREEN */}
      <div className="sm:hidden flex flex-1 justify-end item-center">
        <button
          className="block border-0 bg-transparent py-2 px-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          onClick={() => setToggle((prev) => !prev)}
        >
          <span className="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <SideDrawer show={toggle} onClick={closeToggle} >
        <div
          className={`${
            toggle ? "flex flex-row-reverse" : "hidden"
          }  text-white z-20 absolute top-[0] w-[100%] h-[100vh] rounded-[5px] sidebar`}
        >
          <DropDownSmall onClose={closeToggle} />
        </div>
      </SideDrawer>  
      </div>
      

     
      {/* BIG SCREEN */}
      <div className={` bg-navbarBg list-none sm:flex hidden justify-center item-center flex-1 `}>
        <MainNavigation />
      </div>
    </nav>
  );
}
