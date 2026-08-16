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
  const response = await render("/zh");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>王才城｜具身智能算法<\/title>/i);
  assert.match(html, /VLA 策略的人在环强化学习后训练/);
  assert.match(html, /真机基础设施/);
  const about = html.match(/<section class="about-section"[\s\S]*?<\/section>/)?.[0] ?? "";
  assert.ok(about.indexOf("我目前在") < about.indexOf("我是"));
  assert.match(about, /我目前在[\s\S]*?美团 LongCat 基座大模型团队/);
  assert.match(about, /主要负责真实机器人 VLA 策略的人在环强化学习后训练/);
  assert.match(about, /本科毕业于[\s\S]*?西安电子科技大学/);
  assert.match(
    about,
    /美团 LongCat 基座大模型团队[\s\S]*?src="\/meituan-logo\.png"/,
  );
  assert.match(html, /美团 · LongCat 基座大模型团队/);
  assert.match(html, /杭州无问硅一科技有限公司/);
  assert.match(html, /src="\/siliconone-logo\.png"/);
  assert.match(html, /internship-logo-monochrome/);
  assert.match(html, /<h3><img[^>]*src="\/meituan-logo\.png"[^>]*>[\s\S]*?美团/);
  assert.match(html, /<h3><img[^>]*src="\/siliconone-logo\.png"[^>]*>[\s\S]*?杭州无问硅一/);
  assert.match(html, /代表性论文/);
  assert.match(html, /<strong>美国大学生数学建模竞赛（MCM）Finalist（Top 1%）<\/strong>/);
  assert.doesNotMatch(html, /<strong>2023 年度浙江省专业学位研究生优秀实践成果奖<\/strong>/);
  assert.doesNotMatch(html, /特等提名奖/);
  assert.match(html, /src="\/featured-paper\.jpg"/);
  assert.match(html, /Graphical abstract for Design for Manufacturing/);
  assert.doesNotMatch(html, /paper-image-placeholder/);
  assert.match(html, /href="\/"/);
  assert.match(html, /wcc_wy@163\.com/);
  assert.match(html, /Google Scholar 引用/);
  assert.match(html, /scholar-citation-badge/);
  assert.match(html, /href="https:\/\/github\.com\/CaiChengWang"/);
  assert.match(html, /scholar\.google\.com\/citations\?user=4pGYzJ8AAAAJ/);
  assert.match(html, /rel="canonical" href="http:\/\/localhost:3000\/zh\/"/);
  assert.match(html, /src="\/profile\.jpg"/);
  assert.match(html, /src="\/zju-logo\.png"/);
  assert.match(html, /src="\/xidian-logo\.png"/);
  assert.match(html, /src="\/meituan-logo\.png"/);
  const sidebar = html.match(/<aside class="profile-sidebar"[\s\S]*?<\/aside>/)?.[0] ?? "";
  assert.match(sidebar, /fa-language[\s\S]*?fa-briefcase[\s\S]*?寻找具身智能方向的工作机会/);
  assert.match(sidebar, /Google Scholar/);
  assert.doesNotMatch(sidebar, /浙江大学|160\+|181 5409 0862|tel:/);
  assert.match(html, /alt="王才城"/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview/);
});

