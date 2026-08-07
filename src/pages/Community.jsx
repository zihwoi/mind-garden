import "../App.css";
import SketchBox from "../components/SketchBox";
import { useDailyTasks } from "../hooks/useDailyTasks";

import seedIdle from "../assets/illustration/seed_idle.gif";
import sproutGrowing from "../assets/illustration/sprout.gif";

import meditateIcon from "../assets/icons/meditate.png";
import diziguiIcon from "../assets/icons/dizigui.png";
import journalIcon from "../assets/icons/journal.png";

function getPlantStage(days) {
  if (days >= 7) return { img: sproutGrowing, label: "leafy" }; // swap when you have a later-stage gif
  if (days >= 3) return { img: sproutGrowing, label: "sprout" };
  return { img: seedIdle, label: "seed" };
}

const mockMembers = [
  {
    name: "Ming Hui",
    streak: 45,
    today: { med: true, dzg: true, reflection: true },
    plantImg: seedIdle,
  },
  {
    name: "Elle Wong",
    streak: 3,
    today: { med: true, dzg: false, reflection: true },
    plantImg: seedIdle,
  },
  {
    name: "Jason Boy",
    streak: 7,
    today: { med: false, dzg: true, reflection: false },
    plantImg: seedIdle,
  },
  {
    name: "Vincent",
    streak: 89,
    today: { med: true, dzg: true, reflection: true },
    plantImg: seedIdle,
  },
];

function countTasksDone(today) {
  return Object.values(today).filter(Boolean).length;
}

function Community({ user }) {
  const { tasks, streak, growthDays } = useDailyTasks();

  const currentUser = {
    name: user || "You",
    streak: growthDays,
    today: {
      med: tasks.meditation,
      dzg: tasks.dizigui,
      reflection: tasks.reflection,
    },
    plantImg: getPlantStage(growthDays).img, // real stage-based image, just for you
  };

  const members = [currentUser, ...mockMembers];

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
            <span className="summary-number">{currentUser.streak}</span>
            <span className="summary-label">Your Growth Days</span>
          </div>
        </section>
      </SketchBox>

      <SketchBox className="sketch-box-large">
        <section className="members-list">
          <h2>🌻 Fellow Gardeners</h2>
          {sortedMembers.map((member) => {
            const doneCount = countTasksDone(member.today);

            const completedIcons = [];
            if (member.today.med) completedIcons.push({ src: meditateIcon, alt: "Meditated" });
            if (member.today.dzg) completedIcons.push({ src: diziguiIcon, alt: "Di Zi Gui" });
            if (member.today.reflection) completedIcons.push({ src: journalIcon, alt: "Self reflection" });

            return (
              <SketchBox key={member.name} className="sketch-box-row">
                <div className="member-row">
                  <div className="member-top">
                    <span className="member-plant">
                      <img src={member.plantImg} alt={`${member.name}'s plant`} />
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
                  </div>
                  <div
                    className={`member-today-cluster cluster-count-${completedIcons.length}`}
                  >
                    {completedIcons.map((icon, i) => (
                      <img
                        key={icon.alt}
                        src={icon.src}
                        alt={icon.alt}
                        title={icon.alt}
                        className={`task-icon-cluster cluster-pos-${i + 1}`}
                      />
                    ))}
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
