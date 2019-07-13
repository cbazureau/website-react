import React, { useState } from "react";
import Observer from "@researchgate/react-intersection-observer";

// eslint-disable-next-line import/prefer-default-export
const BLANK_IMG =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAQAAACRI2S5AAAAEElEQVR42mNkIAAYRxWAAQAG9gAKqv6+AwAAAABJRU5ErkJggg==";

const Image = ({ src, alt, className, isLazyLoaded = true }) => {
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
        rootMargin: "0px 0px 100px 0px"
      }
    : {};

  return (
    <Comp {...options}>
      <img src={srcImage} alt={alt} className={`Image ${className}`} />
    </Comp>
  );
};

export default Image;
