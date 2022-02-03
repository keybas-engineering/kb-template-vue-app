/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
//const { LoaderOptionsPlugin } = require('webpack');

const { resolve } = require("path");

const title = "KB Vue App";

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
    config.plugin("html").tap((args) => {
      args[0].title = title;
      return args;
    });
  },
  pwa: {
    name: title,
    iconPaths: {
      // favicon16 (16x16), favicon32 (32x32), appleTouchIcon (180x180), msTileImage (144x144), maskIcon (?)
      favicon32: "favicon.ico",
      // eslint-disable-next-line unicorn/no-null
      maskIcon: null,
    },
    manifestOptions: {
      name: title,
      short_name: title,
      theme_color: "#f20065",
      icons: [
        // Suggested sizes for all devices, with type image/png (drop the .ico):
        // 48x48, 72x72, 96x96, 144x144, 168x168, 192x192, 256x256, 512x512
        {
          src: "favicon.ico",
          sizes: "32x32",
          type: "image/vnd.microsoft.icon",
        },
      ],
    },
  },
};
