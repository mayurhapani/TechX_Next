import React from "react";
import Styles from "../styles/TeamPage.module.css";

import ExpertsCard from "../componants/experts/ExpertsCard";
import SubPageMainBenner from "../componants/SubPageMainBenner";
import { Button } from "../componants/Button";

const page = () => {
  return (
    <div>
      <SubPageMainBenner Name="Team" />

      <div className="Container">
        <div className={Styles.Blog}>
          <div className={Styles.Titles}>
            <h4 className={Styles.Title}>Team Membar</h4>
            <h2 className={Styles.SubTitle}>Our Experts</h2>
            <p className={`${Styles.Text} text-center`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy
              text ever since the 1500s, when an unknown printe.
            </p>
          </div>
          <div className={Styles.CardDiv}>
            <div className="row">
              <ExpertsCard />
              <ExpertsCard />
              <ExpertsCard />
              <ExpertsCard />
              <ExpertsCard />
              <ExpertsCard />
              <ExpertsCard />
              <ExpertsCard />
              <ExpertsCard />
              <ExpertsCard />
              <ExpertsCard />
              <ExpertsCard />
            </div>
          </div>
          <Button BtnName="Load More" />
        </div>
      </div>
    </div>
  );
};

export default page;
