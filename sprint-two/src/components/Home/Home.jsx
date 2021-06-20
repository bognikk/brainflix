import React, { Component } from "react";
import axios from "axios";

import { BASE_URL, API_KEY } from "../../utils/utils";

import Hero from "../Hero/Hero";
import Main from "../Main/Main";
import SelectedVideo from "../SelectedVideo/SelectedVideo";
import Description from "../Description/Description";
import Comments from "../Comments/Comments";
import NextVideo from "../NextVideo/NextVideo";

class Home extends Component {
  state = {
    selectedVideo: null,
    videos: [],
  };

  getVideos() {
    axios
      .get(`${BASE_URL}/videos/${API_KEY}`)
      .then((resp) => {
        // console.log(resp.data);
        this.setState({
          videos: resp.data,
        });
        if (this.props.match.url === "/") {
          this.getVideoFromId(resp.data[0].id);
        } else {
          this.getVideoFromId(this.props.match.params.id);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getVideoFromId(videoID) {
    axios
      .get(`${BASE_URL}/videos/${videoID}${API_KEY}`)
      .then((resp) => {
        // console.log(resp.data);
        this.setState({
          selectedVideo: resp.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getVideos();
  }

  componentDidUpdate(prevProps) {
    const videoID = this.props.match.params.id;
    const prevVideoID = prevProps.match.params.id;

    // console.group("=======NEW========");
    // console.log("prevVideoID:", prevVideoID);
    // console.log("videoID:", videoID);

    if (videoID !== prevVideoID) {
      this.getVideoFromId(videoID);
    }
  }

  render() {
    // console.log(this.state.selectedVideo);

    if (!this.state.selectedVideo) {
      return <div>Loading...</div>;
    }
    return (
      <>
        <Hero selectedVideoImg={this.state.selectedVideo.image} />
        <Main>
          <SelectedVideo>
            <Description selectedVideo={this.state.selectedVideo} />
            <Comments selectedVideo={this.state.selectedVideo} />
          </SelectedVideo>
          <NextVideo
            fetchData={this.fetchData}
            videos={this.state.videos.filter(
              (video) => video.id !== this.state.selectedVideo.id
            )}
          />
        </Main>
      </>
    );
  }
}

export default Home;
