import React from 'react';

export default class PlayListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', videoId: '' };
  }
  componentDidMount() {
    const titlePromise = this.props.title;
    titlePromise.then(title => {
      this.setState({ title, videoId: this.props.title });
    });
  }

  render() {
    return (
      <li>{this.state.title}</li>
    );
  }
}

PlayListItem.propTypes = {
  title: React.PropTypes.string,
  videoId: React.PropTypes.string,
};
