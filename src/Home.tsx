import { DateTime } from "luxon";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, resolvePath } from "react-router-dom";
import background from "./assets/images/home-backgrund.webp";
import { APP_ROUTES, WEDDING_DAY, WEDDING_VENUE } from "./constants";

export function Home() {
  return (
    <div className={"d-flex flex-grow-1 flex-column bg-dark"}>
      <Container
        className={"flex-grow-1 d-flex flex-column justify-content-center"}
        style={{
          background: `url("${background}") no-repeat center 15%/cover`,
        }}
      >
        <Row className={"justify-content-center"}>
          <Col xs={12} md={10} lg={8} xl={6}>
            <Card
              className={"my-5 bg-light text-center"}
              style={{ "--bs-bg-opacity": "0.8" } as React.CSSProperties}
            >
              <Card.Body>
                <Card.Title className={"font-georgia display-6 text-uppercase"}>
                  We're getting
                  <br />
                  married!
                </Card.Title>
                <Card.Subtitle className="font-georgia text-muted mb-3">
                  We can't wait to share our special day with you
                </Card.Subtitle>
                <Card.Text>
                  <p>
                    {WEDDING_VENUE.address}
                    <br />
                    {WEDDING_DAY.toLocaleString(DateTime.DATETIME_MED)}
                  </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">
                <Row>
                  <Col xs={12} sm={6}>
                    <Link
                      to={resolvePath(APP_ROUTES.rsvp.path || "")}
                      className="btn btn-primary w-100 mb-2 mb-sm-0"
                      role="button"
                    >
                      RSVP here
                    </Link>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Link
                      to={resolvePath(APP_ROUTES.information.path || "")}
                      className="btn btn-outline-primary w-100"
                      role="button"
                    >
                      More Information
                    </Link>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
