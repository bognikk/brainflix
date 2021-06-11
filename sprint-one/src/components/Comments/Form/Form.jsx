import React from "react";

import "../Form/Form.scss";

class Form extends React.Component {
  onComment = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <section className="comments-form">
        <h2 className="comments-form__heading">
          {this.props.selectedVideo.comments.length} Comments
        </h2>
        <div className="form-container">
          <div className="img-container"></div>
          <form id="form" className="form">
            <label className="form__label" htmlFor="comment">
              JOIN THE CONVERSATION
            </label>
            <textarea
              className="form__textarea"
              name="comment"
              placeholder="Write comment here"
            ></textarea>
            <button
              onClick={(event) => this.onComment(event)}
              className="form__btn"
            >
              COMMENT
            </button>
          </form>
        </div>
      </section>
    );
  }
}
export default Form;
