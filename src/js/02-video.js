import Player from '@vimeo/player';
let throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');

const player = new Player(iframe);


player.on('play', function () { 

console.log('playEvent: played the video!');
});

function upDate(data) {
    console.log(data.seconds);
    localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(upDate, 1000));

console.log(localStorage.getItem('videoplayer-current-time'));

let lastVideoTime = localStorage.getItem('videoplayer-current-time');

    player.setCurrentTime(lastVideoTime)
        .then(function (seconds) {
        console.log("Ура :", seconds);
        }).catch(function (error) {
            switch (error.name) {
                case 'RangeError':
                    console.log("Out of range!!!");
                    break;
                default:
                    console.log('Unkown error=(');
                    break;
        }
    });

    player.getVideoTitle().then(function (title) {
    console.log('title:', title);
    });
