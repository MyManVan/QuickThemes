/*ONLOAD CHECK FOR SPOTIFY AND YOUTUBE*/
window.addEventListener('load', function() {
    chrome.storage.sync.get(['spotify', 'youtube'], function(themes) {
      if (themes.youtube == undefined) {
        chrome.storage.sync.set({'youtube': 'none'}, function(themes) {
          console.log("youtube set");
        });
      } else {
        console.log("Youtube theme already set in google chrome storage");
      }
      if (themes.spotify == undefined) {
        chrome.storage.sync.set({'spotify': 'none'}, function(themes) {
          console.log("spotify set");
        });
      } else {
        console.log("Spotify theme already set in google chrome storage");
      }
    });

});

  chrome.storage.sync.get(['spotify', 'youtube'], function(themes) {
    console.log(themes.youtube + " " + themes.spotify);
  });

function getPathFromUrl(url) {
  return url.split("?")[0];
}

function addCss(styleSheet) {
  var head = document.head;
  var link = document.createElement("link");

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



window.addEventListener('load', function() {
      /*YOUTUBE SPOTIFY LOAD*/
      if (document.URL == "https://www.youtube.com/") {
          chrome.storage.sync.get(['youtube'], function(site) {
            if (site.youtube == 'retrowave') {
              addCss(retrowaveYoutube);
              console.log('%c QuickThemes Loaded. Enjoy!', logStyles);
            } else if (site.youtube == 'none') {
              console.log('%c No Themes :O', logStyles);
            }
          });
      } else if (document.URL == "https://open.spotify.com/" || "https://play.spotify.com") {
          chrome.storage.sync.get(['spotify'], function(site) {
            if (site.spotify == 'retrowave') {
              addCss(retrowaveSpotify);
              console.log('%c QuickThemes Loaded. Enjoy!', logStyles);
            } else if (site.spotify == 'none') {
              console.log('%c No Themes :O', logStyles);
            }
          });
      }
      /*POP UP HTML*/
      let documentNoQuery = getPathFromUrl(document.URL);

      if (documentNoQuery == chrome.extension.getURL("popup.html")) {
        var themeChange = document.getElementById("themeChange");
        var youtubeThemeInput = document.getElementById("youtubeThemeInput");
        var spotifyThemeInput = document.getElementById("spotifyThemeInput");
        /*Sets to already set theme if set*/
        chrome.storage.sync.get(['spotify', 'youtube'], function(items) {
          spotifyThemeInput.value = items.spotify;
          youtubeThemeInput.value = items.youtube;
          console.log("Inputs set to already set values: " + items.spotify + items.youtube)
        });
        console.log("Popup.html detected as current page");

        themeChange.addEventListener('submit', function() {

          if (youtubeThemeInput.value == "retrowave") {
            chrome.storage.sync.set({'youtube': 'retrowave'}, function(items) {
              console.log("youtube set to theme retrowave on form submit");
            });
          } else if (youtubeThemeInput.value == 'none') {
            chrome.storage.sync.set({'youtube': 'none'}, function(items) {
              console.log("youtube set to theme none on form submit");
            });
          } else {
            console.log("ERROR: Youtube theme isnt set to a theme");
          }
          if (spotifyThemeInput.value == "retrowave") {
            chrome.storage.sync.set({'spotify': 'retrowave'}, function(items) {
              console.log("spotify set to theme retrowave on form submit" + items.spotify);
            });
          } else if (spotifyThemeInput.value == "none") {
            chrome.storage.sync.set({'spotify': 'none'}, function(items) {
              console.log("spotify set to theme none on form submit" + items.spotify);
            });
          } else {
            console.log("ERROR: Spotify theme isnt set to a theme");
          }
        });
      } else {
        console.log("Page not currently Popup.html");
        console.log(document.URL);
        console.log(chrome.extension.getURL("popup.html"));
      }
});
