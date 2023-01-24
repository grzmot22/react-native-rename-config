export function firebaseReplace(firebasePath) {
  const originPaths = [`${firebasePath}/android/google-services.json`, `${firebasePath}/ios/GoogleService-Info.plist`];

  const destPaths = [`android/app/google-services.json`, `ios/GoogleService-Info.plist`];

  return [originPaths, destPaths];
}
