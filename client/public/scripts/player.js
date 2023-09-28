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
    document.getElementById("name").textContent =
      "#" + player.ranking + " " + player.name;
    const highestRankingLabels = document.getElementsByClassName(
      "highestRankingLabel"
    );
    for (const label of highestRankingLabels) {
      label.textContent = "Career-High: ";
    }
    document.getElementById("highestRanking").textContent =
      "#" + player.rankingHigh;
    const countryLabel = document.getElementsByClassName("countryLabel");
    for (const label of countryLabel) {
      label.textContent = "Plays for: ";
    }
    document.getElementById("country").textContent = player.country;
    const flagElement = document.getElementById("flag");
    const country_code = getCountryCode(player.country);
    flagElement.className = `fi fi-${country_code}`;
    document.getElementById("points").textContent = player.points;
    const rankingPointsLabel = document.getElementsByClassName("pointsLabel");
    for (const label of rankingPointsLabel) {
      label.textContent = "Current Ranking Points: ";
    }
    document.getElementById("coach").textContent = player.coach;
    document.getElementById("titles").textContent = player.titles;
    const titlesLabel = document.getElementsByClassName("titlesLabel");
    for (const label of titlesLabel) {
      label.textContent = "Career Titles: ";
    }
    document.getElementById("recentBest").textContent = player.recentBestTitle;
    const recentBestLabel = document.getElementsByClassName("recentBestLabel");
    for (const label of recentBestLabel) {
      label.textContent = "Recent Best Title: ";
    }
    const coachLabel = document.getElementsByClassName("coachLabel");
    for (const label of coachLabel) {
      label.textContent = "Coach: ";
    }
    // apply border
    const detailsContainer = document.querySelector(".details-container");
    detailsContainer.style.border = "2px solid var(--lime)";
    document.getElementById("description").textContent = player.description;
    document.title = `WTA Elite - ${player.name}`;
  } else {
    const message = document.createElement("h2");
    message.className = "fof-message";
    message.textContent = "Fault! ❌ No Player Found 😞";
    playerContent.appendChild(message);
  }
};

renderPlayer();
