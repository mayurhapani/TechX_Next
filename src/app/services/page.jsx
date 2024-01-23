import React from "react";
import Styles from "../styles/ServicesPage.module.css";

import SubPageMainBenner from "../componants/SubPageMainBenner";
import ServicesPageCard from "../componants/services/ServicesPageCard";

const page = () => {
  return (
    <div>
      <SubPageMainBenner Name="Services " />

      <div className="Container">
        <div className={Styles.Services}>
          <div className={Styles.Titles}>
            <h4 className={Styles.Title}>Our Services</h4>
            <h2 className={Styles.SubTitle}>Provide The Best Treatment For your Child s Health</h2>
            <p className={`${Styles.Text} d-none d-lg-block`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy
              text ever since the 1500s, when an unknown printe.
            </p>
          </div>
          <div className={Styles.cards}>
            <ServicesPageCard />
            <ServicesPageCard />
            <ServicesPageCard />

            {/* <div className="row">
              <div className="col-6">
                <Image src={Img1} alt="" />
              </div>
              <div className="col-6">
                <div className={Styles.TextDiv}>
                  <ServicesSvg title="Immunizations" />
                  <p className={Styles.Text}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishin.
                  </p>
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
