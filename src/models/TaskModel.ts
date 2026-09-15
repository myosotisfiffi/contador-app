import { TaskModel } from "./TaskModel";

export type TaskStateModel = {
  tasks: TaskModel[]; // Histórico de todas as tasks
  secondsRemaining: number; // Segundos restantes do ciclo atual
  formattedSecondsRemaining: string; // Ex: "25:00"
  activeTask: TaskModel | null; // Task que está rodando no momento
  currentCycle: number; // Ciclo atual (1 a 8)
  config: {
    workTime: number; // Tempo de foco (em minutos)
    shortBreakTime: number; // Pausa curta (em minutos)
    longBreakTime: number; // Pausa longa (em minutos)
  };
};