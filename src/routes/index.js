const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.html", { title: "First Website" });
});

router.get("/juegos", (req, res) => {
  res.render("juegos.html", { title: "First Website" });
});

router.get("/consolas", (req, res) => {
  res.render("consolas.html", { title: "First Website" });
});

router.get("/camisetas", (req, res) => {
  res.render("camisetas.html", { title: "First Website" });
});

router.get("/figuras", (req, res) => {
  res.render("figuras.html", { title: "First Website" });
});

router.get("/joyeria", (req, res) => {
  res.render("joyeria.html", { title: "First Website" });
});



module.exports = router;
 