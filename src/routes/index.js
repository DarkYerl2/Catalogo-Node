const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "First Website" });
});

router.get("/juegos", (req, res) => {
  res.render("juegos", { title: "First Website" });
});

router.get("/consolas", (req, res) => {
  res.render("consolas", { title: "First Website" });
});

router.get("/camisetas", (req, res) => {
  res.render("camisetas", { title: "First Website" });
});

router.get("/figuras", (req, res) => {
  res.render("figuras", { title: "First Website" });
});

router.get("/joyeria", (req, res) => {
  res.render("joyeria", { title: "First Website" });
});



module.exports = router;
 