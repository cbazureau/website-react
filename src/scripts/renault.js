const axios = require('axios');
const fs = require('fs');

const ONE = process.argv[2];

const downloadImage = (url, image_path) =>
  axios({
    url,
    responseType: 'stream',
  }).then(
    (response) =>
      new Promise((resolve, reject) => {
        response.data
          .pipe(fs.createWriteStream(image_path))
          .on('finish', () => resolve())
          .on('error', (e) => reject(e));
      }),
  );

(async () => {
  const { data } = await axios.get(`${ONE}/data/sites.json`);
  const jsonData = data
    .filter((d) => d.type === 'one' && d.lighthouse === true)
    .map(({ domain, brand, ligthhouse_url, product, scores }) => ({
      domain,
      brand,
      product,
      perf: scores.performance,
      url: ligthhouse_url || `https://${domain}`,
    }));
  jsonData.sort((a, b) => {
    if (a.product === 'myrenault') return 1;
    if (b.product === 'myrenault') return -1;
    if (a.product === b.product) return a.perf > b.perf ? -1 : 1;
    return a.product < b.product ? -1 : 1;
  });
  console.log(jsonData);
  await fs.promises.writeFile('./src/renault.json', JSON.stringify(jsonData));

  const promises = jsonData.map((d) =>
    downloadImage(`${ONE}/data/${d.domain}.thumb.jpg`, `./src/static/img/renault-${d.domain}.jpg`),
  );
  try {
    await Promise.all(promises);
  } catch (e) {
    console.log(e);
  }
})();
