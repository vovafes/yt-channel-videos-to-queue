if (window.location.href.indexOf("watch?v=") > -1 && window.location.href.indexOf("&list=") < 0) {
  window.location += "&list=" + "UU" + document.documentElement.innerHTML.match('channelId" content="(.*?)"')[1].substr(2);
}
