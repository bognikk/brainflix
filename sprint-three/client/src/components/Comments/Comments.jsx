import React from "react";

import CommentsForm from "./CommentsForm/CommentsForm";
import CommentsPosts from "./CommentsPosts/CommentsPosts";

class Comments extends React.Component {
  render() {
    const { selectedVideo, sendComment, deleteComment } = this.props;

    return (
      <>
        <CommentsForm
          numberOfComments={selectedVideo.comments.length}
          videoID={selectedVideo.id}
          sendComment={sendComment}
        />
        <CommentsPosts
          posts={selectedVideo.comments.reverse()}
          deleteComment={deleteComment}
        />
      </>
    );
  }
}
export default Comments;
