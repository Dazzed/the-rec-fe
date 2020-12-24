import React, { useState } from 'react';

function ImageComponent(props) {
  const { src, fallbackSrc, alt, className, onClick, width, height } = props;

  // when error loading image source
  const [errored, onError] = useState(false);

  const attributes = {
    src: !errored ? src : fallbackSrc || '/imgs/default_image.png',
    alt,
    className,
    onClick,
    width,
    height,
  };

  return <img {...attributes} onError={() => onError(true)} />;
}

export default ImageComponent;
