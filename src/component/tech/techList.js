import { techData, idNum } from "./techdata";
import React, { useState } from "react";
import styles from "../styles/styles";

const TechList = () => {
  const [view, setView] = useState(1);
  const changeNum = (num) => {
    //   if (view === 3) {
    //     return setView(1);
    //   }
    setView(num);
  };
  return (
    <>
      {techData
        ?.filter((val) => view === val.id)
        .map((val) => {
          return (
            <div key={val.id} className="lg:flex flex-row-reverse justify-between lg:text-left">
              <div className="lg:w-[515px]">
                <div className={`lg:flex lg:flex-row-reverse`}>
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
              <div className="lg:w-[55%] lg:my-auto lg:flex">
                <div className="my-5 flex justify-center lg:flex-col">
                  {idNum?.map(val => <div key={val.id} className={`${styles.divNorm} ${view === val.id && styles.divActive }`} onClick={() => changeNum(val.id)}>
                    {val.value}
                  </div>  
                  )}
                  
                  
                </div>
                <div className="px-10 md:w-[80%] mx-auto lg:px-0">
                  <div className="my-5 text-[16px] leading-[19.2px] text-[#D0D6F9]">
                    {val.title}
                  </div>
                  <div className={`${styles.mainText} my-5`}>{val.info}</div>
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

export default TechList;
