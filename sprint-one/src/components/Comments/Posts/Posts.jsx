import React from "react";

import "../Posts/Posts.scss";

class Posts extends React.Component {
  render() {
    return (
      <>
        <div className="posts-container">
          {this.props.selectedVideo.comments.map((comment) => {
            return (
              <div key={comment.id} className="post">
                <div className="post__img"></div>
                <div className="post__container">
                  <div className="post__container__upper">
                    <div className="post__name">{comment.name}</div>
                    <div className="post__date">
                      {new Date(comment.timestamp).toLocaleDateString(
                        "en-US"
                      )}
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
  }
}
export default Posts;
