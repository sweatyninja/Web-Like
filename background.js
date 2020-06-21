chrome.runtime.onInstalled.addListener(function() {                           
   chrome.storage.sync.set(
     {"liked":{0:{ url: "" }}}, function() {console.log("like list initialized");}); 
});

