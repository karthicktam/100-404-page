import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPoop } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>
        4<FontAwesomeIcon icon={faPoop} className="iconStyle" />4
      </h1>
      <h2>Sh*t!</h2>
      <p className="text">
        Looks like the page you're looking for has been <i>stoolen</i>.<br />I
        hope it didn't get <i>dumped</i> somewhere we can't find.
        <br />I know, I know, these puns are <i>crappy</i>!
      </p>
      <small className="attribution">
        <i>
          Idea and design by{" "}
          <a
            href="https://dribbble.com/shots/3937555--DailyUI-008-404-Page"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jane Kathryn Teo
          </a>
        </i>
      </small>
    </div>
  );
}
