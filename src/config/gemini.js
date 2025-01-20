
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai"
  
  const apiKey = ""; // Replace YOUR_API_KEY with the actual API key
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        // Optionally, you can add message history here if needed
      ],
    });
  
    const result = await chatSession.sendMessage(prompt); // Replace with your input
    const response = result.response;
    console.log(response.text());
    return response.text();
  }
  
  export default run;
  
