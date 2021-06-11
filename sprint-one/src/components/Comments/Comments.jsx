import React from "react";

import Posts from "./Posts/Posts";
import Form from "./Form/Form";
import "../Comments/Comments.scss";

class Comments extends React.Component {
  state = {
    selectedVideo: this.props.selectedVideo,
  };

  render() {
    return (
      <>
        <Form selectedVideo={this.state.selectedVideo} />
        <Posts selectedVideo={this.state.selectedVideo} />
      </>
    );
  }
}
export default Comments;
