export function buildPrompt(code, language) {
    return `
  You are a senior software engineer.
  
  Explain the following ${language} code in simple English.
  Rules:
  - Use 2–4 sentences only
  - Do NOT guess behavior
  - If something is unclear, say so
  - Mention main function and logic
  
  Code:
  ${code}
  `;
  }
  