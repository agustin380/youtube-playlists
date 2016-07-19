import moment from 'moment';

export const player = {
  videoId: 'iNUq-JSXvS4',
  player: undefined,
};

export const playlist = [{
  id: 1,
  title: 'Metallica - Welcome Home (Sanitarium)',
  videoId: 'V6Dfo4zDduI',
  duration: moment.duration('PT6M26S'),
  isPlaying: false,
}, {
  id: 2,
  title: 'Tool - No Quarter (Salival) [Led Zeppelin Cover]',
  videoId: 'iNUq-JSXvS4',
  duration: moment.duration('PT11M13S'),
  isPlaying: false,
}];

export const itemIdInit = () => playlist.length;
