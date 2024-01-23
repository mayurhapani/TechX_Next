import React from "react";

import Styles from "../../styles/Reviews.module.css";
import ReviewsCard from "./ReviewsCard";
import { Button } from "../Button";

const Reviews = () => {
  return (
    <div className="Container">
      <div className="text-center my-5">
        <div className={Styles.Titles}>
          <h2 className={Styles.SubTitle}>Our Reviews </h2>
          <p className={Styles.Text}>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
            injected humour, or randomised words which don t look even slightly believable.
          </p>
        </div>
        <div className="row py-5">
          <ReviewsCard />
          <ReviewsCard />
          <ReviewsCard />
        </div>
        <Button BtnName="View More" />
      </div>
    </div>
  );
};

export default Reviews;
