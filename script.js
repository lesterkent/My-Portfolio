// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const icon = document.getElementById('theme-icon');
  icon.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
// script.js
const bubbleContainer = document.querySelector('.bubbles-container');

for(let i = 0; i < 15; i++){
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.style.left = Math.random() * 100 + 'vw';
  bubble.style.width = 10 + Math.random() * 50 + 'px';
  bubble.style.height = bubble.style.width;
  bubble.style.animationDuration = 10 + Math.random() * 10 + 's';
  bubble.style.background = `rgba(67,97,238,${0.2 + Math.random()*0.3})`;
  bubbleContainer.appendChild(bubble);
}


// Scroll Reveal
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if(elTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


// Back to Top
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if(window.scrollY > 400) backToTop.style.display = 'block';
  else backToTop.style.display = 'none';
});
backToTop.addEventListener('click', () => {
  window.scrollTo({top:0, behavior:'smooth'});
});

// Profile clock
const timeEl = document.getElementById('time');
setInterval(() => {
  const now = new Date();
  timeEl.textContent = now.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
}, 1000);
const skills = {
  tech: ["HTML", "CSS", "GitHub", "Vue.js", "JavaScript", "Tailwind", "Bootstrap", "Angular"],
  tools: ["MS Word", "Excel", "Canva", "Figma"],
  softSkills: ["Teamwork", "Creativity", "Adaptability", "Multitasking", "Collaboration", "Problem Solving"]
};
