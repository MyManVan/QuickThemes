

function addCss(styleSheet) {
  const head = document.head;
  const link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = styleSheet;

  head.appendChild(link);
}

const retrowaveYoutube = chrome.extension.getURL("themes/retrowave/youtube.css");
const retrowaveSpotify = chrome.extension.getURL("themes/retrowave/spotify.css");

window.addEventListener('load', function() {
  console.log("Loaded QuickThemes" + document.URL);
  if (document.URL == "https://www.youtube.com/") {
    addCss(retrowaveYoutube);
  } else if (document.URL == "https://open.spotify.com/" || "https://play.spotify.com") {
    addCss(retrowaveSpotify);
  }
});
