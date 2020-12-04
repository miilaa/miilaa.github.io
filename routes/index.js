const express = require("express");
const router = express.Router();

router.get("/stream", (req, res) => {
  res.render("../player.html")
});


router.get("/noticia", (req, res) => {
  res.render("../noticia.html")
});

module.exports = router;