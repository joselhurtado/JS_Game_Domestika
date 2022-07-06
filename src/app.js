var cardsGroup = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];

var totalCards = cardsGroup.concat(cardsGroup);

function mixAllCards() {
  var result;
  result = totalCards.sort(function() {
    return 0.5 - Math.random();
  });
  return result;
}

function cardsDealer() {
  var table = document.querySelector("#table");
  var mixCards = mixAllCards();
  table.innerHTML = "";

  mixCards.forEach(function(emoji) {
    var singleCard = document.createElement("div");

    singleCard.innerHTML =
      "<div class='singleCard'>" +
      "<div class='card_Content'>" +
      emoji +
      "</div>" +
      "</div>";

    table.appendChild(singleCard);
  });
}

function flipCard() {
  this.classList.add("flip");
}

cardsDealer();

document.querySelectorAll(".singleCard").forEach(function(emoji) {
  emoji.addEventListener("click", flipCard);
});
