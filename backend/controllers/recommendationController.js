// Recommendation controller for career suggestions
// Handles POST /api/recommendations and calls recommendationService

const recommendationService = require('../services/recommendationService');

exports.getRecommendations = (req, res) => {
  const { interests, skills, lifestyle } = req.body;

  // Validate input
  if (!Array.isArray(interests) || !Array.isArray(skills) || typeof lifestyle !== 'string') {
    return res.status(400).json({ error: 'Invalid input format' });
  }

  // Get career recommendations
  const careers = recommendationService.getCareerRecommendations(interests, skills, lifestyle);
  res.json({ careers });
};
