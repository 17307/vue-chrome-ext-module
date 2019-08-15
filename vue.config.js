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

pagesObj["devcreate"] = {
    entry: `src/devtool/devcreate.js`,
    // template: "public/index.html",
    filename: `devcreate.html`
};

pagesObj["devcontent"] = {
    entry: `src/devtool/devcontent.js`,
    // template: "public/index.html",
    filename: `devcontent.html`
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
        entry:{
            "background":"./src/background/background.js",
            "content":"./src/content/content.js"
        },
        output:{
            filename: 'js/[name].js' 
        },
        plugins: [new CopyWebpackPlugin(plugins)]
    },
    filenameHashing: false,
    productionSourceMap: false
};
