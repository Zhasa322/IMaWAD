const music = [
  'music/1.mp3', 'music/2.mp3', 'music/3.mp3', 'music/4.mp3'
];

const cover = [
  'cover/1.png', 'cover/2.png', 'cover/3.png', 'cover/4.png'
];

const prevcover = document.getElementById('prevcover');
const curcover = document.getElementById('curcover');
const nextcover = document.getElementById('nextcover');

let current = 0;
let audio = new Audio(music[current]);

function prev(){
current = current - 1;
if (current<0) current = 3;
play();
}

function updcover(){
  curcover.src = cover[current];

  prevcover.src = cover[current - 1];
  if (current-1 < 0 ) prevcover.src = cover[3];
  
  nextcover.src = cover[current + 1];
  if (current+1 > 3) nextcover.src = cover[0];
}

function play(){
audio.pause();
audio = new Audio(music[current]);
audio.play();
updcover();
}

function stop(){
audio.pause();
}

function next(){
  current = current + 1;
  if (current>3) current = 0;
  play();
}

function music1(){
current = 0;
play();
}

function music2(){
current = 1;
play();
}

function music3(){
current = 2;
play();
}

function music4(){
current = 3;
play();
}

