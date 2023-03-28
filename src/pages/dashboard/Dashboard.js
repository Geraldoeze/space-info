import React from "react";
import pStyles from "../pageStyle";
import styles from "../../component/styles/styles";
import '../../component/styles/styles.css';

export default function Dashboard() {
  return (
    <div
      className={`${pStyles.smallBg} ${pStyles.bg} ${pStyles.largeBg} md:bg-bottom `}
      style={{ fontFamily: "Barlow Condense" }}
    >
      <div className={`${pStyles.navContent} `}>
        <div className={` flex flex-col justify-center mx-[2rem] my-10  text-center `}>
          <div className={`${pStyles.firstText} md:text-center lg:mb-5 `}>SO, YOU WANT TO TRAVEL TO</div>
          <div className={`${styles.secondText} font-belle`}>SPACE</div>
          <div className={`${styles.lastText} mx-auto`}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </div>
        </div>
        <div className="flex justify-center  items-center">
          <div className={`${pStyles.divCon} bts-wrapper`}>
          <div className={`${pStyles.divEx} linear`}>Explore</div>
          </div>
          
         
        </div>
      </div>
    </div>
  );
}
