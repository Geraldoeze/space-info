import { destinationData } from "./destinationData";
import React, { useState } from "react";
import styles from "../styles/styles";


const DestList = () => {
  const [view, setView] = useState(1);
  const changeNum = (num) => {
    // if (view === 4) {
    //   return setView(1);
    // }
    setView(num);
  };

  return (
    <>
      {destinationData
        ?.filter((val) => view === val.id)
        .map((val) => {
          return (
            <div key={val.id} className="lg:h-[70%]">
              <div
                className={` flex flex-col justify-center mx-[2rem] text-center lg:h-[100%] lg:flex-row lg:items-center `}
              >
                <div className="w-[180px] md:w-[300px] lg:w-[40%] mx-auto">
                  <img src={val.image} alt="img" />
                </div>

                <div className=" lg:w-[50%] lg:flex lg:flex-col lg:justify-center  lg:text-left">
                  {/* Controls */}
                  <div className="flex justify-center my-3 cursor-pointer ">
                    <div
                      className={`${styles.conSty} ${
                        val.planet === "MOON" && styles.active
                      }`}
                      onClick={() => changeNum(1)}
                    >
                      MOON
                    </div>
                    <div
                      className={`${styles.conSty} ${
                        val.planet === "MARS" && styles.active
                      }`}
                      onClick={() => changeNum(2)}
                    >
                      MARS
                    </div>
                    <div
                      className={`${styles.conSty} ${
                        val.planet === "EUROPA" && styles.active
                      }`}
                      onClick={() => changeNum(3)}
                    >
                      EUROPA
                    </div>
                    <div
                      className={`${styles.conSty} ${
                        val.planet === "TITAN" && styles.active
                      }`}
                      onClick={() => changeNum(4)}
                    >
                      TITAN
                    </div>
                  </div>
                  <div className="px-5">
                    <div>
                      <div className="font-belle font-normal text-[56px] leading-[64.18px] md:my-0 md:text-[80px] md:leading-[91.68px] lg:text-[100px] lg:leading-[114.6px]">
                        {val.planet}
                      </div>
                      <div className={`${styles.contentText}`}>
                        {val.content}
                      </div>
                      <div className="my-10" />
                    </div>
                    <div className="md:flex justify-center  md:border-t-2 ">
                    <div className="md:mx-5 md:w-[30%] lg:w-[45%]">
                      <h3 className={`${styles.colorText} my-4`}> AVG. DISTANCE</h3>
                      <p className={`${styles.colorWyt}`}>{val.distance}</p>
                    </div>
                    <div className="md:mx-5 md:w-[30%] lg:w-[45%]">
                      <h3 className={`${styles.colorText} my-4`}>
                        Est. travel time
                      </h3>
                      <p className={`${styles.colorWyt}`}>{val.time}</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default DestList;
