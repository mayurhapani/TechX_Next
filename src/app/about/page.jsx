import React from "react";
import Image from "next/image";
import Styles from "../styles/AboutPage.module.css";
import Img1 from "../../../public/Rectangle 72.png";
import Img2 from "../../../public/Rectangle 73.png";

import SubPageMainBenner from "../componants/SubPageMainBenner";
import AboutUs from "../componants/about/AboutUs";
import AbloutPageCard from "../componants/about/AbloutPageCard";

const page = () => {
  return (
    <div>
      <SubPageMainBenner Name="About Us" />

      <AboutUs />
      <div className="Container">
        <div className={Styles.AboutVision}>
          <h2 className={Styles.SubTitle}>
            Professionalism And Commitment Is <br /> Our Dedication
          </h2>
          <div className="">
            <AbloutPageCard />
            <AbloutPageCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
