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

export const APP_ROUTES: Record<string, RouteObject> = {
  home: {
    index: true,
    element: <Home />,
    handle: {
      key: "home",
      title: "Home",
    },
  },
  rsvp: {
    path: "rsvp",
    element: <Rsvp />,
    handle: {
      key: "rsvp",
      title: "RSVP",
    },
  },
};

export const TOP_LEVEL_ROUTES: Record<string, RouteObject> = {
  app: {
    path: "/",
    element: <App />,
    children: Object.values(APP_ROUTES),
  },
};
