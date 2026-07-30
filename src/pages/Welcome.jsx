import { useState } from "react";
import "../App.css";

function Welcome({ onEnter }) {
  const [name, setName] = useState("");

  const handleStart = () => {
    if (name.trim()) {
      localStorage.setItem("mindgarden_user", name.trim());
      onEnter(name.trim());
    }
  };

  return (
    <div className="game-screen welcome-screen">
      <div className="welcome-content">
        <div className="welcome-plant">🌱</div>
        <h1>Mind Garden</h1>
        <p className="welcome-subtitle">
          Cultivate your mind through daily practice
        </p>

        <div className="welcome-features">
          <div className="feature">
            <span>🧘</span>
            <p>Daily Meditation</p>
          </div>
          <div className="feature">
            <span>📖</span>
            <p>Di Zi Gui Study</p>
          </div>
          <div className="feature">
            <span>🌳</span>
            <p>Grow Together</p>
          </div>
        </div>

        <div className="name-input-group">
          <label>What should we call you?</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name..."
            maxLength={12}
            onKeyDown={(e) => e.key === "Enter" && handleStart()}
          />
          <button
            className="start-btn"
            onClick={handleStart}
            disabled={!name.trim()}
          >
            Enter Garden →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;