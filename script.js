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
let twigintro = document.getElementById('twigintro')
let hildaintro = document.getElementById('hildaintro')
let wolfintro = document.getElementById('wolfintro')
let trollintro = document.getElementById('trollintro')
let returnbt = document.getElementById('returnbt')
let counter=0;
let counterall = 0;
let hildaescape = document.getElementById('hildaescape');
let startEscape = false;
let escapeSuccess = document.getElementById('escapeSuccess')
let runbt = document.getElementById('runbt')
let escapeFail = document.getElementById('escapeFail')
let text = document.getElementById('text')
let nextbt2 = document.getElementById('nextbt2')
let nextbt3 = document.getElementById('nextbt3')
let keyk = document.getElementById('keyk')
let keyl = document.getElementById('keyl')
let press1 = document.getElementById('press1')
let press2 = document.getElementById('press2')
let attack = document.getElementById('attack')
let alfur = document.getElementById('alfur')
let bedroom = document.getElementById('bedroom')
let underbed = document.getElementById('underbed')
let desk = document.getElementById('desk')
let drawer = document.getElementById('drawer')
let bookshelf = document.getElementById('bookshelf')
let bedvideo = document.getElementById('bedvideo')
let deskvideo = document.getElementById('deskvideo')
let bookshelfvideo = document.getElementById('bookshelfvideo')
let drawervideo = document.getElementById('drawervideo')
let returnbt2 = document.getElementById('returnbt2')


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
  hildaintro.style.display = 'block'
  returnbt.style.display = 'block'
  wolfimg.style.display = 'none'
  hildaimg.style.display = 'none'
  trollimg.style.display = 'none'
  twigimg.style.display = 'none'
  startimg.style.display = 'none'
  hildaintro.play()
})
twigdiv.addEventListener('click',function(){
  console.log('twig intro')
  // twigclick = true;
  twigintro.style.display = 'block'
  returnbt.style.display = 'block'
  wolfimg.style.display = 'none'
  hildaimg.style.display = 'none'
  trollimg.style.display = 'none'
  twigimg.style.display = 'none'
  startimg.style.display = 'none'
  twigintro.play()
})
wolfdiv.addEventListener('click',function(){
  wolfintro.style.display = 'block'
  returnbt.style.display = 'block'
  wolfimg.style.display = 'none'
  hildaimg.style.display = 'none'
  trollimg.style.display = 'none'
  twigimg.style.display = 'none'
  startimg.style.display = 'none'
  wolfintro.play()
})
trolldiv.addEventListener("click",function(){

  trollintro.style.display = 'block'
  returnbt.style.display = 'block'
  wolfimg.style.display = 'none'
  hildaimg.style.display = 'none'
  trollimg.style.display = 'none'
  twigimg.style.display = 'none'
  startimg.style.display = 'none'
  trollintro.play()
})

let returncount = 0
function returnToInto(){
  twigintro.pause();
  hildaintro.pause();
  trollintro.pause();
  wolfintro.pause();
  twigintro.style.display = 'none'
  hildaintro.style.display = 'none'
  trollintro.style.display = 'none'
  wolfintro.style.display = 'none'

  startimg.style.display = 'block'
  wolfimg.style.display = 'block'
  hildaimg.style.display = 'block'
  trollimg.style.display = 'block'
  twigimg.style.display = 'block'
  returnbt.style.display = 'none'
  returncount += 1

  if(returncount == 4){
    nextbt.style.display = 'block';
  }

}
returnbt.addEventListener('click',returnToInto)

function drawTroll(){
  drawTrollVideo.style.display = 'block'
  startimg.remove();
  wolfimg.remove();
  hildaimg.remove();
  twigimg.remove();
  trollimg.remove();
  trolldiv.remove();
  hildadiv.remove();
  twigdiv.remove();
  wolfdiv.remove();
  drawTrollVideo.play();
  nextbt.style.display = 'none';
}

nextbt.addEventListener('click',drawTroll);


let position1 = 300
let position2 = 330
let c = 1
drawTrollVideo.addEventListener('ended',function(){
  drawTrollVideo.remove()
  hildaescape.style.display = 'block'
  keyk.style.display = 'block'
  keyl.style.display = 'block'
  press1.style.display = 'block'
  press2.style.display = 'block'

  setInterval(() => {
    position1 = position1 + c
    position2 = position2 - c
    if(position1 >= 330){
      c = -c
    }else if(position1 <= 300){
      c = -c
    }
   press1.style.top = position1 + 'px';
   press2.style.top = position2 + 'px';
  }, 10);


  // hildaescape.play()
  document.addEventListener('keypress',whichkey);
})

