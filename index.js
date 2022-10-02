// печатный текст в секции #developer
let i = 0;
let speed = 70; // Скорость/длительность эффекта в миллисекундах 
let typingMessage = document.getElementById("typing");
let txt = typingMessage.dataset.typedItems; // Текст
function typeWriter() {
  if (i < txt.length) {
    typingMessage.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function typeWriter2() {
  setTimeout(typeWriter, 500)
};
typeWriter2();

// навигация мобильной версии

let mobileNavToogle = document.querySelector(".mobile-nav-toggle");

mobileNavToogle.addEventListener("click", () => {
  let header = document.querySelector("#header");
  header.classList.toggle("--display-block");
});

// плавный переход 

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};

// выделеение активным пункта в nav-menu при скроле страницы

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
let sectionScroll = 0;

function pageScrolling(sectionScroll) {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - sectionScroll) {
      return current = section.getAttribute("id");
    }
  });
  navLinks.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};


var lastScrollTop = 0;

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  if (scrollPosition > lastScrollTop) {
    pageScrolling(100); // downscroll code
  } else {
    pageScrolling(400); // upscroll code
  }
  lastScrollTop = scrollPosition;;
}, false);

// кнопка возврата к началу страницы активная/неактивная

let backtotop = document.querySelector(".back-to-top")
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add('visible')
    } else {
      backtotop.classList.remove('visible')
    }
  }
  window.addEventListener('load', toggleBacktotop);
  window.addEventListener('scroll', toggleBacktotop);
}

// возврат к началу страницы 

backtotop.addEventListener('click', () => {

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})


let projects = document.querySelectorAll('.project');
let projectDescriptions = document.querySelectorAll('.project-description');
let indexOfProject = 0;

function myFunction(event) {
  if (event.target === projects[indexOfProject]) {
    projectDescriptions[indexOfProject].classList.toggle('show-description');
    projects[indexOfProject].classList.toggle('show');
  }
}


function myFunction1(event) {
  if (event.target === projectDescriptions[indexOfProject] || projects[indexOfProject]) {
    projectDescriptions[indexOfProject].classList.add('show-description');
    projects[indexOfProject].classList.add('show');
  }
}
function myFunction2(event) {
  if (!(event.target === projectDescriptions[indexOfProject]) || (projects[indexOfProject])) {
    projectDescriptions[indexOfProject].classList.remove('show-description');
    projects[indexOfProject].classList.remove('show');
  }
}



function index1(event) {
  projects.forEach((project, index) => {
    if (event.target === project) {
      indexOfProject = index;

      projects[indexOfProject].addEventListener('mouseenter', myFunction1);
      projects[indexOfProject].addEventListener('mouseleave', myFunction2);
    }
  })
}
function index2(event) {
  projects.forEach((project, index) => {
    if (event.target === project) {
      indexOfProject = index;
      projects[indexOfProject].addEventListener('touchstart', myFunction);

    }
  })
}

window.addEventListener('mouseover', index1);
window.addEventListener('click', index2);


