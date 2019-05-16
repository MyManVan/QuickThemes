function addCss(styleSheet) {
  const head = document.head;
  const link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = styleSheet;

  head.appendChild(link);
}
/*THEMES*/
const retrowaveYoutube = chrome.extension.getURL("themes/retrowave/youtube.css");
const retrowaveSpotify = chrome.extension.getURL("themes/retrowave/spotify.css");
const logStyles = [
    'background: linear-gradient(#FFA1F1, #258EA6)'
    , 'border: 1px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'padding: 25px'
].join(';');



/*ONLOAD*/
window.addEventListener('load', function() {
  console.log("Loaded QuickThemes" + document.URL);
  if (document.URL == "https://www.youtube.com/") {
      addCss(retrowaveYoutube);
      console.log('%c QuickThemes Loaded. Enjoy!', logStyles);
  } else if (document.URL == "https://open.spotify.com/" || "https://play.spotify.com") {
      addCss(retrowaveSpotify);
      console.log('%c QuickThemes Loaded. Enjoy!', logStyles);
  }
});
