const hour1 =document.getElementById('hour');
const minute1=document.getElementById("minutes");
const seconds1 =document.getElementById("seconds");
const ampm=document.getElementById("ampm");
function updateClock(){
    let h =new Date().getHours();
    let m=new Date().getMinutes();
    let s =new Date().getSeconds();
    let ampm1="AM";
    if(h>12){
        h=h-12;
        ampm1="PM"
    }
    hour1.innerText=h;
    minute1.innerText=m;
    seconds1.innerText=s;
    ampm,(innerText=ampm1);
   setTimeout(()=>{
    updateClock();
   },1000)
}
updateClock();
