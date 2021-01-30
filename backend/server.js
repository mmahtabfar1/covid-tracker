const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res, next) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`server is up and running @ http://localhost:${PORT}`);
});
