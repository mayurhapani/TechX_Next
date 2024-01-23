import React from "react";
import Styles from "../styles/SubPageMainBenner.module.css";

const SubPageMainBenner = ({ Name }) => {
  return (
    <div className={Styles.MinBenner}>
      <div className="Container">
        <div className={Styles.MinBennerInner}>
          <div className={Styles.Ring}>
            <h2 className={Styles.MinBennerTitle}>{Name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubPageMainBenner;
