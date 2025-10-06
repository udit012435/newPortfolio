
// Dark mode toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const images = [
  "./images/img-1.jpg",
  "./images/img-2.jpg",
  "./images/img-3.jpg",
  "./images/img-4.jpg"
];

let current = 0;
const hero = document.querySelector(".hero");

setInterval(() => {
  current = (current + 1) % images.length;
  hero.style.setProperty("--bg-image", `url(${images[current]})`);
  
  // Update the pseudo-element background via inline style
  hero.querySelector("style")?.remove(); // remove any previous style tag

  const styleTag = document.createElement("style");
  styleTag.textContent = `
    .hero::before {
      background: 
        linear-gradient(135deg, rgba(45, 55, 101, 0.7), rgba(45, 55, 101, 0.7)),
        url("${images[current]}") center/cover no-repeat;
    }
  `;
  document.head.appendChild(styleTag);
}, 4000); // change every 4 seconds

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Update icon and save preference
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Observe skill cards
document.querySelectorAll('.skill-card').forEach((card, index) => {
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150);
            }
        });
    }, observerOptions);
    cardObserver.observe(card);
});

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach((item, index) => {
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 200);
            }
        });
    }, observerOptions);
    timelineObserver.observe(item);
});

// Observe project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150);
            }
        });
    }, observerOptions);
    projectObserver.observe(card);
});
