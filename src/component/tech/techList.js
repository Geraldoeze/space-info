import { techData } from "./techdata";
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
            <div key={val.id}>
              <div className={`w-full bg-red mx-auto`}>
                <img src={val.image} alt="img" className="hidden lg:block" />
                <img
                  src={val.imageSm}
                  alt="img"
                  className="sm:block lg:hidden"
                />
              </div>
              <div>
                <div className="my-5 flex justify-center">
                  <img
                    className="mx-2"
                    src={val.id === 1 ? styles.activeNum1 : styles.num1}
                    alt="ic"
                    onClick={() => changeNum(1)}
                  />
                  <img
                    className="mx-2"
                    src={val.id === 2 ? styles.activeNum2 : styles.num2}
                    alt="ic"
                    onClick={() => changeNum(2)}
                  />
                  <img
                    className="mx-2"
                    src={val.id === 3 ? styles.activeNum3 : styles.num3}
                    alt="ic"
                    onClick={() => changeNum(3)}
                  />
                </div>
                <div className="px-10 md:w-[80%] mx-auto">
                  <div className="my-5">{val.title}</div>
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
