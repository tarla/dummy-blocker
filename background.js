chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    if(!/http(s)?:\/\/docker:9000(\/)?(.+)?/g.test(info.url)) {
      //return { redirectUrl: chrome.extension.getURL('index.html')
        return { redirectUrl: 'http://docker:9000'
      };
    }
  },
  // filters
  {
    urls: [
      "*://*/*"
    ],
    types: ["main_frame"]
  },
  // extraInfoSpec
  ["blocking"]);
