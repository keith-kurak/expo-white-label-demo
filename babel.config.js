module.exports = function (api) {
  const brand = "game-garage";
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for expo-router
      'expo-router/babel',
    ],
  };
};
