import { DateTime } from "luxon";
import { RouteObject } from "react-router-dom";
import { App } from "./App";
import { Home } from "./Home";
import { Rsvp } from "./Rsvp";

export const WEDDING_DAY: DateTime = DateTime.fromObject(
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

export const APP_ROUTES: RouteObject[] = [
  {
    index: true,
    element: <Home />,
    handle: {
      key: "home",
      title: "Home",
    },
  },
  {
    path: "rsvp",
    element: <Rsvp />,
    handle: {
      key: "rsvp",
      title: "RSVP",
    },
  },
];

export const TOP_LEVEL_ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: APP_ROUTES,
  },
];
