"use client";
import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
// import LogoImage from "/logo.png";
import Frame from "../../../public/Frame.svg";

import NavBAr from "./NavBAr";
import { HeaderButton } from "./Button";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  return (
    <div className={"Container"}>
      <header className={styles.Header}>
        <Image src="/logo.png" width="100" height="100" alt="The Logo Of Hospital" />
        <Image src={Frame} className="d-lg-none me-2" alt="" />
        <NavBAr pathName={`${pathName}`} />
        <HeaderButton BtnName="Free Consultation" />
      </header>
    </div>
  );
};

export default Header;
