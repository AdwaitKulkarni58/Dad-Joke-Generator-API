let request = new XMLHttpRequest();

let btn = document.querySelector("#btn");
btn.addEventListener("click", generateJoke);

function generateJoke() {
  request.onload = function () {
    let data = JSON.parse(this.responseText);
    let joke = data.joke;
    document.querySelector(".joke").innerHTML = joke;
  };
  request.onerror = function () {
    console.log("Request unsuccessful");
  };

  request.open("GET", "https://icanhazdadjoke.com/");

  request.setRequestHeader("Accept", "application/json");

  request.send();
}
