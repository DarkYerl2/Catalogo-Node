const express = require("express");
const morgan = require("morgan")
const path = require("path");
const app = express();

// Settings
app.set("port", process.env.PORT || 5000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Midlewares
app.use(morgan('dev'));
// Routes

app.use(require("./routes"));

// Static Files
app.use(express.static( path.join(__dirname, "public")));

// Listening Server

app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
