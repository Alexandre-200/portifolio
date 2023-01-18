const mario = document.querySelector(".mario");
const cloud = document.querySelector(".cloud");

function reiniciar() {
  window.location.reload();
}

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

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
    mario.style.width = "75px";
    
    clearInterval(loop);
  }
  mario.style.marginLeft = "50px";
}, 10);

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowRight") {
    alert("ok");
  }
});
