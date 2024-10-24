#!/bin/bash

# 使用 --no-install-recommends 減少安裝包大小
sudo apt-get update
sudo apt-get install --no-install-recommends -y calibre fonts-arphic-ukai

# make dir to place books
bookdir="./ebooks"
mkdir -p ${bookdir}

# 設置書籍名稱變數
bookname="yusheng-zhang-archive"

honkit epub ./ ${bookdir}/${bookname}.epub
honkit pdf ./ ${bookdir}/${bookname}.pdf
honkit mobi ./ ${bookdir}/${bookname}.mobi