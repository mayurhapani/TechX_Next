import React from "react";
import Styles from "../styles/TeamIndividual.module.css";

import Image from "next/image";
import Img1 from "../../../public/TeamIndividual1.png";

import Header from "../componants/Header";
import SubPageMainBenner from "../componants/SubPageMainBenner";

import FooterBlue from "../componants/FooterBlue";

const page = () => {
  return (
    <div>
      <SubPageMainBenner Name="Team" />

      <div className="Container">
        <div className={Styles.TeamInner}>
          <div className={Styles.Titles}>
            <h4 className={Styles.Title}>Team Membar</h4>
            <h2 className={Styles.SubTitle}>Our Experts</h2>
            <p className={`${Styles.Text} text-center`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy
              text ever since the 1500s, when an unknown printe.
            </p>
          </div>
          <div className={`${Styles.ImageContainer} row`}>
            <div className="col-lg-6">
              <Image className={Styles.Img} src={Img1} alt="" />
            </div>
            <div className="col-lg-6">
              <div className={Styles.DrDetailes}>
                <h2 className={`${Styles.SubTitle} text-start`}>Dr. Ryan Levin</h2>
                <p className={Styles.DrSubTitle}>Neurologist </p>
                <p className={`${Styles.Text} ${Styles.TextTitle}`}>MD obstetrics and gynecology</p>
                <p className={Styles.Text}>
                  MBBS, MSexperience of more than 10 years private practice, good administrative skills, experienced to work efficiently as
                  a part of team.
                </p>
                <p className={Styles.Text}>
                  Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry s standard dummy
                  text ever since the 150 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                  has survived not only five centuries, but also the leap in electronic typesetting, remaining essentially unchanged.
                </p>
              </div>
            </div>
          </div>
          <p className={`${Styles.Text}`}>
            High blood pressure, also known as hypertension, affects millions worldwide. It is a condition that increases the risk of
            various health problems such as strokes, heart attacks, and more. While there are several well-known causes of hypertension,
            such as a poor diet, smoking and lack of exercise, there are other factors that can contribute to high blood pressure. In this
            post, let s explore some surprising causes of hypertension that you may not know. smoking and lack of exercise, there are other
            factors that can contribute to high blood pressure. In this post, let s explore some surprising causes of hypertension that you
            may not know. High blood pressure, also known as hypertension, affects millions worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
