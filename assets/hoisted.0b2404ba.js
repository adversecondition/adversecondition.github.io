import"./hoisted.64eca5fe.js";import"./hoisted.db0e11cb.js";const i="@$%&_-#~/*-+:;<>()[]{}\\xyzabcdefghgijklmnopqrstuvwxyz",e=document.getElementsByClassName("texteffect")[0].innerText;let n=null,r=document.querySelector("h2"),t=0;clearInterval(n);n=setInterval(()=>{r.innerText=r.innerText.split("").map((a,l)=>l<t?e[l]:i[Math.floor(Math.random()*e.length)]).join(""),t>=e.length&&clearInterval(n),t+=1/3},15);setTimeout(()=>{document.getElementsByClassName("blinking-cursor")[0].style.visibility="visible"},1e3);
