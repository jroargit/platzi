module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'sass',)],
    prependData: `@use "_vars.scss";`,
  },
};
