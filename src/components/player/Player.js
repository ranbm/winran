import TimeTracker from "./TimeTracker";
import TitleAndTime from "./TitleAndTime";
import AllButtons from "./AllButtons";

const Player = () => {

    return (
        <div className="Player">
            <TitleAndTime/>
            <TimeTracker/>
            <AllButtons/>
        </div>)
};
export default Player;