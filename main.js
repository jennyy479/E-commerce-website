// $(document).ready(function(){
//     $("#fullpage").fullpage({
//         anchors: ["firstpage", "secondpage", "thirdpage"],
//         menu: "#menu",
//         autoScrolling: false
//     })
// })
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: "#section2"
})

.setTween("#bg img", {
    maxWidth: "800px",
    top:"90%",
    left:"80%",
    opacity: 0.95,
})

.addTo(controller);

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: "#section2", // 觸發點的元素選擇器
  duration: 600 // 持續時間
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