let prevkey =[]
let playrate = []
function whichkey(){
  keyk.remove();
  keyl.remove();
  press1.remove();
  press2.remove();
  var key = event.key;
  prevkey[0] = prevkey[1]
  prevkey[1] = key
  console.log(prevkey)
  if(prevkey[0] == 'k' && prevkey[1] == 'l'){
    counter += 1;
    counterall += 1
    hildaescape.play();
    
  }
  }



  setInterval(() => {
    hildaescape.playbackRate = counter/3;
    // playrate.push(hildaescape.playbackRate);
    // console.log(playrate)
    counter = 0
  }, 1000);

  hildaescape.addEventListener('ended',function(){
    hildaescape.pause()
    if (counterall > 40){
      console.log('success')
      hildaescape.pause();
      hildaescape.remove();
      escapeSuccess.style.display = 'block'
      escapeSuccess.play();
      text.style.display = 'block'
      text.innerHTML = 'Good job!'
      setTimeout(() => {
        text.style.display = 'none'
        
      }, 3000);
      // setTimeout(() => {
        nextbt2.style.display = 'block'
        nextbt2.addEventListener('click',function(){
          nextbt2.remove();
          escapeSuccess.remove();
          attack.style.display = 'block'
          attack.play();
        })
      // }, 47000);

    }else{
      console.log('fail')
      hildaescape.pause();
      hildaescape.style.display = 'none';
      escapeFail.style.display = 'block'
      escapeFail.play();
      text.style.display = 'block'
      text.innerHTML = 'You Failed :( Click here to try again'
      text.addEventListener('click',function(){
        text.style.display = 'none'
        hildaescape.style.display = 'block'
        escapeFail.style.display = 'none'
        var key = event.key;
        prevkey[0] = prevkey[1]
        prevkey[1] = key
        console.log(prevkey)
        if(prevkey[0] == 'k' && prevkey[1] == 'l'){
          counter += 1;
          counterall += 1
          hildaescape.play();
          
        }
        setInterval(() => {
          hildaescape.playbackRate = counter/3;
          playrate.push(hildaescape.playbackRate);
          // console.log(playrate)
          counter = 0
        }, 1000);

      })
      
    }
  })

attack.addEventListener('ended',function(){
  nextbt3.style.display = 'block'
  nextbt3.addEventListener('click',function(){
    attack.remove();
    nextbt3.remove();
    alfur.style.display = 'block'
    alfur.play();
  })
})

alfur.addEventListener('ended',function(){
  alfur.remove();
  bedroom.style.display = 'block'
  underbed.style.display = 'block'
  desk.style.display = 'block'
  drawer.style.display = 'block'
  bookshelf.style.display = 'block'
})
let bedclick = false;
let deskclick = false;
let drawerclick = false;
let bookshelfclick = false;
let returncount2 = 0;
underbed.addEventListener('click',function(){
  bedroom.style.display = 'none'
  underbed.style.display = 'none'
  desk.style.display = 'none'
  drawer.style.display = 'none'
  bookshelf.style.display = 'none'
  bedvideo.style.display = 'block'
  bedvideo.play();
  bedclick = true
})
bedvideo.addEventListener('ended',function(){
  returnbt2.style.display = 'block'
})
desk.addEventListener('click',function(){
  bedroom.style.display = 'none'
  underbed.style.display = 'none'
  desk.style.display = 'none'
  drawer.style.display = 'none'
  bookshelf.style.display = 'none'
  deskvideo.style.display = 'block'
  deskvideo.play();
  deskclick = true
})
deskvideo.addEventListener('ended',function(){
  returnbt2.style.display = 'block'
})

drawer.addEventListener('click',function(){
  bedroom.style.display = 'none'
  underbed.style.display = 'none'
  desk.style.display = 'none'
  drawer.style.display = 'none'
  bookshelf.style.display = 'none'
  drawervideo.style.display = 'block'
  drawervideo.play();
  drawerclick = true
})
drawervideo.addEventListener('ended',function(){
  returnbt2.style.display = 'block'
})

bookshelf.addEventListener('click',function(){
  bedroom.style.display = 'none'
  underbed.style.display = 'none'
  desk.style.display = 'none'
  drawer.style.display = 'none'
  bookshelf.style.display = 'none'
  bookshelfvideo.style.display = 'block'
  bookshelfvideo.play();
  bookshelfclick = true
})
bookshelfvideo.addEventListener('ended',function(){
  returnbt2.style.display = 'block'
})

returnbt2.addEventListener('click',function(){
  returnbt2.style.display = 'none'
  bedroom.style.display = 'block'
  underbed.style.display = 'block'
  desk.style.display = 'block'
  drawer.style.display = 'block'
  bookshelf.style.display = 'block'
  deskvideo.style.display = 'none'
  bedvideo.style.display = 'none'
  drawervideo.style.display = 'none'
  bookshelfvideo.style.display = 'none'
  returncount2 += 1

  if (returncount2 == 4){
    console.log('ear')
  }
})
