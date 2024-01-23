import React from "react";
import Styles from "../styles/BlogIndividual.module.css";
import Image from "next/image";
import Img1 from "../../../public/BlogIndividual1.png";

import SubPageMainBenner from "../componants/SubPageMainBenner";
import BlogUpdateBy from "../componants/blog/BlogUpdateBy";

const page = () => {
  return (
    <div>
      <SubPageMainBenner Name="Blog " />

      <div className="Container">
        <div className={`${Styles.ImageContainer} row`}>
          <div className="col-lg-6">
            <Image className={Styles.Img} src={Img1} alt="" />
          </div>
          <div className="col-lg-6">
            <div className={`${Styles.SearchMenu} p-2`}>
              <input className={Styles.Input} type="text" placeholder="Search" />
              <h3 className={Styles.TitleSearch}>Categories</h3>
              <ul className={Styles.SearchUl}>
                <li className={Styles.SearchLi}>Orthopedics</li>
                <li className={Styles.SearchLi}>Dental</li>
                <li className={Styles.SearchLi}>Orthopedics</li>
                <li className={Styles.SearchLi}>Neurosciences</li>
                <li className={Styles.SearchLi}>Cancer Care</li>
                <li className={Styles.SearchLi}>Gastroenterology</li>
                <li className={Styles.SearchLi}>Medicine</li>
                <li className={Styles.SearchLi}>Cardiology</li>
                <li className={Styles.SearchLi}>Surgery</li>
                <li className={Styles.SearchLi}>Physiotherapy</li>
                <li className={Styles.SearchLi}>Physiotherapy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`${Styles.Blog} col-lg-12`}>
          <div className={Styles.Titles}>
            <h2 className={`${Styles.SubTitle} text-start`}>How to Determine the Length of a Time -Out</h2>
            <div className={Styles.DateDiv}>
              <BlogUpdateBy />
            </div>
            <p className={`${Styles.Text}`}>
              High blood pressure, also known as hypertension, affects millions worldwide. It is a condition that increases the risk of
              various health problems such as strokes, heart attacks, and more. While there are several well-known causes of hypertension,
              such as a poor diet, smoking and lack of exercise, there are other factors that can contribute to high blood pressure. In this
              post, let s explore some surprising causes of hypertension that you may not know. smoking and lack of exercise, there are
              other factors that can contribute to high blood pressure. In this post, let s explore some surprising causes of hypertension
              that you may not know. High blood pressure, also known as hypertension, affects millions worldwide.
            </p>
            <p className={`${Styles.Text}`}>
              <span className={`${Styles.TextTitle} ${Styles.Text}`}>Poor sleep :</span> One of the surprising causes of hypertension is
              poor sleep. Research shows people who don t get enough quality sleep are at risk of developing hypertension. This is because
              sleep helps regulate the body s stress hormones, which affect blood pressure. If you re not getting enough restful sleep each
              night, it could be contributing to your high blood pressure.
            </p>
            <p className={`${Styles.Text}`}>
              <span className={`${Styles.TextTitle} ${Styles.Text}`}>Oral health problems ::</span> Poor oral health can contribute to
              hypertension. Studies show people with gum disease and other oral health conditions are more likely to have high blood
              pressure; this could be due to inflammation caused by oral bacteria, which can affect blood vessels and increase blood
              pressure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
