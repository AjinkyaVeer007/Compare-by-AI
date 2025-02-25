import { GoogleGenerativeAI } from "@google/generative-ai";
import { smartphoneSchema } from "../models/smartphoneSchema";
import { carSchema } from "../models/carSchema";
import { bikeSchema } from "../models/bikeSchema";

const genAi = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

export const smartphoneModel = genAi.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    responseMimeType: "application/json",
    responseSchema: smartphoneSchema,
  },
});

export const carModel = genAi.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    responseMimeType: "application/json",
    responseSchema: carSchema,
  },
});

export const bikeModel = genAi.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    responseMimeType: "application/json",
    responseSchema: bikeSchema,
  },
});
