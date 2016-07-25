import { player as initialState } from '../utils/initialState.js';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PLAYER':
      return { ...state, player: action.player };

    case 'SET_VIDEO':
      return { ...state, videoId: action.videoId };

    case 'PLAY_CURRENT_VIDEO':
      state.player.playVideo();
      return state;

    default:
      return state;
  }
};
