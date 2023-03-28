
import TechList from "../component/tech/techList";
import pStyles from "./pageStyle";

const TechPage = () => {
    return ( 
        <div
        className={`${pStyles.techSmBg} ${pStyles.techLgBg} ${pStyles.bg} `}
        style={{ fontFamily: "Barlow Condense" }}
      >
        <div className={`${pStyles.mainContent} text-center `}>
          <div className={`${pStyles.firstText}  uppercase my-3 `}>
            <span className={`${pStyles.numText} mx-3 `}>03</span>Space Launch 101
          </div>
          <TechList />
        </div> 
      </div>
     );
}
 
export default TechPage;