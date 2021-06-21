import React from "react";

import Form from "./CommentsForm/CommentsForm";
import Posts from "./CommentsPosts/CommentsPosts";
import "./Comments.scss";

class Comments extends React.Component {
  render() {
    const { selectedVideo, sendComment } = this.props;

    return (
      <>
        <Form
          numberOfComments={selectedVideo.comments.length}
          videoID={selectedVideo.id}
          sendComment={sendComment}
        />
        <Posts posts={selectedVideo.comments.reverse()} />
      </>
    );
  }
}
export default Comments;
