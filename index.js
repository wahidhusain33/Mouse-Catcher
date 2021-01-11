var score = 0;
var last;

setInterval(interval, 600);
function interval() {
    var images = document.querySelectorAll('.mouse');
    var ran = Math.random();
    ran = Math.ceil(ran * 9);
    console.log(last);
    if (last != undefined) {
        images[last - 1].style.display = 'none';
    }
    switch (ran) {
        case 1:
            images[0].style.display = 'inline-block';
            last = ran;
            break;
        case 2:
            images[1].style.display = 'inline-block';
            last = ran;
            break;
        case 3:
            images[2].style.display = 'inline-block';
            last = ran;
            break;
        case 4:
            images[3].style.display = 'inline-block';
            last = ran;
            break;
        case 5:
            images[4].style.display = 'inline-block';
            last = ran;
            break;
        case 6:
            images[5].style.display = 'inline-block';
            last = ran;
            break;
        case 7:
            images[6].style.display = 'inline-block';
            last = ran;
            break;
        case 8:
            images[7].style.display = 'inline-block';
            last = ran;
            break;
        case 9:
            images[8].style.display = 'inline-block';
            last = ran;
            break;
    }
}

var timeleft = 60;
var downloadTimer = setInterval(function(){
  // debugger;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("time").innerHTML = "Finished";
    document.getElementById("finalScore").style.display = "block";
    document.querySelector('.play').style.display = "none";
    getCookie(score);
    setCookie(score);
  } else {
    document.getElementById("time").innerHTML = timeleft + " seconds remaining";
    document.getElementById('highScore').innerHTML = document.cookie;
  }
  timeleft -= 1;
}, 1000);

function click12(){
    score=score+10;
    document.getElementById('scoreId').innerHTML = score;
    document.getElementById('show').innerHTML = 'Your score is '+ score;
}
function getCookie(score){
  
    var highScore = document.cookie.split("=")[1];
    if(highScore==undefined)
    {
      highScore=0;
    }
    if(score > highScore){
      console.log("you set a new high score");
      document.getElementById('showHScore').innerHTML = 'Congratulation You made High Score ' +score;
    }
  }
  
  // If high score made it will save new data to cookie
  function setCookie(score) {
    // console.log('heyy');
    var highScore = document.cookie.split("=")[1];
    if(highScore==undefined)
    {
      highScore=0;
    }
    if(score > highScore){
    document.cookie= 'highScore=' +score;
     }
      console.log(document.cookie);
      document.getElementById('highScore').innerHTML = document.cookie;
  }
  


