import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Community from "./pages/Community";
import Welcome from "./pages/Welcome";
import "./App.css";

import todayIcon from "./assets/icons/today.png";
import earthIcon from "./assets/icons/earth.png";
import meIcon from "./assets/icons/me.png";

function App() {
  const [user, setUser] = useState(null);
  const [screen, setScreen] = useState("home");

  useEffect(() => {
    const saved = localStorage.getItem("mindgarden_user");
    if (saved) setUser(saved);
  }, []);

  if (!user) {
    return <Welcome onEnter={setUser} />;
  }

  return (
    <>
      <main className="with-nav">
        {screen === "home" && <Home user={user} />}
        {screen === "profile" && <Profile user={user} />}
        {screen === "community" && <Community />}
      </main>

      <nav className="bottom-nav">
        <button
          className={`nav-btn ${screen === "home" ? "active" : ""}`}
          onClick={() => setScreen("home")}
        >
          <img src={todayIcon} alt="" className="nav-icon" />
          Today
        </button>
        <button
          className={`nav-btn ${screen === "community" ? "active" : ""}`}
          onClick={() => setScreen("community")}
        >
          <img src={earthIcon} alt="" className="nav-icon" />
          Garden
        </button>
        <button
          className={`nav-btn ${screen === "profile" ? "active" : ""}`}
          onClick={() => setScreen("profile")}
        >
          <img src={meIcon} alt="" className="nav-icon" />
          Me
        </button>
      </nav>
    </>
  );
}

export default App;
