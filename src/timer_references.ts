export const timer_references = [
  {
    name: "Runny",
    seconds: 300, // 5 minutes
  },
  {
    name: "Poached",
    seconds: 360, // 6 minutes
  },
  {
    name: "Medium",
    seconds: 480, // 8 minutes
  },
  {
    name: "Hard",
    seconds: 10, // 10 minutes
  },
] as const;

export type TimerReference = (typeof timer_references)[number];

export const timer_reference_map: Record<
  TimerReference["name"],
  TimerReference
> = Object.fromEntries(
  timer_references.map((timer) => [timer.name, timer])
) as Record<TimerReference["name"], TimerReference>;
