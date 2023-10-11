# Expo White Labeling Example

Demonstrates how to rebrand a single Expo Router project into multiple white-labeled/ branded apps.

## 🚀 How to run this example in your local environment

1. Run `yarn` to restore dependencies
2. Run `yarn switch <brand>` to set a brand, where `<brand>` is one of the folders in **brands**
3. Run `npx expo start`

### Switch brands during development
While your local dev server is running, you can run `yarn switch <brand>` and your app will reload with the updated branding.

If you update the values in the **brands** folder itself, you can also run `yarn switch <brand>` again

## 📁 File Structure

```
├── app ➡️ a typical Expo Router screen hierarchy
├── constants ➡️ common styles, etc. combined with brand-specific config and assets, imported from current-config
├── brands
│   └── default ➡️ a default/ unbranded "template" that can be copied to create other brands
│   └── gamer-garage ➡️ configuration / assets for the demo "Gamer Garage" branded app
│   └── others (TBD) ➡️ a few other demo branded apps are coming soon!
├── current-brand ➡️ gitignored folder containing the active brand for local development/ EAS Build
└── app.config.js ➡️ dynamic config that incorporates values/ files from current-brand
└── .easignore ➡️ special ignore file for EAS Build, which ensures current-brand is included in your build, without forcing it to be committed to git
```

## Setting up a new brand
1. Copy **brands/default** to a new folder in **brands**, named for whatever the new brand is
2. Update **config.json** with the proper values (leave `easProjectId` alone for now) and generate new assets for the brand.
3. Run `yarn switch <newBrand>`
4. Run `eas init` to generate a new project ID
5. Copy the EAS project ID into `easProjectId` in **brands/newBrand/config.json**.
6. Run `yarn switch <newBrand>` one more time prior to local development or running EAS Build to pick up the project ID change.

## Building with EAS Build
1. Run `yarn switch <brand>`
2. Run EAS Build, e.g., `eas build --profile preview --platform ios`. EAS Build will build the desired white label app based on the slug / projectId / assets and config in **current-brand**.

## Development build compatibility
It should be possible to test most brand-specific code (asset, style, text changes) with a single development build (or Expo Go if you don't need additional native modules). However, anything that relies on your bundle identifier/ package name or app scheme would need a brand-specific build to test. These include OAuth workflows, notifications, deep-linking, and others.