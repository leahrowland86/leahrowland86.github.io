function nameGame() {
  var response;
  var person = prompt("Please enter your name:", "Sherlock Holmes");
  if (person == null || person == "") {
    response = "Aww, man :( Want to try again?";
  } else {
    response = "Hi " + person + "! Thanks for trying my prompt!";
  }
  document.getElementById("game").innerHTML = response;
}

function textChange() {
  document.getElementById("try").innerHTML = "Paragraph changed!";
}
