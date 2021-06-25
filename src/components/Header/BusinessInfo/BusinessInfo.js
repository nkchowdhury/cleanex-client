import React from "react";
import InfoCard from "../../../components/Header/InfoCard/InfoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

const BusinessInfo = () => {
  const infoData = [
    {
      tittle: "Our Office",
      description: "9 Burry Hills, Australia.",
      icon: faMapMarkerAlt ,
      backgroundColor: "primary",
    },

    {
      tittle: "Telephone",
      description: "+408 567 475",
      icon:faPhoneAlt ,
      backgroundColor: "dark",
    },
    {
      tittle: "Our Mail",
      description: "info@cleanex.com",
      icon: faEnvelope,
      backgroundColor: "primary",
    },
  ];

  return (
    <div className="d-flex justify-content-center">
      <div className="w-100 row">
        {infoData.map((info) => (
          <InfoCard info={info}></InfoCard>
        ))}
      </div>
    </div>
  );
};

export default BusinessInfo;
