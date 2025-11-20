import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || process.env.GEMINI_API_KEY || '';

export const generateStorePreview = async (businessDescription: string) => {
  if (!API_KEY) {
    console.warn("API Key not found. Returning mock data.");
    // Fallback for demo purposes if key is missing
    return {
      storeName: "Demo Store",
      tagline: "Quality goods for everyone",
      suggestedApps: ["ShopPe", "PayPe"],
      strategy: "Focus on local SEO and quick delivery."
    };
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-exp',
      contents: `Create a rapid onboarding plan for a new business on the Setu.plus platform.
      Business Description: "${businessDescription}".
      
      Setu.plus Apps available:
      - Retail: FoodPe, KiranaPe, ShopPe
      - Services: RepairPe, SnapPe
      - Mobility: RidePe, TicketPe
      - Health/Edu: DocPe, LearnPe
      
      Return a JSON object with:
      - storeName: A catchy creative name.
      - tagline: Short catchy slogan.
      - suggestedApps: Array of strings (which Setu apps they should enable).
      - strategy: One sentence on how to grow using Setu.plus.
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            storeName: { type: Type.STRING },
            tagline: { type: Type.STRING },
            suggestedApps: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            strategy: { type: Type.STRING }
          },
          required: ["storeName", "tagline", "suggestedApps", "strategy"]
        }
      }
    });
    
    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text);

  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};