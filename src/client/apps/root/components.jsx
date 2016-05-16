import React from 'react';
import ReactDOM from 'react-dom';

import VideoForm from '../form/components.jsx';
import VideoPlayer from '../player/components.jsx';
import PlayList from '../playlist/components.jsx';


export default class AppRoot extends React.Component {
  render() {
    return (
      <div classname='container-fluid'>
        <div className='row'>
          <div className='col-xs-8'>
            <VideoPlayer/>
          </div>
          <div className='col-xs-4'>
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
