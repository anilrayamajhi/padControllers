$('body').on("keypress", function (e) {
  e = e || window.event;

  var audio = new Audio(`sounds/808/${e.keyCode}.wav`);
  audio.play();
  $(`#pad-${e.keyCode}`).fadeOut(20).fadeIn(20);
});


var sounds = {};

$('body').on('click', '[id^=play-loop-]', function(e){

  var thisSelector = $(this);
  var sound = thisSelector.data('type');
  var sample = thisSelector.attr('id');
  var selectedLoop = $(`#select_${sound}`).val();

  if(!thisSelector.hasClass('disabled')){
    var audio = new Audio(`sounds/samples/${sound}/${selectedLoop}.wav`);
    audio.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    }, false);

    audio.play();
    sounds[sound] = audio;
  }
  thisSelector.addClass('disabled');
})

$('body').on('click', '[id^=stop-loop-]', function(e){
  var sound = $(this).data('type');

  $(`#play-loop-${sound}`).removeClass('disabled');

  var audio = sounds[sound];
  console.log(sounds);
console.log(audio);
  audio.pause();
})
