import React from "react";
import Image from "next/image";
import { Button } from "./Button";
import HeartSvg from "../../../public/HeartSvg.svg";
import SmileSvg from "../../../public/SmileSvg.svg";

import Styles from "../styles/MainBenner.module.css";
import DrMinbennerDp from "../../../public/DrDp.png";
import { MainBennerBottom } from "@/assets/Icon";

const MainBenner = () => {
  return (
    <div className={Styles.MinBenner}>
      <div className={"Container"}>
        <div className={`${Styles.MinBennerInner}`}>
          <div className={`${Styles.Top} row w-100`}>
            <div className=" col-12 col-lg-5 pe-0 pe-lg-2 d-flex align-center justify-center">
              <div className={Styles.MainBennerLeft}>
                <h1 className={`${Styles.Title} `}>Dedicated to Hope, Healing & Recovery</h1>
                <p className={`${Styles.SubTitle} font-thin`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a grav ida sapien. Suspendisse porttitor lectus at mauris
                  convallis pellen tesque. Aliquam in nisi .
                </p>
                <Button BtnName={`Meet Our Specialis -->`} />
              </div>
            </div>
            <div className="col-12 col-lg-7 pe-0 pe-lg-2">
              <div className="d-flex justify-center items-center">
                <div className={Styles.Ring}>
                  <Image className={`${Styles.DrMinbennerDp}`} src={DrMinbennerDp} alt="Dr's Photo" />
                </div>
              </div>
            </div>
          </div>

          <div className={Styles.Rates}>
            <div className={Styles.InnerRates}>
              <MainBennerBottom />
              <div className={Styles.SubRatesOuter}>
                <div className="d-flex">
                  <div className={Styles.HeartOuter}>
                    <Image className={Styles.Heart} src={HeartSvg} alt="" />
                  </div>
                  <div className="ps-1 ps-lg-3">
                    <span className={`${Styles.Counts} `}>262K+</span>
                    <p className={`${Styles.CountsAbout} `}>Recovered Patients</p>
                  </div>
                </div>

                <div className="d-flex">
                  <div className={`${Styles.HeartOuter} ${Styles.SmileyOuter}  xl:text-3x1`}>
                    <Image className={Styles.Heart} src={SmileSvg} alt="" />
                  </div>
                  <div className="ps-1 ps-lg-3">
                    <span className={`${Styles.Counts} `}>94%</span>
                    <p className={`${Styles.CountsAbout} `}>Satisfactian Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBenner;
