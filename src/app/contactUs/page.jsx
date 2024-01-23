import React from "react";
import Styles from "../styles/ContectUs.module.css";
import SubPageMainBenner from "../componants/SubPageMainBenner";

const page = () => {
  return (
    <div>
      <SubPageMainBenner Name="Contact Us" />

      <div className="Container">
        <div className={Styles.ContectUsInner}>
          <div className={Styles.Titles}>
            <h3 className={Styles.Title}>Get In Touch</h3>
            <p className={Styles.Text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy
              text ever since.
            </p>
          </div>
          <div className={Styles.Form}>
            <div className="row">
              <div className="col-lg-7">
                <div className="row row-gap-4">
                  <div className="col-lg-6">
                    <input className={Styles.Input} type="text" placeholder="First Holder" />
                  </div>
                  <div className="col-lg-6">
                    <input className={Styles.Input} type="text" placeholder="Last Holder" />
                  </div>
                  <div className="col-12">
                    <input className={Styles.Input} type="email" placeholder="Email" />
                  </div>
                  <div className="col-12">
                    <input className={Styles.Input} type="tel" placeholder="Phone Number" />
                  </div>
                  <div className="col-12">
                    <textarea className={Styles.Input} placeholder=" Message" cols="30" rows="6"></textarea>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className={Styles.AddressDiv}>
                  <div className={Styles.Address}>
                    <h3 className={Styles.SubTitle}>Address</h3>
                    <p className={`${Styles.Text} text-start`}>
                      10-11,Gr. Floor, Ambedakar Shopping Center, Mandarwaja, Ring Road, Surat, Gujarat-395002
                    </p>
                  </div>
                  <div className={Styles.Address}>
                    <h3 className={Styles.SubTitle}>Phone</h3>
                    <p className={`${Styles.Text} text-start`}>+91-9825117510 (Naresh K. Sarasiya)</p>
                  </div>
                  <div className={Styles.Address}>
                    <h3 className={Styles.SubTitle}>Email</h3>
                    <p className={`${Styles.Text} text-start`}>inquiry@Spanee.in nksabb@yahoo.co.in Spanee_ Hospital@yahoo.com</p>
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

export default page;
