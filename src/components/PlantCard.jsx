import "../App.css";
import seedIdle from "../assets/illustration/seed_idle.gif";
import sproutGrowing from "../assets/illustration/sprout.gif";

function getPlantStage(growthDays) {
  if (growthDays >= 7) return { img: sproutGrowing, label: "leafy" };
  if (growthDays >= 3) return { img: sproutGrowing, label: "sprout" };
  return { img: seedIdle, label: "seed" };
}

function PlantCard({ growthDays, allDone }) {
  const stage = getPlantStage(growthDays);

  return (
    <div className="plant">
      <div className="plant-status">
        <div className="day-count">
          {growthDays} {growthDays <= 1 ? "day" : "days"}
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
