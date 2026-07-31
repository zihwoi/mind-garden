import "../App.css";
import seedIdle from "../assets/illustration/seed_idle.gif";

function PlantCard({ streak, allDone }) {
  return (
    <div className="plant">
      <div className="plant-status">
        <div className="day-count">
          {streak} {streak <= 1 ? "day" : "days"}
        </div>

        <img
          className="seed-animation"
          src={seedIdle}
          alt="Growing seed"
        />

        <div className="plant-message">
          {allDone
            ? "Growing! Come back tomorrow :D"
            : "Keep growing :D"}
        </div>
      </div>
    </div>
  );
}

export default PlantCard;
