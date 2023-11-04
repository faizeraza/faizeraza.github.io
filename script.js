const shadows = document.querySelectorAll('.shadowz');
  shadows.forEach(shadow => {
    shadow.addEventListener('mousemove', (event) => {
    const x = event.clientX - shadow.offsetLeft;
    const y = event.clientY - shadow.offsetTop;

    shadow.style.transform = `rotateX(${y / 50}deg) rotateY(${x / 50}deg)`;
    shadow.style.boxShadow = `${x / 5}px ${y / 5}px 10px rgba(43, 56, 76, 0.09)`;
  });

  shadow.addEventListener('mouseout', () => {
    shadow.style.transform = '';
    shadow.style.boxShadow = '0px 24px 116px rgba(43, 56, 76, 0.09)'
  });
});