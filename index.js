import readlineSync from "readline-sync";
import { explainCode } from "./openai.js";
import { buildPrompt } from "./promptBuilder.js";
import { saveExplanation } from "./storage.js";

async function run(){
    console.log("AI- powered code explainer");

    const language = readlineSync.question("Enter language(javascript/python):");

    console.log("paste your code");
    const code = readlineSync.question("");

    const prompt = buildPrompt(code,language);
    const explanation = await explainCode(prompt);

    console.log("\n Explanation:\n", explanation);

    saveExplanation(code,explanation);
    console.log("\Saved successfully");
}

run();
