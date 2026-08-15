# 王才城个人主页

面向具身智能算法岗位秋招的中英文个人主页，内容以 `简历/0801简历两面.rtf` 为主要事实来源。中文位于 `/`，英文位于 `/en/`。字体、图标与页面栅格参考 [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io)，第三方许可见 `THIRD_PARTY_NOTICES.md`。

## 本地预览

```bash
npm install
npm run dev
```

## 构建检查

```bash
npm run build
```

## 部署到 GitHub Pages

1. 在 GitHub 新建名为 `<你的 GitHub 用户名>.github.io` 的空仓库。
2. 将本目录作为独立仓库推送到该仓库的 `main` 分支。
3. 在仓库 `Settings → Pages → Build and deployment` 中选择 `GitHub Actions`。
4. 推送后，工作流会自动构建并发布主页。

工作流位于 `.github/workflows/deploy-pages.yml`，静态导出结果位于 `github-pages/`。

## 内容维护

- 中英文共享内容：`app/homepage-data.ts`
- 页面组件：`app/components/AcademicHomepage.tsx`
- 样式：`app/globals.css`
- 分享预览图：`public/og.png`
- 页面元信息：`app/layout.tsx`
