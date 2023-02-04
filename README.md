# react-native-rename-config [![NPM version](https://img.shields.io/npm/v/react-native-rename-config.svg?style=flat)](https://www.npmjs.com/package/react-native-rename-config) [![NPM monthly downloads](https://img.shields.io/npm/dm/react-native-rename-config.svg?style=flat)](https://npm-stat.com/charts.html?package=react-native-rename-config) [![NPM total downloads](https://img.shields.io/npm/dt/react-native-rename-config.svg?style=flat)](https://npm-stat.com/charts.html?package=react-native-rename-config) [![Paypal Donate](https://img.shields.io/badge/paypal-donate-green.svg?style=flat)](https://www.paypal.me/grzmot22)

Rename react-native app with just one command and more

![react-native-rename-config](https://cloud.githubusercontent.com/assets/5106887/24444940/cbcb0a58-149a-11e7-9714-2c7bf5254b0d.gif)

> This package assumes that you created your react-native project using `react-native init` or `expo bare workflow`.

**Note:** This package does not attempt to properly rename build artifacts such as `ios/build` or Cocoa Pod installation targets. After renaming your project you should clean, build, and reinstall third party dependencies to get it running properly with the new name.

### Usage

```
npx react-native-rename-config@latest "new_name"

```

> With custom Bundle Identifier (or set environment variable called APP_NAME)

```
npx react-native-rename-config@latest "new_name" -b "bundle_identifier"
```

> With custom icon to replace

```
npx react-native-rename-config <newName> -i <configPath>
```

> With replace firebase config

```
npx react-native-rename-config <newName> --firebase-replace <configPath>
```

> Path tree for configPath

```
 .
└── configPath
    └── ios
        ├── GoogleService-Info.plist
        ├── icon
        │   └── AppIcon.appiconset
        └── android
            ├── google-services.json
            └── icon
                └── android
                    ├── mipmap-anydpi-v26
                    │   └── ic_launcher.xml
                    ├── mipmap-hdpi
                    │   ├── ic_launcher_background.png
                    │   ├── ic_launcher_foreground.png
                    │   ├── ic_launcher_monochrome.png
                    │   └── ic_launcher.png
                    ├── mipmap-mdpi
                    │   ├── ic_launcher_background.png
                    │   ├── ic_launcher_foreground.png
                    │   ├── ic_launcher_monochrome.png
                    │   └── ic_launcher.png
                    ├── mipmap-xhdpi
                    │   ├── ic_launcher_background.png
                    │   ├── ic_launcher_foreground.png
                    │   ├── ic_launcher_monochrome.png
                    │   └── ic_launcher.png
                    ├── mipmap-xxhdpi
                    │   ├── ic_launcher_background.png
                    │   ├── ic_launcher_foreground.png
                    │   ├── ic_launcher_monochrome.png
                    │   └── ic_launcher.png
                    └── mipmap-xxxhdpi
                        ├── ic_launcher_background.png
                        ├── ic_launcher_foreground.png
                        ├── ic_launcher_monochrome.png
                        └── ic_launcher.png

```

### Example

##### First, Switch to new branch (optional but recommended)

```
git checkout -b rename-app
```

##### Then, Rename your app

```
npx react-native-rename-config "Travel App"
```

> With custom Bundle Identifier

```
npx react-native-rename-config "Travel App" -b com.junedomingo.travelapp

```

### CLI Options

|                Name                | Description                                                                                                                                  |
| :--------------------------------: | -------------------------------------------------------------------------------------------------------------------------------------------- |
|    `-b` or `--bundleID` [value]    | Set custom bundle identifier for both ios and android eg. "com.example.app" or "com.example".                                                |
|      `--iosBundleID` [value]       | Set custom bundle identifier specifically for ios.                                                                                           |
|    `--androidBundleID` [value]     | Set custom bundle identifier specifically for android.                                                                                       |
| `-p` or `--pathContentStr` [value] | Path and content string that can be used in replacing folders, files and their content. Make sure it doesn't include any special characters. |
|       `--skipGitStatusCheck`       | Skip git repo status check                                                                                                                   |

### Local installation

With **Yarn**:

```
yarn global add react-native-rename-config
```

With **npm**:

```
npm install react-native-rename-config -g
```

### Support creator

<a href="https://www.buymeacoffee.com/junedomingo" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

### Support me

<a href="https://www.buymeacoffee.com/grzmot22"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;"  target="_blank"></a>
