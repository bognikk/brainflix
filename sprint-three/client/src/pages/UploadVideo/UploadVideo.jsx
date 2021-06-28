import React, { Component } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import Modal from "../../components/UI/Modal";
import "./UploadVideo.scss";
import bikeImage from "../../assets/images/Upload-video-preview.jpg";

class UploadVideo extends Component {
  state = {
    showModalSuccess: false,
    showModalFail: false,
  };

  uploadVideo = (event) => {
    axios
      .post(`/videos`, {
        id: uuidv4().toString(),
        title: event.target.title.value,
        channel: event.target.channel.value,
        image: "/images/upload.jpg",
        description: event.target.description.value,
        views: "500",
        likes: 110,
        duration: "5:93",
        video: "/images/video.mp4",
        timestamp: new Date().getTime(),
        comments: [],
      })
      .then((res) => {
        if (res.status === 201) {
          this.setState({
            showModalSuccess: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();

    if (
      !event.target.title.value ||
      !event.target.channel.value ||
      !event.target.description.value
    ) {
      this.setState({
        showModalFail: true,
      });
    } else {
      this.uploadVideo(event);
    }
  };

  finishUpload = () => {
    this.props.history.push("/");
  };

  goBack = () => {
    this.props.history.goBack();
  };

  acknowledgeMistake = () => {
    this.setState({
      showModalFail: false,
    });
  };

  render() {
    return (
      <>
        {this.state.showModalSuccess && (
          <Modal
            title="Your video is submitted successfully, mate!"
            action={this.finishUpload}
            btnTxt="Okay"
          />
        )}
        {this.state.showModalFail && (
          <Modal
            title="Oi mate, check your imputs!"
            action={this.acknowledgeMistake}
            btnTxt="Fine..."
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
            <form
              onSubmit={this.handleOnSubmit}
              id="uploadForm"
              className="upload__form"
            >
              <label className="upload__form-label" htmlFor="title">
                TITLE YOUR VIDEO
              </label>
              <input
                className="upload__form-input"
                type="text"
                name="title"
                placeholder="Add a title to your video"
              />
              <label className="upload__form-label" htmlFor="title">
                CHANNEL
              </label>
              <input
                className="upload__form-input"
                type="text"
                name="channel"
                placeholder="Add a channel of your video"
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
              type="submit"
              form="uploadForm"
              className="upload__buttons-btn"
            >
              PUBLISH
            </button>
            <button onClick={this.goBack} className="upload__buttons-btn">
              CANCEL
            </button>
          </div>
        </section>
      </>
    );
  }
}

export default UploadVideo;
