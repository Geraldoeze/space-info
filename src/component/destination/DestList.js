import { destinationData } from "./destinationData";
import React, { useState } from "react";
import styles from "../styles/styles";

const DestList = () => {
  const [view, setView] = useState(1);
  const addNum = () => {
    if (view === 4) {
      return setView(1);
    }
    setView((prev) => prev + 1);
  };

  return (
    <>
      {destinationData?.map((val) => {
        return (
          <div key={val.id}>
            {view === val.id && (
              <>
                <div className="w-[180px] md:w-[300px] mx-auto">
                  <img src={val.image} alt="img"  />
                </div>
                <div >
                  <div onClick={addNum}>
                    dots moon mars
                    <button>add 1</button>
                  </div>
                  <div className="px-10">
                    <div>
                    <div className="font-belle font-normal text-[56px] leading-[64.18px]">{val.planet}</div>
                    <div className={`${styles.contentText}`}>{val.content}</div>
                    <div className="my-10" />
                    </div>
                    <div>
                      <h3 className={`${styles.colorText}`}> AVG. DISTANCE</h3>
                      <p className={`${styles.colorWyt}`}>{val.distance}</p>
                      </div>
                    <div>
                    <h3 className={`${styles.colorText}`}>
                      Est. travel time
                      </h3>
                      <p className={`${styles.colorWyt}`}>{val.time}</p>
                      </div>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </>
  );
};

export default DestList;
