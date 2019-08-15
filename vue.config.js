const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

// Generate pages object
const pagesObj = {};

// const chromeName = ["popup"];
//
// chromeName.forEach(name => {
//     pagesObj[name] = {
//         entry: `src/${name}/index.js`,
//         template: "public/index.html",
//         filename: `${name}.html`
//     };
// });

pagesObj["main"] = {
    entry: `src/main.js`,
    // template: "public/index.html",
    filename: `popup.html`
};

const plugins = [
            {
                from: path.resolve("src/manifest.json"),
                to: `${path.resolve("dist")}/manifest.json`
            }
        ];



// plugins.push(
//     {
//         from: path.resolve("src/background/background.js"),
//         to: path.resolve("dist")
//     }
// );

module.exports = {
    pages: pagesObj,
    configureWebpack: {
        plugins: [new CopyWebpackPlugin(plugins)]
    },
    filenameHashing: false,
    productionSourceMap: false
};
