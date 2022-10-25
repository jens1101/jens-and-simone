import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { resolvePath, useMatches } from "react-router-dom";
import { APP_ROUTES, WEDDING_DAY, WEDDING_VENUE } from "./constants";
import { getDaysLeft } from "./helpers";

export function Header() {
  const [timeLeft, setTimeLeft] = useState(getDaysLeft());

  // The matches are ordered from first to last in terms of the route
  // hierarchy. The first match will always match the root route, and the
  // second match will match the app-level route (if any). That is why we are
  // trying to access the second item in the array to find the current active
  // key.
  const matches = useMatches();
  const activeKey = (matches[1]?.handle as any)?.key;

  useEffect(() => {
    const intervalId = setInterval(() => setTimeLeft(getDaysLeft()), 30_000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <header>
      <Container>
        <h1 className={"display-1"}>Jens and Simone</h1>
        <p>
          {WEDDING_DAY.toLocaleString(DateTime.DATE_FULL)} &bull;{" "}
          {WEDDING_VENUE.fullName}
        </p>
        <p>{timeLeft} Days To Go!</p>
      </Container>

      <Navbar
        bg={"dark"}
        variant={"dark"}
        expand={"md"}
        sticky={"top"}
        collapseOnSelect={true}
      >
        <Container className={"justify-content-end"}>
          <Navbar.Toggle aria-controls={"basic-navbar-nav"} />

          <Navbar.Offcanvas placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Main Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                fill={true}
                variant={"pills"}
                activeKey={activeKey}
                className={"flex-grow-1"}
              >
                {Array.from(APP_ROUTES).map((route) => (
                  <LinkContainer
                    key={route.handle?.key}
                    to={resolvePath(route.path ?? "")}
                  >
                    <Nav.Link
                      eventKey={route.handle?.key}
                      disabled={route.handle?.disabled ?? false}
                    >
                      {route.handle?.title}
                    </Nav.Link>
                  </LinkContainer>
                ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}
