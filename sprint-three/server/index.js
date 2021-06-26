const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

// ROUTES
const videosRoutes = require("./routes/videos");
const commentsRoutes = require("./routes/comments");

app.use("/", videosRoutes);
app.use("/", commentsRoutes);

app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});
