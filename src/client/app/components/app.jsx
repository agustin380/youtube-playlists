import React from 'react';
import ReactDOM from 'react-dom';

import VideoForm from '../components/form.jsx';
import VideoPlayer from '../components/player.jsx';
import PlayList from '../components/playlist.jsx';


export default class AppRoot extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-8">
            <VideoPlayer />
          </div>
          <div className="col-xs-4">
            <PlayList />
            <VideoForm />
          </div>
        </div>
      </div>
    );
  }
}

AppRoot.propTypes = { videoId: React.PropTypes.string };
ReactDOM.render(<AppRoot />, document.getElementById('app'));
