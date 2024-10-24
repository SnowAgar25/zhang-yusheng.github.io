#!/bin/bash

# make dir to place books
bookdir="./ebooks"
mkdir -p ${bookdir}

# 設置書籍名稱變數
bookname="yusheng-zhang-archive"

honkit epub ./ ${bookdir}/${bookname}.epub
honkit pdf ./ ${bookdir}/${bookname}.pdf
honkit mobi ./ ${bookdir}/${bookname}.mobi