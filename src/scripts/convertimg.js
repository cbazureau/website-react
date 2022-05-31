const sharp = require('sharp');
const fs = require('fs-extra');
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
 * convertImg
 * @param {*} img
 * @param {*} res
 * @param {*} format
 * @returns
 */
const convertImg = async (img, res = {}, format) => {
  const { width, quality } = res;
  try {
    const target = img.replace(SRC, PUBLIC).replace(getJpgExt(img), `.${width}.${format}`);
    if (fs.existsSync(target)) {
      return Promise.resolve();
    }
    if (format === 'jpg') {
      return sharp(img).resize(width).jpeg({ quality }).toFile(target);
    }
    if (format === 'png') {
      return sharp(img)
        .resize(width)
        .png({ compressionLevel: Math.round(quality / 10) })
        .toFile(target);
    }
    return sharp(img).resize(width).webp({ quality }).toFile(target);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return Promise.reject();
  }
};

(async () => {
  await fs.readdir(SRC, async (err, files) => {
    await files.forEach(async (file) => {
      // Generate all renditions for original (2560 width image)
      if (file.endsWith('.jpg') || file.endsWith('.png')) {
        await RESOLUTIONS.reduce(
          (acc, res) => [...acc, { format: 'jpg', res }, { format: 'webp', res }],
          [],
        ).forEach(async ({ format, res }) => {
          await convertImg(path.join(SRC, file), res, format);
        });
      }
    });
  });
})();
