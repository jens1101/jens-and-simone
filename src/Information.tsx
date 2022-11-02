import { DateTime } from "luxon";
import { Col, Container, Row } from "react-bootstrap";
import { CONTACT_DETAILS, WEDDING_DAY, WEDDING_VENUE } from "./constants";

export function Information() {
  return (
    <Container>
      <section className={"my-3"}>
        <h2>Date and Time</h2>

        <p className={"lead"}>
          {WEDDING_DAY.toLocaleString(DateTime.DATETIME_MED)}
        </p>

        <Row>
          <Col xs={12} sm={6} md={4}>
            <a
              className={"btn btn-primary mb-3 mb-sm-0 w-100"}
              href={
                "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230506T133000Z%2F20230506T200000Z&location=55%20Tulbagh%20Road%2C%20Glen%20marais%2C%20Kempton%20Park%2C%201619&text=Jens%20and%20Simone%20Wedding"
              }
              title={"Save Event in Google Calendar"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              Add to Google Calendar
            </a>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <a
              className={"btn btn-primary w-100"}
              href={
                "https://outlook.live.com/calendar/0/deeplink/compose?allday=false&enddt=2023-05-06T20%3A00%3A00%2B00%3A00&location=55%20Tulbagh%20Road%2C%20Glen%20marais%2C%20Kempton%20Park%2C%201619&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2023-05-06T13%3A30%3A00%2B00%3A00&subject=Jens%20and%20Simone%20Wedding"
              }
              title={"Save Event in Outlook"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              Add to Outlook
            </a>
          </Col>
        </Row>
      </section>

      <section className={"my-3"}>
        <h2>Contact Details</h2>

        <dl>
          <dt>Contact Numbers</dt>
          <dd>
            <p>
              We decided <em>not</em> to post our private numbers publicly to
              avoid unwanted spam calls.
            </p>
            <p>
              Please refer to your RSVP card that you should have received
              together with your invitation to obtain our personal contact
              details.
            </p>
            <p>Alternatively you can always email us.</p>
          </dd>

          <dt>Email</dt>
          <dd>
            <a
              href={`mailto:${CONTACT_DETAILS.email}`}
              target={"_blank"}
              rel={"noreferrer"}
            >
              {CONTACT_DETAILS.email}
            </a>
          </dd>
        </dl>
      </section>

      <section className={"my-3"}>
        <h2>Venue Information</h2>

        <Row>
          <Col md={6}>
            <dl>
              <dt>Venue Name</dt>
              <dd>{WEDDING_VENUE.name}</dd>

              <dt>Address</dt>
              <dd>{WEDDING_VENUE.address}</dd>

              <dt>Office</dt>
              <dd>
                <a href="tel:+27878093972">087 809 3972</a>
              </dd>

              <dt>WhatsApp</dt>
              <dd>
                <a
                  href={"https://wa.me/27823567220"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  082 356 7220
                </a>
              </dd>

              <dt>Email</dt>
              <dd>
                <a
                  href={`mailto:${WEDDING_VENUE.email}`}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  {WEDDING_VENUE.email}
                </a>
              </dd>
            </dl>
          </Col>

          <Col md={6}>
            <iframe
              title={"Google Maps"}
              src={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.4271298354447!2d28.260801299999997!3d-26.0849723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e951518988408c7%3A0x8e602abc7734b0de!2s55%20Tulbagh%20events%20and%20wedding%20venue!5e0!3m2!1sen!2sza!4v1667215098623!5m2!1sen!2sza"
              }
              loading={"lazy"}
              referrerPolicy={"no-referrer-when-downgrade"}
              style={{
                width: "100%",
                height: "50vh",
                minHeight: "450px",
              }}
            />
          </Col>
        </Row>
      </section>

      <section className={"my-3"}>
        <h2>Accommodation</h2>
        <p>
          Unfortunately the wedding venue does not offer any accommodation.
          However, a variety of accommodation options exist in the surrounding
          area.
        </p>
        <p>
          We are not familiar with any of the surrounding options and
          unfortunately cannot give any personal recommendations. Here is a link
          to a{" "}
          <a
            href={
              "https://www.google.com/maps/search/accomodation/@-26.0823564,28.2548725,15.49z/data=!4m9!2m8!3m6!1saccomodation!2s55+Tulbagh+events+and+wedding+venue,+55+Tulbagh+Road,+Glen+marais,+Kempton+Park,+1619!3s0x1e951518988408c7:0x8e602abc7734b0de!4m2!1d28.2608013!2d-26.0849723!6e3?hl=en"
            }
            target={"_blank"}
            rel={"noreferrer"}
          >
            Google Maps search
          </a>{" "}
          that we performed to look for what is available in the area. We
          suggest that you take a look yourself.
        </p>
        <p>
          Based on the aforementioned search we can recommend the following
          accommodation options that seem to be well reviewed and close by:
        </p>

        <ul>
          <li>
            <a
              href={"https://g.page/JourneysInn?share"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              Journey's Inn Africa Guest Lodge
            </a>
          </li>
          <li>
            <a
              href={"https://g.page/Travetelhotel?share"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              Accommodation @ Travetel
            </a>
          </li>
          <li>
            <a
              href={"https://goo.gl/maps/odjuc7uetWB3zMbp9"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              The Link Guest Lodge
            </a>
          </li>
          <li>
            <a
              href={"https://g.page/premium-lodge?share"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              Premium Lodge
            </a>
          </li>
        </ul>
      </section>
    </Container>
  );
}
