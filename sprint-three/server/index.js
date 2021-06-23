const express = require("express");
const app = express();
const PORT = 8080;


app.route("/").get((_req, res) => {
  res.send('Got a GET request to "/"');
});

app.listen(PORT, () => {
  console.log(`Express is running on port ${PORT}`);
});
