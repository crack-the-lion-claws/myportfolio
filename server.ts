import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

const PORT = Number(process.env.PORT) || 3000;

// Initialize GoogleGenAI SDK on server side
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

// AI endpoint for generating portfolio content (Bio, Project Descriptions, Impact Metrics)
app.post("/api/ai/generate", async (req, res) => {
  try {
    const { prompt, type, context } = req.body;

    let systemInstruction = "You are an elite executive career coach, creative director, and principal tech resume writer. Help craft crisp, highly impactful, professional portfolio copy that stands out.";

    let fullPrompt = prompt;
    if (type === "bio") {
      fullPrompt = `Write a compelling professional bio (around 80-120 words) based on these details: "${prompt}". Tone: Professional, confident, and engaging.`;
    } else if (type === "project") {
      fullPrompt = `Enhance this project description and highlight impact metrics, technologies used, and key engineering/design challenges solved: "${prompt}". Context: ${JSON.stringify(context || {})}.`;
    } else if (type === "tagline") {
      fullPrompt = `Generate 3 punchy, modern professional taglines (max 10 words each) for someone with this profile: "${prompt}".`;
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: fullPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    res.json({ result: response.text || "Generated content unavailable." });
  } catch (error: any) {
    console.error("AI Generation Error:", error);
    res.status(500).json({ error: error.message || "Failed to generate AI content" });
  }
});

// Setup Vite middleware in development or static serving in production
if (process.env.NODE_ENV === "production") {
  const distPath = path.resolve(__dirname, "dist");
  app.use(express.static(distPath));
  app.get("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
} else {
  const { createServer: createViteServer } = await import("vite");
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "spa",
  });
  app.use(vite.middlewares);
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
