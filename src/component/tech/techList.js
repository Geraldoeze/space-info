import { techData } from "./techdata";
import React, {useState} from 'react';
import styles from "../styles/styles";

const TechList = () => {
    const [view, setView] = useState(1);
    const addNum = () => {
      if (view === 3) {
        return setView(1);
      }
      setView((prev) => prev + 1);
    };
    return ( 
        <>
        {techData?.map((val) => {
          return (
            <div key={val.id}>
              {view === val.id && (
                <>
                  <div className={`w-full bg-red md:w-[300px] mx-auto`}>
                    <img src={val.image} alt="img" className="sm:hidden lg:block" />
                    <img src={val.imageSm} alt="img" className="lg:hidden" />
                  </div>
                  <div >
                    <div onClick={addNum}>
                      dots moon mars
                      <button>add 1</button>
                    </div>
                    <div className="px-10">
                      <div className="my-5">{val.title}</div>
                      <div className={`${styles.mainText} my-5`}>{val.info}</div>
                      <div className={`${styles.contentText} my-5`}>{val.content}</div>
                     
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </>
     );
}
 
export default TechList;