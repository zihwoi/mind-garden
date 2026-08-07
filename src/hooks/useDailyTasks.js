import { useState, useEffect, useMemo } from "react";

function getTodayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function loadDay(dateKey) {
  const raw = localStorage.getItem(`mindgarden_${dateKey}`);

  return raw
    ? {
        meditation: false,
        dizigui: false,
        reflection: false,
        ...JSON.parse(raw),
      }
    : {
        meditation: false,
        dizigui: false,
        reflection: false,
      };
}

function saveDay(dateKey, tasks) {
  localStorage.setItem(`mindgarden_${dateKey}`, JSON.stringify(tasks));
}

function getStreak(todayTasks) {
  let streak = 0;
  const today = new Date();
  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    const data = i === 0 ? todayTasks : loadDay(key);
    if (data.meditation && data.dizigui && data.reflection) {
      streak++;
    } else if (i === 0) {
      // Today isn't done yet — don't break streak, just don't count it
      continue;
    } else {
      break;
    }
  }
  return streak;
}

function getTotalGrowthDays(todayTasks) {
  let total = 0;

  const today = new Date();

  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);

    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

    const data = i === 0 ? todayTasks : loadDay(key);

    if (data.meditation && data.dizigui && data.reflection) {
      total++;
    }
  }

  return total;
}
export function useDailyTasks() {
  // 1. hooks first
  const todayKey = getTodayKey();

  const [tasks, setTasks] = useState(() => loadDay(todayKey));

  useEffect(() => {
    saveDay(todayKey, tasks);
  }, [tasks, todayKey]);

  // 2. normal functions
  const toggle = (key) => {
    setTasks((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // 3. calculations
  const streak = useMemo(() => {
    return getStreak(tasks);
  }, [tasks]);

  const growthDays = useMemo(() => getTotalGrowthDays(tasks), [tasks]);

  const allDone = tasks.meditation && tasks.dizigui && tasks.reflection;

  // 4. return last
  return {
    tasks,
    toggle,
    streak,
    growthDays,
    allDone,
    todayKey,
  };
}
