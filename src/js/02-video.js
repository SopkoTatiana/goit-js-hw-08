import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_CURRENT_TIME = 'videoplayer-current-time';
const currentTime = localStorage.getItem(STORAGE_CURRENT_TIME);

if (currentTime) {
  player.setCurrentTime(currentTime);
}

player.on('timeupdate', throttle(onUpdateCurrentTime, 1000));

function onUpdateCurrentTime(data) {
  try {
    localStorage.setItem(STORAGE_CURRENT_TIME, data.seconds);
  } catch (error) {
    error.message;
  }
}
