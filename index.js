const express = require("express");
const app = express();

// enable CORS (for testing with FCC)
const cors = require("cors");
app.use(cors());

// serve the homepage (اختياري)
app.get("/", (req, res) => {
  res.send("Request Header Parser Microservice");
});

// API endpoint
app.get("/api/whoami", (req, res) => {
  const ip = req.ip;
  const language = req.headers["accept-language"];
  const software = req.headers["user-agent"];

  res.json({
    ipaddress: ip,
    language: language,
    software: software,
  });
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
