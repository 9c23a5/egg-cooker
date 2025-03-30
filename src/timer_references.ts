export const timer_references = [
  {
    name: "Runny Egg",
    seconds: 300, // 5 minutes
  },
  {
    name: "Poached Egg",
    seconds: 360, // 6 minutes
  },
  {
    name: "Medium Egg",
    seconds: 480, // 8 minutes
  },
  {
    name: "Hard Egg",
    seconds: 600, // 10 minutes
  },
] as const;

export type TimerReference = (typeof timer_references)[number];
