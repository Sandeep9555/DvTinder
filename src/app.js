const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Hello from the server");
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server started");
});
