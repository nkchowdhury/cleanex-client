import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './InfoCard.css'

const InfoCard = ({ info }) => {
  return (
    <div className="col-md-4 info-card text-white">
      <div className={`d-flex justify-content-center info-container info-${info.backgroundColor}`}>
        <div className="mr-4">
          <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon>
        </div>
        <div>
          <h4>{info.tittle}</h4>
          <p>{info.description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
