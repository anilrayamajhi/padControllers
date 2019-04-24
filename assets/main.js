var sounds = [];
var soundLoop = '';


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
  }
  $(`#pad-${e.keyCode}`).fadeOut(20).fadeIn(20);
});

$('.key-pad').click(function (e) {
  e = e || window.event;
  var keyCode = $(this).attr('value');

  var audio = new Audio(`sounds/sounds/${keyCode}.wav`);
  audio.play();
  $(`#pad-${keyCode}`).fadeOut(20).fadeIn(20);
});

$('#play-loop').click(function(e){

  var thisSelector = $(this);
  // var sound = thisSelector.data('type');
  var sample = thisSelector.attr('id');
  var selectedLoop = $(`#select_loop`).val();

  if(!thisSelector.hasClass('disabled')){
    var audio = new Audio(`sounds/samples/${selectedLoop}.wav`);
    audio.volume = 0.7;
    audio.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    }, false);

    audio.play();
    soundLoop = audio;
  }
  thisSelector.addClass('disabled');
})

$('#stop-loop').click(function(e){
  $(`#play-loop`).removeClass('disabled');

  var audio = soundLoop;

  audio.pause();
})
