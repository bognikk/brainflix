import React from "react";

import "../Posts/Posts.scss";

const Posts = (props) => {
  return (
    <>
      <div className="posts-container">
        {props.selectedVideo.comments.map((comment) => {
          return (
            <div key={comment.id} className="post">
              <div className="post__img"></div>
              <div className="post__container">
                <div className="post__container__upper">
                  <div className="post__name">{comment.name}</div>
                  <div className="post__date">
                    {new Date(comment.timestamp).toLocaleDateString("en-US")}
                  </div>
                </div>
                <div className="post__text">{comment.comment}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Posts;
