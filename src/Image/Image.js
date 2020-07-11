import React, { useState } from 'react';
import Observer from '@researchgate/react-intersection-observer';

// eslint-disable-next-line import/prefer-default-export
const BLANK_IMG =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAQAAACRI2S5AAAAEElEQVR42mNkIAAYRxWAAQAG9gAKqv6+AwAAAABJRU5ErkJggg==';

const Image = ({ src, alt, className, isLazyLoaded = true, isRetina = true }) => {
  const [stayVisible, setVisibility] = useState(false);

  const onChangeVisibility = event => {
    if (!stayVisible && event.isIntersecting) {
      setVisibility(true);
    }
  };
  const Comp = isLazyLoaded ? Observer : React.Fragment;

  const srcImage = stayVisible || !isLazyLoaded ? src : BLANK_IMG;

  const options = isLazyLoaded
    ? {
        onChange: onChangeVisibility,
        onlyOnce: true,
        rootMargin: '0px 0px 100px 0px',
      }
    : {};

  return (
    <Comp {...options}>
      <picture>
        <source
          srcSet={srcImage.replace('.jpg', '.webp')}
          media="(min-width: 620px)"
          type="image/webp"
        />
        <source srcSet={srcImage} media="(min-width: 620px)" />
        <source
          srcSet={
            isRetina
              ? `${srcImage.replace('.jpg', '.small.webp')}, ${srcImage.replace(
                  '.jpg',
                  '.webp',
                )} 2x`
              : srcImage.replace('.jpg', '.small.webp')
          }
          type="image/webp"
        />
        <img
          src={srcImage.replace('.jpg', '.small.jpg')}
          alt={alt}
          className={`Image ${className}`}
        />
      </picture>
    </Comp>
  );
};

export default Image;
