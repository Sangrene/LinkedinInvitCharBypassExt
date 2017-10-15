function injectTheScript() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
        var variableToInject = 'var LinkedinBypassMessage = "'+document.getElementById("message").value +'";';
        chrome.storage.local.set({'message': document.getElementById("message").value}, function() {
          console.log('Settings saved');
        });
        chrome.tabs.executeScript(tabs[0].id, {
            code: variableToInject
        }, function() {
          chrome.tabs.executeScript(tabs[0].id, {file: "content_script.js"});
        });
    });
}
chrome.storage.local.get("message", function(object){
  document.getElementById("message").value = object.message;
});
document.getElementById('clickactivity').addEventListener('click', injectTheScript);
