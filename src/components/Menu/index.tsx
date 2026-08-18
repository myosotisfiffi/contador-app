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

  function handleThemeChange( useEffect(() => {
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

    {nextThemeIcon[theme]}
  </a>   {/* ← erro de estrutura aqui */}
  </nav>
);
}