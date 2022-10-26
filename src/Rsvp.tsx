import { useState } from "react";

export function Rsvp() {
  const [showSpinner, setShowSpinner] = useState(true);

  return (
    <div className={"d-flex flex-column flex-grow-1 position-relative"}>
      <iframe
        className={"flex-grow-1"}
        title={"Jens and Simone Wedding RSVP"}
        src={
          "https://docs.google.com/forms/d/e/1FAIpQLSeeZx6yGJaceTdkq6wEr_a3znbGtvPCDeXwgbPMy-Cx8btFlA/viewform?embedded=true"
        }
        onLoad={() => setShowSpinner(false)}
      />

      <div
        className={`${
          showSpinner ? "d-flex" : "d-none"
        } justify-content-center align-items-center position-absolute top-0 start-0 end-0 bottom-0`}
      >
        <div
          className={"spinner-grow text-primary"}
          role={"status"}
          style={{
            width: "10vmin",
            height: "10vmin",
            minHeight: "3rem",
            minWidth: "3rem",
          }}
        >
          <span className={"visually-hidden"}>Loading...</span>
        </div>
      </div>
    </div>
  );
}
