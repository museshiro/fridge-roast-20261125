import { mkdirSync, writeFileSync } from "node:fs";

const line = "My fridge camera gave my leftovers a one-star review: "
  + "'Tupperware is doing all the heavy lifting.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
