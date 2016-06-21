export const setVideo = videoId => ({
  type: 'SET_VIDEO',
  videoId,
});

export const setPlayer = player => ({
  type: 'SET_PLAYER',
  player,
});

export const playCurrentVideo = () => ({
  type: 'PLAY_CURRENT_VIDEO',
});

export const playNextVideo = () => ({
  type: 'PLAY_NEXT_VIDEO',
});
