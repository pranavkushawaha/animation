const intro = document.querySelector(".intro");
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

// END SECTION
const section = document.querySelector('section');
const endtext = section.querySelector('h1');

//SCROLL MAGIC
const controller = new ScrollMagic.Controller();
let scene = new ScrollMagic.Scene({
    duration:7000,
    triggerElement: intro,
    triggerHook:0
})
.setPin(intro)
// .addIndicators()
.addTo(controller); 


//Text Animation

const textAnim = TweenMax.fromTo(text, 3, {opacity:1},{opacity:0});


// const lasttextAnim = TweenMax.fromTo(endtext, 3, {opacity:0},{opacity:1});

let scene2 = new ScrollMagic.Scene({
    duration:3000,
    triggerElement: intro,
    triggerHook:0
})
.setTween(textAnim)
.addTo(controller);

// let scene3 = new ScrollMagic.Scene({
//     duration:3000,
//     triggerElement: endtext,
//     triggerHook:0
// })
// .setTween(lasttextAnim)
// .addTo(controller);
// Video Animation

let accelamount = 0.1;
let scrollpos = 0;
let delay = 1;

scene.on('update', e => {
    scrollpos = e.scrollPos/1000;
     
})

setInterval(() => {
    delay += (scrollpos - delay)*accelamount;
    video.currentTime = delay;
},40);