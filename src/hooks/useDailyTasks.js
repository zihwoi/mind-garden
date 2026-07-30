// src/hooks/useDailyTasks.js

function getTodayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function loadDay(dateKey) {
  const raw = localStorage.getItem(`mindgarden_${dateKey}`);
  return raw ? JSON.parse(raw) : { meditation: false, dizigui: false };
}

function saveDay(dateKey, tasks) {
  localStorage.setItem(`mindgarden_${dateKey}`, JSON.stringify(tasks));
}

function getStreak() {
  let streak = 0;
  const today = new Date();
  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    const data = loadDay(key);
    if (data.meditation && data.dizigui) {
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

export function useDailyTasks() {
  const todayKey = getTodayKey();
  const [tasks, setTasks] = useState(() => loadDay(todayKey));

  // Save whenever tasks change
  useEffect(() => {
    saveDay(todayKey, tasks);
  }, [tasks, todayKey]);

  const toggle = (key) => {
    setTasks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const streak = getStreak();
  const bothDone = tasks.meditation && tasks.dizigui;

  return { tasks, toggle, streak, bothDone, todayKey };
}

import { useState, useEffect } from "react";