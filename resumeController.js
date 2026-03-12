const axios = require("axios");

exports.uploadResume = async (req, res) => {
  const resumeText = req.body.text;

  try {

    const response = await axios.post(
      "http://localhost:8000/analyze",
      { text: resumeText }
    );

    res.json(response.data);

  } catch (error) {
    res.status(500).json({ error: "AI service error" });
  }
};