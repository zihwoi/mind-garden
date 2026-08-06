import "../App.css";
import seedIdle from "../assets/illustration/seed_idle.gif";
import sproutGrowing from "../assets/illustration/sprout.gif";

function getPlantStage(streak) {
  if (streak >= 7) return { img: sproutGrowing, label: "leafy" }; // swap for a later-stage gif when ready
  if (streak >= 3) return { img: sproutGrowing, label: "sprout" };
  return { img: seedIdle, label: "seed" };
}

function PlantCard({ streak, allDone }) {
  const stage = getPlantStage(streak);

  return (
    <div className="plant">
      <div className="plant-status">
        <div className="day-count">
          {streak} {streak <= 1 ? "day" : "days"}
        </div>

        <img
          className="seed-animation"
          src={stage.img}
          alt={`Growing plant - ${stage.label} stage`}
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
