import OpenAI from "openai"
import dotenv from "dotenv"

dotenv.config();

const client = new OpenAI({
    apiKey : process.env.OPEN_AI_KEY,
});

export async function explainCode(prompt){
    const response = await client.chat.completions.create({
        model: "gpt-5-nano",
        messages : [{role:"user", content: prompt}],
        temperature: 0.2,
    });

    return response.choices[0].message.content;

}

