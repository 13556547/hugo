module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 1,
      features: {
        'nesting-rules': true,
      },
    },
    'cssnano': {
      preset: 'default',
    },
  },
};
