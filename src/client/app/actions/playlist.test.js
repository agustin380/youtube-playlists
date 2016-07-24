import chai from 'chai';
import dirtyChai from 'dirty-chai';
import sinon from 'sinon';
import moment from 'moment';

import { addPlayListItem } from './playlist.js';

chai.use(dirtyChai);
const { expect } = chai;

describe('addPlayListItem', function() {
  it('should return a new playlist item object', function() {
    const title = 'Metallica - Welcome Home (Sanitarium)';
    const videoId = 'V6Dfo4zDduI';
    const duration = moment.duration('PT6M26S');
    const playlistItem = addPlayListItem(title, videoId, duration);
    const expectedItem = {
      id: 3,
      type: 'ADD_ITEM',
      title: 'Metallica - Welcome Home (Sanitarium)',
      videoId: 'V6Dfo4zDduI',
      duration: moment.duration('PT6M26S'),
    };

    expect(playlistItem).to.deep.equal(expectedItem);
  });
});
