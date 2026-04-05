import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

export async function getSymptomAdvice(symptoms: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: `You are a helpful medical assistant for Dr. Ramzan's Clinic. 
      A patient is describing symptoms: "${symptoms}".
      
      Provide a brief, professional, and empathetic response. 
      1. Acknowledge their concern.
      2. Suggest potential areas of concern (without definitive diagnosis).
      3. Strongly advise booking an appointment with Dr. Ramzan for a proper checkup.
      4. If symptoms sound like an emergency (e.g., sudden vision loss, severe pain), advise immediate ER visit.
      
      Keep the response under 150 words. Use bullet points for clarity.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please call the clinic directly or visit us for assistance.";
  }
}
