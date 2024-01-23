import React from "react";
import Styles from "../styles/BlogPage.module.css";

import BlogCard from "../componants/blog/BlogCard";
import SubPageMainBenner from "../componants/SubPageMainBenner";

const page = () => {
  return (
    <div>
      <SubPageMainBenner Name="Blog " />

      <div className="Container">
        <div className={Styles.Blog}>
          <div className={Styles.Titles}>
            <h4 className={Styles.Title}>Latest From Blogs</h4>
            <h2 className={Styles.SubTitle}>Read our News & Blog</h2>
            <p className={`${Styles.Text} text-center`}>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don t look even slightly believable.
            </p>
          </div>
          <div className="row ps-2">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
