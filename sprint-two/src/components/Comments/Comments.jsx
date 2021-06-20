import React from "react";

import Form from "./CommentsForm/CommentsForm";
import Posts from "./CommentsPosts/CommentsPosts";
import "./Comments.scss";

class Comments extends React.Component {
  render() {
    const { selectedVideo } = this.props;

    return (
      <>
        <Form numberOfComments={selectedVideo.comments.length} />
        <Posts posts={selectedVideo.comments} />
      </>
    );
  }
}
export default Comments;
