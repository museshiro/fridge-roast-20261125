import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of a smart fridge's craft-ice maker (dry wit):
// 48 hours of artisanal labor, wasted on tap water.
// 84 characters, inside the competition's 1-200 gate.
const line =
  "My fridge spent 48 hours crafting one perfect ice sphere. I dropped it in tap water.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
