window.onload = function() {

//Variables
  var currentURL = window.location.href;
  var liked_list = {}
  var isLiked = false;

//Create Like Button
function appendHtml(el, str) {
  var div = document.createElement('div');
  div.innerHTML = str;
  while (div.children.length > 0) {
    el.appendChild(div.children[0]);
  }
}
var likeElement = '<svg xmlns="http://www.w3.org/2000/svg" id="WebLikeButton" data-name="Layer 1" viewBox="0 0 100 100" x="0px" y="0px" style="width:39px;position: fixed;height: auto; bottom:10px; left:10px; z-index:1001; fill:#c9c9c9; opacity:0.95; cursor:pointer;"><path d="M100,33v4.47c-0.07.3-.15,0.61-0.2,0.92a37.38,37.38,0,0,1-4.68,13.88A65,65,0,0,1,88,61.84,115,115,0,0,1,77,72.85c-3.59,3.12-7.24,6.18-11,9-5,3.76-10.2,7.29-15.3,10.94a0.92,0.92,0,0,1-1.22,0c-4.49-3.16-9.1-6.18-13.47-9.51-4.6-3.51-9-7.22-13.44-11a97.46,97.46,0,0,1-15-16,37.85,37.85,0,0,1-6.76-15C0.46,40,.23,38.83,0,37.61V33c0.06-.26.11-0.51,0.17-0.77,0.44-2,.72-4,1.35-6A27.25,27.25,0,0,1,14.26,10.68,27.31,27.31,0,0,1,33,7.41a27.52,27.52,0,0,1,16.2,9,5.33,5.33,0,0,1,.53.9c1.09-1.09,1.9-1.93,2.75-2.72a28.18,28.18,0,0,1,38.34-.13,27.63,27.63,0,0,1,8.25,13.84C99.51,29.83,99.71,31.41,100,33Z"/></svg>';
appendHtml(document.body, likeElement);
var button = document.getElementById("WebLikeButton")

//Initialize
  chrome.storage.sync.get("liked", function(result){
     liked_list = result.liked;
     for (let [key, value] of Object.entries(liked_list)) {
        console.log(value.url)
        if (value.url == currentURL){
           isLiked = true;
           button.style.fill = "tomato";           
        }
     }
    console.log(isLiked)
  });

//Like / Dislike  
  button.onclick = function(){   
 
    var key = parseInt(Object.keys(liked_list).slice(-1)[0]) + 1
    var newObject = Object.assign({[key]:{url:currentURL}}, liked_list)
    chrome.storage.sync.set({liked: newObject}, function() {
       console.log("like inserted")
       button.style.fill = "tomato";          
    });

  }
  document.body.appendChild(button);
}
