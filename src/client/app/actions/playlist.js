let itemId = 0;

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

export const playNextVideo = () => ({
  type: 'PLAY_NEXT_VIDEO',
});
