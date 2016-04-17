import React from 'react';

import store from '../root/store.js';


export default class PlayListItem extends React.Component {
  render() {
    return (
      <li>This is a PlayList item: {this.props.title}</li>
    );
  }
}

PlayListItem.propTypes = { title: React.PropTypes.string };
