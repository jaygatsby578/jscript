const images =  ["a1.jpeg", "a2.jpeg", "a3.jpeg"];
const id = 'music';

let count = 0;
const slideimage =()=>{
  if( count >= images.length){
    count = 0;
  }else{
    document.getElementById('slideshow').src = images[count];
    count++;
  }
}

let slideid = 0;
const startstop = () =>{
  if(slideid === 0){//開始ボタンを押した時の処理内容
    document.getElementById('music').play();
    slideid = setInterval(slideimage, 1000);
  　}else{ //停止ボタンを押した時の処理内容
      document.getElementById('music').pause();
    　clearInterval(slideid);
    　slideid = 0;
  　}
}
document.getElementById('startstopbtn').onclick = startstop;
