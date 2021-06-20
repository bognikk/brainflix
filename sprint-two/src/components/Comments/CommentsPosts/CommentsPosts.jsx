import React from "react";
import "./CommentsPosts.scss";

const Posts = (props) => {
  const { posts } = props;
  return (
    <>
      <div className="posts-container">
        {posts.map((post) => {
          return (
            <div key={post.id} className="post">
              <div className="post__img"></div>
              <div className="post__container">
                <div className="post__container-upper">
                  <div className="post__name">{post.name}</div>
                  <div className="post__date">
                    {new Date(post.timestamp).toLocaleDateString("en-US")}
                  </div>
                </div>
                <div className="post__text">{post.comment}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Posts;
