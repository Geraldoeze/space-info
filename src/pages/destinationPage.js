
import DestList from "../component/destination/DestList";
import pStyles from "./pageStyle";


const DestinationPage = () => {
    return ( 
      
        <div
        className={`${pStyles.destSmBg} ${pStyles.dextLgBg} ${pStyles.bg} text-center `}
        style={{ fontFamily: "Barlow Condense" }}
      >
        <div className={`${pStyles.mainContent}`}>
        <div className={`${pStyles.firstText} text-white uppercase text-center my-3`}>
          <span className={`${pStyles.numText} mx-3`}>01</span>Pick your destination
        </div>
        <DestList />
      </div>
      </div>
     );
}
 
export default DestinationPage;