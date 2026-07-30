import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Community from "./pages/Community";
import Welcome from "./pages/Welcome";
import "./App.css";

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
          <span>🌱</span>Today
        </button>
        <button
          className={`nav-btn ${screen === "community" ? "active" : ""}`}
          onClick={() => setScreen("community")}
        >
          <span>🌍</span>Garden
        </button>
        <button
          className={`nav-btn ${screen === "profile" ? "active" : ""}`}
          onClick={() => setScreen("profile")}
        >
          <span>🌿</span>Me
        </button>
      </nav>
    </>
  );
}

export default App;
