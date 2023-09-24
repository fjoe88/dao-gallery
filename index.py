#!c:/Python311/python.exe

import cgi
import sys
import os
import cgi
from datetime import datetime

import logging

logging.basicConfig(filename="./logs/main.log",
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

        <script src="js/basic_styling.js" defer></script>
        </head>
        <body>
        <div id="landing-page" style="background:#dfe9ff;color:green;font-size:24px">
        
        <div id="landing-page-banner-text">
          <h1>吴道予作品集</h1>
          <p>
        个人介绍页主要是放在自己的作品集中介绍自己的基本情况和信息，通常放在作品集封面后面，正式作品的前面。

好的个人介绍页能够让面试官快速了解自己的性格和优势，快速吸引面试官的目光从而得到面试机会。

个人介绍页的作用主要有两个：第一是让专业面试官对于你有一个初步的印象，为后面的内容展开做铺垫。第二个让专业面试官对你有一定的记忆点，让他对你产生兴趣，并记住你。

作者：晨屹的设计笔记
链接：https://www.jianshu.com/p/ee2e26fd8b55
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
          </p>
          <div class="banner-button" onclick="window.location.href='self_intro.py';"><a>个人简介</a></div>
        </div>
        
        <img id="landing-page-banner-image" />;
          
        <div class="landing-page-card" >
          <a href="pics/pic1.jpg">pic1</a> 
          作品剪辑1
        </div>
        
        <div class="landing-page-card">
          <a href="pics/pic2.jpg">pic2</a> 
          作品剪辑2 
        </div>
        
        <div class="landing-page-card">
          <a href="pics/pic3.jpg">pic3</a> 
          <p>作品剪辑3 
          </p>
        </div>

        <div class="landing-page-card">
          <a href="pics/pic4.jpg">pic4</a> 
          <p>作品剪辑4
          </p>
        </div>

        <div class="landing-page-card">
          <a href="pics/great_picture123.jpg">great_picture</a> 
          <p>作品剪辑4afewfawefawef
          </p>
        </div>
        
        <div class="landing-page-card">
          <a href="pics/newpic.jpg">newpic</a> 
          <p>this is a new pic
          </p>
        </div>
        
        <span class="landing-page-card-icons fa-solid fa-chart-line,fa-solid fa-location-dot,fa-solid fa-sitemap,fa-solid fa-circle-nodes"></span>
        </div> 
        </body>""")
  print ('</html>')
except Exception as e:
  logging.info(e)
  error_header=f"Status:500 \n###########ERROR#############\n{e}"
  print(f"Content-type: text/plain \n\n {error_header}")
