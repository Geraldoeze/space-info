import { navLinks } from "./NavLinks";
import groupX from "../../images/Group.svg";
import styless from "./styless";
import "./DropDown.css";


export default function SmallDropDown({ onClose }) {
  return (
    <>
      <div className="w-[90%] z-10 ">
        <div className="w-[28px] bg-black mt-5 ml-auto mr-5 " onClick={onClose}>
          <img className="p-1" src={groupX} alt="exit" width='80px' height='80px' />
        </div>
        
  
        <ul className="my-12">
          {navLinks.map((item) => {
            return (
              <li className={`my-6 font-condense`}
              
                key={item.id}>
                <a href={item.path} className={`${styless.textSty}`}>
                  <span className={`${styless.numSty} font-poppins`}>{item.num}</span>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
