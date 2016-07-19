import { itemIdInit } from '../utils/initialState.js';

let itemId = itemIdInit();

export const addPlayListItem = (title, videoId, duration) => ({
  type: 'ADD_ITEM',
  id: ++itemId,
  title,
  videoId,
  duration,
});

export const setPlayingItem = (id) => ({
  type: 'SET_PLAYING_ITEM',
  id,
});

export const playNextVideo = (id) => ({
  type: 'PLAY_NEXT_VIDEO',
  id,
});
