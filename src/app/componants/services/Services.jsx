import React from "react";

import Styles from "../../styles/Services.module.css";
import ServicesCard from "./ServicesCard";
import { ButtonSm } from "../Button";

const Services = () => {
  return (
    <div className="Container">
      <div className={Styles.Services}>
        <div className={Styles.ServicesTitles}>
          <span className={Styles.MainTitle}>Our Services</span>
          <h3 className={Styles.MainSubtitle}>Provide The Best Treatment For your Child’s Health</h3>
          <p className={Styles.ServicesText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy
            text ever since the 1500s, when an unknown printe.
          </p>
        </div>
        <div className={`${Styles.CardsOuter} row w-100`}>
          <ServicesCard title="Immunizations" />
          <ServicesCard title="Pathology" />
          <ServicesCard title="Precise Diagnosis" />
        </div>
        <ButtonSm BtnName="Read More" />
      </div>
    </div>
  );
};

export default Services;
