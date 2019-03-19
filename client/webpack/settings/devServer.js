module.exports = () => ({
  publicPath: '/',
  contentBase: 'dist',
  host: '0.0.0.0',
  overlay: true,
  inline: true,
  hot: true,
  port: 3000,
  stats: {
    colors: true,
  },
  historyApiFallback: true,
});
