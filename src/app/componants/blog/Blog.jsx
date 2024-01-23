import React from "react";
import Styles from "../../styles/Blog.module.css";
import BlogCard from "./BlogCard";
import { Button } from "../Button";

const Blog = () => {
  return (
    <div className="Container">
      <div className="text-center">
        <div className={Styles.Titles}>
          <h4 className={Styles.Title}>Latest From Blog</h4>
          <h2 className={Styles.SubTitle}>Read our News & Blog</h2>
          <p className={Styles.Text}>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
            injected humour, or randomised words which don t look even slightly believable.
          </p>
        </div>
        <div className="row w-100 ps-3">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <Button BtnName="View More" />
        {/* <button className={Styles.Btn}>Read More</button> */}
      </div>
    </div>
  );
};

export default Blog;
