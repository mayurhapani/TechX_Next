import React from "react";
import Styles from "../styles/LeadingWay.module.css";
import { Button } from "./Button";
import { DarkBlueBtn } from "./Button";

const LeadingWay = () => {
  return (
    <div className={Styles.LeadingWayOuter}>
      <div className="Container">
        <div className={Styles.LeadingWay}>
          <div className={Styles.RingOuter}>
            <div className={Styles.Ring}></div>
          </div>
          <div className={Styles.LeadingWayInner}>
            <h2 className={Styles.Title}>
              Leading The Way In <span className={Styles.Medical}>Medical</span> <br /> Excellence
            </h2>
            <h4 className={Styles.SubTitle}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s <br /> standard
              dummy text ever since the 1500s, when an unknown printe.
            </h4>
            <div className={Styles.BtnDiv}>
              <DarkBlueBtn BtnName={"Get Free Consultatio"} />
              <Button BtnName={"+2819 (4631)2930"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadingWay;
