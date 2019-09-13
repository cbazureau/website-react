const sharp = require('sharp');
const fs = require('fs');
const imgPath = './public/static/img/';

const outputLog = current => (err, info) => {
  console.log(current.options.fileOut);
  if (err) console.error(err);
};

const convertImg = img => {
  const current = sharp(`${imgPath}${img}.jpg`);
  current.metadata().then(metadata => {
    current
      .resize(Math.round(metadata.width / 2))
      .toFile(`${imgPath}${img}.small.jpg`, outputLog(current));
    current
      .resize(Math.round(metadata.width / 2))
      .webp()
      .toFile(`${imgPath}${img}.small.webp`, outputLog(current));
  });
  current.toFile(`${imgPath}${img}.webp`, outputLog(current));
};

fs.readdir(imgPath, (err, files) => {
  files.forEach(file => {
    if (file.endsWith('.jpg') && !file.endsWith('.small.jpg')) {
      convertImg(file.replace('.jpg', ''));
    }
  });
});
