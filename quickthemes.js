window.addEventListener('load', function() {
  console.log("Loaded QuickThemes");
});

function addCss(styleSheet) {
  const head = document.head;
  const link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = styleSheet;

  head.appendChild(link);
}

const retrowave = chrome.extension.getURL("themes/retrowave/retrowave.css");
addCss(retrowave);
