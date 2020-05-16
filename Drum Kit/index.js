Array.from(document.querySelectorAll("button.drum")).map((btn) => {
  btn.addEventListener("click", handleEvent);
  btn.addEventListener("keydown", handleEvent);
});

function handleEvent(event) {
  var audio;
  switch (event.key || event.target.innerHTML) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "j":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    case "k":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    case "l":
      audio = new Audio("sounds/crash.mp3");
      break;
  }
  audio.play();

  if (document.querySelector(".pressed"))
    document.querySelector(".pressed").classList.toggle("pressed");
  event.target.classList.add("pressed");
}
