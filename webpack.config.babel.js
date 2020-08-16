/* eslint-disable prefer-named-capture-group */
/* eslint-disable require-unicode-regexp */
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactStaticSiteHydrater from 'react-static-site-hydrater';
import SitemapPlugin from 'sitemap-webpack-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { resolve } from 'path';

import App from './src/app';

const pad = (n, width, z) => {
  const z1 = z || '0';
  const n1 = String(n);
  return n1.length >= width
    ? n1
    : new Array(width - n1.length + 1).join(z1) + n1;
};

const today = new Date();
const lastmod = `${pad(today.getFullYear(), 2)}-${pad(
  today.getMonth() + 1,
  2
)}-${pad(today.getDate(), 2)}`;

const paths = [
  {
    path: '/',
    lastmod,
    priority: '0.8',
    changefreq: 'daily',
  },
  {
    path: '/ro',
    lastmod,
    priority: '0.8',
    changefreq: 'daily',
  },
  {
    path: '/blog/post-1',
    lastmod,
    priority: '0.8',
    changefreq: 'daily',
  },
  {
    path: '/ro/blog/post-2',
    lastmod,
    priority: '0.8',
    changefreq: 'daily',
  },
];

const routes = paths.map((path) => path.path);

export default {
  entry: resolve(__dirname, 'src'),
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        include: resolve(__dirname, 'src'),
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'default.html',
      scriptLoading: 'defer',
    }),
    new SitemapPlugin('https://jondarrer.com', paths),
    new FaviconsWebpackPlugin(),
    new ReactStaticSiteHydrater({
      routes,
      component: App,
      baseFilename: 'default.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/images', to: 'images' },
        { from: 'src/fonts', to: 'fonts' },
      ],
    }),
  ],
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: {
      index: 'default.html',
    },
  },
};
