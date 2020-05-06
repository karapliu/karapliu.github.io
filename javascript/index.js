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

  mac.innerHTML = "<a id='link' target='_blank' href='https://pickle-gpig-app.herokuapp.com/#/'>Visit the Site</a><img src='assets/images/projects/pickle.gif'>";
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

  mac.innerHTML = "<a id='link' target='_blank' href='https://karapliu.github.io/wiggle-animals/'>Visit the Site</a><img src='assets/images/projects/wiggle-animals.gif'>";
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

  mac.innerHTML = "<a id='link' target='_blank' href='http://bobudget.herokuapp.com/#/'>Visit the Site</a><img src='assets/images/projects/bobudget.gif'>";
  desc.innerHTML = "<p><a target='_blank' href='http://bobudget.herokuapp.com/#/'>BoBudget</a> is a creative app where users can track their boba spendings. Other functionalities include a boba-themed dashboard, and a search for nearby stores.</p><div class='tech-n-links'><div class='i-links'><a target='_blank' href='http://bobudget.herokuapp.com/#/'><i class='far fa-window-restore'></i></a><a target='_blank' href='https://github.com/karapliu/bobudget-app'><i class='fab fa-github'></i></a></div><div class='technologies'><h6>MongoDB</h6><h6>Express</h6><h6>React</h6><h6>node.js</h6><h6>Amazon AWS</h6></div></div>";
  bobudget.classList.add("active");
}

const openNav = () => {
  let nav = document.getElementById("nav");
  let body = document.getElementById("body-container");
  let btn = document.getElementById("nav-btn");
  let sideLinks = document.getElementById("side-links");

  btn.style.opacity = "0.0";
  
  nav.style.width = "inherit";
  body.style.marginLeft = "300px";
  sideLinks.style.opacity = "0.0";
}

const closeNav = () => {
  let nav = document.getElementById("nav");
  let body = document.getElementById("body-container");
  let btn = document.getElementById("nav-btn");
  let sideLinks = document.getElementById("side-links");

  btn.style.opacity = "1.0";
  nav.style.width = "0px";
  body.style.marginLeft = "auto";
  sideLinks.style.opacity = "1.0";
}