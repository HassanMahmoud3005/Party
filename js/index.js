/// <reference types="../@types/jquery" />

$(".open, .op").on("click", function () {
  $(".bar").animate({ width: "show" }, 500);
});

$(".close ").on("click", function () {
  $(".bar").animate({ width: "hide" }, 500);
});

let mainTitle = $(".mainTitle");
mainTitle.eq(0).on("click", function () {
  $(".explan").eq(0).slideToggle(500);
  $(".explan").eq(0).siblings("p").slideUp();
});

mainTitle.eq(1).on("click", function () {
  $(".explan").eq(1).slideToggle(500);
  $(".explan").eq(1).siblings("p").slideUp();
});

mainTitle.eq(2).on("click", function () {
  $(".explan").eq(2).slideToggle(500);
  $(".explan").eq(2).siblings("p").slideUp();
});

mainTitle.eq(3).on("click", function () {
  $(".explan").eq(3).slideToggle(500);
  $(".explan").eq(3).siblings("p").slideUp();
});

$(".day").text("30");
$(".hour").text("24");
$(".min").text("60");
$(".sec").text("60");

$(".hour , .min , .sec,.day").css(
  "cssText",
  `
font-size:50px;
margin-inline:10px;
color:white;
`
);

let dayNum = Number($(".day").text());
let hourNum = Number($(".hour").text());
let minNum = Number($(".min").text());
let secNum = Number($(".sec").text());

setInterval(function () {
  secNum--;
  $(".sec").text(secNum);
  $(".min").text(minNum);
  $(".hour").text(hourNum);
  if (secNum < 1) {
    secNum = 60;
    minNum--;
  }

  if (minNum < 1) {
    minNum = 60;
    hourNum--;
  }
  if (hourNum < 1) {
    hourNum = 24;
    dayNum--;
  }
  if (dayNum < 1) {
    dayNum = 30;
  }
}, 1000);

var area = $(".area");
var areaVal = area.val();
var numberDown = $(".numberDown");
var numberCount = Number($(".numberDown").text());





area.on("input", function () {
  $(".numberDown").text(numberCount);
  if(areaVal++) {
    numberCount--;
  }
  if(areaVal-1) {
    numberDown.text(100 - area.val().length)
  }
    if(numberCount < 1){
      numberDown.text("your available character finished");
    }

  

});




window.addEventListener("scroll" , ()=>{
  if(window.scrollY > 550){
    document.getElementById("oppo").style.opacity = "0"
  }else{
    document.getElementById("oppo").style.opacity = "1"

  }
})



