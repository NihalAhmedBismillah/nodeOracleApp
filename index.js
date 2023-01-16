const config = require("./config.json");
const PORT = config.portNo || 8080;
const http = require("http");
const express = require("express");
const app = express();
const messageController = require("./src/controllers/getMessage.Controller");
app.listen(PORT, () => {
  console.log("Server running, Express is listening...");
});

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(
    `Server running on port no :  ${PORT} system time:${new Date().getTime()}`
  );
  res.end();
});

app.get("/data", async (req, res) => {
  console.log("Request received");
  try {
    const response = await messageController.getMessageController();
    res.end(JSON.stringify(response));
  } catch (error) {
    res.end(JSON.stringify(error));
  }
});
