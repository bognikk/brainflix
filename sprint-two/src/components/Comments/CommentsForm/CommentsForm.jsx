import React from "react";
import "./CommentsForm.scss";

class Form extends React.Component {
  onSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    const { numberOfComments } = this.props;

    return (
      <section className="comments-form">
        <h2 className="comments-form__heading">{numberOfComments} Comments</h2>
        <div className="form-container">
          <div className="img-container"></div>
          <form
            onSubmit={(event) => this.onSubmit(event)}
            id="form"
            className="form"
          >
            <div className="form__input-wrapper">
              <label className="form__label" htmlFor="comment">
                JOIN THE CONVERSATION
              </label>
              <textarea
                className="form__textarea"
                name="comment"
                placeholder="Write comment here"
              ></textarea>
            </div>
            <button type="submit" className="form__btn">
              COMMENT
            </button>
          </form>
        </div>
      </section>
    );
  }
}
export default Form;
