import React from "react";
import "./BoxForContact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandFist } from "@fortawesome/free-solid-svg-icons";

export default function BoxForContact() {
  return (
    <div className="boxContact">
      <div className="columns">
        <div className="column level-item">
          <h1 className="titleBoxContact">Start a project</h1>
        </div>
        <div>
          <p className="containBoxContact">
            Interested in working together? We should queue up a time to chat.
            I’ll buy the coffee.
          </p>
        </div>
        <div>
          <a className="buttonBoxContact" href="/project-planner">
            <span className="iconBoxContact">
              <FontAwesomeIcon icon={faHandFist} />
            </span>
            <span>Let's do this</span>
          </a>
        </div>
      </div>
    </div>
  );
}
