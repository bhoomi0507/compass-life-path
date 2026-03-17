// Recommendation service maps interests and skills to career suggestions

const careerDatabase = [
  {
    title: "Software Engineer",
    description: "Build applications and systems",
    salaryRange: "$80k-$150k",
    interests: ["technology", "problem solving"],
    skills: ["math", "logic"],
    lifestyle: "remote",
  },
  {
    title: "Data Scientist",
    description: "Analyze data and build predictive models",
    salaryRange: "$90k-$160k",
    interests: ["technology", "analysis"],
    skills: ["math", "statistics"],
    lifestyle: "remote",
  },
  {
    title: "Mechanical Engineer",
    description: "Design mechanical systems",
    salaryRange: "$70k-$120k",
    interests: ["design", "machines"],
    skills: ["physics", "math"],
    lifestyle: "onsite",
  },
];

// Main recommendation function
function generateRecommendations(userInput) {
  const { interests = [], skills = [], lifestyle } = userInput;

  const scoredCareers = careerDatabase.map((career) => {

    let score = 0;
    let reasons = [];

    interests.forEach((interest) => {
      if (career.interests.includes(interest)) {
        score += 2;
        reasons.push("Matches your interest in " + interest);
      }
    });

    skills.forEach((skill) => {
      if (career.skills.includes(skill)) {
        score += 3;
        reasons.push("Uses your " + skill + " skills");
      }
    });

    if (career.lifestyle === lifestyle) {
      score += 2;
      reasons.push("Supports your preferred lifestyle");
    }

    return { ...career, score, reasons };
  });

  scoredCareers.sort((a, b) => b.score - a.score);

  return scoredCareers.slice(0, 3);
}

module.exports = { generateRecommendations };