const fs = require("fs");

const assets = JSON.parse(
  fs.readFileSync("./build/asset-manifest.json", "utf8")
);

const fileTransform = (file, transformation) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) return console.log(err);
    fs.writeFile(file, transformation(data), "utf8", err => {
      if (err) return console.log(err);
    });
  });
};

fileTransform("./build/.htaccess", data =>
  data
    .replace("</main.css>", `</${assets["main.css"]}>`)
    .replace("</main.js>", `</${assets["main.js"]}>`)
);
