#!c:/Python311/python.exe

import cgi
import sys
import os
import cgi
from datetime import datetime

import logging

logging.basicConfig(filename="./logs/self_intro.log",
                    level=logging.DEBUG,
                    format="%(asctime)s %(levelname)s %(name)s %(message)s")

logger = logging.getLogger(__name__)
try:
  print("Content-type:text/html\r\n\r\n")
  print("""<!DOCTYPE html>
        <html>
        <head>
        <title>Wu Daoyu Gallery</title>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

        <script src="js/self_intro.js" defer></script>
        </head>
        <body>
        <div id="landing-page" style="background:#dfe9ff;color:green;font-size:24px">
        
        <div id="landing-page-banner-text">
          <h1>吴道予</h1>
          <p>
        于忠祥，黑龙江人3e423423423423．中国油画家、色彩学家，自幼喜好美术．初中起跟名师学画。1985年进鲁迅美术学院五年制油画本科深造、毕业后长期坚持油画创作和色彩研究，多次参加全国、省各种美展、并自1983年起，先后在国内外举办了十多次个人画展，发表油画艺术论文集《当代油画风景创作谈》具首创性、入选《中华文库》，油画作品充满激情、是“主客观结合的美的自然流露”，真诚、质朴、美，具“朴实的瑰丽”风格，入选《中国现代艺术精品集》、《当代绘画艺术》、《中国美术选集》、《中国美术家选集》、并为国内多家美术馆、博物馆和美国、德国、丹麦、新加坡、香港、台湾等国家、地区美术馆、博物馆、画廊及个人收藏。
          </p>
          <div class="banner-button" onclick="window.location.href='index.py';"><a>回到主页</a></div>
        </div>
        
        <img id="landing-page-banner-image" />;
          

        <span class="landing-page-card-icons fa-solid fa-chart-line,fa-solid fa-location-dot,fa-solid fa-sitemap,fa-solid fa-circle-nodes"></span>
        </div> 
        </body>""")
  print ('</html>')
except Exception as e:
  logging.info(e)
  error_header=f"Status:500 \n###########ERROR#############\n{e}"
  print(f"Content-type: text/plain \n\n {error_header}")
