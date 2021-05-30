const { render } = require("ejs");
const express = require("express");
const app = express();
const path = require("path");
const router = require("./routes");



// Settings
app.set("port", 5000);
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile)
app.set("view engine", "ejs");

// Midlewares

// Routes

app.use(router);

// Static Files
app.use(express.static( path.join(__dirname, "public")));

// Listening Server

app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
