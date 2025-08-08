
// backend/api/chat.js
const express = require('express')
const axios = require('axios')
const botRouter = express.Router();

botRouter.post("/chatBot", async (req, res) => {
  const { messages } = req.body;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo", 
        messages,
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data.choices[0].message);
  } catch (error) {
    console.error("OpenAI API error:", error.message);
    res.status(500).json({ error: "Failed to get response from AI" });
  }
});

module.exports = botRouter;
