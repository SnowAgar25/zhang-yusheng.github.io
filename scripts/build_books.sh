#!/bin/bash

# install ebook-convert and calibre
sudo apt update
sudo apt-get install -y calibre
sudo apt-get install -y fonts-arphic-ukai

# make dir to place books
bookdir="./ebooks"
mkdir -p ${bookdir}

# 設置書籍名稱變量
bookname="yusheng-zhang-archive"

# 並行執行 honkit 命令
honkit epub ./ ${bookdir}/${bookname}.epub &
epub_pid=$!

honkit pdf ./ ${bookdir}/${bookname}.pdf &
pdf_pid=$!

honkit mobi ./ ${bookdir}/${bookname}.mobi &
mobi_pid=$!

# 等待所有進程完成
wait $epub_pid
epub_status=$?
wait $pdf_pid
pdf_status=$?
wait $mobi_pid
mobi_status=$?

# 檢查是否所有格式都成功生成
if [ $epub_status -eq 0 ] && [ $pdf_status -eq 0 ] && [ $mobi_status -eq 0 ]; then
    echo "All ebooks generated successfully"
    exit 0
else
    echo "Some ebooks failed to generate"
    [ $epub_status -ne 0 ] && echo "EPUB generation failed"
    [ $pdf_status -ne 0 ] && echo "PDF generation failed"
    [ $mobi_status -ne 0 ] && echo "MOBI generation failed"
    exit 1
fi