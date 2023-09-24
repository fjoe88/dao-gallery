//script Params
landingPageId = "landing-page";
landingPageImage = 'pics/pic_cover'+'.jpg';;;
 
//main element
landingPageDiv = document.getElementById(landingPageId);  
 
//banner elements
landingPageBannerId= "#"+landingPageId+"-banner-"
landingPageTextDiv = document.querySelector(landingPageBannerId+"text");

//banner image
landingPageIamgeDiv = document.querySelector(landingPageBannerId+"image");
//landingPageIamgeDiv.src = landingPageImage

 
//card elements 
landingPageCardLinks = [...document.querySelectorAll(".landing-page-card > a")];
[...document.querySelectorAll(".landing-page-card > a")].forEach(a=>a.remove)
 
landingPageCardContents = [...document.querySelectorAll(".landing-page-card")]
 
//icons
landingPageCardIcons = document.querySelector(".landing-page-card-icons").classList.value.split(",")
landingPageCardIcons[0] = landingPageCardIcons[0].replace("landing-page-card-icons ","");
 
 
template=`
<link rel="stylesheet" href=https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
 
  <div class="banner">
    <div class="banner-text"></div>
    <img class="banner-image" />
  </div>
  
<div class="cards"></div>
` 
 
 
//by now we "cut" all elements from main container, so we replace with template
landingPageDiv.innerHTML = template
 
//start 'pasting' elements
//banner text
templateBannerText = document.querySelector("#"+landingPageId+" .banner .banner-text")
templateBannerText.append(...landingPageTextDiv.childNodes);
 
//banner image
templateBannerImage = document.querySelector("#"+landingPageId+" .banner .banner-image")
templateBannerImage.src = landingPageImage
 
 
//cards
landingPageCardLinks.forEach((a,j)=>{

  img_default = document.createElement("img");

   div = document.createElement("div");
   //Object.assign(a.style,landingPageCardContents[j].style)
   a.className = "card";
   a.style.textDecoration = "none";
   i = document.createElement("i");
   i.className = landingPageCardIcons[j] + " fa-xl";
   h3 = document.createElement("h3");
   h3.className = "card-title";
   h3.innerText = a.innerText;
   p = document.createElement("p");
   p.append(...landingPageCardContents[j].innerText);
   a2 = document.createElement("a");
  

   img_default.src="pics/pic_default.jpg";
   
   //复制这里开始，替换picture1成新的照片的标题
   //替换"pics/picture1.jpg"成新照片的位置比如"pics/new_pic.jpg"
   if (h3.innerText == 'pic1'){
    img_default.src="pics/pic1.jpg";
   }
   //复制这里结束

   if (h3.innerText == 'newpic'){
    img_default.src="pics/newpic.jpg";
   }

   if (h3.innerText == 'great_picture'){
    img_default.src="pics/great_picture123.jpg";
   }

   if (h3.innerText == 'todaysnewdraw'){
    img_default.src="pics/230924.jpg";
   }
    
    
   if (h3.innerText == 'pic2'){
    img_default.src="pics/pic2.jpg";
   }

   if (h3.innerText == 'pic3'){
    img_default.src="pics/pic3.jpg";
   }

   if (h3.innerText == 'pic4'){
    img_default.src="pics/pic4.jpg";
   }

   if (h3.innerText == 'newpic'){
    img_default.src="pics/newpic.jpg";
   }
 
   //footer
   a2.className = "card-link"
   //a2.innerText = "Go to dashboard";
 
   //div.append(i);
   div.append(h3);
   div.append(p);
   div.append(a2);
 
   a.innerHTML=""
   a.append(img_default)
   a.append(div)
 
   document.querySelector(".cards").append(a);
    
   //apply inline style (if any)
   sourceStyle = landingPageCardContents[j].getAttribute('style');
   a.setAttribute('style', sourceStyle);
   p.setAttribute('style', sourceStyle);
 
})
 
 
cardCount = landingPageCardLinks.length + 1;
 
//Default Style that can be override by other themes / layouts
style = `<style>
#landing-page {
     background: #dfe9ff;
     font-family: Lato, sans-serif;
         height:200vh;
}
 
.banner{
    display:flex;
    padding:5%;
}

 .banner .banner-image {
     opacity: 0.4;
     position: absolute;
     max-width:50%;
     max-height:40%;
     margin-top: 60px;
     right: 12%;
     top: 10%;
     padding-top: 5%;
     /filter: drop-shadow(0 3rem 0.05rem rgba(191, 216, 255, 1));
}

 @media (min-width: 300px) {
     .banner .banner-image {
         display: none;
         height: 400px;
         top: 0px;
         opacity: 0.5;
    }
}

 @media (min-width: 900px) {
     .banner .banner-image {
         display: inherit;
         height: 400px;
         top: 0px;
         opacity: 0.5;
    }
}

 @media (min-width: 1400px) {
     .banner .banner-image {
         display: inherit;
         height: 500px;
         top: 0px;
         opacity: 0.8;
    }
}


 @media (min-width: 1800px) {
     .banner .banner-image {
         height: 600px;
         top: -50px;
         opacity: 1;
    }
}
 
 
 .banner .banner-text {
     max-width: 850px;
     float: left;
}
 .banner .banner-text h1 {
     color: #00106a;
     font-size: 3rem;
     font-weight: 700;
     letter-spacing: 3px;
     margin-bottom: 1rem;
}
 .banner .banner-text p {
     color: #00106a;
     xfont-size: 1.05rem;
     line-height: 1.75;
   margin-bottom:35px;
}
 .banner-button a{
     border: 0;
     border-radius: 50px;
     padding: 0.75rem 2.75rem;
     background: #4b71ff;    
     color: #fff !important; 
     box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, .25); 
     cursor: pointer;
     position: relative;
     font-size: 1rem;
     font-weight: 400;
     letter-spacing: 1px;
     transition: all 0.3s ease-in-out;
  color:white;
  text-decoration:none !important;
}
 
 .banner-button a:hover {
     transform: translateY(-5px);
     box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, .25);
}
 
.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
  }
 
  .card {
    flex-basis: calc(18% - 1em);
    background-color: #ddd;
    margin: 15px;
  }
 
  /* Media queries for smaller screens */
  @media (max-width: 768px) {
    .card {
      flex-basis: calc(100% / ${cardCount/2});
    }
  }
  @media (max-width: 480px) {
    .card {
      flex-basis: 100%;
    }
  }
 
 
.card {
     padding: 16px 24px;
     background: #fff;
     position: relative;
     border: none;
     box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, .15);
     border: 2px solid transparent;
     transition: all 0.3s ease-in-out;
}
 
.cards a:hover{
    text-decoration:none;
}
 
 .card h3.card-title {
     font-weight: 700;
     font-size: 1.3rem;
     color: #00106a;
}
 .card p {
     color: #989dc5;
     font-size: 70%;
     line-height: 1.5;
     margin-bottom: 72px;
}
 .card .card-link {
     position: absolute;
     bottom: 18px;
}
 .card:hover {
   filter: brightness(95%);
     box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, .15);
     cursor: pointer;
}
 .card .card-icon {
     width: 60px; 
     margin-bottom: 8px;
     position: relative;
     top: 0;
     left: -12px;
}
</style>`
landingPageDiv.insertAdjacentHTML("afterend",style)
