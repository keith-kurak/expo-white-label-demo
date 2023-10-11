const brandConfig = require("./current-brand/config.json");

module.exports = () => {
  return {
    name: brandConfig.belowIconName,
    slug: brandConfig.expoSlug,
    userInterfaceStyle: "automatic",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./current-brand/build-assets/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./current-brand/build-assets/splash.png",
      resizeMode: "cover",
      backgroundColor: brandConfig.brandColor,
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: brandConfig.iosBundleIdentifier,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./current-brand/build-assets/adaptive-icon.png",
        backgroundColor: brandConfig.androidAdaptiveIconBackgroundColor,
      },
      package: brandConfig.androidPackage,
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./current-brand/build-assets/favicon.png",
    },
    plugins: ["expo-router"],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      eas: {
        // 'undefined' tells `eas init` that a project ID isn't set yet, so it's safe to define one
        projectId: brandConfig.easProjectId || undefined,
      },
    },
  };
};
