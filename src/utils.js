import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

const devTestRNProject = ''; // For Development eg '/Users/junedomingo/Desktop/RN49'
export const __dirname = devTestRNProject || process.cwd();

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

export const loadAppConfig = () => readFile(path.join(__dirname, 'app.json')).then(data => JSON.parse(data));

export const loadAndroidManifest = () =>
  readFile(path.join(__dirname, 'android/app/src/main/AndroidManifest.xml')).then(data => cheerio.load(data));

export function iosRequiredPaths(currentAppName) {
  const nS_CurrentAppName = currentAppName.replace(/\s/g, '');

  return [`ios/${nS_CurrentAppName}`];
}

export const replaceSpecialChars = str =>
  str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/([^\w]+|\s+)/g, '-') // Replace space and other characters by hyphen
    .replace(/\-\-+/g, '-') // Replaces multiple hyphens by one hyphen
    .replace(/(^-+|-+$)/g, ''); // Remove extra hyphens from beginning or end of the string
