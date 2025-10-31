gsap.registerPlugin(ScrollTrigger);

gsap.to("#page2 h1", {
  xPercent: -180,
  ease: "none",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top top",
    end: "top -200%",
    scrub: 2,
    pin: true,
    anticipatePin: 1,
    pinSpacing: true,
    markers: true,
  },
});