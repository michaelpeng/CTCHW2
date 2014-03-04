$(document).ready(function(){ 
 //INSERT CODE HERE
 console.log("JS loaded");
 //QUESTION 1
 function Dog() {}

 Dog.prototype.bark = function () {
  return "woof";
 };

 var ShibaInu = function() {
  Dog.call(this);
 };

 ShibaInu.prototype = new Dog();

 ShibaInu.prototype.constructor = ShibaInu;

 ShibaInu.prototype.bark = function () {
 	return "much wow very javascript";
 }

 //QUESTION 3
$( ".button.secondbutton" ).click(function(){
	$( ".secondheading" ).css("color", "turquoise");
})


 //QUESTION 4
 $( ".button#task4").click(function(){
 	$("#hipcat").css({'-webkit-filter': 'blur(3px) sepia(50%)'});
 })

 //QUESTION 5
$( ".car .button").click(function(){
	$(".spincar .wheel").css('-webkit-animation-name', 'spin')
	$(".spincar").css('-webkit-animation-play-state', 'running')
	$(".spincar .wheel").css('-webkit-animation-play-state', 'running')

})
 //QUESTION 6
$(".nyancat").animate({
	left: '+=5000'
 }, 15000)

$(".rainbows").animate({
	width: '5000',
 }, 15000)

});