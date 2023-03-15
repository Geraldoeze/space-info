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
      {destinationData?.map((val) => {
        return (
          <div key={val.id}>
            {view === val.id && (
              <>
                <div className="w-[180px] md:w-[300px] mx-auto">
                  <img src={val.image} alt="img"  />
                </div>
                
                <div>
                  {/* Controls */}
                  <div className="flex justify-center my-3 ">
                  <div className={`${styles.conSty} ${val.planet === 'MOON' && styles.active}`} onClick={() => changeNum(1)}>MOON</div>
                  <div className={`${styles.conSty} ${val.planet === 'MARS' && styles.active}`} onClick={() => changeNum(2)}>MARS</div>
                  <div className={`${styles.conSty} ${val.planet === 'EUROPA' && styles.active}`} onClick={() => changeNum(3)}>EUROPA</div>
                  <div className={`${styles.conSty} ${val.planet === 'TITAN' && styles.active}`} onClick={() => changeNum(4)}>TITAN</div>
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
