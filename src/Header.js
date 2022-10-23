import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { WEDDING_DAY, WEDDING_VENUE } from "./constants.js";
import { getDaysLeft } from "./helpers.js";

export function Header() {
  const [timeLeft, setTimeLeft] = useState(getDaysLeft());

  // TODO: Add navigation
  const handleSelect = (eventKey) => console.log(eventKey);

  useEffect(() => {
    const intervalId = setInterval(() => setTimeLeft(getDaysLeft()), 30_000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <header>
      <Container>
        <h1>Jens and Simone</h1>
        <p>
          {WEDDING_DAY.toLocaleString(DateTime.DATE_FULL)} &bull;{" "}
          {WEDDING_VENUE.fullName}
        </p>
        <p>{timeLeft} Days To Go!</p>
      </Container>

      {/* TODO: this sticky positioning doesn't work */}
      <Navbar
        bg={"dark"}
        variant={"dark"}
        expand={"md"}
        sticky={"top"}
        onSelect={handleSelect}
      >
        <Container>
          <Navbar.Toggle aria-controls={"basic-navbar-nav"} />

          <Navbar.Collapse>
            <Nav fill={true} variant={"pills"}>
              {/* TODO: this should be generated from config */}
              {/* TODO: ensure that the correct nav item is marked as active on first render */}
              <Nav.Item>
                <Nav.Link eventKey={"1"}>NavLink 1 content</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey={"2"}>NavLink 2 content</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
