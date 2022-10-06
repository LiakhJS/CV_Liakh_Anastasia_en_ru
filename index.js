// animation on scroll

const animItems = document.querySelectorAll('.anim-item');
if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
        animItem.classList.add('active-anim');
      } else {
        animItem.classList.remove('active-anim');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.scrollY || document.documentElement.scrollLeft,
      scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  setTimeout(() => {
    animOnScroll();
  }, 100);

}

// typeWriterWithDelay 

let i = 0;
let speed = 70;
let typingMessage = document.getElementById("typing-text");
let txt = typingMessage.dataset.typedItems;

function typeWriter() {
  if (i < txt.length) {
    typingMessage.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function typeWriterWithDelay() {
  setTimeout(typeWriter, 500)
};

typeWriterWithDelay();

// mobile navigation menu become visible

let mobileNavToogle = document.querySelector(".mobile-nav-toggle");

mobileNavToogle.addEventListener("click", () => {
  let header = document.querySelector("#header");
  header.classList.toggle("display-block");
});

// link's smooth behavior 

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const link = smoothLink.getAttribute('href');
    document.querySelector(link).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};

// back-to-top button

let backtotop = document.querySelector(".back-to-top")
backtotop.addEventListener('click', () => {

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

// back-to-top button visible/hidden


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

// active nav-link while page is scrolling

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
let sectionScroll = 0;
var lastScrollTop = 0;

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
      header.classList.remove("display-block");
    }
  });
};

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  if (scrollPosition > lastScrollTop) {
    pageScrolling(500); // downscroll code
  } else {
    pageScrolling(400); // upscroll code
  }
  lastScrollTop = scrollPosition;;
}, false);

// show project description 

let projects = document.querySelectorAll('.project');
let projectDescriptions = document.querySelectorAll('.project-description');
let indexOfProject = 0;

function onTouchstartShowDescriptionFunction(event) {
  if (event.target === projects[indexOfProject]) {
    projectDescriptions[indexOfProject].classList.toggle('show-description');
    projects[indexOfProject].classList.toggle('show');
  }
}

function onMouseenterShowDescriptionFunction(event) {
  if (event.target === projectDescriptions[indexOfProject] || projects[indexOfProject]) {
    projectDescriptions[indexOfProject].classList.add('show-description');
    projects[indexOfProject].classList.add('show');
  }
}

function onMouseleaveShowDescriptionFunction(event) {
  if (!(event.target === projectDescriptions[indexOfProject]) || (projects[indexOfProject])) {
    projectDescriptions[indexOfProject].classList.remove('show-description');
    projects[indexOfProject].classList.remove('show');
  }
}

function showDescriptionOfProjectDesctopV(event) {
  projects.forEach((project, index) => {
    if (event.target === project) {
      indexOfProject = index;
      projects[indexOfProject].addEventListener('mouseenter', onMouseenterShowDescriptionFunction);
      projects[indexOfProject].addEventListener('mouseleave', onMouseleaveShowDescriptionFunction);
    }
  })
}

function showDescriptionOfProjectDesctopM(event) {
  projects.forEach((project, index) => {
    if (event.target === project) {
      indexOfProject = index;
      projects[indexOfProject].addEventListener('touchstart', onTouchstartShowDescriptionFunction);

    }
  })
}

window.addEventListener('mouseover', showDescriptionOfProjectDesctopV);
document.querySelector('.projects-container').addEventListener('touchstart', showDescriptionOfProjectDesctopM);

//scalable certificate images

let certificateImages = document.querySelectorAll('.scalable-image>img');
let resumeItemScaleBlock = document.querySelector('.resume-image-scale');
const mediaQuery640 = window.matchMedia('(max-width: 640px)');
const mediaQuery1550 = window.matchMedia('(min-width: 1550px)');

function changeScale(event) {
  if (mediaQuery640.matches) {
    return;
  } else if (mediaQuery1550.matches) {
    return;
  } else {
    if (event.target === certificateImages[0]) {
      certificateImages[0].classList.toggle('scale');
    } else if (event.target === certificateImages[1]) {
      certificateImages[1].classList.toggle('scale');
    }
  }
}
resumeItemScaleBlock.addEventListener('click', changeScale);
resumeItemScaleBlock.addEventListener('touchstart', changeScale);


  if(mediaQuery640) {
    window.addEventListener("orientationchange", ()=> {
    document.querySelector('#developer .developer-container').classList.toggle('landscape');
    document.querySelector('#developer').classList.toggle('landscape');
  })
} 
if (mediaQuery640) {
  window.addEventListener("orientationchange", () => {
    document.querySelector('#developer').classList.toggle('display-landscape');
    document.querySelector('header').classList.toggle('landscape');
    document.querySelector('.developer-container').classList.toggle('landscape');
    document.querySelector('.mobile-nav-toggle').classList.toggle('landscape');
    document.querySelector('#resume').classList.toggle('landscape');
    document.querySelector('#projects').classList.toggle('landscape');
    document.querySelector('footer').classList.toggle('landscape');
  })
}