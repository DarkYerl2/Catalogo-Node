const { render } = require("ejs");
const express = require("express");
const app = express();
const path = require("path");
const router = require("./routes");
const PORT = process.env.PORT || 5000;


// Settings
app.set("port", PORT);
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
