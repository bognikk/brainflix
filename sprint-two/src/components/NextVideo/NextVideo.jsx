// import React from "react";
import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import "../NextVideo/NextVideo.scss";

// import { BASE_URL, API_KEY } from "../../utils/utils";

class NextVideo extends Component {
  // state = {
  //   videos: [],
  // };

  // componentDidMount() {
  //   // GET videos for next video
  //   axios
  //     .get(`${BASE_URL}/videos${API_KEY}`)
  //     .then((resp) => {
  //       // console.log(resp.data);
  //       this.setState({
  //         videos: resp.data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  render() {
    // console.log(this.props);

    return (
      <section className="next-video">
        <h2 className="next-video__heading">NEXT VIDEO</h2>
        <div className="next-video__container">
          {this.props.videos.map((video) => {
            if (video.id !== this.props.selectedVideoId)
              return (
                <Link
                  to={`/${video.id}`}
                  key={video.id}
                  onClick={() => this.props.fetchData(video.id.toString())}
                  className="next-video__video"
                >
                  <img
                    className="next-video__video__img"
                    src={video.image}
                    alt="next video img"
                  />
                  <div className="next-video__video__description">
                    <div className="next-video__video__title">
                      {video.title}
                    </div>
                    <div className="next-video__video__credits">
                      {video.channel}
                    </div>
                  </div>
                </Link>
              );
          })}
        </div>
      </section>
    );
  }
}
export default NextVideo;
