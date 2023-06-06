// $(document).ready(function(){
//     $("#fullpage").fullpage({
//         anchors: ["firstpage", "secondpage", "thirdpage"],
//         menu: "#menu",
//         autoScrolling: false
//     })
// })
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: "#section2",
    offset: -300,
})

.setTween("#bg img", {
    maxWidth: "800px",
    top:"90%",
    left:"80%",
    opacity: 1,
    duration: 0.5, // 设置动画的持续时间为0.5秒
})


.addTo(controller);

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: "#section2", // 觸發點的元素選擇器
  duration: 400 // 持續時間
})
.setTween('#bg', {opacity: 0}) // 動作
// .addIndicators() // 可選，用於調試
.addTo(controller);

window.addEventListener('scroll', function(event) {
if ($("#menu").prop('checked')) {
    event.preventDefault();
    window.scrollTo(0, 0);
}
});

gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline();
timeline.from('.section3-header h1', {
    leeterSpacing:-10,
    y: -150,
    skewY: 10,
    duration: 15,
})

ScrollTrigger.create({
    trigger: '.section3-header h1',
    start: 'top center', // 触发滚动动画的位置
    animation: timeline,
    once: false, // 只触发一次动画
  });

