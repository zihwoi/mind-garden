import { useState, useEffect } from "react";
import "../App.css";

function Profile() {
  const [stats, setStats] = useState({
    currentStreak: 12,
    longestStreak: 28,
    totalMeditations: 156,
    totalDizigui: 143,
    joinedDate: "2026-06-01",
  });

  const [history, setHistory] = useState([
    { date: "2026-07-30", meditation: true, dizigui: true },
    { date: "2026-07-29", meditation: true, dizigui: false },
    { date: "2026-07-28", meditation: true, dizigui: true },
    { date: "2026-07-27", meditation: false, dizigui: true },
    { date: "2026-07-26", meditation: true, dizigui: true },
    { date: "2026-07-25", meditation: true, dizigui: true },
    { date: "2026-07-24", meditation: true, dizigui: false },
  ]);

  return (
    <div className="game-screen">
      <header>
        <h1>🌿 My Garden</h1>
        <p>Your growth journey</p>
      </header>

      <section className="stats-grid">
        <div className="stat-card">
          <span className="stat-number">{stats.currentStreak}</span>
          <span className="stat-label">Day Streak 🔥</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{stats.longestStreak}</span>
          <span className="stat-label">Best Streak 🏆</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{stats.totalMeditations}</span>
          <span className="stat-label">Meditations 🧘</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{stats.totalDizigui}</span>
          <span className="stat-label">Di Zi Gui 📖</span>
        </div>
      </section>

      <section className="history-section">
        <h2>🗓️ Recent Days</h2>
        <div className="history-list">
          {history.map((day) => (
            <div key={day.date} className="history-row">
              <span className="history-date">{day.date.slice(5)}</span>
              <div className="history-badges">
                {day.meditation && <span className="badge med">🧘</span>}
                {day.dizigui && <span className="badge dzg">📖</span>}
                {!day.meditation && !day.dizigui && (
                  <span className="badge none">Rest day</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="plant-evolution">
        <h2>🌱 Plant Evolution</h2>
        <div className="evolution-track">
          <div className="evo-stage active">🌱</div>
          <div className="evo-line"></div>
          <div className="evo-stage active">🌿</div>
          <div className="evo-line"></div>
          <div className="evo-stage active">🪴</div>
          <div className="evo-line"></div>
          <div className="evo-stage">🌳</div>
          <div className="evo-line"></div>
          <div className="evo-stage">✨</div>
        </div>
        <p className="evo-text">Keep going! 8 more days to unlock 🌳</p>
      </section>
    </div>
  );
}

export default Profile;