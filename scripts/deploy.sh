#!/usr/bin/env sh

   # 確保腳本拋出遇到的錯誤
   set -e

   # 切換到專案根目錄
   cd "$(dirname "$0")/.."

   # 生成静态文件
   npm run docs:build

   # 进入生成的文件夹
   cd .vitepress/dist

   git init
   git add -A
   git commit -m 'deploy'

   # 如果發佈到 https://<USERNAME>.github.io/<REPO>
   git push -f git@github.com:SnowAgar25/zhang-yusheng.github.io.git test/vitepress:gh-pages

   cd -