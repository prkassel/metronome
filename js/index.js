var meter = 0
var bpm = 80; 
var division = 4; 
var soundID = "Thunder";
$(".bpm").html(bpm);

$(document).ready(function() {
function loadSound() {
  createjs.Sound.registerSound("http://pkassel.com/sounds/woodblock.mp3", soundID);
}

function metronome(bpm) {
  var milliSec = (60 / bpm) * 1000; 
  var beatTime = function() {
    $(".bpm").toggleClass("red");
     createjs.Sound.play(soundID);

  }
  var speed = window.setInterval(beatTime, milliSec); 

}

$("#startMet").click(function(){
    metronome(bpm); 
  });
  
  loadSound(); 
});