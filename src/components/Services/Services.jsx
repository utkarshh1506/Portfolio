import React, { useState } from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Services = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard((prev) => (prev === index ? null : index));
  };

  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div
            key={index}
            className={`services-format ${
              expandedCard === index ? "expanded" : ""
            }`}
          >
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p
              className={`service-desc ${
                expandedCard === index ? "expanded" : ""
              }`}
            >
              {service.s_desc}
            </p>

            <div
              className="services-readmore"
              onClick={() => toggleCard(index)}
            >
              <p>{expandedCard === index ? "Read Less" : "Read More"}</p>
              <img src={arrow_icon} alt="arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
