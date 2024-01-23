import React from "react";
import Image from "next/image";

import Styles from "../../styles/Gallery.module.css";

import img1 from "../../../../public/Rectangle 45.png";
import img2 from "../../../../public/Rectangle 56.png";
import img3 from "../../../../public/Rectangle 48.png";
import img4 from "../../../../public/Rectangle 57.png";
import img5 from "../../../../public/Rectangle 54.png";
import img6 from "../../../../public/Rectangle 59.png";
import img7 from "../../../../public/Rectangle 60.png";
import img8 from "../../../../public/Rectangle 58.png";
import img9 from "../../../../public/Rectangle 55.png";

const GalleryPhotos = () => {
  return (
    <div className={`${Styles.Photos} grid grid-cols-4 gap-2`}>
      <Image className={Styles.Photo1} src={img1} alt="" />
      <Image src={img2} alt="" />
      <Image src={img3} alt="" />
      <Image src={img4} alt="" />
      <Image src={img5} alt="" />
      <Image src={img6} alt="" />
      <Image src={img7} alt="" />
      <Image src={img8} alt="" />
      <Image src={img9} alt="" />
    </div>
  );
};

export default GalleryPhotos;
