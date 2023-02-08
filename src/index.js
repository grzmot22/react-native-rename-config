#!/usr/bin/env node
import { program } from 'commander';

import pjson from '../package.json';
import {
  bundleIDToPath,
  checkGitRepoStatus,
  checkPackageUpdate,
  cleanBuilds,
  getAndroidCurrentBundleID,
  getAndroidCurrentName,
  getIosCurrentName,
  getIosXcodeProjectPathName,
  gitStageChanges,
  renameAndroidBundleIDFolders,
  renameIosFoldersAndFiles,
  replaceFirebase,
  replaceIcons,
  showSuccessMessages,
  updateAndroidFilesContent,
  updateAndroidFilesContentBundleID,
  updateAndroidNameInStringsXml,
  updateIosFilesContent,
  updateIosNameInInfoPlist,
  updateOtherFilesContent,
  validateCreation,
  validateGitRepo,
  validateNewBundleID,
  validateNewName,
  validateNewPathContentStr,
} from './utils';

program
  .name(pjson.name)
  .description(pjson.description)
  .version(pjson.version)
  .arguments('[newName]')
  .option(
    '-b, --bundleID [value]',
    'Set custom bundle identifier for both ios and android eg. "com.example.app" or "com.example".'
  )
  .option('--iosBundleID [value]', 'Set custom bundle identifier specifically for ios')
  .option('--androidBundleID [value]', 'Set custom bundle identifier specifically for android')
  .option(
    '-p, --pathContentStr [value]',
    `Path and content string that can be used in replacing folders, files and their content. Make sure it doesn't include any special characters.`
  )
  .option('--skipGitStatusCheck', 'Skip git repo status check')
  .option('-i, --icon [value]', 'Replace icons from current path')
  .option(
    '--firebase-replace [value]',
    'Replace Firebase configuration, provide a root path for configuration'
  )
  .action(async newName => {
    validateCreation();
    validateGitRepo();

    const options = program.opts();

    if (!options.skipGitStatusCheck) {
      checkGitRepoStatus();
    }

    validateNewName(newName, options);

    const pathContentStr = options.pathContentStr;
    const newBundleID = options.bundleID || process.env.APP_NAME;
    const newIosBundleID = options.iosBundleID;
    const newAndroidBundleID = options.androidBundleID;
    const iconPath = options.icon;
    const firebaseReplacePath = options.firebaseReplace;

    if (pathContentStr) {
      validateNewPathContentStr(pathContentStr);
    }

    if (newBundleID) {
      validateNewBundleID(newBundleID, ['ios', 'android']);
    }

    const currentAndroidName = getAndroidCurrentName();
    const currentIosName = getIosCurrentName();
    const currentPathContentStr = getIosXcodeProjectPathName();
    const newPathContentStr = pathContentStr || newName;
    const currentAndroidBundleID = getAndroidCurrentBundleID();

    if (iconPath) {
      await replaceIcons(iconPath, currentIosName);
    }

    if (firebaseReplacePath) {
      await replaceFirebase(firebaseReplacePath);
    }

    await renameIosFoldersAndFiles(newPathContentStr);
    await updateIosFilesContent({
      currentName: currentIosName,
      newName,
      currentPathContentStr,
      newPathContentStr,
      newBundleID: newIosBundleID || newBundleID,
    });

    await updateIosNameInInfoPlist(newName);

    if (newAndroidBundleID || newBundleID) {
      await renameAndroidBundleIDFolders({
        currentBundleIDAsPath: bundleIDToPath(currentAndroidBundleID),
        newBundleIDAsPath: bundleIDToPath(newAndroidBundleID || newBundleID),
      });
    }

    await updateAndroidFilesContent({
      currentName: currentAndroidName,
      newName,
      newBundleIDAsPath: bundleIDToPath(
        newAndroidBundleID || newBundleID || currentAndroidBundleID
      ),
    });

    if (newAndroidBundleID || newBundleID) {
      await updateAndroidFilesContentBundleID({
        currentBundleID: currentAndroidBundleID,
        newBundleID: newAndroidBundleID || newBundleID,
        currentBundleIDAsPath: bundleIDToPath(currentAndroidBundleID),
        newBundleIDAsPath: bundleIDToPath(newAndroidBundleID || newBundleID),
      });
    }

    await updateAndroidNameInStringsXml(newName);
    await updateOtherFilesContent({
      newName,
      currentPathContentStr,
      newPathContentStr,
      currentIosName,
      newAndroidBundleID: newAndroidBundleID || newBundleID,
      newIosBundleID: newIosBundleID || newBundleID,
    });

    cleanBuilds();
    showSuccessMessages(newName);
    gitStageChanges();
    checkPackageUpdate();
  });

// If no arguments are passed, show help
if (!process.argv.slice(2).length) {
  program.outputHelp();
  process.exit();
}

program.parseAsync(process.argv);
