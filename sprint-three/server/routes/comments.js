const express = require("express");
const router = express.Router();
const allVideos = require("../data/videos.json");
const fs = require("fs");

router.get("/videos/:videoID/comments", (req, res) => {
  const { videoID } = req.params;
  let chosenVideoComments = allVideos.find((video) => video.id === videoID);
  res.status(200).json(chosenVideoComments.comments);
});

router.post("/videos/:videoId/comments", (req, res) => {
  const { name, comment, id, likes, timestamp } = req.body;
  const { videoId } = req.params;

  const newComment = {
    name,
    comment,
    id,
    likes,
    timestamp,
  };

  const chosenVideo = allVideos.find((video) => video.id === videoId);
  chosenVideo.comments.push(newComment);

  fs.writeFileSync("data/videos.json", JSON.stringify(allVideos), {
    encoding: "utf8",
    flag: "w",
  });
  res.status(201).json(newComment);
});

router.delete("/videos/:videoId/comments/:commentId", (req, res) => {
  const { videoId, commentId } = req.params;
  const chosenVideo = allVideos.find((video) => video.id === videoId);

  const filtered = chosenVideo.comments.filter(
    (comment) => comment.id !== commentId
  );

  chosenVideo.comments = filtered;

  fs.writeFileSync("data/videos.json", JSON.stringify(allVideos), {
    encoding: "utf8",
    flag: "w",
  });

  res.status(200).json(commentId);
});

module.exports = router;
