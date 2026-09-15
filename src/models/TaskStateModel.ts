import type { TaskModel } from "./TaskModel";

// This file defines the TaskStateModel type, which represents the state of a
// task in the application.

export type TaskStateModel = {
    tasks: TaskModel[];
    secondsRemaining: number;
    formattedSecondsRemaining: string;
    activeTask: TaskModel | null;
    currentCycle: number;
    config: {
      workTime: number;
      shortBreakTime: number;
      longBreakTime: number;
    };
  };
  
  export type TaskModel = {
    id: string;
    name: string;
    startDate: Date;
    completeDate: Date | null;
    interruptDate: Date | null;
    duration: number;
    type: "work" | "short" | "long";
  };