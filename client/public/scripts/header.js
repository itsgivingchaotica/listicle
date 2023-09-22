const header = document.querySelector("header");
const headerContainer = document.createElement("div");
headerContainer.className = "header-container";

const headerLeft = document.createElement("div");
headerLeft.className = "header-left";

const headerLogo = document.createElement("img");
headerLogo.className = "header-logo";
headerLogo.src = "/wtaelite.png";

const headerTitle = document.createElement("h1");
headerTitle.className = "header-title";
headerTitle.textContent = "Top 10 Players";

headerLeft.appendChild(headerLogo);
headerLeft.appendChild(headerTitle);

const headerRight = document.createElement("div");
headerRight.className = "header-right";

const headerButton = document.createElement("Button");
headerButton.className = "button";
headerButton.textContent = "Show All";

headerButton.addEventListener("click", function handleClick(event) {
  window.location = "/";
});

headerRight.appendChild(headerButton);

headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);

header.appendChild(headerContainer);
