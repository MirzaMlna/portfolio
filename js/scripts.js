// Untuk Animasi Typewriter Di Hero Section
document.addEventListener("DOMContentLoaded", function () {
  const texts = ["Front End Developer", "Freelancer"];
  let currentTextIndex = 0;
  let currentCharIndex = 0;
  const speed = 100;
  const pauseBetween = 1000;
  const typewriter = document.getElementById("typewriter");

  function typeWriter() {
    if (currentCharIndex < texts[currentTextIndex].length) {
      typewriter.innerHTML += texts[currentTextIndex].charAt(currentCharIndex);
      currentCharIndex++;
      setTimeout(typeWriter, speed);
    } else {
      setTimeout(deleteWriter, pauseBetween);
    }
  }

  function deleteWriter() {
    if (currentCharIndex > 0) {
      typewriter.innerHTML = texts[currentTextIndex].substring(
        0,
        currentCharIndex - 1
      );
      currentCharIndex--;
      setTimeout(deleteWriter, speed);
    } else {
      currentTextIndex = (currentTextIndex + 1) % texts.length;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});

// * About
const homeSection = document.querySelector(".home-section");

const homeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        homeSection.classList.add("in-view");
      } else {
        homeSection.classList.remove("in-view");
      }
    });
  },
  {
    root: null,
    threshold: 0,
  }
);

homeObserver.observe(homeSection);

// * about
const aboutSection = document.querySelector(".about-section");

const aboutObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        aboutSection.classList.add("in-view");
      } else {
        aboutSection.classList.remove("in-view");
      }
    });
  },
  {
    root: null,
    threshold: 0,
  }
);

aboutObserver.observe(aboutSection);

// * resume
const resumeSection = document.querySelector(".resume-section");

const resumeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        resumeSection.classList.add("in-view");
      } else {
        resumeSection.classList.remove("in-view");
      }
    });
  },
  {
    root: null,
    threshold: 0,
  }
);

resumeObserver.observe(resumeSection);

// * certificate
const certificateSection = document.querySelector(".certificate-section");

const certificateObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        certificateSection.classList.add("in-view");
      } else {
        certificateSection.classList.remove("in-view");
      }
    });
  },
  {
    root: null,
    threshold: 0,
  }
);

certificateObserver.observe(certificateSection);

// * project
const projectSection = document.querySelector(".project-section");

const projectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        projectSection.classList.add("in-view");
      } else {
        projectSection.classList.remove("in-view");
      }
    });
  },
  {
    root: null,
    threshold: 0,
  }
);

projectObserver.observe(projectSection);
