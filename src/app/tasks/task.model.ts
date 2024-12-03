import { InjectionToken, Provider } from "@angular/core";

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export const TaskStatusOptions = [
  {
    value: 'open',
    taskStatus: 'OPEN' satisfies TaskStatus,
    text: 'Open',
  },
  {
    value: 'in-progress',
    taskStatus: 'IN_PROGRESS' satisfies TaskStatus,
    text: 'In-Progress',
  },
  {
    value: 'done',
    taskStatus: 'DONE' satisfies TaskStatus,
    text: 'Completed',
  },
] as const;

export const TASK_STATUS_OPTIONS = new InjectionToken<typeof TaskStatusOptions>('task-status-options');

export const taskStatusOptionsProvider: Provider = {
  provide: TASK_STATUS_OPTIONS,
  useValue: TaskStatusOptions,
};

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
