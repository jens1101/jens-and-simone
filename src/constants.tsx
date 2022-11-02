import { DateTime } from "luxon";
import { RouteObject } from "react-router-dom";
import { App } from "./App";
import { Home } from "./Home";
import { Information } from "./Information";
import { Rsvp } from "./Rsvp";

export const WEDDING_DAY: DateTime = DateTime.fromObject(
  {
    year: 2023,
    month: 5,
    day: 5,
    hour: 15,
    minute: 30,
  },
  {
    zone: "Africa/Johannesburg",
  }
);

export const WEDDING_VENUE = {
  name: "55 Tulbagh events and wedding venue",
  address: "55 Tulbagh Road, Glen marais, Kempton Park, 1619",
  email: "sera@55tulbagh.co.za",
  mapsLink: "https://goo.gl/maps/8Uap6rJNUcm5rfPu8",
};

export const CONTACT_DETAILS = {
  email: "rsvp@jens-and-simone.com",
};

// TODO: maybe change this to a map for consistent ordering
export const APP_ROUTES: Record<string, RouteObject> = {
  home: {
    index: true,
    element: <Home />,
    handle: {
      key: "home",
      title: "Home",
    },
  },
  information: {
    path: "information",
    element: <Information />,
    handle: {
      key: "venueInformation",
      title: "Information",
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

// TODO: maybe change this to a map for consistent ordering
export const TOP_LEVEL_ROUTES: Record<string, RouteObject> = {
  app: {
    path: "/",
    element: <App />,
    children: Object.values(APP_ROUTES),
  },
};
