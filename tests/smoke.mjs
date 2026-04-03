import fs from 'node:fs';

const manifest = JSON.parse(fs.readFileSync('src/manifest.json', 'utf8'));
if (manifest.manifest_version !== 3) {
  throw new Error('Manifest version is not 3');
}
if (!manifest.content_scripts?.[0]?.js?.includes('js/content.js')) {
  throw new Error('content script is missing');
}
console.log('smoke: manifest/content script ok');
