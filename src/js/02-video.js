 import Player from "@vimeo/player";
 import throttle from "lodash.throttle";

 const iframe = document.querySelector('iframe');
 const player = new Player(iframe);
 const LOCALSTORAGE_KEY = "videoplayer-current-time";
 

player.on('timeupdate', throttle(e => {
    // data is an object containing properties specific to that event
    localStorage.setItem(LOCALSTORAGE_KEY, e.seconds);
}, 1000)
);



const stopTime = localStorage.getItem(LOCALSTORAGE_KEY);
player.setCurrentTime(stopTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

 