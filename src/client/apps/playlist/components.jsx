import React from 'react';

import store from '../root/store.js';
import PlayListItem from '../playlist_item/components.jsx';


export default class PlayList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };

    this.handleAddPlaylistItem = this.handleAddPlaylistItem.bind(this);
  }
  componentDidMount() {
    store.subscribe(this.handleAddPlaylistItem);
  }
  handleAddPlaylistItem() {
    const state = store.getState().playlist;
    this.setState({ items: state });
  }
  render() {
    const items = this.state.items.map(item =>
      <PlayListItem {...item} />
    );
    return (
      <div>
        <h3>Playlist</h3>
        <ul>{items}</ul>
      </div>
    );
  }
}

PlayList.propTypes = { items: React.PropTypes.arrayOf(PlayListItem) };
