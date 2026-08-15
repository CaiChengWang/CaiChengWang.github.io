import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(new URL(pathname, "https://example.github.io"), {
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
}

test("renders the Chinese recruitment homepage", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>王才城｜具身智能算法<\/title>/i);
  assert.match(html, /数采基础设施搭建与数据处理/);
  assert.match(html, /美团 · LongCat 基座大模型团队/);
  assert.match(html, /杭州无问硅一科技有限公司/);
  assert.match(html, /代表性论文/);
  assert.match(html, /href="\/en\/"/);
  assert.match(html, /wcc_wy@163\.com/);
  assert.match(html, /Google 学术 · 引用 160\+/);
  assert.match(html, /scholar\.google\.com\/citations\?user=4pGYzJ8AAAAJ/);
  assert.match(html, /rel="canonical" href="http:\/\/localhost:3000\/?"/);
  assert.match(html, /src="\/profile\.jpg"/);
  assert.match(html, /src="\/zju-logo\.png"/);
  assert.match(html, /alt="王才城"/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview/);
});

test("renders the English recruitment homepage", async () => {
  const response = await render("/en");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Caicheng Wang \| Embodied AI<\/title>/i);
  assert.match(html, /complete real-robot learning loop/);
  assert.match(html, /Meituan · LongCat Foundation Model Team/);
  assert.match(html, /Selected Publications/);
  assert.match(html, /Focusing on embodied AI, reinforcement-learning post-training for VLA models/);
  assert.match(html, /Google Scholar · 160\+ citations/);
  assert.match(html, /scholar\.google\.com\/citations\?user=4pGYzJ8AAAAJ/);
  assert.match(html, /rel="canonical" href="http:\/\/localhost:3000\/en\/"/);
  assert.match(html, /src="\/zju-logo\.png"/);
  assert.doesNotMatch(html, /Embodied AI researcher/);
  assert.match(html, /href="\/"/);
  assert.match(html, /Skip to main content/);
});

test("removes disposable starter assets", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/layout.tsx", root), "utf8"),
    readFile(new URL("package.json", root), "utf8"),
  ]);

  assert.doesNotMatch(page, /_sites-preview|SkeletonPreview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("app/_sites-preview", root)));
});

test("keeps the AcadHomepage typography and grid contract", async () => {
  const [styles, homepage] = await Promise.all([
    readFile(new URL("app/globals.css", root), "utf8"),
    readFile(new URL("app/components/AcademicHomepage.tsx", root), "utf8"),
  ]);

  assert.match(styles, /font-size:\s*15px/);
  assert.match(styles, /font-family:\s*"Trebuchet MS", Helvetica/);
  assert.match(styles, /max-width:\s*925px/);
  assert.match(styles, /2\.25fr[\s\S]*0\.25fr[\s\S]*0\.625fr[\s\S]*11\.625fr/);
  assert.match(styles, /@media \(min-width:\s*1280px\)/);
  assert.match(styles, /\.profile-links li\s*\{[\s\S]*?margin-bottom:\s*5px/);
  assert.match(homepage, /<ul className="nav-links">/);
});

test("ships search-engine discovery files", async () => {
  const [robots, sitemap] = await Promise.all([
    readFile(new URL("public/robots.txt", root), "utf8"),
    readFile(new URL("public/sitemap.xml", root), "utf8"),
  ]);

  assert.match(robots, /Sitemap: https:\/\/caichengwang\.github\.io\/sitemap\.xml/);
  assert.match(sitemap, /https:\/\/caichengwang\.github\.io\/en\//);
});
