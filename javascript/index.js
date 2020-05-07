class Shark {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.swim = -800;
    this.fin = 0;
    this.nostrilGill = 2;

    this.pause = false;
    this.func = null;

    this.animate = this.animate.bind(this);

    this.draw();
  }

  animate() {
    if (this.pause === true) {
      this.wiggle();
    } else {
      window.clearInterval(this.func);
      this.update();
      this.draw();

      window.requestAnimationFrame(this.animate);
    }
  }

  update() {
    if (this.swim < 1410) {
      this.swim += 4;
    } else {
      this.swim = -800;
    }
  }

  surprise() {
    // eye
    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.ellipse(750 + this.swim, 130, 9, 9, Math.PI / 2, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.ellipse(750 + this.swim, 130, 5, 5, Math.PI / 2, 0, 2 * Math.PI);
    this.ctx.fill();

    // mouth
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.ellipse(740 + this.swim, 180, 10, 35, 1.8, 0, 2 * Math.PI);
    this.ctx.fill();

    // nostril
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.ellipse(800 + this.swim, 150, this.nostrilGill, 4, Math.PI / 2, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  wiggle() {
    this.func = window.setInterval(() => {
      this.draw();
      this.surprise();

      if (this.fin === 0) {
        this.fin = 10;
        this.nostrilGill = 3;
      } else {
        this.fin = 0;
        this.nostrilGill = 2;
      }
    }, 100);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.ctx.canvas.width < window.innerWidth) {
      this.ctx.canvas.width = window.innerWidth;
    }

    // tail back fin
    this.ctx.beginPath();
    this.ctx.fillStyle = "#C2C8C8";
    this.ctx.moveTo(200 + this.swim, 150);
    this.ctx.lineTo(30 + this.swim, 15 + this.fin);
    this.ctx.lineTo(100 + this.swim, 150);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#C2C8C8";
    this.ctx.moveTo(200 + this.swim, 150);
    this.ctx.lineTo(30 + this.swim, 285 - this.fin);
    this.ctx.lineTo(100 + this.swim, 150);
    this.ctx.closePath();
    this.ctx.fill();

    // bottom back fin
    this.ctx.beginPath();
    this.ctx.fillStyle = "#A2AAAA";
    this.ctx.moveTo(510 + this.swim + this.fin, 290);
    this.ctx.lineTo(600 + this.swim, 195);
    this.ctx.lineTo(700 + this.swim, 170);
    this.ctx.closePath();
    this.ctx.fill();

    // body 
    this.ctx.beginPath();
    this.ctx.fillStyle = "#DDE2E2";
    this.ctx.ellipse(550 + this.swim, 150, 230, 88, Math.PI, 0, 2 * Math.PI);
    this.ctx.fill();

    // top half of body
    this.ctx.beginPath();
    this.ctx.fillStyle = "#C2C8C8";
    this.ctx.ellipse(550 + this.swim, 150, 230, 88, Math.PI, 0, Math.PI);
    this.ctx.fill();

    // face 
    this.ctx.beginPath();
    this.ctx.fillStyle = "#C2C8C8";
    this.ctx.ellipse(730 + this.swim, 113, 110, 20, 0.35, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#DDE2E2";
    this.ctx.ellipse(730 + this.swim, 186, 110, 20, -0.35, 0, 2 * Math.PI);
    this.ctx.fill();

    // tail
    this.ctx.beginPath();
    this.ctx.fillStyle = "#C2C8C8";
    this.ctx.moveTo(140 + this.swim, 150);
    this.ctx.lineTo(410 + this.swim, 80);
    this.ctx.lineTo(410 + this.swim, 150);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#DDE2E2";
    this.ctx.moveTo(140 + this.swim, 150);
    this.ctx.lineTo(410 + this.swim, 220);
    this.ctx.lineTo(410 + this.swim, 150);
    this.ctx.closePath();
    this.ctx.fill();

    // tail small fins
    this.ctx.beginPath();
    this.ctx.fillStyle = "#C2C8C8";
    this.ctx.moveTo(270 + this.swim, 123);
    this.ctx.lineTo(268 + this.swim, 100);
    this.ctx.lineTo(290 + this.swim, 116);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#D5D8D8";
    this.ctx.moveTo(260 + this.swim, 206);
    this.ctx.lineTo(280 + this.swim, 170);
    this.ctx.lineTo(320 + this.swim, 170);
    this.ctx.closePath();
    this.ctx.fill();

    // top fin
    this.ctx.beginPath();
    this.ctx.fillStyle = "#C2C8C8";
    this.ctx.moveTo(500 + this.swim, 80);
    this.ctx.lineTo(520 + this.swim + this.fin, 0);
    this.ctx.lineTo(620 + this.swim, 80);
    this.ctx.closePath();
    this.ctx.fill();

    // bottom front fin
    this.ctx.beginPath();
    this.ctx.fillStyle = "#A2AAAA";
    this.ctx.moveTo(360 + this.swim + this.fin, 260);
    this.ctx.lineTo(510 + this.swim, 185);
    this.ctx.lineTo(610 + this.swim, 190);
    this.ctx.closePath();
    this.ctx.fill();

    // gills
    this.ctx.beginPath();
    this.ctx.fillStyle = "#474747";
    this.ctx.rect(630 + this.swim, 112, this.nostrilGill, 70);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#474747";
    this.ctx.rect(648 + this.swim, 112, this.nostrilGill, 70);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#474747";
    this.ctx.rect(666 + this.swim, 112, this.nostrilGill, 70);
    this.ctx.fill();

    // pupil
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.ellipse(750 + this.swim, 130, 5, 5, Math.PI / 2, 0, 2 * Math.PI);
    this.ctx.fill();

    // mouth
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.ellipse(740 + this.swim, 180, 4, 35, 1.8, 0, 2 * Math.PI);
    this.ctx.fill();

    // ocean
    this.ctx.beginPath();
    this.ctx.fillStyle = "rgba(14, 154, 235, 0.3)";
    this.ctx.fillRect(0, 90, this.ctx.canvas.width, 220);
    this.ctx.fill();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const sharkCanvas = document.getElementById('shark');
  const sharkCtx = sharkCanvas.getContext('2d');
  const shark = new Shark(sharkCanvas, sharkCtx);
  shark.animate();
});

const pageLoad = () => {
  let shark = document.getElementById('shark');
  let content = document.getElementById('all');

  content.style.opacity = "1.0";
  shark.style.display = "none";
}

const pickle = () => {
  let mac = document.getElementById("macbook");
  let desc = document.getElementById("proj-desc");

  let pickle = document.getElementById("pickle-link");
  let wiggle = document.getElementById("wiggle-link");
  let bobudget = document.getElementById("bobudget-link");

  if (wiggle.classList.contains("active")) {
    wiggle.classList.remove("active");
  } else if (bobudget.classList.contains("active")) {
    bobudget.classList.remove("active");
  }

  mac.innerHTML = "<a class='link' target='_blank' href='https://pickle-gpig-app.herokuapp.com/#/'>Visit the Site</a><img src='assets/images/projects/pickle.gif'>";
  desc.innerHTML = "<p><a target='_blank' href='https://pickle-gpig-app.herokuapp.com/#/'>Pickle</a>, a pixel-perfect clone of Rover, is an online marketplace that allows users to buy and sell guinea pig services.</p><div class='tech-n-links'><div class='i-links'><a target='_blank' href='https://pickle-gpig-app.herokuapp.com/#/'><i class='far fa-window-restore'></i></a><a target='_blank' href='https://github.com/karapliu/pickle-app'><i class='fab fa-github'></i></a></div><div class='technologies'><h6>React/Redux</h6><h6>Ruby on Rails</h6><h6>JavaScript</h6><h6>PostgreSQL</h6><h6>Amazon AWS</h6></div></div>";

  pickle.classList.add("active");
}

const wiggleAnimals = () => {
  let mac = document.getElementById("macbook");
  let desc = document.getElementById("proj-desc");

  let pickle = document.getElementById("pickle-link");
  let wiggle = document.getElementById("wiggle-link");
  let bobudget = document.getElementById("bobudget-link");

  if (pickle.classList.contains("active")) {
    pickle.classList.remove("active");
  } else if (bobudget.classList.contains("active")) {
    bobudget.classList.remove("active");
  }

  mac.innerHTML = "<a class='link' target='_blank' href='https://karapliu.github.io/wiggle-animals/'>Visit the Site</a><img src='assets/images/projects/wiggle-animals.gif'>";
  desc.innerHTML = "<p><a target='_blank' href='https://karapliu.github.io/wiggle-animals/'>Wiggle Animals</a> is a fun and interactive website where users can interact with animals through mouse hovers. All animal components are created with HTML5 canvas.</p><div class='tech-n-links'><div class='i-links'><a target='_blank' href='https://karapliu.github.io/wiggle-animals/'><i class='far fa-window-restore'></i></a><a target='_blank' href='https://github.com/karapliu/wiggle-animals'><i class='fab fa-github'></i></a></div><div class='technologies'><h6>Javascript</h6><h6>HTML5 Canvas</h6><h6>SCSS</h6></div></div>";
  wiggle.classList.add("active");
}

const bobudget = () => {
  let mac = document.getElementById("macbook");
  let desc = document.getElementById("proj-desc");

  let pickle = document.getElementById("pickle-link");
  let wiggle = document.getElementById("wiggle-link");
  let bobudget = document.getElementById("bobudget-link");

  if (pickle.classList.contains("active")) {
    pickle.classList.remove("active");
  } else if (wiggle.classList.contains("active")) {
    wiggle.classList.remove("active");
  }

  mac.innerHTML = "<a class='link' target='_blank' href='http://bobudget.herokuapp.com/#/'>Visit the Site</a><img src='assets/images/projects/bobudget.gif'>";
  desc.innerHTML = "<p><a target='_blank' href='http://bobudget.herokuapp.com/#/'>BoBudget</a> is a creative app where users can track their boba spendings. Other functionalities include a boba-themed dashboard, and a search for nearby stores.</p><div class='tech-n-links'><div class='i-links'><a target='_blank' href='http://bobudget.herokuapp.com/#/'><i class='far fa-window-restore'></i></a><a target='_blank' href='https://github.com/karapliu/bobudget-app'><i class='fab fa-github'></i></a></div><div class='technologies'><h6>MongoDB</h6><h6>Express</h6><h6>React</h6><h6>node.js</h6><h6>Amazon AWS</h6></div></div>";
  bobudget.classList.add("active");
}

const openNav = () => {
  let nav = document.getElementById("nav");
  let closeBtn = document.getElementById("close-nav-btn");
  let btn = document.getElementById("nav-btn");

  closeBtn.style.display = "block";
  btn.style.opacity = "0.0";
  nav.style.height = "80px";
}

const closeNav = () => {
  let nav = document.getElementById("nav");
  let btn = document.getElementById("nav-btn");
  let closeBtn = document.getElementById("close-nav-btn");

  closeBtn.style.display = "none";
  btn.style.opacity = "1.0";
  nav.style.height = "0px";
}



