import { cp, mkdir, copyFile, writeFile, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
const distDir = path.join(root, "dist");
const portfolioFile = path.join(distDir, "portfolio.html");

if (!existsSync(publicDir)) {
  throw new Error("Missing public directory.");
}

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });
await cp(publicDir, distDir, { recursive: true });

if (!existsSync(portfolioFile)) {
  throw new Error("Missing public/portfolio.html.");
}

await copyFile(portfolioFile, path.join(distDir, "index.html"));
await mkdir(path.join(distDir, "portfolio"), { recursive: true });
await copyFile(portfolioFile, path.join(distDir, "portfolio", "index.html"));

await writeFile(
  path.join(distDir, "_redirects"),
  [
    "/portfolio /portfolio.html 200",
    "/portfolio/ /portfolio.html 200",
    "/* /index.html 200",
    "",
  ].join("\n"),
  "utf8",
);

console.log("Built static portfolio to dist/");
