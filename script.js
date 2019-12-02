let wolf = document.getElementById('wolf1');
let index = 1;
let wolfLeft = -300;
let beginbt = document.getElementById('beginbt')
let startimg = document.getElementById('startimg')
let hildaimg = document.getElementById('hildaimg')
let twigimg = document.getElementById('twigimg')
let trollimg = document.getElementById('trollimg')
let trolldiv = document.getElementById('trolldiv')
let hildadiv = document.getElementById('hildadiv')
let twigdiv = document.getElementById('twigdiv')
let wolfdiv = document.getElementById('wolfdiv')
let wolfimg = document.getElementById('wolfimg')
let hildaclick = false;
let twigclick = false;
let wolfclick = false;
let trollclick = false;
let nextbt = document.getElementById('nextbt')
let drawTrollVideo = document.getElementById('drawTrollVideo')

intervalID = setInterval(() => {
  if(index >= 8){
    index = 1;
    wolfLeft = wolfLeft + 50;
    wolf.style.left = wolfLeft + 'px';
}else{
    index +=1;
}
  wolf.src = "wolf" + index + ".png";
  console.log(index)
}, 100);

function begin(){
  startimg.src = 'intro1.png';
  startimg.style.width = '1440px';
  hildaimg.style.display = 'block';
  twigimg.style.display = 'block';
  trollimg.style.display = 'block';
  wolfimg.style.display = 'block';
  clearInterval(intervalID);
  wolf.remove();
  wolfimg.style.left = '200px';
  wolfimg.style.top = '-300px';
  wolfimg.style.width = '1900px';
  wolfdiv.style.display = 'block';
  hildadiv.style.display = 'block';
  trolldiv.style.display = 'block';
  twigdiv.style.display = 'block';
  beginbt.remove();

}
beginbt.addEventListener('click',begin)

trolldiv.addEventListener('mouseover',function(){
  trollimg.style.width = '1600px';
  trollimg.style.top = '-50px';
  trollimg.style.left = '-50px';
})
trolldiv.addEventListener('mouseout',function(){
  trollimg.style.width = '1440px'
  trollimg.style.top = '0px';
  trollimg.style.left = '0px';

})
hildadiv.addEventListener('mouseover',function(){
  hildaimg.style.width = '1600px';
  hildaimg.style.top = '-70px';
  hildaimg.style.left = '-83px';
})
hildadiv.addEventListener('mouseout',function(){
  hildaimg.style.width = '1440px'
  hildaimg.style.top = '0px';
  hildaimg.style.left = '0px';
})
twigdiv.addEventListener('mouseover',function(){
  twigimg.style.width = '1600px';
  twigimg.style.top = '-70px';
  twigimg.style.left = '-110px';
})
twigdiv.addEventListener('mouseout',function(){
  twigimg.style.width = '1440px'
  twigimg.style.top = '0px';
  twigimg.style.left = '0px';
})
wolfdiv.addEventListener('mouseover',function(){
  wolfimg.style.width = '2100px';
  wolfimg.style.top = '-350px';
  wolfimg.style.left = '150px';
})
wolfdiv.addEventListener('mouseout',function(){
  wolfimg.style.width = '1900px'
  wolfimg.style.top = '-300px';
  wolfimg.style.left = '200px';
})
hildadiv.addEventListener('click',function(){
  console.log('hilda intro')
  hildaclick = true;
  if(hildaclick == true && twigclick == true && wolfclick == true && trollclick == true){
    nextbt.style.display = 'block';
    console.log('next')
  }
})
twigdiv.addEventListener('click',function(){
  console.log('twig intro')
  twigclick = true;
  if(hildaclick == true && twigclick == true && wolfclick == true && trollclick == true){
    nextbt.style.display = 'block';
    console.log('next')
  }
})
wolfdiv.addEventListener('click',function(){
  console.log('wolf intro')
  wolfclick = true;
  if(hildaclick == true && twigclick == true && wolfclick == true && trollclick == true){
    nextbt.style.display = 'block';
    console.log('next')
  }
})
trolldiv.addEventListener("click",function(){
  console.log('troll intro');
  trollclick = true;
  if(hildaclick == true && twigclick == true && wolfclick == true && trollclick == true){
    nextbt.style.display = 'block';
    console.log('next')
  }
})

function drawTroll(){
  drawTrollVideo.style.display = 'block'
  startimg.remove();
  wolfimg.remove();
  hildaimg.remove();
  twigimg.remove();
  trollimg.remove();
  drawTrollVideo.play();
  nextbt.style.display = 'none';

}

nextbt.addEventListener('click',drawTroll);



