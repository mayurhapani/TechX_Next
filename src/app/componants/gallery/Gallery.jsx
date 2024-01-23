import React from "react";
import GalleryPhotos from "./GalleryPhotos";

import Styles from "../../styles/Gallery.module.css";
import { Button } from "../Button";

const Gallery = () => {
  return (
    <div className="Container">
      <div className={Styles.Gallery}>
        <h2 className={Styles.Title}>Our Gallery</h2>
        <p className={Styles.SubTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit magna at dui commodo facilisis. Vestibulum viverra risus
          id diam hendrerit vehicula.
        </p>
        <GalleryPhotos />
        <Button BtnName="View More" />
        {/* <button className={Styles.btn}>View More</button> */}
      </div>
    </div>
  );
};

export default Gallery;
