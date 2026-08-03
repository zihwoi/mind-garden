import "../App.css";
import SketchBox from "../components/SketchBox";
import seedIdle from "../assets/illustration/seed_idle.gif";

const members = [
  {
    name: "Zi Hui",
    streak: 12,
    today: { med: true, dzg: true, reflection: true },
  },
  {
    name: "Ming Hui",
    streak: 45,
    today: { med: true, dzg: true, reflection: true },
  },
  {
    name: "Elle Wong",
    streak: 3,
    today: { med: true, dzg: false, reflection: true },
  },
  {
    name: "Jason Boy",
    streak: 7,
    today: { med: false, dzg: true, reflection: false },
  },
  {
    name: "Vincent",
    streak: 89,
    today: { med: true, dzg: true, reflection: true },
  },
];

function countTasksDone(today) {
  return Object.values(today).filter(Boolean).length;
}

function Community() {
  const completedToday = members.filter(
    (m) => m.today.med && m.today.dzg && m.today.reflection,
  ).length;

  // sort by today's task count first, streak as tiebreaker
  const sortedMembers = [...members].sort((a, b) => {
    const taskDiff = countTasksDone(b.today) - countTasksDone(a.today);
    if (taskDiff !== 0) return taskDiff;
    return b.streak - a.streak;
  });

  return (
    <div className="game-screen">
      <header>
        <h1>🌍 Community Garden</h1>
        <p>
          <span className="member-count">{members.length}</span> gardeners
          growing together
        </p>
      </header>

      <SketchBox>
        <section className="community-summary">
          <div className="summary-card">
            <span className="summary-number">{completedToday}</span>
            <span className="summary-label">Completed Today</span>
          </div>
          <div className="summary-card">
            <span className="summary-number">
              {members.reduce((a, b) => a + b.streak, 0)}
            </span>
            <span className="summary-label">Total Streak Days</span>
          </div>
        </section>
      </SketchBox>

      <SketchBox className="sketch-box-large">
        <section className="members-list">
          <h2>🌻 Fellow Gardeners</h2>
          {sortedMembers.map((member) => {
            const doneCount = countTasksDone(member.today);
            return (
              <SketchBox key={member.name} className="sketch-box-row">
                <div className="member-row">
                  <span className="member-plant">
                    <img src={seedIdle} alt="Growing seed" />
                  </span>
                  <div className="member-info">
                    <span className="member-name">{member.name}</span>
                    <span className="member-tasks">
                      <span className="tasks-label">Watered 💧</span>
                      <span className="tasks-count">
                        {doneCount} {doneCount === 1 ? "time" : "times"} today
                      </span>
                    </span>
                  </div>
                  <div className="member-today">
                    {member.today.med && <span title="Meditated">🧘</span>}
                    {member.today.dzg && <span title="Di Zi Gui">📖</span>}
                    {member.today.reflection && (
                      <span title="Self reflection">✍️</span>
                    )}
                  </div>
                </div>
              </SketchBox>
            );
          })}
        </section>
      </SketchBox>
    </div>
  );
}

export default Community;
