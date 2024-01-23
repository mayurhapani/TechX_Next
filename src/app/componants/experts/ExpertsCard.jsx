import React from "react";
import Image from "next/image";
import Styles from "../../styles/ExpertsCard.module.css";

import Img1 from "../../../../public/Expert1.png";
// import Img2 from "../../../public/Expert2.png";
// import Img3 from "../../../public/Expert3.png";
// import Img4 from "../../../public/Expert4.png";

const ExpertsCard = () => {
  return (
    <div className={` col-lg-3 text-center`}>
      <div className={`${Styles.Card}`}>
        <Image src={Img1} alt="" />

        <h4 className={Styles.Title}>Dr. Barlione Croudo</h4>
        <p className={Styles.SubTitle}>Neurologist </p>
      </div>
    </div>
  );
};

export default ExpertsCard;
