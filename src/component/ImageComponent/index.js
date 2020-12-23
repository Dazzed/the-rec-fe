import React, { Component } from 'react';

class ImageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: props.src || '/imgs/default_image.jpg',
      errored: false,
    };
  }

  onError = () => {
    if (!this.state.errored) {
      this.setState({
        src: this.props.fallbackSrc || '/imgs/default_image.jpg',
        errored: true,
      });
    }
  };

  render() {
    const { src } = this.state;
    const { alt, className, onClick, width, height } = this.props;
    const attributes = { alt, className, onClick, width, height };

    return <img src={src} onError={this.onError} {...attributes} />;
  }
}

export default ImageComponent;
