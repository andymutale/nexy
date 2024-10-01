(() => {
    let youtubeRightControls, youtubePlayer;

    chrome.runtime.onMessage.addListener((obj, sender, response) =>{
        const { type, value, videoId } = obj;

        if ( type === "NEW") {
            currentVideo = videoId;
            newVideoLoaded();
        }
    })

    console.log("Content script loaded");



})();