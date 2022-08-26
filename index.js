$("button").click(function() {

  var buttonText = $(this).attr("class")[0];
  playSound(buttonText);
  buttonPressed(buttonText);

});

$(document).keydown(function(event) {

  playSound(event.key);
  buttonPressed(event.key);

});

function playSound(key) {

  switch (key) {

    case "a":
      var kick = new Audio('sounds/kick.mp3');
      kick.play();
      break;

    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "d":
      var hihat = new Audio('sounds/hihat.mp3');
      hihat.play();
      break;

    case "j":
      var clap = new Audio('sounds/clap.mp3');
      clap.play();
      break;

    case "k":
      var clink = new Audio('sounds/clink.mp3');
      clink.play();
      break;

    case "l":
      var cymbal = new Audio('sounds/cymbal.mp3');
      cymbal.play();
      break;

    default:
      console.log(key);

  }
}

function buttonPressed(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
