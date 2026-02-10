const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Trading App – Unlimited Free Price Alerts (Sprint 1)");
});

app.listen(3000, () => {
  console.log("Web app running on port 3000");
});
