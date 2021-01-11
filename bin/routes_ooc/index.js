const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/noticia001", (req, res) => {
  res.render("https://miilaa.github.io/bin/views_global/noticia001.html");
});

router.get("/noticia002", (req, res) => {
  res.render("https://miilaa.github.io/bin/views_global/noticia002.html");
});

router.get("/noticia003", (req, res) => {
  res.render("https://miilaa.github.io/bin/views_global/noticia003.html");
});

router.get("/radio", (req, res) => {
  res.render("https://miilaa.github.io/bin/views_global/radio.html");
});

module.exports = router;
