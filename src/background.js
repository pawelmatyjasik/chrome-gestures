chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
        chrome.tabs.getSelected(function(tab) {
            chrome.tabs.remove(tab.id, function() { });
        });
});