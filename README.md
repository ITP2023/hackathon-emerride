# Emerride

## Prototype link

Figma: [View the protype here](https://www.figma.com/file/HG51wO3ZYLzqhaEkYZIVNd/Emerride-App?node-id=0%3A1)

## Download the App

Note that app download is only available to android devices for now
Expo link to `.apk`: [Download after following the steps here](https://expo.dev/accounts/ihabt/projects/hackathon-emerride/builds/b62c8c94-a76d-448f-8fe0-fb15dcf5a843)

### Important Note
We are using [`expo`](https://expo.dev) instead of the `react-native` cli. Please feel free to suggest otherwise. As to what `expo` offers over `create-react-native`, below are some points:
- No need to do seperate setup in android and iOS native files.
- SDK that includes ALL native features like Gyroscope, Camera, Thermometre APIs [view all packages under `@expo`](https://github.com/expo/expo/tree/main/packages)

### Issue?
you know where to inform

### Setup

1. Clone the repo into the directory of your choice
2. `cd` into that directory
3. run `npm install`
4. wait to complete
5. to run on Android: `npm run android`
6. to run on iOS: `npm run ios`
7. do not run on web since this project does not have the necessary dependencies

### Libraries and where to learn them
feel free to suggest alternatives
- [`@react-navigation`](https://reactnavigation.org/)
- for UI, will add later [`react-native-paper`](https://reactnativepaper.com/)
- expo icons pack [`@expo/vector-icons`](https://docs.expo.dev/guides/icons/). to access the list of icons and their codenames to use in code refer [here](https://icons.expo.fyi/)