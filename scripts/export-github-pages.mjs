import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const outputDir = new URL("../github-pages/", import.meta.url);
const clientDir = new URL("../dist/client/", import.meta.url);
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.github.io",
);
const routes = [
  { pathname: "/", output: "index.html" },
  { pathname: "/en", output: "en/index.html" },
];

const { default: worker } = await import(workerUrl.href);

async function renderRoute(pathname) {
  const response = await worker.fetch(
    new Request(new URL(pathname, siteUrl), {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  if (!response.ok) {
    throw new Error(`${pathname} render failed with HTTP ${response.status}`);
  }

  return (await response.text())
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*>/gi, "")
    .replaceAll("http://localhost:3000", siteUrl.origin);
}

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(clientDir, outputDir, { recursive: true });

for (const route of routes) {
  const target = new URL(route.output, outputDir);
  await mkdir(new URL("./", target), { recursive: true });
  await writeFile(target, await renderRoute(route.pathname), "utf8");
}

await writeFile(new URL(".nojekyll", outputDir), "", "utf8");

console.log(`GitHub Pages export ready: ${outputDir.pathname}`);
