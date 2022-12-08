export function iconReplace(iconPath, currentName) {
  const originPaths = [
    `${iconPath}/android/icon/mipmap-hdpi/ic_launcher.png`,
    `${iconPath}/android/icon/mipmap-mdpi/ic_launcher.png`,
    `${iconPath}/android/icon/mipmap-xhdpi/ic_launcher.png`,
    `${iconPath}/android/icon/mipmap-xxhdpi/ic_launcher.png`,
    `${iconPath}/android/icon/mipmap-xxxhdpi/ic_launcher.png`,
    `${iconPath}/ios/icon/AppIcon.appiconset`,
  ];

  const destPaths = [
    `android/app/src/main/res/mipmap-hdpi/ic_launcher.png`,
    `android/app/src/main/res/mipmap-mdpi/ic_launcher.png`,
    `android/app/src/main/res/mipmap-xhdpi/ic_launcher.png`,
    `android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png`,
    `android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png`,
    `ios/${currentName}/Images.xcassets`,
  ];

  return [originPaths, destPaths];
}
