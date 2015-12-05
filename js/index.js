var bpm = 80;
var meter = 4;
var division = 4;
var soundID="woodblock";
var downbeat="woodblock1";
var scrolling="scrolling";
var count = 1;
var playing;

$(document).ready(function() {

$(".bpm").html(bpm);
$(".count").html(count);
$(".meter").html(meter + " / 4");


$( "#slider" ).slider({
      range: "min",
      value: 80,
      min: 30,
      max: 200,
      slide: function( event, ui ) {
        bpm = ui.value;
        $( ".bpm" ).html(ui.value);
        if (playing) {
          clearInterval(playing);
          metronome(bpm, meter, count);
          }
        return bpm;
      }
    });

function loadSound() {
  createjs.Sound.registerSound("https://raw.githubusercontent.com/prkassel/metronome/master/sounds/woodblock.mp3", downbeat);
  
 createjs.Sound.registerSound("https://raw.githubusercontent.com/prkassel/metronome/master/sounds/woodblock1.mp3", soundID);

createjs.Sound.registerSound("../sounds/scroll.mp3", scrolling);
}
  
function metronome(bpm, meter, count) {
  var milliSec = (60 / bpm) * 1000;
  $("#startMet").addClass("hidden");
  $("#stopMet").removeClass("hidden");
  
  var beatTime = function() {
     $(".count").html(count);
    if (count == 1) {
      createjs.Sound.play(downbeat);
    }
    else {
     createjs.Sound.play(soundID);
    }
    if (count == meter) {
      count = (count - meter) + 1;
    }
    else if (count < meter) {
      count ++;
    }
  };
   playing = window.setInterval(beatTime, milliSec);
  $("#stopMet").click(function() {
    clearInterval(playing);
    playing = false;
    $("#startMet").removeClass("hidden");
    $("#stopMet").addClass("hidden");
  });
}

$("#startMet").click(function(){
    metronome(bpm, meter, count);
  });
  
  
  $("#lessMeter").click(function() {
    if(meter > 1) {
    meter = meter - 1;
    $(".meter").html(meter + " / 4");
    if (playing) {
          clearInterval(playing);
          metronome(bpm, meter, count);
          }
    return meter;
    }
  });
  
  $("#addMeter").click(function() {
   if(meter < 7) {
    meter = meter + 1;
    $(".meter").html(meter + " / 4");
    if (playing) {
          clearInterval(playing);
          metronome(bpm, meter, count);
          }
    return meter;
   }
  });

  loadSound();
  
});