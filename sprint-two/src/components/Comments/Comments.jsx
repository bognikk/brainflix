import React from "react";

import Posts from "./Posts/Posts";
import Form from "./Form/Form";
import "../Comments/Comments.scss";

class Comments extends React.Component {
  render() {
    console.log(this.props.selectedVideo);

    const { selectedVideo } = this.props;

    return (
      <>
        <Form selectedVideo={selectedVideo} />
        <Posts selectedVideo={selectedVideo} />
      </>
    );
  }
}
export default Comments;
