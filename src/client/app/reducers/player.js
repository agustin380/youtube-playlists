const defaultState = {
  videoId: 'iNUq-JSXvS4',
  player: undefined,
};

const player = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_PLAYER':
      return Object.assign(
        {}, state, { player: action.player }
      );

    case 'SET_VIDEO':
      return Object.assign(
        {}, state, { videoId: action.videoId }
      );

    case 'PLAY_CURRENT_VIDEO':
      state.player.playVideo();
      return state;

    default:
      return state;
  }
};

export default player;
