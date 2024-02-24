let pci = document.querySelector(".pci");
let snake = document.querySelector(".snake");
let water = document.querySelector(".water");
let gun = document.querySelector(".gun");
let bar = document.querySelector(".bar");
let win = document.querySelector(".win");
let draw = document.querySelector(".draw");
let lost = document.querySelector(".lost");
let user;
let cmp;
let w = 0,
  l = 0,
  d = 0;
snake.onclick = () => {
  user = "s";
  let x = Math.floor(Math.random() * 10);
  if (x < 3) {
    cmp = "s";
    pci.style.backgroundImage = "url(snake.png)";
  } else if (x < 6 && x > 3) {
    cmp = "w";
    pci.style.backgroundImage = "url(water.jpg)";
  } else {
    cmp = "g";
    pci.style.backgroundImage = "url(gun.jpg)";
  }
  if (user == cmp) {
    bar.innerHTML = "DRAW!";
    d++;
    draw.innerHTML = d;
  } else if (cmp == "w") {
    bar.innerHTML = "WIN!";
    w++;
    win.innerHTML = w;
  } else {
    bar.innerHTML = "LOST!";
    l++;
    lost.innerHTML = l;
  }
};
water.onclick = () => {
  user = "w";
  let x = Math.floor(Math.random() * 10);
  if (x < 3) {
    cmp = "s";
    pci.style.backgroundImage = "url(snake.png)";
  } else if (x < 6 && x > 3) {
    cmp = "w";
    pci.style.backgroundImage = "url(water.jpg)";
  } else {
    cmp = "g";
    pci.style.backgroundImage = "url(gun.jpg)";
  }
  if (user == cmp) {
    bar.innerHTML = "DRAW!";
    d++;
    draw.innerHTML = d;
  } else if (cmp == "g") {
    bar.innerHTML = "WIN!";
    w++;
    win.innerHTML = w;
  } else {
    bar.innerHTML = "LOST!";
    l++;
    lost.innerHTML = l;
  }
};
gun.onclick = () => {
  user = "g";
  let x = Math.floor(Math.random() * 10);
  if (x < 3) {
    cmp = "s";
    pci.style.backgroundImage = "url(snake.png)";
  } else if (x < 6 && x > 3) {
    cmp = "w";
    pci.style.backgroundImage = "url(water.jpg)";
  } else {
    cmp = "g";
    pci.style.backgroundImage = "url(gun.jpg)";
  }
  if (user == cmp) {
    bar.innerHTML = "DRAW!";
    d++;
    draw.innerHTML = d;
  } else if (cmp == "s") {
    bar.innerHTML = "WIN!";
    w++;
    win.innerHTML = w;
  } else {
    bar.innerHTML = "LOST!";
    l++;
    lost.innerHTML = l;
  }
};
