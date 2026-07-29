import "../App.css";
import MeditationRoom from "../components/MeditationRoom";
import PlantCard from "../components/PlantCard";
function Home() {
  return (
    <div className="game-screen">
      <header>
        <h1>🌱 Mind Garden</h1>
        <p>Good morning, Zi Hui</p>
      </header>

      <main>
        <section className="garden-area">
          <div className="tasks">
            <h2>Today's Practice</h2>

            <div className="task-row">
              <input type="checkbox" />

              <span>练习心法 Meditation Step 1 2 3</span>
            </div>

            <div className="task-row">
              <input type="checkbox" />

              <span>看影片弟子规 Youtube</span>
            </div>
          </div>
          <PlantCard />
        </section>

        <MeditationRoom />
        <section className="community">
          <h2>🌍 Community Garden</h2>

          <p>24 gardeners growing together</p>
        </section>
      </main>
    </div>
  );
}

export default Home;
