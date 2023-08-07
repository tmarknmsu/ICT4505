document.addEventListener("click", function (event) {
  // Checking if the button was clicked
  if (!event.target.matches("#button")) return;
    console.log("buttonClicked");
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => renderDog(data));

});

function renderDog(data) {
  const dogPicture = document.getElementById("dogPic");
  dogPicture.src=data.message;
}