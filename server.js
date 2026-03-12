const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const resumeRoutes = require("./routes/resumeRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/resume", resumeRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});