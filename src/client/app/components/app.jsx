import React from 'react';

import VideoForm from '../containers/form.jsx';
import Player from '../containers/player.jsx';
import PlayList from '../containers/playlist.jsx';


const AppRoot = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-8">
        <Player />
      </div>
      <div className="col-xs-4">
        <PlayList />
        <VideoForm />
      </div>
    </div>
  </div>
);

export default AppRoot;
