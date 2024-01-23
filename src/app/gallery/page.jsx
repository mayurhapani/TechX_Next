import React from "react";
import Styles from "../styles/GalleryPage.module.css";

import GalleryPhotos from "../componants/gallery/GalleryPhotos";
import SubPageMainBenner from "../componants/SubPageMainBenner";
const page = () => {
  return (
    <div>
      <SubPageMainBenner Name="Gallery" />

      <div className="Container">
        <div className={Styles.Gallery}>
          <div className={Styles.Titles}>
            <h2 className={Styles.SubTitle}>Our Gallery</h2>
            <p className={Styles.Text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit magna at dui commodo facilisis. Vestibulum viverra
              risus id diam hendrerit vehicula.
            </p>
          </div>
          <GalleryPhotos />
        </div>
      </div>
    </div>
  );
};

export default page;
