import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";
import { config } from "https://deno.land/x/dotenv/mod.ts";

async function main() {
  const env = config();
  if (env["OPENAI_API_KEY"]) {
    Deno.env.set("OPENAI_API_KEY", env["OPENAI_API_KEY"]);
  }

  if (!Deno.env.get("OPENAI_API_KEY")) {
    console.error("Error: Missing OpenAI API key.");
    Deno.exit(1);
  }

  const spell = {
    name: "Fireball",
    damage: 50,
    castTime: "1 action",
  } as const;

  console.log(
    `You cast ${spell.name} dealing ${spell.damage} damage. It has a casting time of ${spell.castTime}.`,
  );

  while (true) {
    const userInput = prompt("You: ");
    if (userInput === "exit") return false;
    if (!userInput) continue;

    console.log("\nAssistant is thinking...");

    const result = await generateText({
      model: openai("gpt-4o-mini"),
      prompt: userInput, // Replaces messages array for simplicity
    });

    console.log("\nAssistant:", result.text, "\n");
  }
}

main().catch(console.error);
