import { DateTime, Interval } from "luxon";
import { WEDDING_DAY } from "./constants";

export function getDaysLeft() {
  const duration = Interval.fromDateTimes(
    DateTime.now(),
    WEDDING_DAY
  ).toDuration("days");

  return Math.max(Math.floor(duration.days), 0);
}
