import React, { Component } from "react";
import Modal from "../UI/Modal";
import "./UploadVideo.scss";
import bikeImage from "../../assets/images/Upload-video-preview.jpg";

class UploadVideo extends Component {
  state = {
    showModal: false,
  };

  showModal = (event) => {
    event.preventDefault();
    this.setState({
      showModal: true,
    });
  };

  onPublish = (event) => {
    event.preventDefault();
    this.props.history.push("/");
  };

  goBack = (event) => {
    event.preventDefault();
    this.props.history.goBack();
  };

  render() {
    return (
      <>
        {this.state.showModal && (
          <Modal
            title="Your video is submitted successfully!"
            action={this.onPublish}
          />
        )}
        <section className="upload">
          <h1 className="upload__heading">Upload Video</h1>
          <div className="upload__desktopSizeWrapper">
            <div className="upload__img">
              <p className="upload__img-thumbnail">VIDEO THUMBNAIL</p>
              <img
                className="upload__img-image"
                src={bikeImage}
                alt="blue bike"
              />
            </div>
            <form className="upload__form">
              <label className="upload__form-label" htmlFor="title">
                TITLE YOUR VIDEO
              </label>
              <input
                className="upload__form-input"
                type="text"
                name="title"
                placeholder="Add a title to your video"
              />
              <label className="upload__form-label" htmlFor="description">
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea
                className="upload__form-textarea"
                type="text"
                name="description"
                placeholder="Add a description to your video"
              />
            </form>
          </div>
          <div className="upload__buttons">
            <button
              onClick={(event) => this.showModal(event)}
              className="upload__buttons-btn"
            >
              PUBLISH
            </button>
            <button
              onClick={(event) => this.goBack(event)}
              className="upload__buttons-btn"
            >
              CANCEL
            </button>
          </div>
        </section>
      </>
    );
  }
}

export default UploadVideo;
