const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
res.render("index")
});

router.get("/noticia", (req, res) => {
  res.render("noticia")
});

module.exports = router;