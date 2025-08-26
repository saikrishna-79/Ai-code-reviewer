// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
app.use(express.json());

// ✅ Allow both local and deployed frontend
const allowedOrigins = [
  'http://localhost:5173',               // Local Vite frontend
  'https://your-frontend.vercel.app'     // Replace with your actual Vercel frontend URL
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// 🔑 Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const PORT = process.env.PORT || 3001;

// ✅ Health check route
app.get('/', (req, res) => {
  res.send('✅ AI Code Reviewer API is running');
});

// 📌 Route for AI review
app.post('/ai/get-review', async (req, res) => {
  try {
    const { code } = req.body;
    if (!code) {
      return res.status(400).json({ error: 'Code is required.' });
    }

    const prompt = `
You are an expert code reviewer. 
Analyze the provided code and give feedback in Markdown format, 
focusing on quality, best practices, and performance.

Here is the code to review:
\`\`\`javascript
${code}
\`\`\`
    `;

    const result = await model.generateContent(prompt);
    const reviewText = result.response.text();

    res.json({ review: reviewText });
  } catch (error) {
    console.error('Error fetching AI review:', error);
    res.status(500).json({ error: 'Failed to fetch review from AI.' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
