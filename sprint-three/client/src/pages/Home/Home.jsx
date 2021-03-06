import React, { Component } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Loading from "../../components/UI/Loading";

import Hero from "../../components/Hero/Hero";
import Main from "../../components/UI/Main";
import SelectedVideo from "../../components/UI/SelectedVideo";
import Description from "../../components/Description/Description";
import Comments from "../../components/Comments/Comments";
import NextVideo from "../../components/NextVideo/NextVideo";

class Home extends Component {
  state = {
    selectedVideo: null,
    videos: [],
  };

  getVideos = () => {
    axios
      .get(`/videos`)
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
  };

  getVideoFromId = (videoID) => {
    axios
      .get(`/videos/${videoID}`)
      .then((resp) => {
        this.setState({
          selectedVideo: resp.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getVideos();
  }

  componentDidUpdate(prevProps) {
    const videoID = this.props.match.params.id;
    const prevVideoID = prevProps.match.params.id;

    if (videoID === undefined && videoID !== prevVideoID) {
      this.getVideoFromId(this.state.videos[0].id);
    } else if (videoID !== prevVideoID) {
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
        .post(`/videos/${videoID}/comments`, {
          name: "John Doe",
          comment: event.target.comment.value,
          id: uuidv4().toString(),
          likes: 0,
          timestamp: new Date().getTime(),
        })
        .then((res) => {
          if (res.status === 201) {
            setTimeout(() => {
              this.getVideoFromId(videoID);
            }, 500);
          }
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
      .delete(`/videos/${videoID}/comments/${postID}`)
      .then((res) => {
        if (res.status === 200) {
          // this setTimeout, and every other, has to be replaced with async await or Proxy when i learn how to :)
          setTimeout(() => {
            this.getVideoFromId(videoID);
          }, 500);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  likeVideo = () => {
    const videoID = this.state.selectedVideo.id;

    axios
      .put(`/videos/${videoID}/likes`)
      .then((res) => {
        if (res.status === 204) {
          setTimeout(() => {
            this.getVideoFromId(videoID);
          }, 500);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (!this.state.selectedVideo) {
      return <Loading text="Loading..." />;
    }
    return (
      <>
        <Hero
          selectedVideoImg={this.state.selectedVideo.image}
          // selectedVideoVideo={this.state.selectedVideo.video}
        />
        <Main>
          <SelectedVideo>
            <Description
              selectedVideo={this.state.selectedVideo}
              likeVideo={this.likeVideo}
            />
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
