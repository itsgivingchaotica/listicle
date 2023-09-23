const header = document.querySelector("header");
const headerContainer = document.createElement("div");
headerContainer.className = "header-container";

const headerLeft = document.createElement("div");
headerLeft.className = "header-section header-left";

const headerLogo = document.createElement("img");
headerLogo.className = "header-logo";
headerLogo.src = "/wtaelite.png";

const headerTitle = document.createElement("div");
headerTitle.className = "header-section header-title";
headerTitle.textContent = "Top 10 Players";

headerLeft.appendChild(headerLogo);

const headerRight = document.createElement("div");
headerRight.className = "header-section header-right";

const headerButton = document.createElement("Button");
headerButton.className = "button";
headerButton.textContent = "Show All";

headerButton.addEventListener("click", function handleClick(event) {
  window.location = "/";
});

headerRight.appendChild(headerButton);

headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerTitle);
headerContainer.appendChild(headerRight);

header.appendChild(headerContainer);
