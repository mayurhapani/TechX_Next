import React from "react";
import Styles from "../../styles/Experts.module.css";
import ExpertsCard from "./ExpertsCard";
import { Button } from "../Button";

const Experts = () => {
  return (
    <div className="Container">
      <div className="text-center">
        <div className={Styles.Titles}>
          <h4 className={Styles.Title}>Team Membar</h4>
          <h2 className={Styles.SubTitle}>Our Experts</h2>
          <p className={Styles.Text}>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
            injected humour, or randomised words which don t look even slightly believable.
          </p>
        </div>
        <div className="row mb-lg-4 py-2 py-lg-0 w-100 justify-content-center">
          <ExpertsCard />
          <ExpertsCard />
          <ExpertsCard />
          <ExpertsCard />
        </div>
        <Button BtnName={"View More"} />
      </div>
    </div>
  );
};

export default Experts;
