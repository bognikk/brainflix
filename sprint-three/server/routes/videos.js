const express = require("express");
const router = express.Router();
const allVideos = require("../data/videos.json");
const fs = require("fs");

// MAP
router.get("/videos", (_req, res) => {
  const dataSegments = allVideos.map((video) => {
    return {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image,
    };
  });
  res.status(200).json(dataSegments);
});

router.post("/videos", (req, res) => {
  const {
    id,
    title,
    channel,
    image,
    description,
    views,
    likes,
    duration,
    video,
    timestamp,
    comments,
  } = req.body;

  const newVideo = {
    id,
    title,
    channel,
    image,
    description,
    views,
    likes,
    duration,
    video,
    timestamp,
    comments,
  };

  allVideos.push(newVideo);

  fs.writeFileSync("data/videos.json", JSON.stringify(allVideos), () =>
    console.log("nesto")
  );

  res.status(201).json(newVideo);
});

router.get("/videos/:videoID", (req, res) => {
  let videoID = req.params.videoID;
  let chosenVideo = allVideos.find((video) => video.id === videoID);
  res.status(200).json(chosenVideo);
});

router.put("/videos/:videoId/likes", (req, res) => {
  const { videoId } = req.params;

  const chosenVideo = allVideos.find((video) => video.id === videoId);
  const addLike = chosenVideo.likes + 1;
  chosenVideo.likes = addLike;

  fs.writeFileSync("data/videos.json", JSON.stringify(allVideos), {
    encoding: "utf8",
    flag: "w",
  });
  res.status(204).json(chosenVideo.likes);
});

module.exports = router;
