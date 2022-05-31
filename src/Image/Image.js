import React from 'react';

const SRC = './src/static/img/';
const PUBLIC = './public/static/img/';
const RESOLUTIONS = [
  { width: 375, quality: 80 },
  { width: 640, quality: 80 },
  { width: 750, quality: 80 },
  { width: 1024, quality: 80 },
  { width: 1280, quality: 80 },
  { width: 2048, quality: 80 },
  { width: 2560, quality: 80 },
];

/**
 * getExtension
 * @param {*} src
 * @returns
 */
const getExtension = (src) => src.split('.').pop();

/**
 * Build srcset
 * @param {*} src
 * @param {*} format
 * @returns
 */
const buildSrcSet = (src, format) =>
  RESOLUTIONS.map(
    ({ width }) => `${src.replace(SRC, PUBLIC).replace('.jpg', `.${width}.${format}`)} ${width}w`,
  ).join(', ');

const Image = ({ src, alt, className, isLazyLoaded = true, sizes = '100vw' }) => (
  <picture>
    <source srcSet={buildSrcSet(src, 'webp')} type="image/webp" />
    <source
      srcSet={buildSrcSet(src, getExtension(src))}
      type={getExtension(src) === 'png' ? 'image/png' : 'image/jpeg'}
    />
    <img
      src={src.replace(`.${getExtension(src)}`, `.${RESOLUTIONS[0].width}.${getExtension(src)}`)}
      alt={alt}
      className={className}
      loading={isLazyLoaded ? 'lazy' : undefined}
    />
  </picture>
);

export default Image;
