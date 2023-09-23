const renderPlayers = async () => {
  const response = await fetch("/players");
  console.log(response);
  const data = await response.json();
  console.log(data);
  const mainContent = document.getElementById("main-content");

  if (data) {
    data.map((player) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const topContainer = document.createElement("div");
      topContainer.classList.add("top-container");

      const bottomContainer = document.createElement("div");
      bottomContainer.classList.add("bottom-container");

      topContainer.style.backgroundImage = `url(${player.image})`;

      const name = document.createElement("h3");
      name.textContent = player.name;
      bottomContainer.appendChild(name);

      const ranking = document.createElement("p");
      ranking.textContent = "Ranking: " + player.ranking;
      bottomContainer.appendChild(ranking);

      const country = document.createElement("p");
      country.textContent = "Country: " + player.country;
      bottomContainer.appendChild(country);

      const link = document.createElement("a");
      link.textContent = "Read More >";
      link.href = `/gifts/${player.id}`;
      bottomContainer.appendChild(link);

      card.appendChild(topContainer);
      card.appendChild(bottomContainer);

      mainContent.appendChild(card);
    });
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Gifts Available 😞";
    mainContent.appendChild(message);
  }
};

renderPlayers();
