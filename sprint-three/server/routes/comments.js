const express = require("express");
const router = express.Router();
const allVideos = require("../data/videos.json");
const fs = require("fs");

router.get("/videos/:videoID/comments", (req, res) => {
  const { videoID } = req.params;
  let chosenVideoComments = allVideos.find((video) => video.id === videoID);
  res.status(200).json(chosenVideoComments.comments);
});

// router.get("/videos/:videoId/comments", (req, res) => {
//   const { videoId } = req.params;
//   // const { name, comment } = req.body
//   let found = videos.find((item) => item.id === videoId);
//   res.json(found.comments);
// });

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

// router.delete("/videos/:videoId/comments/:commentId", (req, res) => {
//   const { videoId, commentId } = req.params;
//   const selectedVideo = allVideos.find((video) => video.id === videoId);
//   const selectedComment = selectedVideo.comments.map((comment, index) => {
//     if (comment.id === commentId) {
//       selectedVideo.comments.splice(index, 1);
//     }
//   });
//   res.json(selectedVideo.comments);
// });

module.exports = router;
