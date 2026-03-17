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
    const { interest } = req.body;

    const prompt = `
    Suggest EXACTLY 5 career ideas related to ${interest}.

    Rules:
    - Only return 5
    - Each must be simple beginner-friendly careers
    - Return ONLY a JSON array
    - No explanation

    Example:
    ["Freelance Logo Designer", "Social Media Manager"]
    `;

    const response = await groq.chat.completions.create({
      model: "llama3-70b-8192",
      messages: [{ role: "user", content: prompt }],
    });

    let text = response.choices[0].message.content;

    // fallback if AI breaks format
    let recommendations;

    try {
      recommendations = JSON.parse(text);
    } catch {
      recommendations = [
        `${interest} Freelancer`,
        `${interest} Consultant`,
        `${interest} Content Creator`,
        `${interest} Online Coach`,
        `${interest} Specialist`
      ];
    }

    res.json({ recommendations });

  } catch (error) {
    console.error(error);

    // emergency fallback
    res.json({
      recommendations: [
        "Freelancer",
        "Consultant",
        "Online Creator",
        "Coach",
        "Specialist"
      ]
    });
  }
});
app.listen(PORT, () => {
  console.log("Server running on port 5000");
});