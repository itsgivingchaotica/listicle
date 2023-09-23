import { getCountryCode } from "./countryCodes.js";

const renderPlayer = async () => {
  // Create a URLSearchParams object from the current URL
  const queryParams = new URLSearchParams(window.location.search);

  // Get the 'id' parameter from the query string
  const requestedID = queryParams.get("id");

  // Convert it to an integer if needed
  const requestedIDInt = parseInt(requestedID);
  console.log(requestedID);
  const response = await fetch("/players");
  const data = await response.json();
  console.log(data, "from player.js");
  const playerContent = document.getElementById("player-content");

  let player;

  player = data.find((player) => player.id === requestedIDInt);

  if (player) {
    const imageContainer = document.getElementById("image-container");
    // document.getElementById("image").src = player.image;
    imageContainer.style.backgroundImage = `url(${player.image})`;
    document.getElementById("name").textContent = player.name;
    document.getElementById("currentRanking").textContent =
      "#" + player.ranking;
    document.getElementById("highestRanking").textContent =
      "#" + player.rankingHigh;
    document.getElementById("country").textContent = player.country;
    const flagElement = document.getElementById("flag");
    const country_code = getCountryCode(player.country);
    flagElement.className = `fi fi-${country_code}`;
    document.getElementById("points").textContent = player.points;
    document.getElementById("coach").textContent = player.coach;
    document.getElementById("titles").textContent = player.titles;
    document.getElementById("recentBest").textContent = player.recentBestTitle;
    document.getElementById("description").textContent = player.text;
    document.title = `WTA Elite - ${player.name}`;
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Player Available 😞";
    playerContent.appendChild(message);
  }
};

renderPlayer();
