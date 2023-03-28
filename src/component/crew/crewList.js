import { crewData } from "./crewdata";
import React, { useState } from "react";
import styles from "../styles/styles";


const CrewList = () => {
  const [view, setView] = useState(1);
  const changeNum = (num) => setView(num);
  
  
 
  return (
    <>
      {crewData
        ?.filter((val) => view === val.id)
        .map((val) => {
          return (
            <div key={val.id} className="md:flex md:flex-col-reverse lg:flex lg:flex-row-reverse justify-between lg:text-left">
              <div className="w-[160px] md:w-[320px] lg:w-[40%] mx-auto">
                <div className={`sm:w-full flex justify-content lg:flex-row-reverse`}>
                  <img
                    src={val.image}
                    alt="img"
                    width="100%"
                    className="hidden lg:block "
                  />
                  <img
                    src={val.imageSm}
                    alt="img"
                    width="100%"
                    className="sm:block lg:hidden"
                  />
                </div>
              </div>
              <div className="md:flex md:flex-col-reverse lg:w-[55%] lg:my-auto lg:flex">
                
                <div className="my-2 mx-auto w-[6rem] flex justify-around ">
                <div className={`${1 === val.id ? styles.wytImg : styles.greyImg}`} onClick={() => changeNum(1)} />
                <div className={`${2 === val.id ? styles.wytImg : styles.greyImg}`} onClick={() => changeNum(2)} />
                <div className={`${3 === val.id ? styles.wytImg : styles.greyImg}`} onClick={() => changeNum(3)} />
                <div className={`${4 === val.id ? styles.wytImg : styles.greyImg}`} onClick={() => changeNum(4)} />
                
               
                  
                  
                </div>
                <div className="px-10 md:w-[80%] mx-auto lg:px-0">
                <div className={`${styles.firstText} uppercase text-white opacity-50`}> 
                    {val.role}
                  </div>
                  <div className={`${styles.mainText} my-5`}>{val.name}</div>
                  <div className={`${styles.contentText} my-5`}>
                    {val.content}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
  
};

export default CrewList;
      