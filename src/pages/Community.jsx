import "../App.css";
import seedIdle from "../assets/illustration/seed_idle.gif";

const members = [
  {
    name: "Zi Hui",
    streak: 12,
    today: { med: true, dzg: true, reflection: true },
  },
  {
    name: "Aunt Mei",
    streak: 45,
    today: { med: true, dzg: true, reflection: true },
  },
  {
    name: "Cousin Wei",
    streak: 3,
    today: { med: true, dzg: false, reflection: true },
  },
  {
    name: "Uncle Tan",
    streak: 7,
    today: { med: false, dzg: true, reflection: false },
  },
  {
    name: "Grandma",
    streak: 89,
    today: { med: true, dzg: true, reflection: true },
  },
];

function Community() {
  const completedToday = members.filter(
    (m) => m.today.med && m.today.dzg && m.today.reflection,
  ).length;

  return (
    <div className="game-screen">
      <header>
        <h1>🌍 Community Garden</h1>
        <p>
          <span className="member-count">{members.length}</span> gardeners
          growing together
        </p>
      </header>

      <section className="community-summary">
        <div className="summary-card">
          <span className="summary-number">{completedToday}</span>
          <span className="summary-label">Completed Both Today</span>
        </div>
        <div className="summary-card">
          <span className="summary-number">
            {members.reduce((a, b) => a + b.streak, 0)}
          </span>
          <span className="summary-label">Total Streak Days</span>
        </div>
      </section>

      <section className="members-list">
        <h2>🌻 Fellow Gardeners</h2>
        {members
          .sort((a, b) => b.streak - a.streak)
          .map((member, idx) => (
            <div key={member.name} className="member-row">
              <span className="member-rank">#{idx + 1}</span>
              <span className="member-plant">
                <img src={seedIdle} alt="Growing seed" />
              </span>
              <div className="member-info">
                <span className="member-name">{member.name}</span>
                <span className="member-streak">
                  <span className="streak-number">{member.streak}</span>{" "}
                  <span className="streak-label">day streak</span>
                </span>
              </div>
              <div className="member-today">
                {member.today.med && <span title="Meditated">🧘</span>}
                {member.today.dzg && <span title="Di Zi Gui">📖</span>}
                {member.today.reflection && <span title="Self reflection">✍️</span>}
              </div>
            </div>
          ))}
      </section>
    </div>
  );
}

export default Community;
