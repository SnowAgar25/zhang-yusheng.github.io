---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "紀念雨生"
  text: "A VitePress Site"
  tagline: My great project tagline
  actions:
    - theme: brand
      text: 资料仓库
      link: https://github.com/zhang-yusheng/zhang-yusheng.github.io
    - theme: alt
      text: 下载资料
      link: https://github.com/zhang-yusheng/zhang-yusheng.github.io/archive/refs/heads/main.zip
    - theme: alt
      text: 下载 EPUB
      link: https://zhang-yusheng.github.io/ebooks/yusheng-zhang-archive.epub
    - theme: alt
      text: 下载 PDF
      link: https://zhang-yusheng.github.io/ebooks/yusheng-zhang-archive.pdf
    - theme: alt
      text: 下载 MOBI
      link: https://zhang-yusheng.github.io/ebooks/yusheng-zhang-archive.mobi

features:
  - title: 想要提交新的资料？
    details: 参考<b>资料整理指导</b>！
    link: /more/how-to-contribute/how-to-contribute.md
  - title: 想要在本地部署网站？
    details: 参考<b>本地部署指南</b>！
    link: /more/deploy/deploy.md

---

<script setup>
import { useData } from 'vitepress'

const additionalLinks = [
  { text: '未来计划', link: '/more/plans' },
  { text: '特别感谢', link: '/more/thanks' },
  { text: '友情链接', link: '/more/links' },
  { text: '免责声明', link: '/more/disclaimer' },
  { text: '关于我们', link: '/more/about' },
  { text: '联系我们', link: '/more/contact' }
]
</script>

<div class="vp-doc">

## 更多信息

<div class="custom-layout">
  <div v-for="link in additionalLinks" :key="link.link" class="custom-feature">
    <h3>
      <a :href="link.link">{{ link.text }}</a>
    </h3>
  </div>
</div>

</div>

<style>
.custom-layout {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -8px;
}

.custom-feature {
  flex: 1 1 auto;
  padding: 8px;
  margin: 8px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  transition: background-color 0.3s;
  min-width: 100px;
}

.custom-feature:hover {
  background-color: var(--vp-c-bg-mute);
}

.custom-feature h3 {
  margin: 0;
  font-size: 16px;
  text-align: center;
}

.custom-feature a {
  display: block;
  padding: 12px;
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.custom-feature a:hover {
  color: var(--vp-c-brand);
}

@media (max-width: 768px) {
  .custom-feature {
    flex-basis: calc(50% - 16px);
  }
}

@media (max-width: 480px) {
  .custom-feature {
    flex-basis: 100%;
  }
}
</style>