test("renders the English recruitment homepage", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Caicheng Wang \| Embodied AI<\/title>/i);
  assert.match(html, /human-in-the-loop reinforcement learning post-training for VLA policies on real robots/);
  assert.match(html, /real-robot infrastructure that supports this work/);
  assert.match(html, /policy deployment and evaluation pipelines/);
  const about = html.match(/<section class="about-section"[\s\S]*?<\/section>/)?.[0] ?? "";
  assert.ok(about.indexOf("I am currently") < about.indexOf("I am a Ph.D. candidate"));
  assert.match(about, /I am currently an Embodied AI Research Intern on/);
  assert.match(about, /hold a bachelor&#x27;s degree from[\s\S]*?Xidian University/);
  assert.match(about, /9 SCI-indexed journal articles/);
  assert.match(
    about,
    /Meituan&#x27;s LongCat foundation-model team[\s\S]*?src="\/meituan-logo\.png"/,
  );
  assert.match(html, /Meituan · LongCat Foundation Model Team/);
  assert.match(html, /Simple Silicon Innovation/);
  assert.doesNotMatch(html, /Hangzhou WuWen SiliconOne Technology/);
  assert.match(html, /src="\/siliconone-logo\.png"/);
  assert.match(html, /<h3><img[^>]*src="\/meituan-logo\.png"[^>]*>[\s\S]*?Meituan/);
  assert.match(html, /Selected Publications/);
  assert.match(
    html,
    /<strong>Finalist, Mathematical Contest in Modeling \(MCM\) — Top 1%<\/strong>/,
  );
  assert.doesNotMatch(
    html,
    /<strong>Outstanding Practice Achievement for Professional-Degree Graduate Students/,
  );
  assert.match(html, /Outstanding Graduate of Shaanxi Province, China/);
  assert.doesNotMatch(html, /Outstanding Winner/);
  assert.match(html, /src="\/featured-paper\.jpg"/);
  assert.match(html, /Focusing on embodied AI, reinforcement learning post-training for VLA models/);
  assert.match(html, /Google Scholar citations/);
  assert.match(html, /scholar-citation-badge/);
  assert.match(html, /href="https:\/\/github\.com\/CaiChengWang"/);
  assert.match(html, /scholar\.google\.com\/citations\?user=4pGYzJ8AAAAJ/);
  assert.match(html, /rel="canonical" href="http:\/\/localhost:3000\/?"/);
  assert.match(html, /src="\/zju-logo\.png"/);
  assert.match(html, /src="\/xidian-logo\.png"/);
  assert.match(html, /src="\/meituan-logo\.png"/);
  const sidebar = html.match(/<aside class="profile-sidebar"[\s\S]*?<\/aside>/)?.[0] ?? "";
  assert.match(sidebar, /fa-language[\s\S]*?fa-briefcase[\s\S]*?Seeking opportunities in Embodied AI/);
  assert.match(sidebar, /Google Scholar/);
  assert.doesNotMatch(sidebar, /Zhejiang University|160\+|181 5409 0862|tel:/);
  assert.doesNotMatch(html, /Embodied AI researcher/);
  assert.match(html, /href="\/zh\/"/);
  assert.match(html, /Skip to main content/);
});

test("keeps the legacy English route available", async () => {
  const response = await render("/en");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Caicheng Wang \| Embodied AI<\/title>/i);
  assert.match(html, /rel="canonical" href="http:\/\/localhost:3000\/?"/);
  assert.match(html, /href="\/zh\/"/);
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
  assert.match(styles, /\.profile-sidebar\s*\{[\s\S]*?position:\s*sticky[\s\S]*?top:\s*6em/);
  assert.match(styles, /\.profile-links li\s*\{[\s\S]*?margin-bottom:\s*0/);
  assert.match(styles, /--profile-row-height:\s*2\.1em/);
  assert.match(styles, /\.profile-links li:not\(\.profile-description\)\s*\{[\s\S]*?height:\s*var\(--profile-row-height\)/);
  assert.match(styles, /\.profile-links a\s*\{[\s\S]*?height:\s*100%[\s\S]*?margin-bottom:\s*0/);
  assert.match(styles, /Font Awesome 5 Brands/);
  assert.match(styles, /\.scholar-citation-badge/);
  assert.match(homepage, /<ul className="nav-links">/);
});

test("ships search-engine discovery files", async () => {
  const [robots, sitemap, exportScript] = await Promise.all([
    readFile(new URL("public/robots.txt", root), "utf8"),
    readFile(new URL("public/sitemap.xml", root), "utf8"),
    readFile(new URL("scripts/export-github-pages.mjs", root), "utf8"),
  ]);

  assert.match(robots, /Sitemap: https:\/\/caichengwang\.github\.io\/sitemap\.xml/);
  assert.match(sitemap, /https:\/\/caichengwang\.github\.io\/zh\//);
  assert.doesNotMatch(sitemap, /https:\/\/caichengwang\.github\.io\/en\//);
  assert.match(exportScript, /pathname: "\/zh", output: "zh\/index\.html"/);
});
