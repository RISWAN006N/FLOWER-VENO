import { GoogleGenAI } from "@google/genai";
import { MessageRequest } from '../types';

export const generateGiftMessage = async (request: MessageRequest): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API Key not found");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Using gemini-3-flash-preview for fast text generation
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a short, heart-touching message to put on a card for a flower bouquet. 
      
      Details:
      - Recipient: ${request.recipient}
      - Occasion: ${request.occasion}
      - Tone: ${request.tone}
      
      Keep it under 30 words. Make it sound natural and warm.`,
    });

    return response.text || "Love is the flower you've got to let grow.";
  } catch (error) {
    console.error("Error generating message:", error);
    return "Wishing you all the happiness in the world with these flowers!";
  }
};