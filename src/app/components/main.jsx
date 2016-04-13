import React from 'react';
import ReactDOM from 'react-dom';

import VideoForm from './form.jsx';
import VideoPlayer from './player.jsx';


export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <VideoPlayer videoId={this.props.videoId} />
        <VideoForm />
      </div>
    );
  }
}

Layout.propTypes = { videoId: React.PropTypes.string };
ReactDOM.render(<Layout videoId="iNUq-JSXvS4" />, document.getElementById('layout'));
