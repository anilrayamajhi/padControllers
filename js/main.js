var sounds = [];


$('body').on("keypress", function (e) {
  e.preventDefault();
  e = e || window.event;
  if(e.keyCode == 32){
    $.each(sounds, function(key, el){
      el.pause();
    })
  }else{
    var audio = new Audio(`sounds/sounds/${e.keyCode}.wav`);
    sounds.push(audio);
    audio.play();
    $(`#pad-${e.keyCode}`).fadeOut(20).fadeIn(20);
  }
});

$('body').on("click", '.key-pad', function (e) {
  e = e || window.event;
  var keyCode = $(this).attr('value');

  var audio = new Audio(`sounds/808/${keyCode}.wav`);
  audio.play();
  $(`#pad-${keyCode}`).fadeOut(20).fadeIn(20);
});

$('body').on('click', '[id^=play-loop-]', function(e){

  var thisSelector = $(this);
  var sound = thisSelector.data('type');
  var sample = thisSelector.attr('id');
  var selectedLoop = $(`#select_${sound}`).val();

  if(!thisSelector.hasClass('disabled')){
    var audio = new Audio(`sounds/samples/${sound}/${selectedLoop}.wav`);
    audio.volume = 0.7;
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

  audio.pause();
})
