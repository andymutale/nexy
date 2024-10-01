chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url && tab.url.includes("youtube.com/watch")) {
        const queryParameters = tab.url.split("?")[1];
        if (queryParameters) {
            const urlParameters = new URLSearchParams(queryParameters);
            const videoId = urlParameters.get("v");

            if (videoId) {
                chrome.tabs.sendMessage(tabId, {
                    type: "NEW",
                    videoId: videoId,
                });
            }
        }
    }
});