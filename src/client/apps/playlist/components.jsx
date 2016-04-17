import React from 'react';
import store from '../root/store.js';

import PlayListItem from '../playlist_item/components.jsx';

export default class PlayList extends React.Component {
  render() {
    return (
      <div>
        <h3>This is a playlist</h3>
        <ul>
          <PlayListItem title="Example" />
        </ul>
      </div>
    );
  }
}
