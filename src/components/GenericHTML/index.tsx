import type { ReactNode } from "react";
import styles from "./styles.module.css";

type GenericHTMLProps = {
  children: ReactNode;
};

export function GenericHTML({ children }: GenericHTMLProps) {
  return <div className={styles.genericHTML}>{children}</div>;
}