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
const cursors = document.querySelectorAll('.cursor');
let dimentions = [[50,50],[30,10],[10,30],[5,95]]
document.addEventListener('mousemove', (e) => {
  for(var i=0;i<cursors.length;i++){
    cursors[i].style.top = `${e.pageY - 10}px`;
    cursors[i].style.left = `${e.pageX - 10}px`;
    cursors[i].style.display = 'block';
  }
});

document.addEventListener('mouseout', () => {
  for(var i=0;i<cursors.length;i++){
    cursors[i].style.top = `${dimentions[i][0]}%`;
    cursors[i].style.left = `${dimentions[i][1]}%`;
    cursors[i].style.transform = 'rotate(360deg)';
  }
});
