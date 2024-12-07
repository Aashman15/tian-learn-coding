const changeColorMode = () => {
  const colorMode =
    localStorage.getItem("colorMode") || colorModeFromPreferences();

  const nextColorMode = colorMode === "dark" ? "light" : "dark";

  document.querySelector("body").classList = nextColorMode;

  localStorage.setItem("colorMode", nextColorMode);

  loadSources(nextColorMode);
};

const loadSources = (colorMode) => {
  const elementsForDarkMode = document.getElementsByClassName("dark-source");
  const elementsForLightMode = document.getElementsByClassName("light-source");

  if (colorMode === "dark") {
    for (let i = 0; i < elementsForDarkMode.length; i++) {
      elementsForDarkMode[i].classList.add("display-inline");
      elementsForDarkMode[i].classList.remove("display-none");
    }

    for (let i = 0; i < elementsForLightMode.length; i++) {
      elementsForLightMode[i].classList.remove("display-inline");
      elementsForLightMode[i].classList.add("display-none");
    }
  } else {
    for (let i = 0; i < elementsForDarkMode.length; i++) {
      elementsForDarkMode[i].classList.add("display-none");
      elementsForDarkMode[i].classList.remove("display-inline");
    }
    for (let i = 0; i < elementsForLightMode.length; i++) {
      elementsForLightMode[i].classList.add("display-inline");
      elementsForLightMode[i].classList.remove("display-none");
    }
  }
};

const colorModeFromPreferences = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const loadColorMode = () => {
  const colorMode =
    localStorage.getItem("colorMode") || colorModeFromPreferences();
  document.querySelector("body").classList = colorMode;

  loadSources(colorMode);
};

loadColorMode();

const colorModeButton = document.getElementById("colorModeButton");
colorModeButton.onclick = changeColorMode;
