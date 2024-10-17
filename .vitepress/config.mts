import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "紀念雨生",
  description: "A VitePress Site",
  base: "/zhang-yusheng.github.io/",
  markdown: {
    config: (md) => {
      md.use(footnote)
    }
  },
  themeConfig: {
    outline: [1, 5],
    // https://vitepress.dev/reference/default-theme-config
    nav: [

    ],

    sidebar: [
      {
        "text": "首页",
        "link": "/"
      },
      {
        "text": "专辑",
        "items": [
          {
            "text": "个人专辑",
            "items": [
              { "text": "口是心非", "link": "/albums/1997-10-16-ksxf/1997-10-16-ksxf.md" },
              { "text": "口是心非（抛物线版）", "link": "/albums/1997-xx-xx-ksxf-parabola/1997-xx-xx-ksxf-parabola.md" },
              { "text": "白色才情", "link": "/albums/1996-06-xx-bscq/1996-06-xx-bscq.md" },
              { "text": "还是朋友", "link": "/albums/1995-03-27-hspy/1995-03-27-hspy.md" },
              { "text": "卡拉 OK·台北·我", "link": "/albums/1994-08-xx-kloktbw/1994-08-xx-kloktbw.md" },
              { "text": "自由歌", "link": "/albums/1994-01-23-zyg/1994-01-23-zyg.md" },
              { "text": "大海", "link": "/albums/1992-12-xx-dh/1992-12-xx-dh.md" },
              { "text": "张雨生创作专辑（带我去月球）", "link": "/albums/1992-02-24-zysczzj/1992-02-24-zysczzj.md" },
              { "text": "想念我", "link": "/albums/1989-07-17-xnw/1989-07-17-xnw.md" },
              { "text": "天天想你", "link": "/albums/1988-11-xx-ttxn/1988-11-xx-ttxn.md" }
            ]
          },
          {
            "text": "纪念专辑",
            "items": [
              { "text": "乐界", "link": "/albums/2022-04-13-yj/2022-04-13-yj.md" },
              { "text": "如燕盘旋而来的思念", "link": "/albums/2008-02-27-rypxeldsn/2008-02-27-rypxeldsn.md" },
              { "text": "雨生欢禧城", "link": "/albums/2003-10-24-yshxc/2003-10-24-yshxc.md" }
            ]
          },
          {
            "text": "合作专辑",
            "items": [
              { "text": "我要为你做饭", "link": "/albums/1997-10-17-wywnzf/1997-10-17-wywnzf.md" },
              { "text": "姊妹", "link": "/albums/1996-12-13-zm/1996-12-13-zm.md" },
              { "text": "6 个朋友", "link": "/albums/1988-05-xx-lgpy/1988-05-xx-lgpy.md" }
            ]
          }
        ]
      },
      {
        "text": "文章",
        "items": [
          { "text": "《跟你说真的》序", "link": "/articles/1994-0x-xx-preface-of-tell-you-the-truth.md" }
        ]
      },
      {
        "text": "信札",
        "items": [
          {
            "text": "情书",
            "items": [
              { "text": "生日星座诗", "link": "/letters/199x-xx-xx-birthday-zodiac-poem/199x-xx-xx-birthday-zodiac-poem.md" }
            ]
          }
        ]
      },
      {
        "text": "访谈",
        "items": [
          { "text": "张雨生的独白 爱在淡水", "link": "/talks/1997-09-xx-monologue-love-for-tamsui/1997-09-xx-monologue-love-for-tamsui.md" }
        ]
      },
      {
        "text": "综艺",
        "items": [
          { "text": "199x 龙兄虎弟音乐教室", "link": "/shows/199x-xx-xx-lxhdyyjs.md" },
          { "text": "1997 龙兄虎弟音乐教室", "link": "/shows/1997-xx-xx-lxhdyyjs.md" }
        ]
      },
      {
        "text": "演出",
        "items": [
          { "text": "1992 奥林匹克风晚会", "link": "/performances/1992-xx-xx-alpkfwh.md" },
          { "text": "1992 奥运希望之光文艺晚会", "link": "/performances/1992-xx-xx-ayxwzgwywh.md" }
        ]
      },
      {
        "text": "更多",
        "items": [
          { "text": "关于我们", "link": "/more/about.md" },
          { "text": "联系我们", "link": "/more/contact.md" },
          { "text": "免责声明", "link": "/more/disclaimer.md" },
          { "text": "特别感谢", "link": "/more/thanks.md" },
          { "text": "友情链接", "link": "/more/links.md" },
          { "text": "未来计划", "link": "/more/plans.md" },
          { "text": "资料整理指导", "link": "/more/how-to-contribute/how-to-contribute.md" },
          { "text": "本地部署指南", "link": "/more/deploy/deploy.md" }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
