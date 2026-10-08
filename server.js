const http = require("http");
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "public");
const port = Number(process.env.PORT || 3000);
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

const server = http.createServer((request, response) => {
  const origin = `http://${request.headers.host || "localhost"}`;
  const url = new URL(request.url, origin);
  const cleanRoutes = { "/": "/index.html", "/find": "/find.html", "/contact": "/contact.html", "/activities": "/activities.html" };
  const safePath = cleanRoutes[url.pathname] || url.pathname;
  const requestedPath = path.resolve(publicDir, `.${safePath}`);

  if (!requestedPath.startsWith(publicDir)) {
    response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Forbidden");
    return;
  }

  fs.readFile(requestedPath, (error, file) => {
    if (error) {
      response.writeHead(error.code === "ENOENT" ? 404 : 500, { "Content-Type": "text/plain; charset=utf-8" });
      response.end(error.code === "ENOENT" ? "Not found" : "Server error");
      return;
    }

    const contentType = mimeTypes[path.extname(requestedPath)] || "application/octet-stream";
    response.writeHead(200, { "Content-Type": contentType, "Cache-Control": "no-store" });
    response.end(file);
  });
});

server.listen(port, "0.0.0.0", () => {
  console.log(`NoMo FOMO is listening on http://0.0.0.0:${port}`);
});
