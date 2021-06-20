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
          // selectedVideo: resp.data[0]
        });
        if (this.props.match.url === "/") {
          this.getVideoFromId(resp.data[0].id);
        } else {
          this.getVideoFromId(this.props.match.params.id);
        }
        // this.handleSelectVideo(videoID);
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
          // firstVid: resp.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getVideos();

    // console.log("MOUNT", this.props.match.params);

    // if (this.props.match.params === ) {
    //   // this.setState({
    //   //   selectedVideo: this.state.videos[0],
    //   //   // firstVid: resp.data
    //   // });
    // }

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

  componentDidUpdate(prevProps) {
    const videoID = this.props.match.params.id;
    const prevVideoID = prevProps.match.params.id;

  
    if (this.props.match.url === "/" && videoID !== prevVideoID) {
      this.getVideoFromId(this.state.videos[0].id);
    } else if (videoID !== prevVideoID) {
      this.getVideoFromId(videoID);
    }

    // // let isMounted = true;
    // const prevVideoID = prevProps.match.params.id;
    // const videoID = this.props.match.params.id;
    // // const prevProps = prevProps.match.params.id;
    // console.log("prevVideoID:", prevVideoID);

    // // console.log("prevVideoID:", prevVideoID);
    // // console.log("videoID:", videoID);

    // // if (videoID === undefined) {
    // //   this.getVideoFromId(this.state.videos[0].id);
    // // } else {
    // //   this.getVideoFromId(videoID);
    // // }
  }

  componentWillUnmount() {
    // getVideoFromId;
  }

  // fetchData = (id) => {
  //   this.getVideoFromId(id);
  // };

  render() {
    if (!this.state.selectedVideo) {
      return <div>Loading</div>;
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
