const sharp = require('sharp');
const fs = require('fs');
const imgPath = './public/static/img/';

const outputLog = current => (err, info) => {
  console.log(current.options.fileOut);
  if (err) console.error(err);
};

const convertImg = async img => {
  try {
    const metadata = await sharp(`${imgPath}${img}.jpg`).metadata();
    const resp = await sharp(`${imgPath}${img}.jpg`)
      .resize(Math.round(metadata.width / 2))
      .toFile(`${imgPath}${img}.small.jpg`);
    await sharp(`${imgPath}${img}.jpg`)
      .resize(Math.round(metadata.width / 2))
      .webp()
      .toFile(`${imgPath}${img}.small.webp`);

    await sharp(`${imgPath}${img}.jpg`)
      .webp()
      .toFile(`${imgPath}${img}.webp`);
  } catch (e) {
    console.log(e);
  }
};

(async () => {
  await fs.readdir(imgPath, async (err, files) => {
    await files.forEach(async file => {
      if (file.endsWith('.jpg') && !file.endsWith('.small.jpg')) {
        await convertImg(file.replace('.jpg', ''));
      }
    });
  });
})();
