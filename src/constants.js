import { DateTime } from "luxon";

export const WEDDING_DAY = DateTime.fromObject(
  {
    year: 2023,
    month: 5,
    day: 6,
  },
  {
    zone: "Africa/Johannesburg",
  }
);

export const WEDDING_VENUE = {
  name: "55 Tulbagh",
  fullName: "55 Tulbagh, Glen Marais, Kempton Park",
};
