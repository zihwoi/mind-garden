import "../App.css";

function Home() {
  return (
    <div className="game-screen">
      <header>
        <h1>🌱 Mind Garden</h1>
        <p>Good morning, Zihui</p>
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

          <div className="plant">
            <p>Day 12</p>
            
            <div className="pixel-plant">🌱</div>

            <p>Seedling</p>


          </div>
        </section>

        <section className="meditation">
          <h2>🎧 Meditation Room</h2>

          <button>Step 1 ▶</button>

          <button>Step 2 ▶</button>

          <button>Step 3 ▶</button>
        </section>

        <section className="community">
          <h2>🌍 Community Garden</h2>

          <p>24 gardeners growing together</p>
        </section>
      </main>
    </div>
  );
}

export default Home;
