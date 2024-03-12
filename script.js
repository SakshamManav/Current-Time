let hrs = document.querySelector(".hrs");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let day = document.querySelector(".day");
let ampm = document.querySelector(".ampm");


setInterval(()=>{
    let currenttime = new Date();
   
    hrs.innerText = (currenttime.getHours()<10? "0":"") + currenttime.getHours() + ":";
    min.innerText = (currenttime.getMinutes()<10? "0":"") + currenttime.getMinutes() + ":";
    sec.innerText = (currenttime.getSeconds()<10? "0":"") + currenttime.getSeconds();
    
    if(currenttime.getHours()<12){
        ampm.innerText = "AM";
    } else{
        ampm.innerText = "PM";
    }
},1000);
