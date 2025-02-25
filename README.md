# Pretty logs Chrome extension

## Introduction

This extension makes checking logs on OpenSearch easier

## Development

### Requirements

- Node.js >= 20
- npm or yarn

### Run in Development Mode

```bash
npm install
npm run dev
# or
yarn install
yarn dev
```

## Build

### Build from Source

```bash
npm run build
# or
yarn build
```

After building, the output files will be available in the `dist` folder.

### Download Assets from GitHub

You can also download the pre-built `dist` folder from the latest release on the GitHub repository.

## Install Extension in Browsers

### Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select the `dist` folder

### Firefox

1. Open Firefox and go to `about:addons`
2. Enable "Debug mode"
3. Click "Load Temporary Add-on..."
4. Select the `manifest.json` file in the `dist` folder
