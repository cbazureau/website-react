const fs = require('fs');

// This script is reading the asset-manifest.json in order to create the Link Header
// to server push js/css ressources

const assets = JSON.parse(fs.readFileSync('./build/asset-manifest.json', 'utf8'));

const fileTransform = (file, transformation) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) return console.log(err);
    fs.writeFile(file, transformation(data), 'utf8', err => {
      if (err) return console.log(err);
    });
  });
};

// Build Header Link
// </main.css>; rel=preload; as=style,</main.js>; rel=preload; as=script
fileTransform('./build/.htaccess', data => {
  const headerLink = Object.keys(assets.files)
    .filter(k => {
      return (
        (k.endsWith('.css') || k.endsWith('.js')) && (k.startsWith('main') || k.includes('chunk'))
      );
    })
    .map(k => {
      const file = assets.files[k];
      if (k.endsWith('.css')) return `<${file}>; rel=preload; as=style`;
      else if (k.endsWith('.js')) return `<${file}>; rel=preload; as=script`;
      else return null;
    })
    .join(', ');
  return data.replace('HEADER-LINK', headerLink);
});
