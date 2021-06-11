import React from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Description from "./components/Description/Description";
import Comments from "./components/Comments/Comments";
import SelectedVideo from "./components/SelectedVideo/SelectedVideo";
import NextVideo from "./components/NextVideo/NextVideo";

import VideoDetails from "./data/video-details.json";
import Videos from "./data/videos.json";

import "./App.scss";

class App extends React.Component {
  state = {
    Videos,
    VideoDetails,
    selectedVideo: VideoDetails[0],
  };

  
  render() {
    // console.log(this.state.selectedVideo);

    // log();
    // console.log(this.state.VideoDetails.forEach((video) => console.log(video)));
    return (
      <div className="App">
        <Header />
        <SelectedVideo className="selectedVideo">
          <Hero selectedVideoImg={this.state.selectedVideo.image} />
          <Description selectedVideo={this.state.selectedVideo} />
          <Comments selectedVideo={this.state.selectedVideo} />
        </SelectedVideo>
        <NextVideo videos={this.state.Videos}></NextVideo>
      </div>
    );
  }
}

export default App;
