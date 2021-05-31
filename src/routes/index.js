const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Catalogo" });
});

router.get("/juegos", (req, res) => {
  res.render("juegos", { title: "Catalogo" });
});

router.get("/consolas", (req, res) => {
  res.render("consolas", { title: "Catalogo" });
});

router.get("/camisetas", (req, res) => {
  res.render("camisetas", { title: "Catalogo" });
});

router.get("/figuras", (req, res) => {
  res.render("figuras", { title: "Catalogo" });
});

router.get("/joyeria", (req, res) => {
  res.render("joyeria", { title: "Catalogo" });
});



module.exports = router;
 