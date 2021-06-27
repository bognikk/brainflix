import React from "react";
import "./CommentsPosts.scss";
import Loading from "../../UI/Loading";

const CommentsPosts = ({ posts, deleteComment }) => {
  if (posts.length === 0) {
    return <Loading text="Be the first to post a comment on this video!" />;
  }

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
                <button
                  className="post__btn"
                  onClick={() => deleteComment(post.id)}
                >
                  DELETE
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default CommentsPosts;
