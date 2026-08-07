import { useMemo } from "react";
import "../App.css";

import meditateIcon from "../assets/icons/meditate.png";
import diziguiIcon from "../assets/icons/dizigui.png";
import journalIcon from "../assets/icons/journal.png";
import completedDaysIcon from "../assets/icons/completed-days.png";

// Read all mindgarden history from localStorage
function getAllHistory() {
  const history = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    if (!key?.startsWith("mindgarden_")) continue;
    const date = key.replace("mindgarden_", "");

    // Only treat YYYY-MM-DD keys as daily records
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) continue;

    try {
      const data = JSON.parse(localStorage.getItem(key));
      history.push({ date, ...data });
    } catch {
      console.warn(`Skipping invalid history entry: ${key}`);
    }
  }
  return history.sort((a, b) => b.date.localeCompare(a.date));
}

function calculateCompletedDays(history) {
  return history.filter(
    (day) => day.meditation && day.dizigui && day.reflection,
  ).length;
}

function getPlantStage(days) {
  if (days >= 30) return { emoji: "✨", name: "Spirit Tree", next: null };
  if (days >= 14) return { emoji: "🌳", name: "Wisdom Tree", next: 30 };
  if (days >= 7) return { emoji: "🪴", name: "Potted Plant", next: 14 };
  if (days >= 3) return { emoji: "🌿", name: "Sprout", next: 7 };
  return { emoji: "🌱", name: "Seed", next: 3 };
}

function Profile({ user }) {
  const history = useMemo(() => getAllHistory(), []);

  const completedDays = calculateCompletedDays(history);
  const totalMeditations = history.filter((d) => d.meditation).length;
  const totalDizigui = history.filter((d) => d.dizigui).length;
  const totalReflections = history.filter((d) => d.reflection).length;

  const stage = getPlantStage(completedDays);
  const recent = history.slice(0, 7); // last 7 recorded days

  return (
    <div className="game-screen">
      <header>
        <h1>🌿 My Garden</h1>
        <p>{user || "Friend"}'s growth journey</p>
      </header>

      <section className="stats-grid">
        <div className="stat-card">
          <span className="stat-number">{completedDays}</span>
          <span className="stat-label">
            Completed Days{" "}
            <img src={completedDaysIcon} alt="" className="stat-icon" />
          </span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{totalMeditations}</span>
          <span className="stat-label">
            Meditations <img src={meditateIcon} alt="" className="stat-icon" />
          </span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{totalDizigui}</span>
          <span className="stat-label">
            Di Zi Gui <img src={diziguiIcon} alt="" className="stat-icon" />
          </span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{totalReflections}</span>
          <span className="stat-label">
            Reflections <img src={journalIcon} alt="" className="stat-icon" />
          </span>
        </div>
      </section>

      <section className="plant-evolution">
        <h2>🌱 Plant Evolution</h2>
        <div className="evolution-track">
          <div className={`evo-stage ${completedDays >= 0 ? "active" : ""}`}>
            🌱
          </div>
          <div className="evo-line"></div>
          <div className={`evo-stage ${completedDays >= 3 ? "active" : ""}`}>
            🌿
          </div>
          <div className="evo-line"></div>
          <div className={`evo-stage ${completedDays >= 7 ? "active" : ""}`}>
            🪴
          </div>
          <div className="evo-line"></div>
          <div className={`evo-stage ${completedDays >= 14 ? "active" : ""}`}>
            🌳
          </div>
          <div className="evo-line"></div>
          <div className={`evo-stage ${completedDays >= 30 ? "active" : ""}`}>
            ✨
          </div>
        </div>
        <p className="evo-text">
          {stage.next
            ? `${stage.emoji} ${stage.name} — ${stage.next - completedDays} more days to unlock the next stage!`
            : `${stage.emoji} ${stage.name} — You have reached enlightenment!`}
        </p>
      </section>

      <section className="history-section">
        <h2>🗓️ Recent Days</h2>
        <div className="history-list">
          {recent.length === 0 && (
            <p style={{ textAlign: "center", color: "#999" }}>
              No records yet. Start your practice today!
            </p>
          )}
          {recent.map((day) => (
            <div key={day.date} className="history-row">
              <span className="history-date">{day.date.slice(5)}</span>
              <div className="history-badges">
                {day.meditation && (
                  <img
                    src={meditateIcon}
                    alt="Meditated"
                    className="badge-icon"
                  />
                )}
                {day.dizigui && (
                  <img
                    src={diziguiIcon}
                    alt="Di Zi Gui"
                    className="badge-icon"
                  />
                )}
                {day.reflection && (
                  <img
                    src={journalIcon}
                    alt="Self reflection"
                    className="badge-icon"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Profile;
