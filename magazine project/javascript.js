const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var tl =gsap.timeline()

tl.to("#page1",{
    y:"100vh",
    scale:0.4,
    duration:0
})

tl.to("#page1",{
   y:"30vh",
   duration:1,
   delay:0.4
})
tl.to("#page1",{
    y: "0vh",
    rotate: 360,
    duration:0.8,
    scale: 1
})
