import style from "./styles.module.css";
import { HistoryIcon, SettingsIcon, SunIcon, TimerIcon } from "lucide-react";

export function Menu() {
    return (
      <nav className={style.menu}>
        <a className={style.menulink} href="#">
          <TimerIcon />
        </a>
  
        <a className={style.menulink} href="#">
          <HistoryIcon />
        </a>
  
        <a className={style.menulink} href="#">
          <SettingsIcon />
        </a>
  
        <a className={style.menulink} href="#">
          <SunIcon />
        </a>
      </nav>
    );
  }