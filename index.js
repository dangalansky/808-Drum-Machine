$("#menu").click(function () 
{
  const body = $("body")

  $(this).attr("src").includes("dark") ?
  $(this).attr("src", "./images/light.svg")
  :
  $(this).attr("src", "./images/dark.svg")

  body.toggleClass("dark-mode")
})

$("button").click(function() 
{
  let buttonText = $(this).attr("class")[0];
  playSound(buttonText);
  buttonPressed(buttonText);
});

$(document).keydown(function(event) 
{
  playSound(event.key);
  buttonPressed(event.key);
});

function playSound(key) 
{
  switch (key) 
  {
    case "a":
      let kick = new Audio('sounds/kick.mp3');
      kick.play();
      break;
      
    case "s":
      let snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "d":
      let hihat = new Audio('sounds/hihat.mp3');
      hihat.play();
      break;

    case "j":
      let clap = new Audio('sounds/clap.mp3');
      clap.play();
      break;

    case "k":
      let clink = new Audio('sounds/clink.mp3');
      clink.play();
      break;

    case "l":
      let cymbal = new Audio('sounds/cymbal.mp3');
      cymbal.play();
      break;
  }
}

function buttonPressed(key) 
{
  let activeButton = document.querySelector("." + key);
  let validButtons = ['a', 's', 'd', 'j', 'k', 'l']
  
  if (validButtons.includes(key))
    activeButton.classList.add("pressed");
  setTimeout(function() 
  {
    if (validButtons.includes(key))
      activeButton.classList.remove("pressed");
  }, 150);
}
