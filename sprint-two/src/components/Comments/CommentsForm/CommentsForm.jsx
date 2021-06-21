import React from "react";
// import axios from "axios";
// import { BASE_URL, API_KEY } from "../../../utils/utils";
import "./CommentsForm.scss";

class Form extends React.Component {

  // sendComment(event) {
  //   event.preventDefault();
  //   if (event.target.comment.value !== "") {
  //     axios
  //       .post(`${BASE_URL}/videos/${this.props.videoID}/comments${API_KEY}`, {
  //         name: "Nikola Bogicevic",
  //         comment: event.target.comment.value,
  //       })
  //       .then((resp) => {
  //         console.log(resp);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //     event.target.comment.value = "";
  //     this.props.getVideoFromId(this.props.videoID);
  //   }
  // }
  
  render() {
    const { numberOfComments } = this.props;
    // console.log(videoID);

    return (
      <section className="comments-form">
        <h2 className="comments-form__heading">{numberOfComments} Comments</h2>
        <div className="form-container">
          <div className="img-container"></div>
          <form
            onSubmit={(event) => this.props.sendComment(event)}
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
