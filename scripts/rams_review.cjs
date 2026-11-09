const https = require("https");
const fs = require("fs");
const path = require("path");

const filesToReview = process.argv.slice(2);

if (filesToReview.length === 0) {
  console.log("No files specified for Rams review.");
  process.exit(0);
}

const filesPayload = filesToReview.map((fileRelPath) => {
  const fullPath = path.resolve(process.cwd(), fileRelPath);
  const content = fs.existsSync(fullPath)
    ? fs.readFileSync(fullPath, "utf8")
    : "";
  return {
    path: fileRelPath.replace(/\\/g, "/"),
    content: content,
  };
});

const data = JSON.stringify({
  jsonrpc: "2.0",
  id: Date.now(),
  method: "tools/call",
  params: {
    name: "quick_review",
    arguments: {
      via: "rules",
      files: filesPayload,
    },
  },
});

const req = https.request(
  "https://worker.rams.ai/mcp",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/event-stream",
      Authorization:
        "Bearer rams_c0e22aed8de36eaf6b10b01bb56e885fa094751048d39f57",
    },
  },
  (res) => {
    let body = "";
    res.on("data", (chunk) => (body += chunk));
    res.on("end", () => {
      console.log("Rams Review Status:", res.statusCode);
      console.log("Response:", body);
    });
  },
);

req.on("error", (e) => {
  console.error("Rams Review Request Error:", e);
});

req.write(data);
req.end();
