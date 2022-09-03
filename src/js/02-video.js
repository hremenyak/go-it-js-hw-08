import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
player.on('timeupdate', throttle(onPlayerPlay, 1000));

function onPlayerPlay(event) {
  const timeData = event.seconds;
  localStorage.setItem('videoplayer-current-time', timeData);
}

const lastSessionTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(lastSessionTime);
