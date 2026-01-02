import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const client = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

export async function explainCode(prompt) {
    const response = await client.chat.completions.create({
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.2,
    });

    return response.choices[0].message.content;
}
