const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile("../public/index.html");
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.resolve("./public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.resolve("./public/stats.html"));
});

module.exports = router;
