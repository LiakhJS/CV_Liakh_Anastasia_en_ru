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


let project = document.querySelector('.project');
function myFunction(event) {
  if (event.target === project && (document.querySelector('.project-description').style.display = 'flex')) {
    document.querySelector('.project-description').style.display = 'none';
  }
  else
    if (event.target === project) {
      document.querySelector('.project-description').style.display = 'flex';
    }
}
project.addEventListener('touchend', myFunction);


