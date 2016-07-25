import chai from 'chai';
import dirtyChai from 'dirty-chai';
import sinon from 'sinon';

import { reducer } from './player.js';
import { player as initialState } from '../utils/initialState.js';

chai.use(dirtyChai);
const { expect } = chai;


describe('playerReducer', function() {
  it('should return the initial state', function() {
    expect(reducer(undefined, {})).to.deep.equal(initialState);
  });

  it('should handle SET_PLAYER', function() {
    const state = { player: 'test' };
    const action = { ...state, type: 'SET_PLAYER' };
    expect(reducer({}, action)).to.deep.equal(state);
  });

  it('should handle SET_VIDEO', function() {
    const state = { videoId: 'test' };
    const action = { ...state, type: 'SET_VIDEO' };
    expect(reducer({}, action)).to.deep.equal(state);
  });

  it('should handle PLAY_CURRENT_VIDEO', function() {
    const playVideoCallback = sinon.spy();
    const state = { player: { playVideo: playVideoCallback } };
    const action = { type: 'PLAY_CURRENT_VIDEO' };
    expect(reducer(state, action)).to.deep.equal(state);
    expect(playVideoCallback.calledOnce).to.be.true();
  });

});
