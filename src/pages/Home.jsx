import { useState, useEffect } from "react";
import "../App.css";
import MeditationRoom from "../components/MeditationRoom";
import PlantCard from "../components/PlantCard";
import SketchBox from "../components/SketchBox";

function getTodayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function loadDay(dateKey) {
  const raw = localStorage.getItem(`mindgarden_${dateKey}`);
  return raw
    ? {
        meditation: false,
        dizigui: false,
        reflection: false,
        ...JSON.parse(raw),
      }
    : {
        meditation: false,
        dizigui: false,
        reflection: false,
      };
}

function saveDay(dateKey, tasks) {
  localStorage.setItem(`mindgarden_${dateKey}`, JSON.stringify(tasks));
}

function getStreak(todayTasks) {
  let streak = 0;
  const today = new Date();
  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);

    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

    // Use React state for today, localStorage for previous days
    const data = i === 0 ? todayTasks : loadDay(key);

    if (data.meditation && data.dizigui && data.reflection) {
      streak++;
    } else if (i === 0) {
      continue;
    } else {
      break;
    }
  }
  return streak;
}

function Home({ user }) {
  const todayKey = getTodayKey();
  const [tasks, setTasks] = useState(() => loadDay(todayKey));

  useEffect(() => {
    saveDay(todayKey, tasks);
  }, [tasks, todayKey]);

  const toggle = (key) => {
    setTasks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const allDone =
  tasks.meditation &&
  tasks.dizigui &&
  tasks.reflection;

  const streak = getStreak(tasks);

  return (
    <div className="game-screen">
      <header>
        <h1>🌱 Mind Garden</h1>
        <p>Good morning, {user || "Friend"}</p>
      </header>

      <main>
        <SketchBox>
        <section className="garden-area">
          <div className="tasks">
            <h2>Today's Practice</h2>

            <div className="task-row">
              <input
                type="checkbox"
                checked={tasks.meditation}
                onChange={() => toggle("meditation")}
              />
              <span>练习心法 Meditation Step 1 2 3</span>
            </div>

            <div className="task-row">
              <input
                type="checkbox"
                checked={tasks.dizigui}
                onChange={() => toggle("dizigui")}
              />
              <span>看影片弟子规 Youtube</span>
            </div>

            <div className="task-row">
              <input
                type="checkbox"
                checked={tasks.reflection}
                onChange={() => toggle("reflection")}
              />
              <span>写心得 <br></br> Write self reflection</span>
            </div>
          </div>
          <PlantCard streak={streak} allDone={allDone } />
        </section>
        </SketchBox>

        <SketchBox>
        <MeditationRoom />
        </SketchBox>
        
        <SketchBox>
        <section className="community">
          <h2>🌍 Community Garden</h2>

          <p>
            {streak} {streak === 1 ? "day" : "days"} streak ·{" "}
            {allDone ? "Completed three tasks today! 🎉" : "Keep growing 🌱"}
          </p>
        </section> 
        </SketchBox>
      </main>
    </div>
  );
}

export default Home;
