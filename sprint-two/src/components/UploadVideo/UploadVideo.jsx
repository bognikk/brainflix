import React, { Component } from "react";
import "../UploadVideo/UploadVideo.scss";
import bikeImage from "../../assets/images/Upload-video-preview.jpg";

export class UploadVideo extends Component {
  static propTypes = {};

  render() {
    return (
      <section className="upload">
        <h1 className="upload__heading">Upload Video</h1>
        <div className="upload__img">
          <p className="upload__img__thumbnail">VIDEO THUMBNAIL</p>
          <img
            className="upload__img__image"
            src={bikeImage}
            alt="bike image"
          />
        </div>
        <form className="upload__form">
          <label className="upload__form__label" htmlFor="title">
            TITLE YOUR VIDEO
          </label>
          <input
            className="upload__form__input"
            type="text"
            name="title"
            placeholder="Add a title to your video"
          />
          <label className="upload__form__label" htmlFor="description">
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            className="upload__form__textarea"
            type="text"
            name="description"
            placeholder="Add a description to your video"
          />
        </form>
        <div className="upload__buttons">
          <button className="upload__buttons__btn">PUBLISH</button>
          <button className="upload__buttons__btn">CANCEL</button>
        </div>
      </section>
    );
  }
}

export default UploadVideo;
