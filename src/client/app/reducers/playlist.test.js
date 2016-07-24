import chai from 'chai';
import dirtyChai from 'dirty-chai';
import moment from 'moment';

import { reducer } from './playlist.js';
import { playlist as initialState } from '../utils/initialState.js';

chai.use(dirtyChai);
const { expect } = chai;

describe('playlistReducer', function() {
  it('should return the initial state', function() {
    expect(reducer(undefined, {})).to.deep.equal(initialState);
  });

  it('should handle ADD_ITEM', function() {
    const item = {
      id: 1,
      title: 'test',
      videoId: 'abcdef',
      duration: '123',
      isPlaying: false,
    };
    const action = { ...item, type: 'ADD_ITEM' };
    const state = reducer([], action);
    expect(state).to.deep.equal([item]);
  });

  it('should handle SET_PLAYING_ITEM', function() {
    const item1 = {
      id: 1,
    };
    const item2 = {
      id: 2,
    };
    const state = [{
      ...item1, isPlaying: true,
    }, {
      ...item2, isPlaying: false,
    }];

    const finalState = state.map(item => ({ ...item, isPlaying: !item.isPlaying }));
    const reducerState = reducer(state, { type: 'SET_PLAYING_ITEM', id: 2 });

    expect(reducerState).to.deep.equal(finalState);
  });

  it('should handle PLAY_NEXT_VIDEO', function() {
    const state = [1, 2, 3].map(id => ({ id, isPlaying: id === 2 }));
    const reducerState = reducer(state, { type: 'PLAY_NEXT_VIDEO' });

    expect(reducerState[2].isPlaying).to.be.true();
    expect(reducerState[1].isPlaying).to.be.false();
  });
});
