import http from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const siteDir = existsSync(path.join(root, "dist", "index.html"))
  ? path.join(root, "dist")
  : path.join(root, "public");
const port = Number(process.env.PORT || 4173);

const mime = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"],
  [".mp4", "video/mp4"],
]);

function resolveFile(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]);
  const routePath =
    cleanPath === "/" || cleanPath === "/portfolio"
      ? "/portfolio.html"
      : cleanPath;
  const filePath = path.normalize(path.join(siteDir, routePath));

  if (!filePath.startsWith(siteDir)) return null;
  if (existsSync(filePath) && statSync(filePath).isFile()) return filePath;
  return path.join(siteDir, "portfolio.html");
}

const server = http.createServer((request, response) => {
  const filePath = resolveFile(request.url || "/");
  if (!filePath || !existsSync(filePath)) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "content-type": mime.get(path.extname(filePath).toLowerCase()) || "application/octet-stream",
  });
  createReadStream(filePath).pipe(response);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Portfolio running at http://127.0.0.1:${port}`);
});
