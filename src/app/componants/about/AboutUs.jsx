import React from "react";
import Styles from "../../styles/AboutUs.module.css";
import Image from "next/image";
import Ellipse4 from "../../../../public/Ellipse4.svg";
import Ellipse from "../../../../public/Ellipse10.png";
import { Button } from "../Button";

const AboutUs = () => {
  return (
    <div className={"Container"}>
      <div className={Styles.AboutContainer}>
        <div className={`${Styles.AboutUsOuter} d-flex flex-column flex-lg-row`}>
          <div className="d-lg-none text-center">
            <span className={`${Styles.AboutInfoTitle}`}>About Us</span>
            <p className={Styles.AboutInfoSubtitle}>We Are Always Ensure Best Medical Treatment</p>
          </div>

          <div className={`${Styles.AboutUsImageDiv}`}>
            <Image className={`${Styles.AboutUsImage}`} src={Ellipse} alt="" />
            <div className={Styles.Years}>
              <div className={Styles.YearText}>
                <p className={Styles.YearCount}>24+</p>
                <p className={Styles.YearName}>Years</p>
              </div>
            </div>
          </div>

          <div className={`${Styles.AboutUsInfoDiv} `}>
            <div className="d-none d-lg-block">
              <span className={`${Styles.AboutInfoTitle}`}>About Us</span>
              <p className={Styles.AboutInfoSubtitle}>We Are Always Ensure Best Medical Treatment</p>
            </div>
            <p className={Styles.AboutInfoText}>
              Vestibulum mollis convallis velit sed commodo. Morbi gravida, nunc sed tempor egestas, risus est facilisis urna, in dignissim
              tellus ex quis tellus. Sed euismod volutpat lacus, ut dignissim turpis elementum eu. Aenean condimentum luctus
              scelerisque.Vestibulum mollis convallis velit sed commodo. Morbi gravida.
            </p>
            <div className={Styles.AboutInfoBlog}>
              <Image className={Styles.SmImg} src={Ellipse4} alt="" />
              <div className={Styles.AboutInfoBlogText}>
                <span className={Styles.AboutInfoBlogBoldtext}>“There are many variations</span> of passages of the lorem ipsum available,
                but the majority”
              </div>
            </div>
            <Button BtnName="More About Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
