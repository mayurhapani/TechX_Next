import React from "react";
import Image from "next/image";
import Img1 from "../../../../public/Services1.png";
import ServicesSvg from "./ServicesSvg.jsx";
import Styles from "../../styles/ServicesPage.module.css";

const ServicesPageCard = () => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <Image src={Img1} alt="" />
      </div>
      <div className="col-lg-6">
        <div className={Styles.TextDiv}>
          <ServicesSvg title="Immunizations" />
          <p className={Styles.Text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPageCard;
