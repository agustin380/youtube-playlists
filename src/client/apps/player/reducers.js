import urlParser from 'url';

const player = (state = { videoId: 'iNUq-JSXvS4' }, action) => {
  switch (action.type) {
    case 'SET_VIDEO':
      return {
        videoId: urlParser.parse(state.url, true).query.v,
      };
    default:
      return state;
  }
};

export default player;
