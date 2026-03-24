require("dotenv").config();
const express = require("express");
const path = require("path");
const tokens = require("./services/tokens");

// Initialize token mappings before anything else
tokens.init();

const app = express();
const PORT = process.env.PORT || 3000;

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/q", require("./routes/question"));
app.use("/a", require("./routes/answer"));
app.use("/p", require("./routes/print"));
app.use("/api", require("./routes/api"));
app.use("/shortcut", require("./routes/shortcut"));
app.use("/preview", require("./routes/preview"));
app.use(express.urlencoded({ extended: true }));
app.use("/admin", require("./routes/admin"));

// Root redirect to first card
app.get("/", (req, res) => {
  const firstToken = tokens.questionToken("1");
  res.redirect(`/q/${firstToken}`);
});

// 404
app.use((req, res) => {
  res.status(404).send("Stranica nije pronađena.");
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Nešto je pošlo po krivu.");
});

app.listen(PORT, () => {
  console.log(`QR Love Game running on http://localhost:${PORT}`);
  console.log(`BASE_URL: ${process.env.BASE_URL || "http://localhost:" + PORT}`);
  console.log(`Preview all cards: http://localhost:${PORT}/preview`);
});
