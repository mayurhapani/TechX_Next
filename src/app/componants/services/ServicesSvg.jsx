import React from "react";
import Styles from "../../styles/ServicesCard.module.css";
import { Svg1 } from "@/assets/Icon";

const ServicesSvg = ({ title }) => {
  return (
    <div className={Styles.SCardTop}>
      <div className={Styles.SCardSymbDiv}>
        <Svg1 />
      </div>
      <h3 className={Styles.SCardTitle}>{title}</h3>
    </div>
  );
};

export default ServicesSvg;
