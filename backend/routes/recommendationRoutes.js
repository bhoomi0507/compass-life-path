const express = require("express");
const router = express.Router();

const { generateRecommendations } = require("../services/recommendationService");

router.post("/recommendations", (req, res) => {
  try {
    const userInput = req.body;

    const recommendations = generateRecommendations(userInput);

    res.json(recommendations);
  } catch (error) {
    console.error("Recommendation error:", error);
    res.status(500).json({ error: "Failed to generate recommendations" });
  }
});

module.exports = router;