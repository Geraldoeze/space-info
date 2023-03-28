import React from "react";
import { navLinks } from "./NavLinks";
import styless from "./styless";
import "./DropDown.css";
import { Link, useLocation } from "react-router-dom";

export default function DropDown() {
  const path = useLocation();
  const pathname = path.pathname;
  
  return (
    <>
      <ul className="flex text-white font-condense">
        {navLinks.map((item) => {
          return (
            <li key={item.id} className={`mx-5 h-[3rem] ${pathname === item.path ? 'border-b-[2px]' : '' }  text-[16px] tracking-[2.7px]`}>
              <Link className="flex my-[1rem] leading-[19.2px]" to={item.path}>
                <span className={`${styless.numSty} sm:hidden lg:block`}>
                  {item.num}
                </span>{" "}
                {item.title}{" "}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
