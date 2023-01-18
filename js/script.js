const mario = document.querySelector(".mario");
const quadro_1 = document.querySelector(".quadro-1");
const cloud = document.querySelector(".cloud");


const loop = setInterval(() => {
  const cloudPosition = cloud.offsetLeft;

  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition <= 80) {
    document.getElementById("btn").style.display = "inline";
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    cloud.style.animation = "none";
    cloud.style.left = `${cloudPosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./img/game-over.png";

    clearInterval(loop);
  }
  mario.style.marginLeft = "50px";
}, 10);

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowLeft") {
    let position = +window.getComputedStyle(quadro_1).right.replace("px", "");
   
    position -= 5;
    quadro_1.style.right = `${position}px`;
  } else if (e.code === "ArrowUp") {
    alert("set U");
  } else if (e.code === "ArrowRight") {
    let position = +window.getComputedStyle(quadro_1).right.replace("px", "");
   
    position += 5;
    quadro_1.style.right = `${position}px`;
  } else if (e.code === "ArrowDown") {
    alert("set D");
  }
});

document.addEventListener("keyup", (e) => {});
