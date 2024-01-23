import React from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";

const NavBAr = ({ pathName }) => {
  return (
    <nav className="d-none d-lg-block">
      <ul className={styles.Navbar}>
        <li class={styles.PageLink} onClick={"/"}>
          <Link className={`${pathName === "/" ? styles.isActive : ""}`} href={`/`}>
            Home
          </Link>
        </li>
        <li class={styles.PageLink}>
          <Link className={`${pathName === "/about" ? styles.isActive : ""}`} href={`/about`}>
            About Us
          </Link>
        </li>
        <li class={styles.PageLink}>
          <Link className={`${pathName === "/services" ? styles.isActive : ""}`} href={`/services`}>
            Services
          </Link>
        </li>
        <li class={styles.PageLink}>
          <Link className={`${pathName === "/gallery" ? styles.isActive : ""}`} href={`/gallery`}>
            Gallery
          </Link>
        </li>
        <li class={styles.PageLink}>
          <Link className={`${pathName === "/blog" ? styles.isActive : ""}`} href={`/blog`}>
            Blog
          </Link>
        </li>
        <li class={styles.PageLink}>
          <Link className={`${pathName === "/team" ? styles.isActive : ""}`} href={`/team`}>
            Team
          </Link>
        </li>
        <li class={styles.PageLink}>
          <Link className={`${pathName === "/contactUs" ? styles.isActive : ""}`} href={`/contactUs`}>
            Contacts Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBAr;
