/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
//const { LoaderOptionsPlugin } = require('webpack');

const { resolve } = require("path");

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  /*
  configureWebpack: {
    resolve: {
      alias: {
        // Alias for using source of Bootstrap-Vue
        "bootstrap-vue$": "bootstrap-vue/src/index.js",
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          // Exclude transpiling `node_modules`, except `bootstrap-vue/src`
          exclude: /node_modules\/(?!bootstrap-vue\/src\/)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["env"],
            },
          },
        },
      ],
    },
  },
  */
  configureWebpack: {
    resolve: {
      alias: {
        assets: resolve("src/assets"),
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap((options) => {
        options.transformAssetUrls = {
          img: "src",
          image: "xlink:href",
          "b-avatar": "src",
          "b-img": "src",
          "b-img-lazy": ["src", "blank-src"],
          "b-card": "img-src",
          "b-card-img": "src",
          "b-card-img-lazy": ["src", "blank-src"],
          "b-carousel-slide": "img-src",
          "b-embed": "src",
        };
        return options;
      });
  },
};
