import "../App.css";
import MeditationRoom from "../components/MeditationRoom";
import PlantCard from "../components/PlantCard";
import SketchBox from "../components/SketchBox";
import { useDailyTasks } from "../hooks/useDailyTasks";


function Home({ user }) {
  const {
    tasks,
    toggle,
    streak,
    growthDays,
    allDone
  } = useDailyTasks();

  return (
    <div className="game-screen">
      <header>
        <h1>🌱 宠爱花园小游戏</h1>
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
              <span>练习心法 Meditate Step 1 2 3</span>
            </div>

            <div className="task-row">
              <input
                type="checkbox"
                checked={tasks.dizigui}
                onChange={() => toggle("dizigui")}
              />
              <span>看弟子规 Watch Dizigui</span>
            </div>

            <div className="task-row">
              <input
                type="checkbox"
                checked={tasks.reflection}
                onChange={() => toggle("reflection")}
              />
              <span>写心得 <br></br> Write Journal</span>
            </div>
          </div>
          <PlantCard streak={streak} growthDays={growthDays} allDone={allDone } />
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
            {allDone ? "今天完成了心法，看了弟子规一集，写心得! 🎉" : "继续加油 🌱"}
          </p>
        </section> 
        </SketchBox>
      </main>
    </div>
  );
}

export default Home;
