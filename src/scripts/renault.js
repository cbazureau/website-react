const axios = require('axios');
const fs = require('fs');

const ONE = process.argv[2];

(async () => {
  const { data } = await axios.get(`${ONE}/data/sites.json`);
  const jsonData = data
    .filter(d => d.type === 'one' && d.lighthouse === true)
    .map(({ domain, brand, ligthhouse_url }) => ({
      domain,
      brand,
      url: ligthhouse_url || `https://${domain}`,
    }));
  console.log(jsonData);
  const promises = jsonData.map(
    d =>
      new Promise(async (resolve, reject) => {
        const writer = fs.createWriteStream(`./public/static/img/renault-${d.domain}.jpg`);

        const response = await axios({
          url: `${ONE}/data/${d.domain}.thumb.jpg`,
          method: 'GET',
          responseType: 'stream',
        });

        response.data.pipe(writer);

        return new Promise((resolve, reject) => {
          writer.on('finish', resolve);
          writer.on('error', reject);
        });
      }),
  );
  await Promise.all(promises);
  await fs.promises.writeFile('./src/renault.json', JSON.stringify(jsonData));
})();
