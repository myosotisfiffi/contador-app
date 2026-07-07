import { TimerIcon } from "lucide-react";
import style from "./styles.module.css";

export function Logo() {
  return (
    <div className={`${style.logo} ${style.paragraph}`}>
      <a className={style.logoLink} href="#">
        <TimerIcon />
        <span>Chronos</span>
      </a>
    </div>
  );
}