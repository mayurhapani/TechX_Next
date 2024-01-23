import React from "react";
import Image from "next/image";
import Styles from "../../styles/AboutPage.module.css";
// import Styles from "../styles/AboutPage.module.css";

import Img1 from "../../../../public/Rectangle 72.png";
// import Img1 from "../../../public/Rectangle 72.png";

const AbloutPageCard = () => {
  return (
    <div className={`${Styles.Card} row`}>
      <Image className="col-lg-6" src={Img1} alt="" />
      <div className={`${Styles.TextDiv} col-lg-6`}>
        <span className={Styles.TitleSpan1}>Our</span>
        <span className={Styles.TitleSpan2}>Vision</span>
        <p className={Styles.Text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod see tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. reprehenderit in
          voluptate.
        </p>
        <p className={Styles.Text}>
          That ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor to be incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate.
        </p>
      </div>
    </div>
  );
};

export default AbloutPageCard;
