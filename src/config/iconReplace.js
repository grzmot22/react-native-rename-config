export function iconReplace(iconPath, currentName) {
  const originPaths = [
    `${iconPath}/android/app/src/main/res/mipmap-anydpi-v26/ic_launcher.xml`,
    `${iconPath}/android/app/src/main/res/mipmap-hdpi/ic_launcher_background.png`,
    `${iconPath}/android/app/src/main/res/mipmap-hdpi/ic_launcher_foreground.png`,
    `${iconPath}/android/app/src/main/res/mipmap-hdpi/ic_launcher_monochrome.png`,
    `${iconPath}/android/app/src/main/res/mipmap-mdpi/ic_launcher_background.png`,
    `${iconPath}/android/app/src/main/res/mipmap-mdpi/ic_launcher_foreground.png`,
    `${iconPath}/android/app/src/main/res/mipmap-mdpi/ic_launcher_monochrome.png`,
    `${iconPath}/android/app/src/main/res/mipmap-xhdpi/ic_launcher_background.png`,
    `${iconPath}/android/app/src/main/res/mipmap-xhdpi/ic_launcher_foreground.png`,
    `${iconPath}/android/app/src/main/res/mipmap-xhdpi/ic_launcher_monochrome.png`,
    `${iconPath}/android/app/src/main/res/mipmap-xxhdpi/ic_launcher_background.png`,
    `${iconPath}/android/app/src/main/res/mipmap-xxhdpi/ic_launcher_foreground.png`,
    `${iconPath}/android/app/src/main/res/mipmap-xxhdpi/ic_launcher_monochrome.png`,
    `${iconPath}/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_background.png`,
    `${iconPath}/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_foreground.png`,
    `${iconPath}/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_monochrome.png`,
    `${iconPath}/ios/icon/AppIcon.appiconset`,
  ];

  const destPaths = [
    `android/app/src/main/res/mipmap-anydpi-v26/ic_launcher.xml`,
    `android/app/src/main/res/mipmap-hdpi/ic_launcher_background.png`,
    `android/app/src/main/res/mipmap-hdpi/ic_launcher_foreground.png`,
    `android/app/src/main/res/mipmap-hdpi/ic_launcher_monochrome.png`,
    `android/app/src/main/res/mipmap-mdpi/ic_launcher_background.png`,
    `android/app/src/main/res/mipmap-mdpi/ic_launcher_foreground.png`,
    `android/app/src/main/res/mipmap-mdpi/ic_launcher_monochrome.png`,
    `android/app/src/main/res/mipmap-xhdpi/ic_launcher_background.png`,
    `android/app/src/main/res/mipmap-xhdpi/ic_launcher_foreground.png`,
    `android/app/src/main/res/mipmap-xhdpi/ic_launcher_monochrome.png`,
    `android/app/src/main/res/mipmap-xxhdpi/ic_launcher_background.png`,
    `android/app/src/main/res/mipmap-xxhdpi/ic_launcher_foreground.png`,
    `android/app/src/main/res/mipmap-xxhdpi/ic_launcher_monochrome.png`,
    `android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_background.png`,
    `android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_foreground.png`,
    `android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_monochrome.png`,
    `ios/${currentName}/Images.xcassets`,
  ];

  return [originPaths, destPaths];
}
