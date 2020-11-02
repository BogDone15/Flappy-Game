var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();

bird.src = "image/bird.png";
bg.src = "image/bg.png";
fg.src = "image/fg.png";
pipeUp.src = "image/pipeNorth.png";
pipeBottom.src = "image/pipeSouth.png";

var fly = new Audio();
var score_around = new Audio();

fly.src = "audio/fly.mp3";
score_around.src = "audio/score.mp3";

var gap = 80;

var score = 0;

var pipe = [];

pipe[0] = {
    x : cvs.width,
    y : 0
}

document.addEventListener("keydown", moveup);

function moveup() {
    yPos -= 25;
    fly.play();
}

xPos = 15;
yPos = 150;
grav = 1.5;

function draw() {
    ctx.drawImage(bg, 0, 0);

    for (let i = 0; i < pipe.length; i++ ) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);
        
        pipe[i].x--;

        if(pipe[i].x == 80) {
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            })
        }

        if(xPos + bird.width >= pipe[i].x
                     && xPos <= pipe[i].x + pipeUp.width
                    && (yPos <= pipe[i].y + pipeUp.height
                        || yPos + bird.height >= pipe[i].y + pipeUp.height + gap)
                        || yPos + bird.height >= cvs.height - fg.height) {
                        location.reload();
                    }
                
            if(pipe[i].x == 5) {
                score++;
                score_around.play();
            }
        
    }  
  
 

    ctx.drawImage(fg, 0, cvs.height - fg.height);

    ctx.drawImage(bird, xPos, yPos);

    yPos += grav;

    ctx.fillStyle = "#000";
    ctx.font = "24px Verdana";
    ctx.fillText("Счёт: " + score, 10, cvs.height - 20);

    requestAnimationFrame(draw);
 
}

pipeBottom.onload = draw;




//     ctx.fillStyle = "#000";
//     ctx.font = "24px Verdana";
//     ctx.fillText("Счет: " + score, 10, cvs.height - 20);














// var cvs = document.getElementById("canvas");
// var ctx = cvs.getContext("2d");

// var bird = new Image();
// var bg = new Image();
// var fg = new Image();
// var pipeUp = new Image();
// var pipeBottom = new Image();

// bird.src = "image/bird.png";
// bg.src = "image/bg.png";
// fg.src = "image/fg.png";
// pipeUp.src = "image/pipeNorth.png";
// pipeBottom.src = "image/pipeSouth.png";

// // Звук
// var fly = new Audio();
// var score_audio = new Audio();

// fly.src = "audio/fly.mp3";
// score_audio.src = "audio/score.mp3";
// var gap = 90;

// // При нажатии на кнопку

// document.addEventListener("keydown", moveup);

// function moveup() {
//     yPos -= 25;
//     fly.play();
// }

// // Создание блоков
// var pipe = [];

// pipe[0] = {
//     x : cvs.width,
//     y : 0
// }

// var score = 0;
// // Позиция птички
// var xPos = 10;
// var yPos = 150;
// var grav = 1.5;


// function draw() {
//     ctx.drawImage(bg, 0, 0);

//    for (var i = 0; i < pipe.length; i++) {
//     ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
//     ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

//     pipe[i].x--;

//     if(pipe[i].x == 80) {
//         pipe.push({
//             x : cvs.width,
//             y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
//         });
//     }

//     // Отслеживание прикосновений
//     if(xPos + bird.width >= pipe[i].x
//         && xPos <= pipe[i].x + pipeUp.width
//         && (yPos <= pipe[i].y + pipeUp.height
//             || yPos + bird.height >= pipe[i].y + pipeUp.height + gap)
//             || yPos + bird.height >= cvs.height - fg.height) {
//             location.reload();
//         }
    
//      if(pipe[i].x == 5) {
//          score++;
//          score_audio.play();
//      }   

//    }

//     ctx.drawImage(fg, 0, cvs.height - fg.height);

//     ctx.drawImage(bird, xPos ,yPos);

//     yPos += grav;

//     ctx.fillStyle = "#000";
//     ctx.font = "24px Verdana";
//     ctx.fillText("Счет: " + score, 10, cvs.height - 20);

//     requestAnimationFrame(draw);
// }

// pipeBottom.onload = draw;