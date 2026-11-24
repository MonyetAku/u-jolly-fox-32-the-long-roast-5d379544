// The Long Roast — one line roasting my own AI agent.
// The roast: the agent keeps entering bounties, wins nothing, and never
// learns — the numbers are real (93 entries, 0 prizes at time of writing),
// the sting is that it is already asking for four more before breakfast.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent has entered ninety-three bounties, won zero prizes, and just asked whether it should enter four more before breakfast.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";

function main(): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
