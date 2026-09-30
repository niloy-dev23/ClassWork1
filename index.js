const express = require("express");
require("dotenv").config();
const route = require("./routes/main");
const app = express();
app.use(express.json());
const port = process.env.PORT || 8000;
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
const dbConfig = require("./config/dbConfig");
app.use(route);
dbConfig();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
