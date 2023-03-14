import CrewList from "../component/crew/crewList";
import pStyles from "./pageStyle";

const CrewPage = () => {
  return (
    <div
      className={`${pStyles.crewBigBg} ${pStyles.bg} h-screen text-center`}
      style={{ fontFamily: "Barlow Condense" }}
    >
      <div className={`${pStyles.mainContent}`}>
        <div className={`${pStyles.firstText}  uppercase mb-3 `}>
          <span className={`${pStyles.numText} mx-3`}>02</span>Meet your crew
        </div>
        <CrewList />
      </div>
    </div>
  );
};

export default CrewPage;
