import React from "react";
import { Link } from "gatsby";

const BlogPreview = ({ post }) => {
  const { title, author, date, path, excerpt } = post;

  return (
    <div>
      <h3>{title}</h3>
      <small>
        {author} on {date}
      </small>
      <p>{excerpt}</p>
      <br />
      <Link to={path}>Read more</Link>
      <hr />
    </div>
  );
};

export default BlogPreview;
