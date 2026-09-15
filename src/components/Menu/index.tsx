import {
  HistoryIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
  TimerIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import style from "./styles.module.css";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem("theme") as AvailableThemes;
    return storageTheme || "dark";
  });
  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(event: React.MouseEvent) {
    event.preventDefault();
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <nav className={style.menu}>
      <a
        className={style.menuLink}
        href="#"
        aria-label="Ir para a Home"
        title="Ir para a Home"
      >
        <TimerIcon />
      </a>

      <a
        className={style.menuLink}
        href="#"
        aria-label="Ver histórico de tarefas"
        title="Ver histórico de tarefas"
      >
        <HistoryIcon />
      </a>

      <a
        className={style.menuLink}
        href="#"
        aria-label="Ver configurações"
        title="Ver configurações"
      >
        <SettingsIcon />
      </a>

      <a
        className={style.menuLink}
        href="#"
        aria-label="Alternar tema"
        title="Alternar tema"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}