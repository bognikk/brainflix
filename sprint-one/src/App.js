import React from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import SelectedVideo from "./components/SelectedVideo/SelectedVideo";
import Description from "./components/Description/Description";
import Comments from "./components/Comments/Comments";
import NextVideo from "./components/NextVideo/NextVideo";

import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json";

import "./App.scss";

class App extends React.Component {
  state = {
    videos: videos.filter((video) => video.id !== videoDetails[0].id),
    videoDetails,
    selectedVideo: videoDetails[0],
  };

  handleSelectVideo = (id) => {
    let newSelectedVideo = this.state.videoDetails.find(
      (video) => video.id === id
    );
    let newVideos = videos.filter((video) => video.id !== id);
    this.setState({
      selectedVideo: newSelectedVideo,
      videos: newVideos,
    });
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Hero selectedVideoImg={this.state.selectedVideo.image} />
        <Main>
          <SelectedVideo>
            <Description selectedVideo={this.state.selectedVideo} />
            <Comments selectedVideo={this.state.selectedVideo} />
          </SelectedVideo>
          <NextVideo
            handleSelectVideo={this.handleSelectVideo}
            videos={this.state.videos}
          />
        </Main>
      </div>
    );
  }
}

export default App;
