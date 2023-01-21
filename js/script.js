const palito = document.querySelector(".palito");
const tam = document.querySelector(".game-board");

//const posiPalito = palito.offsetLeft;

const tamanho = +window.getComputedStyle(tam).width.replace("px", "");

var posY;
var palit;
var tmp;
var x = 0;

function inicio() {
  posY = 0;
  document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft") {
    } else if (e.code === "ArrowUp") {
    } else if (e.code === "ArrowRight") {
      if (x == 0) {
        x = 1;
        palito.src = "./img/palito-gif-3.gif";
      }
      posY += 20;
      console.log("posY " + posY);
      x;
    }
  });

  document.addEventListener("keyup", (e) => {
    if (x == 1) {
      x = 0;
    }
    palito.src = "./img/palito-gif-2.gif";
  });

  //document.addEventListener("keyup", teclaUp(e));
  tmp = setInterval(enterFrame, 20);
}

function enterFrame() {
  palito.style.left = `${posY}px`;
}

window.addEventListener("load", () => {
  inicio();
  enterFrame();
});

/*
const loop = setInterval(() => {}, 10);

var dirY = 0;

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowLeft") {
  } else if (e.code === "ArrowUp") {
  } else if (e.code === "ArrowRight") {
    palito.src = "./img/palito-gif-3.gif";

    console.log("-> " + posiPalito);
  }
});

function teclaDw(event) {
  var tecla = event.keyCode;
  if (tecla == 37) {
  }
}

document.addEventListener("keyup", (e) => {
  palito.src = "./img/palito-gif-2.gif";
});
*/
