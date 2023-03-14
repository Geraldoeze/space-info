import React from "react";
import pStyles from "../pageStyle";
import styles from "../../component/styles/styles";

export default function Dashboard() {
  return (
    <div
      className={`${pStyles.smallBg} ${pStyles.bg} `}
      style={{ fontFamily: "Barlow Condense" }}
    >
      <div className={`${styles.mainContent}`}>
        <div className={` flex flex-col mx-[5rem] mb-5   text-center `}>
          <div className={`${styles.firstText} `}>SO, YOU WANT TO TRAVEL TO</div>
          <div className={`${styles.secondText}`}>SPACE</div>
          <div className={`${styles.lastText} mx-auto`}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </div>
        </div>
        <div className="flex justify-center">
          <img src="./images/home/explore.png" alt="explore" />
        </div>
      </div>
    </div>
  );
}
