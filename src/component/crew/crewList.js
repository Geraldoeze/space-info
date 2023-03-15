import { crewData } from "./crewdata";
import React, { useState } from "react";
import styles from "../styles/styles";

const CrewList = () => {
  const [view, setView] = useState(1);
  const addNum = () => {
    if (view === 4) {
      return setView(1);
    }
    setView((prev) => prev + 1);
  };

  return (
    <div className="h-[80%]">
      {crewData?.map((val) => {
        return (
          <div key={val.id}>
            {view === val.id && (
              <>
              <div className="mx-10 border-b-2">
                <div className="w-[60%] md:w-[45%] mx-auto">
                  <img src={val.image} alt="img" width='100%'  />
                </div>
                
                </div> 
                <div >
                  <div className="my-4 mx-auto w-[6rem] flex justify-around " onClick={addNum}>
                  <img src={val.id === 1 ? styles.wytImg : styles.greyImg} alt='ic' />
                  <img src={val.id === 2 ? styles.wytImg : styles.greyImg} alt='ic' />
                  <img src={val.id === 3 ? styles.wytImg : styles.greyImg} alt='ic' />
                  <img src={val.id === 4 ? styles.wytImg : styles.greyImg} alt='ic' />
                    
                  </div>
                  <div>
                    <div className={`${styles.firstText} uppercase text-white opacity-50`}> {val.role}</div>
                    <div className={`${styles.mainText} my-5`}>{val.name}</div>
                    <div className={`${styles.contentText} m-5`}>{val.content}</div>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CrewList;
