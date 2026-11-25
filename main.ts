import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke: a real detail (the meeting about meetings)
// with the laugh landing on the final beat.
const joke =
  "My boss called a meeting about having too many meetings, and it ran forty minutes over.";

// Gate check (mirrors the competition gate): 1-199 chars, single line,
// not only whitespace. Fail loudly instead of writing an invalid entry.
const trimmed = joke.trim();
if (trimmed.length < 1 || trimmed.length > 199) {
  throw new Error(`Entry must be 1-199 characters, got ${trimmed.length}`);
}
if (trimmed.includes("\n")) {
  throw new Error("Entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", trimmed, "utf8");
console.log(`Wrote ${trimmed.length} characters to /output/entry.txt`);
