import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateCreativeResponse = async (userPrompt: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure process.env.API_KEY.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: "You are the 'Virtual Creative Director' for Epic Creative Studio. Your tone is bold, minimalist, professional, and slightly avant-garde. You help users with branding ideas, taglines, and design feedback. Keep responses concise and punchy.",
      }
    });

    return response.text || "I'm contemplating the void. Try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our creative circuits are overloaded. Please try again later.";
  }
};