let valueDisplays=document.querySelectorAll(".um");
let interval=4000;
valueDisplays.forEach((valueDisplay) => {
  let startValue=0;
  let endValue=8;
  console.log(endValue);
  let duration=Math.floor(interval/endValue);
  let counter=setInterval(function(){
   startValue +=1;
    valueDisplay.textContent=startValue;
    if(startValue == endValue){
      clearInterval(counter);
    }
  },20);
  });

let valueDispl=document.querySelectorAll(".num");
let interva=4000;
valueDispl.forEach((valueDispl) => {
  let startValue=0;
  let endValue=320;
  console.log(endValue);
  let duration=Math.floor(interva/endValue);
  let counter=setInterval(function(){
   startValue +=1;
    valueDispl.textContent=startValue;
    if(startValue == endValue){
      clearInterval(counter);
    }
  },20);
  });
  let valueDisp=document.querySelectorAll(".thirdm");
let interv=4000;
valueDisp.forEach((valueDisp) => {
  let startValue=0;
  let endValue=40;
  console.log(endValue);
  let duration=Math.floor(interv/endValue);
  let counter=setInterval(function(){
   startValue +=1;
    valueDisp.textContent=startValue;
    if(startValue == endValue){
      clearInterval(counter);
    }
  },20);
  });
let valueDis=document.querySelectorAll(".fourthm");
let inter=4000;
valueDis.forEach((valueDis) => {
  let startValue=0;
  let endValue=4567;
  console.log(endValue);
  let duration=Math.floor(inter/endValue);
  let counter=setInterval(function(){
   startValue +=1;
    valueDis.textContent=startValue;
    if(startValue == endValue){
      clearInterval(counter);
    }
  },20);
  });
  