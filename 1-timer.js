import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as h,i as p}from"./assets/vendor-BbbuE1sJ.js";const o=document.getElementById("datetime-picker"),t=document.querySelector("[data-start]"),D=document.querySelector("[data-days]"),b=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),v=document.querySelector("[data-seconds]");let s=null,l=0;function g(e){const r=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),y=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:r,hours:m,minutes:y,seconds:f}}function n(e){return String(e).padStart(2,"0")}function u(){const a=s-new Date;a<=0&&(clearInterval(l),o.disabled=!1,t.disabled=!0);const{days:d,hours:i,minutes:c,seconds:r}=g(a);D.textContent=n(d),b.textContent=n(i),S.textContent=n(c),v.textContent=n(r)}document.addEventListener("DOMContentLoaded",function(){o.value=""});const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,position:"below center",appendTo:document.body,minuteIncrement:1,dateFormat:"Y-m-d H:i",onClose(e){s=e[0],s<new Date?(p.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),t.disabled=!0):t.disabled=!1}};h(o,C);t.addEventListener("click",()=>{t.disabled=!0,o.disabled=!0,l=setInterval(u,1e3),u()});
//# sourceMappingURL=1-timer.js.map
