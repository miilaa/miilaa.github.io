const express = require("express");
const router = express.Router();



router.get("/noticia", (req, res) => {
  res.render("../noticia.html")
});

module.exports = router;