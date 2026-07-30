function PlantCard({ streak, bothDone }) {
  const getPlant = () => {
    if (streak >= 30) return "✨";
    if (streak >= 14) return "🌳";
    if (streak >= 7) return "🪴";
    if (streak >= 3) return "🌿";
    return "🌱";
  };

  return (
    <div className="plant">
      <div className="plant-status">
        <div className="day-count">{streak} {streak <= 1 ? "day" : "days"}</div>
        <div className="pixel-plant">{getPlant()}</div>
        {bothDone && <div style={{ fontSize: 12, marginTop: 8 }}>Done! Come back tomorrow :D</div>}
      </div>
    </div>
  );
}

export default PlantCard;
