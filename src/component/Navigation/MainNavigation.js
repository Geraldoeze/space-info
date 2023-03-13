import React from "react";
import { navLinks } from "./NavLinks";
import "./DropDown.css";
import { Link } from "react-router-dom";

export default function DropDown() {
  return (
    <>
      <ul className="flex text-white ">
        {navLinks.map((item) => {
          return (
            <li key={item.id} className="mx-4">
              <Link to={item.path}> {item.title} </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
