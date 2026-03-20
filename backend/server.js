 require("dotenv").config();
 const axios = require("axios");
const Groq = require("groq-sdk");
const groq = new Groq({
  apiKey: "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"
});

 console.log("SERVER FILE LOADED");
  const { Pool } = require("pg");
  const cors = require("cors");
  const express = require("express");
  const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "careerrecommender",
  password: "postgres",
  port: 5432,
});
  const app = express();
  app.use(cors());
  app.use(express.json());
  const PORT = 5000;

  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("Server is running");
  });

app.get("/api/recommendations", async (req, res) => {
  try {
    const interest = req.query.interest;

    let query = "SELECT * FROM jobs";
    let values = [];

    if (interest) {
      query = "SELECT * FROM jobs WHERE interest = $1";
      values = [interest];
    }

    const result = await pool.query(query, values);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
});
app.post("/recommendations", async (req, res) => {
  try {
    const { name, age, skills, interests, experience, workPreference, journey } = req.body;

    // Build dynamic prompt from user profile
    const skillsList = Array.isArray(skills) ? skills.join(", ") : (skills || "not specified");
    const interestsList = Array.isArray(interests) ? interests.join(", ") : (interests || "not specified");
    const journeyText = Array.isArray(journey) && journey.length > 0
      ? journey.map(j => `${j.type}: ${j.title} (${j.duration})`).join("\n")
      : "No prior career journey";

    const prompt = `You are a career advisor AI.

Based on the user's profile below, suggest 3 highly personalized career paths.

User Profile:
- Name: ${name || "User"}
- Age: ${age || "not specified"}
- Skills: ${skillsList}
- Interests: ${interestsList}
- Experience Level: ${experience || "beginner"}
- Work Preference: ${workPreference || "flexible"}
- Career Journey: ${journeyText}

Instructions:
- Suggest SPECIFIC job roles (not generic fields)
- Explain WHY each role fits the user
- Suggest next steps (skills to learn, actions)
- Avoid generic answers
- Keep practical and realistic

Return ONLY valid JSON in this exact format:
{
  "recommendations": [
    {
      "title": "Job Title",
      "reason": "Why this fits the user",
      "nextSteps": "What to do next"
    }
  ]
}`;

    const response = await groq.chat.completions.create({
      model: "llama3-70b-8192",
      messages: [{ role: "user", content: prompt }],
    });

    let text = response.choices[0].message.content;

    try {
      // Try to extract JSON from the response
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        res.json(parsed);
      } else {
        throw new Error("No JSON found");
      }
    } catch {
      // Fallback recommendations
      res.json({
        recommendations: [
          { title: `${interestsList.split(",")[0] || "General"} Freelancer`, reason: "Matches your interests and allows flexible work.", nextSteps: "Build a portfolio and sign up on freelance platforms." },
          { title: `${skillsList.split(",")[0] || "General"} Consultant`, reason: "Leverages your existing skills for advisory roles.", nextSteps: "Network with professionals and create case studies." },
          { title: "Online Content Creator", reason: "Great for flexible schedules and creative expression.", nextSteps: "Start a blog or YouTube channel in your interest area." }
        ]
      });
    }

  } catch (error) {
    console.error(error);

    res.json({
      recommendations: [
        { title: "Freelancer", reason: "Flexible career path for beginners.", nextSteps: "Explore freelance platforms." },
        { title: "Consultant", reason: "Use your skills to advise others.", nextSteps: "Build expertise in your interest area." },
        { title: "Online Creator", reason: "Share knowledge and build an audience.", nextSteps: "Start creating content online." }
      ]
    });
  }
});
app.listen(PORT, () => {
  console.log("Server running on port 5000");
});