// check all open tabs in all open windows for the passed parameter url
// if any of the tabs has the url open, focus to that tab
// else open a new tab with the url
function focusOrCreateTab(url) {
    chrome.windows.getAll({"populate":true}, function(windows) {
        var existing_tab = null;
        for (var i in windows) {
            var tabs = windows[i].tabs;
            for (var j in tabs) {
                var tab = tabs[j];
                if (tab.url == url) {
                    existing_tab = tab;
                    break;
                }
            }
        }
        if (existing_tab) {
            chrome.tabs.update(existing_tab.id, {"selected":true});
        } else {
            chrome.tabs.create({"url":url, "selected":true});
        }
    });
}

// if extension icon is clicked call the focusOrCreateTab function with the home_url parameter
chrome.browserAction.onClicked.addListener(function(tab) {
    var home_url = chrome.extension.getURL("home.html");
    focusOrCreateTab(home_url);
});
