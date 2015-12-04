var meter = 0;
var bpm = 80;
var division = 4;
var soundID = "Thunder";
$(".bpm").html(bpm);

$(document).ready(function() {
function loadSound() {
  createjs.Sound.registerSound("https://raw.githubusercontent.com/prkassel/metronome/master/sounds/woodblock.mp3", soundID);
}

function metronome(bpm) {
  $("#startMet").addClass("hidden");
  $("#stopMet").removeClass("hidden");
  var milliSec = (60 / bpm) * 1000;
  var beatTime = function() {
    $(".bpm").toggleClass("red");
     createjs.Sound.play(soundID);
      
  };
    var speed = window.setInterval(beatTime, milliSec);
  $("#stopMet").click(function() {
    clearInterval(speed);
    $("#startMet").removeClass("hidden");
    $("#stopMet").addClass("hidden");
  });
}

$("#startMet").click(function(){
    metronome(bpm);
  });
  
  loadSound();
  $("#faster").click(function() {
    bpm = bpm + 1;
    $(".bpm").html(bpm);
    return bpm;
  });
  $("#slower").click(function() {
    bpm = bpm - 1;
    $(".bpm").html(bpm);
    return bpm;
  });
});