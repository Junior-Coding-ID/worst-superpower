import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Worst Superpower — one line, exactly 108 characters, ASCII, single line.
// The power: summoning one damp sock from a dryer three towns away.
// Genuinely useless, funny to picture, unexpected, concrete detail.
// Fully deterministic: no randomness, no time, no network, no input.
const ANSWER =
  "I can summon a single sock. Not a pair. Just one sock, already slightly damp, from a dryer three towns away.";

function fail(message: string): never {
  throw new Error(`worst-superpower: ${message}`);
}

// Gate: the entry must be exactly 108 chars, 1-140, one line, ASCII only,
// no leading/trailing whitespace, not whitespace-only.
function checkAnswer(text: string): void {
  if (text.length !== 108) fail(`length must be exactly 108, got ${text.length}`);
  if (text.length < 1 || text.length > 140) fail("length must be 1-140");
  if (text.includes("\n") || text.includes("\r")) fail("must be a single line");
  if (/[^\x00-\x7F]/.test(text)) fail("must be ASCII only");
  if (text !== text.trim()) fail("no leading/trailing whitespace allowed");
  if (text.trim().length === 0) fail("must not be whitespace-only");
}

// Write the entry byte-exact (no trailing newline), then read it back and
// compare byte-for-byte; throw if anything differs.
function main(): void {
  checkAnswer(ANSWER);
  const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ANSWER, "utf8");
  const back = readFileSync(outPath, "utf8");
  if (back !== ANSWER) fail("verify-after-write mismatch");
  if (Buffer.byteLength(back, "utf8") !== 108) fail("byte length must be 108");
}

main();
