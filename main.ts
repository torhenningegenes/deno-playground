import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";
import { config } from "https://deno.land/x/dotenv/mod.ts";

// TODO:
//  1. Play around some more with the different methods of responses
// 2. Set up a small db and push a conversation to that.

async function main() {
  const env = config();
  if (env["OPENAI_API_KEY"]) {
    Deno.env.set("OPENAI_API_KEY", env["OPENAI_API_KEY"]);
  }

  if (!Deno.env.get("OPENAI_API_KEY")) {
    console.error("Error: Missing OpenAI API key.");
    Deno.exit(1);
  }

  while (true) {
    const userInput = prompt("You: ");
    if (userInput === "exit") return false;
    if (!userInput) continue;

    console.log("\nAssistant is thinking...");

    const result = await generateText({
      model: openai("gpt-3.5-turbo"),
      prompt: userInput, // Replaces messages array for simplicity
    });

    //console.log('result', result.response)
    console.log("\nAssistant:", result.text, "\n");
  }
}

main().catch(console.error);
