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
    return axios
      .get(`${BASE_URL}/videos/${API_KEY}`)
      .then((resp) => {
        // console.log(resp.data);
        this.setState({
          videos: resp.data,
          // selectedVideo: resp.data[0]
        });
        this.getVideoFromId(resp.data[0].id);
        // this.handleSelectVideo(videoID);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getVideoFromId(videoID) {
    return axios
      .get(`${BASE_URL}/videos/${videoID}${API_KEY}`)
      .then((resp) => {
        // console.log(resp.data);
        this.setState({
          selectedVideo: resp.data,
          // firstVid: resp.data
        });
        // this.handleSelectVideo(videoID);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getVideos();
    console.log("MOUNT", this.props.match.params);

    if (!this.props.match.params) {
      // this.setState({
      //   selectedVideo: this.state.videos[0],
      //   // firstVid: resp.data
      // });
    }

    // // console.log(this.props.match.params);
    // // console.log(videoID);
    // let videoID = this.props.match.params.id;
    // // console.log(this.state.allVideos);
    // if (videoID === undefined) {
    //   // videoID = this.state.allVideos[0].id;
    // }
    // // {this.handleFirst() }
    // this.fetchData(videoID);
  }

  componentDidUpdate(prevProps, prevState) {
    // let videoID = this.state.videos[0].id;
    const prevVideoID = prevProps.match.params.id;
    const videoID = this.props.match.params.id;

    console.log("prevVideoID", prevVideoID);
    console.log("videoID", videoID);

    // if (videoID !== prevVideoID) {
    //   // mockApi.getSingle(studentId).then((studentData) => {
    //   //   console.log(studentData);
    //   //   this.setState({ student: studentData });
    //   //   console.log(this.state.student);
    //   // });
    // }

    // if (this.props.match.url === "/") {
    //   this.getVideoFromId(this.state.videos[0].id);

    //   // this.setState({
    //   //   selectedVideo: this.state.videos[0],
    //   //   // firstVid: resp.data
    //   // });
    // }

    // const { videoID } = this.props.match.params;
    // console.log("UPDATE", this.props.match.params);
    // if (videoID !== prevProps.match.params.videoID) {
    //   this.getVideoFromId(videoID);
    // }
    // if (this.state.selectedVideo) {
    //   // this.getVideoFromId(videoID);
    //   return
    // }
    // this.getVideoFromId(vidID);
    console.log("UPADATE PROPS", this.props.match);

    console.log("props changed", prevProps);
    console.log("prev state", prevState);

    // console.log(this.props);
  }

  fetchData = (id) => {
    this.getVideoFromId(id);
    window.scrollTo(0, 80);
  };

  // handleSelectVideo = (id) => {

  //   console.log(id, this.state)
  //   // let newSelectedVideo = { ...this.state.selectedVideo };
  //   // let newSelectedVideo = this.state.videoDetails.find(
  //   //   (video) => video.id === id
  //   //   );
  //   // let newVideos = this.videos.filter((video) => video.id !== id);
  //   // this.setState({
  //   //   selectedVideo: newSelectedVideo,
  //   //   // videos: newVideos,
  //   // });
  //   window.scrollTo(0, 80);
  // };

  render() {
    if (!this.state.selectedVideo) {
      return <div>Loading</div>;
    }
    // console.log(this.state.selectedVideo);
    // console.log(this.state.selectedVideo);
    // console.log("COOOOMMMMM: ", this.state.allVideos[0]);
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
            videos={this.state.videos}
            selectedVideoId={this.state.selectedVideo.id}
            // handleFirst={this.handleFirst}
          />
        </Main>
      </>
    );
  }
}

export default Home;
