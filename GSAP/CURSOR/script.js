const main = document.querySelector('#main');
const cursor = document.querySelector('#cursor');

main.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "back.out"
    });
});

// Disable Right Click
window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});