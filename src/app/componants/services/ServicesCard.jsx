import React from "react";
import Styles from "../../styles/ServicesCard.module.css";

import ServicesSvg from "./ServicesSvg";
import { BlueBtn } from "../Button";

const ServicesCard = ({ title }) => {
  return (
    <div className="col-lg-4">
      <div className={Styles.SCard}>
        <ServicesSvg title={title} />
        <div className="text-center">
          <p className={Styles.SCardText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
          </p>
          <BlueBtn BtnName="Read More" />
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
