const sharp = require("sharp");
const imgPath = "./public/static/img/";

const outputLog = current => (err, info) => {
  console.log(current, err, info);
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

convertImg("banner");
convertImg("identite");
convertImg("pic01");
convertImg("pic02");
convertImg("pic03");
convertImg("pic04");
convertImg("pic05");
convertImg("pic06");
