var div = document.getElementById(".web-like-container");

chrome.storage.sync.get("liked", function(result){                       
  for (let [key, value] of Object.entries(result.liked)) {
    var el = document.createElement("DIV")
    el.innerHTML = value.url;
    document.body.appendChild(el)
  }                                                 
})     
