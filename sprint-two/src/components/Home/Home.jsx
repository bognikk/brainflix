import React, { Component } from "react";
import axios from "axios";

import { BASE_URL, API_KEY } from "../../utils/utils";

import Hero from "../Hero/Hero";
import Main from "../UI/Main";
import SelectedVideo from "../UI/SelectedVideo";
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

    if (videoID !== prevVideoID) {
      this.getVideoFromId(videoID);
    }
  }

  // DIVE DEEPER
  sendComment = (event) => {
    const videoID = this.state.selectedVideo.id;
    const newComment = event.target.comment.value;

    event.preventDefault();

    if (newComment !== "") {
      axios
        .post(`${BASE_URL}/videos/${videoID}/comments${API_KEY}`, {
          name: "John Doe",
          comment: event.target.comment.value,
        })
        .then(() => {
          this.getVideoFromId(videoID);
        })
        .catch((error) => {
          console.log(error);
        });

      event.target.comment.value = "";
    }
  };

  deleteComment = (postID) => {
    const videoID = this.state.selectedVideo.id;

    axios
      .delete(`${BASE_URL}/videos/${videoID}/comments/${postID}${API_KEY}`)
      .then(() => {
        this.getVideoFromId(videoID);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (!this.state.selectedVideo) {
      return <div>Loading...</div>;
    }
    return (
      <>
        <Hero selectedVideoImg={this.state.selectedVideo.image} />
        <Main>
          <SelectedVideo>
            <Description selectedVideo={this.state.selectedVideo} />
            <Comments
              selectedVideo={this.state.selectedVideo}
              sendComment={this.sendComment}
              deleteComment={this.deleteComment}
            />
          </SelectedVideo>
          <NextVideo
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
