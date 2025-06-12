// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    for (let el of reveals) {
        const windowHeight = window.innerHeight;
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 100) {
            el.classList.add('visible');
        }
    }
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Dark mode toggle
const toggleBtn = document.getElementById('toggleTheme');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
// Contoh animasi fade in saat halaman load
window.addEventListener('load', () => {
  const icons = document.querySelectorAll('.social-icon');
  icons.forEach((icon, index) => {
    setTimeout(() => {
      icon.style.opacity = '1';
      icon.style.transform = 'translateY(0)';
    }, index * 100);
  });
});

function changeImage(element) {
  const preview = document.getElementById('preview');
  preview.src = element.src;
}