import { getCountryCode } from "./countryCodes.js";

//to store all data from the server
let playerCards;

const filterPlayers = (searchTerm) => {
  playerCards = document.querySelectorAll(".card");
  playerCards.forEach((card) => {
    const playerInfo = JSON.parse(card.dataset.playerInfo);

    //convert all player object values to lowercase for case-insensitive search

    const playerValues = Object.values(playerInfo).map((value) =>
      value.toString().toLowerCase()
    );

    //check to see if any value contains the search term

    const terms = searchTerm.toLowerCase().split(" ");
    const matches = terms.some((term) =>
      playerValues.some((value) => value.includes(term))
    );
    if (matches) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};

//grab search bar
const searchInput = document.getElementById("search");

//begin filtering players from input
searchInput.addEventListener("input", (event) => {
  const searchTerm = event.target.value.trim();
  filterPlayers(searchTerm);
});

const renderPlayers = async () => {
  const response = await fetch("/players");
  let data = await response.json();
  const mainContent = document.getElementById("main-content");

  if (data) {
    //only take the top 10 players from database table 
    //by ranking
    data.slice(0, 10).map((player) => {
      const card = document.createElement("div");
      card.classList.add("card");

      // Store the player object as a data attribute
      card.dataset.playerInfo = JSON.stringify(player);

      const topContainer = document.createElement("div");
      topContainer.classList.add("top-container");

      const bottomContainer = document.createElement("div");
      bottomContainer.classList.add("bottom-container");

      topContainer.style.backgroundImage = `url(${player.image})`;

      // Create flag overlay
      const overlay = document.createElement("span");
      const country_code = getCountryCode(player.country);

      overlay.className = `overlay fi fi-${country_code}`;
      topContainer.appendChild(overlay);

      const name = document.createElement("h3");
      name.textContent = player.name;
      bottomContainer.appendChild(name);

      const ranking = document.createElement("p");
      ranking.textContent = "Ranking: " + player.ranking;
      bottomContainer.appendChild(ranking);

      const country = document.createElement("p");
      country.textContent = "Country: " + player.country;
      bottomContainer.appendChild(country);

      const infoButton = document.createElement("button");
      infoButton.className = "info-button";
      infoButton.textContent = "View Details";
      bottomContainer.appendChild(infoButton);

      infoButton.addEventListener("click", function handleClick(event) {
        window.location.href = `/player.html?id=${player.id}`;
      });

      card.appendChild(topContainer);
      card.appendChild(bottomContainer);

      mainContent.appendChild(card);
    });
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Players Available 😞";
    mainContent.appendChild(message);
  }
};

renderPlayers();
